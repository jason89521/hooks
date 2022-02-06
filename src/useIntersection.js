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

  const lastRef = useCallback(element => {
    observer.current.disconnect();
    if (element) observer.current.observe(element);
  }, []);

  return [isIntersecting, lastRef];
};

export default useIntersection;
