import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import megamenuImg from "../../../assets/images/megamenu-img.png";

class Section extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <section className="section hero-section bg-ico-hero" id="home">
          <div className="bg-overlay bg-primary"></div>
          <Container>
            <Row className="align-items-center">
              <Col lg="7">
                <div className="text-white">
                  <h1 className="text-white font-weight-semibold mb-3 hero-title">The one place for all your projects and team collaboration</h1>
                  <p className="font-size-16">
                    <i className="bx bx-check text-success font-size-28"></i>
                    Increase your team's productivity with our online collaboration platform.
                  </p>
                  <p className="font-size-16">
                    <i className="bx bx-check text-success font-size-28"></i>
                    Ultimate control over teams and projects easier than ever.
                  </p>
                  <p className="font-size-16">
                    <i className="bx bx-check text-success font-size-28"></i>
                    On time project delivery & on point team accountability
                  </p>
                  <p className="font-size-16">
                    <i className="bx bx-check text-success font-size-28"></i>
                    Easy-to-understand with little to no learning curve
                  </p>
                  <p className="font-size-16">
                    <i className="bx bx-check text-success font-size-28"></i>
                    No per user fee & simple fixed price plans
                  </p>

                  <div className="d-flex align-items-center mt-5">
                    <div>
                      <input className="form-control" type="text" placeholder="Your email" />
                    </div>
                    <div>
                      <Link to="/login" className="btn btn-success btn-md mx-2">Get Started for free</Link>
                    </div>
                  </div>

                  <div className="d-flex font-size-14 my-3">
                    <p className="mx-1">
                      <i className="bx bx-check text-success"></i>
                      No installation
                    </p>
                    <p className="mx-1">
                      <i className="bx bx-check text-success"></i>
                      No credit card
                    </p>
                    <p className="mx-1">
                      <i className="bx bx-check text-success"></i>
                      No chaos
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="5" md="8" sm="10" className="ml-lg-auto">
                <img
                  src={megamenuImg}
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </Col>
            </Row>

          </Container>

        </section>
      </React.Fragment>
    );
  }
}

export default Section;