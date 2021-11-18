import { useRef, useCallback } from 'react';

const DEFAULT_DELAY = 650;

// eslint-disable-next-line @typescript-eslint/ban-types
type ThrottleType = (callback: Function, delay?: number) => void;

const useThrottle: () => ThrottleType = () => {
  const timerRefId = useRef<ReturnType<typeof setTimeout> | undefined>();

  const throttle = useCallback<ThrottleType>(
    (callback, delay = DEFAULT_DELAY) => {
      // If setTimeout is already scheduled, clearTimeout
      if (timerRefId.current) {
        clearTimeout(timerRefId.current);
      }

      // Schedule the exec after a delay
      timerRefId.current = setTimeout(function () {
        timerRefId.current = undefined;
        return callback();
      }, delay);
    },
    []
  );

  return throttle;
};

export default useThrottle;
