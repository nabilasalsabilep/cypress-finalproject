import 'cypress-xpath';

export const cartPageLocators = {
    cartTitle: `//h2[@id="sc-active-items-header"]`,
    firstProductNameInCart: `//li[@class="sc-item-product-title-cont"]//span[@class="a-truncate-full a-offscreen" and contains(text(), '__PRODUCT_NAME__')]`,
    firstProductPriceInCart: `(//div[@class="sc-item-price-block"]//span[@class="a-offscreen"])[1]`,
    firstProductQtyInCart: `//span[@data-action="quantity"]`,
    totalPriceInCart: `//span[@id="sc-subtotal-amount-activecart"]/span`
};