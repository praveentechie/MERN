import React, {Component}      from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('child', this.props.children);
    console.log(this.props);
    return (
      <div className='app-container'>
        {this.props.children}
        <div><h1>Hello App</h1></div>
      </div>
    );
  }
}
