import React from 'react';
import { BackcardStyle } from './styles/backcard.style';
import InnerCard from './InnerCard';

const Backcard = () => {
  return (
    <BackcardStyle>
      <InnerCard/>
    </BackcardStyle>
  );
};

export default Backcard;
