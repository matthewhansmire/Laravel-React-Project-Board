import React, { Component } from 'react';
import { Col, Row, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Container } from "reactstrap";
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap'

import { withNamespaces } from 'react-i18next';
import { Redirect, withRouter } from "react-router-dom";

import { Icons } from '../../../constants';

class ItemPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultColor: '#495057',
      hoverColor: this.props.projectOrTemplate?.color?.code,
      hoverId: -1
    }
  }

  componentDidMount() {
    
  }

  onItem = (itemName, id) => {
    var path = '';
    if(itemName === 'reports') {
      path = itemName
    }
    else {
      path = '/projects/detail/' + itemName + '/' + this.props.projectOrTemplate.id;
    }

    this.props.history.push(path, {type: this.props.type})
  }

  render() {
    return (
      <React.Fragment>
        <Popover placement="bottom" trigger="legacy" isOpen={this.props.isOpen} target='itemPopup' toggle={this.props.toggleItemPopup} style={{ minWidth: 175, maxWidth: 175, border: `2px solid ${this.props.projectOrTemplate.color?.code}`, borderRadius: 5 }} >
          <PopoverBody className="bg-white">
            <div className="m-2 font-size-14" onClick={() => this.onItem('overview', 0)} onMouseEnter={()=>this.setState({hoverId: 0})} onMouseLeave={()=>this.setState({hoverId: -1})} style={{ cursor: "pointer", color: this.state.hoverId == 0 ? this.state.hoverColor : this.state.defaultColor}} >
              <i className={`${Icons.overview} font-size-16 align-middle mr-1`}></i>
              {this.props.t('Overview')}
            </div>
            <div className="m-2 font-size-14" onClick={() => this.onItem('discussions', 1)} onMouseEnter={()=>this.setState({hoverId: 1})} onMouseLeave={()=>this.setState({hoverId: -1})} style={{ cursor: "pointer", color: this.state.hoverId == 1 ? this.state.hoverColor : this.state.defaultColor}} >
              <i className={`${Icons.discussions} font-size-16 align-middle mr-1`}></i>
              {this.props.t('Discussions')}
            </div>
            <div className="m-2 font-size-14" onClick={() => this.onItem('tasks', 2)} onMouseEnter={()=>this.setState({hoverId: 2})} onMouseLeave={()=>this.setState({hoverId: -1})} style={{ cursor: "pointer", color: this.state.hoverId == 2 ? this.state.hoverColor : this.state.defaultColor}} >
              <i className={`${Icons.tasks} font-size-16 align-middle mr-1`}></i>
              {this.props.t('Tasks')}
            </div>
            <div className="m-2 font-size-14" onClick={() => this.onItem('gantt', 3)} onMouseEnter={()=>this.setState({hoverId: 3})} onMouseLeave={()=>this.setState({hoverId: -1})} style={{ cursor: "pointer", color: this.state.hoverId == 3 ? this.state.hoverColor : this.state.defaultColor}} >
              <i className={`${Icons.gantt} font-size-16 align-middle mr-1`}></i>
              {this.props.t('Gantt')}
            </div>
            <div className="m-2 font-size-14" onClick={() => this.onItem('calendar', 4)} onMouseEnter={()=>this.setState({hoverId: 4})} onMouseLeave={()=>this.setState({hoverId: -1})} style={{ cursor: "pointer", color: this.state.hoverId == 4 ? this.state.hoverColor : this.state.defaultColor}} >
              <i className={`${Icons.calendar} font-size-16 align-middle mr-1`}></i>
              {this.props.t('Calendar')}
            </div>
            <div className="m-2 font-size-14" onClick={() => this.onItem('notes', 5)} onMouseEnter={()=>this.setState({hoverId: 5})} onMouseLeave={()=>this.setState({hoverId: -1})} style={{ cursor: "pointer", color: this.state.hoverId == 5 ? this.state.hoverColor : this.state.defaultColor}} >
              <i className={`${Icons.notes} font-size-16 align-middle mr-1`}></i>
              {this.props.t('Notes')}
            </div>
            <div className="m-2 font-size-14" onClick={() => this.onItem('files', 6)} onMouseEnter={()=>this.setState({hoverId: 6})} onMouseLeave={()=>this.setState({hoverId: -1})} style={{ cursor: "pointer", color: this.state.hoverId == 6 ? this.state.hoverColor : this.state.defaultColor}} >
              <i className={`${Icons.files} font-size-16 align-middle mr-1`}></i>
              {this.props.t('Files')}
            </div>
            <div className="m-2 font-size-14" onClick={() => this.onItem('time', 7)} onMouseEnter={()=>this.setState({hoverId: 7})} onMouseLeave={()=>this.setState({hoverId: -1})} style={{ cursor: "pointer", color: this.state.hoverId == 7 ? this.state.hoverColor : this.state.defaultColor}} >
              <i className={`${Icons.timeFive} font-size-16 align-middle mr-1`}></i>
              {this.props.t('Time')}
            </div>
            <div className="m-2 font-size-14" onClick={() => this.onItem('report', 8)} onMouseEnter={()=>this.setState({hoverId: 8})} onMouseLeave={()=>this.setState({hoverId: -1})} style={{ cursor: "pointer", color: this.state.hoverId == 8 ? this.state.hoverColor : this.state.defaultColor}} >
              <i className={`${Icons.report} font-size-16 align-middle mr-1`}></i>
              {this.props.t('Report')}
            </div>
          </PopoverBody>
        </Popover>

      </React.Fragment>
    );
  }
}

export default withRouter(withNamespaces()(ItemPopup));