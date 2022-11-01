import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 't7aqz7',
  fixturesFolder: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
