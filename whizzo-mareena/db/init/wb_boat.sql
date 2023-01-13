DROP TABLE IF EXISTS wb_boat;

CREATE TABLE wb_boat
(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `boat_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'boat name',
    `boat_length` bigint(20) NOT NULL,
    `boat_beam` bigint(20) NOT NULL,
    `boat_creation_date` datetime null,
    `boat_latest_update` datetime null,
    `boat_owner_id` bigint(20) NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

insert into wb_boat values (1, "Kats boat", 10, 3, "2022-12-31", "2022-12-31", 0);
insert into wb_boat values (2, "Santa Marina", 30, 6, "2022-12-31", "2022-12-31", 0);
insert into wb_boat values (3, "Abigail", 10.5, 3.6, "2022-12-31", "2022-12-31", 0);