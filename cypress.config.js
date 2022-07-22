// import axios from "axios";
const { defineConfig } = require("cypress");

require("dotenv").config();
const awsConfig = require("./aws-exports-es5.js");

module.exports = defineConfig({
  env: {
    cognito_username: process.env.AWS_COGNITO_USERNAME,
    cognito_password: process.env.AWS_COGNITO_PASSWORD,
    awsConfig: awsConfig.default,
  },

  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        // supply the absolute path to an unpacked extension's folder
        // NOTE: extensions cannot be loaded in headless Chrome
        launchOptions.extensions.push('C:/amptest/testext/build')
    
        return launchOptions
      })
    },
  },
});
