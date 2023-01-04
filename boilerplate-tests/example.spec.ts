import { test } from '@playwright/test'

test('test', async ({ page }) => {
	await page.goto('http://localhost:5173/')
	await page.getByRole('menuitem', { name: 'Page 2' }).click()
	await page.getByRole('menuitem', { name: 'Dashboard' }).click()
	await page.getByRole('button', { name: 'Open React Query Devtools' }).click()
	await page.getByRole('button', { name: 'Close' }).nth(1).click()
})