import React from 'react'
import {Col,Image} from "react-bootstrap"
import bg from "../images/banner2.jpg"


const Services = () => {
    return (
        <>
        <Col lg={6} md={6} sm={12}>
            <Image className="banner" src={bg}/>        
        </Col>
        <Col lg={6} md={6} sm={12}>
            <h1 className="display-2 text-danger mt-3 mb-3">Services</h1>
            <h2>Other than products, Energeia also provides services in the area of Research & Development and Manufacture of Phyto Ingredients in Bulk & Dosage forms.</h2>
            <ul className="h4 mt-2 p-5">
                <li>Discover of new and up-gradation of existing Phyto ingredients.</li>
                <li>Formulation of Phyto ingredients into Capsules, Tablets, Syrups, Granules, and Pastes.</li>
                <li>Contract manufacture of Extracts & Phytochemicals.</li>
                <li>Contract manufacture of Bulk capsules, Tablets, Syrups, Granules and pastes.</li>
            </ul>
        </Col>
        </>
    )
}

export default Services
