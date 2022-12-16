import React from "react";
import { BrowserRouter as Routes, Route, HashRouter } from "react-router-dom";
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
import Work from "./pages/Work"
function App() {
  return (
    <Router>
      <Container>
        <Row>
          <Col lg={2} xs={1}></Col>
            <Col lg={8} xs={10}>
              <main className="home-container">
                <Header/>
                <Nav/>
                <HashRouter>
                  <Routes>
                      <Route path="/" element={<Work />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/resume" element={<Resume />} />
                  </Routes>
                </HashRouter>
                <Footer></Footer>
              </main>
            </Col>
          <Col lg={2} xs={1}></Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
