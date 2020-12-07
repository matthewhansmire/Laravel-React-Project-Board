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

class AddRequestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {id: 1, value: "Onboarding project"},
        {id: 2, value: "Completed project"}
      ],
      selectedProjects: [],

      tasklist: [
        "Checklist",
        "List of tasks",
        "Monthly tasks template"
      ],

      labels: [
        {id: 1, value: "High"},
        {id: 2, value: "In-progress"},
        {id: 3, value: "Low"},
        {id: 4, value: "Medium"}
      ],
      selectedLabels: []
    };
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
                <h5 className="m-0">Add request form</h5>
                <div>
                  <i className={`${Icons.helpS} font-size-22`} style={{ cursor: "pointer" }}></i>
                  <i className={`${Icons.closeS} font-size-24 ml-2`} style={{ cursor: "pointer" }} onClick={() => this.props.hideRightBar()}></i>
                </div>
              </div>
            </div>
            <div className="px-3 py-2">
              <Col className="col-12 px-0">
                Title:
                <i className="text-secondary">(This will be added as the title of the request form):</i>
                <input className="form-control-sm border font-size-14" type="text" defaultValue="" placeholder="" style={{ width: '100%' }} />
              </Col>
            </div>
            <div className="px-3 py-2">
              Description:
              <i className="text-secondary">(This will be added as the description of the request form):</i>
              <textarea className="form-control border font-size-14" style={{ minHeight: 100 }} type="text" defaultValue="" placeholder="" />
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
              Tasklist:
              <SingleSelectDropdown keyName="tasklist" options={this.state.tasklist} itemIconStyle="checkBox" />
            </div>
            <div className="px-3 py-2">
              Labels:
              <Multiselect
                options={this.state.labels}
                selectedValues={this.state.selectedLabels}
                onSelect={(selectedList, selectedItem) => console.log(selectedList, selectedItem)}
                onRemove={(selectedList, removedItem) => console.log(selectedList, removedItem)}
                displayValue="value"
                avoidHighlightFirstOption
                showCheckbox
              />
            </div>
            <div className="px-3 py-2">
              Redirect URL:
              <i className="text-secondary">(The person will be redirected to this page after request submission):</i>
              <textarea className="form-control border font-size-14" style={{ minHeight: 100 }} type="text" defaultValue="" placeholder="" />
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
})(withNamespaces()(AddRequestForm));
