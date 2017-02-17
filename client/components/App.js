import React, {Component}      from 'react';
import { Link }                from 'react-router';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='app-container'>
        <h1>MERN App test</h1>
        <Link to='/home'>Home</Link>
        &nbsp;&nbsp;
        <Link to='/user-list'>Users</Link>
        {this.props.children}
      </div>
    );
  }
}
