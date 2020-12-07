import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

//Images
import client1 from "../../../assets/images/clients/1.png";
import client2 from "../../../assets/images/clients/2.png";
import client3 from "../../../assets/images/clients/3.png";
import client4 from "../../../assets/images/clients/4.png";
import client5 from "../../../assets/images/clients/5.png";
import client6 from "../../../assets/images/clients/6.png";

class HowItWorks extends Component {
  state = {
    step1: true,
    step2: false,
    responsive: {
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
    clients: [
      { imgUrl: client1 },
      { imgUrl: client2 },
      { imgUrl: client3 },
      { imgUrl: client4 },
      { imgUrl: client5 },
      { imgUrl: client6 },
    ]
  }
  render() {
    return (
      <React.Fragment>
        <section className="section bg-white py-4" id="howItWorks">
          <Container>
            <Row>
              <Col lg="12">
                <div className="text-center mb-5">
                  <div className="small-title">How It Works</div>
                  <h4>How it works?</h4>
                </div>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col lg="5">
                <div className="text-muted">
                  <h4>Loved 85,000+ teams and business worldwide</h4>
                  <p>If several languages coalesce, the grammar of the resulting that of the individual new common language will be more simple and regular than the existing.</p>
                  <p className="mb-4">It would be necessary to have uniform pronunciation.</p>

                  <div className="button-items">
                    <Link to="#" className="btn btn-success mr-1">Read More</Link>
                    <Link to="#" className="btn btn-outline-primary">How It work</Link>
                  </div>

                  <Row className="mt-4">
                    <Col lg="4" xs="6">
                      <div className="mt-4">
                        <h4>$ 6.2 M</h4>
                        <p>Invest amount</p>
                      </div>
                    </Col>
                    <Col lg="4" xs="6">
                      <div className="mt-4">
                        <h4>16245</h4>
                        <p>Users</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>

              <Col lg="6" className="ml-auto">
                <div className="mt-4 mt-lg-0">
                  <Row>
                    <Col sm="6">
                      <Card className="border">
                        <CardBody>
                          <div className="mb-3">
                            <i className="mdi mdi-bitcoin h2 text-success"></i>
                          </div>
                          <h5>Lending</h5>
                          <p className="text-muted mb-0">At vero eos et accusamus et iusto blanditiis</p>

                        </CardBody>
                        <div className="card-footer bg-transparent border-top text-center">
                          <Link to="#" className="text-primary">Learn more</Link>
                        </div>
                      </Card>
                    </Col>
                    <Col sm="6">
                      <Card className="border mt-lg-5">
                        <CardBody>
                          <div className="mb-3">
                            <i className="mdi mdi-wallet-outline h2 text-success"></i>
                          </div>
                          <h5>Wallet</h5>
                          <p className="text-muted mb-0">Quis autem vel eum iure reprehenderit</p>

                        </CardBody>
                        <div className="card-footer bg-transparent border-top text-center">
                          <Link to="#" className="text-primary">Learn more</Link>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>

            <hr className="my-2" />
            
          </Container>

        </section>
      </React.Fragment>
    );
  }
}

export default HowItWorks;