create database clone_facebook;

CREATE TABLE users (
    userId VARCHAR(36) NOT NULL,
    firstName VARCHAR(225) NOT NULL,
    surName VARCHAR(225) NOT NULL,
    mobileNumber VARCHAR(225),
    email VARCHAR(225),
    `password` VARCHAR(225) NOT NULL,
    dayOfBirth TINYINT(2) NOT NULL,
    monthOfBirth TINYINT(2) NOT NULL,
    yearOfBirth TINYINT(5) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    friendCount INT DEFAULT 0,
    address VARCHAR(225),
    country VARCHAR(225),
    currentCity VARCHAR(225),
    PRIMARY KEY (userId)
);

drop table users;

CREATE TABLE friendship (
    friendShipId INT NOT NULL AUTO_INCREMENT,
    friendOne VARCHAR(225) NOT NULL,
    friendTwo VARCHAR(225) NOT NULL,
    relationship TINYINT DEFAULT 0,
    PRIMARY KEY (friendShipId),
    FOREIGN KEY (friendOne)
        REFERENCES users (userId),
    FOREIGN KEY (friendTwo)
        REFERENCES users (userId)
);

drop table friendship;

SELECT * FROM users WHERE email = "kethanlinh.otaku@gmail.com" OR mobileNumber = "";
