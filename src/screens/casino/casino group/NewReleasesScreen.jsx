import React from 'react'
import CasinoGroupLayout from '../../../components/casino/casino group/CasinoGroupLayout'
import exclusive from '../../../assets/images/stakeExclusive.png'
import game from '../../../assets/images/cardslider5.jfif'
const NewReleasesScreen = () => {
  return (
    <CasinoGroupLayout heading={'New Releases'} headerImg={exclusive} game={game}/>
  )
}

export default NewReleasesScreen