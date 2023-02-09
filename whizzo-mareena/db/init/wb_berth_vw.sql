CREATE OR REPLACE VIEW wb_berth_vw
(berth_id, berth_name, berth_length, berth_beam, berth_last_berth_date, berth_latest_out_date,
 berth_owner_id, boat_id, pontoon_id, boat_name, customer_name, pontoon_name, pontoon_type_name)
as select berth.id, berth.berth_name, berth.berth_length, berth.berth_beam, berth.berth_last_berth_date, berth.berth_latest_out_date,
          berth.berth_owner_id, berth.boat_id, berth.pontoon_id, boat.boat_name, customer.customer_name, pontoon.pontoon_name, pontoon_type.pontoon_type_name
FROM wb_berth berth
INNER JOIN wb_pontoon pontoon on berth.pontoon_id = pontoon.id
INNER JOIN wb_pontoon_type pontoon_type on pontoon.pontoon_type_id = pontoon_type.id
LEFT JOIN wb_boat boat on berth.boat_id = boat.id
LEFT JOIN wb_customer customer on boat.customer_id = customer.id;