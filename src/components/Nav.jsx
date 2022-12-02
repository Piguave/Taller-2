import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
export default function Nav_B() {

    return (
        <>
            <Navbar collapseOnSelect className="fixed-top p-4 navbar-expand-lg " expand="lg">

                <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto cont-nav ">
                        <Nav.Item className="navtitle">
                            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/components/Home">Home</NavLink>
                        </Nav.Item>
                        <Nav.Item className="navtitle d-none d-xl-block">
                            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/components/Imc">IMC Calculator</NavLink>
                        </Nav.Item>
                        <Nav.Item className="navtitle d-none d-xl-block">
                            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/components/Age">Age Calculator</NavLink>
                        </Nav.Item>

                        <Nav.Item className="d-none d-xl-block">
                            <img  width="70" src={logo} />
                        </Nav.Item>
                        <Nav.Item className="d-none d-xl-block">
                            <div className="nav-title">KrugerStar</div>
                        </Nav.Item>

                        <Nav.Item className="navtitle d-none d-xl-block">
                            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/components/Clock">Clock</NavLink>
                        </Nav.Item>
                        <Nav.Item className="navtitle">
                            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/components/About">About Me</NavLink>
                        </Nav.Item>
                        <Nav.Item className="navtitle">
                            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/components/Contact">Contact</NavLink>
                        </Nav.Item>
                   
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="linea2">
            </div>
        </>
    );

}