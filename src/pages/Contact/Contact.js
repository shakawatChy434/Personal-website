import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FiSend } from 'react-icons/fi';
import { MdAddIcCall, MdOutlineMarkEmailUnread } from 'react-icons/md';
import { TiMessages } from 'react-icons/ti';
import Header from '../Shared/Header/Header';
import Particles from 'react-tsparticles';


const Contact = () => {
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };
    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <div class="item" data-aos="zoom-in">
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
                                <MdAddIcCall /> (+880) 1842829880 <br />
                            </p>
                        </Container>
                    </Col>
                    <Row className="ms-3 pb-5 ">
                        
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
                    <Row className="bg-black py-5 px-5 details-setion bg-details1">
                        {/* TS particles added part start */}
                        <Particles
                            id="tsparticles"
                            init={particlesInit}
                            loaded={particlesLoaded}
                            options={{
                                fpsLimit: 60,
                                interactivity: {
                                    events: {
                                        onClick: {
                                            enable: true,
                                            mode: "push",
                                        },
                                        onHover: {
                                            enable: true,
                                            mode: "repulse",
                                        },
                                        resize: true,
                                    },
                                    modes: {
                                        bubble: {
                                            distance: 400,
                                            duration: 2,
                                            opacity: 0.8,
                                            size: 40,
                                        },
                                        push: {
                                            quantity: 4,
                                        },
                                        repulse: {
                                            distance: 200,
                                            duration: 0.4,
                                        },
                                    },
                                },
                                particles: {
                                    color: {
                                        value: "#ffffff",
                                    },
                                    links: {
                                        color: "#ffffff",
                                        distance: 150,
                                        enable: true,
                                        opacity: 0.5,
                                        width: 1,
                                    },
                                    collisions: {
                                        enable: true,
                                    },
                                    move: {
                                        direction: "none",
                                        enable: true,
                                        outMode: "bounce",
                                        random: false,
                                        speed: 2,
                                        straight: true,
                                    },
                                    number: {
                                        density: {
                                            enable: true,
                                            value_area: 900,
                                        },
                                        value: 100,
                                    },
                                    opacity: {
                                        value: 0.5,
                                    },
                                    shape: {
                                        type: "circle",
                                    },
                                    size: {
                                        random: false,
                                        value: 5,
                                    },
                                },
                                detectRetina: true,
                            }}
                        />
                        {/* TS particles added part END */}
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
                                <Col xs={12} md={5}>
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
                        <Col xs={12} md={4} className="text-black py-1 me-5" >

                            <Row className="text-white about-details py-5 me-5">
                                <Col xs={4} md={7}>
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