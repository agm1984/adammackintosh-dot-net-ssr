import {
  UPDATE_SCROLL_POSITION,
  TOGGLE_CURRENT_PAGE_HASSCROLL,
  HIDE_NAV_BAR,
  SHOW_NAV_BAR,
} from './nav_types'

export const updateScrollYPosition = currentScrollYPosition => ({
  type: UPDATE_SCROLL_POSITION,
  payload: currentScrollYPosition,
})

export const handleDisableDownScrollerButton = () => ({
  type: TOGGLE_CURRENT_PAGE_HASSCROLL,
})

export const hideNav = () => ({
  type: HIDE_NAV_BAR,
})

export const showNav = () => ({
  type: SHOW_NAV_BAR,
})
