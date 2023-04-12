import React, { useState, useEffect }  from "react";
import createEngine, { 
  DefaultLinkModel, 
  DefaultNodeModel,
  DiagramModel 
} from '@projectstorm/react-diagrams';

import {
  CanvasWidget
} from '@projectstorm/react-canvas-core';

// create an instance of the engine with all the defaults
const engine = createEngine();

// node 1
const node1 = new DefaultNodeModel({
  name: 'Node 1',
  color: 'rgb(0,192,255)',
});
node1.setPosition(100, 100);
let port1 = node1.addOutPort('Out');

// node 2
const node2 = new DefaultNodeModel({
  name: 'Node 1',
  color: 'rgb(0,192,255)',
});
node2.setPosition(100, 100);
let port2 = node2.addOutPort('Out');

// link them and add a label to the link
const link = port1.link<DefaultLinkModel>(port2);
link.addLabel('Hello World!');

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