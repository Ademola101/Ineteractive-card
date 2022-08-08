import React from 'react';
import { BackcardStyle } from './styles/backcard.style';
import InnerCard from './InnerCard';

const Backcard = ({ cvv }) => {
  return (
    <BackcardStyle>
      <InnerCard cvv={cvv}/>
    </BackcardStyle>
  );
};

export default Backcard;
