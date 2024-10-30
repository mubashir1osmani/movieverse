import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import './header.css';
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar expand="lg" className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <Container>
                <Navbar.Brand as={Link} to="/" className="logo">
                    MovieVerse
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto nav-links">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
                        <Nav.Link as={Link} to="/watchlist">Watchlist</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav>
                    
                    <Form className="d-flex search-box">
                        <Form.Control
                            type="search"
                            placeholder="Search movies..."
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-light" className="search-btn">🔍</Button>
                    </Form>

                    <Button variant="danger" className="login-btn ms-3">
                        Login
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Header;