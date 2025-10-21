import { flightsTabLocators } from "../../locators/agoda/flightsTabLocators.js";
import { homePageLocators } from "../../locators/agoda/homePageLocators.js";

class FlightsTabPage {
    searchFlyingFrom(departureFrom) {
        cy.xpath(flightsTabLocators.departureInput).click();
        cy.xpath(flightsTabLocators.departureInput).type(departureFrom);
        cy.wait(2000);
        cy.xpath(flightsTabLocators.searchSuggestions).first().click();
        return cy.xpath(flightsTabLocators.departureInput);
    }

    searchFlyingTo(arrivalTo) {
        cy.xpath(flightsTabLocators.destinationInput).click();
        cy.xpath(flightsTabLocators.destinationInput).type(arrivalTo);
        cy.wait(2000);
        cy.xpath(flightsTabLocators.searchSuggestions).first().click();
        return cy.xpath(flightsTabLocators.destinationInput);
    }

    getTomorrowDate() {
        const today = new Date()
        const tomorrow = new Date(today)
        tomorrow.setDate(today.getDate() + 1)
    
        const year = tomorrow.getFullYear()
        const month = (tomorrow.getMonth() + 1).toString().padStart(2, '0')
        const day = tomorrow.getDate().toString().padStart(2, '0')
    
        return `${year}-${month}-${day}`
    }

    setDepartureDate(tomorrowDate) {
        cy.scrollTo('top', { duration: 500 }); 
        cy.wait(1000);
        cy.get(`[data-selenium-date="${tomorrowDate}"]`, { timeout: 20000 }).should('be.visible').click();
    }

    getDepartureDate() {
        return cy.xpath(flightsTabLocators.departureDateInput).invoke('text');
    }

    getDepartureDateDescription() {
        return cy.xpath(flightsTabLocators.departureDateDesc).invoke('text');
    }

    setOccupancy() {
        cy.wait(2000);
        cy.xpath(flightsTabLocators.adultOccupancyText).should('be.visible');
        cy.xpath(flightsTabLocators.childOccupancyText).should('be.visible');
        cy.xpath(flightsTabLocators.infantOccupancyText).should('be.visible');
        cy.xpath(flightsTabLocators.cabinOptionEconomy).should('be.visible');
        cy.xpath(flightsTabLocators.cabinOptionEconomy).click();
        cy.xpath(flightsTabLocators.occupancyInput).click(); // Close the occupancy selector
    }
    
    clickSearchFlightsButton() {
        cy.xpath(flightsTabLocators.searchButton).click();
    }
}

export const flightsTabPage = new FlightsTabPage();