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

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        { id: 1, value: "Onboarding project" },
      ],
      selectedProjects: [],

      sections: [
        { id: 1, value: "Projects" },
        { id: 2, value: "People" },
        { id: 3, value: "Discussions" },
        { id: 4, value: "Tasks" },
        { id: 5, value: "Calendar" },
        { id: 6, value: "Notes" },
        { id: 7, value: "Files" },
        { id: 8, value: "Time" },
        { id: 9, value: "Announcements" }
      ],
      selectedSections: []
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="right-bar w-25">

          <div data-simplebar className="h-100" style={{ minHeight: '100vh' }}>
            <div className="rightbar-title px-3 py-2">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="m-0">Search</h5>
                <div>
                  <i className={`${Icons.helpS} font-size-22`} style={{ cursor: "pointer" }}></i>
                  <i className={`${Icons.closeS} font-size-24 ml-2`} style={{ cursor: "pointer" }} onClick={() => this.props.hideRightBar()}></i>
                </div>
              </div>
            </div>
            <div className="px-3 py-2">
              <input className="form-control border font-size-14" type="text" defaultValue="" placeholder="Search" />
            </div>
            <div className="px-3 py-2 d-flex justify-content-between align-items-center">
              <div style={{width: '48%'}}>
                <span className="font-size-14 mr-2">Projects:</span>
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
              <div style={{width: '48%'}}>
                <span className="font-size-14 mr-2">Sections:</span>
                <Multiselect
                  options={this.state.sections}
                  selectedValues={this.state.selectedSections}
                  onSelect={(selectedList, selectedItem) => console.log(selectedList, selectedItem)}
                  onRemove={(selectedList, removedItem) => console.log(selectedList, removedItem)}
                  displayValue="value"
                  avoidHighlightFirstOption
                  showCheckbox
                />
              </div>
            </div>
            <hr className="my-0" />

            <div className="px-4 py-4 d-flex flex-column justify-content-center align-items-center" style={{ height: '80vh' }}>
              <i className={`${Icons.search} font-size-80`}></i>
              <br />
              <span className="font-size-14 text-secondary">Find what you are looking for using relevant keywords and phrases here</span>
            </div>

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
})(withNamespaces()(Search));
