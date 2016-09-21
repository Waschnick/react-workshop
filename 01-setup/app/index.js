import React from 'react';
import ReactDom from 'react-dom';

require('./index.html');
require('./main.scss');

ReactDom.render(
    <div>Hello World</div>,
    document.getElementById('app')
);