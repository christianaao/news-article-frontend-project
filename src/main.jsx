import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import { UserProvider } from './context/User.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
    <UserProvider>
    <App/>
    </UserProvider>
  </BrowserRouter>
  </>
)
