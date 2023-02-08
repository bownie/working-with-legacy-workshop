import React, {useState, useEffect} from "react";
import Table from 'rc-table';

const columns = [
  {
    title: 'Boat Name',
    dataIndex: 'boat_name',
    key: 'name',
    width: 100,
  },
  {
    title: 'Length',
    dataIndex: 'boat_length',
    key: 'length',
    width: 100,
  },
  {
    title: 'Beam',
    dataIndex: 'boat_beam',
    key: 'beam',
    width: 80,
  },
  {
    title: 'Operations',
    dataIndex: '',
    key: 'operations',
    render: () => <a href="/delete_boat">Delete</a>,
  },
];

function Boats(){

  const [data, setData] = useState([])
  
  useEffect(() => {

    async function fetchBoats() {

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
          setData(data.boats, [data.boats])
        })
      }
  fetchBoats()
  }, []) 

  return (
    <div className="App-header">
      <h1>Boats</h1>
      <Table columns={columns} data={data} rowKey='id'/>
    </div>
    );
}


export default Boats;