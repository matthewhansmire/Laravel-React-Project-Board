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
import ColorPicker from '../ColorPicker';

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        "Onboarding project",
        "Completed project"
      ],
      notebooks: [
        "Happy customers",
        "Minutes of meeting",
        "ProjHub's top features"
      ],
      subscribers: [
        {id: 1, value: 'Segunfunmi Oyedele'},
        {id: 2, value: 'Normal User'},
      ],
      selectedSubscribers: [],
      colorCode: ''
    };
  }

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
                <h5 className="m-0">Add note</h5>
                <div>
                  <i className={`${Icons.helpS} font-size-22`} style={{ cursor: "pointer" }}></i>
                  <i className={`${Icons.closeS} font-size-24 ml-2`} style={{ cursor: "pointer" }} onClick={() => this.props.hideRightBar()}></i>
                </div>
              </div>
            </div>
            <div className="px-3 py-2">
              Project:
              <SingleSelectDropdown keyName="project" options={this.state.projects} />
            </div>
            <div className="px-3 py-2">
              Notebook:
              <SingleSelectDropdown keyName="notebook" options={this.state.notebooks} />
            </div>
            <div className="px-3 py-2">
              Title:
              <input className="form-control-sm border font-size-14" type="text" defaultValue="" placeholder="" style={{ width: '100%' }} />
            </div>
            <div className="px-3 py-2">
              <div className="form-check mb-2 d-flex align-items-center">
                <input className="form-check-input" type="checkbox" value="" id="markAsPrivate" />
                <label className="form-check-label" htmlFor="markAsPrivate">Mark as private</label>
                <i className={`${Icons.help} font-size-16 ml-2`} style={{ cursor: "pointer" }}></i>
              </div>
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
              Color:
              {/* <ColorPicker colorCode={this.state.colorCode} setColor={(code) => { this.setState({ colorCode: code }); console.log(code) }} /> */}
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
})(withNamespaces()(AddNote));
