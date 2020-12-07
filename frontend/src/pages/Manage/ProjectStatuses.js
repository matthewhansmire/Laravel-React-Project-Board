import React, { Component } from "react";
import { Col, Row, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Container, Popover, PopoverHeader, PopoverBody, Button } from "reactstrap";

import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import { connect } from "react-redux";
import {
  showRightBar,
  hideRightBar
} from "../../store/actions";

import "../../assets/scss/rightbar.scss";
import { Icons } from "../../constants";

class ProjectStatuses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectStatuses: [
        { status: "Active", badge: "default" },
        { status: "Archived", badge: "" },
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <CardTitle>Manage project statuses</CardTitle>
        <CardHeader className="px-0 py-2 font-size-16 d-flex align-items-center justify-content-between" id="headingTwo">
          <Button className="bg-dark" onClick={() => this.props.showRightBar('projectStatus')}><i className="bx bx-plus font-size-16 align-middle mr-2"></i> Add</Button>
          <i className={`${Icons.help} font-size-18`} style={{ cursor: "pointer" }} onClick={() => { }}></i>
        </CardHeader>
        <CardBody className="bg-white">
          {
            this.state.projectStatuses.map((each) => {
              return (
                <>
                  <Row>
                    <Col className="col-12 d-flex align-items-center">
                      <span className="font-size-14 ml-2">{each.status}</span>
                      {
                        each.badge &&
                        <span className={`badge badge-secondary d-flex justify-content-center align-items-center ml-2`} style={{ height: 15 }}>{each.badge.toUpperCase()}</span>
                      }
                    </Col>
                  </Row>
                  <hr className="my-2" />
                </>
              )
            })
          }
        </CardBody>

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
})(withNamespaces()(ProjectStatuses));
