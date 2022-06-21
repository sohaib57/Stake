import React from 'react';
import CasinoGroupLayout from '../../../components/casino/casino group/CasinoGroupLayout';
import livecasino from '../../../assets/images/livecasino.png';
import game from '../../../assets/images/cardslider4.jfif';

const LiveCasinoScreen = () => {
  return (
    <>
      <CasinoGroupLayout
        heading={'Live Casino'}
        headerImg={livecasino}
        game={game}
      />
    </>
  );
};

export default LiveCasinoScreen;