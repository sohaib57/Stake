import React from 'react'
import CasinoFavouriteComp from '../../../components/casino/favourite/CasinoFavouriteComp'
import useDocumentTitle from '../../../utils/useDocumentTitle'
const FavouriteScreen = () => {
    useDocumentTitle('Favourite Casino Games - Stake.com')
    return (
        <>
            <CasinoFavouriteComp />
        </>
    )
}

export default FavouriteScreen