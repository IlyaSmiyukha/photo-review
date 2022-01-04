import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';

import AddButton from 'components/AddButton';
import Image from 'components/Image';

import { getApprovedImages } from 'store/collection/selectors'

import { getImage } from 'store/collection/actions';

const Title = styled.h2`
  font-size: 1.3rem;
  color: #4655D2;
`;

const CollectionWrap = styled.div`
  margin-bottom: 2.5rem;
`

const BtnWrap = styled.div`
  height: 8rem;
  width: 190px;
`

const Collection = () => {
  const dispatch = useDispatch()

  const approvedImages = useSelector(state => getApprovedImages(state))
  const isCollectionEmpty = !approvedImages.length

  const onAddBtnClick = () => {
    dispatch(getImage())
  }

  return <CollectionWrap>
      <Title>Approved images ({approvedImages.length})</Title>
      <ScrollingCarousel className="slider">
        {
            isCollectionEmpty ? <BtnWrap>
              <AddButton onClick={onAddBtnClick}/>
            </BtnWrap>
            : approvedImages.map((image, i) => <Image  key={`img-${i}`} src={image.urls.thumb} alt={image.description} />)
        }
      </ScrollingCarousel>

    </CollectionWrap>
}

export default Collection;
