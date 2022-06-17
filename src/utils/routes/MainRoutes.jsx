import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CasinoHome } from '../../screens/casino/CasinoHome';
import FavouriteScreen from '../../screens/casino/FavouriteScreen';
import Home from '../../screens/home/Home';
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/casinohome" element={<CasinoHome />} />
      <Route path="/casino" element={<CasinoHome />} />
      <Route path="/casinofavourite" element={<FavouriteScreen />} />
    </Routes>
  );
};

export default MainRoutes;
