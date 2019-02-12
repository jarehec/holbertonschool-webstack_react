import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Year from './Year.jsx';

export default class Curriculums extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/curriculums/year_1'>year_1</Link></li>
          <li><Link to='/curriculums/year_2'>year_2</Link></li>
          <li><Link to='/curriculums/year_3'>year_3</Link></li>
          <li><Link to='/curriculums/year_4'>year_4</Link></li>
        </ul>
        <Switch>
          <Route exact path='/curriculums/:year' component={Year} />
        </Switch>
      </div>
    );
  }
}
