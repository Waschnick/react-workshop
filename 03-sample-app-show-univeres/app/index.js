import React from 'react';
import ReactDom from 'react-dom';

require('./index.html');
require('./main.scss');

import Dashboard from './components/Dashboard.js';

ReactDom.render(
    <Dashboard />,
    document.getElementById('app')
);