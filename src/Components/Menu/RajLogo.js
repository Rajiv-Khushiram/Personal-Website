import React from 'react';
import styled, { keyframes } from 'styled-components';
import bounceInLeft from 'react-animations/lib/bounce-in-left';
import { Link } from "react-router-dom";


const RajLogo = styled.div`
  outline: none;
  padding: 0;
  position: fixed;
  left: 30px;
  top: 60px;
  animation: ${keyframes`${bounceInLeft}`} 1s;
  z-index: 999;
  @media (max-width: 580px) {
    display: none;
  }
`;

const BlogLogo = styled.div`
  outline: none;
  padding: 0;
  position: fixed;
  left: 120px;
  top: 60px;
  animation: ${keyframes`${bounceInLeft}`} 1s;
  z-index: 999;
  @media (max-width: 580px) {
    display: none;
  }
`;

const LogoText = styled.div`
font-size: 18px;
font-weight: bolder;
`

const Raj = props => (
  <React.Fragment>
    <Link style={{ textDecoration:"none" }} to={"/"}>
    <RajLogo><LogoText><div id="logolink">Rajiv K.</div></LogoText></RajLogo></Link>
        <Link style={{ textDecoration:"none"  }} to={"/blog"}>
        <BlogLogo><LogoText><div id="dynamicText">Blog</div></LogoText></BlogLogo></Link></React.Fragment>
)

export default Raj