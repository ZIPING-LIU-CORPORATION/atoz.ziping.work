import { defineConfig } from "cypress";
import path from 'path';



export default defineConfig({
  projectId: 't7aqz7',
  fixturesFolder: false,



  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      config.configFile = path.resolve(__dirname, 'cypress.config.ts');

      config.projectId = 't7aqz7';

      config.retries = 3;

      
    },
  
    supportFile: path.resolve(__dirname, 'cypress/support/e2e.ts')
  },
});
