import React from "react";
import {
  Container,
  Row,
  Col
} from 'react-bootstrap'
import './App.css';


import Header from "./pages/Header"
import About from "./pages/About"
function App() {
  return (
    <Container>
      <Row>
        <Col lg={2} xs={1}></Col>
          <Col lg={8} xs={10}>
            <div className="home-container">

              <Header></Header> 
              <About></About>
            </div>
          </Col>
        <Col lg={2} xs={1}></Col>
      </Row>
    </Container>
  );
}

export default App;
