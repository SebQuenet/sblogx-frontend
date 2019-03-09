import React from 'react';
import t from 'prop-types';

import style from './style';

const FileArea = ({ content }) => (
  <div style={style()}>
    {content}
  </div>
);

FileArea.propTypes = {
  content: t.string.isRequired,
};

export default FileArea;
