import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavLink, NavItem, Col, Row, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Container } from "reactstrap";

import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import { Redirect } from "react-router-dom";

import classnames from "classnames";

import {
  
} from "../../../store/actions";

class TopTabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabMenu: {
        projects: [
          {
            id: 0,
            name: 'assignedtome',
            label: 'Assigned to me',
          },
          {
            id: 1,
            name: 'managedbyme',
            label: 'Managed by me',
          },
          {
            id: 2,
            name: 'allprojects',
            label: 'All projects',
          },
          {
            id: 3,
            name: 'templates',
            label: 'Templates',
          }
        ],
        projectDetail: [
          {
            id: 0,
            name: 'overview',
            label: 'Overview',
          },
          {
            id: 1,
            name: 'discussions',
            label: 'Discussions',
          },
          {
            id: 2,
            name: 'tasks',
            label: 'Tasks',
          },
          {
            id: 3,
            name: 'gantt',
            label: 'Gantt',
          },
          {
            id: 4,
            name: 'calendar',
            label: 'Calendar',
          },
          {
            id: 5,
            name: 'notes',
            label: 'Notes',
          },
          {
            id: 6,
            name: 'files',
            label: 'Files',
          },
          {
            id: 7,
            name: 'time',
            label: 'Time',
          },
          {
            id: 8,
            name: 'report',
            label: 'Report',
          },
        ],
        everything: [
          {
            id: 0,
            name: 'alltasks',
            label: 'All tasks',
          },
          {
            id: 1,
            name: 'allcalendars',
            label: 'All calendars',
          },
          {
            id: 2,
            name: 'alltime',
            label: 'All time',
          },
          {
            id: 3,
            name: 'allgantt',
            label: 'All gantt',
          },
          {
            id: 4,
            name: 'allactivities',
            label: 'All activities',
          }
        ]
      },
      selectedMenu: []
    }
  }

  componentDidMount() {
    const { match } = this.props;

    var selectedMenu = match.path === '/projects/:tab' ?
      this.state.tabMenu.projects
      : match.path === '/projects/detail/:tab/:id' ?
        this.state.tabMenu.projectDetail
        : match.path === '/everything/:tab' ?
          this.state.tabMenu.everything
          : [];

    this.setState({ selectedMenu: selectedMenu });
  }

  onTab = (tab) => {
    let newPath = this.props.match.path.replace(':tab', tab.name);
    
    let paramId = this.props.match.params.id;
    if(paramId){
      newPath = newPath.replace(':id', paramId);
    } 

    this.props.history.push(newPath)
  }

  render() {
    return (
      <React.Fragment>
        <Col className="d-flex justify-content-center ml-5">
          <Nav tabs className="nav-tabs-custom border-bottom-0">
            {
              this.state.selectedMenu.map((each) => (
                <NavItem key={each.id}>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({ active: this.props.match.params.tab === each.name }, "px-3")}
                    onClick={() => { this.onTab(each) }}
                  >
                    <span className="d-none d-sm-block text-dark font-size-14">{each.label}</span>
                  </NavLink>
                </NavItem>
              ))
            }
          </Nav>
        </Col>

        {
          this.state.redirect &&
          <Redirect to={this.state.redirect} />
        }

      </React.Fragment>
    );
  }
}

export default withRouter(withNamespaces()(TopTabBar));
