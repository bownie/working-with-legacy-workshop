CREATE OR REPLACE VIEW wb_boat_vw
(id, customer_id, customer_name, boat_name, boat_type_id, boat_type_name,
 boat_length, boat_beam, boat_creation_date, boat_latest_update, boat_owner_id)
as select boat.id, boat.customer_id, cust.customer_name, boat.boat_name, boat.boat_type_id,
          boat_type.boat_type_name, boat.boat_length, boat.boat_beam,
          boat.boat_creation_date, boat.boat_latest_update, boat.boat_owner_id
from wb_boat boat,
     wb_customer cust,
     wb_boat_type boat_type
where boat.customer_id = cust.id
  and boat.boat_type_id = boat_type.id;