import React, { Component } from "react";
import { Col, Row, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Container, Popover, PopoverHeader, PopoverBody, Button } from "reactstrap";

import "../../assets/scss/rightbar.scss";
import { Icons } from "../../constants";

class ImportExport extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <React.Fragment>
        <CardTitle>Import</CardTitle>
        <CardBody className="bg-white">
          <Row>
            <Col className="col-10">              
              <span className="font-size-14 ml-2"><b>Asana import</b></span>
              <br />              
              <span className="font-size-14 ml-2">Import your Asana projects, tasks, files, people etc.</span>
            </Col>
            <Col className="col-2">
              <Button color="primary" type="submit" style={{ width: '50%' }}>Import</Button>
            </Col>
          </Row>
          <hr className="my-3" />

          <Row>
            <Col className="col-10">              
              <span className="font-size-14 ml-2"><b>Basecamp Next import</b></span>
              <br />              
              <span className="font-size-14 ml-2">Import your Basecamp Next projects, discussions, to-dos, text documents, files, events, people, etc.</span>
            </Col>
            <Col className="col-2">
              <Button color="primary" type="submit" style={{ width: '50%' }}>Import</Button>
            </Col>
          </Row>
          <hr className="my-3" />

          <Row>
            <Col className="col-10">              
              <span className="font-size-14 ml-2"><b>Basecamp Classic import</b></span>
              <br />              
              <span className="font-size-14 ml-2">Import your Basecamp Classic projects, messages, comments, to-dos, milestones, people, etc.</span>
            </Col>
            <Col className="col-2">
              <Button color="primary" type="submit" style={{ width: '50%' }}>Import</Button>
            </Col>
          </Row>
          <hr className="my-3" />

          <Row>
            <Col className="col-10">              
              <span className="font-size-14 ml-2"><b>Basecamp 3 import</b></span>
              <br />              
              <span className="font-size-14 ml-2">Import your Basecamp 3 projects, messages, comments, to-dos, events, notes, people, etc.</span>
            </Col>
            <Col className="col-2">
              <Button color="primary" type="submit" style={{ width: '50%' }}>Import</Button>
            </Col>
          </Row>
          <hr className="my-3" />

          <div className="d-flex py-3 my-5 w-100">
            <Col className="col-2 px-0">
              <Button color="primary" type="submit" onClick={() => { }} style={{ width: '100%' }}>Export data from ProjHub</Button>
            </Col>            
          </div>

        </CardBody>

      </React.Fragment>
    );
  }
}

export default ImportExport;