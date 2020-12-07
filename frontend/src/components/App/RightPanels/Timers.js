import React, { Component } from "react";
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

class Timers extends Component {
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
                <h5 className="m-0">Timers</h5>
                <div>
                  <i className={`${Icons.helpS} font-size-22`} style={{ cursor: "pointer" }}></i>
                  <i className={`${Icons.closeS} font-size-24 ml-2`} style={{ cursor: "pointer" }} onClick={() => this.props.hideRightBar()}></i>
                </div>
              </div>
            </div>
            <hr className="my-0" />

            <div className="d-flex px-2 py-2">
              <Col className="col-1 d-flex justify-content-center align-items-center">
                <i className={`${Icons.pauseTimer} font-size-26 text-info`} style={{ cursor: "pointer" }}></i>
              </Col>
              <Col className="col-11">
                <span className="font-size-16 text-info">00:00:14</span>
                <br />
                <span className="font-size-12 text-secondary">Task:</span><span className="font-size-14 text-dark ml-2">Discuss requirements</span>
                <br />
                <i className={`${Icons.onboardingS}`}></i>
                <span className="font-size-12 text-secondary ml-2"><b>ProofHub HQ</b></span>
                <span className="font-size-14 text-secondary"> - Marketing</span>
              </Col>
            </div>
            <hr className="my-0" />

            <div className="d-flex px-2 py-2">
              <Col className="col-1 d-flex justify-content-center align-items-center">
                <i className={`${Icons.playTimer} font-size-26 text-secondary`} style={{ cursor: "pointer" }}></i>
              </Col>
              <Col className="col-8">
                <span className="font-size-16 text-secondary">00:04:10</span>
                <br />
                <span className="font-size-12 text-secondary">Task:</span><span className="font-size-14 text-dark ml-2">Discuss requirements</span>
                <br />
                <i className={`${Icons.onboardingS}`}></i>
                <span className="font-size-12 text-secondary ml-2"><b>ProofHub HQ</b></span>
                <span className="font-size-14 text-secondary"> - Marketing</span>
              </Col>
              <Col className="col-3 d-flex align-items-center">
                <Button className="btn btn-info btn-sm waves-effect waves-light" type="submit">Save time</Button>
              </Col>
            </div>
            <hr className="my-0" />

            {/* <div className="px-4 py-4 d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
                <i className={`${Icons.time} font-size-80`}></i>
                <br />
                <span className="font-size-14 text-secondary">See the timers you've started to record time here. Start and stop timers as you switch between what you're working on and save in timesheets.</span>
                <br />
                <a className="font-size-14 text-info">Learn how it works</a>
              </div> */}

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
})(withNamespaces()(Timers));
