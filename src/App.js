import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import About from './About';
import POC from './POC';  


const Home = () => (
  <div>
    <h1>Welcome to the site which discusses latest AI/GenAI impact and hosts POC</h1>
    <p>This is the home page content.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App" style={{ display: 'flex' }}>
        <Sidebar />
        <div className="content" style={{ marginLeft: '200px', padding: '20px', width: '100%' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/poc" element={<POC />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
