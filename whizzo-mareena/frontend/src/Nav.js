import React, { useEffect, useState } from "react"
import {  Link } from "react-router-dom";
import "./App.css";

// Navbar example:
// https://github.com/Atanda1/react-navbar
//

function Nav() {

  return (
    <div>
                    <Link to="/">Home</Link>
                    <Link to="/boats">Boats</Link>  
                    <Link to="/users">Users</Link>  
                    <Link to="/bookings">Bookings</Link>  

    </div>
  );
}


export default Nav;