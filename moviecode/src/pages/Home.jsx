import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Layout } from 'antd';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

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
      <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
          영화 플랫폼
        </div>
        {user ? (
          <div style={{ color: 'white' }}>
            <span style={{ marginRight: '10px' }}>{user.username}님 환영합니다</span>
            <Button type="primary" onClick={handleLogout}>로그아웃</Button>
          </div>
        ) : (
          <Button type="primary" onClick={() => navigate('/login')}>로그인</Button>
        )}
      </Header>
      
      <Content style={{ padding: '50px', minHeight: 'calc(100vh - 64px)' }}>
        <div className="home-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
              <a href="https://vite.dev" target="_blank" rel="noreferrer">
                <img src={viteLogo} className="logo" alt="Vite logo" style={{ height: '100px' }} />
              </a>
              <a href="https://react.dev" target="_blank" rel="noreferrer">
                <img src={reactLogo} className="logo react" alt="React logo" style={{ height: '100px' }} />
              </a>
            </div>
            <Title>Vite + React + 영화 플랫폼</Title>
            
            <div style={{ margin: '20px 0' }}>
              <Button onClick={() => setCount((count) => count + 1)}>
                카운트: {count}
              </Button>
            </div>
            
            <Paragraph>
              <code>src/pages/Home.jsx</code>를 수정하여 홈 화면을 커스터마이징할 수 있습니다.
            </Paragraph>
          </div>
          
          {/* 영화 관련 콘텐츠가 이곳에 들어갈 수 있습니다 */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Title level={3}>지금 인기있는 영화</Title>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              flexWrap: 'wrap', 
              gap: '20px',
              marginTop: '20px' 
            }}>
              {/* 여기에 영화 목록이 표시됩니다 */}
              <div style={{ background: '#f0f0f0', padding: '20px', borderRadius: '8px', width: '200px', height: '300px' }}>
                영화 1
              </div>
              <div style={{ background: '#f0f0f0', padding: '20px', borderRadius: '8px', width: '200px', height: '300px' }}>
                영화 2
              </div>
              <div style={{ background: '#f0f0f0', padding: '20px', borderRadius: '8px', width: '200px', height: '300px' }}>
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
