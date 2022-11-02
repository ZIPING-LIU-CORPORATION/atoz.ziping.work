import path from 'path';

module.exports = (on: any, config: any) => {
    config.configFile = path.join(__dirname, '..', '..', 'cypress.config.ts')
    return config;
}