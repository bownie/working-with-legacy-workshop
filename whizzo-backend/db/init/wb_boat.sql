CREATE TABLE IF NOT EXISTS wb_boat
(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `boat_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'boat name',
    `boat_length` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'address1',
    `boat_beam` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'address2',
    `boat_last_berth_date` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'postcode',
    `boat_late_out_date` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'country',
    `boat_owner_id` bigint(20) NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

delete from wb_boat;

insert into wb_boat values (1, "Kats boat", "Zeeland Brug 11", "Kats", "1023AH", "NL", "+0102332332", "https://katsboat.com");