DROP TABLE IF EXISTS wb_berth;

CREATE TABLE wb_berth
(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `berth_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'berth name',
    `berth_length` bigint(20) NOT NULL DEFAULT 5,
    `berth_beam` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'address2',
    `berth_last_berth_date` datetime NULL,
    `berth_latest_out_date` datetime NULL,
    `berth_owner_id` bigint(20) NULL,
    `boat_id` bigint(20) NULL,
    `pontoon_id` bigint(20) NULL,
    PRIMARY KEY (`id`),
    
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

insert into wb_berth values (1, "A1", 10, 3, "2022-12-31", "1970-01-01", 0, 0, 1);
insert into wb_berth values (2, "A2", 10, 3, "2022-12-31", "1970-01-01", 0, 0, 1);
insert into wb_berth values (3, "A3", 10, 3, "2022-12-31", "1970-01-01", 0, 0, 1);
insert into wb_berth values (4, "A4", 10, 3, "2022-12-31", "1970-01-01", 0, 0, 1);
insert into wb_berth values (5, "A5", 10, 3, "2022-12-31", "1970-01-01", 0, 0, 1);
insert into wb_berth values (6, "B1", 5, 3, "2022-12-31", "1970-01-01", 0, 0, 2);
insert into wb_berth values (7, "B2", 7, 3, "2022-12-31", "1970-01-01", 0, 0, 2);
insert into wb_berth values (8, "B3", 10, 3, "2022-12-31", "1970-01-01", 0, 0, 2);
insert into wb_berth values (9, "B4", 10, 3, "2022-12-31", "1970-01-01", 0, 0, 2);
insert into wb_berth values (10, "B5", 10, 3, "2022-12-31", "1970-01-01", 0, 0, 2);
insert into wb_berth values (11, "C1", 10, 3, "2022-12-31", "1970-01-01", 0, 0, 3);
insert into wb_berth values (12, "C2", 10, 3, "2022-12-31", "1970-01-01", 0, 0, 3);
insert into wb_berth values (13, "C3", 6, 3, "2022-12-31", "1970-01-01", 0, 0, 3);
insert into wb_berth values (14, "C4", 6, 3, "2022-12-31", "1970-01-01", 0, 0, 3);
insert into wb_berth values (15, "C5", 15, 3, "2022-12-31", "1970-01-01", 0, 0, 3);
insert into wb_berth values (16, "A6", 30, 3, "2022-12-31", "1970-01-01", 0, 0, 1);
insert into wb_berth values (17, "A7", 20, 3, "2022-12-31", "1970-01-01", 0, 0, 1);
insert into wb_berth values (18, "A8", 20, 3, "2022-12-31", "1970-01-01", 0, 0, 1);
insert into wb_berth values (19, "A9", 20, 3, "2022-12-31", "1970-01-01", 0, 0, 1);
insert into wb_berth values (20, "A10", 20, 3, "2022-12-31", "1970-01-01", 0, 0, 1);
insert into wb_berth values (21, "C6", 15, 3, "2022-12-31", "1970-01-01", 0, 0, 3);



