import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Resume from './pages/Resume';
import MyTools from './pages/MyTools';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/my-tools" element={<MyTools />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
