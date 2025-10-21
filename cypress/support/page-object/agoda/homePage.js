import { homePageLocators } from "../../locators/agoda/homePageLocators";
import { headerLocators } from "../../locators/agoda/headerLocators";

class HomePage {
  getLogo(){
    cy.xpath(headerLocators.logo).should('be.visible');
  }

  getWelcomeMessage() {
    cy.xpath(homePageLocators.welcomeMessage, { timeout: 20000 }).should('be.visible').should('have.text', 'See the world for less');
    return cy.xpath(homePageLocators.welcomeMessage).invoke('text');
  }

  clickFlightTab() {
    cy.xpath(homePageLocators.flightTab).click();
  }

  clickCloseCookieButton() {
    cy.xpath(homePageLocators.closeCookieButton).click();
  }
}

export const homePage = new HomePage();