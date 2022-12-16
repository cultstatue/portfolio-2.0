import React from "react";
import {
    Container,
    Row,
    Col,
    Image,
    Button
} from 'react-bootstrap'
import "./index.css";
function Resume() {
    return (
        <section id ="resume">
            <Container>
                <Row className="skills-container">
                    <Col>
                    <div>
                        <h2>Aquired Skills</h2>
                        <ul className="skills">
                            <li>Javascript</li>
                            <li>HTML & CSS</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>mySQL</li>
                            <li>React</li>
                        </ul>
                    </div>
                    </Col>

                    <Col xsm={8}>
                    <Image
                    src={require(`../../assets/Madeleine Doutt Resume 2022 copy.jpg`)}
                    fluid
                    className="resume-img"
                    ></Image>

                    <div className="pdf">
                        <a href={require("../../assets/Madeleine Doutt Resume 2022.pdf")} download>
                        <div className="d-grid">
                                <Button variant="git-button">
                                    Download the PDF
                                </Button>
                            </div>
                        </a>
                    </div>
                    </Col>
                </Row>
            </Container>
            
        </section>
    );
}

export default Resume;