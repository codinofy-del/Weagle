import React from 'react'

const exceptions = [
  { name: 'Damaged Items', count: 8, icon: '📦' },
  { name: 'Missing Packages', count: 3, icon: '❓' },
  { name: 'Cancelled Orders', count: 16, icon: '🚫' },
  { name: 'Customer Complaints', count: 24, icon: '💬' },
]

function ExceptionPanel() {
  return (
    <div className="right-card">
      <div className="card-header">
        <h3 className="card-title">Exception Management</h3>
      </div>
      <div className="exception-list">
        {exceptions.map((item, idx) => (
          <div key={idx} className="exception-item">
            <div className="exception-name">
              <div className="exception-icon">{item.icon}</div>
              <span>{item.name}</span>
            </div>
            <div className="exception-count">{item.count}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExceptionPanel
