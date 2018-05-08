import { MARK_EXAMPLE_SEEN, MARK_IMAGE_SEEN } from './examples_types'
import examples from './examples.config'

const initialState = {
  examples,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case MARK_EXAMPLE_SEEN:
      return {
        ...state,
        examples: state.examples.reduce((acc, feature) => {
          if (feature.feature_id === action.payload) {
            acc.push({
              ...feature,
              feature_images: [...feature.feature_images],
              feature_seen: true,
            })
            return acc
          }
          acc.push({
            ...feature,
            feature_images: [...feature.feature_images],
          })
          return acc
        }, []),
      }
    case MARK_IMAGE_SEEN:
      return {
        ...state,
        examples: state.examples.map(feature => ({
          ...feature,
          feature_images: feature.feature_images.reduce((all, image) => {
            if ((feature.feature_id === action.payload.feature_id)
              && (image.image_id === action.payload.image_id)) {
              all.push({ ...image, image_seen: true })
              return all
            }
            all.push({ ...image })
            return all
          }, []),
        })),
      }
    default:
      return state
  }
}
