import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { text, fct } = this.props
    return (
      <button onClick={fct}>
        {text}
      </button>
    )
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  fct: PropTypes.func.isRequired,
}

export default Button
