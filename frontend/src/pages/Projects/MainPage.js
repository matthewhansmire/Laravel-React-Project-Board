import React, { Component } from 'react';
import { Row, Col, Container, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Badge, Button } from 'reactstrap';

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
  hideRightBar,
  setRightBarParam,
  getAllProjects
} from "../../store/actions";

import { Link } from "react-router-dom";
import moment from 'moment';

import { Icons } from '../../constants';

import defaultUserImg from '../../assets/images/defaultUserImg.png';

import TagItem from '../../components/App/TagItem';
import ItemPopup from './components/ItemPopup';

import { calculateDaysBetweenDates, getInitial } from '../../utils';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagItems: [
        {
          id: 0,
          label: 'Status',
          icon: Icons.tasks,
          value: 'All'
        },
        {
          id: 1,
          label: 'Category',
          icon: Icons.projCategory,
          value: 'All'
        },
        {
          id: 2,
          label: 'Colors',
          icon: Icons.onboardingS,
          value: 'All'
        },
        {
          id: 3,
          label: 'Sort by',
          icon: Icons.sortByS,
          value: 'Category'
        }
      ],

      allProjects: [],
      assignedToMeProjects: [],
      managedByMeProjects: [],
      templates: [],

      addItemPopup: false,

      itemPopup: false,
      itemPopupPosition: '',
      selectedProject: ''
    }
  }

  componentDidMount() {
    this.props.getAllProjects();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.allProjects != this.props.allProjects) {
      var allProjects = this.props.allProjects.filter(each => {
        return !each.is_template;
      })

      var assignedToMeProjects = allProjects.filter(each => {        
        var isAssignedToMe = false;
        each.assignees.forEach(e => {
          if (e.id == this.props.person?.id) isAssignedToMe = true;
        });
        return isAssignedToMe;
      });

      var managedByMeProjects = allProjects.filter(each => {
        if (each.manager) {
          return each.manager.id === this.props.person?.id;
        }
        return false;
      });

      var templates = this.props.allProjects.filter(each => {
        return each.is_template;
      })

      this.setState({
        allProjects: allProjects,
        assignedToMeProjects: assignedToMeProjects,
        managedByMeProjects: managedByMeProjects,
        templates: templates
      })
    }
  }

  toggleAddItemPopup = () => {
    this.setState({ addItemPopup: !this.state.addItemPopup })
  }

  toggleItemPopup = (e, project) => {
    this.setState({
      itemPopup: !this.state.itemPopup,
      itemPopupPosition: { x: e.clientX, y: e.clientY },
      selectedProject: project
    })
  }


  render() {
    let projectData = [];
    let tab = this.props.match.params.tab;
    if (tab == 'assignedtome') {
      projectData = this.state.assignedToMeProjects
    }
    else if (tab == 'managedbyme') {
      projectData = this.state.managedByMeProjects
    }
    else if (tab == 'allprojects') {
      projectData = this.state.allProjects
    }
    else if(tab == 'templates'){
      projectData = this.state.templates
    }

    return (
      <React.Fragment>
        <CardHeader className="px-0 py-3 font-size-16 d-flex align-items-center justify-content-between" id="headingTwo">
          <Dropdown
            isOpen={this.state.addItemPopup}
            toggle={this.toggleAddItemPopup}
            className="d-flex align-items-center"
          >
            <DropdownToggle className="bg-dark border-0 align-self-center" style={{ width: '100%' }} caret>
              <i className="bx bx-plus font-size-16 align-middle mr-2"></i> Add
                </DropdownToggle>
            <DropdownMenu left="true">
              <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={() => {
                var param = {
                  type: 'project',
                  templates: this.state.templates
                }
                this.props.setRightBarParam(param);
                this.props.showRightBar('project');
              }}>
                <i className={`${Icons.project} font-size-24 align-middle mr-1`}></i>
                {this.props.t('Add project')}
              </DropdownItem>
              <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={() => {
                var param = {
                  type: 'template'                  
                }
                this.props.setRightBarParam(param);
                this.props.showRightBar('project');
              }}>
                <i className={`${Icons.template} font-size-24 align-middle mr-1`}></i>
                {this.props.t('Add template')}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <div className="d-flex">
            {
              this.state.tagItems.map((each) => (
                <TagItem key={each.id} item={each} />
              ))
            }
          </div>
        </CardHeader>
        <CardBody className="pt-0 bg-white">
          <Row className="font-weight-bold py-3">
            <Col className="col-5">Title</Col>
            <Col className="col-3">Date</Col>
            <Col className="col-1">Status</Col>
            <Col className="col-1">Manager</Col>
            <Col className="col-2">Assignee</Col>
          </Row>

          {
            projectData.map((each, index) => (
              <Row key={index} className="justify-content-around align-items-center my-3" onClick={(e) => this.toggleItemPopup(e, each)} style={{ cursor: "pointer" }}>
                <Col className="col-5 d-flex align-items-center">
                  <i className={`${Icons.star}`}></i>
                  <i className={`${Icons.onboardingS} ml-2`} style={{ color: each.color?.code }}></i>
                  <span className="font-size-14 ml-2">{each.title}</span>
                  {
                    each.start_date &&
                    <Badge color='warning' className="ml-3">{calculateDaysBetweenDates(each.start_date, moment().format('YYYY-MM-DD'))} days</Badge>
                  }
                </Col>
                <Col className="col-3">
                  <span className="font-size-14">{each.start_date} {'->'} {each.end_date}</span>
                </Col>
                <Col className="col-1">
                  <span className="font-size-14">{each.status?.name}</span>
                </Col>
                <Col className="col-1 d-flex">
                  {
                    each.manager &&
                    <>
                      <CardImg src={each.manager.img ? each.manager.img : defaultUserImg} alt="Skote" className="rounded-circle avatar-xs ml-2" style={{ width: 20, height: 20 }} />
                      <span className="badge badge-danger badge-pill d-flex justify-content-center align-items-center" style={{ width: 10, height: 12, marginLeft: -5, marginTop: -5 }}>M</span>
                    </>
                  }
                </Col>
                <Col className="col-2 d-flex">
                  {
                    each.assignees.map((each, index) => {
                      return (
                        <div
                          key={index}
                          className="rounded-circle bg-danger border border-white d-flex justify-content-center align-items-center"
                          style={{ width: 20, height: 20, marginLeft: -5, cursor: "pointer" }}
                        >
                          {
                            each.photo ?
                              <img src={each.photo} alt="" className="rounded-circle" style={{ width: '100%', height: '100%' }} />
                              :
                              <span className="font-size-12 text-white">{getInitial(each.name)}</span>
                          }
                        </div>
                      )
                    })
                  }
                </Col>
              </Row>
            ))
          }

          <div id='itemPopup' style={{ position: 'fixed', left: this.state.itemPopupPosition?.x, top: this.state.itemPopupPosition?.y }}></div>
          {
            this.state.itemPopup &&
            <ItemPopup isOpen={this.state.itemPopup} type='project' projectOrTemplate={this.state.selectedProject} toggleItemPopup={this.toggleItemPopup} />
          }

          {
            tab === 'templates' && this.state.templates.length == 0 &&
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 600 }}>
              <div>
                <div className="d-flex justify-content-center">
                  <i className={`${Icons.projStatuses} font-size-80 align-middle mr-2`}></i>
                </div>
                <div className="d-flex justify-content-center my-2">
                  <span>Create project templates and save them to add similar projects without having to fill details from the scratch.</span>
                  {/* <Link to={'/help'}>Learn how it works</Link> */}
                </div>
                <div className="d-flex justify-content-center my-3">
                  <Col className="col-3">
                    <Button color="success" type="submit" onClick={() => this.props.showRightBar('template')} style={{ width: '100%' }}><i className={`${Icons.plus} font-size-24 align-middle mr-1`}></i>Add template</Button>
                  </Col>
                </div>
              </div>
            </div>
          }

        </CardBody>
      </React.Fragment >
    );
  }
}

const mapStateToProps = state => {
  return {
    person: state.Auth.person,
    allProjects: state.Project.allProjects
  };
};

export default connect(mapStateToProps, {
  showRightBar,
  hideRightBar,
  setRightBarParam,
  getAllProjects
})(withRouter(withNamespaces()(MainPage)));