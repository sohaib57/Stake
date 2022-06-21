import React from 'react'
import CasinoGroupLayout from '../../../components/casino/casino group/CasinoGroupLayout'
import table from '../../../assets/images/table.png'
import game from '../../../assets/images/cardslider3.jfif'
const TableGamesScreen = () => {
  return (
    <CasinoGroupLayout heading={'Table Games'} headerImg={table} game={game}/>
  )
}

export default TableGamesScreen