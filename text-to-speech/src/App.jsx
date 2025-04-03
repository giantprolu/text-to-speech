import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import History from './pages/History';
import About from './pages/About';
import Convert from './pages/convert';
import Login from './components/auth/login';
import Register from './components/auth/register';

const ProtectedRoute = ({ children }) => {
  const userLoggedIn = localStorage.getItem('user') !== null;
  if (!userLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="convert" element={<Convert />} />
          <Route path="history" element={<History />} />
          <Route path="about" element={<About />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;