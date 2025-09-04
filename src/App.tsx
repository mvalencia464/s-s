import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import BookingPage from './components/BookingPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;