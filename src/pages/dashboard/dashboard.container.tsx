import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Input, Result, Spin } from 'antd';

const API_KEY = 'asdadas';
const baseURL = 'https://api.openai.com/v1/engines/davinci/completions';

const Dashboard: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [story, setStory] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const generateStory = async (prompt: string) => {
    setLoading(true);
    setError(false);
    const options = {
      prompt: prompt,
      max_tokens: 1000,
      temperature: 0.5,
      n: 1
    };

    try {
      const response = await axios.post(baseURL, options, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        }
      });
      setStory(response.data.choices[0].text);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Story Generator</h1>
      <Form
        onFinish={() => {
          generateStory(prompt);
        }}
      >
        <Form.Item
          name='prompt'
          rules={[{ required: true, message: 'Please enter a prompt!' }]}
        >
          <Input placeholder='Write a short story about a robot' onChange={(event) => setPrompt(event.target.value)} />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Generate Story
          </Button>
        </Form.Item>
      </Form>
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        {loading && <Spin size='large' tip='Loading...' />}
        {error && (
          <Result
            status='error'
            title
            subTitle='Sorry, there was an error generating the story.'
          />
        )}
        {!loading && !error && story !== '' && (
          <div>
            <h2>Generated Story:</h2>
            <p>{story}</p>
          </div>
        )}
      </div>
    </div>
  );
};


export default Dashboard;
