import React from "react";
import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap'
import "./index.css";

function About() {
    return (
        <section id="about">
            <Container>
                <Row>
                    <Col md={12}>
                    <div className="d-flex justify-content-center">
                    <Image
                    src={require(`../../assets/test-header.png`)}
                    fluid
                    className="about-img"
                    ></Image>
                    </div>
                    </Col>

                    <Col md={12} className="about-container">
                    <div className="about">
                    Full stack web developer with a background in the arts and visual communication, concerned with creating aesthetically unique and functional experiences for users. Has a degree in Illustration from Maryland Institute College of Art and recently acquired a certificate in full stack web development from George Washington University; acquired skills include utilization of CSS, Javascript, SQL databases and MERN stack development. 
                    <p></p>I am a problem solver by nature and devote myself to tackling both visual and logical issues in development. In multiple group projects I’ve leveraged my creative thinking and knowledge of both database structures and the front end to troubleshoot problems critical to creating a functional product. 
                    <p></p>
                    I recently worked in a team of four to create a single page MERN application which functions as a pet centered social media site; users can sign up, create detailed profiles for their pets, view each other’s digital “homes” as well as pets, and leave comments on each other’s pages. 
                    <p></p>
                    I’m eager to bring these skills to a creative and quality-driven team of people who are excited about creating excellent user experiences as I am.
                    </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
}

export default About