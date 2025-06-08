import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home, Login } from './pages';
import './App.css';
import { ConfigProvider } from 'antd';
import koKR from 'antd/es/locale/ko_KR';

// 인증 상태를 확인하는 간단한 함수
const isAuthenticated = () => {
  return localStorage.getItem('user') !== null;
};

// 보호된 라우트 컴포넌트
function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to='/login' replace />;
  }

  return children;
}

function App() {
  return (
    <ConfigProvider locale={koKR}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
