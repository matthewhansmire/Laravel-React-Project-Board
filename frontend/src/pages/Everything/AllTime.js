import React, { Component } from 'react';

import { Row, Col, Container, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal } from 'reactstrap';

import { withNamespaces } from 'react-i18next';
import { connect } from "react-redux";
import {
  showRightBar,
  hideRightBar,
  getAllTimesheets
} from "../../store/actions";

import avatar1 from "../../assets/images/users/avatar-1.jpg";

import { Icons } from '../../constants';

import TagItem from '../../components/App/TagItem';

class AllTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagItems: [
        {
          id: 0,
          label: 'Projects',
          icon: Icons.projects,
          value: 'All'
        },
        {
          id: 1,
          label: 'Date range',
          icon: Icons.calendar,
          value: 'Oct 1-Oct 15'
        },
        {
          id: 2,
          label: 'Status',
          icon: Icons.status,
          value: 'All'
        },
        {
          id: 3,
          label: 'Logged by',
          icon: Icons.loggedBy,
          value: 'All'
        },
        {
          id: 4,
          label: 'Group by',
          icon: Icons.groupBy,
          value: 'Project'
        },
        {
          id: 5,
          label: 'Order by',
          icon: Icons.orderBy,
          value: 'Asc'
        }
      ],

      allTimesheets: []
    }
  }

  componentDidMount() {
    this.props.getAllTimesheets();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.allTimesheets != this.props.allTimesheets) {

      this.setState({
        allTimesheets: this.props.allTimesheets
      });

      console.log('alltimesheets', this.props.allTimesheets)
    }
  }

  onItem = () => {
    this.props.showRightBar('loggedTimeDetail');
  }

  render() {
    return (
      <React.Fragment>
        <CardHeader className="px-0 py-3 font-size-16 d-flex align-items-center justify-content-between" id="headingTwo">
          <button type="button" className="btn btn-dark waves-effect waves-light" onClick={() => this.props.showRightBar('time')}><i className="bx bx-plus font-size-16 align-middle mr-2"></i> Add</button>
          <div className="d-flex">
            {
              this.state.tagItems.map((each) => (
                <TagItem key={each.id} item={each} />
              ))
            }
            <div className="d-flex align-items-center mx-2">
              <div className="d-flex align-items-center justify-content-center" style={{ height: '60%', borderLeft: '1px solid grey' }}>
                <i className={`${Icons.dotsVertical} font-size-20 align-middle`} style={{ cursor: "pointer" }}></i>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardBody className="pt-0 bg-white">
          {
            this.state.allTimesheets.map((each, index) => {
              if(each.timesheets.length == 0) return null;
              return (
                <div key={index}>
                  <Col className="px-0 pt-4 pb-2">
                    <span className="font-size-14"><b>Project - {each.title}</b></span>
                    <br />
                  </Col>
                  {
                    each.timesheets.map((eachTimesheet, index) => {
                      if(eachTimesheet.times.length == 0) return null;
                      return (
                        <div key={index} className="mb-3">
                          <span className="font-size-14 "><b>Timesheet - {eachTimesheet.title}</b></span>
                          {
                            eachTimesheet.times.map((eachTime, index) => {
                              return (
                                <div key={index}>
                                  <hr className="my-1"></hr>
                                  <Row onClick={() => this.onItem()} style={{ cursor: "pointer" }}>
                                    <Col className="col-2 d-flex align-items-center pl-2">
                                      <CardImg src={avatar1} alt="Skote" className="rounded-circle avatar-xs" style={{ width: 20, height: 20 }} />
                                      <span className="font-size-16 text-dark ml-2">{eachTime.creator?.name}</span>
                                    </Col>
                                    <Col className="col-1 d-flex align-items-center">
                                      <span className="font-size-14">{eachTime.date}</span>
                                    </Col>
                                    <Col className="col-1 d-flex align-items-center">
                                      <span className="font-size-14">{eachTime.hours}h {eachTime.minutes}m</span>
                                    </Col>
                                    <Col className="col-4 d-flex align-items-center">
                                      <span className="font-size-14 ml-3">{eachTime.title}</span>
                                    </Col>
                                    <Col className="col-3">
                                      <div className="d-flex align-items-center">
                                        <span className="badge badge-secondary text-white d-flex justify-content-center align-items-center" style={{ width: 40, height: 15 }}>TASK</span>
                                        <span className="font-size-14 text-dark ml-1">{eachTime.task?.title}</span>
                                      </div>
                                      <span className="text-secondary"><i>Tasklist</i> - { eachTime.tasklist?.name }</span>
                                    </Col>
                                    <Col className="col-1 d-flex align-items-center justify-content-center">
                                      <span className="font-size-14">{eachTime.status?.name}</span>
                                    </Col>
                                  </Row>
                                </div>
                              )
                            })
                          }
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </CardBody>

      </React.Fragment >
    );
  }
}

const mapStateToProps = state => {
  return {
    allTimesheets: state.Time.allTimesheets
  };
};

export default connect(mapStateToProps, {
  showRightBar,
  hideRightBar,
  getAllTimesheets
})(withNamespaces()(AllTime));