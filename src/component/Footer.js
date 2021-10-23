import React from "react";

import { Navbar,Container,Col } from "react-bootstrap";

class Footer extends React.Component{
    render(){
        return(
            <Navbar fixed="bottom" bg="black" variant="black">
                <Container>
                    <Col lg={12} className="text-white">
                    <div align="center"> this fun :v</div>
                    </Col>
                </Container>
            </Navbar>
        );
            
       
    }
}
export default Footer;