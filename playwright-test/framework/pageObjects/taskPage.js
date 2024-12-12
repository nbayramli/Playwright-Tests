class TaskPage {
    constructor(page) {
        this.page = page;
    }

    async navigateToSection(section) {
        // Use a CSS selector to target the button based on the h2 content
        await this.page.click(`nav button:has-text('${section}')`); 
    }

    async verifyTask(column, task, tags) {
        // Use CSS selectors for better readability and maintainability
        const columnSelector = `.flex-col.w-80 > h2:has-text('${column}') + div`; // Select the div after the h2 containing the column name
        const taskSelector = `${columnSelector} div.bg-white:has-text('${task}')`; // Select the task card within the column

        // Verify task exists in the correct column
        const taskElement = await this.page.locator(taskSelector);
        if (!await taskElement.isVisible()) {
            throw new Error(`Task "${task}" not found in column "${column}"`);
        }

        // Verify tags
        const tagElements = await taskElement.locator('span.px-2.py-1.rounded-full'); // Select all tag elements within the task card
        const tagTexts = await tagElements.allTextContents();

        for (const tag of tags) {
            if (!tagTexts.includes(tag)) {
                throw new Error(`Tag "${tag}" not found for task "${task}"`);
            }
        }
    }
}

module.exports = TaskPage;
  