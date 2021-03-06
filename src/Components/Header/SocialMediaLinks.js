import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounceInLeft } from 'react-animations';

const Wrapper = styled.div`
  position: absolute;
  left: 15px;
  bottom: 41px;
  z-index: 999;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-flex-flow: column wrap;
  flex-flow: column wrap;
  -webkit-align-content: stretch;
  align-content: stretch;
  animation: ${keyframes`${bounceInLeft}`} 1s;
  bottom: 41px;

`;

const Link = styled.a`
  text-decoration: none;
  color: #fff;
  height: 60px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.6rem;
  text-align: center;
  transition: 0.2s;
  &:hover {
    transform: scale(1.3);
  }
  @media (max-width: 876px) {
    font-size: 1.3rem;
    height: 50px;
    width: 50px;
  }
  @media (max-width: 580px) {
    display: none;
  }
`;

const SocialMediaLinks = () => (
  <Wrapper>
    {/* <Link
      href="https://twitter.com/ahmedtarek_32"
      target="_blank"
      className="fa fa-twitter"
    /> */}
    <Link
      href="https://www.instagram.com/pro_coder/"
      target="_blank"
      className="fa fa-instagram fa-2x"
    />
    {/* <Link
      href="https://snapchat.com/add/ahmedtarek2134"
      target="_blank"
      className="fa fa-snapchat-ghost"
    /> */}
    <Link
      href="https://www.linkedin.com/in/rajiv-khushiram/"
      target="_blank"
      className="fa fa-linkedin fa-2x"
    />
    <Link
      href="https://github.com/Rajiv-Khushiram"
      target="_blank"
      className="fa fa-github fa-2x"
    />
  </Wrapper>
);

export default SocialMediaLinks;
