FROM node:18.0.0-alpine3.15 as build-stage

WORKDIR /app

COPY package.json ./

RUN npm config set registry https://registry.npmmirror.com/ && npm install && npm add -D vitepress

COPY . .


RUN npm run docs:build



FROM nginx:1.21.3-alpine  as production-stage


WORKDIR /app
COPY --from=build-stage /app/.vitepress/dist /app
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf



