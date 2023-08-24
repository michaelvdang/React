// react-router is a more thorough example
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes, Outlet } from 'react-router-dom';
import './App.css';

import Manatee from '../Manatee/Manatee';
import Narwhal from '../Narwhal/Narwhal';
import Whale from '../Whale/Whale';
import Beluga from '../Whale/Beluga';
import Blue from '../Whale/Blue';
import WhaleLayout from '../Whale/WhaleLayout';

function App() {
  return (
    <Router>
    <div className="wrapper">
      <h1>Marine Mammals</h1>
      <nav>
        <ul>
          <li><Link to="/manatee">Manatee</Link></li>
          <li><Link to="/narwhal">Narwhal</Link></li>
          <li><Link to="/whale">Whale</Link></li>
          <li><Link to="/whale/beluga">Beluga Whale</Link></li>
          <li><Link to="/whale/blue">Blue Whale</Link></li>
          {/* <li><a href="/manatee">Manatee</a></li>
          <li><a href="/narwhal">Narwhal</a></li>
          <li><a href="/whale">Whale</a></li> */}
        </ul>
      </nav>
        <Routes>
          <Route path="/manatee" element={<Manatee />} />
          <Route exact path="/narwhal" element={<Narwhal />} />
          <Route path="/whale/*" element={<WhaleLayout />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;