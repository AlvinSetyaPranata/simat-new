import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Schedule from '../pages/Schedule'
import Home from '../pages/Home'
import MainLayout from '../layouts/mainLayout'
import ClassList from '../pages/ClassList'
import Absence from '../pages/Absence'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/class-list" element={<ClassList />} />
                    <Route path="/absence" element={<Absence />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
