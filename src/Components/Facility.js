import React from 'react'
import {Col,Image} from "react-bootstrap"
import bg from "../images/banner-4.jpg"


const Facility = () => {
    return (
        <>
        <Col lg={6} md={6} sm={12}>
            <Image className="banner" src={bg}/>        
        </Col>
        <Col lg={6} md={6} sm={12}>
            <h1 className="display-2 text-danger mt-3 mb-3">Facility</h1>
            <h2>Energeia Life sciences Pvt. Ltd. is a complete company having well equipped Laboratory for every day testing and consistent Innovation & improvement of Phyto ingredients. Our production facility for bulk ingredients is an Ayush GMP certified, it has different lines of production capacity with altogether 200 tons per month in-put capacity, at a time we can manufacture four different products. It has huge space capacity of storing raw-material & Finish products, we can store about 500 tons raw material & 50 tons finish product. Energeia also does dosage forms in an Ayush approved government facility with capacity of 10 lakh capsules, 10 lakh Tablets, 1 lakh bottles and 1000 kg Granules per day.</h2>
        </Col>
        </>
    )
}

export default Facility
