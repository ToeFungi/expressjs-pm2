# ExpressJS with PM2

## Prerequisites
 - docker
 - docker-compose
 - node
 - npm

## Setup
To get started, clone the repo and run 
```bash
npm install
```
Then you just need to run the docker container. Follow the basic docker setup below

## Docker
#### Build docker image
```bash
docker build -t expressjs .docker/
```

#### Running in docker
There are 2 preset containers namely `dev` and `stable`. The difference is that the `dev` container will detect all changes made to local files and restart the node server within the container whereas the `stable` will not.

To run `dev`
```bash
docker-compose up -d dev
docker-compose up -d stable
```

#### Monit with PM2
To monitor the current application with PM2
```bash
npm run-script monit_dev
npm run-script monit_stable
```

#### Hosting
By default you can access the app via
```
http://127.0.0.1:1234/
```