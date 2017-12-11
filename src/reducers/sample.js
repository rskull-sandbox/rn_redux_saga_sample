import { handleActions } from 'redux-actions'
import actions from '../actions'

const initialState = {
  isLoading: false,
  isError: false,
  amount: 0
}

const sample = handleActions({
  [actions.sampleRequested]: state => ({
    isLoading: true
  }),
  [actions.sample]: (state, { payload }) => ({
    isLoading: false,
    amount: state.amount + payload.amount
  }),
  [actions.sample]: state => ({
    isLoading: false,
    isError: true
  }),
}, initialState)

export default sample
