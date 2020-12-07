import React, { Component } from "react";

import { connect } from "react-redux";

import AddProject from '../../App/RightPanels/AddProject';
import AddPeopleGroup from '../../App/RightPanels/AddPeopleGroup';
import AddPeoplePerson from '../../App/RightPanels/AddPeoplePerson';
import AddPeopleImport from '../../App/RightPanels/AddPeopleImport';
import AddReportCustom from '../../App/RightPanels/AddReportCustom';
import AddReportWorkload from '../../App/RightPanels/AddReportWorkload';

import Timers from '../../App/RightPanels/Timers';
import Search from '../../App/RightPanels/Search';
import QuickyBookmark from '../../App/RightPanels/QuickyBookmark';
import Notifications from '../../App/RightPanels/Notifications';

import AddTopic from '../../App/RightPanels/AddTopic';
import AddTask from '../../App/RightPanels/AddTask';
import AddEvent from '../../App/RightPanels/AddEvent';
import AddNote from '../../App/RightPanels/AddNote';
import AddTime from '../../App/RightPanels/AddTime';
import AddTimesheet from '../../App/RightPanels/AddTimesheet';
import AddAnnouncement from '../../App/RightPanels/AddAnnouncement';

import AddWorkflow from '../../App/RightPanels/AddWorkflow';
import AddTaskLabel from '../../App/RightPanels/AddTaskLabel';
import AddProjectCategory from '../../App/RightPanels/AddProjectCategory';
import AddProjectStatus from '../../App/RightPanels/AddProjectStatus';
import AddRequestForm from '../../App/RightPanels/AddRequestForm';
import AddCustomRole from '../../App/RightPanels/AddCustomRole';

import DetailTask from '../../App/RightPanels/DetailTask';
import LoggedTimeDetail from '../../App/RightPanels/LoggedTimeDetail';

class RightBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <React.Fragment>
        {/* Quick Add */}
        {
          this.props.showRightBar && this.props.rightBarKind === 'project' &&
          <AddProject />
        }        
        {
          this.props.showRightBar && this.props.rightBarKind === 'topic' &&
          <AddTopic />
        }
        {
          this.props.showRightBar && this.props.rightBarKind === 'task' &&
          <AddTask />
        }
        {
          this.props.showRightBar && this.props.rightBarKind === 'event' &&
          <AddEvent />
        }
        {
          this.props.showRightBar && this.props.rightBarKind === 'note' &&
          <AddNote />
        }
        {
          this.props.showRightBar && this.props.rightBarKind === 'time' &&
          <AddTime />
        }
        {
          this.props.showRightBar && this.props.rightBarKind === 'timesheet' && 
          <AddTimesheet />
        }
        {
          this.props.showRightBar && this.props.rightBarKind === 'announcement' &&
          <AddAnnouncement />
        }
        {
          this.props.showRightBar && this.props.rightBarKind === 'person' &&
          <AddPeoplePerson />
        }

        {/* Header */}
        {
          this.props.showRightBar && this.props.rightBarKind === 'timers' &&
          <Timers />
        }
        {
          this.props.showRightBar && this.props.rightBarKind === 'search' &&
          <Search />
        }
        {
          this.props.showRightBar && this.props.rightBarKind === 'quickyBookmark' &&
          <QuickyBookmark />
        }
        {
          this.props.showRightBar && this.props.rightBarKind === 'notifications' &&
          <Notifications />
        }

        {/* manage popup */}
        {
          this.props.showRightBar && this.props.rightBarKind === 'workflow' &&
          <AddWorkflow />
        }
        {
          this.props.showRightBar && this.props.rightBarKind === 'taskLabel' &&
          <AddTaskLabel />
        }
        {
          this.props.showRightBar && this.props.rightBarKind === 'projectCategory' &&
          <AddProjectCategory />
        }
        {
          this.props.showRightBar && this.props.rightBarKind === 'projectStatus' &&
          <AddProjectStatus />
        }
        {
          this.props.showRightBar && this.props.rightBarKind === 'requestForm' &&
          <AddRequestForm />
        }
        {
          this.props.showRightBar && this.props.rightBarKind === 'customRole' &&
          <AddCustomRole />
        }

        {/* each index pages Add button*/}
        {
          this.props.showRightBar && this.props.rightBarKind === 'group' &&
          <AddPeopleGroup />
        }
        {
          this.props.showRightBar && this.props.rightBarKind === 'person' &&
          <AddPeoplePerson />
        }
        {
          this.props.showRightBar && this.props.rightBarKind === 'peopleImport' &&
          <AddPeopleImport />
        }
        {
          this.props.showRightBar && this.props.rightBarKind === 'reportCustom' &&
          <AddReportCustom />
        }
        {
          this.props.showRightBar && this.props.rightBarKind === 'reportWorkload' &&
          <AddReportWorkload />
        }

        {/* everything page */}
        {
          this.props.showRightBar && this.props.rightBarKind === 'detailTask' &&
          <DetailTask />
        }        
        {
          this.props.showRightBar && this.props.rightBarKind === 'loggedTimeDetail' &&
          <LoggedTimeDetail />
        }


      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.RightBar
  };
};

export default connect(mapStateToProps, {})(RightBar);

