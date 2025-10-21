const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: "cypress/support/e2e.js",
    defaultCommandTimeout: 30000,
    env: {
      agodaBaseUrl: "https://agoda.com/",
      amazonBaseUrl: "https://www.amazon.com/",
      youtubeBaseUrl: "https://www.youtube.com/",
    },
    video: true,
  },
});
