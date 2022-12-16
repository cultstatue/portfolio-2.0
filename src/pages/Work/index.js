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
            desc: "Social media application where users can share their pets and interact with other users.",
            github: "https://github.com/cultstatue/petyard"

        },
        {
            name: "Bragging Rights",
            img: "bragging-rights.png",
            subtitle: "mySQL, Node.js, Express, Bootstrap",
            desc: "Full stack application where users can share and brag about their achievements in videogames.",
            github: "https://github.com/cultstatue/bragging-rights"

        },
        {
            name: "Ready?",
            img: "ready.png",
            subtitle: "Javascript, server-side APIs, Bulma",
            desc: "A front end website designed to help users plan outings by providing both Ticket Master events and a weather forecast for a specefied USA zip code.",
            github: "https://github.com/cultstatue/ready-"

        },
        {
            name: "Tech Blog",
            img: "techblog.png",
            subtitle: "mySQL, Node.js, Express, Bootstrap",
            desc: "A simple full stack blogging platform where users can sign up, make posts and comment on other user's posts.",
            github: "https://github.com/cultstatue/tech-blog"

        },
        {
            name: "Book Search Engine",
            img: "booksearch.png",
            subtitle: "MERN stack, Bootstrap",
            desc: "An application utilizing Google books search API, where users can sign up, search for books, and save books to their own lists to revisit.",
            github: "https://github.com/cultstatue/book-search-engine"

        },
        {
            name: "README Generator",
            img: "readmegen.png",
            subtitle: "Node.js, Inquirer",
            desc: "A Node.js command line application where users can generate custom READme.mds for their projects.",
            github: "https://github.com/cultstatue/ReadMe-Generator"

        }
    ]

    return (
        <section id ="work">
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