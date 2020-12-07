import React, { Component } from "react";
import { FormGroup } from "reactstrap";
import { Row, Col, Button } from "reactstrap";

import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import { connect } from "react-redux";
import {
  showRightBar,
  hideRightBar,

  getAllProjects,
  getProjectCategories,
  getProjectStatuses,
  getUserPersons,
  getProjectColors,
  getProjectAccessRoles,

  addProject,
  addProjectCategory,
  addProjectStatus,
  addProjectAssignees,
  invitePerson

} from "../../../store/actions";

import { AvForm, AvField } from "availity-reactstrap-validation";

import "../../../assets/scss/rightbar.scss";
import { Icons } from "../../../constants";
import { showToastr } from '../../../utils';

import { Multiselect } from 'multiselect-react-dropdown';
import SingleSelectDropdown from '../SingleSelectDropdown';
import ColorPicker from '../ColorPicker';

class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      useTemplate: false,
      templates: this.props.rightBarParam.templates ? this.props.rightBarParam.templates : [],
      selectedTemplate: {},

      title: '',
      desc: '',

      persons: [],
      selectedAssignees: [],

      addPersonForm: false,
      accessRoles: [],

      addCategoryForm: false,
      projectCategories: [],
      selectedCategory: {},

      startDate: '',
      endDate: '',

      colors: [],
      selectedColor: {},

      addStatusForm: false,
      projectStatuses: [],
      selectedStatus: {},

      selectedManager: {},
      adding: false,

    };
  }

  componentDidMount() {
    this.props.getUserPersons();
    this.props.getProjectCategories();
    this.props.getProjectStatuses();
    this.props.getProjectColors();
    this.props.getProjectAccessRoles();
  }

  componentDidUpdate(prevProps, prevState) {
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

    if (prevProps.projectCategories != this.props.projectCategories) {
      this.setState({
        projectCategories: this.props.projectCategories
      })
    }

    if (prevProps.projectStatuses != this.props.projectStatuses) {
      this.setState({
        projectStatuses: this.props.projectStatuses
      })
    }

    if (prevProps.colors != this.props.colors) {
      this.setState({ colors: this.props.colors })
    }

    if (prevProps.accessRoles != this.props.accessRoles) {
      this.setState({ accessRoles: this.props.accessRoles });
    }

    if (prevProps.addedProject != this.props.addedProject) {
      var projectAssignees = [];
      this.state.selectedAssignees.forEach(each => {
        var assignee = {
          assignee_id: each.id,
          project_id: this.props.addedProject.id
        };
        if (this.props.addedProject.id) projectAssignees.push(assignee);
      })

      if (projectAssignees.length > 0) this.props.addProjectAssignees(projectAssignees);
      else {
        this.setState({ adding: false });
        this.props.getAllProjects();
        this.props.hideRightBar();
      }
    }

    if (prevProps.addProjectCategorySuccess != this.props.addProjectCategorySuccess) {
      var toastr = {
        type: 'success',
        title: 'Success!',
        message: 'Project category is added.'
      }
      showToastr(toastr);

      this.setState({ addCategoryForm: false });
      this.props.getProjectCategories();
    }

    if (prevProps.addProjectStatusSuccess != this.props.addProjectStatusSuccess) {
      var toastr = {
        type: 'success',
        title: 'Success!',
        message: 'Project status is added.'
      }
      showToastr(toastr);

      this.setState({ addStatusForm: false });
      this.props.getProjectStatuses();
    }

    if (prevProps.addProjectAssigneesSuccess != this.props.addProjectAssigneesSuccess) {

      this.props.getAllProjects();
      this.props.hideRightBar();
    }

    if (prevProps.invitePersonSuccess != this.props.invitePersonSuccess) {
      var toastr = {
        type: 'success',
        title: 'Success!',
        message: 'Email has been sent.'
      }
      showToastr(toastr);

      this.setState({
        addPersonForm: false
      })
    }

    if (prevProps.error != this.props.error) {
      var toastr = {
        type: 'error',
        title: 'Error!',
        message: this.props.error
      }
      showToastr(toastr);
    }

  }

  toggleAddPersonForm = () => {
    this.setState({
      addPersonForm: !this.state.addPersonForm
    })
  }

  handleAddPerson = (event, errors, values) => {
    if (values.firstname && values.lastname) {
      if (this.state.persons.findIndex(each => each.email === values.email) == -1) {
        this.props.invitePerson(
          {
            from: this.props.person.email,
            sender: this.props.person.name,
            to: values.email,
            receiver: values.firstname + values.lastname,
            password: '123456',
            user_id: this.props.person.user?.id,
            role_id: values.accessRoleId
          }
        );
      }
    }
  }

  toggleAddCategoryForm = () => {
    this.setState({
      addCategoryForm: !this.state.addCategoryForm
    })
  }

  handleAddCategory = (event, errors, values) => {
    if (values.categoryTitle) {
      //save category when no exist
      if (this.state.projectCategories.findIndex(each => each.name === values.categoryTitle) == -1) {
        this.props.addProjectCategory(
          {
            name: values.categoryTitle,
            user_id: this.props.person.user.id
          }
        );
      }
      else {
        var toastr = {
          type: 'error',
          title: 'Error!',
          message: 'Category is already existed.'
        }
        showToastr(toastr);
      }
    }
  }

  toggleAddStatusForm = () => {
    this.setState({
      addStatusForm: !this.state.addStatusForm
    })
  }

  handleAddStatus = (event, errors, values) => {
    if (values.statusTitle) {
      //save status
      if (this.state.projectStatuses.findIndex(each => each.name === values.statusTitle) == -1) {
        this.props.addProjectStatus(
          {
            name: values.statusTitle,
            user_id: this.props.person.user.id
          }
        );
      }
      else {
        var toastr = {
          type: 'error',
          title: 'Error!',
          message: 'Status is already existed.'
        }
        showToastr(toastr);
      }
    }
  }

  onChangeUseTemplate = (e) => {
    this.setState({ useTemplate: e.target.checked })    
  }

  onChangeTemplate = (template) => {
    this.setState({ selectedTemplate: template})
  }

  onChangeCategory = (category) => {
    this.setState({ selectedCategory: category })
  }

  onChangeStatus = (status) => {
    this.setState({ selectedStatus: status })
  }

  onChangeManager = (manager) => {
    this.setState({ selectedManager: manager })
  }

  handleAddAll = () => {
    if (!this.state.title) {
      alert('Title is empty');
      return;
    }

    this.setState({ adding: true });

    this.props.addProject(
      {
        title: this.state.title,
        desc: this.state.desc,
        creator_id: this.props.person.id,
        manager_id: this.state.selectedManager?.id,
        start_date: this.state.startDate,
        end_date: this.state.endDate,
        category_id: this.state.selectedCategory?.id,
        status_id: this.state.selectedStatus?.id,
        color_id: this.state.selectedColor?.id,
        is_template: this.props.rightBarParam.type === 'template'
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <div className="right-bar w-50">
          <div className="rightbar-title px-3 py-2">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Add {this.props.rightBarParam.type}</h5>
              <div>
                <i className={`${Icons.helpS} font-size-22`} style={{ cursor: "pointer" }}></i>
                <i className={`${Icons.closeS} font-size-24 ml-2`} style={{ cursor: "pointer" }} onClick={() => this.props.hideRightBar()}></i>
              </div>
            </div>
          </div>

          <div className="d-flex p-3">
            <Col className="col-7">
              {
                this.props.rightBarParam.type === 'project' &&
                <div className="form-check mb-2 d-flex align-items-center">
                  <input className="form-check-input" type="checkbox" value="" id="useTemplate" onChange={(e) => this.onChangeUseTemplate(e)} />
                  <label className="form-check-label" htmlFor="useTemplate">Use template</label>
                </div>
              }
              {
                this.state.useTemplate &&
                <div className="my-3">
                  Template:
                  <SingleSelectDropdown keyName="category" options={this.state.templates} itemIconStyle="checkBox" onChange={this.onChangeTemplate} />
                </div>
              }

              <div className="my-3">
                Title:
                <input className="form-control border font-size-14" style={{ height: 30 }} type="text" defaultValue={this.state.selectedTemplate?.title} placeholder="" onChange={(e) => this.setState({ title: e.target.value })} />
              </div>

              <div className="my-3">
                Description:
                <textarea className="form-control border font-size-14" style={{ minHeight: 100 }} type="text" defaultValue={this.state.selectedTemplate?.desc} placeholder="" onChange={(e) => this.setState({ desc: e.target.value })} />
              </div>

              <div className="my-3">
                Assignees:
                {
                  !this.state.addPersonForm &&
                  <>
                    <Multiselect
                      options={this.state.persons}
                      selectedValues={this.state.selectedAssignees}
                      onSelect={(selectedList, selectedItem) => this.setState({ selectedAssignees: selectedList })}
                      onRemove={(selectedList, removedItem) => this.setState({ selectedAssignees: selectedList })}
                      displayValue="value"
                      avoidHighlightFirstOption
                      showCheckbox
                    />
                    <div className="my-1 text-info" onClick={this.toggleAddPersonForm} style={{ cursor: "pointer" }}>Add person</div>
                  </>
                }
                {
                  this.state.addPersonForm &&
                  <AvForm className="needs-validation" onSubmit={this.handleAddPerson}>
                    <Row>
                      <Col className="col-6">
                        <FormGroup>
                          <AvField
                            name="firstname"
                            placeholder="First name"
                            type="text"
                            errorMessage="Enter First Name"
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom01"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="col-6">
                        <FormGroup>
                          <AvField
                            name="lastname"
                            placeholder="Last name"
                            type="text"
                            errorMessage="Enter Last name"
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom02"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-6">
                        <FormGroup>
                          <AvField
                            name="email"
                            placeholder="Email"
                            type="email"
                            errorMessage="Enter Email Address"
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom03"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="col-6">
                        <FormGroup>
                          <AvField
                            name="accessRoleId"
                            placeholder="Access Role"
                            type="select"
                            errorMessage="Select Role"
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom04"
                            defaultValue={this.state.accessRoles[0]?.id}
                          >
                            {
                              this.state.accessRoles.map((each, index) => (
                                <option key={index} value={each.id}>{each.name}</option>
                              ))
                            }
                          </AvField>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-3">
                        <Button color="primary" type="submit" style={{ width: '100%' }}>
                          {
                            this.state.addPersonForm && this.props.loading &&
                            <i className="bx bx-loader bx-spin font-size-18 align-middle mr-2"></i>
                          }
                          Add
                        </Button>
                      </Col>
                      <Col className="col-3">
                        <Button color="secondary" onClick={this.toggleAddPersonForm} style={{ width: '100%' }}>Cancel</Button>
                      </Col>
                    </Row>
                  </AvForm>
                }
              </div>

              <div className="my-3">
                <Row>
                  <Col className="col-6">
                    Start:
                    <input className="form-control border font-size-14" style={{ height: 30 }} type="date" defaultValue={this.state.selectedTemplate.start_date} placeholder="" onChange={(e) => this.setState({ startDate: e.target.value })} />
                  </Col>
                  <Col className="col-6">
                    End:
                    <input className="form-control border font-size-14" style={{ height: 30 }} type="date" defaultValue={this.state.selectedTemplate.end_date} placeholder="" onChange={(e) => this.setState({ endDate: e.target.value })} />
                  </Col>
                </Row>
              </div>

              {
                this.props.rightBarParam.type === 'project' &&
                <div className="my-3">
                  Category:
                  {
                    !this.state.addCategoryForm &&
                    <div className="d-flex">
                      <Col className="col-6 p-0">
                        <SingleSelectDropdown keyName="category" options={this.props.projectCategories} itemIconStyle="checkBox" onChange={this.onChangeCategory} />
                      </Col>
                      <div className="my-1 mx-3 text-info" onClick={this.toggleAddCategoryForm} style={{ cursor: "pointer" }}>Add category</div>
                    </div>
                  }
                  {
                    this.state.addCategoryForm &&
                    <AvForm className="needs-validation" onSubmit={this.handleAddCategory}>
                      <Row>
                        <Col className="col-6">
                          <FormGroup>
                            <AvField
                              name="categoryTitle"
                              placeholder="Title"
                              type="text"
                              errorMessage="Enter Title"
                              className="form-control"
                              validate={{ required: { value: true } }}
                              id="validationCustom05"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="col-3">
                          <Button color="primary" type="submit" style={{ width: '100%' }}>
                            {
                              this.props.loading && <i className="bx bx-loader bx-spin font-size-18 align-middle mr-2"></i>
                            }
                          Add
                        </Button>
                        </Col>
                        <Col className="col-3">
                          <Button color="secondary" onClick={this.toggleAddCategoryForm} style={{ width: '100%' }}>Cancel</Button>
                        </Col>
                      </Row>
                    </AvForm>
                  }
                </div>
              }

              <div className="my-3">
                Color:
                <ColorPicker colors={this.state.colors} selectedColor={this.state.colors.find(each=>each.id == this.state.selectedTemplate.color_id)} setColor={(color) => { this.setState({ selectedColor: color }) }} />
              </div>
            </Col>

            <Col className="col-5">
              {
                this.props.rightBarParam.type === 'project' &&
                <div className="my-3">
                  Status:
                  {
                    !this.state.addStatusForm &&
                    <Col className="col-12 pl-0">
                      <SingleSelectDropdown keyName="status" options={this.props.projectStatuses} itemIconStyle="checkBox" onChange={this.onChangeStatus} />
                      <div className="my-1 text-info" onClick={this.toggleAddStatusForm} style={{ cursor: "pointer" }}>Add Status</div>
                    </Col>
                  }
                  {
                    this.state.addStatusForm &&
                    <AvForm className="needs-validation" onSubmit={this.handleAddStatus}>
                      <Row>
                        <Col className="col-6">
                          <FormGroup>
                            <AvField
                              name="statusTitle"
                              placeholder="Title"
                              type="text"
                              errorMessage="Enter Title"
                              className="form-control"
                              validate={{ required: { value: true } }}
                              id="validationCustom06"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="col-3">
                          <Button color="primary" type="submit" style={{ width: '100%' }}>
                            {
                              this.props.loading && <i className="bx bx-loader bx-spin font-size-18 align-middle mr-2"></i>
                            }
                          Add
                        </Button>
                        </Col>
                        <Col className="col-3">
                          <Button color="secondary" onClick={this.toggleAddStatusForm} style={{ width: '100%' }}>Cancel</Button>
                        </Col>
                      </Row>
                    </AvForm>
                  }
                </div>
              }

              <div className="my-3">
                <div className="d-flex justify-content-between">
                  <span>Project manager:</span>
                  <span className="text-info" style={{ cursor: "pointer" }} onClick={() => this.setState({ selectedManager: {} })}>Clear</span>
                </div>
                <SingleSelectDropdown keyName="manager" options={this.state.selectedAssignees} selectedOption={this.state.selectedManager} itemIconStyle="checkBox" onChange={this.onChangeManager} />
              </div>

              <div className="my-3">
                <div className="d-flex justify-content-between align-items-center">
                  Project tabs:
                  <i className={`${Icons.help} font-size-16`} style={{ cursor: "pointer" }}></i>
                </div>

                <div className="form-check mx-2 my-2">
                  <input className="form-check-input" type="checkbox" value="" id="checkDiscussion" />
                  <label className="form-check-label" htmlFor="checkDiscussion">Discussions</label>
                </div>
                <div className="form-check mx-2 my-2">
                  <input className="form-check-input" type="checkbox" value="" id="checkTasks" />
                  <label className="form-check-label" htmlFor="checkTasks">Tasks</label>
                </div>
                <div className="form-check mx-2 my-2">
                  <input className="form-check-input" type="checkbox" value="" id="checkGantt" />
                  <label className="form-check-label" htmlFor="checkGantt">Gantt</label>
                </div>
                <div className="form-check mx-2 my-2">
                  <input className="form-check-input" type="checkbox" value="" id="checkCalendar" />
                  <label className="form-check-label" htmlFor="checkCalendar">Calendar</label>
                </div>
                <div className="form-check mx-2 my-2">
                  <input className="form-check-input" type="checkbox" value="" id="checkNotes" />
                  <label className="form-check-label" htmlFor="checkNotes">Notes</label>
                </div>
                <div className="form-check mx-2 my-2">
                  <input className="form-check-input" type="checkbox" value="" id="checkFiles" />
                  <label className="form-check-label" htmlFor="checkFiles">Files</label>
                </div>
                <div className="form-check mx-2 my-2">
                  <input className="form-check-input" type="checkbox" value="" id="checkTime" />
                  <label className="form-check-label" htmlFor="checkTime">Time</label>
                </div>
              </div>

              <div className="my-3">
                <i>Unchecking the project tabs will not remove the existing data.</i>
              </div>

              {/* <div className="my-3">
                <a className="">Manage apps</a>
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
    rightBarParam: state.RightBar.rightBarParam,
    loading: state.Project.loading,
    error: state.Project.error,
    person: state.Auth.person,
    userPersons: state.Project.userPersons,
    projectCategories: state.Project.projectCategories,
    projectStatuses: state.Project.projectStatuses,
    colors: state.Project.colors,
    accessRoles: state.Project.accessRoles,

    addedProject: state.Project.addedProject,
    addProjectCategorySuccess: state.Project.addProjectCategorySuccess,
    addProjectCategoryError: state.Project.addProjectCategoryError,
    addProjectStatusSuccess: state.Project.addProjectStatusSuccess,
    addProjectStatusError: state.Project.addProjectStatusError,
    addProjectAssigneesSuccess: state.Project.addProjectAssigneesSuccess,
    addProjectAssigneesError: state.Project.addProjectAssigneesError,
    invitePersonSuccess: state.Project.invitePersonSuccess,
    invitePersonError: state.Project.invitePersonError,
  };
};

export default connect(mapStateToProps, {
  showRightBar,
  hideRightBar,
  getAllProjects,
  getProjectCategories,
  getProjectStatuses,
  getUserPersons,
  getProjectColors,
  getProjectAccessRoles,

  addProject,
  addProjectCategory,
  addProjectStatus,
  addProjectAssignees,
  invitePerson
})(withNamespaces()(AddProject));
