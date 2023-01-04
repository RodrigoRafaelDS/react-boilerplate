import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ErrorBoundary } from './ErrorBundaryComponent'
import { BrowserTracing } from '@sentry/tracing'
import * as Sentry from '@sentry/react'

Sentry.init({
	dsn: 'https://20b8ac7d21dc4e299ec67e303eee89d3@o4504443824766976.ingest.sentry.io/4504443829092352',

	integrations: [new BrowserTracing()],

	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for performance monitoring.
	// We recommend adjusting this value in production
	tracesSampleRate: 1.0
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ErrorBoundary>
			<App />
		</ErrorBoundary>
	</React.StrictMode>
)
