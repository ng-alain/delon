import{a as s}from"./chunk-PJYRP6KM.js";import{a as l}from"./chunk-C3MNSEWK.js";import"./chunk-XU2NL7K2.js";import"./chunk-J335YUGO.js";import"./chunk-62ZNMC2L.js";import"./chunk-KQR6CVZA.js";import"./chunk-7O6624BH.js";import{Wa as o,sb as r,vb as a}from"./chunk-DBBCITIJ.js";var d=class n{item={name:"getting-started",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:1,title:"Getting Started",description:"@delon/mock is a simulation data generator to help the front-end to develop and prototype separate from the back-end progress and reduce some monotony...",group:"Documents",path:"packages/mock/docs/getting-started.en-US.md",url:"/mock/getting-started/en"},text:`<h2 id="foreword"><a class="lake-link"><i data-anchor="foreword"></i></a>Foreword</h2><p><code>&#64;delon/mock</code> is a simulation data generator to help the front-end to develop and prototype separate from the back-end progress and reduce some monotony particularly while writing automated tests.</p>
<p><strong>Features</strong></p>
<ul>
<li>All of the Angular projects</li>
<li>Unobtrusive</li>
<li>Simple usage</li>
<li>Support <a href="https://github.com/faker-js/faker" target="_blank" rel="noopener">&#64;faker-js/faker</a></li>
</ul>
<h2 id="usage"><a class="lake-link"><i data-anchor="usage"></i></a>Usage</h2><p>Install <code>&#64;delon/mock</code> from <code>yarn</code>.</p>
<pre><code class="language-bash">npm i --save-dev &#64;delon/mock
</code></pre>
<p>Please refer to <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/global-config.module.ts#L26-L30" target="_blank" rel="noopener">global-config.module.ts</a> import the <a href="/mock/rule">Mock Rule data</a>.</p>
<h3 id="mockoptions"><a class="lake-link"><i data-anchor="mockoptions"></i></a>MockOptions</h3><blockquote>
<p>You can override them via <a href="/docs/global-config">Global Configuration</a>.</p>
</blockquote>
<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
<th>Global Config</th>
</tr>
</thead>
<tbody><tr>
<td><code>[data]</code></td>
<td><code>any</code></td>
<td>-</td>
<td>Mock data rule</td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[delay]</code></td>
<td><code>number</code></td>
<td><code>300</code></td>
<td>Request delay, unit is milliseconds</td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[force]</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Whether to force all requests to Mock, <code>true</code> means to return a 404 error directly when the requested URL does not exist, <code>false</code> means to send a real HTTP request when the request is missed</td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[log]</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td>Whether to print Mock request information, make up for the browser without Network information; it will output [\u{1F47D}Mock] when hit</td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[copy]</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td>Whether to return copy data</td>
<td>\u2705</td>
</tr>
</tbody></table>
<h3 id="why_is_it_only_valid_for_development_environment?"><a class="lake-link"><i data-anchor="why_is_it_only_valid_for_development_environment?"></i></a>Why is it only valid for development environment?</h3><p>Mock is not real data, and most scenarios are for development local or test environments; therefore, Mock modules and rule data should not be included in the production environment.</p>
<p>Of course, you can also put the <code>provideMockConfig</code> of <code>environment.ts</code> under <code>environment.prod.ts</code> so that the production environment also uses this rule, just like <a href="https://ng-alain.github.io/ng-" target="_blank" rel="noopener">https://ng-alain.github.io/ng-</a> Like alain/, some mock requests are needed to ensure the environment runs.</p>
<pre><code class="language-ts">import &#123; provideMockConfig &#125; from &#39;&#64;delon/mock&#39;;
import * as MOCKDATA from &#39;../../_mock&#39;;
export const environment = &#123;
  providers: [provideMockConfig(&#123; data: MOCKDATA &#125;)],
&#125; as Environment;
</code></pre>
`,api:"",toc:[{id:"foreword",title:"Foreword"},{id:"usage",title:"Usage",children:[{id:"mockoptions",title:"MockOptions"},{id:"why_is_it_only_valid_for_development_environment?",title:"Why is it only valid for development environment?"}]}],raw:"---\norder: 1\ntitle: Getting Started\ntype: Documents\n---\n\n## Foreword\n\n`@delon/mock` is a simulation data generator to help the front-end to develop and prototype separate from the back-end progress and reduce some monotony particularly while writing automated tests.\n\n**Features**\n\n- All of the Angular projects\n- Unobtrusive\n- Simple usage\n- Support [@faker-js/faker](https://github.com/faker-js/faker)\n\n## Usage\n\nInstall `@delon/mock` from `yarn`.\n\n```bash\nnpm i --save-dev @delon/mock\n```\n\nPlease refer to [global-config.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/global-config.module.ts#L26-L30) import the [Mock Rule data](/mock/rule).\n\n### MockOptions\n\n> You can override them via [Global Configuration](/docs/global-config).\n\n| Property | Type | Default | Description | Global Config |\n|----------|-------------|------|---------|---------------|\n| `[data]` | `any` | - | Mock data rule | \u2705 |\n| `[delay]` | `number` | `300` | Request delay, unit is milliseconds | \u2705 |\n| `[force]` | `boolean` | `false` | Whether to force all requests to Mock, `true` means to return a 404 error directly when the requested URL does not exist, `false` means to send a real HTTP request when the request is missed | \u2705 |\n| `[log]` | `boolean` | `true` | Whether to print Mock request information, make up for the browser without Network information; it will output [\u{1F47D}Mock] when hit | \u2705 |\n| `[copy]` | `boolean` | `true` | Whether to return copy data | \u2705 |\n\n### Why is it only valid for development environment?\n\nMock is not real data, and most scenarios are for development local or test environments; therefore, Mock modules and rule data should not be included in the production environment.\n\nOf course, you can also put the `provideMockConfig` of `environment.ts` under `environment.prod.ts` so that the production environment also uses this rule, just like https://ng-alain.github.io/ng- Like alain/, some mock requests are needed to ensure the environment runs.\n\n```ts\nimport { provideMockConfig } from '@delon/mock';\nimport * as MOCKDATA from '../../_mock';\nexport const environment = {\n  providers: [provideMockConfig({ data: MOCKDATA })],\n} as Environment;\n```"},"zh-CN":{meta:{order:1,title:"\u5F00\u59CB\u4F7F\u7528",description:"Mock \u662F\u6307\u901A\u8FC7\u751F\u6210\u6A21\u62DF\u6570\u636E\u8BA9\u524D\u7AEF\u5F00\u53D1\u4EBA\u5458\u72EC\u7ACB\u4E8E\u540E\u7AEF\u8FDB\u884C\u5F00\u53D1\uFF0C\u6709\u65F6\u6211\u4EEC\u4E5F\u4F1A\u8FD0\u7528\u5728\u6D4B\u8BD5\u73AF\u5883\u4E2D\u3002@delon/mock \u662F\u4E00\u4E2A\u7B80\u5355 Mock \u529F\u80FD\uFF0C\u5305\u62EC\u4EE5\u4E0B\u51E0\u4E2A\u7279\u5F81\uFF1A\u4EFB\u610F Angular \u9879\u76EE\u5F00\u53D1\u65E0\u4FB5\u5165\u8D85\u7B80\u5355\u7528\u6CD5\u652F\u6301 @faker-js/faker\u5B89\u88C5 @delon/mock \u4F9D\u8D56\u5305\uFF1A\u53C2\u8003 globa...",group:"Documents",path:"packages/mock/docs/getting-started.zh-CN.md",url:"/mock/getting-started/zh"},text:`<h2 id="\u5199\u5728\u524D\u9762"><a class="lake-link"><i data-anchor="\u5199\u5728\u524D\u9762"></i></a>\u5199\u5728\u524D\u9762</h2><p>Mock \u662F\u6307\u901A\u8FC7\u751F\u6210\u6A21\u62DF\u6570\u636E\u8BA9\u524D\u7AEF\u5F00\u53D1\u4EBA\u5458\u72EC\u7ACB\u4E8E\u540E\u7AEF\u8FDB\u884C\u5F00\u53D1\uFF0C\u6709\u65F6\u6211\u4EEC\u4E5F\u4F1A\u8FD0\u7528\u5728\u6D4B\u8BD5\u73AF\u5883\u4E2D\u3002</p>
<p><code>&#64;delon/mock</code> \u662F\u4E00\u4E2A\u7B80\u5355 Mock \u529F\u80FD\uFF0C\u5305\u62EC\u4EE5\u4E0B\u51E0\u4E2A\u7279\u5F81\uFF1A</p>
<ul>
<li>\u4EFB\u610F Angular \u9879\u76EE</li>
<li>\u5F00\u53D1\u65E0\u4FB5\u5165</li>
<li>\u8D85\u7B80\u5355\u7528\u6CD5</li>
<li>\u652F\u6301 <a href="https://github.com/faker-js/faker" target="_blank" rel="noopener">&#64;faker-js/faker</a></li>
</ul>
<h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p>\u5B89\u88C5 <code>&#64;delon/mock</code> \u4F9D\u8D56\u5305\uFF1A</p>
<pre><code class="language-bash">npm i --save-dev &#64;delon/mock
</code></pre>
<p>\u53C2\u8003 <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/global-config.module.ts#L26-L30" target="_blank" rel="noopener">global-config.module.ts</a> \u5BFC\u5165<a href="/mock/rule">Mock \u89C4\u5219\u6570\u636E</a>\u3002</p>
<h3 id="mockoptions_\u914D\u7F6E"><a class="lake-link"><i data-anchor="mockoptions_\u914D\u7F6E"></i></a>MockOptions \u914D\u7F6E</h3><blockquote>
<p>\u53EF\u4EE5\u901A\u8FC7<a href="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\u8986\u76D6\u5B83\u4EEC\u3002</p>
</blockquote>
<table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u8BF4\u660E</th>
<th>\u5168\u5C40\u914D\u7F6E</th>
</tr>
</thead>
<tbody><tr>
<td><code>[data]</code></td>
<td><code>any</code></td>
<td>-</td>
<td>Mock \u6570\u636E\u89C4\u5219</td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[delay]</code></td>
<td><code>number</code></td>
<td><code>300</code></td>
<td>\u8BF7\u6C42\u5EF6\u8FDF\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[force]</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>\u662F\u5426\u5F3A\u5236\u6240\u6709\u8BF7\u6C42\u90FDMock\uFF0C<code>true</code> \u8868\u793A\u5F53\u8BF7\u6C42\u7684URL\u4E0D\u5B58\u5728\u65F6\u76F4\u63A5\u8FD4\u56DE 404 \u9519\u8BEF\uFF0C<code>false</code> \u8868\u793A\u672A\u547D\u4E2D\u65F6\u53D1\u9001\u771F\u5B9EHTTP\u8BF7\u6C42</td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[log]</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td>\u662F\u5426\u6253\u5370 Mock \u8BF7\u6C42\u4FE1\u606F\uFF0C\u5F25\u8865\u6D4F\u89C8\u5668\u65E0Network\u4FE1\u606F\uFF1B\u5F53\u8BF7\u6C42\u7ECF\u8FC7 Mock \u4F1A\u63A5\u6536\u3010\u{1F47D}Mock\u3011</td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[copy]</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td>\u662F\u5426\u8FD4\u56DE\u526F\u672C\u6570\u636E</td>
<td>\u2705</td>
</tr>
</tbody></table>
<h3 id="\u4E3A\u4EC0\u4E48\u53EA\u5BF9\u5F00\u53D1\u73AF\u5883\u6709\u6548\uFF1F"><a class="lake-link"><i data-anchor="\u4E3A\u4EC0\u4E48\u53EA\u5BF9\u5F00\u53D1\u73AF\u5883\u6709\u6548\uFF1F"></i></a>\u4E3A\u4EC0\u4E48\u53EA\u5BF9\u5F00\u53D1\u73AF\u5883\u6709\u6548\uFF1F</h3><p>Mock \u5E76\u975E\u662F\u771F\u5B9E\u6570\u636E\uFF0C\u5927\u90E8\u5206\u573A\u666F\u662F\u9488\u5BF9\u5F00\u53D1\u672C\u5730\u6216\u6D4B\u8BD5\u73AF\u5883\uFF1B\u6240\u4EE5\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u4E0D\u5E94\u8BE5\u5305\u62EC Mock \u6A21\u5757\u4EE5\u53CA\u89C4\u5219\u6570\u636E\u3002</p>
<p>\u5F53\u7136\uFF0C\u4E5F\u53EF\u4EE5\u5C06 <code>environment.ts</code> \u7684 <code>provideMockConfig</code> \u653E\u5230 <code>environment.prod.ts</code> \u4E0B\uFF0C\u4F7F\u5F97\u751F\u4EA7\u73AF\u5883\u4E5F\u4F7F\u7528\u8FD9\u79CD\u89C4\u5219\uFF0C\u5C31\u50CF <a href="https://ng-alain.github.io/ng-alain/" target="_blank" rel="noopener">https://ng-alain.github.io/ng-alain/</a> \u4E00\u6837\uFF0C\u9700\u8981\u4E00\u4E9B\u6A21\u62DF\u8BF7\u6C42\u6765\u4FDD\u8BC1\u73AF\u5883\u7684\u8FD0\u884C\u3002</p>
<pre><code class="language-ts">import &#123; provideMockConfig &#125; from &#39;&#64;delon/mock&#39;;
import * as MOCKDATA from &#39;../../_mock&#39;;
export const environment = &#123;
  providers: [provideMockConfig(&#123; data: MOCKDATA &#125;)],
&#125; as Environment;
</code></pre>
`,api:"",toc:[{id:"\u5199\u5728\u524D\u9762",title:"\u5199\u5728\u524D\u9762"},{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528",children:[{id:"mockoptions_\u914D\u7F6E",title:"MockOptions \u914D\u7F6E"},{id:"\u4E3A\u4EC0\u4E48\u53EA\u5BF9\u5F00\u53D1\u73AF\u5883\u6709\u6548\uFF1F",title:"\u4E3A\u4EC0\u4E48\u53EA\u5BF9\u5F00\u53D1\u73AF\u5883\u6709\u6548\uFF1F"}]}],raw:"---\norder: 1\ntitle: \u5F00\u59CB\u4F7F\u7528\ntype: Documents\n---\n\n## \u5199\u5728\u524D\u9762\n\nMock \u662F\u6307\u901A\u8FC7\u751F\u6210\u6A21\u62DF\u6570\u636E\u8BA9\u524D\u7AEF\u5F00\u53D1\u4EBA\u5458\u72EC\u7ACB\u4E8E\u540E\u7AEF\u8FDB\u884C\u5F00\u53D1\uFF0C\u6709\u65F6\u6211\u4EEC\u4E5F\u4F1A\u8FD0\u7528\u5728\u6D4B\u8BD5\u73AF\u5883\u4E2D\u3002\n\n`@delon/mock` \u662F\u4E00\u4E2A\u7B80\u5355 Mock \u529F\u80FD\uFF0C\u5305\u62EC\u4EE5\u4E0B\u51E0\u4E2A\u7279\u5F81\uFF1A\n\n- \u4EFB\u610F Angular \u9879\u76EE\n- \u5F00\u53D1\u65E0\u4FB5\u5165\n- \u8D85\u7B80\u5355\u7528\u6CD5\n- \u652F\u6301 [@faker-js/faker](https://github.com/faker-js/faker)\n\n## \u5982\u4F55\u4F7F\u7528\n\n\u5B89\u88C5 `@delon/mock` \u4F9D\u8D56\u5305\uFF1A\n\n```bash\nnpm i --save-dev @delon/mock\n```\n\n\u53C2\u8003 [global-config.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/global-config.module.ts#L26-L30) \u5BFC\u5165[Mock \u89C4\u5219\u6570\u636E](/mock/rule)\u3002\n\n### MockOptions \u914D\u7F6E\n\n> \u53EF\u4EE5\u901A\u8FC7[\u5168\u5C40\u914D\u7F6E](/docs/global-config)\u8986\u76D6\u5B83\u4EEC\u3002\n\n| \u6210\u5458 | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u8BF4\u660E | \u5168\u5C40\u914D\u7F6E |\n|----|----|----|-----|------|\n| `[data]` | `any` | - | Mock \u6570\u636E\u89C4\u5219 | \u2705 |\n| `[delay]` | `number` | `300` | \u8BF7\u6C42\u5EF6\u8FDF\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2 | \u2705 |\n| `[force]` | `boolean` | `false` | \u662F\u5426\u5F3A\u5236\u6240\u6709\u8BF7\u6C42\u90FDMock\uFF0C`true` \u8868\u793A\u5F53\u8BF7\u6C42\u7684URL\u4E0D\u5B58\u5728\u65F6\u76F4\u63A5\u8FD4\u56DE 404 \u9519\u8BEF\uFF0C`false` \u8868\u793A\u672A\u547D\u4E2D\u65F6\u53D1\u9001\u771F\u5B9EHTTP\u8BF7\u6C42 | \u2705 |\n| `[log]` | `boolean` | `true` | \u662F\u5426\u6253\u5370 Mock \u8BF7\u6C42\u4FE1\u606F\uFF0C\u5F25\u8865\u6D4F\u89C8\u5668\u65E0Network\u4FE1\u606F\uFF1B\u5F53\u8BF7\u6C42\u7ECF\u8FC7 Mock \u4F1A\u63A5\u6536\u3010\u{1F47D}Mock\u3011 | \u2705 |\n| `[copy]` | `boolean` | `true` | \u662F\u5426\u8FD4\u56DE\u526F\u672C\u6570\u636E | \u2705 |\n\n### \u4E3A\u4EC0\u4E48\u53EA\u5BF9\u5F00\u53D1\u73AF\u5883\u6709\u6548\uFF1F\n\nMock \u5E76\u975E\u662F\u771F\u5B9E\u6570\u636E\uFF0C\u5927\u90E8\u5206\u573A\u666F\u662F\u9488\u5BF9\u5F00\u53D1\u672C\u5730\u6216\u6D4B\u8BD5\u73AF\u5883\uFF1B\u6240\u4EE5\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u4E0D\u5E94\u8BE5\u5305\u62EC Mock \u6A21\u5757\u4EE5\u53CA\u89C4\u5219\u6570\u636E\u3002\n\n\u5F53\u7136\uFF0C\u4E5F\u53EF\u4EE5\u5C06 `environment.ts` \u7684 `provideMockConfig` \u653E\u5230 `environment.prod.ts` \u4E0B\uFF0C\u4F7F\u5F97\u751F\u4EA7\u73AF\u5883\u4E5F\u4F7F\u7528\u8FD9\u79CD\u89C4\u5219\uFF0C\u5C31\u50CF https://ng-alain.github.io/ng-alain/ \u4E00\u6837\uFF0C\u9700\u8981\u4E00\u4E9B\u6A21\u62DF\u8BF7\u6C42\u6765\u4FDD\u8BC1\u73AF\u5883\u7684\u8FD0\u884C\u3002\n\n```ts\nimport { provideMockConfig } from '@delon/mock';\nimport * as MOCKDATA from '../../_mock';\nexport const environment = {\n  providers: [provideMockConfig({ data: MOCKDATA })],\n} as Environment;\n```"}}};codes=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=o({type:n,selectors:[["mock-getting-started"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&a(0,"app-docs",0),e&2&&r("codes",t.codes)("item",t.item)},dependencies:[s],encapsulation:2})};var c=class n{item={name:"rule",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:2,title:"Rule Data",description:"The Mock rule data is an Object object, Key is request declaration, and Value is response data, for example:When send requesting /users via HttpClient",group:"Documents",path:"packages/mock/docs/rule.en-US.md",url:"/mock/rule/en"},text:`<h2 id="foreword"><a class="lake-link"><i data-anchor="foreword"></i></a>Foreword</h2><p>The Mock rule data is an <code>Object</code> object, Key is request declaration, and Value is response data, for example:</p>
<pre><code class="language-ts">export const USERS = &#123;
  &#39;GET /users&#39;: &#123; users: [1, 2], total: 2 &#125;,
&#125;
</code></pre>
<p>When send requesting <code>/users</code> via <code>HttpClient</code>, it will directly response <code>&#123; users: [1, 2], total: 2 &#125;</code>, and will not send any HTTP requests in <code>Network</code> panel.</p>
<h2 id="key"><a class="lake-link"><i data-anchor="key"></i></a>Key</h2><p>Use <code>&#39; &#39;</code>space to separate the request method and URL, the request method can be ignored, the default is <code>GET</code>; the URL supports routing parameters and regular expressions. E.g:</p>
<pre><code class="language-ts">export const USERS = &#123;
  &#39;GET /users&#39;: null,
  // GET: can be ingored
  &#39;/users/1&#39;: null,
  // POST
  &#39;POST /users/1&#39;: null,
  // Routing parameters
  &#39;/users/:id&#39;: null,
  // Regular expressions need to be wrapped with \`()\`
  &#39;/data/(.*)&#39;: null
&#125;;
</code></pre>
<h2 id="value"><a class="lake-link"><i data-anchor="value"></i></a>Value</h2><p>Supports three types: <code>Object</code>, <code>Array</code>, <code>(req: MockRequest) =&gt; any | Observable&lt;any&gt; | Promise&lt;any&gt;</code>.</p>
<pre><code class="language-ts">import &#123; MockStatusError &#125; from &#39;&#64;delon/mock&#39;;

export const USERS = &#123;
  // Array
  &#39;/users&#39;: [ &#123; uid: 1 &#125;, &#123; uid: 2 &#125; ],
  // Object
  &#39;/users&#39;: &#123; uid: 1 &#125;,
  // Function
  &#39;/qs&#39;: (req: MockRequest) =&gt; req.queryString.pi,
  // Support HttpResponse
  &#39;/http&#39;: (req: MockRequest) =&gt; new HttpResponse(&#123; body: &#39;Body&#39;, headers: new HttpHeaders(&#123; &#39;token&#39;: &#39;1&#39; &#125;) &#125;),
  // Send Status Error
  &#39;/404&#39;: () =&gt; &#123; throw new MockStatusError(404); &#125;,
  // Support Observable
  &#39;/obs&#39;: () =&gt; of(1),
  // Support Promise
  &#39;/promise&#39;: async () =&gt; &#123;
    await delay(10);
    return 1;
  &#125;
&#125;;
</code></pre>
<h3 id="mockrequest"><a class="lake-link"><i data-anchor="mockrequest"></i></a>MockRequest</h3><p>Name        | Type               | Description
------------|--------------------|------------------------------------------------------------------
<code>[params]</code>      | <code>any</code>              | Routing parameter, <code>/:id</code> then <code>params.id</code>
<code>[queryString]</code> | <code>any</code>              | URL parameter, <code>/users?pi=1&amp;ps=10</code> then <code>queryString.pi</code>, <code>queryString.ps</code>
<code>[headers]</code>     | <code>any</code>              | Headers
<code>[body]</code>        | <code>any</code>              | Body
<code>[original]</code>    | <code>HttpRequest&lt;any&gt;</code> | <code>HttpRequest</code></p>
<h3 id="mockstatuserror"><a class="lake-link"><i data-anchor="mockstatuserror"></i></a>MockStatusError</h3><p>When you want to respond to a <code>404</code> http status.</p>
<h2 id="demo"><a class="lake-link"><i data-anchor="demo"></i></a>Demo</h2><pre><code class="language-ts">import &#123; MockStatusError &#125; from &#39;&#64;delon/mock&#39;;

export const USERS = &#123;
  // Support object or array values
  &#39;GET /users&#39;: &#123; users: [1, 2], total: 2 &#125;,
  // GET: can be ingored
  &#39;/users/1&#39;: &#123; users: [1, 2], total: 2 &#125;,
  // POST
  &#39;POST /users/1&#39;: &#123; uid: 1 &#125;,
  // Get request parameters: queryString\u3001headers\u3001body
  &#39;/qs&#39;: (req: MockRequest) =&gt; req.queryString.pi,
  // Routing parameters
  &#39;/users/:id&#39;: (req: MockRequest) =&gt; req.params, // /users/100, output: &#123; id: 100 &#125;
  // Send Status Error
  &#39;/404&#39;: () =&gt; &#123; throw new MockStatusError(404); &#125;,
  // Regular expressions need to be wrapped with \`()\`
  &#39;/data/(.*)&#39;: (req: MockRequest) =&gt; req,
  // Support Observable
  &#39;/obs&#39;: () =&gt; of(1),
  // Support Promise
  &#39;/promise&#39;: async () =&gt; &#123;
    await delay(10);
    return 1;
  &#125;
&#125;;
</code></pre>
<h2 id="storage_rule"><a class="lake-link"><i data-anchor="storage_rule"></i></a>Storage rule</h2><p>In general, Mock is required during development, so recommended to create <code>_mock</code> directory in the project root directory and create <code>index.ts</code> file to export all data rules. See <a href="Https://github.com/ng-alain/ng-alain/tree/master/_mock">ng-alain/_mock</a>.</p>
`,api:"",toc:[{id:"foreword",title:"Foreword"},{id:"key",title:"Key"},{id:"value",title:"Value",children:[{id:"mockrequest",title:"MockRequest"},{id:"mockstatuserror",title:"MockStatusError"}]},{id:"demo",title:"Demo"},{id:"storage_rule",title:"Storage rule"}],raw:`---
order: 2
title: Rule Data
type: Documents
---

## Foreword

The Mock rule data is an \`Object\` object, Key is request declaration, and Value is response data, for example:

\`\`\`ts
export const USERS = {
  'GET /users': { users: [1, 2], total: 2 },
}
\`\`\`

When send requesting \`/users\` via \`HttpClient\`, it will directly response \`{ users: [1, 2], total: 2 }\`, and will not send any HTTP requests in \`Network\` panel.

## Key

Use \`' '\`space to separate the request method and URL, the request method can be ignored, the default is \`GET\`; the URL supports routing parameters and regular expressions. E.g:

\`\`\`ts
export const USERS = {
  'GET /users': null,
  // GET: can be ingored
  '/users/1': null,
  // POST
  'POST /users/1': null,
  // Routing parameters
  '/users/:id': null,
  // Regular expressions need to be wrapped with \`()\`
  '/data/(.*)': null
};
\`\`\`

## Value

Supports three types: \`Object\`, \`Array\`, \`(req: MockRequest) => any | Observable<any> | Promise<any>\`.

\`\`\`ts
import { MockStatusError } from '@delon/mock';

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
};
\`\`\`

### MockRequest

Name        | Type               | Description
------------|--------------------|------------------------------------------------------------------
\`[params]\`      | \`any\`              | Routing parameter, \`/:id\` then \`params.id\`
\`[queryString]\` | \`any\`              | URL parameter, \`/users?pi=1&ps=10\` then \`queryString.pi\`, \`queryString.ps\`
\`[headers]\`     | \`any\`              | Headers
\`[body]\`        | \`any\`              | Body
\`[original]\`    | \`HttpRequest<any>\` | \`HttpRequest\`

### MockStatusError

When you want to respond to a \`404\` http status.

## Demo

\`\`\`ts
import { MockStatusError } from '@delon/mock';

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
};
\`\`\`

## Storage rule

In general, Mock is required during development, so recommended to create \`_mock\` directory in the project root directory and create \`index.ts\` file to export all data rules. See [ng-alain/_mock]( Https://github.com/ng-alain/ng-alain/tree/master/_mock).`},"zh-CN":{meta:{order:2,title:"\u89C4\u5219\u6570\u636E",description:"Mock \u89C4\u5219\u6570\u636E\u662F\u4E00\u4E2A Object \u5BF9\u8C61\uFF0CKey \u4E3A\u8BF7\u6C42\u57DF\u58F0\u660E\uFF0CValue \u4E3A\u54CD\u5E94\u5185\u5BB9\uFF0C\u4F8B\u5982\uFF1A\u8868\u793A\u5F53\u901A\u8FC7 HttpClient.get('/users') \u8BBF\u95EE\u65F6\uFF0C\u4F1A\u76F4\u63A5\u8FD4\u56DE { users: [1, 2], total: 2 }\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u53D1\u9001\u4EFB\u4F55 HTTP \u8BF7\u6C42\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 Network \u9762...",group:"Documents",path:"packages/mock/docs/rule.zh-CN.md",url:"/mock/rule/zh"},text:`<h2 id="\u5199\u5728\u524D\u9762"><a class="lake-link"><i data-anchor="\u5199\u5728\u524D\u9762"></i></a>\u5199\u5728\u524D\u9762</h2><p>Mock \u89C4\u5219\u6570\u636E\u662F\u4E00\u4E2A <code>Object</code> \u5BF9\u8C61\uFF0CKey \u4E3A\u8BF7\u6C42\u57DF\u58F0\u660E\uFF0CValue \u4E3A\u54CD\u5E94\u5185\u5BB9\uFF0C\u4F8B\u5982\uFF1A</p>
<pre><code class="language-ts">export const USERS = &#123;
  &#39;GET /users&#39;: &#123; users: [1, 2], total: 2 &#125;,
&#125;
</code></pre>
<p>\u8868\u793A\u5F53\u901A\u8FC7 <code>HttpClient.get(&#39;/users&#39;)</code> \u8BBF\u95EE\u65F6\uFF0C\u4F1A\u76F4\u63A5\u8FD4\u56DE <code>&#123; users: [1, 2], total: 2 &#125;</code>\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u53D1\u9001\u4EFB\u4F55 HTTP \u8BF7\u6C42\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>Network</code> \u9762\u677F\u6765\u786E\u8BA4\u3002</p>
<h2 id="key_\u8BF7\u6C42\u57DF\u58F0\u660E"><a class="lake-link"><i data-anchor="key_\u8BF7\u6C42\u57DF\u58F0\u660E"></i></a>Key \u8BF7\u6C42\u57DF\u58F0\u660E</h2><p>\u4F7F\u7528 <code>&#39; &#39;</code> \u7A7A\u683C\u6765\u533A\u9694\u8BF7\u6C42\u65B9\u6CD5\u548CURL\uFF0C\u8BF7\u6C42\u65B9\u6CD5\u53EF\u5FFD\u7565\uFF0C\u9ED8\u8BA4\u4E3A <code>GET</code>\uFF1BURL \u652F\u6301\u8DEF\u7531\u53C2\u6570\u548C\u6B63\u5219\u8868\u8FBE\u5F0F\u3002\u4E00\u4E9B\u6709\u6548\u7684 Key\uFF1A</p>
<pre><code class="language-ts">export const USERS = &#123;
  &#39;GET /users&#39;: null,
  // GET \u53EF\u7701\u7565
  &#39;/users/1&#39;: null,
  // POST \u8BF7\u6C42
  &#39;POST /users/1&#39;: null,
  // \u8DEF\u7531\u53C2\u6570
  &#39;/users/:id&#39;: null,
  // \u6B63\u5219\u8868\u8FBE\u5F0F\u9700\u8981\u7528 \`()\` \u5305\u88F9
  &#39;/data/(.*)&#39;: null
&#125;;
</code></pre>
<h2 id="value_\u54CD\u5E94\u5185\u5BB9"><a class="lake-link"><i data-anchor="value_\u54CD\u5E94\u5185\u5BB9"></i></a>Value \u54CD\u5E94\u5185\u5BB9</h2><p>\u54CD\u5E94\u5185\u5BB9\u652F\u6301\u4E09\u79CD\u7C7B\u578B\uFF1A<code>Object</code>\u3001<code>Array</code>\u3001<code>(req: MockRequest) =&gt; any | Observable&lt;any&gt; | Promise&lt;any&gt;</code>\u3002</p>
<pre><code class="language-ts">import &#123; MockStatusError &#125; from &#39;&#64;delon/mock&#39;;

export const USERS = &#123;
  // Array
  &#39;/users&#39;: [ &#123; uid: 1 &#125;, &#123; uid: 2 &#125; ],
  // Object
  &#39;/users&#39;: &#123; uid: 1 &#125;,
  // Function
  &#39;/qs&#39;: (req: MockRequest) =&gt; req.queryString.pi,
  // \u652F\u6301\u8FD4\u56DE\u5B8C\u6574\u7684 HttpResponse
  &#39;/http&#39;: (req: MockRequest) =&gt; new HttpResponse(&#123; body: &#39;Body&#39;, headers: new HttpHeaders(&#123; &#39;token&#39;: &#39;1&#39; &#125;) &#125;),
  // \u53D1\u9001 Status \u9519\u8BEF
  &#39;/404&#39;: () =&gt; &#123; throw new MockStatusError(404); &#125;,
  // \u652F\u6301 Observable
  &#39;/obs&#39;: () =&gt; of(1),
  // \u652F\u6301 Promise
  &#39;/promise&#39;: async () =&gt; &#123;
    await delay(10);
    return 1;
  &#125;
&#125;;
</code></pre>
<h3 id="mockrequest"><a class="lake-link"><i data-anchor="mockrequest"></i></a>MockRequest</h3><p>\u540D\u79F0        | \u7C7B\u578B               | \u63CF\u8FF0
------------|--------------------|------------------------------------------------------------------
<code>[params]</code>      | <code>any</code>              | \u8DEF\u7531\u53C2\u6570\uFF0C<code>/:id</code> \u5219 <code>params.id</code>
<code>[queryString]</code> | <code>any</code>              | URL\u53C2\u6570\uFF0C<code>/users?pi=1&amp;ps=10</code> \u5219 <code>queryString.pi</code>\u3001<code>queryString.ps</code>
<code>[headers]</code>     | <code>any</code>              | Headers \u503C
<code>[body]</code>        | <code>any</code>              | \u8BF7\u6C42 body
<code>[original]</code>    | <code>HttpRequest&lt;any&gt;</code> | \u539F\u59CB <code>HttpRequest</code></p>
<h3 id="mockstatuserror"><a class="lake-link"><i data-anchor="mockstatuserror"></i></a>MockStatusError</h3><p>\u5F53\u4F60\u5E0C\u671B\u54CD\u5E94\u4E00\u4E2A <code>404</code> \u5F02\u5E38\u65F6\u3002</p>
<h2 id="\u4E00\u4E9B\u793A\u4F8B"><a class="lake-link"><i data-anchor="\u4E00\u4E9B\u793A\u4F8B"></i></a>\u4E00\u4E9B\u793A\u4F8B</h2><pre><code class="language-ts">import &#123; MockStatusError &#125; from &#39;&#64;delon/mock&#39;;

export const USERS = &#123;
  // \u652F\u6301\u503C\u4E3A Object \u548C Array
  &#39;GET /users&#39;: &#123; users: [1, 2], total: 2 &#125;,
  // GET \u53EF\u7701\u7565
  &#39;/users/1&#39;: &#123; users: [1, 2], total: 2 &#125;,
  // POST \u8BF7\u6C42
  &#39;POST /users/1&#39;: &#123; uid: 1 &#125;,
  // \u83B7\u53D6\u8BF7\u6C42\u53C2\u6570 queryString\u3001headers\u3001body
  &#39;/qs&#39;: (req: MockRequest) =&gt; req.queryString.pi,
  // \u8DEF\u7531\u53C2\u6570
  &#39;/users/:id&#39;: (req: MockRequest) =&gt; req.params, // /users/100, output: &#123; id: 100 &#125;
  // \u53D1\u9001 Status \u9519\u8BEF
  &#39;/404&#39;: () =&gt; &#123; throw new MockStatusError(404); &#125;,
  // \u4F7F\u7528 () \u8868\u793A\uFF1A\u6B63\u5219\u8868\u8FBE\u5F0F
  &#39;/data/(.*)&#39;: (req: MockRequest) =&gt; req,
  // \u652F\u6301 Observable
  &#39;/obs&#39;: () =&gt; of(1),
  // \u652F\u6301 Promise
  &#39;/promise&#39;: async () =&gt; &#123;
    await delay(10);
    return 1;
  &#125;
&#125;;
</code></pre>
<h2 id="\u5B58\u50A8\u89C4\u5219"><a class="lake-link"><i data-anchor="\u5B58\u50A8\u89C4\u5219"></i></a>\u5B58\u50A8\u89C4\u5219</h2><p>\u4E00\u822C\u6765\u8BF4 Mock \u90FD\u662F\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u9700\u8981\uFF0C\u56E0\u6B64\u5EFA\u8BAE\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A <code>_mock</code> \u76EE\u5F55\uFF0C\u5E76\u521B\u5EFA\u4E00\u4E2A <code>index.ts</code> \u6587\u4EF6\u7528\u4E8E\u5BFC\u51FA\u6240\u6709\u6570\u636E\u89C4\u5219\uFF0C\u53C2\u8003 <a href="https://github.com/ng-alain/ng-alain/tree/master/_mock" target="_blank" rel="noopener">ng-alain/_mock</a>\u3002</p>
`,api:"",toc:[{id:"\u5199\u5728\u524D\u9762",title:"\u5199\u5728\u524D\u9762"},{id:"key_\u8BF7\u6C42\u57DF\u58F0\u660E",title:"Key \u8BF7\u6C42\u57DF\u58F0\u660E"},{id:"value_\u54CD\u5E94\u5185\u5BB9",title:"Value \u54CD\u5E94\u5185\u5BB9",children:[{id:"mockrequest",title:"MockRequest"},{id:"mockstatuserror",title:"MockStatusError"}]},{id:"\u4E00\u4E9B\u793A\u4F8B",title:"\u4E00\u4E9B\u793A\u4F8B"},{id:"\u5B58\u50A8\u89C4\u5219",title:"\u5B58\u50A8\u89C4\u5219"}],raw:`---
order: 2
title: \u89C4\u5219\u6570\u636E
type: Documents
---

## \u5199\u5728\u524D\u9762

Mock \u89C4\u5219\u6570\u636E\u662F\u4E00\u4E2A \`Object\` \u5BF9\u8C61\uFF0CKey \u4E3A\u8BF7\u6C42\u57DF\u58F0\u660E\uFF0CValue \u4E3A\u54CD\u5E94\u5185\u5BB9\uFF0C\u4F8B\u5982\uFF1A

\`\`\`ts
export const USERS = {
  'GET /users': { users: [1, 2], total: 2 },
}
\`\`\`

\u8868\u793A\u5F53\u901A\u8FC7 \`HttpClient.get('/users')\` \u8BBF\u95EE\u65F6\uFF0C\u4F1A\u76F4\u63A5\u8FD4\u56DE \`{ users: [1, 2], total: 2 }\`\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u53D1\u9001\u4EFB\u4F55 HTTP \u8BF7\u6C42\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 \`Network\` \u9762\u677F\u6765\u786E\u8BA4\u3002

## Key \u8BF7\u6C42\u57DF\u58F0\u660E

\u4F7F\u7528 \`' '\` \u7A7A\u683C\u6765\u533A\u9694\u8BF7\u6C42\u65B9\u6CD5\u548CURL\uFF0C\u8BF7\u6C42\u65B9\u6CD5\u53EF\u5FFD\u7565\uFF0C\u9ED8\u8BA4\u4E3A \`GET\`\uFF1BURL \u652F\u6301\u8DEF\u7531\u53C2\u6570\u548C\u6B63\u5219\u8868\u8FBE\u5F0F\u3002\u4E00\u4E9B\u6709\u6548\u7684 Key\uFF1A

\`\`\`ts
export const USERS = {
  'GET /users': null,
  // GET \u53EF\u7701\u7565
  '/users/1': null,
  // POST \u8BF7\u6C42
  'POST /users/1': null,
  // \u8DEF\u7531\u53C2\u6570
  '/users/:id': null,
  // \u6B63\u5219\u8868\u8FBE\u5F0F\u9700\u8981\u7528 \`()\` \u5305\u88F9
  '/data/(.*)': null
};
\`\`\`

## Value \u54CD\u5E94\u5185\u5BB9

\u54CD\u5E94\u5185\u5BB9\u652F\u6301\u4E09\u79CD\u7C7B\u578B\uFF1A\`Object\`\u3001\`Array\`\u3001\`(req: MockRequest) => any | Observable<any> | Promise<any>\`\u3002

\`\`\`ts
import { MockStatusError } from '@delon/mock';

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
};
\`\`\`

### MockRequest

\u540D\u79F0        | \u7C7B\u578B               | \u63CF\u8FF0
------------|--------------------|------------------------------------------------------------------
\`[params]\`      | \`any\`              | \u8DEF\u7531\u53C2\u6570\uFF0C\`/:id\` \u5219 \`params.id\`
\`[queryString]\` | \`any\`              | URL\u53C2\u6570\uFF0C\`/users?pi=1&ps=10\` \u5219 \`queryString.pi\`\u3001\`queryString.ps\`
\`[headers]\`     | \`any\`              | Headers \u503C
\`[body]\`        | \`any\`              | \u8BF7\u6C42 body
\`[original]\`    | \`HttpRequest<any>\` | \u539F\u59CB \`HttpRequest\`

### MockStatusError

\u5F53\u4F60\u5E0C\u671B\u54CD\u5E94\u4E00\u4E2A \`404\` \u5F02\u5E38\u65F6\u3002

## \u4E00\u4E9B\u793A\u4F8B

\`\`\`ts
import { MockStatusError } from '@delon/mock';

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
};
\`\`\`

## \u5B58\u50A8\u89C4\u5219

\u4E00\u822C\u6765\u8BF4 Mock \u90FD\u662F\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u9700\u8981\uFF0C\u56E0\u6B64\u5EFA\u8BAE\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A \`_mock\` \u76EE\u5F55\uFF0C\u5E76\u521B\u5EFA\u4E00\u4E2A \`index.ts\` \u6587\u4EF6\u7528\u4E8E\u5BFC\u51FA\u6240\u6709\u6570\u636E\u89C4\u5219\uFF0C\u53C2\u8003 [ng-alain/_mock](https://github.com/ng-alain/ng-alain/tree/master/_mock)\u3002`}}};codes=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=o({type:n,selectors:[["mock-rule"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&a(0,"app-docs",0),e&2&&r("codes",t.codes)("item",t.item)},dependencies:[s],encapsulation:2})};var q=[{path:"",component:l,children:[{path:"getting-started",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"getting-started/:lang",component:d},{path:"rule",redirectTo:"rule/zh",pathMatch:"full"},{path:"rule/:lang",component:c}]}];export{q as routes};
