import { homePageLocators } from "../../locators/amazon/homePageLocators";

class HomePage {
    getAmazonLogo() {
        return cy.xpath(homePageLocators.amazonLogo, { timeout: 60000 }).should('be.visible');
    }

    enterSearchKeyword(keyword) {
        cy.xpath(homePageLocators.searchBox, { timeout: 60000 }).should('be.visible').type(keyword);
    }

    clickSearchButton() {
        cy.xpath(homePageLocators.searchButton).click();
    }

    dismissDeliverToToastIfVisible() {
        cy.xpath(homePageLocators.deliverToToast, { timeout: 5000 }).then(($toast) => {
            if ($toast.is(':visible')) {
                cy.xpath(homePageLocators.dismissDeliverToToastButton).click();
            }
        });
    }

    getFirstProductNameInSearchResults() {
        cy.xpath(homePageLocators.firstProductNameInSearchResults, { timeout: 60000 }).should('be.visible');
        return cy.xpath(homePageLocators.firstProductNameInSearchResults).invoke('text');
    }

    getFirstProductPriceInSearchResults() {
        cy.xpath(homePageLocators.firstProductPriceInSearchResults, { timeout: 60000 });
        return cy.xpath(homePageLocators.firstProductPriceInSearchResults).invoke('text');
    }

    clickAddToCartButton() {
        cy.wait(2000); 
        cy.xpath(homePageLocators.buttonAddToCart).click();
    }

    clickCartMenu() {
        cy.wait(2000);
        cy.xpath(homePageLocators.cartMenu).click();
    }

    getCartCount() {
        cy.xpath(homePageLocators.cartCount, { timeout: 60000 }).should('be.visible');
        return cy.xpath(homePageLocators.cartCount).invoke('text');
    }
}

export const homePage = new HomePage();