import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from './notifications_types'

/* eslint-disable */
const generateGUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export const addNotification = (notification) => {
  notification.id = generateGUID()
  /* eslint-enable */
  return (dispatch) => {
    dispatch({
      type: ADD_NOTIFICATION,
      notification,
    })
  }
}

export const removeNotification = (id) => {
  return (dispatch, getState) => {
    getState().notifications.notifications.forEach((item, index) => {
      if (item.id === id) {
        dispatch({
          type: REMOVE_NOTIFICATION,
          index,
        })
      }
    })
  }
}
