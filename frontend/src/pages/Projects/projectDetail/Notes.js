import React, { Component } from 'react';
import { Row, Col, Container, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Button } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink, Media, Badge } from 'reactstrap';
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
} from "../../../store/actions";

import { Icons } from '../../../constants';

import TagItem from '../../../components/App/TagItem';

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addPopup: false,
      tagItems: [
        {
          id: 0,
          label: 'Subscribers',
          icon: Icons.profile,
          value: 'All'
        }
      ],
      activeNoteId: 0,
      noteData: [
        {
          id: 0,
          title: 'Happy Customers',
          notes: [
            {
              id: 0,
              title: 'Reviews',
              desc: 'I recommend ProjHub(PH) because projects in PH are easy to manage. PH has many useful features, a user-friendly interf',
              subscribers: [],
              color: 'danger',
              days: 3
            },
            {
              id: 1,
              title: 'Readme',
              desc: 'Here are few important links for you to follow us or share your love for ProjHub',
              subscribers: [],
              color: 'success',
              days: 2
            },
          ],
          days: 3
        },
        {
          id: 1,
          title: 'ProjHub\'s top features',
          notes: [
            {
              id: 0,
              title: 'Important Features',
              desc: 'Custom roles: Custom roles enable you to give special privileges or restrict access to your team members, clients...',
              subscribers: [],
              color: 'secondary',
              days: 3
            }
          ],
          days: 3
        },
        {
          id: 2,
          title: 'Minutes of meeting',
          notes: [
            {
              id: 0,
              title: 'Weekly MoM Template',
              desc: 'Meeting Organizer: Attendees Meeting Agenda Issue added by Issue Details Date Priority',
              subscribers: [],
              color: 'secondary',
              days: 3
            },
            {
              id: 1,
              title: 'Week 1 MoM',
              desc: 'Today\'s meeting was to discuss if the project is progressing as planned and if there are more requirements',
              subscribers: [],
              color: 'info',
              days: 3
            }
          ],
          days: 3
        }
      ]
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
                    <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={() => this.props.showRightBar('notebook')}>
                      <i className={`${Icons.notebook} font-size-24 mr-2`}></i>
                      {this.props.t('Notebook')}
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <i className={`${Icons.filterAlt} font-size-20 align-middle`} style={{ cursor: "pointer" }} onClick={() => { }}></i>
              </CardHeader>

              <CardTitle>
                {
                  this.state.noteData.map((each, index) => (
                    <div key={index}>
                      <div className="">
                        <span className={`font-size-14 ${this.state.activeNoteId == each.id ? 'text-info' : null}`} onClick={() => this.setState({ activeNoteId: each.id })} style={{ cursor: "pointer" }}>{each.title}</span>
                        <br />
                        <div className="d-flex align-items-center justify-content-between">
                          <span className="font-size-12">{each.notes.length} notes - {each.days} days</span>
                        </div>
                      </div>
                      <hr className="my-2" />
                    </div>
                  ))
                }
              </CardTitle>
            </Col>

            <Col id="rightPanel" className="col-10 border">
              <CardHeader className="px-0 py-3 font-size-16 d-flex align-items-center justify-content-between" id="headingRight">
                <Button color="secondary" type="submit" onClick={() => this.props.showRightBar('note')}>Add note</Button>
                <div className="d-flex align-items-center">
                  {
                    this.state.tagItems.map((each) => (
                      <TagItem key={each.id} item={each} />
                    ))
                  }
                </div>
              </CardHeader>
              <CardBody className="px-0 py-1">
                <Row>
                  {
                    this.state.noteData[this.state.activeNoteId].notes.map((note, key) =>
                      <Col xl="3" sm="4" key={"_note_" + key}>
                        <Card style={{ minHeight: 196, maxHeight: 196 }}>
                          <CardBody>
                            <Media className="overflow-hidden" body>
                              <h5 className="text-truncate font-size-15">{note.title}</h5>
                              <p className="text-muted mb-2">{note.desc}</p>
                              <Badge color={note.color}>{note.subscribers.length}</Badge>
                              <div className="d-flex justify-content-between mt-2">
                                <span className="text-muted">{note.days} days</span>
                              </div>
                            </Media>
                          </CardBody>
                        </Card>
                      </Col>
                    )
                  }
                </Row>
                <Row>
                  <Col className="col-12">
                    <Pagination className="pagination pagination-rounded justify-content-center mt-2 mb-5">
                      <PaginationItem disabled>
                        <PaginationLink previous href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">
                          1
                                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem active>
                        <PaginationLink href="#">
                          2
                                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">
                          3
                                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink next href="#" />
                      </PaginationItem>
                    </Pagination>
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
})(withRouter(withNamespaces()(Notes)));