FROM node:alpine

ENV DATA_PATH=/data

WORKDIR /app

COPY . .

RUN npm ci

CMD npm start
