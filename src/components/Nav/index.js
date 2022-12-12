import React from "react";
import {
  Container,
  Row,
  Col
} from 'react-bootstrap'
import "./index.css";

function Nav() {
    return(

        <Container>
            <Row className="navbar">
                <Col className="d-flex justify-content-center">
                    about
                </Col>

                <Col className="d-flex justify-content-center">
                    resume
                </Col>

                <Col className="d-flex justify-content-center">
                    work
                </Col>

                <Col className="d-flex justify-content-center">
                    contact
                </Col>
            </Row>
            
        </Container>

    );
}

export default Nav