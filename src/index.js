import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts/Font.css'
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PlayProvider } from './contexts/Play';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import Splash from './pages/Splash';
import App from './App';
import LoginSignup from './pages/LoginSignup';
import Onboarding from './pages/Onboarding';
import PlayerRoom from './pages/PlayerRoom';
import BucketList from './pages/BucketList';
import Auth from './pages/Auth';
import GrandmaRoom from './pages/GrandmaRoom';
import { RoomCameraProvider } from './contexts/RoomFocus';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement : <NotFound/>,
    children: [
      {index: true, element: <PlayerRoom/>},
      {path: '/splash', element: <Splash/>},
      {path: '/main', element: <Main/>},
      {path: '/login', element: <LoginSignup/>},
      {path: '/onboarding', element: <Onboarding/>},
      {path: '/playerroom', element: <PlayerRoom/>},
      {path: '/gmroom', element: <GrandmaRoom/>},
      {path: '/bucketlist', element: <BucketList/>},
      {path: '/auth', element: <Auth/>},

    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PlayProvider>
      <RoomFocusProvider>
        <RouterProvider router={router} />
      </RoomFocusProvider>
    </PlayProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
