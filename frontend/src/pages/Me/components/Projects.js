import React, { Component } from 'react';
import { Col, Row, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Container, Badge } from "reactstrap";

import { withRouter } from "react-router-dom";
import { withNamespaces } from 'react-i18next';
import { connect } from "react-redux";
import {
  getMyProjects
} from "../../../store/actions";

import moment from 'moment'

import { Icons } from '../../../constants';
import TagItem from '../../../components/App/TagItem';
import ItemPopup from './ItemPopup';

import { calculateDaysBetweenDates, getInitial } from '../../../utils';

import defaultUserImg from '../../../assets/images/defaultUserImg.png';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false,
      tagItems: [
        {
          id: 0,
          label: 'Status',
          icon: Icons.tasks,
          value: 'All'
        },
        {
          id: 1,
          label: 'Category',
          icon: Icons.projCategory,
          value: 'All'
        },
        {
          id: 2,
          label: 'Colors',
          icon: Icons.onboardingS,
          value: 'All'
        }
      ],

      itemPopup: false,
      itemPopupPosition: '',
      selectedProject: ''
    }
  }

  componentDidMount() {
    // this.props.getMyProjects();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.myProjects != this.props.myProjects) {
      this.setState({ refresh: !this.state.refresh });
    }
  }

  toggleItemPopup = (e, project) => {
    this.setState({
      itemPopup: !this.state.itemPopup,
      itemPopupPosition: { x: e.clientX, y: e.clientY },
      selectedProject: project
    })
  }

  render() {
    return (
      <React.Fragment>
        <Card className="mb-1 bg-white " style={{ minHeight: 200 }}>
          <CardHeader className="p-3 font-size-16 bg-white d-flex align-items-center justify-content-between" id="headingTwo">
            <span className="text-dark mx-2">Projects</span>
            <div className="d-flex">
              {
                this.state.tagItems.map((each) => (
                  <TagItem key={each.id} item={each} />
                ))
              }
            </div>
          </CardHeader>
          <CardBody className="pt-0 bg-white">
            <Row className="font-weight-bold">
              <Col className="col-5">Title</Col>
              <Col className="col-3">Date</Col>
              <Col className="col-1">Status</Col>
              <Col className="col-1">Manager</Col>
              <Col className="col-2">Assignee</Col>
            </Row>
            {
              this.props.myProjects.length > 0 && this.props.myProjects.map((each, index) => (
                <Row key={index} className="justify-content-around align-items-center my-3" onClick={(e) => this.toggleItemPopup(e, each)} style={{ cursor: "pointer" }}>
                  <Col className="col-5 d-flex align-items-center">
                    <i className={`${Icons.star}`}></i>
                    <i className={`${Icons.onboardingS} ml-2`} style={{ color: each.color?.code }}></i>
                    <span className="font-size-14 ml-2">{each.title}</span>
                    {
                      each.start_date &&
                      <Badge color='warning' className="ml-3">{calculateDaysBetweenDates(each.start_date, moment().format('YYYY-MM-DD'))} days</Badge>
                    }
                  </Col>
                  <Col className="col-3">
                    <span className="font-size-14">{each.start_date} {'->'} {each.end_date}</span>
                  </Col>
                  <Col className="col-1">
                    <span className="font-size-14">{each.status?.name}</span>
                  </Col>
                  <Col className="col-1 d-flex">
                    {
                      each.manager &&
                      <>
                        <CardImg src={each.manager.img ? each.manager.img : defaultUserImg} alt="Skote" className="rounded-circle avatar-xs ml-2" style={{ width: 20, height: 20 }} />
                        <span className="badge badge-danger badge-pill d-flex justify-content-center align-items-center" style={{ width: 10, height: 12, marginLeft: -5, marginTop: -5 }}>M</span>
                      </>
                    }
                  </Col>
                  <Col className="col-2 d-flex">
                    {
                      each.assignees.map((each, index) => {
                        return (
                          <div
                            key={index}
                            className="rounded-circle bg-danger border border-white d-flex justify-content-center align-items-center"
                            style={{ width: 20, height: 20, marginLeft: -5, cursor: "pointer" }}
                          >
                            {
                              each.photo ?
                                <img src={each.photo} alt="" className="rounded-circle" style={{ width: '100%', height: '100%' }} />
                                :
                                <span className="font-size-12 text-white">{getInitial(each.name)}</span>
                            }
                          </div>
                        )
                      })
                    }
                  </Col>
                </Row>
              ))
              // <Row className="d-flex justify-content-center align-items-center">
              //   No data
              // </Row>
            }

            <div id='itemPopup' style={{ position: 'fixed', left: this.state.itemPopupPosition?.x, top: this.state.itemPopupPosition?.y }}></div>
            {
              this.state.itemPopup &&
              <ItemPopup isOpen={this.state.itemPopup} type='project' projectOrTemplate={this.state.selectedProject} toggleItemPopup={this.toggleItemPopup} />
            }
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.Auth,
    myProjects: state.Me.myProjects
  };
};

export default connect(mapStateToProps, {
  getMyProjects,
})(withRouter(withNamespaces()(Projects)));
