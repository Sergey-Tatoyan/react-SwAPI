import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <Navbar bg="transparent" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src="/logo.png"
            className="d-inline-block align-top logo"
            alt="Star Wars"
          />
        </Navbar.Brand>
        <Nav className="mr-auto ">
          <Link  to="/">Users</Link>
          <Link to="/planets">Planets</Link>
          <Link to="/starship">Starships</Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
