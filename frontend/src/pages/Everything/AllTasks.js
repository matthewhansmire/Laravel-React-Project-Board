import React, { Component } from 'react';
import { Row, Col, Container, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Badge } from 'reactstrap';

import { withNamespaces } from 'react-i18next';
import { connect } from "react-redux";
import {
  showRightBar,
  hideRightBar,
  getAllTasks,
} from "../../store/actions";

import moment from 'moment';

import { Icons } from '../../constants';

import TagItem from '../../components/App/TagItem';
import { calculateDaysBetweenDates, getInitial } from '../../utils';

class AllTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagItems: [
        {
          id: 0,
          label: 'Status',
          icon: Icons.tasks,
          value: 'Incomplete'
        },
        {
          id: 1,
          label: 'Projects',
          icon: Icons.projects,
          value: 'All'
        },
        {
          id: 2,
          label: 'Assigned',
          icon: Icons.profile,
          value: 'All'
        },
        {
          id: 3,
          label: 'View',
          icon: Icons.calendar,
          value: 'Due today, Tasks to w...'
        },
        {
          id: 4,
          label: 'Subtasks',
          icon: Icons.listView,
          value: 'Show'
        },
        {
          id: 5,
          label: 'Labels',
          icon: Icons.taskLabels,
          value: 'All'
        },
        {
          id: 6,
          label: 'Group by',
          icon: Icons.groupBy,
          value: 'Date'
        }
      ],

      pastTasks: [],
      todayTasks: [],
      tomorrowTasks: [],
      thisWeekTasks: [],
      nextWeekTasks: [],
      laterTasks: [],
      noDueTasks: []
    }
  }

  componentDidMount() {
    this.props.getAllTasks();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.allTasks != this.props.allTasks) {
      this.classifyTasks();
    }
  }

  classifyTasks() {
    let pastTasks = [];
    let todayTasks = [];
    let tomorrowTasks = [];
    let thisWeekTasks = [];
    let nextWeekTasks = [];
    let laterTasks = [];
    let noDueTasks = [];
    this.props.allTasks.forEach(each => {
      if (each.end_date) {
        if (moment(each.end_date).isBefore(moment(), 'date')) pastTasks.push(each);
        else if (moment(each.end_date).isSame(moment(), 'date')) todayTasks.push(each);
        else if (moment(each.end_date).isSame(moment().add(1, 'd'), 'date')) tomorrowTasks.push(each);
        else if (moment(each.end_date).isBefore(moment().day('sunday').add(7, 'd'), 'date')) thisWeekTasks.push(each);
        else if (moment(each.end_date).isBefore(moment().day('sunday').add(14, 'd'), 'date')) nextWeekTasks.push(each);
        else if (moment(each.end_date).isAfter(moment().add(7, 'd'), 'date')) laterTasks.push(each);
      }
      else {
        noDueTasks.push(each);
      }
    })
    // console.log('past', pastTasks);      
    // console.log('today', todayTasks);      
    // console.log('tomorrow', tomorrowTasks);      
    // console.log('thisweek', thisWeekTasks);      
    // console.log('nextweek', nextWeekTasks);      
    // console.log('later', laterTasks);      
    // console.log('nodue', noDueTasks);

    this.setState({
      pastTasks: pastTasks,
      todayTasks: todayTasks,
      tomorrowTasks: tomorrowTasks,
      thisWeekTasks: thisWeekTasks,
      nextWeekTasks: nextWeekTasks,
      laterTasks: laterTasks,
      noDueTasks: noDueTasks
    })
  }

  onItem = () => {
    this.props.showRightBar('detailTask');
  }

  renderTaskLines = (tasks) => {
    return (
      tasks.map((each, index) => (
        <div key={index}>
          <Row className="d-flex align-items-center" onClick={() => this.onItem()} style={{ cursor: "pointer" }}>
            <Col className="col-3">{each.title}</Col>
            <Col className="col-2">{each.project.title}</Col>
            <Col className="col-1">{each.tasklist.name}</Col>
            <Col className="col-1">{each.start_date} {'->'} {each.end_date}</Col>
            <Col className="col-1">
              <Badge key={index} className="ml-2 font-size-12" style={{ backgroundColor: each.stage?.code, borderRadius: 10 }}>{each.stage?.name}</Badge>
            </Col>
            <Col className="col-1 d-flex">
              {
                each.assignees.map((each, index) => {
                  return (
                    <div
                      key={index}
                      className="rounded-circle bg-danger border border-white d-flex justify-content-center align-items-center"
                      style={{ width: 20, height: 20, marginLeft: -5, cursor: "pointer" }}
                    >
                      {
                        each.photo ?
                          <img src={each.photo} alt="" className="rounded-circle" style={{ width: '100%', height: '100%' }} />
                          :
                          <span className="font-size-12 text-white">{getInitial(each.name)}</span>
                      }
                    </div>
                  )
                })
              }
            </Col>
            <Col className="col-1">{each.progress.name}</Col>
            <Col className="col-1 d-flex-nowrap">
              {
                each.labels.map((each, index) =>
                  <Badge key={index} className="ml-2" style={{ backgroundColor: each.code }}>{each.name}</Badge>
                )
              }
            </Col>
            <Col className="col-1">{each.hours} {each.hours ? 'h' : ''} {each.minutes} {each.minutes ? 'm' : ''}</Col>
            {/* <Col className="col-1">Logged time</Col>
                  <Col className="col-1">Created on</Col>
                  <Col className="col-1">Created by</Col>
                  <Col className="col-1">Completed on</Col>
                  <Col className="col-1">Completed by</Col> */}
          </Row>
          <hr className="my-2"></hr>
        </div>
      ))
    )
  }

  render() {
    return (
      <React.Fragment>
        <CardHeader className="px-0 py-3 font-size-16 d-flex align-items-center justify-content-between" id="headingTwo">
          <button type="button" className="btn btn-dark waves-effect waves-light" onClick={() => this.props.showRightBar('task')}><i className="bx bx-plus font-size-16 align-middle mr-2"></i> Add</button>
          <div className="d-flex">
            {
              this.state.tagItems.map((each) => (
                <TagItem key={each.id} item={each} />
              ))
            }
            <div className="d-flex align-items-center mx-2">
              <div className="d-flex align-items-center justify-content-center" style={{ height: '60%', borderLeft: '1px solid grey' }}>
                <i className={`${Icons.dotsVertical} font-size-20 align-middle`} style={{ cursor: "pointer" }}></i>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody className="pt-0 bg-white" style={{ flexWrap: 'nowrap', overflowX: 'auto' }}>
          <Row className="font-weight-bold py-3">
            <Col className="col-3">Title</Col>
            <Col className="col-2">Project</Col>
            <Col className="col-1">Tasklist</Col>
            <Col className="col-1">Date</Col>
            <Col className="col-1">Stage</Col>
            <Col className="col-1">Assignees</Col>
            <Col className="col-1">Progress</Col>
            <Col className="col-1">Labels</Col>
            <Col className="col-1">Estimated time</Col>
            {/* <Col className="col-1">Logged time</Col>
            <Col className="col-1">Created on</Col>
            <Col className="col-1">Created by</Col>
            <Col className="col-1">Completed on</Col>
            <Col className="col-1">Completed by</Col> */}
          </Row>

          {
            this.state.pastTasks.length > 0 &&
            <Row><span className="font-size-14 my-2"><b>In the past</b></span></Row>
          }
          {
            this.renderTaskLines(this.state.pastTasks)
          }

          {
            this.state.todayTasks.length > 0 &&
            <Row><span className="font-size-14 my-2"><b>Today</b></span></Row>
          }
          {
            this.renderTaskLines(this.state.todayTasks)
          }

          {
            this.state.tomorrowTasks.length > 0 &&
            <Row><span className="font-size-14 my-2"><b>Tomorrow</b></span></Row>
          }
          {
            this.renderTaskLines(this.state.tomorrowTasks)
          }

          {
            this.state.thisWeekTasks.length > 0 &&
            <Row><span className="font-size-14 my-2"><b>This week</b></span></Row>
          }
          {
            this.renderTaskLines(this.state.thisWeekTasks)
          }

          {
            this.state.nextWeekTasks.length > 0 &&
            <Row><span className="font-size-14 my-2"><b>Next week</b></span></Row>
          }
          {
            this.renderTaskLines(this.state.nextWeekTasks)
          }

          {
            this.state.laterTasks.length > 0 &&
            <Row><span className="font-size-14 my-2"><b>Later</b></span></Row>
          }
          {
            this.renderTaskLines(this.state.laterTasks)
          }

          {
            this.state.noDueTasks.length > 0 &&
            <Row><span className="font-size-14 my-2"><b>No due date</b></span></Row>
          }
          {
            this.renderTaskLines(this.state.noDueTasks)
          }

        </CardBody>

      </React.Fragment >
    );
  }
}

const mapStateToProps = state => {
  return {
    allTasks: state.Task.allTasks
  };
};

export default connect(mapStateToProps, {
  showRightBar,
  hideRightBar,
  getAllTasks,
})(withNamespaces()(AllTasks));