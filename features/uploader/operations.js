import { takeEvery, put } from 'redux-saga/effects';
import fetch from 'isomorphic-unfetch';

import * as actions from './actions';
import * as types from './types';

import { BASE_FHIR_URL } from '../constants';

export function* fileUploader(action) {
  try {
    yield fetch(`${BASE_FHIR_URL}/Binary`, {
      method: 'POST',
      body: action.payload,
    });
    yield put(actions.uploadSuccess());
  } catch (error) {
    console.error(error);
    yield put(actions.uploadFailed(error));
  }
}

export function* watchUploader() {
  yield takeEvery(types.UPLOAD_FILE, fileUploader);
}
