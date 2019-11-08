import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';
import { bounceInLeft } from 'react-animations';
import { Link } from 'react-scroll';

const FormWrapper = styled.form`
  animation: ${props => (props.active ? keyframes`${bounceInLeft}` : '')} 1s;
`;

const NameInput = styled.input`
  height: 50px;
  width: 47%;
  padding: 0 2%;
  box-sizing: border-box;
  display: inline-block;
  margin: 50px 3% 0 0;
  border: 1px solid #d0d0d0;
  outline: none;
  border-radius: 3px;
  transition: 0.2s;
  &:focus {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  @media (max-width: 580px) {
    width: 100%;
    display: block;
    margin: 30px auto;
  }
`;

const EmailInput = styled.input`
  height: 50px;
  width: 47%;
  padding: 0 2%;
  box-sizing: border-box;
  display: inline-block;
  margin: 50px 0 0 3%;
  border: 1px solid #d0d0d0;
  outline: none;
  border-radius: 3px;
  transition: 0.2s;
  &:focus {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  @media (max-width: 580px) {
    width: 100%;
    display: block;
    margin: 30px auto 0 auto;
  }
`;

const MessageInput = styled.input`
  width: 100%;
  height: 100px;
  margin-top: 30px;
  box-sizing: border-box;
  padding: 0 2%;
  border: 1px solid #d0d0d0;
  outline: none;
  border-radius: 3px;
  transition: 0.2s;
  &:focus {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  @media (max-width: 580px) {
    flex-wrap: wrap;
  }
`;

const SubmitButton = styled.input`
  color: #111;
  padding: 15px 95px;
  border-radius: 2px;
  border: 1px solid #111;
  transition: 0.2s;
  margin: 15px;
  &:hover {
    color: #fff;
    background-color: #111;
  }
  @media (max-width: 580px) {
    display: block;
  }
`;

const BackToTopButton = styled.span`
  color: #111;
  padding: 15px 70px;
  border-radius: 2px;
  border: 1px solid #111;
  transition: 0.2s;
  text-decoration: none;
  margin: 15px;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #111;
  }
  @media (max-width: 580px) {
    display: block;
  }
`;

const Form = props => (
  <Waypoint onEnter={props.onEnter} onLeave={props.onLeave}>
    <FormWrapper
      action="mailto:ahmedtarek3214@gmail.com"
      method="post"
      encType="text/plain"
      active={props.active}
    >
      <NameInput type="text" name="name" placeholder="Name: " />
      <EmailInput type="text" name="mail" placeholder="Email: " />
      <MessageInput type="text" name="message" placeholder="Message: " />
      <ButtonsWrapper>
        <SubmitButton type="submit" value="Send" />
        <Link to="home" spy={true} smooth={true}>
          <BackToTopButton>Back To Top</BackToTopButton>
        </Link>
      </ButtonsWrapper>
    </FormWrapper>
  </Waypoint>
);

Form.propTypes = {
  active: PropTypes.bool.isRequired,
  onEnter: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
};

export default Form;
