import React from 'react'
import { Navbar, NavDropdown, Nav, Image } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
const Header = () => {

    return (
        <header>
            <Navbar className='navbar-style' expand="lg">

                <LinkContainer to='/'>
                    <Navbar.Brand href="#home">
                        <Image src="/images/logovtu.jpg" className='logo-img ' rounded />
                        <h6 className='logo-name'>
                            Visvesvaraya Technological University, Belagaum</h6>
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">

                        <LinkContainer to='/'>
                            <Nav.Link href="#home">Home</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/about'>
                            <Nav.Link href="#link">About VTU</Nav.Link>
                        </LinkContainer>

                        <NavDropdown title="Academic" id="basic-nav-dropdown">
                            <LinkContainer to='/admission'>
                                <NavDropdown.Item href="#action/3.1">Admission</NavDropdown.Item>
                            </LinkContainer>

                            <LinkContainer to='/circular'>
                                <NavDropdown.Item href="#action/3.2">Circular and Notifications</NavDropdown.Item>
                            </LinkContainer>

                            <LinkContainer to='/certificate'>
                                <NavDropdown.Item href="#action/3.3">Certificate Issued</NavDropdown.Item>
                            </LinkContainer>

                        </NavDropdown>
                        <NavDropdown title="Examination" id="basic-nav-dropdown">
                            <LinkContainer to='/guidelines'>
                                <NavDropdown.Item href="#action/3.1">Examination & Guidelines</NavDropdown.Item>
                            </LinkContainer>

                            <LinkContainer to='/application'>
                                <NavDropdown.Item href="#action/3.2">Examination Application</NavDropdown.Item>
                            </LinkContainer>

                            <LinkContainer to='/result'>
                                <NavDropdown.Item href="#action/3.3">Result</NavDropdown.Item>
                            </LinkContainer>

                        </NavDropdown>
                        <NavDropdown title="Departments" id="basic-nav-dropdown">
                            <LinkContainer to='/cse'>
                                <NavDropdown.Item href="#action/3.1">Computer and Science Engineering</NavDropdown.Item>
                            </LinkContainer>

                            <LinkContainer to='/civil'>
                                <NavDropdown.Item href="#action/3.2">Civil Engineering</NavDropdown.Item>
                            </LinkContainer>

                            <LinkContainer to='/ece'>
                                <NavDropdown.Item href="#action/3.3">Electronics and Communication Engineering</NavDropdown.Item>
                            </LinkContainer>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>


            </Navbar>
        </header>
    );
}
export default Header; 
