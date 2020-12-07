import React, { Component } from 'react';
import { Col, Row, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Container, Badge } from "reactstrap";

import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import { connect } from "react-redux";
import {
  showRightBar,
  hideRightBar,
  getMyTasks,
  getMyEvents,
  getMyMilestones,
  getMyCalendar,
  getMyActivities,
  getBookmarks,
  getQuickies
} from "../../../store/actions";

import { Icons } from '../../../constants';

class LinkPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkData: [
        {
          id: 0, label: "My tasks", link: '/me/profile', kind: 'myTasks'
        },
        {
          id: 1, label: "Events & milestones", link: '#', kind: 'eventsMilestones'
        },
        {
          id: 2, label: "My calendar", link: '#', kind: 'myCalendar'
        },
        {
          id: 3, label: "My activities", link: '#', kind: 'myActivities'
        },
        {
          id: 4, label: "Bookmarks", link: '#', kind: 'bookmarks'
        },
        {
          id: 5, label: "Quickies", link: '#', kind: 'quickies'
        }
      ]
    }
  }

  componentDidMount() {
    // this.props.getMyTasks();
    // this.props.getMyEvents();
    // this.props.getMyMilestones();
    // // this.props.getMyCalendar();
    // this.props.getMyActivities();

    // // this.props.getBookmarks();
    // // this.props.getQuickies();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.me.myTasks != this.props.me.myTasks) {
      // console.log('my tasks refresh', this.props.me.myTasks)
    }
    if (prevProps.me.myEvents != this.props.me.myEvents) {
      // console.log('events refresh', this.props.me.myEvents)
    }
    if (prevProps.me.myMilestones != this.props.me.myMilestones) {
      // console.log('milestones refresh', this.props.me.myMilestones)
    }
    if (prevProps.me.myCalendar != this.props.me.myCalendar) {
      // console.log('my calendar refresh', this.props.me.myCalendar)
    }
    if (prevProps.me.myActivities != this.props.me.myActivities) {
      // console.log('my activities refresh', this.props.me.myActivities)
    }
    if (prevProps.me.bookmarks != this.props.me.bookmarks) {
      // console.log('bookmarks refresh', this.props.me.bookmarks)
    }
    if (prevProps.me.quickies != this.props.me.quickies) {
      // console.log('quickies refresh', this.props.me.quickies)
    }
  }

  onLink = (kind) => {
    this.props.history.push('/me/profile', { kind: kind })
  }

  render() {
    return (
      <React.Fragment>
        <Card className="mb-1 bg-white" style={{ minHeight: 200 }}>
          <CardBody className="d-flex flex-column justify-content-between">

            <Row className="align-items-center">
              <i className={`${Icons.onboardingS}`}></i>
              <div className="font-size-14 ml-2 text-info" style={{ cursor: "pointer" }} onClick={() => this.onLink('myTasks')}><u>My Tasks</u></div>
              <Badge className={"badge-soft-info  font-size-11 ml-2"} pill>{this.props.me.myTasks?.length}</Badge>
            </Row>

            <Row className="align-items-center">
              <i className={`${Icons.onboardingS}`}></i>
              <div className="font-size-14 ml-2 text-info" style={{ cursor: "pointer" }} onClick={() => this.onLink('eventsMilestones')}><u>Events {'&'} Milestones</u></div>
              <Badge className={"badge-soft-info  font-size-11 ml-2"} pill>{this.props.me.myEvents.length + this.props.me.myMilestones.length}</Badge>
            </Row>

            <Row className="align-items-center">
              <i className={`${Icons.onboardingS}`}></i>
              <div className="font-size-14 ml-2 text-info" style={{ cursor: "pointer" }} onClick={() => this.onLink('myCalendar')}><u>My Calendar</u></div>
              <Badge className={"badge-soft-info  font-size-11 ml-2"} pill>{this.props.me.myCalendar?.length}</Badge>
            </Row>

            <Row className="align-items-center">
              <i className={`${Icons.onboardingS}`}></i>
              <div className="font-size-14 ml-2 text-info" style={{ cursor: "pointer" }} onClick={() => this.onLink('myActivities')}><u>My Activities</u></div>
              <Badge className={"badge-soft-info  font-size-11 ml-2"} pill>{this.props.me.myActivities?.length}</Badge>
            </Row>

            <Row className="align-items-center">
              <i className={`${Icons.onboardingS}`}></i>
              <div className="font-size-14 ml-2 text-info" style={{ cursor: "pointer" }} onClick={() => this.props.showRightBar('quickyBookmark')}><u>Bookmarks</u></div>
              <Badge className={"badge-soft-info  font-size-11 ml-2"} pill>{this.props.me.bookmarks?.length}</Badge>
            </Row>

            <Row className="align-items-center">
              <i className={`${Icons.onboardingS}`}></i>
              <div className="font-size-14 ml-2 text-info" style={{ cursor: "pointer" }} onClick={() => this.props.showRightBar('quickyBookmark')}><u>Quickies</u></div>
              <Badge className={"badge-soft-info  font-size-11 ml-2"} pill>{this.props.me.quickies?.length}</Badge>
            </Row>

          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {    
    me: state.Me
  };
};

export default connect(mapStateToProps, {
  showRightBar,
  hideRightBar,
  getMyTasks,
  getMyEvents,
  getMyMilestones,
  getMyCalendar,
  getMyActivities,
  getBookmarks,
  getQuickies
})(withRouter(withNamespaces()(LinkPanel)));