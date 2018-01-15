---
order: 8
title:
  en-US: Build & Deploy
  zh-CN: 构建和发布
type: Basic
---

## 构建

当项目开发完毕，只需要运行一行命令就可以打包你的应用：

```bash
$ npm run build
```

ng-alain 本身是一个 Angular cli 项目，因此也可以参照 [WiKi](//github.com/angular/angular-cli/wiki/build) 完整更复杂的构建需求。构建打包成功之后，会在根目录生成 `dist` 文件夹，里面就是构建打包好的文件，通常是若干 `*.js`、`*.css`、`index.html` 等静态文件。

### 环境变量

当你需要区别开发和部署以及测试环境的时候，可以通过 `src/environments` 文件夹根据不同环境配置相应的参数，配置项同时也可以在应用当中直接调用它们。同时，还需要配置 `.angular-cli.json` 内的配置项，最后你可以透过命令改变环境配置。例如：HMR 命令：

```bash
$ ng serve -e=hmr
```

### 分析构建文件体积

如果你的构建文件很大，你可以通过 `analyze` 命令构建并分析依赖模块的体积分布，从而优化你的代码。

```bash
$ npm run analyze
```

然后通过 `webpack-bundle-analyzer dist/stats.json` 或 //webpack.github.io/analyse 查看体积分布数据。

![](./assets/screenshot/analyzer.png)

## 发布

对于发布来讲，只需要将最终生成的静态文件，也就是通常情况下 `dist` 文件夹的静态文件发布到你的 cdn 或者静态服务器即可，需要注意的是其中的 `index.html` 通常会是你后台服务的入口页面，在确定了 js 和 css 的静态之后可能需要改变页面的引入路径。

默认的静态资源引用路径直接指向 `dist` 文件夹发布所处应用的目录下，例如你将 `dist` 发布至 `ng-alain.com` 站点的根目录里则请求的网址是 `//ng-alain.com/***.js`、`//ng-alain.com/***.css`，若 `dist` 发布至某站点下某个目录如 `v2` 文件夹下，则请求的网址是 `//ng-alain.com/v2/***.js`、`//ng-alain.com/v2/***.css`。

如果你的静态资源是部署到其他域名（例如独立的 cdn 地址），你可以透过 `-d` 参数指定一个 cdn 地址。

```bash
$ ng build --prod --build-optimizer -d=//cdn.ng-alain.com/
```

这样生成的 `index.html` 内 `*.js`、`*.css` 会自动加上 `//cdn.ng-alain.com/*.js`。

### 路由策略

Angular 前端路由有两种不同策略 `HashLocationStrategy` 和 `PathLocationStrategy`。前者是以 `#` 后面的路径进行路由处理，通过 [HTML5 History](//developer.mozilla.org/en-US/docs/Web/API/History_API) 进行前端路由管理，而后者则是类似页面访问路径并没有 `#`，通过服务端的配置，能够访问指定 URL 都定向到当前页面，从而能够进行前端路由管理。

如果你想采用 `PathLocationStrategy` 策略，则需要将 `./src/app/routes/routes.module.ts` 的 `RouterModule.forRoot(routes, { useHash: true })` 换成 `RouterModule.forRoot(routes)`。同时需要服务端做一个映射，比如：

express 的例子：

```js
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
```

egg 的例子：

```js
// controller
exports.index = function* () {
  yield this.render('App.jsx', {
    context: {
      user: this.session.user,
    },
  });
};

// router
app.get('home', '/*', 'home.index');
```

有关更多 Angular 路由相当问题，请阅读[官网](//angular.io/guide/router)。

### Docker

`ng-alain` 提供了一个基于 `nginx` WEB服务完整的构建Angular项目的镜像文件。其中 `nginx` 是采用 [nginx:1.13.5-alpine](//github.com/nginxinc/docker-nginx/blob/master/mainline/alpine/Dockerfile) 的镜像，基本上可以满足 `ng-alain` 项目的良好运行环境，倘若有更多需求，你可以利用 `docker run` 轻易的指定 *nginx.conf*。

#### 1、构建镜像

根据 Dockerfile 构建一个完整的 ng-alain 所需要的运行环境的镜像。

```bash
$ docker build -t ng-alain .
```

#### 2、运行

**基于compose（推荐）**

```bash
$ docker-compose up -d
```

其细节可以通过 `docker-compose.yml` 修改。

**基于命令式**

```bash
$ docker run -d -p 80:80 --name alain ng-alain
```

最后你可以访问：http://localhost/

#### 3、关于SSL

`ng-alain` 提供的 Dockerfile 文件相对于比较简单，而实际项目中最常用的是对SSL的支持。

因此，默认情况下你可以将证书放置 `_nginx/ssl` 目录下，并开启 `_nginx/default.conf` 相关SSL配置项即可。

最后，增加 `docker-compose.yml` 的 `ports` 节点：

```
- 443:443
```
