DROP TABLE IF EXISTS wb_customer_type;

CREATE TABLE wb_customer_type
(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `customer_type_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'customer type name',
    `customer_type_description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'customer type description',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

delete from wb_customer_type;

insert into wb_customer_type values (1, "Boat owner", "Boat owner");
insert into wb_customer_type values (2, "Boat manager", "Manages the boat for an owner");
insert into wb_customer_type values (3, "Sailing School", "Sailing School we work with");
insert into wb_customer_type values (4, "Boat company", "Boat company or manufacturer");