import * as types from './types';

export const uploadFile = (fileData) => ({
  type: types.UPLOAD_FILE,
  payload: fileData,
});

export const uploadSuccess = (data) => ({
  type: types.UPLOAD_SUCCESS,
  payload: data,
});

export const uploadFailed = (error) => ({
  type: types.UPLOAD_FAILED,
  payload: error,
});

export const statusSuccess = (data) => ({
  type: types.STATUS_SUCCESS,
  payload: data,
});

export const statusFailed = (error) => ({
  type: types.STATUS_FAILED,
  payload: error,
});
