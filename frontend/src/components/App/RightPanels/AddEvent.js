import React, { Component } from "react";
import { FormGroup } from "reactstrap";
import { Row, Col, Button } from "reactstrap";

import { withRouter } from 'react-router-dom';
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
import ColorPicker from '../ColorPicker';

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        "Onboarding project",
        "Completed project"
      ],
      repeats: [
        "Never",
        "Daily",
        "Weekly",
        "Monthly",
        "Yearly"
      ],
      attendees: [
        { id: 1, value: "Segunfunmi Oyedele" },
        { id: 2, value: "Normal User" }
      ],
      selectedAttendees: [],
      timezones: [
        "(GMT-05:00) Eastern Time (US & Canada)",
        "(GMT-09:00) Alaska (US & Canada)",
        "(GMT-08:00) Pacific Time (US & Canada)"
      ],
      reminders: [
        "None",
        "At start time",
        "5 minutes before start",
        "15 minutes before start",
        "30 minutes before start",
        "1 hour before start",
        "1.5 hours before start",
        "2 hours before start",
        "3 hours before start",
        "6 hours before start",
        "12 hours before start",
        "1 day before start",
        "2 days before start",
        "3 days before start",
        "4 days before start",
        "5 days before start",
        // "1 week before start",
        // "2 weeks before start"
      ]
    };
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
              <h5 className="m-0">Add event</h5>
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
                <SingleSelectDropdown keyName="project" options={this.state.projects} />
              </div>

              <div className="my-3">
                Title:
                <input className="form-control border font-size-14" style={{ height: 30 }} type="text" defaultValue="" placeholder="" />
              </div>

              <div className="my-3">
                <div className="form-check mb-2 d-flex align-items-center">
                  <input className="form-check-input" type="checkbox" value="" id="markAsPrivate" />
                  <label className="form-check-label" htmlFor="markAsPrivate">Mark as private</label>
                  <i className={`${Icons.help} font-size-16 ml-2`} style={{ cursor: "pointer" }}></i>
                </div>
              </div>

              <div className="my-3">
                <div className="form-check mb-2 d-flex align-items-center">
                  <input className="form-check-input" type="checkbox" value="" id="allDayEvent" />
                  <label className="form-check-label" htmlFor="allDayEvent">All day event</label>
                </div>
              </div>

              <div className="my-3">
                When
                <Row className="d-flex align-items-center">
                  <Col className="col-5">
                    <input className="form-control border font-size-14" style={{ height: 30 }} type="date" defaultValue="" placeholder="" />
                  </Col>
                  to
                  <Col className="col-5">
                    <input className="form-control border font-size-14" style={{ height: 30 }} type="date" defaultValue="" placeholder="" />
                  </Col>
                </Row>
              </div>

              <div className="my-3">
                Repeat:
                <SingleSelectDropdown keyName="repeat" options={this.state.repeats} />
              </div>

              <div className="my-3">
                Attendees:
                <Multiselect
                  options={this.state.attendees}
                  selectedValues={this.state.selectedAttendees}
                  onSelect={(selectedList, selectedItem) => console.log(selectedList, selectedItem)}
                  onRemove={(selectedList, removedItem) => console.log(selectedList, removedItem)}
                  displayValue="value"
                  avoidHighlightFirstOption
                  showCheckbox
                />
              </div>
            </Col>

            <Col className="col-5">
              <div className="my-3">
                Description:
                <textarea className="form-control border font-size-14" style={{ minHeight: 100 }} type="text" defaultValue="" placeholder="" />
              </div>

              <div className="my-3">
                Timezone:
                <SingleSelectDropdown keyName="timezone" options={this.state.timezones} />
              </div>

              <div className="my-3">
                Reminders:
                <SingleSelectDropdown keyName="reminder" options={this.state.reminders} />
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
})(withNamespaces()(AddEvent));
