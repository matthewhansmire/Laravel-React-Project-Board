import React, { Component } from "react";
import { FormGroup } from "reactstrap";
import { Row, Col, Button } from "reactstrap";

import { withRouter } from "react-router-dom";
import { withNamespaces } from 'react-i18next';

import { connect } from "react-redux";
import {
  showRightBar,
  hideRightBar
} from "../../../store/actions";

import { AvForm, AvField } from "availity-reactstrap-validation";

import "../../../assets/scss/rightbar.scss";
import { Icons } from "../../../constants";

import { Multiselect } from 'multiselect-react-dropdown';
import SingleSelectDropdown from '../SingleSelectDropdown';

class AddPeoplePerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: [
        "Admin",
        "User",
      ],
      addRoleForm: false,

      groups: [
        { id: 1, value: "Group1" },
        { id: 2, value: "Group2" },
      ],
      selectedGroups: [],
      addGroupForm: false,

      projects: [
        { id: 1, value: "Project 1" },
        { id: 2, value: "Project 2" },
      ],
      selectedProjects: [],

      customWelcomeMessageForm: false,
      defaultWelcomeMessage: 'Welcome aboard! I\'ve just added you to ProofHub. We can now plan work, discuss ideas, organize documents, take notes, deliver projects, make announcements, stay on top of our schedule, and get more done in less time.',
      customWelcomeMessage: 'Welcome aboard! I\'ve just added you to ProofHub. We can now plan work, discuss ideas, organize documents, take notes, deliver projects, make announcements, stay on top of our schedule, and get more done in less time.',
      saveCustomMessage: false,

      passwords: [
        "Let the person set password",
        "Set password"
      ],

      languages: [
        "English",
        "French",
        "German",
        "Italian",
        "Polish",
        "Portuguese",
        "Russian",
        "Spanish"
      ],

      timezones: [
        "(GMT-05:00) Eastern Time (US & Canada)",
        "(GMT-09:00) Alaska (US & Canada)",
        "(GMT-08:00) Pacific Time (US & Canada)"
      ]

    };
  }

  toggleAddRoleForm = () => {
    this.setState({
      addRoleForm: !this.state.addRoleForm
    })
  }

  handleAddRole = (event, errors, values) => {
    if (values.roleTitle) {
      var newRole = values.roleTitle;
      var { roles } = this.state;
      if (roles.findIndex(each => each == values.roleTitle) == -1) roles.push(newRole);

      this.setState({
        roles: roles,
        addRoleForm: false
      })
    }
  }

  toggleGroupPopup = () => {
    this.setState({ groupPopup: !this.state.groupPopup });
  }

  toggleAddGroupForm = () => {
    this.setState({
      addGroupForm: !this.state.addGroupForm
    })
  }

  handleAddGroup = (event, errors, values) => {
    if (values.groupTitle) {
      var newValue = values.groupTitle;
      var { groups } = this.state;
      if (groups.findIndex(each => each.value == newValue) == -1){
        var id = groups[groups.length - 1].id + 1;        
        groups.push({id: id, value: newValue});
      }

      this.setState({
        groups: groups,
        addGroupForm: false
      })
    }
  }

  handleAddAll = () => {
    console.log('handle add all')
  }

  render() {
    return (
      <React.Fragment>
        <div className="right-bar w-50">

          <div className="rightbar-title px-3 py-2">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Add person</h5>
              <div>
                <i className={`${Icons.helpS} font-size-22`} style={{ cursor: "pointer" }}></i>
                <i className={`${Icons.closeS} font-size-24 ml-2`} style={{ cursor: "pointer" }} onClick={() => this.props.hideRightBar()}></i>
              </div>
            </div>
          </div>

          <div className="d-flex p-3">
            <Col className="col-6">

              <div className="my-3">
                First name:
                <input className="form-control border font-size-14" style={{ height: 30 }} type="text" defaultValue="" placeholder="" />
              </div>
              <div className="my-3">
                Last name:
                <input className="form-control border font-size-14" style={{ height: 30 }} type="text" defaultValue="" placeholder="" />
              </div>

              <div className="my-3">
                Email:
                <input className="form-control border font-size-14" style={{ height: 30 }} type="text" defaultValue="" placeholder="" />
              </div>

              <div className="my-3">
                <div className="d-flex justify-content-between align-items-center">
                  Access Role:
                  <i className={`${Icons.help} font-size-16`} style={{ cursor: "pointer" }}></i>
                </div>
                {
                  !this.state.addRoleForm &&
                  <div className="d-flex">
                    <Col className="col-6 p-0">
                      <SingleSelectDropdown keyName="role" options={this.state.roles} itemIconStyle="checkBox" />
                    </Col>
                    <div className="my-1 mx-3 text-info d-flex align-items-center" onClick={this.toggleAddRoleForm} style={{ cursor: "pointer" }}>Add role</div>
                  </div>
                }
                {
                  this.state.addRoleForm &&
                  <AvForm className="needs-validation" onSubmit={this.handleAddRole}>
                    <Row>
                      <Col className="col-6">
                        <FormGroup>
                          <AvField
                            name="roleTitle"
                            placeholder="Title"
                            type="text"
                            errorMessage="Enter Title"
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom01"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="col-3">
                        <Button color="primary" type="submit" style={{ width: '100%' }}>Add</Button>
                      </Col>
                      <Col className="col-3">
                        <Button color="secondary" onClick={this.toggleAddRoleForm} style={{ width: '100%' }}>Cancel</Button>
                      </Col>
                    </Row>
                  </AvForm>
                }
              </div>

              <div className="my-3">
                Group:
                {
                  !this.state.addGroupForm &&
                  <>
                    <Multiselect
                      options={this.state.groups}
                      selectedValues={this.state.selectedGroups}
                      onSelect={(selectedList, selectedItem) => console.log(selectedList, selectedItem)}
                      onRemove={(selectedList, removedItem) => console.log(selectedList, removedItem)}
                      displayValue="value"
                      avoidHighlightFirstOption
                      showCheckbox
                    />
                    <div className="my-1 text-info" onClick={this.toggleAddGroupForm} style={{ cursor: "pointer" }}>Add group</div>
                  </>
                }
                {
                  this.state.addGroupForm &&
                  <AvForm className="needs-validation" onSubmit={this.handleAddGroup}>
                    <Row>
                      <Col className="col-6">
                        <FormGroup>
                          <AvField
                            name="groupTitle"
                            placeholder="Title"
                            type="text"
                            errorMessage="Enter Title"
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom02"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="col-3">
                        <Button color="primary" type="submit" style={{ width: '100%' }}>Add</Button>
                      </Col>
                      <Col className="col-3">
                        <Button color="secondary" onClick={this.toggleAddGroupForm} style={{ width: '100%' }}>Cancel</Button>
                      </Col>
                    </Row>
                  </AvForm>
                }
              </div>

              <div className="my-3">
                Project:
                <Multiselect
                  options={this.state.projects}
                  selectedValues={this.state.selectedProjects}
                  onSelect={(selectedList, selectedItem) => console.log(selectedList, selectedItem)}
                  onRemove={(selectedList, removedItem) => console.log(selectedList, removedItem)}
                  displayValue="value"
                  avoidHighlightFirstOption
                  showCheckbox
                />
              </div>

              <div className="form-check my-3 d-flex">
                <input className="form-check-input" type="checkbox" value="" id='addAnotherPerson' />
                <label className="form-check-label" htmlFor='addAnotherPerson'>Add another person</label>
              </div>

              <div className="form-check my-3 d-flex">
                <input className="form-check-input" type="checkbox" value="" id='customWelcomeMessage' onChange={(e) => {
                  if (e.target.checked) this.setState({ customWelcomeMessageForm: true })
                  else this.setState({ customWelcomeMessageForm: false })
                }} />
                <label className="form-check-label" htmlFor='customWelcomeMessage'>Custom welcome message</label>
              </div>
              {
                this.state.customWelcomeMessageForm &&
                <div className="my-3 p-3" style={{ minHeight: 200, backgroundColor: '#eee' }}>
                  <textarea className="w-100" style={{ minHeight: 150 }} value={this.state.customWelcomeMessage} onChange={(e) => this.setState({ customWelcomeMessage: e.target.value })}></textarea>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id='saveMessageForFuture' onChange={(e) => this.setState({ saveCustomMessage: e.target.checked })} />
                    <label className="form-check-label" htmlFor='saveMessageForFuture'>Save message for future</label>
                  </div>
                  <div className="my-3 text-info" style={{ cursor: "pointer" }} onClick={() => this.setState({ customWelcomeMessage: this.state.defaultWelcomeMessage })}>
                    Use default message
                  </div>
                </div>
              }
            </Col>

            <Col className="col-6">

              <div className="my-3">
                Password:
                <SingleSelectDropdown keyName="password" options={this.state.passwords} itemIconStyle="checkBox" />
              </div>

              <div className="my-3">
                Langueage:
                <SingleSelectDropdown keyName="language" options={this.state.languages} itemIconStyle="checkBox" />
              </div>

              <div className="my-3">
                Timezone:
                <SingleSelectDropdown keyName="timezone" options={this.state.timezones} itemIconStyle="checkBox" />
              </div>

              <div className="my-3">
                Title:
                <input className="form-control border font-size-14" style={{ height: 30 }} type="text" defaultValue="" placeholder="" />
              </div>

              <div className="my-3">
                Profile Picture:
                <div className="d-flex">
                  <Col className="col-8 px-0">
                    <input className="form-control border font-size-14" style={{ height: 30 }} type="text" defaultValue="" placeholder="" />
                  </Col>
                  <Col className="col-4 pr-0">
                    <Button className="btn-sm" color="primary" onClick={() => { }} style={{ width: '100%' }}>Browse</Button>
                  </Col>
                </div>
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
    
  };
};

export default connect(mapStateToProps, {
  showRightBar,
  hideRightBar
})(withNamespaces()(AddPeoplePerson));
