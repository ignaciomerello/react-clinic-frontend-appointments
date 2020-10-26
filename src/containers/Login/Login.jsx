import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import axios from 'axios';
import './Login.scss'
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
const Login = () => {
    const onFinish = (user) => {
        axios.post('https://clinic-appointments-mongodb.herokuapp.com/users/login', user)
            .then(res => {
                console.log(res.data)
                notification.success({ message: 'User loged in', description: 'User successfuly loged in' })
            }).catch(error => {
                notification.error({ message: 'Loging in error', description: 'Ther was an error trying to log in, chech the input fields' })
            })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="loginForm">
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please type in your email adress',
                    },
                    {
                        type: 'email',
                        message: 'The email adress is incorrect',
                    }
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please choose a password',
                    }
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
        </Button>
            </Form.Item>
        </Form>
        </div>
    )
}

export default Login;