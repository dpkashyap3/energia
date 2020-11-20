import React from 'react'
import {Col,Image} from "react-bootstrap"
import bg from "../images/banner6.jpg"
import phone from "../images/phone.png"
import mail from "../images/mail.png"

const Facility = () => {
    return (
        <>
        <Col lg={6} md={6} sm={12}>
            <Image className="banner" src={bg}/>        
        </Col>
        <Col lg={6} md={6} sm={12}>
            <h1 className="display-2 text-danger mt-3 mb-3">Contact Us</h1>
            <h2>Energeia Life sciences Pvt. Ltd.</h2>
            <h4 className="mt-5">#58, Ayyappa Temple Street,
            Bytathi, Doddagubbi post,
            Bangalore – 560077.</h4>
            <div className="mt-5 inline"><p className="h4"><img src={phone} alt="Contact"/> +91 080 28445622, +91 9886792692, +91 8123444733.</p></div>
            <div className="mt-5 inline"><p className="h4"><img src={mail} alt="Contact"/><span className="ml-3">info@energeia.com</span></p></div>
        </Col>
        </>
    )
}

export default Facility
