# Playwright-Tests

# Implementation Details
The solution was implemented using a Page Object Model (POM) pattern, with the TaskPage class encapsulating the interactions with the Kanban board. The main components of the solution include:

# 	TaskPage Class: 
This class provides methods for:
○	navigateToSection(section): Navigates to a specific section of the application (e.g., "Web Application", "Mobile Application").
○	verifyTask(column, task, tags): Verifies that a given task exists in the specified column with the expected tags.

# Test Cases:
Test cases were defined in a testCases.json file, providing data for different scenarios, including the section to navigate to, the task name, the expected column, and the associated tags.

# Test Runner:
A test runner (assumed to be using a library like Playwright or Puppeteer) executes the tests, leveraging the TaskPage methods and the data from testCases.json.
The verifyTask method uses CSS selectors to locate elements on the page and checks for the presence of tasks and their corresponding tags. This method ensures that the tasks are displayed in the correct columns and with the accurate tags.
