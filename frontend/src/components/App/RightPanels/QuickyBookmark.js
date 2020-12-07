import React, { Component } from "react";
import { FormGroup } from "reactstrap";
import { TabContent, TabPane, Collapse, NavLink, NavItem, CardText, Nav, Card, Row, Col, CardBody, CardTitle, CardSubtitle, CardHeader, Container } from "reactstrap";

import { withRouter } from "react-router-dom";
import { withNamespaces } from 'react-i18next';

import { connect } from "react-redux";
import {
  showRightBar,
  hideRightBar
} from "../../../store/actions";

import classnames from "classnames";

import "../../../assets/scss/rightbar.scss";
import { Icons } from "../../../constants";

import SingleSelectDropdown from '../SingleSelectDropdown'

class QuickyBookmark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'quickies',
      quickyStatusOptions: [
        "Completed",
        "Incomplete",
      ],
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }


  render() {
    return (
      <React.Fragment>
        <div className="right-bar" style={{ width: '40vw' }}>

          <div data-simplebar className="h-100" style={{ minHeight: '100vh' }}>
            <div className="rightbar-title px-3 py-2">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="m-0">Quickies & Bookmarks</h5>
                <div>
                  <i className={`${Icons.helpS} font-size-22`} style={{ cursor: "pointer" }}></i>
                  <i className={`${Icons.closeS} font-size-24 ml-2`} style={{ cursor: "pointer" }} onClick={() => this.props.hideRightBar()}></i>
                </div>
              </div>
            </div>
            <div className="px-3 py-2">
              <Nav tabs>
                <NavItem>
                  <NavLink style={{ cursor: "pointer" }} className={classnames({ active: this.state.activeTab === "quickies" })} onClick={() => { this.toggle("quickies"); }}>Quickies</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{ cursor: "pointer" }} className={classnames({ active: this.state.activeTab === "bookmarks" })} onClick={() => { this.toggle("bookmarks"); }}>Bookmarks</NavLink>
                </NavItem>
              </Nav>

              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="quickies" className="py-2">
                  <Row>
                    <Col className="col-12" className="d-flex">
                      <Col className="col-7 p-0">
                        <input className="form-control border font-size-14" type="text" defaultValue="" placeholder="Add quickie" />
                      </Col>
                      <Col className="col-3 p-0">
                        <input className="form-control border p-1" type="date" defaultValue="" id="example-date-input" />
                      </Col>
                      <Col className="col-2 p-0">
                        <SingleSelectDropdown keyName="quickyStatus" options={this.state.quickyStatusOptions} itemIconStyle="checkBox" />
                      </Col>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-12">
                      <div className="px-4 py-4 d-flex flex-column justify-content-center align-items-center" style={{ height: '80vh' }}>
                        <i className={`${Icons.quickyBookmark} font-size-80`}></i>
                        <br />
                        <span className="font-size-14 text-secondary">Use quickies as your personal sticky notes to jot down your quick stuff and create checklists</span>
                      </div>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="bookmarks" className="py-2">
                  <Row>
                    <Col className="col-12">

                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-12">
                      <div className="px-4 py-4 d-flex flex-column justify-content-center align-items-center" style={{ height: '80vh' }}>
                        <i className={`${Icons.quickyBookmark} font-size-80`}></i>
                        <br />
                        <span className="font-size-14 text-secondary">Find the bookmarked discussions, tasklists, notes, notebooks, timesheets, and file folders you work on frequently here</span>
                        <br />
                        <a className="font-size-14 text-info">Learn how it works</a>
                      </div>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </div>

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
})(withNamespaces()(QuickyBookmark));
