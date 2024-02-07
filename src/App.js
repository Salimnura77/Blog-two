import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Blog from './component/Blog/Blog1';
// import LandingPage from './component/BlogContents/body/landing/landingpage';
import Blog2 from './component/Blog/Blog2';
import Blog3 from './component/Blog/Blog3';
import Blog4 from './component/Blog/Blog4';
import Latestpost from './component/BlogContents/body/3d/latestpost';

function Home() {
  return <Blog />;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/apple" element={<Blog2 />} />
          <Route path='/business' element={<Blog3 />} />
          <Route path='/finance' element={<Blog4 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
