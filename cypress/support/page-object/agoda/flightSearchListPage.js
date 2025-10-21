import { flightSearchListPageLocators } from "../../locators/agoda/flightSearchListPageLocators";

class FlightSearchListPage {
    getFlightSearchListTitle() {
        cy.wait(2000);
        return cy.xpath(flightSearchListPageLocators.titleText);
    }

    sortByDepartureEarlyToLate() {
        cy.xpath(flightSearchListPageLocators.sortByDropdown).click();
        cy.wait(2000);
        cy.xpath(flightSearchListPageLocators.sortByOptionDepartureEarlyToLate).click();
        cy.wait(2000);
    }

    getFirstFlightOption() {
        return cy.xpath(flightSearchListPageLocators.flightName).invoke('text');
    }

    getFirstFlightDepartureTime() {
        return cy.xpath(flightSearchListPageLocators.flightDepartureTime).invoke('text');
    }

    convertTo24Hour(time12h) {
        const date = new Date(`1970-01-01 ${time12h}`);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    getFirstFlightArrivalTime() {
        cy.wait(1000);
        cy.xpath(flightSearchListPageLocators.flightArrivalTime, { timeout: 60000 }).should('be.visible');
        return cy.xpath(flightSearchListPageLocators.flightArrivalTime).invoke('text');
    }

    getFirstFlightDepartureCode() {
        return cy.xpath(flightSearchListPageLocators.flightDepartureCode).invoke('text');
    }

    getFirstFlightArrivalCode() {
        return cy.xpath(flightSearchListPageLocators.flightArrivalCode).invoke('text');
    }

    getFirstFlightDuration() {
        return cy.xpath(flightSearchListPageLocators.flightDuration).invoke('text');
    }

    clickExpandFlightDetails() {
        cy.xpath(flightSearchListPageLocators.flightName).click();
    }

    clickSelectFirstFlight() {
        cy.wait(1000);
        cy.xpath(flightSearchListPageLocators.buttonSelectFirstFlight).click();
    }
}

export const flightSearchListPage = new FlightSearchListPage();