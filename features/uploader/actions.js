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
