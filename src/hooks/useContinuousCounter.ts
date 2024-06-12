import { useState, useEffect } from "react";

const useContinuousCounter = (initialValue: number = 0) => {
  const [count, setCount] = useState(initialValue);
  const [intervalId, setIntervalId] = useState<ReturnType<
    typeof setInterval
  > | null>(null);

  const startCounter = (increment: boolean) => {
    const updateCounter = () => {
      setCount((prevCount) => prevCount + (increment ? 1 : -1));
    };
    updateCounter(); // Update immediately
    const id = setInterval(updateCounter, 300); // Update every 100ms
    setIntervalId(id);
  };

  const stopCounter = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return {
    count,
    startIncrement: () => startCounter(true),
    startDecrement: () => startCounter(false),
    stopCounter,
  };
};

export default useContinuousCounter;
