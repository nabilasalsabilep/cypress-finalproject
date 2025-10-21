import { customerInformationPageLocators } from "../../locators/agoda/customerInformationPageLocators";
class CustomerInformationPage {

    getFirstStepperName() {
        return cy.xpath(customerInformationPageLocators.firstStepperName, { timeout: 60000 }).should('be.visible');
    }

    verifyFirstStepperNameIsActive() {
        this.getFirstStepperName().should("have.attr", "aria-current", "step");
    }

    getPageTitle() {
        return cy.xpath(customerInformationPageLocators.pageTitle);
    }

    getInitialPrice() {
        cy.xpath(customerInformationPageLocators.initialPrice, { timeout: 120000 }).should('be.visible')
        return cy.xpath(customerInformationPageLocators.initialPrice).invoke('text');
    }

    getBaseFare() {
        return cy.xpath(customerInformationPageLocators.baseFare).invoke('text');
    }

    getTaxesAndFees() {
        return cy.xpath(customerInformationPageLocators.taxesAndFees).invoke('text');
    }

    getDiscountAmount() {
        return cy.xpath(customerInformationPageLocators.discountAmount).invoke('text');
    }

    getTotalPrice() {
        return cy.xpath(customerInformationPageLocators.totalPrice).invoke('text');
    }

    enterContactFirstName(contactFirstName) {
        cy.xpath(customerInformationPageLocators.firstNameInput, { timeout: 120000 }).should('be.visible').type(contactFirstName);
    }

    enterContactLastName(contactLastName) {
        cy.xpath(customerInformationPageLocators.lastNameInput).type(contactLastName);
    }

    enterContactEmail(contactEmail) {
        cy.xpath(customerInformationPageLocators.emailInput).type(contactEmail);
    }

    selectContactCountryOfResidence(country) {
        cy.xpath(customerInformationPageLocators.countryOfResidenceDropdown, { timeout: 1000 }).scrollIntoView().should('be.visible');              
        cy.wait(1000);
        cy.xpath(customerInformationPageLocators.countryOfResidenceDropdown).click();
        cy.xpath(customerInformationPageLocators.searchCountryInput).type(country);
        cy.xpath(customerInformationPageLocators.firstCountryOption).click();
        cy.xpath(customerInformationPageLocators.countryOfResidenceDropdown).click();
    }

    enterContactPhoneNumberCountryCode(countryCode) {
        cy.xpath(customerInformationPageLocators.phoneNumberCountryCodeDropdown, { timeout: 1000 }).scrollIntoView().should('be.visible');              
        cy.wait(1000);
        cy.xpath(customerInformationPageLocators.phoneNumberCountryCodeDropdown).click();
        cy.wait(1000);
        cy.xpath(customerInformationPageLocators.searchCountryInput).type(countryCode);
        cy.xpath(customerInformationPageLocators.firstCountryOption).click();
        cy.xpath(customerInformationPageLocators.phoneNumberCountryCodeDropdown).click();
    }

    enterContactPhoneNumber(phoneNumber) {
        cy.xpath(customerInformationPageLocators.phoneNumberInput).type(phoneNumber);
    }

    selectFemaleGenderForPassenger() {
        cy.xpath(customerInformationPageLocators.genderFemaleOption).click();
    }

    enterPassengerFirstAndMiddleName(passengerFirstAndMiddleName) {
        cy.xpath(customerInformationPageLocators.passengerFirstandMiddleNameInput).type(passengerFirstAndMiddleName);
    }

    enterPassengerLastName(passengerLastName) {
        cy.xpath(customerInformationPageLocators.passengerLastNameInput).type(passengerLastName);
    }

    enterPassengerDateOfBirth(passengerDayOfBirth, passengerYearOfBirth) {
        cy.xpath(customerInformationPageLocators.passengerDayOfBirthInput).type(passengerDayOfBirth);
        cy.xpath(customerInformationPageLocators.passengerMonthOfBirthDropdown).click();
        cy.xpath(customerInformationPageLocators.firstMonthOption).click();
        cy.xpath(customerInformationPageLocators.passengerYearOfBirthInput).type(passengerYearOfBirth);
    }

    selectPassengerNationality(country) {
        cy.xpath(customerInformationPageLocators.passengerNationalityDropdown).click();
        cy.xpath(customerInformationPageLocators.searchCountryInput).type(country);
        cy.xpath(customerInformationPageLocators.firstCountryOption).click();
    }

    enterPassportNumber(passportNumber) {
        cy.xpath(customerInformationPageLocators.passportNumberInput).type(passportNumber);
    }

    selectPassportCountryOfIssue(country) {
        cy.xpath(customerInformationPageLocators.countryOfIssueDropdown).click();
        cy.xpath(customerInformationPageLocators.searchCountryInput).type(country);
        cy.xpath(customerInformationPageLocators.firstCountryOption).click();
    }

    enterPassportExpiryDate(expiryDay, expiryYear) {
        cy.xpath(customerInformationPageLocators.passportExpiryDateInput).type(expiryDay);
        cy.xpath(customerInformationPageLocators.passportExpiryMonthDropdown).click();
        cy.xpath(customerInformationPageLocators.firstMonthOption).click();
        cy.xpath(customerInformationPageLocators.passportExpiryYearInput).type(expiryYear);
    }

    selectTravelProtectionNoOption() {
        cy.xpath(customerInformationPageLocators.travelProtectionNoOption).click();
    }

    clickContinueToPaymentButton() {
        cy.xpath(customerInformationPageLocators.continueToPaymentButton).click();
    }

    verifyPopUpConformationToUpgradeSupportLevelIsVisible() {
        cy.wait(1000);
        cy.xpath(customerInformationPageLocators.popUpConformationToUpgradeSupportLevel).should("be.visible");
    }

    clickPopUpConformationToUpgradeSupportLevelNoThanksButton() {
        cy.xpath(customerInformationPageLocators.popUpConformationToUpgradeSupportLevelNoThanksButton).click();
    }
}

export const customerInformationPage = new CustomerInformationPage();