import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Logo from './Logo';
import Links from './Links';

const Menu = () => {
  return (
    <Wrapper>
      <div className='left-container'>
        <Logo />
        <Links />
      </div>
      <div className='right-container'>
        <Button />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 1544px;
  max-height: 45px;
  margin: 19px auto;

  .left-container,
  .right-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
`;

export default Menu;
