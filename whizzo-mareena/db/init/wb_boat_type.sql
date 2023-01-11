DROP TABLE IF EXISTS wb_boat_type;

CREATE TABLE wb_boat_type
(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `boat_type_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'boat type name',
    `boat_type_description` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'boat type description',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

insert into wb_boat_type values (1, "Sailing Boat", "Under 20m sailing yacht");
insert into wb_boat_type values (2, "Motor Boat", "Under 20m motor yacht");
insert into wb_boat_type values (3, "Marina Boat", "Staff boat");
insert into wb_boat_type values (4, "Other Boat", "Other boat type");