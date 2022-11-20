import { test } from '@playwright/test'

test('test', async ({ page }) => {
	await page.goto('http://localhost:5173/')
	await page.getByText('Page 2').click()
	await page.getByText('Dashboard').click()
	await page.getByRole('main').getByText('Dashboard').dblclick()
	await page.getByRole('button', { name: 'Open React Query Devtools' }).click()
	await page.getByPlaceholder('Filter').click()
	await page.getByPlaceholder('Filter').fill('test')
	await page.getByRole('combobox', { name: 'Panel position' }).selectOption('top')
	await page.getByRole('button', { name: 'Close' }).nth(1).click()
	await page.getByText('Page 2').click()
	await page.goto('http://localhost:5173/')
	await page.getByRole('menuitem', { name: 'Page 2' }).click()
	await page.getByText('Dashboard').click()
})