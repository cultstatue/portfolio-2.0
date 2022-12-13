import React from "react";
import {
    Container,
    Row,
    Col,
    Image,
    Button
} from 'react-bootstrap'
import "./index.css"

function Work() {
    return (
        <section>
            <Container>
                <Row className="work-element">
                    <Col xxl={6} sm={12}>
                        <Image
                        src={require(`../../assets/test-header.png`)}
                        fluid
                        className="work-img"
                        ></Image>
                    </Col>

                    <Col xxl={6} sm={12}>
                        <h2>Work Title</h2>
                        <h3>subtitle(madewith will go here)</h3>
                        <div className="work-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis sem id metus tempor dictum. Curabitur ut diam a ligula pretium ultricies sit amet ut enim. Nam accumsan magna ante, non imperdiet odio viverra non.
                        </div>
                        <div className="d-grid">
                            <Button className="git-button">
                                Github button
                            </Button>
                        </div>
                    </Col>  
                </Row>
            </Container>
        </section>
    );
}

export default Work