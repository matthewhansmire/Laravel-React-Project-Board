import React, { Component } from "react";
import { Col, Row, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Container, Popover, PopoverHeader, PopoverBody, Button } from "reactstrap";

import "../../assets/scss/rightbar.scss";
import { Icons } from "../../constants";

import ColorPicker from '../../components/App/ColorPicker';

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorCode: '',
    };
  }

  render() {
    return (
      <React.Fragment>
        <CardTitle>Company</CardTitle>
        <CardHeader className="px-0 py-2 font-size-16 d-flex align-items-center justify-content-end" id="headingTwo">
          <i className={`${Icons.help} font-size-18`} style={{ cursor: "pointer" }} onClick={() => { }}></i>
        </CardHeader>
        <CardBody className="bg-white">
          <div className="my-3 w-75">
            Company name:
            <input className="form-control border font-size-14" style={{ height: 30 }} type="text" defaultValue="" placeholder="" />
          </div>

          <div className="my-3">
            Upload logo:
            <div className="d-flex">
              <Col className="col-6 px-0">
                <input className="form-control border font-size-14" style={{ height: 30 }} type="text" defaultValue="" placeholder="" />
              </Col>
              <Col className="col-4">
                This logo will appear on the login page
            </Col>
              <Col className="col-2 pr-0">
                <Button className="btn-sm w-50" color="primary" onClick={() => { }} style={{ width: '100%' }}>Browse</Button>
              </Col>
            </div>
          </div>

          <div className="my-3">
            Theme color:
            {/* <ColorPicker colorCode={this.state.colorCode} setColor={(code) => { this.setState({ colorCode: code }); console.log(code) }} /> */}
          </div>

          <div className="my-3">
            <div className="form-check mb-2 d-flex align-items-center">
              <input className="form-check-input" type="checkbox" value="" id="restrictedIPAccess" />
              <label className="form-check-label" htmlFor="restrictedIPAccess">Restricted IP access</label>
            </div>
          </div>

          <div className="d-flex py-3 my-5 w-100">
            <Col className="col-1 px-0">
              <Button color="primary" type="submit" onClick={() => {}} style={{ width: '100%' }}>Update</Button>
            </Col>
            <Col className="col-1 px-1">
              <Button color="secondary" onClick={() => {}} style={{ width: '100%' }}>Reset</Button>
            </Col>
          </div>

        </CardBody>

      </React.Fragment>
    );
  }
}

export default Company;