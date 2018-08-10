import React, { Component } from 'react';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import {BrowserRouter as Router, Link } from 'react-router-dom'

class TheNav extends Component {
    render() {
      return (
        
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Bread And Roses </Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href="#">
                    <Link  to="/breadtube"> Bread Tube </Link>
                </NavItem>
                <NavItem>
                    <Link to="/news">
                        <NavDropdown eventKey={2} title="News" id="basic-nav-dropdown">
                                <MenuItem eventKey={2.1}>USA</MenuItem>
                                <MenuItem eventKey={2.2}>Europe</MenuItem>
                                <MenuItem eventKey={2.3}>Middle East</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={2.4}>More</MenuItem>
                        </NavDropdown>
                    </Link>
                </NavItem>
                <NavItem eventKey={3} href="#">
                    <Link to="/blog"> Blog </Link>
                </NavItem>
                <NavItem eventKey={4} href="#">
                    <Link  to="/library"> Library </Link>
                </NavItem>
            </Nav>
        </Navbar>
        
      );
    }
  }
  
  export default TheNav;
  