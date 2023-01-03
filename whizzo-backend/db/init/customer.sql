CREATE TABLE IF NOT EXISTS wb_customer
(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `customer_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'customer name',
    `customer_address1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'address1',
    `customer_address2` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'address2',
    `element_id` bigint(20) DEFAULT NULL,
    `trid` bigint(20) NOT NULL,
    `language_code` varchar(7) COLLATE utf8mb4_unicode_ci NOT NULL,
    `source_language_code` varchar(7) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

