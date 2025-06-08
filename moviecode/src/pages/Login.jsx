import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Typography } from 'antd';
import '../styles/common.css';
import '../styles/Login.css';

const { Title } = Typography;

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // 로그인 로직 구현
      localStorage.setItem('user', JSON.stringify({ username: values.username }));
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <Title level={2} className="login-title">
          로그인
        </Title>
        
        <Form
          name="login"
          className="login-form"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '사용자 이름을 입력해주세요!' }]}
            className="login-form-item"
          >
            <Input placeholder="사용자 이름" size="large" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: '비밀번호를 입력해주세요!' }]}
            className="login-form-item"
          >
            <Input.Password placeholder="비밀번호" size="large" />
          </Form.Item>

          <Form.Item className="login-form-item">
            <Button 
              type="primary" 
              htmlType="submit" 
              className="login-form-button"
              loading={loading}
            >
              로그인
            </Button>
          </Form.Item>
        </Form>

        <div className="login-form-footer">
          <a href="/signup" className="login-form-link">
            회원가입
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
