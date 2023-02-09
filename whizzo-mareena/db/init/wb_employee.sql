-- NB the employee list includes marina and boatyard staff - so many marinas inside the mareena model, potentially many boatyards within
-- the marina (but boatyards are not implemented yet)
--
--
DROP TABLE IF EXISTS wb_employee;

CREATE TABLE wb_employee
(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `employee_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'customer name',
    `user_id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user name',
    `employee_address1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'address1',
    `employee_address2` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'address2',
    `employee_postcode` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'postcode',
    `employee_region` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'region',
    `employee_mobile` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'mobile',
    `employee_email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'email',
    `employee_personal_email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'personal email',
    `marina_id` bigint(20) NOT NULL,
    `employee_type_id` bigint(20) NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_employee_marina`
    FOREIGN KEY (`marina_id`) REFERENCES `wb_marina` (`id`)
    ON DELETE CASCADE
    ON UPDATE RESTRICT,
    CONSTRAINT `fk_employee_type`
    FOREIGN KEY (`employee_type_id`) REFERENCES `wb_employee_type` (`id`)
    ON DELETE CASCADE
    ON UPDATE RESTRICT

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

insert into wb_employee values(1, "Davey Jones", "djones", "The Bottom of the Sea 11", "Atlantic Ocean", "1122YY", "North Sea", "+31 638 378323", "davey@mareena.com", "davey@jones.sea", 1, 1);
insert into wb_employee values(2, "Rikkie Lake", "rlake", "End Water Drive 3", "Mediterranean", "7892IO", "Spain", "+32 384738 8734", "rikkie@mareena.com", "rikkie@jones.sea", 1, 2);
insert into wb_employee values(3, "Cary Grant", "cgrant", "End Water Drive 3", "Mediterranean", "7892IO", "Spain", "+32 384738 8734", "rikkie@mareena.com", "rikkie@jones.sea", 1, 3);
