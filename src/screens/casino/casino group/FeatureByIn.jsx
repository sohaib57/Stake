import React from 'react'
import CasinoGroupLayout from '../../../components/casino/casino group/CasinoGroupLayout'
import feature from '../../../assets/images/feature.png'
import game from '../../../assets/images/cardslider3.jfif'
const FeatureByIn = () => {
  return (
    <CasinoGroupLayout heading={'Feature Buy-In'} headerImg={feature} game={game}/>
  )
}

export default FeatureByIn