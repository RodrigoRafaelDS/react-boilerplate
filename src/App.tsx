import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ErrorBoundary } from './ErrorBundaryComponent'
import MainLayout from './pages/main-layout/main-layout.container'
import AppRoutes from './routes/AppRoutes'
import './reset.css'

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
			cacheTime: Infinity
		},
		mutations: {
			retry: false
		}
	}
})
// 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
// R9TFHPZLDUM28GL9
const App: React.FC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools
				initialIsOpen={false}
				toggleButtonProps={{
					style: {
						margin: 12
					}
				}}
			/>
			<BrowserRouter>
				<MainLayout>
					<ErrorBoundary>
						<AppRoutes />
					</ErrorBoundary>
				</MainLayout>
			</BrowserRouter>
		</QueryClientProvider>
	)
}

export default App
