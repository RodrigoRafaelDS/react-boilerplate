import { PieChartOutlined, UserOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout, Menu } from 'antd'
import React, { useState } from 'react'

const { Header, Content, Footer, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[]
): MenuItem {
	return {
		key,
		icon,
		children,
		label
	} as MenuItem
}

const items: MenuItem[] = [
	getItem('dashboard', '1', <PieChartOutlined />),
	getItem('option', 'sub1', <UserOutlined />, [
		getItem('1', '3'),
		getItem('2', '4'),
		getItem('3', '5')
	])

]

const MainLayout: React.FC = ({ children }) => {
	const [collapsed, setCollapsed] = useState(false)

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
				<div className='logo' style={{ padding: 21, backgroundColor: '#fff' }}>LOGO</div>
				<Menu theme='dark' defaultSelectedKeys={['1']} mode='inline' items={items} />
			</Sider>
			<Layout className='site-layout' style={{ backgroundColor: 'blue' }}>
				<Header className='site-layout-background'
					style={{ padding: 0, backgroundColor: '#fff' }}>HEADER</Header>
				<Content style={{ margin: '16px', backgroundColor: '#fff' }}>
					<div className='site-layout-background' style={{ padding: 24, minHeight: 360 }}>
						{children}
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>REACT BOILERPLATE</Footer>
			</Layout>
		</Layout>
	)
}

export default MainLayout