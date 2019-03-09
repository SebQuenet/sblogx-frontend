import { UPLOAD_FILE, UPLOAD_SUCCESS, UPLOAD_FAILED } from './types';

const initialReducerState = {
  status: 'waiting',
};

export default function areas(state = initialReducerState, action) {
  switch (action.type) {
    case UPLOAD_FILE:
      return { ...state, status: 'uploading' };
    case UPLOAD_SUCCESS:
      return { ...state, status: 'done' };
    case UPLOAD_FAILED:
      return { ...state, status: 'error' };
    default:
      return state;
  }
}
