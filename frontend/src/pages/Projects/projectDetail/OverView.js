import React, { Component } from 'react';
import { TabContent, TabPane, Collapse, NavLink, NavItem, CardText, Nav, Card, Row, Col, CardBody, CardTitle, CardSubtitle, CardHeader, CardImg, Container, Tooltip, Table } from "reactstrap";
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import ReactApexChart from 'react-apexcharts';

import { withRouter } from "react-router-dom";
import { withNamespaces } from 'react-i18next';
import { connect } from "react-redux";
import {
  showRightBar,
  hideRightBar
} from "../../../store/actions";

import classnames from "classnames";

import { Icons } from '../../../constants';

import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar8 from "../../../assets/images/users/avatar-8.jpg";
import avatar5 from "../../../assets/images/users/avatar-5.jpg";

class OverView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabId: 0
    }
  }

  toggleTab = (tabId) => {
    this.setState({ activeTabId: tabId })
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <CardHeader className="p-3">
            <Row className="d-flex justify-content-center">
              <span className="text-dark mx-2 font-size-24"><b>Onboarding project</b></span>
            </Row>
            <Row className="d-flex justify-content-center my-2">
              <div className="d-flex align-items-center">
                <span className="badge badge-secondary text-dark d-flex justify-content-center align-items-center mr-1 font-size-12" style={{ height: 20 }}>Uncategorized</span>
                <span className="text-secondary font-size-16 mx-2">|</span>
              </div>

              <div className="d-flex align-items-center" style={{ cursor: "pointer" }}>
                <i className={`${Icons.tasks} font-size-14 text-success`}></i>
                <span className="text-dark font-size-14 ml-1">Active</span>
                <span className="text-secondary font-size-16 mx-2">|</span>
              </div>

              <div className="d-flex align-items-center">
                <span className="text-secondary font-size-14">Oct 15 {'->'} Nov 29</span>
                <span className="text-secondary font-size-16 mx-2">|</span>
              </div>

              <div className="d-flex align-items-center" style={{ cursor: "pointer" }}>
                <i className={`${Icons.group} font-size-16`}></i>
                <span className="text-dark font-size-14 ml-1">5</span>
                <span className="text-secondary font-size-16 mx-2">|</span>
              </div>
              <div className="d-flex align-items-center" style={{ cursor: "pointer" }}>
                <i className={`${Icons.detail} font-size-14`}></i>
              </div>
            </Row>
          </CardHeader>

          <CardBody>
            <Nav tabs className="d-flex justify-content-center">
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  className={classnames({
                    active: this.state.activeTabId === 0
                  })}
                  onClick={() => {
                    this.toggleTab(0);
                  }}
                >
                  <div className="d-flex align-items-center">
                    <i className={`${Icons.summary} font-size-16`}></i>
                    <span>Summary</span>
                  </div>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  className={classnames({
                    active: this.state.activeTabId === 1
                  })}
                  onClick={() => {
                    this.toggleTab(1);
                  }}
                >
                  <div className="d-flex align-items-center">
                    <i className={`${Icons.report} font-size-16`}></i>
                    <span>Activities</span>
                  </div>
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent activeTab={this.state.activeTabId}>
              <TabPane tabId={0}>
                <Row>
                  <Col sm="12">
                    <SummaryTab />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId={1}>
                <Row>
                  <Col sm="12">
                    <ActivitiesTab />
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </CardBody>
        </Container>
      </React.Fragment >
    );
  }
}

class SummaryTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectProgress: {
        series: [
          { name: "series1", data: [30, 30, 0] }
        ],
        options: {
          labels: ["Oct 14", "Oct 17(Today)", "Nov"],
          chart: {
            toolbar: "false",
          },
          dataLabels: {
            enabled: !1
          },
          colors: ["#74788d"],
          stroke: {
            // curve: "smooth",
            width: 3
          }
        }
      },
      tasks: {
        series: [1, 1, 7, 13],
        options: {
          labels: ["Overdue", "Today", "Upcoming", "No date set"],
          colors: ["#f46a6a", "#50a5f1", "#f1b44c", "#74788d"],
          legend: { show: !1 },
          plotOptions: {
            pie: {
              donut: {
                size: "50%"
              }
            },
          }
        }
      },
      timeOnTasks: {
        options: {
          chart: {
            type: "bar",
            stacked: !0,
            toolbar: {
              show: 1
            },
            zoom: {
              enabled: !0
            }
          },
          plotOptions: {
            bar: {
              horizontal: !1,
              columnWidth: "50%",
              // endingShape: "rounded"
            }
          },
          dataLabels: {
            enabled: !1
          },
          xaxis: {
            categories: ["E", "L", "V/N"]
          },
          colors: ["#f46a6a", "#50a5f1", "#f1b44c"],
          // legend: {
          //   position: "bottom"
          // },
          fill: {
            opacity: 1
          }
        },
        series: [{
          name: "Estimated",
          data: [0, 0, 0]
        }, {
          name: "Logged",
          data: [0, 6, 0]
        }, {
          name: "Void/None",
          data: [0, 0, 4.5]
        }]
      },
      timesheets: {
        series: [8.5, 0, 5.5, 0, 14.5],
        options: {
          labels: ["Billable", "Billed", "Non-billable", "Void", "None"],
          colors: ["#f1b44c", "#f46a6a", "#74788d", "#50a5f1", "#343a40"],
          legend: { show: !1 },
          plotOptions: {
            pie: {
              donut: {
                size: "50%"
              }
            },
          }
        }
      },
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="bg-white border">
          <ReactApexChart series={this.state.projectProgress.series} options={this.state.projectProgress.options} type="line" height={220} />
        </div>
        <div className="d-flex my-3">
          <Col className="col-6 pl-0 pr-2">
            <div className="d-flex bg-white border" style={{ minHeight: 223 }}>
              <div className="table-responsive">
                <Table className="table mb-0">
                  <thead>
                    <tr>
                      <th>Tasks(22) <i className={`${Icons.helpS}`}></i></th>
                      <th>My</th>
                      <th>All</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><i className={`${Icons.taskColor} text-danger`}></i>Overdue</td>
                      <td>-</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><i className={`${Icons.taskColor} text-info`}></i>Today</td>
                      <td>-</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><i className={`${Icons.taskColor} text-warning`}></i>Upcoming</td>
                      <td>3</td>
                      <td>7</td>
                    </tr>
                    <tr>
                      <td><i className={`${Icons.taskColor} text-secondary`}></i>No date set</td>
                      <td>-</td>
                      <td>13</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div id="donut-chart" className="apex-charts d-flex align-items-center">
                <ReactApexChart options={this.state.tasks.options} series={this.state.tasks.series} type="donut" height={150} />
              </div>
            </div>
          </Col>
          <Col className="col-6 pl-2 pr-0">
            <div className="d-flex bg-white border" style={{ minHeight: 223 }}>
              <div className="table-responsive">
                <Table className="table mb-0">
                  <thead>
                    <tr>
                      <th>Time on tasks <i className={`${Icons.helpS}`}></i></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><i className={`${Icons.taskColor} text-danger`}></i>Total estimated time</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td><i className={`${Icons.taskColor} text-info`}></i>Total logged time</td>
                      <td>6h 0m</td>
                    </tr>
                    <tr>
                      <td><i className={`${Icons.taskColor} text-warning`}></i>Void/None time</td>
                      <td>4h 31m</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div id="donut-chart" className="apex-charts d-flex align-items-center">
                <ReactApexChart options={this.state.timeOnTasks.options} series={this.state.timeOnTasks.series} type="bar" height={200} />
              </div>
            </div>
          </Col>
        </div>

        <div className="d-flex my-3">
          <Col className="col-6 pl-0 pr-2">
            <div className="d-flex bg-white border" style={{ minHeight: 223 }}>
              <div className="table-responsive">
                <Table className="table mb-0">
                  <thead>
                    <tr>
                      <th>Milestones(6)</th>
                      <th>My</th>
                      <th>All</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><i className={`${Icons.taskColor} text-danger`}></i>Overdue</td>
                      <td>-</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><i className={`${Icons.taskColor} text-info`}></i>Today</td>
                      <td>-</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><i className={`${Icons.taskColor} text-warning`}></i>Upcoming</td>
                      <td>-</td>
                      <td>6</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div id="donut-chart" className="apex-charts d-flex align-items-center">
                <ReactApexChart options={this.state.tasks.options} series={[0, 0, 6]} type="donut" height={150} />
              </div>
            </div>

            <div className="d-flex bg-white border mt-3" style={{ minHeight: 223 }}>
              <div className="table-responsive">
                <Table className="table mb-0">
                  <thead>
                    <tr>
                      <th>Events(2)</th>
                      <th>My</th>
                      <th>All</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><i className={`${Icons.taskColor} text-info`}></i>Today</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td><i className={`${Icons.taskColor} text-warning`}></i>Upcoming</td>
                      <td>-</td>
                      <td>2</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div id="donut-chart" className="apex-charts d-flex align-items-center">
                <ReactApexChart options={this.state.tasks.options} series={[0, 0, 2]} type="donut" height={150} />
              </div>
            </div>
          </Col>

          <Col className="col-6 pl-2 pr-0">
            <div className="bg-white border mb-0" style={{ minHeight: 463 }}>
              <div className="table-responsive">
                <Table className="table mb-0">
                  <thead>
                    <tr>
                      <th>Timesheets summary</th>
                      <th>My</th>
                      <th>All</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><i className={`${Icons.taskColor} text-warning`}></i>Billable</td>
                      <td>-</td>
                      <td>8h 30m</td>
                    </tr>
                    <tr>
                      <td><i className={`${Icons.taskColor} text-danger`}></i>Billed</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td><i className={`${Icons.taskColor} text-secondary`}></i>Non-billable</td>
                      <td>-</td>
                      <td>5h 30m</td>
                    </tr>
                    <tr>
                      <td><i className={`${Icons.taskColor} text-info`}></i>Void</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td><i className={`${Icons.taskColor} text-dark`}></i>None</td>
                      <td>-</td>
                      <td>14h 31m</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="d-flex">
                <div className="col-8 d-flex align-items-center">
                  <div className="ml-4">
                    <span className="text-secondary">Total logged</span>
                    <br />
                    <span className="text-dark font-size-16"><b>28h 31m</b></span>
                  </div>
                  <div className="ml-4">
                    <span className="text-secondary">My logged</span>
                    <br />
                    <span className="text-dark font-size-16"><b>0h 0m</b></span>
                  </div>
                </div>
                <div id="donut-chart" className="col-4 apex-charts d-flex align-items-center">
                  <ReactApexChart options={this.state.timesheets.options} series={this.state.timesheets.series} type="donut" height={150} />
                </div>
              </div>
            </div>
          </Col>

        </div>
      </React.Fragment>
    )
  }
}

class ActivitiesTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true // processing to array later
    }
  }

  toggleCollapse = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  onItem = (e) => {

  }

  render() {
    return (
      <Card>
        <CardHeader className="p-3 d-flex font-size-16 bg-white" id="headingOne" onClick={this.toggleCollapse}>
          <span style={{ cursor: "pointer" }} className="text-dark mx-2">Oct 15</span>
        </CardHeader>

        <Collapse isOpen={this.state.collapse}>
          <CardBody>
            <Row>
              <Col className="col-1 d-flex justify-content-center">
                <CardImg src={avatar1} alt="Skote" className="rounded-circle avatar-xs" style={{ width: 40, height: 40 }} />
              </Col>
              <Col className="col-10 px-0">
                <span><b>Segunfunmi Oyedele</b> - Tasks - Added task in <b>List of tasks</b></span>
                <Col className="col-6 d-flex px-0 py-2">
                  <Col className="col-1 d-flex align-items-center justify-content-center border">
                    <input type="checkbox" value="" id='task3' onClick={(e) => this.onItem(e)} style={{ cursor: "pointer" }} />
                  </Col>
                  <Col className="col-11 border">
                    <label className="form-check-label" htmlFor='task3' style={{ cursor: "pointer" }}>Third task</label>
                  </Col>
                </Col>
                <div className="d-flex align-items-center">
                  <i className={`${Icons.onboardingS}`}></i>
                  <span className="font-size-14 ml-2">Onboarding project</span>
                </div>
              </Col>
              <Col className="col-1">
                a day
                </Col>
            </Row>
            <hr className="my-2" />

            <Row>
              <Col className="col-1 d-flex justify-content-center">
                <CardImg src={avatar1} alt="Skote" className="rounded-circle avatar-xs" style={{ width: 40, height: 40 }} />
              </Col>
              <Col className="col-10 px-0">
                <span><b>Segunfunmi Oyedele</b> - Tasks - Added tasklist</span>
                <Col className="col-6 d-flex px-0 py-2" onClick={() => { }}>
                  <Col className="col-1 d-flex align-items-center justify-content-center border" style={{ cursor: "pointer" }}>
                    <i className={`${Icons.listOfTasks} font-size-18`}></i>
                  </Col>
                  <Col className="col-11 border">
                    <label className="form-check-label" htmlFor='task2' style={{ cursor: "pointer" }}>Second task</label>
                  </Col>
                </Col>
                <div className="d-flex align-items-center">
                  <i className={`${Icons.onboardingS}`}></i>
                  <span className="font-size-14 ml-2">Onboarding project</span>
                </div>
              </Col>
              <Col className="col-1">
                a day
                </Col>
            </Row>
            <hr className="my-2" />

            <Row>
              <Col className="col-1 d-flex justify-content-center">
                <CardImg src={avatar1} alt="Skote" className="rounded-circle avatar-xs" style={{ width: 40, height: 40 }} />
              </Col>
              <Col className="col-10 px-0">
                <span><b>Segunfunmi Oyedele</b> - Project - Assigned people to project</span>
                {
                  [
                    { photo: avatar1, name: 'Segunfunmi Oyedele' },
                    { photo: avatar2, name: 'Samantha Hanson' },
                    { photo: avatar3, name: 'Danial Craig' },
                    { photo: avatar5, name: 'Gabriel Pinto' },
                    { photo: avatar8, name: 'Amanda Walker' },
                  ].map((each, index) => {
                    return (
                      <Row key={index}>
                        <Col className="col-6 d-flex align-items-center px-3 py-2" onClick={() => { }} style={{ cursor: "pointer" }}>
                          <CardImg src={each.photo} alt="Skote" className="rounded-circle avatar-xs" style={{ width: 30, height: 30 }} />
                          <span className="ml-2">{each.name}</span>
                        </Col>
                      </Row>
                    )
                  })
                }
                <div className="d-flex align-items-center">
                  <i className={`${Icons.onboardingS}`}></i>
                  <span className="font-size-14 ml-2">Onboarding project</span>
                </div>
              </Col>
              <Col className="col-1">
                a day
                </Col>
            </Row>

          </CardBody>
        </Collapse>
      </Card>
    )
  }
}



const mapStateToProps = state => {
  return {
    
  };
};

export default connect(mapStateToProps, {
  showRightBar,
  hideRightBar
})(withRouter(withNamespaces()(OverView)));