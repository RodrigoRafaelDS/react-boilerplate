import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import ErrorScreens from '../ErrorScreens'

const Dashboard = React.lazy(() => import('../pages/dashboard/dashboard.container'))

const AppRoutes: React.FC = () => {

	return (
		<ConfigProvider>
			<Suspense fallback={<div>Suspense</div>}>
				<Routes>
					<Route path='/*' element={<ErrorScreens errorType={404} subTitle='Page not found' />} />
					<Route path='/dashboard' element={<Dashboard />} />
				</Routes>
			</Suspense>
		</ConfigProvider>
	)
}


export default AppRoutes