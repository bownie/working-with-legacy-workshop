import React, { useEffect, useState } from "react";
import BookingForm from "./BookingForm";
import Table from 'rc-table';
import "./BookingForm.css";

const columns = [
  {
    title: 'Booking #',
    dataIndex: 'id',
    key: 'booking_id',
    width: 100,
  },
  {
    title: 'Customer Name',
    dataIndex: 'customer_name',
    key: 'name',
    width: 100,
  },
  {
    title: 'Boat Name',
    dataIndex: 'boat_name',
    key: 'boatname',
    width: 100,
  },
  {
    title: 'Arrival Time',
    dataIndex: 'arrival_time',
    key: 'arrival_time',
    width: 80,
  },
  {
    title: 'Expected Departure Time',
    dataIndex: 'expected_departure_time',
    key: 'expected_departure_time',
    render: () => <a href="#">Delete</a>,
  },
];


const Bookings = () => {

  const [data, setData] = useState([])

  useEffect(() => {  
    fetch('/api/bookings', {
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
    .then(data => {
      setData(data.bookings, [data.bookings])
    })
  }, [] )

  return (
    <div className="App-header">
      <h1>Bookings</h1>
      <BookingForm />
      <Table columns={columns} data={data} rowKey='id'/>
    </div>
    );
}


export default Bookings;