import React, { useState, useEffect}  from "react";

async function fetchData(userId) {
  const data = await fetch('/boats')
      .then(promise => {
          return promise.data;
      })
      .catch(e => {
          console.error(e);
      })
      return data;
}



function Boats(){

  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch('/api/boats', { headers: {
      'Content-Type': 'application/json'
    }})
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
      })
      .then(data => {
        console.log(data.boats);
        //setData(data.boats, [data.boats]);
      }, [])
//    .then((response) => response.data)
//    .then((data) => console.log(data))
  }) 

  return (
    <div className="App-header">
      <h1>Boats</h1>

      <div className="stock-container">
        {data.map((data, key) => {
          return (
            <div key={key}>
              {data.id +
                " , " +
                data.boat_name +
                " ," +
                data.stockPrice +
                ", " +
                data.timeElapsed}
            </div>
          );
        })}
      </div>
    </div>
    );
}


export default Boats;