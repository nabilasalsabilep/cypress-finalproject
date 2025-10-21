import 'cypress-xpath';

export const trendingMoviesPageLocators = {
    trendingMoviesSectionTitle: `//div[@id="page-header"]//span[text()='Film']`,
    trendingTitle: `(//span[@id="title" and @class="style-scope ytd-shelf-renderer"])[1]`,
    thirdTrendingMovieTitle: `(//span[@id="video-title"])[3]`,
    thirdTrendingMovieGenreAndYearRelease: `(//span[@class="grid-movie-renderer-metadata style-scope ytd-grid-movie-renderer"])[3]`,
    thirdTrendingMovieAgeLimit: `(//div[@class="badge  badge-style-type-simple style-scope ytd-badge-supported-renderer style-scope ytd-badge-supported-renderer"]/p[@class="style-scope ytd-badge-supported-renderer"])[3]`,
    thirdTrendingMovieDuration: `(//div[@class="thumbnail-overlay-badge-shape style-scope ytd-thumbnail-overlay-time-status-renderer"]//div)[3]`
};