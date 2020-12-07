import React, { Component } from 'react';
import { Col, Row, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Container, Button, Badge } from "reactstrap";

import { withRouter } from "react-router-dom";
import { withNamespaces } from 'react-i18next';

import { connect } from "react-redux";
import {
  showRightBar,
  hideRightBar,
  getMyEvents,
  getMyMilestones
} from "../../../store/actions";

import { getInitial } from '../../../utils';
import { Icons } from '../../../constants';
import TagItem from '../../../components/App/TagItem';

class EventsMilestones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagItems: [
        {
          id: 0,
          label: 'View',
          icon: Icons.eye,
          value: 'Events, Milestones'
        }
      ]
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <React.Fragment>
        <CardHeader className="px-0 py-3 font-size-16 d-flex justify-content-end align-items-center" id="headingRight">
          <div className="d-flex align-items-center">
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

        <Row className="font-weight-bold align-items-center bg-white" style={{ height: 50, borderBottom: '1px solid #ddd' }}>
          <Col className="col-5">Title</Col>
          <Col className="col-3">Project</Col>
          <Col className="col-2">Date</Col>
          <Col className="col-2">Assignees</Col>
        </Row>

        {
          this.props.events.map((each, index) => {
            return (
              <Row key={index} className="align-items-center bg-white" style={{ height: 50, borderBottom: '1px solid #ddd' }}>
                <Col className="col-5">{each.title}</Col>
                <Col className="col-3">{each.project?.title}</Col>
                <Col className="col-2">{each.date}</Col>

                <Col className="col-2 d-flex">
                  {
                    // each.assignees.map((each, index) => {
                    //   return (
                    //     <div
                    //       key={index}
                    //       className="rounded-circle bg-danger border border-white d-flex justify-content-center align-items-center"
                    //       style={{ width: 20, height: 20, marginLeft: -5, cursor: "pointer" }}
                    //     >
                    //       {
                    //         each.photo ?
                    //           <img src={each.photo} alt="" className="rounded-circle" style={{ width: '100%', height: '100%' }} />
                    //           :
                    //           <span className="font-size-12 text-white">{getInitial(each.name)}</span>
                    //       }
                    //     </div>
                    //   )
                    // })
                  }
                </Col>
              </Row>
            )
          })
        }
        {
          this.props.milestones.map((each, index) => {
            return (
              <Row key={index} className="align-items-center bg-white" style={{ height: 50, borderBottom: '1px solid #ddd' }}>
                <Col className="col-5">{each.title}</Col>
                <Col className="col-3">{each.project?.title}</Col>
                <Col className="col-2">{each.date}</Col>

                <Col className="col-2 d-flex">
                  {
                    // each.assignees.map((each, index) => {
                    //   return (
                    //     <div
                    //       key={index}
                    //       className="rounded-circle bg-danger border border-white d-flex justify-content-center align-items-center"
                    //       style={{ width: 20, height: 20, marginLeft: -5, cursor: "pointer" }}
                    //     >
                    //       {
                    //         each.photo ?
                    //           <img src={each.photo} alt="" className="rounded-circle" style={{ width: '100%', height: '100%' }} />
                    //           :
                    //           <span className="font-size-12 text-white">{getInitial(each.name)}</span>
                    //       }
                    //     </div>
                    //   )
                    // })
                  }
                </Col>
              </Row>
            )
          })
        }

      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {    
    person: state.Auth.person,
    events: state.Me.myEvents,
    milestones: state.Me.myMilestones
  };
};

export default connect(mapStateToProps, {
  showRightBar,
  hideRightBar,
  getMyEvents,
  getMyMilestones
})(withRouter(withNamespaces()(EventsMilestones)));
