import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Link } from 'react-router-dom';

const HomeScreen = () => (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <>
        <marquee className="my-3">
            <h3>
                VTU Results 2023 Out - Check Exam result !!!
                <Link to='/result'>Click here...</Link>Best of Luck !!!
            </h3>
        </marquee>
        <Container>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/img1vtu.jpg" style={{ height: '500px' }}
                        alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/img2vtu.jpg" style={{ height: '500px' }}
                        alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/img3vtu.jpg" style={{ height: '500px' }}
                        alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/img4vtu.jpg" style={{ height: '500px' }}
                        alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/img5vtu.jpg"
                        alt="First slide" />
                </Carousel.Item>
            </Carousel>
            <Row className="my-3">
                <Col md={4}>
                    <Link to='/about'><h3>Vision</h3></Link>
                    <p>To become an outstanding technological university at the cutting edge of science technology</p>
                    <p>To Plan the development of technical education ,to establish value-based and need-based education and training in engineering and technology, with a view to generate qualified and competent manpower, responsive to technological and societal needs.</p>
                    <p>To become an outstanding technological university at the cutting edge of science technology</p>
                    <Link to='/about' className="btn btn-warning">Read More</Link>
                </Col>

                <Col md={4}>
                    <Link to='/about'><h3>Mission</h3></Link>
                    <p>To become an outstanding technological university at the cutting edge of science technology</p>
                    <p>To Plan the development of technical education ,to establish value-based and need-based education and training in engineering and technology, with a view to generate qualified and competent manpower, responsive to technological and societal needs.</p>
                    <p>To become an outstanding technological university at the cutting edge of science technology</p>
                    <Link to='/about' className="btn btn-warning">Read More</Link>

                </Col>
                <Col md={4}>
                    <Link to='/about'><h3>Mandate</h3></Link>
                    <p>To become an outstanding technological university at the cutting edge of science technology</p>
                    <p>To Plan the development of technical education ,to establish value-based and need-based education and training in engineering and technology, with a view to generate qualified and competent manpower, responsive to technological and societal needs.</p>
                    <p>To become an outstanding technological university at the cutting edge of science technology</p>
                    <a href><Link to='/about' className="btn btn-warning">Read More</Link></a>
                </Col>
            </Row>
        </Container>
    </>
);
export default HomeScreen;