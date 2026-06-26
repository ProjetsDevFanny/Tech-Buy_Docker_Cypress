const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // allowCypressEnv: false,
  e2e: {
    "retries": {
      "runMode": 0,
      "openMode": 2
    },

  env: {
    testEnvURL: 'https://example.cypress.io',
    apiUrl: "http://localhost:8081"
  },
  setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseURL: 'http://localhost:8080/'
  },

});
