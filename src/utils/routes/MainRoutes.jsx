import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../../components/header/Header';
import { CasinoHome } from '../../screens/casino/CasinoHome';
import Home from '../../screens/home/Home';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/casino" element={<CasinoHome />} />
      <Route path="/header" element={<Header />} />
    </Routes>
  );
};

export default MainRoutes;
