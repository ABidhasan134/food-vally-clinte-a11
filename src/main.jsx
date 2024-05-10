import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routers from './routers/routers.jsx'
import AuthProvider from './pages/context/AuthProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={Routers}/>
    </AuthProvider>
  </React.StrictMode>,
)
