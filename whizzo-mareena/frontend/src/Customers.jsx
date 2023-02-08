import React, { useEffect, useState } from "react";
import Table from 'rc-table';
import "./App.css";

const columns = [
  {
    title: 'Name',
    dataIndex: 'customer_name',
    key: 'name',
    width: 100,
  },
  {
    title: 'Address1',
    dataIndex: 'customer_address1',
    key: 'address1',
    width: 100,
  },
  {
    title: 'Address2',
    dataIndex: 'customer_address2',
    key: 'address3',
    width: 80,
  },
  {
    title: 'Postcode',
    dataIndex: 'customer_postcode',
    key: 'postcode',
    render: () => <a href="/delete_customer">Delete</a>,
  },
];

const Customers = () => {

  const [data, setData] = useState([])

  useEffect(() => {  
    async function fetchCustomers() {
      fetch('/api/customers', {
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
    ).then(data => {
      setData(data.customers, [data.customers])
    })
  }
  fetchCustomers()
  }, []) 

  return (
    <div className="App-header">
      <h1>Customers</h1>
      <Table columns={columns} data={data} rowKey='id'/>
    </div>
    );
}


export default Customers;