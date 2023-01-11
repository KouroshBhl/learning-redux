import React from 'react';
import styled from 'styled-components';
import { BsPlay } from 'react-icons/bs';

const BtnWhite = () => {
  return (
    <Wrapper href='#'>
      <BsPlay />
      <span>Watch free demo</span>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  display: flex;
  gap: 10px;
  border: 2px solid #a1a1aa;
  padding: 12px 25px;
  border-radius: 12px;
  font-size: 18px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  line-height: 24px;
`;

export default BtnWhite;
