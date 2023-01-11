import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import marina_logo from "./marina.jpg";
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import Boats from "./Boats";
import Users from "./Users";
import Bookings from "./Bookings";

function App() {
  const [message, setMessage] = useState();
  useEffect(() => {
    fetch("/api/")
      .then(res => res.json())
      .then(res => setMessage(res.message))
      .catch(console.error);
  }, [setMessage]);
  return (
    <div className="App">
      <Router>
      <Nav />

      <Routes>
        <Route exact path='/' element={Home}/>
        <Route path='/boats' element={Boats}/>
        <Route path='/bookings' element={Bookings}/>
        <Route path='/users' element={Users}/>
      </Routes>
      </Router>
      
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

function Avatar(props) {
  return (
    <img className="Avatar"
         src={props.user.avatarUrl}
         alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date}
      </div>
    </div>
  );
}


const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

export default App;
