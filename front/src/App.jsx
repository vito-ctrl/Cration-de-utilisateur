import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Make sure this file exists and is styled appropriately
import Register from './Auth/Register';
import Login from './Auth/Login';
import ProductList from './pages/Dashboard';
import Example from './pages/Navbar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/navbar" element={<Example />} />
        <Route path="/dashboard" element={<ProductList product={{ name: 'Sample Product', price: 99.99, image: '/path/to/image' }} />} />
        {/* Passing a sample product object as a prop to ProductDetail */}
      </Routes>
    </Router>
  );
};

export default App;
