import Plot from "../image/apartment.jpeg";
import Plot1 from "../image/plot.jpg";
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaRegHeart } from 'react-icons/fa';
import ProgressBar from 'react-bootstrap/ProgressBar';
import "../CSS/plots.css";
const Plots = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="textfontfamily">
            <h3 className="mt-4 mb-4 text-center">Plots in Bangalore</h3>

            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <CardGroup>
                        <Card className="mx-2 h-50">
                            <p className="Assuredtext">Assured</p>
                            <Card.Img variant="top" src={Plot} />
                            <Card.Body>
                                <Container fluid>
                                    <Row>
                                        <Col>
                                            <Card.Title>Godrej Park</Card.Title>
                                            <small className="text-muted">Sarjapur Road, Banglore</small>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="mt-1" xs={8}>
                                            <h6>$ 45.0 L to 1.15 Cr</h6>
                                            <small className="text-muted">1,2,3 BHK Flats</small>
                                        </Col>

                                        <Col>
                                            <small>Early Stage</small>
                                            <ProgressBar variant="danger" now={60} />
                                        </Col>
                                    </Row>
                                    <Row className="mt-2 text-center">
                                        <Col>
                                            <Button style={{ backgroundColor: "#EFDDDD", color: "black" }}><FaRegHeart /> Shortlist</Button>
                                        </Col>
                                        <Col>
                                            <Button style={{ backgroundColor: "#FD3752" }}>Details</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                        <Card className="mx-2 h-50">
                            <p className="Assuredtext">Assured</p>
                            <Card.Img variant="top" src={Plot1} />
                            <Card.Body>
                                <Container fluid>
                                    <Row>
                                        <Col>
                                            <Card.Title>Godrej Park</Card.Title>
                                            <small className="text-muted">Sarjapur Road, Banglore</small>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="mt-1" xs={8}>
                                            <h6>$ 45.0 L to 1.15 Cr</h6>
                                            <small className="text-muted">1,2,3 BHK Flats</small>
                                        </Col>

                                        <Col>
                                            <small>Early Stage</small>
                                            <ProgressBar variant="danger" now={60} />
                                        </Col>
                                    </Row>
                                    <Row className="mt-2 text-center">
                                        <Col>
                                            <Button style={{ backgroundColor: "#EFDDDD", color: "black" }}><FaRegHeart /> Shortlist</Button>
                                        </Col>
                                        <Col>
                                            <Button style={{ backgroundColor: "#FD3752" }}>Details</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                        <Card className="mx-2 h-50">
                            <p className="Assuredtext">Assured</p>
                            <Card.Img variant="top" src={Plot} />
                            <Card.Body>
                                <Container fluid>
                                    <Row>
                                        <Col>
                                            <Card.Title>Godrej Park</Card.Title>
                                            <small className="text-muted">Sarjapur Road, Banglore</small>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="mt-1" xs={8}>
                                            <h6>$ 45.0 L to 1.15 Cr</h6>
                                            <small className="text-muted">1,2,3 BHK Flats</small>
                                        </Col>

                                        <Col>
                                            <small>Early Stage</small>
                                            <ProgressBar variant="danger" now={60} />
                                        </Col>
                                    </Row>
                                    <Row className="mt-2 text-center">
                                        <Col>
                                            <Button style={{ backgroundColor: "#EFDDDD", color: "black" }}><FaRegHeart /> Shortlist</Button>
                                        </Col>
                                        <Col>
                                            <Button style={{ backgroundColor: "#FD3752" }}>Details</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                        <Card className="mx-2 h-50">
                            <p className="Assuredtext">Assured</p>
                            <Card.Img variant="top" src={Plot1} />
                            <Card.Body>
                                <Container fluid>
                                    <Row>
                                        <Col>
                                            <Card.Title>Godrej Park</Card.Title>
                                            <small className="text-muted">Sarjapur Road, Banglore</small>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="mt-1" xs={8}>
                                            <h6>$ 45.0 L to 1.15 Cr</h6>
                                            <small className="text-muted">1,2,3 BHK Flats</small>
                                        </Col>

                                        <Col>
                                            <small>Early Stage</small>
                                            <ProgressBar variant="danger" now={60} />
                                        </Col>
                                    </Row>
                                    <Row className="mt-2 text-center">
                                        <Col>
                                            <Button style={{ backgroundColor: "#EFDDDD", color: "black" }}><FaRegHeart /> Shortlist</Button>
                                        </Col>
                                        <Col>
                                            <Button style={{ backgroundColor: "#FD3752" }}>Details</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Carousel.Item>
                <Carousel.Item>
                    <CardGroup>
                        <Card className="mx-2 h-50">
                            <p className="Assuredtext">Assured</p>
                            <Card.Img variant="top" src={Plot} />
                            <Card.Body>
                                <Container fluid>
                                    <Row>
                                        <Col>
                                            <Card.Title>Godrej Park</Card.Title>
                                            <small className="text-muted">Sarjapur Road, Banglore</small>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="mt-1" xs={8}>
                                            <h6>$ 45.0 L to 1.15 Cr</h6>
                                            <small className="text-muted">1,2,3 BHK Flats</small>
                                        </Col>

                                        <Col>
                                            <small>Early Stage</small>
                                            <ProgressBar variant="danger" now={60} />
                                        </Col>
                                    </Row>
                                    <Row className="mt-2 text-center">
                                        <Col>
                                            <Button style={{ backgroundColor: "#EFDDDD", color: "black" }}><FaRegHeart /> Shortlist</Button>
                                        </Col>
                                        <Col>
                                            <Button style={{ backgroundColor: "#FD3752" }}>Details</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                        <Card className="mx-2 h-50">
                            <p className="Assuredtext">Assured</p>
                            <Card.Img variant="top" src={Plot1} />
                            <Card.Body>
                                <Container fluid>
                                    <Row>
                                        <Col>
                                            <Card.Title>Godrej Park</Card.Title>
                                            <small className="text-muted">Sarjapur Road, Banglore</small>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="mt-1" xs={8}>
                                            <h6>$ 45.0 L to 1.15 Cr</h6>
                                            <small className="text-muted">1,2,3 BHK Flats</small>
                                        </Col>

                                        <Col>
                                            <small>Early Stage</small>
                                            <ProgressBar variant="danger" now={60} />
                                        </Col>
                                    </Row>
                                    <Row className="mt-2 text-center">
                                        <Col>
                                            <Button style={{ backgroundColor: "#EFDDDD", color: "black" }}><FaRegHeart /> Shortlist</Button>
                                        </Col>
                                        <Col>
                                            <Button style={{ backgroundColor: "#FD3752" }}>Details</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                        <Card className="mx-2 h-50">
                            <p className="Assuredtext">Assured</p>
                            <Card.Img variant="top" src={Plot} />
                            <Card.Body>
                                <Container fluid>
                                    <Row>
                                        <Col>
                                            <Card.Title>Godrej Park</Card.Title>
                                            <small className="text-muted">Sarjapur Road, Banglore</small>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="mt-1" xs={8}>
                                            <h6>$ 45.0 L to 1.15 Cr</h6>
                                            <small className="text-muted">1,2,3 BHK Flats</small>
                                        </Col>

                                        <Col>
                                            <small>Early Stage</small>
                                            <ProgressBar variant="danger" now={60} />
                                        </Col>
                                    </Row>
                                    <Row className="mt-2 text-center">
                                        <Col>
                                            <Button style={{ backgroundColor: "#EFDDDD", color: "black" }}><FaRegHeart /> Shortlist</Button>
                                        </Col>
                                        <Col>
                                            <Button style={{ backgroundColor: "#FD3752" }}>Details</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                        <Card className="mx-2 h-50">
                            <p className="Assuredtext">Assured</p>
                            <Card.Img variant="top" src={Plot1} />
                            <Card.Body>
                                <Container fluid>
                                    <Row>
                                        <Col>
                                            <Card.Title>Godrej Park</Card.Title>
                                            <small className="text-muted">Sarjapur Road, Banglore</small>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="mt-1" xs={8}>
                                            <h6>$ 45.0 L to 1.15 Cr</h6>
                                            <small className="text-muted">1,2,3 BHK Flats</small>
                                        </Col>

                                        <Col>
                                            <small>Early Stage</small>
                                            <ProgressBar variant="danger" now={60} />
                                        </Col>
                                    </Row>
                                    <Row className="mt-2 text-center">
                                        <Col>
                                            <Button style={{ backgroundColor: "#EFDDDD", color: "black" }}><FaRegHeart /> Shortlist</Button>
                                        </Col>
                                        <Col>
                                            <Button style={{ backgroundColor: "#FD3752" }}>Details</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Plots;