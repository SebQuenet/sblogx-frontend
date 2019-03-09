import React from 'react';
import Header from './design';

describe('Header component', () => {
  it('should instanciate a header with text content', () => {
    const wrapper = shallow(
      <Header content="Hello world !" />,
    );
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.text()).toEqual('Hello world !');
  });
});
