import React, { useState } from 'react';

import style from './style';

const onDragOver = event => {
  event.stopPropagation();
  event.preventDefault();
};

const onDragEnter = event => {
  event.stopPropagation();
  event.preventDefault();
};

export const onDrop = setFileName => event => {
  event.stopPropagation();
  event.preventDefault();

  setFileName(event.dataTransfer.files[0].name);
};

const FileArea = () => {
  const [fileName, setFilename] = useState('');

  return (
    <div
      style={style()}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDrop={onDrop(setFilename)}
    >
      {fileName || 'Zone de dépot'}
    </div>
  );
};

export default FileArea;
