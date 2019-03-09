import React from 'react';
import t from 'prop-types';

import style from './style';

const Header = ({ content }) => (
  <div style={style()}>
    {content}
  </div>
);

Header.propTypes = {
  content: t.string.isRequired,
};

export default Header;
