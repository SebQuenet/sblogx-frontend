import * as types from './types';
import * as actions from './actions';

import { watchUploader as uploaderSagas } from './operations';
import reducer from './reducer';

export default reducer;
export { types };
export { actions };
export { uploaderSagas };
