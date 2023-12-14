import Sidebar from "../components/Organisms/Sidebar"
import Navbar from "../components/Atoms/Navbar"
import { useState } from "react"

function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false)

  return (
    <div className="flex">
     <Sidebar expanded={sidebarExpanded}/>
     <div className="w-full">
      <Navbar onClick={() => setSidebarExpanded(state => !state)} />
      <div className="pt-4 px-4">
        <p>Hello worlds</p>
      </div>
     </div>
    </div>
  )
}

export default App
