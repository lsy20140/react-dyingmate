import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PlayProvider } from './contexts/Play';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import Splash from './pages/Splash';
import App from './App';
import LoginSignup from './pages/LoginSignup';
// import Room from './pages/Room';
// import Test from './pages/Test';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement : <NotFound/>,
    children: [
      {index: true, element: <Splash/>},
      {path: '/main', element: <Main/>},
      {path: '/login', element: <LoginSignup/>},
      // {path: '/room', element: <Room/>},
      // {path: '/gmroom', element: <Test/>},

    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PlayProvider>
      <RouterProvider router={router} />
    </PlayProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
