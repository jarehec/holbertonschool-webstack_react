import React from 'react';

export default class Year extends React.Component {
  render() {
    return (
      <div>
        {this.props.match.params.year} curriculum
      </div>
    );
  }
}
