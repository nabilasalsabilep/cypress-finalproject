require('cypress-xpath');
import { homePage } from "../../support/page-object/agoda/homePage";
import { flightsTabPage } from "../../support/page-object/agoda/flightsTabPage";
import { flightSearchListPage } from "../../support/page-object/agoda/flightSearchListPage";
import { customerInformationPage } from "../../support/page-object/agoda/customerInformationPage";
import { paymentInformationPage } from "../../support/page-object/agoda/paymentInformationPage";


describe("Agoda Flight Booking E2E Test", () => {
    let flightData;
    let customerData;
    let departureTime24h;
    let arrivalTime24h;
    let flightName;
    let departureDate;
    let departureTime;
    let arrivalTime;
    let departureCode;
    let arrivalCode;
    let baseFare;
    let taxesAndFee;
    let discountAmount;
    let initialPrice;
    let totalPrice;

    before(() => {
        cy.fixture('flightInformationData').then((data) => {
            flightData = data;
        });

        cy.fixture('agodaCustomerData').then((data) => {
        customerData = data;
        });
    });

    it("Should book a flight successfully from search to payment page", () => {

        // Visit Agoda homepage
        cy.visit(Cypress.env("agodaBaseUrl"));
    
        // Verify homepage is loaded
        homePage.getWelcomeMessage().should("eq", "See the world for less");
    
        // Navigate to Flight tab
        homePage.clickFlightTab();

        // Close cookie consent popup if it appears
        homePage.clickCloseCookieButton();
    
        // Fill in flight search details (pakai flightData)
        flightsTabPage.searchFlyingFrom(flightData.departureFrom);
        flightsTabPage.searchFlyingTo(flightData.arrivalTo);

        const tomorrowDate = flightsTabPage.getTomorrowDate();
        flightsTabPage.setDepartureDate(tomorrowDate);
        flightsTabPage.getDepartureDateDescription().then((text) => {
            departureDate = text.trim();
            departureDate = departureDate.replace(/(\d{1,2})\s(\w{3})\s(\d{4})/, '$2 $1, $3');
        });
        const departureDateDesc = flightsTabPage.getDepartureDateDescription();
        flightsTabPage.setOccupancy();
        flightsTabPage.clickSearchFlightsButton();
    
        // Verify flight search results page is loaded
        flightSearchListPage.getFlightSearchListTitle().should("have.text", "Departure to " + flightData.arrivalTo);
    
        // Sort flights by departure time (early to late)
        flightSearchListPage.sortByDepartureEarlyToLate();

        // Get all data from the first flight option
        flightSearchListPage.getFirstFlightOption().then((text) => {
            flightName = text.trim();
            cy.log("Flight Name: " + flightName);
        });

        flightSearchListPage.getFirstFlightDepartureTime().then(($departureTime) => {
            departureTime = $departureTime;
            departureTime24h = flightSearchListPage.convertTo24Hour(departureTime);
            cy.log("Departure Time: " + departureTime);
            
        });

        flightSearchListPage.getFirstFlightArrivalTime().then(($arrivalTime) => {
            arrivalTime = $arrivalTime;
            arrivalTime24h = flightSearchListPage.convertTo24Hour(arrivalTime);
            cy.log("Arrival Time: " + arrivalTime);
        });

        flightSearchListPage.getFirstFlightDepartureCode().then((text) => {
            departureCode = text.trim();
        });

        flightSearchListPage.getFirstFlightArrivalCode().then((text) => {
            arrivalCode = text.trim();
        });

        // Select the first flight option
        flightSearchListPage.clickExpandFlightDetails();
        flightSearchListPage.clickSelectFirstFlight();

        // Verify customer information page is loaded
        customerInformationPage.getFirstStepperName().should("have.text", "Customer information");
        customerInformationPage.verifyFirstStepperNameIsActive();

        // Get price details from Customer Information Page
        customerInformationPage.getInitialPrice().then((text) => {
            initialPrice = text.trim();
            cy.log("Initial Price: " + initialPrice);
        });

        customerInformationPage.getBaseFare().then((text) => {
            baseFare = text.trim();
            cy.log("Initial Price: " + baseFare);
        });

        customerInformationPage.getTaxesAndFees().then((text) => {
            taxesAndFee = text.trim();
            cy.log("Initial Price: " + taxesAndFee);
        });

        customerInformationPage.getDiscountAmount().then((text) => {
            discountAmount = text.trim();
            cy.log("Discount Amount: " + discountAmount);
        });

        customerInformationPage.getTotalPrice().then((text) => {
            totalPrice = text.trim();
            cy.log("Price After Discount: " + totalPrice);
        });

        // Fill in contact information using customerData
        customerInformationPage.enterContactFirstName(customerData.contactFirstName);
        customerInformationPage.enterContactLastName(customerData.contactLastName);
        customerInformationPage.enterContactEmail(customerData.contactEmail);
        customerInformationPage.selectContactCountryOfResidence(customerData.country);
        customerInformationPage.enterContactPhoneNumberCountryCode(customerData.countryCode);
        customerInformationPage.enterContactPhoneNumber(customerData.contactPhoneNumber);
    
        // Fill in customer information using customerData
        customerInformationPage.selectFemaleGenderForPassenger();
        customerInformationPage.enterPassengerFirstAndMiddleName(customerData.passengerFirstAndMiddleName);
        customerInformationPage.enterPassengerLastName(customerData.passengerLastName);
        customerInformationPage.enterPassengerDateOfBirth(
            customerData.passengerDayOfBirth,
            customerData.passengerYearOfBirth
        );
        customerInformationPage.selectPassengerNationality(customerData.country);
        
        customerInformationPage.selectTravelProtectionNoOption();
        customerInformationPage.clickContinueToPaymentButton();

        // Verify popup to confirm no travel protection
        customerInformationPage.verifyPopUpConformationToUpgradeSupportLevelIsVisible();
        customerInformationPage.clickPopUpConformationToUpgradeSupportLevelNoThanksButton();
    
        // Verify payment page is loaded
        paymentInformationPage.getSecondStepperName().should("have.text", "Payment information");
        paymentInformationPage.verifySecondStepperNameIsActive();

        // Verify summary details on payment page
        paymentInformationPage.getSummaryFlightName().then((text) => {
            expect(text.trim()).to.eq(flightName);
        });
        paymentInformationPage.getSummaryDepartureDate().then((text) => {
            expect(text.trim()).to.eq(`Depart - ${departureDate}`);
        });
        paymentInformationPage.getSummaryDepartureTime().then((text) => {
            expect(text.trim()).to.eq(departureCode + ' ' + departureTime24h);
        });
        paymentInformationPage.getSummaryArrivalTime().then((text) => {
            expect(text.trim()).to.eq(arrivalCode + ' ' + arrivalTime24h);
        });
        paymentInformationPage.getInitialPrice().then((text) => {
            expect(text.trim()).to.eq(initialPrice);
        });
        paymentInformationPage.getBaseFare().then((text) => {
            expect(text.trim()).to.eq(baseFare);
        });
        paymentInformationPage.getTaxesAndFees().then((text) => {
            expect(text.trim()).to.eq(taxesAndFee);
        });
        paymentInformationPage.getDiscountPrice().then((text) => {
            expect(text.trim()).to.eq(discountAmount);
        });
        paymentInformationPage.getTotalPrice().then((text) => {
            expect(text.trim()).to.eq(totalPrice);
        });
    
        // Verify Pay Now button is visible
        paymentInformationPage.verifyPayNowButtonIsVisible();
    
        // Verify contact details preview
        paymentInformationPage.getContactDetailsSection().then((text) => {
            expect(text.trim()).to.eq("Contact details");
        });
        
        paymentInformationPage.getContactNamePreview().then((text) => {
            const expectedName = `${customerData.contactFirstName} ${customerData.contactLastName}`;
            expect(text.trim()).to.eq(expectedName);
        });
        
        paymentInformationPage.getContactEmailPreview().then((text) => {
            expect(text.trim()).to.eq(customerData.contactEmail);
        });
        
        paymentInformationPage.getContactPhonePreview().then((text) => {
            expect(text.trim()).to.eq(`+${customerData.countryCode} ${customerData.contactPhoneNumber}`);
        });
        
        paymentInformationPage.getPassengerDetailsSection().then((text) => {
            expect(text.trim()).to.eq("Passenger details");
        });
        
        paymentInformationPage.getPassengerNamePreview().then((text) => {
            const expectedPassengerName = `${customerData.passengerFirstAndMiddleName} ${customerData.passengerLastName}`;
            expect(text.trim()).to.eq(expectedPassengerName);
        });
    });
});

Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore ResizeObserver loop errors
    if (err.message.includes('ResizeObserver loop completed')) {
        return false;
    }
});