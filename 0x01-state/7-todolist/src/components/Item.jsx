import React from 'react';
import PropTypes from 'prop-types';

export default class Item extends React.Component {
  render() {
    return (
      <li>{this.props.value}</li>
    );
  }
}

Item.propTypes = {
	value: PropTypes.string
};
