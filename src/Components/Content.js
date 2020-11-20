import React from 'react'
import {Container,Row} from "react-bootstrap"
import {Switch,Route} from "react-router-dom"
import "./Content.css"
import Home from "./Home"
import Services from "./Services"
import Products from "./Products"
import Facility from "./Facility"
import Management from './Management'
import Contactus from './Contactus'


const Content = () => {
    return (
        <Container fluid>
            <Row>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/services" component={Services}/>
                    <Route path="/products" component={Products}/>
                    <Route path="/facility" component={Facility}/>
                    <Route path="/management" component={Management}/>
                    <Route path="/contactus" component={Contactus}/>
                </Switch>
            </Row>
        </Container>        
    )
}

export default Content
