import { paymentInformationPageLocators } from "../../locators/agoda/paymentInformationPageLocators";

class PaymentInformationPage {
    getSecondStepperName() {
        return cy.xpath(paymentInformationPageLocators.secondStepperName, { timeout: 60000 }).should('be.visible');
    }

    verifySecondStepperNameIsActive() {
        this.getSecondStepperName().should("have.attr", "aria-current", "step");
    }

    getSummaryDepartureDate() {
        cy.xpath(paymentInformationPageLocators.summaryDepartureDate, { timeout: 120000 }).should('be.visible');
        return cy.xpath(paymentInformationPageLocators.summaryDepartureDate).invoke('text');
    }

    getSummaryDepartureCode() {
        return cy.xpath(paymentInformationPageLocators.summaryDepartureCode).invoke('text');
    }

    getSummaryArrivalCode() {
        return cy.xpath(paymentInformationPageLocators.summaryArrivalCode).invoke('text');
    }

    getSummaryDepartureTime() {
        return cy.xpath(paymentInformationPageLocators.summaryDepartureTime).invoke('text');
    }

    getSummaryArrivalTime() {
        return cy.xpath(paymentInformationPageLocators.summaryArrivalTime).invoke('text');
    }
    
    getSummaryFlightName() {
        return cy.xpath(paymentInformationPageLocators.summaryFlightName).invoke('text');
    }

    getInitialPrice() {
        return cy.xpath(paymentInformationPageLocators.summaryInitialPrice).invoke('text');
    }

    getBaseFare() {
        return cy.xpath(paymentInformationPageLocators.summaryBaseFarePrice).invoke('text');
    }

    getTaxesAndFees() {
        return cy.xpath(paymentInformationPageLocators.summaryTaxesAndFeesPrice).invoke('text');
    }

    getDiscountPrice() {
        return cy.xpath(paymentInformationPageLocators.summaryDiscount).invoke('text');
    }

    getTotalPrice() {
        return cy.xpath(paymentInformationPageLocators.summaryTotalPrice).invoke('text');
    }

    getCreditOrDebitCardOption() {
        cy.xpath(paymentInformationPageLocators.creditOrDebitCardOption, { timeout: 120000 }).should('be.visible');
        return cy.xpath(paymentInformationPageLocators.creditOrDebitCardOption).invoke('text');
    }

    getDigitalPaymentOption() {
        return cy.xpath(paymentInformationPageLocators.digitalPaymentOption).invoke('text');
    }

    getBankTransferOption() {
        return cy.xpath(paymentInformationPageLocators.bankTransferOption).invoke('text');
    }

    verifyPayNowButtonIsVisible() {
        cy.xpath(paymentInformationPageLocators.payNowButton).should('be.visible');
    }

    getContactDetailsSection() {
        return cy.xpath(paymentInformationPageLocators.contactDetailsSection).invoke('text');
    }

    getContactNamePreview() {
        return cy.xpath(paymentInformationPageLocators.contactNamePreview).invoke('text');
    }

    getContactEmailPreview() {
        return cy.xpath(paymentInformationPageLocators.contactEmailPreview).invoke('text');
    }

    getContactPhonePreview() {
        return cy.xpath(paymentInformationPageLocators.contactPhonePreview).invoke('text');
    }

    getPassengerDetailsSection() {
        return cy.xpath(paymentInformationPageLocators.passengerDetailsSection).invoke('text');
    }

    getPassengerNamePreview() {
        return cy.xpath(paymentInformationPageLocators.passengerNamePreview).invoke('text');
    }
}

export const paymentInformationPage = new PaymentInformationPage();