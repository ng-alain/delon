---
order: 70
title:
  en-US: Build & Deploy
  zh-CN: 构建和发布
type: Dev
---

## Construct

When the project is developed, you can package your app with just one line of command:

```bash
npm run build
```

NG-ALAIN itself is an Angular CLI project, so you can also complete more complex build requirements with [Build](https://angular.io/cli/build). After the package is successfully packaged, the `dist` folder will be generated in the root directory, which is to build the packaged file, including several static files such as `*.js`, `*.css`, `index.html`.

### JavaScript heap out of memory

Avoid executing `ng build` when throw error **JavaScript heap out of memory**:

```json
{
  "scripts": {
    "build": "node --max_old_space_size=5120 ./node_modules/@angular/cli/bin/ng build"
  }
}
```

### Environmental variables

When you need to distinguish between development and deployment, and test environments, you can configure the corresponding parameters according to different environments through the `src/environments` folder. The configuration items can also be called directly in the application. At the same time, you need to configure the configuration items in `angular.json`. Finally, you can change the environment configuration through commands.

### Analyze the build file volume

If the build file is large, you can optimize your code by building and analyzing the volume distribution of dependent modules with the `analyze` command.

```bash
npm run analyze
```

View the analyze page:

```bash
npm run analyze:view
```

![](./assets/screenshot/bundle-size.png)

## Release

When you are ready to deploy (release) your the app, you need only to publish the generated build artifacts - that is, the files in the `dist` folder - to your cdn or static server. Note that the `index.html` is usually the entry page for your app and handles all missing file requests. You may need to change the import path of the page after determining the static of js and css.

The default static resource reference path directly points to the directory where the `dist` folder is published. For example, if you post `dist` to the root directory of the `ng-alain.com` site, the requested URL is `//ng-alain.com/***.js`, `//ng-alain.com/***.css`, if `dist` is posted to a directory under a certain directory, such as `v2`, request The URL is `//ng-alain.com/v2/***.js`, `//ng-alain.com/v2/***.css`.

If your static resource is deployed to another domain name (such as a separate CDN address), you can specify a CDN address with the `--deployUrl` parameter.

```bash
ng build -deployUrl=//cdn.ng-alain.com/
```

The generated `index.html` with its `*.js`, `*.css` files will automatically refer to `//cdn.ng-alain.com/*.js`, `//cdn.ng-alain.com/*css`, respectively.

### Routing strategy

Angular front-end routing has two different strategies: `HashLocationStrategy` and `PathLocationStrategy`. The former is routed by appending a `#` before a path, and the front-end routing management is performed by [HTML5 History](//developer.mozilla.org/en-US/docs/Web/API/History_API), while the latter is similar, but the path does not have `#` appended before it. Through the configuration of the server, the specified URL can be accessed to the current page, enabling front-end routing management.

If you want to use `PathLocationStrategy`, you need to replace `RouterModule.forRoot(routes, { useHash: true })` of `./src/app/routes/routes-routing.module.ts` with `RouterModule.forRoot(routes)`, since that is the default Angular behavior. You might notice that this can also be done by changing the `useHash` variable in the `src/environments/environment.*.ts` files, depending on your project configulation. Importantly, your server needs to be correctly configured, such that is returns the `index.html` for any 404 errors:

Express server example:

```js
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
```

Egg server example:

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

For more questions about Angular routing, please read [official website](//angular.io/guide/router).

### Docker

NG-ALAIN provides a complete image file for building Angular projects based on the nginx WEB service. Where nginx is a mirror using [nginx:1.13.5-alpine](https://github.com/nginxinc/docker-nginx/blob/master/mainline/alpine/Dockerfile), which basically satisfies NG-ALAIN The project's good operating environment, if there are more needs, you can easily specify *nginx.conf* with `docker run`.

#### 1. Building the image

Build a complete image of the runtime environment required by NG-ALAIN based on the Dockerfile.

```bash
docker build -t ng-alain .
```

#### 2. Running

**Based on compose (Recommended)**

```bash
docker-compose up -d
```

The details can be modified with `docker-compose.yml`.

**Based on imperative**

```bash
docker run -d -p 80:80 --name alain ng-alain
```

Finally, you can visit：http://localhost/

#### 3. About SSL

The Dockerfile provided by NG-ALAIN is relatively simple, and the most common use of real projects is support for SSL.

Therefore, by default you can place the certificate in the `_nginx/ssl` directory and enable the `_nginx/default.conf` related SSL configuration item.

Finally, add the `ports` node of `docker-compose.yml`:

```
- 443:443
```

### Container deployment

Refer to [Angular Container Deployment](https://zhuanlan.zhihu.com/p/35688938).
