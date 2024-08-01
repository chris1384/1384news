import { useState, useEffect } from 'react';

function useWindowSize() {

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    mobileView: false, // i need this lol
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        mobileView: window.innerWidth < 500 ? true : false,  // i need this lol
      });
    }

    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;