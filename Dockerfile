FROM node:18
LABEL authors="arsen_movsesyan"


WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm build

EXPOSE 4200


CMD ["npm", "start"]
