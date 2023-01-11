import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import BtnWhite from './BtnWhite';

const Content = () => {
  return (
    <Wrapper>
      <div>
        <p className='paragraph'>
          Smart email campaign builer, made for Developers
        </p>
      </div>

      <div>
        <h1 className='header'>
          Turn your visitors into profitable{' '}
          <span className='bg-color'>business</span>
        </h1>
      </div>

      <div className='button-wrapper'>
        <Button content='Get more cutomers' />
        <BtnWhite />
      </div>

      <div>
        <p className='paragraph color'>
          60 Days free trail <span className='space'>.</span> No credit card
          required
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 627px;
  height: 324px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 30px;

  .paragraph {
    color: #71717a;
    font-size: 18px;
  }
  .header {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 52px;
    position: relative;
    z-index: 40;
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
    margin-bottom: 20px;
  }
  .space {
    margin: 0 14px;
  }
  .color {
    font-size: 16px;
    line-height: 26px;
  }
  .bg-color {
    position: relative;
    z-index: 20;
  }
  .bg-color::after {
    z-index: -10;
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 25%;
    filter: blur(25px);
    background: linear-gradient(
      90deg,
      #44bcff -0.55%,
      #44b0ff 22.86%,
      #ff44ec 48.36%,
      #ff44ec 73.33%,
      #ff675e 99.34%
    );
  }
`;

export default Content;
