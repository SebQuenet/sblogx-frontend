import React, { useState } from 'react';

import style from './style';

const StatusBar = ({ nbFiles, status }) => (
  <div
    style={style(status)}
  >

    {
      status === 'error' ? 'Erreur pendant le téléversement ou la récupération du nombre de fichiers'
        : nbFiles > 0 ? `Nombre de fichiers total: ${nbFiles}`
          : status === 'uploading' ? 'En cours de téléversement...'
            : status === 'done' ? 'Récupération du nombre de fichiers...'
              : 'Déposez un fichier depuis votre ordinateur dans la zone de dépot'
    }
  </div>
);

export default StatusBar;
