import React, { Component } from 'react';
import { Col, Row, Collapse, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardHeader, Modal, Container } from "reactstrap";


import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import { Icons } from '../../constants';

class SingleSelectDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singlebtn: false,
      selectedOption: {}
    }
  }

  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.selectedOption != this.props.selectedOption){      
      this.setState({
        selectedOption: this.props.selectedOption
      })

      console.log('selectedOption', this.props.selectedOption)
    }
  }

  onItem = (item) => {    
    this.setState({ selectedOption: item });
    if (this.props.onChange) {
      this.props.onChange(item);
    }
  }

  render() {
    let selectedValue = this.state.selectedOption.name ? this.state.selectedOption.name : this.state.selectedOption.title ? this.state.selectedOption.title : this.state.selectedOption.value ? this.state.selectedOption.value : '';
    return (
      <React.Fragment>
        <Dropdown
          isOpen={this.state.singlebtn}
          toggle={() =>
            this.setState({ singlebtn: !this.state.singlebtn })
          }
          className="d-flex align-items-center"
        >
          <DropdownToggle className="btn btn-sm border align-self-center d-flex justify-content-between" caret style={{ width: '100%', backgroundColor: `${this.props.bgColor ? this.props.bgColor : '#ffffff'}` }}>
            <span className="text-dark font-size-14">{selectedValue}</span>
            <i className="mdi mdi-chevron-down text-dark font-size-14 ml-2"></i>
          </DropdownToggle>
          <DropdownMenu left={this.props.left ? "true" : "false"} right={this.props.right ? true : false}>
            {/* {
              this.props.isAll && 
              <DropdownItem tag="a" href="#" className="d-flex align-items-center" onClick={() => this.onItem('All')}>
                <div className="form-check">
                  {
                    this.props.itemIconStyle === 'checkBox' ?
                      <>
                        <input className="form-check-input" type="checkbox" value="" id={`${this.props.keyName}_all`} checked={this.state.selected === 'All' ? true : false} onChange={() => { }} />
                        <label className="form-check-label" htmlFor={`${this.props.keyName}_all`}>All</label>
                      </>
                      :
                      <span>All</span>
                  }
                </div>
                <div className="dropdown-divider my-0"></div>
              </DropdownItem>
            } */}
            {
              this.props.options.map((each, index) => {
                let value = each.name ? each.name : each.title ? each.title : each.value ? each.value : '';
                return (
                  <DropdownItem key={index} tag="a" href="#" className="d-flex align-items-center" onClick={() => this.onItem(each)}>
                    <div className="form-check">
                      {
                        this.props.itemIconStyle === 'checkBox' ?
                          <>
                            <input className="form-check-input" type="checkbox" value="" id={`${this.props.keyName}_${index}`} checked={each.id == this.state.selectedOption.id ? true : false} onChange={() => { }} />
                            <label className="form-check-label" htmlFor={`${this.props.keyName}_${index}`}>{value}</label>
                          </>
                          :
                          <>
                            <span>{value}</span>
                          </>
                      }
                    </div>
                  </DropdownItem>
                )
              })
            }
          </DropdownMenu>
        </Dropdown>
      </React.Fragment>
    );
  }
}

export default withNamespaces()(SingleSelectDropdown);