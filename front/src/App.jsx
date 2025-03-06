import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Make sure this file exists and is styled appropriately
import Register from './Auth/Register';
<<<<<<< HEAD
import Login from './Auth/Login';
import ProductDetail from './pages/Dashboard'; // Changed the path for clarity
=======
import Login from './Auth/login';
import Dashboard from './pages/Dashboard';
>>>>>>> f2a4246cbd3dfbd359879afa9563f22ff2abf72e

const App = () => {
  return (
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProductDetail product={{ name: 'Sample Product', price: 99.99, image: '/path/to/image' }} />} />
        {/* Passing a sample product object as a prop to ProductDetail */}
      </Routes>
    </Router>
  );
};
=======
  <Router>
        <Routes>
          <Route path='/' element = {<Register/>} />
          <Route path='/login' element = {<Login/>} />
          <Route path='/dashboard' element = {<Dashboard/>} />
        </Routes>
      </Router>
  )
}
>>>>>>> f2a4246cbd3dfbd359879afa9563f22ff2abf72e

export default App;
