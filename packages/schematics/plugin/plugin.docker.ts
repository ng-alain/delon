import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { tryAddFile, tryDelFile } from '../utils/alain';
import { PluginOptions } from './interface';

function setIgnore(host: Tree, options: PluginOptions) {
  const filePath = `${options.root}/.dockerignore`;
  if (options.type === 'add') {
    tryAddFile(
      host,
      filePath,
      `node_modules
npm-debug.log
Dockerfile*
docker-compose*
.dockerignore
.git
.gitignore
README.md
LICENSE
.vscode`,
    );
  } else {
    tryDelFile(host, filePath);
  }
}

function setCompose(host: Tree, options: PluginOptions) {
  const filePath = `${options.root}/docker-compose.yml`;
  if (options.type === 'add') {
    tryAddFile(
      host,
      filePath,
      `version: '2.1'

services:
  ${options.name}:
    image: ${options.name}
    build: .
    environment:
      NODE_ENV: production
    ports:
      - 80:80
`,
    );
  } else {
    tryDelFile(host, filePath);
  }
}

function setDockerfile(host: Tree, options: PluginOptions) {
  const filePath = `${options.root}/Dockerfile`;
  if (options.type === 'add') {
    tryAddFile(
      host,
      filePath,
      `# STEP 1: Build
FROM node:8-alpine as builder

LABEL authors="cipchk <cipchk@qq.com>"

COPY package.json package-lock.json ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force
RUN npm i && mkdir /${options.name} && cp -R ./node_modules ./${options.name}

WORKDIR /${options.name}

COPY . .

RUN npm run build

# STEP 2: Setup
FROM nginx:alpine

COPY --from=builder /${
      options.name
      }/_nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /${options.name}/_nginx/ssl/* /etc/nginx/ssl/

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /${options.name}/dist /usr/share/nginx/html

CMD [ "nginx", "-g", "daemon off;"]
`,
    );
  } else {
    tryDelFile(host, filePath);
  }
}

function setNginx(host: Tree, options: PluginOptions) {
  const filePath = `${options.root}/_nginx/default.conf`;
  if (options.type === 'add' && !host.exists(filePath)) {
    host.create(
      filePath,
      `server {
  listen       80;
  # listen 443;
  # ssl on;
  # ssl_certificate /etc/nginx/ssl/server.crt;
  # ssl_certificate_key /etc/nginx/ssl/server.key;

  server_name  localhost;

  #charset koi8-r;
  #access_log  /var/log/nginx/host.access.log  main;

  location / {
    root   /usr/share/nginx/html;
    index  index.html index.htm;
    try_files $uri $uri/ /index.html;
  }

  #error_page  404              /404.html;

  # redirect server error pages to the static page /50x.html
  #
  error_page   500 502 503 504  /50x.html;
  location = /50x.html {
    root   /usr/share/nginx/html;
  }
}
`,
    );
  }
}

export function pluginDocker(options: PluginOptions): Rule {
  return (host: Tree, context: SchematicContext) => {
    // 1. ignore file
    setIgnore(host, options);
    // 2. docker-compose
    setCompose(host, options);
    // 3. Dockerfile
    setDockerfile(host, options);
    // 4. nginx config
    setNginx(host, options);
  };
}
