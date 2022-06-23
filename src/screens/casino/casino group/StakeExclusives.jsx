import React from 'react'
import CasinoGroupLayout from '../../../components/casino/casino group/CasinoGroupLayout'
import exclusive from '../../../assets/images/stakeExclusive.png'
import game from '../../../assets/images/cardslider5.jfif'
const StakeExclusives = () => {
  return (
    <>
    <CasinoGroupLayout heading={'Stake Exclusives'} headerImg={exclusive} game={game}/>
    </>
  )
}

export default StakeExclusives