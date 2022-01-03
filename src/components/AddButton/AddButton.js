import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 6px;
  background: #f1f1f1;
  border: solid 1px #ccc;
  color: #ccc;
  min-height: 130px;
  font-size: 2rem;
  cursor: pointer;
  transition: background .1s, color .1s;

  &:hover {
    background: #4655D2;
    color: #fff;
  }
`;

const AddButton = props => {
  return <Button onClick={props.onClick} data-testid='addBtn'> <FontAwesomeIcon icon={faPlus} /> </Button>
}

export default AddButton;
