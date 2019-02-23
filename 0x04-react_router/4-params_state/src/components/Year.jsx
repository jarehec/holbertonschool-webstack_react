import React from 'react';

export default class Year extends React.Component {
  render() {
    return (
      <div>
       <h1>{this.props.location.state.item['name']}</h1>
       <p>{this.props.location.state.item['description']}</p>
      </div>
    );
  }
}
