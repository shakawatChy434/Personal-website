import React from 'react';
import './About.css'
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Shared/Header/Header';

const About = () => {
    return (
        <div>
            <Header />
            <Row className="bg-details">
                {/* Profile Part start */}
                <Col xs={12} sm={12} md={12} lg={2} className="bg-info profile-details me-auto">
                    <img src="https://i.ibb.co/cvMFgkn/unnamed-2.webp" alt="" />
                    <Col xs={12} sm={12} md={12} lg={12} className="">
                        <Container className=" profile-text">
                            <h5>Shakawat Hossaain</h5>
                            <p>
                                Jr. MERN Stack Developer<br />
                            </p>
                        </Container>
                    </Col>
                    <Row className="ms-3 pb-5 ">
                        <Col xs={3} sm={3} md={3} lg={2} className="icon-linkImg" >
                            <a href="http://localhost:3000/contact"> <img src="https://i.ibb.co/Cv1jTSx/images-1-removebg-preview.png" alt="" /></a>
                        </Col>
                        <Col xs={3} sm={3} md={3} lg={2} className="icon-linkImg" >
                            <a href="https://www.linkedin.com/in/shakawat-hosain-6824011ba/"> <img src="https://i.ibb.co/GvQpWg7/linkedin-removebg-preview.png" alt="" /></a>
                        </Col>
                        <Col xs={3} sm={3} md={3} lg={2} className="icon-linkImg" >
                            <a href="https://github.com/shakawatChy434"> <img src="https://i.ibb.co/KwYNNDp/github-removebg-preview.png" alt="" /></a>
                        </Col>
                        <Col xs={3} sm={3} md={3} lg={2} className="icon-linkImg" >
                            <a href="https://web.facebook.com/hardkepar.hemo/"><img src="https://i.ibb.co/c8G0tCc/facebook-icon-153518-removebg-preview.png" alt="img not found" /></a>
                        </Col>
                    </Row>
                </Col>
                {/* Profile Part end */}
                <Col xs={12} sm={12} md={12} lg={10}>
                    <Row id="skills" className="bg-black py-5 px-5 details-setion bg-details1">
                        <Row>
                            <Col>
                                <h1 className="text-white text-center pt-5 "> <span className="text-primary">About</span> Me </h1>
                            </Col>
                        </Row>
                        <Row><Col xs={6} md={10} className="about-info mt-2 mb-5"></Col></Row>
                        <Col className="text-white">
                            <Row>
                                <Col xs={6} md={3}>
                                    {/* // Nothing to add */}
                                </Col>
                                <Col xs={12} md={8}>
                                    <Container className="text-start" >
                                        <p className="text-white " >
                                            Name: <span className="text-primary">Shakawat Hossaain</span> <br />
                                            Age: <span className="text-primary">26+</span>  <br />
                                            Qualification: <span className="text-primary">Department of Accounting (MBA)</span> <br />
                                            Post: <span className="text-primary">Jr.MERN Stack Developer</span> <br />
                                            Language: <span className="text-primary">Bangla & English</span> <br />
                                        </p>
                                        <br />
                                        <Row className="img-information">
                                            <Col xs={4} md={3} >
                                                <a href="https://web.facebook.com/hardkepar.hemo/"><img src="https://i.ibb.co/c8G0tCc/facebook-icon-153518-removebg-preview.png" alt="img not found" /></a>
                                            </Col>
                                            <Col xs={4} md={3} >
                                                <a href="https://www.linkedin.com/in/shakawat-hosain-6824011ba/"> <img src="https://i.ibb.co/GvQpWg7/linkedin-removebg-preview.png" alt="" /></a>
                                            </Col>
                                            <Col xs={4} md={3} lg={2}>
                                                <a href="https://github.com/shakawatChy434"> <img src="https://i.ibb.co/KwYNNDp/github-removebg-preview.png" alt="" /></a>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={4} className="text-black py-1" >
                            <br />
                            <Row className="text-white about-details">
                                <Col xs={4} md={6} >
                                    <p>
                                        <span className="text-primary">1+</span>
                                        <br /> Years Of <br /> Experiencs
                                    </p>
                                </Col>
                                <Col xs={4} md={6} >
                                    <p> <span className="text-primary">19+</span> <br /><br /> Projects </p>
                                </Col>
                            </Row>
                            <Row className="text-white about-details">
                                <Col xs={4} md={6}>
                                    <p> <span className="text-primary">6+</span> <br /> Happy <br /> Clients </p>
                                </Col>
                                <Col xs={4} md={6}>
                                    <p> <span className="text-primary">1+</span> <br /> Awards <br /> Won</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default About;