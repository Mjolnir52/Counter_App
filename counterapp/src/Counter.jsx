import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md text-center w-full max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Simple Counter</h2>
      <p className="text-4xl font-semibold text-blue-600 mb-6">{count}</p>

      <div className="flex justify-center gap-4">
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          - Decrement
        </button>
        <button
          onClick={reset}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
        >
          Reset
        </button>
        <button
          onClick={increment}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          + Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
