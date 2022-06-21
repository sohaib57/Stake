import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CasinoHome } from '../../screens/casino/home/CasinoHome';
import Home from '../../screens/home/Home';
import LiveCasino from '../../components/casino/live casino/LiveCasino';
import FavouriteScreen from '../../screens/casino/favourite/FavouriteScreen';
import FeaturedSlots from '../../components/casino/features slots/FeaturedSlots';
import GameShows from '../../components/casino/game shows/GameShows';
import StakeOriginalsComp from '../../components/casino/Stake Originals/StakeOriginalsComp';
import NoMatchScreen from '../../screens/NoMatchScreen';
import StakeOriginalsScreen from '../../screens/casino/stake originals/StakeOriginalsScreen';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/casino/home/*" element={<CasinoHome />}>
        <Route path="live-casino" element={<LiveCasino />} />
        <Route path="featured-slots" element={<FeaturedSlots />} />
        <Route path="game-shows" element={<GameShows />} />
        <Route path="stake-originals" element={<StakeOriginalsComp />} />
      </Route>
      <Route path="*" element={<NoMatchScreen />}/>
        <Route path="/casino/group/stake-originals" element={<StakeOriginalsScreen />} />
      <Route path="/casino-favourite" element={<FavouriteScreen />} />
    </Routes>
  );
};

export default MainRoutes;
