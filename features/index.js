import { combineReducers } from 'redux';
import { call, all } from 'redux-saga/effects';

import uploaderReducer, { uploaderSagas } from './uploader';


export const rootReducer = combineReducers({
  uploaderReducer,
});

export function* rootSaga() {
  yield all([
    call(uploaderSagas),
  ]);
}
