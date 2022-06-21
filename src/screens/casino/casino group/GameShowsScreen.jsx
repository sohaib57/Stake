import React from 'react'
import CasinoGroupLayout from '../../../components/casino/casino group/CasinoGroupLayout';
import gameshow from '../../../assets/images/gameshow.png';
import game from '../../../assets/images/cardslider1.jfif';
const GameShowsScreen = () => {
  return (
    <>
    <CasinoGroupLayout
      heading={'Game Shows'}
      headerImg={gameshow}
      game={game}
    />
  </>
  )
}

export default GameShowsScreen