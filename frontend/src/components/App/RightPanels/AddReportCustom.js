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

class AddReportCustom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        'Projects': [
          { id: 1, value: "Onboarding project" },
          { id: 2, value: "Completed project" },
        ],
        'Project Category': [
          { id: 1, value: "Categorized" },
          { id: 2, value: "Uncategorized" }
        ],
        'Project Statuses': [
          { id: 1, value: "Active" },
          { id: 2, value: "Inactive" }
        ],
        'Project Manager': [
          { id: 1, value: "Manager" },
          { id: 2, value: "Segunfunmi Oyedele" }
        ]
      },
      for: '',
      selectedData: [],

      reportOption: 'tasks',

      assignedTos: [
        { id: 1, value: "Admin User" },
        { id: 2, value: "Segunfunmi Oyedele" }
      ],
      selectedAssignedTos: [],

      createdBys: [
        { id: 1, value: "Admin User" },
        { id: 2, value: "Segunfunmi Oyedele" }
      ],
      selectedCreatedBys: [],

      views: [
        "Overdue",
        "Due",
        "Completed",
        "No data set"
      ],
      viewWhensData: [
        {
          key: "Overdue",
          values: ["On", "Today"]
        },
        {
          key: "Due",
          values: ["On", "Between", "Within last", "Within the next", "Today"]
        },
        {
          key: "Completed",
          values: ["On", "Between", "Within last", "Within the next", "Today"]
        },
        {
          key: "No data set",
          values: []
        }
      ],
      viewWhens: [],
      labels: [
        "High",
        "In-progress",
        "Low",
        "Medium"
      ],
      tasksGroupBys: [
        "Date",
        "Project",
        "Tasklist"
      ],
      milestonesGroupBys: [
        "Date",
        "Project"
      ],
      timeGroupBys: [
        "Project",
        "Timesheet",
        "Person",
        "Date"
      ],

      statuses: [
        {id:1, value: "Billed"},
        {id: 2, value: "Billable"},
        {id: 3, value: "Non-billable"},
        {id: 4, value: "Void"},
        {id: 5, value: "None"}
      ],
      selectedStatuses: [],

      loggedBys: [
        {id: 1, value: "Admin User"},
        {id: 2, value: "Segunfunmi Oyedele"}
      ],
      selectedLoggedBys: [],

      loggeds: [
        "On",
        "Between",
        "Within last",
        "Today"
      ],
    }
  };

  onChangeFor = (key) => {
    this.setState({ for: key });
  }

  onChangeView = (value) => {
    var viewWhens = this.state.viewWhensData.filter(each => each.key == value)[0];
    if (viewWhens && viewWhens.values) {
      this.setState({ viewWhens: viewWhens.values })
    }
  }

  onChangeLogged = (value) => {

  }


  handleAddAll = () => {
    console.log('handle add all')
  }

  handleReset = () => {

  }

  render() {
    return (
      <React.Fragment>
        <div className="right-bar" style={{ width: 500 }}>

          <div data-simplebar className="h-100" style={{ minHeight: '100vh' }}>
            <div className="rightbar-title px-3 py-2">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="m-0">Add custom report</h5>
                <div>
                  <i className={`${Icons.helpS} font-size-22`} style={{ cursor: "pointer" }}></i>
                  <i className={`${Icons.closeS} font-size-24 ml-2`} style={{ cursor: "pointer" }} onClick={() => this.props.hideRightBar()}></i>
                </div>
              </div>
            </div>

            <div className="px-3 py-2">
              Title:
              <Col className="col-12 px-0">
                <input className="form-control-sm border font-size-14" type="text" defaultValue="" placeholder="" style={{ width: '100%' }} />
              </Col>
            </div>

            <div className="px-3 py-2 d-flex">
              <Col className="col-4 px-0">
                For:
                <SingleSelectDropdown keyName="for" options={Object.keys(this.state.data)} itemIconStyle="checkBox" onChange={this.onChangeFor} />
              </Col>
              <Col className="col-8">
                <div className="d-flex justify-content-between align-items-center">
                  Select:
                <i className={`${Icons.help} font-size-16`} style={{ cursor: "pointer" }}></i>
                </div>
                <Multiselect
                  options={this.state.data[this.state.for]}
                  selectedValues={this.state.selectedData}
                  onSelect={(selectedList, selectedItem) => console.log(selectedList, selectedItem)}
                  onRemove={(selectedList, removedItem) => console.log(selectedList, removedItem)}
                  displayValue="value"
                  avoidHighlightFirstOption
                  showCheckbox
                />
              </Col>
            </div>

            <div className="px-3 pt-2 pb-0">
              Create a:
              <div className="form-group d-flex mb-0" onChange={(e) => this.setState({ reportOption: e.target.value })}>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="createReportRadio" id="tasksRadio" value="tasks" defaultChecked={this.state.reportOption === 'tasks' ? true : false} />
                  <label className="form-check-label" htmlFor="tasksRadio">Tasks report</label>
                </div>
                <div className="form-check ml-3">
                  <input className="form-check-input" type="radio" name="createReportRadio" id="milestonesRadio" value="milestones" defaultChecked={this.state.reportOption === 'milestones' ? true : false} />
                  <label className="form-check-label" htmlFor="milestonesRadio">Milestones report</label>
                </div>
                <div className="form-check ml-3">
                  <input className="form-check-input" type="radio" name="createReportRadio" id="timeRadio" value="time" defaultChecked={this.state.reportOption === 'time' ? true : false} />
                  <label className="form-check-label" htmlFor="timeRadio">Time report</label>
                </div>
              </div>
            </div>
            <div className="px-3 py-2">
              <div style={{ minHeight: 200, backgroundColor: '#eee', borderColor: '#aaa', borderWidth: 1, borderStyle: 'solid' }}>
                {
                  (this.state.reportOption === 'tasks' || this.state.reportOption === 'milestones') &&
                  <>
                    <div className="px-3 py-2">
                      Assigned to:
                      <div className="form-group mb-0" onChange={(e) => console.log(e.target.value)}>
                        <div className="form-check mb-1">
                          <input className="form-check-input" type="radio" name="assignedTo" id="assignedToAnyoneRadio" value="assignedToAnyone" />
                          <label className="form-check-label" htmlFor="assignedToAnyoneRadio">Anyone</label>
                        </div>
                        <div className="form-check mb-1">
                          <input className="form-check-input" type="radio" name="assignedTo" id="assignedToNoneRadio" value="assignedToNone" />
                          <label className="form-check-label" htmlFor="assignedToNoneRadio">None</label>
                        </div>
                        <div className="form-check mb-1">
                          <input className="form-check-input" type="radio" name="assignedTo" id="assignedToSelectRadio" value="assignedToSelect" />
                          <Multiselect
                            options={this.state.assignedTos}
                            selectedValues={this.state.selectedAssignedTos}
                            onSelect={(selectedList, selectedItem) => console.log(selectedList, selectedItem)}
                            onRemove={(selectedList, removedItem) => console.log(selectedList, removedItem)}
                            displayValue="value"
                            avoidHighlightFirstOption
                            showCheckbox
                          />
                        </div>
                      </div>
                    </div>
                    <div className="px-3 py-2">
                      Created by:
                      <div className="form-group mb-0" onChange={(e) => console.log(e.target.value)}>
                        <div className="form-check mb-1">
                          <input className="form-check-input" type="radio" name="createdBy" id="createdByAnyoneRadio" value="createdByAnyone" />
                          <label className="form-check-label" htmlFor="createdByAnyoneRadio">Anyone</label>
                        </div>
                        <div className="form-check mb-1">
                          <input className="form-check-input" type="radio" name="createdBy" id="createdBySelectRadio" value="createdBySelect" />
                          <Multiselect
                            options={this.state.createdBys}
                            selectedValues={this.state.selectedCreatedBys}
                            onSelect={(selectedList, selectedItem) => console.log(selectedList, selectedItem)}
                            onRemove={(selectedList, removedItem) => console.log(selectedList, removedItem)}
                            displayValue="value"
                            avoidHighlightFirstOption
                            showCheckbox
                          />
                        </div>
                      </div>
                    </div>
                    <div className="px-3 py-2 d-flex">
                      <Col className="col-4 px-0">
                        {
                          this.state.reportOption === 'tasks' ? 'View tasks' : 'View milestones'
                        }
                        <SingleSelectDropdown keyName="views" options={this.state.views} itemIconStyle="checkBox" onChange={this.onChangeView} />
                      </Col>
                      <Col className="col-5">
                        <br />
                        <SingleSelectDropdown keyName="viewsWhen" options={this.state.viewWhens} />
                      </Col>
                      <Col className="col-3">

                      </Col>
                    </div>
                  </>
                }
                {
                  this.state.reportOption === 'tasks' &&
                  <>
                    <div className="px-3 py-2">
                      Labels:
                      <div className="form-group mb-0" onChange={(e) => console.log(e.target.value)}>
                        <div className="form-check mb-1">
                          <input className="form-check-input" type="radio" name="labels" id="labelsAllRadio" value="labelsAll" />
                          <label className="form-check-label" htmlFor="labelsAllRadio">All</label>
                        </div>
                        <div className="form-check mb-1">
                          <input className="form-check-input" type="radio" name="labels" id="labelsNoneRadio" value="labelsNone" />
                          <label className="form-check-label" htmlFor="labelsNoneRadio">None</label>
                        </div>
                        <div className="form-check mb-1">
                          <input className="form-check-input" type="radio" name="labels" id="labelsSelectRadio" value="labelsSelect" />
                          <SingleSelectDropdown keyName="labels" options={this.state.labels} />
                        </div>
                      </div>
                    </div>
                    <div className="px-3 py-2">
                      Group by:
                      <SingleSelectDropdown keyName="tasksGroupBy" options={this.state.tasksGroupBys} />
                    </div>
                    <div className="px-3 py-2">
                      <div className="form-check d-flex">
                        <input className="form-check-input" type="checkbox" value="" id='includeDetails' />
                        <label className="form-check-label" htmlFor='includeDetails'>Include details</label>
                      </div>
                    </div>
                  </>
                }
                {
                  this.state.reportOption === 'milestones' &&
                  <>
                    <div className="px-3 py-2">
                      Group by:
                      <SingleSelectDropdown keyName="milestonesGroupBy" options={this.state.milestonesGroupBys} />
                    </div>
                    <div className="px-3 py-2">
                      <div className="form-check d-flex">
                        <input className="form-check-input" type="checkbox" value="" id='includeDetails' />
                        <label className="form-check-label" htmlFor='includeDetails'>Include details</label>
                      </div>
                    </div>
                  </>
                }
                {
                  this.state.reportOption === 'time' &&
                  <>
                    <div className="px-3 py-2">
                      Status:
                      <div className="form-group mb-0" onChange={(e) => console.log(e.target.value)}>
                        <div className="form-check mb-1">
                          <input className="form-check-input" type="radio" name="status" id="statusAllRadio" value="statusAll" />
                          <label className="form-check-label" htmlFor="statusAllRadio">All</label>
                        </div>
                        <div className="form-check mb-1">
                          <input className="form-check-input" type="radio" name="status" id="statusSelectRadio" value="statusSelect" />
                          <Multiselect
                            options={this.state.statuses}
                            selectedValues={this.state.selectedStatuses}
                            onSelect={(selectedList, selectedItem) => console.log(selectedList, selectedItem)}
                            onRemove={(selectedList, removedItem) => console.log(selectedList, removedItem)}
                            displayValue="value"
                            avoidHighlightFirstOption
                            showCheckbox
                          />
                        </div>
                      </div>
                    </div>
                    <div className="px-3 py-2">
                      Logged by:
                      <div className="form-group mb-0" onChange={(e) => console.log(e.target.value)}>
                        <div className="form-check mb-1">
                          <input className="form-check-input" type="radio" name="loggedBy" id="loggedByAnyoneRadio" value="loggedByAnyone" />
                          <label className="form-check-label" htmlFor="loggedByAnyoneRadio">Anyone</label>
                        </div>
                        <div className="form-check mb-1">
                          <input className="form-check-input" type="radio" name="loggedBy" id="loggedBySelectRadio" value="loggedBySelect" />
                          <Multiselect
                            options={this.state.loggedBys}
                            selectedValues={this.state.selectedLoggedBys}
                            onSelect={(selectedList, selectedItem) => console.log(selectedList, selectedItem)}
                            onRemove={(selectedList, removedItem) => console.log(selectedList, removedItem)}
                            displayValue="value"
                            avoidHighlightFirstOption
                            showCheckbox
                          />
                        </div>
                      </div>
                    </div>
                    <div className="px-3 py-2 d-flex">
                      <Col className="col-4 px-0">
                        Logged:
                        <SingleSelectDropdown keyName="logged" options={this.state.loggeds} itemIconStyle="checkBox" onChange={this.onChangeLogged} />
                      </Col>
                      <Col className="col-3">

                      </Col>
                    </div>
                    <div className="px-3 py-2">
                      Group by:
                      <SingleSelectDropdown keyName="timeGroupBy" options={this.state.timeGroupBys} />
                    </div>
                    <div className="px-3 py-2">
                      <div className="form-check d-flex">
                        <input className="form-check-input" type="checkbox" value="" id='includeDetails' />
                        <label className="form-check-label" htmlFor='includeDetails'>Include details</label>
                      </div>
                    </div>
                  </>
                }
              </div>
            </div>

          </div>

          <div className="d-flex p-3 my-2 w-100" style={{ position: 'absolute', left: 10, bottom: 10 }}>
            <Col className="col-3 px-1">
              <Button color="primary" type="submit" onClick={() => this.handleAddAll()} style={{ width: '100%' }}>Add</Button>
            </Col>
            <Col className="col-3 px-1">
              <Button color="secondary" type="submit" onClick={() => this.handleReset()} style={{ width: '100%' }}>Reset</Button>
            </Col>
            <Col className="col-3 px-1">
              <Button color="secondary" onClick={() => this.props.hideRightBar()} style={{ width: '100%' }}>Cancel</Button>
            </Col>
          </div>

        </div>
        <div className="rightbar-overlay" onClick={() => this.props.hideRightBar()}></div>
      </React.Fragment >
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
})(withNamespaces()(AddReportCustom));
