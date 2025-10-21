import 'cypress-xpath';

export const searchResultLocators = {
    buttonSortBy: `//span[@class="a-dropdown-container"]`,
    optionSortPriceHighToLow: `//a[contains(text(),"Price: High to Low")]`,
    firstProductNameInSearchResults: `(//button[@name='submit.addToCart'])[1]/ancestor::div[@data-component-type='s-search-result']//div[@data-cy='title-recipe']/a/h2/span`,
    firstProductPriceInSearchResults: `((//button[@name='submit.addToCart'])[1]/ancestor::div[@data-component-type='s-search-result']//div[@data-cy='price-recipe']//span[@class='a-offscreen'])[1]`,
    buttonAddToCart: `((//div[@data-component-type='s-search-result' and not(.//*[contains(.,'Sponsored')])and not(.//a[contains(@href, '/sspa/')])] )//button[@name='submit.addToCart'])[1]`
};