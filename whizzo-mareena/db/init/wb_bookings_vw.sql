CREATE OR REPLACE VIEW wb_bookings_vw
(id, customer_id, customer_name, boat_id, boat_name, booking_creation_date, arrival_time,
 expected_departure_time, actual_departure_time, berth_id)
as select book.id, book.customer_id, cust.customer_name, book.boat_id, boat.boat_name, 
          book.booking_creation_date, book.arrival_time, book.expected_departure_time,
          book.actual_departure_time, book.berth_id
from wb_bookings book,
     wb_customer cust,
     wb_boat boat
where book.customer_id = cust.id
  and book.boat_id = boat.id;