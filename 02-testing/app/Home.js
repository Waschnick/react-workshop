import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <h1>23 + 19</h1>
                <h2>= {this.props.answer}</h2>
            </div>
        );
    }
}
