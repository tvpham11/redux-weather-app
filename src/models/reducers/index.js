import { combineReudcers } from 'redux'
import cityReducer from './cityReducer'
import visibilityFilter from './visibilityFilter'

export default combineReudcers({
  cityReducer,
  visibilityFilter
})
