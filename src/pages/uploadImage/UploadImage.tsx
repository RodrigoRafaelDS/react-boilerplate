import React, { useState } from 'react'
import { Button, Col, Image, message, Row, Upload } from 'antd'
import axios from 'axios'
import './styles.css'
import { LoadingOutlined, UploadOutlined } from '@ant-design/icons'

const UploadImage: React.FC = () => {
	const [loading, setLoading] = useState(false)
	const [originalImage, setOriginalImage] = useState('')
	const [processedImage, setProcessedImage] = useState('')

	const handleUpload = (info: any) => {
		const file = info.file
		setLoading(true)
		const formData = new FormData()
		formData.append('image', file)
		axios
			.post('http://localhost:8020/process-image', formData)
			.then((res) => {
				setLoading(false)
				setOriginalImage(URL.createObjectURL(file))
				setProcessedImage(res.data.image)
			})
			.catch((err) => {
				setLoading(false)
				message.error(err.message)
			})
	}

	return (
		<div className='upload-container'>
			<Upload
				name='image'
				listType=' picture'
				className='avatar-uploader'
				showUploadList={false}
				customRequest={handleUpload}
			>
				<Button>
					{loading ? <LoadingOutlined /> : <UploadOutlined />} Upload
				</Button>
			</Upload>
			{originalImage && (
				<Row justify='center' align='middle'>
					<Col xs={24} sm={12} md={10} lg={8} xl={6}>
						<Image src={originalImage} alt='original' className='image-preview' />
					</Col>
					<Col xs={24} sm={12} md={10} lg={8} xl={6}>
						<Image src={`data:image/jpeg;base64,${processedImage}`} alt='processed' className='image-preview' />
					</Col>
				</Row>
			)}
		</div>
	)
}

export default UploadImage
