import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './header.css'

function Header() {
    return (
        // <nav className="header">
        //     <div className="header-links-container">
        //         <div className="header-link" id="linkedin">
        //             <a href="https://www.linkedin.com/in/dtcooper105" target="_blank">
        //                 <i className="bi bi-linkedin"></i>
        //             </a>
        //         </div>
        //         <div className="header-link" id="github">
        //             <a href="https://github.com/dtc105" target="_blank">
        //                 <i className="bi bi-github"></i>
        //             </a>
        //         </div>
        //     </div>
        //     <Link to="/">
        //         <h1 className="header-title">Derek Cooper</h1>
        //     </Link>
        //     <button>
        //         <span className="">Button</span>
        //     </button>
        // </nav>
        
        <Navbar expand="none" className="header">
            <Container className="header-links-container">
                <Nav.Link href="https://www.linkedin.com/in/dtcooper105" target="_blank">Linkedin</Nav.Link>
            </Container>
            <Container>
                <Navbar.Brand href="/">Derek Cooper</Navbar.Brand>
            </Container>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About me</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown" href="/projects">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;