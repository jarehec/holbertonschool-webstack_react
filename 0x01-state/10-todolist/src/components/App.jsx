import React from 'react';
import Item from './Item.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      items: ["Read documentation", "Do the tutorial", "Add comment"]
    };
  }

  handleUpdate(event) {
    this.setState({inputValue: event.target.value});
  }

  handleSubmit(event) {
    console.log(this);
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.inputValue],
      inputValue: ''
    });
  }

  render() {
    return (
     <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            New:
            <input type="text" onChange={(e) => this.handleUpdate(e)} />
          </label>
          <input type="submit" value="Add" />
        </form>
        <ul>
          {this.state.items.map((item, i) => <Item key={i} value={item} />)}
        </ul>
      </div>);
  }
}
