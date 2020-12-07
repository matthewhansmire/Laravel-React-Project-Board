import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavLink, NavItem, Col, Row, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Container } from "reactstrap";

import { Icons } from '../../constants';
import classnames from "classnames";


class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
      selectedColor: {}
    }
  }

  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.colors != this.props.colors){
      this.setState({colors: this.props.colors})
    }
    if(prevProps.selectedColor != this.props.selectedColor){
      this.setState({selectedColor: this.props.selectedColor});
    }
  }

  onPick = (color) => {    
    this.setState({selectedColor: color});
    this.props.setColor(color);
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col className="col-12 d-flex flex-wrap">
            {
              this.state.colors.map((each) => (
                <div key={each.id} className="d-flex align-items-center ml-1 my-1" style={{ cursor: "pointer", backgroundColor: `${each.code}`, width: 20, height: 20, borderRadius: 10 }} onClick={() => this.onPick(each)}>
                  {
                    this.state.selectedColor.id === each.id &&
                    <i className={`${Icons.myActivities} font-size-24 text-white`}></i>
                  }
                </div>
              ))
            }
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default ColorPicker;