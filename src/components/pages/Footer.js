import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer class="footer">
                <Container>
                    <Row>
                        <Col lg={3} md={6}>
                            <div class="footer-col">
                                <h3>About us</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, enim.</p>
                            </div>
                        </Col>

                        <Col lg={3} md={6}>
                            <div class="footer-col">
                                <h3>Company</h3>
                                <ul>
                                    <li><a href="#">privacy policy</a></li>
                                    <li><a href="#">terms & condition</a></li>
                                    <li><a href="#">lates blogs</a></li>
                                    <li><a href="#">app services</a></li>
                                </ul>
                            </div>
                        </Col>

                        <Col lg={3} md={6}>
                            <div class="footer-col">
                                <h3>quick links</h3>
                                <ul>
                                    <li><Link to='/'>home</Link></li>
                                    <li><Link to='/features'>features</Link></li>
                                    <li><Link to='/screenshots'>screenshots</Link></li>
                                    <li><Link to='/pricing'>pricing</Link></li>
                                    <li><Link to='/testimonials'>testimonials</Link></li>
                                </ul>
                            </div>
                        </Col>

                        <Col lg={3} md={6}>
                            <div class="footer-col">
                                <h3>social pages</h3>
                                <ul>
                                    <li><a href="https://www.facebook.com/">facebook</a></li>
                                    <li><a href="https://twitter.com">twitter</a></li>
                                    <li><a href="https://instagram.com">instagram</a></li>
                                    <li><a href="https://www.linkedin.com">linkedin</a></li>
                                </ul>
                            </div>
                        </Col>

                    </Row>
                    <Row>
                        <Col lg={12}>
                            <p class="copyright-text">&copy;2021 @ Shiv Kumar Prajapat</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer
