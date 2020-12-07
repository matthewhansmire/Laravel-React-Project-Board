import React, { Component } from "react";

import { Link } from "react-router-dom";

import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import { Icons } from '../../../../constants';

class SidebarBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>
        <div id="sidebar-menu" style={{paddingBottom: 10}}>
          <ul className="metismenu list-unstyled" id="side-menu">
            {/* <li>
              <Link to="#" className="waves-effect">
                <i className={`${Icons.keyboard}`}></i>
                <span>{this.props.t('Keyboard shortcuts')}</span>
              </Link>
            </li> */}
            <li>
              <Link to="#" className="waves-effect">
                <i className={`${Icons.help}`}></i>
                <span>{this.props.t('Help')}</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="waves-effect">
                <i className={`${Icons.feedback}`}></i>
                <span>{this.props.t('Feedback')}</span>
              </Link>
            </li>
            <li>
              <Link to="/logout" className="waves-effect">
                <i className={`${Icons.logout}`}></i>
                <span>{this.props.t('Logout')}</span>
              </Link>
            </li>
          </ul>

          <div className="text-sm-center d-none d-sm-block">
            Build version 1.0
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withNamespaces()(SidebarBottom));