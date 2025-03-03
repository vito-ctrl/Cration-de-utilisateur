import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Register from './Auth/Register';
import Login from './Auth/login';
import Dashboard from './pages/Dashboard';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {

  return (
    <GoogleOAuthProvider clientId="1731328532-qjuttrrcijnir9q3be2h22llkajm6oqu.apps.googleusercontent.com">
      <Router>
        <Routes>
          <Route path='/' element = {<Register/>} />
          <Route path='/login' element = {<Login/>} />
          <Route path='/dashboard' element = {<Dashboard/>} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  )
}

export default App
