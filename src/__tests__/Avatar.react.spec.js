import React from 'react';
import Avatar from '../Avatar.react';
import renderer from 'react-test-renderer';

test('An Avatar can be rendered', () => {
  const component = renderer.create(
    <Avatar>Hi <img /></Avatar>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
