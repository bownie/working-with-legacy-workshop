CREATE TABLE IF NOT EXISTS wb_employee
(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `employee_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'customer name',
    `employee_address1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'address1',
    `employee_address2` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'address2',
    `employee_postcode` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'postcode',
    `employee_region` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'region',
    `employee_mobile` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'mobile',
    `employee_email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'email',
    `employee_personal_email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'personal email',
    `marina_id` bigint(20) NOT NULL,
    `employee_type_id` bigint(20) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

delete from wb_employee;

insert into wb_employee values(1, "Davey Jones", "The Bottom of the Sea 11", "Atlantic Ocean", "1122YY", "North Sea", "+31 638 378323", "davey@mareena.com", "davey@jones.sea", 1, 1);