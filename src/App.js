import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import OfertasPage from './pages/OfertasPage/OfertasPage';
import AdminPage from './pages/AdminPage/AdminPage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
    <div>
    <Navbar/>
    <Routes>
        <Route path="/admin" element={<AdminPage />} /> 
        <Route path="/oferta" element={<OfertasPage />} /> 
   </Routes>
   </div>
    </Router>
  );
}

export default App;
