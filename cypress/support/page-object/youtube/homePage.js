import { homePageLocators } from "../../locators/youtube/homePageLocators";

class HomePage {
    getYoutubeLogo() {
        return cy.xpath(homePageLocators.youtubeLogo, { timeout: 60000 }).should('be.visible');
    }

    getExploreSectionTitle() {
        return cy.xpath(homePageLocators.exploreSectionTitle, { timeout: 60000 }).should('be.visible');
    }

    clickMoviesAndShowsSectionMenu() {
        cy.xpath(homePageLocators.moviesAndShowsMenu, { timeout: 60000 }).should('be.visible').click();
    }
}

export const homePage = new HomePage();