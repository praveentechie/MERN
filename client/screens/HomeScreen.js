import React, { Component } from 'react';
import { connect }          from 'react-redux';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className='page-container'>
        Hey, Screen rendered
      </div>
    );
  }
}

export default connect(state => {
  console.log('state', state);
  return {
    homeReducer: state.homeReducer
  };
})(HomeScreen);
