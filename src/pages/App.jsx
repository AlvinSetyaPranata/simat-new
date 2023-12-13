import Sidebar from "../components/Organisms/Sidebar"
import Navbar from "../components/Atoms/Navbar"
import { useState } from "react"

function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false)

  return (
    <div className="flex">
     <Sidebar expanded={sidebarExpanded}/>
     <div>
      <Navbar onClick={() => setSidebarExpanded(state => !state)} />
      <div>
        <p>Hello worlds</p>
      </div>
     </div>
    </div>
  )
}

export default App
