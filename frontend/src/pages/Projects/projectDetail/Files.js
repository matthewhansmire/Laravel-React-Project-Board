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

import img1 from "../../../assets/images/small/img-1.jpg";
import img2 from "../../../assets/images/small/img-2.jpg";
import img3 from "../../../assets/images/small/img-3.jpg";

import { Icons } from '../../../constants';

import TagItem from '../../../components/App/TagItem';

class Files extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addPopup: false,
      tagItems: [
        {
          id: 0,
          label: 'View',
          icon: Icons.eye,
          value: 'All'
        },
        {
          id: 1,
          label: 'Sort by',
          icon: Icons.sortByS,
          value: 'Date'
        }
      ],
      activeCateId: 0,
      fileData: [
        {
          id: 0,
          cate: 'All Files',
          files: [
            {
              id: 0,
              title: 'File management made easy.png',
              img: img1,
              days: 3
            },
            {
              id: 1,
              title: 'Resource.png',
              img: img2,
              days: 3
            },
            {
              id: 2,
              title: 'version_history.png',
              img: img3,
              days: 3
            },
          ],
          days: 3
        },
        {
          id: 1,
          cate: 'Fall',
          files: [],
          days: 3
        },
        {
          id: 2,
          cate: 'Spring',
          files: [],
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
                    <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={() => this.props.showRightBar('folder')}>
                      <i className={`${Icons.project} font-size-24 mr-2`}></i>
                      {this.props.t('Folder')}
                    </DropdownItem>
                    <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={() => this.props.showRightBar('file')}>
                      <i className={`${Icons.upload} font-size-24 mr-2`}></i>
                      {this.props.t('Upload files')}
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <i className={`${Icons.filterAlt} font-size-20 align-middle`} style={{ cursor: "pointer" }} onClick={() => { }}></i>
              </CardHeader>

              <CardTitle>
                {
                  this.state.fileData.map((each, index) => (
                    <div key={index}>
                      <div className="">
                        <span className={`font-size-14 ${this.state.activeCateId == each.id ? 'text-info' : null}`} onClick={() => this.setState({ activeCateId: each.id })} style={{ cursor: "pointer" }}>{each.cate}</span>
                        <br />
                        <div className="d-flex align-items-center justify-content-between">
                          <span className="font-size-12">{each.files.length} notes - {each.days} days</span>
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
                <Button color="secondary" type="submit" onClick={() => this.props.showRightBar('file')}>Add File</Button>
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
                    this.state.fileData[this.state.activeCateId].files.map((file, key) =>
                      <Col xl="3" sm="4" key={"_note_" + key}>
                        <Card>
                          <CardBody>
                            <Media className="overflow-hidden" body>
                              <CardImg src={file.img} alt="Skote" className="w-100" />
                              <h5 className="text-truncate font-size-15 mt-2">{file.title}</h5>
                              <p className="text-info mt-2">Proof this file</p>
                              <div className="d-flex justify-content-between mt-2">
                                <span className="text-muted">{file.days} days</span>
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
})(withRouter(withNamespaces()(Files)));