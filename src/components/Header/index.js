import React from "react";
import {
    Image
} from 'react-bootstrap'
import "./index.css";

function Header() {
    return (
      <section>
        <div className="header-container">



          <a href="/">
            <h1>Madeleine Doutt</h1>
          </a>

          <div className="header-subheading">
            fullstack web development
          </div>

        </div>
      </section>
    );
}

export default Header