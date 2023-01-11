DROP TABLE IF EXISTS wb_pontoon;

CREATE TABLE wb_pontoon
(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `pontoon_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pontoon name',
    `pontoon_length` bigint(20) not null,
    `pontoon_max_beam` bigint(20) not null,
    `pontoon_last_berth_date` datetime null,
    `pontoon_latest_out_date` datetime null,
    `pontoon_owner_id` bigint(20) NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

insert into wb_pontoon values (1, "Kats pontoon", 10, 5, NULL, NULL, NULL);