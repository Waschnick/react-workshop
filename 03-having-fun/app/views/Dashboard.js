import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './Layout.js';
import Universes from './universes/Universes.js';


export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <Router history={browserHistory}>
                <Route name="root" path="/" component={Layout}>
                    <IndexRoute name="universes" component={Universes}/>
                    <Route name="universes" path="home" component={Universes}>
                        <Route name="universe" path="/universe/:id" component={Universes}/>
                    </Route>
                </Route>
            </Router >
        );
    }
}


