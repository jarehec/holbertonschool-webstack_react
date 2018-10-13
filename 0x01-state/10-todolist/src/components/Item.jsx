import React from 'react';
import PropTypes from 'prop-types';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
          done: this.state.done === false ? true: false
    });
  }

  render() {
    return (
      <li className={this.state.done ? 'done': ''}
       onClick={(e) => this.handleClick(e)}>{this.props.value}
      </li>
    );
  }
}

Item.propTypes = {
	value: PropTypes.string
};
