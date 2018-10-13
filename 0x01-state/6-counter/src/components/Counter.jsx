import React from 'react';
import PropTypes from 'prop-types';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pid: null,
      value: this.props.initValue
    };
    let pid = null;
  }
  componentDidMount() {
    this.pid = setInterval(
                 () => this.setState({value: this.state.value + 1}),
                 1000
               );
  }

  componentWillUnmount() {
    clearInterval(this.pid);
  }

  handleClick() {
    this.setState({value: this.props.initValue});
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
