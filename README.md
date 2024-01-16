<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

### Magic Login Authentication in NestJS

This project demonstrates how to implement Magic Login authentication in a NestJS application. Magic Login authentication provides a passwordless login experience by sending a unique time-limited link.

# Features
  -  Passwordless login using Magic Links
  -  Token-based authentication
  -  JWT-protected routes

# Packages
- passport 
- passport-magic-login (see more: https://www.passportjs.org/packages/passport-magic-login/)
- passport-jwt
- class-validator 

# Prerequisites
Node.js and npm (or yarn) installed


# Configuration
Create a .env file in the project root and set the following environment variables:
```
MAGIC_SECRET=secret123
JWT_SECRET=secret456
PORT=3000
HOST=localhost

```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```


# Usage
For this demo, users are hardcoded. 
valid email users:
```
applaudito@demo.com
applaudo@demo.com
```

1. To initiate the login process, make a POST request to `/auth/login` with the user's email address in the request body.
curl example:

```
curl --location 'http://localhost:3000/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "agustin@demomail.com"
}'
```

2. Through the Passport MagicLogin Strategy, the application will generate a magic link.
   -  For the demo you can grab it from the logs.
   -  Here is where an email provider can be added.

3. By clicking or call the magic link (you can use postman or similar tools for this), the callback endpoint will authenticate the user and generate a JWT access token.

4. The user can then use the JWT to access protected routes in the application. example: `/protected` (http://localhost:3000/protected)





