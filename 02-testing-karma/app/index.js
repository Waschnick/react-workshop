import React from 'react';
import ReactDom from 'react-dom';

require('./index.html');
require('./main.scss');

import Home from './Home.js';

ReactDom.render(
    <Home answer="42"/>,
    document.getElementById('app')
);