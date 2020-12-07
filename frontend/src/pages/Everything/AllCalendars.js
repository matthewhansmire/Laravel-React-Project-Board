import React, { Component } from 'react';

import { Row, Col, Container, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal } from 'reactstrap';

import { withNamespaces } from 'react-i18next';
import { connect } from "react-redux";
import {
  showRightBar,
  hideRightBar,
  getAllTasks,
  getAllEvents,
  getAllMilestones
} from "../../store/actions";

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/sass/styles.scss';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss';

import { Icons } from '../../constants';

import TagItem from '../../components/App/TagItem';

class AllCalendars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarData: [],
      viewMode: 'month'
    }
    this.localizer = momentLocalizer(moment)
  }

  componentDidMount(){
    this.props.getAllTasks();
    this.props.getAllEvents();
    this.props.getAllMilestones();
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.allTasks != this.props.allTasks){
      // console.log('all tasks', this.props.allTasks);
      var calendarData = [...this.state.calendarData]
      this.props.allTasks.forEach(each=>{
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

      this.setState({calendarData: calendarData});
    }

    if(prevProps.allEvents != this.props.allEvents){
      // console.log('all events', this.props.allEvents);
      var calendarData = [...this.state.calendarData];
      this.props.allEvents.forEach(each => {
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

      this.setState({calendarData: calendarData});
    }

    if(prevProps.allMilestones != this.props.allMilestones){
      // console.log('all milestones', this.props.allMilestones);
      var calendarData = [...this.state.calendarData];
      this.props.allMilestones.forEach(each=>{
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

      this.setState({calendarData: calendarData});
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
          onView={(viewMode)=>this.setState({viewMode: viewMode})}
          onDoubleClickEvent={(e)=>this.onItem(e)}
          startAccessor="start"
          endAccessor="end"
          style={{ minHeight: '80vh' }}
        />
      </React.Fragment >
    );
  }
}

const mapStateToProps = state => {
  return {
    allTasks: state.Task.allTasks,
    allEvents: state.Calendar.allEvents,
    allMilestones: state.Calendar.allMilestones
  };
};

export default connect(mapStateToProps, {
  showRightBar,
  hideRightBar,
  getAllTasks,
  getAllEvents,
  getAllMilestones
})(withNamespaces()(AllCalendars));