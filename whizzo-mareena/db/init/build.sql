-- Have to unpick in the right order due to foreign key constraints
--
DROP TABLE IF EXISTS wb_bookings;
DROP TABLE IF EXISTS wb_boat;
DROP TABLE IF EXISTS wb_employee;
DROP TABLE IF EXISTS wb_customer;
DROP TABLE IF EXISTS wb_berth;
DROP TABLE IF EXISTS wb_pontoon;
DROP TABLE IF EXISTS wb_boatyard;
DROP TABLE IF EXISTS wb_pontoon_type;
DROP TABLE IF EXISTS wb_employee_type;
DROP TABLE IF EXISTS wb_customer_type;
DROP TABLE IF EXISTS wb_boat_type;
DROP TABLE IF EXISTS wb_marina;

source wb_marina.sql;
source wb_boat_type.sql;
source wb_customer_type.sql;
source wb_employee_type.sql;
source wb_pontoon_type.sql;
source wb_boatyard.sql;
source wb_pontoon.sql;
source wb_berth.sql;
source wb_customer.sql;
source wb_employee.sql;
source wb_boat.sql;
source wb_bookings.sql;
source wb_bookings_vw.sql;