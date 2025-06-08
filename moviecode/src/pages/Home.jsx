import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Layout } from 'antd';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import '../styles/common.css';
import '../styles/Home.css';

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

function Home() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  
  // 로그인 상태 확인 (간단한 예시)
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <Layout className="layout">
      <Header className="home-header">
        <div className="home-logo">
          영화 플랫폼
        </div>
        {user ? (
          <div className="home-user-info">
            <span>{user.username}님 환영합니다</span>
            <Button type="primary" onClick={handleLogout}>로그아웃</Button>
          </div>
        ) : (
          <Button type="primary" onClick={() => navigate('/login')}>로그인</Button>
        )}
      </Header>
      
      <Content>
        <div className="responsive-container">
          <div className="home-content">
            <div className="home-logo-container">
              <a href="https://vite.dev" target="_blank" rel="noreferrer">
                <img src={viteLogo} className="home-logo-image" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank" rel="noreferrer">
                <img src={reactLogo} className="home-logo-image" alt="React logo" />
              </a>
            </div>
            <Title className="responsive-title">
              Vite + React + 영화 플랫폼
            </Title>
            
            <div className="responsive-margin">
              <Button onClick={() => setCount((count) => count + 1)}>
                카운트: {count}
              </Button>
            </div>
            
            <Paragraph className="responsive-text">
              <code>src/pages/Home.jsx</code>를 수정하여 홈 화면을 커스터마이징할 수 있습니다.
            </Paragraph>
          </div>
          
          <div className="responsive-margin">
            <Title level={3} className="responsive-subtitle">
              지금 인기있는 영화
            </Title>
            <div className="responsive-grid">
              <div className="movie-card">
                영화 1
              </div>
              <div className="movie-card">
                영화 2
              </div>
              <div className="movie-card">
                영화 3
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default Home;
