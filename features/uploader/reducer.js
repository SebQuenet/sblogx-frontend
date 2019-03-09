import {
  UPLOAD_FILE, UPLOAD_SUCCESS, UPLOAD_FAILED, STATUS_SUCCESS, STATUS_FAILED,
} from './types';

const initialReducerState = {
  status: 'waiting',
  nbFiles: 0,
};

export default function areas(state = initialReducerState, action) {
  switch (action.type) {
    case UPLOAD_FILE:
      return { ...state, status: 'uploading' };
    case UPLOAD_SUCCESS:
      return { ...state, status: 'done', nbFiles: 0 };
    case UPLOAD_FAILED:
      return { ...state, status: 'error' };
    case STATUS_SUCCESS:
      return { ...state, nbFiles: action.payload.total };
    case STATUS_FAILED:
      return { ...state, status: 'error' };
    default:
      return state;
  }
}
