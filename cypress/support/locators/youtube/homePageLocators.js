import 'cypress-xpath';

export const homePageLocators = {
    youtubeLogo: `//div[@id="start"]//a[@class="yt-simple-endpoint style-scope ytd-topbar-logo-renderer"]//yt-icon[@id="logo-icon"]`,
    exploreSectionTitle: `//h3/yt-formatted-string[text()='Eksplorasi']`,
    moviesAndShowsMenu: `//yt-formatted-string[text()='Film']`
};