import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import comment, { commentSaga } from './commentReducer'
import todo, { todoSaga } from './todoReducer'

const rootReducer = combineReducers({
  todo,
  comment,
})

export function* rootSaga() {
  yield all([todoSaga(), commentSaga()])
}

export default rootReducer
export type rootState = ReturnType<typeof rootReducer>
