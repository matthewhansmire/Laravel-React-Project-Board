import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";

import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import { connect } from "react-redux";
import {
  showRightBar,
  hideRightBar,

  getUserPersons,
  getProjectTimesheets,
  addTimesheet,

} from "../../../store/actions";

import { AvForm, AvField } from "availity-reactstrap-validation";

import "../../../assets/scss/rightbar.scss";
import { Icons } from "../../../constants";

import { Multiselect } from 'multiselect-react-dropdown';
import SingleSelectDropdown from '../SingleSelectDropdown';

class AddTimesheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      isEstimatedTime: false,
      hours: '',
      minutes: '',
      markPrivate: false,

      persons: [],
      selectedSubscribers: []
    };
  }

  componentDidMount() {
    this.props.getUserPersons();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.persons != this.props.persons) {
      var persons = [];
      this.props.persons.forEach(each => {
        persons.push({
          id: each.id,
          value: each.name
        });
      })
      this.setState({ persons: persons })
    }

    if (prevProps.addedTimesheet != this.props.addedTimesheet) {
      console.log('addedTimesheet', this.props.addedTimesheet);

      let param = { project_id: this.props.rightBarParam.project.id }
      this.props.getProjectTimesheets(param);
      this.props.hideRightBar();
    }

    if (this.props.rightBarParam) {
      // console.log('param', this.props.rightBarParam);
    }

  }

  handleAddAll = () => {
    if (!this.state.title) {
      alert('Please enter title');
      return;
    }
    
    if (this.state.isEstimatedTime && !this.state.hours) {
      alert('Please enter hours');
      return;
    }

    // console.log('project', this.props.rightBarParam.project);
    // console.log('title', this.state.title);
    // console.log('hours', this.state.hours);
    // console.log('minutes', this.state.minutes);
    // console.log('markPrivate', this.state.markPrivate);

    this.props.addTimesheet({
      title: this.state.title,
      hours: this.state.hours ? this.state.hours : 0,
      minutes: this.state.minutes ? this.state.minutes : 0,
      creator_id: this.props.person.id,
      project_id: this.props.rightBarParam.project.id,
      markPrivate: this.state.markPrivate,
      status: 'active'
    });

  }

  render() {
    return (
      <React.Fragment>
        <div className="right-bar w-25">

          <div className="rightbar-title px-3 py-2">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Add timesheet</h5>
              <div>
                <i className={`${Icons.helpS} font-size-22`} style={{ cursor: "pointer" }}></i>
                <i className={`${Icons.closeS} font-size-24 ml-2`} style={{ cursor: "pointer" }} onClick={() => this.props.hideRightBar()}></i>
              </div>
            </div>
          </div>

          <div className="mx-3 my-3">
            Project:
            <input className="form-control border font-size-14" style={{ height: 30 }} type="text" disabled defaultValue={this.props.rightBarParam?.project?.title} placeholder="" />
          </div>

          <div className="mx-3 my-3">
            Title:
            <input className="form-control border font-size-14" style={{ height: 30 }} type="text" defaultValue="" placeholder="" onChange={(e) => this.setState({ title: e.target.value })} />
          </div>

          <div className="form-check mx-3 my-3 d-flex align-items-center">
            <input className="form-check-input" type="checkbox" value="" id="isEstimatedTime" onChange={(e) => this.setState({ isEstimatedTime: e.target.checked })} />
            <label className="form-check-label" htmlFor="isEstimatedTime">Estimated time</label>
          </div>

          {
            this.state.isEstimatedTime &&
            <div className="mx-3 my-3">
              <Row>
                <Col className="col-4">
                  Hours:
                    <input className="form-control border font-size-14" style={{ height: 30 }} type="number" defaultValue="" placeholder="" onChange={(e) => this.setState({ hours: e.target.value })} />
                </Col>
                <Col className="col-4">
                  Minutes:
                    <input className="form-control border font-size-14" style={{ height: 30 }} type="number" defaultValue="" placeholder="" onChange={(e) => this.setState({ minutes: e.target.value })} />
                </Col>
              </Row>
            </div>
          }

          <div className="form-check mx-3 my-3 d-flex align-items-center">
            <input className="form-check-input" type="checkbox" value="" id="markPrivate" onChange={(e) => this.setState({ markPrivate: e.target.checked })} />
            <label className="form-check-label" htmlFor="markPrivate">Mark as private</label>
          </div>

          {
            this.state.markPrivate &&
            <div className="mx-3 my-3">
              <Multiselect
                options={this.state.persons}
                selectedValues={this.state.selectedSubscribers}
                onSelect={(selectedList, selectedItem) => this.setState({ selectedSubscribers: selectedList })}
                onRemove={(selectedList, removedItem) => this.setState({ selectedSubscribers: selectedList })}
                displayValue="value"
                avoidHighlightFirstOption
                showCheckbox
              />
            </div>
          }

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
    person: state.Auth.person,
    rightBarParam: state.RightBar.rightBarParam,
    persons: state.Project.persons,
    addedTimesheet: state.Time.addedTimesheet
  };
};

export default connect(mapStateToProps, {
  showRightBar,
  hideRightBar,

  getUserPersons,
  getProjectTimesheets,
  addTimesheet
})(withNamespaces()(AddTimesheet));
