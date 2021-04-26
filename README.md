# Database Final Project

# Library Admin Page

## Problem Statement
Libraries need to know who has which books and when they were issues as well as
which books they currently have

## Solution Statement
I created a website for a library to manage the books and members, as well 
as issue and return books

## User
Typically the user would be library admins, however, "members" in the future 
will be able to check when they got a certain book as well as check if a book is
available. That feature is no implemented yet.

## Domain Objects
 - Book: Represent a book in the library
 - Author: Represents an associated author with a one to many relationship wit
   books

## Team
Samedh Gupta (Section: 1:35)

## Tools

#### Database
 - MySql

#### Server
 - Nodejs
 - Express HTTP Server
 - Prisma ORM

#### WebUI
 - React
 - React Router
 - BootStrap

## How to Run

#### Database
The database can be set up in 2 ways:
1. if prisma is installed, we can use the migration with `npx prisma migrate dev --name init` in the server directory
2. Manually import the data from the database directory
NOTE: Make sure the `DATABASE_URL` has the correct schema name

#### Server
The server is in the /server directory and can be run with the following steps:
1. Set the `DATABASE_URL` env variable (https://pris.ly/d/connection-strings)
2. `npm install` to get the dependencies
3. `npm start` to run the server 

#### WebUI
1. `npm install` to get the dependencies
2. `npm start` to run the server 
3. It will prompt to run on a different port, press `y` here



