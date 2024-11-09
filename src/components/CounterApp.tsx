import { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      <div className="card ">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs bg-orange-800">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default CounterApp;
