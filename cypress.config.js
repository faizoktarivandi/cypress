const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    baseUrl: "https://kasir-api.belajarqa.com",
    env: {
      "email": "email@gmail.com",
      "password": "password"
    },
    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
  },
});