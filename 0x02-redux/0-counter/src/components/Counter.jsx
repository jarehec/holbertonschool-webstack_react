import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { value, onIncrement } = this.props
    return (
      <div>
        {value}
        <button onClick={onIncrement}>
          Increment
        </button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired
}

export default Counter