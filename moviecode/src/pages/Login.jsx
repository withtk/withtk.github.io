import { useState } from 'react';
import { Form, Input, Button, Card, message, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const { Title } = Typography;

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);
    
    // 실제 구현에서는 여기에 API 호출 로직이 들어갈 수 있습니다
    setTimeout(() => {
      // 예시: 간단한 인증 시뮬레이션 (실제로는 서버에서 처리해야 함)
      if (values.username === 'ab' && values.password === 'ab') {
        message.success('로그인 성공!');
        // 로컬 스토리지에 사용자 정보 저장 (예시)
        localStorage.setItem('user', JSON.stringify({ username: values.username }));
        navigate('/');
      } else {
        message.error('아이디 또는 비밀번호가 올바르지 않습니다.');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <div className="login-header">
          <Title level={2}>영화 플랫폼</Title>
          <Title level={4}>로그인</Title>
        </div>
        
        <Form
          name="login_form"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '아이디를 입력해주세요!' }]}
          >
            <Input 
              prefix={<UserOutlined />} 
              placeholder="아이디" 
              size="large"
            />
          </Form.Item>
          
          <Form.Item
            name="password"
            rules={[{ required: true, message: '비밀번호를 입력해주세요!' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="비밀번호"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              className="login-form-button"
              loading={loading}
              block
              size="large"
            >
              로그인
            </Button>
          </Form.Item>
          
          <div className="login-links">
            <a href="#">비밀번호 찾기</a>
            <a href="#">회원가입</a>
          </div>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
