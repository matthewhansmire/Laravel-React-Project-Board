import React, { Component } from "react";
import { Col, Row, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Container, Popover, PopoverHeader, PopoverBody, Button } from "reactstrap";

import "../../assets/scss/rightbar.scss";
import { Icons } from "../../constants";

import TagItem from '../../components/App/TagItem';

class Trash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagItems: [
        {
          id: 0,
          label: 'Section',
          icon: Icons.tasks,
          value: 'All'
        },
      ],
      trashes: [],

    };
  }

  render() {
    return (
      <React.Fragment>
        <CardTitle>Trash</CardTitle>
        <CardHeader className="px-0 py-0 font-size-16 d-flex align-items-center justify-content-end" id="headingTwo">
          <div className="border bg-white d-flex align-items-center px-1 py-1 ml-2" style={{ cursor: "pointer" }}>
            <i className={`${Icons.restore} font-size-18`} onClick={() => { }}></i>
            <span className="ml-2 font-size-14">Restore</span>
          </div>
          <div className="border bg-white d-flex align-items-center px-1 py-1 ml-2" style={{ cursor: "pointer" }}>
            <i className={`${Icons.trash} font-size-18`} onClick={() => { }}></i>
            <span className="ml-2 font-size-14">Delete forever</span>
          </div>
          <div className="border bg-white d-flex align-items-center px-1 py-1 ml-2" style={{ cursor: "pointer" }}>
            <i className={`${Icons.trash} font-size-18`} onClick={() => { }}></i>
            <span className="ml-2 font-size-14">Empty trash</span>
          </div>
          <div className="d-flex ml-2">
            {
              this.state.tagItems.map((each) => (
                <TagItem key={each.id} item={each} />
              ))
            }
          </div>
          <div className="d-flex align-items-center mx-2">
            <div className="d-flex align-items-center justify-content-center" style={{ height: '60%', borderLeft: '1px solid grey' }}>
              <i className={`${Icons.dotsVertical} font-size-20 align-middle`} style={{ cursor: "pointer" }}></i>
            </div>
          </div>
        </CardHeader>
        <div className="mt-1">
          <i className="bg-warning text-secondary">Note: Items that have been in trash for more than 15days will be automatically deleted.</i>
        </div>
        <Row className="border-bottom" style={{height: 40}}>
          <Col className="col-2 d-flex justify-content-center align-items-center">Project</Col>
          <Col className="col-2 d-flex justify-content-center align-items-center">Section</Col>
          <Col className="col-8 d-flex justify-content-center align-items-center">Trash details</Col>
        </Row>
        <CardBody className="bg-white">

          {
            this.state.trashes.length == 0 &&
            <div className="d-flex justify-content-center align-items-center">
              <div className="px-4 py-4 d-flex flex-column justify-content-center align-items-center text-secondary" style={{ height: '80vh' }}>
                <i className={`${Icons.trash} font-size-80`}></i>
                <br />
                <span className="font-size-14">Find your deleted data in trash and choose to either restore it or delete it forever</span>
              </div>
            </div>
          }
        </CardBody>

      </React.Fragment>
    );
  }
}

export default Trash;