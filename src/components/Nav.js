import React from "react";
import Nav from 'react-bootstrap/Nav';
import logo from "../assets/logo.png"
import Container from 'react-bootstrap/Container';
export default function Nav_B() {

    return (
        <>
            <Nav activeKey="/home" className="justify-content-center fixed-top p-4" >
            <div className='container-nav'>
                
                <Nav.Item className="navtitle">
                    <Nav.Link className="text-black  p-4" href="/components/Home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item className="navtitle">
                    <Nav.Link className="text-black p-4" href="/components/Imc">IMC Calculator</Nav.Link>
                </Nav.Item>
                <Nav.Item className="navtitle">
                    <Nav.Link className="text-black p-4" href="/components/Age">Age Calculator</Nav.Link>
                </Nav.Item>
             
                <Nav.Item>
                    <img width="70" src={logo} />
                </Nav.Item>
                <Nav.Item>
                    <div className="nav-title">KrugerStar</div>
                </Nav.Item>

                <Nav.Item className="navtitle">
                    <Nav.Link className="text-black p-4 " href="/components/Clock">Clock</Nav.Link>
                </Nav.Item>
                <Nav.Item className="navtitle">
                    <Nav.Link className="text-black p-4  " href="/components/About">About Me</Nav.Link>
                </Nav.Item>
                <Nav.Item className="navtitle">
                    <Nav.Link className="text-black p-4 " href="/components/Contact">Contact</Nav.Link>
                </Nav.Item>
                </div>
            </Nav>
         
        </>
    );

}