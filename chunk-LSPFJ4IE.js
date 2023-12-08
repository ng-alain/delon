import{J as H,K,L as Tt,M as wt,N as U,O as L,P as Gt,Q as W,R as X,S as St,T as Bt,U as Et,V,W as q,X as It,_ as Nt}from"./chunk-3ZN2VXY5.js";import"./chunk-4C5KEUAI.js";import"./chunk-BSZYTUAL.js";import"./chunk-53WZVWSD.js";import{Q as zt,o as vt,p as Ct,q as bt,r as yt,s as xt,t as Dt}from"./chunk-WQIGBBDY.js";import"./chunk-U4OOB3MN.js";import"./chunk-MNMBEUPS.js";import{a as Mt}from"./chunk-LFL7JQ5T.js";import"./chunk-HQNBXND5.js";import"./chunk-PLUYYUV3.js";import"./chunk-CYYISHMD.js";import"./chunk-LUGCOC4B.js";import{a as x}from"./chunk-XFEF7HZC.js";import"./chunk-WK4VD42U.js";import{b as v}from"./chunk-3XXVNPSY.js";import{b as kt}from"./chunk-FBSRXXMD.js";import"./chunk-GPS3STYB.js";import"./chunk-MJWBK4BK.js";import"./chunk-53JX7EQO.js";import{s as b,t as y}from"./chunk-LJKXQ2Z5.js";import{F as O,R as T,g as ft,m as gt}from"./chunk-OAR6ASNJ.js";import{$a as N,Ab as mt,Eb as Y,Ja as m,Ka as M,La as ot,Oa as it,Qb as st,Ra as u,Rb as lt,Sa as r,Tb as pt,Ua as g,Ub as P,Yc as ht,Ye as E,ag as j,bb as Q,cg as D,da as tt,db as J,eb as Z,eg as k,fb as d,gb as c,gg as z,ha as s,hb as l,ia as et,jd as ut,lb as rt,na as nt,oa as at,pb as C,rb as dt,xb as A,yb as a,zb as ct}from"./chunk-JIFQ6OJY.js";var At=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/chart/docs/faq.en-US.md","zh-CN":"packages/chart/docs/faq.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><h2 id="Howtoauto-resizeofthecontainer"><a class="lake-link"><i data-anchor="Howtoauto-resizeofthecontainer"></i></a>How to auto-resize of the container?</h2><p>The G2 uses <code>window.addEventListener('resize', this.onResize)</code> to detect a change in parent dom element's size. So you need to manually monitor the change in the size of the container and call <code>chart.forceFit()</code> to force resize.</p></section><example-resizable-index></example-resizable-index><section class="markdown"></section>`,meta:{order:100,title:"FAQ",type:"Documents"},toc:[{id:"Howtoauto-resizeofthecontainer",title:"How to auto-resize of the container?",h:2}]},"zh-CN":{content:'<section class="markdown"><h2 id="\u5982\u4F55\u81EA\u9002\u5E94\u5BB9\u5668\u5BBD\u9AD8\uFF1F"><a class="lake-link"><i data-anchor="\u5982\u4F55\u81EA\u9002\u5E94\u5BB9\u5668\u5BBD\u9AD8\uFF1F"></i></a>\u5982\u4F55\u81EA\u9002\u5E94\u5BB9\u5668\u5BBD\u9AD8\uFF1F</h2><p>G2 \u5F53\u524D\u7248\u672C\u5E76\u4E0D\u4F1A\u6839\u636E\u5BB9\u5668\u5BBD\u9AD8\u81EA\u9002\u5E94\uFF0C\u76EE\u524D\u53EA\u4F1A\u6839\u636E\u6D4F\u89C8\u5668\u7A97\u4F53\u5927\u5C0F\u624D\u4F1A\u91CD\u65B0\u53D8\u66F4\u56FE\u8868\u5C3A\u5BF8\uFF0C\u56E0\u6B64\u9700\u8981\u624B\u52A8\u76D1\u542C\u5BB9\u5668\u5927\u5C0F\u7684\u53D8\u5316\u5E76\u8C03\u7528 <code>chart.forceFit()</code> \u91CD\u65B0\u6E32\u67D3\u56FE\u8868\u5C3A\u5BF8\u3002</p></section><example-resizable-index></example-resizable-index><section class="markdown"></section>',meta:{order:100,title:"\u5E38\u89C1\u95EE\u9898",type:"Documents"},toc:[{id:"\u5982\u4F55\u81EA\u9002\u5E94\u5BB9\u5668\u5BBD\u9AD8\uFF1F",title:"\u5982\u4F55\u81EA\u9002\u5E94\u5BB9\u5668\u5BBD\u9AD8\uFF1F",h:2}]}},demo:!1},this.codes=[]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["app-chart-faq"]],hostVars:2,hostBindings:function(n,o){n&2&&g("d-block","true")},decls:1,vars:2,consts:[[3,"codes","item"]],template:function(n,o){n&1&&l(0,"app-docs",0),n&2&&r("codes",o.codes)("item",o.item)},dependencies:[v],encapsulation:2});let i=e;return i})();var Pt=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/chart/docs/getting-started.en-US.md","zh-CN":"packages/chart/docs/getting-started.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>Chart provides the well-designed abstract chart components based on the <a target="_blank" href="https://antv.alipay.com/zh-cn/g2/3.x/index.html" data-url="https://antv.alipay.com/zh-cn/g2/3.x/index.html">G2</a>. These components provide the ability to use with complex mixed view or just use along for common business usage.</p><h2 id="Usage"><a class="lake-link"><i data-anchor="Usage"></i></a>Usage</h2><h3 id="G2classlibraryloading"><a class="lake-link"><i data-anchor="G2classlibraryloading"></i></a>G2 class library loading</h3><p>By default, the class library CDN address has been specified in <a href="/docs/global-config" data-url="/docs/global-config">Global Configuration</a>:</p><pre class="hljs language-ts"><code>// global-config.module.ts
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
};</code></pre><h3 id="Importmodule"><a class="lake-link"><i data-anchor="Importmodule"></i></a>Import module</h3><pre class="hljs language-ts"><code>// shared.module.ts
import { G2BarModule } from '@delon/chart/bar';

@NgModule({
  imports: [ G2BarModule ],
  exports: [ G2BarModule ]
})</code></pre><h2 id="CustomG2components"><a class="lake-link"><i data-anchor="CustomG2components"></i></a>Custom G2 components</h2><p>Use the <a href="/chart/custom" data-url="/chart/custom">g2-chart</a> component to better implement custom charts.</p><h2 id="Configurecharttheme"><a class="lake-link"><i data-anchor="Configurecharttheme"></i></a>Configure chart theme</h2><p>Configure the chart theme for all G2, but only provide interfaces. For the configuration chart theme parameters, please refer to <a target="_blank" href="https://g2.antv.vision/zh/docs/manual/tutorial/theme" data-url="https://g2.antv.vision/zh/docs/manual/tutorial/theme">G2 website</a>.</p><pre class="hljs language-ts"><code>// global-config.module.ts
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
})</code></pre><h2 id="\u81EA\u5B9A\u4E49G2\u7EC4\u4EF6"><a class="lake-link"><i data-anchor="\u81EA\u5B9A\u4E49G2\u7EC4\u4EF6"></i></a>\u81EA\u5B9A\u4E49 G2 \u7EC4\u4EF6</h2><p>\u4F7F\u7528 <a href="/chart/custom" data-url="/chart/custom">g2-chart</a> \u7EC4\u4EF6\u5FEB\u901F\u81EA\u5B9A\u4E49\u4E00\u4E2A\u56FE\u8868\uFF0C\u53EF\u4EE5\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u7EC4\u4EF6\u6E32\u67D3\u8FC7\u7A0B\u4E2D\u6240\u4EA7\u751F\u7684\u5947\u602A\u95EE\u9898\u3002</p><h2 id="\u914D\u7F6E\u56FE\u8868\u4E3B\u9898"><a class="lake-link"><i data-anchor="\u914D\u7F6E\u56FE\u8868\u4E3B\u9898"></i></a>\u914D\u7F6E\u56FE\u8868\u4E3B\u9898</h2><p>\u5BF9\u6240\u6709 G2 \u8FDB\u884C\u914D\u7F6E\u56FE\u8868\u4E3B\u9898\uFF0C\u4F46\u53EA\u63D0\u4F9B\u63A5\u53E3\uFF0C\u6709\u5173\u914D\u7F6E\u56FE\u8868\u4E3B\u9898\u53C2\u6570\uFF0C\u8BF7\u53C2\u8003<a target="_blank" href="https://g2.antv.vision/zh/docs/manual/tutorial/theme" data-url="https://g2.antv.vision/zh/docs/manual/tutorial/theme">G2\u5B98\u7F51</a>\u3002</p><pre class="hljs language-ts"><code>// global-config.module.ts
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
}</code></pre></section>`,meta:{order:1,title:"\u5F00\u59CB\u4F7F\u7528",type:"Documents"},toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528",h:2,children:[{id:"G2\u7C7B\u5E93\u52A0\u8F7D",title:"G2\u7C7B\u5E93\u52A0\u8F7D",h:3},{id:"\u5BFC\u5165\u6A21\u5757",title:"\u5BFC\u5165\u6A21\u5757",h:3}]},{id:"\u81EA\u5B9A\u4E49G2\u7EC4\u4EF6",title:"\u81EA\u5B9A\u4E49 G2 \u7EC4\u4EF6",h:2},{id:"\u914D\u7F6E\u56FE\u8868\u4E3B\u9898",title:"\u914D\u7F6E\u56FE\u8868\u4E3B\u9898",h:2}]}},demo:!1},this.codes=[]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["app-chart-getting-started"]],hostVars:2,hostBindings:function(n,o){n&2&&g("d-block","true")},decls:1,vars:2,consts:[[3,"codes","item"]],template:function(n,o){n&1&&l(0,"app-docs",0),n&2&&r("codes",o.codes)("item",o.item)},dependencies:[v],encapsulation:2});let i=e;return i})();var Ft=(()=>{let e=class e{constructor(t){this.msg=t,this.salesData=this.genData()}genData(){return new Array(12).fill({}).map((t,n)=>({x:`${n+1}\u6708`,y:Math.floor(Math.random()*1e3)+200,color:n>5?"#f50":void 0}))}refresh(){this.salesData=this.genData()}handleClick(t){this.msg.info(`${t.item.x} - ${t.item.y}`)}};e.\u0275fac=function(n){return new(n||e)(M(T))},e.\u0275cmp=s({type:e,selectors:[["chart-bar-basic"]],decls:6,vars:2,consts:[["nz-button","","nzType","primary",3,"click"],["height","200",3,"title","data","clickItem"]],template:function(n,o){n&1&&(a(0,`
    `),d(1,"button",0),C("click",function(){return o.refresh()}),a(2,"Refresh"),c(),a(3,`
    `),d(4,"g2-bar",1),C("clickItem",function(f){return o.handleClick(f)}),c(),a(5,`
  `)),n&2&&(m(4),r("title","\u9500\u552E\u989D\u8D8B\u52BF")("data",o.salesData))},dependencies:[zt,z,D,k],encapsulation:2});let i=e;return i})();var _t=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"zh-CN":"packages/chart/bar/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u4F7F\u7528\u5782\u76F4\u7684\u67F1\u5B50\u663E\u793A\u7C7B\u522B\u4E4B\u95F4\u7684\u6570\u503C\u6BD4\u8F83\u3002\u5176\u4E2D\u4E00\u4E2A\u8F74\u8868\u793A\u9700\u8981\u5BF9\u6BD4\u7684\u5206\u7C7B\u7EF4\u5EA6\uFF0C\u53E6\u4E00\u4E2A\u8F74\u4EE3\u8868\u76F8\u5E94\u7684\u6570\u503C\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-bar"><a class="lake-link"><i data-anchor="g2-bar"></i></a>g2-bar</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[title]</code></td><td>\u56FE\u8868\u6807\u9898</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[color]</code></td><td>\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>rgba(24, 144, 255, 0.85)</code></td></tr><tr><td><code>[padding]</code></td><td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td><td><code>Array&lt;number | string> | string</code></td><td><code>[32, 0, 32, 40]</code></td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[data]</code></td><td>\u6570\u636E</td><td><code>G2BarData[]</code></td><td><code>[]</code></td></tr><tr><td><code>[autoLabel]</code></td><td>\u5728\u5BBD\u5EA6\u4E0D\u8DB3\u65F6\uFF0C\u81EA\u52A8\u9690\u85CF x \u8F74\u7684 label</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[interaction]</code></td><td>\u4EA4\u4E92\u7C7B\u578B\uFF0Cnone \u65E0 element-active \u56FE\u5F62\u5143\u7D20\uFF0Cactive-region \u56FE\u8868\u7EC4\u4EF6\uFF0Cbrush \u6846\u9009\uFF0Cdrag-move \u79FB\u52A8</td><td><code>InteractionType</code></td><td><code>none</code></td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(clickItem)</code></td><td>\u70B9\u51FB\u9879\u56DE\u8C03</td><td><code>EventEmitter&lt;G2BarClickItem></code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table><h3 id="G2BarData"><a class="lake-link"><i data-anchor="G2BarData"></i></a>G2BarData</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[x]</code></td><td>x\u8F74</td><td><code>any</code></td><td>-</td></tr><tr><td><code>[y]</code></td><td>y\u8F74</td><td><code>any</code></td><td>-</td></tr><tr><td><code>[color]</code></td><td>\u8F74\u989C\u8272</td><td><code>string</code></td><td>-</td></tr></tbody></table>',meta:{title:"g2-bar",subtitle:"\u67F1\u72B6\u56FE",cols:1,type:"G2",module:"import { G2BarModule } from '@delon/chart/bar';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-bar",title:"g2-bar",h:3},{id:"G2BarData",title:"G2BarData",h:3}]}]}},demo:!0},this.codes=[{id:"chart-bar-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"}},summary:"<p>\u901A\u8FC7\u8BBE\u7F6E <code>x</code>\uFF0C<code>y</code> \u5C5E\u6027\uFF0C\u53EF\u4EE5\u5FEB\u901F\u7684\u6784\u5EFA\u51FA\u4E00\u4E2A\u6F02\u4EAE\u7684\u67F1\u72B6\u56FE\uFF0C\u5404\u79CD\u7EAC\u5EA6\u7684\u5173\u7CFB\u5219\u662F\u901A\u8FC7\u81EA\u5B9A\u4E49\u7684\u6570\u636E\u5C55\u73B0\u3002</p>",code:`import { Component } from '@angular/core';
import { G2BarClickItem, G2BarData } from '@delon/chart/bar';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-bar-basic',
  template: \`
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-bar height="200" [title]="'\u9500\u552E\u989D\u8D8B\u52BF'" [data]="salesData" (clickItem)="handleClick($event)"></g2-bar>
  \`,
})
export class ChartBarBasicComponent {
  constructor(private msg: NzMessageService) {}

  salesData = this.genData();

  private genData(): G2BarData[] {
    return new Array(12).fill({}).map((_i, idx) => ({
      x: \`\${idx + 1}\u6708\`,
      y: Math.floor(Math.random() * 1000) + 200,
      color: idx > 5 ? '#f50' : undefined,
    }));
  }

  refresh(): void {
    this.salesData = this.genData();
  }

  handleClick(data: G2BarClickItem): void {
    this.msg.info(\`\${data.item.x} - \${data.item.y}\`);
  }
}`,lang:"ts",componentName:"ChartBarBasicComponent",point:0,name:"basic",urls:"packages/chart/bar/demo/basic.md",type:"demo"}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["app-chart-bar"]],hostVars:2,hostBindings:function(n,o){n&2&&g("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(n,o){n&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),a(3,`
        `),d(4,"code-box",3),a(5,`
          `),l(6,"chart-bar-basic"),a(7,`
        `),c(),a(8,`
      `),c()()()),n&2&&(r("codes",o.codes)("item",o.item),m(1),r("nzGutter",16),m(3),r("item",o.codes[0]),u("id",o.codes[0].id))},dependencies:[y,b,v,x,Ft],encapsulation:2});let i=e;return i})();function Fe(i,e){i&1&&(a(0,`
        `),l(1,"i",4),a(2,`
      `))}var Ht=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["chart-card-style1"]],decls:13,vars:4,consts:[["footer","\u65E5\u8BBF\u95EE\u91CF 12,423","contentHeight","46",3,"title","bordered","total","action"],["action",""],["flag","up",2,"margin","0 16px 0 8px","color","rgba(0,0,0,.85)"],["flag","down",2,"margin","0 0 0 8px","color","rgba(0,0,0,.85)"],["nz-tooltip","","nzTooltipTitle","\u6307\u6807\u8BF4\u660E","nz-icon","","nzType","info-circle"]],template:function(n,o){if(n&1&&(a(0,`
    `),d(1,"g2-card",0),a(2,`
      `),N(3,Fe,3,0,"ng-template",null,1,P),a(5,`
      \u5468\u540C\u6BD4
      `),d(6,"trend",2),a(7,"12%"),c(),a(8,`
      \u65E5\u73AF\u6BD4
      `),d(9,"trend",3),a(10,"11%"),c(),a(11,`
    `),c(),a(12,`
  `)),n&2){let p=A(4);m(1),r("title","\u9500\u552E\u989D")("bordered",!0)("total","\xA5 126,560.00")("action",p)}},dependencies:[H,q,D,O,j],encapsulation:2});let i=e;return i})();function Re(i,e){i&1&&l(0,"img",3)}function $e(i,e){i&1&&(a(0,`
        `),l(1,"i",4),a(2,`
      `))}var Ut=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["chart-card-style2"]],decls:10,vars:5,consts:[["footer","\u65E5\u8BBF\u95EE\u91CF 12,423",3,"title","bordered","total","avatar","action"],["avatar",""],["action",""],["src","./assets/img/logo-color.svg",2,"width","56px","height","56px"],["nz-tooltip","","nzTooltipTitle","\u6307\u6807\u8BF4\u660E","nz-icon","","nzType","info-circle"]],template:function(n,o){if(n&1&&(a(0,`
    `),d(1,"g2-card",0),a(2,`
      `),N(3,Re,1,0,"ng-template",null,1,P),a(5,`
      `),N(6,$e,3,0,"ng-template",null,2,P),a(8,`
    `),c(),a(9,`
  `)),n&2){let p=A(4),f=A(7);m(1),r("title","\u79FB\u52A8\u6307\u6807")("bordered",!0)("total","\xA5 126,560.00")("avatar",p)("action",f)}},dependencies:[H,D,O,j],encapsulation:2});let i=e;return i})();function Oe(i,e){i&1&&l(0,"img",3)}function He(i,e){i&1&&(a(0,`
        `),l(1,"i",4),a(2,`
      `))}var Lt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["chart-card-style3"]],decls:10,vars:5,consts:[[3,"title","bordered","total","avatar","action"],["avatar",""],["action",""],["src","./assets/img/logo-color.svg",2,"width","56px","height","56px"],["nz-tooltip","","nzTooltipTitle","\u6307\u6807\u8BF4\u660E","nz-icon","","nzType","info-circle"]],template:function(n,o){if(n&1&&(a(0,`
    `),d(1,"g2-card",0),a(2,`
      `),N(3,Oe,1,0,"ng-template",null,1,P),a(5,`
      `),N(6,He,3,0,"ng-template",null,2,P),a(8,`
    `),c(),a(9,`
  `)),n&2){let p=A(4),f=A(7);m(1),r("title","\u79FB\u52A8\u6307\u6807")("bordered",!0)("total","\xA5 126,560.00")("avatar",p)("action",f)}},dependencies:[H,D,O,j],encapsulation:2});let i=e;return i})();var Wt=(()=>{let e=class e{constructor(){this.item={cols:2,urls:{"zh-CN":"packages/chart/card/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u56FE\u8868\u5361\u7247\uFF0C\u7528\u4E8E\u5C55\u793A\u56FE\u8868\u7684\u5361\u7247\u5BB9\u5668\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u7684\u914D\u5408\u5176\u5B83\u56FE\u8868\u5957\u4EF6\u5C55\u793A\u4E30\u5BCC\u4FE1\u606F\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-card"><a class="lake-link"><i data-anchor="g2-card"></i></a>g2-card</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>\u5361\u7247\u6807\u9898</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[avatar]</code></td><td>\u5934\u50CF</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[action]</code></td><td>\u5361\u7247\u64CD\u4F5C</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[total]</code></td><td>\u6570\u636E\u603B\u91CF\uFF08\u652F\u6301HTML\uFF09</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[footer]</code></td><td>\u5361\u7247\u5E95\u90E8</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[contentHeight]</code></td><td>\u5185\u5BB9\u533A\u57DF\u9AD8\u5EA6\uFF08\u5355\u4F4D\uFF1A<code>px</code>\uFF09</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[bordered]</code></td><td>\u662F\u5426\u663E\u793A\u8FB9\u6846</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>',meta:{title:"g2-card",subtitle:"\u56FE\u8868\u5361\u7247",cols:2,type:"G2",module:"import { G2CardModule } from '@delon/chart/card';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-card",title:"g2-card",h:3}]}]}},demo:!0},this.codes=[{id:"chart-card-style1",meta:{order:0,title:{"zh-CN":"\u98CE\u683C\u4E00","en-US":"Style 1"}},summary:"<p>\u98CE\u683C\u4E00\u7528\u6CD5\u3002</p>",code:`import { Component } from '@angular/core';

@Component({
  selector: 'chart-card-style1',
  template: \`
    <g2-card [title]="'\u9500\u552E\u989D'" [bordered]="true" [total]="'\xA5 126,560.00'" footer="\u65E5\u8BBF\u95EE\u91CF 12,423" contentHeight="46" [action]="action">
      <ng-template #action>
        <i nz-tooltip nzTooltipTitle="\u6307\u6807\u8BF4\u660E" nz-icon nzType="info-circle"></i>
      </ng-template>
      \u5468\u540C\u6BD4
      <trend flag="up" style="margin: 0 16px 0 8px; color: rgba(0,0,0,.85)">12%</trend>
      \u65E5\u73AF\u6BD4
      <trend flag="down" style="margin: 0 0 0 8px; color: rgba(0,0,0,.85)">11%</trend>
    </g2-card>
  \`,
})
export class ChartCardStyle1Component {}`,lang:"ts",componentName:"ChartCardStyle1Component",point:0,name:"style1",urls:"packages/chart/card/demo/style1.md",type:"demo"},{id:"chart-card-style2",meta:{order:0,title:{"zh-CN":"\u98CE\u683C\u4E8C","en-US":"Style 2"}},summary:"<p>\u98CE\u683C\u4E8C\u7528\u6CD5\u3002</p>",code:`import { Component } from '@angular/core';

@Component({
  selector: 'chart-card-style2',
  template: \`
    <g2-card [title]="'\u79FB\u52A8\u6307\u6807'" [bordered]="true" [total]="'\xA5 126,560.00'" footer="\u65E5\u8BBF\u95EE\u91CF 12,423" [avatar]="avatar" [action]="action">
      <ng-template #avatar><img style="width:56px; height: 56px" src="./assets/img/logo-color.svg" /></ng-template>
      <ng-template #action>
        <i nz-tooltip nzTooltipTitle="\u6307\u6807\u8BF4\u660E" nz-icon nzType="info-circle"></i>
      </ng-template>
    </g2-card>
  \`,
})
export class ChartCardStyle2Component {}`,lang:"ts",componentName:"ChartCardStyle2Component",point:1,name:"style2",urls:"packages/chart/card/demo/style2.md",type:"demo"},{id:"chart-card-style3",meta:{order:0,title:{"zh-CN":"\u98CE\u683C\u4E09","en-US":"Style 3"}},summary:"<p>\u98CE\u683C\u4E09\u7528\u6CD5\u3002</p>",code:`import { Component } from '@angular/core';

@Component({
  selector: 'chart-card-style3',
  template: \`
    <g2-card [title]="'\u79FB\u52A8\u6307\u6807'" [bordered]="true" [total]="'\xA5 126,560.00'" [avatar]="avatar" [action]="action">
      <ng-template #avatar><img style="width:56px; height: 56px" src="./assets/img/logo-color.svg" /></ng-template>
      <ng-template #action>
        <i nz-tooltip nzTooltipTitle="\u6307\u6807\u8BF4\u660E" nz-icon nzType="info-circle"></i>
      </ng-template>
    </g2-card>
  \`,
})
export class ChartCardStyle3Component {}`,lang:"ts",componentName:"ChartCardStyle3Component",point:2,name:"style3",urls:"packages/chart/card/demo/style3.md",type:"demo"}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["app-chart-card"]],hostVars:2,hostBindings:function(n,o){n&2&&g("d-block","true")},decls:21,vars:9,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","12"],[3,"item"]],template:function(n,o){n&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),a(3,`
        `),d(4,"code-box",3),a(5,`
          `),l(6,"chart-card-style1"),a(7,`
        `),c(),a(8,`
      
        `),d(9,"code-box",3),a(10,`
          `),l(11,"chart-card-style3"),a(12,`
        `),c(),a(13,`
      `),c(),d(14,"div",2),a(15,`
        `),d(16,"code-box",3),a(17,`
          `),l(18,"chart-card-style2"),a(19,`
        `),c(),a(20,`
      `),c()()()),n&2&&(r("codes",o.codes)("item",o.item),m(1),r("nzGutter",16),m(3),r("item",o.codes[0]),u("id",o.codes[0].id),m(5),r("item",o.codes[2]),u("id",o.codes[2].id),m(7),r("item",o.codes[1]),u("id",o.codes[1].id))},dependencies:[y,b,v,x,Ht,Ut,Lt],encapsulation:2});let i=e;return i})();var Vt=(()=>{let e=class e{constructor(){this.dark=!1,this.two=!1,this.option1={tooltip:{formatter:"{a} <br/>{b} : {c}%"},series:[{name:"Pressure",type:"gauge",detail:{formatter:"{value}"},data:[{value:50,name:"SCORE"}]}]},this.option2={title:{text:"ECharts \u5165\u95E8\u793A\u4F8B"},tooltip:{},legend:{data:["\u9500\u91CF"]},xAxis:{data:["\u886C\u886B","\u7F8A\u6BDB\u886B","\u96EA\u7EBA\u886B","\u88E4\u5B50","\u9AD8\u8DDF\u978B","\u889C\u5B50"]},yAxis:{},series:[{name:"\u9500\u91CF",type:"bar",data:[5,20,36,10,10,20]}]}}handleEvents(t){console.log(t)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["chart-chart-echarts-basic"]],decls:11,vars:3,consts:[[1,"mb-md"],[3,"ngModel","ngModelChange"],["nz-button","","nzType","primary",3,"click"],[3,"option","theme","events"]],template:function(n,o){n&1&&(a(0,`
    `),d(1,"div",0),a(2,`
      `),d(3,"nz-switch",1),C("ngModelChange",function(f){return o.dark=f}),c(),a(4,` Dark
      `),d(5,"button",2),C("click",function(){return o.two=!o.two}),a(6,"Change Option"),c(),a(7,`
    `),c(),a(8,`
    `),d(9,"chart-echarts",3),C("events",function(f){return o.handleEvents(f)}),c(),a(10,`
  `)),n&2&&(m(3),r("ngModel",o.dark),m(6),r("option",o.two?o.option1:o.option2)("theme",o.dark?"dark":null))},dependencies:[ft,gt,K,z,D,k,Mt],encapsulation:2});let i=e;return i})();var qt=(()=>{let e=class e{constructor(t){this.msg=t,this.dark=!1,this.two=!1,this.on=[{eventName:"click",handler:({event:n,chart:o})=>{this.msg.info(`${n.type}: ${n.name} - ${n.value} (${o.id})`)}}],this.option={xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[150,230,224,218,135,147,260],type:"line"}]}}};e.\u0275fac=function(n){return new(n||e)(M(T))},e.\u0275cmp=s({type:e,selectors:[["chart-chart-echarts-on"]],decls:3,vars:2,consts:[[3,"option","on"]],template:function(n,o){n&1&&(a(0," "),l(1,"chart-echarts",0),a(2," ")),n&2&&(m(1),r("option",o.option)("on",o.on))},dependencies:[K],encapsulation:2});let i=e;return i})();var Qt=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"zh-CN":"packages/chart/chart-echarts/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p><a target="_blank" href="https://echarts.apache.org/zh/index.html" data-url="https://echarts.apache.org/zh/index.html">ECharts</a> \u4E00\u4E2A\u57FA\u4E8E JavaScript \u7684\u5F00\u6E90\u53EF\u89C6\u5316\u56FE\u8868\u5E93\u3002\u4F7F\u7528\u61D2\u52A0\u8F7D ECharts \u811A\u672C\uFF0C\u5F00\u7BB1\u542F\u7528\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="chart-echarts"><a class="lake-link"><i data-anchor="chart-echarts"></i></a>chart-echarts</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[width]</code></td><td>\u56FE\u8868\u5BBD\u5EA6</td><td><code>number, string</code></td><td><code>100%</code></td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number, string</code></td><td><code>400px</code></td></tr><tr><td><code>[option]</code></td><td><a target="_blank" href="https://echarts.apache.org/zh/option.html#title" data-url="https://echarts.apache.org/zh/option.html#title">\u914D\u7F6E\u9879</a></td><td><code>ChartEChartsOption</code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td><a target="_blank" href="https://echarts.apache.org/zh/theme-builder.html" data-url="https://echarts.apache.org/zh/theme-builder.html">\u4E3B\u9898</a>\u914D\u7F6E</td><td><code>string, object</code></td><td>-</td></tr><tr><td><code>[on]</code></td><td>\u7B49\u540C\u4E8E ECharts <a target="_blank" href="https://echarts.apache.org/zh/api.html#echartsInstance.on" data-url="https://echarts.apache.org/zh/api.html#echartsInstance.on">on</a></td><td><code>ChartEChartsOn[]</code></td><td>-</td></tr><tr><td><code>(events)</code></td><td>\u4E8B\u4EF6\u56DE\u8C03</td><td><code>EventEmitter&lt;ChartEChartsEvent></code></td><td>-</td></tr></tbody></table>',meta:{title:"chart-echarts",subtitle:"ECharts",cols:1,type:"ECharts",module:"import { ChartEChartsModule } from '@delon/chart/chart-echarts';"},toc:[{id:"API",title:"API",h:2,children:[{id:"chart-echarts",title:"chart-echarts",h:3}]}]}},demo:!0},this.codes=[{id:"chart-chart-echarts-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"}},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';
import { ChartEChartsEvent, ChartEChartsOption } from '@delon/chart/chart-echarts';

@Component({
  selector: 'chart-chart-echarts-basic',
  template: \`
    <div class="mb-md">
      <nz-switch [(ngModel)]="dark"></nz-switch> Dark
      <button nz-button (click)="two = !two" nzType="primary">Change Option</button>
    </div>
    <chart-echarts [option]="two ? option1 : option2" [theme]="dark ? 'dark' : null" (events)="handleEvents($event)"></chart-echarts>
  \`,
})
export class ChartChartEchartsBasicComponent {
  dark = false;
  two = false;

  option1: ChartEChartsOption = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%',
    },
    series: [
      {
        name: 'Pressure',
        type: 'gauge',
        detail: {
          formatter: '{value}',
        },
        data: [
          {
            value: 50,
            name: 'SCORE',
          },
        ],
      },
    ],
  };

  option2: ChartEChartsOption = {
    title: {
      text: 'ECharts \u5165\u95E8\u793A\u4F8B',
    },
    tooltip: {},
    legend: {
      data: ['\u9500\u91CF'],
    },
    xAxis: {
      data: ['\u886C\u886B', '\u7F8A\u6BDB\u886B', '\u96EA\u7EBA\u886B', '\u88E4\u5B50', '\u9AD8\u8DDF\u978B', '\u889C\u5B50'],
    },
    yAxis: {},
    series: [
      {
        name: '\u9500\u91CF',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };

  handleEvents(ev: ChartEChartsEvent): void {
    console.log(ev);
  }
}`,lang:"ts",componentName:"ChartChartEchartsBasicComponent",point:0,name:"basic",urls:"packages/chart/chart-echarts/demo/basic.md",type:"demo"},{id:"chart-chart-echarts-on",meta:{order:0,title:{"zh-CN":"\u7ED1\u5B9A\u4E8B\u4EF6","en-US":"Bind event"}},summary:{"zh-CN":'<p>\u4F7F\u7528 <code>on</code> \u5C5E\u6027\uFF0C\u7B49\u540C\u4E8E ECharts <a target="_blank" href="https://echarts.apache.org/zh/api.html#echartsInstance.on" data-url="https://echarts.apache.org/zh/api.html#echartsInstance.on">on</a>\u3002</p>',"en-US":'<p>Using the <code>on</code> attribute is equivalent to ECharts <a target="_blank" href="https://echarts.apache.org/zh/api.html#echartsInstance.on" data-url="https://echarts.apache.org/zh/api.html#echartsInstance.on">on</a>.</p>'},code:`import { Component } from '@angular/core';

import { ChartEChartsOn, ChartEChartsOption } from '@delon/chart/chart-echarts';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-chart-echarts-on',
  template: \` <chart-echarts [option]="option" [on]="on"></chart-echarts> \`
})
export class ChartChartEchartsOnComponent {
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

  constructor(private msg: NzMessageService) {}
}`,lang:"ts",componentName:"ChartChartEchartsOnComponent",point:1,name:"on",urls:"packages/chart/chart-echarts/demo/on.md",type:"demo"}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["app-chart-chart-echarts"]],hostVars:2,hostBindings:function(n,o){n&2&&g("d-block","true")},decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(n,o){n&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),a(3,`
        `),d(4,"code-box",3),a(5,`
          `),l(6,"chart-chart-echarts-basic"),a(7,`
        `),c(),a(8,`
      
        `),d(9,"code-box",3),a(10,`
          `),l(11,"chart-chart-echarts-on"),a(12,`
        `),c(),a(13,`
      `),c()()()),n&2&&(r("codes",o.codes)("item",o.item),m(1),r("nzGutter",16),m(3),r("item",o.codes[0]),u("id",o.codes[0].id),m(5),r("item",o.codes[1]),u("id",o.codes[1].id))},dependencies:[y,b,v,x,Vt,qt],encapsulation:2});let i=e;return i})();var Jt=(()=>{let e=class e{constructor(t){this.ngZone=t}render(t){this.ngZone.runOutsideAngular(()=>this.init(t.nativeElement))}init(t){let n=[{action:"\u6D4F\u89C8\u7F51\u7AD9",pv:5e4,percent:0},{action:"\u653E\u5165\u8D2D\u7269\u8F66",pv:35e3,percent:0},{action:"\u751F\u6210\u8BA2\u5355",pv:25e3,percent:0},{action:"\u652F\u4ED8\u8BA2\u5355",pv:15e3,percent:0},{action:"\u5B8C\u6210\u4EA4\u6613",pv:8e3,percent:0}].map(p=>(p.percent=p.pv/5e4,p)),o=new window.G2.Chart({container:t,autoFit:!0,height:500,width:t.clientWidth,padding:[20,120,95]});o.data(n),o.axis(!1),o.tooltip({showTitle:!1,showMarkers:!1,itemTpl:'<li style="margin-bottom:4px;list-style-type:none;padding: 0;"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}<br/><span style="padding-left: 16px;line-height: 16px;">\u6D4F\u89C8\u4EBA\u6570\uFF1A{pv}</span><br/><span style="padding-left: 16px;line-height: 16px;">\u5360\u6BD4\uFF1A{percent}</span><br/></li>'}),o.coordinate("rect").transpose().scale(1,-1),o.interval().adjust("symmetric").position("action*percent").shape("funnel").color("action",["#0050B3","#1890FF","#40A9FF","#69C0FF","#BAE7FF"]).label("action*pv",(p,f)=>({content:`${p} ${f}`}),{offset:35,labelLine:{style:{lineWidth:1,stroke:"rgba(0, 0, 0, 0.15)"}}}).tooltip("action*pv*percent",(p,f,B)=>({name:p,percent:+B*100+"%",pv:f})).animate({appear:{animation:"fade-in"},update:{}}),o.interaction("element-active"),o.on("beforepaint",()=>{o.annotation().clear(!0),o.getData().forEach(f=>{o.annotation().text({top:!0,position:{action:f.action,percent:"median"},content:+f.percent*100+"%",style:{stroke:null,fill:"#fff",textAlign:"center"}})})}),o.render()}};e.\u0275fac=function(n){return new(n||e)(M(it))},e.\u0275cmp=s({type:e,selectors:[["chart-custom-basic"]],decls:3,vars:0,consts:[["delay","100",3,"render"]],template:function(n,o){n&1&&(a(0," "),d(1,"g2-custom",0),C("render",function(f){return o.render(f)}),c(),a(2," "))},dependencies:[Tt],encapsulation:2});let i=e;return i})();var Zt=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/chart/custom/index.en-US.md","zh-CN":"packages/chart/custom/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>Use <code>g2-custom</code> component to package your G2 chart.</p><h2 id="Howtouse"><a class="lake-link"><i data-anchor="Howtouse"></i></a>How to use</h2><p>A simple example template:</p><pre class="hljs language-ts"><code>import { Component, ElementRef } from '@angular/core';

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
}</code></pre><h3 id="HowtodevelopG2"><a class="lake-link"><i data-anchor="HowtodevelopG2"></i></a>How to develop G2</h3><p>If throw error <code>G2</code> not found, please refer to <a href="/chart/faq" data-url="/chart/faq">Frequently Asked Questions</a>.</p><h2 id="Links"><a class="lake-link"><i data-anchor="Links"></i></a>Links</h2><ul><li><p><a target="_blank" href="https://www.yuque.com/antv/g2-docs-en" data-url="https://www.yuque.com/antv/g2-docs-en">G2 Document</a></p></li><li><p><a target="_blank" href="https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html" data-url="https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html">G2 Demo</a></p></li></ul></section>`,api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-custom"><a class="lake-link"><i data-anchor="g2-custom"></i></a>g2-custom</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[delay]</code></td><td>Delayed rendering, unit: ms</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[height]</code></td><td>Height of chart container</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[resizeTime]</code></td><td>Resize event debounce time</td><td><code>number</code></td><td><code>200</code></td></tr><tr><td><code>(render)</code></td><td>Render event</td><td><code>EventEmitter&lt;ElementRef></code></td><td>-</td></tr><tr><td><code>(resize)</code></td><td>Resize event</td><td><code>EventEmitter&lt;ElementRef></code></td><td>-</td></tr><tr><td><code>(destroy)</code></td><td>Destroy event</td><td><code>EventEmitter&lt;ElementRef></code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td>Custom chart theme</td><td><code>string | LooseObject</code></td><td>-</td></tr></tbody></table>',meta:{title:"g2-chart",subtitle:"Custom Chart",cols:1,type:"G2",module:"import { G2CustomModule } from '@delon/chart/custom';"},toc:[{id:"Howtouse",title:"How to use",h:2,children:[{id:"HowtodevelopG2",title:"How to develop G2",h:3}]},{id:"Links",title:"Links",h:2},{id:"API",title:"API",h:2,children:[{id:"g2-custom",title:"g2-custom",h:3}]}]},"zh-CN":{content:`<section class="markdown"><p>\u4F7F\u7528 <code>g2-custom</code> \u7EC4\u4EF6\u53EF\u4EE5\u66F4\u5FEB\u901F\u7684\u5C01\u88C5\u81EA\u5DF1\u7684\u56FE\u8868\u7EC4\u4EF6\u3002</p><h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p>\u4E00\u4E2A\u7B80\u5355\u793A\u4F8B\u6A21\u677F\uFF1A</p><pre class="hljs language-ts"><code>import { Component, ElementRef } from '@angular/core';

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
}</code></pre><h3 id="\u5982\u4F55\u5F00\u53D1G2"><a class="lake-link"><i data-anchor="\u5982\u4F55\u5F00\u53D1G2"></i></a>\u5982\u4F55\u5F00\u53D1 G2</h3><p>\u53EF\u80FD\u4F60\u4F1A\u9047\u5230\u672A\u627E\u5230 <code>G2</code>\uFF0C\u8BF7\u53C2\u8003<a href="/chart/faq" data-url="/chart/faq">\u5E38\u89C1\u95EE\u9898</a>\u3002</p><h2 id="\u94FE\u63A5"><a class="lake-link"><i data-anchor="\u94FE\u63A5"></i></a>\u94FE\u63A5</h2><ul><li><p><a target="_blank" href="https://www.yuque.com/antv/g2-docs" data-url="https://www.yuque.com/antv/g2-docs">G2 \u6587\u6863</a></p></li><li><p><a target="_blank" href="https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html" data-url="https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html">G2 \u793A\u4F8B</a></p></li></ul></section>`,api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-custom"><a class="lake-link"><i data-anchor="g2-custom"></i></a>g2-custom</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[height]</code></td><td>\u9AD8</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[resizeTime]</code></td><td>resize \u4E8B\u4EF6\u53BB\u6296\u65F6\u957F</td><td><code>number</code></td><td><code>200</code></td></tr><tr><td><code>(render)</code></td><td>\u6E32\u67D3\u4E8B\u4EF6</td><td><code>EventEmitter&lt;ElementRef></code></td><td>-</td></tr><tr><td><code>(resize)</code></td><td>resize \u4E8B\u4EF6</td><td><code>EventEmitter&lt;ElementRef></code></td><td>-</td></tr><tr><td><code>(destroy)</code></td><td>\u9500\u6BC1\u4E8B\u4EF6</td><td><code>EventEmitter&lt;ElementRef></code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr></tbody></table>',meta:{title:"g2-chart",subtitle:"\u81EA\u5B9A\u4E49\u56FE\u8868",cols:1,type:"G2",module:"import { G2CustomModule } from '@delon/chart/custom';"},toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528",h:2,children:[{id:"\u5982\u4F55\u5F00\u53D1G2",title:"\u5982\u4F55\u5F00\u53D1 G2",h:3}]},{id:"\u94FE\u63A5",title:"\u94FE\u63A5",h:2},{id:"API",title:"API",h:2,children:[{id:"g2-custom",title:"g2-custom",h:3}]}]}},demo:!0},this.codes=[{id:"chart-custom-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:{"zh-CN":'<p>\u6A21\u4EFF\u81EA <a target="_blank" href="https://antv.alipay.com/zh-cn/g2/3.x/demo/funnel/basic.html" data-url="https://antv.alipay.com/zh-cn/g2/3.x/demo/funnel/basic.html">antv\u57FA\u7840\u6F0F\u6597\u56FE</a>\u3002</p>',"en-US":'<p>Copy <a target="_blank" href="https://antv.alipay.com/zh-cn/g2/3.x/demo/funnel/basic.html" data-url="https://antv.alipay.com/zh-cn/g2/3.x/demo/funnel/basic.html">Basic Funnel Chart</a>\u3002</p>'},code:`import { Component, ElementRef, NgZone } from '@angular/core';
import type { Chart } from '@antv/g2';

@Component({
  selector: 'chart-custom-basic',
  template: \` <g2-custom delay="100" (render)="render($event)"></g2-custom> \`,
})
export class ChartCustomBasicComponent {
  constructor(private ngZone: NgZone) {}

  render(el: ElementRef<HTMLDivElement>): void {
    this.ngZone.runOutsideAngular(() => this.init(el.nativeElement));
  }

  private init(el: HTMLElement): void {
    const data: Array<{ action: string; pv: number; percent: number }> = [
      { action: '\u6D4F\u89C8\u7F51\u7AD9', pv: 50000, percent: 0 },
      { action: '\u653E\u5165\u8D2D\u7269\u8F66', pv: 35000, percent: 0 },
      { action: '\u751F\u6210\u8BA2\u5355', pv: 25000, percent: 0 },
      { action: '\u652F\u4ED8\u8BA2\u5355', pv: 15000, percent: 0 },
      { action: '\u5B8C\u6210\u4EA4\u6613', pv: 8000, percent: 0 },
    ].map(row => {
      row.percent = row.pv / 50000;
      return row;
    });
    const chart: Chart = new (window as any).G2.Chart({
      container: el,
      autoFit: true,
      height: 500,
      width: el.clientWidth,
      padding: [20, 120, 95],
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
        '</li>',
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
            content: \`\${action} \${pv}\`,
          };
        },
        {
          offset: 35,
          labelLine: {
            style: {
              lineWidth: 1,
              stroke: 'rgba(0, 0, 0, 0.15)',
            },
          },
        },
      )
      .tooltip('action*pv*percent', (action, pv, percent) => {
        return {
          name: action,
          percent: +percent * 100 + '%',
          pv,
        };
      })
      .animate({
        appear: {
          animation: 'fade-in',
        },
        update: {
          // annotation: 'fade-in'
        },
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
            percent: 'median',
          },
          content: +obj.percent * 100 + '%', // \u663E\u793A\u7684\u6587\u672C\u5185\u5BB9
          style: {
            stroke: null,
            fill: '#fff',
            textAlign: 'center',
          },
        });
      });
    });

    chart.render();
  }
}`,lang:"ts",componentName:"ChartCustomBasicComponent",point:0,name:"basic",urls:"packages/chart/custom/demo/basic.md",type:"demo"}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["app-chart-custom"]],hostVars:2,hostBindings:function(n,o){n&2&&g("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(n,o){n&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),a(3,`
        `),d(4,"code-box",3),a(5,`
          `),l(6,"chart-custom-basic"),a(7,`
        `),c(),a(8,`
      `),c()()()),n&2&&(r("codes",o.codes)("item",o.item),m(1),r("nzGutter",16),m(3),r("item",o.codes[0]),u("id",o.codes[0].id))},dependencies:[y,b,v,x,Jt],encapsulation:2});let i=e;return i})();var Yt=(()=>{let e=class e{constructor(t,n){this.percent=36,this.color="#2f9cff",t.isBrowser&&(this.time$=setInterval(()=>{this.percent=parseInt((Math.random()*100).toString(),10),this.color=this.percent>50?"#f50":"#2f9cff",n.detectChanges()},1e3))}ngOnDestroy(){clearInterval(this.time$)}};e.\u0275fac=function(n){return new(n||e)(M(ut),M(ot))},e.\u0275cmp=s({type:e,selectors:[["chart-gauge-basic"]],decls:3,vars:3,consts:[["height","164",3,"title","percent","color"]],template:function(n,o){n&1&&(a(0," "),l(1,"g2-gauge",0),a(2," ")),n&2&&(m(1),r("title","\u6838\u9500\u7387")("percent",o.percent)("color",o.color))},dependencies:[wt],encapsulation:2,changeDetection:0});let i=e;return i})();var Kt=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"zh-CN":"packages/chart/gauge/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u4E00\u79CD\u8FDB\u5EA6\u5C55\u793A\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u66F4\u76F4\u89C2\u7684\u5C55\u793A\u5F53\u524D\u7684\u8FDB\u5C55\u60C5\u51B5\uFF0C\u901A\u5E38\u4E5F\u53EF\u8868\u793A\u5360\u6BD4\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-gauge"><a class="lake-link"><i data-anchor="g2-gauge"></i></a>g2-gauge</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[title]</code></td><td>\u56FE\u8868\u6807\u9898</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[color]</code></td><td>\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>#2F9CFF</code></td></tr><tr><td><code>[bgColor]</code></td><td>\u56FE\u8868\u80CC\u666F\u8272</td><td><code>string</code></td><td><code>#F0F2F5</code></td></tr><tr><td><code>[percent]</code></td><td>\u8FDB\u5EA6\u6BD4\u4F8B</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[padding]</code></td><td>\u5185\u8FB9\u8DDD</td><td><code>Array&lt;number | string></code></td><td><code>[10, 10, 30, 10]</code></td></tr><tr><td><code>[format]</code></td><td>\u5750\u6807\u8F74\u683C\u5F0F</td><td><code>(text: string, item: {}, index: number) => string</code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table>',meta:{title:"g2-gauge",subtitle:"\u4EEA\u8868\u76D8",cols:1,type:"G2",module:"import { G2GaugeModule } from '@delon/chart/gauge';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-gauge",title:"g2-gauge",h:3}]}]}},demo:!0},this.codes=[{id:"chart-gauge-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'chart-gauge-basic',
  template: \` <g2-gauge [title]="'\u6838\u9500\u7387'" height="164" [percent]="percent" [color]="color"></g2-gauge> \`,
  changeDetection: ChangeDetectionStrategy.OnPush
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
}`,lang:"ts",componentName:"ChartGaugeBasicComponent",point:0,name:"basic",urls:"packages/chart/gauge/demo/basic.md",type:"demo"}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["app-chart-gauge"]],hostVars:2,hostBindings:function(n,o){n&2&&g("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(n,o){n&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),a(3,`
        `),d(4,"code-box",3),a(5,`
          `),l(6,"chart-gauge-basic"),a(7,`
        `),c(),a(8,`
      `),c()()()),n&2&&(r("codes",o.codes)("item",o.item),m(1),r("nzGutter",16),m(3),r("item",o.codes[0]),u("id",o.codes[0].id))},dependencies:[y,b,v,x,Yt],encapsulation:2});let i=e;return i})();var te=(()=>{let e=class e{constructor(t){this.msg=t,this.visitData=this.genData()}genData(){let t=new Date().getTime(),n=[];for(let o=0;o<20;o+=1)n.push({x:E(new Date(t+1e3*60*60*24*o),"yyyy-MM-dd"),y:Math.floor(Math.random()*100)+10});return n}refresh(){this.visitData=this.genData()}handleClick(t){this.msg.info(`${t.item.x} - ${t.item.y}`)}};e.\u0275fac=function(n){return new(n||e)(M(T))},e.\u0275cmp=s({type:e,selectors:[["chart-mini-area-basic"]],decls:6,vars:1,consts:[["nz-button","","nzType","primary",3,"click"],["line","","color","#cceafe","height","45",3,"data","clickItem"]],template:function(n,o){n&1&&(a(0,`
    `),d(1,"button",0),C("click",function(){return o.refresh()}),a(2,"Refresh"),c(),a(3,`
    `),d(4,"g2-mini-area",1),C("clickItem",function(f){return o.handleClick(f)}),c(),a(5,`
  `)),n&2&&(m(4),r("data",o.visitData))},dependencies:[U,z,D,k],encapsulation:2});let i=e;return i})();var ee=(()=>{let e=class e{constructor(){this.visitData=[]}ngOnInit(){let t=new Date().getTime();for(let n=0;n<20;n+=1)this.visitData.push({x:E(new Date(t+1e3*60*60*24*n),"yyyy-MM-dd"),y:Math.floor(Math.random()*100)+10})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["chart-mini-area-tooltip"]],decls:3,vars:1,consts:[["line","","color","#cceafe","height","45","yTooltipSuffix","%",3,"data"]],template:function(n,o){n&1&&(a(0," "),l(1,"g2-mini-area",0),a(2," ")),n&2&&(m(1),r("data",o.visitData))},dependencies:[U],encapsulation:2});let i=e;return i})();var ne=(()=>{let e=class e{constructor(){this.visitData=[]}ngOnInit(){let t=new Date().getTime();for(let n=0;n<20;n+=1)this.visitData.push({x:E(new Date(t+1e3*60*60*24*n),"yyyy-MM-dd"),y:Math.floor(Math.random()*100)+10})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["chart-mini-area-mini"]],decls:3,vars:1,consts:[["line","","color","#cceafe","height","45","tooltipType","mini",3,"data"]],template:function(n,o){n&1&&(a(0," "),l(1,"g2-mini-area",0),a(2," ")),n&2&&(m(1),r("data",o.visitData))},dependencies:[U],encapsulation:2});let i=e;return i})();var ae=(()=>{let e=class e{constructor(){this.item={cols:2,urls:{"zh-CN":"packages/chart/mini-area/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u9762\u79EF\u56FE\u53C8\u53EB\u533A\u57DF\u56FE\u3002 \u5B83\u662F\u5728\u6298\u7EBF\u56FE\u7684\u57FA\u7840\u4E4B\u4E0A\u5F62\u6210\u7684, \u5B83\u5C06\u6298\u7EBF\u56FE\u4E2D\u6298\u7EBF\u4E0E\u81EA\u53D8\u91CF\u5750\u6807\u8F74\u4E4B\u95F4\u7684\u533A\u57DF\u4F7F\u7528\u989C\u8272\u6216\u8005\u7EB9\u7406\u586B\u5145\uFF0C\u8FD9\u6837\u4E00\u4E2A\u586B\u5145\u533A\u57DF\u6211\u4EEC\u53EB\u505A\u9762\u79EF\uFF0C\u989C\u8272\u7684\u586B\u5145\u53EF\u4EE5\u66F4\u597D\u7684\u7A81\u51FA\u8D8B\u52BF\u4FE1\u606F\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-mini-area"><a class="lake-link"><i data-anchor="g2-mini-area"></i></a>g2-mini-area</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[color]</code></td><td>\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>rgba(24, 144, 255, 0.2)</code></td></tr><tr><td><code>[borderColor]</code></td><td>\u56FE\u8868\u8FB9\u989C\u8272</td><td><code>string</code></td><td><code>#1890FF</code></td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td><code>56</code></td></tr><tr><td><code>[line]</code></td><td>\u662F\u5426\u663E\u793A\u63CF\u8FB9</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[animate]</code></td><td>\u662F\u5426\u663E\u793A\u52A8\u753B</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[padding]</code></td><td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td><td><code>array</code></td><td><code>[8, 8, 8, 8]</code></td></tr><tr><td><code>[xAxis]</code></td><td><a target="_blank" href="https://www.yuque.com/antv/g2-docs/api-chart#ef1eaedc" data-url="https://www.yuque.com/antv/g2-docs/api-chart#ef1eaedc">x \u8F74\u914D\u7F6E</a></td><td><code>object</code></td><td>-</td></tr><tr><td><code>[yAxis]</code></td><td><a target="_blank" href="https://www.yuque.com/antv/g2-docs/api-chart#ef1eaedc" data-url="https://www.yuque.com/antv/g2-docs/api-chart#ef1eaedc">y \u8F74\u914D\u7F6E</a></td><td><code>object</code></td><td>-</td></tr><tr><td><code>[yTooltipSuffix]</code></td><td>y \u8F74Tooltip\u540E\u7F00\uFF0C\u4E00\u822C\u6307\u5B9A\u5355\u4F4D</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[tooltipType]</code></td><td>Tooltip\u663E\u793A\u7C7B\u578B</td><td><code>'mini','default'</code></td><td><code>'default'</code></td></tr><tr><td><code>[data]</code></td><td>\u6570\u636E</td><td><code>G2MiniAreaData[]</code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(clickItem)</code></td><td>\u70B9\u51FB\u9879\u56DE\u8C03</td><td><code>EventEmitter&lt;G2MiniAreaClickItem></code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table><h3 id="G2MiniAreaData"><a class="lake-link"><i data-anchor="G2MiniAreaData"></i></a>G2MiniAreaData</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[x]</code></td><td>x\u8F74</td><td><code>any</code></td><td>-</td></tr><tr><td><code>[y]</code></td><td>y\u8F74</td><td><code>any</code></td><td>-</td></tr></tbody></table>`,meta:{title:"g2-mini-area",subtitle:"\u8FF7\u4F60\u533A\u57DF\u56FE",cols:2,type:"G2",module:"import { G2MiniAreaModule } from '@delon/chart/mini-area';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-mini-area",title:"g2-mini-area",h:3},{id:"G2MiniAreaData",title:"G2MiniAreaData",h:3}]}]}},demo:!0},this.codes=[{id:"chart-mini-area-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Component } from '@angular/core';
import { G2MiniAreaClickItem, G2MiniAreaData } from '@delon/chart/mini-area';
import { format } from 'date-fns';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-mini-area-basic',
  template: \`
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-mini-area line color="#cceafe" height="45" [data]="visitData" (clickItem)="handleClick($event)"></g2-mini-area>
  \`,
})
export class ChartMiniAreaBasicComponent {
  visitData = this.genData();

  constructor(private msg: NzMessageService) {}

  private genData(): G2MiniAreaData[] {
    const beginDay = new Date().getTime();
    const res: G2MiniAreaData[] = [];
    for (let i = 0; i < 20; i += 1) {
      res.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10,
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
import { G2MiniAreaData } from '@delon/chart/mini-area';
import { format } from 'date-fns';

@Component({
  selector: 'chart-mini-area-tooltip',
  template: \` <g2-mini-area line color="#cceafe" height="45" [data]="visitData" yTooltipSuffix="%"></g2-mini-area> \`,
})
export class ChartMiniAreaTooltipComponent implements OnInit {
  visitData: G2MiniAreaData[] = [];
  ngOnInit(): void {
    const beginDay = new Date().getTime();
    for (let i = 0; i < 20; i += 1) {
      this.visitData.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10,
      });
    }
  }
}`,lang:"ts",componentName:"ChartMiniAreaTooltipComponent",point:1,name:"tooltip",urls:"packages/chart/mini-area/demo/tooltip.md",type:"demo"},{id:"chart-mini-area-mini",meta:{order:2,title:"Mini tooltip"},summary:"<p>\u6307\u5B9A <code>tooltipType</code> \u503C\u6765\u8868\u793A\u7B80\u5316tooltip\uFF0C\u53EF\u4EE5\u66F4\u597D\u7684\u8FD0\u7528\u4E8E\u8868\u683C\u3002</p>",code:`import { Component, OnInit } from '@angular/core';
import { G2MiniAreaData } from '@delon/chart/mini-area';
import { format } from 'date-fns';

@Component({
  selector: 'chart-mini-area-mini',
  template: \` <g2-mini-area line color="#cceafe" height="45" [data]="visitData" tooltipType="mini"></g2-mini-area> \`,
})
export class ChartMiniAreaMiniComponent implements OnInit {
  visitData: G2MiniAreaData[] = [];
  ngOnInit(): void {
    const beginDay = new Date().getTime();
    for (let i = 0; i < 20; i += 1) {
      this.visitData.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10,
      });
    }
  }
}`,lang:"ts",componentName:"ChartMiniAreaMiniComponent",point:2,name:"mini",urls:"packages/chart/mini-area/demo/mini.md",type:"demo"}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["app-chart-mini-area"]],hostVars:2,hostBindings:function(n,o){n&2&&g("d-block","true")},decls:21,vars:9,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","12"],[3,"item"]],template:function(n,o){n&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),a(3,`
        `),d(4,"code-box",3),a(5,`
          `),l(6,"chart-mini-area-basic"),a(7,`
        `),c(),a(8,`
      
        `),d(9,"code-box",3),a(10,`
          `),l(11,"chart-mini-area-mini"),a(12,`
        `),c(),a(13,`
      `),c(),d(14,"div",2),a(15,`
        `),d(16,"code-box",3),a(17,`
          `),l(18,"chart-mini-area-tooltip"),a(19,`
        `),c(),a(20,`
      `),c()()()),n&2&&(r("codes",o.codes)("item",o.item),m(1),r("nzGutter",16),m(3),r("item",o.codes[0]),u("id",o.codes[0].id),m(5),r("item",o.codes[2]),u("id",o.codes[2].id),m(7),r("item",o.codes[1]),u("id",o.codes[1].id))},dependencies:[y,b,v,x,te,ee,ne],encapsulation:2});let i=e;return i})();var ie=(()=>{let e=class e{constructor(t){this.msg=t,this.visitData=this.genData()}genData(){let t=new Date().getTime(),n=[];for(let o=0;o<20;o+=1)n.push({x:E(new Date(t+1e3*60*60*24*o),"yyyy-MM-dd"),y:Math.floor(Math.random()*100)+10});return n}refresh(){this.visitData=this.genData()}handleClick(t){this.msg.info(`${t.item.x} - ${t.item.y}`)}};e.\u0275fac=function(n){return new(n||e)(M(T))},e.\u0275cmp=s({type:e,selectors:[["chart-mini-bar-basic"]],decls:6,vars:1,consts:[["nz-button","","nzType","primary",3,"click"],["height","45",3,"data","clickItem"]],template:function(n,o){n&1&&(a(0,`
    `),d(1,"button",0),C("click",function(){return o.refresh()}),a(2,"Refresh"),c(),a(3,`
    `),d(4,"g2-mini-bar",1),C("clickItem",function(f){return o.handleClick(f)}),c(),a(5,`
  `)),n&2&&(m(4),r("data",o.visitData))},dependencies:[L,z,D,k],encapsulation:2});let i=e;return i})();var re=(()=>{let e=class e{constructor(){this.visitData=[]}ngOnInit(){let t=new Date().getTime();for(let n=0;n<20;n+=1)this.visitData.push({x:E(new Date(t+1e3*60*60*24*n),"yyyy-MM-dd"),y:Math.floor(Math.random()*100)+10})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["chart-mini-bar-mini"]],decls:3,vars:1,consts:[["height","45","yTooltipSuffix","%","tooltipType","mini",3,"data"]],template:function(n,o){n&1&&(a(0," "),l(1,"g2-mini-bar",0),a(2," ")),n&2&&(m(1),r("data",o.visitData))},dependencies:[L],encapsulation:2});let i=e;return i})();var de=(()=>{let e=class e{constructor(){this.visitData=[]}ngOnInit(){let t=new Date().getTime();for(let n=0;n<20;n+=1)this.visitData.push({x:E(new Date(t+1e3*60*60*24*n),"yyyy-MM-dd"),y:Math.floor(Math.random()*100)+10})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["chart-mini-bar-tooltip"]],decls:3,vars:1,consts:[["height","45","yTooltipSuffix","%",3,"data"]],template:function(n,o){n&1&&(a(0," "),l(1,"g2-mini-bar",0),a(2," ")),n&2&&(m(1),r("data",o.visitData))},dependencies:[L],encapsulation:2});let i=e;return i})();var ce=(()=>{let e=class e{constructor(){this.item={cols:2,urls:{"zh-CN":"packages/chart/mini-bar/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u8FF7\u4F60\u67F1\u72B6\u56FE\u66F4\u9002\u5408\u5C55\u793A\u7B80\u5355\u7684\u533A\u95F4\u6570\u636E\uFF0C\u7B80\u6D01\u7684\u8868\u73B0\u65B9\u5F0F\u53EF\u4EE5\u5F88\u597D\u7684\u51CF\u5C11\u5927\u6570\u636E\u91CF\u7684\u89C6\u89C9\u5C55\u73B0\u538B\u529B\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-mini-bar"><a class="lake-link"><i data-anchor="g2-mini-bar"></i></a>g2-mini-bar</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[color]</code></td><td>\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>#1890FF</code></td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[yTooltipSuffix]</code></td><td>y \u8F74Tooltip\u540E\u7F00\uFF0C\u4E00\u822C\u6307\u5B9A\u5355\u4F4D</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[tooltipType]</code></td><td>Tooltip\u663E\u793A\u7C7B\u578B</td><td><code>'mini','default'</code></td><td><code>'default'</code></td></tr><tr><td><code>[borderWidth]</code></td><td>\u7EBF\u6761\u7C97\u7EC6</td><td><code>number</code></td><td><code>5</code></td></tr><tr><td><code>[padding]</code></td><td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td><td><code>array</code></td><td><code>[8, 8, 8, 8]</code></td></tr><tr><td><code>[data]</code></td><td>\u6570\u636E</td><td><code>G2MiniBarData[]</code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(clickItem)</code></td><td>\u70B9\u51FB\u9879\u56DE\u8C03</td><td><code>EventEmitter&lt;G2MiniBarClickItem></code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table><h3 id="G2MiniBarData"><a class="lake-link"><i data-anchor="G2MiniBarData"></i></a>G2MiniBarData</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[x]</code></td><td>x\u8F74</td><td><code>any</code></td><td>-</td></tr><tr><td><code>[y]</code></td><td>y\u8F74</td><td><code>any</code></td><td>-</td></tr><tr><td><code>[color]</code></td><td>\u8F74\u989C\u8272</td><td><code>string</code></td><td>-</td></tr></tbody></table>`,meta:{title:"g2-mini-bar",subtitle:"\u8FF7\u4F60\u67F1\u72B6\u56FE",cols:2,type:"G2",module:"import { G2MiniBarModule } from '@delon/chart/mini-bar';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-mini-bar",title:"g2-mini-bar",h:3},{id:"G2MiniBarData",title:"G2MiniBarData",h:3}]}]}},demo:!0},this.codes=[{id:"chart-mini-bar-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Component } from '@angular/core';
import { G2MiniAreaClickItem, G2MiniAreaData } from '@delon/chart/mini-area';
import { format } from 'date-fns';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-mini-bar-basic',
  template: \`
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-mini-bar height="45" [data]="visitData" (clickItem)="handleClick($event)"></g2-mini-bar>
  \`,
})
export class ChartMiniBarBasicComponent {
  visitData = this.genData();

  constructor(private msg: NzMessageService) {}

  private genData(): G2MiniAreaData[] {
    const beginDay = new Date().getTime();
    const res: G2MiniAreaData[] = [];
    for (let i = 0; i < 20; i += 1) {
      res.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10,
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
import { G2MiniBarData } from '@delon/chart/mini-bar';
import { format } from 'date-fns';

@Component({
  selector: 'chart-mini-bar-mini',
  template: \` <g2-mini-bar height="45" [data]="visitData" yTooltipSuffix="%" tooltipType="mini"></g2-mini-bar> \`,
})
export class ChartMiniBarMiniComponent implements OnInit {
  visitData: G2MiniBarData[] = [];
  ngOnInit(): void {
    const beginDay = new Date().getTime();
    for (let i = 0; i < 20; i += 1) {
      this.visitData.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10,
      });
    }
  }
}`,lang:"ts",componentName:"ChartMiniBarMiniComponent",point:1,name:"mini",urls:"packages/chart/mini-bar/demo/mini.md",type:"demo"},{id:"chart-mini-bar-tooltip",meta:{order:0,title:"Tooltip"},summary:"<p>\u6307\u5B9A <code>yTooltipSuffix</code> \u503C\u6765\u8868\u793A\u5355\u4F4D\u3002</p>",code:`import { Component, OnInit } from '@angular/core';
import { G2MiniBarData } from '@delon/chart/mini-bar';
import { format } from 'date-fns';

@Component({
  selector: 'chart-mini-bar-tooltip',
  template: \` <g2-mini-bar height="45" [data]="visitData" yTooltipSuffix="%"></g2-mini-bar> \`,
})
export class ChartMiniBarTooltipComponent implements OnInit {
  visitData: G2MiniBarData[] = [];
  ngOnInit(): void {
    const beginDay = new Date().getTime();
    for (let i = 0; i < 20; i += 1) {
      this.visitData.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10,
      });
    }
  }
}`,lang:"ts",componentName:"ChartMiniBarTooltipComponent",point:2,name:"tooltip",urls:"packages/chart/mini-bar/demo/tooltip.md",type:"demo"}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["app-chart-mini-bar"]],hostVars:2,hostBindings:function(n,o){n&2&&g("d-block","true")},decls:21,vars:9,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","12"],[3,"item"]],template:function(n,o){n&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),a(3,`
        `),d(4,"code-box",3),a(5,`
          `),l(6,"chart-mini-bar-basic"),a(7,`
        `),c(),a(8,`
      
        `),d(9,"code-box",3),a(10,`
          `),l(11,"chart-mini-bar-tooltip"),a(12,`
        `),c(),a(13,`
      `),c(),d(14,"div",2),a(15,`
        `),d(16,"code-box",3),a(17,`
          `),l(18,"chart-mini-bar-mini"),a(19,`
        `),c(),a(20,`
      `),c()()()),n&2&&(r("codes",o.codes)("item",o.item),m(1),r("nzGutter",16),m(3),r("item",o.codes[0]),u("id",o.codes[0].id),m(5),r("item",o.codes[2]),u("id",o.codes[2].id),m(7),r("item",o.codes[1]),u("id",o.codes[1].id))},dependencies:[y,b,v,x,ie,re,de],encapsulation:2});let i=e;return i})();var me=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["chart-mini-progress-basic"]],decls:3,vars:0,consts:[["percent","78","strokeWidth","8","target","80"]],template:function(n,o){n&1&&(a(0," "),l(1,"g2-mini-progress",0),a(2," "))},dependencies:[Gt],encapsulation:2});let i=e;return i})();var se=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"zh-CN":"packages/chart/mini-progress/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u7528\u4E8E\u663E\u793A\u8DDF\u901F\u5EA6\u76F8\u5173\u56FE\u5F62\u518D\u9002\u5408\u4E0D\u8FC7\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-mini-progress"><a class="lake-link"><i data-anchor="g2-mini-progress"></i></a>g2-mini-progress</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[target]</code></td><td>\u76EE\u6807\u6BD4\u4F8B</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[color]</code></td><td>\u8FDB\u5EA6\u6761\u989C\u8272</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[strokeWidth]</code></td><td>\u8FDB\u5EA6\u6761\u9AD8\u5EA6</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[percent]</code></td><td>\u8FDB\u5EA6\u6BD4\u4F8B</td><td><code>number</code></td><td>-</td></tr></tbody></table>',meta:{title:"g2-mini-progress",subtitle:"\u8FF7\u4F60\u8FDB\u5EA6\u6761",cols:1,type:"G2",module:"import { G2MiniProgressModule } from '@delon/chart/mini-progress';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-mini-progress",title:"g2-mini-progress",h:3}]}]}},demo:!0},this.codes=[{id:"chart-mini-progress-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Component } from '@angular/core';

@Component({
  selector: 'chart-mini-progress-basic',
  template: \` <g2-mini-progress percent="78" strokeWidth="8" target="80"></g2-mini-progress> \`,
})
export class ChartMiniProgressBasicComponent {}`,lang:"ts",componentName:"ChartMiniProgressBasicComponent",point:0,name:"basic",urls:"packages/chart/mini-progress/demo/basic.md",type:"demo"}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["app-chart-mini-progress"]],hostVars:2,hostBindings:function(n,o){n&2&&g("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(n,o){n&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),a(3,`
        `),d(4,"code-box",3),a(5,`
          `),l(6,"chart-mini-progress-basic"),a(7,`
        `),c(),a(8,`
      `),c()()()),n&2&&(r("codes",o.codes)("item",o.item),m(1),r("nzGutter",16),m(3),r("item",o.codes[0]),u("id",o.codes[0].id))},dependencies:[y,b,v,x,me],encapsulation:2});let i=e;return i})();var pe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["chart-number-info-basic"]],decls:3,vars:0,consts:[["subTitle","\u672C\u5468\u8BBF\u95EE","total","12,321","subTotal","17.1","status","up"]],template:function(n,o){n&1&&(a(0," "),l(1,"number-info",0),a(2," "))},dependencies:[W],encapsulation:2});let i=e;return i})();var he=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["chart-number-info-theme"]],decls:3,vars:0,consts:[["subTitle","\u672C\u5468\u8BBF\u95EE","total","12,321","subTotal","17.1","status","down","theme","default"]],template:function(n,o){n&1&&(a(0," "),l(1,"number-info",0),a(2," "))},dependencies:[W],encapsulation:2});let i=e;return i})();var ue=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["chart-number-info-multiple"]],decls:7,vars:0,consts:[["subTitle","\u4ECA\u65E5\u8BBF\u95EE","total","12,321"],["subTitle","\u672C\u5468\u8BBF\u95EE","total","12,32100"],["subTitle","\u672C\u6708\u8BBF\u95EE","total","12,32100000"]],template:function(n,o){n&1&&(a(0,`
    `),l(1,"number-info",0),a(2,`
    `),l(3,"number-info",1),a(4,`
    `),l(5,"number-info",2),a(6,`
  `))},dependencies:[W],encapsulation:2});let i=e;return i})();var fe=(()=>{let e=class e{constructor(){this.item={cols:2,urls:{"en-US":"packages/chart/number-info/index.en-US.md","zh-CN":"packages/chart/number-info/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Often used in data cards for highlighting the business data.</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="number-info"><a class="lake-link"><i data-anchor="number-info"></i></a>number-info</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>title</td><td><code>TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[subTitle]</code></td><td>subtitle</td><td><code>TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[total]</code></td><td>total amount</td><td><code>string, number</code></td><td>-</td></tr><tr><td><code>[suffix]</code></td><td>total amount suffix</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[subTotal]</code></td><td>total amount of additional information</td><td><code>string, number</code></td><td>-</td></tr><tr><td><code>[status]</code></td><td>increase state</td><td><code>'up','down'</code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td>state style</td><td><code>'light','default'</code></td><td><code>'light'</code></td></tr><tr><td><code>[gap]</code></td><td>set the spacing (pixels) between numbers and descriptions</td><td><code>number</code></td><td>8</td></tr></tbody></table>`,meta:{type:"G2",title:"number-info",subtitle:"NumberInfo",cols:2,module:"import { NumberInfoModule } from '@delon/chart/number-info';"},toc:[{id:"API",title:"API",h:2,children:[{id:"number-info",title:"number-info",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u5E38\u7528\u5728\u6570\u636E\u5361\u7247\u4E2D\uFF0C\u7528\u4E8E\u7A81\u51FA\u5C55\u793A\u67D0\u4E2A\u4E1A\u52A1\u6570\u636E\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="number-info"><a class="lake-link"><i data-anchor="number-info"></i></a>number-info</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>\u6807\u9898</td><td><code>TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[subTitle]</code></td><td>\u5B50\u6807\u9898</td><td><code>TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[total]</code></td><td>\u603B\u91CF</td><td><code>string, number</code></td><td>-</td></tr><tr><td><code>[suffix]</code></td><td>\u603B\u91CF\u540E\u7F00</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[subTotal]</code></td><td>\u5B50\u603B\u91CF</td><td><code>string, number</code></td><td>-</td></tr><tr><td><code>[status]</code></td><td>\u589E\u52A0\u72B6\u6001</td><td><code>'up','down'</code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td>\u72B6\u6001\u6837\u5F0F</td><td><code>'light','default'</code></td><td><code>'light'</code></td></tr><tr><td><code>[gap]</code></td><td>\u8BBE\u7F6E\u6570\u5B57\u548C\u63CF\u8FF0\u76F4\u63A5\u7684\u95F4\u8DDD\uFF08\u50CF\u7D20\uFF09</td><td><code>number</code></td><td>8</td></tr></tbody></table>`,meta:{type:"G2",title:"number-info",subtitle:"\u6570\u636E\u6587\u672C",cols:2,module:"import { NumberInfoModule } from '@delon/chart/number-info';"},toc:[{id:"API",title:"API",h:2,children:[{id:"number-info",title:"number-info",h:3}]}]}},demo:!0},this.codes=[{id:"chart-number-info-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"}},summary:"<p>\u5404\u79CD\u6570\u636E\u6587\u6848\u7684\u5C55\u73B0\u65B9\u5F0F\u3002</p>",code:`import { Component } from '@angular/core';

@Component({
  selector: 'chart-number-info-basic',
  template: \` <number-info subTitle="\u672C\u5468\u8BBF\u95EE" total="12,321" subTotal="17.1" status="up"></number-info> \`,
})
export class ChartNumberInfoBasicComponent {}`,lang:"ts",componentName:"ChartNumberInfoBasicComponent",point:0,name:"basic",urls:"packages/chart/number-info/demo/basic.md",type:"demo"},{id:"chart-number-info-theme",meta:{order:1,title:"\u4E3B\u9898"},summary:"<p>\u6697\u7CFB\u3002</p>",code:`import { Component } from '@angular/core';

@Component({
  selector: 'chart-number-info-theme',
  template: \` <number-info subTitle="\u672C\u5468\u8BBF\u95EE" total="12,321" subTotal="17.1" status="down" theme="default"></number-info> \`,
})
export class ChartNumberInfoThemeComponent {}`,lang:"ts",componentName:"ChartNumberInfoThemeComponent",point:1,name:"theme",urls:"packages/chart/number-info/demo/theme.md",type:"demo"},{id:"chart-number-info-multiple",meta:{order:2,title:{"zh-CN":"\u591A\u5217","en-US":"Multiple"}},summary:{"zh-CN":"<p>\u591A\u4E2A<code>number-info</code>\u7EC4\u4EF6\u5728\u4E00\u8D77\u65F6\u589E\u52A0\u5206\u9694\u7B26\u3002</p>","en-US":"<p>Should be show a separator when multiple <code>number-info</code> components.</p>"},code:`import { Component } from '@angular/core';

@Component({
  selector: 'chart-number-info-multiple',
  template: \`
    <number-info subTitle="\u4ECA\u65E5\u8BBF\u95EE" total="12,321"></number-info>
    <number-info subTitle="\u672C\u5468\u8BBF\u95EE" total="12,32100"></number-info>
    <number-info subTitle="\u672C\u6708\u8BBF\u95EE" total="12,32100000"></number-info>
  \`,
})
export class ChartNumberInfoMultipleComponent {}`,lang:"ts",componentName:"ChartNumberInfoMultipleComponent",point:2,name:"multiple",urls:"packages/chart/number-info/demo/multiple.md",type:"demo"}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["app-chart-number-info"]],hostVars:2,hostBindings:function(n,o){n&2&&g("d-block","true")},decls:21,vars:9,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","12"],[3,"item"]],template:function(n,o){n&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),a(3,`
        `),d(4,"code-box",3),a(5,`
          `),l(6,"chart-number-info-basic"),a(7,`
        `),c(),a(8,`
      
        `),d(9,"code-box",3),a(10,`
          `),l(11,"chart-number-info-multiple"),a(12,`
        `),c(),a(13,`
      `),c(),d(14,"div",2),a(15,`
        `),d(16,"code-box",3),a(17,`
          `),l(18,"chart-number-info-theme"),a(19,`
        `),c(),a(20,`
      `),c()()()),n&2&&(r("codes",o.codes)("item",o.item),m(1),r("nzGutter",16),m(3),r("item",o.codes[0]),u("id",o.codes[0].id),m(5),r("item",o.codes[2]),u("id",o.codes[2].id),m(7),r("item",o.codes[1]),u("id",o.codes[1].id))},dependencies:[y,b,v,x,pe,he,ue],encapsulation:2});let i=e;return i})();var dn=["pie"],ge=(()=>{let e=class e{constructor(t){this.msg=t,this.salesPieData=[],this.total="",this.refresh()}refresh(){let t=(n=0,o=5e3)=>Math.floor(Math.random()*(o-n+1)+n);this.salesPieData=[{x:"\u5BB6\u7528\u7535\u5668",y:t()},{x:"\u98DF\u7528\u9152\u6C34",y:t()},{x:"\u4E2A\u62A4\u5065\u5EB7",y:t()},{x:"\u670D\u9970\u7BB1\u5305",y:t()},{x:"\u6BCD\u5A74\u4EA7\u54C1",y:t()}],Math.random()>.5&&this.salesPieData.push({x:"\u5176\u4ED6",y:t()}),this.total=`&yen ${this.salesPieData.reduce((n,o)=>o.y+n,0).toFixed(2)}`,this.pie&&setTimeout(()=>this.pie.changeData())}format(t){return`&yen ${t.toFixed(2)}`}handleClick(t){this.msg.info(`${t.item.x} - ${t.item.y}`)}};e.\u0275fac=function(n){return new(n||e)(M(T))},e.\u0275cmp=s({type:e,selectors:[["chart-pie-basic"]],viewQuery:function(n,o){if(n&1&&lt(dn,5),n&2){let p;st(p=pt())&&(o.pie=p.first)}},decls:7,vars:4,consts:[["nz-button","","nzType","primary",3,"click"],["title","\u9500\u552E\u989D","subTitle","\u9500\u552E\u989D","height","294","repaint","false",3,"hasLegend","total","valueFormat","data","clickItem"],["pie",""]],template:function(n,o){n&1&&(a(0,`
    `),d(1,"button",0),C("click",function(){return o.refresh()}),a(2,"Refresh"),c(),a(3,`
    `),d(4,"g2-pie",1,2),C("clickItem",function(f){return o.handleClick(f)}),c(),a(6,`
  `)),n&2&&(m(4),r("hasLegend",!0)("total",o.total)("valueFormat",o.format)("data",o.salesPieData))},dependencies:[X,z,D,k],encapsulation:2});let i=e;return i})();var ve=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["chart-pie-mini"]],decls:6,vars:0,consts:[[2,"width","200px","display","inline-block"],["percent","28","subTitle","\u4E2D\u5F0F\u5FEB\u9910","total","28%","height","130"]],template:function(n,o){n&1&&(a(0,`
    `),d(1,"div",0),a(2,`
      `),l(3,"g2-pie",1),a(4,`
    `),c(),a(5,`
  `))},dependencies:[X],encapsulation:2});let i=e;return i})();var Ce=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"zh-CN":"packages/chart/pie/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u7528\u4E8E\u663E\u793A\u8DDF\u901F\u5EA6\u76F8\u5173\u56FE\u5F62\u518D\u9002\u5408\u4E0D\u8FC7\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-pie"><a class="lake-link"><i data-anchor="g2-pie"></i></a>g2-pie</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[animate]</code></td><td>\u662F\u5426\u663E\u793A\u52A8\u753B</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[color]</code></td><td>\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>rgba(24, 144, 255, 0.85)</code></td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[hasLegend]</code></td><td>\u662F\u5426\u663E\u793A legend</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[padding]</code></td><td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td><td><code>number[]</code></td><td><code>[12, 0, 12, 0]</code></td></tr><tr><td><code>[percent]</code></td><td>\u5360\u6BD4</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[lineWidth]</code></td><td>\u8FB9\u6846\u7C97\u7EC6</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[inner]</code></td><td>\u5185\u90E8\u6781\u5750\u6807\u7CFB\u7684\u534A\u5F84</td><td><code>number</code></td><td><code>0.75</code></td></tr><tr><td><code>[blockMaxWidth]</code></td><td>\u591A\u5C11\u5BBD\u5EA6\u4E3A\u5757\u663E\u793A</td><td><code>number</code></td><td><code>380</code></td></tr><tr><td><code>[tooltip]</code></td><td>\u662F\u5426\u663E\u793A tooltip</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[subTitle]</code></td><td>\u56FE\u8868\u5B50\u6807\u9898</td><td><code>string,TemplateRef&lt;void><void></code></td><td>-</td></tr><tr><td><code>[total]</code></td><td>\u603B\u91CF</td><td><code>string,number,TemplateRef&lt;void><void></code></td><td>-</td></tr><tr><td><code>[valueFormat]</code></td><td>y\u8F74\u683C\u5F0F\u5316</td><td><code>(y: number) => string</code></td><td>-</td></tr><tr><td><code>[data]</code></td><td>\u6570\u636E</td><td><code>G2PieData[]</code></td><td>-</td></tr><tr><td><code>[colors]</code></td><td>\u989C\u8272\u5217\u8868</td><td><code>string[]</code></td><td>-</td></tr><tr><td><code>[interaction]</code></td><td>\u4EA4\u4E92\u7C7B\u578B\uFF0Cnone \u65E0 element-active \u56FE\u5F62\u5143\u7D20\uFF0Cactive-region \u56FE\u8868\u7EC4\u4EF6\uFF0Cbrush \u6846\u9009\uFF0Cdrag-move \u79FB\u52A8</td><td><code>InteractionType</code></td><td><code>none</code></td></tr><tr><td><code>[ratio]</code></td><td>\u767E\u5206\u6BD4\u914D\u7F6E\u9879</td><td><code>G2PieRatio</code></td><td><code>{ text: '\u5360\u6BD4', inverse: '\u53CD\u6BD4', color: '', inverseColor: '#F0F2F5' }</code></td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(clickItem)</code></td><td>\u70B9\u51FB\u9879\u56DE\u8C03</td><td><code>EventEmitter&lt;G2PieClickItem></code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table><h3 id="G2PieData"><a class="lake-link"><i data-anchor="G2PieData"></i></a>G2PieData</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[x]</code></td><td>x\u8F74</td><td><code>any</code></td><td>-</td></tr><tr><td><code>[y]</code></td><td>y\u8F74</td><td><code>number</code></td><td>-</td></tr></tbody></table>`,meta:{title:"g2-pie",subtitle:"\u997C\u72B6\u56FE",cols:1,type:"G2",module:"import { G2PieModule } from '@delon/chart/pie';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-pie",title:"g2-pie",h:3},{id:"G2PieData",title:"G2PieData",h:3}]}]}},demo:!0},this.codes=[{id:"chart-pie-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E1D\u6ED1\u66F4\u65B0\u6570\u636E\u7684\u5224\u65AD\u6807\u51C6\u662F\u4EE5\u53EA\u66F4\u65B0 <code>data</code> \u4E3A\u51C6\uFF0C\u8FD9\u91CC\u5229\u7528 <code>repaint</code> \u8FDB\u884C\u624B\u52A8\u8C03\u7528 <code>changeData</code> \u6539\u53D8\u6570\u636E\u8FBE\u5230\u4E1D\u6ED1\u66F4\u65B0\u7684\u6548\u679C\u3002</p>",code:`import { Component, ViewChild } from '@angular/core';
import { G2PieClickItem, G2PieComponent, G2PieData } from '@delon/chart/pie';
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
    ></g2-pie>
  \`,
})
export class ChartPieBasicComponent {
  @ViewChild('pie', { static: false }) readonly pie!: G2PieComponent;
  salesPieData: G2PieData[] = [];
  total = '';

  constructor(private msg: NzMessageService) {
    this.refresh();
  }

  refresh(): void {
    const rv = (min: number = 0, max: number = 5000) => Math.floor(Math.random() * (max - min + 1) + min);
    this.salesPieData = [
      {
        x: '\u5BB6\u7528\u7535\u5668',
        y: rv(),
      },
      {
        x: '\u98DF\u7528\u9152\u6C34',
        y: rv(),
      },
      {
        x: '\u4E2A\u62A4\u5065\u5EB7',
        y: rv(),
      },
      {
        x: '\u670D\u9970\u7BB1\u5305',
        y: rv(),
      },
      {
        x: '\u6BCD\u5A74\u4EA7\u54C1',
        y: rv(),
      },
    ];
    if (Math.random() > 0.5) {
      this.salesPieData.push({
        x: '\u5176\u4ED6',
        y: rv(),
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

@Component({
  selector: 'chart-pie-mini',
  template: \`
    <div style="width: 200px; display: inline-block">
      <g2-pie percent="28" subTitle="\u4E2D\u5F0F\u5FEB\u9910" total="28%" height="130"></g2-pie>
    </div>
  \`,
})
export class ChartPieMiniComponent {}`,lang:"ts",componentName:"ChartPieMiniComponent",point:1,name:"mini",urls:"packages/chart/pie/demo/mini.md",type:"demo"}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["app-chart-pie"]],hostVars:2,hostBindings:function(n,o){n&2&&g("d-block","true")},decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(n,o){n&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),a(3,`
        `),d(4,"code-box",3),a(5,`
          `),l(6,"chart-pie-basic"),a(7,`
        `),c(),a(8,`
      
        `),d(9,"code-box",3),a(10,`
          `),l(11,"chart-pie-mini"),a(12,`
        `),c(),a(13,`
      `),c()()()),n&2&&(r("codes",o.codes)("item",o.item),m(1),r("nzGutter",16),m(3),r("item",o.codes[0]),u("id",o.codes[0].id),m(5),r("item",o.codes[1]),u("id",o.codes[1].id))},dependencies:[y,b,v,x,ge,ve],encapsulation:2});let i=e;return i})();var be=(()=>{let e=class e{constructor(t){this.msg=t,this.radarData=[],this.refresh()}refresh(){let t=(f=1,B=10)=>Math.floor(Math.random()*(B-f+1)+f),n=["\u4E2A\u4EBA","\u56E2\u961F","\u90E8\u95E8"].map(f=>({name:f,ref:t(),koubei:t(),output:t(),contribute:t(),hot:t()})),o={ref:"\u5F15\u7528",koubei:"\u53E3\u7891",output:"\u4EA7\u91CF",contribute:"\u8D21\u732E",hot:"\u70ED\u5EA6"};Math.random()>.5&&delete o.hot;let p=[];n.forEach(f=>{Object.keys(f).forEach(B=>{B!=="name"&&p.push({name:f.name,label:o[B],value:f[B]})})}),this.radarData=p}handleClick(t){this.msg.info(`${t.item.label} - ${t.item.name} - ${t.item.value}`)}};e.\u0275fac=function(n){return new(n||e)(M(T))},e.\u0275cmp=s({type:e,selectors:[["chart-radar-basic"]],decls:6,vars:2,consts:[["nz-button","","nzType","primary",3,"click"],["height","286",3,"hasLegend","data","clickItem"]],template:function(n,o){n&1&&(a(0,`
    `),d(1,"button",0),C("click",function(){return o.refresh()}),a(2,"Refresh"),c(),a(3,`
    `),d(4,"g2-radar",1),C("clickItem",function(f){return o.handleClick(f)}),c(),a(5,`
  `)),n&2&&(m(4),r("hasLegend",!0)("data",o.radarData))},dependencies:[St,z,D,k],encapsulation:2});let i=e;return i})();var ye=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"zh-CN":"packages/chart/radar/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u96F7\u8FBE\u56FE\u662F\u4EE5\u76F8\u540C\u70B9\u5F00\u59CB\u7684\u8F74\u4E0A\u8868\u793A\u7684\u4E09\u4E2A\u6216\u66F4\u591A\u4E2A\u5B9A\u91CF\u53D8\u91CF\u7684\u4E8C\u7EF4\u56FE\u5F62\u7684\u5F62\u5F0F\u663E\u793A\u591A\u53D8\u91CF\u6570\u636E\u7684\u56FE\u5F62\u65B9\u6CD5\u3002\u8F74\u7684\u76F8\u5BF9\u4F4D\u7F6E\u548C\u89D2\u5EA6\u901A\u5E38\u662F\u4E0D\u77E5\u60C5\u7684\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-radar"><a class="lake-link"><i data-anchor="g2-radar"></i></a>g2-radar</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[title]</code></td><td>\u56FE\u8868\u6807\u9898</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[hasLegend]</code></td><td>\u662F\u5426\u663E\u793A legend</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[padding]</code></td><td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td><td><code>array</code></td><td><code>[24, 30, 16, 30]</code></td></tr><tr><td><code>[colors]</code></td><td>\u989C\u8272\u5217\u8868</td><td><code>string[]</code></td><td>-</td></tr><tr><td><code>[data]</code></td><td>\u6570\u636E</td><td><code>G2RadarData[]</code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(clickItem)</code></td><td>\u70B9\u51FB\u9879\u56DE\u8C03</td><td><code>EventEmitter&lt;G2RadarClickItem></code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table><h3 id="G2RadarData"><a class="lake-link"><i data-anchor="G2RadarData"></i></a>G2RadarData</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[name]</code></td><td>\u540D\u79F0</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[label]</code></td><td>\u6807\u7B7E</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[value]</code></td><td>\u503C</td><td><code>number</code></td><td>-</td></tr></tbody></table>',meta:{title:"g2-radar",subtitle:"\u96F7\u8FBE\u56FE",cols:1,type:"G2",module:"import { G2RadarModule } from '@delon/chart/radar';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-radar",title:"g2-radar",h:3},{id:"G2RadarData",title:"G2RadarData",h:3}]}]}},demo:!0},this.codes=[{id:"chart-radar-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Component } from '@angular/core';
import { G2RadarClickItem, G2RadarData } from '@delon/chart/radar';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-radar-basic',
  template: \`
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-radar [hasLegend]="true" [data]="radarData" height="286" (clickItem)="handleClick($event)"></g2-radar>
  \`,
})
export class ChartRadarBasicComponent {
  radarData: G2RadarData[] = [];

  constructor(private msg: NzMessageService) {
    this.refresh();
  }

  refresh(): void {
    const rv = (min: number = 1, max: number = 10) => Math.floor(Math.random() * (max - min + 1) + min);
    const radarOriginData = ['\u4E2A\u4EBA', '\u56E2\u961F', '\u90E8\u95E8'].map(name => ({
      name,
      ref: rv(),
      koubei: rv(),
      output: rv(),
      contribute: rv(),
      hot: rv(),
    }));
    const radarTitleMap: { [key: string]: string } = {
      ref: '\u5F15\u7528',
      koubei: '\u53E3\u7891',
      output: '\u4EA7\u91CF',
      contribute: '\u8D21\u732E',
      hot: '\u70ED\u5EA6',
    };
    if (Math.random() > 0.5) {
      delete radarTitleMap.hot;
    }
    const res: G2RadarData[] = [];
    radarOriginData.forEach((item: { [key: string]: any }) => {
      Object.keys(item).forEach(key => {
        if (key !== 'name') {
          res.push({
            name: item.name,
            label: radarTitleMap[key],
            value: item[key],
          });
        }
      });
    });
    this.radarData = res;
  }

  handleClick(data: G2RadarClickItem): void {
    this.msg.info(\`\${data.item.label} - \${data.item.name} - \${data.item.value}\`);
  }
}`,lang:"ts",componentName:"ChartRadarBasicComponent",point:0,name:"basic",urls:"packages/chart/radar/demo/basic.md",type:"demo"}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["app-chart-radar"]],hostVars:2,hostBindings:function(n,o){n&2&&g("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(n,o){n&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),a(3,`
        `),d(4,"code-box",3),a(5,`
          `),l(6,"chart-radar-basic"),a(7,`
        `),c(),a(8,`
      `),c()()()),n&2&&(r("codes",o.codes)("item",o.item),m(1),r("nzGutter",16),m(3),r("item",o.codes[0]),u("id",o.codes[0].id))},dependencies:[y,b,v,x,be],encapsulation:2});let i=e;return i})();function ln(i,e){if(i&1&&(a(0,`
          `),d(1,"tr"),a(2,`
            `),d(3,"td"),a(4),c(),a(5,`
            `),d(6,"td"),a(7,`
              `),l(8,"g2-single-bar",3),a(9,`
            `),c(),a(10,`
            `),d(11,"td"),a(12,`
              `),l(13,"g2-single-bar",4),a(14,`
            `),c(),a(15,`
          `),c(),a(16,`
        `)),i&2){let $=e.$implicit,t=e.$index;m(4),ct(t+1),m(4),r("value",$.value),m(5),r("value",$.other)}}var xe=(()=>{let e=class e{constructor(){this.list=new Array(5).fill({}).map(()=>({id:Math.floor(Math.random()*1e4),value:Math.floor(Math.random()*100),other:Math.floor(Math.random()*100)>50?Math.floor(Math.random()*100):-Math.floor(Math.random()*100)}))}refresh(){this.list.forEach(t=>{t.value=Math.floor(Math.random()*100),t.other=Math.floor(Math.random()*100)>50?Math.floor(Math.random()*100):-Math.floor(Math.random()*100)})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["chart-single-bar-basic"]],decls:27,vars:2,consts:[["nz-button","","nzType","primary",3,"click"],[3,"nzData","nzShowPagination"],["nzWidth","350px"],["height","24",3,"value"],["height","60","min","-100","line","",3,"value"]],template:function(n,o){n&1&&(a(0,`
    `),d(1,"button",0),C("click",function(){return o.refresh()}),a(2,"Refresh"),c(),a(3,`
    `),d(4,"nz-table",1),a(5,`
      `),d(6,"thead"),a(7,`
        `),d(8,"tr"),a(9,`
          `),d(10,"th"),a(11,"\u5E8F\u53F7"),c(),a(12,`
          `),d(13,"th",2),a(14,"\u670D\u52A1\u8C03\u7528\u6B21\u6570"),c(),a(15,`
          `),d(16,"th",2),a(17,"\u6570\u636E\u6709\u8D1F\u503C"),c(),a(18,`
        `),c(),a(19,`
      `),c(),a(20,`
      `),d(21,"tbody"),a(22,`
        `),J(23,ln,17,3,null,null,Q),c(),a(25,`
    `),c(),a(26,`
  `)),n&2&&(m(4),r("nzData",o.list)("nzShowPagination",!1),Z(23,o.list))},dependencies:[Bt,z,D,k,yt,vt,Ct,Dt,bt,xt],styles:["[_nghost-%COMP%]     .ant-table tbody>tr>td{padding:0}"]});let i=e;return i})();var De=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"zh-CN":"packages/chart/single-bar/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u5355\u4E00\u67F1\u72B6\u56FE\u66F4\u9002\u5408\u5728\u5217\u8868\u4E2D\u5C55\u793A\u7B80\u5355\u7684\u533A\u95F4\u6570\u636E\uFF0C\u7B80\u6D01\u7684\u8868\u73B0\u65B9\u5F0F\u53EF\u4EE5\u5F88\u597D\u7684\u51CF\u5C11\u5927\u6570\u636E\u91CF\u7684\u89C6\u89C9\u5C55\u73B0\u538B\u529B\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-single-bar"><a class="lake-link"><i data-anchor="g2-single-bar"></i></a>g2-single-bar</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[plusColor]</code></td><td>\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>#40a9ff</code></td></tr><tr><td><code>[minusColor]</code></td><td>\u8D1F\u503C\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>#ff4d4f</code></td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td><code>60</code></td></tr><tr><td><code>[barSize]</code></td><td>\u67F1\u72B6\u9AD8\u5EA6</td><td><code>number</code></td><td><code>30</code></td></tr><tr><td><code>[min]</code></td><td>\u6700\u5C0F\u503C</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[max]</code></td><td>\u6700\u5927\u503C\uFF0C\u82E5\u5C0F\u4E8E0\u8868\u793A\u663E\u793A\u8D1F\u503C</td><td><code>number</code></td><td><code>100</code></td></tr><tr><td><code>[padding]</code></td><td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td><td><code>any</code></td><td><code>0</code></td></tr><tr><td><code>[value]</code></td><td>\u503C</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[format]</code></td><td>\u663E\u793A\u503C\u683C\u5F0F</td><td><code>(value: number) => string</code></td><td>-</td></tr><tr><td><code>[textStyle]</code></td><td>\u663E\u793A\u503C\u6837\u5F0F</td><td><code>any</code></td><td><code>{ fontSize: 12, color: '#595959' }</code></td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table>`,meta:{title:"g2-single-bar",subtitle:"\u5355\u4E00\u67F1\u72B6\u56FE",cols:1,type:"G2",module:"import { G2SingleBarModule } from '@delon/chart/single-bar';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-single-bar",title:"g2-single-bar",h:3}]}]}},demo:!0},this.codes=[{id:"chart-single-bar-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Component, ViewEncapsulation } from '@angular/core';

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
    \`,
  ],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ChartSingleBarBasicComponent {
  list: Array<{ id: number; value: number; other: number }> = new Array(5).fill({}).map(() => ({
    id: Math.floor(Math.random() * 10000),
    value: Math.floor(Math.random() * 100),
    other: Math.floor(Math.random() * 100) > 50 ? Math.floor(Math.random() * 100) : -Math.floor(Math.random() * 100),
  }));

  refresh(): void {
    this.list.forEach(v => {
      v.value = Math.floor(Math.random() * 100);
      v.other = Math.floor(Math.random() * 100) > 50 ? Math.floor(Math.random() * 100) : -Math.floor(Math.random() * 100);
    });
  }
}`,lang:"ts",componentName:"ChartSingleBarBasicComponent",point:0,name:"basic",urls:"packages/chart/single-bar/demo/basic.md",type:"demo"}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["app-chart-single-bar"]],hostVars:2,hostBindings:function(n,o){n&2&&g("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(n,o){n&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),a(3,`
        `),d(4,"code-box",3),a(5,`
          `),l(6,"chart-single-bar-basic"),a(7,`
        `),c(),a(8,`
      `),c()()()),n&2&&(r("codes",o.codes)("item",o.item),m(1),r("nzGutter",16),m(3),r("item",o.codes[0]),u("id",o.codes[0].id))},dependencies:[y,b,v,x,xe],encapsulation:2});let i=e;return i})();var Me=(()=>{let e=class e{constructor(t){this.msg=t,this.tags=[],this.refresh()}refresh(){let t=(n=1,o=10)=>Math.floor(Math.random()*(o-n+1)+n);this.tags=[{value:t(),name:"NG-ALAIN"},{value:t(),name:"AntV"},{value:t(),name:"F2"},{value:t(),name:"G2"},{value:t(),name:"G6"},{value:t(),name:"DataSet"},{value:t(),name:"\u58A8\u8005\u5B66\u9662"},{value:t(),name:"Analysis"},{value:t(),name:"Data Mining"},{value:t(),name:"Data Vis"},{value:t(),name:"Design"},{value:t(),name:"Grammar"},{value:t(),name:"Graphics"},{value:t(),name:"Graph"},{value:t(),name:"Hierarchy"},{value:t(),name:"Labeling"},{value:t(),name:"Layout"},{value:t(),name:"Quantitative"},{value:t(),name:"Relation"},{value:t(),name:"Statistics"},{value:t(),name:"\u53EF\u89C6\u5316"},{value:t(),name:"\u6570\u636E"},{value:t(),name:"\u6570\u636E\u53EF\u89C6\u5316"},{value:t(),name:"Arc Diagram"},{value:t(),name:"Bar Chart"},{value:t(),name:"Canvas"},{value:t(),name:"Chart"},{value:t(),name:"DAG"},{value:t(),name:"DG"},{value:t(),name:"Facet"},{value:t(),name:"Geo"},{value:t(),name:"Line"},{value:t(),name:"MindMap"},{value:t(),name:"Pie"},{value:t(),name:"Pizza Chart"},{value:t(),name:"Punch Card"},{value:t(),name:"SVG"},{value:t(),name:"Sunburst"},{value:t(),name:"Tree"},{value:t(),name:"UML"},{value:t(),name:"Chart"},{value:t(),name:"View"},{value:t(),name:"Geom"},{value:t(),name:"Shape"},{value:t(),name:"Scale"},{value:t(),name:"Animate"},{value:t(),name:"Global"},{value:t(),name:"Slider"},{value:t(),name:"Connector"},{value:t(),name:"Transform"},{value:t(),name:"Util"},{value:t(),name:"DomUtil"},{value:t(),name:"MatrixUtil"},{value:t(),name:"PathUtil"},{value:t(),name:"G"},{value:t(),name:"2D"},{value:t(),name:"3D"},{value:t(),name:"Line"},{value:t(),name:"Area"},{value:t(),name:"Interval"},{value:t(),name:"Schema"},{value:t(),name:"Edge"},{value:t(),name:"Polygon"},{value:t(),name:"Heatmap"},{value:t(),name:"Render"},{value:t(),name:"Tooltip"},{value:t(),name:"Axis"},{value:t(),name:"Guide"},{value:t(),name:"Coord"},{value:t(),name:"Legend"},{value:t(),name:"Path"},{value:t(),name:"Helix"},{value:t(),name:"Theta"},{value:t(),name:"Rect"},{value:t(),name:"Polar"},{value:t(),name:"Dsv"},{value:t(),name:"Csv"},{value:t(),name:"Tsv"},{value:t(),name:"GeoJSON"},{value:t(),name:"TopoJSON"},{value:t(),name:"Filter"},{value:t(),name:"Map"},{value:t(),name:"Pick"},{value:t(),name:"Rename"},{value:t(),name:"Filter"},{value:t(),name:"Map"},{value:t(),name:"Pick"},{value:t(),name:"Rename"},{value:t(),name:"Reverse"},{value:t(),name:"sort"},{value:t(),name:"Subset"},{value:t(),name:"Partition"},{value:t(),name:"Imputation"},{value:t(),name:"Fold"},{value:t(),name:"Aggregate"},{value:t(),name:"Proportion"},{value:t(),name:"Histogram"},{value:t(),name:"Quantile"},{value:t(),name:"Treemap"},{value:t(),name:"Hexagon"},{value:t(),name:"Binning"},{value:t(),name:"kernel"},{value:t(),name:"Regression"},{value:t(),name:"Density"},{value:t(),name:"Sankey"},{value:t(),name:"Voronoi"},{value:t(),name:"Projection"},{value:t(),name:"Centroid"},{value:t(),name:"H5"},{value:t(),name:"Mobile"},{value:t(),name:"K\u7EBF\u56FE"},{value:t(),name:"\u5173\u7CFB\u56FE"},{value:t(),name:"\u70DB\u5F62\u56FE"},{value:t(),name:"\u80A1\u7968\u56FE"},{value:t(),name:"\u76F4\u65B9\u56FE"},{value:t(),name:"\u91D1\u5B57\u5854\u56FE"},{value:t(),name:"\u5206\u9762"},{value:t(),name:"\u5357\u4E01\u683C\u5C14\u73AB\u7470\u56FE"},{value:t(),name:"\u997C\u56FE"},{value:t(),name:"\u7EBF\u56FE"},{value:t(),name:"\u70B9\u56FE"},{value:t(),name:"\u6563\u70B9\u56FE"},{value:t(),name:"\u5B50\u5F39\u56FE"},{value:t(),name:"\u67F1\u72B6\u56FE"},{value:t(),name:"\u4EEA\u8868\u76D8"},{value:t(),name:"\u6C14\u6CE1\u56FE"},{value:t(),name:"\u6F0F\u6597\u56FE"},{value:t(),name:"\u70ED\u529B\u56FE"},{value:t(),name:"\u7389\u73A6\u56FE"},{value:t(),name:"\u76F4\u65B9\u56FE"},{value:t(),name:"\u77E9\u5F62\u6811\u56FE"},{value:t(),name:"\u7BB1\u5F62\u56FE"},{value:t(),name:"\u8272\u5757\u56FE"},{value:t(),name:"\u87BA\u65CB\u56FE"},{value:t(),name:"\u8BCD\u4E91"},{value:t(),name:"\u8BCD\u4E91\u56FE"},{value:t(),name:"\u96F7\u8FBE\u56FE"},{value:t(),name:"\u9762\u79EF\u56FE"},{value:t(),name:"\u9A6C\u8D5B\u514B\u56FE"},{value:t(),name:"\u76D2\u987B\u56FE"},{value:t(),name:"\u5750\u6807\u8F74"},{value:t(),name:""},{value:t(),name:"Jacques Bertin"},{value:t(),name:"Leland Wilkinson"},{value:t(),name:"William Playfair"},{value:t(),name:"\u5173\u8054"},{value:t(),name:"\u5206\u5E03"},{value:t(),name:"\u533A\u95F4"},{value:t(),name:"\u5360\u6BD4"},{value:t(),name:"\u5730\u56FE"},{value:t(),name:"\u65F6\u95F4"},{value:t(),name:"\u6BD4\u8F83"},{value:t(),name:"\u6D41\u7A0B"},{value:t(),name:"\u8D8B\u52BF"},{value:t(),name:"\u4EA6\u53F6"},{value:t(),name:"\u518D\u98DE"},{value:t(),name:"\u5B8C\u767D"},{value:t(),name:"\u5DF4\u601D"},{value:t(),name:"\u5F20\u521D\u5C18"},{value:t(),name:"\u5FA1\u672F"},{value:t(),name:"\u6709\u7530"},{value:t(),name:"\u6C89\u9C7C"},{value:t(),name:"\u7389\u4F2F"},{value:t(),name:"\u753B\u5EB7"},{value:t(),name:"\u796F\u9038"},{value:t(),name:"\u7EDD\u4E91"},{value:t(),name:"\u7F57\u5BAA"},{value:t(),name:"\u8427\u5E86"},{value:t(),name:"\u8463\u73CA\u73CA"},{value:t(),name:"\u9646\u6C89"},{value:t(),name:"\u987E\u503E"},{value:t(),name:"Domo"},{value:t(),name:"GPL"},{value:t(),name:"PAI"},{value:t(),name:"SPSS"},{value:t(),name:"SYSTAT"},{value:t(),name:"Tableau"},{value:t(),name:"D3"},{value:t(),name:"Vega"},{value:t(),name:"\u7EDF\u8BA1\u56FE\u8868"}]}handleClick(t){this.msg.info(`${t.item.name} - ${t.item.value}`)}};e.\u0275fac=function(n){return new(n||e)(M(T))},e.\u0275cmp=s({type:e,selectors:[["chart-tag-cloud-basic"]],decls:6,vars:1,consts:[["nz-button","","nzType","primary",3,"click"],["height","400",3,"data","clickItem"]],template:function(n,o){n&1&&(a(0,`
    `),d(1,"button",0),C("click",function(){return o.refresh()}),a(2,"Refresh"),c(),a(3,`
    `),d(4,"g2-tag-cloud",1),C("clickItem",function(f){return o.handleClick(f)}),c(),a(5,`
  `)),n&2&&(m(4),r("data",o.tags))},dependencies:[Et,z,D,k],encapsulation:2});let i=e;return i})();var ke=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"zh-CN":"packages/chart/tag-cloud/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u6807\u7B7E\u4E91\u662F\u4E00\u5957\u76F8\u5173\u7684\u6807\u7B7E\u4EE5\u53CA\u4E0E\u6B64\u76F8\u5E94\u7684\u6743\u91CD\u5C55\u793A\u65B9\u5F0F\uFF0C\u4E00\u822C\u5178\u578B\u7684\u6807\u7B7E\u4E91\u6709 30 \u81F3 150 \u4E2A\u6807\u7B7E\uFF0C\u800C\u6743\u91CD\u5F71\u54CD\u4F7F\u7528\u7684\u5B57\u4F53\u5927\u5C0F\u6216\u5176\u4ED6\u89C6\u89C9\u6548\u679C\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-tag-cloud"><a class="lake-link"><i data-anchor="g2-tag-cloud"></i></a>g2-tag-cloud</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>200</code></td></tr><tr><td><code>[height]</code></td><td>\u9AD8\u5EA6\u503C</td><td><code>number</code></td><td><code>200</code></td></tr><tr><td><code>[width]</code></td><td>\u5BBD\u5EA6\u503C\uFF0C\u82E5\u4E0D\u6307\u5B9A\u81EA\u52A8\u6309\u5BBF\u4E3B\u5143\u7D20\u7684\u5BBD\u5EA6</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[data]</code></td><td>\u6570\u636E</td><td><code>G2TagCloudData[]</code></td><td><code>[]</code></td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(clickItem)</code></td><td>\u70B9\u51FB\u9879\u56DE\u8C03</td><td><code>EventEmitter&lt;G2TagCloudClickItem></code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table><h3 id="G2TagCloudData"><a class="lake-link"><i data-anchor="G2TagCloudData"></i></a>G2TagCloudData</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[name]</code></td><td>\u540D\u79F0</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[value]</code></td><td>\u503C</td><td><code>number</code></td><td>-</td></tr></tbody></table>',meta:{title:"g2-tag-cloud",subtitle:"\u6807\u7B7E\u4E91",cols:1,type:"G2",module:"import { G2TagCloudModule } from '@delon/chart/tag-cloud';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-tag-cloud",title:"g2-tag-cloud",h:3},{id:"G2TagCloudData",title:"G2TagCloudData",h:3}]}]}},demo:!0},this.codes=[{id:"chart-tag-cloud-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Component } from '@angular/core';
import { G2TagCloudClickItem, G2TagCloudData } from '@delon/chart/tag-cloud';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-tag-cloud-basic',
  template: \`
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-tag-cloud [data]="tags" height="400" (clickItem)="handleClick($event)"></g2-tag-cloud>
  \`,
})
export class ChartTagCloudBasicComponent {
  tags: G2TagCloudData[] = [];

  constructor(private msg: NzMessageService) {
    this.refresh();
  }

  refresh(): void {
    const rv = (min: number = 1, max: number = 10) => Math.floor(Math.random() * (max - min + 1) + min);

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
      { value: rv(), name: '\u7EDF\u8BA1\u56FE\u8868' },
    ];
  }

  handleClick(data: G2TagCloudClickItem): void {
    this.msg.info(\`\${data.item.name} - \${data.item.value}\`);
  }
}`,lang:"ts",componentName:"ChartTagCloudBasicComponent",point:0,name:"basic",urls:"packages/chart/tag-cloud/demo/basic.md",type:"demo"}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["app-chart-tag-cloud"]],hostVars:2,hostBindings:function(n,o){n&2&&g("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(n,o){n&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),a(3,`
        `),d(4,"code-box",3),a(5,`
          `),l(6,"chart-tag-cloud-basic"),a(7,`
        `),c(),a(8,`
      `),c()()()),n&2&&(r("codes",o.codes)("item",o.item),m(1),r("nzGutter",16),m(3),r("item",o.codes[0]),u("id",o.codes[0].id))},dependencies:[y,b,v,x,Me],encapsulation:2});let i=e;return i})();var un=()=>({y1:"\u5BA2\u6D41\u91CF",y2:"\u652F\u4ED8\u7B14\u6570"}),Te=(()=>{let e=class e{constructor(t){this.msg=t,this.chartData=[]}ngOnInit(){for(let t=0;t<20;t+=1)this.chartData.push({time:new Date().getTime()+1e3*60*30*t,y1:Math.floor(Math.random()*100)+1e3,y2:Math.floor(Math.random()*100)+10})}handleClick(t){this.msg.info(`\u5BA2\u6D41\u91CF: ${t.item.y1}, \u652F\u4ED8\u7B14\u6570: ${t.item.y2}`)}};e.\u0275fac=function(n){return new(n||e)(M(T))},e.\u0275cmp=s({type:e,selectors:[["chart-timeline-basic"]],decls:2,vars:4,consts:[[3,"data","titleMap","height","clickItem"]],template:function(n,o){n&1&&(a(0," "),d(1,"g2-timeline",0),C("clickItem",function(f){return o.handleClick(f)}),c()),n&2&&(m(1),r("data",o.chartData)("titleMap",Y(3,un))("height",200))},dependencies:[V],encapsulation:2});let i=e;return i})();function gn(i,e){if(i&1){let $=rt();a(0,`
      `),d(1,"button",0),C("click",function(){let o=nt($).$implicit,p=dt();return at(p.refresh(o))}),a(2),c(),a(3,`
    `)}if(i&2){let $=e.$implicit;m(2),mt("",$," axis")}}var we=(()=>{let e=class e{constructor(){this.chartData=[],this.titleMap={y1:"\u6307\u68071",y2:"\u6307\u68072"},this.maxAxis=2,this.axisList=new Array(5).fill(0).map((t,n)=>n+1),this.refresh()}genData(t){let n={y1:""};for(let p=1;p<=t;p++)n[`y${p}`]=`\u6307\u6807${p}`;let o=[];for(let p=0;p<20;p+=1){let f={time:new Date().getTime()+18e5*p,y1:0};for(let B=1;B<=t;B++)f[`y${B}`]=Math.floor(Math.random()*100)+500*B;o.push(f)}return{titleMap:n,data:o}}refresh(t){this.maxAxis=t??this.maxAxis;let{titleMap:n,data:o}=this.genData(this.maxAxis);this.chartData=o,this.titleMap=n}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["chart-timeline-max-axis"]],decls:8,vars:4,consts:[["nz-button","","nzType","primary",3,"click"],[3,"maxAxis","data","titleMap","height"]],template:function(n,o){n&1&&(a(0,`
    `),d(1,"button",0),C("click",function(){return o.refresh()}),a(2,"Refresh"),c(),a(3,`
    `),J(4,gn,4,1,null,null,Q),l(6,"g2-timeline",1),a(7,`
  `)),n&2&&(Z(4,o.axisList),m(6),r("maxAxis",o.maxAxis)("data",o.chartData)("titleMap",o.titleMap)("height",300))},dependencies:[V,z,D,k],encapsulation:2});let i=e;return i})();var Cn=()=>({y1:"\u5BA2\u6D41\u91CF",y2:"\u652F\u4ED8\u7B14\u6570"}),Ge=(()=>{let e=class e{constructor(t){this.msg=t,this.chartData=[]}ngOnInit(){for(let t=0;t<20;t+=1)this.chartData.push({time:new Date().getTime()+1e3*60*60*24*t,y1:Math.floor(Math.random()*100)+1e3,y2:Math.floor(Math.random()*100)+10})}handleClick(t){this.msg.info(`\u5BA2\u6D41\u91CF: ${t.item.y1}, \u652F\u4ED8\u7B14\u6570: ${t.item.y2}`)}};e.\u0275fac=function(n){return new(n||e)(M(T))},e.\u0275cmp=s({type:e,selectors:[["chart-timeline-mask"]],decls:2,vars:4,consts:[["mask","MM\u6708DD\u65E5","maskSlider","MM\u6708dd\u65E5",3,"data","titleMap","height","clickItem"]],template:function(n,o){n&1&&(a(0," "),d(1,"g2-timeline",0),C("clickItem",function(f){return o.handleClick(f)}),c()),n&2&&(m(1),r("data",o.chartData)("titleMap",Y(3,Cn))("height",200))},dependencies:[V],encapsulation:2});let i=e;return i})();var Se=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"zh-CN":"packages/chart/timeline/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u4F7F\u7528 <code>timeline</code> \u7EC4\u4EF6\u53EF\u4EE5\u5B9E\u73B0\u5E26\u6709\u65F6\u95F4\u8F74\u7684\u67F1\u72B6\u56FE\u5C55\u73B0\uFF0C\u800C\u5176\u4E2D\u7684 <code>x</code> \u5C5E\u6027\uFF0C\u5219\u662F\u65F6\u95F4\u503C\u7684\u6307\u5411\uFF0C\u9ED8\u8BA4\u6700\u591A\u652F\u6301\u540C\u65F6\u5C55\u73B0\u4E24\u4E2A\u6307\u6807\uFF0C\u5206\u522B\u662F <code>y1</code> \u548C <code>y2</code>\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-timeline"><a class="lake-link"><i data-anchor="g2-timeline"></i></a>g2-timeline</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[title]</code></td><td>\u56FE\u8868\u6807\u9898</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[maxAxis]</code></td><td>\u6700\u5927\u6307\u6807\u6570\u91CF</td><td><code>number</code></td><td><code>2</code></td></tr><tr><td><code>[data]</code></td><td>\u6570\u636E\uFF0C\u6CE8\uFF1A\u6839\u636E <code>maxAxis</code> \u503C\u4F20\u9012\u6307\u6807\u6570\u636E</td><td><code>G2TimelineData[]</code></td><td>-</td></tr><tr><td><code>[titleMap]</code></td><td>\u6307\u6807\u522B\u540D</td><td><code>G2TimelineMap</code></td><td>-</td></tr><tr><td><code>[colorMap]</code></td><td>\u989C\u8272</td><td><code>G2TimelineMap</code></td><td><code>{ y1: '#5B8FF9', y2: '#5AD8A6', y3: '#5D7092', y4: '#F6BD16', y5: '#E86452' }</code></td></tr><tr><td><code>[height]</code></td><td>\u9AD8\u5EA6\u503C</td><td><code>number</code></td><td><code>400</code></td></tr><tr><td><code>[padding]</code></td><td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td><td><code>number[]</code></td><td><code>[40, 8, 64, 40]</code></td></tr><tr><td><code>[borderWidth]</code></td><td>\u7EBF\u6761</td><td><code>number</code></td><td><code>2</code></td></tr><tr><td><code>[mask]</code></td><td>\u65E5\u671F\u683C\u5F0F\uFF0C\u4F7F\u7528 <a target="_blank" href="https://g2.antv.vision/zh/docs/manual/tutorial/scale#time" data-url="https://g2.antv.vision/zh/docs/manual/tutorial/scale#time">G2 Mask\u65E5\u671F\u683C\u5F0F</a></td><td><code>string</code></td><td><code>HH:mm</code></td></tr><tr><td><code>[maskSlider]</code></td><td>\u6ED1\u52A8\u6761\u65E5\u671F\u683C\u5F0F\uFF0C\u4F7F\u7528 <a target="_blank" href="https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table" data-url="https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table">date-fns \u65E5\u671F\u683C\u5F0F</a></td><td><code>string</code></td><td><code>HH:mm</code></td></tr><tr><td><code>[position]</code></td><td>\u6807\u9898\u4F4D\u7F6E</td><td><code>'top','right','bottom','left'</code></td><td><code>'top'</code></td></tr><tr><td><code>[slider]</code></td><td>\u662F\u5426\u9700\u8981\u6ED1\u52A8\u6761</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(clickItem)</code></td><td>\u70B9\u51FB\u9879\u56DE\u8C03</td><td><code>EventEmitter&lt;G2TimelineClickItem></code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table><h3 id="G2TimelineData"><a class="lake-link"><i data-anchor="G2TimelineData"></i></a>G2TimelineData</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[time]</code></td><td>\u65E5\u671F\u683C\u5F0F</td><td><code>Date | number</code></td><td>-</td></tr><tr><td><code>[y1]</code></td><td>\u6307\u68071\u6570\u636E</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[y2]</code></td><td>\u6307\u68072\u6570\u636E</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[y3]</code></td><td>\u6307\u68073\u6570\u636E</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[y4]</code></td><td>\u6307\u68074\u6570\u636E</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[y5]</code></td><td>\u6307\u68075\u6570\u636E</td><td><code>number</code></td><td>-</td></tr></tbody></table><h3 id="G2TimelineMap"><a class="lake-link"><i data-anchor="G2TimelineMap"></i></a>G2TimelineMap</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[y1]</code></td><td>\u6307\u68071</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[y2]</code></td><td>\u6307\u68072</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[y3]</code></td><td>\u6307\u68073</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[y4]</code></td><td>\u6307\u68074</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[y5]</code></td><td>\u6307\u68075</td><td><code>string</code></td><td>-</td></tr></tbody></table>`,meta:{title:"g2-timeline",subtitle:"\u6298\u7EBF\u56FE",cols:1,type:"G2",module:"import { G2TimelineModule } from '@delon/chart/timeline';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-timeline",title:"g2-timeline",h:3},{id:"G2TimelineData",title:"G2TimelineData",h:3},{id:"G2TimelineMap",title:"G2TimelineMap",h:3}]}]}},demo:!0},this.codes=[{id:"chart-timeline-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u5E26\u6709\u65F6\u95F4\u8F74\u7684\u56FE\u8868\u3002</p>",code:`import { Component, OnInit } from '@angular/core';
import { G2TimelineClickItem, G2TimelineData } from '@delon/chart/timeline';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-timeline-basic',
  template: \` <g2-timeline
    [data]="chartData"
    [titleMap]="{ y1: '\u5BA2\u6D41\u91CF', y2: '\u652F\u4ED8\u7B14\u6570' }"
    [height]="200"
    (clickItem)="handleClick($event)"
  ></g2-timeline>\`,
})
export class ChartTimelineBasicComponent implements OnInit {
  chartData: G2TimelineData[] = [];

  constructor(private msg: NzMessageService) {}

  ngOnInit(): void {
    for (let i = 0; i < 20; i += 1) {
      this.chartData.push({
        time: new Date().getTime() + 1000 * 60 * 30 * i,
        y1: Math.floor(Math.random() * 100) + 1000,
        y2: Math.floor(Math.random() * 100) + 10,
      });
    }
  }

  handleClick(data: G2TimelineClickItem): void {
    this.msg.info(\`\u5BA2\u6D41\u91CF: \${data.item.y1}, \u652F\u4ED8\u7B14\u6570: \${data.item.y2}\`);
  }
}`,lang:"ts",componentName:"ChartTimelineBasicComponent",point:0,name:"basic",urls:"packages/chart/timeline/demo/basic.md",type:"demo"},{id:"chart-timeline-max-axis",meta:{order:1,title:{"zh-CN":"\u591A\u6307\u6807","en-US":"Multiple indicators"}},summary:"<p>\u5229\u7528 <code>maxAxis</code> \u5C5E\u6027\u6765\u8C03\u6574\u591A\u4E2A\u6307\u6807\uFF0C\u6700\u591A\u652F\u6301 <code>5</code> \u4E2A\u6307\u6807\u503C\u3002</p>",code:`import { Component } from '@angular/core';

import { G2TimelineData, G2TimelineMap } from '@delon/chart/timeline';

@Component({
  selector: 'chart-timeline-max-axis',
  template: \`
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    @for (i of axisList; track $index) {
      <button nz-button (click)="refresh(i)" nzType="primary">{{ i }} axis</button>
    }
    <g2-timeline [maxAxis]="maxAxis" [data]="chartData" [titleMap]="titleMap" [height]="300" />
  \`
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
}`,lang:"ts",componentName:"ChartTimelineMaxAxisComponent",point:1,name:"max-axis",urls:"packages/chart/timeline/demo/max-axis.md",type:"demo"},{id:"chart-timeline-mask",meta:{order:2,title:{"zh-CN":"\u65F6\u95F4\u683C\u5F0F\u5316","en-US":"Time mask format"}},summary:"<p>\u5229\u7528 <code>mask</code> \u548C <code>maskSlider</code> \u6765\u6539\u53D8\u65F6\u95F4\u683C\u5F0F\u3002</p>",code:`import { Component, OnInit } from '@angular/core';
import { G2TimelineClickItem, G2TimelineData } from '@delon/chart/timeline';
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
  ></g2-timeline>\`,
})
export class ChartTimelineMaskComponent implements OnInit {
  chartData: G2TimelineData[] = [];

  constructor(private msg: NzMessageService) {}

  ngOnInit(): void {
    for (let i = 0; i < 20; i += 1) {
      this.chartData.push({
        time: new Date().getTime() + 1000 * 60 * 60 * 24 * i,
        y1: Math.floor(Math.random() * 100) + 1000,
        y2: Math.floor(Math.random() * 100) + 10,
      });
    }
  }

  handleClick(data: G2TimelineClickItem): void {
    this.msg.info(\`\u5BA2\u6D41\u91CF: \${data.item.y1}, \u652F\u4ED8\u7B14\u6570: \${data.item.y2}\`);
  }
}`,lang:"ts",componentName:"ChartTimelineMaskComponent",point:2,name:"mask",urls:"packages/chart/timeline/demo/mask.md",type:"demo"}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["app-chart-timeline"]],hostVars:2,hostBindings:function(n,o){n&2&&g("d-block","true")},decls:19,vars:9,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(n,o){n&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),a(3,`
        `),d(4,"code-box",3),a(5,`
          `),l(6,"chart-timeline-basic"),a(7,`
        `),c(),a(8,`
      
        `),d(9,"code-box",3),a(10,`
          `),l(11,"chart-timeline-max-axis"),a(12,`
        `),c(),a(13,`
      
        `),d(14,"code-box",3),a(15,`
          `),l(16,"chart-timeline-mask"),a(17,`
        `),c(),a(18,`
      `),c()()()),n&2&&(r("codes",o.codes)("item",o.item),m(1),r("nzGutter",16),m(3),r("item",o.codes[0]),u("id",o.codes[0].id),m(5),r("item",o.codes[1]),u("id",o.codes[1].id),m(5),r("item",o.codes[2]),u("id",o.codes[2].id))},dependencies:[y,b,v,x,Te,we,Ge],encapsulation:2});let i=e;return i})();var Be=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["chart-trend-basic"]],decls:7,vars:0,consts:[["flag","up"],["flag","down",1,"ml-sm"]],template:function(n,o){n&1&&(a(0,`
    `),d(1,"trend",0),a(2,"12%"),c(),a(3,`
    `),d(4,"trend",1),a(5,"11%"),c(),a(6,`
  `))},dependencies:[q],encapsulation:2});let i=e;return i})();var Ee=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["chart-trend-reverse"]],decls:7,vars:0,consts:[["flag","up","reverseColor",""],["flag","down","reverseColor","",1,"ml-sm"]],template:function(n,o){n&1&&(a(0,`
    `),d(1,"trend",0),a(2,"12%"),c(),a(3,`
    `),d(4,"trend",1),a(5,"11%"),c(),a(6,`
  `))},dependencies:[q],encapsulation:2});let i=e;return i})();var Ie=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"zh-CN":"packages/chart/trend/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u8D8B\u52BF\u7B26\u53F7\uFF0C\u6807\u8BB0\u4E0A\u5347\u548C\u4E0B\u964D\u8D8B\u52BF\u3002\u901A\u5E38\u7528\u7EFF\u8272\u4EE3\u8868\u201C\u597D\u201D\uFF0C\u7EA2\u8272\u4EE3\u8868\u201C\u4E0D\u597D\u201D\uFF0C\u80A1\u7968\u6DA8\u8DCC\u573A\u666F\u9664\u5916\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="trend"><a class="lake-link"><i data-anchor="trend"></i></a>trend</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[colorful]</code></td><td>\u662F\u5426\u5F69\u8272\u6807\u8BB0</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[flag]</code></td><td>\u4E0A\u5347\u4E0B\u964D\u6807\u8BC6</td><td><code>'up','down'</code></td><td>-</td></tr><tr><td><code>[reverseColor]</code></td><td>\u989C\u8272\u53CD\u8F6C</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>`,meta:{type:"G2",title:"trend",subtitle:"\u8D8B\u52BF\u6807\u8BB0",cols:1,module:"import { TrendModule } from '@delon/chart/trend';"},toc:[{id:"API",title:"API",h:2,children:[{id:"trend",title:"trend",h:3}]}]}},demo:!0},this.codes=[{id:"chart-trend-basic",meta:{order:0,title:"\u6F14\u793A"},summary:"<p>\u5728\u6570\u503C\u80CC\u540E\u6DFB\u52A0\u4E00\u4E2A\u5C0F\u56FE\u6807\u6765\u6807\u8BC6\u6DA8\u8DCC\u60C5\u51B5\u3002</p>",code:`import { Component } from '@angular/core';

@Component({
  selector: 'chart-trend-basic',
  template: \`
    <trend flag="up">12%</trend>
    <trend flag="down" class="ml-sm">11%</trend>
  \`,
})
export class ChartTrendBasicComponent {}`,lang:"ts",componentName:"ChartTrendBasicComponent",point:0,name:"basic",urls:"packages/chart/trend/demo/basic.md",type:"demo"},{id:"chart-trend-reverse",meta:{order:1,title:"\u989C\u8272\u53CD\u8F6C"},summary:"<p>\u5728\u6570\u503C\u80CC\u540E\u6DFB\u52A0\u4E00\u4E2A\u5C0F\u56FE\u6807\u6765\u6807\u8BC6\u6DA8\u8DCC\u60C5\u51B5\u3002</p>",code:`import { Component } from '@angular/core';

@Component({
  selector: 'chart-trend-reverse',
  template: \`
    <trend flag="up" reverseColor>12%</trend>
    <trend flag="down" reverseColor class="ml-sm">11%</trend>
  \`,
})
export class ChartTrendReverseComponent {}`,lang:"ts",componentName:"ChartTrendReverseComponent",point:1,name:"reverse",urls:"packages/chart/trend/demo/reverse.md",type:"demo"}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["app-chart-trend"]],hostVars:2,hostBindings:function(n,o){n&2&&g("d-block","true")},decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(n,o){n&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),a(3,`
        `),d(4,"code-box",3),a(5,`
          `),l(6,"chart-trend-basic"),a(7,`
        `),c(),a(8,`
      
        `),d(9,"code-box",3),a(10,`
          `),l(11,"chart-trend-reverse"),a(12,`
        `),c(),a(13,`
      `),c()()()),n&2&&(r("codes",o.codes)("item",o.item),m(1),r("nzGutter",16),m(3),r("item",o.codes[0]),u("id",o.codes[0].id),m(5),r("item",o.codes[1]),u("id",o.codes[1].id))},dependencies:[y,b,v,x,Be,Ee],encapsulation:2});let i=e;return i})();var Ne=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["chart-water-wave-basic"]],hostVars:2,hostBindings:function(n,o){n&2&&g("d-block",!0)},decls:3,vars:3,consts:[[3,"title","percent","height"]],template:function(n,o){n&1&&(a(0,`
    `),l(1,"g2-water-wave",0),a(2,`
  `)),n&2&&(m(1),r("title","\u8865\u8D34\u8D44\u91D1\u5269\u4F59")("percent",34)("height",161))},dependencies:[It],encapsulation:2});let i=e;return i})();var Ae=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"zh-CN":"packages/chart/water-wave/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u6C34\u6CE2\u56FE\u662F\u4E00\u79CD\u6BD4\u4F8B\u7684\u5C55\u793A\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u66F4\u76F4\u89C2\u7684\u5C55\u793A\u5173\u952E\u503C\u7684\u5360\u6BD4\u3002</p><blockquote><p>\u9ED8\u8BA4\u4E0D\u652F\u6301\u7236\u5143\u7D20\u81EA\u9002\u5E94\uFF0C\u53EF\u4EE5\u76D1\u542C\u7236\u5143\u7D20\u7684\u53D8\u5316\u5E76\u4F7F\u7528 <code>render()</code> \u65B9\u6CD5\u6765\u91CD\u7F6E\u6E32\u67D3\u3002</p></blockquote></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-water-wave"><a class="lake-link"><i data-anchor="g2-water-wave"></i></a>g2-water-wave</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[animate]</code></td><td>\u662F\u5426\u663E\u793A\u52A8\u753B</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[title]</code></td><td>\u56FE\u8868\u6807\u9898</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td><code>160</code></td></tr><tr><td><code>[color]</code></td><td>\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>#1890FF</code></td></tr><tr><td><code>[percent]</code></td><td>\u8FDB\u5EA6\u6BD4\u4F8B</td><td><code>number</code></td><td>-</td></tr></tbody></table>',meta:{title:"g2-water-wave",subtitle:"\u6C34\u6CE2\u56FE",cols:1,type:"G2",module:"import { G2WaterWaveModule } from '@delon/chart/water-wave';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-water-wave",title:"g2-water-wave",h:3}]}]}},demo:!0},this.codes=[{id:"chart-water-wave-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Component } from '@angular/core';

@Component({
  selector: 'chart-water-wave-basic',
  template: \`
    <g2-water-wave [title]="'\u8865\u8D34\u8D44\u91D1\u5269\u4F59'" [percent]="34" [height]="161"></g2-water-wave>
  \`,
  host: {
    '[class.d-block]': 'true'
  }
})
export class ChartWaterWaveBasicComponent {}`,lang:"ts",componentName:"ChartWaterWaveBasicComponent",point:0,name:"basic",urls:"packages/chart/water-wave/demo/basic.md",type:"demo"}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["app-chart-water-wave"]],hostVars:2,hostBindings:function(n,o){n&2&&g("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(n,o){n&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),a(3,`
        `),d(4,"code-box",3),a(5,`
          `),l(6,"chart-water-wave-basic"),a(7,`
        `),c(),a(8,`
      `),c()()()),n&2&&(r("codes",o.codes)("item",o.item),m(1),r("nzGutter",16),m(3),r("item",o.codes[0]),u("id",o.codes[0].id))},dependencies:[y,b,v,x,Ne],encapsulation:2});let i=e;return i})();var Mn=[{path:"",component:kt,children:[{path:"",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"faq",redirectTo:"faq/zh",pathMatch:"full"},{path:"faq/:lang",component:At},{path:"getting-started",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"getting-started/:lang",component:Pt},{path:"bar",redirectTo:"bar/zh",pathMatch:"full"},{path:"bar/:lang",component:_t},{path:"card",redirectTo:"card/zh",pathMatch:"full"},{path:"card/:lang",component:Wt},{path:"chart-echarts",redirectTo:"chart-echarts/zh",pathMatch:"full"},{path:"chart-echarts/:lang",component:Qt},{path:"custom",redirectTo:"custom/zh",pathMatch:"full"},{path:"custom/:lang",component:Zt},{path:"gauge",redirectTo:"gauge/zh",pathMatch:"full"},{path:"gauge/:lang",component:Kt},{path:"mini-area",redirectTo:"mini-area/zh",pathMatch:"full"},{path:"mini-area/:lang",component:ae},{path:"mini-bar",redirectTo:"mini-bar/zh",pathMatch:"full"},{path:"mini-bar/:lang",component:ce},{path:"mini-progress",redirectTo:"mini-progress/zh",pathMatch:"full"},{path:"mini-progress/:lang",component:se},{path:"number-info",redirectTo:"number-info/zh",pathMatch:"full"},{path:"number-info/:lang",component:fe},{path:"pie",redirectTo:"pie/zh",pathMatch:"full"},{path:"pie/:lang",component:Ce},{path:"radar",redirectTo:"radar/zh",pathMatch:"full"},{path:"radar/:lang",component:ye},{path:"single-bar",redirectTo:"single-bar/zh",pathMatch:"full"},{path:"single-bar/:lang",component:De},{path:"tag-cloud",redirectTo:"tag-cloud/zh",pathMatch:"full"},{path:"tag-cloud/:lang",component:ke},{path:"timeline",redirectTo:"timeline/zh",pathMatch:"full"},{path:"timeline/:lang",component:Se},{path:"trend",redirectTo:"trend/zh",pathMatch:"full"},{path:"trend/:lang",component:Ie},{path:"water-wave",redirectTo:"water-wave/zh",pathMatch:"full"},{path:"water-wave/:lang",component:Ae}]}],Ta=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=et({type:e}),e.\u0275inj=tt({imports:[Nt,ht.forChild(Mn)]});let i=e;return i})();export{Ta as ChartModule};
