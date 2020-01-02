import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { bounceInRight } from "react-animations";
import PropTypes from "prop-types";

const HamburgerOuter = styled.div`
  outline: none;
  padding: 0;
  position: fixed;
  right: 30px;
  top: 50px;
  animation: ${keyframes`${bounceInRight}`} 1s;
  z-index: 999;
  @media (max-width: 580px) {
    display: none;
  }
`;

const HamburgerInner = styled.div`
  && {
    background-color: white; /* applied */
  }
  &&:before {
    background-color: white;
  }
  &&:after {
    background-color: white;
  }
`;  

const Hamburger = props => {
  useEffect(() => {
    const handleScroll = () => {
      var a = document
        .querySelector(".hamburger-inner")
        .getBoundingClientRect();
      var b = document.querySelector("#blogs").getBoundingClientRect();

      if (b.top <= a.top + a.height && b.top + b.height > a.top) {
        document.querySelector(".hamburger-inner").classList.add("greenMile");
        document
          .querySelector("#dynamicText")
          .style.setProperty("color", "black");
        document.querySelector("#logolink").style.setProperty("color", "black");
      } else {
        document
          .querySelector(".hamburger-inner")
          .classList.remove("greenMile");
        document
          .querySelector("#dynamicText")
          .style.setProperty("color", "white");
        document.querySelector("#logolink").style.setProperty("color", "white");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <HamburgerOuter
      id="Hamburg"
      className={`hamburger hamburger--collapse ${
        props.active ? "is-active" : ""
      }`}
      onClick={props.onClick}
    >
      <div className="hamburger-box">
        <HamburgerInner id="likimama" className="hamburger-inner" />
      </div>
    </HamburgerOuter>
  );
};

Hamburger.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Hamburger;
