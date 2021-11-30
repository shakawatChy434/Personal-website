import Button from '@restart/ui/esm/Button';
import React from 'react';
import './TopSection.css'
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineArrowDown, } from 'react-icons/ai';

const TopSection = () => {

    return (
        <div>
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
                    <Row className="ms-3 pb-5">
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
                    {/* Top Section Part Started */}
                    <Row id="home" className="bg-black px-5 text-start details-setion bg-details1 both-item">
                        <Col xs={6} md={2}>
                            {/* Nothing to add */}
                        </Col>
                        <Col xs={12} sm={12} md={10}>
                            <Container >
                                <h2 className="text-white ">HI THERE ! </h2>
                                <h1 className="text-white">I'M  <span className="text-primary"> Shakawat Hossain</span> </h1>
                                <h3 className="text-white" >I'M
                                    <span className="text-primary"> MERN Stack Developer</span>
                                </h3>
                                <p className="text-white" >An ambitious MERN Stack Developer.I lost myself when I dive into the codes. I am a professional web designer and developer.No project is too big or too small for me. Recently I have completed react and node js. I am expertise in Html5, Css3, Javascript, Bootstrap, Jquery, React, Node JS, Express JS, Mongo DB. Resourceful Web Developer lends hands-on approach to customizing web presence strategy. More than 2 years of experience working closely with Web Development to outline organizational needs and translate them into extensive lines of code that support objectives. Adept creation of scripts using HTML, CSS and JavaScript to convey unique branding and promote sales and marketing opportunities. Specialty supporting intricate backend needs and lending assistance throughout webpage lifecycle.</p>
                                <br />

                                <Button className="btn-details text-white py-2 px-3 border rounded-3">
                                    <a href="https://drive.google.com/file/d/10ar1cvo1lpQJyCoqWqkiJOjfTslyeAJ9/view?usp=sharing">Download Resume</a>
                                    <AiOutlineArrowDown /></Button>
                                <br /> <br /> <br />
                                <Row className="img-information">
                                    <Col xs={4} md={2}>
                                        <a href="https://web.facebook.com/hardkepar.hemo/"><img src="https://i.ibb.co/c8G0tCc/facebook-icon-153518-removebg-preview.png" alt="img not found" /></a>

                                    </Col>
                                    <Col xs={4} md={2}>
                                        <a href="https://www.linkedin.com/in/shakawat-hosain-6824011ba/"> <img src="https://i.ibb.co/GvQpWg7/linkedin-removebg-preview.png" alt="" /></a>
                                    </Col>
                                    <Col xs={4} md={2}>
                                        <a href="https://github.com/shakawatChy434"> <img src="https://i.ibb.co/KwYNNDp/github-removebg-preview.png" alt="" /></a>

                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    {/* Top Section Part Started */}
                </Col>
            </Row>
        </div>
    );
};

export default TopSection;

