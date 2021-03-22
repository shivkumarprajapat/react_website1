import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Carousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import screenShot1 from '../images/app-screenshots/1.png'
import screenShot2 from '../images/app-screenshots/2.png'
import screenShot3 from '../images/app-screenshots/3.png'
import { IoLogoApple, IoLogoWindows } from "react-icons/io";
import { FaGooglePlay } from 'react-icons/fa';
import FeaturesBox from '../inc/FeaturesBox'

function Screenshots() {
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
            768: { items: 3, },
            1000: { items: 4, }
        },
    };
    return (
        <>
            {/* App Screenshots Section Start  */}
            <section className="app-screen-shots section-padding">
                <Container>
                    <Row className=" justify-content-center">
                        <Col lg lg={8}>
                            <div className="section-title">
                                <h2>app <span>screenshots</span></h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>

                        <Carousel
                            className='screenshots-carousel owl-carousel'
                            loop
                            autoplay {...options}
                        >

                            <div className="screenshots-item">
                                <img src={screenShot1} className="img-fluid" alt="" />
                            </div>
                            <div className="screenshots-item">
                                <img src={screenShot2} className="img-fluid" alt="" />
                            </div>
                            <div className="screenshots-item">
                                <img src={screenShot3} className="img-fluid" alt="" />
                            </div>
                            <div className="screenshots-item">
                                <img src={screenShot1} className="img-fluid" alt="" />
                            </div>
                            <div className="screenshots-item">
                                <img src={screenShot3} className="img-fluid" alt="" />
                            </div>
                        </Carousel>

                    </Row>
                </Container>
            </section>
            {/* ./App Screenshots Section End */}

            {/* App Download Section Start */}
            <section className="app-download section-padding">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg lg={8}>
                            <div className="section-title">
                                <h2>download <span>app</span></h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className=" justify-content-center">
                        <Col lg={4} md={6}>
                            <div className="app-download-item">
                                <FeaturesBox feature_ttl="google play" feature_desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" feature_icon={<FaGooglePlay />} />
                                <a href="" className="btn-2">download now</a>
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className="app-download-item">
                                <FeaturesBox feature_ttl="google play" feature_desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" feature_icon={<IoLogoApple />} />
                                <a href="" className="btn-2">download now</a>
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className="app-download-item">
                                <FeaturesBox feature_ttl="google play" feature_desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" feature_icon={<IoLogoWindows />} />
                                <a href="" className="btn-2">download now</a>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
            {/* ./App Download Section End */}
        </>
    )
}

export default Screenshots
