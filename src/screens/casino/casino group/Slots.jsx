import React from 'react';
import CasinoGroupLayout from '../../../components/casino/casino group/CasinoGroupLayout';
import slots from '../../../assets/images/slots.png';
import game from '../../../assets/images/cardslider7.jfif';

const Slots = () => {
  return (
    <>
      <CasinoGroupLayout
        heading={'Slots'}
        headerImg={slots}
        game={game}
      />
    </>
  );
};

export default Slots;
