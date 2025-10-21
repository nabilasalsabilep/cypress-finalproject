import 'cypress-xpath';

export const homePageLocators = {
    amazonLogo: `//div[@id="nav-logo"]/a[@aria-label="Amazon"]`,
    searchBox: `//input[@id="twotabsearchtextbox"]`,
    searchButton: `//input[@id="nav-search-submit-button"]`,
    deliverToToast: `//div[@id="glow-toaster-body"]`,
    dismissDeliverToToastButton: `//input[@data-action-type="DISMISS"]`,
    cartMenu: `//a[@id="nav-cart"]`,
    cartCount: `//a[@id="nav-cart"]/descendant::span[@id="nav-cart-count"]`
};