import 'cypress-xpath';

export const flightSearchListPageLocators = {
    titleText: `//h2[@data-testid="title"]`,
    sortByDropdown: `//button[@data-element-name="flight-sort"]`,
    sortByOptionPriceLowToHigh: `//p[text()='Price per person']`,
    sortByOptionCheapShortFlight: `//p[text()='Best']`,
    sortByOptionTotalDurationShortToLong: `//span[text()='Total journey time']`,
    sortByOptionDepartureEarlyToLate: `//span[text()='Departure time']`,
    sortByOptionArrivalEarlyToLate: `//span[text()='Arrival time']`,
    sortByOptionStopsFewestStops: `//span[text()='Stops']`,
    flightName: `(//div[@data-testid='flightCard-flight-detail'][.//p[contains(normalize-space(.), 'Malaysia Airlines')]]//p[contains(@class,'iYbjBz')])[1]`,
    flightDepartureTime: `(//div[@data-testid='flightCard-flight-detail'][.//p[contains(normalize-space(.), 'Malaysia Airlines')]]//div[@data-testid='departure-time']//p)[1]`,
    flightArrivalTime: `(//div[@data-testid='flightCard-flight-detail'][.//p[contains(normalize-space(.), 'Malaysia Airlines')]]//div[@data-testid='arrival-time']//p)[1]`,
    flightDepartureCode: `(//div[@data-testid='flightCard-flight-detail'][.//p[contains(normalize-space(.), 'Malaysia Airlines')]]//p[@data-testid='origin'])[1]`,
    flightArrivalCode: `(//div[@data-testid='flightCard-flight-detail'][.//p[contains(normalize-space(.), 'Malaysia Airlines')]]//p[@data-testid='destination'])[1]`,
    flightDuration: `(//div[@data-testid='flightCard-flight-detail'][.//p[contains(normalize-space(.), 'Malaysia Airlines')]]//span[@data-testid='duration'])[1]`,
    flightDiscountPrice: `(//div[@data-testid='flightCard-flight-detail'][.//p[contains(normalize-space(.), 'Malaysia Airlines')]]//span[@data-element-name='flight-price-breakdown']//span[contains(text(), 'OFF')])[1]`,
    flightInitialPrice: `(//div[@data-testid='flightCard-flight-detail'][.//p[contains(normalize-space(.), 'Malaysia Airlines')]]//span[@data-testid='crossout-price'])[1]`,
    flightPriceAfterDiscount: `(//div[@data-testid='flightCard-flight-detail'][.//p[contains(normalize-space(.), 'Malaysia Airlines')]]//span[@data-element-name='flight-price-breakdown']//span[not(contains(text(), 'OFF')) and not(@data-testid='crossout-price')])[last()]`,
    buttonSelectFirstFlight: `(//div[@data-testid='flightCard-flight-detail'][.//p[contains(normalize-space(.), 'Malaysia Airlines')]]/following::button[@data-element-name='flight-detail-select-button'])[1]`
};