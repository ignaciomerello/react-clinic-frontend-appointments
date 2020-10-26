import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import axios from 'axios';
import './Register.scss'
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
const Register = () => {
    const onFinish = (user) => {
        axios.post('https://clinic-appointments-mongodb.herokuapp.com/users/register', user)
            .then(res => {
                console.log(res.data)
                notification.success({ message: 'User registered', description: 'User succesfuly registered' })
            }).catch(error => {
                notification.error({ message: 'Register error', description: 'There was a problem trying to register the user account, please check the input fields' })
            })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="registerForm">
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
                label="Name"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please fill out the box with your name and surname',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please introoduce your email adress',
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
                    },
                    {
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
                        message: 'Your password must contain at least one lower case, one upper case, one number, one special character, and must be between 8 and 10 characters in length',
                    }
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                label="Category"
                name="role"
                rules={[
                    {
                        required: true,
                        message: 'Choose your Role inbetween: Patient, Doctor, Administrative or Administrator',
                    },
                    {
                        type: 'string',
                        message: 'The Category introduced is not valid',
                    }
                ]}
            >
                <Input />
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

export default Register;