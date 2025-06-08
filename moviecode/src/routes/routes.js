import { Home, Login } from '../pages';
import { Navigate } from 'react-router-dom';

/**
 * 애플리케이션 라우트 정의
 * 각 라우트 객체는 path와 element 속성을 가짐
 */
const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
];

export default routes;
