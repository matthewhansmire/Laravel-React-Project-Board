import React, { Component } from 'react';

import { withRouter } from "react-router-dom";
import { withNamespaces } from 'react-i18next';

import MainPage from './MainPage';
import ProjectDetail from './projectDetail';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          {
            this.props.match.path === '/projects/:tab' && <MainPage />
          }
          {
            this.props.match.path === '/projects/detail/:tab/:id' && <ProjectDetail />
          }          
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withNamespaces()(Projects));