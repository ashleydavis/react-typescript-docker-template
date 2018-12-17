# react-typescript-docker-template

An example of using React with TypeScript, bundled using Docker / Docker-Compose.

[Based on my previous example](https://github.com/ashleydavis/react-typescript-template).

[With some input from my Node.js microservices example](https://github.com/ashleydavis/nodejs-microservices-example).

## Setup

Clone repo, open command line, change to repo directory.

Install dependencies for server:

    cd server
    npm install

Then install dependencies for the client:

    cd client
    npm install

## Build

Build the server app:

    cd server
    npm run build

Build the web app:

    cd client
    npm run build

To compile just with TypeScript (either client or server)

    npx tsc

## Run the server (for test/prod)

    npm start

## Run the server (for development)

    npm run start:dev

## Run the client (for development)

    cd client 
    npm start

## Deploy to Azure

This repo contains a web.config and can be deploy easily to an Azure web app.

In the application settings for the web app make sure you set WEBSITE_NODE_DEFAULT_VERSION to 8.11.1.

## Testing

Run the dev server:

    npm run start:dev

Run cypress:

    npm test

Open cypress GUI:

    npm run cypress