import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Content from './Content';
import HeroImage from '../assets/HeroImage.png';

const Hero = () => {
  return (
    <Wrapper>
      <Menu />
      <Content />
      <div className='imageContainer'>
        <img src={HeroImage} alt='Hero Image' className='heroImage' />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  max-height: 100vh;

  .imageContainer {
    width: 60%;
    height: auto;
    text-align: center;
    margin: auto;
  }
  .heroImage {
    width: 100%;
    height: auto;
  }
`;

export default Hero;
