import React from "react";
import {
  Container,
  Row,
  Col
} from 'react-bootstrap'
import "./index.css";

function Nav() {
    return(

        <Container className="sticky-top navbar-container">
            <Row className="navbar">
                <Col className="d-flex justify-content-center
                nav-item">
                    <a href="https://cultstatue.github.io/portfolio-2.0/#/about">
                        <div>
                            about
                        </div>
                    </a>
                </Col>

                <Col className="d-flex justify-content-center 
                nav-item"
                >
                    <a href="https://cultstatue.github.io/portfolio-2.0/#/resume">
                        <div>
                            resume
                        </div>
                    </a>
                </Col>

                <Col className="d-flex justify-content-center
                nav-item"
                >
                    <a href="https://cultstatue.github.io/portfolio-2.0/#/">
                        <div>
                            work
                        </div>
                    </a>
                </Col>

                <Col className="d-flex justify-content-center
                nav-item"
                >
                    <a href="mailto:madeleinedoutt@gmail.com">
                        <div>
                            contact
                        </div>
                    </a>
                </Col>
            </Row>
            
        </Container>

    );
}

export default Nav