import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Status extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { value, display } = this.props
    const style = {
      display: display ? "block" : "none",
      height: "200px",
      width: "200px",
      backgroundColor: value == "OK" ? "#008000" : "#FF0000"
    };
    return (
      <div style={style}>
      </div>
    )
  }
}

Status.propTypes = {
  display: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
}

Status.defaultProps = {
  value: ""
}

export default Status
