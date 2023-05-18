import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../image/logo.jpeg";
import Image from "react-bootstrap/Image";
import { Button } from 'react-bootstrap';
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='footercolour' variant="dark">
                <Container fluid>
                    <Navbar.Brand className='bg-white' href="#home"><Image src={Logo}></Image></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id=" responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <select className='selectCity'>
                                <option value="0">Banglore</option>
                                <option value="1">Chennai</option>
                            </select>
                            <Nav.Link href="#features">PROJECTS</Nav.Link>
                            <Nav.Link href="#pricing">PACKAGES</Nav.Link>
                            <Nav.Link href="#aboutus">ABOUT US</Nav.Link>
                            <Nav.Link href="#contact">CONTACT</Nav.Link>

                        </Nav>
                        <Button style={{ backgroundColor: "#FD3752" }}>LET'S BUILD</Button>
                    </Navbar.Collapse>
                </Container >
            </Navbar>
        </div>
    );
}

export default Header;