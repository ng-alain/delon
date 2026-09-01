import{$o as lt,Aa as en,Ct as Hd,Gc as vt,Jt as K5,Mc as u,Ri as _e,Tt as I$1,Ut as Jp,Xr as Vt,ec as re,gs as ne,qn as Q5,qo as le,tt as Fe,v as Ap,zs as q5}from"./chunk-DjEIGkM3.js";import{r as Ad}from"./chunk-DniIbunx.js";import{n as Ue,u as ln}from"./chunk-C8Kq7pnr.js";import{t as X$1}from"./main-BVCIPMT4.js";import"./chunk-BaLClJNm.js";import"./chunk-DYEIxuDB.js";import{t as rt}from"./chunk-DaGDDpY9.js";import{t as ee$1}from"./chunk-BSdR-Qg0.js";import{n as k,t as h}from"./chunk-CvhXpZs8.js";var M=class n{item={name:`component-styles`,langs:[`zh-CN`],content:{"zh-CN":{meta:{order:15,title:`组件样式`,description:`当你在使用 ng g ng-alain:list 来生成页面时，会发现并不会产生 Less 文件，主要是 NG-ALAIN 有自己的一套主题系统，NG-ALAIN 希望利用这套主题系统来构建组件，让 CSS 变成编程化。然而它并不能满足所有需求，本文会针对这方面做一个全面描述。手动创建组件样式文件，...`,group:`Documents`,path:`packages/theme/docs/component-styles.md`,url:`/theme/component-styles/zh`},text:`<p>\u5F53\u4F60\u5728\u4F7F\u7528 <code>ng g ng-alain:list</code> \u6765\u751F\u6210\u9875\u9762\u65F6\uFF0C\u4F1A\u53D1\u73B0\u5E76\u4E0D\u4F1A\u4EA7\u751F Less \u6587\u4EF6\uFF0C\u4E3B\u8981\u662F NG-ALAIN \u6709\u81EA\u5DF1\u7684\u4E00\u5957\u4E3B\u9898\u7CFB\u7EDF\uFF0CNG-ALAIN \u5E0C\u671B\u5229\u7528\u8FD9\u5957\u4E3B\u9898\u7CFB\u7EDF\u6765\u6784\u5EFA\u7EC4\u4EF6\uFF0C\u8BA9 CSS \u53D8\u6210\u7F16\u7A0B\u5316\u3002\u7136\u800C\u5B83\u5E76\u4E0D\u80FD\u6EE1\u8DB3\u6240\u6709\u9700\u6C42\uFF0C\u672C\u6587\u4F1A\u9488\u5BF9\u8FD9\u65B9\u9762\u505A\u4E00\u4E2A\u5168\u9762\u63CF\u8FF0\u3002</p>
<h2 id="\u5982\u4F55\u5F00\u59CB"><a class="lake-link"><i data-anchor="\u5982\u4F55\u5F00\u59CB"></i></a>\u5982\u4F55\u5F00\u59CB</h2><p>\u624B\u52A8\u521B\u5EFA\u7EC4\u4EF6\u6837\u5F0F\u6587\u4EF6\uFF0C\u4E0B\u9762\u4EE5 <code>img.component.less</code> \u4E3A\u793A\u4F8B\uFF1A</p>
<pre><code class="language-less">// \u5BFC\u5165 Less \u53D8\u91CF\u53C2\u6570
&#64;import &#39;&#64;delon/theme/index&#39;;

:host &#123;
  // \u7EC4\u4EF6\u5BBF\u4E3B\u6837\u5F0F
  display: block;
  font-size: 16px;

  ::ng-deep &#123;
    // \u7EC4\u4EF6\u5185\u5176\u4ED6\u6837\u5F0F
    .title &#123;
      color: &#64;text-color;
    &#125;
  &#125;
&#125;
</code></pre>
<p>\u8FD9\u4E2A <code>img.component.less</code> \u6837\u5F0F\u6587\u4EF6\u5305\u542B\u4E86\u8BB8\u591A\u4FE1\u606F\uFF1A</p>
<p><strong>~&#64;delon/theme/index</strong></p>
<p>\u5B83\u5305\u5BB9\u4E86 NG-ZORRO\u3001&#64;delon/theme\u3001&#64;delon/abc\u3001&#64;delon/chart \u4E3B\u9898\u7CFB\u7EDF\u6240\u6709\u7684 Less \u53D8\u91CF\u540D\uFF0C\u53EA\u6709\u8FD9\u6837\u5BFC\u5165\u624D\u80FD\u4F7F\u6211\u4EEC\u5728\u4E0B\u9762\u5F15\u7528 <code>&#64;text-color</code> \u8FD9\u7C7B Less \u53D8\u91CF\uFF0C\u5B83\u8868\u793A\u9ED8\u8BA4\u7684\u989C\u8272\u503C\u3002</p>
<blockquote>
<p>\u5982\u679C\u4F60\u6B63\u5728\u4F7F\u7528\u5546\u4E1A\u4E3B\u9898\uFF0C\u4F8B\u5982 PRO \u4F1A\u4F7F\u7528\u5176\u4ED6\u8DEF\u5F84\uFF1A<code>&#64;import &#39;src/styles/theme.less&#39;;</code>\u3002</p>
</blockquote>
<p><strong>\u7279\u6B8A\u9009\u62E9\u5668</strong></p>
<p><code>:host</code>\u3001<code>::ng-deep</code> \u5B83\u4EEC\u662F Angular \u7279\u6B8A\u9009\u62E9\u5668\uFF1A</p>
<ul>
<li><code>:host</code> \u8868\u793A\u7EC4\u4EF6\u5BBF\u4E3B\uFF0C\u5047\u8BBE\u6211\u4EEC\u5F53\u524D\u7684\u7EC4\u4EF6\u540D\u4E3A <code>img</code>\uFF0C\u90A3\u6700\u7EC8 <code>:host</code> \u4F1A\u88AB\u89E3\u6790\u6210 <code>img</code> \u7684\u6837\u5F0F</li>
<li><code>::ng-deep</code> \u8868\u793A\u7981\u6B62\u5BF9\u89C6\u56FE\u5305\u88C5\uFF0C\u8FD9\u6709\u52A9\u4E8E\u51CF\u5C11\u751F\u6210\u4E00\u4E9B\u989D\u5916\u7684\u6807\u8BC6\u7B26\uFF0C\u5B83\u4F1A\u5F71\u54CD\u5B50\u7EC4\u4EF6\u7684\u7684\u4F7F\u7528\uFF0C\u4F8B\u5982\uFF1A<code>.title</code> \u4F1A\u5728 <code>&lt;img&gt;&lt;/img&gt;</code> \u7EC4\u4EF6\u5185\u6240\u6709\u5305\u542B <code>class=&quot;title&quot;</code> \u90FD\u5C06\u6709\u6548</li>
</ul>
<h2 id="\u4E3B\u9898"><a class="lake-link"><i data-anchor="\u4E3B\u9898"></i></a>\u4E3B\u9898</h2><p>NG-ALAIN \u81F3\u4ECE <code>9.3.x</code> \u5F00\u59CB\u5185\u7F6E\u6697\u9ED1\u4E0E\u7D27\u51D1\u4E24\u79CD\u4E3B\u9898\uFF0C\u5BF9\u4E8E\u5168\u5C40\u53EA\u9700\u8981\u4FEE\u6539 <a href="https://github.com/ng-alain/ng-alain/blob/master/src/styles.less" target="_blank" rel="noopener">styles.less</a> \u4E00\u4E2A\u53C2\u6570\uFF0C\u4F8B\u5982\u5207\u6362\u4E3A\u6697\u9ED1\u4E3B\u9898\uFF1A</p>
<pre><code class="language-diff">- // &#64;import &#39;&#64;delon/theme/theme-dark.less&#39;;
+ &#64;import &#39;&#64;delon/theme/theme-dark.less&#39;;
</code></pre>
<blockquote>
<p>\u82E5\u662F\u7D27\u51D1\uFF0C\u53EA\u9700\u8981\u6362\u6210 <code>&#64;import &#39;&#64;delon/theme/theme-compact.less&#39;;</code>\u3002</p>
</blockquote>
<p>\u540C\u65F6\uFF0C\u5BF9\u4E8E\u7EC4\u4EF6\u6837\u5F0F\u7684\u5F15\u5165\u4E5F\u5168\u90E8\u66FF\u6362\u6210\uFF1A</p>
<pre><code class="language-diff">- &#64;import &#39;&#64;delon/theme/index&#39;;
+ &#64;import &#39;&#64;delon/theme/theme-dark&#39;;
</code></pre>
<h2 id="\u52A8\u6001\u4E3B\u9898"><a class="lake-link"><i data-anchor="\u52A8\u6001\u4E3B\u9898"></i></a>\u52A8\u6001\u4E3B\u9898</h2><p>\u5982\u679C\u4F60\u6B63\u5728\u5236\u4F5C\u5C31\u50CF\b\u73B0\u5728\u7F51\u7AD9\u4E00\u6837\uFF0C\u52A8\u6001\u5207\u6362\u4E0D\u540C\u7684\u4E3B\u9898\uFF0C\u90A3\u4E48\u5C31\u5FC5\u987B\u9488\u5BF9\u4E0D\u540C\u7684\u4E3B\u9898\u989D\u5916\u8986\u76D6\uFF0C\u4F8B\u5982\u5F53\u5F00\u542F\u6697\u9ED1\u65F6\uFF0C\u5C06 <code>.title</code> \u6362\u6210 <code>#000</code> \u989C\u8272\u503C\uFF1A</p>
<pre><code class="language-less">// \u5BFC\u5165 Less \u53D8\u91CF\u53C2\u6570
&#64;import &#39;&#64;delon/theme/index&#39;;

:host &#123;
  // \u7EC4\u4EF6\u5BBF\u4E3B\u6837\u5F0F
  display: block;
  font-size: 16px;

  ::ng-deep &#123;
    // \u7EC4\u4EF6\u5185\u5176\u4ED6\u6837\u5F0F
    .title &#123;
      color: &#64;text-color;
    &#125;
  &#125;
&#125;

[data-theme=&#39;dark&#39;] &#123;
  :host ::ng-deep &#123;
    .title &#123;
      color: #000;
    &#125;
  &#125;
&#125;
</code></pre>
<p>\u82E5\u7D27\u51D1\u4E3B\u9898\uFF1A</p>
<pre><code class="language-less">[data-theme=&#39;compact&#39;] &#123;
  :host ::ng-deep &#123;
    // \u9488\u5BF9\u7D27\u51D1\u91CD\u65B0\u5B9A\u4E49
  &#125;
&#125;
</code></pre>
<h2 id="\u76F8\u5173\u94FE\u63A5"><a class="lake-link"><i data-anchor="\u76F8\u5173\u94FE\u63A5"></i></a>\u76F8\u5173\u94FE\u63A5</h2><ul>
<li><a href="https://angular.io/guide/component-styles" target="_blank" rel="noopener">Angualr Component styles</a></li>
<li><a href="https://zhuanlan.zhihu.com/p/31235358" target="_blank" rel="noopener">\u5173\u4E8EAngular\u6837\u5F0F\u5C01\u88C5</a></li>
</ul>
`,api:``,toc:[{id:`如何开始`,title:`如何开始`},{id:`主题`,title:`主题`},{id:`动态主题`,title:`动态主题`},{id:`相关链接`,title:`相关链接`}],raw:`---
type: Documents
order: 15
title: \u7EC4\u4EF6\u6837\u5F0F
---

\u5F53\u4F60\u5728\u4F7F\u7528 \`ng g ng-alain:list\` \u6765\u751F\u6210\u9875\u9762\u65F6\uFF0C\u4F1A\u53D1\u73B0\u5E76\u4E0D\u4F1A\u4EA7\u751F Less \u6587\u4EF6\uFF0C\u4E3B\u8981\u662F NG-ALAIN \u6709\u81EA\u5DF1\u7684\u4E00\u5957\u4E3B\u9898\u7CFB\u7EDF\uFF0CNG-ALAIN \u5E0C\u671B\u5229\u7528\u8FD9\u5957\u4E3B\u9898\u7CFB\u7EDF\u6765\u6784\u5EFA\u7EC4\u4EF6\uFF0C\u8BA9 CSS \u53D8\u6210\u7F16\u7A0B\u5316\u3002\u7136\u800C\u5B83\u5E76\u4E0D\u80FD\u6EE1\u8DB3\u6240\u6709\u9700\u6C42\uFF0C\u672C\u6587\u4F1A\u9488\u5BF9\u8FD9\u65B9\u9762\u505A\u4E00\u4E2A\u5168\u9762\u63CF\u8FF0\u3002

## \u5982\u4F55\u5F00\u59CB

\u624B\u52A8\u521B\u5EFA\u7EC4\u4EF6\u6837\u5F0F\u6587\u4EF6\uFF0C\u4E0B\u9762\u4EE5 \`img.component.less\` \u4E3A\u793A\u4F8B\uFF1A

\`\`\`less
// \u5BFC\u5165 Less \u53D8\u91CF\u53C2\u6570
@import '@delon/theme/index';

:host {
  // \u7EC4\u4EF6\u5BBF\u4E3B\u6837\u5F0F
  display: block;
  font-size: 16px;

  ::ng-deep {
    // \u7EC4\u4EF6\u5185\u5176\u4ED6\u6837\u5F0F
    .title {
      color: @text-color;
    }
  }
}
\`\`\`

\u8FD9\u4E2A \`img.component.less\` \u6837\u5F0F\u6587\u4EF6\u5305\u542B\u4E86\u8BB8\u591A\u4FE1\u606F\uFF1A

**~@delon/theme/index**

\u5B83\u5305\u5BB9\u4E86 NG-ZORRO\u3001@delon/theme\u3001@delon/abc\u3001@delon/chart \u4E3B\u9898\u7CFB\u7EDF\u6240\u6709\u7684 Less \u53D8\u91CF\u540D\uFF0C\u53EA\u6709\u8FD9\u6837\u5BFC\u5165\u624D\u80FD\u4F7F\u6211\u4EEC\u5728\u4E0B\u9762\u5F15\u7528 \`@text-color\` \u8FD9\u7C7B Less \u53D8\u91CF\uFF0C\u5B83\u8868\u793A\u9ED8\u8BA4\u7684\u989C\u8272\u503C\u3002

> \u5982\u679C\u4F60\u6B63\u5728\u4F7F\u7528\u5546\u4E1A\u4E3B\u9898\uFF0C\u4F8B\u5982 PRO \u4F1A\u4F7F\u7528\u5176\u4ED6\u8DEF\u5F84\uFF1A\`@import 'src/styles/theme.less';\`\u3002

**\u7279\u6B8A\u9009\u62E9\u5668**

\`:host\`\u3001\`::ng-deep\` \u5B83\u4EEC\u662F Angular \u7279\u6B8A\u9009\u62E9\u5668\uFF1A

- \`:host\` \u8868\u793A\u7EC4\u4EF6\u5BBF\u4E3B\uFF0C\u5047\u8BBE\u6211\u4EEC\u5F53\u524D\u7684\u7EC4\u4EF6\u540D\u4E3A \`img\`\uFF0C\u90A3\u6700\u7EC8 \`:host\` \u4F1A\u88AB\u89E3\u6790\u6210 \`img\` \u7684\u6837\u5F0F
- \`::ng-deep\` \u8868\u793A\u7981\u6B62\u5BF9\u89C6\u56FE\u5305\u88C5\uFF0C\u8FD9\u6709\u52A9\u4E8E\u51CF\u5C11\u751F\u6210\u4E00\u4E9B\u989D\u5916\u7684\u6807\u8BC6\u7B26\uFF0C\u5B83\u4F1A\u5F71\u54CD\u5B50\u7EC4\u4EF6\u7684\u7684\u4F7F\u7528\uFF0C\u4F8B\u5982\uFF1A\`.title\` \u4F1A\u5728 \`<img></img>\` \u7EC4\u4EF6\u5185\u6240\u6709\u5305\u542B \`class="title"\` \u90FD\u5C06\u6709\u6548

## \u4E3B\u9898

NG-ALAIN \u81F3\u4ECE \`9.3.x\` \u5F00\u59CB\u5185\u7F6E\u6697\u9ED1\u4E0E\u7D27\u51D1\u4E24\u79CD\u4E3B\u9898\uFF0C\u5BF9\u4E8E\u5168\u5C40\u53EA\u9700\u8981\u4FEE\u6539 [styles.less](https://github.com/ng-alain/ng-alain/blob/master/src/styles.less) \u4E00\u4E2A\u53C2\u6570\uFF0C\u4F8B\u5982\u5207\u6362\u4E3A\u6697\u9ED1\u4E3B\u9898\uFF1A

\`\`\`diff
- // @import '@delon/theme/theme-dark.less';
+ @import '@delon/theme/theme-dark.less';
\`\`\`

> \u82E5\u662F\u7D27\u51D1\uFF0C\u53EA\u9700\u8981\u6362\u6210 \`@import '@delon/theme/theme-compact.less';\`\u3002

\u540C\u65F6\uFF0C\u5BF9\u4E8E\u7EC4\u4EF6\u6837\u5F0F\u7684\u5F15\u5165\u4E5F\u5168\u90E8\u66FF\u6362\u6210\uFF1A

\`\`\`diff
- @import '@delon/theme/index';
+ @import '@delon/theme/theme-dark';
\`\`\`

## \u52A8\u6001\u4E3B\u9898

\u5982\u679C\u4F60\u6B63\u5728\u5236\u4F5C\u5C31\u50CF\b\u73B0\u5728\u7F51\u7AD9\u4E00\u6837\uFF0C\u52A8\u6001\u5207\u6362\u4E0D\u540C\u7684\u4E3B\u9898\uFF0C\u90A3\u4E48\u5C31\u5FC5\u987B\u9488\u5BF9\u4E0D\u540C\u7684\u4E3B\u9898\u989D\u5916\u8986\u76D6\uFF0C\u4F8B\u5982\u5F53\u5F00\u542F\u6697\u9ED1\u65F6\uFF0C\u5C06 \`.title\` \u6362\u6210 \`#000\` \u989C\u8272\u503C\uFF1A

\`\`\`less
// \u5BFC\u5165 Less \u53D8\u91CF\u53C2\u6570
@import '@delon/theme/index';

:host {
  // \u7EC4\u4EF6\u5BBF\u4E3B\u6837\u5F0F
  display: block;
  font-size: 16px;

  ::ng-deep {
    // \u7EC4\u4EF6\u5185\u5176\u4ED6\u6837\u5F0F
    .title {
      color: @text-color;
    }
  }
}

[data-theme='dark'] {
  :host ::ng-deep {
    .title {
      color: #000;
    }
  }
}
\`\`\`

\u82E5\u7D27\u51D1\u4E3B\u9898\uFF1A

\`\`\`less
[data-theme='compact'] {
  :host ::ng-deep {
    // \u9488\u5BF9\u7D27\u51D1\u91CD\u65B0\u5B9A\u4E49
  }
}
\`\`\`

## \u76F8\u5173\u94FE\u63A5

- [Angualr Component styles](https://angular.io/guide/component-styles)
- [\u5173\u4E8EAngular\u6837\u5F0F\u5C01\u88C5](https://zhuanlan.zhihu.com/p/31235358)`}}};codes=[];static ɵfac=function(e){return new(e||n)};static ɵcmp=_e({type:n,selectors:[[`theme-component-styles`]],hostAttrs:[1,`d-block`],decls:1,vars:2,consts:[[3,`codes`,`item`]],template:function(e,t){e&1&&lt(0,`app-docs`,0),e&2&&re(`codes`,t.codes)(`item`,t.item)},dependencies:[rt],encapsulation:2})};var _=class n{item={name:`customize-theme`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{order:5,title:`Customize Theme`,description:`Ant Design allows you to customize some basic design aspects in order to meet the needs of UI diversity from business and brand, including primary col...`,group:`Documents`,path:`packages/theme/docs/customize-theme.en-US.md`,url:`/theme/customize-theme/en`},text:`<p>Ant Design allows you to customize some basic design aspects in order to meet the needs of UI diversity from business and brand, including primary color, border radius, border color, etc.</p>
<p><img src="https://zos.alipayobjects.com/rmsportal/zTFoszBtDODhXfLAazfSpYbSLSEeytoG.png" alt="Example"></p>
<h2 id="less_variables"><a class="lake-link"><i data-anchor="less_variables"></i></a>Less variables</h2><p>We are using <a href="http://lesscss.org/" target="_blank" rel="noopener">Less</a> as the development language for styling. A set of less variables are defined for each design aspect that can be customized to your needs.</p>
<h3 id="customize_theme_with_schematics"><a class="lake-link"><i data-anchor="customize_theme_with_schematics"></i></a>Customize theme with schematics</h3><p>Run <code>ng add ng-alain</code>, set up custom theme file, then modified the file <code>src/styles/theme.less</code>.</p>
<h2 id="official_themes"><a class="lake-link"><i data-anchor="official_themes"></i></a>Official Themes</h2><p>We have some official themes, try them out and give us some feedback!</p>
<ul>
<li>\u{1F311} Dark Theme (supported in 9+)</li>
<li>\u{1F4E6} Compact Theme (supported in 9+)</li>
</ul>
<h3 id="method_1"><a class="lake-link"><i data-anchor="method_1"></i></a>Method 1</h3><p>In the style file <code>src/styles/theme.less</code>, change <code>default</code> to <code>dark</code> or <code>compact</code> to override theme variables.</p>
<pre><code class="language-less">// - \`default\` Default Theme
// - \`dark\` \u{1F311} Dark Theme (supported in 9+)
// - \`compact\` \u{1F4E6} Compact Theme (supported in 9+)
&#64;import &#39;&#64;delon/theme/theme-default.less&#39;;

// ==========The following is the custom theme variable area==========
// &#64;primary-color: #f50;
</code></pre>
<h3 id="method_2"><a class="lake-link"><i data-anchor="method_2"></i></a>Method 2</h3><p>If the project does not use Less, you can include <code>dark.css</code> or <code>compact.css</code> in the CSS file or add to the <code>angular.json</code> config.</p>
<p>CSS file\uFF1A</p>
<pre><code class="language-css">&#64;import &quot;&#64;delon/theme/dark.css&quot;;
</code></pre>
<p>angular.json</p>
<pre><code class="language-json">&#123;
  &quot;build&quot;: &#123;
    &quot;options&quot;: &#123;
      &quot;styles&quot;: [
        &quot;node_modules/&#64;delon/theme/dark.css&quot;
      ]
    &#125;
  &#125;
&#125;
</code></pre>
<h2 id="switch_theming"><a class="lake-link"><i data-anchor="switch_theming"></i></a>Switch Theming</h2><p>When using &#64;angular/cli to configure themes, you must build applications for each theme. When you want to switch themes without reloading the application (like this website), you can use the following method to compile the theme into a style file, and switch at runtime:</p>
<p>Note: Make sure theme variables exist in global styles, not in component scope styles, because component styles that have higher priority will prevent the theme override.</p>
<ol>
<li>Install Dependencies</li>
</ol>
<pre><code class="language-bash">npm i --save-dev ng-alain-plugin-theme
</code></pre>
<blockquote>
<p><a href="https://github.com/ng-alain/plugin-theme" target="_blank" rel="noopener">ng-alain-plugin-theme</a> is to generate <code>color.less</code> and theme CSS files for NG-ALAIN.</p>
</blockquote>
<p>Add <code>theme</code> node in <code>ng-alain.json</code>:</p>
<pre><code class="language-json">&#123;
  &quot;$schema&quot;: &quot;./node_modules/ng-alain/schema.json&quot;,
  &quot;theme&quot;: &#123;
    &quot;list&quot;: [
      &#123;
        &quot;theme&quot;: &quot;dark&quot;
      &#125;,
      &#123;
        &quot;key&quot;: &quot;dust&quot;,
        &quot;modifyVars&quot;: &#123;
          &quot;&#64;primary-color&quot;: &quot;#F5222D&quot;
        &#125;
      &#125;
    ]
  &#125;
&#125;
</code></pre>
<p>Finally, run the following command:</p>
<pre><code class="language-bash">npx ng-alain-plugin-theme -t=themeCss
</code></pre>
<p>Two style files will be generated in <code>src/assets/style.dark.css</code> and <code>src/assets/style.dust.css</code>.</p>
<ol start="2">
<li>Switch Theme at Runtime</li>
</ol>
<p>Dynamically create a <code>link</code> tag, dynamically load style files into the application, and remove them otherwise.</p>
<blockquote>
<p>You can also use the <a href="https://github.com/ng-alain/delon/tree/master/packages/theme/theme-btn/" target="_blank" rel="noopener">theme-btn</a> component directly.</p>
</blockquote>
<pre><code class="language-ts">private readonly doc = inject(DOCUMENT);
changeTheme(theme: &#39;default&#39; | &#39;dark&#39;): void &#123;
  const el = this.doc.querySelector&lt;HTMLLinkElement&gt;(&#39;#dark-theme&#39;);
  if (theme === &#39;dark&#39;) &#123;
    if (el) return;
    const style = this.doc.createElement(&#39;link&#39;);
    style.type = &#39;text/css&#39;;
    style.rel = &#39;stylesheet&#39;;
    style.id = &#39;dark-theme&#39;;
    style.href = &#39;assets/style.dark.css&#39;;
    this.doc.head.appendChild(style);
  &#125; else &#123;
    el?.remove();
  &#125;
&#125;
</code></pre>
<p>Note: If you use <code>&#64;delon/chart</code> or third-party component, you may need to manually modify the component to support the corresponding theme.</p>
<h2 id="component_development_issues"><a class="lake-link"><i data-anchor="component_development_issues"></i></a>Component development issues</h2><p>The above theme switching method is based on the fact that all Less style content is independent of <code>src/styles.less</code>. Sometimes, it is also defined in the component, like:</p>
<pre><code class="language-ts">&#64;Component(&#123;
  selector: &#39;app-dashboard-analysis&#39;,
  templateUrl: &#39;./analysis.component.html&#39;,
  styleUrls: [&#39;./analysis.component.less&#39;],
  changeDetection: ChangeDetectionStrategy.OnPush,
&#125;)
export class DashboardAnalysisComponent &#123;&#125;
</code></pre>
<pre><code class="language-less">// analysis.component.less
&#64;import &#39;&#64;delon/theme/index&#39;;
:host ::ng-deep &#123;
  color: &#64;text-color;
&#125;
</code></pre>
<p>Because the styles defined in the component run independently under Angular, it is impossible to switch to the dark theme as a whole according to the introduction of <code>&#64;import &#39;&#64;delon/theme/theme-compact.less&#39;;</code>, if you want the same in the component To use the dark series, you must:</p>
<pre><code class="language-diff">// analysis.component.less
- &#64;import &#39;&#64;delon/theme/index&#39;;
+ &#64;import &#39;&#64;delon/theme/theme-dark&#39;;
</code></pre>
<p>Or, redefine for a component theme:</p>
<pre><code class="language-less">// analysis.component.less
[data-theme=&#39;dark&#39;] &#123;
  :host ::ng-deep &#123;
    // Redefining the dark theme
  &#125;
&#125;
</code></pre>
<p>Or compact theme:</p>
<pre><code class="language-less">[data-theme=&#39;compact&#39;] &#123;
  :host ::ng-deep &#123;
    // Redefining the compact theme
  &#125;
&#125;
</code></pre>
<h2 id="related_articles"><a class="lake-link"><i data-anchor="related_articles"></i></a>Related articles</h2><ul>
<li><a href="/theme/component-styles">Component styles</a></li>
</ul>
`,api:``,toc:[{id:`less_variables`,title:`Less variables`,children:[{id:`customize_theme_with_schematics`,title:`Customize theme with schematics`}]},{id:`official_themes`,title:`Official Themes`,children:[{id:`method_1`,title:`Method 1`},{id:`method_2`,title:`Method 2`}]},{id:`switch_theming`,title:`Switch Theming`},{id:`component_development_issues`,title:`Component development issues`},{id:`related_articles`,title:`Related articles`}],raw:`---
order: 5
title: Customize Theme
type: Documents
---

Ant Design allows you to customize some basic design aspects in order to meet the needs of UI diversity from business and brand, including primary color, border radius, border color, etc.

![Example](https://zos.alipayobjects.com/rmsportal/zTFoszBtDODhXfLAazfSpYbSLSEeytoG.png)

## Less variables

We are using [Less](http://lesscss.org/) as the development language for styling. A set of less variables are defined for each design aspect that can be customized to your needs.

### Customize theme with schematics

Run \`ng add ng-alain\`, set up custom theme file, then modified the file \`src/styles/theme.less\`.

## Official Themes

We have some official themes, try them out and give us some feedback!

- \u{1F311} Dark Theme (supported in 9+)
- \u{1F4E6} Compact Theme (supported in 9+)

### Method 1

In the style file \`src/styles/theme.less\`, change \`default\` to \`dark\` or \`compact\` to override theme variables.

\`\`\`less
// - \`default\` Default Theme
// - \`dark\` \u{1F311} Dark Theme (supported in 9+)
// - \`compact\` \u{1F4E6} Compact Theme (supported in 9+)
@import '@delon/theme/theme-default.less';

// ==========The following is the custom theme variable area==========
// @primary-color: #f50;
\`\`\`

### Method 2

If the project does not use Less, you can include \`dark.css\` or \`compact.css\` in the CSS file or add to the \`angular.json\` config.

CSS file\uFF1A

\`\`\`css
@import "@delon/theme/dark.css";
\`\`\`

angular.json

\`\`\`json
{
  "build": {
    "options": {
      "styles": [
        "node_modules/@delon/theme/dark.css"
      ]
    }
  }
}
\`\`\`

## Switch Theming

When using @angular/cli to configure themes, you must build applications for each theme. When you want to switch themes without reloading the application (like this website), you can use the following method to compile the theme into a style file, and switch at runtime:

Note: Make sure theme variables exist in global styles, not in component scope styles, because component styles that have higher priority will prevent the theme override.

1. Install Dependencies

\`\`\`bash
npm i --save-dev ng-alain-plugin-theme
\`\`\`

> [ng-alain-plugin-theme](https://github.com/ng-alain/plugin-theme) is to generate \`color.less\` and theme CSS files for NG-ALAIN.

Add \`theme\` node in \`ng-alain.json\`:

\`\`\`json
{
  "$schema": "./node_modules/ng-alain/schema.json",
  "theme": {
    "list": [
      {
        "theme": "dark"
      },
      {
        "key": "dust",
        "modifyVars": {
          "@primary-color": "#F5222D"
        }
      }
    ]
  }
}
\`\`\`

Finally, run the following command:

\`\`\`bash
npx ng-alain-plugin-theme -t=themeCss
\`\`\`

Two style files will be generated in \`src/assets/style.dark.css\` and \`src/assets/style.dust.css\`.

2. Switch Theme at Runtime

Dynamically create a \`link\` tag, dynamically load style files into the application, and remove them otherwise.

> You can also use the [theme-btn](https://github.com/ng-alain/delon/tree/master/packages/theme/theme-btn/) component directly.

\`\`\`ts
private readonly doc = inject(DOCUMENT);
changeTheme(theme: 'default' | 'dark'): void {
  const el = this.doc.querySelector<HTMLLinkElement>('#dark-theme');
  if (theme === 'dark') {
    if (el) return;
    const style = this.doc.createElement('link');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    style.id = 'dark-theme';
    style.href = 'assets/style.dark.css';
    this.doc.head.appendChild(style);
  } else {
    el?.remove();
  }
}
\`\`\`

Note: If you use \`@delon/chart\` or third-party component, you may need to manually modify the component to support the corresponding theme.

## Component development issues

The above theme switching method is based on the fact that all Less style content is independent of \`src/styles.less\`. Sometimes, it is also defined in the component, like:

\`\`\`ts
@Component({
  selector: 'app-dashboard-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardAnalysisComponent {}
\`\`\`

\`\`\`less
// analysis.component.less
@import '@delon/theme/index';
:host ::ng-deep {
  color: @text-color;
}
\`\`\`

Because the styles defined in the component run independently under Angular, it is impossible to switch to the dark theme as a whole according to the introduction of \`@import '@delon/theme/theme-compact.less';\`, if you want the same in the component To use the dark series, you must:

\`\`\`diff
// analysis.component.less
- @import '@delon/theme/index';
+ @import '@delon/theme/theme-dark';
\`\`\`

Or, redefine for a component theme:

\`\`\`less
// analysis.component.less
[data-theme='dark'] {
  :host ::ng-deep {
    // Redefining the dark theme
  }
}
\`\`\`

Or compact theme:

\`\`\`less
[data-theme='compact'] {
  :host ::ng-deep {
    // Redefining the compact theme
  }
}
\`\`\`

## Related articles

- [Component styles](/theme/component-styles)`},"zh-CN":{meta:{order:5,title:`定制主题`,description:`Ant Design 设计规范上支持一定程度的样式定制，以满足业务和品牌上多样化的视觉需求，包括但不限于主色、圆角、边框和部分组件的视觉定制。Ant Design 的样式使用了 Less 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整，默认样式变量：NG-ZORRO、N...`,group:`Documents`,path:`packages/theme/docs/customize-theme.zh-CN.md`,url:`/theme/customize-theme/zh`},text:`<p>Ant Design \u8BBE\u8BA1\u89C4\u8303\u4E0A\u652F\u6301\u4E00\u5B9A\u7A0B\u5EA6\u7684\u6837\u5F0F\u5B9A\u5236\uFF0C\u4EE5\u6EE1\u8DB3\u4E1A\u52A1\u548C\u54C1\u724C\u4E0A\u591A\u6837\u5316\u7684\u89C6\u89C9\u9700\u6C42\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u4E3B\u8272\u3001\u5706\u89D2\u3001\u8FB9\u6846\u548C\u90E8\u5206\u7EC4\u4EF6\u7684\u89C6\u89C9\u5B9A\u5236\u3002</p>
<p><img src="https://zos.alipayobjects.com/rmsportal/zTFoszBtDODhXfLAazfSpYbSLSEeytoG.png" alt="Example"></p>
<h2 id="\u5B9A\u5236\u65B9\u5F0F"><a class="lake-link"><i data-anchor="\u5B9A\u5236\u65B9\u5F0F"></i></a>\u5B9A\u5236\u65B9\u5F0F</h2><p>Ant Design \u7684\u6837\u5F0F\u4F7F\u7528\u4E86 <a href="http://lesscss.org/" target="_blank" rel="noopener">Less</a> \u4F5C\u4E3A\u5F00\u53D1\u8BED\u8A00\uFF0C\u5E76\u5B9A\u4E49\u4E86\u4E00\u7CFB\u5217\u5168\u5C40/\u7EC4\u4EF6\u7684\u6837\u5F0F\u53D8\u91CF\uFF0C\u4F60\u53EF\u4EE5\u6839\u636E\u9700\u6C42\u8FDB\u884C\u76F8\u5E94\u8C03\u6574\uFF0C\u9ED8\u8BA4\u6837\u5F0F\u53D8\u91CF\uFF1A<a href="https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/style/themes/default.less" target="_blank" rel="noopener">NG-ZORRO</a>\u3001<a href="https://github.com/ng-alain/delon/blob/master/packages/theme/theme-default.less" target="_blank" rel="noopener">NG-ALAIN</a> \u4E24\u90E8\u5206\u3002</p>
<h3 id="\u521D\u59CB\u5316\u9879\u76EE\u65F6\u5B9A\u5236\u4E3B\u9898"><a class="lake-link"><i data-anchor="\u521D\u59CB\u5316\u9879\u76EE\u65F6\u5B9A\u5236\u4E3B\u9898"></i></a>\u521D\u59CB\u5316\u9879\u76EE\u65F6\u5B9A\u5236\u4E3B\u9898</h3><p>\u5728\u521D\u59CB\u5316\u9879\u76EE\u65F6 <code>ng add ng-alain</code> \u65F6\u9009\u62E9\u81EA\u5B9A\u4E49\u4E3B\u9898\u5373\u53EF\u81EA\u52A8\u914D\u7F6E\u597D\u81EA\u5B9A\u4E49\u4E3B\u9898\u7684\u76F8\u5173\u6587\u4EF6\uFF0C\u4FEE\u6539 <code>src/styles/theme.less</code> \u6587\u4EF6\u5185\u5BB9\u5C31\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E3B\u9898\u3002</p>
<h2 id="\u5B98\u65B9\u4E3B\u9898"><a class="lake-link"><i data-anchor="\u5B98\u65B9\u4E3B\u9898"></i></a>\u5B98\u65B9\u4E3B\u9898</h2><p>\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u4E9B\u5B98\u65B9\u4E3B\u9898\uFF0C\u6B22\u8FCE\u5728\u9879\u76EE\u4E2D\u8BD5\u7528\uFF0C\u5E76\u4E14\u7ED9\u6211\u4EEC\u63D0\u4F9B\u53CD\u9988\u3002</p>
<ul>
<li>\u{1F311} \u6697\u9ED1\u4E3B\u9898\uFF089+ \u652F\u6301\uFF09</li>
<li>\u{1F4E6} \u7D27\u51D1\u4E3B\u9898\uFF089+ \u652F\u6301\uFF09</li>
</ul>
<h3 id="\u65B9\u5F0F\u4E00"><a class="lake-link"><i data-anchor="\u65B9\u5F0F\u4E00"></i></a>\u65B9\u5F0F\u4E00</h3><p>\u5728\u6837\u5F0F\u6587\u4EF6 <code>src/styles/theme.less</code> \u66F4\u6539 <code>default</code> \u4E3A <code>dark</code> \u6216 <code>compact</code> \u8986\u76D6\u4E3B\u9898\u53D8\u91CF\u3002</p>
<pre><code class="language-less">// - \`default\` \u9ED8\u8BA4\u4E3B\u9898
// - \`dark\` \u{1F311} \u6697\u9ED1\u4E3B\u9898\uFF089+ \u652F\u6301\uFF09
// - \`compact\` \u{1F4E6} \u7D27\u51D1\u4E3B\u9898\uFF089+ \u652F\u6301\uFF09
&#64;import &#39;&#64;delon/theme/theme-default.less&#39;;

// ==========The following is the custom theme variable area==========
// &#64;primary-color: #f50;
</code></pre>
<h3 id="\u65B9\u5F0F\u4E8C"><a class="lake-link"><i data-anchor="\u65B9\u5F0F\u4E8C"></i></a>\u65B9\u5F0F\u4E8C</h3><p>\u5982\u679C\u9879\u76EE\u4E0D\u4F7F\u7528 Less\uFF0C\u53EF\u5728 CSS \u6587\u4EF6\u6216\u8005 <code>angular.json</code> \u7684 <code>styles</code> \u5B57\u6BB5\u4E2D\uFF0C\u5168\u91CF\u5F15\u5165 <code>dark.css</code> \u6216\u8005 <code>compact.css</code>\u3002</p>
<p>\u6837\u5F0F\u6587\u4EF6\u4E2D\uFF1A</p>
<pre><code class="language-css">&#64;import &quot;&#64;delon/theme/dark.css&quot;;
</code></pre>
<p><code>angular.json</code> \u4E2D</p>
<pre><code class="language-json">&#123;
  &quot;build&quot;: &#123;
    &quot;options&quot;: &#123;
      &quot;styles&quot;: [
        &quot;node_modules/&#64;delon/theme/dark.css&quot;
      ]
    &#125;
  &#125;
&#125;
</code></pre>
<h2 id="\u4E3B\u9898\u5207\u6362"><a class="lake-link"><i data-anchor="\u4E3B\u9898\u5207\u6362"></i></a>\u4E3B\u9898\u5207\u6362</h2><p>\u5F53\u4F7F\u7528 &#64;angular/cli \u7684\u65B9\u5F0F\u914D\u7F6E\u4E3B\u9898\u65F6\u5FC5\u987B\u4E3A\u6BCF\u4E2A\u4E3B\u9898\u5355\u72EC\u6253\u5305\u5E94\u7528\uFF0C\u5F53\u4F60\u60F3\u5207\u6362\u4E3B\u9898\u800C\u4E0D\u91CD\u65B0\u52A0\u8F7D\u5E94\u7528\u65F6\uFF08\u5C31\u50CF\u8FD9\u4E2A\u7F51\u7AD9\uFF09\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u7684\u65B9\u6CD5\u5C06\u4E3B\u9898\u7F16\u8BD1\u5230\u5355\u72EC\u7684\u6837\u5F0F\u6587\u4EF6\uFF0C\u5E76\u5728\u8FD0\u884C\u65F6\u5207\u6362\uFF1A</p>
<p>\u6CE8\u610F\uFF1A\u786E\u4FDD\u4E0E\u4E3B\u9898\u53D8\u91CF\u76F8\u5173\u7684\u6837\u5F0F\u5B58\u5728\u5168\u5C40\u6837\u5F0F\u4E2D\uFF0C\u800C\u4E0D\u662F\u7EC4\u4EF6\u6837\u5F0F\u4E2D\uFF0C\u56E0\u4E3A\u7EC4\u4EF6\u6837\u5F0F\u4F18\u5148\u7EA7\u66F4\u9AD8\u5C06\u4F1A\u5BFC\u81F4\u6837\u5F0F\u65E0\u6CD5\u88AB\u8986\u76D6\u3002</p>
<ol>
<li>\u5B89\u88C5\u4F9D\u8D56</li>
</ol>
<pre><code class="language-bash">npm i --save-dev ng-alain-plugin-theme
</code></pre>
<blockquote>
<p><a href="https://github.com/ng-alain/plugin-theme" target="_blank" rel="noopener">ng-alain-plugin-theme</a> \u662F\u4E13\u95E8\u9488\u5BF9 NG-ALAIN \u751F\u6210 <code>color.less</code> \u53CA\u4E3B\u9898CSS\u6587\u4EF6\u3002</p>
</blockquote>
<p>\u5728 <code>ng-alain.json</code> \u5185\u65B0\u589E <code>theme</code> \u8282\u70B9\uFF1A</p>
<pre><code class="language-json">&#123;
  &quot;$schema&quot;: &quot;./node_modules/ng-alain/schema.json&quot;,
  &quot;theme&quot;: &#123;
    &quot;list&quot;: [
      &#123;
        &quot;theme&quot;: &quot;dark&quot;
      &#125;,
      &#123;
        &quot;key&quot;: &quot;dust&quot;,
        &quot;modifyVars&quot;: &#123;
          &quot;&#64;primary-color&quot;: &quot;#F5222D&quot;
        &#125;
      &#125;
    ]
  &#125;
&#125;
</code></pre>
<p>\u6700\u540E\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p>
<pre><code class="language-bash">npx ng-alain-plugin-theme -t=themeCss
</code></pre>
<p>\u4F1A\u5728 <code>src/assets/style.dark.css</code> \u548C <code>src/assets/style.dust.css</code> \u751F\u6210\u4E24\u4E2A\u6837\u5F0F\u6587\u4EF6\u3002</p>
<ol start="2">
<li>\u8FD0\u884C\u65F6\u5207\u6362\u6837\u5F0F</li>
</ol>
<p>\u52A8\u6001\u521B\u5EFA <code>link</code> \u6807\u7B7E\uFF0C\u5C06\u6837\u5F0F\u6587\u4EF6\u52A8\u6001\u52A0\u8F7D\u5728\u5E94\u7528\u4E2D\uFF0C\u53CD\u4E4B\u79FB\u9664\u3002</p>
<blockquote>
<p>\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 <a href="https://github.com/ng-alain/delon/tree/master/packages/theme/theme-btn/" target="_blank" rel="noopener">theme-btn</a> \u7EC4\u4EF6\u3002</p>
</blockquote>
<pre><code class="language-ts">private readonly doc = inject(DOCUMENT);
changeTheme(theme: &#39;default&#39; | &#39;dark&#39;): void &#123;
  const el = this.doc.querySelector&lt;HTMLLinkElement&gt;(&#39;#dark-theme&#39;);
  if (theme === &#39;dark&#39;) &#123;
    if (el) return;
    const style = this.doc.createElement(&#39;link&#39;);
    style.type = &#39;text/css&#39;;
    style.rel = &#39;stylesheet&#39;;
    style.id = &#39;dark-theme&#39;;
    style.href = &#39;assets/style.dark.css&#39;;
    this.doc.head.appendChild(style);
  &#125; else &#123;
    el?.remove();
  &#125;
&#125;
</code></pre>
<blockquote>
<p>\u6CE8\u610F\uFF1A\u5982\u679C\u4F60\u4F7F\u7528 <code>&#64;delon/chart</code> \u6216\u7B2C\u4E09\u65B9\u7EC4\u4EF6\uFF0C\u53EF\u80FD\u9700\u8981\u624B\u52A8\u4FEE\u6539\u7EC4\u4EF6\u6765\u652F\u6301\u76F8\u5E94\u7684\u4E3B\u9898\u3002</p>
</blockquote>
<h2 id="\u7EC4\u4EF6\u5F00\u53D1\u95EE\u9898"><a class="lake-link"><i data-anchor="\u7EC4\u4EF6\u5F00\u53D1\u95EE\u9898"></i></a>\u7EC4\u4EF6\u5F00\u53D1\u95EE\u9898</h2><p>\u4EE5\u4E0A\u4E3B\u9898\u5207\u6362\u65B9\u5F0F\u662F\u5728\u4E00\u4E2A\u5C06\u6240\u6709 Less \u6837\u5F0F\u5185\u5BB9\u72EC\u7ACB\u4E8E <code>src/styles.less</code> \u4E0B\u9762\uFF0C\u5F53\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u8FD8\u4F1A\u5728\u7EC4\u4EF6\u5185\u5B9A\u4E49\uFF0C\u5C31\u50CF\uFF1A</p>
<pre><code class="language-ts">&#64;Component(&#123;
  selector: &#39;app-dashboard-analysis&#39;,
  templateUrl: &#39;./analysis.component.html&#39;,
  styleUrls: [&#39;./analysis.component.less&#39;],
  changeDetection: ChangeDetectionStrategy.OnPush,
&#125;)
export class DashboardAnalysisComponent &#123;&#125;
</code></pre>
<pre><code class="language-less">// analysis.component.less
&#64;import &#39;&#64;delon/theme/index&#39;;
:host ::ng-deep &#123;
  color: &#64;text-color;
&#125;
</code></pre>
<p>\u7531\u4E8E\u7EC4\u4EF6\u5185\u5B9A\u4E49\u7684\u6837\u5F0F\u72EC\u7ACB\u8FD0\u884C\u5728 Angular \u4E0B\u9762\uFF0C\u662F\u65E0\u6CD5\u6839\u636E <code>&#64;import &#39;&#64;delon/theme/theme-compact.less&#39;;</code> \u7684\u5F15\u5165\u6765\u6574\u4F53\u5207\u6362\u6210\u6697\u9ED1\u7CFB\uFF0C\u5982\u679C\u4F60\u5E0C\u671B\u5728\u7EC4\u4EF6\u5185\u4E5F\u540C\u6837\u4F7F\u7528\u6697\u9ED1\u7CFB\uFF0C\u5219\u5FC5\u987B\u5C06\uFF1A</p>
<pre><code class="language-diff">// analysis.component.less
- &#64;import &#39;&#64;delon/theme/index&#39;;
+ &#64;import &#39;&#64;delon/theme/theme-dark&#39;;
</code></pre>
<p>\u6216\u8005\uFF0C\u91CD\u65B0\u9488\u5BF9\u67D0\u4E00\u4E2A\u4E3B\u9898\u91CD\u65B0\u5B9A\u4E49\uFF1A</p>
<pre><code class="language-less">// analysis.component.less
[data-theme=&#39;dark&#39;] &#123;
  :host ::ng-deep &#123;
    // \u9488\u5BF9\u6697\u9ED1\u7CFB\u91CD\u65B0\u5B9A\u4E49
  &#125;
&#125;
</code></pre>
<p>\u6216\u7D27\u51D1\u4E3B\u9898\uFF1A</p>
<pre><code class="language-less">[data-theme=&#39;compact&#39;] &#123;
  :host ::ng-deep &#123;
    // \u9488\u5BF9\u7D27\u51D1\u91CD\u65B0\u5B9A\u4E49
  &#125;
&#125;
</code></pre>
<h2 id="\u76F8\u5173\u6587\u7AE0"><a class="lake-link"><i data-anchor="\u76F8\u5173\u6587\u7AE0"></i></a>\u76F8\u5173\u6587\u7AE0</h2><ul>
<li><a href="/theme/component-styles">\u7EC4\u4EF6\u6837\u5F0F</a></li>
</ul>
`,api:``,toc:[{id:`定制方式`,title:`定制方式`,children:[{id:`初始化项目时定制主题`,title:`初始化项目时定制主题`}]},{id:`官方主题`,title:`官方主题`,children:[{id:`方式一`,title:`方式一`},{id:`方式二`,title:`方式二`}]},{id:`主题切换`,title:`主题切换`},{id:`组件开发问题`,title:`组件开发问题`},{id:`相关文章`,title:`相关文章`}],raw:`---
order: 5
title: \u5B9A\u5236\u4E3B\u9898
type: Documents
---

Ant Design \u8BBE\u8BA1\u89C4\u8303\u4E0A\u652F\u6301\u4E00\u5B9A\u7A0B\u5EA6\u7684\u6837\u5F0F\u5B9A\u5236\uFF0C\u4EE5\u6EE1\u8DB3\u4E1A\u52A1\u548C\u54C1\u724C\u4E0A\u591A\u6837\u5316\u7684\u89C6\u89C9\u9700\u6C42\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u4E3B\u8272\u3001\u5706\u89D2\u3001\u8FB9\u6846\u548C\u90E8\u5206\u7EC4\u4EF6\u7684\u89C6\u89C9\u5B9A\u5236\u3002

![Example](https://zos.alipayobjects.com/rmsportal/zTFoszBtDODhXfLAazfSpYbSLSEeytoG.png)

## \u5B9A\u5236\u65B9\u5F0F

Ant Design \u7684\u6837\u5F0F\u4F7F\u7528\u4E86 [Less](http://lesscss.org/) \u4F5C\u4E3A\u5F00\u53D1\u8BED\u8A00\uFF0C\u5E76\u5B9A\u4E49\u4E86\u4E00\u7CFB\u5217\u5168\u5C40/\u7EC4\u4EF6\u7684\u6837\u5F0F\u53D8\u91CF\uFF0C\u4F60\u53EF\u4EE5\u6839\u636E\u9700\u6C42\u8FDB\u884C\u76F8\u5E94\u8C03\u6574\uFF0C\u9ED8\u8BA4\u6837\u5F0F\u53D8\u91CF\uFF1A[NG-ZORRO](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/style/themes/default.less)\u3001[NG-ALAIN](https://github.com/ng-alain/delon/blob/master/packages/theme/theme-default.less) \u4E24\u90E8\u5206\u3002

### \u521D\u59CB\u5316\u9879\u76EE\u65F6\u5B9A\u5236\u4E3B\u9898

\u5728\u521D\u59CB\u5316\u9879\u76EE\u65F6 \`ng add ng-alain\` \u65F6\u9009\u62E9\u81EA\u5B9A\u4E49\u4E3B\u9898\u5373\u53EF\u81EA\u52A8\u914D\u7F6E\u597D\u81EA\u5B9A\u4E49\u4E3B\u9898\u7684\u76F8\u5173\u6587\u4EF6\uFF0C\u4FEE\u6539 \`src/styles/theme.less\` \u6587\u4EF6\u5185\u5BB9\u5C31\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E3B\u9898\u3002

## \u5B98\u65B9\u4E3B\u9898

\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u4E9B\u5B98\u65B9\u4E3B\u9898\uFF0C\u6B22\u8FCE\u5728\u9879\u76EE\u4E2D\u8BD5\u7528\uFF0C\u5E76\u4E14\u7ED9\u6211\u4EEC\u63D0\u4F9B\u53CD\u9988\u3002

- \u{1F311} \u6697\u9ED1\u4E3B\u9898\uFF089+ \u652F\u6301\uFF09
- \u{1F4E6} \u7D27\u51D1\u4E3B\u9898\uFF089+ \u652F\u6301\uFF09

### \u65B9\u5F0F\u4E00

\u5728\u6837\u5F0F\u6587\u4EF6 \`src/styles/theme.less\` \u66F4\u6539 \`default\` \u4E3A \`dark\` \u6216 \`compact\` \u8986\u76D6\u4E3B\u9898\u53D8\u91CF\u3002

\`\`\`less
// - \`default\` \u9ED8\u8BA4\u4E3B\u9898
// - \`dark\` \u{1F311} \u6697\u9ED1\u4E3B\u9898\uFF089+ \u652F\u6301\uFF09
// - \`compact\` \u{1F4E6} \u7D27\u51D1\u4E3B\u9898\uFF089+ \u652F\u6301\uFF09
@import '@delon/theme/theme-default.less';

// ==========The following is the custom theme variable area==========
// @primary-color: #f50;
\`\`\`

### \u65B9\u5F0F\u4E8C

\u5982\u679C\u9879\u76EE\u4E0D\u4F7F\u7528 Less\uFF0C\u53EF\u5728 CSS \u6587\u4EF6\u6216\u8005 \`angular.json\` \u7684 \`styles\` \u5B57\u6BB5\u4E2D\uFF0C\u5168\u91CF\u5F15\u5165 \`dark.css\` \u6216\u8005 \`compact.css\`\u3002

\u6837\u5F0F\u6587\u4EF6\u4E2D\uFF1A

\`\`\`css
@import "@delon/theme/dark.css";
\`\`\`

\`angular.json\` \u4E2D

\`\`\`json
{
  "build": {
    "options": {
      "styles": [
        "node_modules/@delon/theme/dark.css"
      ]
    }
  }
}
\`\`\`

## \u4E3B\u9898\u5207\u6362

\u5F53\u4F7F\u7528 @angular/cli \u7684\u65B9\u5F0F\u914D\u7F6E\u4E3B\u9898\u65F6\u5FC5\u987B\u4E3A\u6BCF\u4E2A\u4E3B\u9898\u5355\u72EC\u6253\u5305\u5E94\u7528\uFF0C\u5F53\u4F60\u60F3\u5207\u6362\u4E3B\u9898\u800C\u4E0D\u91CD\u65B0\u52A0\u8F7D\u5E94\u7528\u65F6\uFF08\u5C31\u50CF\u8FD9\u4E2A\u7F51\u7AD9\uFF09\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u7684\u65B9\u6CD5\u5C06\u4E3B\u9898\u7F16\u8BD1\u5230\u5355\u72EC\u7684\u6837\u5F0F\u6587\u4EF6\uFF0C\u5E76\u5728\u8FD0\u884C\u65F6\u5207\u6362\uFF1A

\u6CE8\u610F\uFF1A\u786E\u4FDD\u4E0E\u4E3B\u9898\u53D8\u91CF\u76F8\u5173\u7684\u6837\u5F0F\u5B58\u5728\u5168\u5C40\u6837\u5F0F\u4E2D\uFF0C\u800C\u4E0D\u662F\u7EC4\u4EF6\u6837\u5F0F\u4E2D\uFF0C\u56E0\u4E3A\u7EC4\u4EF6\u6837\u5F0F\u4F18\u5148\u7EA7\u66F4\u9AD8\u5C06\u4F1A\u5BFC\u81F4\u6837\u5F0F\u65E0\u6CD5\u88AB\u8986\u76D6\u3002

1. \u5B89\u88C5\u4F9D\u8D56

\`\`\`bash
npm i --save-dev ng-alain-plugin-theme
\`\`\`

> [ng-alain-plugin-theme](https://github.com/ng-alain/plugin-theme) \u662F\u4E13\u95E8\u9488\u5BF9 NG-ALAIN \u751F\u6210 \`color.less\` \u53CA\u4E3B\u9898CSS\u6587\u4EF6\u3002

\u5728 \`ng-alain.json\` \u5185\u65B0\u589E \`theme\` \u8282\u70B9\uFF1A

\`\`\`json
{
  "$schema": "./node_modules/ng-alain/schema.json",
  "theme": {
    "list": [
      {
        "theme": "dark"
      },
      {
        "key": "dust",
        "modifyVars": {
          "@primary-color": "#F5222D"
        }
      }
    ]
  }
}
\`\`\`

\u6700\u540E\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A

\`\`\`bash
npx ng-alain-plugin-theme -t=themeCss
\`\`\`

\u4F1A\u5728 \`src/assets/style.dark.css\` \u548C \`src/assets/style.dust.css\` \u751F\u6210\u4E24\u4E2A\u6837\u5F0F\u6587\u4EF6\u3002

2. \u8FD0\u884C\u65F6\u5207\u6362\u6837\u5F0F

\u52A8\u6001\u521B\u5EFA \`link\` \u6807\u7B7E\uFF0C\u5C06\u6837\u5F0F\u6587\u4EF6\u52A8\u6001\u52A0\u8F7D\u5728\u5E94\u7528\u4E2D\uFF0C\u53CD\u4E4B\u79FB\u9664\u3002

> \u4E5F\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 [theme-btn](https://github.com/ng-alain/delon/tree/master/packages/theme/theme-btn/) \u7EC4\u4EF6\u3002

\`\`\`ts
private readonly doc = inject(DOCUMENT);
changeTheme(theme: 'default' | 'dark'): void {
  const el = this.doc.querySelector<HTMLLinkElement>('#dark-theme');
  if (theme === 'dark') {
    if (el) return;
    const style = this.doc.createElement('link');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    style.id = 'dark-theme';
    style.href = 'assets/style.dark.css';
    this.doc.head.appendChild(style);
  } else {
    el?.remove();
  }
}
\`\`\`

> \u6CE8\u610F\uFF1A\u5982\u679C\u4F60\u4F7F\u7528 \`@delon/chart\` \u6216\u7B2C\u4E09\u65B9\u7EC4\u4EF6\uFF0C\u53EF\u80FD\u9700\u8981\u624B\u52A8\u4FEE\u6539\u7EC4\u4EF6\u6765\u652F\u6301\u76F8\u5E94\u7684\u4E3B\u9898\u3002

## \u7EC4\u4EF6\u5F00\u53D1\u95EE\u9898

\u4EE5\u4E0A\u4E3B\u9898\u5207\u6362\u65B9\u5F0F\u662F\u5728\u4E00\u4E2A\u5C06\u6240\u6709 Less \u6837\u5F0F\u5185\u5BB9\u72EC\u7ACB\u4E8E \`src/styles.less\` \u4E0B\u9762\uFF0C\u5F53\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u8FD8\u4F1A\u5728\u7EC4\u4EF6\u5185\u5B9A\u4E49\uFF0C\u5C31\u50CF\uFF1A

\`\`\`ts
@Component({
  selector: 'app-dashboard-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardAnalysisComponent {}
\`\`\`

\`\`\`less
// analysis.component.less
@import '@delon/theme/index';
:host ::ng-deep {
  color: @text-color;
}
\`\`\`

\u7531\u4E8E\u7EC4\u4EF6\u5185\u5B9A\u4E49\u7684\u6837\u5F0F\u72EC\u7ACB\u8FD0\u884C\u5728 Angular \u4E0B\u9762\uFF0C\u662F\u65E0\u6CD5\u6839\u636E \`@import '@delon/theme/theme-compact.less';\` \u7684\u5F15\u5165\u6765\u6574\u4F53\u5207\u6362\u6210\u6697\u9ED1\u7CFB\uFF0C\u5982\u679C\u4F60\u5E0C\u671B\u5728\u7EC4\u4EF6\u5185\u4E5F\u540C\u6837\u4F7F\u7528\u6697\u9ED1\u7CFB\uFF0C\u5219\u5FC5\u987B\u5C06\uFF1A

\`\`\`diff
// analysis.component.less
- @import '@delon/theme/index';
+ @import '@delon/theme/theme-dark';
\`\`\`

\u6216\u8005\uFF0C\u91CD\u65B0\u9488\u5BF9\u67D0\u4E00\u4E2A\u4E3B\u9898\u91CD\u65B0\u5B9A\u4E49\uFF1A

\`\`\`less
// analysis.component.less
[data-theme='dark'] {
  :host ::ng-deep {
    // \u9488\u5BF9\u6697\u9ED1\u7CFB\u91CD\u65B0\u5B9A\u4E49
  }
}
\`\`\`

\u6216\u7D27\u51D1\u4E3B\u9898\uFF1A

\`\`\`less
[data-theme='compact'] {
  :host ::ng-deep {
    // \u9488\u5BF9\u7D27\u51D1\u91CD\u65B0\u5B9A\u4E49
  }
}
\`\`\`

## \u76F8\u5173\u6587\u7AE0

- [\u7EC4\u4EF6\u6837\u5F0F](/theme/component-styles)`}}};codes=[];static ɵfac=function(e){return new(e||n)};static ɵcmp=_e({type:n,selectors:[[`theme-customize-theme`]],hostAttrs:[1,`d-block`],decls:1,vars:2,consts:[[3,`codes`,`item`]],template:function(e,t){e&1&&lt(0,`app-docs`,0),e&2&&re(`codes`,t.codes)(`item`,t.item)},dependencies:[rt],encapsulation:2})};var A=class n{item={name:`getting-started`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{order:1,title:`Getting Started`,description:`@delon/theme is the only must be imported to ng-alain scaffold. It contains a lot of style parameters and several generalities services, pipes.ng-alai...`,group:`Documents`,path:`packages/theme/docs/getting-started.en-US.md`,url:`/theme/getting-started/en`},text:`<p><code>&#64;delon/theme</code> is the only must be imported to ng-alain scaffold. It contains a lot of <a href="/theme/global">style parameters</a> and several generalities <a href="/theme/menu">services</a>, <a href="/theme/date">pipes</a>.</p>
<h2 id="style"><a class="lake-link"><i data-anchor="style"></i></a>Style</h2><p>ng-alain defaults to using less as the style language, we recommend that you learn about the features of <a href="http://lesscss.org/" target="_blank" rel="noopener">less</a> before using it or sometimes when you have some questions. If you want to get a basic knowledge of CSS or look for properties usage, you can refer to the [MDN doc] (<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference" target="_blank" rel="noopener">https://developer.mozilla.org/en-US/docs/Web/CSS/Reference</a>).</p>
<h2 id="layout"><a class="lake-link"><i data-anchor="layout"></i></a>Layout</h2><p>Scaffolding include two layouts: <a href="/theme/layout-default">default layout</a>, <a href="/theme/layout-blank">blank layout</a>, scaffolding does not contain these style files, it&#39;s in the <code>&#64;delon/theme</code> library.</p>
<h2 id="scaffold_style"><a class="lake-link"><i data-anchor="scaffold_style"></i></a>Scaffold Style</h2><p>You can use the toolset provided by ng-alain to adjust spacing, color, size, borders, etc. It&#39;s a set of like bootstrap style tools.</p>
<p>Or customize your styles with <a href="https://github.com/ng-alain/ng-alain/blob/master/src/styles/theme.less" target="_blank" rel="noopener">theme.less</a>, which will work in global applications, in the style development process, there are two prominent problems:</p>
<ul>
<li>Global Pollution - CSS selectors are globally valid. Selectors with the same name in different files will be built together, and the former will be overrided by the latter.</li>
<li>Complex Selector - in order to avoid the above problem, we have to be careful when writing styles. The increase in flags for range restriction will lead to a growing class name, besides that, naming style confusion in multi person development and an increasing number of selectors on an element is hard to avoid.</li>
</ul>
<p>We should use component <code>styles</code> property to create component styles. For how use Angular styles, please refer to <a href="https://zhuanlan.zhihu.com/p/31235358" target="_blank" rel="noopener">About Angular Style Packaging</a>.</p>
<h2 id="style_file_category"><a class="lake-link"><i data-anchor="style_file_category"></i></a>Style file category</h2><p>In a project, style files can be divided into different categories depending on their function.</p>
<h3 id="themeless"><a class="lake-link"><i data-anchor="themeless"></i></a>theme.less</h3><p>Global style file, where you can make some common settings.</p>
<h3 id="tools"><a class="lake-link"><i data-anchor="tools"></i></a>Tools</h3><p>Please  refer to <a href="/theme/tools">Tools</a>\u3002</p>
<h3 id="page_level"><a class="lake-link"><i data-anchor="page_level"></i></a>Page level</h3><p>Specific page-related style, such as <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/routes/dashboard/monitor/monitor.component.less" target="_blank" rel="noopener">monitor.component.less</a>, the content is only related to the content of this page. Under normal circumstances, if it is not particularly complex page, with the previous global style and tools style, there should be little to write.</p>
<h2 id="how_to_override_parameters"><a class="lake-link"><i data-anchor="how_to_override_parameters"></i></a>How to override parameters</h2><p>We are using <a href="http://lesscss.org/" target="_blank" rel="noopener">Less</a> as the development language for styling. A set of less variables are defined for each design aspect that can be customized to your needs.</p>
<p>The changes parameters put into the <a href="https://github.com/ng-alain/ng-alain/blob/master/src/styles/theme.less" target="_blank" rel="noopener">theme.less</a> LESS file, all parameters include:</p>
<ul>
<li><a href="/theme/global">Global Parameters</a></li>
<li><a href="/theme/layout-default">Default Layout</a></li>
<li><a href="/theme/layout-blank">Blank Layout</a></li>
</ul>
<p>Please report an issue if the existing list of variables is not enough for you.</p>
`,api:``,toc:[{id:`style`,title:`Style`},{id:`layout`,title:`Layout`},{id:`scaffold_style`,title:`Scaffold Style`},{id:`style_file_category`,title:`Style file category`,children:[{id:`themeless`,title:`theme.less`},{id:`tools`,title:`Tools`},{id:`page_level`,title:`Page level`}]},{id:`how_to_override_parameters`,title:`How to override parameters`}],raw:`---
order: 1
title: Getting Started
type: Documents
---

\`@delon/theme\` is the only must be imported to ng-alain scaffold. It contains a lot of [style parameters](/theme/global) and several generalities [services](/theme/menu), [pipes](/theme/date).

## Style

ng-alain defaults to using less as the style language, we recommend that you learn about the features of [less](http://lesscss.org/) before using it or sometimes when you have some questions. If you want to get a basic knowledge of CSS or look for properties usage, you can refer to the [MDN doc] (https://developer.mozilla.org/en-US/docs/Web/CSS/Reference).

## Layout

Scaffolding include two layouts: [default layout](/theme/layout-default), [blank layout](/theme/layout-blank), scaffolding does not contain these style files, it's in the \`@delon/theme\` library.

## Scaffold Style

You can use the toolset provided by ng-alain to adjust spacing, color, size, borders, etc. It's a set of like bootstrap style tools.

Or customize your styles with [theme.less](https://github.com/ng-alain/ng-alain/blob/master/src/styles/theme.less), which will work in global applications, in the style development process, there are two prominent problems:

- Global Pollution - CSS selectors are globally valid. Selectors with the same name in different files will be built together, and the former will be overrided by the latter.
- Complex Selector - in order to avoid the above problem, we have to be careful when writing styles. The increase in flags for range restriction will lead to a growing class name, besides that, naming style confusion in multi person development and an increasing number of selectors on an element is hard to avoid.

We should use component \`styles\` property to create component styles. For how use Angular styles, please refer to [About Angular Style Packaging](https://zhuanlan.zhihu.com/p/31235358).

## Style file category

In a project, style files can be divided into different categories depending on their function.

### theme.less

Global style file, where you can make some common settings.

### Tools

Please  refer to [Tools](/theme/tools)\u3002

### Page level

Specific page-related style, such as [monitor.component.less](https://github.com/ng-alain/ng-alain/blob/master/src/app/routes/dashboard/monitor/monitor.component.less), the content is only related to the content of this page. Under normal circumstances, if it is not particularly complex page, with the previous global style and tools style, there should be little to write.

## How to override parameters

We are using [Less](http://lesscss.org/) as the development language for styling. A set of less variables are defined for each design aspect that can be customized to your needs.

The changes parameters put into the [theme.less](https://github.com/ng-alain/ng-alain/blob/master/src/styles/theme.less) LESS file, all parameters include:

- [Global Parameters](/theme/global)
- [Default Layout](/theme/layout-default)
- [Blank Layout](/theme/layout-blank)

Please report an issue if the existing list of variables is not enough for you.`},"zh-CN":{meta:{order:1,title:`开始使用`,description:`@delon/theme 是 ng-alain 脚手架唯一必须引入的模块。它包含了非常多主题样式参数，通过覆盖参数数值进而定制一些特别的需求；以及若干通用性服务、管道。ng-alain 默认使用 less 作为样式语言，建议在使用前或者遇到疑问时学习一下 less 的相关特性，如果想获取基础的 CS...`,group:`Documents`,path:`packages/theme/docs/getting-started.zh-CN.md`,url:`/theme/getting-started/zh`},text:`<p><code>&#64;delon/theme</code> \u662F ng-alain \u811A\u624B\u67B6\u552F\u4E00\u5FC5\u987B\u5F15\u5165\u7684\u6A21\u5757\u3002\u5B83\u5305\u542B\u4E86\u975E\u5E38\u591A<a href="/theme/global">\u4E3B\u9898\u6837\u5F0F\u53C2\u6570</a>\uFF0C\u901A\u8FC7\u8986\u76D6\u53C2\u6570\u6570\u503C\u8FDB\u800C\u5B9A\u5236\u4E00\u4E9B\u7279\u522B\u7684\u9700\u6C42\uFF1B\u4EE5\u53CA\u82E5\u5E72\u901A\u7528\u6027<a href="/theme/menu">\u670D\u52A1</a>\u3001<a href="/theme/date">\u7BA1\u9053</a>\u3002</p>
<h2 id="\u6837\u5F0F"><a class="lake-link"><i data-anchor="\u6837\u5F0F"></i></a>\u6837\u5F0F</h2><p>ng-alain \u9ED8\u8BA4\u4F7F\u7528 less \u4F5C\u4E3A\u6837\u5F0F\u8BED\u8A00\uFF0C\u5EFA\u8BAE\u5728\u4F7F\u7528\u524D\u6216\u8005\u9047\u5230\u7591\u95EE\u65F6\u5B66\u4E60\u4E00\u4E0B <a href="http://lesscss.org/" target="_blank" rel="noopener">less</a> \u7684\u76F8\u5173\u7279\u6027\uFF0C\u5982\u679C\u60F3\u83B7\u53D6\u57FA\u7840\u7684 CSS \u77E5\u8BC6\u6216\u67E5\u9605\u5C5E\u6027\uFF0C\u53EF\u4EE5\u53C2\u8003 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference" target="_blank" rel="noopener">MDN\u6587\u6863</a>\u3002</p>
<h2 id="\u5E03\u5C40"><a class="lake-link"><i data-anchor="\u5E03\u5C40"></i></a>\u5E03\u5C40</h2><p>\u811A\u624B\u67B6\u63D0\u4F9B\u4E24\u79CD\u5E03\u5C40\uFF1A<a href="/theme/layout-default">\u9ED8\u8BA4\u5E03\u5C40</a>\u3001<a href="/theme/layout-blank">\u7A7A\u767D\u5E03\u5C40</a>\uFF0C\u811A\u624B\u67B6\u5E76\u4E0D\u5305\u542B\u4E24\u79CD\u5E03\u5C40\u6837\u5F0F\u6587\u4EF6\uFF0C\u5B83\u4F4D\u4E8E <code>&#64;delon/theme</code> \u7C7B\u5E93\u5F53\u4E2D\u3002</p>
<h2 id="\u811A\u624B\u67B6\u6837\u5F0F"><a class="lake-link"><i data-anchor="\u811A\u624B\u67B6\u6837\u5F0F"></i></a>\u811A\u624B\u67B6\u6837\u5F0F</h2><p>\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u7EDD\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u53EF\u4EE5\u5229\u7528 ng-alain \u63D0\u4F9B\u7684\u5DE5\u5177\u96C6\u6765\u8C03\u6574\u95F4\u8DDD\u3001\u989C\u8272\u3001\u5927\u5C0F\u3001\u8FB9\u6846\u7B49\uFF0C\u5B83\u662F\u4E00\u4E2A\u5957\u7C7B\u4F3C bootstrap \u98CE\u683C\u7684\u5DE5\u5177\u96C6\u3002</p>
<p>\u6216\u901A\u8FC7 <a href="https://github.com/ng-alain/ng-alain/blob/master/src/styles/theme.less" target="_blank" rel="noopener">theme.less</a> \u4E0B\u5B9A\u5236\u4F60\u7684\u6837\u5F0F\uFF0C\u8FD9\u4E9B\u6837\u5F0F\u5C06\u4F1A\u5728\u5168\u5C40\u5E94\u7528\u4E2D\u6709\u6548\uFF0C\u4E14\u6709\u4E24\u4E2A\u95EE\u9898\u6BD4\u8F83\u7A81\u51FA\uFF1A</p>
<ul>
<li>\u5168\u5C40\u6C61\u67D3 \u2014\u2014 CSS \u6587\u4EF6\u4E2D\u7684\u9009\u62E9\u5668\u662F\u5168\u5C40\u751F\u6548\u7684\uFF0C\u4E0D\u540C\u6587\u4EF6\u4E2D\u7684\u540C\u540D\u9009\u62E9\u5668\uFF0C\u6839\u636E build \u540E\u751F\u6210\u6587\u4EF6\u4E2D\u7684\u5148\u540E\u987A\u5E8F\uFF0C\u540E\u9762\u7684\u6837\u5F0F\u4F1A\u5C06\u524D\u9762\u7684\u8986\u76D6\uFF1B</li>
<li>\u9009\u62E9\u5668\u590D\u6742 \u2014\u2014 \u4E3A\u4E86\u907F\u514D\u4E0A\u9762\u7684\u95EE\u9898\uFF0C\u6211\u4EEC\u5728\u7F16\u5199\u6837\u5F0F\u7684\u65F6\u5019\u4E0D\u5F97\u4E0D\u5C0F\u5FC3\u7FFC\u7FFC\uFF0C\u7C7B\u540D\u91CC\u4F1A\u5E26\u4E0A\u9650\u5236\u8303\u56F4\u7684\u6807\u8BC6\uFF0C\u53D8\u5F97\u8D8A\u6765\u8D8A\u957F\uFF0C\u591A\u4EBA\u5F00\u53D1\u65F6\u8FD8\u5F88\u5BB9\u6613\u5BFC\u81F4\u547D\u540D\u98CE\u683C\u6DF7\u4E71\uFF0C\u4E00\u4E2A\u5143\u7D20\u4E0A\u4F7F\u7528\u7684\u9009\u62E9\u5668\u4E2A\u6570\u4E5F\u53EF\u80FD\u8D8A\u6765\u8D8A\u591A\u3002</li>
</ul>
<p>\u56E0\u6B64\uFF0C\u9664\u975E\u8BBE\u8BA1\u5E08\u660E\u786E\u9700\u6C42\u4EE5\u5916\uFF0C\u6211\u4EEC\u5E94\u8BE5\u5C3D\u53EF\u80FD\u4F7F\u7528\u7EC4\u4EF6 <code>styles</code> \u5C5E\u6027\u521B\u5EFA\u7EC4\u4EF6\u6837\u5F0F\uFF0C\u6709\u5173\u5982\u4F55Angular\u6837\u5F0F\u8BF7\u53C2\u8003\u300A<a href="https://zhuanlan.zhihu.com/p/31235358" target="_blank" rel="noopener">\u5173\u4E8EAngular\u6837\u5F0F\u5C01\u88C5</a>\u300B\u3002</p>
<h2 id="\u6837\u5F0F\u6587\u4EF6\u7C7B\u522B"><a class="lake-link"><i data-anchor="\u6837\u5F0F\u6587\u4EF6\u7C7B\u522B"></i></a>\u6837\u5F0F\u6587\u4EF6\u7C7B\u522B</h2><p>\u5728\u4E00\u4E2A\u9879\u76EE\u4E2D\uFF0C\u6837\u5F0F\u6587\u4EF6\u6839\u636E\u529F\u80FD\u4E0D\u540C\uFF0C\u53EF\u4EE5\u5212\u5206\u4E3A\u4E0D\u540C\u7684\u7C7B\u522B\u3002</p>
<h3 id="themeless"><a class="lake-link"><i data-anchor="themeless"></i></a>theme.less</h3><p>\u5168\u5C40\u6837\u5F0F\u6587\u4EF6\uFF0C\u5728\u8FD9\u91CC\u4F60\u53EF\u4EE5\u8FDB\u884C\u4E00\u4E9B\u901A\u7528\u8BBE\u7F6E\u3002</p>
<h3 id="\u5DE5\u5177\u96C6"><a class="lake-link"><i data-anchor="\u5DE5\u5177\u96C6"></i></a>\u5DE5\u5177\u96C6</h3><p>\u8BF7\u53C2\u8003 <a href="/theme/tools">\u5DE5\u5177\u96C6\u6837\u5F0F</a>\u3002</p>
<h3 id="\u9875\u9762\u7EA7"><a class="lake-link"><i data-anchor="\u9875\u9762\u7EA7"></i></a>\u9875\u9762\u7EA7</h3><p>\u5177\u4F53\u9875\u9762\u76F8\u5173\u7684\u6837\u5F0F\uFF0C\u4F8B\u5982 <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/routes/dashboard/monitor/monitor.component.less" target="_blank" rel="noopener">monitor.component.less</a>\uFF0C\u91CC\u9762\u7684\u5185\u5BB9\u4EC5\u548C\u672C\u9875\u9762\u7684\u5185\u5BB9\u76F8\u5173\u3002\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u4E0D\u662F\u9875\u9762\u5185\u5BB9\u7279\u522B\u590D\u6742\uFF0C\u6709\u4E86\u524D\u9762\u5168\u5C40\u6837\u5F0F\u3001\u5DE5\u5177\u96C6\u6837\u5F0F\u7684\u914D\u5408\uFF0C\u8FD9\u91CC\u8981\u5199\u7684\u5E94\u8BE5\u4E0D\u591A\u3002</p>
<h2 id="\u5982\u4F55\u8986\u76D6\u53C2\u6570"><a class="lake-link"><i data-anchor="\u5982\u4F55\u8986\u76D6\u53C2\u6570"></i></a>\u5982\u4F55\u8986\u76D6\u53C2\u6570</h2><p>ng-alain \u7684\u6837\u5F0F\u4F7F\u7528\u4E86 <a href="http://lesscss.org/" target="_blank" rel="noopener">Less</a> \u4F5C\u4E3A\u5F00\u53D1\u8BED\u8A00\uFF0C\u5E76\u5B9A\u4E49\u4E86\u4E00\u7CFB\u5217\u5168\u5C40/\u7EC4\u4EF6\u7684\u6837\u5F0F\u53D8\u91CF\uFF0C\u4F60\u53EF\u4EE5\u6839\u636E\u9700\u6C42\u8FDB\u884C\u76F8\u5E94\u8C03\u6574\u3002</p>
<p>\u8981\u6539\u53D8\u7684\u53C2\u6570\u7EDF\u4E00\u653E\u5728 <a href="https://github.com/ng-alain/ng-alain/blob/master/src/styles/theme.less" target="_blank" rel="noopener">theme.less</a> LESS\u6587\u4EF6\u4E2D\uFF0C\u6240\u6709\u53C2\u6570\u5305\u62EC\uFF1A</p>
<ul>
<li><a href="/theme/global">\u5168\u5C40\u53C2\u6570</a></li>
<li><a href="/theme/layout-default">\u9ED8\u8BA4\u5E03\u5C40</a></li>
<li><a href="/theme/layout-blank">\u7A7A\u767D\u5E03\u5C40</a></li>
</ul>
<p>\u5982\u679C\u4EE5\u4E0A\u53D8\u91CF\u4E0D\u80FD\u6EE1\u8DB3\u4F60\u7684\u5B9A\u5236\u9700\u6C42\uFF0C\u53EF\u4EE5\u7ED9\u6211\u4EEC\u63D0 issue\u3002</p>
`,api:``,toc:[{id:`样式`,title:`样式`},{id:`布局`,title:`布局`},{id:`脚手架样式`,title:`脚手架样式`},{id:`样式文件类别`,title:`样式文件类别`,children:[{id:`themeless`,title:`theme.less`},{id:`工具集`,title:`工具集`},{id:`页面级`,title:`页面级`}]},{id:`如何覆盖参数`,title:`如何覆盖参数`}],raw:`---
order: 1
title: \u5F00\u59CB\u4F7F\u7528
type: Documents
---

\`@delon/theme\` \u662F ng-alain \u811A\u624B\u67B6\u552F\u4E00\u5FC5\u987B\u5F15\u5165\u7684\u6A21\u5757\u3002\u5B83\u5305\u542B\u4E86\u975E\u5E38\u591A[\u4E3B\u9898\u6837\u5F0F\u53C2\u6570](/theme/global)\uFF0C\u901A\u8FC7\u8986\u76D6\u53C2\u6570\u6570\u503C\u8FDB\u800C\u5B9A\u5236\u4E00\u4E9B\u7279\u522B\u7684\u9700\u6C42\uFF1B\u4EE5\u53CA\u82E5\u5E72\u901A\u7528\u6027[\u670D\u52A1](/theme/menu)\u3001[\u7BA1\u9053](/theme/date)\u3002

## \u6837\u5F0F

ng-alain \u9ED8\u8BA4\u4F7F\u7528 less \u4F5C\u4E3A\u6837\u5F0F\u8BED\u8A00\uFF0C\u5EFA\u8BAE\u5728\u4F7F\u7528\u524D\u6216\u8005\u9047\u5230\u7591\u95EE\u65F6\u5B66\u4E60\u4E00\u4E0B [less](http://lesscss.org/) \u7684\u76F8\u5173\u7279\u6027\uFF0C\u5982\u679C\u60F3\u83B7\u53D6\u57FA\u7840\u7684 CSS \u77E5\u8BC6\u6216\u67E5\u9605\u5C5E\u6027\uFF0C\u53EF\u4EE5\u53C2\u8003 [MDN\u6587\u6863](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference)\u3002

## \u5E03\u5C40

\u811A\u624B\u67B6\u63D0\u4F9B\u4E24\u79CD\u5E03\u5C40\uFF1A[\u9ED8\u8BA4\u5E03\u5C40](/theme/layout-default)\u3001[\u7A7A\u767D\u5E03\u5C40](/theme/layout-blank)\uFF0C\u811A\u624B\u67B6\u5E76\u4E0D\u5305\u542B\u4E24\u79CD\u5E03\u5C40\u6837\u5F0F\u6587\u4EF6\uFF0C\u5B83\u4F4D\u4E8E \`@delon/theme\` \u7C7B\u5E93\u5F53\u4E2D\u3002

## \u811A\u624B\u67B6\u6837\u5F0F

\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u7EDD\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u53EF\u4EE5\u5229\u7528 ng-alain \u63D0\u4F9B\u7684\u5DE5\u5177\u96C6\u6765\u8C03\u6574\u95F4\u8DDD\u3001\u989C\u8272\u3001\u5927\u5C0F\u3001\u8FB9\u6846\u7B49\uFF0C\u5B83\u662F\u4E00\u4E2A\u5957\u7C7B\u4F3C bootstrap \u98CE\u683C\u7684\u5DE5\u5177\u96C6\u3002

\u6216\u901A\u8FC7 [theme.less](https://github.com/ng-alain/ng-alain/blob/master/src/styles/theme.less) \u4E0B\u5B9A\u5236\u4F60\u7684\u6837\u5F0F\uFF0C\u8FD9\u4E9B\u6837\u5F0F\u5C06\u4F1A\u5728\u5168\u5C40\u5E94\u7528\u4E2D\u6709\u6548\uFF0C\u4E14\u6709\u4E24\u4E2A\u95EE\u9898\u6BD4\u8F83\u7A81\u51FA\uFF1A

- \u5168\u5C40\u6C61\u67D3 \u2014\u2014 CSS \u6587\u4EF6\u4E2D\u7684\u9009\u62E9\u5668\u662F\u5168\u5C40\u751F\u6548\u7684\uFF0C\u4E0D\u540C\u6587\u4EF6\u4E2D\u7684\u540C\u540D\u9009\u62E9\u5668\uFF0C\u6839\u636E build \u540E\u751F\u6210\u6587\u4EF6\u4E2D\u7684\u5148\u540E\u987A\u5E8F\uFF0C\u540E\u9762\u7684\u6837\u5F0F\u4F1A\u5C06\u524D\u9762\u7684\u8986\u76D6\uFF1B
- \u9009\u62E9\u5668\u590D\u6742 \u2014\u2014 \u4E3A\u4E86\u907F\u514D\u4E0A\u9762\u7684\u95EE\u9898\uFF0C\u6211\u4EEC\u5728\u7F16\u5199\u6837\u5F0F\u7684\u65F6\u5019\u4E0D\u5F97\u4E0D\u5C0F\u5FC3\u7FFC\u7FFC\uFF0C\u7C7B\u540D\u91CC\u4F1A\u5E26\u4E0A\u9650\u5236\u8303\u56F4\u7684\u6807\u8BC6\uFF0C\u53D8\u5F97\u8D8A\u6765\u8D8A\u957F\uFF0C\u591A\u4EBA\u5F00\u53D1\u65F6\u8FD8\u5F88\u5BB9\u6613\u5BFC\u81F4\u547D\u540D\u98CE\u683C\u6DF7\u4E71\uFF0C\u4E00\u4E2A\u5143\u7D20\u4E0A\u4F7F\u7528\u7684\u9009\u62E9\u5668\u4E2A\u6570\u4E5F\u53EF\u80FD\u8D8A\u6765\u8D8A\u591A\u3002

\u56E0\u6B64\uFF0C\u9664\u975E\u8BBE\u8BA1\u5E08\u660E\u786E\u9700\u6C42\u4EE5\u5916\uFF0C\u6211\u4EEC\u5E94\u8BE5\u5C3D\u53EF\u80FD\u4F7F\u7528\u7EC4\u4EF6 \`styles\` \u5C5E\u6027\u521B\u5EFA\u7EC4\u4EF6\u6837\u5F0F\uFF0C\u6709\u5173\u5982\u4F55Angular\u6837\u5F0F\u8BF7\u53C2\u8003\u300A[\u5173\u4E8EAngular\u6837\u5F0F\u5C01\u88C5](https://zhuanlan.zhihu.com/p/31235358)\u300B\u3002

## \u6837\u5F0F\u6587\u4EF6\u7C7B\u522B

\u5728\u4E00\u4E2A\u9879\u76EE\u4E2D\uFF0C\u6837\u5F0F\u6587\u4EF6\u6839\u636E\u529F\u80FD\u4E0D\u540C\uFF0C\u53EF\u4EE5\u5212\u5206\u4E3A\u4E0D\u540C\u7684\u7C7B\u522B\u3002

### theme.less

\u5168\u5C40\u6837\u5F0F\u6587\u4EF6\uFF0C\u5728\u8FD9\u91CC\u4F60\u53EF\u4EE5\u8FDB\u884C\u4E00\u4E9B\u901A\u7528\u8BBE\u7F6E\u3002

### \u5DE5\u5177\u96C6

\u8BF7\u53C2\u8003 [\u5DE5\u5177\u96C6\u6837\u5F0F](/theme/tools)\u3002

### \u9875\u9762\u7EA7

\u5177\u4F53\u9875\u9762\u76F8\u5173\u7684\u6837\u5F0F\uFF0C\u4F8B\u5982 [monitor.component.less](https://github.com/ng-alain/ng-alain/blob/master/src/app/routes/dashboard/monitor/monitor.component.less)\uFF0C\u91CC\u9762\u7684\u5185\u5BB9\u4EC5\u548C\u672C\u9875\u9762\u7684\u5185\u5BB9\u76F8\u5173\u3002\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u4E0D\u662F\u9875\u9762\u5185\u5BB9\u7279\u522B\u590D\u6742\uFF0C\u6709\u4E86\u524D\u9762\u5168\u5C40\u6837\u5F0F\u3001\u5DE5\u5177\u96C6\u6837\u5F0F\u7684\u914D\u5408\uFF0C\u8FD9\u91CC\u8981\u5199\u7684\u5E94\u8BE5\u4E0D\u591A\u3002

## \u5982\u4F55\u8986\u76D6\u53C2\u6570

ng-alain \u7684\u6837\u5F0F\u4F7F\u7528\u4E86 [Less](http://lesscss.org/) \u4F5C\u4E3A\u5F00\u53D1\u8BED\u8A00\uFF0C\u5E76\u5B9A\u4E49\u4E86\u4E00\u7CFB\u5217\u5168\u5C40/\u7EC4\u4EF6\u7684\u6837\u5F0F\u53D8\u91CF\uFF0C\u4F60\u53EF\u4EE5\u6839\u636E\u9700\u6C42\u8FDB\u884C\u76F8\u5E94\u8C03\u6574\u3002

\u8981\u6539\u53D8\u7684\u53C2\u6570\u7EDF\u4E00\u653E\u5728 [theme.less](https://github.com/ng-alain/ng-alain/blob/master/src/styles/theme.less) LESS\u6587\u4EF6\u4E2D\uFF0C\u6240\u6709\u53C2\u6570\u5305\u62EC\uFF1A

- [\u5168\u5C40\u53C2\u6570](/theme/global)
- [\u9ED8\u8BA4\u5E03\u5C40](/theme/layout-default)
- [\u7A7A\u767D\u5E03\u5C40](/theme/layout-blank)

\u5982\u679C\u4EE5\u4E0A\u53D8\u91CF\u4E0D\u80FD\u6EE1\u8DB3\u4F60\u7684\u5B9A\u5236\u9700\u6C42\uFF0C\u53EF\u4EE5\u7ED9\u6211\u4EEC\u63D0 issue\u3002`}}};codes=[];static ɵfac=function(e){return new(e||n)};static ɵcmp=_e({type:n,selectors:[[`theme-getting-started`]],hostAttrs:[1,`d-block`],decls:1,vars:2,consts:[[3,`codes`,`item`]],template:function(e,t){e&1&&lt(0,`app-docs`,0),e&2&&re(`codes`,t.codes)(`item`,t.item)},dependencies:[rt],encapsulation:2})};var N=class n{item={name:`global`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{order:1,title:`Global Parameters`,description:`By nz-table。`,group:`Theme`,path:`packages/theme/docs/global.en-US.md`,url:`/theme/global/en`},text:`<h2 id="public"><a class="lake-link"><i data-anchor="public"></i></a>Public</h2><table>
<thead>
<tr>
<th>Name</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>&#64;layout-gutter</code></td>
<td><code>8px</code></td>
<td>Antd layout spacing (unchageable)</td>
</tr>
<tr>
<td><code>&#64;font-size-base</code></td>
<td><code>14px</code></td>
<td>Antd font size (unchageable)</td>
</tr>
<tr>
<td><code>&#64;primary-color</code></td>
<td>Blue</td>
<td>antd primary color</td>
</tr>
<tr>
<td><code>&#64;mobile-min</code></td>
<td><code>768px</code></td>
<td>PC of width</td>
</tr>
<tr>
<td><code>&#64;mobile-max</code></td>
<td><code>767px</code></td>
<td>Mobile of width</td>
</tr>
<tr>
<td><code>&#64;text-xs</code></td>
<td><code>&#64;font-size-base - 2</code></td>
<td>Text of xs size</td>
</tr>
<tr>
<td><code>&#64;text-sm</code></td>
<td><code>&#64;font-size-base + 0</code></td>
<td>Text of sm size</td>
</tr>
<tr>
<td><code>&#64;text-md</code></td>
<td><code>&#64;font-size-base + 2</code></td>
<td>Text of md size</td>
</tr>
<tr>
<td><code>&#64;text-lg</code></td>
<td><code>&#64;font-size-base + 4</code></td>
<td>Text of lg size</td>
</tr>
<tr>
<td><code>&#64;text-xl</code></td>
<td><code>&#64;font-size-base + 8</code></td>
<td>Text of xl size</td>
</tr>
<tr>
<td><code>&#64;text-xxl</code></td>
<td><code>&#64;font-size-base + 12</code></td>
<td>Text of xxl size</td>
</tr>
<tr>
<td><code>&#64;icon-sm</code></td>
<td><code>&#64;font-size-base * 2</code></td>
<td>Icon of sm size</td>
</tr>
<tr>
<td><code>&#64;icon-md</code></td>
<td><code>&#64;font-size-base * 4</code></td>
<td>Icon of md size</td>
</tr>
<tr>
<td><code>&#64;icon-lg</code></td>
<td><code>&#64;font-size-base * 6</code></td>
<td>Icon of lg size</td>
</tr>
<tr>
<td><code>&#64;icon-xl</code></td>
<td><code>&#64;font-size-base * 8</code></td>
<td>Icon of xl size</td>
</tr>
<tr>
<td><code>&#64;icon-xxl</code></td>
<td><code>&#64;font-size-base * 10</code></td>
<td>Icon of xxl size</td>
</tr>
<tr>
<td><code>&#64;h1-font-size</code></td>
<td><code>32px</code></td>
<td>h1 font size</td>
</tr>
<tr>
<td><code>&#64;h2-font-size</code></td>
<td><code>24px</code></td>
<td>h2 font size</td>
</tr>
<tr>
<td><code>&#64;h3-font-size</code></td>
<td><code>20px</code></td>
<td>h3 font size</td>
</tr>
<tr>
<td><code>&#64;h4-font-size</code></td>
<td><code>16px</code></td>
<td>h4 font size</td>
</tr>
<tr>
<td><code>&#64;h5-font-size</code></td>
<td><code>14px</code></td>
<td>h5 font size</td>
</tr>
<tr>
<td><code>&#64;h6-font-size</code></td>
<td><code>12px</code></td>
<td>h6 font size</td>
</tr>
<tr>
<td><code>&#64;enable-all-colors</code></td>
<td><code>false</code></td>
<td>Turn on background, text color<br>eg: <code>.bg-teal</code>\u3001<code>.text-teal</code></td>
</tr>
<tr>
<td><code>&#64;modal-sm</code></td>
<td><code>300px</code></td>
<td>Small modal</td>
</tr>
<tr>
<td><code>&#64;modal-md</code></td>
<td><code>500px</code></td>
<td>Medium modal</td>
</tr>
<tr>
<td><code>&#64;modal-lg</code></td>
<td><code>900px</code></td>
<td>Large modal</td>
</tr>
<tr>
<td><code>&#64;modal-lg</code></td>
<td><code>1200px</code></td>
<td>Extra large modal</td>
</tr>
<tr>
<td><code>&#64;drawer-sm</code></td>
<td><code>300px</code></td>
<td>Small drawer</td>
</tr>
<tr>
<td><code>&#64;drawer-md</code></td>
<td><code>500px</code></td>
<td>Medium drawer</td>
</tr>
<tr>
<td><code>&#64;drawer-lg</code></td>
<td><code>900px</code></td>
<td>Large drawer</td>
</tr>
<tr>
<td><code>&#64;drawer-lg</code></td>
<td><code>1200px</code></td>
<td>Extra large drawer</td>
</tr>
<tr>
<td><code>&#64;drawer-sm-height</code></td>
<td><code>200px</code></td>
<td>Small drawer for height</td>
</tr>
<tr>
<td><code>&#64;drawer-md-height</code></td>
<td><code>400px</code></td>
<td>Medium drawer for height</td>
</tr>
<tr>
<td><code>&#64;drawer-lg-height</code></td>
<td><code>600px</code></td>
<td>Large drawer for height</td>
</tr>
<tr>
<td><code>&#64;drawer-xl-height</code></td>
<td><code>800px</code></td>
<td>Extra large drawer for height</td>
</tr>
<tr>
<td><code>&#64;code-border-color</code></td>
<td><code>#eee</code></td>
<td><code>&lt;code&gt;</code> border color</td>
</tr>
<tr>
<td><code>&#64;code-bg</code></td>
<td><code>#f7f7f7</code></td>
<td><code>&lt;code&gt;</code> background color</td>
</tr>
<tr>
<td><code>&#64;widths</code></td>
<td><code>xs &#64;layout-gutter * 10</code><br><code>sm &#64;layout-gutter * 20</code><br><code>md &#64;layout-gutter * 30</code><br><code>lg &#64;layout-gutter * 40</code><br><code>xl &#64;layout-gutter * 50</code><br><code>xxl &#64;layout-gutter * 50</code></td>
<td>width</td>
</tr>
<tr>
<td><code>&#64;border-radius-md</code></td>
<td><code>4px</code></td>
<td>Medium border rounded corner</td>
</tr>
<tr>
<td><code>&#64;border-radius-lg</code></td>
<td><code>6px</code></td>
<td>Large border rounded corner</td>
</tr>
<tr>
<td><code>&#64;masonry-column-gap</code></td>
<td><code>&#64;layout-gutter * 2</code></td>
<td>CSS waterfall flow column and column spacing</td>
</tr>
<tr>
<td><code>&#64;scrollbar-enabled</code></td>
<td><code>true</code></td>
<td>Enable landscaping scrollbars</td>
</tr>
<tr>
<td><code>&#64;scrollbar-width</code></td>
<td><code>6px</code></td>
<td>Scroll bar width</td>
</tr>
<tr>
<td><code>&#64;scrollbar-height</code></td>
<td><code>6px</code></td>
<td>Scroll bar height</td>
</tr>
<tr>
<td><code>&#64;scrollbar-track-color</code></td>
<td><code>rgba(0, 0, 0, 0.3)</code></td>
<td>Scrollbar track color</td>
</tr>
<tr>
<td><code>&#64;scrollbar-thumb-color</code></td>
<td><code>transparent</code></td>
<td>Scrollbar thumb color</td>
</tr>
<tr>
<td><code>&#64;scrollbar-table-enabled</code></td>
<td><code>false</code></td>
<td>Enable landscaping scrollbars of nz-table</td>
</tr>
<tr>
<td><code>&#64;rtl-enabled</code></td>
<td><code>false</code></td>
<td>Wheter support RTL</td>
</tr>
<tr>
<td><code>&#64;enabled-util-align</code></td>
<td><code>true</code></td>
<td>Whether to enable tools align</td>
</tr>
<tr>
<td><code>&#64;enabled-util-border</code></td>
<td><code>true</code></td>
<td>Whether to enable tools border</td>
</tr>
<tr>
<td><code>&#64;enabled-util-code</code></td>
<td><code>true</code></td>
<td>Whether to enable tools code</td>
</tr>
<tr>
<td><code>&#64;enabled-util-color</code></td>
<td><code>true</code></td>
<td>Whether to enable tools color</td>
</tr>
<tr>
<td><code>&#64;enabled-util-display</code></td>
<td><code>true</code></td>
<td>Whether to enable tools display</td>
</tr>
<tr>
<td><code>&#64;enabled-util-float</code></td>
<td><code>true</code></td>
<td>Whether to enable tools float</td>
</tr>
<tr>
<td><code>&#64;enabled-util-icon</code></td>
<td><code>true</code></td>
<td>Whether to enable tools icon</td>
</tr>
<tr>
<td><code>&#64;enabled-util-img</code></td>
<td><code>true</code></td>
<td>Whether to enable tools img</td>
</tr>
<tr>
<td><code>&#64;enabled-util-position</code></td>
<td><code>true</code></td>
<td>Whether to enable tools position</td>
</tr>
<tr>
<td><code>&#64;enabled-util-overflow</code></td>
<td><code>true</code></td>
<td>Whether to enable tools overflow</td>
</tr>
<tr>
<td><code>&#64;enabled-util-responsive</code></td>
<td><code>true</code></td>
<td>Whether to enable tools responsive</td>
</tr>
<tr>
<td><code>&#64;enabled-util-spacing</code></td>
<td><code>true</code></td>
<td>Whether to enable tools spacing</td>
</tr>
<tr>
<td><code>&#64;enabled-util-text</code></td>
<td><code>true</code></td>
<td>Whether to enable tools text</td>
</tr>
<tr>
<td><code>&#64;enabled-util-width</code></td>
<td><code>true</code></td>
<td>Whether to enable tools width</td>
</tr>
<tr>
<td><code>&#64;enabled-util-scrollbar</code></td>
<td><code>true</code></td>
<td>Whether to enable tools scrollbar</td>
</tr>
<tr>
<td><code>&#64;enabled-util-other</code></td>
<td><code>true</code></td>
<td>Whether to enable tools other</td>
</tr>
</tbody></table>
<h2 id="ng_patch"><a class="lake-link"><i data-anchor="ng_patch"></i></a>Ng patch</h2><h3 id="general"><a class="lake-link"><i data-anchor="general"></i></a>General</h3><table>
<thead>
<tr>
<th>Name</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>&#64;preserve-white-spaces-enabled</code></td>
<td><code>true</code></td>
<td>Fixed between buttons spacing when enabled <a href="https://angular.io/api/core/Component#preserveWhitespaces" target="_blank" rel="noopener">preserveWhitespaces</a> is true</td>
</tr>
<tr>
<td><code>&#64;preserve-sf-and-st-spaces</code></td>
<td><code>16px</code></td>
<td>Spacing between <code>sf</code> and <code>st</code></td>
</tr>
<tr>
<td><code>&#64;preserve-buttons-spaces</code></td>
<td>Spacing between <code>button</code> and <code>button</code>(incluldes: <code>button</code>,<code>button-group</code>,<code>popconfirm</code>)</td>
<td></td>
</tr>
<tr>
<td><code>&#64;router-animation-enabled</code></td>
<td><code>false</code></td>
<td>Whether to enable animation when route changing</td>
</tr>
<tr>
<td><code>&#64;router-animation-duration</code></td>
<td><code>antFadeIn</code></td>
<td>Route switching animation name</td>
</tr>
<tr>
<td><code>&#64;router-animation-duration</code></td>
<td><code>1s</code></td>
<td>Animation duration</td>
</tr>
</tbody></table>
<h2 id="zorro_patch"><a class="lake-link"><i data-anchor="zorro_patch"></i></a>Zorro patch</h2><h3 id="general"><a class="lake-link"><i data-anchor="general"></i></a>General</h3><table>
<thead>
<tr>
<th>Name</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>&#64;forced-turn-off-nz-modal-animation-enabled</code></td>
<td><code>false</code></td>
<td>Forced to turn off <code>nz-modal</code> animation</td>
</tr>
</tbody></table>
<h3 id="form"><a class="lake-link"><i data-anchor="form"></i></a>Form</h3><table>
<thead>
<tr>
<th>Name</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>&#64;form-state-visual-feedback-enabled</code></td>
<td><code>false</code></td>
<td>Turn on visual feedback of form invalid elements</td>
</tr>
<tr>
<td><code>&#64;search-form-bg</code></td>
<td><code>#fbfbfb</code></td>
<td>Background color of simple search form</td>
</tr>
<tr>
<td><code>&#64;search-form-radius</code></td>
<td><code>4px</code></td>
<td>Border rounded corner of simple search form</td>
</tr>
</tbody></table>
<h3 id="table"><a class="lake-link"><i data-anchor="table"></i></a>Table</h3><p>By <code>nz-table</code>\u3002</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>&#64;nz-table-img-radius</code></td>
<td><code>4px</code></td>
<td>Image rounded in the table</td>
</tr>
<tr>
<td><code>&#64;nz-table-img-margin-right</code></td>
<td><code>4px</code></td>
<td>Image margin-right in the table</td>
</tr>
<tr>
<td><code>&#64;nz-table-img-max-width</code></td>
<td><code>32px</code></td>
<td>Image maximum width in the table</td>
</tr>
<tr>
<td><code>&#64;nz-table-img-max-height</code></td>
<td><code>32px</code></td>
<td>Image maximum height in the table</td>
</tr>
<tr>
<td><code>&#64;nz-table-even-background</code></td>
<td><code>none</code></td>
<td>Even background color in the table</td>
</tr>
<tr>
<td><code>&#64;nz-table-rep-max-width</code></td>
<td><code>&#64;mobile-max</code></td>
<td>Triggering table response when mobile screen</td>
</tr>
<tr>
<td><code>&#64;nz-table-rep-header-background</code></td>
<td><code>&#64;border-color-split</code></td>
<td>Table responsive: title background color</td>
</tr>
<tr>
<td><code>&#64;nz-table-rep-even-background</code></td>
<td><code>#f9f9f9</code></td>
<td>Table responsive: even background color</td>
</tr>
<tr>
<td><code>&#64;nz-table-rep-padding-vertical</code></td>
<td><code>8px</code></td>
<td>Table responsive: Cell vertical spacing</td>
</tr>
<tr>
<td><code>&#64;nz-table-rep-padding-horizontal</code></td>
<td><code>8px</code></td>
<td>Table responsive: Cell horizontal spacing</td>
</tr>
<tr>
<td><code>&#64;nz-table-rep-column-name-width</code></td>
<td><code>100px</code></td>
<td>Table responsive: Column name maximum width</td>
</tr>
<tr>
<td><code>&#64;nz-table-rep-column-name-text-align</code></td>
<td><code>right</code></td>
<td>Table responsive: Column name text alignment</td>
</tr>
<tr>
<td><code>&#64;nz-table-rep-column-name-padding-right</code></td>
<td><code>right</code></td>
<td>Table responsive: Column name right spacing</td>
</tr>
<tr>
<td><code>&#64;nz-table-rep-column-name-color</code></td>
<td><code>rgba(0, 0, 0, 0.5)</code></td>
<td>Table responsive: Column name color</td>
</tr>
</tbody></table>
<h2 id="widgets"><a class="lake-link"><i data-anchor="widgets"></i></a>Widgets</h2><table>
<thead>
<tr>
<th>Name</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>&#64;hafl-enabled</code></td>
<td><code>true</code></td>
<td>Whether hafl image</td>
</tr>
<tr>
<td><code>&#64;abs-enabled</code></td>
<td><code>true</code></td>
<td>Whether abs element</td>
</tr>
<tr>
<td><code>&#64;masonry-enabled</code></td>
<td><code>true</code></td>
<td>Whether css masonry</td>
</tr>
<tr>
<td><code>&#64;setting-drawer-enabled</code></td>
<td><code>true</code></td>
<td>Whether setting drawer css</td>
</tr>
<tr>
<td><code>&#64;search__form-enabled</code></td>
<td><code>true</code></td>
<td>Pro style search form, <a href="https://ng-alain.surge.sh/" target="_blank" rel="noopener">DEMO</a></td>
</tr>
</tbody></table>
`,api:``,toc:[{id:`public`,title:`Public`},{id:`ng_patch`,title:`Ng patch`,children:[{id:`general`,title:`General`}]},{id:`zorro_patch`,title:`Zorro patch`,children:[{id:`general`,title:`General`},{id:`form`,title:`Form`},{id:`table`,title:`Table`}]},{id:`widgets`,title:`Widgets`}],raw:"---\ntype: Theme\norder: 1\ntitle: Global Parameters\n---\n\n## Public\n\n| Name | Default | Description |\n| --- | --- | --- |\n| `@layout-gutter` | `8px` | Antd layout spacing (unchageable) |\n| `@font-size-base` | `14px` | Antd font size (unchageable) |\n| `@primary-color` | Blue | antd primary color |\n| `@mobile-min` | `768px` | PC of width |\n| `@mobile-max` | `767px` | Mobile of width |\n| `@text-xs` | `@font-size-base - 2` | Text of xs size |\n| `@text-sm` | `@font-size-base + 0` | Text of sm size |\n| `@text-md` | `@font-size-base + 2` | Text of md size |\n| `@text-lg` | `@font-size-base + 4` | Text of lg size |\n| `@text-xl` | `@font-size-base + 8` | Text of xl size |\n| `@text-xxl` | `@font-size-base + 12` | Text of xxl size |\n| `@icon-sm` | `@font-size-base * 2` | Icon of sm size |\n| `@icon-md` | `@font-size-base * 4` | Icon of md size |\n| `@icon-lg` | `@font-size-base * 6` | Icon of lg size |\n| `@icon-xl` | `@font-size-base * 8` | Icon of xl size |\n| `@icon-xxl` | `@font-size-base * 10` | Icon of xxl size |\n| `@h1-font-size` | `32px` | h1 font size |\n| `@h2-font-size` | `24px` | h2 font size |\n| `@h3-font-size` | `20px` | h3 font size |\n| `@h4-font-size` | `16px` | h4 font size |\n| `@h5-font-size` | `14px` | h5 font size |\n| `@h6-font-size` | `12px` | h6 font size |\n| `@enable-all-colors` | `false` | Turn on background, text color<br>eg: `.bg-teal`、`.text-teal` |\n| `@modal-sm` | `300px` | Small modal |\n| `@modal-md` | `500px` | Medium modal |\n| `@modal-lg` | `900px` | Large modal |\n| `@modal-lg` | `1200px` | Extra large modal |\n| `@drawer-sm` | `300px` | Small drawer |\n| `@drawer-md` | `500px` | Medium drawer |\n| `@drawer-lg` | `900px` | Large drawer |\n| `@drawer-lg` | `1200px` | Extra large drawer |\n| `@drawer-sm-height` | `200px` | Small drawer for height |\n| `@drawer-md-height` | `400px` | Medium drawer for height |\n| `@drawer-lg-height` | `600px` | Large drawer for height |\n| `@drawer-xl-height` | `800px` | Extra large drawer for height |\n| `@code-border-color` | `#eee` | `<code>` border color |\n| `@code-bg` | `#f7f7f7` | `<code>` background color |\n| `@widths`  | `xs @layout-gutter * 10`<br>`sm @layout-gutter * 20`<br>`md @layout-gutter * 30`<br>`lg @layout-gutter * 40`<br>`xl @layout-gutter * 50`<br>`xxl @layout-gutter * 50` | width |\n| `@border-radius-md` | `4px` | Medium border rounded corner |\n| `@border-radius-lg` | `6px` | Large border rounded corner |\n| `@masonry-column-gap` | `@layout-gutter * 2` | CSS waterfall flow column and column spacing |\n| `@scrollbar-enabled` | `true` | Enable landscaping scrollbars |\n| `@scrollbar-width` | `6px` | Scroll bar width |\n| `@scrollbar-height` | `6px` | Scroll bar height |\n| `@scrollbar-track-color` | `rgba(0, 0, 0, 0.3)` | Scrollbar track color |\n| `@scrollbar-thumb-color` | `transparent` | Scrollbar thumb color |\n| `@scrollbar-table-enabled` | `false` | Enable landscaping scrollbars of nz-table |\n| `@rtl-enabled` | `false` | Wheter support RTL |\n| `@enabled-util-align` | `true` | Whether to enable tools align |\n| `@enabled-util-border` | `true` | Whether to enable tools border |\n| `@enabled-util-code` | `true` | Whether to enable tools code |\n| `@enabled-util-color` | `true` | Whether to enable tools color |\n| `@enabled-util-display` | `true` | Whether to enable tools display |\n| `@enabled-util-float` | `true` | Whether to enable tools float |\n| `@enabled-util-icon` | `true` | Whether to enable tools icon |\n| `@enabled-util-img` | `true` | Whether to enable tools img |\n| `@enabled-util-position` | `true` | Whether to enable tools position |\n| `@enabled-util-overflow` | `true` | Whether to enable tools overflow |\n| `@enabled-util-responsive` | `true` | Whether to enable tools responsive |\n| `@enabled-util-spacing` | `true` | Whether to enable tools spacing |\n| `@enabled-util-text` | `true` | Whether to enable tools text |\n| `@enabled-util-width` | `true` | Whether to enable tools width |\n| `@enabled-util-scrollbar` | `true` | Whether to enable tools scrollbar |\n| `@enabled-util-other` | `true` | Whether to enable tools other |\n\n## Ng patch\n\n### General\n\n| Name | Default | Description |\n| --- | --- | --- |\n| `@preserve-white-spaces-enabled` | `true` | Fixed between buttons spacing when enabled [preserveWhitespaces](https://angular.io/api/core/Component#preserveWhitespaces) is true |\n| `@preserve-sf-and-st-spaces` | `16px` | Spacing between `sf` and `st` |\n| `@preserve-buttons-spaces` | Spacing between `button` and `button`(incluldes: `button`,`button-group`,`popconfirm`) |\n| `@router-animation-enabled` | `false` | Whether to enable animation when route changing |\n| `@router-animation-duration` | `antFadeIn` | Route switching animation name |\n| `@router-animation-duration` | `1s` | Animation duration |\n\n## Zorro patch\n\n### General\n\n| Name | Default | Description |\n| --- | --- | --- |\n| `@forced-turn-off-nz-modal-animation-enabled` | `false` |Forced to turn off `nz-modal` animation |\n\n### Form\n\n| Name | Default | Description |\n| --- | --- | --- |\n| `@form-state-visual-feedback-enabled` | `false` | Turn on visual feedback of form invalid elements |\n| `@search-form-bg` | `#fbfbfb` | Background color of simple search form |\n| `@search-form-radius` | `4px` | Border rounded corner of simple search form |\n\n### Table\n\nBy `nz-table`。\n\n| Name | Default | Description |\n| --- | --- | --- |\n| `@nz-table-img-radius` | `4px` | Image rounded in the table |\n| `@nz-table-img-margin-right` | `4px` | Image margin-right in the table |\n| `@nz-table-img-max-width` | `32px` | Image maximum width in the table |\n| `@nz-table-img-max-height` | `32px` | Image maximum height in the table |\n| `@nz-table-even-background` | `none` | Even background color in the table |\n| `@nz-table-rep-max-width` | `@mobile-max` | Triggering table response when mobile screen |\n| `@nz-table-rep-header-background` | `@border-color-split` | Table responsive: title background color |\n| `@nz-table-rep-even-background` | `#f9f9f9` | Table responsive: even background color |\n| `@nz-table-rep-padding-vertical` | `8px` | Table responsive: Cell vertical spacing |\n| `@nz-table-rep-padding-horizontal` | `8px` | Table responsive: Cell horizontal spacing |\n| `@nz-table-rep-column-name-width` | `100px` | Table responsive: Column name maximum width |\n| `@nz-table-rep-column-name-text-align` | `right` | Table responsive: Column name text alignment |\n| `@nz-table-rep-column-name-padding-right` | `right` | Table responsive: Column name right spacing |\n| `@nz-table-rep-column-name-color` | `rgba(0, 0, 0, 0.5)` | Table responsive: Column name color |\n\n## Widgets\n\n| Name | Default | Description |\n| --- | --- | --- |\n| `@hafl-enabled` | `true` | Whether hafl image |\n| `@abs-enabled` | `true` | Whether abs element|\n| `@masonry-enabled` | `true` | Whether css masonry |\n| `@setting-drawer-enabled` | `true` | Whether setting drawer css |\n| `@search__form-enabled` | `true` | Pro style search form, [DEMO](https://ng-alain.surge.sh/) |"},"zh-CN":{meta:{order:1,title:`全局参数`,description:`指 nz-table。`,group:`Theme`,path:`packages/theme/docs/global.zh-CN.md`,url:`/theme/global/zh`},text:`<h2 id="\u516C\u5171\u7C7B"><a class="lake-link"><i data-anchor="\u516C\u5171\u7C7B"></i></a>\u516C\u5171\u7C7B</h2><table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u529F\u80FD</th>
</tr>
</thead>
<tbody><tr>
<td><code>&#64;layout-gutter</code></td>
<td><code>8px</code></td>
<td>antd\u5E03\u5C40\u95F4\u8DDD\uFF0C\u4E0D\u53EF\u6539\u53D8</td>
</tr>
<tr>
<td><code>&#64;font-size-base</code></td>
<td><code>14px</code></td>
<td>antd\u5B57\u53F7</td>
</tr>
<tr>
<td><code>&#64;primary-color</code></td>
<td>\u84DD\u8272</td>
<td>antd \u4E3B\u8272</td>
</tr>
<tr>
<td><code>&#64;mobile-min</code></td>
<td><code>768px</code></td>
<td>PC\u7AEF</td>
</tr>
<tr>
<td><code>&#64;mobile-max</code></td>
<td><code>767px</code></td>
<td>\u79FB\u52A8\u7AEF</td>
</tr>
<tr>
<td><code>&#64;text-xs</code></td>
<td><code>&#64;font-size-base - 2</code></td>
<td>xs \u6587\u672C\u5927\u5C0F</td>
</tr>
<tr>
<td><code>&#64;text-sm</code></td>
<td><code>&#64;font-size-base + 0</code></td>
<td>sm \u6587\u672C\u5927\u5C0F</td>
</tr>
<tr>
<td><code>&#64;text-md</code></td>
<td><code>&#64;font-size-base + 2</code></td>
<td>md \u6587\u672C\u5927\u5C0F</td>
</tr>
<tr>
<td><code>&#64;text-lg</code></td>
<td><code>&#64;font-size-base + 4</code></td>
<td>lg \u6587\u672C\u5927\u5C0F</td>
</tr>
<tr>
<td><code>&#64;text-xl</code></td>
<td><code>&#64;font-size-base + 8</code></td>
<td>xl \u6587\u672C\u5927\u5C0F</td>
</tr>
<tr>
<td><code>&#64;text-xxl</code></td>
<td><code>&#64;font-size-base + 12</code></td>
<td>xxl \u6587\u672C\u5927\u5C0F</td>
</tr>
<tr>
<td><code>&#64;icon-sm</code></td>
<td><code>&#64;font-size-base * 2</code></td>
<td>sm \u56FE\u6807</td>
</tr>
<tr>
<td><code>&#64;icon-md</code></td>
<td><code>&#64;font-size-base * 4</code></td>
<td>md \u56FE\u6807</td>
</tr>
<tr>
<td><code>&#64;icon-lg</code></td>
<td><code>&#64;font-size-base * 6</code></td>
<td>lg \u56FE\u6807</td>
</tr>
<tr>
<td><code>&#64;icon-xl</code></td>
<td><code>&#64;font-size-base * 8</code></td>
<td>xl \u56FE\u6807</td>
</tr>
<tr>
<td><code>&#64;icon-xxl</code></td>
<td><code>&#64;font-size-base * 10</code></td>
<td>xxl \u56FE\u6807</td>
</tr>
<tr>
<td><code>&#64;h1-font-size</code></td>
<td><code>32px</code></td>
<td>h1\u5B57\u53F7</td>
</tr>
<tr>
<td><code>&#64;h2-font-size</code></td>
<td><code>24px</code></td>
<td>h2\u5B57\u53F7</td>
</tr>
<tr>
<td><code>&#64;h3-font-size</code></td>
<td><code>20px</code></td>
<td>h3\u5B57\u53F7</td>
</tr>
<tr>
<td><code>&#64;h4-font-size</code></td>
<td><code>16px</code></td>
<td>h4\u5B57\u53F7</td>
</tr>
<tr>
<td><code>&#64;h5-font-size</code></td>
<td><code>14px</code></td>
<td>h5\u5B57\u53F7</td>
</tr>
<tr>
<td><code>&#64;h6-font-size</code></td>
<td><code>12px</code></td>
<td>h6\u5B57\u53F7</td>
</tr>
<tr>
<td><code>&#64;enable-all-colors</code></td>
<td><code>false</code></td>
<td>\u5F00\u542F\u80CC\u666F\u3001\u6587\u672C\u989C\u8272<br>\u4F8B\u5982\uFF1A<code>.bg-teal</code>\u3001<code>.text-teal</code><br>\u6709\u5173\u989C\u8272\u503C\u89C1\u6837\u5F0F\u89C4\u5219\u7AE0\u8282</td>
</tr>
<tr>
<td><code>&#64;modal-sm</code></td>
<td><code>300px</code></td>
<td>\u5C0F\u53F7\u5BF9\u8BDD\u6846</td>
</tr>
<tr>
<td><code>&#64;modal-md</code></td>
<td><code>500px</code></td>
<td>\u4E2D\u53F7\u5BF9\u8BDD\u6846</td>
</tr>
<tr>
<td><code>&#64;modal-lg</code></td>
<td><code>900px</code></td>
<td>\u5927\u53F7\u5BF9\u8BDD\u6846</td>
</tr>
<tr>
<td><code>&#64;modal-xl</code></td>
<td><code>1200px</code></td>
<td>\u8D85\u5927\u53F7\u5BF9\u8BDD\u6846</td>
</tr>
<tr>
<td><code>&#64;drawer-sm</code></td>
<td><code>300px</code></td>
<td>\u5C0F\u53F7\u62BD\u5C49</td>
</tr>
<tr>
<td><code>&#64;drawer-md</code></td>
<td><code>500px</code></td>
<td>\u4E2D\u53F7\u62BD\u5C49</td>
</tr>
<tr>
<td><code>&#64;drawer-lg</code></td>
<td><code>900px</code></td>
<td>\u5927\u53F7\u62BD\u5C49</td>
</tr>
<tr>
<td><code>&#64;drawer-xl</code></td>
<td><code>1200px</code></td>
<td>\u8D85\u5927\u53F7\u62BD\u5C49</td>
</tr>
<tr>
<td><code>&#64;drawer-sm-height</code></td>
<td><code>200px</code></td>
<td>\u5C0F\u53F7\u62BD\u5C49</td>
</tr>
<tr>
<td><code>&#64;drawer-md-height</code></td>
<td><code>400px</code></td>
<td>\u4E2D\u53F7\u62BD\u5C49</td>
</tr>
<tr>
<td><code>&#64;drawer-lg-height</code></td>
<td><code>600px</code></td>
<td>\u5927\u53F7\u62BD\u5C49</td>
</tr>
<tr>
<td><code>&#64;drawer-xl-height</code></td>
<td><code>800px</code></td>
<td>\u8D85\u5927\u53F7\u62BD\u5C49</td>
</tr>
<tr>
<td><code>&#64;code-border-color</code></td>
<td><code>#eee</code></td>
<td><code>&lt;code&gt;</code> \u8FB9\u6846\u989C\u8272</td>
</tr>
<tr>
<td><code>&#64;code-bg</code></td>
<td><code>#f7f7f7</code></td>
<td><code>&lt;code&gt;</code> \u80CC\u666F\u989C\u8272</td>
</tr>
<tr>
<td><code>&#64;widths</code></td>
<td><code>xs &#64;layout-gutter * 10</code><br><code>sm &#64;layout-gutter * 20</code><br><code>md &#64;layout-gutter * 30</code><br><code>lg &#64;layout-gutter * 40</code><br><code>xl &#64;layout-gutter * 50</code><br><code>xxl &#64;layout-gutter * 50</code></td>
<td>\u5BBD\u5EA6</td>
</tr>
<tr>
<td><code>&#64;border-radius-md</code></td>
<td><code>4px</code></td>
<td>\u4E2D\u53F7\u8FB9\u6846\u5706\u89D2</td>
</tr>
<tr>
<td><code>&#64;border-radius-lg</code></td>
<td><code>6px</code></td>
<td>\u5927\u53F7\u8FB9\u6846\u5706\u89D2</td>
</tr>
<tr>
<td><code>&#64;masonry-column-gap</code></td>
<td><code>&#64;layout-gutter * 2</code></td>
<td>CSS\u7011\u5E03\u6D41\u5217\u4E0E\u5217\u7684\u95F4\u8DDD</td>
</tr>
<tr>
<td><code>&#64;scrollbar-enabled</code></td>
<td><code>true</code></td>
<td>\u542F\u7528\u7F8E\u5316\u6EDA\u52A8\u6761</td>
</tr>
<tr>
<td><code>&#64;scrollbar-width</code></td>
<td><code>6px</code></td>
<td>\u7F8E\u5316\u6EDA\u52A8\u6761\u5BBD\u5EA6</td>
</tr>
<tr>
<td><code>&#64;scrollbar-height</code></td>
<td><code>6px</code></td>
<td>\u7F8E\u5316\u6EDA\u52A8\u6761\u9AD8\u5EA6</td>
</tr>
<tr>
<td><code>&#64;scrollbar-track-color</code></td>
<td><code>rgba(0, 0, 0, 0.3)</code></td>
<td>\u7F8E\u5316\u6EDA\u52A8\u6761\u7684\u8F68\u9053\u989C\u8272</td>
</tr>
<tr>
<td><code>&#64;scrollbar-thumb-color</code></td>
<td><code>transparent</code></td>
<td>\u7F8E\u5316\u6EDA\u52A8\u6761\u5C0F\u65B9\u5757\u989C\u8272</td>
</tr>
<tr>
<td><code>&#64;scrollbar-table-enabled</code></td>
<td><code>false</code></td>
<td>\u542F\u7528\u7F8E\u5316\u8868\u683C\u6EDA\u52A8\u6761</td>
</tr>
<tr>
<td><code>&#64;rtl-enabled</code></td>
<td><code>false</code></td>
<td>\u662F\u5426\u652F\u6301 RTL</td>
</tr>
<tr>
<td><code>&#64;enabled-util-align</code></td>
<td><code>true</code></td>
<td>\u662F\u5426\u542F\u7528\u5DE5\u5177\u7C7B align</td>
</tr>
<tr>
<td><code>&#64;enabled-util-border</code></td>
<td><code>true</code></td>
<td>\u662F\u5426\u542F\u7528\u5DE5\u5177\u7C7B border</td>
</tr>
<tr>
<td><code>&#64;enabled-util-code</code></td>
<td><code>true</code></td>
<td>\u662F\u5426\u542F\u7528\u5DE5\u5177\u7C7B code</td>
</tr>
<tr>
<td><code>&#64;enabled-util-color</code></td>
<td><code>true</code></td>
<td>\u662F\u5426\u542F\u7528\u5DE5\u5177\u7C7B color</td>
</tr>
<tr>
<td><code>&#64;enabled-util-display</code></td>
<td><code>true</code></td>
<td>\u662F\u5426\u542F\u7528\u5DE5\u5177\u7C7B display</td>
</tr>
<tr>
<td><code>&#64;enabled-util-float</code></td>
<td><code>true</code></td>
<td>\u662F\u5426\u542F\u7528\u5DE5\u5177\u7C7B float</td>
</tr>
<tr>
<td><code>&#64;enabled-util-icon</code></td>
<td><code>true</code></td>
<td>\u662F\u5426\u542F\u7528\u5DE5\u5177\u7C7B icon</td>
</tr>
<tr>
<td><code>&#64;enabled-util-img</code></td>
<td><code>true</code></td>
<td>\u662F\u5426\u542F\u7528\u5DE5\u5177\u7C7B img</td>
</tr>
<tr>
<td><code>&#64;enabled-util-position</code></td>
<td><code>true</code></td>
<td>\u662F\u5426\u542F\u7528\u5DE5\u5177\u7C7B position</td>
</tr>
<tr>
<td><code>&#64;enabled-util-overflow</code></td>
<td><code>true</code></td>
<td>\u662F\u5426\u542F\u7528\u5DE5\u5177\u7C7B overflow</td>
</tr>
<tr>
<td><code>&#64;enabled-util-responsive</code></td>
<td><code>true</code></td>
<td>\u662F\u5426\u542F\u7528\u5DE5\u5177\u7C7B responsive</td>
</tr>
<tr>
<td><code>&#64;enabled-util-spacing</code></td>
<td><code>true</code></td>
<td>\u662F\u5426\u542F\u7528\u5DE5\u5177\u7C7B spacing</td>
</tr>
<tr>
<td><code>&#64;enabled-util-text</code></td>
<td><code>true</code></td>
<td>\u662F\u5426\u542F\u7528\u5DE5\u5177\u7C7B text</td>
</tr>
<tr>
<td><code>&#64;enabled-util-width</code></td>
<td><code>true</code></td>
<td>\u662F\u5426\u542F\u7528\u5DE5\u5177\u7C7B width</td>
</tr>
<tr>
<td><code>&#64;enabled-util-scrollbar</code></td>
<td><code>true</code></td>
<td>\u662F\u5426\u542F\u7528\u5DE5\u5177\u7C7B scrollbar</td>
</tr>
<tr>
<td><code>&#64;enabled-util-other</code></td>
<td><code>true</code></td>
<td>\u662F\u5426\u542F\u7528\u5DE5\u5177\u7C7B other</td>
</tr>
</tbody></table>
<h2 id="ng\u8865\u4E01"><a class="lake-link"><i data-anchor="ng\u8865\u4E01"></i></a>Ng\u8865\u4E01</h2><h3 id="\u901A\u7528"><a class="lake-link"><i data-anchor="\u901A\u7528"></i></a>\u901A\u7528</h3><table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u529F\u80FD</th>
</tr>
</thead>
<tbody><tr>
<td><code>&#64;preserve-white-spaces-enabled</code></td>
<td><code>true</code></td>
<td>\u89E3\u51B3\u5F00\u542F <a href="https://angular.io/api/core/Component#preserveWhitespaces" target="_blank" rel="noopener">preserveWhitespaces</a> \u65F6\u6309\u94AE\u95F4\u53EF\u80FD\u4F1A\u51FA\u73B0\u65E0\u7F1D</td>
</tr>
<tr>
<td><code>&#64;preserve-sf-and-st-spaces</code></td>
<td><code>16px</code></td>
<td><code>sf</code> \u4E0E <code>st</code> \u95F4\u95F4\u8DDD</td>
</tr>
<tr>
<td><code>&#64;preserve-buttons-spaces</code></td>
<td>\u6309\u94AE\u95F4\u95F4\u8DDD\uFF08\u5305\u62EC\uFF1Abutton\u3001button-group\u3001popconfirm\uFF09</td>
<td></td>
</tr>
<tr>
<td><code>&#64;router-animation-enabled</code></td>
<td><code>false</code></td>
<td>\u662F\u5426\u542F\u7528\u8DEF\u7531\u5207\u6362\u52A8\u753B</td>
</tr>
<tr>
<td><code>&#64;router-animation-duration</code></td>
<td><code>antFadeIn</code></td>
<td>\u8DEF\u7531\u5207\u6362\u52A8\u753B</td>
</tr>
<tr>
<td><code>&#64;router-animation-duration</code></td>
<td><code>1s</code></td>
<td>\u8DEF\u7531\u5207\u6362\u52A8\u753B\u65F6\u957F</td>
</tr>
</tbody></table>
<h2 id="zorro\u7EC4\u4EF6\u8865\u4E01"><a class="lake-link"><i data-anchor="zorro\u7EC4\u4EF6\u8865\u4E01"></i></a>Zorro\u7EC4\u4EF6\u8865\u4E01</h2><h3 id="\u901A\u7528"><a class="lake-link"><i data-anchor="\u901A\u7528"></i></a>\u901A\u7528</h3><table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u529F\u80FD</th>
</tr>
</thead>
<tbody><tr>
<td><code>&#64;forced-turn-off-nz-modal-animation-enabled</code></td>
<td><code>false</code></td>
<td>\u5F3A\u5236\u5173\u95ED <code>nz-modal</code> \u52A8\u753B\u6548\u679C</td>
</tr>
</tbody></table>
<h3 id="\u8868\u5355"><a class="lake-link"><i data-anchor="\u8868\u5355"></i></a>\u8868\u5355</h3><table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u529F\u80FD</th>
</tr>
</thead>
<tbody><tr>
<td><code>&#64;form-state-visual-feedback-enabled</code></td>
<td><code>false</code></td>
<td>\u5F00\u542F\u8868\u5355\u5143\u7D20\u7684\u89C6\u89C9\u53CD\u9988</td>
</tr>
<tr>
<td><code>&#64;search-form-bg</code></td>
<td><code>#fbfbfb</code></td>
<td>\u5217\u8868\u9875\u7B80\u6613\u641C\u7D22\u8868\u5355\u80CC\u666F\u8272</td>
</tr>
<tr>
<td><code>&#64;search-form-radius</code></td>
<td><code>4px</code></td>
<td>\u5217\u8868\u9875\u7B80\u6613\u641C\u7D22\u8868\u5355\u5706\u89D2</td>
</tr>
</tbody></table>
<h3 id="\u8868\u683C"><a class="lake-link"><i data-anchor="\u8868\u683C"></i></a>\u8868\u683C</h3><p>\u6307 <code>nz-table</code>\u3002</p>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u529F\u80FD</th>
</tr>
</thead>
<tbody><tr>
<td><code>&#64;nz-table-img-radius</code></td>
<td><code>4px</code></td>
<td>\u8868\u683C\u4E2D\u7684\u56FE\u7247\u5706\u89D2</td>
</tr>
<tr>
<td><code>&#64;nz-table-img-margin-right</code></td>
<td><code>4px</code></td>
<td>\u8868\u683C\u4E2D\u7684\u56FE\u7247\u53F3\u5916\u8FB9\u8DDD</td>
</tr>
<tr>
<td><code>&#64;nz-table-img-max-width</code></td>
<td><code>32px</code></td>
<td>\u8868\u683C\u4E2D\u7684\u56FE\u7247\u6700\u5927\u5BBD\u5EA6</td>
</tr>
<tr>
<td><code>&#64;nz-table-img-max-height</code></td>
<td><code>32px</code></td>
<td>\u8868\u683C\u4E2D\u7684\u56FE\u7247\u6700\u5927\u9AD8\u5EA6</td>
</tr>
<tr>
<td><code>&#64;nz-table-even-background</code></td>
<td><code>none</code></td>
<td>\u5947\u5076\u80CC\u666F</td>
</tr>
<tr>
<td><code>&#64;nz-table-rep-max-width</code></td>
<td><code>&#64;mobile-max</code></td>
<td>\u5F53\u79FB\u52A8\u7AEF\u5C4F\u5E55\u65F6\u89E6\u53D1\u8868\u683C\u54CD\u5E94\u5F0F</td>
</tr>
<tr>
<td><code>&#64;nz-table-rep-header-background</code></td>
<td><code>&#64;border-color-split</code></td>
<td>\u8868\u683C\u54CD\u5E94\u5F0F\uFF1A\u6807\u9898\u80CC\u666F\u8272</td>
</tr>
<tr>
<td><code>&#64;nz-table-rep-even-background</code></td>
<td><code>#f9f9f9</code></td>
<td>\u8868\u683C\u54CD\u5E94\u5F0F\uFF1A\u5076\u6570\u884C\u80CC\u666F\u8272</td>
</tr>
<tr>
<td><code>&#64;nz-table-rep-padding-vertical</code></td>
<td><code>8px</code></td>
<td>\u8868\u683C\u54CD\u5E94\u5F0F\uFF1A\u5355\u5143\u683C\u5782\u76F4\u95F4\u8DDD</td>
</tr>
<tr>
<td><code>&#64;nz-table-rep-padding-horizontal</code></td>
<td><code>8px</code></td>
<td>\u8868\u683C\u54CD\u5E94\u5F0F\uFF1A\u5355\u5143\u683C\u6C34\u5E73\u95F4\u8DDD</td>
</tr>
<tr>
<td><code>&#64;nz-table-rep-column-name-width</code></td>
<td><code>100px</code></td>
<td>\u8868\u683C\u54CD\u5E94\u5F0F\uFF1A\u5217\u540D\u6700\u5927\u5BBD\u5EA6</td>
</tr>
<tr>
<td><code>&#64;nz-table-rep-column-name-text-align</code></td>
<td><code>right</code></td>
<td>\u8868\u683C\u54CD\u5E94\u5F0F\uFF1A\u5217\u540D\u6587\u672C\u5BF9\u9F50\u65B9\u5F0F</td>
</tr>
<tr>
<td><code>&#64;nz-table-rep-column-name-padding-right</code></td>
<td><code>right</code></td>
<td>\u8868\u683C\u54CD\u5E94\u5F0F\uFF1A\u5217\u540D\u53F3\u95F4\u8DDD</td>
</tr>
<tr>
<td><code>&#64;nz-table-rep-column-name-color</code></td>
<td><code>rgba(0, 0, 0, 0.5)</code></td>
<td>\u8868\u683C\u54CD\u5E94\u5F0F\uFF1A\u5217\u540D\u989C\u8272</td>
</tr>
</tbody></table>
<h2 id="\u5C0F\u90E8\u4EF6"><a class="lake-link"><i data-anchor="\u5C0F\u90E8\u4EF6"></i></a>\u5C0F\u90E8\u4EF6</h2><table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u529F\u80FD</th>
</tr>
</thead>
<tbody><tr>
<td><code>&#64;hafl-enabled</code></td>
<td><code>true</code></td>
<td>\u534A\u56FE</td>
</tr>
<tr>
<td><code>&#64;abs-enabled</code></td>
<td><code>true</code></td>
<td>\u4E2D\u5FC3\u5143\u7D20</td>
</tr>
<tr>
<td><code>&#64;masonry-enabled</code></td>
<td><code>true</code></td>
<td>CSS\u7011\u5E03\u6D41\u5217</td>
</tr>
<tr>
<td><code>&#64;setting-drawer-enabled</code></td>
<td><code>true</code></td>
<td>\u4E3B\u9898\u8BBE\u7F6E</td>
</tr>
<tr>
<td><code>&#64;search__form-enabled</code></td>
<td><code>true</code></td>
<td>Pro\u641C\u7D22\u6846\uFF0C<a href="https://ng-alain.surge.sh/" target="_blank" rel="noopener">DEMO</a></td>
</tr>
</tbody></table>
`,api:``,toc:[{id:`公共类`,title:`公共类`},{id:`ng补丁`,title:`Ng补丁`,children:[{id:`通用`,title:`通用`}]},{id:`zorro组件补丁`,title:`Zorro组件补丁`,children:[{id:`通用`,title:`通用`},{id:`表单`,title:`表单`},{id:`表格`,title:`表格`}]},{id:`小部件`,title:`小部件`}],raw:"---\ntype: Theme\norder: 1\ntitle: 全局参数\n---\n\n## 公共类\n\n| 名称 | 默认值 | 功能 |\n| --- | --- | --- |\n| `@layout-gutter` | `8px` | antd布局间距，不可改变 |\n| `@font-size-base` | `14px` | antd字号 |\n| `@primary-color` | 蓝色 | antd 主色 |\n| `@mobile-min` | `768px` | PC端 |\n| `@mobile-max` | `767px` | 移动端 |\n| `@text-xs` | `@font-size-base - 2` | xs 文本大小 |\n| `@text-sm` | `@font-size-base + 0` | sm 文本大小 |\n| `@text-md` | `@font-size-base + 2` | md 文本大小 |\n| `@text-lg` | `@font-size-base + 4` | lg 文本大小 |\n| `@text-xl` | `@font-size-base + 8` | xl 文本大小 |\n| `@text-xxl` | `@font-size-base + 12` | xxl 文本大小 |\n| `@icon-sm` | `@font-size-base * 2` | sm 图标 |\n| `@icon-md` | `@font-size-base * 4` | md 图标 |\n| `@icon-lg` | `@font-size-base * 6` | lg 图标 |\n| `@icon-xl` | `@font-size-base * 8` | xl 图标 |\n| `@icon-xxl` | `@font-size-base * 10` | xxl 图标 |\n| `@h1-font-size` | `32px` | h1字号 |\n| `@h2-font-size` | `24px` | h2字号 |\n| `@h3-font-size` | `20px` | h3字号 |\n| `@h4-font-size` | `16px` | h4字号 |\n| `@h5-font-size` | `14px` | h5字号 |\n| `@h6-font-size` | `12px` | h6字号 |\n| `@enable-all-colors` | `false` | 开启背景、文本颜色<br>例如：`.bg-teal`、`.text-teal`<br>有关颜色值见样式规则章节 |\n| `@modal-sm` | `300px` | 小号对话框 |\n| `@modal-md` | `500px` | 中号对话框 |\n| `@modal-lg` | `900px` | 大号对话框 |\n| `@modal-xl` | `1200px` | 超大号对话框 |\n| `@drawer-sm` | `300px` | 小号抽屉 |\n| `@drawer-md` | `500px` | 中号抽屉 |\n| `@drawer-lg` | `900px` | 大号抽屉 |\n| `@drawer-xl` | `1200px` | 超大号抽屉 |\n| `@drawer-sm-height` | `200px` | 小号抽屉 |\n| `@drawer-md-height` | `400px` | 中号抽屉 |\n| `@drawer-lg-height` | `600px` | 大号抽屉 |\n| `@drawer-xl-height` | `800px` | 超大号抽屉 |\n| `@code-border-color` | `#eee` | `<code>` 边框颜色 |\n| `@code-bg` | `#f7f7f7` | `<code>` 背景颜色 |\n| `@widths`  | `xs @layout-gutter * 10`<br>`sm @layout-gutter * 20`<br>`md @layout-gutter * 30`<br>`lg @layout-gutter * 40`<br>`xl @layout-gutter * 50`<br>`xxl @layout-gutter * 50` | 宽度 |\n| `@border-radius-md` | `4px` | 中号边框圆角 |\n| `@border-radius-lg` | `6px` | 大号边框圆角 |\n| `@masonry-column-gap` | `@layout-gutter * 2` | CSS瀑布流列与列的间距 |\n| `@scrollbar-enabled` | `true` | 启用美化滚动条 |\n| `@scrollbar-width` | `6px` | 美化滚动条宽度 |\n| `@scrollbar-height` | `6px` | 美化滚动条高度 |\n| `@scrollbar-track-color` | `rgba(0, 0, 0, 0.3)` | 美化滚动条的轨道颜色 |\n| `@scrollbar-thumb-color` | `transparent` | 美化滚动条小方块颜色 |\n| `@scrollbar-table-enabled` | `false` | 启用美化表格滚动条 |\n| `@rtl-enabled` | `false` | 是否支持 RTL |\n| `@enabled-util-align` | `true` | 是否启用工具类 align |\n| `@enabled-util-border` | `true` | 是否启用工具类 border |\n| `@enabled-util-code` | `true` | 是否启用工具类 code |\n| `@enabled-util-color` | `true` | 是否启用工具类 color |\n| `@enabled-util-display` | `true` | 是否启用工具类 display |\n| `@enabled-util-float` | `true` | 是否启用工具类 float |\n| `@enabled-util-icon` | `true` | 是否启用工具类 icon |\n| `@enabled-util-img` | `true` | 是否启用工具类 img |\n| `@enabled-util-position` | `true` | 是否启用工具类 position |\n| `@enabled-util-overflow` | `true` | 是否启用工具类 overflow |\n| `@enabled-util-responsive` | `true` | 是否启用工具类 responsive |\n| `@enabled-util-spacing` | `true` | 是否启用工具类 spacing |\n| `@enabled-util-text` | `true` | 是否启用工具类 text |\n| `@enabled-util-width` | `true` | 是否启用工具类 width |\n| `@enabled-util-scrollbar` | `true` | 是否启用工具类 scrollbar |\n| `@enabled-util-other` | `true` | 是否启用工具类 other |\n\n## Ng补丁\n\n### 通用\n\n| 名称 | 默认值 | 功能 |\n| --- | --- | --- |\n| `@preserve-white-spaces-enabled` | `true` | 解决开启 [preserveWhitespaces](https://angular.io/api/core/Component#preserveWhitespaces) 时按钮间可能会出现无缝  |\n| `@preserve-sf-and-st-spaces` | `16px` | `sf` 与 `st` 间间距 |\n| `@preserve-buttons-spaces` | 按钮间间距（包括：button、button-group、popconfirm） |\n| `@router-animation-enabled` | `false` | 是否启用路由切换动画 |\n| `@router-animation-duration` | `antFadeIn` | 路由切换动画 |\n| `@router-animation-duration` | `1s` | 路由切换动画时长 |\n\n## Zorro组件补丁\n\n### 通用\n\n| 名称 | 默认值 | 功能 |\n| --- | --- | --- |\n| `@forced-turn-off-nz-modal-animation-enabled` | `false` | 强制关闭 `nz-modal` 动画效果 |\n\n### 表单\n\n| 名称 | 默认值 | 功能 |\n| --- | --- | --- |\n| `@form-state-visual-feedback-enabled` | `false` | 开启表单元素的视觉反馈 |\n| `@search-form-bg` | `#fbfbfb` | 列表页简易搜索表单背景色 |\n| `@search-form-radius` | `4px` | 列表页简易搜索表单圆角 |\n\n### 表格\n\n指 `nz-table`。\n\n| 名称 | 默认值 | 功能 |\n| --- | --- | --- |\n| `@nz-table-img-radius` | `4px` | 表格中的图片圆角 |\n| `@nz-table-img-margin-right` | `4px` | 表格中的图片右外边距 |\n| `@nz-table-img-max-width` | `32px` | 表格中的图片最大宽度 |\n| `@nz-table-img-max-height` | `32px` | 表格中的图片最大高度 |\n| `@nz-table-even-background` | `none` | 奇偶背景 |\n| `@nz-table-rep-max-width` | `@mobile-max` | 当移动端屏幕时触发表格响应式 |\n| `@nz-table-rep-header-background` | `@border-color-split` | 表格响应式：标题背景色 |\n| `@nz-table-rep-even-background` | `#f9f9f9` | 表格响应式：偶数行背景色 |\n| `@nz-table-rep-padding-vertical` | `8px` | 表格响应式：单元格垂直间距 |\n| `@nz-table-rep-padding-horizontal` | `8px` | 表格响应式：单元格水平间距 |\n| `@nz-table-rep-column-name-width` | `100px` | 表格响应式：列名最大宽度 |\n| `@nz-table-rep-column-name-text-align` | `right` | 表格响应式：列名文本对齐方式 |\n| `@nz-table-rep-column-name-padding-right` | `right` | 表格响应式：列名右间距 |\n| `@nz-table-rep-column-name-color` | `rgba(0, 0, 0, 0.5)` | 表格响应式：列名颜色 |\n\n## 小部件\n\n| 名称 | 默认值 | 功能 |\n| --- | --- | --- |\n| `@hafl-enabled` | `true` | 半图 |\n| `@abs-enabled` | `true` | 中心元素 |\n| `@masonry-enabled` | `true` | CSS瀑布流列 |\n| `@setting-drawer-enabled` | `true` | 主题设置 |\n| `@search__form-enabled` | `true` | Pro搜索框，[DEMO](https://ng-alain.surge.sh/) |"}}};codes=[];static ɵfac=function(e){return new(e||n)};static ɵcmp=_e({type:n,selectors:[[`theme-global`]],hostAttrs:[1,`d-block`],decls:1,vars:2,consts:[[3,`codes`,`item`]],template:function(e,t){e&1&&lt(0,`app-docs`,0),e&2&&re(`codes`,t.codes)(`item`,t.item)},dependencies:[rt],encapsulation:2})};var O=class n{item={name:`icon`,langs:[`zh-CN`],content:{"zh-CN":{meta:{order:20,title:`Icon`,description:`自 ng-zorro-antd 1.7.x 以后图标发生破坏性变更，虽然带了诸多优势，同时也带来几个劣势：若采用动态加载会产生额外的HTTP请求若静态加载需要逐一注册图标st 组件的 format 参数无法直接指定图标ng-alain 默认使用静态加载的做法，毕竟后端使用图标相对于比较有限，即使将 ...`,group:`Documents`,path:`packages/theme/docs/icon.md`,url:`/theme/icon/zh`},text:`<p>\u81EA ng-zorro-antd 1.7.x \u4EE5\u540E\u56FE\u6807\u53D1\u751F\u7834\u574F\u6027\u53D8\u66F4\uFF0C\u867D\u7136\u5E26\u4E86\u8BF8\u591A<a href="https://ng.ant.design/components/icon/zh#svg-%E5%9B%BE%E6%A0%87" target="_blank" rel="noopener">\u4F18\u52BF</a>\uFF0C\u540C\u65F6\u4E5F\u5E26\u6765\u51E0\u4E2A\u52A3\u52BF\uFF1A</p>
<ul>
<li>\u82E5\u91C7\u7528\u52A8\u6001\u52A0\u8F7D\u4F1A\u4EA7\u751F\u989D\u5916\u7684HTTP\u8BF7\u6C42</li>
<li>\u82E5\u9759\u6001\u52A0\u8F7D\u9700\u8981\u9010\u4E00\u6CE8\u518C\u56FE\u6807</li>
<li><code>st</code> \u7EC4\u4EF6\u7684 <code>format</code> \u53C2\u6570\u65E0\u6CD5\u76F4\u63A5\u6307\u5B9A\u56FE\u6807</li>
</ul>
<p>ng-alain \u9ED8\u8BA4\u4F7F\u7528\u9759\u6001\u52A0\u8F7D\u7684\u505A\u6CD5\uFF0C\u6BD5\u7ADF\u540E\u7AEF\u4F7F\u7528\u56FE\u6807\u76F8\u5BF9\u4E8E\u6BD4\u8F83\u6709\u9650\uFF0C\u5373\u4F7F\u5C06 svg \u90FD\u6253\u5305\u8FDB\u811A\u672C\u76F8\u6BD4\u8F83\u4E4B\u524D\u6574\u4E2A styles \u4F53\u79EF\u4E0A\u662F\u6240\u6709\u51CF\u5C11\uFF0C\u4F46\u6BD4\u8F83\u5E76\u4E0D\u591A\u3002</p>
<p>\u800C\u9488\u5BF9\u4EE5\u4E0A\u95EE\u9898\uFF0Cng-alain \u63D0\u4F9B\u51E0\u79CD\u65B9\u6848\u3002</p>
<h2 id="\u4F7F\u7528icon\u63D2\u4EF6\uFF08\u63A8\u8350\uFF09"><a class="lake-link"><i data-anchor="\u4F7F\u7528icon\u63D2\u4EF6\uFF08\u63A8\u8350\uFF09"></i></a>\u4F7F\u7528icon\u63D2\u4EF6\uFF08\u63A8\u8350\uFF09</h2><p><strong>\u5C3D\u53EF\u80FD</strong>\u4ECE\u9879\u76EE\u4E2D\u5206\u6790\u5E76\u751F\u6210\u9759\u6001 Icon\uFF0C\u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728 <code>src</code> \u76EE\u5F55\u4E0B\u751F\u6210\u4E24\u4E2A\u6587\u4EF6\uFF1A</p>
<ul>
<li><code>src/style-icons.ts</code> \u81EA\u5B9A\u4E49\u90E8\u5206\u65E0\u6CD5\u89E3\u6790\uFF08\u4F8B\u5982\uFF1A\u8FDC\u7A0B\u83DC\u5355\u56FE\u6807\uFF09</li>
<li><code>src/style-icons-auto.ts</code> \u547D\u4EE4\u81EA\u52A8\u751F\u6210\u6587\u4EF6</li>
</ul>
<blockquote>
<p>\u81EA\u52A8\u6392\u9664 <a href="https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/icon/nz-icon.service.ts#L6" target="_blank" rel="noopener">ng-zorro-antd</a> \u548C <a href="https://github.com/ng-alain/delon/blob/master/packages/theme/src/theme.module.ts#L33" target="_blank" rel="noopener">&#64;delon</a> \u5DF2\u7ECF\u52A0\u8F7D\u7684\u56FE\u6807\u3002</p>
</blockquote>
<pre><code class="language-bash">ng g ng-alain:plugin icon
</code></pre>
<p>\u540C\u65F6\uFF0C\u9700\u8981\u624B\u52A8\u5728 <code>startup.service.ts</code> \u4E2D\u5BFC\u5165\uFF1A</p>
<pre><code class="language-ts">import &#123; ICONS_AUTO &#125; from &#39;../../../style-icons-auto&#39;;
import &#123; ICONS &#125; from &#39;../../../style-icons&#39;;

&#64;Injectable()
export class StartupService &#123;
  constructor(iconSrv: NzIconService) &#123;
    iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
  &#125;
&#125;
</code></pre>
<p><strong>\u6709\u6548\u8BED\u6CD5</strong></p>
<pre><code class="language-html">&lt;i class=&quot;anticon anticon-user&quot;&gt;&lt;/i&gt;
&lt;i class=&quot;anticon anticon-question-circle-o&quot;&gt;&lt;/i&gt;
&lt;i class=&quot;anticon anticon-spin anticon-loading&quot;&gt;&lt;/i&gt;
&lt;nz-icon class=&quot;anticon anticon-user&quot;/&gt;
&lt;nz-icon nzType=&quot;align-&#123;&#123;type ? &#39;left&#39; : &#39;right&#39;&#125;&#125;&quot;/&gt;
&lt;nz-icon [type]=&quot;type ? &#39;menu-fold&#39; : &#39;menu-unfold&#39;&quot; [theme]=&quot;theme ? &#39;outline&#39; : &#39;fill&#39;&quot;/&gt;
&lt;nz-icon [type]=&quot;type ? &#39;fullscreen&#39; : &#39;fullscreen-exit&#39;&quot;/&gt;
&lt;nz-icon nzType=&quot;&#123;&#123; type ? &#39;arrow-left&#39; : &#39;arrow-right&#39; &#125;&#125;&quot;/&gt;
&lt;nz-icon nzType=&quot;filter&quot; theme=&quot;outline&quot;/&gt;
</code></pre>
<h2 id="\u52A8\u6001\u52A0\u8F7D"><a class="lake-link"><i data-anchor="\u52A8\u6001\u52A0\u8F7D"></i></a>\u52A8\u6001\u52A0\u8F7D</h2><p><a href="https://ng.ant.design/components/icon/zh#%E9%9D%99%E6%80%81%E5%8A%A0%E8%BD%BD%E4%B8%8E%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BD" target="_blank" rel="noopener">\u52A8\u6001\u52A0\u8F7D</a>\uFF0C\u8FD9\u662F\u4E3A\u4E86\u51CF\u5C11\u5305\u4F53\u79EF\u800C\u63D0\u4F9B\u7684\u65B9\u5F0F\u3002\u5F53 NG-ZORRO \u68C0\u6D4B\u7528\u6237\u60F3\u8981\u6E32\u67D3\u7684\u56FE\u6807\u8FD8\u6CA1\u6709\u9759\u6001\u5F15\u5165\u65F6\uFF0C\u4F1A\u53D1\u8D77 HTTP \u8BF7\u6C42\u52A8\u6001\u5F15\u5165\u3002\u4F60\u53EA\u9700\u8981\u914D\u7F6E <code>angular.json</code> \u6587\u4EF6\uFF1A</p>
<pre><code class="language-json">&#123;
  &quot;assets&quot;: [
    &#123;
      &quot;glob&quot;: &quot;**/*&quot;,
      &quot;input&quot;: &quot;./node_modules/&#64;ant-design/icons-angular/src/inline-svg/&quot;,
      &quot;output&quot;: &quot;/assets/&quot;
    &#125;
  ]
&#125;
</code></pre>
<h2 id="\u52A8\u6001\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u52A8\u6001\u4F7F\u7528"></i></a>\u52A8\u6001\u4F7F\u7528</h2><p>\u4E0D\u7BA1\u662F\u9759\u6001\u6216\u52A8\u6001\u52A0\u8F7D\uFF0C\u4F9D\u7136\u65E0\u6CD5\u89E3\u51B3\u539F\u59CB\u65B9\u6CD5 <code>class=&quot;anticon anticon-&quot;</code> \u7684\u4FBF\u5229\u6027\uFF0C\u6BD5\u7ADF\u5B57\u7B26\u4E32\u5C31\u662F\u5B57\u7B26\u4E32\u5E76\u975E Angular \u6A21\u677F\u65E0\u6CD5\u88AB\u89E3\u6790\uFF0C\u800C\u9488\u5BF9\u8FD9\u4E2A\u95EE\u9898\uFF0C\u63D0\u4F9B\u4E24\u79CD\u89E3\u51B3\u529E\u6CD5\u3002</p>
<h3 id="\u7C7B\u6837\u5F0F"><a class="lake-link"><i data-anchor="\u7C7B\u6837\u5F0F"></i></a>\u7C7B\u6837\u5F0F</h3><p>\u4E8B\u5B9E\u4E0A\u6240\u6709 Antd \u56FE\u6807\u90FD\u53EF\u4EE5\u5728 <a href="http://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&amp;cid=9402" target="_blank" rel="noopener">iconfont</a> \u627E\u5F97\u5230\uFF0C\u53EF\u4EE5\u70B9\u9009\u81EA\u5DF1\u9700\u8981\u7684\u56FE\u6807\u5E76\u751F\u6210\u76F8\u5E94\u7684 css \u6587\u4EF6\u6216 cdn\uFF0C\u6700\u540E\u5728\u9879\u76EE\u4E2D\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 <code>1.7.0</code> \u4E4B\u524D\u7684\u5199\u6CD5\u3002</p>
<blockquote>
<p><strong>\u6CE8\u610F\uFF1A</strong> \u5728\u9879\u76EE\u7F16\u8F91\u91CC\u52A0\u4E0A <code>anticon anticon-</code> \u524D\u7F00\u624D\u80FD\u540C\u4E4B\u524D\u7684\u7C7B\u540D\u4FDD\u6301\u4E00\u81F4\u3002</p>
</blockquote>
<pre><code class="language-json">// angular.json
&quot;styles&quot;: [
  &quot;src/iconfont.css&quot;
],
</code></pre>
<p>\u5982\u679C\u975Ecdn\u8FD8\u9700\u8981\u5C06\u76F8\u5E94\u7684 icon \u56FE\u6807\u6587\u4EF6\u590D\u5236\u5230 <code>assets</code> \u76EE\u5F55\u4E0B\uFF0C\u540C\u65F6\u4FEE\u6539 <code>iconfont.css</code> \u4E2D <code>&#64;font-face</code> \u5BF9\u5E94\u7684 url \u8DEF\u5F84\u3002</p>
<h3 id="angular/elements"><a class="lake-link"><i data-anchor="angular/elements"></i></a>&#64;angular/elements</h3><p>\u52A8\u6001\u52A0\u8F7D\u7684\u53E6\u4E00\u79CD\u65B9\u5F0F\u662F\u4F7F\u7528 &#64;angular/elements\uFF0C\u53EA\u9700\u8981 <code>nz-icon</code> \u6307\u4EE4\u91CD\u65B0\u5C01\u88C5\u6210\u7EC4\u4EF6\u3002</p>
<pre><code class="language-ts">import &#123; Component, Input &#125; from &#39;&#64;angular/core&#39;;

&#64;Component(&#123;
  selector: &#39;nz-icon&#39;,
  template: \`&lt;nz-icon [type]=&quot;type&quot; /&gt;\`,
&#125;)
export class IconComponent &#123;
  &#64;Input()
  type: string;
&#125;
</code></pre>
<p>\u540C\u65F6\u5728\u6839\u6A21\u5757\u91CC\u6CE8\u518C\u5B83\u3002</p>
<pre><code class="language-ts">import &#123; createCustomElement &#125; from &#39;&#64;angular/elements&#39;;

&#64;NgModule(&#123;
  declarations: [],
&#125;)
export class AppModule &#123;
  constructor(injector: Injector) &#123;
    customElements.define(&#39;nz-icon&#39;, createCustomElement(IconComponent, &#123; injector &#125;));
  &#125;
&#125;
</code></pre>
<p>\u6700\u540E\u3002</p>
<pre><code class="language-ts">&#64;Component(&#123;
  selector: &#39;app-demo&#39;,
  template: \`
  &lt;div [innerHTML]=&quot;value&quot;&gt;&lt;/div&gt;
  \`,
&#125;)
export class DemoComponent &#123;

  constructor(private san: DomSanitizer) &#123; &#125;

  value = this.san.bypassSecurityTrustHtml(
    \`icon: &lt;nz-icon nzType=&quot;bell&quot;&gt;&lt;/nz-icon&gt;\`,
  );
&#125;
</code></pre>
`,api:``,toc:[{id:`使用icon插件（推荐）`,title:`使用icon插件（推荐）`},{id:`动态加载`,title:`动态加载`},{id:`动态使用`,title:`动态使用`,children:[{id:`类样式`,title:`类样式`},{id:`angular/elements`,title:`@angular/elements`}]}],raw:`---
type: Documents
order: 20
title: Icon
---

\u81EA ng-zorro-antd 1.7.x \u4EE5\u540E\u56FE\u6807\u53D1\u751F\u7834\u574F\u6027\u53D8\u66F4\uFF0C\u867D\u7136\u5E26\u4E86\u8BF8\u591A[\u4F18\u52BF](https://ng.ant.design/components/icon/zh#svg-%E5%9B%BE%E6%A0%87)\uFF0C\u540C\u65F6\u4E5F\u5E26\u6765\u51E0\u4E2A\u52A3\u52BF\uFF1A

- \u82E5\u91C7\u7528\u52A8\u6001\u52A0\u8F7D\u4F1A\u4EA7\u751F\u989D\u5916\u7684HTTP\u8BF7\u6C42
- \u82E5\u9759\u6001\u52A0\u8F7D\u9700\u8981\u9010\u4E00\u6CE8\u518C\u56FE\u6807
- \`st\` \u7EC4\u4EF6\u7684 \`format\` \u53C2\u6570\u65E0\u6CD5\u76F4\u63A5\u6307\u5B9A\u56FE\u6807

ng-alain \u9ED8\u8BA4\u4F7F\u7528\u9759\u6001\u52A0\u8F7D\u7684\u505A\u6CD5\uFF0C\u6BD5\u7ADF\u540E\u7AEF\u4F7F\u7528\u56FE\u6807\u76F8\u5BF9\u4E8E\u6BD4\u8F83\u6709\u9650\uFF0C\u5373\u4F7F\u5C06 svg \u90FD\u6253\u5305\u8FDB\u811A\u672C\u76F8\u6BD4\u8F83\u4E4B\u524D\u6574\u4E2A styles \u4F53\u79EF\u4E0A\u662F\u6240\u6709\u51CF\u5C11\uFF0C\u4F46\u6BD4\u8F83\u5E76\u4E0D\u591A\u3002

\u800C\u9488\u5BF9\u4EE5\u4E0A\u95EE\u9898\uFF0Cng-alain \u63D0\u4F9B\u51E0\u79CD\u65B9\u6848\u3002

## \u4F7F\u7528icon\u63D2\u4EF6\uFF08\u63A8\u8350\uFF09

**\u5C3D\u53EF\u80FD**\u4ECE\u9879\u76EE\u4E2D\u5206\u6790\u5E76\u751F\u6210\u9759\u6001 Icon\uFF0C\u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728 \`src\` \u76EE\u5F55\u4E0B\u751F\u6210\u4E24\u4E2A\u6587\u4EF6\uFF1A

- \`src/style-icons.ts\` \u81EA\u5B9A\u4E49\u90E8\u5206\u65E0\u6CD5\u89E3\u6790\uFF08\u4F8B\u5982\uFF1A\u8FDC\u7A0B\u83DC\u5355\u56FE\u6807\uFF09
- \`src/style-icons-auto.ts\` \u547D\u4EE4\u81EA\u52A8\u751F\u6210\u6587\u4EF6

> \u81EA\u52A8\u6392\u9664 [ng-zorro-antd](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/icon/nz-icon.service.ts#L6) \u548C [@delon](https://github.com/ng-alain/delon/blob/master/packages/theme/src/theme.module.ts#L33) \u5DF2\u7ECF\u52A0\u8F7D\u7684\u56FE\u6807\u3002

\`\`\`bash
ng g ng-alain:plugin icon
\`\`\`

\u540C\u65F6\uFF0C\u9700\u8981\u624B\u52A8\u5728 \`startup.service.ts\` \u4E2D\u5BFC\u5165\uFF1A

\`\`\`ts
import { ICONS_AUTO } from '../../../style-icons-auto';
import { ICONS } from '../../../style-icons';

@Injectable()
export class StartupService {
  constructor(iconSrv: NzIconService) {
    iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
  }
}
\`\`\`

**\u6709\u6548\u8BED\u6CD5**

\`\`\`html
<i class="anticon anticon-user"></i>
<i class="anticon anticon-question-circle-o"></i>
<i class="anticon anticon-spin anticon-loading"></i>
<nz-icon class="anticon anticon-user"/>
<nz-icon nzType="align-{{type ? 'left' : 'right'}}"/>
<nz-icon [type]="type ? 'menu-fold' : 'menu-unfold'" [theme]="theme ? 'outline' : 'fill'"/>
<nz-icon [type]="type ? 'fullscreen' : 'fullscreen-exit'"/>
<nz-icon nzType="{{ type ? 'arrow-left' : 'arrow-right' }}"/>
<nz-icon nzType="filter" theme="outline"/>
\`\`\`

## \u52A8\u6001\u52A0\u8F7D

[\u52A8\u6001\u52A0\u8F7D](https://ng.ant.design/components/icon/zh#%E9%9D%99%E6%80%81%E5%8A%A0%E8%BD%BD%E4%B8%8E%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BD)\uFF0C\u8FD9\u662F\u4E3A\u4E86\u51CF\u5C11\u5305\u4F53\u79EF\u800C\u63D0\u4F9B\u7684\u65B9\u5F0F\u3002\u5F53 NG-ZORRO \u68C0\u6D4B\u7528\u6237\u60F3\u8981\u6E32\u67D3\u7684\u56FE\u6807\u8FD8\u6CA1\u6709\u9759\u6001\u5F15\u5165\u65F6\uFF0C\u4F1A\u53D1\u8D77 HTTP \u8BF7\u6C42\u52A8\u6001\u5F15\u5165\u3002\u4F60\u53EA\u9700\u8981\u914D\u7F6E \`angular.json\` \u6587\u4EF6\uFF1A

\`\`\`json
{
  "assets": [
    {
      "glob": "**/*",
      "input": "./node_modules/@ant-design/icons-angular/src/inline-svg/",
      "output": "/assets/"
    }
  ]
}
\`\`\`

## \u52A8\u6001\u4F7F\u7528

\u4E0D\u7BA1\u662F\u9759\u6001\u6216\u52A8\u6001\u52A0\u8F7D\uFF0C\u4F9D\u7136\u65E0\u6CD5\u89E3\u51B3\u539F\u59CB\u65B9\u6CD5 \`class="anticon anticon-"\` \u7684\u4FBF\u5229\u6027\uFF0C\u6BD5\u7ADF\u5B57\u7B26\u4E32\u5C31\u662F\u5B57\u7B26\u4E32\u5E76\u975E Angular \u6A21\u677F\u65E0\u6CD5\u88AB\u89E3\u6790\uFF0C\u800C\u9488\u5BF9\u8FD9\u4E2A\u95EE\u9898\uFF0C\u63D0\u4F9B\u4E24\u79CD\u89E3\u51B3\u529E\u6CD5\u3002

### \u7C7B\u6837\u5F0F

\u4E8B\u5B9E\u4E0A\u6240\u6709 Antd \u56FE\u6807\u90FD\u53EF\u4EE5\u5728 [iconfont](http://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=9402) \u627E\u5F97\u5230\uFF0C\u53EF\u4EE5\u70B9\u9009\u81EA\u5DF1\u9700\u8981\u7684\u56FE\u6807\u5E76\u751F\u6210\u76F8\u5E94\u7684 css \u6587\u4EF6\u6216 cdn\uFF0C\u6700\u540E\u5728\u9879\u76EE\u4E2D\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 \`1.7.0\` \u4E4B\u524D\u7684\u5199\u6CD5\u3002

> **\u6CE8\u610F\uFF1A** \u5728\u9879\u76EE\u7F16\u8F91\u91CC\u52A0\u4E0A \`anticon anticon-\` \u524D\u7F00\u624D\u80FD\u540C\u4E4B\u524D\u7684\u7C7B\u540D\u4FDD\u6301\u4E00\u81F4\u3002

\`\`\`json
// angular.json
"styles": [
  "src/iconfont.css"
],
\`\`\`

\u5982\u679C\u975Ecdn\u8FD8\u9700\u8981\u5C06\u76F8\u5E94\u7684 icon \u56FE\u6807\u6587\u4EF6\u590D\u5236\u5230 \`assets\` \u76EE\u5F55\u4E0B\uFF0C\u540C\u65F6\u4FEE\u6539 \`iconfont.css\` \u4E2D \`@font-face\` \u5BF9\u5E94\u7684 url \u8DEF\u5F84\u3002

### @angular/elements

\u52A8\u6001\u52A0\u8F7D\u7684\u53E6\u4E00\u79CD\u65B9\u5F0F\u662F\u4F7F\u7528 @angular/elements\uFF0C\u53EA\u9700\u8981 \`nz-icon\` \u6307\u4EE4\u91CD\u65B0\u5C01\u88C5\u6210\u7EC4\u4EF6\u3002

\`\`\`ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'nz-icon',
  template: \`<nz-icon [type]="type" />\`,
})
export class IconComponent {
  @Input()
  type: string;
}
\`\`\`

\u540C\u65F6\u5728\u6839\u6A21\u5757\u91CC\u6CE8\u518C\u5B83\u3002

\`\`\`ts
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [],
})
export class AppModule {
  constructor(injector: Injector) {
    customElements.define('nz-icon', createCustomElement(IconComponent, { injector }));
  }
}
\`\`\`

\u6700\u540E\u3002

\`\`\`ts
@Component({
  selector: 'app-demo',
  template: \`
  <div [innerHTML]="value"></div>
  \`,
})
export class DemoComponent {

  constructor(private san: DomSanitizer) { }

  value = this.san.bypassSecurityTrustHtml(
    \`icon: <nz-icon nzType="bell"></nz-icon>\`,
  );
}
\`\`\``}}};codes=[];static ɵfac=function(e){return new(e||n)};static ɵcmp=_e({type:n,selectors:[[`theme-icon`]],hostAttrs:[1,`d-block`],decls:1,vars:2,consts:[[3,`codes`,`item`]],template:function(e,t){e&1&&lt(0,`app-docs`,0),e&2&&re(`codes`,t.codes)(`item`,t.item)},dependencies:[rt],encapsulation:2})};var L=class n{item={name:`locale`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{order:2,title:`Internationalization`,description:`Provide a uniform localization support for @delon/* class library built-in text of components.Provides the token of DELON_LOCALE for configuring antd ...`,group:`Documents`,path:`packages/theme/docs/locale.en-US.md`,url:`/theme/locale/en`},text:`<p>Provide a uniform localization support for <code>&#64;delon/*</code> class library built-in text of components.</p>
<h2 id="usage"><a class="lake-link"><i data-anchor="usage"></i></a>Usage</h2><h3 id="providers"><a class="lake-link"><i data-anchor="providers"></i></a>Providers</h3><p>Provides the token of <code>DELON_LOCALE</code> for configuring antd locale text globally.</p>
<pre><code class="language-ts">import &#123; DELON_LOCALE, en_US &#125; from &#39;&#64;delon/theme&#39;;
&#64;NgModule(&#123;
  ...
  providers   : [ &#123; provide: DELON_LOCALE, useValue: en_US &#125; ]
&#125;)
export class AppModule &#123; &#125;
</code></pre>
<h3 id="service"><a class="lake-link"><i data-anchor="service"></i></a>Service</h3><p>Provides the service of <code>DelonLocaleService</code> to dynamic change the locale text.</p>
<pre><code class="language-ts">import &#123; en_US, DelonLocaleService &#125; from &#39;&#64;delon/theme&#39;;
...
constructor(private delonLocaleService: DelonLocaleService) &#123;
&#125;

switchLanguage() &#123;
  this.delonLocaleService.setLocale(en_US);
&#125;
</code></pre>
<p>Note: <code>en_US</code> is the package name, follow below.</p>
<h2 id="supported_languages"><a class="lake-link"><i data-anchor="supported_languages"></i></a>Supported languages</h2><table>
<thead>
<tr>
<th>Language</th>
<th>Filename</th>
</tr>
</thead>
<tbody><tr>
<td>English</td>
<td>en_US</td>
</tr>
<tr>
<td>Chinese (Simplified)</td>
<td>zh_CN</td>
</tr>
<tr>
<td>Chinese (Traditional)</td>
<td>zh_HK</td>
</tr>
<tr>
<td>Chinese (Traditional)</td>
<td>zh_TW</td>
</tr>
<tr>
<td>Turkish</td>
<td>tr_TR</td>
</tr>
<tr>
<td>Polish</td>
<td>pl_PL</td>
</tr>
<tr>
<td>Greek</td>
<td>el_GR</td>
</tr>
<tr>
<td>Korean</td>
<td>ko_KR</td>
</tr>
<tr>
<td>Croatian</td>
<td>hr_HR</td>
</tr>
<tr>
<td>Japanese</td>
<td>ja_JP</td>
</tr>
<tr>
<td>Slovenian</td>
<td>sl_SI</td>
</tr>
<tr>
<td>French</td>
<td>fr_FR</td>
</tr>
<tr>
<td>Spanish</td>
<td>es_ES</td>
</tr>
<tr>
<td>Italian</td>
<td>it_IT</td>
</tr>
<tr>
<td>Vietnamese</td>
<td>vi_VN</td>
</tr>
<tr>
<td>Arabic</td>
<td>ar_SA</td>
</tr>
<tr>
<td>Indonesian</td>
<td>id_ID</td>
</tr>
<tr>
<td>Khmer</td>
<td>km_KH</td>
</tr>
<tr>
<td>Malay</td>
<td>ms_MY</td>
</tr>
<tr>
<td>Thai</td>
<td>th_TH</td>
</tr>
</tbody></table>
<h2 id="add_a_new_language"><a class="lake-link"><i data-anchor="add_a_new_language"></i></a>Add a new language</h2><p>If you can&#39;t find your language, you are welcome to create a locale package based on <a href="https://github.com/ng-alain/delon/tree/master/packages/theme/src/locale/languages/en-US.ts" target="_blank" rel="noopener">en_US</a> (You can also refer to <a href="https://github.com/ng-alain/delon/pull/308" target="_blank" rel="noopener">#308</a> to contribute language package to us) and send us a pull request.</p>
`,api:``,toc:[{id:`usage`,title:`Usage`,children:[{id:`providers`,title:`Providers`},{id:`service`,title:`Service`}]},{id:`supported_languages`,title:`Supported languages`},{id:`add_a_new_language`,title:`Add a new language`}],raw:`---
order: 2
title: Internationalization
type: Documents
---

Provide a uniform localization support for \`@delon/*\` class library built-in text of components.

## Usage

### Providers

Provides the token of \`DELON_LOCALE\` for configuring antd locale text globally.

\`\`\`ts
import { DELON_LOCALE, en_US } from '@delon/theme';
@NgModule({
  ...
  providers   : [ { provide: DELON_LOCALE, useValue: en_US } ]
})
export class AppModule { }
\`\`\`

### Service

Provides the service of \`DelonLocaleService\` to dynamic change the locale text.

\`\`\`ts
import { en_US, DelonLocaleService } from '@delon/theme';
...
constructor(private delonLocaleService: DelonLocaleService) {
}

switchLanguage() {
  this.delonLocaleService.setLocale(en_US);
}
\`\`\`

Note: \`en_US\` is the package name, follow below.

## Supported languages

| Language | Filename |
|----------|----------|
| English | en_US    |
| Chinese (Simplified) | zh_CN    |
| Chinese (Traditional) | zh_HK |
| Chinese (Traditional) | zh_TW    |
| Turkish | tr_TR    |
| Polish | pl_PL    |
| Greek | el_GR    |
| Korean | ko_KR    |
| Croatian | hr_HR    |
| Japanese | ja_JP    |
| Slovenian | sl_SI    |
| French | fr_FR    |
| Spanish | es_ES    |
| Italian | it_IT    |
| Vietnamese | vi_VN    |
| Arabic | ar_SA    |
| Indonesian | id_ID    |
| Khmer | km_KH    |
| Malay | ms_MY    |
| Thai | th_TH    |

## Add a new language

If you can't find your language, you are welcome to create a locale package based on [en_US](https://github.com/ng-alain/delon/tree/master/packages/theme/src/locale/languages/en-US.ts) (You can also refer to [#308](https://github.com/ng-alain/delon/pull/308) to contribute language package to us) and send us a pull request.`},"zh-CN":{meta:{order:2,title:`国际化`,description:`为整个 @delon/* 类库内建文案提供统一的国际化支持。只需要在根模块重新对 DELON_LOCALE 注入目标语言即可全局生效。@delon 提供了一个服务 DelonLocaleService 用于动态修改国际化文案。注意：en_US 是语言包名称，以下表格也遵循同样的规则。如果你找不到你需...`,group:`Documents`,path:`packages/theme/docs/locale.zh-CN.md`,url:`/theme/locale/zh`},text:`<p>\u4E3A\u6574\u4E2A <code>&#64;delon/*</code> \u7C7B\u5E93\u5185\u5EFA\u6587\u6848\u63D0\u4F9B\u7EDF\u4E00\u7684\u56FD\u9645\u5316\u652F\u6301\u3002</p>
<h2 id="\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u4F7F\u7528"></i></a>\u4F7F\u7528</h2><h3 id="\u5168\u5C40\u914D\u7F6E"><a class="lake-link"><i data-anchor="\u5168\u5C40\u914D\u7F6E"></i></a>\u5168\u5C40\u914D\u7F6E</h3><p>\u53EA\u9700\u8981\u5728\u6839\u6A21\u5757\u91CD\u65B0\u5BF9 <code>DELON_LOCALE</code> \u6CE8\u5165\u76EE\u6807\u8BED\u8A00\u5373\u53EF\u5168\u5C40\u751F\u6548\u3002</p>
<pre><code class="language-ts">import &#123; DELON_LOCALE, en_US &#125; from &#39;&#64;delon/theme&#39;;
&#64;NgModule(&#123;
  ...
  providers   : [ &#123; provide: DELON_LOCALE, useValue: en_US &#125; ]
&#125;)
export class AppModule &#123; &#125;
</code></pre>
<h3 id="\u8FD0\u884C\u65F6\u4FEE\u6539"><a class="lake-link"><i data-anchor="\u8FD0\u884C\u65F6\u4FEE\u6539"></i></a>\u8FD0\u884C\u65F6\u4FEE\u6539</h3><p><code>&#64;delon</code> \u63D0\u4F9B\u4E86\u4E00\u4E2A\u670D\u52A1 <code>DelonLocaleService</code> \u7528\u4E8E\u52A8\u6001\u4FEE\u6539\u56FD\u9645\u5316\u6587\u6848\u3002</p>
<pre><code class="language-ts">import &#123; en_US, DelonLocaleService &#125; from &#39;&#64;delon/theme&#39;;
...
constructor(private delonLocaleService: DelonLocaleService) &#123;
&#125;

switchLanguage() &#123;
  this.delonLocaleService.setLocale(en_US);
&#125;
</code></pre>
<p>\u6CE8\u610F\uFF1A<code>en_US</code> \u662F\u8BED\u8A00\u5305\u540D\u79F0\uFF0C\u4EE5\u4E0B\u8868\u683C\u4E5F\u9075\u5FAA\u540C\u6837\u7684\u89C4\u5219\u3002</p>
<h2 id="\u652F\u6301\u8BED\u8A00"><a class="lake-link"><i data-anchor="\u652F\u6301\u8BED\u8A00"></i></a>\u652F\u6301\u8BED\u8A00</h2><table>
<thead>
<tr>
<th>\u8BED\u8A00</th>
<th>\u8BED\u8A00\u5305\u540D\u79F0</th>
</tr>
</thead>
<tbody><tr>
<td>\u82F1\u8BED\uFF08\u7F8E\u5F0F\uFF09</td>
<td>en_US</td>
</tr>
<tr>
<td>\u7B80\u4F53\u4E2D\u6587</td>
<td>zh_CN</td>
</tr>
<tr>
<td>\u7E41\u4F53\u4E2D\u6587</td>
<td>zh_HK</td>
</tr>
<tr>
<td>\u7E41\u4F53\u4E2D\u6587</td>
<td>zh_TW</td>
</tr>
<tr>
<td>\u571F\u8033\u5176\u8BED</td>
<td>tr_TR</td>
</tr>
<tr>
<td>\u6CE2\u5170\u8BED</td>
<td>pl_PL</td>
</tr>
<tr>
<td>\u5E0C\u814A\u8BED</td>
<td>el_GR</td>
</tr>
<tr>
<td>\u671D\u9C9C\u8BED</td>
<td>ko_KR</td>
</tr>
<tr>
<td>\u514B\u7F57\u5730\u4E9A</td>
<td>hr_HR</td>
</tr>
<tr>
<td>\u65E5\u8BED</td>
<td>ja_JP</td>
</tr>
<tr>
<td>\u65AF\u6D1B\u6587\u5C3C\u4E9A\u6587</td>
<td>sl_SI</td>
</tr>
<tr>
<td>\u6CD5\u6587</td>
<td>fr_FR</td>
</tr>
<tr>
<td>\u897F\u73ED\u7259\u8BED</td>
<td>es_ES</td>
</tr>
<tr>
<td>\u610F\u5927\u5229\u8BED</td>
<td>it_IT</td>
</tr>
<tr>
<td>\u8D8A\u5357\u8BED</td>
<td>vi_VN</td>
</tr>
<tr>
<td>\u963F\u62C9\u4F2F\u8BED</td>
<td>ar_SA</td>
</tr>
<tr>
<td>\u5370\u5EA6\u5C3C\u897F\u4E9A\u8BED</td>
<td>id_ID</td>
</tr>
<tr>
<td>\u9AD8\u68C9\u8BED</td>
<td>km_KH</td>
</tr>
<tr>
<td>\u9A6C\u6765\u8BED</td>
<td>ms_MY</td>
</tr>
<tr>
<td>\u6CF0\u8BED</td>
<td>th_TH</td>
</tr>
</tbody></table>
<h2 id="\u589E\u52A0\u8BED\u8A00\u5305"><a class="lake-link"><i data-anchor="\u589E\u52A0\u8BED\u8A00\u5305"></i></a>\u589E\u52A0\u8BED\u8A00\u5305</h2><p>\u5982\u679C\u4F60\u627E\u4E0D\u5230\u4F60\u9700\u8981\u7684\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u4F60\u5728 <a href="https://github.com/ng-alain/delon/tree/master/packages/theme/src/locale/languages/en-US.ts" target="_blank" rel="noopener">\u82F1\u6587\u8BED\u8A00\u5305</a>\uFF08\u4F60\u4E5F\u53EF\u4EE5\u53C2\u8003 <a href="https://github.com/ng-alain/delon/pull/308" target="_blank" rel="noopener">#308</a> \u5411\u6211\u4EEC\u8D21\u732E\u8BED\u8A00\u5305\uFF09\u7684\u57FA\u7840\u4E0A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u5E76\u7ED9\u6211\u4EEC Pull Request\u3002</p>
`,api:``,toc:[{id:`使用`,title:`使用`,children:[{id:`全局配置`,title:`全局配置`},{id:`运行时修改`,title:`运行时修改`}]},{id:`支持语言`,title:`支持语言`},{id:`增加语言包`,title:`增加语言包`}],raw:`---
order: 2
title: \u56FD\u9645\u5316
type: Documents
---

\u4E3A\u6574\u4E2A \`@delon/*\` \u7C7B\u5E93\u5185\u5EFA\u6587\u6848\u63D0\u4F9B\u7EDF\u4E00\u7684\u56FD\u9645\u5316\u652F\u6301\u3002

## \u4F7F\u7528

### \u5168\u5C40\u914D\u7F6E

\u53EA\u9700\u8981\u5728\u6839\u6A21\u5757\u91CD\u65B0\u5BF9 \`DELON_LOCALE\` \u6CE8\u5165\u76EE\u6807\u8BED\u8A00\u5373\u53EF\u5168\u5C40\u751F\u6548\u3002

\`\`\`ts
import { DELON_LOCALE, en_US } from '@delon/theme';
@NgModule({
  ...
  providers   : [ { provide: DELON_LOCALE, useValue: en_US } ]
})
export class AppModule { }
\`\`\`

### \u8FD0\u884C\u65F6\u4FEE\u6539

\`@delon\` \u63D0\u4F9B\u4E86\u4E00\u4E2A\u670D\u52A1 \`DelonLocaleService\` \u7528\u4E8E\u52A8\u6001\u4FEE\u6539\u56FD\u9645\u5316\u6587\u6848\u3002

\`\`\`ts
import { en_US, DelonLocaleService } from '@delon/theme';
...
constructor(private delonLocaleService: DelonLocaleService) {
}

switchLanguage() {
  this.delonLocaleService.setLocale(en_US);
}
\`\`\`

\u6CE8\u610F\uFF1A\`en_US\` \u662F\u8BED\u8A00\u5305\u540D\u79F0\uFF0C\u4EE5\u4E0B\u8868\u683C\u4E5F\u9075\u5FAA\u540C\u6837\u7684\u89C4\u5219\u3002

## \u652F\u6301\u8BED\u8A00

| \u8BED\u8A00 | \u8BED\u8A00\u5305\u540D\u79F0 |
|----|-------|
| \u82F1\u8BED\uFF08\u7F8E\u5F0F\uFF09 | en_US |
| \u7B80\u4F53\u4E2D\u6587 | zh_CN |
| \u7E41\u4F53\u4E2D\u6587 | zh_HK |
| \u7E41\u4F53\u4E2D\u6587 | zh_TW |
| \u571F\u8033\u5176\u8BED | tr_TR |
| \u6CE2\u5170\u8BED | pl_PL |
| \u5E0C\u814A\u8BED | el_GR |
| \u671D\u9C9C\u8BED | ko_KR |
| \u514B\u7F57\u5730\u4E9A | hr_HR |
| \u65E5\u8BED | ja_JP |
| \u65AF\u6D1B\u6587\u5C3C\u4E9A\u6587 | sl_SI |
| \u6CD5\u6587 | fr_FR |
| \u897F\u73ED\u7259\u8BED | es_ES |
| \u610F\u5927\u5229\u8BED | it_IT |
| \u8D8A\u5357\u8BED | vi_VN |
| \u963F\u62C9\u4F2F\u8BED | ar_SA |
| \u5370\u5EA6\u5C3C\u897F\u4E9A\u8BED | id_ID    |
| \u9AD8\u68C9\u8BED | km_KH    |
| \u9A6C\u6765\u8BED | ms_MY    |
| \u6CF0\u8BED | th_TH    |

## \u589E\u52A0\u8BED\u8A00\u5305

\u5982\u679C\u4F60\u627E\u4E0D\u5230\u4F60\u9700\u8981\u7684\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u4F60\u5728 [\u82F1\u6587\u8BED\u8A00\u5305](https://github.com/ng-alain/delon/tree/master/packages/theme/src/locale/languages/en-US.ts)\uFF08\u4F60\u4E5F\u53EF\u4EE5\u53C2\u8003 [#308](https://github.com/ng-alain/delon/pull/308) \u5411\u6211\u4EEC\u8D21\u732E\u8BED\u8A00\u5305\uFF09\u7684\u57FA\u7840\u4E0A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u5E76\u7ED9\u6211\u4EEC Pull Request\u3002`}}};codes=[];static ɵfac=function(e){return new(e||n)};static ɵcmp=_e({type:n,selectors:[[`theme-locale`]],hostAttrs:[1,`d-block`],decls:1,vars:2,consts:[[3,`codes`,`item`]],template:function(e,t){e&1&&lt(0,`app-docs`,0),e&2&&re(`codes`,t.codes)(`item`,t.item)},dependencies:[rt],encapsulation:2})};var R=class n{item={name:`performance`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{order:10,title:`Performance`,description:`ng-alain also includes a set of like bootstrap style tools, And built on the design principles developed by Ant Design. If you are familiar with Boots...`,group:`Documents`,path:`packages/theme/docs/performance.en-US.md`,url:`/theme/performance/en`},text:`<p>ng-alain also includes a set of like bootstrap style tools, And built on the design principles developed by <a href="https://ant.design/" target="_blank" rel="noopener">Ant Design</a>. If you are familiar with Bootstrap, it will be very friendly, because all naming as close as it. Also, Install <a href="https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode" target="_blank" rel="noopener">ng-alain snippets</a> plugin in VSCode for intellisense these class names.</p>
<h2 id="usage"><a class="lake-link"><i data-anchor="usage"></i></a>Usage</h2><p>We have hundreds of Less variables (including ng-zorro-antd, ng-alain), some of which contain the <code>-enabled</code> suffix, which means that these libraries are optional.</p>
<p>You can to <a href="https://github.com/ng-alain/ng-alain/blob/master/src/styles/theme.less" target="_blank" rel="noopener">theme.less</a> set to <code>false</code>, which can reduce css file size.</p>
<pre><code class="language-less">// I don&#39;t need masonry style
&#64;masonry-enabled: false
</code></pre>
<h2 id="parameters"><a class="lake-link"><i data-anchor="parameters"></i></a>Parameters</h2><table>
<thead>
<tr>
<th>Name</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>&#64;scrollbar-enabled</code></td>
<td><code>true</code></td>
<td>Enable landscaping scrollbars</td>
</tr>
<tr>
<td><code>&#64;preserve-white-spaces-enabled</code></td>
<td><code>true</code></td>
<td>Fixed between buttons spacing when enabled <a href="https://angular.io/api/core/Component#preserveWhitespaces" target="_blank" rel="noopener">preserveWhitespaces</a> is true</td>
</tr>
<tr>
<td><code>&#64;form-state-visual-feedback-enabled</code></td>
<td><code>false</code></td>
<td>Turn on visual feedback of form invalid elements</td>
</tr>
<tr>
<td><code>&#64;hafl-enabled</code></td>
<td><code>true</code></td>
<td>Whether hafl image</td>
</tr>
<tr>
<td><code>&#64;abs-enabled</code></td>
<td><code>true</code></td>
<td>Whether abs element</td>
</tr>
<tr>
<td><code>&#64;masonry-enabled</code></td>
<td><code>true</code></td>
<td>Whether css masonry</td>
</tr>
<tr>
<td><code>&#64;setting-drawer-enabled</code></td>
<td><code>true</code></td>
<td>Whether setting drawer css</td>
</tr>
<tr>
<td><code>&#64;search-form-enabled</code></td>
<td><code>true</code></td>
<td>Simple style search form, <a href="https://ng-alain.surge.sh/" target="_blank" rel="noopener">DEMO</a></td>
</tr>
<tr>
<td><code>&#64;search__form-enabled</code></td>
<td><code>true</code></td>
<td>Pro style search form, <a href="https://ng-alain.surge.sh/" target="_blank" rel="noopener">DEMO</a></td>
</tr>
</tbody></table>
`,api:``,toc:[{id:`usage`,title:`Usage`},{id:`parameters`,title:`Parameters`}],raw:"---\ntype: Documents\norder: 10\ntitle: Performance\n---\n\nng-alain also includes a set of like bootstrap style tools, And built on the design principles developed by [Ant Design](https://ant.design/). If you are familiar with Bootstrap, it will be very friendly, because all naming as close as it. Also, Install [ng-alain snippets](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode) plugin in VSCode for intellisense these class names.\n\n## Usage\n\nWe have hundreds of Less variables (including ng-zorro-antd, ng-alain), some of which contain the `-enabled` suffix, which means that these libraries are optional.\n\nYou can to [theme.less](https://github.com/ng-alain/ng-alain/blob/master/src/styles/theme.less) set to `false`, which can reduce css file size.\n\n```less\n// I don't need masonry style\n@masonry-enabled: false\n```\n\n## Parameters\n\n| Name | Default | Description |\n| --- | --- | --- |\n| `@scrollbar-enabled` | `true` | Enable landscaping scrollbars |\n| `@preserve-white-spaces-enabled` | `true` | Fixed between buttons spacing when enabled [preserveWhitespaces](https://angular.io/api/core/Component#preserveWhitespaces) is true |\n| `@form-state-visual-feedback-enabled` | `false` | Turn on visual feedback of form invalid elements |\n| `@hafl-enabled` | `true` | Whether hafl image |\n| `@abs-enabled` | `true` | Whether abs element|\n| `@masonry-enabled` | `true` | Whether css masonry |\n| `@setting-drawer-enabled` | `true` | Whether setting drawer css |\n| `@search-form-enabled` | `true` | Simple style search form, [DEMO](https://ng-alain.surge.sh/) |\n| `@search__form-enabled` | `true` | Pro style search form, [DEMO](https://ng-alain.surge.sh/) |"},"zh-CN":{meta:{order:10,title:`包体优化`,description:`ng-alain 除了提供主题方案以外，还包含一套类似 Bootstrap 的工具集，并且严格遵守 Antd 的设计价值观，对于熟悉 Bootstrap 的人来说会非常友好，因为所有命名方式都尽可能与 Bootstrap 相同。同时，我们为 VSCode 写的 ng-alain插件 会自动为你提供这...`,group:`Documents`,path:`packages/theme/docs/performance.zh-CN.md`,url:`/theme/performance/zh`},text:`<p>ng-alain \u9664\u4E86\u63D0\u4F9B\u4E3B\u9898\u65B9\u6848\u4EE5\u5916\uFF0C\u8FD8\u5305\u542B\u4E00\u5957\u7C7B\u4F3C Bootstrap \u7684\u5DE5\u5177\u96C6\uFF0C\u5E76\u4E14\u4E25\u683C\u9075\u5B88 Antd \u7684\u8BBE\u8BA1\u4EF7\u503C\u89C2\uFF0C\u5BF9\u4E8E\u719F\u6089 Bootstrap \u7684\u4EBA\u6765\u8BF4\u4F1A\u975E\u5E38\u53CB\u597D\uFF0C\u56E0\u4E3A\u6240\u6709\u547D\u540D\u65B9\u5F0F\u90FD\u5C3D\u53EF\u80FD\u4E0E Bootstrap \u76F8\u540C\u3002\u540C\u65F6\uFF0C\u6211\u4EEC\u4E3A VSCode \u5199\u7684 <a href="https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode" target="_blank" rel="noopener">ng-alain\u63D2\u4EF6</a> \u4F1A\u81EA\u52A8\u4E3A\u4F60\u63D0\u4F9B\u8FD9\u5957CSS\u5DE5\u5177\u96C6\u7684\u667A\u80FD\u63D0\u9192\u3002</p>
<h2 id="\u5982\u4F55\u4F18\u5316"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F18\u5316"></i></a>\u5982\u4F55\u4F18\u5316</h2><p>\u6211\u4EEC\u5305\u542B\u7740\u4E0A\u767E\u79CD Less \u53D8\u91CF\uFF08\u5305\u542Bng-zorro-antd\u3001ng-alain\uFF09\uFF0C\u8FD9\u4E9B\u53D8\u66F4\u6709\u90E8\u5206\u662F\u5305\u542B\u7740<code>-enabled</code> \u540E\u7F00\uFF0C\u5B83\u8868\u793A\u8FD9\u4E9B\u7C7B\u5E93\u662F\u53EF\u9009\u7684\u3002</p>
<p>\u4F60\u53EF\u4EE5\u5728 ng-alain \u9879\u76EE\u7684 <a href="https://github.com/ng-alain/ng-alain/blob/master/src/styles/theme.less" target="_blank" rel="noopener">theme.less</a> \u4E2D\u8BBE\u7F6E\u4E3A <code>false</code>\uFF0C\u53EF\u4EE5\u6709\u6548\u51CF\u5C11 css \u6587\u4EF6\u5927\u5C0F\u3002</p>
<pre><code class="language-less">// \u4E0D\u9700\u8981 masonry \u6837\u5F0F
&#64;masonry-enabled: false
</code></pre>
<h2 id="\u53C2\u6570"><a class="lake-link"><i data-anchor="\u53C2\u6570"></i></a>\u53C2\u6570</h2><table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u529F\u80FD</th>
</tr>
</thead>
<tbody><tr>
<td><code>&#64;scrollbar-enabled</code></td>
<td><code>true</code></td>
<td>\u542F\u7528\u7F8E\u5316\u6EDA\u52A8\u6761</td>
</tr>
<tr>
<td><code>&#64;preserve-white-spaces-enabled</code></td>
<td><code>true</code></td>
<td>\u89E3\u51B3\u5F00\u542F <a href="https://angular.io/api/core/Component#preserveWhitespaces" target="_blank" rel="noopener">preserveWhitespaces</a> \u65F6\u6309\u94AE\u95F4\u53EF\u80FD\u4F1A\u51FA\u73B0\u65E0\u7F1D</td>
</tr>
<tr>
<td><code>&#64;form-state-visual-feedback-enabled</code></td>
<td><code>false</code></td>
<td>\u5F00\u542F\u8868\u5355\u5143\u7D20\u7684\u89C6\u89C9\u53CD\u9988</td>
</tr>
<tr>
<td><code>&#64;hafl-enabled</code></td>
<td><code>true</code></td>
<td>\u534A\u56FE</td>
</tr>
<tr>
<td><code>&#64;abs-enabled</code></td>
<td><code>true</code></td>
<td>\u4E2D\u5FC3\u5143\u7D20</td>
</tr>
<tr>
<td><code>&#64;masonry-enabled</code></td>
<td><code>true</code></td>
<td>CSS\u7011\u5E03\u6D41\u5217</td>
</tr>
<tr>
<td><code>&#64;setting-drawer-enabled</code></td>
<td><code>true</code></td>
<td>\u4E3B\u9898\u8BBE\u7F6E</td>
</tr>
<tr>
<td><code>&#64;search-form-enabled</code></td>
<td><code>true</code></td>
<td>\u7B80\u5316\u641C\u7D22\u6846\uFF0C<a href="https://ng-alain.surge.sh/" target="_blank" rel="noopener">DEMO</a></td>
</tr>
<tr>
<td><code>&#64;search__form-enabled</code></td>
<td><code>true</code></td>
<td>Pro\u641C\u7D22\u6846\uFF0C<a href="https://ng-alain.surge.sh/" target="_blank" rel="noopener">DEMO</a></td>
</tr>
</tbody></table>
`,api:``,toc:[{id:`如何优化`,title:`如何优化`},{id:`参数`,title:`参数`}],raw:"---\ntype: Documents\norder: 10\ntitle: 包体优化\n---\n\nng-alain 除了提供主题方案以外，还包含一套类似 Bootstrap 的工具集，并且严格遵守 Antd 的设计价值观，对于熟悉 Bootstrap 的人来说会非常友好，因为所有命名方式都尽可能与 Bootstrap 相同。同时，我们为 VSCode 写的 [ng-alain插件](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode) 会自动为你提供这套CSS工具集的智能提醒。\n\n## 如何优化\n\n我们包含着上百种 Less 变量（包含ng-zorro-antd、ng-alain），这些变更有部分是包含着`-enabled` 后缀，它表示这些类库是可选的。\n\n你可以在 ng-alain 项目的 [theme.less](https://github.com/ng-alain/ng-alain/blob/master/src/styles/theme.less) 中设置为 `false`，可以有效减少 css 文件大小。\n\n```less\n// 不需要 masonry 样式\n@masonry-enabled: false\n```\n\n## 参数\n\n| 名称 | 默认值 | 功能 |\n| --- | --- | --- |\n| `@scrollbar-enabled` | `true` | 启用美化滚动条 |\n| `@preserve-white-spaces-enabled` | `true` | 解决开启 [preserveWhitespaces](https://angular.io/api/core/Component#preserveWhitespaces) 时按钮间可能会出现无缝 |\n| `@form-state-visual-feedback-enabled` | `false` | 开启表单元素的视觉反馈 |\n| `@hafl-enabled` | `true` | 半图 |\n| `@abs-enabled` | `true` | 中心元素 |\n| `@masonry-enabled` | `true` | CSS瀑布流列 |\n| `@setting-drawer-enabled` | `true` | 主题设置 |\n| `@search-form-enabled` | `true` | 简化搜索框，[DEMO](https://ng-alain.surge.sh/) |\n| `@search__form-enabled` | `true` | Pro搜索框，[DEMO](https://ng-alain.surge.sh/) |"}}};codes=[];static ɵfac=function(e){return new(e||n)};static ɵcmp=_e({type:n,selectors:[[`theme-performance`]],hostAttrs:[1,`d-block`],decls:1,vars:2,consts:[[3,`codes`,`item`]],template:function(e,t){e&1&&lt(0,`app-docs`,0),e&2&&re(`codes`,t.codes)(`item`,t.item)},dependencies:[rt],encapsulation:2})};var q=class n{item={name:`tools`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{order:2,title:`Style Tools`,description:`ng-alain builds a set of style tools for size, spacing, color, and more based on Ant Design.Install ng-alain snippets plugin in VSCode for intellisens...`,group:`Theme`,path:`packages/theme/docs/tools.en-US.md`,url:`/theme/tools/en`},text:`<p>ng-alain builds a set of style tools for size, spacing, color, and more based on Ant Design.</p>
<blockquote>
<p>Install <a href="https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode" target="_blank" rel="noopener">ng-alain snippets</a> plugin in VSCode for intellisense these class names.</p>
</blockquote>
<h2 id="spacing"><a class="lake-link"><i data-anchor="spacing"></i></a>Spacing</h2><p>ng-alain believes that these styles tool only using in the content area. Built on the design principles developed by Ant Design, A spacing width is based on <code>8px</code> as a reference unit, and derived from three rule sizes.</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Formula</th>
<th>Size</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>xs</code></td>
<td>$gutter / 2</td>
<td><code>4px</code></td>
<td>Smaller</td>
</tr>
<tr>
<td><code>sm</code></td>
<td>$gutter</td>
<td><code>8px</code></td>
<td>Small</td>
</tr>
<tr>
<td><code>md</code></td>
<td>$gutter *2</td>
<td><code>16px</code></td>
<td>Medium</td>
</tr>
<tr>
<td><code>lg</code></td>
<td>$gutter* 3</td>
<td><code>24px</code></td>
<td>Large</td>
</tr>
<tr>
<td><code>xl</code></td>
<td>$gutter *4</td>
<td><code>32px</code></td>
<td>Extra Large</td>
</tr>
<tr>
<td><code>xxl</code></td>
<td>$gutter* 6</td>
<td><code>48px</code></td>
<td>Oversized</td>
</tr>
</tbody></table>
<p>According these rules, derived from <code>margin</code>\uFF0C<code>padding</code>, and naming rules as follows:</p>
<ul>
<li>Type: <code>padding</code>, <code>margin</code></li>
<li>Direction(Optional): <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code>, <code>x</code>(equal to <code>left</code>, <code>right</code>), <code>y</code>(equal to <code>top</code>, <code>bottom</code>)</li>
</ul>
<p><strong>Clean</strong></p>
<pre><code class="language-regex">[&lt;Type&gt;p|m][&lt;Direction&gt;t|r|b|l|x|y]?0
</code></pre>
<p><strong>Name Rule</strong></p>
<pre><code class="language-regex">[&lt;Type&gt;p|m][&lt;Direction&gt;t|r|b|l|x|y]?-[&lt;Size&gt;sm|md|lg]
</code></pre>
<p>Demo:</p>
<pre><code class="language-css">.p-sm &#123; padding: 8px !important; &#125;
.pt-sm &#123; padding-top: 8px !important; &#125;
.m-sm &#123; margin: 16px !important; &#125;
.mt-md &#123; margin-top: 16px !important; &#125;

.p0 &#123; padding: 0 !important; &#125;
</code></pre>
<h2 id="color"><a class="lake-link"><i data-anchor="color"></i></a>Color</h2><p>Ant Design does not have a button color, but is based on visual effects. The default is daybreak blue, for example: button type <code>primary</code> of <code>nz-button</code>.</p>
<p>ng-alain still does not break this rule, building a set of color classes for text and background based on the <a href="//ant.design/docs/spec/colors" target="_blank" rel="noopener">color</a> section.</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Primary Color</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>red</code></td>
<td><div style="color:#fff;background-color:#f5222d;">#f5222d</div></td>
<td>Dust Red: Fighting, unrestrained</td>
</tr>
<tr>
<td><code>volcano</code></td>
<td><div style="color:#fff;background-color:#fa541c;">#fa541c</div></td>
<td>Volcano: Eye-catching</td>
</tr>
<tr>
<td><code>orange</code></td>
<td><div style="color:#fff;background-color:#fa8c16;">#fa8c16</div></td>
<td>Sunset Orange: Warm and cheerful</td>
</tr>
<tr>
<td><code>gold</code></td>
<td><div style="color:#fff;background-color:#faad14;">#faad14</div></td>
<td>Calendula Gold: Vital and active</td>
</tr>
<tr>
<td><code>yellow</code></td>
<td><div style="color:#fff;background-color:#fadb14;">#fadb14</div></td>
<td>Sunrise Yellow: Birth, sunshine</td>
</tr>
<tr>
<td><code>lime</code></td>
<td><div style="color:#fff;background-color:#a0d911;">#a0d911</div></td>
<td>Lime: Natural, vital</td>
</tr>
<tr>
<td><code>green</code></td>
<td><div style="color:#fff;background-color:#52c41a;">#f5222d</div></td>
<td>Polar Green: Health, innovation</td>
</tr>
<tr>
<td><code>cyan</code></td>
<td><div style="color:#fff;background-color:#13c2c2;">#13c2c2</div></td>
<td>Cyan: Hope, strong</td>
</tr>
<tr>
<td><code>blue</code></td>
<td><div style="color:#fff;background-color:#1890ff;">#1890ff</div></td>
<td>Daybreak Blue: Inclusive, technology, Pratt &amp; Whitney</td>
</tr>
<tr>
<td><code>geekblue</code></td>
<td><div style="color:#fff;background-color:#2f54eb;">#2f54eb</div></td>
<td>Geek Blue: Explore and delve into</td>
</tr>
<tr>
<td><code>purple</code></td>
<td><div style="color:#fff;background-color:#722ed1;">#722ed1</div></td>
<td>Golden Purple: Elegant, romantic</td>
</tr>
<tr>
<td><code>magenta</code></td>
<td><div style="color:#fff;background-color:#eb2f96;">#eb2f96</div></td>
<td>Magenta: Smooth, neutral</td>
</tr>
</tbody></table>
<p>Ant Design&#39;s base color palette totals 120 colors, including 12 primary colors and their derivative colors. These colors can basically include the need for color in background applications design.</p>
<p><strong>Category</strong></p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Color Size</th>
</tr>
</thead>
<tbody><tr>
<td><code>light</code></td>
<td>5</td>
</tr>
<tr>
<td><code>normal</code></td>
<td>6</td>
</tr>
<tr>
<td><code>dark</code></td>
<td>7</td>
</tr>
</tbody></table>
<p><strong>Name Rule</strong></p>
<pre><code class="language-regex">[&lt;Type&gt;text|bg]-[&lt;Color Name&gt;red|volcano|orange|gold|yellow|lime|green|cyan|blue|geekblue|purple|magenta|grey](-[light|dark])?(-h)?
</code></pre>
<blockquote>
<p><code>normal</code> itself is the basic color, so it can be ignored
<code>grey</code> is very often used, so add extra <code>grey-light</code>, <code>grey-darker</code> alias to indicate depth</p>
</blockquote>
<p>DEMO:</p>
<pre><code class="language-less">// Text color
.text-red-light &#123; color: #fabeb9 !important; &#125;
.text-red &#123; color: #f04134 !important; &#125;
.text-red-dark &#123; color: #a31837 !important; &#125;

// background-color color
.bg-red-light &#123; background-color: #fabeb9 !important; &#125;
.bg-red &#123; background-color: #f04134 !important; &#125;
.bg-red-dark &#123; background-color: #a31837 !important; &#125;

// hover color
.bg-red-light-h &#123; &amp;:hover &#123; background-color: #fabeb9 !important; &#125; &#125;
.bg-red-h &#123; &amp;:hover &#123; background-color: #f04134 !important; &#125; &#125;
.bg-red-dark-h &#123; &amp;:hover &#123; background-color: #a31837 !important; &#125; &#125;
</code></pre>
<h3 id="aliase"><a class="lake-link"><i data-anchor="aliase"></i></a>Aliase</h3><table>
<thead>
<tr>
<th>Aliase</th>
<th>Color Name</th>
</tr>
</thead>
<tbody><tr>
<td><code>primary</code></td>
<td><code>&#64;blue-6</code> <div style="color:#fff;background-color:#1890ff;">#1890ff</div></td>
</tr>
<tr>
<td><code>success</code></td>
<td><code>&#64;green-6</code> <div style="color:#fff;background-color:#52c41a;">#52c41a</div></td>
</tr>
<tr>
<td><code>error</code></td>
<td><code>&#64;red-5</code> <div style="color:#fff;background-color:#ff4d4f;">#ff4d4f</div></td>
</tr>
<tr>
<td><code>warning</code></td>
<td><code>&#64;gold-6</code> <div style="color:#fff;background-color:#faad14;">#faad14</div></td>
</tr>
<tr>
<td><code>info</code></td>
<td><code>&#64;blue-6</code> <div style="color:#fff;background-color:#1890ff;">#1890ff</div></td>
</tr>
<tr>
<td><code>processing</code></td>
<td><code>&#64;blue-6</code> <div style="color:#fff;background-color:#1890ff;">#1890ff</div></td>
</tr>
<tr>
<td><code>highlight</code></td>
<td><code>&#64;red-5</code> <div style="color:#fff;background-color:#ff4d4f;">#ff4d4f</div></td>
</tr>
<tr>
<td><code>normal</code></td>
<td><code>#d9d9d9</code> <div style="color:#fff;background-color:#d9d9d9;">#d9d9d9</div></td>
</tr>
</tbody></table>
<p>DEMO:</p>
<pre><code class="language-less">// Text color
.text-error-light &#123; color: #fabeb9 !important; &#125;
.text-error &#123; color: #f04134 !important; &#125;
.text-error-dark &#123; color: #a31837 !important; &#125;

// background-color color
.bg-error-light &#123; background-color: #fabeb9 !important; &#125;
.bg-error &#123; background-color: #f04134 !important; &#125;
.bg-error-dark &#123; background-color: #a31837 !important; &#125;

// hover color
.bg-error-light-h &#123; &amp;:hover &#123; background-color: #fabeb9 !important; &#125; &#125;
.bg-error-h &#123; &amp;:hover &#123; background-color: #f04134 !important; &#125; &#125;
.bg-error-dark-h &#123; &amp;:hover &#123; background-color: #a31837 !important; &#125; &#125;
</code></pre>
<p><strong>Full Colors</strong></p>
<p>You can use <code>&#64;enable-all-colors: true</code> to turn on all 120 color rules.</p>
<pre><code class="language-less">.text-red-1 &#123; color: #fff1f0 !important; &#125;
.text-red-6 &#123; color: #f04134 !important; &#125;
.text-red-10 &#123; color: #5c0011 !important; &#125;

.bg-red-6 &#123; color: #f04134 !important; &#125;
.bg-red-6-h &#123; color: #f04134 !important; &#125;
</code></pre>
<h2 id="clearfix"><a class="lake-link"><i data-anchor="clearfix"></i></a>Clearfix</h2><p>Clear floats <code>.clearfix</code>.</p>
<h2 id="display"><a class="lake-link"><i data-anchor="display"></i></a>Display</h2><table>
<thead>
<tr>
<th>Aliase</th>
<th>CSS</th>
</tr>
</thead>
<tbody><tr>
<td><code>d-none</code></td>
<td><code>display: none</code></td>
</tr>
<tr>
<td><code>d-block</code></td>
<td><code>display: block</code></td>
</tr>
<tr>
<td><code>d-inline-block</code></td>
<td><code>display: inline-block</code></td>
</tr>
<tr>
<td><code>d-flex</code></td>
<td><code>display: flex</code></td>
</tr>
<tr>
<td><code>d-inline-flex</code></td>
<td><code>display: inline-flex</code></td>
</tr>
<tr>
<td><code>justify-content-start</code></td>
<td><code>justify-content: flex-start</code></td>
</tr>
<tr>
<td><code>justify-content-end</code></td>
<td><code>justify-content: flex-end</code></td>
</tr>
<tr>
<td><code>justify-content-center</code></td>
<td><code>justify-content: center</code></td>
</tr>
<tr>
<td><code>justify-content-between</code></td>
<td><code>justify-content: space-between</code></td>
</tr>
<tr>
<td><code>justify-content-around</code></td>
<td><code>justify-content: space-around</code></td>
</tr>
<tr>
<td><code>align-items-start</code></td>
<td><code>align-items: flex-start</code></td>
</tr>
<tr>
<td><code>align-items-end</code></td>
<td><code>align-items: flex-end</code></td>
</tr>
<tr>
<td><code>align-items-center</code></td>
<td><code>align-items: center</code></td>
</tr>
<tr>
<td><code>align-items-baseline</code></td>
<td><code>align-items: baseline</code></td>
</tr>
<tr>
<td><code>align-items-stretch</code></td>
<td><code>align-items: stretch</code></td>
</tr>
<tr>
<td><code>align-content-start</code></td>
<td><code>align-content: flex-start</code></td>
</tr>
<tr>
<td><code>align-content-end</code></td>
<td><code>align-content: flex-end</code></td>
</tr>
<tr>
<td><code>align-content-center</code></td>
<td><code>align-content: center</code></td>
</tr>
<tr>
<td><code>align-content-between</code></td>
<td><code>align-content: space-between</code></td>
</tr>
<tr>
<td><code>align-content-around</code></td>
<td><code>align-content: space-around</code></td>
</tr>
<tr>
<td><code>align-content-stretch</code></td>
<td><code>align-content: stretch</code></td>
</tr>
<tr>
<td><code>align-self-auto</code></td>
<td><code>align-self: auto</code></td>
</tr>
<tr>
<td><code>align-self-start</code></td>
<td><code>align-self: flex-start</code></td>
</tr>
<tr>
<td><code>align-self-end</code></td>
<td><code>align-self: flex-end</code></td>
</tr>
<tr>
<td><code>align-self-center</code></td>
<td><code>align-self: center</code></td>
</tr>
<tr>
<td><code>align-self-baseline</code></td>
<td><code>align-self: baseline</code></td>
</tr>
<tr>
<td><code>align-self-stretch</code></td>
<td><code>align-self: stretch</code></td>
</tr>
<tr>
<td><code>flex-center</code></td>
<td><code>display: flex; align-items: center;</code></td>
</tr>
<tr>
<td><code>flex-center-between</code></td>
<td><code>display: flex; align-items: center; align-content: space-between;</code></td>
</tr>
</tbody></table>
<h2 id="position"><a class="lake-link"><i data-anchor="position"></i></a>Position</h2><table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>overflow-auto</code></td>
<td><code>overflow: auto</code></td>
</tr>
<tr>
<td><code>overflow-hidden</code></td>
<td><code>overflow: hidden</code></td>
</tr>
<tr>
<td><code>fixed-top</code></td>
<td>Fixed top</td>
</tr>
<tr>
<td><code>fixed-bottom</code></td>
<td>Fixed bottom</td>
</tr>
</tbody></table>
<h2 id="text"><a class="lake-link"><i data-anchor="text"></i></a>Text</h2><h3 id="sizing"><a class="lake-link"><i data-anchor="sizing"></i></a>Sizing</h3><p>Ant Design is based on <code>14px</code>.</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>text-xs</code></td>
<td><code>12px</code></td>
</tr>
<tr>
<td><code>text-sm</code></td>
<td><code>14px</code></td>
</tr>
<tr>
<td><code>text-md</code></td>
<td><code>16px</code></td>
</tr>
<tr>
<td><code>text-lg</code></td>
<td><code>18px</code></td>
</tr>
<tr>
<td><code>text-xl</code></td>
<td><code>22px</code></td>
</tr>
</tbody></table>
<h3 id="alignment"><a class="lake-link"><i data-anchor="alignment"></i></a>Alignment</h3><table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>text-left</code></td>
<td>Text left</td>
</tr>
<tr>
<td><code>text-center</code></td>
<td>Text center</td>
</tr>
<tr>
<td><code>text-right</code></td>
<td>Text right</td>
</tr>
</tbody></table>
<h3 id="overflow"><a class="lake-link"><i data-anchor="overflow"></i></a>Overflow</h3><blockquote>
<p>The container must be <code>display: inline-block</code> or <code>display: block</code>.</p>
</blockquote>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>text-nowrap</code></td>
<td>Outputs a single line</td>
</tr>
<tr>
<td><code>text-truncate</code></td>
<td>Truncate string with ellipsis</td>
</tr>
</tbody></table>
<h3 id="transformation"><a class="lake-link"><i data-anchor="transformation"></i></a>Transformation</h3><table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>text-lowercase</code></td>
<td>Lowercase of text</td>
</tr>
<tr>
<td><code>text-uppercase</code></td>
<td>Uppercase of text</td>
</tr>
<tr>
<td><code>text-capitalize</code></td>
<td>Capitalize of text</td>
</tr>
<tr>
<td><code>text-deleted</code></td>
<td>Deleted line</td>
</tr>
</tbody></table>
<h3 id="weight_and_italics"><a class="lake-link"><i data-anchor="weight_and_italics"></i></a>Weight and italics</h3><table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>font-weight-normal</code></td>
<td><code>font-weight: normal</code></td>
</tr>
<tr>
<td><code>font-weight-bold</code></td>
<td><code>font-weight: 700</code></td>
</tr>
<tr>
<td><code>font-italic</code></td>
<td><code>font-style: italic</code></td>
</tr>
</tbody></table>
<h3 id="other"><a class="lake-link"><i data-anchor="other"></i></a>Other</h3><table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>text-hover</code></td>
<td><code>*:hover &#123; color: &#64;primary-color; &#125;</code></td>
</tr>
<tr>
<td><code>disabled</code></td>
<td>Disabled</td>
</tr>
</tbody></table>
<h2 id="borders"><a class="lake-link"><i data-anchor="borders"></i></a>Borders</h2><h3 id="border"><a class="lake-link"><i data-anchor="border"></i></a>Border</h3><table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>border</code></td>
<td><code>border: 1px solid #f5f5f5 !important;</code></td>
</tr>
<tr>
<td><code>border-0</code></td>
<td><code>border: 0 !important;</code></td>
</tr>
<tr>
<td><code>border-top-0</code></td>
<td><code>border-top: 0 !important;</code></td>
</tr>
<tr>
<td><code>border-right-0</code></td>
<td><code>border-right: 0 !important;</code></td>
</tr>
<tr>
<td><code>border-bottom-0</code></td>
<td><code>border-bottom: 0 !important;</code></td>
</tr>
<tr>
<td><code>border-left-0</code></td>
<td><code>border-left: 0 !important;</code></td>
</tr>
</tbody></table>
<h3 id="color"><a class="lake-link"><i data-anchor="color"></i></a>Color</h3><p>Supports all color &amp; aliase of <a href="/theme/tools#color">color section</a>, such as <code>border-red</code>, <code>border-success</code>.</p>
<h3 id="rounded"><a class="lake-link"><i data-anchor="rounded"></i></a>Rounded</h3><table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>rounded-0</code></td>
<td><code>border-radius: 0;</code></td>
</tr>
<tr>
<td><code>rounded-circle</code></td>
<td><code>border-radius: 50%;</code></td>
</tr>
<tr>
<td><code>rounded-sm</code></td>
<td><code>border-radius: 2px;</code></td>
</tr>
<tr>
<td><code>rounded-md</code></td>
<td><code>border-radius: 4px;</code></td>
</tr>
<tr>
<td><code>rounded-lg</code></td>
<td><code>border-radius: 6px;</code></td>
</tr>
</tbody></table>
<h2 id="width"><a class="lake-link"><i data-anchor="width"></i></a>Width</h2><table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>width-sm</code></td>
<td><code>160px</code></td>
</tr>
<tr>
<td><code>width-md</code></td>
<td><code>240px</code></td>
</tr>
<tr>
<td><code>width-lg</code></td>
<td><code>320px</code></td>
</tr>
<tr>
<td><code>width-[0-10]</code></td>
<td><code>0%-100%</code></td>
</tr>
</tbody></table>
<h2 id="responsive"><a class="lake-link"><i data-anchor="responsive"></i></a>Responsive</h2><p>Like Bootstrap responsive rules, all apply <code>hidden-xs</code> classes are hidden when screen less than <code>480px</code>.</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Screen</th>
</tr>
</thead>
<tbody><tr>
<td><code>hidden-xs</code></td>
<td>&lt;480px</td>
</tr>
<tr>
<td><code>hidden-sm</code></td>
<td>&lt;768px</td>
</tr>
<tr>
<td><code>hidden-md</code></td>
<td>&lt;992px</td>
</tr>
<tr>
<td><code>hidden-lg</code></td>
<td>&lt;1200px</td>
</tr>
<tr>
<td><code>hidden-pc</code></td>
<td>&lt;768px</td>
</tr>
<tr>
<td><code>hidden-mobile</code></td>
<td>&gt;768px</td>
</tr>
</tbody></table>
<h2 id="rotate"><a class="lake-link"><i data-anchor="rotate"></i></a>Rotate</h2><pre><code class="language-css">.rotate-[360 / 15]
</code></pre>
<p>DEMO:</p>
<pre><code class="language-css">// Rotate 15 degrees
.rotate-15
// Rotate 90 degrees
.rotate-90
// Rotate 360 degrees
.rotate-360
</code></pre>
<h2 id="other"><a class="lake-link"><i data-anchor="other"></i></a>Other</h2><table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>block-center</code></td>
<td><code>margin: 0 auto</code></td>
</tr>
<tr>
<td><code>point</code></td>
<td><code>cursor: pointer</code></td>
</tr>
<tr>
<td><code>no-data</code></td>
<td>No result</td>
</tr>
<tr>
<td><code>no-resize</code></td>
<td>Setting does not allow adjustment elements</td>
</tr>
<tr>
<td><code>bg-center</code></td>
<td>Background image is vertically centered</td>
</tr>
<tr>
<td><code>scrollbar</code></td>
<td>Custom scrollbar for a div</td>
</tr>
<tr>
<td><code>color-weak</code></td>
<td>Weak mode</td>
</tr>
</tbody></table>
<h2 id="widgets"><a class="lake-link"><i data-anchor="widgets"></i></a>Widgets</h2><h3 id="masonry"><a class="lake-link"><i data-anchor="masonry"></i></a>Masonry</h3><p>Online <a href="https://ng-alain.surge.sh/#/style/gridmasonry" target="_blank" rel="noopener">DEMO</a>\u3002</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>row-masonry</code></td>
<td>Rows</td>
</tr>
<tr>
<td>\`row-masonry-&#123;xs</td>
<td>sm</td>
</tr>
<tr>
<td><code>col-masonry</code></td>
<td>Columns</td>
</tr>
</tbody></table>
<h2 id="ng-zorro"><a class="lake-link"><i data-anchor="ng-zorro"></i></a>ng-zorro</h2><h3 id="nz-card"><a class="lake-link"><i data-anchor="nz-card"></i></a>nz-card<label class="api-type-label component">component</label></h3><table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>ant-card__body-nopadding</code></td>
<td>Force body without spacing</td>
</tr>
</tbody></table>
<h3 id="nz-modal"><a class="lake-link"><i data-anchor="nz-modal"></i></a>nz-modal<label class="api-type-label component">component</label></h3><table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td>\`modal-&#123;sm</td>
<td>md</td>
</tr>
<tr>
<td><code>modal-body-nopadding</code></td>
<td>Without padding in body element</td>
</tr>
<tr>
<td><code>modal-header</code></td>
<td>Use html template to custom modal, <a href="https://ng-alain.surge.sh/#/extras/poi" target="_blank" rel="noopener">DEMO</a></td>
</tr>
<tr>
<td><code>modal-footer</code></td>
<td>Use html template to custom modal, <a href="https://ng-alain.surge.sh/#/extras/poi" target="_blank" rel="noopener">DEMO</a></td>
</tr>
</tbody></table>
<h3 id="nz-table"><a class="lake-link"><i data-anchor="nz-table"></i></a>nz-table<label class="api-type-label component">component</label></h3><table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>ant-table-rep__title</code></td>
<td>Title</td>
</tr>
<tr>
<td><code>ant-table-rep__hide-header-footer</code></td>
<td>Show title or bottom when mobile screen</td>
</tr>
</tbody></table>
<example-table-rep-index /><h3 id="nz-tag"><a class="lake-link"><i data-anchor="nz-tag"></i></a>nz-tag<label class="api-type-label component">component</label></h3><table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>ant-tag__plus</code></td>
<td>Add button style</td>
</tr>
</tbody></table>
`,api:``,toc:[{id:`spacing`,title:`Spacing`},{id:`color`,title:`Color`,children:[{id:`aliase`,title:`Aliase`}]},{id:`clearfix`,title:`Clearfix`},{id:`display`,title:`Display`},{id:`position`,title:`Position`},{id:`text`,title:`Text`,children:[{id:`sizing`,title:`Sizing`},{id:`alignment`,title:`Alignment`},{id:`overflow`,title:`Overflow`},{id:`transformation`,title:`Transformation`},{id:`weight_and_italics`,title:`Weight and italics`},{id:`other`,title:`Other`}]},{id:`borders`,title:`Borders`,children:[{id:`border`,title:`Border`},{id:`color`,title:`Color`},{id:`rounded`,title:`Rounded`}]},{id:`width`,title:`Width`},{id:`responsive`,title:`Responsive`},{id:`rotate`,title:`Rotate`},{id:`other`,title:`Other`},{id:`widgets`,title:`Widgets`,children:[{id:`masonry`,title:`Masonry`}]},{id:`ng-zorro`,title:`ng-zorro`,children:[{id:`nz-card`,title:`nz-card`},{id:`nz-modal`,title:`nz-modal`},{id:`nz-table`,title:`nz-table`},{id:`nz-tag`,title:`nz-tag`}]}],raw:'---\ntype: Theme\norder: 2\ntitle: Style Tools\n---\n\nng-alain builds a set of style tools for size, spacing, color, and more based on Ant Design.\n\n> Install [ng-alain snippets](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode) plugin in VSCode for intellisense these class names.\n\n## Spacing\n\nng-alain believes that these styles tool only using in the content area. Built on the design principles developed by Ant Design, A spacing width is based on `8px` as a reference unit, and derived from three rule sizes.\n\n| Name | Formula | Size | Description |\n| ---- | --- | --- | --- |\n| `xs` | $gutter / 2 | `4px` | Smaller |\n| `sm` | $gutter | `8px` | Small |\n| `md` | $gutter *2 | `16px` | Medium |\n| `lg` | $gutter* 3 | `24px` | Large |\n| `xl` | $gutter *4 | `32px` | Extra Large |\n| `xxl` | $gutter* 6 | `48px` | Oversized |\n\nAccording these rules, derived from `margin`，`padding`, and naming rules as follows:\n\n- Type: `padding`, `margin`\n- Direction(Optional): `top`, `right`, `bottom`, `left`, `x`(equal to `left`, `right`), `y`(equal to `top`, `bottom`)\n\n**Clean**\n\n```regex\n[<Type>p|m][<Direction>t|r|b|l|x|y]?0\n```\n\n**Name Rule**\n\n```regex\n[<Type>p|m][<Direction>t|r|b|l|x|y]?-[<Size>sm|md|lg]\n```\n\nDemo:\n\n```css\n.p-sm { padding: 8px !important; }\n.pt-sm { padding-top: 8px !important; }\n.m-sm { margin: 16px !important; }\n.mt-md { margin-top: 16px !important; }\n\n.p0 { padding: 0 !important; }\n```\n\n## Color\n\nAnt Design does not have a button color, but is based on visual effects. The default is daybreak blue, for example: button type `primary` of `nz-button`.\n\nng-alain still does not break this rule, building a set of color classes for text and background based on the [color](//ant.design/docs/spec/colors) section.\n\n| Name | Primary Color | Description |\n| ---- | --- | --- |\n| `red` | <div style="color:#fff;background-color:#f5222d;">#f5222d</div> | Dust Red: Fighting, unrestrained |\n| `volcano` | <div style="color:#fff;background-color:#fa541c;">#fa541c</div> | Volcano: Eye-catching |\n| `orange` | <div style="color:#fff;background-color:#fa8c16;">#fa8c16</div> | Sunset Orange: Warm and cheerful |\n| `gold` | <div style="color:#fff;background-color:#faad14;">#faad14</div> | Calendula Gold: Vital and active |\n| `yellow` | <div style="color:#fff;background-color:#fadb14;">#fadb14</div> | Sunrise Yellow: Birth, sunshine |\n| `lime` | <div style="color:#fff;background-color:#a0d911;">#a0d911</div> | Lime: Natural, vital |\n| `green` | <div style="color:#fff;background-color:#52c41a;">#f5222d</div> | Polar Green: Health, innovation |\n| `cyan` | <div style="color:#fff;background-color:#13c2c2;">#13c2c2</div> | Cyan: Hope, strong |\n| `blue` | <div style="color:#fff;background-color:#1890ff;">#1890ff</div> | Daybreak Blue: Inclusive, technology, Pratt & Whitney |\n| `geekblue` | <div style="color:#fff;background-color:#2f54eb;">#2f54eb</div> | Geek Blue: Explore and delve into |\n| `purple` | <div style="color:#fff;background-color:#722ed1;">#722ed1</div> | Golden Purple: Elegant, romantic |\n| `magenta` | <div style="color:#fff;background-color:#eb2f96;">#eb2f96</div> | Magenta: Smooth, neutral |\n\nAnt Design\'s base color palette totals 120 colors, including 12 primary colors and their derivative colors. These colors can basically include the need for color in background applications design.\n\n**Category**\n\n| Name | Color Size |\n| ---- | --- |\n| `light` | 5 |\n| `normal` | 6 |\n| `dark` | 7 |\n\n**Name Rule**\n\n```regex\n[<Type>text|bg]-[<Color Name>red|volcano|orange|gold|yellow|lime|green|cyan|blue|geekblue|purple|magenta|grey](-[light|dark])?(-h)?\n```\n\n> `normal` itself is the basic color, so it can be ignored\n> `grey` is very often used, so add extra `grey-light`, `grey-darker` alias to indicate depth\n\nDEMO:\n\n```less\n// Text color\n.text-red-light { color: #fabeb9 !important; }\n.text-red { color: #f04134 !important; }\n.text-red-dark { color: #a31837 !important; }\n\n// background-color color\n.bg-red-light { background-color: #fabeb9 !important; }\n.bg-red { background-color: #f04134 !important; }\n.bg-red-dark { background-color: #a31837 !important; }\n\n// hover color\n.bg-red-light-h { &:hover { background-color: #fabeb9 !important; } }\n.bg-red-h { &:hover { background-color: #f04134 !important; } }\n.bg-red-dark-h { &:hover { background-color: #a31837 !important; } }\n```\n\n### Aliase\n\n| Aliase | Color Name |\n| ---- | --- |\n| `primary` | `@blue-6` <div style="color:#fff;background-color:#1890ff;">#1890ff</div> |\n| `success` | `@green-6` <div style="color:#fff;background-color:#52c41a;">#52c41a</div> |\n| `error` | `@red-5` <div style="color:#fff;background-color:#ff4d4f;">#ff4d4f</div> |\n| `warning` | `@gold-6` <div style="color:#fff;background-color:#faad14;">#faad14</div> |\n| `info` | `@blue-6` <div style="color:#fff;background-color:#1890ff;">#1890ff</div> |\n| `processing` | `@blue-6` <div style="color:#fff;background-color:#1890ff;">#1890ff</div> |\n| `highlight` | `@red-5` <div style="color:#fff;background-color:#ff4d4f;">#ff4d4f</div> |\n| `normal` | `#d9d9d9` <div style="color:#fff;background-color:#d9d9d9;">#d9d9d9</div> |\n\nDEMO:\n\n```less\n// Text color\n.text-error-light { color: #fabeb9 !important; }\n.text-error { color: #f04134 !important; }\n.text-error-dark { color: #a31837 !important; }\n\n// background-color color\n.bg-error-light { background-color: #fabeb9 !important; }\n.bg-error { background-color: #f04134 !important; }\n.bg-error-dark { background-color: #a31837 !important; }\n\n// hover color\n.bg-error-light-h { &:hover { background-color: #fabeb9 !important; } }\n.bg-error-h { &:hover { background-color: #f04134 !important; } }\n.bg-error-dark-h { &:hover { background-color: #a31837 !important; } }\n```\n\n**Full Colors**\n\nYou can use `@enable-all-colors: true` to turn on all 120 color rules.\n\n```less\n.text-red-1 { color: #fff1f0 !important; }\n.text-red-6 { color: #f04134 !important; }\n.text-red-10 { color: #5c0011 !important; }\n\n.bg-red-6 { color: #f04134 !important; }\n.bg-red-6-h { color: #f04134 !important; }\n```\n\n## Clearfix\n\nClear floats `.clearfix`.\n\n## Display\n\n| Aliase | CSS |\n| ---- | --- |\n| `d-none` | `display: none` |\n| `d-block` | `display: block` |\n| `d-inline-block` | `display: inline-block` |\n| `d-flex` | `display: flex` |\n| `d-inline-flex` | `display: inline-flex` |\n| `justify-content-start` | `justify-content: flex-start` |\n| `justify-content-end` | `justify-content: flex-end` |\n| `justify-content-center` | `justify-content: center` |\n| `justify-content-between` | `justify-content: space-between` |\n| `justify-content-around` | `justify-content: space-around` |\n| `align-items-start` | `align-items: flex-start` |\n| `align-items-end` | `align-items: flex-end` |\n| `align-items-center` | `align-items: center` |\n| `align-items-baseline` | `align-items: baseline` |\n| `align-items-stretch` | `align-items: stretch` |\n| `align-content-start` | `align-content: flex-start` |\n| `align-content-end` | `align-content: flex-end` |\n| `align-content-center` | `align-content: center` |\n| `align-content-between` | `align-content: space-between` |\n| `align-content-around` | `align-content: space-around` |\n| `align-content-stretch` | `align-content: stretch` |\n| `align-self-auto` | `align-self: auto` |\n| `align-self-start` | `align-self: flex-start` |\n| `align-self-end` | `align-self: flex-end` |\n| `align-self-center` | `align-self: center` |\n| `align-self-baseline` | `align-self: baseline` |\n| `align-self-stretch` | `align-self: stretch` |\n| `flex-center` | `display: flex; align-items: center;` |\n| `flex-center-between` | `display: flex; align-items: center; align-content: space-between;` |\n\n## Position\n\n| Name | Description |\n| ---- | --- |\n| `overflow-auto` | `overflow: auto` |\n| `overflow-hidden` | `overflow: hidden` |\n| `fixed-top` | Fixed top |\n| `fixed-bottom` | Fixed bottom |\n\n## Text\n\n### Sizing\n\nAnt Design is based on `14px`.\n\n| Name | Description |\n| ---- | --- |\n| `text-xs` | `12px` |\n| `text-sm` | `14px` |\n| `text-md` | `16px` |\n| `text-lg` | `18px` |\n| `text-xl` | `22px` |\n\n### Alignment\n\n| Name | Description |\n| ---- | --- |\n| `text-left` | Text left |\n| `text-center` | Text center |\n| `text-right` | Text right |\n\n### Overflow\n\n> The container must be `display: inline-block` or `display: block`.\n\n| Name | Description |\n| ---- | --- |\n| `text-nowrap` | Outputs a single line |\n| `text-truncate` | Truncate string with ellipsis |\n\n### Transformation\n\n| Name | Description |\n| ---- | --- |\n| `text-lowercase` | Lowercase of text |\n| `text-uppercase` | Uppercase of text |\n| `text-capitalize` | Capitalize of text |\n| `text-deleted` | Deleted line |\n\n### Weight and italics\n\n| Name | Description |\n| ---- | --- |\n| `font-weight-normal` | `font-weight: normal` |\n| `font-weight-bold` | `font-weight: 700` |\n| `font-italic` | `font-style: italic` |\n\n### Other\n\n| Name | Description |\n| ---- | --- |\n| `text-hover` | `*:hover { color: @primary-color; }` |\n| `disabled` | Disabled |\n\n## Borders\n\n### Border\n\n| Name | Description |\n| ---- | --- |\n| `border` | `border: 1px solid #f5f5f5 !important;` |\n| `border-0` | `border: 0 !important;` |\n| `border-top-0` | `border-top: 0 !important;` |\n| `border-right-0` | `border-right: 0 !important;` |\n| `border-bottom-0` | `border-bottom: 0 !important;` |\n| `border-left-0` | `border-left: 0 !important;` |\n\n### Color\n\nSupports all color & aliase of [color section](/theme/tools#color), such as `border-red`, `border-success`.\n\n### Rounded\n\n| Name | Description |\n| ---- | --- |\n| `rounded-0` | `border-radius: 0;` |\n| `rounded-circle` | `border-radius: 50%;` |\n| `rounded-sm` | `border-radius: 2px;` |\n| `rounded-md` | `border-radius: 4px;` |\n| `rounded-lg` | `border-radius: 6px;` |\n\n## Width\n\n| Name | Description |\n| ---- | --- |\n| `width-sm` | `160px` |\n| `width-md` | `240px` |\n| `width-lg` | `320px` |\n| `width-[0-10]` | `0%-100%` |\n\n## Responsive\n\nLike Bootstrap responsive rules, all apply `hidden-xs` classes are hidden when screen less than `480px`.\n\n| Name | Screen |\n| ---- | --- |\n| `hidden-xs` | <480px |\n| `hidden-sm` | <768px |\n| `hidden-md` | <992px |\n| `hidden-lg` | <1200px |\n| `hidden-pc` | <768px |\n| `hidden-mobile` | >768px |\n\n## Rotate\n\n```css\n.rotate-[360 / 15]\n```\n\nDEMO:\n\n```css\n// Rotate 15 degrees\n.rotate-15\n// Rotate 90 degrees\n.rotate-90\n// Rotate 360 degrees\n.rotate-360\n```\n\n## Other\n\n| Name | Description |\n| ---- | --- |\n| `block-center` | `margin: 0 auto` |\n| `point` | `cursor: pointer` |\n| `no-data` | No result |\n| `no-resize` | Setting does not allow adjustment elements |\n| `bg-center` | Background image is vertically centered |\n| `scrollbar` | Custom scrollbar for a div |\n| `color-weak` | Weak mode |\n\n## Widgets\n\n### Masonry\n\nOnline [DEMO](https://ng-alain.surge.sh/#/style/gridmasonry)。\n\n| Name | Description |\n| ---- | --- |\n| `row-masonry` | Rows |\n| `row-masonry-{xs|sm|md|lg|xl}-{1-10}` | Rows, Responsive style |\n| `col-masonry` | Columns |\n\n## ng-zorro\n\n### nz-card\n\n| Name | Description |\n| ---- | --- |\n| `ant-card__body-nopadding` | Force body without spacing |\n\n### nz-modal\n\n| Name | Description |\n| ---- | --- |\n| `modal-{sm|md|lg|xl}` | Set size of modal, `wrapClassName: \'modal-lg\'` |\n| `modal-body-nopadding` | Without padding in body element |\n| `modal-header` | Use html template to custom modal, [DEMO](https://ng-alain.surge.sh/#/extras/poi) |\n| `modal-footer` | Use html template to custom modal, [DEMO](https://ng-alain.surge.sh/#/extras/poi) |\n\n### nz-table\n\n| Name | Description |\n| ---- | --- |\n| `ant-table-rep__title` | Title |\n| `ant-table-rep__hide-header-footer` | Show title or bottom when mobile screen |\n\n[comment]: <demo(table-rep)>\n\n### nz-tag\n\n| Name | Description |\n| ---- | --- |\n| `ant-tag__plus` | Add button style |'},"zh-CN":{meta:{order:2,title:`样式工具类`,description:`ng-alain 在 Ant Design 的基础上生产一套尺寸、间距、颜色等工具类。在 VSCode 安装 ng-alain snippets 插件，可以对所有工具集样式名称的智能提醒。ng-alain 认为这些工具类只会运用在内容区域，且秉承 Ant Design 的设计价值观，间距宽度是以 8...`,group:`Theme`,path:`packages/theme/docs/tools.zh-CN.md`,url:`/theme/tools/zh`},text:`<p>ng-alain \u5728 Ant Design \u7684\u57FA\u7840\u4E0A\u751F\u4EA7\u4E00\u5957\u5C3A\u5BF8\u3001\u95F4\u8DDD\u3001\u989C\u8272\u7B49\u5DE5\u5177\u7C7B\u3002</p>
<blockquote>
<p>\u5728 VSCode \u5B89\u88C5 <a href="https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode" target="_blank" rel="noopener">ng-alain snippets</a> \u63D2\u4EF6\uFF0C\u53EF\u4EE5\u5BF9\u6240\u6709\u5DE5\u5177\u96C6\u6837\u5F0F\u540D\u79F0\u7684\u667A\u80FD\u63D0\u9192\u3002</p>
</blockquote>
<h2 id="\u95F4\u8DDD"><a class="lake-link"><i data-anchor="\u95F4\u8DDD"></i></a>\u95F4\u8DDD</h2><p>ng-alain \u8BA4\u4E3A\u8FD9\u4E9B\u5DE5\u5177\u7C7B\u53EA\u4F1A\u8FD0\u7528\u5728\u5185\u5BB9\u533A\u57DF\uFF0C\u4E14\u79C9\u627F Ant Design \u7684\u8BBE\u8BA1\u4EF7\u503C\u89C2\uFF0C\u95F4\u8DDD\u5BBD\u5EA6\u662F\u4EE5 <code>8px</code> \u4E3A\u4E00\u4E2A\u57FA\u51C6\u5355\u4F4D\uFF0C\u5E76\u884D\u751F\u51FA\u4E09\u4E2A\u5C3A\u5BF8\uFF0C\u5206\u522B\u4E3A\uFF1A</p>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u516C\u5F0F</th>
<th>\u5C3A\u5BF8</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td><code>xs</code></td>
<td>$gutter / 2</td>
<td><code>4px</code></td>
<td>\u8D85\u5C0F\u53F7</td>
</tr>
<tr>
<td><code>sm</code></td>
<td>$gutter</td>
<td><code>8px</code></td>
<td>\u5C0F\u53F7</td>
</tr>
<tr>
<td><code>md</code></td>
<td>$gutter *2</td>
<td><code>16px</code></td>
<td>\u4E2D\u53F7</td>
</tr>
<tr>
<td><code>lg</code></td>
<td>$gutter* 3</td>
<td><code>24px</code></td>
<td>\u5927\u53F7</td>
</tr>
<tr>
<td><code>xl</code></td>
<td>$gutter *4</td>
<td><code>32px</code></td>
<td>\u7279\u5927\u53F7</td>
</tr>
<tr>
<td><code>xxl</code></td>
<td>$gutter* 6</td>
<td><code>48px</code></td>
<td>\u8D85\u5927\u53F7</td>
</tr>
</tbody></table>
<p>\u4F9D\u8FD9\u4E9B\u89C4\u5219\uFF0C\u884D\u751F\u51FA <code>margin</code>\u3001<code>padding</code>\uFF0C\u5176\u547D\u540D\u89C4\u5219\u5982\u4E0B\uFF1A</p>
<ul>
<li>\u7C7B\u578B\uFF1A<code>padding</code>\u3001<code>margin</code></li>
<li>\u65B9\u5411\uFF08\u53EF\u9009\uFF09\uFF1A<code>top</code>\u3001<code>right</code>\u3001<code>bottom</code>\u3001<code>left</code>\u3001<code>x</code>\uFF08\u76F8\u5F53\u4E8E <code>left</code>\u3001<code>right</code>\uFF09\u3001<code>y</code>\uFF08\u76F8\u5F53\u4E8E <code>top</code>\u3001<code>bottom</code>\uFF09</li>
</ul>
<p><strong>\u6D88\u9664</strong></p>
<pre><code class="language-regex">[&lt;\u7C7B\u578B&gt;p|m][&lt;\u65B9\u5411&gt;t|r|b|l|x|y]?0
</code></pre>
<p><strong>\u547D\u540D\u683C\u5F0F</strong></p>
<pre><code class="language-regex">[&lt;\u7C7B\u578B&gt;p|m][&lt;\u65B9\u5411&gt;t|r|b|l|x|y]?-[&lt;\u5C3A\u5BF8&gt;sm|md|lg]
</code></pre>
<p>\u793A\u4F8B\uFF1A</p>
<pre><code class="language-css">.p-sm &#123; padding: 8px !important; &#125;
.pt-sm &#123; padding-top: 8px !important; &#125;
.m-sm &#123; margin: 16px !important; &#125;
.mt-md &#123; margin-top: 16px !important; &#125;

.p0 &#123; padding: 0 !important; &#125;
</code></pre>
<h2 id="\u8272\u5F69"><a class="lake-link"><i data-anchor="\u8272\u5F69"></i></a>\u8272\u5F69</h2><p>Ant Design \u5E76\u6CA1\u6709\u6309\u94AE\u8272\u8FD9\u4E00\u8BF4\uFF0C\u800C\u662F\u4EE5\u89C6\u89C9\u6548\u679C\u4E3A\u57FA\u51C6\u3002\u9ED8\u8BA4\u662F\u84DD\u8272\u7CFB\uFF08\u62C2\u6653\u84DD\uFF09\uFF0C\u4F8B\u5982\uFF1A<code>nz-button</code> \u7684\u6309\u94AE\u7C7B\u578B <code>primary</code>\u3002</p>
<p>\u800C ng-alain \u4F9D\u7136\u4E0D\u4F1A\u7834\u574F\u8FD9\u79CD\u89C4\u5219\uFF0C\u4F46\u4F9D <a href="//ant.design/docs/spec/colors-cn" target="_blank" rel="noopener">\u8272\u5F69</a> \u7AE0\u8282\uFF0C\u4EA7\u751F\u4E86\u4E00\u79CD\u8FD0\u7528\u4E8E\u6587\u672C\u3001\u80CC\u666F\u7684\u8272\u7CFB\u7C7B\u3002</p>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u57FA\u672C\u8272</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td><code>red</code></td>
<td><div style="color:#fff;background-color:#f5222d;">#f5222d</div></td>
<td>\u8584\u66AE\uFF1A\u6597\u5FD7\u3001\u5954\u653E</td>
</tr>
<tr>
<td><code>volcano</code></td>
<td><div style="color:#fff;background-color:#fa541c;">#fa541c</div></td>
<td>\u706B\u5C71\uFF1A\u9192\u76EE\u3001\u6F8E\u6E43</td>
</tr>
<tr>
<td><code>orange</code></td>
<td><div style="color:#fff;background-color:#fa8c16;">#fa8c16</div></td>
<td>\u65E5\u66AE\uFF1A\u6E29\u6696\u3001\u6B22\u5FEB</td>
</tr>
<tr>
<td><code>gold</code></td>
<td><div style="color:#fff;background-color:#faad14;">#faad14</div></td>
<td>\u91D1\u76CF\u82B1\uFF1A\u6D3B\u529B\u3001\u79EF\u6781</td>
</tr>
<tr>
<td><code>yellow</code></td>
<td><div style="color:#fff;background-color:#fadb14;">#fadb14</div></td>
<td>\u65E5\u51FA\uFF1A\u51FA\u751F\u3001\u9633\u5149</td>
</tr>
<tr>
<td><code>lime</code></td>
<td><div style="color:#fff;background-color:#a0d911;">#a0d911</div></td>
<td>\u9752\u67E0\uFF1A\u81EA\u7136\u3001\u751F\u673A</td>
</tr>
<tr>
<td><code>green</code></td>
<td><div style="color:#fff;background-color:#52c41a;">#f5222d</div></td>
<td>\u6781\u5149\u7EFF\uFF1A\u5065\u5EB7\u3001\u521B\u65B0</td>
</tr>
<tr>
<td><code>cyan</code></td>
<td><div style="color:#fff;background-color:#13c2c2;">#13c2c2</div></td>
<td>\u660E\u9752\uFF1A\u5E0C\u671B\u3001\u575A\u5F3A</td>
</tr>
<tr>
<td><code>blue</code></td>
<td><div style="color:#fff;background-color:#1890ff;">#1890ff</div></td>
<td>\u62C2\u6653\u84DD\uFF1A\u5305\u5BB9\u3001\u79D1\u6280\u3001\u666E\u60E0</td>
</tr>
<tr>
<td><code>geekblue</code></td>
<td><div style="color:#fff;background-color:#2f54eb;">#2f54eb</div></td>
<td>\u6781\u5BA2\u84DD\uFF1A\u63A2\u7D22\u3001\u94BB\u7814</td>
</tr>
<tr>
<td><code>purple</code></td>
<td><div style="color:#fff;background-color:#722ed1;">#722ed1</div></td>
<td>\u9171\u7D2B\uFF1A\u4F18\u96C5\u3001\u6D6A\u6F2B</td>
</tr>
<tr>
<td><code>magenta</code></td>
<td><div style="color:#fff;background-color:#eb2f96;">#eb2f96</div></td>
<td>\u6CD5\u5F0F\u6D0B\u7EA2\uFF1A\u5E73\u7A33\u3001\u4E2D\u6027</td>
</tr>
</tbody></table>
<p>Ant Design \u7684\u57FA\u7840\u8272\u677F\u5171\u8BA1 120 \u4E2A\u989C\u8272\uFF0C\u5305\u542B 12 \u4E2A\u4E3B\u8272\u4EE5\u53CA\u884D\u751F\u8272\u3002\u8FD9\u4E9B\u989C\u8272\u57FA\u672C\u53EF\u4EE5\u6EE1\u8DB3\u4E2D\u540E\u53F0\u8BBE\u8BA1\u4E2D\u5BF9\u4E8E\u989C\u8272\u7684\u9700\u6C42\u3002</p>
<p><strong>\u5206\u7C7B</strong></p>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8272\u53F7</th>
</tr>
</thead>
<tbody><tr>
<td><code>light</code></td>
<td>5\u53F7</td>
</tr>
<tr>
<td><code>normal</code></td>
<td>6\u53F7</td>
</tr>
<tr>
<td><code>dark</code></td>
<td>7\u53F7</td>
</tr>
</tbody></table>
<p><strong>\u547D\u540D\u683C\u5F0F</strong></p>
<pre><code class="language-regex">[&lt;\u7C7B\u578B&gt;text|bg]-[&lt;\u8272\u5F69\u540D&gt;red|volcano|orange|gold|yellow|lime|green|cyan|blue|geekblue|purple|magenta|grey](-[light|dark])?(-h)?
</code></pre>
<blockquote>
<p><code>normal</code> \u672C\u8EAB\u5373\u662F\u57FA\u672C\u8272\uFF0C\u6240\u4EE5\u53EF\u4EE5\u88AB\u5FFD\u7565
<code>grey</code> \u53EF\u80FD\u4F1A\u66F4\u5E38\u7528\uFF0C\u6240\u4EE5\u989D\u5916\u589E\u52A0 <code>grey-lighter</code>\u3001<code>grey-darker</code> \u522B\u540D\u8868\u793A\u6DF1\u5EA6</p>
</blockquote>
<p>\u793A\u4F8B\uFF1A</p>
<pre><code class="language-less">// Text color
.text-red-light &#123; color: #fabeb9 !important; &#125;
.text-red &#123; color: #f04134 !important; &#125;
.text-red-dark &#123; color: #a31837 !important; &#125;

// background-color color
.bg-red-light &#123; background-color: #fabeb9 !important; &#125;
.bg-red &#123; background-color: #f04134 !important; &#125;
.bg-red-dark &#123; background-color: #a31837 !important; &#125;

// hover color
.bg-red-light-h &#123; &amp;:hover &#123; background-color: #fabeb9 !important; &#125; &#125;
.bg-red-h &#123; &amp;:hover &#123; background-color: #f04134 !important; &#125; &#125;
.bg-red-dark-h &#123; &amp;:hover &#123; background-color: #a31837 !important; &#125; &#125;
</code></pre>
<h3 id="\u522B\u540D"><a class="lake-link"><i data-anchor="\u522B\u540D"></i></a>\u522B\u540D</h3><table>
<thead>
<tr>
<th>\u522B\u540D</th>
<th>\u8272\u7CFB</th>
</tr>
</thead>
<tbody><tr>
<td><code>primary</code></td>
<td><code>&#64;blue-6</code> <div style="color:#fff;background-color:#1890ff;">#1890ff</div></td>
</tr>
<tr>
<td><code>success</code></td>
<td><code>&#64;green-6</code> <div style="color:#fff;background-color:#52c41a;">#52c41a</div></td>
</tr>
<tr>
<td><code>error</code></td>
<td><code>&#64;red-5</code> <div style="color:#fff;background-color:#ff4d4f;">#ff4d4f</div></td>
</tr>
<tr>
<td><code>warning</code></td>
<td><code>&#64;gold-6</code> <div style="color:#fff;background-color:#faad14;">#faad14</div></td>
</tr>
<tr>
<td><code>info</code></td>
<td><code>&#64;blue-6</code> <div style="color:#fff;background-color:#1890ff;">#1890ff</div></td>
</tr>
<tr>
<td><code>processing</code></td>
<td><code>&#64;blue-6</code> <div style="color:#fff;background-color:#1890ff;">#1890ff</div></td>
</tr>
<tr>
<td><code>highlight</code></td>
<td><code>&#64;red-5</code> <div style="color:#fff;background-color:#ff4d4f;">#ff4d4f</div></td>
</tr>
<tr>
<td><code>normal</code></td>
<td><code>#d9d9d9</code> <div style="color:#fff;background-color:#d9d9d9;">#d9d9d9</div></td>
</tr>
</tbody></table>
<p>\u793A\u4F8B\uFF1A</p>
<pre><code class="language-less">// Text color
.text-error-light &#123; color: #fabeb9 !important; &#125;
.text-error &#123; color: #f04134 !important; &#125;
.text-error-dark &#123; color: #a31837 !important; &#125;

// background-color color
.bg-error-light &#123; background-color: #fabeb9 !important; &#125;
.bg-error &#123; background-color: #f04134 !important; &#125;
.bg-error-dark &#123; background-color: #a31837 !important; &#125;

// hover color
.bg-error-light-h &#123; &amp;:hover &#123; background-color: #fabeb9 !important; &#125; &#125;
.bg-error-h &#123; &amp;:hover &#123; background-color: #f04134 !important; &#125; &#125;
.bg-error-dark-h &#123; &amp;:hover &#123; background-color: #a31837 !important; &#125; &#125;
</code></pre>
<h3 id="\u5168\u91CF\u989C\u8272"><a class="lake-link"><i data-anchor="\u5168\u91CF\u989C\u8272"></i></a>\u5168\u91CF\u989C\u8272</h3><p>\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>&#64;enable-all-colors: true</code> \u6765\u5F00\u542F\u6240\u6709 120 \u4E2A\u989C\u8272\u7684\u89C4\u5219\u3002</p>
<pre><code class="language-less">.text-red-1 &#123; color: #fff1f0 !important; &#125;
.text-red-6 &#123; color: #f04134 !important; &#125;
.text-red-10 &#123; color: #5c0011 !important; &#125;

.bg-red-6 &#123; color: #f04134 !important; &#125;
.bg-red-6-h &#123; color: #f04134 !important; &#125;
</code></pre>
<h2 id="\u6E05\u9664\u6D6E\u52A8"><a class="lake-link"><i data-anchor="\u6E05\u9664\u6D6E\u52A8"></i></a>\u6E05\u9664\u6D6E\u52A8</h2><p>\u6E05\u9664\u6D6E\u52A8 <code>.clearfix</code>\u3002</p>
<h2 id="\u663E\u793A"><a class="lake-link"><i data-anchor="\u663E\u793A"></i></a>\u663E\u793A</h2><table>
<thead>
<tr>
<th>\u522B\u540D</th>
<th>CSS</th>
</tr>
</thead>
<tbody><tr>
<td><code>d-none</code></td>
<td><code>display: none</code></td>
</tr>
<tr>
<td><code>d-block</code></td>
<td><code>display: block</code></td>
</tr>
<tr>
<td><code>d-inline-block</code></td>
<td><code>display: inline-block</code></td>
</tr>
<tr>
<td><code>d-flex</code></td>
<td><code>display: flex</code></td>
</tr>
<tr>
<td><code>d-inline-flex</code></td>
<td><code>display: inline-flex</code></td>
</tr>
<tr>
<td><code>justify-content-start</code></td>
<td><code>justify-content: flex-start</code></td>
</tr>
<tr>
<td><code>justify-content-end</code></td>
<td><code>justify-content: flex-end</code></td>
</tr>
<tr>
<td><code>justify-content-center</code></td>
<td><code>justify-content: center</code></td>
</tr>
<tr>
<td><code>justify-content-between</code></td>
<td><code>justify-content: space-between</code></td>
</tr>
<tr>
<td><code>justify-content-around</code></td>
<td><code>justify-content: space-around</code></td>
</tr>
<tr>
<td><code>align-items-start</code></td>
<td><code>align-items: flex-start</code></td>
</tr>
<tr>
<td><code>align-items-end</code></td>
<td><code>align-items: flex-end</code></td>
</tr>
<tr>
<td><code>align-items-center</code></td>
<td><code>align-items: center</code></td>
</tr>
<tr>
<td><code>align-items-baseline</code></td>
<td><code>align-items: baseline</code></td>
</tr>
<tr>
<td><code>align-items-stretch</code></td>
<td><code>align-items: stretch</code></td>
</tr>
<tr>
<td><code>align-content-start</code></td>
<td><code>align-content: flex-start</code></td>
</tr>
<tr>
<td><code>align-content-end</code></td>
<td><code>align-content: flex-end</code></td>
</tr>
<tr>
<td><code>align-content-center</code></td>
<td><code>align-content: center</code></td>
</tr>
<tr>
<td><code>align-content-between</code></td>
<td><code>align-content: space-between</code></td>
</tr>
<tr>
<td><code>align-content-around</code></td>
<td><code>align-content: space-around</code></td>
</tr>
<tr>
<td><code>align-content-stretch</code></td>
<td><code>align-content: stretch</code></td>
</tr>
<tr>
<td><code>align-self-auto</code></td>
<td><code>align-self: auto</code></td>
</tr>
<tr>
<td><code>align-self-start</code></td>
<td><code>align-self: flex-start</code></td>
</tr>
<tr>
<td><code>align-self-end</code></td>
<td><code>align-self: flex-end</code></td>
</tr>
<tr>
<td><code>align-self-center</code></td>
<td><code>align-self: center</code></td>
</tr>
<tr>
<td><code>align-self-baseline</code></td>
<td><code>align-self: baseline</code></td>
</tr>
<tr>
<td><code>align-self-stretch</code></td>
<td><code>align-self: stretch</code></td>
</tr>
<tr>
<td><code>flex-center</code></td>
<td><code>display: flex; align-items: center;</code></td>
</tr>
<tr>
<td><code>flex-center-between</code></td>
<td><code>display: flex; align-items: center; align-content: space-between;</code></td>
</tr>
</tbody></table>
<h2 id="\u4F4D\u7F6E"><a class="lake-link"><i data-anchor="\u4F4D\u7F6E"></i></a>\u4F4D\u7F6E</h2><table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td><code>overflow-auto</code></td>
<td><code>overflow: auto</code></td>
</tr>
<tr>
<td><code>overflow-hidden</code></td>
<td><code>overflow: hidden</code></td>
</tr>
<tr>
<td><code>fixed-top</code></td>
<td>\u56FA\u5B9A\u9876\u90E8</td>
</tr>
<tr>
<td><code>fixed-bottom</code></td>
<td>\u56FA\u5B9A\u5E95\u90E8</td>
</tr>
</tbody></table>
<h2 id="\u6587\u672C"><a class="lake-link"><i data-anchor="\u6587\u672C"></i></a>\u6587\u672C</h2><h3 id="\u5927\u5C0F"><a class="lake-link"><i data-anchor="\u5927\u5C0F"></i></a>\u5927\u5C0F</h3><p>Ant Design \u662F\u4EE5 <code>14px</code> \u4E3A\u57FA\u51C6\u5B57\u53F7\u3002</p>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td><code>text-xs</code></td>
<td><code>12px</code></td>
</tr>
<tr>
<td><code>text-sm</code></td>
<td><code>14px</code></td>
</tr>
<tr>
<td><code>text-md</code></td>
<td><code>16px</code></td>
</tr>
<tr>
<td><code>text-lg</code></td>
<td><code>18px</code></td>
</tr>
<tr>
<td><code>text-xl</code></td>
<td><code>22px</code></td>
</tr>
</tbody></table>
<h3 id="\u5BF9\u9F50"><a class="lake-link"><i data-anchor="\u5BF9\u9F50"></i></a>\u5BF9\u9F50</h3><table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td><code>text-left</code></td>
<td>\u6587\u672C\u5C45\u5DE6</td>
</tr>
<tr>
<td><code>text-center</code></td>
<td>\u6587\u672C\u5C45\u4E2D</td>
</tr>
<tr>
<td><code>text-right</code></td>
<td>\u6587\u672C\u5C45\u53F3</td>
</tr>
</tbody></table>
<h3 id="\u6EA2\u51FA"><a class="lake-link"><i data-anchor="\u6EA2\u51FA"></i></a>\u6EA2\u51FA</h3><blockquote>
<p>\u5BB9\u5668\u5FC5\u987B\u662F <code>display: inline-block</code> \u6216 <code>display: block</code>\u3002</p>
</blockquote>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td><code>text-nowrap</code></td>
<td>\u6587\u672C\u8D85\u51FA\u4E0D\u6362\u884C</td>
</tr>
<tr>
<td><code>text-truncate</code></td>
<td>\u6587\u672C\u8D85\u51FA\u622A\u53D6\u5E76\u52A0 <code>...</code></td>
</tr>
</tbody></table>
<h3 id="transformation"><a class="lake-link"><i data-anchor="transformation"></i></a>Transformation</h3><table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td><code>text-lowercase</code></td>
<td>\u5C0F\u5199\u6587\u672C</td>
</tr>
<tr>
<td><code>text-uppercase</code></td>
<td>\u5927\u5199\u6587\u672C</td>
</tr>
<tr>
<td><code>text-capitalize</code></td>
<td>\u9996\u8BCD\u5927\u5199</td>
</tr>
<tr>
<td><code>text-deleted</code></td>
<td>\u5220\u9664\u7EBF</td>
</tr>
</tbody></table>
<h3 id="weight_and_italics"><a class="lake-link"><i data-anchor="weight_and_italics"></i></a>Weight and italics</h3><table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td><code>font-weight-normal</code></td>
<td><code>font-weight: normal</code></td>
</tr>
<tr>
<td><code>font-weight-bold</code></td>
<td><code>font-weight: 700</code></td>
</tr>
<tr>
<td><code>font-italic</code></td>
<td><code>font-style: italic</code></td>
</tr>
</tbody></table>
<h3 id="other"><a class="lake-link"><i data-anchor="other"></i></a>Other</h3><table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td><code>text-hover</code></td>
<td><code>*:hover &#123; color: &#64;primary-color; &#125;</code></td>
</tr>
<tr>
<td><code>disabled</code></td>
<td>\u7981\u6B62</td>
</tr>
</tbody></table>
<h2 id="borders"><a class="lake-link"><i data-anchor="borders"></i></a>Borders</h2><h3 id="\u8FB9\u6846"><a class="lake-link"><i data-anchor="\u8FB9\u6846"></i></a>\u8FB9\u6846</h3><table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td><code>border</code></td>
<td><code>border: 1px solid #f5f5f5 !important;</code></td>
</tr>
<tr>
<td><code>border-0</code></td>
<td><code>border: 0 !important;</code></td>
</tr>
<tr>
<td><code>border-top-0</code></td>
<td><code>border-top: 0 !important;</code></td>
</tr>
<tr>
<td><code>border-right-0</code></td>
<td><code>border-right: 0 !important;</code></td>
</tr>
<tr>
<td><code>border-bottom-0</code></td>
<td><code>border-bottom: 0 !important;</code></td>
</tr>
<tr>
<td><code>border-left-0</code></td>
<td><code>border-left: 0 !important;</code></td>
</tr>
</tbody></table>
<h3 id="\u989C\u8272"><a class="lake-link"><i data-anchor="\u989C\u8272"></i></a>\u989C\u8272</h3><p>\u652F\u6301<a href="/theme/tools#%E8%89%B2%E5%BD%A9">\u8272\u5F69\u7AE0\u8282</a>\u6240\u6709\u7684\u8272\u7CFB&amp;\u522B\u540D\u5199\u6CD5\uFF0C\u4F8B\u5982\uFF1A<code>border-red</code>\u3001<code>border-success</code>\u3002</p>
<h3 id="\u5706\u89D2"><a class="lake-link"><i data-anchor="\u5706\u89D2"></i></a>\u5706\u89D2</h3><table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td><code>rounded-0</code></td>
<td><code>border-radius: 0;</code></td>
</tr>
<tr>
<td><code>rounded-circle</code></td>
<td><code>border-radius: 50%;</code></td>
</tr>
<tr>
<td><code>rounded-sm</code></td>
<td><code>border-radius: 2px;</code></td>
</tr>
<tr>
<td><code>rounded-md</code></td>
<td><code>border-radius: 4px;</code></td>
</tr>
<tr>
<td><code>rounded-lg</code></td>
<td><code>border-radius: 6px;</code></td>
</tr>
</tbody></table>
<h2 id="width"><a class="lake-link"><i data-anchor="width"></i></a>Width</h2><table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td><code>width-sm</code></td>
<td><code>160px</code></td>
</tr>
<tr>
<td><code>width-md</code></td>
<td><code>240px</code></td>
</tr>
<tr>
<td><code>width-lg</code></td>
<td><code>320px</code></td>
</tr>
<tr>
<td><code>width-[0-10]</code></td>
<td><code>0%-100%</code></td>
</tr>
</tbody></table>
<h2 id="responsive"><a class="lake-link"><i data-anchor="responsive"></i></a>Responsive</h2><p>\u7C7B\u4F3C Bootstrap \u54CD\u5E94\u5F0F\u89C4\u5219\uFF0C\u5F53\u5C4F\u5E55\u5C0F\u4E8E <code>480px</code> \u65F6\u4F1A\u9690\u85CF\u6240\u6709 <code>hidden-xs</code> \u7C7B\u3002</p>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u5C4F\u5E55</th>
</tr>
</thead>
<tbody><tr>
<td><code>hidden-xs</code></td>
<td>&lt;480px</td>
</tr>
<tr>
<td><code>hidden-sm</code></td>
<td>&lt;768px</td>
</tr>
<tr>
<td><code>hidden-md</code></td>
<td>&lt;992px</td>
</tr>
<tr>
<td><code>hidden-lg</code></td>
<td>&lt;1200px</td>
</tr>
<tr>
<td><code>hidden-pc</code></td>
<td>&lt;768px</td>
</tr>
<tr>
<td><code>hidden-mobile</code></td>
<td>&gt;768px</td>
</tr>
</tbody></table>
<h2 id="\u65CB\u8F6C"><a class="lake-link"><i data-anchor="\u65CB\u8F6C"></i></a>\u65CB\u8F6C</h2><pre><code class="language-css">.rotate-[360 / 15]
</code></pre>
<p>\u4F8B\u5982\uFF1A</p>
<pre><code class="language-css">// \u65CB\u8F6C15\u5EA6
.rotate-15
// \u65CB\u8F6C90\u5EA6
.rotate-90
// \u65CB\u8F6C360\u5EA6
.rotate-360
</code></pre>
<h2 id="other"><a class="lake-link"><i data-anchor="other"></i></a>Other</h2><table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td><code>block-center</code></td>
<td><code>margin: 0 auto</code></td>
</tr>
<tr>
<td><code>point</code></td>
<td><code>cursor: pointer</code></td>
</tr>
<tr>
<td><code>no-data</code></td>
<td>\u7A7A\u6570\u636E\u884C</td>
</tr>
<tr>
<td><code>no-resize</code></td>
<td>\u8BBE\u7F6E\u4E0D\u5141\u8BB8\u8C03\u6574\u5143\u7D20</td>
</tr>
<tr>
<td><code>bg-center</code></td>
<td>\u80CC\u666F\u56FE\u5782\u76F4\u5C45\u4E2D</td>
</tr>
<tr>
<td><code>scrollbar</code></td>
<td>\u7F8E\u5316 div \u6EDA\u52A8\u6761</td>
</tr>
<tr>
<td><code>color-weak</code></td>
<td>\u8272\u5F31\u6A21\u5F0F</td>
</tr>
</tbody></table>
<h2 id="\u5C0F\u90E8\u4EF6"><a class="lake-link"><i data-anchor="\u5C0F\u90E8\u4EF6"></i></a>\u5C0F\u90E8\u4EF6</h2><h3 id="\u7011\u5E03\u6D41"><a class="lake-link"><i data-anchor="\u7011\u5E03\u6D41"></i></a>\u7011\u5E03\u6D41</h3><p>\u5728\u7EBF<a href="https://ng-alain.surge.sh/#/style/gridmasonry" target="_blank" rel="noopener">\u793A\u4F8B</a>\u3002</p>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td><code>row-masonry</code></td>
<td>\u884C</td>
</tr>
<tr>
<td>\`row-masonry-&#123;xs</td>
<td>sm</td>
</tr>
<tr>
<td><code>col-masonry</code></td>
<td>\u5217</td>
</tr>
</tbody></table>
<h2 id="ng-zorro"><a class="lake-link"><i data-anchor="ng-zorro"></i></a>ng-zorro</h2><h3 id="nz-card"><a class="lake-link"><i data-anchor="nz-card"></i></a>nz-card<label class="api-type-label component">component</label></h3><table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td><code>ant-card__body-nopadding</code></td>
<td>\u5F3A\u5236\u5185\u5BB9\u65E0\u95F4\u8DDD</td>
</tr>
</tbody></table>
<h3 id="nz-modal"><a class="lake-link"><i data-anchor="nz-modal"></i></a>nz-modal<label class="api-type-label component">component</label></h3><table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td>\`modal-&#123;sm</td>
<td>md</td>
</tr>
<tr>
<td><code>modal-body-nopadding</code></td>
<td>\u5185\u5BB9\u65E0\u5185\u8FB9\u8DDD</td>
</tr>
<tr>
<td><code>modal-header</code></td>
<td>\u81EA\u5B9A\u4E49Modal\u65F6\u975E\u5E38\u6709\u6548\uFF0C<a href="https://ng-alain.surge.sh/#/extras/poi" target="_blank" rel="noopener">DEMO</a></td>
</tr>
<tr>
<td><code>modal-footer</code></td>
<td>\u81EA\u5B9A\u4E49Modal\u65F6\u975E\u5E38\u6709\u6548\uFF0C<a href="https://ng-alain.surge.sh/#/extras/poi" target="_blank" rel="noopener">DEMO</a></td>
</tr>
</tbody></table>
<h3 id="nz-table"><a class="lake-link"><i data-anchor="nz-table"></i></a>nz-table<label class="api-type-label component">component</label></h3><table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td><code>ant-table-rep__title</code></td>
<td>\u6807\u9898</td>
</tr>
<tr>
<td><code>ant-table-rep__hide-header-footer</code></td>
<td>\u5C0F\u5C4F\u5E55\u65F6\u624D\u663E\u793A\u6807\u9898\u6216\u5E95\u90E8</td>
</tr>
</tbody></table>
<example-table-rep-index /><h3 id="nz-tag"><a class="lake-link"><i data-anchor="nz-tag"></i></a>nz-tag<label class="api-type-label component">component</label></h3><table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td><code>ant-tag__plus</code></td>
<td>\u589E\u52A0\u6309\u94AE\u6837\u5F0F</td>
</tr>
</tbody></table>
`,api:``,toc:[{id:`间距`,title:`间距`},{id:`色彩`,title:`色彩`,children:[{id:`别名`,title:`别名`},{id:`全量颜色`,title:`全量颜色`}]},{id:`清除浮动`,title:`清除浮动`},{id:`显示`,title:`显示`},{id:`位置`,title:`位置`},{id:`文本`,title:`文本`,children:[{id:`大小`,title:`大小`},{id:`对齐`,title:`对齐`},{id:`溢出`,title:`溢出`},{id:`transformation`,title:`Transformation`},{id:`weight_and_italics`,title:`Weight and italics`},{id:`other`,title:`Other`}]},{id:`borders`,title:`Borders`,children:[{id:`边框`,title:`边框`},{id:`颜色`,title:`颜色`},{id:`圆角`,title:`圆角`}]},{id:`width`,title:`Width`},{id:`responsive`,title:`Responsive`},{id:`旋转`,title:`旋转`},{id:`other`,title:`Other`},{id:`小部件`,title:`小部件`,children:[{id:`瀑布流`,title:`瀑布流`}]},{id:`ng-zorro`,title:`ng-zorro`,children:[{id:`nz-card`,title:`nz-card`},{id:`nz-modal`,title:`nz-modal`},{id:`nz-table`,title:`nz-table`},{id:`nz-tag`,title:`nz-tag`}]}],raw:'---\ntype: Theme\norder: 2\ntitle: 样式工具类\n---\n\nng-alain 在 Ant Design 的基础上生产一套尺寸、间距、颜色等工具类。\n\n> 在 VSCode 安装 [ng-alain snippets](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode) 插件，可以对所有工具集样式名称的智能提醒。\n\n## 间距\n\nng-alain 认为这些工具类只会运用在内容区域，且秉承 Ant Design 的设计价值观，间距宽度是以 `8px` 为一个基准单位，并衍生出三个尺寸，分别为：\n\n| 名称 | 公式 | 尺寸 | 说明 |\n| ---- | --- | --- | --- |\n| `xs` | $gutter / 2 | `4px` | 超小号 |\n| `sm` | $gutter | `8px` | 小号 |\n| `md` | $gutter *2 | `16px` | 中号 |\n| `lg` | $gutter* 3 | `24px` | 大号 |\n| `xl` | $gutter *4 | `32px` | 特大号 |\n| `xxl` | $gutter* 6 | `48px` | 超大号 |\n\n依这些规则，衍生出 `margin`、`padding`，其命名规则如下：\n\n- 类型：`padding`、`margin`\n- 方向（可选）：`top`、`right`、`bottom`、`left`、`x`（相当于 `left`、`right`）、`y`（相当于 `top`、`bottom`）\n\n**消除**\n\n```regex\n[<类型>p|m][<方向>t|r|b|l|x|y]?0\n```\n\n**命名格式**\n\n```regex\n[<类型>p|m][<方向>t|r|b|l|x|y]?-[<尺寸>sm|md|lg]\n```\n\n示例：\n\n```css\n.p-sm { padding: 8px !important; }\n.pt-sm { padding-top: 8px !important; }\n.m-sm { margin: 16px !important; }\n.mt-md { margin-top: 16px !important; }\n\n.p0 { padding: 0 !important; }\n```\n\n## 色彩\n\nAnt Design 并没有按钮色这一说，而是以视觉效果为基准。默认是蓝色系（拂晓蓝），例如：`nz-button` 的按钮类型 `primary`。\n\n而 ng-alain 依然不会破坏这种规则，但依 [色彩](//ant.design/docs/spec/colors-cn) 章节，产生了一种运用于文本、背景的色系类。\n\n| 名称 | 基本色 | 说明 |\n|---|---|---|\n| `red`      | <div style="color:#fff;background-color:#f5222d;">#f5222d</div> | 薄暮：斗志、奔放        |\n| `volcano`  | <div style="color:#fff;background-color:#fa541c;">#fa541c</div> | 火山：醒目、澎湃        |\n| `orange`   | <div style="color:#fff;background-color:#fa8c16;">#fa8c16</div> | 日暮：温暖、欢快        |\n| `gold`     | <div style="color:#fff;background-color:#faad14;">#faad14</div> | 金盏花：活力、积极      |\n| `yellow`   | <div style="color:#fff;background-color:#fadb14;">#fadb14</div> | 日出：出生、阳光        |\n| `lime`     | <div style="color:#fff;background-color:#a0d911;">#a0d911</div> | 青柠：自然、生机        |\n| `green`    | <div style="color:#fff;background-color:#52c41a;">#f5222d</div> | 极光绿：健康、创新      |\n| `cyan`     | <div style="color:#fff;background-color:#13c2c2;">#13c2c2</div> | 明青：希望、坚强        |\n| `blue`     | <div style="color:#fff;background-color:#1890ff;">#1890ff</div> | 拂晓蓝：包容、科技、普惠 |\n| `geekblue` | <div style="color:#fff;background-color:#2f54eb;">#2f54eb</div> | 极客蓝：探索、钻研      |\n| `purple`   | <div style="color:#fff;background-color:#722ed1;">#722ed1</div> | 酱紫：优雅、浪漫        |\n| `magenta`  | <div style="color:#fff;background-color:#eb2f96;">#eb2f96</div> | 法式洋红：平稳、中性    |\n\nAnt Design 的基础色板共计 120 个颜色，包含 12 个主色以及衍生色。这些颜色基本可以满足中后台设计中对于颜色的需求。\n\n**分类**\n\n| 名称 | 色号 |\n| ---- | --- |\n| `light` | 5号 |\n| `normal` | 6号 |\n| `dark` | 7号 |\n\n**命名格式**\n\n```regex\n[<类型>text|bg]-[<色彩名>red|volcano|orange|gold|yellow|lime|green|cyan|blue|geekblue|purple|magenta|grey](-[light|dark])?(-h)?\n```\n\n> `normal` 本身即是基本色，所以可以被忽略\n> `grey` 可能会更常用，所以额外增加 `grey-lighter`、`grey-darker` 别名表示深度\n\n示例：\n\n```less\n// Text color\n.text-red-light { color: #fabeb9 !important; }\n.text-red { color: #f04134 !important; }\n.text-red-dark { color: #a31837 !important; }\n\n// background-color color\n.bg-red-light { background-color: #fabeb9 !important; }\n.bg-red { background-color: #f04134 !important; }\n.bg-red-dark { background-color: #a31837 !important; }\n\n// hover color\n.bg-red-light-h { &:hover { background-color: #fabeb9 !important; } }\n.bg-red-h { &:hover { background-color: #f04134 !important; } }\n.bg-red-dark-h { &:hover { background-color: #a31837 !important; } }\n```\n\n### 别名\n\n| 别名 | 色系 |\n| ---- | --- |\n| `primary` | `@blue-6` <div style="color:#fff;background-color:#1890ff;">#1890ff</div> |\n| `success` | `@green-6` <div style="color:#fff;background-color:#52c41a;">#52c41a</div> |\n| `error` | `@red-5` <div style="color:#fff;background-color:#ff4d4f;">#ff4d4f</div> |\n| `warning` | `@gold-6` <div style="color:#fff;background-color:#faad14;">#faad14</div> |\n| `info` | `@blue-6` <div style="color:#fff;background-color:#1890ff;">#1890ff</div> |\n| `processing` | `@blue-6` <div style="color:#fff;background-color:#1890ff;">#1890ff</div> |\n| `highlight` | `@red-5` <div style="color:#fff;background-color:#ff4d4f;">#ff4d4f</div> |\n| `normal` | `#d9d9d9` <div style="color:#fff;background-color:#d9d9d9;">#d9d9d9</div> |\n\n示例：\n\n```less\n// Text color\n.text-error-light { color: #fabeb9 !important; }\n.text-error { color: #f04134 !important; }\n.text-error-dark { color: #a31837 !important; }\n\n// background-color color\n.bg-error-light { background-color: #fabeb9 !important; }\n.bg-error { background-color: #f04134 !important; }\n.bg-error-dark { background-color: #a31837 !important; }\n\n// hover color\n.bg-error-light-h { &:hover { background-color: #fabeb9 !important; } }\n.bg-error-h { &:hover { background-color: #f04134 !important; } }\n.bg-error-dark-h { &:hover { background-color: #a31837 !important; } }\n```\n\n### 全量颜色\n\n你可以使用 `@enable-all-colors: true` 来开启所有 120 个颜色的规则。\n\n```less\n.text-red-1 { color: #fff1f0 !important; }\n.text-red-6 { color: #f04134 !important; }\n.text-red-10 { color: #5c0011 !important; }\n\n.bg-red-6 { color: #f04134 !important; }\n.bg-red-6-h { color: #f04134 !important; }\n```\n\n## 清除浮动\n\n清除浮动 `.clearfix`。\n\n## 显示\n\n| 别名 | CSS |\n| ---- | --- |\n| `d-none` | `display: none` |\n| `d-block` | `display: block` |\n| `d-inline-block` | `display: inline-block` |\n| `d-flex` | `display: flex` |\n| `d-inline-flex` | `display: inline-flex` |\n| `justify-content-start` | `justify-content: flex-start` |\n| `justify-content-end` | `justify-content: flex-end` |\n| `justify-content-center` | `justify-content: center` |\n| `justify-content-between` | `justify-content: space-between` |\n| `justify-content-around` | `justify-content: space-around` |\n| `align-items-start` | `align-items: flex-start` |\n| `align-items-end` | `align-items: flex-end` |\n| `align-items-center` | `align-items: center` |\n| `align-items-baseline` | `align-items: baseline` |\n| `align-items-stretch` | `align-items: stretch` |\n| `align-content-start` | `align-content: flex-start` |\n| `align-content-end` | `align-content: flex-end` |\n| `align-content-center` | `align-content: center` |\n| `align-content-between` | `align-content: space-between` |\n| `align-content-around` | `align-content: space-around` |\n| `align-content-stretch` | `align-content: stretch` |\n| `align-self-auto` | `align-self: auto` |\n| `align-self-start` | `align-self: flex-start` |\n| `align-self-end` | `align-self: flex-end` |\n| `align-self-center` | `align-self: center` |\n| `align-self-baseline` | `align-self: baseline` |\n| `align-self-stretch` | `align-self: stretch` |\n| `flex-center` | `display: flex; align-items: center;` |\n| `flex-center-between` | `display: flex; align-items: center; align-content: space-between;` |\n\n## 位置\n\n| 名称 | 说明 |\n| ---- | --- |\n| `overflow-auto` | `overflow: auto` |\n| `overflow-hidden` | `overflow: hidden` |\n| `fixed-top` | 固定顶部 |\n| `fixed-bottom` | 固定底部 |\n\n## 文本\n\n### 大小\n\nAnt Design 是以 `14px` 为基准字号。\n\n| 名称 | 说明 |\n| ---- | --- |\n| `text-xs` | `12px` |\n| `text-sm` | `14px` |\n| `text-md` | `16px` |\n| `text-lg` | `18px` |\n| `text-xl` | `22px` |\n\n### 对齐\n\n| 名称 | 说明 |\n| ---- | --- |\n| `text-left` | 文本居左 |\n| `text-center` | 文本居中 |\n| `text-right` | 文本居右 |\n\n### 溢出\n\n> 容器必须是 `display: inline-block` 或 `display: block`。\n\n| 名称 | 说明 |\n| ---- | --- |\n| `text-nowrap` | 文本超出不换行 |\n| `text-truncate` | 文本超出截取并加 `...` |\n\n### Transformation\n\n| 名称 | 说明 |\n| ---- | --- |\n| `text-lowercase` | 小写文本 |\n| `text-uppercase` | 大写文本 |\n| `text-capitalize` | 首词大写 |\n| `text-deleted` | 删除线 |\n\n### Weight and italics\n\n| 名称 | 说明 |\n| ---- | --- |\n| `font-weight-normal` | `font-weight: normal` |\n| `font-weight-bold` | `font-weight: 700` |\n| `font-italic` | `font-style: italic` |\n\n### Other\n\n| 名称 | 说明 |\n| ---- | --- |\n| `text-hover` | `*:hover { color: @primary-color; }` |\n| `disabled` | 禁止 |\n\n## Borders\n\n### 边框\n\n| 名称 | 说明 |\n| ---- | --- |\n| `border` | `border: 1px solid #f5f5f5 !important;` |\n| `border-0` | `border: 0 !important;` |\n| `border-top-0` | `border-top: 0 !important;` |\n| `border-right-0` | `border-right: 0 !important;` |\n| `border-bottom-0` | `border-bottom: 0 !important;` |\n| `border-left-0` | `border-left: 0 !important;` |\n\n### 颜色\n\n支持[色彩章节](/theme/tools#色彩)所有的色系&别名写法，例如：`border-red`、`border-success`。\n\n### 圆角\n\n| 名称 | 说明 |\n| ---- | --- |\n| `rounded-0` | `border-radius: 0;` |\n| `rounded-circle` | `border-radius: 50%;` |\n| `rounded-sm` | `border-radius: 2px;` |\n| `rounded-md` | `border-radius: 4px;` |\n| `rounded-lg` | `border-radius: 6px;` |\n\n## Width\n\n| 名称 | 说明 |\n| ---- | --- |\n| `width-sm` | `160px` |\n| `width-md` | `240px` |\n| `width-lg` | `320px` |\n| `width-[0-10]` | `0%-100%` |\n\n## Responsive\n\n类似 Bootstrap 响应式规则，当屏幕小于 `480px` 时会隐藏所有 `hidden-xs` 类。\n\n| 名称 | 屏幕 |\n| ---- | --- |\n| `hidden-xs` | <480px |\n| `hidden-sm` | <768px |\n| `hidden-md` | <992px |\n| `hidden-lg` | <1200px |\n| `hidden-pc` | <768px |\n| `hidden-mobile` | >768px |\n\n## 旋转\n\n```css\n.rotate-[360 / 15]\n```\n\n例如：\n\n```css\n// 旋转15度\n.rotate-15\n// 旋转90度\n.rotate-90\n// 旋转360度\n.rotate-360\n```\n\n## Other\n\n| 名称 | 说明 |\n| ---- | --- |\n| `block-center` | `margin: 0 auto` |\n| `point` | `cursor: pointer` |\n| `no-data` | 空数据行 |\n| `no-resize` | 设置不允许调整元素 |\n| `bg-center` | 背景图垂直居中 |\n| `scrollbar` | 美化 div 滚动条 |\n| `color-weak` | 色弱模式 |\n\n## 小部件\n\n### 瀑布流\n\n在线[示例](https://ng-alain.surge.sh/#/style/gridmasonry)。\n\n| 名称 | 说明 |\n| ---- | --- |\n| `row-masonry` | 行 |\n| `row-masonry-{xs|sm|md|lg|xl}-{1-10}` | 列，响应式样式 |\n| `col-masonry` | 列 |\n\n## ng-zorro\n\n### nz-card\n\n| 名称 | 说明 |\n| ---- | --- |\n| `ant-card__body-nopadding` | 强制内容无间距 |\n\n### nz-modal\n\n| 名称 | 说明 |\n| ---- | --- |\n| `modal-{sm|md|lg|xl}` | 设置Modal的大小，`wrapClassName: \'modal-lg\'` |\n| `modal-body-nopadding` | 内容无内边距 |\n| `modal-header` | 自定义Modal时非常有效，[DEMO](https://ng-alain.surge.sh/#/extras/poi) |\n| `modal-footer` | 自定义Modal时非常有效，[DEMO](https://ng-alain.surge.sh/#/extras/poi) |\n\n### nz-table\n\n| 名称 | 说明 |\n| ---- | --- |\n| `ant-table-rep__title` | 标题 |\n| `ant-table-rep__hide-header-footer` | 小屏幕时才显示标题或底部 |\n\n[comment]: <demo(table-rep)>\n\n### nz-tag\n\n| 名称 | 说明 |\n| ---- | --- |\n| `ant-tag__plus` | 增加按钮样式 |'}}};codes=[];static ɵfac=function(e){return new(e||n)};static ɵcmp=_e({type:n,selectors:[[`theme-tools`]],hostAttrs:[1,`d-block`],decls:1,vars:2,consts:[[3,`codes`,`item`]],template:function(e,t){e&1&&lt(0,`app-docs`,0),e&2&&re(`codes`,t.codes)(`item`,t.item)},dependencies:[rt],encapsulation:2})};var I=class n{item={name:`layout-default`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{order:100,title:`Default Layout`,description:`The default layout all parameters are prefixed with @alain-default-.Import in src/styles.less:Creat a new layout in src/app/layout/basic/basic.ts:The ...`,group:`Theme`,path:`packages/theme/layout-default/index.en-US.md`,url:`/theme/layout-default/en`},text:`<p>The default layout all parameters are prefixed with <code>&#64;alain-default-</code>.</p>
<h2 id="usage"><a class="lake-link"><i data-anchor="usage"></i></a>Usage</h2><h3 id="1_style_import"><a class="lake-link"><i data-anchor="1_style_import"></i></a>1. Style import</h3><p>Import in <code>src/styles.less</code>:</p>
<pre><code class="language-less">&#64;import &#39;&#64;delon/theme/layout-default/style/index&#39;;
</code></pre>
<h3 id="2_using_lesscodegreaterlayout-defaultless/codegreater_component"><a class="lake-link"><i data-anchor="2_using_lesscodegreaterlayout-defaultless/codegreater_component"></i></a>2. Using <code>layout-default</code> component</h3><p>Creat a new layout in <code>src/app/layout/basic/basic.ts</code>:</p>
<pre><code class="language-ts">import &#123; Component &#125; from &#39;&#64;angular/core&#39;;
import &#123; SettingsService, User &#125; from &#39;&#64;delon/theme&#39;;
import &#123; LayoutDefaultOptions &#125; from &#39;&#64;delon/theme/layout-default&#39;;
import &#123; environment &#125; from &#39;&#64;env/environment&#39;;

&#64;Component(&#123;
  selector: &#39;layout-basic&#39;,
  template: \`
    &lt;layout-default [options]=&quot;options&quot; [asideUser]=&quot;asideUserTpl&quot; [nav]=&quot;navTpl&quot; [content]=&quot;contentTpl&quot;&gt;
      &lt;layout-default-header-item direction=&quot;left&quot;&gt;
        &lt;a layout-default-header-item-trigger href=&quot;//github.com/ng-alain/ng-alain&quot; target=&quot;_blank&quot;&gt;
          &lt;nz-icon nzType=&quot;github&quot; /&gt;
        &lt;/a&gt;
      &lt;/layout-default-header-item&gt;
      &lt;layout-default-header-item direction=&quot;left&quot; hidden=&quot;pc&quot;&gt;
        &lt;div layout-default-header-item-trigger (click)=&quot;searchToggleStatus = !searchToggleStatus&quot;&gt;
          &lt;nz-icon nzType=&quot;search&quot; /&gt;
        &lt;/div&gt;
      &lt;/layout-default-header-item&gt;
      &lt;layout-default-header-item direction=&quot;middle&quot;&gt;
        &lt;header-search class=&quot;alain-default__search&quot; [toggleChange]=&quot;searchToggleStatus&quot; /&gt;
      &lt;/layout-default-header-item&gt;
      &lt;layout-default-header-item direction=&quot;right&quot; hidden=&quot;mobile&quot;&gt;
        &lt;header-task /&gt;
      &lt;/layout-default-header-item&gt;
      &lt;ng-template #asideUserTpl&gt;
        &lt;div nz-dropdown nzTrigger=&quot;click&quot; [nzDropdownMenu]=&quot;userMenu&quot; class=&quot;alain-default__aside-user&quot;&gt;
          &lt;nz-avatar class=&quot;alain-default__aside-user-avatar&quot; [nzSrc]=&quot;user.avatar&quot; /&gt;
          &lt;div class=&quot;alain-default__aside-user-info&quot;&gt;
            &lt;strong&gt;&#123;&#123; user.name &#125;&#125;&lt;/strong&gt;
            &lt;p class=&quot;mb0&quot;&gt;&#123;&#123; user.email &#125;&#125;&lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;nz-dropdown-menu #userMenu=&quot;nzDropdownMenu&quot;&gt;
          &lt;ul nz-menu&gt;
            &lt;li nz-menu-item routerLink=&quot;/pro/account/center&quot;&gt;&#123;&#123; &#39;menu.account.center&#39; | i18n &#125;&#125;&lt;/li&gt;
            &lt;li nz-menu-item routerLink=&quot;/pro/account/settings&quot;&gt;&#123;&#123; &#39;menu.account.settings&#39; | i18n &#125;&#125;&lt;/li&gt;
          &lt;/ul&gt;
        &lt;/nz-dropdown-menu&gt;
      &lt;/ng-template&gt;
      &lt;ng-template #navTpl&gt;
        &lt;layout-default-nav class=&quot;d-block py-lg&quot; /&gt;
      &lt;/ng-template&gt;
      &lt;ng-template #contentTpl&gt;
        &lt;router-outlet /&gt;
      &lt;/ng-template&gt;
    &lt;/layout-default&gt;

    &#64;if (showSettingDrawer) &#123;
      &lt;setting-drawer /&gt;
    &#125;
    &lt;theme-btn /&gt;
  \`,
&#125;)
export class LayoutBasic &#123;
  readonly user = inject(SettingsService).user;
  protected options: LayoutDefaultOptions = &#123;
    logoExpanded: \`./assets/logo-full.svg\`,
    logoCollapsed: \`./assets/logo.svg\`
  &#125;;
  protected searchToggleStatus = signal(false);
  protected showSettingDrawer = !environment.production;
&#125;
</code></pre>
<p>The layout can be dynamically managed at runtime through the <code>LayoutDefaultService</code> service. In addition, in layout operations, you can subscribe to layout changes through <code>SettingsService.notify</code> (for example: sidebar show and hide, etc.). Note that all layout-related changes will pass through this interface, so you need to do <code>filter</code> operation.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="layout-default"><a class="lake-link"><i data-anchor="layout-default"></i></a>layout-default</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[options]</code></td>
<td>Options of the layout</td>
<td><code>LayoutDefaultOptions</code></td>
<td><code>-</code></td>
</tr>
<tr>
<td><code>[asideUser]</code></td>
<td>Side user of the layout</td>
<td><code>TemplateRef&lt;void&gt;</code></td>
<td><code>-</code></td>
</tr>
<tr>
<td><code>[asideBottom]</code></td>
<td>Bottom information of the layout</td>
<td><code>TemplateRef&lt;void&gt;</code></td>
<td><code>-</code></td>
</tr>
<tr>
<td><code>[nav]</code></td>
<td>Nav</td>
<td><code>TemplateRef&lt;void&gt;</code></td>
<td><code>-</code></td>
</tr>
<tr>
<td><code>[content]</code></td>
<td>Content</td>
<td><code>TemplateRef&lt;void&gt;</code></td>
<td><code>-</code></td>
</tr>
<tr>
<td><code>[customError]</code></td>
<td>Custom exception routing error message, can&#39;t show when is <code>null</code></td>
<td><code>string, null</code></td>
<td><code>Could not load $&#123;evt.url&#125; route</code></td>
</tr>
<tr>
<td><code>[fetchingStrictly]</code></td>
<td>Precise check top loading animation state</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[fetching]</code></td>
<td>Top loading animation state</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
</tbody></table>
<h3 id="layoutdefaultoptions"><a class="lake-link"><i data-anchor="layoutdefaultoptions"></i></a>LayoutDefaultOptions</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[logo]</code></td>
<td>Custom Logo Area</td>
<td><code>TemplateRef&lt;void&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[logoExpanded]</code></td>
<td>Logo url of expanded status</td>
<td><code>string</code></td>
<td><code>./assets/logo-full.svg</code></td>
</tr>
<tr>
<td><code>[logoCollapsed]</code></td>
<td>Logo url of collapsed status</td>
<td><code>string</code></td>
<td><code>./assets/logo.svg</code></td>
</tr>
<tr>
<td><code>[logoFixWidth]</code></td>
<td>Specify a fixed logo width</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[logoLink]</code></td>
<td>Specify the logo routing address</td>
<td><code>string</code></td>
<td><code>/</code></td>
</tr>
<tr>
<td><code>[hideAside]</code></td>
<td>Hide the sidebar without showing the collapsed icon button</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[hideHeader]</code></td>
<td>Hide top bar</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[showHeaderCollapse]</code></td>
<td>Whether to display the menu collapse button on the top bar</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[showSiderCollapse]</code></td>
<td>Whether to show the menu collapse button at the bottom of the sidebar</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
</tbody></table>
<h3 id="layout-default-nav"><a class="lake-link"><i data-anchor="layout-default-nav"></i></a>layout-default-nav</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[disabledAcl]</code></td>
<td>Displayed <code>disabled</code> state when <code>acl</code> check fails.</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[autoCloseUnderPad]</code></td>
<td>When the route width is less than the Pad width, the sidebar is automatically closed.</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[recursivePath]</code></td>
<td>Automatic up recursive lookup, menu data source contains <code>/ware</code>, then <code>/ware/1</code> is also treated as <code>/ware</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[hideEmptyChildren]</code></td>
<td>When all children are hidden, whether to hide the parent as well</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[openStrictly]</code></td>
<td>Precise check open status, does not auto closed other open item</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[maxLevelIcon]</code></td>
<td>Icon displays up to which level</td>
<td><code>number</code></td>
<td><code>3</code></td>
</tr>
<tr>
<td><code>(select)</code></td>
<td>Callback when clicking menu (including <code>disabled</code>)</td>
<td><code>EventEmitter&lt;Menu&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
<blockquote>
<p>The component data comes from <code>MenuService</code> (which is structured as <a href="/theme/menu#Menu">Menu</a>), and the operation of <code>MenuService</code> is auto synchronized to the component.</p>
</blockquote>
<h3 id="layout-default-header-item"><a class="lake-link"><i data-anchor="layout-default-header-item"></i></a>layout-default-header-item</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[hidden]</code></td>
<td>Hidden behavior of the header item</td>
<td><code>pc, mobile, none</code></td>
<td><code>nones</code></td>
</tr>
<tr>
<td><code>[direction]</code></td>
<td>Direction of the header item</td>
<td><code>left, middle, right</code></td>
<td><code>right</code></td>
</tr>
</tbody></table>
<h3 id="layout-default-header-item-trigger"><a class="lake-link"><i data-anchor="layout-default-header-item-trigger"></i></a>layout-default-header-item-trigger</h3><p>The trigger style of the head item.</p>
<h3 id="layout-default-top-menu-item"><a class="lake-link"><i data-anchor="layout-default-top-menu-item"></i></a>layout-default-top-menu-item</h3><p>Header business menu item, please refer to <a href="https://github.com/ng-alain/delon/blob/master/src/dev/layout.component.ts#L65-L72" target="_blank" rel="noopener">layout.component.ts</a>(<a href="https://ng-alain.com/dev/home" target="_blank" rel="noopener">Preview</a>).</p>
<h2 id="layout_description"><a class="lake-link"><i data-anchor="layout_description"></i></a>Layout description</h2><p>In the upper-left-right layout mode, it is applied to the development of the <strong>business page</strong>. Its specification details:</p>
<ul>
<li>Top area height <code>64px</code>\uFF08parameter\uFF1A<code>&#64;header-hg</code>\uFF09</li>
<li>Side area width <code>200px</code>\uFF08parameter\uFF1A<code>&#64;aside-wd</code>\uFF09</li>
<li>Hide side navigation when the screen is below <code>1140px</code> wide</li>
<li>Turn the side navigation to the <code>fixed</code> state when the screen is below <code>1140px</code> wide</li>
<li>Mainly includes a <a href="/theme/layout-default/en?#layout-default-nav">layout-default-nav</a> component</li>
</ul>
<blockquote>
<p>Parameters are adjustable as needed by the <code>src/styles/theme.less</code> file.</p>
</blockquote>
<p><strong>Top area</strong></p>
<p>location\uFF1A<em>src/app/layout/base/header</em></p>
<p>Scaffolding provides some regular top-level components by default, which are stored in the <em>components</em> directory. At the same time <code>&#64;delon/abc</code> also provides several top components (eg\uFF1A<a href="/components/notice-icon">notice-icon</a> Notification menu component. You can build it yourself or develop it yourself based on the components provided.</p>
<blockquote>
<p>Scaffolding supports responsive layout. For the top area, you may need to hide some components under the small screen, so you can add <code>hidden-xs</code> to the corresponding DOM node to automatically hide when the screen is smaller than <code>768px</code>.</p>
</blockquote>
<p><strong>Side area</strong></p>
<p>location\uFF1A<em>src/app/layout/default/sidebar</em></p>
<p>Only one user information and main menu are included. The main menu is a <a href="/theme/layout-default/en?#layout-default-nav">layout-default-nav</a> component.</p>
<p><strong>Internal area</strong></p>
<p>The content area is the business page area, the specification details\uFF1A</p>
<ul>
<li>Content distance page standard, side, right scroll bar, bottom, this margin is based on a standard Dashboard Gutter width <code>24px</code>.</li>
</ul>
<h2 id="less_parameters"><a class="lake-link"><i data-anchor="less_parameters"></i></a>Less Parameters</h2><table>
<thead>
<tr>
<th>Name</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>&#64;alain-default-prefix</code></td>
<td><code>.alain-default</code></td>
<td>Style name prefix</td>
</tr>
<tr>
<td><code>&#64;alain-default-ease</code></td>
<td><code>cubic-bezier(.25, 0, .15, 1)</code></td>
<td>Animation filter function</td>
</tr>
<tr>
<td><code>&#64;alain-default-header-hg</code></td>
<td><code>64px</code></td>
<td>Height of header</td>
</tr>
<tr>
<td><code>&#64;alain-default-header-bg</code></td>
<td><code>&#64;primary-color</code></td>
<td>Background-color of header</td>
</tr>
<tr>
<td><code>&#64;alain-default-header-padding</code></td>
<td><code>&#64;layout-gutter * 2</code></td>
<td>Horizontal padding of header</td>
</tr>
<tr>
<td><code>&#64;alain-default-header-search-enabled</code></td>
<td><code>true</code></td>
<td>Whether top search</td>
</tr>
<tr>
<td><code>&#64;alain-default-header-icon-fs</code></td>
<td><code>18px</code></td>
<td>Font size of icon</td>
</tr>
<tr>
<td><code>&#64;alain-default-header-logo-max-height</code></td>
<td><code>36px</code></td>
<td>Max height of logo</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-wd</code></td>
<td><code>200px</code></td>
<td>Width of aside</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-bg</code></td>
<td><code>#fff</code></td>
<td>Background-color of aside</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-scrollbar-width</code></td>
<td><code>0</code></td>
<td>Scrollbar width of aside</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-scrollbar-height</code></td>
<td><code>0</code></td>
<td>Scrollbar height of aside</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-scrollbar-track-color</code></td>
<td><code>transparent</code></td>
<td>Scrollbar track color of aside</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-scrollbar-thumb-color</code></td>
<td><code>transparent</code></td>
<td>Scrollbar thumb color of aside</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-nav-fs</code></td>
<td><code>14px</code></td>
<td>Font size of nav name</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-nav-icon-width</code></td>
<td><code>14px</code></td>
<td>Width of nav icon</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-nav-img-wh</code></td>
<td><code>14px</code></td>
<td>Width &amp; height of nav image</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-nav-padding-top-bottom</code></td>
<td><code>&#64;layout-gutter</code></td>
<td>Vertical padding of nav</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-nav-padding-left-right</code></td>
<td><code>&#64;layout-gutter * 2</code></td>
<td>Horizontal padding of nav</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-nav-text-color</code></td>
<td><code>rgba(0, 0, 0, 0.65)</code></td>
<td>Nav text color</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-nav-text-hover-color</code></td>
<td><code>#108ee9</code></td>
<td>Nav text hover color</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-nav-group-text-color</code></td>
<td><code>rgba(0, 0, 0, 0.43)</code></td>
<td>Group text color</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-nav-selected-text-color</code></td>
<td><code>#108ee9</code></td>
<td>Nav selected text color</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-nav-selected-bg</code></td>
<td><code>#fcfcfc</code></td>
<td>Nav selected background color</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-nav-divider-bg</code></td>
<td><code>#efe3e5</code></td>
<td>Nav divider background color</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-collapsed-wd</code></td>
<td><code>&#64;layout-gutter * 8</code></td>
<td>Width of aside collapsed</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-collapsed-nav-fs</code></td>
<td><code>24px</code></td>
<td>Font size of aside collapsed</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-collapsed-nav-img-wh</code></td>
<td><code>24px</code></td>
<td>Width &amp; height nav image of aside collapsed</td>
</tr>
<tr>
<td><code>&#64;alain-default-content-heading-bg</code></td>
<td><code>#fafbfc</code></td>
<td>Heading background color of content area</td>
</tr>
<tr>
<td><code>&#64;alain-default-content-heading-border</code></td>
<td><code>#efe3e5</code></td>
<td>Heading bottom border color of content area</td>
</tr>
<tr>
<td><code>&#64;alain-default-content-padding</code></td>
<td><code>&#64;layout-gutter * 3</code></td>
<td>Padding of content area</td>
</tr>
<tr>
<td><code>&#64;alain-default-content-bg</code></td>
<td><code>#f5f7fa</code></td>
<td>Background color of content area</td>
</tr>
<tr>
<td><code>&#64;alain-default-widget-app-icons-enabled</code></td>
<td><code>true</code></td>
<td>Whether the app-icon widget styles</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-user-enabled</code></td>
<td><code>true</code></td>
<td>Whether the user styles of aside</td>
</tr>
</tbody></table>
<h2 id="faq"><a class="lake-link"><i data-anchor="faq"></i></a>FAQ</h2><h3 id="why_are_there_two_shortcut_menus?"><a class="lake-link"><i data-anchor="why_are_there_two_shortcut_menus?"></i></a>Why are there two shortcut menus?</h3><p>The shortcut menu generation rules are uniformly searched under the <code>0</code> index\uFF0Cand get in the following order:</p>
<ol>
<li>[Recommended] children have <code>shortcutRoot: true</code> which is the highest priority</li>
<li>Otherwise, find the link with the word [dashboard], if it exists, create a shortcut entry below the menu.</li>
<li>Otherwise placed at the 0 node position</li>
</ol>
<p>Therefore, it&#39;s recommended to keep a valid <code>shortcutRoot: true</code> data under the <code>0</code> index of the menu data.</p>
<h3 id="faq"><a class="lake-link"><i data-anchor="faq"></i></a>FAQ</h3><p><strong>Hide main menu item</strong></p>
<p>You can set <code>hide: true</code> in the menu.</p>
<p><strong>Hide auto-generated navigation hide breadcrumbs</strong></p>
<p>You can set <code>hideInBreadcrumb: true</code> in the menu.</p>
<p><strong>About level</strong></p>
<p>Although unlimited levels are supported, please keep no more than four levels (including groups) for user experience.</p>
<p><strong>How to update a menu item</strong></p>
<p>The menu will be re-rendered via calling <code>MenuService.setItem(key, newValue)</code>, please refer to the definition of <a href="/theme/menu#Menu">Menu</a>.</p>
<p><strong>How to control menu expand</strong></p>
<p>Use <code>LayoutDefaultService.toggleCollapsed()</code> for manual control at runtime.</p>
`,toc:[{id:`usage`,title:`Usage`,children:[{id:`1_style_import`,title:`1. Style import`},{id:`2_using`,title:`2. Using `}]},{id:`api`,title:`API`,children:[{id:`layout-default`,title:`layout-default`},{id:`layoutdefaultoptions`,title:`LayoutDefaultOptions`},{id:`layout-default-nav`,title:`layout-default-nav`},{id:`layout-default-header-item`,title:`layout-default-header-item`},{id:`layout-default-header-item-trigger`,title:`layout-default-header-item-trigger`},{id:`layout-default-top-menu-item`,title:`layout-default-top-menu-item`}]},{id:`layout_description`,title:`Layout description`},{id:`less_parameters`,title:`Less Parameters`},{id:`faq`,title:`FAQ`,children:[{id:`why_are_there_two_shortcut_menus?`,title:`Why are there two shortcut menus?`},{id:`faq`,title:`FAQ`}]}],raw:'---\ntype: Theme\norder: 100\ntitle: Default Layout\n---\n\nThe default layout all parameters are prefixed with `@alain-default-`.\n\n## Usage\n\n### 1. Style import\n\nImport in `src/styles.less`:\n\n```less\n@import \'@delon/theme/layout-default/style/index\';\n```\n\n### 2. Using `layout-default` component\n\nCreat a new layout in `src/app/layout/basic/basic.ts`:\n\n```ts\nimport { Component } from \'@angular/core\';\nimport { SettingsService, User } from \'@delon/theme\';\nimport { LayoutDefaultOptions } from \'@delon/theme/layout-default\';\nimport { environment } from \'@env/environment\';\n\n@Component({\n  selector: \'layout-basic\',\n  template: `\n    <layout-default [options]="options" [asideUser]="asideUserTpl" [nav]="navTpl" [content]="contentTpl">\n      <layout-default-header-item direction="left">\n        <a layout-default-header-item-trigger href="//github.com/ng-alain/ng-alain" target="_blank">\n          <nz-icon nzType="github" />\n        </a>\n      </layout-default-header-item>\n      <layout-default-header-item direction="left" hidden="pc">\n        <div layout-default-header-item-trigger (click)="searchToggleStatus = !searchToggleStatus">\n          <nz-icon nzType="search" />\n        </div>\n      </layout-default-header-item>\n      <layout-default-header-item direction="middle">\n        <header-search class="alain-default__search" [toggleChange]="searchToggleStatus" />\n      </layout-default-header-item>\n      <layout-default-header-item direction="right" hidden="mobile">\n        <header-task />\n      </layout-default-header-item>\n      <ng-template #asideUserTpl>\n        <div nz-dropdown nzTrigger="click" [nzDropdownMenu]="userMenu" class="alain-default__aside-user">\n          <nz-avatar class="alain-default__aside-user-avatar" [nzSrc]="user.avatar" />\n          <div class="alain-default__aside-user-info">\n            <strong>{{ user.name }}</strong>\n            <p class="mb0">{{ user.email }}</p>\n          </div>\n        </div>\n        <nz-dropdown-menu #userMenu="nzDropdownMenu">\n          <ul nz-menu>\n            <li nz-menu-item routerLink="/pro/account/center">{{ \'menu.account.center\' | i18n }}</li>\n            <li nz-menu-item routerLink="/pro/account/settings">{{ \'menu.account.settings\' | i18n }}</li>\n          </ul>\n        </nz-dropdown-menu>\n      </ng-template>\n      <ng-template #navTpl>\n        <layout-default-nav class="d-block py-lg" />\n      </ng-template>\n      <ng-template #contentTpl>\n        <router-outlet />\n      </ng-template>\n    </layout-default>\n\n    @if (showSettingDrawer) {\n      <setting-drawer />\n    }\n    <theme-btn />\n  `,\n})\nexport class LayoutBasic {\n  readonly user = inject(SettingsService).user;\n  protected options: LayoutDefaultOptions = {\n    logoExpanded: `./assets/logo-full.svg`,\n    logoCollapsed: `./assets/logo.svg`\n  };\n  protected searchToggleStatus = signal(false);\n  protected showSettingDrawer = !environment.production;\n}\n```\n\nThe layout can be dynamically managed at runtime through the `LayoutDefaultService` service. In addition, in layout operations, you can subscribe to layout changes through `SettingsService.notify` (for example: sidebar show and hide, etc.). Note that all layout-related changes will pass through this interface, so you need to do `filter` operation.\n\n## API\n\n### layout-default\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[options]` | Options of the layout | `LayoutDefaultOptions` | `-` |\n| `[asideUser]` | Side user of the layout | `TemplateRef<void>` | `-` |\n| `[asideBottom]` | Bottom information of the layout | `TemplateRef<void>` | `-` |\n| `[nav]` | Nav | `TemplateRef<void>` | `-` |\n| `[content]` | Content | `TemplateRef<void>` | `-` |\n| `[customError]` | Custom exception routing error message, can\'t show when is `null` | `string, null` | `Could not load ${evt.url} route` |\n| `[fetchingStrictly]` | Precise check top loading animation state | `boolean` | `false` |\n| `[fetching]` | Top loading animation state | `boolean` | `false` |\n\n### LayoutDefaultOptions\n\n| Property | Description | Type | Default |\n|----|----|----|-----|\n| `[logo]` | Custom Logo Area | `TemplateRef<void>` | - |\n| `[logoExpanded]` | Logo url of expanded status | `string` | `./assets/logo-full.svg` |\n| `[logoCollapsed]` | Logo url of collapsed status | `string` | `./assets/logo.svg` |\n| `[logoFixWidth]` | Specify a fixed logo width | `number` | - |\n| `[logoLink]` | Specify the logo routing address | `string` | `/` |\n| `[hideAside]` | Hide the sidebar without showing the collapsed icon button | `boolean` | `false` |\n| `[hideHeader]` | Hide top bar | `boolean` | `false` |\n| `[showHeaderCollapse]` | Whether to display the menu collapse button on the top bar | `boolean` | `true` |\n| `[showSiderCollapse]` | Whether to show the menu collapse button at the bottom of the sidebar | `boolean` | `false` |\n\n### layout-default-nav\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[disabledAcl]` | Displayed `disabled` state when `acl` check fails. | `boolean` | `false` |\n| `[autoCloseUnderPad]` | When the route width is less than the Pad width, the sidebar is automatically closed. | `boolean` | `true` |\n| `[recursivePath]` | Automatic up recursive lookup, menu data source contains `/ware`, then `/ware/1` is also treated as `/ware` | `boolean` | `true` |\n| `[hideEmptyChildren]` | When all children are hidden, whether to hide the parent as well | `boolean` | `true` |\n| `[openStrictly]` | Precise check open status, does not auto closed other open item | `boolean` | `false` |\n| `[maxLevelIcon]` | Icon displays up to which level | `number` | `3` |\n| `(select)` | Callback when clicking menu (including `disabled`) | `EventEmitter<Menu>` | - |\n\n> The component data comes from `MenuService` (which is structured as [Menu](/theme/menu#Menu)), and the operation of `MenuService` is auto synchronized to the component.\n\n### layout-default-header-item\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[hidden]` | Hidden behavior of the header item | `pc, mobile, none` | `nones` |\n| `[direction]` | Direction of the header item | `left, middle, right` | `right` |\n\n### layout-default-header-item-trigger\n\nThe trigger style of the head item.\n\n### layout-default-top-menu-item\n\nHeader business menu item, please refer to [layout.component.ts](https://github.com/ng-alain/delon/blob/master/src/dev/layout.component.ts#L65-L72)([Preview](https://ng-alain.com/dev/home)).\n\n## Layout description\n\nIn the upper-left-right layout mode, it is applied to the development of the **business page**. Its specification details:\n\n+ Top area height `64px`（parameter：`@header-hg`）\n+ Side area width `200px`（parameter：`@aside-wd`）\n+ Hide side navigation when the screen is below `1140px` wide\n+ Turn the side navigation to the `fixed` state when the screen is below `1140px` wide\n+ Mainly includes a [layout-default-nav](/theme/layout-default/en?#layout-default-nav) component\n\n> Parameters are adjustable as needed by the `src/styles/theme.less` file.\n\n**Top area**\n\nlocation：*src/app/layout/base/header*\n\nScaffolding provides some regular top-level components by default, which are stored in the *components* directory. At the same time `@delon/abc` also provides several top components (eg：[notice-icon](/components/notice-icon) Notification menu component. You can build it yourself or develop it yourself based on the components provided.\n\n> Scaffolding supports responsive layout. For the top area, you may need to hide some components under the small screen, so you can add `hidden-xs` to the corresponding DOM node to automatically hide when the screen is smaller than `768px`.\n\n**Side area**\n\nlocation：*src/app/layout/default/sidebar*\n\nOnly one user information and main menu are included. The main menu is a [layout-default-nav](/theme/layout-default/en?#layout-default-nav) component.\n\n**Internal area**\n\nThe content area is the business page area, the specification details：\n\n+ Content distance page standard, side, right scroll bar, bottom, this margin is based on a standard Dashboard Gutter width `24px`.\n\n## Less Parameters\n\n| Name | Default | Description |\n|------|---------|-------------|\n| `@alain-default-prefix` | `.alain-default` | Style name prefix |\n| `@alain-default-ease` | `cubic-bezier(.25, 0, .15, 1)` | Animation filter function |\n| `@alain-default-header-hg` | `64px` | Height of header |\n| `@alain-default-header-bg` | `@primary-color` | Background-color of header |\n| `@alain-default-header-padding` | `@layout-gutter * 2` | Horizontal padding of header |\n| `@alain-default-header-search-enabled` | `true` | Whether top search |\n| `@alain-default-header-icon-fs` | `18px` | Font size of icon |\n| `@alain-default-header-logo-max-height` | `36px` | Max height of logo |\n| `@alain-default-aside-wd` | `200px` | Width of aside |\n| `@alain-default-aside-bg` | `#fff` | Background-color of aside |\n| `@alain-default-aside-scrollbar-width` | `0` | Scrollbar width of aside |\n| `@alain-default-aside-scrollbar-height` | `0` | Scrollbar height of aside |\n| `@alain-default-aside-scrollbar-track-color` | `transparent` | Scrollbar track color of aside |\n| `@alain-default-aside-scrollbar-thumb-color` | `transparent` | Scrollbar thumb color of aside |\n| `@alain-default-aside-nav-fs` | `14px` | Font size of nav name |\n| `@alain-default-aside-nav-icon-width` | `14px` | Width of nav icon |\n| `@alain-default-aside-nav-img-wh` | `14px` | Width & height of nav image |\n| `@alain-default-aside-nav-padding-top-bottom` | `@layout-gutter` | Vertical padding of nav |\n| `@alain-default-aside-nav-padding-left-right` | `@layout-gutter * 2` | Horizontal padding of nav |\n| `@alain-default-aside-nav-text-color` | `rgba(0, 0, 0, 0.65)` | Nav text color |\n| `@alain-default-aside-nav-text-hover-color` | `#108ee9` | Nav text hover color |\n| `@alain-default-aside-nav-group-text-color` | `rgba(0, 0, 0, 0.43)` | Group text color |\n| `@alain-default-aside-nav-selected-text-color` | `#108ee9` | Nav selected text color |\n| `@alain-default-aside-nav-selected-bg` | `#fcfcfc` | Nav selected background color |\n| `@alain-default-aside-nav-divider-bg` | `#efe3e5` | Nav divider background color |\n| `@alain-default-aside-collapsed-wd` | `@layout-gutter * 8` | Width of aside collapsed |\n| `@alain-default-aside-collapsed-nav-fs` | `24px` | Font size of aside collapsed |\n| `@alain-default-aside-collapsed-nav-img-wh` | `24px` | Width & height nav image of aside collapsed |\n| `@alain-default-content-heading-bg` | `#fafbfc` | Heading background color of content area |\n| `@alain-default-content-heading-border` | `#efe3e5` | Heading bottom border color of content area |\n| `@alain-default-content-padding` | `@layout-gutter * 3` | Padding of content area |\n| `@alain-default-content-bg` | `#f5f7fa` | Background color of content area |\n| `@alain-default-widget-app-icons-enabled` | `true` | Whether the app-icon widget styles |\n| `@alain-default-aside-user-enabled` | `true` | Whether the user styles of aside |\n\n## FAQ\n\n### Why are there two shortcut menus?\n\nThe shortcut menu generation rules are uniformly searched under the `0` index，and get in the following order:\n\n1. [Recommended] children have `shortcutRoot: true` which is the highest priority\n2. Otherwise, find the link with the word [dashboard], if it exists, create a shortcut entry below the menu.\n3. Otherwise placed at the 0 node position\n\nTherefore, it\'s recommended to keep a valid `shortcutRoot: true` data under the `0` index of the menu data.\n\n### FAQ\n\n**Hide main menu item**\n\nYou can set `hide: true` in the menu.\n\n**Hide auto-generated navigation hide breadcrumbs**\n\nYou can set `hideInBreadcrumb: true` in the menu.\n\n**About level**\n\nAlthough unlimited levels are supported, please keep no more than four levels (including groups) for user experience.\n\n**How to update a menu item**\n\nThe menu will be re-rendered via calling `MenuService.setItem(key, newValue)`, please refer to the definition of [Menu](/theme/menu#Menu).\n\n**How to control menu expand**\n\nUse `LayoutDefaultService.toggleCollapsed()` for manual control at runtime.'},"zh-CN":{meta:{order:100,title:`默认布局`,description:`默认布局所有参数都以 @alain-default- 开头。在 src/styles.less 引入：在 src/app/layout/basic/basic.ts 创建一个新的布局：通过 LayoutDefaultService 服务可以在运行时动态管理布局。除此之外，在布局的操作都可以通过 Se...`,group:`Theme`,path:`packages/theme/layout-default/index.zh-CN.md`,url:`/theme/layout-default/zh`},text:`<p>\u9ED8\u8BA4\u5E03\u5C40\u6240\u6709\u53C2\u6570\u90FD\u4EE5 <code>&#64;alain-default-</code> \u5F00\u5934\u3002</p>
<h2 id="\u4F7F\u7528\u65B9\u5F0F"><a class="lake-link"><i data-anchor="\u4F7F\u7528\u65B9\u5F0F"></i></a>\u4F7F\u7528\u65B9\u5F0F</h2><h3 id="1\u3001\u5BFC\u5165\u6837\u5F0F"><a class="lake-link"><i data-anchor="1\u3001\u5BFC\u5165\u6837\u5F0F"></i></a>1\u3001\u5BFC\u5165\u6837\u5F0F</h3><p>\u5728 <code>src/styles.less</code> \u5F15\u5165\uFF1A</p>
<pre><code class="language-less">&#64;import &#39;&#64;delon/theme/layout-default/style/index&#39;;
</code></pre>
<h3 id="2\u3001\u4F7F\u7528_lesscodegreaterlayout-defaultless/codegreater_\u7EC4\u4EF6"><a class="lake-link"><i data-anchor="2\u3001\u4F7F\u7528_lesscodegreaterlayout-defaultless/codegreater_\u7EC4\u4EF6"></i></a>2\u3001\u4F7F\u7528 <code>layout-default</code> \u7EC4\u4EF6</h3><p>\u5728 <code>src/app/layout/basic/basic.ts</code> \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5E03\u5C40\uFF1A</p>
<pre><code class="language-ts">import &#123; Component &#125; from &#39;&#64;angular/core&#39;;
import &#123; SettingsService, User &#125; from &#39;&#64;delon/theme&#39;;
import &#123; LayoutDefaultOptions &#125; from &#39;&#64;delon/theme/layout-default&#39;;
import &#123; environment &#125; from &#39;&#64;env/environment&#39;;

&#64;Component(&#123;
  selector: &#39;layout-basic&#39;,
  template: \`
    &lt;layout-default [options]=&quot;options&quot; [asideUser]=&quot;asideUserTpl&quot; [nav]=&quot;navTpl&quot; [content]=&quot;contentTpl&quot;&gt;
      &lt;layout-default-header-item direction=&quot;left&quot;&gt;
        &lt;a layout-default-header-item-trigger href=&quot;//github.com/ng-alain/ng-alain&quot; target=&quot;_blank&quot;&gt;
          &lt;nz-icon nzType=&quot;github&quot; /&gt;
        &lt;/a&gt;
      &lt;/layout-default-header-item&gt;
      &lt;layout-default-header-item direction=&quot;left&quot; hidden=&quot;pc&quot;&gt;
        &lt;div layout-default-header-item-trigger (click)=&quot;searchToggleStatus = !searchToggleStatus&quot;&gt;
          &lt;nz-icon nzType=&quot;search&quot; /&gt;
        &lt;/div&gt;
      &lt;/layout-default-header-item&gt;
      &lt;layout-default-header-item direction=&quot;middle&quot;&gt;
        &lt;header-search class=&quot;alain-default__search&quot; [toggleChange]=&quot;searchToggleStatus&quot; /&gt;
      &lt;/layout-default-header-item&gt;
      &lt;layout-default-header-item direction=&quot;right&quot; hidden=&quot;mobile&quot;&gt;
        &lt;header-task /&gt;
      &lt;/layout-default-header-item&gt;
      &lt;ng-template #asideUserTpl&gt;
        &lt;div nz-dropdown nzTrigger=&quot;click&quot; [nzDropdownMenu]=&quot;userMenu&quot; class=&quot;alain-default__aside-user&quot;&gt;
          &lt;nz-avatar class=&quot;alain-default__aside-user-avatar&quot; [nzSrc]=&quot;user.avatar&quot; /&gt;
          &lt;div class=&quot;alain-default__aside-user-info&quot;&gt;
            &lt;strong&gt;&#123;&#123; user.name &#125;&#125;&lt;/strong&gt;
            &lt;p class=&quot;mb0&quot;&gt;&#123;&#123; user.email &#125;&#125;&lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;nz-dropdown-menu #userMenu=&quot;nzDropdownMenu&quot;&gt;
          &lt;ul nz-menu&gt;
            &lt;li nz-menu-item routerLink=&quot;/pro/account/center&quot;&gt;&#123;&#123; &#39;menu.account.center&#39; | i18n &#125;&#125;&lt;/li&gt;
            &lt;li nz-menu-item routerLink=&quot;/pro/account/settings&quot;&gt;&#123;&#123; &#39;menu.account.settings&#39; | i18n &#125;&#125;&lt;/li&gt;
          &lt;/ul&gt;
        &lt;/nz-dropdown-menu&gt;
      &lt;/ng-template&gt;
      &lt;ng-template #navTpl&gt;
        &lt;layout-default-nav class=&quot;d-block py-lg&quot; /&gt;
      &lt;/ng-template&gt;
      &lt;ng-template #contentTpl&gt;
        &lt;router-outlet /&gt;
      &lt;/ng-template&gt;
    &lt;/layout-default&gt;

    &#64;if (showSettingDrawer) &#123;
      &lt;setting-drawer /&gt;
    &#125;
    &lt;theme-btn /&gt;
  \`,
&#125;)
export class LayoutBasic &#123;
  readonly user = inject(SettingsService).user;
  protected options: LayoutDefaultOptions = &#123;
    logoExpanded: \`./assets/logo-full.svg\`,
    logoCollapsed: \`./assets/logo.svg\`
  &#125;;
  protected searchToggleStatus = signal(false);
  protected showSettingDrawer = !environment.production;
&#125;
</code></pre>
<p>\u901A\u8FC7 <code>LayoutDefaultService</code> \u670D\u52A1\u53EF\u4EE5\u5728\u8FD0\u884C\u65F6\u52A8\u6001\u7BA1\u7406\u5E03\u5C40\u3002\u9664\u6B64\u4E4B\u5916\uFF0C\u5728\u5E03\u5C40\u7684\u64CD\u4F5C\u90FD\u53EF\u4EE5\u901A\u8FC7 <code>SettingsService.notify</code> \u6765\u8BA2\u9605\u5E03\u5C40\u7684\u53D8\u5316\uFF08\u4F8B\u5982\uFF1A\u4FA7\u8FB9\u680F\u7684\u5C55\u5F00\u4E0E\u6536\u7F29\u7B49\uFF09\uFF0C\u6CE8\u610F\u6240\u6709\u5E03\u5C40\u76F8\u5173\u7684\u53D8\u5316\u90FD\u4F1A\u901A\u8FC7\u8FD9\u4E2A\u63A5\u53E3\uFF0C\u6240\u4EE5\u9700\u8981\u505A\u597D <code>filter</code> \u64CD\u4F5C\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="layout-default"><a class="lake-link"><i data-anchor="layout-default"></i></a>layout-default</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[options]</code></td>
<td>\u9009\u9879</td>
<td><code>LayoutDefaultOptions</code></td>
<td><code>-</code></td>
</tr>
<tr>
<td><code>[asideUser]</code></td>
<td>\u4FA7\u8FB9\u7528\u6237\u4FE1\u606F</td>
<td><code>TemplateRef&lt;void&gt;</code></td>
<td><code>-</code></td>
</tr>
<tr>
<td><code>[asideBottom]</code></td>
<td>\u4FA7\u8FB9\u5E95\u90E8\u4FE1\u606F</td>
<td><code>TemplateRef&lt;void&gt;</code></td>
<td><code>-</code></td>
</tr>
<tr>
<td><code>[nav]</code></td>
<td>\u5BFC\u822A\u4FE1\u606F</td>
<td><code>TemplateRef&lt;void&gt;</code></td>
<td><code>-</code></td>
</tr>
<tr>
<td><code>[content]</code></td>
<td>\u5185\u5BB9\u4FE1\u606F</td>
<td><code>TemplateRef&lt;void&gt;</code></td>
<td><code>-</code></td>
</tr>
<tr>
<td><code>[customError]</code></td>
<td>\u81EA\u5B9A\u4E49\u5F02\u5E38\u8DEF\u7531\u9519\u8BEF\u6D88\u606F\uFF0C\u5F53 <code>null</code> \u65F6\u8868\u793A\u4E0D\u663E\u793A\u9519\u8BEF\u6D88\u606F</td>
<td><code>string, null</code></td>
<td><code>Could not load $&#123;evt.url&#125; route</code></td>
</tr>
<tr>
<td><code>[fetchingStrictly]</code></td>
<td>\u662F\u5426\u5B8C\u5168\u53D7\u63A7\u9876\u90E8\u52A0\u8F7D\u52A8\u753B\u72B6\u6001</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[fetching]</code></td>
<td>\u9876\u90E8\u52A0\u8F7D\u52A8\u753B\u72B6\u6001</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
</tbody></table>
<h3 id="layoutdefaultoptions"><a class="lake-link"><i data-anchor="layoutdefaultoptions"></i></a>LayoutDefaultOptions</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[logo]</code></td>
<td>\u81EA\u5B9A\u4E49 Logo \u533A\u57DF</td>
<td><code>TemplateRef&lt;void&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[logoExpanded]</code></td>
<td>\u5C55\u5F00\u65F6 Logo \u5730\u5740</td>
<td><code>string</code></td>
<td><code>./assets/logo-full.svg</code></td>
</tr>
<tr>
<td><code>[logoCollapsed]</code></td>
<td>\u6536\u7F29\u65F6 Logo \u5730\u5740</td>
<td><code>string</code></td>
<td><code>./assets/logo.svg</code></td>
</tr>
<tr>
<td><code>[logoFixWidth]</code></td>
<td>\u6307\u5B9A\u56FA\u5B9A Logo \u5BBD\u5EA6</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[logoLink]</code></td>
<td>\u6307\u5B9A Logo \u8DEF\u7531\u5730\u5740</td>
<td><code>string</code></td>
<td><code>/</code></td>
</tr>
<tr>
<td><code>[hideAside]</code></td>
<td>\u9690\u85CF\u4FA7\u8FB9\u680F\uFF0C\u540C\u65F6\u4E0D\u663E\u6536\u7F29\u56FE\u6807\u6309\u94AE</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[hideHeader]</code></td>
<td>\u9690\u85CF\u9876\u680F</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[showHeaderCollapse]</code></td>
<td>\u662F\u5426\u5728\u9876\u680F\u663E\u793A\u83DC\u5355\u6298\u53E0\u6309\u94AE</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[showSiderCollapse]</code></td>
<td>\u662F\u5426\u5728\u4FA7\u8FB9\u680F\u5E95\u90E8\u663E\u793A\u83DC\u5355\u6298\u53E0\u6309\u94AE</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
</tbody></table>
<h3 id="layout-default-nav"><a class="lake-link"><i data-anchor="layout-default-nav"></i></a>layout-default-nav</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[disabledAcl]</code></td>
<td><code>acl</code> \u6821\u9A8C\u5931\u8D25\u65F6\u4EE5 <code>disabled</code> \u72B6\u6001\u663E\u793A</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[autoCloseUnderPad]</code></td>
<td>\u5C0F\u4E8EPad\u5BBD\u5EA6\u65F6\u8DEF\u7531\u5207\u6362\u540E\u81EA\u52A8\u5173\u95ED\u4FA7\u8FB9\u680F</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[recursivePath]</code></td>
<td>\u81EA\u52A8\u5411\u4E0A\u9012\u5F52\u67E5\u627E\uFF0C\u83DC\u5355\u6570\u636E\u6E90\u5305\u542B <code>/ware</code>\uFF0C\u5219 <code>/ware/1</code> \u4E5F\u89C6\u4E3A <code>/ware</code> \u9879</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[hideEmptyChildren]</code></td>
<td>\u5F53\u6240\u6709\u5B50\u9879\u90FD\u4E3A\u9690\u85CF\u65F6\uFF0C\u662F\u5426\u4E5F\u9690\u85CF\u7236\u7EA7</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[openStrictly]</code></td>
<td>\u5C55\u5F00\u5B8C\u5168\u53D7\u63A7\uFF0C\u4E0D\u518D\u81EA\u52A8\u5173\u95ED\u5DF2\u5C55\u5F00\u7684\u9879</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[maxLevelIcon]</code></td>
<td>Icon\u6700\u591A\u663E\u793A\u5230\u7B2C\u51E0\u5C42</td>
<td><code>number</code></td>
<td><code>3</code></td>
</tr>
<tr>
<td><code>(select)</code></td>
<td>\u70B9\u51FB\u83DC\u5355\u65F6\u56DE\u8C03\uFF08\u5305\u542B <code>disabled</code>\uFF09</td>
<td><code>EventEmitter&lt;Menu&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
<blockquote>
<p>\u7EC4\u4EF6\u7684\u6570\u636E\u6765\u81EA <code>MenuService</code>\uFF08\u5176\u7ED3\u6784\u4E3A <a href="/theme/menu#Menu">Menu</a>\uFF09\uFF0C <code>MenuService</code> \u7684\u64CD\u4F5C\u4F1A\u81EA\u52A8\u540C\u6B65\u81F3\u8BE5\u7EC4\u4EF6\u3002</p>
</blockquote>
<h3 id="layout-default-header-item"><a class="lake-link"><i data-anchor="layout-default-header-item"></i></a>layout-default-header-item</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[hidden]</code></td>
<td>\u9690\u85CF\u884C\u4E3A</td>
<td><code>pc, mobile, none</code></td>
<td><code>nones</code></td>
</tr>
<tr>
<td><code>[direction]</code></td>
<td>\u65B9\u5411</td>
<td><code>left, middle, right</code></td>
<td><code>right</code></td>
</tr>
</tbody></table>
<h3 id="layout-default-header-item-trigger"><a class="lake-link"><i data-anchor="layout-default-header-item-trigger"></i></a>layout-default-header-item-trigger</h3><p>\u5934\u90E8\u9879\u7684\u89E6\u53D1\u6837\u5F0F\u3002</p>
<h3 id="layout-default-top-menu-item"><a class="lake-link"><i data-anchor="layout-default-top-menu-item"></i></a>layout-default-top-menu-item</h3><p>\u5934\u90E8\u4E1A\u52A1\u83DC\u5355\u9879\uFF0C\u4F7F\u7528\u65B9\u5F0F\u8BF7\u53C2\u8003 <a href="https://github.com/ng-alain/delon/blob/master/src/dev/layout.component.ts#L65-L72" target="_blank" rel="noopener">layout.component.ts</a>(<a href="https://ng-alain.com/dev/home" target="_blank" rel="noopener">\u9884\u89C8</a>)\u3002</p>
<h2 id="\u5E03\u5C40\u8BF4\u660E"><a class="lake-link"><i data-anchor="\u5E03\u5C40\u8BF4\u660E"></i></a>\u5E03\u5C40\u8BF4\u660E</h2><p>\u6309\u4E0A-\u5DE6-\u53F3\u5E03\u5C40\u65B9\u5F0F\uFF0C\u8FD0\u7528\u4E8E<strong>\u4E1A\u52A1\u9875</strong>\u7684\u5F00\u53D1\u3002\u5176\u89C4\u8303\u7EC6\u8282\uFF1A</p>
<ul>
<li>\u9876\u90E8\u533A\u57DF\u9AD8\u5EA6 <code>64px</code>\uFF08\u53C2\u6570\uFF1A<code>&#64;header-hg</code>\uFF09</li>
<li>\u4FA7\u8FB9\u533A\u57DF\u5BBD\u5EA6 <code>200px</code>\uFF08\u53C2\u6570\uFF1A<code>&#64;aside-wd</code>\uFF09<ul>
<li>\u5F53\u5C4F\u5E55\u4F4E\u4E8E <code>1140px</code> \u5BBD\u65F6\u9690\u85CF\u4FA7\u8FB9\u5BFC\u822A</li>
<li>\u5F53\u5C4F\u5E55\u4F4E\u4E8E <code>1140px</code> \u5BBD\u65F6\u6253\u5F00\u4FA7\u8FB9\u5BFC\u822A\u4E3A <code>fixed</code> \u72B6\u6001</li>
<li>\u4E3B\u8981\u5305\u62EC\u4E00\u4E2A <a href="/theme/layout-default/zh?#layout-default-nav">layout-default-nav</a> \u7EC4\u4EF6</li>
</ul>
</li>
</ul>
<blockquote>
<p>\u53C2\u6570\u662F\u6307\u53EF\u4EE5\u901A\u8FC7 <code>src/styles/theme.less</code> \u6587\u4EF6\u6309\u9700\u8981\u8C03\u6574\u3002</p>
</blockquote>
<p><strong>\u9876\u90E8\u533A\u57DF</strong></p>
<p>\u4F4D\u7F6E\uFF1A<em>src/app/layout/base/widgets</em>\u3002</p>
<p>\u811A\u624B\u67B6\u9ED8\u8BA4\u63D0\u4F9B\u4E86\u4E00\u4E9B\u5E38\u89C4\u9876\u90E8\u533A\u57DF\u7EC4\u4EF6\uFF0C\u8FD9\u4E9B\u7EC4\u4EF6\u90FD\u5B58\u653E\u4E8E <em>components</em> \u76EE\u5F55\u4E2D\u3002\u540C\u65F6 <code>&#64;delon/abc</code> \u4E5F\u63D0\u4F9B\u82E5\u5E72\u9876\u90E8\u7EC4\u4EF6\uFF08\u4F8B\u5982\uFF1A<a href="/components/notice-icon">notice-icon</a> \u901A\u77E5\u83DC\u5355\u7EC4\u4EF6\uFF09\u3002\u4F60\u53EF\u4EE5\u6839\u636E\u63D0\u4F9B\u7684\u7EC4\u4EF6\u81EA\u884C\u7EC4\u5408\u6216\u81EA\u884C\u5F00\u53D1\u3002</p>
<blockquote>
<p>\u811A\u624B\u67B6\u652F\u6301\u54CD\u5E94\u5F0F\u5E03\u5C40\uFF0C\u5BF9\u4E8E\u9876\u90E8\u533A\u57DF\u53EF\u80FD\u4F1A\u662F\u5728\u5C0F\u5C4F\u5E55\u4E0B\u9700\u8981\u9690\u85CF\u4E00\u4E9B\u7EC4\u4EF6\uFF0C\u56E0\u6B64\u4F60\u53EF\u4EE5\u5728\u5BF9\u5E94\u7684DOM\u8282\u70B9\u4E0A\u52A0\u4E0A <code>hidden-xs</code> \u8868\u793A\u5F53\u5C4F\u5E55\u5C0F\u4E8E <code>768px</code> \u65F6\u81EA\u52A8\u9690\u85CF\u3002</p>
</blockquote>
<p><strong>\u4FA7\u8FB9\u533A\u57DF</strong></p>
<p>\u4F4D\u7F6E\uFF1A<em>src/app/layout/default/sidebar</em>\u3002</p>
<p>\u53EA\u5305\u62EC\u4E00\u4E2A\u7528\u6237\u4FE1\u606F\u548C\u4E3B\u83DC\u5355\u3002\u4E3B\u83DC\u5355\u662F\u4E00\u4E2A <a href="/theme/layout-default/zh?#layout-default-nav">layout-default-nav</a>\u3002</p>
<p><strong>\u5185\u90E8\u533A\u57DF</strong></p>
<p>\u5185\u5BB9\u533A\u57DF\u662F\u4E1A\u52A1\u9875\u533A\u57DF\uFF0C\u89C4\u8303\u7EC6\u8282\uFF1A</p>
<ul>
<li>\u5185\u5BB9\u8DDD\u79BB\u9875\u9762\u6807\u51C6\u3001\u4FA7\u8FB9\u3001\u53F3\u8FB9\u6EDA\u52A8\u6761\u3001\u5E95\u90E8\uFF0C\u8FD9\u56DB\u8FB9\u8DDD\u4F9D\u4E00\u4E2A\u6807\u51C6Dashboard\u7684Gutter\u5BBD\u5EA6 <code>24px</code>\u3002</li>
</ul>
<h2 id="\u6837\u5F0F\u53C2\u6570"><a class="lake-link"><i data-anchor="\u6837\u5F0F\u53C2\u6570"></i></a>\u6837\u5F0F\u53C2\u6570</h2><table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u529F\u80FD</th>
</tr>
</thead>
<tbody><tr>
<td><code>&#64;alain-default-prefix</code></td>
<td><code>.alain-default</code></td>
<td>\u5E03\u5C40\u6837\u5F0F\u524D\u7F00</td>
</tr>
<tr>
<td><code>&#64;alain-default-ease</code></td>
<td><code>cubic-bezier(.25, 0, .15, 1)</code></td>
<td>\u52A8\u753B\u8FC7\u6EE4\u51FD\u6570</td>
</tr>
<tr>
<td><code>&#64;alain-default-header-hg</code></td>
<td><code>64px</code></td>
<td>\u9876\u90E8\u9AD8\u5EA6</td>
</tr>
<tr>
<td><code>&#64;alain-default-header-bg</code></td>
<td><code>&#64;primary-color</code></td>
<td>\u9876\u90E8\u80CC\u666F\u8272</td>
</tr>
<tr>
<td><code>&#64;alain-default-header-padding</code></td>
<td><code>&#64;layout-gutter * 2</code></td>
<td>\u9876\u90E8\u5DE6\u53F3\u5185\u8FB9\u8DDD</td>
</tr>
<tr>
<td><code>&#64;alain-default-header-search-enabled</code></td>
<td><code>true</code></td>
<td>\u662F\u5426\u5F00\u542F\u9876\u90E8\u641C\u7D22\u6846</td>
</tr>
<tr>
<td><code>&#64;alain-default-header-icon-fs</code></td>
<td><code>18px</code></td>
<td>\u9876\u90E8 Icon \u5927\u5C0F</td>
</tr>
<tr>
<td><code>&#64;alain-default-header-logo-max-height</code></td>
<td><code>36px</code></td>
<td>Logo \u56FE\u6700\u9AD8\u9AD8\u5EA6</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-wd</code></td>
<td><code>200px</code></td>
<td>\u4FA7\u8FB9\u680F\u5BBD\u5EA6</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-bg</code></td>
<td><code>#fff</code></td>
<td>\u4FA7\u8FB9\u680F\u80CC\u666F\u8272</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-scrollbar-width</code></td>
<td><code>0</code></td>
<td>\u4FA7\u8FB9\u680F\u6EDA\u52A8\u6761\u5BBD\u5EA6</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-scrollbar-height</code></td>
<td><code>0</code></td>
<td>\u4FA7\u8FB9\u680F\u6EDA\u52A8\u6761\u9AD8\u5EA6</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-scrollbar-track-color</code></td>
<td><code>transparent</code></td>
<td>\u4FA7\u8FB9\u680F\u6EDA\u52A8\u6761\u7684\u8F68\u9053\u989C\u8272</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-scrollbar-thumb-color</code></td>
<td><code>transparent</code></td>
<td>\u4FA7\u8FB9\u680F\u6EDA\u52A8\u6761\u5C0F\u65B9\u5757\u989C\u8272</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-nav-fs</code></td>
<td><code>14px</code></td>
<td>\u4FA7\u8FB9\u680F\u83DC\u5355\u5B57\u53F7</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-nav-icon-width</code></td>
<td><code>14px</code></td>
<td>\u4FA7\u8FB9\u680F\u83DC\u5355 ICON \u5BBD\u5EA6</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-nav-img-wh</code></td>
<td><code>14px</code></td>
<td>\u4FA7\u8FB9\u680F\u83DC\u5355\u56FE\u50CF\u5BBD\u9AD8</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-nav-padding-top-bottom</code></td>
<td><code>&#64;layout-gutter</code></td>
<td>\u4FA7\u8FB9\u680F\u83DC\u5355\u9879\u4E0A\u4E0B\u5185\u8FB9\u8DDD</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-nav-padding-left-right</code></td>
<td><code>&#64;layout-gutter * 2</code></td>
<td>\u4FA7\u8FB9\u680F\u83DC\u5355\u9879\u5DE6\u53F3\u5185\u8FB9\u8DDD</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-nav-text-color</code></td>
<td><code>rgba(0, 0, 0, 0.65)</code></td>
<td>\u4FA7\u8FB9\u680F\u83DC\u5355\u6587\u672C\u989C\u8272</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-nav-text-hover-color</code></td>
<td><code>#108ee9</code></td>
<td>\u4FA7\u8FB9\u680F\u83DC\u5355\u6587\u672C\u60AC\u505C\u989C\u8272</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-nav-group-text-color</code></td>
<td><code>rgba(0, 0, 0, 0.43)</code></td>
<td>\u4FA7\u8FB9\u680F\u83DC\u5355\u5206\u7EC4\u6587\u672C\u989C\u8272</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-nav-selected-text-color</code></td>
<td><code>#108ee9</code></td>
<td>\u4FA7\u8FB9\u680F\u83DC\u5355\u6FC0\u6D3B\u65F6\u6587\u672C\u989C\u8272</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-nav-selected-bg</code></td>
<td><code>#fcfcfc</code></td>
<td>\u4FA7\u8FB9\u680F\u83DC\u5355\u6FC0\u6D3B\u65F6\u80CC\u666F\u989C\u8272</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-nav-divider-bg</code></td>
<td><code>#efe3e5</code></td>
<td>\u5206\u9694\u7EBF\u989C\u8272</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-collapsed-wd</code></td>
<td><code>&#64;layout-gutter * 8</code></td>
<td>\u4FA7\u8FB9\u680F\u6536\u7F29\u540E\u5BBD\u5EA6</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-collapsed-nav-fs</code></td>
<td><code>24px</code></td>
<td>\u4FA7\u8FB9\u680F\u6536\u7F29\u540E\u6587\u672C\u5B57\u53F7</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-collapsed-nav-img-wh</code></td>
<td><code>24px</code></td>
<td>\u4FA7\u8FB9\u680F\u6536\u7F29\u540E\u56FE\u50CF\u5BBD\u9AD8</td>
</tr>
<tr>
<td><code>&#64;alain-default-content-heading-bg</code></td>
<td><code>#fafbfc</code></td>
<td>\u5185\u5BB9\u533A\u57DF\u6807\u9898\u80CC\u666F\u8272</td>
</tr>
<tr>
<td><code>&#64;alain-default-content-heading-border</code></td>
<td><code>#efe3e5</code></td>
<td>\u5185\u5BB9\u533A\u57DF\u6807\u9898\u5E95\u90E8\u8FB9\u6846\u8272</td>
</tr>
<tr>
<td><code>&#64;alain-default-content-padding</code></td>
<td><code>&#64;layout-gutter * 3</code></td>
<td>\u5185\u5BB9\u533A\u57DF\u5185\u8FB9\u8DDD</td>
</tr>
<tr>
<td><code>&#64;alain-default-content-bg</code></td>
<td><code>#f5f7fa</code></td>
<td>\u5185\u5BB9\u533A\u57DF\u80CC\u666F\u8272</td>
</tr>
<tr>
<td><code>&#64;alain-default-widget-app-icons-enabled</code></td>
<td><code>true</code></td>
<td>\u662F\u5426 app-icon \u5C0F\u90E8\u4EF6\u6837\u5F0F</td>
</tr>
<tr>
<td><code>&#64;alain-default-aside-user-enabled</code></td>
<td><code>true</code></td>
<td>\u662F\u5426\u4FA7\u8FB9\u680F\u7528\u6237\u4FE1\u606F\u6837\u5F0F</td>
</tr>
</tbody></table>
<h2 id="\u5E38\u89C1\u95EE\u9898"><a class="lake-link"><i data-anchor="\u5E38\u89C1\u95EE\u9898"></i></a>\u5E38\u89C1\u95EE\u9898</h2><h3 id="\u4E3A\u4EC0\u4E48\u4F1A\u6709\u4E24\u4E2A\u5FEB\u6377\u83DC\u5355"><a class="lake-link"><i data-anchor="\u4E3A\u4EC0\u4E48\u4F1A\u6709\u4E24\u4E2A\u5FEB\u6377\u83DC\u5355"></i></a>\u4E3A\u4EC0\u4E48\u4F1A\u6709\u4E24\u4E2A\u5FEB\u6377\u83DC\u5355</h3><p>\u5FEB\u6377\u83DC\u5355\u751F\u6210\u89C4\u5219\u7EDF\u4E00\u5728 <code>0</code> \u7D22\u5F15\u4E0B\u67E5\u627E\uFF0C\u5E76\u6309\u4EE5\u4E0B\u987A\u5E8F\u6765\u83B7\u53D6\uFF1A</p>
<ol>
<li>\u3010\u63A8\u8350\u3011 children \u5B58\u5728 <code>shortcutRoot: true</code> \u5219\u6700\u4F18\u5148</li>
<li>\u5426\u5219\u67E5\u627E\u5E26\u6709\u3010dashboard\u3011\u5B57\u6837\u94FE\u63A5\uFF0C\u82E5\u5B58\u5728\u5219\u5728\u6B64\u83DC\u5355\u7684\u4E0B\u65B9\u521B\u5EFA\u5FEB\u6377\u5165\u53E3</li>
<li>\u5426\u5219\u653E\u57280\u8282\u70B9\u4F4D\u7F6E</li>
</ol>
<p>\u56E0\u6B64\uFF0C\u5EFA\u8BAE\u5728\u83DC\u5355\u6570\u636E\u7684 <code>0</code> \u7D22\u5F15\u4E0B\u4FDD\u6301\u4E00\u4E2A\u6709\u6548\u7684 <code>shortcutRoot: true</code> \u6570\u636E\u3002</p>
<h3 id="\u5E38\u89C1\u95EE\u9898"><a class="lake-link"><i data-anchor="\u5E38\u89C1\u95EE\u9898"></i></a>\u5E38\u89C1\u95EE\u9898</h3><p><strong>\u9690\u85CF\u4E3B\u83DC\u5355\u9879</strong></p>
<p>\u8868\u793A\u6C38\u8FDC\u4E0D\u663E\u793A\u83DC\u5355\uFF0C\u53EF\u4EE5\u5728\u83DC\u5355\u8BBE\u7F6E <code>hide: true</code>\u3002</p>
<p><strong>\u9690\u85CF\u81EA\u52A8\u751F\u6210\u5BFC\u822A\u9690\u85CF\u9762\u5305\u5C51</strong></p>
<p>\u8868\u793A\u4E0D\u663E\u793A\u8BE5\u8282\u70B9\uFF0C\u53EF\u4EE5\u5728\u83DC\u5355\u8BBE\u7F6E <code>hideInBreadcrumb: true</code>\u3002</p>
<p><strong>\u5173\u4E8E\u5C42\u7EA7</strong></p>
<p>\u867D\u7136\u652F\u6301\u65E0\u9650\u5C42\u7EA7\uFF0C\u4F46\u4E3A\u4E86\u7528\u6237\u4F53\u9A8C\u8BF7\u4FDD\u6301\u6700\u591A\u4E0D\u8D85\u8FC7\u56DB\u5C42\uFF08\u542B\u7EC4\u522B\uFF09\u3002</p>
<p><strong>\u5982\u4F55\u66F4\u65B0\u67D0\u4E2A\u83DC\u5355\u9879</strong></p>
<p>\u5F53\u8C03\u7528 <code>MenuService.setItem(key, newValue)</code> \u65F6\u4F1A\u81EA\u52A8\u91CD\u65B0\u6E32\u67D3\u4E3B\u83DC\u5355\uFF0C\u5176\u4E2D <code>key</code> \u5FC5\u987B\u662F\u5B58\u5728\u503C\uFF0C\u8BF7\u53C2\u8003 <a href="/theme/menu#Menu">Menu</a> \u7684\u5B9A\u4E49\u3002</p>
<p><strong>\u5982\u4F55\u63A7\u5236\u83DC\u5355\u5C55\u5F00</strong></p>
<p>\u5229\u7528 <code>LayoutDefaultService.toggleCollapsed()</code> \u6765\u8FD0\u884C\u65F6\u624B\u52A8\u63A7\u5236\u3002</p>
`,toc:[{id:`使用方式`,title:`使用方式`,children:[{id:`1、导入样式`,title:`1、导入样式`},{id:`2、使用`,title:`2、使用 `}]},{id:`api`,title:`API`,children:[{id:`layout-default`,title:`layout-default`},{id:`layoutdefaultoptions`,title:`LayoutDefaultOptions`},{id:`layout-default-nav`,title:`layout-default-nav`},{id:`layout-default-header-item`,title:`layout-default-header-item`},{id:`layout-default-header-item-trigger`,title:`layout-default-header-item-trigger`},{id:`layout-default-top-menu-item`,title:`layout-default-top-menu-item`}]},{id:`布局说明`,title:`布局说明`},{id:`样式参数`,title:`样式参数`},{id:`常见问题`,title:`常见问题`,children:[{id:`为什么会有两个快捷菜单`,title:`为什么会有两个快捷菜单`},{id:`常见问题`,title:`常见问题`}]}],raw:'---\ntype: Theme\norder: 100\ntitle: 默认布局\n---\n\n默认布局所有参数都以 `@alain-default-` 开头。\n\n## 使用方式\n\n### 1、导入样式\n\n在 `src/styles.less` 引入：\n\n```less\n@import \'@delon/theme/layout-default/style/index\';\n```\n\n### 2、使用 `layout-default` 组件\n\n在 `src/app/layout/basic/basic.ts` 创建一个新的布局：\n\n```ts\nimport { Component } from \'@angular/core\';\nimport { SettingsService, User } from \'@delon/theme\';\nimport { LayoutDefaultOptions } from \'@delon/theme/layout-default\';\nimport { environment } from \'@env/environment\';\n\n@Component({\n  selector: \'layout-basic\',\n  template: `\n    <layout-default [options]="options" [asideUser]="asideUserTpl" [nav]="navTpl" [content]="contentTpl">\n      <layout-default-header-item direction="left">\n        <a layout-default-header-item-trigger href="//github.com/ng-alain/ng-alain" target="_blank">\n          <nz-icon nzType="github" />\n        </a>\n      </layout-default-header-item>\n      <layout-default-header-item direction="left" hidden="pc">\n        <div layout-default-header-item-trigger (click)="searchToggleStatus = !searchToggleStatus">\n          <nz-icon nzType="search" />\n        </div>\n      </layout-default-header-item>\n      <layout-default-header-item direction="middle">\n        <header-search class="alain-default__search" [toggleChange]="searchToggleStatus" />\n      </layout-default-header-item>\n      <layout-default-header-item direction="right" hidden="mobile">\n        <header-task />\n      </layout-default-header-item>\n      <ng-template #asideUserTpl>\n        <div nz-dropdown nzTrigger="click" [nzDropdownMenu]="userMenu" class="alain-default__aside-user">\n          <nz-avatar class="alain-default__aside-user-avatar" [nzSrc]="user.avatar" />\n          <div class="alain-default__aside-user-info">\n            <strong>{{ user.name }}</strong>\n            <p class="mb0">{{ user.email }}</p>\n          </div>\n        </div>\n        <nz-dropdown-menu #userMenu="nzDropdownMenu">\n          <ul nz-menu>\n            <li nz-menu-item routerLink="/pro/account/center">{{ \'menu.account.center\' | i18n }}</li>\n            <li nz-menu-item routerLink="/pro/account/settings">{{ \'menu.account.settings\' | i18n }}</li>\n          </ul>\n        </nz-dropdown-menu>\n      </ng-template>\n      <ng-template #navTpl>\n        <layout-default-nav class="d-block py-lg" />\n      </ng-template>\n      <ng-template #contentTpl>\n        <router-outlet />\n      </ng-template>\n    </layout-default>\n\n    @if (showSettingDrawer) {\n      <setting-drawer />\n    }\n    <theme-btn />\n  `,\n})\nexport class LayoutBasic {\n  readonly user = inject(SettingsService).user;\n  protected options: LayoutDefaultOptions = {\n    logoExpanded: `./assets/logo-full.svg`,\n    logoCollapsed: `./assets/logo.svg`\n  };\n  protected searchToggleStatus = signal(false);\n  protected showSettingDrawer = !environment.production;\n}\n```\n\n通过 `LayoutDefaultService` 服务可以在运行时动态管理布局。除此之外，在布局的操作都可以通过 `SettingsService.notify` 来订阅布局的变化（例如：侧边栏的展开与收缩等），注意所有布局相关的变化都会通过这个接口，所以需要做好 `filter` 操作。\n\n## API\n\n### layout-default\n\n| 成员 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[options]` | 选项 | `LayoutDefaultOptions` | `-` |\n| `[asideUser]` | 侧边用户信息 | `TemplateRef<void>` | `-` |\n| `[asideBottom]` | 侧边底部信息 | `TemplateRef<void>` | `-` |\n| `[nav]` | 导航信息 | `TemplateRef<void>` | `-` |\n| `[content]` | 内容信息 | `TemplateRef<void>` | `-` |\n| `[customError]` | 自定义异常路由错误消息，当 `null` 时表示不显示错误消息 | `string, null` | `Could not load ${evt.url} route` |\n| `[fetchingStrictly]` | 是否完全受控顶部加载动画状态 | `boolean` | `false` |\n| `[fetching]` | 顶部加载动画状态 | `boolean` | `false` |\n\n### LayoutDefaultOptions\n\n| 成员 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[logo]` | 自定义 Logo 区域 | `TemplateRef<void>` | - |\n| `[logoExpanded]` | 展开时 Logo 地址 | `string` | `./assets/logo-full.svg` |\n| `[logoCollapsed]` | 收缩时 Logo 地址 | `string` | `./assets/logo.svg` |\n| `[logoFixWidth]` | 指定固定 Logo 宽度 | `number` | - |\n| `[logoLink]` | 指定 Logo 路由地址 | `string` | `/` |\n| `[hideAside]` | 隐藏侧边栏，同时不显收缩图标按钮 | `boolean` | `false` |\n| `[hideHeader]` | 隐藏顶栏 | `boolean` | `false` |\n| `[showHeaderCollapse]` | 是否在顶栏显示菜单折叠按钮 | `boolean` | `true` |\n| `[showSiderCollapse]` | 是否在侧边栏底部显示菜单折叠按钮 | `boolean` | `false` |\n\n### layout-default-nav\n\n| 成员 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[disabledAcl]` | `acl` 校验失败时以 `disabled` 状态显示 | `boolean` | `false` |\n| `[autoCloseUnderPad]` | 小于Pad宽度时路由切换后自动关闭侧边栏 | `boolean` | `true` |\n| `[recursivePath]` | 自动向上递归查找，菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项 | `boolean` | `true` |\n| `[hideEmptyChildren]` | 当所有子项都为隐藏时，是否也隐藏父级 | `boolean` | `true` |\n| `[openStrictly]` | 展开完全受控，不再自动关闭已展开的项 | `boolean` | `false` |\n| `[maxLevelIcon]` | Icon最多显示到第几层 | `number` | `3` |\n| `(select)` | 点击菜单时回调（包含 `disabled`） | `EventEmitter<Menu>` | - |\n\n> 组件的数据来自 `MenuService`（其结构为 [Menu](/theme/menu#Menu)）， `MenuService` 的操作会自动同步至该组件。\n\n### layout-default-header-item\n\n| 成员 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[hidden]` | 隐藏行为 | `pc, mobile, none` | `nones` |\n| `[direction]` | 方向 | `left, middle, right` | `right` |\n\n### layout-default-header-item-trigger\n\n头部项的触发样式。\n\n### layout-default-top-menu-item\n\n头部业务菜单项，使用方式请参考 [layout.component.ts](https://github.com/ng-alain/delon/blob/master/src/dev/layout.component.ts#L65-L72)([预览](https://ng-alain.com/dev/home))。\n\n## 布局说明\n\n按上-左-右布局方式，运用于**业务页**的开发。其规范细节：\n\n+ 顶部区域高度 `64px`（参数：`@header-hg`）\n+ 侧边区域宽度 `200px`（参数：`@aside-wd`）\n  + 当屏幕低于 `1140px` 宽时隐藏侧边导航\n  + 当屏幕低于 `1140px` 宽时打开侧边导航为 `fixed` 状态\n  + 主要包括一个 [layout-default-nav](/theme/layout-default/zh?#layout-default-nav) 组件\n\n> 参数是指可以通过 `src/styles/theme.less` 文件按需要调整。\n\n**顶部区域**\n\n位置：*src/app/layout/base/widgets*。\n\n脚手架默认提供了一些常规顶部区域组件，这些组件都存放于 *components* 目录中。同时 `@delon/abc` 也提供若干顶部组件（例如：[notice-icon](/components/notice-icon) 通知菜单组件）。你可以根据提供的组件自行组合或自行开发。\n\n> 脚手架支持响应式布局，对于顶部区域可能会是在小屏幕下需要隐藏一些组件，因此你可以在对应的DOM节点上加上 `hidden-xs` 表示当屏幕小于 `768px` 时自动隐藏。\n\n**侧边区域**\n\n位置：*src/app/layout/default/sidebar*。\n\n只包括一个用户信息和主菜单。主菜单是一个 [layout-default-nav](/theme/layout-default/zh?#layout-default-nav)。\n\n**内部区域**\n\n内容区域是业务页区域，规范细节：\n\n+ 内容距离页面标准、侧边、右边滚动条、底部，这四边距依一个标准Dashboard的Gutter宽度 `24px`。\n\n## 样式参数\n\n| 名称 | 默认值 | 功能 |\n|----|-----|----|\n| `@alain-default-prefix` | `.alain-default` | 布局样式前缀 |\n| `@alain-default-ease` | `cubic-bezier(.25, 0, .15, 1)` | 动画过滤函数 |\n| `@alain-default-header-hg` | `64px` | 顶部高度 |\n| `@alain-default-header-bg` | `@primary-color` | 顶部背景色 |\n| `@alain-default-header-padding` | `@layout-gutter * 2` | 顶部左右内边距 |\n| `@alain-default-header-search-enabled` | `true` | 是否开启顶部搜索框 |\n| `@alain-default-header-icon-fs` | `18px` | 顶部 Icon 大小 |\n| `@alain-default-header-logo-max-height` | `36px` | Logo 图最高高度 |\n| `@alain-default-aside-wd` | `200px` | 侧边栏宽度 |\n| `@alain-default-aside-bg` | `#fff` | 侧边栏背景色 |\n| `@alain-default-aside-scrollbar-width` | `0` | 侧边栏滚动条宽度 |\n| `@alain-default-aside-scrollbar-height` | `0` | 侧边栏滚动条高度 |\n| `@alain-default-aside-scrollbar-track-color` | `transparent` | 侧边栏滚动条的轨道颜色 |\n| `@alain-default-aside-scrollbar-thumb-color` | `transparent` | 侧边栏滚动条小方块颜色 |\n| `@alain-default-aside-nav-fs` | `14px` | 侧边栏菜单字号 |\n| `@alain-default-aside-nav-icon-width` | `14px` | 侧边栏菜单 ICON 宽度 |\n| `@alain-default-aside-nav-img-wh` | `14px` | 侧边栏菜单图像宽高 |\n| `@alain-default-aside-nav-padding-top-bottom` | `@layout-gutter` | 侧边栏菜单项上下内边距 |\n| `@alain-default-aside-nav-padding-left-right` | `@layout-gutter * 2` | 侧边栏菜单项左右内边距 |\n| `@alain-default-aside-nav-text-color` | `rgba(0, 0, 0, 0.65)` | 侧边栏菜单文本颜色 |\n| `@alain-default-aside-nav-text-hover-color` | `#108ee9` | 侧边栏菜单文本悬停颜色 |\n| `@alain-default-aside-nav-group-text-color` | `rgba(0, 0, 0, 0.43)` | 侧边栏菜单分组文本颜色 |\n| `@alain-default-aside-nav-selected-text-color` | `#108ee9` | 侧边栏菜单激活时文本颜色 |\n| `@alain-default-aside-nav-selected-bg` | `#fcfcfc` | 侧边栏菜单激活时背景颜色 |\n| `@alain-default-aside-nav-divider-bg` | `#efe3e5` | 分隔线颜色 |\n| `@alain-default-aside-collapsed-wd` | `@layout-gutter * 8` | 侧边栏收缩后宽度 |\n| `@alain-default-aside-collapsed-nav-fs` | `24px` | 侧边栏收缩后文本字号 |\n| `@alain-default-aside-collapsed-nav-img-wh` | `24px` | 侧边栏收缩后图像宽高 |\n| `@alain-default-content-heading-bg` | `#fafbfc` | 内容区域标题背景色 |\n| `@alain-default-content-heading-border` | `#efe3e5` | 内容区域标题底部边框色 |\n| `@alain-default-content-padding` | `@layout-gutter * 3` | 内容区域内边距 |\n| `@alain-default-content-bg` | `#f5f7fa` | 内容区域背景色 |\n| `@alain-default-widget-app-icons-enabled` | `true` | 是否 app-icon 小部件样式 |\n| `@alain-default-aside-user-enabled` | `true` | 是否侧边栏用户信息样式 |\n\n## 常见问题\n\n### 为什么会有两个快捷菜单\n\n快捷菜单生成规则统一在 `0` 索引下查找，并按以下顺序来获取：\n\n1. 【推荐】 children 存在 `shortcutRoot: true` 则最优先\n2. 否则查找带有【dashboard】字样链接，若存在则在此菜单的下方创建快捷入口\n3. 否则放在0节点位置\n\n因此，建议在菜单数据的 `0` 索引下保持一个有效的 `shortcutRoot: true` 数据。\n\n### 常见问题\n\n**隐藏主菜单项**\n\n表示永远不显示菜单，可以在菜单设置 `hide: true`。\n\n**隐藏自动生成导航隐藏面包屑**\n\n表示不显示该节点，可以在菜单设置 `hideInBreadcrumb: true`。\n\n**关于层级**\n\n虽然支持无限层级，但为了用户体验请保持最多不超过四层（含组别）。\n\n**如何更新某个菜单项**\n\n当调用 `MenuService.setItem(key, newValue)` 时会自动重新渲染主菜单，其中 `key` 必须是存在值，请参考 [Menu](/theme/menu#Menu) 的定义。\n\n**如何控制菜单展开**\n\n利用 `LayoutDefaultService.toggleCollapsed()` 来运行时手动控制。'}}};codes=[];static ɵfac=function(e){return new(e||n)};static ɵcmp=_e({type:n,selectors:[[`theme-layout-default`]],hostAttrs:[1,`d-block`],decls:1,vars:2,consts:[[3,`codes`,`item`]],template:function(e,t){e&1&&lt(0,`app-docs`,0),e&2&&re(`codes`,t.codes)(`item`,t.item)},dependencies:[rt],encapsulation:2})};var P=class n{item={name:`layout-blank`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{order:110,title:`Blank Layout`,description:`Used for any top and side areas, typically for highly customizable pages such as large screen data. The blank layout all parameters are prefixed with `,group:`Theme`,path:`packages/theme/layout-blank/index.en-US.md`,url:`/theme/layout-blank/en`},text:`<p>Used for any top and side areas, typically for highly customizable pages such as large screen data. The blank layout all parameters are prefixed with <code>&#64;alain-blank-</code>.</p>
<h2 id="usage"><a class="lake-link"><i data-anchor="usage"></i></a>Usage</h2><p>Import in <code>src/styles.less</code>:</p>
<pre><code class="language-less">&#64;import &#39;&#64;delon/theme/layout-blank/style/index&#39;;
</code></pre>
<h2 id="parameters"><a class="lake-link"><i data-anchor="parameters"></i></a>Parameters</h2><table>
<thead>
<tr>
<th>Name</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>&#64;prefix</code></td>
<td><code>.alain-blank</code></td>
<td>Style name prefix</td>
</tr>
<tr>
<td><code>&#64;bg</code></td>
<td><code>#f5f7fa</code></td>
<td>Background color</td>
</tr>
<tr>
<td><code>&#64;content-padding-vertical</code></td>
<td><code>0</code></td>
<td>Vertical padding</td>
</tr>
<tr>
<td><code>&#64;content-padding-horizontal</code></td>
<td><code>16px</code></td>
<td>Horizontal padding</td>
</tr>
</tbody></table>
`,api:``,toc:[{id:`usage`,title:`Usage`},{id:`parameters`,title:`Parameters`}],raw:"---\ntype: Theme\norder: 110\ntitle: Blank Layout\n---\n\nUsed for any top and side areas, typically for highly customizable pages such as large screen data. The blank layout all parameters are prefixed with `@alain-blank-`.\n\n## Usage\n\nImport in `src/styles.less`:\n\n```less\n@import '@delon/theme/layout-blank/style/index';\n```\n\n## Parameters\n\n| Name | Default | Description |\n| --- | --- | --- |\n| `@prefix` | `.alain-blank` | Style name prefix |\n| `@bg` | `#f5f7fa` | Background color |\n| `@content-padding-vertical` | `0` | Vertical padding |\n| `@content-padding-horizontal` | `16px` | Horizontal padding |"},"zh-CN":{meta:{order:110,title:`空白布局`,description:`用于无须任何顶部和侧边区域，一般用于高定制性页面，诸如大屏幕数据等。默认布局所有参数都以 @alain-blank- 开头。在 src/styles.less 引入：`,group:`Theme`,path:`packages/theme/layout-blank/index.zh-CN.md`,url:`/theme/layout-blank/zh`},text:`<p>\u7528\u4E8E\u65E0\u987B\u4EFB\u4F55\u9876\u90E8\u548C\u4FA7\u8FB9\u533A\u57DF\uFF0C\u4E00\u822C\u7528\u4E8E\u9AD8\u5B9A\u5236\u6027\u9875\u9762\uFF0C\u8BF8\u5982\u5927\u5C4F\u5E55\u6570\u636E\u7B49\u3002\u9ED8\u8BA4\u5E03\u5C40\u6240\u6709\u53C2\u6570\u90FD\u4EE5 <code>&#64;alain-blank-</code> \u5F00\u5934\u3002</p>
<h2 id="\u4F7F\u7528\u65B9\u5F0F"><a class="lake-link"><i data-anchor="\u4F7F\u7528\u65B9\u5F0F"></i></a>\u4F7F\u7528\u65B9\u5F0F</h2><p>\u5728 <code>src/styles.less</code> \u5F15\u5165\uFF1A</p>
<pre><code class="language-less">&#64;import &#39;&#64;delon/theme/layout-blank/style/index&#39;;
</code></pre>
<h2 id="\u53C2\u6570"><a class="lake-link"><i data-anchor="\u53C2\u6570"></i></a>\u53C2\u6570</h2><table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u529F\u80FD</th>
</tr>
</thead>
<tbody><tr>
<td><code>&#64;prefix</code></td>
<td><code>.alain-blank</code></td>
<td>\u5E03\u5C40\u6837\u5F0F\u524D\u7F00</td>
</tr>
<tr>
<td><code>&#64;bg</code></td>
<td><code>#f5f7fa</code></td>
<td>\u80CC\u666F\u8272</td>
</tr>
<tr>
<td><code>&#64;content-padding-vertical</code></td>
<td><code>0</code></td>
<td>\u5782\u76F4\u5185\u8FB9\u8DDD</td>
</tr>
<tr>
<td><code>&#64;content-padding-horizontal</code></td>
<td><code>16px</code></td>
<td>\u6C34\u5E73\u5185\u8FB9\u8DDD</td>
</tr>
</tbody></table>
`,api:``,toc:[{id:`使用方式`,title:`使用方式`},{id:`参数`,title:`参数`}],raw:"---\ntype: Theme\norder: 110\ntitle: 空白布局\n---\n\n用于无须任何顶部和侧边区域，一般用于高定制性页面，诸如大屏幕数据等。默认布局所有参数都以 `@alain-blank-` 开头。\n\n## 使用方式\n\n在 `src/styles.less` 引入：\n\n```less\n@import '@delon/theme/layout-blank/style/index';\n```\n\n## 参数\n\n| 名称 | 默认值 | 功能 |\n| --- | --- | --- |\n| `@prefix` | `.alain-blank` | 布局样式前缀 |\n| `@bg` | `#f5f7fa` | 背景色 |\n| `@content-padding-vertical` | `0` | 垂直内边距 |\n| `@content-padding-horizontal` | `16px` | 水平内边距 |"}}};codes=[];static ɵfac=function(e){return new(e||n)};static ɵcmp=_e({type:n,selectors:[[`theme-layout-blank`]],hostAttrs:[1,`d-block`],decls:1,vars:2,consts:[[3,`codes`,`item`]],template:function(e,t){e&1&&lt(0,`app-docs`,0),e&2&&re(`codes`,t.codes)(`item`,t.item)},dependencies:[rt],encapsulation:2})};var U=class n{item={name:`theme-btn`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{title:`theme-btn`,subtitle:`Component-Change Style`,cols:1,order:1001,module:`import { ThemeBtnModule } from '@delon/theme/theme-btn';`,description:`It is used to switch the customized style file during the running process, so as to play the online skin change function.`,group:`Theme`,path:`packages/theme/theme-btn/index.en-US.md`,url:`/theme/theme-btn/en`},text:`<p>It is used to switch the customized style file during the running process, so as to play the online skin change function.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="layout-default"><a class="lake-link"><i data-anchor="layout-default"></i></a>layout-default</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[types]</code></td>
<td>Type of theme list</td>
<td><code>ThemeBtnType[]</code></td>
<td><code>[ &#123; key: &#39;default&#39;, text: &#39;Default Theme&#39; &#125;, &#123; key: &#39;dark&#39;, text: &#39;Dark Theme&#39; &#125;, &#123; key: &#39;compact&#39;, text: &#39;Compact Theme&#39; &#125;, ]</code></td>
</tr>
<tr>
<td><code>[devTips]</code></td>
<td>Tips in development</td>
<td><code>String</code></td>
<td><code>When the dark.css file can&#39;t be found, you need to run it once: npm run theme</code></td>
</tr>
<tr>
<td><code>[deployUrl]</code></td>
<td>URL where files will be deployed. Generally needed when using <code>ng b --deploy-url</code></td>
<td><code>String</code></td>
<td><code>-</code></td>
</tr>
<tr>
<td><code>(themeChange)</code></td>
<td>Theme Change Notification</td>
<td><code>EventEmitter&lt;string&gt;</code></td>
<td><code>-</code></td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`layout-default`,title:`layout-default`}]}],raw:"---\ntype: Theme\ntitle: theme-btn\nsubtitle: Component-Change Style\ncols: 1\norder: 1001\nmodule: import { ThemeBtnModule } from '@delon/theme/theme-btn';\n---\n\nIt is used to switch the customized style file during the running process, so as to play the online skin change function.\n\n## API\n\n### layout-default\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[types]` | Type of theme list | `ThemeBtnType[]` | `[ { key: 'default', text: 'Default Theme' }, { key: 'dark', text: 'Dark Theme' }, { key: 'compact', text: 'Compact Theme' }, ]` |\n| `[devTips]` | Tips in development | `String` | `When the dark.css file can't be found, you need to run it once: npm run theme` |\n| `[deployUrl]` | URL where files will be deployed. Generally needed when using `ng b --deploy-url` | `String` | `-` |\n| `(themeChange)` | Theme Change Notification | `EventEmitter<string>` | `-` |"},"zh-CN":{meta:{title:`theme-btn`,subtitle:`组件-切换样式`,cols:1,order:1001,module:`import { ThemeBtnModule } from '@delon/theme/theme-btn';`,description:`用于在运行过程中切换定制样式文件，从而起到换在线换肤功能。`,group:`Theme`,path:`packages/theme/theme-btn/index.zh-CN.md`,url:`/theme/theme-btn/zh`},text:`<p>\u7528\u4E8E\u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u5207\u6362\u5B9A\u5236\u6837\u5F0F\u6587\u4EF6\uFF0C\u4ECE\u800C\u8D77\u5230\u6362\u5728\u7EBF\u6362\u80A4\u529F\u80FD\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="layout-default"><a class="lake-link"><i data-anchor="layout-default"></i></a>layout-default</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[types]</code></td>
<td>\u7C7B\u578B\u5217\u8868</td>
<td><code>ThemeBtnType[]</code></td>
<td><code>[ &#123; key: &#39;default&#39;, text: &#39;Default Theme&#39; &#125;, &#123; key: &#39;dark&#39;, text: &#39;Dark Theme&#39; &#125;, &#123; key: &#39;compact&#39;, text: &#39;Compact Theme&#39; &#125;, ]</code></td>
</tr>
<tr>
<td><code>[devTips]</code></td>
<td>\u5F00\u53D1\u63D0\u793A</td>
<td><code>String</code></td>
<td><code>When the dark.css file can&#39;t be found, you need to run it once: npm run theme</code></td>
</tr>
<tr>
<td><code>[deployUrl]</code></td>
<td>\u6587\u4EF6\u5C06\u90E8\u7F72\u5230\u7684 URL\uFF0C\u4E00\u822C\u5230\u4F7F\u7528 <code>ng b --deploy-url</code> \u65F6\u9700\u8981</td>
<td><code>String</code></td>
<td><code>-</code></td>
</tr>
<tr>
<td><code>(themeChange)</code></td>
<td>\u4E3B\u9898\u53D8\u66F4\u901A\u77E5</td>
<td><code>EventEmitter&lt;string&gt;</code></td>
<td><code>-</code></td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`layout-default`,title:`layout-default`}]}],raw:"---\ntype: Theme\ntitle: theme-btn\nsubtitle: 组件-切换样式\ncols: 1\norder: 1001\nmodule: import { ThemeBtnModule } from '@delon/theme/theme-btn';\n---\n\n用于在运行过程中切换定制样式文件，从而起到换在线换肤功能。\n\n## API\n\n### layout-default\n\n| 成员 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[types]` | 类型列表 | `ThemeBtnType[]` | `[ { key: 'default', text: 'Default Theme' }, { key: 'dark', text: 'Dark Theme' }, { key: 'compact', text: 'Compact Theme' }, ]` |\n| `[devTips]` | 开发提示 | `String` | `When the dark.css file can't be found, you need to run it once: npm run theme` |\n| `[deployUrl]` | 文件将部署到的 URL，一般到使用 `ng b --deploy-url` 时需要 | `String` | `-` |\n| `(themeChange)` | 主题变更通知 | `EventEmitter<string>` | `-` |"}}};codes=[];static ɵfac=function(e){return new(e||n)};static ɵcmp=_e({type:n,selectors:[[`theme-theme-btn`]],hostAttrs:[1,`d-block`],decls:1,vars:2,consts:[[3,`codes`,`item`]],template:function(e,t){e&1&&lt(0,`app-docs`,0),e&2&&re(`codes`,t.codes)(`item`,t.item)},dependencies:[rt],encapsulation:2})};var E=class n{item={name:`index`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{order:1,title:`PreloadOptionalModules`,description:`Optional pre-loading module loading, when it's necessary to load the resource at the first page load for some lazy routes. For example, by default, th...`,group:`Router`,path:`packages/theme/src/router/index.en-US.md`,url:`/theme/index/en`},text:`<p>Optional pre-loading module loading, when it&#39;s necessary to load the resource at the first page load for some lazy routes. For example, by default, the <code>order</code> module must first access the <code>/order</code> route before it will actually start download resource files. When using <code>PreloadOptionalModules</code> and specifying <code>preload: true</code>, it will automatically download resource files after the Angular project is started.</p>
<pre><code class="language-ts">&#64;NgModule(&#123;
 providers: [PreloadOptionalModules],
 imports: [
   RouterModule.forRoot([
    &#123;
      path: &#39;order&#39;,
      loadChildren: () =&gt; import(&#39;./order/order.module&#39;).then(m =&gt; m.OrderModule),
      data: &#123; preload: true &#125;
    &#125;,
   ], &#123; 
    preloadingStrategy: PreloadOptionalModules
  &#125;)]
&#125;)
</code></pre>
`,api:``,toc:[],raw:`---
order: 1
title: PreloadOptionalModules
type: Router
---

Optional pre-loading module loading, when it's necessary to load the resource at the first page load for some lazy routes. For example, by default, the \`order\` module must first access the \`/order\` route before it will actually start download resource files. When using \`PreloadOptionalModules\` and specifying \`preload: true\`, it will automatically download resource files after the Angular project is started.

\`\`\`ts
@NgModule({
 providers: [PreloadOptionalModules],
 imports: [
   RouterModule.forRoot([
    {
      path: 'order',
      loadChildren: () => import('./order/order.module').then(m => m.OrderModule),
      data: { preload: true }
    },
   ], { 
    preloadingStrategy: PreloadOptionalModules
  })]
})
\`\`\``},"zh-CN":{meta:{order:1,title:`PreloadOptionalModules`,description:`可选预加载模块，当需要对某些懒加载在第一次页面加载时也一并加载该资源时。例如 order 模块默认情况下必须第一次访问 /order 路由时才会真正的开始下载资源文件，当通过使用 PreloadOptionalModules 并指定 preload: true 时，会在 Angular 项目启动后自...`,group:`Router`,path:`packages/theme/src/router/index.zh-CN.md`,url:`/theme/index/zh`},text:`<p>\u53EF\u9009\u9884\u52A0\u8F7D\u6A21\u5757\uFF0C\u5F53\u9700\u8981\u5BF9\u67D0\u4E9B\u61D2\u52A0\u8F7D\u5728\u7B2C\u4E00\u6B21\u9875\u9762\u52A0\u8F7D\u65F6\u4E5F\u4E00\u5E76\u52A0\u8F7D\u8BE5\u8D44\u6E90\u65F6\u3002\u4F8B\u5982 <code>order</code> \u6A21\u5757\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5FC5\u987B\u7B2C\u4E00\u6B21\u8BBF\u95EE <code>/order</code> \u8DEF\u7531\u65F6\u624D\u4F1A\u771F\u6B63\u7684\u5F00\u59CB\u4E0B\u8F7D\u8D44\u6E90\u6587\u4EF6\uFF0C\u5F53\u901A\u8FC7\u4F7F\u7528 <code>PreloadOptionalModules</code> \u5E76\u6307\u5B9A <code>preload: true</code> \u65F6\uFF0C\u4F1A\u5728 Angular \u9879\u76EE\u542F\u52A8\u540E\u81EA\u52A8\u4E0B\u8F7D\u8D44\u6E90\u6587\u4EF6\u3002</p>
<pre><code class="language-ts">&#64;NgModule(&#123;
 providers: [PreloadOptionalModules],
 imports: [
   RouterModule.forRoot([
    &#123;
      path: &#39;order&#39;,
      loadChildren: () =&gt; import(&#39;./order/order.module&#39;).then(m =&gt; m.OrderModule),
      data: &#123; preload: true &#125;
    &#125;,
   ], &#123; 
    preloadingStrategy: PreloadOptionalModules
  &#125;)]
&#125;)
</code></pre>
`,api:``,toc:[],raw:`---
order: 1
title: PreloadOptionalModules
type: Router
---

\u53EF\u9009\u9884\u52A0\u8F7D\u6A21\u5757\uFF0C\u5F53\u9700\u8981\u5BF9\u67D0\u4E9B\u61D2\u52A0\u8F7D\u5728\u7B2C\u4E00\u6B21\u9875\u9762\u52A0\u8F7D\u65F6\u4E5F\u4E00\u5E76\u52A0\u8F7D\u8BE5\u8D44\u6E90\u65F6\u3002\u4F8B\u5982 \`order\` \u6A21\u5757\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5FC5\u987B\u7B2C\u4E00\u6B21\u8BBF\u95EE \`/order\` \u8DEF\u7531\u65F6\u624D\u4F1A\u771F\u6B63\u7684\u5F00\u59CB\u4E0B\u8F7D\u8D44\u6E90\u6587\u4EF6\uFF0C\u5F53\u901A\u8FC7\u4F7F\u7528 \`PreloadOptionalModules\` \u5E76\u6307\u5B9A \`preload: true\` \u65F6\uFF0C\u4F1A\u5728 Angular \u9879\u76EE\u542F\u52A8\u540E\u81EA\u52A8\u4E0B\u8F7D\u8D44\u6E90\u6587\u4EF6\u3002

\`\`\`ts
@NgModule({
 providers: [PreloadOptionalModules],
 imports: [
   RouterModule.forRoot([
    {
      path: 'order',
      loadChildren: () => import('./order/order.module').then(m => m.OrderModule),
      data: { preload: true }
    },
   ], { 
    preloadingStrategy: PreloadOptionalModules
  })]
})
\`\`\``}}};codes=[];static ɵfac=function(e){return new(e||n)};static ɵcmp=_e({type:n,selectors:[[`theme-index`]],hostAttrs:[1,`d-block`],decls:1,vars:2,consts:[[3,`codes`,`item`]],template:function(e,t){e&1&&lt(0,`app-docs`,0),e&2&&re(`codes`,t.codes)(`item`,t.item)},dependencies:[rt],encapsulation:2})};var H=class n{item={name:`date`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{order:1,title:`_date`,subtitle:`Date`,description:`Based on date-fns date formatting, see more details date-fns (China mirror: moment format)date-fns supports different kinds of time formats, such as:2...`,group:`Pipe`,path:`packages/theme/src/pipes/date/index.en-US.md`,url:`/theme/date/en`},text:`<p>Based on date-fns date formatting, see more details <a href="https://date-fns.org/v1.29.0/docs/format" target="_blank" rel="noopener">date-fns</a> (China mirror: <a href="http://Momentjs.cn/docs/#/displaying/format/" target="_blank" rel="noopener">moment format</a>)</p>
<p>date-fns supports different kinds of time formats, such as:</p>
<ul>
<li>2018-08-24 18:08:20</li>
<li>2018-08-24</li>
<li>20180824</li>
<li>1503571962333</li>
</ul>
<pre><code class="language-html">&#123;&#123;data.registered | _date: &#39;yyyy\u5E74MM\u6708dd\u65E5&#39;&#125;&#125;
</code></pre>
<p>Output:</p>
<pre><code class="language-txt">2017\u5E7408\u670824\u65E5
</code></pre>
`,api:``,toc:[],raw:`---
order: 1
title: _date
subtitle: Date
type: Pipe
---

Based on date-fns date formatting, see more details [date-fns](https://date-fns.org/v1.29.0/docs/format) (China mirror: [moment format](http://Momentjs.cn/docs/#/displaying/format/))

date-fns supports different kinds of time formats, such as:

+ 2018-08-24 18:08:20
+ 2018-08-24
+ 20180824
+ 1503571962333

\`\`\`html
{{data.registered | _date: 'yyyy\u5E74MM\u6708dd\u65E5'}}
\`\`\`

Output:

\`\`\`txt
2017\u5E7408\u670824\u65E5
\`\`\``},"zh-CN":{meta:{order:1,title:`_date`,subtitle:`日期`,description:`基于 date-fns 日期格式化，显示更多细节参考 date-fns（国内镜像：moment format）最大好处是 date-fns 支持不同种类的时间格式，例如：2018-08-24 18:08:202018-08-24201808241503571962333等等。输出：`,group:`Pipe`,path:`packages/theme/src/pipes/date/index.zh-CN.md`,url:`/theme/date/zh`},text:`<p>\u57FA\u4E8E date-fns \u65E5\u671F\u683C\u5F0F\u5316\uFF0C\u663E\u793A\u66F4\u591A\u7EC6\u8282\u53C2\u8003 <a href="https://date-fns.org/v1.29.0/docs/format" target="_blank" rel="noopener">date-fns</a>\uFF08\u56FD\u5185\u955C\u50CF\uFF1A<a href="http://momentjs.cn/docs/#/displaying/format/" target="_blank" rel="noopener">moment format</a>\uFF09</p>
<p>\u6700\u5927\u597D\u5904\u662F date-fns \u652F\u6301\u4E0D\u540C\u79CD\u7C7B\u7684\u65F6\u95F4\u683C\u5F0F\uFF0C\u4F8B\u5982\uFF1A</p>
<ul>
<li>2018-08-24 18:08:20</li>
<li>2018-08-24</li>
<li>20180824</li>
<li>1503571962333</li>
</ul>
<p>\u7B49\u7B49\u3002</p>
<pre><code class="language-html">&#123;&#123;data.registered | _date: &#39;yyyy\u5E74MM\u6708dd\u65E5&#39;&#125;&#125;
</code></pre>
<p>\u8F93\u51FA\uFF1A</p>
<pre><code class="language-txt">2017\u5E7408\u670824\u65E5
</code></pre>
`,api:``,toc:[],raw:`---
order: 1
title: _date
subtitle: \u65E5\u671F
type: Pipe
---

\u57FA\u4E8E date-fns \u65E5\u671F\u683C\u5F0F\u5316\uFF0C\u663E\u793A\u66F4\u591A\u7EC6\u8282\u53C2\u8003 [date-fns](https://date-fns.org/v1.29.0/docs/format)\uFF08\u56FD\u5185\u955C\u50CF\uFF1A[moment format](http://momentjs.cn/docs/#/displaying/format/)\uFF09

\u6700\u5927\u597D\u5904\u662F date-fns \u652F\u6301\u4E0D\u540C\u79CD\u7C7B\u7684\u65F6\u95F4\u683C\u5F0F\uFF0C\u4F8B\u5982\uFF1A

+ 2018-08-24 18:08:20
+ 2018-08-24
+ 20180824
+ 1503571962333

\u7B49\u7B49\u3002

\`\`\`html
{{data.registered | _date: 'yyyy\u5E74MM\u6708dd\u65E5'}}
\`\`\`

\u8F93\u51FA\uFF1A

\`\`\`txt
2017\u5E7408\u670824\u65E5
\`\`\``}}};codes=[];static ɵfac=function(e){return new(e||n)};static ɵcmp=_e({type:n,selectors:[[`theme-date`]],hostAttrs:[1,`d-block`],decls:1,vars:2,consts:[[3,`codes`,`item`]],template:function(e,t){e&1&&lt(0,`app-docs`,0),e&2&&re(`codes`,t.codes)(`item`,t.item)},dependencies:[rt],encapsulation:2})};var W=class n{item={name:`keys`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{order:1,title:`keys`,subtitle:`Keys`,description:`Transforms Object or Map into an array of key value pairs.Data:Use:DictionaryIf you want to keep the key name number numeric:Angular 6.1.0 will suppor...`,group:`Pipe`,path:`packages/theme/src/pipes/keys/index.en-US.md`,url:`/theme/keys/en`},text:`<p>Transforms Object or Map into an array of key value pairs.</p>
<p>Data:</p>
<pre><code class="language-typescript">const data = &#123; name: &#39;cipchk&#39;, address: &#123; city: &#39;shanghai&#39;, district: &#39;changning&#39; &#125; &#125;;
</code></pre>
<p>Use:</p>
<pre><code class="language-html">&#64;for (item of data | keys; track $index) &#123;
  &lt;div &gt;&#123;&#123;item.key&#125;&#125; &#123;&#123;item.value | json&#125;&#125;&lt;/div&gt;
&#125;
</code></pre>
<p><strong>Dictionary</strong></p>
<pre><code class="language-typescript">const data = &#123; 1: &#39;Normal&#39;, 2: &#39;Deleted&#39; &#125;;
</code></pre>
<p>If you want to keep the key name <code>number</code> numeric:</p>
<pre><code class="language-ts">&#64;for (item of data | keys: true; track $index) &#123;
  &lt;div &gt;&#123;&#123;item.key&#125;&#125; &#123;&#123;item.value | json&#125;&#125;&lt;/div&gt;
&#125;
</code></pre>
<blockquote>
<p>Angular <code>6.1.0</code> will support natively <a href="https://angular.io/api/common/KeyValuePipe" target="_blank" rel="noopener">KeyValuePipe</a>.</p>
</blockquote>
`,api:``,toc:[],raw:`---
order: 1
title: keys
subtitle: Keys
type: Pipe
---

Transforms Object or Map into an array of key value pairs.

Data:

\`\`\`typescript
const data = { name: 'cipchk', address: { city: 'shanghai', district: 'changning' } };
\`\`\`

Use:

\`\`\`html
@for (item of data | keys; track $index) {
  <div >{{item.key}} {{item.value | json}}</div>
}
\`\`\`

**Dictionary**

\`\`\`typescript
const data = { 1: 'Normal', 2: 'Deleted' };
\`\`\`

If you want to keep the key name \`number\` numeric:

\`\`\`ts
@for (item of data | keys: true; track $index) {
  <div >{{item.key}} {{item.value | json}}</div>
}
\`\`\`

> Angular \`6.1.0\` will support natively [KeyValuePipe](https://angular.io/api/common/KeyValuePipe).`},"zh-CN":{meta:{order:1,title:`keys`,subtitle:`可迭代对象`,description:`keys 将对象数组化。例如：变成可迭代对象：字典可迭代若希望保持键名为 number 数字型：Angular 6.1.0 以后原生支持 KeyValuePipe，用法有点类似。`,group:`Pipe`,path:`packages/theme/src/pipes/keys/index.zh-CN.md`,url:`/theme/keys/zh`},text:`<p><code>keys</code> \u5C06\u5BF9\u8C61\u6570\u7EC4\u5316\u3002</p>
<p>\u4F8B\u5982\uFF1A</p>
<pre><code class="language-typescript">const data = &#123; name: &#39;cipchk&#39;, address: &#123; city: &#39;shanghai&#39;, district: &#39;changning&#39; &#125; &#125;;
</code></pre>
<p>\u53D8\u6210\u53EF\u8FED\u4EE3\u5BF9\u8C61\uFF1A</p>
<pre><code class="language-html">&#64;for (item of data | keys; track $index) &#123;
  &lt;div &gt;&#123;&#123;item.key&#125;&#125; &#123;&#123;item.value | json&#125;&#125;&lt;/div&gt;
&#125;
</code></pre>
<p><strong>\u5B57\u5178\u53EF\u8FED\u4EE3</strong></p>
<pre><code class="language-typescript">const data = &#123; 1: &#39;\u6B63\u5E38&#39;, 2: &#39;\u5220\u9664&#39; &#125;;
</code></pre>
<p>\u82E5\u5E0C\u671B\u4FDD\u6301\u952E\u540D\u4E3A <code>number</code> \u6570\u5B57\u578B\uFF1A</p>
<pre><code class="language-ts">&#64;for (item of data | keys: true; track $index) &#123;
  &lt;div &gt;&#123;&#123;item.key&#125;&#125; &#123;&#123;item.value | json&#125;&#125;&lt;/div&gt;
&#125;
</code></pre>
<blockquote>
<p>Angular <code>6.1.0</code> \u4EE5\u540E\u539F\u751F\u652F\u6301 <a href="https://angular.io/api/common/KeyValuePipe" target="_blank" rel="noopener">KeyValuePipe</a>\uFF0C\u7528\u6CD5\u6709\u70B9\u7C7B\u4F3C\u3002</p>
</blockquote>
`,api:``,toc:[],raw:`---
order: 1
title: keys
subtitle: \u53EF\u8FED\u4EE3\u5BF9\u8C61
type: Pipe
---

\`keys\` \u5C06\u5BF9\u8C61\u6570\u7EC4\u5316\u3002

\u4F8B\u5982\uFF1A

\`\`\`typescript
const data = { name: 'cipchk', address: { city: 'shanghai', district: 'changning' } };
\`\`\`

\u53D8\u6210\u53EF\u8FED\u4EE3\u5BF9\u8C61\uFF1A

\`\`\`html
@for (item of data | keys; track $index) {
  <div >{{item.key}} {{item.value | json}}</div>
}
\`\`\`

**\u5B57\u5178\u53EF\u8FED\u4EE3**

\`\`\`typescript
const data = { 1: '\u6B63\u5E38', 2: '\u5220\u9664' };
\`\`\`

\u82E5\u5E0C\u671B\u4FDD\u6301\u952E\u540D\u4E3A \`number\` \u6570\u5B57\u578B\uFF1A

\`\`\`ts
@for (item of data | keys: true; track $index) {
  <div >{{item.key}} {{item.value | json}}</div>
}
\`\`\`

> Angular \`6.1.0\` \u4EE5\u540E\u539F\u751F\u652F\u6301 [KeyValuePipe](https://angular.io/api/common/KeyValuePipe)\uFF0C\u7528\u6CD5\u6709\u70B9\u7C7B\u4F3C\u3002`}}};codes=[];static ɵfac=function(e){return new(e||n)};static ɵcmp=_e({type:n,selectors:[[`theme-keys`]],hostAttrs:[1,`d-block`],decls:1,vars:2,consts:[[3,`codes`,`item`]],template:function(e,t){e&1&&lt(0,`app-docs`,0),e&2&&re(`codes`,t.codes)(`item`,t.item)},dependencies:[rt],encapsulation:2})};var B=class n{item={name:`safe`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{order:1,title:`safe`,subtitle:`XSS`,description:`Simplify the use of bypassSecurityTrustHtml.Simplify the use of bypassSecurityTrustUrl.`,group:`Pipe`,path:`packages/theme/src/pipes/safe/index.en-US.md`,url:`/theme/safe/en`},text:`<h2 id="html"><a class="lake-link"><i data-anchor="html"></i></a>html</h2><p>Simplify the use of <code>bypassSecurityTrustHtml</code>.</p>
<pre><code class="language-html">&lt;div [innerHTML]=&quot;content | html&quot;&gt;&lt;/div&gt;
</code></pre>
<h2 id="url"><a class="lake-link"><i data-anchor="url"></i></a>url</h2><p>Simplify the use of <code>bypassSecurityTrustUrl</code>.</p>
<pre><code class="language-html">&lt;a [href]=&quot;file_url | url&quot; target=&quot;_blank&quot;&gt;&lt;/a&gt;
</code></pre>
`,api:``,toc:[{id:`html`,title:`html`},{id:`url`,title:`url`}],raw:`---
order: 1
title: safe
subtitle: XSS
type: Pipe
---

## html

Simplify the use of \`bypassSecurityTrustHtml\`.

\`\`\`html
<div [innerHTML]="content | html"></div>
\`\`\`

## url

Simplify the use of \`bypassSecurityTrustUrl\`.

\`\`\`html
<a [href]="file_url | url" target="_blank"></a>
\`\`\``},"zh-CN":{meta:{order:1,title:`safe`,subtitle:`安全HTML等`,description:`简化 bypassSecurityTrustHtml 的使用。简化 bypassSecurityTrustUrl 的使用。`,group:`Pipe`,path:`packages/theme/src/pipes/safe/index.zh-CN.md`,url:`/theme/safe/zh`},text:`<h2 id="html"><a class="lake-link"><i data-anchor="html"></i></a>html</h2><p>\u7B80\u5316 <code>bypassSecurityTrustHtml</code> \u7684\u4F7F\u7528\u3002</p>
<pre><code class="language-html">&lt;div [innerHTML]=&quot;content | html&quot;&gt;&lt;/div&gt;
</code></pre>
<h2 id="url"><a class="lake-link"><i data-anchor="url"></i></a>url</h2><p>\u7B80\u5316 <code>bypassSecurityTrustUrl</code> \u7684\u4F7F\u7528\u3002</p>
<pre><code class="language-html">&lt;a [href]=&quot;file_url | url&quot; target=&quot;_blank&quot;&gt;&lt;/a&gt;
</code></pre>
`,api:``,toc:[{id:`html`,title:`html`},{id:`url`,title:`url`}],raw:`---
order: 1
title: safe
subtitle: \u5B89\u5168HTML\u7B49
type: Pipe
---

## html

\u7B80\u5316 \`bypassSecurityTrustHtml\` \u7684\u4F7F\u7528\u3002

\`\`\`html
<div [innerHTML]="content | html"></div>
\`\`\`

## url

\u7B80\u5316 \`bypassSecurityTrustUrl\` \u7684\u4F7F\u7528\u3002

\`\`\`html
<a [href]="file_url | url" target="_blank"></a>
\`\`\``}}};codes=[];static ɵfac=function(e){return new(e||n)};static ɵcmp=_e({type:n,selectors:[[`theme-safe`]],hostAttrs:[1,`d-block`],decls:1,vars:2,consts:[[3,`codes`,`item`]],template:function(e,t){e&1&&lt(0,`app-docs`,0),e&2&&re(`codes`,t.codes)(`item`,t.item)},dependencies:[rt],encapsulation:2})};var j=class n{item={name:`yn`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{order:1,title:`yn`,subtitle:`Badge`,description:`yn Make boolean as badge.`,group:`Pipe`,path:`packages/theme/src/pipes/yn/index.en-US.md`,url:`/theme/yn/en`},text:`<p><code>yn</code> Make boolean as badge.</p>
<pre><code class="language-html">&lt;td [innerHTML]=&quot;enabled | yn&quot;&gt;&lt;/td&gt;
Output:
&lt;td&gt;&lt;i class=&quot;text-blue&quot;&gt;&lt;svg viewBox=&quot;64 64 896 896&quot; fill=&quot;currentColor&quot; width=&quot;1em&quot; height=&quot;1em&quot; aria-hidden=&quot;true&quot;&gt;&lt;path d=&quot;M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z&quot;&gt;&lt;/path&gt;&lt;/svg&gt;&lt;/i&gt;&lt;/td&gt;
</code></pre>
`,api:``,toc:[],raw:`---
order: 1
title: yn
subtitle: Badge
type: Pipe
---

\`yn\` Make boolean as badge.

\`\`\`html
<td [innerHTML]="enabled | yn"></td>
Output:
<td><i class="text-blue"><svg viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg></i></td>
\`\`\``},"zh-CN":{meta:{order:1,title:`yn`,subtitle:`徽章`,description:`yn 将boolean类型徽章化。`,group:`Pipe`,path:`packages/theme/src/pipes/yn/index.zh-CN.md`,url:`/theme/yn/zh`},text:`<p><code>yn</code> \u5C06boolean\u7C7B\u578B\u5FBD\u7AE0\u5316\u3002</p>
<pre><code class="language-html">&lt;td [innerHTML]=&quot;enabled | yn&quot;&gt;&lt;/td&gt;
Output:
&lt;td&gt;&lt;i class=&quot;text-blue&quot;&gt;&lt;svg viewBox=&quot;64 64 896 896&quot; fill=&quot;currentColor&quot; width=&quot;1em&quot; height=&quot;1em&quot; aria-hidden=&quot;true&quot;&gt;&lt;path d=&quot;M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z&quot;&gt;&lt;/path&gt;&lt;/svg&gt;&lt;/i&gt;&lt;/td&gt;
</code></pre>
`,api:``,toc:[],raw:`---
order: 1
title: yn
subtitle: \u5FBD\u7AE0
type: Pipe
---

\`yn\` \u5C06boolean\u7C7B\u578B\u5FBD\u7AE0\u5316\u3002

\`\`\`html
<td [innerHTML]="enabled | yn"></td>
Output:
<td><i class="text-blue"><svg viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg></i></td>
\`\`\``}}};codes=[];static ɵfac=function(e){return new(e||n)};static ɵcmp=_e({type:n,selectors:[[`theme-yn`]],hostAttrs:[1,`d-block`],decls:1,vars:2,consts:[[3,`codes`,`item`]],template:function(e,t){e&1&&lt(0,`app-docs`,0),e&2&&re(`codes`,t.codes)(`item`,t.item)},dependencies:[rt],encapsulation:2})};var G=class n{constructor(o,e){this.modalHelper=o;this.msg=e}modalHelper;msg;open(){this.modalHelper.create(`View`,k,{record:{a:1,b:`2`,c:new Date}}).subscribe(o=>{this.msg.info(o)})}static(){this.modalHelper.static(`View`,k,{record:{a:1,b:`2`,c:new Date}}).subscribe(o=>{this.msg.info(o)})}static ɵfac=function(e){return new(e||n)(vt(Ap),vt(Ad))};static ɵcmp=_e({type:n,selectors:[[`theme-drawer-simple`]],decls:4,vars:0,consts:[[`nz-button`,``,3,`click`]],template:function(e,t){e&1&&(ne(0,`button`,0),Fe(`click`,function(){return t.open()}),en(1,`Open`),le(),ne(2,`button`,0),Fe(`click`,function(){return t.static()}),en(3,`Static`),le())},dependencies:[Q5,Hd,q5,K5],encapsulation:2})};var F=class n{item={name:`drawer`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{order:3,title:`DrawerHelper`,subtitle:`Drawer Helper`,description:`Based on the NzDrawerService package, it solves some known issues:More friendly handling callbacksSupport responsiveThere are includes create & static`,group:`Service`,path:`packages/theme/src/services/drawer/index.en-US.md`,url:`/theme/drawer/en`},text:`<p>Based on the <code>NzDrawerService</code> package, it solves some known issues:</p>
<ul>
<li>More friendly handling callbacks</li>
<li>Support responsive</li>
</ul>
<h2 id="create"><a class="lake-link"><i data-anchor="create"></i></a>create</h2><pre><code class="language-ts">this.drawerHelper.create(&#39;Edit&#39;, FormEditComponent, &#123; i &#125;).subscribe(res =&gt; this.load());
// Ok callback
// 1. considered successful
this.NzDrawerRef.close(data);
this.NzDrawerRef.close(true);

// Close
this.NzDrawerRef.close();
this.NzDrawerRef.close(false);

// Close all open drawers
this.DrawerHelper.closeAll();
</code></pre>
<p>There are includes <code>create</code> &amp; <code>static</code> methods to open the normal &amp; static drawer.</p>
<p><strong>Custom component HTML template</strong></p>
<pre><code class="language-html">Your body content
&lt;div class=&quot;drawer-footer&quot;&gt;
  // The bottom toolbar need wrapped by \`drawer-footer\`
  &lt;button nz-button [nzType]=&quot;&#39;default&#39;&quot; (click)=&quot;cancel()&quot;&gt;
    Cancel
  &lt;/button&gt;
  &lt;button nz-button [nzType]=&quot;&#39;primary&#39;&quot; (click)=&quot;ok()&quot;&gt;
    OK
  &lt;/button&gt;
&lt;/div&gt;
</code></pre>
<p>If you don&#39;t bottom toolbar, you need specify <code>footer: false</code>.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>size</code></td>
<td>Specify drawer size, responsive only supports non-numeric values</td>
<td><code>sm,md,lg,xl,number</code></td>
<td><code>md</code></td>
</tr>
<tr>
<td><code>footer</code></td>
<td>Whether toolbar</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>footerHeight</code></td>
<td>Toolbar height</td>
<td><code>number</code></td>
<td><code>55</code></td>
</tr>
<tr>
<td><code>exact</code></td>
<td>Exact match return value, default is <code>true</code>, If the return value is not null (<code>null</code> or <code>undefined</code>) is considered successful, otherwise it is considered error.</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>drawerOptions</code></td>
<td>Drawer raw parameters <a href="https://ng.ant.design/components/drawer/en#nzdraweroptions" target="_blank" rel="noopener">NzDrawerOptions</a> \u53C2\u6570</td>
<td><code>NzDrawerOptions</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="method"><a class="lake-link"><i data-anchor="method"></i></a>Method</h3><ul>
<li><code>closeAll</code> Close all open drawers</li>
</ul>
`,toc:[{id:`create`,title:`create`},{id:`api`,title:`API`,children:[{id:`method`,title:`Method`}]}],raw:`---
order: 3
title: DrawerHelper
subtitle: Drawer Helper
type: Service
---

Based on the \`NzDrawerService\` package, it solves some known issues:

- More friendly handling callbacks
- Support responsive

## create

\`\`\`ts
this.drawerHelper.create('Edit', FormEditComponent, { i }).subscribe(res => this.load());
// Ok callback
// 1. considered successful
this.NzDrawerRef.close(data);
this.NzDrawerRef.close(true);

// Close
this.NzDrawerRef.close();
this.NzDrawerRef.close(false);

// Close all open drawers
this.DrawerHelper.closeAll();
\`\`\`

There are includes \`create\` & \`static\` methods to open the normal & static drawer.

**Custom component HTML template**

\`\`\`html
Your body content
<div class="drawer-footer">
  // The bottom toolbar need wrapped by \`drawer-footer\`
  <button nz-button [nzType]="'default'" (click)="cancel()">
    Cancel
  </button>
  <button nz-button [nzType]="'primary'" (click)="ok()">
    OK
  </button>
</div>
\`\`\`

If you don't bottom toolbar, you need specify \`footer: false\`.

## API

| Property | Description  | Type  | Default   |
| --- | --- | --- | --- |
| \`size\` | Specify drawer size, responsive only supports non-numeric values | \`sm,md,lg,xl,number\` | \`md\` |
| \`footer\` | Whether toolbar | \`boolean\` | \`true\` |
| \`footerHeight\` | Toolbar height | \`number\` | \`55\` |
| \`exact\` | Exact match return value, default is \`true\`, If the return value is not null (\`null\` or \`undefined\`) is considered successful, otherwise it is considered error. | \`boolean\` | \`true\` |
| \`drawerOptions\` | Drawer raw parameters [NzDrawerOptions](https://ng.ant.design/components/drawer/en#nzdraweroptions) \u53C2\u6570 | \`NzDrawerOptions\` | - |


### Method

- \`closeAll\` Close all open drawers`},"zh-CN":{meta:{order:3,title:`DrawerHelper`,subtitle:`抽屉辅助类`,description:`基于 NzDrawerService 封装，它解决一些已知问题：更友好的处理回调响应式处理包括 create & static 分别用于打开普通或静态抽屉。自定义组件HTML模板若无需要底部工具条，需要指定参数 footer: false。closeAll 关闭所有已打开的抽屉`,group:`Service`,path:`packages/theme/src/services/drawer/index.zh-CN.md`,url:`/theme/drawer/zh`},text:`<p>\u57FA\u4E8E <code>NzDrawerService</code> \u5C01\u88C5\uFF0C\u5B83\u89E3\u51B3\u4E00\u4E9B\u5DF2\u77E5\u95EE\u9898\uFF1A</p>
<ul>
<li>\u66F4\u53CB\u597D\u7684\u5904\u7406\u56DE\u8C03</li>
<li>\u54CD\u5E94\u5F0F\u5904\u7406</li>
</ul>
<h2 id="create"><a class="lake-link"><i data-anchor="create"></i></a>create</h2><pre><code class="language-ts">this.drawerHelper.create(&#39;Edit&#39;, FormEditComponent, &#123; i &#125;).subscribe(res =&gt; this.load());
// \u5BF9\u4E8E\u7EC4\u4EF6\u7684\u6210\u529F&amp;\u5173\u95ED\u7684\u5904\u7406\u8BF4\u660E
// \u6210\u529F
this.NzDrawerRef.close(data);
this.NzDrawerRef.close(true);
// \u5173\u95ED
this.NzDrawerRef.close();
this.NzDrawerRef.close(false);

// \u5173\u95ED\u6240\u6709\u5DF2\u6253\u5F00\u7684\u62BD\u5C49
this.DrawerHelper.closeAll();
</code></pre>
<p>\u5305\u62EC <code>create</code> &amp; <code>static</code> \u5206\u522B\u7528\u4E8E\u6253\u5F00\u666E\u901A\u6216\u9759\u6001\u62BD\u5C49\u3002</p>
<p><strong>\u81EA\u5B9A\u4E49\u7EC4\u4EF6HTML\u6A21\u677F</strong></p>
<pre><code class="language-html">\u5185\u5BB9
&lt;div class=&quot;drawer-footer&quot;&gt;
  // \u5E95\u90E8\u5DE5\u5177\u6761\u7531 \`drawer-footer\` \u5305\u88F9
  &lt;button nz-button [nzType]=&quot;&#39;default&#39;&quot; (click)=&quot;cancel()&quot;&gt;
    Cancel
  &lt;/button&gt;
  &lt;button nz-button [nzType]=&quot;&#39;primary&#39;&quot; (click)=&quot;ok()&quot;&gt;
    OK
  &lt;/button&gt;
&lt;/div&gt;
</code></pre>
<p>\u82E5\u65E0\u9700\u8981\u5E95\u90E8\u5DE5\u5177\u6761\uFF0C\u9700\u8981\u6307\u5B9A\u53C2\u6570 <code>footer: false</code>\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u529F\u80FD</th>
</tr>
</thead>
<tbody><tr>
<td><code>size</code></td>
<td>\u6307\u5B9A\u62BD\u5C49\u5927\u5C0F\uFF0C\u54CD\u5E94\u5F0F\u53EA\u652F\u6301\u975E\u6570\u5B57\u503C\uFF0C\u82E5\u503C\u4E3A\u6570\u503C\u7C7B\u578B\uFF0C\u5219\u6839\u636E <code>nzPlacement</code> \u81EA\u52A8\u8F6C\u5316\u4E3A <code>nzHeight</code> \u6216 <code>nzWidth</code></td>
<td><code>sm,md,lg,xl,number</code></td>
<td><code>md</code></td>
</tr>
<tr>
<td><code>footer</code></td>
<td>\u662F\u5426\u9700\u8981\u5DE5\u5177\u6761</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>footerHeight</code></td>
<td>\u5DE5\u5177\u6761\u9AD8\u5EA6</td>
<td><code>number</code></td>
<td><code>55</code></td>
</tr>
<tr>
<td><code>exact</code></td>
<td>\u662F\u5426\u7CBE\u51C6\uFF08\u9ED8\u8BA4\uFF1A<code>true</code>\uFF09\uFF0C\u82E5\u8FD4\u56DE\u503C\u975E\u7A7A\u503C\uFF08<code>null</code>\u6216<code>undefined</code>\uFF09\u89C6\u4E3A\u6210\u529F\uFF0C\u5426\u5219\u89C6\u4E3A\u9519\u8BEF</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>drawerOptions</code></td>
<td>\u62BD\u5C49 <a href="https://ng.ant.design/components/drawer/zh#nzdraweroptions" target="_blank" rel="noopener">NzDrawerOptions</a> \u53C2\u6570</td>
<td><code>NzDrawerOptions</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="method"><a class="lake-link"><i data-anchor="method"></i></a>Method</h3><ul>
<li><code>closeAll</code> \u5173\u95ED\u6240\u6709\u5DF2\u6253\u5F00\u7684\u62BD\u5C49</li>
</ul>
`,toc:[{id:`create`,title:`create`},{id:`api`,title:`API`,children:[{id:`method`,title:`Method`}]}],raw:`---
order: 3
title: DrawerHelper
subtitle: \u62BD\u5C49\u8F85\u52A9\u7C7B
type: Service
---

\u57FA\u4E8E \`NzDrawerService\` \u5C01\u88C5\uFF0C\u5B83\u89E3\u51B3\u4E00\u4E9B\u5DF2\u77E5\u95EE\u9898\uFF1A

- \u66F4\u53CB\u597D\u7684\u5904\u7406\u56DE\u8C03
- \u54CD\u5E94\u5F0F\u5904\u7406

## create

\`\`\`ts
this.drawerHelper.create('Edit', FormEditComponent, { i }).subscribe(res => this.load());
// \u5BF9\u4E8E\u7EC4\u4EF6\u7684\u6210\u529F&\u5173\u95ED\u7684\u5904\u7406\u8BF4\u660E
// \u6210\u529F
this.NzDrawerRef.close(data);
this.NzDrawerRef.close(true);
// \u5173\u95ED
this.NzDrawerRef.close();
this.NzDrawerRef.close(false);

// \u5173\u95ED\u6240\u6709\u5DF2\u6253\u5F00\u7684\u62BD\u5C49
this.DrawerHelper.closeAll();
\`\`\`

\u5305\u62EC \`create\` & \`static\` \u5206\u522B\u7528\u4E8E\u6253\u5F00\u666E\u901A\u6216\u9759\u6001\u62BD\u5C49\u3002

**\u81EA\u5B9A\u4E49\u7EC4\u4EF6HTML\u6A21\u677F**

\`\`\`html
\u5185\u5BB9
<div class="drawer-footer">
  // \u5E95\u90E8\u5DE5\u5177\u6761\u7531 \`drawer-footer\` \u5305\u88F9
  <button nz-button [nzType]="'default'" (click)="cancel()">
    Cancel
  </button>
  <button nz-button [nzType]="'primary'" (click)="ok()">
    OK
  </button>
</div>
\`\`\`

\u82E5\u65E0\u9700\u8981\u5E95\u90E8\u5DE5\u5177\u6761\uFF0C\u9700\u8981\u6307\u5B9A\u53C2\u6570 \`footer: false\`\u3002

## API

| \u540D\u79F0 | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u529F\u80FD |
| --- | --- | --- | --- |
| \`size\` | \u6307\u5B9A\u62BD\u5C49\u5927\u5C0F\uFF0C\u54CD\u5E94\u5F0F\u53EA\u652F\u6301\u975E\u6570\u5B57\u503C\uFF0C\u82E5\u503C\u4E3A\u6570\u503C\u7C7B\u578B\uFF0C\u5219\u6839\u636E \`nzPlacement\` \u81EA\u52A8\u8F6C\u5316\u4E3A \`nzHeight\` \u6216 \`nzWidth\` | \`sm,md,lg,xl,number\` | \`md\` |
| \`footer\` | \u662F\u5426\u9700\u8981\u5DE5\u5177\u6761 | \`boolean\` | \`true\` |
| \`footerHeight\` | \u5DE5\u5177\u6761\u9AD8\u5EA6 | \`number\` | \`55\` |
| \`exact\` | \u662F\u5426\u7CBE\u51C6\uFF08\u9ED8\u8BA4\uFF1A\`true\`\uFF09\uFF0C\u82E5\u8FD4\u56DE\u503C\u975E\u7A7A\u503C\uFF08\`null\`\u6216\`undefined\`\uFF09\u89C6\u4E3A\u6210\u529F\uFF0C\u5426\u5219\u89C6\u4E3A\u9519\u8BEF | \`boolean\` | \`true\` |
| \`drawerOptions\` | \u62BD\u5C49 [NzDrawerOptions](https://ng.ant.design/components/drawer/zh#nzdraweroptions) \u53C2\u6570 | \`NzDrawerOptions\` | - |

### Method

- \`closeAll\` \u5173\u95ED\u6240\u6709\u5DF2\u6253\u5F00\u7684\u62BD\u5C49`}}};codes=[{id:`theme-drawer-simple`,name:`simple`,title:{"zh-CN":`基础样例`,"en-US":`Basic Usage`},code:`import { Component } from '@angular/core';

import { DemoDrawerComponent } from '@shared';

import { DrawerHelper } from '@delon/theme';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'theme-drawer-simple',
  template: \`
    <button nz-button (click)="open()">Open</button>
    <button nz-button (click)="static()">Static</button>
  \`,
  imports: [NzButtonModule]
})
export class ThemeDrawerSimple {
  constructor(
    private modalHelper: DrawerHelper,
    private msg: NzMessageService
  ) {}

  open(): void {
    this.modalHelper.create('View', DemoDrawerComponent, { record: { a: 1, b: '2', c: new Date() } }).subscribe(res => {
      this.msg.info(res);
    });
  }

  static(): void {
    this.modalHelper.static('View', DemoDrawerComponent, { record: { a: 1, b: '2', c: new Date() } }).subscribe(res => {
      this.msg.info(res);
    });
  }
}`,order:0,type:`demo`,summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:`packages/theme/src/services/drawer/demo/simple.md`}];static ɵfac=function(e){return new(e||n)};static ɵcmp=_e({type:n,selectors:[[`theme-drawer`]],hostAttrs:[1,`d-block`],decls:5,vars:5,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`24`],[3,`item`]],template:function(e,t){e&1&&(ne(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),lt(4,`theme-drawer-simple`),le()()()()),e&2&&(re(`codes`,t.codes)(`item`,t.item),I$1(),re(`nzGutter`,16),I$1(2),re(`item`,t.codes[0]),Vt(`id`,t.codes[0].id))},dependencies:[rt,G,ln,Ue,X$1],encapsulation:2})};var V=class n{item={name:`http`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{order:1,title:`_HttpClient`,description:`_HttpClient service is based on Angular HttpClient.More friendly call methodsMaintain loading attributeHandling null valuesUnified time format is time...`,group:`Service`,path:`packages/theme/src/services/http/index.en-US.md`,url:`/theme/http/en`},text:`<p><a href="https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/http/http.client.ts" target="_blank" rel="noopener">_HttpClient</a> service is based on Angular <code>HttpClient</code>.</p>
<h2 id="features"><a class="lake-link"><i data-anchor="features"></i></a>Features</h2><ul>
<li>More friendly call methods</li>
<li>Maintain <code>loading</code> attribute</li>
<li>Handling null values</li>
<li>Unified time format is timestamp</li>
<li>Support decorator &#64;GET, &#64;POST etc</li>
</ul>
<h2 id="demo"><a class="lake-link"><i data-anchor="demo"></i></a>DEMO</h2><p>Network requests are generally used with Object as arguments, such as a <code>get</code> request:</p>
<pre><code class="language-ts">HttpClient.get(url, &#123; params: &#123; pi: 1 &#125; &#125;);
</code></pre>
<p>For <code>_HttpClient</code>:</p>
<pre><code class="language-ts">_HttpClient.get(url, &#123; pi: 1 &#125;);
</code></pre>
<h2 id="alainthemeconfig"><a class="lake-link"><i data-anchor="alainthemeconfig"></i></a>AlainThemeConfig</h2><p>Common configuration, such as unifying null and time processing for <code>_HttpClient</code>.</p>
<pre><code class="language-ts">import &#123; AlainThemeConfig &#125; from &#39;&#64;delon/theme&#39;;
export function fnAlainThemeConfig(): AlainThemeConfig &#123;
  return Object.assign(new AlainThemeConfig(), &lt;AlainThemeConfig&gt;&#123;
    http: &#123;
      nullValueHandling: &#39;ignore&#39;,
    &#125;,
  &#125;);
&#125;

&#64;NgModule(&#123;&#125;)
export class DelonModule &#123;
  static forRoot(): ModuleWithProviders &#123;
    return &#123;
      ngModule: DelonModule,
      providers: [
        &#123; provide: AlainThemeConfig, useFactory: fnAlainThemeConfig &#125;,
      ],
    &#125;;
  &#125;
&#125;
</code></pre>
<h3 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>nullValueHandling</code></td>
<td>Null processing</td>
<td><code>include,ignore</code></td>
<td><code>include</code></td>
</tr>
<tr>
<td><code>dateValueHandling</code></td>
<td>Time processing</td>
<td><code>timestamp,ignore</code></td>
<td><code>timestamp</code></td>
</tr>
</tbody></table>
<h2 id="decorators"><a class="lake-link"><i data-anchor="decorators"></i></a>Decorators</h2><p>The target service must inherit <code>BaseApi</code> abstract class.</p>
<h3 id="usage"><a class="lake-link"><i data-anchor="usage"></i></a>Usage</h3><pre><code class="language-ts">&#64;BaseUrl(&#39;/user&#39;)
&#64;BaseHeaders(&#123; bh: &#39;a&#39; &#125;)
class RestService extends BaseApi &#123;
  &#64;GET()
  query(&#64;Query(&#39;pi&#39;) pi: number, &#64;Query(&#39;ps&#39;) ps: number): Observable&lt;any&gt; &#123;
    return;
  &#125;

  &#64;GET(&#39;:id&#39;)
  get(&#64;Path(&#39;id&#39;) id: number): Observable&lt;any&gt; &#123;
    return;
  &#125;

  &#64;GET()
  get(&#64;Payload data: &#123;&#125;): Observable&lt;any&gt; &#123;
    return;
  &#125;

  // Use \`::id\` to indicate escaping, and should be will be ignored when \`id\` value is \`undefined\`, like this:
\xA0\xA0// When \`id\` is \`10\` =&gt; 10:type
\xA0\xA0// When \`id\` is \`undefined\` =&gt; :id:type
  &#64;GET(&#39;:id::type&#39;)
  get(&#64;Path(&#39;id&#39;) id: number): Observable&lt;any&gt; &#123;
    return;
  &#125;

  &#64;POST(&#39;:id&#39;)
  save(&#64;Path(&#39;id&#39;) id: number, &#64;Body data: Object): Observable&lt;any&gt; &#123;
    return;
  &#125;

  &#64;POST()
  save(&#64;Payload data: &#123;&#125;): Observable&lt;any&gt; &#123;
    return;
  &#125;

  &#64;FORM()
  save(&#64;Payload data: &#123;&#125;): Observable&lt;any&gt; &#123;
    return;
  &#125;
  
  // If authorization is invalid, will be thrown directly \`401\` error and will not be sent.
  &#64;GET(&#39;&#39;, &#123; acl: &#39;admin&#39; &#125;)
  ACL(): Observable&lt;any&gt; &#123;
    return;
  &#125;
&#125;
</code></pre>
<h3 id="class_decorators"><a class="lake-link"><i data-anchor="class_decorators"></i></a>Class decorators</h3><ul>
<li><code>&#64;BaseUrl(url: string)</code></li>
<li><code>&#64;BaseHeaders(headers: HttpHeaders | &#123; [header: string]: string | string[] &#125;)</code></li>
</ul>
<h3 id="method_decorators"><a class="lake-link"><i data-anchor="method_decorators"></i></a>Method decorators</h3><ul>
<li><code>&#64;GET(url: string = &#39;&#39;, options?: HttpOptions)</code></li>
<li><code>&#64;POST(url: string = &#39;&#39;, options?: HttpOptions)</code></li>
<li><code>&#64;DELETE(url: string = &#39;&#39;, options?: HttpOptions)</code></li>
<li><code>&#64;PUT(url: string = &#39;&#39;, options?: HttpOptions)</code></li>
<li><code>&#64;HEAD(url: string = &#39;&#39;, options?: HttpOptions)</code></li>
<li><code>&#64;PATCH(url: string = &#39;&#39;, options?: HttpOptions)</code></li>
<li><code>&#64;JSONP(url: string = &#39;&#39;, options?: HttpOptions)</code></li>
<li><code>&#64;OPTIONS(url: string = &#39;&#39;, options?: HttpOptions)</code></li>
</ul>
<h4 id="httpoptions"><a class="lake-link"><i data-anchor="httpoptions"></i></a>HttpOptions</h4><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>acl</code></td>
<td>ACL config, depends on <code>&#64;delon/acl</code></td>
<td><code>any</code></td>
<td>-</td>
</tr>
<tr>
<td><code>observe</code></td>
<td>Specify response content</td>
<td><code>body,events,response</code></td>
<td>-</td>
</tr>
<tr>
<td><code>responseType</code></td>
<td>Specify content format</td>
<td><code>arraybuffer,blob,json,text</code></td>
<td>-</td>
</tr>
<tr>
<td><code>reportProgress</code></td>
<td>Whether monitor progress events</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>withCredentials</code></td>
<td>Set withCredentials</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="parameter_decorators"><a class="lake-link"><i data-anchor="parameter_decorators"></i></a>Parameter decorators</h3><ul>
<li><code>&#64;Path(key?: string)</code> URL path parameters</li>
<li><code>&#64;Query(key?: string)</code> QueryString of URL</li>
<li><code>&#64;Body</code> Body of URL</li>
<li><code>&#64;Headers(key?: string)</code> Headers of URL</li>
<li><code>&#64;Payload</code> Request Payload<ul>
<li>Supported body (like<code>POST</code>, <code>PUT</code>) as a body data, equivalent to <code>&#64;Body</code></li>
<li>Not supported body (like <code>GET</code>, <code>DELETE</code> etc) as a <code>QueryString</code></li>
</ul>
</li>
</ul>
<h3 id="custom_error"><a class="lake-link"><i data-anchor="custom_error"></i></a>CUSTOM_ERROR</h3><p>Whether to customize the handling of exception messages.</p>
<pre><code class="language-ts">this.http.post(\`login\`, &#123;
 name: &#39;cipchk&#39;, pwd: &#39;123456&#39;
&#125;, &#123;
 context: new HttpContext()
             .set(ALLOW_ANONYMOUS, true)
             .set(CUSTOM_ERROR, true)
&#125;).subscribe(&#123;
 next: console.log,
 error: console.log
&#125;);
</code></pre>
<h3 id="ignore_base_url"><a class="lake-link"><i data-anchor="ignore_base_url"></i></a>IGNORE_BASE_URL</h3><p>Whether to ignore API prefixes.</p>
<pre><code class="language-ts">// When environment.api.baseUrl set &#39;/api&#39;

this.http.get(\`/path\`) // Request Url: /api/path
this.http.get(\`/path\`, &#123; context: new HttpContext().set(IGNORE_BASE_URL, true) &#125;) // Request Url: /path
</code></pre>
<h3 id="raw_body"><a class="lake-link"><i data-anchor="raw_body"></i></a>RAW_BODY</h3><p>Whether to return raw response body.</p>
`,api:``,toc:[{id:`features`,title:`Features`},{id:`demo`,title:`DEMO`},{id:`alainthemeconfig`,title:`AlainThemeConfig`,children:[{id:`api`,title:`API`}]},{id:`decorators`,title:`Decorators`,children:[{id:`usage`,title:`Usage`},{id:`class_decorators`,title:`Class decorators`},{id:`method_decorators`,title:`Method decorators`},{id:`parameter_decorators`,title:`Parameter decorators`},{id:`custom_error`,title:`CUSTOM_ERROR`},{id:`ignore_base_url`,title:`IGNORE_BASE_URL`},{id:`raw_body`,title:`RAW_BODY`}]}],raw:`---
order: 1
title: _HttpClient
type: Service
---

[\\_HttpClient](https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/http/http.client.ts) service is based on Angular \`HttpClient\`.

## Features

- More friendly call methods
- Maintain \`loading\` attribute
- Handling null values
- Unified time format is timestamp
- Support decorator @GET, @POST etc

## DEMO

Network requests are generally used with Object as arguments, such as a \`get\` request:

\`\`\`ts
HttpClient.get(url, { params: { pi: 1 } });
\`\`\`

For \`_HttpClient\`:

\`\`\`ts
_HttpClient.get(url, { pi: 1 });
\`\`\`

## AlainThemeConfig

Common configuration, such as unifying null and time processing for \`_HttpClient\`.

\`\`\`ts
import { AlainThemeConfig } from '@delon/theme';
export function fnAlainThemeConfig(): AlainThemeConfig {
  return Object.assign(new AlainThemeConfig(), <AlainThemeConfig>{
    http: {
      nullValueHandling: 'ignore',
    },
  });
}

@NgModule({})
export class DelonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [
        { provide: AlainThemeConfig, useFactory: fnAlainThemeConfig },
      ],
    };
  }
}
\`\`\`

### API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| \`nullValueHandling\` | Null processing | \`include,ignore\` | \`include\` |
| \`dateValueHandling\` | Time processing | \`timestamp,ignore\` | \`timestamp\` |

## Decorators

The target service must inherit \`BaseApi\` abstract class.

### Usage

\`\`\`ts
@BaseUrl('/user')
@BaseHeaders({ bh: 'a' })
class RestService extends BaseApi {
  @GET()
  query(@Query('pi') pi: number, @Query('ps') ps: number): Observable<any> {
    return;
  }

  @GET(':id')
  get(@Path('id') id: number): Observable<any> {
    return;
  }

  @GET()
  get(@Payload data: {}): Observable<any> {
    return;
  }

  // Use \`::id\` to indicate escaping, and should be will be ignored when \`id\` value is \`undefined\`, like this:
\xA0\xA0// When \`id\` is \`10\` => 10:type
\xA0\xA0// When \`id\` is \`undefined\` => :id:type
  @GET(':id::type')
  get(@Path('id') id: number): Observable<any> {
    return;
  }

  @POST(':id')
  save(@Path('id') id: number, @Body data: Object): Observable<any> {
    return;
  }

  @POST()
  save(@Payload data: {}): Observable<any> {
    return;
  }

  @FORM()
  save(@Payload data: {}): Observable<any> {
    return;
  }
  
  // If authorization is invalid, will be thrown directly \`401\` error and will not be sent.
  @GET('', { acl: 'admin' })
  ACL(): Observable<any> {
    return;
  }
}
\`\`\`

### Class decorators

- \`@BaseUrl(url: string)\`
- \`@BaseHeaders(headers: HttpHeaders | { [header: string]: string | string[] })\`

### Method decorators

- \`@GET(url: string = '', options?: HttpOptions)\`
- \`@POST(url: string = '', options?: HttpOptions)\`
- \`@DELETE(url: string = '', options?: HttpOptions)\`
- \`@PUT(url: string = '', options?: HttpOptions)\`
- \`@HEAD(url: string = '', options?: HttpOptions)\`
- \`@PATCH(url: string = '', options?: HttpOptions)\`
- \`@JSONP(url: string = '', options?: HttpOptions)\`
- \`@OPTIONS(url: string = '', options?: HttpOptions)\`

#### HttpOptions

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| \`acl\` | ACL config, depends on \`@delon/acl\` | \`any\` | - |
| \`observe\` | Specify response content | \`body,events,response\` | - |
| \`responseType\` | Specify content format | \`arraybuffer,blob,json,text\` | - |
| \`reportProgress\` | Whether monitor progress events | \`boolean\` | - |
| \`withCredentials\` | Set withCredentials | \`boolean\` | - |

### Parameter decorators

- \`@Path(key?: string)\` URL path parameters
- \`@Query(key?: string)\` QueryString of URL
- \`@Body\` Body of URL
- \`@Headers(key?: string)\` Headers of URL
- \`@Payload\` Request Payload
  - Supported body (like\`POST\`, \`PUT\`) as a body data, equivalent to \`@Body\`
  - Not supported body (like \`GET\`, \`DELETE\` etc) as a \`QueryString\`

### CUSTOM_ERROR

Whether to customize the handling of exception messages.

\`\`\`ts
this.http.post(\`login\`, {
 name: 'cipchk', pwd: '123456'
}, {
 context: new HttpContext()
             .set(ALLOW_ANONYMOUS, true)
             .set(CUSTOM_ERROR, true)
}).subscribe({
 next: console.log,
 error: console.log
});
\`\`\`

### IGNORE_BASE_URL

Whether to ignore API prefixes.

\`\`\`ts
// When environment.api.baseUrl set '/api'

this.http.get(\`/path\`) // Request Url: /api/path
this.http.get(\`/path\`, { context: new HttpContext().set(IGNORE_BASE_URL, true) }) // Request Url: /path
\`\`\`

### RAW_BODY

Whether to return raw response body.`},"zh-CN":{meta:{order:1,title:`_HttpClient`,description:`@delon/theme 包含了一个叫 _HttpClient 类，其本质还是调用 Angular 的 HttpClient。更友好的调用方法维护 loading 属性处理空值统一时间格式为时间戳支持修饰器 @GET、@POST 等网络请求一般情况下是同 Object 对象做为参数一起使用，例如一个...`,group:`Service`,path:`packages/theme/src/services/http/index.zh-CN.md`,url:`/theme/http/zh`},text:`<p><code>&#64;delon/theme</code> \u5305\u542B\u4E86\u4E00\u4E2A\u53EB <a href="https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/http/http.client.ts" target="_blank" rel="noopener">_HttpClient</a> \u7C7B\uFF0C\u5176\u672C\u8D28\u8FD8\u662F\u8C03\u7528 Angular \u7684 <code>HttpClient</code>\u3002</p>
<h2 id="\u7279\u6027"><a class="lake-link"><i data-anchor="\u7279\u6027"></i></a>\u7279\u6027</h2><ul>
<li>\u66F4\u53CB\u597D\u7684\u8C03\u7528\u65B9\u6CD5</li>
<li>\u7EF4\u62A4 <code>loading</code> \u5C5E\u6027</li>
<li>\u5904\u7406\u7A7A\u503C</li>
<li>\u7EDF\u4E00\u65F6\u95F4\u683C\u5F0F\u4E3A\u65F6\u95F4\u6233</li>
<li>\u652F\u6301\u4FEE\u9970\u5668 &#64;GET\u3001&#64;POST \u7B49</li>
</ul>
<h2 id="\u793A\u4F8B"><a class="lake-link"><i data-anchor="\u793A\u4F8B"></i></a>\u793A\u4F8B</h2><p>\u7F51\u7EDC\u8BF7\u6C42\u4E00\u822C\u60C5\u51B5\u4E0B\u662F\u540C Object \u5BF9\u8C61\u505A\u4E3A\u53C2\u6570\u4E00\u8D77\u4F7F\u7528\uFF0C\u4F8B\u5982\u4E00\u4E2A <code>get</code> \u8BF7\u6C42\uFF0C\u539F\u59CB\u5199\u6CD5\uFF1A</p>
<pre><code class="language-ts">HttpClient.get(url, &#123; params: &#123; pi: 1 &#125; &#125;);
</code></pre>
<p>\u800C\u5BF9\u4E8E <code>_HttpClient</code> \u6765\u8BB2\uFF0C\u5C06\u53C2\u6570\u8FDB\u4E00\u6B65\u4F18\u5316\u4E3A\uFF1A</p>
<pre><code class="language-ts">_HttpClient.get(url, &#123; pi: 1 &#125;);
</code></pre>
<h2 id="alainthemeconfig"><a class="lake-link"><i data-anchor="alainthemeconfig"></i></a>AlainThemeConfig</h2><p>\u901A\u7528\u914D\u7F6E\u9879\uFF0C\u4F8B\u5982\u7EDF\u4E00\u5BF9 <code>_HttpClient</code> \u8BBE\u7F6E\u7A7A\u503C\u3001\u65F6\u95F4\u5904\u7406\u65B9\u5F0F\u3002</p>
<pre><code class="language-ts">import &#123; AlainThemeConfig &#125; from &#39;&#64;delon/theme&#39;;
export function fnAlainThemeConfig(): AlainThemeConfig &#123;
  return Object.assign(new AlainThemeConfig(), &lt;AlainThemeConfig&gt;&#123;
    http: &#123;
      nullValueHandling: &#39;ignore&#39;,
    &#125;,
  &#125;);
&#125;

&#64;NgModule(&#123;&#125;)
export class DelonModule &#123;
  static forRoot(): ModuleWithProviders &#123;
    return &#123;
      ngModule: DelonModule,
      providers: [
        &#123; provide: AlainThemeConfig, useFactory: fnAlainThemeConfig &#125;,
      ],
    &#125;;
  &#125;
&#125;
</code></pre>
<h3 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>nullValueHandling</code></td>
<td>\u7A7A\u503C\u5904\u7406</td>
<td><code>include,ignore</code></td>
<td><code>include</code></td>
</tr>
<tr>
<td><code>dateValueHandling</code></td>
<td>\u65F6\u95F4\u503C\u5904\u7406</td>
<td><code>timestamp,ignore</code></td>
<td><code>timestamp</code></td>
</tr>
</tbody></table>
<h2 id="\u4F7F\u7528\u4FEE\u9970\u5668"><a class="lake-link"><i data-anchor="\u4F7F\u7528\u4FEE\u9970\u5668"></i></a>\u4F7F\u7528\u4FEE\u9970\u5668</h2><p>\u76EE\u6807\u7C7B\u90FD\u5FC5\u987B\u7EE7\u627F <code>BaseApi</code> \u57FA\u7C7B\u3002</p>
<h3 id="\u793A\u4F8B"><a class="lake-link"><i data-anchor="\u793A\u4F8B"></i></a>\u793A\u4F8B</h3><pre><code class="language-ts">&#64;BaseUrl(&#39;/user&#39;)
&#64;BaseHeaders(&#123; bh: &#39;a&#39; &#125;)
class RestService extends BaseApi &#123;
  &#64;GET()
  query(&#64;Query(&#39;pi&#39;) pi: number, &#64;Query(&#39;ps&#39;) ps: number): Observable&lt;any&gt; &#123;
    return;
  &#125;

  &#64;GET(&#39;:id&#39;)
  get(&#64;Path(&#39;id&#39;) id: number): Observable&lt;any&gt; &#123;
    return;
  &#125;

  &#64;GET()
  get(&#64;Payload data: &#123;&#125;): Observable&lt;any&gt; &#123;
    return;
  &#125;

  // \u4F7F\u7528 \`::id\` \u6765\u8868\u793A\u8F6C\u4E49\uFF0C\u82E5 \`id\` \u503C\u4E3A \`undefined\` \u4F1A\u5FFD\u7565\u8F6C\u6362\uFF0C\u4F8B\u5982\uFF1A
  // \u5F53 \`id\` \u4E3A \`10\` \u65F6 =&gt; 10:type
  // \u5F53 \`id\` \u4E3A \`undefined\` \u65F6 =&gt; :id:type
  &#64;GET(&#39;:id::type&#39;)
  get(&#64;Path(&#39;id&#39;) id: number): Observable&lt;any&gt; &#123;
    return;
  &#125;

  &#64;POST(&#39;:id&#39;)
  save(&#64;Path(&#39;id&#39;) id: number, &#64;Body data: Object): Observable&lt;any&gt; &#123;
    return;
  &#125;

  &#64;POST()
  save(&#64;Payload data: &#123;&#125;): Observable&lt;any&gt; &#123;
    return;
  &#125;

  &#64;FORM()
  save(&#64;Payload data: &#123;&#125;): Observable&lt;any&gt; &#123;
    return;
  &#125;
  
  // \u82E5\u8BF7\u6C42\u7684URL\u4E0D\u7B26\u5408\u6388\u6743\u8981\u6C42\uFF0C\u4F1A\u76F4\u63A5\u629B\u51FA \`401\` \u9519\u8BEF\uFF0C\u4E14\u4E0D\u53D1\u9001\u8BF7\u6C42
  &#64;GET(&#39;&#39;, &#123; acl: &#39;admin&#39; &#125;)
  ACL(): Observable&lt;any&gt; &#123;
    return;
  &#125;
&#125;
</code></pre>
<h3 id="\u7C7B"><a class="lake-link"><i data-anchor="\u7C7B"></i></a>\u7C7B</h3><ul>
<li><code>&#64;BaseUrl(url: string)</code></li>
<li><code>&#64;BaseHeaders(headers: HttpHeaders | &#123; [header: string]: string | string[] &#125;)</code></li>
</ul>
<h3 id="\u65B9\u6CD5"><a class="lake-link"><i data-anchor="\u65B9\u6CD5"></i></a>\u65B9\u6CD5</h3><ul>
<li><code>&#64;GET(url: string = &#39;&#39;, options?: HttpOptions)</code></li>
<li><code>&#64;POST(url: string = &#39;&#39;, options?: HttpOptions)</code></li>
<li><code>&#64;DELETE(url: string = &#39;&#39;, options?: HttpOptions)</code></li>
<li><code>&#64;PUT(url: string = &#39;&#39;, options?: HttpOptions)</code></li>
<li><code>&#64;HEAD(url: string = &#39;&#39;, options?: HttpOptions)</code></li>
<li><code>&#64;PATCH(url: string = &#39;&#39;, options?: HttpOptions)</code></li>
<li><code>&#64;JSONP(url: string = &#39;&#39;, options?: HttpOptions)</code></li>
<li><code>&#64;OPTIONS(url: string = &#39;&#39;, options?: HttpOptions)</code></li>
</ul>
<h4 id="httpoptions"><a class="lake-link"><i data-anchor="httpoptions"></i></a>HttpOptions</h4><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>acl</code></td>
<td>ACL \u914D\u7F6E\uFF0C\u82E5\u5BFC\u5165 <code>&#64;delon/acl</code> \u65F6\u81EA\u52A8\u6709\u6548\uFF0C\u7B49\u540C\u4E8E <code>ACLService.can(roleOrAbility: ACLCanType)</code> \u53C2\u6570\u503C</td>
<td><code>any</code></td>
<td>-</td>
</tr>
<tr>
<td><code>observe</code></td>
<td>\u6307\u5B9A\u54CD\u5E94\u5185\u5BB9</td>
<td><code>body,events,response</code></td>
<td>-</td>
</tr>
<tr>
<td><code>responseType</code></td>
<td>\u6307\u5B9A\u5185\u5BB9\u683C\u5F0F</td>
<td><code>arraybuffer,blob,json,text</code></td>
<td>-</td>
</tr>
<tr>
<td><code>reportProgress</code></td>
<td>\u662F\u5426\u76D1\u542C\u8FDB\u5EA6\u4E8B\u4EF6</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>withCredentials</code></td>
<td>\u8BBE\u7F6E withCredentials</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="\u53C2\u6570"><a class="lake-link"><i data-anchor="\u53C2\u6570"></i></a>\u53C2\u6570</h3><ul>
<li><code>&#64;Path(key?: string)</code> URL \u8DEF\u7531\u53C2\u6570</li>
<li><code>&#64;Query(key?: string)</code> URL \u53C2\u6570 QueryString</li>
<li><code>&#64;Body</code> \u53C2\u6570 Body</li>
<li><code>&#64;Headers(key?: string)</code> \u53C2\u6570 Headers</li>
<li><code>&#64;Payload</code> \u8BF7\u6C42\u8D1F\u8F7D<ul>
<li>\u5F53\u652F\u6301 Body \u65F6\uFF08\u4F8B\u5982\uFF1A<code>POST</code>\u3001<code>PUT</code>\uFF09\u4E3A\u5185\u5BB9\u4F53\u7B49\u540C <code>&#64;Body</code></li>
<li>\u5F53\u4E0D\u652F\u6301 Body \u65F6\uFF08\u4F8B\u5982\uFF1A<code>GET</code>\u3001<code>DELETE</code> \u7B49\uFF09\u4E3A <code>QueryString</code></li>
</ul>
</li>
</ul>
<h2 id="httpcontext"><a class="lake-link"><i data-anchor="httpcontext"></i></a>HttpContext</h2><h3 id="custom_error"><a class="lake-link"><i data-anchor="custom_error"></i></a>CUSTOM_ERROR</h3><p>\u662F\u5426\u81EA\u5B9A\u4E49\u5904\u7406\u5F02\u5E38\u6D88\u606F\u3002</p>
<pre><code class="language-ts">this.http.post(\`login\`, &#123;
 name: &#39;cipchk&#39;, pwd: &#39;123456&#39;
&#125;, &#123;
 context: new HttpContext()
             .set(ALLOW_ANONYMOUS, true)
             .set(CUSTOM_ERROR, true)
&#125;).subscribe(&#123;
 next: console.log,
 error: console.log
&#125;);
</code></pre>
<h3 id="ignore_base_url"><a class="lake-link"><i data-anchor="ignore_base_url"></i></a>IGNORE_BASE_URL</h3><p>\u662F\u5426\u5FFD\u7565API\u524D\u7F00\u3002</p>
<pre><code class="language-ts">// When environment.api.baseUrl set &#39;/api&#39;

this.http.get(\`/path\`) // Request Url: /api/path
this.http.get(\`/path\`, &#123; context: new HttpContext().set(IGNORE_BASE_URL, true) &#125;) // Request Url: /path
</code></pre>
<h3 id="raw_body"><a class="lake-link"><i data-anchor="raw_body"></i></a>RAW_BODY</h3><p>\u662F\u5426\u539F\u6837\u8FD4\u56DE\u8BF7\u6C42Body\u3002</p>
`,api:``,toc:[{id:`特性`,title:`特性`},{id:`示例`,title:`示例`},{id:`alainthemeconfig`,title:`AlainThemeConfig`,children:[{id:`api`,title:`API`}]},{id:`使用修饰器`,title:`使用修饰器`,children:[{id:`示例`,title:`示例`},{id:`类`,title:`类`},{id:`方法`,title:`方法`},{id:`参数`,title:`参数`}]},{id:`httpcontext`,title:`HttpContext`,children:[{id:`custom_error`,title:`CUSTOM_ERROR`},{id:`ignore_base_url`,title:`IGNORE_BASE_URL`},{id:`raw_body`,title:`RAW_BODY`}]}],raw:`---
order: 1
title: _HttpClient
type: Service
---

\`@delon/theme\` \u5305\u542B\u4E86\u4E00\u4E2A\u53EB [\\_HttpClient](https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/http/http.client.ts) \u7C7B\uFF0C\u5176\u672C\u8D28\u8FD8\u662F\u8C03\u7528 Angular \u7684 \`HttpClient\`\u3002

## \u7279\u6027

- \u66F4\u53CB\u597D\u7684\u8C03\u7528\u65B9\u6CD5
- \u7EF4\u62A4 \`loading\` \u5C5E\u6027
- \u5904\u7406\u7A7A\u503C
- \u7EDF\u4E00\u65F6\u95F4\u683C\u5F0F\u4E3A\u65F6\u95F4\u6233
- \u652F\u6301\u4FEE\u9970\u5668 @GET\u3001@POST \u7B49

## \u793A\u4F8B

\u7F51\u7EDC\u8BF7\u6C42\u4E00\u822C\u60C5\u51B5\u4E0B\u662F\u540C Object \u5BF9\u8C61\u505A\u4E3A\u53C2\u6570\u4E00\u8D77\u4F7F\u7528\uFF0C\u4F8B\u5982\u4E00\u4E2A \`get\` \u8BF7\u6C42\uFF0C\u539F\u59CB\u5199\u6CD5\uFF1A

\`\`\`ts
HttpClient.get(url, { params: { pi: 1 } });
\`\`\`

\u800C\u5BF9\u4E8E \`_HttpClient\` \u6765\u8BB2\uFF0C\u5C06\u53C2\u6570\u8FDB\u4E00\u6B65\u4F18\u5316\u4E3A\uFF1A

\`\`\`ts
_HttpClient.get(url, { pi: 1 });
\`\`\`

## AlainThemeConfig

\u901A\u7528\u914D\u7F6E\u9879\uFF0C\u4F8B\u5982\u7EDF\u4E00\u5BF9 \`_HttpClient\` \u8BBE\u7F6E\u7A7A\u503C\u3001\u65F6\u95F4\u5904\u7406\u65B9\u5F0F\u3002

\`\`\`ts
import { AlainThemeConfig } from '@delon/theme';
export function fnAlainThemeConfig(): AlainThemeConfig {
  return Object.assign(new AlainThemeConfig(), <AlainThemeConfig>{
    http: {
      nullValueHandling: 'ignore',
    },
  });
}

@NgModule({})
export class DelonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [
        { provide: AlainThemeConfig, useFactory: fnAlainThemeConfig },
      ],
    };
  }
}
\`\`\`

### API

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |
|----|----|----|-----|
| \`nullValueHandling\` | \u7A7A\u503C\u5904\u7406 | \`include,ignore\` | \`include\` |
| \`dateValueHandling\` | \u65F6\u95F4\u503C\u5904\u7406 | \`timestamp,ignore\` | \`timestamp\` |

## \u4F7F\u7528\u4FEE\u9970\u5668

\u76EE\u6807\u7C7B\u90FD\u5FC5\u987B\u7EE7\u627F \`BaseApi\` \u57FA\u7C7B\u3002

### \u793A\u4F8B

\`\`\`ts
@BaseUrl('/user')
@BaseHeaders({ bh: 'a' })
class RestService extends BaseApi {
  @GET()
  query(@Query('pi') pi: number, @Query('ps') ps: number): Observable<any> {
    return;
  }

  @GET(':id')
  get(@Path('id') id: number): Observable<any> {
    return;
  }

  @GET()
  get(@Payload data: {}): Observable<any> {
    return;
  }

  // \u4F7F\u7528 \`::id\` \u6765\u8868\u793A\u8F6C\u4E49\uFF0C\u82E5 \`id\` \u503C\u4E3A \`undefined\` \u4F1A\u5FFD\u7565\u8F6C\u6362\uFF0C\u4F8B\u5982\uFF1A
  // \u5F53 \`id\` \u4E3A \`10\` \u65F6 => 10:type
  // \u5F53 \`id\` \u4E3A \`undefined\` \u65F6 => :id:type
  @GET(':id::type')
  get(@Path('id') id: number): Observable<any> {
    return;
  }

  @POST(':id')
  save(@Path('id') id: number, @Body data: Object): Observable<any> {
    return;
  }

  @POST()
  save(@Payload data: {}): Observable<any> {
    return;
  }

  @FORM()
  save(@Payload data: {}): Observable<any> {
    return;
  }
  
  // \u82E5\u8BF7\u6C42\u7684URL\u4E0D\u7B26\u5408\u6388\u6743\u8981\u6C42\uFF0C\u4F1A\u76F4\u63A5\u629B\u51FA \`401\` \u9519\u8BEF\uFF0C\u4E14\u4E0D\u53D1\u9001\u8BF7\u6C42
  @GET('', { acl: 'admin' })
  ACL(): Observable<any> {
    return;
  }
}
\`\`\`

### \u7C7B

- \`@BaseUrl(url: string)\`
- \`@BaseHeaders(headers: HttpHeaders | { [header: string]: string | string[] })\`

### \u65B9\u6CD5

- \`@GET(url: string = '', options?: HttpOptions)\`
- \`@POST(url: string = '', options?: HttpOptions)\`
- \`@DELETE(url: string = '', options?: HttpOptions)\`
- \`@PUT(url: string = '', options?: HttpOptions)\`
- \`@HEAD(url: string = '', options?: HttpOptions)\`
- \`@PATCH(url: string = '', options?: HttpOptions)\`
- \`@JSONP(url: string = '', options?: HttpOptions)\`
- \`@OPTIONS(url: string = '', options?: HttpOptions)\`

#### HttpOptions

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |
|----|----|----|-----|
| \`acl\` | ACL \u914D\u7F6E\uFF0C\u82E5\u5BFC\u5165 \`@delon/acl\` \u65F6\u81EA\u52A8\u6709\u6548\uFF0C\u7B49\u540C\u4E8E \`ACLService.can(roleOrAbility: ACLCanType)\` \u53C2\u6570\u503C | \`any\` | - |
| \`observe\` | \u6307\u5B9A\u54CD\u5E94\u5185\u5BB9 | \`body,events,response\` | - |
| \`responseType\` | \u6307\u5B9A\u5185\u5BB9\u683C\u5F0F | \`arraybuffer,blob,json,text\` | - |
| \`reportProgress\` | \u662F\u5426\u76D1\u542C\u8FDB\u5EA6\u4E8B\u4EF6 | \`boolean\` | - |
| \`withCredentials\` | \u8BBE\u7F6E withCredentials | \`boolean\` | - |

### \u53C2\u6570

- \`@Path(key?: string)\` URL \u8DEF\u7531\u53C2\u6570
- \`@Query(key?: string)\` URL \u53C2\u6570 QueryString
- \`@Body\` \u53C2\u6570 Body
- \`@Headers(key?: string)\` \u53C2\u6570 Headers
- \`@Payload\` \u8BF7\u6C42\u8D1F\u8F7D
  - \u5F53\u652F\u6301 Body \u65F6\uFF08\u4F8B\u5982\uFF1A\`POST\`\u3001\`PUT\`\uFF09\u4E3A\u5185\u5BB9\u4F53\u7B49\u540C \`@Body\`
  - \u5F53\u4E0D\u652F\u6301 Body \u65F6\uFF08\u4F8B\u5982\uFF1A\`GET\`\u3001\`DELETE\` \u7B49\uFF09\u4E3A \`QueryString\`

## HttpContext

### CUSTOM_ERROR

\u662F\u5426\u81EA\u5B9A\u4E49\u5904\u7406\u5F02\u5E38\u6D88\u606F\u3002

\`\`\`ts
this.http.post(\`login\`, {
 name: 'cipchk', pwd: '123456'
}, {
 context: new HttpContext()
             .set(ALLOW_ANONYMOUS, true)
             .set(CUSTOM_ERROR, true)
}).subscribe({
 next: console.log,
 error: console.log
});
\`\`\`

### IGNORE_BASE_URL

\u662F\u5426\u5FFD\u7565API\u524D\u7F00\u3002

\`\`\`ts
// When environment.api.baseUrl set '/api'

this.http.get(\`/path\`) // Request Url: /api/path
this.http.get(\`/path\`, { context: new HttpContext().set(IGNORE_BASE_URL, true) }) // Request Url: /path
\`\`\`

### RAW_BODY

\u662F\u5426\u539F\u6837\u8FD4\u56DE\u8BF7\u6C42Body\u3002`}}};codes=[];static ɵfac=function(e){return new(e||n)};static ɵcmp=_e({type:n,selectors:[[`theme-http`]],hostAttrs:[1,`d-block`],decls:1,vars:2,consts:[[3,`codes`,`item`]],template:function(e,t){e&1&&lt(0,`app-docs`,0),e&2&&re(`codes`,t.codes)(`item`,t.item)},dependencies:[rt],encapsulation:2})};var Y=class n{item={name:`menu`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{order:2,title:`MenuService`,subtitle:`Menu Service`,description:`The data format is an array of Menu, where text text property muse be required, And it's not affected by external components (such as sidebar-nav),Thi...`,group:`Service`,path:`packages/theme/src/services/menu/index.en-US.md`,url:`/theme/menu/en`},text:`<p>The data format is an array of <a href="https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/menu/interface.ts" target="_blank" rel="noopener">Menu</a>, where <code>text</code> text property muse be required, And it&#39;s not affected by external components (such as <a href="/components/sidebar-nav">sidebar-nav</a>),</p>
<p>This is because menus it&#39;s essential part of the applications, And it can be used more effectively as a service, such as: dynamically generate navigation, title etc.</p>
<p><strong>Suggest:</strong> Start up Angular ([startup.service.ts](<a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/core/startup/startup.service" target="_blank" rel="noopener">https://github.com/ng-alain/ng-alain/blob/master/src/app/core/startup/startup.service</a> .ts)) After get menu data from remote, call the <code>add()</code> method.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="menuservice"><a class="lake-link"><i data-anchor="menuservice"></i></a>MenuService<label class="api-type-label service">service</label></h3><table>
<thead>
<tr>
<th>Method</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>add</code></td>
<td>Setting menu data</td>
</tr>
<tr>
<td><code>clear</code></td>
<td>Clear menu data</td>
</tr>
<tr>
<td><code>resume</code></td>
<td>Reset menu, may need call when I18N, user acl changed</td>
</tr>
<tr>
<td><code>find</code></td>
<td>Find a menu item by <code>url</code> or <code>key</code></td>
</tr>
<tr>
<td><code>getItem</code></td>
<td>Get menu item based on <code>key</code></td>
</tr>
<tr>
<td><code>getPathByUrl</code></td>
<td>Get menu list based on url</td>
</tr>
<tr>
<td><code>setItem</code></td>
<td>Set menu item</td>
</tr>
<tr>
<td><code>open</code></td>
<td>Open of the menu</td>
</tr>
<tr>
<td><code>toggleOpen</code></td>
<td>Toggle menu open or close</td>
</tr>
<tr>
<td><code>openAll</code></td>
<td>Toggle all menu open or close</td>
</tr>
<tr>
<td><code>getDefaultRedirect</code></td>
<td>Returns a default menu link</td>
</tr>
</tbody></table>
<p><strong>recursive</strong></p>
<p>Recursive upward find, for example, the menu data source contains <code>/ware</code>, then <code>/ware/1</code> is equivalent to <code>/ware</code>.</p>
<h3 id="menu"><a class="lake-link"><i data-anchor="menu"></i></a>Menu</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>render_type</code></td>
<td>Rendering type of menu item</td>
<td><code>item, divider</code></td>
<td>-</td>
</tr>
<tr>
<td><code>text</code></td>
<td>Text of menu item, can be choose one of <code>text</code> or <code>i18n</code> (Support HTML)</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>i18n</code></td>
<td>I18n key of menu item, can be choose one of <code>text</code> or <code>i18n</code> (Support HTML)</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>group</code></td>
<td>Whether to display the group name</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>link</code></td>
<td>Routing for the menu item, can be choose one of <code>link</code> or <code>externalLink</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>externalLink</code></td>
<td>External link for the menu item, can be choose one of <code>link</code> or <code>externalLink</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>target</code></td>
<td>Specifies <code>externalLink</code> where to display the linked URL</td>
<td><code>_blank,_self,_parent,_top</code></td>
<td>-</td>
</tr>
<tr>
<td><code>icon</code></td>
<td>Icon for the menu item, only valid for the first level menu</td>
<td>\`string</td>
<td>MenuIcon\`</td>
</tr>
<tr>
<td><code>badge</code></td>
<td>Badget for the menu item when <code>group</code> is <code>true</code></td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>badgeDot</code></td>
<td>Whether to display a red dot instead of <code>badge</code> value</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>badgeStatus</code></td>
<td>Badge <a href="https://ng.ant.design/components/badge/en#nz-badge" target="_blank" rel="noopener">color</a></td>
<td><code>success,processing,default,error,warning</code></td>
<td><code>error</code></td>
</tr>
<tr>
<td><code>badgeOverflowCount</code></td>
<td>Maximum count to show in badge, show <code>$&#123;badgeOverflowCount&#125;+</code> when exceed</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>open</code></td>
<td>Whether open for the menu item</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>disabled</code></td>
<td>Whether disable for the menu item</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>hide</code></td>
<td>Whether hidden for the menu item</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>hideInBreadcrumb</code></td>
<td>Whether hide in breadcrumbs, which are valid when the <code>page-header</code> component automatically generates breadcrumbs</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>acl</code></td>
<td>ACL configuration, it&#39;s equivalent to <code>ACLService.can(roleOrAbility: ACLCanType)</code> parameter value</td>
<td><code>any</code></td>
<td>-</td>
</tr>
<tr>
<td><code>shortcut</code></td>
<td>Whether shortcut menu item</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>shortcutRoot</code></td>
<td>Wheter shortcut menu root node</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>reuse</code></td>
<td>Whether to allow reuse, need to cooperate with the <code>reuse-tab</code> component</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>open</code></td>
<td>Whether to expand, when <code>checkStrictly</code> is valid in <code>sidebar-nav</code> component</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>key</code></td>
<td>Unique identifier of the menu item, can be used in <code>getItem</code>, <code>setItem</code> to update a menu</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>children</code></td>
<td>Children for the menu item</td>
<td><code>Menu[]</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="menuicon"><a class="lake-link"><i data-anchor="menuicon"></i></a>MenuIcon</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[type]</code></td>
<td>Type for icon; <code>img</code>, <code>svg</code> Size uses <code>14px</code> width and height</td>
<td><code>class,icon,iconfont,img,svg</code></td>
<td><code>icon</code></td>
</tr>
<tr>
<td><code>[value]</code></td>
<td>Value for the icon, can be set Class Name, nz-icon of <code>nzType</code>, image</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td>Type of the ant design icon</td>
<td><code>outline,twotone,fill</code></td>
<td><code>outline</code></td>
</tr>
<tr>
<td><code>[spin]</code></td>
<td>Rotate icon with animation</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[twoToneColor]</code></td>
<td>Only support the two-tone icon. Specific the primary color</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[iconfont]</code></td>
<td>Type of the icon from iconfont</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[rotate]</code></td>
<td>Rotate degrees</td>
<td><code>number</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`,children:[{id:`menuservice`,title:`MenuService`},{id:`menu`,title:`Menu`},{id:`menuicon`,title:`MenuIcon`}]}],raw:"---\norder: 2\ntitle: MenuService\nsubtitle: Menu Service\ntype: Service\n---\n\nThe data format is an array of [Menu](https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/menu/interface.ts), where `text` text property muse be required, And it's not affected by external components (such as [sidebar-nav](/components/sidebar-nav)),\n\nThis is because menus it's essential part of the applications, And it can be used more effectively as a service, such as: dynamically generate navigation, title etc.\n\n**Suggest:** Start up Angular ([startup.service.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/startup/startup.service .ts)) After get menu data from remote, call the `add()` method.\n\n## API\n\n### MenuService\n\n| Method | Description |\n|--------|-----------|\n| `add` | Setting menu data |\n| `clear` | Clear menu data |\n| `resume` | Reset menu, may need call when I18N, user acl changed |\n| `find` | Find a menu item by `url` or `key` |\n| `getItem` | Get menu item based on `key` |\n| `getPathByUrl` | Get menu list based on url |\n| `setItem` | Set menu item |\n| `open` | Open of the menu |\n| `toggleOpen` | Toggle menu open or close |\n| `openAll` | Toggle all menu open or close |\n| `getDefaultRedirect` | Returns a default menu link |\n\n**recursive**\n\nRecursive upward find, for example, the menu data source contains `/ware`, then `/ware/1` is equivalent to `/ware`.\n\n### Menu\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `render_type` | Rendering type of menu item | `item, divider` | - |\n| `text` | Text of menu item, can be choose one of `text` or `i18n` (Support HTML) | `string` | - |\n| `i18n` | I18n key of menu item, can be choose one of `text` or `i18n` (Support HTML) | `string` | - |\n| `group` | Whether to display the group name | `boolean` | `true` |\n| `link` | Routing for the menu item, can be choose one of `link` or `externalLink` | `string` | - |\n| `externalLink` | External link for the menu item, can be choose one of `link` or `externalLink` | `string` | - |\n| `target` | Specifies `externalLink` where to display the linked URL | `_blank,_self,_parent,_top` | - |\n| `icon` | Icon for the menu item, only valid for the first level menu | `string | MenuIcon` | - |\n| `badge` | Badget for the menu item when `group` is `true` | `number` | - |\n| `badgeDot` | Whether to display a red dot instead of `badge` value | `boolean` | - |\n| `badgeStatus` | Badge [color](https://ng.ant.design/components/badge/en#nz-badge) | `success,processing,default,error,warning` | `error` |\n| `badgeOverflowCount` | Maximum count to show in badge, show `${badgeOverflowCount}+` when exceed | `number` | - |\n| `open` | Whether open for the menu item | `boolean` | `false` |\n| `disabled` | Whether disable for the menu item | `boolean` | `false` |\n| `hide` | Whether hidden for the menu item | `boolean` | `false` |\n| `hideInBreadcrumb` | Whether hide in breadcrumbs, which are valid when the `page-header` component automatically generates breadcrumbs | `boolean` | - |\n| `acl` | ACL configuration, it's equivalent to `ACLService.can(roleOrAbility: ACLCanType)` parameter value | `any` | - |\n| `shortcut` | Whether shortcut menu item | `boolean` | - |\n| `shortcutRoot` | Wheter shortcut menu root node | `boolean` | - |\n| `reuse` | Whether to allow reuse, need to cooperate with the `reuse-tab` component | `boolean` | - |\n| `open` | Whether to expand, when `checkStrictly` is valid in `sidebar-nav` component | `boolean` | - |\n| `key` | Unique identifier of the menu item, can be used in `getItem`, `setItem` to update a menu | `string` | - |\n| `children` | Children for the menu item | `Menu[]` | - |\n\n### MenuIcon\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[type]` | Type for icon; `img`, `svg` Size uses `14px` width and height | `class,icon,iconfont,img,svg` | `icon` |\n| `[value]` | Value for the icon, can be set Class Name, nz-icon of `nzType`, image | `string` | - |\n| `[theme]` | Type of the ant design icon | `outline,twotone,fill` | `outline` |\n| `[spin]` | Rotate icon with animation | `boolean` | `false` |\n| `[twoToneColor]` | Only support the two-tone icon. Specific the primary color | `string` | - |\n| `[iconfont]` | Type of the icon from iconfont | `string` | - |\n| `[rotate]` | Rotate degrees | `number` | - |"},"zh-CN":{meta:{order:2,title:`MenuService`,subtitle:`菜单服务`,description:`菜单服务的数据格式是一个 Menu 数组，其中 text 属性表示菜单文本为必填项，而且本身并不受外部组件的影响（例如sidebar-nav组件），这是因为菜单是贯穿整个项目必不可少的组成部分，而将其独立成一个服务可以更有效被使用，例如：动态生成导航、标题等。建议： 在 Angular 启动服务（s...`,group:`Service`,path:`packages/theme/src/services/menu/index.zh-CN.md`,url:`/theme/menu/zh`},text:`<p>\u83DC\u5355\u670D\u52A1\u7684\u6570\u636E\u683C\u5F0F\u662F\u4E00\u4E2A <a href="https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/menu/interface.ts" target="_blank" rel="noopener">Menu</a> \u6570\u7EC4\uFF0C\u5176\u4E2D <code>text</code> \u5C5E\u6027\u8868\u793A\u83DC\u5355\u6587\u672C\u4E3A\u5FC5\u586B\u9879\uFF0C\u800C\u4E14\u672C\u8EAB\u5E76\u4E0D\u53D7\u5916\u90E8\u7EC4\u4EF6\u7684\u5F71\u54CD\uFF08\u4F8B\u5982<a href="/components/sidebar-nav">sidebar-nav</a>\u7EC4\u4EF6\uFF09\uFF0C\u8FD9\u662F\u56E0\u4E3A\u83DC\u5355\u662F\u8D2F\u7A7F\u6574\u4E2A\u9879\u76EE\u5FC5\u4E0D\u53EF\u5C11\u7684\u7EC4\u6210\u90E8\u5206\uFF0C\u800C\u5C06\u5176\u72EC\u7ACB\u6210\u4E00\u4E2A\u670D\u52A1\u53EF\u4EE5\u66F4\u6709\u6548\u88AB\u4F7F\u7528\uFF0C\u4F8B\u5982\uFF1A\u52A8\u6001\u751F\u6210\u5BFC\u822A\u3001\u6807\u9898\u7B49\u3002</p>
<p><strong>\u5EFA\u8BAE\uFF1A</strong> \u5728 Angular \u542F\u52A8\u670D\u52A1\uFF08<a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/core/startup/startup.service.ts" target="_blank" rel="noopener">startup.service.ts</a>\uFF09\u4ECE\u8FDC\u7A0B\u83B7\u53D6\u5230\u83DC\u5355\u6570\u636E\u540E\uFF0C\u8C03\u7528 <code>add()</code> \u65B9\u6CD5\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="menuservice"><a class="lake-link"><i data-anchor="menuservice"></i></a>MenuService<label class="api-type-label service">service</label></h3><table>
<thead>
<tr>
<th>\u65B9\u6CD5</th>
<th>\u63CF\u8FF0</th>
</tr>
</thead>
<tbody><tr>
<td><code>add</code></td>
<td>\u8BBE\u7F6E\u83DC\u5355\u6570\u636E</td>
</tr>
<tr>
<td><code>clear</code></td>
<td>\u6E05\u7A7A\u83DC\u5355\u6570\u636E</td>
</tr>
<tr>
<td><code>resume</code></td>
<td>\u91CD\u7F6E\u83DC\u5355\uFF0C\u53EF\u80FDI18N\u3001\u7528\u6237\u6743\u9650\u53D8\u52A8\u65F6\u9700\u8981\u8C03\u7528\u5237\u65B0</td>
</tr>
<tr>
<td><code>find</code></td>
<td>\u5229\u7528 <code>url</code> \u6216 <code>key</code> \u67E5\u627E\u83DC\u5355</td>
</tr>
<tr>
<td><code>getItem</code></td>
<td>\u6839\u636E <code>key</code> \u83B7\u53D6\u83DC\u5355</td>
</tr>
<tr>
<td><code>getPathByUrl</code></td>
<td>\u6839\u636Eurl\u83B7\u53D6\u83DC\u5355\u5217\u8868</td>
</tr>
<tr>
<td><code>setItem</code></td>
<td>\u8BBE\u7F6E\u83DC\u5355\u503C</td>
</tr>
<tr>
<td><code>open</code></td>
<td>\u5C55\u5F00\u67D0\u83DC\u5355</td>
</tr>
<tr>
<td><code>toggleOpen</code></td>
<td>\u5207\u6362\u83DC\u5355\u7684\u5C55\u5F00\u6216\u5173\u95ED</td>
</tr>
<tr>
<td><code>openAll</code></td>
<td>\u5C55\u5F00\u6216\u5173\u95ED\u6240\u6709\u83DC\u5355</td>
</tr>
<tr>
<td><code>getDefaultRedirect</code></td>
<td>\u8FD4\u56DE\u4E00\u4E2A\u9ED8\u8BA4\u8DF3\u8F6C\u7684\u83DC\u5355\u94FE\u63A5</td>
</tr>
</tbody></table>
<p><strong>recursive</strong></p>
<p>\u8868\u793A\u81EA\u52A8\u5411\u4E0A\u9012\u5F52\u67E5\u627E\uFF0C\u4F8B\u5982\u83DC\u5355\u6570\u636E\u6E90\u5305\u542B <code>/ware</code>\uFF0C\u5219 <code>/ware/1</code> \u4E5F\u89C6\u4E3A <code>/ware</code> \u9879\u3002</p>
<h3 id="menu"><a class="lake-link"><i data-anchor="menu"></i></a>Menu</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>render_type</code></td>
<td>\u83DC\u5355\u9879\u7684\u6E32\u67D3\u7C7B\u578B</td>
<td><code>item, divider</code></td>
<td>-</td>
</tr>
<tr>
<td><code>text</code></td>
<td>\u6587\u672C\uFF08\u652F\u6301HTML\uFF09\uFF0C<strong>\u5FC5\u586B\u9879</strong></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>i18n</code></td>
<td>i18n\u4E3B\u952E\uFF08\u652F\u6301HTML\uFF09</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>group</code></td>
<td>\u662F\u5426\u663E\u793A\u5206\u7EC4\u540D\uFF0C\u6307<a href="//ng-alain.github.io/ng-alain/" target="_blank" rel="noopener">\u793A\u4F8B</a>\u4E2D\u7684\u3010\u4E3B\u5BFC\u822A\u3011\u5B57\u6837</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>link</code></td>
<td>\u8DEF\u7531\uFF0C<code>link</code>\u3001<code>externalLink</code> \u4E8C\u9009\u5176\u4E00</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>externalLink</code></td>
<td>\u5916\u90E8\u94FE\u63A5\uFF0C<code>link</code>\u3001<code>externalLink</code> \u4E8C\u9009\u5176\u4E00</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>target</code></td>
<td>\u94FE\u63A5 target</td>
<td><code>_blank,_self,_parent,_top</code></td>
<td>-</td>
</tr>
<tr>
<td><code>icon</code></td>
<td>\u56FE\u6807\uFF0C\u6307<a href="//ng-alain.github.io/ng-alain/" target="_blank" rel="noopener">\u793A\u4F8B</a>\u4E2D\u7684\u3010\u4EEA\u8868\u76D8\u3011\u524D\u56FE\u6807\uFF0C\u53EA\u5BF9\u4E00\u7EA7\u83DC\u5355\u6709\u6548</td>
<td>\`string</td>
<td>MenuIcon\`</td>
</tr>
<tr>
<td><code>badge</code></td>
<td>\u5FBD\u6807\u6570\uFF0C\u5C55\u793A\u7684\u6570\u5B57\uFF0C\u6307<a href="//ng-alain.github.io/ng-alain/" target="_blank" rel="noopener">\u793A\u4F8B</a>\u4E2D\u7684\u3010\u5C0F\u90E8\u4EF6\u3011\u540E\u7684\u7EA2\u8272\u5757\u3002\uFF08\u6CE8\uFF1A<code>group:true</code> \u65F6\u65E0\u6548\uFF09</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>badgeDot</code></td>
<td>\u5FBD\u6807\u6570\uFF0C\u663E\u793A\u5C0F\u7EA2\u70B9</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>badgeStatus</code></td>
<td>\u5FBD\u6807 Badge <a href="https://ng.ant.design/components/badge/en#nz-badge" target="_blank" rel="noopener">\u989C\u8272</a></td>
<td><code>success,processing,default,error,warning</code></td>
<td><code>error</code></td>
</tr>
<tr>
<td><code>badgeOverflowCount</code></td>
<td>\u5FBD\u6807\u6570\u503C\u663E\u793A\u4E0A\u9650\uFF0C\u8D85\u8FC7\u663E\u793A <code>$&#123;badgeOverflowCount&#125;+</code></td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>open</code></td>
<td>\u662F\u5426\u6253\u5F00\u83DC\u5355</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>disabled</code></td>
<td>\u662F\u5426\u7981\u7528\u83DC\u5355</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>hide</code></td>
<td>\u662F\u5426\u9690\u85CF\u83DC\u5355</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>hideInBreadcrumb</code></td>
<td>\u9690\u85CF\u9762\u5305\u5C51\uFF0C\u6307 <code>page-header</code> \u7EC4\u4EF6\u7684\u81EA\u52A8\u751F\u6210\u9762\u5305\u5C51\u65F6\u6709\u6548</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>acl</code></td>
<td>ACL\u914D\u7F6E\uFF0C\u82E5\u5BFC\u5165 <code>&#64;delon/acl</code> \u65F6\u81EA\u52A8\u6709\u6548\uFF0C\u7B49\u540C\u4E8E <code>ACLService.can(roleOrAbility: ACLCanType)</code> \u53C2\u6570\u503C</td>
<td><code>any</code></td>
<td>-</td>
</tr>
<tr>
<td><code>shortcut</code></td>
<td>\u662F\u5426\u5FEB\u6377\u83DC\u5355\u9879</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>shortcutRoot</code></td>
<td>\u5FEB\u6377\u83DC\u5355\u6839\u8282\u70B9</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>reuse</code></td>
<td>\u662F\u5426\u5141\u8BB8\u590D\u7528\uFF0C\u9700\u914D\u5408 <code>reuse-tab</code> \u7EC4\u4EF6</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>key</code></td>
<td>\u83DC\u5355\u9879\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u53EF\u7528\u4E8E <code>getItem</code>\u3001<code>setItem</code> \u6765\u66F4\u65B0\u67D0\u4E2A\u83DC\u5355</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>children</code></td>
<td>\u5B50\u83DC\u5355</td>
<td><code>Menu[]</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="menuicon"><a class="lake-link"><i data-anchor="menuicon"></i></a>MenuIcon</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[type]</code></td>
<td>\u7C7B\u578B\uFF1B<code>img</code>, <code>svg</code> \u7C7B\u578B\u9700\u8981 <code>14px</code> \u5BBD\u4E0E\u9AD8\u5C3A\u5BF8</td>
<td><code>class,icon,iconfont,img,svg</code></td>
<td><code>icon</code></td>
</tr>
<tr>
<td><code>[value]</code></td>
<td>\u503C\uFF0C\u5305\u542B\uFF1A\u7C7B\u540D\u3001\u56FE\u6807 <code>nzType</code>\u3001\u56FE\u50CF</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[theme]</code></td>
<td>\u56FE\u6807\u4E3B\u9898\u98CE\u683C</td>
<td><code>outline,twotone,fill</code></td>
<td><code>outline</code></td>
</tr>
<tr>
<td><code>[spin]</code></td>
<td>\u662F\u5426\u6709\u65CB\u8F6C\u52A8\u753B</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[twoToneColor]</code></td>
<td>\u4EC5\u9002\u7528\u53CC\u8272\u56FE\u6807\uFF0C\u8BBE\u7F6E\u53CC\u8272\u56FE\u6807\u7684\u4E3B\u8981\u989C\u8272\uFF0C\u4EC5\u5BF9\u5F53\u524D icon \u751F\u6548</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[iconfont]</code></td>
<td>\u6307\u5B9A\u6765\u81EA IconFont \u7684\u56FE\u6807\u7C7B\u578B</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[rotate]</code></td>
<td>\u56FE\u6807\u65CB\u8F6C\u89D2\u5EA6</td>
<td><code>number</code></td>
<td>-</td>
</tr>
</tbody></table>
<blockquote>
<p>\u4F7F\u7528 <code>iconfont</code> \u7C7B\u578B\u5FC5\u987B\u5148\u52A0\u8F7D <code>NzIconService.fetchFromIconfont</code>\uFF0C\u5EFA\u8BAE\u5728\u6839\u6A21\u5757\u4E2D\u6267\u884C\u3002</p>
</blockquote>
`,toc:[{id:`api`,title:`API`,children:[{id:`menuservice`,title:`MenuService`},{id:`menu`,title:`Menu`},{id:`menuicon`,title:`MenuIcon`}]}],raw:"---\norder: 2\ntitle: MenuService\nsubtitle: 菜单服务\ntype: Service\n---\n\n菜单服务的数据格式是一个 [Menu](https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/menu/interface.ts) 数组，其中 `text` 属性表示菜单文本为必填项，而且本身并不受外部组件的影响（例如[sidebar-nav](/components/sidebar-nav)组件），这是因为菜单是贯穿整个项目必不可少的组成部分，而将其独立成一个服务可以更有效被使用，例如：动态生成导航、标题等。\n\n**建议：** 在 Angular 启动服务（[startup.service.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/startup/startup.service.ts)）从远程获取到菜单数据后，调用 `add()` 方法。\n\n## API\n\n### MenuService\n\n| 方法 | 描述 |\n|----|----|\n| `add` | 设置菜单数据 |\n| `clear` | 清空菜单数据 |\n| `resume` | 重置菜单，可能I18N、用户权限变动时需要调用刷新 |\n| `find` | 利用 `url` 或 `key` 查找菜单 |\n| `getItem` | 根据 `key` 获取菜单 |\n| `getPathByUrl` | 根据url获取菜单列表 |\n| `setItem` | 设置菜单值 |\n| `open` | 展开某菜单 |\n| `toggleOpen` | 切换菜单的展开或关闭 |\n| `openAll` | 展开或关闭所有菜单 |\n| `getDefaultRedirect` | 返回一个默认跳转的菜单链接 |\n\n**recursive**\n\n表示自动向上递归查找，例如菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项。\n\n### Menu\n\n| 成员 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `render_type` | 菜单项的渲染类型 | `item, divider` | - |\n| `text` | 文本（支持HTML），**必填项** | `string` | - |\n| `i18n` | i18n主键（支持HTML） | `string` | - |\n| `group` | 是否显示分组名，指[示例](//ng-alain.github.io/ng-alain/)中的【主导航】字样 | `boolean` | `true` |\n| `link` | 路由，`link`、`externalLink` 二选其一 | `string` | - |\n| `externalLink` | 外部链接，`link`、`externalLink` 二选其一 | `string` | - |\n| `target` | 链接 target | `_blank,_self,_parent,_top` | - |\n| `icon` | 图标，指[示例](//ng-alain.github.io/ng-alain/)中的【仪表盘】前图标，只对一级菜单有效 | `string | MenuIcon` | - |\n| `badge` | 徽标数，展示的数字，指[示例](//ng-alain.github.io/ng-alain/)中的【小部件】后的红色块。（注：`group:true` 时无效） | `number` | - |\n| `badgeDot` | 徽标数，显示小红点 | `boolean` | - |\n| `badgeStatus` | 徽标 Badge [颜色](https://ng.ant.design/components/badge/en#nz-badge) | `success,processing,default,error,warning` | `error` |\n| `badgeOverflowCount` | 徽标数值显示上限，超过显示 `${badgeOverflowCount}+` | `number` | - |\n| `open` | 是否打开菜单 | `boolean` | `false` |\n| `disabled` | 是否禁用菜单 | `boolean` | `false` |\n| `hide` | 是否隐藏菜单 | `boolean` | `false` |\n| `hideInBreadcrumb` | 隐藏面包屑，指 `page-header` 组件的自动生成面包屑时有效 | `boolean` | - |\n| `acl` | ACL配置，若导入 `@delon/acl` 时自动有效，等同于 `ACLService.can(roleOrAbility: ACLCanType)` 参数值 | `any` | - |\n| `shortcut` | 是否快捷菜单项 | `boolean` | - |\n| `shortcutRoot` | 快捷菜单根节点 | `boolean` | - |\n| `reuse` | 是否允许复用，需配合 `reuse-tab` 组件 | `boolean` | - |\n| `key` | 菜单项唯一标识符，可用于 `getItem`、`setItem` 来更新某个菜单 | `string` | - |\n| `children` | 子菜单 | `Menu[]` | - |\n\n### MenuIcon\n\n| 成员 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[type]` | 类型；`img`, `svg` 类型需要 `14px` 宽与高尺寸 | `class,icon,iconfont,img,svg` | `icon` |\n| `[value]` | 值，包含：类名、图标 `nzType`、图像 | `string` | - |\n| `[theme]` | 图标主题风格 | `outline,twotone,fill` | `outline` |\n| `[spin]` | 是否有旋转动画 | `boolean` | `false` |\n| `[twoToneColor]` | 仅适用双色图标，设置双色图标的主要颜色，仅对当前 icon 生效 | `string` | - |\n| `[iconfont]` | 指定来自 IconFont 的图标类型 | `string` | - |\n| `[rotate]` | 图标旋转角度 | `number` | - |\n\n> 使用 `iconfont` 类型必须先加载 `NzIconService.fetchFromIconfont`，建议在根模块中执行。"}}};codes=[];static ɵfac=function(e){return new(e||n)};static ɵcmp=_e({type:n,selectors:[[`theme-menu`]],hostAttrs:[1,`d-block`],decls:1,vars:2,consts:[[3,`codes`,`item`]],template:function(e,t){e&1&&lt(0,`app-docs`,0),e&2&&re(`codes`,t.codes)(`item`,t.item)},dependencies:[rt],encapsulation:2})};var K=class n{modalHelper=u(Jp);msg=u(Ad);open(){this.modalHelper.create(h,{record:{a:1,b:`2`,c:new Date}}).subscribe(o=>{this.msg.info(o)})}static(){this.modalHelper.createStatic(h,{record:{a:1,b:`2`,c:new Date}}).subscribe(o=>{this.msg.info(o)})}static ɵfac=function(e){return new(e||n)};static ɵcmp=_e({type:n,selectors:[[`theme-modal-simple`]],decls:4,vars:0,consts:[[`nz-button`,``,3,`click`]],template:function(e,t){e&1&&(ne(0,`button`,0),Fe(`click`,function(){return t.open()}),en(1,`Open`),le(),ne(2,`button`,0),Fe(`click`,function(){return t.static()}),en(3,`Static`),le())},dependencies:[Q5,Hd,q5,K5],encapsulation:2})};var $=class n{modalHelper=u(Jp);msg=u(Ad);open(){this.modalHelper.create(h,{record:{a:1,b:`2`,c:new Date}},{drag:!0}).subscribe(o=>{this.msg.info(o)})}static ɵfac=function(e){return new(e||n)};static ɵcmp=_e({type:n,selectors:[[`theme-modal-drag`]],decls:2,vars:0,consts:[[`nz-button`,``,3,`click`]],template:function(e,t){e&1&&(ne(0,`button`,0),Fe(`click`,function(){return t.open()}),en(1,`Open`),le())},dependencies:[Q5,Hd,q5,K5],encapsulation:2})};var Q=class n{item={name:`modal`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{order:3,title:`ModalHelper`,subtitle:`Modal Helper`,description:`Based on the NzModalService package, it solves some known issues:More friendly handling callbacksDefault Button FocusResponsive WidthThere are include...`,group:`Service`,path:`packages/theme/src/services/modal/index.en-US.md`,url:`/theme/modal/en`},text:`<p>Based on the <code>NzModalService</code> package, it solves some known issues:</p>
<ul>
<li>More friendly handling callbacks</li>
<li>Default Button Focus</li>
<li>Responsive Width</li>
</ul>
<h2 id="usage"><a class="lake-link"><i data-anchor="usage"></i></a>Usage</h2><pre><code class="language-ts">this.modalHelper.create(FormEditComponent, &#123; i &#125;).subscribe(res =&gt; this.load());

// Ok callback, Where \`nzModalRef\` refers to the variable name of the target component in the constructor \`NzModalRef\`
// 1. considered successful
this.nzModalRef.close(true);
this.nzModalRef.close(&#123; other: 1 &#125;);
// 2. considered error
this.nzModalRef.close();

// Close
this.nzModalRef.destroy();
</code></pre>
<p>There are includes <code>create</code> &amp; <code>createStatic</code> methods to open the normal &amp; static modal. Add a few parameters based on <code>NzModalService</code>.</p>
<p><strong>Custom component HTML template</strong></p>
<pre><code class="language-html">&lt;div class=&quot;modal-header&quot;&gt;
  &lt;div class=&quot;modal-title&quot;&gt;Title&lt;/div&gt;
&lt;/div&gt;

Your body content

&lt;div class=&quot;modal-footer&quot;&gt;
  &lt;button nz-button [nzType]=&quot;&#39;default&#39;&quot; (click)=&quot;cancel()&quot;&gt;
    Cancel
  &lt;/button&gt;
  &lt;button nz-button [nzType]=&quot;&#39;primary&#39;&quot; (click)=&quot;ok()&quot;&gt;
    OK
  &lt;/button&gt;
&lt;/div&gt;
</code></pre>
<h3 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>size</code></td>
<td>Specify modal size</td>
<td><code>sm,md,lg,xl,number,string</code></td>
<td><code>lg</code></td>
</tr>
<tr>
<td><code>exact</code></td>
<td>Exact match return value, default is <code>true</code>, If the return value is not null (<code>null</code> or <code>undefined</code>) is considered successful, otherwise it is considered error.</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>includeTabs</code></td>
<td>Whether to wrap the tab page</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>drag</code></td>
<td>Drag</td>
<td><code>boolean, ModalHelperDragOptions</code></td>
<td>-</td>
</tr>
<tr>
<td><code>useNzData</code></td>
<td>Whether it is mandatory to use <code>nzData</code> to pass parameters. If it is <code>false</code>, it means that the parameters will be directly mapped to the component instance, and other values \u200B\u200Bcan only be obtained through <code>NZ_MODAL_DATA</code>.</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>modalOptions</code></td>
<td>nz-modal raw parameters <a href="https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/modal-types.ts" target="_blank" rel="noopener">ModalOptions</a></td>
<td><code>ModalOptions</code></td>
<td>-</td>
</tr>
</tbody></table>
`,api:``,toc:[{id:`usage`,title:`Usage`,children:[{id:`api`,title:`API`}]}],raw:'---\norder: 3\ntitle: ModalHelper\nsubtitle: Modal Helper\ntype: Service\n---\n\nBased on the `NzModalService` package, it solves some known issues:\n\n- More friendly handling callbacks\n- Default Button Focus\n- Responsive Width\n\n## Usage\n\n```ts\nthis.modalHelper.create(FormEditComponent, { i }).subscribe(res => this.load());\n\n// Ok callback, Where `nzModalRef` refers to the variable name of the target component in the constructor `NzModalRef`\n// 1. considered successful\nthis.nzModalRef.close(true);\nthis.nzModalRef.close({ other: 1 });\n// 2. considered error\nthis.nzModalRef.close();\n\n// Close\nthis.nzModalRef.destroy();\n```\n\nThere are includes `create` & `createStatic` methods to open the normal & static modal. Add a few parameters based on `NzModalService`.\n\n**Custom component HTML template**\n\n```html\n<div class="modal-header">\n  <div class="modal-title">Title</div>\n</div>\n\nYour body content\n\n<div class="modal-footer">\n  <button nz-button [nzType]="\'default\'" (click)="cancel()">\n    Cancel\n  </button>\n  <button nz-button [nzType]="\'primary\'" (click)="ok()">\n    OK\n  </button>\n</div>\n```\n\n### API\n\n| Property | Description  | Type  | Default   |\n| --- | --- | --- | --- |\n| `size` | Specify modal size | `sm,md,lg,xl,number,string` | `lg` |\n| `exact` | Exact match return value, default is `true`, If the return value is not null (`null` or `undefined`) is considered successful, otherwise it is considered error. | `boolean` | `true` |\n| `includeTabs` | Whether to wrap the tab page | `boolean` | `false` |\n| `drag` | Drag | `boolean, ModalHelperDragOptions` | - |\n| `useNzData` | Whether it is mandatory to use `nzData` to pass parameters. If it is `false`, it means that the parameters will be directly mapped to the component instance, and other values ​​can only be obtained through `NZ_MODAL_DATA`. | `boolean` | `false` |\n| `modalOptions` | nz-modal raw parameters [ModalOptions](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/modal-types.ts) | `ModalOptions` | - |'},"zh-CN":{meta:{order:3,title:`ModalHelper`,subtitle:`对话框辅助类`,description:`基于 NzModalService 封装，它解决一些已知问题：更友好的处理回调按钮默认焦点响应式宽度包括两个方法体 create & createStatic 分别打开普通&静态对话框。在 NzModalService 基础上新增若干参数。自定义组件HTML模板`,group:`Service`,path:`packages/theme/src/services/modal/index.zh-CN.md`,url:`/theme/modal/zh`},text:`<p>\u57FA\u4E8E <code>NzModalService</code> \u5C01\u88C5\uFF0C\u5B83\u89E3\u51B3\u4E00\u4E9B\u5DF2\u77E5\u95EE\u9898\uFF1A</p>
<ul>
<li>\u66F4\u53CB\u597D\u7684\u5904\u7406\u56DE\u8C03</li>
<li>\u6309\u94AE\u9ED8\u8BA4\u7126\u70B9</li>
<li>\u54CD\u5E94\u5F0F\u5BBD\u5EA6</li>
</ul>
<h2 id="\u7528\u6CD5"><a class="lake-link"><i data-anchor="\u7528\u6CD5"></i></a>\u7528\u6CD5</h2><pre><code class="language-ts">this.modalHelper.create(FormEditComponent, &#123; i &#125;).subscribe(res =&gt; this.load());

// \u6210\u529F\u8303\u4F8B\uFF0C\u5176\u4E2D \`nzModalRef\` \u6307\u76EE\u6807\u7EC4\u4EF6\u5728\u6784\u9020\u51FD\u6570 \`NzModalRef\` \u53D8\u91CF\u540D
// 1. \u89C6\u4E3A\u6210\u529F
this.nzModalRef.close(true);
this.nzModalRef.close(&#123; other: 1 &#125;);
// 2. \u89C6\u4E3A\u5931\u8D25
this.nzModalRef.close();

// \u5173\u95ED\uFF1A
this.nzModalRef.destroy();
</code></pre>
<p>\u5305\u62EC\u4E24\u4E2A\u65B9\u6CD5\u4F53 <code>create</code> &amp; <code>createStatic</code> \u5206\u522B\u6253\u5F00\u666E\u901A&amp;\u9759\u6001\u5BF9\u8BDD\u6846\u3002\u5728 <code>NzModalService</code> \u57FA\u7840\u4E0A\u65B0\u589E\u82E5\u5E72\u53C2\u6570\u3002</p>
<p><strong>\u81EA\u5B9A\u4E49\u7EC4\u4EF6HTML\u6A21\u677F</strong></p>
<pre><code class="language-html">&lt;div class=&quot;modal-header&quot;&gt;
  &lt;div class=&quot;modal-title&quot;&gt;Title&lt;/div&gt;
&lt;/div&gt;

Your body content

&lt;div class=&quot;modal-footer&quot;&gt;
  &lt;button nz-button [nzType]=&quot;&#39;default&#39;&quot; (click)=&quot;cancel()&quot;&gt;
    Cancel
  &lt;/button&gt;
  &lt;button nz-button [nzType]=&quot;&#39;primary&#39;&quot; (click)=&quot;ok()&quot;&gt;
    OK
  &lt;/button&gt;
&lt;/div&gt;
</code></pre>
<h3 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h3><table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u63CF\u8FF0</th>
</tr>
</thead>
<tbody><tr>
<td><code>size</code></td>
<td>\u6307\u5B9A\u5BF9\u8BDD\u6846\u5927\u5C0F</td>
<td><code>sm,md,lg,xl,number,string</code></td>
<td><code>lg</code></td>
</tr>
<tr>
<td><code>exact</code></td>
<td>\u662F\u5426\u7CBE\u51C6\uFF08\u9ED8\u8BA4\uFF1A<code>true</code>\uFF09\uFF0C\u82E5\u8FD4\u56DE\u503C\u975E\u7A7A\u503C\uFF08<code>null</code>\u6216<code>undefined</code>\uFF09\u89C6\u4E3A\u6210\u529F\uFF0C\u5426\u5219\u89C6\u4E3A\u9519\u8BEF</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>includeTabs</code></td>
<td>\u662F\u5426\u5305\u88F9\u6807\u7B7E\u9875</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>drag</code></td>
<td>\u652F\u6301\u62D6\u52A8</td>
<td><code>boolean, ModalHelperDragOptions</code></td>
<td>-</td>
</tr>
<tr>
<td><code>useNzData</code></td>
<td>\u662F\u5426\u5F3A\u5236\u4F7F\u7528 <code>nzData</code> \u4F20\u9012\u53C2\u6570\uFF0C\u82E5\u4E3A <code>false</code> \u8868\u793A\u53C2\u6570\u4F1A\u76F4\u63A5\u6620\u5C04\u5230\u7EC4\u4EF6\u5B9E\u4F8B\u4E2D\uFF0C\u5176\u4ED6\u503C\u53EA\u80FD\u901A\u8FC7 <code>NZ_MODAL_DATA</code> \u7684\u65B9\u5F0F\u6765\u83B7\u53D6\u53C2\u6570</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>modalOptions</code></td>
<td>\u5BF9\u8BDD\u6846 <a href="https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/modal-types.ts" target="_blank" rel="noopener">ModalOptions</a> \u53C2\u6570</td>
<td><code>ModalOptions</code></td>
<td>-</td>
</tr>
</tbody></table>
`,api:``,toc:[{id:`用法`,title:`用法`,children:[{id:`api`,title:`API`}]}],raw:'---\norder: 3\ntitle: ModalHelper\nsubtitle: 对话框辅助类\ntype: Service\n---\n\n基于 `NzModalService` 封装，它解决一些已知问题：\n\n- 更友好的处理回调\n- 按钮默认焦点\n- 响应式宽度\n\n## 用法\n\n```ts\nthis.modalHelper.create(FormEditComponent, { i }).subscribe(res => this.load());\n\n// 成功范例，其中 `nzModalRef` 指目标组件在构造函数 `NzModalRef` 变量名\n// 1. 视为成功\nthis.nzModalRef.close(true);\nthis.nzModalRef.close({ other: 1 });\n// 2. 视为失败\nthis.nzModalRef.close();\n\n// 关闭：\nthis.nzModalRef.destroy();\n```\n\n包括两个方法体 `create` & `createStatic` 分别打开普通&静态对话框。在 `NzModalService` 基础上新增若干参数。\n\n**自定义组件HTML模板**\n\n```html\n<div class="modal-header">\n  <div class="modal-title">Title</div>\n</div>\n\nYour body content\n\n<div class="modal-footer">\n  <button nz-button [nzType]="\'default\'" (click)="cancel()">\n    Cancel\n  </button>\n  <button nz-button [nzType]="\'primary\'" (click)="ok()">\n    OK\n  </button>\n</div>\n```\n\n### API\n\n| 名称 | 类型 | 默认值 | 描述 |\n| --- | --- | --- | --- |\n| `size` | 指定对话框大小 | `sm,md,lg,xl,number,string` | `lg` |\n| `exact` | 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误 | `boolean` | `true` |\n| `includeTabs` | 是否包裹标签页 | `boolean` | `false` |\n| `drag` | 支持拖动 | `boolean, ModalHelperDragOptions` | - |\n| `useNzData` | 是否强制使用 `nzData` 传递参数，若为 `false` 表示参数会直接映射到组件实例中，其他值只能通过 `NZ_MODAL_DATA` 的方式来获取参数 | `boolean` | `false` |\n| `modalOptions` | 对话框 [ModalOptions](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/modal-types.ts) 参数 | `ModalOptions` | - |'}}};codes=[{id:`theme-modal-simple`,name:`simple`,title:{"zh-CN":`基础样例`,"en-US":`Basic Usage`},code:`import { Component, inject } from '@angular/core';

import { DemoModalComponent } from '@shared';

import { ModalHelper } from '@delon/theme';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'theme-modal-simple',
  template: \`
    <button nz-button (click)="open()">Open</button>
    <button nz-button (click)="static()">Static</button>
  \`,
  imports: [NzButtonModule]
})
export class ThemeModalSimple {
  private modalHelper = inject(ModalHelper);
  private msg = inject(NzMessageService);

  open(): void {
    this.modalHelper.create(DemoModalComponent, { record: { a: 1, b: '2', c: new Date() } }).subscribe(res => {
      this.msg.info(res);
    });
  }

  static(): void {
    this.modalHelper.createStatic(DemoModalComponent, { record: { a: 1, b: '2', c: new Date() } }).subscribe(res => {
      this.msg.info(res);
    });
  }
}`,order:0,type:`demo`,summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:`packages/theme/src/services/modal/demo/simple.md`},{id:`theme-modal-drag`,name:`drag`,title:{"zh-CN":`拖动`,"en-US":`Drag`},code:`import { Component, inject } from '@angular/core';

import { DemoModalComponent } from '@shared';

import { ModalHelper } from '@delon/theme';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'theme-modal-drag',
  template: \` <button nz-button (click)="open()">Open</button> \`,
  imports: [NzButtonModule]
})
export class ThemeModalDrag {
  private modalHelper = inject(ModalHelper);
  private msg = inject(NzMessageService);

  open(): void {
    this.modalHelper
      .create(DemoModalComponent, { record: { a: 1, b: '2', c: new Date() } }, { drag: true })
      .subscribe(res => {
        this.msg.info(res);
      });
  }
}`,order:1,type:`demo`,summary:{"en-US":`<p>Support for dragging dialogs.</p>
`,"zh-CN":`<p>\u652F\u6301\u62D6\u52A8\u5BF9\u8BDD\u6846\u3002</p>
`},summary_raw:{"en-US":`Support for dragging dialogs.
`,"zh-CN":`\u652F\u6301\u62D6\u52A8\u5BF9\u8BDD\u6846\u3002
`},path:`packages/theme/src/services/modal/demo/drag.md`}];static ɵfac=function(e){return new(e||n)};static ɵcmp=_e({type:n,selectors:[[`theme-modal`]],hostAttrs:[1,`d-block`],decls:7,vars:7,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`24`],[3,`item`]],template:function(e,t){e&1&&(ne(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),lt(4,`theme-modal-simple`),le(),ne(5,`code-box`,3),lt(6,`theme-modal-drag`),le()()()()),e&2&&(re(`codes`,t.codes)(`item`,t.item),I$1(),re(`nzGutter`,16),I$1(2),re(`item`,t.codes[0]),Vt(`id`,t.codes[0].id),I$1(2),re(`item`,t.codes[1]),Vt(`id`,t.codes[1].id))},dependencies:[rt,K,$,ln,Ue,X$1],encapsulation:2})};var Z=class n{item={name:`responsive`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{order:5,title:`ResponsiveService`,subtitle:`Responsive Service`,description:`More friendly use responsive rules, the original xs, sm etc. reduced to col property, the default response rule:In order to better develop responsives...`,group:`Service`,path:`packages/theme/src/services/responsive/index.en-US.md`,url:`/theme/responsive/en`},text:`<p>More friendly use responsive rules, the original <code>xs</code>, <code>sm</code> etc. reduced to <code>col</code> property, the default response rule:</p>
<table>
<thead>
<tr>
<th><code>col</code></th>
<th><code>&lt;576px</code></th>
<th><code>\u2265576px</code></th>
<th><code>\u2265768px</code></th>
<th><code>\u2265992px</code></th>
<th><code>\u22651200px</code></th>
<th><code>\u22651600px</code></th>
</tr>
</thead>
<tbody><tr>
<td><code>1</code></td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td><code>2</code></td>
<td>1</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
</tr>
<tr>
<td><code>3</code></td>
<td>1</td>
<td>2</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>3</td>
</tr>
<tr>
<td><code>4</code></td>
<td>1</td>
<td>2</td>
<td>3</td>
<td>4</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td><code>5</code></td>
<td>1</td>
<td>2</td>
<td>3</td>
<td>4</td>
<td>6</td>
<td>6</td>
</tr>
<tr>
<td><code>6</code></td>
<td>1</td>
<td>2</td>
<td>3</td>
<td>4</td>
<td>6</td>
<td>12</td>
</tr>
</tbody></table>
<p>In order to better develop responsives this view or edit pages, the rule will be used by default in <code>sg</code>, <code>sv</code>, <code>se</code> components. You can via <code>ResponsiveConfig</code> to override the default rules.</p>
<h2 id="responsiveconfig"><a class="lake-link"><i data-anchor="responsiveconfig"></i></a>ResponsiveConfig</h2><pre><code class="language-ts">import &#123; AlainThemeConfig &#125; from &#39;&#64;delon/theme&#39;;
export function fnAlainThemeConfig(): AlainThemeConfig &#123;
  return Object.assign(new AlainThemeConfig(), &lt;AlainThemeConfig&gt;&#123;
    responsive: &lt;ResponsiveConfig&gt;&#123;
      rules: &#123;
        1: &#123; xs: 24 &#125;,
        2: &#123; xs: 24, sm: 12 &#125;,
        3: &#123; xs: 24, sm: 12, md: 8 &#125;,
        4: &#123; xs: 24, sm: 12, md: 8, lg: 6 &#125;,
        5: &#123; xs: 24, sm: 12, md: 8, lg: 6, xl: 4 &#125;,
        6: &#123; xs: 24, sm: 12, md: 8, lg: 6, xl: 4, xxl: 2 &#125;,
      &#125;
    &#125;,
  &#125;);
&#125;

&#64;NgModule(&#123;&#125;)
export class DelonModule &#123;
  static forRoot(): ModuleWithProviders &#123;
    return &#123;
      ngModule: DelonModule,
      providers: [
        &#123; provide: AlainThemeConfig, useFactory: fnAlainThemeConfig &#125;,
      ],
    &#125;;
  &#125;
&#125;
</code></pre>
`,api:``,toc:[{id:`responsiveconfig`,title:`ResponsiveConfig`}],raw:`---
type: Service
order: 5
title: ResponsiveService
subtitle: Responsive Service
---

More friendly use responsive rules, the original \`xs\`, \`sm\` etc. reduced to \`col\` property, the default response rule:

| \`col\` | \`<576px\` | \`\u2265576px\` | \`\u2265768px\` | \`\u2265992px\` | \`\u22651200px\` | \`\u22651600px\` |
| ----- | -------- | -------- | -------- | -------- | --------- | --------- |
| \`1\`   | 1        | 1        | 1        | 1        | 1         | 1         |
| \`2\`   | 1        | 2        | 2        | 2        | 2         | 2         |
| \`3\`   | 1        | 2        | 3        | 3        | 3         | 3         |
| \`4\`   | 1        | 2        | 3        | 4        | 4         | 4         |
| \`5\`   | 1        | 2        | 3        | 4        | 6         | 6         |
| \`6\`   | 1        | 2        | 3        | 4        | 6         | 12        |

In order to better develop responsives this view or edit pages, the rule will be used by default in \`sg\`, \`sv\`, \`se\` components. You can via \`ResponsiveConfig\` to override the default rules.

## ResponsiveConfig

\`\`\`ts
import { AlainThemeConfig } from '@delon/theme';
export function fnAlainThemeConfig(): AlainThemeConfig {
  return Object.assign(new AlainThemeConfig(), <AlainThemeConfig>{
    responsive: <ResponsiveConfig>{
      rules: {
        1: { xs: 24 },
        2: { xs: 24, sm: 12 },
        3: { xs: 24, sm: 12, md: 8 },
        4: { xs: 24, sm: 12, md: 8, lg: 6 },
        5: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4 },
        6: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4, xxl: 2 },
      }
    },
  });
}

@NgModule({})
export class DelonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [
        { provide: AlainThemeConfig, useFactory: fnAlainThemeConfig },
      ],
    };
  }
}
\`\`\``},"zh-CN":{meta:{order:5,title:`ResponsiveService`,subtitle:`响应式服务`,description:`更友好的使用响应式规则，将原 xs、sm 等属性简化成 col 栏，默认响应式规则：为了更好的开发响应式查看、编辑页，这种规则将默认将运用在 sg、sv、se 等组件中。你也可以利用 ResponsiveConfig 来改写默认规则。通用配置项，例如统一对 ResponsiveService 设置响...`,group:`Service`,path:`packages/theme/src/services/responsive/index.zh-CN.md`,url:`/theme/responsive/zh`},text:`<p>\u66F4\u53CB\u597D\u7684\u4F7F\u7528\u54CD\u5E94\u5F0F\u89C4\u5219\uFF0C\u5C06\u539F <code>xs</code>\u3001<code>sm</code> \u7B49\u5C5E\u6027\u7B80\u5316\u6210 <code>col</code> \u680F\uFF0C\u9ED8\u8BA4\u54CD\u5E94\u5F0F\u89C4\u5219\uFF1A</p>
<table>
<thead>
<tr>
<th><code>col</code></th>
<th><code>&lt;576px</code></th>
<th><code>\u2265576px</code></th>
<th><code>\u2265768px</code></th>
<th><code>\u2265992px</code></th>
<th><code>\u22651200px</code></th>
<th><code>\u22651600px</code></th>
</tr>
</thead>
<tbody><tr>
<td><code>1</code></td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td><code>2</code></td>
<td>1</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
</tr>
<tr>
<td><code>3</code></td>
<td>1</td>
<td>2</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>3</td>
</tr>
<tr>
<td><code>4</code></td>
<td>1</td>
<td>2</td>
<td>3</td>
<td>4</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td><code>5</code></td>
<td>1</td>
<td>2</td>
<td>3</td>
<td>4</td>
<td>6</td>
<td>6</td>
</tr>
<tr>
<td><code>6</code></td>
<td>1</td>
<td>2</td>
<td>3</td>
<td>4</td>
<td>6</td>
<td>12</td>
</tr>
</tbody></table>
<p>\u4E3A\u4E86\u66F4\u597D\u7684\u5F00\u53D1\u54CD\u5E94\u5F0F\u67E5\u770B\u3001\u7F16\u8F91\u9875\uFF0C\u8FD9\u79CD\u89C4\u5219\u5C06\u9ED8\u8BA4\u5C06\u8FD0\u7528\u5728 <code>sg</code>\u3001<code>sv</code>\u3001<code>se</code> \u7B49\u7EC4\u4EF6\u4E2D\u3002\u4F60\u4E5F\u53EF\u4EE5\u5229\u7528 <code>ResponsiveConfig</code> \u6765\u6539\u5199\u9ED8\u8BA4\u89C4\u5219\u3002</p>
<h2 id="responsiveconfig"><a class="lake-link"><i data-anchor="responsiveconfig"></i></a>ResponsiveConfig</h2><p>\u901A\u7528\u914D\u7F6E\u9879\uFF0C\u4F8B\u5982\u7EDF\u4E00\u5BF9 <code>ResponsiveService</code> \u8BBE\u7F6E\u54CD\u5E94\u5F0F\u89C4\u5219\u3002</p>
<pre><code class="language-ts">import &#123; AlainThemeConfig &#125; from &#39;&#64;delon/theme&#39;;
export function fnAlainThemeConfig(): AlainThemeConfig &#123;
  return Object.assign(new AlainThemeConfig(), &lt;AlainThemeConfig&gt;&#123;
    responsive: &lt;ResponsiveConfig&gt;&#123;
      rules: &#123;
        1: &#123; xs: 24 &#125;,
        2: &#123; xs: 24, sm: 12 &#125;,
        3: &#123; xs: 24, sm: 12, md: 8 &#125;,
        4: &#123; xs: 24, sm: 12, md: 8, lg: 6 &#125;,
        5: &#123; xs: 24, sm: 12, md: 8, lg: 6, xl: 4 &#125;,
        6: &#123; xs: 24, sm: 12, md: 8, lg: 6, xl: 4, xxl: 2 &#125;,
      &#125;
    &#125;,
  &#125;);
&#125;

&#64;NgModule(&#123;&#125;)
export class DelonModule &#123;
  static forRoot(): ModuleWithProviders &#123;
    return &#123;
      ngModule: DelonModule,
      providers: [
        &#123; provide: AlainThemeConfig, useFactory: fnAlainThemeConfig &#125;,
      ],
    &#125;;
  &#125;
&#125;
</code></pre>
`,api:``,toc:[{id:`responsiveconfig`,title:`ResponsiveConfig`}],raw:`---
type: Service
order: 5
title: ResponsiveService
subtitle: \u54CD\u5E94\u5F0F\u670D\u52A1
---

\u66F4\u53CB\u597D\u7684\u4F7F\u7528\u54CD\u5E94\u5F0F\u89C4\u5219\uFF0C\u5C06\u539F \`xs\`\u3001\`sm\` \u7B49\u5C5E\u6027\u7B80\u5316\u6210 \`col\` \u680F\uFF0C\u9ED8\u8BA4\u54CD\u5E94\u5F0F\u89C4\u5219\uFF1A

| \`col\` | \`<576px\` | \`\u2265576px\` | \`\u2265768px\` | \`\u2265992px\` | \`\u22651200px\` | \`\u22651600px\` |
| ----- | -------- | -------- | -------- | -------- | --------- | --------- |
| \`1\`   | 1        | 1        | 1        | 1        | 1         | 1         |
| \`2\`   | 1        | 2        | 2        | 2        | 2         | 2         |
| \`3\`   | 1        | 2        | 3        | 3        | 3         | 3         |
| \`4\`   | 1        | 2        | 3        | 4        | 4         | 4         |
| \`5\`   | 1        | 2        | 3        | 4        | 6         | 6         |
| \`6\`   | 1        | 2        | 3        | 4        | 6         | 12        |

\u4E3A\u4E86\u66F4\u597D\u7684\u5F00\u53D1\u54CD\u5E94\u5F0F\u67E5\u770B\u3001\u7F16\u8F91\u9875\uFF0C\u8FD9\u79CD\u89C4\u5219\u5C06\u9ED8\u8BA4\u5C06\u8FD0\u7528\u5728 \`sg\`\u3001\`sv\`\u3001\`se\` \u7B49\u7EC4\u4EF6\u4E2D\u3002\u4F60\u4E5F\u53EF\u4EE5\u5229\u7528 \`ResponsiveConfig\` \u6765\u6539\u5199\u9ED8\u8BA4\u89C4\u5219\u3002

## ResponsiveConfig

\u901A\u7528\u914D\u7F6E\u9879\uFF0C\u4F8B\u5982\u7EDF\u4E00\u5BF9 \`ResponsiveService\` \u8BBE\u7F6E\u54CD\u5E94\u5F0F\u89C4\u5219\u3002

\`\`\`ts
import { AlainThemeConfig } from '@delon/theme';
export function fnAlainThemeConfig(): AlainThemeConfig {
  return Object.assign(new AlainThemeConfig(), <AlainThemeConfig>{
    responsive: <ResponsiveConfig>{
      rules: {
        1: { xs: 24 },
        2: { xs: 24, sm: 12 },
        3: { xs: 24, sm: 12, md: 8 },
        4: { xs: 24, sm: 12, md: 8, lg: 6 },
        5: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4 },
        6: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4, xxl: 2 },
      }
    },
  });
}

@NgModule({})
export class DelonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [
        { provide: AlainThemeConfig, useFactory: fnAlainThemeConfig },
      ],
    };
  }
}
\`\`\``}}};codes=[];static ɵfac=function(e){return new(e||n)};static ɵcmp=_e({type:n,selectors:[[`theme-responsive`]],hostAttrs:[1,`d-block`],decls:1,vars:2,consts:[[3,`codes`,`item`]],template:function(e,t){e&1&&lt(0,`app-docs`,0),e&2&&re(`codes`,t.codes)(`item`,t.item)},dependencies:[rt],encapsulation:2})};var J=class n{item={name:`rtl`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{order:6,title:`RTLService`,subtitle:`RTL Service`,description:`RTL service control.`,group:`Service`,path:`packages/theme/src/services/rtl/index.en-US.md`,url:`/theme/rtl/en`},text:`<p>RTL service control.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><table>
<thead>
<tr>
<th>Method</th>
<th>Property</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>dir</code></td>
<td><code>Direction</code></td>
<td>Get or Set the current text direction</td>
</tr>
<tr>
<td><code>nextDir</code></td>
<td><code>Direction</code></td>
<td>Get the next text direction</td>
</tr>
<tr>
<td><code>change</code></td>
<td><code>Observable&lt;Direction&gt;</code></td>
<td>Subscription change notification</td>
</tr>
<tr>
<td><code>toggle()</code></td>
<td>-</td>
<td>Toggle text direction</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`}],raw:`---
type: Service
order: 6
title: RTLService
subtitle: RTL Service
---


RTL service control.

## API

| Method | Property | Description |
|--------|----------|-------------|
| \`dir\` | \`Direction\` | Get or Set the current text direction |
| \`nextDir\` | \`Direction\` | Get the next text direction |
| \`change\` | \`Observable<Direction>\` | Subscription change notification |
| \`toggle()\` | - | Toggle text direction |`},"zh-CN":{meta:{order:6,title:`RTLService`,subtitle:`RTL服务`,description:`RTL服务控制。`,group:`Service`,path:`packages/theme/src/services/rtl/index.zh-CN.md`,url:`/theme/rtl/zh`},text:`<p>RTL\u670D\u52A1\u63A7\u5236\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><table>
<thead>
<tr>
<th>\u63A5\u53E3\u540D</th>
<th>\u53C2\u6570</th>
<th>\u63CF\u8FF0</th>
</tr>
</thead>
<tbody><tr>
<td><code>dir</code></td>
<td><code>Direction</code></td>
<td>\u83B7\u53D6\u6216\u8BBE\u7F6E\u5F53\u524D\u6587\u5B57\u65B9\u5411</td>
</tr>
<tr>
<td><code>nextDir</code></td>
<td><code>Direction</code></td>
<td>\u83B7\u53D6\u4E0B\u4E00\u6B21\u6587\u5B57\u65B9\u5411</td>
</tr>
<tr>
<td><code>change</code></td>
<td><code>Observable&lt;Direction&gt;</code></td>
<td>\u8BA2\u9605\u53D8\u66F4\u901A\u77E5</td>
</tr>
<tr>
<td><code>toggle()</code></td>
<td>-</td>
<td>\u5207\u6362\u6587\u5B57\u65B9\u5411</td>
</tr>
</tbody></table>
`,toc:[{id:`api`,title:`API`}],raw:`---
type: Service
order: 6
title: RTLService
subtitle: RTL\u670D\u52A1
---

RTL\u670D\u52A1\u63A7\u5236\u3002

## API

| \u63A5\u53E3\u540D | \u53C2\u6570 | \u63CF\u8FF0 |
|-----|----|----|
| \`dir\` | \`Direction\` | \u83B7\u53D6\u6216\u8BBE\u7F6E\u5F53\u524D\u6587\u5B57\u65B9\u5411 |
| \`nextDir\` | \`Direction\` | \u83B7\u53D6\u4E0B\u4E00\u6B21\u6587\u5B57\u65B9\u5411 |
| \`change\` | \`Observable<Direction>\` | \u8BA2\u9605\u53D8\u66F4\u901A\u77E5 |
| \`toggle()\` | - | \u5207\u6362\u6587\u5B57\u65B9\u5411 |`}}};codes=[];static ɵfac=function(e){return new(e||n)};static ɵcmp=_e({type:n,selectors:[[`theme-rtl`]],hostAttrs:[1,`d-block`],decls:1,vars:2,consts:[[3,`codes`,`item`]],template:function(e,t){e&1&&lt(0,`app-docs`,0),e&2&&re(`codes`,t.codes)(`item`,t.item)},dependencies:[rt],encapsulation:2})};var X=class n{item={name:`settings`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{order:1,title:`SettingsService`,subtitle:`Project configuration`,description:`Project config data, includes App, Layout, User, three data types And store persistence in localStorage (Please refer to #1737 to switch to sessionSto...`,group:`Service`,path:`packages/theme/src/services/settings/index.en-US.md`,url:`/theme/settings/en`},text:`<p>Project config data, includes <a href="https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/settings/interface.ts#L1" target="_blank" rel="noopener">App</a>, <a href="https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/settings/interface.ts#L15" target="_blank" rel="noopener">Layout</a>, <a href="https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/settings/interface.ts#L8" target="_blank" rel="noopener">User</a>, three data types And store persistence in <code>localStorage</code> (Please refer to <a href="https://github.com/ng-alain/ng-alain/issues/1737" target="_blank" rel="noopener">#1737</a> to switch to <code>sessionStorage</code>).</p>
<p><strong>Suggest:</strong> Call the <code>setApp()</code>, <code>setUser()</code> methods to restore project config data, via Angular startup service (<a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/core/startup/startup.service.ts" target="_blank" rel="noopener">startup.service.ts</a>).</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="settingsservice"><a class="lake-link"><i data-anchor="settingsservice"></i></a>SettingsService<label class="api-type-label service">service</label></h3><table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Return Value</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>layout</code></td>
<td><code>property</code></td>
<td><code>Layout</code></td>
<td>Data of layout</td>
</tr>
<tr>
<td><code>app</code></td>
<td><code>property</code></td>
<td><code>App</code></td>
<td>Data of app</td>
</tr>
<tr>
<td><code>user</code></td>
<td><code>property</code></td>
<td><code>User</code></td>
<td>Data of User</td>
</tr>
<tr>
<td><code>notify</code></td>
<td><code>property</code></td>
<td><code>Observable&lt;SettingsNotify&gt;</code></td>
<td>Notify when layout, app, user information changes</td>
</tr>
<tr>
<td><code>setLayout(name: string, value: any)</code></td>
<td><code>method</code></td>
<td><code>boolean</code></td>
<td>Set property value of layout</td>
</tr>
<tr>
<td><code>setApp(value: App)</code></td>
<td><code>method</code></td>
<td><code>boolean</code></td>
<td>Set app data</td>
</tr>
<tr>
<td><code>setUser(value: User)</code></td>
<td><code>method</code></td>
<td><code>boolean</code></td>
<td>Set user data</td>
</tr>
</tbody></table>
<h3 id="app"><a class="lake-link"><i data-anchor="app"></i></a>App</h3><table>
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
<td>Name for app</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[description]</code></td>
<td>Description for app</td>
<td><code>string</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="user"><a class="lake-link"><i data-anchor="user"></i></a>User</h3><table>
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
<td>Name for current user</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[avatar]</code></td>
<td>Avatar for current user</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[email]</code></td>
<td>Email for current user</td>
<td><code>string</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="layout"><a class="lake-link"><i data-anchor="layout"></i></a>Layout</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[collapsed]</code></td>
<td>Whether to fold menu</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[lang]</code></td>
<td>Current language</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[colorWeak]</code></td>
<td>Color weak</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
</tbody></table>
<h2 id="faq"><a class="lake-link"><i data-anchor="faq"></i></a>FAQ</h2><p><strong>How to change the local storage key name?</strong></p>
<p>Support add the configuration of <code>ALAIN_SETTING_KEYS</code> via the <code>global-config.module.ts</code> global configuration file, for example:</p>
<pre><code class="language-diff"> const alainProvides = [
  provideAlainConfig(alainConfig),
+ &#123;
+   provide: ALAIN_SETTING_KEYS,
+   useValue: &#123;
+     layout: &#39;new-layout&#39;,
+     user: &#39;new-user&#39;,
+     app: &#39;new-app&#39;,
+   &#125;,
+ &#125;,
];
</code></pre>
`,toc:[{id:`api`,title:`API`,children:[{id:`settingsservice`,title:`SettingsService`},{id:`app`,title:`App`},{id:`user`,title:`User`},{id:`layout`,title:`Layout`}]},{id:`faq`,title:`FAQ`}],raw:"---\norder: 1\ntitle: SettingsService\nsubtitle: Project configuration\ntype: Service\n---\n\nProject config data, includes [App](https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/settings/interface.ts#L1), [Layout](https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/settings/interface.ts#L15), [User](https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/settings/interface.ts#L8), three data types And store persistence in `localStorage` (Please refer to [#1737](https://github.com/ng-alain/ng-alain/issues/1737) to switch to `sessionStorage`).\n\n**Suggest:** Call the `setApp()`, `setUser()` methods to restore project config data, via Angular startup service ([startup.service.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/startup/startup.service.ts)).\n\n## API\n\n### SettingsService\n\n| Name | Type | Return Value | Description |\n|------|------|--------------|-------------|\n| `layout` | `property` | `Layout` | Data of layout |\n| `app` | `property` | `App` | Data of app |\n| `user` | `property` | `User` | Data of User |\n| `notify` | `property` | `Observable<SettingsNotify>` | Notify when layout, app, user information changes |\n| `setLayout(name: string, value: any)` | `method` | `boolean` | Set property value of layout |\n| `setApp(value: App)` | `method` | `boolean` | Set app data |\n| `setUser(value: User)` | `method` | `boolean` | Set user data |\n\n### App\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[name]` | Name for app | `string` | - |\n| `[description]` | Description for app | `string` | - |\n\n### User\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[name]` | Name for current user | `string` | - |\n| `[avatar]` | Avatar for current user | `string` | - |\n| `[email]` | Email for current user | `string` | - |\n\n### Layout\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[collapsed]` | Whether to fold menu | `boolean` | - |\n| `[lang]` | Current language | `string` | - |\n| `[colorWeak]` | Color weak | `boolean` | `false` |\n\n## FAQ\n\n**How to change the local storage key name?**\n\nSupport add the configuration of `ALAIN_SETTING_KEYS` via the `global-config.module.ts` global configuration file, for example:\n\n```diff\n const alainProvides = [\n  provideAlainConfig(alainConfig),\n+ {\n+   provide: ALAIN_SETTING_KEYS,\n+   useValue: {\n+     layout: 'new-layout',\n+     user: 'new-user',\n+     app: 'new-app',\n+   },\n+ },\n];\n```"},"zh-CN":{meta:{order:1,title:`SettingsService`,subtitle:`项目配置项服务`,description:`项目配置项，包含应用App、布局Layout、用户信息User三种数据类型，并且存储持久化在 localStorage（参考#1737来切换成 sessionStorage）。建议： 在 Angular 启动服务（startup.service.ts）从远程获取到应用、用户数据后，调用 setApp...`,group:`Service`,path:`packages/theme/src/services/settings/index.zh-CN.md`,url:`/theme/settings/zh`},text:`<p>\u9879\u76EE\u914D\u7F6E\u9879\uFF0C\u5305\u542B\u5E94\u7528<a href="https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/settings/interface.ts#L1" target="_blank" rel="noopener">App</a>\u3001\u5E03\u5C40<a href="https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/settings/interface.ts#L15" target="_blank" rel="noopener">Layout</a>\u3001\u7528\u6237\u4FE1\u606F<a href="https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/settings/interface.ts#L8" target="_blank" rel="noopener">User</a>\u4E09\u79CD\u6570\u636E\u7C7B\u578B\uFF0C\u5E76\u4E14\u5B58\u50A8\u6301\u4E45\u5316\u5728 <code>localStorage</code>\uFF08\u53C2\u8003<a href="https://github.com/ng-alain/ng-alain/issues/1737" target="_blank" rel="noopener">#1737</a>\u6765\u5207\u6362\u6210 <code>sessionStorage</code>\uFF09\u3002</p>
<p><strong>\u5EFA\u8BAE\uFF1A</strong> \u5728 Angular \u542F\u52A8\u670D\u52A1\uFF08<a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/core/startup/startup.service.ts" target="_blank" rel="noopener">startup.service.ts</a>\uFF09\u4ECE\u8FDC\u7A0B\u83B7\u53D6\u5230\u5E94\u7528\u3001\u7528\u6237\u6570\u636E\u540E\uFF0C\u8C03\u7528 <code>setApp()</code>\u3001<code>setUser()</code> \u65B9\u6CD5\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="settingsservice"><a class="lake-link"><i data-anchor="settingsservice"></i></a>SettingsService<label class="api-type-label service">service</label></h3><table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u7C7B\u578B</th>
<th>\u8FD4\u56DE\u503C</th>
<th>\u63CF\u8FF0</th>
</tr>
</thead>
<tbody><tr>
<td><code>layout</code></td>
<td><code>property</code></td>
<td><code>Layout</code></td>
<td>\u5E03\u5C40\u4FE1\u606F</td>
</tr>
<tr>
<td><code>app</code></td>
<td><code>property</code></td>
<td><code>App</code></td>
<td>\u9879\u76EE\u4FE1\u606F</td>
</tr>
<tr>
<td><code>user</code></td>
<td><code>property</code></td>
<td><code>User</code></td>
<td>\u7528\u6237\u4FE1\u606F</td>
</tr>
<tr>
<td><code>notify</code></td>
<td><code>property</code></td>
<td><code>Observable&lt;SettingsNotify&gt;</code></td>
<td>\u5F53\u5E03\u5C40\u3001\u9879\u76EE\u3001\u7528\u6237\u4FE1\u606F\u53D8\u66F4\u65F6\u901A\u77E5</td>
</tr>
<tr>
<td><code>setLayout(name: string, value: any)</code></td>
<td><code>method</code></td>
<td><code>boolean</code></td>
<td>\u8BBE\u7F6E\u5E03\u5C40\u5C5E\u6027\u503C</td>
</tr>
<tr>
<td><code>setApp(value: App)</code></td>
<td><code>method</code></td>
<td><code>boolean</code></td>
<td>\u8BBE\u7F6E\u9879\u76EE\u4FE1\u606F</td>
</tr>
<tr>
<td><code>setUser(value: User)</code></td>
<td><code>method</code></td>
<td><code>boolean</code></td>
<td>\u8BBE\u7F6E\u7528\u6237\u4FE1\u606F</td>
</tr>
</tbody></table>
<h3 id="app"><a class="lake-link"><i data-anchor="app"></i></a>App</h3><table>
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
<td>\u5E94\u7528\u540D\u79F0</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[description]</code></td>
<td>\u5E94\u7528\u63CF\u8FF0</td>
<td><code>string</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="user"><a class="lake-link"><i data-anchor="user"></i></a>User</h3><table>
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
<td>\u5F53\u524D\u7528\u6237\u540D\u79F0</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[avatar]</code></td>
<td>\u5F53\u524D\u7528\u6237\u5934\u50CF</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[email]</code></td>
<td>\u5F53\u524D\u7528\u6237\u90AE\u7BB1</td>
<td><code>string</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="layout"><a class="lake-link"><i data-anchor="layout"></i></a>Layout</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[collapsed]</code></td>
<td>\u662F\u5426\u6298\u53E0\u83DC\u5355</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[lang]</code></td>
<td>\u5F53\u524D\u8BED\u8A00</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[colorWeak]</code></td>
<td>\u8272\u5F31\u6A21\u5F0F</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
</tbody></table>
<h2 id="\u5E38\u89C1\u95EE\u9898"><a class="lake-link"><i data-anchor="\u5E38\u89C1\u95EE\u9898"></i></a>\u5E38\u89C1\u95EE\u9898</h2><p><strong>\u5982\u4F55\u66F4\u6539\u672C\u5730\u5B58\u50A8\u952E\u540D\uFF1F</strong></p>
<p>\u5141\u8BB8\u901A\u8FC7 <code>global-config.module.ts</code> \u5168\u5C40\u914D\u7F6E\u6587\u4EF6\uFF0C\b\u589E\u52A0 <code>ALAIN_SETTING_KEYS</code> \u7684\u914D\u7F6E\uFF0C\u4F8B\u5982\uFF1A</p>
<pre><code class="language-diff"> const alainProvides = [
  provideAlainConfig(alainConfig),
+ &#123;
+   provide: ALAIN_SETTING_KEYS,
+   useValue: &#123;
+     layout: &#39;new-layout&#39;,
+     user: &#39;new-user&#39;,
+     app: &#39;new-app&#39;,
+   &#125;,
+ &#125;,
];
</code></pre>
`,toc:[{id:`api`,title:`API`,children:[{id:`settingsservice`,title:`SettingsService`},{id:`app`,title:`App`},{id:`user`,title:`User`},{id:`layout`,title:`Layout`}]},{id:`常见问题`,title:`常见问题`}],raw:"---\norder: 1\ntitle: SettingsService\nsubtitle: 项目配置项服务\ntype: Service\n---\n\n项目配置项，包含应用[App](https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/settings/interface.ts#L1)、布局[Layout](https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/settings/interface.ts#L15)、用户信息[User](https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/settings/interface.ts#L8)三种数据类型，并且存储持久化在 `localStorage`（参考[#1737](https://github.com/ng-alain/ng-alain/issues/1737)来切换成 `sessionStorage`）。\n\n**建议：** 在 Angular 启动服务（[startup.service.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/startup/startup.service.ts)）从远程获取到应用、用户数据后，调用 `setApp()`、`setUser()` 方法。\n\n## API\n\n### SettingsService\n\n| 名称 | 类型 | 返回值 | 描述 |\n|----|----|-----|----|\n| `layout` | `property` | `Layout` | 布局信息 |\n| `app` | `property` | `App` | 项目信息 |\n| `user` | `property` | `User` | 用户信息 |\n| `notify` | `property` | `Observable<SettingsNotify>` | 当布局、项目、用户信息变更时通知 |\n| `setLayout(name: string, value: any)` | `method` | `boolean` | 设置布局属性值 |\n| `setApp(value: App)` | `method` | `boolean` | 设置项目信息 |\n| `setUser(value: User)` | `method` | `boolean` | 设置用户信息 |\n\n### App\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[name]` | 应用名称 | `string` | - |\n| `[description]` | 应用描述 | `string` | - |\n\n### User\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[name]` | 当前用户名称 | `string` | - |\n| `[avatar]` | 当前用户头像 | `string` | - |\n| `[email]` | 当前用户邮箱 | `string` | - |\n\n### Layout\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----|----|----|-----|\n| `[collapsed]` | 是否折叠菜单 | `boolean` | - |\n| `[lang]` | 当前语言 | `string` | - |\n| `[colorWeak]` | 色弱模式 | `boolean` | `false` |\n\n## 常见问题\n\n**如何更改本地存储键名？**\n\n允许通过 `global-config.module.ts` 全局配置文件，\b增加 `ALAIN_SETTING_KEYS` 的配置，例如：\n\n```diff\n const alainProvides = [\n  provideAlainConfig(alainConfig),\n+ {\n+   provide: ALAIN_SETTING_KEYS,\n+   useValue: {\n+     layout: 'new-layout',\n+     user: 'new-user',\n+     app: 'new-app',\n+   },\n+ },\n];\n```"}}};codes=[];static ɵfac=function(e){return new(e||n)};static ɵcmp=_e({type:n,selectors:[[`theme-settings`]],hostAttrs:[1,`d-block`],decls:1,vars:2,consts:[[3,`codes`,`item`]],template:function(e,t){e&1&&lt(0,`app-docs`,0),e&2&&re(`codes`,t.codes)(`item`,t.item)},dependencies:[rt],encapsulation:2})};var ee=class n{item={name:`title`,langs:[`en-US`,`zh-CN`],content:{"en-US":{meta:{order:4,title:`TitleService`,subtitle:`Title Service`,description:`Used to set page title, generally listen for route changed and refresh title, for example: app.ts; The default data from MenuService.Suggest: Set the `,group:`Service`,path:`packages/theme/src/services/title/index.en-US.md`,url:`/theme/title/en`},text:`<p>Used to set page title, generally listen for route changed and refresh title, for example: <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/app.ts#L54" target="_blank" rel="noopener">app.ts</a>; The default data from <code>MenuService</code>.</p>
<p><strong>Suggest:</strong> Set the <code>prefix</code> or <code>suffix</code> value via Angular startup service (<a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/core/startup/startup.service.ts" target="_blank" rel="noopener">startup.service.ts</a>).</p>
<h2 id="orders"><a class="lake-link"><i data-anchor="orders"></i></a>Orders</h2><p>Get the <code>title</code> value according to the following order:</p>
<ol>
<li>Routing configuration \`&#123; data: &#123; title: &#39;page name&#39;, titleI18n: &#39;page-name&#39; &#125; &#125;</li>
<li>Parse the menu data based on the current URL</li>
<li>Get <code>h1</code> content in page <code>alain-default__content-title</code> or <code>page-header__title</code></li>
<li>Default title</li>
</ol>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>default</code></td>
<td><code>property</code></td>
<td>Default title of document title</td>
</tr>
<tr>
<td><code>selector</code></td>
<td><code>property</code></td>
<td>Set the default CSS selector string</td>
</tr>
<tr>
<td><code>separator</code></td>
<td><code>property</code></td>
<td>Separator</td>
</tr>
<tr>
<td><code>prefix</code></td>
<td><code>property</code></td>
<td>Prefix of document title</td>
</tr>
<tr>
<td><code>suffix</code></td>
<td><code>property</code></td>
<td>Suffix of document title</td>
</tr>
<tr>
<td><code>reverse</code></td>
<td><code>property</code></td>
<td>Whether to reverse</td>
</tr>
<tr>
<td>\`setTitle(title?: string</td>
<td>string[])\`</td>
<td><code>method</code></td>
</tr>
<tr>
<td><code>setTitleByI18n(key: string, params?: Object)</code></td>
<td><code>method</code></td>
<td>Set i18n key of the document title</td>
</tr>
</tbody></table>
`,toc:[{id:`orders`,title:`Orders`},{id:`api`,title:`API`}],raw:"---\norder: 4\ntitle: TitleService\nsubtitle: Title Service\ntype: Service\n---\n\nUsed to set page title, generally listen for route changed and refresh title, for example: [app.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/app.ts#L54); The default data from `MenuService`.\n\n**Suggest:** Set the `prefix` or `suffix` value via Angular startup service ([startup.service.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/startup/startup.service.ts)).\n\n## Orders\n\nGet the `title` value according to the following order:\n\n1. Routing configuration `{ data: { title: 'page name', titleI18n: 'page-name' } }\n2. Parse the menu data based on the current URL\n3. Get `h1` content in page `alain-default__content-title` or `page-header__title`\n4. Default title\n\n## API\n\n| Name                                           | Type       | Description                     |\n| ---------------------------------------------- | ---------- | ------------------------------- |\n| `default`                                      | `property` | Default title of document title |\n| `selector`                                      | `property` | Set the default CSS selector string |\n| `separator`                                    | `property` | Separator                       |\n| `prefix`                                       | `property` | Prefix of document title        |\n| `suffix`                                       | `property` | Suffix of document title        |\n| `reverse`                                      | `property` | Whether to reverse              |\n| `setTitle(title?: string | string[])`          | `method`   | Set the document title, will be delay `25ms`, pls refer to [#1261](https://github.com/ng-alain/ng-alain/issues/1261)              |\n| `setTitleByI18n(key: string, params?: Object)` | `method`   | Set i18n key of the document title |"},"zh-CN":{meta:{order:4,title:`TitleService`,subtitle:`页面标题服务`,description:`用于设置页面标题，一般监听路由变化并重新刷新标题，例如：app.ts；同时标题的默认数据来源于 MenuService。建议： 在 Angular 启动服务（startup.service.ts）过程中设置 prefix 或 suffix 值来调整统一的标题前后缀。根据以下顺序获取 title 值：`,group:`Service`,path:`packages/theme/src/services/title/index.zh-CN.md`,url:`/theme/title/zh`},text:`<p>\u7528\u4E8E\u8BBE\u7F6E\u9875\u9762\u6807\u9898\uFF0C\u4E00\u822C\u76D1\u542C\u8DEF\u7531\u53D8\u5316\u5E76\u91CD\u65B0\u5237\u65B0\u6807\u9898\uFF0C\u4F8B\u5982\uFF1A<a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/app.ts#L54" target="_blank" rel="noopener">app.ts</a>\uFF1B\u540C\u65F6\u6807\u9898\u7684\u9ED8\u8BA4\u6570\u636E\u6765\u6E90\u4E8E <code>MenuService</code>\u3002</p>
<p><strong>\u5EFA\u8BAE\uFF1A</strong> \u5728 Angular \u542F\u52A8\u670D\u52A1\uFF08<a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/core/startup/startup.service.ts" target="_blank" rel="noopener">startup.service.ts</a>\uFF09\u8FC7\u7A0B\u4E2D\u8BBE\u7F6E <code>prefix</code> \u6216 <code>suffix</code> \u503C\u6765\u8C03\u6574\u7EDF\u4E00\u7684\u6807\u9898\u524D\u540E\u7F00\u3002</p>
<h2 id="\u83B7\u53D6\u987A\u5E8F"><a class="lake-link"><i data-anchor="\u83B7\u53D6\u987A\u5E8F"></i></a>\u83B7\u53D6\u987A\u5E8F</h2><p>\u6839\u636E\u4EE5\u4E0B\u987A\u5E8F\u83B7\u53D6 <code>title</code> \u503C\uFF1A</p>
<ol>
<li>\u8DEF\u7531\u914D\u7F6E <code>&#123; data: &#123; title: &#39;page name&#39;, titleI18n: &#39;page-name&#39; &#125; as RouteTitle &#125;</code></li>
<li>\u6839\u636E\u5F53\u524D URL \u89E3\u6790\u83DC\u5355\u6570\u636E</li>
<li>\u9875\u9762 <code>alain-default__content-title</code> \u6216 <code>page-header__title</code> \u4E2D\u83B7\u53D6 <code>h1</code> \u5185\u5BB9</li>
<li>\u9ED8\u8BA4\u6807\u9898\u540D</li>
</ol>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u7C7B\u578B</th>
<th>\u63CF\u8FF0</th>
</tr>
</thead>
<tbody><tr>
<td><code>default</code></td>
<td><code>property</code></td>
<td>\u8BBE\u7F6E\u9ED8\u8BA4\u6807\u9898\u540D</td>
</tr>
<tr>
<td><code>selector</code></td>
<td><code>property</code></td>
<td>\u8BBE\u7F6E\u9ED8\u8BA4CSS\u9009\u62E9\u5668\u5B57\u7B26\u4E32</td>
</tr>
<tr>
<td><code>separator</code></td>
<td><code>property</code></td>
<td>\u8BBE\u7F6E\u5206\u9694\u7B26</td>
</tr>
<tr>
<td><code>prefix</code></td>
<td><code>property</code></td>
<td>\u8BBE\u7F6E\u524D\u7F00</td>
</tr>
<tr>
<td><code>suffix</code></td>
<td><code>property</code></td>
<td>\u8BBE\u7F6E\u540E\u7F00</td>
</tr>
<tr>
<td><code>reverse</code></td>
<td><code>property</code></td>
<td>\u8BBE\u7F6E\u662F\u5426\u53CD\u8F6C</td>
</tr>
<tr>
<td>\`setTitle(title?: string</td>
<td>string[])\`</td>
<td><code>method</code></td>
</tr>
<tr>
<td><code>setTitleByI18n(key: string, params?: Object)</code></td>
<td><code>method</code></td>
<td>\u8BBE\u7F6E\u56FD\u9645\u5316\u6807\u9898</td>
</tr>
</tbody></table>
`,toc:[{id:`获取顺序`,title:`获取顺序`},{id:`api`,title:`API`}],raw:"---\norder: 4\ntitle: TitleService\nsubtitle: 页面标题服务\ntype: Service\n---\n\n用于设置页面标题，一般监听路由变化并重新刷新标题，例如：[app.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/app.ts#L54)；同时标题的默认数据来源于 `MenuService`。\n\n**建议：** 在 Angular 启动服务（[startup.service.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/startup/startup.service.ts)）过程中设置 `prefix` 或 `suffix` 值来调整统一的标题前后缀。\n\n## 获取顺序\n\n根据以下顺序获取 `title` 值：\n\n1. 路由配置 `{ data: { title: 'page name', titleI18n: 'page-name' } as RouteTitle }`\n2. 根据当前 URL 解析菜单数据\n3. 页面 `alain-default__content-title` 或 `page-header__title` 中获取 `h1` 内容\n4. 默认标题名\n\n## API\n\n| 名称                                           | 类型       | 描述           |\n| ---------------------------------------------- | ---------- | -------------- |\n| `default`                                      | `property` | 设置默认标题名 |\n| `selector`                                      | `property` | 设置默认CSS选择器字符串 |\n| `separator`                                    | `property` | 设置分隔符     |\n| `prefix`                                       | `property` | 设置前缀       |\n| `suffix`                                       | `property` | 设置后缀       |\n| `reverse`                                      | `property` | 设置是否反转   |\n| `setTitle(title?: string | string[])`          | `method`   | 设置标题，受限于 [#1261](https://github.com/ng-alain/ng-alain/issues/1261) 会有 `25ms` 的延迟  |\n| `setTitleByI18n(key: string, params?: Object)` | `method`   | 设置国际化标题 |"}}};codes=[];static ɵfac=function(e){return new(e||n)};static ɵcmp=_e({type:n,selectors:[[`theme-title`]],hostAttrs:[1,`d-block`],decls:1,vars:2,consts:[[3,`codes`,`item`]],template:function(e,t){e&1&&lt(0,`app-docs`,0),e&2&&re(`codes`,t.codes)(`item`,t.item)},dependencies:[rt],encapsulation:2})};var Xt=[{path:``,component:ee$1,children:[{path:`component-styles`,redirectTo:`component-styles/zh`,pathMatch:`full`},{path:`component-styles/:lang`,component:M},{path:`customize-theme`,redirectTo:`customize-theme/zh`,pathMatch:`full`},{path:`customize-theme/:lang`,component:_},{path:`getting-started`,redirectTo:`getting-started/zh`,pathMatch:`full`},{path:`getting-started/:lang`,component:A},{path:`global`,redirectTo:`global/zh`,pathMatch:`full`},{path:`global/:lang`,component:N},{path:`icon`,redirectTo:`icon/zh`,pathMatch:`full`},{path:`icon/:lang`,component:O},{path:`locale`,redirectTo:`locale/zh`,pathMatch:`full`},{path:`locale/:lang`,component:L},{path:`performance`,redirectTo:`performance/zh`,pathMatch:`full`},{path:`performance/:lang`,component:R},{path:`tools`,redirectTo:`tools/zh`,pathMatch:`full`},{path:`tools/:lang`,component:q},{path:`layout-default`,redirectTo:`layout-default/zh`,pathMatch:`full`},{path:`layout-default/:lang`,component:I},{path:`layout-blank`,redirectTo:`layout-blank/zh`,pathMatch:`full`},{path:`layout-blank/:lang`,component:P},{path:`theme-btn`,redirectTo:`theme-btn/zh`,pathMatch:`full`},{path:`theme-btn/:lang`,component:U},{path:`index`,redirectTo:`index/zh`,pathMatch:`full`},{path:`index/:lang`,component:E},{path:`date`,redirectTo:`date/zh`,pathMatch:`full`},{path:`date/:lang`,component:H},{path:`keys`,redirectTo:`keys/zh`,pathMatch:`full`},{path:`keys/:lang`,component:W},{path:`safe`,redirectTo:`safe/zh`,pathMatch:`full`},{path:`safe/:lang`,component:B},{path:`yn`,redirectTo:`yn/zh`,pathMatch:`full`},{path:`yn/:lang`,component:j},{path:`drawer`,redirectTo:`drawer/zh`,pathMatch:`full`},{path:`drawer/:lang`,component:F},{path:`http`,redirectTo:`http/zh`,pathMatch:`full`},{path:`http/:lang`,component:V},{path:`menu`,redirectTo:`menu/zh`,pathMatch:`full`},{path:`menu/:lang`,component:Y},{path:`modal`,redirectTo:`modal/zh`,pathMatch:`full`},{path:`modal/:lang`,component:Q},{path:`responsive`,redirectTo:`responsive/zh`,pathMatch:`full`},{path:`responsive/:lang`,component:Z},{path:`rtl`,redirectTo:`rtl/zh`,pathMatch:`full`},{path:`rtl/:lang`,component:J},{path:`settings`,redirectTo:`settings/zh`,pathMatch:`full`},{path:`settings/:lang`,component:X},{path:`title`,redirectTo:`title/zh`,pathMatch:`full`},{path:`title/:lang`,component:ee}]}];export{Xt as routes};