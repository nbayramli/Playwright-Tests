import { test as base } from '@playwright/test';
const LoginPage = require('./pageObjects/loginPage');

exports.test = base.extend({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    }
});
