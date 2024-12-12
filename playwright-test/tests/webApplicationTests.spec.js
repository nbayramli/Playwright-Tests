const { test, expect } = require('../framework/baseTest');
const TaskPage = require('../framework/pageObjects/taskPage');
const testData = require('../data/testCases.json');

test.describe('Web Application Tests', () => {
  for (const data of testData.filter(tc => tc.navigationPath === 'Web Application')) {
    test(data.testName, async ({ page, loginPage }) => {
      // Login
      await page.goto('/');
      await loginPage.login('admin', 'password123'); 

      // Navigate to Web Application 
      const taskPage = new TaskPage(page);
      await taskPage.navigateToSection(data.navigationPath); // This will now use the data-testid selector

      // Verify Task 
      await taskPage.verifyTask(data.column, data.task, data.tags); // This now uses the improved verifyTask method
    });
  }
});
