import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Container,
  Row,
  Col
} from 'react-bootstrap'
import './App.css';

// import componenets 
import Header from "./components/Header"
import Nav from "./components/Nav"
import Footer from "./components/Footer"

// import pages
import About from "./pages/About"
import Resume from "./pages/Resume"
function App() {
  return (
    <Container>
      <Row>
        <Col lg={2} xs={1}></Col>
          <Col lg={8} xs={10}>
            <main className="home-container">

              <Header></Header> 
            </main>
          </Col>
        <Col lg={2} xs={1}></Col>
      </Row>
    </Container>
  );
}

export default App;
