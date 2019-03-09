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
    const statusResponse = yield fetch(`${BASE_FHIR_URL}/Binary?_count=1000000&_format=json&_pretty=true&_bundletype=searchset&_summary=true`, {
      method: 'GET',
    });
    const data = yield statusResponse.json();
    yield put(actions.statusSuccess(data));
  } catch (error) {
    console.error(error);
    yield put(actions.statusFailed(error));
  }
}

// TODO : Manage cancellation when dropping a new file / retreiving the nb of files and the previous request is not finished.

export function* watchUploader() {
  yield takeEvery(types.UPLOAD_FILE, fileUploader);
}
