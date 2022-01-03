import React from 'react';
import styled from 'styled-components';

const ImgWrap = styled.div`
  height: 6rem;
  border-radius: 10;
  padding: 0 5px;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
`;


const Image = props => {
  return <ImgWrap  data-testid={'image'}> <Img src={props.src} alt={props.alt}/> </ImgWrap>
}

export default Image;
