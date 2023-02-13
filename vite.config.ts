//// <reference types="vitest" />
//// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
	build: {
		sourcemap: true
	},
	plugins: [
		react()
		// sentryVitePlugin({
		// 	org: 'sousadev',
		// 	project: 'javascript-react',
		//
		// 	// Specify the directory containing build artifacts
		// 	include: './dist',
		//
		// 	// Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
		// 	// and needs the `project:releases` and `org:read` scopes
		// 	// authToken: process.env.VITE_SENTRY_AUTH_TOKEN
		// 	authToken: '59d97d566fc04c69a64e1406a8e2117bfd6cd514500e4b838e71144c301ce8f6'
		//
		// 	// Optionally uncomment the line below to override automatic release name detection
		// 	// release: env.RELEASE,
		// })
	],
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
