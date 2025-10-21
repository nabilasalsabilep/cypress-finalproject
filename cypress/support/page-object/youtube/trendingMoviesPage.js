import { trendingMoviesPageLocators } from "../../locators/youtube/trendingMoviesPageLocators";

class TrendingMoviesPage{
    getTrendingMoviesSectionTitle() {
        cy.xpath(trendingMoviesPageLocators.trendingMoviesSectionTitle, { timeout: 60000 }).should('be.visible');
        return cy.xpath(trendingMoviesPageLocators.trendingMoviesSectionTitle).invoke('text');
    }

    getTrendingTitle() {
        cy.xpath(trendingMoviesPageLocators.trendingTitle, { timeout: 60000 }).should('be.visible');
        return cy.xpath(trendingMoviesPageLocators.trendingTitle).invoke('text');
    }

    getThirdTrendingMovieTitle() {
        cy.xpath(trendingMoviesPageLocators.thirdTrendingMovieTitle, { timeout: 60000 }).should('be.visible');
        return cy.xpath(trendingMoviesPageLocators.thirdTrendingMovieTitle).invoke('text');
    }

    clickThirdTrendingMovie() {
        cy.xpath(trendingMoviesPageLocators.thirdTrendingMovieTitle, { timeout: 60000 }).should('be.visible').click();
    }

    getThirdTrendingMovieGenreAndYearRelease() {
        cy.xpath(trendingMoviesPageLocators.thirdTrendingMovieGenreAndYearRelease, { timeout: 60000 }).should('be.visible');
        return cy.xpath(trendingMoviesPageLocators.thirdTrendingMovieGenreAndYearRelease).invoke('text');
    }

    getThirdTrendingMovieAgeLimit() {
        cy.xpath(trendingMoviesPageLocators.thirdTrendingMovieAgeLimit, { timeout: 60000 }).should('be.visible');
        return cy.xpath(trendingMoviesPageLocators.thirdTrendingMovieAgeLimit).invoke('text');
    }

    getThirdTrendingMovieDuration() {
        cy.xpath(trendingMoviesPageLocators.thirdTrendingMovieDuration, { timeout: 60000 }).should('be.visible');
        return cy.xpath(trendingMoviesPageLocators.thirdTrendingMovieDuration).invoke('text');
    }
}

export const trendingMoviesPage = new TrendingMoviesPage();