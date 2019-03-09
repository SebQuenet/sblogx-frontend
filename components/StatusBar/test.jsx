import React from 'react';
import StatusBar from './design';
import Panel from '../Panel';

describe('StatusBar component', () => {
  it('should instanciate a StatusBar component', () => {
    const wrapper = mount(
      <Panel height="40px"><StatusBar /></Panel>,
    );
    expect(wrapper.find('div').length).toEqual(2);
    expect(wrapper.text()).toEqual('Déposez un fichier depuis votre ordinateur dans la zone de dépot');
  });
});
