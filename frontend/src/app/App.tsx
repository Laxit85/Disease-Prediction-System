import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Preloader from '@/app/components/Preloader';
import Layout from '@/app/components/Layout';
import ProtectedRoute from '@/app/components/ProtectedRoute';
import Home from '@/app/pages/Home';
import Login from '@/app/pages/Login';
import SignUp from '@/app/pages/SignUp';
import CheckDisease from '@/app/pages/CheckDisease';
import History from '@/app/pages/History';
import EmergencyContact from '@/app/pages/EmergencyContact';
import HealthGuide from '@/app/pages/HealthGuide';
import About from '@/app/pages/About';
import Contact from '@/app/pages/Contact';
import Profile from '@/app/pages/Profile';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0f] text-white">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/check-disease" element={<ProtectedRoute><CheckDisease /></ProtectedRoute>} />
            <Route path="/history" element={<ProtectedRoute><History /></ProtectedRoute>} />
            <Route path="/emergency" element={<ProtectedRoute><EmergencyContact /></ProtectedRoute>} />
            <Route path="/health-guide" element={<ProtectedRoute><HealthGuide /></ProtectedRoute>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
