import React from 'react';

import {
  FileArea,
  Header,
  Panel,
  StatusBar,
} from '../components';

export default () => (
  <div>
    <Panel height="5em">
      <Header content="💊 Partage de fichiers médicaux" />
    </Panel>
    <Panel height="calc(100vh - 9em)">
      <FileArea />
    </Panel>
    <Panel height="2em">
      <StatusBar />
    </Panel>
  </div>
);
