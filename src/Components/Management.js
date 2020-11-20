import React from 'react'
import {Col,Image} from "react-bootstrap"
import bg from "../images/banner5.jpg"


const Management = () => {
    return (
        <>
        <Col lg={6} md={6} sm={12}>
            <Image className="banner" src={bg}/>        
        </Col>
        <Col lg={6} md={6} sm={12}>
            <h1 className="display-2 text-danger mt-3 mb-3">Management</h1>
            <h2>Energeia is proud to say that its management is constructed with a team of scientists and botanists with more than 10 – 15 years’ experience in the field of Natural Ingredients.</h2>

            <h2 className="mt-5">Our Team</h2> 
            <ul className="h4 mt-2 p-5">
                <li>Naveen charles.M – M.Sc. (Managing & Marketing Director)</li>
                <li>Rajiv chandra bose.M - B.E. (Operations Director)</li>
                <li>Dr. Sambasiva R Poreddy – M.Phil., Ph.D. (Technical Director)</li>
                <li>Dr. Chandra shekar reddy – Ph.D. (Scientist R&D)</li>
            </ul>
            
        </Col>
        </>
    )
}

export default Management
