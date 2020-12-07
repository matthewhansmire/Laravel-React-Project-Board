import React, { Component } from "react";
import { Row, Col, Container, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal } from 'reactstrap';

import { withRouter } from "react-router-dom";
import { withNamespaces } from 'react-i18next';

import { connect } from "react-redux";
import {
  showRightBar,
  hideRightBar
} from "../../../store/actions";

import avatar1 from "../../../assets/images/users/avatar-1.jpg";

import "../../../assets/scss/rightbar.scss";
import { Icons } from "../../../constants";

class LoggedTimeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="right-bar w-25">

          <div data-simplebar className="h-100">
            <div className="rightbar-title px-3 py-2">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="m-0">Logged time detail (Oct 14)</h5>
                <div>
                  <i className={`${Icons.dotsVertical} font-size-22`} style={{ cursor: "pointer" }}></i>
                  <i className={`${Icons.closeS} font-size-24 ml-2`} style={{ cursor: "pointer" }} onClick={() => this.props.hideRightBar()}></i>
                </div>
              </div>
            </div>

            <Col className="d-flex py-3">
              <Col className="col-6 d-flex align-items-center border">
                <CardImg src={avatar1} alt="Skote" className="rounded-circle avatar-xs" style={{ width: 40, height: 40 }} />
                <div className="ml-2">
                  <span>Logged by:</span>
                  <br />
                  <span className="font-size-14"><b>Danial Craig</b></span>
                </div>
              </Col>
              <Col className="col-6 py-2 border">
                <span>Time logged:</span>
                <br />
                <span className="font-size-14"><b>10h</b></span>
                <br />
                <span className="font-size-14"><b>Total time</b></span>
                <br />
                <span className="badge badge-secondary text-white d-flex justify-content-center align-items-center" style={{ width: 40, height: 15 }}>NONE</span>
              </Col>
            </Col>

            <Col className="d-flex py-3">
              <Col className="col-4">
                Description:
              </Col>
              <Col className="col-8">
                <span><b>Milestone completed /* Sample */</b></span>
              </Col>
            </Col>
            <hr className="my-1" />

            <Col className="d-flex py-3">
              <Col className="col-4">
                Project:
              </Col>
              <Col className="col-8 d-flex align-items-center">
                <i className={`${Icons.onboardingS} font-size-14 mr-2`}></i>
                <span><b>Onboarding project</b></span>
              </Col>
            </Col>
            <hr className="my-1" />

            <Col className="d-flex py-3">
              <Col className="col-4">
                Timesheet:
              </Col>
              <Col className="col-8">
                <span><b>Weekly timesheet</b></span>
              </Col>
            </Col>
            <hr className="my-1" />

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
})(withNamespaces()(LoggedTimeDetail));
