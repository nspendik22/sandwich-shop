FROM node:8

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install body-parser chai chai-http mocha cors express mysql tether --save

RUN npm install

COPY . .

EXPOSE 3001
