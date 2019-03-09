import { combineReducers } from 'redux';
import { call, all } from 'redux-saga/effects';

export const rootReducer = combineReducers({ dummyReducer: () => ({}) });

function* dummySaga() {
  yield (42);
}

export function* rootSaga() {
  yield all([
    call(dummySaga),
  ]);
}
