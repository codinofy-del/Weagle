import React from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts'

const profitData = [
  { quarter: 'Q1', revenue: 800, cost: 400 },
  { quarter: 'Q2', revenue: 1100, cost: 550 },
  { quarter: 'Q3', revenue: 950, cost: 480 },
  { quarter: 'Q4', revenue: 1300, cost: 620 },
]

function KPIRow() {
  return (
    <div className="kpi-row">
      <div className="kpi-card">
        <div className="kpi-label">Total Shipment</div>
        <div className="kpi-value">1,422</div>
        <div className="kpi-change">+24%</div>
      </div>
      <div className="kpi-card">
        <div className="kpi-label">Total Shipment</div>
        <div className="kpi-value">1,422</div>
        <div className="kpi-change">+24% 24%</div>
      </div>
      <div className="kpi-card">
        <div className="kpi-label">Total Shipment</div>
        <div className="kpi-value">1,422</div>
        <div className="kpi-change">+24%</div>
      </div>
      <div className="kpi-card">
        <div className="kpi-label">Profit</div>
        <div className="kpi-value">$ 4.421,00</div>
        <div className="kpi-label" style={{marginTop: '5px'}}>from 621 shipment</div>
        <div className="profit-chart">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={profitData} barGap={2}>
              <XAxis dataKey="quarter" tick={{fontSize: 10}} axisLine={false} tickLine={false} />
              <Bar dataKey="revenue" radius={[4, 4, 0, 0]}>
                {profitData.map((entry, index) => (
                  <Cell key={`cell-rev-${index}`} fill="#fdba74" />
                ))}
              </Bar>
              <Bar dataKey="cost" radius={[4, 4, 0, 0]}>
                {profitData.map((entry, index) => (
                  <Cell key={`cell-cost-${index}`} fill="#ff6b35" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="legend">
          <div className="legend-item">
            <div className="legend-dot" style={{background: '#3b82f6'}}></div>
            <span>Shipment</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot" style={{background: '#ff6b35'}}></div>
            <span>Shipment</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KPIRow
