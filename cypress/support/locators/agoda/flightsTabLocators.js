import 'cypress-xpath';

export const flightsTabLocators = {
    roundTripOption: `//button[@label="Round-trip"]`,
    oneWayOption: `//button[@label="One-way"]`,
    departureInput: `//input[@id="flight-origin-search-input"]`,
    searchSuggestions: `//span[@data-selenium="suggestion-text"]`,
    destinationInput: `//input[@id="flight-destination-search-input"]`,
    departureDateInput: `//div[@data-selenium="flight-date-selector"]/div[@class="SearchBoxTextDescription__title"]`,
    departureDateDesc: `//div[@data-selenium="date-selector-desc"]`,
    occupancyInput: `//div[@data-component="flight-search-occupancy"]/div[@class="SearchBoxTextDescription__title"]`,
    adultOccupancyText: `//span[contains(text(), 'Adult')]`,
    adultOccupancyDecreaseButton: `//button[@data-element-name="flight-occupancy-adult-decrease"]`,
    adultOccupancyIncreaseButton: `//button[@data-element-name="flight-occupancy-adult-increase"]`,
    childOccupancyText: `//span[text()='Children (2-11yrs)']`,
    childOccupancyDecreaseButton: `//button[@data-element-name="flight-occupancy-children-decrease"]`,
    childOccupancyIncreaseButton: `//button[@data-element-name="flight-occupancy-children-increase"]`,
    infantOccupancyText: `//span[text()='Infants (below 2yrs)']`,
    infantOccupancyDecreaseButton: `//button[@data-selenium="infants-decrease-button"]`,
    infantOccupancyIncreaseButton: `//button[@data-element-name="flight-occupancy-infant-increase"]`,
    cabinOptionEconomy: `//button[@data-element-object-id="economy"]`,
    cabinOptionPremiumEconomy: `//button[@data-element-object-id="premium-economy"]`,
    cabinOptionBusiness: `//button[@data-element-object-id="business"]`,
    cabinOptionFirstClass: `//button[@data-element-object-id="first"]`,
    searchButton: `//span[text()='SEARCH FLIGHTS']`
};