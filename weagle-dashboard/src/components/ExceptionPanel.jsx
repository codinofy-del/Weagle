import React from 'react'
import { AlertTriangle, Ban, MessageCircleWarning, PackageX } from 'lucide-react'

const exceptions = [
  { name: 'Damaged Items', count: 8, Icon: PackageX },
  { name: 'Missing Packages', count: 3, Icon: AlertTriangle },
  { name: 'Cancelled Orders', count: 16, Icon: Ban },
  { name: 'Customer Complaints', count: 24, Icon: MessageCircleWarning },
]

function ExceptionPanel() {
  return (
    <div className="right-card">
      <div className="card-header"><h3 className="card-title">Exception Management</h3></div>
      <div className="exception-list">
        {exceptions.map(({ name, count, Icon }) => <div key={name} className="exception-item"><div className="exception-name"><div className="exception-icon"><Icon size={20} strokeWidth={2} /></div><span>{name}</span></div><div className="exception-count">{count}</div></div>)}
      </div>
    </div>
  )
}

export default ExceptionPanel
