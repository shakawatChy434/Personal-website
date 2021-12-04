import React from 'react';
import './Skills.css'
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Shared/Header/Header';
import Particles from 'react-tsparticles';


const Skills = () => {
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
                            <a href="/contact"> <img src="https://i.ibb.co/Cv1jTSx/images-1-removebg-preview.png" alt="" /></a>
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
                    <Row id="skills" className="bg-black py-5 px-5 details-setion bg-details1">
                        <Row>
                            <Col>
                                <h1 className="text-white text-center pt-5 "> <span className="text-primary">My</span> Skills </h1>
                            </Col>
                        </Row>
                        <Row><Col xs={6} md={10} className="about-info"></Col></Row>
                        <Col className="text-white">
                            <Row className="py-5">
                                <Col xs={6} md={2}>
                                    {/* Nothing to add */}
                                </Col>
                                <Col xs={12} md={10}>
                                    <Container className="text-center" >
                                        <Row className="text-white skilImg ">
                                            <Col xs={4} md={2} className="skilImg-info mt-3  ms-1">
                                                <img src="https://i.ibb.co/WK9K2wj/htmljpg-removebg-preview.png" alt="" />
                                                <p>HTML</p>
                                            </Col>
                                            <Col xs={4} md={2} className="skilImg-info ms-3 mt-3 me-3">
                                                <img src="https://i.ibb.co/64WMf8r/NO-2-removebg-preview.png" alt="" />
                                                <p>CSS</p>
                                            </Col>
                                            <Col xs={4} md={2} className="skilImg-info ms-1 mt-3 ">
                                                <img src="https://i.ibb.co/KrcgH1f/NO-5-removebg-preview.png" alt="" />
                                                <p>Bootstrap</p>
                                            </Col>
                                            <Col xs={4} md={2} className="skilImg-info ms-3 mt-3 me-3">
                                                <img src="https://i.ibb.co/0MVPkGM/NO-3-removebg-preview.png" alt="" />
                                                <p>Tailwind CSS</p>
                                            </Col>
                                            <Col xs={4} md={2} className="skilImg-info ms-1 mt-3 me-3">
                                                <img src="https://i.ibb.co/GW3cqMx/javascript-removebg-preview.png" alt="" />
                                                <p>JacaScript</p>
                                            </Col>
                                            <Col xs={4} md={2} className="skilImg-info mt-3 me-3">
                                                <img src="https://i.ibb.co/p4DW5t8/NO-6-removebg-preview.png" alt="" />
                                                <p>React JS</p>
                                            </Col>
                                            <Col xs={4} md={2} className="skilImg-info mt-3 ">
                                                <img src="https://i.ibb.co/QmHNPjb/NO-7-removebg-preview.png" alt="" />
                                                <p>Material UI</p>
                                            </Col>
                                            <Col xs={4} md={2} className="skilImg-info mt-3 ms-3  me-3">
                                                <img src="https://i.ibb.co/ZWKZ5sw/No-9-removebg-preview.png" alt="" />
                                                <p>Firebase</p>
                                            </Col>
                                            <Col xs={4} md={2} className="skilImg-info mt-3 ">
                                                <img src="https://i.ibb.co/XfBD9Cz/No-8jfif-removebg-preview.png" alt="" />
                                                <p>Github</p>
                                            </Col>
                                            <Col xs={4} md={2} className="skilImg-info mt-3 ms-3">
                                                <img src="https://i.ibb.co/L9bF1ZS/No-12-removebg-preview.png" alt="" />
                                                <p>Express JS</p>
                                            </Col>
                                            <Col xs={4} md={2} className="skilImg-info mt-3  ">
                                                <img src="https://i.ibb.co/Z1VPxRs/No-11-removebg-preview.png" alt="" />
                                                <p>Node JS</p>
                                            </Col>
                                            <Col xs={4} md={2} className="skilImg-info mt-3 ms-3">
                                                <img src="https://i.ibb.co/M63dzhs/No-10-removebg-preview.png" alt="" />
                                                <p>MongoDB</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    {/*My Skills Part End */}
                </Col>
            </Row>
        </div>
    );
};

export default Skills;