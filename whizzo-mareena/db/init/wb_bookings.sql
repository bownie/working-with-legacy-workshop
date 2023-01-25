DROP TABLE IF EXISTS wb_boat;

CREATE TABLE wb_bookings
(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `customer_id` bigint(20) NOT NULL,
    `boat_id` bigint(20) NOT NULL,
    `booking_creation_date` datetime null,
    `arrival_time` datetime not null,
    `expected_departure_time` datetime null,
    `actual_departure_time` datetime null,
    `berth_id` bigint(20) NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

insert into wb_bookings values (1, 1, 1, "2022-12-31", "2023-04-01", NULL, NULL, NULL);