const fs = require('fs');

let config;

if (process.env.BRANCH_NAME === 'main') {
  config = JSON.parse(fs.readFileSync('./configs/config.production.json', 'utf8'));
} else if (process.env.BRANCH_NAME === 'develop') {
  config = JSON.parse(fs.readFileSync('./configs/config.staging.json', 'utf8'));
} else {
  throw new Error('Unknown environment. Please set BRANCH_NAME to "main" or "develop".');
}

module.exports = config;
