import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const width = 100 / 3;

const Wrapper = styled.div`
  width: ${width - 4}%;
  min-width: 300px;
  min-height: 300px;
  border: 1px solid #eee;
  box-sizing: border-box;
  padding: 0 15px;
  transition: 0.2s;
  margin: 20px;
  padding-bottom:20px;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const Title = styled.h1`
  font-family: Pacifico, Helvetica, sans-serif;
  text-align: center;
  font-size: 2.0rem;
  @media (max-width: 580px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  line-height: 1.6;
  height: 90px;
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.a`
  text-decoration: none;
  border: 1px solid #111;
  color: #111;
  padding: 15px 20px;
  transition: 0.2s;
  border-radius: 2px;
  &:hover {
    background-color: #111;
    color: #fff;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const Button2 = styled.a`
  text-decoration: none;
  border: 1px solid #ff4f81;
  color: #ff4f81;
  padding: 15px 20px;
  margin-left: 10px;
  transition: 0.2s;
  border-radius: 2px;
  &:hover {
    background-color:#ff4f81;
    color: #fff;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const Card = props => (
  <Wrapper>
    <Title>{props.title}</Title>
    <Description>{props.description}</Description>
    <ButtonWrapper>
      
      {props.link && (<Button href={props.link} target="_blank">
        Website
      </Button>)}
      {props.githublink && (<Button2 href={props.githublink} target="_blank">
        Github
      </Button2>)}
    </ButtonWrapper>
  </Wrapper>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
