import { connect } from 'react-redux';
import { compose } from 'redux';
import { actions } from '../../features/uploader';

import FileArea from './design.jsx';

export const mapStateToProps = ({ uploaderReducer: { status } }) => ({
  status,
});

const withConnect = connect(mapStateToProps, { uploadFile: actions.uploadFile });

export default compose(
  withConnect,
)(FileArea);
