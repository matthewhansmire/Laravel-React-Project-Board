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

import "../../../assets/scss/rightbar.scss";
import { Icons } from "../../../constants";

import { Multiselect } from 'multiselect-react-dropdown';
import SingleSelectDropdown from '../SingleSelectDropdown';

class AddPeopleImport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [
        "Group1",
        "Group2"
      ],
      projects: [
        { id: 1, value: "Onboarding project" },
        { id: 2, value: "Completed project" }
      ],
      selectedProjects: []
    };
  }

  handleImport = () => {
    console.log('handle add all')
  }

  render() {
    return (
      <React.Fragment>
        <div className="right-bar w-25">

          <div data-simplebar className="h-100" style={{ minHeight: '100vh' }}>
            <div className="rightbar-title px-3 py-2">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="m-0">Import people</h5>
                <div>
                  <i className={`${Icons.helpS} font-size-22`} style={{ cursor: "pointer" }}></i>
                  <i className={`${Icons.closeS} font-size-24 ml-2`} style={{ cursor: "pointer" }} onClick={() => this.props.hideRightBar()}></i>
                </div>
              </div>
            </div>
            <div className="px-3 py-2">
              Use the sample CSV and fill your own data:
              <a className="">Download sample CSV file</a>
            </div>

            <div className="px-3 py-2">
              Select CSV file:
              <div className="d-flex">
                <Col className="col-8 px-0">
                  <input className="form-control border font-size-14" style={{ height: 30 }} type="text" defaultValue="" placeholder="" />
                </Col>
                <Col className="col-4 pr-0">
                  <Button className="btn-sm" color="primary" onClick={() => { }} style={{ width: '100%' }}>Browse</Button>
                </Col>
              </div>
            </div>

            <div className="px-3 py-2">
              Group:
              <SingleSelectDropdown keyName="group" options={this.state.groups} itemIconStyle="checkBox" />
            </div>

            <div className="px-3 py-2">
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

            <div className="px-3 py-2">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id='sendInvitation' />
                <label className="form-check-label" htmlFor='sendInvitation'>Send invitation to all the imported people</label>
                <a className="text-info ml-2">Learn more</a>
              </div>
            </div>

            <div className="px-4 py-2">
              Note: You can also invite them later
            </div>

          </div>

          <div className="d-flex p-3 my-2 w-100" style={{ position: 'absolute', left: 10, bottom: 10 }}>
            <Col className="col-3 px-0">
              <Button color="primary" type="submit" onClick={() => this.handleImport()} style={{ width: '100%' }}>Import</Button>
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
})(withNamespaces()(AddPeopleImport));
