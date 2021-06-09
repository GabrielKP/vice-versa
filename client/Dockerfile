FROM node:16.2.0-alpine3.13

LABEL version="1.0"
LABEL description="React Frontend Vice Versa App"

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . .

RUN [ "npm", "run", "build" ]

FROM nginx

EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/build /usr/share/nginx/html