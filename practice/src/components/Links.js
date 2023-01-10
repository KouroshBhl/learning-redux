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
  list-style: none;
  display: flex;
  gap: 35px;

  li a:link,
  li a:visited {
    color: #000;
    text-decoration: none;
  }
  li a:active,
  li a:hover {
    color: #000;
    text-decoration: none;
  }
`;

export default Links;
