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

class AddPeopleGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {id: 1, value: 'Segunfunmi Oyedele'},
        {id: 2, value: 'John Smith'},
      ],
      selectedPersons: [],
      addPersonForm: false,
    };
  }

  toggleAddPersonForm = () => {
    this.setState({
      addPersonForm: !this.state.addPersonForm
    })
  }

  handleAddPerson = (event, errors, values) => {
    if (values.firstname && values.lastname) {
      var newValue = values.firstname + ' ' + values.lastname;
      var { persons } = this.state;
      if (persons.findIndex(each => each.value == newValue) == -1){
        var id = persons[persons.length-1].id + 1;
        persons.push({id: id, value: newValue});
      }

      this.setState({
        persons: persons,
        addPersonForm: false
      })
    }
  }

  handleAddAll = () => {
    console.log('handle add all')
  }

  render() {
    return (
      <React.Fragment>
        <div className="right-bar w-25">

          <div data-simplebar className="h-100" style={{ minHeight: '100vh' }}>
            <div className="rightbar-title px-3 py-2">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="m-0">Add group</h5>
                <div>
                  <i className={`${Icons.helpS} font-size-22`} style={{ cursor: "pointer" }}></i>
                  <i className={`${Icons.closeS} font-size-24 ml-2`} style={{ cursor: "pointer" }} onClick={() => this.props.hideRightBar()}></i>
                </div>
              </div>
            </div>
            <div className="px-3 py-2">
              Group name:
              <Col className="col-12 px-0">
                <input className="form-control-sm border font-size-14" type="text" defaultValue="" placeholder="Search" style={{ width: '100%' }} />
              </Col>
            </div>
            <div className="px-3 py-2">
              Assigned:
                {
                !this.state.addPersonForm &&
                <>
                  <Multiselect
                    options={this.state.persons}
                    selectedValues={this.state.selectedPersons}
                    onSelect={(selectedList, selectedItem) => console.log(selectedList, selectedItem)}
                    onRemove={(selectedList, removedItem) => console.log(selectedList, removedItem)}
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
                          type="text"
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
                          name="accessRole"
                          placeholder="Access Role"
                          type="select"
                          errorMessage="Select Role"
                          className="form-control"
                          validate={{ required: { value: true } }}
                          id="validationCustom04"
                        >
                          <option></option>
                          <option>Admin</option>
                          <option>Normal User</option>
                        </AvField>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-3">
                      <Button color="primary" type="submit" style={{ width: '100%' }}>Add</Button>
                    </Col>
                    <Col className="col-3">
                      <Button color="secondary" onClick={this.toggleAddPersonForm} style={{ width: '100%' }}>Cancel</Button>
                    </Col>
                  </Row>
                </AvForm>
              }
            </div>

          </div>

          <div className="d-flex p-3 my-2 w-100" style={{ position: 'absolute', left: 10, bottom: 10 }}>
            <Col className="col-3 px-0">
              <Button color="primary" type="submit" onClick={() => this.handleAddAll()} style={{ width: '100%' }}>Add</Button>
            </Col>
            <Col className="col-3 px-1">
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
})(withNamespaces()(AddPeopleGroup));
