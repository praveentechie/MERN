let config = require('dotenv').config({path: './.env'});

let parsedOption = config.parsed;
console.log('config', parsedOption);
parsedOption = configOptions ? {
  serverPort: parseInt(configOptions.SERVER_PORT),
  dbInstance: configOptions.DB_INSTANCE,
  dbPort: parseInt(configOptions.DB_PORT),
  env: configOptions.ENV
} : {};

module.exports = configOptions;
