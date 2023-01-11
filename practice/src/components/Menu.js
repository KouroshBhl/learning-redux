import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import Button from './Button';
import Logo from './Logo';
import Links from './Links';
import MobileMenu from './MobileMenu';

const Menu = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <Wrapper>
      <div className='left-container'>
        <Logo />
        <Links />
      </div>
      <div className='right-container'>
        <a href='#' className='mobile'>
          Customer Login
        </a>
        <Button content={'Sign up'} />
        <FiMenu className='hidden menu-btn' onClick={() => setIsMobile(true)} />
        <MobileMenu mobile={{ isMobile, setIsMobile }} />
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

  @media (max-width: 600px) {
    .mobile {
      display: none;
    }
    .hidden {
      display: block;
    }
    .menu-btn {
      cursor: pointer;
      width: 30px;
      height: 30px;
    }
  }
`;

export default Menu;
