import { useEffect, useState } from 'react';

const useDelayedEnablement = (delay: number, deps: unknown[]): boolean => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    setIsEnabled(false);
    const timer = setTimeout(() => {
      setIsEnabled(true);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay, ...deps]);

  return isEnabled;
};

export default useDelayedEnablement;
