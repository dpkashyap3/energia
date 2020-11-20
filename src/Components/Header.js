import React from 'react'
import {Navbar} from 'react-bootstrap';
import logo from "../images/logo.png"
import "./Header.css"


export const Header = () => {
    return (
        <Navbar bg="light">
        
        <Navbar.Brand className="mx-auto" href="/">
          <img
            src={logo}
            width="157"
            height="78"
            alt="Energeia Logo"
          />
        </Navbar.Brand>
      </Navbar>
    )
}
