import 'cypress-xpath';

export const homePageLocators = {
    welcomeMessage: `//div[@class="WelcomeMessage__wrapper"]/h1[text()='See the world for less']`,
    closeCookieButton: `//button[@aria-label="Close"]`,
    flightTab: `//li[@id="tab-flight-tab"]`
};