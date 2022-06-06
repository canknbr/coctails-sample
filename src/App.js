import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import SingleCoctail from './pages/SingleCoctail';
import Error from './pages/Error';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/coctail/:id" element={<SingleCoctail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
