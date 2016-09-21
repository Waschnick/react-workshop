import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../app/Home.js';

it('renders correctly', () => {
    const tree = renderer.create(
        <Home answer="42" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
