import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Boats from "./Boats";
import Bookings from "./Bookings";
import Customers from "./Customers";
import Users from "./Users";
import Admin from "./Admin";
import Login from './Login';
import useToken from './useToken';
import Logout from "./Logout";

import createEngine, { 
  DefaultLinkModel, 
  DefaultNodeModel,
  DiagramModel 
} from '@projectstorm/react-diagrams';

import {
  CanvasWidget
} from '@projectstorm/react-canvas-core';


function App() {

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

  const model = new DiagramModel();
  model.addAll(node1, node2, link);
  engine.setModel(model);

  const { token, setToken } = useToken();

  // https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/boats' element={ <Boats /> }/>
          <Route path='/customers' element={ <Customers /> }/>
          <Route path='/bookings' element={ <Bookings /> }/>
          <Route path='/admin' element={ <Admin /> }/>
          <Route path='/users' element={ <Users /> }/>
          <Route path='/logout' element={ <Logout /> }/>
        </Routes>
      </Router>
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
