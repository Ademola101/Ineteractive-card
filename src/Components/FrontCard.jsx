import React from 'react';
import { FrontCardStyle } from './styles/FrontCard.style';
const FrontCard = ({ Number }) => {


  return (
    <FrontCardStyle>
      <div className='number'> <span className='four'>{Number.substring(0,4)}</span>
        <span  className='four'>{Number.substring(4,8)}</span>
        <span  className='four'> {Number.substring(8,12)}</span><span  className='four'> {Number.substring(12,16)}</span></div>
    </FrontCardStyle>
  );
};

export default FrontCard;
