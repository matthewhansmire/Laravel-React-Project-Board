import React, { Component } from 'react';
import { Row, Col, Container, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal } from 'reactstrap';

import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";

import { Icons } from '../../constants';

import TagItem from '../../components/App/TagItem';

class AllActivities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagItems: [
        {
          id: 0,
          label: 'Projects',
          icon: Icons.projects,
          value: 'All'
        },
        {
          id: 1,
          label: 'people',
          icon: Icons.people,
          value: 'All'
        }
      ],
      collapse: true // processing to array later
    }
  }

  toggleCollapse = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  onItem = (e) => {

  }

  render() {
    return (
      <React.Fragment>
        <div className="d-flex justify-content-end">
          {
            this.state.tagItems.map((each) => (
              <TagItem key={each.id} item={each} />
            ))
          }
        </div>

        <Card className="my-2">
          <CardHeader className="p-3 d-flex font-size-16 bg-white" id="headingOne" onClick={this.toggleCollapse}>
            <span style={{ cursor: "pointer" }} className="text-dark mx-2">Oct 15</span>
          </CardHeader>

          <Collapse isOpen={this.state.collapse}>
            <CardBody>
              <Row>
                <Col className="col-1 d-flex justify-content-center">
                  <CardImg src={avatar1} alt="Skote" className="rounded-circle avatar-xs" style={{ width: 40, height: 40 }} />
                </Col>
                <Col className="col-10 px-0">
                  <span><b>Segunfunmi Oyedele</b> - Tasks - Added task in <b>List of tasks</b></span>
                  <Col className="col-6 d-flex px-0 py-2">
                    <Col className="col-1 d-flex align-items-center justify-content-center border">
                      <input type="checkbox" value="" id='task3' onClick={(e) => this.onItem(e)} style={{cursor: "pointer"}} />
                    </Col>
                    <Col className="col-11 border">
                      <label className="form-check-label" htmlFor='task3' style={{cursor: "pointer"}}>Third task</label>
                    </Col>
                  </Col>
                  <div className="d-flex align-items-center">
                    <i className={`${Icons.onboardingS}`}></i>
                    <span className="font-size-14 ml-2">Onboarding project</span>
                  </div>
                </Col>
                <Col className="col-1">
                  a day
                </Col>
              </Row>
              <hr className="my-2" />

              <Row>
                <Col className="col-1 d-flex justify-content-center">
                  <CardImg src={avatar1} alt="Skote" className="rounded-circle avatar-xs" style={{ width: 40, height: 40 }} />
                </Col>
                <Col className="col-10 px-0">
                  <span><b>Segunfunmi Oyedele</b> - Tasks - Added tasklist</span>
                  <Col className="col-6 d-flex px-0 py-2" onClick={() => { }}>
                    <Col className="col-1 d-flex align-items-center justify-content-center border" style={{cursor: "pointer"}}>
                      <i className={`${Icons.listOfTasks} font-size-18`}></i>
                    </Col>
                    <Col className="col-11 border">
                      <label className="form-check-label" htmlFor='task2' style={{cursor: "pointer"}}>Second task</label>
                    </Col>
                  </Col>
                  <div className="d-flex align-items-center">
                    <i className={`${Icons.onboardingS}`}></i>
                    <span className="font-size-14 ml-2">Onboarding project</span>
                  </div>
                </Col>
                <Col className="col-1">
                  a day
                </Col>
              </Row>
              <hr className="my-2" />

              <Row>
                <Col className="col-1 d-flex justify-content-center">
                  <CardImg src={avatar1} alt="Skote" className="rounded-circle avatar-xs" style={{ width: 40, height: 40 }} />
                </Col>
                <Col className="col-10 px-0">
                  <span><b>Segunfunmi Oyedele</b> - Project - Assigned people to project</span>
                  {
                    [
                      { photo: avatar1, name: 'Segunfunmi Oyedele' },
                      { photo: avatar2, name: 'Samantha Hanson' },
                      { photo: avatar3, name: 'Danial Craig' },
                      { photo: avatar5, name: 'Gabriel Pinto' },
                      { photo: avatar8, name: 'Amanda Walker' },
                    ].map((each, index) => {
                      return (
                        <Row key={index}>
                          <Col className="col-6 d-flex align-items-center px-3 py-2" onClick={() => { }} style={{cursor: "pointer"}}>
                            <CardImg src={each.photo} alt="Skote" className="rounded-circle avatar-xs" style={{ width: 30, height: 30 }} />
                            <span className="ml-2">{each.name}</span>
                          </Col>
                        </Row>
                      )
                    })
                  }
                  <div className="d-flex align-items-center">
                    <i className={`${Icons.onboardingS}`}></i>
                    <span className="font-size-14 ml-2">Onboarding project</span>
                  </div>
                </Col>
                <Col className="col-1">
                  a day
                </Col>
              </Row>

            </CardBody>
          </Collapse>
        </Card>
      </React.Fragment >
    );
  }
}

export default AllActivities;