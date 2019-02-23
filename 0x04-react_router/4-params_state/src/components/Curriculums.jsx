import React from 'react';
import { connect } from 'react-redux';
import { Link, Switch, Route } from 'react-router-dom';
import Year from './Year.jsx';

class CurriculumsComponent extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.curriculums.map((item, i) =>
          <li key={i}>
            <Link to={{ pathname: `/curriculums/${item.id}`, state: {item}}}>{item.name}</Link>
          </li>)}
        </ul>
        <Switch>
          <Route exact path='/curriculums/:year' component={Year}/>
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    curriculums: state.curriculums,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    _: () => {
      dispatch({
        type: 'INIT_CURRICULUMS',
      })
    },
  }
}

const Curriculums = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurriculumsComponent)

export default Curriculums
