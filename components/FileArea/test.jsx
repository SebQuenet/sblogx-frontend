import React from 'react';
import FileArea, { onDrop } from './design';
import Panel from '../Panel';

describe('FileArea component', () => {
  it('should instanciate a FileArea component', () => {
    const wrapper = mount(
      <Panel height="40px"><FileArea /></Panel>,
    );
    expect(wrapper.find('div').length).toEqual(2);
    expect(wrapper.text()).toEqual('Zone de dépot');
  });

  it('shoud update filename on drop event', () => {
    const newFileName = 'text.txt';
    const fakeEvent = {
      stopPropagation: () => { },
      preventDefault: () => { },
      dataTransfer: {
        files: [{ name: newFileName }],
      },
    };
    onDrop((fileName) => {
      expect(fileName).toEqual('text.txt');
    })(fakeEvent);
  });
});
