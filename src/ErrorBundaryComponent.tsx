import React from 'react'

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
			return <div>Error</div>
		}
		return this.props.children
	}
}
