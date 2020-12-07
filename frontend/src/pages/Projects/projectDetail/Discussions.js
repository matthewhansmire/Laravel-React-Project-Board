import React, { Component } from 'react';
import { Row, Col, Container, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Button } from 'reactstrap';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { withRouter } from "react-router-dom";
import { withNamespaces } from 'react-i18next';
import { connect } from "react-redux";
import {
  showRightBar,
  hideRightBar
} from "../../../store/actions";

import { Icons } from '../../../constants';

import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar8 from "../../../assets/images/users/avatar-8.jpg";
import avatar5 from "../../../assets/images/users/avatar-5.jpg";

import PersonQueue from '../../../components/App/PersonQueue';
import SingleSelectDropdown from '../../../components/App/SingleSelectDropdown';

class Discussions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addPopup: false,
      page: 'manager',
      browses: [
        "ProjHub",
        "Google Drive",
        "Dropbox",
        "Box",
        "OneDrive"
      ],
    }
  }

  toggleAddPopup = () => {
    this.setState({
      addPopup: !this.state.addPopup
    })
  }

  render() {
    return (
      <React.Fragment>
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
                    <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={() => this.props.showRightBar('topic')}>
                      <i className={`${Icons.topic} font-size-24 mr-2`}></i>
                      {this.props.t('Topic')}
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <i className={`${Icons.filterAlt} font-size-20 align-middle`} style={{ cursor: "pointer" }} onClick={() => { }}></i>
              </CardHeader>

              <CardTitle>
                <span className={`font-size-14 ${this.state.page === 'manager' ? 'text-info' : null}`} style={{ cursor: "pointer" }} onClick={() => this.setState({ page: 'manager' })}>How it works for Managers</span>
                <br />
                <span className="font-size-12 text-secondary">2 days</span>
                <hr className="my-2"></hr>

                <span className={`font-size-14 ${this.state.page === 'clients' ? 'text-info' : null}`} style={{ cursor: "pointer" }} onClick={() => this.setState({ page: 'clients' })}>How it works for Clients</span>
                <br />
                <span className="font-size-12 text-secondary">2 days</span>
                <hr className="my-2"></hr>
              </CardTitle>
            </Col>

            <Col id="rightPanel" className="col-10 border">
              <CardHeader className="px-0 py-3 font-size-16 d-flex align-items-center justify-content-between" id="headingRight">
                {
                  this.state.page === 'manager' &&
                  <span className="font-size-16"><b>How it works for Managers</b></span>
                }
                {
                  this.state.page === 'clients' &&
                  <span className="font-size-16"><b>How it works for Clients</b></span>
                }

                <PersonQueue />
              </CardHeader>
              <CardBody className="bg-white">
                <Row>
                  <Col className="col-1">
                    <CardImg src={avatar1} alt="Skote" className="rounded-circle avatar-xs" style={{ width: 50, height: 50 }} />
                  </Col>
                  <Col className="col-11">
                    <span><b>Segunfunmi Oyedele</b> 2 days</span>
                    <br /><br />
                    Have you ever wondered about how your projects are progressing or whether your team members are performing up to the expectations or not?
                    <br />
                    Well, ProjHub lets you assign a dedicated manager for each of your projects.
                    <br />
                    &nbsp;&nbsp;&nbsp;* The manager can add/assign task to team members to keep a track of what needs to be done and by whom.
                    <br />
                    &nbsp;&nbsp;&nbsp;* Set dependencies - he can define logical relationships between tasks and milestones so that the team knows which tasks need to completed before others can start.
                    <br />
                    &nbsp;&nbsp;&nbsp;* The project manager also receives:
                    <br />
                    - <b>Project progress reports:</b> to track the progress made. Now he always knows about overdue and completed tasks against the total number of tasks, and milestones as well.
                    <br />
                    - <b>Email notifications:</b> about all the important things happening in projects.
                  </Col>
                </Row>
                <hr className="my-2" />

                {
                  this.state.page === 'manager' &&
                  <>
                    <Row>
                      <Col className="col-1">
                        <CardImg src={avatar2} alt="Skote" className="rounded-circle avatar-xs" style={{ width: 50, height: 50 }} />
                      </Col>
                      <Col className="col-11">
                        <span><b>Danial Craig</b> 2 days</span>
                        <br /><br />
                    Sounds interesting. All this will allow managers to know the problems in advance and keep teams and project's progress on the right track.
                    <br />
                      </Col>
                    </Row>
                    <hr className="my-2" />
                  </>
                }

                <Row>
                  <Col className="col-1">
                    <CardImg src={avatar1} alt="Skote" className="rounded-circle avatar-xs" style={{ width: 50, height: 50 }} />
                  </Col>
                  <Col className="col-11">
                    <Editor
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      placeholder="Write a comment..."
                    />
                    <div className="d-flex py-2 justify-content-between">
                      <div id="commentLeft" className="d-flex align-items-center">
                        <Button color="primary" type="submit" onClick={() => this.handleAddComment()}>Add</Button>
                        <i className={`${Icons.emoticon} font-size-24 ml-2`} style={{ cursor: "pointer" }} onClick={() => { }}></i>
                        <div id="percent" className="mx-2 d-flex align-items-center" style={{ backgroundColor: '#eee' }}>
                          <i className={`${Icons.attach} font-size-16 ml-2`} style={{ transform: 'rotate(-45deg)', cursor: "pointer" }}></i>
                          <SingleSelectDropdown keyName="browse" options={this.state.browses} bgColor='#eee' />
                        </div>
                      </div>
                      <div id="commentRight" className="d-flex align-items-center">
                        <Button color="secondary" type="submit" onClick={() => { }}>Cancel</Button>
                        <i className={`${Icons.dotsVertical} font-size-16 mx-2`} style={{ cursor: "pointer" }} onClick={() => { }}></i>
                      </div>
                    </div>
                  </Col>
                </Row>

              </CardBody>
            </Col>
          </Row>

        </Container>

      </React.Fragment >
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
})(withRouter(withNamespaces()(Discussions)));