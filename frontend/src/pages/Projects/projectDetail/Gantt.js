import React, { Component } from 'react';
import { Row, Col, Container, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal } from 'reactstrap';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap'
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
  hideRightBar,
  getTasks
} from "../../../store/actions";

import { GanttComponent, Inject, Selection } from '@syncfusion/ej2-react-gantt';
import { projectNewData } from './GanttData';
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-buttons/styles/material.css';
import '@syncfusion/ej2-calendars/styles/material.css';
import '@syncfusion/ej2-dropdowns/styles/material.css';
import '@syncfusion/ej2-gantt/styles/material.css';
import '@syncfusion/ej2-grids/styles/material.css';
import '@syncfusion/ej2-inputs/styles/material.css';
import '@syncfusion/ej2-layouts/styles/material.css';
import '@syncfusion/ej2-lists/styles/material.css';
import '@syncfusion/ej2-navigations/styles/material.css';
import '@syncfusion/ej2-popups/styles/material.css';
import '@syncfusion/ej2-richtexteditor/styles/material.css';
import '@syncfusion/ej2-treegrid/styles/material.css';

import moment from 'moment'

import { Icons } from '../../../constants';

import TagItem from '../../../components/App/TagItem';

class Gantt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addPopup: false,
      tagItems: [
        {
          id: 0,
          label: 'Assigned',
          icon: Icons.profile,
          value: 'All'
        },
        {
          id: 1,
          label: 'View tasks',
          icon: Icons.calendar,
          value: 'Due anytime'
        }
      ],
      ganttData: []
    }

    this.taskFields = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'Subtasks'
    };
    this.labelSettings = {
      leftLabel: 'TaskName'
    };
    this.projectStartDate = new Date('10/18/2020');
    this.projectEndDate = new Date('11/31/2020');
  }

  componentDidMount() {
    var param = { project_id: this.props.match.params.id };
    if (param) {      
      this.props.getTasks(param);
    }    
  }

  componentDidUpdate(prevProps, prevState) {    
    if (prevProps.tasks != this.props.tasks) {      
      var ganttData = [];
      this.props.tasks.forEach(each => {        
        var item = {
          TaskID: each.id,
          TaskName: each.title,
          StartDate: moment(each.start_date).format(),
          EndDate: moment(each.end_date).format(),
          Duration: 5,//moment.duration(moment(each.start_data).diff(moment(each.end_date))),
          Progress: each.progress,
          Predecessor: '',          
          Subtasks: this.convertSubTasks(each.subtasks)
        };
        ganttData.push(item);
      })

      this.setState({ ganttData: ganttData });
    }
  }

  convertSubTasks = (subtasks) => {
    var cSubTasks = [];
    subtasks.forEach(each => {
      var item = {
        TaskID: each.id,
        TaskName: each.title,
        StartDate: moment(each.start_date).format(),
        EndDate: moment(each.end_date).format(),
        Duration: 4,        
      }
      cSubTasks.push(item);
    })
    return cSubTasks;
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
          <div className="d-flex align-items-center justify-content-between">
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
                  <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={() => this.props.showRightBar('tasklist')}>
                    <i className={`${Icons.listView} font-size-24 mr-2`}></i>
                    {this.props.t('List')}
                  </DropdownItem>
                  <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={() => this.props.showRightBar('task')}>
                    <i className={`${Icons.task} font-size-24 mr-2`}></i>
                    {this.props.t('Task')}
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </CardHeader>
            <div className="d-flex align-items-center">
              {
                this.state.tagItems.map((each) => (
                  <TagItem key={each.id} item={each} />
                ))
              }
              <i className={`${Icons.dotsVertical} font-size-16`} style={{ cursor: "pointer" }}></i>
            </div>
          </div>

          <div className='control-pane'>
            <div className='control-section'>
              <GanttComponent
                id='Default'
                dataSource={this.state.ganttData}
                taskFields={this.taskFields}
                labelSettings={this.labelSettings}
                projectStartDate={this.projectStartDate}
                projectEndDate={this.projectEndDate}
                height='700'
              >
                <Inject services={[Selection]} />
              </GanttComponent>
            </div>
          </div>
        </Container>
      </React.Fragment >
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.Task.tasks
  };
};

export default connect(mapStateToProps, {
  showRightBar,
  hideRightBar,
  getTasks
})(withRouter(withNamespaces()(Gantt)));