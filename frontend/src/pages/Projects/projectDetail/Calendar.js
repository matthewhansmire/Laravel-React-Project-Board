import React, { Component } from 'react';

import { Row, Col, Container, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal } from 'reactstrap';

import { withRouter } from "react-router-dom";
import { withNamespaces } from 'react-i18next';
import { connect } from "react-redux";
import {
  showRightBar,
  hideRightBar,
  getTasks,
  getProjectEvents,
  getProjectMilestones
} from "../../../store/actions";


import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/sass/styles.scss';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss';

import { Icons } from '../../../constants';

import TagItem from '../../../components/App/TagItem';

class ProjectCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarData: [],
      viewMode: 'month'
    }
    this.localizer = momentLocalizer(moment)
  }

  componentDidMount(){    
    var param = {project_id: this.props.match.params.id};    
    if(param){
      this.props.getTasks(param);
      this.props.getProjectEvents(param);
      this.props.getProjectMilestones(param);
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.tasks != this.props.tasks){
      // console.log('project tasks', this.props.projectTasks);
      var calendarData = [...this.state.calendarData]
      this.props.tasks.forEach(each=>{
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

    if(prevProps.projectEvents != this.props.projectEvents){
      // console.log('project events', this.props.projectEvents);
      var calendarData = [...this.state.calendarData];
      this.props.projectEvents.forEach(each => {
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

    if(prevProps.projectMilestones != this.props.projectMilestones){
      // console.log('project milestones', this.props.projectMilestones);
      var calendarData = [...this.state.calendarData];
      this.props.projectMilestones.forEach(each=>{
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
    tasks: state.Task.tasks,
    projectEvents: state.Calendar.projectEvents,
    projectMilestones: state.Calendar.projectMilestones
  };
};

export default connect(mapStateToProps, {
  showRightBar,
  hideRightBar,
  getTasks,
  getProjectEvents,
  getProjectMilestones
})(withRouter(withNamespaces()(ProjectCalendar)));