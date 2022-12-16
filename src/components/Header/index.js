import React from "react";
import {
  Image,
  Container,
  Row,
  Col
} from 'react-bootstrap'
import "./index.css";


function Header() {
    return (
      <section>
        <Container>
          <Row>

            <Col>
              <div className="d-flex justify-content-center">
              <a href="https://cultstatue.github.io/portfolio-2.0/#/">
                  <Image
                    src={require(`../../assets/heart-on-fire_2764-fe0f-200d-1f525.png`)}
                    fluid
                    className="header-img"
                  ></Image>
                </a>
              </div>
            </Col>

            <Col xl={8} className="header-container">
              <a href="https://cultstatue.github.io/portfolio-2.0/#/">
                <h1>Madeleine Doutt</h1>
              </a>

              <div className="header-subheading">
                full stack web development
              </div>
              <div classname="icons-container">
                <a href="https://github.com/cultstatue"><Image
                src={require('../../assets/icons/icons8-github-30.png')}
                ></Image></a>
                <a href="https://www.linkedin.com/in/madeleine-doutt-b49bb2239/"><Image
                src={require('../../assets/icons/icons8-linkedin-circled-30.png')}></Image></a>
                <a href="https://twitter.com/cultstatue"><Image
                src={require('../../assets/icons/icons8-twitter-30.png')}></Image></a>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
}

export default Header