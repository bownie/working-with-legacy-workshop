import React, { useEffect, useState } from "react";
import "./App.css";


const marina_logo = require('./marina.jpg')


const Home = () => {

  const [message, setMessage] = useState();
  useEffect(() => {
    fetch("/api/")
      .then(res => res.json())
      .then(res => setMessage(res.message))
      .catch(console.error);
  }, [setMessage]);

  return (
    <div>
      <p>hello</p>
      <header className="App-header">
        <h3>Mareena by Whizzo BV</h3>
        <img src={marina_logo} className="App-logo" alt="logo" />
        <h6>{message || "Loading database version..."}</h6>
        <p>
          Edit <code>src/App.js</code> and save to reload. Updated. And again.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <p>
            Welcome
          </p>
        </div>
      </header>
      <button className="square" onClick={function() { console.log('click'); }}>
        Hello
      </button>


    </div>
    );
}


export default Home;