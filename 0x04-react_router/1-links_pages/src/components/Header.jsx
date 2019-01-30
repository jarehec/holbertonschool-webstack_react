import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Holberton from './Holberton.jsx';
import School from './School.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/holberton'>Holberton</Link></li>
          <li><Link to='/school'>School</Link></li>
        </ul>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/holberton' component={Holberton} />
          <Route exact path='/school' component={School} />
        </Switch>
      </div>
    );
  }
}
