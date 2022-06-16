import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../../components/header/Header'
import Home from '../../components/home/Stake'


const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}>

            </Route>
            <Route path="/header" element={<Header />}>

            </Route>
           

        </Routes>
    )
}

export default MainRoutes;