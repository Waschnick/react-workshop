import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Import Components
//

import Home from './../components/home/Home';
import About from './../components/about/About';
import Universe from './../components/universe/Universe';
import Stars from './../components/universe/Stars';

// Define Routes
//

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/universe" component={Universe}>
        <Route path="/universe/:id" component={Stars} />
      </Route>
      <Route path="*" component={Home} />
    </Router>
  );
};

export default Routes;
