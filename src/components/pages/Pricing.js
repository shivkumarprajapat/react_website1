import { FaCheck } from "react-icons/fa";
import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import WorkBox from '../inc/WorkBox'

function Pricing() {
    return (
        <>
            <section className="pricing section-padding" id="pricing" data-scroll-index="5">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="section-title">
                                <h2>pricing <span>plan</span></h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col lg={4} md={6}>
                            <div className="pricing-plan">
                                <div className="pricing-header">
                                    <h3>basic</h3>
                                </div>
                                <div className="pricing-price">
                                    <span className="currency">$</span>
                                    <span className="price">99</span>
                                    <span className="period">monthly</span>
                                </div>
                                <div className="pricing-body">
                                    <ul>
                                        <li><i><FaCheck /></i>5 GB Bandwidth</li>
                                        <li><i><FaCheck /></i>Free Update</li>
                                        <li><i><FaCheck /></i>High Regulation Printing</li>
                                        <li><i><FaCheck /></i>Branding</li>
                                        <li><i><FaCheck /></i>Another Great Features</li>
                                    </ul>
                                </div>
                                <div className="pricing-footer">
                                    <a href="#" className="btn-2">get started</a>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className="pricing-plan">
                                <div className="pricing-header">
                                    <h3>premium</h3>
                                </div>
                                <div className="pricing-price">
                                    <span className="currency">$</span>
                                    <span className="price">149</span>
                                    <span className="period">monthly</span>
                                </div>
                                <div className="pricing-body">
                                    <ul>
                                        <li><i><FaCheck /></i>5 GB Bandwidth</li>
                                        <li><i><FaCheck /></i>Free Update</li>
                                        <li><i><FaCheck /></i>High Regulation Printing</li>
                                        <li><i><FaCheck /></i>Branding</li>
                                        <li><i><FaCheck /></i>Another Great Features</li>
                                    </ul>
                                </div>
                                <div className="pricing-footer">
                                    <a href="#" className="btn-2">get started</a>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className="pricing-plan">
                                <div className="pricing-header">
                                    <h3>ultimate</h3>
                                </div>
                                <div className="pricing-price">
                                    <span className="currency">$</span>
                                    <span className="price">199</span>
                                    <span className="period">monthly</span>
                                </div>
                                <div className="pricing-body">
                                    <ul>
                                        <li><i><FaCheck /></i>5 GB Bandwidth</li>
                                        <li><i><FaCheck /></i>Free Update</li>
                                        <li><i><FaCheck /></i>High Regulation Printing</li>
                                        <li><i><FaCheck /></i>Branding</li>
                                        <li><i><FaCheck /></i>Another Great Features</li>

                                    </ul>
                                </div>
                                <div className="pricing-footer">
                                    <a href="#" className="btn-2">get started</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* How it Works Section Start */}
            <section className="how-it-works section-padding">
                <Container>
                    <Row className="justify-content-center">
                        <div className="section-title">
                            <h2>how it <span>Works</span></h2>
                        </div>
                    </Row>
                    <Row>
                        <Col lg={3} md={6}>
                            <WorkBox counter="1" ttl="Download" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" />
                        </Col>
                        <Col lg={3} md={6}>
                            <WorkBox counter="2" ttl="Create Profile" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" />
                        </Col>
                        <Col lg={3} md={6}>
                            <WorkBox counter="3" ttl="Search Product" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" />
                        </Col>
                        <Col lg={3} md={6} id="line" >
                            <WorkBox counter="4" ttl="Order" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" />
                        </Col>
                    </Row>

                </Container>
            </section>

            {/* ./How it Works Section End */}
        </>
    )
}

export default Pricing
