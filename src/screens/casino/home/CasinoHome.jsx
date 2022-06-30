import React from 'react'
import CasinoHomeComp from '../../../components/casino/home/CasinoHomeComp'
import LayoutComp from '../../../layout/LayoutComp'
import useDocumentTitle from '../../../utils/useDocumentTitle'

const CasinoHome = () => {
  useDocumentTitle('Crypto Casino Online - Bitcoin +')
  return (
    <LayoutComp>
    <CasinoHomeComp/>
    </LayoutComp>
  )
}


export default CasinoHome