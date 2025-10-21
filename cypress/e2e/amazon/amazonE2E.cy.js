require('cypress-xpath');

import { homePage } from '../../support/page-object/amazon/homePage';
import { cartPage } from '../../support/page-object/amazon/cartPage';

describe('Amazon Page E2E Test', () => {

    let productName;
    let productPrice;

    before(() => {
        cy.viewport(1920, 1080);
    });

    it('Should load Amazon page and add to cart a product', () => {
        // Visit Amazon homepage
        cy.visit(Cypress.env("amazonBaseUrl"));

        // Verify Amazon logo is visible
        homePage.getAmazonLogo();
        homePage.dismissDeliverToToastIfVisible();
        homePage.enterSearchKeyword('chair');
        homePage.clickSearchButton();

        // Get first product name and price in search results
        homePage.getFirstProductNameInSearchResults().then((text) => {
            productName = text.trim();
            expect (productName).not.to.be.empty;
            cy.log(`Product Name: ${productName}`);
        });

        homePage.getFirstProductPriceInSearchResults().then((text) => {
            productPrice = text.trim().replace(/(\$|IDR|Rp|\s)/g, '');
            expect (productPrice).not.to.be.empty;
            cy.log(`Product Price: ${productPrice}`);
        });

        // Add first product to cart
        homePage.clickAddToCartButton();

        // Go to cart and verify cart count
        homePage.clickCartMenu();
        homePage.getCartCount().then((cartCount) => {
            expect(cartCount).to.equal('1');
        });

        // Verify product details in cart
        cartPage.getCartTitle();

        cartPage.getFirstProductNameInCart(productName).then((nameInCart) => {
            expect(nameInCart).to.contain(productName);
        });

        cartPage.getFirstProductPriceInCart(productPrice).then((priceInCart) => {
            priceInCart = priceInCart.trim().replace(/(\$|IDR|Rp|\s)/g, '');
            expect(priceInCart).to.equal(productPrice);
        });

        cartPage.getFirstProductQtyInCart().then((qty) => {
            expect(qty).to.equal('1');
        });
    });
});