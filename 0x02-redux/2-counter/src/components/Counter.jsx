import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button.jsx'

class Counter extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <div>
        {value}
        <br/>
        <Button text='Increment' fct={onIncrement} />
        <Button text='Decrement' fct={onDecrement} />
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter