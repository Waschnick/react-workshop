/**
 * Index
 *
 */

//
// Import React Stuff
//

import React from 'react';
import ReactDOM from 'react-dom';

//
// Import Routes, these contain my main components
//

import Routes from "./routes/Routes";

//
// Import General Styles
//

import './assets/sass/main.scss';

//
// Render
//

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
