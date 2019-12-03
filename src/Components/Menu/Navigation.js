import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

const Wrapper = styled.ul`
  height: 100vh;
  width: 250px;
  background-color: #111;
  box-sizing: border-box;
  padding: 100px 0 0 0;
  position: fixed;
  right: ${props => (props.active ? '0' : '-250px')};
  top: 0;
  margin: 0;
  list-style: none;
  color: #fff;
  transition: 0.5s;
`;

const Tab = styled.span`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration:none;
  transition: 0.2s;
  &:hover {
    background-color: #6978dd;
  }
  i {
    padding: 0 35px 0 15px;
  }
`;

const TabItem = props => (
  <Link  to={props.to} spy={true} smooth={true}>
    <Tab>
      {props.text} <i className={`fa fa-${props.icon}`} />
    </Tab>
  </Link>
);

TabItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const Navigation = props => (
  <Wrapper active={props.active}>
    <TabItem to="home" text="Home" icon="home" />
    <TabItem to="about" text="About" icon="address-card" />
    <TabItem to="skillset" text="Skills Set" icon="superpowers" />
    <TabItem to="projects" text="Projects" icon="folder" />
    <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1XwQY9m0Dlz9xJOrS2fVzlSOpFRDrwmn6/view" ><Tab style={{color:'white'}}>Resume<i className="fa fa-file"></i></Tab></a>
    
    <a target="_blank" rel="noopener noreferrer" href="https://raj-c-k.web.app/blog" ><Tab style={{color:'white', textDecoration:'none'}}>Blog<i className="fa fa-file-code-o"></i></Tab></a>

    {/* <TabItem to="contact" text="Contact" icon="phone" /> */}
  </Wrapper>
);

Navigation.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Navigation;
