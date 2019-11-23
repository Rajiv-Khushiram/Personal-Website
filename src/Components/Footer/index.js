import React from 'react';
import styled from 'styled-components';
import background from '../../Assets/background.jpg';

const Wrapper = styled.div`
  min-height: 200px;
  background: url(${props => props.background}) center center no-repeat fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CopyRightText = styled.p`
  color: #fff;
  font-size: 1rem;
  text-align: center;
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Link = styled.a`
  text-decoration: none;
  color: #fff;
  transition: 0.2s;
  margin: 0 15px;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 580px) {
    font-size: 2rem;
  }
`;

const Footer = (props) => (
  <Wrapper background={props.background} >
    <div>
      <LinksWrapper>
        <Link href="https://www.instagram.com/rajivck/" className="fa fa-instagram fa-3x" />
        <Link href="https://www.linkedin.com/in/rajiv-khushiram/" className="fa  fa-linkedin fa-3x" />
        <Link href="https://github.com/Rajiv-Khushiram" className="fa fa-github fa-3x" />
        <Link href="https://drive.google.com/open?id=1u9sxWP8irGfc_1v7FVGojRtLZ6WCWMJr" className="fa fa-file fa-3x" />
      </LinksWrapper>
    </div>
  </Wrapper>
);

export default Footer;
