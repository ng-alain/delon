import{a as et,b as Ce,c as Co,d as vo}from"./chunk-NLW2BGPO.js";import{a as po,b as ho}from"./chunk-JNBWG3V5.js";import{a as ve,b as ye}from"./chunk-RH3URI2E.js";import{e as oo,h as ao,j as io,l as ro,m as co,n as lo,p as mo}from"./chunk-Z6UP6IOK.js";import{a as eo,b as no}from"./chunk-2SZKEF6B.js";import{g as uo,h as fo}from"./chunk-E6YOA5N4.js";import"./chunk-2KNSIAM2.js";import{a as ct,b as lt}from"./chunk-ZWD35SLT.js";import{a as I}from"./chunk-7QA3F3GJ.js";import"./chunk-2VDJBXEI.js";import{a as D}from"./chunk-JPWNPE6P.js";import{a as go}from"./chunk-CGAB5OA4.js";import"./chunk-KOCWNXQY.js";import"./chunk-VSDGNSIH.js";import"./chunk-I55ZQDZC.js";import{c as k,d as G,e as so}from"./chunk-FGVAJJ3X.js";import{F as Bt,H as Et,I as Xn,J as to,da as tt,f as Jn,l as Yn,u as Kn}from"./chunk-7BM3L5ZS.js";import{$a as P,Aa as Z,Ba as On,Bb as kt,C as Ut,Db as M,Eg as J,Fb as x,Fg as Y,Ga as Qt,Gb as Jt,Gc as St,H as Fn,Hb as Yt,Hc as H,Hg as K,Ic as b,Ig as X,Jb as he,Kb as ue,Kh as qn,L as qt,La as i,Lb as fe,Lh as Zn,Pb as Gt,Ph as Qn,Qb as ot,Rb as g,Rd as ge,Sa as Wn,Sb as it,Ta as Ct,Tb as jn,Tg as at,Ub as n,V as Rn,Va as l,Vb as L,Vc as A,Wa as E,Wb as Nt,Yb as $n,Zb as Hn,_a as Q,_b as Ln,a as Mt,b as Pn,ca as B,dc as ie,fa as O,fb as v,ic as Kt,jc as mt,ka as ft,kb as _,kc as Vn,la as gt,lc as Un,mb as S,nb as Dt,pb as Tt,qb as zt,ra as nt,rb as c,sa as pe,sb as r,sc as _t,tb as d,ub as m,wg as It,xg as wt,yb as U,yg as rt,za as Zt,zb as q,zg as dt}from"./chunk-HYQTCAQ6.js";var be=class a{item={cols:1,urls:{"en-US":"packages/chart/docs/faq.en-US.md","zh-CN":"packages/chart/docs/faq.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><h2 id="Howtoauto-resizeofthecontainer"><a class="lake-link"><i data-anchor="Howtoauto-resizeofthecontainer"></i></a>Howtoauto-resizeofthecontainer</h2><p>The G2 uses <code>window.addEventListener('resize', this.onResize)</code> to detect a change in parent dom element's size. So you need to manually monitor the change in the size of the container and call <code>chart.forceFit()</code> to force resize.</p></section><example-resizable-index></example-resizable-index><section class="markdown"></section>`,meta:{order:100,title:"FAQ",type:"Documents"},toc:[{id:"Howtoauto-resizeofthecontainer",title:"How to auto-resize of the container?",h:2}]},"zh-CN":{content:'<section class="markdown"><h2 id="\u5982\u4F55\u81EA\u9002\u5E94\u5BB9\u5668\u5BBD\u9AD8\uFF1F"><a class="lake-link"><i data-anchor="\u5982\u4F55\u81EA\u9002\u5E94\u5BB9\u5668\u5BBD\u9AD8\uFF1F"></i></a>\u5982\u4F55\u81EA\u9002\u5E94\u5BB9\u5668\u5BBD\u9AD8\uFF1F</h2><p>G2 \u5F53\u524D\u7248\u672C\u5E76\u4E0D\u4F1A\u6839\u636E\u5BB9\u5668\u5BBD\u9AD8\u81EA\u9002\u5E94\uFF0C\u76EE\u524D\u53EA\u4F1A\u6839\u636E\u6D4F\u89C8\u5668\u7A97\u4F53\u5927\u5C0F\u624D\u4F1A\u91CD\u65B0\u53D8\u66F4\u56FE\u8868\u5C3A\u5BF8\uFF0C\u56E0\u6B64\u9700\u8981\u624B\u52A8\u76D1\u542C\u5BB9\u5668\u5927\u5C0F\u7684\u53D8\u5316\u5E76\u8C03\u7528 <code>chart.forceFit()</code> \u91CD\u65B0\u6E32\u67D3\u56FE\u8868\u5C3A\u5BF8\u3002</p></section><example-resizable-index></example-resizable-index><section class="markdown"></section>',meta:{order:100,title:"\u5E38\u89C1\u95EE\u9898",type:"Documents"},toc:[{id:"\u5982\u4F55\u81EA\u9002\u5E94\u5BB9\u5668\u5BBD\u9AD8\uFF1F",title:"\u5982\u4F55\u81EA\u9002\u5E94\u5BB9\u5668\u5BBD\u9AD8\uFF1F",h:2}]}},demo:!1};codes=[];static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["app-chart-faq"]],hostVars:2,hostBindings:function(e,o){e&2&&g("d-block","true")},decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,o){e&1&&m(0,"app-docs",0),e&2&&c("codes",o.codes)("item",o.item)},dependencies:[D],encapsulation:2})};var xe=class a{item={cols:1,urls:{"en-US":"packages/chart/docs/getting-started.en-US.md","zh-CN":"packages/chart/docs/getting-started.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>Chart provides the well-designed abstract chart components based on the <a target="_blank" href="https://antv.alipay.com/zh-cn/g2/3.x/index.html" data-url="https://antv.alipay.com/zh-cn/g2/3.x/index.html">G2</a>. These components provide the ability to use with complex mixed view or just use along for common business usage.</p><h2 id="Usage"><a class="lake-link"><i data-anchor="Usage"></i></a>Usage</h2><h3 id="G2classlibraryloading"><a class="lake-link"><i data-anchor="G2classlibraryloading"></i></a>G2classlibraryloading</h3><p>By default, the class library CDN address has been specified in <a href="/docs/global-config" data-url="/docs/global-config">Global Configuration</a>:</p><pre class="hljs language-ts"><code>// global-config.module.ts
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
}</code></pre></section>`,meta:{order:1,title:"\u5F00\u59CB\u4F7F\u7528",type:"Documents"},toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528",h:2,children:[{id:"G2\u7C7B\u5E93\u52A0\u8F7D",title:"G2\u7C7B\u5E93\u52A0\u8F7D",h:3},{id:"\u5BFC\u5165\u6A21\u5757",title:"\u5BFC\u5165\u6A21\u5757",h:3}]},{id:"\u81EA\u5B9A\u4E49G2\u7EC4\u4EF6",title:"\u81EA\u5B9A\u4E49 G2 \u7EC4\u4EF6",h:2},{id:"\u914D\u7F6E\u56FE\u8868\u4E3B\u9898",title:"\u914D\u7F6E\u56FE\u8868\u4E3B\u9898",h:2}]}},demo:!1};codes=[];static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["app-chart-getting-started"]],hostVars:2,hostBindings:function(e,o){e&2&&g("d-block","true")},decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,o){e&1&&m(0,"app-docs",0),e&2&&c("codes",o.codes)("item",o.item)},dependencies:[D],encapsulation:2})};var Me=class a{msg=O(tt);salesData=this.genData();genData(){return new Array(12).fill({}).map((t,e)=>({x:`${e+1}\u6708`,y:Math.floor(Math.random()*1e3)+200,color:e>5?"#f50":void 0}))}refresh(){this.salesData=this.genData()}handleClick(t){this.msg.info(`${t.item.x} - ${t.item.y}`)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["chart-bar-basic"]],decls:6,vars:2,consts:[["nz-button","","nzType","primary",3,"click"],["height","200",3,"clickItem","title","data"]],template:function(e,o){e&1&&(n(0,`
    `),r(1,"button",0),M("click",function(){return o.refresh()}),n(2,"Refresh"),d(),n(3,`
    `),r(4,"g2-bar",1),M("clickItem",function(p){return o.handleClick(p)}),d(),n(5,`
  `)),e&2&&(i(4),c("title","\u9500\u552E\u989D\u8D8B\u52BF")("data",o.salesData))},dependencies:[X,K,J,Y,vo,Co],encapsulation:2})};var De=class a{item={cols:1,urls:{"zh-CN":"packages/chart/bar/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u4F7F\u7528\u5782\u76F4\u7684\u67F1\u5B50\u663E\u793A\u7C7B\u522B\u4E4B\u95F4\u7684\u6570\u503C\u6BD4\u8F83\u3002\u5176\u4E2D\u4E00\u4E2A\u8F74\u8868\u793A\u9700\u8981\u5BF9\u6BD4\u7684\u5206\u7C7B\u7EF4\u5EA6\uFF0C\u53E6\u4E00\u4E2A\u8F74\u4EE3\u8868\u76F8\u5E94\u7684\u6570\u503C\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-bar"><a class="lake-link"><i data-anchor="g2-bar"></i></a>g2-bar</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[title]</code></td><td>\u56FE\u8868\u6807\u9898</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[color]</code></td><td>\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>rgba(24, 144, 255, 0.85)</code></td></tr><tr><td><code>[padding]</code></td><td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td><td><code>Array&lt;number | string> | string</code></td><td><code>[32, 0, 32, 40]</code></td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[data]</code></td><td>\u6570\u636E</td><td><code>G2BarData[]</code></td><td><code>[]</code></td></tr><tr><td><code>[autoLabel]</code></td><td>\u5728\u5BBD\u5EA6\u4E0D\u8DB3\u65F6\uFF0C\u81EA\u52A8\u9690\u85CF x \u8F74\u7684 label</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[interaction]</code></td><td>\u4EA4\u4E92\u7C7B\u578B\uFF0Cnone \u65E0 element-active \u56FE\u5F62\u5143\u7D20\uFF0Cactive-region \u56FE\u8868\u7EC4\u4EF6\uFF0Cbrush \u6846\u9009\uFF0Cdrag-move \u79FB\u52A8</td><td><code>InteractionType</code></td><td><code>none</code></td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(clickItem)</code></td><td>\u70B9\u51FB\u9879\u56DE\u8C03</td><td><code>EventEmitter&lt;G2BarClickItem></code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table><h3 id="G2BarData"><a class="lake-link"><i data-anchor="G2BarData"></i></a>G2BarData</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[x]</code></td><td>x\u8F74</td><td><code>any</code></td><td>-</td></tr><tr><td><code>[y]</code></td><td>y\u8F74</td><td><code>any</code></td><td>-</td></tr><tr><td><code>[color]</code></td><td>\u8F74\u989C\u8272</td><td><code>string</code></td><td>-</td></tr></tbody></table>',meta:{title:"g2-bar",subtitle:"\u67F1\u72B6\u56FE",cols:1,type:"G2",module:"import { G2BarModule } from '@delon/chart/bar';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-bar",title:"g2-bar",h:3},{id:"G2BarData",title:"G2BarData",h:3}]}]}},demo:!0};codes=[{id:"chart-bar-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"}},summary:"<p>\u901A\u8FC7\u8BBE\u7F6E <code>x</code>\uFF0C<code>y</code> \u5C5E\u6027\uFF0C\u53EF\u4EE5\u5FEB\u901F\u7684\u6784\u5EFA\u51FA\u4E00\u4E2A\u6F02\u4EAE\u7684\u67F1\u72B6\u56FE\uFF0C\u5404\u79CD\u7EAC\u5EA6\u7684\u5173\u7CFB\u5219\u662F\u901A\u8FC7\u81EA\u5B9A\u4E49\u7684\u6570\u636E\u5C55\u73B0\u3002</p>",code:`import { Component, inject } from '@angular/core';

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
}`,lang:"ts",componentName:"ChartBarBasicComponent",point:0,name:"basic",urls:"packages/chart/bar/demo/basic.md",type:"demo"}];static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["app-chart-bar"]],hostVars:2,hostBindings:function(e,o){e&2&&g("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,o){e&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),n(3,`
        `),r(4,"code-box",3),n(5,`
          `),m(6,"chart-bar-basic"),n(7,`
        `),d(),n(8,`
      `),d()()()),e&2&&(c("codes",o.codes)("item",o.item),i(),c("nzGutter",16),i(3),c("item",o.codes[0]),v("id",o.codes[0].id))},dependencies:[D,Me,G,k,I],encapsulation:2})};var ko=["*"],Go=()=>({padding:"20px 24px 8px 24px"});function No(a,t){if(a&1&&(U(0),n(1),q()),a&2){let e=x();i(),L(e.avatar)}}function _o(a,t){if(a&1&&(U(0),n(1),q()),a&2){let e=x(2);i(),L(e.title)}}function So(a,t){if(a&1&&(n(0,`
            `),r(1,"span",8),n(2,`
              `),P(3,_o,2,1,"ng-container",4),n(4,`
            `),d(),n(5,`
          `)),a&2){let e=x();i(3),c("nzStringTemplateOutlet",e.title)}}function Io(a,t){if(a&1&&(U(0),n(1),q()),a&2){let e=x(2);i(),L(e.action)}}function wo(a,t){if(a&1&&(n(0,`
            `),r(1,"span",9),n(2,`
              `),P(3,Io,2,1,"ng-container",4),n(4,`
            `),d(),n(5,`
          `)),a&2){let e=x();i(3),c("nzStringTemplateOutlet",e.action)}}function Bo(a,t){if(a&1&&(n(0,`
          `),m(1,"p",10),n(2,`
        `)),a&2){let e=x();i(),c("innerHTML",e.total,Qt)}}function Eo(a,t){if(a&1&&(U(0),n(1),q()),a&2){let e=x(2);i(),L(e.footer)}}function Ao(a,t){if(a&1&&(n(0,`
      `),r(1,"div",11),n(2,`
        `),P(3,Eo,2,1,"ng-container",4),n(4,`
      `),d(),n(5,`
    `)),a&2){let e=x();i(3),c("nzStringTemplateOutlet",e.footer)}}var st=class a{cdr=O(St);bordered=!1;avatar;title;action;total="";_height="auto";_orgHeight;set contentHeight(t){this._orgHeight=t,this._height=typeof t=="number"?this._height=`${t}px`:t}footer;loading=!1;ngOnChanges(){this.cdr.detectChanges()}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["g2-card"]],hostVars:2,hostBindings:function(e,o){e&2&&g("g2-card",!0)},inputs:{bordered:[2,"bordered","bordered",H],avatar:"avatar",title:"title",action:"action",total:"total",contentHeight:"contentHeight",footer:"footer",loading:[2,"loading","loading",H]},exportAs:["g2Card"],features:[Zt],ngContentSelectors:ko,decls:32,vars:13,consts:[[3,"nzBodyStyle","nzBordered"],[3,"nzSpinning"],[1,"g2-card__top"],[1,"g2-card__avatar"],[4,"nzStringTemplateOutlet"],[1,"g2-card__meta-wrap"],[1,"g2-card__meta"],[1,"g2-card__desc"],[1,"g2-card__meta-title"],[1,"g2-card__meta-action"],[1,"g2-card__total",3,"innerHTML"],[1,"g2-card__footer"]],template:function(e,o){e&1&&(Jt(),r(0,"nz-card",0),n(1,`
  `),r(2,"nz-spin",1),n(3,`
    `),r(4,"div",2),n(5,`
      `),r(6,"div",3),n(7,`
        `),P(8,No,2,1,"ng-container",4),n(9,`
      `),d(),n(10,`
      `),r(11,"div",5),n(12,`
        `),r(13,"div",6),n(14,`
          `),_(15,So,6,1),_(16,wo,6,1),d(),n(17,`
        `),_(18,Bo,3,1),d(),n(19,`
    `),d(),n(20,`
    `),r(21,"div",7),n(22,`
      `),r(23,"div"),n(24,`
        `),Yt(25),n(26,`
      `),d(),n(27,`
    `),d(),n(28,`
    `),_(29,Ao,6,1),d(),n(30,`
`),d(),n(31,`
`)),e&2&&(c("nzBodyStyle",Kt(12,Go))("nzBordered",o.bordered),i(2),c("nzSpinning",o.loading),i(6),c("nzStringTemplateOutlet",o.avatar),i(7),S(o.title?15:-1),i(),S(o.action?16:-1),i(2),S(o.total?18:-1),i(3),ot("height",o._height),i(2),g("g2-card__fixed",!!o._orgHeight),i(6),S(o.footer?29:-1))},dependencies:[po,eo,rt],encapsulation:2,changeDetection:0})};var Po=[st],Rt=class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=E({type:a});static \u0275inj=B({imports:[A,ho,no,dt,Po]})};var Fo=["*"];function Ro(a,t){if(a&1&&(n(0,`
      `),r(1,"span"),m(2,"nz-icon",0),d(),n(3,`
    `)),a&2){let e=x();i(),jn(ie("trend__",e.flag)),i(),c("nzType",ie("caret-",e.flag))}}var vt=class a{flag;colorful=!0;reverseColor=!1;static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["trend"]],hostVars:7,hostBindings:function(e,o){e&2&&(v("data-flag",o.flag),g("trend",!0)("trend__grey",!o.colorful)("trend__reverse",o.colorful&&o.reverseColor))},inputs:{flag:"flag",colorful:[2,"colorful","colorful",H],reverseColor:[2,"reverseColor","reverseColor",H]},exportAs:["trend"],ngContentSelectors:Fo,decls:4,vars:1,consts:[[3,"nzType"]],template:function(e,o){e&1&&(Jt(),n(0,`
    `),Yt(1),n(2,`
    `),_(3,Ro,4,5)),e&2&&(i(3),S(o.flag?3:-1))},dependencies:[It],encapsulation:2,changeDetection:0})};var Ot=class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=E({type:a});static \u0275inj=B({imports:[A,wt]})};function Oo(a,t){a&1&&(n(0,`
        `),m(1,"nz-icon",4),n(2,`
      `))}var Te=class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["chart-card-style1"]],decls:13,vars:4,consts:[["action",""],["footer","\u65E5\u8BBF\u95EE\u91CF 12,423","contentHeight","46",3,"title","bordered","total","action"],["flag","up",2,"margin","0 16px 0 8px","color","rgba(0,0,0,.85)"],["flag","down",2,"margin","0 0 0 8px","color","rgba(0,0,0,.85)"],["nz-tooltip","","nzTooltipTitle","\u6307\u6807\u8BF4\u660E","nzType","info-circle"]],template:function(e,o){if(e&1&&(n(0,`
    `),r(1,"g2-card",1),n(2,`
      `),P(3,Oo,3,0,"ng-template",null,0,_t),n(5,`
      \u5468\u540C\u6BD4
      `),r(6,"trend",2),n(7,"12%"),d(),n(8,`
      \u65E5\u73AF\u6BD4
      `),r(9,"trend",3),n(10,"11%"),d(),n(11,`
    `),d(),n(12,`
  `)),e&2){let s=Gt(4);i(),c("title","\u9500\u552E\u989D")("bordered",!0)("total","\xA5 126,560.00")("action",s)}},dependencies:[Rt,st,Et,Bt,Ot,vt],encapsulation:2})};function jo(a,t){a&1&&m(0,"img",3)}function $o(a,t){a&1&&(n(0,`
        `),m(1,"nz-icon",4),n(2,`
      `))}var ze=class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["chart-card-style2"]],decls:10,vars:5,consts:[["avatar",""],["action",""],["footer","\u65E5\u8BBF\u95EE\u91CF 12,423",3,"title","bordered","total","avatar","action"],["src","./assets/img/logo-color.svg",2,"width","56px","height","56px"],["nz-tooltip","","nzTooltipTitle","\u6307\u6807\u8BF4\u660E","nzType","info-circle"]],template:function(e,o){if(e&1&&(n(0,`
    `),r(1,"g2-card",2),n(2,`
      `),P(3,jo,1,0,"ng-template",null,0,_t),n(5,`
      `),P(6,$o,3,0,"ng-template",null,1,_t),n(8,`
    `),d(),n(9,`
  `)),e&2){let s=Gt(4),p=Gt(7);i(),c("title","\u79FB\u52A8\u6307\u6807")("bordered",!0)("total","\xA5 126,560.00")("avatar",s)("action",p)}},dependencies:[Rt,st,Et,Bt,wt,It],encapsulation:2})};function Ho(a,t){a&1&&m(0,"img",3)}function Lo(a,t){a&1&&(n(0,`
        `),m(1,"nz-icon",4),n(2,`
      `))}var ke=class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["chart-card-style3"]],decls:10,vars:5,consts:[["avatar",""],["action",""],[3,"title","bordered","total","avatar","action"],["src","./assets/img/logo-color.svg",2,"width","56px","height","56px"],["nz-tooltip","","nzTooltipTitle","\u6307\u6807\u8BF4\u660E","nzType","info-circle"]],template:function(e,o){if(e&1&&(n(0,`
    `),r(1,"g2-card",2),n(2,`
      `),P(3,Ho,1,0,"ng-template",null,0,_t),n(5,`
      `),P(6,Lo,3,0,"ng-template",null,1,_t),n(8,`
    `),d(),n(9,`
  `)),e&2){let s=Gt(4),p=Gt(7);i(),c("title","\u79FB\u52A8\u6307\u6807")("bordered",!0)("total","\xA5 126,560.00")("avatar",s)("action",p)}},dependencies:[Rt,st,Et,Bt,wt,It],encapsulation:2})};var Ge=class a{item={cols:2,urls:{"zh-CN":"packages/chart/card/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u56FE\u8868\u5361\u7247\uFF0C\u7528\u4E8E\u5C55\u793A\u56FE\u8868\u7684\u5361\u7247\u5BB9\u5668\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u7684\u914D\u5408\u5176\u5B83\u56FE\u8868\u5957\u4EF6\u5C55\u793A\u4E30\u5BCC\u4FE1\u606F\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-card"><a class="lake-link"><i data-anchor="g2-card"></i></a>g2-card</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>\u5361\u7247\u6807\u9898</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[avatar]</code></td><td>\u5934\u50CF</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[action]</code></td><td>\u5361\u7247\u64CD\u4F5C</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[total]</code></td><td>\u6570\u636E\u603B\u91CF\uFF08\u652F\u6301HTML\uFF09</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[footer]</code></td><td>\u5361\u7247\u5E95\u90E8</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[contentHeight]</code></td><td>\u5185\u5BB9\u533A\u57DF\u9AD8\u5EA6\uFF08\u5355\u4F4D\uFF1A<code>px</code>\uFF09</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[bordered]</code></td><td>\u662F\u5426\u663E\u793A\u8FB9\u6846</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>',meta:{title:"g2-card",subtitle:"\u56FE\u8868\u5361\u7247",cols:2,type:"G2",module:"import { G2CardModule } from '@delon/chart/card';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-card",title:"g2-card",h:3}]}]}},demo:!0};codes=[{id:"chart-card-style1",meta:{order:0,title:{"zh-CN":"\u98CE\u683C\u4E00","en-US":"Style 1"}},summary:"<p>\u98CE\u683C\u4E00\u7528\u6CD5\u3002</p>",code:`import { Component } from '@angular/core';

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
export class ChartCardStyle3Component {}`,lang:"ts",componentName:"ChartCardStyle3Component",point:2,name:"style3",urls:"packages/chart/card/demo/style3.md",type:"demo"}];static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["app-chart-card"]],hostVars:2,hostBindings:function(e,o){e&2&&g("d-block","true")},decls:21,vars:9,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","12"],[3,"item"]],template:function(e,o){e&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),n(3,`
        `),r(4,"code-box",3),n(5,`
          `),m(6,"chart-card-style1"),n(7,`
        `),d(),n(8,`
      
        `),r(9,"code-box",3),n(10,`
          `),m(11,"chart-card-style3"),n(12,`
        `),d(),n(13,`
      `),d(),r(14,"div",2),n(15,`
        `),r(16,"code-box",3),n(17,`
          `),m(18,"chart-card-style2"),n(19,`
        `),d(),n(20,`
      `),d()()()),e&2&&(c("codes",o.codes)("item",o.item),i(),c("nzGutter",16),i(3),c("item",o.codes[0]),v("id",o.codes[0].id),i(5),c("item",o.codes[2]),v("id",o.codes[2].id),i(7),c("item",o.codes[1]),v("id",o.codes[1].id))},dependencies:[D,Te,ze,ke,G,k,I],encapsulation:2})};var Ne=class a{dark=!1;two=!1;option1={tooltip:{formatter:"{a} <br/>{b} : {c}%"},series:[{name:"Pressure",type:"gauge",detail:{formatter:"{value}"},data:[{value:50,name:"SCORE"}]}]};option2={title:{text:"ECharts \u5165\u95E8\u793A\u4F8B"},tooltip:{},legend:{data:["\u9500\u91CF"]},xAxis:{data:["\u886C\u886B","\u7F8A\u6BDB\u886B","\u96EA\u7EBA\u886B","\u88E4\u5B50","\u9AD8\u8DDF\u978B","\u889C\u5B50"]},yAxis:{},series:[{name:"\u9500\u91CF",type:"bar",data:[5,20,36,10,10,20]}]};handleEvents(t){console.log(t)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["chart-chart-echarts-basic"]],decls:11,vars:3,consts:[[1,"mb-md"],[3,"ngModelChange","ngModel"],["nz-button","","nzType","primary",3,"click"],[3,"events","option","theme"]],template:function(e,o){e&1&&(n(0,`
    `),r(1,"div",0),n(2,`
      `),r(3,"nz-switch",1),Ln("ngModelChange",function(p){return Hn(o.dark,p)||(o.dark=p),p}),d(),n(4,` Dark
      `),r(5,"button",2),M("click",function(){return o.two=!o.two}),n(6,"Change Option"),d(),n(7,`
    `),d(),n(8,`
    `),r(9,"chart-echarts",3),M("events",function(p){return o.handleEvents(p)}),d(),n(10,`
  `)),e&2&&(i(3),$n("ngModel",o.dark),i(6),c("option",o.two?o.option1:o.option2)("theme",o.dark?"dark":null))},dependencies:[Kn,Jn,Yn,fo,uo,X,K,J,Y,ye,ve],encapsulation:2})};var _e=class a{msg=O(tt);dark=!1;two=!1;on=[{eventName:"click",handler:({event:t,chart:e})=>{this.msg.info(`${t.type}: ${t.name} - ${t.value} (${e.id})`)}}];option={xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[150,230,224,218,135,147,260],type:"line"}]};static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["chart-chart-echarts-on"]],decls:3,vars:2,consts:[[3,"option","on"]],template:function(e,o){e&1&&(n(0," "),m(1,"chart-echarts",0),n(2," ")),e&2&&(i(),c("option",o.option)("on",o.on))},dependencies:[ye,ve],encapsulation:2})};var Se=class a{item={cols:1,urls:{"zh-CN":"packages/chart/chart-echarts/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p><a target="_blank" href="https://echarts.apache.org/zh/index.html" data-url="https://echarts.apache.org/zh/index.html">ECharts</a> \u4E00\u4E2A\u57FA\u4E8E JavaScript \u7684\u5F00\u6E90\u53EF\u89C6\u5316\u56FE\u8868\u5E93\u3002\u4F7F\u7528\u61D2\u52A0\u8F7D ECharts \u811A\u672C\uFF0C\u5F00\u7BB1\u542F\u7528\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="chart-echarts"><a class="lake-link"><i data-anchor="chart-echarts"></i></a>chart-echarts</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[width]</code></td><td>\u56FE\u8868\u5BBD\u5EA6</td><td><code>number, string</code></td><td><code>100%</code></td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number, string</code></td><td><code>400px</code></td></tr><tr><td><code>[option]</code></td><td><a target="_blank" href="https://echarts.apache.org/zh/option.html#title" data-url="https://echarts.apache.org/zh/option.html#title">\u914D\u7F6E\u9879</a></td><td><code>ChartEChartsOption</code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td><a target="_blank" href="https://echarts.apache.org/zh/theme-builder.html" data-url="https://echarts.apache.org/zh/theme-builder.html">\u4E3B\u9898</a>\u914D\u7F6E</td><td><code>string, object</code></td><td>-</td></tr><tr><td><code>[on]</code></td><td>\u7B49\u540C\u4E8E ECharts <a target="_blank" href="https://echarts.apache.org/zh/api.html#echartsInstance.on" data-url="https://echarts.apache.org/zh/api.html#echartsInstance.on">on</a></td><td><code>ChartEChartsOn[]</code></td><td>-</td></tr><tr><td><code>(events)</code></td><td>\u4E8B\u4EF6\u56DE\u8C03</td><td><code>EventEmitter&lt;ChartEChartsEvent></code></td><td>-</td></tr></tbody></table>',meta:{title:"chart-echarts",subtitle:"ECharts",cols:1,type:"ECharts",module:"import { ChartEChartsModule } from '@delon/chart/chart-echarts';"},toc:[{id:"API",title:"API",h:2,children:[{id:"chart-echarts",title:"chart-echarts",h:3}]}]}},demo:!0};codes=[{id:"chart-chart-echarts-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"}},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';
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
}`,lang:"ts",componentName:"ChartChartEchartsOnComponent",point:1,name:"on",urls:"packages/chart/chart-echarts/demo/on.md",type:"demo"}];static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["app-chart-chart-echarts"]],hostVars:2,hostBindings:function(e,o){e&2&&g("d-block","true")},decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,o){e&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),n(3,`
        `),r(4,"code-box",3),n(5,`
          `),m(6,"chart-chart-echarts-basic"),n(7,`
        `),d(),n(8,`
      
        `),r(9,"code-box",3),n(10,`
          `),m(11,"chart-chart-echarts-on"),n(12,`
        `),d(),n(13,`
      `),d()()()),e&2&&(c("codes",o.codes)("item",o.item),i(),c("nzGutter",16),i(3),c("item",o.codes[0]),v("id",o.codes[0].id),i(5),c("item",o.codes[1]),v("id",o.codes[1].id))},dependencies:[D,Ne,_e,G,k,I],encapsulation:2})};var Uo=["*"];function qo(a,t){a&1&&(n(0,`
      `),m(1,"nz-skeleton"),n(2,`
    `))}var Xt=class a extends et{height;resizeTime=0;render=new nt;resize=new nt;destroy=new nt;install(){this.el.nativeElement.innerHTML="",this.render.emit(this.el),this.installResizeEvent()}installResizeEvent(){this.resizeTime<=0||Ut(window,"resize").pipe(Rn(this.destroy$),qt(Math.min(200,this.resizeTime))).subscribe(()=>this.resize.emit(this.el))}static \u0275fac=(()=>{let t;return function(o){return(t||(t=Z(a)))(o||a)}})();static \u0275cmp=l({type:a,selectors:[["g2"],["g2-custom"]],hostVars:2,hostBindings:function(e,o){e&2&&ot("height",o.height,"px")},inputs:{height:[2,"height","height",b],resizeTime:[2,"resizeTime","resizeTime",b]},outputs:{render:"render",resize:"resize",destroy:"destroy"},exportAs:["g2Custom"],features:[Q],ngContentSelectors:Uo,decls:4,vars:1,template:function(e,o){e&1&&(Jt(),n(0,`
    `),_(1,qo,3,0),Yt(2),n(3,`
  `)),e&2&&(i(),S(o.loaded?-1:1))},dependencies:[ct],encapsulation:2,changeDetection:0})};var Qo=[Xt],Ie=class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=E({type:a});static \u0275inj=B({imports:[A,lt,Qo]})};var we=class a{ngZone=O(pe);render(t){this.ngZone.runOutsideAngular(()=>this.init(t.nativeElement))}init(t){let e=[{action:"\u6D4F\u89C8\u7F51\u7AD9",pv:5e4,percent:0},{action:"\u653E\u5165\u8D2D\u7269\u8F66",pv:35e3,percent:0},{action:"\u751F\u6210\u8BA2\u5355",pv:25e3,percent:0},{action:"\u652F\u4ED8\u8BA2\u5355",pv:15e3,percent:0},{action:"\u5B8C\u6210\u4EA4\u6613",pv:8e3,percent:0}].map(s=>(s.percent=s.pv/5e4,s)),o=new window.G2.Chart({container:t,autoFit:!0,height:500,width:t.clientWidth,padding:[20,120,95]});o.data(e),o.axis(!1),o.tooltip({showTitle:!1,showMarkers:!1,itemTpl:'<li style="margin-bottom:4px;list-style-type:none;padding: 0;"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}<br/><span style="padding-left: 16px;line-height: 16px;">\u6D4F\u89C8\u4EBA\u6570\uFF1A{pv}</span><br/><span style="padding-left: 16px;line-height: 16px;">\u5360\u6BD4\uFF1A{percent}</span><br/></li>'}),o.coordinate("rect").transpose().scale(1,-1),o.interval().adjust("symmetric").position("action*percent").shape("funnel").color("action",["#0050B3","#1890FF","#40A9FF","#69C0FF","#BAE7FF"]).label("action*pv",(s,p)=>({content:`${s} ${p}`}),{offset:35,labelLine:{style:{lineWidth:1,stroke:"rgba(0, 0, 0, 0.15)"}}}).tooltip("action*pv*percent",(s,p,u)=>({name:s,percent:`${+u*100}%`,pv:p})).animate({appear:{animation:"fade-in"},update:{}}),o.interaction("element-active"),o.on("beforepaint",()=>{o.annotation().clear(!0),o.getData().forEach(p=>{o.annotation().text({top:!0,position:{action:p.action,percent:"median"},content:`${+p.percent*100}%`,style:{stroke:null,fill:"#fff",textAlign:"center"}})})}),o.render()}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["chart-custom-basic"]],decls:3,vars:0,consts:[["delay","100",3,"render"]],template:function(e,o){e&1&&(n(0," "),r(1,"g2-custom",0),M("render",function(p){return o.render(p)}),d(),n(2," "))},dependencies:[Ie,Xt],encapsulation:2})};var Be=class a{item={cols:1,urls:{"en-US":"packages/chart/custom/index.en-US.md","zh-CN":"packages/chart/custom/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>Use <code>g2-custom</code> component to package your G2 chart.</p><h2 id="Howtouse"><a class="lake-link"><i data-anchor="Howtouse"></i></a>Howtouse</h2><p>A simple example template:</p><pre class="hljs language-ts"><code>import { Component, ElementRef } from '@angular/core';

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
}`,lang:"ts",componentName:"ChartCustomBasicComponent",point:0,name:"basic",urls:"packages/chart/custom/demo/basic.md",type:"demo"}];static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["app-chart-custom"]],hostVars:2,hostBindings:function(e,o){e&2&&g("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,o){e&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),n(3,`
        `),r(4,"code-box",3),n(5,`
          `),m(6,"chart-custom-basic"),n(7,`
        `),d(),n(8,`
      `),d()()()),e&2&&(c("codes",o.codes)("item",o.item),i(),c("nzGutter",16),i(3),c("item",o.codes[0]),v("id",o.codes[0].id))},dependencies:[D,we,G,k,I],encapsulation:2})};function Jo(a,t){a&1&&(n(0,`
    `),m(1,"nz-skeleton"),n(2,`
  `))}var te=class a extends et{title;height;color="#2f9cff";bgColor;format;percent;padding=[10,10,30,10];install(){this.winG2.registerShape("point","pointer",{draw(T,N){let C=N.addGroup({}),y=this.parsePoint({x:0,y:0});return C.addShape("line",{attrs:{x1:y.x,y1:y.y,x2:T.x,y2:T.y,stroke:T.color,lineWidth:2.5,lineCap:"round"}}),C.addShape("circle",{attrs:{x:y.x,y:y.y,r:5.75,stroke:T.color,lineWidth:2,fill:"#fff"}}),C}});let{el:t,height:e,padding:o,format:s,theme:p}=this,u=this._chart=new this.winG2.Chart({container:t.nativeElement,autoFit:!0,height:e,padding:o,theme:p});u.legend(!1),u.animate(!1),u.tooltip(!1),u.coordinate("polar",{startAngle:-9/8*Math.PI,endAngle:1/8*Math.PI,radius:.75}),u.scale("value",{min:0,max:100,nice:!0,tickCount:6}),u.axis("1",!1),u.axis("value",{line:null,label:{offset:-14,formatter:s},tickLine:null,grid:null}),u.point().position("value*1").shape("pointer"),this.ready.next(u),this.changeData(),u.render()}changeData(){let{_chart:t,percent:e,color:o,bgColor:s,title:p}=this;if(!t)return;let u=[{name:p,value:e}],T=u[0].value;t.annotation().clear(!0),t.geometries[0].color(o),t.annotation().arc({top:!1,start:[0,.95],end:[100,.95],style:{stroke:s,lineWidth:12,lineDash:null}}),t.annotation().arc({start:[0,.95],end:[u[0].value,.95],style:{stroke:o,lineWidth:12,lineDash:null}}),t.annotation().text({position:["50%","85%"],content:p,style:{fontSize:12,fill:this.theme==="dark"?"rgba(255, 255, 255, 0.43)":"rgba(0, 0, 0, 0.43)",textAlign:"center"}}),t.annotation().text({position:["50%","90%"],content:`${T} %`,style:{fontSize:20,fill:this.theme==="dark"?"rgba(255, 255, 255, 0.85)":"rgba(0, 0, 0, 0.85)",textAlign:"center"},offsetY:15}),t.changeData(u)}static \u0275fac=(()=>{let t;return function(o){return(t||(t=Z(a)))(o||a)}})();static \u0275cmp=l({type:a,selectors:[["g2-gauge"]],hostVars:2,hostBindings:function(e,o){e&2&&g("g2-gauge",!0)},inputs:{title:"title",height:[2,"height","height",b],color:"color",bgColor:"bgColor",format:"format",percent:[2,"percent","percent",b],padding:"padding"},exportAs:["g2Gauge"],features:[Q],decls:1,vars:1,template:function(e,o){e&1&&_(0,Jo,3,0),e&2&&S(o.loaded?-1:0)},dependencies:[ct],encapsulation:2,changeDetection:0})};var Ko=[te],Ee=class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=E({type:a});static \u0275inj=B({imports:[A,lt,Ko]})};var Ae=class a{percent=36;color="#2f9cff";time$;constructor(t,e){t.isBrowser&&(this.time$=setInterval(()=>{this.percent=parseInt((Math.random()*100).toString(),10),this.color=this.percent>50?"#f50":"#2f9cff",e.detectChanges()},1e3))}ngOnDestroy(){clearInterval(this.time$)}static \u0275fac=function(e){return new(e||a)(Ct(ge),Ct(St))};static \u0275cmp=l({type:a,selectors:[["chart-gauge-basic"]],decls:3,vars:3,consts:[["height","164",3,"title","percent","color"]],template:function(e,o){e&1&&(n(0," "),m(1,"g2-gauge",0),n(2," ")),e&2&&(i(),c("title","\u6838\u9500\u7387")("percent",o.percent)("color",o.color))},dependencies:[Ee,te],encapsulation:2,changeDetection:0})};var Pe=class a{item={cols:1,urls:{"zh-CN":"packages/chart/gauge/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u4E00\u79CD\u8FDB\u5EA6\u5C55\u793A\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u66F4\u76F4\u89C2\u7684\u5C55\u793A\u5F53\u524D\u7684\u8FDB\u5C55\u60C5\u51B5\uFF0C\u901A\u5E38\u4E5F\u53EF\u8868\u793A\u5360\u6BD4\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-gauge"><a class="lake-link"><i data-anchor="g2-gauge"></i></a>g2-gauge</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[title]</code></td><td>\u56FE\u8868\u6807\u9898</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[color]</code></td><td>\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>#2F9CFF</code></td></tr><tr><td><code>[bgColor]</code></td><td>\u56FE\u8868\u80CC\u666F\u8272</td><td><code>string</code></td><td><code>#F0F2F5</code></td></tr><tr><td><code>[percent]</code></td><td>\u8FDB\u5EA6\u6BD4\u4F8B</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[padding]</code></td><td>\u5185\u8FB9\u8DDD</td><td><code>Array&lt;number | string></code></td><td><code>[10, 10, 30, 10]</code></td></tr><tr><td><code>[format]</code></td><td>\u5750\u6807\u8F74\u683C\u5F0F</td><td><code>(text: string, item: {}, index: number) => string</code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table>',meta:{title:"g2-gauge",subtitle:"\u4EEA\u8868\u76D8",cols:1,type:"G2",module:"import { G2GaugeModule } from '@delon/chart/gauge';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-gauge",title:"g2-gauge",h:3}]}]}},demo:!0};codes=[{id:"chart-gauge-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Platform } from '@angular/cdk/platform';
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
}`,lang:"ts",componentName:"ChartGaugeBasicComponent",point:0,name:"basic",urls:"packages/chart/gauge/demo/basic.md",type:"demo"}];static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["app-chart-gauge"]],hostVars:2,hostBindings:function(e,o){e&2&&g("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,o){e&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),n(3,`
        `),r(4,"code-box",3),n(5,`
          `),m(6,"chart-gauge-basic"),n(7,`
        `),d(),n(8,`
      `),d()()()),e&2&&(c("codes",o.codes)("item",o.item),i(),c("nzGutter",16),i(3),c("item",o.codes[0]),v("id",o.codes[0].id))},dependencies:[D,Ae,G,k,I],encapsulation:2})};var yt=class a extends et{color="rgba(24, 144, 255, 0.2)";borderColor="#1890FF";borderWidth=2;height=56;fit=!0;line=!1;animate=!0;xAxis;yAxis;padding=[8,8,8,8];data=[];yTooltipSuffix="";tooltipType="default";clickItem=new nt;install(){let{el:t,fit:e,height:o,padding:s,xAxis:p,yAxis:u,yTooltipSuffix:T,tooltipType:N,line:C,theme:y,animate:j,color:W,borderColor:w,borderWidth:$}=this,F=this._chart=new this.winG2.Chart({container:t.nativeElement,autoFit:e,height:o,padding:s,theme:y});F.animate(j),!p&&!u&&F.axis(!1),p?F.axis("x",p):F.axis("x",!1),u?F.axis("y",u):F.axis("y",!1),F.legend(!1),F.tooltip(Ce(N)),F.area().position("x*y").color(W).tooltip("x*y",(z,R)=>({name:z,value:R+T})).shape("smooth"),C&&F.line().position("x*y").shape("smooth").color(w).size($).tooltip(!1),F.on("plot:click",z=>{let R=this._chart.getSnapRecords({x:z.x,y:z.y});this.ngZone.run(()=>this.clickItem.emit({item:R[0]._origin,ev:z}))}),this.ready.next(F),this.changeData(),F.render()}changeData(){let{_chart:t,data:e}=this;!t||!Array.isArray(e)||e.length<=0||t.changeData(e)}static \u0275fac=(()=>{let t;return function(o){return(t||(t=Z(a)))(o||a)}})();static \u0275cmp=l({type:a,selectors:[["g2-mini-area"]],hostVars:2,hostBindings:function(e,o){e&2&&ot("height",o.height,"px")},inputs:{color:"color",borderColor:"borderColor",borderWidth:[2,"borderWidth","borderWidth",b],height:[2,"height","height",b],fit:[2,"fit","fit",H],line:[2,"line","line",H],animate:[2,"animate","animate",H],xAxis:"xAxis",yAxis:"yAxis",padding:"padding",data:"data",yTooltipSuffix:"yTooltipSuffix",tooltipType:"tooltipType"},outputs:{clickItem:"clickItem"},exportAs:["g2MiniArea"],features:[Q],decls:0,vars:0,template:function(e,o){},encapsulation:2,changeDetection:0})};var Wt=class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=E({type:a});static \u0275inj=B({imports:[A]})};var Fe=class a{msg=O(tt);visitData=this.genData();genData(){let t=new Date().getTime(),e=[];for(let o=0;o<20;o+=1)e.push({x:at(new Date(t+1e3*60*60*24*o),"yyyy-MM-dd"),y:Math.floor(Math.random()*100)+10});return e}refresh(){this.visitData=this.genData()}handleClick(t){this.msg.info(`${t.item.x} - ${t.item.y}`)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["chart-mini-area-basic"]],decls:6,vars:1,consts:[["nz-button","","nzType","primary",3,"click"],["line","","color","#cceafe","height","45",3,"clickItem","data"]],template:function(e,o){e&1&&(n(0,`
    `),r(1,"button",0),M("click",function(){return o.refresh()}),n(2,"Refresh"),d(),n(3,`
    `),r(4,"g2-mini-area",1),M("clickItem",function(p){return o.handleClick(p)}),d(),n(5,`
  `)),e&2&&(i(4),c("data",o.visitData))},dependencies:[X,K,J,Y,Wt,yt],encapsulation:2})};var Re=class a{visitData=[];ngOnInit(){let t=new Date().getTime();for(let e=0;e<20;e+=1)this.visitData.push({x:at(new Date(t+1e3*60*60*24*e),"yyyy-MM-dd"),y:Math.floor(Math.random()*100)+10})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["chart-mini-area-tooltip"]],decls:3,vars:1,consts:[["line","","color","#cceafe","height","45","yTooltipSuffix","%",3,"data"]],template:function(e,o){e&1&&(n(0," "),m(1,"g2-mini-area",0),n(2," ")),e&2&&(i(),c("data",o.visitData))},dependencies:[Wt,yt],encapsulation:2})};var Oe=class a{visitData=[];ngOnInit(){let t=new Date().getTime();for(let e=0;e<20;e+=1)this.visitData.push({x:at(new Date(t+1e3*60*60*24*e),"yyyy-MM-dd"),y:Math.floor(Math.random()*100)+10})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["chart-mini-area-mini"]],decls:3,vars:1,consts:[["line","","color","#cceafe","height","45","tooltipType","mini",3,"data"]],template:function(e,o){e&1&&(n(0," "),m(1,"g2-mini-area",0),n(2," ")),e&2&&(i(),c("data",o.visitData))},dependencies:[Wt,yt],encapsulation:2})};var We=class a{item={cols:2,urls:{"zh-CN":"packages/chart/mini-area/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u9762\u79EF\u56FE\u53C8\u53EB\u533A\u57DF\u56FE\u3002 \u5B83\u662F\u5728\u6298\u7EBF\u56FE\u7684\u57FA\u7840\u4E4B\u4E0A\u5F62\u6210\u7684, \u5B83\u5C06\u6298\u7EBF\u56FE\u4E2D\u6298\u7EBF\u4E0E\u81EA\u53D8\u91CF\u5750\u6807\u8F74\u4E4B\u95F4\u7684\u533A\u57DF\u4F7F\u7528\u989C\u8272\u6216\u8005\u7EB9\u7406\u586B\u5145\uFF0C\u8FD9\u6837\u4E00\u4E2A\u586B\u5145\u533A\u57DF\u6211\u4EEC\u53EB\u505A\u9762\u79EF\uFF0C\u989C\u8272\u7684\u586B\u5145\u53EF\u4EE5\u66F4\u597D\u7684\u7A81\u51FA\u8D8B\u52BF\u4FE1\u606F\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-mini-area"><a class="lake-link"><i data-anchor="g2-mini-area"></i></a>g2-mini-area</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[color]</code></td><td>\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>rgba(24, 144, 255, 0.2)</code></td></tr><tr><td><code>[borderColor]</code></td><td>\u56FE\u8868\u8FB9\u989C\u8272</td><td><code>string</code></td><td><code>#1890FF</code></td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td><code>56</code></td></tr><tr><td><code>[line]</code></td><td>\u662F\u5426\u663E\u793A\u63CF\u8FB9</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[animate]</code></td><td>\u662F\u5426\u663E\u793A\u52A8\u753B</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[padding]</code></td><td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td><td><code>array</code></td><td><code>[8, 8, 8, 8]</code></td></tr><tr><td><code>[xAxis]</code></td><td><a target="_blank" href="https://www.yuque.com/antv/g2-docs/api-chart#ef1eaedc" data-url="https://www.yuque.com/antv/g2-docs/api-chart#ef1eaedc">x \u8F74\u914D\u7F6E</a></td><td><code>object</code></td><td>-</td></tr><tr><td><code>[yAxis]</code></td><td><a target="_blank" href="https://www.yuque.com/antv/g2-docs/api-chart#ef1eaedc" data-url="https://www.yuque.com/antv/g2-docs/api-chart#ef1eaedc">y \u8F74\u914D\u7F6E</a></td><td><code>object</code></td><td>-</td></tr><tr><td><code>[yTooltipSuffix]</code></td><td>y \u8F74Tooltip\u540E\u7F00\uFF0C\u4E00\u822C\u6307\u5B9A\u5355\u4F4D</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[tooltipType]</code></td><td>Tooltip\u663E\u793A\u7C7B\u578B</td><td><code>'mini','default'</code></td><td><code>'default'</code></td></tr><tr><td><code>[data]</code></td><td>\u6570\u636E</td><td><code>G2MiniAreaData[]</code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(clickItem)</code></td><td>\u70B9\u51FB\u9879\u56DE\u8C03</td><td><code>EventEmitter&lt;G2MiniAreaClickItem></code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table><h3 id="G2MiniAreaData"><a class="lake-link"><i data-anchor="G2MiniAreaData"></i></a>G2MiniAreaData</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[x]</code></td><td>x\u8F74</td><td><code>any</code></td><td>-</td></tr><tr><td><code>[y]</code></td><td>y\u8F74</td><td><code>any</code></td><td>-</td></tr></tbody></table>`,meta:{title:"g2-mini-area",subtitle:"\u8FF7\u4F60\u533A\u57DF\u56FE",cols:2,type:"G2",module:"import { G2MiniAreaModule } from '@delon/chart/mini-area';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-mini-area",title:"g2-mini-area",h:3},{id:"G2MiniAreaData",title:"G2MiniAreaData",h:3}]}]}},demo:!0};codes=[{id:"chart-mini-area-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Component, inject } from '@angular/core';

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
}`,lang:"ts",componentName:"ChartMiniAreaMiniComponent",point:2,name:"mini",urls:"packages/chart/mini-area/demo/mini.md",type:"demo"}];static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["app-chart-mini-area"]],hostVars:2,hostBindings:function(e,o){e&2&&g("d-block","true")},decls:21,vars:9,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","12"],[3,"item"]],template:function(e,o){e&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),n(3,`
        `),r(4,"code-box",3),n(5,`
          `),m(6,"chart-mini-area-basic"),n(7,`
        `),d(),n(8,`
      
        `),r(9,"code-box",3),n(10,`
          `),m(11,"chart-mini-area-mini"),n(12,`
        `),d(),n(13,`
      `),d(),r(14,"div",2),n(15,`
        `),r(16,"code-box",3),n(17,`
          `),m(18,"chart-mini-area-tooltip"),n(19,`
        `),d(),n(20,`
      `),d()()()),e&2&&(c("codes",o.codes)("item",o.item),i(),c("nzGutter",16),i(3),c("item",o.codes[0]),v("id",o.codes[0].id),i(5),c("item",o.codes[2]),v("id",o.codes[2].id),i(7),c("item",o.codes[1]),v("id",o.codes[1].id))},dependencies:[D,Fe,Re,Oe,G,k,I],encapsulation:2})};var bt=class a extends et{color="#1890FF";height=0;borderWidth=5;padding=[8,8,8,8];data=[];yTooltipSuffix="";tooltipType="default";clickItem=new nt;install(){let{el:t,height:e,padding:o,yTooltipSuffix:s,tooltipType:p,theme:u,color:T,borderWidth:N}=this,C=this._chart=new this.winG2.Chart({container:t.nativeElement,autoFit:!0,height:e,padding:o,theme:u});C.scale({x:{type:"cat"},y:{min:0}}),C.legend(!1),C.axis(!1),C.tooltip(Ce(p,{showCrosshairs:!1})),C.interval().position("x*y").color("x*y",(y,j)=>{let W=this.data.find(w=>w.x===y&&w.y===j);return W&&W.color?W.color:T}).size(N).tooltip("x*y",(y,j)=>({name:y,value:j+s})),C.on("interval:click",y=>{this.ngZone.run(()=>this.clickItem.emit({item:y.data?.data,ev:y}))}),this.ready.next(C),this.changeData(),C.render()}changeData(){let{_chart:t,data:e}=this;!t||!Array.isArray(e)||e.length<=0||t.changeData(e)}static \u0275fac=(()=>{let t;return function(o){return(t||(t=Z(a)))(o||a)}})();static \u0275cmp=l({type:a,selectors:[["g2-mini-bar"]],hostVars:2,hostBindings:function(e,o){e&2&&ot("height",o.height,"px")},inputs:{color:"color",height:[2,"height","height",b],borderWidth:[2,"borderWidth","borderWidth",b],padding:"padding",data:"data",yTooltipSuffix:"yTooltipSuffix",tooltipType:"tooltipType"},outputs:{clickItem:"clickItem"},exportAs:["g2MiniBar"],features:[Q],decls:0,vars:0,template:function(e,o){},encapsulation:2,changeDetection:0})};var jt=class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=E({type:a});static \u0275inj=B({imports:[A]})};var je=class a{msg=O(tt);visitData=this.genData();genData(){let t=new Date().getTime(),e=[];for(let o=0;o<20;o+=1)e.push({x:at(new Date(t+1e3*60*60*24*o),"yyyy-MM-dd"),y:Math.floor(Math.random()*100)+10});return e}refresh(){this.visitData=this.genData()}handleClick(t){this.msg.info(`${t.item.x} - ${t.item.y}`)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["chart-mini-bar-basic"]],decls:6,vars:1,consts:[["nz-button","","nzType","primary",3,"click"],["height","45",3,"clickItem","data"]],template:function(e,o){e&1&&(n(0,`
    `),r(1,"button",0),M("click",function(){return o.refresh()}),n(2,"Refresh"),d(),n(3,`
    `),r(4,"g2-mini-bar",1),M("clickItem",function(p){return o.handleClick(p)}),d(),n(5,`
  `)),e&2&&(i(4),c("data",o.visitData))},dependencies:[X,K,J,Y,jt,bt],encapsulation:2})};var $e=class a{visitData=[];ngOnInit(){let t=new Date().getTime();for(let e=0;e<20;e+=1)this.visitData.push({x:at(new Date(t+1e3*60*60*24*e),"yyyy-MM-dd"),y:Math.floor(Math.random()*100)+10})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["chart-mini-bar-mini"]],decls:3,vars:1,consts:[["height","45","yTooltipSuffix","%","tooltipType","mini",3,"data"]],template:function(e,o){e&1&&(n(0," "),m(1,"g2-mini-bar",0),n(2," ")),e&2&&(i(),c("data",o.visitData))},dependencies:[jt,bt],encapsulation:2})};var He=class a{visitData=[];ngOnInit(){let t=new Date().getTime();for(let e=0;e<20;e+=1)this.visitData.push({x:at(new Date(t+1e3*60*60*24*e),"yyyy-MM-dd"),y:Math.floor(Math.random()*100)+10})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["chart-mini-bar-tooltip"]],decls:3,vars:1,consts:[["height","45","yTooltipSuffix","%",3,"data"]],template:function(e,o){e&1&&(n(0," "),m(1,"g2-mini-bar",0),n(2," ")),e&2&&(i(),c("data",o.visitData))},dependencies:[jt,bt],encapsulation:2})};var Le=class a{item={cols:2,urls:{"zh-CN":"packages/chart/mini-bar/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u8FF7\u4F60\u67F1\u72B6\u56FE\u66F4\u9002\u5408\u5C55\u793A\u7B80\u5355\u7684\u533A\u95F4\u6570\u636E\uFF0C\u7B80\u6D01\u7684\u8868\u73B0\u65B9\u5F0F\u53EF\u4EE5\u5F88\u597D\u7684\u51CF\u5C11\u5927\u6570\u636E\u91CF\u7684\u89C6\u89C9\u5C55\u73B0\u538B\u529B\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-mini-bar"><a class="lake-link"><i data-anchor="g2-mini-bar"></i></a>g2-mini-bar</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[color]</code></td><td>\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>#1890FF</code></td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[yTooltipSuffix]</code></td><td>y \u8F74Tooltip\u540E\u7F00\uFF0C\u4E00\u822C\u6307\u5B9A\u5355\u4F4D</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[tooltipType]</code></td><td>Tooltip\u663E\u793A\u7C7B\u578B</td><td><code>'mini','default'</code></td><td><code>'default'</code></td></tr><tr><td><code>[borderWidth]</code></td><td>\u7EBF\u6761\u7C97\u7EC6</td><td><code>number</code></td><td><code>5</code></td></tr><tr><td><code>[padding]</code></td><td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td><td><code>array</code></td><td><code>[8, 8, 8, 8]</code></td></tr><tr><td><code>[data]</code></td><td>\u6570\u636E</td><td><code>G2MiniBarData[]</code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(clickItem)</code></td><td>\u70B9\u51FB\u9879\u56DE\u8C03</td><td><code>EventEmitter&lt;G2MiniBarClickItem></code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table><h3 id="G2MiniBarData"><a class="lake-link"><i data-anchor="G2MiniBarData"></i></a>G2MiniBarData</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[x]</code></td><td>x\u8F74</td><td><code>any</code></td><td>-</td></tr><tr><td><code>[y]</code></td><td>y\u8F74</td><td><code>any</code></td><td>-</td></tr><tr><td><code>[color]</code></td><td>\u8F74\u989C\u8272</td><td><code>string</code></td><td>-</td></tr></tbody></table>`,meta:{title:"g2-mini-bar",subtitle:"\u8FF7\u4F60\u67F1\u72B6\u56FE",cols:2,type:"G2",module:"import { G2MiniBarModule } from '@delon/chart/mini-bar';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-mini-bar",title:"g2-mini-bar",h:3},{id:"G2MiniBarData",title:"G2MiniBarData",h:3}]}]}},demo:!0};codes=[{id:"chart-mini-bar-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Component, inject } from '@angular/core';

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
}`,lang:"ts",componentName:"ChartMiniBarTooltipComponent",point:2,name:"tooltip",urls:"packages/chart/mini-bar/demo/tooltip.md",type:"demo"}];static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["app-chart-mini-bar"]],hostVars:2,hostBindings:function(e,o){e&2&&g("d-block","true")},decls:21,vars:9,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","12"],[3,"item"]],template:function(e,o){e&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),n(3,`
        `),r(4,"code-box",3),n(5,`
          `),m(6,"chart-mini-bar-basic"),n(7,`
        `),d(),n(8,`
      
        `),r(9,"code-box",3),n(10,`
          `),m(11,"chart-mini-bar-tooltip"),n(12,`
        `),d(),n(13,`
      `),d(),r(14,"div",2),n(15,`
        `),r(16,"code-box",3),n(17,`
          `),m(18,"chart-mini-bar-mini"),n(19,`
        `),d(),n(20,`
      `),d()()()),e&2&&(c("codes",o.codes)("item",o.item),i(),c("nzGutter",16),i(3),c("item",o.codes[0]),v("id",o.codes[0].id),i(5),c("item",o.codes[2]),v("id",o.codes[2].id),i(7),c("item",o.codes[1]),v("id",o.codes[1].id))},dependencies:[D,je,$e,He,G,k,I],encapsulation:2})};var Xo=a=>({left:a}),bo=a=>({"background-color":a}),ta=(a,t,e)=>({"background-color":a,width:t,height:e}),re=class a{locale=O(qn).valueSignal("miniProgress");cdr=O(St);color="#1890FF";target;percent;strokeWidth;fixNum(t){return Math.min(Math.max(b(t),0),100)}ngOnChanges(){this.target=this.fixNum(this.target),this.percent=this.fixNum(this.percent),this.cdr.detectChanges()}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["g2-mini-progress"]],hostVars:2,hostBindings:function(e,o){e&2&&g("g2-mini-progress",!0)},inputs:{color:"color",target:[2,"target","target",b],percent:[2,"percent","percent",b],strokeWidth:[2,"strokeWidth","strokeWidth",b]},exportAs:["g2MiniProgress"],features:[Zt],decls:13,vars:19,consts:[["nz-tooltip","",1,"g2-mini-progress__target",3,"nzTooltipTitle"],[1,"g2-mini-progress__target-item"],[1,"g2-mini-progress__wrap"],[1,"g2-mini-progress__value"]],template:function(e,o){e&1&&(n(0,`
    `),r(1,"div",0),n(2,`
      `),m(3,"span",1),n(4,`
      `),m(5,"span",1),n(6,`
    `),d(),n(7,`
    `),r(8,"div",2),n(9,`
      `),m(10,"div",3),n(11,`
    `),d(),n(12,`
  `)),e&2&&(i(),it(mt(9,Xo,o.target+"%")),c("nzTooltipTitle",o.locale().targetSuffix+o.target+"%"),i(2),it(mt(11,bo,o.color)),i(2),it(mt(13,bo,o.color)),i(5),it(Un(15,ta,o.color,o.percent+"%",o.strokeWidth+"px")))},dependencies:[Bt],encapsulation:2,changeDetection:0})};var Ve=class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=E({type:a});static \u0275inj=B({imports:[A,Zn,Et]})};var Ue=class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["chart-mini-progress-basic"]],decls:3,vars:0,consts:[["percent","78","strokeWidth","8","target","80"]],template:function(e,o){e&1&&(n(0," "),m(1,"g2-mini-progress",0),n(2," "))},dependencies:[Ve,re],encapsulation:2})};var qe=class a{item={cols:1,urls:{"zh-CN":"packages/chart/mini-progress/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u7528\u4E8E\u663E\u793A\u8DDF\u901F\u5EA6\u76F8\u5173\u56FE\u5F62\u518D\u9002\u5408\u4E0D\u8FC7\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-mini-progress"><a class="lake-link"><i data-anchor="g2-mini-progress"></i></a>g2-mini-progress</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[target]</code></td><td>\u76EE\u6807\u6BD4\u4F8B</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[color]</code></td><td>\u8FDB\u5EA6\u6761\u989C\u8272</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[strokeWidth]</code></td><td>\u8FDB\u5EA6\u6761\u9AD8\u5EA6</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[percent]</code></td><td>\u8FDB\u5EA6\u6BD4\u4F8B</td><td><code>number</code></td><td>-</td></tr></tbody></table>',meta:{title:"g2-mini-progress",subtitle:"\u8FF7\u4F60\u8FDB\u5EA6\u6761",cols:1,type:"G2",module:"import { G2MiniProgressModule } from '@delon/chart/mini-progress';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-mini-progress",title:"g2-mini-progress",h:3}]}]}},demo:!0};codes=[{id:"chart-mini-progress-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Component } from '@angular/core';

import { G2MiniProgressModule } from '@delon/chart/mini-progress';

@Component({
  selector: 'chart-mini-progress-basic',
  template: \` <g2-mini-progress percent="78" strokeWidth="8" target="80" /> \`,
  imports: [G2MiniProgressModule]
})
export class ChartMiniProgressBasicComponent {}`,lang:"ts",componentName:"ChartMiniProgressBasicComponent",point:0,name:"basic",urls:"packages/chart/mini-progress/demo/basic.md",type:"demo"}];static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["app-chart-mini-progress"]],hostVars:2,hostBindings:function(e,o){e&2&&g("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,o){e&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),n(3,`
        `),r(4,"code-box",3),n(5,`
          `),m(6,"chart-mini-progress-basic"),n(7,`
        `),d(),n(8,`
      `),d()()()),e&2&&(c("codes",o.codes)("item",o.item),i(),c("nzGutter",16),i(3),c("item",o.codes[0]),v("id",o.codes[0].id))},dependencies:[D,Ue,G,k,I],encapsulation:2})};function na(a,t){if(a&1&&(U(0),n(1),q()),a&2){let e=x(2);i(),L(e.title)}}function oa(a,t){if(a&1&&(n(0,`
  `),r(1,"div",3),n(2,`
    `),P(3,na,2,1,"ng-container",2),n(4,`
  `),d(),n(5,`
`)),a&2){let e=x();i(3),c("nzStringTemplateOutlet",e.title)}}function aa(a,t){if(a&1&&(U(0),n(1),q()),a&2){let e=x(2);i(),L(e.subTitle)}}function ia(a,t){if(a&1&&(n(0,`
  `),r(1,"div",4),n(2,`
    `),P(3,aa,2,1,"ng-container",2),n(4,`
  `),d(),n(5,`
`)),a&2){let e=x();i(3),c("nzStringTemplateOutlet",e.subTitle)}}function ra(a,t){if(a&1&&(U(0),n(1),q()),a&2){let e=x();i(),L(e.total)}}function da(a,t){if(a&1&&(n(0,`
      `),r(1,"em",5),n(2),d(),n(3,`
    `)),a&2){let e=x();i(2),L(e.suffix)}}function ca(a,t){if(a&1&&(U(0),n(1),q()),a&2){let e=x(2);i(),L(e.subTotal)}}function la(a,t){if(a&1&&(n(0,`
        `),m(1,"nz-icon",7),n(2,`
      `)),a&2){let e=x(2);i(),c("nzType",ie("caret-",e.status))}}function ma(a,t){if(a&1&&(n(0,`
    `),r(1,"span",6),n(2,`
      `),P(3,ca,2,1,"ng-container",2),n(4,`
      `),_(5,la,3,2),d(),n(6,`
  `)),a&2){let e=x();i(3),c("nzStringTemplateOutlet",e.subTotal),i(2),S(e.status?5:-1)}}var xt=class a{title;subTitle;total;subTotal;suffix;status;theme="light";gap=8;static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["number-info"]],hostVars:6,hostBindings:function(e,o){e&2&&g("number-info",!0)("number-info__light",o.theme==="light")("number-info__default",o.theme==="default")},inputs:{title:"title",subTitle:"subTitle",total:"total",subTotal:"subTotal",suffix:"suffix",status:"status",theme:"theme",gap:[2,"gap","gap",b]},exportAs:["numberInfo"],decls:12,vars:7,consts:[[1,"number-info__value"],[1,"number-info__value-text"],[4,"nzStringTemplateOutlet"],[1,"number-info__title"],[1,"number-info__title-sub"],[1,"number-info__value-suffix"],[1,"number-info__value-text","number-info__value-sub"],[3,"nzType"]],template:function(e,o){e&1&&(_(0,oa,6,1),_(1,ia,6,1),r(2,"div",0),n(3,`
  `),r(4,"span",1),n(5,`
    `),P(6,ra,2,1,"ng-container",2),n(7,`
    `),_(8,da,4,1),d(),n(9,`
  `),_(10,ma,7,2),d(),n(11,`
`)),e&2&&(S(o.title?0:-1),i(),S(o.subTitle?1:-1),i(),ot("margin-top",o.gap,"px"),i(4),c("nzStringTemplateOutlet",o.total),i(2),S(o.suffix?8:-1),i(2),S(o.status||o.subTotal?10:-1))},dependencies:[rt,It],encapsulation:2,changeDetection:0})};var $t=class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=E({type:a});static \u0275inj=B({imports:[A,wt,dt]})};var Ze=class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["chart-number-info-basic"]],decls:3,vars:0,consts:[["subTitle","\u672C\u5468\u8BBF\u95EE","total","12,321","subTotal","17.1","status","up"]],template:function(e,o){e&1&&(n(0," "),m(1,"number-info",0),n(2," "))},dependencies:[$t,xt],encapsulation:2})};var Qe=class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["chart-number-info-theme"]],decls:3,vars:0,consts:[["subTitle","\u672C\u5468\u8BBF\u95EE","total","12,321","subTotal","17.1","status","down","theme","default"]],template:function(e,o){e&1&&(n(0," "),m(1,"number-info",0),n(2," "))},dependencies:[$t,xt],encapsulation:2})};var Je=class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["chart-number-info-multiple"]],decls:7,vars:0,consts:[["subTitle","\u4ECA\u65E5\u8BBF\u95EE","total","12,321"],["subTitle","\u672C\u5468\u8BBF\u95EE","total","12,32100"],["subTitle","\u672C\u6708\u8BBF\u95EE","total","12,32100000"]],template:function(e,o){e&1&&(n(0,`
    `),m(1,"number-info",0),n(2,`
    `),m(3,"number-info",1),n(4,`
    `),m(5,"number-info",2),n(6,`
  `))},dependencies:[$t,xt],encapsulation:2})};var Ye=class a{item={cols:2,urls:{"en-US":"packages/chart/number-info/index.en-US.md","zh-CN":"packages/chart/number-info/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Often used in data cards for highlighting the business data.</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="number-info"><a class="lake-link"><i data-anchor="number-info"></i></a>number-info</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>title</td><td><code>TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[subTitle]</code></td><td>subtitle</td><td><code>TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[total]</code></td><td>total amount</td><td><code>string, number</code></td><td>-</td></tr><tr><td><code>[suffix]</code></td><td>total amount suffix</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[subTotal]</code></td><td>total amount of additional information</td><td><code>string, number</code></td><td>-</td></tr><tr><td><code>[status]</code></td><td>increase state</td><td><code>'up','down'</code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td>state style</td><td><code>'light','default'</code></td><td><code>'light'</code></td></tr><tr><td><code>[gap]</code></td><td>set the spacing (pixels) between numbers and descriptions</td><td><code>number</code></td><td>8</td></tr></tbody></table>`,meta:{type:"G2",title:"number-info",subtitle:"NumberInfo",cols:2,module:"import { NumberInfoModule } from '@delon/chart/number-info';"},toc:[{id:"API",title:"API",h:2,children:[{id:"number-info",title:"number-info",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u5E38\u7528\u5728\u6570\u636E\u5361\u7247\u4E2D\uFF0C\u7528\u4E8E\u7A81\u51FA\u5C55\u793A\u67D0\u4E2A\u4E1A\u52A1\u6570\u636E\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="number-info"><a class="lake-link"><i data-anchor="number-info"></i></a>number-info</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>\u6807\u9898</td><td><code>TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[subTitle]</code></td><td>\u5B50\u6807\u9898</td><td><code>TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[total]</code></td><td>\u603B\u91CF</td><td><code>string, number</code></td><td>-</td></tr><tr><td><code>[suffix]</code></td><td>\u603B\u91CF\u540E\u7F00</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[subTotal]</code></td><td>\u5B50\u603B\u91CF</td><td><code>string, number</code></td><td>-</td></tr><tr><td><code>[status]</code></td><td>\u589E\u52A0\u72B6\u6001</td><td><code>'up','down'</code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td>\u72B6\u6001\u6837\u5F0F</td><td><code>'light','default'</code></td><td><code>'light'</code></td></tr><tr><td><code>[gap]</code></td><td>\u8BBE\u7F6E\u6570\u5B57\u548C\u63CF\u8FF0\u76F4\u63A5\u7684\u95F4\u8DDD\uFF08\u50CF\u7D20\uFF09</td><td><code>number</code></td><td>8</td></tr></tbody></table>`,meta:{type:"G2",title:"number-info",subtitle:"\u6570\u636E\u6587\u672C",cols:2,module:"import { NumberInfoModule } from '@delon/chart/number-info';"},toc:[{id:"API",title:"API",h:2,children:[{id:"number-info",title:"number-info",h:3}]}]}},demo:!0};codes=[{id:"chart-number-info-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"}},summary:"<p>\u5404\u79CD\u6570\u636E\u6587\u6848\u7684\u5C55\u73B0\u65B9\u5F0F\u3002</p>",code:`import { Component } from '@angular/core';

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
export class ChartNumberInfoMultipleComponent {}`,lang:"ts",componentName:"ChartNumberInfoMultipleComponent",point:2,name:"multiple",urls:"packages/chart/number-info/demo/multiple.md",type:"demo"}];static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["app-chart-number-info"]],hostVars:2,hostBindings:function(e,o){e&2&&g("d-block","true")},decls:21,vars:9,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","12"],[3,"item"]],template:function(e,o){e&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),n(3,`
        `),r(4,"code-box",3),n(5,`
          `),m(6,"chart-number-info-basic"),n(7,`
        `),d(),n(8,`
      
        `),r(9,"code-box",3),n(10,`
          `),m(11,"chart-number-info-multiple"),n(12,`
        `),d(),n(13,`
      `),d(),r(14,"div",2),n(15,`
        `),r(16,"code-box",3),n(17,`
          `),m(18,"chart-number-info-theme"),n(19,`
        `),d(),n(20,`
      `),d()()()),e&2&&(c("codes",o.codes)("item",o.item),i(),c("nzGutter",16),i(3),c("item",o.codes[0]),v("id",o.codes[0].id),i(5),c("item",o.codes[2]),v("id",o.codes[2].id),i(7),c("item",o.codes[1]),v("id",o.codes[1].id))},dependencies:[D,Ze,Qe,Je,G,k,I],encapsulation:2})};var sa=a=>({"background-color":a});function pa(a,t){a&1&&(n(0,`
  `),m(1,"nz-skeleton"),n(2,`
`))}function ha(a,t){if(a&1&&(U(0),n(1,`
            `),m(2,"div",5),n(3,`
          `),q()),a&2){let e=x(3);i(2),c("innerHTML",e.subTitle,Qt)}}function ua(a,t){if(a&1&&(n(0,`
        `),r(1,"h4",3),n(2,`
          `),P(3,ha,4,1,"ng-container",4),n(4,`
        `),d(),n(5,`
      `)),a&2){let e=x(2);i(3),c("nzStringTemplateOutlet",e.subTitle)}}function fa(a,t){if(a&1&&(U(0),n(1,`
            `),m(2,"div",5),n(3,`
          `),q()),a&2){let e=x(3);i(2),c("innerHTML",e.total,Qt)}}function ga(a,t){if(a&1&&(n(0,`
        `),r(1,"div",6),n(2,`
          `),P(3,fa,4,1,"ng-container",4),n(4,`
        `),d(),n(5,`
      `)),a&2){let e=x(2);i(3),c("nzStringTemplateOutlet",e.total)}}function Ca(a,t){if(a&1&&(n(0,`
    `),r(1,"div",2),n(2,`
      `),_(3,ua,6,1),_(4,ga,6,1),d(),n(5,`
  `)),a&2){let e=x();i(3),S(e.subTitle?3:-1),i(),S(e.total?4:-1)}}function va(a,t){if(a&1){let e=kt();n(0,`
      `),r(1,"li",8),M("click",function(){let s=ft(e).$index,p=x(2);return gt(p._click(s))}),n(2,`
        `),m(3,"span",9),n(4,`
        `),r(5,"span",10),n(6),d(),n(7,`
        `),m(8,"nz-divider",11),n(9,`
        `),r(10,"span",12),n(11),d(),n(12,`
        `),m(13,"span",13),n(14,`
      `),d(),n(15,`
    `)}if(a&2){let e=t.$implicit,o=x(2);i(3),it(mt(5,sa,e.checked?e.color:"#aaa")),i(3),L(e.x),i(5),Nt("",e.percent,"%"),i(2),c("innerHTML",o.valueFormat?o.valueFormat(e.y):e.y,Qt)}}function ya(a,t){if(a&1&&(n(0,`
  `),r(1,"ul",7),n(2,`
    `),Tt(3,va,16,7,null,null,Dt),d(),n(5,`
`)),a&2){let e=x();i(3),zt(e.legendData)}}var Ht=class a extends et{percentColor;legendData=[];isPercent=!1;animate=!0;color="rgba(24, 144, 255, 0.85)";subTitle;total;height=0;hasLegend=!1;inner=.75;padding=[12,0,12,0];percent;tooltip=!0;lineWidth=0;blockMaxWidth=380;select=!0;valueFormat;data=[];colors;interaction="none";ratio={text:"\u5360\u6BD4",inverse:"\u53CD\u6BD4",color:"",inverseColor:"#F0F2F5"};clickItem=new nt;block=!1;fixData(){let{percent:t,color:e}=this;if(this.isPercent=t!=null,!this.isPercent)return;this.select=!1,this.tooltip=!1;let{text:o,inverse:s,color:p,inverseColor:u}=this.ratio;this.percentColor=T=>T===o?p??e:u,this.data=[{x:o,y:t},{x:s,y:100-t}]}updateBlock(){this.block=this._chart&&this.hasLegend&&this.el.nativeElement.clientWidth<=this.blockMaxWidth,this.cdr.detectChanges()}install(){let{node:t,height:e,padding:o,tooltip:s,inner:p,hasLegend:u,interaction:T,theme:N,animate:C,lineWidth:y,isPercent:j,percentColor:W,colors:w}=this,$=this._chart=new this.winG2.Chart({container:t.nativeElement,autoFit:!0,height:e,padding:o,theme:N});$.animate(C),s?$.tooltip({showTitle:!1,showMarkers:!1}):$.tooltip(!1),T!=="none"&&$.interaction(T),$.axis(!1).legend(!1).coordinate("theta",{innerRadius:p}),$.filter("x",(F,z)=>z.checked!==!1),$.interval().adjust("stack").position("y").style({lineWidth:y,stroke:"#fff"}).color("x",j?W:w).tooltip("x*percent",(F,z)=>({name:F,value:`${u?z:(z*100).toFixed(2)} %`})).state({}),$.scale({x:{type:"cat",range:[0,1]}}),$.on("interval:click",F=>{this.ngZone.run(()=>this.clickItem.emit({item:F.data?.data,ev:F}))}).on("afterrender",()=>{this.ngZone.run(()=>this.updateBlock())}),this.ready.next($),this.changeData(),$.render()}changeData(){let{_chart:t,data:e}=this;if(!t||!Array.isArray(e)||e.length<=0)return;let o=e.reduce((s,p)=>s+p.y,0);for(let s of e)s.percent=o===0?0:s.y/o;t.changeData(e),this.ngZone.run(()=>this.genLegend())}genLegend(){let{hasLegend:t,isPercent:e,cdr:o,_chart:s}=this;!t||e||(this.legendData=s.geometries[0].dataArray.map(p=>{let u=p[0]._origin;return u.color=p[0].color,u.checked=!0,u.percent=(u.percent*100).toFixed(2),u}),o.detectChanges())}_click(t){let{legendData:e,_chart:o}=this;e[t].checked=!e[t].checked,o.render(!0)}onChanges(){this.fixData()}static \u0275fac=(()=>{let t;return function(o){return(t||(t=Z(a)))(o||a)}})();static \u0275cmp=l({type:a,selectors:[["g2-pie"]],hostVars:8,hostBindings:function(e,o){e&2&&g("g2-pie",!0)("g2-pie__legend-has",o.hasLegend)("g2-pie__legend-block",o.block)("g2-pie__mini",o.isPercent)},inputs:{animate:[2,"animate","animate",H],color:"color",subTitle:"subTitle",total:"total",height:[2,"height","height",b],hasLegend:[2,"hasLegend","hasLegend",H],inner:"inner",padding:"padding",percent:[2,"percent","percent",b],tooltip:[2,"tooltip","tooltip",H],lineWidth:[2,"lineWidth","lineWidth",b],blockMaxWidth:[2,"blockMaxWidth","blockMaxWidth",b],select:[2,"select","select",H],valueFormat:"valueFormat",data:"data",colors:"colors",interaction:"interaction",ratio:"ratio"},outputs:{clickItem:"clickItem"},exportAs:["g2Pie"],features:[Q],decls:9,vars:3,consts:[["container",""],[1,"g2-pie__chart"],[1,"g2-pie__total"],[1,"g2-pie__total-title"],[4,"nzStringTemplateOutlet"],[3,"innerHTML"],[1,"g2-pie__total-stat"],[1,"g2-pie__legend"],[1,"g2-pie__legend-item",3,"click"],[1,"g2-pie__legend-dot"],[1,"g2-pie__legend-title"],["nzType","vertical"],[1,"g2-pie__legend-percent"],[1,"g2-pie__legend-value",3,"innerHTML"]],template:function(e,o){e&1&&(_(0,pa,3,0),r(1,"div",1),n(2,`
  `),m(3,"div",null,0),n(5,`
  `),_(6,Ca,6,2),d(),n(7,`
`),_(8,ya,6,0)),e&2&&(S(o.loaded?-1:0),i(6),S(o.subTitle||o.total?6:-1),i(2),S(o.hasLegend&&o.legendData.length>0?8:-1))},dependencies:[ct,rt,Xn],encapsulation:2,changeDetection:0})};var ba=[Ht],ee=class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=E({type:a});static \u0275inj=B({imports:[A,to,dt,lt,ba]})};var xa=["pie"],Ke=class a{constructor(t){this.msg=t;this.refresh()}pie;salesPieData=[];total="";refresh(){let t=(e=0,o=5e3)=>Math.floor(Math.random()*(o-e+1)+e);this.salesPieData=[{x:"\u5BB6\u7528\u7535\u5668",y:t()},{x:"\u98DF\u7528\u9152\u6C34",y:t()},{x:"\u4E2A\u62A4\u5065\u5EB7",y:t()},{x:"\u670D\u9970\u7BB1\u5305",y:t()},{x:"\u6BCD\u5A74\u4EA7\u54C1",y:t()}],Math.random()>.5&&this.salesPieData.push({x:"\u5176\u4ED6",y:t()}),this.total=`&yen ${this.salesPieData.reduce((e,o)=>o.y+e,0).toFixed(2)}`,this.pie&&setTimeout(()=>this.pie.changeData())}format(t){return`&yen ${t.toFixed(2)}`}handleClick(t){this.msg.info(`${t.item.x} - ${t.item.y}`)}static \u0275fac=function(e){return new(e||a)(Ct(tt))};static \u0275cmp=l({type:a,selectors:[["chart-pie-basic"]],viewQuery:function(e,o){if(e&1&&he(xa,5),e&2){let s;ue(s=fe())&&(o.pie=s.first)}},decls:7,vars:4,consts:[["pie",""],["nz-button","","nzType","primary",3,"click"],["title","\u9500\u552E\u989D","subTitle","\u9500\u552E\u989D","height","294","repaint","false",3,"clickItem","hasLegend","total","valueFormat","data"]],template:function(e,o){if(e&1){let s=kt();n(0,`
    `),r(1,"button",1),M("click",function(){return ft(s),gt(o.refresh())}),n(2,"Refresh"),d(),n(3,`
    `),r(4,"g2-pie",2,0),M("clickItem",function(u){return ft(s),gt(o.handleClick(u))}),d(),n(6,`
  `)}e&2&&(i(4),c("hasLegend",!0)("total",o.total)("valueFormat",o.format)("data",o.salesPieData))},dependencies:[X,K,J,Y,ee,Ht],encapsulation:2})};var Xe=class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["chart-pie-mini"]],decls:6,vars:0,consts:[[2,"width","200px","display","inline-block"],["percent","28","subTitle","\u4E2D\u5F0F\u5FEB\u9910","total","28%","height","130"]],template:function(e,o){e&1&&(n(0,`
    `),r(1,"div",0),n(2,`
      `),m(3,"g2-pie",1),n(4,`
    `),d(),n(5,`
  `))},dependencies:[ee,Ht],encapsulation:2})};var tn=class a{item={cols:1,urls:{"zh-CN":"packages/chart/pie/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u7528\u4E8E\u663E\u793A\u8DDF\u901F\u5EA6\u76F8\u5173\u56FE\u5F62\u518D\u9002\u5408\u4E0D\u8FC7\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-pie"><a class="lake-link"><i data-anchor="g2-pie"></i></a>g2-pie</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[animate]</code></td><td>\u662F\u5426\u663E\u793A\u52A8\u753B</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[color]</code></td><td>\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>rgba(24, 144, 255, 0.85)</code></td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[hasLegend]</code></td><td>\u662F\u5426\u663E\u793A legend</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[padding]</code></td><td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td><td><code>number[]</code></td><td><code>[12, 0, 12, 0]</code></td></tr><tr><td><code>[percent]</code></td><td>\u5360\u6BD4</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[lineWidth]</code></td><td>\u8FB9\u6846\u7C97\u7EC6</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[inner]</code></td><td>\u5185\u90E8\u6781\u5750\u6807\u7CFB\u7684\u534A\u5F84</td><td><code>number</code></td><td><code>0.75</code></td></tr><tr><td><code>[blockMaxWidth]</code></td><td>\u591A\u5C11\u5BBD\u5EA6\u4E3A\u5757\u663E\u793A</td><td><code>number</code></td><td><code>380</code></td></tr><tr><td><code>[tooltip]</code></td><td>\u662F\u5426\u663E\u793A tooltip</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[subTitle]</code></td><td>\u56FE\u8868\u5B50\u6807\u9898</td><td><code>string,TemplateRef&lt;void><void></code></td><td>-</td></tr><tr><td><code>[total]</code></td><td>\u603B\u91CF</td><td><code>string,number,TemplateRef&lt;void><void></code></td><td>-</td></tr><tr><td><code>[valueFormat]</code></td><td>y\u8F74\u683C\u5F0F\u5316</td><td><code>(y: number) => string</code></td><td>-</td></tr><tr><td><code>[data]</code></td><td>\u6570\u636E</td><td><code>G2PieData[]</code></td><td>-</td></tr><tr><td><code>[colors]</code></td><td>\u989C\u8272\u5217\u8868</td><td><code>string[]</code></td><td>-</td></tr><tr><td><code>[interaction]</code></td><td>\u4EA4\u4E92\u7C7B\u578B\uFF0Cnone \u65E0 element-active \u56FE\u5F62\u5143\u7D20\uFF0Cactive-region \u56FE\u8868\u7EC4\u4EF6\uFF0Cbrush \u6846\u9009\uFF0Cdrag-move \u79FB\u52A8</td><td><code>InteractionType</code></td><td><code>none</code></td></tr><tr><td><code>[ratio]</code></td><td>\u767E\u5206\u6BD4\u914D\u7F6E\u9879</td><td><code>G2PieRatio</code></td><td><code>{ text: '\u5360\u6BD4', inverse: '\u53CD\u6BD4', color: '', inverseColor: '#F0F2F5' }</code></td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(clickItem)</code></td><td>\u70B9\u51FB\u9879\u56DE\u8C03</td><td><code>EventEmitter&lt;G2PieClickItem></code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table><h3 id="G2PieData"><a class="lake-link"><i data-anchor="G2PieData"></i></a>G2PieData</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[x]</code></td><td>x\u8F74</td><td><code>any</code></td><td>-</td></tr><tr><td><code>[y]</code></td><td>y\u8F74</td><td><code>number</code></td><td>-</td></tr></tbody></table>`,meta:{title:"g2-pie",subtitle:"\u997C\u72B6\u56FE",cols:1,type:"G2",module:"import { G2PieModule } from '@delon/chart/pie';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-pie",title:"g2-pie",h:3},{id:"G2PieData",title:"G2PieData",h:3}]}]}},demo:!0};codes=[{id:"chart-pie-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E1D\u6ED1\u66F4\u65B0\u6570\u636E\u7684\u5224\u65AD\u6807\u51C6\u662F\u4EE5\u53EA\u66F4\u65B0 <code>data</code> \u4E3A\u51C6\uFF0C\u8FD9\u91CC\u5229\u7528 <code>repaint</code> \u8FDB\u884C\u624B\u52A8\u8C03\u7528 <code>changeData</code> \u6539\u53D8\u6570\u636E\u8FBE\u5230\u4E1D\u6ED1\u66F4\u65B0\u7684\u6548\u679C\u3002</p>",code:`import { Component, ViewChild } from '@angular/core';

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
export class ChartPieMiniComponent {}`,lang:"ts",componentName:"ChartPieMiniComponent",point:1,name:"mini",urls:"packages/chart/pie/demo/mini.md",type:"demo"}];static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["app-chart-pie"]],hostVars:2,hostBindings:function(e,o){e&2&&g("d-block","true")},decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,o){e&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),n(3,`
        `),r(4,"code-box",3),n(5,`
          `),m(6,"chart-pie-basic"),n(7,`
        `),d(),n(8,`
      
        `),r(9,"code-box",3),n(10,`
          `),m(11,"chart-pie-mini"),n(12,`
        `),d(),n(13,`
      `),d()()()),e&2&&(c("codes",o.codes)("item",o.item),i(),c("nzGutter",16),i(3),c("item",o.codes[0]),v("id",o.codes[0].id),i(5),c("item",o.codes[1]),v("id",o.codes[1].id))},dependencies:[D,Ke,Xe,G,k,I],encapsulation:2})};var Ma=a=>({"background-color":a});function Da(a,t){a&1&&(n(0,`
  `),m(1,"nz-skeleton"),n(2,`
`))}function Ta(a,t){if(a&1&&(U(0),n(1,`
  `),r(2,"h4"),n(3),d(),n(4,`
`),q()),a&2){let e=x();i(3),L(e.title)}}function za(a,t){if(a&1){let e=kt();n(0,`
      `),r(1,"div",3),M("click",function(){let s=ft(e).$index,p=x(2);return gt(p._click(s))}),n(2,`
        `),m(3,"i",4),n(4),r(5,"h6",5),n(6),d(),n(7,`
      `),d(),n(8,`
    `)}if(a&2){let e=t.$implicit,o=x(2);i(),c("nzSpan",24/o.legendData.length),i(2),it(mt(5,Ma,e.checked?e.color:"#aaa")),i(),Nt(`
        `,e.name,`
        `),i(2),L(e.value)}}function ka(a,t){if(a&1&&(n(0,`
  `),r(1,"div",2),n(2,`
    `),Tt(3,za,9,7,null,null,Dt),d(),n(5,`
`)),a&2){let e=x();i(3),zt(e.legendData)}}var ne=class a extends et{legendData=[];title;height=0;padding=[44,30,16,30];hasLegend=!0;tickCount=4;data=[];colors=["#1890FF","#FACC14","#2FC25B","#8543E0","#F04864","#13C2C2","#fa8c16","#a0d911"];clickItem=new nt;getHeight(){return this.height-(this.hasLegend?80:22)}install(){let{node:t,padding:e,theme:o,tickCount:s}=this,p=this._chart=new this.winG2.Chart({container:t.nativeElement,autoFit:!0,height:this.getHeight(),padding:e,theme:o});p.coordinate("polar"),p.legend(!1),p.axis("label",{line:null,label:{offset:8},grid:{line:{style:{stroke:"#e9e9e9",lineWidth:1,lineDash:[0,0]}}}}),p.axis("value",{grid:{line:{type:"polygon",style:{stroke:"#e9e9e9",lineWidth:1,lineDash:[0,0]}}}}),p.scale({value:{min:0,tickCount:s}}),p.filter("name",u=>{let T=this.legendData.find(N=>N.name===u);return T?T.checked!==!1:!0}),p.line().position("label*value").color("name",this.colors),p.point().position("label*value").shape("circle").size(3),p.on("point:click",u=>{this.ngZone.run(()=>this.clickItem.emit({item:u.data?.data,ev:u}))}),this.ready.next(p),this.changeData(),p.render()}changeData(){let{_chart:t,data:e}=this;!t||!Array.isArray(e)||e.length<=0||(t.changeData(e),this.ngZone.run(()=>this.genLegend()))}genLegend(){let{hasLegend:t,cdr:e,_chart:o}=this;t&&(this.legendData=o.geometries[0].dataArray.map(s=>({name:s[0]._origin.name,color:s[0].color,checked:!0,value:s.reduce((T,N)=>T+N._origin.value,0)})),e.detectChanges())}_click(t){let{legendData:e,_chart:o}=this;e[t].checked=!e[t].checked,o.render(!0)}onChanges(){this.legendData.forEach(t=>t.checked=!0)}static \u0275fac=(()=>{let t;return function(o){return(t||(t=Z(a)))(o||a)}})();static \u0275cmp=l({type:a,selectors:[["g2-radar"]],hostVars:4,hostBindings:function(e,o){e&2&&(ot("height",o.height,"px"),g("g2-radar",!0))},inputs:{title:"title",height:[2,"height","height",b],padding:"padding",hasLegend:[2,"hasLegend","hasLegend",H],tickCount:[2,"tickCount","tickCount",b],data:"data",colors:"colors"},outputs:{clickItem:"clickItem"},exportAs:["g2Radar"],features:[Q],decls:7,vars:3,consts:[["container",""],[4,"nzStringTemplateOutlet"],["nz-row","",1,"g2-radar__legend"],["nz-col","",1,"g2-radar__legend-item",3,"click","nzSpan"],[1,"g2-radar__legend-dot"],[1,"g2-radar__legend-title"]],template:function(e,o){e&1&&(_(0,Da,3,0),P(1,Ta,5,1,"ng-container",1),n(2,`
`),m(3,"div",null,0),n(5,`
`),_(6,ka,6,0)),e&2&&(S(o.loaded?-1:0),i(),c("nzStringTemplateOutlet",o.title),i(5),S(o.hasLegend?6:-1))},dependencies:[ct,rt,k,G],encapsulation:2,changeDetection:0})};var Na=[ne],en=class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=E({type:a});static \u0275inj=B({imports:[A,so,dt,lt,Na]})};var nn=class a{constructor(t){this.msg=t;this.refresh()}radarData=[];refresh(){let t=(p=1,u=10)=>Math.floor(Math.random()*(u-p+1)+p),e=["\u4E2A\u4EBA","\u56E2\u961F","\u90E8\u95E8"].map(p=>({name:p,ref:t(),koubei:t(),output:t(),contribute:t(),hot:t()})),o={ref:"\u5F15\u7528",koubei:"\u53E3\u7891",output:"\u4EA7\u91CF",contribute:"\u8D21\u732E",hot:"\u70ED\u5EA6"};Math.random()>.5&&delete o.hot;let s=[];e.forEach(p=>{Object.keys(p).forEach(u=>{u!=="name"&&s.push({name:p.name,label:o[u],value:p[u]})})}),this.radarData=s}handleClick(t){this.msg.info(`${t.item.label} - ${t.item.name} - ${t.item.value}`)}static \u0275fac=function(e){return new(e||a)(Ct(tt))};static \u0275cmp=l({type:a,selectors:[["chart-radar-basic"]],decls:6,vars:2,consts:[["nz-button","","nzType","primary",3,"click"],["height","286",3,"clickItem","hasLegend","data"]],template:function(e,o){e&1&&(n(0,`
    `),r(1,"button",0),M("click",function(){return o.refresh()}),n(2,"Refresh"),d(),n(3,`
    `),r(4,"g2-radar",1),M("clickItem",function(p){return o.handleClick(p)}),d(),n(5,`
  `)),e&2&&(i(4),c("hasLegend",!0)("data",o.radarData))},dependencies:[X,K,J,Y,en,ne],encapsulation:2})};var on=class a{item={cols:1,urls:{"zh-CN":"packages/chart/radar/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u96F7\u8FBE\u56FE\u662F\u4EE5\u76F8\u540C\u70B9\u5F00\u59CB\u7684\u8F74\u4E0A\u8868\u793A\u7684\u4E09\u4E2A\u6216\u66F4\u591A\u4E2A\u5B9A\u91CF\u53D8\u91CF\u7684\u4E8C\u7EF4\u56FE\u5F62\u7684\u5F62\u5F0F\u663E\u793A\u591A\u53D8\u91CF\u6570\u636E\u7684\u56FE\u5F62\u65B9\u6CD5\u3002\u8F74\u7684\u76F8\u5BF9\u4F4D\u7F6E\u548C\u89D2\u5EA6\u901A\u5E38\u662F\u4E0D\u77E5\u60C5\u7684\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-radar"><a class="lake-link"><i data-anchor="g2-radar"></i></a>g2-radar</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[title]</code></td><td>\u56FE\u8868\u6807\u9898</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[hasLegend]</code></td><td>\u662F\u5426\u663E\u793A legend</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[padding]</code></td><td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td><td><code>array</code></td><td><code>[24, 30, 16, 30]</code></td></tr><tr><td><code>[colors]</code></td><td>\u989C\u8272\u5217\u8868</td><td><code>string[]</code></td><td>-</td></tr><tr><td><code>[data]</code></td><td>\u6570\u636E</td><td><code>G2RadarData[]</code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(clickItem)</code></td><td>\u70B9\u51FB\u9879\u56DE\u8C03</td><td><code>EventEmitter&lt;G2RadarClickItem></code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table><h3 id="G2RadarData"><a class="lake-link"><i data-anchor="G2RadarData"></i></a>G2RadarData</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[name]</code></td><td>\u540D\u79F0</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[label]</code></td><td>\u6807\u7B7E</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[value]</code></td><td>\u503C</td><td><code>number</code></td><td>-</td></tr></tbody></table>',meta:{title:"g2-radar",subtitle:"\u96F7\u8FBE\u56FE",cols:1,type:"G2",module:"import { G2RadarModule } from '@delon/chart/radar';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-radar",title:"g2-radar",h:3},{id:"G2RadarData",title:"G2RadarData",h:3}]}]}},demo:!0};codes=[{id:"chart-radar-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Component } from '@angular/core';

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
}`,lang:"ts",componentName:"ChartRadarBasicComponent",point:0,name:"basic",urls:"packages/chart/radar/demo/basic.md",type:"demo"}];static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["app-chart-radar"]],hostVars:2,hostBindings:function(e,o){e&2&&g("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,o){e&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),n(3,`
        `),r(4,"code-box",3),n(5,`
          `),m(6,"chart-radar-basic"),n(7,`
        `),d(),n(8,`
      `),d()()()),e&2&&(c("codes",o.codes)("item",o.item),i(),c("nzGutter",16),i(3),c("item",o.codes[0]),v("id",o.codes[0].id))},dependencies:[D,nn,G,k,I],encapsulation:2})};var de=class a extends et{plusColor="#40a9ff";minusColor="#ff4d4f";height=60;barSize=30;min=0;max=100;value=0;line=!1;format;padding=0;textStyle={fontSize:12,color:"#595959"};install(){let{el:t,height:e,padding:o,textStyle:s,line:p,format:u,theme:T,min:N,max:C,plusColor:y,minusColor:j,barSize:W}=this,w=this._chart=new this.winG2.Chart({container:t.nativeElement,autoFit:!0,height:e,padding:o,theme:T});w.legend(!1),w.axis(!1),w.scale({value:{max:C,min:N}}),w.tooltip(!1),w.coordinate().transpose(),w.interval().position("1*value").color("value",$=>$>0?y:j).size(W).label("value",()=>({formatter:u,style:Mt({},s)})),p&&w.annotation().line({start:["50%","0%"],end:["50%","100%"],style:{stroke:"#e8e8e8",lineDash:[0,0]}}),this.ready.next(w),this.changeData(),w.render()}onlyChangeData=t=>Object.keys(t).length===1&&!!t.value;changeData(){let{_chart:t,value:e}=this;t&&t.changeData([{value:e}])}static \u0275fac=(()=>{let t;return function(o){return(t||(t=Z(a)))(o||a)}})();static \u0275cmp=l({type:a,selectors:[["g2-single-bar"]],hostVars:2,hostBindings:function(e,o){e&2&&ot("height",o.height,"px")},inputs:{plusColor:"plusColor",minusColor:"minusColor",height:[2,"height","height",b],barSize:[2,"barSize","barSize",b],min:[2,"min","min",b],max:[2,"max","max",b],value:[2,"value","value",b],line:[2,"line","line",H],format:"format",padding:"padding",textStyle:"textStyle"},exportAs:["g2SingleBar"],features:[Q],decls:0,vars:0,template:function(e,o){},encapsulation:2,changeDetection:0})};var an=class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=E({type:a});static \u0275inj=B({imports:[A]})};function Sa(a,t){if(a&1&&(n(0,`
          `),r(1,"tr"),n(2,`
            `),r(3,"td"),n(4),d(),n(5,`
            `),r(6,"td"),n(7,`
              `),m(8,"g2-single-bar",3),n(9,`
            `),d(),n(10,`
            `),r(11,"td"),n(12,`
              `),m(13,"g2-single-bar",4),n(14,`
            `),d(),n(15,`
          `),d(),n(16,`
        `)),a&2){let e=t.$implicit,o=t.$index;i(4),L(o+1),i(4),c("value",e.value),i(5),c("value",e.other)}}var rn=class a{list=new Array(5).fill({}).map(()=>({id:Math.floor(Math.random()*1e4),value:Math.floor(Math.random()*100),other:Math.floor(Math.random()*100)>50?Math.floor(Math.random()*100):-Math.floor(Math.random()*100)}));refresh(){this.list.forEach(t=>{t.value=Math.floor(Math.random()*100),t.other=Math.floor(Math.random()*100)>50?Math.floor(Math.random()*100):-Math.floor(Math.random()*100)})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["chart-single-bar-basic"]],decls:27,vars:2,consts:[["nz-button","","nzType","primary",3,"click"],[3,"nzData","nzShowPagination"],["nzWidth","350px"],["height","24",3,"value"],["height","60","min","-100","line","",3,"value"]],template:function(e,o){e&1&&(n(0,`
    `),r(1,"button",0),M("click",function(){return o.refresh()}),n(2,"Refresh"),d(),n(3,`
    `),r(4,"nz-table",1),n(5,`
      `),r(6,"thead"),n(7,`
        `),r(8,"tr"),n(9,`
          `),r(10,"th"),n(11,"\u5E8F\u53F7"),d(),n(12,`
          `),r(13,"th",2),n(14,"\u670D\u52A1\u8C03\u7528\u6B21\u6570"),d(),n(15,`
          `),r(16,"th",2),n(17,"\u6570\u636E\u6709\u8D1F\u503C"),d(),n(18,`
        `),d(),n(19,`
      `),d(),n(20,`
      `),r(21,"tbody"),n(22,`
        `),Tt(23,Sa,17,3,null,null,Dt),d(),n(25,`
    `),d(),n(26,`
  `)),e&2&&(i(4),c("nzData",o.list)("nzShowPagination",!1),i(19),zt(o.list))},dependencies:[X,K,J,Y,mo,ro,oo,ao,lo,io,co,an,de],styles:["[_nghost-%COMP%]     .ant-table tbody>tr>td{padding:0}"]})};var dn=class a{item={cols:1,urls:{"zh-CN":"packages/chart/single-bar/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u5355\u4E00\u67F1\u72B6\u56FE\u66F4\u9002\u5408\u5728\u5217\u8868\u4E2D\u5C55\u793A\u7B80\u5355\u7684\u533A\u95F4\u6570\u636E\uFF0C\u7B80\u6D01\u7684\u8868\u73B0\u65B9\u5F0F\u53EF\u4EE5\u5F88\u597D\u7684\u51CF\u5C11\u5927\u6570\u636E\u91CF\u7684\u89C6\u89C9\u5C55\u73B0\u538B\u529B\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-single-bar"><a class="lake-link"><i data-anchor="g2-single-bar"></i></a>g2-single-bar</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[plusColor]</code></td><td>\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>#40a9ff</code></td></tr><tr><td><code>[minusColor]</code></td><td>\u8D1F\u503C\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>#ff4d4f</code></td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td><code>60</code></td></tr><tr><td><code>[barSize]</code></td><td>\u67F1\u72B6\u9AD8\u5EA6</td><td><code>number</code></td><td><code>30</code></td></tr><tr><td><code>[min]</code></td><td>\u6700\u5C0F\u503C</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[max]</code></td><td>\u6700\u5927\u503C\uFF0C\u82E5\u5C0F\u4E8E0\u8868\u793A\u663E\u793A\u8D1F\u503C</td><td><code>number</code></td><td><code>100</code></td></tr><tr><td><code>[padding]</code></td><td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td><td><code>any</code></td><td><code>0</code></td></tr><tr><td><code>[value]</code></td><td>\u503C</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[format]</code></td><td>\u663E\u793A\u503C\u683C\u5F0F</td><td><code>(value: number) => string</code></td><td>-</td></tr><tr><td><code>[textStyle]</code></td><td>\u663E\u793A\u503C\u6837\u5F0F</td><td><code>any</code></td><td><code>{ fontSize: 12, color: '#595959' }</code></td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table>`,meta:{title:"g2-single-bar",subtitle:"\u5355\u4E00\u67F1\u72B6\u56FE",cols:1,type:"G2",module:"import { G2SingleBarModule } from '@delon/chart/single-bar';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-single-bar",title:"g2-single-bar",h:3}]}]}},demo:!0};codes=[{id:"chart-single-bar-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Component, ViewEncapsulation } from '@angular/core';

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
}`,lang:"ts",componentName:"ChartSingleBarBasicComponent",point:0,name:"basic",urls:"packages/chart/single-bar/demo/basic.md",type:"demo"}];static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["app-chart-single-bar"]],hostVars:2,hostBindings:function(e,o){e&2&&g("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,o){e&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),n(3,`
        `),r(4,"code-box",3),n(5,`
          `),m(6,"chart-single-bar-basic"),n(7,`
        `),d(),n(8,`
      `),d()()()),e&2&&(c("codes",o.codes)("item",o.item),i(),c("nzGutter",16),i(3),c("item",o.codes[0]),v("id",o.codes[0].id))},dependencies:[D,rn,G,k,I],encapsulation:2})};function Ia(a,t){a&1&&(n(0,`
    `),m(1,"nz-skeleton"),n(2,`
  `))}var oe=class a extends et{width=0;height=200;padding=0;data=[];clickItem=new nt;initTagCloud(){let t=this.winG2;t.registerShape("point","cloud",{draw(e,o){let s=e.data,p=o.addShape({type:"text",name:"tag-cloud-text",attrs:Pn(Mt({},e.style),{fontSize:s.size,text:s.text,textAlign:"center",fontFamily:s.font,fill:e.color,textBaseline:"Alphabetic",x:e.x,y:e.y})});return s.rotate&&t.Util.rotate(p,s.rotate*Math.PI/180),p}})}install(){this.initTagCloud();let{el:t,padding:e,theme:o}=this;this.height===0&&(this.height=this.el.nativeElement.clientHeight),this.width===0&&(this.width=this.el.nativeElement.clientWidth);let s=this._chart=new this.winG2.Chart({container:t.nativeElement,autoFit:!1,padding:e,height:this.height,width:this.width,theme:o});s.scale({x:{nice:!1},y:{nice:!1}}),s.legend(!1),s.axis(!1),s.tooltip({showTitle:!1,showMarkers:!1}),s.coordinate().reflect(),s.point().position("x*y").color("text").shape("cloud").state({active:{style:{fillOpacity:.4}}}),s.interaction("element-active"),s.on("tag-cloud-text:click",p=>{this.ngZone.run(()=>this.clickItem.emit({item:p.data?.data,ev:p}))}),this.ready.next(s),this.changeData(),s.render()}changeData(){let{_chart:t,data:e}=this;if(!t||!Array.isArray(e)||e.length<=0)return;let o=new window.DataSet.View().source(e),s=o.range("value"),p=s[0],u=s[1];o.transform({type:"tag-cloud",fields:["name","value"],font:"Verdana",size:[this.width,this.height],padding:0,timeInterval:5e3,rotate(){let T=~~(Math.random()*4)%4;return T===2&&(T=0),T*90},fontSize(T){return(T.value-p)/(u-p)*24+8}}),t.changeData(o.rows)}installResizeEvent(){this.resize$=Ut(window,"resize").pipe(Fn(()=>!!this._chart),qt(200)).subscribe(()=>this.changeData())}onInit(){this.installResizeEvent()}static \u0275fac=(()=>{let t;return function(o){return(t||(t=Z(a)))(o||a)}})();static \u0275cmp=l({type:a,selectors:[["g2-tag-cloud"]],inputs:{width:[2,"width","width",b],height:[2,"height","height",b],padding:"padding",data:"data"},outputs:{clickItem:"clickItem"},exportAs:["g2TagCloud"],features:[Q],decls:1,vars:1,template:function(e,o){e&1&&_(0,Ia,3,0),e&2&&S(o.loaded?-1:0)},dependencies:[ct],encapsulation:2,changeDetection:0})};var Ba=[oe],cn=class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=E({type:a});static \u0275inj=B({imports:[A,lt,Ba]})};var ln=class a{constructor(t){this.msg=t;this.refresh()}tags=[];refresh(){let t=(e=1,o=10)=>Math.floor(Math.random()*(o-e+1)+e);this.tags=[{value:t(),name:"NG-ALAIN"},{value:t(),name:"AntV"},{value:t(),name:"F2"},{value:t(),name:"G2"},{value:t(),name:"G6"},{value:t(),name:"DataSet"},{value:t(),name:"\u58A8\u8005\u5B66\u9662"},{value:t(),name:"Analysis"},{value:t(),name:"Data Mining"},{value:t(),name:"Data Vis"},{value:t(),name:"Design"},{value:t(),name:"Grammar"},{value:t(),name:"Graphics"},{value:t(),name:"Graph"},{value:t(),name:"Hierarchy"},{value:t(),name:"Labeling"},{value:t(),name:"Layout"},{value:t(),name:"Quantitative"},{value:t(),name:"Relation"},{value:t(),name:"Statistics"},{value:t(),name:"\u53EF\u89C6\u5316"},{value:t(),name:"\u6570\u636E"},{value:t(),name:"\u6570\u636E\u53EF\u89C6\u5316"},{value:t(),name:"Arc Diagram"},{value:t(),name:"Bar Chart"},{value:t(),name:"Canvas"},{value:t(),name:"Chart"},{value:t(),name:"DAG"},{value:t(),name:"DG"},{value:t(),name:"Facet"},{value:t(),name:"Geo"},{value:t(),name:"Line"},{value:t(),name:"MindMap"},{value:t(),name:"Pie"},{value:t(),name:"Pizza Chart"},{value:t(),name:"Punch Card"},{value:t(),name:"SVG"},{value:t(),name:"Sunburst"},{value:t(),name:"Tree"},{value:t(),name:"UML"},{value:t(),name:"Chart"},{value:t(),name:"View"},{value:t(),name:"Geom"},{value:t(),name:"Shape"},{value:t(),name:"Scale"},{value:t(),name:"Animate"},{value:t(),name:"Global"},{value:t(),name:"Slider"},{value:t(),name:"Connector"},{value:t(),name:"Transform"},{value:t(),name:"Util"},{value:t(),name:"DomUtil"},{value:t(),name:"MatrixUtil"},{value:t(),name:"PathUtil"},{value:t(),name:"G"},{value:t(),name:"2D"},{value:t(),name:"3D"},{value:t(),name:"Line"},{value:t(),name:"Area"},{value:t(),name:"Interval"},{value:t(),name:"Schema"},{value:t(),name:"Edge"},{value:t(),name:"Polygon"},{value:t(),name:"Heatmap"},{value:t(),name:"Render"},{value:t(),name:"Tooltip"},{value:t(),name:"Axis"},{value:t(),name:"Guide"},{value:t(),name:"Coord"},{value:t(),name:"Legend"},{value:t(),name:"Path"},{value:t(),name:"Helix"},{value:t(),name:"Theta"},{value:t(),name:"Rect"},{value:t(),name:"Polar"},{value:t(),name:"Dsv"},{value:t(),name:"Csv"},{value:t(),name:"Tsv"},{value:t(),name:"GeoJSON"},{value:t(),name:"TopoJSON"},{value:t(),name:"Filter"},{value:t(),name:"Map"},{value:t(),name:"Pick"},{value:t(),name:"Rename"},{value:t(),name:"Filter"},{value:t(),name:"Map"},{value:t(),name:"Pick"},{value:t(),name:"Rename"},{value:t(),name:"Reverse"},{value:t(),name:"sort"},{value:t(),name:"Subset"},{value:t(),name:"Partition"},{value:t(),name:"Imputation"},{value:t(),name:"Fold"},{value:t(),name:"Aggregate"},{value:t(),name:"Proportion"},{value:t(),name:"Histogram"},{value:t(),name:"Quantile"},{value:t(),name:"Treemap"},{value:t(),name:"Hexagon"},{value:t(),name:"Binning"},{value:t(),name:"kernel"},{value:t(),name:"Regression"},{value:t(),name:"Density"},{value:t(),name:"Sankey"},{value:t(),name:"Voronoi"},{value:t(),name:"Projection"},{value:t(),name:"Centroid"},{value:t(),name:"H5"},{value:t(),name:"Mobile"},{value:t(),name:"K\u7EBF\u56FE"},{value:t(),name:"\u5173\u7CFB\u56FE"},{value:t(),name:"\u70DB\u5F62\u56FE"},{value:t(),name:"\u80A1\u7968\u56FE"},{value:t(),name:"\u76F4\u65B9\u56FE"},{value:t(),name:"\u91D1\u5B57\u5854\u56FE"},{value:t(),name:"\u5206\u9762"},{value:t(),name:"\u5357\u4E01\u683C\u5C14\u73AB\u7470\u56FE"},{value:t(),name:"\u997C\u56FE"},{value:t(),name:"\u7EBF\u56FE"},{value:t(),name:"\u70B9\u56FE"},{value:t(),name:"\u6563\u70B9\u56FE"},{value:t(),name:"\u5B50\u5F39\u56FE"},{value:t(),name:"\u67F1\u72B6\u56FE"},{value:t(),name:"\u4EEA\u8868\u76D8"},{value:t(),name:"\u6C14\u6CE1\u56FE"},{value:t(),name:"\u6F0F\u6597\u56FE"},{value:t(),name:"\u70ED\u529B\u56FE"},{value:t(),name:"\u7389\u73A6\u56FE"},{value:t(),name:"\u76F4\u65B9\u56FE"},{value:t(),name:"\u77E9\u5F62\u6811\u56FE"},{value:t(),name:"\u7BB1\u5F62\u56FE"},{value:t(),name:"\u8272\u5757\u56FE"},{value:t(),name:"\u87BA\u65CB\u56FE"},{value:t(),name:"\u8BCD\u4E91"},{value:t(),name:"\u8BCD\u4E91\u56FE"},{value:t(),name:"\u96F7\u8FBE\u56FE"},{value:t(),name:"\u9762\u79EF\u56FE"},{value:t(),name:"\u9A6C\u8D5B\u514B\u56FE"},{value:t(),name:"\u76D2\u987B\u56FE"},{value:t(),name:"\u5750\u6807\u8F74"},{value:t(),name:""},{value:t(),name:"Jacques Bertin"},{value:t(),name:"Leland Wilkinson"},{value:t(),name:"William Playfair"},{value:t(),name:"\u5173\u8054"},{value:t(),name:"\u5206\u5E03"},{value:t(),name:"\u533A\u95F4"},{value:t(),name:"\u5360\u6BD4"},{value:t(),name:"\u5730\u56FE"},{value:t(),name:"\u65F6\u95F4"},{value:t(),name:"\u6BD4\u8F83"},{value:t(),name:"\u6D41\u7A0B"},{value:t(),name:"\u8D8B\u52BF"},{value:t(),name:"\u4EA6\u53F6"},{value:t(),name:"\u518D\u98DE"},{value:t(),name:"\u5B8C\u767D"},{value:t(),name:"\u5DF4\u601D"},{value:t(),name:"\u5F20\u521D\u5C18"},{value:t(),name:"\u5FA1\u672F"},{value:t(),name:"\u6709\u7530"},{value:t(),name:"\u6C89\u9C7C"},{value:t(),name:"\u7389\u4F2F"},{value:t(),name:"\u753B\u5EB7"},{value:t(),name:"\u796F\u9038"},{value:t(),name:"\u7EDD\u4E91"},{value:t(),name:"\u7F57\u5BAA"},{value:t(),name:"\u8427\u5E86"},{value:t(),name:"\u8463\u73CA\u73CA"},{value:t(),name:"\u9646\u6C89"},{value:t(),name:"\u987E\u503E"},{value:t(),name:"Domo"},{value:t(),name:"GPL"},{value:t(),name:"PAI"},{value:t(),name:"SPSS"},{value:t(),name:"SYSTAT"},{value:t(),name:"Tableau"},{value:t(),name:"D3"},{value:t(),name:"Vega"},{value:t(),name:"\u7EDF\u8BA1\u56FE\u8868"}]}handleClick(t){this.msg.info(`${t.item.name} - ${t.item.value}`)}static \u0275fac=function(e){return new(e||a)(Ct(tt))};static \u0275cmp=l({type:a,selectors:[["chart-tag-cloud-basic"]],decls:6,vars:1,consts:[["nz-button","","nzType","primary",3,"click"],["height","400",3,"clickItem","data"]],template:function(e,o){e&1&&(n(0,`
    `),r(1,"button",0),M("click",function(){return o.refresh()}),n(2,"Refresh"),d(),n(3,`
    `),r(4,"g2-tag-cloud",1),M("clickItem",function(p){return o.handleClick(p)}),d(),n(5,`
  `)),e&2&&(i(4),c("data",o.tags))},dependencies:[X,K,J,Y,cn,oe],encapsulation:2})};var mn=class a{item={cols:1,urls:{"zh-CN":"packages/chart/tag-cloud/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u6807\u7B7E\u4E91\u662F\u4E00\u5957\u76F8\u5173\u7684\u6807\u7B7E\u4EE5\u53CA\u4E0E\u6B64\u76F8\u5E94\u7684\u6743\u91CD\u5C55\u793A\u65B9\u5F0F\uFF0C\u4E00\u822C\u5178\u578B\u7684\u6807\u7B7E\u4E91\u6709 30 \u81F3 150 \u4E2A\u6807\u7B7E\uFF0C\u800C\u6743\u91CD\u5F71\u54CD\u4F7F\u7528\u7684\u5B57\u4F53\u5927\u5C0F\u6216\u5176\u4ED6\u89C6\u89C9\u6548\u679C\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-tag-cloud"><a class="lake-link"><i data-anchor="g2-tag-cloud"></i></a>g2-tag-cloud</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>200</code></td></tr><tr><td><code>[height]</code></td><td>\u9AD8\u5EA6\u503C</td><td><code>number</code></td><td><code>200</code></td></tr><tr><td><code>[width]</code></td><td>\u5BBD\u5EA6\u503C\uFF0C\u82E5\u4E0D\u6307\u5B9A\u81EA\u52A8\u6309\u5BBF\u4E3B\u5143\u7D20\u7684\u5BBD\u5EA6</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[data]</code></td><td>\u6570\u636E</td><td><code>G2TagCloudData[]</code></td><td><code>[]</code></td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(clickItem)</code></td><td>\u70B9\u51FB\u9879\u56DE\u8C03</td><td><code>EventEmitter&lt;G2TagCloudClickItem></code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table><h3 id="G2TagCloudData"><a class="lake-link"><i data-anchor="G2TagCloudData"></i></a>G2TagCloudData</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[name]</code></td><td>\u540D\u79F0</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[value]</code></td><td>\u503C</td><td><code>number</code></td><td>-</td></tr></tbody></table>',meta:{title:"g2-tag-cloud",subtitle:"\u6807\u7B7E\u4E91",cols:1,type:"G2",module:"import { G2TagCloudModule } from '@delon/chart/tag-cloud';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-tag-cloud",title:"g2-tag-cloud",h:3},{id:"G2TagCloudData",title:"G2TagCloudData",h:3}]}]}},demo:!0};codes=[{id:"chart-tag-cloud-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Component } from '@angular/core';

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
}`,lang:"ts",componentName:"ChartTagCloudBasicComponent",point:0,name:"basic",urls:"packages/chart/tag-cloud/demo/basic.md",type:"demo"}];static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["app-chart-tag-cloud"]],hostVars:2,hostBindings:function(e,o){e&2&&g("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,o){e&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),n(3,`
        `),r(4,"code-box",3),n(5,`
          `),m(6,"chart-tag-cloud-basic"),n(7,`
        `),d(),n(8,`
      `),d()()()),e&2&&(c("codes",o.codes)("item",o.item),i(),c("nzGutter",16),i(3),c("item",o.codes[0]),v("id",o.codes[0].id))},dependencies:[D,ln,G,k,I],encapsulation:2})};function Ea(a,t){if(a&1&&(U(0),n(1,`
      `),r(2,"h4"),n(3),d(),n(4,`
    `),q()),a&2){let e=x();i(3),L(e.title)}}function Aa(a,t){a&1&&(n(0,`
      `),m(1,"nz-skeleton"),n(2,`
    `))}var pt=class a extends et{title;maxAxis=2;data=[];titleMap;colorMap={y1:"#5B8FF9",y2:"#5AD8A6",y3:"#5D7092",y4:"#F6BD16",y5:"#E86452"};mask="HH:mm";maskSlider="HH:mm";position="top";height=450;padding=[40,8,64,40];borderWidth=2;slider=!0;clickItem=new nt;onlyChangeData=t=>{let e=t.titleMap;return!(e&&!e.firstChange&&e.currentValue!==e.previousValue)};install(){let{node:t,height:e,padding:o,slider:s,maxAxis:p,theme:u,maskSlider:T}=this,N=this._chart=new this.winG2.Chart({container:t.nativeElement,autoFit:!0,height:e,padding:o,theme:u});N.axis("time",{title:null}),N.axis("y1",{title:null});for(let y=2;y<=p;y++)N.axis(`y${y}`,!1);N.line().position("time*y1");for(let y=2;y<=p;y++)N.line().position(`time*y${y}`);N.tooltip({showCrosshairs:!0,shared:!0});let C=Mt(Mt({},[]),o);C[0]=0,s&&N.option("slider",{height:26,start:0,end:1,trendCfg:{isArea:!1},minLimit:2,formatter:y=>at(y,T)}),N.on("plot:click",y=>{let j=this._chart.getSnapRecords({x:y.x,y:y.y});this.ngZone.run(()=>this.clickItem.emit({item:j[0]._origin,ev:y}))}),N.on("legend-item:click",y=>{let j=y?.target?.get("delegateObject").item,W=j?.id,w=N.geometries.find($=>$.getAttribute("position").getFields()[1]===W);w&&w.changeVisible(!j.unchecked)}),this.ready.next(N),this.changeData(),N.render()}changeData(){let{_chart:t,height:e,padding:o,mask:s,titleMap:p,position:u,colorMap:T,borderWidth:N,maxAxis:C}=this,y=[...this.data];if(!t||y.length<=0)return;let j=[...Array(C)].map((z,R)=>R+1);t.legend({position:u,custom:!0,items:j.map(z=>{let R=`y${z}`;return{id:R,name:p[R],value:R,marker:{style:{fill:T[R]}}}})}),t.geometries.forEach((z,R)=>{z.color(T[`y${R+1}`]).size(N)}),t.height=e,t.padding=o,y=y.map(z=>(z.time=Qn(z.time),z._time=+z.time,z)).sort((z,R)=>z._time-R._time);let W=Math.max(...j.map(z=>[...y].sort((R,le)=>le[`y${z}`]-R[`y${z}`])[0][`y${z}`])),w={};j.forEach(z=>{let R=`y${z}`;w[R]={alias:p[R],max:W,min:0}}),t.scale(Mt({time:{type:"time",mask:s,range:[0,1]}},w));let $={start:y[0]._time,end:y[y.length-1]._time},F=y.filter(z=>z._time>=$.start&&z._time<=$.end);t.changeData(F)}static \u0275fac=(()=>{let t;return function(o){return(t||(t=Z(a)))(o||a)}})();static \u0275cmp=l({type:a,selectors:[["g2-timeline"]],inputs:{title:"title",maxAxis:[2,"maxAxis","maxAxis",b],data:"data",titleMap:"titleMap",colorMap:"colorMap",mask:"mask",maskSlider:"maskSlider",position:"position",height:[2,"height","height",b],padding:"padding",borderWidth:[2,"borderWidth","borderWidth",b],slider:[2,"slider","slider",H]},outputs:{clickItem:"clickItem"},exportAs:["g2Timeline"],features:[Q],decls:7,vars:2,consts:[["container",""],[4,"nzStringTemplateOutlet"]],template:function(e,o){e&1&&(n(0,`
    `),P(1,Ea,5,1,"ng-container",1),n(2,`
    `),_(3,Aa,3,0),m(4,"div",null,0),n(6,`
  `)),e&2&&(i(),c("nzStringTemplateOutlet",o.title),i(2),S(o.loaded?-1:3))},dependencies:[rt,ct],encapsulation:2,changeDetection:0})};var Pa=[pt],Lt=class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=E({type:a});static \u0275inj=B({imports:[A,dt,lt,Pa]})};var Fa=()=>({y1:"\u5BA2\u6D41\u91CF",y2:"\u652F\u4ED8\u7B14\u6570"}),sn=class a{msg=O(tt);chartData=[];ngOnInit(){for(let t=0;t<20;t+=1)this.chartData.push({time:new Date().getTime()+1e3*60*30*t,y1:Math.floor(Math.random()*100)+1e3,y2:Math.floor(Math.random()*100)+10})}handleClick(t){this.msg.info(`\u5BA2\u6D41\u91CF: ${t.item.y1}, \u652F\u4ED8\u7B14\u6570: ${t.item.y2}`)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["chart-timeline-basic"]],decls:2,vars:4,consts:[[3,"clickItem","data","titleMap","height"]],template:function(e,o){e&1&&(n(0," "),r(1,"g2-timeline",0),M("clickItem",function(p){return o.handleClick(p)}),d()),e&2&&(i(),c("data",o.chartData)("titleMap",Kt(3,Fa))("height",200))},dependencies:[Lt,pt],encapsulation:2})};function Ra(a,t){if(a&1){let e=kt();n(0,`
      `),r(1,"button",0),M("click",function(){let s=ft(e).$implicit,p=x();return gt(p.refresh(s))}),n(2),d(),n(3,`
    `)}if(a&2){let e=t.$implicit;i(2),Nt("",e," axis")}}var pn=class a{chartData=[];titleMap={y1:"\u6307\u68071",y2:"\u6307\u68072"};maxAxis=2;axisList=new Array(5).fill(0).map((t,e)=>e+1);constructor(){this.refresh()}genData(t){let e={y1:""};for(let s=1;s<=t;s++)e[`y${s}`]=`\u6307\u6807${s}`;let o=[];for(let s=0;s<20;s+=1){let p={time:new Date().getTime()+18e5*s,y1:0};for(let u=1;u<=t;u++)p[`y${u}`]=Math.floor(Math.random()*100)+500*u;o.push(p)}return{titleMap:e,data:o}}refresh(t){this.maxAxis=t??this.maxAxis;let{titleMap:e,data:o}=this.genData(this.maxAxis);this.chartData=o,this.titleMap=e}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["chart-timeline-max-axis"]],decls:8,vars:4,consts:[["nz-button","","nzType","primary",3,"click"],[3,"maxAxis","data","titleMap","height"]],template:function(e,o){e&1&&(n(0,`
    `),r(1,"button",0),M("click",function(){return o.refresh()}),n(2,"Refresh"),d(),n(3,`
    `),Tt(4,Ra,4,1,null,null,Dt),m(6,"g2-timeline",1),n(7,`
  `)),e&2&&(i(4),zt(o.axisList),i(2),c("maxAxis",o.maxAxis)("data",o.chartData)("titleMap",o.titleMap)("height",300))},dependencies:[Lt,pt,X,K,J,Y],encapsulation:2})};var Oa=()=>({y1:"\u5BA2\u6D41\u91CF",y2:"\u652F\u4ED8\u7B14\u6570"}),hn=class a{msg=O(tt);chartData=[];ngOnInit(){for(let t=0;t<20;t+=1)this.chartData.push({time:new Date().getTime()+1e3*60*60*24*t,y1:Math.floor(Math.random()*100)+1e3,y2:Math.floor(Math.random()*100)+10})}handleClick(t){this.msg.info(`\u5BA2\u6D41\u91CF: ${t.item.y1}, \u652F\u4ED8\u7B14\u6570: ${t.item.y2}`)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["chart-timeline-mask"]],decls:2,vars:4,consts:[["mask","MM\u6708DD\u65E5","maskSlider","MM\u6708dd\u65E5",3,"clickItem","data","titleMap","height"]],template:function(e,o){e&1&&(n(0," "),r(1,"g2-timeline",0),M("clickItem",function(p){return o.handleClick(p)}),d()),e&2&&(i(),c("data",o.chartData)("titleMap",Kt(3,Oa))("height",200))},dependencies:[Lt,pt],encapsulation:2})};var un=class a{item={cols:1,urls:{"zh-CN":"packages/chart/timeline/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u4F7F\u7528 <code>timeline</code> \u7EC4\u4EF6\u53EF\u4EE5\u5B9E\u73B0\u5E26\u6709\u65F6\u95F4\u8F74\u7684\u67F1\u72B6\u56FE\u5C55\u73B0\uFF0C\u800C\u5176\u4E2D\u7684 <code>x</code> \u5C5E\u6027\uFF0C\u5219\u662F\u65F6\u95F4\u503C\u7684\u6307\u5411\uFF0C\u9ED8\u8BA4\u6700\u591A\u652F\u6301\u540C\u65F6\u5C55\u73B0\u4E24\u4E2A\u6307\u6807\uFF0C\u5206\u522B\u662F <code>y1</code> \u548C <code>y2</code>\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-timeline"><a class="lake-link"><i data-anchor="g2-timeline"></i></a>g2-timeline</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[title]</code></td><td>\u56FE\u8868\u6807\u9898</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[maxAxis]</code></td><td>\u6700\u5927\u6307\u6807\u6570\u91CF</td><td><code>number</code></td><td><code>2</code></td></tr><tr><td><code>[data]</code></td><td>\u6570\u636E\uFF0C\u6CE8\uFF1A\u6839\u636E <code>maxAxis</code> \u503C\u4F20\u9012\u6307\u6807\u6570\u636E</td><td><code>G2TimelineData[]</code></td><td>-</td></tr><tr><td><code>[titleMap]</code></td><td>\u6307\u6807\u522B\u540D</td><td><code>G2TimelineMap</code></td><td>-</td></tr><tr><td><code>[colorMap]</code></td><td>\u989C\u8272</td><td><code>G2TimelineMap</code></td><td><code>{ y1: '#5B8FF9', y2: '#5AD8A6', y3: '#5D7092', y4: '#F6BD16', y5: '#E86452' }</code></td></tr><tr><td><code>[height]</code></td><td>\u9AD8\u5EA6\u503C</td><td><code>number</code></td><td><code>400</code></td></tr><tr><td><code>[padding]</code></td><td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td><td><code>number[]</code></td><td><code>[40, 8, 64, 40]</code></td></tr><tr><td><code>[borderWidth]</code></td><td>\u7EBF\u6761</td><td><code>number</code></td><td><code>2</code></td></tr><tr><td><code>[mask]</code></td><td>\u65E5\u671F\u683C\u5F0F\uFF0C\u4F7F\u7528 <a target="_blank" href="https://g2.antv.vision/zh/docs/manual/tutorial/scale#time" data-url="https://g2.antv.vision/zh/docs/manual/tutorial/scale#time">G2 Mask\u65E5\u671F\u683C\u5F0F</a></td><td><code>string</code></td><td><code>HH:mm</code></td></tr><tr><td><code>[maskSlider]</code></td><td>\u6ED1\u52A8\u6761\u65E5\u671F\u683C\u5F0F\uFF0C\u4F7F\u7528 <a target="_blank" href="https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table" data-url="https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table">date-fns \u65E5\u671F\u683C\u5F0F</a></td><td><code>string</code></td><td><code>HH:mm</code></td></tr><tr><td><code>[position]</code></td><td>\u6807\u9898\u4F4D\u7F6E</td><td><code>'top','right','bottom','left'</code></td><td><code>'top'</code></td></tr><tr><td><code>[slider]</code></td><td>\u662F\u5426\u9700\u8981\u6ED1\u52A8\u6761</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(clickItem)</code></td><td>\u70B9\u51FB\u9879\u56DE\u8C03</td><td><code>EventEmitter&lt;G2TimelineClickItem></code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table><h3 id="G2TimelineData"><a class="lake-link"><i data-anchor="G2TimelineData"></i></a>G2TimelineData</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[time]</code></td><td>\u65E5\u671F\u683C\u5F0F</td><td><code>Date | number</code></td><td>-</td></tr><tr><td><code>[y1]</code></td><td>\u6307\u68071\u6570\u636E</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[y2]</code></td><td>\u6307\u68072\u6570\u636E</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[y3]</code></td><td>\u6307\u68073\u6570\u636E</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[y4]</code></td><td>\u6307\u68074\u6570\u636E</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[y5]</code></td><td>\u6307\u68075\u6570\u636E</td><td><code>number</code></td><td>-</td></tr></tbody></table><h3 id="G2TimelineMap"><a class="lake-link"><i data-anchor="G2TimelineMap"></i></a>G2TimelineMap</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[y1]</code></td><td>\u6307\u68071</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[y2]</code></td><td>\u6307\u68072</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[y3]</code></td><td>\u6307\u68073</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[y4]</code></td><td>\u6307\u68074</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[y5]</code></td><td>\u6307\u68075</td><td><code>string</code></td><td>-</td></tr></tbody></table>`,meta:{title:"g2-timeline",subtitle:"\u6298\u7EBF\u56FE",cols:1,type:"G2",module:"import { G2TimelineModule } from '@delon/chart/timeline';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-timeline",title:"g2-timeline",h:3},{id:"G2TimelineData",title:"G2TimelineData",h:3},{id:"G2TimelineMap",title:"G2TimelineMap",h:3}]}]}},demo:!0};codes=[{id:"chart-timeline-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u5E26\u6709\u65F6\u95F4\u8F74\u7684\u56FE\u8868\u3002</p>",code:`import { Component, OnInit, inject } from '@angular/core';

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
}`,lang:"ts",componentName:"ChartTimelineMaskComponent",point:2,name:"mask",urls:"packages/chart/timeline/demo/mask.md",type:"demo"}];static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["app-chart-timeline"]],hostVars:2,hostBindings:function(e,o){e&2&&g("d-block","true")},decls:19,vars:9,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,o){e&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),n(3,`
        `),r(4,"code-box",3),n(5,`
          `),m(6,"chart-timeline-basic"),n(7,`
        `),d(),n(8,`
      
        `),r(9,"code-box",3),n(10,`
          `),m(11,"chart-timeline-max-axis"),n(12,`
        `),d(),n(13,`
      
        `),r(14,"code-box",3),n(15,`
          `),m(16,"chart-timeline-mask"),n(17,`
        `),d(),n(18,`
      `),d()()()),e&2&&(c("codes",o.codes)("item",o.item),i(),c("nzGutter",16),i(3),c("item",o.codes[0]),v("id",o.codes[0].id),i(5),c("item",o.codes[1]),v("id",o.codes[1].id),i(5),c("item",o.codes[2]),v("id",o.codes[2].id))},dependencies:[D,sn,pn,hn,G,k,I],encapsulation:2})};var fn=class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["chart-trend-basic"]],decls:7,vars:0,consts:[["flag","up"],["flag","down",1,"ml-sm"]],template:function(e,o){e&1&&(n(0,`
    `),r(1,"trend",0),n(2,"12%"),d(),n(3,`
    `),r(4,"trend",1),n(5,"11%"),d(),n(6,`
  `))},dependencies:[Ot,vt],encapsulation:2})};var gn=class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["chart-trend-reverse"]],decls:7,vars:0,consts:[["flag","up","reverseColor",""],["flag","down","reverseColor","",1,"ml-sm"]],template:function(e,o){e&1&&(n(0,`
    `),r(1,"trend",0),n(2,"12%"),d(),n(3,`
    `),r(4,"trend",1),n(5,"11%"),d(),n(6,`
  `))},dependencies:[Ot,vt],encapsulation:2})};var Cn=class a{item={cols:1,urls:{"zh-CN":"packages/chart/trend/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u8D8B\u52BF\u7B26\u53F7\uFF0C\u6807\u8BB0\u4E0A\u5347\u548C\u4E0B\u964D\u8D8B\u52BF\u3002\u901A\u5E38\u7528\u7EFF\u8272\u4EE3\u8868\u201C\u597D\u201D\uFF0C\u7EA2\u8272\u4EE3\u8868\u201C\u4E0D\u597D\u201D\uFF0C\u80A1\u7968\u6DA8\u8DCC\u573A\u666F\u9664\u5916\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="trend"><a class="lake-link"><i data-anchor="trend"></i></a>trend</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[colorful]</code></td><td>\u662F\u5426\u5F69\u8272\u6807\u8BB0</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[flag]</code></td><td>\u4E0A\u5347\u4E0B\u964D\u6807\u8BC6</td><td><code>'up','down'</code></td><td>-</td></tr><tr><td><code>[reverseColor]</code></td><td>\u989C\u8272\u53CD\u8F6C</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>`,meta:{type:"G2",title:"trend",subtitle:"\u8D8B\u52BF\u6807\u8BB0",cols:1,module:"import { TrendModule } from '@delon/chart/trend';"},toc:[{id:"API",title:"API",h:2,children:[{id:"trend",title:"trend",h:3}]}]}},demo:!0};codes=[{id:"chart-trend-basic",meta:{order:0,title:"\u6F14\u793A"},summary:"<p>\u5728\u6570\u503C\u80CC\u540E\u6DFB\u52A0\u4E00\u4E2A\u5C0F\u56FE\u6807\u6765\u6807\u8BC6\u6DA8\u8DCC\u60C5\u51B5\u3002</p>",code:`import { Component } from '@angular/core';

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
export class ChartTrendReverseComponent {}`,lang:"ts",componentName:"ChartTrendReverseComponent",point:1,name:"reverse",urls:"packages/chart/trend/demo/reverse.md",type:"demo"}];static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["app-chart-trend"]],hostVars:2,hostBindings:function(e,o){e&2&&g("d-block","true")},decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,o){e&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),n(3,`
        `),r(4,"code-box",3),n(5,`
          `),m(6,"chart-trend-basic"),n(7,`
        `),d(),n(8,`
      
        `),r(9,"code-box",3),n(10,`
          `),m(11,"chart-trend-reverse"),n(12,`
        `),d(),n(13,`
      `),d()()()),e&2&&(c("codes",o.codes)("item",o.item),i(),c("nzGutter",16),i(3),c("item",o.codes[0]),v("id",o.codes[0].id),i(5),c("item",o.codes[1]),v("id",o.codes[1].id))},dependencies:[D,fn,gn,G,k,I],encapsulation:2})};var Wa=["container"],ja=(a,t)=>({height:a,width:t,overflow:"hidden"}),$a=a=>({width:a});function Ha(a,t){if(a&1&&(U(0),n(1),q()),a&2){let e=x(2);i(),L(e.title)}}function La(a,t){if(a&1&&(n(0,`
    `),r(1,"span",4),n(2,`
      `),P(3,Ha,2,1,"ng-container",5),n(4,`
    `),d(),n(5,`
  `)),a&2){let e=x();i(3),c("nzStringTemplateOutlet",e.title)}}var ce=class a{el=O(On).nativeElement;renderer=O(Wn);ngZone=O(pe);cdr=O(St);platform=O(ge);resize$=null;node;timer;animate=!0;delay=0;title;color="#1890FF";height=160;percent;renderChart(t){if(!this.resize$)return;this.updateRadio();let{percent:e,color:o,node:s,animate:p}=this,u=Math.min(Math.max(e/100,0),100),T=this;cancelAnimationFrame(this.timer);let N=s.nativeElement,C=N.getContext("2d"),y=N.width,j=N.height,W=y/2,w=2,$=W-w;C.beginPath(),C.lineWidth=w*2;let F=y-w,z=F/8,R=w,le=0,ht=.2,ut=ht,ae=0,_n=p?.005:.015,Vt=[],xn=W-w,Sn=-(Math.PI/2),In=!0;for(let V=Sn;V<Sn+2*Math.PI;V+=1/(8*Math.PI))Vt.push([W+xn*Math.cos(V),W+xn*Math.sin(V)]);let me=Vt.shift();C.strokeStyle=o,C.moveTo(me[0],me[1]);function Do(){C.beginPath(),C.save();let V=[];for(let se=R;se<=R+F;se+=20/F){let To=le+(R+se)/z,zo=Math.sin(To)*ut,En=se,An=2*$*(1-ae)+(W-$)-z*zo;C.lineTo(En,An),V.push([En,An])}let Bn=V.shift();C.lineTo(R+F,j),C.lineTo(R,j),C.lineTo(Bn[0],Bn[1]);let Mn=C.createLinearGradient(0,0,0,j);Mn.addColorStop(0,"#ffffff"),Mn.addColorStop(1,o),C.fillStyle=Mn,C.fill(),C.restore()}function wn(){if(C.clearRect(0,0,y,j),In&&!t)if(Vt.length)if(p){let V=Vt.shift();C.lineTo(V[0],V[1]),C.stroke()}else{for(let V of Vt)C.lineTo(V[0],V[1]),C.stroke();Vt=[]}else In=!1,C.lineTo(me[0],me[1]),C.stroke(),Vt=null,C.globalCompositeOperation="destination-over",C.beginPath(),C.lineWidth=w,C.arc(W,W,xn,0,2*Math.PI,!0),C.beginPath(),C.save(),C.arc(W,W,W-3*w,0,2*Math.PI,!0),C.restore(),C.clip(),C.fillStyle=o;else{if(u>=.85){if(ut>ht/4){let V=ht*.01;ut-=V}}else if(u<=.1){if(ut<ht*1.5){let V=ht*.01;ut+=V}}else{if(ut<=ht){let V=ht*.01;ut+=V}if(ut>=ht){let V=ht*.01;ut-=V}}u-ae>0&&(ae+=_n),u-ae<0&&(ae-=_n),le+=.07,Do()}T.timer=requestAnimationFrame(wn)}wn()}updateRadio(){let{offsetWidth:t}=this.el.parentNode,e=t<this.height?t/this.height:1;this.renderer.setStyle(this.el,"transform",`scale(${e})`)}render(){this.renderChart(!1)}installResizeEvent(){this.resize$=Ut(window,"resize").pipe(qt(200)).subscribe(()=>this.updateRadio())}ngOnInit(){this.platform.isBrowser&&(this.installResizeEvent(),this.ngZone.runOutsideAngular(()=>setTimeout(()=>this.render(),this.delay)))}ngOnChanges(){this.ngZone.runOutsideAngular(()=>this.renderChart(!0)),this.cdr.detectChanges()}ngOnDestroy(){this.timer&&cancelAnimationFrame(this.timer),this.resize$&&this.resize$.unsubscribe()}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["g2-water-wave"]],viewQuery:function(e,o){if(e&1&&he(Wa,7),e&2){let s;ue(s=fe())&&(o.node=s.first)}},hostVars:2,hostBindings:function(e,o){e&2&&g("g2-water-wave",!0)},inputs:{animate:[2,"animate","animate",H],delay:[2,"delay","delay",b],title:"title",color:"color",height:[2,"height","height",b],percent:[2,"percent","percent",b]},exportAs:["g2WaterWave"],features:[Zt],decls:13,vars:13,consts:[["container",""],[1,"g2-water-wave__canvas"],[1,"g2-water-wave__desc"],[1,"g2-water-wave__desc-percent"],[1,"g2-water-wave__desc-title"],[4,"nzStringTemplateOutlet"]],template:function(e,o){e&1&&(r(0,"div"),n(1,`
  `),m(2,"canvas",1,0),n(4,`
`),d(),n(5,`
`),r(6,"div",2),n(7,`
  `),_(8,La,6,1),r(9,"h4",3),n(10),d(),n(11,`
`),d(),n(12,`
`)),e&2&&(it(Vn(8,ja,o.height+"px",o.height+"px")),i(2),v("width",o.height*2)("height",o.height*2),i(4),it(mt(11,$a,o.height+"px")),i(2),S(o.title?8:-1),i(2),Nt("",o.percent,"%"))},dependencies:[rt],encapsulation:2,changeDetection:0})};var vn=class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=E({type:a});static \u0275inj=B({imports:[A,dt]})};var yn=class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["chart-water-wave-basic"]],hostVars:2,hostBindings:function(e,o){e&2&&g("d-block",!0)},decls:3,vars:3,consts:[[3,"title","percent","height"]],template:function(e,o){e&1&&(n(0," "),m(1,"g2-water-wave",0),n(2," ")),e&2&&(i(),c("title","\u8865\u8D34\u8D44\u91D1\u5269\u4F59")("percent",34)("height",161))},dependencies:[vn,ce],encapsulation:2})};var bn=class a{item={cols:1,urls:{"zh-CN":"packages/chart/water-wave/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u6C34\u6CE2\u56FE\u662F\u4E00\u79CD\u6BD4\u4F8B\u7684\u5C55\u793A\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u66F4\u76F4\u89C2\u7684\u5C55\u793A\u5173\u952E\u503C\u7684\u5360\u6BD4\u3002</p><blockquote><p>\u9ED8\u8BA4\u4E0D\u652F\u6301\u7236\u5143\u7D20\u81EA\u9002\u5E94\uFF0C\u53EF\u4EE5\u76D1\u542C\u7236\u5143\u7D20\u7684\u53D8\u5316\u5E76\u4F7F\u7528 <code>render()</code> \u65B9\u6CD5\u6765\u91CD\u7F6E\u6E32\u67D3\u3002</p></blockquote></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-water-wave"><a class="lake-link"><i data-anchor="g2-water-wave"></i></a>g2-water-wave</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[animate]</code></td><td>\u662F\u5426\u663E\u793A\u52A8\u753B</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[title]</code></td><td>\u56FE\u8868\u6807\u9898</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td><code>160</code></td></tr><tr><td><code>[color]</code></td><td>\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>#1890FF</code></td></tr><tr><td><code>[percent]</code></td><td>\u8FDB\u5EA6\u6BD4\u4F8B</td><td><code>number</code></td><td>-</td></tr></tbody></table>',meta:{title:"g2-water-wave",subtitle:"\u6C34\u6CE2\u56FE",cols:1,type:"G2",module:"import { G2WaterWaveModule } from '@delon/chart/water-wave';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-water-wave",title:"g2-water-wave",h:3}]}]}},demo:!0};codes=[{id:"chart-water-wave-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Component } from '@angular/core';

import { G2WaterWaveModule } from '@delon/chart/water-wave';

@Component({
  selector: 'chart-water-wave-basic',
  template: \` <g2-water-wave [title]="'\u8865\u8D34\u8D44\u91D1\u5269\u4F59'" [percent]="34" [height]="161" /> \`,
  host: {
    '[class.d-block]': 'true'
  },
  imports: [G2WaterWaveModule]
})
export class ChartWaterWaveBasicComponent {}`,lang:"ts",componentName:"ChartWaterWaveBasicComponent",point:0,name:"basic",urls:"packages/chart/water-wave/demo/basic.md",type:"demo"}];static \u0275fac=function(e){return new(e||a)};static \u0275cmp=l({type:a,selectors:[["app-chart-water-wave"]],hostVars:2,hostBindings:function(e,o){e&2&&g("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,o){e&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),n(3,`
        `),r(4,"code-box",3),n(5,`
          `),m(6,"chart-water-wave-basic"),n(7,`
        `),d(),n(8,`
      `),d()()()),e&2&&(c("codes",o.codes)("item",o.item),i(),c("nzGutter",16),i(3),c("item",o.codes[0]),v("id",o.codes[0].id))},dependencies:[D,yn,G,k,I],encapsulation:2})};var Mu=[{path:"",component:go,children:[{path:"",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"faq",redirectTo:"faq/zh",pathMatch:"full"},{path:"faq/:lang",component:be},{path:"getting-started",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"getting-started/:lang",component:xe},{path:"bar",redirectTo:"bar/zh",pathMatch:"full"},{path:"bar/:lang",component:De},{path:"card",redirectTo:"card/zh",pathMatch:"full"},{path:"card/:lang",component:Ge},{path:"chart-echarts",redirectTo:"chart-echarts/zh",pathMatch:"full"},{path:"chart-echarts/:lang",component:Se},{path:"custom",redirectTo:"custom/zh",pathMatch:"full"},{path:"custom/:lang",component:Be},{path:"gauge",redirectTo:"gauge/zh",pathMatch:"full"},{path:"gauge/:lang",component:Pe},{path:"mini-area",redirectTo:"mini-area/zh",pathMatch:"full"},{path:"mini-area/:lang",component:We},{path:"mini-bar",redirectTo:"mini-bar/zh",pathMatch:"full"},{path:"mini-bar/:lang",component:Le},{path:"mini-progress",redirectTo:"mini-progress/zh",pathMatch:"full"},{path:"mini-progress/:lang",component:qe},{path:"number-info",redirectTo:"number-info/zh",pathMatch:"full"},{path:"number-info/:lang",component:Ye},{path:"pie",redirectTo:"pie/zh",pathMatch:"full"},{path:"pie/:lang",component:tn},{path:"radar",redirectTo:"radar/zh",pathMatch:"full"},{path:"radar/:lang",component:on},{path:"single-bar",redirectTo:"single-bar/zh",pathMatch:"full"},{path:"single-bar/:lang",component:dn},{path:"tag-cloud",redirectTo:"tag-cloud/zh",pathMatch:"full"},{path:"tag-cloud/:lang",component:mn},{path:"timeline",redirectTo:"timeline/zh",pathMatch:"full"},{path:"timeline/:lang",component:un},{path:"trend",redirectTo:"trend/zh",pathMatch:"full"},{path:"trend/:lang",component:Cn},{path:"water-wave",redirectTo:"water-wave/zh",pathMatch:"full"},{path:"water-wave/:lang",component:bn}]}];export{Mu as routes};
