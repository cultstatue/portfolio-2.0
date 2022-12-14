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

        },
        {
            name: "Tech Blog",
            img: "techblog.png",
            subtitle: "mySQL, Node.js, Express, Bootstrap",
            desc: "lorem ipsumgdfdgdf gfdsgfds ",
            github: "https://github.com/cultstatue/tech-blog"

        },
        {
            name: "Book Search Engine",
            img: "booksearch.png",
            subtitle: "MERN stack, Bootstrap",
            desc: "lorem ipsumgdfdgdf gfdsgfds ",
            github: "https://github.com/cultstatue/book-search-engine"

        },
        {
            name: "README Generator",
            img: "readmegen.png",
            subtitle: "Node.js, Inquirer",
            desc: "lorem ipsumgdfdgdf gfdsgfds ",
            github: "https://github.com/cultstatue/ReadMe-Generator"

        }
    ]

    return (
        <section>
            <Container>
                {work.map((project) => (
                    <Row className="work-element">
                        <Col xxl={6} xsm={12}>
                            <Image
                            src={require(`../../assets/screenshots/${project.img}`)}
                            fluid
                            className="work-img"
                            alt={project.name}
                            key={project.name}
                            ></Image>
                        </Col>

                        <Col xxl={6} xsm={12}>
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
            </Container>
        </section>
    );
}

export default Work