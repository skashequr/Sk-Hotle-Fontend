import React from 'react'
import ReactDOM from 'react-dom/client'
import { ParallaxProvider } from 'react-scroll-parallax';
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './Routs';
import AuthProvider from './Components/AuthProvider/AuthProvider';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </ParallaxProvider>
  </React.StrictMode>,
)
