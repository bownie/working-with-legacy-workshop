import React, { useEffect, useState } from "react";
import "./App.css";

const Bookings = () => {

  const [data, setData] = useState([])

  useEffect(() => {  
    fetch('/marina', {
      headers: {
        'Accept': 'application/json'
      } })
    .then( response => {
      if ( !response.ok ) {
        throw new Error( 'Network response was not ok.' );
      } else {
        const contentType = response.headers.get('content-type');
        if (!contentType ) {
          throw new TypeError("No content-type in header.");
        } else if ( contentType.includes('application/json') ) {
          console.log("application/json");
          return response.json();
        } else if ( contentType.includes('text/html') ) {
          console.log("text/html");
          return response.text();
        } else {
          throw new TypeError("Invalid content-type.");
        }
      }
    }
    )
    .then((res) => res.json())
    .then((data) => console.log(data))
    .then((data) => setData(data))
  }, [data] )

  return (
    <div className="App-header">
      <h1>Bookings</h1>
      <p>{data}</p>
    </div>
    );
}


export default Bookings;