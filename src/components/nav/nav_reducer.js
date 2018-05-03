import {
  UPDATE_SCROLL_POSITION,
  TOGGLE_CURRENT_PAGE_HASSCROLL,
} from './nav_types'

const initialState = {
  currentScrollYPosition: 0,
  currentPageHasScroll: false,
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
    default:
      return state
  }
}
