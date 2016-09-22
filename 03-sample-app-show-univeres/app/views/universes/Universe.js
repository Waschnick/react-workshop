import React from 'react';

require('./universe.scss');

export default class Universe extends React.Component {
    render() {
        return (
            <div className="universe circle">
                { this.props.data.name }
            </div>
        );
    }
}


