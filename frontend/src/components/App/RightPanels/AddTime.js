import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";

import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import { connect } from "react-redux";
import {
  showRightBar,
  hideRightBar,
  getAllProjects,
  getAllTimesheets,
  getTasklists,
  getProjectTimesheets,
  getTasklistTasks,
  getSubtasks,
  getTimeStatuses,

  addTime,
} from "../../../store/actions";

import { AvForm, AvField } from "availity-reactstrap-validation";

import "../../../assets/scss/rightbar.scss";
import { Icons } from "../../../constants";

import SingleSelectDropdown from '../SingleSelectDropdown';

class AddTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      selectedProject: null,

      timesheets: [],
      selectedTimesheet: null,
      addTimesheetForm: false,

      tasklists: [],
      selectedTasklist: null,

      tasks: [],
      selectedTask: null,

      subtasks: [],
      selectedSubtask: null,

      statuses: [],
      selectedStatus: null,

      date: '',
      hours: '',
      minutes: '',
      desc: ''
    };
  }

  componentDidMount() {
    this.props.getAllProjects();
    this.props.getTimeStatuses();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.allProjects != this.props.allProjects) {
      this.setState({
        projects: this.props.allProjects
      })
    }

    if (prevProps.projectTasklists != this.props.projectTasklists) {
      this.setState({
        tasklists: this.props.projectTasklists
      })
    }

    if (prevProps.projectTimesheets != this.props.projectTimesheets) {
      this.setState({
        timesheets: this.props.projectTimesheets
      })
    }

    if (prevProps.tasklistTasks != this.props.tasklistTasks) {
      this.setState({
        tasks: this.props.tasklistTasks
      })
    }

    if (prevProps.subtasks != this.props.subtasks) {
      console.log('subtasks', this.props.subtasks)
      this.setState({
        subtasks: this.props.subtasks
      })
    }

    if (prevProps.timeStatuses != this.props.timeStatuses) {
      this.setState({
        statuses: this.props.timeStatuses
      })
    }

    if(prevProps.addedTime != this.props.addedTime){      
      this.props.getAllTimesheets();
      this.props.hideRightBar();
    }

    if(this.props.rightBarParam){
      console.log('param', this.props.rightBarParam);
    }

  }

  toggleAddTimesheetForm = () => {
    this.setState({
      addTimesheetForm: !this.state.addTimesheetForm
    })
  }

  handleAddTimesheet = (event, errors, values) => {
    if (values.timesheetTitle) {
      var newTimesheet = values.timesheetTitle;
      var { timesheets } = this.state;
      if (timesheets.findIndex(each => each == newTimesheet) == -1) timesheets.push(newTimesheet);

      this.setState({
        timesheets: timesheets,
        addTimesheetForm: false
      })
    }
  }

  onChangeProject = (project) => {
    this.setState({ selectedProject: project });
    let param = { project_id: project.id }
    this.props.getTasklists(param);
    this.props.getProjectTimesheets(param);
  }

  onChangeTimesheet = (timesheet) => {
    this.setState({ selectedTimesheet: timesheet });
  }

  onChangeTasklist = (tasklist) => {
    this.setState({ selectedTasklist: tasklist });
    let param = { tasklist_id: tasklist.id };
    this.props.getTasklistTasks(param);
  }

  onChangeTask = (task) => {
    this.setState({ selectedTask: task });
    let param = {task_id: task.id};
    this.props.getSubtasks(param);
  }

  onChangeSubtask = (subtask) => {
    this.setState({ selectedSubtask: subtask})
  }

  onChangeStatus = (status) => {
    this.setState({ selectedStatus: status });
  }


  handleAddAll = () => {
    if (!this.state.selectedProject) {
      alert('Project is not selected');
      return;
    }
    if (!this.state.selectedTimesheet) {
      alert('Timesheet is not selected');
      return;
    }
    if (!this.state.date) {
      alert('Date is not selected');
      return;
    }
    if (!this.state.hours) {
      alert('Hours is not entered');
      return;
    }

    this.props.addTime({
      date: this.state.date,
      hours: this.state.hours,
      minutes: this.state.minutes ? this.state.minutes : 0,
      desc: this.state.desc,
      creator_id: this.props.person.id,
      project_id: this.state.selectedProject.id,
      timesheet_id: this.state.selectedTimesheet.id,
      tasklist_id: this.state.selectedTasklist?.id,
      task_id: this.state.selectedTask?.id,
      // subtask_id: thsi.state.selecetdSubtask.id,
      status_id: this.state.selectedStatus ? this.state.selectedStatus.id : this.state.statuses[0].id,
    })


  }

  render() {
    return (
      <React.Fragment>
        <div className="right-bar w-50">

          <div className="rightbar-title px-3 py-2">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Add time</h5>
              <div>
                <i className={`${Icons.helpS} font-size-22`} style={{ cursor: "pointer" }}></i>
                <i className={`${Icons.closeS} font-size-24 ml-2`} style={{ cursor: "pointer" }} onClick={() => this.props.hideRightBar()}></i>
              </div>
            </div>
          </div>

          <div className="d-flex p-3">
            <Col className="col-7">
              <div className="my-3">
                Project:
                <SingleSelectDropdown keyName="project" options={this.state.projects} itemIconStyle="checkBox" onChange={this.onChangeProject} />
              </div>

              {
                !this.state.addTimesheetForm &&
                <div className="my-3">
                  Timesheet:
                  <SingleSelectDropdown keyName="timesheet" options={this.state.timesheets} itemIconStyle="checkBox" onChange={this.onChangeTimesheet} />
                  {/* <div className="my-1 text-info" onClick={this.toggleAddTimesheetForm} style={{ cursor: "pointer" }}>Add timesheet</div> */}
                </div>
              }
              {
                this.state.addTimesheetForm &&
                <AvForm className="needs-validation" onSubmit={this.handleAddTimesheet}>
                  <Row>
                    <Col className="col-12">
                      <AvField
                        name="timesheetTitle"
                        placeholder="Title"
                        type="text"
                        errorMessage="Enter Title"
                        className="form-control"
                        validate={{ required: { value: true } }}
                        id="validationCustom06"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-4 d-flex align-items-center">Estimated time:</Col>
                    <Col className="col-3">
                      <AvField
                        name="hours"
                        placeholder="Hours"
                        type="number"
                        errorMessage="Enter Hours"
                        className="form-control"
                        validate={{ required: { value: true } }}
                        id="validationCustom07"
                      />
                    </Col>
                    <Col className="col-3">
                      <AvField
                        name="minutes"
                        placeholder="Minutes"
                        type="number"
                        errorMessage="Enter Minutes"
                        className="form-control"
                        validate={{ required: { value: true } }}
                        id="validationCustom08"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="form-check my-2 d-flex align-items-center">
                        <input className="form-check-input" type="checkbox" value="" id="markAsPrivate" />
                        <label className="form-check-label" htmlFor="markAsPrivate">Mark as private</label>
                        <i className={`${Icons.help} font-size-16 ml-2`} style={{ cursor: "pointer" }}></i>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-3">
                      <Button color="primary" type="submit" style={{ width: '100%' }}>Add</Button>
                    </Col>
                    <Col className="col-3">
                      <Button color="secondary" onClick={this.toggleAddTimesheetForm} style={{ width: '100%' }}>Cancel</Button>
                    </Col>
                  </Row>
                </AvForm>
              }

              <div className="my-3">
                <Row>
                  <Col className="col-4">
                    Date:
                    <input className="form-control border font-size-14" style={{ height: 30 }} type="date" defaultValue="" placeholder="" onChange={(e) => this.setState({ date: e.target.value })} />
                  </Col>
                  <Col className="col-4">
                    Hours:
                    <input className="form-control border font-size-14" style={{ height: 30 }} type="number" defaultValue="" placeholder="" onChange={(e) => this.setState({ hours: e.target.value })} />
                  </Col>
                  <Col className="col-4">
                    Minutes:
                    <input className="form-control border font-size-14" style={{ height: 30 }} type="number" defaultValue="" placeholder="" onChange={(e) => this.setState({ minutes: e.target.value })} />
                  </Col>
                </Row>
              </div>

              <div className="my-3">
                Description:
                <textarea className="form-control border font-size-14" style={{ minHeight: 100 }} type="text" defaultValue="" placeholder="" onChange={(e) => this.setState({ desc: e.target.value })} />
              </div>
            </Col>

            <Col className="col-5">

              <div className="my-3">
                Tasklist:
                <SingleSelectDropdown keyName="tasklist" options={this.state.tasklists} itemIconStyle="checkBox" onChange={this.onChangeTasklist} />
              </div>

              {
                this.state.tasks.length > 0 &&
                <div className="my-3">
                  Task:
                <SingleSelectDropdown keyName="task" options={this.state.tasks} itemIconStyle="checkBox" onChange={this.onChangeTask} />
                </div>
              }

              {
                this.state.subtasks.length > 0 && 
                <div className="my-3">
                  Subtasks:
                <SingleSelectDropdown keyName="subtask" options={this.state.subtasks} itemIconStyle="checkBox" onChange={this.onChangeSubtask} />
                </div>
              }

              <div className="my-3">
                Status:
                <SingleSelectDropdown keyName="status" options={this.state.statuses} itemIconStyle="checkBox" onChange={this.onChangeStatus} />
              </div>

            </Col>
          </div>

          <div className="d-flex p-3 my-2 w-100" style={{ position: 'absolute', left: 10, bottom: 10 }}>
            <Col className="col-2 px-0">
              <Button color="primary" type="submit" onClick={() => this.handleAddAll()} style={{ width: '100%' }}>Add</Button>
            </Col>
            <Col className="col-2 px-1">
              <Button color="secondary" onClick={() => this.props.hideRightBar()} style={{ width: '100%' }}>Cancel</Button>
            </Col>
          </div>
        </div>
        <div className="rightbar-overlay" onClick={() => this.props.hideRightBar()}></div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    person: state.Auth.person,
    rightBarParam: state.RightBar.rightBarParam,
    allProjects: state.Project.allProjects,
    projectTasklists: state.Project.projectTasklists,
    projectTimesheets: state.Time.projectTimesheets,
    tasklistTasks: state.Time.tasklistTasks,
    timeStatuses: state.Time.timeStatuses,

    addedTime: state.Time.addedTime
  };
};

export default connect(mapStateToProps, {
  showRightBar,
  hideRightBar,
  getAllProjects,
  getAllTimesheets,
  getTasklists,
  getProjectTimesheets,
  getTasklistTasks,
  getSubtasks,
  getTimeStatuses,

  addTime
})(withNamespaces()(AddTime));
