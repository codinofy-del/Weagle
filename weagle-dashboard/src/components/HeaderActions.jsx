import React from 'react'
import { Icon } from './icons'

function HeaderActions() {
  return (
    <div className="header-actions">
      <div className="header-left">
        <div className="chip">
          <Icon name="CalendarDays" />
          Nov 12, 2026
        </div>
        <div className="chip">
          <Icon name="Search" />
          Search
        </div>
        <button className="btn-secondary">Check Rates</button>
      </div>
      <button className="btn-primary">Create New Shipment</button>
    </div>
  )
}

export default HeaderActions
