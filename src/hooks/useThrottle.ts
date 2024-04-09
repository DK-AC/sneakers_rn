import {useEffect, useState} from 'react';

export const useThrottle = <T>(value: T, delay: number): T => {
  const [throttledValue, setThrottledValue] = useState(value);
  const [lastUpdated, setLastUpdated] = useState(Date.now());

  useEffect(() => {
    const timeSinceLastUpdate = Date.now() - lastUpdated;
    if (timeSinceLastUpdate >= delay) {
      setThrottledValue(value);
      setLastUpdated(Date.now());
    }
  }, [value, delay, lastUpdated]);

  return throttledValue;
};
