import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Carousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import team1 from '../images/team/1.jpg';
import team2 from '../images/team/2.jpg';
import team3 from '../images/team/3.jpg';
import team4 from '../images/team/4.jpg';
import team5 from '../images/team/5.jpg';

function TeamMember() {
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
            <section className="team section-padding">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="section-title">
                                <h2>team <span>member</span></h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Carousel
                            className='owl-carousel features-carousel'
                            loop
                            autoplay {...options}
                        >
                            <div className="team-item">
                                <img src={team1} alt="team" />
                                <h3>Sarita Sharma</h3>
                                <span>UI designer</span>
                            </div>
                            <div className="team-item">
                                <img src={team2} alt="team" />
                                <h3>Naha Sharma</h3>
                                <span>UI designer</span>
                            </div>
                            <div className="team-item">
                                <img src={team3} alt="team" />
                                <h3>Ramesh Bhati</h3>
                                <span>UI designer</span>
                            </div>
                            <div className="team-item">
                                <img src={team4} alt="team" />
                                <h3>Ramesh Bhati</h3>
                                <span>UI designer</span>
                            </div>
                            <div className="team-item">
                                <img src={team5} alt="team" />
                                <h3>Ramesh Bhati</h3>
                                <span>UI designer</span>
                            </div>
                        </Carousel>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default TeamMember
