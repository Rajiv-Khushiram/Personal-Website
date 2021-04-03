import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding:20px 15px;
  justify-content: space-between;
  transition: 0.2s;
  @media (max-width: 876px) {
    flex-wrap: wrap;
    padding:0px 0px;
  }
  &:hover { 
  }
`;

export default Wrapper;