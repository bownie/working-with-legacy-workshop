DROP TABLE IF EXISTS wb_employee_type;

CREATE TABLE wb_employee_type
(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `employee_type_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'employee type name',
    `employee_type_description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'employee type description',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

insert into wb_employee_type values (1, "Adminstrator", "Runs the systems at the marina");
insert into wb_employee_type values (2, "Owner", "Owner privileges at the marina");
insert into wb_employee_type values (3, "Marina Employee", "Marina employee privileges at the marina");
insert into wb_employee_type values (4, "Boatyard Employee", "Boatyard employee privileges at the marina");