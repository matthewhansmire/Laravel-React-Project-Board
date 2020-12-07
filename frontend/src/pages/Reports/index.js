import React, { Component } from 'react';
import { Col, Row, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Container } from "reactstrap";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { withRouter } from "react-router-dom";
import { withNamespaces } from 'react-i18next';

import { connect } from "react-redux";
import {
  showRightBar,
  hideRightBar
} from "../../store/actions";

import { Icons } from '../../constants';

class Reports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cDefaultReports: true,
      addPopup: false,      
    }
  }

  c_defaultReports = () => {
    this.setState({ cDefaultReports: !this.state.cDefaultReports });
  }

  toggleAddPopup = () => {
    this.setState({
      addPopup: !this.state.addPopup
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container>           
            <CardHeader className="px-0 py-3 font-size-16 d-flex align-items-center justify-content-between" id="headingTwo">
              <Dropdown
                isOpen={this.state.addPopup}
                toggle={this.toggleAddPopup}
                className="d-flex align-items-center"
              >
                <DropdownToggle className="bg-dark border-0 align-self-center" style={{ width: '100%' }} caret>
                  <i className="bx bx-plus font-size-16 align-middle mr-2"></i> Add
                </DropdownToggle>                
                <DropdownMenu left="true">
                  <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={() => this.props.showRightBar('reportCustom')}>
                    <i className={`${Icons.report} font-size-24 mr-2`}></i>
                    {this.props.t('Custom report')}
                  </DropdownItem>
                  <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={() => this.props.showRightBar('reportWorkload')}>
                    <i className={`${Icons.workloadReport} font-size-24 mr-2`}></i>
                    {this.props.t('Workload report')}
                  </DropdownItem>                  
                </DropdownMenu>
              </Dropdown>
              <i className={`${Icons.help} font-size-18`} style={{ cursor: "pointer" }} onClick={() => { }}></i>
            </CardHeader>
            <CardBody className="pt-0 bg-white">
              <div id="accordion">
                <CardTitle className="py-2 mb-0" style={{ cursor: "pointer" }} onClick={this.c_defaultReports}>
                  <span className="font-size-16">Default reports</span>
                </CardTitle>
                <Collapse isOpen={this.state.cDefaultReports}>
                  <CardBody className="px-0 py-0">

                    <Row className="my-3">
                      <Col className="col-12 d-flex align-items-center" style={{ cursor: "pointer" }} onClick={() => { }}>
                        <i className={`${Icons.reports} font-size-18`}></i>
                        <span className="font-size-14 ml-2">All projects report</span>
                      </Col>
                    </Row>
                    <hr className="my-1"></hr>

                    <Row className="my-3">
                      <Col className="col-12 d-flex align-items-center" style={{ cursor: "pointer" }} onClick={() => { }}>
                        <i className={`${Icons.reports} font-size-18`}></i>
                        <span className="font-size-14 ml-2">Project report</span>
                      </Col>
                    </Row>
                    <hr className="my-1"></hr>

                    <Row className="my-3">
                      <Col className="col-12 d-flex align-items-center" style={{ cursor: "pointer" }} onClick={() => { }}>
                        <i className={`${Icons.reports} font-size-18`}></i>
                        <span className="font-size-14 ml-2">Resource report</span>
                      </Col>
                    </Row>
                    <hr className="my-1"></hr>

                  </CardBody>
                </Collapse>
              </div>
            </CardBody>
          </Container>
          
        </div>
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
})(withRouter(withNamespaces()(Reports)));
