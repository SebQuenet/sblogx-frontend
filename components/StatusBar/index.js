import { connect } from 'react-redux';
import { compose } from 'redux';

import StatusBar from './design.jsx';

const mapStateToProps = ({ uploaderReducer: { nbFiles, status } }) => ({
  nbFiles,
  status,
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
)(StatusBar);
