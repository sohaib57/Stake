import React from 'react'
import LayoutComp from '../layout/LayoutComp'
import ViewAllHeader from '../components/promotions/viewall/ViewAllHeader'
import ViewAllBody from '../components/promotions/viewall/ViewAllBody'

const ViewAll = () => {
    return (
        <LayoutComp>
            <ViewAllHeader />
            <ViewAllBody />
        </LayoutComp>
    )
}


export default ViewAll