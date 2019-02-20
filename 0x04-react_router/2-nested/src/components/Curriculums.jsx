import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Year1 from './curriculums/Year1.jsx';
import Year2 from './curriculums/Year2.jsx';

export default class Curriculums extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/curriculums/year_1'>Year 1</Link></li>
          <li><Link to='/curriculums/year_2'>Year 2</Link></li>
        </ul>
        <Switch>
          <Route exact path='/curriculums/year_1' component={Year1} />
          <Route exact path='/curriculums/year_2' component={Year2} />
        </Switch>
      </div>
    );
  }
}
