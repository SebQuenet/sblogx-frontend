import * as types from '../types';
import reducer from '../reducer';

describe('Uploader reducer', () => {
  it('should be in waiting state by default', () => {
    expect(reducer(undefined, { type: 'Any unknown type' })).toEqual({
      status: 'waiting',
    });
  });

  it('should be in uploading state after upload type', () => {
    expect(reducer(undefined, { type: types.UPLOAD_FILE })).toEqual({
      status: 'uploading',
    });
  });

  it('should be in done state after upload completed', () => {
    expect(reducer(undefined, { type: types.UPLOAD_SUCCESS })).toEqual({
      status: 'done',
    });
  });

  it('should be in error state after upload failed ', () => {
    expect(reducer(undefined, { type: types.UPLOAD_FAILED })).toEqual({
      status: 'error',
    });
  });
});
