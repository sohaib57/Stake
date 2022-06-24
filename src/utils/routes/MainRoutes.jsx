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
import SportsHomeScreen from '../../screens/sports/home/SportsHomeScreen';
import MyBets from '../../components/sports/home/MyBets';
import Favourites from '../../components/sports/home/Favourites';
import LiveEvents from '../../components/sports/home/LiveEvents';
import StartingSoon from '../../components/sports/home/StartingSoon';
import MyBetsScreen from '../../screens/sports/MyBetsScreen';
import LiveEventsScreen from '../../screens/sports/LiveEventsScreen';
import StartingSoonScreen from '../../screens/sports/StartingSoonScreen';
import Mlb from '../../screens/sports/popular/Mlb';

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
     
      <Route path="/casino-favourite" element={<FavouriteScreen />}/>
      {/* sports home */}
      <Route path="/sports/home/*" element={<SportsHomeScreen />}>
      <Route path="my-bets" element={<MyBets />}/>
      <Route path="favourites" element={<Favourites />}/>
      <Route path="live-events" element={<LiveEvents />}/>
      <Route path="starting-soon" element={<StartingSoon />}/>
      </Route>
      <Route path="/sports/my-bets" element={<MyBetsScreen />}/>
      <Route path="/sports/live-events" element={<LiveEventsScreen />}/>
      <Route path="/sports/upcoming" element={<StartingSoonScreen />}/>
      {/* popular sports screens */}
      <Route path="/sports/baseball/usa/mlb" element={<Mlb />}/>
      <Route path="*" element={<NoMatchScreen />} />
    </Routes>
  );
};

export default MainRoutes;
