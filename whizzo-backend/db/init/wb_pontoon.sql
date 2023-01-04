CREATE TABLE IF NOT EXISTS wb_pontoon
(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `pontoon_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pontoon name',
    `pontoon_length` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'address1',
    `pontoon_beam` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'address2',
    `pontoon_last_berth_date` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'postcode',
    `pontoon_late_out_date` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'country',
    `pontoon_owner_id` bigint(20) NULL,
    `pontoon_owner_id` bigint(20) NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

delete from wb_pontoon;

insert into wb_pontoon values (1, "Kats pontoon", "Zeeland Brug 11", "Kats", "1023AH", "NL", "+0102332332", "https://katspontoon.com");