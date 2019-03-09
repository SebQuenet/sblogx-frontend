import React from 'react';
import t from 'prop-types';

import style from './style';

const Panel = ({ children, height }) => (
  <div style={style(height)}>
    {children}
  </div>
);

Panel.propTypes = {
  children: t.node.isRequired,
  height: t.string.isRequired,
};

export default Panel;
