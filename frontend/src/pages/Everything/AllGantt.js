import React, { Component } from 'react';

import { Row, Col, Container, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Button } from 'reactstrap';

import { withRouter } from "react-router-dom";
import { withNamespaces } from 'react-i18next';
import { connect } from "react-redux";
import {
  showRightBar,
  hideRightBar,
  getProjectsTasks
} from "../../store/actions";

import { GanttComponent, Inject, Selection } from '@syncfusion/ej2-react-gantt';
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

import moment from 'moment';

import { Icons } from '../../constants';

import TagItem from '../../components/App/TagItem';

class AllGantt extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.props.getProjectsTasks();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.projectsTasks != this.props.projectsTasks) {
      // console.log('projectsTasks', this.props.projectsTasks);
      var ganttData = [];
      this.props.projectsTasks.forEach(each => {
        var item = {
          TaskID: each.id,
          TaskName: each.title,
          StartDate: moment(each.start_date).format(),
          EndDate: moment(each.end_date).format(),
          Duration: 5,//moment.duration(moment(each.start_data).diff(moment(each.end_date))),
          Progress: 30,
          Predecessor: '',
          Subtasks: []//each.tasks
        };
        ganttData.push(item);
      })

      this.setState({ ganttData: ganttData });
    }
  }

  render() {
    return (
      <React.Fragment>
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

        {/* <Row>
          <Col className="col-12 d-flex justify-content-center align-items-center" style={{ height: 700 }}>
            <div>
              <Row className="justify-content-center">
                <span>See all gantt data across particular projects that you select here</span>
              </Row>
              <Row className="justify-content-center">
                <Col className="col-6">
                  <Button className="mt-3" color="success" type="submit" onClick={() => { }} style={{ width: '100%' }}>Select project</Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row> */}
      </React.Fragment >
    );
  }
}

const mapStateToProps = state => {
  return {
    projectsTasks: state.Gantt.projectsTasks
  };
};

export default connect(mapStateToProps, {
  showRightBar,
  hideRightBar,
  getProjectsTasks
})(withRouter(withNamespaces()(AllGantt)));