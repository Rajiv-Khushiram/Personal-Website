import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.h1`
  font-size: 3rem;
  padding: 15px 30px 15px 5px;
  display: inline-block;
  border-bottom: 3px solid #673ab7;
  i {
    padding-left: 10px;
    color: #${props => props.color};
  }
  @media (max-width: 868px) {
    font-size: 2rem;
  }
`;

const Title = props => (
  <Wrapper color={props.color}>
    {props.text} <i className={`fa fa-${props.icon}`} />
  </Wrapper>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Title;
