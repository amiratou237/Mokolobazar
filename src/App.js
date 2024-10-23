import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/ProductPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Définir la route pour chaque page */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
