create database mystorage;
use mystorage;
create table store (
id int primary key auto_increment,
stype text,
starget text,
stime text
);
truncate store;
select * from store;