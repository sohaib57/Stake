import React from 'react'
import CasinoGroupLayout from '../../../components/casino/casino group/CasinoGroupLayout'
import baccarat from '../../../assets/images/baccarat.png'
import game from '../../../assets/images/cardslider7.jfif'
const Baccarat = () => {
  return (
    <CasinoGroupLayout heading={'Baccarat'} headerImg={baccarat} game={game}/>
  )
}

export default Baccarat