import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators    from '../actions/UserActions';
import Table                  from '../components/Table';

class UserScreen extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(actionCreators, props.dispatch);
  }
  componentDidMount() {
    console.log(this);
    this.actions.initUsers();
  }
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };
  render() {
    return(
      <div className='user-list-page'>
        Render table here.
        <Table />
      </div>
    );
  }
}

export default connect(state => {
  return {
    userReducer: state.userReducer
  };
})(UserScreen);
