import React, { Component } from 'react';
import { Col, Row, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Container } from "reactstrap";

import { Icons } from '../../constants';

class TagItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
      icon: '',
      value: ''
    }
  }

  componentDidMount() {
    var item = this.props.item ? this.props.item : '';
    this.setState({
      label: item.label,
      icon: item.icon,
      value: item.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="d-flex align-items-center">
          <div className="ml-2" style={{ minWidth: 60, minHeight: 20 }}>
            <div>
              <u className="font-size-12" style={{ textDecoration: 'none', borderBottomWidth: 1, borderBottomStyle: 'dotted' }}>{this.state.label}:</u>
            </div>
            <div className="d-flex align-items-center">
              <i className={`bx ${this.state.icon} font-size-12`}></i>
              <span className="font-size-12 mx-2">{this.state.value}</span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TagItem;