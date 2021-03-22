import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";

function Contact() {
    return (
        <>
            <section className="contact section-padding" id="contact" data-scroll-index="6">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="section-title">
                                <h2>get in <span>touch</span></h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={5}>
                            <div className="contact-info">
                                <h3>For Any Queries and Support</h3>
                                <div className="contact-info-item">
                                    <i><FaLocationArrow /></i>
                                    <h4>Company Location</h4>
                                    <p>199 xyz, New Delhi</p>
                                </div>

                                <div className="contact-info-item">
                                    <i>
                                        <FaEnvelope />
                                    </i>
                                    <h4>Write to us at</h4>
                                    <p>maheshprajapat258@gmail.com</p>
                                </div>

                                <div className="contact-info-item">
                                    <i>
                                        <FaPhone />
                                    </i>
                                    <h4>Call us on</h4>
                                    <p>8058284896</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} md={7}>
                            <div className="contact-form">
                                <form>
                                    <Row>
                                        <Col lg={6}>
                                            <div className="form-group">
                                                <input type="text" placeholder="your Name" className="form-control" />
                                            </div>
                                        </Col>

                                        <Col lg={6}>
                                            <div className="form-group">
                                                <input type="text" placeholder="your Email" className="form-control" />
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg={12}>
                                            <div className="form-group">
                                                <input type="text" placeholder="Your Phone" className="form-control" />
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg={12}>
                                            <div className="form-group">
                                                <input type="text" placeholder="Subject" className="form-control" />
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg={12}>
                                            <div className="form-group">
                                                <textarea placeholder="your Message" className="form-control"></textarea>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg={12}>
                                            <button type="submit" className="btn-2">Send Message</button>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Contact
