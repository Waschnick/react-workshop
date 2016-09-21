/**
 * Universe Component
 *
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

//
// Default values and utility functions
//

import { getUniverseURL, getStarURL } from "../../settings/settings";
import { fetch } from "../../utility/utility";

//
// Styles
//

import "../../assets/sass/components/_dashboard.scss";

//
// Define Components
//

class Universe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: [],
      universes: [],
      activeUniverse: 0
    };
  }

  //
  // Methods
  //

  setActiveUniverse(id) {
    this.setState({
      activeUniverse: parseInt(id, 10)
    });
  }

  getActiveUniverse() {
    const filteredUniverse = this.state.universes.filter((item) => {
      return item.id === this.state.activeUniverse;
    });

    // A bit hacky, but works for now :(
    // filteredUniverse is always an array, check if it contains items
    return filteredUniverse.length ?
      filteredUniverse[0].name
      :
      "";
  }

  getStarsInUniverse(universeId) {
    const filteredStars = this.state.stars.filter((item) => {
      return item.universeId === universeId;
    });
    return filteredStars.length;
  }

  //
  // Lifecycle Methods
  //

  componentDidMount() {
    // GET stars and universe
    axios.all([
      fetch(getStarURL), fetch(getUniverseURL)
    ])
    .then(axios.spread((starResponse, universeResponse) => {
      this.setState({
        stars: starResponse.data.stars,
        universes: universeResponse.data.universes
      })
    }));
  }

  //
  // Render Method
  //

  render() {
    return (
      <div className="dash">
        <div className="dash__titlebar">
        <div className="dash__titlebar-item">
          <Link
            to="/"
            className="dash__titlebar-link"
          >
            Home
          </Link>
        </div>
          <div className="dash__titlebar-item -stretch">

            {"Stars for "}
            {this.getActiveUniverse()}

            <span className="dash__titlebar-circle">
              {this.getStarsInUniverse(this.state.activeUniverse)}
            </span>
          </div>
          <div className="dash__titlebar-item">
            {/* Add some actions later */}
          </div>
        </div>
        <div className="dash__items">
            {/*
              Stars component wrapped in router definition, enriched with
              additional props by cloning the component
            */}
            { React.cloneElement(this.props.children, { ...this.state, setActiveUniverse: this.setActiveUniverse.bind(this) }) }
        </div>
      </div>
    );
  }
}

export default Universe;
