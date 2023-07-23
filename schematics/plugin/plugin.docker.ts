import { Rule, Tree } from '@angular-devkit/schematics';

import { PluginOptions } from './interface';
import { tryAddFile, tryDelFile } from '../utils';

function setIgnore(tree: Tree, options: PluginOptions): void {
  const filePath = `${options.root}/.dockerignore`;
  if (options.type === 'add') {
    tryAddFile(
      tree,
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
.vscode`
    );
  } else {
    tryDelFile(tree, filePath);
  }
}

function setCompose(tree: Tree, options: PluginOptions): void {
  const filePath = `${options.root}/docker-compose.yml`;
  if (options.type === 'add') {
    tryAddFile(
      tree,
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
`
    );
  } else {
    tryDelFile(tree, filePath);
  }
}

function setDockerfile(tree: Tree, options: PluginOptions): void {
  const filePath = `${options.root}/Dockerfile`;
  if (options.type === 'add') {
    tryAddFile(
      tree,
      filePath,
      `# STEP 1: Build
FROM node:10 as builder

LABEL authors="cipchk <cipchk@qq.com>"

COPY package.json package-lock.json ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force
RUN npm i && mkdir /${options.name} && cp -R ./node_modules ./${options.name}

WORKDIR /${options.name}

COPY . .

RUN npm run build

# STEP 2: Setup
FROM nginx:alpine

COPY --from=builder /${options.name}/_nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /${options.name}/_nginx/ssl/* /etc/nginx/ssl/

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /${options.name}/dist /usr/share/nginx/html

CMD [ "nginx", "-g", "daemon off;"]
`
    );
  } else {
    tryDelFile(tree, filePath);
  }
}

function setNginx(tree: Tree, options: PluginOptions): void {
  const filePath = `${options.root}/_nginx/default.conf`;
  if (options.type === 'add' && !tree.exists(filePath)) {
    tree.create(
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
`
    );
  }
}

export function pluginDocker(options: PluginOptions): Rule {
  return (tree: Tree) => {
    // 1. ignore file
    setIgnore(tree, options);
    // 2. docker-compose
    setCompose(tree, options);
    // 3. Dockerfile
    setDockerfile(tree, options);
    // 4. nginx config
    setNginx(tree, options);
  };
}
