import React from 'react';
import { Link } from 'react-router-dom';

export default class Holberton extends React.Component {
  render() {
		return (
				<div>
						<Link to='/'/>
						<Link to='/holberton'/>
						<Link to='/school'/>
				</div>
		)
  }
}
