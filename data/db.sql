CREATE TABLE `bots` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `hashid` varchar(255) COLLATE utf8mb4_unicode_ci,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `purpose` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci,
--   `created_at` timestamp NULL DEFAULT NULL,
--   `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);
