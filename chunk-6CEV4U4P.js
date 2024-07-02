import{a as l}from"./chunk-YTWMHDQG.js";import{a as p}from"./chunk-46AY7WCX.js";import"./chunk-SNYW7M2S.js";import"./chunk-MXTZQIFQ.js";import"./chunk-S7VNNC65.js";import"./chunk-TQSE6GJU.js";import"./chunk-ADNPNLQV.js";import{Kb as i,Ua as n,Wa as c,ha as r,ib as s}from"./chunk-ZSKDB3F4.js";var u=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/mock/docs/getting-started.en-US.md","zh-CN":"packages/mock/docs/getting-started.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><h2 id="Foreword"><a class="lake-link"><i data-anchor="Foreword"></i></a>Foreword</h2><p><code>@delon/mock</code> is a simulation data generator to help the front-end to develop and prototype separate from the back-end progress and reduce some monotony particularly while writing automated tests.</p><p><strong>Features</strong></p><ul><li><p>All of the Angular projects</p></li><li><p>Unobtrusive</p></li><li><p>Simple usage</p></li><li><p>Support <a target="_blank" href="http://mockjs.com/" data-url="http://mockjs.com/">mock.js</a></p></li></ul><h2 id="Usage"><a class="lake-link"><i data-anchor="Usage"></i></a>Usage</h2><p>Install <code>@delon/mock</code> from <code>yarn</code>.</p><pre class="hljs language-bash"><code>npm i --save-dev @delon/mock</code></pre><p>Please refer to <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/global-config.module.ts#L26-L30" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/global-config.module.ts#L26-L30">global-config.module.ts</a> import the <a href="/mock/rule" data-url="/mock/rule">Mock Rule data</a>.</p><h3 id="MockOptions"><a class="lake-link"><i data-anchor="MockOptions"></i></a>MockOptions</h3><blockquote><p>You can override them via <a href="/docs/global-config" data-url="/docs/global-config">Global Configuration</a>.</p></blockquote><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[data]</code></td><td><code>any</code></td><td>-</td><td>Mock data rule</td><td>\u2705</td></tr><tr><td><code>[delay]</code></td><td><code>number</code></td><td><code>300</code></td><td>Request delay, unit is milliseconds</td><td>\u2705</td></tr><tr><td><code>[force]</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Whether to force all requests to Mock, <code>true</code> means to return a 404 error directly when the requested URL does not exist, <code>false</code> means to send a real HTTP request when the request is missed</td><td>\u2705</td></tr><tr><td><code>[log]</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Whether to print Mock request information, make up for the browser without Network information; it will output <span>\u{1F47D}Mock</span> when hit</td><td>\u2705</td></tr><tr><td><code>[copy]</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Whether to return copy data</td><td>\u2705</td></tr></tbody></table><h3 id="Whyisitonlyvalidfordevelopmentenvironment"><a class="lake-link"><i data-anchor="Whyisitonlyvalidfordevelopmentenvironment"></i></a>Whyisitonlyvalidfordevelopmentenvironment</h3><p>Mock is not real data, and most scenarios are for development local or test environments; therefore, Mock modules and rule data should not be included in the production environment.</p><p>Of course, you can also put the <code>provideMockConfig</code> of <code>environment.ts</code> under <code>environment.prod.ts</code> so that the production environment also uses this rule, just like <a target="_blank" href="https://ng-alain.github.io/ng-" data-url="https://ng-alain.github.io/ng-">https://ng-alain.github.io/ng-</a> Like alain/, some mock requests are needed to ensure the environment runs.</p><pre class="hljs language-ts"><code>import { provideMockConfig } from '@delon/mock';
import * as MOCKDATA from '../../_mock';
export const environment = {
  providers: [provideMockConfig({ data: MOCKDATA })],
} as Environment;</code></pre></section>`,meta:{order:1,title:"Getting Started",type:"Documents"},toc:[{id:"Foreword",title:"Foreword",h:2},{id:"Usage",title:"Usage",h:2,children:[{id:"MockOptions",title:"MockOptions",h:3},{id:"Whyisitonlyvalidfordevelopmentenvironment",title:"Why is it only valid for development environment?",h:3}]}]},"zh-CN":{content:`<section class="markdown"><h2 id="\u5199\u5728\u524D\u9762"><a class="lake-link"><i data-anchor="\u5199\u5728\u524D\u9762"></i></a>\u5199\u5728\u524D\u9762</h2><p>Mock \u662F\u6307\u901A\u8FC7\u751F\u6210\u6A21\u62DF\u6570\u636E\u8BA9\u524D\u7AEF\u5F00\u53D1\u4EBA\u5458\u72EC\u7ACB\u4E8E\u540E\u7AEF\u8FDB\u884C\u5F00\u53D1\uFF0C\u6709\u65F6\u6211\u4EEC\u4E5F\u4F1A\u8FD0\u7528\u5728\u6D4B\u8BD5\u73AF\u5883\u4E2D\u3002</p><p><code>@delon/mock</code> \u662F\u4E00\u4E2A\u7B80\u5355 Mock \u529F\u80FD\uFF0C\u5305\u62EC\u4EE5\u4E0B\u51E0\u4E2A\u7279\u5F81\uFF1A</p><ul><li><p>\u4EFB\u610F Angular \u9879\u76EE</p></li><li><p>\u5F00\u53D1\u65E0\u4FB5\u5165</p></li><li><p>\u8D85\u7B80\u5355\u7528\u6CD5</p></li><li><p>\u652F\u6301 <a target="_blank" href="http://mockjs.com/" data-url="http://mockjs.com/">mock.js</a></p></li></ul><h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p>\u5B89\u88C5 <code>@delon/mock</code> \u4F9D\u8D56\u5305\uFF1A</p><pre class="hljs language-bash"><code>npm i --save-dev @delon/mock</code></pre><p>\u53C2\u8003 <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/global-config.module.ts#L26-L30" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/global-config.module.ts#L26-L30">global-config.module.ts</a> \u5BFC\u5165<a href="/mock/rule" data-url="/mock/rule">Mock \u89C4\u5219\u6570\u636E</a>\u3002</p><h3 id="MockOptions\u914D\u7F6E"><a class="lake-link"><i data-anchor="MockOptions\u914D\u7F6E"></i></a>MockOptions\u914D\u7F6E</h3><blockquote><p>\u53EF\u4EE5\u901A\u8FC7<a href="/docs/global-config" data-url="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\u8986\u76D6\u5B83\u4EEC\u3002</p></blockquote><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[data]</code></td><td><code>any</code></td><td>-</td><td>Mock \u6570\u636E\u89C4\u5219</td><td>\u2705</td></tr><tr><td><code>[delay]</code></td><td><code>number</code></td><td><code>300</code></td><td>\u8BF7\u6C42\u5EF6\u8FDF\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td>\u2705</td></tr><tr><td><code>[force]</code></td><td><code>boolean</code></td><td><code>false</code></td><td>\u662F\u5426\u5F3A\u5236\u6240\u6709\u8BF7\u6C42\u90FDMock\uFF0C<code>true</code> \u8868\u793A\u5F53\u8BF7\u6C42\u7684URL\u4E0D\u5B58\u5728\u65F6\u76F4\u63A5\u8FD4\u56DE 404 \u9519\u8BEF\uFF0C<code>false</code> \u8868\u793A\u672A\u547D\u4E2D\u65F6\u53D1\u9001\u771F\u5B9EHTTP\u8BF7\u6C42</td><td>\u2705</td></tr><tr><td><code>[log]</code></td><td><code>boolean</code></td><td><code>true</code></td><td>\u662F\u5426\u6253\u5370 Mock \u8BF7\u6C42\u4FE1\u606F\uFF0C\u5F25\u8865\u6D4F\u89C8\u5668\u65E0Network\u4FE1\u606F\uFF1B\u5F53\u8BF7\u6C42\u7ECF\u8FC7 Mock \u4F1A\u63A5\u6536\u3010\u{1F47D}Mock\u3011</td><td>\u2705</td></tr><tr><td><code>[copy]</code></td><td><code>boolean</code></td><td><code>true</code></td><td>\u662F\u5426\u8FD4\u56DE\u526F\u672C\u6570\u636E</td><td>\u2705</td></tr></tbody></table><h3 id="\u4E3A\u4EC0\u4E48\u53EA\u5BF9\u5F00\u53D1\u73AF\u5883\u6709\u6548\uFF1F"><a class="lake-link"><i data-anchor="\u4E3A\u4EC0\u4E48\u53EA\u5BF9\u5F00\u53D1\u73AF\u5883\u6709\u6548\uFF1F"></i></a>\u4E3A\u4EC0\u4E48\u53EA\u5BF9\u5F00\u53D1\u73AF\u5883\u6709\u6548\uFF1F</h3><p>Mock \u5E76\u975E\u662F\u771F\u5B9E\u6570\u636E\uFF0C\u5927\u90E8\u5206\u573A\u666F\u662F\u9488\u5BF9\u5F00\u53D1\u672C\u5730\u6216\u6D4B\u8BD5\u73AF\u5883\uFF1B\u6240\u4EE5\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u4E0D\u5E94\u8BE5\u5305\u62EC Mock \u6A21\u5757\u4EE5\u53CA\u89C4\u5219\u6570\u636E\u3002</p><p>\u5F53\u7136\uFF0C\u4E5F\u53EF\u4EE5\u5C06 <code>environment.ts</code> \u7684 <code>provideMockConfig</code> \u653E\u5230 <code>environment.prod.ts</code> \u4E0B\uFF0C\u4F7F\u5F97\u751F\u4EA7\u73AF\u5883\u4E5F\u4F7F\u7528\u8FD9\u79CD\u89C4\u5219\uFF0C\u5C31\u50CF <a target="_blank" href="https://ng-alain.github.io/ng-alain/" data-url="https://ng-alain.github.io/ng-alain/">https://ng-alain.github.io/ng-alain/</a> \u4E00\u6837\uFF0C\u9700\u8981\u4E00\u4E9B\u6A21\u62DF\u8BF7\u6C42\u6765\u4FDD\u8BC1\u73AF\u5883\u7684\u8FD0\u884C\u3002</p><pre class="hljs language-ts"><code>import { provideMockConfig } from '@delon/mock';
import * as MOCKDATA from '../../_mock';
export const environment = {
  providers: [provideMockConfig({ data: MOCKDATA })],
} as Environment;</code></pre></section>`,meta:{order:1,title:"\u5F00\u59CB\u4F7F\u7528",type:"Documents"},toc:[{id:"\u5199\u5728\u524D\u9762",title:"\u5199\u5728\u524D\u9762",h:2},{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528",h:2,children:[{id:"MockOptions\u914D\u7F6E",title:"MockOptions \u914D\u7F6E",h:3},{id:"\u4E3A\u4EC0\u4E48\u53EA\u5BF9\u5F00\u53D1\u73AF\u5883\u6709\u6548\uFF1F",title:"\u4E3A\u4EC0\u4E48\u53EA\u5BF9\u5F00\u53D1\u73AF\u5883\u6709\u6548\uFF1F",h:3}]}]}},demo:!1},this.codes=[]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r({type:e,selectors:[["app-mock-getting-started"]],hostVars:2,hostBindings:function(t,d){t&2&&c("d-block","true")},standalone:!0,features:[i],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(t,d){t&1&&s(0,"app-docs",0),t&2&&n("codes",d.codes)("item",d.item)},dependencies:[l],encapsulation:2});let o=e;return o})();var h=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/mock/docs/rule.en-US.md","zh-CN":"packages/mock/docs/rule.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><h2 id="Foreword"><a class="lake-link"><i data-anchor="Foreword"></i></a>Foreword</h2><p>The Mock rule data is an <code>Object</code> object, Key is request declaration, and Value is response data, for example:</p><pre class="hljs language-ts"><code>export const USERS = {
  'GET /users': { users: [1, 2], total: 2 },
}</code></pre><p>When send requesting <code>/users</code> via <code>HttpClient</code>, it will directly response <code>{ users: [1, 2], total: 2 }</code>, and will not send any HTTP requests in <code>Network</code> panel.</p><h2 id="Key"><a class="lake-link"><i data-anchor="Key"></i></a>Key</h2><p>Use <code>' '</code>space to separate the request method and URL, the request method can be ignored, the default is <code>GET</code>; the URL supports routing parameters and regular expressions. E.g:</p><pre class="hljs language-ts"><code>export const USERS = {
  'GET /users': null,
  // GET: can be ingored
  '/users/1': null,
  // POST
  'POST /users/1': null,
  // Routing parameters
  '/users/:id': null,
  // Regular expressions need to be wrapped with \`()\`
  '/data/(.*)': null
};</code></pre><h2 id="Value"><a class="lake-link"><i data-anchor="Value"></i></a>Value</h2><p>Supports three types: <code>Object</code>, <code>Array</code>, <code>(req: MockRequest) => any | Observable&lt;any> | Promise<any></code>.</p><pre class="hljs language-ts"><code>import { MockStatusError } from '@delon/mock';

export const USERS = {
  // Array
  '/users': [ { uid: 1 }, { uid: 2 } ],
  // Object
  '/users': { uid: 1 },
  // Function
  '/qs': (req: MockRequest) => req.queryString.pi,
  // Support HttpResponse
  '/http': (req: MockRequest) => new HttpResponse({ body: 'Body', headers: new HttpHeaders({ 'token': '1' }) }),
  // Send Status Error
  '/404': () => { throw new MockStatusError(404); },
  // Support Observable
  '/obs': () => of(1),
  // Support Promise
  '/promise': async () => {
    await delay(10);
    return 1;
  }
};</code></pre><h3 id="MockRequest"><a class="lake-link"><i data-anchor="MockRequest"></i></a>MockRequest</h3><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>[params]</code></td><td><code>any</code></td><td>Routing parameter, <code>/:id</code> then <code>params.id</code></td></tr><tr><td><code>[queryString]</code></td><td><code>any</code></td><td>URL parameter, <code>/users?pi=1&ps=10</code> then <code>queryString.pi</code>, <code>queryString.ps</code></td></tr><tr><td><code>[headers]</code></td><td><code>any</code></td><td>Headers</td></tr><tr><td><code>[body]</code></td><td><code>any</code></td><td>Body</td></tr><tr><td><code>[original]</code></td><td><code>HttpRequest&lt;any></code></td><td><code>HttpRequest</code></td></tr></tbody></table><h3 id="MockStatusError"><a class="lake-link"><i data-anchor="MockStatusError"></i></a>MockStatusError</h3><p>When you want to respond to a <code>404</code> http status.</p><h2 id="Demo"><a class="lake-link"><i data-anchor="Demo"></i></a>Demo</h2><pre class="hljs language-ts"><code>import { MockStatusError } from '@delon/mock';

export const USERS = {
  // Support object or array values
  'GET /users': { users: [1, 2], total: 2 },
  // GET: can be ingored
  '/users/1': { users: [1, 2], total: 2 },
  // POST
  'POST /users/1': { uid: 1 },
  // Get request parameters: queryString\u3001headers\u3001body
  '/qs': (req: MockRequest) => req.queryString.pi,
  // Routing parameters
  '/users/:id': (req: MockRequest) => req.params, // /users/100, output: { id: 100 }
  // Send Status Error
  '/404': () => { throw new MockStatusError(404); },
  // Regular expressions need to be wrapped with \`()\`
  '/data/(.*)': (req: MockRequest) => req,
  // Support Observable
  '/obs': () => of(1),
  // Support Promise
  '/promise': async () => {
    await delay(10);
    return 1;
  }
};</code></pre><h2 id="Storagerule"><a class="lake-link"><i data-anchor="Storagerule"></i></a>Storagerule</h2><p>In general, Mock is required during development, so recommended to create <code>_mock</code> directory in the project root directory and create <code>index.ts</code> file to export all data rules. See <a href="Https://github.com/ng-alain/ng-alain/tree/master/_mock" data-url="Https://github.com/ng-alain/ng-alain/tree/master/_mock">ng-alain/_mock</a>.</p></section>`,meta:{order:2,title:"Rule Data",type:"Documents"},toc:[{id:"Foreword",title:"Foreword",h:2},{id:"Key",title:"Key",h:2},{id:"Value",title:"Value",h:2,children:[{id:"MockRequest",title:"MockRequest",h:3},{id:"MockStatusError",title:"MockStatusError",h:3}]},{id:"Demo",title:"Demo",h:2},{id:"Storagerule",title:"Storage rule",h:2}]},"zh-CN":{content:`<section class="markdown"><h2 id="\u5199\u5728\u524D\u9762"><a class="lake-link"><i data-anchor="\u5199\u5728\u524D\u9762"></i></a>\u5199\u5728\u524D\u9762</h2><p>Mock \u89C4\u5219\u6570\u636E\u662F\u4E00\u4E2A <code>Object</code> \u5BF9\u8C61\uFF0CKey \u4E3A\u8BF7\u6C42\u57DF\u58F0\u660E\uFF0CValue \u4E3A\u54CD\u5E94\u5185\u5BB9\uFF0C\u4F8B\u5982\uFF1A</p><pre class="hljs language-ts"><code>export const USERS = {
  'GET /users': { users: [1, 2], total: 2 },
}</code></pre><p>\u8868\u793A\u5F53\u901A\u8FC7 <code>HttpClient.get('/users')</code> \u8BBF\u95EE\u65F6\uFF0C\u4F1A\u76F4\u63A5\u8FD4\u56DE <code>{ users: [1, 2], total: 2 }</code>\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u53D1\u9001\u4EFB\u4F55 HTTP \u8BF7\u6C42\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>Network</code> \u9762\u677F\u6765\u786E\u8BA4\u3002</p><h2 id="Key\u8BF7\u6C42\u57DF\u58F0\u660E"><a class="lake-link"><i data-anchor="Key\u8BF7\u6C42\u57DF\u58F0\u660E"></i></a>Key\u8BF7\u6C42\u57DF\u58F0\u660E</h2><p>\u4F7F\u7528 <code>' '</code> \u7A7A\u683C\u6765\u533A\u9694\u8BF7\u6C42\u65B9\u6CD5\u548CURL\uFF0C\u8BF7\u6C42\u65B9\u6CD5\u53EF\u5FFD\u7565\uFF0C\u9ED8\u8BA4\u4E3A <code>GET</code>\uFF1BURL \u652F\u6301\u8DEF\u7531\u53C2\u6570\u548C\u6B63\u5219\u8868\u8FBE\u5F0F\u3002\u4E00\u4E9B\u6709\u6548\u7684 Key\uFF1A</p><pre class="hljs language-ts"><code>export const USERS = {
  'GET /users': null,
  // GET \u53EF\u7701\u7565
  '/users/1': null,
  // POST \u8BF7\u6C42
  'POST /users/1': null,
  // \u8DEF\u7531\u53C2\u6570
  '/users/:id': null,
  // \u6B63\u5219\u8868\u8FBE\u5F0F\u9700\u8981\u7528 \`()\` \u5305\u88F9
  '/data/(.*)': null
};</code></pre><h2 id="Value\u54CD\u5E94\u5185\u5BB9"><a class="lake-link"><i data-anchor="Value\u54CD\u5E94\u5185\u5BB9"></i></a>Value\u54CD\u5E94\u5185\u5BB9</h2><p>\u54CD\u5E94\u5185\u5BB9\u652F\u6301\u4E09\u79CD\u7C7B\u578B\uFF1A<code>Object</code>\u3001<code>Array</code>\u3001<code>(req: MockRequest) => any | Observable&lt;any> | Promise<any></code>\u3002</p><pre class="hljs language-ts"><code>import { MockStatusError } from '@delon/mock';

export const USERS = {
  // Array
  '/users': [ { uid: 1 }, { uid: 2 } ],
  // Object
  '/users': { uid: 1 },
  // Function
  '/qs': (req: MockRequest) => req.queryString.pi,
  // \u652F\u6301\u8FD4\u56DE\u5B8C\u6574\u7684 HttpResponse
  '/http': (req: MockRequest) => new HttpResponse({ body: 'Body', headers: new HttpHeaders({ 'token': '1' }) }),
  // \u53D1\u9001 Status \u9519\u8BEF
  '/404': () => { throw new MockStatusError(404); },
  // \u652F\u6301 Observable
  '/obs': () => of(1),
  // \u652F\u6301 Promise
  '/promise': async () => {
    await delay(10);
    return 1;
  }
};</code></pre><h3 id="MockRequest"><a class="lake-link"><i data-anchor="MockRequest"></i></a>MockRequest</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>[params]</code></td><td><code>any</code></td><td>\u8DEF\u7531\u53C2\u6570\uFF0C<code>/:id</code> \u5219 <code>params.id</code></td></tr><tr><td><code>[queryString]</code></td><td><code>any</code></td><td>URL\u53C2\u6570\uFF0C<code>/users?pi=1&ps=10</code> \u5219 <code>queryString.pi</code>\u3001<code>queryString.ps</code></td></tr><tr><td><code>[headers]</code></td><td><code>any</code></td><td>Headers \u503C</td></tr><tr><td><code>[body]</code></td><td><code>any</code></td><td>\u8BF7\u6C42 body</td></tr><tr><td><code>[original]</code></td><td><code>HttpRequest&lt;any></code></td><td>\u539F\u59CB <code>HttpRequest</code></td></tr></tbody></table><h3 id="MockStatusError"><a class="lake-link"><i data-anchor="MockStatusError"></i></a>MockStatusError</h3><p>\u5F53\u4F60\u5E0C\u671B\u54CD\u5E94\u4E00\u4E2A <code>404</code> \u5F02\u5E38\u65F6\u3002</p><h2 id="\u4E00\u4E9B\u793A\u4F8B"><a class="lake-link"><i data-anchor="\u4E00\u4E9B\u793A\u4F8B"></i></a>\u4E00\u4E9B\u793A\u4F8B</h2><pre class="hljs language-ts"><code>import { MockStatusError } from '@delon/mock';

export const USERS = {
  // \u652F\u6301\u503C\u4E3A Object \u548C Array
  'GET /users': { users: [1, 2], total: 2 },
  // GET \u53EF\u7701\u7565
  '/users/1': { users: [1, 2], total: 2 },
  // POST \u8BF7\u6C42
  'POST /users/1': { uid: 1 },
  // \u83B7\u53D6\u8BF7\u6C42\u53C2\u6570 queryString\u3001headers\u3001body
  '/qs': (req: MockRequest) => req.queryString.pi,
  // \u8DEF\u7531\u53C2\u6570
  '/users/:id': (req: MockRequest) => req.params, // /users/100, output: { id: 100 }
  // \u53D1\u9001 Status \u9519\u8BEF
  '/404': () => { throw new MockStatusError(404); },
  // \u4F7F\u7528 () \u8868\u793A\uFF1A\u6B63\u5219\u8868\u8FBE\u5F0F
  '/data/(.*)': (req: MockRequest) => req,
  // \u652F\u6301 Observable
  '/obs': () => of(1),
  // \u652F\u6301 Promise
  '/promise': async () => {
    await delay(10);
    return 1;
  }
};</code></pre><h2 id="\u5B58\u50A8\u89C4\u5219"><a class="lake-link"><i data-anchor="\u5B58\u50A8\u89C4\u5219"></i></a>\u5B58\u50A8\u89C4\u5219</h2><p>\u4E00\u822C\u6765\u8BF4 Mock \u90FD\u662F\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u9700\u8981\uFF0C\u56E0\u6B64\u5EFA\u8BAE\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A <code>_mock</code> \u76EE\u5F55\uFF0C\u5E76\u521B\u5EFA\u4E00\u4E2A <code>index.ts</code> \u6587\u4EF6\u7528\u4E8E\u5BFC\u51FA\u6240\u6709\u6570\u636E\u89C4\u5219\uFF0C\u53C2\u8003 <a target="_blank" href="https://github.com/ng-alain/ng-alain/tree/master/_mock" data-url="https://github.com/ng-alain/ng-alain/tree/master/_mock">ng-alain/_mock</a>\u3002</p></section>`,meta:{order:2,title:"\u89C4\u5219\u6570\u636E",type:"Documents"},toc:[{id:"\u5199\u5728\u524D\u9762",title:"\u5199\u5728\u524D\u9762",h:2},{id:"Key\u8BF7\u6C42\u57DF\u58F0\u660E",title:"Key \u8BF7\u6C42\u57DF\u58F0\u660E",h:2},{id:"Value\u54CD\u5E94\u5185\u5BB9",title:"Value \u54CD\u5E94\u5185\u5BB9",h:2,children:[{id:"MockRequest",title:"MockRequest",h:3},{id:"MockStatusError",title:"MockStatusError",h:3}]},{id:"\u4E00\u4E9B\u793A\u4F8B",title:"\u4E00\u4E9B\u793A\u4F8B",h:2},{id:"\u5B58\u50A8\u89C4\u5219",title:"\u5B58\u50A8\u89C4\u5219",h:2}]}},demo:!1},this.codes=[]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r({type:e,selectors:[["app-mock-rule"]],hostVars:2,hostBindings:function(t,d){t&2&&c("d-block","true")},standalone:!0,features:[i],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(t,d){t&1&&s(0,"app-docs",0),t&2&&n("codes",d.codes)("item",d.item)},dependencies:[l],encapsulation:2});let o=e;return o})();var R=[{path:"",component:p,children:[{path:"",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"getting-started",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"getting-started/:lang",component:u},{path:"rule",redirectTo:"rule/zh",pathMatch:"full"},{path:"rule/:lang",component:h}]}];export{R as routes};
