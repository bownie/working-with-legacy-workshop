DROP TABLE IF EXISTS wb_boatyard;

CREATE TABLE wb_boatyard
(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `boatyard_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'boatyard name',
    `boatyard_address1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'address1',
    `boatyard_address2` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'address2',
    `boatyard_postcode` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'postcode',
    `boatyard_country` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'country',
    `marina_id` bigint(20) NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_boatyard_marina`
    FOREIGN KEY (`marina_id`) REFERENCES `wb_marina` (`id`)
    ON DELETE CASCADE
    ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

insert into wb_boatyard values (1, "Zeeland Boats", "Zeeland Brug 23", "Kats", "1023AB", "NL", 1);