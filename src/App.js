import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import OfertasPage from './pages/OfertasPage/OfertasPage';
import AdminPage from './pages/AdminPage/AdminPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminPage />} /> 
        <Route path="/" element={<OfertasPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
