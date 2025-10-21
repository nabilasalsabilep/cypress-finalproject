require('cypress-xpath');

import { homePage } from '../../support/page-object/youtube/homePage';
import { trendingMoviesPage } from '../../support/page-object/youtube/trendingMoviesPage';
import { videoPage } from '../../support/page-object/youtube/videoPage';

describe('Youtube Page E2E Test', () => {

    let movieTitle;
    let movieGenreAndYearRelease;
    let movieAgeLimit;
    let movieDuration;

    before(() => {
        cy.viewport(1920, 1080);
    });

    it('Should verify title, age badge, and release year of the 3rd trending video on YouTube', () => {
        // Visit Youtube homepage
        cy.visit(Cypress.env("youtubeBaseUrl"));

        // Verify Youtube logo is visible
        homePage.getYoutubeLogo();

        // Verify Explore section title is visible
        homePage.getExploreSectionTitle();

        // Click Movies and Shows section menu
        homePage.clickMoviesAndShowsSectionMenu();

        // Verify Trending Movies section title 
        trendingMoviesPage.getTrendingMoviesSectionTitle().then((text) => {
            const trendingMoviesSectionTitle = text.trim();
            expect (trendingMoviesSectionTitle).to.equal('Film');
            cy.log(`Trending Movies Section Title: ${trendingMoviesSectionTitle}`);
        });
        
        // Verify Trending title
        trendingMoviesPage.getTrendingTitle().then((text) => {
            const trendingTitle = text.trim();
            expect (trendingTitle).to.equal('Terlaris');
            cy.log(`Trending Title: ${trendingTitle}`);
        });

        // Get third trending movie title
        trendingMoviesPage.getThirdTrendingMovieTitle().then((text) => {
            movieTitle = text.trim();
            expect (movieTitle).not.to.be.empty;
            cy.log(`Third Trending Movie Title: ${movieTitle}`);
        });

        // Get third trending movie genre and year release
        trendingMoviesPage.getThirdTrendingMovieGenreAndYearRelease().then((text) => {
            movieGenreAndYearRelease = text.trim();
            expect (movieGenreAndYearRelease).not.to.be.empty;
            cy.log(`Third Trending Movie Genre and Year Release: ${movieGenreAndYearRelease}`);
        });

        // Get third trending movie age limit
        trendingMoviesPage.getThirdTrendingMovieAgeLimit().then((text) => {
            movieAgeLimit = text.trim();
            expect (movieAgeLimit).not.to.be.empty;
            cy.log(`Third Trending Movie Age Limit: ${movieAgeLimit}`);
        });

        // Get third trending movie duration
        trendingMoviesPage.getThirdTrendingMovieDuration().then((text) => {
            movieDuration = text.trim();
            expect (movieDuration).not.to.be.empty;
            cy.log(`Third Trending Movie Duration: ${movieDuration}`);
        });

        // Click third trending movie to go to video page
        trendingMoviesPage.clickThirdTrendingMovie();

        // Verify video title
        videoPage.getVideoTitle().then((text) => {
            const videoTitle = text.trim();
            expect (videoTitle).not.to.be.empty;
            expect(videoTitle).to.equal(movieTitle);
            cy.log(`Video Title: ${videoTitle}`);
        });

        // Verify video title in recommendation section
        videoPage.getVideoTitleInRecommendationSection().then((text) => {
            const videoTitleInRecommendationSection = text.trim();
            expect (videoTitleInRecommendationSection).not.to.be.empty;
            expect(videoTitleInRecommendationSection).to.equal(movieTitle);
            cy.log(`Video Title in Recommendation Section: ${videoTitleInRecommendationSection}`);
        });

        // Verify video genre, year release and duration
        videoPage.getVideoGenreYearReleaseAndDuration().then((text) => {
            const info = text.trim().split('•').map(t => t.trim());
            const [genre, year, durationText] = [info[0], info[1], info.slice(2).join(' • ')];

            const expected = movieGenreAndYearRelease.split('•').map(t => t.trim());
            expect(genre).to.equal(expected[0]);
            expect(year).to.equal(expected[1]);

            if (movieDuration && durationText) {
                const normalized = movieDuration.replace(/\./g, ':');

                
                const [h = 0, m = 0, s = 0] = normalized.split(':').map(Number);
                const expectedSec = (h * 3600) + (m * 60) + s;

                const match = durationText.match(/(\d+)\s*j.*?(\d+)\s*mnt/);
                if (match) {
                    const actualSec = (parseInt(match[1]) * 3600) + (parseInt(match[2]) * 60);
                    expect(actualSec).to.be.closeTo(expectedSec, 60);
                } else {
                    cy.log('Unknown Format:', durationText);
                }
            }

            cy.log(`Genre: ${genre}, Year: ${year}, Duration: ${durationText}`);
        });

        // Verify video age limit
        videoPage.getVideoAgeLimit().then((text) => {
            const videoAgeLimit = text.trim();
            expect (videoAgeLimit).not.to.be.empty;
            expect(videoAgeLimit).to.equal(movieAgeLimit);
            cy.log(`Video Age Limit: ${videoAgeLimit}`);
        });

        // Verify video age rating
        videoPage.getVideoAgeRating().then((text) => {
            const videoAgeRating = text.trim();
            expect (videoAgeRating).not.to.be.empty;
            expect(videoAgeRating).to.equal(movieAgeLimit);
            cy.log(`Video Age Rating: ${videoAgeRating}`);
        });

        // Verify video year release
        videoPage.getVideoYearRelease().then((text) => {
            const videoYearRelease = text.trim();
            expect (videoYearRelease).not.to.be.empty;
            expect(videoYearRelease).to.equal(movieGenreAndYearRelease.split(' • ')[1]);
            cy.log(`Video Year Release: ${videoYearRelease}`);
        });

        // Verify video duration
        videoPage.getVideoDuration().then((text) => {
            const videoDuration = text.trim();
            expect (videoDuration).not.to.be.empty;
            expect(videoDuration).to.equal(movieDuration.replace(/:/g, '.'));
            cy.log(`Video Duration: ${videoDuration}`);
        });
    });
});