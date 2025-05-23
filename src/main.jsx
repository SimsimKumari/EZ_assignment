import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterConfig } from './router/RouterConfig'
import { AuthProvider } from './context/AuthContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterConfig />
    </AuthProvider>
  </React.StrictMode>
) 