import React from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import Links from './Links';

const MobileMenu = ({ mobile }) => {
  const { setIsMobile, isMobile } = mobile;
  return (
    <Wrapper className={isMobile ? 'hidden' : 'show'}>
      <div className='container'>
        <div className='close-header'>
          <AiOutlineClose className='icon' onClick={() => setIsMobile(false)} />
        </div>
        <div>
          <ul className='link'>
            <li>
              <a href='#'>Feautures</a>
            </li>
            <li>
              <a href='#'>Pricing</a>
            </li>
            <li>
              <a href='#'>Automation</a>
            </li>
          </ul>
        </div>
        <button className='btn'>Sign up</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: #0f172a;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 60;
  display: none;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 25px;
  }

  .hidden {
    display: none;
  }
  .show {
    display: block;
  }
  .close-header {
    width: 100%;
    position: relative;
    height: 90px;
  }
  .icon {
    width: 30px;
    height: 30px;
    color: white;
    right: 0;
    top: 20px;
    cursor: pointer;
    position: absolute;
  }
  .link {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 70px;
  }
  .link li a {
    color: white;
    font-size: 20px;
  }
  .btn {
    background-color: #000;
    color: #fff;
    padding: 12px 25px;
    border-radius: 12px;
    font-size: 18px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 700;
    cursor: pointer;
    line-height: 24px;
    width: 80%;
  }
`;

export default MobileMenu;
