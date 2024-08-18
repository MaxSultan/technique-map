import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      ciWebServerCommand: 'npx nx run technique-map:serve-static',
      webServerCommands: {
        default: 'npx nx run technique-map:serve',
        production: 'npx nx run technique-map:serve:production',
        ci: 'npx nx run technique-map:serve-static',
      },
      cypressDir: 'src',
      bundler: 'vite',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
