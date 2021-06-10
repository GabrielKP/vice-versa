# vice-versa

## Installation

1. install docker
2. install docker-compose
3. clone git
4. in root directory: create a file `.env` with following entries:
```
PORT=5000
NODE_ENV=development
MONGO_ROOT_USERNAME=your-choice
MONGO_ROOT_PASSWORD=your-choice
DB_NAME=userdata
```
(on the server: `NODE_ENV=production`)
5. You are set

## Run development mode

Use following command for development mode:
```
[sudo] docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build
```

You are able to reach the vice-versa-frontend on `localhost:8080`, api-server on `localhost:8080/api/v1` and mongo-express on `localhost:8081`.

In the development mode all changes to the source files in the client and server directories are directly propagated to the browser so that you do not need to rebuild every time.

## Run in production mode

Use following command for production mode:
```
[sudo] docker-compose -f docker-compose.yml up --build
```

You are able to reach the vice-versa-frontend on `localhost:8080`, api-server on `localhost:8080/api/v1`

## Issues

If the mongo package is making nasty erros, try following:
```
[sudo] docker-compose -f docker-compose.yml up --build --force-recreate --renew-anon-volumes
```
**Be careful, it will delete all the data on your volumes (the persistent db data)**
In the worst case scenario, this may help, but will destroy all your volume information:
```
docker system prune -a --volumes
```