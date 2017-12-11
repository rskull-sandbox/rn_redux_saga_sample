import { combineReducers } from 'redux'

import sample from './sample'
import nav from './nav'

const rootReducers = combineReducers({
  sample,
  nav
})

export default rootReducers
