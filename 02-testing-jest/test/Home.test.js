import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../app/Home.js';

it('renders correctly with 42', () => {
    const tree = renderer.create(
        <Home answer="42" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});

it('renders correctly with 23', () => {
    const tree = renderer.create(
        <Home answer="23" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
