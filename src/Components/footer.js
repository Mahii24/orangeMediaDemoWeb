import { Container, Row, Col } from "react-bootstrap"
import { BsGeoAlt } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import "../CSS/footer.css";
const Footer1 = () => {
    return (
        <>
            <div className="footercolour p-5 mb-2">
                <Container fluid className="text-white textfontfamily">
                    <Row >
                        <Col xs={5}>
                            <h4>About Site</h4>
                            <p className="aboutsite_text">We convert your dreams into reality. At Space
                                and Bricks we offer your dream home at affordable
                                and assured prices. It s true there are lots of belief
                                issues when it comes about spending so much money.
                                But we do our job with complete integrity;<br></br><small>Read more</small></p>
                        </Col>
                        <Col xs={4}>
                            <h4>Contact Us</h4>
                            <p className="contactustext"><BsGeoAlt /> No. 80, 2nd Floor, 21st Main, Opp to
                                Bangalore Nethralaya, Near BDA Complex,
                                560070, Banashankari Stage II, Banashankari,
                                Bengaluru, Karnataka 560070</p>
                            <p><BsEnvelope /> spaceandbricks@gmail.com;</p>
                            <p><BsTelephone /> Call us 080 66084369</p>
                        </Col>
                        <Col>
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a className="text-white" href="#about-us">About Us</a></li>
                                <li><a className="text-white" href="#pre-launch">Pre Launch Project</a></li>
                                <li><a className="text-white" href="#readyto-move">Ready to Move Project</a></li>
                                <li><a className="text-white" href="#apart-bang">Apartments in bangalore</a></li>
                                <li><a className="text-white" href="#plot-bang">Plots in Bangalore</a></li>
                                <li><a className="text-white" href="#privacy-poli">Privacy Policy</a></li>
                                <li><a className="text-white" href="#disclaime">Disclaime</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footercolour text-white px-5 py-4 textfontfamily ">
                <Container fluid>
                    <Row>
                        <Col xs={4}>
                            <p>Space and Bricks © All Right Reserved
                                Authorized channel Partner RERA
                                #AG/KN/170908/001106</p>
                        </Col>
                        <Col></Col>
                        <Col xs={3}>
                            Follow Us <BsLinkedin /> <BsInstagram /> <BsFacebook />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>

    )
}
export default Footer1;