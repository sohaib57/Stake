import React from 'react'
import LayoutComp from '../../layout/LayoutComp'
import Header from '../../components/promotions/viewall/Header'
import ViewAllBody from '../../components/promotions/viewall/ViewAllBody'
import favourite from '../../assets/images/favouriteLogo.png'

const ViewAll = () => {
    return (
        <LayoutComp>
            <Header text={'Promotions'} img={favourite} />
            <ViewAllBody />
        </LayoutComp>
    )
}


export default ViewAll