drop database if exists countries;

create database countries;
\connect countries;

drop schema if exists schema2 cascade;
create schema schema2;

/*********************
Create countries table
**********************/

drop table if exists schema2.countries;
create table schema2.countries (
  id serial,
  country varchar(100),
  capital varchar(100),
  subregion varchar(150),
  currency varchar(100),
  people bigint,
  latlng integer[]
);

create index idx_id on schema2.countries(id);

