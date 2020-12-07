import React, { Component } from "react";
import { Row, Col, Button, Form, Card } from "reactstrap";
import { FormGroup } from "reactstrap";

import { Link } from "react-router-dom";

import { withRouter } from "react-router-dom";
import { withNamespaces } from 'react-i18next';

import { connect } from "react-redux";
import {
  showRightBar,
  hideRightBar,
  getAllProjects,
  getAllTasks,
  getTasklists,
  getUserPersons,
  getProjectLabels,

  addTask,
  addTaskAssignees
} from "../../../store/actions";

import { AvForm, AvField } from "availity-reactstrap-validation";
import Dropzone from "react-dropzone";

import "../../../assets/scss/rightbar.scss";
import { Icons } from "../../../constants";

import { Multiselect } from 'multiselect-react-dropdown';
import SingleSelectDropdown from '../SingleSelectDropdown';

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: '',

      allProjects: [],
      selectedProject: null,

      tasklists: [],
      selectedTasklist: null,
      addListForm: false,

      persons: [],
      selectedAssignees: [],

      startDate: '',
      endDate: '',

      projectLabels: [],
      addLabelForm: false,

      isEstimatedTime: false,
      estimatedHours: '',
      estimatedMinutes: '',

      browses: [
        {
          id: 0,
          name: 'Projhub'
        },
        {
          id: 1,
          name: 'Google Drive'
        },
        {
          id: 2,
          name: 'Dropbox'
        },
        {
          id: 3,
          name: 'Box'
        },
        {
          id: 4,
          name: 'OneDrive'
        }
      ],
      selectedFiles: [],

      adding: false
    };
  }

  componentDidMount() {
    this.props.getAllProjects();
    this.props.getUserPersons();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.allProjects != this.props.allProjects) {
      this.setState({
        allProjects: this.props.allProjects
      })
    }

    if (prevProps.tasklists != this.props.tasklists) {
      this.setState({
        tasklists: this.props.tasklists
      })
    }

    if (prevProps.userPersons != this.props.userPersons) {
      var persons = [];
      this.props.userPersons.persons.forEach(each => {
        persons.push({
          id: each.id,
          value: each.name
        });
      })
      this.setState({ persons: persons })
    }

    if (prevProps.projectLabels != this.props.projectLabels) {
      this.setState({
        projectLabels: this.props.projectLabels
      })
    }

    if (prevProps.addedTask != this.props.addedTask) {
      var taskAssignees = [];
      this.state.selectedAssignees.forEach(each => {
        var assignee = {
          task_id: this.props.addedTask.id,
          assignee_id: each.id
        };
        if (this.props.addedTask.id) taskAssignees.push(assignee);
      })

      if (taskAssignees.length > 0) this.props.addTaskAssignees(taskAssignees);
      else {
        this.setState({adding: false});
        this.props.getAllTasks();
        this.props.hideRightBar();
      }
    }

    if (prevProps.addTaskAssigneesSuccess != this.props.addTaskAssigneesSuccess) {
      this.setState({adding: false});
      this.props.getAllTasks();
      this.props.hideRightBar();
    }
  }

  onChangeProject = (project) => {
    this.setState({ selectedProject: project });
    let param = { project_id: project.id }
    this.props.getTasklists(param);
    this.props.getProjectLabels(param);
  }

  onChangeTasklist = (tasklist) => {
    this.setState({ selectedTasklist: tasklist });
  }

  toggleAddListForm = () => {
    this.setState({
      addListForm: !this.state.addListForm
    })
  }

  handleAddList = (event, errors, values) => {

  }

  toggleAddLabelForm = () => {
    this.setState({
      addLabelForm: !this.state.addLabelForm
    })
  }

  handleAddLabel = (event, errors, values) => {

  }


  handleAcceptedFiles = files => {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: this.formatBytes(file.size)
      })
    );

    this.setState({ selectedFiles: files });
  };

  formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  handleAddAll = () => {
    if (!this.state.title) {
      alert('Title is empty');
      return;
    }
    if (!this.state.selectedProject) {
      alert('Project is not selected');
      return;
    }
    if (!this.state.selectedTasklist) {
      alert('Tasklist is not selected');
      return;
    }

    this.setState({ adding: true });

    this.props.addTask(
      {
        title: this.state.title,
        desc: this.state.desc,
        creator_id: this.props.person.id,
        start_date: this.state.startDate,
        end_date: this.state.endDate,
        hours: this.state.estimatedHours,
        minutes: this.state.estimatedMinutes,
        project_id: this.state.selectedProject?.id,
        tasklist_id: this.state.selectedTasklist?.id,
        // stage_id: this.state.selectedTaskStage?.id,
        // repeat_id: this.state.repeat_id,
      }
    );

  }

  render() {
    return (
      <React.Fragment>
        <div className="right-bar w-50">

          <div className="rightbar-title px-3 py-2">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Add task</h5>
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
                <SingleSelectDropdown keyName="project" options={this.state.allProjects} itemIconStyle="checkBox" onChange={this.onChangeProject} />
              </div>

              <div className="my-3">
                Tasklist:
                {
                  !this.state.addListForm &&
                  <>
                    <SingleSelectDropdown keyName="tasklist" options={this.state.tasklists} itemIconStyle="checkBox" onChange={this.onChangeTasklist} />
                    <div className="my-1 text-info" onClick={this.toggleAddListForm} style={{ cursor: "pointer" }}>Add list</div>
                  </>
                }
                {
                  this.state.addListForm &&
                  <AvForm className="needs-validation" onSubmit={this.handleAddList}>
                    <Row>
                      <Col className="col-6">
                        {/* <FormGroup>
                          <AvField
                            name="ListTitle"
                            placeholder="Title"
                            type="text"
                            errorMessage="Enter Title"
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom05"
                          />
                        </FormGroup> */}
                      </Col>
                      <Col className="col-3">
                        <Button color="primary" type="submit" style={{ width: '100%' }}>Add</Button>
                      </Col>
                      <Col className="col-3">
                        <Button color="secondary" onClick={this.toggleAddListForm} style={{ width: '100%' }}>Cancel</Button>
                      </Col>
                    </Row>
                  </AvForm>
                }
              </div>


              <div className="my-3">
                Title:
                <input className="form-control border font-size-14" style={{ height: 30 }} type="text" defaultValue="" placeholder="" onChange={(e) => this.setState({ title: e.target.value })} />
              </div>

              <div className="my-3">
                Description:
                <textarea className="form-control border font-size-14" style={{ minHeight: 100 }} type="text" defaultValue="" placeholder="" onChange={(e) => this.setState({ desc: e.target.value })} />
              </div>

              <div className="my-3 d-flex">
                <Row>
                  <Col className="col-6">
                    Start:
                    <input className="form-control border font-size-14" style={{ height: 30 }} type="date" defaultValue="" placeholder="" onChange={(e) => this.setState({ startDate: e.target.value })} />
                  </Col>
                  <Col className="col-6">
                    End:
                    <input className="form-control border font-size-14" style={{ height: 30 }} type="date" defaultValue="" placeholder="" onChange={(e) => this.setState({ endDate: e.target.value })} />
                  </Col>
                </Row>
              </div>

              <div className="my-3">
                Assignees:
                <Multiselect
                  options={this.state.persons}
                  selectedValues={this.state.selectedAssignees}
                  onSelect={(selectedList, selectedItem) => this.setState({ selectedAssignees: selectedList })}
                  onRemove={(selectedList, removedItem) => this.setState({ selectedAssignees: selectedList })}
                  displayValue="value"
                  avoidHighlightFirstOption
                  showCheckbox
                />
              </div>

              <div className="my-3">
                Labels:
                {
                  !this.state.addLabelForm &&
                  <div className="d-flex">
                    <Col className="col-6 p-0">
                      <SingleSelectDropdown keyName="label" options={this.state.projectLabels} itemIconStyle="checkBox" />
                    </Col>
                    <div className="my-1 mx-3 text-info" onClick={this.toggleAddLabelForm} style={{ cursor: "pointer" }}>Add label</div>
                  </div>
                }
                {
                  this.state.addLabelForm &&
                  <AvForm className="needs-validation" onSubmit={this.handleAddLabel}>
                    <Row>
                      <Col className="col-6">
                        {/* <FormGroup>
                          <AvField
                            name="labelTitle"
                            placeholder="Title"
                            type="text"
                            errorMessage="Enter Title"
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom05"
                          />
                        </FormGroup> */}
                      </Col>
                      <Col className="col-3">
                        <Button color="primary" type="submit" style={{ width: '100%' }}>Add</Button>
                      </Col>
                      <Col className="col-3">
                        <Button color="secondary" onClick={this.toggleAddLabelForm} style={{ width: '100%' }}>Cancel</Button>
                      </Col>
                    </Row>
                  </AvForm>
                }
              </div>

            </Col>

            <Col className="col-5">
              <div className="my-3">
                <div className="form-check mx-2 my-2">
                  <input className="form-check-input" type="checkbox" value="" id="estimatedTime" onChange={(e) => this.setState({ isEstimatedTime: e.target.checked })} />
                  <label className="form-check-label" htmlFor="estimatedTime">Estimated time</label>
                </div>
              </div>
              {
                this.state.isEstimatedTime &&
                <AvForm className="needs-validation" onSubmit={() => { }}>
                  <Row>
                    <Col className="col-6">
                      <AvField
                        name="estimatedHours"
                        placeholder="Hours"
                        type="number"
                        errorMessage="Enter Hours"
                        // className="form-control"
                        // validate={{ required: { value: true } }}
                        id="validationCustom01"
                        onChange={(e) => this.setState({ estimatedHours: e.target.value })}
                      />
                    </Col>
                    <Col className="col-6">
                      <AvField
                        name="estimatedMinutes"
                        placeholder="Minutes"
                        type="number"
                        errorMessage="Enter Minutes"
                        // className="form-control"
                        // validate={{ required: { value: true } }}
                        id="validationCustom02"
                        onChange={(e) => this.setState({ estimatedMinutes: e.target.value })}
                      />
                    </Col>
                  </Row>
                </AvForm>
              }

              <div className="my-3 w-50">
                Browse files:
                <SingleSelectDropdown keyName="browse" options={this.state.browses} itemIconStyle="checkBox" />
              </div>
              {/* <div className="my-1">
                <Form>
                  <Dropzone
                    onDrop={acceptedFiles =>
                      this.handleAcceptedFiles(acceptedFiles)
                    }
                  >
                    {({ getRootProps, getInputProps }) => (
                      <div className="dropzone">
                        <div
                          className="dz-message needsclick mt-2"
                          {...getRootProps()}
                        >
                          <input {...getInputProps()} />
                          <div className="mb-3">
                            <i className="display-4 text-muted bx bxs-cloud-upload"></i>
                          </div>
                          <h4>Drop files here or click to upload.</h4>
                        </div>
                      </div>
                    )}
                  </Dropzone>
                  <div
                    className="dropzone-previews mt-3"
                    id="file-previews"
                  >
                    {this.state.selectedFiles.map((f, i) => {
                      return (
                        <Card
                          className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                          key={i + "-file"}
                        >
                          <div className="p-2">
                            <Row className="align-items-center">
                              <Col className="col-auto">
                                <img
                                  data-dz-thumbnail=""
                                  height="80"
                                  className="avatar-sm rounded bg-light"
                                  alt={f.name}
                                  src={f.preview}
                                />
                              </Col>
                              <Col>
                                <Link
                                  to="#"
                                  className="text-muted font-weight-bold"
                                >
                                  {f.name}
                                </Link>
                                <p className="mb-0">
                                  <strong>{f.formattedSize}</strong>
                                </p>
                              </Col>
                            </Row>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </Form>

              </div> */}


            </Col>
          </div>

          <div className="d-flex p-3 my-2 w-100" style={{ position: 'absolute', left: 10, bottom: 10 }}>
            <Col className="col-2 px-0">
              <Button color="primary" type="submit" onClick={() => this.handleAddAll()} style={{ width: '100%' }}>
                {
                  this.state.adding && <i className="bx bx-loader bx-spin font-size-18 align-middle mr-2"></i>
                }
                Add
              </Button>
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
    allProjects: state.Project.allProjects,
    tasklists: state.Project.tasklists,
    userPersons: state.Project.userPersons,
    projectLabels: state.Project.projectLabels,

    addedTask: state.Task.addedTask,
    addTaskAssigneesSuccess: state.Task.addTaskAssigneesSuccess,
  };
};

export default connect(mapStateToProps, {
  showRightBar,
  hideRightBar,

  getAllProjects,
  getAllTasks,
  getTasklists,
  getUserPersons,
  getProjectLabels,

  addTask,
  addTaskAssignees
})(withNamespaces()(AddTask));
