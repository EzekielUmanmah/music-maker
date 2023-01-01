import { Modal, Button, Form, Input } from 'antd';
import { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { AppContext } from '../../App';
import { Container } from './styles';

export default function AuthModal() {
  const [state, setState] = useContext(AppContext);
  const [islogin, setIsLogin] = useState(false);
  const [show, setShow] = useState(false);
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const showModal = () => {
    setShow(true);
  };

  const handleOk = (vals) => {
    const path = islogin ? 'login' : 'signup';

    axios
      .post(`http://localhost:4000/user/${path}`, vals)
      .then((res) => {
        const { name, email } = res.data;

        localStorage.setItem('profile', JSON.stringify({ name, email }));
        form.resetFields();
        setShow(false);
        setState((state) => ({ ...state, user: res.data.name }));
        navigate('/player');
      })
      .catch((err) => {
        Modal.error({
          title: 'There was a problem...',
          content: err.response.data,
        });
      });
  };

  const handleCancel = () => {
    setShow(false);
  };

  return (
    <Container>
      <Button className='showModal' onClick={showModal}>
        Get Started!
      </Button>
      <Modal
        title={
          <Button onClick={() => setIsLogin(!islogin)}>
            {!islogin ? 'Click here to Login' : 'Click here to Sign Up'}
          </Button>
        }
        open={show}
        onOk={() => {
          form
            .validateFields()
            .then((vals) => {
              handleOk(vals);
            })
            .catch((err) => console.log(`Validation failed: ${err}`));
        }}
        onCancel={handleCancel}
      >
        <Form form={form} name='form-in-modal'>
          {!islogin && (
            <Form.Item name='name' label='Name' rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          )}
          <Form.Item
            name='email'
            label='Email'
            rules={[
              {
                type: 'email',
                message: 'The input is not a valid E-mail format!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='password'
            label='Password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          {!islogin && (
            <Form.Item
              name='confirmPassword'
              label='Confirm Password'
              rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error('The passwords that you entered do not match!')
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
          )}
        </Form>
      </Modal>
    </Container>
  );
}
