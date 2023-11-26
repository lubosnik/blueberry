import { RefObject, useEffect, useState } from 'react';

export function useResize<T extends HTMLElement>(myRef: RefObject<T>) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleResize = () => {
    setWidth(myRef?.current?.offsetWidth || 0);
    setHeight(myRef?.current?.offsetHeight || 0);
  };

  useEffect(() => {
    myRef.current && myRef.current.addEventListener('resize', handleResize);

    return () => {
      myRef?.current?.removeEventListener('resize', handleResize);
    };
  }, [myRef]);

  return { width, height };
}
