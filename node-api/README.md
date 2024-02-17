# [Headless CMS with ExpressJS API FREE]

![version](https://img.shields.io/badge/version-1.0.0-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/ct-headless-cms-with-laravel-json-api.svg?maxAge=2592000)](https://github.com/creativetimofficial/ct-headless-cms-with-laravel-json-api/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/ct-headless-cms-with-laravel-json-api/ct-headless-cms-with-laravel-json-api.svg?maxAge=2592000)](https://github.com/creativetimofficial/ct-headless-cms-with-laravel-json-api/issues?q=is%3Aissue+is%3Aclosed)

![Product Image](https://s3.amazonaws.com/creativetim_bucket/products/690/original/headlesscms-expressjs-pro.jpg?1664798078)

Headless CMS with ExpressJS API Free is a backend built with the most popular Node.js framework.

# Download
Download the .zip file from the Creative Tim site and extract it. what is the link?

# Node API Setup

## Introduction

Express is a minimal and flexible framework Node.js web application. Express offers core features for creating an API:
- allows setting up a middleware for responding to HTTP requests
- helps with routing for different HTTP methods
- dynamically rendering HTML pages

[Click here to go to the Express docs](https://expressjs.com/)

For the data management was used MongoDB, a non-relational database that provides support for JSON-like storage.

[Click here to go to the MongoDB docs](https://www.mongodb.com/docs/)

## Prerequisites

For your local development you need to have `Node.js` and `npm` version 16 or above installed:
- For Windows: https://phoenixnap.com/kb/install-node-js-npm-on-windows
- For Linux: https://www.geeksforgeeks.org/installation-of-node-js-on-linux/
- For Mac: https://treehouse.github.io/installation-guides/mac/node-mac.html

## Project Installation

To install the project you need to have version 16 of Node.js and npm version 8. The first step is to run `npm install` command. Next you need to copy the `.env.example` file and name it `.env`. There are the variables for the database and the URLs:
- DB_LINK="mongodb-link-to-connect"

- JWT_SECRET="token"

- APP_URL_CLIENT= with the default value of http://localhost:3000
- APP_URL_API= with the default value of http://localhost:8080

- add your mailtrap credentials in the MAILTRAP_USER and MAILTRAP_PASSWORD

## Usage

For a token-based authentication `passport` and `passport-jwt` modules were used. Also for managing the database, `mongoose` helped. Two scripts seeding and clearing the collections and documents are found in the `/src/mongo`. The FREE version has a single table of `users` with a default user `admin@jsonapi.com` with the password `secret`.

To migrate and seed the tables the commands are:
- npm run seed
- npm run clear

To start the API you need to run the command `npm run start:dev`. For example, your React project can use it by adding in your package.json `"proxy": "http://localhost:8080/"` if in your local development. Check your .env variables to match your URLs.

It offers endpoint for login with the default users or it can register a new one. In the case of forgetting the password, the user can request a reset passsword and reset it. For getting and updating the user's profile it uses a Profile API.

Node API offers endpoints for common CRUD functionalities:
- Authentication API: login, logout, forget passwors and reset password
- Profile API: get profile, update profile

## Table of Contents

* [Versions](#versions)
* [Documentation](#documentation)
* [Reporting Issues](#reporting-issues)
* [Licensing](#licensing)

## Documentation
The documentation for the Node API is hosted at our [here](https://documenter.getpostman.com/view/8138626/Uze1virp).

## Reporting Issues

We use GitHub Issues as the official bug tracker for the Node API PRO. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Node API PRO.
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Licensing

- Copyright Temple Labs
- Temple Labs License (https://github.com/Deadtargaryen/Interactive_Dashboard_MUI_Node_JS/blob/main/LICENSE.md).



## Credits

- [Temple Labs](#)
