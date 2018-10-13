import React from 'react';
import Item from './Item.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Read documentation", "Do the tutorial", "Add comment"]
    };
  }
  render() {
    return (
     <div>
        <ul>
          {this.state.items.map((item, i) => <Item key={i} value={item} />)}
        </ul>
      </div>);
  }
}
