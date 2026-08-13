import React from 'react'
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts'

const profitData = [
  { quarter: 'Q1', revenue: 800, cost: 400 },
  { quarter: 'Q2', revenue: 1100, cost: 550 },
  { quarter: 'Q3', revenue: 950, cost: 480 },
  { quarter: 'Q4', revenue: 1300, cost: 620 },
]

const kpis = [
  { label: 'Total Shipments', value: '1,422', change: '+24%' },
  { label: 'On-time Rate', value: '96%', change: '+4%' },
  { label: 'Active Routes', value: '284', change: '+12%' },
]

function KPIRow() {
  return (
    <div className="kpi-row">
      {kpis.map((kpi) => <div key={kpi.label} className="kpi-card"><div className="kpi-label">{kpi.label}</div><div className="kpi-value">{kpi.value}</div><div className="kpi-change">{kpi.change}</div></div>)}
      <div className="kpi-card">
        <div className="kpi-label">Profit</div>
        <div className="kpi-value">$4,421</div>
        <div className="kpi-label">from 621 shipments</div>
        <div className="profit-chart">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={profitData} barGap={2}>
              <XAxis dataKey="quarter" tick={{ fontSize: 'var(--space-12)', fill: 'var(--color-text-base-tertiary)' }} axisLine={false} tickLine={false} />
              <Bar dataKey="revenue" radius={[4, 4, 0, 0]}>{profitData.map((_, index) => <Cell key={`revenue-${index}`} fill="var(--color-primary-200)" />)}</Bar>
              <Bar dataKey="cost" radius={[4, 4, 0, 0]}>{profitData.map((_, index) => <Cell key={`cost-${index}`} fill="var(--color-primary-400)" />)}</Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="legend">
          <div className="legend-item"><div className="legend-dot" style={{ '--status-color': 'var(--color-primary-200)' }}></div><span>Revenue</span></div>
          <div className="legend-item"><div className="legend-dot" style={{ '--status-color': 'var(--color-primary-400)' }}></div><span>Cost</span></div>
        </div>
      </div>
    </div>
  )
}

export default KPIRow
