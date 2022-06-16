import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../screens/home/Home'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default MainRoutes;