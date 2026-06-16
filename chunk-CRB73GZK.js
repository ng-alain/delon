import{a as r}from"./chunk-PJYRP6KM.js";import{a as f}from"./chunk-C3MNSEWK.js";import"./chunk-XU2NL7K2.js";import"./chunk-J335YUGO.js";import"./chunk-62ZNMC2L.js";import"./chunk-KQR6CVZA.js";import"./chunk-7O6624BH.js";import{Wa as o,sb as a,vb as i}from"./chunk-DBBCITIJ.js";var l=class t{item={name:"get",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:10,title:"Get Token",description:"Token's acquisition is divided into two categories, one is its own user authentication center, and the other is social login (essentially, it needs to...",group:"Documents",path:"packages/auth/docs/get.en-US.md",url:"/auth/get/en"},text:`<p>Token&#39;s acquisition is divided into two categories, one is its own user authentication center, and the other is social login (essentially, it needs to go to its own user authentication center).</p>
<h2 id="user_authentication_center"><a class="lake-link"><i data-anchor="user_authentication_center"></i></a>User authentication center</h2><p>Generally speaking, the backend will provide a URL authentication address. We can send the user name and password entered by the user to the user authentication center just like a normal HTTP request. Finally, we will return a user information containing the Token. Therefore, you only need to use this <a href="/auth/set">Token Information Store</a>.</p>
<h2 id="social_login"><a class="lake-link"><i data-anchor="social_login"></i></a>Social login</h2><p>A complete social login takes about two steps:</p>
<ul>
<li>Open a third-party authorization box</li>
<li>Get the authentication information after the callback and <a href="/auth/set">Token Information Store</a></li>
</ul>
<h3 id="turn_on"><a class="lake-link"><i data-anchor="turn_on"></i></a>Turn on</h3><p><code>SocialService</code> provides a <code>open()</code> method to open a login box. By default it is not registered in any module, because <code>&#64;delon/auth</code> thinks that such a service is usually only generated during the login process, so there is no need to inject it globally; only need to use the <code>SocialService</code> component Inject it, of course you have to be willing to inject it in the root module.</p>
<pre><code class="language-ts">&#64;Component(&#123;
  providers: [ SocialService ]
&#125;)
export class ProUserLoginComponent &#123;
  constructor(private socialService: SocialService) &#123;&#125;
&#125;
</code></pre>
<p>Finally, use the <code>type</code> attribute to specify what form to open an authorization box:</p>
<pre><code class="language-ts">this.socialService.login(\`//github.com/login/oauth/authorize?xxxxxx\`, &#39;/&#39;, &#123; type: &#39;href&#39; &#125;);
// Or use window.open to open the authorization window and subscribe to the results
this.socialService.login(\`//github.com/login/oauth/authorize?xxxxxx\`, &#39;/&#39;, &#123;
  type: &#39;window&#39;
&#125;).subscribe(res =&gt; &#123;

&#125;);
</code></pre>
<h3 id="callback"><a class="lake-link"><i data-anchor="callback"></i></a>Callback</h3><p>The callback page refers to the authentication information that is carried after the authorization is successful. In the past, you may write the authentication information directly to the cookie on the backend, and it will automatically write to the browser after the request ends. For the single page such as Angular, especially the front and rear ends. This approach becomes unachievable when deployed separately.</p>
<p>So <code>&#64;delon/auth</code> is to take the information from the callback page URL address as the source of the acquisition, of course it will be limited by the URL itself (eg length); but I want to be a long enough Token value, you can get Token, then get user information.</p>
<p>You need to create a page for the callback, and the only thing the page has to do is call the <code>callback()</code> method on <code>ngOnInit</code> (for example: <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/routes/callback/callback.component.ts#L24" target="_blank" rel="noopener">callback.component.ts</a>):</p>
<pre><code class="language-ts">// 1, default based on the current URL address
this.socialService.callback();
// 2, without \`&#123; useHash: true &#125;\` routing
this.socialService.callback(\`/callback?token=40SOJV-L8oOwwUIs&amp;name=cipchk&amp;uid=1\`);
// 3, with \`&#123; useHash: true &#125;\` route
this.socialService.callback(\`/?token=40SOJV-L8oOwwUIs&amp;name=cipchk&amp;uid=1#/callback\`);
// 4, specify the \`ITokenModel\` object
this.socialService.callback(&lt;ITokenModel&gt;&#123;
  token: &#39;123456789&#39;,
  name: &#39;cipchk&#39;,
  id: 10000,
  time: +new Date
&#125;);
</code></pre>
<p><code>callback()</code> will automatically convert the URL to the effect of <code>ITokenModel</code>.</p>
<blockquote>
<p>Note: The route for <code>&#123; useHash: true &#125;</code> does not support callbacks in many third-party authorization boxes. If it is your own account system, you can still use the URL form in the third example.</p>
</blockquote>
`,api:"",toc:[{id:"user_authentication_center",title:"User authentication center"},{id:"social_login",title:"Social login",children:[{id:"turn_on",title:"Turn on"},{id:"callback",title:"Callback"}]}],raw:`---
order: 10
title: 
  en-US: Get Token
  zh-CN: \u83B7\u53D6Token
type: Documents
---

Token's acquisition is divided into two categories, one is its own user authentication center, and the other is social login (essentially, it needs to go to its own user authentication center).

## User authentication center

Generally speaking, the backend will provide a URL authentication address. We can send the user name and password entered by the user to the user authentication center just like a normal HTTP request. Finally, we will return a user information containing the Token. Therefore, you only need to use this [Token Information Store](/auth/set).

## Social login

A complete social login takes about two steps:

- Open a third-party authorization box
- Get the authentication information after the callback and [Token Information Store](/auth/set)


### Turn on

\`SocialService\` provides a \`open()\` method to open a login box. By default it is not registered in any module, because \`@delon/auth\` thinks that such a service is usually only generated during the login process, so there is no need to inject it globally; only need to use the \`SocialService\` component Inject it, of course you have to be willing to inject it in the root module.


\`\`\`ts
@Component({
  providers: [ SocialService ]
})
export class ProUserLoginComponent {
  constructor(private socialService: SocialService) {}
}
\`\`\`

Finally, use the \`type\` attribute to specify what form to open an authorization box:

\`\`\`ts
this.socialService.login(\`//github.com/login/oauth/authorize?xxxxxx\`, '/', { type: 'href' });
// Or use window.open to open the authorization window and subscribe to the results
this.socialService.login(\`//github.com/login/oauth/authorize?xxxxxx\`, '/', {
  type: 'window'
}).subscribe(res => {

});
\`\`\`

### Callback

The callback page refers to the authentication information that is carried after the authorization is successful. In the past, you may write the authentication information directly to the cookie on the backend, and it will automatically write to the browser after the request ends. For the single page such as Angular, especially the front and rear ends. This approach becomes unachievable when deployed separately.

So \`@delon/auth\` is to take the information from the callback page URL address as the source of the acquisition, of course it will be limited by the URL itself (eg length); but I want to be a long enough Token value, you can get Token, then get user information.

You need to create a page for the callback, and the only thing the page has to do is call the \`callback()\` method on \`ngOnInit\` (for example: [callback.component.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/routes/callback/callback.component.ts#L24)):

\`\`\`ts
// 1, default based on the current URL address
this.socialService.callback();
// 2, without \`{ useHash: true }\` routing
this.socialService.callback(\`/callback?token=40SOJV-L8oOwwUIs&name=cipchk&uid=1\`);
// 3, with \`{ useHash: true }\` route
this.socialService.callback(\`/?token=40SOJV-L8oOwwUIs&name=cipchk&uid=1#/callback\`);
// 4, specify the \`ITokenModel\` object
this.socialService.callback(<ITokenModel>{
  token: '123456789',
  name: 'cipchk',
  id: 10000,
  time: +new Date
});
\`\`\`

\`callback()\` will automatically convert the URL to the effect of \`ITokenModel\`.

> Note: The route for \`{ useHash: true }\` does not support callbacks in many third-party authorization boxes. If it is your own account system, you can still use the URL form in the third example.`},"zh-CN":{meta:{order:10,title:"\u83B7\u53D6Token",description:"Token \u7684\u83B7\u53D6\u5206\u4E3A\u4E24\u5927\u7C7B\uFF0C\u4E00\u662F\u81EA\u5DF1\u7684\u7528\u6237\u8BA4\u8BC1\u4E2D\u5FC3\uFF0C\u4E8C\u662F\u793E\u4F1A\u5316\u767B\u5F55\uFF08\u672C\u8D28\u4E0A\u8FD8\u662F\u9700\u8981\u8D70\u81EA\u5DF1\u7684\u7528\u6237\u8BA4\u8BC1\u4E2D\u5FC3\uFF09\u3002\u4E00\u822C\u6765\u8BF4\u540E\u7AEF\u4F1A\u63D0\u4F9B\u4E00\u4E2AURL\u8BA4\u8BC1\u5730\u5740\uFF0C\u6211\u4EEC\u53EF\u4EE5\u50CF\u5E73\u5E38\u8BBF\u95EE\u4E00\u4E2A\u666E\u901A HTTP \u8BF7\u6C42\u4E00\u6837\uFF0C\u5C06\u7528\u6237\u8F93\u5165\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\u7B49\u4FE1\u606F\u53D1\u9001\u7ED9\u7528\u6237\u8BA4\u8BC1\u4E2D\u5FC3\uFF0C\u6700\u540E\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u7528\u6237\u4FE1\u606F\u5305\u542B Token\u3002\u56E0\u6B64\uFF0C\u5BF9\u4E8E\u53EA\u9700\u8981...",group:"Documents",path:"packages/auth/docs/get.zh-CN.md",url:"/auth/get/zh"},text:`<p>Token \u7684\u83B7\u53D6\u5206\u4E3A\u4E24\u5927\u7C7B\uFF0C\u4E00\u662F\u81EA\u5DF1\u7684\u7528\u6237\u8BA4\u8BC1\u4E2D\u5FC3\uFF0C\u4E8C\u662F\u793E\u4F1A\u5316\u767B\u5F55\uFF08\u672C\u8D28\u4E0A\u8FD8\u662F\u9700\u8981\u8D70\u81EA\u5DF1\u7684\u7528\u6237\u8BA4\u8BC1\u4E2D\u5FC3\uFF09\u3002</p>
<h2 id="\u7528\u6237\u8BA4\u8BC1\u4E2D\u5FC3"><a class="lake-link"><i data-anchor="\u7528\u6237\u8BA4\u8BC1\u4E2D\u5FC3"></i></a>\u7528\u6237\u8BA4\u8BC1\u4E2D\u5FC3</h2><p>\u4E00\u822C\u6765\u8BF4\u540E\u7AEF\u4F1A\u63D0\u4F9B\u4E00\u4E2AURL\u8BA4\u8BC1\u5730\u5740\uFF0C\u6211\u4EEC\u53EF\u4EE5\u50CF\u5E73\u5E38\u8BBF\u95EE\u4E00\u4E2A\u666E\u901A HTTP \u8BF7\u6C42\u4E00\u6837\uFF0C\u5C06\u7528\u6237\u8F93\u5165\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\u7B49\u4FE1\u606F\u53D1\u9001\u7ED9\u7528\u6237\u8BA4\u8BC1\u4E2D\u5FC3\uFF0C\u6700\u540E\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u7528\u6237\u4FE1\u606F\u5305\u542B Token\u3002\u56E0\u6B64\uFF0C\u5BF9\u4E8E\u53EA\u9700\u8981\u5C06\u8FD9\u6B64<a href="/auth/set">Token\u4FE1\u606F\u5B58\u50A8</a>\u8D77\u6765\u5373\u53EF\u3002</p>
<h2 id="\u793E\u4F1A\u5316\u767B\u5F55"><a class="lake-link"><i data-anchor="\u793E\u4F1A\u5316\u767B\u5F55"></i></a>\u793E\u4F1A\u5316\u767B\u5F55</h2><p>\u4E00\u4E2A\u5B8C\u6574\u7684\u793E\u4F1A\u5316\u767B\u5F55\u5927\u6982\u9700\u8981\u4E24\u4E2A\u6B65\u9AA4\uFF1A</p>
<ul>
<li>\u6253\u5F00\u7B2C\u4E09\u65B9\u6388\u6743\u6846</li>
<li>\u56DE\u8C03\u540E\u83B7\u53D6\u8BA4\u8BC1\u4FE1\u606F\u5E76\u5BF9<a href="/auth/set">Token\u4FE1\u606F\u5B58\u50A8</a></li>
</ul>
<h3 id="\u6253\u5F00"><a class="lake-link"><i data-anchor="\u6253\u5F00"></i></a>\u6253\u5F00</h3><p><code>SocialService</code> \u63D0\u4F9B\u4E86 <code>open()</code> \u65B9\u6CD5\uFF0C\u7528\u4E8E\u6253\u5F00\u4E00\u4E2A\u767B\u5F55\u6846\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5B83\u672C\u8EAB\u5E76\u4E0D\u5728\u6CE8\u518C\u5230\u4EFB\u4F55\u6A21\u5757\u5F53\u4E2D\uFF0C\u56E0\u4E3A <code>&#64;delon/auth</code> \u8BA4\u4E3A\u9700\u8981\u8FD9\u7C7B\u670D\u52A1\u901A\u5E38\u53EA\u4F1A\u5728\u767B\u5F55\u8FC7\u7A0B\u4E2D\u4EA7\u751F\uFF0C\u56E0\u6B64\u6CA1\u6709\u5FC5\u8981\u5728\u5168\u5C40\u6CE8\u5165\uFF1B\u53EA\u9700\u8981\u5728\u4F7F\u7528 <code>SocialService</code> \u5BF9\u5E94\u7EC4\u4EF6\u4E2D\u6CE8\u5165\u5373\u53EF\uFF0C\u5F53\u7136\u4F60\u8981\u613F\u610F\u4E5F\u53EF\u4EE5\u5728\u6839\u6A21\u5757\u4E2D\u6CE8\u5165\u3002</p>
<pre><code class="language-ts">&#64;Component(&#123;
  providers: [ SocialService ]
&#125;)
export class ProUserLoginComponent &#123;
  constructor(private socialService: SocialService) &#123;&#125;
&#125;
</code></pre>
<p>\u6700\u540E\uFF0C\u5229\u7528 <code>type</code> \u5C5E\u6027\u6307\u5B9A\u4EE5\u91C7\u7528\u4EC0\u4E48\u5F62\u5F0F\u6253\u5F00\u4E00\u4E2A\u6388\u6743\u6846\uFF1A</p>
<pre><code class="language-ts">this.socialService.login(\`//github.com/login/oauth/authorize?xxxxxx\`, &#39;/&#39;, &#123; type: &#39;href&#39; &#125;);
// \u6216\u4F7F\u7528 window.open \u6253\u5F00\u6388\u6743\u6846\u5E76\u8BA2\u9605\u7ED3\u679C
this.socialService.login(\`//github.com/login/oauth/authorize?xxxxxx\`, &#39;/&#39;, &#123;
  type: &#39;window&#39;
&#125;).subscribe(res =&gt; &#123;

&#125;);
</code></pre>
<h3 id="\u56DE\u8C03"><a class="lake-link"><i data-anchor="\u56DE\u8C03"></i></a>\u56DE\u8C03</h3><p>\u56DE\u8C03\u9875\u9762\u662F\u6307\u6388\u6743\u6210\u529F\u540E\u643A\u5E26\u7684\u8BA4\u8BC1\u4FE1\u606F\uFF1B\u4EE5\u5F80\u4F60\u53EF\u80FD\u76F4\u63A5\u5728\u540E\u7AEF\u5C06\u8BA4\u8BC1\u4FE1\u606F\u5199\u5165 Cookie \u4F1A\u81EA\u52A8\u5728\u8BF7\u6C42\u7ED3\u675F\u540E\u5199\u5165\u6D4F\u89C8\u5668\uFF0C\u800C\u5BF9\u4E8E Angular \u8FD9\u7C7B\u5355\u9875\u800C\u8A00\uFF0C\u7279\u522B\u662F\u524D\u540E\u7AEF\u5206\u79BB\u90E8\u7F72\u65F6\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u53D8\u6210\u65E0\u6CD5\u5B9E\u73B0\u3002</p>
<p>\u56E0\u6B64 <code>&#64;delon/auth</code> \u662F\u4ECE\u56DE\u8C03\u9875 URL \u5730\u5740\u4E0A\u643A\u5E26\u4FE1\u606F\u4F5C\u4E3A\u83B7\u53D6\u6E90\uFF0C\u5F53\u7136\u5B83\u4F1A\u53D7 URL \u672C\u8EAB\u53D7\u9650\uFF08\u4F8B\u5982\uFF1A\u957F\u5EA6\uFF09\uFF1B\u4F46\u6211\u60F3\u5BF9\u4E00\u4E2A Token \u503C\u662F\u8DB3\u591F\u957F\u7684\uFF0C\u4F60\u53EF\u4EE5\u83B7\u53D6\u5230 Token\uFF0C\u518D\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u3002</p>
<p>\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u7528\u4E8E\u56DE\u8C03\u7684\u9875\u9762\uFF0C\u800C\u9875\u9762\u552F\u4E00\u8981\u505A\u7684\u5C31\u662F\u5728 <code>ngOnInit</code> \u65F6\u8C03\u7528 <code>callback()</code> \u65B9\u6CD5\uFF08\u4F8B\u5982\uFF1A<a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/routes/callback/callback.component.ts#L24" target="_blank" rel="noopener">callback.component.ts</a>\uFF09\uFF1A</p>
<pre><code class="language-ts">// 1\u3001\u9ED8\u8BA4\u6839\u636E\u5F53\u524DURL\u5730\u5740
this.socialService.callback();
// 2\u3001\u975E \`&#123; useHash: true &#125;\` \u8DEF\u7531
this.socialService.callback(\`/callback?token=40SOJV-L8oOwwUIs&amp;name=cipchk&amp;uid=1\`);
// 3\u3001\u5E26\u6709 \`&#123; useHash: true &#125;\` \u8DEF\u7531
this.socialService.callback(\`/?token=40SOJV-L8oOwwUIs&amp;name=cipchk&amp;uid=1#/callback\`);
// 4\u3001\u6307\u5B9A \`ITokenModel\` \u5BF9\u8C61
this.socialService.callback(&lt;ITokenModel&gt;&#123;
  token: &#39;123456789&#39;,
  name: &#39;cipchk&#39;,
  id: 10000,
  time: +new Date
&#125;);
</code></pre>
<p><code>callback()</code> \u4F1A\u628AURL\u81EA\u52A8\u8F6C\u6362\u6210\u6548\u7684 <code>ITokenModel</code>\u3002</p>
<blockquote>
<p>\u6CE8\uFF1A\u5BF9\u4E8E <code>&#123; useHash: true &#125;</code> \u7684\u8DEF\u7531\u5728\u5F88\u591A\u7B2C\u4E09\u65B9\u6388\u6743\u6846\u662F\u4E0D\u652F\u6301\u56DE\u8C03\uFF0C\u82E5\u662F\u81EA\u5DF1\u7684\u8D26\u53F7\u4F53\u7CFB\uFF0C\u4F60\u4F9D\u7136\u53EF\u4EE5\u4F7F\u7528\u7B2C3\u79CD\u793A\u4F8B\u4E2D\u7684URL\u5F62\u5F0F\u3002</p>
</blockquote>
`,api:"",toc:[{id:"\u7528\u6237\u8BA4\u8BC1\u4E2D\u5FC3",title:"\u7528\u6237\u8BA4\u8BC1\u4E2D\u5FC3"},{id:"\u793E\u4F1A\u5316\u767B\u5F55",title:"\u793E\u4F1A\u5316\u767B\u5F55",children:[{id:"\u6253\u5F00",title:"\u6253\u5F00"},{id:"\u56DE\u8C03",title:"\u56DE\u8C03"}]}],raw:`---
order: 10
title: 
  en-US: Get Token
  zh-CN: \u83B7\u53D6Token
type: Documents
---

Token \u7684\u83B7\u53D6\u5206\u4E3A\u4E24\u5927\u7C7B\uFF0C\u4E00\u662F\u81EA\u5DF1\u7684\u7528\u6237\u8BA4\u8BC1\u4E2D\u5FC3\uFF0C\u4E8C\u662F\u793E\u4F1A\u5316\u767B\u5F55\uFF08\u672C\u8D28\u4E0A\u8FD8\u662F\u9700\u8981\u8D70\u81EA\u5DF1\u7684\u7528\u6237\u8BA4\u8BC1\u4E2D\u5FC3\uFF09\u3002

## \u7528\u6237\u8BA4\u8BC1\u4E2D\u5FC3

\u4E00\u822C\u6765\u8BF4\u540E\u7AEF\u4F1A\u63D0\u4F9B\u4E00\u4E2AURL\u8BA4\u8BC1\u5730\u5740\uFF0C\u6211\u4EEC\u53EF\u4EE5\u50CF\u5E73\u5E38\u8BBF\u95EE\u4E00\u4E2A\u666E\u901A HTTP \u8BF7\u6C42\u4E00\u6837\uFF0C\u5C06\u7528\u6237\u8F93\u5165\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\u7B49\u4FE1\u606F\u53D1\u9001\u7ED9\u7528\u6237\u8BA4\u8BC1\u4E2D\u5FC3\uFF0C\u6700\u540E\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u7528\u6237\u4FE1\u606F\u5305\u542B Token\u3002\u56E0\u6B64\uFF0C\u5BF9\u4E8E\u53EA\u9700\u8981\u5C06\u8FD9\u6B64[Token\u4FE1\u606F\u5B58\u50A8](/auth/set)\u8D77\u6765\u5373\u53EF\u3002

## \u793E\u4F1A\u5316\u767B\u5F55

\u4E00\u4E2A\u5B8C\u6574\u7684\u793E\u4F1A\u5316\u767B\u5F55\u5927\u6982\u9700\u8981\u4E24\u4E2A\u6B65\u9AA4\uFF1A

- \u6253\u5F00\u7B2C\u4E09\u65B9\u6388\u6743\u6846
- \u56DE\u8C03\u540E\u83B7\u53D6\u8BA4\u8BC1\u4FE1\u606F\u5E76\u5BF9[Token\u4FE1\u606F\u5B58\u50A8](/auth/set)

### \u6253\u5F00

\`SocialService\` \u63D0\u4F9B\u4E86 \`open()\` \u65B9\u6CD5\uFF0C\u7528\u4E8E\u6253\u5F00\u4E00\u4E2A\u767B\u5F55\u6846\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5B83\u672C\u8EAB\u5E76\u4E0D\u5728\u6CE8\u518C\u5230\u4EFB\u4F55\u6A21\u5757\u5F53\u4E2D\uFF0C\u56E0\u4E3A \`@delon/auth\` \u8BA4\u4E3A\u9700\u8981\u8FD9\u7C7B\u670D\u52A1\u901A\u5E38\u53EA\u4F1A\u5728\u767B\u5F55\u8FC7\u7A0B\u4E2D\u4EA7\u751F\uFF0C\u56E0\u6B64\u6CA1\u6709\u5FC5\u8981\u5728\u5168\u5C40\u6CE8\u5165\uFF1B\u53EA\u9700\u8981\u5728\u4F7F\u7528 \`SocialService\` \u5BF9\u5E94\u7EC4\u4EF6\u4E2D\u6CE8\u5165\u5373\u53EF\uFF0C\u5F53\u7136\u4F60\u8981\u613F\u610F\u4E5F\u53EF\u4EE5\u5728\u6839\u6A21\u5757\u4E2D\u6CE8\u5165\u3002

\`\`\`ts
@Component({
  providers: [ SocialService ]
})
export class ProUserLoginComponent {
  constructor(private socialService: SocialService) {}
}
\`\`\`

\u6700\u540E\uFF0C\u5229\u7528 \`type\` \u5C5E\u6027\u6307\u5B9A\u4EE5\u91C7\u7528\u4EC0\u4E48\u5F62\u5F0F\u6253\u5F00\u4E00\u4E2A\u6388\u6743\u6846\uFF1A

\`\`\`ts
this.socialService.login(\`//github.com/login/oauth/authorize?xxxxxx\`, '/', { type: 'href' });
// \u6216\u4F7F\u7528 window.open \u6253\u5F00\u6388\u6743\u6846\u5E76\u8BA2\u9605\u7ED3\u679C
this.socialService.login(\`//github.com/login/oauth/authorize?xxxxxx\`, '/', {
  type: 'window'
}).subscribe(res => {

});
\`\`\`

### \u56DE\u8C03

\u56DE\u8C03\u9875\u9762\u662F\u6307\u6388\u6743\u6210\u529F\u540E\u643A\u5E26\u7684\u8BA4\u8BC1\u4FE1\u606F\uFF1B\u4EE5\u5F80\u4F60\u53EF\u80FD\u76F4\u63A5\u5728\u540E\u7AEF\u5C06\u8BA4\u8BC1\u4FE1\u606F\u5199\u5165 Cookie \u4F1A\u81EA\u52A8\u5728\u8BF7\u6C42\u7ED3\u675F\u540E\u5199\u5165\u6D4F\u89C8\u5668\uFF0C\u800C\u5BF9\u4E8E Angular \u8FD9\u7C7B\u5355\u9875\u800C\u8A00\uFF0C\u7279\u522B\u662F\u524D\u540E\u7AEF\u5206\u79BB\u90E8\u7F72\u65F6\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u53D8\u6210\u65E0\u6CD5\u5B9E\u73B0\u3002

\u56E0\u6B64 \`@delon/auth\` \u662F\u4ECE\u56DE\u8C03\u9875 URL \u5730\u5740\u4E0A\u643A\u5E26\u4FE1\u606F\u4F5C\u4E3A\u83B7\u53D6\u6E90\uFF0C\u5F53\u7136\u5B83\u4F1A\u53D7 URL \u672C\u8EAB\u53D7\u9650\uFF08\u4F8B\u5982\uFF1A\u957F\u5EA6\uFF09\uFF1B\u4F46\u6211\u60F3\u5BF9\u4E00\u4E2A Token \u503C\u662F\u8DB3\u591F\u957F\u7684\uFF0C\u4F60\u53EF\u4EE5\u83B7\u53D6\u5230 Token\uFF0C\u518D\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u3002

\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u7528\u4E8E\u56DE\u8C03\u7684\u9875\u9762\uFF0C\u800C\u9875\u9762\u552F\u4E00\u8981\u505A\u7684\u5C31\u662F\u5728 \`ngOnInit\` \u65F6\u8C03\u7528 \`callback()\` \u65B9\u6CD5\uFF08\u4F8B\u5982\uFF1A[callback.component.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/routes/callback/callback.component.ts#L24)\uFF09\uFF1A

\`\`\`ts
// 1\u3001\u9ED8\u8BA4\u6839\u636E\u5F53\u524DURL\u5730\u5740
this.socialService.callback();
// 2\u3001\u975E \`{ useHash: true }\` \u8DEF\u7531
this.socialService.callback(\`/callback?token=40SOJV-L8oOwwUIs&name=cipchk&uid=1\`);
// 3\u3001\u5E26\u6709 \`{ useHash: true }\` \u8DEF\u7531
this.socialService.callback(\`/?token=40SOJV-L8oOwwUIs&name=cipchk&uid=1#/callback\`);
// 4\u3001\u6307\u5B9A \`ITokenModel\` \u5BF9\u8C61
this.socialService.callback(<ITokenModel>{
  token: '123456789',
  name: 'cipchk',
  id: 10000,
  time: +new Date
});
\`\`\`

\`callback()\` \u4F1A\u628AURL\u81EA\u52A8\u8F6C\u6362\u6210\u6548\u7684 \`ITokenModel\`\u3002

> \u6CE8\uFF1A\u5BF9\u4E8E \`{ useHash: true }\` \u7684\u8DEF\u7531\u5728\u5F88\u591A\u7B2C\u4E09\u65B9\u6388\u6743\u6846\u662F\u4E0D\u652F\u6301\u56DE\u8C03\uFF0C\u82E5\u662F\u81EA\u5DF1\u7684\u8D26\u53F7\u4F53\u7CFB\uFF0C\u4F60\u4F9D\u7136\u53EF\u4EE5\u4F7F\u7528\u7B2C3\u79CD\u793A\u4F8B\u4E2D\u7684URL\u5F62\u5F0F\u3002`}}};codes=[];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["auth-get"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,n){e&1&&i(0,"app-docs",0),e&2&&a("codes",n.codes)("item",n.item)},dependencies:[r],encapsulation:2})};var h=class t{item={name:"getting-started",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:1,title:"Getting Started",description:"@delon/auth is further processing of the authentication process, with a focus on three issues:How to get the behavior of authentication information, s...",group:"Documents",path:"packages/auth/docs/getting-started.en-US.md",url:"/auth/getting-started/en"},text:`<h2 id="foreword"><a class="lake-link"><i data-anchor="foreword"></i></a>Foreword</h2><p>&#64;delon/auth is further processing of the authentication process, with a focus on three issues:</p>
<ul>
<li>How to get the behavior of authentication information, such as: account, social login (Github, Facebook, etc.)</li>
<li>How to access authentication information and monitor changes in authentication information</li>
<li>When to use authentication information, for example: JWT</li>
</ul>
<p>&#64;delon/auth does not care about the user interface, it only needs to convert the Token information to the <code>ITokenService</code> type when the login is successful. It will be stored in <code>localStorage</code> (by default). When you manipulate an HTTP request, it automatically adds Token information to <code>header</code> (or elsewhere).</p>
<p>So, &#64;delon/auth is not limited to ng-alain scaffolding, can be used with any Angular project.</p>
<blockquote>
<p>&#64;delon/auth just solution authentication process. You can use <a href="/acl">&#64;delon/acl</a> for permission control.</p>
</blockquote>
<h3 id="process"><a class="lake-link"><i data-anchor="process"></i></a>Process</h3><ul>
<li>Get Token</li>
<li>Store Token</li>
<li>Send Token to the backend using the HTTP interceptor</li>
</ul>
<h2 id="definition"><a class="lake-link"><i data-anchor="definition"></i></a>Definition</h2><h3 id="token"><a class="lake-link"><i data-anchor="token"></i></a>Token</h3><p>&#64;delon/auth thinks that the encrypted string that needs to be sent when requesting is called the Token value, whether it is JWT <code>Authorization</code> parameter or OAuth2 <code>access_token</code> value, which is also the value carried by each HTTP request. Therefore, the <code>ITokenModel</code> interface is used to represent authentication information and has only one <code>token</code> attribute.</p>
<blockquote>
<p>Note: The token value must be a string type.</p>
</blockquote>
<h3 id="authentication_style"><a class="lake-link"><i data-anchor="authentication_style"></i></a>Authentication Style</h3><p>There are currently two styles: Simple Web Token (using <code>SimpleTokenModel</code>) and Json Web Token (using <code>JWTTokenModel</code>) with parsing <code>payload</code> capabilities. The <code>ITokenModel</code> interface can be customized if you have special requirements.</p>
<h2 id="usage"><a class="lake-link"><i data-anchor="usage"></i></a>Usage</h2><p>Install <code>&#64;delon/auth</code>:</p>
<pre><code class="language-bash">npm i -S &#64;delon/auth
</code></pre>
<p>Configure the <code>provideAuth</code> environment in <code>app.config.ts</code>:</p>
<pre><code class="language-typescript">providers: [
  // Indicates using JWT style and using \`localStorage\` to store Token
  provideHttpClient(withInterceptors([...(environment.interceptorFns ?? []), authJWTInterceptor, defaultInterceptor])),
  provideAuth(withLocalStorage()),
]
</code></pre>
<h2 id="alainauthconfig"><a class="lake-link"><i data-anchor="alainauthconfig"></i></a>AlainAuthConfig</h2><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
<th>Global Config</th>
</tr>
</thead>
<tbody><tr>
<td><code>[store_key]</code></td>
<td><code>string</code></td>
<td><code>_token</code></td>
<td><code>localStorage</code> storage KEY value</td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[token_invalid_redirect]</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td>Jump to login page if invalid, includs: invalid token, token expired (Only: JWT)</td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[token_exp_offset]</code></td>
<td><code>number</code></td>
<td><code>10</code></td>
<td>JWT token expiration time offset value (unit: second)</td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[token_send_key]</code></td>
<td><code>string</code></td>
<td>Token</td>
<td>Send token parameter name</td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[token_send_template]</code></td>
<td><code>string</code></td>
<td><code>$&#123;token&#125;</code></td>
<td>Send a token template with a <code>$&#123;property name&#125;</code> placeholder</td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[token_send_place]</code></td>
<td><code>header,body,url</code></td>
<td><code>header</code></td>
<td>Send token parameter position</td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[login_url]</code></td>
<td><code>string</code></td>
<td><code>/login</code></td>
<td>Login page routing address</td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[ignores]</code></td>
<td><code>RegExp[]</code></td>
<td><code>[/\\/assets\\//]</code></td>
<td>Ignore the list of URL addresses. In addition, you can also control whether to ignore through <a href="/auth/qa/en">ALLOW_ANONYMOUS</a>.</td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[refreshTime]</code></td>
<td><code>number</code></td>
<td><code>3000</code></td>
<td>Refresh time (unit: ms)</td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[refreshOffset]</code></td>
<td><code>number</code></td>
<td><code>6000</code></td>
<td>Offset value (unit: ms), it is recommended to set according to the multiple of <code>refreshTime</code></td>
<td>\u2705</td>
</tr>
</tbody></table>
<blockquote>
<p>You can override them via <a href="/docs/global-config">Global Configuration</a>.</p>
</blockquote>
<h2 id="faq"><a class="lake-link"><i data-anchor="faq"></i></a>FAQ</h2><h3 id="solve_the_token_pollution_problem_of_multiple_ng-alain_projects_in_the_same_domain"><a class="lake-link"><i data-anchor="solve_the_token_pollution_problem_of_multiple_ng-alain_projects_in_the_same_domain"></i></a>Solve the Token pollution problem of multiple NG-ALAIN projects in the same domain</h3><p>You can modify the <code>store_key</code> for distinction in each project through <a href="/docs/global-config">Global Configuration</a>.</p>
`,api:"",toc:[{id:"foreword",title:"Foreword",children:[{id:"process",title:"Process"}]},{id:"definition",title:"Definition",children:[{id:"token",title:"Token"},{id:"authentication_style",title:"Authentication Style"}]},{id:"usage",title:"Usage"},{id:"alainauthconfig",title:"AlainAuthConfig"},{id:"faq",title:"FAQ",children:[{id:"solve_the_token_pollution_problem_of_multiple_ng-alain_projects_in_the_same_domain",title:"Solve the Token pollution problem of multiple NG-ALAIN projects in the same domain"}]}],raw:"---\norder: 1\ntitle: Getting Started\ntype: Documents\n---\n\n## Foreword\n\n@delon/auth is further processing of the authentication process, with a focus on three issues:\n\n+ How to get the behavior of authentication information, such as: account, social login (Github, Facebook, etc.)\n+ How to access authentication information and monitor changes in authentication information\n+ When to use authentication information, for example: JWT\n\n@delon/auth does not care about the user interface, it only needs to convert the Token information to the `ITokenService` type when the login is successful. It will be stored in `localStorage` (by default). When you manipulate an HTTP request, it automatically adds Token information to `header` (or elsewhere).\n\nSo, @delon/auth is not limited to ng-alain scaffolding, can be used with any Angular project.\n\n> @delon/auth just solution authentication process. You can use [@delon/acl](/acl) for permission control.\n\n### Process\n\n- Get Token\n- Store Token\n- Send Token to the backend using the HTTP interceptor\n\n## Definition\n\n### Token\n\n@delon/auth thinks that the encrypted string that needs to be sent when requesting is called the Token value, whether it is JWT `Authorization` parameter or OAuth2 `access_token` value, which is also the value carried by each HTTP request. Therefore, the `ITokenModel` interface is used to represent authentication information and has only one `token` attribute.\n\n> Note: The token value must be a string type.\n\n### Authentication Style\n\nThere are currently two styles: Simple Web Token (using `SimpleTokenModel`) and Json Web Token (using `JWTTokenModel`) with parsing `payload` capabilities. The `ITokenModel` interface can be customized if you have special requirements.\n\n## Usage\n\nInstall `@delon/auth`:\n\n```bash\nnpm i -S @delon/auth\n```\n\nConfigure the `provideAuth` environment in `app.config.ts`:\n\n```typescript\nproviders: [\n  // Indicates using JWT style and using `localStorage` to store Token\n  provideHttpClient(withInterceptors([...(environment.interceptorFns ?? []), authJWTInterceptor, defaultInterceptor])),\n  provideAuth(withLocalStorage()),\n]\n```\n\n## AlainAuthConfig\n\n| Property | Description | Type | Default | Global Config |\n|----------|-------------|------|---------|---------------|\n| `[store_key]` | `string` | `_token` | `localStorage` storage KEY value | \u2705 |\n| `[token_invalid_redirect]` | `boolean` | `true` | Jump to login page if invalid, includs: invalid token, token expired (Only: JWT) | \u2705 |\n| `[token_exp_offset]` | `number` | `10` | JWT token expiration time offset value (unit: second) | \u2705 |\n| `[token_send_key]` | `string` | Token | Send token parameter name | \u2705 |\n| `[token_send_template]` | `string` | `${token}` | Send a token template with a `${property name}` placeholder | \u2705 |\n| `[token_send_place]` | `header,body,url` | `header` | Send token parameter position | \u2705 |\n| `[login_url]` | `string` | `/login` | Login page routing address | \u2705 |\n| `[ignores]` | `RegExp[]` | `[/\\/assets\\//]` | Ignore the list of URL addresses. In addition, you can also control whether to ignore through [ALLOW_ANONYMOUS](/auth/qa/en). | \u2705 |\n| `[refreshTime]` | `number` | `3000` | Refresh time (unit: ms) | \u2705 |\n| `[refreshOffset]` | `number` | `6000` | Offset value (unit: ms), it is recommended to set according to the multiple of `refreshTime` | \u2705 |\n\n> You can override them via [Global Configuration](/docs/global-config).\n\n## FAQ\n\n### Solve the Token pollution problem of multiple NG-ALAIN projects in the same domain\n\nYou can modify the `store_key` for distinction in each project through [Global Configuration](/docs/global-config)."},"zh-CN":{meta:{order:1,title:"\u5F00\u59CB\u4F7F\u7528",description:"@delon/auth \u662F\u5BF9\u8BA4\u8BC1\u8FC7\u7A0B\u8FDB\u4E00\u6B65\u5904\u7406\uFF0C\u901A\u5E38\u5176\u6838\u5FC3\u5728\u4E8E Access token \u7684\u83B7\u53D6\u3001\u4F7F\u7528\u73AF\u8282\uFF0C\u56E0\u6B64\u5C06\u96C6\u4E2D\u89E3\u51B3\u4EE5\u4E0B\u4E09\u4E2A\u95EE\u9898\uFF1A\u5982\u4F55\u83B7\u53D6\u8BA4\u8BC1\u4FE1\u606F\u884C\u4E3A\u65B9\u5F0F\uFF0C\u4F8B\u5982\uFF1A\u8D26\u5BC6\u3001\u793E\u4F1A\u5316\u767B\u5F55Github\u7B49\u5982\u4F55\u5B58\u53D6\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u76D1\u542C\u8BA4\u8BC1\u4FE1\u606F\u53D8\u5316\u4F55\u65F6\u4F7F\u7528\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u533A\u5206\u4E0D\u540C\u7684\u8BA4\u8BC1\u65B9\u5F0F\u7684\u4F7F\u7528\u89C4\u5219\uFF0C\u4F8B\u5982\uFF1AJWT@del...",group:"Documents",path:"packages/auth/docs/getting-started.zh-CN.md",url:"/auth/getting-started/zh"},text:`<h2 id="\u5199\u5728\u524D\u9762"><a class="lake-link"><i data-anchor="\u5199\u5728\u524D\u9762"></i></a>\u5199\u5728\u524D\u9762</h2><p>&#64;delon/auth \u662F\u5BF9\u8BA4\u8BC1\u8FC7\u7A0B\u8FDB\u4E00\u6B65\u5904\u7406\uFF0C\u901A\u5E38\u5176\u6838\u5FC3\u5728\u4E8E Access token \u7684\u83B7\u53D6\u3001\u4F7F\u7528\u73AF\u8282\uFF0C\u56E0\u6B64\u5C06\u96C6\u4E2D\u89E3\u51B3\u4EE5\u4E0B\u4E09\u4E2A\u95EE\u9898\uFF1A</p>
<ul>
<li>\u5982\u4F55\u83B7\u53D6\u8BA4\u8BC1\u4FE1\u606F\u884C\u4E3A\u65B9\u5F0F\uFF0C\u4F8B\u5982\uFF1A\u8D26\u5BC6\u3001\u793E\u4F1A\u5316\u767B\u5F55Github\u7B49</li>
<li>\u5982\u4F55\u5B58\u53D6\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u76D1\u542C\u8BA4\u8BC1\u4FE1\u606F\u53D8\u5316</li>
<li>\u4F55\u65F6\u4F7F\u7528\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u533A\u5206\u4E0D\u540C\u7684\u8BA4\u8BC1\u65B9\u5F0F\u7684\u4F7F\u7528\u89C4\u5219\uFF0C\u4F8B\u5982\uFF1AJWT</li>
</ul>
<p>&#64;delon/auth \u5E76\u4E0D\u4F1A\u5173\u5FC3\u7528\u6237\u754C\u9762\u662F\u600E\u4E48\u6837\uFF0C\u53EA\u9700\u8981\u5F53\u767B\u5F55\u6210\u529F\u540E\u5C06 Token \u4FE1\u606F\u8F6C\u5316\u4E3A <code>ITokenService</code> \u7C7B\u578B\uFF0C\u5B83\u4F1A\u5B58\u50A8\u5728 <code>localStorage</code> \u5F53\u4E2D\uFF08\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF09\u3002\u5F53\u4F60\u64CD\u4F5C HTTP \u8BF7\u6C42\u65F6\uFF0C\u5B83\u4F1A\u81EA\u52A8\u5728 <code>header</code> \uFF08\u6216\u5176\u4ED6\u5730\u65B9\uFF09 \u91CC\u52A0\u5165 Token \u4FE1\u606F\u3002</p>
<p>\u56E0\u6B64\uFF0C&#64;delon/auth \u4E0D\u9650\u4E8E ng-alain \u811A\u624B\u67B6\uFF0C\u4EFB\u4F55 Angular \u9879\u76EE\u90FD\u53EF\u4EE5\u4F7F\u7528\u5B83\u3002</p>
<blockquote>
<p>&#64;delon/auth \u53EA\u662F\u89E3\u51B3\u8BA4\u8BC1\u73AF\u8282\uFF0C\u6709\u5173\u4E8E\u6743\u9650\u63A7\u5236\u53EF\u4EE5\u4F7F\u7528 <a href="/acl">&#64;delon/acl</a>\u3002</p>
</blockquote>
<h3 id="\u6D41\u7A0B"><a class="lake-link"><i data-anchor="\u6D41\u7A0B"></i></a>\u6D41\u7A0B</h3><ul>
<li>\u83B7\u53D6 Token</li>
<li>\u5B58\u50A8 Token</li>
<li>\u5229\u7528HTTP\u62E6\u622A\u5668\uFF0C\u5C06 Token \u53D1\u9001\u7ED9\u540E\u7AEF</li>
</ul>
<h2 id="\u540D\u8BCD\u89E3\u91CA"><a class="lake-link"><i data-anchor="\u540D\u8BCD\u89E3\u91CA"></i></a>\u540D\u8BCD\u89E3\u91CA</h2><h3 id="token"><a class="lake-link"><i data-anchor="token"></i></a>Token</h3><p>&#64;delon/auth \u8BA4\u4E3A\u8BF7\u6C42\u65F6\u9700\u8981\u53D1\u9001\u7684\u52A0\u5BC6\u5B57\u7B26\u4E32\u79F0\u5B83\u4E3A Token \u503C\uFF0C\u4E0D\u7BA1\u662F\u91C7\u7528 JWT \u7684 <code>Authorization</code> \u53C2\u6570\uFF0C\u8FD8\u662F OAuth2 \u7684 <code>access_token</code>\uFF0C\u8FD9\u4E5F\u662F\u6BCF\u4E2A HTTP \u8BF7\u6C42\u65F6\u6240\u643A\u5E26\u7684\u503C\u3002 \u56E0\u6B64\uFF0C<code>ITokenModel</code> \u63A5\u53E3\u7528\u4E8E\u8868\u8FF0\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u4E14\u53EA\u6709\u4E00\u4E2A <code>token</code> \u5C5E\u6027\u3002</p>
<blockquote>
<p>\u6CE8\u610F\uFF1AToken \u503C\u52A1\u5FC5\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u503C\u3002</p>
</blockquote>
<h3 id="\u8BA4\u8BC1\u98CE\u683C"><a class="lake-link"><i data-anchor="\u8BA4\u8BC1\u98CE\u683C"></i></a>\u8BA4\u8BC1\u98CE\u683C</h3><p>\u76EE\u524D\u884D\u751F\u4E24\u79CD\u98CE\u683C\uFF1ASimple Web Token \uFF08\u4F7F\u7528 <code>SimpleTokenModel</code>\uFF09\u3001Json Web Token\uFF08\u4F7F\u7528 <code>JWTTokenModel</code>\uFF09\u5177\u6709\u89E3\u6790 <code>payload</code> \u80FD\u529B\u3002\u5982\u679C\u6709\u7279\u6B8A\u9700\u6C42\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5B9E\u73B0 <code>ITokenModel</code> \u63A5\u53E3\u3002</p>
<h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p>\u5B89\u88C5 <code>&#64;delon/auth</code> \u4F9D\u8D56\u5305\uFF1A</p>
<pre><code class="language-bash">npm i -S &#64;delon/auth
</code></pre>
<p>\u5728 <code>app.config.ts</code> \u4E2D\u914D\u7F6E <code>provideAuth</code> \u73AF\u5883\uFF1A</p>
<pre><code class="language-typescript">providers: [
  // \u8868\u793A\u4F7F\u7528JWT\u98CE\u683C\u5E76\u7528 \`localStorage\` \u5B58\u50A8 Token
  provideHttpClient(withInterceptors([...(environment.interceptorFns ?? []), authJWTInterceptor, defaultInterceptor])),
  provideAuth(withLocalStorage()),
]
</code></pre>
<h2 id="alainauthconfig"><a class="lake-link"><i data-anchor="alainauthconfig"></i></a>AlainAuthConfig</h2><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u5168\u5C40\u914D\u7F6E</th>
</tr>
</thead>
<tbody><tr>
<td><code>[store_key]</code></td>
<td><code>string</code></td>
<td><code>_token</code></td>
<td><code>localStorage</code> \u7684\u5B58\u50A8KEY\u503C</td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[token_invalid_redirect]</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td>\u65E0\u6548\u65F6\u8DF3\u8F6C\u81F3\u767B\u5F55\u9875\uFF0C\u5305\u62EC\uFF1A\u65E0\u6548token\u503C\u3001token\u5DF2\u8FC7\u671F\uFF08\u9650JWT\uFF09</td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[token_exp_offset]</code></td>
<td><code>number</code></td>
<td><code>10</code></td>
<td>JWT token\u8FC7\u671F\u65F6\u95F4\u504F\u79FB\u503C\uFF08\u5355\u4F4D\uFF1A\u79D2\uFF09</td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[token_send_key]</code></td>
<td><code>string</code></td>
<td>Token</td>
<td>\u53D1\u9001token\u53C2\u6570\u540D</td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[token_send_template]</code></td>
<td><code>string</code></td>
<td><code>$&#123;token&#125;</code></td>
<td>\u53D1\u9001token\u6A21\u677F\uFF0C\u4EE5 <code>$&#123;\u5C5E\u6027\u540D&#125;</code> \u8868\u793A\u5360\u4F4D\u7B26\uFF0C\u5C5E\u6027\u540D\u8981\u786E\u4FDD\u5B58\u5728\u5426\u5219\u4EE5\u7A7A\u5B57\u7B26\u4EE3\u66FF</td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[token_send_place]</code></td>
<td><code>header,body,url</code></td>
<td><code>header</code></td>
<td>\u53D1\u9001token\u53C2\u6570\u4F4D\u7F6E</td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[login_url]</code></td>
<td><code>string</code></td>
<td><code>/login</code></td>
<td>\u767B\u5F55\u9875\u8DEF\u7531\u5730\u5740</td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[ignores]</code></td>
<td><code>RegExp[]</code></td>
<td><code>[/\\/assets\\//]</code></td>
<td>\u5FFD\u7565 URL \u5730\u5740\u6E05\u5355\uFF0C\u9664\u6B64\u4E4B\u5916\u8FD8\u53EF\u4EE5\u901A\u8FC7 <a href="/auth/qa/zh">ALLOW_ANONYMOUS</a> \u8FDB\u884C\u63A7\u5236\u662F\u5426\u5FFD\u7565\u3002</td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[refreshTime]</code></td>
<td><code>number</code></td>
<td><code>3000</code></td>
<td>\u5237\u65B0\u65F6\u957F\uFF08\u5355\u4F4D\uFF1Ams\uFF09</td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[refreshOffset]</code></td>
<td><code>number</code></td>
<td><code>6000</code></td>
<td>\u504F\u79FB\u503C\uFF08\u5355\u4F4D\uFF1Ams\uFF09\uFF0C\u5EFA\u8BAE\u6839\u636E <code>refreshTime</code> \u500D\u6570\u6765\u8BBE\u7F6E</td>
<td>\u2705</td>
</tr>
</tbody></table>
<blockquote>
<p>\u53EF\u4EE5\u901A\u8FC7<a href="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\u8986\u76D6\u5B83\u4EEC\u3002</p>
</blockquote>
<h2 id="faq"><a class="lake-link"><i data-anchor="faq"></i></a>FAQ</h2><h3 id="\u89E3\u51B3\u540C\u57DF\u4E0B\u591A\u4E2Ang-alain\u9879\u76EEtoken\u6C61\u67D3\u95EE\u9898"><a class="lake-link"><i data-anchor="\u89E3\u51B3\u540C\u57DF\u4E0B\u591A\u4E2Ang-alain\u9879\u76EEtoken\u6C61\u67D3\u95EE\u9898"></i></a>\u89E3\u51B3\u540C\u57DF\u4E0B\u591A\u4E2ANG-ALAIN\u9879\u76EEToken\u6C61\u67D3\u95EE\u9898</h3><p>\u53EF\u4EE5\u5728\u6BCF\u4E2A\u9879\u76EE\u91CC\u901A\u8FC7<a href="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\u4FEE\u6539 <code>store_key</code> \u7528\u4E8E\u533A\u5206\u3002</p>
`,api:"",toc:[{id:"\u5199\u5728\u524D\u9762",title:"\u5199\u5728\u524D\u9762",children:[{id:"\u6D41\u7A0B",title:"\u6D41\u7A0B"}]},{id:"\u540D\u8BCD\u89E3\u91CA",title:"\u540D\u8BCD\u89E3\u91CA",children:[{id:"token",title:"Token"},{id:"\u8BA4\u8BC1\u98CE\u683C",title:"\u8BA4\u8BC1\u98CE\u683C"}]},{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528"},{id:"alainauthconfig",title:"AlainAuthConfig"},{id:"faq",title:"FAQ",children:[{id:"\u89E3\u51B3\u540C\u57DF\u4E0B\u591A\u4E2Ang-alain\u9879\u76EEtoken\u6C61\u67D3\u95EE\u9898",title:"\u89E3\u51B3\u540C\u57DF\u4E0B\u591A\u4E2ANG-ALAIN\u9879\u76EEToken\u6C61\u67D3\u95EE\u9898"}]}],raw:"---\norder: 1\ntitle: \u5F00\u59CB\u4F7F\u7528\ntype: Documents\n---\n\n## \u5199\u5728\u524D\u9762\n\n@delon/auth \u662F\u5BF9\u8BA4\u8BC1\u8FC7\u7A0B\u8FDB\u4E00\u6B65\u5904\u7406\uFF0C\u901A\u5E38\u5176\u6838\u5FC3\u5728\u4E8E Access token \u7684\u83B7\u53D6\u3001\u4F7F\u7528\u73AF\u8282\uFF0C\u56E0\u6B64\u5C06\u96C6\u4E2D\u89E3\u51B3\u4EE5\u4E0B\u4E09\u4E2A\u95EE\u9898\uFF1A\n\n+ \u5982\u4F55\u83B7\u53D6\u8BA4\u8BC1\u4FE1\u606F\u884C\u4E3A\u65B9\u5F0F\uFF0C\u4F8B\u5982\uFF1A\u8D26\u5BC6\u3001\u793E\u4F1A\u5316\u767B\u5F55Github\u7B49\n+ \u5982\u4F55\u5B58\u53D6\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u76D1\u542C\u8BA4\u8BC1\u4FE1\u606F\u53D8\u5316\n+ \u4F55\u65F6\u4F7F\u7528\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u533A\u5206\u4E0D\u540C\u7684\u8BA4\u8BC1\u65B9\u5F0F\u7684\u4F7F\u7528\u89C4\u5219\uFF0C\u4F8B\u5982\uFF1AJWT\n\n@delon/auth \u5E76\u4E0D\u4F1A\u5173\u5FC3\u7528\u6237\u754C\u9762\u662F\u600E\u4E48\u6837\uFF0C\u53EA\u9700\u8981\u5F53\u767B\u5F55\u6210\u529F\u540E\u5C06 Token \u4FE1\u606F\u8F6C\u5316\u4E3A `ITokenService` \u7C7B\u578B\uFF0C\u5B83\u4F1A\u5B58\u50A8\u5728 `localStorage` \u5F53\u4E2D\uFF08\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF09\u3002\u5F53\u4F60\u64CD\u4F5C HTTP \u8BF7\u6C42\u65F6\uFF0C\u5B83\u4F1A\u81EA\u52A8\u5728 `header` \uFF08\u6216\u5176\u4ED6\u5730\u65B9\uFF09 \u91CC\u52A0\u5165 Token \u4FE1\u606F\u3002\n\n\u56E0\u6B64\uFF0C@delon/auth \u4E0D\u9650\u4E8E ng-alain \u811A\u624B\u67B6\uFF0C\u4EFB\u4F55 Angular \u9879\u76EE\u90FD\u53EF\u4EE5\u4F7F\u7528\u5B83\u3002\n\n> @delon/auth \u53EA\u662F\u89E3\u51B3\u8BA4\u8BC1\u73AF\u8282\uFF0C\u6709\u5173\u4E8E\u6743\u9650\u63A7\u5236\u53EF\u4EE5\u4F7F\u7528 [@delon/acl](/acl)\u3002\n\n### \u6D41\u7A0B\n\n- \u83B7\u53D6 Token\n- \u5B58\u50A8 Token\n- \u5229\u7528HTTP\u62E6\u622A\u5668\uFF0C\u5C06 Token \u53D1\u9001\u7ED9\u540E\u7AEF\n\n## \u540D\u8BCD\u89E3\u91CA\n\n### Token\n\n@delon/auth \u8BA4\u4E3A\u8BF7\u6C42\u65F6\u9700\u8981\u53D1\u9001\u7684\u52A0\u5BC6\u5B57\u7B26\u4E32\u79F0\u5B83\u4E3A Token \u503C\uFF0C\u4E0D\u7BA1\u662F\u91C7\u7528 JWT \u7684 `Authorization` \u53C2\u6570\uFF0C\u8FD8\u662F OAuth2 \u7684 `access_token`\uFF0C\u8FD9\u4E5F\u662F\u6BCF\u4E2A HTTP \u8BF7\u6C42\u65F6\u6240\u643A\u5E26\u7684\u503C\u3002 \u56E0\u6B64\uFF0C`ITokenModel` \u63A5\u53E3\u7528\u4E8E\u8868\u8FF0\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u4E14\u53EA\u6709\u4E00\u4E2A `token` \u5C5E\u6027\u3002\n\n> \u6CE8\u610F\uFF1AToken \u503C\u52A1\u5FC5\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u503C\u3002\n\n### \u8BA4\u8BC1\u98CE\u683C\n\n\u76EE\u524D\u884D\u751F\u4E24\u79CD\u98CE\u683C\uFF1ASimple Web Token \uFF08\u4F7F\u7528 `SimpleTokenModel`\uFF09\u3001Json Web Token\uFF08\u4F7F\u7528 `JWTTokenModel`\uFF09\u5177\u6709\u89E3\u6790 `payload` \u80FD\u529B\u3002\u5982\u679C\u6709\u7279\u6B8A\u9700\u6C42\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5B9E\u73B0 `ITokenModel` \u63A5\u53E3\u3002\n\n## \u5982\u4F55\u4F7F\u7528\n\n\u5B89\u88C5 `@delon/auth` \u4F9D\u8D56\u5305\uFF1A\n\n```bash\nnpm i -S @delon/auth\n```\n\n\u5728 `app.config.ts` \u4E2D\u914D\u7F6E `provideAuth` \u73AF\u5883\uFF1A\n\n```typescript\nproviders: [\n  // \u8868\u793A\u4F7F\u7528JWT\u98CE\u683C\u5E76\u7528 `localStorage` \u5B58\u50A8 Token\n  provideHttpClient(withInterceptors([...(environment.interceptorFns ?? []), authJWTInterceptor, defaultInterceptor])),\n  provideAuth(withLocalStorage()),\n]\n```\n\n## AlainAuthConfig\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u5168\u5C40\u914D\u7F6E |\n|----|----|----|-----|------|\n| `[store_key]` | `string` | `_token` | `localStorage` \u7684\u5B58\u50A8KEY\u503C | \u2705 |\n| `[token_invalid_redirect]` | `boolean` | `true` | \u65E0\u6548\u65F6\u8DF3\u8F6C\u81F3\u767B\u5F55\u9875\uFF0C\u5305\u62EC\uFF1A\u65E0\u6548token\u503C\u3001token\u5DF2\u8FC7\u671F\uFF08\u9650JWT\uFF09 | \u2705 |\n| `[token_exp_offset]` | `number` | `10` | JWT token\u8FC7\u671F\u65F6\u95F4\u504F\u79FB\u503C\uFF08\u5355\u4F4D\uFF1A\u79D2\uFF09 | \u2705 |\n| `[token_send_key]` | `string` | Token | \u53D1\u9001token\u53C2\u6570\u540D | \u2705 |\n| `[token_send_template]` | `string` | `${token}` | \u53D1\u9001token\u6A21\u677F\uFF0C\u4EE5 `${\u5C5E\u6027\u540D}` \u8868\u793A\u5360\u4F4D\u7B26\uFF0C\u5C5E\u6027\u540D\u8981\u786E\u4FDD\u5B58\u5728\u5426\u5219\u4EE5\u7A7A\u5B57\u7B26\u4EE3\u66FF | \u2705 |\n| `[token_send_place]` | `header,body,url` | `header` | \u53D1\u9001token\u53C2\u6570\u4F4D\u7F6E | \u2705 |\n| `[login_url]` | `string` | `/login` | \u767B\u5F55\u9875\u8DEF\u7531\u5730\u5740 | \u2705 |\n| `[ignores]` | `RegExp[]` | `[/\\/assets\\//]` | \u5FFD\u7565 URL \u5730\u5740\u6E05\u5355\uFF0C\u9664\u6B64\u4E4B\u5916\u8FD8\u53EF\u4EE5\u901A\u8FC7 [ALLOW_ANONYMOUS](/auth/qa/zh) \u8FDB\u884C\u63A7\u5236\u662F\u5426\u5FFD\u7565\u3002 | \u2705 |\n| `[refreshTime]` | `number` | `3000` | \u5237\u65B0\u65F6\u957F\uFF08\u5355\u4F4D\uFF1Ams\uFF09 | \u2705 |\n| `[refreshOffset]` | `number` | `6000` | \u504F\u79FB\u503C\uFF08\u5355\u4F4D\uFF1Ams\uFF09\uFF0C\u5EFA\u8BAE\u6839\u636E `refreshTime` \u500D\u6570\u6765\u8BBE\u7F6E | \u2705 |\n\n> \u53EF\u4EE5\u901A\u8FC7[\u5168\u5C40\u914D\u7F6E](/docs/global-config)\u8986\u76D6\u5B83\u4EEC\u3002\n\n## FAQ\n\n### \u89E3\u51B3\u540C\u57DF\u4E0B\u591A\u4E2ANG-ALAIN\u9879\u76EEToken\u6C61\u67D3\u95EE\u9898\n\n\u53EF\u4EE5\u5728\u6BCF\u4E2A\u9879\u76EE\u91CC\u901A\u8FC7[\u5168\u5C40\u914D\u7F6E](/docs/global-config)\u4FEE\u6539 `store_key` \u7528\u4E8E\u533A\u5206\u3002"}}};codes=[];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["auth-getting-started"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,n){e&1&&i(0,"app-docs",0),e&2&&a("codes",n.codes)("item",n.item)},dependencies:[r],encapsulation:2})};var p=class t{item={name:"guard",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:25,title:"Routing guard",description:"When a route does not initiate a request, it means that the Token validity cannot be verified in the interceptor, and the routing guard can solve the ...",group:"Documents",path:"packages/auth/docs/guard.en-US.md",url:"/auth/guard/en"},text:`<h2 id="written_in_front"><a class="lake-link"><i data-anchor="written_in_front"></i></a>Written in front</h2><p>When a route does not initiate a request, it means that the Token validity cannot be verified in the interceptor, and the routing guard can solve the problem, for example, in your root path:</p>
<pre><code class="language-ts">[
  &#123;
    path: &#39;home&#39;,
    component: MockComponent,
    canActivate: [authJWTCanActivate],
  &#125;,
  &#123;
    path: &#39;my&#39;,
    canActivateChild: [authJWTCanActivateChild],
    children: [
      &#123; path: &#39;profile&#39;, component: MockComponent &#125;
    ],
  &#125;,
  &#123;
    path: &#39;login&#39;,
    component: MockComponent,
  &#125;,
]
</code></pre>
<h2 id="how_to_choose?"><a class="lake-link"><i data-anchor="how_to_choose?"></i></a>How to choose?</h2><p>Similarly, the different authentication styles are:</p>
<ul>
<li><code>authSimpleCanActivate</code>, <code>authSimpleCanActivateChild</code>, <code>authSimpleCanMatch</code> based on Simple Web Token authentication style</li>
<li><code>authJWTCanActivate</code>, <code>authJWTCanActivateChild</code>, <code>authJWTCanMatch</code> based on Json Web Token authentication style</li>
</ul>
`,api:"",toc:[{id:"written_in_front",title:"Written in front"},{id:"how_to_choose?",title:"How to choose?"}],raw:`---
order: 25
title: 
  en-US: Routing guard
  zh-CN: \u8DEF\u7531\u5B88\u536B
type: Documents
---

## Written in front

When a route does not initiate a request, it means that the Token validity cannot be verified in the interceptor, and the routing guard can solve the problem, for example, in your root path:

\`\`\`ts
[
  {
    path: 'home',
    component: MockComponent,
    canActivate: [authJWTCanActivate],
  },
  {
    path: 'my',
    canActivateChild: [authJWTCanActivateChild],
    children: [
      { path: 'profile', component: MockComponent }
    ],
  },
  {
    path: 'login',
    component: MockComponent,
  },
]
\`\`\`

## How to choose?

Similarly, the different authentication styles are:

- \`authSimpleCanActivate\`, \`authSimpleCanActivateChild\`, \`authSimpleCanMatch\` based on Simple Web Token authentication style
- \`authJWTCanActivate\`, \`authJWTCanActivateChild\`, \`authJWTCanMatch\` based on Json Web Token authentication style`},"zh-CN":{meta:{order:25,title:"\u8DEF\u7531\u5B88\u536B",description:"\u5F53\u67D0\u4E2A\u8DEF\u7531\u672A\u53D1\u8D77\u8BF7\u6C42\u65F6\uFF0C\u610F\u5473\u7740\u65E0\u6CD5\u5728\u62E6\u622A\u5668\u91CC\u9762\u5BF9\u5176\u8FDB\u884C Token \u6709\u6548\u6027\u7684\u9A8C\u8BC1\uFF0C\u800C\u8DEF\u7531\u5B88\u536B\u53EF\u4EE5\u89E3\u51B3\u8FD9\u4E00\u95EE\u9898\uFF0C\u4F8B\u5982\u5728\u4F60\u7684\u6839\u8DEF\u5F84\u91CC\uFF1A\u540C\u6837\uFF0C\u9488\u5BF9\u4E0D\u540C\u8BA4\u8BC1\u98CE\u683C\u5206\u522B\u4E3A\uFF1AauthSimpleCanActivate, authSimpleCanActivateChild, authSimpleCanMatch ...",group:"Documents",path:"packages/auth/docs/guard.zh-CN.md",url:"/auth/guard/zh"},text:`<h2 id="\u5199\u5728\u524D\u9762"><a class="lake-link"><i data-anchor="\u5199\u5728\u524D\u9762"></i></a>\u5199\u5728\u524D\u9762</h2><p>\u5F53\u67D0\u4E2A\u8DEF\u7531\u672A\u53D1\u8D77\u8BF7\u6C42\u65F6\uFF0C\u610F\u5473\u7740\u65E0\u6CD5\u5728\u62E6\u622A\u5668\u91CC\u9762\u5BF9\u5176\u8FDB\u884C Token \u6709\u6548\u6027\u7684\u9A8C\u8BC1\uFF0C\u800C\u8DEF\u7531\u5B88\u536B\u53EF\u4EE5\u89E3\u51B3\u8FD9\u4E00\u95EE\u9898\uFF0C\u4F8B\u5982\u5728\u4F60\u7684\u6839\u8DEF\u5F84\u91CC\uFF1A</p>
<pre><code class="language-ts">[
  &#123;
    path: &#39;home&#39;,
    component: MockComponent,
    canActivate: [authJWTCanActivate],
  &#125;,
  &#123;
    path: &#39;my&#39;,
    canActivateChild: [authJWTCanActivateChild],
    children: [
      &#123; path: &#39;profile&#39;, component: MockComponent &#125;
    ],
  &#125;,
  &#123;
    path: &#39;login&#39;,
    component: MockComponent,
  &#125;,
]
</code></pre>
<h2 id="\u5982\u4F55\u9009\u62E9\uFF1F"><a class="lake-link"><i data-anchor="\u5982\u4F55\u9009\u62E9\uFF1F"></i></a>\u5982\u4F55\u9009\u62E9\uFF1F</h2><p>\u540C\u6837\uFF0C\u9488\u5BF9\u4E0D\u540C\u8BA4\u8BC1\u98CE\u683C\u5206\u522B\u4E3A\uFF1A</p>
<ul>
<li><code>authSimpleCanActivate</code>, <code>authSimpleCanActivateChild</code>, <code>authSimpleCanMatch</code> \u57FA\u4E8E Simple Web Token \u8BA4\u8BC1\u98CE\u683C</li>
<li><code>authJWTCanActivate</code>, <code>authJWTCanActivateChild</code>, <code>authJWTCanMatch</code> \u57FA\u4E8E Json Web Token \u8BA4\u8BC1\u98CE\u683C</li>
</ul>
`,api:"",toc:[{id:"\u5199\u5728\u524D\u9762",title:"\u5199\u5728\u524D\u9762"},{id:"\u5982\u4F55\u9009\u62E9\uFF1F",title:"\u5982\u4F55\u9009\u62E9\uFF1F"}],raw:`---
order: 25
title: \u8DEF\u7531\u5B88\u536B
type: Documents
---

## \u5199\u5728\u524D\u9762

\u5F53\u67D0\u4E2A\u8DEF\u7531\u672A\u53D1\u8D77\u8BF7\u6C42\u65F6\uFF0C\u610F\u5473\u7740\u65E0\u6CD5\u5728\u62E6\u622A\u5668\u91CC\u9762\u5BF9\u5176\u8FDB\u884C Token \u6709\u6548\u6027\u7684\u9A8C\u8BC1\uFF0C\u800C\u8DEF\u7531\u5B88\u536B\u53EF\u4EE5\u89E3\u51B3\u8FD9\u4E00\u95EE\u9898\uFF0C\u4F8B\u5982\u5728\u4F60\u7684\u6839\u8DEF\u5F84\u91CC\uFF1A

\`\`\`ts
[
  {
    path: 'home',
    component: MockComponent,
    canActivate: [authJWTCanActivate],
  },
  {
    path: 'my',
    canActivateChild: [authJWTCanActivateChild],
    children: [
      { path: 'profile', component: MockComponent }
    ],
  },
  {
    path: 'login',
    component: MockComponent,
  },
]
\`\`\`

## \u5982\u4F55\u9009\u62E9\uFF1F

\u540C\u6837\uFF0C\u9488\u5BF9\u4E0D\u540C\u8BA4\u8BC1\u98CE\u683C\u5206\u522B\u4E3A\uFF1A

- \`authSimpleCanActivate\`, \`authSimpleCanActivateChild\`, \`authSimpleCanMatch\` \u57FA\u4E8E Simple Web Token \u8BA4\u8BC1\u98CE\u683C
- \`authJWTCanActivate\`, \`authJWTCanActivateChild\`, \`authJWTCanMatch\` \u57FA\u4E8E Json Web Token \u8BA4\u8BC1\u98CE\u683C`}}};codes=[];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["auth-guard"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,n){e&1&&i(0,"app-docs",0),e&2&&a("codes",n.codes)("item",n.item)},dependencies:[r],encapsulation:2})};var u=class t{item={name:"qa",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:10,title:"QA",description:"When calling the request, add ALLOW_ANONYMOUS.",group:"Documents",path:"packages/auth/docs/qa.en-US.md",url:"/auth/qa/en"},text:`<h2 id="how_to_ignore_a_request"><a class="lake-link"><i data-anchor="how_to_ignore_a_request"></i></a>How to ignore a request</h2><p>When calling the request, add <code>ALLOW_ANONYMOUS</code>.</p>
<pre><code class="language-ts">this.http.post(\`login\`, &#123;
  name: &#39;cipchk&#39;, pwd: &#39;123456&#39;
&#125;, null, &#123;
  context: new HttpContext().set(ALLOW_ANONYMOUS, true)
&#125;);
</code></pre>
<h2 id="how_to_capture_intercepted_information_when_there_is_no_token?"><a class="lake-link"><i data-anchor="how_to_capture_intercepted_information_when_there_is_no_token?"></i></a>How to capture intercepted information when there is no Token?</h2><pre><code class="language-ts">// Use subscription Error
this.http.get(&#39;/user&#39;).subscribe(
  res =&gt; console.log(&#39;success&#39;, res),
  err =&gt; console.error(&#39;error&#39;, err)
);
// Or use catchError
this.http.get(&#39;/user&#39;).pipe(
  catchError(err =&gt; &#123;
    console.error(&#39;error&#39;, err);
    return of(&#123;&#125;);
  &#125;)
).subscribe();
</code></pre>
`,api:"",toc:[{id:"how_to_ignore_a_request",title:"How to ignore a request"},{id:"how_to_capture_intercepted_information_when_there_is_no_token?",title:"How to capture intercepted information when there is no Token?"}],raw:`---
order: 10
title: QA
type: Documents
---

## How to ignore a request

When calling the request, add \`ALLOW_ANONYMOUS\`.

\`\`\`ts
this.http.post(\`login\`, {
  name: 'cipchk', pwd: '123456'
}, null, {
  context: new HttpContext().set(ALLOW_ANONYMOUS, true)
});
\`\`\`

## How to capture intercepted information when there is no Token?

\`\`\`ts
// Use subscription Error
this.http.get('/user').subscribe(
  res => console.log('success', res),
  err => console.error('error', err)
);
// Or use catchError
this.http.get('/user').pipe(
  catchError(err => {
    console.error('error', err);
    return of({});
  })
).subscribe();
\`\`\``},"zh-CN":{meta:{order:10,title:"\u5E38\u89C1\u95EE\u9898",description:"\u5728\u8C03\u7528\u8BF7\u6C42\u65F6\uFF0C\u52A0\u4E0A ALLOW_ANONYMOUS\u3002",group:"Documents",path:"packages/auth/docs/qa.zh-CN.md",url:"/auth/qa/zh"},text:`<h2 id="\u5982\u4F55\u5FFD\u7565\u67D0\u4E2A\u8BF7\u6C42"><a class="lake-link"><i data-anchor="\u5982\u4F55\u5FFD\u7565\u67D0\u4E2A\u8BF7\u6C42"></i></a>\u5982\u4F55\u5FFD\u7565\u67D0\u4E2A\u8BF7\u6C42</h2><p>\u5728\u8C03\u7528\u8BF7\u6C42\u65F6\uFF0C\u52A0\u4E0A <code>ALLOW_ANONYMOUS</code>\u3002</p>
<pre><code class="language-ts">this.http.post(\`login\`, &#123;
 name: &#39;cipchk&#39;, pwd: &#39;123456&#39;
&#125;, null, &#123;
 context: new HttpContext().set(ALLOW_ANONYMOUS, true)
&#125;);
</code></pre>
<h2 id="\u5982\u4F55\u6355\u83B7\u65E0token\u65F6\u88AB\u62E6\u622A\u4FE1\u606F\uFF1F"><a class="lake-link"><i data-anchor="\u5982\u4F55\u6355\u83B7\u65E0token\u65F6\u88AB\u62E6\u622A\u4FE1\u606F\uFF1F"></i></a>\u5982\u4F55\u6355\u83B7\u65E0Token\u65F6\u88AB\u62E6\u622A\u4FE1\u606F\uFF1F</h2><pre><code class="language-ts">// \u5229\u7528\u8BA2\u9605 Error
this.http.get(&#39;/user&#39;).subscribe(
  res =&gt; console.log(&#39;success&#39;, res),
  err =&gt; console.error(&#39;error&#39;, err)
);
// \u6216\u4F7F\u7528 catchError
this.http.get(&#39;/user&#39;).pipe(
  catchError(err =&gt; &#123;
    console.error(&#39;error&#39;, err);
    return of(&#123;&#125;);
  &#125;)
).subscribe();
</code></pre>
`,api:"",toc:[{id:"\u5982\u4F55\u5FFD\u7565\u67D0\u4E2A\u8BF7\u6C42",title:"\u5982\u4F55\u5FFD\u7565\u67D0\u4E2A\u8BF7\u6C42"},{id:"\u5982\u4F55\u6355\u83B7\u65E0token\u65F6\u88AB\u62E6\u622A\u4FE1\u606F\uFF1F",title:"\u5982\u4F55\u6355\u83B7\u65E0Token\u65F6\u88AB\u62E6\u622A\u4FE1\u606F\uFF1F"}],raw:`---
order: 10
title: \u5E38\u89C1\u95EE\u9898
type: Documents
---

## \u5982\u4F55\u5FFD\u7565\u67D0\u4E2A\u8BF7\u6C42

\u5728\u8C03\u7528\u8BF7\u6C42\u65F6\uFF0C\u52A0\u4E0A \`ALLOW_ANONYMOUS\`\u3002

\`\`\`ts
this.http.post(\`login\`, {
 name: 'cipchk', pwd: '123456'
}, null, {
 context: new HttpContext().set(ALLOW_ANONYMOUS, true)
});
\`\`\`

## \u5982\u4F55\u6355\u83B7\u65E0Token\u65F6\u88AB\u62E6\u622A\u4FE1\u606F\uFF1F

\`\`\`ts
// \u5229\u7528\u8BA2\u9605 Error
this.http.get('/user').subscribe(
  res => console.log('success', res),
  err => console.error('error', err)
);
// \u6216\u4F7F\u7528 catchError
this.http.get('/user').pipe(
  catchError(err => {
    console.error('error', err);
    return of({});
  })
).subscribe();
\`\`\``}}};codes=[];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["auth-qa"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,n){e&1&&i(0,"app-docs",0),e&2&&a("codes",n.codes)("item",n.item)},dependencies:[r],encapsulation:2})};var g=class t{item={name:"send",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:20,title:"Send Token",description:"It is better to add the corresponding authentication information to each request through the HTTP interceptor. @delonn/auth implements two separate HT...",group:"Documents",path:"packages/auth/docs/send.en-US.md",url:"/auth/send/en"},text:`<h2 id="authentication_style"><a class="lake-link"><i data-anchor="authentication_style"></i></a>Authentication style</h2><p>It is better to add the corresponding authentication information to each request through the HTTP interceptor. <code>&#64;delonn/auth</code> implements two separate HTTP interceptors based on two different authentication styles.</p>
<h3 id="authsimpleinterceptor"><a class="lake-link"><i data-anchor="authsimpleinterceptor"></i></a>authSimpleInterceptor</h3><p>The parameter name and its sending location can be specified via <code>DelonAuthConfig</code>, for example:</p>
<pre><code class="language-ts">token_send_key = &#39;token&#39;;
token_send_template = &#39;Bearer $&#123;token&#125;&#39;;
token_send_place = &#39;header&#39;;
</code></pre>
<p>Indicates the <code>&#123; token: &#39;Bearer token_string&#39; &#125;</code> data in the <code>header</code> of each request.</p>
<h3 id="authjwtinterceptor"><a class="lake-link"><i data-anchor="authjwtinterceptor"></i></a>authJWTInterceptor</h3><p>It is a standard JWT sending rule that automatically adds <code>&#123; Authorization: &#39;Bearer token_string&#39; &#125;</code> to <code>header</code>.</p>
<h3 id="how_to_choose?"><a class="lake-link"><i data-anchor="how_to_choose?"></i></a>How to choose?</h3><p><code>authSimpleInterceptor</code> is a very liberal style, you can put <code>token</code> in the request body, request header, etc.</p>
<p><code>authJWTInterceptor</code> is a JWT standard, which needs to ensure that the backend also uses such standards.</p>
<h2 id="how_to_load"><a class="lake-link"><i data-anchor="how_to_load"></i></a>How to load</h2><p>In <code>app.config.ts</code> file:</p>
<pre><code class="language-ts">providers: [
  provideHttpClient(withInterceptors([...(environment.interceptorFns ?? []), authSimpleInterceptor, defaultInterceptor])),
  // Or JWT
  provideHttpClient(withInterceptors([...(environment.interceptorFns ?? []), authJWTInterceptor, defaultInterceptor])),
]
</code></pre>
<h2 id="example"><a class="lake-link"><i data-anchor="example"></i></a>Example</h2><p><a href="//ng-alain.github.io/ng-alain/#/passport/login" target="_blank" rel="noopener">DEMO</a>, login or other login method, and observe the changes in the browser localStorage storage data.</p>
`,api:"",toc:[{id:"authentication_style",title:"Authentication style",children:[{id:"authsimpleinterceptor",title:"authSimpleInterceptor"},{id:"authjwtinterceptor",title:"authJWTInterceptor"},{id:"how_to_choose?",title:"How to choose?"}]},{id:"how_to_load",title:"How to load"},{id:"example",title:"Example"}],raw:`---
order: 20
title: 
  zh-CN: \u53D1\u9001Token
  en-US: Send Token
type: Documents
---

## Authentication style

It is better to add the corresponding authentication information to each request through the HTTP interceptor. \`@delonn/auth\` implements two separate HTTP interceptors based on two different authentication styles.

### authSimpleInterceptor

The parameter name and its sending location can be specified via \`DelonAuthConfig\`, for example:

\`\`\`ts
token_send_key = 'token';
token_send_template = 'Bearer \${token}';
token_send_place = 'header';
\`\`\`

Indicates the \`{ token: 'Bearer token_string' }\` data in the \`header\` of each request.

### authJWTInterceptor

It is a standard JWT sending rule that automatically adds \`{ Authorization: 'Bearer token_string' }\` to \`header\`.

### How to choose?

\`authSimpleInterceptor\` is a very liberal style, you can put \`token\` in the request body, request header, etc.

\`authJWTInterceptor\` is a JWT standard, which needs to ensure that the backend also uses such standards.

## How to load

In \`app.config.ts\` file:

\`\`\`ts
providers: [
  provideHttpClient(withInterceptors([...(environment.interceptorFns ?? []), authSimpleInterceptor, defaultInterceptor])),
  // Or JWT
  provideHttpClient(withInterceptors([...(environment.interceptorFns ?? []), authJWTInterceptor, defaultInterceptor])),
]
\`\`\`

## Example

[DEMO](//ng-alain.github.io/ng-alain/#/passport/login), login or other login method, and observe the changes in the browser localStorage storage data.`},"zh-CN":{meta:{order:20,title:"\u53D1\u9001Token",description:"\u901A\u8FC7HTTP\u62E6\u622A\u5668\u5728\u6BCF\u4E00\u4E2A\u8BF7\u6C42\u4E2D\u52A0\u5165\u76F8\u5E94\u7684\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u8FD9\u662F\u518D\u597D\u4E0D\u8FC7\u3002@delonn/auth \u6839\u636E\u4E24\u79CD\u4E0D\u540C\u8BA4\u8BC1\u98CE\u683C\uFF0C\u5B9E\u73B0\u4E24\u79CD\u5404\u81EA\u7684HTTP\u62E6\u622A\u5668\u3002\u900F\u8FC7 DelonAuthConfig \u53EF\u4EE5\u6307\u5B9A\u53C2\u6570\u540D\u4EE5\u53CA\u5176\u53D1\u9001\u4F4D\u7F6E\uFF0C\u4F8B\u5982\uFF1A\u8868\u793A\u5728\u6BCF\u4E00\u4E2A\u8BF7\u6C42\u7684 header \u52A0\u4E0A { token: 'Bearer toke...",group:"Documents",path:"packages/auth/docs/send.zh-CN.md",url:"/auth/send/zh"},text:`<h2 id="\u8BA4\u8BC1\u98CE\u683C"><a class="lake-link"><i data-anchor="\u8BA4\u8BC1\u98CE\u683C"></i></a>\u8BA4\u8BC1\u98CE\u683C</h2><p>\u901A\u8FC7HTTP\u62E6\u622A\u5668\u5728\u6BCF\u4E00\u4E2A\u8BF7\u6C42\u4E2D\u52A0\u5165\u76F8\u5E94\u7684\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u8FD9\u662F\u518D\u597D\u4E0D\u8FC7\u3002<code>&#64;delonn/auth</code> \u6839\u636E\u4E24\u79CD\u4E0D\u540C\u8BA4\u8BC1\u98CE\u683C\uFF0C\u5B9E\u73B0\u4E24\u79CD\u5404\u81EA\u7684HTTP\u62E6\u622A\u5668\u3002</p>
<h3 id="authsimpleinterceptor"><a class="lake-link"><i data-anchor="authsimpleinterceptor"></i></a>authSimpleInterceptor</h3><p>\u900F\u8FC7 <code>DelonAuthConfig</code> \u53EF\u4EE5\u6307\u5B9A\u53C2\u6570\u540D\u4EE5\u53CA\u5176\u53D1\u9001\u4F4D\u7F6E\uFF0C\u4F8B\u5982\uFF1A</p>
<pre><code class="language-ts">token_send_key = &#39;token&#39;;
token_send_template = &#39;Bearer $&#123;token&#125;&#39;;
token_send_place = &#39;header&#39;;
</code></pre>
<p>\u8868\u793A\u5728\u6BCF\u4E00\u4E2A\u8BF7\u6C42\u7684 <code>header</code> \u52A0\u4E0A <code>&#123; token: &#39;Bearer token_string&#39; &#125;</code> \u6570\u636E\u3002</p>
<h3 id="authjwtinterceptor"><a class="lake-link"><i data-anchor="authjwtinterceptor"></i></a>authJWTInterceptor</h3><p>\u5B83\u662F\u4E00\u4E2A\u6807\u51C6JWT\u7684\u53D1\u9001\u89C4\u5219\uFF0C\u5373\u5728 <code>header</code> \u81EA\u52A8\u52A0\u4E0A <code>&#123; Authorization: &#39;Bearer token_string&#39; &#125;</code>\u3002</p>
<h3 id="\u5982\u4F55\u9009\u62E9\uFF1F"><a class="lake-link"><i data-anchor="\u5982\u4F55\u9009\u62E9\uFF1F"></i></a>\u5982\u4F55\u9009\u62E9\uFF1F</h3><p><code>authSimpleInterceptor</code> \u662F\u4E00\u79CD\u81EA\u7531\u5EA6\u975E\u5E38\u9AD8\u7684\u98CE\u683C\uFF0C\u4F60\u53EF\u4EE5\u5C06 <code>token</code> \u653E\u5728\u8BF7\u6C42\u4F53\u3001\u8BF7\u6C42\u5934\u7B49\u5F53\u4E2D\u3002</p>
<p><code>authJWTInterceptor</code> \u662F\u4E00\u4E2A JWT \u6807\u51C6\uFF0C\u8FD9\u9700\u8981\u786E\u4FDD\u540E\u7AEF\u4E5F\u91C7\u7528\u8FD9\u7C7B\u6807\u51C6\u3002</p>
<h2 id="\u5982\u4F55\u52A0\u8F7D"><a class="lake-link"><i data-anchor="\u5982\u4F55\u52A0\u8F7D"></i></a>\u5982\u4F55\u52A0\u8F7D</h2><p>\u5728 <code>app.config.ts</code> \u52A0\u5165\uFF1A</p>
<pre><code class="language-ts">providers: [
  // \u8868\u793A\u4F7F\u7528JWT\u98CE\u683C\u5E76\u7528 \`localStorage\` \u5B58\u50A8 Token
  provideHttpClient(withInterceptors([...(environment.interceptorFns ?? []), authSimpleInterceptor, defaultInterceptor])),
  // Or JWT
  provideHttpClient(withInterceptors([...(environment.interceptorFns ?? []), authJWTInterceptor, defaultInterceptor])),
]
</code></pre>
<h2 id="\u793A\u4F8B"><a class="lake-link"><i data-anchor="\u793A\u4F8B"></i></a>\u793A\u4F8B</h2><p><a href="//ng-alain.github.io/ng-alain/#/passport/login" target="_blank" rel="noopener">DEMO</a>\uFF0C\u8D26\u5BC6\u6216\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F\u767B\u5F55\uFF0C\u5E76\u89C2\u5BDF\u6D4F\u89C8\u5668 localStorage \u5B58\u50A8\u6570\u636E\u7684\u53D8\u5316\u3002</p>
`,api:"",toc:[{id:"\u8BA4\u8BC1\u98CE\u683C",title:"\u8BA4\u8BC1\u98CE\u683C",children:[{id:"authsimpleinterceptor",title:"authSimpleInterceptor"},{id:"authjwtinterceptor",title:"authJWTInterceptor"},{id:"\u5982\u4F55\u9009\u62E9\uFF1F",title:"\u5982\u4F55\u9009\u62E9\uFF1F"}]},{id:"\u5982\u4F55\u52A0\u8F7D",title:"\u5982\u4F55\u52A0\u8F7D"},{id:"\u793A\u4F8B",title:"\u793A\u4F8B"}],raw:`---
order: 20
title: \u53D1\u9001Token
type: Documents
---

## \u8BA4\u8BC1\u98CE\u683C

\u901A\u8FC7HTTP\u62E6\u622A\u5668\u5728\u6BCF\u4E00\u4E2A\u8BF7\u6C42\u4E2D\u52A0\u5165\u76F8\u5E94\u7684\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u8FD9\u662F\u518D\u597D\u4E0D\u8FC7\u3002\`@delonn/auth\` \u6839\u636E\u4E24\u79CD\u4E0D\u540C\u8BA4\u8BC1\u98CE\u683C\uFF0C\u5B9E\u73B0\u4E24\u79CD\u5404\u81EA\u7684HTTP\u62E6\u622A\u5668\u3002

### authSimpleInterceptor

\u900F\u8FC7 \`DelonAuthConfig\` \u53EF\u4EE5\u6307\u5B9A\u53C2\u6570\u540D\u4EE5\u53CA\u5176\u53D1\u9001\u4F4D\u7F6E\uFF0C\u4F8B\u5982\uFF1A

\`\`\`ts
token_send_key = 'token';
token_send_template = 'Bearer \${token}';
token_send_place = 'header';
\`\`\`

\u8868\u793A\u5728\u6BCF\u4E00\u4E2A\u8BF7\u6C42\u7684 \`header\` \u52A0\u4E0A \`{ token: 'Bearer token_string' }\` \u6570\u636E\u3002

### authJWTInterceptor

\u5B83\u662F\u4E00\u4E2A\u6807\u51C6JWT\u7684\u53D1\u9001\u89C4\u5219\uFF0C\u5373\u5728 \`header\` \u81EA\u52A8\u52A0\u4E0A \`{ Authorization: 'Bearer token_string' }\`\u3002

### \u5982\u4F55\u9009\u62E9\uFF1F

\`authSimpleInterceptor\` \u662F\u4E00\u79CD\u81EA\u7531\u5EA6\u975E\u5E38\u9AD8\u7684\u98CE\u683C\uFF0C\u4F60\u53EF\u4EE5\u5C06 \`token\` \u653E\u5728\u8BF7\u6C42\u4F53\u3001\u8BF7\u6C42\u5934\u7B49\u5F53\u4E2D\u3002

\`authJWTInterceptor\` \u662F\u4E00\u4E2A JWT \u6807\u51C6\uFF0C\u8FD9\u9700\u8981\u786E\u4FDD\u540E\u7AEF\u4E5F\u91C7\u7528\u8FD9\u7C7B\u6807\u51C6\u3002

## \u5982\u4F55\u52A0\u8F7D

\u5728 \`app.config.ts\` \u52A0\u5165\uFF1A

\`\`\`ts
providers: [
  // \u8868\u793A\u4F7F\u7528JWT\u98CE\u683C\u5E76\u7528 \`localStorage\` \u5B58\u50A8 Token
  provideHttpClient(withInterceptors([...(environment.interceptorFns ?? []), authSimpleInterceptor, defaultInterceptor])),
  // Or JWT
  provideHttpClient(withInterceptors([...(environment.interceptorFns ?? []), authJWTInterceptor, defaultInterceptor])),
]
\`\`\`

## \u793A\u4F8B

[DEMO](//ng-alain.github.io/ng-alain/#/passport/login)\uFF0C\u8D26\u5BC6\u6216\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F\u767B\u5F55\uFF0C\u5E76\u89C2\u5BDF\u6D4F\u89C8\u5668 localStorage \u5B58\u50A8\u6570\u636E\u7684\u53D8\u5316\u3002`}}};codes=[];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["auth-send"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,n){e&1&&i(0,"app-docs",0),e&2&&a("codes",n.codes)("item",n.item)},dependencies:[r],encapsulation:2})};var k=class t{item={name:"service",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:2,title:"TokenService",description:"ITokenService contains some service class for Token operations, such as get current Token information:After subscribing to refresh, the token will be ...",group:"Documents",path:"packages/auth/docs/service.en-US.md",url:"/auth/service/en"},text:`<p><code>ITokenService</code> contains some service class for Token operations, such as get current Token information:</p>
<pre><code class="language-ts">constructor(&#64;Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService) &#123;
  console.log(tokenService.get().token);
  // When JWT
  console.log(tokenService.get&lt;JWTTokenModel&gt;(JWTTokenModel).token);
&#125;
</code></pre>
<h2 id="expired_refresh"><a class="lake-link"><i data-anchor="expired_refresh"></i></a>Expired refresh</h2><p>After subscribing to <code>refresh</code>, the token will be automatically triggered when it expires. When the backend supports Token refresh, the token can be refreshed before expiration to extend the user authorization period.</p>
<blockquote>
<p><strong>Recommendation</strong> <code>refresh</code> only subscribe once in the application.</p>
</blockquote>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="property"><a class="lake-link"><i data-anchor="property"></i></a>Property</h3><table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>[login_url]</code></td>
<td><code>string</code></td>
<td>Get the login address of <code>DelonAuthConfig</code> configuration</td>
</tr>
<tr>
<td><code>[referrer]</code></td>
<td><code>AuthReferrer</code></td>
<td>Get routing before authorization failure</td>
</tr>
<tr>
<td><code>[refresh]</code></td>
<td><code>Observable&lt;ITokenModel&gt;</code></td>
<td>Subscription refresh, automatically triggered when expired; <strong>Note</strong> It will be triggered multiple times, please make business process</td>
</tr>
</tbody></table>
<h3 id="method"><a class="lake-link"><i data-anchor="method"></i></a>Method</h3><table>
<thead>
<tr>
<th>Name</th>
<th>Return Type</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>change()</code></td>
<td><code>Observable&lt;ITokenModel&gt;</code></td>
<td>Token changed callback</td>
</tr>
<tr>
<td><code>set(data: ITokenModel)</code></td>
<td><code>boolean</code></td>
<td>Set Token</td>
</tr>
<tr>
<td><code>get(type?: any)</code></td>
<td><code>ITokenModel</code></td>
<td>Get Token</td>
</tr>
<tr>
<td><code>clear(options?: &#123; onlyToken: boolean &#125;)</code></td>
<td><code>void</code></td>
<td>Clear Token</td>
</tr>
</tbody></table>
`,toc:[{id:"expired_refresh",title:"Expired refresh"},{id:"api",title:"API",children:[{id:"property",title:"Property"},{id:"method",title:"Method"}]}],raw:"---\norder: 2\ntitle: TokenService\ntype: Documents\n---\n\n`ITokenService` contains some service class for Token operations, such as get current Token information:\n\n```ts\nconstructor(@Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService) {\n  console.log(tokenService.get().token);\n  // When JWT\n  console.log(tokenService.get<JWTTokenModel>(JWTTokenModel).token);\n}\n```\n\n## Expired refresh\n\nAfter subscribing to `refresh`, the token will be automatically triggered when it expires. When the backend supports Token refresh, the token can be refreshed before expiration to extend the user authorization period.\n\n> **Recommendation** `refresh` only subscribe once in the application.\n\n## API\n\n### Property\n\n| Name | Type | Description |\n|------|------|-------------|\n| `[login_url]` | `string` | Get the login address of `DelonAuthConfig` configuration |\n| `[referrer]` | `AuthReferrer` | Get routing before authorization failure |\n| `[refresh]` | `Observable<ITokenModel>` | Subscription refresh, automatically triggered when expired; **Note** It will be triggered multiple times, please make business process |\n\n### Method\n\n| Name | Return Type | Description |\n|------|-------------|-------------|\n| `change()` | `Observable<ITokenModel>` | Token changed callback |\n| `set(data: ITokenModel)` | `boolean` | Set Token |\n| `get(type?: any)` | `ITokenModel` | Get Token |\n| `clear(options?: { onlyToken: boolean })` | `void` | Clear Token |"},"zh-CN":{meta:{order:2,title:"TokenService",description:"ITokenService \u63A5\u53E3\u5305\u542B\u4E86\u4E00\u4E9B\u5BF9 Token \u64CD\u4F5C\u7684\u670D\u52A1\u7C7B\uFF0C\u4F8B\u5982\u83B7\u53D6\u5F53\u524D Token \u4FE1\u606F\uFF1A\u8BA2\u9605 refresh \u540E Token \u8FC7\u671F\u65F6\u4F1A\u81EA\u52A8\u89E6\u53D1\uFF0C\u5F53\u540E\u7AEF\u652F\u6301 Token \u5237\u65B0\u53EF\u4EE5\uFF0C\u53EF\u4EE5\u5728\u8FC7\u671F\u524D\u5237\u65B0 Token \u6765\u5EF6\u957F\u7528\u6237\u6388\u6743\u65F6\u957F\u3002\u5EFA\u8BAE refresh \u5728\u6574\u4E2A\u5E94\u7528\u4E2D\u53EA\u8BA2\u9605\u4E00\u6B21\u3002",group:"Documents",path:"packages/auth/docs/service.zh-CN.md",url:"/auth/service/zh"},text:`<p><code>ITokenService</code> \u63A5\u53E3\u5305\u542B\u4E86\u4E00\u4E9B\u5BF9 Token \u64CD\u4F5C\u7684\u670D\u52A1\u7C7B\uFF0C\u4F8B\u5982\u83B7\u53D6\u5F53\u524D Token \u4FE1\u606F\uFF1A</p>
<pre><code class="language-ts">constructor(&#64;Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService) &#123;
  console.log(tokenService.get().token);
  // \u5982\u679C\u662F JWT
  console.log(tokenService.get&lt;JWTTokenModel&gt;(JWTTokenModel).token);
&#125;
</code></pre>
<h2 id="\u8FC7\u671F\u5237\u65B0"><a class="lake-link"><i data-anchor="\u8FC7\u671F\u5237\u65B0"></i></a>\u8FC7\u671F\u5237\u65B0</h2><p>\u8BA2\u9605 <code>refresh</code> \u540E Token \u8FC7\u671F\u65F6\u4F1A\u81EA\u52A8\u89E6\u53D1\uFF0C\u5F53\u540E\u7AEF\u652F\u6301 Token \u5237\u65B0\u53EF\u4EE5\uFF0C\u53EF\u4EE5\u5728\u8FC7\u671F\u524D\u5237\u65B0 Token \u6765\u5EF6\u957F\u7528\u6237\u6388\u6743\u65F6\u957F\u3002</p>
<blockquote>
<p><strong>\u5EFA\u8BAE</strong> <code>refresh</code> \u5728\u6574\u4E2A\u5E94\u7528\u4E2D\u53EA\u8BA2\u9605\u4E00\u6B21\u3002</p>
</blockquote>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="\u5C5E\u6027"><a class="lake-link"><i data-anchor="\u5C5E\u6027"></i></a>\u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u53C2\u6570\u540D</th>
<th>\u7C7B\u578B</th>
<th>\u63CF\u8FF0</th>
</tr>
</thead>
<tbody><tr>
<td><code>[login_url]</code></td>
<td><code>string</code></td>
<td>\u83B7\u53D6 <code>DelonAuthConfig</code> \u914D\u7F6E\u7684\u767B\u5F55\u5730\u5740</td>
</tr>
<tr>
<td><code>[referrer]</code></td>
<td><code>AuthReferrer</code></td>
<td>\u83B7\u53D6\u6388\u6743\u5931\u8D25\u524D\u8DEF\u7531\u4FE1\u606F</td>
</tr>
<tr>
<td><code>[refresh]</code></td>
<td><code>Observable&lt;ITokenModel&gt;</code></td>
<td>\u8BA2\u9605\u5237\u65B0\uFF0C\u8BA2\u9605\u65F6\u4F1A\u81EA\u52A8\u4EA7\u751F\u4E00\u4E2A\u5B9A\u65F6\u5668\uFF0C\u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\u8FDB\u884C\u4E00\u4E9B\u6821\u9A8C\uFF1B<strong>\u6CE8\u610F</strong> \u4F1A\u591A\u6B21\u89E6\u53D1\uFF0C\u8BF7\u52A1\u5FC5\u505A\u597D\u4E1A\u52A1\u5224\u65AD</td>
</tr>
</tbody></table>
<h3 id="\u65B9\u6CD5"><a class="lake-link"><i data-anchor="\u65B9\u6CD5"></i></a>\u65B9\u6CD5</h3><table>
<thead>
<tr>
<th>\u65B9\u6CD5\u540D</th>
<th>\u8FD4\u56DE\u7C7B\u578B</th>
<th>\u63CF\u8FF0</th>
</tr>
</thead>
<tbody><tr>
<td><code>change()</code></td>
<td><code>Observable&lt;ITokenModel&gt;</code></td>
<td>\u76D1\u542C Token \u53D8\u5316\u56DE\u8C03</td>
</tr>
<tr>
<td><code>set(data: ITokenModel)</code></td>
<td><code>boolean</code></td>
<td>\u8BBE\u7F6E Token</td>
</tr>
<tr>
<td><code>get(type?: any)</code></td>
<td><code>ITokenModel</code></td>
<td>\u83B7\u53D6 Token</td>
</tr>
<tr>
<td><code>clear(options?: &#123; onlyToken: boolean &#125;)</code></td>
<td><code>void</code></td>
<td>\u6E05\u7A7A Token</td>
</tr>
</tbody></table>
`,toc:[{id:"\u8FC7\u671F\u5237\u65B0",title:"\u8FC7\u671F\u5237\u65B0"},{id:"api",title:"API",children:[{id:"\u5C5E\u6027",title:"\u5C5E\u6027"},{id:"\u65B9\u6CD5",title:"\u65B9\u6CD5"}]}],raw:"---\norder: 2\ntitle: TokenService\ntype: Documents\n---\n\n`ITokenService` \u63A5\u53E3\u5305\u542B\u4E86\u4E00\u4E9B\u5BF9 Token \u64CD\u4F5C\u7684\u670D\u52A1\u7C7B\uFF0C\u4F8B\u5982\u83B7\u53D6\u5F53\u524D Token \u4FE1\u606F\uFF1A\n\n```ts\nconstructor(@Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService) {\n  console.log(tokenService.get().token);\n  // \u5982\u679C\u662F JWT\n  console.log(tokenService.get<JWTTokenModel>(JWTTokenModel).token);\n}\n```\n\n## \u8FC7\u671F\u5237\u65B0\n\n\u8BA2\u9605 `refresh` \u540E Token \u8FC7\u671F\u65F6\u4F1A\u81EA\u52A8\u89E6\u53D1\uFF0C\u5F53\u540E\u7AEF\u652F\u6301 Token \u5237\u65B0\u53EF\u4EE5\uFF0C\u53EF\u4EE5\u5728\u8FC7\u671F\u524D\u5237\u65B0 Token \u6765\u5EF6\u957F\u7528\u6237\u6388\u6743\u65F6\u957F\u3002\n\n> **\u5EFA\u8BAE** `refresh` \u5728\u6574\u4E2A\u5E94\u7528\u4E2D\u53EA\u8BA2\u9605\u4E00\u6B21\u3002\n\n## API\n\n### \u5C5E\u6027\n\n| \u53C2\u6570\u540D | \u7C7B\u578B | \u63CF\u8FF0 |\n|-----|----|----|\n| `[login_url]` | `string` | \u83B7\u53D6 `DelonAuthConfig` \u914D\u7F6E\u7684\u767B\u5F55\u5730\u5740 |\n| `[referrer]` | `AuthReferrer` | \u83B7\u53D6\u6388\u6743\u5931\u8D25\u524D\u8DEF\u7531\u4FE1\u606F |\n| `[refresh]` | `Observable<ITokenModel>` | \u8BA2\u9605\u5237\u65B0\uFF0C\u8BA2\u9605\u65F6\u4F1A\u81EA\u52A8\u4EA7\u751F\u4E00\u4E2A\u5B9A\u65F6\u5668\uFF0C\u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\u8FDB\u884C\u4E00\u4E9B\u6821\u9A8C\uFF1B**\u6CE8\u610F** \u4F1A\u591A\u6B21\u89E6\u53D1\uFF0C\u8BF7\u52A1\u5FC5\u505A\u597D\u4E1A\u52A1\u5224\u65AD |\n\n### \u65B9\u6CD5\n\n| \u65B9\u6CD5\u540D | \u8FD4\u56DE\u7C7B\u578B | \u63CF\u8FF0 |\n|-----|------|----|\n| `change()` | `Observable<ITokenModel>` | \u76D1\u542C Token \u53D8\u5316\u56DE\u8C03 |\n| `set(data: ITokenModel)` | `boolean` | \u8BBE\u7F6E Token |\n| `get(type?: any)` | `ITokenModel` | \u83B7\u53D6 Token |\n| `clear(options?: { onlyToken: boolean })` | `void` | \u6E05\u7A7A Token |"}}};codes=[];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["auth-service"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,n){e&1&&i(0,"app-docs",0),e&2&&a("codes",n.codes)("item",n.item)},dependencies:[r],encapsulation:2})};var m=class t{item={name:"set",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:15,title:"Store Token",description:"The ITokenService interface (the default implementation of TokenService) has only four methods and the login_url attribute:set(data: ITokenModel): boo...",group:"Documents",path:"packages/auth/docs/set.en-US.md",url:"/auth/set/en"},text:`<h2 id="how_to_use"><a class="lake-link"><i data-anchor="how_to_use"></i></a>How to use</h2><p>The <code>ITokenService</code> interface (the default implementation of <code>TokenService</code>) has only four methods and the <code>login_url</code> attribute:</p>
<ul>
<li><code>set(data: ITokenModel): boolean</code> Set authentication information and trigger <code>change</code></li>
<li><code>get(): ITokenModel</code> Get authentication information</li>
<li><code>clear()</code> clears the authentication information and triggers the <code>change</code> parameter to be <code>null</code></li>
<li><code>change(): Observable&lt;ITokenModel&gt;</code> Subscribe to authentication information change callback</li>
<li><code>login_url</code> Get the login address, equivalent to the value configured by <code>forRoot()</code></li>
</ul>
<p>Therefore, when the backend returns the corresponding authentication information during the login process, as long as the <code>ITokenModel</code> interface object is met, the <code>set</code> method can be called to store the authentication to <code>IStore</code> (the default implementation <code>LocalStorageStore</code>).</p>
<pre><code class="language-ts">constructor(&#64;Inject(DA_SERVICE_TOKEN) service: ITokenService) &#123;
  service.set(&#123; token: \`asdf\` &#125;);

  service.get().token; // output: asdf
&#125;
</code></pre>
<h2 id="storage_type"><a class="lake-link"><i data-anchor="storage_type"></i></a>Storage type</h2><p>The default is to use <code>withLocalStorage</code> persistent storage. You can change other storage methods in <code>app.config.ts</code>.</p>
<pre><code class="language-ts">providers: [
  provideHttpClient(withInterceptors([...(environment.interceptorFns ?? []), authJWTInterceptor, defaultInterceptor])),
  provideAuth(withLocalStorage()),
]
</code></pre>
<p>Contains three storage types:</p>
<h3 id="withlocalstorage"><a class="lake-link"><i data-anchor="withlocalstorage"></i></a>withLocalStorage</h3><p><code>localStorage</code> storage, <strong>not lost after closing the browser</strong>.</p>
<h3 id="withsessionstorage"><a class="lake-link"><i data-anchor="withsessionstorage"></i></a>withSessionStorage</h3><p><code>sessionStorage</code> storage, <strong>lost after closing the browser</strong>.</p>
<h3 id="withmemorystorage"><a class="lake-link"><i data-anchor="withmemorystorage"></i></a>withMemoryStorage</h3><p>Memory storage, <strong>lost after closing the browser tab</strong>.</p>
<h3 id="withcookie"><a class="lake-link"><i data-anchor="withcookie"></i></a>withCookie</h3><p><code>cookie</code> storage.</p>
`,api:"",toc:[{id:"how_to_use",title:"How to use"},{id:"storage_type",title:"Storage type",children:[{id:"withlocalstorage",title:"withLocalStorage"},{id:"withsessionstorage",title:"withSessionStorage"},{id:"withmemorystorage",title:"withMemoryStorage"},{id:"withcookie",title:"withCookie"}]}],raw:"---\norder: 15\ntitle: \n  zh-CN: \u5B58\u50A8Token\n  en-US: Store Token\ntype: Documents\n---\n\n## How to use\n\nThe `ITokenService` interface (the default implementation of `TokenService`) has only four methods and the `login_url` attribute:\n\n- `set(data: ITokenModel): boolean` Set authentication information and trigger `change`\n- `get(): ITokenModel` Get authentication information\n- `clear()` clears the authentication information and triggers the `change` parameter to be `null`\n- `change(): Observable<ITokenModel>` Subscribe to authentication information change callback\n- `login_url` Get the login address, equivalent to the value configured by `forRoot()`\n\nTherefore, when the backend returns the corresponding authentication information during the login process, as long as the `ITokenModel` interface object is met, the `set` method can be called to store the authentication to `IStore` (the default implementation `LocalStorageStore`).\n\n```ts\nconstructor(@Inject(DA_SERVICE_TOKEN) service: ITokenService) {\n  service.set({ token: `asdf` });\n\n  service.get().token; // output: asdf\n}\n```\n\n## Storage type\n\nThe default is to use `withLocalStorage` persistent storage. You can change other storage methods in `app.config.ts`.\n\n```ts\nproviders: [\n  provideHttpClient(withInterceptors([...(environment.interceptorFns ?? []), authJWTInterceptor, defaultInterceptor])),\n  provideAuth(withLocalStorage()),\n]\n```\n\nContains three storage types:\n\n### withLocalStorage\n\n`localStorage` storage, **not lost after closing the browser**.\n\n### withSessionStorage\n\n`sessionStorage` storage, **lost after closing the browser**.\n\n### withMemoryStorage\n\nMemory storage, **lost after closing the browser tab**.\n\n### withCookie\n\n`cookie` storage."},"zh-CN":{meta:{order:15,title:"\u5B58\u50A8Token",description:"ITokenService \u63A5\u53E3\uFF08\u9ED8\u8BA4\u5B9E\u73B0 TokenService\uFF09\uFF0C\u53EA\u6709\u56DB\u4E2A\u65B9\u6CD5\u53CA login_url \u5C5E\u6027\uFF1Aset(data: ITokenModel): boolean \u8BBE\u7F6E\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u540C\u65F6\u89E6\u53D1 changeget(): ITokenModel \u83B7\u53D6\u8BA4\u8BC1\u4FE1\u606Fclear() \u6E05\u9664\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u540C\u65F6\u89E6...",group:"Documents",path:"packages/auth/docs/set.zh-CN.md",url:"/auth/set/zh"},text:`<h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p><code>ITokenService</code> \u63A5\u53E3\uFF08\u9ED8\u8BA4\u5B9E\u73B0 <code>TokenService</code>\uFF09\uFF0C\u53EA\u6709\u56DB\u4E2A\u65B9\u6CD5\u53CA <code>login_url</code> \u5C5E\u6027\uFF1A</p>
<ul>
<li><code>set(data: ITokenModel): boolean</code> \u8BBE\u7F6E\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u540C\u65F6\u89E6\u53D1 <code>change</code></li>
<li><code>get(): ITokenModel</code> \u83B7\u53D6\u8BA4\u8BC1\u4FE1\u606F</li>
<li><code>clear()</code> \u6E05\u9664\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u540C\u65F6\u89E6\u53D1 <code>change</code> \u53C2\u6570\u4E3A <code>null</code></li>
<li><code>change(): Observable&lt;ITokenModel&gt;</code> \u8BA2\u9605\u8BA4\u8BC1\u4FE1\u606F\u53D8\u66F4\u56DE\u8C03</li>
<li><code>login_url</code> \u83B7\u53D6\u767B\u5F55\u5730\u5740\uFF0C\u7B49\u540C <code>forRoot()</code> \u6240\u914D\u7F6E\u7684\u503C</li>
</ul>
<p>\u56E0\u6B64\uFF0C\u5F53\u767B\u5F55\u8FC7\u7A0B\u4E2D\u540E\u7AEF\u8FD4\u56DE\u76F8\u5E94\u7684\u8BA4\u8BC1\u4FE1\u606F\u65F6\uFF0C\u53EA\u8981\u7B26\u5408 <code>ITokenModel</code> \u63A5\u53E3\u5BF9\u8C61\uFF0C\u90FD\u53EF\u4EE5\u8C03\u7528\u3000<code>set</code> \u65B9\u6CD5\u5C06\u8BA4\u8BC1\u5B58\u50A8\u81F3 <code>IStore</code> \uFF08\u9ED8\u8BA4\u5B9E\u73B0 <code>LocalStorageStore</code>\uFF09 \u5F53\u4E2D\u3002</p>
<pre><code class="language-ts">constructor(&#64;Inject(DA_SERVICE_TOKEN) service: ITokenService) &#123;
  service.set(&#123; token: \`asdf\` &#125;);

  service.get().token; // output: asdf
&#125;
</code></pre>
<h2 id="\u5B58\u50A8\u7C7B\u578B"><a class="lake-link"><i data-anchor="\u5B58\u50A8\u7C7B\u578B"></i></a>\u5B58\u50A8\u7C7B\u578B</h2><p>\u9ED8\u8BA4\u662F\u91C7\u7528 <code>withLocalStorage</code> \u6301\u4E45\u5316\u5B58\u50A8\uFF0C\u4F60\u53EF\u4EE5\u5728 <code>app.config.ts</code> \u53D8\u66F4\u5176\u4ED6\u5B58\u50A8\u65B9\u5F0F\u3002</p>
<pre><code class="language-ts">providers: [
  provideHttpClient(withInterceptors([...(environment.interceptorFns ?? []), authJWTInterceptor, defaultInterceptor])),
  provideAuth(withLocalStorage()),
]
</code></pre>
<p>\u5305\u542B\u4E09\u79CD\u5B58\u50A8\u7C7B\u578B\uFF1A</p>
<h3 id="withlocalstorage"><a class="lake-link"><i data-anchor="withlocalstorage"></i></a>withLocalStorage</h3><p><code>localStorage</code> \u5B58\u50A8\uFF0C\u5173\u6389\u6D4F\u89C8\u5668\u540E<strong>\u4E0D\u4E22\u5931</strong>\u3002</p>
<h3 id="withsessionstorage"><a class="lake-link"><i data-anchor="withsessionstorage"></i></a>withSessionStorage</h3><p><code>sessionStorage</code> \u5B58\u50A8\uFF0C\u5173\u6389\u6D4F\u89C8\u5668\u540E<strong>\u4E22\u5931</strong>\u3002</p>
<h3 id="withmemorystorage"><a class="lake-link"><i data-anchor="withmemorystorage"></i></a>withMemoryStorage</h3><p>\u5185\u5B58\u5B58\u50A8\uFF0C\u5173\u6389\u6D4F\u89C8\u5668\u6807\u7B7E\u540E<strong>\u4E22\u5931</strong>\u3002</p>
<h3 id="withcookie"><a class="lake-link"><i data-anchor="withcookie"></i></a>withCookie</h3><p>Cookie \u5B58\u50A8\u3002</p>
`,api:"",toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528"},{id:"\u5B58\u50A8\u7C7B\u578B",title:"\u5B58\u50A8\u7C7B\u578B",children:[{id:"withlocalstorage",title:"withLocalStorage"},{id:"withsessionstorage",title:"withSessionStorage"},{id:"withmemorystorage",title:"withMemoryStorage"},{id:"withcookie",title:"withCookie"}]}],raw:"---\norder: 15\ntitle: \u5B58\u50A8Token\ntype: Documents\n---\n\n## \u5982\u4F55\u4F7F\u7528\n\n`ITokenService` \u63A5\u53E3\uFF08\u9ED8\u8BA4\u5B9E\u73B0 `TokenService`\uFF09\uFF0C\u53EA\u6709\u56DB\u4E2A\u65B9\u6CD5\u53CA `login_url` \u5C5E\u6027\uFF1A\n\n- `set(data: ITokenModel): boolean` \u8BBE\u7F6E\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u540C\u65F6\u89E6\u53D1 `change`\n- `get(): ITokenModel` \u83B7\u53D6\u8BA4\u8BC1\u4FE1\u606F\n- `clear()` \u6E05\u9664\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u540C\u65F6\u89E6\u53D1 `change` \u53C2\u6570\u4E3A `null`\n- `change(): Observable<ITokenModel>` \u8BA2\u9605\u8BA4\u8BC1\u4FE1\u606F\u53D8\u66F4\u56DE\u8C03\n- `login_url` \u83B7\u53D6\u767B\u5F55\u5730\u5740\uFF0C\u7B49\u540C `forRoot()` \u6240\u914D\u7F6E\u7684\u503C\n\n\u56E0\u6B64\uFF0C\u5F53\u767B\u5F55\u8FC7\u7A0B\u4E2D\u540E\u7AEF\u8FD4\u56DE\u76F8\u5E94\u7684\u8BA4\u8BC1\u4FE1\u606F\u65F6\uFF0C\u53EA\u8981\u7B26\u5408 `ITokenModel` \u63A5\u53E3\u5BF9\u8C61\uFF0C\u90FD\u53EF\u4EE5\u8C03\u7528\u3000`set` \u65B9\u6CD5\u5C06\u8BA4\u8BC1\u5B58\u50A8\u81F3 `IStore` \uFF08\u9ED8\u8BA4\u5B9E\u73B0 `LocalStorageStore`\uFF09 \u5F53\u4E2D\u3002\n\n```ts\nconstructor(@Inject(DA_SERVICE_TOKEN) service: ITokenService) {\n  service.set({ token: `asdf` });\n\n  service.get().token; // output: asdf\n}\n```\n\n## \u5B58\u50A8\u7C7B\u578B\n\n\u9ED8\u8BA4\u662F\u91C7\u7528 `withLocalStorage` \u6301\u4E45\u5316\u5B58\u50A8\uFF0C\u4F60\u53EF\u4EE5\u5728 `app.config.ts` \u53D8\u66F4\u5176\u4ED6\u5B58\u50A8\u65B9\u5F0F\u3002\n\n```ts\nproviders: [\n  provideHttpClient(withInterceptors([...(environment.interceptorFns ?? []), authJWTInterceptor, defaultInterceptor])),\n  provideAuth(withLocalStorage()),\n]\n```\n\n\u5305\u542B\u4E09\u79CD\u5B58\u50A8\u7C7B\u578B\uFF1A\n\n### withLocalStorage\n\n`localStorage` \u5B58\u50A8\uFF0C\u5173\u6389\u6D4F\u89C8\u5668\u540E**\u4E0D\u4E22\u5931**\u3002\n\n### withSessionStorage\n\n`sessionStorage` \u5B58\u50A8\uFF0C\u5173\u6389\u6D4F\u89C8\u5668\u540E**\u4E22\u5931**\u3002\n\n### withMemoryStorage\n\n\u5185\u5B58\u5B58\u50A8\uFF0C\u5173\u6389\u6D4F\u89C8\u5668\u6807\u7B7E\u540E**\u4E22\u5931**\u3002\n\n### withCookie\n\nCookie \u5B58\u50A8\u3002"}}};codes=[];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["auth-set"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,n){e&1&&i(0,"app-docs",0),e&2&&a("codes",n.codes)("item",n.item)},dependencies:[r],encapsulation:2})};var R=[{path:"",component:f,children:[{path:"get",redirectTo:"get/zh",pathMatch:"full"},{path:"get/:lang",component:l},{path:"getting-started",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"getting-started/:lang",component:h},{path:"guard",redirectTo:"guard/zh",pathMatch:"full"},{path:"guard/:lang",component:p},{path:"qa",redirectTo:"qa/zh",pathMatch:"full"},{path:"qa/:lang",component:u},{path:"send",redirectTo:"send/zh",pathMatch:"full"},{path:"send/:lang",component:g},{path:"service",redirectTo:"service/zh",pathMatch:"full"},{path:"service/:lang",component:k},{path:"set",redirectTo:"set/zh",pathMatch:"full"},{path:"set/:lang",component:m}]}];export{R as routes};
