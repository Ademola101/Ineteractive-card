import React from 'react';
import { SubmitStyle } from './styles/Submit.style';

export default function Submit() {
  return (
    <SubmitStyle>
      <div className='logo'>
        <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40"
          cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff"
          strokeWidth="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507"
          gradientUnits="userSpaceOnUse"><stop stopColor="#6348FE"/><stop offset="1" stopColor="#610595"/>
        </linearGradient></defs></svg>
      </div>
      <p>

          THANK YOU
      </p>

      <div>
          We have added you card details
      </div>

    </SubmitStyle>
  );
}
