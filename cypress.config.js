const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity:false,
    video : true,
    viewportHeight : 960,
    viewportWidth:1536 ,
    defaultCommandTimeout: 5000,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: true,
      html: true,
      json: false
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
