import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar className="bg" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container className="nav-link">
                    <Navbar.Brand as={Link} to="/home"><img
                        src="https://i.ibb.co/72CWtFF/Marley-Logo.png"
                        height="75 "
                        className="d-inline-block align-top logo"
                        alt="React Bootstrap logo"
                    /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/moreProducts">Headphones</Nav.Link>
                        <Nav.Link as={Link} to="/Dashboard">Dashboard</Nav.Link>

                        {user.email ?
                            <Button onClick={logOut} className="logout-btn" as={Link} to="/">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}


                        <Navbar.Text>
                            <a className="user-name" href="#login">{user?.displayName}</a>
                        </Navbar.Text>


                    </Navbar.Collapse>
                    <Nav className="me-auto">

                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;