import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import blogDetail from '../Blog/blogDetail';

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

const TimeToRead = styled.div`
  padding:15px;

`
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
  display: flex;
  align-items: center;
`;
const Datela = styled.p`
  line-height: 1.6;
  display: flex;
  align-items: right;
  top: 0px;
  font-style: italic;
  color:grey;
`;

const ButtonWrapper = styled.div`
padding-top:20px;
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
    <Datela>{props.createdAt}</Datela>
    <Title  style={{float:"center"}}>{props.title}</Title>
    <Description>{props.summary}</Description>
    <TimeToRead><strong>{ " " }{props.timeToRead}</strong> {'  '}mins...  <i className="fa fa-hourglass"/> </TimeToRead>
    <ButtonWrapper>
      {props.title && (<Button href={"/blog/"+ props.title}>
        Read 
      </Button>)}

      {props.title && (<Button2 href={"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fraj-c-k.web.app%2Fblog%2F"+props.title+"&amp;src=sdkpreparse"  }   target={props.title}>
      <i className="fa fa-facebook-f"></i> Share
      </Button2>)
      }
    </ButtonWrapper>
  </Wrapper>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default Card;
