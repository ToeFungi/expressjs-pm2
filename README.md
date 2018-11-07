# ExpressJS with PM2

## Prerequisites
 - docker
 - docker-compose
 - node
 - npm

## Setup
To get started, clone the repo and run.
```bash
npm install
```
Then you just need to run the docker container. Follow the basic docker setup below.

## Docker
#### Running in docker
There are 2 preset containers namely `dev` and `stable`. The difference is that the `dev` container will detect all changes made to local files and restart the node server within the container whereas the `stable` will not.

The images will be built automatically on first spin up of either service. Both services use the same base image.

To run `dev`
```bash
docker-compose up -d dev
docker-compose up -d stable
```

#### Monit with PM2
To monitor the current application with PM2.
```bash
npm run-script monit_dev
npm run-script monit_stable
```

#### Hosting
By default you can access the app via.
```
http://127.0.0.1:8080/
```
The boiler plate URI is `[GET] /vehicles/1`.
```
http://127.0.0.1:8080/vehicles/1
```

## Environment
You can include the follow in a `.env` file to change base configuration of the server. The below stated variables are defaulted to if a .env is not present.
```
APP_NAME='expressjs'
APP_ENV='dev'
PORT=8080
```