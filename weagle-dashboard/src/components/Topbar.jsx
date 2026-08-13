import React from 'react'
import { Icon } from './icons'

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <h1 className="page-title">Dashboard</h1>
        <div className="search-box">
          <Icon name="Search" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="topbar-right">
        <button className="icon-btn" aria-label="Settings"><Icon name="Settings" /></button>
        <button className="icon-btn" aria-label="Messages"><Icon name="MessageCircle" /></button>
        <button className="icon-btn" aria-label="Profile"><Icon name="User" /></button>
      </div>
    </div>
  )
}

export default Topbar
