const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // allowCypressEnv: false,

  env: {
    testEnvURL: 'https://example.cypress.io',
    apiUrl: "http://localhost:8081"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseURL: 'http://localhost:8080/'
  },

});
