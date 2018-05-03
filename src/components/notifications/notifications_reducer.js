import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from './notifications_types'

const INITIAL_STATE = {
  notifications: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.notification],
      }

    case REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: [
          ...state.notifications.slice(0, action.index),
          ...state.notifications.slice(action.index + 1),
        ],
      }

    default:
      return state
  }
}
