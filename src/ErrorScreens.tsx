import { Result } from 'antd'
import React from 'react'

interface ErrorScreensProps {
  errorType: 403 | 404 | 500 | '403' | '404' | '500';
  subTitle: string;
}

const ErrorScreens: React.FC<ErrorScreensProps> = ({ errorType, subTitle }) => {
	return (<Result
		status={errorType}
		title={errorType}
		subTitle={subTitle}
	/>)
}

export default ErrorScreens