import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import AddButton from 'components/AddButton';

import { getCurrentImage } from 'store/collection/selectors';

import { getImage } from 'store/collection/actions';

const ImagePreviewWrap = styled.div`
  margin-bottom: 2.5rem;
  height: 60vh;
  background: ${props => props.background ? props.background : '#f1f1f1'};
  transition: background .1s;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const ImagePreview = () => {
  const dispatch = useDispatch()

  const currentImage = useSelector(state => getCurrentImage(state))

  const onAddBtnClick = () => {
    dispatch(getImage())
  }

  return <ImagePreviewWrap background={currentImage ? currentImage.color : null}>
      {
        !currentImage ? <AddButton onClick={onAddBtnClick} /> : <Image src={currentImage.urls.regular} alt={currentImage.description}/>
      }
    </ImagePreviewWrap>
}

export default ImagePreview;
