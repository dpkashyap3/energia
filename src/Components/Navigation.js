import React from 'react'
import {Navbar,Nav} from "react-bootstrap"
import mail from "../images/mail.png"
import phone from "../images/phone.png"
import {Link} from "react-router-dom"


const Navigation = () => {
    return (
  <Navbar bg="light" expand="lg"> 
  <img className="pr-2 pl-2" src={phone} alt="Contact"/>
  <p className=" mt-3 small">+91 080 28445622</p>
  <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-auto" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mx-auto text-center">
      <Nav.Link><Link to="/" className="menuItem">Company</Link></Nav.Link>
      <Nav.Link><Link to="services" className="menuItem">Services</Link></Nav.Link>
      <Nav.Link><Link to="products" className="menuItem">Products</Link></Nav.Link>
      <Nav.Link><Link to="facility" className="menuItem">Facility</Link></Nav.Link>
      <Nav.Link><Link to="management" className="menuItem">Management</Link></Nav.Link>
      <Nav.Link><Link to="contactus" className="menuItem">Contact Us</Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  <img className="pl-4" src={mail} alt="Mail"/>
  <p className="mt-3 small">info@energeia.com</p>
</Navbar>
    )
}

export default Navigation
