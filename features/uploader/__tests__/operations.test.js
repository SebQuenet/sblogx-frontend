import fetch from 'isomorphic-unfetch';

import * as types from '../types';
import * as operations from '../operations';

jest.mock('isomorphic-unfetch');

describe('Uploader operations', () => {
  it('should post async data to distant service', () => {
    const dataToSend = 'abcd';
    const action = { type: types.UPLOAD_FILE, payload: dataToSend };

    fetch.mockImplementationOnce((input, data) => {
      expect(data.method).toEqual('POST');
      expect(data.body).toEqual('abcd');
      return { body: data.body, ok: true, status: 201 };
    });
  });
});
