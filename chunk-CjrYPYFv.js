import{$ as FP,$a as gt$1,$c as wo$1,$o as lt$1,Aa as en$1,Ai as Zt$1,Ao as k,Bi as _o$1,Bn as Pc,Br as V,Ci as Yt$1,Ct as Hd,E as Bk,Gc as vt$1,Gn as Q,Gt as Jt$1,Hn as Pn,Ir as Ur,Jt as K5,K as Dl,Kc as w,Mc as u,Mi as _,Mr as Ue$1,Nr as Uh,O as Bt$1,Oa as eP,Pr as Un,Pt as J,Qn as Qt$1,Ra as fa,Ri as _e,Ta as dy,To as je$1,Tt as I,V as D1,Wa as fr,Ws as qe,Xr as Vt$1,Y as F1,Yt as KP,Za as gj,an as Le$1,bi as Ye,bo as j,co as he$1,ec as re,er as R,es as ly,fc as sb,fn as Me$1,gl as ye$1,gn as N,gs as ne,gt as H,hi as Y,ht as Gw,ia as bo$1,ka as ee,ki as Zn,l as $e$1,ll as xl,lt as GP,m as AB,mn as Ml,ni as Wh,pi as Xt$1,qa as g,qn as Q5,qo as le,rc as rn$1,ss as mt$1,ti as We$1,tt as Fe,u as $h,ul as xt,uo as hn$1,wr as Tl,wt as Hk,xi as Yn,xn as Np,y as At$1,z as Cr,za as fe,zs as q5}from"./chunk-DjEIGkM3.js";import{n as Z,t as Y$1}from"./chunk-SQqFTCPq.js";import{n as et,t as Fe$1}from"./chunk-BFSieuge.js";import{P as bc,V as jo$1,X as tl,_ as Nc,l as In,q as pi,r as Ad,u as Jd}from"./chunk-DniIbunx.js";import{i as an$1,n as Ue$2,u as ln$1}from"./chunk-C8Kq7pnr.js";import{a as et$1,s as ti$1}from"./chunk-Cup5OABb.js";import{n as gn$1,t as Sn}from"./chunk-DFv970-x.js";import"./chunk-DXvDeW2w.js";import{C as jo$2,E as wn,T as sl,b as Zo$1,t as X,v as Ho,w as pl,x as cl,y as Vo$1}from"./main-BVCIPMT4.js";import"./chunk-BaLClJNm.js";import"./chunk-DYEIxuDB.js";import{t as rt$1}from"./chunk-DaGDDpY9.js";import{t as ee$1}from"./chunk-BSdR-Qg0.js";import{n as a,t as Q$1}from"./chunk-BQxRpuU0.js";var Tt=class a{item={name:`faq`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{order:100,title:`FAQ`,description:`The G2 uses window.addEventListener('resize', this.onResize) to detect a change in parent dom element's size. So you need to manually monitor the chan...`,group:`Documents`,path:`packages/chart/docs/faq.en-US.md`,url:`/chart/faq/en`},text:`<h2 id="how_to_auto-resize_of_the_container?"><a class="lake-link"><i data-anchor="how_to_auto-resize_of_the_container?"></i></a>How to auto-resize of the container?</h2><p>The G2 uses <code>window.addEventListener(&#39;resize&#39;, this.onResize)</code> to detect a change in parent dom element&#39;s size. So you need to manually monitor the change in the size of the container and call <code>chart.forceFit()</code> to force resize.</p>
<example-resizable-index />`,api:``,toc:[{id:`how_to_auto-resize_of_the_container?`,title:`How to auto-resize of the container?`}],raw:`---
order: 100
title: FAQ
type: Documents
---

## How to auto-resize of the container?

The G2 uses \`window.addEventListener('resize', this.onResize)\` to detect a change in parent dom element's size. So you need to manually monitor the change in the size of the container and call \`chart.forceFit()\` to force resize.

[comment]: <demo(resizable)>`},"zh-CN":{meta:{order:100,title:`常见问题`,description:`G2 当前版本并不会根据容器宽高自适应，目前只会根据浏览器窗体大小才会重新变更图表尺寸，因此需要手动监听容器大小的变化并调用 chart.forceFit() 重新渲染图表尺寸。`,group:`Documents`,path:`packages/chart/docs/faq.zh-CN.md`,url:`/chart/faq/zh`},text:`<h2 id="\u5982\u4F55\u81EA\u9002\u5E94\u5BB9\u5668\u5BBD\u9AD8\uFF1F"><a class="lake-link"><i data-anchor="\u5982\u4F55\u81EA\u9002\u5E94\u5BB9\u5668\u5BBD\u9AD8\uFF1F"></i></a>\u5982\u4F55\u81EA\u9002\u5E94\u5BB9\u5668\u5BBD\u9AD8\uFF1F</h2><p>G2 \u5F53\u524D\u7248\u672C\u5E76\u4E0D\u4F1A\u6839\u636E\u5BB9\u5668\u5BBD\u9AD8\u81EA\u9002\u5E94\uFF0C\u76EE\u524D\u53EA\u4F1A\u6839\u636E\u6D4F\u89C8\u5668\u7A97\u4F53\u5927\u5C0F\u624D\u4F1A\u91CD\u65B0\u53D8\u66F4\u56FE\u8868\u5C3A\u5BF8\uFF0C\u56E0\u6B64\u9700\u8981\u624B\u52A8\u76D1\u542C\u5BB9\u5668\u5927\u5C0F\u7684\u53D8\u5316\u5E76\u8C03\u7528 <code>chart.forceFit()</code> \u91CD\u65B0\u6E32\u67D3\u56FE\u8868\u5C3A\u5BF8\u3002</p>
<example-resizable-index />`,api:``,toc:[{id:`如何自适应容器宽高？`,title:`如何自适应容器宽高？`}],raw:`---
order: 100
title: \u5E38\u89C1\u95EE\u9898
type: Documents
---

## \u5982\u4F55\u81EA\u9002\u5E94\u5BB9\u5668\u5BBD\u9AD8\uFF1F

G2 \u5F53\u524D\u7248\u672C\u5E76\u4E0D\u4F1A\u6839\u636E\u5BB9\u5668\u5BBD\u9AD8\u81EA\u9002\u5E94\uFF0C\u76EE\u524D\u53EA\u4F1A\u6839\u636E\u6D4F\u89C8\u5668\u7A97\u4F53\u5927\u5C0F\u624D\u4F1A\u91CD\u65B0\u53D8\u66F4\u56FE\u8868\u5C3A\u5BF8\uFF0C\u56E0\u6B64\u9700\u8981\u624B\u52A8\u76D1\u542C\u5BB9\u5668\u5927\u5C0F\u7684\u53D8\u5316\u5E76\u8C03\u7528 \`chart.forceFit()\` \u91CD\u65B0\u6E32\u67D3\u56FE\u8868\u5C3A\u5BF8\u3002

[comment]: <demo(resizable)>`}}};codes=[];static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-faq`]],hostAttrs:[1,`d-block`],decls:1,vars:2,consts:[[3,`codes`,`item`]],template:function(t,n){t&1&&lt$1(0,`app-docs`,0),t&2&&re(`codes`,n.codes)(`item`,n.item)},dependencies:[rt$1],encapsulation:2})};var _t=class a{item={name:`getting-started`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{order:1,title:`Getting Started`,description:`Chart provides the well-designed abstract chart components based on the G2. These components provide the ability to use with complex mixed view or jus...`,group:`Documents`,path:`packages/chart/docs/getting-started.en-US.md`,url:`/chart/getting-started/en`},text:`<p>Chart provides the well-designed abstract chart components based on the <a href="https://antv.alipay.com/zh-cn/g2/3.x/index.html" target="_blank" rel="noopener">G2</a>. These components provide the ability to use with complex mixed view or just use along for common business usage.</p>
<h2 id="usage"><a class="lake-link"><i data-anchor="usage"></i></a>Usage</h2><h3 id="g2_class_library_loading"><a class="lake-link"><i data-anchor="g2_class_library_loading"></i></a>G2 class library loading</h3><p>By default, the class library CDN address has been specified in <a href="/docs/global-config">Global Configuration</a>:</p>
<pre><code class="language-ts">// global-config.module.ts
const alainConfig: AlainConfig = &#123;
  chart: &#123; 
    // The following is the default configuration. If the project cannot be accessed from the Internet, you can directly use the \`./assets***\` path for the dependent package according to the \`angular.json\` configuration
    libs: [
      &#39;https://gw.alipayobjects.com/os/lib/antv/g2/4.1.4/dist/g2.min.js&#39;,
      &#39;https://gw.alipayobjects.com/os/lib/antv/data-set/0.11.7/dist/data-set.js&#39;,
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
  &#125;,
  &#123;
    &quot;glob&quot;: &quot;**/*&quot;,
    &quot;input&quot;: &quot;./node_modules/&#64;antv/data-set/dist&quot;,
    &quot;output&quot;: &quot;/&#64;antv/data-set/&quot;
  &#125;
]
</code></pre>
<p>Finally modify the <code>libs</code> parameter of the global configuration:</p>
<pre><code class="language-ts">// global-config.module.ts
const alainConfig: AlainConfig = &#123;
  chart: &#123; 
    libs: [
      &#39;./assets/&#64;antv/g2/g2.min.js&#39;,
      &#39;./assets/&#64;antv/data-set/data-set.js&#39;,
    ],
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
`,api:``,toc:[{id:`usage`,title:`Usage`,children:[{id:`g2_class_library_loading`,title:`G2 class library loading`},{id:`import_module`,title:`Import module`}]},{id:`custom_g2_components`,title:`Custom G2 components`},{id:`configure_chart_theme`,title:`Configure chart theme`}],raw:`---
order: 1
title: Getting Started
type: Documents
---

Chart provides the well-designed abstract chart components based on the [G2](https://antv.alipay.com/zh-cn/g2/3.x/index.html). These components provide the ability to use with complex mixed view or just use along for common business usage.

## Usage

### G2 class library loading

By default, the class library CDN address has been specified in [Global Configuration](/docs/global-config):

\`\`\`ts
// global-config.module.ts
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
}
\`\`\`

Of course, you can also directly import the CDN address in \`index.html\`, for example:

\`\`\`html
<!-- Introduce online resources, select the g2 version you need and replace the version variable -->
<script src="https://gw.alipayobjects.com/os/lib/antv/g2/{{version}}/dist/g2.min.js"><\/script>
\`\`\`

You can also configure the \`assets\` (About [assets](https://angular.io/guide/workspace-config#assets-configuration) Document) option in \`angular.json\` to obtain the G2 library from \`node_modules\`, for example:

\`\`\`json
"assets": [
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
]
\`\`\`

Finally modify the \`libs\` parameter of the global configuration:

\`\`\`ts
// global-config.module.ts
const alainConfig: AlainConfig = {
  chart: { 
    libs: [
      './assets/@antv/g2/g2.min.js',
      './assets/@antv/data-set/data-set.js',
    ],
  },
};
\`\`\`

### Import module

\`\`\`ts
// shared.module.ts
import { G2BarModule } from '@delon/chart/bar';

@NgModule({
  imports: [ G2BarModule ],
  exports: [ G2BarModule ]
})
\`\`\`

## Custom G2 components

Use the [g2-chart](/chart/custom) component to better implement custom charts.

## Configure chart theme

Configure the chart theme for all G2, but only provide interfaces. For the configuration chart theme parameters, please refer to [G2 website](https://g2.antv.vision/zh/docs/manual/tutorial/theme).

\`\`\`ts
// global-config.module.ts
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
}
\`\`\``},"zh-CN":{meta:{order:1,title:`开始使用`,description:`图表是基于 G2 (3.0) 的基础上二次封装，提供了业务中常用的图表套件，可以单独使用，也可以组合起来实现复杂的展示效果。图表的作用，是帮助我们更好地看懂数据。选择什么图表，需要回答的首要问题是『我有什么数据，需要用图表做什么』，而不是 『图表长成什么样』 。默认情况下，在全局配置已经指定类库 C...`,group:`Documents`,path:`packages/chart/docs/getting-started.zh-CN.md`,url:`/chart/getting-started/zh`},text:`<p>\u56FE\u8868\u662F\u57FA\u4E8E <a href="https://antv.alipay.com/zh-cn/g2/3.x/index.html" target="_blank" rel="noopener">G2</a> (3.0) \u7684\u57FA\u7840\u4E0A\u4E8C\u6B21\u5C01\u88C5\uFF0C\u63D0\u4F9B\u4E86\u4E1A\u52A1\u4E2D\u5E38\u7528\u7684\u56FE\u8868\u5957\u4EF6\uFF0C\u53EF\u4EE5\u5355\u72EC\u4F7F\u7528\uFF0C\u4E5F\u53EF\u4EE5\u7EC4\u5408\u8D77\u6765\u5B9E\u73B0\u590D\u6742\u7684\u5C55\u793A\u6548\u679C\u3002</p>
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
      &#39;https://gw.alipayobjects.com/os/lib/antv/g2/4.1.4/dist/g2.min.js&#39;,
      &#39;https://gw.alipayobjects.com/os/lib/antv/data-set/0.11.7/dist/data-set.js&#39;,
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
  &#125;,
  &#123;
    &quot;glob&quot;: &quot;**/*&quot;,
    &quot;input&quot;: &quot;./node_modules/&#64;antv/data-set/dist&quot;,
    &quot;output&quot;: &quot;/&#64;antv/data-set/&quot;
  &#125;
]
</code></pre>
<p>\u6700\u540E\u4FEE\u6539\u5168\u5C40\u914D\u7F6E\u7684 <code>libs</code> \u53C2\u6570\u4E3A\uFF1A</p>
<pre><code class="language-ts">// global-config.module.ts
const alainConfig: AlainConfig = &#123;
  chart: &#123; 
    libs: [
      &#39;./assets/&#64;antv/g2/g2.min.js&#39;,
      &#39;./assets/&#64;antv/data-set/data-set.js&#39;,
    ],
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
`,api:``,toc:[{id:`如何使用`,title:`如何使用`,children:[{id:`g2类库加载`,title:`G2类库加载`},{id:`导入模块`,title:`导入模块`}]},{id:`自定义_g2_组件`,title:`自定义 G2 组件`},{id:`配置图表主题`,title:`配置图表主题`}],raw:`---
order: 1
title: \u5F00\u59CB\u4F7F\u7528
type: Documents
---

\u56FE\u8868\u662F\u57FA\u4E8E [G2](https://antv.alipay.com/zh-cn/g2/3.x/index.html) (3.0) \u7684\u57FA\u7840\u4E0A\u4E8C\u6B21\u5C01\u88C5\uFF0C\u63D0\u4F9B\u4E86\u4E1A\u52A1\u4E2D\u5E38\u7528\u7684\u56FE\u8868\u5957\u4EF6\uFF0C\u53EF\u4EE5\u5355\u72EC\u4F7F\u7528\uFF0C\u4E5F\u53EF\u4EE5\u7EC4\u5408\u8D77\u6765\u5B9E\u73B0\u590D\u6742\u7684\u5C55\u793A\u6548\u679C\u3002

> \u56FE\u8868\u7684\u4F5C\u7528\uFF0C\u662F\u5E2E\u52A9\u6211\u4EEC\u66F4\u597D\u5730\u770B\u61C2\u6570\u636E\u3002\u9009\u62E9\u4EC0\u4E48\u56FE\u8868\uFF0C\u9700\u8981\u56DE\u7B54\u7684\u9996\u8981\u95EE\u9898\u662F\u300E\u6211\u6709\u4EC0\u4E48\u6570\u636E\uFF0C\u9700\u8981\u7528\u56FE\u8868\u505A\u4EC0\u4E48\u300F\uFF0C\u800C\u4E0D\u662F \u300E\u56FE\u8868\u957F\u6210\u4EC0\u4E48\u6837\u300F \u3002

| \u5206\u7C7B\u540D | \u7EC4\u4EF6\u6E05\u5355 | \u63CF\u8FF0
| ----- | ------- | ---
| \u6BD4\u8F83\u7C7B | \u8FF7\u4F60\u67F1\u72B6\u56FE\uFF1A\`g2-mini-bar\`<br>\u5355\u4E00\u67F1\u72B6\u56FE\uFF1A\`g2-single-bar\`<br>\u67F1\u72B6\u56FE\uFF1A\`g2-bar\`<br>\u96F7\u8FBE\u56FE\uFF1A\`g2-radar\`<br>\u8FF7\u4F60\u533A\u57DF\u56FE\uFF1A\`g2-mini-area\`<br>\u8FF7\u4F60\u8FDB\u5EA6\u6761\uFF1A\`g2-mini-progress\` | -
| \u5206\u5E03\u7C7B | \u6298\u7EBF\u56FE\uFF1A\`g2-timeline\` | -
| \u5360\u6BD4\u7C7B | \u997C\u56FE\uFF1A\`g2-pie\`<br>\u6C34\u6CE2\u56FE\uFF1A\`g2-water-wave\`<br>\u8FF7\u4F60\u8FDB\u5EA6\u6761\uFF1A\`g2-mini-progress\`<br>\u8FF7\u4F60\u533A\u57DF\u56FE\uFF1A\`g2-mini-area\` | -
| \u533A\u95F4\u7C7B | \u4EEA\u8868\u76D8\uFF1A\`g2-gauge\`<br>\u8FF7\u4F60\u533A\u57DF\u56FE\uFF1A\`g2-mini-area\` | -
| \u8D8B\u52BF\u7C7B | \u6298\u7EBF\u56FE\uFF1A\`g2-timeline\`<br>\u8FF7\u4F60\u533A\u57DF\u56FE\uFF1A\`g2-mini-area\` | -
| \u65F6\u95F4\u7C7B | \u6298\u7EBF\u56FE\uFF1A\`g2-timeline\`<br>\u8FF7\u4F60\u533A\u57DF\u56FE\uFF1A\`g2-mini-area\` | -
| \u5176\u5B83 | \u6807\u7B7E\u4E91\uFF1A\`g2-tag-cloud\`<br>\u56FE\u8868\u5361\u7247\uFF1A\`g2-chart-card\`<br>\u81EA\u5B9A\u4E49\u56FE\u8868\uFF1A\`g2-chart\` | -

## \u5982\u4F55\u4F7F\u7528

### G2\u7C7B\u5E93\u52A0\u8F7D

\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5728[\u5168\u5C40\u914D\u7F6E](/docs/global-config)\u5DF2\u7ECF\u6307\u5B9A\u7C7B\u5E93 CDN \u5730\u5740\uFF1A

\`\`\`ts
// global-config.module.ts
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
}
\`\`\`

\u5F53\u7136\u4E5F\u53EF\u4EE5\u5728 \`index.html\` \u76F4\u63A5\u5F15\u5165 CDN \u5730\u5740\uFF0C\u4F8B\u5982\uFF1A

\`\`\`html
<!-- \u5F15\u5165\u5728\u7EBF\u8D44\u6E90\uFF0C\u9009\u62E9\u4F60\u9700\u8981\u7684 g2 \u7248\u672C\u4EE5\u66FF\u6362 version \u53D8\u91CF -->
<script src="https://gw.alipayobjects.com/os/lib/antv/g2/{{version}}/dist/g2.min.js"><\/script>
\`\`\`

\u4E5F\u53EF\u4EE5\u5728 \`angular.json\` \u914D\u7F6E \`assets\` \u9009\u9879\uFF08\u6709\u5173 [assets](https://angular.cn/guide/workspace-config#assets-configuration) \u6587\u6863\uFF09\uFF0C\u4ECE \`node_modules\` \u6765\u83B7\u5F97G2\u7C7B\u5E93\uFF0C\u4F8B\u5982\uFF1A

\`\`\`json
"assets": [
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
]
\`\`\`

\u6700\u540E\u4FEE\u6539\u5168\u5C40\u914D\u7F6E\u7684 \`libs\` \u53C2\u6570\u4E3A\uFF1A

\`\`\`ts
// global-config.module.ts
const alainConfig: AlainConfig = {
  chart: { 
    libs: [
      './assets/@antv/g2/g2.min.js',
      './assets/@antv/data-set/data-set.js',
    ],
  },
};
\`\`\`

### \u5BFC\u5165\u6A21\u5757

\`\`\`ts
// shared.module.ts
import { G2BarModule } from '@delon/chart/bar';

@NgModule({
  imports: [ G2BarModule ],
  exports: [ G2BarModule ]
})
\`\`\`

## \u81EA\u5B9A\u4E49 G2 \u7EC4\u4EF6

\u4F7F\u7528 [g2-chart](/chart/custom) \u7EC4\u4EF6\u5FEB\u901F\u81EA\u5B9A\u4E49\u4E00\u4E2A\u56FE\u8868\uFF0C\u53EF\u4EE5\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u7EC4\u4EF6\u6E32\u67D3\u8FC7\u7A0B\u4E2D\u6240\u4EA7\u751F\u7684\u5947\u602A\u95EE\u9898\u3002

## \u914D\u7F6E\u56FE\u8868\u4E3B\u9898

\u5BF9\u6240\u6709 G2 \u8FDB\u884C\u914D\u7F6E\u56FE\u8868\u4E3B\u9898\uFF0C\u4F46\u53EA\u63D0\u4F9B\u63A5\u53E3\uFF0C\u6709\u5173\u914D\u7F6E\u56FE\u8868\u4E3B\u9898\u53C2\u6570\uFF0C\u8BF7\u53C2\u8003[G2\u5B98\u7F51](https://g2.antv.vision/zh/docs/manual/tutorial/theme)\u3002

\`\`\`ts
// global-config.module.ts
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
}
\`\`\``}}};codes=[];static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-getting-started`]],hostAttrs:[1,`d-block`],decls:1,vars:2,consts:[[3,`codes`,`item`]],template:function(t,n){t&1&&lt$1(0,`app-docs`,0),t&2&&re(`codes`,n.codes)(`item`,n.item)},dependencies:[rt$1],encapsulation:2})};var Gt=class a{cogSrv=u(rn$1);lazySrv=u(Gw);_cog;loading=!1;loaded=!1;notify$=new w;get cog(){return this._cog}set cog(e){this._cog=this.cogSrv.merge(`chart`,{theme:``,libs:[`https://gw.alipayobjects.com/os/lib/antv/g2/4.1.46/dist/g2.min.js`,`https://gw.alipayobjects.com/os/lib/antv/data-set/0.11.8/dist/data-set.js`]},e)}constructor(){this.cog={theme:``}}libLoad(){return this.loading?(this.loaded&&this.notify$.next(),this):(this.loading=!0,this.lazySrv.load(this.cog.libs).then(()=>{this.loaded=!0,this.notify$.next()}),this)}get notify(){return this.notify$.asObservable()}ngOnDestroy(){this.notify$.unsubscribe()}static ɵfac=function(t){return new(t||a)};static ɵprov=_({token:a,factory:a.ɵfac,providedIn:`root`})};var Pa=[`container`];var rt=class rt{srv=u(Gt);el=u(j);ngZone=u(H);platform=u(ye$1);cdr=u(qe);get chart(){return this._chart}get winG2(){return window.G2}constructor(){this.theme=this.srv.cog.theme,this.srv.notify.pipe(Le$1(this.destroy$),ee(()=>!this.loaded)).subscribe(()=>this.load())}repaint=!0;node;resize$;destroy$=new w;_chart;loaded=!1;delay=0;theme;ready=new k;onlyChangeData;changeData(){}onInit(){}onChanges(e){}load(){this.ngZone.run(()=>{this.loaded=!0,this.cdr.detectChanges()}),setTimeout(()=>this.install(),this.delay)}ngOnInit(){this.platform.isBrowser&&(this.onInit(),this.winG2?this.load():this.srv.libLoad())}ngOnChanges(e){if(this.onChanges(e),this.onlyChangeData?this.onlyChangeData(e):Object.keys(e).length===1&&!!e.data){this.changeData();return}!this.chart||!this.repaint||this.ngZone.runOutsideAngular(()=>{this.destroyChart().install()})}destroyChart(){return this._chart&&this._chart.destroy(),this}ngOnDestroy(){this.resize$&&this.resize$.unsubscribe(),this.destroy$.next(),this.destroy$.complete(),this.destroyChart()}static ɵfac=function(t){return new(t||rt)};static ɵdir=V({type:rt,viewQuery:function(t,n){if(t&1&&Un(Pa,7),t&2){let s;Ue$1(s=$e$1())&&(n.node=s.first)}},inputs:{repaint:[2,`repaint`,`repaint`,N],delay:[2,`delay`,`delay`,_o$1],theme:`theme`},outputs:{ready:`ready`},features:[Me$1]})};gj([Zo$1()],rt.prototype,`load`,1),gj([Zo$1()],rt.prototype,`destroyChart`,1);var U=rt;function kt(a,e){let t=g({showTitle:!1,showMarkers:!0,enterable:!0,domStyles:{"g2-tooltip":{padding:`0px`},"g2-tooltip-title":{display:`none`},"g2-tooltip-list-item":{margin:`4px`}}},e);return a===`mini`&&(t.position=`top`,t.domStyles[`g2-tooltip`]={padding:`0px`,backgroundColor:`transparent`,boxShadow:`none`},t.itemTpl=`<li>{value}</li>`,t.offset=8),t}function Fa(a,e){if(a&1&&(Qt$1(0),ne(1,`h4`,2),en$1(2),le(),Xt$1()),a&2){let t=R();I(2),fr(t.title)}}function Ra(a,e){a&1&&lt$1(0,`nz-skeleton`)}var Oa=41;var dt=class a extends U{title;color=`rgba(24, 144, 255, 0.85)`;height=0;padding=`auto`;data=[];autoLabel=!0;interaction=`none`;clickItem=new k;getHeight(){return this.title?this.height-Oa:this.height}install(){let{node:e,padding:t,interaction:n,theme:s}=this,m=e.nativeElement,u=this._chart=new this.winG2.Chart({container:m,autoFit:!0,height:this.getHeight(),padding:t,theme:s});this.updatelabel(),u.axis(`y`,{title:null,line:null,tickLine:null}),u.scale({x:{type:`cat`},y:{min:0}}),u.tooltip({showTitle:!1}),n!==`none`&&u.interaction(n),u.legend(!1),u.interval().position(`x*y`).color(`x*y`,(M,D)=>{let f=this.data.find(v=>v.x===M&&v.y===D);return f&&f.color?f.color:this.color}).tooltip(`x*y`,(M,D)=>({name:M,value:D})),u.on(`interval:click`,M=>{this.ngZone.run(()=>this.clickItem.emit({item:M.data?.data,ev:M}))}),this.ready.next(u),this.changeData(),u.render(),this.installResizeEvent()}changeData(){let{_chart:e,data:t}=this;!e||!Array.isArray(t)||t.length<=0||e.changeData(t)}updatelabel(){let{node:e,data:t,_chart:n}=this,s=e.nativeElement.clientWidth,m=t.length*30;n.axis(`x`,s>m).render()}installResizeEvent(){!this.autoLabel||this.resize$||(this.resize$=Pc(window,`resize`).pipe(Le$1(this.destroy$),ee(()=>!!this._chart),Pn(200)).subscribe(()=>this.ngZone.runOutsideAngular(()=>this.updatelabel())))}static ɵfac=(()=>{let e;return function(n){return(e||(e=Yn(a)))(n||a)}})();static ɵcmp=_e({type:a,selectors:[[`g2-bar`]],hostVars:2,hostBindings:function(t,n){t&2&&xt(`height`,n.height,`px`)},inputs:{title:`title`,color:`color`,height:[2,`height`,`height`,_o$1],padding:`padding`,data:`data`,autoLabel:[2,`autoLabel`,`autoLabel`,N],interaction:`interaction`},outputs:{clickItem:`clickItem`},exportAs:[`g2Bar`],features:[Zt$1],decls:4,vars:2,consts:[[`container`,``],[4,`nzStringTemplateOutlet`],[2,`margin-bottom`,`20px`]],template:function(t,n){t&1&&(Ye(0,Fa,3,1,`ng-container`,1),he$1(1,Ra,1,0,`nz-skeleton`),lt$1(2,`div`,null,0)),t&2&&(re(`nzStringTemplateOutlet`,n.title),I(),fe(n.loaded?-1:1))},dependencies:[Zn,Y$1],encapsulation:2})};var Wa=[dt];var Nt=class a{static ɵfac=function(t){return new(t||a)};static ɵmod=J({type:a});static ɵinj=Q({imports:[sb,Ur,Z,Wa]})};var St=class a{msg=u(Ad);salesData=this.genData();genData(){return new Array(12).fill({}).map((e,t)=>({x:`${t+1}\u6708`,y:Math.floor(Math.random()*1e3)+200,color:t>5?`#f50`:void 0}))}refresh(){this.salesData=this.genData()}handleClick(e){this.msg.info(`${e.item.x} - ${e.item.y}`)}static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-bar-basic`]],decls:3,vars:2,consts:[[`nz-button`,``,`nzType`,`primary`,3,`click`],[`height`,`200`,3,`clickItem`,`title`,`data`]],template:function(t,n){t&1&&(ne(0,`button`,0),Fe(`click`,function(){return n.refresh()}),en$1(1,`Refresh`),le(),ne(2,`g2-bar`,1),Fe(`clickItem`,function(m){return n.handleClick(m)}),le()),t&2&&(I(2),re(`title`,`销售额趋势`)(`data`,n.salesData))},dependencies:[Q5,Hd,q5,K5,Nt,dt],encapsulation:2})};var wt=class a{item={name:`bar`,langs:[`zh-CN`],content:{"zh-CN":{meta:{title:`g2-bar`,subtitle:`柱状图`,cols:1,module:`import { G2BarModule } from '@delon/chart/bar';`,description:`使用垂直的柱子显示类别之间的数值比较。其中一个轴表示需要对比的分类维度，另一个轴代表相应的数值。`,group:`G2`,order:0,path:`packages/chart/bar/index.zh-CN.md`,url:`/chart/bar/zh`},text:`<p>\u4F7F\u7528\u5782\u76F4\u7684\u67F1\u5B50\u663E\u793A\u7C7B\u522B\u4E4B\u95F4\u7684\u6570\u503C\u6BD4\u8F83\u3002\u5176\u4E2D\u4E00\u4E2A\u8F74\u8868\u793A\u9700\u8981\u5BF9\u6BD4\u7684\u5206\u7C7B\u7EF4\u5EA6\uFF0C\u53E6\u4E00\u4E2A\u8F74\u4EE3\u8868\u76F8\u5E94\u7684\u6570\u503C\u3002</p>
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
<td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td>
<td>\`Array&lt;number</td>
<td>string&gt;</td>
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
<td>\`string</td>
<td>LooseObject\`</td>
</tr>
<tr>
<td><code>(clickItem)</code></td>
<td>\u70B9\u51FB\u9879\u56DE\u8C03</td>
<td><code>EventEmitter&lt;G2BarClickItem&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td>
<td><code>EventEmitter&lt;Chart&gt;</code></td>
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
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-bar`,title:`g2-bar`},{id:`g2bardata`,title:`G2BarData`}]}],raw:"---\ntitle: g2-bar\nsubtitle: 柱状图\ncols: 1\ntype: G2\nmodule: import { G2BarModule } from '@delon/chart/bar';\n---\n\n使用垂直的柱子显示类别之间的数值比较。其中一个轴表示需要对比的分类维度，另一个轴代表相应的数值。\n\n## API\n\n### g2-bar\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |\n| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |\n| `[title]` | 图表标题 | `string,TemplateRef<void>` | - |\n| `[color]` | 图表颜色 | `string` | `rgba(24, 144, 255, 0.85)` |\n| `[padding]` | 图表内部间距 | `Array<number | string> | string` | `[32, 0, 32, 40]` |\n| `[height]` | 图表高度 | `number` | - |\n| `[data]` | 数据 | `G2BarData[]` | `[]` |\n| `[autoLabel]` | 在宽度不足时，自动隐藏 x 轴的 label | `boolean` | `true` |\n| `[interaction]` | 交互类型，none 无 element-active 图形元素，active-region 图表组件，brush 框选，drag-move 移动 | `InteractionType` | `none` |\n| `[theme]` | 定制图表主题 | `string | LooseObject` | - |\n| `(clickItem)` | 点击项回调 | `EventEmitter<G2BarClickItem>` | - |\n| `(ready)` | 当G2完成初始化后调用 | `EventEmitter<Chart>` | - |\n\n### G2BarData\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[x]` | x轴 | `any` | - |\n| `[y]` | y轴 | `any` | - |\n| `[color]` | 轴颜色 | `string` | - |"}}};codes=[{id:`chart-bar-basic`,name:`basic`,title:{"zh-CN":`基本`,"en-US":`Basic`},code:`import { Component, inject } from '@angular/core';

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
export class ChartBarBasic {
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
}`,order:0,type:`demo`,summary:{"en-US":``,"zh-CN":`<p>\u901A\u8FC7\u8BBE\u7F6E <code>x</code>\uFF0C<code>y</code> \u5C5E\u6027\uFF0C\u53EF\u4EE5\u5FEB\u901F\u7684\u6784\u5EFA\u51FA\u4E00\u4E2A\u6F02\u4EAE\u7684\u67F1\u72B6\u56FE\uFF0C\u5404\u79CD\u7EAC\u5EA6\u7684\u5173\u7CFB\u5219\u662F\u901A\u8FC7\u81EA\u5B9A\u4E49\u7684\u6570\u636E\u5C55\u73B0\u3002</p>
`},summary_raw:{"en-US":``,"zh-CN":"通过设置 `x`，`y` 属性，可以快速的构建出一个漂亮的柱状图，各种纬度的关系则是通过自定义的数据展现。\n"},path:`packages/chart/bar/demo/basic.md`}];static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-bar`]],hostAttrs:[1,`d-block`],decls:5,vars:5,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`24`],[3,`item`]],template:function(t,n){t&1&&(ne(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),lt$1(4,`chart-bar-basic`),le()()()()),t&2&&(re(`codes`,n.codes)(`item`,n.item),I(),re(`nzGutter`,16),I(2),re(`item`,n.codes[0]),Vt$1(`id`,n.codes[0].id))},dependencies:[rt$1,St,ln$1,Ue$2,X],encapsulation:2})};var $a=[`*`];var La=()=>({padding:`20px 24px 8px 24px`});function Ua(a,e){if(a&1&&(Qt$1(0),en$1(1),Xt$1()),a&2){let t=R();I(),fr(t.avatar)}}function qa(a,e){if(a&1&&(Qt$1(0),en$1(1),Xt$1()),a&2){let t=R(2);I(),fr(t.title)}}function Ha(a,e){if(a&1&&(ne(0,`span`,7),Ye(1,qa,2,1,`ng-container`,4),le()),a&2){let t=R();I(),re(`nzStringTemplateOutlet`,t.title)}}function Va(a,e){if(a&1&&(Qt$1(0),en$1(1),Xt$1()),a&2){let t=R(2);I(),fr(t.action)}}function Za(a,e){if(a&1&&(ne(0,`span`,8),Ye(1,Va,2,1,`ng-container`,4),le()),a&2){let t=R();I(),re(`nzStringTemplateOutlet`,t.action)}}function Qa(a,e){if(a&1&&lt$1(0,`p`,9),a&2)re(`innerHTML`,R().total,fa)}function Ja(a,e){if(a&1&&(Qt$1(0),en$1(1),Xt$1()),a&2){let t=R(2);I(),fr(t.footer)}}function Ya(a,e){if(a&1&&(ne(0,`div`,11),Ye(1,Ja,2,1,`ng-container`,4),le()),a&2){let t=R();I(),re(`nzStringTemplateOutlet`,t.footer)}}var ue=class a{cdr=u(qe);bordered=!1;avatar;title;action;total=``;_height=`auto`;_orgHeight;set contentHeight(e){this._orgHeight=e,this._height=typeof e==`number`?this._height=`${e}px`:e}footer;loading=!1;ngOnChanges(){this.cdr.detectChanges()}static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`g2-card`]],hostVars:2,hostBindings:function(t,n){t&2&&We$1(`g2-card`,!0)},inputs:{bordered:[2,`bordered`,`bordered`,N],avatar:`avatar`,title:`title`,action:`action`,total:`total`,contentHeight:`contentHeight`,footer:`footer`,loading:[2,`loading`,`loading`,N]},exportAs:[`g2Card`],features:[Me$1],ngContentSelectors:$a,decls:14,vars:13,consts:[[3,`nzBodyStyle`,`nzBordered`],[3,`nzSpinning`],[1,`g2-card__top`],[1,`g2-card__avatar`],[4,`nzStringTemplateOutlet`],[1,`g2-card__meta-wrap`],[1,`g2-card__meta`],[1,`g2-card__meta-title`],[1,`g2-card__meta-action`],[1,`g2-card__total`,3,`innerHTML`],[1,`g2-card__desc`],[1,`g2-card__footer`]],template:function(t,n){t&1&&(hn$1(),ne(0,`nz-card`,0)(1,`nz-spin`,1)(2,`div`,2)(3,`div`,3),Ye(4,Ua,2,1,`ng-container`,4),le(),ne(5,`div`,5)(6,`div`,6),he$1(7,Ha,2,1,`span`,7),he$1(8,Za,2,1,`span`,8),le(),he$1(9,Qa,1,1,`p`,9),le()(),ne(10,`div`,10)(11,`div`),Bt$1(12),le()(),he$1(13,Ya,2,1,`div`,11),le()()),t&2&&(re(`nzBodyStyle`,GP(12,La))(`nzBordered`,n.bordered),I(),re(`nzSpinning`,n.loading),I(3),re(`nzStringTemplateOutlet`,n.avatar),I(3),fe(n.title?7:-1),I(),fe(n.action?8:-1),I(),fe(n.total?9:-1),I(),xt(`height`,n._height),I(),We$1(`g2-card__fixed`,!!n._orgHeight),I(2),fe(n.footer?13:-1))},dependencies:[Fe$1,gn$1,Zn],encapsulation:2})};var Ka=[ue];var Re=class a{static ɵfac=function(t){return new(t||a)};static ɵmod=J({type:a});static ɵinj=Q({imports:[sb,et,Sn,Ur,Ka]})};var Xa=[`*`];function eo(a,e){if(a&1&&(ne(0,`span`),lt$1(1,`nz-icon`,1),le()),a&2){let t=R();At$1(Uh(`trend__`,t.flag)),I(),re(`nzType`,Uh(`caret-`,t.flag))}}var ye=class a{flag;colorful=!0;reverseColor=!1;static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`trend`]],hostVars:7,hostBindings:function(t,n){t&2&&(Vt$1(`data-flag`,n.flag),We$1(`trend`,!0)(`trend__grey`,!n.colorful)(`trend__reverse`,n.colorful&&n.reverseColor))},inputs:{flag:`flag`,colorful:[2,`colorful`,`colorful`,N],reverseColor:[2,`reverseColor`,`reverseColor`,N]},exportAs:[`trend`],ngContentSelectors:Xa,decls:2,vars:1,consts:[[3,`class`],[3,`nzType`]],template:function(t,n){t&1&&(hn$1(),Bt$1(0),he$1(1,eo,2,5,`span`,0)),t&2&&(I(),fe(n.flag?1:-1))},dependencies:[Yt$1],encapsulation:2})};var Oe=class a{static ɵfac=function(t){return new(t||a)};static ɵmod=J({type:a});static ɵinj=Q({imports:[sb,Cr]})};function to(a,e){a&1&&lt$1(0,`nz-icon`,4)}var It=class a{static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-card-style1`]],decls:9,vars:4,consts:[[`action`,``],[`footer`,`日访问量 12,423`,`contentHeight`,`46`,3,`title`,`bordered`,`total`,`action`],[`flag`,`up`,2,`margin`,`0 16px 0 8px`,`color`,`rgba(0,0,0,.85)`],[`flag`,`down`,2,`margin`,`0 0 0 8px`,`color`,`rgba(0,0,0,.85)`],[`nz-tooltip`,``,`nzTooltipTitle`,`指标说明`,`nzType`,`info-circle`]],template:function(t,n){if(t&1&&(ne(0,`g2-card`,1),Ye(1,to,1,0,`ng-template`,null,0,Tl),en$1(3,` 周同比 `),ne(4,`trend`,2),en$1(5,`12%`),le(),en$1(6,` 日环比 `),ne(7,`trend`,3),en$1(8,`11%`),le()()),t&2){let s=xl(2);re(`title`,`销售额`)(`bordered`,!0)(`total`,`¥ 126,560.00`)(`action`,s)}},dependencies:[Re,ue,Nc,bc,Oe,ye],encapsulation:2})};function ao(a,e){a&1&&lt$1(0,`img`,3)}function oo(a,e){a&1&&lt$1(0,`nz-icon`,4)}var Et=class a{static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-card-style2`]],decls:5,vars:5,consts:[[`avatar`,``],[`action`,``],[`footer`,`日访问量 12,423`,3,`title`,`bordered`,`total`,`avatar`,`action`],[`src`,`./assets/img/logo-color.svg`,2,`width`,`56px`,`height`,`56px`],[`nz-tooltip`,``,`nzTooltipTitle`,`指标说明`,`nzType`,`info-circle`]],template:function(t,n){if(t&1&&(ne(0,`g2-card`,2),Ye(1,ao,1,0,`ng-template`,null,0,Tl)(3,oo,1,0,`ng-template`,null,1,Tl),le()),t&2){let s=xl(2),m=xl(4);re(`title`,`移动指标`)(`bordered`,!0)(`total`,`¥ 126,560.00`)(`avatar`,s)(`action`,m)}},dependencies:[Re,ue,Nc,bc,Cr,Yt$1],encapsulation:2})};function io(a,e){a&1&&lt$1(0,`img`,3)}function ro(a,e){a&1&&lt$1(0,`nz-icon`,4)}var At=class a{static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-card-style3`]],decls:5,vars:5,consts:[[`avatar`,``],[`action`,``],[3,`title`,`bordered`,`total`,`avatar`,`action`],[`src`,`./assets/img/logo-color.svg`,2,`width`,`56px`,`height`,`56px`],[`nz-tooltip`,``,`nzTooltipTitle`,`指标说明`,`nzType`,`info-circle`]],template:function(t,n){if(t&1&&(ne(0,`g2-card`,2),Ye(1,io,1,0,`ng-template`,null,0,Tl)(3,ro,1,0,`ng-template`,null,1,Tl),le()),t&2){let s=xl(2),m=xl(4);re(`title`,`移动指标`)(`bordered`,!0)(`total`,`¥ 126,560.00`)(`avatar`,s)(`action`,m)}},dependencies:[Re,ue,Nc,bc,Cr,Yt$1],encapsulation:2})};var Bt=class a{item={name:`card`,langs:[`zh-CN`],content:{"zh-CN":{meta:{title:`g2-card`,subtitle:`图表卡片`,cols:2,module:`import { G2CardModule } from '@delon/chart/card';`,description:`图表卡片，用于展示图表的卡片容器，可以方便的配合其它图表套件展示丰富信息。`,group:`G2`,order:0,path:`packages/chart/card/index.zh-CN.md`,url:`/chart/card/zh`},text:`<p>\u56FE\u8868\u5361\u7247\uFF0C\u7528\u4E8E\u5C55\u793A\u56FE\u8868\u7684\u5361\u7247\u5BB9\u5668\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u7684\u914D\u5408\u5176\u5B83\u56FE\u8868\u5957\u4EF6\u5C55\u793A\u4E30\u5BCC\u4FE1\u606F\u3002</p>
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
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-card`,title:`g2-card`}]}],raw:"---\ntitle: g2-card\nsubtitle: 图表卡片\ncols: 2\ntype: G2\nmodule: import { G2CardModule } from '@delon/chart/card';\n---\n\n图表卡片，用于展示图表的卡片容器，可以方便的配合其它图表套件展示丰富信息。\n\n## API\n\n### g2-card\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[title]` | 卡片标题 | `string,TemplateRef<void>` | - |\n| `[avatar]` | 头像 | `string,TemplateRef<void>` | - |\n| `[action]` | 卡片操作 | `string,TemplateRef<void>` | - |\n| `[total]` | 数据总量（支持HTML） | `string` | - |\n| `[footer]` | 卡片底部 | `string,TemplateRef<void>` | - |\n| `[contentHeight]` | 内容区域高度（单位：`px`） | `string` | - |\n| `[bordered]` | 是否显示边框 | `boolean` | `false` |"}}};codes=[{id:`chart-card-style1`,name:`style1`,title:{"zh-CN":`风格一`,"en-US":`Style 1`},code:`import { Component } from '@angular/core';

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
export class ChartCardStyle1 {}`,order:0,type:`demo`,summary:{"en-US":``,"zh-CN":`<p>\u98CE\u683C\u4E00\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":``,"zh-CN":`\u98CE\u683C\u4E00\u7528\u6CD5\u3002
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
export class ChartCardStyle2 {}`,order:0,type:`demo`,summary:{"en-US":``,"zh-CN":`<p>\u98CE\u683C\u4E8C\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":``,"zh-CN":`\u98CE\u683C\u4E8C\u7528\u6CD5\u3002
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
export class ChartCardStyle3 {}`,order:0,type:`demo`,summary:{"en-US":``,"zh-CN":`<p>\u98CE\u683C\u4E09\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":``,"zh-CN":`\u98CE\u683C\u4E09\u7528\u6CD5\u3002
`},path:`packages/chart/card/demo/style3.md`}];static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-card`]],hostAttrs:[1,`d-block`],decls:10,vars:9,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`12`],[3,`item`]],template:function(t,n){t&1&&(ne(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),lt$1(4,`chart-card-style1`),le(),ne(5,`code-box`,3),lt$1(6,`chart-card-style3`),le()(),ne(7,`div`,2)(8,`code-box`,3),lt$1(9,`chart-card-style2`),le()()()()),t&2&&(re(`codes`,n.codes)(`item`,n.item),I(),re(`nzGutter`,16),I(2),re(`item`,n.codes[0]),Vt$1(`id`,n.codes[0].id),I(2),re(`item`,n.codes[2]),Vt$1(`id`,n.codes[2].id),I(3),re(`item`,n.codes[1]),Vt$1(`id`,n.codes[1].id))},dependencies:[rt$1,It,Et,At,ln$1,Ue$2,X],encapsulation:2})};var Pt=class a$1{dark=!1;two=!1;option1={tooltip:{formatter:`{a} <br/>{b} : {c}%`},series:[{name:`Pressure`,type:`gauge`,detail:{formatter:`{value}`},data:[{value:50,name:`SCORE`}]}]};option2={title:{text:`ECharts 入门示例`},tooltip:{},legend:{data:[`销量`]},xAxis:{data:[`衬衫`,`羊毛衫`,`雪纺衫`,`裤子`,`高跟鞋`,`袜子`]},yAxis:{},series:[{name:`销量`,type:`bar`,data:[5,20,36,10,10,20]}]};handleEvents(e){console.log(e)}static ɵfac=function(t){return new(t||a$1)};static ɵcmp=_e({type:a$1,selectors:[[`chart-chart-echarts-basic`]],decls:6,vars:3,consts:[[1,`mb-md`],[3,`ngModelChange`,`ngModel`],[`nz-button`,``,`nzType`,`primary`,3,`click`],[3,`events`,`option`,`theme`]],template:function(t,n){t&1&&(ne(0,`div`,0)(1,`nz-switch`,1),dy(`ngModelChange`,function(m){return FP(n.dark,m)||(n.dark=m),m}),le(),Hk(),en$1(2,` Dark `),ne(3,`button`,2),Fe(`click`,function(){return n.two=!n.two}),en$1(4,`Change Option`),le()(),ne(5,`chart-echarts`,3),Fe(`events`,function(m){return n.handleEvents(m)}),le()),t&2&&(I(),ly(`ngModel`,n.dark),Bk(),I(4),re(`option`,n.two?n.option1:n.option2)(`theme`,n.dark?`dark`:null))},dependencies:[jo$1,In,pi,ti$1,et$1,Q5,Hd,q5,K5,Q$1,a],encapsulation:2})};var Ft=class a$2{msg=u(Ad);dark=!1;two=!1;on=[{eventName:`click`,handler:({event:e,chart:t})=>{this.msg.info(`${e.type}: ${e.name} - ${e.value} (${t.id})`)}}];option={xAxis:{type:`category`,data:[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`]},yAxis:{type:`value`},series:[{data:[150,230,224,218,135,147,260],type:`line`}]};static ɵfac=function(t){return new(t||a$2)};static ɵcmp=_e({type:a$2,selectors:[[`chart-chart-echarts-on`]],decls:1,vars:2,consts:[[3,`option`,`on`]],template:function(t,n){t&1&&lt$1(0,`chart-echarts`,0),t&2&&re(`option`,n.option)(`on`,n.on)},dependencies:[Q$1,a],encapsulation:2})};var Rt=class a{item={name:`chart-echarts`,langs:[`zh-CN`],content:{"zh-CN":{meta:{title:`chart-echarts`,subtitle:`ECharts`,cols:1,module:`import { ChartEChartsModule } from '@delon/chart/chart-echarts';`,description:`ECharts 一个基于 JavaScript 的开源可视化图表库。使用懒加载 ECharts 脚本，开箱启用。`,group:`ECharts`,order:0,path:`packages/chart/chart-echarts/index.zh-CN.md`,url:`/chart/chart-echarts/zh`},text:`<p><a href="https://echarts.apache.org/zh/index.html" target="_blank" rel="noopener">ECharts</a> \u4E00\u4E2A\u57FA\u4E8E JavaScript \u7684\u5F00\u6E90\u53EF\u89C6\u5316\u56FE\u8868\u5E93\u3002\u4F7F\u7528\u61D2\u52A0\u8F7D ECharts \u811A\u672C\uFF0C\u5F00\u7BB1\u542F\u7528\u3002</p>
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
<td><code>[on]</code></td>
<td>\u7B49\u540C\u4E8E ECharts <a href="https://echarts.apache.org/zh/api.html#echartsInstance.on" target="_blank" rel="noopener">on</a></td>
<td><code>ChartEChartsOn[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(events)</code></td>
<td>\u4E8B\u4EF6\u56DE\u8C03</td>
<td><code>EventEmitter&lt;ChartEChartsEvent&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`chart-echarts`,title:`chart-echarts`}]}],raw:"---\ntitle: chart-echarts\nsubtitle: ECharts\ncols: 1\ntype: ECharts\nmodule: import { ChartEChartsModule } from '@delon/chart/chart-echarts';\n---\n\n[ECharts](https://echarts.apache.org/zh/index.html) 一个基于 JavaScript 的开源可视化图表库。使用懒加载 ECharts 脚本，开箱启用。\n\n## API\n\n### chart-echarts\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[width]` | 图表宽度 | `number, string` | `100%`|\n| `[height]` | 图表高度 | `number, string` | `400px`|\n| `[option]` | [配置项](https://echarts.apache.org/zh/option.html#title) | `ChartEChartsOption` | - |\n| `[theme]` | [主题](https://echarts.apache.org/zh/theme-builder.html)配置 | `string, object` | - |\n| `[on]` | 等同于 ECharts [on](https://echarts.apache.org/zh/api.html#echartsInstance.on) | `ChartEChartsOn[]` | - |\n| `(events)` | 事件回调 | `EventEmitter<ChartEChartsEvent>` | - |"}}};codes=[{id:`chart-chart-echarts-basic`,name:`basic`,title:{"zh-CN":`基本`,"en-US":`Basic`},code:`import { Component } from '@angular/core';
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
export class ChartChartEchartsBasic {
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
`},summary_raw:{"en-US":"Using the `on` attribute is equivalent to ECharts [on](https://echarts.apache.org/zh/api.html#echartsInstance.on).\n","zh-CN":"使用 `on` 属性，等同于 ECharts [on](https://echarts.apache.org/zh/api.html#echartsInstance.on)。\n"},path:`packages/chart/chart-echarts/demo/on.md`}];static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-chart-echarts`]],hostAttrs:[1,`d-block`],decls:7,vars:7,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`24`],[3,`item`]],template:function(t,n){t&1&&(ne(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),lt$1(4,`chart-chart-echarts-basic`),le(),ne(5,`code-box`,3),lt$1(6,`chart-chart-echarts-on`),le()()()()),t&2&&(re(`codes`,n.codes)(`item`,n.item),I(),re(`nzGutter`,16),I(2),re(`item`,n.codes[0]),Vt$1(`id`,n.codes[0].id),I(2),re(`item`,n.codes[1]),Vt$1(`id`,n.codes[1].id))},dependencies:[rt$1,Pt,Ft,ln$1,Ue$2,X],encapsulation:2})};var lo=[`*`];function so(a,e){a&1&&lt$1(0,`nz-skeleton`)}var ct=class a extends U{height;resizeTime=0;render=new k;resize=new k;destroy=new k;install(){this.el.nativeElement.innerHTML=``,this.render.emit(this.el),this.installResizeEvent()}installResizeEvent(){this.resizeTime<=0||Pc(window,`resize`).pipe(Le$1(this.destroy$),Pn(Math.min(200,this.resizeTime))).subscribe(()=>this.resize.emit(this.el))}static ɵfac=(()=>{let e;return function(n){return(e||(e=Yn(a)))(n||a)}})();static ɵcmp=_e({type:a,selectors:[[`g2`],[`g2-custom`]],hostVars:2,hostBindings:function(t,n){t&2&&xt(`height`,n.height,`px`)},inputs:{height:[2,`height`,`height`,_o$1],resizeTime:[2,`resizeTime`,`resizeTime`,_o$1]},outputs:{render:`render`,resize:`resize`,destroy:`destroy`},exportAs:[`g2Custom`],features:[Zt$1],ngContentSelectors:lo,decls:2,vars:1,template:function(t,n){t&1&&(hn$1(),he$1(0,so,1,0,`nz-skeleton`),Bt$1(1)),t&2&&fe(n.loaded?-1:0)},dependencies:[Y$1],encapsulation:2})};var po=[ct];var Ot=class a{static ɵfac=function(t){return new(t||a)};static ɵmod=J({type:a});static ɵinj=Q({imports:[sb,Z,po]})};var jt=class a{ngZone=u(H);render(e){this.ngZone.runOutsideAngular(()=>this.init(e.nativeElement))}init(e){let t=[{action:`浏览网站`,pv:5e4,percent:0},{action:`放入购物车`,pv:35e3,percent:0},{action:`生成订单`,pv:25e3,percent:0},{action:`支付订单`,pv:15e3,percent:0},{action:`完成交易`,pv:8e3,percent:0}].map(s=>(s.percent=s.pv/5e4,s)),n=new window.G2.Chart({container:e,autoFit:!0,height:500,width:e.clientWidth,padding:[20,120,95]});n.data(t),n.axis(!1),n.tooltip({showTitle:!1,showMarkers:!1,itemTpl:`<li style="margin-bottom:4px;list-style-type:none;padding: 0;"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}<br/><span style="padding-left: 16px;line-height: 16px;">浏览人数：{pv}</span><br/><span style="padding-left: 16px;line-height: 16px;">占比：{percent}</span><br/></li>`}),n.coordinate(`rect`).transpose().scale(1,-1),n.interval().adjust(`symmetric`).position(`action*percent`).shape(`funnel`).color(`action`,[`#0050B3`,`#1890FF`,`#40A9FF`,`#69C0FF`,`#BAE7FF`]).label(`action*pv`,(s,m)=>({content:`${s} ${m}`}),{offset:35,labelLine:{style:{lineWidth:1,stroke:`rgba(0, 0, 0, 0.15)`}}}).tooltip(`action*pv*percent`,(s,m,u)=>({name:s,percent:`${+u*100}%`,pv:m})).animate({appear:{animation:`fade-in`},update:{}}),n.interaction(`element-active`),n.on(`beforepaint`,()=>{n.annotation().clear(!0),n.getData().forEach(m=>{n.annotation().text({top:!0,position:{action:m.action,percent:`median`},content:`${+m.percent*100}%`,style:{stroke:null,fill:`#fff`,textAlign:`center`}})})}),n.render()}static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-custom-basic`]],decls:1,vars:0,consts:[[`delay`,`100`,3,`render`]],template:function(t,n){t&1&&(ne(0,`g2-custom`,0),Fe(`render`,function(m){return n.render(m)}),le())},dependencies:[Ot,ct],encapsulation:2})};var Wt=class a{item={name:`custom`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{title:`g2-chart`,subtitle:`Custom Chart`,cols:1,module:`import { G2CustomModule } from '@delon/chart/custom';`,description:`Use g2-custom component to package your G2 chart.A simple example template:If throw error G2 not found, please refer to Frequently Asked Questions.G2 ...`,group:`G2`,order:0,path:`packages/chart/custom/index.en-US.md`,url:`/chart/custom/en`},text:`<p>Use <code>g2-custom</code> component to package your G2 chart.</p>
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
<li><a href="https://www.yuque.com/antv/g2-docs-en" target="_blank" rel="noopener">G2 Document</a></li>
<li><a href="https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html" target="_blank" rel="noopener">G2 Demo</a></li>
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
<td>Resize event debounce time</td>
<td><code>number</code></td>
<td><code>200</code></td>
</tr>
<tr>
<td><code>(render)</code></td>
<td>Render event</td>
<td><code>EventEmitter&lt;ElementRef&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(resize)</code></td>
<td>Resize event</td>
<td><code>EventEmitter&lt;ElementRef&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(destroy)</code></td>
<td>Destroy event</td>
<td><code>EventEmitter&lt;ElementRef&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td>Custom chart theme</td>
<td>\`string</td>
<td>LooseObject\`</td>
</tr>
</tbody></table>
`,toc:[{id:`how_to_use`,title:`How to use`,children:[{id:`how_to_develop_g2`,title:`How to develop G2`}]},{id:`links`,title:`Links`},{id:`api`,title:`API`,children:[{id:`g2-custom`,title:`g2-custom`}]}],raw:`---
title: g2-chart
subtitle: Custom Chart
cols: 1
type: G2
module: import { G2CustomModule } from '@delon/chart/custom';
---

Use \`g2-custom\` component to package your G2 chart.

## How to use

A simple example template:

\`\`\`ts
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: \`
  <g2-custom (render)="render($event)"></g2-custom>
  \`,
})
export class DemoComponent {
  render(el: ElementRef) {
    // Coding G2 code
  }
}
\`\`\`

### How to develop G2

If throw error \`G2\` not found, please refer to [Frequently Asked Questions](/chart/faq).

## Links

- [G2 Document](https://www.yuque.com/antv/g2-docs-en)
- [G2 Demo](https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html)

## API

### g2-custom

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| \`[delay]\` | Delayed rendering, unit: ms | \`number\` | \`0\` |
| \`[height]\` | Height of chart container | \`number\` | - |
| \`[resizeTime]\` | Resize event debounce time | \`number\` | \`200\` |
| \`(render)\` | Render event | \`EventEmitter<ElementRef>\` | - |
| \`(resize)\` | Resize event | \`EventEmitter<ElementRef>\` | - |
| \`(destroy)\` | Destroy event | \`EventEmitter<ElementRef>\` | - |
| \`[theme]\` | Custom chart theme | \`string | LooseObject\` | - |`},"zh-CN":{meta:{title:`g2-chart`,subtitle:`自定义图表`,cols:1,module:`import { G2CustomModule } from '@delon/chart/custom';`,description:`使用 g2-custom 组件可以更快速的封装自己的图表组件。一个简单示例模板：可能你会遇到未找到 G2，请参考常见问题。G2 文档G2 示例`,group:`G2`,order:0,path:`packages/chart/custom/index.zh-CN.md`,url:`/chart/custom/zh`},text:`<p>\u4F7F\u7528 <code>g2-custom</code> \u7EC4\u4EF6\u53EF\u4EE5\u66F4\u5FEB\u901F\u7684\u5C01\u88C5\u81EA\u5DF1\u7684\u56FE\u8868\u7EC4\u4EF6\u3002</p>
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
<li><a href="https://www.yuque.com/antv/g2-docs" target="_blank" rel="noopener">G2 \u6587\u6863</a></li>
<li><a href="https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html" target="_blank" rel="noopener">G2 \u793A\u4F8B</a></li>
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
<td>resize \u4E8B\u4EF6\u53BB\u6296\u65F6\u957F</td>
<td><code>number</code></td>
<td><code>200</code></td>
</tr>
<tr>
<td><code>(render)</code></td>
<td>\u6E32\u67D3\u4E8B\u4EF6</td>
<td><code>EventEmitter&lt;ElementRef&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(resize)</code></td>
<td>resize \u4E8B\u4EF6</td>
<td><code>EventEmitter&lt;ElementRef&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(destroy)</code></td>
<td>\u9500\u6BC1\u4E8B\u4EF6</td>
<td><code>EventEmitter&lt;ElementRef&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td>
<td>\`string</td>
<td>LooseObject\`</td>
</tr>
</tbody></table>
`,toc:[{id:`如何使用`,title:`如何使用`,children:[{id:`如何开发_g2`,title:`如何开发 G2`}]},{id:`链接`,title:`链接`},{id:`api`,title:`API`,children:[{id:`g2-custom`,title:`g2-custom`}]}],raw:`---
title: g2-chart
subtitle: \u81EA\u5B9A\u4E49\u56FE\u8868
cols: 1
type: G2
module: import { G2CustomModule } from '@delon/chart/custom';
---

\u4F7F\u7528 \`g2-custom\` \u7EC4\u4EF6\u53EF\u4EE5\u66F4\u5FEB\u901F\u7684\u5C01\u88C5\u81EA\u5DF1\u7684\u56FE\u8868\u7EC4\u4EF6\u3002

## \u5982\u4F55\u4F7F\u7528

\u4E00\u4E2A\u7B80\u5355\u793A\u4F8B\u6A21\u677F\uFF1A

\`\`\`ts
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: \`
  <g2-custom (render)="render($event)"></g2-custom>
  \`,
})
export class DemoComponent {
  render(el: ElementRef) {
    // \u5F00\u59CB\u7F16\u5199 G2 \u4EE3\u7801
  }
}
\`\`\`

### \u5982\u4F55\u5F00\u53D1 G2

\u53EF\u80FD\u4F60\u4F1A\u9047\u5230\u672A\u627E\u5230 \`G2\`\uFF0C\u8BF7\u53C2\u8003[\u5E38\u89C1\u95EE\u9898](/chart/faq)\u3002

## \u94FE\u63A5

- [G2 \u6587\u6863](https://www.yuque.com/antv/g2-docs)
- [G2 \u793A\u4F8B](https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html)

## API

### g2-custom

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |
|----|----|----|-----|
| \`[delay]\` | \u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2 | \`number\` | \`0\` |
| \`[height]\` | \u9AD8 | \`number\` | - |
| \`[resizeTime]\` | resize \u4E8B\u4EF6\u53BB\u6296\u65F6\u957F | \`number\` | \`200\` |
| \`(render)\` | \u6E32\u67D3\u4E8B\u4EF6 | \`EventEmitter<ElementRef>\` | - |
| \`(resize)\` | resize \u4E8B\u4EF6 | \`EventEmitter<ElementRef>\` | - |
| \`(destroy)\` | \u9500\u6BC1\u4E8B\u4EF6 | \`EventEmitter<ElementRef>\` | - |
| \`[theme]\` | \u5B9A\u5236\u56FE\u8868\u4E3B\u9898 | \`string | LooseObject\` | - |`}}};codes=[{id:`chart-custom-basic`,name:`basic`,title:{"zh-CN":`基础`,"en-US":`Basic`},code:`import { Component, ElementRef, NgZone, inject } from '@angular/core';

import type { Chart } from '@antv/g2';

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
}`,order:0,type:`demo`,summary:{"en-US":`<p>Copy <a href="https://antv.alipay.com/zh-cn/g2/3.x/demo/funnel/basic.html" target="_blank" rel="noopener">Basic Funnel Chart</a>\u3002</p>
`,"zh-CN":`<p>\u6A21\u4EFF\u81EA <a href="https://antv.alipay.com/zh-cn/g2/3.x/demo/funnel/basic.html" target="_blank" rel="noopener">antv\u57FA\u7840\u6F0F\u6597\u56FE</a>\u3002</p>
`},summary_raw:{"en-US":`Copy [Basic Funnel Chart](https://antv.alipay.com/zh-cn/g2/3.x/demo/funnel/basic.html)\u3002
`,"zh-CN":`\u6A21\u4EFF\u81EA [antv\u57FA\u7840\u6F0F\u6597\u56FE](https://antv.alipay.com/zh-cn/g2/3.x/demo/funnel/basic.html)\u3002
`},path:`packages/chart/custom/demo/basic.md`}];static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-custom`]],hostAttrs:[1,`d-block`],decls:5,vars:5,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`24`],[3,`item`]],template:function(t,n){t&1&&(ne(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),lt$1(4,`chart-custom-basic`),le()()()()),t&2&&(re(`codes`,n.codes)(`item`,n.item),I(),re(`nzGutter`,16),I(2),re(`item`,n.codes[0]),Vt$1(`id`,n.codes[0].id))},dependencies:[rt$1,jt,ln$1,Ue$2,X],encapsulation:2})};function uo(a,e){a&1&&lt$1(0,`nz-skeleton`)}var lt=class a extends U{title;height;color=`#2f9cff`;bgColor;format;percent;padding=[10,10,30,10];install(){this.winG2.registerShape(`point`,`pointer`,{draw(M,D){let f=D.addGroup({}),v=this.parsePoint({x:0,y:0});return f.addShape(`line`,{attrs:{x1:v.x,y1:v.y,x2:M.x,y2:M.y,stroke:M.color,lineWidth:2.5,lineCap:`round`}}),f.addShape(`circle`,{attrs:{x:v.x,y:v.y,r:5.75,stroke:M.color,lineWidth:2,fill:`#fff`}}),f}});let{el:e,height:t,padding:n,format:s,theme:m}=this,u=this._chart=new this.winG2.Chart({container:e.nativeElement,autoFit:!0,height:t,padding:n,theme:m});u.legend(!1),u.animate(!1),u.tooltip(!1),u.coordinate(`polar`,{startAngle:-9/8*Math.PI,endAngle:1/8*Math.PI,radius:.75}),u.scale(`value`,{min:0,max:100,nice:!0,tickCount:6}),u.axis(`1`,!1),u.axis(`value`,{line:null,label:{offset:-14,formatter:s},tickLine:null,grid:null}),u.point().position(`value*1`).shape(`pointer`),this.ready.next(u),this.changeData(),u.render()}changeData(){let{_chart:e,percent:t,color:n,bgColor:s,title:m}=this;if(!e)return;let u=[{name:m,value:t}],M=u[0].value;e.annotation().clear(!0),e.geometries[0].color(n),e.annotation().arc({top:!1,start:[0,.95],end:[100,.95],style:{stroke:s,lineWidth:12,lineDash:null}}),e.annotation().arc({start:[0,.95],end:[u[0].value,.95],style:{stroke:n,lineWidth:12,lineDash:null}}),e.annotation().text({position:[`50%`,`85%`],content:m,style:{fontSize:12,fill:this.theme===`dark`?`rgba(255, 255, 255, 0.43)`:`rgba(0, 0, 0, 0.43)`,textAlign:`center`}}),e.annotation().text({position:[`50%`,`90%`],content:`${M} %`,style:{fontSize:20,fill:this.theme===`dark`?`rgba(255, 255, 255, 0.85)`:`rgba(0, 0, 0, 0.85)`,textAlign:`center`},offsetY:15}),e.changeData(u)}static ɵfac=(()=>{let e;return function(n){return(e||(e=Yn(a)))(n||a)}})();static ɵcmp=_e({type:a,selectors:[[`g2-gauge`]],hostVars:2,hostBindings:function(t,n){t&2&&We$1(`g2-gauge`,!0)},inputs:{title:`title`,height:[2,`height`,`height`,_o$1],color:`color`,bgColor:`bgColor`,format:`format`,percent:[2,`percent`,`percent`,_o$1],padding:`padding`},exportAs:[`g2Gauge`],features:[Zt$1],decls:1,vars:1,template:function(t,n){t&1&&he$1(0,uo,1,0,`nz-skeleton`),t&2&&fe(n.loaded?-1:0)},dependencies:[Y$1],encapsulation:2})};var go=[lt];var $t=class a{static ɵfac=function(t){return new(t||a)};static ɵmod=J({type:a});static ɵinj=Q({imports:[sb,Z,go]})};var Lt=class a{percent=36;color=`#2f9cff`;time$;constructor(e,t){e.isBrowser&&(this.time$=setInterval(()=>{this.percent=parseInt((Math.random()*100).toString(),10),this.color=this.percent>50?`#f50`:`#2f9cff`,t.detectChanges()},1e3))}ngOnDestroy(){clearInterval(this.time$)}static ɵfac=function(t){return new(t||a)(vt$1(ye$1),vt$1(qe))};static ɵcmp=_e({type:a,selectors:[[`chart-gauge-basic`]],decls:1,vars:3,consts:[[`height`,`164`,3,`title`,`percent`,`color`]],template:function(t,n){t&1&&lt$1(0,`g2-gauge`,0),t&2&&re(`title`,`核销率`)(`percent`,n.percent)(`color`,n.color)},dependencies:[$t,lt],encapsulation:2})};var Ut=class a{item={name:`gauge`,langs:[`zh-CN`],content:{"zh-CN":{meta:{title:`g2-gauge`,subtitle:`仪表盘`,cols:1,module:`import { G2GaugeModule } from '@delon/chart/gauge';`,description:`一种进度展示方式，可以更直观的展示当前的进展情况，通常也可表示占比。`,group:`G2`,order:0,path:`packages/chart/gauge/index.zh-CN.md`,url:`/chart/gauge/zh`},text:`<p>\u4E00\u79CD\u8FDB\u5EA6\u5C55\u793A\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u66F4\u76F4\u89C2\u7684\u5C55\u793A\u5F53\u524D\u7684\u8FDB\u5C55\u60C5\u51B5\uFF0C\u901A\u5E38\u4E5F\u53EF\u8868\u793A\u5360\u6BD4\u3002</p>
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
<td><code>[padding]</code></td>
<td>\u5185\u8FB9\u8DDD</td>
<td>\`Array&lt;number</td>
<td>string&gt;\`</td>
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
<td>\`string</td>
<td>LooseObject\`</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td>
<td><code>EventEmitter&lt;Chart&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-gauge`,title:`g2-gauge`}]}],raw:"---\ntitle: g2-gauge\nsubtitle: 仪表盘\ncols: 1\ntype: G2\nmodule: import { G2GaugeModule } from '@delon/chart/gauge';\n---\n\n一种进度展示方式，可以更直观的展示当前的进展情况，通常也可表示占比。\n\n## API\n\n### g2-gauge\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |\n| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |\n| `[title]` | 图表标题 | `string` | - |\n| `[height]` | 图表高度 | `number` | - |\n| `[color]` | 图表颜色 | `string` | `#2F9CFF` |\n| `[bgColor]` | 图表背景色 | `string` | `#F0F2F5` |\n| `[percent]` | 进度比例 | `number` | - |\n| `[padding]` | 内边距 | `Array<number | string>` | `[10, 10, 30, 10]` |\n| `[format]` | 坐标轴格式 | `(text: string, item: {}, index: number) => string` | - |\n| `[theme]` | 定制图表主题 | `string | LooseObject` | - |\n| `(ready)` | 当G2完成初始化后调用 | `EventEmitter<Chart>` | - |"}}};codes=[{id:`chart-gauge-basic`,name:`basic`,title:{"zh-CN":`基础`,"en-US":`Basic`},code:`import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

import { G2GaugeModule } from '@delon/chart/gauge';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'chart-gauge-basic',
  template: \` <g2-gauge [title]="'\u6838\u9500\u7387'" height="164" [percent]="percent" [color]="color" /> \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [G2GaugeModule]
})
export class ChartGaugeBasic implements OnDestroy {
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
}`,order:0,type:`demo`,summary:{"en-US":``,"zh-CN":`<p>\u57FA\u7840\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":``,"zh-CN":`\u57FA\u7840\u7528\u6CD5\u3002
`},path:`packages/chart/gauge/demo/basic.md`}];static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-gauge`]],hostAttrs:[1,`d-block`],decls:5,vars:5,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`24`],[3,`item`]],template:function(t,n){t&1&&(ne(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),lt$1(4,`chart-gauge-basic`),le()()()()),t&2&&(re(`codes`,n.codes)(`item`,n.item),I(),re(`nzGutter`,16),I(2),re(`item`,n.codes[0]),Vt$1(`id`,n.codes[0].id))},dependencies:[rt$1,Lt,ln$1,Ue$2,X],encapsulation:2})};var be=class a extends U{color=`rgba(24, 144, 255, 0.2)`;borderColor=`#1890FF`;borderWidth=2;height=56;fit=!0;line=!1;animate=!0;xAxis;yAxis;padding=[8,8,8,8];data=[];yTooltipSuffix=``;tooltipType=`default`;clickItem=new k;install(){let{el:e,fit:t,height:n,padding:s,xAxis:m,yAxis:u,yTooltipSuffix:M,tooltipType:D,line:f,theme:v,animate:$,color:j,borderColor:I,borderWidth:L}=this,R=this._chart=new this.winG2.Chart({container:e.nativeElement,autoFit:t,height:n,padding:s,theme:v});R.animate($),!m&&!u&&R.axis(!1),m?R.axis(`x`,m):R.axis(`x`,!1),u?R.axis(`y`,u):R.axis(`y`,!1),R.legend(!1),R.tooltip(kt(D)),R.area().position(`x*y`).color(j).tooltip(`x*y`,(T,O)=>({name:T,value:O+M})).shape(`smooth`),f&&R.line().position(`x*y`).shape(`smooth`).color(I).size(L).tooltip(!1),R.on(`plot:click`,T=>{let O=this._chart.getSnapRecords({x:T.x,y:T.y});this.ngZone.run(()=>this.clickItem.emit({item:O[0]._origin,ev:T}))}),this.ready.next(R),this.changeData(),R.render()}changeData(){let{_chart:e,data:t}=this;!e||!Array.isArray(t)||t.length<=0||e.changeData(t)}static ɵfac=(()=>{let e;return function(n){return(e||(e=Yn(a)))(n||a)}})();static ɵcmp=_e({type:a,selectors:[[`g2-mini-area`]],hostVars:2,hostBindings:function(t,n){t&2&&xt(`height`,n.height,`px`)},inputs:{color:`color`,borderColor:`borderColor`,borderWidth:[2,`borderWidth`,`borderWidth`,_o$1],height:[2,`height`,`height`,_o$1],fit:[2,`fit`,`fit`,N],line:[2,`line`,`line`,N],animate:[2,`animate`,`animate`,N],xAxis:`xAxis`,yAxis:`yAxis`,padding:`padding`,data:`data`,yTooltipSuffix:`yTooltipSuffix`,tooltipType:`tooltipType`},outputs:{clickItem:`clickItem`},exportAs:[`g2MiniArea`],features:[Zt$1],decls:0,vars:0,template:function(t,n){},encapsulation:2})};var je=class a{static ɵfac=function(t){return new(t||a)};static ɵmod=J({type:a});static ɵinj=Q({imports:[sb]})};var qt=class a{msg=u(Ad);visitData=this.genData();genData(){let e=new Date().getTime(),t=[];for(let n=0;n<20;n+=1)t.push({x:D1(new Date(e+1e3*60*60*24*n),`yyyy-MM-dd`),y:Math.floor(Math.random()*100)+10});return t}refresh(){this.visitData=this.genData()}handleClick(e){this.msg.info(`${e.item.x} - ${e.item.y}`)}static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-mini-area-basic`]],decls:3,vars:1,consts:[[`nz-button`,``,`nzType`,`primary`,3,`click`],[`line`,``,`color`,`#cceafe`,`height`,`45`,3,`clickItem`,`data`]],template:function(t,n){t&1&&(ne(0,`button`,0),Fe(`click`,function(){return n.refresh()}),en$1(1,`Refresh`),le(),ne(2,`g2-mini-area`,1),Fe(`clickItem`,function(m){return n.handleClick(m)}),le()),t&2&&(I(2),re(`data`,n.visitData))},dependencies:[Q5,Hd,q5,K5,je,be],encapsulation:2})};var Ht=class a{visitData=[];ngOnInit(){let e=new Date().getTime();for(let t=0;t<20;t+=1)this.visitData.push({x:D1(new Date(e+1e3*60*60*24*t),`yyyy-MM-dd`),y:Math.floor(Math.random()*100)+10})}static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-mini-area-tooltip`]],decls:1,vars:1,consts:[[`line`,``,`color`,`#cceafe`,`height`,`45`,`yTooltipSuffix`,`%`,3,`data`]],template:function(t,n){t&1&&lt$1(0,`g2-mini-area`,0),t&2&&re(`data`,n.visitData)},dependencies:[je,be],encapsulation:2})};var Vt=class a{visitData=[];ngOnInit(){let e=new Date().getTime();for(let t=0;t<20;t+=1)this.visitData.push({x:D1(new Date(e+1e3*60*60*24*t),`yyyy-MM-dd`),y:Math.floor(Math.random()*100)+10})}static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-mini-area-mini`]],decls:1,vars:1,consts:[[`line`,``,`color`,`#cceafe`,`height`,`45`,`tooltipType`,`mini`,3,`data`]],template:function(t,n){t&1&&lt$1(0,`g2-mini-area`,0),t&2&&re(`data`,n.visitData)},dependencies:[je,be],encapsulation:2})};var Zt=class a{item={name:`mini-area`,langs:[`zh-CN`],content:{"zh-CN":{meta:{title:`g2-mini-area`,subtitle:`迷你区域图`,cols:2,module:`import { G2MiniAreaModule } from '@delon/chart/mini-area';`,description:`面积图又叫区域图。 它是在折线图的基础之上形成的, 它将折线图中折线与自变量坐标轴之间的区域使用颜色或者纹理填充，这样一个填充区域我们叫做面积，颜色的填充可以更好的突出趋势信息。`,group:`G2`,order:0,path:`packages/chart/mini-area/index.zh-CN.md`,url:`/chart/mini-area/zh`},text:`<p>\u9762\u79EF\u56FE\u53C8\u53EB\u533A\u57DF\u56FE\u3002 \u5B83\u662F\u5728\u6298\u7EBF\u56FE\u7684\u57FA\u7840\u4E4B\u4E0A\u5F62\u6210\u7684, \u5B83\u5C06\u6298\u7EBF\u56FE\u4E2D\u6298\u7EBF\u4E0E\u81EA\u53D8\u91CF\u5750\u6807\u8F74\u4E4B\u95F4\u7684\u533A\u57DF\u4F7F\u7528\u989C\u8272\u6216\u8005\u7EB9\u7406\u586B\u5145\uFF0C\u8FD9\u6837\u4E00\u4E2A\u586B\u5145\u533A\u57DF\u6211\u4EEC\u53EB\u505A\u9762\u79EF\uFF0C\u989C\u8272\u7684\u586B\u5145\u53EF\u4EE5\u66F4\u597D\u7684\u7A81\u51FA\u8D8B\u52BF\u4FE1\u606F\u3002</p>
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
<td><a href="https://www.yuque.com/antv/g2-docs/api-chart#ef1eaedc" target="_blank" rel="noopener">x \u8F74\u914D\u7F6E</a></td>
<td><code>object</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[yAxis]</code></td>
<td><a href="https://www.yuque.com/antv/g2-docs/api-chart#ef1eaedc" target="_blank" rel="noopener">y \u8F74\u914D\u7F6E</a></td>
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
<td>\`string</td>
<td>LooseObject\`</td>
</tr>
<tr>
<td><code>(clickItem)</code></td>
<td>\u70B9\u51FB\u9879\u56DE\u8C03</td>
<td><code>EventEmitter&lt;G2MiniAreaClickItem&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td>
<td><code>EventEmitter&lt;Chart&gt;</code></td>
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
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-mini-area`,title:`g2-mini-area`},{id:`g2miniareadata`,title:`G2MiniAreaData`}]}],raw:"---\ntitle: g2-mini-area\nsubtitle: 迷你区域图\ncols: 2\ntype: G2\nmodule: import { G2MiniAreaModule } from '@delon/chart/mini-area';\n---\n\n面积图又叫区域图。 它是在折线图的基础之上形成的, 它将折线图中折线与自变量坐标轴之间的区域使用颜色或者纹理填充，这样一个填充区域我们叫做面积，颜色的填充可以更好的突出趋势信息。\n\n## API\n\n### g2-mini-area\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |\n| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |\n| `[color]` | 图表颜色 | `string` | `rgba(24, 144, 255, 0.2)` |\n| `[borderColor]` | 图表边颜色 | `string` | `#1890FF` |\n| `[height]` | 图表高度 | `number` | `56` |\n| `[line]` | 是否显示描边 | `boolean` | `false` |\n| `[animate]` | 是否显示动画 | `boolean` | `true` |\n| `[padding]` | 图表内部间距 | `array` | `[8, 8, 8, 8]` |\n| `[xAxis]` | [x 轴配置](https://www.yuque.com/antv/g2-docs/api-chart#ef1eaedc) | `object` | - |\n| `[yAxis]` | [y 轴配置](https://www.yuque.com/antv/g2-docs/api-chart#ef1eaedc) | `object` | - |\n| `[yTooltipSuffix]` | y 轴Tooltip后缀，一般指定单位 | `string` | - |\n| `[tooltipType]` | Tooltip显示类型 | `'mini','default'` | `'default'` |\n| `[data]` | 数据 | `G2MiniAreaData[]` | - |\n| `[theme]` | 定制图表主题 | `string | LooseObject` | - |\n| `(clickItem)` | 点击项回调 | `EventEmitter<G2MiniAreaClickItem>` | - |\n| `(ready)` | 当G2完成初始化后调用 | `EventEmitter<Chart>` | - |\n\n### G2MiniAreaData\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[x]` | x轴 | `any` | - |\n| `[y]` | y轴 | `any` | - |"}}};codes=[{id:`chart-mini-area-basic`,name:`basic`,title:{"zh-CN":`基础`,"en-US":`Basic`},code:`import { Component, inject } from '@angular/core';

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
export class ChartMiniAreaBasic {
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
}`,order:0,type:`demo`,summary:{"en-US":``,"zh-CN":`<p>\u57FA\u7840\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":``,"zh-CN":`\u57FA\u7840\u7528\u6CD5\u3002
`},path:`packages/chart/mini-area/demo/basic.md`},{id:`chart-mini-area-tooltip`,name:`tooltip`,title:{"zh-CN":`Tooltip`},code:`import { Component, OnInit } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniAreaData, G2MiniAreaModule } from '@delon/chart/mini-area';

@Component({
  selector: 'chart-mini-area-tooltip',
  template: \` <g2-mini-area line color="#cceafe" height="45" [data]="visitData" yTooltipSuffix="%" /> \`,
  imports: [G2MiniAreaModule]
})
export class ChartMiniAreaTooltip implements OnInit {
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
}`,order:1,type:`demo`,summary:{"en-US":``,"zh-CN":`<p>\u6307\u5B9A <code>yTooltipSuffix</code> \u503C\u6765\u8868\u793A\u5355\u4F4D\u3002</p>
`},summary_raw:{"en-US":``,"zh-CN":"指定 `yTooltipSuffix` 值来表示单位。\n"},path:`packages/chart/mini-area/demo/tooltip.md`},{id:`chart-mini-area-mini`,name:`mini`,title:{"zh-CN":`Mini tooltip`},code:`import { Component, OnInit } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniAreaData, G2MiniAreaModule } from '@delon/chart/mini-area';

@Component({
  selector: 'chart-mini-area-mini',
  template: \` <g2-mini-area line color="#cceafe" height="45" [data]="visitData" tooltipType="mini" /> \`,
  imports: [G2MiniAreaModule]
})
export class ChartMiniAreaMini implements OnInit {
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
}`,order:2,type:`demo`,summary:{"en-US":``,"zh-CN":`<p>\u6307\u5B9A <code>tooltipType</code> \u503C\u6765\u8868\u793A\u7B80\u5316tooltip\uFF0C\u53EF\u4EE5\u66F4\u597D\u7684\u8FD0\u7528\u4E8E\u8868\u683C\u3002</p>
`},summary_raw:{"en-US":``,"zh-CN":"指定 `tooltipType` 值来表示简化tooltip，可以更好的运用于表格。\n"},path:`packages/chart/mini-area/demo/mini.md`}];static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-mini-area`]],hostAttrs:[1,`d-block`],decls:10,vars:9,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`12`],[3,`item`]],template:function(t,n){t&1&&(ne(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),lt$1(4,`chart-mini-area-basic`),le(),ne(5,`code-box`,3),lt$1(6,`chart-mini-area-mini`),le()(),ne(7,`div`,2)(8,`code-box`,3),lt$1(9,`chart-mini-area-tooltip`),le()()()()),t&2&&(re(`codes`,n.codes)(`item`,n.item),I(),re(`nzGutter`,16),I(2),re(`item`,n.codes[0]),Vt$1(`id`,n.codes[0].id),I(2),re(`item`,n.codes[2]),Vt$1(`id`,n.codes[2].id),I(3),re(`item`,n.codes[1]),Vt$1(`id`,n.codes[1].id))},dependencies:[rt$1,qt,Ht,Vt,ln$1,Ue$2,X],encapsulation:2})};var Ce=class a extends U{color=`#1890FF`;height=0;borderWidth=5;padding=[8,8,8,8];data=[];yTooltipSuffix=``;tooltipType=`default`;clickItem=new k;install(){let{el:e,height:t,padding:n,yTooltipSuffix:s,tooltipType:m,theme:u,color:M,borderWidth:D}=this,f=this._chart=new this.winG2.Chart({container:e.nativeElement,autoFit:!0,height:t,padding:n,theme:u});f.scale({x:{type:`cat`},y:{min:0}}),f.legend(!1),f.axis(!1),f.tooltip(kt(m,{showCrosshairs:!1})),f.interval().position(`x*y`).color(`x*y`,(v,$)=>{let j=this.data.find(I=>I.x===v&&I.y===$);return j&&j.color?j.color:M}).size(D).tooltip(`x*y`,(v,$)=>({name:v,value:$+s})),f.on(`interval:click`,v=>{this.ngZone.run(()=>this.clickItem.emit({item:v.data?.data,ev:v}))}),this.ready.next(f),this.changeData(),f.render()}changeData(){let{_chart:e,data:t}=this;!e||!Array.isArray(t)||t.length<=0||e.changeData(t)}static ɵfac=(()=>{let e;return function(n){return(e||(e=Yn(a)))(n||a)}})();static ɵcmp=_e({type:a,selectors:[[`g2-mini-bar`]],hostVars:2,hostBindings:function(t,n){t&2&&xt(`height`,n.height,`px`)},inputs:{color:`color`,height:[2,`height`,`height`,_o$1],borderWidth:[2,`borderWidth`,`borderWidth`,_o$1],padding:`padding`,data:`data`,yTooltipSuffix:`yTooltipSuffix`,tooltipType:`tooltipType`},outputs:{clickItem:`clickItem`},exportAs:[`g2MiniBar`],features:[Zt$1],decls:0,vars:0,template:function(t,n){},encapsulation:2})};var We=class a{static ɵfac=function(t){return new(t||a)};static ɵmod=J({type:a});static ɵinj=Q({imports:[sb]})};var Qt=class a{msg=u(Ad);visitData=this.genData();genData(){let e=new Date().getTime(),t=[];for(let n=0;n<20;n+=1)t.push({x:D1(new Date(e+1e3*60*60*24*n),`yyyy-MM-dd`),y:Math.floor(Math.random()*100)+10});return t}refresh(){this.visitData=this.genData()}handleClick(e){this.msg.info(`${e.item.x} - ${e.item.y}`)}static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-mini-bar-basic`]],decls:3,vars:1,consts:[[`nz-button`,``,`nzType`,`primary`,3,`click`],[`height`,`45`,3,`clickItem`,`data`]],template:function(t,n){t&1&&(ne(0,`button`,0),Fe(`click`,function(){return n.refresh()}),en$1(1,`Refresh`),le(),ne(2,`g2-mini-bar`,1),Fe(`clickItem`,function(m){return n.handleClick(m)}),le()),t&2&&(I(2),re(`data`,n.visitData))},dependencies:[Q5,Hd,q5,K5,We,Ce],encapsulation:2})};var Jt=class a{visitData=[];ngOnInit(){let e=new Date().getTime();for(let t=0;t<20;t+=1)this.visitData.push({x:D1(new Date(e+1e3*60*60*24*t),`yyyy-MM-dd`),y:Math.floor(Math.random()*100)+10})}static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-mini-bar-mini`]],decls:1,vars:1,consts:[[`height`,`45`,`yTooltipSuffix`,`%`,`tooltipType`,`mini`,3,`data`]],template:function(t,n){t&1&&lt$1(0,`g2-mini-bar`,0),t&2&&re(`data`,n.visitData)},dependencies:[We,Ce],encapsulation:2})};var Yt=class a{visitData=[];ngOnInit(){let e=new Date().getTime();for(let t=0;t<20;t+=1)this.visitData.push({x:D1(new Date(e+1e3*60*60*24*t),`yyyy-MM-dd`),y:Math.floor(Math.random()*100)+10})}static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-mini-bar-tooltip`]],decls:1,vars:1,consts:[[`height`,`45`,`yTooltipSuffix`,`%`,3,`data`]],template:function(t,n){t&1&&lt$1(0,`g2-mini-bar`,0),t&2&&re(`data`,n.visitData)},dependencies:[We,Ce],encapsulation:2})};var Kt=class a{item={name:`mini-bar`,langs:[`zh-CN`],content:{"zh-CN":{meta:{title:`g2-mini-bar`,subtitle:`迷你柱状图`,cols:2,module:`import { G2MiniBarModule } from '@delon/chart/mini-bar';`,description:`迷你柱状图更适合展示简单的区间数据，简洁的表现方式可以很好的减少大数据量的视觉展现压力。`,group:`G2`,order:0,path:`packages/chart/mini-bar/index.zh-CN.md`,url:`/chart/mini-bar/zh`},text:`<p>\u8FF7\u4F60\u67F1\u72B6\u56FE\u66F4\u9002\u5408\u5C55\u793A\u7B80\u5355\u7684\u533A\u95F4\u6570\u636E\uFF0C\u7B80\u6D01\u7684\u8868\u73B0\u65B9\u5F0F\u53EF\u4EE5\u5F88\u597D\u7684\u51CF\u5C11\u5927\u6570\u636E\u91CF\u7684\u89C6\u89C9\u5C55\u73B0\u538B\u529B\u3002</p>
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
<td>\`string</td>
<td>LooseObject\`</td>
</tr>
<tr>
<td><code>(clickItem)</code></td>
<td>\u70B9\u51FB\u9879\u56DE\u8C03</td>
<td><code>EventEmitter&lt;G2MiniBarClickItem&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td>
<td><code>EventEmitter&lt;Chart&gt;</code></td>
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
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-mini-bar`,title:`g2-mini-bar`},{id:`g2minibardata`,title:`G2MiniBarData`}]}],raw:"---\ntitle: g2-mini-bar\nsubtitle: 迷你柱状图\ncols: 2\ntype: G2\nmodule: import { G2MiniBarModule } from '@delon/chart/mini-bar';\n---\n\n迷你柱状图更适合展示简单的区间数据，简洁的表现方式可以很好的减少大数据量的视觉展现压力。\n\n## API\n\n### g2-mini-bar\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |\n| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |\n| `[color]` | 图表颜色 | `string` | `#1890FF` |\n| `[height]` | 图表高度 | `number` | - |\n| `[yTooltipSuffix]` | y 轴Tooltip后缀，一般指定单位 | `string` | - |\n| `[tooltipType]` | Tooltip显示类型 | `'mini','default'` | `'default'` |\n| `[borderWidth]` | 线条粗细 | `number` | `5` |\n| `[padding]` | 图表内部间距 | `array` | `[8, 8, 8, 8]` |\n| `[data]` | 数据 | `G2MiniBarData[]` | - |\n| `[theme]` | 定制图表主题 | `string | LooseObject` | - |\n| `(clickItem)` | 点击项回调 | `EventEmitter<G2MiniBarClickItem>` | - |\n| `(ready)` | 当G2完成初始化后调用 | `EventEmitter<Chart>` | - |\n\n### G2MiniBarData\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[x]` | x轴 | `any` | - |\n| `[y]` | y轴 | `any` | - |\n| `[color]` | 轴颜色 | `string` | - |"}}};codes=[{id:`chart-mini-bar-basic`,name:`basic`,title:{"zh-CN":`基础`,"en-US":`Basic`},code:`import { Component, inject } from '@angular/core';

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
export class ChartMiniBarBasic {
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
}`,order:0,type:`demo`,summary:{"en-US":``,"zh-CN":`<p>\u57FA\u7840\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":``,"zh-CN":`\u57FA\u7840\u7528\u6CD5\u3002
`},path:`packages/chart/mini-bar/demo/basic.md`},{id:`chart-mini-bar-mini`,name:`mini`,title:{"zh-CN":`Mini tooltip`},code:`import { Component, OnInit } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniBarData, G2MiniBarModule } from '@delon/chart/mini-bar';

@Component({
  selector: 'chart-mini-bar-mini',
  template: \` <g2-mini-bar height="45" [data]="visitData" yTooltipSuffix="%" tooltipType="mini" /> \`,
  imports: [G2MiniBarModule]
})
export class ChartMiniBarMini implements OnInit {
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
}`,order:0,type:`demo`,summary:{"en-US":``,"zh-CN":`<p>\u6307\u5B9A <code>tooltipType</code> \u503C\u6765\u8868\u793A\u7B80\u5316tooltip\uFF0C\u53EF\u4EE5\u66F4\u597D\u7684\u8FD0\u7528\u4E8E\u8868\u683C\u3002</p>
`},summary_raw:{"en-US":``,"zh-CN":"指定 `tooltipType` 值来表示简化tooltip，可以更好的运用于表格。\n"},path:`packages/chart/mini-bar/demo/mini.md`},{id:`chart-mini-bar-tooltip`,name:`tooltip`,title:{"zh-CN":`Tooltip`},code:`import { Component, OnInit } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniBarData, G2MiniBarModule } from '@delon/chart/mini-bar';

@Component({
  selector: 'chart-mini-bar-tooltip',
  template: \` <g2-mini-bar height="45" [data]="visitData" yTooltipSuffix="%" /> \`,
  imports: [G2MiniBarModule]
})
export class ChartMiniBarTooltip implements OnInit {
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
}`,order:0,type:`demo`,summary:{"en-US":``,"zh-CN":`<p>\u6307\u5B9A <code>yTooltipSuffix</code> \u503C\u6765\u8868\u793A\u5355\u4F4D\u3002</p>
`},summary_raw:{"en-US":``,"zh-CN":"指定 `yTooltipSuffix` 值来表示单位。\n"},path:`packages/chart/mini-bar/demo/tooltip.md`}];static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-mini-bar`]],hostAttrs:[1,`d-block`],decls:10,vars:9,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`12`],[3,`item`]],template:function(t,n){t&1&&(ne(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),lt$1(4,`chart-mini-bar-basic`),le(),ne(5,`code-box`,3),lt$1(6,`chart-mini-bar-tooltip`),le()(),ne(7,`div`,2)(8,`code-box`,3),lt$1(9,`chart-mini-bar-mini`),le()()()()),t&2&&(re(`codes`,n.codes)(`item`,n.item),I(),re(`nzGutter`,16),I(2),re(`item`,n.codes[0]),Vt$1(`id`,n.codes[0].id),I(2),re(`item`,n.codes[2]),Vt$1(`id`,n.codes[2].id),I(3),re(`item`,n.codes[1]),Vt$1(`id`,n.codes[1].id))},dependencies:[rt$1,Qt,Jt,Yt,ln$1,Ue$2,X],encapsulation:2})};var fo=a=>({left:a});var Sa=a=>({"background-color":a});var vo=(a,e,t)=>({"background-color":a,width:e,height:t});var gt=class a{locale=u(F1).valueSignal(`miniProgress`);cdr=u(qe);color=`#1890FF`;target;percent;strokeWidth;fixNum(e){return Math.min(Math.max(_o$1(e),0),100)}ngOnChanges(){this.target=this.fixNum(this.target),this.percent=this.fixNum(this.percent),this.cdr.detectChanges()}static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`g2-mini-progress`]],hostVars:2,hostBindings:function(t,n){t&2&&We$1(`g2-mini-progress`,!0)},inputs:{color:`color`,target:[2,`target`,`target`,_o$1],percent:[2,`percent`,`percent`,_o$1],strokeWidth:[2,`strokeWidth`,`strokeWidth`,_o$1]},exportAs:[`g2MiniProgress`],features:[Me$1],decls:5,vars:19,consts:[[`nz-tooltip`,``,1,`g2-mini-progress__target`,3,`nzTooltipTitle`],[1,`g2-mini-progress__target-item`],[1,`g2-mini-progress__wrap`],[1,`g2-mini-progress__value`]],template:function(t,n){t&1&&(ne(0,`div`,0),lt$1(1,`span`,1)(2,`span`,1),le(),ne(3,`div`,2),lt$1(4,`div`,3),le()),t&2&&(bo$1($h(9,fo,n.target+`%`)),re(`nzTooltipTitle`,n.locale().targetSuffix+n.target+`%`),I(),bo$1($h(11,Sa,n.color)),I(),bo$1($h(13,Sa,n.color)),I(2),bo$1(KP(15,vo,n.color,n.percent+`%`,n.strokeWidth+`px`)))},dependencies:[bc],encapsulation:2})};var Xt=class a{static ɵfac=function(t){return new(t||a)};static ɵmod=J({type:a});static ɵinj=Q({imports:[sb,Np,Nc]})};var en=class a{static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-mini-progress-basic`]],decls:1,vars:0,consts:[[`percent`,`78`,`strokeWidth`,`8`,`target`,`80`]],template:function(t,n){t&1&&lt$1(0,`g2-mini-progress`,0)},dependencies:[Xt,gt],encapsulation:2})};var tn=class a{item={name:`mini-progress`,langs:[`zh-CN`],content:{"zh-CN":{meta:{title:`g2-mini-progress`,subtitle:`迷你进度条`,cols:1,module:`import { G2MiniProgressModule } from '@delon/chart/mini-progress';`,description:`用于显示跟速度相关图形再适合不过。`,group:`G2`,order:0,path:`packages/chart/mini-progress/index.zh-CN.md`,url:`/chart/mini-progress/zh`},text:`<p>\u7528\u4E8E\u663E\u793A\u8DDF\u901F\u5EA6\u76F8\u5173\u56FE\u5F62\u518D\u9002\u5408\u4E0D\u8FC7\u3002</p>
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
export class ChartMiniProgressBasic {}`,order:0,type:`demo`,summary:{"en-US":``,"zh-CN":`<p>\u57FA\u7840\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":``,"zh-CN":`\u57FA\u7840\u7528\u6CD5\u3002
`},path:`packages/chart/mini-progress/demo/basic.md`}];static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-mini-progress`]],hostAttrs:[1,`d-block`],decls:5,vars:5,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`24`],[3,`item`]],template:function(t,n){t&1&&(ne(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),lt$1(4,`chart-mini-progress-basic`),le()()()()),t&2&&(re(`codes`,n.codes)(`item`,n.item),I(),re(`nzGutter`,16),I(2),re(`item`,n.codes[0]),Vt$1(`id`,n.codes[0].id))},dependencies:[rt$1,en,ln$1,Ue$2,X],encapsulation:2})};function bo(a,e){if(a&1&&(Qt$1(0),en$1(1),Xt$1()),a&2){let t=R(2);I(),fr(t.title)}}function Co(a,e){if(a&1&&(ne(0,`div`,0),Ye(1,bo,2,1,`ng-container`,4),le()),a&2){let t=R();I(),re(`nzStringTemplateOutlet`,t.title)}}function Mo(a,e){if(a&1&&(Qt$1(0),en$1(1),Xt$1()),a&2){let t=R(2);I(),fr(t.subTitle)}}function Do(a,e){if(a&1&&(ne(0,`div`,1),Ye(1,Mo,2,1,`ng-container`,4),le()),a&2){let t=R();I(),re(`nzStringTemplateOutlet`,t.subTitle)}}function xo(a,e){if(a&1&&(Qt$1(0),en$1(1),Xt$1()),a&2){let t=R();I(),fr(t.total)}}function zo(a,e){if(a&1&&(ne(0,`em`,5),en$1(1),le()),a&2){let t=R();I(),fr(t.suffix)}}function To(a,e){if(a&1&&(Qt$1(0),en$1(1),Xt$1()),a&2){let t=R(2);I(),fr(t.subTotal)}}function _o(a,e){if(a&1&&lt$1(0,`nz-icon`,7),a&2)re(`nzType`,Uh(`caret-`,R(2).status))}function Go(a,e){if(a&1&&(ne(0,`span`,6),Ye(1,To,2,1,`ng-container`,4),he$1(2,_o,1,2,`nz-icon`,7),le()),a&2){let t=R();I(),re(`nzStringTemplateOutlet`,t.subTotal),I(),fe(t.status?2:-1)}}var Me=class a{title;subTitle;total;subTotal;suffix;status;theme=`light`;gap=8;static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`number-info`]],hostVars:6,hostBindings:function(t,n){t&2&&We$1(`number-info`,!0)(`number-info__light`,n.theme===`light`)(`number-info__default`,n.theme==="default")},inputs:{title:`title`,subTitle:`subTitle`,total:`total`,subTotal:`subTotal`,suffix:`suffix`,status:`status`,theme:`theme`,gap:[2,`gap`,`gap`,_o$1]},exportAs:[`numberInfo`],decls:7,vars:7,consts:[[1,`number-info__title`],[1,`number-info__title-sub`],[1,`number-info__value`],[1,`number-info__value-text`],[4,`nzStringTemplateOutlet`],[1,`number-info__value-suffix`],[1,`number-info__value-text`,`number-info__value-sub`],[3,`nzType`]],template:function(t,n){t&1&&(he$1(0,Co,2,1,`div`,0),he$1(1,Do,2,1,`div`,1),ne(2,`div`,2)(3,`span`,3),Ye(4,xo,2,1,`ng-container`,4),he$1(5,zo,2,1,`em`,5),le(),he$1(6,Go,3,2,`span`,6),le()),t&2&&(fe(n.title?0:-1),I(),fe(n.subTitle?1:-1),I(),xt(`margin-top`,n.gap,`px`),I(2),re(`nzStringTemplateOutlet`,n.total),I(),fe(n.suffix?5:-1),I(),fe(n.status||n.subTotal?6:-1))},dependencies:[Zn,Yt$1],encapsulation:2})};var $e=class a{static ɵfac=function(t){return new(t||a)};static ɵmod=J({type:a});static ɵinj=Q({imports:[sb,Cr,Ur]})};var nn=class a{static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-number-info-basic`]],decls:1,vars:0,consts:[[`subTitle`,`本周访问`,`total`,`12,321`,`subTotal`,`17.1`,`status`,`up`]],template:function(t,n){t&1&&lt$1(0,`number-info`,0)},dependencies:[$e,Me],encapsulation:2})};var an=class a{static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-number-info-theme`]],decls:1,vars:0,consts:[[`subTitle`,`本周访问`,`total`,`12,321`,`subTotal`,`17.1`,`status`,`down`,`theme`,`default`]],template:function(t,n){t&1&&lt$1(0,`number-info`,0)},dependencies:[$e,Me],encapsulation:2})};var on=class a{static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-number-info-multiple`]],decls:3,vars:0,consts:[[`subTitle`,`今日访问`,`total`,`12,321`],[`subTitle`,`本周访问`,`total`,`12,32100`],[`subTitle`,`本月访问`,`total`,`12,32100000`]],template:function(t,n){t&1&&lt$1(0,`number-info`,0)(1,`number-info`,1)(2,`number-info`,2)},dependencies:[$e,Me],encapsulation:2})};var rn=class a{item={name:`number-info`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{title:`number-info`,subtitle:`NumberInfo`,cols:2,module:`import { NumberInfoModule } from '@delon/chart/number-info';`,description:`Often used in data cards for highlighting the business data.`,group:`G2`,order:0,path:`packages/chart/number-info/index.en-US.md`,url:`/chart/number-info/en`},text:`<p>Often used in data cards for highlighting the business data.</p>
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
export class ChartNumberInfoBasic {}`,order:0,type:`demo`,summary:{"en-US":``,"zh-CN":`<p>\u5404\u79CD\u6570\u636E\u6587\u6848\u7684\u5C55\u73B0\u65B9\u5F0F\u3002</p>
`},summary_raw:{"en-US":``,"zh-CN":`\u5404\u79CD\u6570\u636E\u6587\u6848\u7684\u5C55\u73B0\u65B9\u5F0F\u3002
`},path:`packages/chart/number-info/demo/basic.md`},{id:`chart-number-info-theme`,name:`theme`,title:{"zh-CN":`主题`},code:`import { Component } from '@angular/core';

import { NumberInfoModule } from '@delon/chart/number-info';

@Component({
  selector: 'chart-number-info-theme',
  template: \` <number-info subTitle="\u672C\u5468\u8BBF\u95EE" total="12,321" subTotal="17.1" status="down" theme="default" /> \`,
  imports: [NumberInfoModule]
})
export class ChartNumberInfoTheme {}`,order:1,type:`demo`,summary:{"en-US":``,"zh-CN":`<p>\u6697\u7CFB\u3002</p>
`},summary_raw:{"en-US":``,"zh-CN":`\u6697\u7CFB\u3002
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
`},summary_raw:{"en-US":"Should be show a separator when multiple `number-info` components.\n","zh-CN":"多个`number-info`组件在一起时增加分隔符。\n"},path:`packages/chart/number-info/demo/multiple.md`}];static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-number-info`]],hostAttrs:[1,`d-block`],decls:10,vars:9,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`12`],[3,`item`]],template:function(t,n){t&1&&(ne(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),lt$1(4,`chart-number-info-basic`),le(),ne(5,`code-box`,3),lt$1(6,`chart-number-info-multiple`),le()(),ne(7,`div`,2)(8,`code-box`,3),lt$1(9,`chart-number-info-theme`),le()()()()),t&2&&(re(`codes`,n.codes)(`item`,n.item),I(),re(`nzGutter`,16),I(2),re(`item`,n.codes[0]),Vt$1(`id`,n.codes[0].id),I(2),re(`item`,n.codes[2]),Vt$1(`id`,n.codes[2].id),I(3),re(`item`,n.codes[1]),Vt$1(`id`,n.codes[1].id))},dependencies:[rt$1,nn,an,on,ln$1,Ue$2,X],encapsulation:2})};var ko=a=>({"background-color":a});function No(a,e){a&1&&lt$1(0,`nz-skeleton`)}function So(a,e){if(a&1&&(Qt$1(0),lt$1(1,`div`,7),Xt$1()),a&2){let t=R(3);I(),re(`innerHTML`,t.subTitle,fa)}}function wo(a,e){if(a&1&&(ne(0,`h4`,4),Ye(1,So,2,1,`ng-container`,6),le()),a&2){let t=R(2);I(),re(`nzStringTemplateOutlet`,t.subTitle)}}function Io(a,e){if(a&1&&(Qt$1(0),lt$1(1,`div`,7),Xt$1()),a&2){let t=R(3);I(),re(`innerHTML`,t.total,fa)}}function Eo(a,e){if(a&1&&(ne(0,`div`,5),Ye(1,Io,2,1,`ng-container`,6),le()),a&2){let t=R(2);I(),re(`nzStringTemplateOutlet`,t.total)}}function Ao(a,e){if(a&1&&(ne(0,`div`,2),he$1(1,wo,2,1,`h4`,4),he$1(2,Eo,2,1,`div`,5),le()),a&2){let t=R();I(),fe(t.subTitle?1:-1),I(),fe(t.total?2:-1)}}function Bo(a,e){if(a&1){let t=Jt$1();ne(0,`li`,9),Fe(`click`,function(){let s=mt$1(t).$index;return gt$1(R(2)._click(s))}),lt$1(1,`span`,10),ne(2,`span`,11),en$1(3),le(),lt$1(4,`nz-divider`,12),ne(5,`span`,13),en$1(6),le(),lt$1(7,`span`,14),le()}if(a&2){let t=e.$implicit,n=R(2);I(),bo$1($h(5,ko,t.checked?t.color:`#aaa`)),I(2),fr(t.x),I(3),wo$1(``,t.percent,`%`),I(),re(`innerHTML`,n.valueFormat?n.valueFormat(t.y):t.y,fa)}}function Po(a,e){if(a&1&&(ne(0,`ul`,3),Dl(1,Bo,8,7,`li`,8,eP),le()),a&2){let t=R();I(),Ml(t.legendData)}}var Le=class a extends U{percentColor;legendData=[];isPercent=!1;animate=!0;color=`rgba(24, 144, 255, 0.85)`;subTitle;total;height=0;hasLegend=!1;inner=.75;padding=[12,0,12,0];percent;tooltip=!0;lineWidth=0;blockMaxWidth=380;select=!0;valueFormat;data=[];colors;interaction=`none`;ratio={text:`占比`,inverse:`反比`,color:``,inverseColor:`#F0F2F5`};clickItem=new k;block=!1;fixData(){let{percent:e,color:t}=this;if(this.isPercent=e!=null,!this.isPercent)return;this.select=!1,this.tooltip=!1;let{text:n,inverse:s,color:m,inverseColor:u}=this.ratio;this.percentColor=M=>M===n?m??t:u,this.data=[{x:n,y:e},{x:s,y:100-e}]}updateBlock(){this.block=this._chart&&this.hasLegend&&this.el.nativeElement.clientWidth<=this.blockMaxWidth,this.cdr.detectChanges()}install(){let{node:e,height:t,padding:n,tooltip:s,inner:m,hasLegend:u,interaction:M,theme:D,animate:f,lineWidth:v,isPercent:$,percentColor:j,colors:I}=this,L=this._chart=new this.winG2.Chart({container:e.nativeElement,autoFit:!0,height:t,padding:n,theme:D});L.animate(f),s?L.tooltip({showTitle:!1,showMarkers:!1}):L.tooltip(!1),M!==`none`&&L.interaction(M),L.axis(!1).legend(!1).coordinate(`theta`,{innerRadius:m}),L.filter(`x`,(R,T)=>T.checked!==!1),L.interval().adjust(`stack`).position(`y`).style({lineWidth:v,stroke:`#fff`}).color(`x`,$?j:I).tooltip(`x*percent`,(R,T)=>({name:R,value:`${u?T:(T*100).toFixed(2)} %`})).state({}),L.scale({x:{type:`cat`,range:[0,1]}}),L.on(`interval:click`,R=>{this.ngZone.run(()=>this.clickItem.emit({item:R.data?.data,ev:R}))}).on(`afterrender`,()=>{this.ngZone.run(()=>this.updateBlock())}),this.ready.next(L),this.changeData(),L.render()}changeData(){let{_chart:e,data:t}=this;if(!e||!Array.isArray(t)||t.length<=0)return;let n=t.reduce((s,m)=>s+m.y,0);for(let s of t)s.percent=n===0?0:s.y/n;e.changeData(t),this.ngZone.run(()=>this.genLegend())}genLegend(){let{hasLegend:e,isPercent:t,cdr:n,_chart:s}=this;!e||t||(this.legendData=s.geometries[0].dataArray.map(m=>{let u=m[0]._origin;return u.color=m[0].color,u.checked=!0,u.percent=(u.percent*100).toFixed(2),u}),n.detectChanges())}_click(e){let{legendData:t,_chart:n}=this;t[e].checked=!t[e].checked,n.render(!0)}onChanges(){this.fixData()}static ɵfac=(()=>{let e;return function(n){return(e||(e=Yn(a)))(n||a)}})();static ɵcmp=_e({type:a,selectors:[[`g2-pie`]],hostVars:8,hostBindings:function(t,n){t&2&&We$1(`g2-pie`,!0)(`g2-pie__legend-has`,n.hasLegend)(`g2-pie__legend-block`,n.block)(`g2-pie__mini`,n.isPercent)},inputs:{animate:[2,`animate`,`animate`,N],color:`color`,subTitle:`subTitle`,total:`total`,height:[2,`height`,`height`,_o$1],hasLegend:[2,`hasLegend`,`hasLegend`,N],inner:`inner`,padding:`padding`,percent:[2,`percent`,`percent`,_o$1],tooltip:[2,`tooltip`,`tooltip`,N],lineWidth:[2,`lineWidth`,`lineWidth`,_o$1],blockMaxWidth:[2,`blockMaxWidth`,`blockMaxWidth`,_o$1],select:[2,`select`,`select`,N],valueFormat:`valueFormat`,data:`data`,colors:`colors`,interaction:`interaction`,ratio:`ratio`},outputs:{clickItem:`clickItem`},exportAs:[`g2Pie`],features:[Zt$1],decls:6,vars:3,consts:[[`container`,``],[1,`g2-pie__chart`],[1,`g2-pie__total`],[1,`g2-pie__legend`],[1,`g2-pie__total-title`],[1,`g2-pie__total-stat`],[4,`nzStringTemplateOutlet`],[3,`innerHTML`],[1,`g2-pie__legend-item`],[1,`g2-pie__legend-item`,3,`click`],[1,`g2-pie__legend-dot`],[1,`g2-pie__legend-title`],[`nzType`,`vertical`],[1,`g2-pie__legend-percent`],[1,`g2-pie__legend-value`,3,`innerHTML`]],template:function(t,n){t&1&&(he$1(0,No,1,0,`nz-skeleton`),ne(1,`div`,1),lt$1(2,`div`,null,0),he$1(4,Ao,3,2,`div`,2),le(),he$1(5,Po,3,0,`ul`,3)),t&2&&(fe(n.loaded?-1:0),I(4),fe(n.subTitle||n.total?4:-1),I(),fe(n.hasLegend&&n.legendData.length>0?5:-1))},dependencies:[Y$1,Zn,tl],encapsulation:2})};var Fo=[Le];var st=class a{static ɵfac=function(t){return new(t||a)};static ɵmod=J({type:a});static ɵinj=Q({imports:[sb,Jd,Ur,Z,Fo]})};var Ro=[`pie`];var dn=class a{constructor(e){this.msg=e;this.refresh()}msg;pie;salesPieData=[];total=``;refresh(){let e=(t=0,n=5e3)=>Math.floor(Math.random()*(n-t+1)+t);this.salesPieData=[{x:`家用电器`,y:e()},{x:`食用酒水`,y:e()},{x:`个护健康`,y:e()},{x:`服饰箱包`,y:e()},{x:`母婴产品`,y:e()}],Math.random()>.5&&this.salesPieData.push({x:`其他`,y:e()}),this.total=`&yen ${this.salesPieData.reduce((t,n)=>n.y+t,0).toFixed(2)}`,this.pie&&setTimeout(()=>this.pie.changeData())}format(e){return`&yen ${e.toFixed(2)}`}handleClick(e){this.msg.info(`${e.item.x} - ${e.item.y}`)}static ɵfac=function(t){return new(t||a)(vt$1(Ad))};static ɵcmp=_e({type:a,selectors:[[`chart-pie-basic`]],viewQuery:function(t,n){if(t&1&&Un(Ro,5),t&2){let s;Ue$1(s=$e$1())&&(n.pie=s.first)}},decls:4,vars:4,consts:[[`pie`,``],[`nz-button`,``,`nzType`,`primary`,3,`click`],[`title`,`销售额`,`subTitle`,`销售额`,`height`,`294`,`repaint`,`false`,3,`clickItem`,`hasLegend`,`total`,`valueFormat`,`data`]],template:function(t,n){t&1&&(ne(0,`button`,1),Fe(`click`,function(){return n.refresh()}),en$1(1,`Refresh`),le(),ne(2,`g2-pie`,2,0),Fe(`clickItem`,function(m){return n.handleClick(m)}),le()),t&2&&(I(2),re(`hasLegend`,!0)(`total`,n.total)(`valueFormat`,n.format)(`data`,n.salesPieData))},dependencies:[Q5,Hd,q5,K5,st,Le],encapsulation:2})};var cn=class a{static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-pie-mini`]],decls:2,vars:0,consts:[[2,`width`,`200px`,`display`,`inline-block`],[`percent`,`28`,`subTitle`,`中式快餐`,`total`,`28%`,`height`,`130`]],template:function(t,n){t&1&&(ne(0,`div`,0),lt$1(1,`g2-pie`,1),le())},dependencies:[st,Le],encapsulation:2})};var ln=class a{item={name:`pie`,langs:[`zh-CN`],content:{"zh-CN":{meta:{title:`g2-pie`,subtitle:`饼状图`,cols:1,module:`import { G2PieModule } from '@delon/chart/pie';`,description:`用于显示跟速度相关图形再适合不过。`,group:`G2`,order:0,path:`packages/chart/pie/index.zh-CN.md`,url:`/chart/pie/zh`},text:`<p>\u7528\u4E8E\u663E\u793A\u8DDF\u901F\u5EA6\u76F8\u5173\u56FE\u5F62\u518D\u9002\u5408\u4E0D\u8FC7\u3002</p>
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
<td><code>string,TemplateRef&lt;void&gt;&lt;void&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[total]</code></td>
<td>\u603B\u91CF</td>
<td><code>string,number,TemplateRef&lt;void&gt;&lt;void&gt;</code></td>
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
<td>\`string</td>
<td>LooseObject\`</td>
</tr>
<tr>
<td><code>(clickItem)</code></td>
<td>\u70B9\u51FB\u9879\u56DE\u8C03</td>
<td><code>EventEmitter&lt;G2PieClickItem&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td>
<td><code>EventEmitter&lt;Chart&gt;</code></td>
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
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-pie`,title:`g2-pie`},{id:`g2piedata`,title:`G2PieData`}]}],raw:"---\ntitle: g2-pie\nsubtitle: 饼状图\ncols: 1\ntype: G2\nmodule: import { G2PieModule } from '@delon/chart/pie';\n---\n\n用于显示跟速度相关图形再适合不过。\n\n## API\n\n### g2-pie\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |\n| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |\n| `[animate]` | 是否显示动画 | `boolean` | `true` |\n| `[color]` | 图表颜色 | `string` | `rgba(24, 144, 255, 0.85)` |\n| `[height]` | 图表高度 | `number` | - |\n| `[hasLegend]` | 是否显示 legend | `boolean` | `false` |\n| `[padding]` | 图表内部间距 | `number[]` | `[12, 0, 12, 0]` |\n| `[percent]` | 占比 | `number` | - |\n| `[lineWidth]` | 边框粗细 | `number` | `0` |\n| `[inner]` | 内部极坐标系的半径 | `number` | `0.75` |\n| `[blockMaxWidth]` | 多少宽度为块显示 | `number` | `380` |\n| `[tooltip]` | 是否显示 tooltip | `boolean` | `true` |\n| `[subTitle]` | 图表子标题 | `string,TemplateRef<void><void>` | - |\n| `[total]` | 总量 | `string,number,TemplateRef<void><void>` | - |\n| `[valueFormat]` | y轴格式化 | `(y: number) => string` | - |\n| `[data]` | 数据 | `G2PieData[]` | - |\n| `[colors]` | 颜色列表 | `string[]` | - |\n| `[interaction]` | 交互类型，none 无 element-active 图形元素，active-region 图表组件，brush 框选，drag-move 移动 | `InteractionType` | `none` |\n| `[ratio]` | 百分比配置项 | `G2PieRatio` | `{ text: '占比', inverse: '反比', color: '', inverseColor: '#F0F2F5' }` |\n| `[theme]` | 定制图表主题 | `string | LooseObject` | - |\n| `(clickItem)` | 点击项回调 | `EventEmitter<G2PieClickItem>` | - |\n| `(ready)` | 当G2完成初始化后调用 | `EventEmitter<Chart>` | - |\n\n### G2PieData\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[x]` | x轴 | `any` | - |\n| `[y]` | y轴 | `number` | - |"}}};codes=[{id:`chart-pie-basic`,name:`basic`,title:{"zh-CN":`基础`,"en-US":`Basic`},code:`import { Component, ViewChild } from '@angular/core';

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
export class ChartPieBasic {
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
}`,order:0,type:`demo`,summary:{"en-US":``,"zh-CN":`<p>\u57FA\u7840\u7528\u6CD5\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E1D\u6ED1\u66F4\u65B0\u6570\u636E\u7684\u5224\u65AD\u6807\u51C6\u662F\u4EE5\u53EA\u66F4\u65B0 <code>data</code> \u4E3A\u51C6\uFF0C\u8FD9\u91CC\u5229\u7528 <code>repaint</code> \u8FDB\u884C\u624B\u52A8\u8C03\u7528 <code>changeData</code> \u6539\u53D8\u6570\u636E\u8FBE\u5230\u4E1D\u6ED1\u66F4\u65B0\u7684\u6548\u679C\u3002</p>
`},summary_raw:{"en-US":``,"zh-CN":"基础用法。默认情况下丝滑更新数据的判断标准是以只更新 `data` 为准，这里利用 `repaint` 进行手动调用 `changeData` 改变数据达到丝滑更新的效果。\n"},path:`packages/chart/pie/demo/basic.md`},{id:`chart-pie-mini`,name:`mini`,title:{"zh-CN":`迷你型`,"en-US":`Mini`},code:`import { Component } from '@angular/core';

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
export class ChartPieMini {}`,order:0,type:`demo`,summary:{"en-US":``,"zh-CN":`<p>\u901A\u8FC7\u7B80\u5316 <code>pie</code> \u5C5E\u6027\u7684\u8BBE\u7F6E\uFF0C\u53EF\u4EE5\u5FEB\u901F\u7684\u5B9E\u73B0\u6781\u7B80\u7684\u997C\u72B6\u56FE\uFF0C\u53EF\u914D\u5408 <code>chart-card</code> \u7EC4\u5408\u5C55\u73B0\u66F4\u591A\u4E1A\u52A1\u573A\u666F\u3002</p>
`},summary_raw:{"en-US":``,"zh-CN":"通过简化 `pie` 属性的设置，可以快速的实现极简的饼状图，可配合 `chart-card` 组合展现更多业务场景。\n"},path:`packages/chart/pie/demo/mini.md`}];static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-pie`]],hostAttrs:[1,`d-block`],decls:7,vars:7,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`24`],[3,`item`]],template:function(t,n){t&1&&(ne(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),lt$1(4,`chart-pie-basic`),le(),ne(5,`code-box`,3),lt$1(6,`chart-pie-mini`),le()()()()),t&2&&(re(`codes`,n.codes)(`item`,n.item),I(),re(`nzGutter`,16),I(2),re(`item`,n.codes[0]),Vt$1(`id`,n.codes[0].id),I(2),re(`item`,n.codes[1]),Vt$1(`id`,n.codes[1].id))},dependencies:[rt$1,dn,cn,ln$1,Ue$2,X],encapsulation:2})};var Oo=a=>({"background-color":a});function jo(a,e){a&1&&lt$1(0,`nz-skeleton`)}function Wo(a,e){if(a&1&&(Qt$1(0),ne(1,`h4`),en$1(2),le(),Xt$1()),a&2){let t=R();I(2),fr(t.title)}}function $o(a,e){if(a&1){let t=Jt$1();ne(0,`div`,4),Fe(`click`,function(){let s=mt$1(t).$index;return gt$1(R(2)._click(s))}),lt$1(1,`i`,5),en$1(2),ne(3,`h6`,6),en$1(4),le()()}if(a&2){let t=e.$implicit,n=e.$count;re(`nzSpan`,24/n),I(),bo$1($h(5,Oo,t.checked?t.color:`#aaa`)),I(),wo$1(` `,t.name,` `),I(2),fr(t.value)}}function Lo(a,e){if(a&1&&(ne(0,`div`,2),Dl(1,$o,5,7,`div`,3,eP),le()),a&2){let t=R();I(),Ml(t.legendData)}}var mt=class a extends U{legendData=[];title;height=0;padding=[44,30,16,30];hasLegend=!0;tickCount=4;data=[];colors=[`#1890FF`,`#FACC14`,`#2FC25B`,`#8543E0`,`#F04864`,`#13C2C2`,`#fa8c16`,`#a0d911`];clickItem=new k;getHeight(){return this.height-(this.hasLegend?80:22)}install(){let{node:e,padding:t,theme:n,tickCount:s}=this,m=this._chart=new this.winG2.Chart({container:e.nativeElement,autoFit:!0,height:this.getHeight(),padding:t,theme:n});m.coordinate(`polar`),m.legend(!1),m.axis(`label`,{line:null,label:{offset:8},grid:{line:{style:{stroke:`#e9e9e9`,lineWidth:1,lineDash:[0,0]}}}}),m.axis(`value`,{grid:{line:{type:`polygon`,style:{stroke:`#e9e9e9`,lineWidth:1,lineDash:[0,0]}}}}),m.scale({value:{min:0,tickCount:s}}),m.filter(`name`,u=>{let M=this.legendData.find(D=>D.name===u);return M?M.checked!==!1:!0}),m.line().position(`label*value`).color(`name`,this.colors),m.point().position(`label*value`).shape(`circle`).size(3),m.on(`point:click`,u=>{this.ngZone.run(()=>this.clickItem.emit({item:u.data?.data,ev:u}))}),this.ready.next(m),this.changeData(),m.render()}changeData(){let{_chart:e,data:t}=this;!e||!Array.isArray(t)||t.length<=0||(e.changeData(t),this.ngZone.run(()=>this.genLegend()))}genLegend(){let{hasLegend:e,cdr:t,_chart:n}=this;e&&(this.legendData=n.geometries[0].dataArray.map(s=>({name:s[0]._origin.name,color:s[0].color,checked:!0,value:s.reduce((M,D)=>M+D._origin.value,0)})),t.detectChanges())}_click(e){let{legendData:t,_chart:n}=this;t[e].checked=!t[e].checked,n.render(!0)}onChanges(){this.legendData.forEach(e=>e.checked=!0)}static ɵfac=(()=>{let e;return function(n){return(e||(e=Yn(a)))(n||a)}})();static ɵcmp=_e({type:a,selectors:[[`g2-radar`]],hostVars:4,hostBindings:function(t,n){t&2&&(xt(`height`,n.height,`px`),We$1(`g2-radar`,!0))},inputs:{title:`title`,height:[2,`height`,`height`,_o$1],padding:`padding`,hasLegend:[2,`hasLegend`,`hasLegend`,N],tickCount:[2,`tickCount`,`tickCount`,_o$1],data:`data`,colors:`colors`},outputs:{clickItem:`clickItem`},exportAs:[`g2Radar`],features:[Zt$1],decls:5,vars:3,consts:[[`container`,``],[4,`nzStringTemplateOutlet`],[`nz-row`,``,1,`g2-radar__legend`],[`nz-col`,``,1,`g2-radar__legend-item`,3,`nzSpan`],[`nz-col`,``,1,`g2-radar__legend-item`,3,`click`,`nzSpan`],[1,`g2-radar__legend-dot`],[1,`g2-radar__legend-title`]],template:function(t,n){t&1&&(he$1(0,jo,1,0,`nz-skeleton`),Ye(1,Wo,3,1,`ng-container`,1),lt$1(2,`div`,null,0),he$1(4,Lo,3,0,`div`,2)),t&2&&(fe(n.loaded?-1:0),I(),re(`nzStringTemplateOutlet`,n.title),I(3),fe(n.hasLegend?4:-1))},dependencies:[Y$1,Zn,Ue$2,ln$1],encapsulation:2})};var qo=[mt];var sn=class a{static ɵfac=function(t){return new(t||a)};static ɵmod=J({type:a});static ɵinj=Q({imports:[sb,an$1,Ur,Z,qo]})};var mn=class a{constructor(e){this.msg=e;this.refresh()}msg;radarData=[];refresh(){let e=(m=1,u=10)=>Math.floor(Math.random()*(u-m+1)+m),t=[`个人`,`团队`,`部门`].map(m=>({name:m,ref:e(),koubei:e(),output:e(),contribute:e(),hot:e()})),n={ref:`引用`,koubei:`口碑`,output:`产量`,contribute:`贡献`,hot:`热度`};Math.random()>.5&&delete n.hot;let s=[];t.forEach(m=>{Object.keys(m).forEach(u=>{u!==`name`&&s.push({name:m.name,label:n[u],value:m[u]})})}),this.radarData=s}handleClick(e){this.msg.info(`${e.item.label} - ${e.item.name} - ${e.item.value}`)}static ɵfac=function(t){return new(t||a)(vt$1(Ad))};static ɵcmp=_e({type:a,selectors:[[`chart-radar-basic`]],decls:3,vars:2,consts:[[`nz-button`,``,`nzType`,`primary`,3,`click`],[`height`,`286`,3,`clickItem`,`hasLegend`,`data`]],template:function(t,n){t&1&&(ne(0,`button`,0),Fe(`click`,function(){return n.refresh()}),en$1(1,`Refresh`),le(),ne(2,`g2-radar`,1),Fe(`clickItem`,function(m){return n.handleClick(m)}),le()),t&2&&(I(2),re(`hasLegend`,!0)(`data`,n.radarData))},dependencies:[Q5,Hd,q5,K5,sn,mt],encapsulation:2})};var pn=class a{item={name:`radar`,langs:[`zh-CN`],content:{"zh-CN":{meta:{title:`g2-radar`,subtitle:`雷达图`,cols:1,module:`import { G2RadarModule } from '@delon/chart/radar';`,description:`雷达图是以相同点开始的轴上表示的三个或更多个定量变量的二维图形的形式显示多变量数据的图形方法。轴的相对位置和角度通常是不知情的。`,group:`G2`,order:0,path:`packages/chart/radar/index.zh-CN.md`,url:`/chart/radar/zh`},text:`<p>\u96F7\u8FBE\u56FE\u662F\u4EE5\u76F8\u540C\u70B9\u5F00\u59CB\u7684\u8F74\u4E0A\u8868\u793A\u7684\u4E09\u4E2A\u6216\u66F4\u591A\u4E2A\u5B9A\u91CF\u53D8\u91CF\u7684\u4E8C\u7EF4\u56FE\u5F62\u7684\u5F62\u5F0F\u663E\u793A\u591A\u53D8\u91CF\u6570\u636E\u7684\u56FE\u5F62\u65B9\u6CD5\u3002\u8F74\u7684\u76F8\u5BF9\u4F4D\u7F6E\u548C\u89D2\u5EA6\u901A\u5E38\u662F\u4E0D\u77E5\u60C5\u7684\u3002</p>
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
<td><code>false</code></td>
</tr>
<tr>
<td><code>[padding]</code></td>
<td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td>
<td><code>array</code></td>
<td><code>[24, 30, 16, 30]</code></td>
</tr>
<tr>
<td><code>[colors]</code></td>
<td>\u989C\u8272\u5217\u8868</td>
<td><code>string[]</code></td>
<td>-</td>
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
<td>\`string</td>
<td>LooseObject\`</td>
</tr>
<tr>
<td><code>(clickItem)</code></td>
<td>\u70B9\u51FB\u9879\u56DE\u8C03</td>
<td><code>EventEmitter&lt;G2RadarClickItem&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td>
<td><code>EventEmitter&lt;Chart&gt;</code></td>
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
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-radar`,title:`g2-radar`},{id:`g2radardata`,title:`G2RadarData`}]}],raw:"---\ntitle: g2-radar\nsubtitle: 雷达图\ncols: 1\ntype: G2\nmodule: import { G2RadarModule } from '@delon/chart/radar';\n---\n\n雷达图是以相同点开始的轴上表示的三个或更多个定量变量的二维图形的形式显示多变量数据的图形方法。轴的相对位置和角度通常是不知情的。\n\n## API\n\n### g2-radar\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |\n| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |\n| `[title]` | 图表标题 | `string,TemplateRef<void>` | - |\n| `[height]` | 图表高度 | `number` | - |\n| `[hasLegend]` | 是否显示 legend | `boolean` | `false` |\n| `[padding]` | 图表内部间距 | `array` | `[24, 30, 16, 30]` |\n| `[colors]` | 颜色列表 | `string[]` | - |\n| `[data]` | 数据 | `G2RadarData[]` | - |\n| `[theme]` | 定制图表主题 | `string | LooseObject` | - |\n| `(clickItem)` | 点击项回调 | `EventEmitter<G2RadarClickItem>` | - |\n| `(ready)` | 当G2完成初始化后调用 | `EventEmitter<Chart>` | - |\n\n### G2RadarData\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[name]` | 名称 | `string` | - |\n| `[label]` | 标签 | `string` | - |\n| `[value]` | 值 | `number` | - |"}}};codes=[{id:`chart-radar-basic`,name:`basic`,title:{"zh-CN":`基础`,"en-US":`Basic`},code:`import { Component } from '@angular/core';

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
export class ChartRadarBasic {
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
}`,order:0,type:`demo`,summary:{"en-US":``,"zh-CN":`<p>\u57FA\u7840\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":``,"zh-CN":`\u57FA\u7840\u7528\u6CD5\u3002
`},path:`packages/chart/radar/demo/basic.md`}];static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-radar`]],hostAttrs:[1,`d-block`],decls:5,vars:5,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`24`],[3,`item`]],template:function(t,n){t&1&&(ne(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),lt$1(4,`chart-radar-basic`),le()()()()),t&2&&(re(`codes`,n.codes)(`item`,n.item),I(),re(`nzGutter`,16),I(2),re(`item`,n.codes[0]),Vt$1(`id`,n.codes[0].id))},dependencies:[rt$1,mn,ln$1,Ue$2,X],encapsulation:2})};var ft=class a extends U{plusColor=`#40a9ff`;minusColor=`#ff4d4f`;height=60;barSize=30;min=0;max=100;value=0;line=!1;format;padding=0;textStyle={fontSize:12,color:`#595959`};install(){let{el:e,height:t,padding:n,textStyle:s,line:m,format:u,theme:M,min:D,max:f,plusColor:v,minusColor:$,barSize:j}=this,I=this._chart=new this.winG2.Chart({container:e.nativeElement,autoFit:!0,height:t,padding:n,theme:M});I.legend(!1),I.axis(!1),I.scale({value:{max:f,min:D}}),I.tooltip(!1),I.coordinate().transpose(),I.interval().position(`1*value`).color(`value`,L=>L>0?v:$).size(j).label(`value`,()=>({formatter:u,style:g({},s)})),m&&I.annotation().line({start:[`50%`,`0%`],end:[`50%`,`100%`],style:{stroke:`#e8e8e8`,lineDash:[0,0]}}),this.ready.next(I),this.changeData(),I.render()}onlyChangeData=e=>Object.keys(e).length===1&&!!e.value;changeData(){let{_chart:e,value:t}=this;e&&e.changeData([{value:t}])}static ɵfac=(()=>{let e;return function(n){return(e||(e=Yn(a)))(n||a)}})();static ɵcmp=_e({type:a,selectors:[[`g2-single-bar`]],hostVars:2,hostBindings:function(t,n){t&2&&xt(`height`,n.height,`px`)},inputs:{plusColor:`plusColor`,minusColor:`minusColor`,height:[2,`height`,`height`,_o$1],barSize:[2,`barSize`,`barSize`,_o$1],min:[2,`min`,`min`,_o$1],max:[2,`max`,`max`,_o$1],value:[2,`value`,`value`,_o$1],line:[2,`line`,`line`,N],format:`format`,padding:`padding`,textStyle:`textStyle`},exportAs:[`g2SingleBar`],features:[Zt$1],decls:0,vars:0,template:function(t,n){},encapsulation:2})};var un=class a{static ɵfac=function(t){return new(t||a)};static ɵmod=J({type:a});static ɵinj=Q({imports:[sb]})};function Vo(a,e){if(a&1&&(ne(0,`tr`)(1,`td`),en$1(2),le(),ne(3,`td`),lt$1(4,`g2-single-bar`,3),le(),ne(5,`td`),lt$1(6,`g2-single-bar`,4),le()()),a&2){let t=e.$implicit,n=e.$index;I(2),fr(n+1),I(2),re(`value`,t.value),I(2),re(`value`,t.other)}}var hn=class a{list=new Array(5).fill({}).map(()=>({id:Math.floor(Math.random()*1e4),value:Math.floor(Math.random()*100),other:Math.floor(Math.random()*100)>50?Math.floor(Math.random()*100):-Math.floor(Math.random()*100)}));refresh(){this.list.forEach(e=>{e.value=Math.floor(Math.random()*100),e.other=Math.floor(Math.random()*100)>50?Math.floor(Math.random()*100):-Math.floor(Math.random()*100)})}static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-single-bar-basic`]],decls:14,vars:2,consts:[[`nz-button`,``,`nzType`,`primary`,3,`click`],[3,`nzData`,`nzShowPagination`],[`nzWidth`,`350px`],[`height`,`24`,3,`value`],[`height`,`60`,`min`,`-100`,`line`,``,3,`value`]],template:function(t,n){t&1&&(ne(0,`button`,0),Fe(`click`,function(){return n.refresh()}),en$1(1,`Refresh`),le(),ne(2,`nz-table`,1)(3,`thead`)(4,`tr`)(5,`th`),en$1(6,`序号`),le(),ne(7,`th`,2),en$1(8,`服务调用次数`),le(),ne(9,`th`,2),en$1(10,`数据有负值`),le()()(),ne(11,`tbody`),Dl(12,Vo,7,3,`tr`,null,eP),le()()),t&2&&(I(2),re(`nzData`,n.list)(`nzShowPagination`,!1),I(10),Ml(n.list))},dependencies:[Q5,Hd,q5,K5,pl,Ho,sl,Vo$1,cl,wn,jo$2,un,ft],styles:[`[_nghost-%COMP%]     .ant-table tbody>tr>td{padding:0}`]})};var gn=class a{item={name:`single-bar`,langs:[`zh-CN`],content:{"zh-CN":{meta:{title:`g2-single-bar`,subtitle:`单一柱状图`,cols:1,module:`import { G2SingleBarModule } from '@delon/chart/single-bar';`,description:`单一柱状图更适合在列表中展示简单的区间数据，简洁的表现方式可以很好的减少大数据量的视觉展现压力。`,group:`G2`,order:0,path:`packages/chart/single-bar/index.zh-CN.md`,url:`/chart/single-bar/zh`},text:`<p>\u5355\u4E00\u67F1\u72B6\u56FE\u66F4\u9002\u5408\u5728\u5217\u8868\u4E2D\u5C55\u793A\u7B80\u5355\u7684\u533A\u95F4\u6570\u636E\uFF0C\u7B80\u6D01\u7684\u8868\u73B0\u65B9\u5F0F\u53EF\u4EE5\u5F88\u597D\u7684\u51CF\u5C11\u5927\u6570\u636E\u91CF\u7684\u89C6\u89C9\u5C55\u73B0\u538B\u529B\u3002</p>
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
<td>\`string</td>
<td>LooseObject\`</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td>
<td><code>EventEmitter&lt;Chart&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-single-bar`,title:`g2-single-bar`}]}],raw:"---\ntitle: g2-single-bar\nsubtitle: 单一柱状图\ncols: 1\ntype: G2\nmodule: import { G2SingleBarModule } from '@delon/chart/single-bar';\n---\n\n单一柱状图更适合在列表中展示简单的区间数据，简洁的表现方式可以很好的减少大数据量的视觉展现压力。\n\n## API\n\n### g2-single-bar\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |\n| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |\n| `[plusColor]` | 图表颜色 | `string` | `#40a9ff` |\n| `[minusColor]` | 负值图表颜色 | `string` | `#ff4d4f` |\n| `[height]` | 图表高度 | `number` | `60` |\n| `[barSize]` | 柱状高度 | `number` | `30` |\n| `[min]` | 最小值 | `number` | `0` |\n| `[max]` | 最大值，若小于0表示显示负值 | `number` | `100` |\n| `[padding]` | 图表内部间距 | `any` | `0` |\n| `[value]` | 值 | `number` | `0` |\n| `[format]` | 显示值格式 | `(value: number) => string` | - |\n| `[textStyle]` | 显示值样式 | `any` | `{ fontSize: 12, color: '#595959' }` |\n| `[theme]` | 定制图表主题 | `string | LooseObject` | - |\n| `(ready)` | 当G2完成初始化后调用 | `EventEmitter<Chart>` | - |"}}};codes=[{id:`chart-single-bar-basic`,name:`basic`,title:{"zh-CN":`基础`,"en-US":`Basic`},code:`import { Component, ViewEncapsulation } from '@angular/core';

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
export class ChartSingleBarBasic {
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
}`,order:0,type:`demo`,summary:{"en-US":``,"zh-CN":`<p>\u57FA\u7840\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":``,"zh-CN":`\u57FA\u7840\u7528\u6CD5\u3002
`},path:`packages/chart/single-bar/demo/basic.md`}];static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-single-bar`]],hostAttrs:[1,`d-block`],decls:5,vars:5,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`24`],[3,`item`]],template:function(t,n){t&1&&(ne(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),lt$1(4,`chart-single-bar-basic`),le()()()()),t&2&&(re(`codes`,n.codes)(`item`,n.item),I(),re(`nzGutter`,16),I(2),re(`item`,n.codes[0]),Vt$1(`id`,n.codes[0].id))},dependencies:[rt$1,hn,ln$1,Ue$2,X],encapsulation:2})};function Zo(a,e){a&1&&lt$1(0,`nz-skeleton`)}var pt=class a extends U{width=0;height=200;padding=0;data=[];clickItem=new k;initTagCloud(){let e=this.winG2;e.registerShape(`point`,`cloud`,{draw(t,n){let s=t.data,m=n.addShape({type:`text`,name:`tag-cloud-text`,attrs:Y(g({},t.style),{fontSize:s.size,text:s.text,textAlign:`center`,fontFamily:s.font,fill:t.color,textBaseline:`Alphabetic`,x:t.x,y:t.y})});return s.rotate&&e.Util.rotate(m,s.rotate*Math.PI/180),m}})}install(){this.initTagCloud();let{el:e,padding:t,theme:n}=this;this.height===0&&(this.height=this.el.nativeElement.clientHeight),this.width===0&&(this.width=this.el.nativeElement.clientWidth);let s=this._chart=new this.winG2.Chart({container:e.nativeElement,autoFit:!1,padding:t,height:this.height,width:this.width,theme:n});s.scale({x:{nice:!1},y:{nice:!1}}),s.legend(!1),s.axis(!1),s.tooltip({showTitle:!1,showMarkers:!1}),s.coordinate().reflect(),s.point().position(`x*y`).color(`text`).shape(`cloud`).state({active:{style:{fillOpacity:.4}}}),s.interaction(`element-active`),s.on(`tag-cloud-text:click`,m=>{this.ngZone.run(()=>this.clickItem.emit({item:m.data?.data,ev:m}))}),this.ready.next(s),this.changeData(),s.render()}changeData(){let{_chart:e,data:t}=this;if(!e||!Array.isArray(t)||t.length<=0)return;let n=new window.DataSet.View().source(t),s=n.range(`value`),m=s[0],u=s[1];n.transform({type:`tag-cloud`,fields:[`name`,`value`],font:`Verdana`,size:[this.width,this.height],padding:0,timeInterval:5e3,rotate(){let M=~~(Math.random()*4)%4;return M===2&&(M=0),M*90},fontSize(M){return(M.value-m)/(u-m)*24+8}}),e.changeData(n.rows)}installResizeEvent(){this.resize$=Pc(window,`resize`).pipe(ee(()=>!!this._chart),Pn(200)).subscribe(()=>this.changeData())}onInit(){this.installResizeEvent()}static ɵfac=(()=>{let e;return function(n){return(e||(e=Yn(a)))(n||a)}})();static ɵcmp=_e({type:a,selectors:[[`g2-tag-cloud`]],inputs:{width:[2,`width`,`width`,_o$1],height:[2,`height`,`height`,_o$1],padding:`padding`,data:`data`},outputs:{clickItem:`clickItem`},exportAs:[`g2TagCloud`],features:[Zt$1],decls:1,vars:1,template:function(t,n){t&1&&he$1(0,Zo,1,0,`nz-skeleton`),t&2&&fe(n.loaded?-1:0)},dependencies:[Y$1],encapsulation:2})};var Jo=[pt];var fn=class a{static ɵfac=function(t){return new(t||a)};static ɵmod=J({type:a});static ɵinj=Q({imports:[sb,Z,Jo]})};var vn=class a{constructor(e){this.msg=e;this.refresh()}msg;tags=[];refresh(){let e=(t=1,n=10)=>Math.floor(Math.random()*(n-t+1)+t);this.tags=[{value:e(),name:`NG-ALAIN`},{value:e(),name:`AntV`},{value:e(),name:`F2`},{value:e(),name:`G2`},{value:e(),name:`G6`},{value:e(),name:`DataSet`},{value:e(),name:`墨者学院`},{value:e(),name:`Analysis`},{value:e(),name:`Data Mining`},{value:e(),name:`Data Vis`},{value:e(),name:`Design`},{value:e(),name:`Grammar`},{value:e(),name:`Graphics`},{value:e(),name:`Graph`},{value:e(),name:`Hierarchy`},{value:e(),name:`Labeling`},{value:e(),name:`Layout`},{value:e(),name:`Quantitative`},{value:e(),name:`Relation`},{value:e(),name:`Statistics`},{value:e(),name:`可视化`},{value:e(),name:`数据`},{value:e(),name:`数据可视化`},{value:e(),name:`Arc Diagram`},{value:e(),name:`Bar Chart`},{value:e(),name:`Canvas`},{value:e(),name:`Chart`},{value:e(),name:`DAG`},{value:e(),name:`DG`},{value:e(),name:`Facet`},{value:e(),name:`Geo`},{value:e(),name:`Line`},{value:e(),name:`MindMap`},{value:e(),name:`Pie`},{value:e(),name:`Pizza Chart`},{value:e(),name:`Punch Card`},{value:e(),name:`SVG`},{value:e(),name:`Sunburst`},{value:e(),name:`Tree`},{value:e(),name:`UML`},{value:e(),name:`Chart`},{value:e(),name:`View`},{value:e(),name:`Geom`},{value:e(),name:`Shape`},{value:e(),name:`Scale`},{value:e(),name:`Animate`},{value:e(),name:`Global`},{value:e(),name:`Slider`},{value:e(),name:`Connector`},{value:e(),name:`Transform`},{value:e(),name:`Util`},{value:e(),name:`DomUtil`},{value:e(),name:`MatrixUtil`},{value:e(),name:`PathUtil`},{value:e(),name:`G`},{value:e(),name:`2D`},{value:e(),name:`3D`},{value:e(),name:`Line`},{value:e(),name:`Area`},{value:e(),name:`Interval`},{value:e(),name:`Schema`},{value:e(),name:`Edge`},{value:e(),name:`Polygon`},{value:e(),name:`Heatmap`},{value:e(),name:`Render`},{value:e(),name:`Tooltip`},{value:e(),name:`Axis`},{value:e(),name:`Guide`},{value:e(),name:`Coord`},{value:e(),name:`Legend`},{value:e(),name:`Path`},{value:e(),name:`Helix`},{value:e(),name:`Theta`},{value:e(),name:`Rect`},{value:e(),name:`Polar`},{value:e(),name:`Dsv`},{value:e(),name:`Csv`},{value:e(),name:`Tsv`},{value:e(),name:`GeoJSON`},{value:e(),name:`TopoJSON`},{value:e(),name:`Filter`},{value:e(),name:`Map`},{value:e(),name:`Pick`},{value:e(),name:`Rename`},{value:e(),name:`Filter`},{value:e(),name:`Map`},{value:e(),name:`Pick`},{value:e(),name:`Rename`},{value:e(),name:`Reverse`},{value:e(),name:`sort`},{value:e(),name:`Subset`},{value:e(),name:`Partition`},{value:e(),name:`Imputation`},{value:e(),name:`Fold`},{value:e(),name:`Aggregate`},{value:e(),name:`Proportion`},{value:e(),name:`Histogram`},{value:e(),name:`Quantile`},{value:e(),name:`Treemap`},{value:e(),name:`Hexagon`},{value:e(),name:`Binning`},{value:e(),name:`kernel`},{value:e(),name:`Regression`},{value:e(),name:`Density`},{value:e(),name:`Sankey`},{value:e(),name:`Voronoi`},{value:e(),name:`Projection`},{value:e(),name:`Centroid`},{value:e(),name:`H5`},{value:e(),name:`Mobile`},{value:e(),name:`K线图`},{value:e(),name:`关系图`},{value:e(),name:`烛形图`},{value:e(),name:`股票图`},{value:e(),name:`直方图`},{value:e(),name:`金字塔图`},{value:e(),name:`分面`},{value:e(),name:`南丁格尔玫瑰图`},{value:e(),name:`饼图`},{value:e(),name:`线图`},{value:e(),name:`点图`},{value:e(),name:`散点图`},{value:e(),name:`子弹图`},{value:e(),name:`柱状图`},{value:e(),name:`仪表盘`},{value:e(),name:`气泡图`},{value:e(),name:`漏斗图`},{value:e(),name:`热力图`},{value:e(),name:`玉玦图`},{value:e(),name:`直方图`},{value:e(),name:`矩形树图`},{value:e(),name:`箱形图`},{value:e(),name:`色块图`},{value:e(),name:`螺旋图`},{value:e(),name:`词云`},{value:e(),name:`词云图`},{value:e(),name:`雷达图`},{value:e(),name:`面积图`},{value:e(),name:`马赛克图`},{value:e(),name:`盒须图`},{value:e(),name:`坐标轴`},{value:e(),name:``},{value:e(),name:`Jacques Bertin`},{value:e(),name:`Leland Wilkinson`},{value:e(),name:`William Playfair`},{value:e(),name:`关联`},{value:e(),name:`分布`},{value:e(),name:`区间`},{value:e(),name:`占比`},{value:e(),name:`地图`},{value:e(),name:`时间`},{value:e(),name:`比较`},{value:e(),name:`流程`},{value:e(),name:`趋势`},{value:e(),name:`亦叶`},{value:e(),name:`再飞`},{value:e(),name:`完白`},{value:e(),name:`巴思`},{value:e(),name:`张初尘`},{value:e(),name:`御术`},{value:e(),name:`有田`},{value:e(),name:`沉鱼`},{value:e(),name:`玉伯`},{value:e(),name:`画康`},{value:e(),name:`祯逸`},{value:e(),name:`绝云`},{value:e(),name:`罗宪`},{value:e(),name:`萧庆`},{value:e(),name:`董珊珊`},{value:e(),name:`陆沉`},{value:e(),name:`顾倾`},{value:e(),name:`Domo`},{value:e(),name:`GPL`},{value:e(),name:`PAI`},{value:e(),name:`SPSS`},{value:e(),name:`SYSTAT`},{value:e(),name:`Tableau`},{value:e(),name:`D3`},{value:e(),name:`Vega`},{value:e(),name:`统计图表`}]}handleClick(e){this.msg.info(`${e.item.name} - ${e.item.value}`)}static ɵfac=function(t){return new(t||a)(vt$1(Ad))};static ɵcmp=_e({type:a,selectors:[[`chart-tag-cloud-basic`]],decls:3,vars:1,consts:[[`nz-button`,``,`nzType`,`primary`,3,`click`],[`height`,`400`,3,`clickItem`,`data`]],template:function(t,n){t&1&&(ne(0,`button`,0),Fe(`click`,function(){return n.refresh()}),en$1(1,`Refresh`),le(),ne(2,`g2-tag-cloud`,1),Fe(`clickItem`,function(m){return n.handleClick(m)}),le()),t&2&&(I(2),re(`data`,n.tags))},dependencies:[Q5,Hd,q5,K5,fn,pt],encapsulation:2})};var yn=class a{item={name:`tag-cloud`,langs:[`zh-CN`],content:{"zh-CN":{meta:{title:`g2-tag-cloud`,subtitle:`标签云`,cols:1,module:`import { G2TagCloudModule } from '@delon/chart/tag-cloud';`,description:`标签云是一套相关的标签以及与此相应的权重展示方式，一般典型的标签云有 30 至 150 个标签，而权重影响使用的字体大小或其他视觉效果。`,group:`G2`,order:0,path:`packages/chart/tag-cloud/index.zh-CN.md`,url:`/chart/tag-cloud/zh`},text:`<p>\u6807\u7B7E\u4E91\u662F\u4E00\u5957\u76F8\u5173\u7684\u6807\u7B7E\u4EE5\u53CA\u4E0E\u6B64\u76F8\u5E94\u7684\u6743\u91CD\u5C55\u793A\u65B9\u5F0F\uFF0C\u4E00\u822C\u5178\u578B\u7684\u6807\u7B7E\u4E91\u6709 30 \u81F3 150 \u4E2A\u6807\u7B7E\uFF0C\u800C\u6743\u91CD\u5F71\u54CD\u4F7F\u7528\u7684\u5B57\u4F53\u5927\u5C0F\u6216\u5176\u4ED6\u89C6\u89C9\u6548\u679C\u3002</p>
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
<td><code>200</code></td>
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
<td><code>[data]</code></td>
<td>\u6570\u636E</td>
<td><code>G2TagCloudData[]</code></td>
<td><code>[]</code></td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td>
<td>\`string</td>
<td>LooseObject\`</td>
</tr>
<tr>
<td><code>(clickItem)</code></td>
<td>\u70B9\u51FB\u9879\u56DE\u8C03</td>
<td><code>EventEmitter&lt;G2TagCloudClickItem&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td>
<td><code>EventEmitter&lt;Chart&gt;</code></td>
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
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-tag-cloud`,title:`g2-tag-cloud`},{id:`g2tagclouddata`,title:`G2TagCloudData`}]}],raw:"---\ntitle: g2-tag-cloud\nsubtitle: 标签云\ncols: 1\ntype: G2\nmodule: import { G2TagCloudModule } from '@delon/chart/tag-cloud';\n---\n\n标签云是一套相关的标签以及与此相应的权重展示方式，一般典型的标签云有 30 至 150 个标签，而权重影响使用的字体大小或其他视觉效果。\n\n## API\n\n### g2-tag-cloud\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |\n| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `200` |\n| `[height]` | 高度值 | `number` | `200` |\n| `[width]` | 宽度值，若不指定自动按宿主元素的宽度 | `number` | `0` |\n| `[data]` | 数据 | `G2TagCloudData[]` | `[]` |\n| `[theme]` | 定制图表主题 | `string | LooseObject` | - |\n| `(clickItem)` | 点击项回调 | `EventEmitter<G2TagCloudClickItem>` | - |\n| `(ready)` | 当G2完成初始化后调用 | `EventEmitter<Chart>` | - |\n\n### G2TagCloudData\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[name]` | 名称 | `string` | - |\n| `[value]` | 值 | `number` | - |"}}};codes=[{id:`chart-tag-cloud-basic`,name:`basic`,title:{"zh-CN":`基础`,"en-US":`Basic`},code:`import { Component } from '@angular/core';

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
export class ChartTagCloudBasic {
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
}`,order:0,type:`demo`,summary:{"en-US":``,"zh-CN":`<p>\u57FA\u7840\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":``,"zh-CN":`\u57FA\u7840\u7528\u6CD5\u3002
`},path:`packages/chart/tag-cloud/demo/basic.md`}];static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-tag-cloud`]],hostAttrs:[1,`d-block`],decls:5,vars:5,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`24`],[3,`item`]],template:function(t,n){t&1&&(ne(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),lt$1(4,`chart-tag-cloud-basic`),le()()()()),t&2&&(re(`codes`,n.codes)(`item`,n.item),I(),re(`nzGutter`,16),I(2),re(`item`,n.codes[0]),Vt$1(`id`,n.codes[0].id))},dependencies:[rt$1,vn,ln$1,Ue$2,X],encapsulation:2})};function Yo(a,e){if(a&1&&(Qt$1(0),ne(1,`h4`),en$1(2),le(),Xt$1()),a&2){let t=R();I(2),fr(t.title)}}function Ko(a,e){a&1&&lt$1(0,`nz-skeleton`)}var he=class a extends U{title;maxAxis=2;data=[];titleMap;colorMap={y1:`#5B8FF9`,y2:`#5AD8A6`,y3:`#5D7092`,y4:`#F6BD16`,y5:`#E86452`};mask=`HH:mm`;maskSlider=`HH:mm`;position=`top`;height=450;padding=[40,8,64,40];borderWidth=2;slider=!0;clickItem=new k;onlyChangeData=e=>{let t=e.titleMap;return!(t&&!t.firstChange&&t.currentValue!==t.previousValue)};install(){let{node:e,height:t,padding:n,slider:s,maxAxis:m,theme:u,maskSlider:M}=this,D=this._chart=new this.winG2.Chart({container:e.nativeElement,autoFit:!0,height:t,padding:n,theme:u});D.axis(`time`,{title:null}),D.axis(`y1`,{title:null});for(let v=2;v<=m;v++)D.axis(`y${v}`,!1);D.line().position(`time*y1`);for(let v=2;v<=m;v++)D.line().position(`time*y${v}`);D.tooltip({showCrosshairs:!0,shared:!0});let f=g(g({},[]),n);f[0]=0,s&&D.option(`slider`,{height:26,start:0,end:1,trendCfg:{isArea:!1},minLimit:2,formatter:v=>D1(v,M)}),D.on(`plot:click`,v=>{let $=this._chart.getSnapRecords({x:v.x,y:v.y});this.ngZone.run(()=>this.clickItem.emit({item:$[0]._origin,ev:v}))}),D.on(`legend-item:click`,v=>{let $=v?.target?.get(`delegateObject`).item,j=$?.id,I=D.geometries.find(L=>L.getAttribute(`position`).getFields()[1]===j);I&&I.changeVisible(!$.unchecked)}),this.ready.next(D),this.changeData(),D.render()}changeData(){let{_chart:e,height:t,padding:n,mask:s,titleMap:m,position:u,colorMap:M,borderWidth:D,maxAxis:f}=this,v=[...this.data];if(!e||v.length<=0)return;let $=[...Array(f)].map((T,O)=>O+1);e.legend({position:u,custom:!0,items:$.map(T=>{let O=`y${T}`;return{id:O,name:m[O],value:O,marker:{style:{fill:M[O]}}}})}),e.geometries.forEach((T,O)=>{T.color(M[`y${O+1}`]).size(D)}),e.height=t,e.padding=n,v=v.map(T=>(T.time=AB(T.time),T._time=+T.time,T)).sort((T,O)=>T._time-O._time);let j=Math.max(...$.map(T=>[...v].sort((O,yt)=>yt[`y${T}`]-O[`y${T}`])[0][`y${T}`])),I={};$.forEach(T=>{let O=`y${T}`;I[O]={alias:m[O],max:j,min:0}}),e.scale(g({time:{type:`time`,mask:s,range:[0,1]}},I));let L={start:v[0]._time,end:v[v.length-1]._time},R=v.filter(T=>T._time>=L.start&&T._time<=L.end);e.changeData(R)}static ɵfac=(()=>{let e;return function(n){return(e||(e=Yn(a)))(n||a)}})();static ɵcmp=_e({type:a,selectors:[[`g2-timeline`]],inputs:{title:`title`,maxAxis:[2,`maxAxis`,`maxAxis`,_o$1],data:`data`,titleMap:`titleMap`,colorMap:`colorMap`,mask:`mask`,maskSlider:`maskSlider`,position:`position`,height:[2,`height`,`height`,_o$1],padding:`padding`,borderWidth:[2,`borderWidth`,`borderWidth`,_o$1],slider:[2,`slider`,`slider`,N]},outputs:{clickItem:`clickItem`},exportAs:[`g2Timeline`],features:[Zt$1],decls:4,vars:2,consts:[[`container`,``],[4,`nzStringTemplateOutlet`]],template:function(t,n){t&1&&(Ye(0,Yo,3,1,`ng-container`,1),he$1(1,Ko,1,0,`nz-skeleton`),lt$1(2,`div`,null,0)),t&2&&(re(`nzStringTemplateOutlet`,n.title),I(),fe(n.loaded?-1:1))},dependencies:[Zn,Y$1],encapsulation:2})};var Xo=[he];var Ue=class a{static ɵfac=function(t){return new(t||a)};static ɵmod=J({type:a});static ɵinj=Q({imports:[sb,Ur,Z,Xo]})};var ei=()=>({y1:`客流量`,y2:`支付笔数`});var bn=class a{msg=u(Ad);chartData=[];ngOnInit(){for(let e=0;e<20;e+=1)this.chartData.push({time:new Date().getTime()+1e3*60*30*e,y1:Math.floor(Math.random()*100)+1e3,y2:Math.floor(Math.random()*100)+10})}handleClick(e){this.msg.info(`\u5BA2\u6D41\u91CF: ${e.item.y1}, \u652F\u4ED8\u7B14\u6570: ${e.item.y2}`)}static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-timeline-basic`]],decls:1,vars:4,consts:[[3,`clickItem`,`data`,`titleMap`,`height`]],template:function(t,n){t&1&&(ne(0,`g2-timeline`,0),Fe(`clickItem`,function(m){return n.handleClick(m)}),le()),t&2&&re(`data`,n.chartData)(`titleMap`,GP(3,ei))(`height`,200)},dependencies:[Ue,he],encapsulation:2})};function ti(a,e){if(a&1){let t=Jt$1();ne(0,`button`,0),Fe(`click`,function(){let s=mt$1(t).$implicit;return gt$1(R().refresh(s))}),en$1(1),le()}if(a&2){let t=e.$implicit;I(),wo$1(``,t,` axis`)}}var Cn=class a{chartData=[];titleMap={y1:`指标1`,y2:`指标2`};maxAxis=2;axisList=new Array(5).fill(0).map((e,t)=>t+1);constructor(){this.refresh()}genData(e){let t={y1:``};for(let s=1;s<=e;s++)t[`y${s}`]=`\u6307\u6807${s}`;let n=[];for(let s=0;s<20;s+=1){let m={time:new Date().getTime()+18e5*s,y1:0};for(let u=1;u<=e;u++)m[`y${u}`]=Math.floor(Math.random()*100)+500*u;n.push(m)}return{titleMap:t,data:n}}refresh(e){this.maxAxis=e??this.maxAxis;let{titleMap:t,data:n}=this.genData(this.maxAxis);this.chartData=n,this.titleMap=t}static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-timeline-max-axis`]],decls:5,vars:4,consts:[[`nz-button`,``,`nzType`,`primary`,3,`click`],[`nz-button`,``,`nzType`,`primary`],[3,`maxAxis`,`data`,`titleMap`,`height`]],template:function(t,n){t&1&&(ne(0,`button`,0),Fe(`click`,function(){return n.refresh()}),en$1(1,`Refresh`),le(),Dl(2,ti,2,1,`button`,1,eP),lt$1(4,`g2-timeline`,2)),t&2&&(I(2),Ml(n.axisList),I(2),re(`maxAxis`,n.maxAxis)(`data`,n.chartData)(`titleMap`,n.titleMap)(`height`,300))},dependencies:[Ue,he,Q5,Hd,q5,K5],encapsulation:2})};var ni=()=>({y1:`客流量`,y2:`支付笔数`});var Mn=class a{msg=u(Ad);chartData=[];ngOnInit(){for(let e=0;e<20;e+=1)this.chartData.push({time:new Date().getTime()+1e3*60*60*24*e,y1:Math.floor(Math.random()*100)+1e3,y2:Math.floor(Math.random()*100)+10})}handleClick(e){this.msg.info(`\u5BA2\u6D41\u91CF: ${e.item.y1}, \u652F\u4ED8\u7B14\u6570: ${e.item.y2}`)}static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-timeline-mask`]],decls:1,vars:4,consts:[[`mask`,`MM月DD日`,`maskSlider`,`MM月dd日`,3,`clickItem`,`data`,`titleMap`,`height`]],template:function(t,n){t&1&&(ne(0,`g2-timeline`,0),Fe(`clickItem`,function(m){return n.handleClick(m)}),le()),t&2&&re(`data`,n.chartData)(`titleMap`,GP(3,ni))(`height`,200)},dependencies:[Ue,he],encapsulation:2})};var Dn=class a{item={name:`timeline`,langs:[`zh-CN`],content:{"zh-CN":{meta:{title:`g2-timeline`,subtitle:`折线图`,cols:1,module:`import { G2TimelineModule } from '@delon/chart/timeline';`,description:`使用 timeline 组件可以实现带有时间轴的柱状图展现，而其中的 x 属性，则是时间值的指向，默认最多支持同时展现两个指标，分别是 y1 和 y2。`,group:`G2`,order:0,path:`packages/chart/timeline/index.zh-CN.md`,url:`/chart/timeline/zh`},text:`<p>\u4F7F\u7528 <code>timeline</code> \u7EC4\u4EF6\u53EF\u4EE5\u5B9E\u73B0\u5E26\u6709\u65F6\u95F4\u8F74\u7684\u67F1\u72B6\u56FE\u5C55\u73B0\uFF0C\u800C\u5176\u4E2D\u7684 <code>x</code> \u5C5E\u6027\uFF0C\u5219\u662F\u65F6\u95F4\u503C\u7684\u6307\u5411\uFF0C\u9ED8\u8BA4\u6700\u591A\u652F\u6301\u540C\u65F6\u5C55\u73B0\u4E24\u4E2A\u6307\u6807\uFF0C\u5206\u522B\u662F <code>y1</code> \u548C <code>y2</code>\u3002</p>
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
<td><code>400</code></td>
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
<td>\`string</td>
<td>LooseObject\`</td>
</tr>
<tr>
<td><code>(clickItem)</code></td>
<td>\u70B9\u51FB\u9879\u56DE\u8C03</td>
<td><code>EventEmitter&lt;G2TimelineClickItem&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(ready)</code></td>
<td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td>
<td><code>EventEmitter&lt;Chart&gt;</code></td>
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
<td>\`Date</td>
<td>number\`</td>
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
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-timeline`,title:`g2-timeline`},{id:`g2timelinedata`,title:`G2TimelineData`},{id:`g2timelinemap`,title:`G2TimelineMap`}]}],raw:"---\ntitle: g2-timeline\nsubtitle: 折线图\ncols: 1\ntype: G2\nmodule: import { G2TimelineModule } from '@delon/chart/timeline';\n---\n\n使用 `timeline` 组件可以实现带有时间轴的柱状图展现，而其中的 `x` 属性，则是时间值的指向，默认最多支持同时展现两个指标，分别是 `y1` 和 `y2`。\n\n## API\n\n### g2-timeline\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |\n| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |\n| `[title]` | 图表标题 | `string,TemplateRef<void>` | - |\n| `[maxAxis]` | 最大指标数量 | `number` | `2` |\n| `[data]` | 数据，注：根据 `maxAxis` 值传递指标数据 | `G2TimelineData[]` | - |\n| `[titleMap]` | 指标别名 | `G2TimelineMap` | - |\n| `[colorMap]` | 颜色 | `G2TimelineMap` | `{ y1: '#5B8FF9', y2: '#5AD8A6', y3: '#5D7092', y4: '#F6BD16', y5: '#E86452' }` |\n| `[height]` | 高度值 | `number` | `400` |\n| `[padding]` | 图表内部间距 | `number[]` | `[40, 8, 64, 40]` |\n| `[borderWidth]` | 线条 | `number` | `2` |\n| `[mask]` | 日期格式，使用 [G2 Mask日期格式](https://g2.antv.vision/zh/docs/manual/tutorial/scale#time) | `string` | `HH:mm` |\n| `[maskSlider]` | 滑动条日期格式，使用 [date-fns 日期格式](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table) | `string` | `HH:mm` |\n| `[position]` | 标题位置 | `'top','right','bottom','left'` | `'top'` |\n| `[slider]` | 是否需要滑动条 | `boolean` | `true` |\n| `[theme]` | 定制图表主题 | `string | LooseObject` | - |\n| `(clickItem)` | 点击项回调 | `EventEmitter<G2TimelineClickItem>` | - |\n| `(ready)` | 当G2完成初始化后调用 | `EventEmitter<Chart>` | - |\n\n### G2TimelineData\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[time]` | 日期格式 | `Date | number` | - |\n| `[y1]` | 指标1数据 | `number` | - |\n| `[y2]` | 指标2数据 | `number` | - |\n| `[y3]` | 指标3数据 | `number` | - |\n| `[y4]` | 指标4数据 | `number` | - |\n| `[y5]` | 指标5数据 | `number` | - |\n\n### G2TimelineMap\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[y1]` | 指标1 | `string` | - |\n| `[y2]` | 指标2 | `string` | - |\n| `[y3]` | 指标3 | `string` | - |\n| `[y4]` | 指标4 | `string` | - |\n| `[y5]` | 指标5 | `string` | - |"}}};codes=[{id:`chart-timeline-basic`,name:`basic`,title:{"zh-CN":`基础`,"en-US":`Basic`},code:`import { Component, OnInit, inject } from '@angular/core';

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
export class ChartTimelineBasic implements OnInit {
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
}`,order:0,type:`demo`,summary:{"en-US":``,"zh-CN":`<p>\u5E26\u6709\u65F6\u95F4\u8F74\u7684\u56FE\u8868\u3002</p>
`},summary_raw:{"en-US":``,"zh-CN":`\u5E26\u6709\u65F6\u95F4\u8F74\u7684\u56FE\u8868\u3002
`},path:`packages/chart/timeline/demo/basic.md`},{id:`chart-timeline-max-axis`,name:`max-axis`,title:{"zh-CN":`多指标`,"en-US":`Multiple indicators`},code:`import { Component } from '@angular/core';

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
export class ChartTimelineMaxAxis {
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
}`,order:1,type:`demo`,summary:{"en-US":``,"zh-CN":`<p>\u5229\u7528 <code>maxAxis</code> \u5C5E\u6027\u6765\u8C03\u6574\u591A\u4E2A\u6307\u6807\uFF0C\u6700\u591A\u652F\u6301 <code>5</code> \u4E2A\u6307\u6807\u503C\u3002</p>
`},summary_raw:{"en-US":``,"zh-CN":"利用 `maxAxis` 属性来调整多个指标，最多支持 `5` 个指标值。\n"},path:`packages/chart/timeline/demo/max-axis.md`},{id:`chart-timeline-mask`,name:`mask`,title:{"zh-CN":`时间格式化`,"en-US":`Time mask format`},code:`import { Component, OnInit, inject } from '@angular/core';

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
export class ChartTimelineMask implements OnInit {
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
}`,order:2,type:`demo`,summary:{"en-US":``,"zh-CN":`<p>\u5229\u7528 <code>mask</code> \u548C <code>maskSlider</code> \u6765\u6539\u53D8\u65F6\u95F4\u683C\u5F0F\u3002</p>
`},summary_raw:{"en-US":``,"zh-CN":"利用 `mask` 和 `maskSlider` 来改变时间格式。\n"},path:`packages/chart/timeline/demo/mask.md`}];static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-timeline`]],hostAttrs:[1,`d-block`],decls:9,vars:9,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`24`],[3,`item`]],template:function(t,n){t&1&&(ne(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),lt$1(4,`chart-timeline-basic`),le(),ne(5,`code-box`,3),lt$1(6,`chart-timeline-max-axis`),le(),ne(7,`code-box`,3),lt$1(8,`chart-timeline-mask`),le()()()()),t&2&&(re(`codes`,n.codes)(`item`,n.item),I(),re(`nzGutter`,16),I(2),re(`item`,n.codes[0]),Vt$1(`id`,n.codes[0].id),I(2),re(`item`,n.codes[1]),Vt$1(`id`,n.codes[1].id),I(2),re(`item`,n.codes[2]),Vt$1(`id`,n.codes[2].id))},dependencies:[rt$1,bn,Cn,Mn,ln$1,Ue$2,X],encapsulation:2})};var xn=class a{static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-trend-basic`]],decls:4,vars:0,consts:[[`flag`,`up`],[`flag`,`down`,1,`ml-sm`]],template:function(t,n){t&1&&(ne(0,`trend`,0),en$1(1,`12%`),le(),ne(2,`trend`,1),en$1(3,`11%`),le())},dependencies:[Oe,ye],encapsulation:2})};var zn=class a{static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-trend-reverse`]],decls:4,vars:0,consts:[[`flag`,`up`,`reverseColor`,``],[`flag`,`down`,`reverseColor`,``,1,`ml-sm`]],template:function(t,n){t&1&&(ne(0,`trend`,0),en$1(1,`12%`),le(),ne(2,`trend`,1),en$1(3,`11%`),le())},dependencies:[Oe,ye],encapsulation:2})};var Tn=class a{item={name:`trend`,langs:[`zh-CN`],content:{"zh-CN":{meta:{title:`trend`,subtitle:`趋势标记`,cols:1,module:`import { TrendModule } from '@delon/chart/trend';`,description:`趋势符号，标记上升和下降趋势。通常用绿色代表“好”，红色代表“不好”，股票涨跌场景除外。`,group:`G2`,order:0,path:`packages/chart/trend/index.zh-CN.md`,url:`/chart/trend/zh`},text:`<p>\u8D8B\u52BF\u7B26\u53F7\uFF0C\u6807\u8BB0\u4E0A\u5347\u548C\u4E0B\u964D\u8D8B\u52BF\u3002\u901A\u5E38\u7528\u7EFF\u8272\u4EE3\u8868\u201C\u597D\u201D\uFF0C\u7EA2\u8272\u4EE3\u8868\u201C\u4E0D\u597D\u201D\uFF0C\u80A1\u7968\u6DA8\u8DCC\u573A\u666F\u9664\u5916\u3002</p>
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
| \`[reverseColor]\` | \u989C\u8272\u53CD\u8F6C | \`boolean\` | \`false\` |`}}};codes=[{id:`chart-trend-basic`,name:`basic`,title:{"zh-CN":`演示`},code:`import { Component } from '@angular/core';

import { TrendModule } from '@delon/chart/trend';

@Component({
  selector: 'chart-trend-basic',
  template: \`
    <trend flag="up">12%</trend>
    <trend flag="down" class="ml-sm">11%</trend>
  \`,
  imports: [TrendModule]
})
export class ChartTrendBasic {}`,order:0,type:`demo`,summary:{"en-US":``,"zh-CN":`<p>\u5728\u6570\u503C\u80CC\u540E\u6DFB\u52A0\u4E00\u4E2A\u5C0F\u56FE\u6807\u6765\u6807\u8BC6\u6DA8\u8DCC\u60C5\u51B5\u3002</p>
`},summary_raw:{"en-US":``,"zh-CN":`\u5728\u6570\u503C\u80CC\u540E\u6DFB\u52A0\u4E00\u4E2A\u5C0F\u56FE\u6807\u6765\u6807\u8BC6\u6DA8\u8DCC\u60C5\u51B5\u3002
`},path:`packages/chart/trend/demo/basic.md`},{id:`chart-trend-reverse`,name:`reverse`,title:{"zh-CN":`颜色反转`},code:`import { Component } from '@angular/core';

import { TrendModule } from '@delon/chart/trend';

@Component({
  selector: 'chart-trend-reverse',
  template: \`
    <trend flag="up" reverseColor>12%</trend>
    <trend flag="down" reverseColor class="ml-sm">11%</trend>
  \`,
  imports: [TrendModule]
})
export class ChartTrendReverse {}`,order:1,type:`demo`,summary:{"en-US":``,"zh-CN":`<p>\u5728\u6570\u503C\u80CC\u540E\u6DFB\u52A0\u4E00\u4E2A\u5C0F\u56FE\u6807\u6765\u6807\u8BC6\u6DA8\u8DCC\u60C5\u51B5\u3002</p>
`},summary_raw:{"en-US":``,"zh-CN":`\u5728\u6570\u503C\u80CC\u540E\u6DFB\u52A0\u4E00\u4E2A\u5C0F\u56FE\u6807\u6765\u6807\u8BC6\u6DA8\u8DCC\u60C5\u51B5\u3002
`},path:`packages/chart/trend/demo/reverse.md`}];static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-trend`]],hostAttrs:[1,`d-block`],decls:7,vars:7,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`24`],[3,`item`]],template:function(t,n){t&1&&(ne(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),lt$1(4,`chart-trend-basic`),le(),ne(5,`code-box`,3),lt$1(6,`chart-trend-reverse`),le()()()()),t&2&&(re(`codes`,n.codes)(`item`,n.item),I(),re(`nzGutter`,16),I(2),re(`item`,n.codes[0]),Vt$1(`id`,n.codes[0].id),I(2),re(`item`,n.codes[1]),Vt$1(`id`,n.codes[1].id))},dependencies:[rt$1,xn,zn,ln$1,Ue$2,X],encapsulation:2})};var ai=[`container`];var oi=(a,e)=>({height:a,width:e,overflow:`hidden`});var ii=a=>({width:a});function ri(a,e){if(a&1&&(Qt$1(0),en$1(1),Xt$1()),a&2){let t=R(2);I(),fr(t.title)}}function di(a,e){if(a&1&&(ne(0,`span`,3),Ye(1,ri,2,1,`ng-container`,5),le()),a&2){let t=R();I(),re(`nzStringTemplateOutlet`,t.title)}}var vt=class a{el=u(j).nativeElement;renderer=u(je$1);ngZone=u(H);cdr=u(qe);platform=u(ye$1);resize$=null;node;timer;animate=!0;delay=0;title;color=`#1890FF`;height=160;percent;renderChart(e){if(!this.resize$)return;this.updateRadio();let{percent:t,color:n,node:s,animate:m}=this,u=Math.min(Math.max(t/100,0),100),M=this;cancelAnimationFrame(this.timer);let D=s.nativeElement,f=D.getContext(`2d`),v=D.width,$=D.height,j=v/2,I=2,L=j-I;f.beginPath(),f.lineWidth=I*2;let R=v-I,T=R/8,O=I,yt=0,ge=.2,fe=ge,ut=0,On=m?.005:.015,qe=[],Nn=j-I,jn=-(Math.PI/2),Wn=!0;for(let q=jn;q<jn+2*Math.PI;q+=1/(8*Math.PI))qe.push([j+Nn*Math.cos(q),j+Nn*Math.sin(q)]);let bt=qe.shift();f.strokeStyle=n,f.moveTo(bt[0],bt[1]);function Ea(){f.beginPath(),f.save();let q=[];for(let Ct=O;Ct<=O+R;Ct+=20/R){let Aa=yt+(O+Ct)/T,Ba=Math.sin(Aa)*fe,Un=Ct,qn=2*L*(1-ut)+(j-L)-T*Ba;f.lineTo(Un,qn),q.push([Un,qn])}let Ln=q.shift();f.lineTo(O+R,$),f.lineTo(O,$),f.lineTo(Ln[0],Ln[1]);let Sn=f.createLinearGradient(0,0,0,$);Sn.addColorStop(0,`#ffffff`),Sn.addColorStop(1,n),f.fillStyle=Sn,f.fill(),f.restore()}function $n(){if(f.clearRect(0,0,v,$),Wn&&!e)if(qe.length)if(m){let q=qe.shift();f.lineTo(q[0],q[1]),f.stroke()}else{for(let q of qe)f.lineTo(q[0],q[1]),f.stroke();qe=[]}else Wn=!1,f.lineTo(bt[0],bt[1]),f.stroke(),qe=null,f.globalCompositeOperation=`destination-over`,f.beginPath(),f.lineWidth=I,f.arc(j,j,Nn,0,2*Math.PI,!0),f.beginPath(),f.save(),f.arc(j,j,j-3*I,0,2*Math.PI,!0),f.restore(),f.clip(),f.fillStyle=n;else{if(u>=.85){if(fe>ge/4)fe-=ge*.01}else if(u<=.1){if(fe<ge*1.5)fe+=ge*.01}else{if(fe<=ge)fe+=ge*.01;if(fe>=ge)fe-=ge*.01}u-ut>0&&(ut+=On),u-ut<0&&(ut-=On),yt+=.07,Ea()}M.timer=requestAnimationFrame($n)}$n()}updateRadio(){let{offsetWidth:e}=this.el.parentNode,t=e<this.height?e/this.height:1;this.renderer.setStyle(this.el,`transform`,`scale(${t})`)}render(){this.renderChart(!1)}installResizeEvent(){this.resize$=Pc(window,`resize`).pipe(Pn(200)).subscribe(()=>this.updateRadio())}ngOnInit(){this.platform.isBrowser&&(this.installResizeEvent(),this.ngZone.runOutsideAngular(()=>setTimeout(()=>this.render(),this.delay)))}ngOnChanges(){this.ngZone.runOutsideAngular(()=>this.renderChart(!0)),this.cdr.detectChanges()}ngOnDestroy(){this.timer&&cancelAnimationFrame(this.timer),this.resize$&&this.resize$.unsubscribe()}static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`g2-water-wave`]],viewQuery:function(t,n){if(t&1&&Un(ai,7),t&2){let s;Ue$1(s=$e$1())&&(n.node=s.first)}},hostVars:2,hostBindings:function(t,n){t&2&&We$1(`g2-water-wave`,!0)},inputs:{animate:[2,`animate`,`animate`,N],delay:[2,`delay`,`delay`,_o$1],title:`title`,color:`color`,height:[2,`height`,`height`,_o$1],percent:[2,`percent`,`percent`,_o$1]},exportAs:[`g2WaterWave`],features:[Me$1],decls:7,vars:13,consts:[[`container`,``],[1,`g2-water-wave__canvas`],[1,`g2-water-wave__desc`],[1,`g2-water-wave__desc-title`],[1,`g2-water-wave__desc-percent`],[4,`nzStringTemplateOutlet`]],template:function(t,n){t&1&&(ne(0,`div`),lt$1(1,`canvas`,1,0),le(),ne(3,`div`,2),he$1(4,di,2,1,`span`,3),ne(5,`h4`,4),en$1(6),le()()),t&2&&(bo$1(Wh(8,oi,n.height+`px`,n.height+`px`)),I(),Vt$1(`width`,n.height*2)(`height`,n.height*2),I(2),bo$1($h(11,ii,n.height+`px`)),I(),fe(n.title?4:-1),I(2),wo$1(``,n.percent,`%`))},dependencies:[Zn],encapsulation:2})};var _n=class a{static ɵfac=function(t){return new(t||a)};static ɵmod=J({type:a});static ɵinj=Q({imports:[sb,Ur]})};var Gn=class a{static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-water-wave-basic`]],hostVars:2,hostBindings:function(t,n){t&2&&We$1(`d-block`,!0)},decls:1,vars:3,consts:[[3,`title`,`percent`,`height`]],template:function(t,n){t&1&&lt$1(0,`g2-water-wave`,0),t&2&&re(`title`,`补贴资金剩余`)(`percent`,34)(`height`,161)},dependencies:[_n,vt],encapsulation:2})};var kn=class a{item={name:`water-wave`,langs:[`zh-CN`],content:{"zh-CN":{meta:{title:`g2-water-wave`,subtitle:`水波图`,cols:1,module:`import { G2WaterWaveModule } from '@delon/chart/water-wave';`,description:`水波图是一种比例的展示方式，可以更直观的展示关键值的占比。默认不支持父元素自适应，可以监听父元素的变化并使用 render() 方法来重置渲染。`,group:`G2`,order:0,path:`packages/chart/water-wave/index.zh-CN.md`,url:`/chart/water-wave/zh`},text:`<p>\u6C34\u6CE2\u56FE\u662F\u4E00\u79CD\u6BD4\u4F8B\u7684\u5C55\u793A\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u66F4\u76F4\u89C2\u7684\u5C55\u793A\u5173\u952E\u503C\u7684\u5360\u6BD4\u3002</p>
<blockquote>
<p>\u9ED8\u8BA4\u4E0D\u652F\u6301\u7236\u5143\u7D20\u81EA\u9002\u5E94\uFF0C\u53EF\u4EE5\u76D1\u542C\u7236\u5143\u7D20\u7684\u53D8\u5316\u5E76\u4F7F\u7528 <code>render()</code> \u65B9\u6CD5\u6765\u91CD\u7F6E\u6E32\u67D3\u3002</p>
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
<td><code>[animate]</code></td>
<td>\u662F\u5426\u663E\u793A\u52A8\u753B</td>
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
<td><code>160</code></td>
</tr>
<tr>
<td><code>[color]</code></td>
<td>\u56FE\u8868\u989C\u8272</td>
<td><code>string</code></td>
<td><code>#1890FF</code></td>
</tr>
<tr>
<td><code>[percent]</code></td>
<td>\u8FDB\u5EA6\u6BD4\u4F8B</td>
<td><code>number</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`g2-water-wave`,title:`g2-water-wave`}]}],raw:"---\ntitle: g2-water-wave\nsubtitle: 水波图\ncols: 1\ntype: G2\nmodule: import { G2WaterWaveModule } from '@delon/chart/water-wave';\n---\n\n水波图是一种比例的展示方式，可以更直观的展示关键值的占比。\n\n> 默认不支持父元素自适应，可以监听父元素的变化并使用 `render()` 方法来重置渲染。\n\n## API\n\n### g2-water-wave\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[animate]` | 是否显示动画 | `boolean` | `true` |\n| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |\n| `[title]` | 图表标题 | `string,TemplateRef<void>` | - |\n| `[height]` | 图表高度 | `number` | `160` |\n| `[color]` | 图表颜色 | `string` | `#1890FF` |\n| `[percent]` | 进度比例 | `number` | - |"}}};codes=[{id:`chart-water-wave-basic`,name:`basic`,title:{"zh-CN":`基础`,"en-US":`Basic`},code:`import { Component } from '@angular/core';

import { G2WaterWaveModule } from '@delon/chart/water-wave';

@Component({
  selector: 'chart-water-wave-basic',
  template: \` <g2-water-wave [title]="'\u8865\u8D34\u8D44\u91D1\u5269\u4F59'" [percent]="34" [height]="161" /> \`,
  host: {
    '[class.d-block]': 'true'
  },
  imports: [G2WaterWaveModule]
})
export class ChartWaterWaveBasic {}`,order:0,type:`demo`,summary:{"en-US":``,"zh-CN":`<p>\u57FA\u7840\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":``,"zh-CN":`\u57FA\u7840\u7528\u6CD5\u3002
`},path:`packages/chart/water-wave/demo/basic.md`}];static ɵfac=function(t){return new(t||a)};static ɵcmp=_e({type:a,selectors:[[`chart-water-wave`]],hostAttrs:[1,`d-block`],decls:5,vars:5,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`24`],[3,`item`]],template:function(t,n){t&1&&(ne(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),lt$1(4,`chart-water-wave-basic`),le()()()()),t&2&&(re(`codes`,n.codes)(`item`,n.item),I(),re(`nzGutter`,16),I(2),re(`item`,n.codes[0]),Vt$1(`id`,n.codes[0].id))},dependencies:[rt$1,Gn,ln$1,Ue$2,X],encapsulation:2})};var Wg=[{path:``,component:ee$1,children:[{path:`faq`,redirectTo:`faq/zh`,pathMatch:`full`},{path:`faq/:lang`,component:Tt},{path:`getting-started`,redirectTo:`getting-started/zh`,pathMatch:`full`},{path:`getting-started/:lang`,component:_t},{path:`bar`,redirectTo:`bar/zh`,pathMatch:`full`},{path:`bar/:lang`,component:wt},{path:`card`,redirectTo:`card/zh`,pathMatch:`full`},{path:`card/:lang`,component:Bt},{path:`chart-echarts`,redirectTo:`chart-echarts/zh`,pathMatch:`full`},{path:`chart-echarts/:lang`,component:Rt},{path:`custom`,redirectTo:`custom/zh`,pathMatch:`full`},{path:`custom/:lang`,component:Wt},{path:`gauge`,redirectTo:`gauge/zh`,pathMatch:`full`},{path:`gauge/:lang`,component:Ut},{path:`mini-area`,redirectTo:`mini-area/zh`,pathMatch:`full`},{path:`mini-area/:lang`,component:Zt},{path:`mini-bar`,redirectTo:`mini-bar/zh`,pathMatch:`full`},{path:`mini-bar/:lang`,component:Kt},{path:`mini-progress`,redirectTo:`mini-progress/zh`,pathMatch:`full`},{path:`mini-progress/:lang`,component:tn},{path:`number-info`,redirectTo:`number-info/zh`,pathMatch:`full`},{path:`number-info/:lang`,component:rn},{path:`pie`,redirectTo:`pie/zh`,pathMatch:`full`},{path:`pie/:lang`,component:ln},{path:`radar`,redirectTo:`radar/zh`,pathMatch:`full`},{path:`radar/:lang`,component:pn},{path:`single-bar`,redirectTo:`single-bar/zh`,pathMatch:`full`},{path:`single-bar/:lang`,component:gn},{path:`tag-cloud`,redirectTo:`tag-cloud/zh`,pathMatch:`full`},{path:`tag-cloud/:lang`,component:yn},{path:`timeline`,redirectTo:`timeline/zh`,pathMatch:`full`},{path:`timeline/:lang`,component:Dn},{path:`trend`,redirectTo:`trend/zh`,pathMatch:`full`},{path:`trend/:lang`,component:Tn},{path:`water-wave`,redirectTo:`water-wave/zh`,pathMatch:`full`},{path:`water-wave/:lang`,component:kn}]}];export{Wg as routes};