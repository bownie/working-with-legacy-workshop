DROP TABLE IF EXISTS wb_pontoon_type;

CREATE TABLE wb_pontoon_type
(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `pontoon_type_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pontoon type name',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

insert into wb_pontoon_type values (1, "Piled");
insert into wb_pontoon_type values (2, "Finger");