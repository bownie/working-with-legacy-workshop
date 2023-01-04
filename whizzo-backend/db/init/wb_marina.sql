CREATE TABLE IF NOT EXISTS wb_marina
(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `marina_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'marina name',
    `marina_address1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'address1',
    `marina_address2` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'address2',
    `marina_postcode` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'postcode',
    `marina_country` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'country',
    `marina_telephone` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'telephone',
    `marina_website` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'website',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

delete from wb_marina;

insert into wb_marina values (1, "Kats Marina", "Zeeland Brug 11", "Kats", "1023AH", "NL", "+0102332332", "https://katsmarina.com");