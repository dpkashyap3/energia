import React from 'react'
import {Col,Image,Row} from "react-bootstrap"
import bg from "../images/banner-3.jpg"
import {motion} from "framer-motion"

const pageload={
    initial:{  
        x:"100vw"
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

const Products = () => {
    return (
        <motion.div variants={pageload} exit="exit" initial="initial" animate="animate">
        <Row>
        <Col lg={6} md={6} sm={12}>
            <Image className="banner" src={bg}/>        
        </Col>
        <Col lg={6} md={6} sm={12}>
            <h1 className="display-2 text-danger mt-3 mb-3">Products</h1>
            <h2>Energeia offers almost all range of Natural Ingredients. To make procurement easy, safe, and available under one roof, besides offering own manufactured products it also supplies products manufactured by our close associate companies. We also offers Herb & Spices (Whole/Powder) of our contract suppliers and associate farmers. We manufacture fast moving and products in demand regularly and other products against order.</h2>
            <ul className="h4 mt-2 p-5">
                <li>Botanical Extracts</li>
                <li>Phytochemicals</li>
                <li>Nutraceutical Ingrefients</li>
                <li>Phyto Enzymes</li>
                <li>Essential oils & Oleoresins</li>
                <li>Fruit & Vegetable powders</li>
                <li>Natural Colors</li>
                <li>Natural Vitamins and Minerals</li>
                <li>Herbs and Spices (Whole/Powder)</li>
            </ul>
        </Col>
        </Row>
        </motion.div>
    )
}

export default Products
