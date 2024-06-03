import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
const AboutComponent = () => {
    return (
        <>
            <div style={{ background: "#0473a9", minHeight: "50vh" }}>
                {/* <Container> */}
                <Row>
                    <Col md={6}>
                        <Image
                            src="images/Aboutpic.png"
                            style={{
                                width: "50%",
                                marginTop: "2rem",
                                marginBottom: "25px",
                                marginLeft: '140px'
                            }}
                        ></Image>
                    </Col>
                    <Col md={6}>
                        <h2
                            className="text-center"
                            style={{
                                fontFamily: "roboto",
                                marginTop: "45px",
                                color: "white",
                            }}
                        >
                            Visvesvaraya Technological University
                        </h2>
                        <hr style={{ border: "1px solid white" }} />
                        <div
                            style={{
                                color: "white",
                                fontFamily: "roboto",
                                fontSize: "large",
                                marginTop: "20px",
                            }}
                        >
                            VTU is one of the largest Technological Universities in India
                            with 24 years of Tradition of excellence in Engineering &
                            Technical Education, Research and Innovations. It came into
                            existence in the year 1998 to cater the needs of Indian
                            industries for trained technical manpower with practical
                            experience and sound theoretical knowledge.
                        </div>
                        <br />
                        <div
                            style={{
                                color: "white",
                                fontFamily: "roboto",
                                fontSize: "large",
                            }}
                        >
                            University has very successfully achieved the tremendous task of
                            bringing various colleges affiliated earlier to different
                            Universities, with different syllabi, different procedures and
                            different traditions under one umbrella.
                        </div>
                    </Col>
                </Row>
                {/* </Container> */}
            </div>




            <Row>
                <Col md={6}>
                    <Image
                        src="images/bengaluruvtu.jpg"
                        alt=""
                        style={{
                            width: "85%",
                            height: "95%",
                            marginTop: "20px",
                            marginLeft: "20px",
                        }}
                    />
                </Col>

                <Col md={6}>
                    <div>
                        <h2 style={{ color: "gold", marginTop: "20px" }}>Bengaluru</h2>
                        <i
                            className="fa-sharp fa-solid fa-location-dot fa-bounce"
                            style={{
                                marginTop: "30px",
                                marginRight: "10px",
                                marginLeft: "10px",
                            }}
                        ></i>
                        <span style={{ marginLeft: "10px" }}>
                            Visvesvaraya Technological University, Regional Center Bengaluru,
                            RHCS Layout Annapoorneshwari nagar, Nagarbhavi, Bengaluru-560091.
                        </span>
                        <div>
                            <i
                                className="fa-solid fa-phone"
                                style={{
                                    marginTop: "10px",
                                    marginRight: "10px",
                                    marginLeft: "10px",
                                }}
                            ></i>
                            <span>080-23186932, 23181188.</span>
                            <div style={{ marginLeft: "10px", marginTop: "5px" }}>
                                <i className="fa-solid fa-tty"></i>
                                <span style={{ marginLeft: "10px" }}>
                                    Regional Director : 080-23186932.
                                </span>
                            </div>
                            <div style={{ marginLeft: "10px", marginBottom: '20px' }}>
                                <i className="fa-solid fa-envelope"></i>
                                <span style={{ marginLeft: "10px" }}>
                                    Email Id : sorob_4@vtu.ac.in
                                </span>
                            </div>
                        </div>
                        <h5 style={{
                            color: 'RoyalBlue'
                        }}>VTU Regional Office Bangalore timings</h5>
                        <div>
                            < li > Monday - Friday: 10AM–1:30PM, 2:15–5:30PM</li>
                            <li>Saturday: 10AM–1:30PM</li>
                            <li>Sunday: Holiday</li>
                        </div>
                        <Link to='/bengaluru' className="btn btn-warning my-3 mx-3">Read more</Link>
                    </div>

                </Col >
            </Row >


            <Row>
                <Col md={6} style={{ textAlign: 'end', marginTop: '30px' }}>
                    <h2 style={{ color: "gold", marginBottom: '10px' }}>Kalaburgi</h2>
                    <i
                        className="fa-sharp fa-solid fa-location-dot fa-bounce"
                        style={{
                            marginTop: "30px",
                            marginRight: "10px",
                            marginLeft: "10px",
                        }}
                    ></i>
                    <span style={{ marginLeft: "10px" }}>
                        Visvesvaraya Technological University,
                        Regional Center Kalaburagi.
                    </span>
                    <div>
                        <i
                            className="fa-solid fa-phone"
                            style={{
                                marginTop: "10px",
                                marginRight: "10px",
                                marginLeft: "10px",
                            }}
                        ></i>
                        <span>08472-2456155.</span>
                        <div style={{ marginLeft: "10px", marginTop: "5px" }}>
                            <i className="fa-solid fa-tty"></i>
                            <span style={{ marginLeft: "10px" }}>
                                Regional Director : 08472-25 6156.
                            </span>
                        </div>
                        <div style={{ marginLeft: "10px", marginBottom: '20px' }}>
                            <i className="fa-solid fa-envelope"></i>
                            <span style={{ marginLeft: "10px" }}>
                                Email Id : vtugulbarga@vtu.ac.in
                            </span>
                        </div>
                        <h5 style={{ color: 'RoyalBlue' }}>VTU Regional Office Kalaburgi timings</h5>
                        <div>
                            <li>Monday-Friday: 10AM–1:30PM, 2:15–5:30PM</li>
                            <li>Saturday: 10AM–1:30PM</li>
                            <li>Sunday: Holiday</li>
                        </div>
                        <Link to='/kalaburgi' className="btn btn-warning my-3 mx-3">Read more</Link>

                    </div>
                </Col>
                <Col md={6}  >
                    <Image
                        src="images/kalaburgi.jpg"
                        alt=""
                        style={{
                            width: "85%",
                            height: "85%",
                            marginTop: "20px",
                            marginLeft: "80px",
                        }}
                    />
                </Col>



            </Row>
            <Row>
                <Col md={6}>
                    <Image
                        src="images/belagavivtu.jpg"
                        alt=""
                        style={{
                            width: "85%",
                            height: "95%",
                            marginTop: "20px",
                            marginLeft: "20px",
                        }}
                    />
                </Col>

                <Col md={6}>
                    <h2 style={{ color: "gold", marginTop: "20px" }}>Belagavi</h2>
                    <i
                        className="fa-sharp fa-solid fa-location-dot fa-bounce"
                        style={{
                            marginTop: "30px",
                            marginRight: "10px",
                            marginLeft: "10px",
                        }}
                    ></i>
                    <span style={{ marginLeft: "10px" }}>
                        Visvesvaraya Technological University,
                        Regional Center Belagavi,
                        “Jnanasangama”, Mache,
                        Belagavi – 590 018.
                    </span>
                    <div>
                        <i
                            className="fa-solid fa-phone"
                            style={{
                                marginTop: "10px",
                                marginRight: "10px",
                                marginLeft: "10px",
                            }}
                        ></i>
                        <span>08312498197.</span>
                        <div style={{ marginLeft: "10px", marginTop: "5px" }}>
                            <i className="fa-solid fa-tty"></i>
                            <span style={{ marginLeft: "10px" }}>
                                Regional Director : 080-23186932.
                            </span>
                        </div>
                        <div style={{ marginLeft: "10px", marginBottom: '20px' }}>
                            <i className="fa-solid fa-envelope"></i>
                            <span style={{ marginLeft: "10px" }}>
                                Email Id : vtubelgaum@vtu.ac.in
                            </span>
                        </div>
                        <h5 style={{ color: 'RoyalBlue' }}>VTU Regional Office Belagavi timings</h5>
                        <div>
                            <li>Monday-Friday: 10AM–1:30PM, 2:15–5:30PM</li>
                            <li>Saturday: 10AM–1:30PM</li>
                            <li>Sunday: Holiday</li>
                        </div>
                        <Link to='/belagavi' className="btn btn-warning my-3 mx-3">Read more</Link>

                    </div>
                </Col>
            </Row>
            <Row>


                <Col md={6} style={{ textAlign: 'end', marginTop: '15px' }}>
                    <h2 style={{ color: "gold", marginTop: "20px" }}>Mysuru</h2>
                    <i
                        className="fa-sharp fa-solid fa-location-dot fa-bounce"
                        style={{
                            marginTop: "30px",
                            marginRight: "10px",
                            marginLeft: "10px",
                        }}
                    ></i>
                    <span style={{ marginLeft: "10px" }}>
                        Visvesvaraya Technological University,
                        Regional Center Mysuru,
                        Hanchya Sathagally Layout,
                        Ring Road,Mysuru – 570 019.
                    </span>
                    <div>
                        <i
                            className="fa-solid fa-phone"
                            style={{
                                marginTop: "10px",
                                marginRight: "10px",
                                marginLeft: "10px",
                            }}
                        ></i>
                        <span> 0821-2570010.</span>
                        <div style={{ marginLeft: "10px", marginTop: "5px" }}>
                            <i className="fa-solid fa-tty"></i>
                            <span style={{ marginLeft: "10px" }}>
                                Regional Director : 0821-2570013.
                            </span>
                        </div>
                        <div style={{ marginLeft: "10px", marginBottom: '20px' }}>
                            <i className="fa-solid fa-envelope"></i>
                            <span style={{ marginLeft: "10px" }}>
                                Email Id : sovtumysore@yahoo.com
                            </span>
                        </div>
                        <h5 style={{ color: 'RoyalBlue' }}>VTU Regional Office Mysuru timings</h5>
                        <div>
                            <li>Monday-Friday: 10AM–1:30PM, 2:15–5:30PM</li>
                            <li>Saturday: 10AM–1:30PM</li>
                            <li>Sunday: Holiday</li>
                        </div>
                        <Link to='/mysuru' className="btn btn-warning my-3 mx-3">Read more</Link>

                    </div>
                </Col>
                <Col md={6}>
                    <Image
                        src="images/mysorevtu.jpg"
                        alt=""
                        style={{
                            width: "85%",
                            height: "90%",
                            marginTop: "20px",
                            marginLeft: "80px",
                        }}
                    />
                </Col>
            </Row>

        </>
    );
};
export default AboutComponent;
