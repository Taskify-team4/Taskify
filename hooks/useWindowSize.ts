import { useEffect, useState } from 'react';

type windowSizeType = {
  windowWidth: number;
  windowHeight: number | undefined;
};
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<windowSizeType>({
    windowWidth: 1920,
    windowHeight: undefined,
  });

  useEffect(() => {
    const resizeHandler = () => {
      setTimeout(() => {
        setWindowSize({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
      }, 500);
    };

    resizeHandler();

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);
  return windowSize;
};

export default useWindowSize;
