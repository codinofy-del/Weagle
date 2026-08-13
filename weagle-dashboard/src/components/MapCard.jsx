import React, { useState } from 'react'

const shipments = [
  { id: 1, lat: -6.2088, lng: 106.8456, status: 'delivered', label: 'DEL-001' },
  { id: 2, lat: -6.1751, lng: 106.8650, status: 'in-transit', label: 'TRN-042' },
  { id: 3, lat: -6.2297, lng: 106.8200, status: 'delayed', label: 'DLY-018' },
  { id: 4, lat: -6.1950, lng: 106.8500, status: 'delivered', label: 'DEL-002' },
  { id: 5, lat: -6.2100, lng: 106.8300, status: 'in-transit', label: 'TRN-043' },
]

const statusColors = {
  delivered: '#22c55e',
  'in-transit': '#eab308',
  delayed: '#3b82f6',
}

function MapCard() {
  const [trackNumber, setTrackNumber] = useState('')

  return (
    <div className="map-card">
      <div className="map-header">
        <div className="track-input">
          <span>🔍</span>
          <input 
            type="text" 
            placeholder="Enter track number" 
            value={trackNumber}
            onChange={(e) => setTrackNumber(e.target.value)}
          />
        </div>
        <div className="map-controls">
          <button className="map-control-btn">＋</button>
          <button className="map-control-btn">－</button>
          <button className="map-control-btn">⛶</button>
        </div>
      </div>
      <div className="map-container">
        <div style={{width: '100%', height: '100%', background: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888'}}>
          [Interactive Map - Leaflet would render here]
        </div>
        {shipments.map((s) => (
          <div 
            key={s.id}
            style={{
              position: 'absolute',
              left: `${(s.lng - 106.8) * 500 + 50}%`,
              top: `${(-s.lat - 6.18) * 300 + 30}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div 
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: statusColors[s.status],
                border: '2px solid white',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
              }}
            />
          </div>
        ))}
        <div className="map-overlay">
          <div className="status-panel">
            <div className="panel-tabs">
              <div className="tab active">Status</div>
              <div className="tab">Routes</div>
              <div className="tab">Alerts</div>
            </div>
            <div className="status-overview">
              <div className="status-bar">
                <span className="status-label">Delivered</span>
                <div className="status-fill">
                  <div className="status-fill-inner" style={{width: '65%', background: '#22c55e'}}></div>
                </div>
                <span className="status-count">842</span>
              </div>
              <div className="status-bar">
                <span className="status-label">In Transit</span>
                <div className="status-fill">
                  <div className="status-fill-inner" style={{width: '20%', background: '#eab308'}}></div>
                </div>
                <span className="status-count">284</span>
              </div>
              <div className="status-bar">
                <span className="status-label">Delayed</span>
                <div className="status-fill">
                  <div className="status-fill-inner" style={{width: '8%', background: '#3b82f6'}}></div>
                </div>
                <span className="status-count">112</span>
              </div>
              <div className="status-bar">
                <span className="status-label">Loading</span>
                <div className="status-fill">
                  <div className="status-fill-inner" style={{width: '5%', background: '#8b5cf6'}}></div>
                </div>
                <span className="status-count">78</span>
              </div>
              <div className="status-bar">
                <span className="status-label">Canceled</span>
                <div className="status-fill">
                  <div className="status-fill-inner" style={{width: '2%', background: '#ef4444'}}></div>
                </div>
                <span className="status-count">32</span>
              </div>
            </div>
          </div>
          <div className="ledger-panel">
            <div className="panel-tabs">
              <div className="tab active">Recent Shipments Ledger</div>
            </div>
            <div className="ledger-list">
              <div className="ledger-item">
                <div className="ledger-icon"></div>
                <div className="ledger-info">
                  <div className="ledger-title">Electronics Package</div>
                  <div className="ledger-time">Nov 15, 2026 • 10:30 AM</div>
                </div>
                <div className="status-dot delivered"></div>
              </div>
              <div className="ledger-item">
                <div className="ledger-icon"></div>
                <div className="ledger-info">
                  <div className="ledger-title">Food Delivery</div>
                  <div className="ledger-time">Nov 15, 2026 • 10:15 AM</div>
                </div>
                <div className="status-dot in-transit"></div>
              </div>
              <div className="ledger-item">
                <div className="ledger-icon"></div>
                <div className="ledger-info">
                  <div className="ledger-title">Document Express</div>
                  <div className="ledger-time">Nov 15, 2026 • 09:45 AM</div>
                </div>
                <div className="status-dot delayed"></div>
              </div>
            </div>
            <button className="view-full-btn">View Full</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MapCard
