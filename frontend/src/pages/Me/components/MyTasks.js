import React, { Component } from 'react';
import { Col, Row, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Container, Button, Badge } from "reactstrap";

import { withRouter } from "react-router-dom";
import { withNamespaces } from 'react-i18next';

import { connect } from "react-redux";
import {
  showRightBar,
  hideRightBar,
  getMyTasks,
} from "../../../store/actions";

import { getInitial } from '../../../utils';
import { Icons } from '../../../constants';
import TagItem from '../../../components/App/TagItem';

class MyTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagItems: [
        {
          id: 0,
          label: 'Status',
          icon: Icons.tasks,
          value: 'Incomplete'
        },
        {
          id: 1,
          label: 'Projects',
          icon: Icons.projects,
          value: 'All'
        },
        {
          id: 2,
          label: 'View',
          icon: Icons.calendar,
          value: 'Due today, Tasks to w...'
        },
        {
          id: 3,
          label: 'Subtasks',
          icon: Icons.listView,
          value: 'Show'
        },
        {
          id: 4,
          label: 'Labels',
          icon: Icons.taskLabels,
          value: 'All'
        },
        {
          id: 5,
          label: 'Group by',
          icon: Icons.groupBy,
          value: 'Date'
        }
      ],
      viewMode: "List View"
    }
  }

  componentDidMount() {
    // this.props.getMyTasks();
  }

  getStage = (assignees) => {
    var me = assignees.find(each => each.id === this.props.person.id);
    var stage = me?.stage;

    if (stage) {
      return stage.name
    }
    return '';
  }

  onViewMode = () => {
    if(this.state.viewMode === 'List View') this.setState({viewMode: 'Board View'});
    else if(this.state.viewMode === 'Board View') this.setState({viewMode: 'List View'});
  }

  render() {
    return (
      <React.Fragment>
        <CardHeader className="px-0 py-3 font-size-16 d-flex justify-content-between align-items-center" id="headingRight">
          <Button color="secondary" type="submit" className="btn-sm d-flex align-items-center" onClick={() => this.onViewMode()}><i className={`${this.state.viewMode === 'List View' ? Icons.boardView : Icons.listView} font-size-24 mr-2`}></i>{this.state.viewMode === 'List View' ? 'Board View' : 'List View' }</Button>
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
        
        <Row className="font-weight-bold align-items-center bg-white" style={{ height: 50, borderBottom: '1px solid #ddd' }}>
          <Col className="col-5">Title</Col>
          <Col className="col-2">Project</Col>
          <Col className="col-1">Tasklist</Col>
          <Col className="col-1">Start date</Col>
          <Col className="col-1">Due date</Col>
          <Col className="col-1">Stage</Col>
          <Col className="col-1">Assignees</Col>
        </Row>

        {
          this.props.myTasks.map((each, index) => {
            let stage = this.getStage(each.assignees);
            return (
              <Row key={index} className="align-items-center bg-white" style={{ height: 50, borderBottom: '1px solid #ddd' }}>
                <Col className="col-5">{each.title}</Col>
                <Col className="col-2">{each.project?.title}</Col>
                <Col className="col-1">{each.tasklist?.name}</Col>
                <Col className="col-1">{each.start_date}</Col>
                <Col className="col-1">{each.end_date}</Col>
                <Col className="col-1">
                  <Badge color={
                    stage === 'Backlog' ? 'success'
                      : stage === 'In progress' ? 'dark'
                        : stage === 'Complete' ? 'danger'
                          : stage === 'To-Do' ? 'info'
                            : stage === 'Done' ? 'warning'
                              : ''
                  } className="ml-3 text-white">{stage}</Badge>
                </Col>
                <Col className="col-1 d-flex">
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
            )
          })
        }

      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {    
    person: state.Auth.person,
    myTasks: state.Me.myTasks
  };
};

export default connect(mapStateToProps, {
  showRightBar,
  hideRightBar,
  getMyTasks,
})(withRouter(withNamespaces()(MyTasks)));
