
import { defineConfig } from "cypress";
import path from 'path';
import tasks from "./cypress/plugins/tasks";

const nodeEvents = (on: Cypress.PluginEvents, config: Cypress.ConfigOptions<any>) => {
  // implement node event listeners here


  config.projectId = 't7aqz7';


  config.retries = 3;


 

  on('task', tasks);
}

const config = defineConfig({

  projectId: 't7aqz7',
  fixturesFolder: false,
  video: true,

  videoCompression: false,
  setupNodeEvents: nodeEvents,


  e2e: {
    video: true,
    waitForAnimations: true,

    setupNodeEvents: nodeEvents,
    
    supportFile: path.resolve(__dirname, 'cypress/support/e2e.ts')
  },
});


export default config;
