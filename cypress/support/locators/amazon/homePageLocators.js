import 'cypress-xpath';

export const homePageLocators = {
    amazonLogo: `//div[@id="nav-logo"]/a[@aria-label="Amazon"]`,
    searchBox: `//input[@id="twotabsearchtextbox"]`,
    searchButton: `//input[@id="nav-search-submit-button"]`,
    deliverToToast: `//div[@id="glow-toaster-body"]`,
    dismissDeliverToToastButton: `//input[@data-action-type="DISMISS"]`,
    firstProductNameInSearchResults: `(//div[@data-cy="title-recipe" and not(.//*[contains(.,'Sponsored')])and not(.//a[contains(@href, '/sspa/')])]/a/h2/span)[1]`,
    firstProductPriceInSearchResults: `(//div[@data-component-type='s-search-result' and not(.//span[contains(text(),'Sponsored')]) and not(.//a[contains(@href,'/sspa/')])]//span[contains(@class,'a-price')]/span[@class='a-offscreen'])[1]`,
    buttonAddToCart: `((//div[@data-component-type='s-search-result' and not(.//*[contains(.,'Sponsored')])and not(.//a[contains(@href, '/sspa/')])] )//button[@name='submit.addToCart'])[1]`,
    cartMenu: `//a[@id="nav-cart"]`,
    cartCount: `//a[@id="nav-cart"]/descendant::span[@id="nav-cart-count"]`
};