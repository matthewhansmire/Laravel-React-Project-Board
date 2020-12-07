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

class RequestForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestForms: [
        {
          id: 0,
          title: "basic form",
          project: "Onboarding project",
          tasklist: "checklist",
          labels: ["High", "In-progress"],
          redirectURL: "example.com"
        },
        {
          id: 1,
          title: "second form",
          project: "Completed project",
          tasklist: "List of tasks",
          labels: ["High", "In-progress"],
          redirectURL: "example.com"
        }
      ],
      activeCollapseId: -1
    };
  }

  toggleCollapse = (requestForm) => {
    if(this.state.activeCollapseId == requestForm.id) {
      this.setState({
        activeCollapseId: -1
      })
    }
    else{
      this.setState({      
        activeCollapseId: requestForm.id
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <CardTitle>Manage request forms</CardTitle>
        <CardHeader className="px-0 py-2 font-size-16 d-flex align-items-center justify-content-between" id="headingTwo">
          <Button className="bg-dark" onClick={() => this.props.showRightBar('requestForm')}><i className="bx bx-plus font-size-16 align-middle mr-2"></i> Add</Button>
          <i className={`${Icons.help} font-size-18`} style={{ cursor: "pointer" }} onClick={() => { }}></i>
        </CardHeader>
        <CardBody className="bg-white">
          {
            this.state.requestForms.map((each) => {
              return (
                <>
                  <CardTitle className="py-2 mb-0" style={{ cursor: "pointer" }} onClick={()=>this.toggleCollapse(each)}>
                    <span className="font-size-16">{each.project}</span>
                  </CardTitle>
                  <Collapse isOpen={this.state.activeCollapseId == each.id}>
                    <CardBody className="px-0 py-0">
                      <Row className="my-3">
                        <Col className="col-12 d-flex align-items-center" style={{ cursor: "pointer" }} onClick={() => { }}>
                          <i className={`${Icons.formTitle} font-size-18`}></i>
                          <span className="font-size-14 ml-2">{each.title}</span>
                        </Col>
                      </Row>
                      <Row className="my-3">
                        <Col className="col-12 d-flex align-items-center" style={{ cursor: "pointer" }} onClick={() => { }}>
                          <span className="font-size-14 text-secondary">Tasklist: </span>
                          <span className="font-size-14 ml-2">{each.tasklist}</span>
                        </Col>
                      </Row>                    
                    </CardBody>
                  </Collapse>
                  <hr className="my-2" />
                </>
              )
            })
          }
          {
            this.state.requestForms.length == 0 &&
            <div className="d-flex justify-content-center align-items-center">
              <div className="px-4 py-4 d-flex flex-column justify-content-center align-items-center text-secondary" style={{ height: '80vh' }}>
                <i className={`${Icons.emptyRequestForms} font-size-80`}></i>
                <br />
                <span className="font-size-14">Add a request form for a project and tasklist of your choice to get all work requests directly in your ProjHub account</span>
              </div>
            </div>
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
})(withNamespaces()(RequestForms));
