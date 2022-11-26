import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ErrorBoundary } from './ErrorBundaryComponent'
import MainLayout from './pages/main-layout/main-layout.container'
import AppRoutes from './routes/AppRoutes'

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
