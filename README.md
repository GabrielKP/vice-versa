# vice-versa


# Dev vs Production

### Using environment variable method
`export COMPOSE_FILE=docker-compose.yml:docker-compose.dev.yml`
`docker-compose up`

or

### Using argument variable method
`docker-compose -f docker-compose.yml -f docker-compose.dev.yml up`