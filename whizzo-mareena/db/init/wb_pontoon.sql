DROP TABLE IF EXISTS wb_pontoon;

CREATE TABLE wb_pontoon
(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `marina_id` bigint(20) NOT NULL,
    `pontoon_type_id` bigint(20) NOT NULL,
    `pontoon_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pontoon name',
    `pontoon_length` bigint(20) not null,
    `pontoon_max_beam` bigint(20) not null,
    `pontoon_last_berth_date` datetime null,
    `pontoon_latest_out_date` datetime null,
    `pontoon_owner_id` bigint(20) NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_pontoon_marina`
    FOREIGN KEY (`marina_id`) REFERENCES `wb_marina` (`id`)
    ON DELETE CASCADE
    ON UPDATE RESTRICT,
    CONSTRAINT `fk_pontoon_pontoon_type`
    FOREIGN KEY (`pontoon_type_id`) REFERENCES `wb_pontoon_type` (`id`)
    ON DELETE CASCADE
    ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

insert into wb_pontoon values (1, 1, 1, "Kats West", 10, 5, NULL, NULL, NULL);
insert into wb_pontoon values (2, 1, 1, "Kats North", 10, 5, NULL, NULL, NULL);
insert into wb_pontoon values (3, 1, 2, "Kats South", 10, 5, NULL, NULL, NULL);