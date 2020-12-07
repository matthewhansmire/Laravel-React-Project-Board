import React, { Component } from 'react';
import { Row, Col, Container, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Button, Progress, Badge } from 'reactstrap';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { withRouter } from "react-router-dom";
import { withNamespaces } from 'react-i18next';
import { connect } from "react-redux";
import {
  showRightBar,
  hideRightBar,
  setRightBarParam,

  getTasklistsTasks,
} from "../../../store/actions";

import { Icons } from '../../../constants';
import { calculateDaysBetweenDates, getInitial } from '../../../utils';

import PersonQueue from '../../../components/App/PersonQueue';
import SingleSelectDropdown from '../../../components/App/SingleSelectDropdown';
import TagItem from '../../../components/App/TagItem';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addPopup: false,
      page: 'active',
      viewMode: 'board',
      tagItems: [
        {
          id: 0,
          label: 'Stages',
          icon: Icons.tasks,
          value: 'All'
        },
        {
          id: 1,
          label: 'Tasks',
          icon: Icons.task,
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
          value: 'Due anytime'
        },
        {
          id: 4,
          label: 'Labels',
          icon: Icons.taskLabels,
          value: 'All'
        }
      ],

      statusOptions: [
        {
          id: 0,
          name: 'Active'
        },
        {
          id: 1,
          name: 'Archived'
        }
      ],
      selectedStatus: {},

      tasklistsTasks: [],
      activeTasklistTasks: null,
    }
  }

  componentDidMount() {
    var param = { project_id: this.props.match.params.id };
    if (param) {
      this.props.getTasklistsTasks(param);      
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.tasklistsTasks != this.props.tasklistsTasks) {
      this.setState({
        tasklistsTasks: this.props.tasklistsTasks,
        activeTasklistTasks: this.props.tasklistsTasks[0]
      })      
    }
  }

  toggleAddPopup = () => {
    this.setState({
      addPopup: !this.state.addPopup
    })
  }

  onViewMode = () => {
    var viewMode = '';
    if (this.state.viewMode === 'list') viewMode = 'board';
    else viewMode = 'list';
    this.setState({ viewMode: viewMode });
  }

  onAddTask = () => {

  }

  onItem = (task) => {
    this.props.showRightBar('detailTask');

    var param = {
      task: task
    };
    this.props.setRightBarParam(param);
  }

  getDoneTasksCount = (tasks) => {
    return 1;
  }

  getTotalTasksCount = (tasks) => {
    return tasks.length;
  }

  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Row>
            <Col id="leftPanel" className="col-2 border">
              <CardHeader className="px-0 py-3 font-size-16 d-flex align-items-center justify-content-between" id="headingLeft">
                <Dropdown
                  isOpen={this.state.addPopup}
                  toggle={this.toggleAddPopup}
                  className="d-flex align-items-center"
                >
                  <DropdownToggle className="bg-dark border-0 align-self-center" style={{ width: '100%' }} caret>
                    <i className="bx bx-plus font-size-16 align-middle mr-2"></i> Add
                    </DropdownToggle>
                  <DropdownMenu left="true">
                    <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={() => this.props.showRightBar('tasklist')}>
                      <i className={`${Icons.listView} font-size-24 mr-2`}></i>
                      {this.props.t('List')}
                    </DropdownItem>
                    <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={() => this.props.showRightBar('task')}>
                      <i className={`${Icons.task} font-size-24 mr-2`}></i>
                      {this.props.t('Task')}
                    </DropdownItem>
                    <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={() => this.props.showRightBar('taskImport')}>
                      <i className={`${Icons.importExport} font-size-24 mr-2`}></i>
                      {this.props.t('Import CSV')}
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <i className={`${Icons.filterAlt} font-size-20 align-middle`} style={{ cursor: "pointer" }} onClick={() => { }}></i>
              </CardHeader>

              <CardTitle>
                <div id="page" className="d-flex align-items-center" style={{ backgroundColor: '#eee', width: 'fit-content' }}>
                  <i className={`${Icons.projects} font-size-16 ml-2`} style={{ cursor: "pointer" }}></i>
                  <SingleSelectDropdown keyName="page" options={this.state.statusOptions} selectedOption={this.state.statusOptions[0]} bgColor='#eee' left />
                </div>

                {
                  this.state.tasklistsTasks.map((each, index) => (
                    <div key={index}>
                      <div className="pt-3">
                        <span className={`font-size-14 ${this.state.activeTasklistTasks?.id == each.id ? 'text-info' : null}`} onClick={() => this.setState({ activeTasklist: each })} style={{ cursor: "pointer" }}>{each.name}</span>
                        <br />
                        <div className="d-flex align-items-center justify-content-between">
                          <Col className="col-3 px-0">
                            <Progress className="border border-secondary" color="secondary" value={this.getDoneTasksCount(each.tasks) / this.getTotalTasksCount(each.tasks) * 100}></Progress>
                          </Col>
                          <Col className="col-3 px-0">
                            <span className="ml-1 text-secondary font-size-10">{this.getDoneTasksCount(each.tasks)}/{this.getTotalTasksCount(each.tasks)} Task</span>
                          </Col>
                          <Col className="col-6 px-0 d-flex justify-content-end">
                            {each.markAsPrivate && <i className={`${Icons.private} font-size-16 ml-2`}></i>}
                            {each.displayInGantt && <i className={`${Icons.gantt} font-size-16 ml-2`}></i>}
                            {each.enableTimeTracking && <i className={`${Icons.timeFive} font-size-16 ml-2`}></i>}
                            {each.associateMilestone && <i className={`${Icons.milestone} font-size-16 ml-2`}></i>}
                          </Col>
                        </div>
                      </div>
                      <hr className="my-2" />
                    </div>
                  ))
                }
              </CardTitle>
            </Col>

            <Col id="rightPanel" className="col-10 border">
              <CardHeader className="px-0 py-3 font-size-16 d-flex align-items-center justify-content-between" id="headingRight">
                <Button color="secondary" type="submit" className="btn-sm d-flex align-items-center" onClick={() => this.onViewMode()}><i className={`${this.state.viewMode === 'list' ? Icons.boardView : Icons.listView} font-size-24 mr-2`}></i>{this.state.viewMode === 'list' ? 'Board View' : 'List View'}</Button>

                <div className="d-flex align-items-center">
                  {
                    this.state.tagItems.map((each) => (
                      <TagItem key={each.id} item={each} />
                    ))
                  }
                  <PersonQueue prefix='global' />
                  <i className={`${Icons.dotsVertical} font-size-16`} style={{ cursor: "pointer" }}></i>
                </div>
              </CardHeader>

              {
                this.state.viewMode === 'board' &&
                <CardBody className="px-0">
                  <div className="d-flex">
                    {
                      this.state.activeTasklistTasks?.workflow.stages.map((eachStage, index) => {
                        return (
                          <Col key={index} className="col-4">
                            <div className="d-flex justify-content-between align-items-center">
                              <span>{eachStage.name}</span>
                              <PersonQueue prefix='backlog' />
                            </div>
                            {
                              index == 0 &&
                              <Button color="" type="submit" className="btn-sm bg-white border border-10 d-flex align-items-center justify-content-center w-100 my-2" onClick={() => this.onAddTask()}><i className={`${Icons.plus} font-size-24 mr-2`}></i>Add task</Button>
                            }
                            {
                              this.state.activeTasklistTasks.tasks.map((eachTask, index) => {
                                if (eachTask.stage?.name == eachStage.name) {
                                  return (
                                    <div key={index} className="mt-2 p-3 border bg-white" onClick={() => this.onItem(eachTask)} style={{ cursor: "pointer" }}>
                                      <div>
                                        <span><b>{eachTask.title}</b></span>
                                      </div>
                                      {
                                        eachTask.subtasks?.length > 0 &&
                                        <div className="mt-2">
                                          <span className="bg-warning rounded">6 hrs</span>
                                        </div>
                                      }
                                      <div className="w-100 d-flex justify-content-between align-items-center mt-2">
                                        <span>{eachTask.end_date}</span>
                                        <PersonQueue prefix={`task_${index}`} />
                                      </div>
                                    </div>
                                  )
                                }
                              })
                            }

                          </Col>
                        )
                      })
                    }
                  </div>
                </CardBody>
              }
              {
                this.state.viewMode === 'list' &&
                <CardBody className="bg-white">
                  <Row className="font-weight-bold py-3">
                    <Col className="col-5">Title</Col>
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
                    this.state.activeTasklistTasks?.workflow.stages.map((eachStage, index) => {
                      return (
                        <div key={index}>
                          <div className="font-weight-bold">
                            <span>{eachStage.name}</span>
                          </div>
                          {
                            this.state.activeTasklistTasks.tasks.map((eachTask, index) => {
                              if (eachTask.stage?.name == eachStage.name) {
                                return (
                                  <div key={index}>
                                    <Row className="d-flex align-items-center" onClick={() => this.onItem(eachTask)} style={{ cursor: "pointer" }}>
                                      <Col className="col-5">{eachTask.title}</Col>
                                      <Col className="col-1">{eachTask.start_date} {'->'} {eachTask.end_date}</Col>
                                      <Col className="col-1">
                                        <Badge key={index} className="ml-2 font-size-12" style={{ backgroundColor: eachTask.stage?.code, borderRadius: 10 }}>{eachTask.stage?.name}</Badge>
                                      </Col>
                                      <Col className="col-1 d-flex">
                                        {
                                          eachTask.assignees.map((each, index) => {
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
                                      <Col className="col-1">{eachTask.progress.name}</Col>
                                      <Col className="col-1 d-flex-nowrap">
                                        {
                                          eachTask.labels?.map((each, index) =>
                                            <Badge key={index} className="ml-2" style={{ backgroundColor: eachTask.code }}>{eachTask.name}</Badge>
                                          )
                                        }
                                      </Col>
                                      <Col className="col-1">{eachTask.hours} {eachTask.hours ? 'h' : ''} {eachTask.minutes} {eachTask.minutes ? 'm' : ''}</Col>
                                      {/* <Col className="col-1">Logged time</Col>
                                        <Col className="col-1">Created on</Col>
                                        <Col className="col-1">Created by</Col>
                                        <Col className="col-1">Completed on</Col>
                                        <Col className="col-1">Completed by</Col> */}
                                    </Row>
                                    <hr className="my-2"></hr>
                                  </div>
                                )
                              }
                            })
                          }
                        </div>
                      )
                    })
                  }
                </CardBody>
              }
            </Col>
          </Row>

        </Container>

      </React.Fragment >
    );
  }
}

const mapStateToProps = state => {
  return {
    tasklistsTasks: state.Task.tasklistsTasks,
  };
};

export default connect(mapStateToProps, {
  showRightBar,
  hideRightBar,
  setRightBarParam,

  getTasklistsTasks,
})(withRouter(withNamespaces()(Tasks)));