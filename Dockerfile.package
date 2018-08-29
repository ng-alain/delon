FROM nginx:stable-alpine

COPY /usr/src/app/_nginx/default.conf /etc/nginx/conf.d/

RUN rm -rf /usr/share/nginx/html/*

COPY /usr/src/app/src/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
