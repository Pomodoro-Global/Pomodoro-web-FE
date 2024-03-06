import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Layout from './Layout';
import PomodoroPage from './pages/PomodoroPage';
import LoginPage from './pages/LoginPage';
import LogupPage from './pages/LogupPage';
import SettingPage from './pages/SettingPage';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout page={<PomodoroPage />} />,
  },
  {
    path: 'login',
    element: <Layout page={<LoginPage />} />,
  },
  {
    path: 'logup',
    element: <Layout page={<LogupPage />} />,
  },
  {
    path: 'setting',
    element: <Layout page={<SettingPage />} />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
