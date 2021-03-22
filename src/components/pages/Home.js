import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Banner_img from "../images/app-screenshots/1.png";
import { ImSpinner9, ImPlus } from "react-icons/im";
import Features from './Features';
import Screenshots from './Screenshots';
import VideoPop from '../inc/VideoPop';
function Home() {
    return (
        <>
            <section className="home d-flex align-items-center">
                <div class="effect-wrap">
                    <ImPlus class="effect effect-1" />
                    <ImPlus class="effect effect-2" />
                    <ImSpinner9 class="effect effect-3" />
                </div>

                <Container>
                    <Row className="align-items-center">
                        <Col lg lg={7} md={6}>
                            <div className="home-text">
                                <h1>Best Mobile App Template for your Business</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <div class="home-btn">
                                    <button href="" className="btn-1">download app</button>
                                    <VideoPop />
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} md={6} className="text-center">
                            <div className="home-img">
                                <div className="circle"></div>
                                <img src={Banner_img} className="img-fluid" alt="shiv app" />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
            <Features />
            <Screenshots />
        </>
    )
}

export default Home
