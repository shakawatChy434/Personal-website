import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AiOutlineChrome } from 'react-icons/ai';
import { GoMarkGithub } from 'react-icons/go';
import Header from '../Shared/Header/Header';
import Particles from 'react-tsparticles';


const Portfolio = () => {
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
                            </p>
                        </Container>
                    </Col>
                    <Row className="ms-3 pb-5 ">
                        <Col xs={3} sm={3} md={3} lg={2} className="icon-linkImg" >
                            <a href="/contact"> <img src="https://i.ibb.co/Cv1jTSx/images-1-removebg-preview.png" alt="" /></a>
                        </Col>
                        <Col xs={3} sm={3} md={3} lg={2} className="icon-linkImg " >
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

                    {/*My Portfolio Part sTART */}
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
                                <h1 className="text-white text-center pt-5 "> My <span className="text-primary">Portfolio</span></h1>
                            </Col>
                        </Row>
                        <Row><Col xs={6} md={10} className="about-info"></Col></Row>
                        <Col className="text-white">
                            <Row className="py-5">
                                <Col xs={6} md={2}>
                                    {/* Nothing to add */}
                                </Col>
                                <Col xs={12} md={10}>
                                    <Container>
                                        <Row xs={1} md={3} className="g-4">
                                            {Array.from({ length: 1 }).map((_, idx) => (
                                                <Col>
                                                    <Card className="bg-dark ">
                                                        <Card.Img className="" src="https://i.ibb.co/tQqgdz2/images1.jpg" />
                                                        <Card.Body className="card-btn ">
                                                            <Button className=" card-btnInfo me-3"> <GoMarkGithub />
                                                                <a href=" https://github.com/shakawatChy434/car-shop-server-interactive-website">Github </a>
                                                            </Button>
                                                            <Button className="  card-btnInfo "><AiOutlineChrome />
                                                                <a href="https://cars-corner.web.app/">Live Site</a>
                                                            </Button>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))}
                                            {/* 2 */}
                                            {Array.from({ length: 1 }).map((_, idx) => (
                                                <Col>
                                                    <Card className="bg-dark ">
                                                        <Card.Img className="" src="https://i.ibb.co/9T6qkbm/img-hero-wb-healthcare-analytics-1.png" />
                                                        <Card.Body className="card-btn">
                                                            <Button className=" card-btnInfo me-3"> <GoMarkGithub />
                                                                <a href="https://github.com/shakawatChy434/healthcare-interactive-website">Github</a>
                                                            </Button>
                                                            <Button className="  card-btnInfo "><AiOutlineChrome />
                                                                <a href="https://central-hospital-c646d.web.app/">Live Site</a>
                                                            </Button>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))}
                                            {/* 3 */}
                                            {Array.from({ length: 1 }).map((_, idx) => (
                                                <Col>
                                                    <Card className="bg-dark ">
                                                        <Card.Img className="" src="https://i.ibb.co/sRKv6Kd/Semporna-Malaysia.jpg" />
                                                        <Card.Body className="card-btn">
                                                            <Button className=" card-btnInfo me-3"> <GoMarkGithub />
                                                                <a href="https://github.com/shakawatChy434/tourism-client-interective-website">Github</a>
                                                            </Button>
                                                            <Button className="  card-btnInfo "><AiOutlineChrome />
                                                                <a href="https://tourista----tour-planner.web.app/">Live Site</a>
                                                            </Button>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))}
                                            {/* 4 */}
                                            {Array.from({ length: 1 }).map((_, idx) => (
                                                <Col>
                                                    <Card className="bg-dark ">
                                                        <Card.Img className="" src="https://i.ibb.co/bKGMGMs/honda-chopper-5940580-340.jpg" />
                                                        <Card.Body className="card-btn">
                                                            <Button className=" card-btnInfo me-3"> <GoMarkGithub />
                                                                <a href="https://github.com/shakawatChy434/honda-cbr-responsive">Github</a>
                                                            </Button>
                                                            <Button className="  card-btnInfo "><AiOutlineChrome />
                                                                <a href="https://shakawatchy434.github.io/honda-cbr-responsive/">Live Site</a>
                                                            </Button>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))}
                                            {/* 5 */}
                                            {Array.from({ length: 1 }).map((_, idx) => (
                                                <Col>
                                                    <Card className="bg-dark ">
                                                        <Card.Img className="" src="https://i.ibb.co/Gcrh4K0/115510712-tv064321345.jpg" />
                                                        <Card.Body className="card-btn">
                                                            <Button className=" card-btnInfo me-3">
                                                                <GoMarkGithub />
                                                                <a href="https://github.com/shakawatChy434/pigeons-lover-simple-website">Github</a>
                                                            </Button>
                                                            <Button className="  card-btnInfo ">
                                                                <AiOutlineChrome />
                                                                <a href="https://competent-bhaskara-c70cad.netlify.app/">
                                                                    Live Site</a>
                                                            </Button>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))}
                                            {/* 6 */}
                                            {Array.from({ length: 1 }).map((_, idx) => (
                                                <Col>
                                                    <Card className="bg-dark ">
                                                        <Card.Img className="" src="https://i.ibb.co/KWdKYHj/photo.jpg" />
                                                        <Card.Body className="card-btn">
                                                            <Button className=" card-btnInfo me-3">
                                                                <GoMarkGithub />
                                                                <a href="https://github.com/shakawatChy434/panda-commerce-bootstrap">Github</a>
                                                            </Button>
                                                            <Button className="  card-btnInfo ">
                                                                <AiOutlineChrome />
                                                                <a href="https://shakawatchy434.github.io/panda-commerce-bootstrap/">
                                                                    Live Site</a>
                                                            </Button>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))}
                                            {/* 7 */}
                                            {Array.from({ length: 1 }).map((_, idx) => (
                                                <Col>
                                                    <Card className="bg-dark ">
                                                        <Card.Img className="" src="https://i.ibb.co/jLyvkPP/pexels-photo-2681751.jpg" />
                                                        <Card.Body className="card-btn">
                                                            <Button className=" card-btnInfo me-3">
                                                                <GoMarkGithub />
                                                                <a href="https://github.com/shakawatChy434/penguine-fashions">Github</a>
                                                            </Button>
                                                            <Button className="  card-btnInfo ">
                                                                <AiOutlineChrome />
                                                                <a href="https://shakawatchy434.github.io/penguine-fashions/">
                                                                    Live Site</a>
                                                            </Button>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    {/*My Portfolio Part End */}
                </Col>
            </Row>
        </div>

    );
};

export default Portfolio;