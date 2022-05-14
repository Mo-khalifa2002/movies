import React from "react";
import Container from "@mui/material/Container";
import Spiderman from "../../imagess/1-2-spider-man-download-png.png";
import "./GlassCss.css";

const Glass = () => {
  return (
    <div className="thePage">
        <div className="circle"></div>
        <div className="circle1"></div>
      <Container className="container">
        <div className="navbar">
          <div className="logo">Movie</div>
          <ul className="rightNav">
            <li>Movie 1</li>
            <li>Movie 2</li>
            <li>Movie 3</li>
            <li>Movie 4</li>
          </ul>
        </div>
        <div className="bodyContent">
          <div className="text">
            <h1 className="mainTitle">
              Glassmorphism <br />
              <span> Movies Application</span>
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur sapiente autem quia, corrupti ab aperiam.
            </p>
          </div>
          <div className="image">
            <img className="spider" src={Spiderman} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Glass;
