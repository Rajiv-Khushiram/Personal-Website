import React from 'react';
import styled, { keyframes } from 'styled-components';
import bounceInLeft from 'react-animations/lib/bounce-in-left';
import { Link } from "react-router-dom";


const RajLogo = styled.div`
  outline: none;
  padding: 0;
  position: fixed;
  left: 30px;
  top: 30px;
  color:white;
  animation: ${keyframes`${bounceInLeft}`} 1s;
  z-index: 999;
  @media (max-width: 580px) {
    display: none;
  }
`;

const Raj = props => (
    <Link style={{ textDecoration:"none", color: "black" }} to={"/"}>
    <RajLogo>Raj</RajLogo></Link>
)

export default Raj