import React from 'react'
import { CalendarDays, Search } from 'lucide-react'

function HeaderActions() {
  return (
    <div className="header-actions">
      <div className="header-left">
        <div className="chip">
          <CalendarDays size={20} strokeWidth={2} />
          Nov 12, 2026
        </div>
        <div className="chip">
          <Search size={20} strokeWidth={2} />
          Search
        </div>
        <button className="btn-secondary">Check Rates</button>
      </div>
      <button className="btn-primary">Create New Shipment</button>
    </div>
  )
}

export default HeaderActions
