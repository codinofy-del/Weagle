import React from 'react'

function HeaderActions() {
  return (
    <div className="header-actions">
      <div className="header-left">
        <div className="chip">
          <span>📅</span>
          Nov 12, 2026
        </div>
        <div className="chip">
          <span>🔍</span>
          Search
        </div>
        <button className="btn-secondary">Check Rates</button>
      </div>
      <button className="btn-primary">Create New Shipment</button>
    </div>
  )
}

export default HeaderActions
