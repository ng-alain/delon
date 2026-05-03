import{a as te,b as Ct,c as ga,d as Ca}from"./chunk-FFBVHY5D.js";import{a as sa,b as pa}from"./chunk-4Y2KOZXI.js";import{a as vt,b as yt}from"./chunk-N2XGUFFY.js";import{e as aa,h as oa,j as ia,l as ra,m as da,n as ca,p as ma}from"./chunk-WWNZE6OK.js";import{a as ta,b as na}from"./chunk-DL4C4WRP.js";import{g as ua,h as ha}from"./chunk-XPMKW526.js";import"./chunk-ZTUWCPYL.js";import{a as ce,b as me}from"./chunk-6VUGICDU.js";import{a as I}from"./chunk-SKF2GXFR.js";import"./chunk-EBLUQ6D4.js";import{a as D}from"./chunk-GDCKMHPN.js";import{a as fa}from"./chunk-DJHXEMNR.js";import"./chunk-UTW2MQ4M.js";import"./chunk-BNVDYK7G.js";import"./chunk-JVOEVV4C.js";import{d as k,e as G,f as la}from"./chunk-VFONZWU4.js";import{C as Se,E as Ie,F as Xn,G as ea,ba as ee,f as Jn,l as Yn,u as Kn}from"./chunk-N7N5PMOX.js";import{$a as Q,$b as Ln,$g as oe,Aa as qe,Ab as q,Ag as _e,Ba as Z,C as He,Ca as On,Cb as Qe,Eb as x,Gb as M,Gg as re,H as Fn,Ha as Ze,Hb as Je,Hg as de,Ib as Ye,Ic as Ge,Jc as H,Kb as ut,Kc as b,L as Le,Lb as ht,Ma as o,Mb as ft,Mg as J,Ng as Y,Pg as K,Qb as Te,Qg as X,Rb as ae,Sb as g,Sh as qn,Ta as Wn,Tb as ie,Td as gt,Th as Zn,Ua as fe,Ub as jn,V as Rn,Vb as f,Wa as c,Wb as L,Xa as A,Xb as ze,Xc as E,Xh as Qn,Zb as $n,_b as Hn,a as be,ab as O,b as Pn,ca as B,ec as it,fa as R,gb as v,jc as Ke,ka as Ve,kc as le,la as Ue,lb as _,lc as Vn,mc as Un,nb as S,ob as Me,qb as xe,ra as ne,rb as De,sa as pt,sb as i,tb as r,tc as ke,ub as d,vb as m,zb as U,zg as Ne}from"./chunk-5O2FY4HA.js";var bt=class a{item={cols:1,urls:{"en-US":"packages/chart/docs/faq.en-US.md","zh-CN":"packages/chart/docs/faq.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><h2 id="Howtoauto-resizeofthecontainer"><a class="lake-link"><i data-anchor="Howtoauto-resizeofthecontainer"></i></a>Howtoauto-resizeofthecontainer</h2><p>The G2 uses <code>window.addEventListener('resize', this.onResize)</code> to detect a change in parent dom element's size. So you need to manually monitor the change in the size of the container and call <code>chart.forceFit()</code> to force resize.</p></section><example-resizable-index></example-resizable-index><section class="markdown"></section>`,meta:{order:100,title:"FAQ",type:"Documents"},toc:[{id:"Howtoauto-resizeofthecontainer",title:"How to auto-resize of the container?",h:2}]},"zh-CN":{content:'<section class="markdown"><h2 id="\u5982\u4F55\u81EA\u9002\u5E94\u5BB9\u5668\u5BBD\u9AD8\uFF1F"><a class="lake-link"><i data-anchor="\u5982\u4F55\u81EA\u9002\u5E94\u5BB9\u5668\u5BBD\u9AD8\uFF1F"></i></a>\u5982\u4F55\u81EA\u9002\u5E94\u5BB9\u5668\u5BBD\u9AD8\uFF1F</h2><p>G2 \u5F53\u524D\u7248\u672C\u5E76\u4E0D\u4F1A\u6839\u636E\u5BB9\u5668\u5BBD\u9AD8\u81EA\u9002\u5E94\uFF0C\u76EE\u524D\u53EA\u4F1A\u6839\u636E\u6D4F\u89C8\u5668\u7A97\u4F53\u5927\u5C0F\u624D\u4F1A\u91CD\u65B0\u53D8\u66F4\u56FE\u8868\u5C3A\u5BF8\uFF0C\u56E0\u6B64\u9700\u8981\u624B\u52A8\u76D1\u542C\u5BB9\u5668\u5927\u5C0F\u7684\u53D8\u5316\u5E76\u8C03\u7528 <code>chart.forceFit()</code> \u91CD\u65B0\u6E32\u67D3\u56FE\u8868\u5C3A\u5BF8\u3002</p></section><example-resizable-index></example-resizable-index><section class="markdown"></section>',meta:{order:100,title:"\u5E38\u89C1\u95EE\u9898",type:"Documents"},toc:[{id:"\u5982\u4F55\u81EA\u9002\u5E94\u5BB9\u5668\u5BBD\u9AD8\uFF1F",title:"\u5982\u4F55\u81EA\u9002\u5E94\u5BB9\u5668\u5BBD\u9AD8\uFF1F",h:2}]}},demo:!1};codes=[];static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["app-chart-faq"]],hostVars:2,hostBindings:function(t,n){t&2&&g("d-block","true")},decls:1,vars:2,consts:[[3,"codes","item"]],template:function(t,n){t&1&&m(0,"app-docs",0),t&2&&i("codes",n.codes)("item",n.item)},dependencies:[D],encapsulation:2})};var Mt=class a{item={cols:1,urls:{"en-US":"packages/chart/docs/getting-started.en-US.md","zh-CN":"packages/chart/docs/getting-started.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>Chart provides the well-designed abstract chart components based on the <a target="_blank" href="https://antv.alipay.com/zh-cn/g2/3.x/index.html" data-url="https://antv.alipay.com/zh-cn/g2/3.x/index.html">G2</a>. These components provide the ability to use with complex mixed view or just use along for common business usage.</p><h2 id="Usage"><a class="lake-link"><i data-anchor="Usage"></i></a>Usage</h2><h3 id="G2classlibraryloading"><a class="lake-link"><i data-anchor="G2classlibraryloading"></i></a>G2classlibraryloading</h3><p>By default, the class library CDN address has been specified in <a href="/docs/global-config" data-url="/docs/global-config">Global Configuration</a>:</p><pre class="hljs language-ts"><code>// global-config.module.ts
const alainConfig: AlainConfig = {
  chart: { 
    // The following is the default configuration. If the project cannot be accessed from the Internet, you can directly use the \`./assets***\` path for the dependent package according to the \`angular.json\` configuration
    libs: [
      'https://gw.alipayobjects.com/os/lib/antv/g2/4.1.4/dist/g2.min.js',
      'https://gw.alipayobjects.com/os/lib/antv/data-set/0.11.7/dist/data-set.js',
    ],
  },
};

export class DelonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [
        provideAlainConfig(alainConfig)
      ]
    };
  }
}</code></pre><p>Of course, you can also directly import the CDN address in <code>index.html</code>, for example:</p><pre class="hljs language-html"><code>&lt;!-- Introduce online resources, select the g2 version you need and replace the version variable --&gt;
&lt;script src="https://gw.alipayobjects.com/os/lib/antv/g2/{{version}}/dist/g2.min.js"&gt;&lt;/script&gt;</code></pre><p>You can also configure the <code>assets</code> (About <a target="_blank" href="https://angular.io/guide/workspace-config#assets-configuration" data-url="https://angular.io/guide/workspace-config#assets-configuration">assets</a> Document) option in <code>angular.json</code> to obtain the G2 library from <code>node_modules</code>, for example:</p><pre class="hljs language-json"><code>"assets": [
  {
    "glob": "**/*",
    "input": "./node_modules/@antv/g2/dist",
    "output": "/@antv/g2/"
  },
  {
    "glob": "**/*",
    "input": "./node_modules/@antv/data-set/dist",
    "output": "/@antv/data-set/"
  }
]</code></pre><p>Finally modify the <code>libs</code> parameter of the global configuration:</p><pre class="hljs language-ts"><code>// global-config.module.ts
const alainConfig: AlainConfig = {
  chart: { 
    libs: [
      './assets/@antv/g2/g2.min.js',
      './assets/@antv/data-set/data-set.js',
    ],
  },
};</code></pre><h3 id="Importmodule"><a class="lake-link"><i data-anchor="Importmodule"></i></a>Importmodule</h3><pre class="hljs language-ts"><code>// shared.module.ts
import { G2BarModule } from '@delon/chart/bar';

@NgModule({
  imports: [ G2BarModule ],
  exports: [ G2BarModule ]
})</code></pre><h2 id="CustomG2components"><a class="lake-link"><i data-anchor="CustomG2components"></i></a>CustomG2components</h2><p>Use the <a href="/chart/custom" data-url="/chart/custom">g2-chart</a> component to better implement custom charts.</p><h2 id="Configurecharttheme"><a class="lake-link"><i data-anchor="Configurecharttheme"></i></a>Configurecharttheme</h2><p>Configure the chart theme for all G2, but only provide interfaces. For the configuration chart theme parameters, please refer to <a target="_blank" href="https://g2.antv.vision/zh/docs/manual/tutorial/theme" data-url="https://g2.antv.vision/zh/docs/manual/tutorial/theme">G2 website</a>.</p><pre class="hljs language-ts"><code>// global-config.module.ts
const alainConfig: AlainConfig = {
  chart: { theme: 'dark' },
};

export class DelonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [
        provideAlainConfig(alainConfig)
      ]
    };
  }
}</code></pre></section>`,meta:{order:1,title:"Getting Started",type:"Documents"},toc:[{id:"Usage",title:"Usage",h:2,children:[{id:"G2classlibraryloading",title:"G2 class library loading",h:3},{id:"Importmodule",title:"Import module",h:3}]},{id:"CustomG2components",title:"Custom G2 components",h:2},{id:"Configurecharttheme",title:"Configure chart theme",h:2}]},"zh-CN":{content:`<section class="markdown"><p>\u56FE\u8868\u662F\u57FA\u4E8E <a target="_blank" href="https://antv.alipay.com/zh-cn/g2/3.x/index.html" data-url="https://antv.alipay.com/zh-cn/g2/3.x/index.html">G2</a> (3.0) \u7684\u57FA\u7840\u4E0A\u4E8C\u6B21\u5C01\u88C5\uFF0C\u63D0\u4F9B\u4E86\u4E1A\u52A1\u4E2D\u5E38\u7528\u7684\u56FE\u8868\u5957\u4EF6\uFF0C\u53EF\u4EE5\u5355\u72EC\u4F7F\u7528\uFF0C\u4E5F\u53EF\u4EE5\u7EC4\u5408\u8D77\u6765\u5B9E\u73B0\u590D\u6742\u7684\u5C55\u793A\u6548\u679C\u3002</p><blockquote><p>\u56FE\u8868\u7684\u4F5C\u7528\uFF0C\u662F\u5E2E\u52A9\u6211\u4EEC\u66F4\u597D\u5730\u770B\u61C2\u6570\u636E\u3002\u9009\u62E9\u4EC0\u4E48\u56FE\u8868\uFF0C\u9700\u8981\u56DE\u7B54\u7684\u9996\u8981\u95EE\u9898\u662F\u300E\u6211\u6709\u4EC0\u4E48\u6570\u636E\uFF0C\u9700\u8981\u7528\u56FE\u8868\u505A\u4EC0\u4E48\u300F\uFF0C\u800C\u4E0D\u662F \u300E\u56FE\u8868\u957F\u6210\u4EC0\u4E48\u6837\u300F \u3002</p></blockquote><table><thead><tr><th>\u5206\u7C7B\u540D</th><th>\u7EC4\u4EF6\u6E05\u5355</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>\u6BD4\u8F83\u7C7B</td><td>\u8FF7\u4F60\u67F1\u72B6\u56FE\uFF1A<code>g2-mini-bar</code><br>\u5355\u4E00\u67F1\u72B6\u56FE\uFF1A<code>g2-single-bar</code><br>\u67F1\u72B6\u56FE\uFF1A<code>g2-bar</code><br>\u96F7\u8FBE\u56FE\uFF1A<code>g2-radar</code><br>\u8FF7\u4F60\u533A\u57DF\u56FE\uFF1A<code>g2-mini-area</code><br>\u8FF7\u4F60\u8FDB\u5EA6\u6761\uFF1A<code>g2-mini-progress</code></td><td>-</td></tr><tr><td>\u5206\u5E03\u7C7B</td><td>\u6298\u7EBF\u56FE\uFF1A<code>g2-timeline</code></td><td>-</td></tr><tr><td>\u5360\u6BD4\u7C7B</td><td>\u997C\u56FE\uFF1A<code>g2-pie</code><br>\u6C34\u6CE2\u56FE\uFF1A<code>g2-water-wave</code><br>\u8FF7\u4F60\u8FDB\u5EA6\u6761\uFF1A<code>g2-mini-progress</code><br>\u8FF7\u4F60\u533A\u57DF\u56FE\uFF1A<code>g2-mini-area</code></td><td>-</td></tr><tr><td>\u533A\u95F4\u7C7B</td><td>\u4EEA\u8868\u76D8\uFF1A<code>g2-gauge</code><br>\u8FF7\u4F60\u533A\u57DF\u56FE\uFF1A<code>g2-mini-area</code></td><td>-</td></tr><tr><td>\u8D8B\u52BF\u7C7B</td><td>\u6298\u7EBF\u56FE\uFF1A<code>g2-timeline</code><br>\u8FF7\u4F60\u533A\u57DF\u56FE\uFF1A<code>g2-mini-area</code></td><td>-</td></tr><tr><td>\u65F6\u95F4\u7C7B</td><td>\u6298\u7EBF\u56FE\uFF1A<code>g2-timeline</code><br>\u8FF7\u4F60\u533A\u57DF\u56FE\uFF1A<code>g2-mini-area</code></td><td>-</td></tr><tr><td>\u5176\u5B83</td><td>\u6807\u7B7E\u4E91\uFF1A<code>g2-tag-cloud</code><br>\u56FE\u8868\u5361\u7247\uFF1A<code>g2-chart-card</code><br>\u81EA\u5B9A\u4E49\u56FE\u8868\uFF1A<code>g2-chart</code></td><td>-</td></tr></tbody></table><h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><h3 id="G2\u7C7B\u5E93\u52A0\u8F7D"><a class="lake-link"><i data-anchor="G2\u7C7B\u5E93\u52A0\u8F7D"></i></a>G2\u7C7B\u5E93\u52A0\u8F7D</h3><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5728<a href="/docs/global-config" data-url="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\u5DF2\u7ECF\u6307\u5B9A\u7C7B\u5E93 CDN \u5730\u5740\uFF1A</p><pre class="hljs language-ts"><code>// global-config.module.ts
const alainConfig: AlainConfig = {
  chart: { 
    // \u4EE5\u4E0B\u662F\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5982\u679C\u9879\u76EE\u65E0\u6CD5\u5916\u7F51\u8BBF\u95EE\uFF0C\u53EF\u4EE5\u6839\u636E \`angular.json\` \u914D\u7F6E\u5C06\u4F9D\u8D56\u5305\u76F4\u63A5\u4F7F\u7528 \`./assets***\` \u8DEF\u5F84
    libs: [
      'https://gw.alipayobjects.com/os/lib/antv/g2/4.1.4/dist/g2.min.js',
      'https://gw.alipayobjects.com/os/lib/antv/data-set/0.11.7/dist/data-set.js',
    ],
  },
};

export class DelonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [
        provideAlainConfig(alainConfig)
      ]
    };
  }
}</code></pre><p>\u5F53\u7136\u4E5F\u53EF\u4EE5\u5728 <code>index.html</code> \u76F4\u63A5\u5F15\u5165 CDN \u5730\u5740\uFF0C\u4F8B\u5982\uFF1A</p><pre class="hljs language-html"><code>&lt;!-- \u5F15\u5165\u5728\u7EBF\u8D44\u6E90\uFF0C\u9009\u62E9\u4F60\u9700\u8981\u7684 g2 \u7248\u672C\u4EE5\u66FF\u6362 version \u53D8\u91CF --&gt;
&lt;script src="https://gw.alipayobjects.com/os/lib/antv/g2/{{version}}/dist/g2.min.js"&gt;&lt;/script&gt;</code></pre><p>\u4E5F\u53EF\u4EE5\u5728 <code>angular.json</code> \u914D\u7F6E <code>assets</code> \u9009\u9879\uFF08\u6709\u5173 <a target="_blank" href="https://angular.cn/guide/workspace-config#assets-configuration" data-url="https://angular.cn/guide/workspace-config#assets-configuration">assets</a> \u6587\u6863\uFF09\uFF0C\u4ECE <code>node_modules</code> \u6765\u83B7\u5F97G2\u7C7B\u5E93\uFF0C\u4F8B\u5982\uFF1A</p><pre class="hljs language-json"><code>"assets": [
  {
    "glob": "**/*",
    "input": "./node_modules/@antv/g2/dist",
    "output": "/@antv/g2/"
  },
  {
    "glob": "**/*",
    "input": "./node_modules/@antv/data-set/dist",
    "output": "/@antv/data-set/"
  }
]</code></pre><p>\u6700\u540E\u4FEE\u6539\u5168\u5C40\u914D\u7F6E\u7684 <code>libs</code> \u53C2\u6570\u4E3A\uFF1A</p><pre class="hljs language-ts"><code>// global-config.module.ts
const alainConfig: AlainConfig = {
  chart: { 
    libs: [
      './assets/@antv/g2/g2.min.js',
      './assets/@antv/data-set/data-set.js',
    ],
  },
};</code></pre><h3 id="\u5BFC\u5165\u6A21\u5757"><a class="lake-link"><i data-anchor="\u5BFC\u5165\u6A21\u5757"></i></a>\u5BFC\u5165\u6A21\u5757</h3><pre class="hljs language-ts"><code>// shared.module.ts
import { G2BarModule } from '@delon/chart/bar';

@NgModule({
  imports: [ G2BarModule ],
  exports: [ G2BarModule ]
})</code></pre><h2 id="\u81EA\u5B9A\u4E49G2\u7EC4\u4EF6"><a class="lake-link"><i data-anchor="\u81EA\u5B9A\u4E49G2\u7EC4\u4EF6"></i></a>\u81EA\u5B9A\u4E49G2\u7EC4\u4EF6</h2><p>\u4F7F\u7528 <a href="/chart/custom" data-url="/chart/custom">g2-chart</a> \u7EC4\u4EF6\u5FEB\u901F\u81EA\u5B9A\u4E49\u4E00\u4E2A\u56FE\u8868\uFF0C\u53EF\u4EE5\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u7EC4\u4EF6\u6E32\u67D3\u8FC7\u7A0B\u4E2D\u6240\u4EA7\u751F\u7684\u5947\u602A\u95EE\u9898\u3002</p><h2 id="\u914D\u7F6E\u56FE\u8868\u4E3B\u9898"><a class="lake-link"><i data-anchor="\u914D\u7F6E\u56FE\u8868\u4E3B\u9898"></i></a>\u914D\u7F6E\u56FE\u8868\u4E3B\u9898</h2><p>\u5BF9\u6240\u6709 G2 \u8FDB\u884C\u914D\u7F6E\u56FE\u8868\u4E3B\u9898\uFF0C\u4F46\u53EA\u63D0\u4F9B\u63A5\u53E3\uFF0C\u6709\u5173\u914D\u7F6E\u56FE\u8868\u4E3B\u9898\u53C2\u6570\uFF0C\u8BF7\u53C2\u8003<a target="_blank" href="https://g2.antv.vision/zh/docs/manual/tutorial/theme" data-url="https://g2.antv.vision/zh/docs/manual/tutorial/theme">G2\u5B98\u7F51</a>\u3002</p><pre class="hljs language-ts"><code>// global-config.module.ts
const alainConfig: AlainConfig = {
  chart: { theme: 'dark' },
};

export class DelonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [
        provideAlainConfig(alainConfig)
      ]
    };
  }
}</code></pre></section>`,meta:{order:1,title:"\u5F00\u59CB\u4F7F\u7528",type:"Documents"},toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528",h:2,children:[{id:"G2\u7C7B\u5E93\u52A0\u8F7D",title:"G2\u7C7B\u5E93\u52A0\u8F7D",h:3},{id:"\u5BFC\u5165\u6A21\u5757",title:"\u5BFC\u5165\u6A21\u5757",h:3}]},{id:"\u81EA\u5B9A\u4E49G2\u7EC4\u4EF6",title:"\u81EA\u5B9A\u4E49 G2 \u7EC4\u4EF6",h:2},{id:"\u914D\u7F6E\u56FE\u8868\u4E3B\u9898",title:"\u914D\u7F6E\u56FE\u8868\u4E3B\u9898",h:2}]}},demo:!1};codes=[];static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["app-chart-getting-started"]],hostVars:2,hostBindings:function(t,n){t&2&&g("d-block","true")},decls:1,vars:2,consts:[[3,"codes","item"]],template:function(t,n){t&1&&m(0,"app-docs",0),t&2&&i("codes",n.codes)("item",n.item)},dependencies:[D],encapsulation:2})};var xt=class a{msg=R(ee);salesData=this.genData();genData(){return new Array(12).fill({}).map((e,t)=>({x:`${t+1}\u6708`,y:Math.floor(Math.random()*1e3)+200,color:t>5?"#f50":void 0}))}refresh(){this.salesData=this.genData()}handleClick(e){this.msg.info(`${e.item.x} - ${e.item.y}`)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["chart-bar-basic"]],decls:3,vars:2,consts:[["nz-button","","nzType","primary",3,"click"],["height","200",3,"clickItem","title","data"]],template:function(t,n){t&1&&(r(0,"button",0),x("click",function(){return n.refresh()}),f(1,"Refresh"),d(),r(2,"g2-bar",1),x("clickItem",function(s){return n.handleClick(s)}),d()),t&2&&(o(2),i("title","\u9500\u552E\u989D\u8D8B\u52BF")("data",n.salesData))},dependencies:[X,K,J,Y,Ca,ga],encapsulation:2})};var Dt=class a{item={cols:1,urls:{"zh-CN":"packages/chart/bar/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u4F7F\u7528\u5782\u76F4\u7684\u67F1\u5B50\u663E\u793A\u7C7B\u522B\u4E4B\u95F4\u7684\u6570\u503C\u6BD4\u8F83\u3002\u5176\u4E2D\u4E00\u4E2A\u8F74\u8868\u793A\u9700\u8981\u5BF9\u6BD4\u7684\u5206\u7C7B\u7EF4\u5EA6\uFF0C\u53E6\u4E00\u4E2A\u8F74\u4EE3\u8868\u76F8\u5E94\u7684\u6570\u503C\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-bar"><a class="lake-link"><i data-anchor="g2-bar"></i></a>g2-bar</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[title]</code></td><td>\u56FE\u8868\u6807\u9898</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[color]</code></td><td>\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>rgba(24, 144, 255, 0.85)</code></td></tr><tr><td><code>[padding]</code></td><td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td><td><code>Array&lt;number | string> | string</code></td><td><code>[32, 0, 32, 40]</code></td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[data]</code></td><td>\u6570\u636E</td><td><code>G2BarData[]</code></td><td><code>[]</code></td></tr><tr><td><code>[autoLabel]</code></td><td>\u5728\u5BBD\u5EA6\u4E0D\u8DB3\u65F6\uFF0C\u81EA\u52A8\u9690\u85CF x \u8F74\u7684 label</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[interaction]</code></td><td>\u4EA4\u4E92\u7C7B\u578B\uFF0Cnone \u65E0 element-active \u56FE\u5F62\u5143\u7D20\uFF0Cactive-region \u56FE\u8868\u7EC4\u4EF6\uFF0Cbrush \u6846\u9009\uFF0Cdrag-move \u79FB\u52A8</td><td><code>InteractionType</code></td><td><code>none</code></td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(clickItem)</code></td><td>\u70B9\u51FB\u9879\u56DE\u8C03</td><td><code>EventEmitter&lt;G2BarClickItem></code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table><h3 id="G2BarData"><a class="lake-link"><i data-anchor="G2BarData"></i></a>G2BarData</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[x]</code></td><td>x\u8F74</td><td><code>any</code></td><td>-</td></tr><tr><td><code>[y]</code></td><td>y\u8F74</td><td><code>any</code></td><td>-</td></tr><tr><td><code>[color]</code></td><td>\u8F74\u989C\u8272</td><td><code>string</code></td><td>-</td></tr></tbody></table>',meta:{title:"g2-bar",subtitle:"\u67F1\u72B6\u56FE",cols:1,type:"G2",module:"import { G2BarModule } from '@delon/chart/bar';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-bar",title:"g2-bar",h:3},{id:"G2BarData",title:"G2BarData",h:3}]}]}},demo:!0};codes=[{id:"chart-bar-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"}},summary:"<p>\u901A\u8FC7\u8BBE\u7F6E <code>x</code>\uFF0C<code>y</code> \u5C5E\u6027\uFF0C\u53EF\u4EE5\u5FEB\u901F\u7684\u6784\u5EFA\u51FA\u4E00\u4E2A\u6F02\u4EAE\u7684\u67F1\u72B6\u56FE\uFF0C\u5404\u79CD\u7EAC\u5EA6\u7684\u5173\u7CFB\u5219\u662F\u901A\u8FC7\u81EA\u5B9A\u4E49\u7684\u6570\u636E\u5C55\u73B0\u3002</p>",code:`import { Component, inject } from '@angular/core';

import { G2BarClickItem, G2BarData, G2BarModule } from '@delon/chart/bar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-bar-basic',
  template: \`
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-bar height="200" [title]="'\u9500\u552E\u989D\u8D8B\u52BF'" [data]="salesData" (clickItem)="handleClick($event)" />
  \`,
  imports: [NzButtonModule, G2BarModule]
})
export class ChartBarBasicComponent {
  private readonly msg = inject(NzMessageService);

  salesData = this.genData();

  private genData(): G2BarData[] {
    return new Array(12).fill({}).map((_i, idx) => ({
      x: \`\${idx + 1}\u6708\`,
      y: Math.floor(Math.random() * 1000) + 200,
      color: idx > 5 ? '#f50' : undefined
    }));
  }

  refresh(): void {
    this.salesData = this.genData();
  }

  handleClick(data: G2BarClickItem): void {
    this.msg.info(\`\${data.item.x} - \${data.item.y}\`);
  }
}`,lang:"ts",componentName:"ChartBarBasicComponent",point:0,name:"basic",urls:"packages/chart/bar/demo/basic.md",type:"demo"}];static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["app-chart-bar"]],hostVars:2,hostBindings:function(t,n){t&2&&g("d-block","true")},decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,n){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"chart-bar-basic"),d()()()()),t&2&&(i("codes",n.codes)("item",n.item),o(),i("nzGutter",16),o(2),i("item",n.codes[0]),v("id",n.codes[0].id))},dependencies:[D,xt,G,k,I],encapsulation:2})};var za=["*"],ka=()=>({padding:"20px 24px 8px 24px"});function Ga(a,e){if(a&1&&(U(0),f(1),q()),a&2){let t=M();o(),L(t.avatar)}}function Na(a,e){if(a&1&&(U(0),f(1),q()),a&2){let t=M(2);o(),L(t.title)}}function _a(a,e){if(a&1&&(r(0,"span",7),O(1,Na,2,1,"ng-container",4),d()),a&2){let t=M();o(),i("nzStringTemplateOutlet",t.title)}}function Sa(a,e){if(a&1&&(U(0),f(1),q()),a&2){let t=M(2);o(),L(t.action)}}function Ia(a,e){if(a&1&&(r(0,"span",8),O(1,Sa,2,1,"ng-container",4),d()),a&2){let t=M();o(),i("nzStringTemplateOutlet",t.action)}}function wa(a,e){if(a&1&&m(0,"p",9),a&2){let t=M();i("innerHTML",t.total,Ze)}}function Ba(a,e){if(a&1&&(U(0),f(1),q()),a&2){let t=M(2);o(),L(t.footer)}}function Aa(a,e){if(a&1&&(r(0,"div",11),O(1,Ba,2,1,"ng-container",4),d()),a&2){let t=M();o(),i("nzStringTemplateOutlet",t.footer)}}var se=class a{cdr=R(Ge);bordered=!1;avatar;title;action;total="";_height="auto";_orgHeight;set contentHeight(e){this._orgHeight=e,this._height=typeof e=="number"?this._height=`${e}px`:e}footer;loading=!1;ngOnChanges(){this.cdr.detectChanges()}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["g2-card"]],hostVars:2,hostBindings:function(t,n){t&2&&g("g2-card",!0)},inputs:{bordered:[2,"bordered","bordered",H],avatar:"avatar",title:"title",action:"action",total:"total",contentHeight:"contentHeight",footer:"footer",loading:[2,"loading","loading",H]},exportAs:["g2Card"],features:[qe],ngContentSelectors:za,decls:14,vars:13,consts:[[3,"nzBodyStyle","nzBordered"],[3,"nzSpinning"],[1,"g2-card__top"],[1,"g2-card__avatar"],[4,"nzStringTemplateOutlet"],[1,"g2-card__meta-wrap"],[1,"g2-card__meta"],[1,"g2-card__meta-title"],[1,"g2-card__meta-action"],[1,"g2-card__total",3,"innerHTML"],[1,"g2-card__desc"],[1,"g2-card__footer"]],template:function(t,n){t&1&&(Je(),r(0,"nz-card",0)(1,"nz-spin",1)(2,"div",2)(3,"div",3),O(4,Ga,2,1,"ng-container",4),d(),r(5,"div",5)(6,"div",6),_(7,_a,2,1,"span",7),_(8,Ia,2,1,"span",8),d(),_(9,wa,1,1,"p",9),d()(),r(10,"div",10)(11,"div"),Ye(12),d()(),_(13,Aa,2,1,"div",11),d()()),t&2&&(i("nzBodyStyle",Ke(12,ka))("nzBordered",n.bordered),o(),i("nzSpinning",n.loading),o(3),i("nzStringTemplateOutlet",n.avatar),o(3),S(n.title?7:-1),o(),S(n.action?8:-1),o(),S(n.total?9:-1),o(),ae("height",n._height),o(),g("g2-card__fixed",!!n._orgHeight),o(2),S(n.footer?13:-1))},dependencies:[sa,ta,re],encapsulation:2,changeDetection:0})};var Ea=[se],Ee=class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=A({type:a});static \u0275inj=B({imports:[E,pa,na,de,Ea]})};var Pa=["*"];function Fa(a,e){if(a&1&&(r(0,"span"),m(1,"nz-icon",1),d()),a&2){let t=M();jn(it("trend__",t.flag)),o(),i("nzType",it("caret-",t.flag))}}var ge=class a{flag;colorful=!0;reverseColor=!1;static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["trend"]],hostVars:7,hostBindings:function(t,n){t&2&&(v("data-flag",n.flag),g("trend",!0)("trend__grey",!n.colorful)("trend__reverse",n.colorful&&n.reverseColor))},inputs:{flag:"flag",colorful:[2,"colorful","colorful",H],reverseColor:[2,"reverseColor","reverseColor",H]},exportAs:["trend"],ngContentSelectors:Pa,decls:2,vars:1,consts:[[3,"class"],[3,"nzType"]],template:function(t,n){t&1&&(Je(),Ye(0),_(1,Fa,2,5,"span",0)),t&2&&(o(),S(n.flag?1:-1))},dependencies:[Ne],encapsulation:2,changeDetection:0})};var Pe=class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=A({type:a});static \u0275inj=B({imports:[E,_e]})};function Ra(a,e){a&1&&m(0,"nz-icon",4)}var Tt=class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["chart-card-style1"]],decls:9,vars:4,consts:[["action",""],["footer","\u65E5\u8BBF\u95EE\u91CF 12,423","contentHeight","46",3,"title","bordered","total","action"],["flag","up",2,"margin","0 16px 0 8px","color","rgba(0,0,0,.85)"],["flag","down",2,"margin","0 0 0 8px","color","rgba(0,0,0,.85)"],["nz-tooltip","","nzTooltipTitle","\u6307\u6807\u8BF4\u660E","nzType","info-circle"]],template:function(t,n){if(t&1&&(r(0,"g2-card",1),O(1,Ra,1,0,"ng-template",null,0,ke),f(3," \u5468\u540C\u6BD4 "),r(4,"trend",2),f(5,"12%"),d(),f(6," \u65E5\u73AF\u6BD4 "),r(7,"trend",3),f(8,"11%"),d()()),t&2){let l=Te(2);i("title","\u9500\u552E\u989D")("bordered",!0)("total","\xA5 126,560.00")("action",l)}},dependencies:[Ee,se,Ie,Se,Pe,ge],encapsulation:2})};function Wa(a,e){a&1&&m(0,"img",3)}function ja(a,e){a&1&&m(0,"nz-icon",4)}var zt=class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["chart-card-style2"]],decls:5,vars:5,consts:[["avatar",""],["action",""],["footer","\u65E5\u8BBF\u95EE\u91CF 12,423",3,"title","bordered","total","avatar","action"],["src","./assets/img/logo-color.svg",2,"width","56px","height","56px"],["nz-tooltip","","nzTooltipTitle","\u6307\u6807\u8BF4\u660E","nzType","info-circle"]],template:function(t,n){if(t&1&&(r(0,"g2-card",2),O(1,Wa,1,0,"ng-template",null,0,ke)(3,ja,1,0,"ng-template",null,1,ke),d()),t&2){let l=Te(2),s=Te(4);i("title","\u79FB\u52A8\u6307\u6807")("bordered",!0)("total","\xA5 126,560.00")("avatar",l)("action",s)}},dependencies:[Ee,se,Ie,Se,_e,Ne],encapsulation:2})};function $a(a,e){a&1&&m(0,"img",3)}function Ha(a,e){a&1&&m(0,"nz-icon",4)}var kt=class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["chart-card-style3"]],decls:5,vars:5,consts:[["avatar",""],["action",""],[3,"title","bordered","total","avatar","action"],["src","./assets/img/logo-color.svg",2,"width","56px","height","56px"],["nz-tooltip","","nzTooltipTitle","\u6307\u6807\u8BF4\u660E","nzType","info-circle"]],template:function(t,n){if(t&1&&(r(0,"g2-card",2),O(1,$a,1,0,"ng-template",null,0,ke)(3,Ha,1,0,"ng-template",null,1,ke),d()),t&2){let l=Te(2),s=Te(4);i("title","\u79FB\u52A8\u6307\u6807")("bordered",!0)("total","\xA5 126,560.00")("avatar",l)("action",s)}},dependencies:[Ee,se,Ie,Se,_e,Ne],encapsulation:2})};var Gt=class a{item={cols:2,urls:{"zh-CN":"packages/chart/card/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u56FE\u8868\u5361\u7247\uFF0C\u7528\u4E8E\u5C55\u793A\u56FE\u8868\u7684\u5361\u7247\u5BB9\u5668\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u7684\u914D\u5408\u5176\u5B83\u56FE\u8868\u5957\u4EF6\u5C55\u793A\u4E30\u5BCC\u4FE1\u606F\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-card"><a class="lake-link"><i data-anchor="g2-card"></i></a>g2-card</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>\u5361\u7247\u6807\u9898</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[avatar]</code></td><td>\u5934\u50CF</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[action]</code></td><td>\u5361\u7247\u64CD\u4F5C</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[total]</code></td><td>\u6570\u636E\u603B\u91CF\uFF08\u652F\u6301HTML\uFF09</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[footer]</code></td><td>\u5361\u7247\u5E95\u90E8</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[contentHeight]</code></td><td>\u5185\u5BB9\u533A\u57DF\u9AD8\u5EA6\uFF08\u5355\u4F4D\uFF1A<code>px</code>\uFF09</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[bordered]</code></td><td>\u662F\u5426\u663E\u793A\u8FB9\u6846</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>',meta:{title:"g2-card",subtitle:"\u56FE\u8868\u5361\u7247",cols:2,type:"G2",module:"import { G2CardModule } from '@delon/chart/card';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-card",title:"g2-card",h:3}]}]}},demo:!0};codes=[{id:"chart-card-style1",meta:{order:0,title:{"zh-CN":"\u98CE\u683C\u4E00","en-US":"Style 1"}},summary:"<p>\u98CE\u683C\u4E00\u7528\u6CD5\u3002</p>",code:`import { Component } from '@angular/core';

import { G2CardModule } from '@delon/chart/card';
import { TrendModule } from '@delon/chart/trend';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'chart-card-style1',
  template: \`
    <g2-card
      [title]="'\u9500\u552E\u989D'"
      [bordered]="true"
      [total]="'\xA5 126,560.00'"
      footer="\u65E5\u8BBF\u95EE\u91CF 12,423"
      contentHeight="46"
      [action]="action"
    >
      <ng-template #action>
        <nz-icon nz-tooltip nzTooltipTitle="\u6307\u6807\u8BF4\u660E" nzType="info-circle" />
      </ng-template>
      \u5468\u540C\u6BD4
      <trend flag="up" style="margin: 0 16px 0 8px; color: rgba(0,0,0,.85)">12%</trend>
      \u65E5\u73AF\u6BD4
      <trend flag="down" style="margin: 0 0 0 8px; color: rgba(0,0,0,.85)">11%</trend>
    </g2-card>
  \`,
  imports: [G2CardModule, NzTooltipModule, TrendModule]
})
export class ChartCardStyle1Component {}`,lang:"ts",componentName:"ChartCardStyle1Component",point:0,name:"style1",urls:"packages/chart/card/demo/style1.md",type:"demo"},{id:"chart-card-style2",meta:{order:0,title:{"zh-CN":"\u98CE\u683C\u4E8C","en-US":"Style 2"}},summary:"<p>\u98CE\u683C\u4E8C\u7528\u6CD5\u3002</p>",code:`import { Component } from '@angular/core';

import { G2CardModule } from '@delon/chart/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'chart-card-style2',
  template: \`
    <g2-card
      [title]="'\u79FB\u52A8\u6307\u6807'"
      [bordered]="true"
      [total]="'\xA5 126,560.00'"
      footer="\u65E5\u8BBF\u95EE\u91CF 12,423"
      [avatar]="avatar"
      [action]="action"
    >
      <ng-template #avatar><img style="width:56px; height: 56px" src="./assets/img/logo-color.svg" /></ng-template>
      <ng-template #action>
        <nz-icon nz-tooltip nzTooltipTitle="\u6307\u6807\u8BF4\u660E" nzType="info-circle" />
      </ng-template>
    </g2-card>
  \`,
  imports: [G2CardModule, NzTooltipModule, NzIconModule]
})
export class ChartCardStyle2Component {}`,lang:"ts",componentName:"ChartCardStyle2Component",point:1,name:"style2",urls:"packages/chart/card/demo/style2.md",type:"demo"},{id:"chart-card-style3",meta:{order:0,title:{"zh-CN":"\u98CE\u683C\u4E09","en-US":"Style 3"}},summary:"<p>\u98CE\u683C\u4E09\u7528\u6CD5\u3002</p>",code:`import { Component } from '@angular/core';

import { G2CardModule } from '@delon/chart/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'chart-card-style3',
  template: \`
    <g2-card [title]="'\u79FB\u52A8\u6307\u6807'" [bordered]="true" [total]="'\xA5 126,560.00'" [avatar]="avatar" [action]="action">
      <ng-template #avatar><img style="width:56px; height: 56px" src="./assets/img/logo-color.svg" /></ng-template>
      <ng-template #action>
        <nz-icon nz-tooltip nzTooltipTitle="\u6307\u6807\u8BF4\u660E" nzType="info-circle" />
      </ng-template>
    </g2-card>
  \`,
  imports: [G2CardModule, NzTooltipModule, NzIconModule]
})
export class ChartCardStyle3Component {}`,lang:"ts",componentName:"ChartCardStyle3Component",point:2,name:"style3",urls:"packages/chart/card/demo/style3.md",type:"demo"}];static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["app-chart-card"]],hostVars:2,hostBindings:function(t,n){t&2&&g("d-block","true")},decls:10,vars:9,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","12"],[3,"item"]],template:function(t,n){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"chart-card-style1"),d(),r(5,"code-box",3),m(6,"chart-card-style3"),d()(),r(7,"div",2)(8,"code-box",3),m(9,"chart-card-style2"),d()()()()),t&2&&(i("codes",n.codes)("item",n.item),o(),i("nzGutter",16),o(2),i("item",n.codes[0]),v("id",n.codes[0].id),o(2),i("item",n.codes[2]),v("id",n.codes[2].id),o(3),i("item",n.codes[1]),v("id",n.codes[1].id))},dependencies:[D,Tt,zt,kt,G,k,I],encapsulation:2})};var Nt=class a{dark=!1;two=!1;option1={tooltip:{formatter:"{a} <br/>{b} : {c}%"},series:[{name:"Pressure",type:"gauge",detail:{formatter:"{value}"},data:[{value:50,name:"SCORE"}]}]};option2={title:{text:"ECharts \u5165\u95E8\u793A\u4F8B"},tooltip:{},legend:{data:["\u9500\u91CF"]},xAxis:{data:["\u886C\u886B","\u7F8A\u6BDB\u886B","\u96EA\u7EBA\u886B","\u88E4\u5B50","\u9AD8\u8DDF\u978B","\u889C\u5B50"]},yAxis:{},series:[{name:"\u9500\u91CF",type:"bar",data:[5,20,36,10,10,20]}]};handleEvents(e){console.log(e)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["chart-chart-echarts-basic"]],decls:6,vars:3,consts:[[1,"mb-md"],[3,"ngModelChange","ngModel"],["nz-button","","nzType","primary",3,"click"],[3,"events","option","theme"]],template:function(t,n){t&1&&(r(0,"div",0)(1,"nz-switch",1),Ln("ngModelChange",function(s){return Hn(n.dark,s)||(n.dark=s),s}),d(),f(2," Dark "),r(3,"button",2),x("click",function(){return n.two=!n.two}),f(4,"Change Option"),d()(),r(5,"chart-echarts",3),x("events",function(s){return n.handleEvents(s)}),d()),t&2&&(o(),$n("ngModel",n.dark),o(4),i("option",n.two?n.option1:n.option2)("theme",n.dark?"dark":null))},dependencies:[Kn,Jn,Yn,ha,ua,X,K,J,Y,yt,vt],encapsulation:2})};var _t=class a{msg=R(ee);dark=!1;two=!1;on=[{eventName:"click",handler:({event:e,chart:t})=>{this.msg.info(`${e.type}: ${e.name} - ${e.value} (${t.id})`)}}];option={xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[150,230,224,218,135,147,260],type:"line"}]};static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["chart-chart-echarts-on"]],decls:1,vars:2,consts:[[3,"option","on"]],template:function(t,n){t&1&&m(0,"chart-echarts",0),t&2&&i("option",n.option)("on",n.on)},dependencies:[yt,vt],encapsulation:2})};var St=class a{item={cols:1,urls:{"zh-CN":"packages/chart/chart-echarts/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p><a target="_blank" href="https://echarts.apache.org/zh/index.html" data-url="https://echarts.apache.org/zh/index.html">ECharts</a> \u4E00\u4E2A\u57FA\u4E8E JavaScript \u7684\u5F00\u6E90\u53EF\u89C6\u5316\u56FE\u8868\u5E93\u3002\u4F7F\u7528\u61D2\u52A0\u8F7D ECharts \u811A\u672C\uFF0C\u5F00\u7BB1\u542F\u7528\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="chart-echarts"><a class="lake-link"><i data-anchor="chart-echarts"></i></a>chart-echarts</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[width]</code></td><td>\u56FE\u8868\u5BBD\u5EA6</td><td><code>number, string</code></td><td><code>100%</code></td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number, string</code></td><td><code>400px</code></td></tr><tr><td><code>[option]</code></td><td><a target="_blank" href="https://echarts.apache.org/zh/option.html#title" data-url="https://echarts.apache.org/zh/option.html#title">\u914D\u7F6E\u9879</a></td><td><code>ChartEChartsOption</code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td><a target="_blank" href="https://echarts.apache.org/zh/theme-builder.html" data-url="https://echarts.apache.org/zh/theme-builder.html">\u4E3B\u9898</a>\u914D\u7F6E</td><td><code>string, object</code></td><td>-</td></tr><tr><td><code>[on]</code></td><td>\u7B49\u540C\u4E8E ECharts <a target="_blank" href="https://echarts.apache.org/zh/api.html#echartsInstance.on" data-url="https://echarts.apache.org/zh/api.html#echartsInstance.on">on</a></td><td><code>ChartEChartsOn[]</code></td><td>-</td></tr><tr><td><code>(events)</code></td><td>\u4E8B\u4EF6\u56DE\u8C03</td><td><code>EventEmitter&lt;ChartEChartsEvent></code></td><td>-</td></tr></tbody></table>',meta:{title:"chart-echarts",subtitle:"ECharts",cols:1,type:"ECharts",module:"import { ChartEChartsModule } from '@delon/chart/chart-echarts';"},toc:[{id:"API",title:"API",h:2,children:[{id:"chart-echarts",title:"chart-echarts",h:3}]}]}},demo:!0};codes=[{id:"chart-chart-echarts-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"}},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ChartEChartsEvent, ChartEChartsModule, ChartEChartsOption } from '@delon/chart/chart-echarts';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'chart-chart-echarts-basic',
  template: \`
    <div class="mb-md">
      <nz-switch [(ngModel)]="dark" /> Dark
      <button nz-button (click)="two = !two" nzType="primary">Change Option</button>
    </div>
    <chart-echarts [option]="two ? option1 : option2" [theme]="dark ? 'dark' : null" (events)="handleEvents($event)" />
  \`,
  imports: [FormsModule, NzSwitchModule, NzButtonModule, ChartEChartsModule]
})
export class ChartChartEchartsBasicComponent {
  dark = false;
  two = false;

  option1: ChartEChartsOption = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
      {
        name: 'Pressure',
        type: 'gauge',
        detail: {
          formatter: '{value}'
        },
        data: [
          {
            value: 50,
            name: 'SCORE'
          }
        ]
      }
    ]
  };

  option2: ChartEChartsOption = {
    title: {
      text: 'ECharts \u5165\u95E8\u793A\u4F8B'
    },
    tooltip: {},
    legend: {
      data: ['\u9500\u91CF']
    },
    xAxis: {
      data: ['\u886C\u886B', '\u7F8A\u6BDB\u886B', '\u96EA\u7EBA\u886B', '\u88E4\u5B50', '\u9AD8\u8DDF\u978B', '\u889C\u5B50']
    },
    yAxis: {},
    series: [
      {
        name: '\u9500\u91CF',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  };

  handleEvents(ev: ChartEChartsEvent): void {
    console.log(ev);
  }
}`,lang:"ts",componentName:"ChartChartEchartsBasicComponent",point:0,name:"basic",urls:"packages/chart/chart-echarts/demo/basic.md",type:"demo"},{id:"chart-chart-echarts-on",meta:{order:0,title:{"zh-CN":"\u7ED1\u5B9A\u4E8B\u4EF6","en-US":"Bind event"}},summary:{"zh-CN":'<p>\u4F7F\u7528 <code>on</code> \u5C5E\u6027\uFF0C\u7B49\u540C\u4E8E ECharts <a target="_blank" href="https://echarts.apache.org/zh/api.html#echartsInstance.on" data-url="https://echarts.apache.org/zh/api.html#echartsInstance.on">on</a>\u3002</p>',"en-US":'<p>Using the <code>on</code> attribute is equivalent to ECharts <a target="_blank" href="https://echarts.apache.org/zh/api.html#echartsInstance.on" data-url="https://echarts.apache.org/zh/api.html#echartsInstance.on">on</a>.</p>'},code:`import { Component, inject } from '@angular/core';

import { ChartEChartsModule, ChartEChartsOn, ChartEChartsOption } from '@delon/chart/chart-echarts';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-chart-echarts-on',
  template: \` <chart-echarts [option]="option" [on]="on" /> \`,
  imports: [ChartEChartsModule]
})
export class ChartChartEchartsOnComponent {
  private readonly msg = inject(NzMessageService);
  dark = false;
  two = false;

  on: ChartEChartsOn[] = [
    {
      eventName: 'click',
      handler: ({ event, chart }) => {
        this.msg.info(\`\${event.type}: \${event.name} - \${event.value} (\${chart.id})\`);
      }
    }
  ];

  option: ChartEChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };
}`,lang:"ts",componentName:"ChartChartEchartsOnComponent",point:1,name:"on",urls:"packages/chart/chart-echarts/demo/on.md",type:"demo"}];static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["app-chart-chart-echarts"]],hostVars:2,hostBindings:function(t,n){t&2&&g("d-block","true")},decls:7,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,n){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"chart-chart-echarts-basic"),d(),r(5,"code-box",3),m(6,"chart-chart-echarts-on"),d()()()()),t&2&&(i("codes",n.codes)("item",n.item),o(),i("nzGutter",16),o(2),i("item",n.codes[0]),v("id",n.codes[0].id),o(2),i("item",n.codes[1]),v("id",n.codes[1].id))},dependencies:[D,Nt,_t,G,k,I],encapsulation:2})};var Va=["*"];function Ua(a,e){a&1&&m(0,"nz-skeleton")}var Xe=class a extends te{height;resizeTime=0;render=new ne;resize=new ne;destroy=new ne;install(){this.el.nativeElement.innerHTML="",this.render.emit(this.el),this.installResizeEvent()}installResizeEvent(){this.resizeTime<=0||He(window,"resize").pipe(Rn(this.destroy$),Le(Math.min(200,this.resizeTime))).subscribe(()=>this.resize.emit(this.el))}static \u0275fac=(()=>{let e;return function(n){return(e||(e=Z(a)))(n||a)}})();static \u0275cmp=c({type:a,selectors:[["g2"],["g2-custom"]],hostVars:2,hostBindings:function(t,n){t&2&&ae("height",n.height,"px")},inputs:{height:[2,"height","height",b],resizeTime:[2,"resizeTime","resizeTime",b]},outputs:{render:"render",resize:"resize",destroy:"destroy"},exportAs:["g2Custom"],features:[Q],ngContentSelectors:Va,decls:2,vars:1,template:function(t,n){t&1&&(Je(),_(0,Ua,1,0,"nz-skeleton"),Ye(1)),t&2&&S(n.loaded?-1:0)},dependencies:[ce],encapsulation:2,changeDetection:0})};var Za=[Xe],It=class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=A({type:a});static \u0275inj=B({imports:[E,me,Za]})};var wt=class a{ngZone=R(pt);render(e){this.ngZone.runOutsideAngular(()=>this.init(e.nativeElement))}init(e){let t=[{action:"\u6D4F\u89C8\u7F51\u7AD9",pv:5e4,percent:0},{action:"\u653E\u5165\u8D2D\u7269\u8F66",pv:35e3,percent:0},{action:"\u751F\u6210\u8BA2\u5355",pv:25e3,percent:0},{action:"\u652F\u4ED8\u8BA2\u5355",pv:15e3,percent:0},{action:"\u5B8C\u6210\u4EA4\u6613",pv:8e3,percent:0}].map(l=>(l.percent=l.pv/5e4,l)),n=new window.G2.Chart({container:e,autoFit:!0,height:500,width:e.clientWidth,padding:[20,120,95]});n.data(t),n.axis(!1),n.tooltip({showTitle:!1,showMarkers:!1,itemTpl:'<li style="margin-bottom:4px;list-style-type:none;padding: 0;"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}<br/><span style="padding-left: 16px;line-height: 16px;">\u6D4F\u89C8\u4EBA\u6570\uFF1A{pv}</span><br/><span style="padding-left: 16px;line-height: 16px;">\u5360\u6BD4\uFF1A{percent}</span><br/></li>'}),n.coordinate("rect").transpose().scale(1,-1),n.interval().adjust("symmetric").position("action*percent").shape("funnel").color("action",["#0050B3","#1890FF","#40A9FF","#69C0FF","#BAE7FF"]).label("action*pv",(l,s)=>({content:`${l} ${s}`}),{offset:35,labelLine:{style:{lineWidth:1,stroke:"rgba(0, 0, 0, 0.15)"}}}).tooltip("action*pv*percent",(l,s,u)=>({name:l,percent:`${+u*100}%`,pv:s})).animate({appear:{animation:"fade-in"},update:{}}),n.interaction("element-active"),n.on("beforepaint",()=>{n.annotation().clear(!0),n.getData().forEach(s=>{n.annotation().text({top:!0,position:{action:s.action,percent:"median"},content:`${+s.percent*100}%`,style:{stroke:null,fill:"#fff",textAlign:"center"}})})}),n.render()}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["chart-custom-basic"]],decls:1,vars:0,consts:[["delay","100",3,"render"]],template:function(t,n){t&1&&(r(0,"g2-custom",0),x("render",function(s){return n.render(s)}),d())},dependencies:[It,Xe],encapsulation:2})};var Bt=class a{item={cols:1,urls:{"en-US":"packages/chart/custom/index.en-US.md","zh-CN":"packages/chart/custom/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>Use <code>g2-custom</code> component to package your G2 chart.</p><h2 id="Howtouse"><a class="lake-link"><i data-anchor="Howtouse"></i></a>Howtouse</h2><p>A simple example template:</p><pre class="hljs language-ts"><code>import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: \`
  &lt;g2-custom (render)="render($event)"&gt;&lt;/g2-custom&gt;
  \`,
})
export class DemoComponent {
  render(el: ElementRef) {
    // Coding G2 code
  }
}</code></pre><h3 id="HowtodevelopG2"><a class="lake-link"><i data-anchor="HowtodevelopG2"></i></a>HowtodevelopG2</h3><p>If throw error <code>G2</code> not found, please refer to <a href="/chart/faq" data-url="/chart/faq">Frequently Asked Questions</a>.</p><h2 id="Links"><a class="lake-link"><i data-anchor="Links"></i></a>Links</h2><ul><li><p><a target="_blank" href="https://www.yuque.com/antv/g2-docs-en" data-url="https://www.yuque.com/antv/g2-docs-en">G2 Document</a></p></li><li><p><a target="_blank" href="https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html" data-url="https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html">G2 Demo</a></p></li></ul></section>`,api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-custom"><a class="lake-link"><i data-anchor="g2-custom"></i></a>g2-custom</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[delay]</code></td><td>Delayed rendering, unit: ms</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[height]</code></td><td>Height of chart container</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[resizeTime]</code></td><td>Resize event debounce time</td><td><code>number</code></td><td><code>200</code></td></tr><tr><td><code>(render)</code></td><td>Render event</td><td><code>EventEmitter&lt;ElementRef></code></td><td>-</td></tr><tr><td><code>(resize)</code></td><td>Resize event</td><td><code>EventEmitter&lt;ElementRef></code></td><td>-</td></tr><tr><td><code>(destroy)</code></td><td>Destroy event</td><td><code>EventEmitter&lt;ElementRef></code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td>Custom chart theme</td><td><code>string | LooseObject</code></td><td>-</td></tr></tbody></table>',meta:{title:"g2-chart",subtitle:"Custom Chart",cols:1,type:"G2",module:"import { G2CustomModule } from '@delon/chart/custom';"},toc:[{id:"Howtouse",title:"How to use",h:2,children:[{id:"HowtodevelopG2",title:"How to develop G2",h:3}]},{id:"Links",title:"Links",h:2},{id:"API",title:"API",h:2,children:[{id:"g2-custom",title:"g2-custom",h:3}]}]},"zh-CN":{content:`<section class="markdown"><p>\u4F7F\u7528 <code>g2-custom</code> \u7EC4\u4EF6\u53EF\u4EE5\u66F4\u5FEB\u901F\u7684\u5C01\u88C5\u81EA\u5DF1\u7684\u56FE\u8868\u7EC4\u4EF6\u3002</p><h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p>\u4E00\u4E2A\u7B80\u5355\u793A\u4F8B\u6A21\u677F\uFF1A</p><pre class="hljs language-ts"><code>import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: \`
  &lt;g2-custom (render)="render($event)"&gt;&lt;/g2-custom&gt;
  \`,
})
export class DemoComponent {
  render(el: ElementRef) {
    // \u5F00\u59CB\u7F16\u5199 G2 \u4EE3\u7801
  }
}</code></pre><h3 id="\u5982\u4F55\u5F00\u53D1G2"><a class="lake-link"><i data-anchor="\u5982\u4F55\u5F00\u53D1G2"></i></a>\u5982\u4F55\u5F00\u53D1G2</h3><p>\u53EF\u80FD\u4F60\u4F1A\u9047\u5230\u672A\u627E\u5230 <code>G2</code>\uFF0C\u8BF7\u53C2\u8003<a href="/chart/faq" data-url="/chart/faq">\u5E38\u89C1\u95EE\u9898</a>\u3002</p><h2 id="\u94FE\u63A5"><a class="lake-link"><i data-anchor="\u94FE\u63A5"></i></a>\u94FE\u63A5</h2><ul><li><p><a target="_blank" href="https://www.yuque.com/antv/g2-docs" data-url="https://www.yuque.com/antv/g2-docs">G2 \u6587\u6863</a></p></li><li><p><a target="_blank" href="https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html" data-url="https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html">G2 \u793A\u4F8B</a></p></li></ul></section>`,api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-custom"><a class="lake-link"><i data-anchor="g2-custom"></i></a>g2-custom</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[height]</code></td><td>\u9AD8</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[resizeTime]</code></td><td>resize \u4E8B\u4EF6\u53BB\u6296\u65F6\u957F</td><td><code>number</code></td><td><code>200</code></td></tr><tr><td><code>(render)</code></td><td>\u6E32\u67D3\u4E8B\u4EF6</td><td><code>EventEmitter&lt;ElementRef></code></td><td>-</td></tr><tr><td><code>(resize)</code></td><td>resize \u4E8B\u4EF6</td><td><code>EventEmitter&lt;ElementRef></code></td><td>-</td></tr><tr><td><code>(destroy)</code></td><td>\u9500\u6BC1\u4E8B\u4EF6</td><td><code>EventEmitter&lt;ElementRef></code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr></tbody></table>',meta:{title:"g2-chart",subtitle:"\u81EA\u5B9A\u4E49\u56FE\u8868",cols:1,type:"G2",module:"import { G2CustomModule } from '@delon/chart/custom';"},toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528",h:2,children:[{id:"\u5982\u4F55\u5F00\u53D1G2",title:"\u5982\u4F55\u5F00\u53D1 G2",h:3}]},{id:"\u94FE\u63A5",title:"\u94FE\u63A5",h:2},{id:"API",title:"API",h:2,children:[{id:"g2-custom",title:"g2-custom",h:3}]}]}},demo:!0};codes=[{id:"chart-custom-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:{"zh-CN":'<p>\u6A21\u4EFF\u81EA <a target="_blank" href="https://antv.alipay.com/zh-cn/g2/3.x/demo/funnel/basic.html" data-url="https://antv.alipay.com/zh-cn/g2/3.x/demo/funnel/basic.html">antv\u57FA\u7840\u6F0F\u6597\u56FE</a>\u3002</p>',"en-US":'<p>Copy <a target="_blank" href="https://antv.alipay.com/zh-cn/g2/3.x/demo/funnel/basic.html" data-url="https://antv.alipay.com/zh-cn/g2/3.x/demo/funnel/basic.html">Basic Funnel Chart</a>\u3002</p>'},code:`import { Component, ElementRef, NgZone, inject } from '@angular/core';

import type { Chart } from '@antv/g2';

import { G2CustomModule } from '@delon/chart/custom';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'chart-custom-basic',
  template: \` <g2-custom delay="100" (render)="render($event)" /> \`,
  imports: [G2CustomModule]
})
export class ChartCustomBasicComponent {
  private readonly ngZone = inject(NgZone);

  render(el: ElementRef<HTMLDivElement>): void {
    this.ngZone.runOutsideAngular(() => this.init(el.nativeElement));
  }

  private init(el: HTMLElement): void {
    const data: Array<{ action: string; pv: number; percent: number }> = [
      { action: '\u6D4F\u89C8\u7F51\u7AD9', pv: 50000, percent: 0 },
      { action: '\u653E\u5165\u8D2D\u7269\u8F66', pv: 35000, percent: 0 },
      { action: '\u751F\u6210\u8BA2\u5355', pv: 25000, percent: 0 },
      { action: '\u652F\u4ED8\u8BA2\u5355', pv: 15000, percent: 0 },
      { action: '\u5B8C\u6210\u4EA4\u6613', pv: 8000, percent: 0 }
    ].map(row => {
      row.percent = row.pv / 50000;
      return row;
    });
    const chart: Chart = new (window as NzSafeAny).G2.Chart({
      container: el,
      autoFit: true,
      height: 500,
      width: el.clientWidth,
      padding: [20, 120, 95]
    });
    chart.data(data);
    chart.axis(false);
    chart.tooltip({
      showTitle: false,
      showMarkers: false,
      itemTpl:
        '<li style="margin-bottom:4px;list-style-type:none;padding: 0;">' +
        '<span style="background-color:{color};" class="g2-tooltip-marker"></span>' +
        '{name}<br/>' +
        '<span style="padding-left: 16px;line-height: 16px;">\u6D4F\u89C8\u4EBA\u6570\uFF1A{pv}</span><br/>' +
        '<span style="padding-left: 16px;line-height: 16px;">\u5360\u6BD4\uFF1A{percent}</span><br/>' +
        '</li>'
    });

    chart.coordinate('rect').transpose().scale(1, -1);
    chart
      .interval()
      .adjust('symmetric')
      .position('action*percent')
      .shape('funnel')
      .color('action', ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF'])
      .label(
        'action*pv',
        (action, pv) => {
          return {
            content: \`\${action} \${pv}\`
          };
        },
        {
          offset: 35,
          labelLine: {
            style: {
              lineWidth: 1,
              stroke: 'rgba(0, 0, 0, 0.15)'
            }
          }
        }
      )
      .tooltip('action*pv*percent', (action, pv, percent) => {
        return {
          name: action,
          percent: \`\${+percent * 100}%\`,
          pv
        };
      })
      .animate({
        appear: {
          animation: 'fade-in'
        },
        update: {
          // annotation: 'fade-in'
        }
      });

    chart.interaction('element-active');

    chart.on('beforepaint', () => {
      chart.annotation().clear(true);
      const chartData = chart.getData();
      // \u4E2D\u95F4\u6807\u7B7E\u6587\u672C
      chartData.forEach(obj => {
        chart.annotation().text({
          top: true,
          position: {
            action: obj.action,
            percent: 'median'
          },
          content: \`\${+obj.percent * 100}%\`, // \u663E\u793A\u7684\u6587\u672C\u5185\u5BB9
          style: {
            stroke: null,
            fill: '#fff',
            textAlign: 'center'
          }
        });
      });
    });

    chart.render();
  }
}`,lang:"ts",componentName:"ChartCustomBasicComponent",point:0,name:"basic",urls:"packages/chart/custom/demo/basic.md",type:"demo"}];static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["app-chart-custom"]],hostVars:2,hostBindings:function(t,n){t&2&&g("d-block","true")},decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,n){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"chart-custom-basic"),d()()()()),t&2&&(i("codes",n.codes)("item",n.item),o(),i("nzGutter",16),o(2),i("item",n.codes[0]),v("id",n.codes[0].id))},dependencies:[D,wt,G,k,I],encapsulation:2})};function Qa(a,e){a&1&&m(0,"nz-skeleton")}var et=class a extends te{title;height;color="#2f9cff";bgColor;format;percent;padding=[10,10,30,10];install(){this.winG2.registerShape("point","pointer",{draw(T,N){let C=N.addGroup({}),y=this.parsePoint({x:0,y:0});return C.addShape("line",{attrs:{x1:y.x,y1:y.y,x2:T.x,y2:T.y,stroke:T.color,lineWidth:2.5,lineCap:"round"}}),C.addShape("circle",{attrs:{x:y.x,y:y.y,r:5.75,stroke:T.color,lineWidth:2,fill:"#fff"}}),C}});let{el:e,height:t,padding:n,format:l,theme:s}=this,u=this._chart=new this.winG2.Chart({container:e.nativeElement,autoFit:!0,height:t,padding:n,theme:s});u.legend(!1),u.animate(!1),u.tooltip(!1),u.coordinate("polar",{startAngle:-9/8*Math.PI,endAngle:1/8*Math.PI,radius:.75}),u.scale("value",{min:0,max:100,nice:!0,tickCount:6}),u.axis("1",!1),u.axis("value",{line:null,label:{offset:-14,formatter:l},tickLine:null,grid:null}),u.point().position("value*1").shape("pointer"),this.ready.next(u),this.changeData(),u.render()}changeData(){let{_chart:e,percent:t,color:n,bgColor:l,title:s}=this;if(!e)return;let u=[{name:s,value:t}],T=u[0].value;e.annotation().clear(!0),e.geometries[0].color(n),e.annotation().arc({top:!1,start:[0,.95],end:[100,.95],style:{stroke:l,lineWidth:12,lineDash:null}}),e.annotation().arc({start:[0,.95],end:[u[0].value,.95],style:{stroke:n,lineWidth:12,lineDash:null}}),e.annotation().text({position:["50%","85%"],content:s,style:{fontSize:12,fill:this.theme==="dark"?"rgba(255, 255, 255, 0.43)":"rgba(0, 0, 0, 0.43)",textAlign:"center"}}),e.annotation().text({position:["50%","90%"],content:`${T} %`,style:{fontSize:20,fill:this.theme==="dark"?"rgba(255, 255, 255, 0.85)":"rgba(0, 0, 0, 0.85)",textAlign:"center"},offsetY:15}),e.changeData(u)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=Z(a)))(n||a)}})();static \u0275cmp=c({type:a,selectors:[["g2-gauge"]],hostVars:2,hostBindings:function(t,n){t&2&&g("g2-gauge",!0)},inputs:{title:"title",height:[2,"height","height",b],color:"color",bgColor:"bgColor",format:"format",percent:[2,"percent","percent",b],padding:"padding"},exportAs:["g2Gauge"],features:[Q],decls:1,vars:1,template:function(t,n){t&1&&_(0,Qa,1,0,"nz-skeleton"),t&2&&S(n.loaded?-1:0)},dependencies:[ce],encapsulation:2,changeDetection:0})};var Ya=[et],At=class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=A({type:a});static \u0275inj=B({imports:[E,me,Ya]})};var Et=class a{percent=36;color="#2f9cff";time$;constructor(e,t){e.isBrowser&&(this.time$=setInterval(()=>{this.percent=parseInt((Math.random()*100).toString(),10),this.color=this.percent>50?"#f50":"#2f9cff",t.detectChanges()},1e3))}ngOnDestroy(){clearInterval(this.time$)}static \u0275fac=function(t){return new(t||a)(fe(gt),fe(Ge))};static \u0275cmp=c({type:a,selectors:[["chart-gauge-basic"]],decls:1,vars:3,consts:[["height","164",3,"title","percent","color"]],template:function(t,n){t&1&&m(0,"g2-gauge",0),t&2&&i("title","\u6838\u9500\u7387")("percent",n.percent)("color",n.color)},dependencies:[At,et],encapsulation:2,changeDetection:0})};var Pt=class a{item={cols:1,urls:{"zh-CN":"packages/chart/gauge/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u4E00\u79CD\u8FDB\u5EA6\u5C55\u793A\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u66F4\u76F4\u89C2\u7684\u5C55\u793A\u5F53\u524D\u7684\u8FDB\u5C55\u60C5\u51B5\uFF0C\u901A\u5E38\u4E5F\u53EF\u8868\u793A\u5360\u6BD4\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-gauge"><a class="lake-link"><i data-anchor="g2-gauge"></i></a>g2-gauge</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[title]</code></td><td>\u56FE\u8868\u6807\u9898</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[color]</code></td><td>\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>#2F9CFF</code></td></tr><tr><td><code>[bgColor]</code></td><td>\u56FE\u8868\u80CC\u666F\u8272</td><td><code>string</code></td><td><code>#F0F2F5</code></td></tr><tr><td><code>[percent]</code></td><td>\u8FDB\u5EA6\u6BD4\u4F8B</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[padding]</code></td><td>\u5185\u8FB9\u8DDD</td><td><code>Array&lt;number | string></code></td><td><code>[10, 10, 30, 10]</code></td></tr><tr><td><code>[format]</code></td><td>\u5750\u6807\u8F74\u683C\u5F0F</td><td><code>(text: string, item: {}, index: number) => string</code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table>',meta:{title:"g2-gauge",subtitle:"\u4EEA\u8868\u76D8",cols:1,type:"G2",module:"import { G2GaugeModule } from '@delon/chart/gauge';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-gauge",title:"g2-gauge",h:3}]}]}},demo:!0};codes=[{id:"chart-gauge-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

import { G2GaugeModule } from '@delon/chart/gauge';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'chart-gauge-basic',
  template: \` <g2-gauge [title]="'\u6838\u9500\u7387'" height="164" [percent]="percent" [color]="color" /> \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [G2GaugeModule]
})
export class ChartGaugeBasicComponent implements OnDestroy {
  percent = 36;
  color = '#2f9cff';
  private time$: NzSafeAny;

  constructor(platform: Platform, cdr: ChangeDetectorRef) {
    if (!platform.isBrowser) return;

    this.time$ = setInterval(() => {
      this.percent = parseInt((Math.random() * 100).toString(), 10);
      this.color = this.percent > 50 ? '#f50' : '#2f9cff';
      cdr.detectChanges();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.time$);
  }
}`,lang:"ts",componentName:"ChartGaugeBasicComponent",point:0,name:"basic",urls:"packages/chart/gauge/demo/basic.md",type:"demo"}];static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["app-chart-gauge"]],hostVars:2,hostBindings:function(t,n){t&2&&g("d-block","true")},decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,n){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"chart-gauge-basic"),d()()()()),t&2&&(i("codes",n.codes)("item",n.item),o(),i("nzGutter",16),o(2),i("item",n.codes[0]),v("id",n.codes[0].id))},dependencies:[D,Et,G,k,I],encapsulation:2})};var Ce=class a extends te{color="rgba(24, 144, 255, 0.2)";borderColor="#1890FF";borderWidth=2;height=56;fit=!0;line=!1;animate=!0;xAxis;yAxis;padding=[8,8,8,8];data=[];yTooltipSuffix="";tooltipType="default";clickItem=new ne;install(){let{el:e,fit:t,height:n,padding:l,xAxis:s,yAxis:u,yTooltipSuffix:T,tooltipType:N,line:C,theme:y,animate:j,color:W,borderColor:w,borderWidth:$}=this,P=this._chart=new this.winG2.Chart({container:e.nativeElement,autoFit:t,height:n,padding:l,theme:y});P.animate(j),!s&&!u&&P.axis(!1),s?P.axis("x",s):P.axis("x",!1),u?P.axis("y",u):P.axis("y",!1),P.legend(!1),P.tooltip(Ct(N)),P.area().position("x*y").color(W).tooltip("x*y",(z,F)=>({name:z,value:F+T})).shape("smooth"),C&&P.line().position("x*y").shape("smooth").color(w).size($).tooltip(!1),P.on("plot:click",z=>{let F=this._chart.getSnapRecords({x:z.x,y:z.y});this.ngZone.run(()=>this.clickItem.emit({item:F[0]._origin,ev:z}))}),this.ready.next(P),this.changeData(),P.render()}changeData(){let{_chart:e,data:t}=this;!e||!Array.isArray(t)||t.length<=0||e.changeData(t)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=Z(a)))(n||a)}})();static \u0275cmp=c({type:a,selectors:[["g2-mini-area"]],hostVars:2,hostBindings:function(t,n){t&2&&ae("height",n.height,"px")},inputs:{color:"color",borderColor:"borderColor",borderWidth:[2,"borderWidth","borderWidth",b],height:[2,"height","height",b],fit:[2,"fit","fit",H],line:[2,"line","line",H],animate:[2,"animate","animate",H],xAxis:"xAxis",yAxis:"yAxis",padding:"padding",data:"data",yTooltipSuffix:"yTooltipSuffix",tooltipType:"tooltipType"},outputs:{clickItem:"clickItem"},exportAs:["g2MiniArea"],features:[Q],decls:0,vars:0,template:function(t,n){},encapsulation:2,changeDetection:0})};var Fe=class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=A({type:a});static \u0275inj=B({imports:[E]})};var Ft=class a{msg=R(ee);visitData=this.genData();genData(){let e=new Date().getTime(),t=[];for(let n=0;n<20;n+=1)t.push({x:oe(new Date(e+1e3*60*60*24*n),"yyyy-MM-dd"),y:Math.floor(Math.random()*100)+10});return t}refresh(){this.visitData=this.genData()}handleClick(e){this.msg.info(`${e.item.x} - ${e.item.y}`)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["chart-mini-area-basic"]],decls:3,vars:1,consts:[["nz-button","","nzType","primary",3,"click"],["line","","color","#cceafe","height","45",3,"clickItem","data"]],template:function(t,n){t&1&&(r(0,"button",0),x("click",function(){return n.refresh()}),f(1,"Refresh"),d(),r(2,"g2-mini-area",1),x("clickItem",function(s){return n.handleClick(s)}),d()),t&2&&(o(2),i("data",n.visitData))},dependencies:[X,K,J,Y,Fe,Ce],encapsulation:2})};var Rt=class a{visitData=[];ngOnInit(){let e=new Date().getTime();for(let t=0;t<20;t+=1)this.visitData.push({x:oe(new Date(e+1e3*60*60*24*t),"yyyy-MM-dd"),y:Math.floor(Math.random()*100)+10})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["chart-mini-area-tooltip"]],decls:1,vars:1,consts:[["line","","color","#cceafe","height","45","yTooltipSuffix","%",3,"data"]],template:function(t,n){t&1&&m(0,"g2-mini-area",0),t&2&&i("data",n.visitData)},dependencies:[Fe,Ce],encapsulation:2})};var Ot=class a{visitData=[];ngOnInit(){let e=new Date().getTime();for(let t=0;t<20;t+=1)this.visitData.push({x:oe(new Date(e+1e3*60*60*24*t),"yyyy-MM-dd"),y:Math.floor(Math.random()*100)+10})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["chart-mini-area-mini"]],decls:1,vars:1,consts:[["line","","color","#cceafe","height","45","tooltipType","mini",3,"data"]],template:function(t,n){t&1&&m(0,"g2-mini-area",0),t&2&&i("data",n.visitData)},dependencies:[Fe,Ce],encapsulation:2})};var Wt=class a{item={cols:2,urls:{"zh-CN":"packages/chart/mini-area/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u9762\u79EF\u56FE\u53C8\u53EB\u533A\u57DF\u56FE\u3002 \u5B83\u662F\u5728\u6298\u7EBF\u56FE\u7684\u57FA\u7840\u4E4B\u4E0A\u5F62\u6210\u7684, \u5B83\u5C06\u6298\u7EBF\u56FE\u4E2D\u6298\u7EBF\u4E0E\u81EA\u53D8\u91CF\u5750\u6807\u8F74\u4E4B\u95F4\u7684\u533A\u57DF\u4F7F\u7528\u989C\u8272\u6216\u8005\u7EB9\u7406\u586B\u5145\uFF0C\u8FD9\u6837\u4E00\u4E2A\u586B\u5145\u533A\u57DF\u6211\u4EEC\u53EB\u505A\u9762\u79EF\uFF0C\u989C\u8272\u7684\u586B\u5145\u53EF\u4EE5\u66F4\u597D\u7684\u7A81\u51FA\u8D8B\u52BF\u4FE1\u606F\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-mini-area"><a class="lake-link"><i data-anchor="g2-mini-area"></i></a>g2-mini-area</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[color]</code></td><td>\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>rgba(24, 144, 255, 0.2)</code></td></tr><tr><td><code>[borderColor]</code></td><td>\u56FE\u8868\u8FB9\u989C\u8272</td><td><code>string</code></td><td><code>#1890FF</code></td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td><code>56</code></td></tr><tr><td><code>[line]</code></td><td>\u662F\u5426\u663E\u793A\u63CF\u8FB9</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[animate]</code></td><td>\u662F\u5426\u663E\u793A\u52A8\u753B</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[padding]</code></td><td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td><td><code>array</code></td><td><code>[8, 8, 8, 8]</code></td></tr><tr><td><code>[xAxis]</code></td><td><a target="_blank" href="https://www.yuque.com/antv/g2-docs/api-chart#ef1eaedc" data-url="https://www.yuque.com/antv/g2-docs/api-chart#ef1eaedc">x \u8F74\u914D\u7F6E</a></td><td><code>object</code></td><td>-</td></tr><tr><td><code>[yAxis]</code></td><td><a target="_blank" href="https://www.yuque.com/antv/g2-docs/api-chart#ef1eaedc" data-url="https://www.yuque.com/antv/g2-docs/api-chart#ef1eaedc">y \u8F74\u914D\u7F6E</a></td><td><code>object</code></td><td>-</td></tr><tr><td><code>[yTooltipSuffix]</code></td><td>y \u8F74Tooltip\u540E\u7F00\uFF0C\u4E00\u822C\u6307\u5B9A\u5355\u4F4D</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[tooltipType]</code></td><td>Tooltip\u663E\u793A\u7C7B\u578B</td><td><code>'mini','default'</code></td><td><code>'default'</code></td></tr><tr><td><code>[data]</code></td><td>\u6570\u636E</td><td><code>G2MiniAreaData[]</code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(clickItem)</code></td><td>\u70B9\u51FB\u9879\u56DE\u8C03</td><td><code>EventEmitter&lt;G2MiniAreaClickItem></code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table><h3 id="G2MiniAreaData"><a class="lake-link"><i data-anchor="G2MiniAreaData"></i></a>G2MiniAreaData</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[x]</code></td><td>x\u8F74</td><td><code>any</code></td><td>-</td></tr><tr><td><code>[y]</code></td><td>y\u8F74</td><td><code>any</code></td><td>-</td></tr></tbody></table>`,meta:{title:"g2-mini-area",subtitle:"\u8FF7\u4F60\u533A\u57DF\u56FE",cols:2,type:"G2",module:"import { G2MiniAreaModule } from '@delon/chart/mini-area';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-mini-area",title:"g2-mini-area",h:3},{id:"G2MiniAreaData",title:"G2MiniAreaData",h:3}]}]}},demo:!0};codes=[{id:"chart-mini-area-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Component, inject } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniAreaClickItem, G2MiniAreaData, G2MiniAreaModule } from '@delon/chart/mini-area';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-mini-area-basic',
  template: \`
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-mini-area line color="#cceafe" height="45" [data]="visitData" (clickItem)="handleClick($event)" />
  \`,
  imports: [NzButtonModule, G2MiniAreaModule]
})
export class ChartMiniAreaBasicComponent {
  private readonly msg = inject(NzMessageService);
  visitData = this.genData();

  private genData(): G2MiniAreaData[] {
    const beginDay = new Date().getTime();
    const res: G2MiniAreaData[] = [];
    for (let i = 0; i < 20; i += 1) {
      res.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10
      });
    }
    return res;
  }

  refresh(): void {
    this.visitData = this.genData();
  }

  handleClick(data: G2MiniAreaClickItem): void {
    this.msg.info(\`\${data.item.x} - \${data.item.y}\`);
  }
}`,lang:"ts",componentName:"ChartMiniAreaBasicComponent",point:0,name:"basic",urls:"packages/chart/mini-area/demo/basic.md",type:"demo"},{id:"chart-mini-area-tooltip",meta:{order:1,title:"Tooltip"},summary:"<p>\u6307\u5B9A <code>yTooltipSuffix</code> \u503C\u6765\u8868\u793A\u5355\u4F4D\u3002</p>",code:`import { Component, OnInit } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniAreaData, G2MiniAreaModule } from '@delon/chart/mini-area';

@Component({
  selector: 'chart-mini-area-tooltip',
  template: \` <g2-mini-area line color="#cceafe" height="45" [data]="visitData" yTooltipSuffix="%" /> \`,
  imports: [G2MiniAreaModule]
})
export class ChartMiniAreaTooltipComponent implements OnInit {
  visitData: G2MiniAreaData[] = [];
  ngOnInit(): void {
    const beginDay = new Date().getTime();
    for (let i = 0; i < 20; i += 1) {
      this.visitData.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10
      });
    }
  }
}`,lang:"ts",componentName:"ChartMiniAreaTooltipComponent",point:1,name:"tooltip",urls:"packages/chart/mini-area/demo/tooltip.md",type:"demo"},{id:"chart-mini-area-mini",meta:{order:2,title:"Mini tooltip"},summary:"<p>\u6307\u5B9A <code>tooltipType</code> \u503C\u6765\u8868\u793A\u7B80\u5316tooltip\uFF0C\u53EF\u4EE5\u66F4\u597D\u7684\u8FD0\u7528\u4E8E\u8868\u683C\u3002</p>",code:`import { Component, OnInit } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniAreaData, G2MiniAreaModule } from '@delon/chart/mini-area';

@Component({
  selector: 'chart-mini-area-mini',
  template: \` <g2-mini-area line color="#cceafe" height="45" [data]="visitData" tooltipType="mini" /> \`,
  imports: [G2MiniAreaModule]
})
export class ChartMiniAreaMiniComponent implements OnInit {
  visitData: G2MiniAreaData[] = [];
  ngOnInit(): void {
    const beginDay = new Date().getTime();
    for (let i = 0; i < 20; i += 1) {
      this.visitData.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10
      });
    }
  }
}`,lang:"ts",componentName:"ChartMiniAreaMiniComponent",point:2,name:"mini",urls:"packages/chart/mini-area/demo/mini.md",type:"demo"}];static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["app-chart-mini-area"]],hostVars:2,hostBindings:function(t,n){t&2&&g("d-block","true")},decls:10,vars:9,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","12"],[3,"item"]],template:function(t,n){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"chart-mini-area-basic"),d(),r(5,"code-box",3),m(6,"chart-mini-area-mini"),d()(),r(7,"div",2)(8,"code-box",3),m(9,"chart-mini-area-tooltip"),d()()()()),t&2&&(i("codes",n.codes)("item",n.item),o(),i("nzGutter",16),o(2),i("item",n.codes[0]),v("id",n.codes[0].id),o(2),i("item",n.codes[2]),v("id",n.codes[2].id),o(3),i("item",n.codes[1]),v("id",n.codes[1].id))},dependencies:[D,Ft,Rt,Ot,G,k,I],encapsulation:2})};var ve=class a extends te{color="#1890FF";height=0;borderWidth=5;padding=[8,8,8,8];data=[];yTooltipSuffix="";tooltipType="default";clickItem=new ne;install(){let{el:e,height:t,padding:n,yTooltipSuffix:l,tooltipType:s,theme:u,color:T,borderWidth:N}=this,C=this._chart=new this.winG2.Chart({container:e.nativeElement,autoFit:!0,height:t,padding:n,theme:u});C.scale({x:{type:"cat"},y:{min:0}}),C.legend(!1),C.axis(!1),C.tooltip(Ct(s,{showCrosshairs:!1})),C.interval().position("x*y").color("x*y",(y,j)=>{let W=this.data.find(w=>w.x===y&&w.y===j);return W&&W.color?W.color:T}).size(N).tooltip("x*y",(y,j)=>({name:y,value:j+l})),C.on("interval:click",y=>{this.ngZone.run(()=>this.clickItem.emit({item:y.data?.data,ev:y}))}),this.ready.next(C),this.changeData(),C.render()}changeData(){let{_chart:e,data:t}=this;!e||!Array.isArray(t)||t.length<=0||e.changeData(t)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=Z(a)))(n||a)}})();static \u0275cmp=c({type:a,selectors:[["g2-mini-bar"]],hostVars:2,hostBindings:function(t,n){t&2&&ae("height",n.height,"px")},inputs:{color:"color",height:[2,"height","height",b],borderWidth:[2,"borderWidth","borderWidth",b],padding:"padding",data:"data",yTooltipSuffix:"yTooltipSuffix",tooltipType:"tooltipType"},outputs:{clickItem:"clickItem"},exportAs:["g2MiniBar"],features:[Q],decls:0,vars:0,template:function(t,n){},encapsulation:2,changeDetection:0})};var Re=class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=A({type:a});static \u0275inj=B({imports:[E]})};var jt=class a{msg=R(ee);visitData=this.genData();genData(){let e=new Date().getTime(),t=[];for(let n=0;n<20;n+=1)t.push({x:oe(new Date(e+1e3*60*60*24*n),"yyyy-MM-dd"),y:Math.floor(Math.random()*100)+10});return t}refresh(){this.visitData=this.genData()}handleClick(e){this.msg.info(`${e.item.x} - ${e.item.y}`)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["chart-mini-bar-basic"]],decls:3,vars:1,consts:[["nz-button","","nzType","primary",3,"click"],["height","45",3,"clickItem","data"]],template:function(t,n){t&1&&(r(0,"button",0),x("click",function(){return n.refresh()}),f(1,"Refresh"),d(),r(2,"g2-mini-bar",1),x("clickItem",function(s){return n.handleClick(s)}),d()),t&2&&(o(2),i("data",n.visitData))},dependencies:[X,K,J,Y,Re,ve],encapsulation:2})};var $t=class a{visitData=[];ngOnInit(){let e=new Date().getTime();for(let t=0;t<20;t+=1)this.visitData.push({x:oe(new Date(e+1e3*60*60*24*t),"yyyy-MM-dd"),y:Math.floor(Math.random()*100)+10})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["chart-mini-bar-mini"]],decls:1,vars:1,consts:[["height","45","yTooltipSuffix","%","tooltipType","mini",3,"data"]],template:function(t,n){t&1&&m(0,"g2-mini-bar",0),t&2&&i("data",n.visitData)},dependencies:[Re,ve],encapsulation:2})};var Ht=class a{visitData=[];ngOnInit(){let e=new Date().getTime();for(let t=0;t<20;t+=1)this.visitData.push({x:oe(new Date(e+1e3*60*60*24*t),"yyyy-MM-dd"),y:Math.floor(Math.random()*100)+10})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["chart-mini-bar-tooltip"]],decls:1,vars:1,consts:[["height","45","yTooltipSuffix","%",3,"data"]],template:function(t,n){t&1&&m(0,"g2-mini-bar",0),t&2&&i("data",n.visitData)},dependencies:[Re,ve],encapsulation:2})};var Lt=class a{item={cols:2,urls:{"zh-CN":"packages/chart/mini-bar/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u8FF7\u4F60\u67F1\u72B6\u56FE\u66F4\u9002\u5408\u5C55\u793A\u7B80\u5355\u7684\u533A\u95F4\u6570\u636E\uFF0C\u7B80\u6D01\u7684\u8868\u73B0\u65B9\u5F0F\u53EF\u4EE5\u5F88\u597D\u7684\u51CF\u5C11\u5927\u6570\u636E\u91CF\u7684\u89C6\u89C9\u5C55\u73B0\u538B\u529B\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-mini-bar"><a class="lake-link"><i data-anchor="g2-mini-bar"></i></a>g2-mini-bar</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[color]</code></td><td>\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>#1890FF</code></td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[yTooltipSuffix]</code></td><td>y \u8F74Tooltip\u540E\u7F00\uFF0C\u4E00\u822C\u6307\u5B9A\u5355\u4F4D</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[tooltipType]</code></td><td>Tooltip\u663E\u793A\u7C7B\u578B</td><td><code>'mini','default'</code></td><td><code>'default'</code></td></tr><tr><td><code>[borderWidth]</code></td><td>\u7EBF\u6761\u7C97\u7EC6</td><td><code>number</code></td><td><code>5</code></td></tr><tr><td><code>[padding]</code></td><td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td><td><code>array</code></td><td><code>[8, 8, 8, 8]</code></td></tr><tr><td><code>[data]</code></td><td>\u6570\u636E</td><td><code>G2MiniBarData[]</code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(clickItem)</code></td><td>\u70B9\u51FB\u9879\u56DE\u8C03</td><td><code>EventEmitter&lt;G2MiniBarClickItem></code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table><h3 id="G2MiniBarData"><a class="lake-link"><i data-anchor="G2MiniBarData"></i></a>G2MiniBarData</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[x]</code></td><td>x\u8F74</td><td><code>any</code></td><td>-</td></tr><tr><td><code>[y]</code></td><td>y\u8F74</td><td><code>any</code></td><td>-</td></tr><tr><td><code>[color]</code></td><td>\u8F74\u989C\u8272</td><td><code>string</code></td><td>-</td></tr></tbody></table>`,meta:{title:"g2-mini-bar",subtitle:"\u8FF7\u4F60\u67F1\u72B6\u56FE",cols:2,type:"G2",module:"import { G2MiniBarModule } from '@delon/chart/mini-bar';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-mini-bar",title:"g2-mini-bar",h:3},{id:"G2MiniBarData",title:"G2MiniBarData",h:3}]}]}},demo:!0};codes=[{id:"chart-mini-bar-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Component, inject } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniAreaClickItem, G2MiniAreaData } from '@delon/chart/mini-area';
import { G2MiniBarModule } from '@delon/chart/mini-bar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-mini-bar-basic',
  template: \`
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-mini-bar height="45" [data]="visitData" (clickItem)="handleClick($event)" />
  \`,
  imports: [NzButtonModule, G2MiniBarModule]
})
export class ChartMiniBarBasicComponent {
  private readonly msg = inject(NzMessageService);
  visitData = this.genData();

  private genData(): G2MiniAreaData[] {
    const beginDay = new Date().getTime();
    const res: G2MiniAreaData[] = [];
    for (let i = 0; i < 20; i += 1) {
      res.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10
      });
    }
    return res;
  }

  refresh(): void {
    this.visitData = this.genData();
  }

  handleClick(data: G2MiniAreaClickItem): void {
    this.msg.info(\`\${data.item.x} - \${data.item.y}\`);
  }
}`,lang:"ts",componentName:"ChartMiniBarBasicComponent",point:0,name:"basic",urls:"packages/chart/mini-bar/demo/basic.md",type:"demo"},{id:"chart-mini-bar-mini",meta:{order:0,title:"Mini tooltip"},summary:"<p>\u6307\u5B9A <code>tooltipType</code> \u503C\u6765\u8868\u793A\u7B80\u5316tooltip\uFF0C\u53EF\u4EE5\u66F4\u597D\u7684\u8FD0\u7528\u4E8E\u8868\u683C\u3002</p>",code:`import { Component, OnInit } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniBarData, G2MiniBarModule } from '@delon/chart/mini-bar';

@Component({
  selector: 'chart-mini-bar-mini',
  template: \` <g2-mini-bar height="45" [data]="visitData" yTooltipSuffix="%" tooltipType="mini" /> \`,
  imports: [G2MiniBarModule]
})
export class ChartMiniBarMiniComponent implements OnInit {
  visitData: G2MiniBarData[] = [];
  ngOnInit(): void {
    const beginDay = new Date().getTime();
    for (let i = 0; i < 20; i += 1) {
      this.visitData.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10
      });
    }
  }
}`,lang:"ts",componentName:"ChartMiniBarMiniComponent",point:1,name:"mini",urls:"packages/chart/mini-bar/demo/mini.md",type:"demo"},{id:"chart-mini-bar-tooltip",meta:{order:0,title:"Tooltip"},summary:"<p>\u6307\u5B9A <code>yTooltipSuffix</code> \u503C\u6765\u8868\u793A\u5355\u4F4D\u3002</p>",code:`import { Component, OnInit } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniBarData, G2MiniBarModule } from '@delon/chart/mini-bar';

@Component({
  selector: 'chart-mini-bar-tooltip',
  template: \` <g2-mini-bar height="45" [data]="visitData" yTooltipSuffix="%" /> \`,
  imports: [G2MiniBarModule]
})
export class ChartMiniBarTooltipComponent implements OnInit {
  visitData: G2MiniBarData[] = [];
  ngOnInit(): void {
    const beginDay = new Date().getTime();
    for (let i = 0; i < 20; i += 1) {
      this.visitData.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10
      });
    }
  }
}`,lang:"ts",componentName:"ChartMiniBarTooltipComponent",point:2,name:"tooltip",urls:"packages/chart/mini-bar/demo/tooltip.md",type:"demo"}];static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["app-chart-mini-bar"]],hostVars:2,hostBindings:function(t,n){t&2&&g("d-block","true")},decls:10,vars:9,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","12"],[3,"item"]],template:function(t,n){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"chart-mini-bar-basic"),d(),r(5,"code-box",3),m(6,"chart-mini-bar-tooltip"),d()(),r(7,"div",2)(8,"code-box",3),m(9,"chart-mini-bar-mini"),d()()()()),t&2&&(i("codes",n.codes)("item",n.item),o(),i("nzGutter",16),o(2),i("item",n.codes[0]),v("id",n.codes[0].id),o(2),i("item",n.codes[2]),v("id",n.codes[2].id),o(3),i("item",n.codes[1]),v("id",n.codes[1].id))},dependencies:[D,jt,$t,Ht,G,k,I],encapsulation:2})};var Ka=a=>({left:a}),ya=a=>({"background-color":a}),Xa=(a,e,t)=>({"background-color":a,width:e,height:t}),rt=class a{locale=R(qn).valueSignal("miniProgress");cdr=R(Ge);color="#1890FF";target;percent;strokeWidth;fixNum(e){return Math.min(Math.max(b(e),0),100)}ngOnChanges(){this.target=this.fixNum(this.target),this.percent=this.fixNum(this.percent),this.cdr.detectChanges()}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["g2-mini-progress"]],hostVars:2,hostBindings:function(t,n){t&2&&g("g2-mini-progress",!0)},inputs:{color:"color",target:[2,"target","target",b],percent:[2,"percent","percent",b],strokeWidth:[2,"strokeWidth","strokeWidth",b]},exportAs:["g2MiniProgress"],features:[qe],decls:5,vars:19,consts:[["nz-tooltip","",1,"g2-mini-progress__target",3,"nzTooltipTitle"],[1,"g2-mini-progress__target-item"],[1,"g2-mini-progress__wrap"],[1,"g2-mini-progress__value"]],template:function(t,n){t&1&&(r(0,"div",0),m(1,"span",1)(2,"span",1),d(),r(3,"div",2),m(4,"div",3),d()),t&2&&(ie(le(9,Ka,n.target+"%")),i("nzTooltipTitle",n.locale().targetSuffix+n.target+"%"),o(),ie(le(11,ya,n.color)),o(),ie(le(13,ya,n.color)),o(2),ie(Un(15,Xa,n.color,n.percent+"%",n.strokeWidth+"px")))},dependencies:[Se],encapsulation:2,changeDetection:0})};var Vt=class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=A({type:a});static \u0275inj=B({imports:[E,Zn,Ie]})};var Ut=class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["chart-mini-progress-basic"]],decls:1,vars:0,consts:[["percent","78","strokeWidth","8","target","80"]],template:function(t,n){t&1&&m(0,"g2-mini-progress",0)},dependencies:[Vt,rt],encapsulation:2})};var qt=class a{item={cols:1,urls:{"zh-CN":"packages/chart/mini-progress/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u7528\u4E8E\u663E\u793A\u8DDF\u901F\u5EA6\u76F8\u5173\u56FE\u5F62\u518D\u9002\u5408\u4E0D\u8FC7\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-mini-progress"><a class="lake-link"><i data-anchor="g2-mini-progress"></i></a>g2-mini-progress</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[target]</code></td><td>\u76EE\u6807\u6BD4\u4F8B</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[color]</code></td><td>\u8FDB\u5EA6\u6761\u989C\u8272</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[strokeWidth]</code></td><td>\u8FDB\u5EA6\u6761\u9AD8\u5EA6</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[percent]</code></td><td>\u8FDB\u5EA6\u6BD4\u4F8B</td><td><code>number</code></td><td>-</td></tr></tbody></table>',meta:{title:"g2-mini-progress",subtitle:"\u8FF7\u4F60\u8FDB\u5EA6\u6761",cols:1,type:"G2",module:"import { G2MiniProgressModule } from '@delon/chart/mini-progress';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-mini-progress",title:"g2-mini-progress",h:3}]}]}},demo:!0};codes=[{id:"chart-mini-progress-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Component } from '@angular/core';

import { G2MiniProgressModule } from '@delon/chart/mini-progress';

@Component({
  selector: 'chart-mini-progress-basic',
  template: \` <g2-mini-progress percent="78" strokeWidth="8" target="80" /> \`,
  imports: [G2MiniProgressModule]
})
export class ChartMiniProgressBasicComponent {}`,lang:"ts",componentName:"ChartMiniProgressBasicComponent",point:0,name:"basic",urls:"packages/chart/mini-progress/demo/basic.md",type:"demo"}];static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["app-chart-mini-progress"]],hostVars:2,hostBindings:function(t,n){t&2&&g("d-block","true")},decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,n){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"chart-mini-progress-basic"),d()()()()),t&2&&(i("codes",n.codes)("item",n.item),o(),i("nzGutter",16),o(2),i("item",n.codes[0]),v("id",n.codes[0].id))},dependencies:[D,Ut,G,k,I],encapsulation:2})};function to(a,e){if(a&1&&(U(0),f(1),q()),a&2){let t=M(2);o(),L(t.title)}}function no(a,e){if(a&1&&(r(0,"div",0),O(1,to,2,1,"ng-container",4),d()),a&2){let t=M();o(),i("nzStringTemplateOutlet",t.title)}}function ao(a,e){if(a&1&&(U(0),f(1),q()),a&2){let t=M(2);o(),L(t.subTitle)}}function oo(a,e){if(a&1&&(r(0,"div",1),O(1,ao,2,1,"ng-container",4),d()),a&2){let t=M();o(),i("nzStringTemplateOutlet",t.subTitle)}}function io(a,e){if(a&1&&(U(0),f(1),q()),a&2){let t=M();o(),L(t.total)}}function ro(a,e){if(a&1&&(r(0,"em",5),f(1),d()),a&2){let t=M();o(),L(t.suffix)}}function co(a,e){if(a&1&&(U(0),f(1),q()),a&2){let t=M(2);o(),L(t.subTotal)}}function mo(a,e){if(a&1&&m(0,"nz-icon",7),a&2){let t=M(2);i("nzType",it("caret-",t.status))}}function lo(a,e){if(a&1&&(r(0,"span",6),O(1,co,2,1,"ng-container",4),_(2,mo,1,2,"nz-icon",7),d()),a&2){let t=M();o(),i("nzStringTemplateOutlet",t.subTotal),o(),S(t.status?2:-1)}}var ye=class a{title;subTitle;total;subTotal;suffix;status;theme="light";gap=8;static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["number-info"]],hostVars:6,hostBindings:function(t,n){t&2&&g("number-info",!0)("number-info__light",n.theme==="light")("number-info__default",n.theme==="default")},inputs:{title:"title",subTitle:"subTitle",total:"total",subTotal:"subTotal",suffix:"suffix",status:"status",theme:"theme",gap:[2,"gap","gap",b]},exportAs:["numberInfo"],decls:7,vars:7,consts:[[1,"number-info__title"],[1,"number-info__title-sub"],[1,"number-info__value"],[1,"number-info__value-text"],[4,"nzStringTemplateOutlet"],[1,"number-info__value-suffix"],[1,"number-info__value-text","number-info__value-sub"],[3,"nzType"]],template:function(t,n){t&1&&(_(0,no,2,1,"div",0),_(1,oo,2,1,"div",1),r(2,"div",2)(3,"span",3),O(4,io,2,1,"ng-container",4),_(5,ro,2,1,"em",5),d(),_(6,lo,3,2,"span",6),d()),t&2&&(S(n.title?0:-1),o(),S(n.subTitle?1:-1),o(),ae("margin-top",n.gap,"px"),o(2),i("nzStringTemplateOutlet",n.total),o(),S(n.suffix?5:-1),o(),S(n.status||n.subTotal?6:-1))},dependencies:[re,Ne],encapsulation:2,changeDetection:0})};var Oe=class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=A({type:a});static \u0275inj=B({imports:[E,_e,de]})};var Zt=class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["chart-number-info-basic"]],decls:1,vars:0,consts:[["subTitle","\u672C\u5468\u8BBF\u95EE","total","12,321","subTotal","17.1","status","up"]],template:function(t,n){t&1&&m(0,"number-info",0)},dependencies:[Oe,ye],encapsulation:2})};var Qt=class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["chart-number-info-theme"]],decls:1,vars:0,consts:[["subTitle","\u672C\u5468\u8BBF\u95EE","total","12,321","subTotal","17.1","status","down","theme","default"]],template:function(t,n){t&1&&m(0,"number-info",0)},dependencies:[Oe,ye],encapsulation:2})};var Jt=class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["chart-number-info-multiple"]],decls:3,vars:0,consts:[["subTitle","\u4ECA\u65E5\u8BBF\u95EE","total","12,321"],["subTitle","\u672C\u5468\u8BBF\u95EE","total","12,32100"],["subTitle","\u672C\u6708\u8BBF\u95EE","total","12,32100000"]],template:function(t,n){t&1&&m(0,"number-info",0)(1,"number-info",1)(2,"number-info",2)},dependencies:[Oe,ye],encapsulation:2})};var Yt=class a{item={cols:2,urls:{"en-US":"packages/chart/number-info/index.en-US.md","zh-CN":"packages/chart/number-info/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Often used in data cards for highlighting the business data.</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="number-info"><a class="lake-link"><i data-anchor="number-info"></i></a>number-info</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>title</td><td><code>TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[subTitle]</code></td><td>subtitle</td><td><code>TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[total]</code></td><td>total amount</td><td><code>string, number</code></td><td>-</td></tr><tr><td><code>[suffix]</code></td><td>total amount suffix</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[subTotal]</code></td><td>total amount of additional information</td><td><code>string, number</code></td><td>-</td></tr><tr><td><code>[status]</code></td><td>increase state</td><td><code>'up','down'</code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td>state style</td><td><code>'light','default'</code></td><td><code>'light'</code></td></tr><tr><td><code>[gap]</code></td><td>set the spacing (pixels) between numbers and descriptions</td><td><code>number</code></td><td>8</td></tr></tbody></table>`,meta:{type:"G2",title:"number-info",subtitle:"NumberInfo",cols:2,module:"import { NumberInfoModule } from '@delon/chart/number-info';"},toc:[{id:"API",title:"API",h:2,children:[{id:"number-info",title:"number-info",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u5E38\u7528\u5728\u6570\u636E\u5361\u7247\u4E2D\uFF0C\u7528\u4E8E\u7A81\u51FA\u5C55\u793A\u67D0\u4E2A\u4E1A\u52A1\u6570\u636E\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="number-info"><a class="lake-link"><i data-anchor="number-info"></i></a>number-info</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>\u6807\u9898</td><td><code>TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[subTitle]</code></td><td>\u5B50\u6807\u9898</td><td><code>TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[total]</code></td><td>\u603B\u91CF</td><td><code>string, number</code></td><td>-</td></tr><tr><td><code>[suffix]</code></td><td>\u603B\u91CF\u540E\u7F00</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[subTotal]</code></td><td>\u5B50\u603B\u91CF</td><td><code>string, number</code></td><td>-</td></tr><tr><td><code>[status]</code></td><td>\u589E\u52A0\u72B6\u6001</td><td><code>'up','down'</code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td>\u72B6\u6001\u6837\u5F0F</td><td><code>'light','default'</code></td><td><code>'light'</code></td></tr><tr><td><code>[gap]</code></td><td>\u8BBE\u7F6E\u6570\u5B57\u548C\u63CF\u8FF0\u76F4\u63A5\u7684\u95F4\u8DDD\uFF08\u50CF\u7D20\uFF09</td><td><code>number</code></td><td>8</td></tr></tbody></table>`,meta:{type:"G2",title:"number-info",subtitle:"\u6570\u636E\u6587\u672C",cols:2,module:"import { NumberInfoModule } from '@delon/chart/number-info';"},toc:[{id:"API",title:"API",h:2,children:[{id:"number-info",title:"number-info",h:3}]}]}},demo:!0};codes=[{id:"chart-number-info-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"}},summary:"<p>\u5404\u79CD\u6570\u636E\u6587\u6848\u7684\u5C55\u73B0\u65B9\u5F0F\u3002</p>",code:`import { Component } from '@angular/core';

import { NumberInfoModule } from '@delon/chart/number-info';

@Component({
  selector: 'chart-number-info-basic',
  template: \` <number-info subTitle="\u672C\u5468\u8BBF\u95EE" total="12,321" subTotal="17.1" status="up" /> \`,
  imports: [NumberInfoModule]
})
export class ChartNumberInfoBasicComponent {}`,lang:"ts",componentName:"ChartNumberInfoBasicComponent",point:0,name:"basic",urls:"packages/chart/number-info/demo/basic.md",type:"demo"},{id:"chart-number-info-theme",meta:{order:1,title:"\u4E3B\u9898"},summary:"<p>\u6697\u7CFB\u3002</p>",code:`import { Component } from '@angular/core';

import { NumberInfoModule } from '@delon/chart/number-info';

@Component({
  selector: 'chart-number-info-theme',
  template: \` <number-info subTitle="\u672C\u5468\u8BBF\u95EE" total="12,321" subTotal="17.1" status="down" theme="default" /> \`,
  imports: [NumberInfoModule]
})
export class ChartNumberInfoThemeComponent {}`,lang:"ts",componentName:"ChartNumberInfoThemeComponent",point:1,name:"theme",urls:"packages/chart/number-info/demo/theme.md",type:"demo"},{id:"chart-number-info-multiple",meta:{order:2,title:{"zh-CN":"\u591A\u5217","en-US":"Multiple"}},summary:{"zh-CN":"<p>\u591A\u4E2A<code>number-info</code>\u7EC4\u4EF6\u5728\u4E00\u8D77\u65F6\u589E\u52A0\u5206\u9694\u7B26\u3002</p>","en-US":"<p>Should be show a separator when multiple <code>number-info</code> components.</p>"},code:`import { Component } from '@angular/core';

import { NumberInfoModule } from '@delon/chart/number-info';

@Component({
  selector: 'chart-number-info-multiple',
  template: \`
    <number-info subTitle="\u4ECA\u65E5\u8BBF\u95EE" total="12,321" />
    <number-info subTitle="\u672C\u5468\u8BBF\u95EE" total="12,32100" />
    <number-info subTitle="\u672C\u6708\u8BBF\u95EE" total="12,32100000" />
  \`,
  imports: [NumberInfoModule]
})
export class ChartNumberInfoMultipleComponent {}`,lang:"ts",componentName:"ChartNumberInfoMultipleComponent",point:2,name:"multiple",urls:"packages/chart/number-info/demo/multiple.md",type:"demo"}];static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["app-chart-number-info"]],hostVars:2,hostBindings:function(t,n){t&2&&g("d-block","true")},decls:10,vars:9,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","12"],[3,"item"]],template:function(t,n){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"chart-number-info-basic"),d(),r(5,"code-box",3),m(6,"chart-number-info-multiple"),d()(),r(7,"div",2)(8,"code-box",3),m(9,"chart-number-info-theme"),d()()()()),t&2&&(i("codes",n.codes)("item",n.item),o(),i("nzGutter",16),o(2),i("item",n.codes[0]),v("id",n.codes[0].id),o(2),i("item",n.codes[2]),v("id",n.codes[2].id),o(3),i("item",n.codes[1]),v("id",n.codes[1].id))},dependencies:[D,Zt,Qt,Jt,G,k,I],encapsulation:2})};var so=a=>({"background-color":a});function po(a,e){a&1&&m(0,"nz-skeleton")}function uo(a,e){if(a&1&&(U(0),m(1,"div",7),q()),a&2){let t=M(3);o(),i("innerHTML",t.subTitle,Ze)}}function ho(a,e){if(a&1&&(r(0,"h4",4),O(1,uo,2,1,"ng-container",6),d()),a&2){let t=M(2);o(),i("nzStringTemplateOutlet",t.subTitle)}}function fo(a,e){if(a&1&&(U(0),m(1,"div",7),q()),a&2){let t=M(3);o(),i("innerHTML",t.total,Ze)}}function go(a,e){if(a&1&&(r(0,"div",5),O(1,fo,2,1,"ng-container",6),d()),a&2){let t=M(2);o(),i("nzStringTemplateOutlet",t.total)}}function Co(a,e){if(a&1&&(r(0,"div",2),_(1,ho,2,1,"h4",4),_(2,go,2,1,"div",5),d()),a&2){let t=M();o(),S(t.subTitle?1:-1),o(),S(t.total?2:-1)}}function vo(a,e){if(a&1){let t=Qe();r(0,"li",9),x("click",function(){let l=Ve(t).$index,s=M(2);return Ue(s._click(l))}),m(1,"span",10),r(2,"span",11),f(3),d(),m(4,"nz-divider",12),r(5,"span",13),f(6),d(),m(7,"span",14),d()}if(a&2){let t=e.$implicit,n=M(2);o(),ie(le(5,so,t.checked?t.color:"#aaa")),o(2),L(t.x),o(3),ze("",t.percent,"%"),o(),i("innerHTML",n.valueFormat?n.valueFormat(t.y):t.y,Ze)}}function yo(a,e){if(a&1&&(r(0,"ul",3),xe(1,vo,8,7,"li",8,Me),d()),a&2){let t=M();o(),De(t.legendData)}}var We=class a extends te{percentColor;legendData=[];isPercent=!1;animate=!0;color="rgba(24, 144, 255, 0.85)";subTitle;total;height=0;hasLegend=!1;inner=.75;padding=[12,0,12,0];percent;tooltip=!0;lineWidth=0;blockMaxWidth=380;select=!0;valueFormat;data=[];colors;interaction="none";ratio={text:"\u5360\u6BD4",inverse:"\u53CD\u6BD4",color:"",inverseColor:"#F0F2F5"};clickItem=new ne;block=!1;fixData(){let{percent:e,color:t}=this;if(this.isPercent=e!=null,!this.isPercent)return;this.select=!1,this.tooltip=!1;let{text:n,inverse:l,color:s,inverseColor:u}=this.ratio;this.percentColor=T=>T===n?s??t:u,this.data=[{x:n,y:e},{x:l,y:100-e}]}updateBlock(){this.block=this._chart&&this.hasLegend&&this.el.nativeElement.clientWidth<=this.blockMaxWidth,this.cdr.detectChanges()}install(){let{node:e,height:t,padding:n,tooltip:l,inner:s,hasLegend:u,interaction:T,theme:N,animate:C,lineWidth:y,isPercent:j,percentColor:W,colors:w}=this,$=this._chart=new this.winG2.Chart({container:e.nativeElement,autoFit:!0,height:t,padding:n,theme:N});$.animate(C),l?$.tooltip({showTitle:!1,showMarkers:!1}):$.tooltip(!1),T!=="none"&&$.interaction(T),$.axis(!1).legend(!1).coordinate("theta",{innerRadius:s}),$.filter("x",(P,z)=>z.checked!==!1),$.interval().adjust("stack").position("y").style({lineWidth:y,stroke:"#fff"}).color("x",j?W:w).tooltip("x*percent",(P,z)=>({name:P,value:`${u?z:(z*100).toFixed(2)} %`})).state({}),$.scale({x:{type:"cat",range:[0,1]}}),$.on("interval:click",P=>{this.ngZone.run(()=>this.clickItem.emit({item:P.data?.data,ev:P}))}).on("afterrender",()=>{this.ngZone.run(()=>this.updateBlock())}),this.ready.next($),this.changeData(),$.render()}changeData(){let{_chart:e,data:t}=this;if(!e||!Array.isArray(t)||t.length<=0)return;let n=t.reduce((l,s)=>l+s.y,0);for(let l of t)l.percent=n===0?0:l.y/n;e.changeData(t),this.ngZone.run(()=>this.genLegend())}genLegend(){let{hasLegend:e,isPercent:t,cdr:n,_chart:l}=this;!e||t||(this.legendData=l.geometries[0].dataArray.map(s=>{let u=s[0]._origin;return u.color=s[0].color,u.checked=!0,u.percent=(u.percent*100).toFixed(2),u}),n.detectChanges())}_click(e){let{legendData:t,_chart:n}=this;t[e].checked=!t[e].checked,n.render(!0)}onChanges(){this.fixData()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=Z(a)))(n||a)}})();static \u0275cmp=c({type:a,selectors:[["g2-pie"]],hostVars:8,hostBindings:function(t,n){t&2&&g("g2-pie",!0)("g2-pie__legend-has",n.hasLegend)("g2-pie__legend-block",n.block)("g2-pie__mini",n.isPercent)},inputs:{animate:[2,"animate","animate",H],color:"color",subTitle:"subTitle",total:"total",height:[2,"height","height",b],hasLegend:[2,"hasLegend","hasLegend",H],inner:"inner",padding:"padding",percent:[2,"percent","percent",b],tooltip:[2,"tooltip","tooltip",H],lineWidth:[2,"lineWidth","lineWidth",b],blockMaxWidth:[2,"blockMaxWidth","blockMaxWidth",b],select:[2,"select","select",H],valueFormat:"valueFormat",data:"data",colors:"colors",interaction:"interaction",ratio:"ratio"},outputs:{clickItem:"clickItem"},exportAs:["g2Pie"],features:[Q],decls:6,vars:3,consts:[["container",""],[1,"g2-pie__chart"],[1,"g2-pie__total"],[1,"g2-pie__legend"],[1,"g2-pie__total-title"],[1,"g2-pie__total-stat"],[4,"nzStringTemplateOutlet"],[3,"innerHTML"],[1,"g2-pie__legend-item"],[1,"g2-pie__legend-item",3,"click"],[1,"g2-pie__legend-dot"],[1,"g2-pie__legend-title"],["nzType","vertical"],[1,"g2-pie__legend-percent"],[1,"g2-pie__legend-value",3,"innerHTML"]],template:function(t,n){t&1&&(_(0,po,1,0,"nz-skeleton"),r(1,"div",1),m(2,"div",null,0),_(4,Co,3,2,"div",2),d(),_(5,yo,3,0,"ul",3)),t&2&&(S(n.loaded?-1:0),o(4),S(n.subTitle||n.total?4:-1),o(),S(n.hasLegend&&n.legendData.length>0?5:-1))},dependencies:[ce,re,Xn],encapsulation:2,changeDetection:0})};var bo=[We],tt=class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=A({type:a});static \u0275inj=B({imports:[E,ea,de,me,bo]})};var Mo=["pie"],Kt=class a{constructor(e){this.msg=e;this.refresh()}pie;salesPieData=[];total="";refresh(){let e=(t=0,n=5e3)=>Math.floor(Math.random()*(n-t+1)+t);this.salesPieData=[{x:"\u5BB6\u7528\u7535\u5668",y:e()},{x:"\u98DF\u7528\u9152\u6C34",y:e()},{x:"\u4E2A\u62A4\u5065\u5EB7",y:e()},{x:"\u670D\u9970\u7BB1\u5305",y:e()},{x:"\u6BCD\u5A74\u4EA7\u54C1",y:e()}],Math.random()>.5&&this.salesPieData.push({x:"\u5176\u4ED6",y:e()}),this.total=`&yen ${this.salesPieData.reduce((t,n)=>n.y+t,0).toFixed(2)}`,this.pie&&setTimeout(()=>this.pie.changeData())}format(e){return`&yen ${e.toFixed(2)}`}handleClick(e){this.msg.info(`${e.item.x} - ${e.item.y}`)}static \u0275fac=function(t){return new(t||a)(fe(ee))};static \u0275cmp=c({type:a,selectors:[["chart-pie-basic"]],viewQuery:function(t,n){if(t&1&&ut(Mo,5),t&2){let l;ht(l=ft())&&(n.pie=l.first)}},decls:4,vars:4,consts:[["pie",""],["nz-button","","nzType","primary",3,"click"],["title","\u9500\u552E\u989D","subTitle","\u9500\u552E\u989D","height","294","repaint","false",3,"clickItem","hasLegend","total","valueFormat","data"]],template:function(t,n){t&1&&(r(0,"button",1),x("click",function(){return n.refresh()}),f(1,"Refresh"),d(),r(2,"g2-pie",2,0),x("clickItem",function(s){return n.handleClick(s)}),d()),t&2&&(o(2),i("hasLegend",!0)("total",n.total)("valueFormat",n.format)("data",n.salesPieData))},dependencies:[X,K,J,Y,tt,We],encapsulation:2})};var Xt=class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["chart-pie-mini"]],decls:2,vars:0,consts:[[2,"width","200px","display","inline-block"],["percent","28","subTitle","\u4E2D\u5F0F\u5FEB\u9910","total","28%","height","130"]],template:function(t,n){t&1&&(r(0,"div",0),m(1,"g2-pie",1),d())},dependencies:[tt,We],encapsulation:2})};var en=class a{item={cols:1,urls:{"zh-CN":"packages/chart/pie/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u7528\u4E8E\u663E\u793A\u8DDF\u901F\u5EA6\u76F8\u5173\u56FE\u5F62\u518D\u9002\u5408\u4E0D\u8FC7\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-pie"><a class="lake-link"><i data-anchor="g2-pie"></i></a>g2-pie</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[animate]</code></td><td>\u662F\u5426\u663E\u793A\u52A8\u753B</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[color]</code></td><td>\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>rgba(24, 144, 255, 0.85)</code></td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[hasLegend]</code></td><td>\u662F\u5426\u663E\u793A legend</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[padding]</code></td><td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td><td><code>number[]</code></td><td><code>[12, 0, 12, 0]</code></td></tr><tr><td><code>[percent]</code></td><td>\u5360\u6BD4</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[lineWidth]</code></td><td>\u8FB9\u6846\u7C97\u7EC6</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[inner]</code></td><td>\u5185\u90E8\u6781\u5750\u6807\u7CFB\u7684\u534A\u5F84</td><td><code>number</code></td><td><code>0.75</code></td></tr><tr><td><code>[blockMaxWidth]</code></td><td>\u591A\u5C11\u5BBD\u5EA6\u4E3A\u5757\u663E\u793A</td><td><code>number</code></td><td><code>380</code></td></tr><tr><td><code>[tooltip]</code></td><td>\u662F\u5426\u663E\u793A tooltip</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[subTitle]</code></td><td>\u56FE\u8868\u5B50\u6807\u9898</td><td><code>string,TemplateRef&lt;void><void></code></td><td>-</td></tr><tr><td><code>[total]</code></td><td>\u603B\u91CF</td><td><code>string,number,TemplateRef&lt;void><void></code></td><td>-</td></tr><tr><td><code>[valueFormat]</code></td><td>y\u8F74\u683C\u5F0F\u5316</td><td><code>(y: number) => string</code></td><td>-</td></tr><tr><td><code>[data]</code></td><td>\u6570\u636E</td><td><code>G2PieData[]</code></td><td>-</td></tr><tr><td><code>[colors]</code></td><td>\u989C\u8272\u5217\u8868</td><td><code>string[]</code></td><td>-</td></tr><tr><td><code>[interaction]</code></td><td>\u4EA4\u4E92\u7C7B\u578B\uFF0Cnone \u65E0 element-active \u56FE\u5F62\u5143\u7D20\uFF0Cactive-region \u56FE\u8868\u7EC4\u4EF6\uFF0Cbrush \u6846\u9009\uFF0Cdrag-move \u79FB\u52A8</td><td><code>InteractionType</code></td><td><code>none</code></td></tr><tr><td><code>[ratio]</code></td><td>\u767E\u5206\u6BD4\u914D\u7F6E\u9879</td><td><code>G2PieRatio</code></td><td><code>{ text: '\u5360\u6BD4', inverse: '\u53CD\u6BD4', color: '', inverseColor: '#F0F2F5' }</code></td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(clickItem)</code></td><td>\u70B9\u51FB\u9879\u56DE\u8C03</td><td><code>EventEmitter&lt;G2PieClickItem></code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table><h3 id="G2PieData"><a class="lake-link"><i data-anchor="G2PieData"></i></a>G2PieData</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[x]</code></td><td>x\u8F74</td><td><code>any</code></td><td>-</td></tr><tr><td><code>[y]</code></td><td>y\u8F74</td><td><code>number</code></td><td>-</td></tr></tbody></table>`,meta:{title:"g2-pie",subtitle:"\u997C\u72B6\u56FE",cols:1,type:"G2",module:"import { G2PieModule } from '@delon/chart/pie';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-pie",title:"g2-pie",h:3},{id:"G2PieData",title:"G2PieData",h:3}]}]}},demo:!0};codes=[{id:"chart-pie-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E1D\u6ED1\u66F4\u65B0\u6570\u636E\u7684\u5224\u65AD\u6807\u51C6\u662F\u4EE5\u53EA\u66F4\u65B0 <code>data</code> \u4E3A\u51C6\uFF0C\u8FD9\u91CC\u5229\u7528 <code>repaint</code> \u8FDB\u884C\u624B\u52A8\u8C03\u7528 <code>changeData</code> \u6539\u53D8\u6570\u636E\u8FBE\u5230\u4E1D\u6ED1\u66F4\u65B0\u7684\u6548\u679C\u3002</p>",code:`import { Component, ViewChild } from '@angular/core';

import { G2PieClickItem, G2PieComponent, G2PieData, G2PieModule } from '@delon/chart/pie';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-pie-basic',
  template: \`
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-pie
      #pie
      [hasLegend]="true"
      title="\u9500\u552E\u989D"
      subTitle="\u9500\u552E\u989D"
      [total]="total"
      [valueFormat]="format"
      [data]="salesPieData"
      height="294"
      repaint="false"
      (clickItem)="handleClick($event)"
    />
  \`,
  imports: [NzButtonModule, G2PieModule]
})
export class ChartPieBasicComponent {
  @ViewChild('pie', { static: false }) readonly pie!: G2PieComponent;
  salesPieData: G2PieData[] = [];
  total = '';

  constructor(private msg: NzMessageService) {
    this.refresh();
  }

  refresh(): void {
    const rv = (min: number = 0, max: number = 5000): number => Math.floor(Math.random() * (max - min + 1) + min);
    this.salesPieData = [
      {
        x: '\u5BB6\u7528\u7535\u5668',
        y: rv()
      },
      {
        x: '\u98DF\u7528\u9152\u6C34',
        y: rv()
      },
      {
        x: '\u4E2A\u62A4\u5065\u5EB7',
        y: rv()
      },
      {
        x: '\u670D\u9970\u7BB1\u5305',
        y: rv()
      },
      {
        x: '\u6BCD\u5A74\u4EA7\u54C1',
        y: rv()
      }
    ];
    if (Math.random() > 0.5) {
      this.salesPieData.push({
        x: '\u5176\u4ED6',
        y: rv()
      });
    }
    this.total = \`&yen \${this.salesPieData.reduce((pre, now) => now.y + pre, 0).toFixed(2)}\`;
    if (this.pie) {
      // \u7B49\u5F85\u7EC4\u4EF6\u6E32\u67D3
      setTimeout(() => this.pie.changeData());
    }
  }

  format(val: number): string {
    return \`&yen \${val.toFixed(2)}\`;
  }

  handleClick(data: G2PieClickItem): void {
    this.msg.info(\`\${data.item.x} - \${data.item.y}\`);
  }
}`,lang:"ts",componentName:"ChartPieBasicComponent",point:0,name:"basic",urls:"packages/chart/pie/demo/basic.md",type:"demo"},{id:"chart-pie-mini",meta:{order:0,title:{"zh-CN":"\u8FF7\u4F60\u578B","en-US":"Mini"}},summary:"<p>\u901A\u8FC7\u7B80\u5316 <code>pie</code> \u5C5E\u6027\u7684\u8BBE\u7F6E\uFF0C\u53EF\u4EE5\u5FEB\u901F\u7684\u5B9E\u73B0\u6781\u7B80\u7684\u997C\u72B6\u56FE\uFF0C\u53EF\u914D\u5408 <code>chart-card</code> \u7EC4\u5408\u5C55\u73B0\u66F4\u591A\u4E1A\u52A1\u573A\u666F\u3002</p>",code:`import { Component } from '@angular/core';

import { G2PieModule } from '@delon/chart/pie';

@Component({
  selector: 'chart-pie-mini',
  template: \`
    <div style="width: 200px; display: inline-block">
      <g2-pie percent="28" subTitle="\u4E2D\u5F0F\u5FEB\u9910" total="28%" height="130" />
    </div>
  \`,
  imports: [G2PieModule]
})
export class ChartPieMiniComponent {}`,lang:"ts",componentName:"ChartPieMiniComponent",point:1,name:"mini",urls:"packages/chart/pie/demo/mini.md",type:"demo"}];static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["app-chart-pie"]],hostVars:2,hostBindings:function(t,n){t&2&&g("d-block","true")},decls:7,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,n){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"chart-pie-basic"),d(),r(5,"code-box",3),m(6,"chart-pie-mini"),d()()()()),t&2&&(i("codes",n.codes)("item",n.item),o(),i("nzGutter",16),o(2),i("item",n.codes[0]),v("id",n.codes[0].id),o(2),i("item",n.codes[1]),v("id",n.codes[1].id))},dependencies:[D,Kt,Xt,G,k,I],encapsulation:2})};var xo=a=>({"background-color":a});function Do(a,e){a&1&&m(0,"nz-skeleton")}function To(a,e){if(a&1&&(U(0),r(1,"h4"),f(2),d(),q()),a&2){let t=M();o(2),L(t.title)}}function zo(a,e){if(a&1){let t=Qe();r(0,"div",4),x("click",function(){let l=Ve(t).$index,s=M(2);return Ue(s._click(l))}),m(1,"i",5),f(2),r(3,"h6",6),f(4),d()()}if(a&2){let t=e.$implicit,n=M(2);i("nzSpan",24/n.legendData.length),o(),ie(le(5,xo,t.checked?t.color:"#aaa")),o(),ze(" ",t.name," "),o(2),L(t.value)}}function ko(a,e){if(a&1&&(r(0,"div",2),xe(1,zo,5,7,"div",3,Me),d()),a&2){let t=M();o(),De(t.legendData)}}var nt=class a extends te{legendData=[];title;height=0;padding=[44,30,16,30];hasLegend=!0;tickCount=4;data=[];colors=["#1890FF","#FACC14","#2FC25B","#8543E0","#F04864","#13C2C2","#fa8c16","#a0d911"];clickItem=new ne;getHeight(){return this.height-(this.hasLegend?80:22)}install(){let{node:e,padding:t,theme:n,tickCount:l}=this,s=this._chart=new this.winG2.Chart({container:e.nativeElement,autoFit:!0,height:this.getHeight(),padding:t,theme:n});s.coordinate("polar"),s.legend(!1),s.axis("label",{line:null,label:{offset:8},grid:{line:{style:{stroke:"#e9e9e9",lineWidth:1,lineDash:[0,0]}}}}),s.axis("value",{grid:{line:{type:"polygon",style:{stroke:"#e9e9e9",lineWidth:1,lineDash:[0,0]}}}}),s.scale({value:{min:0,tickCount:l}}),s.filter("name",u=>{let T=this.legendData.find(N=>N.name===u);return T?T.checked!==!1:!0}),s.line().position("label*value").color("name",this.colors),s.point().position("label*value").shape("circle").size(3),s.on("point:click",u=>{this.ngZone.run(()=>this.clickItem.emit({item:u.data?.data,ev:u}))}),this.ready.next(s),this.changeData(),s.render()}changeData(){let{_chart:e,data:t}=this;!e||!Array.isArray(t)||t.length<=0||(e.changeData(t),this.ngZone.run(()=>this.genLegend()))}genLegend(){let{hasLegend:e,cdr:t,_chart:n}=this;e&&(this.legendData=n.geometries[0].dataArray.map(l=>({name:l[0]._origin.name,color:l[0].color,checked:!0,value:l.reduce((T,N)=>T+N._origin.value,0)})),t.detectChanges())}_click(e){let{legendData:t,_chart:n}=this;t[e].checked=!t[e].checked,n.render(!0)}onChanges(){this.legendData.forEach(e=>e.checked=!0)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=Z(a)))(n||a)}})();static \u0275cmp=c({type:a,selectors:[["g2-radar"]],hostVars:4,hostBindings:function(t,n){t&2&&(ae("height",n.height,"px"),g("g2-radar",!0))},inputs:{title:"title",height:[2,"height","height",b],padding:"padding",hasLegend:[2,"hasLegend","hasLegend",H],tickCount:[2,"tickCount","tickCount",b],data:"data",colors:"colors"},outputs:{clickItem:"clickItem"},exportAs:["g2Radar"],features:[Q],decls:5,vars:3,consts:[["container",""],[4,"nzStringTemplateOutlet"],["nz-row","",1,"g2-radar__legend"],["nz-col","",1,"g2-radar__legend-item",3,"nzSpan"],["nz-col","",1,"g2-radar__legend-item",3,"click","nzSpan"],[1,"g2-radar__legend-dot"],[1,"g2-radar__legend-title"]],template:function(t,n){t&1&&(_(0,Do,1,0,"nz-skeleton"),O(1,To,3,1,"ng-container",1),m(2,"div",null,0),_(4,ko,3,0,"div",2)),t&2&&(S(n.loaded?-1:0),o(),i("nzStringTemplateOutlet",n.title),o(3),S(n.hasLegend?4:-1))},dependencies:[ce,re,k,G],encapsulation:2,changeDetection:0})};var No=[nt],tn=class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=A({type:a});static \u0275inj=B({imports:[E,la,de,me,No]})};var nn=class a{constructor(e){this.msg=e;this.refresh()}radarData=[];refresh(){let e=(s=1,u=10)=>Math.floor(Math.random()*(u-s+1)+s),t=["\u4E2A\u4EBA","\u56E2\u961F","\u90E8\u95E8"].map(s=>({name:s,ref:e(),koubei:e(),output:e(),contribute:e(),hot:e()})),n={ref:"\u5F15\u7528",koubei:"\u53E3\u7891",output:"\u4EA7\u91CF",contribute:"\u8D21\u732E",hot:"\u70ED\u5EA6"};Math.random()>.5&&delete n.hot;let l=[];t.forEach(s=>{Object.keys(s).forEach(u=>{u!=="name"&&l.push({name:s.name,label:n[u],value:s[u]})})}),this.radarData=l}handleClick(e){this.msg.info(`${e.item.label} - ${e.item.name} - ${e.item.value}`)}static \u0275fac=function(t){return new(t||a)(fe(ee))};static \u0275cmp=c({type:a,selectors:[["chart-radar-basic"]],decls:3,vars:2,consts:[["nz-button","","nzType","primary",3,"click"],["height","286",3,"clickItem","hasLegend","data"]],template:function(t,n){t&1&&(r(0,"button",0),x("click",function(){return n.refresh()}),f(1,"Refresh"),d(),r(2,"g2-radar",1),x("clickItem",function(s){return n.handleClick(s)}),d()),t&2&&(o(2),i("hasLegend",!0)("data",n.radarData))},dependencies:[X,K,J,Y,tn,nt],encapsulation:2})};var an=class a{item={cols:1,urls:{"zh-CN":"packages/chart/radar/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u96F7\u8FBE\u56FE\u662F\u4EE5\u76F8\u540C\u70B9\u5F00\u59CB\u7684\u8F74\u4E0A\u8868\u793A\u7684\u4E09\u4E2A\u6216\u66F4\u591A\u4E2A\u5B9A\u91CF\u53D8\u91CF\u7684\u4E8C\u7EF4\u56FE\u5F62\u7684\u5F62\u5F0F\u663E\u793A\u591A\u53D8\u91CF\u6570\u636E\u7684\u56FE\u5F62\u65B9\u6CD5\u3002\u8F74\u7684\u76F8\u5BF9\u4F4D\u7F6E\u548C\u89D2\u5EA6\u901A\u5E38\u662F\u4E0D\u77E5\u60C5\u7684\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-radar"><a class="lake-link"><i data-anchor="g2-radar"></i></a>g2-radar</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[title]</code></td><td>\u56FE\u8868\u6807\u9898</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[hasLegend]</code></td><td>\u662F\u5426\u663E\u793A legend</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[padding]</code></td><td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td><td><code>array</code></td><td><code>[24, 30, 16, 30]</code></td></tr><tr><td><code>[colors]</code></td><td>\u989C\u8272\u5217\u8868</td><td><code>string[]</code></td><td>-</td></tr><tr><td><code>[data]</code></td><td>\u6570\u636E</td><td><code>G2RadarData[]</code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(clickItem)</code></td><td>\u70B9\u51FB\u9879\u56DE\u8C03</td><td><code>EventEmitter&lt;G2RadarClickItem></code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table><h3 id="G2RadarData"><a class="lake-link"><i data-anchor="G2RadarData"></i></a>G2RadarData</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[name]</code></td><td>\u540D\u79F0</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[label]</code></td><td>\u6807\u7B7E</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[value]</code></td><td>\u503C</td><td><code>number</code></td><td>-</td></tr></tbody></table>',meta:{title:"g2-radar",subtitle:"\u96F7\u8FBE\u56FE",cols:1,type:"G2",module:"import { G2RadarModule } from '@delon/chart/radar';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-radar",title:"g2-radar",h:3},{id:"G2RadarData",title:"G2RadarData",h:3}]}]}},demo:!0};codes=[{id:"chart-radar-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Component } from '@angular/core';

import { G2RadarClickItem, G2RadarData, G2RadarModule } from '@delon/chart/radar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-radar-basic',
  template: \`
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-radar [hasLegend]="true" [data]="radarData" height="286" (clickItem)="handleClick($event)" />
  \`,
  imports: [NzButtonModule, G2RadarModule]
})
export class ChartRadarBasicComponent {
  radarData: G2RadarData[] = [];

  constructor(private msg: NzMessageService) {
    this.refresh();
  }

  refresh(): void {
    const rv = (min: number = 1, max: number = 10): number => Math.floor(Math.random() * (max - min + 1) + min);
    const radarOriginData = ['\u4E2A\u4EBA', '\u56E2\u961F', '\u90E8\u95E8'].map(name => ({
      name,
      ref: rv(),
      koubei: rv(),
      output: rv(),
      contribute: rv(),
      hot: rv()
    }));
    const radarTitleMap: { [key: string]: string } = {
      ref: '\u5F15\u7528',
      koubei: '\u53E3\u7891',
      output: '\u4EA7\u91CF',
      contribute: '\u8D21\u732E',
      hot: '\u70ED\u5EA6'
    };
    if (Math.random() > 0.5) {
      delete radarTitleMap.hot;
    }
    const res: G2RadarData[] = [];
    radarOriginData.forEach((item: { [key: string]: NzSafeAny }) => {
      Object.keys(item).forEach(key => {
        if (key !== 'name') {
          res.push({
            name: item.name,
            label: radarTitleMap[key],
            value: item[key]
          });
        }
      });
    });
    this.radarData = res;
  }

  handleClick(data: G2RadarClickItem): void {
    this.msg.info(\`\${data.item.label} - \${data.item.name} - \${data.item.value}\`);
  }
}`,lang:"ts",componentName:"ChartRadarBasicComponent",point:0,name:"basic",urls:"packages/chart/radar/demo/basic.md",type:"demo"}];static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["app-chart-radar"]],hostVars:2,hostBindings:function(t,n){t&2&&g("d-block","true")},decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,n){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"chart-radar-basic"),d()()()()),t&2&&(i("codes",n.codes)("item",n.item),o(),i("nzGutter",16),o(2),i("item",n.codes[0]),v("id",n.codes[0].id))},dependencies:[D,nn,G,k,I],encapsulation:2})};var dt=class a extends te{plusColor="#40a9ff";minusColor="#ff4d4f";height=60;barSize=30;min=0;max=100;value=0;line=!1;format;padding=0;textStyle={fontSize:12,color:"#595959"};install(){let{el:e,height:t,padding:n,textStyle:l,line:s,format:u,theme:T,min:N,max:C,plusColor:y,minusColor:j,barSize:W}=this,w=this._chart=new this.winG2.Chart({container:e.nativeElement,autoFit:!0,height:t,padding:n,theme:T});w.legend(!1),w.axis(!1),w.scale({value:{max:C,min:N}}),w.tooltip(!1),w.coordinate().transpose(),w.interval().position("1*value").color("value",$=>$>0?y:j).size(W).label("value",()=>({formatter:u,style:be({},l)})),s&&w.annotation().line({start:["50%","0%"],end:["50%","100%"],style:{stroke:"#e8e8e8",lineDash:[0,0]}}),this.ready.next(w),this.changeData(),w.render()}onlyChangeData=e=>Object.keys(e).length===1&&!!e.value;changeData(){let{_chart:e,value:t}=this;e&&e.changeData([{value:t}])}static \u0275fac=(()=>{let e;return function(n){return(e||(e=Z(a)))(n||a)}})();static \u0275cmp=c({type:a,selectors:[["g2-single-bar"]],hostVars:2,hostBindings:function(t,n){t&2&&ae("height",n.height,"px")},inputs:{plusColor:"plusColor",minusColor:"minusColor",height:[2,"height","height",b],barSize:[2,"barSize","barSize",b],min:[2,"min","min",b],max:[2,"max","max",b],value:[2,"value","value",b],line:[2,"line","line",H],format:"format",padding:"padding",textStyle:"textStyle"},exportAs:["g2SingleBar"],features:[Q],decls:0,vars:0,template:function(t,n){},encapsulation:2,changeDetection:0})};var on=class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=A({type:a});static \u0275inj=B({imports:[E]})};function So(a,e){if(a&1&&(r(0,"tr")(1,"td"),f(2),d(),r(3,"td"),m(4,"g2-single-bar",3),d(),r(5,"td"),m(6,"g2-single-bar",4),d()()),a&2){let t=e.$implicit,n=e.$index;o(2),L(n+1),o(2),i("value",t.value),o(2),i("value",t.other)}}var rn=class a{list=new Array(5).fill({}).map(()=>({id:Math.floor(Math.random()*1e4),value:Math.floor(Math.random()*100),other:Math.floor(Math.random()*100)>50?Math.floor(Math.random()*100):-Math.floor(Math.random()*100)}));refresh(){this.list.forEach(e=>{e.value=Math.floor(Math.random()*100),e.other=Math.floor(Math.random()*100)>50?Math.floor(Math.random()*100):-Math.floor(Math.random()*100)})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["chart-single-bar-basic"]],decls:14,vars:2,consts:[["nz-button","","nzType","primary",3,"click"],[3,"nzData","nzShowPagination"],["nzWidth","350px"],["height","24",3,"value"],["height","60","min","-100","line","",3,"value"]],template:function(t,n){t&1&&(r(0,"button",0),x("click",function(){return n.refresh()}),f(1,"Refresh"),d(),r(2,"nz-table",1)(3,"thead")(4,"tr")(5,"th"),f(6,"\u5E8F\u53F7"),d(),r(7,"th",2),f(8,"\u670D\u52A1\u8C03\u7528\u6B21\u6570"),d(),r(9,"th",2),f(10,"\u6570\u636E\u6709\u8D1F\u503C"),d()()(),r(11,"tbody"),xe(12,So,7,3,"tr",null,Me),d()()),t&2&&(o(2),i("nzData",n.list)("nzShowPagination",!1),o(10),De(n.list))},dependencies:[X,K,J,Y,ma,ra,aa,oa,ca,ia,da,on,dt],styles:["[_nghost-%COMP%]     .ant-table tbody>tr>td{padding:0}"]})};var dn=class a{item={cols:1,urls:{"zh-CN":"packages/chart/single-bar/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u5355\u4E00\u67F1\u72B6\u56FE\u66F4\u9002\u5408\u5728\u5217\u8868\u4E2D\u5C55\u793A\u7B80\u5355\u7684\u533A\u95F4\u6570\u636E\uFF0C\u7B80\u6D01\u7684\u8868\u73B0\u65B9\u5F0F\u53EF\u4EE5\u5F88\u597D\u7684\u51CF\u5C11\u5927\u6570\u636E\u91CF\u7684\u89C6\u89C9\u5C55\u73B0\u538B\u529B\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-single-bar"><a class="lake-link"><i data-anchor="g2-single-bar"></i></a>g2-single-bar</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[plusColor]</code></td><td>\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>#40a9ff</code></td></tr><tr><td><code>[minusColor]</code></td><td>\u8D1F\u503C\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>#ff4d4f</code></td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td><code>60</code></td></tr><tr><td><code>[barSize]</code></td><td>\u67F1\u72B6\u9AD8\u5EA6</td><td><code>number</code></td><td><code>30</code></td></tr><tr><td><code>[min]</code></td><td>\u6700\u5C0F\u503C</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[max]</code></td><td>\u6700\u5927\u503C\uFF0C\u82E5\u5C0F\u4E8E0\u8868\u793A\u663E\u793A\u8D1F\u503C</td><td><code>number</code></td><td><code>100</code></td></tr><tr><td><code>[padding]</code></td><td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td><td><code>any</code></td><td><code>0</code></td></tr><tr><td><code>[value]</code></td><td>\u503C</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[format]</code></td><td>\u663E\u793A\u503C\u683C\u5F0F</td><td><code>(value: number) => string</code></td><td>-</td></tr><tr><td><code>[textStyle]</code></td><td>\u663E\u793A\u503C\u6837\u5F0F</td><td><code>any</code></td><td><code>{ fontSize: 12, color: '#595959' }</code></td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table>`,meta:{title:"g2-single-bar",subtitle:"\u5355\u4E00\u67F1\u72B6\u56FE",cols:1,type:"G2",module:"import { G2SingleBarModule } from '@delon/chart/single-bar';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-single-bar",title:"g2-single-bar",h:3}]}]}},demo:!0};codes=[{id:"chart-single-bar-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Component, ViewEncapsulation } from '@angular/core';

import { G2SingleBarModule } from '@delon/chart/single-bar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'chart-single-bar-basic',
  template: \`
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <nz-table [nzData]="list" [nzShowPagination]="false">
      <thead>
        <tr>
          <th>\u5E8F\u53F7</th>
          <th nzWidth="350px">\u670D\u52A1\u8C03\u7528\u6B21\u6570</th>
          <th nzWidth="350px">\u6570\u636E\u6709\u8D1F\u503C</th>
        </tr>
      </thead>
      <tbody>
        @for (i of list; track $index) {
          <tr>
            <td>{{ $index + 1 }}</td>
            <td>
              <g2-single-bar height="24" [value]="i.value" />
            </td>
            <td>
              <g2-single-bar height="60" [value]="i.other" min="-100" line />
            </td>
          </tr>
        }
      </tbody>
    </nz-table>
  \`,
  styles: [
    \`
      :host ::ng-deep .ant-table tbody > tr > td {
        padding: 0;
      }
    \`
  ],
  encapsulation: ViewEncapsulation.Emulated,
  imports: [NzButtonModule, NzTableModule, G2SingleBarModule]
})
export class ChartSingleBarBasicComponent {
  list: Array<{ id: number; value: number; other: number }> = new Array(5).fill({}).map(() => ({
    id: Math.floor(Math.random() * 10000),
    value: Math.floor(Math.random() * 100),
    other: Math.floor(Math.random() * 100) > 50 ? Math.floor(Math.random() * 100) : -Math.floor(Math.random() * 100)
  }));

  refresh(): void {
    this.list.forEach(v => {
      v.value = Math.floor(Math.random() * 100);
      v.other =
        Math.floor(Math.random() * 100) > 50 ? Math.floor(Math.random() * 100) : -Math.floor(Math.random() * 100);
    });
  }
}`,lang:"ts",componentName:"ChartSingleBarBasicComponent",point:0,name:"basic",urls:"packages/chart/single-bar/demo/basic.md",type:"demo"}];static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["app-chart-single-bar"]],hostVars:2,hostBindings:function(t,n){t&2&&g("d-block","true")},decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,n){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"chart-single-bar-basic"),d()()()()),t&2&&(i("codes",n.codes)("item",n.item),o(),i("nzGutter",16),o(2),i("item",n.codes[0]),v("id",n.codes[0].id))},dependencies:[D,rn,G,k,I],encapsulation:2})};function Io(a,e){a&1&&m(0,"nz-skeleton")}var at=class a extends te{width=0;height=200;padding=0;data=[];clickItem=new ne;initTagCloud(){let e=this.winG2;e.registerShape("point","cloud",{draw(t,n){let l=t.data,s=n.addShape({type:"text",name:"tag-cloud-text",attrs:Pn(be({},t.style),{fontSize:l.size,text:l.text,textAlign:"center",fontFamily:l.font,fill:t.color,textBaseline:"Alphabetic",x:t.x,y:t.y})});return l.rotate&&e.Util.rotate(s,l.rotate*Math.PI/180),s}})}install(){this.initTagCloud();let{el:e,padding:t,theme:n}=this;this.height===0&&(this.height=this.el.nativeElement.clientHeight),this.width===0&&(this.width=this.el.nativeElement.clientWidth);let l=this._chart=new this.winG2.Chart({container:e.nativeElement,autoFit:!1,padding:t,height:this.height,width:this.width,theme:n});l.scale({x:{nice:!1},y:{nice:!1}}),l.legend(!1),l.axis(!1),l.tooltip({showTitle:!1,showMarkers:!1}),l.coordinate().reflect(),l.point().position("x*y").color("text").shape("cloud").state({active:{style:{fillOpacity:.4}}}),l.interaction("element-active"),l.on("tag-cloud-text:click",s=>{this.ngZone.run(()=>this.clickItem.emit({item:s.data?.data,ev:s}))}),this.ready.next(l),this.changeData(),l.render()}changeData(){let{_chart:e,data:t}=this;if(!e||!Array.isArray(t)||t.length<=0)return;let n=new window.DataSet.View().source(t),l=n.range("value"),s=l[0],u=l[1];n.transform({type:"tag-cloud",fields:["name","value"],font:"Verdana",size:[this.width,this.height],padding:0,timeInterval:5e3,rotate(){let T=~~(Math.random()*4)%4;return T===2&&(T=0),T*90},fontSize(T){return(T.value-s)/(u-s)*24+8}}),e.changeData(n.rows)}installResizeEvent(){this.resize$=He(window,"resize").pipe(Fn(()=>!!this._chart),Le(200)).subscribe(()=>this.changeData())}onInit(){this.installResizeEvent()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=Z(a)))(n||a)}})();static \u0275cmp=c({type:a,selectors:[["g2-tag-cloud"]],inputs:{width:[2,"width","width",b],height:[2,"height","height",b],padding:"padding",data:"data"},outputs:{clickItem:"clickItem"},exportAs:["g2TagCloud"],features:[Q],decls:1,vars:1,template:function(t,n){t&1&&_(0,Io,1,0,"nz-skeleton"),t&2&&S(n.loaded?-1:0)},dependencies:[ce],encapsulation:2,changeDetection:0})};var Bo=[at],cn=class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=A({type:a});static \u0275inj=B({imports:[E,me,Bo]})};var mn=class a{constructor(e){this.msg=e;this.refresh()}tags=[];refresh(){let e=(t=1,n=10)=>Math.floor(Math.random()*(n-t+1)+t);this.tags=[{value:e(),name:"NG-ALAIN"},{value:e(),name:"AntV"},{value:e(),name:"F2"},{value:e(),name:"G2"},{value:e(),name:"G6"},{value:e(),name:"DataSet"},{value:e(),name:"\u58A8\u8005\u5B66\u9662"},{value:e(),name:"Analysis"},{value:e(),name:"Data Mining"},{value:e(),name:"Data Vis"},{value:e(),name:"Design"},{value:e(),name:"Grammar"},{value:e(),name:"Graphics"},{value:e(),name:"Graph"},{value:e(),name:"Hierarchy"},{value:e(),name:"Labeling"},{value:e(),name:"Layout"},{value:e(),name:"Quantitative"},{value:e(),name:"Relation"},{value:e(),name:"Statistics"},{value:e(),name:"\u53EF\u89C6\u5316"},{value:e(),name:"\u6570\u636E"},{value:e(),name:"\u6570\u636E\u53EF\u89C6\u5316"},{value:e(),name:"Arc Diagram"},{value:e(),name:"Bar Chart"},{value:e(),name:"Canvas"},{value:e(),name:"Chart"},{value:e(),name:"DAG"},{value:e(),name:"DG"},{value:e(),name:"Facet"},{value:e(),name:"Geo"},{value:e(),name:"Line"},{value:e(),name:"MindMap"},{value:e(),name:"Pie"},{value:e(),name:"Pizza Chart"},{value:e(),name:"Punch Card"},{value:e(),name:"SVG"},{value:e(),name:"Sunburst"},{value:e(),name:"Tree"},{value:e(),name:"UML"},{value:e(),name:"Chart"},{value:e(),name:"View"},{value:e(),name:"Geom"},{value:e(),name:"Shape"},{value:e(),name:"Scale"},{value:e(),name:"Animate"},{value:e(),name:"Global"},{value:e(),name:"Slider"},{value:e(),name:"Connector"},{value:e(),name:"Transform"},{value:e(),name:"Util"},{value:e(),name:"DomUtil"},{value:e(),name:"MatrixUtil"},{value:e(),name:"PathUtil"},{value:e(),name:"G"},{value:e(),name:"2D"},{value:e(),name:"3D"},{value:e(),name:"Line"},{value:e(),name:"Area"},{value:e(),name:"Interval"},{value:e(),name:"Schema"},{value:e(),name:"Edge"},{value:e(),name:"Polygon"},{value:e(),name:"Heatmap"},{value:e(),name:"Render"},{value:e(),name:"Tooltip"},{value:e(),name:"Axis"},{value:e(),name:"Guide"},{value:e(),name:"Coord"},{value:e(),name:"Legend"},{value:e(),name:"Path"},{value:e(),name:"Helix"},{value:e(),name:"Theta"},{value:e(),name:"Rect"},{value:e(),name:"Polar"},{value:e(),name:"Dsv"},{value:e(),name:"Csv"},{value:e(),name:"Tsv"},{value:e(),name:"GeoJSON"},{value:e(),name:"TopoJSON"},{value:e(),name:"Filter"},{value:e(),name:"Map"},{value:e(),name:"Pick"},{value:e(),name:"Rename"},{value:e(),name:"Filter"},{value:e(),name:"Map"},{value:e(),name:"Pick"},{value:e(),name:"Rename"},{value:e(),name:"Reverse"},{value:e(),name:"sort"},{value:e(),name:"Subset"},{value:e(),name:"Partition"},{value:e(),name:"Imputation"},{value:e(),name:"Fold"},{value:e(),name:"Aggregate"},{value:e(),name:"Proportion"},{value:e(),name:"Histogram"},{value:e(),name:"Quantile"},{value:e(),name:"Treemap"},{value:e(),name:"Hexagon"},{value:e(),name:"Binning"},{value:e(),name:"kernel"},{value:e(),name:"Regression"},{value:e(),name:"Density"},{value:e(),name:"Sankey"},{value:e(),name:"Voronoi"},{value:e(),name:"Projection"},{value:e(),name:"Centroid"},{value:e(),name:"H5"},{value:e(),name:"Mobile"},{value:e(),name:"K\u7EBF\u56FE"},{value:e(),name:"\u5173\u7CFB\u56FE"},{value:e(),name:"\u70DB\u5F62\u56FE"},{value:e(),name:"\u80A1\u7968\u56FE"},{value:e(),name:"\u76F4\u65B9\u56FE"},{value:e(),name:"\u91D1\u5B57\u5854\u56FE"},{value:e(),name:"\u5206\u9762"},{value:e(),name:"\u5357\u4E01\u683C\u5C14\u73AB\u7470\u56FE"},{value:e(),name:"\u997C\u56FE"},{value:e(),name:"\u7EBF\u56FE"},{value:e(),name:"\u70B9\u56FE"},{value:e(),name:"\u6563\u70B9\u56FE"},{value:e(),name:"\u5B50\u5F39\u56FE"},{value:e(),name:"\u67F1\u72B6\u56FE"},{value:e(),name:"\u4EEA\u8868\u76D8"},{value:e(),name:"\u6C14\u6CE1\u56FE"},{value:e(),name:"\u6F0F\u6597\u56FE"},{value:e(),name:"\u70ED\u529B\u56FE"},{value:e(),name:"\u7389\u73A6\u56FE"},{value:e(),name:"\u76F4\u65B9\u56FE"},{value:e(),name:"\u77E9\u5F62\u6811\u56FE"},{value:e(),name:"\u7BB1\u5F62\u56FE"},{value:e(),name:"\u8272\u5757\u56FE"},{value:e(),name:"\u87BA\u65CB\u56FE"},{value:e(),name:"\u8BCD\u4E91"},{value:e(),name:"\u8BCD\u4E91\u56FE"},{value:e(),name:"\u96F7\u8FBE\u56FE"},{value:e(),name:"\u9762\u79EF\u56FE"},{value:e(),name:"\u9A6C\u8D5B\u514B\u56FE"},{value:e(),name:"\u76D2\u987B\u56FE"},{value:e(),name:"\u5750\u6807\u8F74"},{value:e(),name:""},{value:e(),name:"Jacques Bertin"},{value:e(),name:"Leland Wilkinson"},{value:e(),name:"William Playfair"},{value:e(),name:"\u5173\u8054"},{value:e(),name:"\u5206\u5E03"},{value:e(),name:"\u533A\u95F4"},{value:e(),name:"\u5360\u6BD4"},{value:e(),name:"\u5730\u56FE"},{value:e(),name:"\u65F6\u95F4"},{value:e(),name:"\u6BD4\u8F83"},{value:e(),name:"\u6D41\u7A0B"},{value:e(),name:"\u8D8B\u52BF"},{value:e(),name:"\u4EA6\u53F6"},{value:e(),name:"\u518D\u98DE"},{value:e(),name:"\u5B8C\u767D"},{value:e(),name:"\u5DF4\u601D"},{value:e(),name:"\u5F20\u521D\u5C18"},{value:e(),name:"\u5FA1\u672F"},{value:e(),name:"\u6709\u7530"},{value:e(),name:"\u6C89\u9C7C"},{value:e(),name:"\u7389\u4F2F"},{value:e(),name:"\u753B\u5EB7"},{value:e(),name:"\u796F\u9038"},{value:e(),name:"\u7EDD\u4E91"},{value:e(),name:"\u7F57\u5BAA"},{value:e(),name:"\u8427\u5E86"},{value:e(),name:"\u8463\u73CA\u73CA"},{value:e(),name:"\u9646\u6C89"},{value:e(),name:"\u987E\u503E"},{value:e(),name:"Domo"},{value:e(),name:"GPL"},{value:e(),name:"PAI"},{value:e(),name:"SPSS"},{value:e(),name:"SYSTAT"},{value:e(),name:"Tableau"},{value:e(),name:"D3"},{value:e(),name:"Vega"},{value:e(),name:"\u7EDF\u8BA1\u56FE\u8868"}]}handleClick(e){this.msg.info(`${e.item.name} - ${e.item.value}`)}static \u0275fac=function(t){return new(t||a)(fe(ee))};static \u0275cmp=c({type:a,selectors:[["chart-tag-cloud-basic"]],decls:3,vars:1,consts:[["nz-button","","nzType","primary",3,"click"],["height","400",3,"clickItem","data"]],template:function(t,n){t&1&&(r(0,"button",0),x("click",function(){return n.refresh()}),f(1,"Refresh"),d(),r(2,"g2-tag-cloud",1),x("clickItem",function(s){return n.handleClick(s)}),d()),t&2&&(o(2),i("data",n.tags))},dependencies:[X,K,J,Y,cn,at],encapsulation:2})};var ln=class a{item={cols:1,urls:{"zh-CN":"packages/chart/tag-cloud/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u6807\u7B7E\u4E91\u662F\u4E00\u5957\u76F8\u5173\u7684\u6807\u7B7E\u4EE5\u53CA\u4E0E\u6B64\u76F8\u5E94\u7684\u6743\u91CD\u5C55\u793A\u65B9\u5F0F\uFF0C\u4E00\u822C\u5178\u578B\u7684\u6807\u7B7E\u4E91\u6709 30 \u81F3 150 \u4E2A\u6807\u7B7E\uFF0C\u800C\u6743\u91CD\u5F71\u54CD\u4F7F\u7528\u7684\u5B57\u4F53\u5927\u5C0F\u6216\u5176\u4ED6\u89C6\u89C9\u6548\u679C\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-tag-cloud"><a class="lake-link"><i data-anchor="g2-tag-cloud"></i></a>g2-tag-cloud</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>200</code></td></tr><tr><td><code>[height]</code></td><td>\u9AD8\u5EA6\u503C</td><td><code>number</code></td><td><code>200</code></td></tr><tr><td><code>[width]</code></td><td>\u5BBD\u5EA6\u503C\uFF0C\u82E5\u4E0D\u6307\u5B9A\u81EA\u52A8\u6309\u5BBF\u4E3B\u5143\u7D20\u7684\u5BBD\u5EA6</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[data]</code></td><td>\u6570\u636E</td><td><code>G2TagCloudData[]</code></td><td><code>[]</code></td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(clickItem)</code></td><td>\u70B9\u51FB\u9879\u56DE\u8C03</td><td><code>EventEmitter&lt;G2TagCloudClickItem></code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table><h3 id="G2TagCloudData"><a class="lake-link"><i data-anchor="G2TagCloudData"></i></a>G2TagCloudData</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[name]</code></td><td>\u540D\u79F0</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[value]</code></td><td>\u503C</td><td><code>number</code></td><td>-</td></tr></tbody></table>',meta:{title:"g2-tag-cloud",subtitle:"\u6807\u7B7E\u4E91",cols:1,type:"G2",module:"import { G2TagCloudModule } from '@delon/chart/tag-cloud';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-tag-cloud",title:"g2-tag-cloud",h:3},{id:"G2TagCloudData",title:"G2TagCloudData",h:3}]}]}},demo:!0};codes=[{id:"chart-tag-cloud-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Component } from '@angular/core';

import { G2TagCloudClickItem, G2TagCloudData, G2TagCloudModule } from '@delon/chart/tag-cloud';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-tag-cloud-basic',
  template: \`
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-tag-cloud [data]="tags" height="400" (clickItem)="handleClick($event)" />
  \`,
  imports: [NzButtonModule, G2TagCloudModule]
})
export class ChartTagCloudBasicComponent {
  tags: G2TagCloudData[] = [];

  constructor(private msg: NzMessageService) {
    this.refresh();
  }

  refresh(): void {
    const rv = (min: number = 1, max: number = 10): number => Math.floor(Math.random() * (max - min + 1) + min);

    this.tags = [
      { value: rv(), name: 'NG-ALAIN' },
      { value: rv(), name: 'AntV' },
      { value: rv(), name: 'F2' },
      { value: rv(), name: 'G2' },
      { value: rv(), name: 'G6' },
      { value: rv(), name: 'DataSet' },
      { value: rv(), name: '\u58A8\u8005\u5B66\u9662' },
      { value: rv(), name: 'Analysis' },
      { value: rv(), name: 'Data Mining' },
      { value: rv(), name: 'Data Vis' },
      { value: rv(), name: 'Design' },
      { value: rv(), name: 'Grammar' },
      { value: rv(), name: 'Graphics' },
      { value: rv(), name: 'Graph' },
      { value: rv(), name: 'Hierarchy' },
      { value: rv(), name: 'Labeling' },
      { value: rv(), name: 'Layout' },
      { value: rv(), name: 'Quantitative' },
      { value: rv(), name: 'Relation' },
      { value: rv(), name: 'Statistics' },
      { value: rv(), name: '\u53EF\u89C6\u5316' },
      { value: rv(), name: '\u6570\u636E' },
      { value: rv(), name: '\u6570\u636E\u53EF\u89C6\u5316' },
      { value: rv(), name: 'Arc Diagram' },
      { value: rv(), name: 'Bar Chart' },
      { value: rv(), name: 'Canvas' },
      { value: rv(), name: 'Chart' },
      { value: rv(), name: 'DAG' },
      { value: rv(), name: 'DG' },
      { value: rv(), name: 'Facet' },
      { value: rv(), name: 'Geo' },
      { value: rv(), name: 'Line' },
      { value: rv(), name: 'MindMap' },
      { value: rv(), name: 'Pie' },
      { value: rv(), name: 'Pizza Chart' },
      { value: rv(), name: 'Punch Card' },
      { value: rv(), name: 'SVG' },
      { value: rv(), name: 'Sunburst' },
      { value: rv(), name: 'Tree' },
      { value: rv(), name: 'UML' },
      { value: rv(), name: 'Chart' },
      { value: rv(), name: 'View' },
      { value: rv(), name: 'Geom' },
      { value: rv(), name: 'Shape' },
      { value: rv(), name: 'Scale' },
      { value: rv(), name: 'Animate' },
      { value: rv(), name: 'Global' },
      { value: rv(), name: 'Slider' },
      { value: rv(), name: 'Connector' },
      { value: rv(), name: 'Transform' },
      { value: rv(), name: 'Util' },
      { value: rv(), name: 'DomUtil' },
      { value: rv(), name: 'MatrixUtil' },
      { value: rv(), name: 'PathUtil' },
      { value: rv(), name: 'G' },
      { value: rv(), name: '2D' },
      { value: rv(), name: '3D' },
      { value: rv(), name: 'Line' },
      { value: rv(), name: 'Area' },
      { value: rv(), name: 'Interval' },
      { value: rv(), name: 'Schema' },
      { value: rv(), name: 'Edge' },
      { value: rv(), name: 'Polygon' },
      { value: rv(), name: 'Heatmap' },
      { value: rv(), name: 'Render' },
      { value: rv(), name: 'Tooltip' },
      { value: rv(), name: 'Axis' },
      { value: rv(), name: 'Guide' },
      { value: rv(), name: 'Coord' },
      { value: rv(), name: 'Legend' },
      { value: rv(), name: 'Path' },
      { value: rv(), name: 'Helix' },
      { value: rv(), name: 'Theta' },
      { value: rv(), name: 'Rect' },
      { value: rv(), name: 'Polar' },
      { value: rv(), name: 'Dsv' },
      { value: rv(), name: 'Csv' },
      { value: rv(), name: 'Tsv' },
      { value: rv(), name: 'GeoJSON' },
      { value: rv(), name: 'TopoJSON' },
      { value: rv(), name: 'Filter' },
      { value: rv(), name: 'Map' },
      { value: rv(), name: 'Pick' },
      { value: rv(), name: 'Rename' },
      { value: rv(), name: 'Filter' },
      { value: rv(), name: 'Map' },
      { value: rv(), name: 'Pick' },
      { value: rv(), name: 'Rename' },
      { value: rv(), name: 'Reverse' },
      { value: rv(), name: 'sort' },
      { value: rv(), name: 'Subset' },
      { value: rv(), name: 'Partition' },
      { value: rv(), name: 'Imputation' },
      { value: rv(), name: 'Fold' },
      { value: rv(), name: 'Aggregate' },
      { value: rv(), name: 'Proportion' },
      { value: rv(), name: 'Histogram' },
      { value: rv(), name: 'Quantile' },
      { value: rv(), name: 'Treemap' },
      { value: rv(), name: 'Hexagon' },
      { value: rv(), name: 'Binning' },
      { value: rv(), name: 'kernel' },
      { value: rv(), name: 'Regression' },
      { value: rv(), name: 'Density' },
      { value: rv(), name: 'Sankey' },
      { value: rv(), name: 'Voronoi' },
      { value: rv(), name: 'Projection' },
      { value: rv(), name: 'Centroid' },
      { value: rv(), name: 'H5' },
      { value: rv(), name: 'Mobile' },
      { value: rv(), name: 'K\u7EBF\u56FE' },
      { value: rv(), name: '\u5173\u7CFB\u56FE' },
      { value: rv(), name: '\u70DB\u5F62\u56FE' },
      { value: rv(), name: '\u80A1\u7968\u56FE' },
      { value: rv(), name: '\u76F4\u65B9\u56FE' },
      { value: rv(), name: '\u91D1\u5B57\u5854\u56FE' },
      { value: rv(), name: '\u5206\u9762' },
      { value: rv(), name: '\u5357\u4E01\u683C\u5C14\u73AB\u7470\u56FE' },
      { value: rv(), name: '\u997C\u56FE' },
      { value: rv(), name: '\u7EBF\u56FE' },
      { value: rv(), name: '\u70B9\u56FE' },
      { value: rv(), name: '\u6563\u70B9\u56FE' },
      { value: rv(), name: '\u5B50\u5F39\u56FE' },
      { value: rv(), name: '\u67F1\u72B6\u56FE' },
      { value: rv(), name: '\u4EEA\u8868\u76D8' },
      { value: rv(), name: '\u6C14\u6CE1\u56FE' },
      { value: rv(), name: '\u6F0F\u6597\u56FE' },
      { value: rv(), name: '\u70ED\u529B\u56FE' },
      { value: rv(), name: '\u7389\u73A6\u56FE' },
      { value: rv(), name: '\u76F4\u65B9\u56FE' },
      { value: rv(), name: '\u77E9\u5F62\u6811\u56FE' },
      { value: rv(), name: '\u7BB1\u5F62\u56FE' },
      { value: rv(), name: '\u8272\u5757\u56FE' },
      { value: rv(), name: '\u87BA\u65CB\u56FE' },
      { value: rv(), name: '\u8BCD\u4E91' },
      { value: rv(), name: '\u8BCD\u4E91\u56FE' },
      { value: rv(), name: '\u96F7\u8FBE\u56FE' },
      { value: rv(), name: '\u9762\u79EF\u56FE' },
      { value: rv(), name: '\u9A6C\u8D5B\u514B\u56FE' },
      { value: rv(), name: '\u76D2\u987B\u56FE' },
      { value: rv(), name: '\u5750\u6807\u8F74' },
      { value: rv(), name: '' },
      { value: rv(), name: 'Jacques Bertin' },
      { value: rv(), name: 'Leland Wilkinson' },
      { value: rv(), name: 'William Playfair' },
      { value: rv(), name: '\u5173\u8054' },
      { value: rv(), name: '\u5206\u5E03' },
      { value: rv(), name: '\u533A\u95F4' },
      { value: rv(), name: '\u5360\u6BD4' },
      { value: rv(), name: '\u5730\u56FE' },
      { value: rv(), name: '\u65F6\u95F4' },
      { value: rv(), name: '\u6BD4\u8F83' },
      { value: rv(), name: '\u6D41\u7A0B' },
      { value: rv(), name: '\u8D8B\u52BF' },
      { value: rv(), name: '\u4EA6\u53F6' },
      { value: rv(), name: '\u518D\u98DE' },
      { value: rv(), name: '\u5B8C\u767D' },
      { value: rv(), name: '\u5DF4\u601D' },
      { value: rv(), name: '\u5F20\u521D\u5C18' },
      { value: rv(), name: '\u5FA1\u672F' },
      { value: rv(), name: '\u6709\u7530' },
      { value: rv(), name: '\u6C89\u9C7C' },
      { value: rv(), name: '\u7389\u4F2F' },
      { value: rv(), name: '\u753B\u5EB7' },
      { value: rv(), name: '\u796F\u9038' },
      { value: rv(), name: '\u7EDD\u4E91' },
      { value: rv(), name: '\u7F57\u5BAA' },
      { value: rv(), name: '\u8427\u5E86' },
      { value: rv(), name: '\u8463\u73CA\u73CA' },
      { value: rv(), name: '\u9646\u6C89' },
      { value: rv(), name: '\u987E\u503E' },
      { value: rv(), name: 'Domo' },
      { value: rv(), name: 'GPL' },
      { value: rv(), name: 'PAI' },
      { value: rv(), name: 'SPSS' },
      { value: rv(), name: 'SYSTAT' },
      { value: rv(), name: 'Tableau' },
      { value: rv(), name: 'D3' },
      { value: rv(), name: 'Vega' },
      { value: rv(), name: '\u7EDF\u8BA1\u56FE\u8868' }
    ];
  }

  handleClick(data: G2TagCloudClickItem): void {
    this.msg.info(\`\${data.item.name} - \${data.item.value}\`);
  }
}`,lang:"ts",componentName:"ChartTagCloudBasicComponent",point:0,name:"basic",urls:"packages/chart/tag-cloud/demo/basic.md",type:"demo"}];static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["app-chart-tag-cloud"]],hostVars:2,hostBindings:function(t,n){t&2&&g("d-block","true")},decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,n){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"chart-tag-cloud-basic"),d()()()()),t&2&&(i("codes",n.codes)("item",n.item),o(),i("nzGutter",16),o(2),i("item",n.codes[0]),v("id",n.codes[0].id))},dependencies:[D,mn,G,k,I],encapsulation:2})};function Ao(a,e){if(a&1&&(U(0),r(1,"h4"),f(2),d(),q()),a&2){let t=M();o(2),L(t.title)}}function Eo(a,e){a&1&&m(0,"nz-skeleton")}var pe=class a extends te{title;maxAxis=2;data=[];titleMap;colorMap={y1:"#5B8FF9",y2:"#5AD8A6",y3:"#5D7092",y4:"#F6BD16",y5:"#E86452"};mask="HH:mm";maskSlider="HH:mm";position="top";height=450;padding=[40,8,64,40];borderWidth=2;slider=!0;clickItem=new ne;onlyChangeData=e=>{let t=e.titleMap;return!(t&&!t.firstChange&&t.currentValue!==t.previousValue)};install(){let{node:e,height:t,padding:n,slider:l,maxAxis:s,theme:u,maskSlider:T}=this,N=this._chart=new this.winG2.Chart({container:e.nativeElement,autoFit:!0,height:t,padding:n,theme:u});N.axis("time",{title:null}),N.axis("y1",{title:null});for(let y=2;y<=s;y++)N.axis(`y${y}`,!1);N.line().position("time*y1");for(let y=2;y<=s;y++)N.line().position(`time*y${y}`);N.tooltip({showCrosshairs:!0,shared:!0});let C=be(be({},[]),n);C[0]=0,l&&N.option("slider",{height:26,start:0,end:1,trendCfg:{isArea:!1},minLimit:2,formatter:y=>oe(y,T)}),N.on("plot:click",y=>{let j=this._chart.getSnapRecords({x:y.x,y:y.y});this.ngZone.run(()=>this.clickItem.emit({item:j[0]._origin,ev:y}))}),N.on("legend-item:click",y=>{let j=y?.target?.get("delegateObject").item,W=j?.id,w=N.geometries.find($=>$.getAttribute("position").getFields()[1]===W);w&&w.changeVisible(!j.unchecked)}),this.ready.next(N),this.changeData(),N.render()}changeData(){let{_chart:e,height:t,padding:n,mask:l,titleMap:s,position:u,colorMap:T,borderWidth:N,maxAxis:C}=this,y=[...this.data];if(!e||y.length<=0)return;let j=[...Array(C)].map((z,F)=>F+1);e.legend({position:u,custom:!0,items:j.map(z=>{let F=`y${z}`;return{id:F,name:s[F],value:F,marker:{style:{fill:T[F]}}}})}),e.geometries.forEach((z,F)=>{z.color(T[`y${F+1}`]).size(N)}),e.height=t,e.padding=n,y=y.map(z=>(z.time=Qn(z.time),z._time=+z.time,z)).sort((z,F)=>z._time-F._time);let W=Math.max(...j.map(z=>[...y].sort((F,mt)=>mt[`y${z}`]-F[`y${z}`])[0][`y${z}`])),w={};j.forEach(z=>{let F=`y${z}`;w[F]={alias:s[F],max:W,min:0}}),e.scale(be({time:{type:"time",mask:l,range:[0,1]}},w));let $={start:y[0]._time,end:y[y.length-1]._time},P=y.filter(z=>z._time>=$.start&&z._time<=$.end);e.changeData(P)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=Z(a)))(n||a)}})();static \u0275cmp=c({type:a,selectors:[["g2-timeline"]],inputs:{title:"title",maxAxis:[2,"maxAxis","maxAxis",b],data:"data",titleMap:"titleMap",colorMap:"colorMap",mask:"mask",maskSlider:"maskSlider",position:"position",height:[2,"height","height",b],padding:"padding",borderWidth:[2,"borderWidth","borderWidth",b],slider:[2,"slider","slider",H]},outputs:{clickItem:"clickItem"},exportAs:["g2Timeline"],features:[Q],decls:4,vars:2,consts:[["container",""],[4,"nzStringTemplateOutlet"]],template:function(t,n){t&1&&(O(0,Ao,3,1,"ng-container",1),_(1,Eo,1,0,"nz-skeleton"),m(2,"div",null,0)),t&2&&(i("nzStringTemplateOutlet",n.title),o(),S(n.loaded?-1:1))},dependencies:[re,ce],encapsulation:2,changeDetection:0})};var Po=[pe],je=class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=A({type:a});static \u0275inj=B({imports:[E,de,me,Po]})};var Fo=()=>({y1:"\u5BA2\u6D41\u91CF",y2:"\u652F\u4ED8\u7B14\u6570"}),sn=class a{msg=R(ee);chartData=[];ngOnInit(){for(let e=0;e<20;e+=1)this.chartData.push({time:new Date().getTime()+1e3*60*30*e,y1:Math.floor(Math.random()*100)+1e3,y2:Math.floor(Math.random()*100)+10})}handleClick(e){this.msg.info(`\u5BA2\u6D41\u91CF: ${e.item.y1}, \u652F\u4ED8\u7B14\u6570: ${e.item.y2}`)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["chart-timeline-basic"]],decls:1,vars:4,consts:[[3,"clickItem","data","titleMap","height"]],template:function(t,n){t&1&&(r(0,"g2-timeline",0),x("clickItem",function(s){return n.handleClick(s)}),d()),t&2&&i("data",n.chartData)("titleMap",Ke(3,Fo))("height",200)},dependencies:[je,pe],encapsulation:2})};function Ro(a,e){if(a&1){let t=Qe();r(0,"button",0),x("click",function(){let l=Ve(t).$implicit,s=M();return Ue(s.refresh(l))}),f(1),d()}if(a&2){let t=e.$implicit;o(),ze("",t," axis")}}var pn=class a{chartData=[];titleMap={y1:"\u6307\u68071",y2:"\u6307\u68072"};maxAxis=2;axisList=new Array(5).fill(0).map((e,t)=>t+1);constructor(){this.refresh()}genData(e){let t={y1:""};for(let l=1;l<=e;l++)t[`y${l}`]=`\u6307\u6807${l}`;let n=[];for(let l=0;l<20;l+=1){let s={time:new Date().getTime()+18e5*l,y1:0};for(let u=1;u<=e;u++)s[`y${u}`]=Math.floor(Math.random()*100)+500*u;n.push(s)}return{titleMap:t,data:n}}refresh(e){this.maxAxis=e??this.maxAxis;let{titleMap:t,data:n}=this.genData(this.maxAxis);this.chartData=n,this.titleMap=t}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["chart-timeline-max-axis"]],decls:5,vars:4,consts:[["nz-button","","nzType","primary",3,"click"],["nz-button","","nzType","primary"],[3,"maxAxis","data","titleMap","height"]],template:function(t,n){t&1&&(r(0,"button",0),x("click",function(){return n.refresh()}),f(1,"Refresh"),d(),xe(2,Ro,2,1,"button",1,Me),m(4,"g2-timeline",2)),t&2&&(o(2),De(n.axisList),o(2),i("maxAxis",n.maxAxis)("data",n.chartData)("titleMap",n.titleMap)("height",300))},dependencies:[je,pe,X,K,J,Y],encapsulation:2})};var Oo=()=>({y1:"\u5BA2\u6D41\u91CF",y2:"\u652F\u4ED8\u7B14\u6570"}),un=class a{msg=R(ee);chartData=[];ngOnInit(){for(let e=0;e<20;e+=1)this.chartData.push({time:new Date().getTime()+1e3*60*60*24*e,y1:Math.floor(Math.random()*100)+1e3,y2:Math.floor(Math.random()*100)+10})}handleClick(e){this.msg.info(`\u5BA2\u6D41\u91CF: ${e.item.y1}, \u652F\u4ED8\u7B14\u6570: ${e.item.y2}`)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["chart-timeline-mask"]],decls:1,vars:4,consts:[["mask","MM\u6708DD\u65E5","maskSlider","MM\u6708dd\u65E5",3,"clickItem","data","titleMap","height"]],template:function(t,n){t&1&&(r(0,"g2-timeline",0),x("clickItem",function(s){return n.handleClick(s)}),d()),t&2&&i("data",n.chartData)("titleMap",Ke(3,Oo))("height",200)},dependencies:[je,pe],encapsulation:2})};var hn=class a{item={cols:1,urls:{"zh-CN":"packages/chart/timeline/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u4F7F\u7528 <code>timeline</code> \u7EC4\u4EF6\u53EF\u4EE5\u5B9E\u73B0\u5E26\u6709\u65F6\u95F4\u8F74\u7684\u67F1\u72B6\u56FE\u5C55\u73B0\uFF0C\u800C\u5176\u4E2D\u7684 <code>x</code> \u5C5E\u6027\uFF0C\u5219\u662F\u65F6\u95F4\u503C\u7684\u6307\u5411\uFF0C\u9ED8\u8BA4\u6700\u591A\u652F\u6301\u540C\u65F6\u5C55\u73B0\u4E24\u4E2A\u6307\u6807\uFF0C\u5206\u522B\u662F <code>y1</code> \u548C <code>y2</code>\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-timeline"><a class="lake-link"><i data-anchor="g2-timeline"></i></a>g2-timeline</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[title]</code></td><td>\u56FE\u8868\u6807\u9898</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[maxAxis]</code></td><td>\u6700\u5927\u6307\u6807\u6570\u91CF</td><td><code>number</code></td><td><code>2</code></td></tr><tr><td><code>[data]</code></td><td>\u6570\u636E\uFF0C\u6CE8\uFF1A\u6839\u636E <code>maxAxis</code> \u503C\u4F20\u9012\u6307\u6807\u6570\u636E</td><td><code>G2TimelineData[]</code></td><td>-</td></tr><tr><td><code>[titleMap]</code></td><td>\u6307\u6807\u522B\u540D</td><td><code>G2TimelineMap</code></td><td>-</td></tr><tr><td><code>[colorMap]</code></td><td>\u989C\u8272</td><td><code>G2TimelineMap</code></td><td><code>{ y1: '#5B8FF9', y2: '#5AD8A6', y3: '#5D7092', y4: '#F6BD16', y5: '#E86452' }</code></td></tr><tr><td><code>[height]</code></td><td>\u9AD8\u5EA6\u503C</td><td><code>number</code></td><td><code>400</code></td></tr><tr><td><code>[padding]</code></td><td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td><td><code>number[]</code></td><td><code>[40, 8, 64, 40]</code></td></tr><tr><td><code>[borderWidth]</code></td><td>\u7EBF\u6761</td><td><code>number</code></td><td><code>2</code></td></tr><tr><td><code>[mask]</code></td><td>\u65E5\u671F\u683C\u5F0F\uFF0C\u4F7F\u7528 <a target="_blank" href="https://g2.antv.vision/zh/docs/manual/tutorial/scale#time" data-url="https://g2.antv.vision/zh/docs/manual/tutorial/scale#time">G2 Mask\u65E5\u671F\u683C\u5F0F</a></td><td><code>string</code></td><td><code>HH:mm</code></td></tr><tr><td><code>[maskSlider]</code></td><td>\u6ED1\u52A8\u6761\u65E5\u671F\u683C\u5F0F\uFF0C\u4F7F\u7528 <a target="_blank" href="https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table" data-url="https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table">date-fns \u65E5\u671F\u683C\u5F0F</a></td><td><code>string</code></td><td><code>HH:mm</code></td></tr><tr><td><code>[position]</code></td><td>\u6807\u9898\u4F4D\u7F6E</td><td><code>'top','right','bottom','left'</code></td><td><code>'top'</code></td></tr><tr><td><code>[slider]</code></td><td>\u662F\u5426\u9700\u8981\u6ED1\u52A8\u6761</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(clickItem)</code></td><td>\u70B9\u51FB\u9879\u56DE\u8C03</td><td><code>EventEmitter&lt;G2TimelineClickItem></code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table><h3 id="G2TimelineData"><a class="lake-link"><i data-anchor="G2TimelineData"></i></a>G2TimelineData</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[time]</code></td><td>\u65E5\u671F\u683C\u5F0F</td><td><code>Date | number</code></td><td>-</td></tr><tr><td><code>[y1]</code></td><td>\u6307\u68071\u6570\u636E</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[y2]</code></td><td>\u6307\u68072\u6570\u636E</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[y3]</code></td><td>\u6307\u68073\u6570\u636E</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[y4]</code></td><td>\u6307\u68074\u6570\u636E</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[y5]</code></td><td>\u6307\u68075\u6570\u636E</td><td><code>number</code></td><td>-</td></tr></tbody></table><h3 id="G2TimelineMap"><a class="lake-link"><i data-anchor="G2TimelineMap"></i></a>G2TimelineMap</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[y1]</code></td><td>\u6307\u68071</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[y2]</code></td><td>\u6307\u68072</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[y3]</code></td><td>\u6307\u68073</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[y4]</code></td><td>\u6307\u68074</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[y5]</code></td><td>\u6307\u68075</td><td><code>string</code></td><td>-</td></tr></tbody></table>`,meta:{title:"g2-timeline",subtitle:"\u6298\u7EBF\u56FE",cols:1,type:"G2",module:"import { G2TimelineModule } from '@delon/chart/timeline';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-timeline",title:"g2-timeline",h:3},{id:"G2TimelineData",title:"G2TimelineData",h:3},{id:"G2TimelineMap",title:"G2TimelineMap",h:3}]}]}},demo:!0};codes=[{id:"chart-timeline-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u5E26\u6709\u65F6\u95F4\u8F74\u7684\u56FE\u8868\u3002</p>",code:`import { Component, OnInit, inject } from '@angular/core';

import { G2TimelineClickItem, G2TimelineData, G2TimelineModule } from '@delon/chart/timeline';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-timeline-basic',
  template: \` <g2-timeline
    [data]="chartData"
    [titleMap]="{ y1: '\u5BA2\u6D41\u91CF', y2: '\u652F\u4ED8\u7B14\u6570' }"
    [height]="200"
    (clickItem)="handleClick($event)"
  />\`,
  imports: [G2TimelineModule]
})
export class ChartTimelineBasicComponent implements OnInit {
  private readonly msg = inject(NzMessageService);
  chartData: G2TimelineData[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 20; i += 1) {
      this.chartData.push({
        time: new Date().getTime() + 1000 * 60 * 30 * i,
        y1: Math.floor(Math.random() * 100) + 1000,
        y2: Math.floor(Math.random() * 100) + 10
      });
    }
  }

  handleClick(data: G2TimelineClickItem): void {
    this.msg.info(\`\u5BA2\u6D41\u91CF: \${data.item.y1}, \u652F\u4ED8\u7B14\u6570: \${data.item.y2}\`);
  }
}`,lang:"ts",componentName:"ChartTimelineBasicComponent",point:0,name:"basic",urls:"packages/chart/timeline/demo/basic.md",type:"demo"},{id:"chart-timeline-max-axis",meta:{order:1,title:{"zh-CN":"\u591A\u6307\u6807","en-US":"Multiple indicators"}},summary:"<p>\u5229\u7528 <code>maxAxis</code> \u5C5E\u6027\u6765\u8C03\u6574\u591A\u4E2A\u6307\u6807\uFF0C\u6700\u591A\u652F\u6301 <code>5</code> \u4E2A\u6307\u6807\u503C\u3002</p>",code:`import { Component } from '@angular/core';

import { G2TimelineData, G2TimelineMap, G2TimelineModule } from '@delon/chart/timeline';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'chart-timeline-max-axis',
  template: \`
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    @for (i of axisList; track $index) {
      <button nz-button (click)="refresh(i)" nzType="primary">{{ i }} axis</button>
    }
    <g2-timeline [maxAxis]="maxAxis" [data]="chartData" [titleMap]="titleMap" [height]="300" />
  \`,
  imports: [G2TimelineModule, NzButtonModule]
})
export class ChartTimelineMaxAxisComponent {
  chartData: G2TimelineData[] = [];
  titleMap: G2TimelineMap = { y1: '\u6307\u68071', y2: '\u6307\u68072' };
  maxAxis = 2;
  axisList = new Array(5).fill(0).map((_, idx) => idx + 1);

  constructor() {
    this.refresh();
  }

  private genData(max: number): { titleMap: G2TimelineMap; data: G2TimelineData[] } {
    const titleMap: G2TimelineMap = { y1: '' };
    for (let i = 1; i <= max; i++) {
      titleMap[\`y\${i}\`] = \`\u6307\u6807\${i}\`;
    }

    const data: G2TimelineData[] = [];
    for (let i = 0; i < 20; i += 1) {
      const item: G2TimelineData = {
        time: new Date().getTime() + 1000 * 60 * 30 * i,
        y1: 0
      };
      for (let i = 1; i <= max; i++) {
        item[\`y\${i}\`] = Math.floor(Math.random() * 100) + 500 * i;
      }
      data.push(item);
    }
    return { titleMap, data };
  }

  refresh(max?: number): void {
    this.maxAxis = max ?? this.maxAxis;
    const { titleMap, data } = this.genData(this.maxAxis);
    this.chartData = data;
    this.titleMap = titleMap;
  }
}`,lang:"ts",componentName:"ChartTimelineMaxAxisComponent",point:1,name:"max-axis",urls:"packages/chart/timeline/demo/max-axis.md",type:"demo"},{id:"chart-timeline-mask",meta:{order:2,title:{"zh-CN":"\u65F6\u95F4\u683C\u5F0F\u5316","en-US":"Time mask format"}},summary:"<p>\u5229\u7528 <code>mask</code> \u548C <code>maskSlider</code> \u6765\u6539\u53D8\u65F6\u95F4\u683C\u5F0F\u3002</p>",code:`import { Component, OnInit, inject } from '@angular/core';

import { G2TimelineClickItem, G2TimelineData, G2TimelineModule } from '@delon/chart/timeline';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-timeline-mask',
  template: \` <g2-timeline
    [data]="chartData"
    [titleMap]="{ y1: '\u5BA2\u6D41\u91CF', y2: '\u652F\u4ED8\u7B14\u6570' }"
    [height]="200"
    mask="MM\u6708DD\u65E5"
    maskSlider="MM\u6708dd\u65E5"
    (clickItem)="handleClick($event)"
  />\`,
  imports: [G2TimelineModule]
})
export class ChartTimelineMaskComponent implements OnInit {
  private readonly msg = inject(NzMessageService);
  chartData: G2TimelineData[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 20; i += 1) {
      this.chartData.push({
        time: new Date().getTime() + 1000 * 60 * 60 * 24 * i,
        y1: Math.floor(Math.random() * 100) + 1000,
        y2: Math.floor(Math.random() * 100) + 10
      });
    }
  }

  handleClick(data: G2TimelineClickItem): void {
    this.msg.info(\`\u5BA2\u6D41\u91CF: \${data.item.y1}, \u652F\u4ED8\u7B14\u6570: \${data.item.y2}\`);
  }
}`,lang:"ts",componentName:"ChartTimelineMaskComponent",point:2,name:"mask",urls:"packages/chart/timeline/demo/mask.md",type:"demo"}];static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["app-chart-timeline"]],hostVars:2,hostBindings:function(t,n){t&2&&g("d-block","true")},decls:9,vars:9,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,n){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"chart-timeline-basic"),d(),r(5,"code-box",3),m(6,"chart-timeline-max-axis"),d(),r(7,"code-box",3),m(8,"chart-timeline-mask"),d()()()()),t&2&&(i("codes",n.codes)("item",n.item),o(),i("nzGutter",16),o(2),i("item",n.codes[0]),v("id",n.codes[0].id),o(2),i("item",n.codes[1]),v("id",n.codes[1].id),o(2),i("item",n.codes[2]),v("id",n.codes[2].id))},dependencies:[D,sn,pn,un,G,k,I],encapsulation:2})};var fn=class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["chart-trend-basic"]],decls:4,vars:0,consts:[["flag","up"],["flag","down",1,"ml-sm"]],template:function(t,n){t&1&&(r(0,"trend",0),f(1,"12%"),d(),r(2,"trend",1),f(3,"11%"),d())},dependencies:[Pe,ge],encapsulation:2})};var gn=class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["chart-trend-reverse"]],decls:4,vars:0,consts:[["flag","up","reverseColor",""],["flag","down","reverseColor","",1,"ml-sm"]],template:function(t,n){t&1&&(r(0,"trend",0),f(1,"12%"),d(),r(2,"trend",1),f(3,"11%"),d())},dependencies:[Pe,ge],encapsulation:2})};var Cn=class a{item={cols:1,urls:{"zh-CN":"packages/chart/trend/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u8D8B\u52BF\u7B26\u53F7\uFF0C\u6807\u8BB0\u4E0A\u5347\u548C\u4E0B\u964D\u8D8B\u52BF\u3002\u901A\u5E38\u7528\u7EFF\u8272\u4EE3\u8868\u201C\u597D\u201D\uFF0C\u7EA2\u8272\u4EE3\u8868\u201C\u4E0D\u597D\u201D\uFF0C\u80A1\u7968\u6DA8\u8DCC\u573A\u666F\u9664\u5916\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="trend"><a class="lake-link"><i data-anchor="trend"></i></a>trend</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[colorful]</code></td><td>\u662F\u5426\u5F69\u8272\u6807\u8BB0</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[flag]</code></td><td>\u4E0A\u5347\u4E0B\u964D\u6807\u8BC6</td><td><code>'up','down'</code></td><td>-</td></tr><tr><td><code>[reverseColor]</code></td><td>\u989C\u8272\u53CD\u8F6C</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>`,meta:{type:"G2",title:"trend",subtitle:"\u8D8B\u52BF\u6807\u8BB0",cols:1,module:"import { TrendModule } from '@delon/chart/trend';"},toc:[{id:"API",title:"API",h:2,children:[{id:"trend",title:"trend",h:3}]}]}},demo:!0};codes=[{id:"chart-trend-basic",meta:{order:0,title:"\u6F14\u793A"},summary:"<p>\u5728\u6570\u503C\u80CC\u540E\u6DFB\u52A0\u4E00\u4E2A\u5C0F\u56FE\u6807\u6765\u6807\u8BC6\u6DA8\u8DCC\u60C5\u51B5\u3002</p>",code:`import { Component } from '@angular/core';

import { TrendModule } from '@delon/chart/trend';

@Component({
  selector: 'chart-trend-basic',
  template: \`
    <trend flag="up">12%</trend>
    <trend flag="down" class="ml-sm">11%</trend>
  \`,
  imports: [TrendModule]
})
export class ChartTrendBasicComponent {}`,lang:"ts",componentName:"ChartTrendBasicComponent",point:0,name:"basic",urls:"packages/chart/trend/demo/basic.md",type:"demo"},{id:"chart-trend-reverse",meta:{order:1,title:"\u989C\u8272\u53CD\u8F6C"},summary:"<p>\u5728\u6570\u503C\u80CC\u540E\u6DFB\u52A0\u4E00\u4E2A\u5C0F\u56FE\u6807\u6765\u6807\u8BC6\u6DA8\u8DCC\u60C5\u51B5\u3002</p>",code:`import { Component } from '@angular/core';

import { TrendModule } from '@delon/chart/trend';

@Component({
  selector: 'chart-trend-reverse',
  template: \`
    <trend flag="up" reverseColor>12%</trend>
    <trend flag="down" reverseColor class="ml-sm">11%</trend>
  \`,
  imports: [TrendModule]
})
export class ChartTrendReverseComponent {}`,lang:"ts",componentName:"ChartTrendReverseComponent",point:1,name:"reverse",urls:"packages/chart/trend/demo/reverse.md",type:"demo"}];static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["app-chart-trend"]],hostVars:2,hostBindings:function(t,n){t&2&&g("d-block","true")},decls:7,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,n){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"chart-trend-basic"),d(),r(5,"code-box",3),m(6,"chart-trend-reverse"),d()()()()),t&2&&(i("codes",n.codes)("item",n.item),o(),i("nzGutter",16),o(2),i("item",n.codes[0]),v("id",n.codes[0].id),o(2),i("item",n.codes[1]),v("id",n.codes[1].id))},dependencies:[D,fn,gn,G,k,I],encapsulation:2})};var Wo=["container"],jo=(a,e)=>({height:a,width:e,overflow:"hidden"}),$o=a=>({width:a});function Ho(a,e){if(a&1&&(U(0),f(1),q()),a&2){let t=M(2);o(),L(t.title)}}function Lo(a,e){if(a&1&&(r(0,"span",3),O(1,Ho,2,1,"ng-container",5),d()),a&2){let t=M();o(),i("nzStringTemplateOutlet",t.title)}}var ct=class a{el=R(On).nativeElement;renderer=R(Wn);ngZone=R(pt);cdr=R(Ge);platform=R(gt);resize$=null;node;timer;animate=!0;delay=0;title;color="#1890FF";height=160;percent;renderChart(e){if(!this.resize$)return;this.updateRadio();let{percent:t,color:n,node:l,animate:s}=this,u=Math.min(Math.max(t/100,0),100),T=this;cancelAnimationFrame(this.timer);let N=l.nativeElement,C=N.getContext("2d"),y=N.width,j=N.height,W=y/2,w=2,$=W-w;C.beginPath(),C.lineWidth=w*2;let P=y-w,z=P/8,F=w,mt=0,ue=.2,he=ue,ot=0,_n=s?.005:.015,$e=[],Mn=W-w,Sn=-(Math.PI/2),In=!0;for(let V=Sn;V<Sn+2*Math.PI;V+=1/(8*Math.PI))$e.push([W+Mn*Math.cos(V),W+Mn*Math.sin(V)]);let lt=$e.shift();C.strokeStyle=n,C.moveTo(lt[0],lt[1]);function xa(){C.beginPath(),C.save();let V=[];for(let st=F;st<=F+P;st+=20/P){let Da=mt+(F+st)/z,Ta=Math.sin(Da)*he,An=st,En=2*$*(1-ot)+(W-$)-z*Ta;C.lineTo(An,En),V.push([An,En])}let Bn=V.shift();C.lineTo(F+P,j),C.lineTo(F,j),C.lineTo(Bn[0],Bn[1]);let xn=C.createLinearGradient(0,0,0,j);xn.addColorStop(0,"#ffffff"),xn.addColorStop(1,n),C.fillStyle=xn,C.fill(),C.restore()}function wn(){if(C.clearRect(0,0,y,j),In&&!e)if($e.length)if(s){let V=$e.shift();C.lineTo(V[0],V[1]),C.stroke()}else{for(let V of $e)C.lineTo(V[0],V[1]),C.stroke();$e=[]}else In=!1,C.lineTo(lt[0],lt[1]),C.stroke(),$e=null,C.globalCompositeOperation="destination-over",C.beginPath(),C.lineWidth=w,C.arc(W,W,Mn,0,2*Math.PI,!0),C.beginPath(),C.save(),C.arc(W,W,W-3*w,0,2*Math.PI,!0),C.restore(),C.clip(),C.fillStyle=n;else{if(u>=.85){if(he>ue/4){let V=ue*.01;he-=V}}else if(u<=.1){if(he<ue*1.5){let V=ue*.01;he+=V}}else{if(he<=ue){let V=ue*.01;he+=V}if(he>=ue){let V=ue*.01;he-=V}}u-ot>0&&(ot+=_n),u-ot<0&&(ot-=_n),mt+=.07,xa()}T.timer=requestAnimationFrame(wn)}wn()}updateRadio(){let{offsetWidth:e}=this.el.parentNode,t=e<this.height?e/this.height:1;this.renderer.setStyle(this.el,"transform",`scale(${t})`)}render(){this.renderChart(!1)}installResizeEvent(){this.resize$=He(window,"resize").pipe(Le(200)).subscribe(()=>this.updateRadio())}ngOnInit(){this.platform.isBrowser&&(this.installResizeEvent(),this.ngZone.runOutsideAngular(()=>setTimeout(()=>this.render(),this.delay)))}ngOnChanges(){this.ngZone.runOutsideAngular(()=>this.renderChart(!0)),this.cdr.detectChanges()}ngOnDestroy(){this.timer&&cancelAnimationFrame(this.timer),this.resize$&&this.resize$.unsubscribe()}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["g2-water-wave"]],viewQuery:function(t,n){if(t&1&&ut(Wo,7),t&2){let l;ht(l=ft())&&(n.node=l.first)}},hostVars:2,hostBindings:function(t,n){t&2&&g("g2-water-wave",!0)},inputs:{animate:[2,"animate","animate",H],delay:[2,"delay","delay",b],title:"title",color:"color",height:[2,"height","height",b],percent:[2,"percent","percent",b]},exportAs:["g2WaterWave"],features:[qe],decls:7,vars:13,consts:[["container",""],[1,"g2-water-wave__canvas"],[1,"g2-water-wave__desc"],[1,"g2-water-wave__desc-title"],[1,"g2-water-wave__desc-percent"],[4,"nzStringTemplateOutlet"]],template:function(t,n){t&1&&(r(0,"div"),m(1,"canvas",1,0),d(),r(3,"div",2),_(4,Lo,2,1,"span",3),r(5,"h4",4),f(6),d()()),t&2&&(ie(Vn(8,jo,n.height+"px",n.height+"px")),o(),v("width",n.height*2)("height",n.height*2),o(2),ie(le(11,$o,n.height+"px")),o(),S(n.title?4:-1),o(2),ze("",n.percent,"%"))},dependencies:[re],encapsulation:2,changeDetection:0})};var vn=class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=A({type:a});static \u0275inj=B({imports:[E,de]})};var yn=class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["chart-water-wave-basic"]],hostVars:2,hostBindings:function(t,n){t&2&&g("d-block",!0)},decls:1,vars:3,consts:[[3,"title","percent","height"]],template:function(t,n){t&1&&m(0,"g2-water-wave",0),t&2&&i("title","\u8865\u8D34\u8D44\u91D1\u5269\u4F59")("percent",34)("height",161)},dependencies:[vn,ct],encapsulation:2})};var bn=class a{item={cols:1,urls:{"zh-CN":"packages/chart/water-wave/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u6C34\u6CE2\u56FE\u662F\u4E00\u79CD\u6BD4\u4F8B\u7684\u5C55\u793A\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u66F4\u76F4\u89C2\u7684\u5C55\u793A\u5173\u952E\u503C\u7684\u5360\u6BD4\u3002</p><blockquote><p>\u9ED8\u8BA4\u4E0D\u652F\u6301\u7236\u5143\u7D20\u81EA\u9002\u5E94\uFF0C\u53EF\u4EE5\u76D1\u542C\u7236\u5143\u7D20\u7684\u53D8\u5316\u5E76\u4F7F\u7528 <code>render()</code> \u65B9\u6CD5\u6765\u91CD\u7F6E\u6E32\u67D3\u3002</p></blockquote></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-water-wave"><a class="lake-link"><i data-anchor="g2-water-wave"></i></a>g2-water-wave</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[animate]</code></td><td>\u662F\u5426\u663E\u793A\u52A8\u753B</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[title]</code></td><td>\u56FE\u8868\u6807\u9898</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td><code>160</code></td></tr><tr><td><code>[color]</code></td><td>\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>#1890FF</code></td></tr><tr><td><code>[percent]</code></td><td>\u8FDB\u5EA6\u6BD4\u4F8B</td><td><code>number</code></td><td>-</td></tr></tbody></table>',meta:{title:"g2-water-wave",subtitle:"\u6C34\u6CE2\u56FE",cols:1,type:"G2",module:"import { G2WaterWaveModule } from '@delon/chart/water-wave';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-water-wave",title:"g2-water-wave",h:3}]}]}},demo:!0};codes=[{id:"chart-water-wave-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Component } from '@angular/core';

import { G2WaterWaveModule } from '@delon/chart/water-wave';

@Component({
  selector: 'chart-water-wave-basic',
  template: \` <g2-water-wave [title]="'\u8865\u8D34\u8D44\u91D1\u5269\u4F59'" [percent]="34" [height]="161" /> \`,
  host: {
    '[class.d-block]': 'true'
  },
  imports: [G2WaterWaveModule]
})
export class ChartWaterWaveBasicComponent {}`,lang:"ts",componentName:"ChartWaterWaveBasicComponent",point:0,name:"basic",urls:"packages/chart/water-wave/demo/basic.md",type:"demo"}];static \u0275fac=function(t){return new(t||a)};static \u0275cmp=c({type:a,selectors:[["app-chart-water-wave"]],hostVars:2,hostBindings:function(t,n){t&2&&g("d-block","true")},decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,n){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"chart-water-wave-basic"),d()()()()),t&2&&(i("codes",n.codes)("item",n.item),o(),i("nzGutter",16),o(2),i("item",n.codes[0]),v("id",n.codes[0].id))},dependencies:[D,yn,G,k,I],encapsulation:2})};var xh=[{path:"",component:fa,children:[{path:"",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"faq",redirectTo:"faq/zh",pathMatch:"full"},{path:"faq/:lang",component:bt},{path:"getting-started",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"getting-started/:lang",component:Mt},{path:"bar",redirectTo:"bar/zh",pathMatch:"full"},{path:"bar/:lang",component:Dt},{path:"card",redirectTo:"card/zh",pathMatch:"full"},{path:"card/:lang",component:Gt},{path:"chart-echarts",redirectTo:"chart-echarts/zh",pathMatch:"full"},{path:"chart-echarts/:lang",component:St},{path:"custom",redirectTo:"custom/zh",pathMatch:"full"},{path:"custom/:lang",component:Bt},{path:"gauge",redirectTo:"gauge/zh",pathMatch:"full"},{path:"gauge/:lang",component:Pt},{path:"mini-area",redirectTo:"mini-area/zh",pathMatch:"full"},{path:"mini-area/:lang",component:Wt},{path:"mini-bar",redirectTo:"mini-bar/zh",pathMatch:"full"},{path:"mini-bar/:lang",component:Lt},{path:"mini-progress",redirectTo:"mini-progress/zh",pathMatch:"full"},{path:"mini-progress/:lang",component:qt},{path:"number-info",redirectTo:"number-info/zh",pathMatch:"full"},{path:"number-info/:lang",component:Yt},{path:"pie",redirectTo:"pie/zh",pathMatch:"full"},{path:"pie/:lang",component:en},{path:"radar",redirectTo:"radar/zh",pathMatch:"full"},{path:"radar/:lang",component:an},{path:"single-bar",redirectTo:"single-bar/zh",pathMatch:"full"},{path:"single-bar/:lang",component:dn},{path:"tag-cloud",redirectTo:"tag-cloud/zh",pathMatch:"full"},{path:"tag-cloud/:lang",component:ln},{path:"timeline",redirectTo:"timeline/zh",pathMatch:"full"},{path:"timeline/:lang",component:hn},{path:"trend",redirectTo:"trend/zh",pathMatch:"full"},{path:"trend/:lang",component:Cn},{path:"water-wave",redirectTo:"water-wave/zh",pathMatch:"full"},{path:"water-wave/:lang",component:bn}]}];export{xh as routes};
