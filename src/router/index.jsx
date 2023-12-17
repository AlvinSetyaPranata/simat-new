import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Schedule from '../pages/Schedule'
import Home from '../pages/Home'
import MainLayout from '../layouts/mainLayout'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/schedule" element={<Schedule />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
