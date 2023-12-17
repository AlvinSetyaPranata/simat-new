import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../pages/App'

export default function Router() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    )
}
