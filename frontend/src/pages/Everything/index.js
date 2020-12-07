import React, { Component } from 'react';
import { Col, Row, Container } from "reactstrap";

import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import AllTasks from './AllTasks';
import AllCalendars from './AllCalendars';
import AllTime from './AllTime';
import AllGantt from './AllGantt';
import AllActivities from './AllActivities';

class Everything extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount(){
    
  }

  render() {
    var tab = this.props.match.params.tab;
    return (
      <React.Fragment>
        <div className="page-content">
          <Container>
            {
              tab === 'alltasks' && <AllTasks />
            }
            {
              tab === 'allcalendars' && <AllCalendars />
            }
            {
              tab === 'alltime' && <AllTime />
            }
            {
              tab === 'allgantt' && <AllGantt />
            }
            {
              tab === 'allactivities' && <AllActivities />
            }
          </Container>

        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withNamespaces()(Everything));