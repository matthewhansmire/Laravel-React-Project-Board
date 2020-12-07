import React, { Component } from "react";
import { Col, Row, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Container, Popover, PopoverHeader, PopoverBody, Button } from "reactstrap";

import "../../assets/scss/rightbar.scss";
import { Icons } from "../../constants";

class CustomDomain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domainPreferenceOption: '',
      customDomain: ''
    };
  }

  render() {
    return (
      <React.Fragment>
        <CardTitle>Custom domain</CardTitle>
        <CardHeader className="px-0 py-2 font-size-16 d-flex align-items-center justify-content-end" id="headingTwo">
          <i className={`${Icons.help} font-size-18`} style={{ cursor: "pointer" }} onClick={() => { }}></i>
        </CardHeader>
        <CardBody className="bg-white">
          {
            this.state.domainPreferenceOption == 'custom' && 
            <div className="my-3 border px-2 py-2">
              <div><span><b>Steps to set custom domain:</b></span></div>

              <div className="mt-3"><span>1. Follow the register's instructions to point domain's or sub-domain's A-record (IP address) to 173.255.232.157. Make sure to add prefix "*." e.g. "*.hub.yoursite.com".</span></div>
              
              <div className="mt-3"><span>Note: You need to change your domain's or sub-domain's A Record only, not the nameservers. And, you don't need to forward or redirect anything.</span></div>

              <div className="mt-3"><span>2. Wait for 24-48 hours for the change to take effect.</span></div>

              <div className="text-info mt-3" style={{cursor: "pointer"}} onClick={()=>{}}>Learn how it works</div>
            </div>
          }
          <div className="my-3 w-75">
            Domain preference:
          </div>

          <div className="my-2">
            <div className="form-group" onChange={(e) => this.setState({ domainPreferenceOption: e.target.value })}>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="domainPreferenceRadio" id="defaultRadio" value="default" defaultChecked={this.state.domainPreferenceOption === 'default' ? true : false} />
                <label className="form-check-label" htmlFor="defaultRadio">https://segunoyedele.projhub.com <i className="text-secondary">(Default)</i></label>
              </div>

              <div className="form-check my-2">
                <input className="form-check-input" type="radio" name="domainPreferenceRadio" id="customRadio" value="custom" defaultChecked={this.state.domainPreferenceOption === 'custom' ? true : false} />
                <label className="form-check-label" htmlFor="customRadio">Use a custom domain name <i className="text-secondary">(E.g.: hub.yoursite.com or projects.yoursite.com)</i></label>
              </div>              
              <div className="my-2 d-flex align-items-center w-50">
                http://
                <input className="form-control-sm border font-size-14" type="text" defaultValue="" placeholder="" style={{ width: '100%' }} value={this.state.customDomain} onChange={(e)=>this.setState({customDomain: e.target.value})} />
              </div>
              <div className="my-2">
                <i className="text-secondary">* You can enter domain or sub-domain like "hub.yoursite.com" or "projects.yoursite.com".</i>
              </div>
              <div className="my-2">
                <i className="text-secondary">* Do not enter http:// or https://.</i>
              </div>
              <div className="my-2">
                <i className="text-secondary">* Do not enter custom domain with a folder path like "hub.yoursite.com/folder".</i>
              </div>
            </div>
          </div>

          <div className="d-flex py-3 my-5 w-100">
            <Col className="col-1 px-0">
              <Button color="primary" type="submit" onClick={() => { }} style={{ width: '100%' }}>Update</Button>
            </Col>
            <Col className="col-1 px-1">
              <Button color="secondary" onClick={() => { this.setState({customDomain: ''}) }} style={{ width: '100%' }}>Reset</Button>
            </Col>
          </div>

        </CardBody>

      </React.Fragment>
    );
  }
}

export default CustomDomain;