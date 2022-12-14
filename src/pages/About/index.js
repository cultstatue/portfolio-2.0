import React from "react";
import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap'

function About() {
    return (
        <section id="about">
            <Container>
                <Row>
                    <Col>
                    <Image
                    src={require(`../../assets/test-header.png`)}
                    fluid
                    ></Image>
                    </Col>

                    <Col>
                    desc here
                    </Col>

                </Row>
            </Container>
        </section>
    );
}

export default About