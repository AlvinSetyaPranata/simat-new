import Sidebar from "../components/Organisms/Sidebar"
import Navbar from "../components/Atoms/Navbar"
import { useState } from "react"

function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false)

  return (
    <div className="flex font-primary">
     <Sidebar expanded={sidebarExpanded}/>
     <div className="w-full">
      <Navbar onClick={() => setSidebarExpanded(state => !state)} />
      
      {/* content */}
      <div className="p-6">
        <h1 className="font-medium">Dashboard</h1>
      </div>


     </div>
    </div>
  )
}

export default App
