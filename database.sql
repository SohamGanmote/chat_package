CREATE DATABASE chat_package;

use chat_package;

CREATE TABLE users (
    userName varchar(40) not null,
    userEmail varchar(50),
    userPass varchar(10),
    primary key (userName)
);

CREATE TABLE chats (
   sender varchar(55),
   reciver varchar(55),
   message varchar(255)
);

CREATE TABLE conversetions (
   userName varchar(55),
   lastMessage varchar(255)
);