import React from 'react'

// Generate heatmap data (6 months x 7 days)
const generateHeatmapData = () => {
  const months = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr']
  const data = []
  
  for (let m = 0; m < 6; m++) {
    const weekData = []
    for (let d = 0; d < 30; d++) {
      // Random intensity 0-5
      const intensity = Math.floor(Math.random() * 6)
      weekData.push(intensity)
    }
    data.push(weekData)
  }
  
  return { months, data }
}

function ActivityPanel() {
  const { months, data } = generateHeatmapData()
  
  return (
    <div className="right-card">
      <div className="card-header">
        <h3 className="card-title">Activity</h3>
        <select className="month-selector">
          <option>May</option>
          <option>April</option>
          <option>March</option>
        </select>
      </div>
      <div className="heatmap">
        {data.map((weekData, weekIdx) => (
          <div key={weekIdx} className="heatmap-row">
            {weekData.map((intensity, dayIdx) => (
              <div 
                key={dayIdx} 
                className={`heatmap-cell ${intensity > 0 ? `level-${intensity}` : ''}`}
                title={`Intensity: ${intensity}`}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <div className="heatmap-labels">
        <span>Less</span>
        <span>More</span>
      </div>
    </div>
  )
}

export default ActivityPanel
