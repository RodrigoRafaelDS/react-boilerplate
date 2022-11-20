import React from 'react'
import ErrorScreens from './ErrorScreens'

export class ErrorBoundary extends React.Component<any, any> {
	constructor(props: any) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError() {
		return { hasError: true }
	}

	componentDidCatch(error: any, errorInfo: any) {
		console.log(error, errorInfo)
	}

	render() {
		if (this.state.hasError) {
			return <ErrorScreens errorType={500} subTitle='Ops!' />
		}
		return this.props.children
	}
}
