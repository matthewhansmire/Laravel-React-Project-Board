import React, { Component } from "react";
import {
  Button, Popover, PopoverHeader, PopoverBody, Tooltip,
  Col, Row, Card, CardBody, CardTitle, CardSubtitle, Container
} from 'reactstrap';

import MetisMenu from "metismenujs";

import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import { connect } from "react-redux";
import {
  showRightBar,
  hideRightBar
} from "../../../../store/actions";

import { Icons } from '../../../../constants';

class SidebarContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSideMenuCollapsed: false,
      quickAdd: false,

      defaultColor: '#495057',
      hoverColor: '#1db545',
      hoverId: -1
    };
  }

  componentDidMount() {
    this.initMenu();
    this.checkSideMenu();
  }
  
  initMenu() {
    new MetisMenu("#side-menu");

    var matchingMenuItem = null;
    var ul = document.getElementById("side-menu");
    var items = ul.getElementsByTagName("a");
    // console.log('pathname', this.props.location.pathname);
    for (var i = 0; i < items.length; ++i) {
      // console.log('item pathname', items[i].pathname);
      if (this.props.location.pathname.split('/')[1] === items[i].pathname.split('/')[1]) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active");
      const parent = matchingMenuItem.parentElement;

      if (parent) {
        parent.classList.add("mm-active");
        const parent2 = parent.parentElement;

        if (parent2) {
          parent2.classList.add("mm-show");

          const parent3 = parent2.parentElement;

          if (parent3) {
            parent3.classList.add("mm-active"); // li
            parent3.childNodes[0].classList.add("mm-active"); //a
            const parent4 = parent3.parentElement;
            if (parent4) {
              parent4.classList.add("mm-active");
            }
          }
        }
      }
    }
  }

  checkSideMenu() {
    var isSideMenuCollapsed = document.body.classList.contains("sidebar-enable", "vertical-collpsed");
    this.setState({
      isSideMenuCollapsed: isSideMenuCollapsed
    });
  }

  toggleQuickAdd = () => {
    this.setState({ quickAdd: !this.state.quickAdd })
  }

  onItem = (itemName) => {
    this.props.showRightBar(itemName);
    this.setState({ quickAdd: false });
  }

  render() {
    return (
      <React.Fragment>
        <div id="sidebar-menu" className="pt-0">
          <div className="d-flex align-items-center py-3" style={{ marginTop: 20 }}>
            <div className="px-4 d-flex align-items-center" style={{ cursor: "pointer", color: '#a6b0cf' }} id="quickAdd" onClick={this.toggleQuickAdd}>
              <i className={`${Icons.quickAdd} font-size-24`}></i>
              {
                !this.state.isSideMenuCollapsed &&
                <span className="font-size-18 ml-2">{this.props.t('Quick Add')}</span>
              }
            </div>
            <Popover placement="right" trigger="legacy" isOpen={this.state.quickAdd} target="quickAdd" toggle={this.toggleQuickAdd} style={{ minWidth: 175, maxWidth: 175 }}>
              <PopoverHeader className="bg-white border">
                <span className="d-none d-xl-inline-block ml-1 align-self-center font-size-14"><b>Quick add</b></span>
              </PopoverHeader>
              <PopoverBody className="bg-white border">
                <div className="m-2 font-size-14" onClick={() => this.onItem('project')} onMouseEnter={() => this.setState({ hoverId: 0 })} onMouseLeave={() => this.setState({ hoverId: -1 })} style={{ cursor: "pointer", color: this.state.hoverId == 0 ? this.state.hoverColor : this.state.defaultColor }} >
                  <i className={`${Icons.project} font-size-16 align-middle mr-1`}></i>
                  {this.props.t('Project')}
                </div>
                <div className="m-2 font-size-14" onClick={() => this.onItem('template')} onMouseEnter={() => this.setState({ hoverId: 1 })} onMouseLeave={() => this.setState({ hoverId: -1 })} style={{ cursor: "pointer", color: this.state.hoverId == 1 ? this.state.hoverColor : this.state.defaultColor }} >
                  <i className={`${Icons.template} font-size-16 align-middle mr-1`}></i>
                  {this.props.t('Template')}
                </div>
                <div className="m-2 font-size-14" onClick={() => this.onItem('topic')} onMouseEnter={() => this.setState({ hoverId: 2 })} onMouseLeave={() => this.setState({ hoverId: -1 })} style={{ cursor: "pointer", color: this.state.hoverId == 2 ? this.state.hoverColor : this.state.defaultColor }} >
                  <i className={`${Icons.topic} font-size-16 align-middle mr-1`}></i>
                  {this.props.t('Topic')}
                </div>
                <div className="m-2 font-size-14" onClick={() => this.onItem('task')} onMouseEnter={() => this.setState({ hoverId: 3 })} onMouseLeave={() => this.setState({ hoverId: -1 })} style={{ cursor: "pointer", color: this.state.hoverId == 3 ? this.state.hoverColor : this.state.defaultColor }} >
                  <i className={`${Icons.task} font-size-16 align-middle mr-1`}></i>
                  {this.props.t('Task')}
                </div>
                <div className="m-2 font-size-14" onClick={() => this.onItem('event')} onMouseEnter={() => this.setState({ hoverId: 4 })} onMouseLeave={() => this.setState({ hoverId: -1 })} style={{ cursor: "pointer", color: this.state.hoverId == 4 ? this.state.hoverColor : this.state.defaultColor }} >
                  <i className={`${Icons.event} font-size-16 align-middle mr-1`}></i>
                  {this.props.t('Event')}
                </div>
                <div className="m-2 font-size-14" onClick={() => this.onItem('note')} onMouseEnter={() => this.setState({ hoverId: 5 })} onMouseLeave={() => this.setState({ hoverId: -1 })} style={{ cursor: "pointer", color: this.state.hoverId == 5 ? this.state.hoverColor : this.state.defaultColor }} >
                  <i className={`${Icons.note} font-size-16 align-middle mr-1`}></i>
                  {this.props.t('Note')}
                </div>
                <div className="m-2 font-size-14" onClick={() => this.onItem('time')} onMouseEnter={() => this.setState({ hoverId: 6 })} onMouseLeave={() => this.setState({ hoverId: -1 })} style={{ cursor: "pointer", color: this.state.hoverId == 6 ? this.state.hoverColor : this.state.defaultColor }} >
                  <i className={`${Icons.time} font-size-16 align-middle mr-1`}></i>
                  {this.props.t('Time')}
                </div>
                <div className="m-2 font-size-14" onClick={() => this.onItem('announcement')} onMouseEnter={() => this.setState({ hoverId: 7 })} onMouseLeave={() => this.setState({ hoverId: -1 })} style={{ cursor: "pointer", color: this.state.hoverId == 7 ? this.state.hoverColor : this.state.defaultColor }} >
                  <i className={`${Icons.announce} font-size-16 align-middle mr-1`}></i>
                  {this.props.t('Announcement')}
                </div>
                <div className="m-2 font-size-14" onClick={() => this.onItem('person')} onMouseEnter={() => this.setState({ hoverId: 8 })} onMouseLeave={() => this.setState({ hoverId: -1 })} style={{ cursor: "pointer", color: this.state.hoverId == 8 ? this.state.hoverColor : this.state.defaultColor }} >
                  <i className={`${Icons.person} font-size-16 align-middle mr-1`}></i>
                  {this.props.t('Person')}
                </div>
              </PopoverBody>
            </Popover>
          </div>

          <ul className="metismenu list-unstyled" id="side-menu">
            <li>
              <Link to="/me/dashboard" className="waves-effect">
                <i className={`${Icons.me}`}></i>
                <span>{this.props.t('Me')}</span>
              </Link>
            </li>
            <li>
              <Link to="/projects/assignedtome" className="waves-effect">
                <i className={`${Icons.projects}`}></i>
                <span>{this.props.t('Projects')}</span>
              </Link>
            </li>
            <li>
              <Link to="/everything/alltasks" className="waves-effect">
                <i className={`${Icons.everything}`}></i>
                <span>{this.props.t('Everything')}</span>
              </Link>
            </li>
            {
              this.props.person?.email === this.props.person?.user?.email &&
              <li>
                <Link to="/people" className="waves-effect">
                  <i className={`${Icons.people}`}></i>
                  <span>{this.props.t('People')}</span>
                </Link>
              </li>
            }
            <li>
              <Link to="/reports" className="waves-effect">
                <i className={`${Icons.reports}`}></i>
                <span>{this.props.t('Reports')}</span>
              </Link>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    person: state.Auth.person
  };
};

export default connect(mapStateToProps, {
  showRightBar,
  hideRightBar
})(withRouter(withNamespaces()(SidebarContent)));
