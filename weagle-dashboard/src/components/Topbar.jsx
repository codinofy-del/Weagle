import React from 'react'

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <h1 className="page-title">Dashboard</h1>
        <div className="search-box">
          <span>🔍</span>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="topbar-right">
        <button className="icon-btn">⚙️</button>
        <button className="icon-btn">💬</button>
        <button className="icon-btn">👤</button>
      </div>
    </div>
  )
}

export default Topbar
