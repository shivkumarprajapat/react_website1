import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FeaturesBox from '../inc/FeaturesBox'
import app2 from "../images/app-screenshots/2.png";
import Carousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaPaintBrush, FaCheck } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";

function Features() {
    const options = {
        margin: 0,
        responsiveClass: true,
        nav: false,
        dots: true,
        autoplay: false,
        navText: ["Prev", "Next"],
        smartSpeed: 1000,
        responsive: {
            0: { items: 1, },
            600: { items: 2, },
            1000: { items: 3, }
        },
    };

    return (
        <>
            <section className="features section-padding">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg lg={7}>
                            <div className="section-title">
                                <h2>awesome <span>Features</span></h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Carousel
                            className='owl-carousel features-carousel'
                            loop
                            autoplay {...options}
                        >
                            <div className="feature-item">
                                <FeaturesBox feature_ttl="Clean Code" feature_desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit." feature_icon={<HiCode />} />
                            </div>
                            <div className="feature-item">
                                <FeaturesBox feature_ttl="auto code" feature_desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit." feature_icon={<FiEdit />} />
                            </div>
                            <div className="feature-item">
                                <FeaturesBox feature_ttl="pixel perfect desgin" feature_desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit." feature_icon={<FaPaintBrush />} />
                            </div>
                            <div className="feature-item">
                                <FeaturesBox feature_ttl="fast load app" feature_desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit." feature_icon={<FaCheck />} />
                            </div>
                        </Carousel>
                    </Row>
                </Container>
            </section>
            {/* Fun Facts Section Start */}

            <div className="fun-facts section-padding">
                <Container>
                    <Row>
                        <Col lg lg={6} md={5} className=" d-flex align-items-center justify-content-center">
                            <div className="fun-facts-img">
                                <img src={app2} className="img-fluid" alt="" />
                            </div>
                        </Col>
                        <Col lg lg={6} md={7}>
                            <div className="section-title">
                                <h2>Fun <span>facts</span></h2>
                            </div>
                            <div className="fun-facts-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident porro quia accusamus mollitia iure eos molestias rerum fugiat quod quidem ullam tempore</p>
                                <Row>
                                    <Col lg={6}>
                                        <div class="fun-fact-item style-1">
                                            <FeaturesBox number="4000" number_desc="Downloads" />
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div class="fun-fact-item style-2">
                                            <FeaturesBox number="200" number_desc="links" />
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div class="fun-fact-item style-3">
                                            <FeaturesBox number="500" number_desc="5 start ratin" />
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div class="fun-fact-item style-4">
                                            <FeaturesBox number="150" number_desc="awards" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/*  ./ Fun Facts Section End */}
        </>
    )
}

export default Features
