import React from 'react'
import CasinoGroupLayout from '../../../components/casino/casino group/CasinoGroupLayout'
import blackjack from '../../../assets/images/blackjack.png'
import game from '../../../assets/images/cardslider7.jfif'
const BlackJack = () => {
  return (
    <CasinoGroupLayout heading={'Blackjack'} headerImg={blackjack} game={game}/>
  )
}

export default BlackJack