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
import MarinaMap from './MarinaMap';
import useToken from './useToken';
import Logout from "./Logout";

function App() {

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
          <Route path='/map' element={ <MarinaMap /> }/>
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
