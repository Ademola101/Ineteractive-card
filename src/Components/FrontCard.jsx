import React, { useState } from 'react';
import { FrontCardStyle } from './styles/FrontCard.style';
const FrontCard = () => {

  const [Number] = useState('000000000000');
  return (
    <FrontCardStyle>
      <div className='number'> <span className='four'> 0000</span><span  className='four'> 0000</span>
        <span  className='four'> {Number.substring(0,4)}</span><span  className='four'> 0000</span></div>
    </FrontCardStyle>
  );
};

export default FrontCard;
