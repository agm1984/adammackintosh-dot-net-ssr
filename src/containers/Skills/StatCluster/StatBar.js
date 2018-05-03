import React from 'react'
import PropTypes from 'prop-types'
import './StatCluster.css'

const StatBar = ({ label, points }) => {
  const dividers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  return (
    <div className="statBar">
      <div className="statBar_label">
        {label}
      </div>
      <div className="statBar_points-container">
        <div
          className="statBar_points"
          style={{
            width: `${points}%`,
          }}
        />
        {dividers.map(d => (
          <div
            key={d}
            className="statBar_points-divider"
            style={{ left: `calc(${d}% - 0.8rem)` }}
          />
        ))}
      </div>
    </div>
  )
}

StatBar.propTypes = {
  label: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
}

export default StatBar
