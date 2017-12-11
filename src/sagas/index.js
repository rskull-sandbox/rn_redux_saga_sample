import { fork } from 'redux-saga/effects'
import sampleSaga from './sample'
import actions from '../actions'

export default function* rootSaga() {
  yield fork(sampleSaga)
}
