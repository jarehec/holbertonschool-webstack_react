import React from 'react';
import PropTypes from 'prop-types';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initValue
    };
  }

  handleClick() {
    this.setState({value: 1000});
  }

  render() {
    return (
      <div>
        {this.state.value}
        <button onClick={(e) => this.handleClick(e)}>
          "New value"
        </button> 
	  </div>
    );
  }
}

Counter.propTypes = {
	value: PropTypes.number
};

Counter.defaultProps =  {
	value: 0
};
