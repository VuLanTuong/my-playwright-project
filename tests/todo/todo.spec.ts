import { test, expect } from '@playwright/test';

const TODO_URL = 'https://todomvc.com/examples/react/dist/';

test('Verify able to add todo items', async ({ page }) => {
  await page.goto(TODO_URL);
  const todoInput = page.getByTestId('text-input');
  await todoInput.fill('Buy groceries');
  await todoInput.press('Enter');
  await expect(page.getByTestId('todo-item-label')).toContainText(await todoInput.inputValue());

});

test('Verify able to mark todo item as completed', async ({ page }) => {
    await page.goto(TODO_URL);
    const todoInput = page.getByTestId('text-input');
    await todoInput.fill('Buy groceries');
    await todoInput.press('Enter');
    await expect(page.getByTestId('todo-item-label')).toContainText(await todoInput.inputValue());
    await page.getByTestId('todo-item-toggle').check();
    await page.getByRole('link', { name: 'Completed' }).click();
    await expect(page.getByTestId('todo-item-label')).toContainText(await todoInput.inputValue());
    await expect(page.getByTestId('todo-item-toggle')).toBeChecked();
});

test('Verify able to delete todo item', async ({ page }) => {
    await page.goto(TODO_URL);
    const todoInput = page.getByTestId('text-input');
    await todoInput.fill('Buy groceries');
    await todoInput.press('Enter');
    await expect(page.getByTestId('todo-item-label')).toContainText(await todoInput.inputValue());
    await page.getByTestId('todo-item-label').hover();
    await page.getByTestId('todo-item-button').click();
    await expect(page.getByTestId('todo-item-label')).not.toBeVisible();

});

test('Verify able to edit todo item', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
    await page.getByTestId('text-input').fill('do homework');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('todo-item-label').dblclick();
    await page.getByTestId('todo-item').getByTestId('text-input').fill('do homework and play football');
    await page.getByTestId('todo-item').getByTestId('text-input').press('Enter');
    await expect(page.getByTestId('todo-item-label')).toContainText('do homework and play football');
});