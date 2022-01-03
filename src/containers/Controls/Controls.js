import React, {
  Fragment
} from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import NoCurrentImage from 'components/NoCurrentImage'
import ControlBtn from 'components/ControlBtn'

import { getCurrentImage } from 'store/collection/selectors';
import {
  approveImage,
  rejectImage,
  getImage
} from 'store/collection/actions';

const ControlsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
`
const Controls = () => {
  const dispatch = useDispatch();

  const currentImage = useSelector(state => getCurrentImage(state));

  const onApproveClick = () => {
    dispatch(approveImage(currentImage))
    dispatch(getImage())
  }

  const onRejectClick = () => {
    dispatch(rejectImage(currentImage))
    dispatch(getImage())
  }

  return <ControlsWrap>
      {
        !currentImage ?
        <NoCurrentImage />
        : <Fragment>
          <ControlBtn type='reject' onClick={onRejectClick}>  <FontAwesomeIcon icon={faTimes} /> </ControlBtn>
          <ControlBtn type='approve' onClick={onApproveClick}> <FontAwesomeIcon icon={faCheck} /> </ControlBtn>
        </Fragment>
      }
    </ControlsWrap>
}

export default Controls;
