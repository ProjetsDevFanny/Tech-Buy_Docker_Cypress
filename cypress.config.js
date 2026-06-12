const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    baseURL: 'https://example.cypress.io'
  }

});
