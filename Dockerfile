FROM node:18.17.1-alpine

LABEL authors="arsen_movsesyan"


WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 4200


CMD ["npm", "run", "start"]
