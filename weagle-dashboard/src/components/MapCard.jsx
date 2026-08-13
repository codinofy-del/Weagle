import React, { useState } from 'react'
import { Icon } from './icons'

const shipments = [
  { id: 1, lat: -6.2088, lng: 106.8456, status: 'success', label: 'DEL-001' },
  { id: 2, lat: -6.1751, lng: 106.8650, status: 'warning', label: 'TRN-042' },
  { id: 3, lat: -6.2297, lng: 106.8200, status: 'error', label: 'DLY-018' },
]
const rows = [
  { label: 'Delivered', width: '65%', count: 842, token: 'success' },
  { label: 'In Transit', width: '20%', count: 284, token: 'warning' },
  { label: 'Delayed', width: '8%', count: 112, token: 'error' },
]

function tokenColor(token) { return `var(--color-status-${token})` }

function MapCard() {
  const [trackNumber, setTrackNumber] = useState('')
  return (
    <div className="map-card">
      <div className="map-header"><div className="track-input"><Icon name="Search" /><input type="text" placeholder="Enter track number" value={trackNumber} onChange={(e) => setTrackNumber(e.target.value)} /></div><div className="map-controls"><button className="map-control-btn"><Icon name="Plus" /></button><button className="map-control-btn"><Icon name="Minus" /></button><button className="map-control-btn"><Icon name="Expand" /></button></div></div>
      <div className="map-container">
        <div className="map-placeholder">Interactive fleet map</div>
        {shipments.map((s) => <div key={s.id} className="shipment-marker" style={{ left: `${(s.lng - 106.8) * 500 + 50}%`, top: `${(-s.lat - 6.18) * 300 + 30}%` }}><div className="shipment-marker-dot" style={{ '--marker-color': tokenColor(s.status) }} title={s.label} /></div>)}
        <div className="map-overlay"><div className="status-panel"><div className="panel-tabs"><div className="tab active">Status</div><div className="tab">Routes</div><div className="tab">Alerts</div></div><div className="status-overview">{rows.map((row) => <div key={row.label} className="status-bar"><span className="status-label">{row.label}</span><div className="status-fill"><div className="status-fill-inner" style={{ width: row.width, '--status-color': tokenColor(row.token) }}></div></div><span className="status-count">{row.count}</span></div>)}</div></div>
          <div className="ledger-panel"><div className="panel-tabs"><div className="tab active">Recent Shipments Ledger</div></div><div className="ledger-list">{['Electronics Package', 'Food Delivery', 'Document Express'].map((title, index) => <div key={title} className="ledger-item"><Icon name="PackageSearch" /><div className="ledger-info"><div className="ledger-title">{title}</div><div className="ledger-time">Nov 15, 2026</div></div><div className="status-dot" style={{ '--status-color': tokenColor(rows[index].token) }}></div></div>)}</div><button className="view-full-btn">View Full</button></div></div>
      </div>
    </div>
  )
}

export default MapCard
