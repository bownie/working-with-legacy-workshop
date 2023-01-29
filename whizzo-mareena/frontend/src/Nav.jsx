import React from "react"
import {  Link } from "react-router-dom";
import "./App.css";

// Navbar example:
// https://github.com/Atanda1/react-navbar
//

function Nav() {

  return (
    <div className="NavBar">
        <table>
        <tbody>
            <tr>
                <th><Link to="/">Home</Link></th>
                <th><Link to="/boats">Boats</Link></th>
                <th><Link to="/bookings">Bookings</Link></th>
                <th><Link to="/customers">Customers</Link></th>
                <th><Link to="/admin">Admin</Link></th>
                <th>Logout</th>
            </tr>
            </tbody>
        </table> 
    </div>
  );
}


export default Nav;