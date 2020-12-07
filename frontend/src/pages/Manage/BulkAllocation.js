import React, { Component } from "react";
import { Col, Row, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Container, Popover, PopoverHeader, PopoverBody, Button } from "reactstrap";

import "../../assets/scss/rightbar.scss";
import { Icons } from "../../constants";

import { Multiselect } from 'multiselect-react-dropdown';
import SingleSelectDropdown from '../../components/App/SingleSelectDropdown';

class BulkAllocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assigningSubscribingTos: [
        {id: 1, value: "Segunfunmi Oyedele"}
      ],
      selectedAssigningSubscribingTos: [],

      assigningSubscribingOfs: [
        {id: 1, value: "Segunfunmi Oyedele(Me)"}
      ],
      selectedAssigningSubscribingOfs: [],

      projects: [
        {id: 1, value: "Onboarding project"},
        {id: 2, value: "Completed project"}
      ],
      selectedProjects: [],

      items: [
        {id: 1, value: "Tasks"},
        {id: 2, value: "Discussions"},
        {id: 3, value: "Notes"},
        {id: 4, value: "Files"}
      ],
      selectedItems: [],

      bulkActions: [
        "Replace current assignee/subscriber with the new one",
        "Add new assignee/subscriber to the current one"
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <CardTitle>Bulk allocation</CardTitle>
        <CardHeader className="px-0 py-0 font-size-16 d-flex align-items-center justify-content-end" id="headingTwo">
          <i className={`${Icons.help} font-size-18`} style={{ cursor: "pointer" }} onClick={() => { }}></i>
        </CardHeader>
        <div className="mt-1">
          <i className="bg-warning text-secondary">Bulk allocation helps you assign and subscribe multiple tasks, files, discussions and notes of one person to another at once.</i>
        </div>
        <CardBody className="bg-white">
          <Row>
            <Col className="col-6">
              <div className="my-3">
                Assigning/subscribing items to:
                <Multiselect
                  options={this.state.assigningSubscribingTos}
                  selectedValues={this.state.selectedAssigningSubscribingTos}
                  onSelect={(selectedList, selectedItem) => console.log(selectedList, selectedItem)}
                  onRemove={(selectedList, removedItem) => console.log(selectedList, removedItem)}
                  displayValue="value"
                  avoidHighlightFirstOption
                  showCheckbox
                />
              </div>
            </Col>
            <Col className="col-6 my-3 d-flex align-items-center">This is the person who will be assigned/subscribed the selected items.</Col>
          </Row>
          <Row>
            <Col className="col-6">
              <div className="my-3">
                Assigning/subscribing items of:
                <Multiselect
                  options={this.state.assigningSubscribingOfs}
                  selectedValues={this.state.selectedAssigningSubscribingOfs}
                  onSelect={(selectedList, selectedItem) => console.log(selectedList, selectedItem)}
                  onRemove={(selectedList, removedItem) => console.log(selectedList, removedItem)}
                  displayValue="value"
                  avoidHighlightFirstOption
                  showCheckbox
                />
              </div>
            </Col>
            <Col className="col-6 my-3 d-flex align-items-center">This is the person whose items will be assigned/subscribed</Col>
          </Row>
          <Row>
            <Col className="col-6">
              <div className="my-3">
                Projects:
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
            </Col>
            <Col className="col-6 my-3 d-flex align-items-center">The person will be assigned/subscribed to the selected projects and its items.</Col>
          </Row>
          <Row>
            <Col className="col-6">
              <div className="my-3">
                Items:
                <Multiselect
                    options={this.state.items}
                    selectedValues={this.state.selectedItems}
                    onSelect={(selectedList, selectedItem) => console.log(selectedList, selectedItem)}
                    onRemove={(selectedList, removedItem) => console.log(selectedList, removedItem)}
                    displayValue="value"
                    avoidHighlightFirstOption
                    showCheckbox
                  />
              </div>
            </Col>
            <Col className="col-6 my-3 d-flex align-items-center">The person will be assigned/subscribed to the selected items.</Col>
          </Row>
          <Row>
            <Col className="col-6">
              <div className="my-3">
                Select bulk action:
                <SingleSelectDropdown keyName="bulkAction" options={this.state.bulkActions} />
              </div>
            </Col>
          </Row>

          <div className="d-flex py-3 my-5 w-100">
            <Col className="col-1 px-0">
              <Button color="primary" type="submit" onClick={() => { }} style={{ width: '100%' }}>Apply</Button>
            </Col>
            <Col className="col-1 px-1">
              <Button color="secondary" onClick={() => { }} style={{ width: '100%' }}>Reset</Button>
            </Col>
          </div>
        </CardBody>

      </React.Fragment>
    );
  }
}

export default BulkAllocation;