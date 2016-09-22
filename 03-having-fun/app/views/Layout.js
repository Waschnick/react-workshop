import React from 'react';

import NavBar from './NavBar.js';

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                {this.props.children}
            </div>
        );
    }
}


