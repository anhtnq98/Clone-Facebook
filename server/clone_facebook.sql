create database clone_facebook;

CREATE TABLE users (
    userId VARCHAR(36) NOT NULL,
    firstName VARCHAR(225) NOT NULL,
    surName VARCHAR(225) NOT NULL,
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
    nickName VARCHAR(225),
    avatarDefault VARCHAR(225),
    backgroundDefault VARCHAR(225),
    PRIMARY KEY (userId)
);
SELECT * FROM users WHERE userId ="deaec073-7bcc-47be-8a12-95d18487dc68";
drop table users;

CREATE TABLE education (
    userId VARCHAR(36) NOT NULL,
    middleSchool LONGTEXT,
    highSchool LONGTEXT,
    university LONGTEXT,
    FOREIGN KEY (userId)
        REFERENCES users (userId)
);

drop table education;

CREATE TABLE hobby (
    hobbyId INT NOT NULL AUTO_INCREMENT,
    bobbyContext VARCHAR(225),
    userId VARCHAR(36) NOT NULL,
    PRIMARY KEY (hobbyId),
    FOREIGN KEY (userId)
        REFERENCES users (userId)
);

CREATE TABLE friendship (
    friendShipId INT NOT NULL AUTO_INCREMENT,
    friendOne VARCHAR(225) NOT NULL,
    friendTwo VARCHAR(225) NOT NULL,
    friendStatus TINYINT,
    followStatus TINYINT,
    relationship TINYINT,
    PRIMARY KEY (friendShipId),
    FOREIGN KEY (friendOne)
        REFERENCES users (userId),
    FOREIGN KEY (friendTwo)
        REFERENCES users (userId)
);

SELECT 
    f.friendShipId,
    f.friendOne,
    f.friendTwo,
    f.friendStatus,
    f.followStatus,
    f.relationship,
    u.firstName,
    u.surName,
    u.avatarDefault
FROM
    friendship AS f
        JOIN
    users AS u ON f.friendTwo = u.userId
WHERE
    friendOne = '605af3ff-4326-4d2c-aaf9-ee4c9ba3ab66'
        AND friendStatus = 2
;
drop table friendship;



