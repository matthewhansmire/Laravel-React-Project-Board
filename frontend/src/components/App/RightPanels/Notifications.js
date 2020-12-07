import React, { Component } from "react";
import { TabContent, TabPane, Collapse, NavLink, NavItem, CardText, Nav, Card, Row, Col, CardBody, CardTitle, CardSubtitle, CardHeader, Container, Popover, PopoverHeader, PopoverBody, Tooltip } from "reactstrap";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

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

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'activities',
      markAsPopup: false
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  toggleMarkAsPopup = () => {
    this.setState({ markAsPopup: !this.state.markAsPopup })
  }

  render() {
    return (
      <React.Fragment>
        <div className="right-bar w-25">
          <div data-simplebar className="h-100" style={{ minHeight: '100vh' }}>

            <div className="rightbar-title px-3 py-2">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="m-0">Notifications</h5>
                <div>
                  <i className={`${Icons.preferences} font-size-22`} style={{ cursor: "pointer" }}></i>
                  <i className={`${Icons.helpS} font-size-22 ml-2`} style={{ cursor: "pointer" }}></i>
                  <i className={`${Icons.closeS} font-size-24 ml-2`} style={{ cursor: "pointer" }} onClick={() => this.props.hideRightBar()}></i>
                </div>
              </div>
            </div>

            <div className="px-3 py-2">
              <Row>
                <Col className="col-11 pr-0">
                  <Nav tabs>
                    <NavItem>
                      <NavLink style={{ cursor: "pointer" }} className={classnames({ active: this.state.activeTab === "activities" })} onClick={() => { this.toggle("activities"); }}>Activities</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink style={{ cursor: "pointer" }} className={classnames({ active: this.state.activeTab === "mentions" })} onClick={() => { this.toggle("mentions"); }}>Mentions</NavLink>
                    </NavItem>
                  </Nav>
                </Col>
                <Col className="col-1 px-0 d-flex align-items-center justify-content-center">                  
                  <Dropdown
                    isOpen={this.state.markAsPopup}
                    toggle={this.toggleMarkAsPopup}
                    className="d-flex align-items-center"
                  >
                    <DropdownToggle className="btn btn-md bg-white border-0 align-self-center" style={{ width: '100%' }} caret>
                      <i className={`${Icons.preferences} text-secondary font-size-16`} style={{ cursor: "pointer" }}></i>
                    </DropdownToggle>
                    <DropdownMenu right={true}>
                      <DropdownItem tag="a" href="#" className="d-flex align-items-center">
                        <i className={`${Icons.markAllAsRead} font-size-16 align-middle mr-1`}></i>
                        {this.props.t('Mark all as read')}
                      </DropdownItem>
                      <DropdownItem tag="a" href="#" className="d-flex align-items-center">
                        <i className={`${Icons.markAllAsUnread} font-size-16 align-middle mr-1`}></i>
                        {this.props.t('Mark all as unread')}
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </Col>
              </Row>

              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="activities" className="py-2">
                  <Row>
                    <Col className="col-12" className="d-flex">

                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-12">
                      <div className="px-4 py-4 d-flex flex-column justify-content-center align-items-center" style={{ height: '80vh' }}>
                        <i className={`${Icons.activities} font-size-80`}></i>
                        <br />
                        <span className="font-size-14 text-secondary">Get notified about all the activities happening in ProofHub here</span>
                      </div>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="mentions" className="py-2">
                  <Row>
                    <Col className="col-12">

                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-12">
                      <div className="px-4 py-4 d-flex flex-column justify-content-center align-items-center" style={{ height: '80vh' }}>
                        <i className={`${Icons.mentions} font-size-80`}></i>
                        <br />
                        <span className="font-size-14 text-secondary">Find the list of people who have mentioned you to address or loop you in a conversation here</span>
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
})(withNamespaces()(Notifications));
