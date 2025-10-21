import { searchResultLocators } from "../../locators/amazon/searchResultLocators";

class SearchResultPage {
    sortByPriceHightToLow() {
        cy.xpath(searchResultLocators.buttonSortBy, { timeout: 20000 }).should('be.visible').click();
        cy.xpath(searchResultLocators.optionSortPriceHighToLow).should('be.visible').click();
        cy.wait(2000);
        cy.url().should('include', 'price-desc-rank');
    }

    getFirstProductNameInSearchResults() {
        cy.xpath(searchResultLocators.firstProductNameInSearchResults, { timeout: 60000 }).should('be.visible');
        return cy.xpath(searchResultLocators.firstProductNameInSearchResults).invoke('text');
    }

    getFirstProductPriceInSearchResults() {
        cy.xpath(searchResultLocators.firstProductPriceInSearchResults, { timeout: 60000 });
        return cy.xpath(searchResultLocators.firstProductPriceInSearchResults).invoke('text');
    }

    clickAddToCartButton() {
        cy.wait(2000); 
        cy.xpath(searchResultLocators.buttonAddToCart).click();
    }

}

export const searchResultPage = new SearchResultPage();