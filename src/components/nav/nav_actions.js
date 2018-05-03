import {
  UPDATE_SCROLL_POSITION,
  TOGGLE_CURRENT_PAGE_HASSCROLL,
} from './nav_types'

export const updateScrollYPosition = currentScrollYPosition => ({
  type: UPDATE_SCROLL_POSITION,
  payload: currentScrollYPosition,
})

export const handleDisableDownScrollerButton = () => ({
  type: TOGGLE_CURRENT_PAGE_HASSCROLL,
})
