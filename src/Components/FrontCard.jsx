import React from 'react';
import { FrontCardStyle } from './styles/FrontCard.style';
const FrontCard = ({ Number, Name, month, year }) => {


  return (
    <FrontCardStyle>
      <div className='circle'>


      </div>
      <div className='tiny'>

      </div>
      <div className='number'> <span className='four'>{Number.substring(0,4)}</span>
        <span  className='four'>{Number.substring(4,8)}</span>
        <span  className='four'> {Number.substring(8,12)}</span><span  className='four'> {Number.substring(12,16)}</span></div>
      <div className='flex'>
        <small className='name'>
          {Name.substring(0,20) }
        </small>

        <small className='month'>

          {month ==='' ? '00' : month} / {year === '' ? '00': year}
        </small>

      </div>

    </FrontCardStyle>
  );
};

export default FrontCard;
