import React, { Component } from 'react';
import { Col, Row, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Container, Button } from "reactstrap";

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

import avatar1 from "../../assets/images/users/avatar-1.jpg";

import TagItem from '../../components/App/TagItem';

import { Icons } from '../../constants';

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagItems: [
        {
          id: 0,
          label: 'Status',
          icon: Icons.tasks,
          value: 'Active'
        },
        {
          id: 1,
          label: 'Roles',
          icon: Icons.people,
          value: 'All'
        },
        {
          id: 2,
          label: 'Sort by',
          icon: Icons.sortByS,
          value: 'Role'
        }
      ],
      cOwner: true,
      addPopup: false,      
    }
  }

  c_Owner = () => {
    this.setState({ cOwner: !this.state.cOwner });
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
          <Container fluid>           
            <Row>
              <Col id="leftPanel" className="col-2 border">
                <CardHeader className="px-0 py-3 font-size-16 d-flex align-items-center justify-content-between" id="headingLeft">
                  <Dropdown
                    isOpen={this.state.addPopup}
                    toggle={this.toggleAddPopup}
                    className="d-flex align-items-center"
                  >
                    <DropdownToggle className="bg-dark border-0 align-self-center" style={{ width: '100%' }} caret>
                      <i className="bx bx-plus font-size-16 align-middle mr-2"></i> Add
                    </DropdownToggle>
                    <DropdownMenu left="true">
                      <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={() => this.props.showRightBar('group')}>
                        <i className={`${Icons.group} font-size-24 mr-2`}></i>
                        {this.props.t('Group')}
                      </DropdownItem>
                      <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={() => this.props.showRightBar('person')}>
                        <i className={`${Icons.person} font-size-24 mr-2`}></i>
                        {this.props.t('Person')}
                      </DropdownItem>
                      <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={() => this.props.showRightBar('peopleImport')}>
                        <i className={`${Icons.importExport} font-size-24 mr-2`}></i>
                        {this.props.t('Import CSV')}
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <i className={`${Icons.filterAlt} font-size-20 align-middle`} style={{ cursor: "pointer" }} onClick={() => { }}></i>
                </CardHeader>

                <CardTitle>
                  <span className="font-size-14 text-info">All people</span>
                  <br />
                  <span className="font-size-12 text-secondary">3 Active</span>
                  <hr className="my-2"></hr>
                </CardTitle>

              </Col>

              <Col id="rightPanel" className="col-10 border">
                <CardHeader className="px-0 py-3 font-size-16 d-flex align-items-center" id="headingRight">
                  <input className="form-control mr-3" type="text" defaultValue="" placeholder="Search people..." />
                  <div className="d-flex align-items-center">
                    {
                      this.state.tagItems.map((each) => (
                        <TagItem key={each.id} item={each} />
                      ))
                    }
                    <div className="d-flex align-items-center mx-2">
                      <div className="d-flex align-items-center justify-content-center" style={{ height: '60%', borderLeft: '1px solid grey' }}>
                        <i className={`${Icons.dotsVertical} font-size-20 align-middle`} style={{ cursor: "pointer" }}></i>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardBody className="pt-0 bg-white">
                  <div id="accordion">
                    <CardTitle className="py-2 mb-0" style={{ cursor: "pointer" }} onClick={this.c_Owner}>
                      <span className="font-size-16">Owner</span>
                      <span className="font-size-14 text-secondary"><i> (3)</i></span>
                    </CardTitle>
                    <Collapse isOpen={this.state.cOwner}>
                      <CardBody className="px-0 py-0">
                        {
                          [1, 2, 3].map((each) => (
                            <div key={each}>
                              <Row className="my-3">
                                <Col className="col-11 d-flex align-items-center">
                                  <CardImg src={avatar1} alt="Skote" className="rounded-circle avatar-xs ml-2" />
                                  <div className="mx-2">
                                    <span className="font-size-16">Admin user</span>
                                    <br />
                                    <span className="font-size-14 text-secondary">admin@gmail.com</span>
                                  </div>
                                </Col>
                                <Col className="col-1 d-flex align-items-center">
                                  <span className="badge badge-warning font-size-12 text-dark d-flex justify-content-center align-items-center">Just now</span>
                                </Col>
                              </Row>
                              <hr className="my-1"></hr>
                            </div>
                          ))
                        }
                      </CardBody>
                    </Collapse>
                  </div>

                  {
                    // <Row className="d-flex justify-content-center align-items-center">
                    //   No data
                    // </Row>
                  }
                </CardBody>
              </Col>
            </Row>

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
})(withRouter(withNamespaces()(People)));
