import React from 'react'
import PropTypes from 'prop-types'
import './StatCluster.css'

const StatCluster = ({ category, children }) => {
  return (
    <div className="statCluster-wrapper">
      <div className="statCluster-line" />
      <div className="statCluster">
        <h2 className="statHeading">{category}</h2>
        {children}
      </div>
    </div>
  )
}

StatCluster.propTypes = {
  category: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default StatCluster
