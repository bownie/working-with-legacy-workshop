import React, {useState, useEffect} from "react";
import Table from 'rc-table';

// Berth view columns
//
// berth_id, berth_name, berth_length, berth_beam, berth_last_berth_date, berth_latest_out_date,
// berth_owner_id, boat_id, pontoon_id, boat_name, customer_name, pontoon_name, pontoon_type_name

const columns = [
  {
    title: 'Id',
    dataIndex: 'berth_id',
    key: 'id',
    width: 30,
  },
  {
    title: 'Berth Name',
    dataIndex: 'berth_name',
    key: 'berth_name',
    width: 100,
  },
  {
    title: 'Boat Name',
    dataIndex: 'boat_name',
    key: 'boat_name',
    width: 100,
  },
  {
    title: 'Customer Name',
    dataIndex: 'customer_name',
    key: 'customer_name',
    width: 100,
  },
  {
    title: 'Pontoon',
    dataIndex: 'pontoon_name',
    key: 'pontoon_name',
    width: 100
  },
];

function Berths(){

  const [data, setData] = useState([])
  
  useEffect(() => {

    async function fetchBerths() {

      fetch('/api/berths', { headers: {
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
          setData(data.berths, [data.berths])
        })
      }
  fetchBerths()
  }, []) 

  return (
    <div className="App-header">
      <h1>Berths</h1>
      <Table columns={columns} data={data} rowKey='id'/>
    </div>
    );
}


export default Berths;