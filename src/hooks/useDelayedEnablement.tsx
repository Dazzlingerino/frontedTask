import { useEffect, useState } from 'react';

const useDelayedEnablement = (delay: number, openState: boolean): boolean => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Only reset the timer if the openState is true.
    if (openState) {
      setIsEnabled(false);
      const timer = setTimeout(() => {
        setIsEnabled(true);
      }, delay);

      return () => clearTimeout(timer);
    }

    // If the openState is false, we disable the button again.
    setIsEnabled(false);
  }, [delay, openState]);

  return isEnabled;
};

export default useDelayedEnablement;
