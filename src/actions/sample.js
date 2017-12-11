import { createAction } from 'redux-actions'

export default {
  sampleRequested: createAction('sample requested'),
  sampleSuccessed: createAction('sample successed'),
  sampleFailed: createAction('sample fraild'),
}
