import React, { Component } from 'react';
import { Col, Row, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Container, Popover, PopoverHeader, PopoverBody } from "reactstrap";

import { withRouter } from "react-router-dom";
import { withNamespaces } from 'react-i18next';
import { Route, Redirect } from "react-router-dom";

import OverView from './OverView';
import Discussions from './Discussions';
import Tasks from './Tasks';
import Gantt from './Gantt';
import Calendar from './Calendar';
import Notes from './Notes';
import Files from './Files';
import Time from './Time';

class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabComponents:[
        {
          id: 0,
          name: 'overview',
          component: <OverView />
        },
        {
          id: 1,
          name: 'discussions',
          component: <Discussions />
        },
        {
          id: 2,
          name: 'tasks',
          component: <Tasks />
        },
        {
          id: 3,
          name: 'gantt',
          component: <Gantt />
        },
        {
          id: 4,
          name: 'calendar',
          component: <Calendar />
        },
        {
          id: 5,
          name: 'notes',
          component: <Notes />
        },
        {
          id: 6,
          name: 'files',
          component: <Files />
        },
        {
          id: 7,
          name: 'time',
          component: <Time />
        },
        {
          id: 8,
          name: 'report',
          component: <Redirect to={{ pathname: "/reports" }} />
        },
      ]
    }
  }

  render() {    
    var tab = this.state.tabComponents.find(each=>each.name == this.props.match.params.tab);
    return (
      <React.Fragment>
        {
          tab?.component
        }        
      </React.Fragment>
    );
  }
}

export default withRouter(withNamespaces()(ProjectDetail));