CREATE OR REPLACE VIEW wb_customer_vw
(customer_id, customer_name, customer_address1, customer_address2, customer_postcode, customer_region, customer_country,
 customer_mobile, customer_email, boat_id, customer_type_id, boat_name, customer_type_name, customer_type_description)
as select customer.id, customer.customer_name, customer.customer_address1, customer.customer_address2,
          customer.customer_postcode, customer.customer_region, customer.customer_country, customer.customer_mobile,
          customer.customer_email, customer.boat_id, customer.customer_type_id, boat.boat_name, customer_type.customer_type_name,
          customer_type.customer_type_description
FROM wb_customer customer
INNER JOIN wb_customer_type customer_type on customer.customer_type_id = customer_type.id
LEFT JOIN wb_boat boat on customer.boat_id = boat.id
