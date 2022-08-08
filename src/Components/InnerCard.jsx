import React from 'react';
import { InnerCardStyle } from './styles/Innercard.style';

export default function InnerCard({ cvv }) {

  return (
    <InnerCardStyle>

      <div className='black'>
        <div className='cvv'>

          <div className='cvvnumber'>
            {cvv}
          </div>

        </div>

      </div>

    </InnerCardStyle>
  );
}
