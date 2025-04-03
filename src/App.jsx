import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import History from './pages/History';
import About from './pages/About';
import Convert from './pages/Convert';
import Login from './components/auth/login';
import Register from './components/auth/register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="app" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="history" element={<History />} />
          <Route path="about" element={<About />} />
          <Route path="convert" element={<Convert />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;