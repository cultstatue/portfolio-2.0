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
              <a href="/">
                  <Image
                    src={require(`../../assets/test-header.png`)}
                    fluid
                    className="header-img"
                  ></Image>
                </a>
              </div>
            </Col>

            <Col xl={8} className="header-container">
              <a href="/">
                <h1>Madeleine Doutt</h1>
              </a>

              <div className="header-subheading">
                fullstack web development
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
}

export default Header