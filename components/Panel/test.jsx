import React from 'react';
import Panel from './design';

describe('Panel component', () => {
  it('should instanciate a panel with text content', () => {
    const wrapper = shallow(
      <Panel height="40px"><span>Hello world</span></Panel>,
    );
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('span').length).toEqual(1);
    expect(wrapper.props().style.height).toEqual('40px');
    expect(wrapper.text()).toEqual('Hello world');
  });
});
