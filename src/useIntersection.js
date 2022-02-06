import { useCallback, useRef, useState } from 'react';

/**
 * @returns {[boolean, (element: HTMLElement) => void]}
 */
const useIntersection = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useRef(
    new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) setIsIntersecting(true);
      else setIsIntersecting(false);
    })
  );

  const callbackRef = useCallback(element => {
    observer.current.disconnect();
    if (element) observer.current.observe(element);
  }, []);

  return [isIntersecting, callbackRef];
};

export default useIntersection;
