import React from 'react'

const navSections = [
  {
    title: 'Operations',
    items: [
      { name: 'Dashboard', active: true, badge: null },
      { name: 'Live Tracking', active: false, badge: null },
      { name: 'Shipments', active: false, badge: '10' },
      { name: 'Fleet Management', active: false, badge: '10' },
    ]
  },
  {
    title: 'Finances',
    items: [
      { name: 'Invoices & Billing', active: false, badge: '12' },
      { name: 'Transactions', active: false, badge: '5' },
      { name: 'Cargo Insurance', active: false, badge: null },
    ]
  },
  {
    title: 'Administration',
    items: [
      { name: 'Customers', active: false, badge: null },
      { name: 'Analytics & Reports', active: false, badge: null },
    ]
  },
  {
    title: 'Apperence & Help',
    items: [
      { name: 'Help', active: false, badge: null },
      { name: 'Settings', active: false, badge: null },
    ]
  },
]

function Sidebar({ collapsed, onToggle }) {
  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="brand">
          <div className="brand-icon">W</div>
          {!collapsed && <span>Weagle</span>}
        </div>
        <button className="collapse-btn" onClick={onToggle}>
          {collapsed ? '→' : '←'}
        </button>
      </div>
      
      {navSections.map((section, idx) => (
        <div key={idx} className="nav-section">
          {!collapsed && <div className="nav-section-title">{section.title}</div>}
          {section.items.map((item, itemIdx) => (
            <div 
              key={itemIdx} 
              className={`nav-item ${item.active ? 'active' : ''}`}
            >
              <div className="nav-item-icon">●</div>
              {!collapsed && (
                <>
                  <span className="nav-item-text">{item.name}</span>
                  {item.badge && <span className="nav-badge">{item.badge}</span>}
                </>
              )}
            </div>
          ))}
        </div>
      ))}
      
      <div className="sidebar-footer">
        <div className="user-placeholder"></div>
      </div>
    </div>
  )
}

export default Sidebar
