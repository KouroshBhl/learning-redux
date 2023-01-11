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
        <a href='#'>Customer Login</a>
        <Button content={'Sign up'} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  max-height: 45px;
  margin: 19px 30px 60px 30px;

  .left-container,
  .right-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
`;

export default Menu;
