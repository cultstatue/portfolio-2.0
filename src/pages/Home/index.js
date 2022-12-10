import React, { useState } from "react";
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'
import "./index.css";

function Home() {
    return (
        <Container>
          <Row>
            <Col lg={2} xs={1}></Col>
            <Col lg={8} xs={10}>
                <div className="home-container">
                lorem ipsum
                </div>
            </Col>
            <Col lg={2} xs={1}></Col>
          </Row>
        </Container>
    );
}

export default Home