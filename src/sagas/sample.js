import { put, takeEvery, all } from 'redux-saga/effects'
import actions from '../actions'

export function* getSampleAmount({ payload }) {
  try {
    const amount = 10 // APIからデータ取ってくるところ
    yield put(actions.sampleSuccessed({ amount }))
  } catch (error) {
    yield put(actions.sampleFailed({ error }))
  }
}

export default function* sampleSaga() {
  yield all([
    takeEvery(actions.sampleRequested.toString(), getSampleAmount)
  ])
}
