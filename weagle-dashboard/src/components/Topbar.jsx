import React from 'react'
import { MessageCircle, Search, Settings, User } from 'lucide-react'

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <h1 className="page-title">Dashboard</h1>
        <div className="search-box">
          <Search size={20} strokeWidth={2} />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="topbar-right">
        <button className="icon-btn" aria-label="Settings"><Settings size={20} strokeWidth={2} /></button>
        <button className="icon-btn" aria-label="Messages"><MessageCircle size={20} strokeWidth={2} /></button>
        <button className="icon-btn" aria-label="Profile"><User size={20} strokeWidth={2} /></button>
      </div>
    </div>
  )
}

export default Topbar
