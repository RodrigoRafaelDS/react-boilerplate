import { test } from '@playwright/test'

test('test', async ({ page }) => {
	await page.goto('http://127.0.0.1:5173/')
	await page.getByText('Page 2').click()
	await page.getByText('Dashboard').click()
	await page.getByRole('main').getByText('Dashboard').dblclick()
})