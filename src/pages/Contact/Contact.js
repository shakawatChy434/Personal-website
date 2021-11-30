import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FiSend } from 'react-icons/fi';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { TiMessages } from 'react-icons/ti';
import Header from '../Shared/Header/Header';

const Contact = () => {
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
                    {/*My Skills Part start */}
                    {/*My Contact Me Part Start */}
                    <Row className="bg-black py-5 px-5 details-setion bg-details">
                        <Row>
                            <Col>
                                <h1 className="text-white text-center pt-5 "> <span className="text-primary">Contact</span> Me</h1>
                            </Col>
                        </Row>
                        <Row><Col xs={6} md={10} className="about-info"></Col></Row>
                        <Col className="text-white">
                            <Row className="py-5">
                                <Col xs={6} md={3}>
                                    {/* Nothing to add */}
                                </Col>
                                <Col xs={12} md={6}>
                                    <Container className="text-start pt-5" >
                                        <p className="text-white " >
                                            Name : <span className="text-primary">Shakawat Hossaain</span> <br />
                                            Age : <span className="text-primary">26+</span>  <br />
                                            Qualification : <span className="text-primary">Department of Accounting (MBA)</span> <br />
                                            Post : <span className="text-primary">Jr. MERN Stack Developer</span> <br />
                                            Language : <span className="text-primary">Bangla & English</span> <br />
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

                            <Row className="text-white about-details py-5">
                                <Col xs={4} md={6}>
                                    <Form action="https://formsubmit.co/hossainshakawat434@gmail.com" method="POST" className="text-start">
                                        <label htmlFor=""><BsFillPersonLinesFill /> Name</label>
                                        <input className="text-white" placeholder="Enter Your Name" type="text" name='name' required />
                                        <label htmlFor=""><MdOutlineMarkEmailUnread /> Email</label>
                                        <input className="text-white" placeholder="Enter Your Email" type="email" name='email' required />
                                        <label htmlFor=""><TiMessages /> Massege</label>
                                        <textarea className="text-white" placeholder="Message" name="text" id="" ></textarea>
                                        <Button className="btn-details text-white py-2 px-3 mt-3 ms-2 border rounded-3">Send  <FiSend /></Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    {/*My Contact Me Part End */}
                </Col>
            </Row>
        </div>
    );
};

export default Contact;