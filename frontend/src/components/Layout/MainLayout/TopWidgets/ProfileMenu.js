
import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import {
  showRightBar,
  hideRightBar,
} from "../../../../store/actions";

import defaultUserImg from '../../../../assets/images/defaultUserImg.png';

class ProfileMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: false,      
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      menu: !prevState.menu
    }));
  }

  componentDidMount() {
    
  }

  render() {

    return (
      <React.Fragment>
        <Dropdown isOpen={this.state.menu} toggle={this.toggle} className="d-inline-block" >
          <DropdownToggle className="btn header-item waves-effect" id="page-header-user-dropdown" tag="button">
            <img className="rounded-circle header-profile-user" src={this.props.user?.img ? this.props.user?.img : defaultUserImg} alt="Header Avatar" />
            {/* <span className="d-none d-xl-inline-block ml-2 mr-1">{this.state.name}</span>
                        <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i> */}
          </DropdownToggle>
          <DropdownMenu right>
            <div className="d-flex px-2">
              <img className="rounded-circle header-profile-user" src={this.props.user?.img ? this.props.user?.img : defaultUserImg} alt="Header Avatar" />
              <span className="d-none d-xl-inline-block ml-3 align-self-center font-size-16">{this.props.user?.name}</span>
            </div>
            <div className="dropdown-divider"></div>
            <DropdownItem tag="a" href="#">
              <i className="bx bx-user font-size-16 align-middle mr-1"></i>
              {this.props.t('Update info')}
            </DropdownItem>
            <DropdownItem tag="a" href="#">
              <i className="bx bx-cog font-size-16 align-middle mr-1"></i>
              {this.props.t('My preferences')}
            </DropdownItem>
            <DropdownItem tag="a" href="#">              
              <i className="bx bx-key font-size-17 align-middle mr-1"></i>
              {this.props.t('Change password')}
            </DropdownItem>
            <DropdownItem tag="a" href="auth-lock-screen">
              <i className="bx bx-lock-open font-size-16 align-middle mr-1"></i>
              {this.props.t('API access')}
            </DropdownItem>
            <DropdownItem tag="a" href="auth-lock-screen">
              <i className="bx bx-mobile font-size-16 align-middle mr-1"></i>
              {this.props.t('Download mobile apps')}
            </DropdownItem>
            <div className="dropdown-divider"></div>
            <Link to="/logout" className="dropdown-item">
              <i className="bx bx-power-off font-size-16 align-middle mr-1 text-danger"></i>
              <span>{this.props.t('Logout')}</span>
            </Link>
          </DropdownMenu>
        </Dropdown>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {    
    person: state.Auth.person
  };
};

export default connect(mapStateToProps, {
  showRightBar,
  hideRightBar  
})(withRouter(withNamespaces()(ProfileMenu)));

