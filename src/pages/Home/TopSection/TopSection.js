import Button from '@restart/ui/esm/Button';
import React from 'react';
import './TopSection.css'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AiOutlineArrowDown, AiOutlineChrome } from 'react-icons/ai';
import { GoMarkGithub } from 'react-icons/go';


const TopSection = () => {
    return (
        <div>
            <Row>
                <Col xs={12} md={2} className="bg-info">
                    At present it's remain default ,
                    Upgrading later.
                    Thank You
                </Col>
                <Col xs={12} md={10}>

                    {/* Top Section Part Started */}
                    <Row className="bg-black py-5 px-5 text-start details-setion">
                        <Col xs={6} md={2}>
                            {/* Nothing to add */}
                        </Col>
                        <Col xs={12} md={10}>
                            <Container >
                                <h2 className="text-white ">HI THERE ! </h2>
                                <h1 className="text-white">I'M  <span className="text-primary"> Shakawat Hossain</span> </h1>
                                <h3 className="text-white" >I'M
                                    <span className="text-primary"> MERN Stack Developer</span>
                                </h3>
                                <p className="text-white" >An ambitious MERN Stack Developer.I lost myself when I dive into the codes. I am a professional web designer and developer.No project is too big or too small for me. Recently I have completed react and node js. I am expertise in Html5, Css3, Javascript, Bootstrap, Jquery, React, Node JS, Express JS, Mongo DB. Resourceful Web Developer lends hands-on approach to customizing web presence strategy. More than 2 years of experience working closely with Web Development to outline organizational needs and translate them into extensive lines of code that support objectives. Adept creation of scripts using HTML, CSS and JavaScript to convey unique branding and promote sales and marketing opportunities. Specialty supporting intricate backend needs and lending assistance throughout webpage lifecycle.</p>
                                <br />
                                <Button className="btn-details text-white py-2 px-3 border rounded-3">Download Resume<AiOutlineArrowDown /></Button>
                                <br /> <br /> <br />
                                <Row className="img-information">
                                    <Col xs={4} md={2}>
                                        <img src="https://i.ibb.co/c8G0tCc/facebook-icon-153518-removebg-preview.png" alt="img not found" />
                                    </Col>
                                    <Col xs={4} md={2}>
                                        <img src="https://i.ibb.co/GvQpWg7/linkedin-removebg-preview.png" alt="" />
                                    </Col>
                                    <Col xs={4} md={2}>
                                        <img src="https://i.ibb.co/KwYNNDp/github-removebg-preview.png" alt="" />
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    {/* Top Section Part Started */}
                    {/*About Part Started */}
                    <Row className="bg-black py-5 px-5 details-setion">
                        <Row>
                            <Col>
                                <h1 className="text-white text-center pt-5 "> <span className="text-primary">About</span> Me</h1>
                            </Col>
                        </Row>
                        <Row><Col xs={6} md={10} className="about-info"></Col></Row>
                        <Col className="text-white">
                            <Row className="py-5">
                                <Col xs={6} md={3}>
                                    {/* Nothing to add */}
                                </Col>
                                <Col xs={12} md={8}>
                                    <Container className="text-start" >
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
                                                <img src="https://i.ibb.co/c8G0tCc/facebook-icon-153518-removebg-preview.png" alt="img not found" />
                                            </Col>
                                            <Col xs={4} md={3} >
                                                <img src="https://i.ibb.co/GvQpWg7/linkedin-removebg-preview.png" alt="" />
                                            </Col>
                                            <Col xs={4} md={3} lg={2}>
                                                <img src="https://i.ibb.co/KwYNNDp/github-removebg-preview.png" alt="" />
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
                    {/*About Part End */}
                    {/*My Skills Part start */}
                    <Row className="bg-black py-5 px-5 details-setion">
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
                                        <Row className="text-white skilImg">
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
                    {/*My Services Part Start */}
                    <Row className="bg-black py-5 px-5 details-setion">
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
                                <Col xs={12} md={10}>
                                    <Container className="text-center" >
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
                    {/*My Portfolio Part Start */}
                    <Row className="bg-black py-5 px-5 details-setion">
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
                                    <Container className="text-center" >
                                        <Row className="text-white">
                                            <Col xs={4} md={4}>
                                                <Card style={{ width: '23rem', height: '15.3rem', background: 'black' }}>
                                                    <Card.Img variant="top" src="https://i.ibb.co/tQqgdz2/images1.jpg" />
                                                    <Card.Body className="card-btn">
                                                        <Button className=" card-btnInfo me-2 px-5">Github</Button>
                                                        <Button className="  card-btnInfo ms-3 px-5">Live Site</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xs={4} md={4}>
                                                <Card style={{ width: '23rem', height: '15.3rem', background: 'black' }}>
                                                    <Card.Img variant="top" src="https://i.ibb.co/tQqgdz2/images1.jpg" />
                                                    <Card.Body className="card-btn">
                                                        <Button className=" card-btnInfo me-2 px-5">Github</Button>
                                                        <Button className="  card-btnInfo ms-3 px-5">Live Site</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xs={4} md={4}>
                                                <Card style={{ width: '23rem', height: '15.3rem', background: 'black' }}>
                                                    <Card.Img variant="top" src="https://i.ibb.co/tQqgdz2/images1.jpg" />
                                                    <Card.Body className="card-btn">
                                                        <Button className=" card-btnInfo me-2 px-5">Github</Button>
                                                        <Button className="  card-btnInfo ms-3 px-5">Live Site</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    {/*My Portfolio Part End */}
                    {/*My Portfolio Part End */}
                    <Row className="bg-black py-5 px-5 details-setion">
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
                                        <Row xs={1} md={3} className="g-4 ">
                                            {Array.from({ length: 1 }).map((_, idx) => (
                                                <Col>
                                                    <Card className="bg-dark ">
                                                        <Card.Img className="" src="https://i.ibb.co/tQqgdz2/images1.jpg" />
                                                        <Card.Body className="card-btn">
                                                            <Button className=" card-btnInfo me-3"> <GoMarkGithub /> Github</Button>
                                                            <Button className="  card-btnInfo "><AiOutlineChrome /> Live Site</Button>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))}
                                            {Array.from({ length: 1 }).map((_, idx) => (
                                                <Col>
                                                    <Card className="bg-dark ">
                                                        <Card.Img className="" src="https://i.ibb.co/tQqgdz2/images1.jpg" />
                                                        <Card.Body className="card-btn">
                                                            <Button className=" card-btnInfo me-3"> <GoMarkGithub /> Github</Button>
                                                            <Button className="  card-btnInfo "><AiOutlineChrome /> Live Site</Button>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))}
                                            {Array.from({ length: 1 }).map((_, idx) => (
                                                <Col>
                                                    <Card className="bg-dark ">
                                                        <Card.Img className="" src="https://i.ibb.co/tQqgdz2/images1.jpg" />
                                                        <Card.Body className="card-btn">
                                                            <Button className=" card-btnInfo me-3"> <GoMarkGithub /> Github</Button>
                                                            <Button className="  card-btnInfo "><AiOutlineChrome /> Live Site</Button>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))}
                                            {Array.from({ length: 1 }).map((_, idx) => (
                                                <Col>
                                                    <Card className="bg-dark ">
                                                        <Card.Img className="" src="https://i.ibb.co/tQqgdz2/images1.jpg" />
                                                        <Card.Body className="card-btn">
                                                            <Button className=" card-btnInfo me-3"> <GoMarkGithub /> Github</Button>
                                                            <Button className="  card-btnInfo "><AiOutlineChrome /> Live Site</Button>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))}
                                            {Array.from({ length: 1 }).map((_, idx) => (
                                                <Col>
                                                    <Card className="bg-dark ">
                                                        <Card.Img className="" src="https://i.ibb.co/tQqgdz2/images1.jpg" />
                                                        <Card.Body className="card-btn">
                                                            <Button className=" card-btnInfo me-3"> <GoMarkGithub /> Github</Button>
                                                            <Button className="  card-btnInfo "><AiOutlineChrome /> Live Site</Button>
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

export default TopSection;

