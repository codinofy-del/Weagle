import React from 'react'
import { Icon } from './icons'

const exceptions = [
  { name: 'Damaged Items', count: 8, icon: 'PackageX' },
  { name: 'Missing Packages', count: 3, icon: 'AlertTriangle' },
  { name: 'Cancelled Orders', count: 16, icon: 'Ban' },
  { name: 'Customer Complaints', count: 24, icon: 'MessageCircleWarning' },
]

function ExceptionPanel() {
  return (
    <div className="right-card">
      <div className="card-header"><h3 className="card-title">Exception Management</h3></div>
      <div className="exception-list">
        {exceptions.map(({ name, count, icon }) => <div key={name} className="exception-item"><div className="exception-name"><div className="exception-icon"><Icon name={icon} /></div><span>{name}</span></div><div className="exception-count">{count}</div></div>)}
      </div>
    </div>
  )
}

export default ExceptionPanel
