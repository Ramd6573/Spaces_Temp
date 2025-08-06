import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ListingsPage from './pages/ListingsPage';
import SpaceDetailPage from './pages/SpaceDetailPage';
import BookingFlow from './pages/BookingFlow';
import HostFlow from './pages/HostFlow';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path="/space/:id" element={<SpaceDetailPage />} />
        <Route path="/booking/:spaceId" element={<BookingFlow />} />
        <Route path="/host" element={<HostFlow />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App; 