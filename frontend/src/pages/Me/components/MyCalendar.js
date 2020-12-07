import React, { Component } from 'react';
import { Col, Row, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Container, Button } from "reactstrap";

import { withRouter } from "react-router-dom";
import { withNamespaces } from 'react-i18next';

import { connect } from "react-redux";
import {
  showRightBar,
  hideRightBar,
  getMyTasks,
  getMyEvents,
  getMyMilestones
} from "../../../store/actions";

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/sass/styles.scss';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss';

import { Icons } from '../../../constants';

class MyCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarData: [],
      viewMode: 'month'
    }
    this.localizer = momentLocalizer(moment)
  }

  componentDidMount() {
    this.props.getMyTasks();
    this.props.getMyEvents();
    this.props.getMyMilestones();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.myTasks != this.props.myTasks) {
      console.log('my tasks', this.props.myTasks);
      var calendarData = [...this.state.calendarData]
      this.props.myTasks.forEach(each => {
        var item = {
          id: each.id,
          type: 'task',
          title: each.title,
          start: moment(each.start_date),
          end: moment(each.end_date),
          allDay: true
        };
        calendarData.push(item);
      })

      this.setState({ calendarData: calendarData });
    }

    if (prevProps.myEvents != this.props.myEvents) {
      console.log('my events', this.props.myEvents);
      var calendarData = [...this.state.calendarData];
      this.props.myEvents.forEach(each => {
        var item = {
          id: each.id,
          type: 'event',
          title: each.title,
          start: moment(each.start),
          end: moment(each.end),
          allDay: true
        }
        calendarData.push(item);
      })

      this.setState({ calendarData: calendarData });
    }

    if (prevProps.myMilestones != this.props.myMilestones) {
      console.log('my milestones', this.props.myMilestones);
      var calendarData = [...this.state.calendarData];
      this.props.myMilestones.forEach(each => {
        var item = {
          id: each.id,
          type: 'milestone',
          title: each.title,
          start: null,
          end: moment(each.date),
          allDay: true
        }
        calendarData.push(item);
      })

      this.setState({ calendarData: calendarData });
    }
  }

  onItem = (e) => {
    console.log(e)
  }

  render() {
    return (
      <React.Fragment>
        <Calendar
          localizer={this.localizer}
          events={this.state.calendarData}
          view={this.state.viewMode}
          onView={(viewMode) => this.setState({ viewMode: viewMode })}
          onDoubleClickEvent={(e) => this.onItem(e)}
          startAccessor="start"
          endAccessor="end"
          style={{ minHeight: '80vh' }}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    myTasks: state.Me.myTasks,
    myEvents: state.Me.myEvents,
    myMilestones: state.Me.myMilestones
  };
};

export default connect(mapStateToProps, {
  showRightBar,
  hideRightBar,
  getMyTasks,
  getMyEvents,
  getMyMilestones
})(withRouter(withNamespaces()(MyCalendar)));
