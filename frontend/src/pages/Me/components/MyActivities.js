import React, { Component } from 'react';
import { Col, Row, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Container, Button, Media } from "reactstrap";

import { withRouter } from "react-router-dom";
import { withNamespaces } from 'react-i18next';

import { connect } from "react-redux";
import {
  showRightBar,
  hideRightBar,
  getMyActivities
} from "../../../store/actions";

import moment from 'moment';

import { Icons } from '../../../constants';

class MyActivities extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    // this.props.getMyActivities();
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardBody>
            <CardTitle className="mb-5">Activity</CardTitle>
            <ul className="verti-timeline list-unstyled">
              {
                this.props.myActivities.map((each, index) => {
                  return (
                    <li key={index} className="event-list">
                      <div className="event-timeline-dot">
                        <i className="bx bx-right-arrow-circle font-size-18 bx-fade-right"></i>
                      </div>
                      <Media>
                        <div className="mr-3">
                          <h5 className="font-size-14">{moment(each.created_at).format("DD, MMM")} <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ml-2"></i></h5>
                        </div>
                        <Media body>
                          <span className="font-weight-bold">{each.act_kind} - </span>
                          <span>{each.act} </span>
                          <span>{each.act_detail}</span>
                        </Media>
                      </Media>
                    </li>
                  )
                })
              }
            </ul>
          </CardBody>
        </Card>

      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {    
    myActivities: state.Me.myActivities
  };
};

export default connect(mapStateToProps, {
  showRightBar,
  hideRightBar,
  getMyActivities
})(withRouter(withNamespaces()(MyActivities)));
