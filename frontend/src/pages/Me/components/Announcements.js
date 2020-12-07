import React, { Component } from 'react';
import { Col, Row, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Container, Button } from "reactstrap";

import { withRouter } from "react-router-dom";
import { withNamespaces } from 'react-i18next';

import { connect } from "react-redux";
import {
  showRightBar,
  hideRightBar
} from "../../../store/actions";

import { Icons } from '../../../constants';

class Announcement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      announcements: []
    }
  }

  render() {
    return (
      <React.Fragment>
        <Card className="mb-1 bg-white" style={{ minHeight: 200 }}>
          <CardHeader className="p-3 d-flex bg-white font-size-16 justify-content-between" id="headingTwo">
            <span className="text-dark mx-2">Announcements</span>
            <Button className="btn-sm" color="dark" type="submit" onClick={()=>this.props.showRightBar('announcement')}><i className="bx bx-plus font-size-16 align-middle mr-2"></i>Add</Button>
          </CardHeader>
          <CardBody>
            {
              this.state.announcements.map((each) => (
                <Row className="my-2">
                  <Col className="col-4 d-flex align-items-center">
                    <i className={`${Icons.onboarding}`}></i>
                    <span className="font-size-14 ml-2">Completed project</span>
                    <sapn className="font-size-12 ml-3">2 days</sapn>
                  </Col>
                </Row>
              ))
            }
            {
              this.state.announcements.length == 0 &&
              <>
                <Row className="d-flex justify-content-center align-items-center">
                  <i className={`${Icons.announce} font-size-80 align-middle mr-2`}></i>
                </Row>
                <Row className="d-flex justify-content-center align-items-center my-4">
                  Make announcements to appreciate teams, wish on birthdays, or share important information
                </Row>
              </>
            }
          </CardBody>
        </Card>
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
})(withRouter(withNamespaces()(Announcement)));
