import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CasinoFavouriteComp from '../../components/casino/favourite/CasinoFavouriteComp';
import { CasinoHome } from '../../screens/casino/CasinoHome';
import Home from '../../screens/home/Home';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/casino" element={<CasinoHome />} />
      <Route path="/favourite" element={<CasinoFavouriteComp />} />
    </Routes>
  );
};

export default MainRoutes;
