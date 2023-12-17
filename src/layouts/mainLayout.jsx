// Main layout will include the sidebar and the navbar



import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from "../components/Organisms/Sidebar"
import Navbar from "../components/Molecules/Navbar"
import { useState } from "react"

export default function MainLayout() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false)


  return (
    <div className="flex font-primary">
      <Sidebar expanded={sidebarExpanded} />
      <div className="w-full">
        <Navbar onClick={() => setSidebarExpanded(state => !state)} />

        <Outlet />
      </div>
    </div>
  )
}
