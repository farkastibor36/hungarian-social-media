CREATE TABLE `users`
(
    `id`         INT NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(100) NULL,
    `last_name`  VARCHAR(100) NULL,
    `birth_date` DATE NULL,
    `email`      VARCHAR(100) NULL UNIQUE,
    `password`   VARCHAR(100) NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);