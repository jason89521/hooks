import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

import { useDebounced } from 'src';

const Demo = () => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounced(value);

  useEffect(() => {
    console.log(debouncedValue);
  }, [debouncedValue]);

  const onChange = e => {
    setValue(e.target.value);
  };

  return <input type="text" onChange={onChange} value={value} />;
};

render(<Demo />, document.querySelector('#demo'));
