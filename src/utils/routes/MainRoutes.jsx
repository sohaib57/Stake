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
import ViewAll from '../../screens/viewall/ViewAll';
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
import BuyCrypto from '../../screens/blog/BuyCrypto';
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
import Providers from '../../screens/casino/providers/Providers';
import ProviderGameScreen from '../../screens/casino/providers/ProviderGameScreen';
import Darts from '../../screens/sports/All Sports/Darts';
import Dota2 from '../../screens/sports/All Sports/Dota2';
import ElectronicsLeague from '../../screens/sports/All Sports/ElectronicsLeague';
import Fifa from '../../screens/sports/All Sports/Fifa';
import Formula1 from '../../screens/sports/All Sports/Formula1';
import Futsal from '../../screens/sports/All Sports/Futsal';
import GaelicHurling from '../../screens/sports/All Sports/GaelicHurling';
import Golf from '../../screens/sports/All Sports/Golf';
import Handball from '../../screens/sports/All Sports/Handball';
import IceHockey from '../../screens/sports/All Sports/IceHockey';
import IndyRacing from '../../screens/sports/All Sports/IndyRacing';
import LeagueOfLegend from '../../screens/sports/All Sports/LeagueOfLegend';
import MMA from '../../screens/sports/All Sports/MMA';
import MotorcycleRacing from '../../screens/sports/All Sports/MotorcycleRacing';
import Pesapallo from '../../screens/sports/All Sports/Pesapallo';
import PoliticsEntertainment from '../../screens/sports/All Sports/PoliticsEntertainment';
import RainbowSix from '../../screens/sports/All Sports/RainbowSix';
import Rugby from '../../screens/sports/All Sports/Rugby';
import SkiJumping from '../../screens/sports/All Sports/SkiJumping';
import Snooker from '../../screens/sports/All Sports/Snooker';
import StockCarRacing from '../../screens/sports/All Sports/StockCarRacing';
import TableTennis from '../../screens/sports/All Sports/TableTennis';
import Tennis from '../../screens/sports/All Sports/Tennis';
import Vollyball from '../../screens/sports/All Sports/Vollyball';
import Waterpolo from '../../screens/sports/All Sports/Waterpolo';
import CryptoBlogsScreen from '../../screens/blog/CryptoBlogsScreen';
import HowToGuideBlogs from '../../screens/blog/HowToGuideBlogs';
import HowtoUseVault from '../../screens/blog/HowtoUseVault';
import StakeNewsBlogs from '../../screens/blog/StakeNewsBlogs';
import SponsershipBLOG from '../../screens/blog/SponsershipBlog';
import OtherBlogs from '../../screens/blog/OtherBlogs';
import StakeRaces from '../../screens/viewall/StakeRaces';
import Casino from '../../screens/viewall/category/Casino';
import Sports from '../../screens/viewall/category/Sports';
import UfcPartnershipBlog from '../../screens/blog/UfcPartnershipBlog';
import MlbBlog from '../../screens/blog/MlbBlog';
import Settings from '../../components/profilemenuheader/settings/Settings';
import BlogComp from '../../components/blog/BlogComp';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/casinohome" element={<CasinoHome />} />
      <Route path="/casino" element={<CasinoHome />} />

      {/* Casino challenges  screens starts here */}

      <Route path="/casino/challenges/*" element={<Challenges />}>
        <Route path="all-claimed" element={<AllClaimed />} />
        <Route path="my-claimed" element={<MyClaimed />} />
      </Route>
      {/* settings */}

      {/* <Route path="/settings" element={<Settings />} /> */}
      <Route path="/settings/general/*" element={<Settings />}>
      <Route index  element={<BlogComp />} />
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
      <Route path="/ufc" element={<UFC />} />
      <Route path="/adesanya" element={<IsraelAdesanya />} />
      <Route path="/jose-aldo" element={<JoseAldo />} />
      <Route path="/alexa-grasso" element={<AlexaGrasso />} />
      <Route path="/inoue" element={<BoxingInJapan />} />
      <Route path="/brazil-rugby-league" element={<BrazilRugbyLeague />} />
      <Route path="/fittipaldi-brothers" element={<FittipaldiBrothers />} />
      <Route path="/casino/group/feature-buy-in" element={<FeatureByIn />} />
      <Route path="/casino/group/table-games" element={<TableGamesScreen />} />
      <Route path="/casino/group/blackjack" element={<BlackJack />} />
      <Route path="/casino/group/baccarat" element={<Baccarat />} />
      <Route path="/casino/group/roulette" element={<Roulette />} />

      <Route path="/casino-favourite" element={<FavouriteScreen />} />
      <Route path="/recent" element={<Recent />} />
      {/* sports home */}
      <Route path="/casino-favourite" element={<FavouriteScreen />} />
      <Route path="/casino/group/feature-buy-in" element={<FeatureByIn />} />
      <Route path="/casino/group/table-games" element={<TableGamesScreen />} />
      <Route path="/casino/group/blackjack" element={<BlackJack />} />
      <Route path="/casino/group/baccarat" element={<Baccarat />} />
      <Route path="/casino/group/roulette" element={<Roulette />} />

      <Route path="/casino-favourite" element={<FavouriteScreen />} />
      <Route path="/recent" element={<Recent />} />
      <Route path="/casino-favourite" element={<FavouriteScreen />} />

      {/* Promotions */}

      <Route path="/promotions" element={<ViewAll />} />
      <Route path="promotions/promotion/stake-races" element={<StakeRaces />} />
      <Route path="/promotions/category/casino" element={<Casino />} />
      <Route path="/promotions/category/sports" element={<Sports />} />

      {/* sports home */}

      <Route path="/sports/home" element={<SportsHomeScreen />} />
      <Route path="/sports/home/*" element={<SportsHomeScreen />}>
        <Route path="my-bets" element={<MyBets />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="live-events" element={<LiveEvents />} />
        <Route path="starting-soon" element={<StartingSoon />} />
      </Route>
      <Route path="/sports/my-bets" element={<MyBetsScreen />} />
      <Route path="/sports/live-events" element={<LiveEventsScreen />} />
      <Route path="/sports/upcoming" element={<StartingSoonScreen />} />
      {/* popular sports screens */}
      <Route path="/sports/baseball/usa/mlb" element={<Mlb />} />
      {/* all sports */}
      <Route path="/sports/soccer" element={<Soccer />} />
      <Route path="/sports/alpine-skiing" element={<AlpineSkiing />} />
      <Route path="/sports/american-football" element={<AmericanFootball />} />
      <Route path="/sports/aussie-rules" element={<AussieRules />} />
      <Route path="/sports/badminton" element={<Badminton />} />
      <Route path="/sports/baseball" element={<BaseBall />} />
      <Route path="/sports/basketball" element={<Basketball />} />
      <Route path="/sports/biathlon" element={<Biathlon />} />
      <Route path="/sports/bowls" element={<Bowls />} />
      <Route path="/sports/boxing" element={<Boxing />} />
      <Route path="/sports/counter-strike" element={<CounterStrike />} />
      <Route path="/sports/cricket" element={<Cricket />} />
      <Route path="/sports/cross-country" element={<CrossCountry />} />
      <Route path="/sports/cycling" element={<Cycling />} />
      <Route path="/sports/darts" element={<Darts />} />
      <Route path="/sports/dota-2" element={<Dota2 />} />
      <Route
        path="/sports/electronic-leagues"
        element={<ElectronicsLeague />}
      />
      <Route path="/sports/fifa" element={<Fifa />} />
      <Route path="/sports/formula-1" element={<Formula1 />} />
      <Route path="/sports/futsal" element={<Futsal />} />
      <Route path="/sports/gaelic-hurling" element={<GaelicHurling />} />
      <Route path="/sports/golf" element={<Golf />} />
      <Route path="/sports/handball" element={<Handball />} />
      <Route path="/sports/ice-hockey" element={<IceHockey />} />
      <Route path="/sports/indy-racing" element={<IndyRacing />} />
      <Route path="/sports/league-of-legends" element={<LeagueOfLegend />} />
      <Route path="/sports/mma" element={<MMA />} />
      <Route path="/sports/pesapallo" element={<Pesapallo />} />
      <Route
        path="/sports/politics-entertainment"
        element={<PoliticsEntertainment />}
      />
      <Route path="/sports/motorcycle-racing" element={<MotorcycleRacing />} />
      <Route path="/sports/rainbow-six" element={<RainbowSix />} />
      <Route path="/sports/rugby" element={<Rugby />} />
      <Route path="/sports/ski-jumping" element={<SkiJumping />} />
      <Route path="/sports/snooker" element={<Snooker />} />
      <Route path="/sports/stock-car-racing" element={<StockCarRacing />} />
      <Route path="/sports/table-tennis" element={<TableTennis />} />
      <Route path="/sports/tennis" element={<Tennis />} />
      <Route path="/sports/vollyball" element={<Vollyball />} />
      <Route path="/sports/waterpolo" element={<Waterpolo />} />
      <Route path="/sports/soccer" element={<Soccer />} />
      <Route path="/sports/alpine-skiing" element={<AlpineSkiing />} />
      <Route path="/sports/american-football" element={<AmericanFootball />} />
      <Route path="/sports/aussie-rules" element={<AussieRules />} />
      <Route path="/sports/badminton" element={<Badminton />} />
      <Route path="/sports/baseball" element={<BaseBall />} />
      <Route path="/sports/basketball" element={<Basketball />} />
      <Route path="/sports/biathlon" element={<Biathlon />} />
      <Route path="/sports/bowls" element={<Bowls />} />
      <Route path="/sports/boxing" element={<Boxing />} />
      <Route path="/sports/counter-strike" element={<CounterStrike />} />
      <Route path="/sports/cricket" element={<Cricket />} />
      <Route path="/sports/cross-country" element={<CrossCountry />} />
      <Route path="/sports/cycling" element={<Cycling />} />
      {/* provider */}
      <Route path="/casino/collection/provider" element={<Providers />} />
      <Route
        path="/casino/group/no-limit-city"
        element={<ProviderGameScreen />}
      />
      {/* blogs */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/how-to-buy-crypto" element={<BuyCrypto />} />
      <Route path="/blog/category/crypto" element={<CryptoBlogsScreen />} />
      <Route
        path="/blog/category/how-to-guides"
        element={<HowToGuideBlogs />}
      />
      <Route path="/blog/how-to-use-our-vault" element={<HowtoUseVault />} />
      <Route path="/blog/category/stake-news" element={<StakeNewsBlogs />} />
      <Route path="/blog/stakecom-sponsors" element={<SponsershipBLOG />} />
      <Route path="/blog/category/other" element={<OtherBlogs />} />
      <Route
        path="/blog/ufc-stake-partnership"
        element={<UfcPartnershipBlog />}
      />
      <Route
        path="/blog/mlb-2022-weekly-preview-week-14"
        element={<MlbBlog />}
      />
      {/* no match screen */}
      <Route path="*" element={<NoMatchScreen />} />
    </Routes>
  );
};

export default MainRoutes;
