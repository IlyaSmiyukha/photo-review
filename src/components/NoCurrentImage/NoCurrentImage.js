import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


const NoImage = styled.div`
 text-align: center;
 max-width: 300px;
 margin: 0 auto;
 color: #444;
`;

const Icon = styled.span`
  color: #ccc;
 margin: 0 3px;
`;

const NoCurrentImage = props => {
  return <NoImage>
    Click on the
    <Icon><FontAwesomeIcon icon={faPlus} /></Icon>
    in order to get image recomendations
  </NoImage>
}

export default NoCurrentImage;
