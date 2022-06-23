import React from 'react'
import CasinoGroupLayout from '../../../components/casino/casino group/CasinoGroupLayout'
import roulette from '../../../assets/images/roulette.png'
import game from '../../../assets/images/cardslider7.jfif'
const Roulette = () => {
  return (
    <CasinoGroupLayout heading={'Roulette'} headerImg={roulette} game={game}/>
  )
}

export default Roulette