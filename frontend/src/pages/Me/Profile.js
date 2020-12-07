import React, { Component } from 'react';
import { Col, Row, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Container, Button } from "reactstrap";

import { withRouter } from "react-router-dom";
import { withNamespaces } from 'react-i18next';
import { connect } from "react-redux";

import { Icons } from '../../constants';
import defaultUserImg from '../../assets/images/defaultUserImg.png';

import MyTasks from './components/MyTasks';
import EventsMilestones from './components/EventsMilestones';
import MyCalendar from './components/MyCalendar';
import MyActivities from './components/MyActivities';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        {
          id: 0,
          icon: Icons.myTasks,
          label: 'My tasks'
        },
        {
          id: 1,
          icon: Icons.eventsMilestones,
          label: 'Events & milestones'
        },
        {
          id: 2,
          icon: Icons.myCalendar,
          label: 'My Calendar'
        },
        {
          id: 3,
          icon: Icons.myActivities,
          label: 'My Activities'
        },
      ],
      activeMenuId: 0,
      viewMode: 'list',
    }
  }

  componentDidMount() {
    var kind = this.props.location.state.kind;
    var activeMenuId = 0;
    if (kind === 'myTasks') activeMenuId = 0;
    else if (kind === 'eventsMilestones') activeMenuId = 1;
    else if (kind === 'myCalendar') activeMenuId = 2;
    else if (kind === 'myActivities') activeMenuId = 3;
    this.setState({ activeMenuId: activeMenuId });
  }

  onMenu = (each) => {
    this.setState({ activeMenuId: each.id });
  }

  onViewMode = () => {
    var viewMode = '';
    if (this.state.viewMode === 'list') viewMode = 'board';
    else viewMode = 'list';
    this.setState({ viewMode: viewMode });
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Row>
              <Col id="leftPanel" className="col-2 border">
                <div className="d-flex justify-content-center my-3">
                  <CardImg src={this.props.user?.img ? this.props.user?.img : defaultUserImg} alt="Skote" className="rounded-circle avatar-md ml-2" />
                </div>

                <CardTitle className="text-center font-size-18 mb-3">{this.props.user?.name}</CardTitle>

                <CardBody>
                  {
                    this.state.menuItems.map((each, index) => (
                      <div key={index}>
                        <div className={`d-flex align-items-center ${this.state.activeMenuId == each.id ? 'text-info' : ''} `} style={{ cursor: "pointer" }} onClick={() => this.onMenu(each)}>
                          <i className={`${each.icon} font-size-20 align-middle`}></i>
                          <span className="font-size-16 ml-2">{each.label}</span>
                        </div>
                        <hr className="my-2"></hr>
                      </div>
                    ))
                  }
                </CardBody>
              </Col>

              <Col id="rightPanel" className="col-10 border">
                {
                  this.state.activeMenuId === 0 && <MyTasks />
                }
                {
                  this.state.activeMenuId === 1 && <EventsMilestones />
                }
                {
                  this.state.activeMenuId === 2 && <MyCalendar />
                }
                {
                  this.state.activeMenuId === 3 && <MyActivities />
                }
              </Col>
            </Row>
          </Container>
        </div>
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
  
})(withRouter(withNamespaces()(Profile)));

