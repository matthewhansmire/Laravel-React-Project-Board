import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";

import { withRouter } from "react-router-dom";
import { withNamespaces } from 'react-i18next';

import { connect } from "react-redux";
import {
  showRightBar,
  hideRightBar
} from "../../../store/actions";

import "../../../assets/scss/rightbar.scss";
import { Icons } from "../../../constants";

import { Multiselect } from 'multiselect-react-dropdown';
import ColorPicker from '../ColorPicker';

class AddTaskLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorCode: '',
      projects: [
        {id: 1, value: "Onboarding project"},
        {id: 2, value: "Completed project"}
      ],
      selectedProjects: []
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
                <h5 className="m-0">Add task label</h5>
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
              <div className="py-3">
                {/* <ColorPicker colorCode={this.state.colorCode} setColor={(code) => { this.setState({ colorCode: code }); console.log(code) }} /> */}
              </div>
            </div>
            <div className="px-3 py-2">
              Projects:
              <div className="form-group mb-0" onChange={(e) => console.log(e.target.value)}>
                <div className="form-check mb-1">
                  <input className="form-check-input" type="radio" name="projects" id="projectAllRadio" value="projectAll" />
                  <label className="form-check-label" htmlFor="projectAllRadio">All</label>
                </div>
                <div className="form-check mb-1">
                  <input className="form-check-input" type="radio" name="projects" id="projectSelectRadio" value="projectSelect" />
                  <Multiselect
                    options={this.state.projects}
                    selectedValues={this.state.selectedProjects}
                    onSelect={(selectedList, selectedItem) => console.log(selectedList, selectedItem)}
                    onRemove={(selectedList, removedItem) => console.log(selectedList, removedItem)}
                    displayValue="value"
                    avoidHighlightFirstOption
                    showCheckbox
                  />
                </div>
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
})(withNamespaces()(AddTaskLabel));
