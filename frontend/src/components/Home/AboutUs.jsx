import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Mamta from "./images/mamta.jpg";
import Navnnet from "./images/navneet.jpg";
import Omkar from "./images/omkar.jpg";
import Krishna from "./images/krishna.jpg";
import DigiTech from"./images/digi.jpg";

function AboutUs() {
    return (
        <Container className="about-container my-5">
            <Row>
                <Col md={6}>
                    <h2>About Us</h2>
                    <p>Welcome to My Company! We are dedicated to providing the best service in the industry. Our team is passionate about delivering high-quality products and exceptional customer service.</p>
                    <p> The company's spirit of entrepreneurship has also been evident in the investments it has made in early stage companies/start-up ventures to tap into the growing and vibrant Indian internet market. Currently, the company has investments in Zomato Media Private Limited (www.zomato.com); Applect Learning Systems Private Limited (www.meritnation.com); Etechaces Marketing and Consulting Private Limited (www.policybazaar.com) </p>
                    <p>Our values include:</p>
                    <ul>
                        <li>Integrity</li>
                        <li>Innovation</li>
                        <li>Customer Satisfaction</li>
                        <li>Teamwork</li>
                    </ul>
                </Col>
                <Col md={6}>
                    <img src={DigiTech} className="img-fluid rounded" alt="Company Image" />
                </Col>
            </Row>

            <Row className="mt-5">
                <Col>
                    <h3>Our Team</h3>
                    <p>Meet the talented individuals behind My Company:</p>
                    <Row className="justify-content-center">
                        <Col md={6} lg={3} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={Mamta} alt="Mamta" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                                <Card.Body>
                                    <Card.Title>Mamta Todkari</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={3} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={Navnnet} alt="Navneet " style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                                <Card.Body>
                                    <Card.Title>Navneet Bhargav</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={3} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={Omkar} alt="Omkar" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                                <Card.Body>
                                    <Card.Title>Omkar Kshirsagar</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={3} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={Krishna} alt="Krishna" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                                <Card.Body>
                                    <Card.Title>Krishna Ruparel</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutUs;
