import {
  UPDATE_SCROLL_POSITION,
  TOGGLE_CURRENT_PAGE_HASSCROLL,
  HIDE_NAV_BAR,
  SHOW_NAV_BAR,
} from './nav_types'

const initialState = {
  currentScrollYPosition: 0,
  currentPageHasScroll: false,
  showNav: true,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SCROLL_POSITION:
      return {
        ...state,
        currentScrollYPosition: action.payload,
      }
    case TOGGLE_CURRENT_PAGE_HASSCROLL:
      return {
        ...state,
        currentPageHasScroll: !state.currentPageHasScroll,
      }
    case HIDE_NAV_BAR:
      return {
        ...state,
        showNav: false,
      }
    case SHOW_NAV_BAR:
      return {
        ...state,
        showNav: true,
      }
    default:
      return state
  }
}
