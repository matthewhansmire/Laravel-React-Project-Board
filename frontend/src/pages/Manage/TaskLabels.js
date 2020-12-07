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

class TaskLabels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskLabels: [
        {color: "bg-danger", label: "High"},
        {color: "bg-success", label: "In-pregress"},
        {color: "bg-secondary", label: "Low"},
        {color: "bg-warning", label: "Medium"},
      ]
    };
  }
  
  render() {
    return (
      <React.Fragment>
        <CardTitle>Manage task labels</CardTitle>
        <CardHeader className="px-0 py-2 font-size-16 d-flex align-items-center justify-content-between" id="headingTwo">
          <Button className="bg-dark" onClick={() => this.props.showRightBar('taskLabel')}><i className="bx bx-plus font-size-16 align-middle mr-2"></i> Add</Button>
          <i className={`${Icons.help} font-size-18`} style={{ cursor: "pointer" }} onClick={() => { }}></i>
        </CardHeader>
        <CardBody className="bg-white">
          {
            this.state.taskLabels.map((each) => {
              return (
                <>
                  <Row>
                    <Col className="col-12 d-flex align-items-center">
                      <span className={`badge ${each.color} d-flex justify-content-center align-items-center`} style={{ width: 30, height: 15 }}></span>
                      <span className="font-size-14 ml-2">{each.label}</span>
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
})(withNamespaces()(TaskLabels));
