import React from "react"
import {  Link } from "react-router-dom";
import "./App.css";
import getToken from "./useToken";

// Navbar example:
// https://github.com/Atanda1/react-navbar
//

function Nav() {

  const userName = getToken() ? getToken().token : "undefined";

  return (
    <div className="NavBar">
        <table>
        <tbody>
            <tr>
                <th>Logged In as "{userName}"</th>
                <th><Link to="/">Home</Link></th>
                <th><Link to="/boats">Boats</Link></th>
                <th><Link to="/bookings">Bookings</Link></th>
                <th><Link to="/customers">Customers</Link></th>
                <th><Link to="/admin">Admin</Link></th>
                <th><Link to="/logout">Logout</Link></th>
            </tr>
            </tbody>
        </table> 
    </div>
  );
}


export default Nav;