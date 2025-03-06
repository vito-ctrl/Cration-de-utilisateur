import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Make sure this file exists and is styled appropriately
import Register from './Auth/Register';
import Login from './Auth/Login';
import ProductDetail from './pages/Dashboard'; // Changed the path for clarity

const App = () => {
  return (
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

export default App;
