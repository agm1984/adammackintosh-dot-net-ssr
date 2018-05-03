import React from 'react'
import PropTypes from 'prop-types'
import './notifications.css'

const Notification = props => (
  <li className={`notification${(props.type || 'primary')}`}>
    {props.text}
    <button className="close" onClick={() => props.removeFunc(props.id)}>
      X
    </button>
  </li>
)

const Notifications = (props) => {
  if (props.notifications.length > 0) {
    return (
      <ul id="notifications">
        {props.notifications.map(notification => (
          <Notification
            key={`notification-${notification.id}`}
            removeFunc={props.removeFunc}
            {...notification}
          />
        ))}
      </ul>
    )
  }
  return null
}

Notification.defaultProps = {
  type: undefined,
  text: undefined,
  id: undefined,
}
Notification.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  removeFunc: PropTypes.func.isRequired,
  id: PropTypes.string,
}

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.any).isRequired,
  removeFunc: PropTypes.func.isRequired,
}

export default Notifications
