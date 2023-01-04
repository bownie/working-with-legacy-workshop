CREATE TABLE IF NOT EXISTS wb_customer
(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `customer_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'customer name',
    `customer_address1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'address1',
    `customer_address2` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'address2',
    `customer_postcode` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'postcode',
    `customer_region` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'region',
    `customer_country` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'region',
    `customer_mobile` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'mobile',
    `customer_email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'email',
    `boat_id` bigint(20) DEFAULT NULL,
    `customer_type_id` bigint(20) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

delete from wb_customer;

insert into wb_customer values (1, "Long John Silver", "The High Seas", "Somewhere in the Ocean", "DUNNO", "NA", "+4472673 827382", "longjohn@silver.net", 0, 1);