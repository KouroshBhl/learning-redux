import React from 'react';
import styled from 'styled-components';

const Button = ({ content }) => {
  return (
    <Btn className={`${content === 'Sign up' && 'mobile'}`}>{content}</Btn>
  );
};

const Btn = styled.button`
  background-color: #000;
  color: #fff;
  padding: 12px 25px;
  border-radius: 12px;
  font-size: 18px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  cursor: pointer;
  line-height: 24px;

  @media (max-width: 600px) {
    .mobile {
      display: none;
    }
    width: 69%;
  }
`;

export default Button;
