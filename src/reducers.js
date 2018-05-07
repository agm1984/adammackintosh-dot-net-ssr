import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import nav from './components/nav/nav_reducer'
import notifications from './components/notifications/notifications_reducer'
import examples from './containers/Examples/examples_reducer'
import contact from './containers/Contact/contact_reducer'

export default combineReducers({
  routing,
  form,
  nav,
  notifications,
  examples,
  contact,
})
