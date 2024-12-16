import React, { useState } from 'react';

function CounterFunctional() {

  const [count, setCount] = useState(0); // Initialize state

  const incrementCount = () => {

    setCount(count + 1); // Increment state

  };

  return (

    <div>

      <h1>Functional Component Counter</h1>

      <p>You've clicked {count} times.</p>

      <button onClick={incrementCount}>Click me</button>

    </div>

  );

}

export default CounterFunctional