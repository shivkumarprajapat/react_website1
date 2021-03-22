import React from 'react'
import Carousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container, Row } from 'react-bootstrap';
import testimonial1 from "../images/testimonial/1.jpg";
import testimonial2 from "../images/testimonial/2.jpg";
import testimonial3 from "../images/testimonial/3.jpg";
import { ImQuotesRight, ImStarFull } from "react-icons/im";
import TeamMember from './TeamMember'

const Testimonials = () => {
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
            <section className="testimonials section-padding">
                <Container>
                    <Row className="justify-content-center">
                        <div className="section-title">
                            <h2>What our <span>client</span> say</h2>
                        </div>
                    </Row>
                    <Row>
                        <Carousel OwlCarousel className="slider-items owl-carousel" {...options} >
                            <div class="testimonials-item">
                                <div class="img-box">
                                    <img src={testimonial1} class="img-fluid" alt="" />
                                    <i><ImQuotesRight /></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                <h3>upvesh kumar</h3>
                                <span>UI developer</span>
                                <div class="rating">
                                    <ImStarFull />
                                    <ImStarFull />
                                    <ImStarFull />
                                    <ImStarFull />
                                    <ImStarFull />
                                </div>
                            </div>
                            <div class="testimonials-item">
                                <div class="img-box">
                                    <img src={testimonial2} class="img-fluid" alt="" />
                                    <i><ImQuotesRight /></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                <h3>upvesh kumar</h3>
                                <span>UI developer</span>
                                <div class="rating">
                                    <ImStarFull />
                                    <ImStarFull />
                                    <ImStarFull />
                                    <ImStarFull />
                                    <ImStarFull />
                                </div>
                            </div>
                            <div class="testimonials-item">
                                <div class="img-box">
                                    <img src={testimonial3} class="img-fluid" alt="" />
                                    <i><ImQuotesRight /></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                <h3>upvesh kumar</h3>
                                <span>UI developer</span>
                                <div class="rating">
                                    <ImStarFull />
                                    <ImStarFull />
                                    <ImStarFull />
                                    <ImStarFull />
                                    <ImStarFull />
                                </div>
                            </div>
                            <div class="testimonials-item">
                                <div class="img-box">
                                    <img src={testimonial1} class="img-fluid" alt="" />
                                    <i><ImQuotesRight /></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                <h3>upvesh kumar</h3>
                                <span>UI developer</span>
                                <div class="rating">
                                    <ImStarFull />
                                    <ImStarFull />
                                    <ImStarFull />
                                    <ImStarFull />
                                    <ImStarFull />
                                </div>
                            </div>

                        </Carousel>
                    </Row>
                </Container>
            </section>
            <TeamMember />
        </>
    )
}

export default Testimonials

