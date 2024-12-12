const { test, expect } = require('../framework/baseTest');
const TaskPage = require('../framework/pageObjects/taskPage');
const testData = require('../data/testCases.json');

test.describe('Mobile Application Tests', () => {
  for (const data of testData.filter(tc => tc.navigationPath === 'Mobile Application')) {
    test(data.testName, async ({ page, loginPage }) => {
      // Login
      await page.goto('/');
      await loginPage.login('admin', 'password123'); 

      // Navigate to Mobile Application 
      const taskPage = new TaskPage(page);
      await taskPage.navigateToSection(data.navigationPath); 

      // Verify Task 
      await taskPage.verifyTask(data.column, data.task, data.tags); 
    });
  }
});