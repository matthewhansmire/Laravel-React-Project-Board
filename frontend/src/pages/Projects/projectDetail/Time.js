import React, { Component } from 'react';
import { Row, Col, Container, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Button, Media, Progress, Table } from 'reactstrap';
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
  hideRightBar,
  setRightBarParam,

  getAllProjects,
  getProjectTimesheets
} from "../../../store/actions";

import moment from 'moment';

import { Icons } from '../../../constants';

import defaultUserImg from '../../../assets/images/defaultUserImg.png';

import SingleSelectDropdown from '../../../components/App/SingleSelectDropdown';
import TagItem from '../../../components/App/TagItem';

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addPopup: false,      
      tagItems: [
        {
          id: 0,
          label: 'Date range',
          icon: Icons.calendar,
          value: 'All'
        },
        {
          id: 1,
          label: 'Status',
          icon: Icons.tasks,
          value: 'All'
        },
        {
          id: 2,
          label: 'Logged by',
          icon: Icons.loggedBy,
          value: 'All'
        },
        {
          id: 3,
          label: 'Group by',
          icon: Icons.groupBy,
          value: 'Project'
        },
        {
          id: 4,
          label: 'Order by',
          icon: Icons.orderBy,
          value: 'Asc'
        }
      ],

      statusOptions: [
        {
          id: 0,
          name: 'Active',
          value: 'active'
        },
        {
          id: 1,
          name: 'Archived',
          value: 'archived'
        }
      ],
      selectedStatus: '',

      timesheets: [],
      activeTimesheet: null,
    }
  }

  componentDidMount() {
    var param = { project_id: this.props.match.params.id };
    if (param) {
      this.props.getProjectTimesheets(param);
    }

    this.props.getAllProjects();

    this.setState({selectedStatus: this.state.statusOptions[0]});
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.projectTimesheets != this.props.projectTimesheets) {

      this.setState({
        timesheets: this.props.projectTimesheets,
        activeTimesheet: this.props.projectTimesheets.find(each=>each.status == this.state.statusOptions[0].value)
      });
    }
  }

  toggleAddPopup = () => {
    this.setState({
      addPopup: !this.state.addPopup
    })
  }

  onChangeStatus = (status) => {
    this.setState({selectedStatus: status});
  }

  onViewMode = () => {
    var viewMode = '';
    if (this.state.viewMode === 'list') viewMode = 'board';
    else viewMode = 'list';
    this.setState({ viewMode: viewMode });
  }

  onList = (list) => {
    this.setState({ activeListId: list.id })
  }

  onAdd = (itemName) => {    
    if (itemName === 'timesheet') {
      var param = {
        project: this.props.allProjects.find(each => each.id == this.props.match.params.id)
      }
      this.props.setRightBarParam(param);
    }
    else if (itemName === 'time') {
      var param = {
        project: this.props.allProjects.find(each => each.id == this.props.match.params.id),
        timesheet: this.state.activeTimesheet,
        loggedTime: this.getLoggedTime(this.state.activeTimesheet.times, 'obj'),
        date: moment().format()
      }
      this.props.setRightBarParam(param);
    }
    else if (itemName === 'timer') {

    }

    this.props.showRightBar(itemName);
  }

  getLoggedTime = (times, retType) => {
    var hours = 0;
    var minutes = 0;
    var quotient = 0;
    var remainder = 0;
    if (times) {
      times.forEach(each => {
        if (each.hours) hours += each.hours;
        if (each.minutes) minutes += each.minutes;
      })
      quotient = Math.floor(minutes / 60);
      remainder = minutes % 60;
    }

    if(retType === 'str'){
      return hours + quotient + 'h ' + remainder + 'm';
    }
    else if(retType === 'obj'){
      return {
        hours: hours + quotient,
        minutes: remainder
      }
    }
  }

  getBilledTime = (times) => {
    var hours = 0;
    var minutes = 0;
    var quotient = 0;
    var remainder = 0;
    if (times) {
      times.forEach(each => {
        if (each.status?.name === 'Billed') {
          if (each.hours) hours += each.hours;
          if (each.minutes) minutes += each.minutes;
        }
      })
      quotient = Math.floor(minutes / 60);
      remainder = minutes % 60;
    }

    return hours + quotient + 'h ' + remainder + 'm';
  }

  getBillableTime = (times) => {
    var hours = 0;
    var minutes = 0;
    var quotient = 0;
    var remainder = 0;

    if (times) {
      times.forEach(each => {
        if (each.status?.name === 'Billable') {
          if (each.hours) hours += each.hours;
          if (each.minutes) minutes += each.minutes;
        }
      })
      quotient = Math.floor(minutes / 60);
      remainder = minutes % 60;
    }

    return hours + quotient + 'h ' + remainder + 'm';
  }

  getNonBillableTime = (times) => {
    var hours = 0;
    var minutes = 0;
    var quotient = 0;
    var remainder = 0;

    if (times) {
      times.forEach(each => {
        if (each.status?.name === 'Non-billable') {
          if (each.hours) hours += each.hours;
          if (each.minutes) minutes += each.minutes;
        }
      })
      quotient = Math.floor(minutes / 60);
      remainder = minutes % 60;
    }

    return hours + quotient + 'h ' + remainder + 'm';
  }

  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Row>
            <Col id="leftPanel" className="col-2 border">
              <CardHeader className="px-0 py-3 font-size-16 d-flex align-items-center justify-content-between" id="headingLeft">
                <Dropdown
                  isOpen={this.state.addPopup}
                  toggle={this.toggleAddPopup}
                  className="d-flex align-items-center"
                >
                  <DropdownToggle className="bg-dark border-0 align-self-center" style={{ width: '100%' }} caret>
                    <i className="bx bx-plus font-size-16 align-middle mr-2"></i> Add
                    </DropdownToggle>
                  <DropdownMenu left="true">
                    <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={() => this.onAdd('timesheet')}>
                      <i className={`${Icons.timesheet} font-size-24 mr-2`}></i>
                      {this.props.t('Timesheet')}
                    </DropdownItem>
                    <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={() => this.onAdd('time')}>
                      <i className={`${Icons.time} font-size-24 mr-2`}></i>
                      {this.props.t('Time')}
                    </DropdownItem>
                    <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={() => this.onAdd('timer')}>
                      <i className={`${Icons.timeFive} font-size-24 mr-2`}></i>
                      {this.props.t('Start a timer')}
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <i className={`${Icons.filterAlt} font-size-20 align-middle`} style={{ cursor: "pointer" }} onClick={() => { }}></i>
              </CardHeader>

              
                <div id="timesheetstatus" className="d-flex align-items-center" style={{ backgroundColor: '#eee', width: 'fit-content' }}>
                  <i className={`${Icons.projects} font-size-16 ml-2`} style={{ cursor: "pointer" }}></i>
                  <SingleSelectDropdown keyName="timesheetstatus" options={this.state.statusOptions} itemIconStyle="checkBox" bgColor='#eee' selectedOption={this.state.statusOptions[0]} left onChange={this.onChangeStatus} />
                </div>
              
                {
                  this.state.timesheets.map((each, index) => {
                    if(each.status != this.state.selectedStatus.value) return null;

                    let loggedTime = this.getLoggedTime(each.times, 'obj');
                    return (
                      <div key={index}>
                        <div className="pt-3">
                          <span className={`font-size-14 ${this.state.activeTimesheet?.id == each.id ? 'text-info' : null}`} onClick={() => this.setState({ activeTimesheet: each })} style={{ cursor: "pointer" }}>{each.title}</span>
                          <br />
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="font-size-12">{loggedTime.hours}h {loggedTime.minutes}m / {each.hours}h {each.minutes}m</span>
                          </div>
                        </div>
                        <hr className="my-2" />
                      </div>
                    )
                  })
                }

            </Col>

            <Col id="rightPanel" className="col-10 border">
              <CardHeader className="px-0 py-3 font-size-16 d-flex align-items-center justify-content-end" id="headingRight">
                <div className="d-flex align-items-center">
                  {
                    this.state.tagItems.map((each) => (
                      <TagItem key={each.id} item={each} />
                    ))
                  }
                  <i className={`${Icons.dotsVertical} font-size-16`} style={{ cursor: "pointer" }}></i>
                </div>
              </CardHeader>
              <CardHeader className="px-0 py-3 font-size-16 d-flex">
                <div className="px-1" style={{ width: '20%' }}>
                  <Card className="mini-stats-wid">
                    <CardBody>
                      <Media>
                        <Media body>
                          <p className="text-dark font-weight-medium">{this.state.activeTimesheet?.hours}h {this.state.activeTimesheet?.minutes}m</p>
                          <h4 className="mb-0 font-size-12" style={{ color: '#888' }}>Estimated time</h4>
                        </Media>
                      </Media>
                    </CardBody>
                  </Card>
                </div>
                <div className="px-1" style={{ width: '20%' }}>
                  <Card className="mini-stats-wid">
                    <CardBody>
                      <Media>
                        <Media body>
                          <p className="text-dark font-weight-medium">{this.getLoggedTime(this.state.activeTimesheet?.times, 'str')}</p>
                          <h4 className="mb-0 font-size-12" style={{ color: '#888' }}>Total logged time</h4>
                        </Media>
                      </Media>
                    </CardBody>
                  </Card>
                </div>
                <div className="px-1" style={{ width: '20%' }}>
                  <Card className="mini-stats-wid">
                    <CardBody>
                      <Media>
                        <Media body>
                          <p className="text-dark font-weight-medium">{this.getBilledTime(this.state.activeTimesheet?.times)}</p>
                          <h4 className="mb-0 font-size-12" style={{ color: '#888' }}>Billed time</h4>
                        </Media>
                      </Media>
                    </CardBody>
                  </Card>
                </div>
                <div className="px-1" style={{ width: '20%' }}>
                  <Card className="mini-stats-wid">
                    <CardBody>
                      <Media>
                        <Media body>
                          <p className="text-dark font-weight-medium">{this.getBillableTime(this.state.activeTimesheet?.times)}</p>
                          <h4 className="mb-0 font-size-12" style={{ color: '#888' }}>Billable time</h4>
                        </Media>
                      </Media>
                    </CardBody>
                  </Card>
                </div>
                <div className="px-1" style={{ width: '20%' }}>
                  <Card className="mini-stats-wid">
                    <CardBody>
                      <Media>
                        <Media body>
                          <p className="text-dark font-weight-medium">{this.getNonBillableTime(this.state.activeTimesheet?.times)}</p>
                          <h4 className="mb-0 font-size-12" style={{ color: '#888' }}>Non-billable time</h4>
                        </Media>
                      </Media>
                    </CardBody>
                  </Card>
                </div>
              </CardHeader>

              <CardBody className="px-0 py-1">
                <div className="table-responsive">
                  <Table className="table mb-0">
                    <thead>
                      <tr>
                        <th className="text-center">Creator</th>
                        <th className="text-center">Date</th>
                        <th className="text-center">Time logged</th>
                        <th className="text-center">Description</th>
                        <th className="text-center">Task</th>
                        <th className="text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.activeTimesheet?.times.map((each, index) => {
                          return (
                            <tr key={index}>
                              <td><CardImg src={each.creator?.img ? each.creator?.img : defaultUserImg} alt="Skote" className="rounded-circle avatar-xs mx-2" style={{ width: 20, height: 20 }} />{each.creator?.name}</td>
                              <td className="text-center">{each.date}</td>
                              <td className="text-center">{each.hours}h {each.minutes}m</td>
                              <td className="text-center">{each.desc}</td>
                              <td className="text-center">{each.title}</td>
                              <td className="text-center">{each.status?.name}</td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </Table>
                </div>

              </CardBody>
            </Col>
          </Row>

        </Container>

      </React.Fragment >
    );
  }
}

const mapStateToProps = state => {
  return {
    allProjects: state.Project.allProjects,
    projectTimesheets: state.Time.projectTimesheets
  };
};

export default connect(mapStateToProps, {
  showRightBar,
  hideRightBar,
  setRightBarParam,
  getAllProjects,
  getProjectTimesheets
})(withRouter(withNamespaces()(Time)));