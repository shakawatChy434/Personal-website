import React from 'react';
import './Service.css'
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Shared/Header/Header';
import Particles from 'react-tsparticles';
import { MdAddIcCall } from 'react-icons/md';


const Services = () => {
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };
    const particlesLoaded = (container) => {
        console.log(container);
    };
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
                    {/*My Services Part Start */}
                    <Row className="bg-black py-5 px-5 details-setion">
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
                                <h1 className="text-white text-center pt-5 "> My <span className="text-primary">Services</span></h1>
                            </Col>
                        </Row>
                        <Row><Col xs={6} md={10} className="about-info"></Col></Row>
                        <Col className="text-white">
                            <Row className="py-5">
                                <Col xs={6} md={2}>
                                    {/* Nothing to add */}
                                </Col>
                                <Col xs={12} md={10} className="services-info">
                                    <Container className="text-center " >
                                        <Row className="text-white service-details text-start">
                                            <Col xs={12} md={4} className="text-left">
                                                <img src="https://i.ibb.co/wc9Vvpm/WEv-des-removebg-preview.png" alt="" /> <br />
                                                <Col className="service-info ms-4 text-start">
                                                    <h4 className="pt-3">Web Desing</h4> <br />
                                                    <p className="">In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design</p>
                                                </Col>
                                            </Col>

                                            <Col xs={12} md={4} className="text-left">
                                                <img src="https://i.ibb.co/Yb3GwFH/wev-dev-removebg-preview.png" alt="" /> <br />
                                                <Col className="service-info ms-4 text-start">
                                                    <h4 className="pt-3">WEB DEVELOPMENT</h4> <br />
                                                    <p className="">Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.</p>
                                                </Col>
                                            </Col>
                                            <Col xs={12} md={4} className="text-left">
                                                <img src="https://i.ibb.co/ky88293/Capture-removebg-preview.png" alt="" /> <br />
                                                <Col className="service-info ms-4 text-start">
                                                    <h4 className="pt-3">CAPTURE CODE</h4> <br />
                                                    <p className="">The Code Capture tool allows you easily create screenshots of you LabVIEW code for use in documentation, web-sites, wikis, emails.for creating well a GUI for easy capturing and use of code</p>
                                                </Col>
                                            </Col>
                                            <Col xs={12} md={6} className="text-left">
                                                <img src="https://i.ibb.co/GkK0g96/res-removebg-preview.png" alt="" /> <br />
                                                <Col className="service-info ms-4 text-start">
                                                    <h4 className="pt-3">RESPONSIVE DESIGN</h4> <br />
                                                    <p className="">Responsive Web design is the approach that suggests that design and development should respond to the user's behavior and environment based on screen size, platform and orientation. The practice consists of a mix of flexible grids and layouts, media queries.</p>
                                                </Col>
                                            </Col>
                                            <Col xs={12} md={6} className="text-left">
                                                <img src="https://i.ibb.co/Dztx8Z4/Bug-removebg-preview.png" alt="" /> <br />
                                                <Col className="service-info ms-4 text-start">
                                                    <h4 className="pt-3">BUG FIXING</h4> <br />
                                                    <p>A bug fix is a change to a system or product designed to handle a programming bug/glitch. Many different types of programming bugs that create errors with system implementation may require specific bug fixes that are successfully resolved by a development or other IT team.</p>
                                                </Col>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    {/*My Services Part End */}
                </Col>
            </Row>
        </div>

    );
};

export default Services;