import React from 'react';

import Universe from './Universe.js';

export default class Universes extends React.Component {
    componentDidMount() {
        console.info("Load Universes!");
        this.loadUniverse();
    }

    loadUniverse() {
        $.ajax({
            url: "https://happy-stars.herokuapp.com/api/universe",
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                console.info(data);
                this.setState({data: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    render() {
        var indents = [];
        if (this.state && this.state.data) {
            var unis = this.state.data.universes;

            for (var i = 0; i < unis.length; i++) {
                indents.push(<Universe key={i} data={unis[i]}/>);
            }
        }

        return (
            <div>
                { indents }
            </div>
        );
    }
}


