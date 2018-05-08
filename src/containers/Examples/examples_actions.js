import { goBack } from 'react-router-redux'
import { MARK_EXAMPLE_SEEN, MARK_IMAGE_SEEN } from './examples_types'

export const markExampleSeen = project_id => ({
  type: MARK_EXAMPLE_SEEN,
  payload: project_id,
})

export const markImageSeen = ({ feature_id, image_id }) => ({
  type: MARK_IMAGE_SEEN,
  payload: {
    feature_id,
    image_id,
  },
})

export const handleBackToExamples = () => async dispatch =>
  dispatch(goBack())
