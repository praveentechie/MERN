import React, {Component}      from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('child', this.props.children);
    console.log(process.env);
    return (
      <div className='app-container'>
        {this.props.children}
        <div><h1>Hello App test</h1></div>
      </div>
    );
  }
}
