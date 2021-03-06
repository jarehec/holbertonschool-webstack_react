import React from 'react';
import PropTypes from 'prop-types';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 89
    };
  }
  render() {
    return (
      <div>{this.state.value}</div>
    );
  }
}

Counter.propTypes = {
	value: PropTypes.number
};

Counter.defaultProps =  {
	value: 0
};
