import{$a as ff,$r as Ul,Ci as X,Ds as on$1,Dt as H,Es as om,F as DO,Fr as Se,Fs as pe$1,Gi as Zl,Ha as ee,Hc as vr,Hi as Ze,Ii as Yl,It as Hy,Mr as Sa$1,Nr as Sd,Nt as Hn,Pc as v5,Qs as rn$1,Rc as ve,Tn as MO,Ts as oe,Tt as Gt$1,Ua as er,Uc as vt$1,Us as qe,Ut as Io$1,Ws as ql,Wt as It$1,X as EP,Xa as f5,Xn as Oo$1,Xo as ko$1,_c as tn$1,_o as hO,_s as nn$1,_t as G,ac as s4,as as m5,c as $t$1,ca as a3,cc as sb,di as W,do as gt$1,ei as Uo,fa as an$1,fl as ye,gl as yn,go as hI,gs as ne,gt as Fy,io as g,it as F,jn as Mt$1,jo as ie,js as pI,lr as Qc,no as fo$1,ol as xr,os as mB,po as h,rn as Jr,ta as _d,u as A,ut as Fe$1,va as be,vi as Wl,vo as he$1,wc as u8,wt as Gn,xi as Wt$1,xn as Lt$1,y as B,yo as hf,yr as Rb,zo as je,zs as pt}from"./chunk-Bix55avy.js";import{n as ee$1,t as Z}from"./chunk-B6DEdUMt.js";import{n as Wt$2,t as Dt$1}from"./chunk-BQHyAFCm.js";import{B as lu,E as Xs,O as Ya,P as fr,R as jn,X as xu,d as Fi,k as Ys}from"./chunk-3aQ3WiqM.js";import{f as sn$1,i as We$1,s as cn$1}from"./chunk-bq9s7eY5.js";import{n as He,r as Kt$1}from"./chunk-uiqTrtWh.js";import{n as _n,t as Sn}from"./chunk-CgBXRMDB.js";import"./chunk-lfgHJYvd.js";import{C as ca$1,S as Zn,T as ua$1,b as Pn,t as X$1,w as pa$1,x as Un,y as Hn$1}from"./main-YYZC7LXB.js";import"./chunk-46Ii5gWu.js";import"./chunk-CKkdg4oh.js";import{t as ce$1}from"./chunk-AxTuKf1y.js";import{t as ee$2}from"./chunk-BjZZfLcG.js";import{a as tt$1,i as nt$1,n as D,r as jt$1,t as $t$2}from"./chunk-N8KSjfys.js";var ut=class o{item={name:`faq`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{order:100,title:`FAQ`,description:`The G2 uses window.addEventListener('resize', this.onResize) to detect a change in parent dom element's size. So you need to manually monitor the chan...`,group:`Documents`,path:`packages/chart/docs/faq.en-US.md`,url:`/chart/faq/en`},text:`<h2 id="how_to_auto-resize_of_the_container?"><a class="lake-link"><i data-anchor="how_to_auto-resize_of_the_container?"></i></a>How to auto-resize of the container?</h2><p>The G2 uses <code>window.addEventListener(&#39;resize&#39;, this.onResize)</code> to detect a change in parent dom element&#39;s size. So you need to manually monitor the change in the size of the container and call <code>chart.forceFit()</code> to force resize.</p>
<blockquote>
<p><strong>Since v5, <code>forceFit()</code> returns a <code>Promise</code></strong> (it was synchronous in v4): use <code>await chart.forceFit()</code> or <code>void chart.forceFit()</code>. Components already handle <code>autoFit</code> on the first frame and on window resize, so manual calls are rarely needed.</p>
</blockquote>
<example-resizable-index />`,api:``,toc:[{id:`how_to_auto-resize_of_the_container?`,title:`How to auto-resize of the container?`}],raw:"---\norder: 100\ntitle: FAQ\ntype: Documents\n---\n\n## How to auto-resize of the container?\n\nThe G2 uses `window.addEventListener('resize', this.onResize)` to detect a change in parent dom element's size. So you need to manually monitor the change in the size of the container and call `chart.forceFit()` to force resize.\n\n> **Since v5, `forceFit()` returns a `Promise`** (it was synchronous in v4): use `await chart.forceFit()` or `void chart.forceFit()`. Components already handle `autoFit` on the first frame and on window resize, so manual calls are rarely needed.\n\n[comment]: <demo(resizable)>"},"zh-CN":{meta:{order:100,title:`常见问题`,description:`G2 当前版本并不会根据容器宽高自适应，目前只会根据浏览器窗体大小才会重新变更图表尺寸，因此需要手动监听容器大小的变化并调用 chart.forceFit() 重新渲染图表尺寸。v5 起 forceFit() 返回 Promise（v4 是同步）：需要等待尺寸变更完成时请 await chart.f...`,group:`Documents`,path:`packages/chart/docs/faq.zh-CN.md`,url:`/chart/faq/zh`},text:`<h2 id="\u5982\u4F55\u81EA\u9002\u5E94\u5BB9\u5668\u5BBD\u9AD8\uFF1F"><a class="lake-link"><i data-anchor="\u5982\u4F55\u81EA\u9002\u5E94\u5BB9\u5668\u5BBD\u9AD8\uFF1F"></i></a>\u5982\u4F55\u81EA\u9002\u5E94\u5BB9\u5668\u5BBD\u9AD8\uFF1F</h2><p>G2 \u5F53\u524D\u7248\u672C\u5E76\u4E0D\u4F1A\u6839\u636E\u5BB9\u5668\u5BBD\u9AD8\u81EA\u9002\u5E94\uFF0C\u76EE\u524D\u53EA\u4F1A\u6839\u636E\u6D4F\u89C8\u5668\u7A97\u4F53\u5927\u5C0F\u624D\u4F1A\u91CD\u65B0\u53D8\u66F4\u56FE\u8868\u5C3A\u5BF8\uFF0C\u56E0\u6B64\u9700\u8981\u624B\u52A8\u76D1\u542C\u5BB9\u5668\u5927\u5C0F\u7684\u53D8\u5316\u5E76\u8C03\u7528 <code>chart.forceFit()</code> \u91CD\u65B0\u6E32\u67D3\u56FE\u8868\u5C3A\u5BF8\u3002</p>
<blockquote>
<p><strong>v5 \u8D77 <code>forceFit()</code> \u8FD4\u56DE <code>Promise</code></strong>\uFF08v4 \u662F\u540C\u6B65\uFF09\uFF1A\u9700\u8981\u7B49\u5F85\u5C3A\u5BF8\u53D8\u66F4\u5B8C\u6210\u65F6\u8BF7 <code>await chart.forceFit()</code> \u6216 <code>void chart.forceFit()</code>\uFF1B\u7EC4\u4EF6\u5185\u90E8\u7684\u81EA\u9002\u5E94\uFF08<code>autoFit</code>\uFF09\u5DF2\u5728\u9996\u5E27\u4E0E\u7A97\u53E3 resize \u65F6\u81EA\u52A8\u5904\u7406\uFF0C\u901A\u5E38\u65E0\u9700\u624B\u52A8\u8C03\u7528\u3002</p>
</blockquote>
<example-resizable-index />`,api:``,toc:[{id:`如何自适应容器宽高？`,title:`如何自适应容器宽高？`}],raw:`---
order: 100
title: 常见问题
type: Documents
---

## 如何自适应容器宽高？

G2 当前版本并不会根据容器宽高自适应，目前只会根据浏览器窗体大小才会重新变更图表尺寸，因此需要手动监听容器大小的变化并调用 \`chart.forceFit()\` 重新渲染图表尺寸。

> **v5 起 \`forceFit()\` 返回 \`Promise\`**（v4 是同步）：需要等待尺寸变更完成时请 \`await chart.forceFit()\` 或 \`void chart.forceFit()\`；组件内部的自适应（\`autoFit\`）已在首帧与窗口 resize 时自动处理，通常无需手动调用。

[comment]: <demo(resizable)>`}}};codes=[];static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-faq`]],hostAttrs:[1,`d-block`],decls:1,vars:2,consts:[[3,`codes`,`item`]],template:function(t,n){t&1&&pt(0,`app-docs`,0),t&2&&ie(`codes`,n.codes)(`item`,n.item)},dependencies:[ce$1],encapsulation:2})};var ht=class o{item={name:`getting-started`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{order:1,title:`Getting Started`,description:`Chart provides the well-designed abstract chart components based on the G2.@antv/g2 has been upgraded from v4 to v5 (^5.4.8). Component APIs ([data], `,group:`Documents`,path:`packages/chart/docs/getting-started.en-US.md`,url:`/chart/getting-started/en`},text:`<p>Chart provides the well-designed abstract chart components based on the <a href="https://g2.antv.antgroup.com/en/" target="_blank" rel="noopener">G2</a>.</p>
<h2 id="upgrading_from_v4_to_v5"><a class="lake-link"><i data-anchor="upgrading_from_v4_to_v5"></i></a>Upgrading from v4 to v5</h2><p><code>&#64;antv/g2</code> has been upgraded from v4 to <strong>v5</strong> (<code>^5.4.8</code>). Component APIs (<code>[data]</code>, <code>[height]</code>, <code>[padding]</code>, <code>[theme]</code>, <code>(ready)</code>, <code>(clickItem)</code>, ...) keep their <strong>names and types</strong> (the only exception is <code>g2-water-wave</code>, whose <code>[height]</code> is renamed to <code>[size]</code>), but rendering is now <strong>asynchronous and spec-driven</strong>:</p>
<ul>
<li><strong>Rendering is async</strong>: <code>ready</code> fires on the <strong>first <code>AFTER_RENDER</code></strong> (the first frame is really painted) and <strong>only once</strong>; <code>loaded</code> (used by the template to drop the skeleton) is set at the same moment. Subscribe to <code>(ready)</code> to get the chart instance:<pre><code class="language-html">&lt;g2-bar [data]=&quot;data()&quot; (ready)=&quot;onReady($event)&quot; (error)=&quot;onError($event)&quot; /&gt;
</code></pre>
</li>
<li><strong>Failure is a separate layer from <code>ready</code></strong>: a missing G2 library or a failed render emits <strong><code>(error)</code></strong> (plus <code>console.error</code>); <code>ready</code> does not fire and the skeleton stays.</li>
<li><strong><code>install()</code> is no longer public</strong>: use the protected <code>afterCreate(chart)</code> / <code>onRendered()</code> extension points; use <code>changeData()</code> for data updates (it goes through the base class&#39; serial queue, so it cannot race the first frame).</li>
<li><strong>Interactions</strong>: v4&#39;s <code>active-region</code> and <code>drag-move</code> have no v5 equivalent and degrade to no interaction.</li>
<li><strong>tooltip</strong>: <code>domStyles</code>/<code>itemTpl</code> are gone; a <strong>view-level <code>tooltip</code> is not inherited by child marks</strong> \u2014 set it at the mark level.</li>
<li><strong>Click payload type</strong>: <code>Event</code> \u2192 <code>G2Event</code> (<code>ev.data?.data</code> is the datum).</li>
<li><strong><code>g2-tag-cloud</code></strong>: no longer writes <code>x/y/size/rotate/font</code> back into the data rows (layout is done by the built-in <code>wordCloud</code> mark; <code>&#64;antv/data-set</code> has been removed).</li>
<li><strong><code>g2-water-wave</code></strong>: the hand-written v4 canvas is replaced by the v5 <a href="https://g2.antv.antgroup.com/examples/general/Liquid" target="_blank" rel="noopener"><code>liquid</code></a> mark (the center percentage is drawn by G2&#39;s built-in text); <strong><code>[height]</code> is renamed to <code>[size]</code></strong> (the side length of the square); <code>[animate]</code> now controls <strong>only the enter animation</strong> (the wave motion is built into G2 and always runs) and sizing is handled by <code>autoFit</code>.</li>
<li><strong>Fixed bar thickness with a transposed coordinate</strong>: with <code>coordinate.transform: [&#123; type: &#39;transpose&#39; &#125;]</code> the interval&#39;s <strong>on-screen thickness is clamped by <code>style.minWidth</code>/<code>maxWidth</code> (pixels)</strong> while <code>minHeight</code> clamps the on-screen width \u2014 so v4&#39;s <code>.size(30)</code> cannot be reproduced with <code>encode.size</code> alone; also write <code>style: &#123; minWidth: 30, maxWidth: 30 &#125;</code>.
These components provide the ability to use with complex mixed view or just use along for common business usage.</li>
</ul>
<h2 id="usage"><a class="lake-link"><i data-anchor="usage"></i></a>Usage</h2><h3 id="g2_class_library_loading"><a class="lake-link"><i data-anchor="g2_class_library_loading"></i></a>G2 class library loading</h3><p>By default, the class library CDN address has been specified in <a href="/docs/global-config">Global Configuration</a>:</p>
<pre><code class="language-ts">// global-config.module.ts
const alainConfig: AlainConfig = &#123;
  chart: &#123; 
    // The following is the default configuration. If the project cannot be accessed from the Internet, you can directly use the \`./assets***\` path for the dependent package according to the \`angular.json\` configuration
    libs: [
      &#39;https://gw.alipayobjects.com/os/lib/antv/g2/5.4.8/dist/g2.min.js&#39;,
    ],
  &#125;,
&#125;;

export class DelonModule &#123;
  static forRoot(): ModuleWithProviders &#123;
    return &#123;
      ngModule: DelonModule,
      providers: [
        provideAlainConfig(alainConfig)
      ]
    &#125;;
  &#125;
&#125;
</code></pre>
<p>Of course, you can also directly import the CDN address in <code>index.html</code>, for example:</p>
<pre><code class="language-html">&lt;!-- Introduce online resources, select the g2 version you need and replace the version variable --&gt;
&lt;script src=&quot;https://gw.alipayobjects.com/os/lib/antv/g2/&#123;&#123;version&#125;&#125;/dist/g2.min.js&quot;&gt;&lt;/script&gt;
</code></pre>
<p>You can also configure the <code>assets</code> (About <a href="https://angular.io/guide/workspace-config#assets-configuration" target="_blank" rel="noopener">assets</a> Document) option in <code>angular.json</code> to obtain the G2 library from <code>node_modules</code>, for example:</p>
<pre><code class="language-json">&quot;assets&quot;: [
  &#123;
    &quot;glob&quot;: &quot;**/*&quot;,
    &quot;input&quot;: &quot;./node_modules/&#64;antv/g2/dist&quot;,
    &quot;output&quot;: &quot;/&#64;antv/g2/&quot;
  &#125;
]
</code></pre>
<p>Finally modify the <code>libs</code> parameter of the global configuration:</p>
<pre><code class="language-ts">// global-config.module.ts
const alainConfig: AlainConfig = &#123;
  chart: &#123; 
    libs: [&#39;./assets/&#64;antv/g2/g2.min.js&#39;],
  &#125;,
&#125;;
</code></pre>
<h3 id="import_module"><a class="lake-link"><i data-anchor="import_module"></i></a>Import module</h3><pre><code class="language-ts">// shared.module.ts
import &#123; G2BarModule &#125; from &#39;&#64;delon/chart/bar&#39;;

&#64;NgModule(&#123;
  imports: [ G2BarModule ],
  exports: [ G2BarModule ]
&#125;)
</code></pre>
<h2 id="custom_g2_components"><a class="lake-link"><i data-anchor="custom_g2_components"></i></a>Custom G2 components</h2><p>Use the <a href="/chart/custom">g2-chart</a> component to better implement custom charts.</p>
<h2 id="configure_chart_theme"><a class="lake-link"><i data-anchor="configure_chart_theme"></i></a>Configure chart theme</h2><p>Configure the chart theme for all G2, but only provide interfaces. For the configuration chart theme parameters, please refer to <a href="https://g2.antv.vision/zh/docs/manual/tutorial/theme" target="_blank" rel="noopener">G2 website</a>.</p>
<pre><code class="language-ts">// global-config.module.ts
const alainConfig: AlainConfig = &#123;
  chart: &#123; theme: &#39;dark&#39; &#125;,
&#125;;

export class DelonModule &#123;
  static forRoot(): ModuleWithProviders &#123;
    return &#123;
      ngModule: DelonModule,
      providers: [
        provideAlainConfig(alainConfig)
      ]
    &#125;;
  &#125;
&#125;
</code></pre>
`,api:``,toc:[{id:`upgrading_from_v4_to_v5`,title:`Upgrading from v4 to v5`},{id:`usage`,title:`Usage`,children:[{id:`g2_class_library_loading`,title:`G2 class library loading`},{id:`import_module`,title:`Import module`}]},{id:`custom_g2_components`,title:`Custom G2 components`},{id:`configure_chart_theme`,title:`Configure chart theme`}],raw:'---\norder: 1\ntitle: Getting Started\ntype: Documents\n---\n\nChart provides the well-designed abstract chart components based on the [G2](https://g2.antv.antgroup.com/en/).\n\n## Upgrading from v4 to v5\n\n`@antv/g2` has been upgraded from v4 to **v5** (`^5.4.8`). Component APIs (`[data]`, `[height]`, `[padding]`, `[theme]`, `(ready)`, `(clickItem)`, ...) keep their **names and types** (the only exception is `g2-water-wave`, whose `[height]` is renamed to `[size]`), but rendering is now **asynchronous and spec-driven**:\n\n- **Rendering is async**: `ready` fires on the **first `AFTER_RENDER`** (the first frame is really painted) and **only once**; `loaded` (used by the template to drop the skeleton) is set at the same moment. Subscribe to `(ready)` to get the chart instance:\n  ```html\n  <g2-bar [data]="data()" (ready)="onReady($event)" (error)="onError($event)" />\n  ```\n- **Failure is a separate layer from `ready`**: a missing G2 library or a failed render emits **`(error)`** (plus `console.error`); `ready` does not fire and the skeleton stays.\n- **`install()` is no longer public**: use the protected `afterCreate(chart)` / `onRendered()` extension points; use `changeData()` for data updates (it goes through the base class\' serial queue, so it cannot race the first frame).\n- **Interactions**: v4\'s `active-region` and `drag-move` have no v5 equivalent and degrade to no interaction.\n- **tooltip**: `domStyles`/`itemTpl` are gone; a **view-level `tooltip` is not inherited by child marks** — set it at the mark level.\n- **Click payload type**: `Event` → `G2Event` (`ev.data?.data` is the datum).\n- **`g2-tag-cloud`**: no longer writes `x/y/size/rotate/font` back into the data rows (layout is done by the built-in `wordCloud` mark; `@antv/data-set` has been removed).\n- **`g2-water-wave`**: the hand-written v4 canvas is replaced by the v5 [`liquid`](https://g2.antv.antgroup.com/examples/general/Liquid) mark (the center percentage is drawn by G2\'s built-in text); **`[height]` is renamed to `[size]`** (the side length of the square); `[animate]` now controls **only the enter animation** (the wave motion is built into G2 and always runs) and sizing is handled by `autoFit`.\n- **Fixed bar thickness with a transposed coordinate**: with `coordinate.transform: [{ type: \'transpose\' }]` the interval\'s **on-screen thickness is clamped by `style.minWidth`/`maxWidth` (pixels)** while `minHeight` clamps the on-screen width — so v4\'s `.size(30)` cannot be reproduced with `encode.size` alone; also write `style: { minWidth: 30, maxWidth: 30 }`.\n These components provide the ability to use with complex mixed view or just use along for common business usage.\n\n## Usage\n\n### G2 class library loading\n\nBy default, the class library CDN address has been specified in [Global Configuration](/docs/global-config):\n\n```ts\n// global-config.module.ts\nconst alainConfig: AlainConfig = {\n  chart: { \n    // The following is the default configuration. If the project cannot be accessed from the Internet, you can directly use the `./assets***` path for the dependent package according to the `angular.json` configuration\n    libs: [\n      \'https://gw.alipayobjects.com/os/lib/antv/g2/5.4.8/dist/g2.min.js\',\n    ],\n  },\n};\n\nexport class DelonModule {\n  static forRoot(): ModuleWithProviders {\n    return {\n      ngModule: DelonModule,\n      providers: [\n        provideAlainConfig(alainConfig)\n      ]\n    };\n  }\n}\n```\n\nOf course, you can also directly import the CDN address in `index.html`, for example:\n\n```html\n<!-- Introduce online resources, select the g2 version you need and replace the version variable -->\n<script src="https://gw.alipayobjects.com/os/lib/antv/g2/{{version}}/dist/g2.min.js"><\/script>\n```\n\nYou can also configure the `assets` (About [assets](https://angular.io/guide/workspace-config#assets-configuration) Document) option in `angular.json` to obtain the G2 library from `node_modules`, for example:\n\n```json\n"assets": [\n  {\n    "glob": "**/*",\n    "input": "./node_modules/@antv/g2/dist",\n    "output": "/@antv/g2/"\n  }\n]\n```\n\nFinally modify the `libs` parameter of the global configuration:\n\n```ts\n// global-config.module.ts\nconst alainConfig: AlainConfig = {\n  chart: { \n    libs: [\'./assets/@antv/g2/g2.min.js\'],\n  },\n};\n```\n\n### Import module\n\n```ts\n// shared.module.ts\nimport { G2BarModule } from \'@delon/chart/bar\';\n\n@NgModule({\n  imports: [ G2BarModule ],\n  exports: [ G2BarModule ]\n})\n```\n\n## Custom G2 components\n\nUse the [g2-chart](/chart/custom) component to better implement custom charts.\n\n## Configure chart theme\n\nConfigure the chart theme for all G2, but only provide interfaces. For the configuration chart theme parameters, please refer to [G2 website](https://g2.antv.vision/zh/docs/manual/tutorial/theme).\n\n```ts\n// global-config.module.ts\nconst alainConfig: AlainConfig = {\n  chart: { theme: \'dark\' },\n};\n\nexport class DelonModule {\n  static forRoot(): ModuleWithProviders {\n    return {\n      ngModule: DelonModule,\n      providers: [\n        provideAlainConfig(alainConfig)\n      ]\n    };\n  }\n}\n```'},"zh-CN":{meta:{order:1,title:`开始使用`,description:`图表是基于 G2 (5.x) 的基础上二次封装，提供了业务中常用的图表套件，可以单独使用，也可以组合起来实现复杂的展示效果。@antv/g2 已由 v4 升级到 v5（^5.4.8）。组件公开 API（[data]、[height]、[padding]、[theme]、(ready)、(clickI...`,group:`Documents`,path:`packages/chart/docs/getting-started.zh-CN.md`,url:`/chart/getting-started/zh`},text:`<p>\u56FE\u8868\u662F\u57FA\u4E8E <a href="https://g2.antv.antgroup.com/" target="_blank" rel="noopener">G2</a> (5.x) \u7684\u57FA\u7840\u4E0A\u4E8C\u6B21\u5C01\u88C5\uFF0C\u63D0\u4F9B\u4E86\u4E1A\u52A1\u4E2D\u5E38\u7528\u7684\u56FE\u8868\u5957\u4EF6\uFF0C\u53EF\u4EE5\u5355\u72EC\u4F7F\u7528\uFF0C\u4E5F\u53EF\u4EE5\u7EC4\u5408\u8D77\u6765\u5B9E\u73B0\u590D\u6742\u7684\u5C55\u793A\u6548\u679C\u3002</p>
<h2 id="v4_\u2192_v5_\u5347\u7EA7\u987B\u77E5"><a class="lake-link"><i data-anchor="v4_\u2192_v5_\u5347\u7EA7\u987B\u77E5"></i></a>v4 \u2192 v5 \u5347\u7EA7\u987B\u77E5</h2><p><code>&#64;antv/g2</code> \u5DF2\u7531 v4 \u5347\u7EA7\u5230 <strong>v5</strong>\uFF08<code>^5.4.8</code>\uFF09\u3002\u7EC4\u4EF6\u516C\u5F00 API\uFF08<code>[data]</code>\u3001<code>[height]</code>\u3001<code>[padding]</code>\u3001<code>[theme]</code>\u3001<code>(ready)</code>\u3001<code>(clickItem)</code> \u7B49\uFF09<strong>\u540D\u79F0\u4E0E\u7C7B\u578B\u4E0D\u53D8</strong>\uFF08\u552F\u4E00\u4F8B\u5916\uFF1A<code>g2-water-wave</code> \u7684 <code>[height]</code> \u91CD\u547D\u540D\u4E3A <code>[size]</code>\uFF09\uFF0C\u4F46\u5E95\u5C42\u6E32\u67D3\u6A21\u578B\u6539\u4E3A<strong>\u5F02\u6B65 spec</strong>\uFF1A</p>
<ul>
<li><strong>\u6E32\u67D3\u662F\u5F02\u6B65\u7684</strong>\uFF1A<code>ready</code> \u4E8B\u4EF6\u5728<strong>\u9996\u4E2A <code>AFTER_RENDER</code>\uFF08\u9996\u5E27\u771F\u6B63\u753B\u5B8C\uFF09<strong>\u65F6\u89E6\u53D1\uFF0C\u4E14</strong>\u53EA\u89E6\u53D1\u4E00\u6B21</strong>\uFF1B<code>loaded</code>\uFF08\u6A21\u677F\u636E\u6B64\u6536\u8D77\u9AA8\u67B6\u5C4F\uFF09\u540C\u65F6\u7F6E\u4E3A <code>true</code>\u3002\u8981\u62FF\u5230\u56FE\u8868\u5B9E\u4F8B\uFF0C\u8BF7\u8BA2\u9605 <code>(ready)</code>\uFF1A<pre><code class="language-html">&lt;g2-bar [data]=&quot;data()&quot; (ready)=&quot;onReady($event)&quot; (error)=&quot;onError($event)&quot; /&gt;
</code></pre>
</li>
<li><strong>\u5931\u8D25\u4E0E <code>ready</code> \u662F\u4E24\u5C42</strong>\uFF1AG2 \u7C7B\u5E93\u672A\u52A0\u8F7D\u3001\u6E32\u67D3\u5931\u8D25\u90FD\u4F1A\u8D70 <strong><code>(error)</code></strong> \u4E8B\u4EF6\uFF08\u540C\u65F6 <code>console.error</code>\uFF09\uFF0C<code>ready</code> \u4E0D\u4F1A\u89E6\u53D1\u3001\u9AA8\u67B6\u5C4F\u4E0D\u6536\u8D77\u3002</li>
<li><strong>\u4E0D\u518D\u6709 <code>install()</code> \u516C\u5F00\u65B9\u6CD5</strong>\uFF1A\u7EC4\u4EF6\u6269\u5C55\u70B9\u7528\u53D7\u4FDD\u62A4\u7684 <code>afterCreate(chart)</code> / <code>onRendered()</code>\uFF1B\u6570\u636E\u53D8\u66F4\u7528 <code>changeData()</code>\uFF08\u5185\u90E8\u8D70\u4E32\u884C\u94FE\uFF0C\u4E0D\u4F1A\u4E0E\u9996\u5E27\u7ADE\u6001\uFF09\u3002</li>
<li><strong>\u4EA4\u4E92\u964D\u7EA7</strong>\uFF1Av4 \u7684 <code>active-region</code>\u3001<code>drag-move</code> \u5728 v5 \u65E0\u7B49\u4EF7\u5B9E\u73B0\uFF0C<code>[interaction]</code> \u4F20\u5165\u65F6\u4F1A\u964D\u7EA7\u4E3A\u65E0\u4EA4\u4E92\uFF1B\u5176\u4F59\u4EA4\u4E92\u6620\u5C04\u89C1\u5404\u7EC4\u4EF6\u6587\u6863\u3002</li>
<li><strong>tooltip \u9650\u5236</strong>\uFF1A<code>domStyles</code>\u3001<code>itemTpl</code> \u4E0D\u518D\u53EF\u7528\uFF08v5 \u7531\u5185\u7F6E tooltip \u6E32\u67D3\uFF09\uFF1B\u89C6\u56FE\u7EA7 <code>tooltip</code> <strong>\u4E0D\u4F1A\u4F20\u7ED9\u5B50 mark</strong>\uFF0C\u9700\u8981\u5728 mark \u7EA7\u8BBE\u7F6E\u3002</li>
<li><strong>\u70B9\u51FB\u4E8B\u4EF6\u8F7D\u8377\u7C7B\u578B</strong>\uFF1A<code>Event</code> \u2192 <code>G2Event</code>\uFF08<code>ev.data?.data</code> \u4E3A\u547D\u4E2D\u6570\u636E\u9879\uFF09\u3002</li>
<li><strong><code>g2-tag-cloud</code></strong>\uFF1A\u4E0D\u518D\u628A <code>x/y/size/rotate/font</code> \u5199\u56DE\u6570\u636E\u884C\uFF08\u5E03\u5C40\u6539\u7528 v5 \u5185\u7F6E <code>wordCloud</code> mark \u5B8C\u6210\uFF0C\u53E6\u9700 <code>&#64;antv/data-set</code> \u5DF2\u4ECE\u4F9D\u8D56\u4E2D\u79FB\u9664\uFF09\u3002</li>
<li><strong><code>g2-water-wave</code></strong>\uFF1Av4 \u7684\u624B\u5199 canvas \u6362\u6210 v5 \u7684 <a href="https://g2.antv.antgroup.com/examples/general/Liquid" target="_blank" rel="noopener"><code>liquid</code></a> mark\uFF08\u4E2D\u5FC3\u767E\u5206\u6BD4\u7531 G2 \u5185\u7F6E\u6587\u672C\u7ED8\u5236\uFF09\uFF1B<strong><code>[height]</code> \u91CD\u547D\u540D\u4E3A <code>[size]</code></strong>\uFF08\u6B63\u65B9\u5F62\u8FB9\u957F\uFF09\uFF1B<code>[animate]</code> <strong>\u53EA\u63A7\u5236\u8FDB\u573A\u52A8\u753B</strong>\uFF08\u6C34\u6CE2\u81EA\u8EAB\u7684\u6D41\u52A8\u7531 G2 \u5185\u7F6E\u3001\u59CB\u7EC8\u8FD0\u884C\uFF09\uFF0C\u5C3A\u5BF8\u81EA\u9002\u5E94\u4EA4\u7ED9 <code>autoFit</code>\u3002</li>
<li><strong>\u8F6C\u7F6E\u56FE\u8868\u7684\u56FA\u5B9A\u67F1\u539A</strong>\uFF1Av5 \u91CC\u8F6C\u7F6E\uFF08<code>coordinate.transform: [&#123; type: &#39;transpose&#39; &#125;]</code>\uFF09\u65F6\uFF0Cinterval \u7684<strong>\u5C4F\u5E55\u539A\u5EA6\u7531 <code>style.minWidth</code>/<code>maxWidth</code> \u5939\u53D6</strong>\uFF08\u50CF\u7D20\uFF09\uFF0C<code>style.minHeight</code> \u5939\u7684\u662F\u5C4F\u5E55\u5BBD \u2014\u2014 \u56E0\u6B64 v4 \u7684 <code>.size(30)</code> \u4E0D\u80FD\u53EA\u9760 <code>encode.size</code> \u590D\u73B0\uFF0C\u9700\u540C\u65F6\u5199 <code>style: &#123; minWidth: 30, maxWidth: 30 &#125;</code>\u3002</li>
</ul>
<blockquote>
<p>\u56FE\u8868\u7684\u4F5C\u7528\uFF0C\u662F\u5E2E\u52A9\u6211\u4EEC\u66F4\u597D\u5730\u770B\u61C2\u6570\u636E\u3002\u9009\u62E9\u4EC0\u4E48\u56FE\u8868\uFF0C\u9700\u8981\u56DE\u7B54\u7684\u9996\u8981\u95EE\u9898\u662F\u300E\u6211\u6709\u4EC0\u4E48\u6570\u636E\uFF0C\u9700\u8981\u7528\u56FE\u8868\u505A\u4EC0\u4E48\u300F\uFF0C\u800C\u4E0D\u662F \u300E\u56FE\u8868\u957F\u6210\u4EC0\u4E48\u6837\u300F \u3002</p>
</blockquote>
<table>
<thead>
<tr>
<th>\u5206\u7C7B\u540D</th>
<th>\u7EC4\u4EF6\u6E05\u5355</th>
<th>\u63CF\u8FF0</th>
</tr>
</thead>
<tbody><tr>
<td>\u6BD4\u8F83\u7C7B</td>
<td>\u8FF7\u4F60\u67F1\u72B6\u56FE\uFF1A<code>g2-mini-bar</code><br>\u5355\u4E00\u67F1\u72B6\u56FE\uFF1A<code>g2-single-bar</code><br>\u67F1\u72B6\u56FE\uFF1A<code>g2-bar</code><br>\u96F7\u8FBE\u56FE\uFF1A<code>g2-radar</code><br>\u8FF7\u4F60\u533A\u57DF\u56FE\uFF1A<code>g2-mini-area</code><br>\u8FF7\u4F60\u8FDB\u5EA6\u6761\uFF1A<code>g2-mini-progress</code></td>
<td>-</td>
</tr>
<tr>
<td>\u5206\u5E03\u7C7B</td>
<td>\u6298\u7EBF\u56FE\uFF1A<code>g2-timeline</code></td>
<td>-</td>
</tr>
<tr>
<td>\u5360\u6BD4\u7C7B</td>
<td>\u997C\u56FE\uFF1A<code>g2-pie</code><br>\u6C34\u6CE2\u56FE\uFF1A<code>g2-water-wave</code><br>\u8FF7\u4F60\u8FDB\u5EA6\u6761\uFF1A<code>g2-mini-progress</code><br>\u8FF7\u4F60\u533A\u57DF\u56FE\uFF1A<code>g2-mini-area</code></td>
<td>-</td>
</tr>
<tr>
<td>\u533A\u95F4\u7C7B</td>
<td>\u4EEA\u8868\u76D8\uFF1A<code>g2-gauge</code><br>\u8FF7\u4F60\u533A\u57DF\u56FE\uFF1A<code>g2-mini-area</code></td>
<td>-</td>
</tr>
<tr>
<td>\u8D8B\u52BF\u7C7B</td>
<td>\u6298\u7EBF\u56FE\uFF1A<code>g2-timeline</code><br>\u8FF7\u4F60\u533A\u57DF\u56FE\uFF1A<code>g2-mini-area</code></td>
<td>-</td>
</tr>
<tr>
<td>\u65F6\u95F4\u7C7B</td>
<td>\u6298\u7EBF\u56FE\uFF1A<code>g2-timeline</code><br>\u8FF7\u4F60\u533A\u57DF\u56FE\uFF1A<code>g2-mini-area</code></td>
<td>-</td>
</tr>
<tr>
<td>\u5176\u5B83</td>
<td>\u6807\u7B7E\u4E91\uFF1A<code>g2-tag-cloud</code><br>\u56FE\u8868\u5361\u7247\uFF1A<code>g2-chart-card</code><br>\u81EA\u5B9A\u4E49\u56FE\u8868\uFF1A<code>g2-chart</code></td>
<td>-</td>
</tr>
</tbody></table>
<h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><h3 id="g2\u7C7B\u5E93\u52A0\u8F7D"><a class="lake-link"><i data-anchor="g2\u7C7B\u5E93\u52A0\u8F7D"></i></a>G2\u7C7B\u5E93\u52A0\u8F7D</h3><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5728<a href="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\u5DF2\u7ECF\u6307\u5B9A\u7C7B\u5E93 CDN \u5730\u5740\uFF1A</p>
<pre><code class="language-ts">// global-config.module.ts
const alainConfig: AlainConfig = &#123;
  chart: &#123; 
    // \u4EE5\u4E0B\u662F\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5982\u679C\u9879\u76EE\u65E0\u6CD5\u5916\u7F51\u8BBF\u95EE\uFF0C\u53EF\u4EE5\u6839\u636E \`angular.json\` \u914D\u7F6E\u5C06\u4F9D\u8D56\u5305\u76F4\u63A5\u4F7F\u7528 \`./assets***\` \u8DEF\u5F84
    libs: [
      &#39;https://gw.alipayobjects.com/os/lib/antv/g2/5.4.8/dist/g2.min.js&#39;,
    ],
  &#125;,
&#125;;

export class DelonModule &#123;
  static forRoot(): ModuleWithProviders &#123;
    return &#123;
      ngModule: DelonModule,
      providers: [
        provideAlainConfig(alainConfig)
      ]
    &#125;;
  &#125;
&#125;
</code></pre>
<p>\u5F53\u7136\u4E5F\u53EF\u4EE5\u5728 <code>index.html</code> \u76F4\u63A5\u5F15\u5165 CDN \u5730\u5740\uFF0C\u4F8B\u5982\uFF1A</p>
<pre><code class="language-html">&lt;!-- \u5F15\u5165\u5728\u7EBF\u8D44\u6E90\uFF0C\u9009\u62E9\u4F60\u9700\u8981\u7684 g2 \u7248\u672C\u4EE5\u66FF\u6362 version \u53D8\u91CF --&gt;
&lt;script src=&quot;https://gw.alipayobjects.com/os/lib/antv/g2/&#123;&#123;version&#125;&#125;/dist/g2.min.js&quot;&gt;&lt;/script&gt;
</code></pre>
<p>\u4E5F\u53EF\u4EE5\u5728 <code>angular.json</code> \u914D\u7F6E <code>assets</code> \u9009\u9879\uFF08\u6709\u5173 <a href="https://angular.cn/guide/workspace-config#assets-configuration" target="_blank" rel="noopener">assets</a> \u6587\u6863\uFF09\uFF0C\u4ECE <code>node_modules</code> \u6765\u83B7\u5F97G2\u7C7B\u5E93\uFF0C\u4F8B\u5982\uFF1A</p>
<pre><code class="language-json">&quot;assets&quot;: [
  &#123;
    &quot;glob&quot;: &quot;**/*&quot;,
    &quot;input&quot;: &quot;./node_modules/&#64;antv/g2/dist&quot;,
    &quot;output&quot;: &quot;/&#64;antv/g2/&quot;
  &#125;
]
</code></pre>
<p>\u6700\u540E\u4FEE\u6539\u5168\u5C40\u914D\u7F6E\u7684 <code>libs</code> \u53C2\u6570\u4E3A\uFF1A</p>
<pre><code class="language-ts">// global-config.module.ts
const alainConfig: AlainConfig = &#123;
  chart: &#123; 
    libs: [&#39;./assets/&#64;antv/g2/g2.min.js&#39;],
  &#125;,
&#125;;
</code></pre>
<h3 id="\u5BFC\u5165\u6A21\u5757"><a class="lake-link"><i data-anchor="\u5BFC\u5165\u6A21\u5757"></i></a>\u5BFC\u5165\u6A21\u5757</h3><pre><code class="language-ts">// shared.module.ts
import &#123; G2BarModule &#125; from &#39;&#64;delon/chart/bar&#39;;

&#64;NgModule(&#123;
  imports: [ G2BarModule ],
  exports: [ G2BarModule ]
&#125;)
</code></pre>
<h2 id="\u81EA\u5B9A\u4E49_g2_\u7EC4\u4EF6"><a class="lake-link"><i data-anchor="\u81EA\u5B9A\u4E49_g2_\u7EC4\u4EF6"></i></a>\u81EA\u5B9A\u4E49 G2 \u7EC4\u4EF6</h2><p>\u4F7F\u7528 <a href="/chart/custom">g2-chart</a> \u7EC4\u4EF6\u5FEB\u901F\u81EA\u5B9A\u4E49\u4E00\u4E2A\u56FE\u8868\uFF0C\u53EF\u4EE5\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u7EC4\u4EF6\u6E32\u67D3\u8FC7\u7A0B\u4E2D\u6240\u4EA7\u751F\u7684\u5947\u602A\u95EE\u9898\u3002</p>
<h2 id="\u914D\u7F6E\u56FE\u8868\u4E3B\u9898"><a class="lake-link"><i data-anchor="\u914D\u7F6E\u56FE\u8868\u4E3B\u9898"></i></a>\u914D\u7F6E\u56FE\u8868\u4E3B\u9898</h2><p>\u5BF9\u6240\u6709 G2 \u8FDB\u884C\u914D\u7F6E\u56FE\u8868\u4E3B\u9898\uFF0C\u4F46\u53EA\u63D0\u4F9B\u63A5\u53E3\uFF0C\u6709\u5173\u914D\u7F6E\u56FE\u8868\u4E3B\u9898\u53C2\u6570\uFF0C\u8BF7\u53C2\u8003<a href="https://g2.antv.vision/zh/docs/manual/tutorial/theme" target="_blank" rel="noopener">G2\u5B98\u7F51</a>\u3002</p>
<pre><code class="language-ts">// global-config.module.ts
const alainConfig: AlainConfig = &#123;
  chart: &#123; theme: &#39;dark&#39; &#125;,
&#125;;

export class DelonModule &#123;
  static forRoot(): ModuleWithProviders &#123;
    return &#123;
      ngModule: DelonModule,
      providers: [
        provideAlainConfig(alainConfig)
      ]
    &#125;;
  &#125;
&#125;
</code></pre>
`,api:``,toc:[{id:`v4_→_v5_升级须知`,title:`v4 → v5 升级须知`},{id:`如何使用`,title:`如何使用`,children:[{id:`g2类库加载`,title:`G2类库加载`},{id:`导入模块`,title:`导入模块`}]},{id:`自定义_g2_组件`,title:`自定义 G2 组件`},{id:`配置图表主题`,title:`配置图表主题`}],raw:'---\norder: 1\ntitle: 开始使用\ntype: Documents\n---\n\n图表是基于 [G2](https://g2.antv.antgroup.com/) (5.x) 的基础上二次封装，提供了业务中常用的图表套件，可以单独使用，也可以组合起来实现复杂的展示效果。\n\n## v4 → v5 升级须知\n\n`@antv/g2` 已由 v4 升级到 **v5**（`^5.4.8`）。组件公开 API（`[data]`、`[height]`、`[padding]`、`[theme]`、`(ready)`、`(clickItem)` 等）**名称与类型不变**（唯一例外：`g2-water-wave` 的 `[height]` 重命名为 `[size]`），但底层渲染模型改为**异步 spec**：\n\n- **渲染是异步的**：`ready` 事件在**首个 `AFTER_RENDER`（首帧真正画完）**时触发，且**只触发一次**；`loaded`（模板据此收起骨架屏）同时置为 `true`。要拿到图表实例，请订阅 `(ready)`：\n  ```html\n  <g2-bar [data]="data()" (ready)="onReady($event)" (error)="onError($event)" />\n  ```\n- **失败与 `ready` 是两层**：G2 类库未加载、渲染失败都会走 **`(error)`** 事件（同时 `console.error`），`ready` 不会触发、骨架屏不收起。\n- **不再有 `install()` 公开方法**：组件扩展点用受保护的 `afterCreate(chart)` / `onRendered()`；数据变更用 `changeData()`（内部走串行链，不会与首帧竞态）。\n- **交互降级**：v4 的 `active-region`、`drag-move` 在 v5 无等价实现，`[interaction]` 传入时会降级为无交互；其余交互映射见各组件文档。\n- **tooltip 限制**：`domStyles`、`itemTpl` 不再可用（v5 由内置 tooltip 渲染）；视图级 `tooltip` **不会传给子 mark**，需要在 mark 级设置。\n- **点击事件载荷类型**：`Event` → `G2Event`（`ev.data?.data` 为命中数据项）。\n- **`g2-tag-cloud`**：不再把 `x/y/size/rotate/font` 写回数据行（布局改用 v5 内置 `wordCloud` mark 完成，另需 `@antv/data-set` 已从依赖中移除）。\n- **`g2-water-wave`**：v4 的手写 canvas 换成 v5 的 [`liquid`](https://g2.antv.antgroup.com/examples/general/Liquid) mark（中心百分比由 G2 内置文本绘制）；**`[height]` 重命名为 `[size]`**（正方形边长）；`[animate]` **只控制进场动画**（水波自身的流动由 G2 内置、始终运行），尺寸自适应交给 `autoFit`。\n- **转置图表的固定柱厚**：v5 里转置（`coordinate.transform: [{ type: \'transpose\' }]`）时，interval 的**屏幕厚度由 `style.minWidth`/`maxWidth` 夹取**（像素），`style.minHeight` 夹的是屏幕宽 —— 因此 v4 的 `.size(30)` 不能只靠 `encode.size` 复现，需同时写 `style: { minWidth: 30, maxWidth: 30 }`。\n\n\n> 图表的作用，是帮助我们更好地看懂数据。选择什么图表，需要回答的首要问题是『我有什么数据，需要用图表做什么』，而不是 『图表长成什么样』 。\n\n| 分类名 | 组件清单 | 描述\n| ----- | ------- | ---\n| 比较类 | 迷你柱状图：`g2-mini-bar`<br>单一柱状图：`g2-single-bar`<br>柱状图：`g2-bar`<br>雷达图：`g2-radar`<br>迷你区域图：`g2-mini-area`<br>迷你进度条：`g2-mini-progress` | -\n| 分布类 | 折线图：`g2-timeline` | -\n| 占比类 | 饼图：`g2-pie`<br>水波图：`g2-water-wave`<br>迷你进度条：`g2-mini-progress`<br>迷你区域图：`g2-mini-area` | -\n| 区间类 | 仪表盘：`g2-gauge`<br>迷你区域图：`g2-mini-area` | -\n| 趋势类 | 折线图：`g2-timeline`<br>迷你区域图：`g2-mini-area` | -\n| 时间类 | 折线图：`g2-timeline`<br>迷你区域图：`g2-mini-area` | -\n| 其它 | 标签云：`g2-tag-cloud`<br>图表卡片：`g2-chart-card`<br>自定义图表：`g2-chart` | -\n\n## 如何使用\n\n### G2类库加载\n\n默认情况下，在[全局配置](/docs/global-config)已经指定类库 CDN 地址：\n\n```ts\n// global-config.module.ts\nconst alainConfig: AlainConfig = {\n  chart: { \n    // 以下是默认配置，如果项目无法外网访问，可以根据 `angular.json` 配置将依赖包直接使用 `./assets***` 路径\n    libs: [\n      \'https://gw.alipayobjects.com/os/lib/antv/g2/5.4.8/dist/g2.min.js\',\n    ],\n  },\n};\n\nexport class DelonModule {\n  static forRoot(): ModuleWithProviders {\n    return {\n      ngModule: DelonModule,\n      providers: [\n        provideAlainConfig(alainConfig)\n      ]\n    };\n  }\n}\n```\n\n当然也可以在 `index.html` 直接引入 CDN 地址，例如：\n\n```html\n<!-- 引入在线资源，选择你需要的 g2 版本以替换 version 变量 -->\n<script src="https://gw.alipayobjects.com/os/lib/antv/g2/{{version}}/dist/g2.min.js"><\/script>\n```\n\n也可以在 `angular.json` 配置 `assets` 选项（有关 [assets](https://angular.cn/guide/workspace-config#assets-configuration) 文档），从 `node_modules` 来获得G2类库，例如：\n\n```json\n"assets": [\n  {\n    "glob": "**/*",\n    "input": "./node_modules/@antv/g2/dist",\n    "output": "/@antv/g2/"\n  }\n]\n```\n\n最后修改全局配置的 `libs` 参数为：\n\n```ts\n// global-config.module.ts\nconst alainConfig: AlainConfig = {\n  chart: { \n    libs: [\'./assets/@antv/g2/g2.min.js\'],\n  },\n};\n```\n\n### 导入模块\n\n```ts\n// shared.module.ts\nimport { G2BarModule } from \'@delon/chart/bar\';\n\n@NgModule({\n  imports: [ G2BarModule ],\n  exports: [ G2BarModule ]\n})\n```\n\n## 自定义 G2 组件\n\n使用 [g2-chart](/chart/custom) 组件快速自定义一个图表，可以减少不必要的组件渲染过程中所产生的奇怪问题。\n\n## 配置图表主题\n\n对所有 G2 进行配置图表主题，但只提供接口，有关配置图表主题参数，请参考[G2官网](https://g2.antv.vision/zh/docs/manual/tutorial/theme)。\n\n```ts\n// global-config.module.ts\nconst alainConfig: AlainConfig = {\n  chart: { theme: \'dark\' },\n};\n\nexport class DelonModule {\n  static forRoot(): ModuleWithProviders {\n    return {\n      ngModule: DelonModule,\n      providers: [\n        provideAlainConfig(alainConfig)\n      ]\n    };\n  }\n}\n```'}}};codes=[];static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-getting-started`]],hostAttrs:[1,`d-block`],decls:1,vars:2,consts:[[3,`codes`,`item`]],template:function(t,n){t&1&&pt(0,`app-docs`,0),t&2&&ie(`codes`,n.codes)(`item`,n.item)},dependencies:[ce$1],encapsulation:2})};function so(o,e){if(o&1&&(nn$1(0),oe(1,`h4`,3),an$1(2),he$1(),rn$1()),o&2){let t=F();A(2),vr(t.title())}}function mo(o,e){o&1&&(oe(0,`div`,2),pt(1,`nz-skeleton`),he$1())}var po=41;var Xe=class o extends tt$1{title=pe$1();color=pe$1(`rgba(24, 144, 255, 0.85)`);height=pe$1(0,{transform:Oo$1});padding=pe$1(`auto`);data=pe$1([]);autoLabel=pe$1(!0,{transform:H});interaction=pe$1(`none`);clickItem=Zl();getHeight(){return this.title()?this.height()-po:this.height()}containerOf(){return this.node().nativeElement}buildSpec(){let{data:e,color:t,interaction:n,theme:m,padding:p}=this,T=e(),q=this.node().nativeElement.clientWidth;return W(g({},$t$2({theme:m(),padding:p(),height:this.getHeight(),interaction:n()})),{data:T,axis:{x:q>T.length*30?{title:!1}:!1,y:{title:!1,line:!1,tick:!1}},scale:{x:{type:`band`},y:{zero:!0},color:{type:`identity`}},legend:!1,tooltip:{title:!1},children:[{type:`interval`,encode:{x:`x`,y:`y`,color:{type:`transform`,value:B=>B.color||t()}},tooltip:{title:!1,items:[B=>({name:B.x,value:B.y})]}}]})}afterCreate(e){e.on(`interval:click`,t=>{this.clickItem.emit({item:t.data?.data,ev:t})}),this.installResizeEvent()}resizeInstalled=!1;installResizeEvent(){!this.autoLabel()||this.resizeInstalled||(this.resizeInstalled=!0,Qc(window,`resize`).pipe(be(this.destroyRef),Hn(200)).subscribe(()=>{this.repaintSpec()}))}static ɵfac=(()=>{let e;return function(n){return(e||(e=Gn(o)))(n||o)}})();static ɵcmp=Se({type:o,selectors:[[`g2-bar`]],hostVars:4,hostBindings:function(t,n){t&2&&It$1(`height`,n.height(),`px`)(`position`,`relative`)},inputs:{title:[1,`title`],color:[1,`color`],height:[1,`height`],padding:[1,`padding`],data:[1,`data`],autoLabel:[1,`autoLabel`],interaction:[1,`interaction`]},outputs:{clickItem:`clickItem`},exportAs:[`g2Bar`],features:[tn$1],decls:4,vars:2,consts:[[`container`,``],[4,`nzStringTemplateOutlet`],[2,`position`,`absolute`,`inset`,`0`,`z-index`,`1`],[2,`margin-bottom`,`20px`]],template:function(t,n){t&1&&(qe(0,so,3,1,`ng-container`,1),ve(1,mo,2,0,`div`,2),pt(2,`div`,null,0)),t&2&&(ie(`nzStringTemplateOutlet`,n.title()),A(),ye(n.loaded()?-1:1))},dependencies:[er,Z],encapsulation:2})};var ho=[Xe];var gt=class o{static ɵfac=function(t){return new(t||o)};static ɵmod=ee({type:o});static ɵinj=X({imports:[Rb,Jr,ee$1,ho]})};var ft=class o{msg=h(lu);salesData=G(this.genData());genData(){return new Array(12).fill({}).map((e,t)=>({x:`${t+1}\u6708`,y:Math.floor(Math.random()*1e3)+200,color:t>5?`#f50`:void 0}))}refresh(){this.salesData.set(this.genData())}handleClick(e){this.msg.info(`${e.item.x} - ${e.item.y}`)}static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-bar-basic`]],decls:3,vars:2,consts:[[`nz-button`,``,`nzType`,`primary`,3,`click`],[`height`,`200`,3,`clickItem`,`title`,`data`]],template:function(t,n){t&1&&(oe(0,`button`,0),je(`click`,function(){return n.refresh()}),an$1(1,`Refresh`),he$1(),oe(2,`g2-bar`,1),je(`clickItem`,function(p){return n.handleClick(p)}),he$1()),t&2&&(A(2),ie(`title`,`销售额趋势`)(`data`,n.salesData()))},dependencies:[v5,a3,f5,m5,gt,Xe],encapsulation:2})};var yt=class o{item={name:`bar`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{title:`g2-bar`,subtitle:`Bar`,cols:1,module:`import { G2BarModule } from '@delon/chart/bar';`,description:`Use vertical bars to compare values between categories. One axis represents the categorical dimension to compare, and the other represents the corresp...`,group:`G2`,order:0,path:`packages/chart/bar/index.en-US.md`,url:`/chart/bar/en`},text:`<p>Use vertical bars to compare values between categories. One axis represents the categorical dimension to compare, and the other represents the corresponding value.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="g2-bar"><a class="lake-link"><i data-anchor="g2-bar"></i></a>g2-bar</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[repaint]</code></td>
<td>Whether to repaint when the data changes again</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[delay]</code></td>
<td>Delayed rendering, unit: ms</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[title]</code></td>
<td>Title of the chart</td>
<td><code>string,TemplateRef&lt;void&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[color]</code></td>
<td>Color of the chart</td>
<td><code>string</code></td>
<td><code>rgba(24, 144, 255, 0.85)</code></td>
</tr>
<tr>
<td><code>[padding]</code></td>
<td>Padding of the chart, <code>&#39;auto&#39;</code> means G2 calculates it automatically</td>
<td><code>Array&lt;number | string&gt; | string</code></td>
<td><code>&#39;auto&#39;</code></td>
</tr>
<tr>
<td><code>[height]</code></td>
<td>Height of the chart</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[data]</code></td>
<td>Data</td>
<td><code>G2BarData[]</code></td>
<td><code>[]</code></td>
</tr>
<tr>
<td><code>[autoLabel]</code></td>
<td>Automatically hide the x-axis label when the width is insufficient</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[interaction]</code></td>
<td>Interaction type: <code>none</code> (no interaction), <code>element-active</code> (active element), <code>active-region</code> (chart component), <code>brush</code> (brush selection), <code>drag-move</code> (drag to move)</td>
<td><code>InteractionType</code></td>
<td><code>none</code></td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td>Custom chart theme</td>
<td><code>string | LooseObject</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(clickItem)</code></td>
<td>Callback when clicking an item</td>
<td><code>output&lt;G2BarClickItem&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>Callback when G2 is initialized</td>
<td><code>output&lt;Chart&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(error)</code></td>
<td>Callback when rendering fails (G2 not loaded or render throws); <code>(ready)</code> will not fire</td>
<td><code>output&lt;unknown&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="g2bardata"><a class="lake-link"><i data-anchor="g2bardata"></i></a>G2BarData</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[x]</code></td>
<td>x-axis</td>
<td><code>any</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[y]</code></td>
<td>y-axis</td>
<td><code>any</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[color]</code></td>
<td>Color of the axis</td>
<td><code>string</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-bar`,title:`g2-bar`},{id:`g2bardata`,title:`G2BarData`}]}],raw:"---\ntitle: g2-bar\nsubtitle: Bar\ncols: 1\ntype: G2\nmodule: import { G2BarModule } from '@delon/chart/bar';\n---\n\nUse vertical bars to compare values between categories. One axis represents the categorical dimension to compare, and the other represents the corresponding value.\n\n## API\n\n### g2-bar\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[repaint]` | Whether to repaint when the data changes again | `boolean` | `true` |\n| `[delay]` | Delayed rendering, unit: ms | `number` | `0` |\n| `[title]` | Title of the chart | `string,TemplateRef<void>` | - |\n| `[color]` | Color of the chart | `string` | `rgba(24, 144, 255, 0.85)` |\n| `[padding]` | Padding of the chart, `'auto'` means G2 calculates it automatically | `Array<number \\| string> \\| string` | `'auto'` |\n| `[height]` | Height of the chart | `number` | - |\n| `[data]` | Data | `G2BarData[]` | `[]` |\n| `[autoLabel]` | Automatically hide the x-axis label when the width is insufficient | `boolean` | `true` |\n| `[interaction]` | Interaction type: `none` (no interaction), `element-active` (active element), `active-region` (chart component), `brush` (brush selection), `drag-move` (drag to move) | `InteractionType` | `none` |\n| `[theme]` | Custom chart theme | `string \\| LooseObject` | - |\n| `(clickItem)` | Callback when clicking an item | `output<G2BarClickItem>` | - |\n| `(ready)` | Callback when G2 is initialized | `output<Chart>` | - |\n| `(error)` | Callback when rendering fails (G2 not loaded or render throws); `(ready)` will not fire | `output<unknown>` | - |\n\n### G2BarData\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[x]` | x-axis | `any` | - |\n| `[y]` | y-axis | `any` | - |\n| `[color]` | Color of the axis | `string` | - |"},"zh-CN":{meta:{title:`g2-bar`,subtitle:`柱状图`,cols:1,module:`import { G2BarModule } from '@delon/chart/bar';`,description:`使用垂直的柱子显示类别之间的数值比较。其中一个轴表示需要对比的分类维度，另一个轴代表相应的数值。`,group:`G2`,order:0,path:`packages/chart/bar/index.zh-CN.md`,url:`/chart/bar/zh`},text:`<p>\u4F7F\u7528\u5782\u76F4\u7684\u67F1\u5B50\u663E\u793A\u7C7B\u522B\u4E4B\u95F4\u7684\u6570\u503C\u6BD4\u8F83\u3002\u5176\u4E2D\u4E00\u4E2A\u8F74\u8868\u793A\u9700\u8981\u5BF9\u6BD4\u7684\u5206\u7C7B\u7EF4\u5EA6\uFF0C\u53E6\u4E00\u4E2A\u8F74\u4EE3\u8868\u76F8\u5E94\u7684\u6570\u503C\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="g2-bar"><a class="lake-link"><i data-anchor="g2-bar"></i></a>g2-bar</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[repaint]</code></td>
<td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[delay]</code></td>
<td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[title]</code></td>
<td>\u56FE\u8868\u6807\u9898</td>
<td><code>string,TemplateRef&lt;void&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[color]</code></td>
<td>\u56FE\u8868\u989C\u8272</td>
<td><code>string</code></td>
<td><code>rgba(24, 144, 255, 0.85)</code></td>
</tr>
<tr>
<td><code>[padding]</code></td>
<td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD\uFF0C<code>&#39;auto&#39;</code> \u8868\u793A\u7531 G2 \u81EA\u52A8\u8BA1\u7B97</td>
<td><code>Array&lt;number | string&gt; | string</code></td>
<td><code>&#39;auto&#39;</code></td>
</tr>
<tr>
<td><code>[height]</code></td>
<td>\u56FE\u8868\u9AD8\u5EA6</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[data]</code></td>
<td>\u6570\u636E</td>
<td><code>G2BarData[]</code></td>
<td><code>[]</code></td>
</tr>
<tr>
<td><code>[autoLabel]</code></td>
<td>\u5728\u5BBD\u5EA6\u4E0D\u8DB3\u65F6\uFF0C\u81EA\u52A8\u9690\u85CF x \u8F74\u7684 label</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[interaction]</code></td>
<td>\u4EA4\u4E92\u7C7B\u578B\uFF0Cnone \u65E0 element-active \u56FE\u5F62\u5143\u7D20\uFF0Cactive-region \u56FE\u8868\u7EC4\u4EF6\uFF0Cbrush \u6846\u9009\uFF0Cdrag-move \u79FB\u52A8</td>
<td><code>InteractionType</code></td>
<td><code>none</code></td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td>
<td><code>string | LooseObject</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(clickItem)</code></td>
<td>\u70B9\u51FB\u9879\u56DE\u8C03</td>
<td><code>output&lt;G2BarClickItem&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td>
<td><code>output&lt;Chart&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(error)</code></td>
<td>\u5F53\u6E32\u67D3\u5931\u8D25\u65F6\u8C03\u7528\uFF08G2 \u672A\u52A0\u8F7D\u6216\u6E32\u67D3\u629B\u9519\uFF09\uFF0C\u6B64\u65F6 <code>(ready)</code> \u4E0D\u4F1A\u89E6\u53D1</td>
<td><code>output&lt;unknown&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="g2bardata"><a class="lake-link"><i data-anchor="g2bardata"></i></a>G2BarData</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[x]</code></td>
<td>x\u8F74</td>
<td><code>any</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[y]</code></td>
<td>y\u8F74</td>
<td><code>any</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[color]</code></td>
<td>\u8F74\u989C\u8272</td>
<td><code>string</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-bar`,title:`g2-bar`},{id:`g2bardata`,title:`G2BarData`}]}],raw:"---\ntitle: g2-bar\nsubtitle: 柱状图\ncols: 1\ntype: G2\nmodule: import { G2BarModule } from '@delon/chart/bar';\n---\n\n使用垂直的柱子显示类别之间的数值比较。其中一个轴表示需要对比的分类维度，另一个轴代表相应的数值。\n\n## API\n\n### g2-bar\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |\n| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |\n| `[title]` | 图表标题 | `string,TemplateRef<void>` | - |\n| `[color]` | 图表颜色 | `string` | `rgba(24, 144, 255, 0.85)` |\n| `[padding]` | 图表内部间距，`'auto'` 表示由 G2 自动计算 | `Array<number \\| string> \\| string` | `'auto'` |\n| `[height]` | 图表高度 | `number` | - |\n| `[data]` | 数据 | `G2BarData[]` | `[]` |\n| `[autoLabel]` | 在宽度不足时，自动隐藏 x 轴的 label | `boolean` | `true` |\n| `[interaction]` | 交互类型，none 无 element-active 图形元素，active-region 图表组件，brush 框选，drag-move 移动 | `InteractionType` | `none` |\n| `[theme]` | 定制图表主题 | `string \\| LooseObject` | - |\n| `(clickItem)` | 点击项回调 | `output<G2BarClickItem>` | - |\n| `(ready)` | 当G2完成初始化后调用 | `output<Chart>` | - |\n| `(error)` | 当渲染失败时调用（G2 未加载或渲染抛错），此时 `(ready)` 不会触发 | `output<unknown>` | - |\n\n### G2BarData\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[x]` | x轴 | `any` | - |\n| `[y]` | y轴 | `any` | - |\n| `[color]` | 轴颜色 | `string` | - |"}}};codes=[{id:`chart-bar-basic`,name:`basic`,title:{"zh-CN":`基本`,"en-US":`Basic`},code:`import { Component, inject, signal } from '@angular/core';

import { G2BarClickItem, G2BarData, G2BarModule } from '@delon/chart/bar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-bar-basic',
  template: \`
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-bar height="200" [title]="'\u9500\u552E\u989D\u8D8B\u52BF'" [data]="salesData()" (clickItem)="handleClick($event)" />
  \`,
  imports: [NzButtonModule, G2BarModule]
})
export class ChartBarBasic {
  private readonly msg = inject(NzMessageService);

  readonly salesData = signal(this.genData());

  private genData(): G2BarData[] {
    return new Array(12).fill({}).map((_i, idx) => ({
      x: \`\${idx + 1}\u6708\`,
      y: Math.floor(Math.random() * 1000) + 200,
      color: idx > 5 ? '#f50' : undefined
    }));
  }

  refresh(): void {
    this.salesData.set(this.genData());
  }

  handleClick(data: G2BarClickItem): void {
    this.msg.info(\`\${data.item.x} - \${data.item.y}\`);
  }
}`,order:0,type:`demo`,summary:{"en-US":`<p>By setting the <code>x</code> and <code>y</code> attributes, you can quickly build a beautiful bar chart, and the relationship between the various dimensions is presented through custom data.</p>
`,"zh-CN":`<p>\u901A\u8FC7\u8BBE\u7F6E <code>x</code>\uFF0C<code>y</code> \u5C5E\u6027\uFF0C\u53EF\u4EE5\u5FEB\u901F\u7684\u6784\u5EFA\u51FA\u4E00\u4E2A\u6F02\u4EAE\u7684\u67F1\u72B6\u56FE\uFF0C\u5404\u79CD\u7EAC\u5EA6\u7684\u5173\u7CFB\u5219\u662F\u901A\u8FC7\u81EA\u5B9A\u4E49\u7684\u6570\u636E\u5C55\u73B0\u3002</p>
`},summary_raw:{"en-US":"By setting the `x` and `y` attributes, you can quickly build a beautiful bar chart, and the relationship between the various dimensions is presented through custom data.\n","zh-CN":"通过设置 `x`，`y` 属性，可以快速的构建出一个漂亮的柱状图，各种纬度的关系则是通过自定义的数据展现。\n"},path:`packages/chart/bar/demo/basic.md`}];static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-bar`]],hostAttrs:[1,`d-block`],decls:5,vars:5,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`24`],[3,`item`]],template:function(t,n){t&1&&(oe(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),pt(4,`chart-bar-basic`),he$1()()()()),t&2&&(ie(`codes`,n.codes)(`item`,n.item),A(),ie(`nzGutter`,16),A(2),ie(`item`,n.codes[0]),$t$1(`id`,n.codes[0].id))},dependencies:[ce$1,ft,sn$1,We$1,X$1],encapsulation:2})};var go=[`*`];var fo=()=>({padding:`20px 24px 8px 24px`});function yo(o,e){if(o&1&&(nn$1(0),an$1(1),rn$1()),o&2){let t=F();A(),vr(t.avatar())}}function bo(o,e){if(o&1&&(nn$1(0),an$1(1),rn$1()),o&2){let t=F(2);A(),vr(t.title())}}function vo(o,e){if(o&1&&(oe(0,`span`,7),qe(1,bo,2,1,`ng-container`,4),he$1()),o&2){let t=F();A(),ie(`nzStringTemplateOutlet`,t.title())}}function Co(o,e){if(o&1&&(nn$1(0),an$1(1),rn$1()),o&2){let t=F(2);A(),vr(t.action())}}function Do(o,e){if(o&1&&(oe(0,`span`,8),qe(1,Co,2,1,`ng-container`,4),he$1()),o&2){let t=F();A(),ie(`nzStringTemplateOutlet`,t.action())}}function Mo(o,e){if(o&1&&pt(0,`p`,9),o&2){let t=F();ie(`innerHTML`,t.total(),Sa$1)}}function xo(o,e){if(o&1&&(nn$1(0),an$1(1),rn$1()),o&2){let t=F(2);A(),vr(t.footer())}}function ko(o,e){if(o&1&&(oe(0,`div`,11),qe(1,xo,2,1,`ng-container`,4),he$1()),o&2){let t=F();A(),ie(`nzStringTemplateOutlet`,t.footer())}}var ce=class o{bordered=pe$1(!1,{transform:H});avatar=pe$1();title=pe$1();action=pe$1();total=pe$1(``);contentHeight=pe$1();footer=pe$1();loading=pe$1(!1,{transform:H});_height=Fe$1(()=>{let e=this.contentHeight();return typeof e==`number`?`${e}px`:e});static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`g2-card`]],hostVars:2,hostBindings:function(t,n){t&2&&Ze(`g2-card`,!0)},inputs:{bordered:[1,`bordered`],avatar:[1,`avatar`],title:[1,`title`],action:[1,`action`],total:[1,`total`],contentHeight:[1,`contentHeight`],footer:[1,`footer`],loading:[1,`loading`]},exportAs:[`g2Card`],ngContentSelectors:go,decls:14,vars:13,consts:[[3,`nzBodyStyle`,`nzBordered`],[3,`nzSpinning`],[1,`g2-card__top`],[1,`g2-card__avatar`],[4,`nzStringTemplateOutlet`],[1,`g2-card__meta-wrap`],[1,`g2-card__meta`],[1,`g2-card__meta-title`],[1,`g2-card__meta-action`],[1,`g2-card__total`,3,`innerHTML`],[1,`g2-card__desc`],[1,`g2-card__footer`]],template:function(t,n){t&1&&(yn(),oe(0,`nz-card`,0)(1,`nz-spin`,1)(2,`div`,2)(3,`div`,3),qe(4,yo,2,1,`ng-container`,4),he$1(),oe(5,`div`,5)(6,`div`,6),ve(7,vo,2,1,`span`,7),ve(8,Do,2,1,`span`,8),he$1(),ve(9,Mo,1,1,`p`,9),he$1()(),oe(10,`div`,10)(11,`div`),Wt$1(12),he$1()(),ve(13,ko,2,1,`div`,11),he$1()()),t&2&&(ie(`nzBodyStyle`,MO(12,fo))(`nzBordered`,n.bordered()),A(),ie(`nzSpinning`,n.loading()),A(3),ie(`nzStringTemplateOutlet`,n.avatar()),A(3),ye(n.title()?7:-1),A(),ye(n.action()?8:-1),A(),ye(n.total()?9:-1),A(),It$1(`height`,n._height()),A(),Ze(`g2-card__fixed`,!!n.contentHeight()),A(2),ye(n.footer()?13:-1))},dependencies:[Dt$1,Sn,er],encapsulation:2})};var Go=[ce];var Ae=class o{static ɵfac=function(t){return new(t||o)};static ɵmod=ee({type:o});static ɵinj=X({imports:[Rb,Wt$2,_n,Jr,Go]})};var zo=[`*`];function To(o,e){if(o&1&&(oe(0,`span`),pt(1,`nz-icon`,1),he$1()),o&2){let t=F();Lt$1(hf(`trend__`,t.flag())),A(),ie(`nzType`,hf(`caret-`,t.flag()))}}var me=class o{flag=pe$1();colorful=pe$1(!0,{transform:H});reverseColor=pe$1(!1,{transform:H});static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`trend`]],hostVars:7,hostBindings:function(t,n){t&2&&($t$1(`data-flag`,n.flag()),Ze(`trend`,!0)(`trend__grey`,!n.colorful())(`trend__reverse`,n.colorful()&&n.reverseColor()))},inputs:{flag:[1,`flag`],colorful:[1,`colorful`],reverseColor:[1,`reverseColor`]},exportAs:[`trend`],ngContentSelectors:zo,decls:2,vars:1,consts:[[3,`class`],[3,`nzType`]],template:function(t,n){t&1&&(yn(),Wt$1(0),ve(1,To,2,5,`span`,0)),t&2&&(A(),ye(n.flag()?1:-1))},dependencies:[Gt$1],encapsulation:2})};var Be=class o{static ɵfac=function(t){return new(t||o)};static ɵmod=ee({type:o});static ɵinj=X({imports:[Rb,xr]})};function wo(o,e){o&1&&pt(0,`nz-icon`,4)}var bt=class o{static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-card-style1`]],decls:9,vars:4,consts:[[`action`,``],[`footer`,`日访问量 12,423`,`contentHeight`,`46`,3,`title`,`bordered`,`total`,`action`],[`flag`,`up`,2,`margin`,`0 16px 0 8px`,`color`,`rgba(0,0,0,.85)`],[`flag`,`down`,2,`margin`,`0 0 0 8px`,`color`,`rgba(0,0,0,.85)`],[`nz-tooltip`,``,`nzTooltipTitle`,`指标说明`,`nzType`,`info-circle`]],template:function(t,n){if(t&1&&(oe(0,`g2-card`,1),qe(1,wo,1,0,`ng-template`,null,0,ql),an$1(3,` 周同比 `),oe(4,`trend`,2),an$1(5,`12%`),he$1(),an$1(6,` 日环比 `),oe(7,`trend`,3),an$1(8,`11%`),he$1()()),t&2){let m=Wl(2);ie(`title`,`销售额`)(`bordered`,!0)(`total`,`¥ 126,560.00`)(`action`,m)}},dependencies:[Ae,ce,Xs,Ys,Be,me],encapsulation:2})};function So(o,e){o&1&&pt(0,`img`,3)}function _o(o,e){o&1&&pt(0,`nz-icon`,4)}var vt=class o{static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-card-style2`]],decls:5,vars:5,consts:[[`avatar`,``],[`action`,``],[`footer`,`日访问量 12,423`,3,`title`,`bordered`,`total`,`avatar`,`action`],[`src`,`./assets/img/logo-color.svg`,2,`width`,`56px`,`height`,`56px`],[`nz-tooltip`,``,`nzTooltipTitle`,`指标说明`,`nzType`,`info-circle`]],template:function(t,n){if(t&1&&(oe(0,`g2-card`,2),qe(1,So,1,0,`ng-template`,null,0,ql)(3,_o,1,0,`ng-template`,null,1,ql),he$1()),t&2){let m=Wl(2),p=Wl(4);ie(`title`,`移动指标`)(`bordered`,!0)(`total`,`¥ 126,560.00`)(`avatar`,m)(`action`,p)}},dependencies:[Ae,ce,Xs,Ys,xr,Gt$1],encapsulation:2})};function Io(o,e){o&1&&pt(0,`img`,3)}function Ao(o,e){o&1&&pt(0,`nz-icon`,4)}var Ct=class o{static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-card-style3`]],decls:5,vars:5,consts:[[`avatar`,``],[`action`,``],[3,`title`,`bordered`,`total`,`avatar`,`action`],[`src`,`./assets/img/logo-color.svg`,2,`width`,`56px`,`height`,`56px`],[`nz-tooltip`,``,`nzTooltipTitle`,`指标说明`,`nzType`,`info-circle`]],template:function(t,n){if(t&1&&(oe(0,`g2-card`,2),qe(1,Io,1,0,`ng-template`,null,0,ql)(3,Ao,1,0,`ng-template`,null,1,ql),he$1()),t&2){let m=Wl(2),p=Wl(4);ie(`title`,`移动指标`)(`bordered`,!0)(`total`,`¥ 126,560.00`)(`avatar`,m)(`action`,p)}},dependencies:[Ae,ce,Xs,Ys,xr,Gt$1],encapsulation:2})};var Dt=class o{item={name:`card`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{title:`g2-card`,subtitle:`Chart Card`,cols:2,module:`import { G2CardModule } from '@delon/chart/card';`,description:`Chart card, a card container for charts, which can be easily combined with other chart suites to display rich information.`,group:`G2`,order:0,path:`packages/chart/card/index.en-US.md`,url:`/chart/card/en`},text:`<p>Chart card, a card container for charts, which can be easily combined with other chart suites to display rich information.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="g2-card"><a class="lake-link"><i data-anchor="g2-card"></i></a>g2-card</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[title]</code></td>
<td>Title of the card</td>
<td><code>string,TemplateRef&lt;void&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[avatar]</code></td>
<td>Avatar</td>
<td><code>string,TemplateRef&lt;void&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[action]</code></td>
<td>Action of the card</td>
<td><code>string,TemplateRef&lt;void&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[total]</code></td>
<td>Total amount of the data (HTML supported)</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[footer]</code></td>
<td>Footer of the card</td>
<td><code>string,TemplateRef&lt;void&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[contentHeight]</code></td>
<td>Height of the content area (unit: <code>px</code>)</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[bordered]</code></td>
<td>Whether to display the border</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[loading]</code></td>
<td>Whether to display the loading state (<code>nz-spin</code> wraps the content)</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-card`,title:`g2-card`}]}],raw:"---\ntitle: g2-card\nsubtitle: Chart Card\ncols: 2\ntype: G2\nmodule: import { G2CardModule } from '@delon/chart/card';\n---\n\nChart card, a card container for charts, which can be easily combined with other chart suites to display rich information.\n\n## API\n\n### g2-card\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[title]` | Title of the card | `string,TemplateRef<void>` | - |\n| `[avatar]` | Avatar | `string,TemplateRef<void>` | - |\n| `[action]` | Action of the card | `string,TemplateRef<void>` | - |\n| `[total]` | Total amount of the data (HTML supported) | `string` | - |\n| `[footer]` | Footer of the card | `string,TemplateRef<void>` | - |\n| `[contentHeight]` | Height of the content area (unit: `px`) | `string` | - |\n| `[bordered]` | Whether to display the border | `boolean` | `false` |\n| `[loading]` | Whether to display the loading state (`nz-spin` wraps the content) | `boolean` | `false` |"},"zh-CN":{meta:{title:`g2-card`,subtitle:`图表卡片`,cols:2,module:`import { G2CardModule } from '@delon/chart/card';`,description:`图表卡片，用于展示图表的卡片容器，可以方便的配合其它图表套件展示丰富信息。`,group:`G2`,order:0,path:`packages/chart/card/index.zh-CN.md`,url:`/chart/card/zh`},text:`<p>\u56FE\u8868\u5361\u7247\uFF0C\u7528\u4E8E\u5C55\u793A\u56FE\u8868\u7684\u5361\u7247\u5BB9\u5668\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u7684\u914D\u5408\u5176\u5B83\u56FE\u8868\u5957\u4EF6\u5C55\u793A\u4E30\u5BCC\u4FE1\u606F\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="g2-card"><a class="lake-link"><i data-anchor="g2-card"></i></a>g2-card</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[title]</code></td>
<td>\u5361\u7247\u6807\u9898</td>
<td><code>string,TemplateRef&lt;void&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[avatar]</code></td>
<td>\u5934\u50CF</td>
<td><code>string,TemplateRef&lt;void&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[action]</code></td>
<td>\u5361\u7247\u64CD\u4F5C</td>
<td><code>string,TemplateRef&lt;void&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[total]</code></td>
<td>\u6570\u636E\u603B\u91CF\uFF08\u652F\u6301HTML\uFF09</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[footer]</code></td>
<td>\u5361\u7247\u5E95\u90E8</td>
<td><code>string,TemplateRef&lt;void&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[contentHeight]</code></td>
<td>\u5185\u5BB9\u533A\u57DF\u9AD8\u5EA6\uFF08\u5355\u4F4D\uFF1A<code>px</code>\uFF09</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[bordered]</code></td>
<td>\u662F\u5426\u663E\u793A\u8FB9\u6846</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[loading]</code></td>
<td>\u662F\u5426\u663E\u793A\u52A0\u8F7D\u4E2D\uFF08\u5185\u5BB9\u533A\u5305\u88F9 <code>nz-spin</code>\uFF09</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-card`,title:`g2-card`}]}],raw:"---\ntitle: g2-card\nsubtitle: 图表卡片\ncols: 2\ntype: G2\nmodule: import { G2CardModule } from '@delon/chart/card';\n---\n\n图表卡片，用于展示图表的卡片容器，可以方便的配合其它图表套件展示丰富信息。\n\n## API\n\n### g2-card\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[title]` | 卡片标题 | `string,TemplateRef<void>` | - |\n| `[avatar]` | 头像 | `string,TemplateRef<void>` | - |\n| `[action]` | 卡片操作 | `string,TemplateRef<void>` | - |\n| `[total]` | 数据总量（支持HTML） | `string` | - |\n| `[footer]` | 卡片底部 | `string,TemplateRef<void>` | - |\n| `[contentHeight]` | 内容区域高度（单位：`px`） | `string` | - |\n| `[bordered]` | 是否显示边框 | `boolean` | `false` |\n| `[loading]` | 是否显示加载中（内容区包裹 `nz-spin`） | `boolean` | `false` |"}}};codes=[{id:`chart-card-style1`,name:`style1`,title:{"zh-CN":`风格一`,"en-US":`Style 1`},code:`import { Component } from '@angular/core';

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
export class ChartCardStyle1 {}`,order:0,type:`demo`,summary:{"en-US":`<p>Usage of style 1.</p>
`,"zh-CN":`<p>\u98CE\u683C\u4E00\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Usage of style 1.
`,"zh-CN":`\u98CE\u683C\u4E00\u7528\u6CD5\u3002
`},path:`packages/chart/card/demo/style1.md`},{id:`chart-card-style2`,name:`style2`,title:{"zh-CN":`风格二`,"en-US":`Style 2`},code:`import { Component } from '@angular/core';

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
export class ChartCardStyle2 {}`,order:0,type:`demo`,summary:{"en-US":`<p>Usage of style 2.</p>
`,"zh-CN":`<p>\u98CE\u683C\u4E8C\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Usage of style 2.
`,"zh-CN":`\u98CE\u683C\u4E8C\u7528\u6CD5\u3002
`},path:`packages/chart/card/demo/style2.md`},{id:`chart-card-style3`,name:`style3`,title:{"zh-CN":`风格三`,"en-US":`Style 3`},code:`import { Component } from '@angular/core';

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
export class ChartCardStyle3 {}`,order:0,type:`demo`,summary:{"en-US":`<p>Usage of style 3.</p>
`,"zh-CN":`<p>\u98CE\u683C\u4E09\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Usage of style 3.
`,"zh-CN":`\u98CE\u683C\u4E09\u7528\u6CD5\u3002
`},path:`packages/chart/card/demo/style3.md`}];static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-card`]],hostAttrs:[1,`d-block`],decls:10,vars:9,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`12`],[3,`item`]],template:function(t,n){t&1&&(oe(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),pt(4,`chart-card-style1`),he$1(),oe(5,`code-box`,3),pt(6,`chart-card-style3`),he$1()(),oe(7,`div`,2)(8,`code-box`,3),pt(9,`chart-card-style2`),he$1()()()()),t&2&&(ie(`codes`,n.codes)(`item`,n.item),A(),ie(`nzGutter`,16),A(2),ie(`item`,n.codes[0]),$t$1(`id`,n.codes[0].id),A(2),ie(`item`,n.codes[2]),$t$1(`id`,n.codes[2].id),A(3),ie(`item`,n.codes[1]),$t$1(`id`,n.codes[1].id))},dependencies:[ce$1,bt,vt,Ct,sn$1,We$1,X$1],encapsulation:2})};var Mt=class o{dark=G(!1);two=G(!1);option1={tooltip:{formatter:`{a} <br/>{b} : {c}%`},series:[{name:`Pressure`,type:`gauge`,detail:{formatter:`{value}`},data:[{value:50,name:`SCORE`}]}]};option2={title:{text:`ECharts 入门示例`},tooltip:{},legend:{data:[`销量`]},xAxis:{data:[`衬衫`,`羊毛衫`,`雪纺衫`,`裤子`,`高跟鞋`,`袜子`]},yAxis:{},series:[{name:`销量`,type:`bar`,data:[5,20,36,10,10,20]}]};handleEvents(e){console.log(e)}static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-chart-echarts-basic`]],decls:6,vars:3,consts:[[1,`mb-md`],[3,`ngModelChange`,`ngModel`],[`nz-button`,``,`nzType`,`primary`,3,`click`],[3,`events`,`option`,`theme`]],template:function(t,n){t&1&&(oe(0,`div`,0)(1,`nz-switch`,1),hI(),Hy(`ngModelChange`,function(p){return hO(n.dark,p)||(n.dark=p),p}),he$1(),an$1(2,` Dark `),oe(3,`button`,2),je(`click`,function(){return n.two.set(!n.two())}),an$1(4,`Change Option`),he$1()(),oe(5,`chart-echarts`,3),je(`events`,function(p){return n.handleEvents(p)}),he$1()),t&2&&(A(),Fy(`ngModel`,n.dark),pI(),A(4),ie(`option`,n.two()?n.option1:n.option2)(`theme`,n.dark()?`dark`:null))},dependencies:[fr,jn,Fi,Kt$1,He,v5,a3,f5,m5,nt$1,D],encapsulation:2})};var xt=class o{msg=h(lu);dark=!1;two=!1;on=[{eventName:`click`,handler:({event:e,chart:t})=>{this.msg.info(`${e.type}: ${e.name} - ${e.value} (${t.id})`)}}];option={xAxis:{type:`category`,data:[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`]},yAxis:{type:`value`},series:[{data:[150,230,224,218,135,147,260],type:`line`}]};static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-chart-echarts-on`]],decls:1,vars:2,consts:[[3,`option`,`on`]],template:function(t,n){t&1&&pt(0,`chart-echarts`,0),t&2&&ie(`option`,n.option)(`on`,n.on)},dependencies:[nt$1,D],encapsulation:2})};var kt=class o{item={name:`chart-echarts`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{title:`chart-echarts`,subtitle:`ECharts`,cols:1,module:`import { ChartEChartsModule } from '@delon/chart/chart-echarts';`,description:`ECharts is an open-source JavaScript visualization library. The ECharts script is lazy-loaded and works out of the box.`,group:`ECharts`,order:0,path:`packages/chart/chart-echarts/index.en-US.md`,url:`/chart/chart-echarts/en`},text:`<p><a href="https://echarts.apache.org/en/index.html" target="_blank" rel="noopener">ECharts</a> is an open-source JavaScript visualization library. The ECharts script is lazy-loaded and works out of the box.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="chart-echarts"><a class="lake-link"><i data-anchor="chart-echarts"></i></a>chart-echarts</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[width]</code></td>
<td>Width of the chart</td>
<td><code>number, string</code></td>
<td><code>100%</code></td>
</tr>
<tr>
<td><code>[height]</code></td>
<td>Height of the chart</td>
<td><code>number, string</code></td>
<td><code>400px</code></td>
</tr>
<tr>
<td><code>[option]</code></td>
<td><a href="https://echarts.apache.org/en/option.html#title" target="_blank" rel="noopener">Options</a></td>
<td><code>ChartEChartsOption</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td><a href="https://echarts.apache.org/en/theme-builder.html" target="_blank" rel="noopener">Theme</a> configuration</td>
<td><code>string, object</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[initOpt]</code></td>
<td><a href="https://echarts.apache.org/en/api.html#echarts.init" target="_blank" rel="noopener">init</a> options (such as <code>renderer</code>, <code>devicePixelRatio</code>); changing it recreates the instance</td>
<td><code>object</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[on]</code></td>
<td>Equivalent to the ECharts <a href="https://echarts.apache.org/en/api.html#echartsInstance.on" target="_blank" rel="noopener">on</a></td>
<td><code>ChartEChartsOn[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(events)</code></td>
<td>Event callback</td>
<td><code>output&lt;ChartEChartsEvent&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`chart-echarts`,title:`chart-echarts`}]}],raw:"---\ntitle: chart-echarts\nsubtitle: ECharts\ncols: 1\ntype: ECharts\nmodule: import { ChartEChartsModule } from '@delon/chart/chart-echarts';\n---\n\n[ECharts](https://echarts.apache.org/en/index.html) is an open-source JavaScript visualization library. The ECharts script is lazy-loaded and works out of the box.\n\n## API\n\n### chart-echarts\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[width]` | Width of the chart | `number, string` | `100%` |\n| `[height]` | Height of the chart | `number, string` | `400px` |\n| `[option]` | [Options](https://echarts.apache.org/en/option.html#title) | `ChartEChartsOption` | - |\n| `[theme]` | [Theme](https://echarts.apache.org/en/theme-builder.html) configuration | `string, object` | - |\n| `[initOpt]` | [init](https://echarts.apache.org/en/api.html#echarts.init) options (such as `renderer`, `devicePixelRatio`); changing it recreates the instance | `object` | - |\n| `[on]` | Equivalent to the ECharts [on](https://echarts.apache.org/en/api.html#echartsInstance.on) | `ChartEChartsOn[]` | - |\n| `(events)` | Event callback | `output<ChartEChartsEvent>` | - |"},"zh-CN":{meta:{title:`chart-echarts`,subtitle:`ECharts`,cols:1,module:`import { ChartEChartsModule } from '@delon/chart/chart-echarts';`,description:`ECharts 一个基于 JavaScript 的开源可视化图表库。使用懒加载 ECharts 脚本，开箱启用。`,group:`ECharts`,order:0,path:`packages/chart/chart-echarts/index.zh-CN.md`,url:`/chart/chart-echarts/zh`},text:`<p><a href="https://echarts.apache.org/zh/index.html" target="_blank" rel="noopener">ECharts</a> \u4E00\u4E2A\u57FA\u4E8E JavaScript \u7684\u5F00\u6E90\u53EF\u89C6\u5316\u56FE\u8868\u5E93\u3002\u4F7F\u7528\u61D2\u52A0\u8F7D ECharts \u811A\u672C\uFF0C\u5F00\u7BB1\u542F\u7528\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="chart-echarts"><a class="lake-link"><i data-anchor="chart-echarts"></i></a>chart-echarts</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[width]</code></td>
<td>\u56FE\u8868\u5BBD\u5EA6</td>
<td><code>number, string</code></td>
<td><code>100%</code></td>
</tr>
<tr>
<td><code>[height]</code></td>
<td>\u56FE\u8868\u9AD8\u5EA6</td>
<td><code>number, string</code></td>
<td><code>400px</code></td>
</tr>
<tr>
<td><code>[option]</code></td>
<td><a href="https://echarts.apache.org/zh/option.html#title" target="_blank" rel="noopener">\u914D\u7F6E\u9879</a></td>
<td><code>ChartEChartsOption</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td><a href="https://echarts.apache.org/zh/theme-builder.html" target="_blank" rel="noopener">\u4E3B\u9898</a>\u914D\u7F6E</td>
<td><code>string, object</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[initOpt]</code></td>
<td><a href="https://echarts.apache.org/zh/api.html#echarts.init" target="_blank" rel="noopener">init</a> \u7684\u521D\u59CB\u5316\u53C2\u6570\uFF08\u5982 <code>renderer</code>\u3001<code>devicePixelRatio</code>\uFF09\uFF0C\u53D8\u66F4\u4F1A\u91CD\u5EFA\u5B9E\u4F8B</td>
<td><code>object</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[on]</code></td>
<td>\u7B49\u540C\u4E8E ECharts <a href="https://echarts.apache.org/zh/api.html#echartsInstance.on" target="_blank" rel="noopener">on</a></td>
<td><code>ChartEChartsOn[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(events)</code></td>
<td>\u4E8B\u4EF6\u56DE\u8C03</td>
<td><code>output&lt;ChartEChartsEvent&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`chart-echarts`,title:`chart-echarts`}]}],raw:"---\ntitle: chart-echarts\nsubtitle: ECharts\ncols: 1\ntype: ECharts\nmodule: import { ChartEChartsModule } from '@delon/chart/chart-echarts';\n---\n\n[ECharts](https://echarts.apache.org/zh/index.html) 一个基于 JavaScript 的开源可视化图表库。使用懒加载 ECharts 脚本，开箱启用。\n\n## API\n\n### chart-echarts\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[width]` | 图表宽度 | `number, string` | `100%`|\n| `[height]` | 图表高度 | `number, string` | `400px`|\n| `[option]` | [配置项](https://echarts.apache.org/zh/option.html#title) | `ChartEChartsOption` | - |\n| `[theme]` | [主题](https://echarts.apache.org/zh/theme-builder.html)配置 | `string, object` | - |\n| `[initOpt]` | [init](https://echarts.apache.org/zh/api.html#echarts.init) 的初始化参数（如 `renderer`、`devicePixelRatio`），变更会重建实例 | `object` | - |\n| `[on]` | 等同于 ECharts [on](https://echarts.apache.org/zh/api.html#echartsInstance.on) | `ChartEChartsOn[]` | - |\n| `(events)` | 事件回调 | `output<ChartEChartsEvent>` | - |"}}};codes=[{id:`chart-chart-echarts-basic`,name:`basic`,title:{"zh-CN":`基本`,"en-US":`Basic`},code:`import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ChartEChartsEvent, ChartEChartsModule, ChartEChartsOption } from '@delon/chart/chart-echarts';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'chart-chart-echarts-basic',
  template: \`
    <div class="mb-md">
      <nz-switch [(ngModel)]="dark" /> Dark
      <button nz-button (click)="two.set(!two())" nzType="primary">Change Option</button>
    </div>
    <chart-echarts [option]="two() ? option1 : option2" [theme]="dark() ? 'dark' : null" (events)="handleEvents($event)" />
  \`,
  imports: [FormsModule, NzSwitchModule, NzButtonModule, ChartEChartsModule]
})
export class ChartChartEchartsBasic {
  readonly dark = signal(false);
  readonly two = signal(false);

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
}`,order:0,type:`demo`,summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:`packages/chart/chart-echarts/demo/basic.md`},{id:`chart-chart-echarts-on`,name:`on`,title:{"zh-CN":`绑定事件`,"en-US":`Bind event`},code:`import { Component, inject } from '@angular/core';

import { ChartEChartsModule, ChartEChartsOn, ChartEChartsOption } from '@delon/chart/chart-echarts';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-chart-echarts-on',
  template: \` <chart-echarts [option]="option" [on]="on" /> \`,
  imports: [ChartEChartsModule]
})
export class ChartChartEchartsOn {
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
}`,order:0,type:`demo`,summary:{"en-US":`<p>Using the <code>on</code> attribute is equivalent to ECharts <a href="https://echarts.apache.org/zh/api.html#echartsInstance.on" target="_blank" rel="noopener">on</a>.</p>
`,"zh-CN":`<p>\u4F7F\u7528 <code>on</code> \u5C5E\u6027\uFF0C\u7B49\u540C\u4E8E ECharts <a href="https://echarts.apache.org/zh/api.html#echartsInstance.on" target="_blank" rel="noopener">on</a>\u3002</p>
`},summary_raw:{"en-US":"Using the `on` attribute is equivalent to ECharts [on](https://echarts.apache.org/zh/api.html#echartsInstance.on).\n","zh-CN":"使用 `on` 属性，等同于 ECharts [on](https://echarts.apache.org/zh/api.html#echartsInstance.on)。\n"},path:`packages/chart/chart-echarts/demo/on.md`}];static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-chart-echarts`]],hostAttrs:[1,`d-block`],decls:7,vars:7,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`24`],[3,`item`]],template:function(t,n){t&1&&(oe(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),pt(4,`chart-chart-echarts-basic`),he$1(),oe(5,`code-box`,3),pt(6,`chart-chart-echarts-on`),he$1()()()()),t&2&&(ie(`codes`,n.codes)(`item`,n.item),A(),ie(`nzGutter`,16),A(2),ie(`item`,n.codes[0]),$t$1(`id`,n.codes[0].id),A(2),ie(`item`,n.codes[1]),$t$1(`id`,n.codes[1].id))},dependencies:[ce$1,Mt,xt,sn$1,We$1,X$1],encapsulation:2})};var Po=[`*`];function Eo(o,e){o&1&&pt(0,`nz-skeleton`)}var Ke=class o extends tt$1{height=pe$1(void 0,{transform:Oo$1});resizeTime=pe$1(0,{transform:Oo$1});render=Zl();resize=Zl();destroy=Zl();install(){this.el.nativeElement.innerHTML=``,this.markLoaded(),this.render.emit(this.el),this.installResizeEvent()}resize$;installResizeEvent(){this.resize$?.unsubscribe(),!(this.resizeTime()<=0)&&(this.resize$=Qc(window,`resize`).pipe(be(this.destroyRef),Hn(Math.min(200,this.resizeTime()))).subscribe(()=>this.resize.emit(this.el)))}static ɵfac=(()=>{let e;return function(n){return(e||(e=Gn(o)))(n||o)}})();static ɵcmp=Se({type:o,selectors:[[`g2`],[`g2-custom`]],hostVars:2,hostBindings:function(t,n){t&2&&It$1(`height`,n.height(),`px`)},inputs:{height:[1,`height`],resizeTime:[1,`resizeTime`]},outputs:{render:`render`,resize:`resize`,destroy:`destroy`},exportAs:[`g2Custom`],features:[tn$1],ngContentSelectors:Po,decls:2,vars:1,template:function(t,n){t&1&&(yn(),ve(0,Eo,1,0,`nz-skeleton`),Wt$1(1)),t&2&&ye(n.loaded()?-1:0)},dependencies:[Z],encapsulation:2})};var Ro=[Ke];var Gt=class o{static ɵfac=function(t){return new(t||o)};static ɵmod=ee({type:o});static ɵinj=X({imports:[Rb,ee$1,Ro]})};var zt=class o{ngZone=h(B);render(e){this.ngZone.runOutsideAngular(()=>{this.init(e.nativeElement)})}async init(e){let t=[{action:`浏览网站`,pv:5e4},{action:`放入购物车`,pv:35e3},{action:`生成订单`,pv:25e3},{action:`支付订单`,pv:15e3},{action:`完成交易`,pv:8e3}].map(m=>W(g({},m),{percent:m.pv/5e4})),n=new window.G2.Chart({container:e,autoFit:!0,height:500,paddingTop:20,paddingRight:120,paddingBottom:95});n.options({type:`interval`,data:t,coordinate:{transform:[{type:`transpose`}]},transform:[{type:`symmetryY`}],axis:!1,legend:!1,encode:{x:`action`,y:`pv`,color:`action`,shape:`funnel`},scale:{x:{padding:0},color:{range:[`#0050B3`,`#1890FF`,`#40A9FF`,`#69C0FF`,`#BAE7FF`]}},animate:{enter:{type:`fadeIn`}},interaction:{elementHighlight:!0},tooltip:{title:!1,items:[m=>({name:m.action,value:`\u6D4F\u89C8\u4EBA\u6570\uFF1A${m.pv} / \u5360\u6BD4\uFF1A${+(m.percent*100).toFixed(2)}%`})]},labels:[{text:m=>`${m.action} ${m.pv}`,position:`inside`,transform:[{type:`contrastReverse`}]},{text:m=>`${+(m.percent*100).toFixed(2)}%`,position:`inside`,dy:18,transform:[{type:`contrastReverse`}]}]}),await n.render()}static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-custom-basic`]],decls:1,vars:0,consts:[[`delay`,`100`,3,`render`]],template:function(t,n){t&1&&(oe(0,`g2-custom`,0),je(`render`,function(p){return n.render(p)}),he$1())},dependencies:[Gt,Ke],encapsulation:2})};var Tt=class o{item={name:`custom`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{title:`g2-chart`,subtitle:`Custom Chart`,cols:1,module:`import { G2CustomModule } from '@delon/chart/custom';`,description:`Use g2-custom component to package your G2 chart.A simple example template:If throw error G2 not found, please refer to Frequently Asked Questions.G2 ...`,group:`G2`,order:0,path:`packages/chart/custom/index.en-US.md`,url:`/chart/custom/en`},text:`<p>Use <code>g2-custom</code> component to package your G2 chart.</p>
<h2 id="how_to_use"><a class="lake-link"><i data-anchor="how_to_use"></i></a>How to use</h2><p>A simple example template:</p>
<pre><code class="language-ts">import &#123; Component, ElementRef &#125; from &#39;&#64;angular/core&#39;;

&#64;Component(&#123;
  selector: &#39;app-demo&#39;,
  template: \`
  &lt;g2-custom (render)=&quot;render($event)&quot;&gt;&lt;/g2-custom&gt;
  \`,
&#125;)
export class DemoComponent &#123;
  render(el: ElementRef) &#123;
    // Coding G2 code
  &#125;
&#125;
</code></pre>
<h3 id="how_to_develop_g2"><a class="lake-link"><i data-anchor="how_to_develop_g2"></i></a>How to develop G2</h3><p>If throw error <code>G2</code> not found, please refer to <a href="/chart/faq">Frequently Asked Questions</a>.</p>
<h2 id="links"><a class="lake-link"><i data-anchor="links"></i></a>Links</h2><ul>
<li><a href="https://g2.antv.antgroup.com/en/" target="_blank" rel="noopener">G2 Documents</a></li>
<li><a href="https://g2.antv.antgroup.com/examples" target="_blank" rel="noopener">G2 Examples</a></li>
</ul>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="g2-custom"><a class="lake-link"><i data-anchor="g2-custom"></i></a>g2-custom</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[repaint]</code></td>
<td>Whether to repaint when the data changes again</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[delay]</code></td>
<td>Delayed rendering, unit: ms</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[height]</code></td>
<td>Height of chart container</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[resizeTime]</code></td>
<td>Resize event debounce time (<code>0</code> disables the resize listener)</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>(render)</code></td>
<td>Render event</td>
<td><code>output&lt;ElementRef&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(resize)</code></td>
<td>Resize event</td>
<td><code>output&lt;ElementRef&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(destroy)</code></td>
<td>Destroy event (<strong>not emitted in the current version, kept for compatibility</strong>)</td>
<td><code>output&lt;ElementRef&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>Callback when G2 is initialized</td>
<td><code>output&lt;Chart&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(error)</code></td>
<td>Callback when rendering fails (G2 not loaded or render throws); <code>(ready)</code> will not fire</td>
<td><code>output&lt;unknown&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td>Custom chart theme</td>
<td><code>string | LooseObject</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`how_to_use`,title:`How to use`,children:[{id:`how_to_develop_g2`,title:`How to develop G2`}]},{id:`links`,title:`Links`},{id:`api`,title:`API`,children:[{id:`g2-custom`,title:`g2-custom`}]}],raw:"---\ntitle: g2-chart\nsubtitle: Custom Chart\ncols: 1\ntype: G2\nmodule: import { G2CustomModule } from '@delon/chart/custom';\n---\n\nUse `g2-custom` component to package your G2 chart.\n\n## How to use\n\nA simple example template:\n\n```ts\nimport { Component, ElementRef } from '@angular/core';\n\n@Component({\n  selector: 'app-demo',\n  template: `\n  <g2-custom (render)=\"render($event)\"></g2-custom>\n  `,\n})\nexport class DemoComponent {\n  render(el: ElementRef) {\n    // Coding G2 code\n  }\n}\n```\n\n### How to develop G2\n\nIf throw error `G2` not found, please refer to [Frequently Asked Questions](/chart/faq).\n\n## Links\n\n- [G2 Documents](https://g2.antv.antgroup.com/en/)\n- [G2 Examples](https://g2.antv.antgroup.com/examples)\n\n## API\n\n### g2-custom\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[repaint]` | Whether to repaint when the data changes again | `boolean` | `true` |\n| `[delay]` | Delayed rendering, unit: ms | `number` | `0` |\n| `[height]` | Height of chart container | `number` | - |\n| `[resizeTime]` | Resize event debounce time (`0` disables the resize listener) | `number` | `0` |\n| `(render)` | Render event | `output<ElementRef>` | - |\n| `(resize)` | Resize event | `output<ElementRef>` | - |\n| `(destroy)` | Destroy event (**not emitted in the current version, kept for compatibility**) | `output<ElementRef>` | - |\n| `(ready)` | Callback when G2 is initialized | `output<Chart>` | - |\n| `(error)` | Callback when rendering fails (G2 not loaded or render throws); `(ready)` will not fire | `output<unknown>` | - |\n| `[theme]` | Custom chart theme | `string \\| LooseObject` | - |"},"zh-CN":{meta:{title:`g2-chart`,subtitle:`自定义图表`,cols:1,module:`import { G2CustomModule } from '@delon/chart/custom';`,description:`使用 g2-custom 组件可以更快速的封装自己的图表组件。一个简单示例模板：可能你会遇到未找到 G2，请参考常见问题。G2 文档G2 示例`,group:`G2`,order:0,path:`packages/chart/custom/index.zh-CN.md`,url:`/chart/custom/zh`},text:`<p>\u4F7F\u7528 <code>g2-custom</code> \u7EC4\u4EF6\u53EF\u4EE5\u66F4\u5FEB\u901F\u7684\u5C01\u88C5\u81EA\u5DF1\u7684\u56FE\u8868\u7EC4\u4EF6\u3002</p>
<h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p>\u4E00\u4E2A\u7B80\u5355\u793A\u4F8B\u6A21\u677F\uFF1A</p>
<pre><code class="language-ts">import &#123; Component, ElementRef &#125; from &#39;&#64;angular/core&#39;;

&#64;Component(&#123;
  selector: &#39;app-demo&#39;,
  template: \`
  &lt;g2-custom (render)=&quot;render($event)&quot;&gt;&lt;/g2-custom&gt;
  \`,
&#125;)
export class DemoComponent &#123;
  render(el: ElementRef) &#123;
    // \u5F00\u59CB\u7F16\u5199 G2 \u4EE3\u7801
  &#125;
&#125;
</code></pre>
<h3 id="\u5982\u4F55\u5F00\u53D1_g2"><a class="lake-link"><i data-anchor="\u5982\u4F55\u5F00\u53D1_g2"></i></a>\u5982\u4F55\u5F00\u53D1 G2</h3><p>\u53EF\u80FD\u4F60\u4F1A\u9047\u5230\u672A\u627E\u5230 <code>G2</code>\uFF0C\u8BF7\u53C2\u8003<a href="/chart/faq">\u5E38\u89C1\u95EE\u9898</a>\u3002</p>
<h2 id="\u94FE\u63A5"><a class="lake-link"><i data-anchor="\u94FE\u63A5"></i></a>\u94FE\u63A5</h2><ul>
<li><a href="https://g2.antv.antgroup.com/" target="_blank" rel="noopener">G2 \u6587\u6863</a></li>
<li><a href="https://g2.antv.antgroup.com/examples" target="_blank" rel="noopener">G2 \u793A\u4F8B</a></li>
</ul>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="g2-custom"><a class="lake-link"><i data-anchor="g2-custom"></i></a>g2-custom</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[repaint]</code></td>
<td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[delay]</code></td>
<td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[height]</code></td>
<td>\u9AD8</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[resizeTime]</code></td>
<td>resize \u4E8B\u4EF6\u53BB\u6296\u65F6\u957F\uFF08<code>0</code> \u8868\u793A\u5173\u95ED resize \u76D1\u542C\uFF09</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>(render)</code></td>
<td>\u6E32\u67D3\u4E8B\u4EF6</td>
<td><code>output&lt;ElementRef&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(resize)</code></td>
<td>resize \u4E8B\u4EF6</td>
<td><code>output&lt;ElementRef&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(destroy)</code></td>
<td>\u9500\u6BC1\u4E8B\u4EF6\uFF08<strong>\u5F53\u524D\u7248\u672C\u4E0D\u4F1A\u89E6\u53D1\uFF0C\u4E3A\u517C\u5BB9\u4FDD\u7559</strong>\uFF09</td>
<td><code>output&lt;ElementRef&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td>
<td><code>output&lt;Chart&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(error)</code></td>
<td>\u5F53\u6E32\u67D3\u5931\u8D25\u65F6\u8C03\u7528\uFF08G2 \u672A\u52A0\u8F7D\u6216\u6E32\u67D3\u629B\u9519\uFF09\uFF0C\u6B64\u65F6 <code>(ready)</code> \u4E0D\u4F1A\u89E6\u53D1</td>
<td><code>output&lt;unknown&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td>
<td><code>string | LooseObject</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`如何使用`,title:`如何使用`,children:[{id:`如何开发_g2`,title:`如何开发 G2`}]},{id:`链接`,title:`链接`},{id:`api`,title:`API`,children:[{id:`g2-custom`,title:`g2-custom`}]}],raw:"---\ntitle: g2-chart\nsubtitle: 自定义图表\ncols: 1\ntype: G2\nmodule: import { G2CustomModule } from '@delon/chart/custom';\n---\n\n使用 `g2-custom` 组件可以更快速的封装自己的图表组件。\n\n## 如何使用\n\n一个简单示例模板：\n\n```ts\nimport { Component, ElementRef } from '@angular/core';\n\n@Component({\n  selector: 'app-demo',\n  template: `\n  <g2-custom (render)=\"render($event)\"></g2-custom>\n  `,\n})\nexport class DemoComponent {\n  render(el: ElementRef) {\n    // 开始编写 G2 代码\n  }\n}\n```\n\n### 如何开发 G2\n\n可能你会遇到未找到 `G2`，请参考[常见问题](/chart/faq)。\n\n## 链接\n\n- [G2 文档](https://g2.antv.antgroup.com/)\n- [G2 示例](https://g2.antv.antgroup.com/examples)\n\n## API\n\n### g2-custom\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |\n| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |\n| `[height]` | 高 | `number` | - |\n| `[resizeTime]` | resize 事件去抖时长（`0` 表示关闭 resize 监听） | `number` | `0` |\n| `(render)` | 渲染事件 | `output<ElementRef>` | - |\n| `(resize)` | resize 事件 | `output<ElementRef>` | - |\n| `(destroy)` | 销毁事件（**当前版本不会触发，为兼容保留**） | `output<ElementRef>` | - |\n| `(ready)` | 当G2完成初始化后调用 | `output<Chart>` | - |\n| `(error)` | 当渲染失败时调用（G2 未加载或渲染抛错），此时 `(ready)` 不会触发 | `output<unknown>` | - |\n| `[theme]` | 定制图表主题 | `string \\| LooseObject` | - |"}}};codes=[{id:`chart-custom-basic`,name:`basic`,title:{"zh-CN":`基础`,"en-US":`Basic`},code:`import { Component, ElementRef, NgZone, inject } from '@angular/core';

import type { G2Spec } from '@antv/g2';

import { G2CustomModule } from '@delon/chart/custom';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'chart-custom-basic',
  template: \` <g2-custom delay="100" (render)="render($event)" /> \`,
  imports: [G2CustomModule]
})
export class ChartCustomBasic {
  private readonly ngZone = inject(NgZone);

  render(el: ElementRef<HTMLDivElement>): void {
    // v5 \u7684 \`render()\` \u8FD4\u56DE Promise\uFF0C\u7528 \`void\` \u660E\u786E\u5FFD\u7565\uFF08\u4E0D\u518D\u9700\u8981\u624B\u52A8 detectChanges\uFF09
    this.ngZone.runOutsideAngular(() => void this.init(el.nativeElement));
  }

  private async init(el: HTMLElement): Promise<void> {
    const data = [
      { action: '\u6D4F\u89C8\u7F51\u7AD9', pv: 50000 },
      { action: '\u653E\u5165\u8D2D\u7269\u8F66', pv: 35000 },
      { action: '\u751F\u6210\u8BA2\u5355', pv: 25000 },
      { action: '\u652F\u4ED8\u8BA2\u5355', pv: 15000 },
      { action: '\u5B8C\u6210\u4EA4\u6613', pv: 8000 }
    ].map(row => ({ ...row, percent: row.pv / 50000 }));

    const chart = new (window as NzSafeAny).G2.Chart({
      container: el,
      autoFit: true,
      height: 500,
      paddingTop: 20,
      paddingRight: 120,
      paddingBottom: 95
    });

    chart.options({
      type: 'interval',
      data,
      // v5 \u91CC transpose \u662F**\u5750\u6807\u53D8\u6362**\uFF0C\u5FC5\u987B\u653E\u5728 \`coordinate.transform\`
      // \uFF08\u5199\u6210 \`coordinate: { type: 'transpose' }\` \u4F1A\u5728\u6E32\u67D3\u65F6\u629B\u9519\uFF09
      coordinate: { transform: [{ type: 'transpose' }] },
      transform: [{ type: 'symmetryY' }],
      axis: false,
      legend: false,
      encode: { x: 'action', y: 'pv', color: 'action', shape: 'funnel' },
      scale: {
        x: { padding: 0 },
        color: { range: ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF'] }
      },
      animate: { enter: { type: 'fadeIn' } },
      interaction: { elementHighlight: true },
      tooltip: {
        title: false,
        items: [
          (d: { action: string; pv: number; percent: number }) => ({
            name: d.action,
            value: \`\u6D4F\u89C8\u4EBA\u6570\uFF1A\${d.pv} / \u5360\u6BD4\uFF1A\${+(d.percent * 100).toFixed(2)}%\`
          })
        ]
      },
      labels: [
        {
          text: (d: { action: string; pv: number }) => \`\${d.action} \${d.pv}\`,
          position: 'inside',
          transform: [{ type: 'contrastReverse' }]
        },
        {
          text: (d: { percent: number }) => \`\${+(d.percent * 100).toFixed(2)}%\`,
          position: 'inside',
          dy: 18,
          transform: [{ type: 'contrastReverse' }]
        }
      ]
    } as G2Spec);

    await chart.render();
  }
}`,order:0,type:`demo`,summary:{"en-US":`<p>Based on the official G2 v5 <a href="https://g2.antv.antgroup.com/examples/general/funnel" target="_blank" rel="noopener">funnel example</a>, showing how to use a raw v5 <code>Chart</code> inside <code>g2-custom</code>.</p>
`,"zh-CN":`<p>\u57FA\u4E8E G2 v5 \u7684\u5B98\u65B9<a href="https://g2.antv.antgroup.com/examples/general/funnel" target="_blank" rel="noopener">\u6F0F\u6597\u56FE\u793A\u4F8B</a>\u6539\u5199\uFF0C\u6F14\u793A\u5728 <code>g2-custom</code> \u4E2D\u76F4\u63A5\u4F7F\u7528\u539F\u751F v5 <code>Chart</code>\u3002</p>
`},summary_raw:{"en-US":"Based on the official G2 v5 [funnel example](https://g2.antv.antgroup.com/examples/general/funnel), showing how to use a raw v5 `Chart` inside `g2-custom`.\n","zh-CN":"基于 G2 v5 的官方[漏斗图示例](https://g2.antv.antgroup.com/examples/general/funnel)改写，演示在 `g2-custom` 中直接使用原生 v5 `Chart`。\n"},path:`packages/chart/custom/demo/basic.md`}];static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-custom`]],hostAttrs:[1,`d-block`],decls:5,vars:5,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`24`],[3,`item`]],template:function(t,n){t&1&&(oe(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),pt(4,`chart-custom-basic`),he$1()()()()),t&2&&(ie(`codes`,n.codes)(`item`,n.item),A(),ie(`nzGutter`,16),A(2),ie(`item`,n.codes[0]),$t$1(`id`,n.codes[0].id))},dependencies:[ce$1,zt,sn$1,We$1,X$1],encapsulation:2})};function Wo(o,e){o&1&&(oe(0,`div`,0),pt(1,`nz-skeleton`),he$1())}function Oo(o,e){if(o&1&&(oe(0,`span`,4),an$1(1),he$1()),o&2){let t=F();It$1(`color`,t.titleColor()),A(),vr(t.title())}}var et=class o extends tt$1{title=pe$1();height=pe$1(void 0,{transform:Oo$1});width=pe$1(void 0,{transform:Oo$1});fontSize=pe$1(14,{transform:Oo$1});color=pe$1(`#2f9cff`);bgColor=pe$1(`#f0f2f5`);format=pe$1();percent=pe$1(void 0,{transform:Oo$1});padding=pe$1(16);buildSpec(){let{percent:e,color:t,bgColor:n,title:m,theme:p,padding:T,height:q,width:B,format:F}=this;return W(g({},$t$2({theme:p(),padding:T(),height:q(),width:B(),animate:!1})),{legend:!1,tooltip:!1,children:[{type:`gauge`,animate:!1,data:{value:{target:e()??0,total:100,name:m()}},scale:{color:{range:[t(),n()]}},style:{arcShape:`round`,arcLineWidth:2,pinR:4,textContent:()=>``},axis:{y:g({tick:!1,labelSpacing:-30,labelAlign:`horizontal`},F()?{labelFormatter:F()}:{})},tooltip:!1}]})}centerTop(){let e=this.padding(),t=this.height()??0,n=typeof e==`number`?e:0;if(t<=0)return 0;let m=Math.round((t+n)/3),p=(t-m-n)/2;return Math.round(m+p)}titleColor(){return this.theme()===`dark`?`rgba(255,255,255,0.45)`:`rgba(0,0,0,0.45)`}valueColor(){return this.theme()===`dark`?`rgba(255,255,255,0.85)`:`rgba(0,0,0,0.85)`}isDataOnly(){return!1}static ɵfac=(()=>{let e;return function(n){return(e||(e=Gn(o)))(n||o)}})();static ɵcmp=Se({type:o,selectors:[[`g2-gauge`]],hostAttrs:[1,`g2-gauge`],hostVars:8,hostBindings:function(t,n){t&2&&It$1(`width`,n.width(),`px`)(`height`,n.height(),`px`)(`font-size`,n.fontSize(),`px`)(`position`,`relative`)},inputs:{title:[1,`title`],height:[1,`height`],width:[1,`width`],fontSize:[1,`fontSize`],color:[1,`color`],bgColor:[1,`bgColor`],format:[1,`format`],percent:[1,`percent`],padding:[1,`padding`]},exportAs:[`g2Gauge`],features:[tn$1],decls:5,vars:7,consts:[[2,`position`,`absolute`,`inset`,`0`,`z-index`,`1`],[1,`g2-gauge__center`,2,`position`,`absolute`,`left`,`50%`,`transform`,`translateX(-50%)`,`display`,`flex`,`flex-direction`,`column`,`align-items`,`center`,`pointer-events`,`none`,`white-space`,`nowrap`],[2,`font-size`,`.8em`,3,`color`],[2,`font-size`,`1.4em`],[2,`font-size`,`.8em`]],template:function(t,n){t&1&&(ve(0,Wo,2,0,`div`,0),oe(1,`div`,1),ve(2,Oo,2,3,`span`,2),oe(3,`span`,3),an$1(4),he$1()()),t&2&&(ye(n.loaded()?-1:0),A(),It$1(`top`,n.centerTop(),`px`),A(),ye(n.title()?2:-1),A(),It$1(`color`,n.valueColor()),A(),Io$1(``,n.percent()??0,` %`))},dependencies:[Z],encapsulation:2})};var jo=[et];var wt=class o{static ɵfac=function(t){return new(t||o)};static ɵmod=ee({type:o});static ɵinj=X({imports:[Rb,ee$1,jo]})};var Nt=class o{percent=G(36);color=G(`#2f9cff`);constructor(){u8(1e3).pipe(be()).subscribe(()=>{let e=parseInt((Math.random()*100).toString(),10);this.percent.set(e),this.color.set(e>50?`#f50`:`#2f9cff`)})}static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-gauge-basic`]],decls:1,vars:5,consts:[[3,`title`,`height`,`width`,`percent`,`color`]],template:function(t,n){t&1&&pt(0,`g2-gauge`,0),t&2&&ie(`title`,`核销率`)(`height`,164)(`width`,164)(`percent`,n.percent())(`color`,n.color())},dependencies:[wt,et],encapsulation:2})};var St=class o{item={name:`gauge`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{title:`g2-gauge`,subtitle:`Gauge`,cols:1,module:`import { G2GaugeModule } from '@delon/chart/gauge';`,description:`A way to display progress, which shows the current progress more intuitively and can also represent a percentage.`,group:`G2`,order:0,path:`packages/chart/gauge/index.en-US.md`,url:`/chart/gauge/en`},text:`<p>A way to display progress, which shows the current progress more intuitively and can also represent a percentage.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="g2-gauge"><a class="lake-link"><i data-anchor="g2-gauge"></i></a>g2-gauge</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[repaint]</code></td>
<td>Whether to repaint when the data changes again</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[delay]</code></td>
<td>Delayed rendering, unit: ms</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[title]</code></td>
<td>Title of the chart</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[height]</code></td>
<td>Height of the chart</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[width]</code></td>
<td>Width of the chart</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[color]</code></td>
<td>Color of the chart</td>
<td><code>string</code></td>
<td><code>#2F9CFF</code></td>
</tr>
<tr>
<td><code>[bgColor]</code></td>
<td>Background color of the chart</td>
<td><code>string</code></td>
<td><code>#F0F2F5</code></td>
</tr>
<tr>
<td><code>[percent]</code></td>
<td>Percentage</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[fontSize]</code></td>
<td>Base font size of the chart (the center value scales with <code>1.4em</code>)</td>
<td><code>number</code></td>
<td><code>14</code></td>
</tr>
<tr>
<td><code>[padding]</code></td>
<td>Padding</td>
<td><code>Array&lt;number | string&gt;</code></td>
<td><code>16</code></td>
</tr>
<tr>
<td><code>[format]</code></td>
<td>Formatter of the axis label</td>
<td><code>(text: string, item: &#123;&#125;, index: number) =&gt; string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td>Custom chart theme</td>
<td><code>string | LooseObject</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>Callback when G2 is initialized</td>
<td><code>output&lt;Chart&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(error)</code></td>
<td>Callback when rendering fails (G2 not loaded or render throws); <code>(ready)</code> will not fire</td>
<td><code>output&lt;unknown&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-gauge`,title:`g2-gauge`}]}],raw:"---\ntitle: g2-gauge\nsubtitle: Gauge\ncols: 1\ntype: G2\nmodule: import { G2GaugeModule } from '@delon/chart/gauge';\n---\n\nA way to display progress, which shows the current progress more intuitively and can also represent a percentage.\n\n## API\n\n### g2-gauge\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[repaint]` | Whether to repaint when the data changes again | `boolean` | `true` |\n| `[delay]` | Delayed rendering, unit: ms | `number` | `0` |\n| `[title]` | Title of the chart | `string` | - |\n| `[height]` | Height of the chart | `number` | - |\n| `[width]` | Width of the chart | `number` | - |\n| `[color]` | Color of the chart | `string` | `#2F9CFF` |\n| `[bgColor]` | Background color of the chart | `string` | `#F0F2F5` |\n| `[percent]` | Percentage | `number` | - |\n| `[fontSize]` | Base font size of the chart (the center value scales with `1.4em`) | `number` | `14` |\n| `[padding]` | Padding | `Array<number \\| string>` | `16` |\n| `[format]` | Formatter of the axis label | `(text: string, item: {}, index: number) => string` | - |\n| `[theme]` | Custom chart theme | `string \\| LooseObject` | - |\n| `(ready)` | Callback when G2 is initialized | `output<Chart>` | - |\n| `(error)` | Callback when rendering fails (G2 not loaded or render throws); `(ready)` will not fire | `output<unknown>` | - |"},"zh-CN":{meta:{title:`g2-gauge`,subtitle:`仪表盘`,cols:1,module:`import { G2GaugeModule } from '@delon/chart/gauge';`,description:`一种进度展示方式，可以更直观的展示当前的进展情况，通常也可表示占比。`,group:`G2`,order:0,path:`packages/chart/gauge/index.zh-CN.md`,url:`/chart/gauge/zh`},text:`<p>\u4E00\u79CD\u8FDB\u5EA6\u5C55\u793A\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u66F4\u76F4\u89C2\u7684\u5C55\u793A\u5F53\u524D\u7684\u8FDB\u5C55\u60C5\u51B5\uFF0C\u901A\u5E38\u4E5F\u53EF\u8868\u793A\u5360\u6BD4\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="g2-gauge"><a class="lake-link"><i data-anchor="g2-gauge"></i></a>g2-gauge</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[repaint]</code></td>
<td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[delay]</code></td>
<td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[title]</code></td>
<td>\u56FE\u8868\u6807\u9898</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[height]</code></td>
<td>\u56FE\u8868\u9AD8\u5EA6</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[width]</code></td>
<td>\u56FE\u8868\u5BBD\u5EA6</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[color]</code></td>
<td>\u56FE\u8868\u989C\u8272</td>
<td><code>string</code></td>
<td><code>#2F9CFF</code></td>
</tr>
<tr>
<td><code>[bgColor]</code></td>
<td>\u56FE\u8868\u80CC\u666F\u8272</td>
<td><code>string</code></td>
<td><code>#F0F2F5</code></td>
</tr>
<tr>
<td><code>[percent]</code></td>
<td>\u8FDB\u5EA6\u6BD4\u4F8B</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[fontSize]</code></td>
<td>\u56FE\u8868\u5B57\u53F7\uFF0C\u51B3\u5B9A\u6807\u9898\u5B57\u53F7\uFF08\u6570\u503C\u4E3A <code>1.4em</code> \u8DDF\u968F\u7F29\u653E\uFF09</td>
<td><code>number</code></td>
<td><code>14</code></td>
</tr>
<tr>
<td><code>[padding]</code></td>
<td>\u5185\u8FB9\u8DDD</td>
<td><code>Array&lt;number | string&gt;</code></td>
<td><code>16</code></td>
</tr>
<tr>
<td><code>[format]</code></td>
<td>\u5750\u6807\u8F74\u683C\u5F0F</td>
<td><code>(text: string, item: &#123;&#125;, index: number) =&gt; string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td>
<td><code>string | LooseObject</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td>
<td><code>output&lt;Chart&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(error)</code></td>
<td>\u5F53\u6E32\u67D3\u5931\u8D25\u65F6\u8C03\u7528\uFF08G2 \u672A\u52A0\u8F7D\u6216\u6E32\u67D3\u629B\u9519\uFF09\uFF0C\u6B64\u65F6 <code>(ready)</code> \u4E0D\u4F1A\u89E6\u53D1</td>
<td><code>output&lt;unknown&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-gauge`,title:`g2-gauge`}]}],raw:"---\ntitle: g2-gauge\nsubtitle: 仪表盘\ncols: 1\ntype: G2\nmodule: import { G2GaugeModule } from '@delon/chart/gauge';\n---\n\n一种进度展示方式，可以更直观的展示当前的进展情况，通常也可表示占比。\n\n## API\n\n### g2-gauge\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |\n| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |\n| `[title]` | 图表标题 | `string` | - |\n| `[height]` | 图表高度 | `number` | - |\n| `[width]` | 图表宽度 | `number` | - |\n| `[color]` | 图表颜色 | `string` | `#2F9CFF` |\n| `[bgColor]` | 图表背景色 | `string` | `#F0F2F5` |\n| `[percent]` | 进度比例 | `number` | - |\n| `[fontSize]` | 图表字号，决定标题字号（数值为 `1.4em` 跟随缩放） | `number` | `14` |\n| `[padding]` | 内边距 | `Array<number \\| string>` | `16` |\n| `[format]` | 坐标轴格式 | `(text: string, item: {}, index: number) => string` | - |\n| `[theme]` | 定制图表主题 | `string \\| LooseObject` | - |\n| `(ready)` | 当G2完成初始化后调用 | `output<Chart>` | - |\n| `(error)` | 当渲染失败时调用（G2 未加载或渲染抛错），此时 `(ready)` 不会触发 | `output<unknown>` | - |"}}};codes=[{id:`chart-gauge-basic`,name:`basic`,title:{"zh-CN":`基础`,"en-US":`Basic`},code:`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

import { G2GaugeModule } from '@delon/chart/gauge';

@Component({
  selector: 'chart-gauge-basic',
  template: \`
    @let title = '\u6838\u9500\u7387';
    @let size = 164;
    <g2-gauge [title]="title" [height]="size" [width]="size" [percent]="percent()" [color]="color()" />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [G2GaugeModule]
})
export class ChartGaugeBasic {
  readonly percent = signal(36);
  readonly color = signal('#2f9cff');

  constructor() {
    interval(1000)
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        const percent = parseInt((Math.random() * 100).toString(), 10);
        this.percent.set(percent);
        this.color.set(percent > 50 ? '#f50' : '#2f9cff');
      });
  }
}`,order:0,type:`demo`,summary:{"en-US":`<p>Basic usage.</p>
`,"zh-CN":`<p>\u57FA\u7840\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Basic usage.
`,"zh-CN":`\u57FA\u7840\u7528\u6CD5\u3002
`},path:`packages/chart/gauge/demo/basic.md`}];static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-gauge`]],hostAttrs:[1,`d-block`],decls:5,vars:5,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`24`],[3,`item`]],template:function(t,n){t&1&&(oe(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),pt(4,`chart-gauge-basic`),he$1()()()()),t&2&&(ie(`codes`,n.codes)(`item`,n.item),A(),ie(`nzGutter`,16),A(2),ie(`item`,n.codes[0]),$t$1(`id`,n.codes[0].id))},dependencies:[ce$1,Nt,sn$1,We$1,X$1],encapsulation:2})};var pe=class o extends tt$1{color=pe$1(`rgba(24, 144, 255, 0.2)`);borderColor=pe$1(`#1890FF`);borderWidth=pe$1(2,{transform:Oo$1});height=pe$1(56,{transform:Oo$1});fit=pe$1(!0,{transform:H});line=pe$1(!1,{transform:H});animate=pe$1(!0,{transform:H});xAxis=pe$1();yAxis=pe$1();padding=pe$1([8,8,8,8]);data=pe$1([]);yTooltipSuffix=pe$1(``);tooltipType=pe$1(`default`);clickItem=Zl();chartOptions(){return{container:this.el.nativeElement,autoFit:this.fit()}}buildSpec(){let{data:e,fit:t,height:n,padding:m,xAxis:p,yAxis:T,yTooltipSuffix:q,tooltipType:B,line:F,theme:ie,animate:ge,color:fe,borderColor:re,borderWidth:ye}=this,st=[{type:`area`,encode:{x:`x`,y:`y`,shape:`smooth`,color:{type:`constant`,value:fe()}},tooltip:{title:!1,items:[rt=>({name:rt.x,value:rt.y+q()})]}}];F()&&st.push({type:`line`,encode:{x:`x`,y:`y`,shape:`smooth`,color:{type:`constant`,value:re()}},style:{lineWidth:ye()},tooltip:!1});let Oe={};return!p()&&!T()?(Oe.x=!1,Oe.y=!1):(Oe.x=p()??!1,Oe.y=T()??!1),W(g(g({},$t$2({theme:ie(),padding:m(),height:n(),animate:ge(),autoFit:t()})),jt$1(B())),{data:e(),legend:!1,axis:Oe,children:st})}afterCreate(e){e.on(`plot:click`,t=>{let n=e.getDataByXY({x:t.x,y:t.y});this.clickItem.emit({item:n[0],ev:t})})}isDataOnly(e){return this.line()?!1:e.length>0&&e.every(t=>Object.is(t,this.data))}static ɵfac=(()=>{let e;return function(n){return(e||(e=Gn(o)))(n||o)}})();static ɵcmp=Se({type:o,selectors:[[`g2-mini-area`]],hostVars:2,hostBindings:function(t,n){t&2&&It$1(`height`,n.height(),`px`)},inputs:{color:[1,`color`],borderColor:[1,`borderColor`],borderWidth:[1,`borderWidth`],height:[1,`height`],fit:[1,`fit`],line:[1,`line`],animate:[1,`animate`],xAxis:[1,`xAxis`],yAxis:[1,`yAxis`],padding:[1,`padding`],data:[1,`data`],yTooltipSuffix:[1,`yTooltipSuffix`],tooltipType:[1,`tooltipType`]},outputs:{clickItem:`clickItem`},exportAs:[`g2MiniArea`],features:[tn$1],decls:0,vars:0,template:function(t,n){},encapsulation:2})};var Pe=class o{static ɵfac=function(t){return new(t||o)};static ɵmod=ee({type:o});static ɵinj=X({imports:[Rb]})};var _t=class o{msg=h(lu);visitData=G(this.genData());genData(){let e=new Date().getTime(),t=[];for(let n=0;n<20;n+=1)t.push({x:Uo(new Date(e+864e5*n),`yyyy-MM-dd`),y:Math.floor(Math.random()*100)+10});return t}refresh(){this.visitData.set(this.genData())}handleClick(e){this.msg.info(`${e.item.x} - ${e.item.y}`)}static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-mini-area-basic`]],decls:3,vars:1,consts:[[`nz-button`,``,`nzType`,`primary`,3,`click`],[`line`,``,`color`,`#cceafe`,`height`,`45`,3,`clickItem`,`data`]],template:function(t,n){t&1&&(oe(0,`button`,0),je(`click`,function(){return n.refresh()}),an$1(1,`Refresh`),he$1(),oe(2,`g2-mini-area`,1),je(`clickItem`,function(p){return n.handleClick(p)}),he$1()),t&2&&(A(2),ie(`data`,n.visitData()))},dependencies:[v5,a3,f5,m5,Pe,pe],encapsulation:2})};var It=class o{visitData=G([]);ngOnInit(){let e=new Date().getTime(),t=[];for(let n=0;n<20;n+=1)t.push({x:Uo(new Date(e+864e5*n),`yyyy-MM-dd`),y:Math.floor(Math.random()*100)+10});this.visitData.set(t)}static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-mini-area-tooltip`]],decls:1,vars:1,consts:[[`line`,``,`color`,`#cceafe`,`height`,`45`,`yTooltipSuffix`,`%`,3,`data`]],template:function(t,n){t&1&&pt(0,`g2-mini-area`,0),t&2&&ie(`data`,n.visitData())},dependencies:[Pe,pe],encapsulation:2})};var At=class o{visitData=G([]);ngOnInit(){let e=new Date().getTime(),t=[];for(let n=0;n<20;n+=1)t.push({x:Uo(new Date(e+864e5*n),`yyyy-MM-dd`),y:Math.floor(Math.random()*100)+10});this.visitData.set(t)}static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-mini-area-mini`]],decls:1,vars:1,consts:[[`line`,``,`color`,`#cceafe`,`height`,`45`,`tooltipType`,`mini`,3,`data`]],template:function(t,n){t&1&&pt(0,`g2-mini-area`,0),t&2&&ie(`data`,n.visitData())},dependencies:[Pe,pe],encapsulation:2})};var Bt=class o{item={name:`mini-area`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{title:`g2-mini-area`,subtitle:`Mini Area`,cols:2,module:`import { G2MiniAreaModule } from '@delon/chart/mini-area';`,description:`An area chart is also called an area graph. It is built on top of a line chart: the area between the line and the axis is filled with a color or textu...`,group:`G2`,order:0,path:`packages/chart/mini-area/index.en-US.md`,url:`/chart/mini-area/en`},text:`<p>An area chart is also called an area graph. It is built on top of a line chart: the area between the line and the axis is filled with a color or texture, and this filled area is called an area. The color fill highlights the trend information better.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="g2-mini-area"><a class="lake-link"><i data-anchor="g2-mini-area"></i></a>g2-mini-area</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[repaint]</code></td>
<td>Whether to repaint when the data changes again</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[delay]</code></td>
<td>Delayed rendering, unit: ms</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[color]</code></td>
<td>Color of the chart</td>
<td><code>string</code></td>
<td><code>rgba(24, 144, 255, 0.2)</code></td>
</tr>
<tr>
<td><code>[borderColor]</code></td>
<td>Border color of the chart</td>
<td><code>string</code></td>
<td><code>#1890FF</code></td>
</tr>
<tr>
<td><code>[borderWidth]</code></td>
<td>Border width of the chart</td>
<td><code>number</code></td>
<td><code>2</code></td>
</tr>
<tr>
<td><code>[fit]</code></td>
<td>Whether to fit the container size (<code>autoFit</code>)</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[height]</code></td>
<td>Height of the chart</td>
<td><code>number</code></td>
<td><code>56</code></td>
</tr>
<tr>
<td><code>[line]</code></td>
<td>Whether to display the line</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[animate]</code></td>
<td>Whether to display the animation</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[padding]</code></td>
<td>Padding of the chart</td>
<td><code>array</code></td>
<td><code>[8, 8, 8, 8]</code></td>
</tr>
<tr>
<td><code>[xAxis]</code></td>
<td>x-axis options (passed to the v5 <code>AxisComponent</code>)</td>
<td><code>object</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[yAxis]</code></td>
<td>y-axis options (passed to the v5 <code>AxisComponent</code>)</td>
<td><code>object</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[yTooltipSuffix]</code></td>
<td>Suffix of the y-axis tooltip, usually used to specify the unit</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[tooltipType]</code></td>
<td>Tooltip type</td>
<td><code>&#39;mini&#39;,&#39;default&#39;</code></td>
<td><code>&#39;default&#39;</code></td>
</tr>
<tr>
<td><code>[data]</code></td>
<td>Data</td>
<td><code>G2MiniAreaData[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td>Custom chart theme</td>
<td><code>string | LooseObject</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(clickItem)</code></td>
<td>Callback when clicking an item</td>
<td><code>output&lt;G2MiniAreaClickItem&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>Callback when G2 is initialized</td>
<td><code>output&lt;Chart&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(error)</code></td>
<td>Callback when rendering fails (G2 not loaded or render throws); <code>(ready)</code> will not fire</td>
<td><code>output&lt;unknown&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="g2miniareadata"><a class="lake-link"><i data-anchor="g2miniareadata"></i></a>G2MiniAreaData</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[x]</code></td>
<td>x-axis</td>
<td><code>any</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[y]</code></td>
<td>y-axis</td>
<td><code>any</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-mini-area`,title:`g2-mini-area`},{id:`g2miniareadata`,title:`G2MiniAreaData`}]}],raw:"---\ntitle: g2-mini-area\nsubtitle: Mini Area\ncols: 2\ntype: G2\nmodule: import { G2MiniAreaModule } from '@delon/chart/mini-area';\n---\n\nAn area chart is also called an area graph. It is built on top of a line chart: the area between the line and the axis is filled with a color or texture, and this filled area is called an area. The color fill highlights the trend information better.\n\n## API\n\n### g2-mini-area\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[repaint]` | Whether to repaint when the data changes again | `boolean` | `true` |\n| `[delay]` | Delayed rendering, unit: ms | `number` | `0` |\n| `[color]` | Color of the chart | `string` | `rgba(24, 144, 255, 0.2)` |\n| `[borderColor]` | Border color of the chart | `string` | `#1890FF` |\n| `[borderWidth]` | Border width of the chart | `number` | `2` |\n| `[fit]` | Whether to fit the container size (`autoFit`) | `boolean` | `true` |\n| `[height]` | Height of the chart | `number` | `56` |\n| `[line]` | Whether to display the line | `boolean` | `false` |\n| `[animate]` | Whether to display the animation | `boolean` | `true` |\n| `[padding]` | Padding of the chart | `array` | `[8, 8, 8, 8]` |\n| `[xAxis]` | x-axis options (passed to the v5 `AxisComponent`) | `object` | - |\n| `[yAxis]` | y-axis options (passed to the v5 `AxisComponent`) | `object` | - |\n| `[yTooltipSuffix]` | Suffix of the y-axis tooltip, usually used to specify the unit | `string` | - |\n| `[tooltipType]` | Tooltip type | `'mini','default'` | `'default'` |\n| `[data]` | Data | `G2MiniAreaData[]` | - |\n| `[theme]` | Custom chart theme | `string \\| LooseObject` | - |\n| `(clickItem)` | Callback when clicking an item | `output<G2MiniAreaClickItem>` | - |\n| `(ready)` | Callback when G2 is initialized | `output<Chart>` | - |\n| `(error)` | Callback when rendering fails (G2 not loaded or render throws); `(ready)` will not fire | `output<unknown>` | - |\n\n### G2MiniAreaData\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[x]` | x-axis | `any` | - |\n| `[y]` | y-axis | `any` | - |"},"zh-CN":{meta:{title:`g2-mini-area`,subtitle:`迷你区域图`,cols:2,module:`import { G2MiniAreaModule } from '@delon/chart/mini-area';`,description:`面积图又叫区域图。 它是在折线图的基础之上形成的, 它将折线图中折线与自变量坐标轴之间的区域使用颜色或者纹理填充，这样一个填充区域我们叫做面积，颜色的填充可以更好的突出趋势信息。`,group:`G2`,order:0,path:`packages/chart/mini-area/index.zh-CN.md`,url:`/chart/mini-area/zh`},text:`<p>\u9762\u79EF\u56FE\u53C8\u53EB\u533A\u57DF\u56FE\u3002 \u5B83\u662F\u5728\u6298\u7EBF\u56FE\u7684\u57FA\u7840\u4E4B\u4E0A\u5F62\u6210\u7684, \u5B83\u5C06\u6298\u7EBF\u56FE\u4E2D\u6298\u7EBF\u4E0E\u81EA\u53D8\u91CF\u5750\u6807\u8F74\u4E4B\u95F4\u7684\u533A\u57DF\u4F7F\u7528\u989C\u8272\u6216\u8005\u7EB9\u7406\u586B\u5145\uFF0C\u8FD9\u6837\u4E00\u4E2A\u586B\u5145\u533A\u57DF\u6211\u4EEC\u53EB\u505A\u9762\u79EF\uFF0C\u989C\u8272\u7684\u586B\u5145\u53EF\u4EE5\u66F4\u597D\u7684\u7A81\u51FA\u8D8B\u52BF\u4FE1\u606F\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="g2-mini-area"><a class="lake-link"><i data-anchor="g2-mini-area"></i></a>g2-mini-area</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[repaint]</code></td>
<td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[delay]</code></td>
<td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[color]</code></td>
<td>\u56FE\u8868\u989C\u8272</td>
<td><code>string</code></td>
<td><code>rgba(24, 144, 255, 0.2)</code></td>
</tr>
<tr>
<td><code>[borderColor]</code></td>
<td>\u56FE\u8868\u8FB9\u989C\u8272</td>
<td><code>string</code></td>
<td><code>#1890FF</code></td>
</tr>
<tr>
<td><code>[borderWidth]</code></td>
<td>\u56FE\u8868\u8FB9\u7C97\u7EC6</td>
<td><code>number</code></td>
<td><code>2</code></td>
</tr>
<tr>
<td><code>[fit]</code></td>
<td>\u662F\u5426\u81EA\u9002\u5E94\u5BB9\u5668\u5C3A\u5BF8\uFF08<code>autoFit</code>\uFF09</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[height]</code></td>
<td>\u56FE\u8868\u9AD8\u5EA6</td>
<td><code>number</code></td>
<td><code>56</code></td>
</tr>
<tr>
<td><code>[line]</code></td>
<td>\u662F\u5426\u663E\u793A\u63CF\u8FB9</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[animate]</code></td>
<td>\u662F\u5426\u663E\u793A\u52A8\u753B</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[padding]</code></td>
<td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td>
<td><code>array</code></td>
<td><code>[8, 8, 8, 8]</code></td>
</tr>
<tr>
<td><code>[xAxis]</code></td>
<td>x \u8F74\u914D\u7F6E\uFF08\u6309 v5 AxisComponent \u4F20\u53C2\uFF09</td>
<td><code>object</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[yAxis]</code></td>
<td>y \u8F74\u914D\u7F6E\uFF08\u6309 v5 AxisComponent \u4F20\u53C2\uFF09</td>
<td><code>object</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[yTooltipSuffix]</code></td>
<td>y \u8F74Tooltip\u540E\u7F00\uFF0C\u4E00\u822C\u6307\u5B9A\u5355\u4F4D</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[tooltipType]</code></td>
<td>Tooltip\u663E\u793A\u7C7B\u578B</td>
<td><code>&#39;mini&#39;,&#39;default&#39;</code></td>
<td><code>&#39;default&#39;</code></td>
</tr>
<tr>
<td><code>[data]</code></td>
<td>\u6570\u636E</td>
<td><code>G2MiniAreaData[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td>
<td><code>string | LooseObject</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(clickItem)</code></td>
<td>\u70B9\u51FB\u9879\u56DE\u8C03</td>
<td><code>output&lt;G2MiniAreaClickItem&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td>
<td><code>output&lt;Chart&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(error)</code></td>
<td>\u5F53\u6E32\u67D3\u5931\u8D25\u65F6\u8C03\u7528\uFF08G2 \u672A\u52A0\u8F7D\u6216\u6E32\u67D3\u629B\u9519\uFF09\uFF0C\u6B64\u65F6 <code>(ready)</code> \u4E0D\u4F1A\u89E6\u53D1</td>
<td><code>output&lt;unknown&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="g2miniareadata"><a class="lake-link"><i data-anchor="g2miniareadata"></i></a>G2MiniAreaData</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[x]</code></td>
<td>x\u8F74</td>
<td><code>any</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[y]</code></td>
<td>y\u8F74</td>
<td><code>any</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-mini-area`,title:`g2-mini-area`},{id:`g2miniareadata`,title:`G2MiniAreaData`}]}],raw:"---\ntitle: g2-mini-area\nsubtitle: 迷你区域图\ncols: 2\ntype: G2\nmodule: import { G2MiniAreaModule } from '@delon/chart/mini-area';\n---\n\n面积图又叫区域图。 它是在折线图的基础之上形成的, 它将折线图中折线与自变量坐标轴之间的区域使用颜色或者纹理填充，这样一个填充区域我们叫做面积，颜色的填充可以更好的突出趋势信息。\n\n## API\n\n### g2-mini-area\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |\n| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |\n| `[color]` | 图表颜色 | `string` | `rgba(24, 144, 255, 0.2)` |\n| `[borderColor]` | 图表边颜色 | `string` | `#1890FF` |\n| `[borderWidth]` | 图表边粗细 | `number` | `2` |\n| `[fit]` | 是否自适应容器尺寸（`autoFit`） | `boolean` | `true` |\n| `[height]` | 图表高度 | `number` | `56` |\n| `[line]` | 是否显示描边 | `boolean` | `false` |\n| `[animate]` | 是否显示动画 | `boolean` | `true` |\n| `[padding]` | 图表内部间距 | `array` | `[8, 8, 8, 8]` |\n| `[xAxis]` | x 轴配置（按 v5 AxisComponent 传参） | `object` | - |\n| `[yAxis]` | y 轴配置（按 v5 AxisComponent 传参） | `object` | - |\n| `[yTooltipSuffix]` | y 轴Tooltip后缀，一般指定单位 | `string` | - |\n| `[tooltipType]` | Tooltip显示类型 | `'mini','default'` | `'default'` |\n| `[data]` | 数据 | `G2MiniAreaData[]` | - |\n| `[theme]` | 定制图表主题 | `string \\| LooseObject` | - |\n| `(clickItem)` | 点击项回调 | `output<G2MiniAreaClickItem>` | - |\n| `(ready)` | 当G2完成初始化后调用 | `output<Chart>` | - |\n| `(error)` | 当渲染失败时调用（G2 未加载或渲染抛错），此时 `(ready)` 不会触发 | `output<unknown>` | - |\n\n### G2MiniAreaData\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[x]` | x轴 | `any` | - |\n| `[y]` | y轴 | `any` | - |"}}};codes=[{id:`chart-mini-area-basic`,name:`basic`,title:{"zh-CN":`基础`,"en-US":`Basic`},code:`import { Component, inject, signal } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniAreaClickItem, G2MiniAreaData, G2MiniAreaModule } from '@delon/chart/mini-area';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-mini-area-basic',
  template: \`
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-mini-area line color="#cceafe" height="45" [data]="visitData()" (clickItem)="handleClick($event)" />
  \`,
  imports: [NzButtonModule, G2MiniAreaModule]
})
export class ChartMiniAreaBasic {
  private readonly msg = inject(NzMessageService);
  readonly visitData = signal(this.genData());

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
    this.visitData.set(this.genData());
  }

  handleClick(data: G2MiniAreaClickItem): void {
    this.msg.info(\`\${data.item.x} - \${data.item.y}\`);
  }
}`,order:0,type:`demo`,summary:{"en-US":`<p>Basic usage.</p>
`,"zh-CN":`<p>\u57FA\u7840\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Basic usage.
`,"zh-CN":`\u57FA\u7840\u7528\u6CD5\u3002
`},path:`packages/chart/mini-area/demo/basic.md`},{id:`chart-mini-area-tooltip`,name:`tooltip`,title:{"zh-CN":`Tooltip`},code:`import { Component, OnInit, signal } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniAreaData, G2MiniAreaModule } from '@delon/chart/mini-area';

@Component({
  selector: 'chart-mini-area-tooltip',
  template: \` <g2-mini-area line color="#cceafe" height="45" [data]="visitData()" yTooltipSuffix="%" /> \`,
  imports: [G2MiniAreaModule]
})
export class ChartMiniAreaTooltip implements OnInit {
  readonly visitData = signal<G2MiniAreaData[]>([]);

  ngOnInit(): void {
    const beginDay = new Date().getTime();
    const visitData: G2MiniAreaData[] = [];
    for (let i = 0; i < 20; i += 1) {
      visitData.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10
      });
    }
    this.visitData.set(visitData);
  }
}`,order:1,type:`demo`,summary:{"en-US":`<p>Set <code>yTooltipSuffix</code> to show the unit.</p>
`,"zh-CN":`<p>\u6307\u5B9A <code>yTooltipSuffix</code> \u503C\u6765\u8868\u793A\u5355\u4F4D\u3002</p>
`},summary_raw:{"en-US":"Set `yTooltipSuffix` to show the unit.\n","zh-CN":"指定 `yTooltipSuffix` 值来表示单位。\n"},path:`packages/chart/mini-area/demo/tooltip.md`},{id:`chart-mini-area-mini`,name:`mini`,title:{"zh-CN":`Mini tooltip`},code:`import { Component, OnInit, signal } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniAreaData, G2MiniAreaModule } from '@delon/chart/mini-area';

@Component({
  selector: 'chart-mini-area-mini',
  template: \` <g2-mini-area line color="#cceafe" height="45" [data]="visitData()" tooltipType="mini" /> \`,
  imports: [G2MiniAreaModule]
})
export class ChartMiniAreaMini implements OnInit {
  readonly visitData = signal<G2MiniAreaData[]>([]);

  ngOnInit(): void {
    const beginDay = new Date().getTime();
    const visitData: G2MiniAreaData[] = [];
    for (let i = 0; i < 20; i += 1) {
      visitData.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10
      });
    }
    this.visitData.set(visitData);
  }
}`,order:2,type:`demo`,summary:{"en-US":`<p>Set <code>tooltipType</code> to use a simplified tooltip, which works better inside tables.</p>
`,"zh-CN":`<p>\u6307\u5B9A <code>tooltipType</code> \u503C\u6765\u8868\u793A\u7B80\u5316tooltip\uFF0C\u53EF\u4EE5\u66F4\u597D\u7684\u8FD0\u7528\u4E8E\u8868\u683C\u3002</p>
`},summary_raw:{"en-US":"Set `tooltipType` to use a simplified tooltip, which works better inside tables.\n","zh-CN":"指定 `tooltipType` 值来表示简化tooltip，可以更好的运用于表格。\n"},path:`packages/chart/mini-area/demo/mini.md`}];static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-mini-area`]],hostAttrs:[1,`d-block`],decls:10,vars:9,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`12`],[3,`item`]],template:function(t,n){t&1&&(oe(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),pt(4,`chart-mini-area-basic`),he$1(),oe(5,`code-box`,3),pt(6,`chart-mini-area-mini`),he$1()(),oe(7,`div`,2)(8,`code-box`,3),pt(9,`chart-mini-area-tooltip`),he$1()()()()),t&2&&(ie(`codes`,n.codes)(`item`,n.item),A(),ie(`nzGutter`,16),A(2),ie(`item`,n.codes[0]),$t$1(`id`,n.codes[0].id),A(2),ie(`item`,n.codes[2]),$t$1(`id`,n.codes[2].id),A(3),ie(`item`,n.codes[1]),$t$1(`id`,n.codes[1].id))},dependencies:[ce$1,_t,It,At,sn$1,We$1,X$1],encapsulation:2})};var ue=class o extends tt$1{color=pe$1(`#1890FF`);height=pe$1(0,{transform:Oo$1});borderWidth=pe$1(5,{transform:Oo$1});padding=pe$1([8,8,8,8]);data=pe$1([]);yTooltipSuffix=pe$1(``);tooltipType=pe$1(`default`);clickItem=Zl();buildSpec(){let{color:e,data:t,borderWidth:n,yTooltipSuffix:m,tooltipType:p,theme:T,padding:q,height:B}=this;return W(g(g({},$t$2({theme:T(),padding:q(),height:B()})),jt$1(p(),{crosshairs:!1})),{data:t(),scale:{x:{type:`band`},y:{zero:!0},color:{type:`identity`}},legend:!1,axis:!1,children:[{type:`interval`,encode:{x:`x`,y:`y`,size:n(),color:{type:`transform`,value:F=>F.color||e()}},tooltip:{items:[F=>({name:F.x,value:F.y+m()})]}}]})}afterCreate(e){e.on(`interval:click`,t=>{this.clickItem.emit({item:t.data?.data,ev:t})})}static ɵfac=(()=>{let e;return function(n){return(e||(e=Gn(o)))(n||o)}})();static ɵcmp=Se({type:o,selectors:[[`g2-mini-bar`]],hostVars:2,hostBindings:function(t,n){t&2&&It$1(`height`,n.height(),`px`)},inputs:{color:[1,`color`],height:[1,`height`],borderWidth:[1,`borderWidth`],padding:[1,`padding`],data:[1,`data`],yTooltipSuffix:[1,`yTooltipSuffix`],tooltipType:[1,`tooltipType`]},outputs:{clickItem:`clickItem`},exportAs:[`g2MiniBar`],features:[tn$1],decls:0,vars:0,template:function(t,n){},encapsulation:2})};var Ee=class o{static ɵfac=function(t){return new(t||o)};static ɵmod=ee({type:o});static ɵinj=X({imports:[Rb]})};var Pt=class o{msg=h(lu);visitData=G(this.genData());genData(){let e=new Date().getTime(),t=[];for(let n=0;n<20;n+=1)t.push({x:Uo(new Date(e+864e5*n),`yyyy-MM-dd`),y:Math.floor(Math.random()*100)+10});return t}refresh(){this.visitData.set(this.genData())}handleClick(e){this.msg.info(`${e.item.x} - ${e.item.y}`)}static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-mini-bar-basic`]],decls:3,vars:1,consts:[[`nz-button`,``,`nzType`,`primary`,3,`click`],[`height`,`45`,3,`clickItem`,`data`]],template:function(t,n){t&1&&(oe(0,`button`,0),je(`click`,function(){return n.refresh()}),an$1(1,`Refresh`),he$1(),oe(2,`g2-mini-bar`,1),je(`clickItem`,function(p){return n.handleClick(p)}),he$1()),t&2&&(A(2),ie(`data`,n.visitData()))},dependencies:[v5,a3,f5,m5,Ee,ue],encapsulation:2})};var Et=class o{visitData=G([]);ngOnInit(){let e=new Date().getTime(),t=[];for(let n=0;n<20;n+=1)t.push({x:Uo(new Date(e+864e5*n),`yyyy-MM-dd`),y:Math.floor(Math.random()*100)+10});this.visitData.set(t)}static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-mini-bar-mini`]],decls:1,vars:1,consts:[[`height`,`45`,`yTooltipSuffix`,`%`,`tooltipType`,`mini`,3,`data`]],template:function(t,n){t&1&&pt(0,`g2-mini-bar`,0),t&2&&ie(`data`,n.visitData())},dependencies:[Ee,ue],encapsulation:2})};var Ft=class o{visitData=G([]);ngOnInit(){let e=new Date().getTime(),t=[];for(let n=0;n<20;n+=1)t.push({x:Uo(new Date(e+864e5*n),`yyyy-MM-dd`),y:Math.floor(Math.random()*100)+10});this.visitData.set(t)}static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-mini-bar-tooltip`]],decls:1,vars:1,consts:[[`height`,`45`,`yTooltipSuffix`,`%`,3,`data`]],template:function(t,n){t&1&&pt(0,`g2-mini-bar`,0),t&2&&ie(`data`,n.visitData())},dependencies:[Ee,ue],encapsulation:2})};var Rt=class o{item={name:`mini-bar`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{title:`g2-mini-bar`,subtitle:`Mini Bar`,cols:2,module:`import { G2MiniBarModule } from '@delon/chart/mini-bar';`,description:`A mini bar chart is better for displaying simple interval data; its concise presentation greatly reduces the visual pressure of large amounts of data.`,group:`G2`,order:0,path:`packages/chart/mini-bar/index.en-US.md`,url:`/chart/mini-bar/en`},text:`<p>A mini bar chart is better for displaying simple interval data; its concise presentation greatly reduces the visual pressure of large amounts of data.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="g2-mini-bar"><a class="lake-link"><i data-anchor="g2-mini-bar"></i></a>g2-mini-bar</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[repaint]</code></td>
<td>Whether to repaint when the data changes again</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[delay]</code></td>
<td>Delayed rendering, unit: ms</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[color]</code></td>
<td>Color of the chart</td>
<td><code>string</code></td>
<td><code>#1890FF</code></td>
</tr>
<tr>
<td><code>[height]</code></td>
<td>Height of the chart</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[yTooltipSuffix]</code></td>
<td>Suffix of the y-axis tooltip, usually used to specify the unit</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[tooltipType]</code></td>
<td>Tooltip type</td>
<td><code>&#39;mini&#39;,&#39;default&#39;</code></td>
<td><code>&#39;default&#39;</code></td>
</tr>
<tr>
<td><code>[borderWidth]</code></td>
<td>Line width</td>
<td><code>number</code></td>
<td><code>5</code></td>
</tr>
<tr>
<td><code>[padding]</code></td>
<td>Padding of the chart</td>
<td><code>array</code></td>
<td><code>[8, 8, 8, 8]</code></td>
</tr>
<tr>
<td><code>[data]</code></td>
<td>Data</td>
<td><code>G2MiniBarData[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td>Custom chart theme</td>
<td><code>string | LooseObject</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(clickItem)</code></td>
<td>Callback when clicking an item</td>
<td><code>output&lt;G2MiniBarClickItem&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>Callback when G2 is initialized</td>
<td><code>output&lt;Chart&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(error)</code></td>
<td>Callback when rendering fails (G2 not loaded or render throws); <code>(ready)</code> will not fire</td>
<td><code>output&lt;unknown&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="g2minibardata"><a class="lake-link"><i data-anchor="g2minibardata"></i></a>G2MiniBarData</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[x]</code></td>
<td>x-axis</td>
<td><code>any</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[y]</code></td>
<td>y-axis</td>
<td><code>any</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[color]</code></td>
<td>Color of the axis</td>
<td><code>string</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-mini-bar`,title:`g2-mini-bar`},{id:`g2minibardata`,title:`G2MiniBarData`}]}],raw:"---\ntitle: g2-mini-bar\nsubtitle: Mini Bar\ncols: 2\ntype: G2\nmodule: import { G2MiniBarModule } from '@delon/chart/mini-bar';\n---\n\nA mini bar chart is better for displaying simple interval data; its concise presentation greatly reduces the visual pressure of large amounts of data.\n\n## API\n\n### g2-mini-bar\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[repaint]` | Whether to repaint when the data changes again | `boolean` | `true` |\n| `[delay]` | Delayed rendering, unit: ms | `number` | `0` |\n| `[color]` | Color of the chart | `string` | `#1890FF` |\n| `[height]` | Height of the chart | `number` | - |\n| `[yTooltipSuffix]` | Suffix of the y-axis tooltip, usually used to specify the unit | `string` | - |\n| `[tooltipType]` | Tooltip type | `'mini','default'` | `'default'` |\n| `[borderWidth]` | Line width | `number` | `5` |\n| `[padding]` | Padding of the chart | `array` | `[8, 8, 8, 8]` |\n| `[data]` | Data | `G2MiniBarData[]` | - |\n| `[theme]` | Custom chart theme | `string \\| LooseObject` | - |\n| `(clickItem)` | Callback when clicking an item | `output<G2MiniBarClickItem>` | - |\n| `(ready)` | Callback when G2 is initialized | `output<Chart>` | - |\n| `(error)` | Callback when rendering fails (G2 not loaded or render throws); `(ready)` will not fire | `output<unknown>` | - |\n\n### G2MiniBarData\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[x]` | x-axis | `any` | - |\n| `[y]` | y-axis | `any` | - |\n| `[color]` | Color of the axis | `string` | - |"},"zh-CN":{meta:{title:`g2-mini-bar`,subtitle:`迷你柱状图`,cols:2,module:`import { G2MiniBarModule } from '@delon/chart/mini-bar';`,description:`迷你柱状图更适合展示简单的区间数据，简洁的表现方式可以很好的减少大数据量的视觉展现压力。`,group:`G2`,order:0,path:`packages/chart/mini-bar/index.zh-CN.md`,url:`/chart/mini-bar/zh`},text:`<p>\u8FF7\u4F60\u67F1\u72B6\u56FE\u66F4\u9002\u5408\u5C55\u793A\u7B80\u5355\u7684\u533A\u95F4\u6570\u636E\uFF0C\u7B80\u6D01\u7684\u8868\u73B0\u65B9\u5F0F\u53EF\u4EE5\u5F88\u597D\u7684\u51CF\u5C11\u5927\u6570\u636E\u91CF\u7684\u89C6\u89C9\u5C55\u73B0\u538B\u529B\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="g2-mini-bar"><a class="lake-link"><i data-anchor="g2-mini-bar"></i></a>g2-mini-bar</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[repaint]</code></td>
<td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[delay]</code></td>
<td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[color]</code></td>
<td>\u56FE\u8868\u989C\u8272</td>
<td><code>string</code></td>
<td><code>#1890FF</code></td>
</tr>
<tr>
<td><code>[height]</code></td>
<td>\u56FE\u8868\u9AD8\u5EA6</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[yTooltipSuffix]</code></td>
<td>y \u8F74Tooltip\u540E\u7F00\uFF0C\u4E00\u822C\u6307\u5B9A\u5355\u4F4D</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[tooltipType]</code></td>
<td>Tooltip\u663E\u793A\u7C7B\u578B</td>
<td><code>&#39;mini&#39;,&#39;default&#39;</code></td>
<td><code>&#39;default&#39;</code></td>
</tr>
<tr>
<td><code>[borderWidth]</code></td>
<td>\u7EBF\u6761\u7C97\u7EC6</td>
<td><code>number</code></td>
<td><code>5</code></td>
</tr>
<tr>
<td><code>[padding]</code></td>
<td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td>
<td><code>array</code></td>
<td><code>[8, 8, 8, 8]</code></td>
</tr>
<tr>
<td><code>[data]</code></td>
<td>\u6570\u636E</td>
<td><code>G2MiniBarData[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td>
<td><code>string | LooseObject</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(clickItem)</code></td>
<td>\u70B9\u51FB\u9879\u56DE\u8C03</td>
<td><code>output&lt;G2MiniBarClickItem&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td>
<td><code>output&lt;Chart&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(error)</code></td>
<td>\u5F53\u6E32\u67D3\u5931\u8D25\u65F6\u8C03\u7528\uFF08G2 \u672A\u52A0\u8F7D\u6216\u6E32\u67D3\u629B\u9519\uFF09\uFF0C\u6B64\u65F6 <code>(ready)</code> \u4E0D\u4F1A\u89E6\u53D1</td>
<td><code>output&lt;unknown&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="g2minibardata"><a class="lake-link"><i data-anchor="g2minibardata"></i></a>G2MiniBarData</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[x]</code></td>
<td>x\u8F74</td>
<td><code>any</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[y]</code></td>
<td>y\u8F74</td>
<td><code>any</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[color]</code></td>
<td>\u8F74\u989C\u8272</td>
<td><code>string</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-mini-bar`,title:`g2-mini-bar`},{id:`g2minibardata`,title:`G2MiniBarData`}]}],raw:"---\ntitle: g2-mini-bar\nsubtitle: 迷你柱状图\ncols: 2\ntype: G2\nmodule: import { G2MiniBarModule } from '@delon/chart/mini-bar';\n---\n\n迷你柱状图更适合展示简单的区间数据，简洁的表现方式可以很好的减少大数据量的视觉展现压力。\n\n## API\n\n### g2-mini-bar\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |\n| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |\n| `[color]` | 图表颜色 | `string` | `#1890FF` |\n| `[height]` | 图表高度 | `number` | - |\n| `[yTooltipSuffix]` | y 轴Tooltip后缀，一般指定单位 | `string` | - |\n| `[tooltipType]` | Tooltip显示类型 | `'mini','default'` | `'default'` |\n| `[borderWidth]` | 线条粗细 | `number` | `5` |\n| `[padding]` | 图表内部间距 | `array` | `[8, 8, 8, 8]` |\n| `[data]` | 数据 | `G2MiniBarData[]` | - |\n| `[theme]` | 定制图表主题 | `string \\| LooseObject` | - |\n| `(clickItem)` | 点击项回调 | `output<G2MiniBarClickItem>` | - |\n| `(ready)` | 当G2完成初始化后调用 | `output<Chart>` | - |\n| `(error)` | 当渲染失败时调用（G2 未加载或渲染抛错），此时 `(ready)` 不会触发 | `output<unknown>` | - |\n\n### G2MiniBarData\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[x]` | x轴 | `any` | - |\n| `[y]` | y轴 | `any` | - |\n| `[color]` | 轴颜色 | `string` | - |"}}};codes=[{id:`chart-mini-bar-basic`,name:`basic`,title:{"zh-CN":`基础`,"en-US":`Basic`},code:`import { Component, inject, signal } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniAreaClickItem, G2MiniAreaData } from '@delon/chart/mini-area';
import { G2MiniBarModule } from '@delon/chart/mini-bar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-mini-bar-basic',
  template: \`
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-mini-bar height="45" [data]="visitData()" (clickItem)="handleClick($event)" />
  \`,
  imports: [NzButtonModule, G2MiniBarModule]
})
export class ChartMiniBarBasic {
  private readonly msg = inject(NzMessageService);
  readonly visitData = signal(this.genData());

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
    this.visitData.set(this.genData());
  }

  handleClick(data: G2MiniAreaClickItem): void {
    this.msg.info(\`\${data.item.x} - \${data.item.y}\`);
  }
}`,order:0,type:`demo`,summary:{"en-US":`<p>Basic usage.</p>
`,"zh-CN":`<p>\u57FA\u7840\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Basic usage.
`,"zh-CN":`\u57FA\u7840\u7528\u6CD5\u3002
`},path:`packages/chart/mini-bar/demo/basic.md`},{id:`chart-mini-bar-mini`,name:`mini`,title:{"zh-CN":`Mini tooltip`},code:`import { Component, OnInit, signal } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniBarData, G2MiniBarModule } from '@delon/chart/mini-bar';

@Component({
  selector: 'chart-mini-bar-mini',
  template: \` <g2-mini-bar height="45" [data]="visitData()" yTooltipSuffix="%" tooltipType="mini" /> \`,
  imports: [G2MiniBarModule]
})
export class ChartMiniBarMini implements OnInit {
  readonly visitData = signal<G2MiniBarData[]>([]);

  ngOnInit(): void {
    const beginDay = new Date().getTime();
    const visitData: G2MiniBarData[] = [];
    for (let i = 0; i < 20; i += 1) {
      visitData.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10
      });
    }
    this.visitData.set(visitData);
  }
}`,order:0,type:`demo`,summary:{"en-US":`<p>Set <code>tooltipType</code> to use a simplified tooltip, which works better inside tables.</p>
`,"zh-CN":`<p>\u6307\u5B9A <code>tooltipType</code> \u503C\u6765\u8868\u793A\u7B80\u5316tooltip\uFF0C\u53EF\u4EE5\u66F4\u597D\u7684\u8FD0\u7528\u4E8E\u8868\u683C\u3002</p>
`},summary_raw:{"en-US":"Set `tooltipType` to use a simplified tooltip, which works better inside tables.\n","zh-CN":"指定 `tooltipType` 值来表示简化tooltip，可以更好的运用于表格。\n"},path:`packages/chart/mini-bar/demo/mini.md`},{id:`chart-mini-bar-tooltip`,name:`tooltip`,title:{"zh-CN":`Tooltip`},code:`import { Component, OnInit, signal } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniBarData, G2MiniBarModule } from '@delon/chart/mini-bar';

@Component({
  selector: 'chart-mini-bar-tooltip',
  template: \` <g2-mini-bar height="45" [data]="visitData()" yTooltipSuffix="%" /> \`,
  imports: [G2MiniBarModule]
})
export class ChartMiniBarTooltip implements OnInit {
  readonly visitData = signal<G2MiniBarData[]>([]);

  ngOnInit(): void {
    const beginDay = new Date().getTime();
    const visitData: G2MiniBarData[] = [];
    for (let i = 0; i < 20; i += 1) {
      visitData.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10
      });
    }
    this.visitData.set(visitData);
  }
}`,order:0,type:`demo`,summary:{"en-US":`<p>Set <code>yTooltipSuffix</code> to show the unit.</p>
`,"zh-CN":`<p>\u6307\u5B9A <code>yTooltipSuffix</code> \u503C\u6765\u8868\u793A\u5355\u4F4D\u3002</p>
`},summary_raw:{"en-US":"Set `yTooltipSuffix` to show the unit.\n","zh-CN":"指定 `yTooltipSuffix` 值来表示单位。\n"},path:`packages/chart/mini-bar/demo/tooltip.md`}];static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-mini-bar`]],hostAttrs:[1,`d-block`],decls:10,vars:9,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`12`],[3,`item`]],template:function(t,n){t&1&&(oe(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),pt(4,`chart-mini-bar-basic`),he$1(),oe(5,`code-box`,3),pt(6,`chart-mini-bar-tooltip`),he$1()(),oe(7,`div`,2)(8,`code-box`,3),pt(9,`chart-mini-bar-mini`),he$1()()()()),t&2&&(ie(`codes`,n.codes)(`item`,n.item),A(),ie(`nzGutter`,16),A(2),ie(`item`,n.codes[0]),$t$1(`id`,n.codes[0].id),A(2),ie(`item`,n.codes[2]),$t$1(`id`,n.codes[2].id),A(3),ie(`item`,n.codes[1]),$t$1(`id`,n.codes[1].id))},dependencies:[ce$1,Pt,Et,Ft,sn$1,We$1,X$1],encapsulation:2})};var Lo=o=>({left:o});var ro=o=>({"background-color":o});var Ho=(o,e,t)=>({"background-color":o,width:e,height:t});var ct=class o{locale=h(s4).valueSignal(`miniProgress`);color=pe$1(`#1890FF`);target=pe$1(null,{transform:Oo$1});percent=pe$1(null,{transform:Oo$1});strokeWidth=pe$1(null,{transform:Oo$1});_target=Fe$1(()=>this.fixNum(this.target()));_percent=Fe$1(()=>this.fixNum(this.percent()));fixNum(e){return Math.min(Math.max(Oo$1(e),0),100)}static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`g2-mini-progress`]],hostVars:2,hostBindings:function(t,n){t&2&&Ze(`g2-mini-progress`,!0)},inputs:{color:[1,`color`],target:[1,`target`],percent:[1,`percent`],strokeWidth:[1,`strokeWidth`]},exportAs:[`g2MiniProgress`],decls:5,vars:19,consts:[[`nz-tooltip`,``,1,`g2-mini-progress__target`,3,`nzTooltipTitle`],[1,`g2-mini-progress__target-item`],[1,`g2-mini-progress__wrap`],[1,`g2-mini-progress__value`]],template:function(t,n){t&1&&(oe(0,`div`,0),pt(1,`span`,1)(2,`span`,1),he$1(),oe(3,`div`,2),pt(4,`div`,3),he$1()),t&2&&(ko$1(ff(9,Lo,n._target()+`%`)),ie(`nzTooltipTitle`,n.locale().targetSuffix+n._target()+`%`),A(),ko$1(ff(11,ro,n.color())),A(),ko$1(ff(13,ro,n.color())),A(2),ko$1(DO(15,Ho,n.color(),n._percent()+`%`,n.strokeWidth()+`px`)))},dependencies:[Ys],encapsulation:2})};var Wt=class o{static ɵfac=function(t){return new(t||o)};static ɵmod=ee({type:o});static ɵinj=X({imports:[Rb,om,Xs]})};var Ot=class o{static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-mini-progress-basic`]],decls:1,vars:0,consts:[[`percent`,`78`,`strokeWidth`,`8`,`target`,`80`]],template:function(t,n){t&1&&pt(0,`g2-mini-progress`,0)},dependencies:[Wt,ct],encapsulation:2})};var Ut=class o{item={name:`mini-progress`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{title:`g2-mini-progress`,subtitle:`Mini Progress`,cols:1,module:`import { G2MiniProgressModule } from '@delon/chart/mini-progress';`,description:`It is ideal for displaying speed-related graphics.`,group:`G2`,order:0,path:`packages/chart/mini-progress/index.en-US.md`,url:`/chart/mini-progress/en`},text:`<p>It is ideal for displaying speed-related graphics.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="g2-mini-progress"><a class="lake-link"><i data-anchor="g2-mini-progress"></i></a>g2-mini-progress</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[target]</code></td>
<td>Target percentage</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[color]</code></td>
<td>Color of the progress bar</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[strokeWidth]</code></td>
<td>Height of the progress bar</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[percent]</code></td>
<td>Percentage</td>
<td><code>number</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-mini-progress`,title:`g2-mini-progress`}]}],raw:`---
title: g2-mini-progress
subtitle: Mini Progress
cols: 1
type: G2
module: import { G2MiniProgressModule } from '@delon/chart/mini-progress';
---

It is ideal for displaying speed-related graphics.

## API

### g2-mini-progress

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| \`[target]\` | Target percentage | \`number\` | - |
| \`[color]\` | Color of the progress bar | \`string\` | - |
| \`[strokeWidth]\` | Height of the progress bar | \`number\` | - |
| \`[percent]\` | Percentage | \`number\` | - |`},"zh-CN":{meta:{title:`g2-mini-progress`,subtitle:`迷你进度条`,cols:1,module:`import { G2MiniProgressModule } from '@delon/chart/mini-progress';`,description:`用于显示跟速度相关图形再适合不过。`,group:`G2`,order:0,path:`packages/chart/mini-progress/index.zh-CN.md`,url:`/chart/mini-progress/zh`},text:`<p>\u7528\u4E8E\u663E\u793A\u8DDF\u901F\u5EA6\u76F8\u5173\u56FE\u5F62\u518D\u9002\u5408\u4E0D\u8FC7\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="g2-mini-progress"><a class="lake-link"><i data-anchor="g2-mini-progress"></i></a>g2-mini-progress</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[target]</code></td>
<td>\u76EE\u6807\u6BD4\u4F8B</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[color]</code></td>
<td>\u8FDB\u5EA6\u6761\u989C\u8272</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[strokeWidth]</code></td>
<td>\u8FDB\u5EA6\u6761\u9AD8\u5EA6</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[percent]</code></td>
<td>\u8FDB\u5EA6\u6BD4\u4F8B</td>
<td><code>number</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-mini-progress`,title:`g2-mini-progress`}]}],raw:`---
title: g2-mini-progress
subtitle: \u8FF7\u4F60\u8FDB\u5EA6\u6761
cols: 1
type: G2
module: import { G2MiniProgressModule } from '@delon/chart/mini-progress';
---

\u7528\u4E8E\u663E\u793A\u8DDF\u901F\u5EA6\u76F8\u5173\u56FE\u5F62\u518D\u9002\u5408\u4E0D\u8FC7\u3002

## API

### g2-mini-progress

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |
|----|----|----|-----|
| \`[target]\` | \u76EE\u6807\u6BD4\u4F8B | \`number\` | - |
| \`[color]\` | \u8FDB\u5EA6\u6761\u989C\u8272 | \`string\` | - |
| \`[strokeWidth]\` | \u8FDB\u5EA6\u6761\u9AD8\u5EA6 | \`number\` | - |
| \`[percent]\` | \u8FDB\u5EA6\u6BD4\u4F8B | \`number\` | - |`}}};codes=[{id:`chart-mini-progress-basic`,name:`basic`,title:{"zh-CN":`基础`,"en-US":`Basic`},code:`import { Component } from '@angular/core';

import { G2MiniProgressModule } from '@delon/chart/mini-progress';

@Component({
  selector: 'chart-mini-progress-basic',
  template: \` <g2-mini-progress percent="78" strokeWidth="8" target="80" /> \`,
  imports: [G2MiniProgressModule]
})
export class ChartMiniProgressBasic {}`,order:0,type:`demo`,summary:{"en-US":`<p>Basic usage.</p>
`,"zh-CN":`<p>\u57FA\u7840\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Basic usage.
`,"zh-CN":`\u57FA\u7840\u7528\u6CD5\u3002
`},path:`packages/chart/mini-progress/demo/basic.md`}];static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-mini-progress`]],hostAttrs:[1,`d-block`],decls:5,vars:5,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`24`],[3,`item`]],template:function(t,n){t&1&&(oe(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),pt(4,`chart-mini-progress-basic`),he$1()()()()),t&2&&(ie(`codes`,n.codes)(`item`,n.item),A(),ie(`nzGutter`,16),A(2),ie(`item`,n.codes[0]),$t$1(`id`,n.codes[0].id))},dependencies:[ce$1,Ot,sn$1,We$1,X$1],encapsulation:2})};function $o(o,e){if(o&1&&(nn$1(0),an$1(1),rn$1()),o&2){let t=F(2);A(),vr(t.title())}}function Vo(o,e){if(o&1&&(oe(0,`div`,0),qe(1,$o,2,1,`ng-container`,4),he$1()),o&2){let t=F();A(),ie(`nzStringTemplateOutlet`,t.title())}}function Jo(o,e){if(o&1&&(nn$1(0),an$1(1),rn$1()),o&2){let t=F(2);A(),vr(t.subTitle())}}function Qo(o,e){if(o&1&&(oe(0,`div`,1),qe(1,Jo,2,1,`ng-container`,4),he$1()),o&2){let t=F();A(),ie(`nzStringTemplateOutlet`,t.subTitle())}}function Yo(o,e){if(o&1&&(nn$1(0),an$1(1),rn$1()),o&2){let t=F();A(),vr(t.total())}}function Zo(o,e){if(o&1&&(oe(0,`em`,5),an$1(1),he$1()),o&2){let t=F();A(),vr(t.suffix())}}function Xo(o,e){if(o&1&&(nn$1(0),an$1(1),rn$1()),o&2){let t=F(2);A(),vr(t.subTotal())}}function Ko(o,e){if(o&1&&pt(0,`nz-icon`,7),o&2){let t=F(2);ie(`nzType`,hf(`caret-`,t.status()))}}function ea(o,e){if(o&1&&(oe(0,`span`,6),qe(1,Xo,2,1,`ng-container`,4),ve(2,Ko,1,2,`nz-icon`,7),he$1()),o&2){let t=F();A(),ie(`nzStringTemplateOutlet`,t.subTotal()),A(),ye(t.status()?2:-1)}}var he=class o{title=pe$1();subTitle=pe$1();total=pe$1();subTotal=pe$1();suffix=pe$1();status=pe$1();theme=pe$1(`light`);gap=pe$1(8,{transform:Oo$1});static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`number-info`]],hostVars:6,hostBindings:function(t,n){t&2&&Ze(`number-info`,!0)(`number-info__light`,n.theme()===`light`)(`number-info__default`,n.theme()==="default")},inputs:{title:[1,`title`],subTitle:[1,`subTitle`],total:[1,`total`],subTotal:[1,`subTotal`],suffix:[1,`suffix`],status:[1,`status`],theme:[1,`theme`],gap:[1,`gap`]},exportAs:[`numberInfo`],decls:7,vars:7,consts:[[1,`number-info__title`],[1,`number-info__title-sub`],[1,`number-info__value`],[1,`number-info__value-text`],[4,`nzStringTemplateOutlet`],[1,`number-info__value-suffix`],[1,`number-info__value-text`,`number-info__value-sub`],[3,`nzType`]],template:function(t,n){t&1&&(ve(0,Vo,2,1,`div`,0),ve(1,Qo,2,1,`div`,1),oe(2,`div`,2)(3,`span`,3),qe(4,Yo,2,1,`ng-container`,4),ve(5,Zo,2,1,`em`,5),he$1(),ve(6,ea,3,2,`span`,6),he$1()),t&2&&(ye(n.title()?0:-1),A(),ye(n.subTitle()?1:-1),A(),It$1(`margin-top`,n.gap(),`px`),A(2),ie(`nzStringTemplateOutlet`,n.total()),A(),ye(n.suffix()?5:-1),A(),ye(n.status()||n.subTotal()?6:-1))},dependencies:[er,Gt$1],encapsulation:2})};var Fe=class o{static ɵfac=function(t){return new(t||o)};static ɵmod=ee({type:o});static ɵinj=X({imports:[Rb,xr,Jr]})};var jt=class o{static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-number-info-basic`]],decls:1,vars:0,consts:[[`subTitle`,`本周访问`,`total`,`12,321`,`subTotal`,`17.1`,`status`,`up`]],template:function(t,n){t&1&&pt(0,`number-info`,0)},dependencies:[Fe,he],encapsulation:2})};var Lt=class o{static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-number-info-theme`]],decls:1,vars:0,consts:[[`subTitle`,`本周访问`,`total`,`12,321`,`subTotal`,`17.1`,`status`,`down`,`theme`,`default`]],template:function(t,n){t&1&&pt(0,`number-info`,0)},dependencies:[Fe,he],encapsulation:2})};var Ht=class o{static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-number-info-multiple`]],decls:3,vars:0,consts:[[`subTitle`,`今日访问`,`total`,`12,321`],[`subTitle`,`本周访问`,`total`,`12,32100`],[`subTitle`,`本月访问`,`total`,`12,32100000`]],template:function(t,n){t&1&&pt(0,`number-info`,0)(1,`number-info`,1)(2,`number-info`,2)},dependencies:[Fe,he],encapsulation:2})};var qt=class o{item={name:`number-info`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{title:`number-info`,subtitle:`NumberInfo`,cols:2,module:`import { NumberInfoModule } from '@delon/chart/number-info';`,description:`Often used in data cards for highlighting the business data.`,group:`G2`,order:0,path:`packages/chart/number-info/index.en-US.md`,url:`/chart/number-info/en`},text:`<p>Often used in data cards for highlighting the business data.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="number-info"><a class="lake-link"><i data-anchor="number-info"></i></a>number-info</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[title]</code></td>
<td>title</td>
<td><code>TemplateRef&lt;void&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[subTitle]</code></td>
<td>subtitle</td>
<td><code>TemplateRef&lt;void&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[total]</code></td>
<td>total amount</td>
<td><code>string, number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[suffix]</code></td>
<td>total amount suffix</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[subTotal]</code></td>
<td>total amount of additional information</td>
<td><code>string, number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[status]</code></td>
<td>increase state</td>
<td><code>&#39;up&#39;,&#39;down&#39;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td>state style</td>
<td><code>&#39;light&#39;,&#39;default&#39;</code></td>
<td><code>&#39;light&#39;</code></td>
</tr>
<tr>
<td><code>[gap]</code></td>
<td>set the spacing (pixels) between numbers and descriptions</td>
<td><code>number</code></td>
<td>8</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`number-info`,title:`number-info`}]}],raw:"---\ntype: G2\ntitle: number-info\nsubtitle: NumberInfo\ncols: 2\nmodule: import { NumberInfoModule } from '@delon/chart/number-info';\n---\n\nOften used in data cards for highlighting the business data.\n\n## API\n\n### number-info\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[title]` | title | `TemplateRef<void>` | - |\n| `[subTitle]` | subtitle | `TemplateRef<void>` | - |\n| `[total]` | total amount | `string, number` | - |\n| `[suffix]` | total amount suffix | `string` | - |\n| `[subTotal]` | total amount of additional information | `string, number` | - |\n| `[status]` | increase state | `'up','down'` | - |\n| `[theme]` | state style | `'light','default'` | `'light'` |\n| `[gap]` | set the spacing (pixels) between numbers and descriptions | `number` | 8 |"},"zh-CN":{meta:{title:`number-info`,subtitle:`数据文本`,cols:2,module:`import { NumberInfoModule } from '@delon/chart/number-info';`,description:`常用在数据卡片中，用于突出展示某个业务数据。`,group:`G2`,order:0,path:`packages/chart/number-info/index.zh-CN.md`,url:`/chart/number-info/zh`},text:`<p>\u5E38\u7528\u5728\u6570\u636E\u5361\u7247\u4E2D\uFF0C\u7528\u4E8E\u7A81\u51FA\u5C55\u793A\u67D0\u4E2A\u4E1A\u52A1\u6570\u636E\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="number-info"><a class="lake-link"><i data-anchor="number-info"></i></a>number-info</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[title]</code></td>
<td>\u6807\u9898</td>
<td><code>TemplateRef&lt;void&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[subTitle]</code></td>
<td>\u5B50\u6807\u9898</td>
<td><code>TemplateRef&lt;void&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[total]</code></td>
<td>\u603B\u91CF</td>
<td><code>string, number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[suffix]</code></td>
<td>\u603B\u91CF\u540E\u7F00</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[subTotal]</code></td>
<td>\u5B50\u603B\u91CF</td>
<td><code>string, number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[status]</code></td>
<td>\u589E\u52A0\u72B6\u6001</td>
<td><code>&#39;up&#39;,&#39;down&#39;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td>\u72B6\u6001\u6837\u5F0F</td>
<td><code>&#39;light&#39;,&#39;default&#39;</code></td>
<td><code>&#39;light&#39;</code></td>
</tr>
<tr>
<td><code>[gap]</code></td>
<td>\u8BBE\u7F6E\u6570\u5B57\u548C\u63CF\u8FF0\u76F4\u63A5\u7684\u95F4\u8DDD\uFF08\u50CF\u7D20\uFF09</td>
<td><code>number</code></td>
<td>8</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`number-info`,title:`number-info`}]}],raw:"---\ntype: G2\ntitle: number-info\nsubtitle: 数据文本\ncols: 2\nmodule: import { NumberInfoModule } from '@delon/chart/number-info';\n---\n\n常用在数据卡片中，用于突出展示某个业务数据。\n\n## API\n\n### number-info\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[title]` | 标题 | `TemplateRef<void>` | - |\n| `[subTitle]` | 子标题 | `TemplateRef<void>` | - |\n| `[total]` | 总量 | `string, number` | - |\n| `[suffix]` | 总量后缀 | `string` | - |\n| `[subTotal]` | 子总量 | `string, number` | - |\n| `[status]` | 增加状态 | `'up','down'` | - |\n| `[theme]` | 状态样式 | `'light','default'` | `'light'` |\n| `[gap]` | 设置数字和描述直接的间距（像素） | `number` | 8 |"}}};codes=[{id:`chart-number-info-basic`,name:`basic`,title:{"zh-CN":`基本`,"en-US":`Basic`},code:`import { Component } from '@angular/core';

import { NumberInfoModule } from '@delon/chart/number-info';

@Component({
  selector: 'chart-number-info-basic',
  template: \` <number-info subTitle="\u672C\u5468\u8BBF\u95EE" total="12,321" subTotal="17.1" status="up" /> \`,
  imports: [NumberInfoModule]
})
export class ChartNumberInfoBasic {}`,order:0,type:`demo`,summary:{"en-US":`<p>Different ways to present number info.</p>
`,"zh-CN":`<p>\u5404\u79CD\u6570\u636E\u6587\u6848\u7684\u5C55\u73B0\u65B9\u5F0F\u3002</p>
`},summary_raw:{"en-US":`Different ways to present number info.
`,"zh-CN":`\u5404\u79CD\u6570\u636E\u6587\u6848\u7684\u5C55\u73B0\u65B9\u5F0F\u3002
`},path:`packages/chart/number-info/demo/basic.md`},{id:`chart-number-info-theme`,name:`theme`,title:{"zh-CN":`主题`,"en-US":`Theme`},code:`import { Component } from '@angular/core';

import { NumberInfoModule } from '@delon/chart/number-info';

@Component({
  selector: 'chart-number-info-theme',
  template: \` <number-info subTitle="\u672C\u5468\u8BBF\u95EE" total="12,321" subTotal="17.1" status="down" theme="default" /> \`,
  imports: [NumberInfoModule]
})
export class ChartNumberInfoTheme {}`,order:1,type:`demo`,summary:{"en-US":`<p>Dark theme.</p>
`,"zh-CN":`<p>\u6697\u7CFB\u3002</p>
`},summary_raw:{"en-US":`Dark theme.
`,"zh-CN":`\u6697\u7CFB\u3002
`},path:`packages/chart/number-info/demo/theme.md`},{id:`chart-number-info-multiple`,name:`multiple`,title:{"zh-CN":`多列`,"en-US":`Multiple`},code:`import { Component } from '@angular/core';

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
export class ChartNumberInfoMultiple {}`,order:2,type:`demo`,summary:{"en-US":`<p>Should be show a separator when multiple <code>number-info</code> components.</p>
`,"zh-CN":`<p>\u591A\u4E2A<code>number-info</code>\u7EC4\u4EF6\u5728\u4E00\u8D77\u65F6\u589E\u52A0\u5206\u9694\u7B26\u3002</p>
`},summary_raw:{"en-US":"Should be show a separator when multiple `number-info` components.\n","zh-CN":"多个`number-info`组件在一起时增加分隔符。\n"},path:`packages/chart/number-info/demo/multiple.md`}];static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-number-info`]],hostAttrs:[1,`d-block`],decls:10,vars:9,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`12`],[3,`item`]],template:function(t,n){t&1&&(oe(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),pt(4,`chart-number-info-basic`),he$1(),oe(5,`code-box`,3),pt(6,`chart-number-info-multiple`),he$1()(),oe(7,`div`,2)(8,`code-box`,3),pt(9,`chart-number-info-theme`),he$1()()()()),t&2&&(ie(`codes`,n.codes)(`item`,n.item),A(),ie(`nzGutter`,16),A(2),ie(`item`,n.codes[0]),$t$1(`id`,n.codes[0].id),A(2),ie(`item`,n.codes[2]),$t$1(`id`,n.codes[2].id),A(3),ie(`item`,n.codes[1]),$t$1(`id`,n.codes[1].id))},dependencies:[ce$1,jt,Lt,Ht,sn$1,We$1,X$1],encapsulation:2})};var ta=o=>({"background-color":o});function na(o,e){o&1&&(oe(0,`div`,1),pt(1,`nz-skeleton`),he$1())}function oa(o,e){if(o&1&&(nn$1(0),pt(1,`div`,8),rn$1()),o&2){let t=F(3);A(),ie(`innerHTML`,t.subTitle(),Sa$1)}}function aa(o,e){if(o&1&&(oe(0,`h4`,5),qe(1,oa,2,1,`ng-container`,7),he$1()),o&2){let t=F(2);A(),ie(`nzStringTemplateOutlet`,t.subTitle())}}function ra(o,e){if(o&1&&(nn$1(0),pt(1,`div`,8),rn$1()),o&2){let t=F(3);A(),ie(`innerHTML`,t.total(),Sa$1)}}function ia(o,e){if(o&1&&(oe(0,`div`,6),qe(1,ra,2,1,`ng-container`,7),he$1()),o&2){let t=F(2);A(),ie(`nzStringTemplateOutlet`,t.total())}}function da(o,e){if(o&1&&(oe(0,`div`,3),ve(1,aa,2,1,`h4`,5),ve(2,ia,2,1,`div`,6),he$1()),o&2){let t=F();A(),ye(t.subTitle()?1:-1),A(),ye(t.total()?2:-1)}}function ca(o,e){if(o&1){let t=on$1();oe(0,`li`,10),je(`click`,function(){let m=gt$1(t).$index,p=F(2);return vt$1(p._click(m))}),pt(1,`span`,11),oe(2,`span`,12),an$1(3),he$1(),pt(4,`nz-divider`,13),oe(5,`span`,14),an$1(6),he$1(),pt(7,`span`,15),he$1()}if(o&2){let t=e.$implicit;A(),ko$1(ff(5,ta,t.checked?t.color:`#aaa`)),A(2),vr(t.x),A(3),Io$1(``,t.percent,`%`);let n=F(2).valueFormat();A(),ie(`innerHTML`,n?n(t.y):t.y,Sa$1)}}function la(o,e){if(o&1&&(oe(0,`ul`,4),Yl(1,ca,8,7,`li`,9,EP),he$1()),o&2){let t=F();A(),Ul(t.legendData())}}var Re=class o extends tt$1{legendData=G([]);block=G(!1);isPercent=Fe$1(()=>this.percent()!=null);runTooltip=Fe$1(()=>this.isPercent()?!1:this.tooltip());percentColor=Fe$1(()=>{let{text:e,color:t,inverseColor:n}=this.ratio(),m=t||this.color();return p=>p===e?m:n});runData=Fe$1(()=>{let e=this.percent();if(e==null)return this.data();let{text:t,inverse:n}=this.ratio();return[{x:t,y:e},{x:n,y:100-e}]});animate=pe$1(!0,{transform:H});color=pe$1(`rgba(24, 144, 255, 0.85)`);subTitle=pe$1();total=pe$1();height=pe$1(0,{transform:Oo$1});fontSize=pe$1(14,{transform:Oo$1});hasLegend=pe$1(!1,{transform:H});inner=pe$1(.75);padding=pe$1([12,0,12,0]);percent=pe$1(void 0,{transform:Oo$1});tooltip=pe$1(!0,{transform:H});lineWidth=pe$1(0,{transform:Oo$1});blockMaxWidth=pe$1(380,{transform:Oo$1});select=pe$1(!0,{transform:H});valueFormat=pe$1();data=pe$1([]);colors=pe$1();interaction=pe$1(`none`);ratio=pe$1({text:`占比`,inverse:`反比`,color:``,inverseColor:`#F0F2F5`});clickItem=Zl();updateBlock(){this.block.set(!!this._chart&&this.hasLegend()&&this.el.nativeElement.clientWidth<=this.blockMaxWidth())}containerOf(){return this.node().nativeElement}buildSpec(){let{height:e,padding:t,inner:n,lineWidth:m,isPercent:p,percentColor:T,theme:q,animate:B,interaction:F}=this,ie=this.legendData(),ge=this.normalizedData().filter(re=>ie.find(ye=>ye.x===re.x)?.checked!==!1),fe=this.runTooltip();return W(g({},$t$2({autoFit:!0,height:e(),theme:q(),padding:t(),animate:B(),interaction:F()})),{data:ge,coordinate:{type:`theta`,innerRadius:n()},legend:!1,axis:!1,tooltip:fe?{title:!1}:!1,children:[W(g({type:`interval`,transform:[{type:`stackY`}],encode:{y:`y`,color:`x`}},p()?{scale:{color:{range:[T()(this.ratio().text),T()(this.ratio().inverse)]}}}:this.colors()?{scale:{color:{range:this.colors()}}}:{}),{style:{lineWidth:m(),stroke:`#fff`},tooltip:fe?{items:[re=>({name:re.x,value:`${(re.percent*100).toFixed(2)} %`})]}:!1})]})}colorOf(e){let t=this.colors()??this.chartColorRange();if(!t||t.length===0)return this.color();return t[this.runData().findIndex(m=>m.x===e)%t.length]}chartColorRange(){if(!this._chart)return;let e=this._chart.getScale?.()?.color?.getOptions?.().range;return Array.isArray(e)?e:void 0}normalizedData(){let e=this.runData(),t=e.reduce((n,m)=>n+m.y,0);return e.map(n=>W(g({},n),{percent:t===0?0:n.y/t}))}dataOf(){return this.buildSpec().data}onRendered(){this.genLegend()}onDataChange(){this.genLegend()}afterCreate(e){e.on(`interval:click`,t=>{this.clickItem.emit({item:t.data?.data,ev:t})}),e.on(`afterrender`,()=>this.updateBlock())}genLegend(){let{hasLegend:e,isPercent:t}=this;!e()||t()||this.legendData.set(this.normalizedData().map(n=>({x:n.x,y:n.y,color:this.colorOf(n.x),checked:this.legendData().find(m=>m.x===n.x)?.checked!==!1,percent:(n.percent*100).toFixed(2)})))}_click(e){let n=this.legendData().map((m,p)=>p===e?W(g({},m),{checked:m.checked===!1}):m);this.legendData.set(n),this.repaintSpec()}static ɵfac=(()=>{let e;return function(n){return(e||(e=Gn(o)))(n||o)}})();static ɵcmp=Se({type:o,selectors:[[`g2-pie`]],hostAttrs:[1,`g2-pie`],hostVars:10,hostBindings:function(t,n){t&2&&(It$1(`height`,n.height(),`px`)(`font-size`,n.fontSize(),`px`),Ze(`g2-pie__legend-has`,n.hasLegend())(`g2-pie__legend-block`,n.block())(`g2-pie__mini`,n.isPercent()))},inputs:{animate:[1,`animate`],color:[1,`color`],subTitle:[1,`subTitle`],total:[1,`total`],height:[1,`height`],fontSize:[1,`fontSize`],hasLegend:[1,`hasLegend`],inner:[1,`inner`],padding:[1,`padding`],percent:[1,`percent`],tooltip:[1,`tooltip`],lineWidth:[1,`lineWidth`],blockMaxWidth:[1,`blockMaxWidth`],select:[1,`select`],valueFormat:[1,`valueFormat`],data:[1,`data`],colors:[1,`colors`],interaction:[1,`interaction`],ratio:[1,`ratio`]},outputs:{clickItem:`clickItem`},exportAs:[`g2Pie`],features:[tn$1],decls:6,vars:3,consts:[[`container`,``],[2,`position`,`absolute`,`inset`,`0`,`z-index`,`1`],[1,`g2-pie__chart`],[1,`g2-pie__total`],[1,`g2-pie__legend`],[1,`g2-pie__total-title`],[1,`g2-pie__total-stat`],[4,`nzStringTemplateOutlet`],[3,`innerHTML`],[1,`g2-pie__legend-item`],[1,`g2-pie__legend-item`,3,`click`],[1,`g2-pie__legend-dot`],[1,`g2-pie__legend-title`],[`nzType`,`vertical`],[1,`g2-pie__legend-percent`],[1,`g2-pie__legend-value`,3,`innerHTML`]],template:function(t,n){t&1&&(ve(0,na,2,0,`div`,1),oe(1,`div`,2),pt(2,`div`,null,0),ve(4,da,3,2,`div`,3),he$1(),ve(5,la,3,0,`ul`,4)),t&2&&(ye(n.loaded()?-1:0),A(4),ye(n.subTitle()||n.total()?4:-1),A(),ye(n.hasLegend()&&n.legendData().length>0?5:-1))},dependencies:[Z,er,Ya],encapsulation:2})};var sa=[Re];var tt=class o{static ɵfac=function(t){return new(t||o)};static ɵmod=ee({type:o});static ɵinj=X({imports:[Rb,xu,Jr,ee$1,sa]})};var ma=[`pie`];var $t=class o{constructor(e){this.msg=e;this.refresh()}msg;pie=sb(`pie`);salesPieData=G([]);total=G(``);refresh(){let e=(m=0,p=5e3)=>Math.floor(Math.random()*(p-m+1)+m),t=[{x:`家用电器`,y:e()},{x:`食用酒水`,y:e()},{x:`个护健康`,y:e()},{x:`服饰箱包`,y:e()},{x:`母婴产品`,y:e()}];Math.random()>.5&&t.push({x:`其他`,y:e()}),this.salesPieData.set(t),this.total.set(`&yen ${t.reduce((m,p)=>p.y+m,0).toFixed(2)}`);let n=this.pie();n&&fo$1(0).subscribe(()=>n.changeData())}format(e){return`&yen ${e.toFixed(2)}`}handleClick(e){this.msg.info(`${e.item.x} - ${e.item.y}`)}static ɵfac=function(t){return new(t||o)(Mt$1(lu))};static ɵcmp=Se({type:o,selectors:[[`chart-pie-basic`]],viewQuery:function(t,n){t&1&&_d(n.pie,ma,5),t&2&&Sd()},decls:4,vars:4,consts:[[`pie`,``],[`nz-button`,``,`nzType`,`primary`,3,`click`],[`title`,`销售额`,`subTitle`,`销售额`,`height`,`294`,`repaint`,`false`,3,`clickItem`,`hasLegend`,`total`,`valueFormat`,`data`]],template:function(t,n){t&1&&(oe(0,`button`,1),je(`click`,function(){return n.refresh()}),an$1(1,`Refresh`),he$1(),oe(2,`g2-pie`,2,0),je(`clickItem`,function(p){return n.handleClick(p)}),he$1()),t&2&&(A(2),ie(`hasLegend`,!0)(`total`,n.total())(`valueFormat`,n.format)(`data`,n.salesPieData()))},dependencies:[v5,a3,f5,m5,tt,Re],encapsulation:2})};var Vt=class o{static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-pie-mini`]],decls:1,vars:0,consts:[[`percent`,`28`,`subTitle`,`中式快餐`,`total`,`28%`,`height`,`130`,`padding`,`auto`,2,`width`,`130px`]],template:function(t,n){t&1&&pt(0,`g2-pie`,0)},dependencies:[tt,Re],encapsulation:2})};var Jt=class o{item={name:`pie`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{title:`g2-pie`,subtitle:`Pie`,cols:1,module:`import { G2PieModule } from '@delon/chart/pie';`,description:`It is ideal for displaying speed-related graphics.`,group:`G2`,order:0,path:`packages/chart/pie/index.en-US.md`,url:`/chart/pie/en`},text:`<p>It is ideal for displaying speed-related graphics.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="g2-pie"><a class="lake-link"><i data-anchor="g2-pie"></i></a>g2-pie</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[repaint]</code></td>
<td>Whether to repaint when the data changes again</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[delay]</code></td>
<td>Delayed rendering, unit: ms</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[animate]</code></td>
<td>Whether to display the animation</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[color]</code></td>
<td>Color of the chart</td>
<td><code>string</code></td>
<td><code>rgba(24, 144, 255, 0.85)</code></td>
</tr>
<tr>
<td><code>[height]</code></td>
<td>Height of the chart</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[fontSize]</code></td>
<td>Base font size (the legend inherits it and the center value scales with <code>em</code>)</td>
<td><code>number</code></td>
<td><code>14</code></td>
</tr>
<tr>
<td><code>[hasLegend]</code></td>
<td>Whether to display the legend</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[padding]</code></td>
<td>Padding of the chart</td>
<td><code>number[]</code></td>
<td><code>[12, 0, 12, 0]</code></td>
</tr>
<tr>
<td><code>[percent]</code></td>
<td>Percentage</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[select]</code></td>
<td>Whether slice selection is supported (<strong>not implemented in the current version, kept for compatibility and has no effect</strong>)</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[lineWidth]</code></td>
<td>Border width</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[inner]</code></td>
<td>Radius of the inner polar coordinate</td>
<td><code>number</code></td>
<td><code>0.75</code></td>
</tr>
<tr>
<td><code>[blockMaxWidth]</code></td>
<td>Width at which the layout switches to block mode</td>
<td><code>number</code></td>
<td><code>380</code></td>
</tr>
<tr>
<td><code>[tooltip]</code></td>
<td>Whether to display the tooltip</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[subTitle]</code></td>
<td>Subtitle of the chart</td>
<td><code>string,TemplateRef&lt;void&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[total]</code></td>
<td>Total amount</td>
<td><code>string,number,TemplateRef&lt;void&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[valueFormat]</code></td>
<td>Formatter for the y-axis value</td>
<td><code>(y: number) =&gt; string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[data]</code></td>
<td>Data</td>
<td><code>G2PieData[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[colors]</code></td>
<td>Color list</td>
<td><code>string[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[interaction]</code></td>
<td>Interaction type: <code>none</code> (no interaction), <code>element-active</code> (active element), <code>active-region</code> (chart component), <code>brush</code> (brush selection), <code>drag-move</code> (drag to move)</td>
<td><code>InteractionType</code></td>
<td><code>none</code></td>
</tr>
<tr>
<td><code>[ratio]</code></td>
<td>Percentage configuration</td>
<td><code>G2PieRatio</code></td>
<td><code>&#123; text: &#39;\u5360\u6BD4&#39;, inverse: &#39;\u53CD\u6BD4&#39;, color: &#39;&#39;, inverseColor: &#39;#F0F2F5&#39; &#125;</code></td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td>Custom chart theme</td>
<td><code>string | LooseObject</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(clickItem)</code></td>
<td>Callback when clicking an item</td>
<td><code>output&lt;G2PieClickItem&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>Callback when G2 is initialized</td>
<td><code>output&lt;Chart&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(error)</code></td>
<td>Callback when rendering fails (G2 not loaded or render throws); <code>(ready)</code> will not fire</td>
<td><code>output&lt;unknown&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="g2piedata"><a class="lake-link"><i data-anchor="g2piedata"></i></a>G2PieData</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[x]</code></td>
<td>x-axis</td>
<td><code>any</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[y]</code></td>
<td>y-axis</td>
<td><code>number</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-pie`,title:`g2-pie`},{id:`g2piedata`,title:`G2PieData`}]}],raw:"---\ntitle: g2-pie\nsubtitle: Pie\ncols: 1\ntype: G2\nmodule: import { G2PieModule } from '@delon/chart/pie';\n---\n\nIt is ideal for displaying speed-related graphics.\n\n## API\n\n### g2-pie\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[repaint]` | Whether to repaint when the data changes again | `boolean` | `true` |\n| `[delay]` | Delayed rendering, unit: ms | `number` | `0` |\n| `[animate]` | Whether to display the animation | `boolean` | `true` |\n| `[color]` | Color of the chart | `string` | `rgba(24, 144, 255, 0.85)` |\n| `[height]` | Height of the chart | `number` | - |\n| `[fontSize]` | Base font size (the legend inherits it and the center value scales with `em`) | `number` | `14` |\n| `[hasLegend]` | Whether to display the legend | `boolean` | `false` |\n| `[padding]` | Padding of the chart | `number[]` | `[12, 0, 12, 0]` |\n| `[percent]` | Percentage | `number` | - |\n| `[select]` | Whether slice selection is supported (**not implemented in the current version, kept for compatibility and has no effect**) | `boolean` | `true` |\n| `[lineWidth]` | Border width | `number` | `0` |\n| `[inner]` | Radius of the inner polar coordinate | `number` | `0.75` |\n| `[blockMaxWidth]` | Width at which the layout switches to block mode | `number` | `380` |\n| `[tooltip]` | Whether to display the tooltip | `boolean` | `true` |\n| `[subTitle]` | Subtitle of the chart | `string,TemplateRef<void>` | - |\n| `[total]` | Total amount | `string,number,TemplateRef<void>` | - |\n| `[valueFormat]` | Formatter for the y-axis value | `(y: number) => string` | - |\n| `[data]` | Data | `G2PieData[]` | - |\n| `[colors]` | Color list | `string[]` | - |\n| `[interaction]` | Interaction type: `none` (no interaction), `element-active` (active element), `active-region` (chart component), `brush` (brush selection), `drag-move` (drag to move) | `InteractionType` | `none` |\n| `[ratio]` | Percentage configuration | `G2PieRatio` | `{ text: '占比', inverse: '反比', color: '', inverseColor: '#F0F2F5' }` |\n| `[theme]` | Custom chart theme | `string \\| LooseObject` | - |\n| `(clickItem)` | Callback when clicking an item | `output<G2PieClickItem>` | - |\n| `(ready)` | Callback when G2 is initialized | `output<Chart>` | - |\n| `(error)` | Callback when rendering fails (G2 not loaded or render throws); `(ready)` will not fire | `output<unknown>` | - |\n\n### G2PieData\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[x]` | x-axis | `any` | - |\n| `[y]` | y-axis | `number` | - |"},"zh-CN":{meta:{title:`g2-pie`,subtitle:`饼状图`,cols:1,module:`import { G2PieModule } from '@delon/chart/pie';`,description:`用于显示跟速度相关图形再适合不过。`,group:`G2`,order:0,path:`packages/chart/pie/index.zh-CN.md`,url:`/chart/pie/zh`},text:`<p>\u7528\u4E8E\u663E\u793A\u8DDF\u901F\u5EA6\u76F8\u5173\u56FE\u5F62\u518D\u9002\u5408\u4E0D\u8FC7\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="g2-pie"><a class="lake-link"><i data-anchor="g2-pie"></i></a>g2-pie</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[repaint]</code></td>
<td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[delay]</code></td>
<td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[animate]</code></td>
<td>\u662F\u5426\u663E\u793A\u52A8\u753B</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[color]</code></td>
<td>\u56FE\u8868\u989C\u8272</td>
<td><code>string</code></td>
<td><code>rgba(24, 144, 255, 0.85)</code></td>
</tr>
<tr>
<td><code>[height]</code></td>
<td>\u56FE\u8868\u9AD8\u5EA6</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[fontSize]</code></td>
<td>\u56FE\u8868\u6587\u5B57\u57FA\u51C6\u5B57\u53F7\uFF08\u56FE\u4F8B\u7EE7\u627F\u8BE5\u5B57\u53F7\uFF0C\u4E2D\u5FC3\u6570\u503C\u6309 <code>em</code> \u7F29\u653E\uFF09</td>
<td><code>number</code></td>
<td><code>14</code></td>
</tr>
<tr>
<td><code>[hasLegend]</code></td>
<td>\u662F\u5426\u663E\u793A legend</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[padding]</code></td>
<td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td>
<td><code>number[]</code></td>
<td><code>[12, 0, 12, 0]</code></td>
</tr>
<tr>
<td><code>[percent]</code></td>
<td>\u5360\u6BD4</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[select]</code></td>
<td>\u662F\u5426\u652F\u6301\u5206\u7247\u9009\u4E2D\uFF08<strong>\u5F53\u524D\u7248\u672C\u672A\u5B9E\u73B0\uFF0C\u4E3A\u517C\u5BB9\u4FDD\u7559\u7684\u7A7A\u8F6C\u8F93\u5165</strong>\uFF09</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[lineWidth]</code></td>
<td>\u8FB9\u6846\u7C97\u7EC6</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[inner]</code></td>
<td>\u5185\u90E8\u6781\u5750\u6807\u7CFB\u7684\u534A\u5F84</td>
<td><code>number</code></td>
<td><code>0.75</code></td>
</tr>
<tr>
<td><code>[blockMaxWidth]</code></td>
<td>\u591A\u5C11\u5BBD\u5EA6\u4E3A\u5757\u663E\u793A</td>
<td><code>number</code></td>
<td><code>380</code></td>
</tr>
<tr>
<td><code>[tooltip]</code></td>
<td>\u662F\u5426\u663E\u793A tooltip</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[subTitle]</code></td>
<td>\u56FE\u8868\u5B50\u6807\u9898</td>
<td><code>string,TemplateRef&lt;void&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[total]</code></td>
<td>\u603B\u91CF</td>
<td><code>string,number,TemplateRef&lt;void&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[valueFormat]</code></td>
<td>y\u8F74\u683C\u5F0F\u5316</td>
<td><code>(y: number) =&gt; string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[data]</code></td>
<td>\u6570\u636E</td>
<td><code>G2PieData[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[colors]</code></td>
<td>\u989C\u8272\u5217\u8868</td>
<td><code>string[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[interaction]</code></td>
<td>\u4EA4\u4E92\u7C7B\u578B\uFF0Cnone \u65E0 element-active \u56FE\u5F62\u5143\u7D20\uFF0Cactive-region \u56FE\u8868\u7EC4\u4EF6\uFF0Cbrush \u6846\u9009\uFF0Cdrag-move \u79FB\u52A8</td>
<td><code>InteractionType</code></td>
<td><code>none</code></td>
</tr>
<tr>
<td><code>[ratio]</code></td>
<td>\u767E\u5206\u6BD4\u914D\u7F6E\u9879</td>
<td><code>G2PieRatio</code></td>
<td><code>&#123; text: &#39;\u5360\u6BD4&#39;, inverse: &#39;\u53CD\u6BD4&#39;, color: &#39;&#39;, inverseColor: &#39;#F0F2F5&#39; &#125;</code></td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td>
<td><code>string | LooseObject</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(clickItem)</code></td>
<td>\u70B9\u51FB\u9879\u56DE\u8C03</td>
<td><code>output&lt;G2PieClickItem&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td>
<td><code>output&lt;Chart&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(error)</code></td>
<td>\u5F53\u6E32\u67D3\u5931\u8D25\u65F6\u8C03\u7528\uFF08G2 \u672A\u52A0\u8F7D\u6216\u6E32\u67D3\u629B\u9519\uFF09\uFF0C\u6B64\u65F6 <code>(ready)</code> \u4E0D\u4F1A\u89E6\u53D1</td>
<td><code>output&lt;unknown&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="g2piedata"><a class="lake-link"><i data-anchor="g2piedata"></i></a>G2PieData</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[x]</code></td>
<td>x\u8F74</td>
<td><code>any</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[y]</code></td>
<td>y\u8F74</td>
<td><code>number</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-pie`,title:`g2-pie`},{id:`g2piedata`,title:`G2PieData`}]}],raw:"---\ntitle: g2-pie\nsubtitle: 饼状图\ncols: 1\ntype: G2\nmodule: import { G2PieModule } from '@delon/chart/pie';\n---\n\n用于显示跟速度相关图形再适合不过。\n\n## API\n\n### g2-pie\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |\n| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |\n| `[animate]` | 是否显示动画 | `boolean` | `true` |\n| `[color]` | 图表颜色 | `string` | `rgba(24, 144, 255, 0.85)` |\n| `[height]` | 图表高度 | `number` | - |\n| `[fontSize]` | 图表文字基准字号（图例继承该字号，中心数值按 `em` 缩放） | `number` | `14` |\n| `[hasLegend]` | 是否显示 legend | `boolean` | `false` |\n| `[padding]` | 图表内部间距 | `number[]` | `[12, 0, 12, 0]` |\n| `[percent]` | 占比 | `number` | - |\n| `[select]` | 是否支持分片选中（**当前版本未实现，为兼容保留的空转输入**） | `boolean` | `true` |\n| `[lineWidth]` | 边框粗细 | `number` | `0` |\n| `[inner]` | 内部极坐标系的半径 | `number` | `0.75` |\n| `[blockMaxWidth]` | 多少宽度为块显示 | `number` | `380` |\n| `[tooltip]` | 是否显示 tooltip | `boolean` | `true` |\n| `[subTitle]` | 图表子标题 | `string,TemplateRef<void>` | - |\n| `[total]` | 总量 | `string,number,TemplateRef<void>` | - |\n| `[valueFormat]` | y轴格式化 | `(y: number) => string` | - |\n| `[data]` | 数据 | `G2PieData[]` | - |\n| `[colors]` | 颜色列表 | `string[]` | - |\n| `[interaction]` | 交互类型，none 无 element-active 图形元素，active-region 图表组件，brush 框选，drag-move 移动 | `InteractionType` | `none` |\n| `[ratio]` | 百分比配置项 | `G2PieRatio` | `{ text: '占比', inverse: '反比', color: '', inverseColor: '#F0F2F5' }` |\n| `[theme]` | 定制图表主题 | `string \\| LooseObject` | - |\n| `(clickItem)` | 点击项回调 | `output<G2PieClickItem>` | - |\n| `(ready)` | 当G2完成初始化后调用 | `output<Chart>` | - |\n| `(error)` | 当渲染失败时调用（G2 未加载或渲染抛错），此时 `(ready)` 不会触发 | `output<unknown>` | - |\n\n### G2PieData\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[x]` | x轴 | `any` | - |\n| `[y]` | y轴 | `number` | - |"}}};codes=[{id:`chart-pie-basic`,name:`basic`,title:{"zh-CN":`基础`,"en-US":`Basic`},code:`import { Component, signal, viewChild } from '@angular/core';

import { G2PieClickItem, G2PieComponent, G2PieData, G2PieModule } from '@delon/chart/pie';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { timer } from 'rxjs';

@Component({
  selector: 'chart-pie-basic',
  template: \`
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-pie
      #pie
      [hasLegend]="true"
      title="\u9500\u552E\u989D"
      subTitle="\u9500\u552E\u989D"
      [total]="total()"
      [valueFormat]="format"
      [data]="salesPieData()"
      height="294"
      repaint="false"
      (clickItem)="handleClick($event)"
    />
  \`,
  imports: [NzButtonModule, G2PieModule]
})
export class ChartPieBasic {
  readonly pie = viewChild<G2PieComponent>('pie');
  readonly salesPieData = signal<G2PieData[]>([]);
  readonly total = signal('');

  constructor(private msg: NzMessageService) {
    this.refresh();
  }

  refresh(): void {
    const rv = (min: number = 0, max: number = 5000): number => Math.floor(Math.random() * (max - min + 1) + min);
    const salesPieData: G2PieData[] = [
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
      salesPieData.push({
        x: '\u5176\u4ED6',
        y: rv()
      });
    }
    this.salesPieData.set(salesPieData);
    this.total.set(\`&yen \${salesPieData.reduce((pre, now) => now.y + pre, 0).toFixed(2)}\`);
    const pie = this.pie();
    if (pie) {
      // \u7B49\u5F85\u7EC4\u4EF6\u5B8C\u6210\u672C\u6B21\u6E32\u67D3\u540E\u518D\u624B\u52A8\u66F4\u65B0\u6570\u636E
      timer(0).subscribe(() => pie.changeData());
    }
  }

  format(val: number): string {
    return \`&yen \${val.toFixed(2)}\`;
  }

  handleClick(data: G2PieClickItem): void {
    this.msg.info(\`\${data.item.x} - \${data.item.y}\`);
  }
}`,order:0,type:`demo`,summary:{"en-US":`<p>Basic usage. By default, a smooth data update is detected only when <code>data</code> changes, so here <code>repaint</code> is used to manually call <code>changeData</code> and update the data to achieve the same smooth effect.</p>
`,"zh-CN":`<p>\u57FA\u7840\u7528\u6CD5\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E1D\u6ED1\u66F4\u65B0\u6570\u636E\u7684\u5224\u65AD\u6807\u51C6\u662F\u4EE5\u53EA\u66F4\u65B0 <code>data</code> \u4E3A\u51C6\uFF0C\u8FD9\u91CC\u5229\u7528 <code>repaint</code> \u8FDB\u884C\u624B\u52A8\u8C03\u7528 <code>changeData</code> \u6539\u53D8\u6570\u636E\u8FBE\u5230\u4E1D\u6ED1\u66F4\u65B0\u7684\u6548\u679C\u3002</p>
`},summary_raw:{"en-US":"Basic usage. By default, a smooth data update is detected only when `data` changes, so here `repaint` is used to manually call `changeData` and update the data to achieve the same smooth effect.\n","zh-CN":"基础用法。默认情况下丝滑更新数据的判断标准是以只更新 `data` 为准，这里利用 `repaint` 进行手动调用 `changeData` 改变数据达到丝滑更新的效果。\n"},path:`packages/chart/pie/demo/basic.md`},{id:`chart-pie-mini`,name:`mini`,title:{"zh-CN":`迷你型`,"en-US":`Mini`},code:`import { Component } from '@angular/core';

import { G2PieModule } from '@delon/chart/pie';

@Component({
  selector: 'chart-pie-mini',
  template: \`<g2-pie percent="28" subTitle="\u4E2D\u5F0F\u5FEB\u9910" total="28%" height="130" padding="auto" style="width: 130px" />\`,
  imports: [G2PieModule]
})
export class ChartPieMini {}`,order:0,type:`demo`,summary:{"en-US":`<p>By simplifying the <code>pie</code> options you can quickly build a minimal pie chart, and combine it with <code>chart-card</code> to cover more business scenarios.</p>
`,"zh-CN":`<p>\u901A\u8FC7\u7B80\u5316 <code>pie</code> \u5C5E\u6027\u7684\u8BBE\u7F6E\uFF0C\u53EF\u4EE5\u5FEB\u901F\u7684\u5B9E\u73B0\u6781\u7B80\u7684\u997C\u72B6\u56FE\uFF0C\u53EF\u914D\u5408 <code>chart-card</code> \u7EC4\u5408\u5C55\u73B0\u66F4\u591A\u4E1A\u52A1\u573A\u666F\u3002</p>
`},summary_raw:{"en-US":"By simplifying the `pie` options you can quickly build a minimal pie chart, and combine it with `chart-card` to cover more business scenarios.\n","zh-CN":"通过简化 `pie` 属性的设置，可以快速的实现极简的饼状图，可配合 `chart-card` 组合展现更多业务场景。\n"},path:`packages/chart/pie/demo/mini.md`}];static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-pie`]],hostAttrs:[1,`d-block`],decls:7,vars:7,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`24`],[3,`item`]],template:function(t,n){t&1&&(oe(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),pt(4,`chart-pie-basic`),he$1(),oe(5,`code-box`,3),pt(6,`chart-pie-mini`),he$1()()()()),t&2&&(ie(`codes`,n.codes)(`item`,n.item),A(),ie(`nzGutter`,16),A(2),ie(`item`,n.codes[0]),$t$1(`id`,n.codes[0].id),A(2),ie(`item`,n.codes[1]),$t$1(`id`,n.codes[1].id))},dependencies:[ce$1,$t,Vt,sn$1,We$1,X$1],encapsulation:2})};var pa=o=>({"background-color":o});function ua(o,e){o&1&&pt(0,`nz-skeleton`)}function ha(o,e){if(o&1&&(nn$1(0),oe(1,`h4`),an$1(2),he$1(),rn$1()),o&2){let t=F();A(2),vr(t.title())}}function ga(o,e){if(o&1){let t=on$1();oe(0,`div`,4),je(`click`,function(){let m=gt$1(t).$index,p=F(2);return vt$1(p._click(m))}),pt(1,`i`,5),an$1(2),oe(3,`h6`,6),an$1(4),he$1()()}if(o&2){let t=e.$implicit,n=e.$count;ie(`nzSpan`,24/n),A(),ko$1(ff(5,pa,t.checked?t.color:`#aaa`)),A(),Io$1(` `,t.name,` `),A(2),vr(t.value)}}function fa(o,e){if(o&1&&(oe(0,`div`,2),Yl(1,ga,5,7,`div`,3,EP),he$1()),o&2){let t=F();A(),Ul(t.legendData())}}var nt=class o extends tt$1{legendData=G([]);title=pe$1();height=pe$1(0,{transform:Oo$1});padding=pe$1([44,30,16,30]);hasLegend=pe$1(!0,{transform:H});tickCount=pe$1(4,{transform:Oo$1});data=pe$1([]);colors=pe$1([`#1890FF`,`#FACC14`,`#2FC25B`,`#8543E0`,`#F04864`,`#13C2C2`,`#fa8c16`,`#a0d911`]);clickItem=Zl();getHeight(){return this.height()-(this.hasLegend()?80:22)}containerOf(){return this.node().nativeElement}filteredData(){let e=this.legendData().filter(t=>t.checked!==!1).map(t=>t.name);return this.data().filter(t=>e.length===0||e.includes(t.name))}buildSpec(){let{colors:e,padding:t,theme:n,tickCount:m}=this;return W(g({},$t$2({theme:n(),padding:t(),height:this.getHeight(),autoFit:!0})),{data:this.filteredData(),coordinate:{type:`polar`},legend:!1,axis:{x:{grid:!0,gridStroke:`#e9e9e9`,gridLineWidth:1,labelSpacing:8,line:!1},y:{zIndex:1,title:!1,direction:`center`,grid:!0,gridStroke:`#e9e9e9`,gridLineWidth:1}},scale:{x:{padding:.5,align:0},y:{zero:!0,domainMin:0,tickCount:m()}},children:[{type:`line`,encode:{x:`label`,y:`value`,color:`name`},scale:{color:{range:e()}}},{type:`point`,encode:{x:`label`,y:`value`,color:`name`,shape:`circle`,size:3},scale:{color:{range:e()}}}]})}dataOf(){return this.filteredData()}onRendered(){this.genLegend()}onDataChange(){this.genLegend()}afterCreate(e){e.on(`point:click`,t=>{this.clickItem.emit({item:t.data?.data,ev:t})})}genLegend(){if(!this.hasLegend())return;let e=this.colors(),t=new Map;this.data().forEach(n=>{let m=t.get(n.name);t.set(n.name,{value:(m?.value??0)+n.value,color:e[t.size%e.length]})}),this.legendData.set([...t.entries()].map(([n,m])=>({name:n,color:m.color,checked:this.legendData().find(p=>p.name===n)?.checked!==!1,value:m.value})))}_click(e){let t=this.legendData().map((n,m)=>m===e?W(g({},n),{checked:n.checked===!1}):n);this.legendData.set(t),this.repaintSpec()}onInputChanges(){this.legendData().forEach(e=>e.checked=!0)}static ɵfac=(()=>{let e;return function(n){return(e||(e=Gn(o)))(n||o)}})();static ɵcmp=Se({type:o,selectors:[[`g2-radar`]],hostVars:4,hostBindings:function(t,n){t&2&&(It$1(`height`,n.height(),`px`),Ze(`g2-radar`,!0))},inputs:{title:[1,`title`],height:[1,`height`],padding:[1,`padding`],hasLegend:[1,`hasLegend`],tickCount:[1,`tickCount`],data:[1,`data`],colors:[1,`colors`]},outputs:{clickItem:`clickItem`},exportAs:[`g2Radar`],features:[tn$1],decls:5,vars:3,consts:[[`container`,``],[4,`nzStringTemplateOutlet`],[`nz-row`,``,1,`g2-radar__legend`],[`nz-col`,``,1,`g2-radar__legend-item`,3,`nzSpan`],[`nz-col`,``,1,`g2-radar__legend-item`,3,`click`,`nzSpan`],[1,`g2-radar__legend-dot`],[1,`g2-radar__legend-title`]],template:function(t,n){t&1&&(ve(0,ua,1,0,`nz-skeleton`),qe(1,ha,3,1,`ng-container`,1),pt(2,`div`,null,0),ve(4,fa,3,0,`div`,2)),t&2&&(ye(n.loaded()?-1:0),A(),ie(`nzStringTemplateOutlet`,n.title()),A(3),ye(n.hasLegend()?4:-1))},dependencies:[Z,er,We$1,sn$1],encapsulation:2})};var ba=[nt];var Qt=class o{static ɵfac=function(t){return new(t||o)};static ɵmod=ee({type:o});static ɵinj=X({imports:[Rb,cn$1,Jr,ee$1,ba]})};var Yt=class o{constructor(e){this.msg=e;this.refresh()}msg;radarData=G([]);refresh(){let e=(p=1,T=10)=>Math.floor(Math.random()*(T-p+1)+p),t=[`个人`,`团队`,`部门`].map(p=>({name:p,ref:e(),koubei:e(),output:e(),contribute:e(),hot:e()})),n={ref:`引用`,koubei:`口碑`,output:`产量`,contribute:`贡献`,hot:`热度`};Math.random()>.5&&delete n.hot;let m=[];t.forEach(p=>{Object.keys(p).forEach(T=>{T!==`name`&&m.push({name:p.name,label:n[T],value:p[T]})})}),this.radarData.set(m)}handleClick(e){this.msg.info(`${e.item.label} - ${e.item.name} - ${e.item.value}`)}static ɵfac=function(t){return new(t||o)(Mt$1(lu))};static ɵcmp=Se({type:o,selectors:[[`chart-radar-basic`]],decls:3,vars:2,consts:[[`nz-button`,``,`nzType`,`primary`,3,`click`],[`height`,`286`,3,`clickItem`,`hasLegend`,`data`]],template:function(t,n){t&1&&(oe(0,`button`,0),je(`click`,function(){return n.refresh()}),an$1(1,`Refresh`),he$1(),oe(2,`g2-radar`,1),je(`clickItem`,function(p){return n.handleClick(p)}),he$1()),t&2&&(A(2),ie(`hasLegend`,!0)(`data`,n.radarData()))},dependencies:[v5,a3,f5,m5,Qt,nt],encapsulation:2})};var Zt=class o{item={name:`radar`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{title:`g2-radar`,subtitle:`Radar`,cols:1,module:`import { G2RadarModule } from '@delon/chart/radar';`,description:`A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables rep...`,group:`G2`,order:0,path:`packages/chart/radar/index.en-US.md`,url:`/chart/radar/en`},text:`<p>A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point. The relative position and angle of the axes are usually uninformative.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="g2-radar"><a class="lake-link"><i data-anchor="g2-radar"></i></a>g2-radar</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[repaint]</code></td>
<td>Whether to repaint when the data changes again</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[delay]</code></td>
<td>Delayed rendering, unit: ms</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[title]</code></td>
<td>Title of the chart</td>
<td><code>string,TemplateRef&lt;void&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[height]</code></td>
<td>Height of the chart</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[hasLegend]</code></td>
<td>Whether to display the legend</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[padding]</code></td>
<td>Padding of the chart</td>
<td><code>array</code></td>
<td><code>[44, 30, 16, 30]</code></td>
</tr>
<tr>
<td><code>[tickCount]</code></td>
<td>Number of y-axis ticks</td>
<td><code>number</code></td>
<td><code>4</code></td>
</tr>
<tr>
<td><code>[colors]</code></td>
<td>Color list</td>
<td><code>string[]</code></td>
<td><code>[&#39;#1890FF&#39;, &#39;#FACC14&#39;, &#39;#2FC25B&#39;, &#39;#8543E0&#39;, &#39;#F04864&#39;, &#39;#13C2C2&#39;, &#39;#fa8c16&#39;, &#39;#a0d911&#39;]</code></td>
</tr>
<tr>
<td><code>[data]</code></td>
<td>Data</td>
<td><code>G2RadarData[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td>Custom chart theme</td>
<td><code>string | LooseObject</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(clickItem)</code></td>
<td>Callback when clicking an item</td>
<td><code>output&lt;G2RadarClickItem&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>Callback when G2 is initialized</td>
<td><code>output&lt;Chart&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(error)</code></td>
<td>Callback when rendering fails (G2 not loaded or render throws); <code>(ready)</code> will not fire</td>
<td><code>output&lt;unknown&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="g2radardata"><a class="lake-link"><i data-anchor="g2radardata"></i></a>G2RadarData</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[name]</code></td>
<td>Name</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[label]</code></td>
<td>Label</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[value]</code></td>
<td>Value</td>
<td><code>number</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-radar`,title:`g2-radar`},{id:`g2radardata`,title:`G2RadarData`}]}],raw:"---\ntitle: g2-radar\nsubtitle: Radar\ncols: 1\ntype: G2\nmodule: import { G2RadarModule } from '@delon/chart/radar';\n---\n\nA radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point. The relative position and angle of the axes are usually uninformative.\n\n## API\n\n### g2-radar\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[repaint]` | Whether to repaint when the data changes again | `boolean` | `true` |\n| `[delay]` | Delayed rendering, unit: ms | `number` | `0` |\n| `[title]` | Title of the chart | `string,TemplateRef<void>` | - |\n| `[height]` | Height of the chart | `number` | - |\n| `[hasLegend]` | Whether to display the legend | `boolean` | `true` |\n| `[padding]` | Padding of the chart | `array` | `[44, 30, 16, 30]` |\n| `[tickCount]` | Number of y-axis ticks | `number` | `4` |\n| `[colors]` | Color list | `string[]` | `['#1890FF', '#FACC14', '#2FC25B', '#8543E0', '#F04864', '#13C2C2', '#fa8c16', '#a0d911']` |\n| `[data]` | Data | `G2RadarData[]` | - |\n| `[theme]` | Custom chart theme | `string \\| LooseObject` | - |\n| `(clickItem)` | Callback when clicking an item | `output<G2RadarClickItem>` | - |\n| `(ready)` | Callback when G2 is initialized | `output<Chart>` | - |\n| `(error)` | Callback when rendering fails (G2 not loaded or render throws); `(ready)` will not fire | `output<unknown>` | - |\n\n### G2RadarData\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[name]` | Name | `string` | - |\n| `[label]` | Label | `string` | - |\n| `[value]` | Value | `number` | - |"},"zh-CN":{meta:{title:`g2-radar`,subtitle:`雷达图`,cols:1,module:`import { G2RadarModule } from '@delon/chart/radar';`,description:`雷达图是以相同点开始的轴上表示的三个或更多个定量变量的二维图形的形式显示多变量数据的图形方法。轴的相对位置和角度通常是不知情的。`,group:`G2`,order:0,path:`packages/chart/radar/index.zh-CN.md`,url:`/chart/radar/zh`},text:`<p>\u96F7\u8FBE\u56FE\u662F\u4EE5\u76F8\u540C\u70B9\u5F00\u59CB\u7684\u8F74\u4E0A\u8868\u793A\u7684\u4E09\u4E2A\u6216\u66F4\u591A\u4E2A\u5B9A\u91CF\u53D8\u91CF\u7684\u4E8C\u7EF4\u56FE\u5F62\u7684\u5F62\u5F0F\u663E\u793A\u591A\u53D8\u91CF\u6570\u636E\u7684\u56FE\u5F62\u65B9\u6CD5\u3002\u8F74\u7684\u76F8\u5BF9\u4F4D\u7F6E\u548C\u89D2\u5EA6\u901A\u5E38\u662F\u4E0D\u77E5\u60C5\u7684\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="g2-radar"><a class="lake-link"><i data-anchor="g2-radar"></i></a>g2-radar</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[repaint]</code></td>
<td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[delay]</code></td>
<td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[title]</code></td>
<td>\u56FE\u8868\u6807\u9898</td>
<td><code>string,TemplateRef&lt;void&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[height]</code></td>
<td>\u56FE\u8868\u9AD8\u5EA6</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[hasLegend]</code></td>
<td>\u662F\u5426\u663E\u793A legend</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[padding]</code></td>
<td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td>
<td><code>array</code></td>
<td><code>[44, 30, 16, 30]</code></td>
</tr>
<tr>
<td><code>[tickCount]</code></td>
<td>y \u8F74\u523B\u5EA6\u6570\u91CF</td>
<td><code>number</code></td>
<td><code>4</code></td>
</tr>
<tr>
<td><code>[colors]</code></td>
<td>\u989C\u8272\u5217\u8868</td>
<td><code>string[]</code></td>
<td><code>[&#39;#1890FF&#39;, &#39;#FACC14&#39;, &#39;#2FC25B&#39;, &#39;#8543E0&#39;, &#39;#F04864&#39;, &#39;#13C2C2&#39;, &#39;#fa8c16&#39;, &#39;#a0d911&#39;]</code></td>
</tr>
<tr>
<td><code>[data]</code></td>
<td>\u6570\u636E</td>
<td><code>G2RadarData[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td>
<td><code>string | LooseObject</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(clickItem)</code></td>
<td>\u70B9\u51FB\u9879\u56DE\u8C03</td>
<td><code>output&lt;G2RadarClickItem&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td>
<td><code>output&lt;Chart&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(error)</code></td>
<td>\u5F53\u6E32\u67D3\u5931\u8D25\u65F6\u8C03\u7528\uFF08G2 \u672A\u52A0\u8F7D\u6216\u6E32\u67D3\u629B\u9519\uFF09\uFF0C\u6B64\u65F6 <code>(ready)</code> \u4E0D\u4F1A\u89E6\u53D1</td>
<td><code>output&lt;unknown&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="g2radardata"><a class="lake-link"><i data-anchor="g2radardata"></i></a>G2RadarData</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[name]</code></td>
<td>\u540D\u79F0</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[label]</code></td>
<td>\u6807\u7B7E</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[value]</code></td>
<td>\u503C</td>
<td><code>number</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-radar`,title:`g2-radar`},{id:`g2radardata`,title:`G2RadarData`}]}],raw:"---\ntitle: g2-radar\nsubtitle: 雷达图\ncols: 1\ntype: G2\nmodule: import { G2RadarModule } from '@delon/chart/radar';\n---\n\n雷达图是以相同点开始的轴上表示的三个或更多个定量变量的二维图形的形式显示多变量数据的图形方法。轴的相对位置和角度通常是不知情的。\n\n## API\n\n### g2-radar\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |\n| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |\n| `[title]` | 图表标题 | `string,TemplateRef<void>` | - |\n| `[height]` | 图表高度 | `number` | - |\n| `[hasLegend]` | 是否显示 legend | `boolean` | `true` |\n| `[padding]` | 图表内部间距 | `array` | `[44, 30, 16, 30]` |\n| `[tickCount]` | y 轴刻度数量 | `number` | `4` |\n| `[colors]` | 颜色列表 | `string[]` | `['#1890FF', '#FACC14', '#2FC25B', '#8543E0', '#F04864', '#13C2C2', '#fa8c16', '#a0d911']` |\n| `[data]` | 数据 | `G2RadarData[]` | - |\n| `[theme]` | 定制图表主题 | `string \\| LooseObject` | - |\n| `(clickItem)` | 点击项回调 | `output<G2RadarClickItem>` | - |\n| `(ready)` | 当G2完成初始化后调用 | `output<Chart>` | - |\n| `(error)` | 当渲染失败时调用（G2 未加载或渲染抛错），此时 `(ready)` 不会触发 | `output<unknown>` | - |\n\n### G2RadarData\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[name]` | 名称 | `string` | - |\n| `[label]` | 标签 | `string` | - |\n| `[value]` | 值 | `number` | - |"}}};codes=[{id:`chart-radar-basic`,name:`basic`,title:{"zh-CN":`基础`,"en-US":`Basic`},code:`import { Component, signal } from '@angular/core';

import { G2RadarClickItem, G2RadarData, G2RadarModule } from '@delon/chart/radar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-radar-basic',
  template: \`
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-radar [hasLegend]="true" [data]="radarData()" height="286" (clickItem)="handleClick($event)" />
  \`,
  imports: [NzButtonModule, G2RadarModule]
})
export class ChartRadarBasic {
  readonly radarData = signal<G2RadarData[]>([]);

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
    this.radarData.set(res);
  }

  handleClick(data: G2RadarClickItem): void {
    this.msg.info(\`\${data.item.label} - \${data.item.name} - \${data.item.value}\`);
  }
}`,order:0,type:`demo`,summary:{"en-US":`<p>Basic usage.</p>
`,"zh-CN":`<p>\u57FA\u7840\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Basic usage.
`,"zh-CN":`\u57FA\u7840\u7528\u6CD5\u3002
`},path:`packages/chart/radar/demo/basic.md`}];static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-radar`]],hostAttrs:[1,`d-block`],decls:5,vars:5,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`24`],[3,`item`]],template:function(t,n){t&1&&(oe(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),pt(4,`chart-radar-basic`),he$1()()()()),t&2&&(ie(`codes`,n.codes)(`item`,n.item),A(),ie(`nzGutter`,16),A(2),ie(`item`,n.codes[0]),$t$1(`id`,n.codes[0].id))},dependencies:[ce$1,Yt,sn$1,We$1,X$1],encapsulation:2})};var lt=class o extends tt$1{plusColor=pe$1(`#40a9ff`);minusColor=pe$1(`#ff4d4f`);height=pe$1(60,{transform:Oo$1});barSize=pe$1(30,{transform:Oo$1});min=pe$1(0,{transform:Oo$1});max=pe$1(100,{transform:Oo$1});value=pe$1(0,{transform:Oo$1});line=pe$1(!1,{transform:H});format=pe$1();padding=pe$1(0);textStyle=pe$1({fontSize:12,color:`#595959`});buildSpec(){let{value:e,min:t,max:n,plusColor:m,minusColor:p,barSize:T,format:q,textStyle:B,line:F,theme:ie,padding:ge,height:fe}=this,re=[{type:`interval`,data:[{value:e()}],encode:{x:{type:`constant`,value:`1`},y:`value`,color:{type:`transform`,value:ye=>ye.value>0?m():p()}},style:{minWidth:T(),maxWidth:T()},labels:[{text:`value`,formatter:q(),style:g({},B())}],scale:{y:{domain:[t(),n()]},color:{type:`identity`}},legend:!1,axis:!1,tooltip:!1}];return F()&&re.push({type:`lineY`,data:[(t()+n())/2],style:{stroke:`#e8e8e8`,lineWidth:1}}),W(g({},$t$2({theme:ie(),padding:ge(),height:fe()})),{coordinate:{transform:[{type:`transpose`}]},children:re})}dataOf(){return[{value:this.value()}]}isDataOnly(e){return this.line()?!1:e.length===1&&Object.is(e[0],this.value)}static ɵfac=(()=>{let e;return function(n){return(e||(e=Gn(o)))(n||o)}})();static ɵcmp=Se({type:o,selectors:[[`g2-single-bar`]],hostVars:2,hostBindings:function(t,n){t&2&&It$1(`height`,n.height(),`px`)},inputs:{plusColor:[1,`plusColor`],minusColor:[1,`minusColor`],height:[1,`height`],barSize:[1,`barSize`],min:[1,`min`],max:[1,`max`],value:[1,`value`],line:[1,`line`],format:[1,`format`],padding:[1,`padding`],textStyle:[1,`textStyle`]},exportAs:[`g2SingleBar`],features:[tn$1],decls:0,vars:0,template:function(t,n){},encapsulation:2})};var Xt=class o{static ɵfac=function(t){return new(t||o)};static ɵmod=ee({type:o});static ɵinj=X({imports:[Rb]})};function Ca(o,e){if(o&1&&(oe(0,`tr`)(1,`td`),an$1(2),he$1(),oe(3,`td`),pt(4,`g2-single-bar`,3),he$1(),oe(5,`td`),pt(6,`g2-single-bar`,4),he$1()()),o&2){let t=e.$implicit,n=e.$index;A(2),vr(n+1),A(2),ie(`value`,t.value),A(2),ie(`value`,t.other)}}var Kt=class o{list=G(new Array(5).fill({}).map(()=>({id:Math.floor(Math.random()*1e4),value:Math.floor(Math.random()*100),other:Math.floor(Math.random()*100)>50?Math.floor(Math.random()*100):-Math.floor(Math.random()*100)})));refresh(){this.list.update(e=>e.map(t=>W(g({},t),{value:Math.floor(Math.random()*100),other:Math.floor(Math.random()*100)>50?Math.floor(Math.random()*100):-Math.floor(Math.random()*100)})))}static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-single-bar-basic`]],decls:14,vars:2,consts:[[`nz-button`,``,`nzType`,`primary`,3,`click`],[3,`nzData`,`nzShowPagination`],[`nzWidth`,`350px`],[`height`,`24`,3,`value`],[`height`,`60`,`min`,`-100`,`line`,``,3,`value`]],template:function(t,n){t&1&&(oe(0,`button`,0),je(`click`,function(){return n.refresh()}),an$1(1,`Refresh`),he$1(),oe(2,`nz-table`,1)(3,`thead`)(4,`tr`)(5,`th`),an$1(6,`序号`),he$1(),oe(7,`th`,2),an$1(8,`服务调用次数`),he$1(),oe(9,`th`,2),an$1(10,`数据有负值`),he$1()()(),oe(11,`tbody`),Yl(12,Ca,7,3,`tr`,null,EP),he$1()()),t&2&&(A(2),ie(`nzData`,n.list())(`nzShowPagination`,!1),A(10),Ul(n.list()))},dependencies:[v5,a3,f5,m5,ua$1,Zn,pa$1,Hn$1,ca$1,Pn,Un,Xt,lt],styles:[`[_nghost-%COMP%]     .ant-table tbody>tr>td{padding:0}`]})};var en=class o{item={name:`single-bar`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{title:`g2-single-bar`,subtitle:`Single Bar`,cols:1,module:`import { G2SingleBarModule } from '@delon/chart/single-bar';`,description:`A single bar chart is better for displaying simple interval data in a list; its concise presentation greatly reduces the visual pressure of large amou...`,group:`G2`,order:0,path:`packages/chart/single-bar/index.en-US.md`,url:`/chart/single-bar/en`},text:`<p>A single bar chart is better for displaying simple interval data in a list; its concise presentation greatly reduces the visual pressure of large amounts of data.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="g2-single-bar"><a class="lake-link"><i data-anchor="g2-single-bar"></i></a>g2-single-bar</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[repaint]</code></td>
<td>Whether to repaint when the data changes again</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[delay]</code></td>
<td>Delayed rendering, unit: ms</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[plusColor]</code></td>
<td>Color of the chart</td>
<td><code>string</code></td>
<td><code>#40a9ff</code></td>
</tr>
<tr>
<td><code>[minusColor]</code></td>
<td>Color of the chart for negative values</td>
<td><code>string</code></td>
<td><code>#ff4d4f</code></td>
</tr>
<tr>
<td><code>[height]</code></td>
<td>Height of the chart</td>
<td><code>number</code></td>
<td><code>60</code></td>
</tr>
<tr>
<td><code>[barSize]</code></td>
<td>Height of the bar</td>
<td><code>number</code></td>
<td><code>30</code></td>
</tr>
<tr>
<td><code>[min]</code></td>
<td>Minimum value</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[max]</code></td>
<td>Maximum value; a value less than 0 means negative values are displayed</td>
<td><code>number</code></td>
<td><code>100</code></td>
</tr>
<tr>
<td><code>[padding]</code></td>
<td>Padding of the chart</td>
<td><code>any</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[line]</code></td>
<td>Whether to display the middle line (the horizontal line at <code>(min + max) / 2</code>)</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[value]</code></td>
<td>Value</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[format]</code></td>
<td>Formatter of the displayed value</td>
<td><code>(value: number) =&gt; string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[textStyle]</code></td>
<td>Style of the displayed value</td>
<td><code>any</code></td>
<td><code>&#123; fontSize: 12, color: &#39;#595959&#39; &#125;</code></td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td>Custom chart theme</td>
<td><code>string | LooseObject</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>Callback when G2 is initialized</td>
<td><code>output&lt;Chart&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(error)</code></td>
<td>Callback when rendering fails (G2 not loaded or render throws); <code>(ready)</code> will not fire</td>
<td><code>output&lt;unknown&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-single-bar`,title:`g2-single-bar`}]}],raw:"---\ntitle: g2-single-bar\nsubtitle: Single Bar\ncols: 1\ntype: G2\nmodule: import { G2SingleBarModule } from '@delon/chart/single-bar';\n---\n\nA single bar chart is better for displaying simple interval data in a list; its concise presentation greatly reduces the visual pressure of large amounts of data.\n\n## API\n\n### g2-single-bar\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[repaint]` | Whether to repaint when the data changes again | `boolean` | `true` |\n| `[delay]` | Delayed rendering, unit: ms | `number` | `0` |\n| `[plusColor]` | Color of the chart | `string` | `#40a9ff` |\n| `[minusColor]` | Color of the chart for negative values | `string` | `#ff4d4f` |\n| `[height]` | Height of the chart | `number` | `60` |\n| `[barSize]` | Height of the bar | `number` | `30` |\n| `[min]` | Minimum value | `number` | `0` |\n| `[max]` | Maximum value; a value less than 0 means negative values are displayed | `number` | `100` |\n| `[padding]` | Padding of the chart | `any` | `0` |\n| `[line]` | Whether to display the middle line (the horizontal line at `(min + max) / 2`) | `boolean` | `false` |\n| `[value]` | Value | `number` | `0` |\n| `[format]` | Formatter of the displayed value | `(value: number) => string` | - |\n| `[textStyle]` | Style of the displayed value | `any` | `{ fontSize: 12, color: '#595959' }` |\n| `[theme]` | Custom chart theme | `string \\| LooseObject` | - |\n| `(ready)` | Callback when G2 is initialized | `output<Chart>` | - |\n| `(error)` | Callback when rendering fails (G2 not loaded or render throws); `(ready)` will not fire | `output<unknown>` | - |"},"zh-CN":{meta:{title:`g2-single-bar`,subtitle:`单一柱状图`,cols:1,module:`import { G2SingleBarModule } from '@delon/chart/single-bar';`,description:`单一柱状图更适合在列表中展示简单的区间数据，简洁的表现方式可以很好的减少大数据量的视觉展现压力。`,group:`G2`,order:0,path:`packages/chart/single-bar/index.zh-CN.md`,url:`/chart/single-bar/zh`},text:`<p>\u5355\u4E00\u67F1\u72B6\u56FE\u66F4\u9002\u5408\u5728\u5217\u8868\u4E2D\u5C55\u793A\u7B80\u5355\u7684\u533A\u95F4\u6570\u636E\uFF0C\u7B80\u6D01\u7684\u8868\u73B0\u65B9\u5F0F\u53EF\u4EE5\u5F88\u597D\u7684\u51CF\u5C11\u5927\u6570\u636E\u91CF\u7684\u89C6\u89C9\u5C55\u73B0\u538B\u529B\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="g2-single-bar"><a class="lake-link"><i data-anchor="g2-single-bar"></i></a>g2-single-bar</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[repaint]</code></td>
<td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[delay]</code></td>
<td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[plusColor]</code></td>
<td>\u56FE\u8868\u989C\u8272</td>
<td><code>string</code></td>
<td><code>#40a9ff</code></td>
</tr>
<tr>
<td><code>[minusColor]</code></td>
<td>\u8D1F\u503C\u56FE\u8868\u989C\u8272</td>
<td><code>string</code></td>
<td><code>#ff4d4f</code></td>
</tr>
<tr>
<td><code>[height]</code></td>
<td>\u56FE\u8868\u9AD8\u5EA6</td>
<td><code>number</code></td>
<td><code>60</code></td>
</tr>
<tr>
<td><code>[barSize]</code></td>
<td>\u67F1\u72B6\u9AD8\u5EA6</td>
<td><code>number</code></td>
<td><code>30</code></td>
</tr>
<tr>
<td><code>[min]</code></td>
<td>\u6700\u5C0F\u503C</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[max]</code></td>
<td>\u6700\u5927\u503C\uFF0C\u82E5\u5C0F\u4E8E0\u8868\u793A\u663E\u793A\u8D1F\u503C</td>
<td><code>number</code></td>
<td><code>100</code></td>
</tr>
<tr>
<td><code>[padding]</code></td>
<td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td>
<td><code>any</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[line]</code></td>
<td>\u662F\u5426\u663E\u793A\u4E2D\u4F4D\u7EBF\uFF08<code>(min + max) / 2</code> \u5904\u7684\u6A2A\u7EBF\uFF09</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[value]</code></td>
<td>\u503C</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[format]</code></td>
<td>\u663E\u793A\u503C\u683C\u5F0F</td>
<td><code>(value: number) =&gt; string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[textStyle]</code></td>
<td>\u663E\u793A\u503C\u6837\u5F0F</td>
<td><code>any</code></td>
<td><code>&#123; fontSize: 12, color: &#39;#595959&#39; &#125;</code></td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td>
<td><code>string | LooseObject</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td>
<td><code>output&lt;Chart&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(error)</code></td>
<td>\u5F53\u6E32\u67D3\u5931\u8D25\u65F6\u8C03\u7528\uFF08G2 \u672A\u52A0\u8F7D\u6216\u6E32\u67D3\u629B\u9519\uFF09\uFF0C\u6B64\u65F6 <code>(ready)</code> \u4E0D\u4F1A\u89E6\u53D1</td>
<td><code>output&lt;unknown&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-single-bar`,title:`g2-single-bar`}]}],raw:"---\ntitle: g2-single-bar\nsubtitle: 单一柱状图\ncols: 1\ntype: G2\nmodule: import { G2SingleBarModule } from '@delon/chart/single-bar';\n---\n\n单一柱状图更适合在列表中展示简单的区间数据，简洁的表现方式可以很好的减少大数据量的视觉展现压力。\n\n## API\n\n### g2-single-bar\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |\n| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |\n| `[plusColor]` | 图表颜色 | `string` | `#40a9ff` |\n| `[minusColor]` | 负值图表颜色 | `string` | `#ff4d4f` |\n| `[height]` | 图表高度 | `number` | `60` |\n| `[barSize]` | 柱状高度 | `number` | `30` |\n| `[min]` | 最小值 | `number` | `0` |\n| `[max]` | 最大值，若小于0表示显示负值 | `number` | `100` |\n| `[padding]` | 图表内部间距 | `any` | `0` |\n| `[line]` | 是否显示中位线（`(min + max) / 2` 处的横线） | `boolean` | `false` |\n| `[value]` | 值 | `number` | `0` |\n| `[format]` | 显示值格式 | `(value: number) => string` | - |\n| `[textStyle]` | 显示值样式 | `any` | `{ fontSize: 12, color: '#595959' }` |\n| `[theme]` | 定制图表主题 | `string \\| LooseObject` | - |\n| `(ready)` | 当G2完成初始化后调用 | `output<Chart>` | - |\n| `(error)` | 当渲染失败时调用（G2 未加载或渲染抛错），此时 `(ready)` 不会触发 | `output<unknown>` | - |"}}};codes=[{id:`chart-single-bar-basic`,name:`basic`,title:{"zh-CN":`基础`,"en-US":`Basic`},code:`import { Component, ViewEncapsulation, signal } from '@angular/core';

import { G2SingleBarModule } from '@delon/chart/single-bar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'chart-single-bar-basic',
  template: \`
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <nz-table [nzData]="list()" [nzShowPagination]="false">
      <thead>
        <tr>
          <th>\u5E8F\u53F7</th>
          <th nzWidth="350px">\u670D\u52A1\u8C03\u7528\u6B21\u6570</th>
          <th nzWidth="350px">\u6570\u636E\u6709\u8D1F\u503C</th>
        </tr>
      </thead>
      <tbody>
        @for (i of list(); track $index) {
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
export class ChartSingleBarBasic {
  readonly list = signal<Array<{ id: number; value: number; other: number }>>(
    new Array(5).fill({}).map(() => ({
      id: Math.floor(Math.random() * 10000),
      value: Math.floor(Math.random() * 100),
      other:
        Math.floor(Math.random() * 100) > 50 ? Math.floor(Math.random() * 100) : -Math.floor(Math.random() * 100)
    }))
  );

  refresh(): void {
    this.list.update(list =>
      list.map(v => ({
        ...v,
        value: Math.floor(Math.random() * 100),
        other:
          Math.floor(Math.random() * 100) > 50 ? Math.floor(Math.random() * 100) : -Math.floor(Math.random() * 100)
      }))
    );
  }
}`,order:0,type:`demo`,summary:{"en-US":`<p>Basic usage.</p>
`,"zh-CN":`<p>\u57FA\u7840\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Basic usage.
`,"zh-CN":`\u57FA\u7840\u7528\u6CD5\u3002
`},path:`packages/chart/single-bar/demo/basic.md`}];static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-single-bar`]],hostAttrs:[1,`d-block`],decls:5,vars:5,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`24`],[3,`item`]],template:function(t,n){t&1&&(oe(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),pt(4,`chart-single-bar-basic`),he$1()()()()),t&2&&(ie(`codes`,n.codes)(`item`,n.item),A(),ie(`nzGutter`,16),A(2),ie(`item`,n.codes[0]),$t$1(`id`,n.codes[0].id))},dependencies:[ce$1,Kt,sn$1,We$1,X$1],encapsulation:2})};function Da(o,e){o&1&&(oe(0,`div`,0),pt(1,`nz-skeleton`),he$1())}var ot=class o extends tt$1{width=pe$1(0,{transform:Oo$1});height=pe$1(200,{transform:Oo$1});padding=pe$1(0);data=pe$1([]);clickItem=Zl();chartOptions(){let e=this.el.nativeElement;return{container:e,autoFit:!1,width:this.width()===0?e.clientWidth:this.width(),height:this.height()===0?e.clientHeight:this.height()}}buildSpec(){let{data:e,padding:t,theme:n}=this;return W(g({},$t$2({theme:n(),padding:t()})),{type:`wordCloud`,data:e(),encode:{text:`name`,value:`value`,color:`name`},layout:{font:`Verdana`,fontSize:[8,32],padding:0,timeInterval:5e3},legend:!1,axis:!1,tooltip:{title:!1},interaction:{elementHighlight:!0}})}afterCreate(e){e.on(`element:click`,t=>{this.clickItem.emit({item:t.data?.data,ev:t})}),this.installResizeEvent()}installResizeEvent(){Qc(window,`resize`).pipe(be(this.destroyRef),ne(()=>!!this._chart),Hn(200)).subscribe(()=>{this.repaintSpec()})}static ɵfac=(()=>{let e;return function(n){return(e||(e=Gn(o)))(n||o)}})();static ɵcmp=Se({type:o,selectors:[[`g2-tag-cloud`]],hostVars:2,hostBindings:function(t,n){t&2&&It$1(`position`,`relative`)},inputs:{width:[1,`width`],height:[1,`height`],padding:[1,`padding`],data:[1,`data`]},outputs:{clickItem:`clickItem`},exportAs:[`g2TagCloud`],features:[tn$1],decls:1,vars:1,consts:[[2,`position`,`absolute`,`inset`,`0`,`z-index`,`1`]],template:function(t,n){t&1&&ve(0,Da,2,0,`div`,0),t&2&&ye(n.loaded()?-1:0)},dependencies:[Z],encapsulation:2})};var xa=[ot];var tn=class o{static ɵfac=function(t){return new(t||o)};static ɵmod=ee({type:o});static ɵinj=X({imports:[Rb,ee$1,xa]})};var nn=class o{constructor(e){this.msg=e;this.refresh()}msg;tags=G([]);refresh(){let e=(t=1,n=10)=>Math.floor(Math.random()*(n-t+1)+t);this.tags.set([{value:e(),name:`NG-ALAIN`},{value:e(),name:`AntV`},{value:e(),name:`F2`},{value:e(),name:`G2`},{value:e(),name:`G6`},{value:e(),name:`DataSet`},{value:e(),name:`墨者学院`},{value:e(),name:`Analysis`},{value:e(),name:`Data Mining`},{value:e(),name:`Data Vis`},{value:e(),name:`Design`},{value:e(),name:`Grammar`},{value:e(),name:`Graphics`},{value:e(),name:`Graph`},{value:e(),name:`Hierarchy`},{value:e(),name:`Labeling`},{value:e(),name:`Layout`},{value:e(),name:`Quantitative`},{value:e(),name:`Relation`},{value:e(),name:`Statistics`},{value:e(),name:`可视化`},{value:e(),name:`数据`},{value:e(),name:`数据可视化`},{value:e(),name:`Arc Diagram`},{value:e(),name:`Bar Chart`},{value:e(),name:`Canvas`},{value:e(),name:`Chart`},{value:e(),name:`DAG`},{value:e(),name:`DG`},{value:e(),name:`Facet`},{value:e(),name:`Geo`},{value:e(),name:`Line`},{value:e(),name:`MindMap`},{value:e(),name:`Pie`},{value:e(),name:`Pizza Chart`},{value:e(),name:`Punch Card`},{value:e(),name:`SVG`},{value:e(),name:`Sunburst`},{value:e(),name:`Tree`},{value:e(),name:`UML`},{value:e(),name:`Chart`},{value:e(),name:`View`},{value:e(),name:`Geom`},{value:e(),name:`Shape`},{value:e(),name:`Scale`},{value:e(),name:`Animate`},{value:e(),name:`Global`},{value:e(),name:`Slider`},{value:e(),name:`Connector`},{value:e(),name:`Transform`},{value:e(),name:`Util`},{value:e(),name:`DomUtil`},{value:e(),name:`MatrixUtil`},{value:e(),name:`PathUtil`},{value:e(),name:`G`},{value:e(),name:`2D`},{value:e(),name:`3D`},{value:e(),name:`Line`},{value:e(),name:`Area`},{value:e(),name:`Interval`},{value:e(),name:`Schema`},{value:e(),name:`Edge`},{value:e(),name:`Polygon`},{value:e(),name:`Heatmap`},{value:e(),name:`Render`},{value:e(),name:`Tooltip`},{value:e(),name:`Axis`},{value:e(),name:`Guide`},{value:e(),name:`Coord`},{value:e(),name:`Legend`},{value:e(),name:`Path`},{value:e(),name:`Helix`},{value:e(),name:`Theta`},{value:e(),name:`Rect`},{value:e(),name:`Polar`},{value:e(),name:`Dsv`},{value:e(),name:`Csv`},{value:e(),name:`Tsv`},{value:e(),name:`GeoJSON`},{value:e(),name:`TopoJSON`},{value:e(),name:`Filter`},{value:e(),name:`Map`},{value:e(),name:`Pick`},{value:e(),name:`Rename`},{value:e(),name:`Filter`},{value:e(),name:`Map`},{value:e(),name:`Pick`},{value:e(),name:`Rename`},{value:e(),name:`Reverse`},{value:e(),name:`sort`},{value:e(),name:`Subset`},{value:e(),name:`Partition`},{value:e(),name:`Imputation`},{value:e(),name:`Fold`},{value:e(),name:`Aggregate`},{value:e(),name:`Proportion`},{value:e(),name:`Histogram`},{value:e(),name:`Quantile`},{value:e(),name:`Treemap`},{value:e(),name:`Hexagon`},{value:e(),name:`Binning`},{value:e(),name:`kernel`},{value:e(),name:`Regression`},{value:e(),name:`Density`},{value:e(),name:`Sankey`},{value:e(),name:`Voronoi`},{value:e(),name:`Projection`},{value:e(),name:`Centroid`},{value:e(),name:`H5`},{value:e(),name:`Mobile`},{value:e(),name:`K线图`},{value:e(),name:`关系图`},{value:e(),name:`烛形图`},{value:e(),name:`股票图`},{value:e(),name:`直方图`},{value:e(),name:`金字塔图`},{value:e(),name:`分面`},{value:e(),name:`南丁格尔玫瑰图`},{value:e(),name:`饼图`},{value:e(),name:`线图`},{value:e(),name:`点图`},{value:e(),name:`散点图`},{value:e(),name:`子弹图`},{value:e(),name:`柱状图`},{value:e(),name:`仪表盘`},{value:e(),name:`气泡图`},{value:e(),name:`漏斗图`},{value:e(),name:`热力图`},{value:e(),name:`玉玦图`},{value:e(),name:`直方图`},{value:e(),name:`矩形树图`},{value:e(),name:`箱形图`},{value:e(),name:`色块图`},{value:e(),name:`螺旋图`},{value:e(),name:`词云`},{value:e(),name:`词云图`},{value:e(),name:`雷达图`},{value:e(),name:`面积图`},{value:e(),name:`马赛克图`},{value:e(),name:`盒须图`},{value:e(),name:`坐标轴`},{value:e(),name:``},{value:e(),name:`Jacques Bertin`},{value:e(),name:`Leland Wilkinson`},{value:e(),name:`William Playfair`},{value:e(),name:`关联`},{value:e(),name:`分布`},{value:e(),name:`区间`},{value:e(),name:`占比`},{value:e(),name:`地图`},{value:e(),name:`时间`},{value:e(),name:`比较`},{value:e(),name:`流程`},{value:e(),name:`趋势`},{value:e(),name:`亦叶`},{value:e(),name:`再飞`},{value:e(),name:`完白`},{value:e(),name:`巴思`},{value:e(),name:`张初尘`},{value:e(),name:`御术`},{value:e(),name:`有田`},{value:e(),name:`沉鱼`},{value:e(),name:`玉伯`},{value:e(),name:`画康`},{value:e(),name:`祯逸`},{value:e(),name:`绝云`},{value:e(),name:`罗宪`},{value:e(),name:`萧庆`},{value:e(),name:`董珊珊`},{value:e(),name:`陆沉`},{value:e(),name:`顾倾`},{value:e(),name:`Domo`},{value:e(),name:`GPL`},{value:e(),name:`PAI`},{value:e(),name:`SPSS`},{value:e(),name:`SYSTAT`},{value:e(),name:`Tableau`},{value:e(),name:`D3`},{value:e(),name:`Vega`},{value:e(),name:`统计图表`}])}handleClick(e){this.msg.info(`${e.item.name} - ${e.item.value}`)}static ɵfac=function(t){return new(t||o)(Mt$1(lu))};static ɵcmp=Se({type:o,selectors:[[`chart-tag-cloud-basic`]],decls:3,vars:1,consts:[[`nz-button`,``,`nzType`,`primary`,3,`click`],[`height`,`400`,3,`clickItem`,`data`]],template:function(t,n){t&1&&(oe(0,`button`,0),je(`click`,function(){return n.refresh()}),an$1(1,`Refresh`),he$1(),oe(2,`g2-tag-cloud`,1),je(`clickItem`,function(p){return n.handleClick(p)}),he$1()),t&2&&(A(2),ie(`data`,n.tags()))},dependencies:[v5,a3,f5,m5,tn,ot],encapsulation:2})};var on=class o{item={name:`tag-cloud`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{title:`g2-tag-cloud`,subtitle:`Tag Cloud`,cols:1,module:`import { G2TagCloudModule } from '@delon/chart/tag-cloud';`,description:`A tag cloud is a way to display a set of related tags and their corresponding weights. A typical tag cloud contains 30 to 150 tags, and the weight aff...`,group:`G2`,order:0,path:`packages/chart/tag-cloud/index.en-US.md`,url:`/chart/tag-cloud/en`},text:`<p>A tag cloud is a way to display a set of related tags and their corresponding weights. A typical tag cloud contains 30 to 150 tags, and the weight affects the font size or other visual effects.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="g2-tag-cloud"><a class="lake-link"><i data-anchor="g2-tag-cloud"></i></a>g2-tag-cloud</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[repaint]</code></td>
<td>Whether to repaint when the data changes again</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[delay]</code></td>
<td>Delayed rendering, unit: ms</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[height]</code></td>
<td>Height</td>
<td><code>number</code></td>
<td><code>200</code></td>
</tr>
<tr>
<td><code>[width]</code></td>
<td>Width, automatically detected from the host element if not specified</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[padding]</code></td>
<td>Padding of the chart</td>
<td><code>number | number[] | &#39;auto&#39;</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[data]</code></td>
<td>Data</td>
<td><code>G2TagCloudData[]</code></td>
<td><code>[]</code></td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td>Custom chart theme</td>
<td><code>string | LooseObject</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(clickItem)</code></td>
<td>Callback when clicking an item</td>
<td><code>output&lt;G2TagCloudClickItem&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>Callback when G2 is initialized</td>
<td><code>output&lt;Chart&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(error)</code></td>
<td>Callback when rendering fails (G2 not loaded or render throws); <code>(ready)</code> will not fire</td>
<td><code>output&lt;unknown&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="g2tagclouddata"><a class="lake-link"><i data-anchor="g2tagclouddata"></i></a>G2TagCloudData</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[name]</code></td>
<td>Name</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[value]</code></td>
<td>Value</td>
<td><code>number</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-tag-cloud`,title:`g2-tag-cloud`},{id:`g2tagclouddata`,title:`G2TagCloudData`}]}],raw:"---\ntitle: g2-tag-cloud\nsubtitle: Tag Cloud\ncols: 1\ntype: G2\nmodule: import { G2TagCloudModule } from '@delon/chart/tag-cloud';\n---\n\nA tag cloud is a way to display a set of related tags and their corresponding weights. A typical tag cloud contains 30 to 150 tags, and the weight affects the font size or other visual effects.\n\n## API\n\n### g2-tag-cloud\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[repaint]` | Whether to repaint when the data changes again | `boolean` | `true` |\n| `[delay]` | Delayed rendering, unit: ms | `number` | `0` |\n| `[height]` | Height | `number` | `200` |\n| `[width]` | Width, automatically detected from the host element if not specified | `number` | `0` |\n| `[padding]` | Padding of the chart | `number \\| number[] \\| 'auto'` | `0` |\n| `[data]` | Data | `G2TagCloudData[]` | `[]` |\n| `[theme]` | Custom chart theme | `string \\| LooseObject` | - |\n| `(clickItem)` | Callback when clicking an item | `output<G2TagCloudClickItem>` | - |\n| `(ready)` | Callback when G2 is initialized | `output<Chart>` | - |\n| `(error)` | Callback when rendering fails (G2 not loaded or render throws); `(ready)` will not fire | `output<unknown>` | - |\n\n### G2TagCloudData\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[name]` | Name | `string` | - |\n| `[value]` | Value | `number` | - |"},"zh-CN":{meta:{title:`g2-tag-cloud`,subtitle:`标签云`,cols:1,module:`import { G2TagCloudModule } from '@delon/chart/tag-cloud';`,description:`标签云是一套相关的标签以及与此相应的权重展示方式，一般典型的标签云有 30 至 150 个标签，而权重影响使用的字体大小或其他视觉效果。`,group:`G2`,order:0,path:`packages/chart/tag-cloud/index.zh-CN.md`,url:`/chart/tag-cloud/zh`},text:`<p>\u6807\u7B7E\u4E91\u662F\u4E00\u5957\u76F8\u5173\u7684\u6807\u7B7E\u4EE5\u53CA\u4E0E\u6B64\u76F8\u5E94\u7684\u6743\u91CD\u5C55\u793A\u65B9\u5F0F\uFF0C\u4E00\u822C\u5178\u578B\u7684\u6807\u7B7E\u4E91\u6709 30 \u81F3 150 \u4E2A\u6807\u7B7E\uFF0C\u800C\u6743\u91CD\u5F71\u54CD\u4F7F\u7528\u7684\u5B57\u4F53\u5927\u5C0F\u6216\u5176\u4ED6\u89C6\u89C9\u6548\u679C\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="g2-tag-cloud"><a class="lake-link"><i data-anchor="g2-tag-cloud"></i></a>g2-tag-cloud</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[repaint]</code></td>
<td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[delay]</code></td>
<td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[height]</code></td>
<td>\u9AD8\u5EA6\u503C</td>
<td><code>number</code></td>
<td><code>200</code></td>
</tr>
<tr>
<td><code>[width]</code></td>
<td>\u5BBD\u5EA6\u503C\uFF0C\u82E5\u4E0D\u6307\u5B9A\u81EA\u52A8\u6309\u5BBF\u4E3B\u5143\u7D20\u7684\u5BBD\u5EA6</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[padding]</code></td>
<td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td>
<td><code>number | number[] | &#39;auto&#39;</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[data]</code></td>
<td>\u6570\u636E</td>
<td><code>G2TagCloudData[]</code></td>
<td><code>[]</code></td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td>
<td><code>string | LooseObject</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(clickItem)</code></td>
<td>\u70B9\u51FB\u9879\u56DE\u8C03</td>
<td><code>output&lt;G2TagCloudClickItem&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td>
<td><code>output&lt;Chart&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(error)</code></td>
<td>\u5F53\u6E32\u67D3\u5931\u8D25\u65F6\u8C03\u7528\uFF08G2 \u672A\u52A0\u8F7D\u6216\u6E32\u67D3\u629B\u9519\uFF09\uFF0C\u6B64\u65F6 <code>(ready)</code> \u4E0D\u4F1A\u89E6\u53D1</td>
<td><code>output&lt;unknown&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="g2tagclouddata"><a class="lake-link"><i data-anchor="g2tagclouddata"></i></a>G2TagCloudData</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[name]</code></td>
<td>\u540D\u79F0</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[value]</code></td>
<td>\u503C</td>
<td><code>number</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-tag-cloud`,title:`g2-tag-cloud`},{id:`g2tagclouddata`,title:`G2TagCloudData`}]}],raw:"---\ntitle: g2-tag-cloud\nsubtitle: 标签云\ncols: 1\ntype: G2\nmodule: import { G2TagCloudModule } from '@delon/chart/tag-cloud';\n---\n\n标签云是一套相关的标签以及与此相应的权重展示方式，一般典型的标签云有 30 至 150 个标签，而权重影响使用的字体大小或其他视觉效果。\n\n## API\n\n### g2-tag-cloud\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |\n| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |\n| `[height]` | 高度值 | `number` | `200` |\n| `[width]` | 宽度值，若不指定自动按宿主元素的宽度 | `number` | `0` |\n| `[padding]` | 图表内部间距 | `number \\| number[] \\| 'auto'` | `0` |\n| `[data]` | 数据 | `G2TagCloudData[]` | `[]` |\n| `[theme]` | 定制图表主题 | `string \\| LooseObject` | - |\n| `(clickItem)` | 点击项回调 | `output<G2TagCloudClickItem>` | - |\n| `(ready)` | 当G2完成初始化后调用 | `output<Chart>` | - |\n| `(error)` | 当渲染失败时调用（G2 未加载或渲染抛错），此时 `(ready)` 不会触发 | `output<unknown>` | - |\n\n### G2TagCloudData\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[name]` | 名称 | `string` | - |\n| `[value]` | 值 | `number` | - |"}}};codes=[{id:`chart-tag-cloud-basic`,name:`basic`,title:{"zh-CN":`基础`,"en-US":`Basic`},code:`import { Component, signal } from '@angular/core';

import { G2TagCloudClickItem, G2TagCloudData, G2TagCloudModule } from '@delon/chart/tag-cloud';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-tag-cloud-basic',
  template: \`
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-tag-cloud [data]="tags()" height="400" (clickItem)="handleClick($event)" />
  \`,
  imports: [NzButtonModule, G2TagCloudModule]
})
export class ChartTagCloudBasic {
  readonly tags = signal<G2TagCloudData[]>([]);

  constructor(private msg: NzMessageService) {
    this.refresh();
  }

  refresh(): void {
    const rv = (min: number = 1, max: number = 10): number => Math.floor(Math.random() * (max - min + 1) + min);

    this.tags.set([
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
    ]);
  }

  handleClick(data: G2TagCloudClickItem): void {
    this.msg.info(\`\${data.item.name} - \${data.item.value}\`);
  }
}`,order:0,type:`demo`,summary:{"en-US":`<p>Basic usage.</p>
`,"zh-CN":`<p>\u57FA\u7840\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Basic usage.
`,"zh-CN":`\u57FA\u7840\u7528\u6CD5\u3002
`},path:`packages/chart/tag-cloud/demo/basic.md`}];static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-tag-cloud`]],hostAttrs:[1,`d-block`],decls:5,vars:5,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`24`],[3,`item`]],template:function(t,n){t&1&&(oe(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),pt(4,`chart-tag-cloud-basic`),he$1()()()()),t&2&&(ie(`codes`,n.codes)(`item`,n.item),A(),ie(`nzGutter`,16),A(2),ie(`item`,n.codes[0]),$t$1(`id`,n.codes[0].id))},dependencies:[ce$1,nn,sn$1,We$1,X$1],encapsulation:2})};function ka(o,e){if(o&1&&(nn$1(0),oe(1,`h4`),an$1(2),he$1(),rn$1()),o&2){let t=F();A(2),vr(t.title())}}function Ga(o,e){o&1&&(oe(0,`div`,2),pt(1,`nz-skeleton`),he$1())}var le=class o extends tt$1{title=pe$1();maxAxis=pe$1(2,{transform:Oo$1});data=pe$1([]);titleMap=pe$1();colorMap=pe$1({y1:`#5B8FF9`,y2:`#5AD8A6`,y3:`#5D7092`,y4:`#F6BD16`,y5:`#E86452`});mask=pe$1(`HH:mm`);maskSlider=pe$1(`HH:mm`);position=pe$1(`top`);height=pe$1(450,{transform:Oo$1});padding=pe$1([40,8,64,40]);borderWidth=pe$1(2,{transform:Oo$1});slider=pe$1(!0,{transform:H});clickItem=Zl();containerOf(){return this.node().nativeElement}foldedData(){let{data:e,maxAxis:t,titleMap:n}=this,m=[...Array(t())].map((B,F)=>`y${F+1}`),p=e().map(B=>{let F=mB(B.time);return W(g({},B),{time:F,_time:+F})}).sort((B,F)=>B._time-F._time),T=m.map(B=>n()?.[B]??B),q=[];return p.forEach(B=>{m.forEach((F,ie)=>{q.push({time:B.time,series:T[ie],value:B[F]})})}),{axes:m,seriesNames:T,list:p,folded:q}}buildSpec(){let{padding:e,slider:t,theme:n,mask:m,position:p,colorMap:T,borderWidth:q,height:B}=this,{axes:F,seriesNames:ie,list:ge,folded:fe}=this.foldedData(),re=ge.length===0?0:Math.max(...F.map(it=>Math.max(...ge.map(lo=>lo[it])))),ye={x:{type:`time`,mask:m(),range:[0,1]},y:{domain:[0,re||1]}},st={x:{title:!1,size:20},y:{title:!1}};ye.color={domain:ie,range:F.map(it=>T()[it])};let Oe=[{type:`line`,encode:{x:`time`,y:`value`,color:`series`},style:{lineWidth:q()}}],rt=jt$1(`default`,{crosshairs:!0});return W(g(g({},$t$2({theme:n(),padding:e(),height:B()})),rt),{data:fe,scale:ye,axis:st,legend:{color:{position:p()}},slider:t()?{x:{values:[0,1],labelFormatter:it=>Uo(it,this.maskSlider())}}:!1,interaction:W(g({},rt.interaction),{legendFilter:!0}),children:Oe})}dataOf(){return this.foldedData().folded}afterCreate(e){e.on(`plot:click`,t=>{let n=e.getDataByXY({x:t.x,y:t.y});this.clickItem.emit({item:n[0],ev:t})})}static ɵfac=(()=>{let e;return function(n){return(e||(e=Gn(o)))(n||o)}})();static ɵcmp=Se({type:o,selectors:[[`g2-timeline`]],hostVars:2,hostBindings:function(t,n){t&2&&It$1(`position`,`relative`)},inputs:{title:[1,`title`],maxAxis:[1,`maxAxis`],data:[1,`data`],titleMap:[1,`titleMap`],colorMap:[1,`colorMap`],mask:[1,`mask`],maskSlider:[1,`maskSlider`],position:[1,`position`],height:[1,`height`],padding:[1,`padding`],borderWidth:[1,`borderWidth`],slider:[1,`slider`]},outputs:{clickItem:`clickItem`},exportAs:[`g2Timeline`],features:[tn$1],decls:4,vars:2,consts:[[`container`,``],[4,`nzStringTemplateOutlet`],[2,`position`,`absolute`,`inset`,`0`,`z-index`,`1`]],template:function(t,n){t&1&&(qe(0,ka,3,1,`ng-container`,1),ve(1,Ga,2,0,`div`,2),pt(2,`div`,null,0)),t&2&&(ie(`nzStringTemplateOutlet`,n.title()),A(),ye(n.loaded()?-1:1))},dependencies:[er,Z],encapsulation:2})};var za=[le];var We=class o{static ɵfac=function(t){return new(t||o)};static ɵmod=ee({type:o});static ɵinj=X({imports:[Rb,Jr,ee$1,za]})};var Ta=()=>({y1:`客流量`,y2:`支付笔数`});var an=class o{msg=h(lu);chartData=G([]);ngOnInit(){let e=[];for(let t=0;t<20;t+=1)e.push({time:new Date().getTime()+18e5*t,y1:Math.floor(Math.random()*100)+1e3,y2:Math.floor(Math.random()*100)+10});this.chartData.set(e)}handleClick(e){this.msg.info(`\u5BA2\u6D41\u91CF: ${e.item.y1}, \u652F\u4ED8\u7B14\u6570: ${e.item.y2}`)}static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-timeline-basic`]],decls:1,vars:4,consts:[[3,`clickItem`,`data`,`titleMap`,`height`]],template:function(t,n){t&1&&(oe(0,`g2-timeline`,0),je(`clickItem`,function(p){return n.handleClick(p)}),he$1()),t&2&&ie(`data`,n.chartData())(`titleMap`,MO(3,Ta))(`height`,200)},dependencies:[We,le],encapsulation:2})};function wa(o,e){if(o&1){let t=on$1();oe(0,`button`,0),je(`click`,function(){let m=gt$1(t).$implicit,p=F();return vt$1(p.refresh(m))}),an$1(1),he$1()}if(o&2){let t=e.$implicit;A(),Io$1(``,t,` axis`)}}var rn=class o{chartData=G([]);titleMap=G({y1:`指标1`,y2:`指标2`});maxAxis=G(2);axisList=new Array(5).fill(0).map((e,t)=>t+1);constructor(){this.refresh()}genData(e){let t={y1:``};for(let m=1;m<=e;m++)t[`y${m}`]=`\u6307\u6807${m}`;let n=[];for(let m=0;m<20;m+=1){let p={time:new Date().getTime()+18e5*m,y1:0};for(let T=1;T<=e;T++)p[`y${T}`]=Math.floor(Math.random()*100)+500*T;n.push(p)}return{titleMap:t,data:n}}refresh(e){this.maxAxis.set(e??this.maxAxis());let{titleMap:t,data:n}=this.genData(this.maxAxis());this.chartData.set(n),this.titleMap.set(t)}static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-timeline-max-axis`]],decls:5,vars:4,consts:[[`nz-button`,``,`nzType`,`primary`,3,`click`],[`nz-button`,``,`nzType`,`primary`],[3,`maxAxis`,`data`,`titleMap`,`height`]],template:function(t,n){t&1&&(oe(0,`button`,0),je(`click`,function(){return n.refresh()}),an$1(1,`Refresh`),he$1(),Yl(2,wa,2,1,`button`,1,EP),pt(4,`g2-timeline`,2)),t&2&&(A(2),Ul(n.axisList),A(2),ie(`maxAxis`,n.maxAxis())(`data`,n.chartData())(`titleMap`,n.titleMap())(`height`,300))},dependencies:[We,le,v5,a3,f5,m5],encapsulation:2})};var Na=()=>({y1:`客流量`,y2:`支付笔数`});var dn=class o{msg=h(lu);chartData=G([]);ngOnInit(){let e=[];for(let t=0;t<20;t+=1)e.push({time:new Date().getTime()+864e5*t,y1:Math.floor(Math.random()*100)+1e3,y2:Math.floor(Math.random()*100)+10});this.chartData.set(e)}handleClick(e){this.msg.info(`\u5BA2\u6D41\u91CF: ${e.item.y1}, \u652F\u4ED8\u7B14\u6570: ${e.item.y2}`)}static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-timeline-mask`]],decls:1,vars:4,consts:[[`mask`,`MM月DD日`,`maskSlider`,`MM月dd日`,3,`clickItem`,`data`,`titleMap`,`height`]],template:function(t,n){t&1&&(oe(0,`g2-timeline`,0),je(`clickItem`,function(p){return n.handleClick(p)}),he$1()),t&2&&ie(`data`,n.chartData())(`titleMap`,MO(3,Na))(`height`,200)},dependencies:[We,le],encapsulation:2})};var cn=class o{item={name:`timeline`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{title:`g2-timeline`,subtitle:`Timeline`,cols:1,module:`import { G2TimelineModule } from '@delon/chart/timeline';`,description:`The timeline component renders a bar chart with a time axis, where x points to the time value. By default it displays up to two indicators at the same...`,group:`G2`,order:0,path:`packages/chart/timeline/index.en-US.md`,url:`/chart/timeline/en`},text:`<p>The <code>timeline</code> component renders a bar chart with a time axis, where <code>x</code> points to the time value. By default it displays up to two indicators at the same time, <code>y1</code> and <code>y2</code>.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="g2-timeline"><a class="lake-link"><i data-anchor="g2-timeline"></i></a>g2-timeline</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[repaint]</code></td>
<td>Whether to repaint when the data changes again</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[delay]</code></td>
<td>Delayed rendering, unit: ms</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[title]</code></td>
<td>Title of the chart</td>
<td><code>string,TemplateRef&lt;void&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[maxAxis]</code></td>
<td>Maximum number of indicators</td>
<td><code>number</code></td>
<td><code>2</code></td>
</tr>
<tr>
<td><code>[data]</code></td>
<td>Data; note that the indicator data passed depends on <code>maxAxis</code></td>
<td><code>G2TimelineData[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[titleMap]</code></td>
<td>Alias of the indicator</td>
<td><code>G2TimelineMap</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[colorMap]</code></td>
<td>Color of the indicator</td>
<td><code>G2TimelineMap</code></td>
<td><code>&#123; y1: &#39;#5B8FF9&#39;, y2: &#39;#5AD8A6&#39;, y3: &#39;#5D7092&#39;, y4: &#39;#F6BD16&#39;, y5: &#39;#E86452&#39; &#125;</code></td>
</tr>
<tr>
<td><code>[height]</code></td>
<td>Height</td>
<td><code>number</code></td>
<td><code>450</code></td>
</tr>
<tr>
<td><code>[padding]</code></td>
<td>Padding of the chart</td>
<td><code>number[]</code></td>
<td><code>[40, 8, 64, 40]</code></td>
</tr>
<tr>
<td><code>[borderWidth]</code></td>
<td>Line width</td>
<td><code>number</code></td>
<td><code>2</code></td>
</tr>
<tr>
<td><code>[mask]</code></td>
<td>Date format, using the <a href="https://g2.antv.vision/zh/docs/manual/tutorial/scale#time" target="_blank" rel="noopener">G2 mask date format</a></td>
<td><code>string</code></td>
<td><code>HH:mm</code></td>
</tr>
<tr>
<td><code>[maskSlider]</code></td>
<td>Slider date format, using the <a href="https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table" target="_blank" rel="noopener">date-fns date format</a></td>
<td><code>string</code></td>
<td><code>HH:mm</code></td>
</tr>
<tr>
<td><code>[position]</code></td>
<td>Position of the title</td>
<td><code>&#39;top&#39;,&#39;right&#39;,&#39;bottom&#39;,&#39;left&#39;</code></td>
<td><code>&#39;top&#39;</code></td>
</tr>
<tr>
<td><code>[slider]</code></td>
<td>Whether the slider is required</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td>Custom chart theme</td>
<td><code>string | LooseObject</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(clickItem)</code></td>
<td>Callback when clicking an item</td>
<td><code>output&lt;G2TimelineClickItem&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>Callback when G2 is initialized</td>
<td><code>output&lt;Chart&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(error)</code></td>
<td>Callback when rendering fails (G2 not loaded or render throws); <code>(ready)</code> will not fire</td>
<td><code>output&lt;unknown&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="g2timelinedata"><a class="lake-link"><i data-anchor="g2timelinedata"></i></a>G2TimelineData</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[time]</code></td>
<td>Date format</td>
<td><code>Date | number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[y1]</code></td>
<td>Data of indicator 1</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[y2]</code></td>
<td>Data of indicator 2</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[y3]</code></td>
<td>Data of indicator 3</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[y4]</code></td>
<td>Data of indicator 4</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[y5]</code></td>
<td>Data of indicator 5</td>
<td><code>number</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="g2timelinemap"><a class="lake-link"><i data-anchor="g2timelinemap"></i></a>G2TimelineMap</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[y1]</code></td>
<td>Indicator 1</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[y2]</code></td>
<td>Indicator 2</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[y3]</code></td>
<td>Indicator 3</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[y4]</code></td>
<td>Indicator 4</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[y5]</code></td>
<td>Indicator 5</td>
<td><code>string</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-timeline`,title:`g2-timeline`},{id:`g2timelinedata`,title:`G2TimelineData`},{id:`g2timelinemap`,title:`G2TimelineMap`}]}],raw:"---\ntitle: g2-timeline\nsubtitle: Timeline\ncols: 1\ntype: G2\nmodule: import { G2TimelineModule } from '@delon/chart/timeline';\n---\n\nThe `timeline` component renders a bar chart with a time axis, where `x` points to the time value. By default it displays up to two indicators at the same time, `y1` and `y2`.\n\n## API\n\n### g2-timeline\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[repaint]` | Whether to repaint when the data changes again | `boolean` | `true` |\n| `[delay]` | Delayed rendering, unit: ms | `number` | `0` |\n| `[title]` | Title of the chart | `string,TemplateRef<void>` | - |\n| `[maxAxis]` | Maximum number of indicators | `number` | `2` |\n| `[data]` | Data; note that the indicator data passed depends on `maxAxis` | `G2TimelineData[]` | - |\n| `[titleMap]` | Alias of the indicator | `G2TimelineMap` | - |\n| `[colorMap]` | Color of the indicator | `G2TimelineMap` | `{ y1: '#5B8FF9', y2: '#5AD8A6', y3: '#5D7092', y4: '#F6BD16', y5: '#E86452' }` |\n| `[height]` | Height | `number` | `450` |\n| `[padding]` | Padding of the chart | `number[]` | `[40, 8, 64, 40]` |\n| `[borderWidth]` | Line width | `number` | `2` |\n| `[mask]` | Date format, using the [G2 mask date format](https://g2.antv.vision/zh/docs/manual/tutorial/scale#time) | `string` | `HH:mm` |\n| `[maskSlider]` | Slider date format, using the [date-fns date format](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table) | `string` | `HH:mm` |\n| `[position]` | Position of the title | `'top','right','bottom','left'` | `'top'` |\n| `[slider]` | Whether the slider is required | `boolean` | `true` |\n| `[theme]` | Custom chart theme | `string \\| LooseObject` | - |\n| `(clickItem)` | Callback when clicking an item | `output<G2TimelineClickItem>` | - |\n| `(ready)` | Callback when G2 is initialized | `output<Chart>` | - |\n| `(error)` | Callback when rendering fails (G2 not loaded or render throws); `(ready)` will not fire | `output<unknown>` | - |\n\n### G2TimelineData\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[time]` | Date format | `Date \\| number` | - |\n| `[y1]` | Data of indicator 1 | `number` | - |\n| `[y2]` | Data of indicator 2 | `number` | - |\n| `[y3]` | Data of indicator 3 | `number` | - |\n| `[y4]` | Data of indicator 4 | `number` | - |\n| `[y5]` | Data of indicator 5 | `number` | - |\n\n### G2TimelineMap\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[y1]` | Indicator 1 | `string` | - |\n| `[y2]` | Indicator 2 | `string` | - |\n| `[y3]` | Indicator 3 | `string` | - |\n| `[y4]` | Indicator 4 | `string` | - |\n| `[y5]` | Indicator 5 | `string` | - |"},"zh-CN":{meta:{title:`g2-timeline`,subtitle:`折线图`,cols:1,module:`import { G2TimelineModule } from '@delon/chart/timeline';`,description:`使用 timeline 组件可以实现带有时间轴的柱状图展现，而其中的 x 属性，则是时间值的指向，默认最多支持同时展现两个指标，分别是 y1 和 y2。`,group:`G2`,order:0,path:`packages/chart/timeline/index.zh-CN.md`,url:`/chart/timeline/zh`},text:`<p>\u4F7F\u7528 <code>timeline</code> \u7EC4\u4EF6\u53EF\u4EE5\u5B9E\u73B0\u5E26\u6709\u65F6\u95F4\u8F74\u7684\u67F1\u72B6\u56FE\u5C55\u73B0\uFF0C\u800C\u5176\u4E2D\u7684 <code>x</code> \u5C5E\u6027\uFF0C\u5219\u662F\u65F6\u95F4\u503C\u7684\u6307\u5411\uFF0C\u9ED8\u8BA4\u6700\u591A\u652F\u6301\u540C\u65F6\u5C55\u73B0\u4E24\u4E2A\u6307\u6807\uFF0C\u5206\u522B\u662F <code>y1</code> \u548C <code>y2</code>\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="g2-timeline"><a class="lake-link"><i data-anchor="g2-timeline"></i></a>g2-timeline</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[repaint]</code></td>
<td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[delay]</code></td>
<td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[title]</code></td>
<td>\u56FE\u8868\u6807\u9898</td>
<td><code>string,TemplateRef&lt;void&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[maxAxis]</code></td>
<td>\u6700\u5927\u6307\u6807\u6570\u91CF</td>
<td><code>number</code></td>
<td><code>2</code></td>
</tr>
<tr>
<td><code>[data]</code></td>
<td>\u6570\u636E\uFF0C\u6CE8\uFF1A\u6839\u636E <code>maxAxis</code> \u503C\u4F20\u9012\u6307\u6807\u6570\u636E</td>
<td><code>G2TimelineData[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[titleMap]</code></td>
<td>\u6307\u6807\u522B\u540D</td>
<td><code>G2TimelineMap</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[colorMap]</code></td>
<td>\u989C\u8272</td>
<td><code>G2TimelineMap</code></td>
<td><code>&#123; y1: &#39;#5B8FF9&#39;, y2: &#39;#5AD8A6&#39;, y3: &#39;#5D7092&#39;, y4: &#39;#F6BD16&#39;, y5: &#39;#E86452&#39; &#125;</code></td>
</tr>
<tr>
<td><code>[height]</code></td>
<td>\u9AD8\u5EA6\u503C</td>
<td><code>number</code></td>
<td><code>450</code></td>
</tr>
<tr>
<td><code>[padding]</code></td>
<td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td>
<td><code>number[]</code></td>
<td><code>[40, 8, 64, 40]</code></td>
</tr>
<tr>
<td><code>[borderWidth]</code></td>
<td>\u7EBF\u6761</td>
<td><code>number</code></td>
<td><code>2</code></td>
</tr>
<tr>
<td><code>[mask]</code></td>
<td>\u65E5\u671F\u683C\u5F0F\uFF0C\u4F7F\u7528 <a href="https://g2.antv.vision/zh/docs/manual/tutorial/scale#time" target="_blank" rel="noopener">G2 Mask\u65E5\u671F\u683C\u5F0F</a></td>
<td><code>string</code></td>
<td><code>HH:mm</code></td>
</tr>
<tr>
<td><code>[maskSlider]</code></td>
<td>\u6ED1\u52A8\u6761\u65E5\u671F\u683C\u5F0F\uFF0C\u4F7F\u7528 <a href="https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table" target="_blank" rel="noopener">date-fns \u65E5\u671F\u683C\u5F0F</a></td>
<td><code>string</code></td>
<td><code>HH:mm</code></td>
</tr>
<tr>
<td><code>[position]</code></td>
<td>\u6807\u9898\u4F4D\u7F6E</td>
<td><code>&#39;top&#39;,&#39;right&#39;,&#39;bottom&#39;,&#39;left&#39;</code></td>
<td><code>&#39;top&#39;</code></td>
</tr>
<tr>
<td><code>[slider]</code></td>
<td>\u662F\u5426\u9700\u8981\u6ED1\u52A8\u6761</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td>
<td><code>string | LooseObject</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(clickItem)</code></td>
<td>\u70B9\u51FB\u9879\u56DE\u8C03</td>
<td><code>output&lt;G2TimelineClickItem&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td>
<td><code>output&lt;Chart&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(error)</code></td>
<td>\u5F53\u6E32\u67D3\u5931\u8D25\u65F6\u8C03\u7528\uFF08G2 \u672A\u52A0\u8F7D\u6216\u6E32\u67D3\u629B\u9519\uFF09\uFF0C\u6B64\u65F6 <code>(ready)</code> \u4E0D\u4F1A\u89E6\u53D1</td>
<td><code>output&lt;unknown&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="g2timelinedata"><a class="lake-link"><i data-anchor="g2timelinedata"></i></a>G2TimelineData</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[time]</code></td>
<td>\u65E5\u671F\u683C\u5F0F</td>
<td><code>Date | number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[y1]</code></td>
<td>\u6307\u68071\u6570\u636E</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[y2]</code></td>
<td>\u6307\u68072\u6570\u636E</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[y3]</code></td>
<td>\u6307\u68073\u6570\u636E</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[y4]</code></td>
<td>\u6307\u68074\u6570\u636E</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[y5]</code></td>
<td>\u6307\u68075\u6570\u636E</td>
<td><code>number</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="g2timelinemap"><a class="lake-link"><i data-anchor="g2timelinemap"></i></a>G2TimelineMap</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[y1]</code></td>
<td>\u6307\u68071</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[y2]</code></td>
<td>\u6307\u68072</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[y3]</code></td>
<td>\u6307\u68073</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[y4]</code></td>
<td>\u6307\u68074</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[y5]</code></td>
<td>\u6307\u68075</td>
<td><code>string</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-timeline`,title:`g2-timeline`},{id:`g2timelinedata`,title:`G2TimelineData`},{id:`g2timelinemap`,title:`G2TimelineMap`}]}],raw:"---\ntitle: g2-timeline\nsubtitle: 折线图\ncols: 1\ntype: G2\nmodule: import { G2TimelineModule } from '@delon/chart/timeline';\n---\n\n使用 `timeline` 组件可以实现带有时间轴的柱状图展现，而其中的 `x` 属性，则是时间值的指向，默认最多支持同时展现两个指标，分别是 `y1` 和 `y2`。\n\n## API\n\n### g2-timeline\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |\n| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |\n| `[title]` | 图表标题 | `string,TemplateRef<void>` | - |\n| `[maxAxis]` | 最大指标数量 | `number` | `2` |\n| `[data]` | 数据，注：根据 `maxAxis` 值传递指标数据 | `G2TimelineData[]` | - |\n| `[titleMap]` | 指标别名 | `G2TimelineMap` | - |\n| `[colorMap]` | 颜色 | `G2TimelineMap` | `{ y1: '#5B8FF9', y2: '#5AD8A6', y3: '#5D7092', y4: '#F6BD16', y5: '#E86452' }` |\n| `[height]` | 高度值 | `number` | `450` |\n| `[padding]` | 图表内部间距 | `number[]` | `[40, 8, 64, 40]` |\n| `[borderWidth]` | 线条 | `number` | `2` |\n| `[mask]` | 日期格式，使用 [G2 Mask日期格式](https://g2.antv.vision/zh/docs/manual/tutorial/scale#time) | `string` | `HH:mm` |\n| `[maskSlider]` | 滑动条日期格式，使用 [date-fns 日期格式](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table) | `string` | `HH:mm` |\n| `[position]` | 标题位置 | `'top','right','bottom','left'` | `'top'` |\n| `[slider]` | 是否需要滑动条 | `boolean` | `true` |\n| `[theme]` | 定制图表主题 | `string \\| LooseObject` | - |\n| `(clickItem)` | 点击项回调 | `output<G2TimelineClickItem>` | - |\n| `(ready)` | 当G2完成初始化后调用 | `output<Chart>` | - |\n| `(error)` | 当渲染失败时调用（G2 未加载或渲染抛错），此时 `(ready)` 不会触发 | `output<unknown>` | - |\n\n### G2TimelineData\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[time]` | 日期格式 | `Date \\| number` | - |\n| `[y1]` | 指标1数据 | `number` | - |\n| `[y2]` | 指标2数据 | `number` | - |\n| `[y3]` | 指标3数据 | `number` | - |\n| `[y4]` | 指标4数据 | `number` | - |\n| `[y5]` | 指标5数据 | `number` | - |\n\n### G2TimelineMap\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[y1]` | 指标1 | `string` | - |\n| `[y2]` | 指标2 | `string` | - |\n| `[y3]` | 指标3 | `string` | - |\n| `[y4]` | 指标4 | `string` | - |\n| `[y5]` | 指标5 | `string` | - |"}}};codes=[{id:`chart-timeline-basic`,name:`basic`,title:{"zh-CN":`基础`,"en-US":`Basic`},code:`import { Component, OnInit, inject, signal } from '@angular/core';

import { G2TimelineClickItem, G2TimelineData, G2TimelineModule } from '@delon/chart/timeline';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-timeline-basic',
  template: \` <g2-timeline
    [data]="chartData()"
    [titleMap]="{ y1: '\u5BA2\u6D41\u91CF', y2: '\u652F\u4ED8\u7B14\u6570' }"
    [height]="200"
    (clickItem)="handleClick($event)"
  />\`,
  imports: [G2TimelineModule]
})
export class ChartTimelineBasic implements OnInit {
  private readonly msg = inject(NzMessageService);
  readonly chartData = signal<G2TimelineData[]>([]);

  ngOnInit(): void {
    const chartData: G2TimelineData[] = [];
    for (let i = 0; i < 20; i += 1) {
      chartData.push({
        time: new Date().getTime() + 1000 * 60 * 30 * i,
        y1: Math.floor(Math.random() * 100) + 1000,
        y2: Math.floor(Math.random() * 100) + 10
      });
    }
    this.chartData.set(chartData);
  }

  handleClick(data: G2TimelineClickItem): void {
    this.msg.info(\`\u5BA2\u6D41\u91CF: \${data.item.y1}, \u652F\u4ED8\u7B14\u6570: \${data.item.y2}\`);
  }
}`,order:0,type:`demo`,summary:{"en-US":`<p>A chart with a time axis.</p>
`,"zh-CN":`<p>\u5E26\u6709\u65F6\u95F4\u8F74\u7684\u56FE\u8868\u3002</p>
`},summary_raw:{"en-US":`A chart with a time axis.
`,"zh-CN":`\u5E26\u6709\u65F6\u95F4\u8F74\u7684\u56FE\u8868\u3002
`},path:`packages/chart/timeline/demo/basic.md`},{id:`chart-timeline-max-axis`,name:`max-axis`,title:{"zh-CN":`多指标`,"en-US":`Multiple indicators`},code:`import { Component, signal } from '@angular/core';

import { G2TimelineData, G2TimelineMap, G2TimelineModule } from '@delon/chart/timeline';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'chart-timeline-max-axis',
  template: \`
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    @for (i of axisList; track $index) {
      <button nz-button (click)="refresh(i)" nzType="primary">{{ i }} axis</button>
    }
    <g2-timeline [maxAxis]="maxAxis()" [data]="chartData()" [titleMap]="titleMap()" [height]="300" />
  \`,
  imports: [G2TimelineModule, NzButtonModule]
})
export class ChartTimelineMaxAxis {
  readonly chartData = signal<G2TimelineData[]>([]);
  readonly titleMap = signal<G2TimelineMap>({ y1: '\u6307\u68071', y2: '\u6307\u68072' });
  readonly maxAxis = signal(2);
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
    this.maxAxis.set(max ?? this.maxAxis());
    const { titleMap, data } = this.genData(this.maxAxis());
    this.chartData.set(data);
    this.titleMap.set(titleMap);
  }
}`,order:1,type:`demo`,summary:{"en-US":`<p>Use <code>maxAxis</code> to adjust multiple indicators; up to <code>5</code> indicator values are supported.</p>
`,"zh-CN":`<p>\u5229\u7528 <code>maxAxis</code> \u5C5E\u6027\u6765\u8C03\u6574\u591A\u4E2A\u6307\u6807\uFF0C\u6700\u591A\u652F\u6301 <code>5</code> \u4E2A\u6307\u6807\u503C\u3002</p>
`},summary_raw:{"en-US":"Use `maxAxis` to adjust multiple indicators; up to `5` indicator values are supported.\n","zh-CN":"利用 `maxAxis` 属性来调整多个指标，最多支持 `5` 个指标值。\n"},path:`packages/chart/timeline/demo/max-axis.md`},{id:`chart-timeline-mask`,name:`mask`,title:{"zh-CN":`时间格式化`,"en-US":`Time mask format`},code:`import { Component, OnInit, inject, signal } from '@angular/core';

import { G2TimelineClickItem, G2TimelineData, G2TimelineModule } from '@delon/chart/timeline';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-timeline-mask',
  template: \` <g2-timeline
    [data]="chartData()"
    [titleMap]="{ y1: '\u5BA2\u6D41\u91CF', y2: '\u652F\u4ED8\u7B14\u6570' }"
    [height]="200"
    mask="MM\u6708DD\u65E5"
    maskSlider="MM\u6708dd\u65E5"
    (clickItem)="handleClick($event)"
  />\`,
  imports: [G2TimelineModule]
})
export class ChartTimelineMask implements OnInit {
  private readonly msg = inject(NzMessageService);
  readonly chartData = signal<G2TimelineData[]>([]);

  ngOnInit(): void {
    const chartData: G2TimelineData[] = [];
    for (let i = 0; i < 20; i += 1) {
      chartData.push({
        time: new Date().getTime() + 1000 * 60 * 60 * 24 * i,
        y1: Math.floor(Math.random() * 100) + 1000,
        y2: Math.floor(Math.random() * 100) + 10
      });
    }
    this.chartData.set(chartData);
  }

  handleClick(data: G2TimelineClickItem): void {
    this.msg.info(\`\u5BA2\u6D41\u91CF: \${data.item.y1}, \u652F\u4ED8\u7B14\u6570: \${data.item.y2}\`);
  }
}`,order:2,type:`demo`,summary:{"en-US":`<p>Use <code>mask</code> and <code>maskSlider</code> to change the time format.</p>
`,"zh-CN":`<p>\u5229\u7528 <code>mask</code> \u548C <code>maskSlider</code> \u6765\u6539\u53D8\u65F6\u95F4\u683C\u5F0F\u3002</p>
`},summary_raw:{"en-US":"Use `mask` and `maskSlider` to change the time format.\n","zh-CN":"利用 `mask` 和 `maskSlider` 来改变时间格式。\n"},path:`packages/chart/timeline/demo/mask.md`}];static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-timeline`]],hostAttrs:[1,`d-block`],decls:9,vars:9,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`24`],[3,`item`]],template:function(t,n){t&1&&(oe(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),pt(4,`chart-timeline-basic`),he$1(),oe(5,`code-box`,3),pt(6,`chart-timeline-max-axis`),he$1(),oe(7,`code-box`,3),pt(8,`chart-timeline-mask`),he$1()()()()),t&2&&(ie(`codes`,n.codes)(`item`,n.item),A(),ie(`nzGutter`,16),A(2),ie(`item`,n.codes[0]),$t$1(`id`,n.codes[0].id),A(2),ie(`item`,n.codes[1]),$t$1(`id`,n.codes[1].id),A(2),ie(`item`,n.codes[2]),$t$1(`id`,n.codes[2].id))},dependencies:[ce$1,an,rn,dn,sn$1,We$1,X$1],encapsulation:2})};var ln=class o{static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-trend-basic`]],decls:4,vars:0,consts:[[`flag`,`up`],[`flag`,`down`,1,`ml-sm`]],template:function(t,n){t&1&&(oe(0,`trend`,0),an$1(1,`12%`),he$1(),oe(2,`trend`,1),an$1(3,`11%`),he$1())},dependencies:[Be,me],encapsulation:2})};var sn=class o{static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-trend-reverse`]],decls:4,vars:0,consts:[[`flag`,`up`,`reverseColor`,``],[`flag`,`down`,`reverseColor`,``,1,`ml-sm`]],template:function(t,n){t&1&&(oe(0,`trend`,0),an$1(1,`12%`),he$1(),oe(2,`trend`,1),an$1(3,`11%`),he$1())},dependencies:[Be,me],encapsulation:2})};var mn=class o{item={name:`trend`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{title:`trend`,subtitle:`Trend`,cols:1,module:`import { TrendModule } from '@delon/chart/trend';`,description:`Trend symbols mark rising and falling trends. Green usually means "good" and red means "bad", except in stock market scenarios.`,group:`G2`,order:0,path:`packages/chart/trend/index.en-US.md`,url:`/chart/trend/en`},text:`<p>Trend symbols mark rising and falling trends. Green usually means &quot;good&quot; and red means &quot;bad&quot;, except in stock market scenarios.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="trend"><a class="lake-link"><i data-anchor="trend"></i></a>trend</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[colorful]</code></td>
<td>Whether to use colorful marks</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[flag]</code></td>
<td>Rising or falling flag</td>
<td><code>&#39;up&#39;,&#39;down&#39;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[reverseColor]</code></td>
<td>Whether to reverse the color</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`trend`,title:`trend`}]}],raw:`---
type: G2
title: trend
subtitle: Trend
cols: 1
module: import { TrendModule } from '@delon/chart/trend';
---

Trend symbols mark rising and falling trends. Green usually means "good" and red means "bad", except in stock market scenarios.

## API

### trend

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| \`[colorful]\` | Whether to use colorful marks | \`boolean\` | \`true\` |
| \`[flag]\` | Rising or falling flag | \`'up','down'\` | - |
| \`[reverseColor]\` | Whether to reverse the color | \`boolean\` | \`false\` |`},"zh-CN":{meta:{title:`trend`,subtitle:`趋势标记`,cols:1,module:`import { TrendModule } from '@delon/chart/trend';`,description:`趋势符号，标记上升和下降趋势。通常用绿色代表“好”，红色代表“不好”，股票涨跌场景除外。`,group:`G2`,order:0,path:`packages/chart/trend/index.zh-CN.md`,url:`/chart/trend/zh`},text:`<p>\u8D8B\u52BF\u7B26\u53F7\uFF0C\u6807\u8BB0\u4E0A\u5347\u548C\u4E0B\u964D\u8D8B\u52BF\u3002\u901A\u5E38\u7528\u7EFF\u8272\u4EE3\u8868\u201C\u597D\u201D\uFF0C\u7EA2\u8272\u4EE3\u8868\u201C\u4E0D\u597D\u201D\uFF0C\u80A1\u7968\u6DA8\u8DCC\u573A\u666F\u9664\u5916\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="trend"><a class="lake-link"><i data-anchor="trend"></i></a>trend</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[colorful]</code></td>
<td>\u662F\u5426\u5F69\u8272\u6807\u8BB0</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[flag]</code></td>
<td>\u4E0A\u5347\u4E0B\u964D\u6807\u8BC6</td>
<td><code>&#39;up&#39;,&#39;down&#39;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[reverseColor]</code></td>
<td>\u989C\u8272\u53CD\u8F6C</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`trend`,title:`trend`}]}],raw:`---
type: G2
title: trend
subtitle: \u8D8B\u52BF\u6807\u8BB0
cols: 1
module: import { TrendModule } from '@delon/chart/trend';
---

\u8D8B\u52BF\u7B26\u53F7\uFF0C\u6807\u8BB0\u4E0A\u5347\u548C\u4E0B\u964D\u8D8B\u52BF\u3002\u901A\u5E38\u7528\u7EFF\u8272\u4EE3\u8868\u201C\u597D\u201D\uFF0C\u7EA2\u8272\u4EE3\u8868\u201C\u4E0D\u597D\u201D\uFF0C\u80A1\u7968\u6DA8\u8DCC\u573A\u666F\u9664\u5916\u3002

## API

### trend

| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |
|----|----|----|-----|
| \`[colorful]\` | \u662F\u5426\u5F69\u8272\u6807\u8BB0 | \`boolean\` | \`true\` |
| \`[flag]\` | \u4E0A\u5347\u4E0B\u964D\u6807\u8BC6 | \`'up','down'\` | - |
| \`[reverseColor]\` | \u989C\u8272\u53CD\u8F6C | \`boolean\` | \`false\` |`}}};codes=[{id:`chart-trend-basic`,name:`basic`,title:{"zh-CN":`演示`,"en-US":`Demo`},code:`import { Component } from '@angular/core';

import { TrendModule } from '@delon/chart/trend';

@Component({
  selector: 'chart-trend-basic',
  template: \`
    <trend flag="up">12%</trend>
    <trend flag="down" class="ml-sm">11%</trend>
  \`,
  imports: [TrendModule]
})
export class ChartTrendBasic {}`,order:0,type:`demo`,summary:{"en-US":`<p>Add a small icon behind the value to indicate the rise and fall.</p>
`,"zh-CN":`<p>\u5728\u6570\u503C\u80CC\u540E\u6DFB\u52A0\u4E00\u4E2A\u5C0F\u56FE\u6807\u6765\u6807\u8BC6\u6DA8\u8DCC\u60C5\u51B5\u3002</p>
`},summary_raw:{"en-US":`Add a small icon behind the value to indicate the rise and fall.
`,"zh-CN":`\u5728\u6570\u503C\u80CC\u540E\u6DFB\u52A0\u4E00\u4E2A\u5C0F\u56FE\u6807\u6765\u6807\u8BC6\u6DA8\u8DCC\u60C5\u51B5\u3002
`},path:`packages/chart/trend/demo/basic.md`},{id:`chart-trend-reverse`,name:`reverse`,title:{"zh-CN":`颜色反转`,"en-US":`Color reverse`},code:`import { Component } from '@angular/core';

import { TrendModule } from '@delon/chart/trend';

@Component({
  selector: 'chart-trend-reverse',
  template: \`
    <trend flag="up" reverseColor>12%</trend>
    <trend flag="down" reverseColor class="ml-sm">11%</trend>
  \`,
  imports: [TrendModule]
})
export class ChartTrendReverse {}`,order:1,type:`demo`,summary:{"en-US":`<p>Add a small icon behind the value to indicate the rise and fall.</p>
`,"zh-CN":`<p>\u5728\u6570\u503C\u80CC\u540E\u6DFB\u52A0\u4E00\u4E2A\u5C0F\u56FE\u6807\u6765\u6807\u8BC6\u6DA8\u8DCC\u60C5\u51B5\u3002</p>
`},summary_raw:{"en-US":`Add a small icon behind the value to indicate the rise and fall.
`,"zh-CN":`\u5728\u6570\u503C\u80CC\u540E\u6DFB\u52A0\u4E00\u4E2A\u5C0F\u56FE\u6807\u6765\u6807\u8BC6\u6DA8\u8DCC\u60C5\u51B5\u3002
`},path:`packages/chart/trend/demo/reverse.md`}];static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-trend`]],hostAttrs:[1,`d-block`],decls:7,vars:7,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`24`],[3,`item`]],template:function(t,n){t&1&&(oe(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),pt(4,`chart-trend-basic`),he$1(),oe(5,`code-box`,3),pt(6,`chart-trend-reverse`),he$1()()()()),t&2&&(ie(`codes`,n.codes)(`item`,n.item),A(),ie(`nzGutter`,16),A(2),ie(`item`,n.codes[0]),$t$1(`id`,n.codes[0].id),A(2),ie(`item`,n.codes[1]),$t$1(`id`,n.codes[1].id))},dependencies:[ce$1,ln,sn,sn$1,We$1,X$1],encapsulation:2})};function Sa(o,e){o&1&&(oe(0,`div`,2),pt(1,`nz-skeleton`),he$1())}function _a(o,e){if(o&1&&(nn$1(0),an$1(1),rn$1()),o&2){let t=F(2);A(),vr(t.title())}}function Ia(o,e){if(o&1&&(oe(0,`span`,5),qe(1,_a,2,1,`ng-container`,6),he$1()),o&2){let t=F();A(),ie(`nzStringTemplateOutlet`,t.title())}}var at=class o extends tt$1{title=pe$1(null);color=pe$1(`#1890FF`);size=pe$1(160,{transform:Oo$1});percent=pe$1();padding=pe$1(8);animate=pe$1(!0,{transform:H});containerOf(){return this.node().nativeElement}buildSpec(){let{percent:e,color:t,size:n,theme:m,animate:p,padding:T}=this,q=Math.min(Math.max(e()??0,0),100);return W(g({},$t$2({theme:m(),height:n(),animate:p(),padding:T()})),{type:`liquid`,data:q/100,interaction:{tooltip:!1},style:{fill:t(),stroke:t(),outlineBorder:2,outlineDistance:3,waveLength:128,contentText:`${q} %`,contentFill:m()===`dark`?`rgba(255,255,255,0.85)`:`rgba(0,0,0,0.85)`,contentFontSize:24}})}isDataOnly(){return!1}render(){this._chart&&this.repaintSpec()}static ɵfac=(()=>{let e;return function(n){return(e||(e=Gn(o)))(n||o)}})();static ɵcmp=Se({type:o,selectors:[[`g2-water-wave`]],hostAttrs:[1,`g2-water-wave`],inputs:{title:[1,`title`],color:[1,`color`],size:[1,`size`],percent:[1,`percent`],padding:[1,`padding`],animate:[1,`animate`]},exportAs:[`g2WaterWave`],features:[tn$1],decls:6,vars:8,consts:[[`container`,``],[1,`g2-water-wave__chart`],[2,`position`,`absolute`,`inset`,`0`,`z-index`,`1`],[1,`g2-water-wave__container`],[1,`g2-water-wave__desc`],[1,`g2-water-wave__desc-title`],[4,`nzStringTemplateOutlet`]],template:function(t,n){t&1&&(oe(0,`div`,1),ve(1,Sa,2,0,`div`,2),pt(2,`div`,3,0),he$1(),oe(4,`div`,4),ve(5,Ia,2,1,`span`,5),he$1()),t&2&&(It$1(`width`,n.size(),`px`)(`height`,n.size(),`px`),A(),ye(n.loaded()?-1:1),A(3),It$1(`width`,n.size(),`px`),A(),ye(n.title()?5:-1))},dependencies:[er,Z],encapsulation:2})};var Ba=[at];var pn=class o{static ɵfac=function(t){return new(t||o)};static ɵmod=ee({type:o});static ɵinj=X({imports:[Rb,Jr,Ba]})};var un=class o{static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-water-wave-basic`]],decls:1,vars:3,consts:[[3,`title`,`percent`,`size`]],template:function(t,n){t&1&&pt(0,`g2-water-wave`,0),t&2&&ie(`title`,`补贴资金剩余`)(`percent`,34)(`size`,161)},dependencies:[pn,at],encapsulation:2})};var hn=class o{item={name:`water-wave`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{title:`g2-water-wave`,subtitle:`Water Wave`,cols:1,module:`import { G2WaterWaveModule } from '@delon/chart/water-wave';`,description:`A water wave chart is a way to display a proportion, which shows the percentage of a key value more intuitively. It is rendered with the G2 v5 liquid ...`,group:`G2`,order:0,path:`packages/chart/water-wave/index.en-US.md`,url:`/chart/water-wave/en`},text:`<p>A water wave chart is a way to display a proportion, which shows the percentage of a key value more intuitively. It is rendered with the G2 v5 <a href="https://g2.antv.antgroup.com/examples/general/Liquid" target="_blank" rel="noopener"><code>liquid</code></a> mark.</p>
<blockquote>
<p>Sizing is handled by the v5 <code>autoFit</code>; when the container is narrower than <code>[size]</code>, pass a smaller <code>[size]</code> instead. Use the public <code>render()</code> method to repaint manually.</p>
</blockquote>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="g2-water-wave"><a class="lake-link"><i data-anchor="g2-water-wave"></i></a>g2-water-wave</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[repaint]</code></td>
<td>Whether to repaint when the data changes again</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[delay]</code></td>
<td>Delayed rendering, unit: ms</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[animate]</code></td>
<td>Whether to display the enter animation (the wave motion itself is built into G2 and always runs)</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[title]</code></td>
<td>Title of the chart</td>
<td><code>string,TemplateRef&lt;void&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[size]</code></td>
<td>Size of the chart (the side length of the square)</td>
<td><code>number</code></td>
<td><code>160</code></td>
</tr>
<tr>
<td><code>[color]</code></td>
<td>Color of the chart (the wave and the ring share it)</td>
<td><code>string</code></td>
<td><code>#1890FF</code></td>
</tr>
<tr>
<td><code>[percent]</code></td>
<td>Percentage, from <code>0</code> to <code>100</code></td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[padding]</code></td>
<td>Padding of the chart</td>
<td><code>number | number[] | &#39;auto&#39;</code></td>
<td><code>8</code></td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td>Custom chart theme</td>
<td><code>string | LooseObject</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>Callback when G2 is initialized</td>
<td><code>output&lt;Chart&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(error)</code></td>
<td>Callback when rendering fails (G2 not loaded or render throws); <code>(ready)</code> will not fire</td>
<td><code>output&lt;unknown&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-water-wave`,title:`g2-water-wave`}]}],raw:"---\ntitle: g2-water-wave\nsubtitle: Water Wave\ncols: 1\ntype: G2\nmodule: import { G2WaterWaveModule } from '@delon/chart/water-wave';\n---\n\nA water wave chart is a way to display a proportion, which shows the percentage of a key value more intuitively. It is rendered with the G2 v5 [`liquid`](https://g2.antv.antgroup.com/examples/general/Liquid) mark.\n\n> Sizing is handled by the v5 `autoFit`; when the container is narrower than `[size]`, pass a smaller `[size]` instead. Use the public `render()` method to repaint manually.\n\n## API\n\n### g2-water-wave\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[repaint]` | Whether to repaint when the data changes again | `boolean` | `true` |\n| `[delay]` | Delayed rendering, unit: ms | `number` | `0` |\n| `[animate]` | Whether to display the enter animation (the wave motion itself is built into G2 and always runs) | `boolean` | `true` |\n| `[title]` | Title of the chart | `string,TemplateRef<void>` | - |\n| `[size]` | Size of the chart (the side length of the square) | `number` | `160` |\n| `[color]` | Color of the chart (the wave and the ring share it) | `string` | `#1890FF` |\n| `[percent]` | Percentage, from `0` to `100` | `number` | - |\n| `[padding]` | Padding of the chart | `number \\| number[] \\| 'auto'` | `8` |\n| `[theme]` | Custom chart theme | `string \\| LooseObject` | - |\n| `(ready)` | Callback when G2 is initialized | `output<Chart>` | - |\n| `(error)` | Callback when rendering fails (G2 not loaded or render throws); `(ready)` will not fire | `output<unknown>` | - |"},"zh-CN":{meta:{title:`g2-water-wave`,subtitle:`水波图`,cols:1,module:`import { G2WaterWaveModule } from '@delon/chart/water-wave';`,description:`水波图是一种比例的展示方式，可以更直观的展示关键值的占比。渲染基于 G2 v5 的 liquid 图形标记。尺寸自适应由 v5 的 autoFit 负责；容器比 [size] 更窄时请直接调小 [size]。需要手动重绘时使用公开的 render()。`,group:`G2`,order:0,path:`packages/chart/water-wave/index.zh-CN.md`,url:`/chart/water-wave/zh`},text:`<p>\u6C34\u6CE2\u56FE\u662F\u4E00\u79CD\u6BD4\u4F8B\u7684\u5C55\u793A\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u66F4\u76F4\u89C2\u7684\u5C55\u793A\u5173\u952E\u503C\u7684\u5360\u6BD4\u3002\u6E32\u67D3\u57FA\u4E8E G2 v5 \u7684 <a href="https://g2.antv.antgroup.com/examples/general/Liquid" target="_blank" rel="noopener"><code>liquid</code></a> \u56FE\u5F62\u6807\u8BB0\u3002</p>
<blockquote>
<p>\u5C3A\u5BF8\u81EA\u9002\u5E94\u7531 v5 \u7684 <code>autoFit</code> \u8D1F\u8D23\uFF1B\u5BB9\u5668\u6BD4 <code>[size]</code> \u66F4\u7A84\u65F6\u8BF7\u76F4\u63A5\u8C03\u5C0F <code>[size]</code>\u3002\u9700\u8981\u624B\u52A8\u91CD\u7ED8\u65F6\u4F7F\u7528\u516C\u5F00\u7684 <code>render()</code>\u3002</p>
</blockquote>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="g2-water-wave"><a class="lake-link"><i data-anchor="g2-water-wave"></i></a>g2-water-wave</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[repaint]</code></td>
<td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[delay]</code></td>
<td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[animate]</code></td>
<td>\u662F\u5426\u663E\u793A\u8FDB\u573A\u52A8\u753B\uFF08\u6C34\u6CE2\u81EA\u8EAB\u7684\u6D41\u52A8\u7531 G2 \u5185\u7F6E\u3001\u59CB\u7EC8\u8FD0\u884C\uFF09</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[title]</code></td>
<td>\u56FE\u8868\u6807\u9898</td>
<td><code>string,TemplateRef&lt;void&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[size]</code></td>
<td>\u56FE\u8868\u5C3A\u5BF8\uFF08\u6B63\u65B9\u5F62\u8FB9\u957F\uFF09</td>
<td><code>number</code></td>
<td><code>160</code></td>
</tr>
<tr>
<td><code>[color]</code></td>
<td>\u56FE\u8868\u989C\u8272\uFF08\u6C34\u6CE2\u4E0E\u5706\u73AF\u540C\u8272\uFF09</td>
<td><code>string</code></td>
<td><code>#1890FF</code></td>
</tr>
<tr>
<td><code>[percent]</code></td>
<td>\u8FDB\u5EA6\u6BD4\u4F8B\uFF0C\u53D6\u503C <code>0</code> ~ <code>100</code></td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[padding]</code></td>
<td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td>
<td><code>number | number[] | &#39;auto&#39;</code></td>
<td><code>8</code></td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td>
<td><code>string | LooseObject</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td>
<td><code>output&lt;Chart&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(error)</code></td>
<td>\u5F53\u6E32\u67D3\u5931\u8D25\u65F6\u8C03\u7528\uFF08G2 \u672A\u52A0\u8F7D\u6216\u6E32\u67D3\u629B\u9519\uFF09\uFF0C\u6B64\u65F6 <code>(ready)</code> \u4E0D\u4F1A\u89E6\u53D1</td>
<td><code>output&lt;unknown&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-water-wave`,title:`g2-water-wave`}]}],raw:"---\ntitle: g2-water-wave\nsubtitle: 水波图\ncols: 1\ntype: G2\nmodule: import { G2WaterWaveModule } from '@delon/chart/water-wave';\n---\n\n水波图是一种比例的展示方式，可以更直观的展示关键值的占比。渲染基于 G2 v5 的 [`liquid`](https://g2.antv.antgroup.com/examples/general/Liquid) 图形标记。\n\n> 尺寸自适应由 v5 的 `autoFit` 负责；容器比 `[size]` 更窄时请直接调小 `[size]`。需要手动重绘时使用公开的 `render()`。\n\n## API\n\n### g2-water-wave\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |\n| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |\n| `[animate]` | 是否显示进场动画（水波自身的流动由 G2 内置、始终运行） | `boolean` | `true` |\n| `[title]` | 图表标题 | `string,TemplateRef<void>` | - |\n| `[size]` | 图表尺寸（正方形边长） | `number` | `160` |\n| `[color]` | 图表颜色（水波与圆环同色） | `string` | `#1890FF` |\n| `[percent]` | 进度比例，取值 `0` ~ `100` | `number` | - |\n| `[padding]` | 图表内部间距 | `number \\| number[] \\| 'auto'` | `8` |\n| `[theme]` | 定制图表主题 | `string \\| LooseObject` | - |\n| `(ready)` | 当G2完成初始化后调用 | `output<Chart>` | - |\n| `(error)` | 当渲染失败时调用（G2 未加载或渲染抛错），此时 `(ready)` 不会触发 | `output<unknown>` | - |"}}};codes=[{id:`chart-water-wave-basic`,name:`basic`,title:{"zh-CN":`基础`,"en-US":`Basic`},code:`import { Component } from '@angular/core';

import { G2WaterWaveModule } from '@delon/chart/water-wave';

@Component({
  selector: 'chart-water-wave-basic',
  template: \`<g2-water-wave [title]="'\u8865\u8D34\u8D44\u91D1\u5269\u4F59'" [percent]="34" [size]="161" />\`,
  imports: [G2WaterWaveModule]
})
export class ChartWaterWaveBasic {}`,order:0,type:`demo`,summary:{"en-US":`<p>Basic usage.</p>
`,"zh-CN":`<p>\u57FA\u7840\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Basic usage.
`,"zh-CN":`\u57FA\u7840\u7528\u6CD5\u3002
`},path:`packages/chart/water-wave/demo/basic.md`}];static ɵfac=function(t){return new(t||o)};static ɵcmp=Se({type:o,selectors:[[`chart-water-wave`]],hostAttrs:[1,`d-block`],decls:5,vars:5,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`24`],[3,`item`]],template:function(t,n){t&1&&(oe(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),pt(4,`chart-water-wave-basic`),he$1()()()()),t&2&&(ie(`codes`,n.codes)(`item`,n.item),A(),ie(`nzGutter`,16),A(2),ie(`item`,n.codes[0]),$t$1(`id`,n.codes[0].id))},dependencies:[ce$1,un,sn$1,We$1,X$1],encapsulation:2})};var Xh=[{path:``,component:ee$2,children:[{path:`faq`,redirectTo:`faq/zh`,pathMatch:`full`},{path:`faq/:lang`,component:ut},{path:`getting-started`,redirectTo:`getting-started/zh`,pathMatch:`full`},{path:`getting-started/:lang`,component:ht},{path:`bar`,redirectTo:`bar/zh`,pathMatch:`full`},{path:`bar/:lang`,component:yt},{path:`card`,redirectTo:`card/zh`,pathMatch:`full`},{path:`card/:lang`,component:Dt},{path:`chart-echarts`,redirectTo:`chart-echarts/zh`,pathMatch:`full`},{path:`chart-echarts/:lang`,component:kt},{path:`custom`,redirectTo:`custom/zh`,pathMatch:`full`},{path:`custom/:lang`,component:Tt},{path:`gauge`,redirectTo:`gauge/zh`,pathMatch:`full`},{path:`gauge/:lang`,component:St},{path:`mini-area`,redirectTo:`mini-area/zh`,pathMatch:`full`},{path:`mini-area/:lang`,component:Bt},{path:`mini-bar`,redirectTo:`mini-bar/zh`,pathMatch:`full`},{path:`mini-bar/:lang`,component:Rt},{path:`mini-progress`,redirectTo:`mini-progress/zh`,pathMatch:`full`},{path:`mini-progress/:lang`,component:Ut},{path:`number-info`,redirectTo:`number-info/zh`,pathMatch:`full`},{path:`number-info/:lang`,component:qt},{path:`pie`,redirectTo:`pie/zh`,pathMatch:`full`},{path:`pie/:lang`,component:Jt},{path:`radar`,redirectTo:`radar/zh`,pathMatch:`full`},{path:`radar/:lang`,component:Zt},{path:`single-bar`,redirectTo:`single-bar/zh`,pathMatch:`full`},{path:`single-bar/:lang`,component:en},{path:`tag-cloud`,redirectTo:`tag-cloud/zh`,pathMatch:`full`},{path:`tag-cloud/:lang`,component:on},{path:`timeline`,redirectTo:`timeline/zh`,pathMatch:`full`},{path:`timeline/:lang`,component:cn},{path:`trend`,redirectTo:`trend/zh`,pathMatch:`full`},{path:`trend/:lang`,component:mn},{path:`water-wave`,redirectTo:`water-wave/zh`,pathMatch:`full`},{path:`water-wave/:lang`,component:hn}]}];export{Xh as routes};