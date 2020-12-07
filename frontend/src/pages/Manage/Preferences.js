import React, { Component } from "react";
import { Col, Row, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Container, Popover, PopoverHeader, PopoverBody, Button } from "reactstrap";

import "../../assets/scss/rightbar.scss";
import { Icons } from "../../constants";

import SingleSelectDropdown from '../../components/App/SingleSelectDropdown';

class Preferences extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateFormats: [
        "mm/dd/yyyy",
        "dd/mm/yyyy"
      ],
      timeFormats: [
        "12-hour",
        "24-hour"
      ],
      startWeekFroms: [
        "Sunday",
        "Monday",
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <CardTitle>Preferences</CardTitle>
        <CardHeader className="px-0 py-0 font-size-16 d-flex align-items-center justify-content-end" id="headingTwo">
          <i className={`${Icons.help} font-size-18`} style={{ cursor: "pointer" }} onClick={() => { }}></i>
        </CardHeader>
        <CardBody className="bg-white">
          <Row>
            <Col className="col-6">
              <div className="my-3">
                Date format:
                <SingleSelectDropdown keyName="dateFormat" options={this.state.dateFormats} />
              </div>
            </Col>
            <Col className="col-6 my-3 d-flex align-items-center">This will be the default date format for everyone in the entire account.</Col>
          </Row>
          <Row>
            <Col className="col-6">
              <div className="my-3">
                Time format:
                <SingleSelectDropdown keyName="timeFormat" options={this.state.timeFormats} />
              </div>
            </Col>
            <Col className="col-6 my-3 d-flex align-items-center">This will be the time for everyone in the entire account.</Col>
          </Row>
          <Row>
            <Col className="col-6">
              <div className="my-3">
                Start week from:
                <SingleSelectDropdown keyName="startWeekFrom" options={this.state.startWeekFroms} />
              </div>
            </Col>
            <Col className="col-6 my-3 d-flex align-items-center">This will appear as the first day of the week in calendar section for everyone in the entire account.</Col>
          </Row>

          <div className="my-3">
            Email notifications:
            <div className="form-check d-flex">
              <input className="form-check-input" type="checkbox" value="" id='turnOffAllEmailNotifications' />
              <label className="form-check-label" htmlFor='turnOffAllEmailNotifications'>Turn off all email notifications for everyone in the entire account.</label>
            </div>
          </div>

          <div className="my-3">
            You have accepted the ProjHub Privacy Policy. 
            <a className="text-info ml-2">Learn more</a>
          </div>

          <div className="d-flex py-3 my-5 w-100">
            <Col className="col-1 px-0">
              <Button color="primary" type="submit" onClick={() => { }} style={{ width: '100%' }}>Update</Button>
            </Col>
            <Col className="col-1 px-1">
              <Button color="secondary" onClick={() => { }} style={{ width: '100%' }}>Reset</Button>
            </Col>
          </div>
        </CardBody>

      </React.Fragment>
    );
  }
}

export default Preferences;