/**
 * Universe Component
 *
 */

import React from 'react';

//
// Styles
//

import "../../assets/sass/components/_dashboard.scss";

//
// Define Components
//

const Items = ({ stars, params, setActiveUniverse }) => {

  // Get URL params from react-router and transform it to a number for
  // filtering our data

  const universeId = parseInt(params.id, 10);

  // Filter data

  const filteredStars = stars.filter((item) => {
    return (item.universeId === universeId);
  });

  // Define template

  const items = filteredStars.map((item, index) => {
    return (
      <div
        className="dash__items__item-universe"
        key={index}
      >
        <div className="dash__items__item-universe__image"></div>
        <div className="dash__items__item-universe__title">
          {item.name}
        </div>
      </div>
    )
  });

  return (
    <div className="dash__items">
      {items}
    </div>
  );
};

class Stars extends React.Component {
  componentDidMount() {
    this.props.setActiveUniverse(this.props.params.id);
  }

  render() {
    return (
      <Items {...this.props} />
    );
  }
}

export default Stars;
