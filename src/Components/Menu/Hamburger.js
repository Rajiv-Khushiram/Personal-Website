import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { bounceInRight } from 'react-animations';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'


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
background-color:white;

  &::before,
  &::after {
  }
`;

const Hamburger = props =>  {

  const [heightofWindow , setHeightOfWindow ] = useState(window.innerHeight);

  useEffect(() => {
    const handlesize = async ()=> {
      var a = document.querySelector('.hamburger-inner').getBoundingClientRect();
      var b = document.querySelector('#blogs').getBoundingClientRect();

      if (b.top <= a.top + a.height && b.top + b.height > a.top) {
        document.querySelector('.hamburger-inner').style.backgroundColor = "black";
        document.querySelector('#dynamicText').style.setProperty("color", "black");
        document.querySelector('#logolink').style.setProperty("color", "black");
      }
      else {
        document.querySelector('.hamburger-inner').style.backgroundColor = "white";
        document.querySelector('#dynamicText').style.setProperty("color", "white");
        document.querySelector('#logolink').style.setProperty("color", "white");


    }
    }


    window.addEventListener('scroll', handlesize)  
    console.log(heightofWindow)
    return () => {
    }
  })

  return (<HamburgerOuter id="Hamburg"
    className={`hamburger hamburger--collapse ${
      props.active ? 'is-active' : ''
    }`}
    onClick={props.onClick}
  >
    <div className="hamburger-box">
      <HamburgerInner className="hamburger-inner" />
    </div>
  </HamburgerOuter>
);
  }

Hamburger.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Hamburger;
