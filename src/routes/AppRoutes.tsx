import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ConfigProvider } from 'antd'

const Dashboard = React.lazy(() => import('../pages/dashboard/dashboard.container'))

const AppRoutes: React.FC = () => {
	
	return (
		<ConfigProvider>
			<Suspense fallback={<div>Suspense</div>}>
				<Routes>
					<Route path='*' element={<div>Page not found</div>} />
					<Route path='/dashboard' element={<Dashboard />} />
				</Routes>
			</Suspense>
		</ConfigProvider>
	)
}


export default AppRoutes