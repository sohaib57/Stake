import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CasinoHome } from '../../screens/casino/home/CasinoHome';
import Home from '../../screens/home/Home';
import LiveCasino from '../../components/casino/home/live casino/LiveCasino';
import FavouriteScreen from '../../screens/casino/favourite/FavouriteScreen';
import FeaturedSlots from '../../components/casino/home/features slots/FeaturedSlots';
import GameShows from '../../components/casino/home/game shows/GameShows';
import StakeOriginalsComp from '../../components/casino/home/Stake Originals/StakeOriginalsComp';
import NoMatchScreen from '../../screens/NoMatchScreen';
import StakeOriginalsScreen from '../../screens/casino/home/StakeOriginalsScreen';
import StakeExclusives from '../../screens/casino/casino group/StakeExclusives';
import Slots from '../../screens/casino/casino group/Slots';
import LiveCasinoScreen from '../../screens/casino/casino group/LiveCasinoScreen';
import GameShowsScreen from '../../screens/casino/casino group/GameShowsScreen';
import NewReleasesScreen from '../../screens/casino/casino group/NewReleasesScreen';
import FeatureByIn from '../../screens/casino/casino group/FeatureByIn';
import TableGamesScreen from '../../screens/casino/casino group/TableGamesScreen';
import BlackJack from '../../screens/casino/casino group/BlackJack';
import Baccarat from '../../screens/casino/casino group/Baccarat';
import Roulette from '../../screens/casino/casino group/Roulette';
import Blog from '../../screens/blog/Blog';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* casino home  */}
      <Route path="/casino/home/*" element={<CasinoHome />}>
        <Route path="live-casino" element={<LiveCasino />} />
        <Route path="featured-slots" element={<FeaturedSlots />} />
        <Route path="game-shows" element={<GameShows />} />
        <Route path="stake-originals" element={<StakeOriginalsComp />} />
      </Route>
      {/* casino group */}
      <Route
        path="/casino/group/stake-originals"
        element={<StakeOriginalsScreen />}
      />
      <Route
        path="/casino/group/stake-exclusives"
        element={<StakeExclusives />}
      />
      <Route
        path="/casino/group/slots"
        element={<Slots />}
      />
      <Route
        path="/casino/group/live-casino"
        element={<LiveCasinoScreen />}
      />
      <Route
        path="/casino/group/game-shows"
        element={<GameShowsScreen />}
      />
      <Route
        path="/casino/group/new-releases"
        element={<NewReleasesScreen />}
      />
      <Route
        path="/casino/group/feature-buy-in"
        element={<FeatureByIn />}
      />
      <Route
        path="/casino/group/table-games"
        element={<TableGamesScreen />}
      />
      <Route
        path="/casino/group/blackjack"
        element={<BlackJack />}
      />
      <Route
        path="/casino/group/baccarat"
        element={<Baccarat />}
      />
      <Route
        path="/casino/group/roulette"
        element={<Roulette />}
      />

      <Route path="/casino-favourite" element={<FavouriteScreen />} />
      <Route path="*" element={<NoMatchScreen />} />
      <Route path='/blog' element={<Blog />} />
    </Routes>
  );
};

export default MainRoutes;
