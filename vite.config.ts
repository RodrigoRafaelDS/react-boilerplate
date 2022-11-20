//// <reference types="vitest" />
//// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
	plugins: [react()],
	test: {
		include: ['src/**/*.test.{tsx,ts}'],
		globals: true,
		environment: 'jsdom',
		root: './src',
		setupFiles: ['./src/setup.ts'],
		coverage: {
			provider: 'c8',
			all: true,
			include: ['src/**/*.{tsx,ts}'],
			reporter: ['lcov', 'html', 'text', 'json']
		}
	}
})
