import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './layout/App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routers from './routers/routers.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Routers}/>
  </React.StrictMode>,
)
