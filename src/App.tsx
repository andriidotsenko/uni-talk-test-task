import { FC } from "react";
import useContinuousCounter from "./hooks/useContinuousCounter";
import "./App.css";

const App: FC = () => {
  const { count, startIncrement, startDecrement, stopCounter } =
    useContinuousCounter(0);

  return (
    <div className="root" style={{ userSelect: "none" }}>
      <div className="count">Count: {count}</div>
      <div className="increment">
        <button
          onMouseDown={startIncrement}
          onMouseUp={stopCounter}
          onMouseLeave={stopCounter}
        >
          Increment
        </button>
      </div>
      <div className="decrement">
        <button
          onMouseDown={startDecrement}
          onMouseUp={stopCounter}
          onMouseLeave={stopCounter}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
