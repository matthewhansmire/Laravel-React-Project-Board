import React, { Component } from "react";
import { Row, Col, Button, Form, Card } from "reactstrap";

import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import { connect } from "react-redux";
import {
  showRightBar,
  hideRightBar
} from "../../../store/actions";

import "../../../assets/scss/rightbar.scss";
import { Icons } from "../../../constants";

import { Multiselect } from 'multiselect-react-dropdown';
import SingleSelectDropdown from '../SingleSelectDropdown';

import Dropzone from "react-dropzone";

class AddAnnouncement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFiles: [],
      subscribers: [
        {id: '1', value: 'Segunfunmi Oyedele'},
        {id: '2', value: 'John Smith'},
        {id: '3', value: 'Richard Parm'},
      ],
      selectedSubscribers: [],
      lasts: [
        "24 hrs",
        "48 hrs",
        "A week",
        "Forever"
      ]
    };
  }

  handleAcceptedFiles = files => {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: this.formatBytes(file.size)
      })
    );

    this.setState({ selectedFiles: files });
  };

  formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  handleAddAll = () => {
    console.log('handle add all')
  }

  render() {
    return (
      <React.Fragment>
        <div className="right-bar w-25">

          <div data-simplebar className="h-100" style={{ minHeight: '100vh' }}>
            <div className="rightbar-title px-3 py-2">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="m-0">Add announcement</h5>
                <div>
                  <i className={`${Icons.helpS} font-size-22`} style={{ cursor: "pointer" }}></i>
                  <i className={`${Icons.closeS} font-size-24 ml-2`} style={{ cursor: "pointer" }} onClick={() => this.props.hideRightBar()}></i>
                </div>
              </div>
            </div>
            <div className="px-3 py-2">
              <Col className="col-12 px-0">
                Title:
                <input className="form-control-sm border font-size-14" type="text" defaultValue="" placeholder="" style={{ width: '100%' }} />
              </Col>
            </div>
            <div className="px-3 py-2">
              Description:
              <textarea className="form-control border font-size-14" style={{ minHeight: 100 }} type="text" defaultValue="" placeholder="" />
            </div>
            <div className="px-3 py-2">
              <i className={`${Icons.emoticon} font-size-22`} style={{ cursor: "pointer" }}></i>
            </div>

            <div className="px-3 py-2">
              Upload:
              <Form>
                <Dropzone
                  onDrop={acceptedFiles =>
                    this.handleAcceptedFiles(acceptedFiles)
                  }
                >
                  {({ getRootProps, getInputProps }) => (
                    <div className="dropzone" style={{ minHeight: 50 }}>
                      <div
                        className="dz-message needsclick mt-2"
                        {...getRootProps()}
                      >
                        <input {...getInputProps()} />
                        <div className="mb-3">
                          <i className="display-4 text-muted bx bxs-cloud-upload"></i>
                        </div>
                        <h4>Drop files here or click to upload.</h4>
                      </div>
                    </div>
                  )}
                </Dropzone>
                <div
                  className="dropzone-previews mt-3"
                  id="file-previews"
                >
                  {this.state.selectedFiles.map((f, i) => {
                    return (
                      <Card
                        className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                        key={i + "-file"}
                      >
                        <div className="p-2">
                          <Row className="align-items-center">
                            <Col className="col-auto">
                              <img
                                data-dz-thumbnail=""
                                height="80"
                                className="avatar-sm rounded bg-light"
                                alt={f.name}
                                src={f.preview}
                              />
                            </Col>
                            <Col>
                              <Link
                                to="#"
                                className="text-muted font-weight-bold"
                              >
                                {f.name}
                              </Link>
                              <p className="mb-0">
                                <strong>{f.formattedSize}</strong>
                              </p>
                            </Col>
                          </Row>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </Form>
            </div>

            <div className="px-3 py-2">              
              Subscribers:
              <Multiselect
                options={this.state.subscribers}
                selectedValues={this.state.selectedSubscribers}
                onSelect={(selectedList, selectedItem) => console.log(selectedList, selectedItem)}
                onRemove={(selectedList, removedItem) => console.log(selectedList, removedItem)}
                displayValue="value"
                avoidHighlightFirstOption
                showCheckbox
              />
            </div>

            <div className="px-3 py-2">
              <div className="form-check mb-2 d-flex align-items-center">
                <input className="form-check-input" type="checkbox" value="" id="keepSubscribersHidden" />
                <label className="form-check-label" htmlFor="keepSubscribersHidden">Keep subscribers hidden</label>
                <i className={`${Icons.help} font-size-16 ml-2`} style={{ cursor: "pointer" }}></i>
              </div>
            </div>

            <div className="px-3 py-2">
              <div className="form-check mb-2 d-flex align-items-center">
                <input className="form-check-input" type="checkbox" value="" id="allowComments" defaultChecked />
                <label className="form-check-label" htmlFor="allowComments">Allow comments</label>
              </div>
            </div>

            <div className="px-3 py-2">
              Lasts for:
              <SingleSelectDropdown keyName="lastsFor" options={this.state.lasts} />
            </div>

            <div className="px-3 py-2">
              <div className="form-check mb-2 d-flex align-items-center">
                <input className="form-check-input" type="checkbox" value="" id="pinToTop" />
                <label className="form-check-label" htmlFor="pinToTop">Pin to top</label>
              </div>
            </div>

            <div className="px-3 py-2">
              <div className="form-check mb-2 d-flex align-items-center">
                <input className="form-check-input" type="checkbox" value="" id="scheduleForFuture" />
                <label className="form-check-label" htmlFor="scheduleForFuture">Schedule for future</label>
              </div>
            </div>

          </div>

          <div className="d-flex p-3 my-2 w-100" style={{ position: 'absolute', left: 10, bottom: 10 }}>
            <Col className="col-3 px-0">
              <Button color="primary" type="submit" onClick={() => this.handleAddAll()} style={{ width: '100%' }}>Add</Button>
            </Col>
            <Col className="col-3 px-1">
              <Button color="secondary" onClick={() => this.props.hideRightBar()} style={{ width: '100%' }}>Cancel</Button>
            </Col>
          </div>

        </div>
        <div className="rightbar-overlay" onClick={() => this.props.hideRightBar()}></div>
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
})(withNamespaces()(AddAnnouncement));
