import React from 'react';
import Home from '../app/Home.js';

var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('expect');

describe('Home', function () {

    it("should display the Div", function () {
        var myComponent = TestUtils.renderIntoDocument(
            <Home answer="23"/>
        );


        var someDiv = TestUtils.findRenderedDOMComponentWithClass(
            myComponent, 'home__answer'
        );

        expect(someDiv.textContent).toEqual("= 23");
    });
});