DROP TABLE IF EXISTS wb_berth;

CREATE TABLE wb_berth
(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `berth_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'berth name',
    `berth_length` bigint(20) NOT NULL DEFAULT 5,
    `berth_beam` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'address2',
    `berth_last_berth_date` datetime NULL,
    `berth_latest_out_date` datetime NULL,
    `berth_owner_id` bigint(20) NULL,
    `boat_id` bigint(20) NULL,
    `pontoon_id` bigint(20) NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

insert into wb_berth values (1, "Berth 1", 10, 3, "2022-12-31", "1970-01-01", 0, 0, 0);