import * as types from '../types';
import * as actions from '../actions';

describe('Uploader actions', () => {
  it('should uploadFile type and payload', () => {
    expect(actions.uploadFile('data')).toEqual({
      type: types.UPLOAD_FILE,
      payload: 'data',
    });
  });
  it('should uploadSuccess type and payload', () => {
    expect(actions.uploadSuccess('data')).toEqual({
      type: types.UPLOAD_SUCCESS,
      payload: 'data',
    });
  });
  it('should uploadFailed type and payload', () => {
    expect(actions.uploadFailed('data')).toEqual({
      type: types.UPLOAD_FAILED,
      payload: 'data',
    });
  });
});
