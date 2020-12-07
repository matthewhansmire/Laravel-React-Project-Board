import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logout } from '../../store/actions';

class Logout extends Component {

  componentDidMount = () => {
    this.props.logout();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.person != this.props.person) {
      this.props.history.push('/login');
    }
  }

  render() {
    return <React.Fragment></React.Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    person: state.Auth.person
  };
};

export default connect(mapStateToProps, {
  logout
})(withRouter(Logout))

