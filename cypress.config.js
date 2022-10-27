const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity:false,
    video : true,
    viewportHeight : 1504,
    viewportWidth:2256 ,
    defaultCommandTimeout: 5000,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
