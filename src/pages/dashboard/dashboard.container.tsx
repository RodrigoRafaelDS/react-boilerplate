import React from 'react'
import * as amplitude from '@amplitude/analytics-browser'
import { Button } from 'antd'


const Dashboard: React.FC = () => {
	const handleAmplitude = () => {
		console.log('SD -> Amplitude')

		amplitude.init('edb7f41d37875141c5d229b74b935016')
		amplitude.track('Button Clicked')
	}
	return <div>
		<Button onClick={() => handleAmplitude()}>Amplitude test</Button>
		<Button onClick={() => methodDoesNotExist()}>Sentry test</Button>
	</div>
}

export default Dashboard
