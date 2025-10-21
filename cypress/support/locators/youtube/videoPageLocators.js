import 'cypress-xpath';

export const videoPageLocators = {
    videoTitle: `(//div[@id="title"]//yt-formatted-string)[1]`,
    videoTitleInRecommendationSection: `//div[@id="masthead"]//yt-formatted-string[@id="title"]`,
    videoGenreYearReleaseAndDuration: `(//div[@id="line-wrapper"]/yt-formatted-string[@id="text"])[1]`,
    videoAgeLimit: `(//div[@id="title"]//div[@class="badge  badge-style-type-media style-scope ytd-badge-supported-renderer style-scope ytd-badge-supported-renderer"])[1]`,
    videoAgeRating: `//ytd-metadata-row-renderer[h4[@id='title' and yt-formatted-string[text()='Rating']]] //div[@id='content']//yt-formatted-string`,
    videoYearRelease: `//ytd-metadata-row-renderer[h4[@id='title' and yt-formatted-string[text()='Tanggal rilis']]] //div[@id='content']//yt-formatted-string`,
    videoDuration: `//ytd-metadata-row-renderer[h4[@id='title' and yt-formatted-string[text()='Waktu putar']]] //div[@id='content']//yt-formatted-string`
};