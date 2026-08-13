import React from 'react'
import { Icon } from './icons'

const iconMap = { Dashboard: 'LayoutDashboard', 'Live Tracking': 'Truck', Shipments: 'Package', 'Fleet Management': 'LifeBuoy', 'Invoices & Billing': 'FileText', Transactions: 'CreditCard', 'Cargo Insurance': 'Shield', Customers: 'Users', 'Analytics & Reports': 'BarChart3', Help: 'HelpCircle', Settings: 'Settings' }

const navSections = [
  { title: 'Operations', items: [{ name: 'Dashboard', active: true }, { name: 'Live Tracking', active: false }, { name: 'Shipments', active: false, badge: '10' }, { name: 'Fleet Management', active: false, badge: '10' }] },
  { title: 'Finances', items: [{ name: 'Invoices & Billing', active: false, badge: '12' }, { name: 'Transactions', active: false, badge: '5' }, { name: 'Cargo Insurance', active: false }] },
  { title: 'Administration', items: [{ name: 'Customers', active: false }, { name: 'Analytics & Reports', active: false }] },
  { title: 'Appearance & Help', items: [{ name: 'Help', active: false }, { name: 'Settings', active: false }] },
]

function Sidebar({ collapsed, onToggle }) {
  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="brand"><div className="brand-icon">W</div>{!collapsed && <span>Weagle</span>}</div>
        <button className="collapse-btn" onClick={onToggle} aria-label="Toggle sidebar">
          {collapsed ? <Icon name="ChevronRight" /> : <Icon name="ChevronLeft" />}
        </button>
      </div>
      {navSections.map((section) => (
        <div key={section.title} className="nav-section">
          {!collapsed && <div className="nav-section-title">{section.title}</div>}
          {section.items.map((item) => {
            const icon = iconMap[item.name] || 'Circle'
            return <div key={item.name} className={`nav-item ${item.active ? 'active' : ''}`}>
              <div className="nav-item-icon"><Icon name={icon} /></div>
              {!collapsed && <><span className="nav-item-text">{item.name}</span>{item.badge && <span className="nav-badge">{item.badge}</span>}</>}
            </div>
          })}
        </div>
      ))}
      <div className="sidebar-footer"><div className="user-placeholder">Ops Admin</div></div>
    </div>
  )
}

export default Sidebar
