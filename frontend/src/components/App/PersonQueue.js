import React, { Component } from 'react';

import { Icons } from '../../constants';

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { getInitial } from '../../utils';
import defaultUserImg from '../../assets/images/defaultUserImg.png';

class PersonQueue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: this.props.persons ? this.props.persons : [
          { id: 0, img: defaultUserImg, value: 'Segunfunmi Oyedele', checked: true },
          { id: 1, img: defaultUserImg, value: 'John Smith', checked: false },
          { id: 2, img: '', value: 'Richard Parm', checked: false },
          { id: 3, img: defaultUserImg, value: 'Alexander Rounee', checked: false },
        ],
      addPersonPopup: false,
      isAll: this.props.isAll,
      prefix: this.props.prefix ? this.props.prefix : '',
      isPlusShow: this.props.isPlusShow
    }
  }

  componentDidMount() {

  }

  onPerson = (person) => {

  }

  togglePersonPopup = () => {
    this.setState({
      addPersonPopup: !this.state.addPersonPopup
    })
  }

  onItem = (e, item) => {
    if (item === 'All') return;
    var { persons } = this.state;
    var person = persons.find((each) => each.id == item.id);
    person.checked = e.target.checked;
    this.setState({ persons: persons });
  }

  render() {
    return (
      <React.Fragment>
        <div className="d-flex">
          {
            this.state.persons.map((each, index) => {
              if (!each.checked) return;
              return (
                <div
                  key={index}
                  className="rounded-circle bg-danger border border-white d-flex justify-content-center align-items-center"
                  style={{ width: 28, height: 28, marginLeft: -10, cursor: "pointer" }}
                  onClick={() => this.onPerson(each)}
                >
                  {
                    each.photo ?
                      <img src={each.photo} alt="" className="rounded-circle" style={{ width: '100%', height: '100%' }} />
                      :
                      <span className="font-size-16 text-white">{getInitial(each.value)}</span>
                  }
                </div>
              )
            })
          }

          <Dropdown
            isOpen={this.state.addPersonPopup}
            toggle={this.togglePersonPopup}
            className="d-flex align-items-center"
          >
            <DropdownToggle className="rounded-circle border border-white bg-secondary d-flex justify-content-center align-items-center" style={{ width: 28, height: 28, marginLeft: -10 }}>
              <i className={`${Icons.plus} font-size-16 `}></i>
            </DropdownToggle>
            <DropdownMenu right={true}>
              {
                this.state.isAll &&
                <>
                  <DropdownItem tag="a" toggle={false} href="#" className="d-flex align-items-center">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id={`${this.state.prefix}_addPersonAll`} onClick={(e) => this.onItem(e, 'All')} />
                      <label className="form-check-label" htmlFor={`${this.state.prefix}_addPersonAll`}>All</label>
                    </div>
                  </DropdownItem>
                  <div className="dropdown-divider my-0"></div>
                </>
              }
              {
                this.state.persons.map((each, index) => {
                  return (
                    <DropdownItem key={index} tag="a" toggle={false} href="#" className="d-flex align-items-center">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id={`${this.state.prefix}_addPerson_${index}`} onClick={(e) => this.onItem(e, each)} />
                        <label className="form-check-label" htmlFor={`${this.state.prefix}_addPerson_${index}`}>{each.name}</label>
                      </div>
                    </DropdownItem>
                  )
                })
              }
            </DropdownMenu>
          </Dropdown>

        </div>
      </React.Fragment >
    );
  }
}

export default PersonQueue;