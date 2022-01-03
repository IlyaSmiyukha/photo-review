import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 150px;
  height: 40px;
  overflow: hidden;
  border-radius: 20px;
  background: #f1f1f1;
  border: none;
  color: #fff;
  cursor: pointer;
  background: ${props => props.type === 'approve' ? '#4655D2' : '#262626'};
  margin: 0 10px;
  font-size: 1.2rem;
  &:hover {
    background: ${props => props.type === 'approve' ? '#2c3dcf' : '#414141'};
  }
`;

const ControlBtn = props => {
  return <Button onClick={props.onClick} type={props.type} data-testid={`controlBtn${props.type}`}> {props.children} </Button>
}

export default ControlBtn;
