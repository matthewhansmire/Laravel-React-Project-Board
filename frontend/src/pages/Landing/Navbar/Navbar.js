import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse
} from "reactstrap";
import { Link } from "react-router-dom";
import ScrollspyNav from "./scrollSpy";

//Import Images
import logodark from "../../../assets/images/logo-dark.png";
import logolight from "../../../assets/images/logo-light.png";

class Navbar_Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "home", navheading: "Home" },
        { id: 2 , idnm : "features", navheading: "Features" },
        { id: 3, idnm: "howItWorks", navheading: "How it works" },
        { id: 3 , idnm : "pricing", navheading: "Pricing" },
        { id: 4 , idnm : "productUpdates", navheading: "Product Updates" },
        { id: 5 , idnm : "support", navheading: "Suppoprt" },
        { id: 6, idnm: "faqs", navheading: "FAQs" },
      ],
      isOpenMenu: false
    };
  }

  toggle = () => {
    this.setState({ isOpenMenu: !this.state.isOpenMenu });
  }

  render() {
    //Store all Navigationbar Id into TargetID variable(Used for Scrollspy)
    let TargetId = this.state.navItems.map((item) => {
      return (
        item.idnm
      )
    });
    return (
      <React.Fragment>
        <Navbar expand="lg" fixed="top" className={"navigation sticky " + this.props.navClass}>
          <Container>
            <NavbarBrand className="navbar-logo" href="/">
              {
                this.props.imglight !== true ?
                  <img src={logodark} alt="" height="19" className="logo logo-dark" />
                  : <img src={logolight} alt="" height="19" className="logo logo-light" />
              }
            </NavbarBrand>

            <NavbarToggler className="p-0" onClick={this.toggle} ><i className="fa fa-fw fa-bars"></i></NavbarToggler>

            <Collapse id="topnav-menu-content" isOpen={this.state.isOpenMenu} navbar>
              <ScrollspyNav
                scrollTargetIds={TargetId}
                scrollDuration="300"
                headerBackground="true"
                activeNavClass="active"
                className="navbar-collapse"
              >
                <Nav className="ml-auto navbar-nav" id="topnav-menu">
                  {this.state.navItems.map((item, key) => (
                    <NavItem key={key} className={item.navheading === "Home" ? "active" : ""}>
                      <NavLink href={"#" + item.idnm} > {item.navheading}</NavLink>
                    </NavItem>
                  ))}
                </Nav>
              </ScrollspyNav>
              <div className="ml-lg-2">
                <Link to="/login" className="btn btn-outline-success w-xs">Sign in</Link>
              </div>
              <div className="ml-lg-2">
                <Link to="/me/dashboard" className="btn btn-outline-success w-xs">Start your free trial</Link>
              </div>
            </Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Navbar_Page;