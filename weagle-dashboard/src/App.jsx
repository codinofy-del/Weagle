import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import HeaderActions from './components/HeaderActions'
import KPIRow from './components/KPIRow'
import MapCard from './components/MapCard'
import ActivityPanel from './components/ActivityPanel'
import ExceptionPanel from './components/ExceptionPanel'
import DemoPrimitives from './components/DemoPrimitives'

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="app-container">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="main-content">
        <Topbar />
        <HeaderActions />
        <DemoPrimitives />
        <div className="dashboard-content">
          <div className="center-panel">
            <KPIRow />
            <MapCard />
          </div>
          <div className="right-panel">
            <ActivityPanel />
            <ExceptionPanel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
