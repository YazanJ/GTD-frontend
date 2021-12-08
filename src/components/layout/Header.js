import React from "react";
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
    Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ setNewItem }) => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" id="nav">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">
                        GTD
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <NavDropdown
                                title="All Areas"
                                id="navbarScrollingDropdown"
                            >
                                <NavDropdown.Item href="/">
                                    work
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link onClick={() => setNewItem(true)}>
                                New Item
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
