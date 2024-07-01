// App.js
import React from 'react';
import Shops from './pages/Shops';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CancelBooking from './pages/CancelBooking';
import Chat from './pages/Chat';
import ReportMissingBag from './pages/ReportMissingBag';
import DynamicPricing from './pages/DynamicPricing';
import Home from './pages/Home';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cancel-booking" element={<CancelBooking />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/report-missing-bag" element={<ReportMissingBag />} />
        <Route path="/dynamic-pricing" element={<DynamicPricing />} />
        <Route path="/register" element={<Register />} /> {/* Register route */}
        <Route path="/login" element={<Login />} /> {/* Login route */}
      </Routes>
    </Router>
  );
}

export default App;

