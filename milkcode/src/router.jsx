import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './components/auth/Login';

// 라우트 설정
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login />,
        index: true,
      },
      {
        path: '/login',
        element: <Login />,
      },
      // 추가 라우트는 여기에 추가
      // {
      //   path: '/register',
      //   element: <Register />,
      // },
      // {
      //   path: '/dashboard',
      //   element: <Dashboard />,
      // }
    ],
  },
]);

export default router;
