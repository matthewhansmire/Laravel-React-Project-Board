import React, { Component } from "react";
import { FormGroup } from "reactstrap";
import { Row, Col, Button, Input } from "reactstrap";

import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import moment from 'moment';

import { connect } from "react-redux";
import {
  showRightBar,
  hideRightBar,

  getTasklistsTasks,
  getUserPersons,
  getTaskProgresses,
  getTaskLabels,
  updateTask,
  addSubTask,
  addSubTaskAssignees
} from "../../../store/actions";

import { AvForm, AvField } from "availity-reactstrap-validation";

import "../../../assets/scss/rightbar.scss";
import { Icons } from "../../../constants";

import SingleSelectDropdown from '../SingleSelectDropdown';
import PersonQueue from '../PersonQueue';

import MultiSelectDropdown from '../MultiSelectDropdown';
import DatePicker from '../DatePicker';
import ComboBox from '../ComboBox';

class DetailTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLogged: '1h',
      browses: [
        "ProjHub",
        "Google Drive",
        "Dropbox",
        "Box",
        "OneDrive"
      ],
      task: this.props.rightBarParam.task ? this.props.rightBarParam.task : '',
      subTasks: this.props.rightBarParam.task ? this.props.rightBarParam.task.subtasks : [],
      progresses: [],
      labels: [],
      persons: [],

      taskTitle: '',
      taskDesc: '',
      taskStartDate: '',
      taskEndDate: '',
      taskHours: '',
      taskMinutes: '',

      selectedTaskStage: {},
      selectedTaskProgress: {},
      selectedTaskAssignees: [],

      addSubTaskForm: false,
      subTaskTitle: '',
      subTaskDesc: '',
      subTaskEndDate: '',

      selectedSubTaskLabels: [],
      selectedSubTaskAssignees: [],

      subTaskLabelBox: false,
      subTaskBrowseBox: false,
      subTaskEndDateBox: false,
      subTaskAssigneeBox: false,
      popupBoxPosition: {},

    };
  }

  componentDidMount() {
    this.props.getUserPersons();
    this.props.getTaskProgresses();
    this.props.getTaskLabels();

    this.setState({
      taskTitle: this.state.task?.title,
      taskDesc: this.state.task?.desc,
      taskStartDate: this.state.task?.start_date,
      taskEndDate: this.state.task?.end_date,
      taskHours: this.state.task?.hours,
      taskMinutes: this.state.task?.minutes
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userPersons != this.props.userPersons) {
      this.setState({ persons: this.props.userPersons?.persons })
    }
    if (prevProps.taskProgresses != this.props.taskProgresses) {
      this.setState({ progresses: this.props.taskProgresses })
      this.setState({
        selectedTaskProgress: this.props.taskProgresses.find(each => each.id == this.state.task?.progress?.id)
      });
    }
    if (prevProps.taskLabels != this.props.taskLabels) {
      this.setState({ labels: this.props.taskLabels })
    }

    if (prevProps.updateTaskSuccess != this.props.updateTaskSuccess) {
      var param = { project_id: this.state.task?.project?.id };
      if (param) {
        this.props.getTasklistsTasks(param);
      }
      this.props.hideRightBar();
    }

    if (prevProps.addedSubTask != this.props.addedSubTask) {
      var subTaskAssignees = [];
      this.state.selectedSubTaskAssignees.forEach(each => {
        var assignee = {
          subtask_id: this.props.addedSubTask.id,
          assignee_id: each.id
        };
        if (this.props.addedSubTask.id) subTaskAssignees.push(assignee);
      })

      if (subTaskAssignees.length > 0) this.props.addSubTaskAssignees(subTaskAssignees);
      else {
        this.setState({ addSubTaskForm: false });
      }
    }

    if (prevProps.addSubTaskAssigneesSuccess != this.props.addSubTaskAssigneesSuccess) {
      this.setState({ addSubTaskForm: false });
    }
  }

  onSelectTaskStartDate = (startDate) => {
    var date = moment(startDate).format("YYYY-MM-DD");
    this.setState({ taskStartDate: date })
  }

  onSelectTaskEndDate = (endDate) => {
    var date = moment(endDate).format("YYYY-MM-DD");
    this.setState({ taskEndDate: date })
  }

  onSelectTaskProgress = (progress) => {
    this.setState({
      selectedTaskProgress: progress
    })
  }

  onSelectTaskAssignee = (assignees) => {
    this.setState({
      selectedTaskAssignees: assignees
    })
  }

  onSelectSubTaskLabel = (labels) => {
    this.setState({
      selectedSubTaskLabels: labels
    })
  }

  onSelectSubTaskEndDate = (endDate) => {
    this.setState({ subTaskEndDate: endDate })
  }

  onSelectSubTaskAssignee = (assignees) => {
    this.setState({
      selectedSubTaskAssignees: assignees
    })
  }

  handleAddSubTask = () => {
    if (!this.state.subTaskTitle) {
      alert('Title is empty');
      return;
    }

    this.props.addSubTask(
      {
        title: this.state.subTaskTitle,
        desc: this.state.subTaskDesc,
        creator_id: this.props.person.id,
        start_date: this.state.task?.startDate,
        end_date: this.state.subTaskEndDate,
        // hours: this.state.estimatedHours,
        // minutes: this.state.estimatedMinutes,
        task_id: this.state.task?.id,
        // stage_id: this.state.selectedTaskStage?.id,
        // repeat_id: this.state.repeat_id,
      }
    );
  }

  handleAddComment = () => { }

  handleUpdateTask = () => {
    this.props.updateTask({
      id: this.state.task?.id,
      title: this.state.taskTitle,
      desc: this.state.taskDesc,
      start_date: this.state.taskStartDate,
      end_date: this.state.taskEndDate,
      hours: this.state.taskHours,
      minutes: this.state.taskMinutes,
      stage_id: this.state.selectedTaskStage?.id,
      progress_id: this.state.selectedTaskProgress?.id,
    });

  }

  render() {
    return (
      <React.Fragment>
        <div className="right-bar d-flex w-75">

          <Col className="col-8 px-0">
            <div className="d-flex justify-content-between align-items-center" style={{ backgroundColor: '#eee', border: '1px solid #d3d3d4' }}>
              <div id="fromDate" className="ml-2">
                <DatePicker date={this.state.taskStartDate} onChange={this.onSelectTaskStartDate} />
              </div>
              <div id="toDate" className="ml-2">
                <DatePicker date={this.state.taskEndDate} onChange={this.onSelectTaskEndDate} />
              </div>
              <div id="threeIcons" className="d-flex ml-3">
                <i className={`${Icons.timeFive} font-size-16`}></i>
                <i className={`${Icons.taskLabels} font-size-16 ml-2`}></i>
                <i className={`${Icons.attach} font-size-16 ml-2`} style={{ transform: 'rotate(-45deg)' }}></i>
              </div>
              <div id="progress" className="mx-2" style={{ width: 80, backgroundColor: '#eee' }}>
                <ComboBox options={this.state.progresses} selectedOption={this.state.selectedTaskProgress} onSelect={this.onSelectTaskProgress} />
              </div>
              <Col id="timeLog" className="">
                <span className="font-size-12">Time logged: {this.state.taskHours ? this.state.taskHours : 0}h {this.state.taskMinutes ? this.state.taskMinutes : 0}m</span>
              </Col>
              <div id="dotVertical" className="" style={{ cursor: "pointer" }}>
                <i className={`${Icons.dotsVertical} font-size-16`}></i>
              </div>
            </div>

            <div className="bg-white">
              <div className="px-3 py-2 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div id="badge" className="d-flex align-items-center" style={{ backgroundColor: '#eee', width: 85, height: 30, borderRadius: 15 }}>
                    <i className={`${Icons.onboarding} font-size-22 ml-2`}></i>
                    <span>{this.state.task?.stage.name}</span>
                  </div>
                  {/* <span className="ml-2">#001</span> */}
                </div>
                <div className="d-flex align-items-center">
                  <span className="mr-3">Assignees:</span>
                  <PersonQueue />
                </div>
              </div>
              <div id="project" className="px-3 py-2 d-flex">
                <i className={`${Icons.onboardingS} font-size-18 mx-2`} style={{ color: this.state.task?.project.color?.code }}></i>
                <b>{this.state.task?.project.title}</b>
                <span>- {this.state.task?.tasklist.name}</span>
              </div>
              <div id="title" className="px-3 py-2">
                <input className="form-control-sm border font-size-14" type="text" defaultValue={this.state.task?.title} placeholder="Title" style={{ width: '100%' }} onChange={(e) => this.setState({ taskTitle: e.target.value })} />
              </div>
              <div id="description" className="px-3 py-2">
                <textarea className="form-control border font-size-14" style={{ minHeight: 100 }} type="text" defaultValue={this.state.task?.desc} placeholder="Description" onChange={(e) => this.setState({ taskDesc: e.target.value })} />
              </div>

              {
                this.state.subTasks.map((each, index) => {
                  return (
                    <div key={index} className="px-4 py-2 d-flex">
                      <Col className="col-5 d-flex align-items-center">
                        <i className={`${Icons.onboarding} font-size-22 mr-2`}></i>
                        {each.title}
                      </Col>
                      <Col className="col-3">{each.label}</Col>
                      <Col className="col-3">{each.assignees}</Col>
                      <Col className="col-1"><i className={`${Icons.dotsVertical} font-size-18 ml-2`}></i></Col>
                    </div>
                  )
                })
              }

              {
                !this.state.addSubTaskForm &&
                <button type="button" className="btn btn-secondary waves-effect waves-light my-2 mx-4" onClick={() => this.setState({ addSubTaskForm: true })}><i className="bx bx-plus font-size-16 align-middle mr-2"></i> Add subtask</button>
              }
              {
                this.state.addSubTaskForm &&
                <div id="subtask" className="px-4 py-2">
                  <div className="px-3 py-2">
                    <input className="form-control-sm border font-size-14" type="text" defaultValue="" placeholder="Subtask title" style={{ width: '100%' }} onChange={(e) => this.setState({ subTaskTitle: e.target.value })} />
                  </div>
                  <div className="px-3 py-2">
                    <textarea className="form-control border font-size-14" style={{ minHeight: 100 }} type="text" defaultValue="" placeholder="Description" onChange={(e) => this.setState({ subTaskDesc: e.target.value })} />
                  </div>
                  <div id="fourIcons" className="px-3 py-2 d-flex">
                    <i className={`${Icons.taskLabels} font-size-16`} style={{ cursor: "pointer" }}
                      onClick={(e) => this.setState({
                        subTaskLabelBox: !this.state.subTaskLabelBox,
                        subTaskBrowseBox: false,
                        subTaskEndDateBox: false,
                        subTaskAssigneeBox: false,
                        popuBoxPosition: { x: e.clientX, y: e.clientY }
                      })}
                    ></i>
                    <span>{this.state.selectedSubTaskLabels.length > 0 ? this.state.selectedSubTaskLabels.length : ''}</span>

                    <i className={`${Icons.attach} font-size-16 ml-2`} style={{ cursor: "pointer", transform: 'rotate(-45deg)' }} 
                      onClick={(e) => this.setState({ 
                        subTaskBrowseBox: !this.state.subTaskBrowseBox,
                        subTaskLabelBox: false,
                        subTaskEndDateBox: false,
                        subTaskAssigneeBox: false, 
                        popuBoxPosition: { x: e.clientX, y: e.clientY } 
                      })}
                    ></i>

                    <i className={`${Icons.calendar} font-size-16 ml-2`} style={{ cursor: "pointer" }} 
                      onClick={(e) => this.setState({ 
                        subTaskEndDateBox: !this.state.subTaskEndDateBox, 
                        subTaskLabelBox: false,
                        subTaskBrowseBox: false,
                        subTaskAssigneeBox: false,
                        popuBoxPosition: { x: e.clientX, y: e.clientY } 
                      })}
                    ></i>
                    <span>{this.state.subTaskEndDate ? this.state.subTaskEndDate : ''}</span>

                    <i className={`${Icons.person} font-size-16 ml-2`} style={{ cursor: "pointer" }} 
                      onClick={(e) => this.setState({ 
                        subTaskAssigneeBox: !this.state.subTaskAssigneeBox,
                        subTaskLabelBox: false,
                        subTaskBrowseBox: false,
                        subTaskEndDateBox: false, 
                        popuBoxPosition: { x: e.clientX, y: e.clientY } 
                      })}
                    ></i>
                    <span>{this.state.selectedSubTaskAssignees.length > 0 ? this.state.selectedSubTaskAssignees.length : ''}</span>

                  </div>
                  <div id='popupBox' style={{ position: 'fixed', left: this.state.popupBoxPosition?.x, top: this.state.popupBoxPosition?.y }}>
                    {
                      this.state.subTaskLabelBox &&
                      <MultiSelectDropdown options={this.state.labels} onSelect={this.onSelectSubTaskLabel} />
                    }
                    {/* {
                      this.state.subTaskEndDateBox &&
                      <MultiSelectDropdown />
                    } */}
                    {
                      this.state.subTaskAssigneeBox &&
                      <MultiSelectDropdown options={this.state.persons} onSelect={this.onSelectSubTaskAssignee} />
                    }
                  </div>

                  <div className="d-flex justify-content-end px-3 py-2">
                    <Button className="w-10" color="primary" type="submit" onClick={() => this.handleAddSubTask()}>
                      {
                        this.state.addSubTaskForm && this.props.loading &&
                        <i className="bx bx-loader bx-spin font-size-18 align-middle mr-2"></i>
                      }
                      Add
                    </Button>
                    <Button className="w-10 ml-2" color="secondary" type="submit" onClick={() => this.setState({ addSubTaskForm: false })}>Cancel</Button>
                  </div>
                </div>
              }

            </div>
          </Col>

          <Col className="col-4 px-0" style={{ backgroundColor: '#eee' }}>
            <div className="d-flex justify-content-between align-items-center" style={{ height: 40, border: '1px solid #d3d3d4' }}>
              <span className="mx-3"><b>Comments</b></span>
              <i className={`${Icons.closeS} font-size-24 mx-2`} style={{ cursor: "pointer" }} onClick={() => this.props.hideRightBar()}></i>
            </div>

            <div className="d-flex justify-content-center align-items-center" style={{ height: 'calc(100vh - 40px - 220px)' }}>
              <span>No comments</span>
            </div>

            <div className="px-2 py-2">
              <textarea className="form-control border font-size-14" type="text" defaultValue="" placeholder="Write a comment" style={{ minHeight: 100 }} />
              <div className="d-flex py-2">
                <div id="commentLeft" className="d-flex align-items-center">
                  <Button color="primary" type="submit" onClick={() => this.handleAddComment()}>Add</Button>
                  <i className={`${Icons.emoticon} font-size-24 ml-2`} style={{ cursor: "pointer" }} onClick={() => { }}></i>
                  <div id="percent" className="mx-2 d-flex align-items-center" style={{ backgroundColor: '#eee' }}>
                    <i className={`${Icons.attach} font-size-16 ml-2`} style={{ transform: 'rotate(-45deg)', cursor: "pointer" }}></i>
                    <SingleSelectDropdown keyName="browse" options={this.state.browses} bgColor='#eee' />
                  </div>
                </div>
                <div id="commentRight" className="d-flex align-items-center">
                  <Button color="secondary" type="submit" onClick={() => { }}>Cancel</Button>
                  <i className={`${Icons.dotsVertical} font-size-16 mx-2`} style={{ cursor: "pointer" }} onClick={() => { }}></i>
                </div>
              </div>
            </div>

          </Col>

          <div className="d-flex p-3 my-2 w-100" style={{ position: 'absolute', left: 10, bottom: 10 }}>
            <Col className="col-2 px-0">
              <Button color="primary" type="submit" onClick={() => this.handleUpdateTask()} style={{ width: '100%' }}>Update</Button>
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
    rightBarParam: state.RightBar.rightBarParam,
    loading: state.Project.loading,
    error: state.Project.error,
    person: state.Auth.person,
    userPersons: state.Project.userPersons,
    taskProgresses: state.Task.taskProgresses,
    taskLabels: state.Task.taskLabels,
    updateTaskSuccess: state.Task.updateTaskSuccess,
    addedSubTask: state.Task.addedSubTask,
    addSubTaskAssigneesSuccess: state.Task.addSubTaskAssigneesSuccess,
  };
};

export default connect(mapStateToProps, {
  showRightBar,
  hideRightBar,

  getTasklistsTasks,
  getUserPersons,
  getTaskProgresses,
  getTaskLabels,
  updateTask,
  addSubTask,
  addSubTaskAssignees
})(withNamespaces()(DetailTask));
