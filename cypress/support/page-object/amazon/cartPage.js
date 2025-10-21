import { cartPageLocators } from "../../locators/amazon/cartPageLocators";

class CartPage {

    getCartTitle() {
        return cy.xpath(cartPageLocators.cartTitle, { timeout: 20000 })
            .should('be.visible');
    }

    getFirstProductNameInCart(productName) {
        const safeName = (productName || '').substring(0, 15);
        const locator = cartPageLocators.firstProductNameInCart.replace('__PRODUCT_NAME__', safeName);
        return cy.xpath(locator, { timeout: 30000 })
            .invoke('text')
            .then(text => text.trim());
    }

    getFirstProductPriceInCart() {
        return cy.xpath(cartPageLocators.firstProductPriceInCart, { timeout: 30000 })
            .invoke('text')
            .then(text => text.trim());
    }

    getFirstProductQtyInCart() {
        return cy.xpath(cartPageLocators.firstProductQtyInCart, { timeout: 20000 })
            .should('be.visible')
            .invoke('attr', 'data-old-value');
    }

    getTotalPriceInCart() {
        return cy.xpath(cartPageLocators.totalPriceInCart, { timeout: 20000 })
            .should('be.visible')
            .invoke('text')
            .then(text => text.trim());
    }
}

export const cartPage = new CartPage();