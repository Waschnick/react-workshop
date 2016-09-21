/**
 * Home Component
 *
 */

import React, { Component } from 'react';
import { Link } from 'react-router';

//
// Default values and utility functions
//

import { getUniverseURL, postUniverseURL, postUniverseConfig } from "../../settings/settings";
import { fetch, post } from "../../utility/utility";

//
// Styles
//

import "../../assets/sass/components/_dashboard.scss";

//
// Define Components
//

const Items = ({ items }) => {
  const universes = items.map((item, index) => {
    return (
      <Link
        to={`/universe/${item.id}`}
        className="dash__items__item-universe"
        key={index}
      >
        <div className="dash__items__item-universe__image"></div>
        <div className="dash__items__item-universe__title">
          {item.name}
        </div>
      </Link>
    )
  });

  return (
    <div className="dash__items">
      {universes}
    </div>
  );
};

class Home extends Component {

  //
  // Set Default State
  //

  constructor(props) {
    super(props);
    this.state = {
      universes: [],
      showInput: false
    };
  }

  //
  // Methods
  //

  handleAddUniverse() {
    this.setState({
      showInput: !this.state.showInput
    });
  }

  handleSubmit() {
    const universeName = this.refs.universeName.value;
    const universeMaxSize = this.refs.universeMaxSize.value;

    // Simple naive form validation, submit only if validated
    if (universeName.length > 0 && !isNaN(parseInt(universeMaxSize, 10))) {

      // Construct new universe

      const newUniverse = {
        name: universeName,
        maxSize: universeMaxSize
      }

      // Put new universe on state object

      this.setState({
        universes: [...this.state.universes, newUniverse],
        showInput: false
      });

      // POST data to server

      post(postUniverseURL, newUniverse, postUniverseConfig)
        .then((response) => {
          console.log("Post Success");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  //
  // Lifecycle Methods
  //

  componentDidMount() {
    // GET universes
    fetch(getUniverseURL)
      .then((response) => {
        this.setState({
          universes: response.data.universes
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //
  // Render
  //

  render() {
    return (
      <div className="dash">
        <div className="dash__titlebar">
          <div className="dash__titlebar-item -stretch">
            Universes
            <span className="dash__titlebar-circle">
              {this.state.universes.length > 0 ? this.state.universes.length : ""}
            </span>
          </div>
          <div className="dash__titlebar-item">
            <a
              onClick={this.handleAddUniverse.bind(this)}
              className={this.state.showInput ? "dash__titlebar-link dash__titlebar-link--active" : "dash__titlebar-link"}
            >
              Add Universe
            </a>
          </div>
        </div>
        <Items items={this.state.universes} />
        {/*
          Render depending on state by using inline JS
        */}
        {
          (() => {
            if (this.state.showInput) {
              return (
                <div className="dash__overlay">
                  <h1 className="dash__overlay-title">Neues Universum hinzufügen</h1>
                  <input ref="universeName" type="text" className="input-text" placeholder="Name" />
                  <input ref="universeMaxSize" type="text" className="input-text" placeholder="Anzahl" />
                  <a onClick={this.handleSubmit.bind(this)} className="btn">Abschicken </a>
                </div>
              )
            }
          })()
        }
      </div>
    );
  }
}

export default Home;
