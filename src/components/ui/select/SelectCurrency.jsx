import React, { useState } from 'react';
import Select from 'react-select';
import eth from '../../../assets/images/ETH.png';
import sol from '../../../assets/images/SOL.png';
import btc from '../../../assets/images/BTC.png';
import jpy from '../../../assets/images/JPY.png';
import { IconOption, IconValue } from './IconOption';
const customStyles = {
  control: base => ({
    ...base,
    height: 60,
    minHeight: 60,
    minWidth: 150,
    width: 150,
  }),
};
const options = [
  {
    label: 'Crypto',
    options: [
      { value: '$0.00', label: 'ETH', img: eth },
      { value: '$0.00', label: 'SOL', img: sol },
      { value: '$0.00', label: 'BTC', img: btc },
    ],
  },
  {
    label: 'Banking',
    options: [
      { value: '¥0.00', label: 'JPY', img: jpy },
      { value: '$0.00', label: 'SOL', img: sol },
      { value: '$0.00', label: 'BTC', img: btc },
    ],
  },
];

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="App">
      <Select
        autoFocus={'none'}
        styles={customStyles}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder={'$0.00'}
        components={{
          Option: IconOption,
          SingleValue: IconValue,
        }}
      />
    </div>
  );
}
