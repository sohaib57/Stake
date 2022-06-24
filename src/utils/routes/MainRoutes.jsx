import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CasinoHome from '../../screens/casino/home/CasinoHome';
import Challenges from '../../screens/casino/challenges/Challenges';
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
import AllClaimed from '../../components/casino/challenges/allclaimed/AllClaimed';
import MyClaimed from '../../components/casino/challenges/myclaimed/MyClaimed';
import Active from '../../components/casino/challenges/active/Active';
import ViewAll from '../../screens/ViewAll'
import Drake from '../../screens/sponsorships/Drake';
import WatfordFC from '../../screens/sponsorships/WatfordFC';
import KunAguero from '../../screens/sponsorships/KunAguero';
import UFC from '../../screens/sponsorships/UFC';
import IsraelAdesanya from '../../screens/sponsorships/IsraelAdesanya';
import JoseAldo from '../../screens/sponsorships/JoseAldo';
import AlexaGrasso from '../../screens/sponsorships/AlexaGrasso';
import BoxingInJapan from '../../screens/sponsorships/BoxingInJapan';
import BrazilRugbyLeague from '../../screens/sponsorships/BrazilRugbyLeague';
import FittipaldiBrothers from '../../screens/sponsorships/FittipaldiBrothers';
import Blog from '../../screens/blog/Blog';
import SportsHomeScreen from '../../screens/sports/home/SportsHomeScreen';
import MyBets from '../../components/sports/home/MyBets';
import Favourites from '../../components/sports/home/Favourites';
import LiveEvents from '../../components/sports/home/LiveEvents';
import StartingSoon from '../../components/sports/home/StartingSoon';
import MyBetsScreen from '../../screens/sports/MyBetsScreen';
import LiveEventsScreen from '../../screens/sports/LiveEventsScreen';
import StartingSoonScreen from '../../screens/sports/StartingSoonScreen';
import Mlb from '../../screens/sports/popular/Mlb';
import Recent from '../../screens/casino/recent/Recent';
import Soccer from '../../screens/sports/top sports/Soccer.jsx';
import AlpineSkiing from '../../screens/sports/All Sports/AlpineSkiing';
import AmericanFootball from '../../screens/sports/All Sports/AmericanFootball';
import AussieRules from '../../screens/sports/All Sports/AussieRules';
import Badminton from '../../screens/sports/All Sports/Badminton';
import BaseBall from '../../screens/sports/All Sports/BaseBall';
import Basketball from '../../screens/sports/All Sports/Basketball';
import Biathlon from '../../screens/sports/All Sports/Biathlon';
import Bowls from '../../screens/sports/All Sports/Bowls';
import Boxing from '../../screens/sports/All Sports/Boxing';
import CounterStrike from '../../screens/sports/All Sports/CounterStrike';
import Cricket from '../../screens/sports/All Sports/Cricket';
import CrossCountry from '../../screens/sports/All Sports/CrossCountry';
import Cycling from '../../screens/sports/All Sports/Cycling';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/casinohome" element={<CasinoHome />} />
      <Route path="/casino" element={<CasinoHome />} />

      {/* Casino challenges  screens starts here */}

      <Route path="/casino/challenges/*" element={<Challenges />} >
        <Route path="all-claimed" element={<AllClaimed />} />
        <Route path="my-claimed" element={<MyClaimed />} />
      </Route>

      {/* Casino challenges screens ends here */}

      <Route path="/group/stake-originals" element={<StakeOriginalsScreen />} />
      <Route path="/casinofavourite" element={<FavouriteScreen />} />
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
      <Route path="/casino/group/slots" element={<Slots />} />
      <Route path="/casino/group/live-casino" element={<LiveCasinoScreen />} />
      <Route path="/casino/group/game-shows" element={<GameShowsScreen />} />
      <Route
        path="/casino/group/new-releases"
        element={<NewReleasesScreen />}
      />
      <Route path="/casino/group/feature-buy-in" element={<FeatureByIn />} />
      <Route path="/casino/group/table-games" element={<TableGamesScreen />} />
      <Route path="/casino/group/blackjack" element={<BlackJack />} />
      <Route path="/casino/group/baccarat" element={<Baccarat />} />
      <Route path="/casino/group/roulette" element={<Roulette />} />

      <Route path="/casino-favourite" element={<FavouriteScreen />} />
      <Route path="*" element={<NoMatchScreen />} />

      {/* {sponsorship} */}
      <Route path="/drake" element={<Drake />} />
      <Route path="/watford" element={<WatfordFC />} />
      <Route path="/kun-aguero" element={<KunAguero />} />
      <Route path="/ufc" elemen t={<UFC />} />
      <Route path="/adesanya" element={<IsraelAdesanya />} />
      <Route path="/jose-aldo" element={<JoseAldo />} />
      <Route path="/alexa-grasso" element={<AlexaGrasso />} />
      <Route path="/inoue" element={<BoxingInJapan />} />
      <Route path="/brazil-rugby-league" element={<BrazilRugbyLeague />} />
      <Route path="/fittipaldi-brothers" element={<FittipaldiBrothers />} />
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
      <Route path="/recent" element={<Recent />}/>
      {/* sports home */}
      <Route path="/casino-favourite" element={<FavouriteScreen />}>

      <Route path="/casino-favourite" element={<FavouriteScreen />} />


      </Route>

      <Route path='/promotions' element={<ViewAll />} />
      {/* casino favourite */}
      <Route path="/sports/home" element={<SportsHomeScreen />} />
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
      {/* all sports */}
      <Route path='/sports/soccer' element={<Soccer/>}/>
      <Route path='/sports/alpine-skiing' element={<AlpineSkiing/>}/>
      <Route path='/sports/american-football' element={<AmericanFootball/>}/>
      <Route path='/sports/aussie-rules' element={<AussieRules/>}/>
      <Route path='/sports/badminton' element={<Badminton/>}/>
      <Route path='/sports/baseball' element={<BaseBall/>}/>
      <Route path='/sports/basketball' element={<Basketball/>}/>
      <Route path='/sports/biathlon' element={<Biathlon/>}/>
      <Route path='/sports/bowls' element={<Bowls/>}/>
      <Route path='/sports/boxing' element={<Boxing/>}/>
      <Route path='/sports/counter-strike' element={<CounterStrike/>}/>
      <Route path='/sports/cricket' element={<Cricket/>}/>
      <Route path='/sports/cross-country' element={<CrossCountry/>}/>
      <Route path='/sports/cycling' element={<Cycling/>}/>
      {/* no match screen */}
      <Route path="*" element={<NoMatchScreen />} />
      <Route path='/blog' element={<Blog />} />
    </Routes>
  );
};

export default MainRoutes;
