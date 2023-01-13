import React, { useState, useEffect}  from "react";

function Boats(){

  const [data, setData] = useState({})

  useEffect(() => {
    fetch('/boats')
    .then((response) => console.log(response.data))

//      .then((json) => setData(json))
  }, [data]);

  return (
    <div className="App-header">
      <h1>Boats</h1>
      <p>{data[0]}</p>
    </div>
    );
}


export default Boats;