const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  use: {
    baseURL: 'https://animated-gingersnap-8cf7f2.netlify.app/',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    { name: 'Chromium', use: { browserName: 'chromium' } }
    // ,
    // { name: 'Firefox', use: { browserName: 'firefox' } },
    // { name: 'Webkit', use: { browserName: 'webkit' } },
  ],
  reporter: [['html', { outputFolder: 'playwright-report' }]],
});
