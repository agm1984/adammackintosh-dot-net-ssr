import { VERIFICATION_PASS, VERIFICATION_FAIL } from './contact_types'

export const handleVerificationPass = () =>
  dispatch => dispatch({ type: VERIFICATION_PASS })

export const handleVerificationFail = () =>
  dispatch => dispatch({ type: VERIFICATION_FAIL })
