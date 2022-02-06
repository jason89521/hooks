import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

import { useDebounced, useIntersection } from '../../src';

const Demo = () => {
  const [isIntersecting, lastRef] = useIntersection();
  console.log(isIntersecting);
  return (
    <div style={{ display: 'flex', minHeight: '100rem', flexDirection: 'column' }}>
      <div
        ref={lastRef}
      >
        {isIntersecting ? 'intersecting' : 'no intersecting'}
      </div>
    </div>
  );
};

render(<Demo />, document.querySelector('#demo'));
