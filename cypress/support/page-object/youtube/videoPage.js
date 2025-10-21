import { videoPageLocators } from "../../locators/youtube/videoPageLocators";

class VideoPage{
    getVideoTitle() {
        cy.xpath(videoPageLocators.videoTitle, { timeout: 60000 }).should('be.visible');
        return cy.xpath(videoPageLocators.videoTitle).invoke('text');
    }

    getVideoTitleInRecommendationSection() {
        cy.xpath(videoPageLocators.videoTitleInRecommendationSection, { timeout: 60000 }).should('be.visible');
        return cy.xpath(videoPageLocators.videoTitleInRecommendationSection).invoke('text');
    }

    getVideoGenreYearReleaseAndDuration() {
        cy.xpath(videoPageLocators.videoGenreYearReleaseAndDuration, { timeout: 60000 }).should('exist');
        return cy.xpath(videoPageLocators.videoGenreYearReleaseAndDuration).invoke('text');
    }

    getVideoAgeLimit() {
        cy.xpath(videoPageLocators.videoAgeLimit, { timeout: 60000 }).should('be.visible');
        return cy.xpath(videoPageLocators.videoAgeLimit).invoke('text');
    }

    getVideoAgeRating() {
        cy.xpath(videoPageLocators.videoAgeRating, { timeout: 60000 }).should('be.visible');
        return cy.xpath(videoPageLocators.videoAgeRating).invoke('text');
    }

    getVideoYearRelease() {
        cy.xpath(videoPageLocators.videoYearRelease, { timeout: 60000 }).should('be.visible');
        return cy.xpath(videoPageLocators.videoYearRelease).invoke('text');
    }

    getVideoDuration() {
        cy.xpath(videoPageLocators.videoDuration, { timeout: 60000 }).should('be.visible');
        return cy.xpath(videoPageLocators.videoDuration).invoke('text');
    }
}

export const videoPage = new VideoPage();