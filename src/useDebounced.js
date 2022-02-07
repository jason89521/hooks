import { useState, useEffect } from 'react';

/**
 * @template T
 * @param {T} value
 * @param {number} interval
 *
 * @returns {T}
 */
const useDebounced = (value, interval = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const clearId = setTimeout(() => setDebouncedValue(value), interval);
    return () => clearTimeout(clearId);
  }, [value]);

  return debouncedValue;
};

export default useDebounced;
