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

class Workflows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workflows: [
        {
          id: 0,
          workflow: '3-stage Kanban workflow',
          status: 'default',
          breadcrumbs: ["Backlog", "In progress", "Complete"]
        },
        {
          id: 1,
          workflow: 'Basic workflow',
          status: 'default',
          breadcrumbs: ["To-Do", "Done"]
        },
        {
          id:2,
          workflow: 'Custom workflow',
          status: 'default',
          breadcrumbs: ["Backlog", "In progress", "Complete"]
        },
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <CardTitle>Manage workflows</CardTitle>
        <CardHeader className="px-0 py-2 font-size-16 d-flex align-items-center justify-content-between" id="headingTwo">
          <Button className="bg-dark" onClick={() => this.props.showRightBar('workflow')}><i className="bx bx-plus font-size-16 align-middle mr-2"></i> Add</Button>
          <i className={`${Icons.help} font-size-18`} style={{ cursor: "pointer" }} onClick={() => { }}></i>
        </CardHeader>
        <CardBody className="bg-white">
          {
            this.state.workflows.map((each) => {
              var breadcrumb = '';
              for (var i = 0; i < each.breadcrumbs.length; i++) {
                if (i < each.breadcrumbs.length - 1) breadcrumb += each.breadcrumbs[i] + ' > '
                else breadcrumb += each.breadcrumbs[i]
              }
              return (
                <div key={each.id}>
                  <Row>
                    <Col className="col-12 d-flex align-items-center">
                      <span className="font-size-14 ml-2"><b>{each.workflow}</b></span>
                      <span className="badge badge-secondary d-flex justify-content-center align-items-center ml-3" style={{ height: 15 }}>{each.status.toUpperCase()}</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-12 ml-2">{breadcrumb}</Col>
                  </Row>
                  <hr className="my-2" />
                </div>
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
})(withNamespaces()(Workflows));
