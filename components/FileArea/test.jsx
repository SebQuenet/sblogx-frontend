import React from 'react';
import FileArea, { onDrop } from './design';
import Panel from '../Panel';
import { mapStateToProps } from './index';

describe('FileArea component', () => {
  it('should have mapped props', () => {
    expect(mapStateToProps({
      uploaderReducer: {
        status: 42,
      },
    })).toEqual({ status: 42 });
  });

  it('should instanciate a FileArea component', () => {
    const wrapper = mount(
      <Panel height="40px"><FileArea uploadFile={() => {}} status="waiting" /></Panel>,
    );
    expect(wrapper.find('div').length).toEqual(2);
    expect(wrapper.text()).toEqual('Zone de dépot');
  });

  it('shoud update filename on drop event', () => {
    const newFileName = 'text.txt';
    const fileData = { name: newFileName };
    const fakeEvent = {
      stopPropagation: () => { },
      preventDefault: () => { },
      dataTransfer: {
        files: [{ name: newFileName }],
      },
    };

    onDrop(
      fileName => expect(fileName).toEqual('text.txt'),
      fileObject => expect(fileObject).toEqual(fileData),
    )(fakeEvent);
  });
});

// TODO : test styles as well
