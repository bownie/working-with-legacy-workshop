CREATE TABLE IF NOT EXISTS wb_berth
(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `berth_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'berth name',
    `berth_length` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'address1',
    `berth_beam` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'address2',
    `berth_last_berth_date` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'postcode',
    `berth_late_out_date` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'country',
    `berth_owner_id` bigint(20) NULL,
    `berth_owner_id` bigint(20) NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

delete from wb_berth;

insert into wb_berth values (1, "Kats berth", "Zeeland Brug 11", "Kats", "1023AH", "NL", "+0102332332", "https://katsberth.com");