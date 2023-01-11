import React from 'react';
import styled from 'styled-components';

const Button = ({ content }) => {
  return <Btn>{content}</Btn>;
};

const Btn = styled.button`
  background-color: #000;
  color: #fff;
  padding: 7px 12px;
  border-radius: 25px;
`;

export default Button;
