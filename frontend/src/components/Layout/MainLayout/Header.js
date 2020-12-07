import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import {
  showRightBar,
  hideRightBar,
} from "../../../store/actions";

import LanguageDropdown from "./TopWidgets/LanguageDropdown";
import ProfileMenu from "./TopWidgets/ProfileMenu";

import logo from "../../../assets/images/logo.svg";
import logoLightPng from "../../../assets/images/logo-light.png";
import logoLightSvg from "../../../assets/images/logo-light.svg";

import TopTabBar from './TopTabBar';
import ManageDropdown from '../../App/manageDropdown';
import { Icons } from '../../../constants';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearch: false,
      timerRightBar: false,
      searchRightBar: false,
      quickyBookmarkRightBar: false,
      notificationRightBar: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    
  }

  toggleMenu() {
    this.props.toggleMenuCallback();
  }

  render() {
    return (
      <React.Fragment>
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">

              <button type="button" onClick={this.toggleMenu} className="btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn" style={{ position: 'absolute', left: 10 }}>
                <i className="fa fa-fw fa-bars"></i>
              </button>

              <div className="navbar-brand-box">
                <Link to="/" className="logo logo-light">
                  <span className="logo-sm">
                    <img /*src={logoLightSvg}*/ alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <img src={logoLightPng} alt="" width="110" height="25" />
                  </span>
                </Link>
              </div>

              {
                (this.props.match.path === '/me/dashboard') &&
                <div className="d-flex align-items-center ml-3">
                  <i className={`${Icons.me} font-size-18`}></i>
                  <span className="font-size-18 ml-2">Me</span>
                </div>
              }
              {
                (this.props.match.path === '/me/profile') &&
                <div className="d-flex align-items-center ml-3">
                  <i className={`${Icons.profile} font-size-18`}></i>
                  <span className="font-size-18 ml-2">Profile</span>
                </div>
              }
              {
                this.props.match.path === '/projects' &&
                <div className="d-flex align-items-center ml-3">
                  <i className={`${Icons.projects} font-size-18`}></i>
                  <span className="font-size-18 ml-2">Projects</span>
                </div>
              }
              {
                this.props.match.path === '/projects/detail' &&
                <div className="d-flex align-items-center ml-3">
                  <i className={`${Icons.onboardingS} font-size-18`}></i>
                  <span className="font-size-16 ml-2">Project Detail</span>
                </div>
              }
              {
                this.props.match.path === '/everything' &&
                <div className="d-flex align-items-center ml-3">
                  <i className={`${Icons.everything} font-size-18`}></i>
                  <span className="font-size-18 ml-2">Everything</span>
                </div>
              }
              {
                this.props.match.path === '/people' &&
                <div className="d-flex align-items-center ml-3">
                  <i className={`${Icons.people} font-size-18`}></i>
                  <span className="font-size-18 ml-2">People</span>
                </div>
              }
              {
                this.props.match.path === '/reports' &&
                <div className="d-flex align-items-center ml-3">
                  <i className={`${Icons.reports} font-size-18`}></i>
                  <span className="font-size-18 ml-2">Reports</span>
                </div>
              }
            </div>

            <TopTabBar />

            <div className="d-flex">
              {/* <LanguageDropdown /> */}

              <button type="button" onClick={() => { this.props.showRightBar('timers') }} className="btn btn-sm px-3 font-size-22 header-item waves-effect" id="app-timer">
                <i className={`${Icons.timer}`}></i>
              </button>
              <button type="button" onClick={() => { this.props.showRightBar('search') }} className="btn btn-sm px-3 font-size-22 header-item waves-effect" id="app-search">
                <i className={`${Icons.search}`}></i>
              </button>
              <button type="button" onClick={() => { this.props.showRightBar('quickyBookmark') }} className="btn btn-sm px-3 font-size-22 header-item waves-effect" id="app-quickyBookmark">
                <i className={`${Icons.quickyBookmark}`}></i>
              </button>

              <ManageDropdown />

              <div className="btn header-item noti-icon waves-effect d-flex align-items-center" onClick={() => { this.props.showRightBar('notifications') }}>
                <i className="bx bx-bell bx-tada"></i>
                <span className="badge badge-danger badge-pill">3</span>
              </div>

              <ProfileMenu />

            </div>
          </div>
        </header>

      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    
  };
};

export default connect(mapStateToProps, {
  showRightBar,
  hideRightBar  
})(withRouter(withNamespaces()(Header)));
