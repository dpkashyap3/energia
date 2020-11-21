import React from 'react'
import {Col,Image,Row} from "react-bootstrap"
import bg from "../images/banner.jpg"
import {motion} from "framer-motion"

const pageload={
    initial:{
        x:'100vw'
    },
    animate:{
        x:0,
        transition:{
            
            type:"spring",
            mass:0.4,
            dumping:8,
            when:"beforeChildren",
            staggerChild:2
        }
        
    },
    exit:{
        x:"-100vw",
        transition:{ease:"easeInOut"}

    }
}


const Home = () => {
    return (
        <motion.div variants={pageload} initial="initial" animate="animate" exit="exit">
        <Row>
        <Col lg={6} md={6} sm={12}>
            <Image className="banner" src={bg}/>        
        </Col>
        <Col lg={6} md={6} sm={12}>
            <h1 className="display-2 text-danger mt-3 mb-3">WELCOME TO ENERGEIA</h1>
            <h2>
            Energeia Life sciences Pvt. Ltd. was established in the year 2010 with the Mission and passion to manufacture and supply optimum quality Natural ingredients at realistic price which will be competitive. Energeia believes stringent quality policy, direct procurement of raw material and own manufacture is the key for success in supplying Ingredients of optimum quality at realistic price (most competitive price) in committed time. Energeia is an ISO, Halal, Kosher and Organic certified company, manufactures on its own in an Ayush GMP approved facility. Energeia Life sciences Pvt. Ltd. is led by a strong technical team who are expertise and experienced in the fields of research & development, testing, production & documentation (as per FDA) in both bulk & dosage forms of Natural ingredients.
            </h2>
        </Col>
        </Row>
        </motion.div>
    )
}

export default Home
