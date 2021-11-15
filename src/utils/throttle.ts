let timerId: ReturnType<typeof setTimeout> | undefined;
const DEFAULT_DELAY = 600;

// eslint-disable-next-line @typescript-eslint/ban-types
export function throttle(callback: Function, delay = DEFAULT_DELAY): void {
  // If setTimeout is already scheduled, clearTimeout
  if (timerId) {
    clearTimeout(timerId);
  }

  // Schedule a setTimeout after delay seconds
  timerId = setTimeout(function () {
    timerId = undefined;
    return callback();
  }, delay);
}
