import React, { useState, useEffect }  from "react";
function Clock() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    setDate("Hi there");
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <h2>It is {date}.</h2>
    </div>
  );
}

export default Clock;