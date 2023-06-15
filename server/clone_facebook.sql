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

INSERT INTO friendship (friendOne, friendTwo, friendStatus,followStatus,relationship)
VALUES ("deaec073-7bcc-47be-8a12-95d18487dc68", "5a799fab-4ce0-4b2e-a0c5-a7c2473b4975", 0, 0, 0);

INSERT INTO friendship (friendOne, friendTwo, friendStatus,followStatus,relationship)
VALUES ("5a799fab-4ce0-4b2e-a0c5-a7c2473b4975", "deaec073-7bcc-47be-8a12-95d18487dc68", 1, 0, 0);

-- friendStatus: 0 là kết bạn, 1 là lời mời kết bạn, 2 là chấp nhận

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
        AND friendStatus =2
;
        
drop table friendship;

UPDATE friendship 
SET 
    friendStatus = 2,
    followStatus = 1,
    relationship = 1
WHERE
    friendOne = '0ae338bb-5fc6-4612-b03c-9f11dd1e3f09'
        AND friendTwo = 'fb111ef8-ca0a-4867-b009-0aaefc22e897'
        OR friendOne = 'fb111ef8-ca0a-4867-b009-0aaefc22e897'
        AND friendTwo = '0ae338bb-5fc6-4612-b03c-9f11dd1e3f09';

DELETE FROM friendship 
WHERE
    friendOne = '5a799fab-4ce0-4b2e-a0c5-a7c2473b4975'
    AND friendTwo = 'fb111ef8-ca0a-4867-b009-0aaefc22e897'
    OR friendOne = 'fb111ef8-ca0a-4867-b009-0aaefc22e897'
    AND friendTwo = '5a799fab-4ce0-4b2e-a0c5-a7c2473b4975';

CREATE TABLE posts (
    postId INT NOT NULL AUTO_INCREMENT,
    author VARCHAR(225) NOT NULL,
    postImage LONGTEXT,
    postContent VARCHAR(225) NOT NULL,
    postStatus TINYINT,
    createDateTime VARCHAR(50) NOT NULL,
    updateDateTime VARCHAR(50),
    friendTag VARCHAR(225),
    PRIMARY KEY (postId),
    FOREIGN KEY (author)
        REFERENCES users (userId),
    FOREIGN KEY (friendTag)
        REFERENCES friendship (friendTwo)
);

SELECT 
    p.postId,
    p.author,
    p.postImage,
    p.postContent,
    p.postStatus,
    p.createDateTime,
    p.updateDateTime,
    p.friendTag,
    u.avatarDefault,
    u.firstName,
    u.surName
FROM
    posts AS p
        JOIN
    users AS u ON p.author = u.userId
WHERE
    author = 'deaec073-7bcc-47be-8a12-95d18487dc68';
    
CREATE TABLE reacts (
    reactId INT NOT NULL AUTO_INCREMENT,
    react varchar(25),
    author VARCHAR(36) NOT NULL,
    postId INT NOT NULL,
    PRIMARY KEY (commentId),
    FOREIGN KEY (author)
        REFERENCES users (userId),
    FOREIGN KEY (postId)
        REFERENCES posts (postId)
);

SELECT 
    r.reactId,
    r.react,
    r.author,
    r.postId,
    u.firstName,
    u.surName,
    u.avatarDefault
FROM
    reacts AS r
        JOIN
    users AS u ON r.author = u.userId where author = "0ae338bb-5fc6-4612-b03c-9f11dd1e3f09";
    
    UPDATE reacts SET react = "love" WHERE reactId = "1";

CREATE TABLE comments (
    commentId INT NOT NULL AUTO_INCREMENT,
    commentContent LONGTEXT NOT NULL,
    commentLike INT,
    commentCreateDateTime VARCHAR(50) NOT NULL,
    commentUpdateDateTime VARCHAR(50),
    userId varchar(36) NOT NULL,
    postId INT NOT NULL,
    PRIMARY KEY (commentId),
    FOREIGN KEY (userId)
        REFERENCES users (userId),
    FOREIGN KEY (postId)
        REFERENCES posts (postId)
);

SELECT 
    c.commentId,
    c.commentContent,
    c.commentLike,
    c.commentCreateDateTime,
    c.commentUpdateDateTime,
    c.userId,
    c.postId,
    u.firstName,
    u.surName,
    u.avatarDefault
FROM
    comments AS c
        JOIN
    users AS u ON c.userId = u.userId where postId = 1;
    
CREATE TABLE replies (
    replyId INT NOT NULL AUTO_INCREMENT,
    replyContent LONGTEXT NOT NULL,
    replyLike INT,
    replyCreateDateTime VARCHAR(50) NOT NULL,
    replyUpdateDateTime VARCHAR(50),
    userId VARCHAR(36) NOT NULL,
    commentId INT NOT NULL,
    PRIMARY KEY (replyId),
    FOREIGN KEY (userId)
        REFERENCES users (userId),
    FOREIGN KEY (commentId)
        REFERENCES comments (commentId)
);

SELECT 
    r.replyId,
    r.replyContent,
    r.replyLike,
    r.replyCreateDateTime,
    r.replyUpdateDateTime,
    r.userId,
    r.commentId,
    u.firstName,
    u.surName,
    u.avatarDefault
FROM
    comments AS r
        JOIN
    users AS u ON r.userId = u.userId where commentId = 1;

-- Lấy hết ảnh qua từng user 
SELECT 
    p.postId,
    p.author,
    p.postImage,
    p.postContent,
    p.postStatus,
    p.createDateTime,
    p.updateDateTime,
    p.friendTag,
    u.avatarDefault,
    u.firstName,
    u.surName
FROM
    posts AS p
        JOIN
    users AS u ON p.author = u.userId
WHERE
    author = 'deaec073-7bcc-47be-8a12-95d18487dc68';
    
    SELECT * FROM posts JOIN users ON posts.author = 'deaec073-7bcc-47be-8a12-95d18487dc68';

CREATE TABLE stories (
    storyId INT NOT NULL AUTO_INCREMENT,
    storyImage LONGTEXT NOT NULL,
    author VARCHAR(36),
    PRIMARY KEY (storyId),
    FOREIGN KEY (author)
        REFERENCES users (userId)
);

 SELECT    
    s.storyId,
    s.storyImage,
    s.author,
    u.avatarDefault,
    u.firstName,
    u.surName
  FROM
    stories AS s
        JOIN
    users AS u ON s.author = u.userId;
    


