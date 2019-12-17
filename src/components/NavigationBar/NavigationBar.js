import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    font-weight: bold;
    outline: none;
    &:hover {
      color: white;
      font-weight: bold;
    }
    &:focus {
      text-decoration: underline;
    }
    &:visited {
      color: #bbb;
      font-weight: bold;
    }
  }
`;

const navigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand><Link to="/" className="nav-link">ETL App</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
              <Link to="/" className="nav-link">Main page</Link>
          </Nav.Item>
          <Nav.Item>
              <Link to="/extract" className="nav-link">Extract</Link>
          </Nav.Item>
          <Nav.Item>
              <Link to="/transform" className="nav-link">Transform</Link>
          </Nav.Item>
          <Nav.Item>
              <Link to="/load" className="nav-link">Load to database</Link>
          </Nav.Item>
          <Nav.Item>
              <Link to="/etl" className="nav-link">ETL</Link>
          </Nav.Item>
          <Nav.Item>
              <Link to="/export-csv" className="nav-link">Export CSV</Link>
          </Nav.Item>
          <Nav.Item>
              <Link  to="/clean-db" className="nav-link">Clean database</Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
);

export default navigationBar;