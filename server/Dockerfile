FROM node:16.2.0-alpine3.13

LABEL version="0.1"
LABEL description="Production image for the vice-versa app API"

WORKDIR /app

COPY [ "package.json", "package.json*", "npm-shrinkwrap.json*", "./" ]

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "run", "start" ]
