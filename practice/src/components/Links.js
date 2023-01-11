import React from 'react';
import styled from 'styled-components';

const Links = () => {
  return (
    <Wrapper>
      <li>
        <a href='#'>Feautures</a>
      </li>
      <li>
        <a href='#'>Pricing</a>
      </li>
      <li>
        <a href='#'>Automation</a>
      </li>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  gap: 35px;
`;

export default Links;
