import { VERIFICATION_PASS, VERIFICATION_FAIL } from './contact_types'

const initialState = {
  isFormVerified: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case VERIFICATION_PASS:
      return {
        ...state,
        isFormVerified: true,
      }
    case VERIFICATION_FAIL:
      return {
        ...state,
        isFormVerified: false,
      }
    default:
      return state
  }
}
