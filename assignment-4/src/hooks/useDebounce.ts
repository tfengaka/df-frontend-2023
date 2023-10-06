'use client';

import { useEffect, useState } from 'react';

function useDebounce(value: string, delay: number) {
  const [debounceValue, setDebounceValue] = useState<string>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [delay, value]);

  return debounceValue;
}

export default useDebounce;
