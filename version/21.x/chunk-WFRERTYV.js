import{a as r}from"./chunk-PJYRP6KM.js";import{a as O}from"./chunk-C3MNSEWK.js";import"./chunk-XU2NL7K2.js";import"./chunk-J335YUGO.js";import"./chunk-62ZNMC2L.js";import"./chunk-KQR6CVZA.js";import"./chunk-7O6624BH.js";import{Wa as o,sb as a,vb as i}from"./chunk-DBBCITIJ.js";var d=class n{item={name:"acl",langs:["zh-CN"],content:{"zh-CN":{meta:{order:50,title:"ACL",redirect:"/acl/getting-started",description:"",group:"Advance",path:"docs/acl.md",url:"/docs/acl/zh"},text:"",api:"",toc:[],raw:`---
order: 50
title: ACL
type: Advance
redirect: /acl/getting-started
---`}}};codes=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=o({type:n,selectors:[["docs-acl"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&i(0,"app-docs",0),e&2&&a("codes",t.codes)("item",t.item)},dependencies:[r],encapsulation:2})};var p=class n{item={name:"architecture",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:20,title:"Architecture",i18n:"need-update",description:"NG-ALAIN scaffold is a front-end solution to support middleware and back-end application. It is based on Angular and ng-zorro-antd(Angular implementat...",group:"Basic",path:"docs/architecture.en-US.md",url:"/docs/architecture/en"},text:`<p>NG-ALAIN scaffold is a front-end solution to support middleware and back-end application. It is based on <a href="https://angular.io/" target="_blank" rel="noopener">Angular</a> and <a href="https://ng.ant.design/docs/introduce/en" target="_blank" rel="noopener">ng-zorro-antd</a>(Angular implementation of Ant Design). The scaffold includes a set of common functionalities and business component libraries. It reduces lots of infrastructure development overwhelmingly and let you focus on business logic development.</p>
<h2 id="architecture_diagram"><a class="lake-link"><i data-anchor="architecture_diagram"></i></a>Architecture Diagram</h2><p><img src="https://github.com/ng-alain/delon/raw/master/_screenshot/architecture.png" alt="" width="700" loading="lazy"></p>
<p><strong>&#64;delon/theme</strong></p>
<p>Theme library of scaffold, we publish the theme library to NPM, which extremely simplifies upgrade effort.</p>
<p>Theme library includes not only essential styles(CSS tool like bootstrap) required by NG-ALAIN, but also a set of common data rendering(Pipe) and service tools(page title, scroll bar, etc..), which are needed during daily development.</p>
<p><strong>&#64;delon/abc</strong></p>
<p>Scaffold provides a default set of <a href="/components/">business components</a>, which abstract commonly used block/area in console service. We will continue to maintain and iterate the components. Provide more advanced abstract components than Ant Design base components to middleware and back-end business.</p>
<p><strong>&#64;delon/chart</strong></p>
<p><a href="/chart">&#64;delon/chart</a> chart library is customised based on G2. Providing commonly used chart suite in business development. It can be used alone or composed together to achieve more complex and fancy display effect.</p>
<p><strong>&#64;delon/form</strong></p>
<p><a href="/form">&#64;delon/form</a> follows standard of <a href="http://json-schema.org/" target="_blank" rel="noopener">JSON Schema</a> to build dynamic forms.</p>
<p><strong>&#64;delon/auth</strong></p>
<p><a href="/auth">User Authentication</a> module is used for resolving steps to obtain, save and use authentication.</p>
<p><strong>&#64;delon/acl</strong></p>
<p><a href="/acl">ACL</a> Access Control List is a very simple role based permission control. It can even reach the granularity of controlling the visibility of a button.</p>
<p><strong>&#64;delon/cache</strong></p>
<p>Reduce the Http request by storing <a href="/cache">cache</a> of the dictionary, city data, etc. into memory or persistence storage.</p>
<p><strong>&#64;delon/mock</strong></p>
<p><a href="/mock">Mock</a> will intercept Angular HTTP request and return testing data.</p>
<p><strong>&#64;delon/util</strong></p>
<p><a href="/util">Daily Utilities</a>\u3002</p>
<p><strong>&#64;delon/testing</strong></p>
<p>Commonly used testing suite.</p>
<p><strong>CLI Schematics</strong></p>
<p><a href="/cli">CLI Tool</a></p>
<h2 id="directory_structure"><a class="lake-link"><i data-anchor="directory_structure"></i></a>Directory Structure</h2><p>Schematic diagram of directory structure\uFF1A</p>
<pre><code>\u251C\u2500\u2500 _mock                                       # Mock Data rule
\u251C\u2500\u2500 src
\u2502\xA0\xA0 \u251C\u2500\u2500 app
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 core                                # Core
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 i18n
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 net
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 default.interceptor.ts      # Default HTTP interceptor
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 services
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 startup.service.ts          # Initialize project configuration
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 index.ts                        # Core index.ts
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 layout                              # Core layout
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 routes
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 **                              # Business directory
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 routes.ts                       # Service routes registration
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 shared                              # Shared module
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 shared-imports.ts               # A collection of frequently shared components
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 index.ts                        # Shared index.ts
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 app.ts                              # Root component
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 app.config.ts                       # Global config
\u2502\xA0\xA0 \u251C\u2500\u2500 assets                                  # Local static resource
\u2502\xA0\xA0 \u251C\u2500\u2500 environments                            # Environment variable configuration
\u2502\xA0\xA0 \u251C\u2500\u2500 styles                                  # Style directory
\u2514\u2500\u2500 \u2514\u2500\u2500 style.less                              # Style guide entry
</code></pre>
<p>The following is a description and use of each directory and file.</p>
<p><strong>_mock</strong></p>
<p>The Mock data rules directory, if you create a project via <a href="/cli">Command Line Tools</a>, you can specify the <code>--mock</code> parameter to determine if the Mock function is required.</p>
<p><strong>src/app/core/index.ts</strong></p>
<p>Some core business services (for example: messaging, data access, etc.)</p>
<p><strong>src/app/core/i18n</strong></p>
<p><a href="/docs/i18n">Internationalization</a> data loading and processing related classes. If you create a project via <a href="/cli">Command Line Tool</a>, you can specify the <code>-di</code> parameter to determine whether internationalization support is required.</p>
<p><strong>src/app/core/net</strong></p>
<p>The default interceptor, where you can handle request parameters, request exceptions, business exceptions, and so on.</p>
<p><strong>src/app/core/startup/startup.service.ts</strong></p>
<p>Useful when you need to execute some remote data (eg application information, user information, etc.) before Angular launches.</p>
<blockquote>
<p>It is a simple method and returns a <code>Promise</code> object, unless Angular will abort the launch unless <code>resolve(null)</code> is explicitly executed.</p>
</blockquote>
<p><strong>src/app/layout</strong></p>
<p>Layout file code, refer to the page structure section.</p>
<p><strong>src/app/routes</strong></p>
<p>Business module, all your business code will be here.</p>
<p><strong>src/app/shared/index.ts</strong></p>
<p>A collection of some frequently shared components, The means that some third-party modules, custom components, and custom instructions that you need to use for the entire business module should exist here. In addition, for &#64;delon &amp; NG-ZORRO, two shared secondary module imports, <code>shared-delon.module.ts</code> and<code> shared-zorro.module.ts</code>.</p>
<p><strong>src/app/app.config.ts</strong></p>
<p>Global configuration for project.</p>
<p><strong>src/environments</strong></p>
<p>The application environment variable contains the following values:</p>
<ul>
<li><code>SERVER_URL</code> All HTTP request prefixes</li>
<li><code>production</code> Whether the production environment</li>
<li><code>useHash</code> Whether the route is useHash mode</li>
</ul>
`,api:"",toc:[{id:"architecture_diagram",title:"Architecture Diagram"},{id:"directory_structure",title:"Directory Structure"}],raw:`---
order: 20
title: Architecture
type: Basic
i18n: need-update
---

NG-ALAIN scaffold is a front-end solution to support middleware and back-end application. It is based on [Angular](https://angular.io/) and [ng-zorro-antd](https://ng.ant.design/docs/introduce/en)(Angular implementation of Ant Design). The scaffold includes a set of common functionalities and business component libraries. It reduces lots of infrastructure development overwhelmingly and let you focus on business logic development.

## Architecture Diagram

![](https://github.com/ng-alain/delon/raw/master/_screenshot/architecture.png | width=700)

**@delon/theme**

Theme library of scaffold, we publish the theme library to NPM, which extremely simplifies upgrade effort.

Theme library includes not only essential styles(CSS tool like bootstrap) required by NG-ALAIN, but also a set of common data rendering(Pipe) and service tools(page title, scroll bar, etc..), which are needed during daily development.

**@delon/abc**

Scaffold provides a default set of [business components](/components/), which abstract commonly used block/area in console service. We will continue to maintain and iterate the components. Provide more advanced abstract components than Ant Design base components to middleware and back-end business.

**@delon/chart**

[@delon/chart](/chart) chart library is customised based on G2. Providing commonly used chart suite in business development. It can be used alone or composed together to achieve more complex and fancy display effect.

**@delon/form**

[@delon/form](/form) follows standard of [JSON Schema](http://json-schema.org/) to build dynamic forms.

**@delon/auth**

[User Authentication](/auth) module is used for resolving steps to obtain, save and use authentication.

**@delon/acl**

[ACL](/acl) Access Control List is a very simple role based permission control. It can even reach the granularity of controlling the visibility of a button.

**@delon/cache**

Reduce the Http request by storing [cache](/cache) of the dictionary, city data, etc. into memory or persistence storage.

**@delon/mock**

[Mock](/mock) will intercept Angular HTTP request and return testing data.

**@delon/util**

[Daily Utilities](/util)\u3002

**@delon/testing**

Commonly used testing suite.

**CLI Schematics**

[CLI Tool](/cli)

## Directory Structure

Schematic diagram of directory structure\uFF1A

\`\`\`
\u251C\u2500\u2500 _mock                                       # Mock Data rule
\u251C\u2500\u2500 src
\u2502\xA0\xA0 \u251C\u2500\u2500 app
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 core                                # Core
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 i18n
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 net
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 default.interceptor.ts      # Default HTTP interceptor
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 services
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 startup.service.ts          # Initialize project configuration
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 index.ts                        # Core index.ts
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 layout                              # Core layout
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 routes
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 **                              # Business directory
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 routes.ts                       # Service routes registration
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 shared                              # Shared module
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 shared-imports.ts               # A collection of frequently shared components
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 index.ts                        # Shared index.ts
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 app.ts                              # Root component
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 app.config.ts                       # Global config
\u2502\xA0\xA0 \u251C\u2500\u2500 assets                                  # Local static resource
\u2502\xA0\xA0 \u251C\u2500\u2500 environments                            # Environment variable configuration
\u2502\xA0\xA0 \u251C\u2500\u2500 styles                                  # Style directory
\u2514\u2500\u2500 \u2514\u2500\u2500 style.less                              # Style guide entry
\`\`\`

The following is a description and use of each directory and file.

**_mock**

The Mock data rules directory, if you create a project via [Command Line Tools](/cli), you can specify the \`--mock\` parameter to determine if the Mock function is required.

**src/app/core/index.ts**

Some core business services (for example: messaging, data access, etc.)

**src/app/core/i18n**

[Internationalization](/docs/i18n) data loading and processing related classes. If you create a project via [Command Line Tool](/cli), you can specify the \`-di\` parameter to determine whether internationalization support is required.

**src/app/core/net**

The default interceptor, where you can handle request parameters, request exceptions, business exceptions, and so on.

**src/app/core/startup/startup.service.ts**

Useful when you need to execute some remote data (eg application information, user information, etc.) before Angular launches.

> It is a simple method and returns a \`Promise\` object, unless Angular will abort the launch unless \`resolve(null)\` is explicitly executed.

**src/app/layout**

Layout file code, refer to the page structure section.

**src/app/routes**

Business module, all your business code will be here.

**src/app/shared/index.ts**

A collection of some frequently shared components, The means that some third-party modules, custom components, and custom instructions that you need to use for the entire business module should exist here. In addition, for @delon & NG-ZORRO, two shared secondary module imports, \`shared-delon.module.ts\` and\` shared-zorro.module.ts\`.

**src/app/app.config.ts**

Global configuration for project.

**src/environments**

The application environment variable contains the following values:

- \`SERVER_URL\` All HTTP request prefixes
- \`production\` Whether the production environment
- \`useHash\` Whether the route is useHash mode`},"zh-CN":{meta:{order:20,title:"\u4F53\u7CFB\u7ED3\u6784",i18n:"need-update",description:"NG-ALAIN \u76EE\u6807\u662F\u63D0\u4F9B\u66F4\u591A\u901A\u7528\u6027\u4E1A\u52A1\u6A21\u5757\uFF0C\u8BA9\u5F00\u53D1\u8005\u66F4\u52A0\u4E13\u6CE8\u4E8E\u4E1A\u52A1\u3002\u6240\u4EE5\u5728\u4F60\u7740\u624B\u5F00\u59CB\u5F00\u53D1\u524D\uFF0C\u6709\u5FC5\u8981\u4E86\u89E3\u6574\u4E2A NG-ALAIN \u7684\u4F53\u7CFB\u7ED3\u6784\uFF0C\u4ECE\u6574\u4F53\u4E0A\u4E86\u89E3 NG-ALAIN \u5305\u542B\u4E86\u54EA\u4E9B\u4E1C\u897F\u53CA\u5176\u542B\u4E49\uFF0C\u624D\u80FD\u66F4\u597D\u7684\u5229\u7528\u8FD9\u4E9B\u4E1A\u52A1\u7EC4\u4EF6\u5E93\u5FEB\u901F\u6784\u5EFA\u9879\u76EE\u3002\u5F53\u4F7F\u7528 ng add ng-alain \u751F\u6210\u540E\u7684 NG-AL...",group:"Basic",path:"docs/architecture.zh-CN.md",url:"/docs/architecture/zh"},text:`<p>NG-ALAIN \u76EE\u6807\u662F\u63D0\u4F9B\u66F4\u591A\u901A\u7528\u6027\u4E1A\u52A1\u6A21\u5757\uFF0C\u8BA9\u5F00\u53D1\u8005\u66F4\u52A0\u4E13\u6CE8\u4E8E\u4E1A\u52A1\u3002\u6240\u4EE5\u5728\u4F60\u7740\u624B\u5F00\u59CB\u5F00\u53D1\u524D\uFF0C\u6709\u5FC5\u8981\u4E86\u89E3\u6574\u4E2A NG-ALAIN \u7684\u4F53\u7CFB\u7ED3\u6784\uFF0C\u4ECE\u6574\u4F53\u4E0A\u4E86\u89E3 NG-ALAIN \u5305\u542B\u4E86\u54EA\u4E9B\u4E1C\u897F\u53CA\u5176\u542B\u4E49\uFF0C\u624D\u80FD\u66F4\u597D\u7684\u5229\u7528\u8FD9\u4E9B\u4E1A\u52A1\u7EC4\u4EF6\u5E93\u5FEB\u901F\u6784\u5EFA\u9879\u76EE\u3002</p>
<h2 id="\u7ED3\u6784\u56FE"><a class="lake-link"><i data-anchor="\u7ED3\u6784\u56FE"></i></a>\u7ED3\u6784\u56FE</h2><p><img src="./assets/screenshot/architecture.png" alt="" width="700" loading="lazy"></p>
<table>
<thead>
<tr>
<th>\u7C7B\u5E93</th>
<th>\u6587\u6863</th>
<th>\u63CF\u8FF0</th>
</tr>
</thead>
<tbody><tr>
<td><strong>&#64;delon/theme</strong></td>
<td><a href="/theme">\u6587\u6863</a></td>
<td>\u4E3B\u9898\u7CFB\u7EDF\u9664\u4E86\u5305\u542B NG-ALAIN \u57FA\u7840\u6846\u67B6\u53CA\u6240\u9700\u6837\u5F0F\uFF08\u5305\u542BCSS\u5DE5\u5177\u96C6\uFF0C\u4E00\u5957\u7C7B\u4F3CBootstrap\uFF09\u4EE5\u5916\uFF0C\u8FD8\u5305\u542B\u4E00\u4E9B\u901A\u7528\u7684\u6570\u636E\u6E32\u67D3\uFF08Pipe\uFF09\u3001\u670D\u52A1\u5DE5\u5177\u7C7B\uFF08\u9875\u9762\u6807\u9898\u3001\u6EDA\u52A8\u6761\u7B49\uFF09\u7684\u96C6\u5408\uFF0C\u8FD9\u4E9B\u662F\u65E5\u5E38\u5FC5\u4E0D\u53EF\u5C11\u7684\u4E00\u4E9B\u7EC4\u6210</td>
</tr>
<tr>
<td><strong>&#64;delon/abc</strong></td>
<td><a href="/components">\u6587\u6863</a></td>
<td>\u811A\u624B\u67B6\u5185\u63D0\u4F9B\u4E86\u4E00\u5957\u9ED8\u8BA4\u4E1A\u52A1\u7EC4\u4EF6\uFF0C\u8FD9\u4E9B\u7EC4\u4EF6\u62BD\u8C61\u4E86\u63A7\u5236\u53F0\u4E1A\u52A1\u4E2D\u7684\u4E00\u4E9B\u5E38\u89C1\u533A\u5757\u3002\u6211\u4EEC\u5C06\u6301\u7EED\u7EF4\u62A4\u548C\u8FED\u4EE3\u8FD9\u4E9B\u7EC4\u4EF6\uFF0C\u4E3A\u4E2D\u540E\u53F0\u4E1A\u52A1\u63D0\u4F9B\u6BD4 Ant Design \u57FA\u7840\u7EC4\u4EF6\u66F4\u9AD8\u7EA7\u522B\u7684\u62BD\u8C61</td>
</tr>
<tr>
<td><strong>&#64;delon/chart</strong></td>
<td><a href="/chart">\u6587\u6863</a></td>
<td>\u57FA\u4E8E G2 \u7684\u57FA\u7840\u4E0A\u4E8C\u6B21\u5C01\u88C5\uFF0C\u63D0\u4F9B\u4E86\u4E1A\u52A1\u4E2D\u5E38\u7528\u7684\u56FE\u8868\u5957\u4EF6\uFF0C\u53EF\u4EE5\u5355\u72EC\u4F7F\u7528\uFF0C\u4E5F\u53EF\u4EE5\u7EC4\u5408\u8D77\u6765\u5B9E\u73B0\u590D\u6742\u7684\u5C55\u793A\u6548\u679C</td>
</tr>
<tr>
<td><strong>&#64;delon/form</strong></td>
<td><a href="/form">\u6587\u6863</a></td>
<td>\u57FA\u4E8E <a href="http://json-schema.org/" target="_blank" rel="noopener">JSON Schema</a> \u6807\u51C6\u7684\u52A8\u6001\u6784\u5EFA\u8868\u5355</td>
</tr>
<tr>
<td><strong>&#64;delon/auth</strong></td>
<td><a href="/auth">\u6587\u6863</a></td>
<td>\u7528\u6237\u8BA4\u8BC1\u6A21\u5757\uFF0C\u7528\u4E8E\u89E3\u51B3\u5982\u4F55\u83B7\u53D6\u3001\u5B58\u53D6\u3001\u4F7F\u7528\u8FD9\u4E09\u4E2A\u6B65\u9AA4\u7684\u7528\u6237\u8BA4\u8BC1\u73AF\u8282</td>
</tr>
<tr>
<td><strong>&#64;delon/acl</strong></td>
<td><a href="/acl">\u6587\u6863</a></td>
<td>\u8BBF\u95EE\u63A7\u5236\u5217\u8868\uFF0C\u662F\u4E00\u79CD\u975E\u5E38\u7B80\u5355\u7684\u57FA\u4E8E\u89D2\u8272\u6743\u9650\u63A7\u5236\uFF0C\u751A\u81F3\u8FBE\u5230\u63A7\u5236\u67D0\u4E2A\u6309\u94AE\u663E\u9690\u7684\u7C92\u5EA6</td>
</tr>
<tr>
<td><strong>&#64;delon/cache</strong></td>
<td><a href="/acl">\u6587\u6863</a></td>
<td>\u5C06\u5B57\u5178\u3001\u57CE\u5E02\u6570\u636E\u7B49\u7F13\u5B58\u81F3\u5185\u5B58\u6216\u6301\u4E45\u5316\u5F53\u4E2D\uFF0C\u6709\u6548\u51CF\u5C11 Http \u8BF7\u6C42</td>
</tr>
<tr>
<td><strong>&#64;delon/mock</strong></td>
<td><a href="/mock">\u6587\u6863</a></td>
<td>Mock \u4F1A\u62E6\u622A Angular Http \u8BF7\u6C42\u5E76\u8FD4\u56DE\u6D4B\u8BD5\u6570\u636E\uFF0C\u5F53\u540E\u7AEF\u672A\u5B8C\u6210\u63A5\u53E3\u65F6 Mock \u6280\u672F\u662F\u4E00\u9879\u4E0D\u4F1A\u5F71\u54CD\u524D\u7AEF\u5F00\u53D1\u8FDB\u5EA6\u7684\u5DE5\u5177</td>
</tr>
<tr>
<td><strong>&#64;delon/util</strong></td>
<td><a href="/util">\u6587\u6863</a></td>
<td>\u5305\u542B\u6570\u7EC4\u3001\u5EF6\u8FDF\u3001\u5B57\u7B26\u4E32\u3001\u65E5\u671F\u3001\u6821\u9A8C\u7B49\u5E38\u89C1\u5DE5\u5177\u96C6</td>
</tr>
<tr>
<td><strong>&#64;delon/testing</strong></td>
<td>-</td>
<td>\u5E38\u7528\u6D4B\u8BD5\u5957\u4EF6</td>
</tr>
<tr>
<td><strong>CLI Schematics</strong></td>
<td><a href="/cli">\u6587\u6863</a></td>
<td>\u5FEB\u901F\u751F\u6210\u7EDF\u4E00\u7684\u6A21\u677F\u3001\u53EF\u63D2\u62D4\u7684\u63D2\u4EF6\u7B49</td>
</tr>
</tbody></table>
<h2 id="\u76EE\u5F55\u7ED3\u6784"><a class="lake-link"><i data-anchor="\u76EE\u5F55\u7ED3\u6784"></i></a>\u76EE\u5F55\u7ED3\u6784</h2><p>\u5F53\u4F7F\u7528 <code>ng add ng-alain</code> \u751F\u6210\u540E\u7684 NG-ALAIN \u811A\u624B\u67B6\uFF0C\u5B83\u7684\u57FA\u672C\u76EE\u5F55\u7ED3\u6784\u6982\u7565\u56FE\u5982\u4E0B\uFF1A</p>
<pre><code>\u251C\u2500\u2500 _mock                                       # Mock \u6570\u636E\u89C4\u5219\u76EE\u5F55
\u251C\u2500\u2500 angular.json                                # Angular \u9879\u76EE\u914D\u7F6E\u6587\u4EF6
\u251C\u2500\u2500 src
\u2502\xA0\xA0 \u251C\u2500\u2500 app
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 core                                # \u6838\u5FC3
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 i18n
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 net
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 default.interceptor.ts      # \u9ED8\u8BA4HTTP\u62E6\u622A\u5668
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 services
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 startup.service.ts          # \u521D\u59CB\u5316\u9879\u76EE\u914D\u7F6E
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 index.ts                        # \u6838\u5FC3\u5BFC\u51FA
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 layout                              # \u901A\u7528\u5E03\u5C40
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 routes
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 **                              # \u4E1A\u52A1\u76EE\u5F55
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 routes.ts                       # \u4E1A\u52A1\u8DEF\u7531
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 shared                              # \u5171\u4EAB
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 shared-imports.ts               # \u4E00\u4E9B\u9AD8\u9891\u7387\u5171\u4EAB\u7EC4\u4EF6\u7684\u96C6\u5408
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 index.ts                        # \u5171\u4EAB\u5BFC\u51FA
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 app.ts                              # \u6839\u7EC4\u4EF6
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 app.config.ts                       # \u5168\u5C40\u914D\u7F6E\u9879
\u2502\xA0\xA0 \u251C\u2500\u2500 assets                                  # \u672C\u5730\u9759\u6001\u8D44\u6E90
\u2502\xA0\xA0 \u251C\u2500\u2500 environments                            # \u73AF\u5883\u53D8\u91CF\u914D\u7F6E
\u2502\xA0\xA0 \u251C\u2500\u2500 styles                                  # \u6837\u5F0F\u76EE\u5F55
\u2514\u2500\u2500 \u2514\u2500\u2500 style.less                              # \u6837\u5F0F\u5F15\u5BFC\u5165\u53E3
</code></pre>
<p>\u4EE5\u4E0B\u662F\u9488\u5BF9\u5404\u4E2A\u76EE\u5F55\u53CA\u6587\u4EF6\u8BF4\u660E\u53CA\u4F7F\u7528\u76EE\u7684\uFF1A</p>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u63CF\u8FF0</th>
</tr>
</thead>
<tbody><tr>
<td><strong>angular.json</strong></td>
<td>Angular \u5DE5\u4F5C\u533A\u53CA\u9879\u76EE\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u53C2\u8003<a href="https://angular.cn/guide/workspace-config" target="_blank" rel="noopener">Angular\u6587\u6863</a></td>
</tr>
<tr>
<td><strong>_mock</strong></td>
<td>Mock \u6570\u636E\u89C4\u5219\u76EE\u5F55\uFF0C\u82E5\u4F60\u901A\u8FC7 <a href="/cli">\u547D\u4EE4\u884C\u5DE5\u5177</a> \u521B\u5EFA\u9879\u76EE\u65F6\u53EF\u4EE5\u6307\u5B9A <code>--mock</code> \u53C2\u6570\u51B3\u5B9A\u662F\u5426\u9700\u8981 Mock \u529F\u80FD</td>
</tr>
<tr>
<td><strong>src/app/core/index.ts</strong></td>
<td>\u4E00\u4E9B\u6838\u5FC3\u4E1A\u52A1\u670D\u52A1\uFF08\u4F8B\u5982\uFF1A\u6D88\u606F\u3001\u6570\u636E\u8BBF\u95EE\u7B49\uFF09</td>
</tr>
<tr>
<td><strong>src/app/core/i18n</strong></td>
<td><a href="/docs/i18n">\u56FD\u9645\u5316</a>\u6570\u636E\u52A0\u8F7D\u53CA\u5904\u7406\u76F8\u5173\u7C7B\uFF0C\u82E5\u4F60\u901A\u8FC7 <a href="/cli">\u547D\u4EE4\u884C\u5DE5\u5177</a> \u521B\u5EFA\u9879\u76EE\u65F6\u53EF\u4EE5\u6307\u5B9A <code>-di</code> \u53C2\u6570\u51B3\u5B9A\u662F\u5426\u9700\u8981\u56FD\u9645\u5316\u652F\u6301</td>
</tr>
<tr>
<td><strong>src/app/core/net</strong></td>
<td>\u9ED8\u8BA4\u62E6\u622A\u5668\uFF0C\u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u7EDF\u4E00\u5904\u7406\u8BF7\u6C42\u53C2\u6570\u3001\u8BF7\u6C42\u5F02\u5E38\u3001\u4E1A\u52A1\u5F02\u5E38\u7B49\u52A8\u4F5C</td>
</tr>
<tr>
<td><strong>src/app/core/startup/startup.service.ts</strong></td>
<td>\u5F53\u4F60\u9700\u8981\u5728 Angular \u542F\u52A8\u524D\u6267\u884C\u4E00\u4E9B\u8FDC\u7A0B\u6570\u636E\uFF08\u4F8B\u5982\uFF1A\u5E94\u7528\u4FE1\u606F\u3001\u7528\u6237\u4FE1\u606F\u7B49\uFF09\u65F6\u975E\u5E38\u6709\u7528</td>
</tr>
<tr>
<td><strong>src/app/layout</strong></td>
<td>\u5E03\u5C40\u76EE\u5F55\uFF0C\u5305\u542B\u57FA\u7840\u5E03\u5C40\u3001\u7A7A\u767D\u5E03\u5C40\u3001\u7528\u6237\u767B\u5F55\u5E03\u5C40</td>
</tr>
<tr>
<td><strong>src/app/routes</strong></td>
<td>\u4E1A\u52A1\u6A21\u5757\uFF0C\u4F60\u7684\u6240\u6709\u4E1A\u52A1\u4EE3\u7801\u90FD\u5C06\u5728\u8FD9\u91CC</td>
</tr>
<tr>
<td><strong>src/app/shared/index.ts</strong></td>
<td>\u4E00\u4E9B\u9AD8\u9891\u7387\u5171\u4EAB\u7EC4\u4EF6\u7684\u96C6\u5408\uFF0C\u6307\u5F53\u4F60\u9700\u8981\u9488\u5BF9\u6574\u4E2A<strong>\u4E1A\u52A1\u6A21\u5757\u90FD\u9700\u8981</strong>\u4F7F\u7528\u7684\u4E00\u4E9B\u7B2C\u4E09\u65B9\u6A21\u5757\u3001\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u3001\u81EA\u5B9A\u4E49\u6307\u4EE4\uFF0C\u90FD\u5E94\u8BE5\u5B58\u5728\u8FD9\u91CC\u3002\u9664\u6B64\u4E4B\u5916\uFF0C\u9488\u5BF9 &#64;delon &amp; NG-ZORRO \u5206\u522B\u6784\u5EFA\u4E86 <code>shared-delon.module.ts</code>\u3001<code>shared-zorro.module.ts</code> \u4E24\u79CD\u6B21\u7EA7\u5171\u4EAB\u6A21\u5757\u7684\u5BFC\u5165\u3002</td>
</tr>
<tr>
<td><strong>src/app/app.config.ts</strong></td>
<td>\u9879\u76EE\u5168\u5C40\u914D\u7F6E\u9879</td>
</tr>
<tr>
<td><strong>src/environments</strong></td>
<td>\u5E94\u7528\u73AF\u5883\u53D8\u91CF\uFF0C\u5305\u542B\u4EE5\u4E0B\u503C\uFF1A<code>SERVER_URL</code> \u6240\u6709HTTP\u8BF7\u6C42\u7684\u524D\u7F00\uFF1B<code>production</code> \u662F\u5426\u751F\u4EA7\u73AF\u5883\uFF1B<code>useHash</code> \u8DEF\u7531\u662F\u5426useHash\u6A21\u5F0F</td>
</tr>
</tbody></table>
`,api:"",toc:[{id:"\u7ED3\u6784\u56FE",title:"\u7ED3\u6784\u56FE"},{id:"\u76EE\u5F55\u7ED3\u6784",title:"\u76EE\u5F55\u7ED3\u6784"}],raw:`---
order: 20
title: \u4F53\u7CFB\u7ED3\u6784
type: Basic
i18n: need-update
---

NG-ALAIN \u76EE\u6807\u662F\u63D0\u4F9B\u66F4\u591A\u901A\u7528\u6027\u4E1A\u52A1\u6A21\u5757\uFF0C\u8BA9\u5F00\u53D1\u8005\u66F4\u52A0\u4E13\u6CE8\u4E8E\u4E1A\u52A1\u3002\u6240\u4EE5\u5728\u4F60\u7740\u624B\u5F00\u59CB\u5F00\u53D1\u524D\uFF0C\u6709\u5FC5\u8981\u4E86\u89E3\u6574\u4E2A NG-ALAIN \u7684\u4F53\u7CFB\u7ED3\u6784\uFF0C\u4ECE\u6574\u4F53\u4E0A\u4E86\u89E3 NG-ALAIN \u5305\u542B\u4E86\u54EA\u4E9B\u4E1C\u897F\u53CA\u5176\u542B\u4E49\uFF0C\u624D\u80FD\u66F4\u597D\u7684\u5229\u7528\u8FD9\u4E9B\u4E1A\u52A1\u7EC4\u4EF6\u5E93\u5FEB\u901F\u6784\u5EFA\u9879\u76EE\u3002

## \u7ED3\u6784\u56FE

![](./assets/screenshot/architecture.png | width=700)

| \u7C7B\u5E93 | \u6587\u6863 | \u63CF\u8FF0 |
|----|----|----|
| **@delon/theme** | [\u6587\u6863](/theme) | \u4E3B\u9898\u7CFB\u7EDF\u9664\u4E86\u5305\u542B NG-ALAIN \u57FA\u7840\u6846\u67B6\u53CA\u6240\u9700\u6837\u5F0F\uFF08\u5305\u542BCSS\u5DE5\u5177\u96C6\uFF0C\u4E00\u5957\u7C7B\u4F3CBootstrap\uFF09\u4EE5\u5916\uFF0C\u8FD8\u5305\u542B\u4E00\u4E9B\u901A\u7528\u7684\u6570\u636E\u6E32\u67D3\uFF08Pipe\uFF09\u3001\u670D\u52A1\u5DE5\u5177\u7C7B\uFF08\u9875\u9762\u6807\u9898\u3001\u6EDA\u52A8\u6761\u7B49\uFF09\u7684\u96C6\u5408\uFF0C\u8FD9\u4E9B\u662F\u65E5\u5E38\u5FC5\u4E0D\u53EF\u5C11\u7684\u4E00\u4E9B\u7EC4\u6210 |
| **@delon/abc** | [\u6587\u6863](/components) | \u811A\u624B\u67B6\u5185\u63D0\u4F9B\u4E86\u4E00\u5957\u9ED8\u8BA4\u4E1A\u52A1\u7EC4\u4EF6\uFF0C\u8FD9\u4E9B\u7EC4\u4EF6\u62BD\u8C61\u4E86\u63A7\u5236\u53F0\u4E1A\u52A1\u4E2D\u7684\u4E00\u4E9B\u5E38\u89C1\u533A\u5757\u3002\u6211\u4EEC\u5C06\u6301\u7EED\u7EF4\u62A4\u548C\u8FED\u4EE3\u8FD9\u4E9B\u7EC4\u4EF6\uFF0C\u4E3A\u4E2D\u540E\u53F0\u4E1A\u52A1\u63D0\u4F9B\u6BD4 Ant Design \u57FA\u7840\u7EC4\u4EF6\u66F4\u9AD8\u7EA7\u522B\u7684\u62BD\u8C61 |
| **@delon/chart** | [\u6587\u6863](/chart) | \u57FA\u4E8E G2 \u7684\u57FA\u7840\u4E0A\u4E8C\u6B21\u5C01\u88C5\uFF0C\u63D0\u4F9B\u4E86\u4E1A\u52A1\u4E2D\u5E38\u7528\u7684\u56FE\u8868\u5957\u4EF6\uFF0C\u53EF\u4EE5\u5355\u72EC\u4F7F\u7528\uFF0C\u4E5F\u53EF\u4EE5\u7EC4\u5408\u8D77\u6765\u5B9E\u73B0\u590D\u6742\u7684\u5C55\u793A\u6548\u679C |
| **@delon/form** | [\u6587\u6863](/form) | \u57FA\u4E8E [JSON Schema](http://json-schema.org/) \u6807\u51C6\u7684\u52A8\u6001\u6784\u5EFA\u8868\u5355 |
| **@delon/auth** | [\u6587\u6863](/auth) | \u7528\u6237\u8BA4\u8BC1\u6A21\u5757\uFF0C\u7528\u4E8E\u89E3\u51B3\u5982\u4F55\u83B7\u53D6\u3001\u5B58\u53D6\u3001\u4F7F\u7528\u8FD9\u4E09\u4E2A\u6B65\u9AA4\u7684\u7528\u6237\u8BA4\u8BC1\u73AF\u8282 |
| **@delon/acl** | [\u6587\u6863](/acl) | \u8BBF\u95EE\u63A7\u5236\u5217\u8868\uFF0C\u662F\u4E00\u79CD\u975E\u5E38\u7B80\u5355\u7684\u57FA\u4E8E\u89D2\u8272\u6743\u9650\u63A7\u5236\uFF0C\u751A\u81F3\u8FBE\u5230\u63A7\u5236\u67D0\u4E2A\u6309\u94AE\u663E\u9690\u7684\u7C92\u5EA6 |
| **@delon/cache** | [\u6587\u6863](/acl) | \u5C06\u5B57\u5178\u3001\u57CE\u5E02\u6570\u636E\u7B49\u7F13\u5B58\u81F3\u5185\u5B58\u6216\u6301\u4E45\u5316\u5F53\u4E2D\uFF0C\u6709\u6548\u51CF\u5C11 Http \u8BF7\u6C42 |
| **@delon/mock** | [\u6587\u6863](/mock) | Mock \u4F1A\u62E6\u622A Angular Http \u8BF7\u6C42\u5E76\u8FD4\u56DE\u6D4B\u8BD5\u6570\u636E\uFF0C\u5F53\u540E\u7AEF\u672A\u5B8C\u6210\u63A5\u53E3\u65F6 Mock \u6280\u672F\u662F\u4E00\u9879\u4E0D\u4F1A\u5F71\u54CD\u524D\u7AEF\u5F00\u53D1\u8FDB\u5EA6\u7684\u5DE5\u5177 |
| **@delon/util** | [\u6587\u6863](/util) | \u5305\u542B\u6570\u7EC4\u3001\u5EF6\u8FDF\u3001\u5B57\u7B26\u4E32\u3001\u65E5\u671F\u3001\u6821\u9A8C\u7B49\u5E38\u89C1\u5DE5\u5177\u96C6 |
| **@delon/testing** | - | \u5E38\u7528\u6D4B\u8BD5\u5957\u4EF6 |
| **CLI Schematics** | [\u6587\u6863](/cli) | \u5FEB\u901F\u751F\u6210\u7EDF\u4E00\u7684\u6A21\u677F\u3001\u53EF\u63D2\u62D4\u7684\u63D2\u4EF6\u7B49 |

## \u76EE\u5F55\u7ED3\u6784

\u5F53\u4F7F\u7528 \`ng add ng-alain\` \u751F\u6210\u540E\u7684 NG-ALAIN \u811A\u624B\u67B6\uFF0C\u5B83\u7684\u57FA\u672C\u76EE\u5F55\u7ED3\u6784\u6982\u7565\u56FE\u5982\u4E0B\uFF1A

\`\`\`
\u251C\u2500\u2500 _mock                                       # Mock \u6570\u636E\u89C4\u5219\u76EE\u5F55
\u251C\u2500\u2500 angular.json                                # Angular \u9879\u76EE\u914D\u7F6E\u6587\u4EF6
\u251C\u2500\u2500 src
\u2502\xA0\xA0 \u251C\u2500\u2500 app
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 core                                # \u6838\u5FC3
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 i18n
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 net
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 default.interceptor.ts      # \u9ED8\u8BA4HTTP\u62E6\u622A\u5668
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 services
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 startup.service.ts          # \u521D\u59CB\u5316\u9879\u76EE\u914D\u7F6E
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 index.ts                        # \u6838\u5FC3\u5BFC\u51FA
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 layout                              # \u901A\u7528\u5E03\u5C40
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 routes
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 **                              # \u4E1A\u52A1\u76EE\u5F55
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 routes.ts                       # \u4E1A\u52A1\u8DEF\u7531
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 shared                              # \u5171\u4EAB
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 shared-imports.ts               # \u4E00\u4E9B\u9AD8\u9891\u7387\u5171\u4EAB\u7EC4\u4EF6\u7684\u96C6\u5408
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 index.ts                        # \u5171\u4EAB\u5BFC\u51FA
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 app.ts                              # \u6839\u7EC4\u4EF6
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 app.config.ts                       # \u5168\u5C40\u914D\u7F6E\u9879
\u2502\xA0\xA0 \u251C\u2500\u2500 assets                                  # \u672C\u5730\u9759\u6001\u8D44\u6E90
\u2502\xA0\xA0 \u251C\u2500\u2500 environments                            # \u73AF\u5883\u53D8\u91CF\u914D\u7F6E
\u2502\xA0\xA0 \u251C\u2500\u2500 styles                                  # \u6837\u5F0F\u76EE\u5F55
\u2514\u2500\u2500 \u2514\u2500\u2500 style.less                              # \u6837\u5F0F\u5F15\u5BFC\u5165\u53E3
\`\`\`

\u4EE5\u4E0B\u662F\u9488\u5BF9\u5404\u4E2A\u76EE\u5F55\u53CA\u6587\u4EF6\u8BF4\u660E\u53CA\u4F7F\u7528\u76EE\u7684\uFF1A

| \u540D\u79F0 | \u63CF\u8FF0 |
|----|----|
| **angular.json** | Angular \u5DE5\u4F5C\u533A\u53CA\u9879\u76EE\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u53C2\u8003[Angular\u6587\u6863](https://angular.cn/guide/workspace-config) |
| **_mock** | Mock \u6570\u636E\u89C4\u5219\u76EE\u5F55\uFF0C\u82E5\u4F60\u901A\u8FC7 [\u547D\u4EE4\u884C\u5DE5\u5177](/cli) \u521B\u5EFA\u9879\u76EE\u65F6\u53EF\u4EE5\u6307\u5B9A \`--mock\` \u53C2\u6570\u51B3\u5B9A\u662F\u5426\u9700\u8981 Mock \u529F\u80FD |
| **src/app/core/index.ts** | \u4E00\u4E9B\u6838\u5FC3\u4E1A\u52A1\u670D\u52A1\uFF08\u4F8B\u5982\uFF1A\u6D88\u606F\u3001\u6570\u636E\u8BBF\u95EE\u7B49\uFF09 |
| **src/app/core/i18n** | [\u56FD\u9645\u5316](/docs/i18n)\u6570\u636E\u52A0\u8F7D\u53CA\u5904\u7406\u76F8\u5173\u7C7B\uFF0C\u82E5\u4F60\u901A\u8FC7 [\u547D\u4EE4\u884C\u5DE5\u5177](/cli) \u521B\u5EFA\u9879\u76EE\u65F6\u53EF\u4EE5\u6307\u5B9A \`-di\` \u53C2\u6570\u51B3\u5B9A\u662F\u5426\u9700\u8981\u56FD\u9645\u5316\u652F\u6301 |
| **src/app/core/net** | \u9ED8\u8BA4\u62E6\u622A\u5668\uFF0C\u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u7EDF\u4E00\u5904\u7406\u8BF7\u6C42\u53C2\u6570\u3001\u8BF7\u6C42\u5F02\u5E38\u3001\u4E1A\u52A1\u5F02\u5E38\u7B49\u52A8\u4F5C |
| **src/app/core/startup/startup.service.ts** | \u5F53\u4F60\u9700\u8981\u5728 Angular \u542F\u52A8\u524D\u6267\u884C\u4E00\u4E9B\u8FDC\u7A0B\u6570\u636E\uFF08\u4F8B\u5982\uFF1A\u5E94\u7528\u4FE1\u606F\u3001\u7528\u6237\u4FE1\u606F\u7B49\uFF09\u65F6\u975E\u5E38\u6709\u7528 |
| **src/app/layout** | \u5E03\u5C40\u76EE\u5F55\uFF0C\u5305\u542B\u57FA\u7840\u5E03\u5C40\u3001\u7A7A\u767D\u5E03\u5C40\u3001\u7528\u6237\u767B\u5F55\u5E03\u5C40 |
| **src/app/routes** | \u4E1A\u52A1\u6A21\u5757\uFF0C\u4F60\u7684\u6240\u6709\u4E1A\u52A1\u4EE3\u7801\u90FD\u5C06\u5728\u8FD9\u91CC |
| **src/app/shared/index.ts** | \u4E00\u4E9B\u9AD8\u9891\u7387\u5171\u4EAB\u7EC4\u4EF6\u7684\u96C6\u5408\uFF0C\u6307\u5F53\u4F60\u9700\u8981\u9488\u5BF9\u6574\u4E2A**\u4E1A\u52A1\u6A21\u5757\u90FD\u9700\u8981**\u4F7F\u7528\u7684\u4E00\u4E9B\u7B2C\u4E09\u65B9\u6A21\u5757\u3001\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u3001\u81EA\u5B9A\u4E49\u6307\u4EE4\uFF0C\u90FD\u5E94\u8BE5\u5B58\u5728\u8FD9\u91CC\u3002\u9664\u6B64\u4E4B\u5916\uFF0C\u9488\u5BF9 @delon & NG-ZORRO \u5206\u522B\u6784\u5EFA\u4E86 \`shared-delon.module.ts\`\u3001\`shared-zorro.module.ts\` \u4E24\u79CD\u6B21\u7EA7\u5171\u4EAB\u6A21\u5757\u7684\u5BFC\u5165\u3002 |
| **src/app/app.config.ts** | \u9879\u76EE\u5168\u5C40\u914D\u7F6E\u9879 |
| **src/environments** | \u5E94\u7528\u73AF\u5883\u53D8\u91CF\uFF0C\u5305\u542B\u4EE5\u4E0B\u503C\uFF1A\`SERVER_URL\` \u6240\u6709HTTP\u8BF7\u6C42\u7684\u524D\u7F00\uFF1B\`production\` \u662F\u5426\u751F\u4EA7\u73AF\u5883\uFF1B\`useHash\` \u8DEF\u7531\u662F\u5426useHash\u6A21\u5F0F |`}}};codes=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=o({type:n,selectors:[["docs-architecture"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&i(0,"app-docs",0),e&2&&a("codes",t.codes)("item",t.item)},dependencies:[r],encapsulation:2})};var h=class n{item={name:"auth",langs:["zh-CN"],content:{"zh-CN":{meta:{order:40,title:"\u7528\u6237\u8BA4\u8BC1",redirect:"/auth/getting-started",description:"",group:"Advance",path:"docs/auth.md",url:"/docs/auth/zh"},text:"",api:"",toc:[],raw:`---
order: 40
title:
  en-US: Auth
  zh-CN: \u7528\u6237\u8BA4\u8BC1
type: Advance
redirect: /auth/getting-started
---`}}};codes=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=o({type:n,selectors:[["docs-auth"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&i(0,"app-docs",0),e&2&&a("codes",t.codes)("item",t.item)},dependencies:[r],encapsulation:2})};var u=class n{item={name:"cache",langs:["zh-CN"],content:{"zh-CN":{meta:{order:70,title:"\u7F13\u5B58",redirect:"/cache/getting-started",description:"",group:"Advance",path:"docs/cache.md",url:"/docs/cache/zh"},text:"",api:"",toc:[],raw:`---
order: 70
title:
  en-US: Cache
  zh-CN: \u7F13\u5B58
type: Advance
redirect: /cache/getting-started
---`}}};codes=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=o({type:n,selectors:[["docs-cache"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&i(0,"app-docs",0),e&2&&a("codes",t.codes)("item",t.item)},dependencies:[r],encapsulation:2})};var g=class n{item={name:"changelog",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:100,title:"Change Log",tag:"{{version}}",description:"NG-ALAIN strictly follows Semantic Versioning 2.0.0.Weekly release: patch version at the end of every week for routine bugfix (anytime for urgent bugf...",group:"Basic",path:"docs/changelog.en-US.md",url:"/docs/changelog/en"},text:`<p>NG-ALAIN strictly follows <a href="http://semver.org/lang/zh-CN/" target="_blank" rel="noopener">Semantic Versioning 2.0.0</a>.</p>
<h4 id="release_schedule"><a class="lake-link"><i data-anchor="release_schedule"></i></a>Release Schedule</h4><ul>
<li>Weekly release: patch version at the end of every week for routine bugfix (anytime for urgent bugfix).</li>
<li>Monthly release: minor version at the end of every month for new features.</li>
<li>Major version release is not included in this schedule for breaking change and new features.</li>
</ul>
<hr>
<h1 id="lessa_href=https//githubcom/ng-alain/delon/compare/21202130_target=_blank_rel=noopenergreater2130less/agreater_2026-06-16"><a class="lake-link"><i data-anchor="lessa_href=https//githubcom/ng-alain/delon/compare/21202130_target=_blank_rel=noopenergreater2130less/agreater_2026-06-16"></i></a><a href="https://github.com/ng-alain/delon/compare/21.2.0...21.3.0" target="_blank" rel="noopener">21.3.0</a> (2026-06-16)</h1><h3 id="bug_fixes"><a class="lake-link"><i data-anchor="bug_fixes"></i></a>Bug Fixes</h3><ul>
<li><strong>theme:</strong> preserve sidebar collapsed state on page refresh (<a href="https://github.com/ng-alain/delon/issues/2037" target="_blank" rel="noopener">#2037</a>) (<a href="https://github.com/ng-alain/delon/commit/571b0b10565126c46d504069ce3f7f847c81840a" target="_blank" rel="noopener">571b0b1</a>)</li>
<li><strong>theme:</strong> replace cross-package relative style imports with package\u2026 (<a href="https://github.com/ng-alain/delon/issues/2039" target="_blank" rel="noopener">#2039</a>) (<a href="https://github.com/ng-alain/delon/commit/3e599e19181fbeed0f40b8388b6441c370330c74" target="_blank" rel="noopener">3e599e1</a>)</li>
</ul>
<h3 id="features"><a class="lake-link"><i data-anchor="features"></i></a>Features</h3><ul>
<li>integrate Tailwind CSS (<a href="https://github.com/ng-alain/delon/issues/2029" target="_blank" rel="noopener">#2029</a>) (<a href="https://github.com/ng-alain/delon/commit/281d8dd2be692476fd4c66ce003574c9ef92450f" target="_blank" rel="noopener">281d8dd</a>)</li>
<li><strong>sf:</strong> add expand/collapse (<a href="https://github.com/ng-alain/delon/issues/2034" target="_blank" rel="noopener">#2034</a>) (<a href="https://github.com/ng-alain/delon/commit/569e8ace582aebe1a59d85543e8404cdd9d0e00e" target="_blank" rel="noopener">569e8ac</a>)</li>
</ul>
<h1 id="lessa_href=https//githubcom/ng-alain/delon/compare/21102120_target=_blank_rel=noopenergreater2120less/agreater_2026-05-03"><a class="lake-link"><i data-anchor="lessa_href=https//githubcom/ng-alain/delon/compare/21102120_target=_blank_rel=noopenergreater2120less/agreater_2026-05-03"></i></a><a href="https://github.com/ng-alain/delon/compare/21.1.0...21.2.0" target="_blank" rel="noopener">21.2.0</a> (2026-05-03)</h1><h3 id="bug_fixes"><a class="lake-link"><i data-anchor="bug_fixes"></i></a>Bug Fixes</h3><ul>
<li><strong>form:</strong> string values \u200B\u200Bshould support the use of null and undefined (<a href="https://github.com/ng-alain/delon/issues/2024" target="_blank" rel="noopener">#2024</a>) (<a href="https://github.com/ng-alain/delon/commit/d99ad550a14848e335132f60827fb68ed9c61994" target="_blank" rel="noopener">d99ad55</a>)</li>
</ul>
<h3 id="features"><a class="lake-link"><i data-anchor="features"></i></a>Features</h3><ul>
<li><strong>mock:</strong> use &#64;faker-js/faker instead of mockjs (<a href="https://github.com/ng-alain/delon/issues/2021" target="_blank" rel="noopener">#2021</a>) (<a href="https://github.com/ng-alain/delon/commit/af1b2124c82b9f948ea265c21976f06e5688eefa" target="_blank" rel="noopener">af1b212</a>)</li>
</ul>
<h1 id="lessa_href=https//githubcom/ng-alain/delon/compare/21052110_target=_blank_rel=noopenergreater2110less/agreater_2026-03-26"><a class="lake-link"><i data-anchor="lessa_href=https//githubcom/ng-alain/delon/compare/21052110_target=_blank_rel=noopenergreater2110less/agreater_2026-03-26"></i></a><a href="https://github.com/ng-alain/delon/compare/21.0.5...21.1.0" target="_blank" rel="noopener">21.1.0</a> (2026-03-26)</h1><h3 id="bug_fixes"><a class="lake-link"><i data-anchor="bug_fixes"></i></a>Bug Fixes</h3><ul>
<li><strong>abc:reuse-tab:</strong> fix <code>NG0956</code> error (<a href="https://github.com/ng-alain/delon/issues/1996" target="_blank" rel="noopener">#1996</a>) (<a href="https://github.com/ng-alain/delon/commit/27e4d424260eb94ecc55401cba503fe07021f06f" target="_blank" rel="noopener">27e4d42</a>)</li>
<li><strong>abc:se:</strong> missing label element id attribute (<a href="https://github.com/ng-alain/delon/issues/1993" target="_blank" rel="noopener">#1993</a>) (<a href="https://github.com/ng-alain/delon/commit/61cbe7303887bd968f5e43ff49da3e27e93ee4c2" target="_blank" rel="noopener">61cbe73</a>)</li>
<li><strong>cli:</strong> update stylelint-order dependency version and remove placeholder for prettier-eslint (<a href="https://github.com/ng-alain/delon/issues/1998" target="_blank" rel="noopener">#1998</a>) (<a href="https://github.com/ng-alain/delon/commit/d43bb896558893b666b7ee181bd5add449904ae2" target="_blank" rel="noopener">d43bb89</a>)</li>
<li><strong>form:</strong> reset visible behavior in less zone (<a href="https://github.com/ng-alain/delon/issues/2007" target="_blank" rel="noopener">#2007</a>) (<a href="https://github.com/ng-alain/delon/commit/87d5df1692db9b2ff86836471329bf870e170777" target="_blank" rel="noopener">87d5df1</a>)</li>
<li><strong>from:</strong> fix incorrect <code>pathValue</code> returned by <code>formValueChange</code> (<a href="https://github.com/ng-alain/delon/issues/1997" target="_blank" rel="noopener">#1997</a>) (<a href="https://github.com/ng-alain/delon/commit/b610a963eba856e51a5757988bbb0f12c32597bd" target="_blank" rel="noopener">b610a96</a>)</li>
</ul>
<h3 id="features"><a class="lake-link"><i data-anchor="features"></i></a>Features</h3><ul>
<li>support less zone (<a href="https://github.com/ng-alain/delon/issues/1976" target="_blank" rel="noopener">#1976</a>) (<a href="https://github.com/ng-alain/delon/commit/d2fd43a08cbb9bfcee01efeaf01820321dd49884" target="_blank" rel="noopener">d2fd43a</a>)</li>
</ul>
<h2 id="lessa_href=https//githubcom/ng-alain/delon/compare/21042105_target=_blank_rel=noopenergreater2105less/agreater_2026-02-01"><a class="lake-link"><i data-anchor="lessa_href=https//githubcom/ng-alain/delon/compare/21042105_target=_blank_rel=noopenergreater2105less/agreater_2026-02-01"></i></a><a href="https://github.com/ng-alain/delon/compare/21.0.4...21.0.5" target="_blank" rel="noopener">21.0.5</a> (2026-02-01)</h2><h3 id="bug_fixes"><a class="lake-link"><i data-anchor="bug_fixes"></i></a>Bug Fixes</h3><ul>
<li><strong>abc:se,sg,sv:</strong> fix global config not working (<a href="https://github.com/ng-alain/delon/issues/1983" target="_blank" rel="noopener">#1983</a>) (<a href="https://github.com/ng-alain/delon/commit/1e28fdf562b9ad810554f8c6c3680f499a2c6e43" target="_blank" rel="noopener">1e28fdf</a>)</li>
<li><strong>theme:ModalHelper:</strong> fix <code>focus</code> can&#39;t working when \`nzNoAnimation\u2026 (<a href="https://github.com/ng-alain/delon/issues/1984" target="_blank" rel="noopener">#1984</a>) (<a href="https://github.com/ng-alain/delon/commit/55731fdc831b2326a5684543ae515609bbe1a661" target="_blank" rel="noopener">55731fd</a>)</li>
</ul>
<h2 id="lesssmallgreater2104_2026-01-28less/smallgreater"><a class="lake-link"><i data-anchor="lesssmallgreater2104_2026-01-28less/smallgreater"></i></a><small>21.0.4 (2026-01-28)</small></h2><ul>
<li>fix(abc:se,sg,sv): fix global config not working (#1980) (<a href="https://github.com/ng-alain/delon/commit/be765b4" target="_blank" rel="noopener">be765b4</a>), closes <a href="https://github.com/ng-alain/delon/issues/1980" target="_blank" rel="noopener">#1980</a></li>
</ul>
<h2 id="lesssmallgreater2103_2026-01-25less/smallgreater"><a class="lake-link"><i data-anchor="lesssmallgreater2103_2026-01-25less/smallgreater"></i></a><small>21.0.3 (2026-01-25)</small></h2><ul>
<li>fix(cli): fix missing dependencies version (#1978) (<a href="https://github.com/ng-alain/delon/commit/e5b5e02" target="_blank" rel="noopener">e5b5e02</a>), closes <a href="https://github.com/ng-alain/delon/issues/1978" target="_blank" rel="noopener">#1978</a></li>
</ul>
<h2 id="lesssmallgreater2102_2026-01-18less/smallgreater"><a class="lake-link"><i data-anchor="lesssmallgreater2102_2026-01-18less/smallgreater"></i></a><small>21.0.2 (2026-01-18)</small></h2><ul>
<li>fix(acl:if): fix NG0950 (#1974) (<a href="https://github.com/ng-alain/delon/commit/2cdef54" target="_blank" rel="noopener">2cdef54</a>), closes <a href="https://github.com/ng-alain/delon/issues/1974" target="_blank" rel="noopener">#1974</a></li>
<li>fix(cli): fix missing vitest config in <code>ng add ng-alain</code> (#1973) (<a href="https://github.com/ng-alain/delon/commit/f708066" target="_blank" rel="noopener">f708066</a>), closes <a href="https://github.com/ng-alain/delon/issues/1973" target="_blank" rel="noopener">#1973</a></li>
</ul>
<h2 id="lesssmallgreater2101_2026-01-17less/smallgreater"><a class="lake-link"><i data-anchor="lesssmallgreater2101_2026-01-17less/smallgreater"></i></a><small>21.0.1 (2026-01-17)</small></h2><ul>
<li>fix(cli): fix missing import <code>ReuseTabComponent</code> (#1970) (<a href="https://github.com/ng-alain/delon/commit/3fbafb1" target="_blank" rel="noopener">3fbafb1</a>), closes <a href="https://github.com/ng-alain/delon/issues/1970" target="_blank" rel="noopener">#1970</a></li>
<li>fix(cli): remove <code>provideAnimations</code> (#1971) (<a href="https://github.com/ng-alain/delon/commit/4c92bca" target="_blank" rel="noopener">4c92bca</a>), closes <a href="https://github.com/ng-alain/delon/issues/1971" target="_blank" rel="noopener">#1971</a></li>
</ul>
<h2 id="2100_2026-01-17"><a class="lake-link"><i data-anchor="2100_2026-01-17"></i></a>21.0.0 (2026-01-17)</h2><h3 id="code_refactoring"><a class="lake-link"><i data-anchor="code_refactoring"></i></a>Code Refactoring</h3><ul>
<li>refactor(*): use <code>nzVariant</code> instead of <code>nzBorderless</code> (#1944) (<a href="https://github.com/ng-alain/delon/commit/6e61fec" target="_blank" rel="noopener">6e61fec</a>), closes <a href="https://github.com/ng-alain/delon/issues/1944" target="_blank" rel="noopener">#1944</a></li>
</ul>
<h3 id="features"><a class="lake-link"><i data-anchor="features"></i></a>Features</h3><ul>
<li>feat(abc:date-picker): supports using string identifiers (#1954) (<a href="https://github.com/ng-alain/delon/commit/4cbac18" target="_blank" rel="noopener">4cbac18</a>), closes <a href="https://github.com/ng-alain/delon/issues/1954" target="_blank" rel="noopener">#1954</a></li>
<li>feat(abc:loading): add locale of <code>text</code> (#1959) (<a href="https://github.com/ng-alain/delon/commit/31fac3f" target="_blank" rel="noopener">31fac3f</a>), closes <a href="https://github.com/ng-alain/delon/issues/1959" target="_blank" rel="noopener">#1959</a></li>
<li>feat(abc:reuse-tab): <code>routeParamMatchMode</code> support custom function (#1952) (<a href="https://github.com/ng-alain/delon/commit/f3505e2" target="_blank" rel="noopener">f3505e2</a>), closes <a href="https://github.com/ng-alain/delon/issues/1952" target="_blank" rel="noopener">#1952</a></li>
<li>feat(abc:st): <code>filter</code> is null when call reset in <code>change</code> event (#1950) (<a href="https://github.com/ng-alain/delon/commit/891ff48" target="_blank" rel="noopener">891ff48</a>), closes <a href="https://github.com/ng-alain/delon/issues/1950" target="_blank" rel="noopener">#1950</a></li>
<li>feat(abc:st): add <code>page.checkboxIdMap</code> cache check data (#1951) (<a href="https://github.com/ng-alain/delon/commit/4144847" target="_blank" rel="noopener">4144847</a>), closes <a href="https://github.com/ng-alain/delon/issues/1951" target="_blank" rel="noopener">#1951</a></li>
<li>feat(module:i18n): add missing translations (#1955) (<a href="https://github.com/ng-alain/delon/commit/3cb28c5" target="_blank" rel="noopener">3cb28c5</a>), closes <a href="https://github.com/ng-alain/delon/issues/1955" target="_blank" rel="noopener">#1955</a></li>
<li>feat(theme:i18n): add <code>mergeData</code> method (#1945) (<a href="https://github.com/ng-alain/delon/commit/4f1a351" target="_blank" rel="noopener">4f1a351</a>), closes <a href="https://github.com/ng-alain/delon/issues/1945" target="_blank" rel="noopener">#1945</a></li>
<li>feat(cli): add <code>reuseTab</code> option in ng-add (#1961) (<a href="https://github.com/ng-alain/delon/commit/478f009" target="_blank" rel="noopener">478f009</a>), closes <a href="https://github.com/ng-alain/delon/issues/1961" target="_blank" rel="noopener">#1961</a></li>
</ul>
<h3 id="bug_fixes"><a class="lake-link"><i data-anchor="bug_fixes"></i></a>Bug Fixes</h3><ul>
<li>fix(abc:st): can&#39;t render button when <code>children</code> is empty array (#1947) (<a href="https://github.com/ng-alain/delon/commit/a4be8d1" target="_blank" rel="noopener">a4be8d1</a>), closes <a href="https://github.com/ng-alain/delon/issues/1947" target="_blank" rel="noopener">#1947</a></li>
<li>fix(form): fix <code>path</code> invalid value in <code>formValueChange</code> (#1953) (<a href="https://github.com/ng-alain/delon/commit/86a9b4e" target="_blank" rel="noopener">86a9b4e</a>), closes <a href="https://github.com/ng-alain/delon/issues/1953" target="_blank" rel="noopener">#1953</a></li>
<li>fix(theme:setting-drawer): fix style (#1968) (<a href="https://github.com/ng-alain/delon/commit/f82dc34" target="_blank" rel="noopener">f82dc34</a>), closes <a href="https://github.com/ng-alain/delon/issues/1968" target="_blank" rel="noopener">#1968</a></li>
</ul>
<h2 id="old_versions"><a class="lake-link"><i data-anchor="old_versions"></i></a>Old Versions</h2><p>All releases notes can be found <a href="https://github.com/ng-alain/ng-alain/releases" target="_blank" rel="noopener">here</a>.</p>
`,api:"",toc:[{id:"",title:"",children:[{id:"bug_fixes",title:"Bug Fixes"}]},{id:"",title:""},{id:"",title:""},{id:"",title:""},{id:"",title:""},{id:"2100_2026-01-17",title:"21.0.0 (2026-01-17)",children:[{id:"code_refactoring",title:"Code Refactoring"},{id:"features",title:"Features"},{id:"bug_fixes",title:"Bug Fixes"}]},{id:"old_versions",title:"Old Versions"}],raw:`---
order: 100
title: Change Log
type: Basic
tag: '{{version}}'
---

NG-ALAIN strictly follows [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/).

#### Release Schedule

* Weekly release: patch version at the end of every week for routine bugfix (anytime for urgent bugfix).
* Monthly release: minor version at the end of every month for new features.
* Major version release is not included in this schedule for breaking change and new features.

---

# [21.3.0](https://github.com/ng-alain/delon/compare/21.2.0...21.3.0) (2026-06-16)

### Bug Fixes

* **theme:** preserve sidebar collapsed state on page refresh ([#2037](https://github.com/ng-alain/delon/issues/2037)) ([571b0b1](https://github.com/ng-alain/delon/commit/571b0b10565126c46d504069ce3f7f847c81840a))
* **theme:** replace cross-package relative style imports with package\u2026 ([#2039](https://github.com/ng-alain/delon/issues/2039)) ([3e599e1](https://github.com/ng-alain/delon/commit/3e599e19181fbeed0f40b8388b6441c370330c74))

### Features

* integrate Tailwind CSS ([#2029](https://github.com/ng-alain/delon/issues/2029)) ([281d8dd](https://github.com/ng-alain/delon/commit/281d8dd2be692476fd4c66ce003574c9ef92450f))
* **sf:** add expand/collapse ([#2034](https://github.com/ng-alain/delon/issues/2034)) ([569e8ac](https://github.com/ng-alain/delon/commit/569e8ace582aebe1a59d85543e8404cdd9d0e00e))

# [21.2.0](https://github.com/ng-alain/delon/compare/21.1.0...21.2.0) (2026-05-03)

### Bug Fixes

* **form:** string values \u200B\u200Bshould support the use of null and undefined ([#2024](https://github.com/ng-alain/delon/issues/2024)) ([d99ad55](https://github.com/ng-alain/delon/commit/d99ad550a14848e335132f60827fb68ed9c61994))

### Features

* **mock:** use @faker-js/faker instead of mockjs ([#2021](https://github.com/ng-alain/delon/issues/2021)) ([af1b212](https://github.com/ng-alain/delon/commit/af1b2124c82b9f948ea265c21976f06e5688eefa))


# [21.1.0](https://github.com/ng-alain/delon/compare/21.0.5...21.1.0) (2026-03-26)

### Bug Fixes

* **abc:reuse-tab:** fix \`NG0956\` error ([#1996](https://github.com/ng-alain/delon/issues/1996)) ([27e4d42](https://github.com/ng-alain/delon/commit/27e4d424260eb94ecc55401cba503fe07021f06f))
* **abc:se:** missing label element id attribute ([#1993](https://github.com/ng-alain/delon/issues/1993)) ([61cbe73](https://github.com/ng-alain/delon/commit/61cbe7303887bd968f5e43ff49da3e27e93ee4c2))
* **cli:** update stylelint-order dependency version and remove placeholder for prettier-eslint ([#1998](https://github.com/ng-alain/delon/issues/1998)) ([d43bb89](https://github.com/ng-alain/delon/commit/d43bb896558893b666b7ee181bd5add449904ae2))
* **form:** reset visible behavior in less zone ([#2007](https://github.com/ng-alain/delon/issues/2007)) ([87d5df1](https://github.com/ng-alain/delon/commit/87d5df1692db9b2ff86836471329bf870e170777))
* **from:** fix incorrect \`pathValue\` returned by \`formValueChange\` ([#1997](https://github.com/ng-alain/delon/issues/1997)) ([b610a96](https://github.com/ng-alain/delon/commit/b610a963eba856e51a5757988bbb0f12c32597bd))

### Features

* support less zone ([#1976](https://github.com/ng-alain/delon/issues/1976)) ([d2fd43a](https://github.com/ng-alain/delon/commit/d2fd43a08cbb9bfcee01efeaf01820321dd49884))


## [21.0.5](https://github.com/ng-alain/delon/compare/21.0.4...21.0.5) (2026-02-01)

### Bug Fixes

* **abc:se,sg,sv:** fix global config not working ([#1983](https://github.com/ng-alain/delon/issues/1983)) ([1e28fdf](https://github.com/ng-alain/delon/commit/1e28fdf562b9ad810554f8c6c3680f499a2c6e43))
* **theme:ModalHelper:** fix \`focus\` can't working when \`nzNoAnimation\u2026 ([#1984](https://github.com/ng-alain/delon/issues/1984)) ([55731fd](https://github.com/ng-alain/delon/commit/55731fdc831b2326a5684543ae515609bbe1a661))


## <small>21.0.4 (2026-01-28)</small>

* fix(abc:se,sg,sv): fix global config not working (#1980) ([be765b4](https://github.com/ng-alain/delon/commit/be765b4)), closes [#1980](https://github.com/ng-alain/delon/issues/1980)

## <small>21.0.3 (2026-01-25)</small>

* fix(cli): fix missing dependencies version (#1978) ([e5b5e02](https://github.com/ng-alain/delon/commit/e5b5e02)), closes [#1978](https://github.com/ng-alain/delon/issues/1978)

## <small>21.0.2 (2026-01-18)</small>

* fix(acl:if): fix NG0950 (#1974) ([2cdef54](https://github.com/ng-alain/delon/commit/2cdef54)), closes [#1974](https://github.com/ng-alain/delon/issues/1974)
* fix(cli): fix missing vitest config in \`ng add ng-alain\` (#1973) ([f708066](https://github.com/ng-alain/delon/commit/f708066)), closes [#1973](https://github.com/ng-alain/delon/issues/1973)


## <small>21.0.1 (2026-01-17)</small>

* fix(cli): fix missing import \`ReuseTabComponent\` (#1970) ([3fbafb1](https://github.com/ng-alain/delon/commit/3fbafb1)), closes [#1970](https://github.com/ng-alain/delon/issues/1970)
* fix(cli): remove \`provideAnimations\` (#1971) ([4c92bca](https://github.com/ng-alain/delon/commit/4c92bca)), closes [#1971](https://github.com/ng-alain/delon/issues/1971)


## 21.0.0 (2026-01-17)

### Code Refactoring

* refactor(*): use \`nzVariant\` instead of \`nzBorderless\` (#1944) ([6e61fec](https://github.com/ng-alain/delon/commit/6e61fec)), closes [#1944](https://github.com/ng-alain/delon/issues/1944)

### Features

* feat(abc:date-picker): supports using string identifiers (#1954) ([4cbac18](https://github.com/ng-alain/delon/commit/4cbac18)), closes [#1954](https://github.com/ng-alain/delon/issues/1954)
* feat(abc:loading): add locale of \`text\` (#1959) ([31fac3f](https://github.com/ng-alain/delon/commit/31fac3f)), closes [#1959](https://github.com/ng-alain/delon/issues/1959)
* feat(abc:reuse-tab): \`routeParamMatchMode\` support custom function (#1952) ([f3505e2](https://github.com/ng-alain/delon/commit/f3505e2)), closes [#1952](https://github.com/ng-alain/delon/issues/1952)
* feat(abc:st): \`filter\` is null when call reset in \`change\` event (#1950) ([891ff48](https://github.com/ng-alain/delon/commit/891ff48)), closes [#1950](https://github.com/ng-alain/delon/issues/1950)
* feat(abc:st): add \`page.checkboxIdMap\` cache check data (#1951) ([4144847](https://github.com/ng-alain/delon/commit/4144847)), closes [#1951](https://github.com/ng-alain/delon/issues/1951)
* feat(module:i18n): add missing translations (#1955) ([3cb28c5](https://github.com/ng-alain/delon/commit/3cb28c5)), closes [#1955](https://github.com/ng-alain/delon/issues/1955)
* feat(theme:i18n): add \`mergeData\` method (#1945) ([4f1a351](https://github.com/ng-alain/delon/commit/4f1a351)), closes [#1945](https://github.com/ng-alain/delon/issues/1945)
* feat(cli): add \`reuseTab\` option in ng-add (#1961) ([478f009](https://github.com/ng-alain/delon/commit/478f009)), closes [#1961](https://github.com/ng-alain/delon/issues/1961)

### Bug Fixes

* fix(abc:st): can't render button when \`children\` is empty array (#1947) ([a4be8d1](https://github.com/ng-alain/delon/commit/a4be8d1)), closes [#1947](https://github.com/ng-alain/delon/issues/1947)
* fix(form): fix \`path\` invalid value in \`formValueChange\` (#1953) ([86a9b4e](https://github.com/ng-alain/delon/commit/86a9b4e)), closes [#1953](https://github.com/ng-alain/delon/issues/1953)
* fix(theme:setting-drawer): fix style (#1968) ([f82dc34](https://github.com/ng-alain/delon/commit/f82dc34)), closes [#1968](https://github.com/ng-alain/delon/issues/1968)


## Old Versions

All releases notes can be found [here](https://github.com/ng-alain/ng-alain/releases).`},"zh-CN":{meta:{order:100,title:"\u66F4\u65B0\u65E5\u5FD7",tag:"{{version}}",description:"NG-ALAIN \u4E25\u683C\u9075\u5FAA Semantic Versioning 2.0.0 \u8BED\u4E49\u5316\u7248\u672C\u89C4\u8303\u3002\u4FEE\u8BA2\u7248\u672C\u53F7\uFF1A\u6BCF\u5468\u672B\u4F1A\u8FDB\u884C\u65E5\u5E38 bugfix \u66F4\u65B0\u3002\uFF08\u5982\u679C\u6709\u7D27\u6025\u7684 bugfix\uFF0C\u5219\u4EFB\u4F55\u65F6\u5019\u90FD\u53EF\u53D1\u5E03\uFF09\u6B21\u7248\u672C\u53F7\uFF1A\u6BCF\u6708\u53D1\u5E03\u4E00\u4E2A\u5E26\u6709\u65B0\u7279\u6027\u7684\u5411\u4E0B\u517C\u5BB9\u7684\u7248\u672C\u3002\u4E3B\u7248\u672C\u53F7\uFF1A\u542B\u6709\u7834\u574F\u6027\u66F4\u65B0\u548C\u65B0\u7279\u6027\uFF0C\u4E0D\u5728\u53D1\u5E03\u5468\u671F\u5185\u3002th...",group:"Basic",path:"docs/changelog.zh-CN.md",url:"/docs/changelog/zh"},text:`<p>NG-ALAIN \u4E25\u683C\u9075\u5FAA <a href="http://semver.org/lang/zh-CN/" target="_blank" rel="noopener">Semantic Versioning 2.0.0</a> \u8BED\u4E49\u5316\u7248\u672C\u89C4\u8303\u3002</p>
<h4 id="\u53D1\u5E03\u5468\u671F"><a class="lake-link"><i data-anchor="\u53D1\u5E03\u5468\u671F"></i></a>\u53D1\u5E03\u5468\u671F</h4><ul>
<li>\u4FEE\u8BA2\u7248\u672C\u53F7\uFF1A\u6BCF\u5468\u672B\u4F1A\u8FDB\u884C\u65E5\u5E38 bugfix \u66F4\u65B0\u3002\uFF08\u5982\u679C\u6709\u7D27\u6025\u7684 bugfix\uFF0C\u5219\u4EFB\u4F55\u65F6\u5019\u90FD\u53EF\u53D1\u5E03\uFF09</li>
<li>\u6B21\u7248\u672C\u53F7\uFF1A\u6BCF\u6708\u53D1\u5E03\u4E00\u4E2A\u5E26\u6709\u65B0\u7279\u6027\u7684\u5411\u4E0B\u517C\u5BB9\u7684\u7248\u672C\u3002</li>
<li>\u4E3B\u7248\u672C\u53F7\uFF1A\u542B\u6709\u7834\u574F\u6027\u66F4\u65B0\u548C\u65B0\u7279\u6027\uFF0C\u4E0D\u5728\u53D1\u5E03\u5468\u671F\u5185\u3002</li>
</ul>
<hr>
<h1 id="lessa_href=https//githubcom/ng-alain/delon/compare/21202130_target=_blank_rel=noopenergreater2130less/agreater_2026-06-16"><a class="lake-link"><i data-anchor="lessa_href=https//githubcom/ng-alain/delon/compare/21202130_target=_blank_rel=noopenergreater2130less/agreater_2026-06-16"></i></a><a href="https://github.com/ng-alain/delon/compare/21.2.0...21.3.0" target="_blank" rel="noopener">21.3.0</a> (2026-06-16)</h1><h3 id="bug_fixes"><a class="lake-link"><i data-anchor="bug_fixes"></i></a>Bug Fixes</h3><ul>
<li><strong>theme:</strong> \u4FEE\u590D\u9875\u9762\u5237\u65B0\u65F6\u4FA7\u8FB9\u680F\u6298\u53E0\u72B6\u6001\u7684\u4FDD\u6301 (<a href="https://github.com/ng-alain/delon/issues/2037" target="_blank" rel="noopener">#2037</a>) (<a href="https://github.com/ng-alain/delon/commit/571b0b10565126c46d504069ce3f7f847c81840a" target="_blank" rel="noopener">571b0b1</a>)</li>
<li><strong>theme:</strong> \u5C06\u8DE8\u5305\u7684\u76F8\u5BF9\u6837\u5F0F\u5BFC\u5165\u66FF\u6362\u4E3A\u5305\u540D\u5BFC\u5165 (<a href="https://github.com/ng-alain/delon/issues/2039" target="_blank" rel="noopener">#2039</a>) (<a href="https://github.com/ng-alain/delon/commit/3e599e19181fbeed0f40b8388b6441c370330c74" target="_blank" rel="noopener">3e599e1</a>)</li>
</ul>
<h3 id="features"><a class="lake-link"><i data-anchor="features"></i></a>Features</h3><ul>
<li>\u96C6\u6210 Tailwind CSS (<a href="https://github.com/ng-alain/delon/issues/2029" target="_blank" rel="noopener">#2029</a>) (<a href="https://github.com/ng-alain/delon/commit/281d8dd2be692476fd4c66ce003574c9ef92450f" target="_blank" rel="noopener">281d8dd</a>)</li>
<li><strong>sf:</strong> \u65B0\u589E\u5C55\u5F00/\u6298\u53E0 (<a href="https://github.com/ng-alain/delon/issues/2034" target="_blank" rel="noopener">#2034</a>) (<a href="https://github.com/ng-alain/delon/commit/569e8ace582aebe1a59d85543e8404cdd9d0e00e" target="_blank" rel="noopener">569e8ac</a>)</li>
</ul>
<h1 id="lessa_href=https//githubcom/ng-alain/delon/compare/21102120_target=_blank_rel=noopenergreater2120less/agreater_2026-05-03"><a class="lake-link"><i data-anchor="lessa_href=https//githubcom/ng-alain/delon/compare/21102120_target=_blank_rel=noopenergreater2120less/agreater_2026-05-03"></i></a><a href="https://github.com/ng-alain/delon/compare/21.1.0...21.2.0" target="_blank" rel="noopener">21.2.0</a> (2026-05-03)</h1><h3 id="bug_fixes"><a class="lake-link"><i data-anchor="bug_fixes"></i></a>Bug Fixes</h3><ul>
<li><strong>form:</strong> \u5B57\u7B26\u4E32\u503C\u5E94\u652F\u6301\u4F7F\u7528 <code>null</code> \u548C <code>undefined</code> \u503C (<a href="https://github.com/ng-alain/delon/issues/2024" target="_blank" rel="noopener">#2024</a>) (<a href="https://github.com/ng-alain/delon/commit/d99ad550a14848e335132f60827fb68ed9c61994" target="_blank" rel="noopener">d99ad55</a>)</li>
</ul>
<h3 id="features"><a class="lake-link"><i data-anchor="features"></i></a>Features</h3><ul>
<li><strong>mock:</strong> \u4F7F\u7528 <code>&#64;faker-js/faker</code> \u66FF\u4EE3 <code>mockjs</code> (<a href="https://github.com/ng-alain/delon/issues/2021" target="_blank" rel="noopener">#2021</a>) (<a href="https://github.com/ng-alain/delon/commit/af1b2124c82b9f948ea265c21976f06e5688eefa" target="_blank" rel="noopener">af1b212</a>)</li>
</ul>
<h1 id="lessa_href=https//githubcom/ng-alain/delon/compare/21052110_target=_blank_rel=noopenergreater2110less/agreater_2026-03-26"><a class="lake-link"><i data-anchor="lessa_href=https//githubcom/ng-alain/delon/compare/21052110_target=_blank_rel=noopenergreater2110less/agreater_2026-03-26"></i></a><a href="https://github.com/ng-alain/delon/compare/21.0.5...21.1.0" target="_blank" rel="noopener">21.1.0</a> (2026-03-26)</h1><h3 id="bug_fixes"><a class="lake-link"><i data-anchor="bug_fixes"></i></a>Bug Fixes</h3><ul>
<li><strong>abc:reuse-tab:</strong> \u4FEE\u590D <code>NG0956</code> \u9519\u8BEF (<a href="https://github.com/ng-alain/delon/issues/1996" target="_blank" rel="noopener">#1996</a>) (<a href="https://github.com/ng-alain/delon/commit/27e4d424260eb94ecc55401cba503fe07021f06f" target="_blank" rel="noopener">27e4d42</a>)</li>
<li><strong>abc:se:</strong> \u4FEE\u590D label \u65E0\u6CD5\u89E6\u53D1\u7126\u70B9 (<a href="https://github.com/ng-alain/delon/issues/1993" target="_blank" rel="noopener">#1993</a>) (<a href="https://github.com/ng-alain/delon/commit/61cbe7303887bd968f5e43ff49da3e27e93ee4c2" target="_blank" rel="noopener">61cbe73</a>)</li>
<li><strong>cli:</strong> \u4FEE\u590D stylelint-order \u7248\u672C\u4F9D\u8D56\u95EE\u9898 (<a href="https://github.com/ng-alain/delon/issues/1998" target="_blank" rel="noopener">#1998</a>) (<a href="https://github.com/ng-alain/delon/commit/d43bb896558893b666b7ee181bd5add449904ae2" target="_blank" rel="noopener">d43bb89</a>)</li>
<li><strong>form:</strong> \u4FEE\u590D Less zone \u6A21\u5F0F\u4E0B visible \u884C\u4E3A\u5931\u6548 (<a href="https://github.com/ng-alain/delon/issues/2007" target="_blank" rel="noopener">#2007</a>) (<a href="https://github.com/ng-alain/delon/commit/87d5df1692db9b2ff86836471329bf870e170777" target="_blank" rel="noopener">87d5df1</a>)</li>
<li><strong>from:</strong> \u4FEE\u590D <code>formValueChange</code> \u4E8B\u4EF6\u7684 <code>pathValue</code> \u503C\u4E0D\u6B63\u786E (<a href="https://github.com/ng-alain/delon/issues/1997" target="_blank" rel="noopener">#1997</a>) (<a href="https://github.com/ng-alain/delon/commit/b610a963eba856e51a5757988bbb0f12c32597bd" target="_blank" rel="noopener">b610a96</a>)</li>
</ul>
<h3 id="features"><a class="lake-link"><i data-anchor="features"></i></a>Features</h3><ul>
<li>\u811A\u672C\u624B\u67B6 Less zone \u4F18\u5148 (<a href="https://github.com/ng-alain/delon/issues/1976" target="_blank" rel="noopener">#1976</a>) (<a href="https://github.com/ng-alain/delon/commit/d2fd43a08cbb9bfcee01efeaf01820321dd49884" target="_blank" rel="noopener">d2fd43a</a>)</li>
</ul>
<h2 id="lessa_href=https//githubcom/ng-alain/delon/compare/21042105_target=_blank_rel=noopenergreater2105less/agreater_2026-02-01"><a class="lake-link"><i data-anchor="lessa_href=https//githubcom/ng-alain/delon/compare/21042105_target=_blank_rel=noopenergreater2105less/agreater_2026-02-01"></i></a><a href="https://github.com/ng-alain/delon/compare/21.0.4...21.0.5" target="_blank" rel="noopener">21.0.5</a> (2026-02-01)</h2><h3 id="bug_fixes"><a class="lake-link"><i data-anchor="bug_fixes"></i></a>Bug Fixes</h3><ul>
<li><strong>abc:se,sg,sv:</strong> fix global config not working (<a href="https://github.com/ng-alain/delon/issues/1983" target="_blank" rel="noopener">#1983</a>) (<a href="https://github.com/ng-alain/delon/commit/1e28fdf562b9ad810554f8c6c3680f499a2c6e43" target="_blank" rel="noopener">1e28fdf</a>)</li>
<li><strong>theme:ModalHelper:</strong> \u4FEE\u590D\u5F53 <code>nzNoAnimation</code> \u4E3A <code>ture</code> \u65F6 <code>focus</code> \u65E0\u6CD5\u5DE5\u4F5C (<a href="https://github.com/ng-alain/delon/issues/1984" target="_blank" rel="noopener">#1984</a>) (<a href="https://github.com/ng-alain/delon/commit/55731fdc831b2326a5684543ae515609bbe1a661" target="_blank" rel="noopener">55731fd</a>)</li>
</ul>
<h2 id="lesssmallgreater2104_2026-01-28less/smallgreater"><a class="lake-link"><i data-anchor="lesssmallgreater2104_2026-01-28less/smallgreater"></i></a><small>21.0.4 (2026-01-28)</small></h2><ul>
<li>fix(abc:se,sg,sv): \u4FEE\u590D\u5168\u5C40\u914D\u7F6E\u65E0\u6CD5\u5DE5\u4F5C (#1980) (<a href="https://github.com/ng-alain/delon/commit/be765b4" target="_blank" rel="noopener">be765b4</a>), closes <a href="https://github.com/ng-alain/delon/issues/1980" target="_blank" rel="noopener">#1980</a></li>
</ul>
<h2 id="lesssmallgreater2103_2026-01-25less/smallgreater"><a class="lake-link"><i data-anchor="lesssmallgreater2103_2026-01-25less/smallgreater"></i></a><small>21.0.3 (2026-01-25)</small></h2><ul>
<li>fix(cli): \u4FEE\u590D <code>ng add</code> \u751F\u6210\u7684\u4F9D\u8D56\u7248\u672C\u53F7\u4E0D\u51C6\u786E (#1978) (<a href="https://github.com/ng-alain/delon/commit/e5b5e02" target="_blank" rel="noopener">e5b5e02</a>), closes <a href="https://github.com/ng-alain/delon/issues/1978" target="_blank" rel="noopener">#1978</a></li>
</ul>
<h2 id="lesssmallgreater2102_2026-01-18less/smallgreater"><a class="lake-link"><i data-anchor="lesssmallgreater2102_2026-01-18less/smallgreater"></i></a><small>21.0.2 (2026-01-18)</small></h2><ul>
<li>fix(acl:if): \u4FEE\u590D NG0950 \u9519\u8BEF (#1974) (<a href="https://github.com/ng-alain/delon/commit/2cdef54" target="_blank" rel="noopener">2cdef54</a>), closes <a href="https://github.com/ng-alain/delon/issues/1974" target="_blank" rel="noopener">#1974</a></li>
<li>fix(cli): \u4FEE\u590D <code>ng add ng-alain</code> \u7F3A\u5C11 vitest \u914D\u7F6E (#1973) (<a href="https://github.com/ng-alain/delon/commit/f708066" target="_blank" rel="noopener">f708066</a>), closes <a href="https://github.com/ng-alain/delon/issues/1973" target="_blank" rel="noopener">#1973</a></li>
</ul>
<h2 id="lesssmallgreater2101_2026-01-17less/smallgreater"><a class="lake-link"><i data-anchor="lesssmallgreater2101_2026-01-17less/smallgreater"></i></a><small>21.0.1 (2026-01-17)</small></h2><ul>
<li>fix(cli): \u4FEE\u590D\u7F3A\u5C11 <code>ReuseTabComponent</code> \u5BFC\u5165 (#1970) (<a href="https://github.com/ng-alain/delon/commit/3fbafb1" target="_blank" rel="noopener">3fbafb1</a>), closes <a href="https://github.com/ng-alain/delon/issues/1970" target="_blank" rel="noopener">#1970</a></li>
<li>fix(cli): \u4FEE\u590D\u79FB\u9664 <code>provideAnimations</code> (#1971) (<a href="https://github.com/ng-alain/delon/commit/4c92bca" target="_blank" rel="noopener">4c92bca</a>), closes <a href="https://github.com/ng-alain/delon/issues/1971" target="_blank" rel="noopener">#1971</a></li>
</ul>
<h2 id="2100_2026-01-17"><a class="lake-link"><i data-anchor="2100_2026-01-17"></i></a>21.0.0 (2026-01-17)</h2><h3 id="code_refactoring"><a class="lake-link"><i data-anchor="code_refactoring"></i></a>Code Refactoring</h3><ul>
<li>refactor(*): \u4F7F\u7528 <code>nzVariant</code> \u66FF\u4EE3 <code>nzBorderless</code> (#1944) (<a href="https://github.com/ng-alain/delon/commit/6e61fec" target="_blank" rel="noopener">6e61fec</a>), closes <a href="https://github.com/ng-alain/delon/issues/1944" target="_blank" rel="noopener">#1944</a></li>
</ul>
<h3 id="features"><a class="lake-link"><i data-anchor="features"></i></a>Features</h3><ul>
<li>feat(abc:date-picker): \u65B0\u589E\u4F7F\u7528\u5B57\u7B26\u4E32\u6807\u8BC6\u6765\u66FF\u4EE3\u5FEB\u6377\u8F93\u5165 (#1954) (<a href="https://github.com/ng-alain/delon/commit/4cbac18" target="_blank" rel="noopener">4cbac18</a>), closes <a href="https://github.com/ng-alain/delon/issues/1954" target="_blank" rel="noopener">#1954</a></li>
<li>feat(abc:loading): \u65B0\u589E <code>text</code> \u56FD\u9645\u5316 (#1959) (<a href="https://github.com/ng-alain/delon/commit/31fac3f" target="_blank" rel="noopener">31fac3f</a>), closes <a href="https://github.com/ng-alain/delon/issues/1959" target="_blank" rel="noopener">#1959</a></li>
<li>feat(abc:reuse-tab): \u65B0\u589E <code>routeParamMatchMode</code> \u652F\u6301\u81EA\u5B9A\u4E49\u6A21\u5F0F (#1952) (<a href="https://github.com/ng-alain/delon/commit/f3505e2" target="_blank" rel="noopener">f3505e2</a>), closes <a href="https://github.com/ng-alain/delon/issues/1952" target="_blank" rel="noopener">#1952</a></li>
<li>feat(abc:st): \u65B0\u589E\u91CD\u7F6E <code>filter</code> \u65F6 <code>change</code> \u4E8B\u4EF6\u7684 <code>filter</code> \u4E3A <code>null</code> (#1950) (<a href="https://github.com/ng-alain/delon/commit/891ff48" target="_blank" rel="noopener">891ff48</a>), closes <a href="https://github.com/ng-alain/delon/issues/1950" target="_blank" rel="noopener">#1950</a></li>
<li>feat(abc:st): \u65B0\u589E <code>page.checkboxIdMap</code> \u7528\u4E8E\u7F13\u5B58\u9009\u62E9\u9879\u6570\u636E (#1951) (<a href="https://github.com/ng-alain/delon/commit/4144847" target="_blank" rel="noopener">4144847</a>), closes <a href="https://github.com/ng-alain/delon/issues/1951" target="_blank" rel="noopener">#1951</a></li>
<li>feat(module:i18n): \u65B0\u589E\u82E5\u5E72\u4E22\u5931\u7FFB\u8BD1 (#1955) (<a href="https://github.com/ng-alain/delon/commit/3cb28c5" target="_blank" rel="noopener">3cb28c5</a>), closes <a href="https://github.com/ng-alain/delon/issues/1955" target="_blank" rel="noopener">#1955</a></li>
<li>feat(theme:i18n): \u65B0\u589E <code>mergeData</code> \u65B9\u6CD5 (#1945) (<a href="https://github.com/ng-alain/delon/commit/4f1a351" target="_blank" rel="noopener">4f1a351</a>), closes <a href="https://github.com/ng-alain/delon/issues/1945" target="_blank" rel="noopener">#1945</a></li>
<li>feat(cli): <code>ng add</code> \u65B0\u589E <code>reuseTab</code> \u9009\u9879 (#1961) (<a href="https://github.com/ng-alain/delon/commit/478f009" target="_blank" rel="noopener">478f009</a>), closes <a href="https://github.com/ng-alain/delon/issues/1961" target="_blank" rel="noopener">#1961</a></li>
</ul>
<h3 id="bug_fixes"><a class="lake-link"><i data-anchor="bug_fixes"></i></a>Bug Fixes</h3><ul>
<li>fix(abc:st): \u4FEE\u590D\u5F53 <code>children</code> \u4E3A\u7A7A\u6570\u7EC4\u65F6\u4E0D\u5E94\u8BE5\u663E\u793A\u6309\u94AE (#1947) (<a href="https://github.com/ng-alain/delon/commit/a4be8d1" target="_blank" rel="noopener">a4be8d1</a>), closes <a href="https://github.com/ng-alain/delon/issues/1947" target="_blank" rel="noopener">#1947</a></li>
<li>fix(form): \u4FEE\u590D <code>formValueChange.path</code> \u53C2\u6570\u6CA1\u6709\u8FD4\u56DE\u503C (#1953) (<a href="https://github.com/ng-alain/delon/commit/86a9b4e" target="_blank" rel="noopener">86a9b4e</a>), closes <a href="https://github.com/ng-alain/delon/issues/1953" target="_blank" rel="noopener">#1953</a></li>
<li>fix(theme:setting-drawer): \u4FEE\u590D\u6837\u5F0F (#1968) (<a href="https://github.com/ng-alain/delon/commit/f82dc34" target="_blank" rel="noopener">f82dc34</a>), closes <a href="https://github.com/ng-alain/delon/issues/1968" target="_blank" rel="noopener">#1968</a></li>
</ul>
<h2 id="old_versions"><a class="lake-link"><i data-anchor="old_versions"></i></a>Old Versions</h2><p>All releases notes can be found <a href="https://github.com/ng-alain/ng-alain/releases" target="_blank" rel="noopener">here</a>.</p>
`,api:"",toc:[{id:"",title:"",children:[{id:"bug_fixes",title:"Bug Fixes"}]},{id:"",title:""},{id:"",title:""},{id:"",title:""},{id:"",title:""},{id:"2100_2026-01-17",title:"21.0.0 (2026-01-17)",children:[{id:"code_refactoring",title:"Code Refactoring"},{id:"features",title:"Features"},{id:"bug_fixes",title:"Bug Fixes"}]},{id:"old_versions",title:"Old Versions"}],raw:`---
order: 100
title: \u66F4\u65B0\u65E5\u5FD7
type: Basic
tag: '{{version}}'
---

NG-ALAIN \u4E25\u683C\u9075\u5FAA [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) \u8BED\u4E49\u5316\u7248\u672C\u89C4\u8303\u3002

#### \u53D1\u5E03\u5468\u671F

* \u4FEE\u8BA2\u7248\u672C\u53F7\uFF1A\u6BCF\u5468\u672B\u4F1A\u8FDB\u884C\u65E5\u5E38 bugfix \u66F4\u65B0\u3002\uFF08\u5982\u679C\u6709\u7D27\u6025\u7684 bugfix\uFF0C\u5219\u4EFB\u4F55\u65F6\u5019\u90FD\u53EF\u53D1\u5E03\uFF09
* \u6B21\u7248\u672C\u53F7\uFF1A\u6BCF\u6708\u53D1\u5E03\u4E00\u4E2A\u5E26\u6709\u65B0\u7279\u6027\u7684\u5411\u4E0B\u517C\u5BB9\u7684\u7248\u672C\u3002
* \u4E3B\u7248\u672C\u53F7\uFF1A\u542B\u6709\u7834\u574F\u6027\u66F4\u65B0\u548C\u65B0\u7279\u6027\uFF0C\u4E0D\u5728\u53D1\u5E03\u5468\u671F\u5185\u3002

---

# [21.3.0](https://github.com/ng-alain/delon/compare/21.2.0...21.3.0) (2026-06-16)

### Bug Fixes

* **theme:** \u4FEE\u590D\u9875\u9762\u5237\u65B0\u65F6\u4FA7\u8FB9\u680F\u6298\u53E0\u72B6\u6001\u7684\u4FDD\u6301 ([#2037](https://github.com/ng-alain/delon/issues/2037)) ([571b0b1](https://github.com/ng-alain/delon/commit/571b0b10565126c46d504069ce3f7f847c81840a))
* **theme:** \u5C06\u8DE8\u5305\u7684\u76F8\u5BF9\u6837\u5F0F\u5BFC\u5165\u66FF\u6362\u4E3A\u5305\u540D\u5BFC\u5165 ([#2039](https://github.com/ng-alain/delon/issues/2039)) ([3e599e1](https://github.com/ng-alain/delon/commit/3e599e19181fbeed0f40b8388b6441c370330c74))

### Features

* \u96C6\u6210 Tailwind CSS ([#2029](https://github.com/ng-alain/delon/issues/2029)) ([281d8dd](https://github.com/ng-alain/delon/commit/281d8dd2be692476fd4c66ce003574c9ef92450f))
* **sf:** \u65B0\u589E\u5C55\u5F00/\u6298\u53E0 ([#2034](https://github.com/ng-alain/delon/issues/2034)) ([569e8ac](https://github.com/ng-alain/delon/commit/569e8ace582aebe1a59d85543e8404cdd9d0e00e))


# [21.2.0](https://github.com/ng-alain/delon/compare/21.1.0...21.2.0) (2026-05-03)

### Bug Fixes

* **form:** \u5B57\u7B26\u4E32\u503C\u5E94\u652F\u6301\u4F7F\u7528 \`null\` \u548C \`undefined\` \u503C ([#2024](https://github.com/ng-alain/delon/issues/2024)) ([d99ad55](https://github.com/ng-alain/delon/commit/d99ad550a14848e335132f60827fb68ed9c61994))

### Features

* **mock:** \u4F7F\u7528 \`@faker-js/faker\` \u66FF\u4EE3 \`mockjs\` ([#2021](https://github.com/ng-alain/delon/issues/2021)) ([af1b212](https://github.com/ng-alain/delon/commit/af1b2124c82b9f948ea265c21976f06e5688eefa))


# [21.1.0](https://github.com/ng-alain/delon/compare/21.0.5...21.1.0) (2026-03-26)

### Bug Fixes

* **abc:reuse-tab:** \u4FEE\u590D \`NG0956\` \u9519\u8BEF ([#1996](https://github.com/ng-alain/delon/issues/1996)) ([27e4d42](https://github.com/ng-alain/delon/commit/27e4d424260eb94ecc55401cba503fe07021f06f))
* **abc:se:** \u4FEE\u590D label \u65E0\u6CD5\u89E6\u53D1\u7126\u70B9 ([#1993](https://github.com/ng-alain/delon/issues/1993)) ([61cbe73](https://github.com/ng-alain/delon/commit/61cbe7303887bd968f5e43ff49da3e27e93ee4c2))
* **cli:** \u4FEE\u590D stylelint-order \u7248\u672C\u4F9D\u8D56\u95EE\u9898 ([#1998](https://github.com/ng-alain/delon/issues/1998)) ([d43bb89](https://github.com/ng-alain/delon/commit/d43bb896558893b666b7ee181bd5add449904ae2))
* **form:** \u4FEE\u590D Less zone \u6A21\u5F0F\u4E0B visible \u884C\u4E3A\u5931\u6548 ([#2007](https://github.com/ng-alain/delon/issues/2007)) ([87d5df1](https://github.com/ng-alain/delon/commit/87d5df1692db9b2ff86836471329bf870e170777))
* **from:** \u4FEE\u590D \`formValueChange\` \u4E8B\u4EF6\u7684 \`pathValue\` \u503C\u4E0D\u6B63\u786E ([#1997](https://github.com/ng-alain/delon/issues/1997)) ([b610a96](https://github.com/ng-alain/delon/commit/b610a963eba856e51a5757988bbb0f12c32597bd))

### Features

* \u811A\u672C\u624B\u67B6 Less zone \u4F18\u5148 ([#1976](https://github.com/ng-alain/delon/issues/1976)) ([d2fd43a](https://github.com/ng-alain/delon/commit/d2fd43a08cbb9bfcee01efeaf01820321dd49884))


## [21.0.5](https://github.com/ng-alain/delon/compare/21.0.4...21.0.5) (2026-02-01)

### Bug Fixes

* **abc:se,sg,sv:** fix global config not working ([#1983](https://github.com/ng-alain/delon/issues/1983)) ([1e28fdf](https://github.com/ng-alain/delon/commit/1e28fdf562b9ad810554f8c6c3680f499a2c6e43))
* **theme:ModalHelper:** \u4FEE\u590D\u5F53 \`nzNoAnimation\` \u4E3A \`ture\` \u65F6 \`focus\` \u65E0\u6CD5\u5DE5\u4F5C ([#1984](https://github.com/ng-alain/delon/issues/1984)) ([55731fd](https://github.com/ng-alain/delon/commit/55731fdc831b2326a5684543ae515609bbe1a661))


## <small>21.0.4 (2026-01-28)</small>

* fix(abc:se,sg,sv): \u4FEE\u590D\u5168\u5C40\u914D\u7F6E\u65E0\u6CD5\u5DE5\u4F5C (#1980) ([be765b4](https://github.com/ng-alain/delon/commit/be765b4)), closes [#1980](https://github.com/ng-alain/delon/issues/1980)

## <small>21.0.3 (2026-01-25)</small>

* fix(cli): \u4FEE\u590D \`ng add\` \u751F\u6210\u7684\u4F9D\u8D56\u7248\u672C\u53F7\u4E0D\u51C6\u786E (#1978) ([e5b5e02](https://github.com/ng-alain/delon/commit/e5b5e02)), closes [#1978](https://github.com/ng-alain/delon/issues/1978)

## <small>21.0.2 (2026-01-18)</small>

* fix(acl:if): \u4FEE\u590D NG0950 \u9519\u8BEF (#1974) ([2cdef54](https://github.com/ng-alain/delon/commit/2cdef54)), closes [#1974](https://github.com/ng-alain/delon/issues/1974)
* fix(cli): \u4FEE\u590D \`ng add ng-alain\` \u7F3A\u5C11 vitest \u914D\u7F6E (#1973) ([f708066](https://github.com/ng-alain/delon/commit/f708066)), closes [#1973](https://github.com/ng-alain/delon/issues/1973)


## <small>21.0.1 (2026-01-17)</small>

* fix(cli): \u4FEE\u590D\u7F3A\u5C11 \`ReuseTabComponent\` \u5BFC\u5165 (#1970) ([3fbafb1](https://github.com/ng-alain/delon/commit/3fbafb1)), closes [#1970](https://github.com/ng-alain/delon/issues/1970)
* fix(cli): \u4FEE\u590D\u79FB\u9664 \`provideAnimations\` (#1971) ([4c92bca](https://github.com/ng-alain/delon/commit/4c92bca)), closes [#1971](https://github.com/ng-alain/delon/issues/1971)


## 21.0.0 (2026-01-17)

### Code Refactoring

* refactor(*): \u4F7F\u7528 \`nzVariant\` \u66FF\u4EE3 \`nzBorderless\` (#1944) ([6e61fec](https://github.com/ng-alain/delon/commit/6e61fec)), closes [#1944](https://github.com/ng-alain/delon/issues/1944)

### Features

* feat(abc:date-picker): \u65B0\u589E\u4F7F\u7528\u5B57\u7B26\u4E32\u6807\u8BC6\u6765\u66FF\u4EE3\u5FEB\u6377\u8F93\u5165 (#1954) ([4cbac18](https://github.com/ng-alain/delon/commit/4cbac18)), closes [#1954](https://github.com/ng-alain/delon/issues/1954)
* feat(abc:loading): \u65B0\u589E \`text\` \u56FD\u9645\u5316 (#1959) ([31fac3f](https://github.com/ng-alain/delon/commit/31fac3f)), closes [#1959](https://github.com/ng-alain/delon/issues/1959)
* feat(abc:reuse-tab): \u65B0\u589E \`routeParamMatchMode\` \u652F\u6301\u81EA\u5B9A\u4E49\u6A21\u5F0F (#1952) ([f3505e2](https://github.com/ng-alain/delon/commit/f3505e2)), closes [#1952](https://github.com/ng-alain/delon/issues/1952)
* feat(abc:st): \u65B0\u589E\u91CD\u7F6E \`filter\` \u65F6 \`change\` \u4E8B\u4EF6\u7684 \`filter\` \u4E3A \`null\` (#1950) ([891ff48](https://github.com/ng-alain/delon/commit/891ff48)), closes [#1950](https://github.com/ng-alain/delon/issues/1950)
* feat(abc:st): \u65B0\u589E \`page.checkboxIdMap\` \u7528\u4E8E\u7F13\u5B58\u9009\u62E9\u9879\u6570\u636E (#1951) ([4144847](https://github.com/ng-alain/delon/commit/4144847)), closes [#1951](https://github.com/ng-alain/delon/issues/1951)
* feat(module:i18n): \u65B0\u589E\u82E5\u5E72\u4E22\u5931\u7FFB\u8BD1 (#1955) ([3cb28c5](https://github.com/ng-alain/delon/commit/3cb28c5)), closes [#1955](https://github.com/ng-alain/delon/issues/1955)
* feat(theme:i18n): \u65B0\u589E \`mergeData\` \u65B9\u6CD5 (#1945) ([4f1a351](https://github.com/ng-alain/delon/commit/4f1a351)), closes [#1945](https://github.com/ng-alain/delon/issues/1945)
* feat(cli): \`ng add\` \u65B0\u589E \`reuseTab\` \u9009\u9879 (#1961) ([478f009](https://github.com/ng-alain/delon/commit/478f009)), closes [#1961](https://github.com/ng-alain/delon/issues/1961)

### Bug Fixes

* fix(abc:st): \u4FEE\u590D\u5F53 \`children\` \u4E3A\u7A7A\u6570\u7EC4\u65F6\u4E0D\u5E94\u8BE5\u663E\u793A\u6309\u94AE (#1947) ([a4be8d1](https://github.com/ng-alain/delon/commit/a4be8d1)), closes [#1947](https://github.com/ng-alain/delon/issues/1947)
* fix(form): \u4FEE\u590D \`formValueChange.path\` \u53C2\u6570\u6CA1\u6709\u8FD4\u56DE\u503C (#1953) ([86a9b4e](https://github.com/ng-alain/delon/commit/86a9b4e)), closes [#1953](https://github.com/ng-alain/delon/issues/1953)
* fix(theme:setting-drawer): \u4FEE\u590D\u6837\u5F0F (#1968) ([f82dc34](https://github.com/ng-alain/delon/commit/f82dc34)), closes [#1968](https://github.com/ng-alain/delon/issues/1968)


## Old Versions

All releases notes can be found [here](https://github.com/ng-alain/ng-alain/releases).`}}};codes=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=o({type:n,selectors:[["docs-changelog"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&i(0,"app-docs",0),e&2&&a("codes",t.codes)("item",t.item)},dependencies:[r],encapsulation:2})};var m=class n{item={name:"cli",langs:["zh-CN"],content:{"zh-CN":{meta:{order:10,title:"\u547D\u4EE4\u884C\u5DE5\u5177",redirect:"/cli/getting-started",description:"",group:"Other",path:"docs/cli.md",url:"/docs/cli/zh"},text:"",api:"",toc:[],raw:`---
order: 10
title:
  en-US: Cli
  zh-CN: \u547D\u4EE4\u884C\u5DE5\u5177
type: Other
redirect: /cli/getting-started
---`}}};codes=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=o({type:n,selectors:[["docs-cli"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&i(0,"app-docs",0),e&2&&a("codes",t.codes)("item",t.item)},dependencies:[r],encapsulation:2})};var f=class n{item={name:"contributing",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:40,title:"Contributing",description:"The following is a set of guidelines for contributing to ng-alain. Please spend several minutes in reading these guidelines before you create an issue...",group:"Other",path:"docs/contributing.en-US.md",url:"/docs/contributing/en"},text:`<p>The following is a set of guidelines for contributing to ng-alain. Please spend several minutes in reading these guidelines before you create an issue or pull request.</p>
<h2 id="code_of_conduct"><a class="lake-link"><i data-anchor="code_of_conduct"></i></a>Code of Conduct</h2><p>We have adopted a <a href="https://github.com/ng-alain/delon/blob/master/CODE_OF_CONDUCT.md" target="_blank" rel="noopener">Code of Conduct</a> that we expect project participants to adhere to. Please read the full text so that you can understand what actions will and will not be tolerated.</p>
<h2 id="open_development"><a class="lake-link"><i data-anchor="open_development"></i></a>Open Development</h2><p>All work on <a href="https://github.com/ng-alain/ng-alain" target="_blank" rel="noopener">ng-alain</a>\u3001<a href="https://github.com/ng-alain/delon" target="_blank" rel="noopener">delon</a> happens directly. Both core team members and external contributors send pull requests which go through the same review process.</p>
<h2 id="bugs"><a class="lake-link"><i data-anchor="bugs"></i></a>Bugs</h2><p>We are using <a href="https://github.com/ng-alain/ng-alain/issues" target="_blank" rel="noopener">GitHub Issues</a> for bug tracing. The best way to get your bug fixed via <a href="https://github.com/ng-alain/ng-alain/issues" target="_blank" rel="noopener">GitHub Issues</a> and provide a reprduction with this <a href="https://stackblitz.com/edit/ng-alain-setup" target="_blank" rel="noopener">template</a>.</p>
<p>Before you reporting a bug, please make sure you&#39;ve searched exists issues, and read our <a href="https://ng-alain.com/" target="_blank" rel="noopener">FAQ</a>.</p>
<h2 id="proposing_a_change"><a class="lake-link"><i data-anchor="proposing_a_change"></i></a>Proposing a Change</h2><p>If you intend to change the public API or introduce new feature that via <a href="https://github.com/ng-alain/ng-alain/issues" target="_blank" rel="noopener">GitHub Issues</a>.</p>
<h2 id="your_first_pull_request"><a class="lake-link"><i data-anchor="your_first_pull_request"></i></a>Your First Pull Request</h2><p>Working on your first Pull Request? You can learn how from this free video series:</p>
<p><a href="https://opensource.guide/how-to-contribute/" target="_blank" rel="noopener">How to Contribute to Open Source</a></p>
<p>To help you get your feet wet and get you familiar with our contribution process, we have a list of <a href="https://github.com/ng-alain/ng-alain/labels/good%20first%20issues" target="_blank" rel="noopener">good first issues</a> that contain bugs or small features that have a relatively limited scope. This is a great place to get started.</p>
<p>If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don\u2019t accidentally duplicate your effort.</p>
<p>If somebody claims an issue but doesn\u2019t follow up for more than two weeks, it\u2019s fine to take over it but you should still leave a comment.</p>
<h2 id="sending_a_pull_request"><a class="lake-link"><i data-anchor="sending_a_pull_request"></i></a>Sending a Pull Request</h2><p>The core team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation.</p>
<p><strong>Before submitting a pull request</strong>, please make sure the following is done:</p>
<ol>
<li>Run <code>yarn</code> in the repository root.</li>
<li>If you\u2019ve fixed a bug or added code that should be tested, add tests!</li>
<li>Ensure the test suite passes (<code>npm run test</code>).</li>
<li>Make sure your code lints (<code>npm run lint</code>). Tip: Lint runs automatically when you <code>git commit</code>.</li>
<li>Make sure rebase your code to keep the history clean.</li>
<li>Make sure your commit message meet the <a href="https://github.com/ng-alain/delon/blob/master/CONTRIBUTING.md#-commit-message-guidelines" target="_blank" rel="noopener">guidelines</a></li>
</ol>
<h2 id="development_workflow"><a class="lake-link"><i data-anchor="development_workflow"></i></a>Development Workflow</h2><p>After cloning <code>ng-alain</code> or <code>delon</code>, run <code>yarn</code> to fetch its dependencies. Then, you can run several commands:</p>
<h3 id="delon"><a class="lake-link"><i data-anchor="delon"></i></a>delon</h3><ol>
<li><code>npm run site</code> runs ng-alain.com website locally</li>
<li><code>npm run lint</code> checks the code style</li>
<li><code>npm run test</code> runs the complete test suite</li>
<li><code>npm run release</code> build packages relases</li>
</ol>
<h3 id="ng-alain"><a class="lake-link"><i data-anchor="ng-alain"></i></a>ng-alain</h3><ol>
<li><code>npm run site</code> runs <a href="https://ng-alain.surge.sh/" target="_blank" rel="noopener">demo site</a> website locally</li>
<li><code>npm run lint</code> checks the code style</li>
<li><code>npm test</code> runs test suite</li>
<li><code>npm run build</code> creates build of <a href="https://ng-alain.surge.sh/" target="_blank" rel="noopener">demo site</a></li>
</ol>
`,api:"",toc:[{id:"code_of_conduct",title:"Code of Conduct"},{id:"open_development",title:"Open Development"},{id:"bugs",title:"Bugs"},{id:"proposing_a_change",title:"Proposing a Change"},{id:"your_first_pull_request",title:"Your First Pull Request"},{id:"sending_a_pull_request",title:"Sending a Pull Request"},{id:"development_workflow",title:"Development Workflow",children:[{id:"delon",title:"delon"},{id:"ng-alain",title:"ng-alain"}]}],raw:`---
order: 40
title: Contributing
type: Other
---

The following is a set of guidelines for contributing to ng-alain. Please spend several minutes in reading these guidelines before you create an issue or pull request.

## Code of Conduct

We have adopted a [Code of Conduct](https://github.com/ng-alain/delon/blob/master/CODE_OF_CONDUCT.md) that we expect project participants to adhere to. Please read the full text so that you can understand what actions will and will not be tolerated.

## Open Development

All work on [ng-alain](https://github.com/ng-alain/ng-alain)\u3001[delon](https://github.com/ng-alain/delon) happens directly. Both core team members and external contributors send pull requests which go through the same review process.

## Bugs

We are using [GitHub Issues](https://github.com/ng-alain/ng-alain/issues) for bug tracing. The best way to get your bug fixed via [GitHub Issues](https://github.com/ng-alain/ng-alain/issues) and provide a reprduction with this [template](https://stackblitz.com/edit/ng-alain-setup).

Before you reporting a bug, please make sure you've searched exists issues, and read our [FAQ](https://ng-alain.com/).

## Proposing a Change

If you intend to change the public API or introduce new feature that via [GitHub Issues](https://github.com/ng-alain/ng-alain/issues).

## Your First Pull Request

Working on your first Pull Request? You can learn how from this free video series:

[How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)

To help you get your feet wet and get you familiar with our contribution process, we have a list of [good first issues](https://github.com/ng-alain/ng-alain/labels/good%20first%20issues) that contain bugs or small features that have a relatively limited scope. This is a great place to get started.

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don\u2019t accidentally duplicate your effort.

If somebody claims an issue but doesn\u2019t follow up for more than two weeks, it\u2019s fine to take over it but you should still leave a comment.

## Sending a Pull Request

The core team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation.

**Before submitting a pull request**, please make sure the following is done:

1. Run \`yarn\` in the repository root.
2. If you\u2019ve fixed a bug or added code that should be tested, add tests!
3. Ensure the test suite passes (\`npm run test\`).
4. Make sure your code lints (\`npm run lint\`). Tip: Lint runs automatically when you \`git commit\`.
5. Make sure rebase your code to keep the history clean.
6. Make sure your commit message meet the [guidelines](https://github.com/ng-alain/delon/blob/master/CONTRIBUTING.md#-commit-message-guidelines)

## Development Workflow

After cloning \`ng-alain\` or \`delon\`, run \`yarn\` to fetch its dependencies. Then, you can run several commands:

### delon

1. \`npm run site\` runs ng-alain.com website locally
2. \`npm run lint\` checks the code style
3. \`npm run test\` runs the complete test suite
5. \`npm run release\` build packages relases

### ng-alain

1. \`npm run site\` runs [demo site](https://ng-alain.surge.sh/) website locally
2. \`npm run lint\` checks the code style
3. \`npm test\` runs test suite
5. \`npm run build\` creates build of [demo site](https://ng-alain.surge.sh/)`},"zh-CN":{meta:{order:40,title:"\u8D21\u732E\u6307\u5357",description:"\u8FD9\u7BC7\u6307\u5357\u4F1A\u6307\u5BFC\u4F60\u5982\u4F55\u4E3A NG-ALAIN \u8D21\u732E\u4E00\u4EFD\u81EA\u5DF1\u7684\u529B\u91CF\uFF0C\u8BF7\u5728\u4F60\u8981\u63D0 issue \u6216\u8005 pull request \u4E4B\u524D\u82B1\u51E0\u5206\u949F\u6765\u9605\u8BFB\u4E00\u904D\u8FD9\u7BC7\u6307\u5357\u3002\u6211\u4EEC\u6709\u4E00\u4EFD \u884C\u4E3A\u51C6\u5219\uFF0C\u5E0C\u671B\u6240\u6709\u7684\u8D21\u732E\u8005\u90FD\u80FD\u9075\u5B88\uFF0C\u8BF7\u82B1\u65F6\u95F4\u9605\u8BFB\u4E00\u904D\u5168\u6587\u4EE5\u786E\u4FDD\u4F60\u80FD\u660E\u767D\u54EA\u4E9B\u662F\u53EF\u4EE5\u505A\u7684\uFF0C\u54EA\u4E9B\u662F\u4E0D\u53EF\u4EE5\u505A\u7684\u3002\u6211\u4EEC\u6240\u6709\u7684\u5DE5\u4F5C\u90FD\u4F1A\u653E\u5728 ng-al...",group:"Other",path:"docs/contributing.zh-CN.md",url:"/docs/contributing/zh"},text:`<p>\u8FD9\u7BC7\u6307\u5357\u4F1A\u6307\u5BFC\u4F60\u5982\u4F55\u4E3A NG-ALAIN \u8D21\u732E\u4E00\u4EFD\u81EA\u5DF1\u7684\u529B\u91CF\uFF0C\u8BF7\u5728\u4F60\u8981\u63D0 issue \u6216\u8005 pull request \u4E4B\u524D\u82B1\u51E0\u5206\u949F\u6765\u9605\u8BFB\u4E00\u904D\u8FD9\u7BC7\u6307\u5357\u3002</p>
<h2 id="\u884C\u4E3A\u51C6\u5219"><a class="lake-link"><i data-anchor="\u884C\u4E3A\u51C6\u5219"></i></a>\u884C\u4E3A\u51C6\u5219</h2><p>\u6211\u4EEC\u6709\u4E00\u4EFD <a href="https://github.com/ng-alain/delon/blob/master/CODE_OF_CONDUCT.md" target="_blank" rel="noopener">\u884C\u4E3A\u51C6\u5219</a>\uFF0C\u5E0C\u671B\u6240\u6709\u7684\u8D21\u732E\u8005\u90FD\u80FD\u9075\u5B88\uFF0C\u8BF7\u82B1\u65F6\u95F4\u9605\u8BFB\u4E00\u904D\u5168\u6587\u4EE5\u786E\u4FDD\u4F60\u80FD\u660E\u767D\u54EA\u4E9B\u662F\u53EF\u4EE5\u505A\u7684\uFF0C\u54EA\u4E9B\u662F\u4E0D\u53EF\u4EE5\u505A\u7684\u3002</p>
<h2 id="\u900F\u660E\u7684\u5F00\u53D1"><a class="lake-link"><i data-anchor="\u900F\u660E\u7684\u5F00\u53D1"></i></a>\u900F\u660E\u7684\u5F00\u53D1</h2><p>\u6211\u4EEC\u6240\u6709\u7684\u5DE5\u4F5C\u90FD\u4F1A\u653E\u5728 <a href="https://github.com/ng-alain/ng-alain" target="_blank" rel="noopener">ng-alain</a>\u3001<a href="https://github.com/ng-alain/delon" target="_blank" rel="noopener">delon</a> \u4E0A\u3002\u4E0D\u7BA1\u662F\u6838\u5FC3\u56E2\u961F\u7684\u6210\u5458\u8FD8\u662F\u5916\u90E8\u8D21\u732E\u8005\u7684 pull request \u90FD\u9700\u8981\u7ECF\u8FC7\u540C\u6837\u6D41\u7A0B\u7684 review\u3002</p>
<h2 id="bugs"><a class="lake-link"><i data-anchor="bugs"></i></a>Bugs</h2><p>\u6211\u4EEC\u4F7F\u7528 <a href="https://github.com/ng-alain/ng-alain/issues" target="_blank" rel="noopener">GitHub Issues</a> \u6765\u505A bug \u8FFD\u8E2A\u3002\u5982\u679C\u4F60\u60F3\u8981\u4F60\u53D1\u73B0\u7684 bug \u88AB\u5FEB\u901F\u89E3\u51B3\uFF0C\u6700\u597D\u7684\u529E\u6CD5\u5C31\u662F\u6309\u7167 issues \u5448\u73B0\u7684\u6A21\u677F\u8BA4\u771F\u586B\u5199\u6BCF\u4E00\u9879\uFF1B\u5E76\u4E14\u80FD\u4F7F\u7528\u8FD9\u4E2A <a href="https://stackblitz.com/edit/ng-alain-setup" target="_blank" rel="noopener">\u6A21\u677F</a> \u6765\u63D0\u4F9B\u91CD\u73B0\u3002</p>
<p>\u5728\u4F60\u62A5\u544A\u4E00\u4E2A bug \u4E4B\u524D\uFF0C\u8BF7\u5148\u786E\u4FDD\u5DF2\u7ECF\u641C\u7D22\u8FC7\u5DF2\u6709\u7684 issue \u548C\u9605\u8BFB\u4E86 <a href="https://ng-alain.com/" target="_blank" rel="noopener">\u6587\u6863\u7AD9</a>\u3002</p>
<h2 id="\u65B0\u589E\u529F\u80FD"><a class="lake-link"><i data-anchor="\u65B0\u589E\u529F\u80FD"></i></a>\u65B0\u589E\u529F\u80FD</h2><p>\u5982\u679C\u4F60\u6709\u6539\u8FDB\u6211\u4EEC\u7684 API \u6216\u8005\u65B0\u589E\u529F\u80FD\u7684\u60F3\u6CD5\uFF0C\u540C\u6837\u6309\u7167 issues \u5448\u73B0\u7684\u6A21\u677F\u8BA4\u771F\u586B\u5199\u6BCF\u4E00\u9879\u3002</p>
<h2 id="\u7B2C\u4E00\u6B21\u8D21\u732E"><a class="lake-link"><i data-anchor="\u7B2C\u4E00\u6B21\u8D21\u732E"></i></a>\u7B2C\u4E00\u6B21\u8D21\u732E</h2><p>\u5982\u679C\u4F60\u8FD8\u4E0D\u6E05\u695A\u600E\u4E48\u5728 GitHub \u4E0A\u63D0 Pull Request \uFF0C\u53EF\u4EE5\u9605\u8BFB\u4E0B\u9762\u8FD9\u7BC7\u6587\u7AE0\u6765\u5B66\u4E60\uFF1A</p>
<p><a href="https://segmentfault.com/a/1190000000736629" target="_blank" rel="noopener">\u5982\u4F55\u4F18\u96C5\u5730\u5728 GitHub \u4E0A\u8D21\u732E\u4EE3\u7801</a></p>
<p>\u4E3A\u4E86\u80FD\u5E2E\u52A9\u4F60\u5F00\u59CB\u4F60\u7684\u7B2C\u4E00\u6B21\u5C1D\u8BD5\uFF0C\u6211\u4EEC\u7528 <a href="https://github.com/ng-alain/ng-alain/labels/good%20first%20issues" target="_blank" rel="noopener">good first issues</a> \u6807\u8BB0\u4E86\u4E00\u4E9B\u6BD4\u8F83\u6BD4\u8F83\u5BB9\u6613\u4FEE\u590D\u7684 bug \u548C\u5C0F\u529F\u80FD\u3002\u8FD9\u4E9B issue \u53EF\u4EE5\u5F88\u597D\u5730\u505A\u4E3A\u4F60\u7684\u9996\u6B21\u5C1D\u8BD5\u3002</p>
<p>\u5982\u679C\u4F60\u6253\u7B97\u5F00\u59CB\u5904\u7406\u4E00\u4E2A issue\uFF0C\u8BF7\u5148\u68C0\u67E5\u4E00\u4E0B issue \u4E0B\u9762\u7684\u7559\u8A00\u4EE5\u786E\u4FDD\u6CA1\u6709\u522B\u4EBA\u6B63\u5728\u5904\u7406\u8FD9\u4E2A issue\u3002\u5982\u679C\u5F53\u524D\u6CA1\u6709\u4EBA\u5728\u5904\u7406\u7684\u8BDD\u4F60\u53EF\u4EE5\u7559\u8A00\u544A\u77E5\u5176\u4ED6\u4EBA\u4F60\u5C06\u4F1A\u5904\u7406\u8FD9\u4E2A issue\uFF0C\u4EE5\u514D\u522B\u4EBA\u91CD\u590D\u52B3\u52A8\u3002</p>
<p>\u5982\u679C\u4E4B\u524D\u6709\u4EBA\u7559\u8A00\u8BF4\u4F1A\u5904\u7406\u8FD9\u4E2A issue \u4F46\u662F\u4E00\u4E24\u4E2A\u661F\u671F\u90FD\u6CA1\u6709\u52A8\u9759\uFF0C\u90A3\u4E48\u4F60\u4E5F\u53EF\u4EE5\u63A5\u624B\u5904\u7406\u8FD9\u4E2A issue\uFF0C\u5F53\u7136\u8FD8\u662F\u9700\u8981\u7559\u8A00\u544A\u77E5\u5176\u4ED6\u4EBA\u3002</p>
<h2 id="pull_request"><a class="lake-link"><i data-anchor="pull_request"></i></a>Pull Request</h2><p>NG-ALAIN \u4F1A\u5173\u6CE8\u6240\u6709\u7684 pull request\uFF0C\u6211\u4EEC\u4F1A review \u4EE5\u53CA\u5408\u5E76\u4F60\u7684\u4EE3\u7801\uFF0C\u4E5F\u6709\u53EF\u80FD\u8981\u6C42\u4F60\u505A\u4E00\u4E9B\u4FEE\u6539\u6216\u8005\u544A\u8BC9\u4F60\u6211\u4EEC\u4E3A\u4EC0\u4E48\u4E0D\u80FD\u63A5\u53D7\u8FD9\u6837\u7684\u4FEE\u6539\u3002</p>
<p><strong>\u5728\u4F60\u53D1\u9001 Pull Request \u4E4B\u524D</strong>\uFF0C\u8BF7\u786E\u8BA4\u4F60\u662F\u6309\u7167\u4E0B\u9762\u7684\u6B65\u9AA4\u6765\u505A\u7684\uFF1A</p>
<ol>
<li>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u8FD0\u884C\u4E86 <code>yarn</code>\u3002</li>
<li>\u5982\u679C\u4F60\u4FEE\u590D\u4E86\u4E00\u4E2A bug \u6216\u8005\u65B0\u589E\u4E86\u4E00\u4E2A\u529F\u80FD\uFF0C\u8BF7\u786E\u4FDD\u5199\u4E86\u76F8\u5E94\u7684\u6D4B\u8BD5\uFF0C\u8FD9\u5F88\u91CD\u8981\u3002</li>
<li>\u786E\u8BA4\u6240\u6709\u7684\u6D4B\u8BD5\u90FD\u662F\u901A\u8FC7\u7684 <code>npm run test</code>\u3002</li>
<li>\u786E\u4FDD\u4F60\u7684\u4EE3\u7801\u901A\u8FC7\u4E86 lint \u68C0\u67E5 <code>npm run lint</code>\u3002\u5C0F\u8D34\u58EB: Lint \u4F1A\u5728\u4F60 <code>git commit</code> \u7684\u65F6\u5019\u81EA\u52A8\u8FD0\u884C\u3002</li>
<li>\u786E\u4FDD\u4F60\u7684\u4EE3\u7801\u5728\u63D0\u4EA4\u4E4B\u524D\u7ECF\u8FC7\u4E86\u6B63\u786E\u7684 <a href="https://www.digitalocean.com/community/tutorials/how-to-rebase-and-update-a-pull-request" target="_blank" rel="noopener">Rebase</a></li>
<li>\u786E\u4FDD\u4F60\u7684\u63D0\u4EA4\u7B26\u5408<a href="https://github.com/ng-alain/delon/blob/master/CONTRIBUTING.md#-commit-message-guidelines" target="_blank" rel="noopener">\u89C4\u8303</a></li>
</ol>
<h2 id="\u5F00\u53D1\u6D41\u7A0B"><a class="lake-link"><i data-anchor="\u5F00\u53D1\u6D41\u7A0B"></i></a>\u5F00\u53D1\u6D41\u7A0B</h2><p>\u5728\u4F60 clone \u4E86 ng-alain \u6216 delon \u7684\u4EE3\u7801\u5E76\u4E14\u4F7F\u7528 <code>yarn</code> \u5B89\u88C5\u5B8C\u4F9D\u8D56\u540E\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u8FD0\u884C\u4E0B\u9762\u51E0\u4E2A\u5E38\u7528\u7684\u547D\u4EE4\uFF1A</p>
<h3 id="delon_\u57FA\u5EFA\u7C7B\u5E93"><a class="lake-link"><i data-anchor="delon_\u57FA\u5EFA\u7C7B\u5E93"></i></a>delon \u57FA\u5EFA\u7C7B\u5E93</h3><ol>
<li><code>npm run site</code> \u5728\u672C\u5730\u8FD0\u884C ng-alain.com \u7F51\u7AD9</li>
<li><code>npm run lint</code> \u68C0\u67E5 packages \u4EE3\u7801\u98CE\u683C</li>
<li><code>npm run test</code> \u8FD0\u884C packages \u6240\u6709\u7C7B\u5E93\u6D4B\u8BD5</li>
<li><code>npm run release</code> \u6784\u5EFA packages \u53D1\u5E03\u5305</li>
</ol>
<h3 id="ng-alain_\u811A\u624B\u67B6"><a class="lake-link"><i data-anchor="ng-alain_\u811A\u624B\u67B6"></i></a>ng-alain \u811A\u624B\u67B6</h3><ol>
<li><code>npm start</code> \u5728\u672C\u5730\u8FD0\u884C<a href="https://ng-alain.surge.sh/" target="_blank" rel="noopener">\u811A\u624B\u67B6</a></li>
<li><code>npm run lint</code> \u68C0\u67E5\u4EE3\u7801\u98CE\u683C</li>
<li><code>npm test</code> \u8FD0\u884C\u6D4B\u8BD5</li>
<li><code>npm run build</code> \u6784\u5EFA\u751F\u4EA7\u73AF\u5883\u7F51\u7AD9</li>
</ol>
`,api:"",toc:[{id:"\u884C\u4E3A\u51C6\u5219",title:"\u884C\u4E3A\u51C6\u5219"},{id:"\u900F\u660E\u7684\u5F00\u53D1",title:"\u900F\u660E\u7684\u5F00\u53D1"},{id:"bugs",title:"Bugs"},{id:"\u65B0\u589E\u529F\u80FD",title:"\u65B0\u589E\u529F\u80FD"},{id:"\u7B2C\u4E00\u6B21\u8D21\u732E",title:"\u7B2C\u4E00\u6B21\u8D21\u732E"},{id:"pull_request",title:"Pull Request"},{id:"\u5F00\u53D1\u6D41\u7A0B",title:"\u5F00\u53D1\u6D41\u7A0B",children:[{id:"delon_\u57FA\u5EFA\u7C7B\u5E93",title:"delon \u57FA\u5EFA\u7C7B\u5E93"},{id:"ng-alain_\u811A\u624B\u67B6",title:"ng-alain \u811A\u624B\u67B6"}]}],raw:`---
order: 40
title: \u8D21\u732E\u6307\u5357
type: Other
---

\u8FD9\u7BC7\u6307\u5357\u4F1A\u6307\u5BFC\u4F60\u5982\u4F55\u4E3A NG-ALAIN \u8D21\u732E\u4E00\u4EFD\u81EA\u5DF1\u7684\u529B\u91CF\uFF0C\u8BF7\u5728\u4F60\u8981\u63D0 issue \u6216\u8005 pull request \u4E4B\u524D\u82B1\u51E0\u5206\u949F\u6765\u9605\u8BFB\u4E00\u904D\u8FD9\u7BC7\u6307\u5357\u3002

## \u884C\u4E3A\u51C6\u5219

\u6211\u4EEC\u6709\u4E00\u4EFD [\u884C\u4E3A\u51C6\u5219](https://github.com/ng-alain/delon/blob/master/CODE_OF_CONDUCT.md)\uFF0C\u5E0C\u671B\u6240\u6709\u7684\u8D21\u732E\u8005\u90FD\u80FD\u9075\u5B88\uFF0C\u8BF7\u82B1\u65F6\u95F4\u9605\u8BFB\u4E00\u904D\u5168\u6587\u4EE5\u786E\u4FDD\u4F60\u80FD\u660E\u767D\u54EA\u4E9B\u662F\u53EF\u4EE5\u505A\u7684\uFF0C\u54EA\u4E9B\u662F\u4E0D\u53EF\u4EE5\u505A\u7684\u3002

## \u900F\u660E\u7684\u5F00\u53D1

\u6211\u4EEC\u6240\u6709\u7684\u5DE5\u4F5C\u90FD\u4F1A\u653E\u5728 [ng-alain](https://github.com/ng-alain/ng-alain)\u3001[delon](https://github.com/ng-alain/delon) \u4E0A\u3002\u4E0D\u7BA1\u662F\u6838\u5FC3\u56E2\u961F\u7684\u6210\u5458\u8FD8\u662F\u5916\u90E8\u8D21\u732E\u8005\u7684 pull request \u90FD\u9700\u8981\u7ECF\u8FC7\u540C\u6837\u6D41\u7A0B\u7684 review\u3002

## Bugs

\u6211\u4EEC\u4F7F\u7528 [GitHub Issues](https://github.com/ng-alain/ng-alain/issues) \u6765\u505A bug \u8FFD\u8E2A\u3002\u5982\u679C\u4F60\u60F3\u8981\u4F60\u53D1\u73B0\u7684 bug \u88AB\u5FEB\u901F\u89E3\u51B3\uFF0C\u6700\u597D\u7684\u529E\u6CD5\u5C31\u662F\u6309\u7167 issues \u5448\u73B0\u7684\u6A21\u677F\u8BA4\u771F\u586B\u5199\u6BCF\u4E00\u9879\uFF1B\u5E76\u4E14\u80FD\u4F7F\u7528\u8FD9\u4E2A [\u6A21\u677F](https://stackblitz.com/edit/ng-alain-setup) \u6765\u63D0\u4F9B\u91CD\u73B0\u3002

\u5728\u4F60\u62A5\u544A\u4E00\u4E2A bug \u4E4B\u524D\uFF0C\u8BF7\u5148\u786E\u4FDD\u5DF2\u7ECF\u641C\u7D22\u8FC7\u5DF2\u6709\u7684 issue \u548C\u9605\u8BFB\u4E86 [\u6587\u6863\u7AD9](https://ng-alain.com/)\u3002

## \u65B0\u589E\u529F\u80FD

\u5982\u679C\u4F60\u6709\u6539\u8FDB\u6211\u4EEC\u7684 API \u6216\u8005\u65B0\u589E\u529F\u80FD\u7684\u60F3\u6CD5\uFF0C\u540C\u6837\u6309\u7167 issues \u5448\u73B0\u7684\u6A21\u677F\u8BA4\u771F\u586B\u5199\u6BCF\u4E00\u9879\u3002

## \u7B2C\u4E00\u6B21\u8D21\u732E

\u5982\u679C\u4F60\u8FD8\u4E0D\u6E05\u695A\u600E\u4E48\u5728 GitHub \u4E0A\u63D0 Pull Request \uFF0C\u53EF\u4EE5\u9605\u8BFB\u4E0B\u9762\u8FD9\u7BC7\u6587\u7AE0\u6765\u5B66\u4E60\uFF1A

[\u5982\u4F55\u4F18\u96C5\u5730\u5728 GitHub \u4E0A\u8D21\u732E\u4EE3\u7801](https://segmentfault.com/a/1190000000736629)

\u4E3A\u4E86\u80FD\u5E2E\u52A9\u4F60\u5F00\u59CB\u4F60\u7684\u7B2C\u4E00\u6B21\u5C1D\u8BD5\uFF0C\u6211\u4EEC\u7528 [good first issues](https://github.com/ng-alain/ng-alain/labels/good%20first%20issues) \u6807\u8BB0\u4E86\u4E00\u4E9B\u6BD4\u8F83\u6BD4\u8F83\u5BB9\u6613\u4FEE\u590D\u7684 bug \u548C\u5C0F\u529F\u80FD\u3002\u8FD9\u4E9B issue \u53EF\u4EE5\u5F88\u597D\u5730\u505A\u4E3A\u4F60\u7684\u9996\u6B21\u5C1D\u8BD5\u3002

\u5982\u679C\u4F60\u6253\u7B97\u5F00\u59CB\u5904\u7406\u4E00\u4E2A issue\uFF0C\u8BF7\u5148\u68C0\u67E5\u4E00\u4E0B issue \u4E0B\u9762\u7684\u7559\u8A00\u4EE5\u786E\u4FDD\u6CA1\u6709\u522B\u4EBA\u6B63\u5728\u5904\u7406\u8FD9\u4E2A issue\u3002\u5982\u679C\u5F53\u524D\u6CA1\u6709\u4EBA\u5728\u5904\u7406\u7684\u8BDD\u4F60\u53EF\u4EE5\u7559\u8A00\u544A\u77E5\u5176\u4ED6\u4EBA\u4F60\u5C06\u4F1A\u5904\u7406\u8FD9\u4E2A issue\uFF0C\u4EE5\u514D\u522B\u4EBA\u91CD\u590D\u52B3\u52A8\u3002

\u5982\u679C\u4E4B\u524D\u6709\u4EBA\u7559\u8A00\u8BF4\u4F1A\u5904\u7406\u8FD9\u4E2A issue \u4F46\u662F\u4E00\u4E24\u4E2A\u661F\u671F\u90FD\u6CA1\u6709\u52A8\u9759\uFF0C\u90A3\u4E48\u4F60\u4E5F\u53EF\u4EE5\u63A5\u624B\u5904\u7406\u8FD9\u4E2A issue\uFF0C\u5F53\u7136\u8FD8\u662F\u9700\u8981\u7559\u8A00\u544A\u77E5\u5176\u4ED6\u4EBA\u3002

## Pull Request

NG-ALAIN \u4F1A\u5173\u6CE8\u6240\u6709\u7684 pull request\uFF0C\u6211\u4EEC\u4F1A review \u4EE5\u53CA\u5408\u5E76\u4F60\u7684\u4EE3\u7801\uFF0C\u4E5F\u6709\u53EF\u80FD\u8981\u6C42\u4F60\u505A\u4E00\u4E9B\u4FEE\u6539\u6216\u8005\u544A\u8BC9\u4F60\u6211\u4EEC\u4E3A\u4EC0\u4E48\u4E0D\u80FD\u63A5\u53D7\u8FD9\u6837\u7684\u4FEE\u6539\u3002

**\u5728\u4F60\u53D1\u9001 Pull Request \u4E4B\u524D**\uFF0C\u8BF7\u786E\u8BA4\u4F60\u662F\u6309\u7167\u4E0B\u9762\u7684\u6B65\u9AA4\u6765\u505A\u7684\uFF1A

1. \u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u8FD0\u884C\u4E86 \`yarn\`\u3002
2. \u5982\u679C\u4F60\u4FEE\u590D\u4E86\u4E00\u4E2A bug \u6216\u8005\u65B0\u589E\u4E86\u4E00\u4E2A\u529F\u80FD\uFF0C\u8BF7\u786E\u4FDD\u5199\u4E86\u76F8\u5E94\u7684\u6D4B\u8BD5\uFF0C\u8FD9\u5F88\u91CD\u8981\u3002
3. \u786E\u8BA4\u6240\u6709\u7684\u6D4B\u8BD5\u90FD\u662F\u901A\u8FC7\u7684 \`npm run test\`\u3002
4. \u786E\u4FDD\u4F60\u7684\u4EE3\u7801\u901A\u8FC7\u4E86 lint \u68C0\u67E5 \`npm run lint\`\u3002\u5C0F\u8D34\u58EB: Lint \u4F1A\u5728\u4F60 \`git commit\` \u7684\u65F6\u5019\u81EA\u52A8\u8FD0\u884C\u3002
5. \u786E\u4FDD\u4F60\u7684\u4EE3\u7801\u5728\u63D0\u4EA4\u4E4B\u524D\u7ECF\u8FC7\u4E86\u6B63\u786E\u7684 [Rebase](https://www.digitalocean.com/community/tutorials/how-to-rebase-and-update-a-pull-request)
6. \u786E\u4FDD\u4F60\u7684\u63D0\u4EA4\u7B26\u5408[\u89C4\u8303](https://github.com/ng-alain/delon/blob/master/CONTRIBUTING.md#-commit-message-guidelines)

## \u5F00\u53D1\u6D41\u7A0B

\u5728\u4F60 clone \u4E86 ng-alain \u6216 delon \u7684\u4EE3\u7801\u5E76\u4E14\u4F7F\u7528 \`yarn\` \u5B89\u88C5\u5B8C\u4F9D\u8D56\u540E\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u8FD0\u884C\u4E0B\u9762\u51E0\u4E2A\u5E38\u7528\u7684\u547D\u4EE4\uFF1A

### delon \u57FA\u5EFA\u7C7B\u5E93

1. \`npm run site\` \u5728\u672C\u5730\u8FD0\u884C ng-alain.com \u7F51\u7AD9
2. \`npm run lint\` \u68C0\u67E5 packages \u4EE3\u7801\u98CE\u683C
3. \`npm run test\` \u8FD0\u884C packages \u6240\u6709\u7C7B\u5E93\u6D4B\u8BD5
4. \`npm run release\` \u6784\u5EFA packages \u53D1\u5E03\u5305

### ng-alain \u811A\u624B\u67B6

1. \`npm start\` \u5728\u672C\u5730\u8FD0\u884C[\u811A\u624B\u67B6](https://ng-alain.surge.sh/)
2. \`npm run lint\` \u68C0\u67E5\u4EE3\u7801\u98CE\u683C
3. \`npm test\` \u8FD0\u884C\u6D4B\u8BD5
4. \`npm run build\` \u6784\u5EFA\u751F\u4EA7\u73AF\u5883\u7F51\u7AD9`}}};codes=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=o({type:n,selectors:[["docs-contributing"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&i(0,"app-docs",0),e&2&&a("codes",t.codes)("item",t.item)},dependencies:[r],encapsulation:2})};var b=class n{item={name:"deploy",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:70,title:"Build & Deploy",description:"When the project is developed, you can package your app with just one line of command:NG-ALAIN itself is an Angular CLI project, so you can also compl...",group:"Dev",path:"docs/deploy.en-US.md",url:"/docs/deploy/en"},text:`<h2 id="construct"><a class="lake-link"><i data-anchor="construct"></i></a>Construct</h2><p>When the project is developed, you can package your app with just one line of command:</p>
<pre><code class="language-bash">npm run build
</code></pre>
<p>NG-ALAIN itself is an Angular CLI project, so you can also complete more complex build requirements with <a href="https://angular.io/cli/build" target="_blank" rel="noopener">Build</a>. After the package is successfully packaged, the <code>dist</code> folder will be generated in the root directory, which is to build the packaged file, including several static files such as <code>*.js</code>, <code>*.css</code>, <code>index.html</code>.</p>
<h3 id="javascript_heap_out_of_memory"><a class="lake-link"><i data-anchor="javascript_heap_out_of_memory"></i></a>JavaScript heap out of memory</h3><p>Avoid executing <code>ng build</code> when throw error <strong>JavaScript heap out of memory</strong>:</p>
<pre><code class="language-json">&#123;
  &quot;scripts&quot;: &#123;
    &quot;build&quot;: &quot;node --max_old_space_size=5120 ./node_modules/&#64;angular/cli/bin/ng build&quot;
  &#125;
&#125;
</code></pre>
<h3 id="environmental_variables"><a class="lake-link"><i data-anchor="environmental_variables"></i></a>Environmental variables</h3><p>When you need to distinguish between development and deployment, and test environments, you can configure the corresponding parameters according to different environments through the <code>src/environments</code> folder. The configuration items can also be called directly in the application. At the same time, you need to configure the configuration items in <code>angular.json</code>. Finally, you can change the environment configuration through commands.</p>
<h3 id="analyze_the_build_file_volume"><a class="lake-link"><i data-anchor="analyze_the_build_file_volume"></i></a>Analyze the build file volume</h3><p>If the build file is large, you can optimize your code by building and analyzing the volume distribution of dependent modules with the <code>analyze</code> command.</p>
<pre><code class="language-bash">npm run analyze
</code></pre>
<p>View the analyze page:</p>
<pre><code class="language-bash">npm run analyze:view
</code></pre>
<p><img src="./assets/screenshot/bundle-size.png" alt=""></p>
<h2 id="release"><a class="lake-link"><i data-anchor="release"></i></a>Release</h2><p>When you are ready to deploy (release) your the app, you need only to publish the generated build artifacts - that is, the files in the <code>dist/browser</code> folder - to your cdn or static server. Note that the <code>index.html</code> is usually the entry page for your app and handles all missing file requests. You may need to change the import path of the page after determining the static of js and css.</p>
<p>If your static resource is deployed to another domain name (such as a separate CDN address), you can specify a CDN address with the <code>--base-href</code> parameter.</p>
<pre><code class="language-bash">ng build --base-href=https://cdn.ng-alain.com/
</code></pre>
<h3 id="routing_strategy"><a class="lake-link"><i data-anchor="routing_strategy"></i></a>Routing strategy</h3><p>Angular front-end routing has two different strategies: <code>HashLocationStrategy</code> and <code>PathLocationStrategy</code>. The former is routed by appending a <code>#</code> before a path, and the front-end routing management is performed by <a href="//developer.mozilla.org/en-US/docs/Web/API/History_API" target="_blank" rel="noopener">HTML5 History</a>, while the latter is similar, but the path does not have <code>#</code> appended before it. Through the configuration of the server, the specified URL can be accessed to the current page, enabling front-end routing management.</p>
<p>If you want to use <code>PathLocationStrategy</code>, you need to replace <code>RouterModule.forRoot(routes, &#123; useHash: true &#125;)</code> of <code>./src/app/routes/routes-routing.module.ts</code> with <code>RouterModule.forRoot(routes)</code>, since that is the default Angular behavior. You might notice that this can also be done by changing the <code>useHash</code> variable in the <code>src/environments/environment.*.ts</code> files, depending on your project configulation. Importantly, your server needs to be correctly configured, such that is returns the <code>index.html</code> for any 404 errors:</p>
<p>Express server example:</p>
<pre><code class="language-js">app.use(express.static(path.join(__dirname, &#39;build&#39;)));

app.get(&#39;/*&#39;, function (req, res) &#123;
  res.sendFile(path.join(__dirname, &#39;build&#39;, &#39;index.html&#39;));
&#125;);
</code></pre>
<p>Egg server example:</p>
<pre><code class="language-js">// controller
exports.index = function* () &#123;
  yield this.render(&#39;App.jsx&#39;, &#123;
    context: &#123;
      user: this.session.user,
    &#125;,
  &#125;);
&#125;;

// router
app.get(&#39;home&#39;, &#39;/*&#39;, &#39;home.index&#39;);
</code></pre>
<p>For more questions about Angular routing, please read <a href="//angular.io/guide/router" target="_blank" rel="noopener">official website</a>.</p>
<h3 id="docker"><a class="lake-link"><i data-anchor="docker"></i></a>Docker</h3><p>NG-ALAIN provides a complete image file for building Angular projects based on the nginx WEB service. Where nginx is a mirror using <a href="https://github.com/nginxinc/docker-nginx/blob/master/mainline/alpine/Dockerfile" target="_blank" rel="noopener">nginx:1.13.5-alpine</a>, which basically satisfies NG-ALAIN The project&#39;s good operating environment, if there are more needs, you can easily specify <em>nginx.conf</em> with <code>docker run</code>.</p>
<h4 id="1_building_the_image"><a class="lake-link"><i data-anchor="1_building_the_image"></i></a>1. Building the image</h4><p>Build a complete image of the runtime environment required by NG-ALAIN based on the Dockerfile.</p>
<pre><code class="language-bash">docker build -t ng-alain .
</code></pre>
<h4 id="2_running"><a class="lake-link"><i data-anchor="2_running"></i></a>2. Running</h4><p><strong>Based on compose (Recommended)</strong></p>
<pre><code class="language-bash">docker-compose up -d
</code></pre>
<p>The details can be modified with <code>docker-compose.yml</code>.</p>
<p><strong>Based on imperative</strong></p>
<pre><code class="language-bash">docker run -d -p 80:80 --name alain ng-alain
</code></pre>
<p>Finally, you can visit\uFF1A<a href="http://localhost/" target="_blank" rel="noopener">http://localhost/</a></p>
<h4 id="3_about_ssl"><a class="lake-link"><i data-anchor="3_about_ssl"></i></a>3. About SSL</h4><p>The Dockerfile provided by NG-ALAIN is relatively simple, and the most common use of real projects is support for SSL.</p>
<p>Therefore, by default you can place the certificate in the <code>_nginx/ssl</code> directory and enable the <code>_nginx/default.conf</code> related SSL configuration item.</p>
<p>Finally, add the <code>ports</code> node of <code>docker-compose.yml</code>:</p>
<pre><code>- 443:443
</code></pre>
<h3 id="container_deployment"><a class="lake-link"><i data-anchor="container_deployment"></i></a>Container deployment</h3><p>Refer to <a href="https://zhuanlan.zhihu.com/p/35688938" target="_blank" rel="noopener">Angular Container Deployment</a>.</p>
`,api:"",toc:[{id:"construct",title:"Construct",children:[{id:"javascript_heap_out_of_memory",title:"JavaScript heap out of memory"},{id:"environmental_variables",title:"Environmental variables"},{id:"analyze_the_build_file_volume",title:"Analyze the build file volume"}]},{id:"release",title:"Release",children:[{id:"routing_strategy",title:"Routing strategy"},{id:"docker",title:"Docker"},{id:"container_deployment",title:"Container deployment"}]}],raw:`---
order: 70
title:
  en-US: Build & Deploy
  zh-CN: \u6784\u5EFA\u548C\u53D1\u5E03
type: Dev
---

## Construct

When the project is developed, you can package your app with just one line of command:

\`\`\`bash
npm run build
\`\`\`

NG-ALAIN itself is an Angular CLI project, so you can also complete more complex build requirements with [Build](https://angular.io/cli/build). After the package is successfully packaged, the \`dist\` folder will be generated in the root directory, which is to build the packaged file, including several static files such as \`*.js\`, \`*.css\`, \`index.html\`.

### JavaScript heap out of memory

Avoid executing \`ng build\` when throw error **JavaScript heap out of memory**:

\`\`\`json
{
  "scripts": {
    "build": "node --max_old_space_size=5120 ./node_modules/@angular/cli/bin/ng build"
  }
}
\`\`\`

### Environmental variables

When you need to distinguish between development and deployment, and test environments, you can configure the corresponding parameters according to different environments through the \`src/environments\` folder. The configuration items can also be called directly in the application. At the same time, you need to configure the configuration items in \`angular.json\`. Finally, you can change the environment configuration through commands.

### Analyze the build file volume

If the build file is large, you can optimize your code by building and analyzing the volume distribution of dependent modules with the \`analyze\` command.

\`\`\`bash
npm run analyze
\`\`\`

View the analyze page:

\`\`\`bash
npm run analyze:view
\`\`\`

![](./assets/screenshot/bundle-size.png)

## Release

When you are ready to deploy (release) your the app, you need only to publish the generated build artifacts - that is, the files in the \`dist/browser\` folder - to your cdn or static server. Note that the \`index.html\` is usually the entry page for your app and handles all missing file requests. You may need to change the import path of the page after determining the static of js and css.

If your static resource is deployed to another domain name (such as a separate CDN address), you can specify a CDN address with the \`--base-href\` parameter.

\`\`\`bash
ng build --base-href=https://cdn.ng-alain.com/
\`\`\`

### Routing strategy

Angular front-end routing has two different strategies: \`HashLocationStrategy\` and \`PathLocationStrategy\`. The former is routed by appending a \`#\` before a path, and the front-end routing management is performed by [HTML5 History](//developer.mozilla.org/en-US/docs/Web/API/History_API), while the latter is similar, but the path does not have \`#\` appended before it. Through the configuration of the server, the specified URL can be accessed to the current page, enabling front-end routing management.

If you want to use \`PathLocationStrategy\`, you need to replace \`RouterModule.forRoot(routes, { useHash: true })\` of \`./src/app/routes/routes-routing.module.ts\` with \`RouterModule.forRoot(routes)\`, since that is the default Angular behavior. You might notice that this can also be done by changing the \`useHash\` variable in the \`src/environments/environment.*.ts\` files, depending on your project configulation. Importantly, your server needs to be correctly configured, such that is returns the \`index.html\` for any 404 errors:

Express server example:

\`\`\`js
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
\`\`\`

Egg server example:

\`\`\`js
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
\`\`\`

For more questions about Angular routing, please read [official website](//angular.io/guide/router).

### Docker

NG-ALAIN provides a complete image file for building Angular projects based on the nginx WEB service. Where nginx is a mirror using [nginx:1.13.5-alpine](https://github.com/nginxinc/docker-nginx/blob/master/mainline/alpine/Dockerfile), which basically satisfies NG-ALAIN The project's good operating environment, if there are more needs, you can easily specify *nginx.conf* with \`docker run\`.

#### 1. Building the image

Build a complete image of the runtime environment required by NG-ALAIN based on the Dockerfile.

\`\`\`bash
docker build -t ng-alain .
\`\`\`

#### 2. Running

**Based on compose (Recommended)**

\`\`\`bash
docker-compose up -d
\`\`\`

The details can be modified with \`docker-compose.yml\`.

**Based on imperative**

\`\`\`bash
docker run -d -p 80:80 --name alain ng-alain
\`\`\`

Finally, you can visit\uFF1Ahttp://localhost/

#### 3. About SSL

The Dockerfile provided by NG-ALAIN is relatively simple, and the most common use of real projects is support for SSL.

Therefore, by default you can place the certificate in the \`_nginx/ssl\` directory and enable the \`_nginx/default.conf\` related SSL configuration item.

Finally, add the \`ports\` node of \`docker-compose.yml\`:

\`\`\`
- 443:443
\`\`\`

### Container deployment

Refer to [Angular Container Deployment](https://zhuanlan.zhihu.com/p/35688938).`},"zh-CN":{meta:{order:70,title:"\u6784\u5EFA\u548C\u53D1\u5E03",description:"\u5F53\u9879\u76EE\u5F00\u53D1\u5B8C\u6BD5\uFF0C\u53EA\u9700\u8981\u8FD0\u884C\u4E00\u884C\u547D\u4EE4\u5C31\u53EF\u4EE5\u6253\u5305\u4F60\u7684\u5E94\u7528\uFF1ANG-ALAIN \u672C\u8EAB\u662F\u4E00\u4E2A Angular CLI \u9879\u76EE\uFF0C\u56E0\u6B64\u4E5F\u53EF\u4EE5\u53C2\u7167 Build \u5B8C\u6210\u66F4\u590D\u6742\u7684\u6784\u5EFA\u9700\u6C42\u3002\u6784\u5EFA\u6253\u5305\u6210\u529F\u4E4B\u540E\uFF0C\u4F1A\u5728\u6839\u76EE\u5F55\u751F\u6210 dist \u6587\u4EF6\u5939\uFF0C\u91CC\u9762\u5C31\u662F\u6784\u5EFA\u6253\u5305\u597D\u7684\u6587\u4EF6\uFF0C\u5305\u542B\u82E5\u5E72 *.js\u3001*.css\u3001index.html \u7B49\u9759...",group:"Dev",path:"docs/deploy.zh-CN.md",url:"/docs/deploy/zh"},text:`<h2 id="\u6784\u5EFA"><a class="lake-link"><i data-anchor="\u6784\u5EFA"></i></a>\u6784\u5EFA</h2><p>\u5F53\u9879\u76EE\u5F00\u53D1\u5B8C\u6BD5\uFF0C\u53EA\u9700\u8981\u8FD0\u884C\u4E00\u884C\u547D\u4EE4\u5C31\u53EF\u4EE5\u6253\u5305\u4F60\u7684\u5E94\u7528\uFF1A</p>
<pre><code class="language-bash">npm run build
</code></pre>
<p>NG-ALAIN \u672C\u8EAB\u662F\u4E00\u4E2A Angular CLI \u9879\u76EE\uFF0C\u56E0\u6B64\u4E5F\u53EF\u4EE5\u53C2\u7167 <a href="https://angular.io/cli/build" target="_blank" rel="noopener">Build</a> \u5B8C\u6210\u66F4\u590D\u6742\u7684\u6784\u5EFA\u9700\u6C42\u3002\u6784\u5EFA\u6253\u5305\u6210\u529F\u4E4B\u540E\uFF0C\u4F1A\u5728\u6839\u76EE\u5F55\u751F\u6210 <code>dist</code> \u6587\u4EF6\u5939\uFF0C\u91CC\u9762\u5C31\u662F\u6784\u5EFA\u6253\u5305\u597D\u7684\u6587\u4EF6\uFF0C\u5305\u542B\u82E5\u5E72 <code>*.js</code>\u3001<code>*.css</code>\u3001<code>index.html</code> \u7B49\u9759\u6001\u6587\u4EF6\u3002</p>
<h3 id="javascript_heap_out_of_memory"><a class="lake-link"><i data-anchor="javascript_heap_out_of_memory"></i></a>JavaScript heap out of memory</h3><p>\u907F\u514D\u6267\u884C <code>ng build</code> \u65F6\u629B\u51FA <strong>JavaScript heap out of memory</strong>\uFF1A</p>
<pre><code class="language-json">&#123;
  &quot;scripts&quot;: &#123;
    &quot;build&quot;: &quot;node --max_old_space_size=5120 ./node_modules/&#64;angular/cli/bin/ng build&quot;
  &#125;
&#125;
</code></pre>
<h3 id="\u73AF\u5883\u53D8\u91CF"><a class="lake-link"><i data-anchor="\u73AF\u5883\u53D8\u91CF"></i></a>\u73AF\u5883\u53D8\u91CF</h3><p>\u5F53\u4F60\u9700\u8981\u533A\u522B\u5F00\u53D1\u548C\u90E8\u7F72\u4EE5\u53CA\u6D4B\u8BD5\u73AF\u5883\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>src/environments</code> \u6587\u4EF6\u5939\u6839\u636E\u4E0D\u540C\u73AF\u5883\u914D\u7F6E\u76F8\u5E94\u7684\u53C2\u6570\uFF0C\u914D\u7F6E\u9879\u540C\u65F6\u4E5F\u53EF\u4EE5\u5728\u5E94\u7528\u5F53\u4E2D\u76F4\u63A5\u8C03\u7528\u5B83\u4EEC\u3002\u540C\u65F6\uFF0C\u8FD8\u9700\u8981\u914D\u7F6E <code>angular.json</code> \u5185\u7684\u914D\u7F6E\u9879\uFF0C\u6700\u540E\u4F60\u53EF\u4EE5\u900F\u8FC7\u547D\u4EE4\u6539\u53D8\u73AF\u5883\u914D\u7F6E\u3002</p>
<h3 id="\u5206\u6790\u6784\u5EFA\u6587\u4EF6\u4F53\u79EF"><a class="lake-link"><i data-anchor="\u5206\u6790\u6784\u5EFA\u6587\u4EF6\u4F53\u79EF"></i></a>\u5206\u6790\u6784\u5EFA\u6587\u4EF6\u4F53\u79EF</h3><p>\u5982\u679C\u6784\u5EFA\u6587\u4EF6\u5F88\u5927\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>analyze</code> \u547D\u4EE4\u6784\u5EFA\u5E76\u5206\u6790\u4F9D\u8D56\u6A21\u5757\u7684\u4F53\u79EF\u5206\u5E03\uFF0C\u4ECE\u800C\u4F18\u5316\u4F60\u7684\u4EE3\u7801\u3002</p>
<pre><code class="language-bash">npm run analyze
</code></pre>
<p>\u67E5\u770B\u5206\u6790\u9875\uFF1A</p>
<pre><code class="language-bash">npm run analyze:view
</code></pre>
<p><img src="./assets/screenshot/bundle-size.png" alt=""></p>
<h2 id="\u53D1\u5E03"><a class="lake-link"><i data-anchor="\u53D1\u5E03"></i></a>\u53D1\u5E03</h2><p>\u5BF9\u4E8E\u53D1\u5E03\u6765\u8BB2\uFF0C\u53EA\u9700\u8981\u5C06\u6700\u7EC8\u751F\u6210\u7684\u9759\u6001\u6587\u4EF6\uFF0C\u4E5F\u5C31\u662F\u901A\u5E38\u60C5\u51B5\u4E0B <code>dist/browser</code> \u6587\u4EF6\u5939\u7684\u9759\u6001\u6587\u4EF6\u53D1\u5E03\u5230\u4F60\u7684 cdn \u6216\u8005\u9759\u6001\u670D\u52A1\u5668\u5373\u53EF\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\u5176\u4E2D\u7684 <code>index.html</code> \u901A\u5E38\u4F1A\u662F\u4F60\u540E\u53F0\u670D\u52A1\u7684\u5165\u53E3\u9875\u9762\uFF0C\u5728\u786E\u5B9A\u4E86 js \u548C css \u7684\u9759\u6001\u4E4B\u540E\u53EF\u80FD\u9700\u8981\u6539\u53D8\u9875\u9762\u7684\u5F15\u5165\u8DEF\u5F84\u3002</p>
<p>\u5982\u679C\u4F60\u7684\u9759\u6001\u8D44\u6E90\u662F\u90E8\u7F72\u5230\u5176\u4ED6\u57DF\u540D\uFF08\u4F8B\u5982\u72EC\u7ACB\u7684 cdn \u5730\u5740\uFF09\uFF0C\u4F60\u53EF\u4EE5\u900F\u8FC7 <code>--base-href</code> \u53C2\u6570\u6307\u5B9A\u4E00\u4E2A cdn \u5730\u5740\u3002</p>
<pre><code class="language-bash">ng build --base-href=https://cdn.ng-alain.com/
</code></pre>
<h3 id="\u8DEF\u7531\u7B56\u7565"><a class="lake-link"><i data-anchor="\u8DEF\u7531\u7B56\u7565"></i></a>\u8DEF\u7531\u7B56\u7565</h3><p>Angular \u524D\u7AEF\u8DEF\u7531\u6709\u4E24\u79CD\u4E0D\u540C\u7B56\u7565 <code>HashLocationStrategy</code> \u548C <code>PathLocationStrategy</code>\u3002\u524D\u8005\u662F\u4EE5 <code>#</code> \u540E\u9762\u7684\u8DEF\u5F84\u8FDB\u884C\u8DEF\u7531\u5904\u7406\uFF0C\u901A\u8FC7 <a href="//developer.mozilla.org/en-US/docs/Web/API/History_API" target="_blank" rel="noopener">HTML5 History</a> \u8FDB\u884C\u524D\u7AEF\u8DEF\u7531\u7BA1\u7406\uFF0C\u800C\u540E\u8005\u5219\u662F\u7C7B\u4F3C\u9875\u9762\u8BBF\u95EE\u8DEF\u5F84\u5E76\u6CA1\u6709 <code>#</code>\uFF0C\u901A\u8FC7\u670D\u52A1\u7AEF\u7684\u914D\u7F6E\uFF0C\u80FD\u591F\u8BBF\u95EE\u6307\u5B9A URL \u90FD\u5B9A\u5411\u5230\u5F53\u524D\u9875\u9762\uFF0C\u4ECE\u800C\u80FD\u591F\u8FDB\u884C\u524D\u7AEF\u8DEF\u7531\u7BA1\u7406\u3002</p>
<p>\u5982\u679C\u4F60\u60F3\u91C7\u7528 <code>PathLocationStrategy</code> \u7B56\u7565\uFF0C\u5219\u9700\u8981\u5C06 <code>./src/app/routes/routes.module.ts</code> \u7684 <code>RouterModule.forRoot(routes, &#123; useHash: true &#125;)</code> \u6362\u6210 <code>RouterModule.forRoot(routes)</code>\u3002\u540C\u65F6\u9700\u8981\u670D\u52A1\u7AEF\u505A\u4E00\u4E2A\u6620\u5C04\uFF0C\u6BD4\u5982\uFF1A</p>
<p>express \u7684\u4F8B\u5B50\uFF1A</p>
<pre><code class="language-js">app.use(express.static(path.join(__dirname, &#39;build&#39;)));

app.get(&#39;/*&#39;, function (req, res) &#123;
  res.sendFile(path.join(__dirname, &#39;build&#39;, &#39;index.html&#39;));
&#125;);
</code></pre>
<p>egg \u7684\u4F8B\u5B50\uFF1A</p>
<pre><code class="language-js">// controller
exports.index = function* () &#123;
  yield this.render(&#39;App.jsx&#39;, &#123;
    context: &#123;
      user: this.session.user,
    &#125;,
  &#125;);
&#125;;

// router
app.get(&#39;home&#39;, &#39;/*&#39;, &#39;home.index&#39;);
</code></pre>
<p>\u6709\u5173\u66F4\u591A Angular \u8DEF\u7531\u76F8\u5F53\u95EE\u9898\uFF0C\u8BF7\u9605\u8BFB<a href="//angular.io/guide/router" target="_blank" rel="noopener">\u5B98\u7F51</a>\u3002</p>
<h3 id="docker"><a class="lake-link"><i data-anchor="docker"></i></a>Docker</h3><p>NG-ALAIN \u63D0\u4F9B\u4E86\u4E00\u4E2A\u57FA\u4E8E <code>nginx</code> WEB\u670D\u52A1\u5B8C\u6574\u7684\u6784\u5EFAAngular\u9879\u76EE\u7684\u955C\u50CF\u6587\u4EF6\u3002\u5176\u4E2D <code>nginx</code> \u662F\u91C7\u7528 <a href="https://github.com/nginxinc/docker-nginx/blob/master/mainline/alpine/Dockerfile" target="_blank" rel="noopener">nginx:1.13.5-alpine</a> \u7684\u955C\u50CF\uFF0C\u57FA\u672C\u4E0A\u53EF\u4EE5\u6EE1\u8DB3 NG-ALAIN \u9879\u76EE\u7684\u826F\u597D\u8FD0\u884C\u73AF\u5883\uFF0C\u5018\u82E5\u6709\u66F4\u591A\u9700\u6C42\uFF0C\u4F60\u53EF\u4EE5\u5229\u7528 <code>docker run</code> \u8F7B\u6613\u7684\u6307\u5B9A <em>nginx.conf</em>\u3002</p>
<h4 id="1\u3001\u6784\u5EFA\u955C\u50CF"><a class="lake-link"><i data-anchor="1\u3001\u6784\u5EFA\u955C\u50CF"></i></a>1\u3001\u6784\u5EFA\u955C\u50CF</h4><p>\u6839\u636E Dockerfile \u6784\u5EFA\u4E00\u4E2A\u5B8C\u6574\u7684 NG-ALAIN \u6240\u9700\u8981\u7684\u8FD0\u884C\u73AF\u5883\u7684\u955C\u50CF\u3002</p>
<pre><code class="language-bash">docker build -t ng-alain .
</code></pre>
<h4 id="2\u3001\u8FD0\u884C"><a class="lake-link"><i data-anchor="2\u3001\u8FD0\u884C"></i></a>2\u3001\u8FD0\u884C</h4><p><strong>\u57FA\u4E8Ecompose\uFF08\u63A8\u8350\uFF09</strong></p>
<pre><code class="language-bash">docker-compose up -d
</code></pre>
<p>\u5176\u7EC6\u8282\u53EF\u4EE5\u901A\u8FC7 <code>docker-compose.yml</code> \u4FEE\u6539\u3002</p>
<p><strong>\u57FA\u4E8E\u547D\u4EE4\u5F0F</strong></p>
<pre><code class="language-bash">docker run -d -p 80:80 --name alain ng-alain
</code></pre>
<p>\u6700\u540E\u4F60\u53EF\u4EE5\u8BBF\u95EE\uFF1A<a href="http://localhost/" target="_blank" rel="noopener">http://localhost/</a></p>
<h4 id="3\u3001\u5173\u4E8Essl"><a class="lake-link"><i data-anchor="3\u3001\u5173\u4E8Essl"></i></a>3\u3001\u5173\u4E8ESSL</h4><p>NG-ALAIN \u63D0\u4F9B\u7684 Dockerfile \u6587\u4EF6\u76F8\u5BF9\u4E8E\u6BD4\u8F83\u7B80\u5355\uFF0C\u800C\u5B9E\u9645\u9879\u76EE\u4E2D\u6700\u5E38\u7528\u7684\u662F\u5BF9SSL\u7684\u652F\u6301\u3002</p>
<p>\u56E0\u6B64\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F60\u53EF\u4EE5\u5C06\u8BC1\u4E66\u653E\u7F6E <code>_nginx/ssl</code> \u76EE\u5F55\u4E0B\uFF0C\u5E76\u5F00\u542F <code>_nginx/default.conf</code> \u76F8\u5173SSL\u914D\u7F6E\u9879\u5373\u53EF\u3002</p>
<p>\u6700\u540E\uFF0C\u589E\u52A0 <code>docker-compose.yml</code> \u7684 <code>ports</code> \u8282\u70B9\uFF1A</p>
<pre><code>- 443:443
</code></pre>
<h3 id="\u5BB9\u5668\u90E8\u7F72"><a class="lake-link"><i data-anchor="\u5BB9\u5668\u90E8\u7F72"></i></a>\u5BB9\u5668\u90E8\u7F72</h3><p>\u53C2\u8003 <a href="https://zhuanlan.zhihu.com/p/35688938" target="_blank" rel="noopener">Angular \u5BB9\u5668\u90E8\u7F72</a>\u3002</p>
`,api:"",toc:[{id:"\u6784\u5EFA",title:"\u6784\u5EFA",children:[{id:"javascript_heap_out_of_memory",title:"JavaScript heap out of memory"},{id:"\u73AF\u5883\u53D8\u91CF",title:"\u73AF\u5883\u53D8\u91CF"},{id:"\u5206\u6790\u6784\u5EFA\u6587\u4EF6\u4F53\u79EF",title:"\u5206\u6790\u6784\u5EFA\u6587\u4EF6\u4F53\u79EF"}]},{id:"\u53D1\u5E03",title:"\u53D1\u5E03",children:[{id:"\u8DEF\u7531\u7B56\u7565",title:"\u8DEF\u7531\u7B56\u7565"},{id:"docker",title:"Docker"},{id:"\u5BB9\u5668\u90E8\u7F72",title:"\u5BB9\u5668\u90E8\u7F72"}]}],raw:`---
order: 70
title:
  en-US: Build & Deploy
  zh-CN: \u6784\u5EFA\u548C\u53D1\u5E03
type: Dev
---

## \u6784\u5EFA

\u5F53\u9879\u76EE\u5F00\u53D1\u5B8C\u6BD5\uFF0C\u53EA\u9700\u8981\u8FD0\u884C\u4E00\u884C\u547D\u4EE4\u5C31\u53EF\u4EE5\u6253\u5305\u4F60\u7684\u5E94\u7528\uFF1A

\`\`\`bash
npm run build
\`\`\`

NG-ALAIN \u672C\u8EAB\u662F\u4E00\u4E2A Angular CLI \u9879\u76EE\uFF0C\u56E0\u6B64\u4E5F\u53EF\u4EE5\u53C2\u7167 [Build](https://angular.io/cli/build) \u5B8C\u6210\u66F4\u590D\u6742\u7684\u6784\u5EFA\u9700\u6C42\u3002\u6784\u5EFA\u6253\u5305\u6210\u529F\u4E4B\u540E\uFF0C\u4F1A\u5728\u6839\u76EE\u5F55\u751F\u6210 \`dist\` \u6587\u4EF6\u5939\uFF0C\u91CC\u9762\u5C31\u662F\u6784\u5EFA\u6253\u5305\u597D\u7684\u6587\u4EF6\uFF0C\u5305\u542B\u82E5\u5E72 \`*.js\`\u3001\`*.css\`\u3001\`index.html\` \u7B49\u9759\u6001\u6587\u4EF6\u3002

### JavaScript heap out of memory

\u907F\u514D\u6267\u884C \`ng build\` \u65F6\u629B\u51FA **JavaScript heap out of memory**\uFF1A

\`\`\`json
{
  "scripts": {
    "build": "node --max_old_space_size=5120 ./node_modules/@angular/cli/bin/ng build"
  }
}
\`\`\`

### \u73AF\u5883\u53D8\u91CF

\u5F53\u4F60\u9700\u8981\u533A\u522B\u5F00\u53D1\u548C\u90E8\u7F72\u4EE5\u53CA\u6D4B\u8BD5\u73AF\u5883\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u901A\u8FC7 \`src/environments\` \u6587\u4EF6\u5939\u6839\u636E\u4E0D\u540C\u73AF\u5883\u914D\u7F6E\u76F8\u5E94\u7684\u53C2\u6570\uFF0C\u914D\u7F6E\u9879\u540C\u65F6\u4E5F\u53EF\u4EE5\u5728\u5E94\u7528\u5F53\u4E2D\u76F4\u63A5\u8C03\u7528\u5B83\u4EEC\u3002\u540C\u65F6\uFF0C\u8FD8\u9700\u8981\u914D\u7F6E \`angular.json\` \u5185\u7684\u914D\u7F6E\u9879\uFF0C\u6700\u540E\u4F60\u53EF\u4EE5\u900F\u8FC7\u547D\u4EE4\u6539\u53D8\u73AF\u5883\u914D\u7F6E\u3002

### \u5206\u6790\u6784\u5EFA\u6587\u4EF6\u4F53\u79EF

\u5982\u679C\u6784\u5EFA\u6587\u4EF6\u5F88\u5927\uFF0C\u53EF\u4EE5\u901A\u8FC7 \`analyze\` \u547D\u4EE4\u6784\u5EFA\u5E76\u5206\u6790\u4F9D\u8D56\u6A21\u5757\u7684\u4F53\u79EF\u5206\u5E03\uFF0C\u4ECE\u800C\u4F18\u5316\u4F60\u7684\u4EE3\u7801\u3002

\`\`\`bash
npm run analyze
\`\`\`

\u67E5\u770B\u5206\u6790\u9875\uFF1A

\`\`\`bash
npm run analyze:view
\`\`\`

![](./assets/screenshot/bundle-size.png)

## \u53D1\u5E03

\u5BF9\u4E8E\u53D1\u5E03\u6765\u8BB2\uFF0C\u53EA\u9700\u8981\u5C06\u6700\u7EC8\u751F\u6210\u7684\u9759\u6001\u6587\u4EF6\uFF0C\u4E5F\u5C31\u662F\u901A\u5E38\u60C5\u51B5\u4E0B \`dist/browser\` \u6587\u4EF6\u5939\u7684\u9759\u6001\u6587\u4EF6\u53D1\u5E03\u5230\u4F60\u7684 cdn \u6216\u8005\u9759\u6001\u670D\u52A1\u5668\u5373\u53EF\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\u5176\u4E2D\u7684 \`index.html\` \u901A\u5E38\u4F1A\u662F\u4F60\u540E\u53F0\u670D\u52A1\u7684\u5165\u53E3\u9875\u9762\uFF0C\u5728\u786E\u5B9A\u4E86 js \u548C css \u7684\u9759\u6001\u4E4B\u540E\u53EF\u80FD\u9700\u8981\u6539\u53D8\u9875\u9762\u7684\u5F15\u5165\u8DEF\u5F84\u3002

\u5982\u679C\u4F60\u7684\u9759\u6001\u8D44\u6E90\u662F\u90E8\u7F72\u5230\u5176\u4ED6\u57DF\u540D\uFF08\u4F8B\u5982\u72EC\u7ACB\u7684 cdn \u5730\u5740\uFF09\uFF0C\u4F60\u53EF\u4EE5\u900F\u8FC7 \`--base-href\` \u53C2\u6570\u6307\u5B9A\u4E00\u4E2A cdn \u5730\u5740\u3002

\`\`\`bash
ng build --base-href=https://cdn.ng-alain.com/
\`\`\`

### \u8DEF\u7531\u7B56\u7565

Angular \u524D\u7AEF\u8DEF\u7531\u6709\u4E24\u79CD\u4E0D\u540C\u7B56\u7565 \`HashLocationStrategy\` \u548C \`PathLocationStrategy\`\u3002\u524D\u8005\u662F\u4EE5 \`#\` \u540E\u9762\u7684\u8DEF\u5F84\u8FDB\u884C\u8DEF\u7531\u5904\u7406\uFF0C\u901A\u8FC7 [HTML5 History](//developer.mozilla.org/en-US/docs/Web/API/History_API) \u8FDB\u884C\u524D\u7AEF\u8DEF\u7531\u7BA1\u7406\uFF0C\u800C\u540E\u8005\u5219\u662F\u7C7B\u4F3C\u9875\u9762\u8BBF\u95EE\u8DEF\u5F84\u5E76\u6CA1\u6709 \`#\`\uFF0C\u901A\u8FC7\u670D\u52A1\u7AEF\u7684\u914D\u7F6E\uFF0C\u80FD\u591F\u8BBF\u95EE\u6307\u5B9A URL \u90FD\u5B9A\u5411\u5230\u5F53\u524D\u9875\u9762\uFF0C\u4ECE\u800C\u80FD\u591F\u8FDB\u884C\u524D\u7AEF\u8DEF\u7531\u7BA1\u7406\u3002

\u5982\u679C\u4F60\u60F3\u91C7\u7528 \`PathLocationStrategy\` \u7B56\u7565\uFF0C\u5219\u9700\u8981\u5C06 \`./src/app/routes/routes.module.ts\` \u7684 \`RouterModule.forRoot(routes, { useHash: true })\` \u6362\u6210 \`RouterModule.forRoot(routes)\`\u3002\u540C\u65F6\u9700\u8981\u670D\u52A1\u7AEF\u505A\u4E00\u4E2A\u6620\u5C04\uFF0C\u6BD4\u5982\uFF1A

express \u7684\u4F8B\u5B50\uFF1A

\`\`\`js
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
\`\`\`

egg \u7684\u4F8B\u5B50\uFF1A

\`\`\`js
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
\`\`\`

\u6709\u5173\u66F4\u591A Angular \u8DEF\u7531\u76F8\u5F53\u95EE\u9898\uFF0C\u8BF7\u9605\u8BFB[\u5B98\u7F51](//angular.io/guide/router)\u3002

### Docker

NG-ALAIN \u63D0\u4F9B\u4E86\u4E00\u4E2A\u57FA\u4E8E \`nginx\` WEB\u670D\u52A1\u5B8C\u6574\u7684\u6784\u5EFAAngular\u9879\u76EE\u7684\u955C\u50CF\u6587\u4EF6\u3002\u5176\u4E2D \`nginx\` \u662F\u91C7\u7528 [nginx:1.13.5-alpine](https://github.com/nginxinc/docker-nginx/blob/master/mainline/alpine/Dockerfile) \u7684\u955C\u50CF\uFF0C\u57FA\u672C\u4E0A\u53EF\u4EE5\u6EE1\u8DB3 NG-ALAIN \u9879\u76EE\u7684\u826F\u597D\u8FD0\u884C\u73AF\u5883\uFF0C\u5018\u82E5\u6709\u66F4\u591A\u9700\u6C42\uFF0C\u4F60\u53EF\u4EE5\u5229\u7528 \`docker run\` \u8F7B\u6613\u7684\u6307\u5B9A *nginx.conf*\u3002

#### 1\u3001\u6784\u5EFA\u955C\u50CF

\u6839\u636E Dockerfile \u6784\u5EFA\u4E00\u4E2A\u5B8C\u6574\u7684 NG-ALAIN \u6240\u9700\u8981\u7684\u8FD0\u884C\u73AF\u5883\u7684\u955C\u50CF\u3002

\`\`\`bash
docker build -t ng-alain .
\`\`\`

#### 2\u3001\u8FD0\u884C

**\u57FA\u4E8Ecompose\uFF08\u63A8\u8350\uFF09**

\`\`\`bash
docker-compose up -d
\`\`\`

\u5176\u7EC6\u8282\u53EF\u4EE5\u901A\u8FC7 \`docker-compose.yml\` \u4FEE\u6539\u3002

**\u57FA\u4E8E\u547D\u4EE4\u5F0F**

\`\`\`bash
docker run -d -p 80:80 --name alain ng-alain
\`\`\`

\u6700\u540E\u4F60\u53EF\u4EE5\u8BBF\u95EE\uFF1Ahttp://localhost/

#### 3\u3001\u5173\u4E8ESSL

NG-ALAIN \u63D0\u4F9B\u7684 Dockerfile \u6587\u4EF6\u76F8\u5BF9\u4E8E\u6BD4\u8F83\u7B80\u5355\uFF0C\u800C\u5B9E\u9645\u9879\u76EE\u4E2D\u6700\u5E38\u7528\u7684\u662F\u5BF9SSL\u7684\u652F\u6301\u3002

\u56E0\u6B64\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F60\u53EF\u4EE5\u5C06\u8BC1\u4E66\u653E\u7F6E \`_nginx/ssl\` \u76EE\u5F55\u4E0B\uFF0C\u5E76\u5F00\u542F \`_nginx/default.conf\` \u76F8\u5173SSL\u914D\u7F6E\u9879\u5373\u53EF\u3002

\u6700\u540E\uFF0C\u589E\u52A0 \`docker-compose.yml\` \u7684 \`ports\` \u8282\u70B9\uFF1A

\`\`\`
- 443:443
\`\`\`

### \u5BB9\u5668\u90E8\u7F72

\u53C2\u8003 [Angular \u5BB9\u5668\u90E8\u7F72](https://zhuanlan.zhihu.com/p/35688938)\u3002`}}};codes=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=o({type:n,selectors:[["docs-deploy"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&i(0,"app-docs",0),e&2&&a("codes",t.codes)("item",t.item)},dependencies:[r],encapsulation:2})};var y=class n{item={name:"faq",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:20,title:"FAQ",description:"Please check the FAQ below before asking questions.Common mistakes under Angular, this article will help you understand why.Common mistakes under Angu...",group:"Other",path:"docs/faq.en-US.md",url:"/docs/faq/en"},text:`<p>Please check the FAQ below before asking questions.</p>
<h2 id="basic"><a class="lake-link"><i data-anchor="basic"></i></a>Basic</h2><h3 id="expression_changed_after_it_has_been_checked_error"><a class="lake-link"><i data-anchor="expression_changed_after_it_has_been_checked_error"></i></a>Expression Changed After It Has Been Checked Error</h3><p>Common mistakes under Angular, <a href="https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4" target="_blank" rel="noopener">this article</a> will help you understand why.</p>
<h3 id="canand#39;t_bind_to_and#39;formgroupand#39;_since_it_isnand#39;t_a_known_property_of_and#39;formand#39;"><a class="lake-link"><i data-anchor="canand#39;t_bind_to_and#39;formgroupand#39;_since_it_isnand#39;t_a_known_property_of_and#39;formand#39;"></i></a>Can&#39;t bind to &#39;formGroup&#39; since it isn&#39;t a known property of &#39;form&#39;</h3><p>Common mistakes under Angular, the use of Reactive Forms requires the introduction of <code>ReactiveFormsModule</code>, refer to <a href="https://angular.io/guide/reactive-forms" target="_blank" rel="noopener">official documentation</a>.</p>
<h3 id="why_is_the_page_not_updated_after_the_data_is_modified?"><a class="lake-link"><i data-anchor="why_is_the_page_not_updated_after_the_data_is_modified?"></i></a>Why is the page not updated after the data is modified?</h3><p>The NG-ZORRO and &#64;delon/* components work in OnPush mode by default. Mutate objects or arrays do not trigger Angular&#39;s change detection. Use the immutable method.</p>
<h3 id="how_to_use_delon_daily_build_version"><a class="lake-link"><i data-anchor="how_to_use_delon_daily_build_version"></i></a>How to use &#64;delon daily build version</h3><p>NG-ALAIN provides a <a href="https://github.com/ng-alain/delon-builds.git" target="_blank" rel="noopener">delon-builds</a> repository as a daily build version. It&#39;s not the final stable version, but contains the latest fixed BUG, To use the latest features, you can create <code>delon.sh</code> in the root directory:</p>
<pre><code class="language-bash">#!/usr/bin/env bash
set -e
echo &quot;Download latest &#64;delon version&quot;
rm -rf delon-builds
git clone --depth 1 https://github.com/ng-alain/delon-builds.git
rm -rf node_modules/&#64;delon
rm -rf node_modules/ng-alain
rsync -am delon-builds/ node_modules/
NG_ALAIN_VERSION=$(node -p &quot;require(&#39;./node_modules/ng-alain/package.json&#39;).version&quot;)
rm -rf delon-builds
echo &quot;Using ng-alain version: $&#123;NG_ALAIN_VERSION&#125;&quot;
</code></pre>
<p>When you need to use the daily build version of &#64;delon, you only need to run:</p>
<pre><code class="language-bash">bash delon.sh
</code></pre>
<blockquote>
<p>If in Windows environment, please use <a href="https://docs.microsoft.com/en-us/windows/wsl/install" target="_blank" rel="noopener">WSL</a> to execute Bash scripts.</p>
</blockquote>
<h2 id="installation"><a class="lake-link"><i data-anchor="installation"></i></a>Installation</h2><h3 id="why_canand#39;t_i_find_the_ng-zorro-antd/src/less_style?"><a class="lake-link"><i data-anchor="why_canand#39;t_i_find_the_ng-zorro-antd/src/less_style?"></i></a>Why can&#39;t I find the ng-zorro-antd/src/*.less style?</h3><p>Two situations:</p>
<ul>
<li>Using <code>cnpm</code> to install dependencies, you will not be able to find style files. This is because <code>cnpm</code> is in the form of a soft link path, which causes the <code>ng-zorro-antd</code> folder name to change, so it is recommended to use the <code>yarn</code> install dependency package instead.</li>
<li>The <code>ng-zorro-antd</code> version is too old to cause some components to fail to load into the appropriate style</li>
</ul>
<h3 id="how_to_use_other_mirror?"><a class="lake-link"><i data-anchor="how_to_use_other_mirror?"></i></a>How to use other mirror?</h3><p>Install the <a href="https://github.com/YunYouJun/nnrm/blob/main/README.zh-CN.md" target="_blank" rel="noopener">nnrm</a> plugin.</p>
<pre><code class="language-bash"># Install nnrm
npm install -g nnrm
# Switch Npm to Taobao mirror
nnrm use taobao
</code></pre>
<h2 id="configuration"><a class="lake-link"><i data-anchor="configuration"></i></a>Configuration</h2><h3 id="how_do_i_deploy_the_antd_icon_locally?"><a class="lake-link"><i data-anchor="how_do_i_deploy_the_antd_icon_locally?"></i></a>How do I deploy the antd icon locally?</h3><p>First, the latest iconfont file can go to <a href="https://ant.design/docs/spec/download" target="_blank" rel="noopener">this link</a> (<a href="http://ant-design.gitee.io/docs/spec/download" target="_blank" rel="noopener">mirror</a>) Download.</p>
<p>Finally, redefine the new path in <code>src/styles/theme.less</code>:</p>
<pre><code class="language-less">&#64;icon-url: &quot;/assets/iconfont&quot;;
</code></pre>
<blockquote>
<p>Use an absolute path or CDN address.</p>
</blockquote>
<h3 id="missing_locale_data_for_the_locale_andquot;zh-cnandquot;"><a class="lake-link"><i data-anchor="missing_locale_data_for_the_locale_andquot;zh-cnandquot;"></i></a>Missing locale data for the locale &quot;zh-cn&quot;</h3><p>For missing language imports, refer to <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/app.module.ts#L6-L25" target="_blank" rel="noopener">app.module.ts</a>.</p>
<h3 id="how_to_deploy_ng-alaincom_documentation_site_in_local"><a class="lake-link"><i data-anchor="how_to_deploy_ng-alaincom_documentation_site_in_local"></i></a>How to deploy ng-alain.com documentation site in local</h3><p>Online documents will only retain the data of the last three major version numbers. If the version is low, you can view it through local deployment:</p>
<pre><code class="language-bash">git clone --depth 1 -b full https://github.com/ng-alain/archive-docs.git ng-alain-doc
cd ng-alain-doc
npm install
npm start
</code></pre>
<h3 id="fix_the_abnormal_display_of_the_lower_part_of_the_360_browser"><a class="lake-link"><i data-anchor="fix_the_abnormal_display_of_the_lower_part_of_the_360_browser"></i></a>Fix the abnormal display of the lower part of the 360 browser</h3><p>The built-in Chrome core of some 360 browsers is too low, resulting in some CSS3 not supported, you can manually increase <code>.browserslistrc</code> For more details, refer to <a href="https://github.com/ng-alain/ng-alain/issues/2310#issuecomment-1299460266" target="_blank" rel="noopener">#2310</a>.</p>
`,api:"",toc:[{id:"basic",title:"Basic",children:[{id:"expression_changed_after_it_has_been_checked_error",title:"Expression Changed After It Has Been Checked Error"},{id:"cant_bind_to_formgroup_since_it_isnt_a_known_property_of_form",title:"Can't bind to 'formGroup' since it isn't a known property of 'form'"},{id:"why_is_the_page_not_updated_after_the_data_is_modified?",title:"Why is the page not updated after the data is modified?"},{id:"how_to_use_delon_daily_build_version",title:"How to use @delon daily build version"}]},{id:"installation",title:"Installation",children:[{id:"why_cant_i_find_the_ng-zorro-antd/src/less_style?",title:"Why can't I find the ng-zorro-antd/src/*.less style?"},{id:"how_to_use_other_mirror?",title:"How to use other mirror?"}]},{id:"configuration",title:"Configuration",children:[{id:"how_do_i_deploy_the_antd_icon_locally?",title:"How do I deploy the antd icon locally?"},{id:"missing_locale_data_for_the_locale_zh-cn",title:'Missing locale data for the locale "zh-cn"'},{id:"how_to_deploy_ng-alaincom_documentation_site_in_local",title:"How to deploy ng-alain.com documentation site in local"},{id:"fix_the_abnormal_display_of_the_lower_part_of_the_360_browser",title:"Fix the abnormal display of the lower part of the 360 browser"}]}],raw:`---
order: 20
title:
  en-US: FAQ
  zh-CN: \u5E38\u89C1\u95EE\u9898
type: Other
---

Please check the FAQ below before asking questions.

## Basic

### Expression Changed After It Has Been Checked Error

Common mistakes under Angular, [this article](https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4) will help you understand why.

### Can't bind to 'formGroup' since it isn't a known property of 'form'

Common mistakes under Angular, the use of Reactive Forms requires the introduction of \`ReactiveFormsModule\`, refer to [official documentation](https://angular.io/guide/reactive-forms).

### Why is the page not updated after the data is modified?

The NG-ZORRO and @delon/* components work in OnPush mode by default. Mutate objects or arrays do not trigger Angular's change detection. Use the immutable method.

### How to use @delon daily build version

NG-ALAIN provides a [delon-builds](https://github.com/ng-alain/delon-builds.git) repository as a daily build version. It's not the final stable version, but contains the latest fixed BUG, To use the latest features, you can create \`delon.sh\` in the root directory:

\`\`\`bash
#!/usr/bin/env bash
set -e
echo "Download latest @delon version"
rm -rf delon-builds
git clone --depth 1 https://github.com/ng-alain/delon-builds.git
rm -rf node_modules/@delon
rm -rf node_modules/ng-alain
rsync -am delon-builds/ node_modules/
NG_ALAIN_VERSION=$(node -p "require('./node_modules/ng-alain/package.json').version")
rm -rf delon-builds
echo "Using ng-alain version: \${NG_ALAIN_VERSION}"
\`\`\`

When you need to use the daily build version of @delon, you only need to run:

\`\`\`bash
bash delon.sh
\`\`\`

> If in Windows environment, please use [WSL](https://docs.microsoft.com/en-us/windows/wsl/install) to execute Bash scripts.

## Installation

### Why can't I find the ng-zorro-antd/src/*.less style?

Two situations:

- Using \`cnpm\` to install dependencies, you will not be able to find style files. This is because \`cnpm\` is in the form of a soft link path, which causes the \`ng-zorro-antd\` folder name to change, so it is recommended to use the \`yarn\` install dependency package instead.
- The \`ng-zorro-antd\` version is too old to cause some components to fail to load into the appropriate style

### How to use other mirror?

Install the [nnrm](https://github.com/YunYouJun/nnrm/blob/main/README.zh-CN.md) plugin.

\`\`\`bash
# Install nnrm
npm install -g nnrm
# Switch Npm to Taobao mirror
nnrm use taobao
\`\`\`

## Configuration

### How do I deploy the antd icon locally?

First, the latest iconfont file can go to [this link](https://ant.design/docs/spec/download) ([mirror](http://ant-design.gitee.io/docs/spec/download)) Download.

Finally, redefine the new path in \`src/styles/theme.less\`:

\`\`\`less
@icon-url: "/assets/iconfont";
\`\`\`

> Use an absolute path or CDN address.

### Missing locale data for the locale "zh-cn"

For missing language imports, refer to [app.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/app.module.ts#L6-L25).

### How to deploy ng-alain.com documentation site in local

Online documents will only retain the data of the last three major version numbers. If the version is low, you can view it through local deployment:

\`\`\`bash
git clone --depth 1 -b full https://github.com/ng-alain/archive-docs.git ng-alain-doc
cd ng-alain-doc
npm install
npm start
\`\`\`

### Fix the abnormal display of the lower part of the 360 browser

The built-in Chrome core of some 360 browsers is too low, resulting in some CSS3 not supported, you can manually increase \`.browserslistrc\` For more details, refer to [#2310](https://github.com/ng-alain/ng-alain/issues/2310#issuecomment-1299460266).`},"zh-CN":{meta:{order:20,title:"\u5E38\u89C1\u95EE\u9898",description:"\u63D0\u95EE\u4E4B\u524D\uFF0C\u8BF7\u5148\u67E5\u9605\u4E0B\u9762\u7684\u5E38\u89C1\u95EE\u9898\u3002Angular \u4E0B\u5E38\u89C1\u9519\u8BEF\uFF0C\u8FD9\u7BC7\u6587\u7AE0 \u4F1A\u5E2E\u52A9\u4F60\u7406\u89E3\u539F\u56E0\u3002Angular \u4E0B\u5E38\u89C1\u9519\u8BEF\uFF0C\u4F7F\u7528 Reactive Forms \u9700\u8981\u989D\u5916\u5F15\u5165 ReactiveFormsModule\uFF0C\u53EF\u4EE5\u53C2\u8003\u5B98\u65B9\u6587\u6863\u3002NG-ZORRO \u53CA @delon/* \u7EC4\u4EF6\u9ED8\u8BA4\u5728 OnPush \u6A21\u5F0F\u4E0B\u5DE5...",group:"Other",path:"docs/faq.zh-CN.md",url:"/docs/faq/zh"},text:`<p>\u63D0\u95EE\u4E4B\u524D\uFF0C\u8BF7\u5148\u67E5\u9605\u4E0B\u9762\u7684\u5E38\u89C1\u95EE\u9898\u3002</p>
<h2 id="\u57FA\u7840"><a class="lake-link"><i data-anchor="\u57FA\u7840"></i></a>\u57FA\u7840</h2><h3 id="expression_changed_after_it_has_been_checked_error_\u9519\u8BEF"><a class="lake-link"><i data-anchor="expression_changed_after_it_has_been_checked_error_\u9519\u8BEF"></i></a>Expression Changed After It Has Been Checked Error \u9519\u8BEF</h3><p>Angular \u4E0B\u5E38\u89C1\u9519\u8BEF\uFF0C<a href="https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4" target="_blank" rel="noopener">\u8FD9\u7BC7\u6587\u7AE0</a> \u4F1A\u5E2E\u52A9\u4F60\u7406\u89E3\u539F\u56E0\u3002</p>
<h3 id="canand#39;t_bind_to_and#39;formgroupand#39;_since_it_isnand#39;t_a_known_property_of_and#39;formand#39;"><a class="lake-link"><i data-anchor="canand#39;t_bind_to_and#39;formgroupand#39;_since_it_isnand#39;t_a_known_property_of_and#39;formand#39;"></i></a>Can&#39;t bind to &#39;formGroup&#39; since it isn&#39;t a known property of &#39;form&#39;</h3><p>Angular \u4E0B\u5E38\u89C1\u9519\u8BEF\uFF0C\u4F7F\u7528 Reactive Forms \u9700\u8981\u989D\u5916\u5F15\u5165 <code>ReactiveFormsModule</code>\uFF0C\u53EF\u4EE5\u53C2\u8003<a href="https://angular.io/guide/reactive-forms" target="_blank" rel="noopener">\u5B98\u65B9\u6587\u6863</a>\u3002</p>
<h3 id="\u6570\u636E\u4FEE\u6539\u540E\u9875\u9762\u4E3A\u4EC0\u4E48\u6CA1\u6709\u66F4\u65B0"><a class="lake-link"><i data-anchor="\u6570\u636E\u4FEE\u6539\u540E\u9875\u9762\u4E3A\u4EC0\u4E48\u6CA1\u6709\u66F4\u65B0"></i></a>\u6570\u636E\u4FEE\u6539\u540E\u9875\u9762\u4E3A\u4EC0\u4E48\u6CA1\u6709\u66F4\u65B0</h3><p>NG-ZORRO \u53CA &#64;delon/* \u7EC4\u4EF6\u9ED8\u8BA4\u5728 OnPush \u6A21\u5F0F\u4E0B\u5DE5\u4F5C\uFF0Cmutate \u5BF9\u8C61\u6216\u8005\u6570\u7EC4\u4E0D\u4F1A\u89E6\u53D1 Angular \u7684\u53D8\u66F4\u68C0\u6D4B\uFF0C\u8BF7\u4F7F\u7528 immutable \u65B9\u5F0F\u3002</p>
<h3 id="\u5982\u4F55\u4F7F\u7528delon\u6BCF\u65E5\u6784\u5EFA\u7248\u672C"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528delon\u6BCF\u65E5\u6784\u5EFA\u7248\u672C"></i></a>\u5982\u4F55\u4F7F\u7528&#64;delon\u6BCF\u65E5\u6784\u5EFA\u7248\u672C</h3><p>NG-ALAIN \u63D0\u4F9B\u4E00\u4E2A <a href="https://github.com/ng-alain/delon-builds.git" target="_blank" rel="noopener">delon-builds</a> \u4ED3\u50A8\u4F5C\u4E3A\u6BCF\u65E5\u6784\u5EFA\u7248\u672C\uFF0C\u5B83\u5E76\u4E0D\u662F\u6700\u7EC8\u7A33\u5B9A\u7248\u672C\uFF0C\u4F46\u5305\u542B\u6700\u65B0\u5DF2\u4FEE\u590DBUG\u3001\u6700\u65B0\u529F\u80FD\uFF0C\u8981\u4F7F\u7528\u53EF\u4EE5\u5728\u6839\u76EE\u5F55\u521B\u5EFA <code>delon.sh</code>\uFF1A</p>
<pre><code class="language-bash">#!/usr/bin/env bash
set -e
echo &quot;Download latest &#64;delon version&quot;
rm -rf delon-builds
git clone --depth 1 https://github.com/ng-alain/delon-builds.git
rm -rf node_modules/&#64;delon
rm -rf node_modules/ng-alain
rsync -am delon-builds/ node_modules/
NG_ALAIN_VERSION=$(node -p &quot;require(&#39;./node_modules/ng-alain/package.json&#39;).version&quot;)
rm -rf delon-builds
echo &quot;Using ng-alain version: $&#123;NG_ALAIN_VERSION&#125;&quot;
</code></pre>
<p>\u5F53\u9700\u8981\u4F7F\u7528&#64;delon\u7684\u6BCF\u65E5\u6784\u5EFA\u7248\u672C\uFF0C\u53EA\u9700\u8981\u5728\u8FD0\u884C\uFF1A</p>
<pre><code class="language-bash">bash delon.sh
</code></pre>
<blockquote>
<p>\u5982\u679C\u662F Windows \u73AF\u5883\uFF0C\u8BF7\u4F7F\u7528 <a href="https://docs.microsoft.com/en-us/windows/wsl/install" target="_blank" rel="noopener">WSL</a> \u6765\u6267\u884C Bash \u811A\u672C\u3002</p>
</blockquote>
<h2 id="\u5B89\u88C5"><a class="lake-link"><i data-anchor="\u5B89\u88C5"></i></a>\u5B89\u88C5</h2><h3 id="\u4E3A\u4EC0\u4E48\u627E\u4E0D\u5230_ng-zorro-antd/src/less_\u6837\u5F0F\uFF1F"><a class="lake-link"><i data-anchor="\u4E3A\u4EC0\u4E48\u627E\u4E0D\u5230_ng-zorro-antd/src/less_\u6837\u5F0F\uFF1F"></i></a>\u4E3A\u4EC0\u4E48\u627E\u4E0D\u5230 ng-zorro-antd/src/*.less \u6837\u5F0F\uFF1F</h3><p>\u4E24\u79CD\u60C5\u51B5\uFF1A</p>
<ul>
<li>\u4F7F\u7528 <code>cnpm</code> \u5B89\u88C5\u4F9D\u8D56\u5305\uFF0C\u4F1A\u9047\u5230\u65E0\u6CD5\u627E\u5230\u6837\u5F0F\u6587\u4EF6\u3002\u8FD9\u662F\u7531\u4E8E <code>cnpm</code> \u91C7\u7528\u7684\u662F\u8F6F\u94FE\u63A5\u8DEF\u5F84\u5F62\u5F0F\uFF0C\u5BFC\u81F4 <code>ng-zorro-antd</code> \u6587\u4EF6\u5939\u540D\u6709\u6240\u53D8\u52A8\uFF0C\u56E0\u6B64\u5EFA\u8BAE\u6539\u7528 <code>yarn</code> \u5B89\u88C5\u4F9D\u8D56\u5305\uFF0C\u5982\u679C\u662F\u7F51\u7EDC\u56E0\u7D20\uFF0C\u8BF7\u53C2\u8003\u4E0B\u65B9\u7684\u5982\u4F55\u6B63\u786E\u4F7F\u7528\u6DD8\u5B9D\u6E90\u3002</li>
<li><code>ng-zorro-antd</code> \u7248\u672C\u8FC7\u65E7\u5BFC\u81F4\u90E8\u5206\u7EC4\u4EF6\u65E0\u6CD5\u52A0\u8F7D\u5230\u76F8\u5E94\u6837\u5F0F</li>
</ul>
<h3 id="\u5982\u4F55\u4F7F\u7528\u5176\u4ED6\u955C\u50CF\u6E90\uFF1F"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528\u5176\u4ED6\u955C\u50CF\u6E90\uFF1F"></i></a>\u5982\u4F55\u4F7F\u7528\u5176\u4ED6\u955C\u50CF\u6E90\uFF1F</h3><p>\u5B89\u88C5 <a href="https://github.com/YunYouJun/nnrm/blob/main/README.zh-CN.md" target="_blank" rel="noopener">nnrm</a> \u63D2\u4EF6\u3002</p>
<pre><code class="language-bash"># \u5B89\u88C5 nnrm
npm install -g nnrm
# \u5C06Npm\u5207\u6362\u81F3\u6DD8\u5B9D\u6E90\uFF08\u4E0D\u540C npm \u6E90\u7BA1\u7406\u5668\u547D\u4EE4\u6709\u70B9\u4E0D\u4E00\u6837\uFF0C\u66F4\u591A\u7EC6\u8282\u8BF7\u53C2\u8003 nnrm \u6587\u6863\uFF09
nnrm use taobao
</code></pre>
<h2 id="\u914D\u7F6E"><a class="lake-link"><i data-anchor="\u914D\u7F6E"></i></a>\u914D\u7F6E</h2><h3 id="\u5982\u4F55\u672C\u5730\u90E8\u7F72_antd_\u56FE\u6807\uFF1F"><a class="lake-link"><i data-anchor="\u5982\u4F55\u672C\u5730\u90E8\u7F72_antd_\u56FE\u6807\uFF1F"></i></a>\u5982\u4F55\u672C\u5730\u90E8\u7F72 antd \u56FE\u6807\uFF1F</h3><p>\u9996\u5148\uFF0C\u6700\u65B0\u7684 iconfont \u6587\u4EF6\u53EF\u4EE5\u5230 <a href="https://ant.design/docs/spec/download-cn" target="_blank" rel="noopener">\u6B64\u94FE\u63A5</a>\uFF08<a href="http://ant-design.gitee.io/docs/spec/download-cn" target="_blank" rel="noopener">\u955C\u50CF</a>\uFF09 \u4E0B\u8F7D\u3002</p>
<p>\u6700\u540E\uFF0C\u5728 <code>src/styles/theme.less</code> \u91CD\u65B0\u5B9A\u4E49\u65B0\u7684\u8DEF\u5F84\uFF1A</p>
<pre><code class="language-less">&#64;icon-url: &quot;/assets/iconfont&quot;;
</code></pre>
<blockquote>
<p>\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84\u6216CDN\u5730\u5740\u3002</p>
</blockquote>
<h3 id="missing_locale_data_for_the_locale_andquot;zh-cnandquot;"><a class="lake-link"><i data-anchor="missing_locale_data_for_the_locale_andquot;zh-cnandquot;"></i></a>Missing locale data for the locale &quot;zh-cn&quot;</h3><p>\u7F3A\u5C11\u8BED\u8A00\u5BFC\u5165\uFF0C\u53C2\u8003<a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/app.module.ts#L6-L25" target="_blank" rel="noopener">app.module.ts</a>\u3002</p>
<h3 id="\u5982\u4F55\u672C\u5730\u90E8\u7F72ng-alaincom\u6587\u6863"><a class="lake-link"><i data-anchor="\u5982\u4F55\u672C\u5730\u90E8\u7F72ng-alaincom\u6587\u6863"></i></a>\u5982\u4F55\u672C\u5730\u90E8\u7F72ng-alain.com\u6587\u6863</h3><p>\u7EBF\u4E0A\u6587\u6863\u5C06\u53EA\u4FDD\u7559\u6700\u8FD1\u4E09\u4E2A\u4E3B\u7248\u672C\u53F7\u7684\u6570\u636E\uFF0C\u82E5\u662F\u4F4E\u7248\u672C\u53EF\u4EE5\u901A\u8FC7\u672C\u5730\u90E8\u7F72\u6765\u67E5\u770B\uFF1A</p>
<pre><code class="language-bash">git clone --depth 1 -b full https://github.com/ng-alain/archive-docs.git ng-alain-doc
cd ng-alain-doc
npm install
npm start
</code></pre>
<h3 id="\u4FEE\u590D360\u6D4F\u89C8\u5668\u4E0B\u90E8\u5206\u663E\u793A\u5F02\u5E38"><a class="lake-link"><i data-anchor="\u4FEE\u590D360\u6D4F\u89C8\u5668\u4E0B\u90E8\u5206\u663E\u793A\u5F02\u5E38"></i></a>\u4FEE\u590D360\u6D4F\u89C8\u5668\u4E0B\u90E8\u5206\u663E\u793A\u5F02\u5E38</h3><p>\u90E8\u5206360\u6D4F\u89C8\u5668\u5185\u7F6E\u7684 Chrome \u6838\u5FC3\u8FC7\u4F4E\uFF0C\u5BFC\u81F4\u90E8\u5206 CSS3 \u672A\u652F\u6301\uFF0C\u53EF\u4EE5\u624B\u52A8\u589E\u52A0 <code>.browserslistrc</code> \u66F4\u591A\u7EC6\u8282\u53C2\u8003  <a href="https://github.com/ng-alain/ng-alain/issues/2310#issuecomment-1299460266" target="_blank" rel="noopener">#2310</a>\u3002</p>
`,api:"",toc:[{id:"\u57FA\u7840",title:"\u57FA\u7840",children:[{id:"expression_changed_after_it_has_been_checked_error_\u9519\u8BEF",title:"Expression Changed After It Has Been Checked Error \u9519\u8BEF"},{id:"cant_bind_to_formgroup_since_it_isnt_a_known_property_of_form",title:"Can't bind to 'formGroup' since it isn't a known property of 'form'"},{id:"\u6570\u636E\u4FEE\u6539\u540E\u9875\u9762\u4E3A\u4EC0\u4E48\u6CA1\u6709\u66F4\u65B0",title:"\u6570\u636E\u4FEE\u6539\u540E\u9875\u9762\u4E3A\u4EC0\u4E48\u6CA1\u6709\u66F4\u65B0"},{id:"\u5982\u4F55\u4F7F\u7528delon\u6BCF\u65E5\u6784\u5EFA\u7248\u672C",title:"\u5982\u4F55\u4F7F\u7528@delon\u6BCF\u65E5\u6784\u5EFA\u7248\u672C"}]},{id:"\u5B89\u88C5",title:"\u5B89\u88C5",children:[{id:"\u4E3A\u4EC0\u4E48\u627E\u4E0D\u5230_ng-zorro-antd/src/less_\u6837\u5F0F\uFF1F",title:"\u4E3A\u4EC0\u4E48\u627E\u4E0D\u5230 ng-zorro-antd/src/*.less \u6837\u5F0F\uFF1F"},{id:"\u5982\u4F55\u4F7F\u7528\u5176\u4ED6\u955C\u50CF\u6E90\uFF1F",title:"\u5982\u4F55\u4F7F\u7528\u5176\u4ED6\u955C\u50CF\u6E90\uFF1F"}]},{id:"\u914D\u7F6E",title:"\u914D\u7F6E",children:[{id:"\u5982\u4F55\u672C\u5730\u90E8\u7F72_antd_\u56FE\u6807\uFF1F",title:"\u5982\u4F55\u672C\u5730\u90E8\u7F72 antd \u56FE\u6807\uFF1F"},{id:"missing_locale_data_for_the_locale_zh-cn",title:'Missing locale data for the locale "zh-cn"'},{id:"\u5982\u4F55\u672C\u5730\u90E8\u7F72ng-alaincom\u6587\u6863",title:"\u5982\u4F55\u672C\u5730\u90E8\u7F72ng-alain.com\u6587\u6863"},{id:"\u4FEE\u590D360\u6D4F\u89C8\u5668\u4E0B\u90E8\u5206\u663E\u793A\u5F02\u5E38",title:"\u4FEE\u590D360\u6D4F\u89C8\u5668\u4E0B\u90E8\u5206\u663E\u793A\u5F02\u5E38"}]}],raw:`---
order: 20
title:
  en-US: FAQ
  zh-CN: \u5E38\u89C1\u95EE\u9898
type: Other
---

\u63D0\u95EE\u4E4B\u524D\uFF0C\u8BF7\u5148\u67E5\u9605\u4E0B\u9762\u7684\u5E38\u89C1\u95EE\u9898\u3002

## \u57FA\u7840

### Expression Changed After It Has Been Checked Error \u9519\u8BEF

Angular \u4E0B\u5E38\u89C1\u9519\u8BEF\uFF0C[\u8FD9\u7BC7\u6587\u7AE0](https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4) \u4F1A\u5E2E\u52A9\u4F60\u7406\u89E3\u539F\u56E0\u3002

### Can't bind to 'formGroup' since it isn't a known property of 'form'

Angular \u4E0B\u5E38\u89C1\u9519\u8BEF\uFF0C\u4F7F\u7528 Reactive Forms \u9700\u8981\u989D\u5916\u5F15\u5165 \`ReactiveFormsModule\`\uFF0C\u53EF\u4EE5\u53C2\u8003[\u5B98\u65B9\u6587\u6863](https://angular.io/guide/reactive-forms)\u3002

### \u6570\u636E\u4FEE\u6539\u540E\u9875\u9762\u4E3A\u4EC0\u4E48\u6CA1\u6709\u66F4\u65B0

NG-ZORRO \u53CA @delon/* \u7EC4\u4EF6\u9ED8\u8BA4\u5728 OnPush \u6A21\u5F0F\u4E0B\u5DE5\u4F5C\uFF0Cmutate \u5BF9\u8C61\u6216\u8005\u6570\u7EC4\u4E0D\u4F1A\u89E6\u53D1 Angular \u7684\u53D8\u66F4\u68C0\u6D4B\uFF0C\u8BF7\u4F7F\u7528 immutable \u65B9\u5F0F\u3002

### \u5982\u4F55\u4F7F\u7528@delon\u6BCF\u65E5\u6784\u5EFA\u7248\u672C

NG-ALAIN \u63D0\u4F9B\u4E00\u4E2A [delon-builds](https://github.com/ng-alain/delon-builds.git) \u4ED3\u50A8\u4F5C\u4E3A\u6BCF\u65E5\u6784\u5EFA\u7248\u672C\uFF0C\u5B83\u5E76\u4E0D\u662F\u6700\u7EC8\u7A33\u5B9A\u7248\u672C\uFF0C\u4F46\u5305\u542B\u6700\u65B0\u5DF2\u4FEE\u590DBUG\u3001\u6700\u65B0\u529F\u80FD\uFF0C\u8981\u4F7F\u7528\u53EF\u4EE5\u5728\u6839\u76EE\u5F55\u521B\u5EFA \`delon.sh\`\uFF1A

\`\`\`bash
#!/usr/bin/env bash
set -e
echo "Download latest @delon version"
rm -rf delon-builds
git clone --depth 1 https://github.com/ng-alain/delon-builds.git
rm -rf node_modules/@delon
rm -rf node_modules/ng-alain
rsync -am delon-builds/ node_modules/
NG_ALAIN_VERSION=$(node -p "require('./node_modules/ng-alain/package.json').version")
rm -rf delon-builds
echo "Using ng-alain version: \${NG_ALAIN_VERSION}"
\`\`\`

\u5F53\u9700\u8981\u4F7F\u7528@delon\u7684\u6BCF\u65E5\u6784\u5EFA\u7248\u672C\uFF0C\u53EA\u9700\u8981\u5728\u8FD0\u884C\uFF1A

\`\`\`bash
bash delon.sh
\`\`\`

> \u5982\u679C\u662F Windows \u73AF\u5883\uFF0C\u8BF7\u4F7F\u7528 [WSL](https://docs.microsoft.com/en-us/windows/wsl/install) \u6765\u6267\u884C Bash \u811A\u672C\u3002

## \u5B89\u88C5

### \u4E3A\u4EC0\u4E48\u627E\u4E0D\u5230 ng-zorro-antd/src/*.less \u6837\u5F0F\uFF1F

\u4E24\u79CD\u60C5\u51B5\uFF1A

- \u4F7F\u7528 \`cnpm\` \u5B89\u88C5\u4F9D\u8D56\u5305\uFF0C\u4F1A\u9047\u5230\u65E0\u6CD5\u627E\u5230\u6837\u5F0F\u6587\u4EF6\u3002\u8FD9\u662F\u7531\u4E8E \`cnpm\` \u91C7\u7528\u7684\u662F\u8F6F\u94FE\u63A5\u8DEF\u5F84\u5F62\u5F0F\uFF0C\u5BFC\u81F4 \`ng-zorro-antd\` \u6587\u4EF6\u5939\u540D\u6709\u6240\u53D8\u52A8\uFF0C\u56E0\u6B64\u5EFA\u8BAE\u6539\u7528 \`yarn\` \u5B89\u88C5\u4F9D\u8D56\u5305\uFF0C\u5982\u679C\u662F\u7F51\u7EDC\u56E0\u7D20\uFF0C\u8BF7\u53C2\u8003\u4E0B\u65B9\u7684\u5982\u4F55\u6B63\u786E\u4F7F\u7528\u6DD8\u5B9D\u6E90\u3002
- \`ng-zorro-antd\` \u7248\u672C\u8FC7\u65E7\u5BFC\u81F4\u90E8\u5206\u7EC4\u4EF6\u65E0\u6CD5\u52A0\u8F7D\u5230\u76F8\u5E94\u6837\u5F0F

### \u5982\u4F55\u4F7F\u7528\u5176\u4ED6\u955C\u50CF\u6E90\uFF1F

\u5B89\u88C5 [nnrm](https://github.com/YunYouJun/nnrm/blob/main/README.zh-CN.md) \u63D2\u4EF6\u3002

\`\`\`bash
# \u5B89\u88C5 nnrm
npm install -g nnrm
# \u5C06Npm\u5207\u6362\u81F3\u6DD8\u5B9D\u6E90\uFF08\u4E0D\u540C npm \u6E90\u7BA1\u7406\u5668\u547D\u4EE4\u6709\u70B9\u4E0D\u4E00\u6837\uFF0C\u66F4\u591A\u7EC6\u8282\u8BF7\u53C2\u8003 nnrm \u6587\u6863\uFF09
nnrm use taobao
\`\`\`

## \u914D\u7F6E

### \u5982\u4F55\u672C\u5730\u90E8\u7F72 antd \u56FE\u6807\uFF1F

\u9996\u5148\uFF0C\u6700\u65B0\u7684 iconfont \u6587\u4EF6\u53EF\u4EE5\u5230 [\u6B64\u94FE\u63A5](https://ant.design/docs/spec/download-cn)\uFF08[\u955C\u50CF](http://ant-design.gitee.io/docs/spec/download-cn)\uFF09 \u4E0B\u8F7D\u3002

\u6700\u540E\uFF0C\u5728 \`src/styles/theme.less\` \u91CD\u65B0\u5B9A\u4E49\u65B0\u7684\u8DEF\u5F84\uFF1A

\`\`\`less
@icon-url: "/assets/iconfont";
\`\`\`

> \u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84\u6216CDN\u5730\u5740\u3002

### Missing locale data for the locale "zh-cn"

\u7F3A\u5C11\u8BED\u8A00\u5BFC\u5165\uFF0C\u53C2\u8003[app.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/app.module.ts#L6-L25)\u3002

### \u5982\u4F55\u672C\u5730\u90E8\u7F72ng-alain.com\u6587\u6863

\u7EBF\u4E0A\u6587\u6863\u5C06\u53EA\u4FDD\u7559\u6700\u8FD1\u4E09\u4E2A\u4E3B\u7248\u672C\u53F7\u7684\u6570\u636E\uFF0C\u82E5\u662F\u4F4E\u7248\u672C\u53EF\u4EE5\u901A\u8FC7\u672C\u5730\u90E8\u7F72\u6765\u67E5\u770B\uFF1A

\`\`\`bash
git clone --depth 1 -b full https://github.com/ng-alain/archive-docs.git ng-alain-doc
cd ng-alain-doc
npm install
npm start
\`\`\`

### \u4FEE\u590D360\u6D4F\u89C8\u5668\u4E0B\u90E8\u5206\u663E\u793A\u5F02\u5E38

\u90E8\u5206360\u6D4F\u89C8\u5668\u5185\u7F6E\u7684 Chrome \u6838\u5FC3\u8FC7\u4F4E\uFF0C\u5BFC\u81F4\u90E8\u5206 CSS3 \u672A\u652F\u6301\uFF0C\u53EF\u4EE5\u624B\u52A8\u589E\u52A0 \`.browserslistrc\` \u66F4\u591A\u7EC6\u8282\u53C2\u8003  [#2310](https://github.com/ng-alain/ng-alain/issues/2310#issuecomment-1299460266)\u3002`}}};codes=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=o({type:n,selectors:[["docs-faq"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&i(0,"app-docs",0),e&2&&a("codes",t.codes)("item",t.item)},dependencies:[r],encapsulation:2})};var k=class n{item={name:"getting-started",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:10,title:"Getting Started",description:"NG-ALAIN is a production-ready solution for admin interfaces. Built on the design principles developed by Ant Design, this project introduces higher l...",group:"Basic",path:"docs/getting-started.en-US.md",url:"/docs/getting-started/en"},text:`<h2 id="foreword"><a class="lake-link"><i data-anchor="foreword"></i></a>Foreword</h2><p>NG-ALAIN is a production-ready solution for admin interfaces. Built on the design principles developed by <a href="https://ant.design/" target="_blank" rel="noopener">Ant Design</a>, this project introduces higher level components; we have developed templates, components, and a corresponding design kit to improve the user and development experience for admin interfaces.</p>
<p><strong>How to read document</strong></p>
<p>This document uses the following conventions:</p>
<ul>
<li>API<ul>
<li><code>[]</code> Input Property</li>
<li><code>()</code> Output Event</li>
<li><code>[()]</code> Two-way binding</li>
<li><code>ng-content</code> Component content placeholders</li>
<li><code>#tpl</code> Refers <code>&lt;ng-template #tpl&gt;&lt;/ng-template&gt;</code></li>
</ul>
</li>
</ul>
<h2 id="preparation"><a class="lake-link"><i data-anchor="preparation"></i></a>Preparation</h2><p>You will need <a href="http://nodejs.org/" target="_blank" rel="noopener">node</a> and <a href="https://git-scm.com/" target="_blank" rel="noopener">git</a>. The project is based on <a href="https://www.tslang.com/" target="_blank" rel="noopener">Typescript</a>, <a href="https://angular.io/" target="_blank" rel="noopener">Angular</a>, <a href="http://g2.alipay.com/" target="_blank" rel="noopener">g2</a>, <a href="https://github.com/ng-alain/delon" target="_blank" rel="noopener">&#64;delon</a> and <a href="https://ng.ant.design/" target="_blank" rel="noopener">ng-zorro-antd</a>. It would be helpful if you have pre-existing knowledge on those.</p>
<h2 id="installation"><a class="lake-link"><i data-anchor="installation"></i></a>Installation</h2><h3 id="cli_recommend"><a class="lake-link"><i data-anchor="cli_recommend"></i></a>CLI (Recommend)</h3><p>Please make sure global Angular Cli is latest version via <code>ng version</code> command, please refer to <a href="https://angular.io/cli" target="_blank" rel="noopener">CLI Command Reference</a> for how to upgrade.</p>
<pre><code class="language-bash">npm install -g &#64;angular/cli&#64;19
ng new my-project --style less --routing
cd my-project
ng add ng-alain
npm start
# Or use HMR mode by: npm run hmr
</code></pre>
<p><strong>Multiple projects</strong></p>
<pre><code class="language-bash">yarn global add &#64;angular/cli&#64;19
ng new my-workspace --no-create-application --package-manager yarn
cd my-workspace
ng g application mgr --style less --routing
ng add ng-alain
yarn mgr:start
# Or use HMR mode by: yarn run mgr:hmr
</code></pre>
<blockquote>
<p>Please refer to <a href="/cli">Schematics</a> for more details.</p>
</blockquote>
<h3 id="clone_the_git_repository"><a class="lake-link"><i data-anchor="clone_the_git_repository"></i></a>Clone the Git Repository</h3><pre><code class="language-bash">git clone --depth=1 https://github.com/ng-alain/ng-alain.git my-project
cd my-project
npm install
npm start
# Or use HMR mode by: npm run hmr
</code></pre>
<blockquote>
<p>Note: Installing with the CLI is a clean scaffolding; using clone the git repository include all example pages.</p>
</blockquote>
<h2 id="scaffolding"><a class="lake-link"><i data-anchor="scaffolding"></i></a>Scaffolding</h2><p>NG-ALAIN is a standard Angular CLI project that includes common routes for admins and demonstrates our component library. The project layout is as follows:</p>
<pre><code>\u251C\u2500\u2500 _mock                                       # Mock Data rule
\u251C\u2500\u2500 src
\u2502\xA0\xA0 \u251C\u2500\u2500 app
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 core                                # Core module
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 i18n
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 net
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 default.interceptor.ts      # Default HTTP interceptor
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 services
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 startup.service.ts          # Initialize project configuration
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 index.ts                        # Core module file
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 layout                              # Core layout
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 routes
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 **                              # Business directory
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 routes.ts                       # Service routes registration
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 shared                              # Shared module
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 shared-delon.module.ts          # &#64;Delon/* import of secondary shared modules
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 shared-zorro.module.ts          # NG-ZORRO import of secondary shared modules
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 shared-imports.ts               # Shared module file
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 app.ts                              # Root component
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 app.config.ts                       # &#64;delon &amp; ng-zorro global config
\u2502\xA0\xA0 \u251C\u2500\u2500 assets                                  # Local static resource
\u2502\xA0\xA0 \u251C\u2500\u2500 environments                            # Environment variable configuration
\u2502\xA0\xA0 \u251C\u2500\u2500 styles                                  # Style directory
\u2514\u2500\u2500 \u2514\u2500\u2500 style.less                              # Style guide entry
</code></pre>
<h2 id="development"><a class="lake-link"><i data-anchor="development"></i></a>Development</h2><pre><code class="language-bash">npm start
</code></pre>
<p>This will automatically open <a href="http://localhost:4200" target="_blank" rel="noopener">http://localhost:4200</a>. If you see the following page then you have succeeded.</p>
<p><img src="./assets/screenshot/desktop.png" alt="" width="700" loading="lazy"></p>
<h2 id="environment_support"><a class="lake-link"><i data-anchor="environment_support"></i></a>Environment Support</h2><ul>
<li><strong>Limited by Angular, no longer supports IE</strong></li>
<li>Modern browsers, <a href="https://angular.io/guide/browser-support" target="_blank" rel="noopener">Browser support</a></li>
<li>Server-side Rendering</li>
<li><a href="https://electron.atom.io/" target="_blank" rel="noopener">Electron</a></li>
</ul>
<table>
<thead>
<tr>
<th><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px"></a></br>Edge</th>
<th><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px"></a></br>Firefox</th>
<th><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px"></a></br>Chrome</th>
<th><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px"></a></br>Safari</th>
<th><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px"></a></br>Opera</th>
<th><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px"></a></br>Electron</th>
</tr>
</thead>
<tbody><tr>
<td>last 2 versions</td>
<td>last 2 versions</td>
<td>last 2 versions</td>
<td>last 2 versions</td>
<td>last 2 versions</td>
<td>last 2 versions</td>
</tr>
</tbody></table>
<h2 id="contributing"><a class="lake-link"><i data-anchor="contributing"></i></a>Contributing</h2><p>Please read our <a href="/docs/contributing">CONTRIBUTING.md</a> first.</p>
<p>If you&#39;d like to help us improve NG-ZORRO, just create a <a href="https://github.com/ng-alain/ng-alain/pulls" target="_blank" rel="noopener">Pull Request</a>. Feel free to report bugs and issues <a href="https://github.com/ng-alain/ng-alain/issues" target="_blank" rel="noopener">here</a>.</p>
<blockquote>
<p>If you&#39;re new to posting issues, we ask that you read <a href="http://www.catb.org/~esr/faqs/smart-questions.html" target="_blank" rel="noopener"><em>How To Ask Questions The Smart Way</em></a>(This guide does not provide actual support services for this project!) and <a href="https://github.com/seajs/seajs/issues/545" target="_blank" rel="noopener">How to Ask a Question in Open Source Community</a> and <a href="http://www.chiark.greenend.org.uk/~sgtatham/bugs.html" target="_blank" rel="noopener">How to Report Bugs Effectively</a> prior to posting. Well written bug reports help us help you!</p>
</blockquote>
<h2 id="need_help?"><a class="lake-link"><i data-anchor="need_help?"></i></a>Need Help?</h2><p>For questions on how to use ng-alain, please post questions to <a href="https://stackoverflow.com/questions/tagged/ng-alain" target="_blank" rel="noopener"><img src="https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-logo.svg" alt="Stack Overflow" width="140" loading="lazy"></a> using the <code>ng-alain</code> tag.</p>
<p>As always, we encourage experienced users to help those who are not familiar with <code>ng-alain</code>!</p>
<h2 id="donate"><a class="lake-link"><i data-anchor="donate"></i></a>DONATE</h2><p>If you would like to <a href="https://www.paypal.me/cipchk" target="_blank" rel="noopener"><img src="https://img.shields.io/badge/Donate-PayPal-green.svg" alt="Donate"></a>
to NG-ALAIN.</p>
`,api:"",toc:[{id:"foreword",title:"Foreword"},{id:"preparation",title:"Preparation"},{id:"installation",title:"Installation",children:[{id:"cli_recommend",title:"CLI (Recommend)"},{id:"clone_the_git_repository",title:"Clone the Git Repository"}]},{id:"scaffolding",title:"Scaffolding"},{id:"development",title:"Development"},{id:"environment_support",title:"Environment Support"},{id:"contributing",title:"Contributing"},{id:"need_help?",title:"Need Help?"},{id:"donate",title:"DONATE"}],raw:`---
order: 10
title: Getting Started
type: Basic
---

## Foreword

NG-ALAIN is a production-ready solution for admin interfaces. Built on the design principles developed by [Ant Design](https://ant.design/), this project introduces higher level components; we have developed templates, components, and a corresponding design kit to improve the user and development experience for admin interfaces.

**How to read document**

This document uses the following conventions:

- API
  - \`[]\` Input Property
  - \`()\` Output Event
  - \`[()]\` Two-way binding
  - \`ng-content\` Component content placeholders
  - \`#tpl\` Refers \`<ng-template #tpl></ng-template>\`

## Preparation

You will need [node](http://nodejs.org/) and [git](https://git-scm.com/). The project is based on [Typescript](https://www.tslang.com/), [Angular](https://angular.io/), [g2](http://g2.alipay.com/), [@delon](https://github.com/ng-alain/delon) and [ng-zorro-antd](https://ng.ant.design/). It would be helpful if you have pre-existing knowledge on those.

## Installation

### CLI (Recommend)

Please make sure global Angular Cli is latest version via \`ng version\` command, please refer to [CLI Command Reference](https://angular.io/cli) for how to upgrade.

\`\`\`bash
npm install -g @angular/cli@19
ng new my-project --style less --routing
cd my-project
ng add ng-alain
npm start
# Or use HMR mode by: npm run hmr
\`\`\`

**Multiple projects**

\`\`\`bash
yarn global add @angular/cli@19
ng new my-workspace --no-create-application --package-manager yarn
cd my-workspace
ng g application mgr --style less --routing
ng add ng-alain
yarn mgr:start
# Or use HMR mode by: yarn run mgr:hmr
\`\`\`

> Please refer to [Schematics](/cli) for more details.

### Clone the Git Repository

\`\`\`bash
git clone --depth=1 https://github.com/ng-alain/ng-alain.git my-project
cd my-project
npm install
npm start
# Or use HMR mode by: npm run hmr
\`\`\`

> Note: Installing with the CLI is a clean scaffolding; using clone the git repository include all example pages.

## Scaffolding

NG-ALAIN is a standard Angular CLI project that includes common routes for admins and demonstrates our component library. The project layout is as follows:

\`\`\`
\u251C\u2500\u2500 _mock                                       # Mock Data rule
\u251C\u2500\u2500 src
\u2502\xA0\xA0 \u251C\u2500\u2500 app
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 core                                # Core module
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 i18n
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 net
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 default.interceptor.ts      # Default HTTP interceptor
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 services
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 startup.service.ts          # Initialize project configuration
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 index.ts                        # Core module file
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 layout                              # Core layout
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 routes
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 **                              # Business directory
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 routes.ts                       # Service routes registration
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 shared                              # Shared module
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 shared-delon.module.ts          # @Delon/* import of secondary shared modules
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 shared-zorro.module.ts          # NG-ZORRO import of secondary shared modules
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 shared-imports.ts               # Shared module file
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 app.ts                              # Root component
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 app.config.ts                       # @delon & ng-zorro global config
\u2502\xA0\xA0 \u251C\u2500\u2500 assets                                  # Local static resource
\u2502\xA0\xA0 \u251C\u2500\u2500 environments                            # Environment variable configuration
\u2502\xA0\xA0 \u251C\u2500\u2500 styles                                  # Style directory
\u2514\u2500\u2500 \u2514\u2500\u2500 style.less                              # Style guide entry
\`\`\`

## Development

\`\`\`bash
npm start
\`\`\`

This will automatically open [http://localhost:4200](http://localhost:4200). If you see the following page then you have succeeded.

![](./assets/screenshot/desktop.png | width=700)

## Environment Support

- **Limited by Angular, no longer supports IE**
- Modern browsers, [Browser support](https://angular.io/guide/browser-support)
- Server-side Rendering
- [Electron](https://electron.atom.io/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Electron |
| --------- | --------- | --------- | --------- | --------- | --------- |
| last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions

## Contributing

Please read our [CONTRIBUTING.md](/docs/contributing) first.

If you'd like to help us improve NG-ZORRO, just create a [Pull Request](https://github.com/ng-alain/ng-alain/pulls). Feel free to report bugs and issues [here](https://github.com/ng-alain/ng-alain/issues).

> If you're new to posting issues, we ask that you read [*How To Ask Questions The Smart Way*](http://www.catb.org/~esr/faqs/smart-questions.html)(This guide does not provide actual support services for this project!) and [How to Ask a Question in Open Source Community](https://github.com/seajs/seajs/issues/545) and [How to Report Bugs Effectively](http://www.chiark.greenend.org.uk/~sgtatham/bugs.html) prior to posting. Well written bug reports help us help you!

## Need Help?

For questions on how to use ng-alain, please post questions to [![Stack Overflow](https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-logo.svg | width=140)](https://stackoverflow.com/questions/tagged/ng-alain) using the \`ng-alain\` tag.

As always, we encourage experienced users to help those who are not familiar with \`ng-alain\`!

## DONATE

If you would like to [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/cipchk)
 to NG-ALAIN.`},"zh-CN":{meta:{order:10,title:"\u4ECB\u7ECD",description:"NG-ALAIN \u662F\u4E00\u4E2A\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u524D\u7AEF/\u8BBE\u8BA1\u89E3\u51B3\u65B9\u6848\u811A\u624B\u67B6\uFF0C\u6211\u4EEC\u79C9\u627F Ant Design \u7684\u8BBE\u8BA1\u4EF7\u503C\u89C2\uFF0C\u76EE\u6807\u4E5F\u975E\u5E38\u7B80\u5355\uFF0C\u5E0C\u671B\u5728Angular\u4E0A\u9762\u5F00\u53D1\u4F01\u4E1A\u540E\u53F0\u66F4\u7B80\u5355\u3001\u66F4\u5FEB\u901F\u3002\u968F\u7740\u300E\u8BBE\u8BA1\u8005\u300F\u7684\u4E0D\u65AD\u53CD\u9988\uFF0C\u5C06\u6301\u7EED\u8FED\u4EE3\uFF0C\u9010\u6B65\u6C89\u6DC0\u548C\u603B\u7ED3\u51FA\u66F4\u591A\u8BBE\u8BA1\u6A21\u5F0F\u548C\u76F8\u5E94\u7684\u4EE3\u7801\u5B9E\u73B0\uFF0C\u9610\u8FF0\u4E2D\u540E\u53F0\u4EA7\u54C1\u6A21\u677F/\u7EC4\u4EF6/\u4E1A\u52A1\u573A\u666F\u7684\u6700\u4F73...",group:"Basic",path:"docs/getting-started.zh-CN.md",url:"/docs/getting-started/zh"},text:`<h2 id="\u4EC0\u4E48\u662Fng-alain"><a class="lake-link"><i data-anchor="\u4EC0\u4E48\u662Fng-alain"></i></a>\u4EC0\u4E48\u662FNG-ALAIN</h2><p>NG-ALAIN \u662F\u4E00\u4E2A\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u524D\u7AEF/\u8BBE\u8BA1\u89E3\u51B3\u65B9\u6848\u811A\u624B\u67B6\uFF0C\u6211\u4EEC\u79C9\u627F <a href="https://ant.design/" target="_blank" rel="noopener">Ant Design</a> \u7684\u8BBE\u8BA1\u4EF7\u503C\u89C2\uFF0C\u76EE\u6807\u4E5F\u975E\u5E38\u7B80\u5355\uFF0C\u5E0C\u671B\u5728Angular\u4E0A\u9762\u5F00\u53D1\u4F01\u4E1A\u540E\u53F0\u66F4\u7B80\u5355\u3001\u66F4\u5FEB\u901F\u3002\u968F\u7740\u300E\u8BBE\u8BA1\u8005\u300F\u7684\u4E0D\u65AD\u53CD\u9988\uFF0C\u5C06\u6301\u7EED\u8FED\u4EE3\uFF0C\u9010\u6B65\u6C89\u6DC0\u548C\u603B\u7ED3\u51FA\u66F4\u591A\u8BBE\u8BA1\u6A21\u5F0F\u548C\u76F8\u5E94\u7684\u4EE3\u7801\u5B9E\u73B0\uFF0C\u9610\u8FF0\u4E2D\u540E\u53F0\u4EA7\u54C1\u6A21\u677F/\u7EC4\u4EF6/\u4E1A\u52A1\u573A\u666F\u7684\u6700\u4F73\u5B9E\u8DF5\uFF0C\u4E5F\u5341\u5206\u671F\u5F85\u4F60\u7684\u53C2\u4E0E\u548C\u5171\u5EFA\u3002</p>
<h2 id="\u73AF\u5883\u642D\u5EFA"><a class="lake-link"><i data-anchor="\u73AF\u5883\u642D\u5EFA"></i></a>\u73AF\u5883\u642D\u5EFA</h2><p>Angular \u5F00\u53D1\u73AF\u5883\u81F3\u5C11\u9700\u8981\u5B89\u88C5 <a href="https://nodejs.org/en/download/" target="_blank" rel="noopener">Node.js</a>(Node.js \u5185\u7F6E\u4E86 <a href="https://www.npmjs.com/get-npm" target="_blank" rel="noopener">npm</a> \u65E0\u987B\u5355\u72EC\u5B89\u88C5\uFF09\u3001<a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode\u7F16\u8F91\u5668</a>\uFF0C\u5176\u4E2D Node.js \u5EFA\u8BAE\u5B89\u88C5 <strong>LTS</strong> \u7248\u672C\uFF0C\u5B89\u88C5\u5B8C\u6210\u540E\u53EF\u4EE5\u901A\u8FC7\u7EC8\u7AEF\u7A97\u53E3\u4E2D\u8FD0\u884C\uFF1A</p>
<pre><code class="language-bash">node -v # \u67E5\u770B Node.js \u5F53\u524D\u7248\u672C
npm -v # \u67E5\u770B Npm \u5F53\u524D\u7248\u672C
</code></pre>
<p>Npm \u9ED8\u8BA4\u4ECE\u56FD\u5916\u6E90\u6765\u4E0B\u8F7D\u5305\u4FE1\u606F\uFF0C\u9274\u4E8E\u56FD\u5185\u73AF\u5883\u56E0\u7D20\uFF0C\u5728\u5F00\u59CB\u4E0B\u4E00\u6B65\u524D\u5148\u5B89\u88C5 <a href="https://github.com/YunYouJun/nnrm/blob/main/README.zh-CN.md" target="_blank" rel="noopener">nnrm</a> \u5E76\u5207\u6362\u81F3\u6DD8\u5B9D\u955C\u50CF\uFF1A</p>
<pre><code class="language-bash"># \u5B89\u88C5 nnrm
npm install -g nnrm
# \u5C06Npm\u5207\u6362\u81F3\u6DD8\u5B9D\u6E90\uFF08\u4E0D\u540C npm \u6E90\u7BA1\u7406\u5668\u547D\u4EE4\u6709\u70B9\u4E0D\u4E00\u6837\uFF0C\u66F4\u591A\u7EC6\u8282\u8BF7\u53C2\u8003 nnrm \u6587\u6863\uFF09
nnrm use taobao
</code></pre>
<h2 id="\u5B89\u88C5"><a class="lake-link"><i data-anchor="\u5B89\u88C5"></i></a>\u5B89\u88C5</h2><h3 id="\u5168\u5C40_angular_cli"><a class="lake-link"><i data-anchor="\u5168\u5C40_angular_cli"></i></a>\u5168\u5C40 Angular Cli</h3><p>\u5B89\u88C5\u4E4B\u524D\u8BF7\u5148\u786E\u4FDD\u672C\u5730\u5DF2\u7ECF\u5B89\u88C5\u5168\u5C40 Angular Cli\uFF0C\u53EA\u6709\u8FD9\u6837\u624D\u80FD\u968F\u65F6\u968F\u5730\u5728\u7EC8\u7AEF\u4F7F\u7528 <code>ng</code> \u547D\u4EE4\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7EC8\u7AEF\u7A97\u53E3\u4E2D\u8FD0\u884C\uFF1A</p>
<pre><code class="language-bash">npm install -g &#64;angular/cli&#64;19
</code></pre>
<h3 id="\u521B\u5EFAng-alain\u9879\u76EE"><a class="lake-link"><i data-anchor="\u521B\u5EFAng-alain\u9879\u76EE"></i></a>\u521B\u5EFANG-ALAIN\u9879\u76EE</h3><p>NG-ALAIN \u5FC5\u987B\u5148\u521B\u5EFA\u4E00\u4E2A\u5168\u65B0\u7684 Angular \u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7EC8\u7AEF\u7A97\u53E3\u4E2D\u8FD0\u884C\uFF1A</p>
<pre><code class="language-bash">ng new my-project --style less --routing
cd my-project
# \u6216\u591A\u91CD\u9879\u76EE
ng new my-workspace --no-create-application
cd my-workspace
ng g application mgr --style less --routing
</code></pre>
<blockquote>
<p>\u5982\u679C\u4F60\u60F3\u4E86\u89E3 <code>--style</code>\u3001<code>--routing</code> \u53C2\u6570\uFF0C\u8BF7\u53C2\u8003 <a href="https://angular.io/cli/new#options" target="_blank" rel="noopener">ng new</a> \u6587\u6863\u3002</p>
</blockquote>
<p>\u63A5\u4E0B\u6765\u53EA\u9700\u8981\u5C06 NG-ALAIN \u6DFB\u52A0\u5230 <code>my-project</code> \u9879\u76EE\u4E2D\u5373\u53EF\uFF0C\u5728 <code>my-project</code> \u76EE\u5F55\u4E0B\u901A\u8FC7\u7EC8\u7AEF\u7A97\u53E3\u4E2D\u8FD0\u884C\uFF1A</p>
<pre><code class="language-bash">ng add ng-alain
</code></pre>
<blockquote>
<p>\u82E5\u591A\u91CD\u9879\u76EE\u65F6\uFF0C\u9700\u8981\u63D0\u4F9B\u5177\u4F53\u7684\u9879\u76EE\u540D\u79F0\u3002</p>
</blockquote>
<p>NG-ALAIN \u4F1A\u8BE2\u95EE\u662F\u5426\u9700\u8981\u4E00\u4E9B\u989D\u5916\u7684\u63D2\u4EF6\uFF0C\u4E00\u5F00\u59CB\u5B8C\u5168\u53EF\u4EE5\u4E00\u8DEF\u56DE\u8F66\uFF0C\u8FD9\u4E9B\u63D2\u4EF6\u90FD\u662F\u53EF\u63D2\u62D4\uFF0C\u540E\u671F\u53EF\u4EE5\u81EA\u884C\u6DFB\u52A0\u4E0E\u79FB\u9664\u3002</p>
<blockquote>
<p>\u4EE5\u4E0A\u53EA\u4F1A\u751F\u6210\u5E72\u51C0\u7684\u9879\u76EE\uFF0C\u53EF\u4EE5\u76F4\u63A5\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\u4E2D\u3002\u4F60\u53EF\u80FD\u5728<a href="https://ng-alain.gitee.io/" target="_blank" rel="noopener">\u9884\u89C8</a>\u4E0A\u770B\u5230\u8BB8\u591A\u793A\u4F8B\u9875\uFF0C\u5B83\u4EEC\u5168\u90FD\u53EF\u4EE5\u5728 <a href="https://github.com/ng-alain/ng-alain" target="_blank" rel="noopener">Github</a> \u67E5\u770B\u5230\u6E90\u4EE3\u7801\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u901A\u8FC7 Git \u514B\u9686\u4EE3\u7801\u7684\u5F62\u5F0F\u83B7\u5F97\uFF1A</p>
<pre><code class="language-bash">git clone --depth=1 https://github.com/ng-alain/ng-alain.git my-project
cd my-project
npm install
</code></pre>
</blockquote>
<h3 id="\u8FD0\u884C"><a class="lake-link"><i data-anchor="\u8FD0\u884C"></i></a>\u8FD0\u884C</h3><pre><code class="language-bash">npm start
</code></pre>
<p>\u542F\u52A8\u5B8C\u6210\u540E\u4F1A\u6253\u5F00\u6D4F\u89C8\u5668\u8BBF\u95EE <a href="http://localhost:4200" target="_blank" rel="noopener">http://localhost:4200</a>\uFF0C\u82E5\u4F60\u770B\u5230\u5982\u4E0B\u9875\u9762\u5219\u4EE3\u8868\u6210\u529F\u4E86\u3002</p>
<p><img src="./assets/screenshot/start.png" alt="" width="700" loading="lazy"></p>
<p>\u606D\u559C\u4F60\uFF0C\u4F60\u5DF2\u7ECF\u6210\u529F\u90E8\u7F72\u4E00\u4E2A NG-ALAIN \u9879\u76EE\u3002</p>
<h2 id="\u652F\u6301\u73AF\u5883"><a class="lake-link"><i data-anchor="\u652F\u6301\u73AF\u5883"></i></a>\u652F\u6301\u73AF\u5883</h2><ul>
<li><strong>\u53D7\u9650\u4E8E Angular\uFF0C\u4E0D\u518D\u652F\u6301 IE</strong></li>
<li>\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF0C<a href="https://angular.io/guide/browser-support" target="_blank" rel="noopener">\u6D4F\u89C8\u5668\u652F\u6301</a></li>
<li>\u652F\u6301\u670D\u52A1\u7AEF\u6E32\u67D3</li>
<li><a href="https://electron.atom.io/" target="_blank" rel="noopener">Electron</a></li>
</ul>
<table>
<thead>
<tr>
<th><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px"></a></br>Edge</th>
<th><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px"></a></br>Firefox</th>
<th><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px"></a></br>Chrome</th>
<th><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px"></a></br>Safari</th>
<th><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px"></a></br>Opera</th>
<th><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px"></a></br>Electron</th>
</tr>
</thead>
<tbody><tr>
<td>last 2 versions</td>
<td>last 2 versions</td>
<td>last 2 versions</td>
<td>last 2 versions</td>
<td>last 2 versions</td>
<td>last 2 versions</td>
</tr>
</tbody></table>
<h2 id="\u5982\u4F55\u8D21\u732E"><a class="lake-link"><i data-anchor="\u5982\u4F55\u8D21\u732E"></i></a>\u5982\u4F55\u8D21\u732E</h2><p>\u5728\u4EFB\u4F55\u5F62\u5F0F\u7684\u53C2\u4E0E\u524D\uFF0C\u8BF7\u5148\u9605\u8BFB <a href="/docs/contributing">\u8D21\u732E\u8005\u6587\u6863</a>\u3002\u5982\u679C\u4F60\u5E0C\u671B\u53C2\u4E0E\u8D21\u732E\uFF0C\u6B22\u8FCE <a href="https://github.com/ng-alain/ng-alain/pulls" target="_blank" rel="noopener">Pull Request</a>\uFF0C\u6216\u7ED9\u6211\u4EEC <a href="https://github.com/ng-alain/ng-alain/issues" target="_blank" rel="noopener">\u62A5\u544A Bug</a>\u3002</p>
<blockquote>
<p>\u5F3A\u70C8\u63A8\u8350\u9605\u8BFB <a href="https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way" target="_blank" rel="noopener">\u300A\u63D0\u95EE\u7684\u667A\u6167\u300B</a>(\u672C\u6307\u5357\u4E0D\u63D0\u4F9B\u6B64\u9879\u76EE\u7684\u5B9E\u9645\u652F\u6301\u670D\u52A1\uFF01)\u3001<a href="https://github.com/seajs/seajs/issues/545" target="_blank" rel="noopener">\u300A\u5982\u4F55\u5411\u5F00\u6E90\u793E\u533A\u63D0\u95EE\u9898\u300B</a> \u548C <a href="http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html" target="_blank" rel="noopener">\u300A\u5982\u4F55\u6709\u6548\u5730\u62A5\u544A Bug\u300B</a>\u3001<a href="https://zhuanlan.zhihu.com/p/25795393" target="_blank" rel="noopener">\u300A\u5982\u4F55\u5411\u5F00\u6E90\u9879\u76EE\u63D0\u4EA4\u65E0\u6CD5\u89E3\u7B54\u7684\u95EE\u9898\u300B</a>\uFF0C\u66F4\u597D\u7684\u95EE\u9898\u66F4\u5BB9\u6613\u83B7\u5F97\u5E2E\u52A9\u3002</p>
</blockquote>
<h2 id="\u793E\u533A\u4E92\u52A9"><a class="lake-link"><i data-anchor="\u793E\u533A\u4E92\u52A9"></i></a>\u793E\u533A\u4E92\u52A9</h2><p>\u5982\u679C\u60A8\u5728\u4F7F\u7528\u7684\u8FC7\u7A0B\u4E2D\u78B0\u5230\u95EE\u9898\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u51E0\u4E2A\u9014\u5F84\u5BFB\u6C42\u5E2E\u52A9\uFF0C\u540C\u65F6\u6211\u4EEC\u4E5F\u9F13\u52B1\u8D44\u6DF1\u7528\u6237\u901A\u8FC7\u4E0B\u9762\u7684\u9014\u5F84\u7ED9\u65B0\u4EBA\u63D0\u4F9B\u5E2E\u52A9\u3002</p>
<p>\u901A\u8FC7 Stack Overflow \u6216\u8005 Segment Fault \u63D0\u95EE\u65F6\uFF0C\u5EFA\u8BAE\u52A0\u4E0A <code>ng-alain</code> \u6807\u7B7E\u3002</p>
<ol>
<li>QQ \u7FA4<ul>
<li><a href="//shang.qq.com/wpa/qunwpa?idkey=f5102185e4ecf8b641a176596aca3037a45d3452329f69cf3bc496877cd087ff" target="_blank" rel="noopener">316911865</a></li>
<li><a href="//shang.qq.com/wpa/qunwpa?idkey=06823e225199af79b0c5ba3bbc89756ee57c2b0cc2115e3f44cc19230db2b0c3" target="_blank" rel="noopener">428749721</a></li>
</ul>
</li>
<li><a href="https://segmentfault.com/t/ng-alain" target="_blank" rel="noopener"><img src="https://gw.alipayobjects.com/zos/rmsportal/hfYFfCvHTQTUKntlJbMF.svg" alt="Segment Fault" width="140" loading="lazy"></a>\uFF08\u4E2D\u6587\uFF09</li>
<li>\u52A0\u5165 NG-ALAIN \u81EA\u52A9\u670D\u52A1\u7FA4\uFF08\u4E2D\u6587\uFF09</li>
</ol>
<p><img src="./assets/qq-group.png" alt=""></p>
<h2 id="\u6350\u52A9"><a class="lake-link"><i data-anchor="\u6350\u52A9"></i></a>\u6350\u52A9</h2><p>\u5982\u679C\u4F60\u89C9\u5F97 NG-ALAIN \u4E0D\u9519\uFF0C\u53EF\u4EE5\u8003\u8651\u81EA\u613F\u4E3A\u672C\u7AD9\u6253\u8D4F\u6216\u6350\u52A9\u3002</p>
<p><img src="./assets/donate.png" alt=""></p>
`,api:"",toc:[{id:"\u4EC0\u4E48\u662Fng-alain",title:"\u4EC0\u4E48\u662FNG-ALAIN"},{id:"\u73AF\u5883\u642D\u5EFA",title:"\u73AF\u5883\u642D\u5EFA"},{id:"\u5B89\u88C5",title:"\u5B89\u88C5",children:[{id:"\u5168\u5C40_angular_cli",title:"\u5168\u5C40 Angular Cli"},{id:"\u521B\u5EFAng-alain\u9879\u76EE",title:"\u521B\u5EFANG-ALAIN\u9879\u76EE"},{id:"\u8FD0\u884C",title:"\u8FD0\u884C"}]},{id:"\u652F\u6301\u73AF\u5883",title:"\u652F\u6301\u73AF\u5883"},{id:"\u5982\u4F55\u8D21\u732E",title:"\u5982\u4F55\u8D21\u732E"},{id:"\u793E\u533A\u4E92\u52A9",title:"\u793E\u533A\u4E92\u52A9"},{id:"\u6350\u52A9",title:"\u6350\u52A9"}],raw:`---
order: 10
title: \u4ECB\u7ECD
type: Basic
---

## \u4EC0\u4E48\u662FNG-ALAIN

NG-ALAIN \u662F\u4E00\u4E2A\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u524D\u7AEF/\u8BBE\u8BA1\u89E3\u51B3\u65B9\u6848\u811A\u624B\u67B6\uFF0C\u6211\u4EEC\u79C9\u627F [Ant Design](https://ant.design/) \u7684\u8BBE\u8BA1\u4EF7\u503C\u89C2\uFF0C\u76EE\u6807\u4E5F\u975E\u5E38\u7B80\u5355\uFF0C\u5E0C\u671B\u5728Angular\u4E0A\u9762\u5F00\u53D1\u4F01\u4E1A\u540E\u53F0\u66F4\u7B80\u5355\u3001\u66F4\u5FEB\u901F\u3002\u968F\u7740\u300E\u8BBE\u8BA1\u8005\u300F\u7684\u4E0D\u65AD\u53CD\u9988\uFF0C\u5C06\u6301\u7EED\u8FED\u4EE3\uFF0C\u9010\u6B65\u6C89\u6DC0\u548C\u603B\u7ED3\u51FA\u66F4\u591A\u8BBE\u8BA1\u6A21\u5F0F\u548C\u76F8\u5E94\u7684\u4EE3\u7801\u5B9E\u73B0\uFF0C\u9610\u8FF0\u4E2D\u540E\u53F0\u4EA7\u54C1\u6A21\u677F/\u7EC4\u4EF6/\u4E1A\u52A1\u573A\u666F\u7684\u6700\u4F73\u5B9E\u8DF5\uFF0C\u4E5F\u5341\u5206\u671F\u5F85\u4F60\u7684\u53C2\u4E0E\u548C\u5171\u5EFA\u3002

## \u73AF\u5883\u642D\u5EFA

Angular \u5F00\u53D1\u73AF\u5883\u81F3\u5C11\u9700\u8981\u5B89\u88C5 [Node.js](https://nodejs.org/en/download/)(Node.js \u5185\u7F6E\u4E86 [npm](https://www.npmjs.com/get-npm) \u65E0\u987B\u5355\u72EC\u5B89\u88C5\uFF09\u3001[VSCode\u7F16\u8F91\u5668](https://code.visualstudio.com/)\uFF0C\u5176\u4E2D Node.js \u5EFA\u8BAE\u5B89\u88C5 **LTS** \u7248\u672C\uFF0C\u5B89\u88C5\u5B8C\u6210\u540E\u53EF\u4EE5\u901A\u8FC7\u7EC8\u7AEF\u7A97\u53E3\u4E2D\u8FD0\u884C\uFF1A

\`\`\`bash
node -v # \u67E5\u770B Node.js \u5F53\u524D\u7248\u672C
npm -v # \u67E5\u770B Npm \u5F53\u524D\u7248\u672C
\`\`\`

Npm \u9ED8\u8BA4\u4ECE\u56FD\u5916\u6E90\u6765\u4E0B\u8F7D\u5305\u4FE1\u606F\uFF0C\u9274\u4E8E\u56FD\u5185\u73AF\u5883\u56E0\u7D20\uFF0C\u5728\u5F00\u59CB\u4E0B\u4E00\u6B65\u524D\u5148\u5B89\u88C5 [nnrm](https://github.com/YunYouJun/nnrm/blob/main/README.zh-CN.md) \u5E76\u5207\u6362\u81F3\u6DD8\u5B9D\u955C\u50CF\uFF1A

\`\`\`bash
# \u5B89\u88C5 nnrm
npm install -g nnrm
# \u5C06Npm\u5207\u6362\u81F3\u6DD8\u5B9D\u6E90\uFF08\u4E0D\u540C npm \u6E90\u7BA1\u7406\u5668\u547D\u4EE4\u6709\u70B9\u4E0D\u4E00\u6837\uFF0C\u66F4\u591A\u7EC6\u8282\u8BF7\u53C2\u8003 nnrm \u6587\u6863\uFF09
nnrm use taobao
\`\`\`

## \u5B89\u88C5

### \u5168\u5C40 Angular Cli

\u5B89\u88C5\u4E4B\u524D\u8BF7\u5148\u786E\u4FDD\u672C\u5730\u5DF2\u7ECF\u5B89\u88C5\u5168\u5C40 Angular Cli\uFF0C\u53EA\u6709\u8FD9\u6837\u624D\u80FD\u968F\u65F6\u968F\u5730\u5728\u7EC8\u7AEF\u4F7F\u7528 \`ng\` \u547D\u4EE4\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7EC8\u7AEF\u7A97\u53E3\u4E2D\u8FD0\u884C\uFF1A

\`\`\`bash
npm install -g @angular/cli@19
\`\`\`

### \u521B\u5EFANG-ALAIN\u9879\u76EE

NG-ALAIN \u5FC5\u987B\u5148\u521B\u5EFA\u4E00\u4E2A\u5168\u65B0\u7684 Angular \u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7EC8\u7AEF\u7A97\u53E3\u4E2D\u8FD0\u884C\uFF1A

\`\`\`bash
ng new my-project --style less --routing
cd my-project
# \u6216\u591A\u91CD\u9879\u76EE
ng new my-workspace --no-create-application
cd my-workspace
ng g application mgr --style less --routing
\`\`\`

> \u5982\u679C\u4F60\u60F3\u4E86\u89E3 \`--style\`\u3001\`--routing\` \u53C2\u6570\uFF0C\u8BF7\u53C2\u8003 [ng new](https://angular.io/cli/new#options) \u6587\u6863\u3002

\u63A5\u4E0B\u6765\u53EA\u9700\u8981\u5C06 NG-ALAIN \u6DFB\u52A0\u5230 \`my-project\` \u9879\u76EE\u4E2D\u5373\u53EF\uFF0C\u5728 \`my-project\` \u76EE\u5F55\u4E0B\u901A\u8FC7\u7EC8\u7AEF\u7A97\u53E3\u4E2D\u8FD0\u884C\uFF1A

\`\`\`bash
ng add ng-alain
\`\`\`

> \u82E5\u591A\u91CD\u9879\u76EE\u65F6\uFF0C\u9700\u8981\u63D0\u4F9B\u5177\u4F53\u7684\u9879\u76EE\u540D\u79F0\u3002

NG-ALAIN \u4F1A\u8BE2\u95EE\u662F\u5426\u9700\u8981\u4E00\u4E9B\u989D\u5916\u7684\u63D2\u4EF6\uFF0C\u4E00\u5F00\u59CB\u5B8C\u5168\u53EF\u4EE5\u4E00\u8DEF\u56DE\u8F66\uFF0C\u8FD9\u4E9B\u63D2\u4EF6\u90FD\u662F\u53EF\u63D2\u62D4\uFF0C\u540E\u671F\u53EF\u4EE5\u81EA\u884C\u6DFB\u52A0\u4E0E\u79FB\u9664\u3002

> \u4EE5\u4E0A\u53EA\u4F1A\u751F\u6210\u5E72\u51C0\u7684\u9879\u76EE\uFF0C\u53EF\u4EE5\u76F4\u63A5\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\u4E2D\u3002\u4F60\u53EF\u80FD\u5728[\u9884\u89C8](https://ng-alain.gitee.io/)\u4E0A\u770B\u5230\u8BB8\u591A\u793A\u4F8B\u9875\uFF0C\u5B83\u4EEC\u5168\u90FD\u53EF\u4EE5\u5728 [Github](https://github.com/ng-alain/ng-alain) \u67E5\u770B\u5230\u6E90\u4EE3\u7801\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u901A\u8FC7 Git \u514B\u9686\u4EE3\u7801\u7684\u5F62\u5F0F\u83B7\u5F97\uFF1A
> \`\`\`bash
> git clone --depth=1 https://github.com/ng-alain/ng-alain.git my-project
> cd my-project
> npm install
> \`\`\`

### \u8FD0\u884C

\`\`\`bash
npm start
\`\`\`

\u542F\u52A8\u5B8C\u6210\u540E\u4F1A\u6253\u5F00\u6D4F\u89C8\u5668\u8BBF\u95EE [http://localhost:4200](http://localhost:4200)\uFF0C\u82E5\u4F60\u770B\u5230\u5982\u4E0B\u9875\u9762\u5219\u4EE3\u8868\u6210\u529F\u4E86\u3002

![](./assets/screenshot/start.png | width=700)

\u606D\u559C\u4F60\uFF0C\u4F60\u5DF2\u7ECF\u6210\u529F\u90E8\u7F72\u4E00\u4E2A NG-ALAIN \u9879\u76EE\u3002

## \u652F\u6301\u73AF\u5883

- **\u53D7\u9650\u4E8E Angular\uFF0C\u4E0D\u518D\u652F\u6301 IE**
- \u73B0\u4EE3\u6D4F\u89C8\u5668\uFF0C[\u6D4F\u89C8\u5668\u652F\u6301](https://angular.io/guide/browser-support)
- \u652F\u6301\u670D\u52A1\u7AEF\u6E32\u67D3
- [Electron](https://electron.atom.io/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Electron |
| --------- | --------- | --------- | --------- | --------- | --------- |
| last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions

## \u5982\u4F55\u8D21\u732E

\u5728\u4EFB\u4F55\u5F62\u5F0F\u7684\u53C2\u4E0E\u524D\uFF0C\u8BF7\u5148\u9605\u8BFB [\u8D21\u732E\u8005\u6587\u6863](/docs/contributing)\u3002\u5982\u679C\u4F60\u5E0C\u671B\u53C2\u4E0E\u8D21\u732E\uFF0C\u6B22\u8FCE [Pull Request](https://github.com/ng-alain/ng-alain/pulls)\uFF0C\u6216\u7ED9\u6211\u4EEC [\u62A5\u544A Bug](https://github.com/ng-alain/ng-alain/issues)\u3002

> \u5F3A\u70C8\u63A8\u8350\u9605\u8BFB [\u300A\u63D0\u95EE\u7684\u667A\u6167\u300B](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)(\u672C\u6307\u5357\u4E0D\u63D0\u4F9B\u6B64\u9879\u76EE\u7684\u5B9E\u9645\u652F\u6301\u670D\u52A1\uFF01)\u3001[\u300A\u5982\u4F55\u5411\u5F00\u6E90\u793E\u533A\u63D0\u95EE\u9898\u300B](https://github.com/seajs/seajs/issues/545) \u548C [\u300A\u5982\u4F55\u6709\u6548\u5730\u62A5\u544A Bug\u300B](http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html)\u3001[\u300A\u5982\u4F55\u5411\u5F00\u6E90\u9879\u76EE\u63D0\u4EA4\u65E0\u6CD5\u89E3\u7B54\u7684\u95EE\u9898\u300B](https://zhuanlan.zhihu.com/p/25795393)\uFF0C\u66F4\u597D\u7684\u95EE\u9898\u66F4\u5BB9\u6613\u83B7\u5F97\u5E2E\u52A9\u3002

## \u793E\u533A\u4E92\u52A9

\u5982\u679C\u60A8\u5728\u4F7F\u7528\u7684\u8FC7\u7A0B\u4E2D\u78B0\u5230\u95EE\u9898\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u51E0\u4E2A\u9014\u5F84\u5BFB\u6C42\u5E2E\u52A9\uFF0C\u540C\u65F6\u6211\u4EEC\u4E5F\u9F13\u52B1\u8D44\u6DF1\u7528\u6237\u901A\u8FC7\u4E0B\u9762\u7684\u9014\u5F84\u7ED9\u65B0\u4EBA\u63D0\u4F9B\u5E2E\u52A9\u3002

\u901A\u8FC7 Stack Overflow \u6216\u8005 Segment Fault \u63D0\u95EE\u65F6\uFF0C\u5EFA\u8BAE\u52A0\u4E0A \`ng-alain\` \u6807\u7B7E\u3002

1. QQ \u7FA4
    - [316911865](//shang.qq.com/wpa/qunwpa?idkey=f5102185e4ecf8b641a176596aca3037a45d3452329f69cf3bc496877cd087ff)
    - [428749721](//shang.qq.com/wpa/qunwpa?idkey=06823e225199af79b0c5ba3bbc89756ee57c2b0cc2115e3f44cc19230db2b0c3)
2. [![Segment Fault](https://gw.alipayobjects.com/zos/rmsportal/hfYFfCvHTQTUKntlJbMF.svg | width=140)](https://segmentfault.com/t/ng-alain)\uFF08\u4E2D\u6587\uFF09
3. \u52A0\u5165 NG-ALAIN \u81EA\u52A9\u670D\u52A1\u7FA4\uFF08\u4E2D\u6587\uFF09

![](./assets/qq-group.png)

## \u6350\u52A9

\u5982\u679C\u4F60\u89C9\u5F97 NG-ALAIN \u4E0D\u9519\uFF0C\u53EF\u4EE5\u8003\u8651\u81EA\u613F\u4E3A\u672C\u7AD9\u6253\u8D4F\u6216\u6350\u52A9\u3002

![](./assets/donate.png)`}}};codes=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=o({type:n,selectors:[["docs-getting-started"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&i(0,"app-docs",0),e&2&&a("codes",t.codes)("item",t.item)},dependencies:[r],encapsulation:2})};var v=class n{item={name:"global-config",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:90,title:"Global Configuration",description:"We add support of global configuration to many components. You can define the default behavior of the component through global configuration, thus red...",group:"Dev",path:"docs/global-config.en-US.md",url:"/docs/global-config/en"},text:`<p>We add support of <strong>global configuration</strong> to many components. You can define the default behavior of the component through global configuration, thus reducing the code that needs to be written in the template, and support changing global config at runtime.</p>
<h2 id="how_to_use?"><a class="lake-link"><i data-anchor="how_to_use?"></i></a>How to Use?</h2><p>If you want to provide default configurations to some components, please use <code>provideAlain</code> function. object providing implements interface <code>AlainProvideOptions</code> For example:</p>
<pre><code class="language-typescript">// global-config.module.ts
import &#123; AlainConfig, AlainProvideLang &#125; from &#39;&#64;delon/util/config&#39;;
import &#123; ICONS &#125; from &#39;../style-icons&#39;;
import &#123; ICONS_AUTO &#125; from &#39;../style-icons-auto&#39;;

const defaultLang: AlainProvideLang = &#123;
  abbr: &#39;zh-CN&#39;,
  ng: ngLang,
  zorro: zorroLang,
  date: dateLang,
  delon: delonLang
&#125;;

const alainConfig: AlainConfig = &#123;
  st: &#123; ps: 3 &#125;,
&#125;;

export const appConfig: ApplicationConfig = &#123;
  providers: [
    provideAlain(&#123; config: alainConfig, defaultLang, icons: [...ICONS_AUTO, ...ICONS] &#125;)
  ]
&#125;;
</code></pre>
<p>These global configuration would be injected into a service named <code>AlainConfigService</code> and gets stored.</p>
<h2 id="about_ng-zorro"><a class="lake-link"><i data-anchor="about_ng-zorro"></i></a>About NG-ZORRO</h2><p>Please refer to NG-ZORRO Website <a href="https://ng.ant.design/docs/global-config/en" target="_blank" rel="noopener">Documentation</a>.</p>
`,api:"",toc:[{id:"how_to_use?",title:"How to Use?"},{id:"about_ng-zorro",title:"About NG-ZORRO"}],raw:`---
order: 90
title:
  en-US: Global Configuration
  zh-CN: \u5168\u5C40\u914D\u7F6E\u9879
type: Dev
---

We add support of **global configuration** to many components. You can define the default behavior of the component through global configuration, thus reducing the code that needs to be written in the template, and support changing global config at runtime.

## How to Use?

If you want to provide default configurations to some components, please use \`provideAlain\` function. object providing implements interface \`AlainProvideOptions\` For example:

\`\`\`typescript
// global-config.module.ts
import { AlainConfig, AlainProvideLang } from '@delon/util/config';
import { ICONS } from '../style-icons';
import { ICONS_AUTO } from '../style-icons-auto';

const defaultLang: AlainProvideLang = {
  abbr: 'zh-CN',
  ng: ngLang,
  zorro: zorroLang,
  date: dateLang,
  delon: delonLang
};

const alainConfig: AlainConfig = {
  st: { ps: 3 },
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideAlain({ config: alainConfig, defaultLang, icons: [...ICONS_AUTO, ...ICONS] })
  ]
};
\`\`\`

These global configuration would be injected into a service named \`AlainConfigService\` and gets stored.

## About NG-ZORRO

Please refer to NG-ZORRO Website [Documentation](https://ng.ant.design/docs/global-config/en).`},"zh-CN":{meta:{order:90,title:"\u5168\u5C40\u914D\u7F6E\u9879",description:"\u6211\u4EEC\u7ED9\u4F17\u591A\u7EC4\u4EF6\u6DFB\u52A0\u4E86\u5168\u5C40\u914D\u7F6E\u529F\u80FD\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u5168\u5C40\u914D\u7F6E\u6765\u5B9A\u4E49\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u4ECE\u800C\u51CF\u5C11\u5728\u6A21\u677F\u4E2D\u9700\u8981\u5199\u7684\u4EE3\u7801\uFF08\u8BA9\u4F60\u7684\u4EE3\u7801\u66F4\u52A0\u6E05\u723D\uFF09\uFF0C\u8FD8\u80FD\u5728\u8FD0\u884C\u65F6\u4FEE\u6539\u5168\u5C40\u914D\u7F6E\u9879\u3002\u60F3\u8981\u4E3A\u67D0\u4E9B\u7EC4\u4EF6\u63D0\u4F9B\u9ED8\u8BA4\u914D\u7F6E\u9879\uFF0C\u53EF\u4EE5\u4F7F\u7528 provideAlain \u51FD\u6570\uFF0C\u8F6C\u5165\u4E00\u4E2A\u7B26\u5408 AlainProvideOptions \u63A5\u53E3\u7684\u5BF9\u8C61\uFF0C\u4F8B\u5982\uFF1A\u8FD9...",group:"Dev",path:"docs/global-config.zh-CN.md",url:"/docs/global-config/zh"},text:`<p>\u6211\u4EEC\u7ED9\u4F17\u591A\u7EC4\u4EF6\u6DFB\u52A0\u4E86<strong>\u5168\u5C40\u914D\u7F6E</strong>\u529F\u80FD\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u5168\u5C40\u914D\u7F6E\u6765\u5B9A\u4E49\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u4ECE\u800C\u51CF\u5C11\u5728\u6A21\u677F\u4E2D\u9700\u8981\u5199\u7684\u4EE3\u7801\uFF08\u8BA9\u4F60\u7684\u4EE3\u7801\u66F4\u52A0\u6E05\u723D\uFF09\uFF0C\u8FD8\u80FD\u5728\u8FD0\u884C\u65F6\u4FEE\u6539\u5168\u5C40\u914D\u7F6E\u9879\u3002</p>
<h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p>\u60F3\u8981\u4E3A\u67D0\u4E9B\u7EC4\u4EF6\u63D0\u4F9B\u9ED8\u8BA4\u914D\u7F6E\u9879\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>provideAlain</code> \u51FD\u6570\uFF0C\u8F6C\u5165\u4E00\u4E2A\u7B26\u5408 <code>AlainProvideOptions</code> \u63A5\u53E3\u7684\u5BF9\u8C61\uFF0C\u4F8B\u5982\uFF1A</p>
<pre><code class="language-typescript">// global-config.module.ts
import &#123; AlainConfig, AlainProvideLang &#125; from &#39;&#64;delon/util/config&#39;;
import &#123; ICONS &#125; from &#39;../style-icons&#39;;
import &#123; ICONS_AUTO &#125; from &#39;../style-icons-auto&#39;;

const defaultLang: AlainProvideLang = &#123;
  abbr: &#39;zh-CN&#39;,
  ng: ngLang,
  zorro: zorroLang,
  date: dateLang,
  delon: delonLang
&#125;;

const alainConfig: AlainConfig = &#123;
  st: &#123; ps: 3 &#125;,
&#125;;

export const appConfig: ApplicationConfig = &#123;
  providers: [
    provideAlain(&#123; config: alainConfig, defaultLang, icons: [...ICONS_AUTO, ...ICONS] &#125;)
  ]
&#125;;
</code></pre>
<p>\u8FD9\u4E9B\u5168\u5C40\u914D\u7F6E\u9879\u5C06\u4F1A\u88AB\u6CE8\u5165 <code>AlainConfigService</code> \u5F53\u4E2D\u5E76\u4FDD\u5B58\u3002</p>
<h2 id="\u5173\u4E8E_ng-zorro_\u5168\u5C40\u914D\u7F6E\u9879"><a class="lake-link"><i data-anchor="\u5173\u4E8E_ng-zorro_\u5168\u5C40\u914D\u7F6E\u9879"></i></a>\u5173\u4E8E NG-ZORRO \u5168\u5C40\u914D\u7F6E\u9879</h2><p>\u8BF7\u53C2\u8003 NG-ZORRO <a href="https://ng.ant.design/docs/global-config/zh" target="_blank" rel="noopener">\u5B98\u7F51\u6587\u6863</a>\u3002</p>
`,api:"",toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528"},{id:"\u5173\u4E8E_ng-zorro_\u5168\u5C40\u914D\u7F6E\u9879",title:"\u5173\u4E8E NG-ZORRO \u5168\u5C40\u914D\u7F6E\u9879"}],raw:`---
order: 90
title:
  en-US: Global Configuration
  zh-CN: \u5168\u5C40\u914D\u7F6E\u9879
type: Dev
---

\u6211\u4EEC\u7ED9\u4F17\u591A\u7EC4\u4EF6\u6DFB\u52A0\u4E86**\u5168\u5C40\u914D\u7F6E**\u529F\u80FD\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u5168\u5C40\u914D\u7F6E\u6765\u5B9A\u4E49\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u4ECE\u800C\u51CF\u5C11\u5728\u6A21\u677F\u4E2D\u9700\u8981\u5199\u7684\u4EE3\u7801\uFF08\u8BA9\u4F60\u7684\u4EE3\u7801\u66F4\u52A0\u6E05\u723D\uFF09\uFF0C\u8FD8\u80FD\u5728\u8FD0\u884C\u65F6\u4FEE\u6539\u5168\u5C40\u914D\u7F6E\u9879\u3002

## \u5982\u4F55\u4F7F\u7528

\u60F3\u8981\u4E3A\u67D0\u4E9B\u7EC4\u4EF6\u63D0\u4F9B\u9ED8\u8BA4\u914D\u7F6E\u9879\uFF0C\u53EF\u4EE5\u4F7F\u7528 \`provideAlain\` \u51FD\u6570\uFF0C\u8F6C\u5165\u4E00\u4E2A\u7B26\u5408 \`AlainProvideOptions\` \u63A5\u53E3\u7684\u5BF9\u8C61\uFF0C\u4F8B\u5982\uFF1A

\`\`\`typescript
// global-config.module.ts
import { AlainConfig, AlainProvideLang } from '@delon/util/config';
import { ICONS } from '../style-icons';
import { ICONS_AUTO } from '../style-icons-auto';

const defaultLang: AlainProvideLang = {
  abbr: 'zh-CN',
  ng: ngLang,
  zorro: zorroLang,
  date: dateLang,
  delon: delonLang
};

const alainConfig: AlainConfig = {
  st: { ps: 3 },
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideAlain({ config: alainConfig, defaultLang, icons: [...ICONS_AUTO, ...ICONS] })
  ]
};
\`\`\`

\u8FD9\u4E9B\u5168\u5C40\u914D\u7F6E\u9879\u5C06\u4F1A\u88AB\u6CE8\u5165 \`AlainConfigService\` \u5F53\u4E2D\u5E76\u4FDD\u5B58\u3002

## \u5173\u4E8E NG-ZORRO \u5168\u5C40\u914D\u7F6E\u9879

\u8BF7\u53C2\u8003 NG-ZORRO [\u5B98\u7F51\u6587\u6863](https://ng.ant.design/docs/global-config/zh)\u3002`}}};codes=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=o({type:n,selectors:[["docs-global-config"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&i(0,"app-docs",0),e&2&&a("codes",t.codes)("item",t.item)},dependencies:[r],encapsulation:2})};var _=class n{item={name:"graph",langs:["zh-CN"],content:{"zh-CN":{meta:{order:20,title:"\u56FE\u8868",redirect:"/chart/getting-started",description:"",group:"Advance",path:"docs/graph.md",url:"/docs/graph/zh"},text:"",api:"",toc:[],raw:`---
order: 20
title:
  en-US: Charts
  zh-CN: \u56FE\u8868
type: Advance
redirect: /chart/getting-started
---`}}};codes=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=o({type:n,selectors:[["docs-graph"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&i(0,"app-docs",0),e&2&&a("codes",t.codes)("item",t.item)},dependencies:[r],encapsulation:2})};var A=class n{item={name:"how-to-start",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:0,title:"How to start",i18n:"need-update",description:"As you begin your business development on NG-ALAIN, i recommend that you first review the following documents, which is very helpful for everyone on t...",group:"Dev",path:"docs/how-to-start.en-US.md",url:"/docs/how-to-start/en"},text:`<h2 id="first,_pre-order_preparation"><a class="lake-link"><i data-anchor="first,_pre-order_preparation"></i></a>First, pre-order preparation</h2><p>As you begin your business development on NG-ALAIN, i recommend that you first review the following documents, which is very helpful for everyone on the team.</p>
<ul>
<li><a href="//ant.design/docs/spec/introduce" target="_blank" rel="noopener">Ant Design Guide article</a></li>
<li><a href="//ng.ant.design/" target="_blank" rel="noopener">Ant Design for Angular</a></li>
<li><a href="//www.yuque.com/antv/g2-docs-en?language=en-us" target="_blank" rel="noopener">Antv chart - G2</a></li>
<li><a href="https://ng.ant.design/docs/recommendation/en" target="_blank" rel="noopener">NG-ZORRO Community recommendation</a></li>
</ul>
<p>NG-ALAIN&#39;s base component library comes from NG-ZORRO, so you can get a very detailed <a href="//ng.ant.design/" target="_blank" rel="noopener">API</a> documentation for its use on the official website. For ng components provided by -alain are obtained through the <a href="/components">component page</a>.</p>
<h2 id="second,_the_startup_process"><a class="lake-link"><i data-anchor="second,_the_startup_process"></i></a>Second, the startup process</h2><p>NG-ALAIN is a scaffold that can be used directly in production environments. The prerequisite for understanding these details is that you have a certain knowledge of Angular. The following documents may be helpful to you before you start:</p>
<ul>
<li>NG-ALAIN Getting started video (<a href="https://www.youtube.com/watch?v=lPnNKPuULVw&amp;list=PLhWkvn5F8uyJRimbVZ944unzRrHeujngw" target="_blank" rel="noopener">YouTube</a>\u3001<a href="http://v.qq.com/vplus/2c1dd5c6db4feeeea25e9827b38c171e/foldervideos/870001501oy1ijf" target="_blank" rel="noopener">Tencent video</a>\u3001<a href="https://space.bilibili.com/12207877/#/channel/detail?cid=50229" target="_blank" rel="noopener">Station B</a>\uFF09</li>
<li><a href="https://zhuanlan.zhihu.com/ng-alain" target="_blank" rel="noopener">Know the column</a></li>
</ul>
<p>When running an app via <code>ng serve</code>, a complete Angular startup process would look like this:</p>
<ol>
<li>Trigger <code>APP_INITIALIZER</code> (the scaffolding implementation is implemented in <code>StartupService.load</code>) to get the application information.</li>
<li>Trigger service routing (src/app/routes/routes-routing.module.ts\` for scaffolding)</li>
<li>Rendering components</li>
</ol>
<h3 id="1_app_initializer"><a class="lake-link"><i data-anchor="1_app_initializer"></i></a>1) APP_INITIALIZER</h3><p>Angular provides a DI (dependency injection) token <code>APP_INITIALIZER</code> that allows the application to perform some data that will affect the rendering results when it starts, such as: language data, menu data, user information data, dictionary data, etc., and must return an <code>Observable</code> Asynchronous, asynchronous means that you can do a lot of interesting things, such as data coming from a remote location. <code>APP_INITIALIZER</code> will only be executed once, you only need to register it in the <code>ApplicationConfig</code> module.</p>
<p>The NG-ALAIN scaffolding provides a sample code on how to load basic data before starting rendering after starting Angular [startup.service.ts](<a href="https://github.com/ng-alain/ng-alain/blob/" target="_blank" rel="noopener">https://github.com/ng-alain/ng-alain/blob/</a> master/src/app/core/startup/startup.service.ts).</p>
<ol>
<li>Provide unified registration <code>provideStartup</code> function, which only needs to be registered in <code>app.config.ts</code></li>
<li>Provide the <code>load()</code> function and ensure that <strong>regardless of whether the request is successful or not</strong> must return an <code>Observable&lt;void&gt;</code> for Angular to render normally, otherwise Angular will not be able to start.</li>
</ol>
<blockquote>
<p>Note: NG-ALAIN provides authorization services. If the requested data interface cannot be authorized, you can add <code>ALLOW_ANONYMOUS</code> to mark it.</p>
</blockquote>
<p><strong>Application Information</strong></p>
<p>Including: application name, description, year, information can be directly injected into the <code>SettingsService</code> (<a href="/theme/settings">API</a>) and directly in the HTML template.</p>
<pre><code class="language-ts">this.settingService.setApp(res.app);
</code></pre>
<p><strong>User Info</strong></p>
<p>Including: name, avatar, email address, etc., information can be directly injected into the <code>SettingsService</code> (<a href="/theme/settings">API</a>) and directly in the HTML template.</p>
<pre><code class="language-ts">this.settingService.setUser(res.user);
</code></pre>
<p><strong>Layout information</strong></p>
<p>Including: name, avatar, email, address, etc., information can be directly injected into the <code>SettingsService</code> (<a href="/theme/settings">API</a>) and directly in the HTML template.</p>
<pre><code class="language-ts">// Whether to fix the top menu
this.settingService.setLayout(\`fixed\`, false);
// Whether to collapse the right menu
this.settingService.setLayout(\`collapsed\`, false);
</code></pre>
<p><strong>Menu data</strong></p>
<p>NG-ALAIN takes menu from the remote and can also inject <code>MenuService</code> (<a href="/theme/menu">API</a>) to change the menu data. Of course, it is more reasonable to perform menu assignment before Angular starts.</p>
<p>Menu data <strong>Make sure</strong> ensure <a href="https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/menu/interface.ts" target="_blank" rel="noopener">Menu</a> format, menu data throughout Applications, for example: page header auto navigation <a href="/components/page-header">page-header</a>, page title text <a href="/theme/title">TitleService</a> Wait.</p>
<pre><code class="language-ts">this.menuService.add(res.menu);
</code></pre>
<p><strong>Page title</strong></p>
<p>If the page title always wants to add the application name as a suffix, you can re-adjust the <code>suffix</code> attribute value by injecting <code>TitleService</code>(<a href="/theme/title">API</a>).</p>
<pre><code class="language-ts">// Set the suffix of the page title
this.titleService.suffix = res.app.name;
</code></pre>
<p><strong>ACL</strong></p>
<pre><code class="language-ts">this.aclService.setFull(true);
</code></pre>
<p>It is recommended to load the ACL access control permission data before starting. For more details, please refer to <a href="/acl">Access Control List</a>.</p>
<p><strong>Globalization</strong></p>
<p>It is recommended to load the internationalization package first before starting, which will ensure that the page is rendered as the target language after the project is started. See <a href="/docs/i18n">Internationalization</a> for more details.</p>
<h3 id="2_business_routing"><a class="lake-link"><i data-anchor="2_business_routing"></i></a>2) Business routing</h3><p>Scaffolding top-level routing begins with <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/routes/routes.ts" target="_blank" rel="noopener">routes.ts</a> Its structure is as follows:</p>
<pre><code class="language-ts">const routes: Routes = [
  &#123;
    path: &#39;&#39;,
    component: LayoutBasicComponent,
    children: [
      &#123; path: &#39;&#39;, redirectTo: &#39;dashboard&#39;, pathMatch: &#39;full&#39; &#125;,
      &#123;
        path: &#39;dashboard&#39;,
        loadChildren: () =&gt; import(&#39;./dashboard/routes&#39;).then(m =&gt; m.routes)
      &#125;,
      // business submodule
      // &#123; path: &#39;trade&#39;, loadChildren: () =&gt; import(&#39;./trade/routes&#39;).then(m =&gt; m.routes) &#125;,
    ]
  &#125;,
  // Blank layout
  &#123;
    path: &#39;blank&#39;,
    component: LayoutBlankComponent,
    children: [
    ]
  &#125;,
  &#123; path: &#39;&#39;, loadChildren: () =&gt; import(&#39;./passport/routes&#39;).then(m =&gt; m.routes) &#125;,
  &#123; path: &#39;exception&#39;, loadChildren: () =&gt; import(&#39;./exception/routes&#39;).then(m =&gt; m.routes) &#125;,
  // All missed routes will jump to the \`exception/404\` page
  &#123; path: &#39;**&#39;, redirectTo: &#39;dashboard&#39; &#125;
];
</code></pre>
<blockquote>
<p>The above mentioned <code>LayoutBasicComponent</code> basic layout is used in the business module, user authorization uses <code>LayoutPassportComponent</code> user authorization layout and <code>LayoutBlankComponent</code> blank layout. The above three layouts can be used in [layout](<a href="https://github.com/" target="_blank" rel="noopener">https://github.com/</a> ng-alain/ng-alain/tree/master/src/app/layout) directory.</p>
</blockquote>
<blockquote>
<p>NG-ALAIN also provides some <a href="https://e.ng-alain.com/" target="_blank" rel="noopener">commercial themes</a> to chooses.</p>
</blockquote>
<p>For example, when a user accesses the <code>/dashboard</code> route, they will first go through <code>LayoutBasicComponent</code> -&gt; <code>DashboardComponent</code>, and eventually form a huge component tree to represent a specific page. NG-ALAIN scaffolding helps you complete most of the work, and a newbie only needs to care about how to implement the <code>DashboardComponent</code> business component.</p>
<h3 id="routing_permission_control"><a class="lake-link"><i data-anchor="routing_permission_control"></i></a>Routing permission control</h3><p>The routing URL may be affected by the browser&#39;s own historical memory, so that users may access the unprivileged route. If you want a better experience, you need to configure the <code>canActivate</code> option on the route. When the user has no permission, it will utomatically jump to the relevant page. see the <a href="/acl/guard">ACL Routing Guard</a> section for details.</p>
<h3 id="intercept_network_requests"><a class="lake-link"><i data-anchor="intercept_network_requests"></i></a>Intercept network requests</h3><p>Network requests are a very frequent task. If you want to use network request actions elegantly within business components, it is essential to centrally handle server-side URL prefixes, exception handling, token refresh and other operations. NG-ALAIN scaffolding Provide a <a href="https://github.com/ng-alain/ng-alain/tree/master/src/app/core/net" target="_blank" rel="noopener">net</a> file. It uses the token <code>HttpInterceptorFn</code> to act as an interceptor.</p>
<p>For details, please refer to [default.interceptor.ts](<a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/core/net/default.interceptor" target="_blank" rel="noopener">https://github.com/ng-alain/ng-alain/blob/master/src/app/core/net/default.interceptor</a>. ts) file.</p>
<h2 id="ide"><a class="lake-link"><i data-anchor="ide"></i></a>IDE</h2><p>A developer must first sharpen his tools if he is to do his work well, NG-ALAIN recommended to use the <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">Visual Studio Code</a> IDE, because ng-alain adds some extra features to VSCode to better help you. Development.</p>
<blockquote>
<p>Or use the <a href="https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-extension-pack" target="_blank" rel="noopener">NG-ALAIN Extension Pack</a> suite directly.</p>
</blockquote>
<h3 id="code_fragment"><a class="lake-link"><i data-anchor="code_fragment"></i></a>Code fragment</h3><ul>
<li><a href="https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode" target="_blank" rel="noopener">NG-ALAIN Snippets</a></li>
</ul>
<h3 id="class_style_smart_reminder"><a class="lake-link"><i data-anchor="class_style_smart_reminder"></i></a>Class style smart reminder</h3><p>ng-alain has a lot of built-in toolkit styles (<a href="/theme/tools">API</a>), and the following plugins can be installed directly into the HTML template.</p>
<ul>
<li><a href="https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode" target="_blank" rel="noopener">NG-ALAIN Snippets</a></li>
</ul>
`,api:"",toc:[{id:"first,_pre-order_preparation",title:"First, pre-order preparation"},{id:"second,_the_startup_process",title:"Second, the startup process",children:[{id:"1_app_initializer",title:"1) APP_INITIALIZER"},{id:"2_business_routing",title:"2) Business routing"},{id:"routing_permission_control",title:"Routing permission control"},{id:"intercept_network_requests",title:"Intercept network requests"}]},{id:"ide",title:"IDE",children:[{id:"code_fragment",title:"Code fragment"},{id:"class_style_smart_reminder",title:"Class style smart reminder"}]}],raw:`---
order: 0
title: How to start
type: Dev
i18n: need-update
---

## First, pre-order preparation

As you begin your business development on NG-ALAIN, i recommend that you first review the following documents, which is very helpful for everyone on the team.

+ [Ant Design Guide article](//ant.design/docs/spec/introduce)
+ [Ant Design for Angular](//ng.ant.design/)
+ [Antv chart - G2](//www.yuque.com/antv/g2-docs-en?language=en-us)
+ [NG-ZORRO Community recommendation](https://ng.ant.design/docs/recommendation/en)

NG-ALAIN's base component library comes from NG-ZORRO, so you can get a very detailed [API](//ng.ant.design/) documentation for its use on the official website. For ng components provided by -alain are obtained through the [component page](/components).

## Second, the startup process

NG-ALAIN is a scaffold that can be used directly in production environments. The prerequisite for understanding these details is that you have a certain knowledge of Angular. The following documents may be helpful to you before you start:

- NG-ALAIN Getting started video ([YouTube](https://www.youtube.com/watch?v=lPnNKPuULVw&list=PLhWkvn5F8uyJRimbVZ944unzRrHeujngw)\u3001[Tencent video](http://v.qq.com/vplus/2c1dd5c6db4feeeea25e9827b38c171e/foldervideos/870001501oy1ijf)\u3001[Station B](https://space.bilibili.com/12207877/#/channel/detail?cid=50229)\uFF09
- [Know the column](https://zhuanlan.zhihu.com/ng-alain)

When running an app via \`ng serve\`, a complete Angular startup process would look like this:

1. Trigger \`APP_INITIALIZER\` (the scaffolding implementation is implemented in \`StartupService.load\`) to get the application information.
2. Trigger service routing (src/app/routes/routes-routing.module.ts\` for scaffolding)
3. Rendering components

### 1) APP_INITIALIZER

Angular provides a DI (dependency injection) token \`APP_INITIALIZER\` that allows the application to perform some data that will affect the rendering results when it starts, such as: language data, menu data, user information data, dictionary data, etc., and must return an \`Observable\` Asynchronous, asynchronous means that you can do a lot of interesting things, such as data coming from a remote location. \`APP_INITIALIZER\` will only be executed once, you only need to register it in the \`ApplicationConfig\` module.

The NG-ALAIN scaffolding provides a sample code on how to load basic data before starting rendering after starting Angular [startup.service.ts](https://github.com/ng-alain/ng-alain/blob/ master/src/app/core/startup/startup.service.ts).

1. Provide unified registration \`provideStartup\` function, which only needs to be registered in \`app.config.ts\`
2. Provide the \`load()\` function and ensure that **regardless of whether the request is successful or not** must return an \`Observable<void>\` for Angular to render normally, otherwise Angular will not be able to start.

> Note: NG-ALAIN provides authorization services. If the requested data interface cannot be authorized, you can add \`ALLOW_ANONYMOUS\` to mark it.

**Application Information**

Including: application name, description, year, information can be directly injected into the \`SettingsService\` ([API](/theme/settings)) and directly in the HTML template.

\`\`\`ts
this.settingService.setApp(res.app);
\`\`\`

**User Info**

Including: name, avatar, email address, etc., information can be directly injected into the \`SettingsService\` ([API](/theme/settings)) and directly in the HTML template.

\`\`\`ts
this.settingService.setUser(res.user);
\`\`\`

**Layout information**

Including: name, avatar, email, address, etc., information can be directly injected into the \`SettingsService\` ([API](/theme/settings)) and directly in the HTML template.

\`\`\`ts
// Whether to fix the top menu
this.settingService.setLayout(\`fixed\`, false);
// Whether to collapse the right menu
this.settingService.setLayout(\`collapsed\`, false);
\`\`\`

**Menu data**

NG-ALAIN takes menu from the remote and can also inject \`MenuService\` ([API](/theme/menu)) to change the menu data. Of course, it is more reasonable to perform menu assignment before Angular starts.

Menu data **Make sure** ensure [Menu](https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/menu/interface.ts) format, menu data throughout Applications, for example: page header auto navigation [page-header](/components/page-header), page title text [TitleService](/theme/title ) Wait.

\`\`\`ts
this.menuService.add(res.menu);
\`\`\`

**Page title**

If the page title always wants to add the application name as a suffix, you can re-adjust the \`suffix\` attribute value by injecting \`TitleService\`([API](/theme/title)).

\`\`\`ts
// Set the suffix of the page title
this.titleService.suffix = res.app.name;
\`\`\`

**ACL**

\`\`\`ts
this.aclService.setFull(true);
\`\`\`

It is recommended to load the ACL access control permission data before starting. For more details, please refer to [Access Control List](/acl).

**Globalization**

It is recommended to load the internationalization package first before starting, which will ensure that the page is rendered as the target language after the project is started. See [Internationalization](/docs/i18n) for more details.

### 2) Business routing

Scaffolding top-level routing begins with [routes.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/routes/routes.ts) Its structure is as follows:

\`\`\`ts
const routes: Routes = [
  {
    path: '',
    component: LayoutBasicComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/routes').then(m => m.routes)
      },
      // business submodule
      // { path: 'trade', loadChildren: () => import('./trade/routes').then(m => m.routes) },
    ]
  },
  // Blank layout
  {
    path: 'blank',
    component: LayoutBlankComponent,
    children: [
    ]
  },
  { path: '', loadChildren: () => import('./passport/routes').then(m => m.routes) },
  { path: 'exception', loadChildren: () => import('./exception/routes').then(m => m.routes) },
  // All missed routes will jump to the \`exception/404\` page
  { path: '**', redirectTo: 'dashboard' }
];
\`\`\`

> The above mentioned \`LayoutBasicComponent\` basic layout is used in the business module, user authorization uses \`LayoutPassportComponent\` user authorization layout and \`LayoutBlankComponent\` blank layout. The above three layouts can be used in [layout](https://github.com/ ng-alain/ng-alain/tree/master/src/app/layout) directory.

> NG-ALAIN also provides some [commercial themes](https://e.ng-alain.com/) to chooses.

For example, when a user accesses the \`/dashboard\` route, they will first go through \`LayoutBasicComponent\` -> \`DashboardComponent\`, and eventually form a huge component tree to represent a specific page. NG-ALAIN scaffolding helps you complete most of the work, and a newbie only needs to care about how to implement the \`DashboardComponent\` business component.

### Routing permission control

The routing URL may be affected by the browser's own historical memory, so that users may access the unprivileged route. If you want a better experience, you need to configure the \`canActivate\` option on the route. When the user has no permission, it will utomatically jump to the relevant page. see the [ACL Routing Guard](/acl/guard) section for details.

### Intercept network requests

Network requests are a very frequent task. If you want to use network request actions elegantly within business components, it is essential to centrally handle server-side URL prefixes, exception handling, token refresh and other operations. NG-ALAIN scaffolding Provide a [net](https://github.com/ng-alain/ng-alain/tree/master/src/app/core/net) file. It uses the token \`HttpInterceptorFn\` to act as an interceptor.

For details, please refer to [default.interceptor.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/net/default.interceptor. ts) file.

## IDE

A developer must first sharpen his tools if he is to do his work well, NG-ALAIN recommended to use the [Visual Studio Code](https://code.visualstudio.com/) IDE, because ng-alain adds some extra features to VSCode to better help you. Development.

> Or use the [NG-ALAIN Extension Pack](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-extension-pack) suite directly.

### Code fragment

- [NG-ALAIN Snippets](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode)

### Class style smart reminder

ng-alain has a lot of built-in toolkit styles ([API](/theme/tools)), and the following plugins can be installed directly into the HTML template.

- [NG-ALAIN Snippets](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode)`},"zh-CN":{meta:{order:0,title:"\u5982\u4F55\u5F00\u59CB",i18n:"need-update",description:"NG-ALAIN \u6280\u672F\u6808\u57FA\u4E8E Typescript\u3001Angular\u3001\u56FE\u8868G2 \u548C NG-ZORRO\uFF0C\u5728\u5F00\u59CB\u5C1D\u8BD5\u4F7F\u7528 NG-ALAIN \u811A\u624B\u67B6\u524D\uFF0C\u8BF7\u5148\u63D0\u524D\u4E86\u89E3\u548C\u5B66\u4E60\u8FD9\u4E9B\u77E5\u8BC6\u4F1A\u975E\u5E38\u6709\u5E2E\u52A9\u3002\u5982\u679C\u4F60\u662F\u4E00\u540D Java \u6216 C# \u540E\u7AEF\u5F00\u53D1\u4EBA\u5458\uFF0C\u90A3\u4E48\u606D\u559C\u4F60\uFF0C\u4F60\u6240\u89C1\u5230\u7684\u4E0D\u7BA1\u662F\u7ED3\u6784\u3001\u4EE3\u7801\u3001\u5F00\u53D1\u4F53\u9A8C\u7B49\u90FD\u662F\u4F60\u6240\u60F3\u7684\u90A3\u6837\u3002...",group:"Dev",path:"docs/how-to-start.zh-CN.md",url:"/docs/how-to-start/zh"},text:`<h2 id="\u524D\u5E8F\u51C6\u5907"><a class="lake-link"><i data-anchor="\u524D\u5E8F\u51C6\u5907"></i></a>\u524D\u5E8F\u51C6\u5907</h2><p>NG-ALAIN \u6280\u672F\u6808\u57FA\u4E8E Typescript\u3001Angular\u3001\u56FE\u8868G2 \u548C NG-ZORRO\uFF0C\u5728\u5F00\u59CB\u5C1D\u8BD5\u4F7F\u7528 NG-ALAIN \u811A\u624B\u67B6\u524D\uFF0C\u8BF7\u5148\u63D0\u524D\u4E86\u89E3\u548C\u5B66\u4E60\u8FD9\u4E9B\u77E5\u8BC6\u4F1A\u975E\u5E38\u6709\u5E2E\u52A9\u3002\u5982\u679C\u4F60\u662F\u4E00\u540D Java \u6216 C# \u540E\u7AEF\u5F00\u53D1\u4EBA\u5458\uFF0C\u90A3\u4E48\u606D\u559C\u4F60\uFF0C\u4F60\u6240\u89C1\u5230\u7684\u4E0D\u7BA1\u662F\u7ED3\u6784\u3001\u4EE3\u7801\u3001\u5F00\u53D1\u4F53\u9A8C\u7B49\u90FD\u662F\u4F60\u6240\u60F3\u7684\u90A3\u6837\u3002\u4F46\u4E0D\u7BA1\u600E\u4E48\u6837\uFF0C\u60F3\u5199\u597D Angular \u4EE3\u7801\uFF0C\u4EE5\u4E0B\u8FD9\u4E9B\u6587\u7AE0\u53CA\u793E\u533A\u662F\u4F60\u5FC5\u987B\u8981\u77E5\u9053\u7684\uFF1A</p>
<ul>
<li>\u6587\u6863\u7C7B<ul>
<li><a href="https://www.tslang.cn/" target="_blank" rel="noopener">TypeScript\u4E2D\u6587\u6587\u6863</a>\uFF0C\u867D\u7136 TypeScript \u8DDF Java\u3001C# \u8BED\u6CD5\u5F88\u50CF\uFF0C\u8FD9\u662F\u8BED\u6CD5\u57FA\u7840\u9700\u8981\u8BA4\u771F\u9605\u8BFB</li>
<li><a href="https://angular.cn/docs" target="_blank" rel="noopener">Angular\u4E2D\u6587\u6587\u6863</a>\uFF0C\u5EFA\u8BAE\u4E00\u5B9A\u8981\u82B1\u65F6\u95F4\u9605\u8BFB\u6587\u6863\u90E8\u5206\uFF0C\u900F\u8FC7\u5B83\u57FA\u672C\u4E0A\u5C31\u53EF\u4EE5\u5B66\u4F1A Angular\uFF1B\u540C\u65F6\uFF0C\u4E5F\u662F Angular API \u63A5\u53E3\u6587\u6863</li>
<li><a href="https://ng.ant.design/docs/introduce/zh" target="_blank" rel="noopener">NG-ZORRO\u4E2D\u6587\u6587\u6863</a>\uFF0CNG-ZORRO \u4F5C\u4E3A NG-ALAIN \u7684\u57FA\u7840\u7EC4\u4EF6\u5E93\uFF0C\u5F53\u4F60\u4E0D\u61C2\u67D0\u4E2A\u7EC4\u4EF6\u65F6\uFF0C\u5B83\u5C31\u662F\u6700\u597D\u7684\u6587\u6863\uFF0C\u5305\u542B\u7EC4\u4EF6\u7528\u6CD5\u53CAAPI\u8BF4\u660E</li>
<li><a href="https://ng-alain.com/" target="_blank" rel="noopener">NG-ALAIN\u4E2D\u6587\u6587\u6863</a>\uFF0C\u5305\u542B\u6240\u6709 <code>&#64;delon/*</code> \u7C7B\u578B\u7684\u7528\u6CD5\u53CAAPI\u8BF4\u660E</li>
<li><a href="https://g2.antv.vision/zh" target="_blank" rel="noopener">G2\u56FE\u8868\u4E2D\u6587\u6587\u6863</a>\uFF0C\u5982\u679C\u9700\u8981\u56FE\u8868\u5F00\u53D1\uFF0C\u5219\u8FD9\u4EFD\u6587\u6863\u662F\u5FC5\u5907</li>
</ul>
</li>
<li>\u8F85\u52A9\u7C7B<ul>
<li><a href="https://ant.design/docs/spec/introduce-cn" target="_blank" rel="noopener">Ant Design \u6307\u5F15\u6587\u7AE0</a>\uFF0C\u5B66\u4E60 Ant Design \u7684\u8BBE\u8BA1\u7406\u5FF5\uFF0C\u975E\u5E38\u503C\u5F97\u9605\u8BFB\u7684\u90E8\u5206</li>
<li><a href="https://ng.ant.design/docs/recommendation/zh" target="_blank" rel="noopener">NG-ZORRO \u793E\u533A\u63A8\u8350</a>\uFF0C\u4E00\u4EFD\u975E\u5E38\u503C\u5F97\u5B66\u4E60\u7684\u6E05\u5355</li>
<li>NG-ALAIN \u5165\u95E8\u89C6\u9891\uFF08<a href="https://www.youtube.com/watch?v=lPnNKPuULVw&amp;list=PLhWkvn5F8uyJRimbVZ944unzRrHeujngw" target="_blank" rel="noopener">YouTube</a>\u3001<a href="http://v.qq.com/vplus/2c1dd5c6db4feeeea25e9827b38c171e/foldervideos/870001501oy1ijf" target="_blank" rel="noopener">\u817E\u8BAF\u89C6\u9891</a>\u3001<a href="https://space.bilibili.com/12207877/#/channel/detail?cid=50229" target="_blank" rel="noopener">B\u7AD9</a>\uFF09</li>
<li><a href="https://zhuanlan.zhihu.com/ng-alain" target="_blank" rel="noopener">NG-ALAIN \u77E5\u4E4E\u4E13\u680F</a></li>
</ul>
</li>
</ul>
<h2 id="\u5199\u5728\u524D\u9762"><a class="lake-link"><i data-anchor="\u5199\u5728\u524D\u9762"></i></a>\u5199\u5728\u524D\u9762</h2><p>\u5F88\u591A\u4EBA\u5728\u5B66\u4E60\u4E00\u9879\u65B0\u4E1C\u897F\u65F6\uFF0C\u65E0\u5916\u4E4E\u5199\u4E2A Hello World \u6216\u662F\u5199\u4E00\u4E2A Http \u8BF7\u6C42\uFF0C\u7136\u540E\u6162\u6162\u5F00\u59CB\u8F90\u5C04\u6240\u9700\u8981\u7684\u6280\u672F\u77E5\u8BC6\u3002\u4E00\u4E2A HTTP \u8BF7\u6C42\u5BF9\u4E2D\u540E\u53F0\u800C\u8A00\u4FBF\u662F\u6DB5\u76D6\u4E86 CURD \u4E3B\u8981\u4EFB\u52A1\uFF0C\u751A\u81F3\u53EF\u4EE5\u8BF490%\u65F6\u95F4\u53CA\u529F\u80FD\u90FD\u5728\u505A\u8FD9\u9879\u5DE5\u4F5C\u3002\u5728<a href="/docs/getting-started">\u4ECB\u7ECD</a>\u7AE0\u8282\u4E2D\u5DF2\u7ECF\u63CF\u8FF0\u521B\u5EFA\u4E00\u4E2A NG-ALAIN \u9879\u76EE\u5E76\u5982\u4F55\u8FD0\u884C\u5B83\uFF0C\u5982\u679C\u6B64\u65F6\u4F60\u4E5F\u60F3\u8981\u5199\u4E2A Hello World\uFF0C\u90A3\u4E48\u53EA\u9700\u8981\u5229\u7528 VSCode \u6253\u5F00\u8FD9\u4E2A\u9879\u76EE\uFF0C\u5E76\u5728 <code>dashboard.component.html</code> \u6587\u4EF6\u5185\u8F93\u5165\u6587\u672C\uFF0C500ms \u540E\u5C31\u4F1A\u5728\u9875\u9762\u4E0A\u7ACB\u5373\u5448\u73B0\u3002</p>
<h2 id="\u6D41\u7A0B"><a class="lake-link"><i data-anchor="\u6D41\u7A0B"></i></a>\u6D41\u7A0B</h2><p>\u56DE\u8FC7\u5934\u6765\u6211\u4EEC\u8BD5\u7740\u56DE\u60F3\u4E00\u4E0B\uFF0C\u4E00\u4E2A\u4E2D\u540E\u53F0\u9879\u76EE\uFF0C\u4ECE\u542F\u52A8\u518D\u5230\u5448\u73B0\u4E00\u4EFD\u8BA2\u5355\u5217\u8868\u7684\u529F\u80FD\uFF0C\u5BF9\u4E8E\u5F00\u53D1\u8005\u800C\u8A00\u5305\u542B\u4E86\u54EA\u4E9B\u4E8B\u4EF6\u3002\u65E0\u5916\u4E4E\u9879\u76EE\u542F\u52A8\u65F6\u5E94\u8BE5\u52A0\u8F7D\u70B9\u4EC0\u4E48\u7CFB\u7EDF\u914D\u7F6E\u9879\uFF0C\u54EA\u4E9B\u9875\u9762\u7528\u6237\u65E0\u6743\u8FDB\u5165\uFF1B\u628A\u7C92\u5EA6\u518D\u60F3\u7EC6\u4E00\u70B9\uFF0C\u540C\u4E00\u4E2A\u9875\u9762\u4E0D\u540C\u7684\u6309\u94AE\u7ED9\u4E0D\u540C\u7684\u4EBA\u7528\uFF0CHTTP\u8BF7\u6C42\u82E5\u4EA7\u751F\u9519\u8BEF\u662F\u4E0D\u662F\u5F97\u6BCF\u6B21\u90FD\u5199\u76F8\u540C\u7684\u5904\u7406\u4EE3\u7801\u7B49\u7B49\u3002</p>
<h3 id="\u521D\u59CB\u5316\u9879\u76EE\u6570\u636E"><a class="lake-link"><i data-anchor="\u521D\u59CB\u5316\u9879\u76EE\u6570\u636E"></i></a>\u521D\u59CB\u5316\u9879\u76EE\u6570\u636E</h3><p>Angular \u63D0\u4F9B\u4E00\u4E2ADI\uFF08\u4F9D\u8D56\u6CE8\u5165\uFF09\u4EE4\u724C <code>APP_INITIALIZER</code> \u8BA9\u5E94\u7528\u542F\u52A8\u65F6\u53EF\u4EE5\u505A\u4E00\u4E9B\u4F1A\u5F71\u54CD\u6E32\u67D3\u7ED3\u679C\u7684\u6570\u636E\uFF0C\u6BD4\u5982\uFF1A\u8BED\u8A00\u6570\u636E\u3001\u83DC\u5355\u6570\u636E\u3001\u7528\u6237\u4FE1\u606F\u6570\u636E\u3001\u5B57\u5178\u6570\u636E\u7B49\uFF0C\u5E76\u4E14\u5FC5\u987B\u8FD4\u56DE\u4E00\u4E2A <code>Observable</code> \u5F02\u6B65\uFF0C\u5F02\u6B65\u610F\u5473\u8005\u53EF\u4EE5\u505A\u5F88\u591A\u6709\u8DA3\u7684\u4E8B\uFF0C\u6BD4\u5982\u6570\u636E\u6765\u81EA\u8FDC\u7A0B\u3002<code>APP_INITIALIZER</code> \u53EA\u4F1A\u6267\u884C\u4E00\u6B21\uFF0C\u53EA\u9700\u8981\u5728 <code>ApplicationConfig</code> \u6A21\u5757\u6CE8\u518C\u5B83\u5C31\u884C\u4E86\u3002</p>
<p>NG-ALAIN \u811A\u624B\u67B6\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5982\u4F55\u5728\u542F\u52A8 Angular \u540E\u5148\u52A0\u8F7D\u57FA\u7840\u6570\u636E\u4EE5\u540E\u624D\u4F1A\u5F00\u59CB\u6E32\u67D3\u7684\u6837\u677F\u4EE3\u7801 <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/core/startup/startup.service.ts" target="_blank" rel="noopener">startup.service.ts</a>\u3002</p>
<ol>
<li>\u63D0\u4F9B\u7EDF\u4E00\u6CE8\u518C <code>provideStartup</code> \u51FD\u6570\uFF0C\u53EA\u9700\u8981\u5728 <code>app.config.ts</code> \u6CE8\u518C\u5C31\u80FD\u751F\u6548</li>
<li>\u63D0\u4F9B <code>load()</code> \u51FD\u6570\uFF0C\u5E76\u786E\u4FDD<strong>\u65E0\u8BBA\u8BF7\u6C42\u662F\u5426\u6210\u529F</strong>\u90FD\u5FC5\u987B\u8FD4\u56DE\u4E00\u4E2A <code>Observable&lt;void&gt;</code> \u4EE5\u4F9BAngular\u6B63\u5E38\u6E32\u67D3\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4Angular\u65E0\u6CD5\u542F\u52A8</li>
</ol>
<blockquote>
<p>\u6CE8\uFF1ANG-ALAIN \u63D0\u4F9B\u6388\u6743\u670D\u52A1\uFF0C\u82E5\u5728\u8BF7\u6C42\u6570\u636E\u63A5\u53E3\u65E0\u6CD5\u6388\u6743\u65F6\uFF0C\u53EF\u52A0 <code>ALLOW_ANONYMOUS</code> \u6765\u6807\u8BB0</p>
</blockquote>
<p>NG-ALAIN \u63D0\u4F9B\u7684 <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/core/startup/startup.service.ts" target="_blank" rel="noopener">startup.service.ts</a> \u5185\u5BB9\u66F4\u52A0\u4E30\u5BCC\u4E00\u70B9\uFF0C\u5BF9\u4E8E\u5B8C\u6574\u7684\u4E2D\u540E\u53F0\u800C\u8A00\uFF0C\u5927\u591A\u6570\u9879\u76EE\u4E2D\u4EE5\u4E0B\u8FD9\u4E9B\u4FE1\u606F\u90FD\u53EF\u4EE5\u5FC5\u5907\u7684\uFF1A</p>
<table>
<thead>
<tr>
<th>\u6570\u636E\u7C7B\u578B</th>
<th>\u63CF\u8FF0</th>
</tr>
</thead>
<tbody><tr>
<td>\u5E94\u7528\u4FE1\u606F</td>
<td>\u5E94\u7528\u540D\u79F0\u3001\u63CF\u8FF0\u3001\u5E74\u4EFD\uFF0C\u4FE1\u606F\u53EF\u4EE5\u76F4\u63A5\u6CE8\u5165 <code>SettingsService</code>\uFF08<a href="/theme/settings">API</a>\uFF09\u540E\u76F4\u63A5\u5728HTML\u6A21\u677F\u4E2D\u8BBF\u95EE\u3002<br>\u4F8B\u5982\uFF1A<code>this.settingService.setApp(res.app);</code></td>
</tr>
<tr>
<td>\u7528\u6237\u4FE1\u606F</td>
<td>\u5F53\u524D\u7528\u6237\u7684\u59D3\u540D\u3001\u5934\u50CF\u3001\u90AE\u7BB1\u5730\u5740\u7B49\uFF0C\u4FE1\u606F\u53EF\u4EE5\u76F4\u63A5\u6CE8\u5165 <code>SettingsService</code>\uFF08<a href="/theme/settings">API</a>\uFF09\u540E\u76F4\u63A5\u5728HTML\u6A21\u677F\u4E2D\u8BBF\u95EE\u3002<br>\u4F8B\u5982\uFF1A<code>this.settingService.setUser(res.user);</code></td>
</tr>
<tr>
<td>\u5E03\u5C40\u4FE1\u606F</td>
<td>\u8C03\u6574\u4E3B\u9898\u914D\u7F6E\uFF0C\u4F8B\u5982\uFF1A\u56FA\u5B9A\u9876\u90E8\u83DC\u5355\u3001\u6298\u53E0\u83DC\u5355\u7B49\u3002<br>\u4F8B\u5982\uFF1A<code>this.settingService.setLayout(&quot;fixed&quot;, false);</code> \u6216 <code>this.settingService.setLayout(&quot;collapsed&quot;, false);</code></td>
</tr>
<tr>
<td>\u83DC\u5355\u6570\u636E</td>
<td>NG-ALAIN \u8BA4\u4E3A\u83DC\u5355\u6570\u636E\u4E5F\u662F\u6765\u81EA\u8FDC\u7A0B\uFF0C\u4E5F\u53EF\u4EE5\u4EFB\u610F\u4F4D\u7F6E\u6CE8\u5165 <code>MenuService</code>\uFF08<a href="/theme/menu">API</a>\uFF09\u6765\u6539\u53D8\u83DC\u5355\u6570\u636E\uFF0C\u5F53\u7136\u5728 Angular \u542F\u52A8\u4E4B\u524D\u6267\u884C\u83DC\u5355\u8D4B\u503C\u66F4\u4E3A\u5408\u7406\u3002<br>\u83DC\u5355\u6570\u636E<strong>\u52A1\u5FC5</strong>\u786E\u4FDD <a href="https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/menu/interface.ts" target="_blank" rel="noopener">Menu</a> \u683C\u5F0F\uFF0C\u83DC\u5355\u6570\u636E\u8D2F\u7A7F\u6574\u4E2A\u5E94\u7528\uFF0C\u4F8B\u5982\uFF1A\u9875\u5934\u81EA\u52A8\u5BFC\u822A <a href="/components/page-header">page-header</a>\uFF0C\u9875\u6807\u9898\u6587\u672C <a href="/theme/title">TitleService</a> \u7B49\u3002<br>\u4F8B\u5982\uFF1A<code>this.menuService.add(res.menu);</code></td>
</tr>
<tr>
<td>\u9875\u9762\u6807\u9898</td>
<td>\u82E5\u9875\u9762\u6807\u9898\u603B\u5E0C\u671B\u52A0\u4E0A\u5E94\u7528\u540D\u79F0\u4E3A\u540E\u7F00\u65F6\uFF0C\u53EF\u4EE5\u6CE8\u5165 <code>TitleService</code>\uFF08<a href="/theme/title">API</a>\uFF09\u91CD\u65B0\u8C03\u6574 <code>suffix</code> \u5C5E\u6027\u503C\u3002<br>\u4F8B\u5982\u8BBE\u7F6E\u9875\u9762\u6807\u9898\u7684\u540E\u7F00\uFF1A<code>this.titleService.suffix = res.app.name;</code></td>
</tr>
<tr>
<td>ACL</td>
<td>\u8BBF\u95EE\u63A7\u5236\u5217\u8868\u6570\u636E\uFF0C\u5EFA\u8BAE\u5728\u542F\u52A8\u524D\u52A0\u8F7DACL\u8BBF\u95EE\u63A7\u5236\u6743\u9650\u6570\u636E\uFF0C\u6709\u5173\u66F4\u591A\u7EC6\u8282\u53EF\u53C2\u8003 <a href="/acl">\u8BBF\u95EE\u63A7\u5236\u5217\u8868</a>\u3002 <br>\u4F8B\u5982\u8BBE\u7F6E\u5168\u91CF\u6743\u9650\uFF1A<code>this.aclService.setFull(true);</code></td>
</tr>
<tr>
<td>\u56FD\u9645\u5316</td>
<td>\u5EFA\u8BAE\u5728\u542F\u52A8\u524D\u4F18\u5148\u52A0\u8F7D\u56FD\u9645\u5316\u6570\u636E\u5305\uFF0C\u8FD9\u6837\u53EF\u786E\u4FDD\u9879\u76EE\u542F\u52A8\u540E\u9875\u9762\u6E32\u67D3\u4E3A\u76EE\u6807\u8BED\u8A00\u3002\u66F4\u591A\u7EC6\u8282\u53C2\u8003<a href="/docs/i18n">\u56FD\u9645\u5316</a>\u3002</td>
</tr>
</tbody></table>
<h3 id="\u4E1A\u52A1\u8DEF\u7531"><a class="lake-link"><i data-anchor="\u4E1A\u52A1\u8DEF\u7531"></i></a>\u4E1A\u52A1\u8DEF\u7531</h3><p>\u5F53 Angular \u9879\u76EE\u6B63\u5F0F\u542F\u52A8\u540E\u4F1A\u8FDB\u5165\u6E32\u67D3\u52A8\u4F5C\uFF0C\u6839\u636E\u5F53\u524D\u7684\u8DEF\u7531\u5730\u5740\u6765\u51B3\u5B9A\u4E00\u4E2A\u9875\u9762\u5982\u4F55\u6E32\u67D3\uFF0C\u4ECE\u6700\u9876\u5C42\u8DEF\u7531 <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/routes/routes.ts" target="_blank" rel="noopener">routes.ts</a> \u5F00\u59CB\u4E00\u5C42\u5C42\u5BFB\u627E\uFF0C\u5176\u7ED3\u6784\u5982\u4E0B\uFF1A</p>
<pre><code class="language-ts">const routes: Routes = [
  &#123;
    path: &#39;&#39;,
    component: LayoutBasicComponent,
    children: [
      &#123; path: &#39;&#39;, redirectTo: &#39;dashboard&#39;, pathMatch: &#39;full&#39; &#125;,
      &#123;
        path: &#39;dashboard&#39;,
        loadChildren: () =&gt; import(&#39;./dashboard/routes&#39;).then(m =&gt; m.routes)
      &#125;,
      // \u4E1A\u52A1\u5B50\u6A21\u5757
      // &#123; path: &#39;trade&#39;, loadChildren: () =&gt; import(&#39;./trade/routes&#39;).then(m =&gt; m.routes) &#125;,
    ]
  &#125;,
  // \u7A7A\u767D\u5E03\u5C40
  &#123;
    path: &#39;blank&#39;,
    component: LayoutBlankComponent,
    children: [
    ]
  &#125;,
  &#123; path: &#39;&#39;, loadChildren: () =&gt; import(&#39;./passport/routes&#39;).then(m =&gt; m.routes) &#125;,
  &#123; path: &#39;exception&#39;, loadChildren: () =&gt; import(&#39;./exception/routes&#39;).then(m =&gt; m.routes) &#125;,
  // \u672A\u547D\u4E2D\u8DEF\u7531\u5168\u90E8\u8DF3\u8F6C\u81F3 \`exception/404\` \u9875\u9762\u4E0A
  &#123; path: &#39;**&#39;, redirectTo: &#39;exception/404&#39; &#125;,
];
</code></pre>
<blockquote>
<p>\u4E0A\u8FF0\u5728\u4E1A\u52A1\u6A21\u5757\u4E2D\u4F7F\u7528\u4E86 <code>LayoutBasicComponent</code> \u57FA\u7840\u5E03\u5C40\u3001\u7528\u6237\u6388\u6743\u4F7F\u7528\u4E86 <code>LayoutPassportComponent</code> \u7528\u6237\u6388\u6743\u5E03\u5C40\u4EE5\u53CA <code>LayoutBlankComponent</code> \u7A7A\u767D\u5E03\u5C40\uFF0C\u4EE5\u4E0A\u4E09\u79CD\u5E03\u5C40\u90FD\u53EF\u4EE5\u5728 <a href="https://github.com/ng-alain/ng-alain/tree/master/src/app/layout" target="_blank" rel="noopener">layout</a> \u76EE\u5F55\u4E0B\u627E\u5F97\u5230\u3002</p>
</blockquote>
<blockquote>
<p>NG-ALAIN \u4E5F\u63D0\u4F9B\u4E00\u4E9B<a href="https://e.ng-alain.com/" target="_blank" rel="noopener">\u5546\u7528\u4E3B\u9898</a>\u53EF\u4F9B\u9009\u62E9\u3002</p>
</blockquote>
<p>\u4F8B\u5982\u5F53\u7528\u6237\u8BBF\u95EE <code>/dashboard</code> \u8DEF\u7531\u65F6\uFF0C\u4F1A\u5148\u7ECF\u8FC7 <code>LayoutBasicComponent</code> -&gt; <code>DashboardComponent</code>\uFF0C\u6700\u7EC8\u6362\u5F62\u6210\u4E00\u4E2A\u5E9E\u5927\u7684\u7EC4\u4EF6\u6811\u6765\u8868\u793A\u4E00\u4E2A\u5177\u4F53\u7684\u9875\u9762\u3002NG-ALAIN \u811A\u624B\u67B6\u5E2E\u52A9\u4F60\u5B8C\u6210\u5927\u591A\u6570\u5DE5\u4F5C\uFF0C\u800C\u4E00\u4E2A\u65B0\u5165\u95E8\u7684\u4EBA\u66F4\u591A\u53EA\u9700\u8981\u5173\u5FC3 <code>DashboardComponent</code> \u4E1A\u52A1\u7EC4\u4EF6\u8BE5\u5982\u4F55\u5B9E\u73B0\u3002</p>
<h3 id="\u7528\u6237\u8BA4\u8BC1\u4E0E\u6388\u6743"><a class="lake-link"><i data-anchor="\u7528\u6237\u8BA4\u8BC1\u4E0E\u6388\u6743"></i></a>\u7528\u6237\u8BA4\u8BC1\u4E0E\u6388\u6743</h3><p>\u9875\u9762\u80FD\u5426\u8BBF\u95EE\u53D6\u51B3\u4E8E\u7528\u6237\u662F\u5426\u767B\u5F55\u3001\u5DF2\u7ECF\u767B\u5F55\u8FD8\u5F97\u5224\u65AD\u5426\u6709\u6388\u6743\uFF0C\u800C\u8FD9\u4E24\u9879\u5DE5\u4F5C\u5206\u522B\u4EA4\u7ED9 <code>&#64;delon/auth</code> \u4E0E <code>&#64;delon/acl</code> \u6765\u5B8C\u6210\u3002</p>
<h4 id="\u7528\u6237\u8BA4\u8BC1"><a class="lake-link"><i data-anchor="\u7528\u6237\u8BA4\u8BC1"></i></a>\u7528\u6237\u8BA4\u8BC1</h4><p>\u9996\u5148\u7528\u6237\u8BBF\u95EE\u9875\u9762\u65F6\u662F\u7531\u9876\u5C42\u8DEF\u7531\u5F00\u59CB\u5BFB\u627E\u547D\u4E2D\u540E\u8FDB\u884C\u6E32\u67D3\uFF0C\u8981\u60F3\u8BA9\u6240\u6709\u672A\u767B\u5F55\u7528\u6237\u8DF3\u8F6C\u5230\u767B\u5F55\u9875\u9762\uFF0C\u53EF\u4EE5\u914D\u7F6E <code>canActivate</code> \u9009\u9879\uFF0C<code>&#64;delon/auth</code> \u5DF2\u7ECF\u63D0\u4F9B\u4E86\u5177\u4F53\u7684\u5B9E\u73B0\uFF0C\u4F8B\u5982\uFF1A</p>
<pre><code class="language-ts">const routes: Routes = [
  &#123;
    path: &#39;&#39;,
    component: LayoutBasicComponent,
    canActivate: [authSimpleCanActivate],
    children: [
      &#123; path: &#39;&#39;, redirectTo: &#39;dashboard&#39;, pathMatch: &#39;full&#39; &#125;,
      &#123; path: &#39;dashboard&#39;, component: DashboardComponent, data: &#123; title: &#39;\u4EEA\u8868\u76D8&#39; &#125; &#125;,
    ]
  &#125;,
];
</code></pre>
<blockquote>
<p>\u8FD9\u91CC\u7684 <code>authSimpleCanActivate</code> \u662F\u56E0\u4E3A\u91C7\u7528\u57FA\u4E8E Simple Web Token \u8BA4\u8BC1\u98CE\u683C\uFF0C\u5176\u4ED6\u8BA4\u8BC1\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="/auth">\u7528\u6237\u8BA4\u8BC1</a>\u7AE0\u8282\u3002</p>
</blockquote>
<p>\u5F53\u7528\u6237\u672A\u767B\u5F55\u65F6\u4F1A\u76F4\u63A5\u8DF3\u8F6C\u81F3 <code>/passport/login</code> \u9875\u9762\uFF0C\u5982\u679C\u91C7\u7528\u7684\u662F JWT \u8BA4\u8BC1\u65B9\u5F0F\uFF0C\u8FD8\u4F1A\u5BF9 Token \u662F\u5426\u6709\u6548\u8FDB\u884C\u68C0\u9A8C\u3002</p>
<h4 id="\u7528\u6237\u6388\u6743"><a class="lake-link"><i data-anchor="\u7528\u6237\u6388\u6743"></i></a>\u7528\u6237\u6388\u6743</h4><p>\u63A5\u8005\u7528\u6237\u8BBF\u95EE\u7684\u9875\u9762\u8FD8\u9700\u8981\u53D6\u51B3\u4E8E\u6388\u6743\u7A0B\u5EA6\uFF0C\u4F8B\u5982\u7CFB\u7EDF\u914D\u7F6E\u9875\u666E\u901A\u7528\u6237\u80AF\u5B9A\u65E0\u6CD5\u8FDB\u5165\u3002\u5728\u521D\u59CB\u5316\u9879\u76EE\u6570\u636E\u5C0F\u8282\u91CC\u4F1A\u6839\u636E\u5F53\u524D\u7528\u6237\u7684 Token \u6765\u83B7\u5F97\u6388\u6743\u7684\u6570\u636E\uFF0C\u5E76\u5C06\u6570\u636E\u4EA4\u7ED9 <code>&#64;delon/acl</code>\uFF0C\u540C\u65F6\u5B83\u4E5F\u63D0\u4F9B\u4E00\u7EC4\u8DEF\u7531\u5B88\u536B\u7684\u5177\u4F53\u5B9E\u73B0 <code>aclCanActivate</code> \u65B9\u6CD5\uFF0C\u4F8B\u5982\u5E0C\u671B\u6574\u4E2A\u7CFB\u7EDF\u914D\u7F6E\u6A21\u5757\u90FD\u5FC5\u987B\u662F <code>admin</code> \u89D2\u8272\u624D\u80FD\u8BBF\u95EE\uFF0C\u5219\uFF1A</p>
<pre><code class="language-ts">const routes: Routes = [
  &#123;
    path: &#39;sys&#39;,
    canActivate: [aclCanActivate],
    data: &#123; guard: &#39;admin&#39; &#125;,
    children: [
      &#123; path: &#39;config&#39;, component: ConfigComponent &#125;,
    ]
  &#125;,
];
</code></pre>
<p>\u6B64\u65F6\uFF0C\u5F53\u4E00\u4E2A\u672A\u6388\u6743 <code>admin</code> \u89D2\u8272\u7684\u7528\u6237\u5C1D\u8BD5\u8BBF\u95EE <code>/sys/config</code> \u9875\u9762\u65F6\u4F1A\u88AB\u8DF3\u8F6C\u81F3\u672A\u6388\u6743\u9519\u8BEF\u9875\u4E0A\u3002</p>
<p>\u5F53\u7136\u8FD8\u652F\u6301\u7C92\u5EA6\u6709\u66F4\u7EC6\u64CD\u4F5C\uFF0C\u6BD4\u5982\u67D0\u4E2A\u6309\u94AE\uFF0C\u8BF7\u53C2\u8003<a href="/acl">ACL</a>\u7AE0\u8282\u3002</p>
<h3 id="\u62E6\u622A\u7F51\u7EDC\u8BF7\u6C42"><a class="lake-link"><i data-anchor="\u62E6\u622A\u7F51\u7EDC\u8BF7\u6C42"></i></a>\u62E6\u622A\u7F51\u7EDC\u8BF7\u6C42</h3><p>\u7F51\u7EDC\u8BF7\u6C42\u662F\u4E00\u9879\u975E\u5E38\u9891\u7E41\u7684\u5DE5\u4F5C\uFF0C\u5982\u679C\u60F3\u4F18\u96C5\u7684\u5728\u4E1A\u52A1\u7EC4\u4EF6\u5185\u4F7F\u7528\u7F51\u7EDC\u8BF7\u6C42\u52A8\u4F5C\u7684\u8BDD\uFF0C\u90A3\u4E48\u5C06\u670D\u52A1\u7AEFURL\u524D\u7F00\u3001\u5F02\u5E38\u5904\u7406\u3001Token \u5237\u65B0\u7B49\u64CD\u4F5C\u96C6\u4E2D\u5904\u7406\u662F\u5FC5\u4E0D\u53EF\u5C11\u7684\uFF0CNG-ALAIN \u811A\u624B\u67B6\u63D0\u4F9B\u4E00\u4E2A <a href="https://github.com/ng-alain/ng-alain/tree/master/src/app/core/net" target="_blank" rel="noopener">net</a> \u6587\u4EF6\u3002\u5B83\u4F1A\u5229\u7528\u4EE4\u724C <code>HttpInterceptorFn</code> \u8D77\u5230\u4E00\u79CD\u62E6\u622A\u5668\u7684\u6548\u679C\u3002</p>
<p>\u6709\u5173\u66F4\u591A\u7EC6\u8282\uFF0C\u8BF7\u53C2\u8003 <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/core/net/default.interceptor.ts" target="_blank" rel="noopener">default.interceptor.ts</a> \u6587\u4EF6\u3002</p>
<h2 id="ide"><a class="lake-link"><i data-anchor="ide"></i></a>IDE</h2><p>\u201C\u5DE5\u6B32\u5584\u5176\u4E8B\uFF0C\u5FC5\u5148\u5229\u5176\u5668\u662F\u201D\uFF0CNG-ALAIN \u811A\u624B\u67B6\u63A8\u8350\u4F7F\u7528 <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">Visual Studio Code</a> IDE\uFF0C\u56E0\u4E3A NG-ALAIN \u9488\u5BF9 VSCode \u589E\u52A0\u4E00\u4E9B\u989D\u5916\u7684\u7279\u6027\uFF0C\u53EF\u4EE5\u66F4\u597D\u7684\u5E2E\u52A9\u4F60\u5F00\u53D1\u3002</p>
<blockquote>
<p>\u6216\u8005\u76F4\u63A5\u4F7F\u7528 <a href="https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-extension-pack" target="_blank" rel="noopener">NG-ALAIN Extension Pack</a> \u5957\u4EF6\u3002</p>
</blockquote>
<h3 id="\u4EE3\u7801\u7247\u65AD"><a class="lake-link"><i data-anchor="\u4EE3\u7801\u7247\u65AD"></i></a>\u4EE3\u7801\u7247\u65AD</h3><ul>
<li><a href="https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode" target="_blank" rel="noopener">NG-ALAIN Snippets</a></li>
</ul>
<h3 id="class\u6837\u5F0F\u667A\u80FD\u63D0\u9192"><a class="lake-link"><i data-anchor="class\u6837\u5F0F\u667A\u80FD\u63D0\u9192"></i></a>Class\u6837\u5F0F\u667A\u80FD\u63D0\u9192</h3><p>ng-alain \u5185\u7F6E\u4E86\u5927\u91CF\u7684\u5DE5\u5177\u96C6\u6837\u5F0F\uFF08<a href="/theme/tools">API</a>\uFF09\uFF0C\u5B89\u88C5\u4EE5\u4E0B\u63D2\u4EF6\u53EF\u4EE5\u76F4\u63A5\u5728HTML\u6A21\u677F\u91CC\u76F4\u63A5\u8BBF\u95EE\u5230\u5B83\u4EEC\u3002</p>
<ul>
<li><a href="https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode" target="_blank" rel="noopener">NG-ALAIN Snippets</a></li>
</ul>
`,api:"",toc:[{id:"\u524D\u5E8F\u51C6\u5907",title:"\u524D\u5E8F\u51C6\u5907"},{id:"\u5199\u5728\u524D\u9762",title:"\u5199\u5728\u524D\u9762"},{id:"\u6D41\u7A0B",title:"\u6D41\u7A0B",children:[{id:"\u521D\u59CB\u5316\u9879\u76EE\u6570\u636E",title:"\u521D\u59CB\u5316\u9879\u76EE\u6570\u636E"},{id:"\u4E1A\u52A1\u8DEF\u7531",title:"\u4E1A\u52A1\u8DEF\u7531"},{id:"\u7528\u6237\u8BA4\u8BC1\u4E0E\u6388\u6743",title:"\u7528\u6237\u8BA4\u8BC1\u4E0E\u6388\u6743"},{id:"\u62E6\u622A\u7F51\u7EDC\u8BF7\u6C42",title:"\u62E6\u622A\u7F51\u7EDC\u8BF7\u6C42"}]},{id:"ide",title:"IDE",children:[{id:"\u4EE3\u7801\u7247\u65AD",title:"\u4EE3\u7801\u7247\u65AD"},{id:"class\u6837\u5F0F\u667A\u80FD\u63D0\u9192",title:"Class\u6837\u5F0F\u667A\u80FD\u63D0\u9192"}]}],raw:`---
order: 0
title: \u5982\u4F55\u5F00\u59CB
type: Dev
i18n: need-update
---

## \u524D\u5E8F\u51C6\u5907

NG-ALAIN \u6280\u672F\u6808\u57FA\u4E8E Typescript\u3001Angular\u3001\u56FE\u8868G2 \u548C NG-ZORRO\uFF0C\u5728\u5F00\u59CB\u5C1D\u8BD5\u4F7F\u7528 NG-ALAIN \u811A\u624B\u67B6\u524D\uFF0C\u8BF7\u5148\u63D0\u524D\u4E86\u89E3\u548C\u5B66\u4E60\u8FD9\u4E9B\u77E5\u8BC6\u4F1A\u975E\u5E38\u6709\u5E2E\u52A9\u3002\u5982\u679C\u4F60\u662F\u4E00\u540D Java \u6216 C# \u540E\u7AEF\u5F00\u53D1\u4EBA\u5458\uFF0C\u90A3\u4E48\u606D\u559C\u4F60\uFF0C\u4F60\u6240\u89C1\u5230\u7684\u4E0D\u7BA1\u662F\u7ED3\u6784\u3001\u4EE3\u7801\u3001\u5F00\u53D1\u4F53\u9A8C\u7B49\u90FD\u662F\u4F60\u6240\u60F3\u7684\u90A3\u6837\u3002\u4F46\u4E0D\u7BA1\u600E\u4E48\u6837\uFF0C\u60F3\u5199\u597D Angular \u4EE3\u7801\uFF0C\u4EE5\u4E0B\u8FD9\u4E9B\u6587\u7AE0\u53CA\u793E\u533A\u662F\u4F60\u5FC5\u987B\u8981\u77E5\u9053\u7684\uFF1A

- \u6587\u6863\u7C7B
  - [TypeScript\u4E2D\u6587\u6587\u6863](https://www.tslang.cn/)\uFF0C\u867D\u7136 TypeScript \u8DDF Java\u3001C# \u8BED\u6CD5\u5F88\u50CF\uFF0C\u8FD9\u662F\u8BED\u6CD5\u57FA\u7840\u9700\u8981\u8BA4\u771F\u9605\u8BFB
  - [Angular\u4E2D\u6587\u6587\u6863](https://angular.cn/docs)\uFF0C\u5EFA\u8BAE\u4E00\u5B9A\u8981\u82B1\u65F6\u95F4\u9605\u8BFB\u6587\u6863\u90E8\u5206\uFF0C\u900F\u8FC7\u5B83\u57FA\u672C\u4E0A\u5C31\u53EF\u4EE5\u5B66\u4F1A Angular\uFF1B\u540C\u65F6\uFF0C\u4E5F\u662F Angular API \u63A5\u53E3\u6587\u6863
  - [NG-ZORRO\u4E2D\u6587\u6587\u6863](https://ng.ant.design/docs/introduce/zh)\uFF0CNG-ZORRO \u4F5C\u4E3A NG-ALAIN \u7684\u57FA\u7840\u7EC4\u4EF6\u5E93\uFF0C\u5F53\u4F60\u4E0D\u61C2\u67D0\u4E2A\u7EC4\u4EF6\u65F6\uFF0C\u5B83\u5C31\u662F\u6700\u597D\u7684\u6587\u6863\uFF0C\u5305\u542B\u7EC4\u4EF6\u7528\u6CD5\u53CAAPI\u8BF4\u660E
  - [NG-ALAIN\u4E2D\u6587\u6587\u6863](https://ng-alain.com/)\uFF0C\u5305\u542B\u6240\u6709 \`@delon/*\` \u7C7B\u578B\u7684\u7528\u6CD5\u53CAAPI\u8BF4\u660E
  - [G2\u56FE\u8868\u4E2D\u6587\u6587\u6863](https://g2.antv.vision/zh)\uFF0C\u5982\u679C\u9700\u8981\u56FE\u8868\u5F00\u53D1\uFF0C\u5219\u8FD9\u4EFD\u6587\u6863\u662F\u5FC5\u5907
- \u8F85\u52A9\u7C7B
  - [Ant Design \u6307\u5F15\u6587\u7AE0](https://ant.design/docs/spec/introduce-cn)\uFF0C\u5B66\u4E60 Ant Design \u7684\u8BBE\u8BA1\u7406\u5FF5\uFF0C\u975E\u5E38\u503C\u5F97\u9605\u8BFB\u7684\u90E8\u5206
  - [NG-ZORRO \u793E\u533A\u63A8\u8350](https://ng.ant.design/docs/recommendation/zh)\uFF0C\u4E00\u4EFD\u975E\u5E38\u503C\u5F97\u5B66\u4E60\u7684\u6E05\u5355
  - NG-ALAIN \u5165\u95E8\u89C6\u9891\uFF08[YouTube](https://www.youtube.com/watch?v=lPnNKPuULVw&list=PLhWkvn5F8uyJRimbVZ944unzRrHeujngw)\u3001[\u817E\u8BAF\u89C6\u9891](http://v.qq.com/vplus/2c1dd5c6db4feeeea25e9827b38c171e/foldervideos/870001501oy1ijf)\u3001[B\u7AD9](https://space.bilibili.com/12207877/#/channel/detail?cid=50229)\uFF09
  - [NG-ALAIN \u77E5\u4E4E\u4E13\u680F](https://zhuanlan.zhihu.com/ng-alain)

## \u5199\u5728\u524D\u9762

\u5F88\u591A\u4EBA\u5728\u5B66\u4E60\u4E00\u9879\u65B0\u4E1C\u897F\u65F6\uFF0C\u65E0\u5916\u4E4E\u5199\u4E2A Hello World \u6216\u662F\u5199\u4E00\u4E2A Http \u8BF7\u6C42\uFF0C\u7136\u540E\u6162\u6162\u5F00\u59CB\u8F90\u5C04\u6240\u9700\u8981\u7684\u6280\u672F\u77E5\u8BC6\u3002\u4E00\u4E2A HTTP \u8BF7\u6C42\u5BF9\u4E2D\u540E\u53F0\u800C\u8A00\u4FBF\u662F\u6DB5\u76D6\u4E86 CURD \u4E3B\u8981\u4EFB\u52A1\uFF0C\u751A\u81F3\u53EF\u4EE5\u8BF490%\u65F6\u95F4\u53CA\u529F\u80FD\u90FD\u5728\u505A\u8FD9\u9879\u5DE5\u4F5C\u3002\u5728[\u4ECB\u7ECD](/docs/getting-started)\u7AE0\u8282\u4E2D\u5DF2\u7ECF\u63CF\u8FF0\u521B\u5EFA\u4E00\u4E2A NG-ALAIN \u9879\u76EE\u5E76\u5982\u4F55\u8FD0\u884C\u5B83\uFF0C\u5982\u679C\u6B64\u65F6\u4F60\u4E5F\u60F3\u8981\u5199\u4E2A Hello World\uFF0C\u90A3\u4E48\u53EA\u9700\u8981\u5229\u7528 VSCode \u6253\u5F00\u8FD9\u4E2A\u9879\u76EE\uFF0C\u5E76\u5728 \`dashboard.component.html\` \u6587\u4EF6\u5185\u8F93\u5165\u6587\u672C\uFF0C500ms \u540E\u5C31\u4F1A\u5728\u9875\u9762\u4E0A\u7ACB\u5373\u5448\u73B0\u3002

## \u6D41\u7A0B

\u56DE\u8FC7\u5934\u6765\u6211\u4EEC\u8BD5\u7740\u56DE\u60F3\u4E00\u4E0B\uFF0C\u4E00\u4E2A\u4E2D\u540E\u53F0\u9879\u76EE\uFF0C\u4ECE\u542F\u52A8\u518D\u5230\u5448\u73B0\u4E00\u4EFD\u8BA2\u5355\u5217\u8868\u7684\u529F\u80FD\uFF0C\u5BF9\u4E8E\u5F00\u53D1\u8005\u800C\u8A00\u5305\u542B\u4E86\u54EA\u4E9B\u4E8B\u4EF6\u3002\u65E0\u5916\u4E4E\u9879\u76EE\u542F\u52A8\u65F6\u5E94\u8BE5\u52A0\u8F7D\u70B9\u4EC0\u4E48\u7CFB\u7EDF\u914D\u7F6E\u9879\uFF0C\u54EA\u4E9B\u9875\u9762\u7528\u6237\u65E0\u6743\u8FDB\u5165\uFF1B\u628A\u7C92\u5EA6\u518D\u60F3\u7EC6\u4E00\u70B9\uFF0C\u540C\u4E00\u4E2A\u9875\u9762\u4E0D\u540C\u7684\u6309\u94AE\u7ED9\u4E0D\u540C\u7684\u4EBA\u7528\uFF0CHTTP\u8BF7\u6C42\u82E5\u4EA7\u751F\u9519\u8BEF\u662F\u4E0D\u662F\u5F97\u6BCF\u6B21\u90FD\u5199\u76F8\u540C\u7684\u5904\u7406\u4EE3\u7801\u7B49\u7B49\u3002

### \u521D\u59CB\u5316\u9879\u76EE\u6570\u636E

Angular \u63D0\u4F9B\u4E00\u4E2ADI\uFF08\u4F9D\u8D56\u6CE8\u5165\uFF09\u4EE4\u724C \`APP_INITIALIZER\` \u8BA9\u5E94\u7528\u542F\u52A8\u65F6\u53EF\u4EE5\u505A\u4E00\u4E9B\u4F1A\u5F71\u54CD\u6E32\u67D3\u7ED3\u679C\u7684\u6570\u636E\uFF0C\u6BD4\u5982\uFF1A\u8BED\u8A00\u6570\u636E\u3001\u83DC\u5355\u6570\u636E\u3001\u7528\u6237\u4FE1\u606F\u6570\u636E\u3001\u5B57\u5178\u6570\u636E\u7B49\uFF0C\u5E76\u4E14\u5FC5\u987B\u8FD4\u56DE\u4E00\u4E2A \`Observable\` \u5F02\u6B65\uFF0C\u5F02\u6B65\u610F\u5473\u8005\u53EF\u4EE5\u505A\u5F88\u591A\u6709\u8DA3\u7684\u4E8B\uFF0C\u6BD4\u5982\u6570\u636E\u6765\u81EA\u8FDC\u7A0B\u3002\`APP_INITIALIZER\` \u53EA\u4F1A\u6267\u884C\u4E00\u6B21\uFF0C\u53EA\u9700\u8981\u5728 \`ApplicationConfig\` \u6A21\u5757\u6CE8\u518C\u5B83\u5C31\u884C\u4E86\u3002

NG-ALAIN \u811A\u624B\u67B6\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5982\u4F55\u5728\u542F\u52A8 Angular \u540E\u5148\u52A0\u8F7D\u57FA\u7840\u6570\u636E\u4EE5\u540E\u624D\u4F1A\u5F00\u59CB\u6E32\u67D3\u7684\u6837\u677F\u4EE3\u7801 [startup.service.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/startup/startup.service.ts)\u3002

1. \u63D0\u4F9B\u7EDF\u4E00\u6CE8\u518C \`provideStartup\` \u51FD\u6570\uFF0C\u53EA\u9700\u8981\u5728 \`app.config.ts\` \u6CE8\u518C\u5C31\u80FD\u751F\u6548
2. \u63D0\u4F9B \`load()\` \u51FD\u6570\uFF0C\u5E76\u786E\u4FDD**\u65E0\u8BBA\u8BF7\u6C42\u662F\u5426\u6210\u529F**\u90FD\u5FC5\u987B\u8FD4\u56DE\u4E00\u4E2A \`Observable<void>\` \u4EE5\u4F9BAngular\u6B63\u5E38\u6E32\u67D3\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4Angular\u65E0\u6CD5\u542F\u52A8

> \u6CE8\uFF1ANG-ALAIN \u63D0\u4F9B\u6388\u6743\u670D\u52A1\uFF0C\u82E5\u5728\u8BF7\u6C42\u6570\u636E\u63A5\u53E3\u65E0\u6CD5\u6388\u6743\u65F6\uFF0C\u53EF\u52A0 \`ALLOW_ANONYMOUS\` \u6765\u6807\u8BB0

 NG-ALAIN \u63D0\u4F9B\u7684 [startup.service.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/startup/startup.service.ts) \u5185\u5BB9\u66F4\u52A0\u4E30\u5BCC\u4E00\u70B9\uFF0C\u5BF9\u4E8E\u5B8C\u6574\u7684\u4E2D\u540E\u53F0\u800C\u8A00\uFF0C\u5927\u591A\u6570\u9879\u76EE\u4E2D\u4EE5\u4E0B\u8FD9\u4E9B\u4FE1\u606F\u90FD\u53EF\u4EE5\u5FC5\u5907\u7684\uFF1A

| \u6570\u636E\u7C7B\u578B | \u63CF\u8FF0 |
|------|----|
| \u5E94\u7528\u4FE1\u606F | \u5E94\u7528\u540D\u79F0\u3001\u63CF\u8FF0\u3001\u5E74\u4EFD\uFF0C\u4FE1\u606F\u53EF\u4EE5\u76F4\u63A5\u6CE8\u5165 \`SettingsService\`\uFF08[API](/theme/settings)\uFF09\u540E\u76F4\u63A5\u5728HTML\u6A21\u677F\u4E2D\u8BBF\u95EE\u3002<br>\u4F8B\u5982\uFF1A\`this.settingService.setApp(res.app);\` |
| \u7528\u6237\u4FE1\u606F | \u5F53\u524D\u7528\u6237\u7684\u59D3\u540D\u3001\u5934\u50CF\u3001\u90AE\u7BB1\u5730\u5740\u7B49\uFF0C\u4FE1\u606F\u53EF\u4EE5\u76F4\u63A5\u6CE8\u5165 \`SettingsService\`\uFF08[API](/theme/settings)\uFF09\u540E\u76F4\u63A5\u5728HTML\u6A21\u677F\u4E2D\u8BBF\u95EE\u3002<br>\u4F8B\u5982\uFF1A\`this.settingService.setUser(res.user);\` |
| \u5E03\u5C40\u4FE1\u606F | \u8C03\u6574\u4E3B\u9898\u914D\u7F6E\uFF0C\u4F8B\u5982\uFF1A\u56FA\u5B9A\u9876\u90E8\u83DC\u5355\u3001\u6298\u53E0\u83DC\u5355\u7B49\u3002<br>\u4F8B\u5982\uFF1A\`this.settingService.setLayout("fixed", false);\` \u6216 \`this.settingService.setLayout("collapsed", false);\` |
| \u83DC\u5355\u6570\u636E | NG-ALAIN \u8BA4\u4E3A\u83DC\u5355\u6570\u636E\u4E5F\u662F\u6765\u81EA\u8FDC\u7A0B\uFF0C\u4E5F\u53EF\u4EE5\u4EFB\u610F\u4F4D\u7F6E\u6CE8\u5165 \`MenuService\`\uFF08[API](/theme/menu)\uFF09\u6765\u6539\u53D8\u83DC\u5355\u6570\u636E\uFF0C\u5F53\u7136\u5728 Angular \u542F\u52A8\u4E4B\u524D\u6267\u884C\u83DC\u5355\u8D4B\u503C\u66F4\u4E3A\u5408\u7406\u3002<br>\u83DC\u5355\u6570\u636E**\u52A1\u5FC5**\u786E\u4FDD [Menu](https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/menu/interface.ts) \u683C\u5F0F\uFF0C\u83DC\u5355\u6570\u636E\u8D2F\u7A7F\u6574\u4E2A\u5E94\u7528\uFF0C\u4F8B\u5982\uFF1A\u9875\u5934\u81EA\u52A8\u5BFC\u822A [page-header](/components/page-header)\uFF0C\u9875\u6807\u9898\u6587\u672C [TitleService](/theme/title) \u7B49\u3002<br>\u4F8B\u5982\uFF1A\`this.menuService.add(res.menu);\` |
| \u9875\u9762\u6807\u9898 | \u82E5\u9875\u9762\u6807\u9898\u603B\u5E0C\u671B\u52A0\u4E0A\u5E94\u7528\u540D\u79F0\u4E3A\u540E\u7F00\u65F6\uFF0C\u53EF\u4EE5\u6CE8\u5165 \`TitleService\`\uFF08[API](/theme/title)\uFF09\u91CD\u65B0\u8C03\u6574 \`suffix\` \u5C5E\u6027\u503C\u3002<br>\u4F8B\u5982\u8BBE\u7F6E\u9875\u9762\u6807\u9898\u7684\u540E\u7F00\uFF1A\`this.titleService.suffix = res.app.name;\` |
| ACL | \u8BBF\u95EE\u63A7\u5236\u5217\u8868\u6570\u636E\uFF0C\u5EFA\u8BAE\u5728\u542F\u52A8\u524D\u52A0\u8F7DACL\u8BBF\u95EE\u63A7\u5236\u6743\u9650\u6570\u636E\uFF0C\u6709\u5173\u66F4\u591A\u7EC6\u8282\u53EF\u53C2\u8003 [\u8BBF\u95EE\u63A7\u5236\u5217\u8868](/acl)\u3002 <br>\u4F8B\u5982\u8BBE\u7F6E\u5168\u91CF\u6743\u9650\uFF1A\`this.aclService.setFull(true);\` |
| \u56FD\u9645\u5316 | \u5EFA\u8BAE\u5728\u542F\u52A8\u524D\u4F18\u5148\u52A0\u8F7D\u56FD\u9645\u5316\u6570\u636E\u5305\uFF0C\u8FD9\u6837\u53EF\u786E\u4FDD\u9879\u76EE\u542F\u52A8\u540E\u9875\u9762\u6E32\u67D3\u4E3A\u76EE\u6807\u8BED\u8A00\u3002\u66F4\u591A\u7EC6\u8282\u53C2\u8003[\u56FD\u9645\u5316](/docs/i18n)\u3002 |

### \u4E1A\u52A1\u8DEF\u7531

\u5F53 Angular \u9879\u76EE\u6B63\u5F0F\u542F\u52A8\u540E\u4F1A\u8FDB\u5165\u6E32\u67D3\u52A8\u4F5C\uFF0C\u6839\u636E\u5F53\u524D\u7684\u8DEF\u7531\u5730\u5740\u6765\u51B3\u5B9A\u4E00\u4E2A\u9875\u9762\u5982\u4F55\u6E32\u67D3\uFF0C\u4ECE\u6700\u9876\u5C42\u8DEF\u7531 [routes.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/routes/routes.ts) \u5F00\u59CB\u4E00\u5C42\u5C42\u5BFB\u627E\uFF0C\u5176\u7ED3\u6784\u5982\u4E0B\uFF1A

\`\`\`ts
const routes: Routes = [
  {
    path: '',
    component: LayoutBasicComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/routes').then(m => m.routes)
      },
      // \u4E1A\u52A1\u5B50\u6A21\u5757
      // { path: 'trade', loadChildren: () => import('./trade/routes').then(m => m.routes) },
    ]
  },
  // \u7A7A\u767D\u5E03\u5C40
  {
    path: 'blank',
    component: LayoutBlankComponent,
    children: [
    ]
  },
  { path: '', loadChildren: () => import('./passport/routes').then(m => m.routes) },
  { path: 'exception', loadChildren: () => import('./exception/routes').then(m => m.routes) },
  // \u672A\u547D\u4E2D\u8DEF\u7531\u5168\u90E8\u8DF3\u8F6C\u81F3 \`exception/404\` \u9875\u9762\u4E0A
  { path: '**', redirectTo: 'exception/404' },
];
\`\`\`

> \u4E0A\u8FF0\u5728\u4E1A\u52A1\u6A21\u5757\u4E2D\u4F7F\u7528\u4E86 \`LayoutBasicComponent\` \u57FA\u7840\u5E03\u5C40\u3001\u7528\u6237\u6388\u6743\u4F7F\u7528\u4E86 \`LayoutPassportComponent\` \u7528\u6237\u6388\u6743\u5E03\u5C40\u4EE5\u53CA \`LayoutBlankComponent\` \u7A7A\u767D\u5E03\u5C40\uFF0C\u4EE5\u4E0A\u4E09\u79CD\u5E03\u5C40\u90FD\u53EF\u4EE5\u5728 [layout](https://github.com/ng-alain/ng-alain/tree/master/src/app/layout) \u76EE\u5F55\u4E0B\u627E\u5F97\u5230\u3002

> NG-ALAIN \u4E5F\u63D0\u4F9B\u4E00\u4E9B[\u5546\u7528\u4E3B\u9898](https://e.ng-alain.com/)\u53EF\u4F9B\u9009\u62E9\u3002

\u4F8B\u5982\u5F53\u7528\u6237\u8BBF\u95EE \`/dashboard\` \u8DEF\u7531\u65F6\uFF0C\u4F1A\u5148\u7ECF\u8FC7 \`LayoutBasicComponent\` -> \`DashboardComponent\`\uFF0C\u6700\u7EC8\u6362\u5F62\u6210\u4E00\u4E2A\u5E9E\u5927\u7684\u7EC4\u4EF6\u6811\u6765\u8868\u793A\u4E00\u4E2A\u5177\u4F53\u7684\u9875\u9762\u3002NG-ALAIN \u811A\u624B\u67B6\u5E2E\u52A9\u4F60\u5B8C\u6210\u5927\u591A\u6570\u5DE5\u4F5C\uFF0C\u800C\u4E00\u4E2A\u65B0\u5165\u95E8\u7684\u4EBA\u66F4\u591A\u53EA\u9700\u8981\u5173\u5FC3 \`DashboardComponent\` \u4E1A\u52A1\u7EC4\u4EF6\u8BE5\u5982\u4F55\u5B9E\u73B0\u3002

### \u7528\u6237\u8BA4\u8BC1\u4E0E\u6388\u6743

\u9875\u9762\u80FD\u5426\u8BBF\u95EE\u53D6\u51B3\u4E8E\u7528\u6237\u662F\u5426\u767B\u5F55\u3001\u5DF2\u7ECF\u767B\u5F55\u8FD8\u5F97\u5224\u65AD\u5426\u6709\u6388\u6743\uFF0C\u800C\u8FD9\u4E24\u9879\u5DE5\u4F5C\u5206\u522B\u4EA4\u7ED9 \`@delon/auth\` \u4E0E \`@delon/acl\` \u6765\u5B8C\u6210\u3002

#### \u7528\u6237\u8BA4\u8BC1

\u9996\u5148\u7528\u6237\u8BBF\u95EE\u9875\u9762\u65F6\u662F\u7531\u9876\u5C42\u8DEF\u7531\u5F00\u59CB\u5BFB\u627E\u547D\u4E2D\u540E\u8FDB\u884C\u6E32\u67D3\uFF0C\u8981\u60F3\u8BA9\u6240\u6709\u672A\u767B\u5F55\u7528\u6237\u8DF3\u8F6C\u5230\u767B\u5F55\u9875\u9762\uFF0C\u53EF\u4EE5\u914D\u7F6E \`canActivate\` \u9009\u9879\uFF0C\`@delon/auth\` \u5DF2\u7ECF\u63D0\u4F9B\u4E86\u5177\u4F53\u7684\u5B9E\u73B0\uFF0C\u4F8B\u5982\uFF1A

\`\`\`ts
const routes: Routes = [
  {
    path: '',
    component: LayoutBasicComponent,
    canActivate: [authSimpleCanActivate],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent, data: { title: '\u4EEA\u8868\u76D8' } },
    ]
  },
];
\`\`\`

> \u8FD9\u91CC\u7684 \`authSimpleCanActivate\` \u662F\u56E0\u4E3A\u91C7\u7528\u57FA\u4E8E Simple Web Token \u8BA4\u8BC1\u98CE\u683C\uFF0C\u5176\u4ED6\u8BA4\u8BC1\u65B9\u5F0F\u8BF7\u53C2\u8003[\u7528\u6237\u8BA4\u8BC1](/auth)\u7AE0\u8282\u3002

\u5F53\u7528\u6237\u672A\u767B\u5F55\u65F6\u4F1A\u76F4\u63A5\u8DF3\u8F6C\u81F3 \`/passport/login\` \u9875\u9762\uFF0C\u5982\u679C\u91C7\u7528\u7684\u662F JWT \u8BA4\u8BC1\u65B9\u5F0F\uFF0C\u8FD8\u4F1A\u5BF9 Token \u662F\u5426\u6709\u6548\u8FDB\u884C\u68C0\u9A8C\u3002

#### \u7528\u6237\u6388\u6743

\u63A5\u8005\u7528\u6237\u8BBF\u95EE\u7684\u9875\u9762\u8FD8\u9700\u8981\u53D6\u51B3\u4E8E\u6388\u6743\u7A0B\u5EA6\uFF0C\u4F8B\u5982\u7CFB\u7EDF\u914D\u7F6E\u9875\u666E\u901A\u7528\u6237\u80AF\u5B9A\u65E0\u6CD5\u8FDB\u5165\u3002\u5728\u521D\u59CB\u5316\u9879\u76EE\u6570\u636E\u5C0F\u8282\u91CC\u4F1A\u6839\u636E\u5F53\u524D\u7528\u6237\u7684 Token \u6765\u83B7\u5F97\u6388\u6743\u7684\u6570\u636E\uFF0C\u5E76\u5C06\u6570\u636E\u4EA4\u7ED9 \`@delon/acl\`\uFF0C\u540C\u65F6\u5B83\u4E5F\u63D0\u4F9B\u4E00\u7EC4\u8DEF\u7531\u5B88\u536B\u7684\u5177\u4F53\u5B9E\u73B0 \`aclCanActivate\` \u65B9\u6CD5\uFF0C\u4F8B\u5982\u5E0C\u671B\u6574\u4E2A\u7CFB\u7EDF\u914D\u7F6E\u6A21\u5757\u90FD\u5FC5\u987B\u662F \`admin\` \u89D2\u8272\u624D\u80FD\u8BBF\u95EE\uFF0C\u5219\uFF1A

\`\`\`ts
const routes: Routes = [
  {
    path: 'sys',
    canActivate: [aclCanActivate],
    data: { guard: 'admin' },
    children: [
      { path: 'config', component: ConfigComponent },
    ]
  },
];
\`\`\`

\u6B64\u65F6\uFF0C\u5F53\u4E00\u4E2A\u672A\u6388\u6743 \`admin\` \u89D2\u8272\u7684\u7528\u6237\u5C1D\u8BD5\u8BBF\u95EE \`/sys/config\` \u9875\u9762\u65F6\u4F1A\u88AB\u8DF3\u8F6C\u81F3\u672A\u6388\u6743\u9519\u8BEF\u9875\u4E0A\u3002

\u5F53\u7136\u8FD8\u652F\u6301\u7C92\u5EA6\u6709\u66F4\u7EC6\u64CD\u4F5C\uFF0C\u6BD4\u5982\u67D0\u4E2A\u6309\u94AE\uFF0C\u8BF7\u53C2\u8003[ACL](/acl)\u7AE0\u8282\u3002

### \u62E6\u622A\u7F51\u7EDC\u8BF7\u6C42

\u7F51\u7EDC\u8BF7\u6C42\u662F\u4E00\u9879\u975E\u5E38\u9891\u7E41\u7684\u5DE5\u4F5C\uFF0C\u5982\u679C\u60F3\u4F18\u96C5\u7684\u5728\u4E1A\u52A1\u7EC4\u4EF6\u5185\u4F7F\u7528\u7F51\u7EDC\u8BF7\u6C42\u52A8\u4F5C\u7684\u8BDD\uFF0C\u90A3\u4E48\u5C06\u670D\u52A1\u7AEFURL\u524D\u7F00\u3001\u5F02\u5E38\u5904\u7406\u3001Token \u5237\u65B0\u7B49\u64CD\u4F5C\u96C6\u4E2D\u5904\u7406\u662F\u5FC5\u4E0D\u53EF\u5C11\u7684\uFF0CNG-ALAIN \u811A\u624B\u67B6\u63D0\u4F9B\u4E00\u4E2A [net](https://github.com/ng-alain/ng-alain/tree/master/src/app/core/net) \u6587\u4EF6\u3002\u5B83\u4F1A\u5229\u7528\u4EE4\u724C \`HttpInterceptorFn\` \u8D77\u5230\u4E00\u79CD\u62E6\u622A\u5668\u7684\u6548\u679C\u3002

\u6709\u5173\u66F4\u591A\u7EC6\u8282\uFF0C\u8BF7\u53C2\u8003 [default.interceptor.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/net/default.interceptor.ts) \u6587\u4EF6\u3002

## IDE

\u201C\u5DE5\u6B32\u5584\u5176\u4E8B\uFF0C\u5FC5\u5148\u5229\u5176\u5668\u662F\u201D\uFF0CNG-ALAIN \u811A\u624B\u67B6\u63A8\u8350\u4F7F\u7528 [Visual Studio Code](https://code.visualstudio.com/) IDE\uFF0C\u56E0\u4E3A NG-ALAIN \u9488\u5BF9 VSCode \u589E\u52A0\u4E00\u4E9B\u989D\u5916\u7684\u7279\u6027\uFF0C\u53EF\u4EE5\u66F4\u597D\u7684\u5E2E\u52A9\u4F60\u5F00\u53D1\u3002

> \u6216\u8005\u76F4\u63A5\u4F7F\u7528 [NG-ALAIN Extension Pack](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-extension-pack) \u5957\u4EF6\u3002

### \u4EE3\u7801\u7247\u65AD

- [NG-ALAIN Snippets](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode)

### Class\u6837\u5F0F\u667A\u80FD\u63D0\u9192

ng-alain \u5185\u7F6E\u4E86\u5927\u91CF\u7684\u5DE5\u5177\u96C6\u6837\u5F0F\uFF08[API](/theme/tools)\uFF09\uFF0C\u5B89\u88C5\u4EE5\u4E0B\u63D2\u4EF6\u53EF\u4EE5\u76F4\u63A5\u5728HTML\u6A21\u677F\u91CC\u76F4\u63A5\u8BBF\u95EE\u5230\u5B83\u4EEC\u3002

- [NG-ALAIN Snippets](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode)`}}};codes=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=o({type:n,selectors:[["docs-how-to-start"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&i(0,"app-docs",0),e&2&&a("codes",t.codes)("item",t.item)},dependencies:[r],encapsulation:2})};var w=class n{item={name:"i18n",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:30,title:"I18n",description:"Angular internationalization provides a solution for extracting language files, but for NG-ALAIN, this is not the best way; this is mainly limited by ...",group:"Advance",path:"docs/i18n.en-US.md",url:"/docs/i18n/en"},text:`<p>Angular internationalization provides a solution for extracting language files, but for NG-ALAIN, this is not the best way; this is mainly limited by &#64;Delon/* The component library needs to provide a set of dynamic translation Service, therefore, NG-ALAIN has built-in a simple internationalized service <code>ALAIN_I18N_TOKEN</code> interface.</p>
<h2 id="how_to_configure"><a class="lake-link"><i data-anchor="how_to_configure"></i></a>How to configure</h2><p>Scaffolding is composed of two important parts: <code>ng-zorro-antd</code> and <code>&#64;delon/*</code>. These two libraries have their own international configuration. When internationalizing, they need to be the same for these libraries. Language configuration.</p>
<h3 id="angular"><a class="lake-link"><i data-anchor="angular"></i></a>Angular</h3><p>Angular configuration is mainly for currency, date format, etc., such as Chinese version:</p>
<pre><code class="language-ts">import &#123; registerLocaleData &#125; from &#39;&#64;angular/common&#39;;
import zh from &#39;&#64;angular/common/locales/zh&#39;;
registerLocaleData(zh);
</code></pre>
<h3 id="ng-zorro-antd"><a class="lake-link"><i data-anchor="ng-zorro-antd"></i></a>ng-zorro-antd</h3><p><code>ng-zorro-antd</code> internationalization defaults to the Chinese version, for example the default English version:</p>
<pre><code class="language-ts">import &#123; en_US, provideNzI18n &#125; from &#39;ng-zorro-antd/i18n&#39;;
export const appConfig: ApplicationConfig = &#123;
  providers: [provideNzI18n(en_US)]
&#125;;
</code></pre>
<p>Of course, you can also use runtime changes:</p>
<pre><code class="language-ts">import &#123; en_US, NzI18nService &#125; from &#39;ng-zorro-antd/i18n&#39;;
...
constructor(private nzI18nService:NzI18nService) &#123;
&#125;

switchLanguage() &#123;
  this.nzI18nService.setLocale(en_US);
&#125;
</code></pre>
<h3 id="delon"><a class="lake-link"><i data-anchor="delon"></i></a>&#64;delon</h3><p>&#64;delon internationalization defaults to Chinese version, for example the default is English version:</p>
<pre><code class="language-ts">import &#123; DELON_LOCALE, en_US &#125; from &#39;&#64;delon/theme&#39;;
&#64;NgModule(&#123;
  ...
  providers   : [ &#123; provide: DELON_LOCALE, useValue: en_US &#125; ]
&#125;)
export class AppModule &#123; &#125;
</code></pre>
<p>Of course, you can also use runtime changes:</p>
<pre><code class="language-ts">import &#123; en_US, DelonLocaleService &#125; from &#39;&#64;delon/theme&#39;;
...
private readonly i18n = inject(DelonLocaleService);

switchLanguage() &#123;
  this.delonLocaleService.setLocale(en_US);
&#125;
</code></pre>
<h2 id="alain_i18n_token"><a class="lake-link"><i data-anchor="alain_i18n_token"></i></a>ALAIN_I18N_TOKEN</h2><p><code>&#64;delon/*</code> class library has many data interface properties with the <em>i18n</em> typeface (for example: <code>page-header</code>, <code>st</code> column description, <code>Menu</code> menu data, etc.) when you want the data for these components. When the interface can dynamically switch automatically according to the Key value in the current language, you also need to define a self-implementation service interface for <code>ALAIN_I18N_TOKEN</code> (for example: <a href="https://github.com/ng-alain/ng-alain/blob" target="_blank" rel="noopener">I18NService</a> /master/src/app/core/i18n/i18n.service.ts)) and register under the <code>app.config.ts</code> file.</p>
<pre><code class="language-ts">import &#123; I18NService &#125; from &#39;&#64;core&#39;;

export const appConfig: ApplicationConfig = &#123;
  providers: [
    provideAlain(&#123; config: alainConfig, defaultLang, i18nClass: I18NService &#125;),
  ]
&#125;;
</code></pre>
<h3 id="i18n_pipe"><a class="lake-link"><i data-anchor="i18n_pipe"></i></a>i18n pipe</h3><p>In order not to be named by the third-party pipes, the scaffolding contains a <code>i18n</code> pipe, which is equivalent to calling the <code>fanAIN</code> method of <code>ALAIN_I18N_TOKEN</code> directly.</p>
<p><code>| i18n</code> will not listen to language change notifications, so there will be better performance. When you explicitly re-render the Angular project after switching languages, <code>| i18n</code> will be more suitable.</p>
<h2 id="how_to_add"><a class="lake-link"><i data-anchor="how_to_add"></i></a>How to add</h2><p>When creating scaffolding <a href="/cli/add">from command line</a> <code>ng add ng-alain</code>, it is allowed to specify <code>--i18n</code> to indicate whether the internationalized sample code is included.</p>
<h2 id="how_to_delete"><a class="lake-link"><i data-anchor="how_to_delete"></i></a>How to delete</h2><p>The sample code covers the following:</p>
<ul>
<li><code>src/app/core/i18n</code> directory</li>
<li>Replace the pipe of i18n that may appear in the default layout using <code>| i18n</code></li>
</ul>
<h2 id="default_language"><a class="lake-link"><i data-anchor="default_language"></i></a>Default language</h2><p>Regardless of whether internationalization is required or not, since the default languages \u200B\u200Bof class libraries such as <code>Angular</code>, <code>ng-zorro-antd</code>, <code>&#64;delon/*</code> are different, it is also necessary to ensure that the default language of these libraries is <strong>the same type</strong>. A simple example approach to understand the current language situation for each type of library:</p>
<pre><code class="language-ts">import &#123; Component &#125; from &#39;&#64;angular/core&#39;;

&#64;Component(&#123;
  selector: &#39;app-i18n-test&#39;,
  template: \`
  &lt;h2&gt;angular&lt;/h2&gt;
  &lt;p&gt;Date: &#123;&#123;now | date&#125;&#125;&lt;/p&gt;
  &lt;h2&gt;ng-zorro-antd&lt;/h2&gt;
  &lt;nz-transfer [nzDataSource]=&quot;[]&quot;&gt;&lt;/nz-transfer&gt;
  &lt;h2&gt;&#64;delon&lt;/h2&gt;
  &lt;div style=&quot;width: 200px&quot;&gt;
    &lt;tag-select&gt;
      &lt;nz-tag&gt;1&lt;/nz-tag&gt;
    &lt;/tag-select&gt;
  &lt;/div&gt;\`,
&#125;)
export class I18nTestComponent &#123;
  now = new Date();
&#125;
</code></pre>
<h3 id="example"><a class="lake-link"><i data-anchor="example"></i></a>Example</h3><p>In order to make language uniformity, NG-ALAIN provides a simple unified configuration in the <code>AppModule</code> root module.</p>
<h4 id="chinese_version"><a class="lake-link"><i data-anchor="chinese_version"></i></a>Chinese Version</h4><pre><code class="language-ts">import &#123; default as ngLang &#125; from &#39;&#64;angular/common/locales/zh&#39;;
import &#123; provideNzI18n, zh_CN as zorroLang &#125; from &#39;ng-zorro-antd/i18n&#39;;
import &#123; DELON_LOCALE, zh_CN as delonLang &#125; from &#39;&#64;delon/theme&#39;;
import &#123; zhCN as dateLang &#125; from &#39;date-fns/locale&#39;;
import &#123; I18NService &#125; from &#39;&#64;core&#39;;

const defaultLang: AlainProvideLang = &#123;
  abbr: &#39;zh&#39;,
  ng: ngLang,
  zorro: zorroLang,
  date: dateLang,
  delon: delonLang,
&#125;;

export const appConfig: ApplicationConfig = &#123;
  providers: [
    provideAlain(&#123; config: alainConfig, defaultLang, i18nClass: I18NService &#125;),
  ]
&#125;;
</code></pre>
<h4 id="english_version"><a class="lake-link"><i data-anchor="english_version"></i></a>English version</h4><pre><code class="language-ts">import &#123; default as ngLang &#125; from &#39;&#64;angular/common/locales/en&#39;;
import &#123; provideNzI18n, en_US as zorroLang &#125; from &#39;ng-zorro-antd/i18n&#39;;
import &#123; DELON_LOCALE, en_US as delonLang &#125; from &#39;&#64;delon/theme&#39;;
import &#123; en_US as dateLang &#125; from &#39;date-fns/locale&#39;;
const LANG = &#123;
  abbr: &#39;en&#39;,
  ng: ngLang,
  zorro: zorroLang,
  delon: delonLang,
&#125;;

const defaultLang: AlainProvideLang = &#123;
  abbr: &#39;en&#39;,
  ng: ngLang,
  zorro: zorroLang,
  date: dateLang,
  delon: delonLang,
&#125;;

export const appConfig: ApplicationConfig = &#123;
  providers: [
    provideAlain(&#123; config: alainConfig, defaultLang, i18nClass: I18NService &#125;),
  ]
&#125;;
</code></pre>
<h3 id="command_line"><a class="lake-link"><i data-anchor="command_line"></i></a>Command Line</h3><p>Use the <a href="/cli/plugin/zh#defaultLanguage">defaultLanguage</a> plugin to quickly switch between the default locales.</p>
<h2 id="internationalized_routing"><a class="lake-link"><i data-anchor="internationalized_routing"></i></a>Internationalized routing</h2><p>If you want to toggle internationalization by routed URLs, e.g. by accessing <code>/zh</code> and <code>/en</code> to change the language, just use the <code>alainI18nCanActivate</code> guard in the root route:</p>
<pre><code class="language-ts">const routes: Route[] = [
   &#123;
     path: &#39;&#39;,
     component: LayoutComponent,
     canActivateChild: [alainI18nCanActivate],
     children: [
       &#123; path: &#39;&#39;, redirectTo: &#39;en&#39;, pathMatch: &#39;full&#39; &#125;,
       &#123; path: &#39;:i18n&#39;, component: HomeComponent &#125;
     ]
   &#125;
];
</code></pre>
<blockquote>
<p>Where <code>:i18n</code> is a fixed value of the parameter, which can be adjusted by the <a href="/docs/global-config">Global Configuration</a> <code>paramNameOfUrlGuard</code>.</p>
</blockquote>
`,api:"",toc:[{id:"how_to_configure",title:"How to configure",children:[{id:"angular",title:"Angular"},{id:"ng-zorro-antd",title:"ng-zorro-antd"},{id:"delon",title:"@delon"}]},{id:"alain_i18n_token",title:"ALAIN_I18N_TOKEN",children:[{id:"i18n_pipe",title:"i18n pipe"}]},{id:"how_to_add",title:"How to add"},{id:"how_to_delete",title:"How to delete"},{id:"default_language",title:"Default language",children:[{id:"example",title:"Example"},{id:"command_line",title:"Command Line"}]},{id:"internationalized_routing",title:"Internationalized routing"}],raw:`---
order: 30
title:
  en-US: I18n
  zh-CN: \u56FD\u9645\u5316
type: Advance
---

Angular internationalization provides a solution for extracting language files, but for NG-ALAIN, this is not the best way; this is mainly limited by @Delon/* The component library needs to provide a set of dynamic translation Service, therefore, NG-ALAIN has built-in a simple internationalized service \`ALAIN_I18N_TOKEN\` interface.

## How to configure

Scaffolding is composed of two important parts: \`ng-zorro-antd\` and \`@delon/*\`. These two libraries have their own international configuration. When internationalizing, they need to be the same for these libraries. Language configuration.

### Angular

Angular configuration is mainly for currency, date format, etc., such as Chinese version:

\`\`\`ts
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
\`\`\`

### ng-zorro-antd

\`ng-zorro-antd\` internationalization defaults to the Chinese version, for example the default English version:

\`\`\`ts
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
export const appConfig: ApplicationConfig = {
  providers: [provideNzI18n(en_US)]
};
\`\`\`

Of course, you can also use runtime changes:

\`\`\`ts
import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';
...
constructor(private nzI18nService:NzI18nService) {
}

switchLanguage() {
  this.nzI18nService.setLocale(en_US);
}
\`\`\`

### @delon

@delon internationalization defaults to Chinese version, for example the default is English version:

\`\`\`ts
import { DELON_LOCALE, en_US } from '@delon/theme';
@NgModule({
  ...
  providers   : [ { provide: DELON_LOCALE, useValue: en_US } ]
})
export class AppModule { }
\`\`\`

Of course, you can also use runtime changes:

\`\`\`ts
import { en_US, DelonLocaleService } from '@delon/theme';
...
private readonly i18n = inject(DelonLocaleService);

switchLanguage() {
  this.delonLocaleService.setLocale(en_US);
}
\`\`\`

## ALAIN_I18N_TOKEN

\`@delon/*\` class library has many data interface properties with the _i18n_ typeface (for example: \`page-header\`, \`st\` column description, \`Menu\` menu data, etc.) when you want the data for these components. When the interface can dynamically switch automatically according to the Key value in the current language, you also need to define a self-implementation service interface for \`ALAIN_I18N_TOKEN\` (for example: [I18NService](https://github.com/ng-alain/ng-alain/blob) /master/src/app/core/i18n/i18n.service.ts)) and register under the \`app.config.ts\` file.

\`\`\`ts
import { I18NService } from '@core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAlain({ config: alainConfig, defaultLang, i18nClass: I18NService }),
  ]
};
\`\`\`

### i18n pipe

In order not to be named by the third-party pipes, the scaffolding contains a \`i18n\` pipe, which is equivalent to calling the \`fanAIN\` method of \`ALAIN_I18N_TOKEN\` directly.

\`| i18n\` will not listen to language change notifications, so there will be better performance. When you explicitly re-render the Angular project after switching languages, \`| i18n\` will be more suitable.

## How to add

When creating scaffolding [from command line](/cli/add) \`ng add ng-alain\`, it is allowed to specify \`--i18n\` to indicate whether the internationalized sample code is included.

## How to delete

The sample code covers the following:

- \`src/app/core/i18n\` directory
- Replace the pipe of i18n that may appear in the default layout using \`| i18n\`

## Default language

Regardless of whether internationalization is required or not, since the default languages \u200B\u200Bof class libraries such as \`Angular\`, \`ng-zorro-antd\`, \`@delon/*\` are different, it is also necessary to ensure that the default language of these libraries is **the same type**. A simple example approach to understand the current language situation for each type of library:

\`\`\`ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-i18n-test',
  template: \`
  <h2>angular</h2>
  <p>Date: {{now | date}}</p>
  <h2>ng-zorro-antd</h2>
  <nz-transfer [nzDataSource]="[]"></nz-transfer>
  <h2>@delon</h2>
  <div style="width: 200px">
    <tag-select>
      <nz-tag>1</nz-tag>
    </tag-select>
  </div>\`,
})
export class I18nTestComponent {
  now = new Date();
}
\`\`\`

### Example

In order to make language uniformity, NG-ALAIN provides a simple unified configuration in the \`AppModule\` root module.

#### Chinese Version

\`\`\`ts
import { default as ngLang } from '@angular/common/locales/zh';
import { provideNzI18n, zh_CN as zorroLang } from 'ng-zorro-antd/i18n';
import { DELON_LOCALE, zh_CN as delonLang } from '@delon/theme';
import { zhCN as dateLang } from 'date-fns/locale';
import { I18NService } from '@core';

const defaultLang: AlainProvideLang = {
  abbr: 'zh',
  ng: ngLang,
  zorro: zorroLang,
  date: dateLang,
  delon: delonLang,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideAlain({ config: alainConfig, defaultLang, i18nClass: I18NService }),
  ]
};
\`\`\`

#### English version

\`\`\`ts
import { default as ngLang } from '@angular/common/locales/en';
import { provideNzI18n, en_US as zorroLang } from 'ng-zorro-antd/i18n';
import { DELON_LOCALE, en_US as delonLang } from '@delon/theme';
import { en_US as dateLang } from 'date-fns/locale';
const LANG = {
  abbr: 'en',
  ng: ngLang,
  zorro: zorroLang,
  delon: delonLang,
};

const defaultLang: AlainProvideLang = {
  abbr: 'en',
  ng: ngLang,
  zorro: zorroLang,
  date: dateLang,
  delon: delonLang,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideAlain({ config: alainConfig, defaultLang, i18nClass: I18NService }),
  ]
};
\`\`\`

### Command Line

Use the [defaultLanguage](/cli/plugin/zh#defaultLanguage) plugin to quickly switch between the default locales.

## Internationalized routing

If you want to toggle internationalization by routed URLs, e.g. by accessing \`/zh\` and \`/en\` to change the language, just use the \`alainI18nCanActivate\` guard in the root route:

\`\`\`ts
const routes: Route[] = [
   {
     path: '',
     component: LayoutComponent,
     canActivateChild: [alainI18nCanActivate],
     children: [
       { path: '', redirectTo: 'en', pathMatch: 'full' },
       { path: ':i18n', component: HomeComponent }
     ]
   }
];
\`\`\`\`

> Where \`:i18n\` is a fixed value of the parameter, which can be adjusted by the [Global Configuration](/docs/global-config) \`paramNameOfUrlGuard\`.`},"zh-CN":{meta:{order:30,title:"\u56FD\u9645\u5316",description:"Angular \u56FD\u9645\u5316\u63D0\u4F9B\u4E00\u79CD\u53EF\u88AB\u63D0\u53D6\u8BED\u8A00\u6587\u4EF6\u7684\u65B9\u6848\uFF0C\u4F46\u5BF9\u4E8E NG-ALAIN \u800C\u8A00\uFF0C\u8FD9\u5E76\u4E0D\u662F\u6700\u597D\u7684\u65B9\u5F0F\uFF1B\u8FD9\u4E3B\u8981\u53D7\u9650\u4E8E @Delon/* \u7EC4\u4EF6\u5E93\u9700\u8981\u63D0\u4F9B\u4E00\u5957\u5E26\u6709\u52A8\u6001\u7FFB\u8BD1\u7684\u670D\u52A1\uFF0C\u56E0\u6B64\uFF0CNG-ALAIN \u5185\u7F6E\u4E00\u4E2A\u7B80\u6613\u7684\u56FD\u9645\u5316\u670D\u52A1 ALAIN_I18N_TOKEN \u63A5\u53E3\u3002\u811A\u624B\u67B6\u662F\u7531 ng-zorro-an...",group:"Advance",path:"docs/i18n.zh-CN.md",url:"/docs/i18n/zh"},text:`<p>Angular \u56FD\u9645\u5316\u63D0\u4F9B\u4E00\u79CD\u53EF\u88AB\u63D0\u53D6\u8BED\u8A00\u6587\u4EF6\u7684\u65B9\u6848\uFF0C\u4F46\u5BF9\u4E8E NG-ALAIN \u800C\u8A00\uFF0C\u8FD9\u5E76\u4E0D\u662F\u6700\u597D\u7684\u65B9\u5F0F\uFF1B\u8FD9\u4E3B\u8981\u53D7\u9650\u4E8E &#64;Delon/* \u7EC4\u4EF6\u5E93\u9700\u8981\u63D0\u4F9B\u4E00\u5957\u5E26\u6709\u52A8\u6001\u7FFB\u8BD1\u7684\u670D\u52A1\uFF0C\u56E0\u6B64\uFF0CNG-ALAIN \u5185\u7F6E\u4E00\u4E2A\u7B80\u6613\u7684\u56FD\u9645\u5316\u670D\u52A1 <code>ALAIN_I18N_TOKEN</code> \u63A5\u53E3\u3002</p>
<h2 id="\u5982\u4F55\u914D\u7F6E"><a class="lake-link"><i data-anchor="\u5982\u4F55\u914D\u7F6E"></i></a>\u5982\u4F55\u914D\u7F6E</h2><p>\u811A\u624B\u67B6\u662F\u7531 <code>ng-zorro-antd</code>\u3001<code>&#64;delon/*</code> \u7C7B\u5E93\u4E24\u4E2A\u91CD\u8981\u90E8\u5206\u7EC4\u4EF6\uFF0C\u800C\u8FD9\u4E24\u4E2A\u7C7B\u5E93\u6709\u81EA\u5DF1\u7684\u56FD\u9645\u5316\u914D\u7F6E\uFF0C\u5F53\u8FDB\u884C\u56FD\u9645\u5316\u65F6\u9700\u8981\u5BF9\u8FD9\u4E9B\u7C7B\u5E93\u8FDB\u884C\u76F8\u540C\u8BED\u8A00\u7684\u914D\u7F6E\u3002</p>
<h3 id="angular"><a class="lake-link"><i data-anchor="angular"></i></a>Angular</h3><p>Angular \u914D\u7F6E\u4E3B\u8981\u662F\u9488\u5BF9\u8D27\u5E01\u3001\u65E5\u671F\u683C\u5F0F\u7B49\uFF0C\u4F8B\u5982\u4E2D\u6587\u7248\u672C\uFF1A</p>
<pre><code class="language-ts">import &#123; registerLocaleData &#125; from &#39;&#64;angular/common&#39;;
import zh from &#39;&#64;angular/common/locales/zh&#39;;
registerLocaleData(zh);
</code></pre>
<h3 id="ng-zorro-antd"><a class="lake-link"><i data-anchor="ng-zorro-antd"></i></a>ng-zorro-antd</h3><p>NG-ZORRO \u56FD\u9645\u5316\u9ED8\u8BA4\u662F\u4E2D\u6587\u7248\uFF0C\u4F8B\u5982\u9ED8\u8BA4\u4E3A\u82F1\u6587\u7248\u672C\uFF1A</p>
<pre><code class="language-ts">import &#123; en_US, provideNzI18n &#125; from &#39;ng-zorro-antd/i18n&#39;;
export const appConfig: ApplicationConfig = &#123;
  providers: [provideNzI18n(en_US)]
&#125;;
</code></pre>
<p>\u5F53\u7136\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u8FD0\u884C\u65F6\u66F4\u6539\uFF1A</p>
<pre><code class="language-ts">import &#123; en_US, NzI18nService &#125; from &#39;ng-zorro-antd/i18n&#39;;
...
constructor(private nzI18nService:NzI18nService) &#123;
&#125;

switchLanguage() &#123;
  this.nzI18nService.setLocale(en_US);
&#125;
</code></pre>
<h3 id="delon"><a class="lake-link"><i data-anchor="delon"></i></a>&#64;delon</h3><p>&#64;delon \u56FD\u9645\u5316\u9ED8\u8BA4\u662F\u4E2D\u6587\u7248\uFF0C\u4F8B\u5982\u9ED8\u8BA4\u4E3A\u82F1\u6587\u7248\u672C\uFF1A</p>
<pre><code class="language-ts">import &#123; DELON_LOCALE, en_US &#125; from &#39;&#64;delon/theme&#39;;
&#64;NgModule(&#123;
  ...
  providers   : [ &#123; provide: DELON_LOCALE, useValue: en_US &#125; ]
&#125;)
export class AppModule &#123; &#125;
</code></pre>
<p>\u5F53\u7136\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u8FD0\u884C\u65F6\u66F4\u6539\uFF1A</p>
<pre><code class="language-ts">import &#123; en_US, DelonLocaleService &#125; from &#39;&#64;delon/theme&#39;;
...
private readonly i18n = inject(DelonLocaleService);

switchLanguage() &#123;
  this.delonLocaleService.setLocale(en_US);
&#125;
</code></pre>
<h2 id="alain_i18n_token"><a class="lake-link"><i data-anchor="alain_i18n_token"></i></a>ALAIN_I18N_TOKEN</h2><p><code>&#64;delon/*</code> \u7C7B\u5E93\u6709\u8BB8\u591A\u5E26\u6709 <em>i18n</em> \u5B57\u6837\u7684\u6570\u636E\u63A5\u53E3\u5C5E\u6027\uFF08\u4F8B\u5982\uFF1A<code>page-header</code>\u3001<code>st</code> \u5217\u63CF\u8FF0\u3001<code>Menu</code> \u83DC\u5355\u6570\u636E\u7B49\u7B49\uFF09\uFF0C\u5F53\u4F60\u5E0C\u671B\u8FD9\u4E9B\u7EC4\u4EF6\u7684\u6570\u636E\u63A5\u53E3\u80FD\u52A8\u6001\u6839\u636E Key \u503C\u6309\u5F53\u524D\u8BED\u8A00\u81EA\u52A8\u5207\u6362\u65F6\uFF0C\u4F60\u8FD8\u9700\u8981\u5BF9 <code>ALAIN_I18N_TOKEN</code> \u5B9A\u4E49\u4E00\u4E2A\u81EA\u5B9E\u73B0\u670D\u52A1\u63A5\u53E3\uFF08\u4F8B\u5982\uFF1A<a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/core/i18n/i18n.service.ts" target="_blank" rel="noopener">I18NService</a>\uFF09\uFF0C\u5E76\u5728 <code>app.config.ts</code> \u4E0B\u6CE8\u518C\u3002</p>
<pre><code class="language-ts">import &#123; I18NService &#125; from &#39;&#64;core&#39;;

export const appConfig: ApplicationConfig = &#123;
  providers: [
    provideAlain(&#123; config: alainConfig, defaultLang, i18nClass: I18NService &#125;),
  ]
&#125;;
</code></pre>
<h3 id="i18n\u7BA1\u9053"><a class="lake-link"><i data-anchor="i18n\u7BA1\u9053"></i></a>i18n\u7BA1\u9053</h3><p>\u4E3A\u4E86\u4E0D\u53D7\u7B2C\u4E09\u65B9\u5404\u81EA\u7BA1\u9053\u7684\u547D\u540D\u65B9\u5F0F\uFF0C\u811A\u624B\u67B6\u5305\u542B\u4E00\u4E2A <code>i18n</code> \u7684\u7BA1\u9053\uFF0C\u5B83\u76F8\u5F53\u4E8E\u76F4\u63A5\u8C03\u7528 <code>ALAIN_I18N_TOKEN</code> \u7684 <code>fanyi</code> \u65B9\u6CD5\u3002</p>
<p><code>| i18n</code> \u4E0D\u4F1A\u76D1\u542C\u8BED\u8A00\u53D8\u66F4\u901A\u77E5\u6240\u4EE5\u4F1A\u6709\u66F4\u597D\u7684\u6027\u80FD\uFF0C\u5F53\u4F60\u660E\u786E\u5728\u5207\u6362\u8BED\u8A00\u540E\u4F1A\u91CD\u65B0\u6E32\u67D3 Angular \u9879\u76EE\u65F6 <code>| i18n</code> \u4F1A\u66F4\u9002\u5408\u3002</p>
<h2 id="\u5982\u4F55\u6DFB\u52A0"><a class="lake-link"><i data-anchor="\u5982\u4F55\u6DFB\u52A0"></i></a>\u5982\u4F55\u6DFB\u52A0</h2><p>\u521B\u5EFA\u811A\u624B\u67B6<a href="/cli/add">\u547D\u4EE4\u884C</a> <code>ng add ng-alain</code> \u65F6\u5141\u8BB8\u6307\u5B9A <code>--i18n</code> \u8868\u793A\u662F\u5426\u5305\u542B\u56FD\u9645\u5316\u793A\u4F8B\u4EE3\u7801\u3002</p>
<h2 id="\u5982\u4F55\u5220\u9664"><a class="lake-link"><i data-anchor="\u5982\u4F55\u5220\u9664"></i></a>\u5982\u4F55\u5220\u9664</h2><p>\u793A\u4F8B\u4EE3\u7801\u6D89\u53CA\u5185\u5BB9\u5305\u62EC\uFF1A</p>
<ul>
<li><code>src/app/core/i18n</code> \u76EE\u5F55</li>
<li>\u66FF\u6362\u6389\u9ED8\u8BA4\u5E03\u5C40\u53EF\u80FD\u51FA\u73B0\u7684 I18n \u7684 Pipe \u4F7F\u7528 <code>| i18n</code></li>
</ul>
<h2 id="\u9ED8\u8BA4\u8BED\u8A00"><a class="lake-link"><i data-anchor="\u9ED8\u8BA4\u8BED\u8A00"></i></a>\u9ED8\u8BA4\u8BED\u8A00</h2><p>\u4E0D\u7BA1\u662F\u5426\u9700\u8981\u56FD\u9645\u5316\uFF0C\u7531\u4E8E <code>Angular</code>\u3001<code>ng-zorro-antd</code>\u3001<code>&#64;delon/*</code> \u7B49\u7C7B\u5E93\u7684\u9ED8\u8BA4\u8BED\u8A00\u90FD\u4E0D\u540C\uFF0C\u56E0\u6B64\u8FD8\u9700\u8981\u786E\u4FDD\u8FD9\u4E9B\u7C7B\u5E93\u7684\u9ED8\u8BA4\u8BED\u8A00\u662F<strong>\u540C\u4E00\u7C7B\u578B</strong>\u3002\u4E00\u4E2A\u7B80\u5355\u7684\u793A\u4F8B\u529E\u6CD5\u53EF\u4EE5\u4E86\u89E3\u5404\u7C7B\u5E93\u5F53\u524D\u8BED\u8A00\u60C5\u51B5\uFF1A</p>
<pre><code class="language-ts">import &#123; Component &#125; from &#39;&#64;angular/core&#39;;

&#64;Component(&#123;
  selector: &#39;app-i18n-test&#39;,
  template: \`
  &lt;h2&gt;angular&lt;/h2&gt;
  &lt;p&gt;Date: &#123;&#123;now | date&#125;&#125;&lt;/p&gt;
  &lt;h2&gt;ng-zorro-antd&lt;/h2&gt;
  &lt;nz-transfer [nzDataSource]=&quot;[]&quot;&gt;&lt;/nz-transfer&gt;
  &lt;h2&gt;&#64;delon&lt;/h2&gt;
  &lt;div style=&quot;width: 200px&quot;&gt;
    &lt;tag-select&gt;
      &lt;nz-tag&gt;1&lt;/nz-tag&gt;
    &lt;/tag-select&gt;
  &lt;/div&gt;\`,
&#125;)
export class I18nTestComponent &#123;
  now = new Date();
&#125;
</code></pre>
<h3 id="\u793A\u4F8B"><a class="lake-link"><i data-anchor="\u793A\u4F8B"></i></a>\u793A\u4F8B</h3><p>\u4E3A\u4E86\u4F7F\u8BED\u8A00\u7EDF\u4E00\u6027\uFF0CNG-ALAIN \u63D0\u4F9B\u4E00\u4E2A\u5728 <code>AppModule</code> \u6839\u6A21\u5757\u91CC\u7B80\u5355\u7684\u7EDF\u4E00\u914D\u7F6E\u65B9\u5F0F\u3002</p>
<h4 id="\u4E2D\u6587\u7248"><a class="lake-link"><i data-anchor="\u4E2D\u6587\u7248"></i></a>\u4E2D\u6587\u7248</h4><pre><code class="language-ts">import &#123; default as ngLang &#125; from &#39;&#64;angular/common/locales/zh&#39;;
import &#123; provideNzI18n, zh_CN as zorroLang &#125; from &#39;ng-zorro-antd/i18n&#39;;
import &#123; DELON_LOCALE, zh_CN as delonLang &#125; from &#39;&#64;delon/theme&#39;;
import &#123; zhCN as dateLang &#125; from &#39;date-fns/locale&#39;;
import &#123; I18NService &#125; from &#39;&#64;core&#39;;

const defaultLang: AlainProvideLang = &#123;
  abbr: &#39;zh&#39;,
  ng: ngLang,
  zorro: zorroLang,
  date: dateLang,
  delon: delonLang,
&#125;;

export const appConfig: ApplicationConfig = &#123;
  providers: [
    provideAlain(&#123; config: alainConfig, defaultLang, i18nClass: I18NService &#125;),
  ]
&#125;;
</code></pre>
<h4 id="\u82F1\u6587\u7248"><a class="lake-link"><i data-anchor="\u82F1\u6587\u7248"></i></a>\u82F1\u6587\u7248</h4><pre><code class="language-ts">import &#123; default as ngLang &#125; from &#39;&#64;angular/common/locales/en&#39;;
import &#123; provideNzI18n, en_US as zorroLang &#125; from &#39;ng-zorro-antd/i18n&#39;;
import &#123; DELON_LOCALE, en_US as delonLang &#125; from &#39;&#64;delon/theme&#39;;
import &#123; en_US as dateLang &#125; from &#39;date-fns/locale&#39;;
const LANG = &#123;
  abbr: &#39;en&#39;,
  ng: ngLang,
  zorro: zorroLang,
  delon: delonLang,
&#125;;

const defaultLang: AlainProvideLang = &#123;
  abbr: &#39;en&#39;,
  ng: ngLang,
  zorro: zorroLang,
  date: dateLang,
  delon: delonLang,
&#125;;

export const appConfig: ApplicationConfig = &#123;
  providers: [
    provideAlain(&#123; config: alainConfig, defaultLang, i18nClass: I18NService &#125;),
  ]
&#125;;
</code></pre>
<h3 id="\u547D\u4EE4\u884C"><a class="lake-link"><i data-anchor="\u547D\u4EE4\u884C"></i></a>\u547D\u4EE4\u884C</h3><p>\u4F7F\u7528 <a href="/cli/plugin/zh#defaultLanguage">defaultLanguage</a> \u63D2\u4EF6\u53EF\u4EE5\u5FEB\u901F\u5207\u6362\u9ED8\u8BA4\u8BED\u8A00\u73AF\u5883\u3002</p>
<h2 id="\u56FD\u9645\u5316\u8DEF\u7531"><a class="lake-link"><i data-anchor="\u56FD\u9645\u5316\u8DEF\u7531"></i></a>\u56FD\u9645\u5316\u8DEF\u7531</h2><p>\u82E5\u60F3\u901A\u8FC7\u8DEF\u7531\u7684URL\u6765\u5207\u6362\u56FD\u9645\u5316\uFF0C\u4F8B\u5982\uFF1A\u901A\u8FC7\u8BBF\u95EE <code>/zh</code> \u548C <code>/en</code> \u6765\u53D8\u66F4\u8BED\u8A00\uFF0C\u5219\u53EA\u9700\u8981\u5728\u6839\u8DEF\u7531\u4E2D\u4F7F\u7528 <code>alainI18nCanActivate</code> \u5B88\u536B\uFF1A</p>
<pre><code class="language-ts">const routes: Route[] = [
  &#123;
    path: &#39;&#39;,
    component: LayoutComponent,
    canActivateChild: [alainI18nCanActivate],
    children: [
      &#123; path: &#39;&#39;, redirectTo: &#39;en&#39;, pathMatch: &#39;full&#39; &#125;,
      &#123; path: &#39;:i18n&#39;, component: HomeComponent &#125;
    ]
  &#125;
];
</code></pre>
<blockquote>
<p>\u5176\u4E2D <code>:i18n</code> \u662F\u53C2\u6570\u56FA\u5B9A\u503C\uFF0C\u53EF\u4EE5\u901A\u8FC7<a href="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a> <code>paramNameOfUrlGuard</code> \u6765\u8C03\u6574\u3002</p>
</blockquote>
`,api:"",toc:[{id:"\u5982\u4F55\u914D\u7F6E",title:"\u5982\u4F55\u914D\u7F6E",children:[{id:"angular",title:"Angular"},{id:"ng-zorro-antd",title:"ng-zorro-antd"},{id:"delon",title:"@delon"}]},{id:"alain_i18n_token",title:"ALAIN_I18N_TOKEN",children:[{id:"i18n\u7BA1\u9053",title:"i18n\u7BA1\u9053"}]},{id:"\u5982\u4F55\u6DFB\u52A0",title:"\u5982\u4F55\u6DFB\u52A0"},{id:"\u5982\u4F55\u5220\u9664",title:"\u5982\u4F55\u5220\u9664"},{id:"\u9ED8\u8BA4\u8BED\u8A00",title:"\u9ED8\u8BA4\u8BED\u8A00",children:[{id:"\u793A\u4F8B",title:"\u793A\u4F8B"},{id:"\u547D\u4EE4\u884C",title:"\u547D\u4EE4\u884C"}]},{id:"\u56FD\u9645\u5316\u8DEF\u7531",title:"\u56FD\u9645\u5316\u8DEF\u7531"}],raw:`---
order: 30
title:
  en-US: I18n
  zh-CN: \u56FD\u9645\u5316
type: Advance
---

Angular \u56FD\u9645\u5316\u63D0\u4F9B\u4E00\u79CD\u53EF\u88AB\u63D0\u53D6\u8BED\u8A00\u6587\u4EF6\u7684\u65B9\u6848\uFF0C\u4F46\u5BF9\u4E8E NG-ALAIN \u800C\u8A00\uFF0C\u8FD9\u5E76\u4E0D\u662F\u6700\u597D\u7684\u65B9\u5F0F\uFF1B\u8FD9\u4E3B\u8981\u53D7\u9650\u4E8E @Delon/* \u7EC4\u4EF6\u5E93\u9700\u8981\u63D0\u4F9B\u4E00\u5957\u5E26\u6709\u52A8\u6001\u7FFB\u8BD1\u7684\u670D\u52A1\uFF0C\u56E0\u6B64\uFF0CNG-ALAIN \u5185\u7F6E\u4E00\u4E2A\u7B80\u6613\u7684\u56FD\u9645\u5316\u670D\u52A1 \`ALAIN_I18N_TOKEN\` \u63A5\u53E3\u3002

## \u5982\u4F55\u914D\u7F6E

\u811A\u624B\u67B6\u662F\u7531 \`ng-zorro-antd\`\u3001\`@delon/*\` \u7C7B\u5E93\u4E24\u4E2A\u91CD\u8981\u90E8\u5206\u7EC4\u4EF6\uFF0C\u800C\u8FD9\u4E24\u4E2A\u7C7B\u5E93\u6709\u81EA\u5DF1\u7684\u56FD\u9645\u5316\u914D\u7F6E\uFF0C\u5F53\u8FDB\u884C\u56FD\u9645\u5316\u65F6\u9700\u8981\u5BF9\u8FD9\u4E9B\u7C7B\u5E93\u8FDB\u884C\u76F8\u540C\u8BED\u8A00\u7684\u914D\u7F6E\u3002

### Angular

Angular \u914D\u7F6E\u4E3B\u8981\u662F\u9488\u5BF9\u8D27\u5E01\u3001\u65E5\u671F\u683C\u5F0F\u7B49\uFF0C\u4F8B\u5982\u4E2D\u6587\u7248\u672C\uFF1A

\`\`\`ts
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
\`\`\`

### ng-zorro-antd

NG-ZORRO \u56FD\u9645\u5316\u9ED8\u8BA4\u662F\u4E2D\u6587\u7248\uFF0C\u4F8B\u5982\u9ED8\u8BA4\u4E3A\u82F1\u6587\u7248\u672C\uFF1A

\`\`\`ts
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
export const appConfig: ApplicationConfig = {
  providers: [provideNzI18n(en_US)]
};
\`\`\`

\u5F53\u7136\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u8FD0\u884C\u65F6\u66F4\u6539\uFF1A

\`\`\`ts
import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';
...
constructor(private nzI18nService:NzI18nService) {
}

switchLanguage() {
  this.nzI18nService.setLocale(en_US);
}
\`\`\`

### @delon

@delon \u56FD\u9645\u5316\u9ED8\u8BA4\u662F\u4E2D\u6587\u7248\uFF0C\u4F8B\u5982\u9ED8\u8BA4\u4E3A\u82F1\u6587\u7248\u672C\uFF1A

\`\`\`ts
import { DELON_LOCALE, en_US } from '@delon/theme';
@NgModule({
  ...
  providers   : [ { provide: DELON_LOCALE, useValue: en_US } ]
})
export class AppModule { }
\`\`\`

\u5F53\u7136\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u8FD0\u884C\u65F6\u66F4\u6539\uFF1A

\`\`\`ts
import { en_US, DelonLocaleService } from '@delon/theme';
...
private readonly i18n = inject(DelonLocaleService);

switchLanguage() {
  this.delonLocaleService.setLocale(en_US);
}
\`\`\`

## ALAIN_I18N_TOKEN

\`@delon/*\` \u7C7B\u5E93\u6709\u8BB8\u591A\u5E26\u6709 _i18n_ \u5B57\u6837\u7684\u6570\u636E\u63A5\u53E3\u5C5E\u6027\uFF08\u4F8B\u5982\uFF1A\`page-header\`\u3001\`st\` \u5217\u63CF\u8FF0\u3001\`Menu\` \u83DC\u5355\u6570\u636E\u7B49\u7B49\uFF09\uFF0C\u5F53\u4F60\u5E0C\u671B\u8FD9\u4E9B\u7EC4\u4EF6\u7684\u6570\u636E\u63A5\u53E3\u80FD\u52A8\u6001\u6839\u636E Key \u503C\u6309\u5F53\u524D\u8BED\u8A00\u81EA\u52A8\u5207\u6362\u65F6\uFF0C\u4F60\u8FD8\u9700\u8981\u5BF9 \`ALAIN_I18N_TOKEN\` \u5B9A\u4E49\u4E00\u4E2A\u81EA\u5B9E\u73B0\u670D\u52A1\u63A5\u53E3\uFF08\u4F8B\u5982\uFF1A[I18NService](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/i18n/i18n.service.ts)\uFF09\uFF0C\u5E76\u5728 \`app.config.ts\` \u4E0B\u6CE8\u518C\u3002

\`\`\`ts
import { I18NService } from '@core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAlain({ config: alainConfig, defaultLang, i18nClass: I18NService }),
  ]
};
\`\`\`

### i18n\u7BA1\u9053

\u4E3A\u4E86\u4E0D\u53D7\u7B2C\u4E09\u65B9\u5404\u81EA\u7BA1\u9053\u7684\u547D\u540D\u65B9\u5F0F\uFF0C\u811A\u624B\u67B6\u5305\u542B\u4E00\u4E2A \`i18n\` \u7684\u7BA1\u9053\uFF0C\u5B83\u76F8\u5F53\u4E8E\u76F4\u63A5\u8C03\u7528 \`ALAIN_I18N_TOKEN\` \u7684 \`fanyi\` \u65B9\u6CD5\u3002

\`| i18n\` \u4E0D\u4F1A\u76D1\u542C\u8BED\u8A00\u53D8\u66F4\u901A\u77E5\u6240\u4EE5\u4F1A\u6709\u66F4\u597D\u7684\u6027\u80FD\uFF0C\u5F53\u4F60\u660E\u786E\u5728\u5207\u6362\u8BED\u8A00\u540E\u4F1A\u91CD\u65B0\u6E32\u67D3 Angular \u9879\u76EE\u65F6 \`| i18n\` \u4F1A\u66F4\u9002\u5408\u3002

## \u5982\u4F55\u6DFB\u52A0

\u521B\u5EFA\u811A\u624B\u67B6[\u547D\u4EE4\u884C](/cli/add) \`ng add ng-alain\` \u65F6\u5141\u8BB8\u6307\u5B9A \`--i18n\` \u8868\u793A\u662F\u5426\u5305\u542B\u56FD\u9645\u5316\u793A\u4F8B\u4EE3\u7801\u3002

## \u5982\u4F55\u5220\u9664

\u793A\u4F8B\u4EE3\u7801\u6D89\u53CA\u5185\u5BB9\u5305\u62EC\uFF1A

- \`src/app/core/i18n\` \u76EE\u5F55
- \u66FF\u6362\u6389\u9ED8\u8BA4\u5E03\u5C40\u53EF\u80FD\u51FA\u73B0\u7684 I18n \u7684 Pipe \u4F7F\u7528 \`| i18n\`

## \u9ED8\u8BA4\u8BED\u8A00

\u4E0D\u7BA1\u662F\u5426\u9700\u8981\u56FD\u9645\u5316\uFF0C\u7531\u4E8E \`Angular\`\u3001\`ng-zorro-antd\`\u3001\`@delon/*\` \u7B49\u7C7B\u5E93\u7684\u9ED8\u8BA4\u8BED\u8A00\u90FD\u4E0D\u540C\uFF0C\u56E0\u6B64\u8FD8\u9700\u8981\u786E\u4FDD\u8FD9\u4E9B\u7C7B\u5E93\u7684\u9ED8\u8BA4\u8BED\u8A00\u662F**\u540C\u4E00\u7C7B\u578B**\u3002\u4E00\u4E2A\u7B80\u5355\u7684\u793A\u4F8B\u529E\u6CD5\u53EF\u4EE5\u4E86\u89E3\u5404\u7C7B\u5E93\u5F53\u524D\u8BED\u8A00\u60C5\u51B5\uFF1A

\`\`\`ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-i18n-test',
  template: \`
  <h2>angular</h2>
  <p>Date: {{now | date}}</p>
  <h2>ng-zorro-antd</h2>
  <nz-transfer [nzDataSource]="[]"></nz-transfer>
  <h2>@delon</h2>
  <div style="width: 200px">
    <tag-select>
      <nz-tag>1</nz-tag>
    </tag-select>
  </div>\`,
})
export class I18nTestComponent {
  now = new Date();
}
\`\`\`

### \u793A\u4F8B

\u4E3A\u4E86\u4F7F\u8BED\u8A00\u7EDF\u4E00\u6027\uFF0CNG-ALAIN \u63D0\u4F9B\u4E00\u4E2A\u5728 \`AppModule\` \u6839\u6A21\u5757\u91CC\u7B80\u5355\u7684\u7EDF\u4E00\u914D\u7F6E\u65B9\u5F0F\u3002

#### \u4E2D\u6587\u7248

\`\`\`ts
import { default as ngLang } from '@angular/common/locales/zh';
import { provideNzI18n, zh_CN as zorroLang } from 'ng-zorro-antd/i18n';
import { DELON_LOCALE, zh_CN as delonLang } from '@delon/theme';
import { zhCN as dateLang } from 'date-fns/locale';
import { I18NService } from '@core';

const defaultLang: AlainProvideLang = {
  abbr: 'zh',
  ng: ngLang,
  zorro: zorroLang,
  date: dateLang,
  delon: delonLang,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideAlain({ config: alainConfig, defaultLang, i18nClass: I18NService }),
  ]
};
\`\`\`

#### \u82F1\u6587\u7248

\`\`\`ts
import { default as ngLang } from '@angular/common/locales/en';
import { provideNzI18n, en_US as zorroLang } from 'ng-zorro-antd/i18n';
import { DELON_LOCALE, en_US as delonLang } from '@delon/theme';
import { en_US as dateLang } from 'date-fns/locale';
const LANG = {
  abbr: 'en',
  ng: ngLang,
  zorro: zorroLang,
  delon: delonLang,
};

const defaultLang: AlainProvideLang = {
  abbr: 'en',
  ng: ngLang,
  zorro: zorroLang,
  date: dateLang,
  delon: delonLang,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideAlain({ config: alainConfig, defaultLang, i18nClass: I18NService }),
  ]
};
\`\`\`

### \u547D\u4EE4\u884C

\u4F7F\u7528 [defaultLanguage](/cli/plugin/zh#defaultLanguage) \u63D2\u4EF6\u53EF\u4EE5\u5FEB\u901F\u5207\u6362\u9ED8\u8BA4\u8BED\u8A00\u73AF\u5883\u3002

## \u56FD\u9645\u5316\u8DEF\u7531

\u82E5\u60F3\u901A\u8FC7\u8DEF\u7531\u7684URL\u6765\u5207\u6362\u56FD\u9645\u5316\uFF0C\u4F8B\u5982\uFF1A\u901A\u8FC7\u8BBF\u95EE \`/zh\` \u548C \`/en\` \u6765\u53D8\u66F4\u8BED\u8A00\uFF0C\u5219\u53EA\u9700\u8981\u5728\u6839\u8DEF\u7531\u4E2D\u4F7F\u7528 \`alainI18nCanActivate\` \u5B88\u536B\uFF1A

\`\`\`ts
const routes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    canActivateChild: [alainI18nCanActivate],
    children: [
      { path: '', redirectTo: 'en', pathMatch: 'full' },
      { path: ':i18n', component: HomeComponent }
    ]
  }
];
\`\`\`

> \u5176\u4E2D \`:i18n\` \u662F\u53C2\u6570\u56FA\u5B9A\u503C\uFF0C\u53EF\u4EE5\u901A\u8FC7[\u5168\u5C40\u914D\u7F6E](/docs/global-config) \`paramNameOfUrlGuard\` \u6765\u8C03\u6574\u3002`}}};codes=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=o({type:n,selectors:[["docs-i18n"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&i(0,"app-docs",0),e&2&&a("codes",t.codes)("item",t.item)},dependencies:[r],encapsulation:2})};var N=class n{item={name:"import",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:60,title:"Use a third-party lib",description:"In addition to the NG-ALAIN base component and the @delon business component, sometimes we need to reference other external class libraries, the follo...",group:"Dev",path:"docs/import.en-US.md",url:"/docs/import/en"},text:`<p>In addition to the NG-ALAIN base component and the &#64;delon business component, sometimes we need to reference other external class libraries, the following is how to use the rich text component <a href="https://github.com/cipchk/ngx-tinymce" target="_blank" rel="noopener">ngx-tinymce</a>:</p>
<h2 id="angular_component"><a class="lake-link"><i data-anchor="angular_component"></i></a>Angular Component</h2><h3 id="installing_dependencies"><a class="lake-link"><i data-anchor="installing_dependencies"></i></a>Installing dependencies</h3><pre><code class="language-bash">npm i -S ngx-tinymce
</code></pre>
<h3 id="import_module"><a class="lake-link"><i data-anchor="import_module"></i></a>Import module</h3><p>You may need to use rich editor in all submodules, as it&#39;s recommended to import and export them in the <code>SharedModule</code> module.</p>
<pre><code class="language-ts">// #region third libs
import &#123; NgxTinymceModule &#125; from &#39;ngx-tinymce&#39;;
const THIRDMODULES = [ NgxTinymceModule ];
// #endregion
</code></pre>
<blockquote>
<p>The <code>region: third libs</code> region is a coding convention for NG-ALAIN, register all third-party components into the <code>THIRDMODULES</code> variable, for more coding conventions, refer to <a href="/docs/style-guide">Style Guide</a>.</p>
</blockquote>
<p>For some third-party components, may be required global configuration. It&#39;s recommended to register in the root module, for example:</p>
<pre><code class="language-ts">import &#123; NgxTinymceModule &#125; from &#39;ngx-tinymce&#39;;
&#64;NgModule(&#123;
  imports: [
    BrowserModule,
    NgxTinymceModule.forRoot(&#123;
      baseURL: &#39;//cdn.bootcss.com/tinymce/4.7.13/&#39;
    &#125;)
  ]
&#125;)
export class AppModule &#123; &#125;
</code></pre>
<p>Next you can use <code>ngx-tinymce</code> in any submodule:</p>
<pre><code class="language-html">&lt;tinymce [(ngModel)]=&quot;html&quot;&gt;&lt;/tinymce&gt;
</code></pre>
<h2 id="non-angular_component"><a class="lake-link"><i data-anchor="non-angular_component"></i></a>Non-Angular Component</h2><p>Referencing a non-Angular component is actually loading a JavaScript class library file, such as the QR code library <a href="https://github.com/neocotic/qrious/" target="_blank" rel="noopener">qrious</a>:</p>
<h3 id="installing_dependencies"><a class="lake-link"><i data-anchor="installing_dependencies"></i></a>Installing dependencies</h3><pre><code class="language-bash">npm i -S qrious
</code></pre>
<h3 id="import_scripts"><a class="lake-link"><i data-anchor="import_scripts"></i></a>Import Scripts</h3><p>Add <code>qrious.min.js</code> to the <code>scripts</code> node in <code>angular.json</code>:</p>
<pre><code class="language-json">&quot;scripts&quot;: [
  &quot;node_modules/qrious/dist/qrious.min.js&quot;
]
</code></pre>
<p>If the third-party library requires additional styles, you also need to add a path to <code>styles</code>.</p>
<blockquote>
<p>Note: You need to re-run <code>ng s</code>.</p>
</blockquote>
<p><strong>Lazy loading script</strong></p>
<p>The above import script method will package the code directly into <code>scripts.js</code>, which will cause the <code>scripts.js</code> to become larger. NG-ALAIN provides another delayed loading CDN library script solution for low-usage services. (Example: <a href="https://cdn.bootcss.com/jszip/3.1.5/jszip.min.js" target="_blank" rel="noopener">zip</a> compression), you can use <a href="/util/lazy">LazyService</a> to delay loading remote CDN scripts.</p>
<h3 id="how_to_use"><a class="lake-link"><i data-anchor="how_to_use"></i></a>How to use</h3><p>Angular is using TypeScript language, and all types must be clearly defined to be used. For details, please refer to <a href="https://zhuanlan.zhihu.com/p/35796451" target="_blank" rel="noopener">Angular How to use third-party libraries</a>.</p>
<p>A sample code for the call:</p>
<pre><code class="language-ts">declare var QRious: any;

&#64;Component()
export class DEMOComponent &#123;
  constructor() &#123;
    const qr = new QRious();
  &#125;
&#125;
</code></pre>
`,api:"",toc:[{id:"angular_component",title:"Angular Component",children:[{id:"installing_dependencies",title:"Installing dependencies"},{id:"import_module",title:"Import module"}]},{id:"non-angular_component",title:"Non-Angular Component",children:[{id:"installing_dependencies",title:"Installing dependencies"},{id:"import_scripts",title:"Import Scripts"},{id:"how_to_use",title:"How to use"}]}],raw:`---
order: 60
title: Use a third-party lib
type: Dev
---

In addition to the NG-ALAIN base component and the @delon business component, sometimes we need to reference other external class libraries, the following is how to use the rich text component [ngx-tinymce](https://github.com/cipchk/ngx-tinymce):

## Angular Component

### Installing dependencies

\`\`\`bash
npm i -S ngx-tinymce
\`\`\`

### Import module

You may need to use rich editor in all submodules, as it's recommended to import and export them in the \`SharedModule\` module.

\`\`\`ts
// #region third libs
import { NgxTinymceModule } from 'ngx-tinymce';
const THIRDMODULES = [ NgxTinymceModule ];
// #endregion
\`\`\`

> The \`region: third libs\` region is a coding convention for NG-ALAIN, register all third-party components into the \`THIRDMODULES\` variable, for more coding conventions, refer to [Style Guide](/docs/style-guide).

For some third-party components, may be required global configuration. It's recommended to register in the root module, for example:

\`\`\`ts
import { NgxTinymceModule } from 'ngx-tinymce';
@NgModule({
  imports: [
    BrowserModule,
    NgxTinymceModule.forRoot({
      baseURL: '//cdn.bootcss.com/tinymce/4.7.13/'
    })
  ]
})
export class AppModule { }
\`\`\`

Next you can use \`ngx-tinymce\` in any submodule:

\`\`\`html
<tinymce [(ngModel)]="html"></tinymce>
\`\`\`

## Non-Angular Component

Referencing a non-Angular component is actually loading a JavaScript class library file, such as the QR code library [qrious](https://github.com/neocotic/qrious/):

### Installing dependencies

\`\`\`bash
npm i -S qrious
\`\`\`

### Import Scripts

Add \`qrious.min.js\` to the \`scripts\` node in \`angular.json\`:

\`\`\`json
"scripts": [
  "node_modules/qrious/dist/qrious.min.js"
]
\`\`\`

If the third-party library requires additional styles, you also need to add a path to \`styles\`.

> Note: You need to re-run \`ng s\`.

**Lazy loading script**

The above import script method will package the code directly into \`scripts.js\`, which will cause the \`scripts.js\` to become larger. NG-ALAIN provides another delayed loading CDN library script solution for low-usage services. (Example: [zip](https://cdn.bootcss.com/jszip/3.1.5/jszip.min.js) compression), you can use [LazyService](/util/lazy) to delay loading remote CDN scripts.

### How to use

Angular is using TypeScript language, and all types must be clearly defined to be used. For details, please refer to [Angular How to use third-party libraries](https://zhuanlan.zhihu.com/p/35796451).

A sample code for the call:

\`\`\`ts
declare var QRious: any;

@Component()
export class DEMOComponent {
  constructor() {
    const qr = new QRious();
  }
}
\`\`\``},"zh-CN":{meta:{order:60,title:"\u4F7F\u7528\u7B2C\u4E09\u65B9\u7C7B\u5E93",description:"\u9664\u4E86 NG-ZORRO \u57FA\u7840\u7EC4\u4EF6\u4EE5\u53CA @delon \u4E1A\u52A1\u7EC4\u4EF6\u4EE5\u5916\uFF0C\u6709\u65F6\u6211\u4EEC\u8FD8\u9700\u8981\u5F15\u7528\u5176\u4ED6\u5916\u90E8\u7C7B\u5E93\uFF0C\u4EE5\u4E0B\u5C06\u4ECB\u7ECD\u5982\u4F55\u4F7F\u7528\u5BCC\u6587\u672C\u7EC4\u4EF6 ngx-tinymce\uFF1A\u50CF\u5BCC\u6587\u672C\u6846\u4F60\u53EF\u80FD\u9700\u8981\u5728\u6240\u6709\u5B50\u6A21\u5757\u4E2D\u90FD\u4F1A\u53EF\u80FD\u4F1A\u7528\u5230\uFF0C\u56E0\u4E3A\u5EFA\u8BAE\u5728 SharedModule \u6A21\u5757\u4E2D\u5BFC\u5165\u548C\u5BFC\u51FA\u4ED6\u3002region: third libs \u533A...",group:"Dev",path:"docs/import.zh-CN.md",url:"/docs/import/zh"},text:`<p>\u9664\u4E86 NG-ZORRO \u57FA\u7840\u7EC4\u4EF6\u4EE5\u53CA &#64;delon \u4E1A\u52A1\u7EC4\u4EF6\u4EE5\u5916\uFF0C\u6709\u65F6\u6211\u4EEC\u8FD8\u9700\u8981\u5F15\u7528\u5176\u4ED6\u5916\u90E8\u7C7B\u5E93\uFF0C\u4EE5\u4E0B\u5C06\u4ECB\u7ECD\u5982\u4F55\u4F7F\u7528\u5BCC\u6587\u672C\u7EC4\u4EF6 <a href="https://github.com/cipchk/ngx-tinymce" target="_blank" rel="noopener">ngx-tinymce</a>\uFF1A</p>
<h2 id="angular\u7EC4\u4EF6"><a class="lake-link"><i data-anchor="angular\u7EC4\u4EF6"></i></a>Angular\u7EC4\u4EF6</h2><h3 id="\u5B89\u88C5\u4F9D\u8D56\u5305"><a class="lake-link"><i data-anchor="\u5B89\u88C5\u4F9D\u8D56\u5305"></i></a>\u5B89\u88C5\u4F9D\u8D56\u5305</h3><pre><code class="language-bash">npm i -S ngx-tinymce
</code></pre>
<h3 id="\u6CE8\u518C"><a class="lake-link"><i data-anchor="\u6CE8\u518C"></i></a>\u6CE8\u518C</h3><p>\u50CF\u5BCC\u6587\u672C\u6846\u4F60\u53EF\u80FD\u9700\u8981\u5728\u6240\u6709\u5B50\u6A21\u5757\u4E2D\u90FD\u4F1A\u53EF\u80FD\u4F1A\u7528\u5230\uFF0C\u56E0\u4E3A\u5EFA\u8BAE\u5728 <code>SharedModule</code> \u6A21\u5757\u4E2D\u5BFC\u5165\u548C\u5BFC\u51FA\u4ED6\u3002</p>
<pre><code class="language-ts">// #region third libs
import &#123; NgxTinymceModule &#125; from &#39;ngx-tinymce&#39;;
const THIRDMODULES = [ NgxTinymceModule ];
// #endregion
</code></pre>
<blockquote>
<p><code>region: third libs</code> \u533A\u57DF\u662FNG-ALAIN\u7684\u4E00\u4E2A\u7F16\u7801\u7EA6\u5B9A\uFF0C\u5C06\u6240\u6709\u7B2C\u4E09\u65B9\u7EC4\u4EF6\u6CE8\u518C\u81F3 <code>THIRDMODULES</code> \u53D8\u91CF\u4E2D\u5373\u53EF\uFF0C\u800C\u65E0\u987B\u5173\u5FC3 <code>&#64;NgModule</code> \u5185\u5728\u7684\u5199\u6CD5\uFF0C\u6709\u5173\u66F4\u591A\u7F16\u7801\u7EA6\u5B9A\u53EF\u4EE5\u53C2\u8003<a href="/docs/style-guide">\u7F16\u7801\u89C4\u8303\u5EFA\u8BAE</a>\u3002</p>
</blockquote>
<p>\u5BF9\u4E8E\u90E8\u5206\u7B2C\u4E09\u65B9\u7EC4\u4EF6\uFF0C\u53EF\u80FD\u4F1A\u9700\u8981\u4E00\u4E9B\u914D\u7F6E\u9879\uFF0C\u5EFA\u8BAE\u5728\u6839\u6A21\u5757\u4E2D\u6CE8\u518C\uFF0C\u4F8B\u5982\uFF1A</p>
<pre><code class="language-ts">import &#123; NgxTinymceModule &#125; from &#39;ngx-tinymce&#39;;
&#64;NgModule(&#123;
  imports: [
    BrowserModule,
    NgxTinymceModule.forRoot(&#123;
      baseURL: &#39;//cdn.bootcss.com/tinymce/4.7.13/&#39;
    &#125;)
  ]
&#125;)
export class AppModule &#123; &#125;
</code></pre>
<p>\u63A5\u4E0B\u6765\u4F60\u53EF\u4EE5\u5728\u4EFB\u4F55\u5B50\u6A21\u5757\u4E2D\u4F7F\u7528 <code>ngx-tinymce</code>\uFF1A</p>
<pre><code class="language-html">&lt;tinymce [(ngModel)]=&quot;html&quot;&gt;&lt;/tinymce&gt;
</code></pre>
<h2 id="\u975Eangular\u7EC4\u4EF6"><a class="lake-link"><i data-anchor="\u975Eangular\u7EC4\u4EF6"></i></a>\u975EAngular\u7EC4\u4EF6</h2><p>\u5F15\u7528\u4E00\u4E2A\u975E Angular \u7EC4\u4EF6\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A JavaScript \u7C7B\u5E93\uFF0C\u4F8B\u5982\u4E8C\u7EF4\u7801\u7C7B\u5E93 <a href="https://github.com/neocotic/qrious/" target="_blank" rel="noopener">qrious</a>\uFF0C\u8FD9\u662F\u4E00\u4E2A\u7EAF\u6D01\u7684 JavaScript \u7C7B\u5E93\uFF08\u5EFA\u8BAE\u5C3D\u53EF\u80FD\u4F7F\u7528\u7EAF\u6D01\u7C7B\u5E93\u800C\u975E\u5E26\u6709\u4F9D\u8D56\u5176\u4ED6\uFF09\u3002</p>
<h3 id="\u5B89\u88C5\u4F9D\u8D56\u5305"><a class="lake-link"><i data-anchor="\u5B89\u88C5\u4F9D\u8D56\u5305"></i></a>\u5B89\u88C5\u4F9D\u8D56\u5305</h3><pre><code class="language-bash">npm i -S qrious
</code></pre>
<h3 id="\u5BFC\u5165\u811A\u672C"><a class="lake-link"><i data-anchor="\u5BFC\u5165\u811A\u672C"></i></a>\u5BFC\u5165\u811A\u672C</h3><p>\u5728 <code>angular.json</code> \u627E\u5230 <code>scripts</code> \u8282\u70B9\u5E76\u589E\u52A0\uFF1A</p>
<pre><code class="language-json">&quot;scripts&quot;: [
  &quot;node_modules/qrious/dist/qrious.min.js&quot;
]
</code></pre>
<p>\u5982\u679C\u7B2C\u4E09\u65B9\u7C7B\u5E93\u9700\u8981\u989D\u5916\u7684\u6837\u5F0F\uFF0C\u8FD8\u9700\u8981\u5728 <code>styles</code> \u589E\u52A0\u8DEF\u5F84\u3002</p>
<blockquote>
<p>\u6CE8\u610F\uFF1A\u9700\u8981\u91CD\u65B0\u8FD0\u884C <code>ng s</code> \u624D\u4F1A\u751F\u6548\u3002</p>
</blockquote>
<p><strong>\u5EF6\u8FDF\u52A0\u8F7D\u811A\u672C</strong></p>
<p>\u4E0A\u8FF0\u5BFC\u5165\u811A\u672C\u65B9\u5F0F\u4F1A\u628A\u4EE3\u7801\u76F4\u63A5\u6253\u5305\u8FDB <code>scripts.js</code>\uFF0C\u8FD9\u4F1A\u5BFC\u81F4 <code>scripts.js</code> \u4F53\u79EF\u53D8\u5927\uFF0CNG-ALAIN \u63D0\u4F9B\u53E6\u4E00\u79CD\u5EF6\u8FDF\u52A0\u8F7DCDN\u7C7B\u5E93\u811A\u672C\u89E3\u51B3\u65B9\u6848\uFF0C\u9002\u7528\u4F4E\u4F7F\u7528\u7387\u7684\u4E1A\u52A1\uFF08\u4F8B\u5982\uFF1A<a href="https://cdn.bootcss.com/jszip/3.1.5/jszip.min.js" target="_blank" rel="noopener">zip</a> \u538B\u7F29\uFF09\uFF0C\u53EF\u4EE5\u5229\u7528 <a href="/util/lazy">LazyService</a> \u5EF6\u8FDF\u52A0\u8F7D\u8FDC\u7A0BCDN\u811A\u672C\u3002</p>
<h3 id="\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u4F7F\u7528"></i></a>\u4F7F\u7528</h3><p>Angular \u662F\u91C7\u7528 TypeScript \u8BED\u8A00\uFF0C\u6240\u6709\u7C7B\u578B\u90FD\u5FC5\u987B\u660E\u786E\u5B9A\u4E49\u624D\u80FD\u4F7F\u7528\uFF0C\u7EC6\u8282\u8BF7\u53C2\u8003 <a href="https://zhuanlan.zhihu.com/p/35796451" target="_blank" rel="noopener">Angular \u5982\u4F55\u4F7F\u7528\u7B2C\u4E09\u65B9\u5E93</a>\u3002</p>
<p>\u4E00\u4E2A\u8C03\u7528\u7684\u793A\u4F8B\u4EE3\u7801\uFF1A</p>
<pre><code class="language-ts">declare var QRious: any;

&#64;Component()
export class DEMOComponent &#123;
  constructor() &#123;
    const qr = new QRious();
  &#125;
&#125;
</code></pre>
`,api:"",toc:[{id:"angular\u7EC4\u4EF6",title:"Angular\u7EC4\u4EF6",children:[{id:"\u5B89\u88C5\u4F9D\u8D56\u5305",title:"\u5B89\u88C5\u4F9D\u8D56\u5305"},{id:"\u6CE8\u518C",title:"\u6CE8\u518C"}]},{id:"\u975Eangular\u7EC4\u4EF6",title:"\u975EAngular\u7EC4\u4EF6",children:[{id:"\u5B89\u88C5\u4F9D\u8D56\u5305",title:"\u5B89\u88C5\u4F9D\u8D56\u5305"},{id:"\u5BFC\u5165\u811A\u672C",title:"\u5BFC\u5165\u811A\u672C"},{id:"\u4F7F\u7528",title:"\u4F7F\u7528"}]}],raw:`---
order: 60
title: \u4F7F\u7528\u7B2C\u4E09\u65B9\u7C7B\u5E93
type: Dev
---

\u9664\u4E86 NG-ZORRO \u57FA\u7840\u7EC4\u4EF6\u4EE5\u53CA @delon \u4E1A\u52A1\u7EC4\u4EF6\u4EE5\u5916\uFF0C\u6709\u65F6\u6211\u4EEC\u8FD8\u9700\u8981\u5F15\u7528\u5176\u4ED6\u5916\u90E8\u7C7B\u5E93\uFF0C\u4EE5\u4E0B\u5C06\u4ECB\u7ECD\u5982\u4F55\u4F7F\u7528\u5BCC\u6587\u672C\u7EC4\u4EF6 [ngx-tinymce](https://github.com/cipchk/ngx-tinymce)\uFF1A

## Angular\u7EC4\u4EF6

### \u5B89\u88C5\u4F9D\u8D56\u5305

\`\`\`bash
npm i -S ngx-tinymce
\`\`\`

### \u6CE8\u518C

\u50CF\u5BCC\u6587\u672C\u6846\u4F60\u53EF\u80FD\u9700\u8981\u5728\u6240\u6709\u5B50\u6A21\u5757\u4E2D\u90FD\u4F1A\u53EF\u80FD\u4F1A\u7528\u5230\uFF0C\u56E0\u4E3A\u5EFA\u8BAE\u5728 \`SharedModule\` \u6A21\u5757\u4E2D\u5BFC\u5165\u548C\u5BFC\u51FA\u4ED6\u3002

\`\`\`ts
// #region third libs
import { NgxTinymceModule } from 'ngx-tinymce';
const THIRDMODULES = [ NgxTinymceModule ];
// #endregion
\`\`\`

> \`region: third libs\` \u533A\u57DF\u662FNG-ALAIN\u7684\u4E00\u4E2A\u7F16\u7801\u7EA6\u5B9A\uFF0C\u5C06\u6240\u6709\u7B2C\u4E09\u65B9\u7EC4\u4EF6\u6CE8\u518C\u81F3 \`THIRDMODULES\` \u53D8\u91CF\u4E2D\u5373\u53EF\uFF0C\u800C\u65E0\u987B\u5173\u5FC3 \`@NgModule\` \u5185\u5728\u7684\u5199\u6CD5\uFF0C\u6709\u5173\u66F4\u591A\u7F16\u7801\u7EA6\u5B9A\u53EF\u4EE5\u53C2\u8003[\u7F16\u7801\u89C4\u8303\u5EFA\u8BAE](/docs/style-guide)\u3002

\u5BF9\u4E8E\u90E8\u5206\u7B2C\u4E09\u65B9\u7EC4\u4EF6\uFF0C\u53EF\u80FD\u4F1A\u9700\u8981\u4E00\u4E9B\u914D\u7F6E\u9879\uFF0C\u5EFA\u8BAE\u5728\u6839\u6A21\u5757\u4E2D\u6CE8\u518C\uFF0C\u4F8B\u5982\uFF1A

\`\`\`ts
import { NgxTinymceModule } from 'ngx-tinymce';
@NgModule({
  imports: [
    BrowserModule,
    NgxTinymceModule.forRoot({
      baseURL: '//cdn.bootcss.com/tinymce/4.7.13/'
    })
  ]
})
export class AppModule { }
\`\`\`

\u63A5\u4E0B\u6765\u4F60\u53EF\u4EE5\u5728\u4EFB\u4F55\u5B50\u6A21\u5757\u4E2D\u4F7F\u7528 \`ngx-tinymce\`\uFF1A

\`\`\`html
<tinymce [(ngModel)]="html"></tinymce>
\`\`\`

## \u975EAngular\u7EC4\u4EF6

\u5F15\u7528\u4E00\u4E2A\u975E Angular \u7EC4\u4EF6\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A JavaScript \u7C7B\u5E93\uFF0C\u4F8B\u5982\u4E8C\u7EF4\u7801\u7C7B\u5E93 [qrious](https://github.com/neocotic/qrious/)\uFF0C\u8FD9\u662F\u4E00\u4E2A\u7EAF\u6D01\u7684 JavaScript \u7C7B\u5E93\uFF08\u5EFA\u8BAE\u5C3D\u53EF\u80FD\u4F7F\u7528\u7EAF\u6D01\u7C7B\u5E93\u800C\u975E\u5E26\u6709\u4F9D\u8D56\u5176\u4ED6\uFF09\u3002

### \u5B89\u88C5\u4F9D\u8D56\u5305

\`\`\`bash
npm i -S qrious
\`\`\`

### \u5BFC\u5165\u811A\u672C

\u5728 \`angular.json\` \u627E\u5230 \`scripts\` \u8282\u70B9\u5E76\u589E\u52A0\uFF1A

\`\`\`json
"scripts": [
  "node_modules/qrious/dist/qrious.min.js"
]
\`\`\`

\u5982\u679C\u7B2C\u4E09\u65B9\u7C7B\u5E93\u9700\u8981\u989D\u5916\u7684\u6837\u5F0F\uFF0C\u8FD8\u9700\u8981\u5728 \`styles\` \u589E\u52A0\u8DEF\u5F84\u3002

> \u6CE8\u610F\uFF1A\u9700\u8981\u91CD\u65B0\u8FD0\u884C \`ng s\` \u624D\u4F1A\u751F\u6548\u3002

**\u5EF6\u8FDF\u52A0\u8F7D\u811A\u672C**

\u4E0A\u8FF0\u5BFC\u5165\u811A\u672C\u65B9\u5F0F\u4F1A\u628A\u4EE3\u7801\u76F4\u63A5\u6253\u5305\u8FDB \`scripts.js\`\uFF0C\u8FD9\u4F1A\u5BFC\u81F4 \`scripts.js\` \u4F53\u79EF\u53D8\u5927\uFF0CNG-ALAIN \u63D0\u4F9B\u53E6\u4E00\u79CD\u5EF6\u8FDF\u52A0\u8F7DCDN\u7C7B\u5E93\u811A\u672C\u89E3\u51B3\u65B9\u6848\uFF0C\u9002\u7528\u4F4E\u4F7F\u7528\u7387\u7684\u4E1A\u52A1\uFF08\u4F8B\u5982\uFF1A[zip](https://cdn.bootcss.com/jszip/3.1.5/jszip.min.js) \u538B\u7F29\uFF09\uFF0C\u53EF\u4EE5\u5229\u7528 [LazyService](/util/lazy) \u5EF6\u8FDF\u52A0\u8F7D\u8FDC\u7A0BCDN\u811A\u672C\u3002

### \u4F7F\u7528

Angular \u662F\u91C7\u7528 TypeScript \u8BED\u8A00\uFF0C\u6240\u6709\u7C7B\u578B\u90FD\u5FC5\u987B\u660E\u786E\u5B9A\u4E49\u624D\u80FD\u4F7F\u7528\uFF0C\u7EC6\u8282\u8BF7\u53C2\u8003 [Angular \u5982\u4F55\u4F7F\u7528\u7B2C\u4E09\u65B9\u5E93](https://zhuanlan.zhihu.com/p/35796451)\u3002

\u4E00\u4E2A\u8C03\u7528\u7684\u793A\u4F8B\u4EE3\u7801\uFF1A

\`\`\`ts
declare var QRious: any;

@Component()
export class DEMOComponent {
  constructor() {
    const qr = new QRious();
  }
}
\`\`\``}}};codes=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=o({type:n,selectors:[["docs-import"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&i(0,"app-docs",0),e&2&&a("codes",t.codes)("item",t.item)},dependencies:[r],encapsulation:2})};var I=class n{item={name:"llms",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:1,title:"LLMs.txt",tag:"New",group:"AI",description:"This guide explains how to enable AI tools to better understand @delon/*.We support LLMs.txt files for making the @delon/* documentation available to ...",path:"docs/llms.en-US.md",url:"/docs/llms/en"},text:`<p>This guide explains how to enable AI tools to better understand &#64;delon/*.</p>
<h2 id="what_is_llmstxt?"><a class="lake-link"><i data-anchor="what_is_llmstxt?"></i></a>What is LLMs.txt?</h2><p>We support <a href="https://llmstxt.org/" target="_blank" rel="noopener">LLMs.txt</a> files for making the &#64;delon/* documentation available to large language models (LLMs). This feature helps AI tools better understand our component library, its APIs, and usage patterns.</p>
<h2 id="available_resources"><a class="lake-link"><i data-anchor="available_resources"></i></a>Available Resources</h2><h3 id="llmstxt_aggregated_files"><a class="lake-link"><i data-anchor="llmstxt_aggregated_files"></i></a>LLMs.txt Aggregated Files</h3><p>We provide several aggregated files to help AI tools access our documentation:</p>
<table>
<thead>
<tr>
<th>File</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><a href="https://ng-alain.com/llms.txt" target="_blank" rel="noopener">llms.txt</a></td>
<td>Navigation file with links to all documentation and components</td>
</tr>
<tr>
<td><a href="https://ng-alain.com/llms-full.txt" target="_blank" rel="noopener">llms-full.txt</a></td>
<td>Complete component documentation (English) with implementation details and examples</td>
</tr>
<tr>
<td><a href="https://ng-alain.com/llms-full-cn.txt" target="_blank" rel="noopener">llms-full-cn.txt</a></td>
<td>Complete component documentation (Chinese)</td>
</tr>
</tbody></table>
<h3 id="single_component_documentation"><a class="lake-link"><i data-anchor="single_component_documentation"></i></a>Single Component Documentation</h3><p>Access individual component documentation with <code>.md</code> suffix:</p>
<ul>
<li><code>https://ng-alain.com/llms/components/auto-focus.en.md</code> (English)</li>
<li><code>https://ng-alain.com/llms/components/auto-focus.cn.md</code> (Chinese)</li>
</ul>
<h2 id="usage_with_ai_tools"><a class="lake-link"><i data-anchor="usage_with_ai_tools"></i></a>Usage with AI Tools</h2><table>
<thead>
<tr>
<th>Tool</th>
<th>Description</th>
<th>Prompt</th>
</tr>
</thead>
<tbody><tr>
<td><strong>Cursor</strong></td>
<td>Use <code>&#64;Docs</code> feature to include LLMs.txt, or add prompt to <code>.cursor/rules</code>. <a href="https://docs.cursor.com/context/&#64;-symbols/&#64;-docs" target="_blank" rel="noopener">Documentation</a></td>
<td><code>Read https://ng-alain.com/llms-full.txt and understand &#64;delon/* components. Use this knowledge when writing code with &#64;delon/*.</code></td>
</tr>
<tr>
<td><strong>Windsurf</strong></td>
<td>Add prompt to <code>.windsurf/rules</code> or use cascade memories. <a href="https://docs.windsurf.com/windsurf/cascade/memories" target="_blank" rel="noopener">Documentation</a></td>
<td><code>Read https://ng-alain.com/llms-full.txt and understand &#64;delon/* components. Use this knowledge when writing code with &#64;delon/*.</code></td>
</tr>
<tr>
<td><strong>Claude Code</strong></td>
<td>Add to CLAUDE.md or use <code>/memory</code> to persist. <a href="https://docs.anthropic.com/en/docs/claude-code" target="_blank" rel="noopener">Documentation</a></td>
<td><code>Read https://ng-alain.com/llms-full.txt and understand &#64;delon/* components. Use this knowledge when writing code with &#64;delon/*.</code></td>
</tr>
<tr>
<td><strong>GitHub Copilot</strong></td>
<td>Add to <code>.github/copilot-instructions.md</code>. <a href="https://docs.github.com/en/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot" target="_blank" rel="noopener">Documentation</a></td>
<td><code>Read https://ng-alain.com/llms-full.txt and understand &#64;delon/* components. Use this knowledge when writing code with &#64;delon/*.</code></td>
</tr>
<tr>
<td><strong>Codex</strong></td>
<td>Add to <code>.codex/settings.json</code> or AGENTS.md. <a href="https://github.com/openai/codex" target="_blank" rel="noopener">Documentation</a></td>
<td><code>Read https://ng-alain.com/llms-full.txt and understand &#64;delon/* components. Use this knowledge when writing code with &#64;delon/*.</code></td>
</tr>
<tr>
<td><strong>Gemini CLI</strong></td>
<td>Use <code>--context</code> parameter or add to <code>.gemini/config.json</code>. <a href="https://ai.google.dev/gemini-api/docs?hl=en" target="_blank" rel="noopener">Documentation</a></td>
<td><code>Read https://ng-alain.com/llms-full.txt and understand &#64;delon/* components. Use this knowledge when writing code with &#64;delon/*.</code></td>
</tr>
<tr>
<td><strong>Trae</strong></td>
<td>Add to project&#39;s knowledge sources in settings. <a href="https://trae.ai/docs" target="_blank" rel="noopener">Documentation</a></td>
<td><code>Read https://ng-alain.com/llms-full.txt and understand &#64;delon/* components. Use this knowledge when writing code with &#64;delon/*.</code></td>
</tr>
<tr>
<td><strong>Qoder</strong></td>
<td>Add to <code>.qoder/config.yml</code> or use <code>&#64;docs</code> in conversation. <a href="https://docs.qoder.com/" target="_blank" rel="noopener">Documentation</a></td>
<td><code>Read https://ng-alain.com/llms-full.txt and understand &#64;delon/* components. Use this knowledge when writing code with &#64;delon/*.</code></td>
</tr>
<tr>
<td><strong>Neovate Code</strong></td>
<td>Run <code>neovate</code> and describe task with prompt. <a href="https://github.com/neovateai/neovate-code" target="_blank" rel="noopener">Documentation</a></td>
<td><code>Read https://ng-alain.com/llms-full.txt and understand &#64;delon/* components. Use this knowledge when writing code with &#64;delon/*.</code></td>
</tr>
</tbody></table>
`,api:"",toc:[{id:"what_is_llmstxt?",title:"What is LLMs.txt?"},{id:"available_resources",title:"Available Resources",children:[{id:"llmstxt_aggregated_files",title:"LLMs.txt Aggregated Files"},{id:"single_component_documentation",title:"Single Component Documentation"}]},{id:"usage_with_ai_tools",title:"Usage with AI Tools"}],raw:"---\norder: 1\ntitle: LLMs.txt\ntag: New\ngroup: AI\n---\n\nThis guide explains how to enable AI tools to better understand @delon/*.\n\n## What is LLMs.txt?\n\nWe support [LLMs.txt](https://llmstxt.org/) files for making the @delon/* documentation available to large language models (LLMs). This feature helps AI tools better understand our component library, its APIs, and usage patterns.\n\n## Available Resources\n\n### LLMs.txt Aggregated Files\n\nWe provide several aggregated files to help AI tools access our documentation:\n\n| File                                                       | Description                                                                         |\n| ---------------------------------------------------------- | ----------------------------------------------------------------------------------- |\n| [llms.txt](https://ng-alain.com/llms.txt)                 | Navigation file with links to all documentation and components                      |\n| [llms-full.txt](https://ng-alain.com/llms-full.txt)       | Complete component documentation (English) with implementation details and examples |\n| [llms-full-cn.txt](https://ng-alain.com/llms-full-cn.txt) | Complete component documentation (Chinese)                                          |\n\n### Single Component Documentation\n\nAccess individual component documentation with `.md` suffix:\n\n- `https://ng-alain.com/llms/components/auto-focus.en.md` (English)\n- `https://ng-alain.com/llms/components/auto-focus.cn.md` (Chinese)\n\n## Usage with AI Tools\n\n| Tool               | Description                                                                                                                                                     | Prompt                                                                                                                             |\n| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |\n| **Cursor**         | Use `@Docs` feature to include LLMs.txt, or add prompt to `.cursor/rules`. [Documentation](https://docs.cursor.com/context/@-symbols/@-docs)                    | `Read https://ng-alain.com/llms-full.txt and understand @delon/* components. Use this knowledge when writing code with @delon/*.` |\n| **Windsurf**       | Add prompt to `.windsurf/rules` or use cascade memories. [Documentation](https://docs.windsurf.com/windsurf/cascade/memories)                                   | `Read https://ng-alain.com/llms-full.txt and understand @delon/* components. Use this knowledge when writing code with @delon/*.` |\n| **Claude Code**    | Add to CLAUDE.md or use `/memory` to persist. [Documentation](https://docs.anthropic.com/en/docs/claude-code)                                                   | `Read https://ng-alain.com/llms-full.txt and understand @delon/* components. Use this knowledge when writing code with @delon/*.` |\n| **GitHub Copilot** | Add to `.github/copilot-instructions.md`. [Documentation](https://docs.github.com/en/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot) | `Read https://ng-alain.com/llms-full.txt and understand @delon/* components. Use this knowledge when writing code with @delon/*.` |\n| **Codex**          | Add to `.codex/settings.json` or AGENTS.md. [Documentation](https://github.com/openai/codex)                                                                    | `Read https://ng-alain.com/llms-full.txt and understand @delon/* components. Use this knowledge when writing code with @delon/*.` |\n| **Gemini CLI**     | Use `--context` parameter or add to `.gemini/config.json`. [Documentation](https://ai.google.dev/gemini-api/docs?hl=en)                                         | `Read https://ng-alain.com/llms-full.txt and understand @delon/* components. Use this knowledge when writing code with @delon/*.` |\n| **Trae**           | Add to project's knowledge sources in settings. [Documentation](https://trae.ai/docs)                                                                           | `Read https://ng-alain.com/llms-full.txt and understand @delon/* components. Use this knowledge when writing code with @delon/*.` |\n| **Qoder**          | Add to `.qoder/config.yml` or use `@docs` in conversation. [Documentation](https://docs.qoder.com/)                                                             | `Read https://ng-alain.com/llms-full.txt and understand @delon/* components. Use this knowledge when writing code with @delon/*.` |\n| **Neovate Code**   | Run `neovate` and describe task with prompt. [Documentation](https://github.com/neovateai/neovate-code)                                                         | `Read https://ng-alain.com/llms-full.txt and understand @delon/* components. Use this knowledge when writing code with @delon/*.` |"},"zh-CN":{meta:{order:1,title:"LLMs.txt",tag:"\u65B0\u589E",group:"AI",description:"\u672C\u6307\u5357\u4ECB\u7ECD\u5982\u4F55\u8BA9 AI \u5DE5\u5177\u66F4\u597D\u5730\u7406\u89E3 NG-ALAIN \u7EC4\u4EF6\u5E93\u3002\u6211\u4EEC\u652F\u6301\u901A\u8FC7 LLMs.txt \u6587\u4EF6\u5411\u5927\u8BED\u8A00\u6A21\u578B\uFF08LLMs\uFF09\u63D0\u4F9B NG-ALAIN \u6587\u6863\u3002\u6B64\u529F\u80FD\u53EF\u5E2E\u52A9 AI \u5DE5\u5177\u66F4\u597D\u5730\u7406\u89E3\u6211\u4EEC\u7684\u7EC4\u4EF6\u5E93\u3001API \u53CA\u4F7F\u7528\u6A21\u5F0F\u3002\u6211\u4EEC\u63D0\u4F9B\u591A\u4E2A\u805A\u5408\u6587\u4EF6\u6765\u5E2E\u52A9 AI \u5DE5\u5177\u8BBF\u95EE\u6587\u6863\uFF1A\u901A\u8FC7 .md \u540E\u7F00\u76F4\u63A5\u8BBF\u95EE\u5355...",path:"docs/llms.zh-CN.md",url:"/docs/llms/zh"},text:`<p>\u672C\u6307\u5357\u4ECB\u7ECD\u5982\u4F55\u8BA9 AI \u5DE5\u5177\u66F4\u597D\u5730\u7406\u89E3 NG-ALAIN \u7EC4\u4EF6\u5E93\u3002</p>
<h2 id="\u4EC0\u4E48\u662F_llmstxt\uFF1F"><a class="lake-link"><i data-anchor="\u4EC0\u4E48\u662F_llmstxt\uFF1F"></i></a>\u4EC0\u4E48\u662F LLMs.txt\uFF1F</h2><p>\u6211\u4EEC\u652F\u6301\u901A\u8FC7 <a href="https://llmstxt.org/" target="_blank" rel="noopener">LLMs.txt</a> \u6587\u4EF6\u5411\u5927\u8BED\u8A00\u6A21\u578B\uFF08LLMs\uFF09\u63D0\u4F9B <code>NG-ALAIN</code> \u6587\u6863\u3002\u6B64\u529F\u80FD\u53EF\u5E2E\u52A9 AI \u5DE5\u5177\u66F4\u597D\u5730\u7406\u89E3\u6211\u4EEC\u7684\u7EC4\u4EF6\u5E93\u3001API \u53CA\u4F7F\u7528\u6A21\u5F0F\u3002</p>
<h2 id="\u53EF\u7528\u8D44\u6E90"><a class="lake-link"><i data-anchor="\u53EF\u7528\u8D44\u6E90"></i></a>\u53EF\u7528\u8D44\u6E90</h2><h3 id="llmstxt_\u805A\u5408\u6587\u4EF6"><a class="lake-link"><i data-anchor="llmstxt_\u805A\u5408\u6587\u4EF6"></i></a>LLMs.txt \u805A\u5408\u6587\u4EF6</h3><p>\u6211\u4EEC\u63D0\u4F9B\u591A\u4E2A\u805A\u5408\u6587\u4EF6\u6765\u5E2E\u52A9 AI \u5DE5\u5177\u8BBF\u95EE\u6587\u6863\uFF1A</p>
<table>
<thead>
<tr>
<th>\u6587\u4EF6</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td><a href="https://ng-alain.com/llms.txt" target="_blank" rel="noopener">llms.txt</a></td>
<td>\u5BFC\u822A\u6587\u4EF6\uFF0C\u5305\u542B\u6240\u6709\u6587\u6863\u548C\u7EC4\u4EF6\u7684\u94FE\u63A5</td>
</tr>
<tr>
<td><a href="https://ng-alain.com/llms-full.txt" target="_blank" rel="noopener">llms-full.txt</a></td>
<td>\u5B8C\u6574\u7684\u7EC4\u4EF6\u6587\u6863\uFF08\u82F1\u6587\uFF09\uFF0C\u5305\u542B\u5B9E\u73B0\u7EC6\u8282\u548C\u793A\u4F8B</td>
</tr>
<tr>
<td><a href="https://ng-alain.com/llms-full-cn.txt" target="_blank" rel="noopener">llms-full-cn.txt</a></td>
<td>\u5B8C\u6574\u7684\u7EC4\u4EF6\u6587\u6863\uFF08\u4E2D\u6587\uFF09</td>
</tr>
</tbody></table>
<h3 id="\u5355\u4E2A\u7EC4\u4EF6\u6587\u6863"><a class="lake-link"><i data-anchor="\u5355\u4E2A\u7EC4\u4EF6\u6587\u6863"></i></a>\u5355\u4E2A\u7EC4\u4EF6\u6587\u6863</h3><p>\u901A\u8FC7 <code>.md</code> \u540E\u7F00\u76F4\u63A5\u8BBF\u95EE\u5355\u4E2A\u7EC4\u4EF6\u6587\u6863\uFF1A</p>
<ul>
<li><code>https://ng-alain.com/llms/components/auto-focus.en.md</code>\uFF08\u82F1\u6587\uFF09</li>
<li><code>https://ng-alain.com/llms/components/auto-focus.cn.md</code>\uFF08\u4E2D\u6587\uFF09</li>
</ul>
<h2 id="\u5728_ai_\u5DE5\u5177\u4E2D\u7684\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5728_ai_\u5DE5\u5177\u4E2D\u7684\u4F7F\u7528"></i></a>\u5728 AI \u5DE5\u5177\u4E2D\u7684\u4F7F\u7528</h2><table>
<thead>
<tr>
<th>\u5DE5\u5177</th>
<th>\u8BF4\u660E</th>
<th>\u63D0\u793A\u8BCD</th>
</tr>
</thead>
<tbody><tr>
<td><strong>Cursor</strong></td>
<td>\u4F7F\u7528 <code>&#64;Docs</code> \u529F\u80FD\u5F15\u5165 LLMs.txt\uFF0C\u6216\u6DFB\u52A0\u63D0\u793A\u8BCD\u5230 <code>.cursor/rules</code>\u3002<a href="https://docs.cursor.com/zh/context/&#64;-symbols/&#64;-docs" target="_blank" rel="noopener">\u6587\u6863</a></td>
<td><code>\u9605\u8BFB https://ng-alain.com/llms-full-cn.txt \u5E76\u7406\u89E3 &#64;delon/* \u7EC4\u4EF6\u5E93\uFF0C\u5728\u7F16\u5199 &#64;delon/* \u4EE3\u7801\u65F6\u4F7F\u7528\u8FD9\u4E9B\u77E5\u8BC6\u3002</code></td>
</tr>
<tr>
<td><strong>Windsurf</strong></td>
<td>\u6DFB\u52A0\u63D0\u793A\u8BCD\u5230 <code>.windsurf/rules</code> \u6216\u4F7F\u7528 cascade memories\u3002<a href="https://docs.windsurf.com/windsurf/cascade/memories" target="_blank" rel="noopener">\u6587\u6863</a></td>
<td><code>\u9605\u8BFB https://ng-alain.com/llms-full-cn.txt \u5E76\u7406\u89E3 &#64;delon/* \u7EC4\u4EF6\u5E93\uFF0C\u5728\u7F16\u5199 &#64;delon/* \u4EE3\u7801\u65F6\u4F7F\u7528\u8FD9\u4E9B\u77E5\u8BC6\u3002</code></td>
</tr>
<tr>
<td><strong>Claude Code</strong></td>
<td>\u6DFB\u52A0\u5230 CLAUDE.md \u6216\u4F7F\u7528 <code>/memory</code> \u6301\u4E45\u5316\u3002<a href="https://docs.anthropic.com/en/docs/claude-code" target="_blank" rel="noopener">\u6587\u6863</a></td>
<td><code>\u9605\u8BFB https://ng-alain.com/llms-full-cn.txt \u5E76\u7406\u89E3 &#64;delon/* \u7EC4\u4EF6\u5E93\uFF0C\u5728\u7F16\u5199 &#64;delon/* \u4EE3\u7801\u65F6\u4F7F\u7528\u8FD9\u4E9B\u77E5\u8BC6\u3002</code></td>
</tr>
<tr>
<td><strong>GitHub Copilot</strong></td>
<td>\u6DFB\u52A0\u5230 <code>.github/copilot-instructions.md</code>\u3002<a href="https://docs.github.com/zh/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot" target="_blank" rel="noopener">\u6587\u6863</a></td>
<td><code>\u9605\u8BFB https://ng-alain.com/llms-full-cn.txt \u5E76\u7406\u89E3 &#64;delon/* \u7EC4\u4EF6\u5E93\uFF0C\u5728\u7F16\u5199 &#64;delon/* \u4EE3\u7801\u65F6\u4F7F\u7528\u8FD9\u4E9B\u77E5\u8BC6\u3002</code></td>
</tr>
<tr>
<td><strong>Codex</strong></td>
<td>\u6DFB\u52A0\u5230 <code>.codex/settings.json</code> \u6216 AGENTS.md\u3002<a href="https://github.com/openai/codex" target="_blank" rel="noopener">\u6587\u6863</a></td>
<td><code>\u9605\u8BFB https://ng-alain.com/llms-full-cn.txt \u5E76\u7406\u89E3 &#64;delon/* \u7EC4\u4EF6\u5E93\uFF0C\u5728\u7F16\u5199 &#64;delon/* \u4EE3\u7801\u65F6\u4F7F\u7528\u8FD9\u4E9B\u77E5\u8BC6\u3002</code></td>
</tr>
<tr>
<td><strong>Gemini CLI</strong></td>
<td>\u4F7F\u7528 <code>--context</code> \u53C2\u6570\u6216\u6DFB\u52A0\u5230 <code>.gemini/config.json</code>\u3002<a href="https://ai.google.dev/gemini-api/docs?hl=zh-cn" target="_blank" rel="noopener">\u6587\u6863</a></td>
<td><code>\u9605\u8BFB https://ng-alain.com/llms-full-cn.txt \u5E76\u7406\u89E3 &#64;delon/* \u7EC4\u4EF6\u5E93\uFF0C\u5728\u7F16\u5199 &#64;delon/* \u4EE3\u7801\u65F6\u4F7F\u7528\u8FD9\u4E9B\u77E5\u8BC6\u3002</code></td>
</tr>
<tr>
<td><strong>Trae</strong></td>
<td>\u6DFB\u52A0\u5230\u9879\u76EE\u7684\u77E5\u8BC6\u6E90\u8BBE\u7F6E\u4E2D\u3002<a href="https://trae.ai/docs" target="_blank" rel="noopener">\u6587\u6863</a></td>
<td><code>\u9605\u8BFB https://ng-alain.com/llms-full-cn.txt \u5E76\u7406\u89E3 &#64;delon/* \u7EC4\u4EF6\u5E93\uFF0C\u5728\u7F16\u5199 &#64;delon/* \u4EE3\u7801\u65F6\u4F7F\u7528\u8FD9\u4E9B\u77E5\u8BC6\u3002</code></td>
</tr>
<tr>
<td><strong>Qoder</strong></td>
<td>\u6DFB\u52A0\u5230 <code>.qoder/config.yml</code> \u6216\u5728\u5BF9\u8BDD\u4E2D\u4F7F\u7528 <code>&#64;docs</code>\u3002<a href="https://docs.qoder.com/" target="_blank" rel="noopener">\u6587\u6863</a></td>
<td><code>\u9605\u8BFB https://ng-alain.com/llms-full-cn.txt \u5E76\u7406\u89E3 &#64;delon/* \u7EC4\u4EF6\u5E93\uFF0C\u5728\u7F16\u5199 &#64;delon/* \u4EE3\u7801\u65F6\u4F7F\u7528\u8FD9\u4E9B\u77E5\u8BC6\u3002</code></td>
</tr>
<tr>
<td><strong>Neovate Code</strong></td>
<td>\u8FD0\u884C <code>neovate</code> \u5E76\u4F7F\u7528\u63D0\u793A\u8BCD\u63CF\u8FF0\u4EFB\u52A1\u3002<a href="https://github.com/neovateai/neovate-code" target="_blank" rel="noopener">\u6587\u6863</a></td>
<td><code>\u9605\u8BFB https://ng-alain.com/llms-full-cn.txt \u5E76\u7406\u89E3 &#64;delon/* \u7EC4\u4EF6\u5E93\uFF0C\u5728\u7F16\u5199 &#64;delon/* \u4EE3\u7801\u65F6\u4F7F\u7528\u8FD9\u4E9B\u77E5\u8BC6\u3002</code></td>
</tr>
</tbody></table>
`,api:"",toc:[{id:"\u4EC0\u4E48\u662F_llmstxt\uFF1F",title:"\u4EC0\u4E48\u662F LLMs.txt\uFF1F"},{id:"\u53EF\u7528\u8D44\u6E90",title:"\u53EF\u7528\u8D44\u6E90",children:[{id:"llmstxt_\u805A\u5408\u6587\u4EF6",title:"LLMs.txt \u805A\u5408\u6587\u4EF6"},{id:"\u5355\u4E2A\u7EC4\u4EF6\u6587\u6863",title:"\u5355\u4E2A\u7EC4\u4EF6\u6587\u6863"}]},{id:"\u5728_ai_\u5DE5\u5177\u4E2D\u7684\u4F7F\u7528",title:"\u5728 AI \u5DE5\u5177\u4E2D\u7684\u4F7F\u7528"}],raw:"---\norder: 1\ntitle: LLMs.txt\ntag: \u65B0\u589E\ngroup: AI\n---\n\n\u672C\u6307\u5357\u4ECB\u7ECD\u5982\u4F55\u8BA9 AI \u5DE5\u5177\u66F4\u597D\u5730\u7406\u89E3 NG-ALAIN \u7EC4\u4EF6\u5E93\u3002\n\n## \u4EC0\u4E48\u662F LLMs.txt\uFF1F\n\n\u6211\u4EEC\u652F\u6301\u901A\u8FC7 [LLMs.txt](https://llmstxt.org/) \u6587\u4EF6\u5411\u5927\u8BED\u8A00\u6A21\u578B\uFF08LLMs\uFF09\u63D0\u4F9B `NG-ALAIN` \u6587\u6863\u3002\u6B64\u529F\u80FD\u53EF\u5E2E\u52A9 AI \u5DE5\u5177\u66F4\u597D\u5730\u7406\u89E3\u6211\u4EEC\u7684\u7EC4\u4EF6\u5E93\u3001API \u53CA\u4F7F\u7528\u6A21\u5F0F\u3002\n\n## \u53EF\u7528\u8D44\u6E90\n\n### LLMs.txt \u805A\u5408\u6587\u4EF6\n\n\u6211\u4EEC\u63D0\u4F9B\u591A\u4E2A\u805A\u5408\u6587\u4EF6\u6765\u5E2E\u52A9 AI \u5DE5\u5177\u8BBF\u95EE\u6587\u6863\uFF1A\n\n| \u6587\u4EF6                                                       | \u8BF4\u660E                                       |\n| ---------------------------------------------------------- | ------------------------------------------ |\n| [llms.txt](https://ng-alain.com/llms.txt)                 | \u5BFC\u822A\u6587\u4EF6\uFF0C\u5305\u542B\u6240\u6709\u6587\u6863\u548C\u7EC4\u4EF6\u7684\u94FE\u63A5         |\n| [llms-full.txt](https://ng-alain.com/llms-full.txt)       | \u5B8C\u6574\u7684\u7EC4\u4EF6\u6587\u6863\uFF08\u82F1\u6587\uFF09\uFF0C\u5305\u542B\u5B9E\u73B0\u7EC6\u8282\u548C\u793A\u4F8B |\n| [llms-full-cn.txt](https://ng-alain.com/llms-full-cn.txt) | \u5B8C\u6574\u7684\u7EC4\u4EF6\u6587\u6863\uFF08\u4E2D\u6587\uFF09                     |\n\n### \u5355\u4E2A\u7EC4\u4EF6\u6587\u6863\n\n\u901A\u8FC7 `.md` \u540E\u7F00\u76F4\u63A5\u8BBF\u95EE\u5355\u4E2A\u7EC4\u4EF6\u6587\u6863\uFF1A\n\n- `https://ng-alain.com/llms/components/auto-focus.en.md`\uFF08\u82F1\u6587\uFF09\n- `https://ng-alain.com/llms/components/auto-focus.cn.md`\uFF08\u4E2D\u6587\uFF09\n\n## \u5728 AI \u5DE5\u5177\u4E2D\u7684\u4F7F\u7528\n\n| \u5DE5\u5177               | \u8BF4\u660E                                                                                                                                                   | \u63D0\u793A\u8BCD                                                                                                     |\n| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |\n| **Cursor**         | \u4F7F\u7528 `@Docs` \u529F\u80FD\u5F15\u5165 LLMs.txt\uFF0C\u6216\u6DFB\u52A0\u63D0\u793A\u8BCD\u5230 `.cursor/rules`\u3002[\u6587\u6863](https://docs.cursor.com/zh/context/@-symbols/@-docs)                            | `\u9605\u8BFB https://ng-alain.com/llms-full-cn.txt \u5E76\u7406\u89E3 @delon/* \u7EC4\u4EF6\u5E93\uFF0C\u5728\u7F16\u5199 @delon/* \u4EE3\u7801\u65F6\u4F7F\u7528\u8FD9\u4E9B\u77E5\u8BC6\u3002` |\n| **Windsurf**       | \u6DFB\u52A0\u63D0\u793A\u8BCD\u5230 `.windsurf/rules` \u6216\u4F7F\u7528 cascade memories\u3002[\u6587\u6863](https://docs.windsurf.com/windsurf/cascade/memories)                                    | `\u9605\u8BFB https://ng-alain.com/llms-full-cn.txt \u5E76\u7406\u89E3 @delon/* \u7EC4\u4EF6\u5E93\uFF0C\u5728\u7F16\u5199 @delon/* \u4EE3\u7801\u65F6\u4F7F\u7528\u8FD9\u4E9B\u77E5\u8BC6\u3002` |\n| **Claude Code**    | \u6DFB\u52A0\u5230 CLAUDE.md \u6216\u4F7F\u7528 `/memory` \u6301\u4E45\u5316\u3002[\u6587\u6863](https://docs.anthropic.com/en/docs/claude-code)                                                       | `\u9605\u8BFB https://ng-alain.com/llms-full-cn.txt \u5E76\u7406\u89E3 @delon/* \u7EC4\u4EF6\u5E93\uFF0C\u5728\u7F16\u5199 @delon/* \u4EE3\u7801\u65F6\u4F7F\u7528\u8FD9\u4E9B\u77E5\u8BC6\u3002` |\n| **GitHub Copilot** | \u6DFB\u52A0\u5230 `.github/copilot-instructions.md`\u3002[\u6587\u6863](https://docs.github.com/zh/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot) | `\u9605\u8BFB https://ng-alain.com/llms-full-cn.txt \u5E76\u7406\u89E3 @delon/* \u7EC4\u4EF6\u5E93\uFF0C\u5728\u7F16\u5199 @delon/* \u4EE3\u7801\u65F6\u4F7F\u7528\u8FD9\u4E9B\u77E5\u8BC6\u3002` |\n| **Codex**          | \u6DFB\u52A0\u5230 `.codex/settings.json` \u6216 AGENTS.md\u3002[\u6587\u6863](https://github.com/openai/codex)                                                                    | `\u9605\u8BFB https://ng-alain.com/llms-full-cn.txt \u5E76\u7406\u89E3 @delon/* \u7EC4\u4EF6\u5E93\uFF0C\u5728\u7F16\u5199 @delon/* \u4EE3\u7801\u65F6\u4F7F\u7528\u8FD9\u4E9B\u77E5\u8BC6\u3002` |\n| **Gemini CLI**     | \u4F7F\u7528 `--context` \u53C2\u6570\u6216\u6DFB\u52A0\u5230 `.gemini/config.json`\u3002[\u6587\u6863](https://ai.google.dev/gemini-api/docs?hl=zh-cn)                                            | `\u9605\u8BFB https://ng-alain.com/llms-full-cn.txt \u5E76\u7406\u89E3 @delon/* \u7EC4\u4EF6\u5E93\uFF0C\u5728\u7F16\u5199 @delon/* \u4EE3\u7801\u65F6\u4F7F\u7528\u8FD9\u4E9B\u77E5\u8BC6\u3002` |\n| **Trae**           | \u6DFB\u52A0\u5230\u9879\u76EE\u7684\u77E5\u8BC6\u6E90\u8BBE\u7F6E\u4E2D\u3002[\u6587\u6863](https://trae.ai/docs)                                                                                                 | `\u9605\u8BFB https://ng-alain.com/llms-full-cn.txt \u5E76\u7406\u89E3 @delon/* \u7EC4\u4EF6\u5E93\uFF0C\u5728\u7F16\u5199 @delon/* \u4EE3\u7801\u65F6\u4F7F\u7528\u8FD9\u4E9B\u77E5\u8BC6\u3002` |\n| **Qoder**          | \u6DFB\u52A0\u5230 `.qoder/config.yml` \u6216\u5728\u5BF9\u8BDD\u4E2D\u4F7F\u7528 `@docs`\u3002[\u6587\u6863](https://docs.qoder.com/)                                                                     | `\u9605\u8BFB https://ng-alain.com/llms-full-cn.txt \u5E76\u7406\u89E3 @delon/* \u7EC4\u4EF6\u5E93\uFF0C\u5728\u7F16\u5199 @delon/* \u4EE3\u7801\u65F6\u4F7F\u7528\u8FD9\u4E9B\u77E5\u8BC6\u3002` |\n| **Neovate Code**   | \u8FD0\u884C `neovate` \u5E76\u4F7F\u7528\u63D0\u793A\u8BCD\u63CF\u8FF0\u4EFB\u52A1\u3002[\u6587\u6863](https://github.com/neovateai/neovate-code)                                                                 | `\u9605\u8BFB https://ng-alain.com/llms-full-cn.txt \u5E76\u7406\u89E3 @delon/* \u7EC4\u4EF6\u5E93\uFF0C\u5728\u7F16\u5199 @delon/* \u4EE3\u7801\u65F6\u4F7F\u7528\u8FD9\u4E9B\u77E5\u8BC6\u3002` |"}}};codes=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=o({type:n,selectors:[["docs-llms"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&i(0,"app-docs",0),e&2&&a("codes",t.codes)("item",t.item)},dependencies:[r],encapsulation:2})};var x=class n{item={name:"mock",langs:["zh-CN"],content:{"zh-CN":{meta:{order:60,title:"Mock",redirect:"/mock/getting-started",description:"",group:"Advance",path:"docs/mock.md",url:"/docs/mock/zh"},text:"",api:"",toc:[],raw:`---
order: 60
title: Mock
type: Advance
redirect: /mock/getting-started
---`}}};codes=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=o({type:n,selectors:[["docs-mock"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&i(0,"app-docs",0),e&2&&a("codes",t.codes)("item",t.item)},dependencies:[r],encapsulation:2})};var C=class n{item={name:"module",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:30,title:"Module Guidelines",description:"The AppModule, CoreModule, and SharedModule modules have not been used very clearly, and it is easy to use them. The goal of the Angular module is to ...",group:"Other",path:"docs/module.en-US.md",url:"/docs/module/en"},text:`<p>The <code>AppModule</code>, <code>CoreModule</code>, and <code>SharedModule</code> modules have not been used very clearly, and it is easy to use them. The goal of the Angular module is to make components, instructions, services, and pipeline function blocks more cohesive, and each functional area forms a separate set of business domains or utilities.</p>
<h2 id="1_classification_description"><a class="lake-link"><i data-anchor="1_classification_description"></i></a>1) Classification description</h2><hr>
<h3 id="appmodule"><a class="lake-link"><i data-anchor="appmodule"></i></a>AppModule</h3><p>The root module is used to guide Angular startup. It is very suitable for importing some modules that need to be used everywhere in the application. Such as: theme system, user master authentication module, permission module, global HTTP interceptors, international services, etc..</p>
<h3 id="coremodule"><a class="lake-link"><i data-anchor="coremodule"></i></a>CoreModule</h3><p>The core module will only be imported once. It is equivalent to <code>AppModule</code>, but we should treat it as a <strong>pure service class module</strong>. For example: message, data access, etc.</p>
<h3 id="sharedmodule"><a class="lake-link"><i data-anchor="sharedmodule"></i></a>SharedModule</h3><p>We call it a shared module. It should not have <code>providers</code> because <code>ShareModule</code> will be imported in all business modules. Which will cause the service to be overwritten.</p>
<p>NG-ZORRO, &#64;delon/abc, &#64;delon/chart, etc. have changed from all import to on-demand import since version 11. For this reason, NG-ALAIN has refined two files <code>shared-delon.module.ts</code> and <code>shared -zorro.module.ts</code> merges some modules frequently used throughout the project into a module called <code>SharedModule</code>, which is why it is necessary to import it in the business module for the first time. Although this method can reduce unnecessary import code, it will also cause compilation speed. Therefore, it is not recommended to put all components into <code>SharedModule</code>, and try to put the modules that need to be used more than three times before putting them here; Otherwise, you must import it yourself in the business module.</p>
<h2 id="2_recommendation"><a class="lake-link"><i data-anchor="2_recommendation"></i></a>2) Recommendation</h2><hr>
<h3 id="appmodule"><a class="lake-link"><i data-anchor="appmodule"></i></a>AppModule</h3><p><strong>Should</strong> import module:</p>
<ul>
<li>Angular Module: <code>BrowserModule</code>, <code>BrowserAnimationsModule</code>, <code>HttpClientModule</code></li>
<li><code>AlainThemeModule</code> Theme system</li>
<li><code>AlainAuthModule</code> User authentication module</li>
<li><code>AlainACLModule</code> Privilege module</li>
<li>Internationalization module</li>
</ul>
<p><strong>Should</strong> include services:</p>
<ul>
<li>Angular globalization</li>
<li>HTTP interceptor</li>
<li>Angular start service</li>
<li><code>ng-zorro-antd</code> Basic component service</li>
<li><code>&#64;delon/abc</code> Business component service</li>
</ul>
<p><strong>Role:</strong> Throughout the definition of the entire application.</p>
<hr>
<h3 id="coremodule"><a class="lake-link"><i data-anchor="coremodule"></i></a>CoreModule</h3><p><strong>Should</strong> only leave the <code>providers</code> attribute.</p>
<p><strong>Role:</strong> Some common services. such as: user messages, HTTP data access.</p>
<hr>
<h3 id="sharemodule"><a class="lake-link"><i data-anchor="sharemodule"></i></a>ShareModule</h3><p><strong>Should</strong> contain definitions:</p>
<ul>
<li>Apply generic custom business components</li>
</ul>
<p><strong>Should</strong> import module:</p>
<ul>
<li>Angular generic module:<code>CommonModule</code>\u3001<code>FormsModule</code>\u3001<code>RouterModule</code>\u3001<code>ReactiveFormsModule</code></li>
<li><code>ng-zorro-antd</code> Basic component module</li>
<li><code>&#64;delon/abc</code> Business component module</li>
<li>Third-party generic dependency component module</li>
</ul>
<p><strong>Should</strong> Export all included modules.</p>
<p><strong>Should not</strong> have <code>providers</code> attribute.</p>
<p><strong>Function:</strong> Some common custom, third-party component definitions, reducing the import of business modules.</p>
<hr>
<h3 id="business_module"><a class="lake-link"><i data-anchor="business_module"></i></a>Business module</h3><p>The business module should include a business definition module and a routing module.</p>
<p><strong>Should</strong> import module:</p>
<ul>
<li><code>SharedModule</code></li>
<li>Corresponding routing module</li>
</ul>
<p><strong>Should not</strong>:</p>
<ul>
<li>Export any component</li>
<li>Try not to use the <code>providers</code> attribute</li>
</ul>
<p><strong>Route module</strong></p>
<p><strong>Should</strong> include only the <code>import</code>, <code>exports</code> modules of the route.</p>
`,api:"",toc:[{id:"1_classification_description",title:"1) Classification description",children:[{id:"appmodule",title:"AppModule"},{id:"coremodule",title:"CoreModule"},{id:"sharedmodule",title:"SharedModule"}]},{id:"2_recommendation",title:"2) Recommendation",children:[{id:"appmodule",title:"AppModule"},{id:"coremodule",title:"CoreModule"},{id:"sharemodule",title:"ShareModule"},{id:"business_module",title:"Business module"}]}],raw:`---
order: 30
title:
  en-US: Module Guidelines
  zh-CN: \u6A21\u5757\u6CE8\u518C\u6307\u5BFC\u539F\u5219
type: Other
---

The \`AppModule\`, \`CoreModule\`, and \`SharedModule\` modules have not been used very clearly, and it is easy to use them. The goal of the Angular module is to make components, instructions, services, and pipeline function blocks more cohesive, and each functional area forms a separate set of business domains or utilities.

## 1) Classification description

------------

### AppModule

The root module is used to guide Angular startup. It is very suitable for importing some modules that need to be used everywhere in the application. Such as: theme system, user master authentication module, permission module, global HTTP interceptors, international services, etc..

### CoreModule

The core module will only be imported once. It is equivalent to \`AppModule\`, but we should treat it as a **pure service class module**. For example: message, data access, etc.

### SharedModule

We call it a shared module. It should not have \`providers\` because \`ShareModule\` will be imported in all business modules. Which will cause the service to be overwritten.

NG-ZORRO, @delon/abc, @delon/chart, etc. have changed from all import to on-demand import since version 11. For this reason, NG-ALAIN has refined two files \`shared-delon.module.ts\` and \`shared -zorro.module.ts\` merges some modules frequently used throughout the project into a module called \`SharedModule\`, which is why it is necessary to import it in the business module for the first time. Although this method can reduce unnecessary import code, it will also cause compilation speed. Therefore, it is not recommended to put all components into \`SharedModule\`, and try to put the modules that need to be used more than three times before putting them here; Otherwise, you must import it yourself in the business module.

## 2) Recommendation

------------

### AppModule

**Should** import module:

+ Angular Module: \`BrowserModule\`, \`BrowserAnimationsModule\`, \`HttpClientModule\`
+ \`AlainThemeModule\` Theme system
+ \`AlainAuthModule\` User authentication module
+ \`AlainACLModule\` Privilege module
+ Internationalization module

**Should** include services:

+ Angular globalization
+ HTTP interceptor
+ Angular start service
+ \`ng-zorro-antd\` Basic component service
+ \`@delon/abc\` Business component service

**Role:** Throughout the definition of the entire application.

------------

### CoreModule

**Should** only leave the \`providers\` attribute.

**Role:** Some common services. such as: user messages, HTTP data access.

------------

### ShareModule

**Should** contain definitions:

+ Apply generic custom business components

**Should** import module:

+ Angular generic module:\`CommonModule\`\u3001\`FormsModule\`\u3001\`RouterModule\`\u3001\`ReactiveFormsModule\`
+ \`ng-zorro-antd\` Basic component module
+ \`@delon/abc\` Business component module
+ Third-party generic dependency component module

**Should** Export all included modules.

**Should not** have \`providers\` attribute.

**Function:** Some common custom, third-party component definitions, reducing the import of business modules.

------------

### Business module

The business module should include a business definition module and a routing module.

**Should** import module:

+ \`SharedModule\`
+ Corresponding routing module

**Should not**:

+ Export any component
+ Try not to use the \`providers\` attribute

**Route module**

**Should** include only the \`import\`, \`exports\` modules of the route.`},"zh-CN":{meta:{order:30,title:"\u6A21\u5757\u6CE8\u518C\u6307\u5BFC\u539F\u5219",description:"\u4E00\u76F4\u4EE5\u6765 AppModule\u3001CoreModule\u3001SharedModule \u6A21\u5757\u4F7F\u7528\u6CA1\u6709\u5F88\u660E\u786E\u7684\u89C4\u8303\uFF0C\u5F88\u5BB9\u6613\u8BA9\u4EA7\u751F\u4E71\u7528\u3002Angular\u6A21\u5757\u76EE\u6807\u662F\u4E3A\u4E86\u4F7F\u7EC4\u4EF6\u3001\u6307\u4EE4\u3001\u670D\u52A1\u548C\u7BA1\u9053\u529F\u80FD\u5757\u66F4\u5185\u805A\uFF0C\u5E76\u6BCF\u4E00\u4E2A\u529F\u80FD\u533A\u57DF\u5F62\u6210\u72EC\u7ACB\u7684\u4E1A\u52A1\u9886\u57DF\u6216\u5B9E\u7528\u5DE5\u5177\u7684\u96C6\u5408\u3002\u6839\u6A21\u5757\uFF0C\u7528\u4E8E\u5F15\u5BFC Angular \u542F\u52A8\uFF1B\u5B83\u975E\u5E38\u9002\u5408\u5BFC\u5165\u4E00\u4E9B\u9700...",group:"Other",path:"docs/module.zh-CN.md",url:"/docs/module/zh"},text:`<p>\u4E00\u76F4\u4EE5\u6765 <code>AppModule</code>\u3001<code>CoreModule</code>\u3001<code>SharedModule</code> \u6A21\u5757\u4F7F\u7528\u6CA1\u6709\u5F88\u660E\u786E\u7684\u89C4\u8303\uFF0C\u5F88\u5BB9\u6613\u8BA9\u4EA7\u751F\u4E71\u7528\u3002Angular\u6A21\u5757\u76EE\u6807\u662F\u4E3A\u4E86\u4F7F\u7EC4\u4EF6\u3001\u6307\u4EE4\u3001\u670D\u52A1\u548C\u7BA1\u9053\u529F\u80FD\u5757\u66F4\u5185\u805A\uFF0C\u5E76\u6BCF\u4E00\u4E2A\u529F\u80FD\u533A\u57DF\u5F62\u6210\u72EC\u7ACB\u7684\u4E1A\u52A1\u9886\u57DF\u6216\u5B9E\u7528\u5DE5\u5177\u7684\u96C6\u5408\u3002</p>
<h2 id="1_\u5206\u7C7B\u8BF4\u660E"><a class="lake-link"><i data-anchor="1_\u5206\u7C7B\u8BF4\u660E"></i></a>1) \u5206\u7C7B\u8BF4\u660E</h2><hr>
<h3 id="appmodule"><a class="lake-link"><i data-anchor="appmodule"></i></a>AppModule</h3><p>\u6839\u6A21\u5757\uFF0C\u7528\u4E8E\u5F15\u5BFC Angular \u542F\u52A8\uFF1B\u5B83\u975E\u5E38\u9002\u5408\u5BFC\u5165\u4E00\u4E9B\u9700\u8981\u5728\u6574\u4E2A\u5E94\u7528\u5230\u5904\u9700\u8981\u7684\u6A21\u5757\uFF0C\u4F8B\u5982\uFF1A\u4E3B\u9898\u7CFB\u7EDF\u3001\u7528\u6237\u4E3B\u8BA4\u8BC1\u6A21\u5757\u3001\u6743\u9650\u6A21\u5757\u7B49\u6A21\u5757\uFF0C\u4EE5\u53CA\u4E00\u4E9B\u5168\u5C40\u6027HTTP\u62E6\u622A\u5668\u3001\u56FD\u9645\u5316\u670D\u52A1\u7B49\u3002</p>
<h3 id="coremodule"><a class="lake-link"><i data-anchor="coremodule"></i></a>CoreModule</h3><p>\u6838\u5FC3\u6A21\u5757\u53EA\u4F1A\u88AB\u5BFC\u5165\u4E00\u6B21\uFF0C\u5B83\u7B49\u540C <code>AppModule</code>\uFF0C\u4F46\u6211\u4EEC\u66F4\u5E94\u8BE5\u628A\u5B83\u5F53\u6210\u4E00\u4E2A<strong>\u7EAF\u670D\u52A1\u7C7B\u6A21\u5757</strong>\uFF0C\u4F8B\u5982\uFF1A\u6D88\u606F\u3001\u6570\u636E\u8BBF\u95EE\u7B49\u3002</p>
<h3 id="sharedmodule"><a class="lake-link"><i data-anchor="sharedmodule"></i></a>SharedModule</h3><p>\u6211\u4EEC\u53EB\u5B83\u5171\u4EAB\u6A21\u5757\uFF1B\u5B83\u4E0D\u5E94\u8BE5\u51FA\u73B0 <code>providers</code>\uFF0C\u56E0\u4E3A <code>ShareModule</code> \u4F1A\u5728\u6240\u6709\u4E1A\u52A1\u6A21\u5757\u4E2D\u88AB\u5BFC\u5165\uFF0C\u8FD9\u4F1A\u5BFC\u81F4\u670D\u52A1\u88AB\u8986\u76D6\u3002</p>
<p>NG-ZORRO\u3001&#64;delon/abc\u3001&#64;delon/chart \u7B49\u4ECE\u7248\u672C11\u5F00\u59CB\u7531\u4E00\u6B21\u6027\u5BFC\u5165\u6539\u6210\u6309\u9700\u5BFC\u5165\uFF0C\u4E3A\u6B64 NG-ALAIN \u63D0\u70BC\u4E86\u4E24\u4E2A\u6587\u4EF6 <code>shared-delon.module.ts</code>\u3001<code>shared-zorro.module.ts</code> \u5C06\u4E00\u4E9B\u6574\u4E2A\u9879\u76EE\u7ECF\u5E38\u7528\u5230\u7684\u6A21\u5757\u5408\u5E76\u6210\u4E00\u4E2A\u53EB <code>SharedModule</code> \u6A21\u5757\u5185\uFF0C\u8FD9\u4E5F\u5C31\u662F\u4E3A\u4EC0\u4E48\u9700\u8981\u5728\u4E1A\u52A1\u6A21\u5757\u5185\u7B2C\u4E00\u65F6\u95F4\u5BFC\u5165\u5B83\u3002\u867D\u7136\u8FD9\u79CD\u65B9\u5F0F\u53EF\u4EE5\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u5BFC\u5165\u4EE3\u7801\uFF0C\u4F46\u540C\u65F6\u4E5F\u4F1A\u5F15\u8D77\u7F16\u8BD1\u901F\u5EA6\uFF0C\u56E0\u6B64\u4E0D\u5EFA\u8BAE\u628A\u6240\u6709\u7EC4\u4EF6\u90FD\u653E\u8FDB <code>SharedModule</code> \u5185\uFF0C\u5C3D\u53EF\u80FD\u5C06\u9700\u8981\u7528\u5230\u7684\u6A21\u5757\u4E09\u6B21\u4EE5\u4E0A\u4F7F\u7528\u624D\u653E\u8FDB\u8FD9\u91CC\uFF1B\u5426\u5219\u52A1\u5FC5\u5728\u4E1A\u52A1\u6A21\u5757\u5185\u81EA\u884C\u5BFC\u5165\u3002</p>
<h2 id="2_\u5EFA\u8BAE"><a class="lake-link"><i data-anchor="2_\u5EFA\u8BAE"></i></a>2) \u5EFA\u8BAE</h2><hr>
<h3 id="appmodule"><a class="lake-link"><i data-anchor="appmodule"></i></a>AppModule</h3><p><strong>\u5E94</strong> \u5BFC\u5165\u6A21\u5757\uFF1A</p>
<ul>
<li>Angular \u6A21\u5757\uFF1A<code>BrowserModule</code>\u3001<code>BrowserAnimationsModule</code>\u3001<code>HttpClientModule</code></li>
<li><code>AlainThemeModule</code> \u4E3B\u9898\u7CFB\u7EDF</li>
<li><code>AlainAuthModule</code> \u7528\u6237\u8BA4\u8BC1\u6A21\u5757</li>
<li><code>AlainACLModule</code> \u6743\u9650\u6A21\u5757</li>
<li>\u56FD\u9645\u5316\u6A21\u5757</li>
</ul>
<p><strong>\u5E94</strong> \u5305\u542B\u670D\u52A1\uFF1A</p>
<ul>
<li>Angular \u56FD\u9645\u5316</li>
<li>HTTP \u62E6\u622A\u5668</li>
<li>Angular \u542F\u52A8\u670D\u52A1</li>
<li><code>ng-zorro-antd</code> \u57FA\u7840\u7EC4\u4EF6\u670D\u52A1</li>
<li><code>&#64;delon/abc</code> \u4E1A\u52A1\u7EC4\u4EF6\u670D\u52A1</li>
</ul>
<p><strong>\u4F5C\u7528\uFF1A</strong> \u8D2F\u7A7F\u6574\u4E2A\u5E94\u7528\u7684\u5B9A\u4E49\u3002</p>
<hr>
<h3 id="coremodule"><a class="lake-link"><i data-anchor="coremodule"></i></a>CoreModule</h3><p><strong>\u5E94</strong> \u4EC5\u53EA\u7559 <code>providers</code> \u5C5E\u6027\u3002</p>
<p><strong>\u4F5C\u7528\uFF1A</strong>  \u4E00\u4E9B\u901A\u7528\u670D\u52A1\uFF0C\u4F8B\u5982\uFF1A\u7528\u6237\u6D88\u606F\u3001HTTP\u6570\u636E\u8BBF\u95EE\u3002</p>
<hr>
<h3 id="sharemodule"><a class="lake-link"><i data-anchor="sharemodule"></i></a>ShareModule</h3><p><strong>\u5E94</strong> \u5305\u542B\u5B9A\u4E49\uFF1A</p>
<ul>
<li>\u5E94\u7528\u901A\u7528\u81EA\u5B9A\u4E49\u4E1A\u52A1\u7EC4\u4EF6</li>
</ul>
<p><strong>\u5E94</strong> \u5BFC\u5165\u6A21\u5757\uFF1A</p>
<ul>
<li>Angular \u901A\u7528\u6A21\u5757\uFF1A<code>CommonModule</code>\u3001<code>FormsModule</code>\u3001<code>RouterModule</code>\u3001<code>ReactiveFormsModule</code></li>
<li><code>ng-zorro-antd</code> \u57FA\u7840\u7EC4\u4EF6\u6A21\u5757</li>
<li><code>&#64;delon/abc</code> \u4E1A\u52A1\u7EC4\u4EF6\u6A21\u5757</li>
<li>\u7B2C\u4E09\u65B9\u901A\u7528\u4F9D\u8D56\u7EC4\u4EF6\u6A21\u5757</li>
</ul>
<p><strong>\u5E94</strong> \u5BFC\u51FA\u6240\u6709\u5305\u542B\u7684\u6A21\u5757\u3002</p>
<p><strong>\u4E0D\u5E94</strong> \u6709 <code>providers</code> \u5C5E\u6027\u3002</p>
<p><strong>\u4F5C\u7528\uFF1A</strong>  \u4E00\u4E9B\u901A\u7528\u81EA\u5B9A\u4E49\u3001\u7B2C\u4E09\u65B9\u7EC4\u4EF6\u5B9A\u4E49\uFF0C\u51CF\u5C11\u4E1A\u52A1\u6A21\u5757\u7684\u5BFC\u5165\u3002</p>
<hr>
<h3 id="\u4E1A\u52A1\u6A21\u5757"><a class="lake-link"><i data-anchor="\u4E1A\u52A1\u6A21\u5757"></i></a>\u4E1A\u52A1\u6A21\u5757</h3><p>\u4E1A\u52A1\u6A21\u5757\u5E94\u8BE5\u5305\u62EC\u4E1A\u52A1\u5B9A\u4E49\u6A21\u5757\u548C\u8DEF\u7531\u6A21\u5757\u3002</p>
<p><strong>\u6A21\u5757</strong></p>
<p><strong>\u5E94</strong> \u5BFC\u5165\u6A21\u5757\uFF1A</p>
<ul>
<li><code>SharedModule</code></li>
<li>\u5BF9\u5E94\u7684\u8DEF\u7531\u6A21\u5757</li>
</ul>
<p><strong>\u4E0D\u5E94</strong>\uFF1A</p>
<ul>
<li>\u5BFC\u51FA\u4EFB\u4F55\u7EC4\u4EF6</li>
<li>\u5C3D\u53EF\u80FD\u4E0D\u8981\u4F7F\u7528 <code>providers</code> \u5C5E\u6027</li>
</ul>
<p><strong>\u8DEF\u7531\u6A21\u5757</strong></p>
<p><strong>\u5E94</strong> \u53EA\u5305\u62EC\u8DEF\u7531\u7684 <code>import</code>\u3001<code>exports</code> \u6A21\u5757\u3002</p>
`,api:"",toc:[{id:"1_\u5206\u7C7B\u8BF4\u660E",title:"1) \u5206\u7C7B\u8BF4\u660E",children:[{id:"appmodule",title:"AppModule"},{id:"coremodule",title:"CoreModule"},{id:"sharedmodule",title:"SharedModule"}]},{id:"2_\u5EFA\u8BAE",title:"2) \u5EFA\u8BAE",children:[{id:"appmodule",title:"AppModule"},{id:"coremodule",title:"CoreModule"},{id:"sharemodule",title:"ShareModule"},{id:"\u4E1A\u52A1\u6A21\u5757",title:"\u4E1A\u52A1\u6A21\u5757"}]}],raw:`---
order: 30
title:
  en-US: Module Guidelines
  zh-CN: \u6A21\u5757\u6CE8\u518C\u6307\u5BFC\u539F\u5219
type: Other
---

\u4E00\u76F4\u4EE5\u6765 \`AppModule\`\u3001\`CoreModule\`\u3001\`SharedModule\` \u6A21\u5757\u4F7F\u7528\u6CA1\u6709\u5F88\u660E\u786E\u7684\u89C4\u8303\uFF0C\u5F88\u5BB9\u6613\u8BA9\u4EA7\u751F\u4E71\u7528\u3002Angular\u6A21\u5757\u76EE\u6807\u662F\u4E3A\u4E86\u4F7F\u7EC4\u4EF6\u3001\u6307\u4EE4\u3001\u670D\u52A1\u548C\u7BA1\u9053\u529F\u80FD\u5757\u66F4\u5185\u805A\uFF0C\u5E76\u6BCF\u4E00\u4E2A\u529F\u80FD\u533A\u57DF\u5F62\u6210\u72EC\u7ACB\u7684\u4E1A\u52A1\u9886\u57DF\u6216\u5B9E\u7528\u5DE5\u5177\u7684\u96C6\u5408\u3002

## 1) \u5206\u7C7B\u8BF4\u660E

------------

### AppModule

\u6839\u6A21\u5757\uFF0C\u7528\u4E8E\u5F15\u5BFC Angular \u542F\u52A8\uFF1B\u5B83\u975E\u5E38\u9002\u5408\u5BFC\u5165\u4E00\u4E9B\u9700\u8981\u5728\u6574\u4E2A\u5E94\u7528\u5230\u5904\u9700\u8981\u7684\u6A21\u5757\uFF0C\u4F8B\u5982\uFF1A\u4E3B\u9898\u7CFB\u7EDF\u3001\u7528\u6237\u4E3B\u8BA4\u8BC1\u6A21\u5757\u3001\u6743\u9650\u6A21\u5757\u7B49\u6A21\u5757\uFF0C\u4EE5\u53CA\u4E00\u4E9B\u5168\u5C40\u6027HTTP\u62E6\u622A\u5668\u3001\u56FD\u9645\u5316\u670D\u52A1\u7B49\u3002

### CoreModule

\u6838\u5FC3\u6A21\u5757\u53EA\u4F1A\u88AB\u5BFC\u5165\u4E00\u6B21\uFF0C\u5B83\u7B49\u540C \`AppModule\`\uFF0C\u4F46\u6211\u4EEC\u66F4\u5E94\u8BE5\u628A\u5B83\u5F53\u6210\u4E00\u4E2A**\u7EAF\u670D\u52A1\u7C7B\u6A21\u5757**\uFF0C\u4F8B\u5982\uFF1A\u6D88\u606F\u3001\u6570\u636E\u8BBF\u95EE\u7B49\u3002

### SharedModule

\u6211\u4EEC\u53EB\u5B83\u5171\u4EAB\u6A21\u5757\uFF1B\u5B83\u4E0D\u5E94\u8BE5\u51FA\u73B0 \`providers\`\uFF0C\u56E0\u4E3A \`ShareModule\` \u4F1A\u5728\u6240\u6709\u4E1A\u52A1\u6A21\u5757\u4E2D\u88AB\u5BFC\u5165\uFF0C\u8FD9\u4F1A\u5BFC\u81F4\u670D\u52A1\u88AB\u8986\u76D6\u3002

NG-ZORRO\u3001@delon/abc\u3001@delon/chart \u7B49\u4ECE\u7248\u672C11\u5F00\u59CB\u7531\u4E00\u6B21\u6027\u5BFC\u5165\u6539\u6210\u6309\u9700\u5BFC\u5165\uFF0C\u4E3A\u6B64 NG-ALAIN \u63D0\u70BC\u4E86\u4E24\u4E2A\u6587\u4EF6 \`shared-delon.module.ts\`\u3001\`shared-zorro.module.ts\` \u5C06\u4E00\u4E9B\u6574\u4E2A\u9879\u76EE\u7ECF\u5E38\u7528\u5230\u7684\u6A21\u5757\u5408\u5E76\u6210\u4E00\u4E2A\u53EB \`SharedModule\` \u6A21\u5757\u5185\uFF0C\u8FD9\u4E5F\u5C31\u662F\u4E3A\u4EC0\u4E48\u9700\u8981\u5728\u4E1A\u52A1\u6A21\u5757\u5185\u7B2C\u4E00\u65F6\u95F4\u5BFC\u5165\u5B83\u3002\u867D\u7136\u8FD9\u79CD\u65B9\u5F0F\u53EF\u4EE5\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u5BFC\u5165\u4EE3\u7801\uFF0C\u4F46\u540C\u65F6\u4E5F\u4F1A\u5F15\u8D77\u7F16\u8BD1\u901F\u5EA6\uFF0C\u56E0\u6B64\u4E0D\u5EFA\u8BAE\u628A\u6240\u6709\u7EC4\u4EF6\u90FD\u653E\u8FDB \`SharedModule\` \u5185\uFF0C\u5C3D\u53EF\u80FD\u5C06\u9700\u8981\u7528\u5230\u7684\u6A21\u5757\u4E09\u6B21\u4EE5\u4E0A\u4F7F\u7528\u624D\u653E\u8FDB\u8FD9\u91CC\uFF1B\u5426\u5219\u52A1\u5FC5\u5728\u4E1A\u52A1\u6A21\u5757\u5185\u81EA\u884C\u5BFC\u5165\u3002

## 2) \u5EFA\u8BAE

------------

### AppModule

**\u5E94** \u5BFC\u5165\u6A21\u5757\uFF1A

+ Angular \u6A21\u5757\uFF1A\`BrowserModule\`\u3001\`BrowserAnimationsModule\`\u3001\`HttpClientModule\`
+ \`AlainThemeModule\` \u4E3B\u9898\u7CFB\u7EDF
+ \`AlainAuthModule\` \u7528\u6237\u8BA4\u8BC1\u6A21\u5757
+ \`AlainACLModule\` \u6743\u9650\u6A21\u5757
+ \u56FD\u9645\u5316\u6A21\u5757

**\u5E94** \u5305\u542B\u670D\u52A1\uFF1A

+ Angular \u56FD\u9645\u5316
+ HTTP \u62E6\u622A\u5668
+ Angular \u542F\u52A8\u670D\u52A1
+ \`ng-zorro-antd\` \u57FA\u7840\u7EC4\u4EF6\u670D\u52A1
+ \`@delon/abc\` \u4E1A\u52A1\u7EC4\u4EF6\u670D\u52A1

**\u4F5C\u7528\uFF1A** \u8D2F\u7A7F\u6574\u4E2A\u5E94\u7528\u7684\u5B9A\u4E49\u3002

------------

### CoreModule

**\u5E94** \u4EC5\u53EA\u7559 \`providers\` \u5C5E\u6027\u3002

**\u4F5C\u7528\uFF1A**  \u4E00\u4E9B\u901A\u7528\u670D\u52A1\uFF0C\u4F8B\u5982\uFF1A\u7528\u6237\u6D88\u606F\u3001HTTP\u6570\u636E\u8BBF\u95EE\u3002

------------

### ShareModule

**\u5E94** \u5305\u542B\u5B9A\u4E49\uFF1A

+ \u5E94\u7528\u901A\u7528\u81EA\u5B9A\u4E49\u4E1A\u52A1\u7EC4\u4EF6

**\u5E94** \u5BFC\u5165\u6A21\u5757\uFF1A

+ Angular \u901A\u7528\u6A21\u5757\uFF1A\`CommonModule\`\u3001\`FormsModule\`\u3001\`RouterModule\`\u3001\`ReactiveFormsModule\`
+ \`ng-zorro-antd\` \u57FA\u7840\u7EC4\u4EF6\u6A21\u5757
+ \`@delon/abc\` \u4E1A\u52A1\u7EC4\u4EF6\u6A21\u5757
+ \u7B2C\u4E09\u65B9\u901A\u7528\u4F9D\u8D56\u7EC4\u4EF6\u6A21\u5757

**\u5E94** \u5BFC\u51FA\u6240\u6709\u5305\u542B\u7684\u6A21\u5757\u3002

**\u4E0D\u5E94** \u6709 \`providers\` \u5C5E\u6027\u3002

**\u4F5C\u7528\uFF1A**  \u4E00\u4E9B\u901A\u7528\u81EA\u5B9A\u4E49\u3001\u7B2C\u4E09\u65B9\u7EC4\u4EF6\u5B9A\u4E49\uFF0C\u51CF\u5C11\u4E1A\u52A1\u6A21\u5757\u7684\u5BFC\u5165\u3002

------------

### \u4E1A\u52A1\u6A21\u5757

\u4E1A\u52A1\u6A21\u5757\u5E94\u8BE5\u5305\u62EC\u4E1A\u52A1\u5B9A\u4E49\u6A21\u5757\u548C\u8DEF\u7531\u6A21\u5757\u3002

**\u6A21\u5757**

**\u5E94** \u5BFC\u5165\u6A21\u5757\uFF1A

+ \`SharedModule\`
+ \u5BF9\u5E94\u7684\u8DEF\u7531\u6A21\u5757

**\u4E0D\u5E94**\uFF1A

+ \u5BFC\u51FA\u4EFB\u4F55\u7EC4\u4EF6
+ \u5C3D\u53EF\u80FD\u4E0D\u8981\u4F7F\u7528 \`providers\` \u5C5E\u6027

**\u8DEF\u7531\u6A21\u5757**

**\u5E94** \u53EA\u5305\u62EC\u8DEF\u7531\u7684 \`import\`\u3001\`exports\` \u6A21\u5757\u3002`}}};codes=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=o({type:n,selectors:[["docs-module"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&i(0,"app-docs",0),e&2&&a("codes",t.codes)("item",t.item)},dependencies:[r],encapsulation:2})};var S=class n{item={name:"new-component",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:20,title:"New Component",description:"For some functional modules that may be referenced in multiple places, it is recommended to refine the management into unified management of business ...",group:"Dev",path:"docs/new-component.en-US.md",url:"/docs/new-component/en"},text:`<p>For some functional modules that may be referenced in multiple places, it is recommended to refine the management into unified management of business components. These components generally have the following characteristics:</p>
<ul>
<li>Only responsible for a relatively independent, stable function;</li>
<li>no separate routing configuration;</li>
<li>May be purely static, controlled only by parameters passed by the parent component (usually a page).</li>
</ul>
<p>Let&#39;s take a simple static component as an example. Suppose your app often needs to display images. These images are fixed in width, have a gray background and a certain padding, and have text descriptions, like the following:</p>
<p><img src="https://gw.alipayobjects.com/zos/rmsportal/vcRltFiKfHBHFrUcsTtW.png" alt="" width="400" loading="lazy"></p>
<p>You can do this with a component that has a default style and can receive the parameters passed by the parent component for display.</p>
<h2 id="create_a_new_file"><a class="lake-link"><i data-anchor="create_a_new_file"></i></a>Create a new file</h2><p>Create a new folder named <code>components</code> under <code>src/app/shared</code>. Create folder called <code>image-wrapper</code> and component file. If required add ts files <code>index.ts</code> and style files <code>index.less</code>. Provide <code>README.md</code> for component API descriptions in this folder.</p>
<blockquote>
<p>When using components, the default is to look for the export object in <code>index.ts</code>. If your component is more complex, you can split it into multiple files, and finally unify the export in <code>index.ts</code>, like this:</p>
</blockquote>
<blockquote>
<pre><code class="language-ts">// main.component.ts
export class MainComponent &#123;&#125;

// sub.component.ts
export class SubComponent &#123;&#125;

// index.ts
export MainComponent from &#39;./main.component&#39;;
export SubComponent from &#39;./sub.component&#39;;
</code></pre>
</blockquote>
<p>Your code is probably like this:</p>
<pre><code class="language-ts">// index.ts
import &#123; Component, Input &#125; from &#39;&#64;angular/core&#39;;

&#64;Component(&#123;
  selector: &#39;image-wrapper&#39;,
  template: \`
    &lt;div [ngStyle]=&quot;style&quot;&gt;
      &lt;img class=&quot;img&quot; [src]=&quot;src&quot; [alt]=&quot;desc&quot; /&gt;
      &#64;if (desc) &#123;
        &lt;div class=&quot;desc&quot;&gt;&#123;&#123; desc &#125;&#125;&lt;/div&gt;
      &#125;
    &lt;/div&gt;
  \`,
  styleUrls: [ &#39;./index.less&#39; ]
&#125;)
export class ImageWrapperComponent &#123;
  &#64;Input() style: &#123; [key: string]: string &#125;;
  &#64;Input() src: string;
  &#64;Input() desc: string;
&#125;
</code></pre>
<pre><code class="language-less">// index.less
:host &#123;
  width: 400px;
  margin: 0 auto;
  padding: 0 20px 8px;
  text-align: center;
  background: #f2f4f5;

  ::ng-deep &#123;
    .img &#123;
      max-width: calc(100% - 32px);
      margin: 2.4em 1em;
      vertical-align: middle;
      box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
    &#125;
  &#125;
&#125;
</code></pre>
<p>The components are built here, to learn more about the development of <a href="/theme/component-styles">component styles</a>.</p>
<h2 id="register"><a class="lake-link"><i data-anchor="register"></i></a>Register</h2><p>Once the component is created, you need to import the component into <code>SharedModule</code> so that all submodules can use it.</p>
<pre><code class="language-ts">// shared.module.ts
import &#123; ImageWrapperComponent &#125; from &#39;./image-wrapper&#39;;
const COMPONENTS = [
  ImageWrapperComponent
];
</code></pre>
<h2 id="use"><a class="lake-link"><i data-anchor="use"></i></a>Use</h2><p>Where you want to use this component, just follow the component-defined API input parameters and use it directly:</p>
<pre><code class="language-html">&lt;image-wrapper
  src=&quot;https://os.alipayobjects.com/rmsportal/mgesTPFxodmIwpi.png&quot;
  desc=&quot;schematic-diagram&quot;&gt;&lt;/image-wrapper&gt;
</code></pre>
`,api:"",toc:[{id:"create_a_new_file",title:"Create a new file"},{id:"register",title:"Register"},{id:"use",title:"Use"}],raw:`---
order: 20
title:
  en-US: New Component
  zh-CN: \u65B0\u589E\u4E1A\u52A1\u7EC4\u4EF6
type: Dev
---

For some functional modules that may be referenced in multiple places, it is recommended to refine the management into unified management of business components. These components generally have the following characteristics:

- Only responsible for a relatively independent, stable function;
- no separate routing configuration;
- May be purely static, controlled only by parameters passed by the parent component (usually a page).

Let's take a simple static component as an example. Suppose your app often needs to display images. These images are fixed in width, have a gray background and a certain padding, and have text descriptions, like the following:

![](https://gw.alipayobjects.com/zos/rmsportal/vcRltFiKfHBHFrUcsTtW.png | width=400)

You can do this with a component that has a default style and can receive the parameters passed by the parent component for display.

## Create a new file

Create a new folder named \`components\` under \`src/app/shared\`. Create folder called \`image-wrapper\` and component file. If required add ts files \`index.ts\` and style files \`index.less\`. Provide \`README.md\` for component API descriptions in this folder.

> When using components, the default is to look for the export object in \`index.ts\`. If your component is more complex, you can split it into multiple files, and finally unify the export in \`index.ts\`, like this:

> \`\`\`ts
> // main.component.ts
> export class MainComponent {}
>
> // sub.component.ts
> export class SubComponent {}
>
> // index.ts
> export MainComponent from './main.component';
> export SubComponent from './sub.component';
> \`\`\`

Your code is probably like this:

\`\`\`ts
// index.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'image-wrapper',
  template: \`
    <div [ngStyle]="style">
      <img class="img" [src]="src" [alt]="desc" />
      @if (desc) {
        <div class="desc">{{ desc }}</div>
      }
    </div>
  \`,
  styleUrls: [ './index.less' ]
})
export class ImageWrapperComponent {
  @Input() style: { [key: string]: string };
  @Input() src: string;
  @Input() desc: string;
}
\`\`\`

\`\`\`less
// index.less
:host {
  width: 400px;
  margin: 0 auto;
  padding: 0 20px 8px;
  text-align: center;
  background: #f2f4f5;

  ::ng-deep {
    .img {
      max-width: calc(100% - 32px);
      margin: 2.4em 1em;
      vertical-align: middle;
      box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
    }
  }
}
\`\`\`

The components are built here, to learn more about the development of [component styles](/theme/component-styles).

## Register

Once the component is created, you need to import the component into \`SharedModule\` so that all submodules can use it.

\`\`\`ts
// shared.module.ts
import { ImageWrapperComponent } from './image-wrapper';
const COMPONENTS = [
  ImageWrapperComponent
];
\`\`\`

## Use

Where you want to use this component, just follow the component-defined API input parameters and use it directly:

\`\`\`html
<image-wrapper
  src="https://os.alipayobjects.com/rmsportal/mgesTPFxodmIwpi.png"
  desc="schematic-diagram"></image-wrapper>
\`\`\``},"zh-CN":{meta:{order:20,title:"\u65B0\u589E\u4E1A\u52A1\u7EC4\u4EF6",description:"\u5BF9\u4E8E\u4E00\u4E9B\u53EF\u80FD\u88AB\u591A\u5904\u5F15\u7528\u7684\u529F\u80FD\u6A21\u5757\uFF0C\u5EFA\u8BAE\u63D0\u70BC\u6210\u4E1A\u52A1\u7EC4\u4EF6\u7EDF\u4E00\u7BA1\u7406\u3002\u8FD9\u4E9B\u7EC4\u4EF6\u4E00\u822C\u6709\u4EE5\u4E0B\u7279\u5F81\uFF1A\u53EA\u8D1F\u8D23\u4E00\u5757\u76F8\u5BF9\u72EC\u7ACB\uFF0C\u7A33\u5B9A\u7684\u529F\u80FD\uFF1B\u6CA1\u6709\u5355\u72EC\u7684\u8DEF\u7531\u914D\u7F6E\uFF1B\u53EF\u80FD\u662F\u7EAF\u9759\u6001\u7684\uFF0C\u4EC5\u53D7\u7236\u7EC4\u4EF6\uFF08\u901A\u5E38\u662F\u4E00\u4E2A\u9875\u9762\uFF09\u4F20\u9012\u7684\u53C2\u6570\u63A7\u5236\u3002\u4E0B\u9762\u4EE5\u4E00\u4E2A\u7B80\u5355\u7684\u9759\u6001\u7EC4\u4EF6\u4E3A\u4F8B\u8FDB\u884C\u4ECB\u7ECD\u3002\u5047\u8BBE\u4F60\u7684\u5E94\u7528\u4E2D\u7ECF\u5E38\u9700\u8981\u5C55\u73B0\u56FE\u7247\uFF0C\u8FD9\u4E9B\u56FE\u7247\u5BBD\u5EA6\u56FA\u5B9A\uFF0C\u6709\u4E00\u4E2A\u7070\u8272\u7684\u80CC...",group:"Dev",path:"docs/new-component.zh-CN.md",url:"/docs/new-component/zh"},text:`<p>\u5BF9\u4E8E\u4E00\u4E9B\u53EF\u80FD\u88AB\u591A\u5904\u5F15\u7528\u7684\u529F\u80FD\u6A21\u5757\uFF0C\u5EFA\u8BAE\u63D0\u70BC\u6210\u4E1A\u52A1\u7EC4\u4EF6\u7EDF\u4E00\u7BA1\u7406\u3002\u8FD9\u4E9B\u7EC4\u4EF6\u4E00\u822C\u6709\u4EE5\u4E0B\u7279\u5F81\uFF1A</p>
<ul>
<li>\u53EA\u8D1F\u8D23\u4E00\u5757\u76F8\u5BF9\u72EC\u7ACB\uFF0C\u7A33\u5B9A\u7684\u529F\u80FD\uFF1B</li>
<li>\u6CA1\u6709\u5355\u72EC\u7684\u8DEF\u7531\u914D\u7F6E\uFF1B</li>
<li>\u53EF\u80FD\u662F\u7EAF\u9759\u6001\u7684\uFF0C\u4EC5\u53D7\u7236\u7EC4\u4EF6\uFF08\u901A\u5E38\u662F\u4E00\u4E2A\u9875\u9762\uFF09\u4F20\u9012\u7684\u53C2\u6570\u63A7\u5236\u3002</li>
</ul>
<p>\u4E0B\u9762\u4EE5\u4E00\u4E2A\u7B80\u5355\u7684\u9759\u6001\u7EC4\u4EF6\u4E3A\u4F8B\u8FDB\u884C\u4ECB\u7ECD\u3002\u5047\u8BBE\u4F60\u7684\u5E94\u7528\u4E2D\u7ECF\u5E38\u9700\u8981\u5C55\u73B0\u56FE\u7247\uFF0C\u8FD9\u4E9B\u56FE\u7247\u5BBD\u5EA6\u56FA\u5B9A\uFF0C\u6709\u4E00\u4E2A\u7070\u8272\u7684\u80CC\u666F\u548C\u4E00\u5B9A\u7684\u5185\u8FB9\u8DDD\uFF0C\u6709\u6587\u5B57\u4ECB\u7ECD\uFF0C\u5C31\u50CF\u4E0B\u56FE\u8FD9\u6837\uFF1A</p>
<p><img src="https://gw.alipayobjects.com/zos/rmsportal/vcRltFiKfHBHFrUcsTtW.png" alt="" width="400" loading="lazy"></p>
<p>\u4F60\u53EF\u4EE5\u7528\u4E00\u4E2A\u7EC4\u4EF6\u6765\u5B9E\u73B0\u8FD9\u4E00\u529F\u80FD\uFF0C\u5B83\u6709\u9ED8\u8BA4\u7684\u6837\u5F0F\uFF0C\u540C\u65F6\u53EF\u4EE5\u63A5\u6536\u7236\u7EC4\u4EF6\u4F20\u9012\u7684\u53C2\u6570\u8FDB\u884C\u5C55\u793A\u3002</p>
<h2 id="\u65B0\u5EFA\u6587\u4EF6"><a class="lake-link"><i data-anchor="\u65B0\u5EFA\u6587\u4EF6"></i></a>\u65B0\u5EFA\u6587\u4EF6</h2><p>\u5728 <code>src/app/shared/components</code> \u4E0B\u65B0\u5EFA\u4E00\u4E2A\u4EE5\u7EC4\u4EF6\u540D\u547D\u540D\u7684\u6587\u4EF6\u5939\uFF0C\u547D\u540D\u5C3D\u91CF\u4F53\u73B0\u7EC4\u4EF6\u7684\u529F\u80FD\uFF0C\u8FD9\u91CC\u5C31\u53EB <code>image-wrapper</code>\u3002\u5728\u6B64\u6587\u4EF6\u5939\u4E0B\u65B0\u589E ts \u6587\u4EF6\u3001\u6837\u5F0F\u6587\u4EF6\uFF08\u5982\u679C\u9700\u8981\uFF09\u53CA\u7EC4\u4EF6API\u8BF4\u660E\uFF0C\u547D\u540D\u4E3A <code>index.ts</code>\u3001<code>index.less</code>\u548C<code>README.md</code>\u3002</p>
<blockquote>
<p>\u5728\u4F7F\u7528\u7EC4\u4EF6\u65F6\uFF0C\u9ED8\u8BA4\u4F1A\u5728 <code>index.ts</code> \u4E2D\u5BFB\u627E export \u7684\u5BF9\u8C61\uFF0C\u5982\u679C\u4F60\u7684\u7EC4\u4EF6\u6BD4\u8F83\u590D\u6742\uFF0C\u53EF\u4EE5\u5206\u4E3A\u591A\u4E2A\u6587\u4EF6\uFF0C\u6700\u540E\u5728 <code>index.ts</code> \u4E2D\u7EDF\u4E00 export\uFF0C\u5C31\u50CF\u8FD9\u6837\uFF1A</p>
</blockquote>
<blockquote>
<pre><code class="language-ts">// main.component.ts
export class MainComponent &#123;&#125;

// sub.component.ts
export class SubComponent &#123;&#125;

// index.ts
export MainComponent from &#39;./main.component&#39;;
export SubComponent from &#39;./sub.component&#39;;
</code></pre>
</blockquote>
<p>\u4F60\u7684\u4EE3\u7801\u5927\u6982\u662F\u8FD9\u4E2A\u6837\u5B50\uFF1A</p>
<pre><code class="language-ts">// index.ts
import &#123; Component, Input &#125; from &#39;&#64;angular/core&#39;;

&#64;Component(&#123;
  selector: &#39;image-wrapper&#39;,
  template: \`
    &lt;div [ngStyle]=&quot;style&quot;&gt;
      &lt;img class=&quot;img&quot; [src]=&quot;src&quot; [alt]=&quot;desc&quot; /&gt;
      &#64;if (desc) &#123;
        &lt;div class=&quot;desc&quot;&gt;&#123;&#123; desc &#125;&#125;&lt;/div&gt;
      &#125;
    &lt;/div&gt;
  \`,
  styleUrls: [ &#39;./index.less&#39; ]
&#125;)
export class ImageWrapperComponent &#123;
  &#64;Input() style: &#123; [key: string]: string &#125;;
  &#64;Input() src: string;
  &#64;Input() desc: string;
&#125;
</code></pre>
<pre><code class="language-less">// index.less
:host &#123;
  width: 400px;
  margin: 0 auto;
  padding: 0 20px 8px;
  text-align: center;
  background: #f2f4f5;

  ::ng-deep &#123;
    .img &#123;
      max-width: calc(100% - 32px);
      margin: 2.4em 1em;
      vertical-align: middle;
      box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
    &#125;
  &#125;
&#125;
</code></pre>
<p>\u5230\u8FD9\u513F\u7EC4\u4EF6\u5C31\u5EFA\u597D\u4E86\uFF0C\u4E86\u89E3\u66F4\u591A\u5173\u4E8E<a href="/theme/component-styles">\u7EC4\u4EF6\u6837\u5F0F</a>\u7684\u5F00\u53D1\u3002</p>
<h2 id="\u6CE8\u518C"><a class="lake-link"><i data-anchor="\u6CE8\u518C"></i></a>\u6CE8\u518C</h2><p>\u7EC4\u4EF6\u521B\u5EFA\u597D\u540E\uFF0C\u9700\u8981\u5C06\u7EC4\u4EF6\u5BFC\u5165 <code>SharedModule</code> \u4E2D\uFF0C\u8FD9\u6837\u6240\u6709\u5B50\u6A21\u5757\u90FD\u53EF\u4EE5\u4F7F\u7528\u5230\u8BE5\u7EC4\u4EF6\u3002</p>
<pre><code class="language-ts">// shared.module.ts
import &#123; ImageWrapperComponent &#125; from &#39;./image-wrapper&#39;;
const COMPONENTS = [
  ImageWrapperComponent
];
</code></pre>
<h2 id="\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u4F7F\u7528"></i></a>\u4F7F\u7528</h2><p>\u5728\u8981\u4F7F\u7528\u8FD9\u4E2A\u7EC4\u4EF6\u7684\u5730\u65B9\uFF0C\u6309\u7167\u7EC4\u4EF6\u5B9A\u4E49\u7684 API \u4F20\u5165\u53C2\u6570\uFF0C\u76F4\u63A5\u4F7F\u7528\u5C31\u597D\uFF1A</p>
<pre><code class="language-html">&lt;image-wrapper
  src=&quot;https://os.alipayobjects.com/rmsportal/mgesTPFxodmIwpi.png&quot;
  desc=&quot;\u793A\u610F\u56FE&quot;&gt;&lt;/image-wrapper&gt;
</code></pre>
`,api:"",toc:[{id:"\u65B0\u5EFA\u6587\u4EF6",title:"\u65B0\u5EFA\u6587\u4EF6"},{id:"\u6CE8\u518C",title:"\u6CE8\u518C"},{id:"\u4F7F\u7528",title:"\u4F7F\u7528"}],raw:`---
order: 20
title:
  en-US: New Component
  zh-CN: \u65B0\u589E\u4E1A\u52A1\u7EC4\u4EF6
type: Dev
---

\u5BF9\u4E8E\u4E00\u4E9B\u53EF\u80FD\u88AB\u591A\u5904\u5F15\u7528\u7684\u529F\u80FD\u6A21\u5757\uFF0C\u5EFA\u8BAE\u63D0\u70BC\u6210\u4E1A\u52A1\u7EC4\u4EF6\u7EDF\u4E00\u7BA1\u7406\u3002\u8FD9\u4E9B\u7EC4\u4EF6\u4E00\u822C\u6709\u4EE5\u4E0B\u7279\u5F81\uFF1A

- \u53EA\u8D1F\u8D23\u4E00\u5757\u76F8\u5BF9\u72EC\u7ACB\uFF0C\u7A33\u5B9A\u7684\u529F\u80FD\uFF1B
- \u6CA1\u6709\u5355\u72EC\u7684\u8DEF\u7531\u914D\u7F6E\uFF1B
- \u53EF\u80FD\u662F\u7EAF\u9759\u6001\u7684\uFF0C\u4EC5\u53D7\u7236\u7EC4\u4EF6\uFF08\u901A\u5E38\u662F\u4E00\u4E2A\u9875\u9762\uFF09\u4F20\u9012\u7684\u53C2\u6570\u63A7\u5236\u3002

\u4E0B\u9762\u4EE5\u4E00\u4E2A\u7B80\u5355\u7684\u9759\u6001\u7EC4\u4EF6\u4E3A\u4F8B\u8FDB\u884C\u4ECB\u7ECD\u3002\u5047\u8BBE\u4F60\u7684\u5E94\u7528\u4E2D\u7ECF\u5E38\u9700\u8981\u5C55\u73B0\u56FE\u7247\uFF0C\u8FD9\u4E9B\u56FE\u7247\u5BBD\u5EA6\u56FA\u5B9A\uFF0C\u6709\u4E00\u4E2A\u7070\u8272\u7684\u80CC\u666F\u548C\u4E00\u5B9A\u7684\u5185\u8FB9\u8DDD\uFF0C\u6709\u6587\u5B57\u4ECB\u7ECD\uFF0C\u5C31\u50CF\u4E0B\u56FE\u8FD9\u6837\uFF1A

![](https://gw.alipayobjects.com/zos/rmsportal/vcRltFiKfHBHFrUcsTtW.png | width=400)

\u4F60\u53EF\u4EE5\u7528\u4E00\u4E2A\u7EC4\u4EF6\u6765\u5B9E\u73B0\u8FD9\u4E00\u529F\u80FD\uFF0C\u5B83\u6709\u9ED8\u8BA4\u7684\u6837\u5F0F\uFF0C\u540C\u65F6\u53EF\u4EE5\u63A5\u6536\u7236\u7EC4\u4EF6\u4F20\u9012\u7684\u53C2\u6570\u8FDB\u884C\u5C55\u793A\u3002

## \u65B0\u5EFA\u6587\u4EF6

\u5728 \`src/app/shared/components\` \u4E0B\u65B0\u5EFA\u4E00\u4E2A\u4EE5\u7EC4\u4EF6\u540D\u547D\u540D\u7684\u6587\u4EF6\u5939\uFF0C\u547D\u540D\u5C3D\u91CF\u4F53\u73B0\u7EC4\u4EF6\u7684\u529F\u80FD\uFF0C\u8FD9\u91CC\u5C31\u53EB \`image-wrapper\`\u3002\u5728\u6B64\u6587\u4EF6\u5939\u4E0B\u65B0\u589E ts \u6587\u4EF6\u3001\u6837\u5F0F\u6587\u4EF6\uFF08\u5982\u679C\u9700\u8981\uFF09\u53CA\u7EC4\u4EF6API\u8BF4\u660E\uFF0C\u547D\u540D\u4E3A \`index.ts\`\u3001\`index.less\`\u548C\`README.md\`\u3002

> \u5728\u4F7F\u7528\u7EC4\u4EF6\u65F6\uFF0C\u9ED8\u8BA4\u4F1A\u5728 \`index.ts\` \u4E2D\u5BFB\u627E export \u7684\u5BF9\u8C61\uFF0C\u5982\u679C\u4F60\u7684\u7EC4\u4EF6\u6BD4\u8F83\u590D\u6742\uFF0C\u53EF\u4EE5\u5206\u4E3A\u591A\u4E2A\u6587\u4EF6\uFF0C\u6700\u540E\u5728 \`index.ts\` \u4E2D\u7EDF\u4E00 export\uFF0C\u5C31\u50CF\u8FD9\u6837\uFF1A

> \`\`\`ts
> // main.component.ts
> export class MainComponent {}
>
> // sub.component.ts
> export class SubComponent {}
>
> // index.ts
> export MainComponent from './main.component';
> export SubComponent from './sub.component';
> \`\`\`

\u4F60\u7684\u4EE3\u7801\u5927\u6982\u662F\u8FD9\u4E2A\u6837\u5B50\uFF1A

\`\`\`ts
// index.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'image-wrapper',
  template: \`
    <div [ngStyle]="style">
      <img class="img" [src]="src" [alt]="desc" />
      @if (desc) {
        <div class="desc">{{ desc }}</div>
      }
    </div>
  \`,
  styleUrls: [ './index.less' ]
})
export class ImageWrapperComponent {
  @Input() style: { [key: string]: string };
  @Input() src: string;
  @Input() desc: string;
}
\`\`\`

\`\`\`less
// index.less
:host {
  width: 400px;
  margin: 0 auto;
  padding: 0 20px 8px;
  text-align: center;
  background: #f2f4f5;

  ::ng-deep {
    .img {
      max-width: calc(100% - 32px);
      margin: 2.4em 1em;
      vertical-align: middle;
      box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
    }
  }
}
\`\`\`

\u5230\u8FD9\u513F\u7EC4\u4EF6\u5C31\u5EFA\u597D\u4E86\uFF0C\u4E86\u89E3\u66F4\u591A\u5173\u4E8E[\u7EC4\u4EF6\u6837\u5F0F](/theme/component-styles)\u7684\u5F00\u53D1\u3002

## \u6CE8\u518C

\u7EC4\u4EF6\u521B\u5EFA\u597D\u540E\uFF0C\u9700\u8981\u5C06\u7EC4\u4EF6\u5BFC\u5165 \`SharedModule\` \u4E2D\uFF0C\u8FD9\u6837\u6240\u6709\u5B50\u6A21\u5757\u90FD\u53EF\u4EE5\u4F7F\u7528\u5230\u8BE5\u7EC4\u4EF6\u3002

\`\`\`ts
// shared.module.ts
import { ImageWrapperComponent } from './image-wrapper';
const COMPONENTS = [
  ImageWrapperComponent
];
\`\`\`

## \u4F7F\u7528

\u5728\u8981\u4F7F\u7528\u8FD9\u4E2A\u7EC4\u4EF6\u7684\u5730\u65B9\uFF0C\u6309\u7167\u7EC4\u4EF6\u5B9A\u4E49\u7684 API \u4F20\u5165\u53C2\u6570\uFF0C\u76F4\u63A5\u4F7F\u7528\u5C31\u597D\uFF1A

\`\`\`html
<image-wrapper
  src="https://os.alipayobjects.com/rmsportal/mgesTPFxodmIwpi.png"
  desc="\u793A\u610F\u56FE"></image-wrapper>
\`\`\``}}};codes=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=o({type:n,selectors:[["docs-new-component"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&i(0,"app-docs",0),e&2&&a("codes",t.codes)("item",t.item)},dependencies:[r],encapsulation:2})};var L=class n{item={name:"new-page",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:10,title:"New Page",description:"Angular renders a page in a component tree, the actual development is to organize the code in a module tree to make it better to resuse code. For modu...",group:"Dev",path:"docs/new-page.en-US.md",url:"/docs/new-page/en"},text:`<p>Angular renders a page in a component tree, the actual development is to organize the code in a module tree to make it better to resuse code. For <strong>module granularity</strong> depends on the requirements, ng-alain is positioned in the middle of the front-end. Therefore, it is recommended to organize your code structure from a business perspective.</p>
<p>NG-ALAIN provides a very rich set of Schematics templates to quickly create templates and pages that match NG-ALAIN features, as well as a variety of pluggable <a href="/cli/plugin">plugins</a>.</p>
<blockquote>
<p>Additionally: NG-ALAIN is a standard Angular CLI project, you can still use the default command line.</p>
</blockquote>
<h2 id="first,_the_module"><a class="lake-link"><i data-anchor="first,_the_module"></i></a>First, the module</h2><p>To create a page, you need to create a module first. If you need a system to set the relevant module, execute the command:</p>
<pre><code class="language-bash">ng g ng-alain:module sys
</code></pre>
<p>The CLI will automatically create <code>sys.module.ts</code> and <code>sys-routing.module.ts</code> files under <code>src/app/routes/sys</code>, the former is the system setup module component definition file; the latter is the system setup module routing Configuration file.</p>
<pre><code class="language-ts">// sys.module.ts
import &#123; NgModule, Type &#125; from &#39;&#64;angular/core&#39;;
import &#123; SharedModule &#125; from &#39;&#64;shared&#39;;
import &#123; SysRoutingModule &#125; from &#39;./sys-routing.module&#39;;

const COMPONENTS: Type&lt;void&gt;[] = [];

&#64;NgModule(&#123;
  imports: [SharedModule, SysRoutingModule],
  declarations: COMPONENTS,
&#125;)
export class SysModule &#123;&#125;
</code></pre>
<p>The function of the module is to import the modules we need. All NG-ZORRO, &#64;delon/abc, &#64;delon/chart, etc. are loaded on demand. The external components are imported wherever the current business page needs. In order to reduce these import actions, NG -ALAIN has refined two files <code>shared-delon.module.ts</code> and <code>shared-zorro.module.ts</code> to merge some modules frequently used throughout the project into a module called <code>SharedModule</code>, which is why it is necessary Import it in the business module for the first time. Note: It is not recommended to put all the components in <code>SharedModule</code>, as far as possible, put the modules that need to be used two or three times or more.</p>
<p>And the routing configuration module:</p>
<pre><code class="language-ts">// sys-routing.module.ts
import &#123; NgModule &#125; from &#39;&#64;angular/core&#39;;
import &#123; RouterModule, Routes &#125; from &#39;&#64;angular/router&#39;;

const routes: Routes = [];

&#64;NgModule(&#123;
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
&#125;)
export class SysRoutingModule &#123;&#125;
</code></pre>
<p>By now, you can safely start developing business pages like menu management, logging, system configuration, etc. in the <code>sys</code> directory.</p>
<h2 id="second,_the_page"><a class="lake-link"><i data-anchor="second,_the_page"></i></a>Second, the page</h2><p>Use the <code>ng generate</code> (abbreviated as: <code>ng g</code>) command to create a log list page in the <code>sys</code> directory:</p>
<pre><code class="language-bash">ng g ng-alain:list log -m=sys
</code></pre>
<blockquote>
<p>See <a href="/cli">Command Line Tools</a> for more information.</p>
</blockquote>
<p>Finally, you can access the <a href="//localhost:4200/#/sys/log" target="_blank" rel="noopener">Log</a> page.</p>
<p>Of course, the log may be a very rich piece of information, you can add a view page opened in a modal box to display more details.</p>
<pre><code class="language-bash">ng g ng-alain:view view -m=sys -t=log
</code></pre>
<p><code>-t=log</code> indicates that you want to put the created file under <code>sys/log/view</code>.</p>
`,api:"",toc:[{id:"first,_the_module",title:"First, the module"},{id:"second,_the_page",title:"Second, the page"}],raw:`---
order: 10
title:
  en-US: New Page
  zh-CN: \u65B0\u589E\u9875\u9762
type: Dev
---

Angular renders a page in a component tree, the actual development is to organize the code in a module tree to make it better to resuse code. For **module granularity** depends on the requirements, ng-alain is positioned in the middle of the front-end. Therefore, it is recommended to organize your code structure from a business perspective.

NG-ALAIN provides a very rich set of Schematics templates to quickly create templates and pages that match NG-ALAIN features, as well as a variety of pluggable [plugins](/cli/plugin).

> Additionally: NG-ALAIN is a standard Angular CLI project, you can still use the default command line.

## First, the module

To create a page, you need to create a module first. If you need a system to set the relevant module, execute the command:

\`\`\`bash
ng g ng-alain:module sys
\`\`\`

The CLI will automatically create \`sys.module.ts\` and \`sys-routing.module.ts\` files under \`src/app/routes/sys\`, the former is the system setup module component definition file; the latter is the system setup module routing Configuration file. 

\`\`\`ts
// sys.module.ts
import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { SysRoutingModule } from './sys-routing.module';

const COMPONENTS: Type<void>[] = [];

@NgModule({
  imports: [SharedModule, SysRoutingModule],
  declarations: COMPONENTS,
})
export class SysModule {}
\`\`\`

The function of the module is to import the modules we need. All NG-ZORRO, @delon/abc, @delon/chart, etc. are loaded on demand. The external components are imported wherever the current business page needs. In order to reduce these import actions, NG -ALAIN has refined two files \`shared-delon.module.ts\` and \`shared-zorro.module.ts\` to merge some modules frequently used throughout the project into a module called \`SharedModule\`, which is why it is necessary Import it in the business module for the first time. Note: It is not recommended to put all the components in \`SharedModule\`, as far as possible, put the modules that need to be used two or three times or more.

And the routing configuration module:

\`\`\`ts
// sys-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SysRoutingModule {}
\`\`\`

By now, you can safely start developing business pages like menu management, logging, system configuration, etc. in the \`sys\` directory.

## Second, the page

Use the \`ng generate\` (abbreviated as: \`ng g\`) command to create a log list page in the \`sys\` directory:

\`\`\`bash
ng g ng-alain:list log -m=sys
\`\`\`

> See [Command Line Tools](/cli) for more information.

Finally, you can access the [Log](//localhost:4200/#/sys/log) page.

Of course, the log may be a very rich piece of information, you can add a view page opened in a modal box to display more details.

\`\`\`bash
ng g ng-alain:view view -m=sys -t=log
\`\`\`

\`-t=log\` indicates that you want to put the created file under \`sys/log/view\`.`},"zh-CN":{meta:{order:10,title:"\u65B0\u589E\u9875\u9762",description:"Angular \u867D\u7136\u662F\u4EE5\u7EC4\u4EF6\u6811\u6765\u6E32\u67D3\u4E00\u4E2A\u9875\u9762\uFF0C\u7136\u540E\u5B9E\u9645\u5F00\u53D1\u662F\u4EE5\u4E00\u79CD\u6A21\u5757\u6811\u6765\u7EC4\u7EC7\u4EE3\u7801\uFF0C\u4F7F\u5176\u80FD\u66F4\u597D\u5730\u4EE3\u7801\u590D\u7528\u3002\u800C\u5BF9\u4E8E\u6A21\u5757\u7C92\u5EA6\u53D6\u51B3\u4E8E\u9700\u6C42\uFF0Cng-alain\u7684\u5B9A\u4F4D\u5728\u4E8E\u4E2D\u53F0\u524D\u7AEF\uFF0C\u56E0\u6B64\uFF0C\u6BD4\u8F83\u5EFA\u8BAE\u4ECE\u4E1A\u52A1\u89D2\u5EA6\u51FA\u53D1\u7EC4\u7EC7\u4F60\u7684\u4EE3\u7801\u7ED3\u6784\u3002NG-ALAIN \u63D0\u4F9B\u4E00\u5957\u975E\u5E38\u4E30\u5BCC\u7684 Schematics \u6A21\u677F\uFF0C\u53EF\u4EE5\u5FEB\u901F\u521B\u5EFA\u7B26\u5408 N...",group:"Dev",path:"docs/new-page.zh-CN.md",url:"/docs/new-page/zh"},text:`<p>Angular \u867D\u7136\u662F\u4EE5\u7EC4\u4EF6\u6811\u6765\u6E32\u67D3\u4E00\u4E2A\u9875\u9762\uFF0C\u7136\u540E\u5B9E\u9645\u5F00\u53D1\u662F\u4EE5\u4E00\u79CD\u6A21\u5757\u6811\u6765\u7EC4\u7EC7\u4EE3\u7801\uFF0C\u4F7F\u5176\u80FD\u66F4\u597D\u5730<strong>\u4EE3\u7801\u590D\u7528</strong>\u3002\u800C\u5BF9\u4E8E<strong>\u6A21\u5757\u7C92\u5EA6</strong>\u53D6\u51B3\u4E8E\u9700\u6C42\uFF0Cng-alain\u7684\u5B9A\u4F4D\u5728\u4E8E\u4E2D\u53F0\u524D\u7AEF\uFF0C\u56E0\u6B64\uFF0C\u6BD4\u8F83\u5EFA\u8BAE\u4ECE\u4E1A\u52A1\u89D2\u5EA6\u51FA\u53D1\u7EC4\u7EC7\u4F60\u7684\u4EE3\u7801\u7ED3\u6784\u3002</p>
<p>NG-ALAIN \u63D0\u4F9B\u4E00\u5957\u975E\u5E38\u4E30\u5BCC\u7684 Schematics \u6A21\u677F\uFF0C\u53EF\u4EE5\u5FEB\u901F\u521B\u5EFA\u7B26\u5408 NG-ALAIN \u7279\u70B9\u7684\u6A21\u677F\u548C\u9875\u9762\uFF1B\u540C\u65F6\u5305\u542B\u591A\u79CD\u53EF\u63D2\u62D4<a href="/cli/plugin">\u63D2\u4EF6</a>\u3002</p>
<blockquote>
<p>\u53E6\uFF1ANG-ALAIN \u662F\u4E00\u4E2A\u6807\u51C6\u7684 Angular CLI \u9879\u76EE\uFF0C\u4F60\u4F9D\u7136\u53EF\u4EE5\u4F7F\u7528\u9ED8\u8BA4\u7684\u6240\u6709\u547D\u4EE4\u884C\u3002</p>
</blockquote>
<h2 id="\u4E00\u3001\u6A21\u5757"><a class="lake-link"><i data-anchor="\u4E00\u3001\u6A21\u5757"></i></a>\u4E00\u3001\u6A21\u5757</h2><p>\u8981\u521B\u5EFA\u4E00\u4E2A\u9875\u9762\u9700\u8981\u5148\u521B\u5EFA\u4E00\u4E2A\u6A21\u5757\u5F00\u59CB\uFF0C\u5047\u5982\u9700\u8981\u4E00\u4E2A\u7CFB\u7EDF\u8BBE\u7F6E\u76F8\u5173\u7684\u6A21\u5757\uFF0C\u6267\u884C\u547D\u4EE4\uFF1A</p>
<pre><code class="language-bash">ng g ng-alain:module sys
</code></pre>
<p>CLI \u4F1A\u81EA\u52A8\u5728 <code>src/app/routes/sys</code> \u4E0B\u521B\u5EFA <code>sys.module.ts</code> \u548C <code>sys-routing.module.ts</code> \u6587\u4EF6\uFF0C\u524D\u8005\u662F\u7CFB\u7EDF\u8BBE\u7F6E\u6A21\u5757\u7EC4\u4EF6\u5B9A\u4E49\u6587\u4EF6\uFF1B\u540E\u8005\u662F\u7CFB\u7EDF\u8BBE\u7F6E\u6A21\u5757\u8DEF\u7531\u914D\u7F6E\u6587\u4EF6\u3002</p>
<pre><code class="language-ts">// sys.module.ts
import &#123; NgModule, Type &#125; from &#39;&#64;angular/core&#39;;
import &#123; SharedModule &#125; from &#39;&#64;shared&#39;;
import &#123; SysRoutingModule &#125; from &#39;./sys-routing.module&#39;;

const COMPONENTS: Type&lt;void&gt;[] = [];

&#64;NgModule(&#123;
  imports: [SharedModule, SysRoutingModule],
  declarations: COMPONENTS,
&#125;)
export class SysModule &#123;&#125;
</code></pre>
<p>\u6A21\u5757\u7684\u4F5C\u7528\u662F\u5BFC\u5165\u6211\u4EEC\u9700\u8981\u7684\u6A21\u5757\uFF0C\u6240\u6709 NG-ZORRO\u3001&#64;delon/abc\u3001&#64;delon/chart \u7B49\u90FD\u662F\u6309\u9700\u6C42\u52A0\u8F7D\u6A21\u5757\uFF0C\u5F53\u524D\u4E1A\u52A1\u9875\u9700\u8981\u54EA\u91CC\u5916\u90E8\u7EC4\u4EF6\u5C31\u5BFC\u5165\u54EA\u4E9B\uFF0C\u4E3A\u4E86\u51CF\u5C11\u8FD9\u4E9B\u5BFC\u5165\u52A8\u4F5C\uFF0CNG-ALAIN \u63D0\u70BC\u4E86\u4E24\u4E2A\u6587\u4EF6 <code>shared-delon.module.ts</code>\u3001<code>shared-zorro.module.ts</code> \u5C06\u4E00\u4E9B\u6574\u4E2A\u9879\u76EE\u7ECF\u5E38\u7528\u5230\u7684\u6A21\u5757\u5408\u5E76\u6210\u4E00\u4E2A\u53EB <code>SharedModule</code> \u6A21\u5757\u5185\uFF0C\u8FD9\u4E5F\u5C31\u662F\u4E3A\u4EC0\u4E48\u9700\u8981\u5728\u4E1A\u52A1\u6A21\u5757\u5185\u7B2C\u4E00\u65F6\u95F4\u5BFC\u5165\u5B83\u3002\u6CE8\u610F\uFF1A\u4E0D\u5EFA\u8BAE\u628A\u6240\u6709\u7EC4\u4EF6\u90FD\u653E\u8FDB <code>SharedModule</code> \u5185\uFF0C\u5C3D\u53EF\u80FD\u5C06\u9700\u8981\u7528\u5230\u7684\u6A21\u5757\u4EE5\u4E8C\u6216\u4E09\u6B21\u4EE5\u4E0A\u4F7F\u7528\u624D\u653E\u8FDB\u8FD9\u91CC\u3002</p>
<p>\u4EE5\u53CA\u8DEF\u7531\u914D\u7F6E\u6A21\u5757\uFF1A</p>
<pre><code class="language-ts">// sys-routing.module.ts
import &#123; NgModule &#125; from &#39;&#64;angular/core&#39;;
import &#123; RouterModule, Routes &#125; from &#39;&#64;angular/router&#39;;

const routes: Routes = [];

&#64;NgModule(&#123;
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
&#125;)
export class SysRoutingModule &#123;&#125;
</code></pre>
<p>\u81F3\u6B64\uFF0C\u4F60\u53EF\u4EE5\u653E\u5FC3\u5728 <code>sys</code> \u76EE\u5F55\u4E2D\u5F00\u59CB\u5F00\u53D1\u50CF\u83DC\u5355\u7BA1\u7406\u3001\u65E5\u5FD7\u3001\u7CFB\u7EDF\u914D\u7F6E\u7B49\u4E1A\u52A1\u9875\u9762\u3002</p>
<h2 id="\u4E8C\u3001\u9875\u9762"><a class="lake-link"><i data-anchor="\u4E8C\u3001\u9875\u9762"></i></a>\u4E8C\u3001\u9875\u9762</h2><p>\u5229\u7528 <code>ng generate</code>\uFF08\u53EF\u7B80\u5199\u4E3A\uFF1A<code>ng g</code>\uFF09 \u547D\u4EE4\u5728 <code>sys</code> \u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A\u65E5\u5FD7\u5217\u8868\u9875\uFF1A</p>
<pre><code class="language-bash">ng g ng-alain:list log -m=sys
</code></pre>
<blockquote>
<p>\u4E86\u89E3\u66F4\u591A\u8BF7\u53C2\u8003<a href="/cli">\u547D\u4EE4\u884C\u5DE5\u5177</a>\u3002</p>
</blockquote>
<p>\u6700\u7EC8\uFF0C\u4F60\u53EF\u4EE5\u8BBF\u95EE <a href="//localhost:4200/#/sys/log" target="_blank" rel="noopener">\u65E5\u5FD7</a> \u9875\u9762\u3002</p>
<p>\u5F53\u7136\u65E5\u5FD7\u53EF\u80FD\u662F\u4E00\u4E2A\u975E\u5E38\u4E30\u5BCC\u7684\u4FE1\u606F\uFF0C\u53EF\u4EE5\u589E\u52A0\u4E00\u4E2A\u4EE5\u6A21\u6001\u6846\u6253\u5F00\u7684\u67E5\u770B\u9875\u6765\u663E\u793A\u66F4\u591A\u8BE6\u60C5\u3002</p>
<pre><code class="language-bash">ng g ng-alain:view view -m=sys -t=log
</code></pre>
<p><code>-t=log</code> \u8868\u793A\u5E0C\u671B\u628A\u521B\u5EFA\u7684\u6587\u4EF6\u653E\u8FDB\u81F3 <code>sys/log/view</code> \u4E0B\u9762\u3002</p>
`,api:"",toc:[{id:"\u4E00\u3001\u6A21\u5757",title:"\u4E00\u3001\u6A21\u5757"},{id:"\u4E8C\u3001\u9875\u9762",title:"\u4E8C\u3001\u9875\u9762"}],raw:`---
order: 10
title:
  en-US: New Page
  zh-CN: \u65B0\u589E\u9875\u9762
type: Dev
---

Angular \u867D\u7136\u662F\u4EE5\u7EC4\u4EF6\u6811\u6765\u6E32\u67D3\u4E00\u4E2A\u9875\u9762\uFF0C\u7136\u540E\u5B9E\u9645\u5F00\u53D1\u662F\u4EE5\u4E00\u79CD\u6A21\u5757\u6811\u6765\u7EC4\u7EC7\u4EE3\u7801\uFF0C\u4F7F\u5176\u80FD\u66F4\u597D\u5730**\u4EE3\u7801\u590D\u7528**\u3002\u800C\u5BF9\u4E8E**\u6A21\u5757\u7C92\u5EA6**\u53D6\u51B3\u4E8E\u9700\u6C42\uFF0Cng-alain\u7684\u5B9A\u4F4D\u5728\u4E8E\u4E2D\u53F0\u524D\u7AEF\uFF0C\u56E0\u6B64\uFF0C\u6BD4\u8F83\u5EFA\u8BAE\u4ECE\u4E1A\u52A1\u89D2\u5EA6\u51FA\u53D1\u7EC4\u7EC7\u4F60\u7684\u4EE3\u7801\u7ED3\u6784\u3002

NG-ALAIN \u63D0\u4F9B\u4E00\u5957\u975E\u5E38\u4E30\u5BCC\u7684 Schematics \u6A21\u677F\uFF0C\u53EF\u4EE5\u5FEB\u901F\u521B\u5EFA\u7B26\u5408 NG-ALAIN \u7279\u70B9\u7684\u6A21\u677F\u548C\u9875\u9762\uFF1B\u540C\u65F6\u5305\u542B\u591A\u79CD\u53EF\u63D2\u62D4[\u63D2\u4EF6](/cli/plugin)\u3002

> \u53E6\uFF1ANG-ALAIN \u662F\u4E00\u4E2A\u6807\u51C6\u7684 Angular CLI \u9879\u76EE\uFF0C\u4F60\u4F9D\u7136\u53EF\u4EE5\u4F7F\u7528\u9ED8\u8BA4\u7684\u6240\u6709\u547D\u4EE4\u884C\u3002

## \u4E00\u3001\u6A21\u5757

\u8981\u521B\u5EFA\u4E00\u4E2A\u9875\u9762\u9700\u8981\u5148\u521B\u5EFA\u4E00\u4E2A\u6A21\u5757\u5F00\u59CB\uFF0C\u5047\u5982\u9700\u8981\u4E00\u4E2A\u7CFB\u7EDF\u8BBE\u7F6E\u76F8\u5173\u7684\u6A21\u5757\uFF0C\u6267\u884C\u547D\u4EE4\uFF1A

\`\`\`bash
ng g ng-alain:module sys
\`\`\`

CLI \u4F1A\u81EA\u52A8\u5728 \`src/app/routes/sys\` \u4E0B\u521B\u5EFA \`sys.module.ts\` \u548C \`sys-routing.module.ts\` \u6587\u4EF6\uFF0C\u524D\u8005\u662F\u7CFB\u7EDF\u8BBE\u7F6E\u6A21\u5757\u7EC4\u4EF6\u5B9A\u4E49\u6587\u4EF6\uFF1B\u540E\u8005\u662F\u7CFB\u7EDF\u8BBE\u7F6E\u6A21\u5757\u8DEF\u7531\u914D\u7F6E\u6587\u4EF6\u3002

\`\`\`ts
// sys.module.ts
import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { SysRoutingModule } from './sys-routing.module';

const COMPONENTS: Type<void>[] = [];

@NgModule({
  imports: [SharedModule, SysRoutingModule],
  declarations: COMPONENTS,
})
export class SysModule {}
\`\`\`

\u6A21\u5757\u7684\u4F5C\u7528\u662F\u5BFC\u5165\u6211\u4EEC\u9700\u8981\u7684\u6A21\u5757\uFF0C\u6240\u6709 NG-ZORRO\u3001@delon/abc\u3001@delon/chart \u7B49\u90FD\u662F\u6309\u9700\u6C42\u52A0\u8F7D\u6A21\u5757\uFF0C\u5F53\u524D\u4E1A\u52A1\u9875\u9700\u8981\u54EA\u91CC\u5916\u90E8\u7EC4\u4EF6\u5C31\u5BFC\u5165\u54EA\u4E9B\uFF0C\u4E3A\u4E86\u51CF\u5C11\u8FD9\u4E9B\u5BFC\u5165\u52A8\u4F5C\uFF0CNG-ALAIN \u63D0\u70BC\u4E86\u4E24\u4E2A\u6587\u4EF6 \`shared-delon.module.ts\`\u3001\`shared-zorro.module.ts\` \u5C06\u4E00\u4E9B\u6574\u4E2A\u9879\u76EE\u7ECF\u5E38\u7528\u5230\u7684\u6A21\u5757\u5408\u5E76\u6210\u4E00\u4E2A\u53EB \`SharedModule\` \u6A21\u5757\u5185\uFF0C\u8FD9\u4E5F\u5C31\u662F\u4E3A\u4EC0\u4E48\u9700\u8981\u5728\u4E1A\u52A1\u6A21\u5757\u5185\u7B2C\u4E00\u65F6\u95F4\u5BFC\u5165\u5B83\u3002\u6CE8\u610F\uFF1A\u4E0D\u5EFA\u8BAE\u628A\u6240\u6709\u7EC4\u4EF6\u90FD\u653E\u8FDB \`SharedModule\` \u5185\uFF0C\u5C3D\u53EF\u80FD\u5C06\u9700\u8981\u7528\u5230\u7684\u6A21\u5757\u4EE5\u4E8C\u6216\u4E09\u6B21\u4EE5\u4E0A\u4F7F\u7528\u624D\u653E\u8FDB\u8FD9\u91CC\u3002

\u4EE5\u53CA\u8DEF\u7531\u914D\u7F6E\u6A21\u5757\uFF1A

\`\`\`ts
// sys-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SysRoutingModule {}
\`\`\`

\u81F3\u6B64\uFF0C\u4F60\u53EF\u4EE5\u653E\u5FC3\u5728 \`sys\` \u76EE\u5F55\u4E2D\u5F00\u59CB\u5F00\u53D1\u50CF\u83DC\u5355\u7BA1\u7406\u3001\u65E5\u5FD7\u3001\u7CFB\u7EDF\u914D\u7F6E\u7B49\u4E1A\u52A1\u9875\u9762\u3002

## \u4E8C\u3001\u9875\u9762

\u5229\u7528 \`ng generate\`\uFF08\u53EF\u7B80\u5199\u4E3A\uFF1A\`ng g\`\uFF09 \u547D\u4EE4\u5728 \`sys\` \u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A\u65E5\u5FD7\u5217\u8868\u9875\uFF1A

\`\`\`bash
ng g ng-alain:list log -m=sys
\`\`\`

> \u4E86\u89E3\u66F4\u591A\u8BF7\u53C2\u8003[\u547D\u4EE4\u884C\u5DE5\u5177](/cli)\u3002

\u6700\u7EC8\uFF0C\u4F60\u53EF\u4EE5\u8BBF\u95EE [\u65E5\u5FD7](//localhost:4200/#/sys/log) \u9875\u9762\u3002

\u5F53\u7136\u65E5\u5FD7\u53EF\u80FD\u662F\u4E00\u4E2A\u975E\u5E38\u4E30\u5BCC\u7684\u4FE1\u606F\uFF0C\u53EF\u4EE5\u589E\u52A0\u4E00\u4E2A\u4EE5\u6A21\u6001\u6846\u6253\u5F00\u7684\u67E5\u770B\u9875\u6765\u663E\u793A\u66F4\u591A\u8BE6\u60C5\u3002

\`\`\`bash
ng g ng-alain:view view -m=sys -t=log
\`\`\`

\`-t=log\` \u8868\u793A\u5E0C\u671B\u628A\u521B\u5EFA\u7684\u6587\u4EF6\u653E\u8FDB\u81F3 \`sys/log/view\` \u4E0B\u9762\u3002`}}};codes=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=o({type:n,selectors:[["docs-new-page"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&i(0,"app-docs",0),e&2&&a("codes",t.codes)("item",t.item)},dependencies:[r],encapsulation:2})};var D=class n{item={name:"performance",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:80,title:"Performance",description:"Divided into JavaScript script files and CSS files. The following only describes the script part. For the CSS file, please refer to Optimize Theme Sys...",group:"Advance",path:"docs/performance.en-US.md",url:"/docs/performance/en"},text:`<h2 id="envelope_size_optimization"><a class="lake-link"><i data-anchor="envelope_size_optimization"></i></a>Envelope size optimization</h2><p>Divided into JavaScript script files and CSS files. The following only describes the script part. For the CSS file, please refer to <a href="/theme/performance">Optimize Theme System</a>.</p>
<p><strong>Note:</strong> It is recommended to always prioritize <strong>business, optimize to the post-</strong> criteria, and have some understanding of NG-ALAIN before starting to optimize. The optimization scheme in this chapter will change with the change of the version. Please pay attention to the details.</p>
<h3 id="structure_description"><a class="lake-link"><i data-anchor="structure_description"></i></a>Structure description</h3><p>In general, there are two files that are larger after the build: <code>scripts.js</code> and <code>main.js</code>, and our optimization is mainly for these two items.</p>
<p><strong>scripts.js</strong></p>
<p>It comes from a collection of <code>scripts</code> nodes of <code>angular.json</code>, so the size of this file depends on the size of the third-party component referenced by the <code>scripts</code> node.</p>
<p>In general, you should put it under <code>scripts</code> when you are using non-Angular third-party components.</p>
<p><strong>main.js</strong></p>
<p>Using <code>ng build</code> by default will package all <code>&#64;angular/*</code>, <code>ng-zorro-antd</code>, <code>&#64;delon/*</code> and some third-party Angular components. Unless you use the <code>--vendor-chunk</code> parameter to separate these classes library.</p>
<h3 id="optimization_object"><a class="lake-link"><i data-anchor="optimization_object"></i></a>Optimization object</h3><p>We know that the resource file packaged by Angular Cli will contain the hashing value of the file. Which is like the unique identifier of the file. If the module is not modified, no new hashing value will be generated. This ensures that after the user downloads the resource for the first time. No matter how we build the user again, there is no need to download it again.</p>
<blockquote>
<p>In fact, Angular Cli defaults to <code>--vendor-chunk</code>. The main factor is that these <code>&#64;angular/*</code> are very fast relative to iteration.</p>
</blockquote>
<p>According to NG-ALAIN&#39;s <a href="/docs/module">module registration guidelines</a>, generate two <code>shared-delon.module.ts</code> and<code> shared-zorro.module.ts</code> produced are the summary of the import of secondary modules shared by &#64;Delon and NG-ZORRO.</p>
<p><code>&#64;delon/abc</code>,<code>&#64;delon/chart</code>, <code>ng-zorro-antd</code> The three main libraries all support secondary imports. Only selecting the modules required by the project will effectively solve the problem of package size.</p>
<h3 id="conclusion"><a class="lake-link"><i data-anchor="conclusion"></i></a>Conclusion</h3><p>After NG-ZORRO provides better optimization support, we will release <a href="https://github.com/ng-alain/ng-alain/pull/684" target="_blank" rel="noopener">#684</a> and hope to have a better package size. Expected results.</p>
`,api:"",toc:[{id:"envelope_size_optimization",title:"Envelope size optimization",children:[{id:"structure_description",title:"Structure description"},{id:"optimization_object",title:"Optimization object"},{id:"conclusion",title:"Conclusion"}]}],raw:`---
order: 80
title:
  en-US: Performance
  zh-CN: \u4F18\u5316
type: Advance
---

## Envelope size optimization

Divided into JavaScript script files and CSS files. The following only describes the script part. For the CSS file, please refer to [Optimize Theme System](/theme/performance).

**Note:** It is recommended to always prioritize **business, optimize to the post-** criteria, and have some understanding of NG-ALAIN before starting to optimize. The optimization scheme in this chapter will change with the change of the version. Please pay attention to the details.

### Structure description

In general, there are two files that are larger after the build: \`scripts.js\` and \`main.js\`, and our optimization is mainly for these two items.

**scripts.js**

It comes from a collection of \`scripts\` nodes of \`angular.json\`, so the size of this file depends on the size of the third-party component referenced by the \`scripts\` node.

In general, you should put it under \`scripts\` when you are using non-Angular third-party components.

**main.js**

Using \`ng build\` by default will package all \`@angular/*\`, \`ng-zorro-antd\`, \`@delon/*\` and some third-party Angular components. Unless you use the \`--vendor-chunk\` parameter to separate these classes library.

### Optimization object

We know that the resource file packaged by Angular Cli will contain the hashing value of the file. Which is like the unique identifier of the file. If the module is not modified, no new hashing value will be generated. This ensures that after the user downloads the resource for the first time. No matter how we build the user again, there is no need to download it again.

> In fact, Angular Cli defaults to \`--vendor-chunk\`. The main factor is that these \`@angular/*\` are very fast relative to iteration.

According to NG-ALAIN's [module registration guidelines](/docs/module), generate two \`shared-delon.module.ts\` and\` shared-zorro.module.ts\` produced are the summary of the import of secondary modules shared by @Delon and NG-ZORRO.

\`@delon/abc\`,\`@delon/chart\`, \`ng-zorro-antd\` The three main libraries all support secondary imports. Only selecting the modules required by the project will effectively solve the problem of package size.

### Conclusion

After NG-ZORRO provides better optimization support, we will release [#684](https://github.com/ng-alain/ng-alain/pull/684) and hope to have a better package size. Expected results.`},"zh-CN":{meta:{order:80,title:"\u4F18\u5316",description:"\u5206\u4E3AJavaScript\u811A\u672C\u6587\u4EF6\u548CCSS\u6587\u4EF6\uFF0C\u4EE5\u4E0B\u53EA\u63CF\u8FF0\u811A\u672C\u90E8\u5206\uFF0C\u6709\u5173CSS\u6587\u4EF6\u8BF7\u53C2\u8003\u4F18\u5316\u4E3B\u9898\u7CFB\u7EDF\u3002\u6CE8\u610F\uFF1A \u5EFA\u8BAE\u59CB\u7EC8\u4EE5\u4E1A\u52A1\u4F18\u5148\uFF0C\u4F18\u5316\u4E3A\u540E\u7684\u51C6\u5219\uFF0C\u4E14\u5728\u5F00\u59CB\u524D\u5BF9 NG-ALAIN \u6709\u4E00\u5B9A\u4E86\u89E3\u540E\u518D\u8FDB\u884C\u4F18\u5316\u3002\u672C\u7AE0\u8282\u7684\u4F18\u5316\u65B9\u6848\u4F1A\u968F\u7740\u7248\u672C\u7684\u66F4\u8FED\u6709\u6240\u53D8\u52A8\uFF0C\u6709\u5173\u7EC6\u8282\u8BF7\u6301\u7EED\u5173\u6CE8\u3002\u4E00\u822C\u6765\u8BF4\uFF0C\u6784\u5EFA\u540E\u6709\u4E24\u4E2A\u6587\u4EF6\u4F1A\u6BD4\u8F83\u5927\uFF1As...",group:"Advance",path:"docs/performance.zh-CN.md",url:"/docs/performance/zh"},text:`<h2 id="\u5305\u4F53\u5927\u5C0F\u4F18\u5316"><a class="lake-link"><i data-anchor="\u5305\u4F53\u5927\u5C0F\u4F18\u5316"></i></a>\u5305\u4F53\u5927\u5C0F\u4F18\u5316</h2><p>\u5206\u4E3AJavaScript\u811A\u672C\u6587\u4EF6\u548CCSS\u6587\u4EF6\uFF0C\u4EE5\u4E0B\u53EA\u63CF\u8FF0\u811A\u672C\u90E8\u5206\uFF0C\u6709\u5173CSS\u6587\u4EF6\u8BF7\u53C2\u8003<a href="/theme/performance">\u4F18\u5316\u4E3B\u9898\u7CFB\u7EDF</a>\u3002</p>
<p><strong>\u6CE8\u610F\uFF1A</strong> \u5EFA\u8BAE\u59CB\u7EC8\u4EE5<strong>\u4E1A\u52A1\u4F18\u5148\uFF0C\u4F18\u5316\u4E3A\u540E</strong>\u7684\u51C6\u5219\uFF0C\u4E14\u5728\u5F00\u59CB\u524D\u5BF9 NG-ALAIN \u6709\u4E00\u5B9A\u4E86\u89E3\u540E\u518D\u8FDB\u884C\u4F18\u5316\u3002\u672C\u7AE0\u8282\u7684\u4F18\u5316\u65B9\u6848\u4F1A\u968F\u7740\u7248\u672C\u7684\u66F4\u8FED\u6709\u6240\u53D8\u52A8\uFF0C\u6709\u5173\u7EC6\u8282\u8BF7\u6301\u7EED\u5173\u6CE8\u3002</p>
<h3 id="\u7ED3\u6784\u8BF4\u660E"><a class="lake-link"><i data-anchor="\u7ED3\u6784\u8BF4\u660E"></i></a>\u7ED3\u6784\u8BF4\u660E</h3><p>\u4E00\u822C\u6765\u8BF4\uFF0C\u6784\u5EFA\u540E\u6709\u4E24\u4E2A\u6587\u4EF6\u4F1A\u6BD4\u8F83\u5927\uFF1A<code>scripts.js</code> \u548C <code>main.js</code>\uFF0C\u800C\u6211\u4EEC\u4F18\u5316\u4E5F\u4E3B\u8981\u9488\u5BF9\u8FD9\u4E24\u9879\u3002</p>
<p><strong>scripts.js</strong></p>
<p>\u5B83\u6765\u81EA\u662F <code>angular.json</code> \u7684 <code>scripts</code> \u8282\u70B9\u7684\u96C6\u5408\uFF0C\u56E0\u6B64\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u7684\u5927\u5C0F\u53D6\u51B3\u4E8E <code>scripts</code> \u8282\u70B9\u6240\u5F15\u7528\u7684\u7B2C\u4E09\u65B9\u7EC4\u4EF6\u7684\u5927\u5C0F\u3002</p>
<p>\u4E00\u822C\u6765\u8BF4\uFF0C\u5F53\u4F60\u5728\u4F7F\u7528\u975E Angular \u7B2C\u4E09\u65B9\u7EC4\u4EF6\u65F6\u90FD\u5E94\u8BE5\u653E\u5728 <code>scripts</code> \u4E0B\u3002</p>
<p><strong>main.js</strong></p>
<p>\u9ED8\u8BA4\u4F7F\u7528 <code>ng build</code> \u4F1A\u5C06\u6240\u6709 <code>&#64;angular/*</code>\u3001<code>ng-zorro-antd</code>\u3001<code>&#64;delon/*</code> \u4EE5\u53CA\u4E00\u4E9B\u7B2C\u4E09\u65B9 Angular \u7EC4\u4EF6\u90FD\u4F1A\u88AB\u6253\u5305\u8FDB\u6765\uFF0C\u9664\u975E\u4F60\u4F7F\u7528 <code>--vendor-chunk</code> \u53C2\u6570\u6765\u5206\u79BB\u8FD9\u4E9B\u7C7B\u5E93\u3002</p>
<h3 id="\u4F18\u5316\u5BF9\u8C61"><a class="lake-link"><i data-anchor="\u4F18\u5316\u5BF9\u8C61"></i></a>\u4F18\u5316\u5BF9\u8C61</h3><p>\u6211\u4EEC\u77E5\u9053\uFF0CAngular Cli \u6253\u5305\u51FA\u6765\u7684\u8D44\u6E90\u6587\u4EF6\u4F1A\u5305\u542B\u8BE5\u6587\u4EF6 hashing \u503C\uFF0C\u5B83\u50CF\u662F\u6587\u4EF6\u7684\u552F\u4E00\u6807\u8BC6\u7801\uFF0C\u82E5\u672A\u5BF9\u8BE5\u6587\u4EF6\u8FDB\u884C\u6A21\u5757\u4FEE\u6539\u90FD\u4E0D\u4F1A\u4EA7\u751F\u65B0\u7684 hashing \u503C\uFF0C\u8FD9\u786E\u4FDD\u7528\u6237\u9996\u6B21\u4E0B\u8F7D\u8D44\u6E90\u540E\u4E0D\u7BA1\u6211\u4EEC\u5982\u4F55\u518D\u6B21\u6784\u5EFA\u7528\u6237\u90FD\u65E0\u987B\u518D\u4E00\u6B21\u4E0B\u8F7D\u3002</p>
<blockquote>
<p>\u4E8B\u5B9E\u4E0A\uFF0CAngular Cli \u9ED8\u8BA4\u5C06 <code>--vendor-chunk</code> \u4E3B\u8981\u56E0\u7D20\u662F\u8FD9\u4E9B &#64;angular/* \u76F8\u5BF9\u4E8E\u8FED\u4EE3\u5F88\u5FEB\u3002</p>
</blockquote>
<p>\u6839\u636E NG-ALAIN \u7684<a href="/docs/module">\u6A21\u5757\u6CE8\u518C\u6307\u5BFC\u539F\u5219</a>\uFF0C\u4EA7\u751F\u7684\u4E24\u4E2A <code>shared-delon.module.ts</code>\u3001<code>shared-zorro.module.ts</code> \u4E24\u4E2A\u4E13\u95E8\u9488\u5BF9 &#64;Delon \u4E0E NG-ZORRO \u5171\u4EAB\u6B21\u7EA7\u6A21\u5757\u5BFC\u5165\u7684\u6C47\u603B\u3002</p>
<p><code>&#64;delon/abc</code>\u3001<code>&#64;delon/chart</code>\u3001<code>ng-zorro-antd</code> \u4E09\u4E2A\u4E3B\u8981\u7C7B\u5E93\u90FD\u652F\u6301\u6B21\u7EA7\u5BFC\u5165\uFF0C\u53EA\u9009\u62E9\u9879\u76EE\u6240\u9700\u8981\u7684\u6A21\u5757\u5C06\u6709\u6548\u7684\u89E3\u51B3\u5305\u4F53\u5927\u5C0F\u7684\u95EE\u9898\u3002</p>
<h3 id="\u7ED3\u8BBA"><a class="lake-link"><i data-anchor="\u7ED3\u8BBA"></i></a>\u7ED3\u8BBA</h3><p>\u5F85 NG-ALAIN \u63D0\u4F9B\u66F4\u597D\u7684\u4F18\u5316\u652F\u6301\u540E\uFF0C\u6211\u4EEC\u4F1A\u53D1\u5E03 <a href="https://github.com/ng-alain/ng-alain/pull/684" target="_blank" rel="noopener">#684</a> \u5E0C\u671B\u5BF9\u5305\u4F53\u5927\u5C0F\u6709\u66F4\u597D\u7684\u671F\u671B\u7ED3\u679C\u3002</p>
`,api:"",toc:[{id:"\u5305\u4F53\u5927\u5C0F\u4F18\u5316",title:"\u5305\u4F53\u5927\u5C0F\u4F18\u5316",children:[{id:"\u7ED3\u6784\u8BF4\u660E",title:"\u7ED3\u6784\u8BF4\u660E"},{id:"\u4F18\u5316\u5BF9\u8C61",title:"\u4F18\u5316\u5BF9\u8C61"},{id:"\u7ED3\u8BBA",title:"\u7ED3\u8BBA"}]}],raw:`---
order: 80
title:
  en-US: Performance
  zh-CN: \u4F18\u5316
type: Advance
---

## \u5305\u4F53\u5927\u5C0F\u4F18\u5316

\u5206\u4E3AJavaScript\u811A\u672C\u6587\u4EF6\u548CCSS\u6587\u4EF6\uFF0C\u4EE5\u4E0B\u53EA\u63CF\u8FF0\u811A\u672C\u90E8\u5206\uFF0C\u6709\u5173CSS\u6587\u4EF6\u8BF7\u53C2\u8003[\u4F18\u5316\u4E3B\u9898\u7CFB\u7EDF](/theme/performance)\u3002

**\u6CE8\u610F\uFF1A** \u5EFA\u8BAE\u59CB\u7EC8\u4EE5**\u4E1A\u52A1\u4F18\u5148\uFF0C\u4F18\u5316\u4E3A\u540E**\u7684\u51C6\u5219\uFF0C\u4E14\u5728\u5F00\u59CB\u524D\u5BF9 NG-ALAIN \u6709\u4E00\u5B9A\u4E86\u89E3\u540E\u518D\u8FDB\u884C\u4F18\u5316\u3002\u672C\u7AE0\u8282\u7684\u4F18\u5316\u65B9\u6848\u4F1A\u968F\u7740\u7248\u672C\u7684\u66F4\u8FED\u6709\u6240\u53D8\u52A8\uFF0C\u6709\u5173\u7EC6\u8282\u8BF7\u6301\u7EED\u5173\u6CE8\u3002

### \u7ED3\u6784\u8BF4\u660E

\u4E00\u822C\u6765\u8BF4\uFF0C\u6784\u5EFA\u540E\u6709\u4E24\u4E2A\u6587\u4EF6\u4F1A\u6BD4\u8F83\u5927\uFF1A\`scripts.js\` \u548C \`main.js\`\uFF0C\u800C\u6211\u4EEC\u4F18\u5316\u4E5F\u4E3B\u8981\u9488\u5BF9\u8FD9\u4E24\u9879\u3002

**scripts.js**

\u5B83\u6765\u81EA\u662F \`angular.json\` \u7684 \`scripts\` \u8282\u70B9\u7684\u96C6\u5408\uFF0C\u56E0\u6B64\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u7684\u5927\u5C0F\u53D6\u51B3\u4E8E \`scripts\` \u8282\u70B9\u6240\u5F15\u7528\u7684\u7B2C\u4E09\u65B9\u7EC4\u4EF6\u7684\u5927\u5C0F\u3002

\u4E00\u822C\u6765\u8BF4\uFF0C\u5F53\u4F60\u5728\u4F7F\u7528\u975E Angular \u7B2C\u4E09\u65B9\u7EC4\u4EF6\u65F6\u90FD\u5E94\u8BE5\u653E\u5728 \`scripts\` \u4E0B\u3002

**main.js**

\u9ED8\u8BA4\u4F7F\u7528 \`ng build\` \u4F1A\u5C06\u6240\u6709 \`@angular/*\`\u3001\`ng-zorro-antd\`\u3001\`@delon/*\` \u4EE5\u53CA\u4E00\u4E9B\u7B2C\u4E09\u65B9 Angular \u7EC4\u4EF6\u90FD\u4F1A\u88AB\u6253\u5305\u8FDB\u6765\uFF0C\u9664\u975E\u4F60\u4F7F\u7528 \`--vendor-chunk\` \u53C2\u6570\u6765\u5206\u79BB\u8FD9\u4E9B\u7C7B\u5E93\u3002

### \u4F18\u5316\u5BF9\u8C61

\u6211\u4EEC\u77E5\u9053\uFF0CAngular Cli \u6253\u5305\u51FA\u6765\u7684\u8D44\u6E90\u6587\u4EF6\u4F1A\u5305\u542B\u8BE5\u6587\u4EF6 hashing \u503C\uFF0C\u5B83\u50CF\u662F\u6587\u4EF6\u7684\u552F\u4E00\u6807\u8BC6\u7801\uFF0C\u82E5\u672A\u5BF9\u8BE5\u6587\u4EF6\u8FDB\u884C\u6A21\u5757\u4FEE\u6539\u90FD\u4E0D\u4F1A\u4EA7\u751F\u65B0\u7684 hashing \u503C\uFF0C\u8FD9\u786E\u4FDD\u7528\u6237\u9996\u6B21\u4E0B\u8F7D\u8D44\u6E90\u540E\u4E0D\u7BA1\u6211\u4EEC\u5982\u4F55\u518D\u6B21\u6784\u5EFA\u7528\u6237\u90FD\u65E0\u987B\u518D\u4E00\u6B21\u4E0B\u8F7D\u3002

> \u4E8B\u5B9E\u4E0A\uFF0CAngular Cli \u9ED8\u8BA4\u5C06 \`--vendor-chunk\` \u4E3B\u8981\u56E0\u7D20\u662F\u8FD9\u4E9B @angular/* \u76F8\u5BF9\u4E8E\u8FED\u4EE3\u5F88\u5FEB\u3002

\u6839\u636E NG-ALAIN \u7684[\u6A21\u5757\u6CE8\u518C\u6307\u5BFC\u539F\u5219](/docs/module)\uFF0C\u4EA7\u751F\u7684\u4E24\u4E2A \`shared-delon.module.ts\`\u3001\`shared-zorro.module.ts\` \u4E24\u4E2A\u4E13\u95E8\u9488\u5BF9 @Delon \u4E0E NG-ZORRO \u5171\u4EAB\u6B21\u7EA7\u6A21\u5757\u5BFC\u5165\u7684\u6C47\u603B\u3002

\`@delon/abc\`\u3001\`@delon/chart\`\u3001\`ng-zorro-antd\` \u4E09\u4E2A\u4E3B\u8981\u7C7B\u5E93\u90FD\u652F\u6301\u6B21\u7EA7\u5BFC\u5165\uFF0C\u53EA\u9009\u62E9\u9879\u76EE\u6240\u9700\u8981\u7684\u6A21\u5757\u5C06\u6709\u6548\u7684\u89E3\u51B3\u5305\u4F53\u5927\u5C0F\u7684\u95EE\u9898\u3002

### \u7ED3\u8BBA

\u5F85 NG-ALAIN \u63D0\u4F9B\u66F4\u597D\u7684\u4F18\u5316\u652F\u6301\u540E\uFF0C\u6211\u4EEC\u4F1A\u53D1\u5E03 [#684](https://github.com/ng-alain/ng-alain/pull/684) \u5E0C\u671B\u5BF9\u5305\u4F53\u5927\u5C0F\u6709\u66F4\u597D\u7684\u671F\u671B\u7ED3\u679C\u3002`}}};codes=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=o({type:n,selectors:[["docs-performance"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&i(0,"app-docs",0),e&2&&a("codes",t.codes)("item",t.item)},dependencies:[r],encapsulation:2})};var M=class n{item={name:"server",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:40,title:"Work with Server",description:`NG-ALAIN is a single-page application based on the Angular technology stack. We provide development models for front-end code and native analog data.
...`,group:"Dev",path:"docs/server.en-US.md",url:"/docs/server/en"},text:`<p>NG-ALAIN is a single-page application based on the Angular technology stack. We provide development models for front-end code and native analog data.
Work in the form of the Restful API with the server application of any technology stack. The basics of interacting with the server are briefly described below.</p>
<h2 id="front-end_request_process"><a class="lake-link"><i data-anchor="front-end_request_process"></i></a>Front-end request process</h2><p>In NG-ALAIN, a complete front-end UI interaction to the server-side processing flow looks like this:</p>
<ol>
<li>Start Angular for the first time to execute <code>APP_INITIALIZER</code>;</li>
</ol>
<ul>
<li>Usually some APP general data is loaded before startup, such as currently authorized user data, menu data, dictionary data, configuration data, etc.</li>
</ul>
<ol start="2">
<li>UI component interaction;</li>
<li>Send the request using the encapsulated <a href="/theme/http">_HttpClient</a>;</li>
<li>Trigger the user authentication interceptor <a href="/auth/getting-started">&#64;delon/auth</a> and add the <code>token</code> parameter uniformly;</li>
</ol>
<ul>
<li>If there is no <code>token</code> or an expired interrupt subsequent request, jump directly to the login page;</li>
</ul>
<ol start="5">
<li>Trigger the default interceptor to process the prefix and other information;</li>
<li>Get the server back;</li>
<li>Trigger the default interceptor to handle request exceptions, business exceptions, etc.</li>
<li>Update the data and refresh the UI.</li>
</ol>
<h3 id="interceptor"><a class="lake-link"><i data-anchor="interceptor"></i></a>Interceptor</h3><p>By default, two interceptors are registered in the root module.<a href="https://github.com/ng-alain/delon/blob/master/packages/auth/token/simple/simple.interceptor.ts" target="_blank" rel="noopener">SimpleInterceptor</a> with <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/core/net/default.interceptor.ts" target="_blank" rel="noopener">DefaultInterceptor</a>And the execution order is executed in the registration order.</p>
<p><strong>SimpleInterceptor</strong></p>
<p><a href="/auth">User Authentication</a> has built-in interceptors for automatically adding <code>token</code> parameters to requests. There is also a <a href="https://github.com/ng-alain/delon/blob/master/packages/auth/token/jwt/jwt.interceptor.ts" target="_blank" rel="noopener">JWTInterceptor</a> interceptor, which is a standard JWT specification. If the backend uses standard JWT, it can be directly replaced with a JWTInterceptor interceptor.</p>
<p><strong>DefaultInterceptor</strong></p>
<p><a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/core/net/default.interceptor.ts" target="_blank" rel="noopener">DefaultInterceptor</a> The interceptor simply provides an interceptor. By default, it contains sample code that handles server request prefixes, handles request exceptions, and business exceptions. You can make adjustments based on your own needs.</p>
<p><strong>Important point</strong></p>
<p>We can put the <code>next.handle(req)</code> as the demarcation point in the interceptor <code>intercept</code> method. The first part is the request and the <code>pipe</code> part is the post. This will make it clearer which part is to be done before the request and which part will be executed after the request. For more information on interceptors, please refer to the official website.</p>
<h2 id="development_environment"><a class="lake-link"><i data-anchor="development_environment"></i></a>Development environment</h2><p>Under normal circumstances, the development environment and the production environment are not the same back-end request source. You can actually configure it under the <a href="https://github.com/ng-alain/ng-alain/tree/master/src/environments" target="_blank" rel="noopener">environment</a> directory. <a href="https://github.com/ng-alain/ng-alain/blob/master/src/environments/environment.ts" target="_blank" rel="noopener">environment.ts</a> and <a href="https://github.com/ng-alain/ng-alain/blob/master/src/environments/environment.prod.ts" target="_blank" rel="noopener">environment.prod.ts</a> Change the request source for different environments.</p>
<blockquote>
<p>environment is actually a JSON object, you can organize different forms to meet the problem of multiple request sources.</p>
</blockquote>
<h2 id="mock"><a class="lake-link"><i data-anchor="mock"></i></a>Mock</h2><p>Sometimes when you want to develop the front-end first, you can use <a href="/mock">&#64;delon/mock</a> to simulate the request data. The actual principle is to use the interceptor to directly return the data to the matching URL instead of sending an HTTP request. By default, it is only valid for the test environment. Of course, you usually need to make sure that the data of the Mock interface is consistent with the backend. You can create the corresponding Mock interface in the <code>_mock</code> directory:</p>
<pre><code class="language-ts">export const USERS = &#123;
  &#39;GET /users&#39;: &#123; users: [1, 2], total: 2 &#125;
&#125;
</code></pre>
<p>So for the test environment, when the <code>/users</code> request is encountered, the <code>&#123;users: [1, 2], total: 2 &#125;</code> data is returned directly. See <a href="/mock">here</a> for more Mock syntax and usage.</p>
<p><strong>Note:</strong> When you don&#39;t need a Mock interface for a request, be sure to comment out or remove it.</p>
<h2 id="cors"><a class="lake-link"><i data-anchor="cors"></i></a>Cors</h2><p>Most applications will be front-end is separate from the back-end, which leads to CORS factors when a request is made to the back end, such as:</p>
<pre><code class="language-ts">http.get(\`http://192.168.1.100/api/app\`).subscribe();
</code></pre>
<blockquote>
<p>Note: If the request does not start with <code>http</code>, each request will add <code>environment.SERVER_URL</code> as the leading edge of the request URL.</p>
</blockquote>
<p>The following error is returned directly:</p>
<pre><code>Access to XMLHttpRequest at &#39;http://192.168.1.100/api/app&#39; from origin &#39;http://localhost:4200&#39; has been blocked by CORS policy: No &#39;Access-Control-Allow-Origin&#39; header is present on the requested resource.
</code></pre>
<p>There are usually two ways to solve cross-domain problems. One is to allow the back-end development environment to directly support CORS requests (not recommended, but simplest), the second is to use Angular Cli to provide <a href="https://webpack.js.org/configuration/dev-server/#devserver-proxy" target="_blank" rel="noopener">Proxy Support</a>, the development proxy server will forward the domain and port of the request sent by Angular to the backend Server, CORS is a security restriction of the browser. There is no problem with CORS before the proxy server and the backend server. This is why many people try to make it clear that they can be requested in Postman but not in Angular.</p>
<p>Assuming that all backend requests are prefixed with <code>/api</code>, you can configure all this prefix in <code>proxy.conf.js</code> to forward to the new backend, for example:</p>
<pre><code class="language-js">module.exports = &#123;
  &#39;/api&#39;: &#123;
    target: &#39;http://192.168.1.100/api&#39;,
    secure: false
  &#125;
&#125;
</code></pre>
<ul>
<li><code>/api</code> Proxy path, domain is not supported</li>
<li><code>target</code> Proxy target address</li>
<li><code>secure</code> If the proxy target address is <code>https</code>, it should be set to <code>true</code>, otherwise it is <code>false</code></li>
<li><code>pathRewrite</code> Rewrite the address, such as <code>pathRewrite: &#123;&#39;^/api&#39;:&#39;/&#39;&#125;</code> to change the prefix <code>/api</code> to <code>/</code></li>
<li><code>changeOrigin</code> Change the <code>host</code> of the host header to the target URL. Some backends will judge whether it is valid according to its value. You may need to set <code>true</code></li>
<li><code>logLevel</code> Set to <code>debug</code> to display the message forwarded by the agent on the terminal</li>
</ul>
<p>Abort more detail please refer to <a href="https://angular.io/guide/build#proxying-to-a-backend-server" target="_blank" rel="noopener">Proxying to a backend server</a>, and for configuration description please refer to <a href="https://github.com/chimurai/http-proxy-middleware#options" target="_blank" rel="noopener">http-proxy-middleware options</a>.</p>
<h2 id="common_problem"><a class="lake-link"><i data-anchor="common_problem"></i></a>Common problem</h2><p><strong>The request may be rejected or returned directly to <code>401</code>?</strong></p>
<p>Scaffolding uses the <code>SimpleInterceptor</code> interceptor of <code>&#64;delon/auth</code> by default, which causes an error to be returned directly if a token cannot be obtained during the request.</p>
<p><a href="/auth">User Authentication</a> This process is a must for the middle office.</p>
<p><strong>Unable to display request log</strong></p>
<p>Starting from Angular 13, the debugging log of remote requests will no longer be displayed in the terminal. If you need to display the log, you can fix from refer to <a href="https://medium.com/&#64;gagandeep.sidhu88/how-to-fix-logging-for-proxy-in-angular-834cf46d437d" target="_blank" rel="noopener">How to fix logging for proxy in angular</a>.</p>
`,api:"",toc:[{id:"front-end_request_process",title:"Front-end request process",children:[{id:"interceptor",title:"Interceptor"}]},{id:"development_environment",title:"Development environment"},{id:"mock",title:"Mock"},{id:"cors",title:"Cors"},{id:"common_problem",title:"Common problem"}],raw:`---
order: 40
title: Work with Server
type: Dev
---

NG-ALAIN is a single-page application based on the Angular technology stack. We provide development models for front-end code and native analog data.
Work in the form of the Restful API with the server application of any technology stack. The basics of interacting with the server are briefly described below.
## Front-end request process

In NG-ALAIN, a complete front-end UI interaction to the server-side processing flow looks like this:

1. Start Angular for the first time to execute \`APP_INITIALIZER\`;
  - Usually some APP general data is loaded before startup, such as currently authorized user data, menu data, dictionary data, configuration data, etc.
2. UI component interaction;
3. Send the request using the encapsulated [_HttpClient](/theme/http);
4. Trigger the user authentication interceptor [@delon/auth](/auth/getting-started) and add the \`token\` parameter uniformly;
  - If there is no \`token\` or an expired interrupt subsequent request, jump directly to the login page;
5. Trigger the default interceptor to process the prefix and other information;
6. Get the server back;
7. Trigger the default interceptor to handle request exceptions, business exceptions, etc.
8. Update the data and refresh the UI.

### Interceptor

By default, two interceptors are registered in the root module.[SimpleInterceptor](https://github.com/ng-alain/delon/blob/master/packages/auth/token/simple/simple.interceptor.ts) with [DefaultInterceptor](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/net/default.interceptor.ts)And the execution order is executed in the registration order.

**SimpleInterceptor**

[User Authentication](/auth) has built-in interceptors for automatically adding \`token\` parameters to requests. There is also a [JWTInterceptor](https://github.com/ng-alain/delon/blob/master/packages/auth/token/jwt/jwt.interceptor.ts) interceptor, which is a standard JWT specification. If the backend uses standard JWT, it can be directly replaced with a JWTInterceptor interceptor.

**DefaultInterceptor**

[DefaultInterceptor](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/net/default.interceptor.ts) The interceptor simply provides an interceptor. By default, it contains sample code that handles server request prefixes, handles request exceptions, and business exceptions. You can make adjustments based on your own needs.

**Important point**

We can put the \`next.handle(req)\` as the demarcation point in the interceptor \`intercept\` method. The first part is the request and the \`pipe\` part is the post. This will make it clearer which part is to be done before the request and which part will be executed after the request. For more information on interceptors, please refer to the official website.

## Development environment

Under normal circumstances, the development environment and the production environment are not the same back-end request source. You can actually configure it under the [environment](https://github.com/ng-alain/ng-alain/tree/master/src/environments) directory. [environment.ts](https://github.com/ng-alain/ng-alain/blob/master/src/environments/environment.ts) and [environment.prod.ts](https://github.com/ng-alain/ng-alain/blob/master/src/environments/environment.prod.ts) Change the request source for different environments.

> environment is actually a JSON object, you can organize different forms to meet the problem of multiple request sources.

## Mock

Sometimes when you want to develop the front-end first, you can use [@delon/mock](/mock) to simulate the request data. The actual principle is to use the interceptor to directly return the data to the matching URL instead of sending an HTTP request. By default, it is only valid for the test environment. Of course, you usually need to make sure that the data of the Mock interface is consistent with the backend. You can create the corresponding Mock interface in the \`_mock\` directory:

\`\`\`ts
export const USERS = {
  'GET /users': { users: [1, 2], total: 2 }
}
\`\`\`

So for the test environment, when the \`/users\` request is encountered, the \`{users: [1, 2], total: 2 }\` data is returned directly. See [here](/mock) for more Mock syntax and usage.

**Note:** When you don't need a Mock interface for a request, be sure to comment out or remove it.

## Cors

Most applications will be front-end is separate from the back-end, which leads to CORS factors when a request is made to the back end, such as:

\`\`\`ts
http.get(\`http://192.168.1.100/api/app\`).subscribe();
\`\`\`

> Note: If the request does not start with \`http\`, each request will add \`environment.SERVER_URL\` as the leading edge of the request URL.

The following error is returned directly:

\`\`\`
Access to XMLHttpRequest at 'http://192.168.1.100/api/app' from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
\`\`\`

There are usually two ways to solve cross-domain problems. One is to allow the back-end development environment to directly support CORS requests (not recommended, but simplest), the second is to use Angular Cli to provide [Proxy Support](https://webpack.js.org/configuration/dev-server/#devserver-proxy), the development proxy server will forward the domain and port of the request sent by Angular to the backend Server, CORS is a security restriction of the browser. There is no problem with CORS before the proxy server and the backend server. This is why many people try to make it clear that they can be requested in Postman but not in Angular.

Assuming that all backend requests are prefixed with \`/api\`, you can configure all this prefix in \`proxy.conf.js\` to forward to the new backend, for example:

\`\`\`js
module.exports = {
  '/api': {
    target: 'http://192.168.1.100/api',
    secure: false
  }
}
\`\`\`

- \`/api\` Proxy path, domain is not supported
- \`target\` Proxy target address
- \`secure\` If the proxy target address is \`https\`, it should be set to \`true\`, otherwise it is \`false\`
- \`pathRewrite\` Rewrite the address, such as \`pathRewrite: {'^/api':'/'}\` to change the prefix \`/api\` to \`/\`
- \`changeOrigin\` Change the \`host\` of the host header to the target URL. Some backends will judge whether it is valid according to its value. You may need to set \`true\`
- \`logLevel\` Set to \`debug\` to display the message forwarded by the agent on the terminal

Abort more detail please refer to [Proxying to a backend server](https://angular.io/guide/build#proxying-to-a-backend-server), and for configuration description please refer to [http-proxy-middleware options](https://github.com/chimurai/http-proxy-middleware#options).

## Common problem

**The request may be rejected or returned directly to \`401\`?**

Scaffolding uses the \`SimpleInterceptor\` interceptor of \`@delon/auth\` by default, which causes an error to be returned directly if a token cannot be obtained during the request.

[User Authentication](/auth) This process is a must for the middle office.

**Unable to display request log**

Starting from Angular 13, the debugging log of remote requests will no longer be displayed in the terminal. If you need to display the log, you can fix from refer to [How to fix logging for proxy in angular](https://medium.com/@gagandeep.sidhu88/how-to-fix-logging-for-proxy-in-angular-834cf46d437d).`},"zh-CN":{meta:{order:40,title:"\u548C\u670D\u52A1\u7AEF\u8FDB\u884C\u4EA4\u4E92",description:`NG-ALAIN \u662F\u4E00\u5957\u57FA\u4E8E Angular \u6280\u672F\u6808\u7684\u5355\u9875\u9762\u5E94\u7528\uFF0C\u6211\u4EEC\u63D0\u4F9B\u7684\u662F\u524D\u7AEF\u4EE3\u7801\u548C\u672C\u5730\u6A21\u62DF\u6570\u636E\u7684\u5F00\u53D1\u6A21\u5F0F\uFF0C
\u901A\u8FC7 Restful API \u7684\u5F62\u5F0F\u548C\u4EFB\u4F55\u6280\u672F\u6808\u7684\u670D\u52A1\u7AEF\u5E94\u7528\u4E00\u8D77\u5DE5\u4F5C\u3002\u4E0B\u9762\u5C06\u7B80\u5355\u4ECB\u7ECD\u548C\u670D\u52A1\u7AEF\u4EA4\u4E92\u7684\u57FA\u672C\u5199\u6CD5\u3002\u5728 NG-ALAIN \u4E2D\uFF0C\u4E00\u4E2A\u5B8C\u6574\u7684\u524D\u7AEF UI \u4EA4\u4E92\u5230\u670D\u52A1\u7AEF\u5904\u7406\u6D41\u7A0B\u662F\u8FD9\u6837\u7684\uFF1A`,group:"Dev",path:"docs/server.zh-CN.md",url:"/docs/server/zh"},text:`<p>NG-ALAIN \u662F\u4E00\u5957\u57FA\u4E8E Angular \u6280\u672F\u6808\u7684\u5355\u9875\u9762\u5E94\u7528\uFF0C\u6211\u4EEC\u63D0\u4F9B\u7684\u662F\u524D\u7AEF\u4EE3\u7801\u548C\u672C\u5730\u6A21\u62DF\u6570\u636E\u7684\u5F00\u53D1\u6A21\u5F0F\uFF0C
\u901A\u8FC7 Restful API \u7684\u5F62\u5F0F\u548C\u4EFB\u4F55\u6280\u672F\u6808\u7684\u670D\u52A1\u7AEF\u5E94\u7528\u4E00\u8D77\u5DE5\u4F5C\u3002\u4E0B\u9762\u5C06\u7B80\u5355\u4ECB\u7ECD\u548C\u670D\u52A1\u7AEF\u4EA4\u4E92\u7684\u57FA\u672C\u5199\u6CD5\u3002</p>
<h2 id="\u524D\u7AEF\u8BF7\u6C42\u6D41\u7A0B"><a class="lake-link"><i data-anchor="\u524D\u7AEF\u8BF7\u6C42\u6D41\u7A0B"></i></a>\u524D\u7AEF\u8BF7\u6C42\u6D41\u7A0B</h2><p>\u5728 NG-ALAIN \u4E2D\uFF0C\u4E00\u4E2A\u5B8C\u6574\u7684\u524D\u7AEF UI \u4EA4\u4E92\u5230\u670D\u52A1\u7AEF\u5904\u7406\u6D41\u7A0B\u662F\u8FD9\u6837\u7684\uFF1A</p>
<ol>
<li>\u9996\u6B21\u542F\u52A8 Angular \u6267\u884C <code>APP_INITIALIZER</code>\uFF1B</li>
</ol>
<ul>
<li>\u901A\u5E38\u4F1A\u5728\u542F\u52A8\u524D\u5148\u52A0\u8F7D\u4E00\u4E9BAPP\u901A\u7528\u6570\u636E\uFF0C\u4F8B\u5982\uFF1A\u5F53\u524D\u5DF2\u6388\u6743\u7528\u6237\u6570\u636E\u3001\u83DC\u5355\u6570\u636E\u3001\u5B57\u5178\u6570\u636E\u3001\u914D\u7F6E\u9879\u7B49</li>
</ul>
<ol start="2">
<li>UI \u7EC4\u4EF6\u4EA4\u4E92\u64CD\u4F5C\uFF1B</li>
<li>\u4F7F\u7528\u5C01\u88C5\u7684 <a href="/theme/http">_HttpClient</a> \u53D1\u9001\u8BF7\u6C42\uFF1B</li>
<li>\u89E6\u53D1\u7528\u6237\u8BA4\u8BC1\u62E6\u622A\u5668 <a href="/auth/getting-started">&#64;delon/auth</a>\uFF0C\u7EDF\u4E00\u52A0\u5165 <code>token</code> \u53C2\u6570\uFF1B<ul>
<li>\u82E5\u672A\u5B58\u5728 <code>token</code> \u6216\u5DF2\u8FC7\u671F\u4E2D\u65AD\u540E\u7EED\u8BF7\u6C42\uFF0C\u76F4\u63A5\u8DF3\u8F6C\u81F3\u767B\u5F55\u9875\uFF1B</li>
</ul>
</li>
<li>\u89E6\u53D1\u9ED8\u8BA4\u62E6\u622A\u5668\uFF0C\u7EDF\u4E00\u5904\u7406\u524D\u7F00\u7B49\u4FE1\u606F\uFF1B</li>
<li>\u83B7\u53D6\u670D\u52A1\u7AEF\u8FD4\u56DE\uFF1B</li>
<li>\u89E6\u53D1\u9ED8\u8BA4\u62E6\u622A\u5668\uFF0C\u7EDF\u4E00\u5904\u7406\u8BF7\u6C42\u5F02\u5E38\u3001\u4E1A\u52A1\u5F02\u5E38\u7B49\uFF1B</li>
<li>\u6570\u636E\u66F4\u65B0\uFF0C\u5E76\u5237\u65B0 UI\u3002</li>
</ol>
<h3 id="\u62E6\u622A\u5668"><a class="lake-link"><i data-anchor="\u62E6\u622A\u5668"></i></a>\u62E6\u622A\u5668</h3><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5728\u6839\u6A21\u5757\u6CE8\u518C\u4E86\u4E24\u4E2A\u62E6\u622A\u5668 <a href="https://github.com/ng-alain/delon/blob/master/packages/auth/token/simple/simple.interceptor.ts" target="_blank" rel="noopener">SimpleInterceptor</a> \u548C <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/core/net/default.interceptor.ts" target="_blank" rel="noopener">DefaultInterceptor</a>\uFF0C\u4E14\u6267\u884C\u987A\u5E8F\u6309\u6CE8\u518C\u987A\u5E8F\u6267\u884C\u3002</p>
<p><strong>SimpleInterceptor</strong></p>
<p><a href="/auth">\u7528\u6237\u8BA4\u8BC1</a>\u5185\u7F6E\u7528\u4E8E\u81EA\u52A8\u4E3A\u8BF7\u6C42\u6DFB\u52A0 <code>token</code> \u53C2\u6570\u7684\u62E6\u622A\u5668\u3002\u8FD9\u91CC\u8FD8\u6709\u4E00\u4E2A\u53EB <a href="https://github.com/ng-alain/delon/blob/master/packages/auth/token/jwt/jwt.interceptor.ts" target="_blank" rel="noopener">JWTInterceptor</a> \u62E6\u622A\u5668\uFF0C\u662F\u4E00\u4E2A\u6807\u51C6 JWT \u89C4\u8303\uFF0C\u82E5\u540E\u7AEF\u91C7\u7528\u6807\u51C6JWT\u53EF\u4EE5\u76F4\u63A5\u6362\u6210JWTInterceptor\u62E6\u622A\u5668\u3002</p>
<p><strong>DefaultInterceptor</strong></p>
<p><a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/core/net/default.interceptor.ts" target="_blank" rel="noopener">DefaultInterceptor</a> \u62E6\u622A\u5668\u53EA\u662F\u63D0\u4F9B\u4E00\u4E2A\u62E6\u622A\u5668\u7684\u5199\u6CD5\uFF0C\u9ED8\u8BA4\u5305\u542B\u4E86\u7EDF\u4E00\u5904\u7406\u670D\u52A1\u5668\u8BF7\u6C42\u524D\u7F00\u3001\u5904\u7406\u8BF7\u6C42\u5F02\u5E38\u53CA\u4E1A\u52A1\u5F02\u5E38\u7684\u793A\u4F8B\u4EE3\u7801\uFF0C\u4F60\u53EF\u4EE5\u6839\u636E\u4F60\u81EA\u5DF1\u7684\u9700\u6C42\u505A\u8C03\u6574\u3002</p>
<p><strong>\u6CE8\u610F\u70B9</strong></p>
<p>\u6211\u4EEC\u53EF\u4EE5\u628A\u62E6\u622A\u5668 <code>intercept</code> \u65B9\u6CD5\u5185\uFF0C\u4EE5 <code>next.handle(req)</code> \u4E3A\u5206\u754C\u70B9\uFF0C\u524D\u90E8\u5206\u4E3A\u8BF7\u6C42\u524D\uFF0C<code>pipe</code> \u90E8\u5206\u4E3A\u63A5\u6536\u540E\u3002\u8FD9\u6837\u4F1A\u66F4\u660E\u786E\u77E5\u9053\u54EA\u4E00\u90E8\u5206\u662F\u8BF7\u6C42\u524D\u8981\u505A\uFF0C\u54EA\u4E00\u90E8\u5206\u662F\u8BF7\u6C42\u540E\u4F1A\u6267\u884C\u7684\u3002\u6709\u5173\u66F4\u591A\u62E6\u622A\u5668\u77E5\u8BC6\u8BF7\u53C2\u8003\u5B98\u7F51\u3002</p>
<h2 id="\u5F00\u53D1\u73AF\u5883"><a class="lake-link"><i data-anchor="\u5F00\u53D1\u73AF\u5883"></i></a>\u5F00\u53D1\u73AF\u5883</h2><p>\u6B63\u5E38\u60C5\u51B5\u4E0B\u5F00\u53D1\u73AF\u5883\u548C\u751F\u4EA7\u73AF\u5883\u4E0D\u662F\u540C\u4E00\u4E2A\u540E\u7AEF\u8BF7\u6C42\u6E90\uFF0C\u5B9E\u9645\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E <a href="https://github.com/ng-alain/ng-alain/tree/master/src/environments" target="_blank" rel="noopener">environment</a> \u76EE\u5F55\u4E0B <a href="https://github.com/ng-alain/ng-alain/blob/master/src/environments/environment.ts" target="_blank" rel="noopener">environment.ts</a> \u548C <a href="https://github.com/ng-alain/ng-alain/blob/master/src/environments/environment.prod.ts" target="_blank" rel="noopener">environment.prod.ts</a> \u6539\u53D8\u4E0D\u540C\u73AF\u5883\u7684\u8BF7\u6C42\u6E90\u3002</p>
<blockquote>
<p>environment \u5B9E\u9645\u662F\u4E00\u4E2AJSON\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u7EC4\u7EC7\u4E0D\u540C\u5F62\u5F0F\u6765\u6EE1\u8DB3\u591A\u8BF7\u6C42\u6E90\u7684\u95EE\u9898\u3002</p>
</blockquote>
<h2 id="mock"><a class="lake-link"><i data-anchor="mock"></i></a>Mock</h2><p>\u6709\u65F6\u5019\u5E0C\u671B\u4F18\u5148\u5F00\u53D1\u524D\u7AEF\u65F6\uFF0C\u53EF\u4EE5\u5229\u7528 <a href="/mock">&#64;delon/mock</a> \u6765\u6A21\u62DF\u8BF7\u6C42\u6570\u636E\uFF0C\u5B9E\u9645\u539F\u7406\u662F\u5229\u7528\u62E6\u622A\u5668\uFF0C\u5BF9\u5339\u914D\u7684URL\u76F4\u63A5\u8FD4\u56DE\u6570\u636E\uFF0C\u800C\u4E0D\u662F\u53D1\u9001\u4E00\u4E2AHTTP\u8BF7\u6C42\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u53EA\u5BF9\u6D4B\u8BD5\u73AF\u5883\u6709\u6548\u3002\u5F53\u7136\u901A\u5E38\u60C5\u51B5\u4E0B\u4F60\u9700\u8981\u786E\u4FDD Mock \u63A5\u53E3\u7684\u6570\u636E\u4E0E\u540E\u7AEF\u4FDD\u6301\u4E00\u81F4\uFF0C\u4F60\u53EF\u4EE5\u5728 <code>_mock</code> \u76EE\u5F55\u4E0B\u521B\u5EFA\u76F8\u5E94\u7684 Mock \u63A5\u53E3\uFF1A</p>
<pre><code class="language-ts">export const USERS = &#123;
  &#39;GET /users&#39;: &#123; users: [1, 2], total: 2 &#125;
&#125;
</code></pre>
<p>\u56E0\u6B64\u5BF9\u4E8E\u6D4B\u8BD5\u73AF\u5883\u4E0B\u5F53\u9047\u5230 <code>/users</code> \u8BF7\u6C42\u76F4\u63A5\u8FD4\u56DE <code>&#123; users: [1, 2], total: 2 &#125;</code> \u6570\u636E\u3002\u6709\u5173\u66F4\u591A Mock \u8BED\u6CD5\u548C\u4F7F\u7528\u65B9\u5F0F\u53C2\u8003<a href="/mock">\u8FD9\u91CC</a>\u3002</p>
<p><strong>\u6CE8\uFF1A</strong> \u5F53\u4F60\u4E0D\u9700\u8981\u67D0\u4E2A\u8BF7\u6C42\u7684 Mock \u63A5\u53E3\u65F6\uFF0C\u52A1\u5FC5\u8981\u6CE8\u91CA\u6389\u6216\u79FB\u9664\u5B83\u3002</p>
<h2 id="\u8DE8\u57DF"><a class="lake-link"><i data-anchor="\u8DE8\u57DF"></i></a>\u8DE8\u57DF</h2><p>\u5927\u90E8\u5206\u5E94\u7528\u90FD\u4F1A\u524D\u540E\u7AEF\u5206\u79BB\u8FDB\u884C\u5F00\u53D1\uFF0C\u8FD9\u5BFC\u81F4\u5F53\u5BF9\u540E\u7AEF\u53D1\u8D77\u4E00\u4E2A\u8BF7\u6C42\u65F6\u4F1A\u53D7\u8DE8\u57DF\uFF08CORS\uFF09\u7684\u56E0\u7D20\uFF0C\u4F8B\u5982\uFF1A</p>
<pre><code class="language-ts">http.get(\`http://192.168.1.100/api/app\`).subscribe();
</code></pre>
<blockquote>
<p>\u6CE8\uFF1A\u5982\u679C\u975E <code>http</code> \u5F00\u5934\u7684\u8BF7\u6C42\uFF0C\u4F1A\u5728\u6BCF\u4E2A\u8BF7\u6C42\u90FD\u4F1A\u52A0\u4E0A <code>environment.SERVER_URL</code> \u4F5C\u4E3A\u8BF7\u6C42 URL \u7684\u524D\u7F18\u3002</p>
</blockquote>
<p>\u76F4\u63A5\u8FD4\u56DE\u4EE5\u4E0B\u9519\u8BEF\uFF1A</p>
<pre><code>Access to XMLHttpRequest at &#39;http://192.168.1.100/api/app&#39; from origin &#39;http://localhost:4200&#39; has been blocked by CORS policy: No &#39;Access-Control-Allow-Origin&#39; header is present on the requested resource.
</code></pre>
<p>\u800C\u6B63\u5E38\u89E3\u51B3\u8DE8\u57DF\u95EE\u9898\u6709\u4E24\u79CD\u65B9\u6CD5\uFF0C\u4E00\u662F\u8BA9\u540E\u7AEF\u5F00\u53D1\u73AF\u5883\u76F4\u63A5\u652F\u6301\u8DE8\u57DF\u8BF7\u6C42\uFF08\u4E0D\u63A8\u8350\uFF0C\u4F46\u6700\u7B80\u5355\uFF09\uFF0C\u4E8C\u662F\u5229\u7528 Angular Cli \u63D0\u4F9B<a href="https://webpack.js.org/configuration/dev-server/#devserver-proxy" target="_blank" rel="noopener">\u4EE3\u7406\u652F\u6301</a>\uFF0C\u5F00\u53D1\u4EE3\u7406\u670D\u52A1\u5668\u4F1A\u5C06 Angular \u53D1\u9001\u7684\u8BF7\u6C42\u7684\u57DF\u548C\u7AEF\u53E3\u8F6C\u53D1\u7ED9\u540E\u7AEF\u670D\u52A1\u5668\uFF0CCORS \u662F\u6D4F\u89C8\u5668\u7684\u5B89\u5168\u9650\u5236\uFF0C\u5728\u4EE3\u7406\u670D\u52A1\u5668\u4E0E\u540E\u7AEF\u670D\u52A1\u5668\u4E4B\u524D\u5E76\u4E0D\u5B58\u5728 CORS \u7684\u95EE\u9898\uFF0C\u8FD9\u4E5F\u5C31\u662F\u4E3A\u4EC0\u4E48\u5F88\u591A\u4EBA\u4F1A\u5C1D\u8BD5\u660E\u660E\u5728 Postman \u80FD\u8BF7\u6C42\uFF0C\u800C\u5728 Angular \u4E0B\u65E0\u6CD5\u8BF7\u6C42\u7684\u539F\u56E0\u6240\u5728\u3002</p>
<p>\u5047\u5B9A\u6240\u6709\u540E\u7AEF\u8BF7\u6C42\u90FD\u662F\u4EE5 <code>/api</code> \u4E3A\u524D\u7F00\u65F6\uFF0C\u5C31\u53EF\u4EE5\u5728 <code>proxy.conf.js</code> \u914D\u7F6E\u6240\u6709\u8FD9\u4E2A\u524D\u7F00\u90FD\u8F6C\u5411\u65B0\u7684\u540E\u7AEF\uFF0C\u4F8B\u5982\uFF1A</p>
<pre><code class="language-js">module.exports = &#123;
  &#39;/api&#39;: &#123;
    target: &#39;http://192.168.1.100/api&#39;,
    secure: false
  &#125;
&#125;
</code></pre>
<ul>
<li><code>/api</code> \u4EE3\u7406\u8DEF\u5F84\uFF0C\u4E0D\u652F\u6301\u57DF</li>
<li><code>target</code> \u4EE3\u7406\u76EE\u6807\u5730\u5740</li>
<li><code>secure</code> \u4EE3\u7406\u76EE\u6807\u5730\u5740\u5982\u679C\u662F <code>https</code> \u5E94\u8BE5\u8BBE\u7F6E\u4E3A <code>true</code>\uFF0C\u53CD\u4E4B\u4E3A <code>false</code></li>
<li><code>pathRewrite</code> \u91CD\u5199\u5730\u5740\uFF0C\u4F8B\u5982 <code>pathRewrite: &#123;&#39;^/api&#39;: &#39;/&#39;&#125;</code> \u5C06\u524D\u7F00 <code>/api</code> \u8F6C\u4E3A <code>/</code></li>
<li><code>changeOrigin</code> \u5C06\u4E3B\u673A\u6807\u5934\u7684 <code>host</code> \u66F4\u6539\u4E3A\u76EE\u6807URL\uFF0C\u6709\u4E9B\u540E\u7AEF\u4F1A\u6839\u636E\u5176\u503C\u6765\u5224\u65AD\u662F\u5426\u6709\u6548\uFF0C\u53EF\u80FD\u9700\u8981\u901A\u8FC7\u8BBE\u7F6E <code>true</code></li>
<li><code>logLevel</code> \u8BBE\u7F6E\u4E3A <code>debug</code> \u53EF\u4EE5\u7EC8\u7AEF\u663E\u793A\u4EE3\u7406\u8F6C\u53D1\u7684\u6D88\u606F</li>
</ul>
<p>\u66F4\u591A\u4F7F\u7528\u8BF4\u660E\u8BF7\u53C2\u8003<a href="https://angular.cn/guide/build#proxying-to-a-backend-server" target="_blank" rel="noopener">\u4EE3\u7406\u5230\u540E\u7AEF\u670D\u52A1\u5668</a>\uFF0C\u4EE5\u53CA\u914D\u7F6E\u63CF\u8FF0\u8BF7\u53C2\u8003<a href="https://github.com/chimurai/http-proxy-middleware#options" target="_blank" rel="noopener">http-proxy-middleware options</a>\u3002</p>
<h2 id="\u5E38\u89C1\u95EE\u9898"><a class="lake-link"><i data-anchor="\u5E38\u89C1\u95EE\u9898"></i></a>\u5E38\u89C1\u95EE\u9898</h2><p><strong>\u8BF7\u6C42\u53EF\u80FD\u88AB\u62D2\u7EDD\u6216\u76F4\u63A5\u8FD4\u56DE <code>401</code> ?</strong></p>
<p>\u811A\u624B\u67B6\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F7F\u7528\u4E86 <code>&#64;delon/auth</code> \u7684 <code>SimpleInterceptor</code> \u62E6\u622A\u5668\uFF0C\u5BFC\u81F4\u5728\u8BF7\u6C42\u8FC7\u7A0B\u4E2D\u82E5\u53D1\u73B0\u65E0\u6CD5\u83B7\u53D6 Token \u65F6\u4F1A\u76F4\u63A5\u8FD4\u56DE\u9519\u8BEF\u3002</p>
<p><a href="/auth">\u7528\u6237\u8BA4\u8BC1</a>\u8FD9\u4E2A\u8FC7\u7A0B\u662F\u4E2D\u53F0\u5FC5\u5907\u7684\u3002</p>
<p><strong>\u5173\u4E8E\u65E0\u6CD5\u663E\u793A\u8BF7\u6C42\u65E5\u5FD7</strong></p>
<p>\u4ECE Angular13 \u5F00\u59CB\u8FDC\u7A0B\u8BF7\u6C42\u7684\u8C03\u8BD5\u65E5\u5FD7\u5C06\u4E0D\u518D\u7EC8\u7AEF\u4E2D\u663E\u793A\uFF0C\u82E5\u6709\u663E\u793A\u65E5\u671F\u9700\u6C42\uFF0C\u53EF\u81EA\u884C\u53C2\u8003 <a href="https://medium.com/&#64;gagandeep.sidhu88/how-to-fix-logging-for-proxy-in-angular-834cf46d437d" target="_blank" rel="noopener">How to fix logging for proxy in angular</a> \u89E3\u51B3\u3002</p>
`,api:"",toc:[{id:"\u524D\u7AEF\u8BF7\u6C42\u6D41\u7A0B",title:"\u524D\u7AEF\u8BF7\u6C42\u6D41\u7A0B",children:[{id:"\u62E6\u622A\u5668",title:"\u62E6\u622A\u5668"}]},{id:"\u5F00\u53D1\u73AF\u5883",title:"\u5F00\u53D1\u73AF\u5883"},{id:"mock",title:"Mock"},{id:"\u8DE8\u57DF",title:"\u8DE8\u57DF"},{id:"\u5E38\u89C1\u95EE\u9898",title:"\u5E38\u89C1\u95EE\u9898"}],raw:`---
order: 40
title: \u548C\u670D\u52A1\u7AEF\u8FDB\u884C\u4EA4\u4E92
type: Dev
---

NG-ALAIN \u662F\u4E00\u5957\u57FA\u4E8E Angular \u6280\u672F\u6808\u7684\u5355\u9875\u9762\u5E94\u7528\uFF0C\u6211\u4EEC\u63D0\u4F9B\u7684\u662F\u524D\u7AEF\u4EE3\u7801\u548C\u672C\u5730\u6A21\u62DF\u6570\u636E\u7684\u5F00\u53D1\u6A21\u5F0F\uFF0C
\u901A\u8FC7 Restful API \u7684\u5F62\u5F0F\u548C\u4EFB\u4F55\u6280\u672F\u6808\u7684\u670D\u52A1\u7AEF\u5E94\u7528\u4E00\u8D77\u5DE5\u4F5C\u3002\u4E0B\u9762\u5C06\u7B80\u5355\u4ECB\u7ECD\u548C\u670D\u52A1\u7AEF\u4EA4\u4E92\u7684\u57FA\u672C\u5199\u6CD5\u3002

## \u524D\u7AEF\u8BF7\u6C42\u6D41\u7A0B

\u5728 NG-ALAIN \u4E2D\uFF0C\u4E00\u4E2A\u5B8C\u6574\u7684\u524D\u7AEF UI \u4EA4\u4E92\u5230\u670D\u52A1\u7AEF\u5904\u7406\u6D41\u7A0B\u662F\u8FD9\u6837\u7684\uFF1A

1. \u9996\u6B21\u542F\u52A8 Angular \u6267\u884C \`APP_INITIALIZER\`\uFF1B
  - \u901A\u5E38\u4F1A\u5728\u542F\u52A8\u524D\u5148\u52A0\u8F7D\u4E00\u4E9BAPP\u901A\u7528\u6570\u636E\uFF0C\u4F8B\u5982\uFF1A\u5F53\u524D\u5DF2\u6388\u6743\u7528\u6237\u6570\u636E\u3001\u83DC\u5355\u6570\u636E\u3001\u5B57\u5178\u6570\u636E\u3001\u914D\u7F6E\u9879\u7B49
2. UI \u7EC4\u4EF6\u4EA4\u4E92\u64CD\u4F5C\uFF1B
3. \u4F7F\u7528\u5C01\u88C5\u7684 [_HttpClient](/theme/http) \u53D1\u9001\u8BF7\u6C42\uFF1B
4. \u89E6\u53D1\u7528\u6237\u8BA4\u8BC1\u62E6\u622A\u5668 [@delon/auth](/auth/getting-started)\uFF0C\u7EDF\u4E00\u52A0\u5165 \`token\` \u53C2\u6570\uFF1B
    - \u82E5\u672A\u5B58\u5728 \`token\` \u6216\u5DF2\u8FC7\u671F\u4E2D\u65AD\u540E\u7EED\u8BF7\u6C42\uFF0C\u76F4\u63A5\u8DF3\u8F6C\u81F3\u767B\u5F55\u9875\uFF1B
5. \u89E6\u53D1\u9ED8\u8BA4\u62E6\u622A\u5668\uFF0C\u7EDF\u4E00\u5904\u7406\u524D\u7F00\u7B49\u4FE1\u606F\uFF1B
6. \u83B7\u53D6\u670D\u52A1\u7AEF\u8FD4\u56DE\uFF1B
7. \u89E6\u53D1\u9ED8\u8BA4\u62E6\u622A\u5668\uFF0C\u7EDF\u4E00\u5904\u7406\u8BF7\u6C42\u5F02\u5E38\u3001\u4E1A\u52A1\u5F02\u5E38\u7B49\uFF1B
8. \u6570\u636E\u66F4\u65B0\uFF0C\u5E76\u5237\u65B0 UI\u3002

### \u62E6\u622A\u5668

\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5728\u6839\u6A21\u5757\u6CE8\u518C\u4E86\u4E24\u4E2A\u62E6\u622A\u5668 [SimpleInterceptor](https://github.com/ng-alain/delon/blob/master/packages/auth/token/simple/simple.interceptor.ts) \u548C [DefaultInterceptor](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/net/default.interceptor.ts)\uFF0C\u4E14\u6267\u884C\u987A\u5E8F\u6309\u6CE8\u518C\u987A\u5E8F\u6267\u884C\u3002

**SimpleInterceptor**

[\u7528\u6237\u8BA4\u8BC1](/auth)\u5185\u7F6E\u7528\u4E8E\u81EA\u52A8\u4E3A\u8BF7\u6C42\u6DFB\u52A0 \`token\` \u53C2\u6570\u7684\u62E6\u622A\u5668\u3002\u8FD9\u91CC\u8FD8\u6709\u4E00\u4E2A\u53EB [JWTInterceptor](https://github.com/ng-alain/delon/blob/master/packages/auth/token/jwt/jwt.interceptor.ts) \u62E6\u622A\u5668\uFF0C\u662F\u4E00\u4E2A\u6807\u51C6 JWT \u89C4\u8303\uFF0C\u82E5\u540E\u7AEF\u91C7\u7528\u6807\u51C6JWT\u53EF\u4EE5\u76F4\u63A5\u6362\u6210JWTInterceptor\u62E6\u622A\u5668\u3002

**DefaultInterceptor**

[DefaultInterceptor](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/net/default.interceptor.ts) \u62E6\u622A\u5668\u53EA\u662F\u63D0\u4F9B\u4E00\u4E2A\u62E6\u622A\u5668\u7684\u5199\u6CD5\uFF0C\u9ED8\u8BA4\u5305\u542B\u4E86\u7EDF\u4E00\u5904\u7406\u670D\u52A1\u5668\u8BF7\u6C42\u524D\u7F00\u3001\u5904\u7406\u8BF7\u6C42\u5F02\u5E38\u53CA\u4E1A\u52A1\u5F02\u5E38\u7684\u793A\u4F8B\u4EE3\u7801\uFF0C\u4F60\u53EF\u4EE5\u6839\u636E\u4F60\u81EA\u5DF1\u7684\u9700\u6C42\u505A\u8C03\u6574\u3002

**\u6CE8\u610F\u70B9**

\u6211\u4EEC\u53EF\u4EE5\u628A\u62E6\u622A\u5668 \`intercept\` \u65B9\u6CD5\u5185\uFF0C\u4EE5 \`next.handle(req)\` \u4E3A\u5206\u754C\u70B9\uFF0C\u524D\u90E8\u5206\u4E3A\u8BF7\u6C42\u524D\uFF0C\`pipe\` \u90E8\u5206\u4E3A\u63A5\u6536\u540E\u3002\u8FD9\u6837\u4F1A\u66F4\u660E\u786E\u77E5\u9053\u54EA\u4E00\u90E8\u5206\u662F\u8BF7\u6C42\u524D\u8981\u505A\uFF0C\u54EA\u4E00\u90E8\u5206\u662F\u8BF7\u6C42\u540E\u4F1A\u6267\u884C\u7684\u3002\u6709\u5173\u66F4\u591A\u62E6\u622A\u5668\u77E5\u8BC6\u8BF7\u53C2\u8003\u5B98\u7F51\u3002

## \u5F00\u53D1\u73AF\u5883

\u6B63\u5E38\u60C5\u51B5\u4E0B\u5F00\u53D1\u73AF\u5883\u548C\u751F\u4EA7\u73AF\u5883\u4E0D\u662F\u540C\u4E00\u4E2A\u540E\u7AEF\u8BF7\u6C42\u6E90\uFF0C\u5B9E\u9645\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E [environment](https://github.com/ng-alain/ng-alain/tree/master/src/environments) \u76EE\u5F55\u4E0B [environment.ts](https://github.com/ng-alain/ng-alain/blob/master/src/environments/environment.ts) \u548C [environment.prod.ts](https://github.com/ng-alain/ng-alain/blob/master/src/environments/environment.prod.ts) \u6539\u53D8\u4E0D\u540C\u73AF\u5883\u7684\u8BF7\u6C42\u6E90\u3002

> environment \u5B9E\u9645\u662F\u4E00\u4E2AJSON\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u7EC4\u7EC7\u4E0D\u540C\u5F62\u5F0F\u6765\u6EE1\u8DB3\u591A\u8BF7\u6C42\u6E90\u7684\u95EE\u9898\u3002

## Mock

\u6709\u65F6\u5019\u5E0C\u671B\u4F18\u5148\u5F00\u53D1\u524D\u7AEF\u65F6\uFF0C\u53EF\u4EE5\u5229\u7528 [@delon/mock](/mock) \u6765\u6A21\u62DF\u8BF7\u6C42\u6570\u636E\uFF0C\u5B9E\u9645\u539F\u7406\u662F\u5229\u7528\u62E6\u622A\u5668\uFF0C\u5BF9\u5339\u914D\u7684URL\u76F4\u63A5\u8FD4\u56DE\u6570\u636E\uFF0C\u800C\u4E0D\u662F\u53D1\u9001\u4E00\u4E2AHTTP\u8BF7\u6C42\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u53EA\u5BF9\u6D4B\u8BD5\u73AF\u5883\u6709\u6548\u3002\u5F53\u7136\u901A\u5E38\u60C5\u51B5\u4E0B\u4F60\u9700\u8981\u786E\u4FDD Mock \u63A5\u53E3\u7684\u6570\u636E\u4E0E\u540E\u7AEF\u4FDD\u6301\u4E00\u81F4\uFF0C\u4F60\u53EF\u4EE5\u5728 \`_mock\` \u76EE\u5F55\u4E0B\u521B\u5EFA\u76F8\u5E94\u7684 Mock \u63A5\u53E3\uFF1A

\`\`\`ts
export const USERS = {
  'GET /users': { users: [1, 2], total: 2 }
}
\`\`\`

\u56E0\u6B64\u5BF9\u4E8E\u6D4B\u8BD5\u73AF\u5883\u4E0B\u5F53\u9047\u5230 \`/users\` \u8BF7\u6C42\u76F4\u63A5\u8FD4\u56DE \`{ users: [1, 2], total: 2 }\` \u6570\u636E\u3002\u6709\u5173\u66F4\u591A Mock \u8BED\u6CD5\u548C\u4F7F\u7528\u65B9\u5F0F\u53C2\u8003[\u8FD9\u91CC](/mock)\u3002

**\u6CE8\uFF1A** \u5F53\u4F60\u4E0D\u9700\u8981\u67D0\u4E2A\u8BF7\u6C42\u7684 Mock \u63A5\u53E3\u65F6\uFF0C\u52A1\u5FC5\u8981\u6CE8\u91CA\u6389\u6216\u79FB\u9664\u5B83\u3002

## \u8DE8\u57DF

\u5927\u90E8\u5206\u5E94\u7528\u90FD\u4F1A\u524D\u540E\u7AEF\u5206\u79BB\u8FDB\u884C\u5F00\u53D1\uFF0C\u8FD9\u5BFC\u81F4\u5F53\u5BF9\u540E\u7AEF\u53D1\u8D77\u4E00\u4E2A\u8BF7\u6C42\u65F6\u4F1A\u53D7\u8DE8\u57DF\uFF08CORS\uFF09\u7684\u56E0\u7D20\uFF0C\u4F8B\u5982\uFF1A

\`\`\`ts
http.get(\`http://192.168.1.100/api/app\`).subscribe();
\`\`\`

> \u6CE8\uFF1A\u5982\u679C\u975E \`http\` \u5F00\u5934\u7684\u8BF7\u6C42\uFF0C\u4F1A\u5728\u6BCF\u4E2A\u8BF7\u6C42\u90FD\u4F1A\u52A0\u4E0A \`environment.SERVER_URL\` \u4F5C\u4E3A\u8BF7\u6C42 URL \u7684\u524D\u7F18\u3002

\u76F4\u63A5\u8FD4\u56DE\u4EE5\u4E0B\u9519\u8BEF\uFF1A

\`\`\`
Access to XMLHttpRequest at 'http://192.168.1.100/api/app' from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
\`\`\`

\u800C\u6B63\u5E38\u89E3\u51B3\u8DE8\u57DF\u95EE\u9898\u6709\u4E24\u79CD\u65B9\u6CD5\uFF0C\u4E00\u662F\u8BA9\u540E\u7AEF\u5F00\u53D1\u73AF\u5883\u76F4\u63A5\u652F\u6301\u8DE8\u57DF\u8BF7\u6C42\uFF08\u4E0D\u63A8\u8350\uFF0C\u4F46\u6700\u7B80\u5355\uFF09\uFF0C\u4E8C\u662F\u5229\u7528 Angular Cli \u63D0\u4F9B[\u4EE3\u7406\u652F\u6301](https://webpack.js.org/configuration/dev-server/#devserver-proxy)\uFF0C\u5F00\u53D1\u4EE3\u7406\u670D\u52A1\u5668\u4F1A\u5C06 Angular \u53D1\u9001\u7684\u8BF7\u6C42\u7684\u57DF\u548C\u7AEF\u53E3\u8F6C\u53D1\u7ED9\u540E\u7AEF\u670D\u52A1\u5668\uFF0CCORS \u662F\u6D4F\u89C8\u5668\u7684\u5B89\u5168\u9650\u5236\uFF0C\u5728\u4EE3\u7406\u670D\u52A1\u5668\u4E0E\u540E\u7AEF\u670D\u52A1\u5668\u4E4B\u524D\u5E76\u4E0D\u5B58\u5728 CORS \u7684\u95EE\u9898\uFF0C\u8FD9\u4E5F\u5C31\u662F\u4E3A\u4EC0\u4E48\u5F88\u591A\u4EBA\u4F1A\u5C1D\u8BD5\u660E\u660E\u5728 Postman \u80FD\u8BF7\u6C42\uFF0C\u800C\u5728 Angular \u4E0B\u65E0\u6CD5\u8BF7\u6C42\u7684\u539F\u56E0\u6240\u5728\u3002

\u5047\u5B9A\u6240\u6709\u540E\u7AEF\u8BF7\u6C42\u90FD\u662F\u4EE5 \`/api\` \u4E3A\u524D\u7F00\u65F6\uFF0C\u5C31\u53EF\u4EE5\u5728 \`proxy.conf.js\` \u914D\u7F6E\u6240\u6709\u8FD9\u4E2A\u524D\u7F00\u90FD\u8F6C\u5411\u65B0\u7684\u540E\u7AEF\uFF0C\u4F8B\u5982\uFF1A

\`\`\`js
module.exports = {
  '/api': {
    target: 'http://192.168.1.100/api',
    secure: false
  }
}
\`\`\`

- \`/api\` \u4EE3\u7406\u8DEF\u5F84\uFF0C\u4E0D\u652F\u6301\u57DF
- \`target\` \u4EE3\u7406\u76EE\u6807\u5730\u5740
- \`secure\` \u4EE3\u7406\u76EE\u6807\u5730\u5740\u5982\u679C\u662F \`https\` \u5E94\u8BE5\u8BBE\u7F6E\u4E3A \`true\`\uFF0C\u53CD\u4E4B\u4E3A \`false\`
- \`pathRewrite\` \u91CD\u5199\u5730\u5740\uFF0C\u4F8B\u5982 \`pathRewrite: {'^/api': '/'}\` \u5C06\u524D\u7F00 \`/api\` \u8F6C\u4E3A \`/\`
- \`changeOrigin\` \u5C06\u4E3B\u673A\u6807\u5934\u7684 \`host\` \u66F4\u6539\u4E3A\u76EE\u6807URL\uFF0C\u6709\u4E9B\u540E\u7AEF\u4F1A\u6839\u636E\u5176\u503C\u6765\u5224\u65AD\u662F\u5426\u6709\u6548\uFF0C\u53EF\u80FD\u9700\u8981\u901A\u8FC7\u8BBE\u7F6E \`true\`
- \`logLevel\` \u8BBE\u7F6E\u4E3A \`debug\` \u53EF\u4EE5\u7EC8\u7AEF\u663E\u793A\u4EE3\u7406\u8F6C\u53D1\u7684\u6D88\u606F

\u66F4\u591A\u4F7F\u7528\u8BF4\u660E\u8BF7\u53C2\u8003[\u4EE3\u7406\u5230\u540E\u7AEF\u670D\u52A1\u5668](https://angular.cn/guide/build#proxying-to-a-backend-server)\uFF0C\u4EE5\u53CA\u914D\u7F6E\u63CF\u8FF0\u8BF7\u53C2\u8003[http-proxy-middleware options](https://github.com/chimurai/http-proxy-middleware#options)\u3002

## \u5E38\u89C1\u95EE\u9898

**\u8BF7\u6C42\u53EF\u80FD\u88AB\u62D2\u7EDD\u6216\u76F4\u63A5\u8FD4\u56DE \`401\` ?**

\u811A\u624B\u67B6\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F7F\u7528\u4E86 \`@delon/auth\` \u7684 \`SimpleInterceptor\` \u62E6\u622A\u5668\uFF0C\u5BFC\u81F4\u5728\u8BF7\u6C42\u8FC7\u7A0B\u4E2D\u82E5\u53D1\u73B0\u65E0\u6CD5\u83B7\u53D6 Token \u65F6\u4F1A\u76F4\u63A5\u8FD4\u56DE\u9519\u8BEF\u3002

[\u7528\u6237\u8BA4\u8BC1](/auth)\u8FD9\u4E2A\u8FC7\u7A0B\u662F\u4E2D\u53F0\u5FC5\u5907\u7684\u3002

**\u5173\u4E8E\u65E0\u6CD5\u663E\u793A\u8BF7\u6C42\u65E5\u5FD7**

\u4ECE Angular13 \u5F00\u59CB\u8FDC\u7A0B\u8BF7\u6C42\u7684\u8C03\u8BD5\u65E5\u5FD7\u5C06\u4E0D\u518D\u7EC8\u7AEF\u4E2D\u663E\u793A\uFF0C\u82E5\u6709\u663E\u793A\u65E5\u671F\u9700\u6C42\uFF0C\u53EF\u81EA\u884C\u53C2\u8003 [How to fix logging for proxy in angular](https://medium.com/@gagandeep.sidhu88/how-to-fix-logging-for-proxy-in-angular-834cf46d437d) \u89E3\u51B3\u3002`}}};codes=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=o({type:n,selectors:[["docs-server"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&i(0,"app-docs",0),e&2&&a("codes",t.codes)("item",t.item)},dependencies:[r],encapsulation:2})};var z=class n{item={name:"ssr",langs:["zh-CN"],content:{"zh-CN":{meta:{order:110,title:"\u670D\u52A1\u7AEF\u6E32\u67D3\uFF08SSR\uFF09",description:"\u672C\u6587\u63CF\u8FF0\u7684\u662F NG-ALAIN \u5982\u4F55\u652F\u6301\u670D\u52A1\u7AEF\u6E32\u67D3\uFF08SSR\uFF09\u3002NG-ALAIN \u4E0D\u63A8\u8350\u5728\u4E2D\u540E\u53F0\u4F7F\u7528\u670D\u52A1\u7AEF\u6E32\u67D3\uFF08SSR\uFF09\uFF0C\u8FD9\u662F\u56E0\u4E3A\u4E2D\u540E\u53F0\u672C\u8EAB\u5BF9\u4E8ESSR\u6240\u5E26\u6765\u7684\u597D\u5904\u8FDC\u5927\u4E8E\u5F00\u53D1\u5E26\u6765\u7684\u9EBB\u70E6\uFF0C\u4F46\u4E0D\u7BA1\u600E\u4E48\u6837\u5728\u8BB8\u591A\u4EBA\u7684\u8981\u6C42\u4E0B\uFF0C\u4ECE 9.5 \u7248\u672C\u5F00\u59CB\uFF0C\u5DF2\u7ECF\u5BF9\u6240\u6709 @delon/* \u7C7B\u5E93\u652F\u6301\u670D\u52A1\u7AEF\u6E32\u67D3\u3002\u5728\u5F00\u59CB\u4E4B\u524D\u8BF7\u5148\u9605...",group:"Dev",path:"docs/ssr.md",url:"/docs/ssr/zh"},text:`<p>\u672C\u6587\u63CF\u8FF0\u7684\u662F NG-ALAIN \u5982\u4F55\u652F\u6301\u670D\u52A1\u7AEF\u6E32\u67D3\uFF08SSR\uFF09\u3002</p>
<blockquote>
<p>NG-ALAIN <strong>\u4E0D\u63A8\u8350</strong>\u5728\u4E2D\u540E\u53F0\u4F7F\u7528\u670D\u52A1\u7AEF\u6E32\u67D3\uFF08SSR\uFF09\uFF0C\u8FD9\u662F\u56E0\u4E3A\u4E2D\u540E\u53F0\u672C\u8EAB\u5BF9\u4E8ESSR\u6240\u5E26\u6765\u7684\u597D\u5904\u8FDC\u5927\u4E8E\u5F00\u53D1\u5E26\u6765\u7684\u9EBB\u70E6\uFF0C\u4F46\u4E0D\u7BA1\u600E\u4E48\u6837\u5728\u8BB8\u591A\u4EBA\u7684\u8981\u6C42\u4E0B\uFF0C\u4ECE <code>9.5</code> \u7248\u672C\u5F00\u59CB\uFF0C\u5DF2\u7ECF\u5BF9\u6240\u6709 <code>&#64;delon/*</code> \u7C7B\u5E93\u652F\u6301\u670D\u52A1\u7AEF\u6E32\u67D3\u3002</p>
</blockquote>
<h2 id="\u5F00\u59CB\u4E4B\u524D"><a class="lake-link"><i data-anchor="\u5F00\u59CB\u4E4B\u524D"></i></a>\u5F00\u59CB\u4E4B\u524D</h2><p>\u5728\u5F00\u59CB\u4E4B\u524D\u8BF7\u5148\u9605\u8BFB\u4EE5\u4E0B\u6587\u7AE0\uFF0C\u5B83\u4EEC\u80FD\u591F\u66F4\u52A0\u5FEB\u901F\u8BA9\u4F60\u4E86\u89E3 Angular \u670D\u52A1\u7AEF\u6E32\u67D3\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\uFF1A</p>
<ul>
<li><a href="https://angular.cn/guide/universal" target="_blank" rel="noopener">Angular Universal\uFF1AAngular \u7EDF\u4E00\u5E73\u53F0\u7B80\u4ECB</a></li>
<li><a href="https://www.cnc.io/en/blog/angular-server-side-rendering" target="_blank" rel="noopener">Partial Server Side Rendering with Angular 9 and How to Deploy it</a></li>
</ul>
<h2 id="\u6559\u7A0B"><a class="lake-link"><i data-anchor="\u6559\u7A0B"></i></a>\u6559\u7A0B</h2><h3 id="\u6DFB\u52A0_lesscodegreaternguniversal/express-engineless/codegreater"><a class="lake-link"><i data-anchor="\u6DFB\u52A0_lesscodegreaternguniversal/express-engineless/codegreater"></i></a>\u6DFB\u52A0 <code>&#64;nguniversal/express-engine</code></h3><p>\u5728\u4E00\u4E2A\u5B8C\u6574\u7684 NG-ALAIN \u9879\u76EE\u4E0B\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p>
<pre><code class="language-bash">ng add &#64;nguniversal/express-engine
</code></pre>
<p>\u6700\u540E\u8FD0\u884C\uFF1A</p>
<pre><code class="language-bash">npm run dev:ssr
</code></pre>
<p>\u6B64\u65F6\u4F1A\u4EE5 SSR \u7684\u5F62\u5F0F\u8FD0\u884C NG-ALAIN\u3002</p>
<p>\u4F46\u5982\u679C\u91C7\u7528\u9ED8\u8BA4 <code>LocalStorageStore</code> \u6765\u5B58\u50A8 Token \u7684\u60C5\u51B5\u4E0B\uFF0C\u4F1A\u63D0\u793A\u627E\u4E0D\u5230 <code>localStorage</code> \u7684\u9519\u8BEF\uFF0C\u8FD9\u662F\u56E0\u4E3A\u670D\u52A1\u7AEF\u5E76\u6CA1\u6709\u8FD9\u4E9B\uFF0C\u5B83\u4EEC\u53EF\u80FD\u8FD8\u5305\u542B <code>window</code>\u3001<code>document</code>\u3001<code>sessionStorage</code> \u7B49\u3002</p>
<p>\u56E0\u6B64\uFF0C\u8981\u60F3\u5728\u4E2D\u540E\u53F0\u5F88\u597D\u7684\u652F\u6301 SSR\uFF0C\u9700\u8981\u5206\u6790\u6240\u4F9D\u8D56\u7684\u7B2C\u4E09\u65B9\u7C7B\u5E93\u662F\u5426\u652F\u6301 SSR\uFF0C\u5982\u679C\u6CA1\u6709\u5FC5\u987B\u624B\u52A8\u5904\u7406\u5728\u670D\u52A1\u7AEF\u4E0B\u4E0D\u6E32\u67D3\u8FD9\u4E9B\u7EC4\u4EF6\u3002</p>
<h3 id="\u4E22\u5931token"><a class="lake-link"><i data-anchor="\u4E22\u5931token"></i></a>\u4E22\u5931Token</h3><p>\u670D\u52A1\u7AEF\u662F\u65E0\u72B6\u6001\u7684\uFF0C\u56E0\u6B64\u5224\u65AD\u8BF7\u6C42\u662F\u5426\u6709\u6548\u6388\u6743\uFF0C\u76EE\u524D\u901A\u7528\u7684\u505A\u6CD5\u662F\u5C06 Token \u5B58\u50A8\u5728 Cookie \u4E0B\uFF0C\u5728\u670D\u52A1\u7AEF\u63A5\u6536\u8BF7\u6C42\u65F6\u518D\u6839\u636E Cookies \u6765\u83B7\u53D6 Token \u4FE1\u606F\u3002</p>
<p>\u867D\u7136 NG-ALAIN \u63D0\u4F9B <code>CookieStorageStore</code> \u4F46\u5B83\u5E76\u4E0D\u652F\u6301\u670D\u52A1\u7AEF SSR \u8BBF\u95EE Cookie\uFF0C\u56E0\u6B64\u9700\u8981\u624B\u52A8\u6784\u5EFA\u9488\u5BF9 SSR \u7684 Token \u6301\u4E45\u5316\u5B58\u50A8\u3002</p>
<p>\u63A8\u8350\u4F7F\u7528 <a href="https://github.com/ngx-utils/cookies" target="_blank" rel="noopener">&#64;ngx-utils/cookies</a> \u6765\u5904\u7406 Cookies\uFF0C\u5B83\u540C\u65F6\u652F\u6301\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u7AEF\u3002</p>
<blockquote>
<p><strong>\u6CE8\u610F\uFF1A</strong> \u53D7\u9650\u4E8E <a href="https://github.com/ngx-utils/cookies/issues/20" target="_blank" rel="noopener">#20</a> \u7684\u539F\u56E0\uFF0C\u7531\u4E8E\u4E00\u76F4\u672A\u5904\u7406\uFF0C\u6709\u4EBA\u4E13\u95E8\u89E3\u51B3\u4E86\u8FD9\u4E2A\u95EE\u9898\u5E76\u53D1\u5E03\u4E00\u4E2A\u65B0\u7C7B\u5E93 <a href="https://www.npmjs.com/package/ngx-utils-cookies-port" target="_blank" rel="noopener">ngx-utils-cookies-port</a>\uFF0C\u6682\u65F6\u53EA\u80FD\u4F7F\u7528\u5B83\u6765\u4EE3\u66FF <code>&#64;ngx-utils/cookies</code>\uFF0C\u7528\u6CD5\u4E00\u6A21\u4E00\u6837\u53EA\u662F\u6A21\u5757\u540D\u6362\u4E00\u4E0B\uFF0C\u5728\u4FEE\u590D\u4E4B\u540E\u518D\u6362\u56DE\u6765\u3002</p>
</blockquote>
<p>\u8981\u521B\u5EFA\u4E00\u4E2A\u7B26\u5408 <code>&#64;delon/auth</code> \u63A5\u53E3\u6301\u4E45\u5316\u5B58\u50A8\u7C7B\uFF0C\u53EA\u9700\u8981\u7EE7\u627F <code>IStore</code> \u5373\u53EF\uFF0C\u4F8B\u5982\uFF1A</p>
<pre><code class="language-ts">import &#123; Injectable &#125; from &#39;&#64;angular/core&#39;;
import &#123; IStore, ITokenModel &#125; from &#39;&#64;delon/auth&#39;;
import &#123; CookiesService &#125; from &#39;ngx-utils-cookies-port&#39;;

&#64;Injectable()
export class AuthStorageStore implements IStore &#123;
  constructor(private cookies: CookiesService) &#123;&#125;

  get(key: string): ITokenModel &#123;
    return JSON.parse(this.cookies.get(key) || &#39;&#123;&#125;&#39;) || &#123;&#125;;
  &#125;

  set(key: string, value: ITokenModel | null): boolean &#123;
    this.cookies.put(key, JSON.stringify(value));
    return true;
  &#125;

  remove(key: string) &#123;
    this.cookies.remove(key);
  &#125;
&#125;
</code></pre>
<p>\u6700\u540E\uFF0C\u5728 <code>global-config.module.ts</code> \u5185\u91CD\u65B0\u6CE8\u518C\u5B83\uFF1A</p>
<pre><code class="language-diff"> const alainProvides = [
   provideAlainConfig(alainConfig)
+  &#123; provide: DA_STORE_TOKEN, useClass: AuthStorageStore &#125;,
 ];
</code></pre>
<p><strong>\u6CE8\u610F\uFF1A\u8FD9\u91CC\u4F9D\u7136\u9700\u8981\u6CE8\u518C\u65B0\u589E\u7684\u6A21\u5757\uFF0C\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="https://github.com/ngx-utils/cookies#getting-started" target="_blank" rel="noopener">&#64;ngx-utils/cookies</a> \u8BF4\u660E\u3002</strong></p>
<p><code>&#64;ngx-utils/cookies</code> \u5185\u90E8\u4F1A\u6839\u636E <code>REQUEST</code> \u6765\u83B7\u53D6\u5F53\u524D\u7684\u8BF7\u6C42\u5934\u4FE1\u606F\uFF0C\u56E0\u6B64\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u4FEE\u6539 <code>server.ts</code>\uFF1A</p>
<pre><code class="language-diff">  // All regular routes use the Universal engine
  server.get(&#39;*&#39;, (req, res) =&gt; &#123;
    res.render(indexHtml, &#123;
      req,
+     res,
      providers: [
        &#123; provide: APP_BASE_HREF, useValue: req.baseUrl &#125;,
+       &#123; provide: &#39;REQUEST&#39;, useValue: req &#125;,
+       &#123; provide: &#39;RESPONSE&#39;, useValue: res &#125;,
      ],
    &#125;);
  &#125;);
</code></pre>
`,api:"",toc:[{id:"\u5F00\u59CB\u4E4B\u524D",title:"\u5F00\u59CB\u4E4B\u524D"},{id:"\u6559\u7A0B",title:"\u6559\u7A0B",children:[{id:"\u6DFB\u52A0",title:"\u6DFB\u52A0 "},{id:"\u4E22\u5931token",title:"\u4E22\u5931Token"}]}],raw:`---
order: 110
title: \u670D\u52A1\u7AEF\u6E32\u67D3\uFF08SSR\uFF09
type: Dev
---

\u672C\u6587\u63CF\u8FF0\u7684\u662F NG-ALAIN \u5982\u4F55\u652F\u6301\u670D\u52A1\u7AEF\u6E32\u67D3\uFF08SSR\uFF09\u3002

> NG-ALAIN **\u4E0D\u63A8\u8350**\u5728\u4E2D\u540E\u53F0\u4F7F\u7528\u670D\u52A1\u7AEF\u6E32\u67D3\uFF08SSR\uFF09\uFF0C\u8FD9\u662F\u56E0\u4E3A\u4E2D\u540E\u53F0\u672C\u8EAB\u5BF9\u4E8ESSR\u6240\u5E26\u6765\u7684\u597D\u5904\u8FDC\u5927\u4E8E\u5F00\u53D1\u5E26\u6765\u7684\u9EBB\u70E6\uFF0C\u4F46\u4E0D\u7BA1\u600E\u4E48\u6837\u5728\u8BB8\u591A\u4EBA\u7684\u8981\u6C42\u4E0B\uFF0C\u4ECE \`9.5\` \u7248\u672C\u5F00\u59CB\uFF0C\u5DF2\u7ECF\u5BF9\u6240\u6709 \`@delon/*\` \u7C7B\u5E93\u652F\u6301\u670D\u52A1\u7AEF\u6E32\u67D3\u3002

## \u5F00\u59CB\u4E4B\u524D

\u5728\u5F00\u59CB\u4E4B\u524D\u8BF7\u5148\u9605\u8BFB\u4EE5\u4E0B\u6587\u7AE0\uFF0C\u5B83\u4EEC\u80FD\u591F\u66F4\u52A0\u5FEB\u901F\u8BA9\u4F60\u4E86\u89E3 Angular \u670D\u52A1\u7AEF\u6E32\u67D3\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\uFF1A

 - [Angular Universal\uFF1AAngular \u7EDF\u4E00\u5E73\u53F0\u7B80\u4ECB](https://angular.cn/guide/universal)
 - [Partial Server Side Rendering with Angular 9 and How to Deploy it](https://www.cnc.io/en/blog/angular-server-side-rendering)

## \u6559\u7A0B

### \u6DFB\u52A0 \`@nguniversal/express-engine\`

\u5728\u4E00\u4E2A\u5B8C\u6574\u7684 NG-ALAIN \u9879\u76EE\u4E0B\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A

\`\`\`bash
ng add @nguniversal/express-engine
\`\`\`

\u6700\u540E\u8FD0\u884C\uFF1A

\`\`\`bash
npm run dev:ssr
\`\`\`

\u6B64\u65F6\u4F1A\u4EE5 SSR \u7684\u5F62\u5F0F\u8FD0\u884C NG-ALAIN\u3002

\u4F46\u5982\u679C\u91C7\u7528\u9ED8\u8BA4 \`LocalStorageStore\` \u6765\u5B58\u50A8 Token \u7684\u60C5\u51B5\u4E0B\uFF0C\u4F1A\u63D0\u793A\u627E\u4E0D\u5230 \`localStorage\` \u7684\u9519\u8BEF\uFF0C\u8FD9\u662F\u56E0\u4E3A\u670D\u52A1\u7AEF\u5E76\u6CA1\u6709\u8FD9\u4E9B\uFF0C\u5B83\u4EEC\u53EF\u80FD\u8FD8\u5305\u542B \`window\`\u3001\`document\`\u3001\`sessionStorage\` \u7B49\u3002

\u56E0\u6B64\uFF0C\u8981\u60F3\u5728\u4E2D\u540E\u53F0\u5F88\u597D\u7684\u652F\u6301 SSR\uFF0C\u9700\u8981\u5206\u6790\u6240\u4F9D\u8D56\u7684\u7B2C\u4E09\u65B9\u7C7B\u5E93\u662F\u5426\u652F\u6301 SSR\uFF0C\u5982\u679C\u6CA1\u6709\u5FC5\u987B\u624B\u52A8\u5904\u7406\u5728\u670D\u52A1\u7AEF\u4E0B\u4E0D\u6E32\u67D3\u8FD9\u4E9B\u7EC4\u4EF6\u3002

### \u4E22\u5931Token

\u670D\u52A1\u7AEF\u662F\u65E0\u72B6\u6001\u7684\uFF0C\u56E0\u6B64\u5224\u65AD\u8BF7\u6C42\u662F\u5426\u6709\u6548\u6388\u6743\uFF0C\u76EE\u524D\u901A\u7528\u7684\u505A\u6CD5\u662F\u5C06 Token \u5B58\u50A8\u5728 Cookie \u4E0B\uFF0C\u5728\u670D\u52A1\u7AEF\u63A5\u6536\u8BF7\u6C42\u65F6\u518D\u6839\u636E Cookies \u6765\u83B7\u53D6 Token \u4FE1\u606F\u3002

\u867D\u7136 NG-ALAIN \u63D0\u4F9B \`CookieStorageStore\` \u4F46\u5B83\u5E76\u4E0D\u652F\u6301\u670D\u52A1\u7AEF SSR \u8BBF\u95EE Cookie\uFF0C\u56E0\u6B64\u9700\u8981\u624B\u52A8\u6784\u5EFA\u9488\u5BF9 SSR \u7684 Token \u6301\u4E45\u5316\u5B58\u50A8\u3002

\u63A8\u8350\u4F7F\u7528 [@ngx-utils/cookies](https://github.com/ngx-utils/cookies) \u6765\u5904\u7406 Cookies\uFF0C\u5B83\u540C\u65F6\u652F\u6301\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u7AEF\u3002

> **\u6CE8\u610F\uFF1A** \u53D7\u9650\u4E8E [#20](https://github.com/ngx-utils/cookies/issues/20) \u7684\u539F\u56E0\uFF0C\u7531\u4E8E\u4E00\u76F4\u672A\u5904\u7406\uFF0C\u6709\u4EBA\u4E13\u95E8\u89E3\u51B3\u4E86\u8FD9\u4E2A\u95EE\u9898\u5E76\u53D1\u5E03\u4E00\u4E2A\u65B0\u7C7B\u5E93 [ngx-utils-cookies-port](https://www.npmjs.com/package/ngx-utils-cookies-port)\uFF0C\u6682\u65F6\u53EA\u80FD\u4F7F\u7528\u5B83\u6765\u4EE3\u66FF \`@ngx-utils/cookies\`\uFF0C\u7528\u6CD5\u4E00\u6A21\u4E00\u6837\u53EA\u662F\u6A21\u5757\u540D\u6362\u4E00\u4E0B\uFF0C\u5728\u4FEE\u590D\u4E4B\u540E\u518D\u6362\u56DE\u6765\u3002

\u8981\u521B\u5EFA\u4E00\u4E2A\u7B26\u5408 \`@delon/auth\` \u63A5\u53E3\u6301\u4E45\u5316\u5B58\u50A8\u7C7B\uFF0C\u53EA\u9700\u8981\u7EE7\u627F \`IStore\` \u5373\u53EF\uFF0C\u4F8B\u5982\uFF1A

\`\`\`ts
import { Injectable } from '@angular/core';
import { IStore, ITokenModel } from '@delon/auth';
import { CookiesService } from 'ngx-utils-cookies-port';

@Injectable()
export class AuthStorageStore implements IStore {
  constructor(private cookies: CookiesService) {}

  get(key: string): ITokenModel {
    return JSON.parse(this.cookies.get(key) || '{}') || {};
  }

  set(key: string, value: ITokenModel | null): boolean {
    this.cookies.put(key, JSON.stringify(value));
    return true;
  }

  remove(key: string) {
    this.cookies.remove(key);
  }
}
\`\`\`

\u6700\u540E\uFF0C\u5728 \`global-config.module.ts\` \u5185\u91CD\u65B0\u6CE8\u518C\u5B83\uFF1A

\`\`\`diff
 const alainProvides = [
   provideAlainConfig(alainConfig)
+  { provide: DA_STORE_TOKEN, useClass: AuthStorageStore },
 ];
\`\`\`

**\u6CE8\u610F\uFF1A\u8FD9\u91CC\u4F9D\u7136\u9700\u8981\u6CE8\u518C\u65B0\u589E\u7684\u6A21\u5757\uFF0C\u65B9\u6CD5\u8BF7\u53C2\u8003 [@ngx-utils/cookies](https://github.com/ngx-utils/cookies#getting-started) \u8BF4\u660E\u3002**

\`@ngx-utils/cookies\` \u5185\u90E8\u4F1A\u6839\u636E \`REQUEST\` \u6765\u83B7\u53D6\u5F53\u524D\u7684\u8BF7\u6C42\u5934\u4FE1\u606F\uFF0C\u56E0\u6B64\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u4FEE\u6539 \`server.ts\`\uFF1A

\`\`\`diff
  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, {
      req,
+     res,
      providers: [
        { provide: APP_BASE_HREF, useValue: req.baseUrl },
+       { provide: 'REQUEST', useValue: req },
+       { provide: 'RESPONSE', useValue: res },
      ],
    });
  });
\`\`\``}}};codes=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=o({type:n,selectors:[["docs-ssr"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&i(0,"app-docs",0),e&2&&a("codes",t.codes)("item",t.item)},dependencies:[r],encapsulation:2})};var T=class n{item={name:"style-guide",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:90,title:"Style Guide",description:"The project built by Angular CLI is already very good in terms of its directory structure. Official website also has an Angular Style Guide (Chinese v...",group:"Advance",path:"docs/style-guide.en-US.md",url:"/docs/style-guide/en"},text:`<p>The project built by Angular CLI is already very good in terms of its directory structure. Official website also has an <a href="https://angular.io/guide/styleguide" target="_blank" rel="noopener">Angular Style Guide</a> (<a href="https://angular.cn/guide/styleguide" target="_blank" rel="noopener">Chinese version</a>) Style guide. It is recommended to read it several times. In addition, NG-ALAIN also has a part of the coding style, the following instructions may be useful for reading the code.</p>
<h2 id="consistent_code_style"><a class="lake-link"><i data-anchor="consistent_code_style"></i></a>Consistent code style</h2><p>NG-ALAIN uses <a href="https://eslint.org/" target="_blank" rel="noopener">ESLint</a> to <strong>guarantee code quality</strong> and <a href="https://prettier.io/" target="_blank" rel="noopener">Prettier</a> to <strong>optimize the code style</strong>.</p>
<p>It is recommended to install several plugins for more friendly development in vscode:</p>
<ul>
<li><a href="https://marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode" target="_blank" rel="noopener">ng-zorro snippets</a></li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode" target="_blank" rel="noopener">ng-alain snippets</a></li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank" rel="noopener">ESLint</a></li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank" rel="noopener">Prettier - Code formatter</a></li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig" target="_blank" rel="noopener">EditorConfig for VS Code</a></li>
</ul>
<p>Of course, NG-ALAIN has prepared a complete set of extension packs for everyone, just install <a href="https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-extension-pack" target="_blank" rel="noopener">NG-ALAIN Extension Pack</a>.</p>
<h2 id="git_-_pre_commit_hook"><a class="lake-link"><i data-anchor="git_-_pre_commit_hook"></i></a>Git - pre commit Hook</h2><p>The <code>ng lint</code> command provided by Angular, can be very effective in helping us find bugs and readability earlier. Isn&#39;t it cool if we can guarantee that the lint of the file in staged is automatically done before each commit in the team development process?</p>
<p>NG-ALAIN is configured to do lint each time you commit to staged and you can&#39;t commit if you find an error.</p>
<p>By default, the <code>*.ts</code>, <code>*.less</code> commit process forces the formatting of the code. You can change the rules by modifying the <code>husky</code> node of <code>package.json</code>.</p>
<blockquote>
<p>If <strong>hint: The&#39;.husky/pre-commit&#39; hook was ignored because it&#39;s not set as executable.</strong> is generated when executing <code>git commit -m &quot;commit&quot;</code>, it may be due to permission issues. Try to execute in the project root directory:</p>
</blockquote>
<pre><code class="language-bash">chmod ug+x .husky/*
chmod ug+x .git/hooks/*
</code></pre>
<h2 id="style_guide"><a class="lake-link"><i data-anchor="style_guide"></i></a>Style guide</h2><h3 id="api_documentation"><a class="lake-link"><i data-anchor="api_documentation"></i></a>API documentation</h3><p>Applications are always inevitable for the development of business components. We can not guarantee that you can remember these after a certain time. So, make sure to include the <code>README.md</code> document in each business component and describe the API, DEMO and other information.</p>
<p>For example:</p>
<pre><code class="language-markdown">## When do you use it?

Instruction

## DEMO

Instruction

## API

Parameter | Description | Type | Default
----|------|-----|------
src | The map&#39;s address  | \`string\` | -
</code></pre>
<h3 id="module_registration"><a class="lake-link"><i data-anchor="module_registration"></i></a>Module registration</h3><p>Please parameter <a href="/docs/module">module registration guidelines</a>.</p>
<h2 id="auxiliary_item"><a class="lake-link"><i data-anchor="auxiliary_item"></i></a>Auxiliary item</h2><p>NG-ALAIN is configured with some options for the CLI to better code.</p>
<h3 id="cli"><a class="lake-link"><i data-anchor="cli"></i></a>CLI</h3><p>Vscode is the best choice for writing Angular. You can type: <code>ng g c list</code> in any directory of the project to generate the corresponding files for the component.</p>
<p>NG-ALAIN is configured by default without generating style files &amp; unit tests. So you will see that only <code>.ts</code>, <code>.html</code> are generated. This is because NG-ALAIN provides a very rich style API, and custom styles are not just needed on most pages. At the same time, unit tests.</p>
<p>Of course, you can easily adjust the default configuration in <code>angular.json</code>.</p>
<h3 id="vscode_snippets"><a class="lake-link"><i data-anchor="vscode_snippets"></i></a>VSCode snippets</h3><p>VSCode is the best choice for writing Angular. Naturally NG-ALAIN also created the corresponding snippets extension: <a href="//marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode" target="_blank" rel="noopener">ng-zorro-vscode</a> and <a href="//marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode" target="_blank" rel="noopener">ng-alain-vscode</a>.</p>
`,api:"",toc:[{id:"consistent_code_style",title:"Consistent code style"},{id:"git_-_pre_commit_hook",title:"Git - pre commit Hook"},{id:"style_guide",title:"Style guide",children:[{id:"api_documentation",title:"API documentation"},{id:"module_registration",title:"Module registration"}]},{id:"auxiliary_item",title:"Auxiliary item",children:[{id:"cli",title:"CLI"},{id:"vscode_snippets",title:"VSCode snippets"}]}],raw:`---
order: 90
title:
  en-US: Style Guide
  zh-CN: \u7F16\u7801\u89C4\u8303\u5EFA\u8BAE
type: Advance
---

The project built by Angular CLI is already very good in terms of its directory structure. Official website also has an [Angular Style Guide](https://angular.io/guide/styleguide) ([Chinese version](https://angular.cn/guide/styleguide)) Style guide. It is recommended to read it several times. In addition, NG-ALAIN also has a part of the coding style, the following instructions may be useful for reading the code.

## Consistent code style

NG-ALAIN uses [ESLint](https://eslint.org/) to **guarantee code quality** and [Prettier](https://prettier.io/) to **optimize the code style**.

It is recommended to install several plugins for more friendly development in vscode:

- [ng-zorro snippets](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode)
- [ng-alain snippets](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

Of course, NG-ALAIN has prepared a complete set of extension packs for everyone, just install [NG-ALAIN Extension Pack](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-extension-pack).

## Git - pre commit Hook

The \`ng lint\` command provided by Angular, can be very effective in helping us find bugs and readability earlier. Isn't it cool if we can guarantee that the lint of the file in staged is automatically done before each commit in the team development process?

NG-ALAIN is configured to do lint each time you commit to staged and you can't commit if you find an error.

By default, the \`*.ts\`, \`*.less\` commit process forces the formatting of the code. You can change the rules by modifying the \`husky\` node of \`package.json\`.

> If **hint: The'.husky/pre-commit' hook was ignored because it's not set as executable.** is generated when executing \`git commit -m "commit"\`, it may be due to permission issues. Try to execute in the project root directory:

\`\`\`bash
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
\`\`\`

## Style guide

### API documentation

Applications are always inevitable for the development of business components. We can not guarantee that you can remember these after a certain time. So, make sure to include the \`README.md\` document in each business component and describe the API, DEMO and other information. 

For example:

\`\`\`markdown
## When do you use it?

Instruction

## DEMO

Instruction

## API

Parameter | Description | Type | Default
----|------|-----|------
src | The map's address  | \`string\` | -
\`\`\`

### Module registration

Please parameter [module registration guidelines](/docs/module).

## Auxiliary item

NG-ALAIN is configured with some options for the CLI to better code.

### CLI

Vscode is the best choice for writing Angular. You can type: \`ng g c list\` in any directory of the project to generate the corresponding files for the component.

NG-ALAIN is configured by default without generating style files & unit tests. So you will see that only \`.ts\`, \`.html\` are generated. This is because NG-ALAIN provides a very rich style API, and custom styles are not just needed on most pages. At the same time, unit tests.

Of course, you can easily adjust the default configuration in \`angular.json\`.

### VSCode snippets

VSCode is the best choice for writing Angular. Naturally NG-ALAIN also created the corresponding snippets extension: [ng-zorro-vscode](//marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode) and [ng-alain-vscode](//marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode).`},"zh-CN":{meta:{order:90,title:"\u7F16\u7801\u89C4\u8303\u5EFA\u8BAE",description:"Angular CLI \u6784\u5EFA\u7684\u9879\u76EE\u5C31\u5176\u76EE\u5F55\u7ED3\u6784\u800C\u8A00\u5DF2\u7ECF\u975E\u5E38\u68D2\u4E86\uFF0C\u540C\u65F6\u5B98\u7F51\u4E5F\u6709\u4E00\u4EFD Angular Style Guide\uFF08\u4E2D\u6587\u7248\uFF09\u98CE\u683C\u6307\u5357\uFF0C\u5EFA\u8BAE\u597D\u597D\u9605\u8BFB\u51E0\u904D\u3002\u9664\u6B64\u4E4B\u5916\uFF0CNG-ALAIN \u4E5F\u6709\u4E00\u90E8\u5206\u7F16\u7801\u98CE\u683C\uFF0C\u5982\u4E0B\u8BF4\u660E\u53EF\u80FD\u5BF9\u4E8E\u4F60\u9605\u8BFB\u4EE3\u7801\u65F6\u6709\u7528\u3002NG-ALAIN \u4F7F\u7528 ESLint \u6765\u4FDD\u8BC1\u4EE3\u7801\u8D28\u91CF \u4E0E P...",group:"Advance",path:"docs/style-guide.zh-CN.md",url:"/docs/style-guide/zh"},text:`<p>Angular CLI \u6784\u5EFA\u7684\u9879\u76EE\u5C31\u5176\u76EE\u5F55\u7ED3\u6784\u800C\u8A00\u5DF2\u7ECF\u975E\u5E38\u68D2\u4E86\uFF0C\u540C\u65F6\u5B98\u7F51\u4E5F\u6709\u4E00\u4EFD <a href="https://angular.io/guide/styleguide" target="_blank" rel="noopener">Angular Style Guide</a>\uFF08<a href="https://angular.cn/guide/styleguide" target="_blank" rel="noopener">\u4E2D\u6587\u7248</a>\uFF09\u98CE\u683C\u6307\u5357\uFF0C\u5EFA\u8BAE\u597D\u597D\u9605\u8BFB\u51E0\u904D\u3002\u9664\u6B64\u4E4B\u5916\uFF0CNG-ALAIN \u4E5F\u6709\u4E00\u90E8\u5206\u7F16\u7801\u98CE\u683C\uFF0C\u5982\u4E0B\u8BF4\u660E\u53EF\u80FD\u5BF9\u4E8E\u4F60\u9605\u8BFB\u4EE3\u7801\u65F6\u6709\u7528\u3002</p>
<h2 id="\u4E00\u81F4\u7684\u4EE3\u7801\u98CE\u683C"><a class="lake-link"><i data-anchor="\u4E00\u81F4\u7684\u4EE3\u7801\u98CE\u683C"></i></a>\u4E00\u81F4\u7684\u4EE3\u7801\u98CE\u683C</h2><p>NG-ALAIN \u4F7F\u7528 <a href="https://eslint.org/" target="_blank" rel="noopener">ESLint</a> \u6765<strong>\u4FDD\u8BC1\u4EE3\u7801\u8D28\u91CF</strong> \u4E0E <a href="https://prettier.io/" target="_blank" rel="noopener">Prettier</a> \u6765<strong>\u4F18\u5316\u4EE3\u7801\u98CE\u683C</strong>\u3002</p>
<p>\u63A8\u8350\u5B89\u88C5\u51E0\u4E2A\u63D2\u4EF6\u5728 vscode \u4E2D\u66F4\u53CB\u597D\u7684\u5F00\u53D1\uFF1A</p>
<ul>
<li><a href="https://marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode" target="_blank" rel="noopener">ng-zorro snippets</a></li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode" target="_blank" rel="noopener">ng-alain snippets</a></li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank" rel="noopener">ESLint</a></li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank" rel="noopener">Prettier - Code formatter</a></li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig" target="_blank" rel="noopener">EditorConfig for VS Code</a></li>
</ul>
<p>\u5F53\u7136\uFF0CNG-ALAIN \u4E3A\u5927\u5BB6\u51C6\u5907\u4E86\u4E00\u5957\u5B8C\u6574\u7684\u6269\u5C55\u5305\uFF0C\u53EA\u9700\u8981\u5B89\u88C5 <a href="https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-extension-pack" target="_blank" rel="noopener">NG-ALAIN Extension Pack</a> \u5373\u53EF\u3002</p>
<h3 id="git_-_pre_commit_\u52FE\u5B50"><a class="lake-link"><i data-anchor="git_-_pre_commit_\u52FE\u5B50"></i></a>Git - pre commit \u52FE\u5B50</h3><p>Angular \u63D0\u4F9B\u7684 <code>ng lint</code> \u547D\u4EE4\u53EF\u4EE5\u975E\u5E38\u6709\u6548\u7684\u5E2E\u52A9\u6211\u4EEC\u66F4\u65E9\u53D1\u73B0bug\u3001\u66F4\u9AD8\u7684\u53EF\u8BFB\u6027\uFF1B\u5982\u679C\u6211\u4EEC\u80FD\u591F\u4FDD\u8BC1\u56E2\u961F\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u6BCF\u4E00\u6B21 commit \u524D\u90FD\u81EA\u52A8\u505A\u4E00\u6B21 staged \u4E2D\u6587\u4EF6\u7684 lint \u7684\u8BDD\uFF0C\u90A3\u4E0D\u662F\u975E\u5E38\u9177\u5417\uFF1F</p>
<p>NG-ALAIN \u914D\u7F6E\u4E86\u6BCF\u6B21\u5BF9 staged \u8FDB\u884C commit \u65F6\u4F1A\u9884\u5148\u505A lint\uFF0C\u82E5\u53D1\u73B0\u9519\u8BEF\u5219\u65E0\u6CD5\u63D0\u4EA4\u3002</p>
<p>\u9ED8\u8BA4\u5F00\u542F\u4E86 <code>*.ts</code>\u3001<code>*.less</code> \u7684\u63D0\u4EA4\u8FC7\u7A0B\u4E2D\u5F3A\u5236\u5BF9\u4EE3\u7801\u8FDB\u884C\u683C\u5F0F\u5316\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539 <code>package.json</code> \u7684 <code>husky</code> \u8282\u70B9\u6765\u6539\u53D8\u4E9B\u89C4\u5219\u3002</p>
<blockquote>
<p>\u82E5\u5728\u6267\u884C <code>git commit -m &quot;commit&quot;</code> \u65F6\u82E5\u4EA7\u751F <strong>hint: The &#39;.husky/pre-commit&#39; hook was ignored because it&#39;s not set as executable.</strong> \u65F6\uFF0C\u53EF\u80FD\u662F\u56E0\u4E3A\u6743\u9650\u95EE\u9898\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u6267\u884C\uFF1A</p>
</blockquote>
<pre><code class="language-bash">chmod ug+x .husky/*
chmod ug+x .git/hooks/*
</code></pre>
<h2 id="\u98CE\u683C\u6307\u5357"><a class="lake-link"><i data-anchor="\u98CE\u683C\u6307\u5357"></i></a>\u98CE\u683C\u6307\u5357</h2><h3 id="api\u6587\u6863"><a class="lake-link"><i data-anchor="api\u6587\u6863"></i></a>API\u6587\u6863</h3><p>\u5E94\u7528\u603B\u662F\u514D\u4E0D\u4E86\u4E1A\u52A1\u7EC4\u4EF6\u7684\u5F00\u53D1\uFF0C\u6211\u4EEC\u65E0\u6CD5\u4FDD\u8BC1\u82E5\u5E72\u65F6\u95F4\u4E4B\u540E\u4F60\u8FD8\u80FD\u8BB0\u5F97\u8FD9\u4E9B\uFF0C\u56E0\u6B64\u52A1\u5FC5\u5728\u6BCF\u4E00\u4E2A\u4E1A\u52A1\u7EC4\u4EF6\u9644\u5E26 <code>README.md</code> \u6587\u6863\uFF0C\u5E76\u63CF\u8FF0API\u3001DEMO\u7B49\u4FE1\u606F\uFF0C\u4F8B\u5982\uFF1A</p>
<pre><code class="language-markdown">## \u4F55\u65F6\u4F7F\u7528\uFF1F

\u7565

## DEMO

\u7565

## API

\u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C
----|------|-----|------
src | \u56FE\u7247\u5730\u5740  | \`string\` | -
</code></pre>
<h3 id="\u6A21\u5757\u6CE8\u518C"><a class="lake-link"><i data-anchor="\u6A21\u5757\u6CE8\u518C"></i></a>\u6A21\u5757\u6CE8\u518C</h3><p>\u8BF7\u53C2\u6570<a href="/docs/module">\u6A21\u5757\u6CE8\u518C\u6307\u5BFC\u539F\u5219</a>\u3002</p>
<h2 id="\u8F85\u52A9\u9879"><a class="lake-link"><i data-anchor="\u8F85\u52A9\u9879"></i></a>\u8F85\u52A9\u9879</h2><p><code>ng-alain</code> \u914D\u7F6E\u4E86\u4E00\u4E9B\u9488\u5BF9 CLI \u9009\u9879\uFF0C\u4EE5\u4FBF\u66F4\u597D\u8FDB\u884C\u7F16\u7801\u5DE5\u4F5C\u3002</p>
<h3 id="cli"><a class="lake-link"><i data-anchor="cli"></i></a>CLI</h3><p>vscode \u662F\u7F16\u5199 Angular \u6700\u4F73\u7684\u9009\u62E9\uFF0C\u4F60\u53EF\u4EE5\u5728\u9879\u76EE\u7684\u4EFB\u4F55\u76EE\u5F55\u91CC\u8F93\u5165\uFF1A<code>ng g c list</code> \u751F\u6210\u7EC4\u4EF6\u7684\u76F8\u5E94\u7684\u6587\u4EF6\u3002</p>
<p><code>ng-alain</code> \u9ED8\u8BA4\u914D\u7F6E\u4E86\u4E0D\u751F\u6210\u6837\u5F0F\u6587\u4EF6&amp;\u5355\u5143\u6D4B\u8BD5\uFF0C\u56E0\u6B64\uFF0C\u4F60\u4F1A\u770B\u5230\u751F\u6210\u7684\u53EA\u6709 <code>.ts</code>\u3001<code>.html</code>\u3002\u8FD9\u662F\u56E0\u4E3A <code>ng-alain</code> \u63D0\u4F9B\u4E86\u975E\u5E38\u4E30\u5BCC\u7684\u6837\u5F0FAPI\uFF0C\u5728\u5927\u591A\u6570\u9875\u9762\u4E2D\u81EA\u5B9A\u4E49\u6837\u5F0F\u5E76\u4E0D\u662F\u521A\u9700\u7684\uFF1B\u540C\u65F6\uFF0C\u5355\u5143\u6D4B\u8BD5\u4E5F\u662F\u5982\u6B64\u3002</p>
<p>\u5F53\u7136\uFF0C\u4F60\u53EF\u4EE5\u5F88\u5BB9\u6613\u5728 <code>angular.json</code> \u4E2D\u8C03\u6574\u9ED8\u8BA4\u914D\u7F6E\u3002</p>
<h3 id="vscode_snippets"><a class="lake-link"><i data-anchor="vscode_snippets"></i></a>vscode snippets</h3><p>vscode \u662F\u7F16\u5199 Angular \u6700\u4F73\u7684\u9009\u62E9\uFF0C\u81EA\u7136 NG-ALAIN \u4E5F\u5236\u4F5C\u4E86\u76F8\u5E94 snippets \u6269\u5C55\u63D2\u4EF6\uFF1A<a href="//marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode" target="_blank" rel="noopener">ng-zorro-vscode</a> \u548C <a href="//marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode" target="_blank" rel="noopener">ng-alain-vscode</a>\u3002</p>
`,api:"",toc:[{id:"\u4E00\u81F4\u7684\u4EE3\u7801\u98CE\u683C",title:"\u4E00\u81F4\u7684\u4EE3\u7801\u98CE\u683C",children:[{id:"git_-_pre_commit_\u52FE\u5B50",title:"Git - pre commit \u52FE\u5B50"}]},{id:"\u98CE\u683C\u6307\u5357",title:"\u98CE\u683C\u6307\u5357",children:[{id:"api\u6587\u6863",title:"API\u6587\u6863"},{id:"\u6A21\u5757\u6CE8\u518C",title:"\u6A21\u5757\u6CE8\u518C"}]},{id:"\u8F85\u52A9\u9879",title:"\u8F85\u52A9\u9879",children:[{id:"cli",title:"CLI"},{id:"vscode_snippets",title:"vscode snippets"}]}],raw:`---
order: 90
title:
  en-US: Style Guide
  zh-CN: \u7F16\u7801\u89C4\u8303\u5EFA\u8BAE
type: Advance
---

Angular CLI \u6784\u5EFA\u7684\u9879\u76EE\u5C31\u5176\u76EE\u5F55\u7ED3\u6784\u800C\u8A00\u5DF2\u7ECF\u975E\u5E38\u68D2\u4E86\uFF0C\u540C\u65F6\u5B98\u7F51\u4E5F\u6709\u4E00\u4EFD [Angular Style Guide](https://angular.io/guide/styleguide)\uFF08[\u4E2D\u6587\u7248](https://angular.cn/guide/styleguide)\uFF09\u98CE\u683C\u6307\u5357\uFF0C\u5EFA\u8BAE\u597D\u597D\u9605\u8BFB\u51E0\u904D\u3002\u9664\u6B64\u4E4B\u5916\uFF0CNG-ALAIN \u4E5F\u6709\u4E00\u90E8\u5206\u7F16\u7801\u98CE\u683C\uFF0C\u5982\u4E0B\u8BF4\u660E\u53EF\u80FD\u5BF9\u4E8E\u4F60\u9605\u8BFB\u4EE3\u7801\u65F6\u6709\u7528\u3002

## \u4E00\u81F4\u7684\u4EE3\u7801\u98CE\u683C

NG-ALAIN \u4F7F\u7528 [ESLint](https://eslint.org/) \u6765**\u4FDD\u8BC1\u4EE3\u7801\u8D28\u91CF** \u4E0E [Prettier](https://prettier.io/) \u6765**\u4F18\u5316\u4EE3\u7801\u98CE\u683C**\u3002

\u63A8\u8350\u5B89\u88C5\u51E0\u4E2A\u63D2\u4EF6\u5728 vscode \u4E2D\u66F4\u53CB\u597D\u7684\u5F00\u53D1\uFF1A

- [ng-zorro snippets](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode)
- [ng-alain snippets](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

\u5F53\u7136\uFF0CNG-ALAIN \u4E3A\u5927\u5BB6\u51C6\u5907\u4E86\u4E00\u5957\u5B8C\u6574\u7684\u6269\u5C55\u5305\uFF0C\u53EA\u9700\u8981\u5B89\u88C5 [NG-ALAIN Extension Pack](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-extension-pack) \u5373\u53EF\u3002

### Git - pre commit \u52FE\u5B50

Angular \u63D0\u4F9B\u7684 \`ng lint\` \u547D\u4EE4\u53EF\u4EE5\u975E\u5E38\u6709\u6548\u7684\u5E2E\u52A9\u6211\u4EEC\u66F4\u65E9\u53D1\u73B0bug\u3001\u66F4\u9AD8\u7684\u53EF\u8BFB\u6027\uFF1B\u5982\u679C\u6211\u4EEC\u80FD\u591F\u4FDD\u8BC1\u56E2\u961F\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u6BCF\u4E00\u6B21 commit \u524D\u90FD\u81EA\u52A8\u505A\u4E00\u6B21 staged \u4E2D\u6587\u4EF6\u7684 lint \u7684\u8BDD\uFF0C\u90A3\u4E0D\u662F\u975E\u5E38\u9177\u5417\uFF1F

NG-ALAIN \u914D\u7F6E\u4E86\u6BCF\u6B21\u5BF9 staged \u8FDB\u884C commit \u65F6\u4F1A\u9884\u5148\u505A lint\uFF0C\u82E5\u53D1\u73B0\u9519\u8BEF\u5219\u65E0\u6CD5\u63D0\u4EA4\u3002

\u9ED8\u8BA4\u5F00\u542F\u4E86 \`*.ts\`\u3001\`*.less\` \u7684\u63D0\u4EA4\u8FC7\u7A0B\u4E2D\u5F3A\u5236\u5BF9\u4EE3\u7801\u8FDB\u884C\u683C\u5F0F\u5316\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539 \`package.json\` \u7684 \`husky\` \u8282\u70B9\u6765\u6539\u53D8\u4E9B\u89C4\u5219\u3002

> \u82E5\u5728\u6267\u884C \`git commit -m "commit"\` \u65F6\u82E5\u4EA7\u751F **hint: The '.husky/pre-commit' hook was ignored because it's not set as executable.** \u65F6\uFF0C\u53EF\u80FD\u662F\u56E0\u4E3A\u6743\u9650\u95EE\u9898\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u6267\u884C\uFF1A

\`\`\`bash
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
\`\`\`

## \u98CE\u683C\u6307\u5357

### API\u6587\u6863

\u5E94\u7528\u603B\u662F\u514D\u4E0D\u4E86\u4E1A\u52A1\u7EC4\u4EF6\u7684\u5F00\u53D1\uFF0C\u6211\u4EEC\u65E0\u6CD5\u4FDD\u8BC1\u82E5\u5E72\u65F6\u95F4\u4E4B\u540E\u4F60\u8FD8\u80FD\u8BB0\u5F97\u8FD9\u4E9B\uFF0C\u56E0\u6B64\u52A1\u5FC5\u5728\u6BCF\u4E00\u4E2A\u4E1A\u52A1\u7EC4\u4EF6\u9644\u5E26 \`README.md\` \u6587\u6863\uFF0C\u5E76\u63CF\u8FF0API\u3001DEMO\u7B49\u4FE1\u606F\uFF0C\u4F8B\u5982\uFF1A

\`\`\`markdown
## \u4F55\u65F6\u4F7F\u7528\uFF1F

\u7565

## DEMO

\u7565

## API

\u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C
----|------|-----|------
src | \u56FE\u7247\u5730\u5740  | \`string\` | -
\`\`\`

### \u6A21\u5757\u6CE8\u518C

\u8BF7\u53C2\u6570[\u6A21\u5757\u6CE8\u518C\u6307\u5BFC\u539F\u5219](/docs/module)\u3002

## \u8F85\u52A9\u9879

\`ng-alain\` \u914D\u7F6E\u4E86\u4E00\u4E9B\u9488\u5BF9 CLI \u9009\u9879\uFF0C\u4EE5\u4FBF\u66F4\u597D\u8FDB\u884C\u7F16\u7801\u5DE5\u4F5C\u3002

### CLI

vscode \u662F\u7F16\u5199 Angular \u6700\u4F73\u7684\u9009\u62E9\uFF0C\u4F60\u53EF\u4EE5\u5728\u9879\u76EE\u7684\u4EFB\u4F55\u76EE\u5F55\u91CC\u8F93\u5165\uFF1A\`ng g c list\` \u751F\u6210\u7EC4\u4EF6\u7684\u76F8\u5E94\u7684\u6587\u4EF6\u3002

\`ng-alain\` \u9ED8\u8BA4\u914D\u7F6E\u4E86\u4E0D\u751F\u6210\u6837\u5F0F\u6587\u4EF6&\u5355\u5143\u6D4B\u8BD5\uFF0C\u56E0\u6B64\uFF0C\u4F60\u4F1A\u770B\u5230\u751F\u6210\u7684\u53EA\u6709 \`.ts\`\u3001\`.html\`\u3002\u8FD9\u662F\u56E0\u4E3A \`ng-alain\` \u63D0\u4F9B\u4E86\u975E\u5E38\u4E30\u5BCC\u7684\u6837\u5F0FAPI\uFF0C\u5728\u5927\u591A\u6570\u9875\u9762\u4E2D\u81EA\u5B9A\u4E49\u6837\u5F0F\u5E76\u4E0D\u662F\u521A\u9700\u7684\uFF1B\u540C\u65F6\uFF0C\u5355\u5143\u6D4B\u8BD5\u4E5F\u662F\u5982\u6B64\u3002

\u5F53\u7136\uFF0C\u4F60\u53EF\u4EE5\u5F88\u5BB9\u6613\u5728 \`angular.json\` \u4E2D\u8C03\u6574\u9ED8\u8BA4\u914D\u7F6E\u3002

### vscode snippets

vscode \u662F\u7F16\u5199 Angular \u6700\u4F73\u7684\u9009\u62E9\uFF0C\u81EA\u7136 NG-ALAIN \u4E5F\u5236\u4F5C\u4E86\u76F8\u5E94 snippets \u6269\u5C55\u63D2\u4EF6\uFF1A[ng-zorro-vscode](//marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode) \u548C [ng-alain-vscode](//marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode)\u3002`}}};codes=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=o({type:n,selectors:[["docs-style-guide"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&i(0,"app-docs",0),e&2&&a("codes",t.codes)("item",t.item)},dependencies:[r],encapsulation:2})};var R=class n{item={name:"theme",langs:["zh-CN"],content:{"zh-CN":{meta:{order:10,title:"\u4E3B\u9898\u7CFB\u7EDF",redirect:"/theme/getting-started",description:"",group:"Advance",path:"docs/theme.md",url:"/docs/theme/zh"},text:"",api:"",toc:[],raw:`---
order: 10
title:
  en-US: Theme
  zh-CN: \u4E3B\u9898\u7CFB\u7EDF
type: Advance
redirect: /theme/getting-started
---`}}};codes=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=o({type:n,selectors:[["docs-theme"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&i(0,"app-docs",0),e&2&&a("codes",t.codes)("item",t.item)},dependencies:[r],encapsulation:2})};var q=class n{item={name:"upgrade-v21",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:1e3,title:"Upgrade to version 21.0",description:`This guide applies to the current version ng-alain >= 20;
If you encounter problems during the upgrade process, feel free to comment here.
If you find...`,group:"Basic",path:"docs/upgrade-v21.en-US.md",url:"/docs/upgrade-v21/en"},text:`<blockquote>
<p>This guide applies to the current version ng-alain &gt;= <code>20</code>;
If you encounter problems during the upgrade process, feel free to comment here.
If you find any errors in this guide, please point out
Or you have encountered a new problem and solved it, welcome to comment here.</p>
</blockquote>
<h2 id="before_upgrade"><a class="lake-link"><i data-anchor="before_upgrade"></i></a>Before upgrade</h2><ol>
<li>Make sure <code>Node.js</code> &gt;= <code>22.21.1</code>.</li>
<li>Create a new branch, or use other methods to back up the current project.</li>
<li>Delete the <code>package-lock.json</code> or <code>yarn.lock</code> file.</li>
</ol>
<h3 id="1upgrade_dependencies"><a class="lake-link"><i data-anchor="1upgrade_dependencies"></i></a>1.Upgrade dependencies</h3><ul>
<li>Upgrade Angular to 21.x version, Run <code>ng update &#64;angular/core&#64;21 &#64;angular/cli&#64;21 angular-eslint&#64;21 ng-zorro-antd&#64;21 ng-alain&#64;21</code>.</li>
<li><em>Run <code>ng update &#64;angular/cdk&#64;21</code>, if you have used <code>&#64;angular/cdk</code>.</em></li>
</ul>
<blockquote>
<p>NG-ALAIN scaffolding upgrade all change files, please refer to: <a href="https://github.com/ng-alain/ng-alain/pull/2593/files" target="_blank" rel="noopener">#2593</a>.</p>
</blockquote>
<h3 id="2_ng-zorro-antd_breaking_changes"><a class="lake-link"><i data-anchor="2_ng-zorro-antd_breaking_changes"></i></a>2. ng-zorro-antd BREAKING CHANGES</h3><p>Please note that NG-ZORRO has BREAKING CHANGES; please refer to
<a href="https://github.com/NG-ZORRO/ng-zorro-antd/releases/tag/21.0.0" target="_blank" rel="noopener">https://github.com/NG-ZORRO/ng-zorro-antd/releases/tag/21.0.0</a> for details.</p>
<h3 id="3_reference"><a class="lake-link"><i data-anchor="3_reference"></i></a>3. Reference</h3><ul>
<li>Code style configuration change <a href="https://github.com/ng-alain/ng-alain/pull/2594/files" target="_blank" rel="noopener">#2594</a></li>
</ul>
`,api:"",toc:[{id:"before_upgrade",title:"Before upgrade",children:[{id:"1upgrade_dependencies",title:"1.Upgrade dependencies"},{id:"2_ng-zorro-antd_breaking_changes",title:"2. ng-zorro-antd BREAKING CHANGES"},{id:"3_reference",title:"3. Reference"}]}],raw:`---
order: 1000
type: Basic
title: Upgrade to version 21.0
---

> This guide applies to the current version ng-alain >= \`20\`;
> If you encounter problems during the upgrade process, feel free to comment here.
> If you find any errors in this guide, please point out
> Or you have encountered a new problem and solved it, welcome to comment here.

## Before upgrade

1. Make sure \`Node.js\` >= \`22.21.1\`.
2. Create a new branch, or use other methods to back up the current project.
3. Delete the \`package-lock.json\` or \`yarn.lock\` file.

### 1.Upgrade dependencies

- Upgrade Angular to 21.x version, Run \`ng update @angular/core@21 @angular/cli@21 angular-eslint@21 ng-zorro-antd@21 ng-alain@21\`.
- _Run \`ng update @angular/cdk@21\`, if you have used \`@angular/cdk\`._

> NG-ALAIN scaffolding upgrade all change files, please refer to: [#2593](https://github.com/ng-alain/ng-alain/pull/2593/files).

### 2. ng-zorro-antd BREAKING CHANGES

Please note that NG-ZORRO has BREAKING CHANGES; please refer to
https://github.com/NG-ZORRO/ng-zorro-antd/releases/tag/21.0.0 for details.

### 3. Reference

- Code style configuration change [#2594](https://github.com/ng-alain/ng-alain/pull/2594/files)`},"zh-CN":{meta:{order:1e3,title:"\u5347\u7EA7\u5230 21.0 \u7248\u672C",description:`\u672C\u6307\u5357\u9002\u7528\u4E8E\u5F53\u524D\u7248\u672C ng-alain >= 20 ;
\u5982\u679C\u5728\u5347\u7EA7\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u6B22\u8FCE\u63D0\u51FA\u3002\u63D0\u95EE\u524D\u8BF7\u9605\u8BFB \u5982\u4F55\u5411\u5F00\u6E90\u793E\u533A\u63D0\u95EE\u9898
\u5982\u679C\u53D1\u73B0\u672C\u6307\u5357\u5B58\u5728\u9057\u6F0F/\u9519\u8BEF\uFF0C\u8BF7\u6307\u51FA!
\u6216\u8005\u4F60\u9047\u5230\u4E86\u65B0\u7684\u95EE\u9898\u5E76\u89E3\u51B3\u4E86\uFF0C\u6B22\u8FCE\u8865\u5145!\u9996\u5148\u786E\u4FDD\u4F60 Node.js >= 22.21.1\u521B\u5EFA\u65B0\u7684\u5206\u652F\uFF0C\u6216\u8005\u4F7F\u7528\u5176\u4ED6\u65B9\u5F0F\u5907\u4EFD\u5F53\u524D\u9879\u76EE\u5220...`,group:"Basic",path:"docs/upgrade-v21.zh-CN.md",url:"/docs/upgrade-v21/zh"},text:`<blockquote>
<p>\u672C\u6307\u5357\u9002\u7528\u4E8E\u5F53\u524D\u7248\u672C ng-alain &gt;= <code>20</code> ;
\u5982\u679C\u5728\u5347\u7EA7\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u6B22\u8FCE\u63D0\u51FA\u3002\u63D0\u95EE\u524D\u8BF7\u9605\u8BFB <a href="https://github.com/seajs/seajs/issues/545" target="_blank" rel="noopener">\u5982\u4F55\u5411\u5F00\u6E90\u793E\u533A\u63D0\u95EE\u9898</a>
\u5982\u679C\u53D1\u73B0\u672C\u6307\u5357\u5B58\u5728\u9057\u6F0F/\u9519\u8BEF\uFF0C\u8BF7\u6307\u51FA!
\u6216\u8005\u4F60\u9047\u5230\u4E86\u65B0\u7684\u95EE\u9898\u5E76\u89E3\u51B3\u4E86\uFF0C\u6B22\u8FCE\u8865\u5145!</p>
</blockquote>
<h2 id="\u5F00\u59CB\u4E4B\u524D"><a class="lake-link"><i data-anchor="\u5F00\u59CB\u4E4B\u524D"></i></a>\u5F00\u59CB\u4E4B\u524D</h2><ol>
<li>\u9996\u5148\u786E\u4FDD\u4F60 <code>Node.js</code> &gt;= <code>22.21.1</code></li>
<li>\u521B\u5EFA\u65B0\u7684\u5206\u652F\uFF0C\u6216\u8005\u4F7F\u7528\u5176\u4ED6\u65B9\u5F0F\u5907\u4EFD\u5F53\u524D\u9879\u76EE</li>
<li>\u5220\u9664\u9879\u76EE\u4E0B <code>package-lock.json</code> \u6216 <code>yarn.lock</code> \u6587\u4EF6</li>
</ol>
<h2 id="\u5347\u7EA7\u6B65\u9AA4"><a class="lake-link"><i data-anchor="\u5347\u7EA7\u6B65\u9AA4"></i></a>\u5347\u7EA7\u6B65\u9AA4</h2><h3 id="\u5347\u7EA7\u76F8\u5173\u4F9D\u8D56"><a class="lake-link"><i data-anchor="\u5347\u7EA7\u76F8\u5173\u4F9D\u8D56"></i></a>\u5347\u7EA7\u76F8\u5173\u4F9D\u8D56</h3><ul>
<li>\u5C06\u9879\u76EE\u5347\u7EA7\u5230 Angular 21 \u8FD0\u884C <code>ng update &#64;angular/core&#64;21 &#64;angular/cli&#64;21 angular-eslint&#64;21 ng-zorro-antd&#64;21 ng-alain&#64;21</code>\u3002</li>
<li><em>\u5982\u679C\u4F60\u6709\u5355\u72EC\u4F7F\u7528 <code>&#64;angular/cdk</code> \u8BF7\u6267\u884C <code>ng update &#64;angular/cdk&#64;21</code></em></li>
</ul>
<blockquote>
<blockquote>
<p>NG-ALAIN\u811A\u624B\u67B6\u5347\u7EA7\u5168\u90E8\u53D8\u66F4\u6587\u4EF6\uFF0C\u8BF7\u53C2\u8003\uFF1A<a href="https://github.com/ng-alain/ng-alain/pull/2593/files" target="_blank" rel="noopener">#2593</a>\u3002</p>
</blockquote>
</blockquote>
<h3 id="2_ng-zorro-antd_breaking_changes"><a class="lake-link"><i data-anchor="2_ng-zorro-antd_breaking_changes"></i></a>2. ng-zorro-antd BREAKING CHANGES</h3><p>\u9700\u8981\u6CE8\u610F NG-ZORRO \u6709\u5B58\u5728 BREAKING CHANGES\uFF1B\u7EC6\u8282\u8BF7\u53C2\u8003
<a href="https://github.com/NG-ZORRO/ng-zorro-antd/releases/tag/21.0.0" target="_blank" rel="noopener">https://github.com/NG-ZORRO/ng-zorro-antd/releases/tag/21.0.0</a></p>
<h3 id="3_\u53C2\u8003"><a class="lake-link"><i data-anchor="3_\u53C2\u8003"></i></a>3. \u53C2\u8003</h3><ul>
<li>\u4EE3\u7801\u98CE\u683C\u914D\u7F6E\u53D8\u66F4 <a href="https://github.com/ng-alain/ng-alain/pull/2594/files" target="_blank" rel="noopener">#2594</a></li>
</ul>
`,api:"",toc:[{id:"\u5F00\u59CB\u4E4B\u524D",title:"\u5F00\u59CB\u4E4B\u524D"},{id:"\u5347\u7EA7\u6B65\u9AA4",title:"\u5347\u7EA7\u6B65\u9AA4",children:[{id:"\u5347\u7EA7\u76F8\u5173\u4F9D\u8D56",title:"\u5347\u7EA7\u76F8\u5173\u4F9D\u8D56"},{id:"2_ng-zorro-antd_breaking_changes",title:"2. ng-zorro-antd BREAKING CHANGES"},{id:"3_\u53C2\u8003",title:"3. \u53C2\u8003"}]}],raw:`---
order: 1000
type: Basic
title: \u5347\u7EA7\u5230 21.0 \u7248\u672C
---

> \u672C\u6307\u5357\u9002\u7528\u4E8E\u5F53\u524D\u7248\u672C ng-alain >= \`20\` ;
> \u5982\u679C\u5728\u5347\u7EA7\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u6B22\u8FCE\u63D0\u51FA\u3002\u63D0\u95EE\u524D\u8BF7\u9605\u8BFB [\u5982\u4F55\u5411\u5F00\u6E90\u793E\u533A\u63D0\u95EE\u9898](https://github.com/seajs/seajs/issues/545)
> \u5982\u679C\u53D1\u73B0\u672C\u6307\u5357\u5B58\u5728\u9057\u6F0F/\u9519\u8BEF\uFF0C\u8BF7\u6307\u51FA!
> \u6216\u8005\u4F60\u9047\u5230\u4E86\u65B0\u7684\u95EE\u9898\u5E76\u89E3\u51B3\u4E86\uFF0C\u6B22\u8FCE\u8865\u5145!

## \u5F00\u59CB\u4E4B\u524D

1. \u9996\u5148\u786E\u4FDD\u4F60 \`Node.js\` >= \`22.21.1\`
2. \u521B\u5EFA\u65B0\u7684\u5206\u652F\uFF0C\u6216\u8005\u4F7F\u7528\u5176\u4ED6\u65B9\u5F0F\u5907\u4EFD\u5F53\u524D\u9879\u76EE
3. \u5220\u9664\u9879\u76EE\u4E0B \`package-lock.json\` \u6216 \`yarn.lock\` \u6587\u4EF6

## \u5347\u7EA7\u6B65\u9AA4

### \u5347\u7EA7\u76F8\u5173\u4F9D\u8D56

- \u5C06\u9879\u76EE\u5347\u7EA7\u5230 Angular 21 \u8FD0\u884C \`ng update @angular/core@21 @angular/cli@21 angular-eslint@21 ng-zorro-antd@21 ng-alain@21\`\u3002
- _\u5982\u679C\u4F60\u6709\u5355\u72EC\u4F7F\u7528 \`@angular/cdk\` \u8BF7\u6267\u884C \`ng update @angular/cdk@21\`_

> > NG-ALAIN\u811A\u624B\u67B6\u5347\u7EA7\u5168\u90E8\u53D8\u66F4\u6587\u4EF6\uFF0C\u8BF7\u53C2\u8003\uFF1A[#2593](https://github.com/ng-alain/ng-alain/pull/2593/files)\u3002

### 2. ng-zorro-antd BREAKING CHANGES

\u9700\u8981\u6CE8\u610F NG-ZORRO \u6709\u5B58\u5728 BREAKING CHANGES\uFF1B\u7EC6\u8282\u8BF7\u53C2\u8003
https://github.com/NG-ZORRO/ng-zorro-antd/releases/tag/21.0.0

### 3. \u53C2\u8003

- \u4EE3\u7801\u98CE\u683C\u914D\u7F6E\u53D8\u66F4 [#2594](https://github.com/ng-alain/ng-alain/pull/2594/files)`}}};codes=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=o({type:n,selectors:[["docs-upgrade-v21"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&i(0,"app-docs",0),e&2&&a("codes",t.codes)("item",t.item)},dependencies:[r],encapsulation:2})};var G=class n{item={name:"upgrade",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:80,title:"Upgrade scaffold",description:"In Architecture we have described the overall composition of the NG-ALAIN scaffolding. We spent a lot of time developing some infrastructure and publi...",group:"Dev",path:"docs/upgrade.en-US.md",url:"/docs/upgrade/en"},text:`<p>In <a href="/docs/architecture">Architecture</a> we have described the overall composition of the NG-ALAIN scaffolding. We spent a lot of time developing some infrastructure and publishing these to the <code>&#64;delon/*</code> series to Npm. , making the upgrade very easy.</p>
<h2 id="publishing_rule"><a class="lake-link"><i data-anchor="publishing_rule"></i></a>Publishing rule</h2><p>Similar to <code>&#64;angular/*</code>, the version number of the <code>&#64;delon/*</code> class library will be a version number (<a href="https://www.npmjs.com/package/&#64;delon/theme" target="_blank" rel="noopener"><img src="https://img.shields.io/npm/v/&#64;delon/theme.svg" alt="NPM version"></a>) at each iteration, regardless of whether a class library has been modified.</p>
<p>At the same time, please follow the following publishing rules and update version number:</p>
<ul>
<li><code>&#64;delon</code> as the infrastructure library, which will be slightly higher in the update frequency, usually updated at least once a week.</li>
<li>With <strong>BREAKING CHANGES</strong> at least one minor version number</li>
<li><a href="https://github.com/ng-alain/ng-alain/releases" target="_blank" rel="noopener">Update Log</a></li>
</ul>
<h2 id="how_to_upgrade?"><a class="lake-link"><i data-anchor="how_to_upgrade?"></i></a>How to upgrade?</h2><h3 id="method_1_command_recommend"><a class="lake-link"><i data-anchor="method_1_command_recommend"></i></a>Method 1: Command (Recommend)</h3><p>Unless it&#39;s a major version update (Similar to upgrading from <code>12.0.0</code> to <code>13.0.0</code>), you only need to run the following command:</p>
<pre><code class="language-bash">ng update ng-alain
</code></pre>
<h3 id="method_2_modify_the_version_number"><a class="lake-link"><i data-anchor="method_2_modify_the_version_number"></i></a>Method 2: Modify the version number</h3><p>Modify <code>package.json</code> All class libraries starting with <code>&#64;delon/</code> are the latest version number:</p>
<pre><code>&quot;&#64;delon/theme&quot;: &quot;^12.0.0&quot;
</code></pre>
<p>Replace <code>^12.0.0</code> with the latest version number.</p>
<p>Finally, reinstall the dependencies.</p>
<pre><code class="language-bash">yarn
</code></pre>
<blockquote>
<p>Please read <a href="/docs/faq">Frequently Asked Questions</a></p>
</blockquote>
<h3 id="method_3_update_all_class_libraries"><a class="lake-link"><i data-anchor="method_3_update_all_class_libraries"></i></a>Method 3: Update all class libraries</h3><p>Scaffolding in <code>package.json</code> most libraries use loose version numbers, for example:</p>
<p><code>^0.1.0</code> with the <code>^</code> symbol indicates that the latest minor version number is used, so <code>0.7.0</code> is also the range.</p>
<p>To use this update method, you need to follow these steps:</p>
<ul>
<li>Remove the <code>node_modules</code> folder and the <code>yarn.lock</code> file</li>
<li>Execute <code>yarn</code></li>
</ul>
<p><strong>Note:</strong> This method will install all class libraries in a newer version, but it may cause unnecessary troubles due to damaging changes of third-party types.</p>
`,api:"",toc:[{id:"publishing_rule",title:"Publishing rule"},{id:"how_to_upgrade?",title:"How to upgrade?",children:[{id:"method_1_command_recommend",title:"Method 1: Command (Recommend)"},{id:"method_2_modify_the_version_number",title:"Method 2: Modify the version number"},{id:"method_3_update_all_class_libraries",title:"Method 3: Update all class libraries"}]}],raw:`---
order: 80
title: Upgrade scaffold
type: Dev
---

In [Architecture](/docs/architecture) we have described the overall composition of the NG-ALAIN scaffolding. We spent a lot of time developing some infrastructure and publishing these to the \`@delon/*\` series to Npm. , making the upgrade very easy.

## Publishing rule

Similar to \`@angular/*\`, the version number of the \`@delon/*\` class library will be a version number ([![NPM version](https://img.shields.io/npm/v/@delon/theme.svg)](https://www.npmjs.com/package/@delon/theme)) at each iteration, regardless of whether a class library has been modified.

At the same time, please follow the following publishing rules and update version number:

- \`@delon\` as the infrastructure library, which will be slightly higher in the update frequency, usually updated at least once a week.
- With **BREAKING CHANGES** at least one minor version number
- [Update Log](https://github.com/ng-alain/ng-alain/releases)

## How to upgrade?

### Method 1: Command (Recommend)

Unless it's a major version update (Similar to upgrading from \`12.0.0\` to \`13.0.0\`), you only need to run the following command:

\`\`\`bash
ng update ng-alain
\`\`\`

### Method 2: Modify the version number

Modify \`package.json\` All class libraries starting with \`@delon/\` are the latest version number:

\`\`\`
"@delon/theme": "^12.0.0"
\`\`\`

Replace \`^12.0.0\` with the latest version number.

Finally, reinstall the dependencies.

\`\`\`bash
yarn
\`\`\`

> Please read [Frequently Asked Questions](/docs/faq)

### Method 3: Update all class libraries

Scaffolding in \`package.json\` most libraries use loose version numbers, for example:

\`^0.1.0\` with the \`^\` symbol indicates that the latest minor version number is used, so \`0.7.0\` is also the range.

To use this update method, you need to follow these steps:

- Remove the \`node_modules\` folder and the \`yarn.lock\` file
- Execute \`yarn\`

**Note:** This method will install all class libraries in a newer version, but it may cause unnecessary troubles due to damaging changes of third-party types.`},"zh-CN":{meta:{order:80,title:"\u5347\u7EA7\u811A\u624B\u67B6",description:"\u5728 \u4F53\u7CFB\u7ED3\u6784 \u4E2D\u6211\u4EEC\u5DF2\u7ECF\u63CF\u8FF0\u4E86 NG-ALAIN \u811A\u624B\u67B6\u7684\u6574\u4F53\u6784\u6210\uFF0C\u6211\u4EEC\u82B1\u4E86\u5927\u91CF\u65F6\u95F4\u53BB\u5F00\u53D1\u4E00\u4E9B\u57FA\u7840\u5EFA\u8BBE\uFF0C\u5E76\u628A\u8FD9\u4E9B\u4EE5 @delon/* \u7CFB\u5217\u53D1\u5E03\u81F3 Npm \u5F53\u4E2D\uFF0C\u4F7F\u5F97\u5347\u7EA7\u53D8\u5F97\u975E\u5E38\u8F7B\u677E\u3002\u540C @angular/* \u7C7B\u4F3C\uFF0C@delon/* \u7C7B\u5E93\u7684\u7248\u672C\u53F7\u5728\u6BCF\u4E00\u4E2A\u8FED\u4EE3\u65F6\uFF0C\u4E0D\u7BA1\u67D0\u7C7B\u5E93\u662F\u5426\u6709\u4FEE\u6539\uFF0C\u90FD\u4F1A\u7EDF\u4E00\u4E2A\u7248\u672C\u53F7 ...",group:"Dev",path:"docs/upgrade.zh-CN.md",url:"/docs/upgrade/zh"},text:`<p>\u5728 <a href="/docs/architecture">\u4F53\u7CFB\u7ED3\u6784</a> \u4E2D\u6211\u4EEC\u5DF2\u7ECF\u63CF\u8FF0\u4E86 NG-ALAIN \u811A\u624B\u67B6\u7684\u6574\u4F53\u6784\u6210\uFF0C\u6211\u4EEC\u82B1\u4E86\u5927\u91CF\u65F6\u95F4\u53BB\u5F00\u53D1\u4E00\u4E9B\u57FA\u7840\u5EFA\u8BBE\uFF0C\u5E76\u628A\u8FD9\u4E9B\u4EE5 <code>&#64;delon/*</code> \u7CFB\u5217\u53D1\u5E03\u81F3 Npm \u5F53\u4E2D\uFF0C\u4F7F\u5F97\u5347\u7EA7\u53D8\u5F97\u975E\u5E38\u8F7B\u677E\u3002</p>
<h2 id="\u53D1\u5E03\u89C4\u5219"><a class="lake-link"><i data-anchor="\u53D1\u5E03\u89C4\u5219"></i></a>\u53D1\u5E03\u89C4\u5219</h2><p>\u540C <code>&#64;angular/*</code> \u7C7B\u4F3C\uFF0C<code>&#64;delon/*</code> \u7C7B\u5E93\u7684\u7248\u672C\u53F7\u5728\u6BCF\u4E00\u4E2A\u8FED\u4EE3\u65F6\uFF0C\u4E0D\u7BA1\u67D0\u7C7B\u5E93\u662F\u5426\u6709\u4FEE\u6539\uFF0C\u90FD\u4F1A\u7EDF\u4E00\u4E2A\u7248\u672C\u53F7 (<a href="https://www.npmjs.com/package/&#64;delon/theme" target="_blank" rel="noopener"><img src="https://img.shields.io/npm/v/&#64;delon/theme.svg" alt="NPM version"></a>) \u3002</p>
<p>\u540C\u65F6\u6309\u4EE5\u4E0B\u53D1\u5E03\u89C4\u5219\u53CA\u66F4\u65B0\u7248\u672C\u53F7\u8BF4\u660E\uFF1A</p>
<ul>
<li><code>&#64;delon</code> \u4F5C\u4E3A\u57FA\u7840\u5EFA\u8BBE\u7C7B\u5E93\uFF0C\u5728\u66F4\u65B0\u9891\u7387\u4E0A\u4F1A\u7565\u9AD8\uFF0C\u4E00\u822C\u4E00\u5468\u81F3\u5C11\u66F4\u65B0\u4E00\u6B21</li>
<li>\u5E26\u6709 <strong>BREAKING CHANGES</strong> \u81F3\u5C11\u63D0\u5347\u4E00\u4E2A\u6B21\u7248\u672C\u53F7</li>
<li><a href="https://github.com/ng-alain/ng-alain/releases" target="_blank" rel="noopener">\u66F4\u65B0\u65E5\u5FD7</a></li>
</ul>
<h2 id="\u5982\u4F55\u5347\u7EA7\uFF1F"><a class="lake-link"><i data-anchor="\u5982\u4F55\u5347\u7EA7\uFF1F"></i></a>\u5982\u4F55\u5347\u7EA7\uFF1F</h2><h3 id="\u65B9\u5F0F\u4E00\uFF1A\u547D\u4EE4\u884C\uFF08\u63A8\u8350\uFF09"><a class="lake-link"><i data-anchor="\u65B9\u5F0F\u4E00\uFF1A\u547D\u4EE4\u884C\uFF08\u63A8\u8350\uFF09"></i></a>\u65B9\u5F0F\u4E00\uFF1A\u547D\u4EE4\u884C\uFF08\u63A8\u8350\uFF09</h3><p>\u9664\u975E\u662F\u5927\u7248\u672C\u66F4\u65B0\uFF08\u5373\u7C7B\u4F3C\u4ECE <code>12.0.0</code> \u5347\u81F3 <code>13.0.0</code>\uFF09\uFF0C\u5426\u5219\u53EA\u9700\u8981\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u5373\u53EF\uFF1A</p>
<pre><code class="language-bash">ng update ng-alain
</code></pre>
<h3 id="\u65B9\u5F0F\u4E8C\uFF1A\u624B\u52A8\u4FEE\u6539\u7248\u672C\u53F7"><a class="lake-link"><i data-anchor="\u65B9\u5F0F\u4E8C\uFF1A\u624B\u52A8\u4FEE\u6539\u7248\u672C\u53F7"></i></a>\u65B9\u5F0F\u4E8C\uFF1A\u624B\u52A8\u4FEE\u6539\u7248\u672C\u53F7</h3><p>\u4FEE\u6539 <code>package.json</code> \u6240\u6709 <code>&#64;delon/</code> \u5F00\u5934\u7684\u7C7B\u5E93\u7248\u672C\u53F7\u4E3A\u6700\u65B0\u7248\u672C\u53F7\uFF1A</p>
<pre><code>&quot;&#64;delon/theme&quot;: &quot;^12.0.0&quot;
</code></pre>
<p>\u5C06 <code>^12.0.0</code> \u66FF\u6362\u6210\u6700\u65B0\u7248\u672C\u53F7\u3002</p>
<p>\u6700\u540E\uFF0C\u91CD\u65B0\u5B89\u88C5\u4F9D\u8D56\u5305\u3002</p>
<pre><code class="language-bash">yarn
</code></pre>
<blockquote>
<p>\u9047\u5230\u95EE\u9898\u8BF7\u9605\u8BFB <a href="/docs/faq">\u5E38\u89C1\u95EE\u9898</a></p>
</blockquote>
<h3 id="\u65B9\u5F0F\u4E09\uFF1A\u66F4\u65B0\u6240\u6709\u7C7B\u5E93"><a class="lake-link"><i data-anchor="\u65B9\u5F0F\u4E09\uFF1A\u66F4\u65B0\u6240\u6709\u7C7B\u5E93"></i></a>\u65B9\u5F0F\u4E09\uFF1A\u66F4\u65B0\u6240\u6709\u7C7B\u5E93</h3><p>\u811A\u624B\u67B6\u5728 <code>package.json</code> \u91CC\u591A\u6570\u7C7B\u5E93\u90FD\u662F\u4F7F\u7528\u5BBD\u677E\u7684\u7248\u672C\u53F7\uFF0C\u4F8B\u5982\uFF1A</p>
<p><code>^0.1.0</code> \u5E26\u6709 <code>^</code> \u7B26\u53F7\u8868\u793A\u4F7F\u7528\u6700\u65B0\u6B21\u7248\u672C\u53F7\uFF0C\u56E0\u6B64\uFF0C<code>0.7.0</code> \u4E5F\u662F\u8BE5\u8303\u56F4\u4E4B\u5217\u3002</p>
<p>\u8981\u60F3\u91C7\u7528\u8FD9\u79CD\u66F4\u65B0\u65B9\u5F0F\u9700\u8981\u6309\u4EE5\u4E0B\u6B65\u9AA4\u8FDB\u884C\uFF1A</p>
<ul>
<li>\u79FB\u9664 <code>node_modules</code> \u6587\u4EF6\u5939\u53CA <code>yarn.lock</code> \u6587\u4EF6</li>
<li>\u6267\u884C <code>yarn</code></li>
</ul>
<p><strong>\u6CE8\u610F\uFF1A</strong> \u8FD9\u79CD\u65B9\u5F0F\u4F1A\u5BF9\u6240\u6709\u7C7B\u5E93\u6309\u6BD4\u8F83\u65B0\u7684\u7248\u672C\u5B89\u88C5\uFF0C\u4F46\u6709\u53EF\u80FD\u4F1A\u5BFC\u81F4\u7531\u4E8E\u7B2C\u4E09\u65B9\u7C7B\u578B\u7684\u7834\u574F\u6027\u53D8\u66F4\u4F1A\u5BFC\u81F4\u4E00\u4E9B\u4E0D\u5FC5\u8981\u7684\u9EBB\u70E6\u3002</p>
`,api:"",toc:[{id:"\u53D1\u5E03\u89C4\u5219",title:"\u53D1\u5E03\u89C4\u5219"},{id:"\u5982\u4F55\u5347\u7EA7\uFF1F",title:"\u5982\u4F55\u5347\u7EA7\uFF1F",children:[{id:"\u65B9\u5F0F\u4E00\uFF1A\u547D\u4EE4\u884C\uFF08\u63A8\u8350\uFF09",title:"\u65B9\u5F0F\u4E00\uFF1A\u547D\u4EE4\u884C\uFF08\u63A8\u8350\uFF09"},{id:"\u65B9\u5F0F\u4E8C\uFF1A\u624B\u52A8\u4FEE\u6539\u7248\u672C\u53F7",title:"\u65B9\u5F0F\u4E8C\uFF1A\u624B\u52A8\u4FEE\u6539\u7248\u672C\u53F7"},{id:"\u65B9\u5F0F\u4E09\uFF1A\u66F4\u65B0\u6240\u6709\u7C7B\u5E93",title:"\u65B9\u5F0F\u4E09\uFF1A\u66F4\u65B0\u6240\u6709\u7C7B\u5E93"}]}],raw:`---
order: 80
title: \u5347\u7EA7\u811A\u624B\u67B6
type: Dev
---

\u5728 [\u4F53\u7CFB\u7ED3\u6784](/docs/architecture) \u4E2D\u6211\u4EEC\u5DF2\u7ECF\u63CF\u8FF0\u4E86 NG-ALAIN \u811A\u624B\u67B6\u7684\u6574\u4F53\u6784\u6210\uFF0C\u6211\u4EEC\u82B1\u4E86\u5927\u91CF\u65F6\u95F4\u53BB\u5F00\u53D1\u4E00\u4E9B\u57FA\u7840\u5EFA\u8BBE\uFF0C\u5E76\u628A\u8FD9\u4E9B\u4EE5 \`@delon/*\` \u7CFB\u5217\u53D1\u5E03\u81F3 Npm \u5F53\u4E2D\uFF0C\u4F7F\u5F97\u5347\u7EA7\u53D8\u5F97\u975E\u5E38\u8F7B\u677E\u3002

## \u53D1\u5E03\u89C4\u5219

\u540C \`@angular/*\` \u7C7B\u4F3C\uFF0C\`@delon/*\` \u7C7B\u5E93\u7684\u7248\u672C\u53F7\u5728\u6BCF\u4E00\u4E2A\u8FED\u4EE3\u65F6\uFF0C\u4E0D\u7BA1\u67D0\u7C7B\u5E93\u662F\u5426\u6709\u4FEE\u6539\uFF0C\u90FD\u4F1A\u7EDF\u4E00\u4E2A\u7248\u672C\u53F7 ([![NPM version](https://img.shields.io/npm/v/@delon/theme.svg)](https://www.npmjs.com/package/@delon/theme)) \u3002

\u540C\u65F6\u6309\u4EE5\u4E0B\u53D1\u5E03\u89C4\u5219\u53CA\u66F4\u65B0\u7248\u672C\u53F7\u8BF4\u660E\uFF1A

- \`@delon\` \u4F5C\u4E3A\u57FA\u7840\u5EFA\u8BBE\u7C7B\u5E93\uFF0C\u5728\u66F4\u65B0\u9891\u7387\u4E0A\u4F1A\u7565\u9AD8\uFF0C\u4E00\u822C\u4E00\u5468\u81F3\u5C11\u66F4\u65B0\u4E00\u6B21
- \u5E26\u6709 **BREAKING CHANGES** \u81F3\u5C11\u63D0\u5347\u4E00\u4E2A\u6B21\u7248\u672C\u53F7
- [\u66F4\u65B0\u65E5\u5FD7](https://github.com/ng-alain/ng-alain/releases)

## \u5982\u4F55\u5347\u7EA7\uFF1F

### \u65B9\u5F0F\u4E00\uFF1A\u547D\u4EE4\u884C\uFF08\u63A8\u8350\uFF09

\u9664\u975E\u662F\u5927\u7248\u672C\u66F4\u65B0\uFF08\u5373\u7C7B\u4F3C\u4ECE \`12.0.0\` \u5347\u81F3 \`13.0.0\`\uFF09\uFF0C\u5426\u5219\u53EA\u9700\u8981\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u5373\u53EF\uFF1A

\`\`\`bash
ng update ng-alain
\`\`\`

### \u65B9\u5F0F\u4E8C\uFF1A\u624B\u52A8\u4FEE\u6539\u7248\u672C\u53F7

\u4FEE\u6539 \`package.json\` \u6240\u6709 \`@delon/\` \u5F00\u5934\u7684\u7C7B\u5E93\u7248\u672C\u53F7\u4E3A\u6700\u65B0\u7248\u672C\u53F7\uFF1A

\`\`\`
"@delon/theme": "^12.0.0"
\`\`\`

\u5C06 \`^12.0.0\` \u66FF\u6362\u6210\u6700\u65B0\u7248\u672C\u53F7\u3002

\u6700\u540E\uFF0C\u91CD\u65B0\u5B89\u88C5\u4F9D\u8D56\u5305\u3002

\`\`\`bash
yarn
\`\`\`

> \u9047\u5230\u95EE\u9898\u8BF7\u9605\u8BFB [\u5E38\u89C1\u95EE\u9898](/docs/faq)

### \u65B9\u5F0F\u4E09\uFF1A\u66F4\u65B0\u6240\u6709\u7C7B\u5E93

\u811A\u624B\u67B6\u5728 \`package.json\` \u91CC\u591A\u6570\u7C7B\u5E93\u90FD\u662F\u4F7F\u7528\u5BBD\u677E\u7684\u7248\u672C\u53F7\uFF0C\u4F8B\u5982\uFF1A

\`^0.1.0\` \u5E26\u6709 \`^\` \u7B26\u53F7\u8868\u793A\u4F7F\u7528\u6700\u65B0\u6B21\u7248\u672C\u53F7\uFF0C\u56E0\u6B64\uFF0C\`0.7.0\` \u4E5F\u662F\u8BE5\u8303\u56F4\u4E4B\u5217\u3002

\u8981\u60F3\u91C7\u7528\u8FD9\u79CD\u66F4\u65B0\u65B9\u5F0F\u9700\u8981\u6309\u4EE5\u4E0B\u6B65\u9AA4\u8FDB\u884C\uFF1A

- \u79FB\u9664 \`node_modules\` \u6587\u4EF6\u5939\u53CA \`yarn.lock\` \u6587\u4EF6
- \u6267\u884C \`yarn\`

**\u6CE8\u610F\uFF1A** \u8FD9\u79CD\u65B9\u5F0F\u4F1A\u5BF9\u6240\u6709\u7C7B\u5E93\u6309\u6BD4\u8F83\u65B0\u7684\u7248\u672C\u5B89\u88C5\uFF0C\u4F46\u6709\u53EF\u80FD\u4F1A\u5BFC\u81F4\u7531\u4E8E\u7B2C\u4E09\u65B9\u7C7B\u578B\u7684\u7834\u574F\u6027\u53D8\u66F4\u4F1A\u5BFC\u81F4\u4E00\u4E9B\u4E0D\u5FC5\u8981\u7684\u9EBB\u70E6\u3002`}}};codes=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=o({type:n,selectors:[["docs-upgrade"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&i(0,"app-docs",0),e&2&&a("codes",t.codes)("item",t.item)},dependencies:[r],encapsulation:2})};var un=[{path:"",component:O,children:[{path:"acl",redirectTo:"acl/zh",pathMatch:"full"},{path:"acl/:lang",component:d},{path:"architecture",redirectTo:"architecture/zh",pathMatch:"full"},{path:"architecture/:lang",component:p},{path:"auth",redirectTo:"auth/zh",pathMatch:"full"},{path:"auth/:lang",component:h},{path:"cache",redirectTo:"cache/zh",pathMatch:"full"},{path:"cache/:lang",component:u},{path:"changelog",redirectTo:"changelog/zh",pathMatch:"full"},{path:"changelog/:lang",component:g},{path:"cli",redirectTo:"cli/zh",pathMatch:"full"},{path:"cli/:lang",component:m},{path:"contributing",redirectTo:"contributing/zh",pathMatch:"full"},{path:"contributing/:lang",component:f},{path:"deploy",redirectTo:"deploy/zh",pathMatch:"full"},{path:"deploy/:lang",component:b},{path:"faq",redirectTo:"faq/zh",pathMatch:"full"},{path:"faq/:lang",component:y},{path:"getting-started",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"getting-started/:lang",component:k},{path:"global-config",redirectTo:"global-config/zh",pathMatch:"full"},{path:"global-config/:lang",component:v},{path:"graph",redirectTo:"graph/zh",pathMatch:"full"},{path:"graph/:lang",component:_},{path:"how-to-start",redirectTo:"how-to-start/zh",pathMatch:"full"},{path:"how-to-start/:lang",component:A},{path:"i18n",redirectTo:"i18n/zh",pathMatch:"full"},{path:"i18n/:lang",component:w},{path:"import",redirectTo:"import/zh",pathMatch:"full"},{path:"import/:lang",component:N},{path:"llms",redirectTo:"llms/zh",pathMatch:"full"},{path:"llms/:lang",component:I},{path:"mock",redirectTo:"mock/zh",pathMatch:"full"},{path:"mock/:lang",component:x},{path:"module",redirectTo:"module/zh",pathMatch:"full"},{path:"module/:lang",component:C},{path:"new-component",redirectTo:"new-component/zh",pathMatch:"full"},{path:"new-component/:lang",component:S},{path:"new-page",redirectTo:"new-page/zh",pathMatch:"full"},{path:"new-page/:lang",component:L},{path:"performance",redirectTo:"performance/zh",pathMatch:"full"},{path:"performance/:lang",component:D},{path:"server",redirectTo:"server/zh",pathMatch:"full"},{path:"server/:lang",component:M},{path:"ssr",redirectTo:"ssr/zh",pathMatch:"full"},{path:"ssr/:lang",component:z},{path:"style-guide",redirectTo:"style-guide/zh",pathMatch:"full"},{path:"style-guide/:lang",component:T},{path:"theme",redirectTo:"theme/zh",pathMatch:"full"},{path:"theme/:lang",component:R},{path:"upgrade-v21",redirectTo:"upgrade-v21/zh",pathMatch:"full"},{path:"upgrade-v21/:lang",component:q},{path:"upgrade",redirectTo:"upgrade/zh",pathMatch:"full"},{path:"upgrade/:lang",component:G}]}];export{un as routes};
