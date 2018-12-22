FROM node:10

LABEL authors="cipchk <cipchk@qq.com>"

WORKDIR /usr/src/app

COPY package.json package.json

RUN npm i

COPY . .

RUN npm run site:build
