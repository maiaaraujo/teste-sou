import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/MuiTheme';
import OfertasPage from './pages/OfertasPage/OfertasPage';
import AdminPage from './pages/AdminPage/AdminPage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
    <div>
    <Navbar/>
    <Routes>
        <Route path="/admin" element={<AdminPage />} /> 
        <Route path="/oferta" element={<OfertasPage />} /> 
   </Routes>
   </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
