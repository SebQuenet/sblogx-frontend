import React, { useState } from 'react';
import t from 'prop-types';

import style from './style';

const onDragOver = event => {
  event.stopPropagation();
  event.preventDefault();
};

const onDragEnter = event => {
  event.stopPropagation();
  event.preventDefault();
};

export const onDrop = (setFileName, uploadFile) => event => {
  event.stopPropagation();
  event.preventDefault();

  if (event.dataTransfer.files) {
    const fileObject = event.dataTransfer.files[0];
    setFileName(fileObject.name);
    uploadFile(fileObject);
  }
};
const FileArea = ({ status, uploadFile }) => {
  const [fileName, setFilename] = useState('');

  return (
    <div
      style={style(status)}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDrop={onDrop(setFilename, uploadFile)}
    >
      {
        status === 'error' ? 'Erreur de téléversement ou de récupération du nombre de fichiers'
          : fileName === '' ? 'Zone de dépot'
            : fileName
       }

    </div>
  );
};

FileArea.propTypes = {
  status: t.string.isRequired,
  uploadFile: t.func.isRequired,
};
export default FileArea;
