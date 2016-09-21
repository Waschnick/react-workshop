import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <h1>23 + 19</h1>
                <h2 className="home__answer">= {this.props.answer}</h2>
            </div>
        );
    }
}
