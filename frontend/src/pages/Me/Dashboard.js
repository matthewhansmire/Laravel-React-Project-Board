import React, { Component } from 'react';
import { Col, Row, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, Modal, Container } from "reactstrap";

import { withRouter } from "react-router-dom";
import { withNamespaces } from 'react-i18next';
import { connect } from "react-redux";
import moment from 'moment';

import {
  getMyProjects,
  getMyTasks,
  getMyActivities,
  getMyEvents,
  getMyMilestones
} from "../../store/actions";

import defaultUserImg from '../../assets/images/defaultUserImg.png';

import JumpModal from './components/JumpModal';
import Announcement from './components/Announcements';
import LinkPanel from './components/LinkPanel';
import Projects from './components/Projects';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: ''
    }
  }

  componentDidMount() {
    this.props.getMyProjects();
    this.props.getMyTasks();
    this.props.getMyEvents();
    this.props.getMyMilestones();
    this.props.getMyActivities();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.person != this.props.person) {
      this.setState({
        person: this.props.person
      })
    }
  }

  getGreeting() {
    var currentHour = moment().format("HH");

    if (currentHour >= 3 && currentHour < 12) {
      return "Good Morning";
    } else if (currentHour >= 12 && currentHour < 15) {
      return "Good Afternoon";
    } else if (currentHour >= 15 && currentHour < 20) {
      return "Good Evening";
    } else if (currentHour >= 20 && currentHour < 3) {
      return "Good Night";
    } else {
      return "Hello"
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container style={{ maxWidth: 1340 }}>
            <Row>
              <Col className="col-12 d-flex justify-content-center align-items-center" >
                <CardImg src={this.props.person?.img ? this.props.person?.img : defaultUserImg} alt="Skote" className="rounded-circle avatar-md" />
                <CardText className="font-size-24 mx-4">{this.getGreeting()} <b>{this.state.person?.name}</b></CardText>
              </Col>
            </Row>

            {/* <JumpModal /> */}

            <Row className="my-4">
              <Col className="col-8">
                <Announcement />
              </Col>
              <Col className="col-4">
                <LinkPanel />
              </Col>
            </Row>

            <Row className="my-4">
              <Col className="col-12">
                <Projects />
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
    person: state.Auth.person
  };
};

export default connect(mapStateToProps, {
  getMyProjects,
  getMyTasks,
  getMyEvents,
  getMyMilestones,
  getMyActivities
})(withRouter(withNamespaces()(Dashboard)));

