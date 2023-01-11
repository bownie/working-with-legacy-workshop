import React, { useState, useEffect }  from "react";
/*
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
  
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
}*/


function Clock() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    setDate("HELL!!");
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