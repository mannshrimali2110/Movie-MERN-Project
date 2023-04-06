import { Outlet } from "react-router-dom";
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

export default function Navbar1() {
  return (
    <>
      <Navbar className="nav" bg="prop" variant="dark">
        <Container>
          <Navbar.Brand>
            <span>C</span>ine<span>F</span>licks
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/movie">Movies</Nav.Link>
            <Nav.Link href="/AboutUs">AboutUs</Nav.Link>
            <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}
