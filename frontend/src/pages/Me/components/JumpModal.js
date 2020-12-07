import React, { Component } from 'react';
import { Col, Row, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Container } from "reactstrap";
import { Icons } from '../../../constants';

import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar8 from "../../../assets/images/users/avatar-8.jpg";
import avatar5 from "../../../assets/images/users/avatar-5.jpg";

class JumpModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      cRecentJumps: false,
      cProjects: false,
      cPeople: false
    }
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  c_recentJumps = () => {
    this.setState({ cRecentJumps: !this.state.cRecentJumps });
  }
  c_projects = () => {
    this.setState({ cProjects: !this.state.cProjects });
  }
  c_people = () => {
    this.setState({ cPeople: !this.state.cPeople });
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col className="col-12 mt-3">
            <input className="form-control" type="text" defaultValue="" placeholder="Jump to a project/person/bookmark (Ctrl+J)" onClick={() => this.toggleModal()} />
          </Col>

        </Row>
        <Modal
          isOpen={this.state.showModal}
          toggle={this.toggleModal}
          className="modal-dialog-centered modal-xl"
        >
          <div className="modal-header">
            <div className="form-group row" style={{ width: '100%' }}>
              <input className="form-control" type="text" defaultValue="" placeholder="Jump to a project/person/bookmark (Ctrl+J)" />
            </div>
            <button
              type="button"
              onClick={() =>
                this.toggleModal()
              }
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body" style={{ minHeight: 700 }}>
            <div id="accordion">
              <Card className="mb-1">
                <CardHeader className="p-3 d-flex font-size-16" id="headingOne" onClick={this.c_recentJumps}>
                  <i className={`${Icons.refresh}`}></i>
                  <span style={{ cursor: "pointer" }} className="text-dark mx-2">Recent Jumps</span>
                </CardHeader>

                <Collapse isOpen={this.state.cRecentJumps}>
                  <CardBody>
                    {
                      [1, 2, 3].map((each) => (
                        <Row key={each} className="my-2">
                          <Col className="col-4 d-flex align-items-center">
                            <i className={`${Icons.onboarding}`}></i>
                            <span className="font-size-14 ml-2">Onboarding project</span>
                            <span className="font-size-12 ml-3">a day</span>
                          </Col>
                        </Row>
                      ))
                    }
                  </CardBody>
                </Collapse>
              </Card>
              <Card className="mb-1">
                <CardHeader className="p-3 d-flex font-size-16" id="headingTwo" onClick={this.c_projects} >
                  <i className={`${Icons.projects}`}></i>
                  <span style={{ cursor: "pointer" }} className="text-dark mx-2">Projects</span>
                </CardHeader>
                <Collapse isOpen={this.state.cProjects}>
                  <CardBody>
                    {
                      [1, 2].map((each) => (
                        <Row key={each} className="my-2">
                          <Col className="col-4 d-flex align-items-center">
                            <i className={`${Icons.onboarding}`}></i>
                            <span className="font-size-14 ml-2">Completed project</span>
                            <span className="font-size-12 ml-3">2 days</span>
                          </Col>
                        </Row>
                      ))
                    }
                  </CardBody>
                </Collapse>{" "}
              </Card>
              <Card className="mb-0">
                <CardHeader className="p-3 d-flex font-size-16" id="headingThree" onClick={this.c_people}>
                  <i className={`${Icons.people}`}></i>
                  <span style={{ cursor: "pointer" }} className="text-dark mx-2"> People </span>
                </CardHeader>
                <Collapse isOpen={this.state.cPeople}>
                  <CardBody>
                    {
                      [1, 3, 8, 5].map((each) => {
                        var avatar = each == 1 ? avatar1 : each == 3 ? avatar3 : each == 8 ? avatar8 : avatar5;
                        return (
                          <Row key={each} className="my-2">
                            <Col className="col-12 d-flex align-items-center" >
                              <CardImg src={avatar} alt="Skote" className="rounded-circle avatar-xs" />
                              <CardText className="font-size-14 mx-4">{each == 1 ? 'Admin User (Me)' : 'User' + each}</CardText>
                            </Col>
                          </Row>
                        )
                      })
                    }
                  </CardBody>
                </Collapse>{" "}
              </Card>
            </div>
          </div>
        </Modal>
      </React.Fragment>
    )
  }
}

export default JumpModal;

