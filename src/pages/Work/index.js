import React from "react";
import {
    Container,
    Row,
    Col,
    Image,
    Button,
} from 'react-bootstrap'
import "./index.css"

function Work() {

    const work = [
        {
            name: "Petyard",
            img: "petyard.png",
            subtitle: "MERN stack, React-Bootstrap",
            desc: "lorem ipsumgdfdgdf gfdsgfds ",
            github: "https://github.com/cultstatue/petyard"

        },
        {
            name: "Bragging Rights",
            img: "bragging-rights.png",
            subtitle: "mySQL, Node.js, Express, Bootstrap",
            desc: "lorem ipsumgdfdgdf gfdsgfds ",
            github: "https://github.com/cultstatue/bragging-rights"

        },
        {
            name: "Ready?",
            img: "ready.png",
            subtitle: "Javascript, server-side APIs, Bulma",
            desc: "lorem ipsumgdfdgdf gfdsgfds ",
            github: "https://github.com/cultstatue/ready-s"

        }
    ]

    return (
        <section>
            <Container>
                {work.map((project) => (
                    <Row className="work-element">
                        <Col xxl={6} sm={12}>
                            <Image
                            src={require(`../../assets/screenshots/${project.img}`)}
                            fluid
                            className="work-img"
                            alt={project.name}
                            key={project.name}
                            ></Image>
                        </Col>

                        <Col xxl={6} sm={12}>
                        <h2>{project.name}</h2>
                        <h3>{project.subtitle}</h3>
                        <div className="work-content">
                            {project.desc}
                        </div>
                        <div className="d-grid">
                            
                            <a href={project.github}>
                            <div className="d-grid">
                                <Button variant="git-button">
                                    Visit this project on Github
                                </Button>
                            </div>
                            </a>
                        
                            
                        </div>
                        </Col>
                    </Row>  
                ))}

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
                                Visit this project on Github
                            </Button>
                        </div>
                    </Col>  
                </Row>
            </Container>
        </section>
    );
}

export default Work