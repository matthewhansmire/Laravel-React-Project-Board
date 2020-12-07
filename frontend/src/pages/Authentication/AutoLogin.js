import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// actions
import { 
  login,
  setPerson
} from '../../store/actions';

class AutoLogin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {    
    this.props.login({
      email: this.props.match.params.email,
      password: this.props.match.params.password
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.person != this.props.person) {      
      this.props.setPerson(this.props.person);
      this.props.history.push('/me/dashboard');
    }

    if (prevProps.error != this.props.error) {
      this.setState({
        error: this.props.error,
      })
    }
  }

  render() {
    return (
      <React.Fragment>

      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.Auth.loading,
    person: state.Auth.person,
    error: state.Auth.error
  }
}

export default withRouter(connect(mapStateToProps, { 
  login,
  setPerson 
})(AutoLogin));

