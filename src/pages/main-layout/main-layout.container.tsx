import { Layout, Menu } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const { Header, Content, Footer } = Layout

const itemsValues = [{ key: '/', label: 'UploadImage' }, { key: 'Dashboard', label: 'Dashboard' }]

interface MainLayoutProps {
  children: React.ReactElement;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	const navigate = useNavigate()

	const handleMenuClick = (path: string) => {
		navigate(path)
	}
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Layout className='site-layout' style={{ backgroundColor: '#aaa' }}>
				<Header>
					<Menu
						theme='dark'
						mode='horizontal'
						defaultSelectedKeys={['/']}
						items={itemsValues}
						onSelect={({ key }) => handleMenuClick(key)}
					/>
				</Header>
				<Content style={{ margin: '16px', backgroundColor: '#fff' }}>
					<div className='site-layout-background' style={{ padding: 24, minHeight: 360 }}>
						{children}
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>Modern React Boilerplate
          ©2022 Created by
          Rodrigo
          Sousa</Footer>
			</Layout>
		</Layout>
	)
}

export default MainLayout
