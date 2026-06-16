import{a as nn,b as on,c as _t}from"./chunk-QQXNGKUP.js";import{e as h,g as tn,i as g}from"./chunk-JSOIDIFP.js";import"./chunk-FMYLTAVH.js";import"./chunk-7L62FIHL.js";import"./chunk-VBZW5PQB.js";import"./chunk-DUECRJIM.js";import"./chunk-XYQM4PJL.js";import"./chunk-K2O7YPTZ.js";import{a as C}from"./chunk-PXLNGNFL.js";import"./chunk-L5G5NHRV.js";import{a as S}from"./chunk-PJYRP6KM.js";import{a as dn}from"./chunk-C3MNSEWK.js";import"./chunk-XU2NL7K2.js";import"./chunk-J335YUGO.js";import"./chunk-62ZNMC2L.js";import{d as w,e as F,f as en}from"./chunk-KQR6CVZA.js";import{$ as y,D as Zt,E as Xt,T as Z,Y as X,c as $t,f as Yt,l as Qt,u as Kt}from"./chunk-7O6624BH.js";import{Ag as Q,Cb as W,D as Et,Eb as l,Gb as E,J as At,Kb as _,Lb as N,Ma as c,Mb as T,Mg as M,N as x,Nd as Lt,Ng as P,Od as Bt,Oh as K,Pg as I,Qb as G,Qg as q,Rd as Ht,Sb as Ut,U as Ot,Vb as D,W as Wt,Wa as r,Wb as jt,Xb as Vt,ab as R,dh as $,fa as u,gb as v,k as It,ka as A,la as O,lb as V,nb as L,qa as Rt,sb as d,t as z,tb as a,tc as B,ub as i,vb as m,w as qt,x as Pt,xh as Jt,zg as Y,zh as Gt}from"./chunk-DBBCITIJ.js";var ee=class o{modal=u(Jt);i;schema={properties:{name:{title:"Name",type:"string"}},required:["name"],ui:{spanLabelFixed:150,grid:{span:24}}};save(n){this.modal.destroy(n)}close(){this.modal.destroy()}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["app-demo-dialog-modal"]],decls:10,vars:4,consts:[["sf",""],[1,"modal-header"],[1,"modal-title"],["mode","edit","button","none",3,"schema","formData"],[1,"modal-footer"],["nz-button","","type","button",3,"click"],["nz-button","","type","submit",3,"click","nzType","disabled"]],template:function(e,t){if(e&1){let s=W();a(0,"div",1)(1,"div",2),D(2,"Sf demo"),i()(),a(3,"sf",3,0)(5,"div",4)(6,"button",5),l("click",function(){return t.close()}),D(7,"\u5173\u95ED"),i(),a(8,"button",6),l("click",function(){A(s);let J=G(4);return O(t.save(J.value))}),D(9," \u4FDD\u5B58 "),i()()()}if(e&2){let s=G(4);c(3),d("schema",t.schema)("formData",t.i),c(5),d("nzType","primary")("disabled",!s.valid)}},dependencies:[q,I,M,P,g,h],encapsulation:2})};var te=class o{item={name:"validator",langs:["zh-CN","en-US"],content:{"zh-CN":{meta:{title:"\u5728\u7EBF\u6821\u9A8C\u5668",group:"Examples",redirect:"/form-pages/validator/zh"},text:"",toc:[]},"en-US":{meta:{title:"Online Validator",group:"Examples",redirect:"/form-pages/validator/en"},text:"",toc:[]}}};codes=[];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["validator"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&m(0,"app-docs",0),e&2&&d("codes",t.codes)("item",t.item)},dependencies:[S],encapsulation:2})};var ne=class o{item={name:"customize",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:4,title:"Customize Widgets",description:"@delon/form try our best to meet the needs of different environments, in addition to the built-in basic widgets (Some require manual registration), yo...",group:"Documents",path:"packages/form/docs/customize.en-US.md",url:"/form/customize/en"},text:`<h2 id="foreword"><a class="lake-link"><i data-anchor="foreword"></i></a>Foreword</h2><p><code>&#64;delon/form</code> try our best to meet the needs of different environments, in addition to the built-in basic widgets (Some require manual registration), you can further expand the requirements in two ways:</p>
<h2 id="custom_widget_in_sf"><a class="lake-link"><i data-anchor="custom_widget_in_sf"></i></a>Custom widget in sf</h2><p>Please refer to <a href="/form/custom">Custom Widget</a>.</p>
<h2 id="making_widgets"><a class="lake-link"><i data-anchor="making_widgets"></i></a>Making widgets</h2><p>Making a set of widgets for project can lead to faster development work.</p>
<h3 id="how_to_making_widget"><a class="lake-link"><i data-anchor="how_to_making_widget"></i></a>How to making widget</h3><p><strong>Create widgets</strong></p>
<p>A widget is a component. You only need to inherit <code>ControlWidget</code> to create a widget. For example:</p>
<pre><code class="language-ts">import &#123; ChangeDetectionStrategy, Component, OnInit &#125; from &#39;&#64;angular/core&#39;;
import &#123; ControlWidget, DelonFormModule, SFWidgetProvideConfig &#125; from &#39;&#64;delon/form&#39;;

export function withTestWidget(): SFWidgetProvideConfig &#123;
  return &#123; KEY: &#39;test&#39;, type: TestWidget &#125;;
&#125;

&#64;Component(&#123;
  selector: &#39;sf-tinymce&#39;,
  template: \`
  &lt;sf-item-wrap [id]=&quot;id&quot; [schema]=&quot;schema&quot; [ui]=&quot;ui&quot; [showError]=&quot;showError&quot; [error]=&quot;error&quot; [showTitle]=&quot;schema.title&quot;&gt;
    &lt;!-- Start area --&gt;
    &lt;tinymce
      [ngModel]=&quot;value&quot;
      (ngModelChange)=&quot;change($event)&quot;
      [config]=&quot;config&quot;
      [loading]=&quot;loading&quot;&gt;
    &lt;/tinymce&gt;
    &lt;!-- End area --&gt;
  &lt;/sf-item-wrap&gt;\`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DelonFormModule]
&#125;)
class TestWidget extends ControlWidget implements OnInit &#123;
  /* KEY value for registering widgets */
  static readonly KEY = &#39;test&#39;;

  // It is recommended to use \`ngOnInit\` to obtain the parameters required by the component.
  config: any;
  loadingTip: string;

  ngOnInit(): void &#123;
    this.loadingTip = this.ui.loadingTip ?? &#39;Loading\u2026\u2026&#39;;
    this.config = this.ui.config ?? &#123;&#125;;
  &#125;

  // reset can better solve the problem of new data required during the form reset process
  reset(value: string) &#123;

  &#125;

  change(value: string) &#123;
    if (this.ui.change) this.ui.change(value);
    this.setValue(value);
  &#125;
&#125;
</code></pre>
<p><strong>sf-item-wrap</strong></p>
<p>Wrap your custom content in the template with the <code>sf-item-wrap</code> component, which encapsulates the form base elements internally.</p>
<p><strong>Change detection</strong></p>
<p>The widget is manually trigger changed detection during the rendering process. In most cases, the <code>ControlWidget</code> is well manage of changing detection. but the asynchronous operation may be encountered, you can call the <code>detectChanges()</code> method to trigger a change detection of the widget.</p>
<h3 id="register"><a class="lake-link"><i data-anchor="register"></i></a>Register</h3><p>Recommended to define a widget called <code>withXWidth</code> and return <code>SFWidgetProvideConfig</code> type, for example:</p>
<pre><code class="language-ts">export function withTestWidget(): SFWidgetProvideConfig &#123;
  return &#123; KEY: &#39;test&#39;, type: TestWidget &#125;;
&#125;
</code></pre>
<p>Finally, register via <code>provideSFConfig</code>:</p>
<pre><code class="language-ts">provideSFConfig(&#123; widgets: [ withTestWidget() ] &#125;)
</code></pre>
<p>For more friendly maintenance, recommended to define a project-specific collection in the <code>shared</code> directory. If you are interested, please refer to <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/" target="_blank" rel="noopener">NG-ALAIN implementation</a> or refer to <a href="https://github.com/ng-alain/delon/tree/master/packages/form/widgets/autocomplete" target="_blank" rel="noopener">&#64;delon/form/widgets/autocomplete</a>.</p>
<h3 id="usage"><a class="lake-link"><i data-anchor="usage"></i></a>Usage</h3><p>Just like other widgets, just specify the <code>widget</code> value, for example:</p>
<pre><code class="language-json">&quot;test&quot;: &#123;
  &quot;type&quot;: &quot;string&quot;,
  &quot;ui&quot;: &#123;
    &quot;widget&quot;: &quot;test&quot;,
    &quot;data&quot;: &quot;widget parameters&quot;
  &#125;
&#125;
</code></pre>
`,api:"",toc:[{id:"foreword",title:"Foreword"},{id:"custom_widget_in_sf",title:"Custom widget in sf"},{id:"making_widgets",title:"Making widgets",children:[{id:"how_to_making_widget",title:"How to making widget"},{id:"register",title:"Register"},{id:"usage",title:"Usage"}]}],raw:`---
order: 4
title: Customize Widgets
type: Documents
---

## Foreword

\`@delon/form\` try our best to meet the needs of different environments, in addition to the built-in basic widgets (Some require manual registration), you can further expand the requirements in two ways:

## Custom widget in sf

Please refer to [Custom Widget](/form/custom).

## Making widgets

Making a set of widgets for project can lead to faster development work.

### How to making widget

**Create widgets**

A widget is a component. You only need to inherit \`ControlWidget\` to create a widget. For example:

\`\`\`ts
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ControlWidget, DelonFormModule, SFWidgetProvideConfig } from '@delon/form';

export function withTestWidget(): SFWidgetProvideConfig {
  return { KEY: 'test', type: TestWidget };
}

@Component({
  selector: 'sf-tinymce',
  template: \`
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    <!-- Start area -->
    <tinymce
      [ngModel]="value"
      (ngModelChange)="change($event)"
      [config]="config"
      [loading]="loading">
    </tinymce>
    <!-- End area -->
  </sf-item-wrap>\`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DelonFormModule]
})
class TestWidget extends ControlWidget implements OnInit {
  /* KEY value for registering widgets */
  static readonly KEY = 'test';

  // It is recommended to use \`ngOnInit\` to obtain the parameters required by the component.
  config: any;
  loadingTip: string;

  ngOnInit(): void {
    this.loadingTip = this.ui.loadingTip ?? 'Loading\u2026\u2026';
    this.config = this.ui.config ?? {};
  }

  // reset can better solve the problem of new data required during the form reset process
  reset(value: string) {

  }

  change(value: string) {
    if (this.ui.change) this.ui.change(value);
    this.setValue(value);
  }
}
\`\`\`

**sf-item-wrap**

Wrap your custom content in the template with the \`sf-item-wrap\` component, which encapsulates the form base elements internally.

**Change detection**

The widget is manually trigger changed detection during the rendering process. In most cases, the \`ControlWidget\` is well manage of changing detection. but the asynchronous operation may be encountered, you can call the \`detectChanges()\` method to trigger a change detection of the widget.

### Register

Recommended to define a widget called \`withXWidth\` and return \`SFWidgetProvideConfig\` type, for example:

\`\`\`ts
export function withTestWidget(): SFWidgetProvideConfig {
  return { KEY: 'test', type: TestWidget };
}
\`\`\`

Finally, register via \`provideSFConfig\`:

\`\`\`ts
provideSFConfig({ widgets: [ withTestWidget() ] })
\`\`\`

For more friendly maintenance, recommended to define a project-specific collection in the \`shared\` directory. If you are interested, please refer to [NG-ALAIN implementation](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/) or refer to [@delon/form/widgets/autocomplete](https://github.com/ng-alain/delon/tree/master/packages/form/widgets/autocomplete).

### Usage

Just like other widgets, just specify the \`widget\` value, for example:

\`\`\`json
"test": {
  "type": "string",
  "ui": {
    "widget": "test",
    "data": "widget parameters"
  }
}
\`\`\``},"zh-CN":{meta:{order:4,title:"\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6",description:"@delon/form \u5C3D\u53EF\u80FD\u6EE1\u8DB3\u4E0D\u540C\u9700\u6C42\uFF0C\u9664\u73B0\u6709\u5185\u7F6E\u7684\u5341\u51E0\u79CD\u57FA\u7840\u5C0F\u90E8\u4EF6(\u90E8\u5206\u9700\u8981\u624B\u52A8\u6CE8\u518C)\u5916\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u4E24\u79CD\u65B9\u5F0F\u8FDB\u4E00\u6B65\u6269\u5C55\u9700\u6C42\uFF1A\u7EC6\u8282\u8BF7\u53C2\u8003 \u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6\u3002\u5236\u4F5C\u4E00\u5957\u9879\u76EE\u9700\u6C42\u7684\u5C0F\u90E8\u4EF6\uFF0C\u53EF\u4EE5\u66F4\u5FEB\u901F\u7684\u5F00\u53D1\u5DE5\u4F5C\u3002\u81EA\u5DF1\u521B\u5EFA\u5C0F\u90E8\u4EF6\u5C0F\u90E8\u4EF6\u5C31\u662F\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u4F60\u53EA\u9700\u8981\u7EE7\u627F ControlWidget \u5C31\u76F8\u5F53\u4E8E\u6784\u5EFA\u4E00\u4E2A\u5C0F...",group:"Documents",path:"packages/form/docs/customize.zh-CN.md",url:"/form/customize/zh"},text:`<h2 id="\u5199\u5728\u524D\u9762"><a class="lake-link"><i data-anchor="\u5199\u5728\u524D\u9762"></i></a>\u5199\u5728\u524D\u9762</h2><p><code>&#64;delon/form</code> \u5C3D\u53EF\u80FD\u6EE1\u8DB3\u4E0D\u540C\u9700\u6C42\uFF0C\u9664\u73B0\u6709\u5185\u7F6E\u7684\u5341\u51E0\u79CD\u57FA\u7840\u5C0F\u90E8\u4EF6(\u90E8\u5206\u9700\u8981\u624B\u52A8\u6CE8\u518C)\u5916\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u4E24\u79CD\u65B9\u5F0F\u8FDB\u4E00\u6B65\u6269\u5C55\u9700\u6C42\uFF1A</p>
<h2 id="\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6"><a class="lake-link"><i data-anchor="\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6"></i></a>\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6</h2><p>\u7EC6\u8282\u8BF7\u53C2\u8003 <a href="/form/custom">\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6</a>\u3002</p>
<h2 id="\u5236\u4F5C\u5C0F\u90E8\u4EF6"><a class="lake-link"><i data-anchor="\u5236\u4F5C\u5C0F\u90E8\u4EF6"></i></a>\u5236\u4F5C\u5C0F\u90E8\u4EF6</h2><p>\u5236\u4F5C\u4E00\u5957\u9879\u76EE\u9700\u6C42\u7684\u5C0F\u90E8\u4EF6\uFF0C\u53EF\u4EE5\u66F4\u5FEB\u901F\u7684\u5F00\u53D1\u5DE5\u4F5C\u3002</p>
<h3 id="\u7F16\u5199\u5C0F\u90E8\u4EF6"><a class="lake-link"><i data-anchor="\u7F16\u5199\u5C0F\u90E8\u4EF6"></i></a>\u7F16\u5199\u5C0F\u90E8\u4EF6</h3><p><strong>\u81EA\u5DF1\u521B\u5EFA\u5C0F\u90E8\u4EF6</strong></p>
<p>\u5C0F\u90E8\u4EF6\u5C31\u662F\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u4F60\u53EA\u9700\u8981\u7EE7\u627F <code>ControlWidget</code> \u5C31\u76F8\u5F53\u4E8E\u6784\u5EFA\u4E00\u4E2A\u5C0F\u90E8\u4EF6\uFF0C\u4F8B\u5982\uFF1A</p>
<pre><code class="language-ts">import &#123; ChangeDetectionStrategy, Component, OnInit &#125; from &#39;&#64;angular/core&#39;;
import &#123; ControlWidget, DelonFormModule, SFWidgetProvideConfig &#125; from &#39;&#64;delon/form&#39;;

export function withTestWidget(): SFWidgetProvideConfig &#123;
  return &#123; KEY: &#39;test&#39;, type: TestWidget &#125;;
&#125;

&#64;Component(&#123;
  selector: &#39;sf-tinymce&#39;,
  template: \`
  &lt;sf-item-wrap [id]=&quot;id&quot; [schema]=&quot;schema&quot; [ui]=&quot;ui&quot; [showError]=&quot;showError&quot; [error]=&quot;error&quot; [showTitle]=&quot;schema.title&quot;&gt;
    &lt;!-- \u5F00\u59CB\u81EA\u5B9A\u4E49\u63A7\u4EF6\u533A\u57DF --&gt;
    &lt;tinymce
      [ngModel]=&quot;value&quot;
      (ngModelChange)=&quot;change($event)&quot;
      [config]=&quot;config&quot;
      [loading]=&quot;loading&quot;&gt;
    &lt;/tinymce&gt;
    &lt;!-- \u7ED3\u675F\u81EA\u5B9A\u4E49\u63A7\u4EF6\u533A\u57DF --&gt;
  &lt;/sf-item-wrap&gt;\`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DelonFormModule]
&#125;)
class TestWidget extends ControlWidget implements OnInit &#123;
  /* \u7528\u4E8E\u6CE8\u518C\u5C0F\u90E8\u4EF6 KEY \u503C */
  static readonly KEY = &#39;test&#39;;

  // \u7EC4\u4EF6\u6240\u9700\u8981\u7684\u53C2\u6570\uFF0C\u5EFA\u8BAE\u4F7F\u7528 \`ngOnInit\` \u83B7\u53D6
  config: any;
  loadingTip: string;

  ngOnInit(): void &#123;
    this.loadingTip = this.ui.loadingTip ?? &#39;\u52A0\u8F7D\u4E2D\u2026\u2026&#39;;
    this.config = this.ui.config ?? &#123;&#125;;
  &#125;

  // reset \u53EF\u4EE5\u66F4\u597D\u7684\u89E3\u51B3\u8868\u5355\u91CD\u7F6E\u8FC7\u7A0B\u4E2D\u6240\u9700\u8981\u7684\u65B0\u6570\u636E\u95EE\u9898
  reset(value: string) &#123;

  &#125;

  change(value: string) &#123;
    if (this.ui.change) this.ui.change(value);
    this.setValue(value);
  &#125;
&#125;
</code></pre>
<p><strong>sf-item-wrap</strong></p>
<p>\u5728\u6A21\u677F\u4E2D\u552F\u4E00\u662F\u5229\u7528 <code>sf-item-wrap</code> \u5305\u88F9\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u5B83\u5185\u90E8\u5C01\u88C5\u8868\u5355\u57FA\u7840\u5143\u7D20\u3002</p>
<p><strong>\u53D8\u66F4\u68C0\u6D4B</strong></p>
<p>\u5C0F\u90E8\u4EF6\u5728\u6E32\u67D3\u8FC7\u7A0B\u662F\u624B\u52A8\u53D8\u66F4\u68C0\u6D4B\uFF0C\u5927\u90E8\u5206\u60C5\u51B5\u4E0B <code>ControlWidget</code> \u5DF2\u7ECF\u5F88\u597D\u7684\u7BA1\u7406\u4EC0\u4E48\u65F6\u673A\u5E94\u8BE5\u6267\u884C\u53D8\u66F4\u68C0\u6D4B\uFF0C\u5728\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u4F1A\u9047\u5230\u5F02\u6B65\u64CD\u4F5C\u5BFC\u81F4\u754C\u9762\u5E76\u672A\u6E32\u67D3\uFF0C\u6B64\u65F6\u53EF\u4EE5\u8C03\u7528 <code>detectChanges()</code> \u65B9\u6CD5\u6765\u89E6\u53D1\u4E00\u6B21\u5C0F\u90E8\u4EF6\u8282\u70B9\u7684\u53D8\u66F4\u68C0\u6D4B\u3002</p>
<h3 id="\u6CE8\u518C\u5C0F\u90E8\u4EF6"><a class="lake-link"><i data-anchor="\u6CE8\u518C\u5C0F\u90E8\u4EF6"></i></a>\u6CE8\u518C\u5C0F\u90E8\u4EF6</h3><p>\u5EFA\u8BAE\u5728\u5C0F\u90E8\u4EF6\u5185\u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A <code>withXWidth</code> \u5E76\u8FD4\u56DE <code>SFWidgetProvideConfig</code>\uFF0C\u4F8B\u5982\uFF1A</p>
<pre><code class="language-ts">export function withTestWidget(): SFWidgetProvideConfig &#123;
  return &#123; KEY: &#39;test&#39;, type: TestWidget &#125;;
&#125;
</code></pre>
<p>\u6700\u540E\uFF0C\u901A\u8FC7 <code>provideSFConfig</code> \u6765\u6CE8\u518C\uFF1A</p>
<pre><code class="language-ts">provideSFConfig(&#123; widgets: [ withTestWidget() ] &#125;)
</code></pre>
<p>\u5F53\u7136\u4E3A\u4E86\u66F4\u53CB\u597D\u7684\u7EF4\u62A4\uFF0C\u5EFA\u8BAE\u5728Shared\u76EE\u5F55\u4E0B\u5B9A\u4E49\u9879\u76EE\u4E13\u5C5E\u7684\u96C6\u5408\uFF0C\u6709\u5174\u8DA3\u53EF\u53C2\u8003 <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/" target="_blank" rel="noopener">ng-alain\u5B9E\u73B0</a>\u6216\u53C2\u8003<a href="https://github.com/ng-alain/delon/tree/master/packages/form/widgets/autocomplete" target="_blank" rel="noopener">&#64;delon/form/widgets/autocomplete</a>\u3002</p>
<h3 id="\u4F7F\u7528\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6"><a class="lake-link"><i data-anchor="\u4F7F\u7528\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6"></i></a>\u4F7F\u7528\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6</h3><p>\u540C\u5176\u4ED6\u5C0F\u90E8\u4EF6\u4E00\u6837\uFF0C\u53EA\u9700\u8981\u6307\u5B9A <code>widget</code> \u503C\uFF0C\u4F8B\u5982\uFF1A</p>
<pre><code class="language-json">&quot;test&quot;: &#123;
  &quot;type&quot;: &quot;string&quot;,
  &quot;ui&quot;: &#123;
    &quot;widget&quot;: &quot;test&quot;,
    &quot;data&quot;: &quot;widget parameters&quot;
  &#125;
&#125;
</code></pre>
`,api:"",toc:[{id:"\u5199\u5728\u524D\u9762",title:"\u5199\u5728\u524D\u9762"},{id:"\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6",title:"\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6"},{id:"\u5236\u4F5C\u5C0F\u90E8\u4EF6",title:"\u5236\u4F5C\u5C0F\u90E8\u4EF6",children:[{id:"\u7F16\u5199\u5C0F\u90E8\u4EF6",title:"\u7F16\u5199\u5C0F\u90E8\u4EF6"},{id:"\u6CE8\u518C\u5C0F\u90E8\u4EF6",title:"\u6CE8\u518C\u5C0F\u90E8\u4EF6"},{id:"\u4F7F\u7528\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6",title:"\u4F7F\u7528\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6"}]}],raw:`---
order: 4
title: \u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6
type: Documents
---

## \u5199\u5728\u524D\u9762

\`@delon/form\` \u5C3D\u53EF\u80FD\u6EE1\u8DB3\u4E0D\u540C\u9700\u6C42\uFF0C\u9664\u73B0\u6709\u5185\u7F6E\u7684\u5341\u51E0\u79CD\u57FA\u7840\u5C0F\u90E8\u4EF6(\u90E8\u5206\u9700\u8981\u624B\u52A8\u6CE8\u518C)\u5916\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u4E24\u79CD\u65B9\u5F0F\u8FDB\u4E00\u6B65\u6269\u5C55\u9700\u6C42\uFF1A

## \u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6

\u7EC6\u8282\u8BF7\u53C2\u8003 [\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6](/form/custom)\u3002

## \u5236\u4F5C\u5C0F\u90E8\u4EF6

\u5236\u4F5C\u4E00\u5957\u9879\u76EE\u9700\u6C42\u7684\u5C0F\u90E8\u4EF6\uFF0C\u53EF\u4EE5\u66F4\u5FEB\u901F\u7684\u5F00\u53D1\u5DE5\u4F5C\u3002

### \u7F16\u5199\u5C0F\u90E8\u4EF6

**\u81EA\u5DF1\u521B\u5EFA\u5C0F\u90E8\u4EF6**

\u5C0F\u90E8\u4EF6\u5C31\u662F\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u4F60\u53EA\u9700\u8981\u7EE7\u627F \`ControlWidget\` \u5C31\u76F8\u5F53\u4E8E\u6784\u5EFA\u4E00\u4E2A\u5C0F\u90E8\u4EF6\uFF0C\u4F8B\u5982\uFF1A

\`\`\`ts
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ControlWidget, DelonFormModule, SFWidgetProvideConfig } from '@delon/form';

export function withTestWidget(): SFWidgetProvideConfig {
  return { KEY: 'test', type: TestWidget };
}

@Component({
  selector: 'sf-tinymce',
  template: \`
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    <!-- \u5F00\u59CB\u81EA\u5B9A\u4E49\u63A7\u4EF6\u533A\u57DF -->
    <tinymce
      [ngModel]="value"
      (ngModelChange)="change($event)"
      [config]="config"
      [loading]="loading">
    </tinymce>
    <!-- \u7ED3\u675F\u81EA\u5B9A\u4E49\u63A7\u4EF6\u533A\u57DF -->
  </sf-item-wrap>\`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DelonFormModule]
})
class TestWidget extends ControlWidget implements OnInit {
  /* \u7528\u4E8E\u6CE8\u518C\u5C0F\u90E8\u4EF6 KEY \u503C */
  static readonly KEY = 'test';

  // \u7EC4\u4EF6\u6240\u9700\u8981\u7684\u53C2\u6570\uFF0C\u5EFA\u8BAE\u4F7F\u7528 \`ngOnInit\` \u83B7\u53D6
  config: any;
  loadingTip: string;

  ngOnInit(): void {
    this.loadingTip = this.ui.loadingTip ?? '\u52A0\u8F7D\u4E2D\u2026\u2026';
    this.config = this.ui.config ?? {};
  }

  // reset \u53EF\u4EE5\u66F4\u597D\u7684\u89E3\u51B3\u8868\u5355\u91CD\u7F6E\u8FC7\u7A0B\u4E2D\u6240\u9700\u8981\u7684\u65B0\u6570\u636E\u95EE\u9898
  reset(value: string) {

  }

  change(value: string) {
    if (this.ui.change) this.ui.change(value);
    this.setValue(value);
  }
}
\`\`\`

**sf-item-wrap**

\u5728\u6A21\u677F\u4E2D\u552F\u4E00\u662F\u5229\u7528 \`sf-item-wrap\` \u5305\u88F9\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u5B83\u5185\u90E8\u5C01\u88C5\u8868\u5355\u57FA\u7840\u5143\u7D20\u3002

**\u53D8\u66F4\u68C0\u6D4B**

\u5C0F\u90E8\u4EF6\u5728\u6E32\u67D3\u8FC7\u7A0B\u662F\u624B\u52A8\u53D8\u66F4\u68C0\u6D4B\uFF0C\u5927\u90E8\u5206\u60C5\u51B5\u4E0B \`ControlWidget\` \u5DF2\u7ECF\u5F88\u597D\u7684\u7BA1\u7406\u4EC0\u4E48\u65F6\u673A\u5E94\u8BE5\u6267\u884C\u53D8\u66F4\u68C0\u6D4B\uFF0C\u5728\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u4F1A\u9047\u5230\u5F02\u6B65\u64CD\u4F5C\u5BFC\u81F4\u754C\u9762\u5E76\u672A\u6E32\u67D3\uFF0C\u6B64\u65F6\u53EF\u4EE5\u8C03\u7528 \`detectChanges()\` \u65B9\u6CD5\u6765\u89E6\u53D1\u4E00\u6B21\u5C0F\u90E8\u4EF6\u8282\u70B9\u7684\u53D8\u66F4\u68C0\u6D4B\u3002

### \u6CE8\u518C\u5C0F\u90E8\u4EF6

\u5EFA\u8BAE\u5728\u5C0F\u90E8\u4EF6\u5185\u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A \`withXWidth\` \u5E76\u8FD4\u56DE \`SFWidgetProvideConfig\`\uFF0C\u4F8B\u5982\uFF1A

\`\`\`ts
export function withTestWidget(): SFWidgetProvideConfig {
  return { KEY: 'test', type: TestWidget };
}
\`\`\`

\u6700\u540E\uFF0C\u901A\u8FC7 \`provideSFConfig\` \u6765\u6CE8\u518C\uFF1A

\`\`\`ts
provideSFConfig({ widgets: [ withTestWidget() ] })
\`\`\`

\u5F53\u7136\u4E3A\u4E86\u66F4\u53CB\u597D\u7684\u7EF4\u62A4\uFF0C\u5EFA\u8BAE\u5728Shared\u76EE\u5F55\u4E0B\u5B9A\u4E49\u9879\u76EE\u4E13\u5C5E\u7684\u96C6\u5408\uFF0C\u6709\u5174\u8DA3\u53EF\u53C2\u8003 [ng-alain\u5B9E\u73B0](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/)\u6216\u53C2\u8003[@delon/form/widgets/autocomplete](https://github.com/ng-alain/delon/tree/master/packages/form/widgets/autocomplete)\u3002

### \u4F7F\u7528\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6

\u540C\u5176\u4ED6\u5C0F\u90E8\u4EF6\u4E00\u6837\uFF0C\u53EA\u9700\u8981\u6307\u5B9A \`widget\` \u503C\uFF0C\u4F8B\u5982\uFF1A

\`\`\`json
"test": {
  "type": "string",
  "ui": {
    "widget": "test",
    "data": "widget parameters"
  }
}
\`\`\``}}};codes=[];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-customize"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&m(0,"app-docs",0),e&2&&d("codes",t.codes)("item",t.item)},dependencies:[S],encapsulation:2})};var oe=class o{item={name:"error",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:3,title:"Validation Error",description:"A set of error messages may be created during JSON Schema validation, every error has a fixed keyword, you can configure errors in global config to ov...",group:"Documents",path:"packages/form/docs/error.en-US.md",url:"/form/error/en"},text:`<h2 id="prologue"><a class="lake-link"><i data-anchor="prologue"></i></a>Prologue</h2><p>A set of error messages may be created during JSON Schema validation, every error has a fixed <code>keyword</code>, you can configure <code>errors</code> in <a href="/docs/global-config">global config</a> to override default error messages, you can also handle internationalization error messages in global config. Following is an example when it is failed to pass required field validation:</p>
<pre><code class="language-json">[&#123;
  &quot;keyword&quot;: &quot;required&quot;,
  &quot;dataPath&quot;: &quot;.client&quot;,
  &quot;schemaPath&quot;: &quot;#/required&quot;,
  &quot;params&quot;: &#123;&quot;missingProperty&quot;:&quot;client&quot;&#125;,
  &quot;message&quot;:&quot;Required Field&quot;
&#125;]
</code></pre>
<p><code>message</code> is used to render error information on page.</p>
<blockquote>
<p>**Note\uFF1A**Validation is triggered when it is first time rendering, but there is no any visual presentation, you can set <code>&lt;sf firstVisual&gt;&lt;/sf&gt;</code> to show error effect when it is first time rendering.</p>
</blockquote>
<h2 id="custom_error_information"><a class="lake-link"><i data-anchor="custom_error_information"></i></a>Custom Error Information</h2><p>Support to <a href="/docs/global-config">globally configure</a> <code>errors</code> (commonly used for internationalization) or configure <code>ui.errors</code> (for a specific property) to handle error information.</p>
<p><strong>ui.errors</strong></p>
<pre><code class="language-ts">schema: SFSchema = &#123;
  properties: &#123;
    email: &#123;
      type: &#39;string&#39;,
      title: &#39;Email&#39;,
      format: &#39;email&#39;,
      maxLength: 20,
      ui: &#123;
        errors: &#123;
          &#39;required&#39;: &#39;Required Field&#39;
        &#125;
      &#125;
    &#125;
  &#125;
&#125;;
</code></pre>
<h3 id="keyword"><a class="lake-link"><i data-anchor="keyword"></i></a>keyword</h3><p>No matter which way to build error information, <code>keyword</code> must be used to distinguish error type. You can find the full list of <a href="https://github.com/ng-alain/delon/blob/master/packages/form/src/errors.ts#L4" target="_blank" rel="noopener">ERRORSDEFAULT</a> here.</p>
<h2 id="custom_validation"><a class="lake-link"><i data-anchor="custom_validation"></i></a>Custom Validation</h2><p>JSON Schema cannot satisfy business requirements all the time, e.g. sometimes, need to distinguish different validation rules based on other properties:</p>
<h3 id="property_validation"><a class="lake-link"><i data-anchor="property_validation"></i></a>Property Validation</h3><pre><code class="language-ts">schema: SFSchema = &#123;
  properties: &#123;
    type: &#123;
      type: &#39;string&#39;,
      title: &#39;Type&#39;,
      enum: [
        &#123; value: &#39;mobile&#39;, label: &#39;Mobile&#39; &#125;,
        &#123; value: &#39;email&#39;, label: &#39;email&#39; &#125;,
      ],
      default: &#39;mobile&#39;,
    &#125;,
    mobile: &#123;
      type: &#39;string&#39;,
      title: &#39;Mobile&#39;,
      ui: &#123;
        visibleIf: &#123; type: [&#39;mobile&#39;] &#125;,
        showRequired: true,
        validator: val =&gt; (!val ? [&#123; keyword: &#39;required&#39;, message: &#39;Required mobile&#39; &#125;] : []),
      &#125;,
    &#125;,
    email: &#123;
      type: &#39;string&#39;,
      title: &#39;Email&#39;,
      ui: &#123;
        visibleIf: &#123; type: [&#39;email&#39;] &#125;,
        showRequired: true,
        validator: val =&gt; (!val ? [&#123; keyword: &#39;required&#39;, message: &#39;Required email&#39; &#125;] : []),
      &#125;,
    &#125;,
    pwd: &#123;
      type: &#39;string&#39;,
      title: &#39;Password&#39;,
      ui: &#123;
        type: &#39;password&#39;,
      &#125;,
    &#125;,
  &#125;,
  required: [&#39;type&#39;, &#39;pwd&#39;],
&#125;;
</code></pre>
<h3 id="asynchronous_validation"><a class="lake-link"><i data-anchor="asynchronous_validation"></i></a>Asynchronous Validation</h3><p>Following example show how to validate if a username exists asynchronously:</p>
<pre><code class="language-ts">schema: SFSchema = &#123;
  properties: &#123;
    name: &#123;
      type: &#39;string&#39;,
      ui: &#123;
        showRequired: true,
        validator: (value: any) =&gt; this.http.get(\`/user/check/$&#123;value&#125;\`).pipe(
          map(res =&gt; res ? [ &#123; keyword: &#39;required&#39;, message: &#39;Username exists&#39;&#125; ] : [])
        )
      &#125;
    &#125;
  &#125;
&#125;;
</code></pre>
<p><strong>Note\uFF1A</strong> Because a new instance is generated in every time of validation, some control operations are not able to do, e.g. <code>debounceTime</code>.</p>
<h3 id="seterrors"><a class="lake-link"><i data-anchor="seterrors"></i></a>setErrors</h3><p>Use the <code>setErrors</code> method to adjust error messages.</p>
<pre><code class="language-ts">this.sf.getProperty(&#39;/name&#39;)?.setErrors(&#123; keyword: &#39;required&#39; &#125;);
this.sf.getProperty(&#39;/name&#39;)?.setErrors(&#123; message: &#39;Please input your username!&#39; &#125;);
// Clean current error messages
this.sf.getProperty(&#39;/name&#39;)?.setErrors();
</code></pre>
<h2 id="visual"><a class="lake-link"><i data-anchor="visual"></i></a>Visual</h2><p>Can configure <a href="/docs/global-config">global config</a> or <code>ui.onlyVisual</code> to control if only show error visual but not error message.</p>
<h2 id="debug"><a class="lake-link"><i data-anchor="debug"></i></a>Debug</h2><p>JSON Schema has strong requirement on format, for example, date must follow the format described in <a href="https://tools.ietf.org/html/rfc3339#section-5.6" target="_blank" rel="noopener">RFC3339</a>:</p>
<pre><code class="language-ts">&#123;
  properties: &#123;
    time: &#123;
      type: &#39;string&#39;,
      ui: &#123; widget: &#39;date&#39;, mode: &#39;range&#39; &#125;,
      title: &#39;Date&#39;,
      format: &#39;yyyy-MM-dd HH:mm:ss&#39;
    &#125;
  &#125;,
  ui: &#123;
    debug: true
  &#125;
&#125;
</code></pre>
<p><code>format</code> is an invalid format of date, detailed validation error information will be shown in console when <code>debug: true</code> is set.</p>
<pre><code>Error: unknown format &quot;yyyy-MM-dd HH:mm:ss&quot; is used in schema at path &quot;#/properties/time&quot;
</code></pre>
`,api:"",toc:[{id:"prologue",title:"Prologue"},{id:"custom_error_information",title:"Custom Error Information",children:[{id:"keyword",title:"keyword"}]},{id:"custom_validation",title:"Custom Validation",children:[{id:"property_validation",title:"Property Validation"},{id:"asynchronous_validation",title:"Asynchronous Validation"},{id:"seterrors",title:"setErrors"}]},{id:"visual",title:"Visual"},{id:"debug",title:"Debug"}],raw:`---
order: 3
title: Validation Error
type: Documents
---

## Prologue

A set of error messages may be created during JSON Schema validation, every error has a fixed \`keyword\`, you can configure \`errors\` in [global config](/docs/global-config) to override default error messages, you can also handle internationalization error messages in global config. Following is an example when it is failed to pass required field validation:

\`\`\`json
[{
  "keyword": "required",
  "dataPath": ".client",
  "schemaPath": "#/required",
  "params": {"missingProperty":"client"},
  "message":"Required Field"
}]
\`\`\`

\`message\` is used to render error information on page.

> **Note\uFF1A**Validation is triggered when it is first time rendering, but there is no any visual presentation, you can set \`<sf firstVisual></sf>\` to show error effect when it is first time rendering.

## Custom Error Information

Support to [globally configure](/docs/global-config) \`errors\` (commonly used for internationalization) or configure \`ui.errors\` (for a specific property) to handle error information.

**ui.errors**

\`\`\`ts
schema: SFSchema = {
  properties: {
    email: {
      type: 'string',
      title: 'Email',
      format: 'email',
      maxLength: 20,
      ui: {
        errors: {
          'required': 'Required Field'
        }
      }
    }
  }
};
\`\`\`

### keyword

No matter which way to build error information, \`keyword\` must be used to distinguish error type. You can find the full list of [ERRORSDEFAULT](https://github.com/ng-alain/delon/blob/master/packages/form/src/errors.ts#L4) here.

## Custom Validation

JSON Schema cannot satisfy business requirements all the time, e.g. sometimes, need to distinguish different validation rules based on other properties:

### Property Validation

\`\`\`ts
schema: SFSchema = {
  properties: {
    type: {
      type: 'string',
      title: 'Type',
      enum: [
        { value: 'mobile', label: 'Mobile' },
        { value: 'email', label: 'email' },
      ],
      default: 'mobile',
    },
    mobile: {
      type: 'string',
      title: 'Mobile',
      ui: {
        visibleIf: { type: ['mobile'] },
        showRequired: true,
        validator: val => (!val ? [{ keyword: 'required', message: 'Required mobile' }] : []),
      },
    },
    email: {
      type: 'string',
      title: 'Email',
      ui: {
        visibleIf: { type: ['email'] },
        showRequired: true,
        validator: val => (!val ? [{ keyword: 'required', message: 'Required email' }] : []),
      },
    },
    pwd: {
      type: 'string',
      title: 'Password',
      ui: {
        type: 'password',
      },
    },
  },
  required: ['type', 'pwd'],
};
\`\`\`

### Asynchronous Validation

Following example show how to validate if a username exists asynchronously:

\`\`\`ts
schema: SFSchema = {
  properties: {
    name: {
      type: 'string',
      ui: {
        showRequired: true,
        validator: (value: any) => this.http.get(\`/user/check/\${value}\`).pipe(
          map(res => res ? [ { keyword: 'required', message: 'Username exists'} ] : [])
        )
      }
    }
  }
};
\`\`\`

**Note\uFF1A** Because a new instance is generated in every time of validation, some control operations are not able to do, e.g. \`debounceTime\`.

### setErrors

Use the \`setErrors\` method to adjust error messages.

\`\`\`ts
this.sf.getProperty('/name')?.setErrors({ keyword: 'required' });
this.sf.getProperty('/name')?.setErrors({ message: 'Please input your username!' });
// Clean current error messages
this.sf.getProperty('/name')?.setErrors();
\`\`\`

## Visual

Can configure [global config](/docs/global-config) or \`ui.onlyVisual\` to control if only show error visual but not error message.

## Debug

JSON Schema has strong requirement on format, for example, date must follow the format described in [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6):

\`\`\`ts
{
  properties: {
    time: {
      type: 'string',
      ui: { widget: 'date', mode: 'range' },
      title: 'Date',
      format: 'yyyy-MM-dd HH:mm:ss'
    }
  },
  ui: {
    debug: true
  }
}
\`\`\`

\`format\` is an invalid format of date, detailed validation error information will be shown in console when \`debug: true\` is set.

\`\`\`
Error: unknown format "yyyy-MM-dd HH:mm:ss" is used in schema at path "#/properties/time"
\`\`\``},"zh-CN":{meta:{order:3,title:"\u6821\u9A8C\u9519\u8BEF",description:"JSON Schema \u6821\u9A8C\u8FC7\u7A0B\u4E2D\u4F1A\u751F\u4EA7\u4E00\u7EC4\u9519\u8BEF\u4FE1\u606F\uFF0C\u6BCF\u4E00\u4E2A\u9519\u8BEF\u90FD\u6709\u4E00\u4E2A\u56FA\u5B9A\u7684 keyword \u6765\u8868\u793A\uFF0C\u5141\u8BB8\u901A\u8FC7\u5168\u5C40\u914D\u7F6E\u6765\u8986\u76D6 errors \u9ED8\u8BA4\u7684\u9519\u8BEF\u4FE1\u606F\uFF0C\u5305\u62EC\u5904\u7406\u9519\u8BEF\u4FE1\u606F\u56FD\u9645\u5316\u95EE\u9898\u3002\u4F8B\u5982\u5F53\u67D0\u5C5E\u6027\u4E3A\u5FC5\u586B\u6027\u65F6\u4EA7\u751F\u7684\u9519\u8BEF\u4FE1\u606F\u4E3A:\u5176\u4E2D message \u7528\u4E8E\u9875\u9762\u6E32\u67D3\u7684\u9519\u8BEF\u6587\u672C\u3002**\u6CE8\uFF1A**\u7B2C\u4E00\u6B21\u6E32\u67D3\u4F1A\u89E6\u53D1...",group:"Documents",path:"packages/form/docs/error.zh-CN.md",url:"/form/error/zh"},text:`<h2 id="\u5199\u5728\u524D\u9762"><a class="lake-link"><i data-anchor="\u5199\u5728\u524D\u9762"></i></a>\u5199\u5728\u524D\u9762</h2><p>JSON Schema \u6821\u9A8C\u8FC7\u7A0B\u4E2D\u4F1A\u751F\u4EA7\u4E00\u7EC4\u9519\u8BEF\u4FE1\u606F\uFF0C\u6BCF\u4E00\u4E2A\u9519\u8BEF\u90FD\u6709\u4E00\u4E2A\u56FA\u5B9A\u7684 <code>keyword</code> \u6765\u8868\u793A\uFF0C\u5141\u8BB8\u901A\u8FC7<a href="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\u6765\u8986\u76D6 <code>errors</code> \u9ED8\u8BA4\u7684\u9519\u8BEF\u4FE1\u606F\uFF0C\u5305\u62EC\u5904\u7406\u9519\u8BEF\u4FE1\u606F\u56FD\u9645\u5316\u95EE\u9898\u3002\u4F8B\u5982\u5F53\u67D0\u5C5E\u6027\u4E3A\u5FC5\u586B\u6027\u65F6\u4EA7\u751F\u7684\u9519\u8BEF\u4FE1\u606F\u4E3A:</p>
<pre><code class="language-json">[&#123;
  &quot;keyword&quot;: &quot;required&quot;,
  &quot;dataPath&quot;: &quot;.client&quot;,
  &quot;schemaPath&quot;: &quot;#/required&quot;,
  &quot;params&quot;: &#123;&quot;missingProperty&quot;:&quot;client&quot;&#125;,
  &quot;message&quot;:&quot;\u5FC5\u586B\u9879&quot;
&#125;]
</code></pre>
<p>\u5176\u4E2D <code>message</code> \u7528\u4E8E\u9875\u9762\u6E32\u67D3\u7684\u9519\u8BEF\u6587\u672C\u3002</p>
<blockquote>
<p>**\u6CE8\uFF1A**\u7B2C\u4E00\u6B21\u6E32\u67D3\u4F1A\u89E6\u53D1\u6821\u9A8C\uFF0C\u4F46\u4E0D\u4F1A\u6709\u4EFB\u4F55\u89C6\u89C9\u5C55\u793A\uFF0C\u82E5\u9700\u8981\u4E00\u5F00\u59CB\u5C31\u4F53\u73B0\u9519\u8BEF\u89C6\u89C9\u6548\u679C\u53EF\u4EE5\u6307\u5B9A <code>&lt;sf firstVisual&gt;&lt;/sf&gt;</code>\u3002</p>
</blockquote>
<h2 id="\u81EA\u5B9A\u4E49\u9519\u8BEF\u6587\u672C"><a class="lake-link"><i data-anchor="\u81EA\u5B9A\u4E49\u9519\u8BEF\u6587\u672C"></i></a>\u81EA\u5B9A\u4E49\u9519\u8BEF\u6587\u672C</h2><p>\u5206\u522B\u652F\u6301<a href="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a> <code>errors</code>\uFF08\u4E00\u822C\u7528\u4E8E\u56FD\u9645\u5316\uFF09 \u6216 <code>ui.errors</code>\uFF08\u9488\u5BF9\u67D0\u4E2A\u5C5E\u6027\uFF09 \u7ED3\u6784\u6765\u5904\u7406\u9519\u8BEF\u6587\u672C\u3002</p>
<p><strong>ui.errors</strong></p>
<pre><code class="language-ts">schema: SFSchema = &#123;
  properties: &#123;
    email: &#123;
      type: &#39;string&#39;,
      title: &#39;\u90AE\u7BB1&#39;,
      format: &#39;email&#39;,
      maxLength: 20,
      ui: &#123;
        errors: &#123;
          &#39;required&#39;: &#39;\u5FC5\u586B\u9879&#39;
        &#125;
      &#125;
    &#125;
  &#125;
&#125;;
</code></pre>
<h3 id="keyword"><a class="lake-link"><i data-anchor="keyword"></i></a>keyword</h3><p>\u4E0D\u7BA1\u91C7\u7528\u54EA\u79CD\u65B9\u5F0F\u6765\u6784\u5EFA\u9519\u8BEF\u6587\u672C\uFF0C\u90FD\u5FC5\u987B\u901A\u8FC7 <code>keyword</code> \u6765\u533A\u5206\u9519\u8BEF\u7C7B\u578B\uFF08\u5B8C\u6574\u7C7B\u578B\u89C1 <a href="https://github.com/ng-alain/delon/blob/master/packages/form/src/errors.ts#L4" target="_blank" rel="noopener">ERRORSDEFAULT</a>\uFF09\u3002</p>
<h2 id="\u81EA\u5B9A\u4E49\u6821\u9A8C"><a class="lake-link"><i data-anchor="\u81EA\u5B9A\u4E49\u6821\u9A8C"></i></a>\u81EA\u5B9A\u4E49\u6821\u9A8C</h2><p>JSON Schema \u6821\u9A8C\u5E76\u4E0D\u4E00\u5B9A\u80FD\u591F\u6EE1\u8DB3\u4E00\u4E9B\u4E1A\u52A1\u7684\u9700\u6C42\uFF0C\u4F8B\u5982\u9700\u8981\u6839\u636E\u5176\u4ED6\u5C5E\u6027\u503C\u533A\u5206\u4E0D\u540C\u6821\u9A8C\u89C4\u5219\uFF1A</p>
<h3 id="\u5C5E\u6027\u6821\u9A8C"><a class="lake-link"><i data-anchor="\u5C5E\u6027\u6821\u9A8C"></i></a>\u5C5E\u6027\u6821\u9A8C</h3><pre><code class="language-ts">schema: SFSchema = &#123;
  properties: &#123;
    type: &#123;
      type: &#39;string&#39;,
      title: &#39;Type&#39;,
      enum: [
        &#123; value: &#39;mobile&#39;, label: &#39;Mobile&#39; &#125;,
        &#123; value: &#39;email&#39;, label: &#39;email&#39; &#125;,
      ],
      default: &#39;mobile&#39;,
    &#125;,
    mobile: &#123;
      type: &#39;string&#39;,
      title: &#39;Mobile&#39;,
      ui: &#123;
        visibleIf: &#123; type: [&#39;mobile&#39;] &#125;,
        showRequired: true,
        validator: val =&gt; (!val ? [&#123; keyword: &#39;required&#39;, message: &#39;Required mobile&#39; &#125;] : []),
      &#125;,
    &#125;,
    email: &#123;
      type: &#39;string&#39;,
      title: &#39;Email&#39;,
      ui: &#123;
        visibleIf: &#123; type: [&#39;email&#39;] &#125;,
        showRequired: true,
        validator: val =&gt; (!val ? [&#123; keyword: &#39;required&#39;, message: &#39;Required email&#39; &#125;] : []),
      &#125;,
    &#125;,
    pwd: &#123;
      type: &#39;string&#39;,
      title: &#39;Password&#39;,
      ui: &#123;
        type: &#39;password&#39;,
      &#125;,
    &#125;,
  &#125;,
  required: [&#39;type&#39;, &#39;pwd&#39;],
&#125;;
</code></pre>
<h3 id="\u5F02\u6B65\u6821\u9A8C"><a class="lake-link"><i data-anchor="\u5F02\u6B65\u6821\u9A8C"></i></a>\u5F02\u6B65\u6821\u9A8C</h3><p>\u4F8B\u5982\u4E00\u4E2A\u5F02\u6B65\u6821\u9A8C\u7528\u6237\u540D\u662F\u5426\u5B58\u5728\u793A\u4F8B\uFF1A</p>
<pre><code class="language-ts">schema: SFSchema = &#123;
  properties: &#123;
    name: &#123;
      type: &#39;string&#39;,
      ui: &#123;
        showRequired: true,
        validator: (value: any) =&gt; this.http.get(\`/user/check/$&#123;value&#125;\`).pipe(
          map(res =&gt; res ? [ &#123; keyword: &#39;required&#39;, message: &#39;\u7528\u6237\u540D\u5DF2\u5B58\u5728&#39;&#125; ] : [])
        )
      &#125;
    &#125;
  &#125;
&#125;;
</code></pre>
<p><strong>\u6CE8\u610F\uFF1A</strong> \u7531\u4E8E\u6BCF\u4E00\u6B21\u6821\u9A8C\u90FD\u662F\u91CD\u65B0\u5B9E\u4F8B\u4E00\u6B21\uFF0C\u56E0\u6B64\u65E0\u6CD5\u505A\u4E00\u4E9B\u63A7\u5236\u7684\u64CD\u4F5C\uFF0C\u4F8B\u5982\uFF1A\u53BB\u6296 <code>debounceTime</code>\u3002</p>
<h3 id="seterrors"><a class="lake-link"><i data-anchor="seterrors"></i></a>setErrors</h3><p>\u5229\u7528 <code>setErrors</code> \u65B9\u6CD5\u6765\u8C03\u6574\u9519\u8BEF\u4FE1\u606F\u3002</p>
<pre><code class="language-ts">this.sf.getProperty(&#39;/name&#39;)?.setErrors(&#123; keyword: &#39;required&#39; &#125;);
this.sf.getProperty(&#39;/name&#39;)?.setErrors(&#123; message: &#39;Please input your username!&#39; &#125;);
// \u6E05\u7406\u5F53\u524D\u9519\u8BEF\u6D88\u606F
this.sf.getProperty(&#39;/name&#39;)?.setErrors();
</code></pre>
<h2 id="\u89C6\u89C9"><a class="lake-link"><i data-anchor="\u89C6\u89C9"></i></a>\u89C6\u89C9</h2><p>\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E<a href="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\u6216 <code>ui.onlyVisual</code> \u5C5E\u6027\u63A7\u5236\u53EA\u5C55\u793A\u9519\u8BEF\u89C6\u89C9\u4E0D\u663E\u793A\u9519\u8BEF\u6587\u672C\u3002</p>
<h2 id="debug"><a class="lake-link"><i data-anchor="debug"></i></a>Debug</h2><p>JSON Schema \u5BF9\u683C\u5F0F\u6709\u4E25\u683C\u7684\u8981\u6C42\uFF0C\u4F8B\u5982\u65E5\u671F\u683C\u5F0F\u5FC5\u987B\u9075\u5B88 <a href="https://tools.ietf.org/html/rfc3339#section-5.6" target="_blank" rel="noopener">RFC3339</a> \u65F6\u95F4\u683C\u5F0F\uFF1A</p>
<pre><code class="language-ts">&#123;
  properties: &#123;
    time: &#123;
      type: &#39;string&#39;,
      ui: &#123; widget: &#39;date&#39;, mode: &#39;range&#39; &#125;,
      title: &#39;Date&#39;,
      format: &#39;yyyy-MM-dd HH:mm:ss&#39;
    &#125;
  &#125;,
  ui: &#123;
    debug: true
  &#125;
&#125;
</code></pre>
<p>\u5176\u4E2D <code>format</code> \u662F\u4E00\u4E2A\u9519\u8BEF\u65F6\u95F4\u683C\u5F0F\uFF0C\u5F53\u6307\u5B9A <code>debug: true</code> \u65F6\uFF0C\u4F1A\u5728\u63A7\u5236\u53F0\u63A5\u6536\u5230\u8BE6\u7EC6\u7684\u6821\u9A8C\u9519\u8BEF\u63CF\u8FF0\uFF1A</p>
<pre><code>Error: unknown format &quot;yyyy-MM-dd HH:mm:ss&quot; is used in schema at path &quot;#/properties/time&quot;
</code></pre>
`,api:"",toc:[{id:"\u5199\u5728\u524D\u9762",title:"\u5199\u5728\u524D\u9762"},{id:"\u81EA\u5B9A\u4E49\u9519\u8BEF\u6587\u672C",title:"\u81EA\u5B9A\u4E49\u9519\u8BEF\u6587\u672C",children:[{id:"keyword",title:"keyword"}]},{id:"\u81EA\u5B9A\u4E49\u6821\u9A8C",title:"\u81EA\u5B9A\u4E49\u6821\u9A8C",children:[{id:"\u5C5E\u6027\u6821\u9A8C",title:"\u5C5E\u6027\u6821\u9A8C"},{id:"\u5F02\u6B65\u6821\u9A8C",title:"\u5F02\u6B65\u6821\u9A8C"},{id:"seterrors",title:"setErrors"}]},{id:"\u89C6\u89C9",title:"\u89C6\u89C9"},{id:"debug",title:"Debug"}],raw:`---
order: 3
title: \u6821\u9A8C\u9519\u8BEF
type: Documents
---

## \u5199\u5728\u524D\u9762

JSON Schema \u6821\u9A8C\u8FC7\u7A0B\u4E2D\u4F1A\u751F\u4EA7\u4E00\u7EC4\u9519\u8BEF\u4FE1\u606F\uFF0C\u6BCF\u4E00\u4E2A\u9519\u8BEF\u90FD\u6709\u4E00\u4E2A\u56FA\u5B9A\u7684 \`keyword\` \u6765\u8868\u793A\uFF0C\u5141\u8BB8\u901A\u8FC7[\u5168\u5C40\u914D\u7F6E](/docs/global-config)\u6765\u8986\u76D6 \`errors\` \u9ED8\u8BA4\u7684\u9519\u8BEF\u4FE1\u606F\uFF0C\u5305\u62EC\u5904\u7406\u9519\u8BEF\u4FE1\u606F\u56FD\u9645\u5316\u95EE\u9898\u3002\u4F8B\u5982\u5F53\u67D0\u5C5E\u6027\u4E3A\u5FC5\u586B\u6027\u65F6\u4EA7\u751F\u7684\u9519\u8BEF\u4FE1\u606F\u4E3A:

\`\`\`json
[{
  "keyword": "required",
  "dataPath": ".client",
  "schemaPath": "#/required",
  "params": {"missingProperty":"client"},
  "message":"\u5FC5\u586B\u9879"
}]
\`\`\`

\u5176\u4E2D \`message\` \u7528\u4E8E\u9875\u9762\u6E32\u67D3\u7684\u9519\u8BEF\u6587\u672C\u3002

> **\u6CE8\uFF1A**\u7B2C\u4E00\u6B21\u6E32\u67D3\u4F1A\u89E6\u53D1\u6821\u9A8C\uFF0C\u4F46\u4E0D\u4F1A\u6709\u4EFB\u4F55\u89C6\u89C9\u5C55\u793A\uFF0C\u82E5\u9700\u8981\u4E00\u5F00\u59CB\u5C31\u4F53\u73B0\u9519\u8BEF\u89C6\u89C9\u6548\u679C\u53EF\u4EE5\u6307\u5B9A \`<sf firstVisual></sf>\`\u3002

## \u81EA\u5B9A\u4E49\u9519\u8BEF\u6587\u672C

\u5206\u522B\u652F\u6301[\u5168\u5C40\u914D\u7F6E](/docs/global-config) \`errors\`\uFF08\u4E00\u822C\u7528\u4E8E\u56FD\u9645\u5316\uFF09 \u6216 \`ui.errors\`\uFF08\u9488\u5BF9\u67D0\u4E2A\u5C5E\u6027\uFF09 \u7ED3\u6784\u6765\u5904\u7406\u9519\u8BEF\u6587\u672C\u3002

**ui.errors**

\`\`\`ts
schema: SFSchema = {
  properties: {
    email: {
      type: 'string',
      title: '\u90AE\u7BB1',
      format: 'email',
      maxLength: 20,
      ui: {
        errors: {
          'required': '\u5FC5\u586B\u9879'
        }
      }
    }
  }
};
\`\`\`

### keyword

\u4E0D\u7BA1\u91C7\u7528\u54EA\u79CD\u65B9\u5F0F\u6765\u6784\u5EFA\u9519\u8BEF\u6587\u672C\uFF0C\u90FD\u5FC5\u987B\u901A\u8FC7 \`keyword\` \u6765\u533A\u5206\u9519\u8BEF\u7C7B\u578B\uFF08\u5B8C\u6574\u7C7B\u578B\u89C1 [ERRORSDEFAULT](https://github.com/ng-alain/delon/blob/master/packages/form/src/errors.ts#L4)\uFF09\u3002

## \u81EA\u5B9A\u4E49\u6821\u9A8C

JSON Schema \u6821\u9A8C\u5E76\u4E0D\u4E00\u5B9A\u80FD\u591F\u6EE1\u8DB3\u4E00\u4E9B\u4E1A\u52A1\u7684\u9700\u6C42\uFF0C\u4F8B\u5982\u9700\u8981\u6839\u636E\u5176\u4ED6\u5C5E\u6027\u503C\u533A\u5206\u4E0D\u540C\u6821\u9A8C\u89C4\u5219\uFF1A

### \u5C5E\u6027\u6821\u9A8C

\`\`\`ts
schema: SFSchema = {
  properties: {
    type: {
      type: 'string',
      title: 'Type',
      enum: [
        { value: 'mobile', label: 'Mobile' },
        { value: 'email', label: 'email' },
      ],
      default: 'mobile',
    },
    mobile: {
      type: 'string',
      title: 'Mobile',
      ui: {
        visibleIf: { type: ['mobile'] },
        showRequired: true,
        validator: val => (!val ? [{ keyword: 'required', message: 'Required mobile' }] : []),
      },
    },
    email: {
      type: 'string',
      title: 'Email',
      ui: {
        visibleIf: { type: ['email'] },
        showRequired: true,
        validator: val => (!val ? [{ keyword: 'required', message: 'Required email' }] : []),
      },
    },
    pwd: {
      type: 'string',
      title: 'Password',
      ui: {
        type: 'password',
      },
    },
  },
  required: ['type', 'pwd'],
};
\`\`\`

### \u5F02\u6B65\u6821\u9A8C

\u4F8B\u5982\u4E00\u4E2A\u5F02\u6B65\u6821\u9A8C\u7528\u6237\u540D\u662F\u5426\u5B58\u5728\u793A\u4F8B\uFF1A

\`\`\`ts
schema: SFSchema = {
  properties: {
    name: {
      type: 'string',
      ui: {
        showRequired: true,
        validator: (value: any) => this.http.get(\`/user/check/\${value}\`).pipe(
          map(res => res ? [ { keyword: 'required', message: '\u7528\u6237\u540D\u5DF2\u5B58\u5728'} ] : [])
        )
      }
    }
  }
};
\`\`\`

**\u6CE8\u610F\uFF1A** \u7531\u4E8E\u6BCF\u4E00\u6B21\u6821\u9A8C\u90FD\u662F\u91CD\u65B0\u5B9E\u4F8B\u4E00\u6B21\uFF0C\u56E0\u6B64\u65E0\u6CD5\u505A\u4E00\u4E9B\u63A7\u5236\u7684\u64CD\u4F5C\uFF0C\u4F8B\u5982\uFF1A\u53BB\u6296 \`debounceTime\`\u3002

### setErrors

\u5229\u7528 \`setErrors\` \u65B9\u6CD5\u6765\u8C03\u6574\u9519\u8BEF\u4FE1\u606F\u3002

\`\`\`ts
this.sf.getProperty('/name')?.setErrors({ keyword: 'required' });
this.sf.getProperty('/name')?.setErrors({ message: 'Please input your username!' });
// \u6E05\u7406\u5F53\u524D\u9519\u8BEF\u6D88\u606F
this.sf.getProperty('/name')?.setErrors();
\`\`\`

## \u89C6\u89C9

\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E[\u5168\u5C40\u914D\u7F6E](/docs/global-config)\u6216 \`ui.onlyVisual\` \u5C5E\u6027\u63A7\u5236\u53EA\u5C55\u793A\u9519\u8BEF\u89C6\u89C9\u4E0D\u663E\u793A\u9519\u8BEF\u6587\u672C\u3002

## Debug

JSON Schema \u5BF9\u683C\u5F0F\u6709\u4E25\u683C\u7684\u8981\u6C42\uFF0C\u4F8B\u5982\u65E5\u671F\u683C\u5F0F\u5FC5\u987B\u9075\u5B88 [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6) \u65F6\u95F4\u683C\u5F0F\uFF1A

\`\`\`ts
{
  properties: {
    time: {
      type: 'string',
      ui: { widget: 'date', mode: 'range' },
      title: 'Date',
      format: 'yyyy-MM-dd HH:mm:ss'
    }
  },
  ui: {
    debug: true
  }
}
\`\`\`

\u5176\u4E2D \`format\` \u662F\u4E00\u4E2A\u9519\u8BEF\u65F6\u95F4\u683C\u5F0F\uFF0C\u5F53\u6307\u5B9A \`debug: true\` \u65F6\uFF0C\u4F1A\u5728\u63A7\u5236\u53F0\u63A5\u6536\u5230\u8BE6\u7EC6\u7684\u6821\u9A8C\u9519\u8BEF\u63CF\u8FF0\uFF1A

\`\`\`
Error: unknown format "yyyy-MM-dd HH:mm:ss" is used in schema at path "#/properties/time"
\`\`\``}}};codes=[];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-error"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&m(0,"app-docs",0),e&2&&d("codes",t.codes)("item",t.item)},dependencies:[S],encapsulation:2})};var de=class o{item={name:"getting-started",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:1,title:"Getting Started",description:"@delon/form is a dynamic build form based on the JSON Schema standard.Compliance with the JSON Schema standardBased on the ng-zorro-antd libraryBuilt ...",group:"Documents",path:"packages/form/docs/getting-started.en-US.md",url:"/form/getting-started/en"},text:`<p>&#64;delon/form is a dynamic build form based on the <a href="http://json-schema.org/" target="_blank" rel="noopener">JSON Schema</a> standard.</p>
<h2 id="features"><a class="lake-link"><i data-anchor="features"></i></a>Features</h2><ul>
<li>Compliance with the JSON Schema standard</li>
<li>Based on the ng-zorro-antd library</li>
<li>Built on the design principles developed by Ant Design</li>
<li>Twenty different widgets</li>
<li>Customizable widgets</li>
<li>No third-party dependencies, so applicable to all antd projects</li>
</ul>
<h2 id="how_to_read_document"><a class="lake-link"><i data-anchor="how_to_read_document"></i></a>How to read document</h2><p>This document uses the following conventions:</p>
<ul>
<li>With <code>schema.</code> prefix is JSON Schema properties</li>
<li>With <code>ui.</code> prefix is UI properties</li>
<li>Some widget data sources are divided into <strong>static</strong> and <strong>realtime</strong><ul>
<li><strong>Static</strong> refers to the <code>schema.enum</code> value, which is JSON Schema standard, and limited to the array format <code>any[]</code></li>
<li><strong>Real-time</strong> refers to the <code>ui.asyncData</code> value, which is not JSON Schema standard, the format <code>(input?: any) =&gt; Observable&lt;SFSchemaEnumType[]&gt;</code></li>
</ul>
</li>
</ul>
<h2 id="usage"><a class="lake-link"><i data-anchor="usage"></i></a>Usage</h2><p>Install <code>&#64;delon/form</code> from <code>yarn</code>.</p>
<pre><code class="language-bash">npm i -S &#64;delon/form
</code></pre>
<p>Import <code>DelonFormModule</code> in to your root <code>AppModule</code>.</p>
<pre><code class="language-typescript">import &#123; DelonFormModule &#125; from &#39;&#64;delon/form&#39;;

&#64;NgModule(&#123;
  imports: [
    DelonFormModule.forRoot()
  ]
&#125;)
export class AppModule &#123; &#125;
</code></pre>
<p>Although the default <code>&#64;delon/form</code> validator is <a href="https://ajv.js.org/" target="_blank" rel="noopener">ajv</a>, you can override <code>SchemaValidatorFactory</code> to use other validator libraries.</p>
<p><strong>Global Configuration</strong></p>
<p>Please refer to <a href="/docs/global-config">Global Configuration</a>, the members are as follows:</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[ajv]</code></td>
<td><a href="https://github.com/ajv-validator/ajv/blob/master/docs/api.md#options" target="_blank" rel="noopener">ajv</a> options</td>
<td><code>Ajv.Options</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[ingoreKeywords]</code></td>
<td>Whether to ignore data type validator (<a href="https://github.com/ng-alain/delon/blob/master/packages/form/src/errors.ts#L4" target="_blank" rel="noopener">all types</a>)</td>
<td><code>string[]</code></td>
<td><code>[ &#39;type&#39;, &#39;enum&#39; ]</code></td>
</tr>
<tr>
<td><code>[liveValidate]</code></td>
<td>Whether to live validate</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[autocomplete]</code></td>
<td>autocomplete value of this form</td>
<td><code>on,off</code></td>
<td><code>null</code></td>
</tr>
<tr>
<td><code>[firstVisual]</code></td>
<td>Whether to show visual error immediately</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[onlyVisual]</code></td>
<td>Whether only show visual error not include text, and cancel the error text spacing</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[errors]</code></td>
<td>Customize error messages</td>
<td><code>&#123; [ key: string ]: string &#125;</code></td>
<td><code>ERRORSDEFAULT</code></td>
</tr>
<tr>
<td><code>[ui]</code></td>
<td>Default global ui property</td>
<td><code>SFUISchemaItem</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[size]</code></td>
<td>Size of the all angular element</td>
<td><code>default,large,small</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[button]</code></td>
<td>Submit button of the form</td>
<td><code>SFButton</code></td>
<td><code>&#123;submit:&#39;\u63D0\u4EA4&#39;,submit_type:&#39;primary&#39;,reset:&#39;\u91CD\u7F6E&#39;,reset_type:&#39;default&#39;&#125;</code></td>
</tr>
<tr>
<td><code>[uiDateStringFormat]</code></td>
<td>Date widget default format</td>
<td><code>string</code></td>
<td><code>yyyy-MM-dd HH:mm:ss</code></td>
</tr>
<tr>
<td><code>[uiDateNumberFormat]</code></td>
<td>Date widget default format</td>
<td><code>string</code></td>
<td><code>T</code></td>
</tr>
<tr>
<td><code>[uiTimeStringFormat]</code></td>
<td>Time widget default format</td>
<td><code>string</code></td>
<td><code>HH:mm:ss</code></td>
</tr>
<tr>
<td><code>[uiTimeNumberFormat]</code></td>
<td>Time widget default format</td>
<td><code>string</code></td>
<td><code>T</code></td>
</tr>
<tr>
<td><code>[uiEmailSuffixes]</code></td>
<td>Specify the default Email suffix for <code>format: &#39;email&#39;</code></td>
<td><code>string[]</code></td>
<td><code>[&#39;qq.com&#39;, &#39;163.com&#39;, &#39;gmail.com&#39;, &#39;126.com&#39;, &#39;aliyun.com&#39;]</code></td>
</tr>
<tr>
<td><code>[delay]</code></td>
<td>Whether to delay rendering, should be manually call <code>refreshSchema()</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
</tbody></table>
<p>For example, Build a email and name form:</p>
<pre><code class="language-ts">&#64;Component(&#123;
    selector: &#39;app-home&#39;,
    template: \`
    &lt;sf [schema]=&quot;schema&quot; (formSubmit)=&quot;submit($event)&quot;&gt;&lt;/sf&gt;
    \`
&#125;)
export class HomeComponent &#123;
  schema: SFSchema = &#123;
    properties: &#123;
      email: &#123;
        type: &#39;string&#39;,
        title: &#39;Email&#39;,
        format: &#39;email&#39;,
        maxLength: 20
      &#125;,
      name: &#123;
        type: &#39;string&#39;,
        title: &#39;Name&#39;,
        minLength: 3
      &#125;
    &#125;
  &#125;;

  submit(value: any) &#123; &#125;
&#125;
</code></pre>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="sf"><a class="lake-link"><i data-anchor="sf"></i></a>sf</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[layout]</code></td>
<td>layout of the form</td>
<td><code>horizontal,vertical,inline</code></td>
<td><code>horizontal</code></td>
</tr>
<tr>
<td><code>[schema]</code></td>
<td><strong>Required</strong> JSON Schema</td>
<td><code>SFSchema</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[ui]</code></td>
<td>UI Schema</td>
<td><code>SFUISchema</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[formData]</code></td>
<td>Default form values</td>
<td><code>any</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[mode]</code></td>
<td>Form type mode</td>
<td><code>default,search,edit</code></td>
<td><code>default</code></td>
</tr>
<tr>
<td><code>[button]</code></td>
<td>Submit button of the form</td>
<td><code>SFButton, &#39;none&#39;</code></td>
<td><code>&#123;&#125;</code></td>
</tr>
<tr>
<td><code>[firstVisual]</code></td>
<td>Whether to show visual error immediately</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[liveValidate]</code></td>
<td>Whether to live validate</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[autocomplete]</code></td>
<td>autocomplete value of this form</td>
<td><code>on,off</code></td>
<td><code>null</code></td>
</tr>
<tr>
<td><code>[disabled]</code></td>
<td>Whether to disabled status</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[loading]</code></td>
<td>Whether to load status\uFF0Cwhen <code>true</code> reset button is disabled status, submit button is loading status</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[noColon]</code></td>
<td>Whether to not display <code>:</code> after label text.</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[compact]</code></td>
<td>Whether compact style</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[expandable]</code></td>
<td>Whether to enable expand/collapse</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[expanded]</code></td>
<td>Expand/Collapse state, support two-way binding</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[cleanValue]</code></td>
<td>Whether to clean up data for undefined Schema</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[delay]</code></td>
<td>Whether to delay rendering, should be manually call <code>refreshSchema()</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>(formChange)</code></td>
<td>Callback when data changes</td>
<td><code>EventEmitter&lt;&#123;&#125;&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(formValueChange)</code></td>
<td>Callback when value changes</td>
<td><code>EventEmitter&lt;SFValueChange&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(formSubmit)</code></td>
<td>Callback when submitting the form</td>
<td><code>EventEmitter&lt;&#123;&#125;&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(formReset)</code></td>
<td>Callback when resetting the form</td>
<td><code>EventEmitter&lt;&#123;&#125;&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(formError)</code></td>
<td>Callback when form check</td>
<td><code>EventEmitter&lt;ErrorData[]&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="sfbutton"><a class="lake-link"><i data-anchor="sfbutton"></i></a>SFButton</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[submit]</code></td>
<td>Submit text of button</td>
<td><code>string</code></td>
<td><code>\u63D0\u4EA4</code></td>
</tr>
<tr>
<td><code>[submit_type]</code></td>
<td>Submit type of button</td>
<td><code>string</code></td>
<td><code>primary</code></td>
</tr>
<tr>
<td><code>[submit_icon]</code></td>
<td>Submit icon of button</td>
<td><code>SFButtonIcon</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[reset]</code></td>
<td>Reset text of button</td>
<td><code>string</code></td>
<td><code>\u91CD\u7F6E</code></td>
</tr>
<tr>
<td><code>[reset_type]</code></td>
<td>Reset type of button</td>
<td><code>string</code></td>
<td><code>default</code></td>
</tr>
<tr>
<td><code>[reset_icon]</code></td>
<td>Reset icon of button</td>
<td><code>SFButtonIcon</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[search]</code></td>
<td>Search text of button</td>
<td><code>string</code></td>
<td><code>\u641C\u7D22</code></td>
</tr>
<tr>
<td><code>[edit]</code></td>
<td>Edit text of button</td>
<td><code>string</code></td>
<td><code>\u4FDD\u5B58</code></td>
</tr>
<tr>
<td><code>[render]</code></td>
<td>Button layout</td>
<td><code>SFRenderButton</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="sfvaluechange"><a class="lake-link"><i data-anchor="sfvaluechange"></i></a>SFValueChange</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[value]</code></td>
<td>Always return complete data</td>
<td><code>SFValue</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[path]</code></td>
<td>Current triggered path</td>
<td><code>string, null</code></td>
<td><code>null</code></td>
</tr>
<tr>
<td><code>[pathValue]</code></td>
<td>Current path value</td>
<td><code>SFValue</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="methods"><a class="lake-link"><i data-anchor="methods"></i></a>Methods</h3><table>
<thead>
<tr>
<th>Method Name</th>
<th>Description</th>
<th>Return Value</th>
</tr>
</thead>
<tbody><tr>
<td><code>valid</code></td>
<td>Form is valid</td>
<td><code>boolean</code></td>
</tr>
<tr>
<td><code>value</code></td>
<td>The current value of the form</td>
<td><code>any</code></td>
</tr>
<tr>
<td><code>refreshSchema</code></td>
<td>Refresh JSON Schema</td>
<td><code>void</code></td>
</tr>
<tr>
<td><code>reset</code></td>
<td>Resets the form</td>
<td><code>void</code></td>
</tr>
<tr>
<td><code>validator</code></td>
<td>Manually verify a form</td>
<td><code>void</code></td>
</tr>
<tr>
<td><code>getProperty</code></td>
<td>Get a form property via path</td>
<td><code>FormProperty</code></td>
</tr>
<tr>
<td><code>getValue</code></td>
<td>Get value via path</td>
<td><code>any</code></td>
</tr>
<tr>
<td><code>setValue</code></td>
<td>Set value via path, should be throw error when invalid path</td>
<td><code>this</code></td>
</tr>
<tr>
<td><code>setDisabled</code></td>
<td>Set <code>disabled</code> status via path, should be throw error when invalid path</td>
<td><code>this</code></td>
</tr>
<tr>
<td><code>setRequired</code></td>
<td>Set <code>required</code> status via path, should be throw error when invalid path</td>
<td><code>this</code></td>
</tr>
<tr>
<td><code>updateFeedback</code></td>
<td>Set feedback status via path</td>
<td><code>this</code></td>
</tr>
</tbody></table>
<blockquote>
<p><strong>Note:</strong> All paths are separated by <code>/</code>, for example: <code>/user/name</code>, <code>/arr/0/name</code>.</p>
</blockquote>
<h3 id="button"><a class="lake-link"><i data-anchor="button"></i></a>Button</h3><p><strong>Notice</strong></p>
<ul>
<li>Manually add button when value is <code>null</code> or <code>undefined</code>, but keeping container element.</li>
<li>Manually add button when value is <code>none</code>, but removed container element.</li>
<li>When using fixed <code>label</code> width. Default is center when <code>render.class</code> is not spacifid.</li>
</ul>
<p><strong>Custom Button</strong></p>
<p><strong>NOTICE:</strong> Must be setting <code>button</code> value is <code>null</code>.</p>
<pre><code class="language-html">&lt;sf #sf [button]=&quot;null&quot;&gt;
    &lt;button type=&quot;submit&quot; nz-button [disabled]=&quot;!sf.valid&quot;&gt;Save&lt;/button&gt;
    &lt;button (click)=&quot;sf.reset()&quot; type=&quot;button&quot; nz-button&gt;Reset&lt;/button&gt;
&lt;/sf&gt;
</code></pre>
<h2 id="faq"><a class="lake-link"><i data-anchor="faq"></i></a>FAQ</h2><h3 id="what_is_mode"><a class="lake-link"><i data-anchor="what_is_mode"></i></a>What is mode</h3><p><code>mode</code> is just a quick action, <strong>which has the highest priority</strong>, rules:</p>
<ul>
<li><code>default</code> default mode, do nothing</li>
<li><code>search</code> search mode, automatically set <code>layout: inline</code>\u3001<code>firstVisual: false</code>\u3001<code>liveValidate: false</code>\u3001<code>button.submit: &#39;Search&#39;</code></li>
<li><code>edit</code> edit mode,  automatically set <code>layout: horizontal</code>\u3001<code>firstVisual: false</code>\u3001<code>liveValidate: true</code>\u3001<code>button.submit: &#39;Save&#39;</code></li>
</ul>
<h3 id="schema_internationalization"><a class="lake-link"><i data-anchor="schema_internationalization"></i></a>Schema Internationalization</h3><p><code>sf</code> doesn&#39;t support any Schema internationalization, this is because Schema itself is a group of JSON values, you can just provide different versions of languages to support internationalization.</p>
`,toc:[{id:"features",title:"Features"},{id:"how_to_read_document",title:"How to read document"},{id:"usage",title:"Usage"},{id:"api",title:"API",children:[{id:"sf",title:"sf"},{id:"sfbutton",title:"SFButton"},{id:"sfvaluechange",title:"SFValueChange"},{id:"methods",title:"Methods"},{id:"button",title:"Button"}]},{id:"faq",title:"FAQ",children:[{id:"what_is_mode",title:"What is mode"},{id:"schema_internationalization",title:"Schema Internationalization"}]}],raw:"---\norder: 1\ntitle: Getting Started\ntype: Documents\n---\n\n@delon/form is a dynamic build form based on the [JSON Schema](http://json-schema.org/) standard.\n\n## Features\n\n- Compliance with the JSON Schema standard\n- Based on the ng-zorro-antd library\n- Built on the design principles developed by Ant Design\n- Twenty different widgets\n- Customizable widgets\n- No third-party dependencies, so applicable to all antd projects\n\n## How to read document\n\nThis document uses the following conventions:\n\n- With `schema.` prefix is JSON Schema properties\n- With `ui.` prefix is UI properties\n- Some widget data sources are divided into **static** and **realtime**\n  - **Static** refers to the `schema.enum` value, which is JSON Schema standard, and limited to the array format `any[]`\n  - **Real-time** refers to the `ui.asyncData` value, which is not JSON Schema standard, the format `(input?: any) => Observable<SFSchemaEnumType[]>`\n\n## Usage\n\nInstall `@delon/form` from `yarn`.\n\n```bash\nnpm i -S @delon/form\n```\n\nImport `DelonFormModule` in to your root `AppModule`.\n\n```typescript\nimport { DelonFormModule } from '@delon/form';\n\n@NgModule({\n  imports: [\n    DelonFormModule.forRoot()\n  ]\n})\nexport class AppModule { }\n```\n\nAlthough the default `@delon/form` validator is [ajv](https://ajv.js.org/), you can override `SchemaValidatorFactory` to use other validator libraries.\n\n**Global Configuration**\n\nPlease refer to [Global Configuration](/docs/global-config), the members are as follows:\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[ajv]` | [ajv](https://github.com/ajv-validator/ajv/blob/master/docs/api.md#options) options | `Ajv.Options` | - |\n| `[ingoreKeywords]` | Whether to ignore data type validator ([all types](https://github.com/ng-alain/delon/blob/master/packages/form/src/errors.ts#L4)) | `string[]` | `[ 'type', 'enum' ]` |\n| `[liveValidate]` | Whether to live validate | `boolean` | `true` |\n| `[autocomplete]` | autocomplete value of this form | `on,off` | `null` |\n| `[firstVisual]` | Whether to show visual error immediately | `boolean` | `false` |\n| `[onlyVisual]` | Whether only show visual error not include text, and cancel the error text spacing | `boolean` | `false` |\n| `[errors]` | Customize error messages | `{ [ key: string ]: string }` | `ERRORSDEFAULT` |\n| `[ui]` | Default global ui property | `SFUISchemaItem` | - |\n| `[size]` | Size of the all angular element | `default,large,small` | - |\n| `[button]` | Submit button of the form | `SFButton` | `{submit:'\u63D0\u4EA4',submit_type:'primary',reset:'\u91CD\u7F6E',reset_type:'default'}` |\n| `[uiDateStringFormat]` | Date widget default format | `string` | `yyyy-MM-dd HH:mm:ss` |\n| `[uiDateNumberFormat]` | Date widget default format | `string` | `T` |\n| `[uiTimeStringFormat]` | Time widget default format | `string` | `HH:mm:ss` |\n| `[uiTimeNumberFormat]` | Time widget default format | `string` | `T` |\n| `[uiEmailSuffixes]` | Specify the default Email suffix for `format: 'email'` | `string[]` | `['qq.com', '163.com', 'gmail.com', '126.com', 'aliyun.com']` |\n| `[delay]` | Whether to delay rendering, should be manually call `refreshSchema()` | `boolean` | `false` |\n\nFor example, Build a email and name form:\n\n```ts\n@Component({\n    selector: 'app-home',\n    template: `\n    <sf [schema]=\"schema\" (formSubmit)=\"submit($event)\"></sf>\n    `\n})\nexport class HomeComponent {\n  schema: SFSchema = {\n    properties: {\n      email: {\n        type: 'string',\n        title: 'Email',\n        format: 'email',\n        maxLength: 20\n      },\n      name: {\n        type: 'string',\n        title: 'Name',\n        minLength: 3\n      }\n    }\n  };\n\n  submit(value: any) { }\n}\n```\n\n## API\n\n### sf\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[layout]` | layout of the form | `horizontal,vertical,inline` | `horizontal` |\n| `[schema]` | **Required** JSON Schema | `SFSchema` | - |\n| `[ui]` | UI Schema | `SFUISchema` | - |\n| `[formData]` | Default form values | `any` | - |\n| `[mode]` | Form type mode | `default,search,edit` | `default` |\n| `[button]` | Submit button of the form | `SFButton, 'none'` | `{}` |\n| `[firstVisual]` | Whether to show visual error immediately | `boolean` | `true` |\n| `[liveValidate]` | Whether to live validate | `boolean` | `true` |\n| `[autocomplete]` | autocomplete value of this form | `on,off` | `null` |\n| `[disabled]` | Whether to disabled status | `boolean` | `false` |\n| `[loading]` | Whether to load status\uFF0Cwhen `true` reset button is disabled status, submit button is loading status | `boolean` | `false` |\n| `[noColon]` | Whether to not display `:` after label text. | `boolean` | `false` |\n| `[compact]` | Whether compact style | `boolean` | `false` |\n| `[expandable]` | Whether to enable expand/collapse | `boolean` | `false` |\n| `[expanded]` | Expand/Collapse state, support two-way binding | `boolean` | `false` |\n| `[cleanValue]` | Whether to clean up data for undefined Schema | `boolean` | `false` |\n| `[delay]` | Whether to delay rendering, should be manually call `refreshSchema()` | `boolean` | `false` |\n| `(formChange)` | Callback when data changes | `EventEmitter<{}>` | - |\n| `(formValueChange)` | Callback when value changes | `EventEmitter<SFValueChange>` | - |\n| `(formSubmit)` | Callback when submitting the form | `EventEmitter<{}>` | - |\n| `(formReset)` | Callback when resetting the form | `EventEmitter<{}>` | - |\n| `(formError)` | Callback when form check | `EventEmitter<ErrorData[]>` | - |\n\n### SFButton\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[submit]` | Submit text of button | `string` | `\u63D0\u4EA4` |\n| `[submit_type]` | Submit type of button | `string` | `primary` |\n| `[submit_icon]` | Submit icon of button | `SFButtonIcon` | - |\n| `[reset]` | Reset text of button | `string` | `\u91CD\u7F6E` |\n| `[reset_type]` | Reset type of button | `string` | `default` |\n| `[reset_icon]` | Reset icon of button | `SFButtonIcon` | - |\n| `[search]` | Search text of button | `string` | `\u641C\u7D22` |\n| `[edit]` | Edit text of button | `string` | `\u4FDD\u5B58` |\n| `[render]` | Button layout | `SFRenderButton` | - |\n\n### SFValueChange\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[value]` | Always return complete data | `SFValue` | - |\n| `[path]` | Current triggered path | `string, null` | `null` |\n| `[pathValue]` | Current path value | `SFValue` | - |\n\n### Methods\n\n| Method Name | Description | Return Value |\n|-------------|-------------|--------------|\n| `valid` | Form is valid | `boolean` |\n| `value` | The current value of the form | `any` |\n| `refreshSchema` | Refresh JSON Schema | `void` |\n| `reset` | Resets the form | `void` |\n| `validator` | Manually verify a form | `void` |\n| `getProperty` | Get a form property via path | `FormProperty` |\n| `getValue` | Get value via path | `any` |\n| `setValue` | Set value via path, should be throw error when invalid path | `this` |\n| `setDisabled` | Set `disabled` status via path, should be throw error when invalid path | `this` |\n| `setRequired` | Set `required` status via path, should be throw error when invalid path | `this` |\n| `updateFeedback` | Set feedback status via path | `this` |\n\n> **Note:** All paths are separated by `/`, for example: `/user/name`, `/arr/0/name`.\n\n### Button\n\n**Notice**\n\n- Manually add button when value is `null` or `undefined`, but keeping container element.\n- Manually add button when value is `none`, but removed container element.\n- When using fixed `label` width. Default is center when `render.class` is not spacifid.\n\n**Custom Button**\n\n**NOTICE:** Must be setting `button` value is `null`.\n\n```html\n<sf #sf [button]=\"null\">\n    <button type=\"submit\" nz-button [disabled]=\"!sf.valid\">Save</button>\n    <button (click)=\"sf.reset()\" type=\"button\" nz-button>Reset</button>\n</sf>\n```\n\n## FAQ\n\n### What is mode\n\n`mode` is just a quick action, **which has the highest priority**, rules:\n\n- `default` default mode, do nothing\n- `search` search mode, automatically set `layout: inline`\u3001`firstVisual: false`\u3001`liveValidate: false`\u3001`button.submit: 'Search'`\n- `edit` edit mode,  automatically set `layout: horizontal`\u3001`firstVisual: false`\u3001`liveValidate: true`\u3001`button.submit: 'Save'`\n\n### Schema Internationalization\n\n`sf` doesn't support any Schema internationalization, this is because Schema itself is a group of JSON values, you can just provide different versions of languages to support internationalization."},"zh-CN":{meta:{order:1,title:"\u5F00\u59CB\u4F7F\u7528",description:"@delon/form \u662F\u4E00\u4E2A\u57FA\u4E8E JSON Schema \u6807\u51C6\u7684\u52A8\u6001\u6784\u5EFA\u8868\u5355\u3002\u7B26\u5408 JSON Schema \u6807\u51C6\u57FA\u4E8E ng-zorro-antd \u57FA\u7840\u7EC4\u4EF6\u5E93\u79C9\u627F Ant Design \u4EF7\u503C\u89C2\u4E8C\u5341\u51E0\u79CD\u5C0F\u90E8\u4EF6\u53EF\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6\u6EE1\u8DB3\u4E1A\u52A1\u9700\u6C42\u65E0\u4EFB\u4F55\u7B2C\u4E09\u65B9\u4F9D\u8D56\uFF0C\u53EF\u9002\u7528\u6240\u6709 antd \u9879\u76EE\u5728\u5F00\u59CB\u4E4B\u524D\u9700\u8981\u77E5\u9053\u6587\u6863\u7684...",group:"Documents",path:"packages/form/docs/getting-started.zh-CN.md",url:"/form/getting-started/zh"},text:`<p>&#64;delon/form \u662F\u4E00\u4E2A\u57FA\u4E8E <a href="http://json-schema.org/" target="_blank" rel="noopener">JSON Schema</a> \u6807\u51C6\u7684\u52A8\u6001\u6784\u5EFA\u8868\u5355\u3002</p>
<h2 id="\u7279\u6027"><a class="lake-link"><i data-anchor="\u7279\u6027"></i></a>\u7279\u6027</h2><ul>
<li>\u7B26\u5408 JSON Schema \u6807\u51C6</li>
<li>\u57FA\u4E8E ng-zorro-antd \u57FA\u7840\u7EC4\u4EF6\u5E93</li>
<li>\u79C9\u627F Ant Design \u4EF7\u503C\u89C2</li>
<li>\u4E8C\u5341\u51E0\u79CD\u5C0F\u90E8\u4EF6</li>
<li>\u53EF\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6\u6EE1\u8DB3\u4E1A\u52A1\u9700\u6C42</li>
<li>\u65E0\u4EFB\u4F55\u7B2C\u4E09\u65B9\u4F9D\u8D56\uFF0C\u53EF\u9002\u7528\u6240\u6709 antd \u9879\u76EE</li>
</ul>
<h2 id="\u5982\u4F55\u9605\u8BFB"><a class="lake-link"><i data-anchor="\u5982\u4F55\u9605\u8BFB"></i></a>\u5982\u4F55\u9605\u8BFB</h2><p>\u5728\u5F00\u59CB\u4E4B\u524D\u9700\u8981\u77E5\u9053\u6587\u6863\u7684\u4E00\u4E9B\u7B80\u5355\u7F16\u5199\u89C4\u5219\uFF1A</p>
<ul>
<li>\u4EE3\u7801\u4EE5 <code>schema.</code> \u5F00\u5934\u7684\u8868\u793A JSON Schema \u5BF9\u8C61\u5C5E\u6027</li>
<li>\u4EE3\u7801\u4EE5 <code>ui.</code> \u5F00\u5934\u7684\u8868\u793A UI \u5BF9\u8C61\u5C5E\u6027</li>
<li>\u90E8\u5206\u5C0F\u90E8\u4EF6\u6570\u636E\u6E90\u5206\u4E3A <strong>\u9759\u6001</strong> \u548C <strong>\u5B9E\u65F6</strong> \u4E24\u7C7B<ul>
<li><strong>\u9759\u6001</strong> \u7406\u89E3\u4E3A <code>schema.enum</code> \u503C\uFF0C\u662F\u7B26\u5408 JSON Schema \u6807\u51C6\uFF0C\u4E14\u9650\u6570\u7EC4\u683C\u5F0F <code>any[]</code></li>
<li><strong>\u5B9E\u65F6</strong> \u7406\u89E3\u4E3A <code>ui.asyncData</code> \u503C\uFF0C\u975E JSON Schema \u6807\u51C6\uFF0C\u683C\u5F0F <code>(input?: any) =&gt; Observable&lt;SFSchemaEnumType[]&gt;</code></li>
</ul>
</li>
</ul>
<h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p>\u5B89\u88C5 <code>&#64;delon/form</code> \u4F9D\u8D56\u5305\uFF1A</p>
<pre><code class="language-bash">npm i -S &#64;delon/form
</code></pre>
<p>\u5BFC\u5165 <code>DelonFormModule</code> \u6A21\u5757\uFF1A</p>
<pre><code class="language-typescript">import &#123; DelonFormModule &#125; from &#39;&#64;delon/form&#39;;

&#64;NgModule(&#123;
  imports: [
    DelonFormModule.forRoot()
  ]
&#125;)
export class AppModule &#123; &#125;
</code></pre>
<p>\u867D\u7136\u9ED8\u8BA4 <code>&#64;delon/form</code> \u6821\u9A8C\u662F <a href="https://ajv.js.org/" target="_blank" rel="noopener">ajv</a>\uFF0C\u4F46\u8FD9\u5E76\u4E0D\u662F\u552F\u4E00\u7684\u9009\u62E9\uFF0C\u4F60\u53EF\u4EE5\u8986\u76D6 <code>SchemaValidatorFactory</code> \u4F7F\u7528\u5176\u4ED6\u6821\u9A8C\u7C7B\u5E93\u3002</p>
<p><strong>\u5168\u5C40\u914D\u7F6E</strong></p>
<p>\u8BF7\u53C2\u8003<a href="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\uFF0C\u6210\u5458\u5982\u4E0B\uFF1A</p>
<table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[ajv]</code></td>
<td><a href="https://github.com/ajv-validator/ajv/blob/master/docs/api.md#options" target="_blank" rel="noopener">ajv</a> \u53C2\u6570</td>
<td><code>Ajv.Options</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[ingoreKeywords]</code></td>
<td>\u662F\u5426\u5FFD\u7565\u67D0\u4E9B\u6570\u636E\u7C7B\u578B\u6821\u9A8C\uFF08<a href="https://github.com/ng-alain/delon/blob/master/packages/form/src/errors.ts#L4" target="_blank" rel="noopener">\u6240\u6709\u7C7B\u578B</a>\uFF09</td>
<td><code>string[]</code></td>
<td><code>[ &#39;type&#39;, &#39;enum&#39; ]</code></td>
</tr>
<tr>
<td><code>[liveValidate]</code></td>
<td>\u662F\u5426\u5B9E\u65F6\u6821\u9A8C</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[autocomplete]</code></td>
<td>\u6307\u5B9A\u8868\u5355 <code>autocomplete</code> \u503C</td>
<td><code>on,off</code></td>
<td><code>null</code></td>
</tr>
<tr>
<td><code>[firstVisual]</code></td>
<td>\u662F\u5426\u7ACB\u5373\u5448\u73B0\u9519\u8BEF\u89C6\u89C9</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[onlyVisual]</code></td>
<td>\u662F\u5426\u53EA\u5C55\u793A\u9519\u8BEF\u89C6\u89C9\u4E0D\u663E\u793A\u9519\u8BEF\u6587\u672C\uFF0C\u5E76\u53D6\u6D88\u9519\u8BEF\u6587\u672C\u95F4\u8DDD</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[errors]</code></td>
<td>\u81EA\u5B9A\u4E49\u901A\u7528\u9519\u8BEF\u4FE1\u606F</td>
<td><code>&#123; [ key: string ]: string &#125;</code></td>
<td><code>ERRORSDEFAULT</code></td>
</tr>
<tr>
<td><code>[ui]</code></td>
<td>\u9ED8\u8BA4\u5168\u5C40\u5E03\u5C40</td>
<td><code>SFUISchemaItem</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[size]</code></td>
<td>\u5143\u7D20\u7EC4\u4EF6\u5927\u5C0F\uFF0C\u7528\u4E8E <code>nzSize</code> \u503C</td>
<td><code>default,large,small</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[button]</code></td>
<td>\u6309\u94AE\u98CE\u683C</td>
<td><code>SFButton</code></td>
<td><code>&#123;submit:&#39;\u63D0\u4EA4&#39;,submit_type:&#39;primary&#39;,reset:&#39;\u91CD\u7F6E&#39;,reset_type:&#39;default&#39;&#125;</code></td>
</tr>
<tr>
<td><code>[uiDateStringFormat]</code></td>
<td>date\u5C0F\u90E8\u4EF6\uFF1A<code>type=&quot;string&quot;</code> \u4E14\u4E0D\u6307\u5B9A <code>schema.format</code> \u548C <code>ui.format</code> \u65F6\u65E5\u671F\u683C\u5F0F</td>
<td><code>string</code></td>
<td><code>yyyy-MM-dd HH:mm:ss</code></td>
</tr>
<tr>
<td><code>[uiDateNumberFormat]</code></td>
<td>date\u5C0F\u90E8\u4EF6\uFF1A<code>type=&quot;number&quot;</code> \u4E14\u4E0D\u6307\u5B9A <code>schema.format</code> \u548C <code>ui.format</code> \u65F6\u65E5\u671F\u683C\u5F0F\uFF0C\u9ED8\u8BA4\uFF1A<code>T</code> 13\u4F4DUnix Timestamp</td>
<td><code>string</code></td>
<td><code>T</code></td>
</tr>
<tr>
<td><code>[uiTimeStringFormat]</code></td>
<td>time\u5C0F\u90E8\u4EF6\uFF1A<code>type=&quot;string&quot;</code> \u4E14\u4E0D\u6307\u5B9A <code>schema.format</code> \u548C <code>ui.format</code> \u65F6\u65E5\u671F\u683C\u5F0F</td>
<td><code>string</code></td>
<td><code>HH:mm:ss</code></td>
</tr>
<tr>
<td><code>[uiTimeNumberFormat]</code></td>
<td>time\u5C0F\u90E8\u4EF6\uFF1A<code>type=&quot;number&quot;</code> \u4E14\u4E0D\u6307\u5B9A <code>schema.format</code> \u548C <code>ui.format</code> \u65F6\u65E5\u671F\u683C\u5F0F\uFF0C\u9ED8\u8BA4\uFF1A<code>T</code> 13\u4F4DUnix Timestamp\uFF0C\u65E5\u671F\u7EDF\u4E00\u4F7F\u7528 <code>1970-01-01</code></td>
<td><code>string</code></td>
<td><code>T</code></td>
</tr>
<tr>
<td><code>[uiEmailSuffixes]</code></td>
<td>\u6307\u5B9A <code>format: &#39;email&#39;</code> \u7684\u9ED8\u8BA4Email\u540E\u7F00</td>
<td><code>string[]</code></td>
<td><code>[&#39;qq.com&#39;, &#39;163.com&#39;, &#39;gmail.com&#39;, &#39;126.com&#39;, &#39;aliyun.com&#39;]</code></td>
</tr>
<tr>
<td><code>[delay]</code></td>
<td>\u662F\u5426\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u9700\u8981\u624B\u52A8\u8C03\u7528 <code>refreshSchema()</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
</tbody></table>
<p>\u6784\u5EFA\u4E00\u4E2A\u90AE\u7BB1\u3001\u59D3\u540D\u8868\u5355\uFF1A</p>
<pre><code class="language-ts">&#64;Component(&#123;
  selector: &#39;app-home&#39;,
  template: \`
  &lt;sf [schema]=&quot;schema&quot; (formSubmit)=&quot;submit($event)&quot;&gt;&lt;/sf&gt;
  \`
&#125;)
export class HomeComponent &#123;
  schema: SFSchema = &#123;
    properties: &#123;
      email: &#123;
        type: &#39;string&#39;,
        title: &#39;\u90AE\u7BB1&#39;,
        format: &#39;email&#39;,
        maxLength: 20
      &#125;,
      name: &#123;
        type: &#39;string&#39;,
        title: &#39;\u59D3\u540D&#39;,
        minLength: 3
      &#125;
    &#125;
  &#125;;

  submit(value: any) &#123; &#125;
&#125;
</code></pre>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="sf"><a class="lake-link"><i data-anchor="sf"></i></a>sf</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[layout]</code></td>
<td>\u8868\u5355\u5E03\u5C40\uFF0C\u7B49\u540C <code>nzLayout</code></td>
<td><code>&#39;horizontal&#39;,&#39;vertical&#39;,&#39;inline&#39;</code></td>
<td><code>&#39;horizontal&#39;</code></td>
</tr>
<tr>
<td><code>[schema]</code></td>
<td><strong>\u5FC5\u586B\u9879</strong> JSON Schema</td>
<td><code>SFSchema</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[ui]</code></td>
<td>UI Schema</td>
<td><code>SFUISchema</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[formData]</code></td>
<td>\u8868\u5355\u9ED8\u8BA4\u503C</td>
<td><code>any</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[mode]</code></td>
<td>\u8868\u5355\u6A21\u5F0F\uFF0C\u7EC6\u8282\u89C1\u5E38\u89C1\u95EE\u9898</td>
<td><code>&#39;default&#39;,&#39;search&#39;,&#39;edit&#39;</code></td>
<td><code>&#39;default&#39;</code></td>
</tr>
<tr>
<td><code>[button]</code></td>
<td>\u6309\u94AE</td>
<td>\`SFButton</td>
<td>&#39;none&#39;\`</td>
</tr>
<tr>
<td><code>[firstVisual]</code></td>
<td>\u662F\u5426\u7ACB\u5373\u5448\u73B0\u9519\u8BEF\u89C6\u89C9</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[liveValidate]</code></td>
<td>\u662F\u5426\u5B9E\u65F6\u6821\u9A8C\uFF0C<code>false</code> \u63D0\u4EA4\u65F6\u68C0\u9A8C</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[autocomplete]</code></td>
<td>\u6307\u5B9A\u8868\u5355 <code>autocomplete</code> \u503C</td>
<td><code>&#39;on&#39;,&#39;off&#39;</code></td>
<td><code>null</code></td>
</tr>
<tr>
<td><code>[disabled]</code></td>
<td>\u662F\u5426\u7981\u7528\u72B6\u6001</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[loading]</code></td>
<td>\u662F\u5426\u52A0\u8F7D\u72B6\u6001\uFF0C\u5F53 <code>true</code> \u91CD\u7F6E\u6309\u94AE\u7981\u6B62\u72B6\u6001\uFF0C\u63D0\u4EA4\u6309\u94AE\u52A0\u8F7D\u72B6\u6001</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[noColon]</code></td>
<td>\u662F\u5426\u4E0D\u663E\u793A <code>label</code> \u540E\u9762\u7684\u5192\u53F7</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[compact]</code></td>
<td>\u662F\u5426\u7D27\u51D1</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[expandable]</code></td>
<td>\u662F\u5426\u542F\u7528\u5C55\u5F00/\u6536\u7F29\u529F\u80FD</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[expanded]</code></td>
<td>\u5C55\u5F00/\u6536\u7F29\u72B6\u6001\uFF0C\u652F\u6301\u53CC\u5411\u7ED1\u5B9A</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[cleanValue]</code></td>
<td>\u662F\u5426\u6E05\u7406\u672A\u5B9A\u4E49 Schema \u7684\u6570\u636E</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[delay]</code></td>
<td>\u662F\u5426\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u9700\u8981\u624B\u52A8\u8C03\u7528 <code>refreshSchema()</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>(formChange)</code></td>
<td>\u6570\u636E\u53D8\u66F4\u65F6\u56DE\u8C03</td>
<td><code>EventEmitter&lt;&#123;&#125;&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(formValueChange)</code></td>
<td>\u503C\u6570\u636E\u53D8\u66F4\u65F6\u56DE\u8C03</td>
<td><code>EventEmitter&lt;SFValueChange&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(formSubmit)</code></td>
<td>\u63D0\u4EA4\u8868\u5355\u65F6\u56DE\u8C03</td>
<td><code>EventEmitter&lt;&#123;&#125;&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(formReset)</code></td>
<td>\u91CD\u7F6E\u8868\u5355\u65F6\u56DE\u8C03</td>
<td><code>EventEmitter&lt;&#123;&#125;&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(formError)</code></td>
<td>\u8868\u5355\u6821\u9A8C\u7ED3\u679C\u56DE\u8C03</td>
<td><code>EventEmitter&lt;ErrorData[]&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="sfbutton"><a class="lake-link"><i data-anchor="sfbutton"></i></a>SFButton</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[submit]</code></td>
<td>\u63D0\u4EA4\u6309\u94AE\u6587\u672C</td>
<td><code>string</code></td>
<td><code>\u63D0\u4EA4</code></td>
</tr>
<tr>
<td><code>[submit_type]</code></td>
<td>\u63D0\u4EA4\u6309\u94AE\u7C7B\u578B</td>
<td><code>string</code></td>
<td><code>primary</code></td>
</tr>
<tr>
<td><code>[submit_icon]</code></td>
<td>\u63D0\u4EA4\u6309\u94AE\u56FE\u6807</td>
<td><code>SFButtonIcon</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[reset]</code></td>
<td>\u91CD\u7F6E\u6309\u94AE\u6587\u672C</td>
<td><code>string</code></td>
<td><code>\u91CD\u7F6E</code></td>
</tr>
<tr>
<td><code>[reset_type]</code></td>
<td>\u91CD\u7F6E\u6309\u94AE\u7C7B\u578B</td>
<td><code>string</code></td>
<td><code>default</code></td>
</tr>
<tr>
<td><code>[reset_icon]</code></td>
<td>\u91CD\u7F6E\u6309\u94AE\u56FE\u6807</td>
<td><code>SFButtonIcon</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[search]</code></td>
<td>\u641C\u7D22\u6309\u94AE\u6587\u672C</td>
<td><code>string</code></td>
<td><code>\u641C\u7D22</code></td>
</tr>
<tr>
<td><code>[edit]</code></td>
<td>\u7F16\u8F91\u6309\u94AE\u6587\u672C</td>
<td><code>string</code></td>
<td><code>\u4FDD\u5B58</code></td>
</tr>
<tr>
<td><code>[render]</code></td>
<td>\u6309\u94AE\u6837\u5F0F</td>
<td><code>SFRenderButton</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="sfvaluechange"><a class="lake-link"><i data-anchor="sfvaluechange"></i></a>SFValueChange</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[value]</code></td>
<td>\u603B\u662F\u8FD4\u56DE\u5B8C\u6574\u7684\u6570\u636E</td>
<td><code>SFValue</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[path]</code></td>
<td>\u5F53\u524D\u89E6\u53D1\u8DEF\u5F84</td>
<td><code>string, null</code></td>
<td><code>null</code></td>
</tr>
<tr>
<td><code>[pathValue]</code></td>
<td>\u5F53\u524D\u89E6\u53D1\u8DEF\u5F84\u5BF9\u5E94\u503C</td>
<td><code>SFValue</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="\u7EC4\u4EF6\u65B9\u6CD5"><a class="lake-link"><i data-anchor="\u7EC4\u4EF6\u65B9\u6CD5"></i></a>\u7EC4\u4EF6\u65B9\u6CD5</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u8FD4\u56DE\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>valid</code></td>
<td>\u8868\u5355\u662F\u5426\u6709\u6548</td>
<td><code>boolean</code></td>
</tr>
<tr>
<td><code>value</code></td>
<td>\u8868\u5355\u503C</td>
<td><code>any</code></td>
</tr>
<tr>
<td><code>refreshSchema</code></td>
<td>\u5237\u65B0 JSON Schema</td>
<td><code>void</code></td>
</tr>
<tr>
<td><code>reset</code></td>
<td>\u91CD\u7F6E\u8868\u5355</td>
<td><code>void</code></td>
</tr>
<tr>
<td><code>validator</code></td>
<td>\u624B\u52A8\u6821\u9A8C\u4E00\u6B21\u8868\u5355</td>
<td><code>void</code></td>
</tr>
<tr>
<td><code>getProperty</code></td>
<td>\u6839\u636E\u8DEF\u5F84\u83B7\u53D6\u8868\u5355\u5143\u7D20\u5C5E\u6027</td>
<td><code>FormProperty</code></td>
</tr>
<tr>
<td><code>getValue</code></td>
<td>\u6839\u636E\u8DEF\u5F84\u83B7\u53D6\u8868\u5355\u5143\u7D20\u5F53\u524D\u503C</td>
<td><code>any</code></td>
</tr>
<tr>
<td><code>setValue</code></td>
<td>\u6839\u636E\u8DEF\u5F84\u8BBE\u7F6E\u67D0\u4E2A\u8868\u5355\u5143\u7D20\u5C5E\u6027\u503C\uFF0C\u82E5\u8DEF\u5F84\u4E0D\u5B58\u5728\u4F1A\u4EA7\u751F\u5F02\u5E38</td>
<td><code>this</code></td>
</tr>
<tr>
<td><code>setDisabled</code></td>
<td>\u6839\u636E\u8DEF\u5F84\u8BBE\u7F6E\u67D0\u4E2A\u8868\u5355\u5143\u7D20 <code>disabled</code> \u503C\uFF0C\u82E5\u8DEF\u5F84\u4E0D\u5B58\u5728\u4F1A\u4EA7\u751F\u5F02\u5E38</td>
<td><code>this</code></td>
</tr>
<tr>
<td><code>setRequired</code></td>
<td>\u6839\u636E\u8DEF\u5F84\u8BBE\u7F6E\u67D0\u4E2A\u8868\u5355\u5143\u7D20 <code>required</code> \u503C\uFF0C\u82E5\u8DEF\u5F84\u4E0D\u5B58\u5728\u4F1A\u4EA7\u751F\u5F02\u5E38</td>
<td><code>this</code></td>
</tr>
<tr>
<td><code>updateFeedback</code></td>
<td>\u6839\u636E\u8DEF\u5F84\u8BBE\u7F6E\u67D0\u4E2A\u8868\u5355\u5143\u7D20\u53CD\u9988\u72B6\u6001</td>
<td><code>this</code></td>
</tr>
</tbody></table>
<blockquote>
<p><strong>\u6CE8\uFF1A</strong> \u6240\u6709 path \u91C7\u7528 <code>/</code> \u6765\u5206\u9694\uFF0C\u4F8B\u5982\uFF1A<code>/user/name</code>\u3001<code>/arr/0/name</code>\u3002</p>
</blockquote>
<h3 id="\u6309\u94AE\u8BF4\u660E"><a class="lake-link"><i data-anchor="\u6309\u94AE\u8BF4\u660E"></i></a>\u6309\u94AE\u8BF4\u660E</h3><p><strong>\u6CE8\u610F\u4E8B\u9879</strong></p>
<ul>
<li>\u503C\u4E3A <code>null</code> \u6216 <code>undefined</code> \u8868\u793A\u624B\u52A8\u6DFB\u52A0\u6309\u94AE\uFF0C\u4F46\u4FDD\u7559\u5BB9\u5668</li>
<li>\u503C\u4E3A <code>none</code> \u8868\u793A\u624B\u52A8\u6DFB\u52A0\u6309\u94AE\uFF0C\u4E14\u4E0D\u4FDD\u7559\u5BB9\u5668</li>
<li>\u4F7F\u7528 <code>spanLabelFixed</code> \u56FA\u5B9A\u6807\u7B7E\u5BBD\u5EA6\u65F6\uFF0C\u82E5\u65E0 <code>render.class</code> \u5219\u9ED8\u8BA4\u4E3A\u5C45\u4E2D\u72B6\u6001</li>
</ul>
<p><strong>\u81EA\u5B9A\u4E49</strong></p>
<p>\u5F53\u4F60\u5E0C\u671B\u81EA\u5B9A\u4E49\u6309\u94AE\u65F6\uFF0C\u52A1\u5FC5\u8BBE\u7F6E <code>button</code> \u503C\u4E3A <code>null</code>\u3002</p>
<pre><code class="language-html">&lt;sf #sf [button]=&quot;null&quot;&gt;
  &lt;button type=&quot;submit&quot; nz-button [disabled]=&quot;!sf.valid&quot;&gt;\u4FDD\u5B58&lt;/button&gt;
  &lt;button (click)=&quot;sf.reset()&quot; type=&quot;button&quot; nz-button&gt;\u91CD\u7F6E&lt;/button&gt;
&lt;/sf&gt;
</code></pre>
<h2 id="\u5E38\u89C1\u95EE\u9898"><a class="lake-link"><i data-anchor="\u5E38\u89C1\u95EE\u9898"></i></a>\u5E38\u89C1\u95EE\u9898</h2><h3 id="mode\u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F"><a class="lake-link"><i data-anchor="mode\u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F"></i></a>mode\u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F</h3><p><code>mode</code> \u53EA\u662F\u5FEB\u6377\u4F5C\u7528\uFF0C<strong>\u4E14\u4F18\u5148\u7EA7\u9AD8\u4E8E\u4E00\u5207</strong>\uFF0C\u89C4\u5219\u5982\u4E0B\uFF1A</p>
<ul>
<li><code>default</code> \u9ED8\u8BA4\u6A21\u5F0F\uFF0C\u4EC0\u4E48\u4E5F\u4E0D\u505A</li>
<li><code>search</code> \u641C\u7D22\u6A21\u5F0F\uFF0C\u81EA\u52A8\u8BBE\u7F6E <code>layout: inline</code>\u3001<code>firstVisual: false</code>\u3001<code>liveValidate: false</code>\u3001<code>button.submit: &#39;\u641C\u7D22&#39;</code></li>
<li><code>edit</code> \u7F16\u8F91\u6A21\u5F0F\uFF0C\u81EA\u52A8\u8BBE\u7F6E <code>layout: horizontal</code>\u3001<code>firstVisual: false</code>\u3001<code>liveValidate: true</code>\u3001<code>button.submit: &#39;\u4FDD\u5B58&#39;</code></li>
</ul>
<h3 id="schema\u56FD\u9645\u5316"><a class="lake-link"><i data-anchor="schema\u56FD\u9645\u5316"></i></a>Schema\u56FD\u9645\u5316</h3><p><code>sf</code> \u5E76\u4E0D\u652F\u6301\u4EFB\u4F55 Schema \u56FD\u9645\u5316\u52A8\u4F5C\uFF0C\u8FD9\u662F\u56E0\u4E3A\u672C\u8EAB Schema \u662F\u4E00\u7EC4 JSON \u503C\uFF0C\u56FD\u9645\u5316\u7684\u5B9E\u73B0\u53EA\u9700\u8981\u63D0\u4F9B\u4E0D\u540C\u8BED\u8A00\u7248\u672C\u5373\u53EF\u3002</p>
`,toc:[{id:"\u7279\u6027",title:"\u7279\u6027"},{id:"\u5982\u4F55\u9605\u8BFB",title:"\u5982\u4F55\u9605\u8BFB"},{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528"},{id:"api",title:"API",children:[{id:"sf",title:"sf"},{id:"sfbutton",title:"SFButton"},{id:"sfvaluechange",title:"SFValueChange"},{id:"\u7EC4\u4EF6\u65B9\u6CD5",title:"\u7EC4\u4EF6\u65B9\u6CD5"},{id:"\u6309\u94AE\u8BF4\u660E",title:"\u6309\u94AE\u8BF4\u660E"}]},{id:"\u5E38\u89C1\u95EE\u9898",title:"\u5E38\u89C1\u95EE\u9898",children:[{id:"mode\u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F",title:"mode\u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F"},{id:"schema\u56FD\u9645\u5316",title:"Schema\u56FD\u9645\u5316"}]}],raw:"---\norder: 1\ntitle: \u5F00\u59CB\u4F7F\u7528\ntype: Documents\n---\n\n@delon/form \u662F\u4E00\u4E2A\u57FA\u4E8E [JSON Schema](http://json-schema.org/) \u6807\u51C6\u7684\u52A8\u6001\u6784\u5EFA\u8868\u5355\u3002\n\n## \u7279\u6027\n\n- \u7B26\u5408 JSON Schema \u6807\u51C6\n- \u57FA\u4E8E ng-zorro-antd \u57FA\u7840\u7EC4\u4EF6\u5E93\n- \u79C9\u627F Ant Design \u4EF7\u503C\u89C2\n- \u4E8C\u5341\u51E0\u79CD\u5C0F\u90E8\u4EF6\n- \u53EF\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6\u6EE1\u8DB3\u4E1A\u52A1\u9700\u6C42\n- \u65E0\u4EFB\u4F55\u7B2C\u4E09\u65B9\u4F9D\u8D56\uFF0C\u53EF\u9002\u7528\u6240\u6709 antd \u9879\u76EE\n\n## \u5982\u4F55\u9605\u8BFB\n\n\u5728\u5F00\u59CB\u4E4B\u524D\u9700\u8981\u77E5\u9053\u6587\u6863\u7684\u4E00\u4E9B\u7B80\u5355\u7F16\u5199\u89C4\u5219\uFF1A\n\n- \u4EE3\u7801\u4EE5 `schema.` \u5F00\u5934\u7684\u8868\u793A JSON Schema \u5BF9\u8C61\u5C5E\u6027\n- \u4EE3\u7801\u4EE5 `ui.` \u5F00\u5934\u7684\u8868\u793A UI \u5BF9\u8C61\u5C5E\u6027\n- \u90E8\u5206\u5C0F\u90E8\u4EF6\u6570\u636E\u6E90\u5206\u4E3A **\u9759\u6001** \u548C **\u5B9E\u65F6** \u4E24\u7C7B\n  - **\u9759\u6001** \u7406\u89E3\u4E3A `schema.enum` \u503C\uFF0C\u662F\u7B26\u5408 JSON Schema \u6807\u51C6\uFF0C\u4E14\u9650\u6570\u7EC4\u683C\u5F0F `any[]`\n  - **\u5B9E\u65F6** \u7406\u89E3\u4E3A `ui.asyncData` \u503C\uFF0C\u975E JSON Schema \u6807\u51C6\uFF0C\u683C\u5F0F `(input?: any) => Observable<SFSchemaEnumType[]>`\n\n## \u5982\u4F55\u4F7F\u7528\n\n\u5B89\u88C5 `@delon/form` \u4F9D\u8D56\u5305\uFF1A\n\n```bash\nnpm i -S @delon/form\n```\n\n\u5BFC\u5165 `DelonFormModule` \u6A21\u5757\uFF1A\n\n```typescript\nimport { DelonFormModule } from '@delon/form';\n\n@NgModule({\n  imports: [\n    DelonFormModule.forRoot()\n  ]\n})\nexport class AppModule { }\n```\n\n\u867D\u7136\u9ED8\u8BA4 `@delon/form` \u6821\u9A8C\u662F [ajv](https://ajv.js.org/)\uFF0C\u4F46\u8FD9\u5E76\u4E0D\u662F\u552F\u4E00\u7684\u9009\u62E9\uFF0C\u4F60\u53EF\u4EE5\u8986\u76D6 `SchemaValidatorFactory` \u4F7F\u7528\u5176\u4ED6\u6821\u9A8C\u7C7B\u5E93\u3002\n\n**\u5168\u5C40\u914D\u7F6E**\n\n\u8BF7\u53C2\u8003[\u5168\u5C40\u914D\u7F6E](/docs/global-config)\uFF0C\u6210\u5458\u5982\u4E0B\uFF1A\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[ajv]` | [ajv](https://github.com/ajv-validator/ajv/blob/master/docs/api.md#options) \u53C2\u6570 | `Ajv.Options` | - |\n| `[ingoreKeywords]` | \u662F\u5426\u5FFD\u7565\u67D0\u4E9B\u6570\u636E\u7C7B\u578B\u6821\u9A8C\uFF08[\u6240\u6709\u7C7B\u578B](https://github.com/ng-alain/delon/blob/master/packages/form/src/errors.ts#L4)\uFF09 | `string[]` | `[ 'type', 'enum' ]` |\n| `[liveValidate]` | \u662F\u5426\u5B9E\u65F6\u6821\u9A8C | `boolean` | `true` |\n| `[autocomplete]` | \u6307\u5B9A\u8868\u5355 `autocomplete` \u503C | `on,off` | `null` |\n| `[firstVisual]` | \u662F\u5426\u7ACB\u5373\u5448\u73B0\u9519\u8BEF\u89C6\u89C9 | `boolean` | `false` |\n| `[onlyVisual]` | \u662F\u5426\u53EA\u5C55\u793A\u9519\u8BEF\u89C6\u89C9\u4E0D\u663E\u793A\u9519\u8BEF\u6587\u672C\uFF0C\u5E76\u53D6\u6D88\u9519\u8BEF\u6587\u672C\u95F4\u8DDD | `boolean` | `false` |\n| `[errors]` | \u81EA\u5B9A\u4E49\u901A\u7528\u9519\u8BEF\u4FE1\u606F | `{ [ key: string ]: string }` | `ERRORSDEFAULT` |\n| `[ui]` | \u9ED8\u8BA4\u5168\u5C40\u5E03\u5C40 | `SFUISchemaItem` | - |\n| `[size]` | \u5143\u7D20\u7EC4\u4EF6\u5927\u5C0F\uFF0C\u7528\u4E8E `nzSize` \u503C | `default,large,small` | - |\n| `[button]` | \u6309\u94AE\u98CE\u683C | `SFButton` | `{submit:'\u63D0\u4EA4',submit_type:'primary',reset:'\u91CD\u7F6E',reset_type:'default'}` |\n| `[uiDateStringFormat]` | date\u5C0F\u90E8\u4EF6\uFF1A`type=\"string\"` \u4E14\u4E0D\u6307\u5B9A `schema.format` \u548C `ui.format` \u65F6\u65E5\u671F\u683C\u5F0F | `string` | `yyyy-MM-dd HH:mm:ss` |\n| `[uiDateNumberFormat]` | date\u5C0F\u90E8\u4EF6\uFF1A`type=\"number\"` \u4E14\u4E0D\u6307\u5B9A `schema.format` \u548C `ui.format` \u65F6\u65E5\u671F\u683C\u5F0F\uFF0C\u9ED8\u8BA4\uFF1A`T` 13\u4F4DUnix Timestamp | `string` | `T` |\n| `[uiTimeStringFormat]` | time\u5C0F\u90E8\u4EF6\uFF1A`type=\"string\"` \u4E14\u4E0D\u6307\u5B9A `schema.format` \u548C `ui.format` \u65F6\u65E5\u671F\u683C\u5F0F | `string` | `HH:mm:ss` |\n| `[uiTimeNumberFormat]` | time\u5C0F\u90E8\u4EF6\uFF1A`type=\"number\"` \u4E14\u4E0D\u6307\u5B9A `schema.format` \u548C `ui.format` \u65F6\u65E5\u671F\u683C\u5F0F\uFF0C\u9ED8\u8BA4\uFF1A`T` 13\u4F4DUnix Timestamp\uFF0C\u65E5\u671F\u7EDF\u4E00\u4F7F\u7528 `1970-01-01` | `string` | `T` |\n| `[uiEmailSuffixes]` | \u6307\u5B9A `format: 'email'` \u7684\u9ED8\u8BA4Email\u540E\u7F00 | `string[]` | `['qq.com', '163.com', 'gmail.com', '126.com', 'aliyun.com']` |\n| `[delay]` | \u662F\u5426\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u9700\u8981\u624B\u52A8\u8C03\u7528 `refreshSchema()` | `boolean` | `false` |\n\n\u6784\u5EFA\u4E00\u4E2A\u90AE\u7BB1\u3001\u59D3\u540D\u8868\u5355\uFF1A\n\n```ts\n@Component({\n  selector: 'app-home',\n  template: `\n  <sf [schema]=\"schema\" (formSubmit)=\"submit($event)\"></sf>\n  `\n})\nexport class HomeComponent {\n  schema: SFSchema = {\n    properties: {\n      email: {\n        type: 'string',\n        title: '\u90AE\u7BB1',\n        format: 'email',\n        maxLength: 20\n      },\n      name: {\n        type: 'string',\n        title: '\u59D3\u540D',\n        minLength: 3\n      }\n    }\n  };\n\n  submit(value: any) { }\n}\n```\n\n## API\n\n### sf\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[layout]` | \u8868\u5355\u5E03\u5C40\uFF0C\u7B49\u540C `nzLayout` | `'horizontal','vertical','inline'` | `'horizontal'` |\n| `[schema]` | **\u5FC5\u586B\u9879** JSON Schema | `SFSchema` | - |\n| `[ui]` | UI Schema | `SFUISchema` | - |\n| `[formData]` | \u8868\u5355\u9ED8\u8BA4\u503C | `any` | - |\n| `[mode]` | \u8868\u5355\u6A21\u5F0F\uFF0C\u7EC6\u8282\u89C1\u5E38\u89C1\u95EE\u9898 | `'default','search','edit'` | `'default'` |\n| `[button]` | \u6309\u94AE | `SFButton|'none'` | `{}` |\n| `[firstVisual]` | \u662F\u5426\u7ACB\u5373\u5448\u73B0\u9519\u8BEF\u89C6\u89C9 | `boolean` | `true` |\n| `[liveValidate]` | \u662F\u5426\u5B9E\u65F6\u6821\u9A8C\uFF0C`false` \u63D0\u4EA4\u65F6\u68C0\u9A8C | `boolean` | `true` |\n| `[autocomplete]` | \u6307\u5B9A\u8868\u5355 `autocomplete` \u503C | `'on','off'` | `null` |\n| `[disabled]` | \u662F\u5426\u7981\u7528\u72B6\u6001 | `boolean` | `false` |\n| `[loading]` | \u662F\u5426\u52A0\u8F7D\u72B6\u6001\uFF0C\u5F53 `true` \u91CD\u7F6E\u6309\u94AE\u7981\u6B62\u72B6\u6001\uFF0C\u63D0\u4EA4\u6309\u94AE\u52A0\u8F7D\u72B6\u6001 | `boolean` | `false` |\n| `[noColon]` | \u662F\u5426\u4E0D\u663E\u793A `label` \u540E\u9762\u7684\u5192\u53F7 | `boolean` | `false` |\n| `[compact]` | \u662F\u5426\u7D27\u51D1 | `boolean` | `false` |\n| `[expandable]` | \u662F\u5426\u542F\u7528\u5C55\u5F00/\u6536\u7F29\u529F\u80FD | `boolean` | `false` |\n| `[expanded]` | \u5C55\u5F00/\u6536\u7F29\u72B6\u6001\uFF0C\u652F\u6301\u53CC\u5411\u7ED1\u5B9A | `boolean` | `false` |\n| `[cleanValue]` | \u662F\u5426\u6E05\u7406\u672A\u5B9A\u4E49 Schema \u7684\u6570\u636E | `boolean` | `false` |\n| `[delay]` | \u662F\u5426\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u9700\u8981\u624B\u52A8\u8C03\u7528 `refreshSchema()` | `boolean` | `false` |\n| `(formChange)` | \u6570\u636E\u53D8\u66F4\u65F6\u56DE\u8C03 | `EventEmitter<{}>` | - |\n| `(formValueChange)` | \u503C\u6570\u636E\u53D8\u66F4\u65F6\u56DE\u8C03 | `EventEmitter<SFValueChange>` | - |\n| `(formSubmit)` | \u63D0\u4EA4\u8868\u5355\u65F6\u56DE\u8C03 | `EventEmitter<{}>` | - |\n| `(formReset)` | \u91CD\u7F6E\u8868\u5355\u65F6\u56DE\u8C03 | `EventEmitter<{}>` | - |\n| `(formError)` | \u8868\u5355\u6821\u9A8C\u7ED3\u679C\u56DE\u8C03 | `EventEmitter<ErrorData[]>` | - |\n\n### SFButton\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[submit]` | \u63D0\u4EA4\u6309\u94AE\u6587\u672C | `string` | `\u63D0\u4EA4` |\n| `[submit_type]` | \u63D0\u4EA4\u6309\u94AE\u7C7B\u578B | `string` | `primary` |\n| `[submit_icon]` | \u63D0\u4EA4\u6309\u94AE\u56FE\u6807 | `SFButtonIcon` | - |\n| `[reset]` | \u91CD\u7F6E\u6309\u94AE\u6587\u672C | `string` | `\u91CD\u7F6E` |\n| `[reset_type]` | \u91CD\u7F6E\u6309\u94AE\u7C7B\u578B | `string` | `default` |\n| `[reset_icon]` | \u91CD\u7F6E\u6309\u94AE\u56FE\u6807 | `SFButtonIcon` | - |\n| `[search]` | \u641C\u7D22\u6309\u94AE\u6587\u672C | `string` | `\u641C\u7D22` |\n| `[edit]` | \u7F16\u8F91\u6309\u94AE\u6587\u672C | `string` | `\u4FDD\u5B58` |\n| `[render]` | \u6309\u94AE\u6837\u5F0F | `SFRenderButton` | - |\n\n### SFValueChange\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----------|-------------|------|---------|\n| `[value]` | \u603B\u662F\u8FD4\u56DE\u5B8C\u6574\u7684\u6570\u636E | `SFValue` | - |\n| `[path]` | \u5F53\u524D\u89E6\u53D1\u8DEF\u5F84 | `string, null` | `null` |\n| `[pathValue]` | \u5F53\u524D\u89E6\u53D1\u8DEF\u5F84\u5BF9\u5E94\u503C | `SFValue` | - |\n\n### \u7EC4\u4EF6\u65B9\u6CD5\n\n| \u53C2\u6570 | \u8BF4\u660E | \u8FD4\u56DE\u503C |\n|----|----|-----|\n| `valid` | \u8868\u5355\u662F\u5426\u6709\u6548 | `boolean` |\n| `value` | \u8868\u5355\u503C | `any` |\n| `refreshSchema` | \u5237\u65B0 JSON Schema | `void` |\n| `reset` | \u91CD\u7F6E\u8868\u5355 | `void` |\n| `validator` | \u624B\u52A8\u6821\u9A8C\u4E00\u6B21\u8868\u5355 | `void` |\n| `getProperty` | \u6839\u636E\u8DEF\u5F84\u83B7\u53D6\u8868\u5355\u5143\u7D20\u5C5E\u6027 | `FormProperty` |\n| `getValue` | \u6839\u636E\u8DEF\u5F84\u83B7\u53D6\u8868\u5355\u5143\u7D20\u5F53\u524D\u503C | `any` |\n| `setValue` | \u6839\u636E\u8DEF\u5F84\u8BBE\u7F6E\u67D0\u4E2A\u8868\u5355\u5143\u7D20\u5C5E\u6027\u503C\uFF0C\u82E5\u8DEF\u5F84\u4E0D\u5B58\u5728\u4F1A\u4EA7\u751F\u5F02\u5E38 | `this` |\n| `setDisabled` | \u6839\u636E\u8DEF\u5F84\u8BBE\u7F6E\u67D0\u4E2A\u8868\u5355\u5143\u7D20 `disabled` \u503C\uFF0C\u82E5\u8DEF\u5F84\u4E0D\u5B58\u5728\u4F1A\u4EA7\u751F\u5F02\u5E38 | `this` |\n| `setRequired` | \u6839\u636E\u8DEF\u5F84\u8BBE\u7F6E\u67D0\u4E2A\u8868\u5355\u5143\u7D20 `required` \u503C\uFF0C\u82E5\u8DEF\u5F84\u4E0D\u5B58\u5728\u4F1A\u4EA7\u751F\u5F02\u5E38 | `this` |\n| `updateFeedback` | \u6839\u636E\u8DEF\u5F84\u8BBE\u7F6E\u67D0\u4E2A\u8868\u5355\u5143\u7D20\u53CD\u9988\u72B6\u6001 | `this` |\n\n> **\u6CE8\uFF1A** \u6240\u6709 path \u91C7\u7528 `/` \u6765\u5206\u9694\uFF0C\u4F8B\u5982\uFF1A`/user/name`\u3001`/arr/0/name`\u3002\n\n### \u6309\u94AE\u8BF4\u660E\n\n**\u6CE8\u610F\u4E8B\u9879**\n\n- \u503C\u4E3A `null` \u6216 `undefined` \u8868\u793A\u624B\u52A8\u6DFB\u52A0\u6309\u94AE\uFF0C\u4F46\u4FDD\u7559\u5BB9\u5668\n- \u503C\u4E3A `none` \u8868\u793A\u624B\u52A8\u6DFB\u52A0\u6309\u94AE\uFF0C\u4E14\u4E0D\u4FDD\u7559\u5BB9\u5668\n- \u4F7F\u7528 `spanLabelFixed` \u56FA\u5B9A\u6807\u7B7E\u5BBD\u5EA6\u65F6\uFF0C\u82E5\u65E0 `render.class` \u5219\u9ED8\u8BA4\u4E3A\u5C45\u4E2D\u72B6\u6001\n\n**\u81EA\u5B9A\u4E49**\n\n\u5F53\u4F60\u5E0C\u671B\u81EA\u5B9A\u4E49\u6309\u94AE\u65F6\uFF0C\u52A1\u5FC5\u8BBE\u7F6E `button` \u503C\u4E3A `null`\u3002\n\n```html\n<sf #sf [button]=\"null\">\n  <button type=\"submit\" nz-button [disabled]=\"!sf.valid\">\u4FDD\u5B58</button>\n  <button (click)=\"sf.reset()\" type=\"button\" nz-button>\u91CD\u7F6E</button>\n</sf>\n```\n\n## \u5E38\u89C1\u95EE\u9898\n\n### mode\u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F\n\n`mode` \u53EA\u662F\u5FEB\u6377\u4F5C\u7528\uFF0C**\u4E14\u4F18\u5148\u7EA7\u9AD8\u4E8E\u4E00\u5207**\uFF0C\u89C4\u5219\u5982\u4E0B\uFF1A\n\n- `default` \u9ED8\u8BA4\u6A21\u5F0F\uFF0C\u4EC0\u4E48\u4E5F\u4E0D\u505A\n- `search` \u641C\u7D22\u6A21\u5F0F\uFF0C\u81EA\u52A8\u8BBE\u7F6E `layout: inline`\u3001`firstVisual: false`\u3001`liveValidate: false`\u3001`button.submit: '\u641C\u7D22'`\n- `edit` \u7F16\u8F91\u6A21\u5F0F\uFF0C\u81EA\u52A8\u8BBE\u7F6E `layout: horizontal`\u3001`firstVisual: false`\u3001`liveValidate: true`\u3001`button.submit: '\u4FDD\u5B58'`\n\n### Schema\u56FD\u9645\u5316\n\n`sf` \u5E76\u4E0D\u652F\u6301\u4EFB\u4F55 Schema \u56FD\u9645\u5316\u52A8\u4F5C\uFF0C\u8FD9\u662F\u56E0\u4E3A\u672C\u8EAB Schema \u662F\u4E00\u7EC4 JSON \u503C\uFF0C\u56FD\u9645\u5316\u7684\u5B9E\u73B0\u53EA\u9700\u8981\u63D0\u4F9B\u4E0D\u540C\u8BED\u8A00\u7248\u672C\u5373\u53EF\u3002"}}};codes=[];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-getting-started"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&m(0,"app-docs",0),e&2&&d("codes",t.codes)("item",t.item)},dependencies:[S],encapsulation:2})};var ae=class o{item={name:"layout",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:5,title:"Layout",description:"@delon/form layout is based on Ant Design Grid system, and layout parameters are determined by SFSchema Reder Type.There are three types of form layou...",group:"Documents",path:"packages/form/docs/layout.en-US.md",url:"/form/layout/en"},text:`<p>&#64;delon/form layout is based on Ant Design <a href="https://ng.ant.design/components/grid/en" target="_blank" rel="noopener">Grid</a> system, and layout parameters are determined by SFSchema <a href="/form/schema/en#Render-Type">Reder Type</a>.</p>
<p>There are three types of form layout: inline, vertical and horizontal(default), it is determined by <a href="/form/getting-started/en#API">layout</a>.</p>
<h2 id="type"><a class="lake-link"><i data-anchor="type"></i></a>Type</h2><h3 id="inline"><a class="lake-link"><i data-anchor="inline"></i></a>Inline</h3><p>Form elements are arranged inline horizontally, usually, it is used for simple search box.</p>
<p>The width of form element is determined by the width of component itself, you can adjust width by setting <code>width</code> parameter, for example, width of widget <code>select</code> would be very small if no <code>width</code> has been set.</p>
<blockquote>
<p>You can also set <a href="/form/getting-started/en#What-is-mode">mode</a> to <code>search</code>, which is a fast way to set widget to search mode.</p>
</blockquote>
<h3 id="vertical"><a class="lake-link"><i data-anchor="vertical"></i></a>Vertical</h3><p>Label and form elements are arranged vertically.</p>
<h3 id="horizontal"><a class="lake-link"><i data-anchor="horizontal"></i></a>Horizontal</h3><p>Label and form elements are arranged horizontally, usually, it is used on edit page.</p>
<p>Horizontal is more complicated than vertical, because responsive would be involved, the number of grid of each form element is determined by <a href="/form/schema/en#Responsive-Property-SFGridSchema">grid</a>.</p>
<blockquote>
<p>You can also set <a href="/form/getting-started/en#What-is-mode">mode</a> to <code>edit</code>, which is a fast way to set widget to edit mode.</p>
</blockquote>
<p><strong>Non-responsive</strong></p>
<p>You only need to maintain <code>span</code> attribute when it is non-responsive.</p>
<p><strong>Responsive</strong></p>
<p>Responsive is based on <code>xs</code>\u3001<code>sm</code>\u3001<code>md</code>\u3001<code>lg</code>\u3001<code>xl</code>\u3001<code>xxl</code> to determine how many grids for different size of screens, notes:</p>
<ul>
<li>There are <code>24</code> grids each row</li>
<li>Set value to <code>12</code> if there are two form elements on the same row</li>
<li><code>&#123; sm: 24, md: 12 &#125;</code> will put two form elements on the same row when screen size is <code>\u2265992px</code>, and each form element on one row when screen size is <code>&lt;992px</code></li>
</ul>
<h2 id="irregular_layout"><a class="lake-link"><i data-anchor="irregular_layout"></i></a>Irregular Layout</h2><p>Of course, it is impossible to always have fixed number of form elements, it is possible that one form element occupies a whole row, because of grid system, it will cause another issue: <strong>labels cannot be aligned</strong>, sf provides a solution, fix the width of all labels by <code>spanLabelFixed</code> attribute, for example:</p>
<pre><code class="language-json">&#123;
  &quot;properties&quot;: &#123;
    &quot;email&quot;: &#123;
      &quot;type&quot;: &quot;string&quot;,
      &quot;title&quot;: &quot;Email&quot;,
      &quot;format&quot;: &quot;email&quot;
    &#125;,
    &quot;name&quot;: &#123;
      &quot;type&quot;: &quot;string&quot;,
      &quot;title&quot;: &quot;Name&quot;,
      &quot;minLength&quot;: 5
    &#125;,
    &quot;remark&quot;: &#123;
      &quot;type&quot;: &quot;string&quot;,
      &quot;title&quot;: &quot;Description&quot;,
      &quot;ui&quot;: &#123;
        &quot;widget&quot;: &quot;textarea&quot;,
        &quot;autosize&quot;: true,
        &quot;grid&quot;: &#123;
            &quot;span&quot;: 24
        &#125;
      &#125;
    &#125;
  &#125;,
  &quot;ui&quot;: &#123;
    &quot;spanLabelFixed&quot;: 100,
    &quot;grid&quot;: &#123;
      &quot;span&quot;: 12
    &#125;
  &#125;
&#125;
</code></pre>
<h2 id="button"><a class="lake-link"><i data-anchor="button"></i></a>Button</h2><p>Button rendering has same layout and parameters with form element, you can adjust rendering style by setting <a href="/form/getting-started/en#SFButton">SFButton</a> attributes.</p>
<p><strong>Notes</strong></p>
<ul>
<li>It means adding button manually but reserve container when the value is <code>null</code> or <code>undefined</code></li>
<li>It means adding button manually but do not reserve container when the value is <code>none</code></li>
<li>When using <code>spanLabelFixed</code> to set fixed width of label, the position is centered by default if no <code>render.class</code> is set</li>
</ul>
<p><strong>Customization</strong></p>
<p>You must set value of <code>button</code> to <code>null</code> when you want to customize buttons.</p>
<pre><code class="language-html">&lt;sf #sf [button]=&quot;null&quot;&gt;
  &lt;button type=&quot;submit&quot; nz-button [disabled]=&quot;!sf.valid&quot;&gt;Save&lt;/button&gt;
  &lt;button (click)=&quot;sf.reset()&quot; type=&quot;button&quot; nz-button&gt;Reset&lt;/button&gt;
&lt;/sf&gt;
</code></pre>
<h2 id="expand_andamp;_collapse"><a class="lake-link"><i data-anchor="expand_andamp;_collapse"></i></a>Expand &amp; Collapse</h2><p>When the form has too many fields, you can mark less important fields as collapsible and use the expand/collapse button to toggle visibility.</p>
<p><strong>Usage</strong></p>
<p>Mark fields with <code>ui.collapse = true</code>:</p>
<pre><code class="language-json">&#123;
  &quot;properties&quot;: &#123;
    &quot;name&quot;: &#123; &quot;type&quot;: &quot;string&quot;, &quot;title&quot;: &quot;Name&quot; &#125;,
    &quot;email&quot;: &#123; &quot;type&quot;: &quot;string&quot;, &quot;title&quot;: &quot;Email&quot; &#125;,
    &quot;nickname&quot;: &#123;
      &quot;type&quot;: &quot;string&quot;,
      &quot;title&quot;: &quot;Nickname&quot;,
      &quot;ui&quot;: &#123; &quot;collapse&quot;: true &#125;
    &#125;,
    &quot;bio&quot;: &#123;
      &quot;type&quot;: &quot;string&quot;,
      &quot;title&quot;: &quot;Bio&quot;,
      &quot;ui&quot;: &#123; &quot;collapse&quot;: true &#125;
    &#125;
  &#125;
&#125;
</code></pre>
<p>Enable <code>expandable</code> on the <code>sf</code> component:</p>
<pre><code class="language-html">&lt;sf [schema]=&quot;schema&quot; [expandable]=&quot;true&quot;&gt;&lt;/sf&gt;
</code></pre>
<p>The expand/collapse button will automatically appear alongside the submit/reset buttons. It is only visible when the form has at least one <code>collapse</code> field.</p>
<p>Button text supports i18n with default values <code>Expand</code> / <code>Collapse</code>. You can also control the state externally via <code>[(expanded)]</code> two-way binding:</p>
<pre><code class="language-html">&lt;sf [schema]=&quot;schema&quot; [expandable]=&quot;true&quot; [(expanded)]=&quot;isExpanded&quot;&gt;&lt;/sf&gt;
</code></pre>
<p><strong>Note:</strong> <code>expandable</code> and <code>collapse</code> are UI-level controls, independent of the field&#39;s <code>required</code> logic.</p>
`,api:"",toc:[{id:"type",title:"Type",children:[{id:"inline",title:"Inline"},{id:"vertical",title:"Vertical"},{id:"horizontal",title:"Horizontal"}]},{id:"irregular_layout",title:"Irregular Layout"},{id:"button",title:"Button"},{id:"expand_and_collapse",title:"Expand & Collapse"}],raw:`---
order: 5
title: Layout
type: Documents
---

@delon/form layout is based on Ant Design [Grid](https://ng.ant.design/components/grid/en) system, and layout parameters are determined by SFSchema [Reder Type](/form/schema/en#Render-Type).

There are three types of form layout: inline, vertical and horizontal(default), it is determined by [layout](/form/getting-started/en#API).

## Type

### Inline

Form elements are arranged inline horizontally, usually, it is used for simple search box.

The width of form element is determined by the width of component itself, you can adjust width by setting \`width\` parameter, for example, width of widget \`select\` would be very small if no \`width\` has been set.

> You can also set [mode](/form/getting-started/en#What-is-mode) to \`search\`, which is a fast way to set widget to search mode.

### Vertical

Label and form elements are arranged vertically.

### Horizontal

Label and form elements are arranged horizontally, usually, it is used on edit page.

Horizontal is more complicated than vertical, because responsive would be involved, the number of grid of each form element is determined by [grid](/form/schema/en#Responsive-Property-SFGridSchema).

> You can also set [mode](/form/getting-started/en#What-is-mode) to \`edit\`, which is a fast way to set widget to edit mode.

**Non-responsive**

You only need to maintain \`span\` attribute when it is non-responsive.

**Responsive**

Responsive is based on \`xs\`\u3001\`sm\`\u3001\`md\`\u3001\`lg\`\u3001\`xl\`\u3001\`xxl\` to determine how many grids for different size of screens, notes:

- There are \`24\` grids each row
- Set value to \`12\` if there are two form elements on the same row
- \`{ sm: 24, md: 12 }\` will put two form elements on the same row when screen size is \`\u2265992px\`, and each form element on one row when screen size is \`<992px\`

## Irregular Layout

Of course, it is impossible to always have fixed number of form elements, it is possible that one form element occupies a whole row, because of grid system, it will cause another issue: **labels cannot be aligned**, sf provides a solution, fix the width of all labels by \`spanLabelFixed\` attribute, for example:

\`\`\`json
{
  "properties": {
    "email": {
      "type": "string",
      "title": "Email",
      "format": "email"
    },
    "name": {
      "type": "string",
      "title": "Name",
      "minLength": 5
    },
    "remark": {
      "type": "string",
      "title": "Description",
      "ui": {
        "widget": "textarea",
        "autosize": true,
        "grid": {
            "span": 24
        }
      }
    }
  },
  "ui": {
    "spanLabelFixed": 100,
    "grid": {
      "span": 12
    }
  }
}
\`\`\`

## Button

Button rendering has same layout and parameters with form element, you can adjust rendering style by setting [SFButton](/form/getting-started/en#SFButton) attributes.

**Notes**

- It means adding button manually but reserve container when the value is \`null\` or \`undefined\`
- It means adding button manually but do not reserve container when the value is \`none\`
- When using \`spanLabelFixed\` to set fixed width of label, the position is centered by default if no \`render.class\` is set

**Customization**

You must set value of \`button\` to \`null\` when you want to customize buttons.

\`\`\`html
<sf #sf [button]="null">
  <button type="submit" nz-button [disabled]="!sf.valid">Save</button>
  <button (click)="sf.reset()" type="button" nz-button>Reset</button>
</sf>
\`\`\`

## Expand & Collapse

When the form has too many fields, you can mark less important fields as collapsible and use the expand/collapse button to toggle visibility.

**Usage**

Mark fields with \`ui.collapse = true\`:

\`\`\`json
{
  "properties": {
    "name": { "type": "string", "title": "Name" },
    "email": { "type": "string", "title": "Email" },
    "nickname": {
      "type": "string",
      "title": "Nickname",
      "ui": { "collapse": true }
    },
    "bio": {
      "type": "string",
      "title": "Bio",
      "ui": { "collapse": true }
    }
  }
}
\`\`\`

Enable \`expandable\` on the \`sf\` component:

\`\`\`html
<sf [schema]="schema" [expandable]="true"></sf>
\`\`\`

The expand/collapse button will automatically appear alongside the submit/reset buttons. It is only visible when the form has at least one \`collapse\` field.

Button text supports i18n with default values \`Expand\` / \`Collapse\`. You can also control the state externally via \`[(expanded)]\` two-way binding:

\`\`\`html
<sf [schema]="schema" [expandable]="true" [(expanded)]="isExpanded"></sf>
\`\`\`

**Note:** \`expandable\` and \`collapse\` are UI-level controls, independent of the field's \`required\` logic.`},"zh-CN":{meta:{order:5,title:"\u5982\u4F55\u5E03\u5C40",description:"@delon/form \u5E03\u5C40\u662F\u57FA\u4E8E Grid \u6805\u683C\u7CFB\u7EDF\uFF0C\u800C SFSchema \u7684\u6E32\u67D3\u7C7B\u6765\u51B3\u5B9A\u5E03\u5C40\u53C2\u6570\u3002\u8868\u5355\u5E03\u5C40\u5206\u4E3A\u884C\u5185\u3001\u5782\u76F4\u3001\u6C34\u5E73\uFF08\u9ED8\u8BA4\uFF09\u4E09\u7C7B\uFF0C\u5B83\u7531 layout \u51B3\u5B9A\u3002\u8868\u5355\u9879\u6C34\u5E73\u884C\u5185\u6392\u5217\uFF0C\u4E00\u822C\u7528\u4E8E\u7B80\u5355\u641C\u7D22\u6846\u3002\u8868\u5355\u9879\u7684\u5BBD\u5EA6\u7531\u7EC4\u4EF6\u81EA\u8EAB\u6765\u51B3\u5B9A\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 width \u53C2\u6570\u6765\u8C03\u6574\u5176\u5927\u5C0F\uFF0C\u50CF\u5C0F\u90E8\u4EF6 sele...",group:"Documents",path:"packages/form/docs/layout.zh-CN.md",url:"/form/layout/zh"},text:`<p>&#64;delon/form \u5E03\u5C40\u662F\u57FA\u4E8E <a href="https://ng.ant.design/components/grid/zh" target="_blank" rel="noopener">Grid</a> \u6805\u683C\u7CFB\u7EDF\uFF0C\u800C SFSchema \u7684<a href="/form/schema/en#%E6%B8%B2%E6%9F%93%E7%B1%BB">\u6E32\u67D3\u7C7B</a>\u6765\u51B3\u5B9A\u5E03\u5C40\u53C2\u6570\u3002</p>
<p>\u8868\u5355\u5E03\u5C40\u5206\u4E3A\u884C\u5185\u3001\u5782\u76F4\u3001\u6C34\u5E73\uFF08\u9ED8\u8BA4\uFF09\u4E09\u7C7B\uFF0C\u5B83\u7531 <a href="/form/getting-started/zh#API">layout</a> \u51B3\u5B9A\u3002</p>
<h2 id="\u7C7B\u578B"><a class="lake-link"><i data-anchor="\u7C7B\u578B"></i></a>\u7C7B\u578B</h2><h3 id="\u884C\u5185"><a class="lake-link"><i data-anchor="\u884C\u5185"></i></a>\u884C\u5185</h3><p>\u8868\u5355\u9879\u6C34\u5E73\u884C\u5185\u6392\u5217\uFF0C\u4E00\u822C\u7528\u4E8E\u7B80\u5355\u641C\u7D22\u6846\u3002</p>
<p>\u8868\u5355\u9879\u7684\u5BBD\u5EA6\u7531\u7EC4\u4EF6\u81EA\u8EAB\u6765\u51B3\u5B9A\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>width</code> \u53C2\u6570\u6765\u8C03\u6574\u5176\u5927\u5C0F\uFF0C\u50CF\u5C0F\u90E8\u4EF6 <code>select</code> \u53EF\u80FD\u4F1A\u56E0\u4E3A\u672A\u8BBE\u7F6E\u9ED8\u8BA4\u503C\u5012\u7F6E\u5BBD\u5EA6\u6781\u5C0F\u3002</p>
<blockquote>
<p>\u53EF\u901A\u8FC7\u8BBE\u7F6E <a href="/form/getting-started/zh#mode%E6%9C%89%E4%BB%80%E4%B9%88%E4%BD%9C%E7%94%A8%EF%BC%9F">mode</a> \u53C2\u6570\u6765\u5FEB\u901F\u8BBE\u7F6E\u4E3A\u641C\u7D22\u6A21\u5F0F\u3002</p>
</blockquote>
<h3 id="\u5782\u76F4"><a class="lake-link"><i data-anchor="\u5782\u76F4"></i></a>\u5782\u76F4</h3><p>\u6807\u7B7E\u548C\u8868\u5355\u63A7\u4EF6\u4E0A\u4E0B\u5782\u76F4\u6392\u5217\u3002</p>
<h3 id="\u6C34\u5E73"><a class="lake-link"><i data-anchor="\u6C34\u5E73"></i></a>\u6C34\u5E73</h3><p>\u6807\u7B7E\u548C\u8868\u5355\u63A7\u4EF6\u6C34\u5E73\u6392\u5217\uFF0C\u4E00\u822C\u7528\u4E8E\u7F16\u8F91\u9875\u3002</p>
<p>\u6C34\u5E73\u7C7B\u578B\u76F8\u5BF9\u4E8E\u884C\u5185\u4E0E\u5782\u76F4\u66F4\u590D\u6742\u4E00\u70B9\uFF0C\u56E0\u4E3A\u4F1A\u6D89\u53CA\u54CD\u5E94\u5F0F\uFF0C\u51B3\u5B9A\u6BCF\u4E2A\u8868\u5355\u9879\u6240\u7AD9\u7684\u683C\u6570\u662F\u7531 <a href="/form/schema#%E5%93%8D%E5%BA%94%E5%BC%8F%E5%B1%9E%E6%80%A7-SFGridSchema">grid</a> \u5C5E\u6027\u6765\u51B3\u5B9A\u3002</p>
<blockquote>
<p>\u53EF\u901A\u8FC7\u8BBE\u7F6E <a href="/form/getting-started/zh#mode%E6%9C%89%E4%BB%80%E4%B9%88%E4%BD%9C%E7%94%A8%EF%BC%9F">mode</a> \u53C2\u6570\u6765\u5FEB\u901F\u8BBE\u7F6E\u4E3A\u7F16\u8F91\u6A21\u5F0F\u3002</p>
</blockquote>
<p><strong>\u975E\u54CD\u5E94\u5F0F</strong></p>
<p>\u975E\u54CD\u5E94\u5F0F\u65F6\u53EA\u9700\u8981\u7EF4\u62A4 <code>span</code> \u5C5E\u6027\u5373\u53EF\u3002</p>
<p><strong>\u54CD\u5E94\u5F0F</strong></p>
<p>\u54CD\u5E94\u5F0F\u662F\u6839\u636E <code>xs</code>\u3001<code>sm</code>\u3001<code>md</code>\u3001<code>lg</code>\u3001<code>xl</code>\u3001<code>xxl</code> \u6765\u51B3\u5B9A\u4E0D\u540C\u5C4F\u5E55\u65F6\u51B3\u5B9A\u8981\u5360\u7528\u51E0\u683C\uFF0C\u6709\u51E0\u4E2A\u6CE8\u610F\u70B9\uFF1A</p>
<ul>
<li>\u6BCF\u4E00\u884C\u53EA\u80FD\u6709 <code>24</code> \u683C</li>
<li>\u8868\u793A\u4E24\u4E2A\u8868\u5355\u9879\u5728\u540C\u4E00\u884C\uFF0C\u5219\u8BBE\u7F6E\u503C\u4E3A <code>12</code></li>
<li>\u8868\u793A\u5C4F\u5E55 <code>\u2265992px</code> \u65F6\u4E24\u4E2A\u8868\u5355\u9879\u5728\u540C\u4E00\u884C\uFF0C\u5C0F\u4E8E\u5219\u6BCF\u4E2A\u8868\u5355\u9879\u4E3A\u4E00\u884C\uFF0C\u5219\uFF1A<code>&#123; sm: 24, md: 12 &#125;</code></li>
</ul>
<h2 id="\u4E0D\u89C4\u5219\u5E03\u5C40"><a class="lake-link"><i data-anchor="\u4E0D\u89C4\u5219\u5E03\u5C40"></i></a>\u4E0D\u89C4\u5219\u5E03\u5C40</h2><p>\u5F53\u7136\uFF0C\u8868\u5355\u4E0D\u53EF\u80FD\u6BCF\u4E00\u884C\u90FD\u6709\u56FA\u5B9A\u8868\u5355\u9879\u6570\u91CF\uFF0C\u6709\u53EF\u80FD\u67D0\u4E2A\u8868\u5355\u9879\u4F1A\u5360\u7528\u4E00\u6574\u884C\uFF0C\u7531\u4E8E\u6805\u683C\u7CFB\u7EDF\u7684\u56E0\u7D20\uFF0C\u8FD9\u4F1A\u4EA7\u751F\u53E6\u4E00\u4E2A\u95EE\u9898\uFF1A<strong>\u6807\u7B7E\u65E0\u6CD5\u5BF9\u9F50</strong>\uFF0Csf \u63D0\u4F9B\u4E00\u79CD\u65B9\u6848\uFF0C\u5373\u56FA\u5B9A\u6240\u6709\u6807\u7B7E\u7684\u5BBD\u5EA6 <code>spanLabelFixed</code> \u5C5E\u6027\uFF0C\u4F8B\u5982\uFF1A</p>
<pre><code class="language-json">&#123;
  &quot;properties&quot;: &#123;
    &quot;email&quot;: &#123;
      &quot;type&quot;: &quot;string&quot;,
      &quot;title&quot;: &quot;\u90AE\u7BB1&quot;,
      &quot;format&quot;: &quot;email&quot;
    &#125;,
    &quot;name&quot;: &#123;
      &quot;type&quot;: &quot;string&quot;,
      &quot;title&quot;: &quot;\u59D3\u540D&quot;,
      &quot;minLength&quot;: 5
    &#125;,
    &quot;remark&quot;: &#123;
      &quot;type&quot;: &quot;string&quot;,
      &quot;title&quot;: &quot;\u63CF\u8FF0&quot;,
      &quot;ui&quot;: &#123;
        &quot;widget&quot;: &quot;textarea&quot;,
        &quot;autosize&quot;: true,
        &quot;grid&quot;: &#123;
            &quot;span&quot;: 24
        &#125;
      &#125;
    &#125;
  &#125;,
  &quot;ui&quot;: &#123;
    &quot;spanLabelFixed&quot;: 100,
    &quot;grid&quot;: &#123;
      &quot;span&quot;: 12
    &#125;
  &#125;
&#125;
</code></pre>
<h2 id="\u6309\u94AE"><a class="lake-link"><i data-anchor="\u6309\u94AE"></i></a>\u6309\u94AE</h2><p>\u6309\u94AE\u5E03\u5C40\u6E32\u67D3\u540C\u8868\u5355\u9879\u4E00\u6837\u5E03\u5C40\u3001\u53C2\u6570\uFF0C\u53EF\u4EE5\u901A\u8FC7 <a href="/form/getting-started#SFButton">SFButton</a> \u5C5E\u6027\u6765\u8C03\u6574\u6309\u94AE\u6E32\u67D3\u98CE\u683C\u3002</p>
<p><strong>\u6CE8\u610F\u4E8B\u9879</strong></p>
<ul>
<li>\u503C\u4E3A <code>null</code> \u6216 <code>undefined</code> \u8868\u793A\u624B\u52A8\u6DFB\u52A0\u6309\u94AE\uFF0C\u4F46\u4FDD\u7559\u5BB9\u5668</li>
<li>\u503C\u4E3A <code>none</code> \u8868\u793A\u624B\u52A8\u6DFB\u52A0\u6309\u94AE\uFF0C\u4E14\u4E0D\u4FDD\u7559\u5BB9\u5668</li>
<li>\u4F7F\u7528 <code>spanLabelFixed</code> \u56FA\u5B9A\u6807\u7B7E\u5BBD\u5EA6\u65F6\uFF0C\u82E5\u65E0 <code>render.class</code> \u5219\u9ED8\u8BA4\u4E3A\u5C45\u4E2D\u72B6\u6001</li>
</ul>
<p><strong>\u81EA\u5B9A\u4E49</strong></p>
<p>\u5F53\u4F60\u5E0C\u671B\u81EA\u5B9A\u4E49\u6309\u94AE\u65F6\uFF0C\u52A1\u5FC5\u8BBE\u7F6E <code>button</code> \u503C\u4E3A <code>null</code>\u3002</p>
<pre><code class="language-html">&lt;sf #sf [button]=&quot;null&quot;&gt;
  &lt;button type=&quot;submit&quot; nz-button [disabled]=&quot;!sf.valid&quot;&gt;\u4FDD\u5B58&lt;/button&gt;
  &lt;button (click)=&quot;sf.reset()&quot; type=&quot;button&quot; nz-button&gt;\u91CD\u7F6E&lt;/button&gt;
&lt;/sf&gt;
</code></pre>
<h2 id="\u5C55\u5F00\u4E0E\u6536\u7F29"><a class="lake-link"><i data-anchor="\u5C55\u5F00\u4E0E\u6536\u7F29"></i></a>\u5C55\u5F00\u4E0E\u6536\u7F29</h2><p>\u5F53\u8868\u5355\u8868\u5355\u9879\u8FC7\u591A\u65F6\uFF0C\u53EF\u4EE5\u5C06\u4E0D\u91CD\u8981\u7684\u5B57\u6BB5\u6807\u8BB0\u4E3A\u53EF\u6298\u53E0\uFF0C\u5E76\u914D\u5408\u5C55\u5F00/\u6536\u7F29\u6309\u94AE\u6765\u5207\u6362\u663E\u9690\u3002</p>
<p><strong>\u4F7F\u7528\u65B9\u6CD5</strong></p>
<p>\u5728\u9700\u8981\u6298\u53E0\u7684\u5B57\u6BB5\u4E0A\u8BBE\u7F6E <code>ui.collapse = true</code>\uFF1A</p>
<pre><code class="language-json">&#123;
  &quot;properties&quot;: &#123;
    &quot;name&quot;: &#123; &quot;type&quot;: &quot;string&quot;, &quot;title&quot;: &quot;\u59D3\u540D&quot; &#125;,
    &quot;email&quot;: &#123; &quot;type&quot;: &quot;string&quot;, &quot;title&quot;: &quot;\u90AE\u7BB1&quot; &#125;,
    &quot;nickname&quot;: &#123;
      &quot;type&quot;: &quot;string&quot;,
      &quot;title&quot;: &quot;\u6635\u79F0&quot;,
      &quot;ui&quot;: &#123; &quot;collapse&quot;: true &#125;
    &#125;,
    &quot;bio&quot;: &#123;
      &quot;type&quot;: &quot;string&quot;,
      &quot;title&quot;: &quot;\u4E2A\u4EBA\u7B80\u4ECB&quot;,
      &quot;ui&quot;: &#123; &quot;collapse&quot;: true &#125;
    &#125;
  &#125;
&#125;
</code></pre>
<p>\u5728 <code>sf</code> \u7EC4\u4EF6\u4E0A\u542F\u7528 <code>expandable</code> \u5373\u53EF\uFF1A</p>
<pre><code class="language-html">&lt;sf [schema]=&quot;schema&quot; [expandable]=&quot;true&quot;&gt;&lt;/sf&gt;
</code></pre>
<p>\u5C55\u5F00/\u6536\u7F29\u6309\u94AE\u4F1A\u81EA\u52A8\u51FA\u73B0\u5728\u63D0\u4EA4\u3001\u91CD\u7F6E\u6309\u94AE\u65C1\uFF0C\u53EA\u6709\u5F53 <strong>\u8868\u5355\u4E2D\u5B58\u5728 <code>collapse</code> \u5B57\u6BB5</strong> \u65F6\u6309\u94AE\u624D\u4F1A\u663E\u793A\u3002</p>
<p>\u6309\u94AE\u6587\u672C\u652F\u6301\u56FD\u9645\u5316\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>\u5C55\u5F00</code> / <code>\u6536\u8D77</code>\u3002\u540C\u65F6\u652F\u6301\u901A\u8FC7 <code>[(expanded)]</code> \u53CC\u5411\u7ED1\u5B9A\u5916\u90E8\u63A7\u5236\u72B6\u6001\uFF1A</p>
<pre><code class="language-html">&lt;sf [schema]=&quot;schema&quot; [expandable]=&quot;true&quot; [(expanded)]=&quot;isExpanded&quot;&gt;&lt;/sf&gt;
</code></pre>
<p><strong>\u6CE8\u610F\uFF1A</strong> <code>expandable</code> \u548C <code>collapse</code> \u5C5E\u4E8E UI \u5C42\u9762\u7684\u63A7\u5236\uFF0C\u4E0E\u5B57\u6BB5\u7684 <code>required</code> \u903B\u8F91\u65E0\u5173\u3002</p>
`,api:"",toc:[{id:"\u7C7B\u578B",title:"\u7C7B\u578B",children:[{id:"\u884C\u5185",title:"\u884C\u5185"},{id:"\u5782\u76F4",title:"\u5782\u76F4"},{id:"\u6C34\u5E73",title:"\u6C34\u5E73"}]},{id:"\u4E0D\u89C4\u5219\u5E03\u5C40",title:"\u4E0D\u89C4\u5219\u5E03\u5C40"},{id:"\u6309\u94AE",title:"\u6309\u94AE"},{id:"\u5C55\u5F00\u4E0E\u6536\u7F29",title:"\u5C55\u5F00\u4E0E\u6536\u7F29"}],raw:`---
order: 5
title: \u5982\u4F55\u5E03\u5C40
type: Documents
---

@delon/form \u5E03\u5C40\u662F\u57FA\u4E8E [Grid](https://ng.ant.design/components/grid/zh) \u6805\u683C\u7CFB\u7EDF\uFF0C\u800C SFSchema \u7684[\u6E32\u67D3\u7C7B](/form/schema/en#%E6%B8%B2%E6%9F%93%E7%B1%BB)\u6765\u51B3\u5B9A\u5E03\u5C40\u53C2\u6570\u3002

\u8868\u5355\u5E03\u5C40\u5206\u4E3A\u884C\u5185\u3001\u5782\u76F4\u3001\u6C34\u5E73\uFF08\u9ED8\u8BA4\uFF09\u4E09\u7C7B\uFF0C\u5B83\u7531 [layout](/form/getting-started/zh#API) \u51B3\u5B9A\u3002

## \u7C7B\u578B

### \u884C\u5185

\u8868\u5355\u9879\u6C34\u5E73\u884C\u5185\u6392\u5217\uFF0C\u4E00\u822C\u7528\u4E8E\u7B80\u5355\u641C\u7D22\u6846\u3002

\u8868\u5355\u9879\u7684\u5BBD\u5EA6\u7531\u7EC4\u4EF6\u81EA\u8EAB\u6765\u51B3\u5B9A\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 \`width\` \u53C2\u6570\u6765\u8C03\u6574\u5176\u5927\u5C0F\uFF0C\u50CF\u5C0F\u90E8\u4EF6 \`select\` \u53EF\u80FD\u4F1A\u56E0\u4E3A\u672A\u8BBE\u7F6E\u9ED8\u8BA4\u503C\u5012\u7F6E\u5BBD\u5EA6\u6781\u5C0F\u3002

> \u53EF\u901A\u8FC7\u8BBE\u7F6E [mode](/form/getting-started/zh#mode%E6%9C%89%E4%BB%80%E4%B9%88%E4%BD%9C%E7%94%A8%EF%BC%9F) \u53C2\u6570\u6765\u5FEB\u901F\u8BBE\u7F6E\u4E3A\u641C\u7D22\u6A21\u5F0F\u3002

### \u5782\u76F4

\u6807\u7B7E\u548C\u8868\u5355\u63A7\u4EF6\u4E0A\u4E0B\u5782\u76F4\u6392\u5217\u3002

### \u6C34\u5E73

\u6807\u7B7E\u548C\u8868\u5355\u63A7\u4EF6\u6C34\u5E73\u6392\u5217\uFF0C\u4E00\u822C\u7528\u4E8E\u7F16\u8F91\u9875\u3002

\u6C34\u5E73\u7C7B\u578B\u76F8\u5BF9\u4E8E\u884C\u5185\u4E0E\u5782\u76F4\u66F4\u590D\u6742\u4E00\u70B9\uFF0C\u56E0\u4E3A\u4F1A\u6D89\u53CA\u54CD\u5E94\u5F0F\uFF0C\u51B3\u5B9A\u6BCF\u4E2A\u8868\u5355\u9879\u6240\u7AD9\u7684\u683C\u6570\u662F\u7531 [grid](/form/schema#%E5%93%8D%E5%BA%94%E5%BC%8F%E5%B1%9E%E6%80%A7-SFGridSchema) \u5C5E\u6027\u6765\u51B3\u5B9A\u3002

> \u53EF\u901A\u8FC7\u8BBE\u7F6E [mode](/form/getting-started/zh#mode%E6%9C%89%E4%BB%80%E4%B9%88%E4%BD%9C%E7%94%A8%EF%BC%9F) \u53C2\u6570\u6765\u5FEB\u901F\u8BBE\u7F6E\u4E3A\u7F16\u8F91\u6A21\u5F0F\u3002

**\u975E\u54CD\u5E94\u5F0F**

\u975E\u54CD\u5E94\u5F0F\u65F6\u53EA\u9700\u8981\u7EF4\u62A4 \`span\` \u5C5E\u6027\u5373\u53EF\u3002

**\u54CD\u5E94\u5F0F**

\u54CD\u5E94\u5F0F\u662F\u6839\u636E \`xs\`\u3001\`sm\`\u3001\`md\`\u3001\`lg\`\u3001\`xl\`\u3001\`xxl\` \u6765\u51B3\u5B9A\u4E0D\u540C\u5C4F\u5E55\u65F6\u51B3\u5B9A\u8981\u5360\u7528\u51E0\u683C\uFF0C\u6709\u51E0\u4E2A\u6CE8\u610F\u70B9\uFF1A

- \u6BCF\u4E00\u884C\u53EA\u80FD\u6709 \`24\` \u683C
- \u8868\u793A\u4E24\u4E2A\u8868\u5355\u9879\u5728\u540C\u4E00\u884C\uFF0C\u5219\u8BBE\u7F6E\u503C\u4E3A \`12\`
- \u8868\u793A\u5C4F\u5E55 \`\u2265992px\` \u65F6\u4E24\u4E2A\u8868\u5355\u9879\u5728\u540C\u4E00\u884C\uFF0C\u5C0F\u4E8E\u5219\u6BCF\u4E2A\u8868\u5355\u9879\u4E3A\u4E00\u884C\uFF0C\u5219\uFF1A\`{ sm: 24, md: 12 }\`

## \u4E0D\u89C4\u5219\u5E03\u5C40

\u5F53\u7136\uFF0C\u8868\u5355\u4E0D\u53EF\u80FD\u6BCF\u4E00\u884C\u90FD\u6709\u56FA\u5B9A\u8868\u5355\u9879\u6570\u91CF\uFF0C\u6709\u53EF\u80FD\u67D0\u4E2A\u8868\u5355\u9879\u4F1A\u5360\u7528\u4E00\u6574\u884C\uFF0C\u7531\u4E8E\u6805\u683C\u7CFB\u7EDF\u7684\u56E0\u7D20\uFF0C\u8FD9\u4F1A\u4EA7\u751F\u53E6\u4E00\u4E2A\u95EE\u9898\uFF1A**\u6807\u7B7E\u65E0\u6CD5\u5BF9\u9F50**\uFF0Csf \u63D0\u4F9B\u4E00\u79CD\u65B9\u6848\uFF0C\u5373\u56FA\u5B9A\u6240\u6709\u6807\u7B7E\u7684\u5BBD\u5EA6 \`spanLabelFixed\` \u5C5E\u6027\uFF0C\u4F8B\u5982\uFF1A

\`\`\`json
{
  "properties": {
    "email": {
      "type": "string",
      "title": "\u90AE\u7BB1",
      "format": "email"
    },
    "name": {
      "type": "string",
      "title": "\u59D3\u540D",
      "minLength": 5
    },
    "remark": {
      "type": "string",
      "title": "\u63CF\u8FF0",
      "ui": {
        "widget": "textarea",
        "autosize": true,
        "grid": {
            "span": 24
        }
      }
    }
  },
  "ui": {
    "spanLabelFixed": 100,
    "grid": {
      "span": 12
    }
  }
}
\`\`\`

## \u6309\u94AE

\u6309\u94AE\u5E03\u5C40\u6E32\u67D3\u540C\u8868\u5355\u9879\u4E00\u6837\u5E03\u5C40\u3001\u53C2\u6570\uFF0C\u53EF\u4EE5\u901A\u8FC7 [SFButton](/form/getting-started#SFButton) \u5C5E\u6027\u6765\u8C03\u6574\u6309\u94AE\u6E32\u67D3\u98CE\u683C\u3002

**\u6CE8\u610F\u4E8B\u9879**

- \u503C\u4E3A \`null\` \u6216 \`undefined\` \u8868\u793A\u624B\u52A8\u6DFB\u52A0\u6309\u94AE\uFF0C\u4F46\u4FDD\u7559\u5BB9\u5668
- \u503C\u4E3A \`none\` \u8868\u793A\u624B\u52A8\u6DFB\u52A0\u6309\u94AE\uFF0C\u4E14\u4E0D\u4FDD\u7559\u5BB9\u5668
- \u4F7F\u7528 \`spanLabelFixed\` \u56FA\u5B9A\u6807\u7B7E\u5BBD\u5EA6\u65F6\uFF0C\u82E5\u65E0 \`render.class\` \u5219\u9ED8\u8BA4\u4E3A\u5C45\u4E2D\u72B6\u6001

**\u81EA\u5B9A\u4E49**

\u5F53\u4F60\u5E0C\u671B\u81EA\u5B9A\u4E49\u6309\u94AE\u65F6\uFF0C\u52A1\u5FC5\u8BBE\u7F6E \`button\` \u503C\u4E3A \`null\`\u3002

\`\`\`html
<sf #sf [button]="null">
  <button type="submit" nz-button [disabled]="!sf.valid">\u4FDD\u5B58</button>
  <button (click)="sf.reset()" type="button" nz-button>\u91CD\u7F6E</button>
</sf>
\`\`\`

## \u5C55\u5F00\u4E0E\u6536\u7F29

\u5F53\u8868\u5355\u8868\u5355\u9879\u8FC7\u591A\u65F6\uFF0C\u53EF\u4EE5\u5C06\u4E0D\u91CD\u8981\u7684\u5B57\u6BB5\u6807\u8BB0\u4E3A\u53EF\u6298\u53E0\uFF0C\u5E76\u914D\u5408\u5C55\u5F00/\u6536\u7F29\u6309\u94AE\u6765\u5207\u6362\u663E\u9690\u3002

**\u4F7F\u7528\u65B9\u6CD5**

\u5728\u9700\u8981\u6298\u53E0\u7684\u5B57\u6BB5\u4E0A\u8BBE\u7F6E \`ui.collapse = true\`\uFF1A

\`\`\`json
{
  "properties": {
    "name": { "type": "string", "title": "\u59D3\u540D" },
    "email": { "type": "string", "title": "\u90AE\u7BB1" },
    "nickname": {
      "type": "string",
      "title": "\u6635\u79F0",
      "ui": { "collapse": true }
    },
    "bio": {
      "type": "string",
      "title": "\u4E2A\u4EBA\u7B80\u4ECB",
      "ui": { "collapse": true }
    }
  }
}
\`\`\`

\u5728 \`sf\` \u7EC4\u4EF6\u4E0A\u542F\u7528 \`expandable\` \u5373\u53EF\uFF1A

\`\`\`html
<sf [schema]="schema" [expandable]="true"></sf>
\`\`\`

\u5C55\u5F00/\u6536\u7F29\u6309\u94AE\u4F1A\u81EA\u52A8\u51FA\u73B0\u5728\u63D0\u4EA4\u3001\u91CD\u7F6E\u6309\u94AE\u65C1\uFF0C\u53EA\u6709\u5F53 **\u8868\u5355\u4E2D\u5B58\u5728 \`collapse\` \u5B57\u6BB5** \u65F6\u6309\u94AE\u624D\u4F1A\u663E\u793A\u3002

\u6309\u94AE\u6587\u672C\u652F\u6301\u56FD\u9645\u5316\uFF0C\u9ED8\u8BA4\u503C\u4E3A \`\u5C55\u5F00\` / \`\u6536\u8D77\`\u3002\u540C\u65F6\u652F\u6301\u901A\u8FC7 \`[(expanded)]\` \u53CC\u5411\u7ED1\u5B9A\u5916\u90E8\u63A7\u5236\u72B6\u6001\uFF1A

\`\`\`html
<sf [schema]="schema" [expandable]="true" [(expanded)]="isExpanded"></sf>
\`\`\`

**\u6CE8\u610F\uFF1A** \`expandable\` \u548C \`collapse\` \u5C5E\u4E8E UI \u5C42\u9762\u7684\u63A7\u5236\uFF0C\u4E0E\u5B57\u6BB5\u7684 \`required\` \u903B\u8F91\u65E0\u5173\u3002`}}};codes=[];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-layout"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&m(0,"app-docs",0),e&2&&d("codes",t.codes)("item",t.item)},dependencies:[S],encapsulation:2})};var ie=class o{item={name:"qa",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:99,title:"FAQ",description:"Many functions require passing path parameter, it uses / to represent form object path, following JSON Schema is an example:Following path are all val...",group:"Documents",path:"packages/form/docs/qa.en-US.md",url:"/form/qa/en"},text:`<h2 id="path"><a class="lake-link"><i data-anchor="path"></i></a>path</h2><p>Many functions require passing <code>path</code> parameter, it uses <code>/</code> to represent form object path, following JSON Schema is an example:</p>
<pre><code class="language-ts">schema: SFSchema = &#123;
  properties: &#123;
    app: &#123;
      type: &#39;string&#39;,
      title: &#39;APP&#39;,
    &#125;,
    user: &#123;
      type: &#39;object&#39;,
      properties: &#123;
        name: &#123;
          type: &#39;string&#39;,
        &#125;,
        age: &#123;
          type: &#39;number&#39;,
        &#125;,
      &#125;
    &#125;,
    list: &#123;
      type: &#39;array&#39;,
      items: &#123;
        type: &#39;object&#39;,
        properties: &#123;
          key: &#123;
            type: &#39;string&#39;,
          &#125;,
        &#125;
      &#125;
    &#125;
  &#125;
&#125;;
</code></pre>
<p>Following <code>path</code> are all valid:</p>
<ul>
<li><code>/app</code></li>
<li><code>/user/name</code></li>
<li><code>/list/0/key</code> 0 means array index</li>
</ul>
<p>Starting with <code>/</code> indicates to search from root path, otherwise, search from current path.</p>
<h2 id="why_some_customized_validations_are_not_working_in_non-realtime_validation?"><a class="lake-link"><i data-anchor="why_some_customized_validations_are_not_working_in_non-realtime_validation?"></i></a>Why some customized validations are not working in non-realtime validation?</h2><p>Because non-realtime validation (set <code>liveValidate:false</code>) doesn&#39;t revalidate every element, although it can be done, customized validation may involve asynchronized validation, cannot guarantee the order of execution, so non-realtime validation actually only validates JSON Schema itself.</p>
<h2 id="how_to_use_schema_dynamically?"><a class="lake-link"><i data-anchor="how_to_use_schema_dynamically?"></i></a>How to use Schema dynamically?</h2><p>There are two common scenarios:</p>
<p><strong>1. Schema is limited by remote data after definition</strong></p>
<pre><code class="language-ts">&#64;ViewChild(&#39;sf&#39;, &#123; static: false &#125;) sf: SFComponent;
schema: SFSchema = &#123;
  properties: &#123;
    app: &#123;
      type: &#39;string&#39;,
      title: &#39;Affiliated Application&#39;,
      ui: &#39;select&#39;,
      enum: []
    &#125;
  &#125;
&#125;;

ngOnInit() &#123;
  this.http.get(&#39;/apps&#39;).subscribe(res =&gt; &#123;
    this.schema.properties.app.enum = res;
    this.sf.refreshSchema();
  &#125;);
&#125;
</code></pre>
<p><strong>2. Remote Schema</strong></p>
<pre><code class="language-ts">schema: SFSchema = &#123;
  properties: &#123;&#125;
&#125;;

ngOnInit() &#123;
  this.http.get(&#39;/schema&#39;).subscribe(res =&gt; this.sf.refreshSchema(res));
&#125;
</code></pre>
<h2 id="when_to_use_lesscodegreaterdefaultless/codegreater?"><a class="lake-link"><i data-anchor="when_to_use_lesscodegreaterdefaultless/codegreater?"></i></a>When to use <code>default</code>?</h2><p><code>default</code> of Schema is used to set initialization, usually, need to provide <code>formData</code> when editting forms, but for adding forms, should rely on <code>default</code> to provide a better user friendly experience form to users.</p>
<h2 id="how_to_refresh_a_specific_schema?"><a class="lake-link"><i data-anchor="how_to_refresh_a_specific_schema?"></i></a>How to refresh a specific Schema?</h2><p>You can get a specific attribute of Schema by calling <code>getProperty</code> function, the attribute includes Schema data and Ui data, you can modify these data and re-render the Schema by calling <code>reset</code> function, for example:</p>
<pre><code class="language-ts">const statusProperty = this.sf.getProperty(&#39;/status&#39;)!;
statusProperty.schema.enum = [&#39;1&#39;, &#39;2&#39;, &#39;3&#39;];
statusProperty.widget.reset(&#39;2&#39;);
// Or manually trigger \`detectChanges\`
// statusProperty.widget.detectChanges();
</code></pre>
<p>If just only update a element value, then:</p>
<pre><code class="language-ts">this.sf.getProperty(&#39;/name&#39;)?.setValue(&#39;new name&#39;);
</code></pre>
<h2 id="why_canand#39;t_verify_lesscodegreaterrequiredless/codegreater"><a class="lake-link"><i data-anchor="why_canand#39;t_verify_lesscodegreaterrequiredless/codegreater"></i></a>Why can&#39;t verify <code>required</code></h2><p>Added <a href="https://ajv.js.org/options.html#strict-mode-options" target="_blank" rel="noopener">strict</a> mode from Ajv 7.x, and the default is <code>true</code>, when the most basic <code>required</code> is not correct When verifying, the high probability is that the Schema contains information that does not conform to the Json Schema format. This can be verified through the <code>debug</code> mode:</p>
<pre><code class="language-ts">schema: SFSchema = &#123;
   properties: &#123;
     month: &#123;
       type:&#39;string&#39;,
       format:&#39;month&#39;
     &#125;
   &#125;,
   required: [&#39;month&#39;],
   ui: &#123;debug: true&#125;
&#125;;
</code></pre>
<p>Since the <code>format:&#39;month&#39;</code> here is not a Json Schema standard, you can get an error in the Console panel:</p>
<pre><code>Error: unknown format &quot;month&quot; ignored in schema at path &quot;#/properties/month&quot;
</code></pre>
<p>To solve this problem, you can only set <code>strict</code> to <code>false</code> through the global configuration:</p>
<pre><code class="language-ts">// src/app/global-config.module.ts
const alainConfig: AlainConfig = &#123;
   sf: &#123;
     ajv: &#123;strict: false&#125;
   &#125;
&#125;;
</code></pre>
<h2 id="how_to_toggle_show_or_hide_an_element"><a class="lake-link"><i data-anchor="how_to_toggle_show_or_hide_an_element"></i></a>How to toggle show or hide an element</h2><pre><code class="language-ts">this.sf.getProperty(&#39;/mobile&#39;)?.setVisible(status).widget.detectChanges();
</code></pre>
`,api:"",toc:[{id:"path",title:"path"},{id:"why_some_customized_validations_are_not_working_in_non-realtime_validation?",title:"Why some customized validations are not working in non-realtime validation?"},{id:"how_to_use_schema_dynamically?",title:"How to use Schema dynamically?"},{id:"when_to_use",title:"When to use "},{id:"how_to_refresh_a_specific_schema?",title:"How to refresh a specific Schema?"},{id:"why_cant_verify",title:"Why can't verify "},{id:"how_to_toggle_show_or_hide_an_element",title:"How to toggle show or hide an element"}],raw:`---
order: 99
title: FAQ
type: Documents
---

## path

Many functions require passing \`path\` parameter, it uses \`/\` to represent form object path, following JSON Schema is an example:

\`\`\`ts
schema: SFSchema = {
  properties: {
    app: {
      type: 'string',
      title: 'APP',
    },
    user: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        age: {
          type: 'number',
        },
      }
    },
    list: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          key: {
            type: 'string',
          },
        }
      }
    }
  }
};
\`\`\`

Following \`path\` are all valid:

- \`/app\`
- \`/user/name\`
- \`/list/0/key\` 0 means array index

Starting with \`/\` indicates to search from root path, otherwise, search from current path.

## Why some customized validations are not working in non-realtime validation?

Because non-realtime validation (set \`liveValidate:false\`) doesn't revalidate every element, although it can be done, customized validation may involve asynchronized validation, cannot guarantee the order of execution, so non-realtime validation actually only validates JSON Schema itself.

## How to use Schema dynamically?

There are two common scenarios:

**1. Schema is limited by remote data after definition**

\`\`\`ts
@ViewChild('sf', { static: false }) sf: SFComponent;
schema: SFSchema = {
  properties: {
    app: {
      type: 'string',
      title: 'Affiliated Application',
      ui: 'select',
      enum: []
    }
  }
};

ngOnInit() {
  this.http.get('/apps').subscribe(res => {
    this.schema.properties.app.enum = res;
    this.sf.refreshSchema();
  });
}
\`\`\`

**2. Remote Schema**

\`\`\`ts
schema: SFSchema = {
  properties: {}
};

ngOnInit() {
  this.http.get('/schema').subscribe(res => this.sf.refreshSchema(res));
}
\`\`\`

## When to use \`default\`?

\`default\` of Schema is used to set initialization, usually, need to provide \`formData\` when editting forms, but for adding forms, should rely on \`default\` to provide a better user friendly experience form to users.

## How to refresh a specific Schema?

You can get a specific attribute of Schema by calling \`getProperty\` function, the attribute includes Schema data and Ui data, you can modify these data and re-render the Schema by calling \`reset\` function, for example:

\`\`\`ts
const statusProperty = this.sf.getProperty('/status')!;
statusProperty.schema.enum = ['1', '2', '3'];
statusProperty.widget.reset('2');
// Or manually trigger \`detectChanges\`
// statusProperty.widget.detectChanges();
\`\`\`

If just only update a element value, then:

\`\`\`ts
this.sf.getProperty('/name')?.setValue('new name');
\`\`\`

## Why can't verify \`required\`

Added [strict](https://ajv.js.org/options.html#strict-mode-options) mode from Ajv 7.x, and the default is \`true\`, when the most basic \`required\` is not correct When verifying, the high probability is that the Schema contains information that does not conform to the Json Schema format. This can be verified through the \`debug\` mode:

\`\`\`ts
schema: SFSchema = {
   properties: {
     month: {
       type:'string',
       format:'month'
     }
   },
   required: ['month'],
   ui: {debug: true}
};
\`\`\`

Since the \`format:'month'\` here is not a Json Schema standard, you can get an error in the Console panel:

\`\`\`
Error: unknown format "month" ignored in schema at path "#/properties/month"
\`\`\`

To solve this problem, you can only set \`strict\` to \`false\` through the global configuration:

\`\`\`ts
// src/app/global-config.module.ts
const alainConfig: AlainConfig = {
   sf: {
     ajv: {strict: false}
   }
};
\`\`\`

## How to toggle show or hide an element

\`\`\`ts
this.sf.getProperty('/mobile')?.setVisible(status).widget.detectChanges();
\`\`\``},"zh-CN":{meta:{order:99,title:"\u5E38\u89C1\u95EE\u9898",description:"\u6709\u8BB8\u591A\u65B9\u6CD5\u90FD\u9700\u8981\u4F20\u9012 path \u53C2\u6570\uFF0C\u5B83\u4F7F\u7528 / \u5206\u9694\u7B26\u6765\u8868\u793A\u8BBF\u95EE\u8868\u5355\u5BF9\u8C61\u8DEF\u5F84\uFF0C\u4F8B\u5982\u4E00\u4E2A JSON Schema \u793A\u4F8B\uFF1A\u4EE5\u4E0B path \u884C\u4E3A\u90FD\u6709\u6548\uFF1A/app/user/name/list/0/key 0 \u8868\u793A\u6570\u7EC4\u7D22\u5F15\u4F7F\u7528 / \u5F00\u5934\u65F6\u8868\u793A\u4ECE\u6839\u8DEF\u5F84\u67E5\u627E\uFF0C\u53CD\u4E4B\u4ECE\u5F53\u524D\u8DEF\u5F84\u5411\u4E0B\u67E5\u627E\u3002\u7531\u4E8E\u975E\u5B9E\u65F6\u6821\u9A8C\uFF08\u8BBE\u7F6E li...",group:"Documents",path:"packages/form/docs/qa.zh-CN.md",url:"/form/qa/zh"},text:`<h2 id="path"><a class="lake-link"><i data-anchor="path"></i></a>path</h2><p>\u6709\u8BB8\u591A\u65B9\u6CD5\u90FD\u9700\u8981\u4F20\u9012 <code>path</code> \u53C2\u6570\uFF0C\u5B83\u4F7F\u7528 <code>/</code> \u5206\u9694\u7B26\u6765\u8868\u793A\u8BBF\u95EE\u8868\u5355\u5BF9\u8C61\u8DEF\u5F84\uFF0C\u4F8B\u5982\u4E00\u4E2A JSON Schema \u793A\u4F8B\uFF1A</p>
<pre><code class="language-ts">schema: SFSchema = &#123;
  properties: &#123;
    app: &#123;
      type: &#39;string&#39;,
      title: &#39;APP&#39;,
    &#125;,
    user: &#123;
      type: &#39;object&#39;,
      properties: &#123;
        name: &#123;
          type: &#39;string&#39;,
        &#125;,
        age: &#123;
          type: &#39;number&#39;,
        &#125;,
      &#125;
    &#125;,
    list: &#123;
      type: &#39;array&#39;,
      items: &#123;
        type: &#39;object&#39;,
        properties: &#123;
          key: &#123;
            type: &#39;string&#39;,
          &#125;,
        &#125;
      &#125;
    &#125;
  &#125;
&#125;;
</code></pre>
<p>\u4EE5\u4E0B <code>path</code> \u884C\u4E3A\u90FD\u6709\u6548\uFF1A</p>
<ul>
<li><code>/app</code></li>
<li><code>/user/name</code></li>
<li><code>/list/0/key</code> 0 \u8868\u793A\u6570\u7EC4\u7D22\u5F15</li>
</ul>
<p>\u4F7F\u7528 <code>/</code> \u5F00\u5934\u65F6\u8868\u793A\u4ECE\u6839\u8DEF\u5F84\u67E5\u627E\uFF0C\u53CD\u4E4B\u4ECE\u5F53\u524D\u8DEF\u5F84\u5411\u4E0B\u67E5\u627E\u3002</p>
<h2 id="\u4E3A\u4EC0\u4E48\u975E\u5B9E\u65F6\u6821\u9A8C\u90E8\u5206\u81EA\u5B9A\u4E49\u6821\u9A8C\u65E0\u6CD5\u751F\u6548\uFF1F"><a class="lake-link"><i data-anchor="\u4E3A\u4EC0\u4E48\u975E\u5B9E\u65F6\u6821\u9A8C\u90E8\u5206\u81EA\u5B9A\u4E49\u6821\u9A8C\u65E0\u6CD5\u751F\u6548\uFF1F"></i></a>\u4E3A\u4EC0\u4E48\u975E\u5B9E\u65F6\u6821\u9A8C\u90E8\u5206\u81EA\u5B9A\u4E49\u6821\u9A8C\u65E0\u6CD5\u751F\u6548\uFF1F</h2><p>\u7531\u4E8E\u975E\u5B9E\u65F6\u6821\u9A8C\uFF08\u8BBE\u7F6E <code>liveValidate:false</code>\uFF09\u4E0D\u4F1A\u91CD\u65B0\u5BF9\u6BCF\u4E2A\u5143\u7D20\u6267\u884C\u4E00\u6B21\u6821\u9A8C\uFF0C\u867D\u7136\u80FD\u505A\u5230\uFF0C\u4F46\u81EA\u5B9A\u4E49\u6821\u9A8C\u6709\u53EF\u80FD\u5B58\u5728\u5F02\u6B65\uFF0C\u65E0\u6CD5\u4FDD\u8BC1\u6267\u884C\u7684\u987A\u5E8F\uFF0C\u56E0\u6B64\u975E\u5B9E\u65F6\u6821\u9A8C\u5B9E\u9645\u53EA\u5BF9 JSON Schema \u672C\u8EAB\u7684\u6821\u9A8C\u3002</p>
<h2 id="\u5982\u4F55\u52A8\u6001\u4F7F\u7528_schema\uFF1F"><a class="lake-link"><i data-anchor="\u5982\u4F55\u52A8\u6001\u4F7F\u7528_schema\uFF1F"></i></a>\u5982\u4F55\u52A8\u6001\u4F7F\u7528 Schema\uFF1F</h2><p>\u4E00\u822C\u5206\u4E3A\u4E24\u79CD\u60C5\u5F62\uFF1A</p>
<p><strong>1\u3001Schema \u5B9A\u4E49\u540E\u53EF\u80FD\u53D7\u9650\u4E8E\u67D0\u4E2A\u6570\u636E\u6765\u81EA\u8FDC\u7A0B</strong></p>
<pre><code class="language-ts">&#64;ViewChild(&#39;sf&#39;, &#123; static: false &#125;) sf: SFComponent;
schema: SFSchema = &#123;
  properties: &#123;
    app: &#123;
      type: &#39;string&#39;,
      title: &#39;\u9644\u5C5E\u5E94\u7528&#39;,
      ui: &#39;select&#39;,
      enum: []
    &#125;
  &#125;
&#125;;

ngOnInit() &#123;
  this.http.get(&#39;/apps&#39;).subscribe(res =&gt; &#123;
    this.schema.properties.app.enum = res;
    this.sf.refreshSchema();
  &#125;);
&#125;
</code></pre>
<p><strong>2\u3001\u8FDC\u7A0B Schema</strong></p>
<pre><code class="language-ts">schema: SFSchema = &#123;
  properties: &#123;&#125;
&#125;;

ngOnInit() &#123;
  this.http.get(&#39;/schema&#39;).subscribe(res =&gt; this.sf.refreshSchema(res));
&#125;
</code></pre>
<h2 id="\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528_lesscodegreaterdefaultless/codegreater\uFF1F"><a class="lake-link"><i data-anchor="\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528_lesscodegreaterdefaultless/codegreater\uFF1F"></i></a>\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528 <code>default</code>\uFF1F</h2><p>Schema \u7684 <code>default</code> \u7528\u4E8E\u8BBE\u7F6E\u521D\u59CB\u5316\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u5F53\u4FEE\u6539\u8868\u5355\u65F6\u662F\u9700\u8981\u63D0\u4F9B <code>formData</code> \u53C2\u6570\uFF0C\u4F46\u5BF9\u4E8E\u589E\u52A0\u8868\u5355\u6765\u8BF4\uFF0C\u5E94\u8BE5\u4F9D\u9760 <code>default</code> \u63D0\u4F9B\u4E00\u4E2A\u66F4\u53CB\u597D\u7684\u8868\u5355\u7ED9\u7528\u6237\u3002</p>
<h2 id="\u5982\u4F55\u5237\u65B0\u7279\u5B9A_schema\uFF1F"><a class="lake-link"><i data-anchor="\u5982\u4F55\u5237\u65B0\u7279\u5B9A_schema\uFF1F"></i></a>\u5982\u4F55\u5237\u65B0\u7279\u5B9A Schema\uFF1F</h2><p>\u53EF\u4EE5\u901A\u8FC7 <code>getProperty</code> \u65B9\u6CD5\u6765\u83B7\u53D6\u67D0\u4E2A Schema \u7684\u5C5E\u6027\uFF0C\u5176\u5C5E\u6027\u5305\u542B Schema \u6570\u636E\u4EE5\u53CA Ui \u6570\u636E\uFF0C\u53EF\u4EE5\u4FEE\u6539\u8FD9\u4E9B\u6570\u636E\uFF0C\u5E76\u91CD\u65B0\u8C03\u7528\u5C0F\u90E8\u4EF6\u7684 <code>reset</code> \u65B9\u6CD5\u91CD\u65B0\u6E32\u67D3\u8BE5 Schema\uFF0C\u4F8B\u5982\uFF1A</p>
<pre><code class="language-ts">const statusProperty = this.sf.getProperty(&#39;/status&#39;)!;
statusProperty.schema.enum = [&#39;1&#39;, &#39;2&#39;, &#39;3&#39;];
statusProperty.widget.reset(&#39;2&#39;);
// \u6216\u624B\u52A8\u89E6\u53D1 \`detectChanges\`
// statusProperty.widget.detectChanges();
</code></pre>
<p>\u5982\u679C\u5355\u7EAF\u66F4\u65B0\u67D0\u4E2A\u5143\u7D20\u6570\u636E\uFF0C\u5219\uFF1A</p>
<pre><code class="language-ts">this.sf.getProperty(&#39;/name&#39;)?.setValue(&#39;new name&#39;);
</code></pre>
<h2 id="\u4E3A\u4EC0\u4E48\u65E0\u6CD5\u6821\u9A8C_lesscodegreaterrequiredless/codegreater"><a class="lake-link"><i data-anchor="\u4E3A\u4EC0\u4E48\u65E0\u6CD5\u6821\u9A8C_lesscodegreaterrequiredless/codegreater"></i></a>\u4E3A\u4EC0\u4E48\u65E0\u6CD5\u6821\u9A8C <code>required</code></h2><p>\u4ECE Ajv 7.x \u65B0\u589E <a href="https://ajv.js.org/options.html#strict-mode-options" target="_blank" rel="noopener">strict</a> \u6A21\u5F0F\uFF0C\u5E76\u4E14\u9ED8\u8BA4\u4E3A <code>true</code>\uFF0C\u5F53\u6700\u57FA\u672C\u7684 <code>required</code> \u90FD\u65E0\u6CD5\u6B63\u786E\u6821\u9A8C\u65F6\uFF0C\u90A3\u5927\u6982\u7387\u5C31\u662F\u56E0\u4E3A Schema \u5305\u542B\u4E86\u4E0D\u7B26\u5408 Json Schema \u683C\u5F0F\u7684\u4FE1\u606F\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>debug</code> \u6A21\u5F0F\u9A8C\u8BC1\u8FD9\u4E00\u70B9\uFF1A</p>
<pre><code class="language-ts">schema: SFSchema = &#123;
  properties: &#123;
    month: &#123;
      type: &#39;string&#39;,
      format: &#39;month&#39;
    &#125;
  &#125;,
  required: [&#39;month&#39;],
  ui: &#123; debug: true &#125;
&#125;;
</code></pre>
<p>\u7531\u4E8E\u8FD9\u91CC\u7684 <code>format: &#39;month&#39;</code> \u5E76\u4E0D\u662F Json Schema \u6807\u51C6\uFF0C\u56E0\u6B64\uFF0C\u4F60\u53EF\u4EE5\u5728 Console \u9762\u677F\u5F97\u5230\u9519\u8BEF\uFF1A</p>
<pre><code>Error: unknown format &quot;month&quot; ignored in schema at path &quot;#/properties/month&quot;
</code></pre>
<p>\u89E3\u51B3\u8FD9\u4E00\u95EE\u9898\uFF0C\u53EA\u80FD\u901A\u8FC7\u5168\u5C40\u914D\u7F6E\u8BBE\u7F6E <code>strict</code> \u4E3A <code>false</code>\uFF1A</p>
<pre><code class="language-ts">// src/app/global-config.module.ts
const alainConfig: AlainConfig = &#123;
  sf: &#123;
    ajv: &#123; strict: false &#125;
  &#125;
&#125;;
</code></pre>
<h2 id="\u5982\u4F55\u5207\u6362\u663E\u793A\u6216\u9690\u85CF\u67D0yuan\u7D20"><a class="lake-link"><i data-anchor="\u5982\u4F55\u5207\u6362\u663E\u793A\u6216\u9690\u85CF\u67D0yuan\u7D20"></i></a>\u5982\u4F55\u5207\u6362\u663E\u793A\u6216\u9690\u85CF\u67D0\u5143\u7D20</h2><pre><code class="language-ts">this.sf.getProperty(&#39;/mobile&#39;)?.setVisible(status).widget.detectChanges();
</code></pre>
`,api:"",toc:[{id:"path",title:"path"},{id:"\u4E3A\u4EC0\u4E48\u975E\u5B9E\u65F6\u6821\u9A8C\u90E8\u5206\u81EA\u5B9A\u4E49\u6821\u9A8C\u65E0\u6CD5\u751F\u6548\uFF1F",title:"\u4E3A\u4EC0\u4E48\u975E\u5B9E\u65F6\u6821\u9A8C\u90E8\u5206\u81EA\u5B9A\u4E49\u6821\u9A8C\u65E0\u6CD5\u751F\u6548\uFF1F"},{id:"\u5982\u4F55\u52A8\u6001\u4F7F\u7528_schema\uFF1F",title:"\u5982\u4F55\u52A8\u6001\u4F7F\u7528 Schema\uFF1F"},{id:"\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528",title:"\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528 "},{id:"\u5982\u4F55\u5237\u65B0\u7279\u5B9A_schema\uFF1F",title:"\u5982\u4F55\u5237\u65B0\u7279\u5B9A Schema\uFF1F"},{id:"\u4E3A\u4EC0\u4E48\u65E0\u6CD5\u6821\u9A8C",title:"\u4E3A\u4EC0\u4E48\u65E0\u6CD5\u6821\u9A8C "},{id:"\u5982\u4F55\u5207\u6362\u663E\u793A\u6216\u9690\u85CF\u67D0yuan\u7D20",title:"\u5982\u4F55\u5207\u6362\u663E\u793A\u6216\u9690\u85CF\u67D0\u5143\u7D20"}],raw:`---
order: 99
title: \u5E38\u89C1\u95EE\u9898
type: Documents
---

## path

\u6709\u8BB8\u591A\u65B9\u6CD5\u90FD\u9700\u8981\u4F20\u9012 \`path\` \u53C2\u6570\uFF0C\u5B83\u4F7F\u7528 \`/\` \u5206\u9694\u7B26\u6765\u8868\u793A\u8BBF\u95EE\u8868\u5355\u5BF9\u8C61\u8DEF\u5F84\uFF0C\u4F8B\u5982\u4E00\u4E2A JSON Schema \u793A\u4F8B\uFF1A

\`\`\`ts
schema: SFSchema = {
  properties: {
    app: {
      type: 'string',
      title: 'APP',
    },
    user: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        age: {
          type: 'number',
        },
      }
    },
    list: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          key: {
            type: 'string',
          },
        }
      }
    }
  }
};
\`\`\`

\u4EE5\u4E0B \`path\` \u884C\u4E3A\u90FD\u6709\u6548\uFF1A

- \`/app\`
- \`/user/name\`
- \`/list/0/key\` 0 \u8868\u793A\u6570\u7EC4\u7D22\u5F15

\u4F7F\u7528 \`/\` \u5F00\u5934\u65F6\u8868\u793A\u4ECE\u6839\u8DEF\u5F84\u67E5\u627E\uFF0C\u53CD\u4E4B\u4ECE\u5F53\u524D\u8DEF\u5F84\u5411\u4E0B\u67E5\u627E\u3002

## \u4E3A\u4EC0\u4E48\u975E\u5B9E\u65F6\u6821\u9A8C\u90E8\u5206\u81EA\u5B9A\u4E49\u6821\u9A8C\u65E0\u6CD5\u751F\u6548\uFF1F

\u7531\u4E8E\u975E\u5B9E\u65F6\u6821\u9A8C\uFF08\u8BBE\u7F6E \`liveValidate:false\`\uFF09\u4E0D\u4F1A\u91CD\u65B0\u5BF9\u6BCF\u4E2A\u5143\u7D20\u6267\u884C\u4E00\u6B21\u6821\u9A8C\uFF0C\u867D\u7136\u80FD\u505A\u5230\uFF0C\u4F46\u81EA\u5B9A\u4E49\u6821\u9A8C\u6709\u53EF\u80FD\u5B58\u5728\u5F02\u6B65\uFF0C\u65E0\u6CD5\u4FDD\u8BC1\u6267\u884C\u7684\u987A\u5E8F\uFF0C\u56E0\u6B64\u975E\u5B9E\u65F6\u6821\u9A8C\u5B9E\u9645\u53EA\u5BF9 JSON Schema \u672C\u8EAB\u7684\u6821\u9A8C\u3002

## \u5982\u4F55\u52A8\u6001\u4F7F\u7528 Schema\uFF1F

\u4E00\u822C\u5206\u4E3A\u4E24\u79CD\u60C5\u5F62\uFF1A

**1\u3001Schema \u5B9A\u4E49\u540E\u53EF\u80FD\u53D7\u9650\u4E8E\u67D0\u4E2A\u6570\u636E\u6765\u81EA\u8FDC\u7A0B**

\`\`\`ts
@ViewChild('sf', { static: false }) sf: SFComponent;
schema: SFSchema = {
  properties: {
    app: {
      type: 'string',
      title: '\u9644\u5C5E\u5E94\u7528',
      ui: 'select',
      enum: []
    }
  }
};

ngOnInit() {
  this.http.get('/apps').subscribe(res => {
    this.schema.properties.app.enum = res;
    this.sf.refreshSchema();
  });
}
\`\`\`

**2\u3001\u8FDC\u7A0B Schema**

\`\`\`ts
schema: SFSchema = {
  properties: {}
};

ngOnInit() {
  this.http.get('/schema').subscribe(res => this.sf.refreshSchema(res));
}
\`\`\`

## \u4EC0\u4E48\u65F6\u5019\u4F7F\u7528 \`default\`\uFF1F

Schema \u7684 \`default\` \u7528\u4E8E\u8BBE\u7F6E\u521D\u59CB\u5316\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u5F53\u4FEE\u6539\u8868\u5355\u65F6\u662F\u9700\u8981\u63D0\u4F9B \`formData\` \u53C2\u6570\uFF0C\u4F46\u5BF9\u4E8E\u589E\u52A0\u8868\u5355\u6765\u8BF4\uFF0C\u5E94\u8BE5\u4F9D\u9760 \`default\` \u63D0\u4F9B\u4E00\u4E2A\u66F4\u53CB\u597D\u7684\u8868\u5355\u7ED9\u7528\u6237\u3002

## \u5982\u4F55\u5237\u65B0\u7279\u5B9A Schema\uFF1F

\u53EF\u4EE5\u901A\u8FC7 \`getProperty\` \u65B9\u6CD5\u6765\u83B7\u53D6\u67D0\u4E2A Schema \u7684\u5C5E\u6027\uFF0C\u5176\u5C5E\u6027\u5305\u542B Schema \u6570\u636E\u4EE5\u53CA Ui \u6570\u636E\uFF0C\u53EF\u4EE5\u4FEE\u6539\u8FD9\u4E9B\u6570\u636E\uFF0C\u5E76\u91CD\u65B0\u8C03\u7528\u5C0F\u90E8\u4EF6\u7684 \`reset\` \u65B9\u6CD5\u91CD\u65B0\u6E32\u67D3\u8BE5 Schema\uFF0C\u4F8B\u5982\uFF1A

\`\`\`ts
const statusProperty = this.sf.getProperty('/status')!;
statusProperty.schema.enum = ['1', '2', '3'];
statusProperty.widget.reset('2');
// \u6216\u624B\u52A8\u89E6\u53D1 \`detectChanges\`
// statusProperty.widget.detectChanges();
\`\`\`

\u5982\u679C\u5355\u7EAF\u66F4\u65B0\u67D0\u4E2A\u5143\u7D20\u6570\u636E\uFF0C\u5219\uFF1A

\`\`\`ts
this.sf.getProperty('/name')?.setValue('new name');
\`\`\`

## \u4E3A\u4EC0\u4E48\u65E0\u6CD5\u6821\u9A8C \`required\`

\u4ECE Ajv 7.x \u65B0\u589E [strict](https://ajv.js.org/options.html#strict-mode-options) \u6A21\u5F0F\uFF0C\u5E76\u4E14\u9ED8\u8BA4\u4E3A \`true\`\uFF0C\u5F53\u6700\u57FA\u672C\u7684 \`required\` \u90FD\u65E0\u6CD5\u6B63\u786E\u6821\u9A8C\u65F6\uFF0C\u90A3\u5927\u6982\u7387\u5C31\u662F\u56E0\u4E3A Schema \u5305\u542B\u4E86\u4E0D\u7B26\u5408 Json Schema \u683C\u5F0F\u7684\u4FE1\u606F\uFF0C\u53EF\u4EE5\u901A\u8FC7 \`debug\` \u6A21\u5F0F\u9A8C\u8BC1\u8FD9\u4E00\u70B9\uFF1A

\`\`\`ts
schema: SFSchema = {
  properties: {
    month: {
      type: 'string',
      format: 'month'
    }
  },
  required: ['month'],
  ui: { debug: true }
};
\`\`\`

\u7531\u4E8E\u8FD9\u91CC\u7684 \`format: 'month'\` \u5E76\u4E0D\u662F Json Schema \u6807\u51C6\uFF0C\u56E0\u6B64\uFF0C\u4F60\u53EF\u4EE5\u5728 Console \u9762\u677F\u5F97\u5230\u9519\u8BEF\uFF1A

\`\`\`
Error: unknown format "month" ignored in schema at path "#/properties/month"
\`\`\`

\u89E3\u51B3\u8FD9\u4E00\u95EE\u9898\uFF0C\u53EA\u80FD\u901A\u8FC7\u5168\u5C40\u914D\u7F6E\u8BBE\u7F6E \`strict\` \u4E3A \`false\`\uFF1A

\`\`\`ts
// src/app/global-config.module.ts
const alainConfig: AlainConfig = {
  sf: {
    ajv: { strict: false }
  }
};
\`\`\`

## \u5982\u4F55\u5207\u6362\u663E\u793A\u6216\u9690\u85CF\u67D0\u5143\u7D20

\`\`\`ts
this.sf.getProperty('/mobile')?.setVisible(status).widget.detectChanges();
\`\`\``}}};codes=[];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-qa"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&m(0,"app-docs",0),e&2&&d("codes",t.codes)("item",t.item)},dependencies:[S],encapsulation:2})};var re=class o{item={name:"schema",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:2,title:"Schema",description:"JSON Schema is a specification to define JSON data structure, it doesn't include detailed explanation about how to convert the specification to specif...",group:"Documents",path:"packages/form/docs/schema.en-US.md",url:"/form/schema/en"},text:`<h2 id="prologue"><a class="lake-link"><i data-anchor="prologue"></i></a>Prologue</h2><p><a href="http://json-schema.org/" target="_blank" rel="noopener">JSON Schema</a> is a specification to define JSON data structure, it doesn&#39;t include detailed explanation about how to convert the specification to specific forms, <code>&#64;delon/form</code> is a dynamic form library developed based on our own understanding of JSON Schema and current data input components of <code>ng-zorro-antd</code>.</p>
<p>JSON Schema <strong>must always</strong> have a type <code>type=&quot;object&quot;</code> as <strong>root node</strong>\uFF0Ctherefore a simplest Schema structure at least is:</p>
<pre><code class="language-ts">schema = &#123;
  type: &#39;object&#39;, // optional, set to \`object\` by default
  properties: &#123;&#125;
&#125;
</code></pre>
<p>Ahead of dscribing Schema, it is necessary to make a systematic description about the relationship between form elements and Schema.</p>
<p>As we know, form is a set of HTML elements, every element maps to one Schema property, a property has it&#39;s own data type, format, visual information, etc., but this is not enough to describe the rich APIs provided by <code>ng-zorro-antd</code>. In order to better use these APIs, <code>&#64;delon/form</code> not only implemented most standard JSON Schema, but also added an additional property <code>ui</code>, which is used to describe how to render the property.</p>
<h3 id="non_pollution"><a class="lake-link"><i data-anchor="non_pollution"></i></a>Non Pollution</h3><p>Of course, you can set <code>&lt;sf [ui]=&quot;ui&quot;&gt;</code> to add additional UI rendering if you have strict requirement about standard, or JSON Schema data is generated from backend. For example:</p>
<pre><code class="language-ts">schema = &#123;
  properties: &#123;
    url: &#123;
      type: &#39;string&#39;,
      title: &#39;Web Site&#39;
    &#125;
  &#125;
&#125;
</code></pre>
<p>A URL property, the pure JSON Schema structure cann&#39;t describe about adding prefix <code>https://</code>, but <code>nz-input</code> supports very rich prefix and postfix texts, so we can customize it in <code>ui</code> to add prefix <code>https://</code>:</p>
<pre><code class="language-ts">ui = &#123;
  $url: &#123;
    addOnBefore: &#39;https://&#39;
  &#125;
&#125;
</code></pre>
<p><code>ui</code> itself is a JSON structure, in order to distinguish with relationship of JSON Schema property, <strong>must</strong> add prefix <code>$</code> to all properties; must replace array elements with <code>$items</code>. When KEY is <code>*</code>, it is valid for all properties.</p>
<h3 id="relationship_between_form_and_data_structure"><a class="lake-link"><i data-anchor="relationship_between_form_and_data_structure"></i></a>Relationship between Form and Data Structure</h3><p>We think a complete form should include some of following elements:</p>
<p><img src="./assets/img/form-input.png" alt=""></p>
<p>Description from left to right:</p>
<table>
<thead>
<tr>
<th>Structure Source</th>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default Value</th>
</tr>
</thead>
<tbody><tr>
<td>Schema</td>
<td><code>[required]</code></td>
<td>If required</td>
<td><code>string[]</code></td>
<td>-</td>
</tr>
<tr>
<td>Schema</td>
<td><code>[title]</code></td>
<td>Title</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td>ui</td>
<td><code>[optional]</code></td>
<td>Optional information</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td>ui</td>
<td><code>[optionalHelp]</code></td>
<td>Optional help information</td>
<td><code>string, SFOptionalHelp</code></td>
<td>-</td>
</tr>
<tr>
<td>ui</td>
<td><code>[placeholder]</code></td>
<td>Placeholder</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td>Schema</td>
<td><code>[description]</code></td>
<td>Description for the property</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td>-</td>
<td><code>[error]</code></td>
<td>Error information</td>
<td><code>string</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="some_specifications"><a class="lake-link"><i data-anchor="some_specifications"></i></a>Some Specifications</h3><ul>
<li>Following camelCase to name <code>key</code></li>
<li>You can ignore description marked as <strong>Not recommended</strong> if you are very familiar with JSON Schema.</li>
</ul>
<h2 id="json_schema\uFF08sfschema\uFF09"><a class="lake-link"><i data-anchor="json_schema\uFF08sfschema\uFF09"></i></a>JSON Schema\uFF08SFSchema\uFF09</h2><p>JSON Schema has complete specification descrbes for each property, <code>&#64;delon/form</code> is currently based on specification <a href="http://json-schema.org/" target="_blank" rel="noopener">draft-07</a>, following is the detailed explanation of specification:</p>
<h3 id="common_type"><a class="lake-link"><i data-anchor="common_type"></i></a>Common Type</h3><table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default Value</th>
</tr>
</thead>
<tbody><tr>
<td><code>[type]</code></td>
<td>Data type, support JavaScript basic types</td>
<td><code>number,string,boolean,object,array</code></td>
<td><code>object</code></td>
</tr>
<tr>
<td><code>[enum]</code></td>
<td>Enum, static data source</td>
<td><code>SFSchemaEnumType[]</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="value_type"><a class="lake-link"><i data-anchor="value_type"></i></a>Value Type</h3><table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default Value</th>
</tr>
</thead>
<tbody><tr>
<td><code>[minimum]</code></td>
<td>Minimum value</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[exclusiveMinimum]</code></td>
<td>If excluding <code>minimum</code> value</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[maximum]</code></td>
<td>Maximum value</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[exclusiveMaximum]</code></td>
<td>If excluding <code>maximum</code> value</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[multipleOf]</code></td>
<td>Multiple</td>
<td><code>number</code></td>
<td>-</td>
</tr>
</tbody></table>
<p><strong>About exclusiveMinimum and exclusiveMaximum</strong></p>
<p>The implementation mechanism of <code>sf</code> causes that it couldn&#39;t handle error capturing for <code>type</code> perpectly, therefore <code>sf</code> ignores all <code>type</code> (see <a href="https://github.com/ng-alain/delon/blob/master/packages/form/src/config.ts#L12" target="_blank" rel="noopener">config.ts</a>) errors by default, these two kinds of errors are considered as <code>type</code> error, which will trigger invalid check. (find more details from <a href="https://github.com/ng-alain/ng-alain/issues/676#issuecomment-420208459" target="_blank" rel="noopener">#676</a>\uFF09</p>
<h3 id="string_type"><a class="lake-link"><i data-anchor="string_type"></i></a>String Type</h3><table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default Value</th>
</tr>
</thead>
<tbody><tr>
<td><code>[maxLength]</code></td>
<td>Maximum length of string</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[minLength]</code></td>
<td>Minimum length of string</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[pattern]</code></td>
<td>Regular expression</td>
<td><code>string</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="array_type"><a class="lake-link"><i data-anchor="array_type"></i></a>Array Type</h3><table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default Value</th>
</tr>
</thead>
<tbody><tr>
<td><code>[items]</code></td>
<td>Array element description, only support array object. Can use other components if array of basic type is needed</td>
<td><code>SFSchema</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[minItems]</code></td>
<td>Minimum number of element in array</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[maxItems]</code></td>
<td>Maximum number of element in array</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[uniqueItems]</code></td>
<td>Element is unique in array</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[additionalItems]</code></td>
<td>additional validation rules for array</td>
<td><code>SFSchema</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="object_type"><a class="lake-link"><i data-anchor="object_type"></i></a>Object Type</h3><table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default Value</th>
</tr>
</thead>
<tbody><tr>
<td><code>[maxProperties]</code></td>
<td>Maximum number of property, must be a nonnegative integer</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[minProperties]</code></td>
<td>Maximum number of property, must be a nonnegative integer</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[required]</code></td>
<td>If required</td>
<td><code>string[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[properties]</code></td>
<td>Propery definition</td>
<td><code>&#123; [key: string]: SFSchema &#125;</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="condition_type"><a class="lake-link"><i data-anchor="condition_type"></i></a>Condition Type</h3><table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default Value</th>
</tr>
</thead>
<tbody><tr>
<td><code>[if]</code></td>
<td>Condition validation</td>
<td><code>SFSchema</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[then]</code></td>
<td>Condition validation</td>
<td><code>SFSchema</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[else]</code></td>
<td>Condition validation</td>
<td><code>SFSchema</code></td>
<td>-</td>
</tr>
</tbody></table>
<p>Validation of condition check is very strong and rich, but considering it breaks UI and adds complexity to component build, <code>&#64;delon/form</code> only implements <code>required</code>, and uses it to determine if need validation, for example, a login page, it can show different login mode based on different login methods:</p>
<pre><code class="language-ts">schema: SFSchema = &#123;
  properties: &#123;
    type: &#123; type: &#39;string&#39;, enum: [ &#39;mobile&#39;, &#39;name&#39; ], default: &#39;mobile&#39; &#125;,
    name: &#123; type: &#39;string&#39; &#125;,
    pwd: &#123; type: &#39;string&#39; &#125;,
    mobile: &#123; type: &#39;string&#39; &#125;,
    code: &#123; type: &#39;string&#39; &#125;
  &#125;,
  required: [ &#39;type&#39; ],
  if: &#123;
    properties: &#123; type: &#123; enum: [ &#39;mobile&#39; ] &#125; &#125;
  &#125;,
  then: &#123;
    required: [ &#39;mobile&#39;, &#39;code&#39; ]
  &#125;,
  else: &#123;
    required: [ &#39;name&#39;, &#39;pwd&#39; ]
  &#125;
&#125;;
</code></pre>
<p>For above configuraion, eventual behavior is showing <code>mobile</code> and <code>code</code> in UI when login method is <code>mobile</code>, otherwise, showing <code>name</code> and <code>pwd</code>.</p>
<p>Actually, condition type is eventually parsed to <code>ui.visibleIf</code>, Convert it to the following:</p>
<pre><code class="language-ts">&#123;
  properties: &#123;
    login_type: &#123;
      type: &quot;string&quot;,
      title: &quot;\u767B\u5F55\u65B9\u5F0F&quot;,
      enum: [
        &#123; label: &quot;\u624B\u673A&quot;, value: &quot;mobile&quot; &#125;,
        &#123; label: &quot;\u8D26\u5BC6&quot;, value: &quot;account&quot; &#125;
      ],
      default: &quot;mobile&quot;,
      ui: &#123;
        widget: &quot;radio&quot;,
        styleType: &quot;button&quot;
      &#125;
    &#125;,
    mobile: &#123;
      type: &quot;string&quot;,
      ui: &#123;
        visibleIf: &#123;
          login_type: val =&gt; val === &quot;mobile&quot;
        &#125;
      &#125;
    &#125;,
    code: &#123;
      type: &quot;number&quot;,
      ui: &#123;
        visibleIf: &#123;
          login_type: val =&gt; val === &quot;mobile&quot;
        &#125;
      &#125;
    &#125;,
    name: &#123;
      type: &quot;string&quot;,
      ui: &#123;
        visibleIf: &#123;
          login_type: val =&gt; val === &quot;account&quot;
        &#125;
      &#125;
    &#125;,
    pwd: &#123;
      type: &quot;string&quot;,
      ui: &#123;
        type: &quot;password&quot;,
        visibleIf: &#123;
          login_type: val =&gt; val === &quot;account&quot;
        &#125;
      &#125;
    &#125;
  &#125;,
  required: [&quot;login_type&quot;]
&#125;;
</code></pre>
<h3 id="logic_type"><a class="lake-link"><i data-anchor="logic_type"></i></a>Logic Type</h3><table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default Value</th>
</tr>
</thead>
<tbody><tr>
<td><code>[allOf]</code></td>
<td><strong>Not recommended</strong>, can be replaced by <code>required</code></td>
<td><code>SFSchema[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[anyOf]</code></td>
<td><strong>Not recommended</strong>, can be replaced by <code>required</code> and <code>minProperties</code></td>
<td><code>SFSchema[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[oneOf]</code></td>
<td><strong>Not recommended</strong>, value must be one of</td>
<td><code>SFSchema[]</code></td>
<td>-</td>
</tr>
</tbody></table>
<blockquote>
<p><strong>Not recommended</strong>, mainly because there is no UI handle for logic type, it&#39;s similar to condition type, will affect UI rendering.</p>
</blockquote>
<h3 id="format_and_visual_type"><a class="lake-link"><i data-anchor="format_and_visual_type"></i></a>Format and Visual Type</h3><table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default Value</th>
</tr>
</thead>
<tbody><tr>
<td><code>[title]</code></td>
<td>Title</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[description]</code></td>
<td>Description</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[default]</code></td>
<td>Default value</td>
<td><code>any</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[readOnly]</code></td>
<td>If read only, equals to <code>nzDisabled</code></td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[format]</code></td>
<td>Data format, <a href="http://json-schema.org/latest/json-schema-validation.html#rfc.section.7.3" target="_blank" rel="noopener">Doc</a></td>
<td><code>string</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="other"><a class="lake-link"><i data-anchor="other"></i></a>Other</h3><table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default Value</th>
</tr>
</thead>
<tbody><tr>
<td><code>[definitions]</code></td>
<td>Internal definition</td>
<td><code>SFSchemaDefinition</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[$ref]</code></td>
<td>Reference definition</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[$comment]</code></td>
<td>Comment for developer, no real meaning, won&#39;t be validated</td>
<td><code>string</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="non_standard"><a class="lake-link"><i data-anchor="non_standard"></i></a>Non Standard</h3><table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default Value</th>
</tr>
</thead>
<tbody><tr>
<td><code>[ui]</code></td>
<td>UI configuration, has more priority than <code>ui</code> property of <code>sf</code> component</td>
<td><code>SFUISchemaItem</code></td>
<td>-</td>
</tr>
</tbody></table>
<h2 id="ui\uFF08sfuischemaitem\uFF09"><a class="lake-link"><i data-anchor="ui\uFF08sfuischemaitem\uFF09"></i></a>UI\uFF08SFUISchemaItem\uFF09</h2><p>UI Schema structure is composed by commonality and widgets, following is descriptioin of commonality part, please refer to widget API for widget part.</p>
<blockquote>
<p>In order to keep integrity of API, Schema of widget may includes commonality information.</p>
</blockquote>
<h3 id="sfuischema"><a class="lake-link"><i data-anchor="sfuischema"></i></a>SFUISchema</h3><p>Equals to <code>&lt;sf [ui]=&quot;ui&quot;&gt;</code>, a group of UI structure corresponds to JSON Schema structure, type is: <code>[ key: string ]: SFUISchemaItem</code>\u3002</p>
<h3 id="basic_type"><a class="lake-link"><i data-anchor="basic_type"></i></a>Basic Type</h3><table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default Value</th>
</tr>
</thead>
<tbody><tr>
<td><code>[debug]</code></td>
<td>Debug mode</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[order]</code></td>
<td>Order of property</td>
<td><code>string[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[asyncData]</code></td>
<td>Asynchronized static data source</td>
<td><code>(input?: any) =&gt; Observable&lt;SFSchemaEnumType[]&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[hidden]</code></td>
<td>Whether to hide</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[visibleIf]</code></td>
<td>Is visible with conditions</td>
<td>\`&#123; [key: string]: any[]</td>
<td>((value: any, property: FormProperty) =&gt; boolean) &#125;\`</td>
</tr>
<tr>
<td><code>[visibleIfLogical]</code></td>
<td>The logical used when specifying multiple <code>visibleIf</code></td>
<td><code>or, and</code></td>
<td><code>or</code></td>
</tr>
<tr>
<td><code>[acl]</code></td>
<td>ACL permission (Use <code>can()</code> verify)</td>
<td><code>ACLCanType</code></td>
<td>-</td>
</tr>
</tbody></table>
<p><strong>visibleIf</strong></p>
<p>Is visible with conditions, for example:</p>
<ul>
<li><code>visibleIf: &#123; shown: [ true ] &#125;</code>: show current property when <code>shown: true</code></li>
<li><code>visibleIf: &#123; shown: [ &#39;$ANY$&#39; ] &#125;</code>: show current property when <code>shown</code> is any value</li>
<li><code>visibleIf: &#123; shown: (value: any, property: FormProperty) =&gt; value &gt; 0 &#125;</code>: complex expression</li>
</ul>
<h3 id="validation_type"><a class="lake-link"><i data-anchor="validation_type"></i></a>Validation Type</h3><table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default Value</th>
</tr>
</thead>
<tbody><tr>
<td><code>[liveValidate]</code></td>
<td>If realtime validation</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[firstVisual]</code></td>
<td>If show visual error immediately</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[onlyVisual]</code></td>
<td>If only show visiual error not error text</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[ingoreKeywords]</code></td>
<td>Ignore validation for some data types</td>
<td><code>string[]</code></td>
<td></td>
</tr>
<tr>
<td><code>[errors]</code></td>
<td>Customized error text</td>
<td>\`&#123; [ key: string ]: string</td>
<td>((obj: ErrorData) =&gt; string) &#125;\`</td>
</tr>
<tr>
<td><code>[showRequired]</code></td>
<td>Whether to display the required logo *</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[validator]</code></td>
<td>Custom verification, the final result will be merged with Ajv verification results</td>
<td><code>(value: any, formProperty: FormProperty, form: PropertyGroup) =&gt; ErrorData[]</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="array_type"><a class="lake-link"><i data-anchor="array_type"></i></a>Array Type</h3><table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default Value</th>
</tr>
</thead>
<tbody><tr>
<td><code>[items]</code></td>
<td>UI of specific sub element</td>
<td><code>SFUISchema</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[addTitle]</code></td>
<td>Add Title</td>
<td><code>string</code></td>
<td><code>Add</code></td>
</tr>
<tr>
<td><code>[addType]</code></td>
<td>Add button style, equals to  <code>nzType</code></td>
<td><code>string</code></td>
<td><code>dashed</code></td>
</tr>
<tr>
<td><code>[removable]</code></td>
<td>If show remove button</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[removeTitle]</code></td>
<td>Text of remove button</td>
<td><code>string</code></td>
<td><code>Remove</code></td>
</tr>
</tbody></table>
<h3 id="form_element_type"><a class="lake-link"><i data-anchor="form_element_type"></i></a>Form Element Type</h3><table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default Value</th>
</tr>
</thead>
<tbody><tr>
<td><code>[type]</code></td>
<td><code>type</code> of <code>input</code></td>
<td><code>string</code></td>
<td><code>text</code></td>
</tr>
<tr>
<td><code>[placeholder]</code></td>
<td>placeholder</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[autofocus]</code></td>
<td>If auto focus during loading</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="render_type"><a class="lake-link"><i data-anchor="render_type"></i></a>Render Type</h3><table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default Value</th>
</tr>
</thead>
<tbody><tr>
<td><code>[widget]</code></td>
<td>Widget</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[i18n]</code></td>
<td>Refers to the i18n key of <code>schema.title</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[descriptionI18n]</code></td>
<td>Refers to the i18n key of <code>schema.description</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[class]</code></td>
<td>Customized class, equals to <code>[ngClass]</code></td>
<td><code>string,string[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[width]</code></td>
<td>Width, unit: <code>px</code></td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[size]</code></td>
<td>Size of element</td>
<td><code>default,large,small</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[grid]</code></td>
<td>Property for responsive</td>
<td><code>SFGridSchema</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[optional]</code></td>
<td>Optional</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[optionalHelp]</code></td>
<td>Optional help</td>
<td><code>string, SFOptionalHelp</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[collapse]</code></td>
<td>Mark this field as collapsible when form is collapsed</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="responsive_property_sfgridschema"><a class="lake-link"><i data-anchor="responsive_property_sfgridschema"></i></a>Responsive Property SFGridSchema</h3><p><code>grid</code> equals to complete <a href="https://ng.ant.design/components/grid/en" target="_blank" rel="noopener">Grid</a>, can determine how to render the form by <code>grid</code></p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default Value</th>
</tr>
</thead>
<tbody><tr>
<td><code>[gutter]</code></td>
<td>Gutter</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[span]</code></td>
<td>Number of column for each element, <code>0</code> means <code>display: none</code></td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[xs]</code></td>
<td><code>&lt;768px</code> responsive grid, can be number of columns or including object of other properties</td>
<td><code>number, SFGridSizeSchema</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[sm]</code></td>
<td><code>\u2265768px</code> responsive grid, can be number of columns or including object of other properties</td>
<td><code>number, SFGridSizeSchema</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[md]</code></td>
<td><code>\u2265992px</code> responsive grid, can be number of columns or including object of other properties</td>
<td><code>number, SFGridSizeSchema</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[lg]</code></td>
<td><code>\u22651200px</code> responsive grid, can be number of columns or including object of other properties</td>
<td><code>number, SFGridSizeSchema</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[xl]</code></td>
<td><code>\u22651600px</code> responsive grid, can be number of columns or including object of other properties</td>
<td><code>number, SFGridSizeSchema</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[xxl]</code></td>
<td>Reserved field, support after version <code>0.7.0</code></td>
<td><code>number, SFGridSizeSchema</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="horizontal_layout_type"><a class="lake-link"><i data-anchor="horizontal_layout_type"></i></a>Horizontal Layout Type</h3><blockquote>
<p>The sum of label and control <strong>must</strong> be <code>24</code></p>
</blockquote>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default Value</th>
</tr>
</thead>
<tbody><tr>
<td><code>[spanLabel]</code></td>
<td>Number of column for <code>label</code></td>
<td><code>number</code></td>
<td>5</td>
</tr>
<tr>
<td><code>[spanControl]</code></td>
<td>Number of column for form element</td>
<td><code>number</code></td>
<td>19</td>
</tr>
<tr>
<td><code>[offsetControl]</code></td>
<td>Number of column for left side of <code>control</code></td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[spanLabelFixed]</code></td>
<td>Fixed width for <code>label</code></td>
<td><code>number</code></td>
<td>-</td>
</tr>
</tbody></table>
`,api:"",toc:[{id:"prologue",title:"Prologue",children:[{id:"non_pollution",title:"Non Pollution"},{id:"relationship_between_form_and_data_structure",title:"Relationship between Form and Data Structure"},{id:"some_specifications",title:"Some Specifications"}]},{id:"json_schema\uFF08sfschema\uFF09",title:"JSON Schema\uFF08SFSchema\uFF09",children:[{id:"common_type",title:"Common Type"},{id:"value_type",title:"Value Type"},{id:"string_type",title:"String Type"},{id:"array_type",title:"Array Type"},{id:"object_type",title:"Object Type"},{id:"condition_type",title:"Condition Type"},{id:"logic_type",title:"Logic Type"},{id:"format_and_visual_type",title:"Format and Visual Type"},{id:"other",title:"Other"},{id:"non_standard",title:"Non Standard"}]},{id:"ui\uFF08sfuischemaitem\uFF09",title:"UI\uFF08SFUISchemaItem\uFF09",children:[{id:"sfuischema",title:"SFUISchema"},{id:"basic_type",title:"Basic Type"},{id:"validation_type",title:"Validation Type"},{id:"array_type",title:"Array Type"},{id:"form_element_type",title:"Form Element Type"},{id:"render_type",title:"Render Type"},{id:"responsive_property_sfgridschema",title:"Responsive Property SFGridSchema"},{id:"horizontal_layout_type",title:"Horizontal Layout Type"}]}],raw:"---\norder: 2\ntitle: Schema\ntype: Documents\n---\n\n## Prologue\n\n[JSON Schema](http://json-schema.org/) is a specification to define JSON data structure, it doesn't include detailed explanation about how to convert the specification to specific forms, `@delon/form` is a dynamic form library developed based on our own understanding of JSON Schema and current data input components of `ng-zorro-antd`.\n\nJSON Schema **must always** have a type `type=\"object\"` as **root node**\uFF0Ctherefore a simplest Schema structure at least is:\n\n```ts\nschema = {\n  type: 'object', // optional, set to `object` by default\n  properties: {}\n}\n```\n\nAhead of dscribing Schema, it is necessary to make a systematic description about the relationship between form elements and Schema.\n\nAs we know, form is a set of HTML elements, every element maps to one Schema property, a property has it's own data type, format, visual information, etc., but this is not enough to describe the rich APIs provided by `ng-zorro-antd`. In order to better use these APIs, `@delon/form` not only implemented most standard JSON Schema, but also added an additional property `ui`, which is used to describe how to render the property.\n\n### Non Pollution\n\nOf course, you can set `<sf [ui]=\"ui\">` to add additional UI rendering if you have strict requirement about standard, or JSON Schema data is generated from backend. For example:\n\n```ts\nschema = {\n  properties: {\n    url: {\n      type: 'string',\n      title: 'Web Site'\n    }\n  }\n}\n```\n\nA URL property, the pure JSON Schema structure cann't describe about adding prefix `https://`, but `nz-input` supports very rich prefix and postfix texts, so we can customize it in `ui` to add prefix `https://`:\n\n```ts\nui = {\n  $url: {\n    addOnBefore: 'https://'\n  }\n}\n```\n\n`ui` itself is a JSON structure, in order to distinguish with relationship of JSON Schema property, **must** add prefix `$` to all properties; must replace array elements with `$items`. When KEY is `*`, it is valid for all properties.\n\n### Relationship between Form and Data Structure\n\nWe think a complete form should include some of following elements:\n\n![](./assets/img/form-input.png)\n\nDescription from left to right:\n\n| Structure Source | Parameter | Description | Type | Default Value |\n|------------------|-----------|-------------|------|---------------|\n| Schema | `[required]` | If required | `string[]` | - |\n| Schema | `[title]` | Title | `string` | - |\n| ui | `[optional]` | Optional information | `string` | - |\n| ui | `[optionalHelp]` | Optional help information | `string, SFOptionalHelp` | - |\n| ui | `[placeholder]` | Placeholder | `string` | - |\n| Schema | `[description]` | Description for the property | `string` | - |\n| - | `[error]` | Error information | `string` | - |\n\n### Some Specifications\n\n- Following camelCase to name `key`\n- You can ignore description marked as **Not recommended** if you are very familiar with JSON Schema.\n\n## JSON Schema\uFF08SFSchema\uFF09\n\nJSON Schema has complete specification descrbes for each property, `@delon/form` is currently based on specification [draft-07](http://json-schema.org/), following is the detailed explanation of specification:\n\n### Common Type\n\n| Parameter | Description | Type | Default Value |\n|-----------|-------------|------|---------------|\n| `[type]` | Data type, support JavaScript basic types | `number,string,boolean,object,array` | `object` |\n| `[enum]` | Enum, static data source | `SFSchemaEnumType[]` | - |\n\n### Value Type\n\n| Parameter | Description | Type | Default Value |\n|-----------|-------------|------|---------------|\n| `[minimum]` | Minimum value | `number` | - |\n| `[exclusiveMinimum]` | If excluding `minimum` value | `boolean` | - |\n| `[maximum]` | Maximum value | `number` | - |\n| `[exclusiveMaximum]` | If excluding `maximum` value | `boolean` | - |\n| `[multipleOf]` | Multiple | `number` | - |\n\n**About exclusiveMinimum and exclusiveMaximum**\n\nThe implementation mechanism of `sf` causes that it couldn't handle error capturing for `type` perpectly, therefore `sf` ignores all `type` (see [config.ts](https://github.com/ng-alain/delon/blob/master/packages/form/src/config.ts#L12)) errors by default, these two kinds of errors are considered as `type` error, which will trigger invalid check. (find more details from [#676](https://github.com/ng-alain/ng-alain/issues/676#issuecomment-420208459)\uFF09\n\n### String Type\n\n| Parameter | Description | Type | Default Value |\n|-----------|-------------|------|---------------|\n| `[maxLength]` | Maximum length of string | `number` | - |\n| `[minLength]` | Minimum length of string | `number` | - |\n| `[pattern]` | Regular expression | `string` | - |\n\n### Array Type\n\n| Parameter | Description | Type | Default Value |\n|-----------|-------------|------|---------------|\n| `[items]` | Array element description, only support array object. Can use other components if array of basic type is needed | `SFSchema` | - |\n| `[minItems]` | Minimum number of element in array | `number` | - |\n| `[maxItems]` | Maximum number of element in array | `number` | - |\n| `[uniqueItems]` | Element is unique in array | `boolean` | - |\n| `[additionalItems]` | additional validation rules for array | `SFSchema` | - |\n\n### Object Type\n\n| Parameter | Description | Type | Default Value |\n|-----------|-------------|------|---------------|\n| `[maxProperties]` | Maximum number of property, must be a nonnegative integer | `number` | - |\n| `[minProperties]` | Maximum number of property, must be a nonnegative integer | `number` | - |\n| `[required]` | If required | `string[]` | - |\n| `[properties]` | Propery definition | `{ [key: string]: SFSchema }` | - |\n\n### Condition Type\n\n| Parameter | Description | Type | Default Value |\n|-----------|-------------|------|---------------|\n| `[if]` | Condition validation | `SFSchema` | - |\n| `[then]` | Condition validation | `SFSchema` | - |\n| `[else]` | Condition validation | `SFSchema` | - |\n\nValidation of condition check is very strong and rich, but considering it breaks UI and adds complexity to component build, `@delon/form` only implements `required`, and uses it to determine if need validation, for example, a login page, it can show different login mode based on different login methods:\n\n```ts\nschema: SFSchema = {\n  properties: {\n    type: { type: 'string', enum: [ 'mobile', 'name' ], default: 'mobile' },\n    name: { type: 'string' },\n    pwd: { type: 'string' },\n    mobile: { type: 'string' },\n    code: { type: 'string' }\n  },\n  required: [ 'type' ],\n  if: {\n    properties: { type: { enum: [ 'mobile' ] } }\n  },\n  then: {\n    required: [ 'mobile', 'code' ]\n  },\n  else: {\n    required: [ 'name', 'pwd' ]\n  }\n};\n```\n\nFor above configuraion, eventual behavior is showing `mobile` and `code` in UI when login method is `mobile`, otherwise, showing `name` and `pwd`.\n\nActually, condition type is eventually parsed to `ui.visibleIf`, Convert it to the following:\n\n```ts\n{\n  properties: {\n    login_type: {\n      type: \"string\",\n      title: \"\u767B\u5F55\u65B9\u5F0F\",\n      enum: [\n        { label: \"\u624B\u673A\", value: \"mobile\" },\n        { label: \"\u8D26\u5BC6\", value: \"account\" }\n      ],\n      default: \"mobile\",\n      ui: {\n        widget: \"radio\",\n        styleType: \"button\"\n      }\n    },\n    mobile: {\n      type: \"string\",\n      ui: {\n        visibleIf: {\n          login_type: val => val === \"mobile\"\n        }\n      }\n    },\n    code: {\n      type: \"number\",\n      ui: {\n        visibleIf: {\n          login_type: val => val === \"mobile\"\n        }\n      }\n    },\n    name: {\n      type: \"string\",\n      ui: {\n        visibleIf: {\n          login_type: val => val === \"account\"\n        }\n      }\n    },\n    pwd: {\n      type: \"string\",\n      ui: {\n        type: \"password\",\n        visibleIf: {\n          login_type: val => val === \"account\"\n        }\n      }\n    }\n  },\n  required: [\"login_type\"]\n};\n```\n\n### Logic Type\n\n| Parameter | Description | Type | Default Value |\n|-----------|-------------|------|---------------|\n| `[allOf]` | **Not recommended**, can be replaced by `required` | `SFSchema[]` | - |\n| `[anyOf]` | **Not recommended**, can be replaced by `required` and `minProperties` | `SFSchema[]` | - |\n| `[oneOf]` | **Not recommended**, value must be one of | `SFSchema[]` | - |\n\n> **Not recommended**, mainly because there is no UI handle for logic type, it's similar to condition type, will affect UI rendering.\n\n### Format and Visual Type\n\n| Parameter | Description | Type | Default Value |\n|-----------|-------------|------|---------------|\n| `[title]` | Title | `string` | - |\n| `[description]` | Description | `string` | - |\n| `[default]` | Default value | `any` | - |\n| `[readOnly]` | If read only, equals to `nzDisabled` | `boolean` | - |\n| `[format]` | Data format, [Doc](http://json-schema.org/latest/json-schema-validation.html#rfc.section.7.3) | `string` | - |\n\n### Other\n\n| Parameter | Description | Type | Default Value |\n|-----------|-------------|------|---------------|\n| `[definitions]` | Internal definition | `SFSchemaDefinition` | - |\n| `[$ref]` | Reference definition | `string` | - |\n| `[$comment]` | Comment for developer, no real meaning, won't be validated | `string` | - |\n\n### Non Standard\n\n| Parameter | Description | Type | Default Value |\n|-----------|-------------|------|---------------|\n| `[ui]` | UI configuration, has more priority than `ui` property of `sf` component | `SFUISchemaItem` | - |\n\n## UI\uFF08SFUISchemaItem\uFF09\n\nUI Schema structure is composed by commonality and widgets, following is descriptioin of commonality part, please refer to widget API for widget part.\n\n> In order to keep integrity of API, Schema of widget may includes commonality information.\n\n### SFUISchema\n\nEquals to `<sf [ui]=\"ui\">`, a group of UI structure corresponds to JSON Schema structure, type is: `[ key: string ]: SFUISchemaItem`\u3002\n\n### Basic Type\n\n| Parameter | Description | Type | Default Value |\n|-----------|-------------|------|---------------|\n| `[debug]` | Debug mode | `boolean` | - |\n| `[order]` | Order of property | `string[]` | - |\n| `[asyncData]` | Asynchronized static data source | `(input?: any) => Observable<SFSchemaEnumType[]>` | - |\n| `[hidden]` | Whether to hide | `boolean` | `false` |\n| `[visibleIf]` | Is visible with conditions | `{ [key: string]: any[] | ((value: any, property: FormProperty) => boolean) }` | - |\n| `[visibleIfLogical]` | The logical used when specifying multiple `visibleIf` | `or, and` | `or` |\n| `[acl]` | ACL permission (Use `can()` verify) | `ACLCanType` | - |\n\n**visibleIf**\n\nIs visible with conditions, for example:\n\n- `visibleIf: { shown: [ true ] }`: show current property when `shown: true`\n- `visibleIf: { shown: [ '$ANY$' ] }`: show current property when `shown` is any value\n- `visibleIf: { shown: (value: any, property: FormProperty) => value > 0 }`: complex expression\n\n### Validation Type\n\n| Parameter | Description | Type | Default Value |\n|-----------|-------------|------|---------------|\n| `[liveValidate]` | If realtime validation | `boolean` | `true` |\n| `[firstVisual]` | If show visual error immediately | `boolean` | `false` |\n| `[onlyVisual]` | If only show visiual error not error text | `boolean` | `false` |\n| `[ingoreKeywords]` | Ignore validation for some data types | `string[]` |  |\n| `[errors]` | Customized error text | `{ [ key: string ]: string | ((obj: ErrorData) => string) }` | - |\n| `[showRequired]` | Whether to display the required logo * | `boolean` | - |\n| `[validator]` | Custom verification, the final result will be merged with Ajv verification results | `(value: any, formProperty: FormProperty, form: PropertyGroup) => ErrorData[]` | - |\n\n### Array Type\n\n| Parameter | Description | Type | Default Value |\n|-----------|-------------|------|---------------|\n| `[items]` | UI of specific sub element | `SFUISchema` | - |\n| `[addTitle]` | Add Title | `string` | `Add` |\n| `[addType]` | Add button style, equals to  `nzType` | `string` | `dashed` |\n| `[removable]` | If show remove button | `boolean` | - |\n| `[removeTitle]` | Text of remove button | `string` | `Remove` |\n\n### Form Element Type\n\n| Parameter | Description | Type | Default Value |\n|-----------|-------------|------|---------------|\n| `[type]` | `type` of `input` | `string` | `text` |\n| `[placeholder]` | placeholder | `string` | - |\n| `[autofocus]` | If auto focus during loading | `boolean` | - |\n\n### Render Type\n\n| Parameter | Description | Type | Default Value |\n|-----------|-------------|------|---------------|\n| `[widget]` | Widget | `string` | - |\n| `[i18n]` | Refers to the i18n key of `schema.title` | `string` | - |\n| `[descriptionI18n]` | Refers to the i18n key of `schema.description` | `string` | - |\n| `[class]` | Customized class, equals to `[ngClass]` | `string,string[]` | - |\n| `[width]` | Width, unit: `px` | `number` | - |\n| `[size]` | Size of element | `default,large,small` | - |\n| `[grid]` | Property for responsive | `SFGridSchema` | - |\n| `[optional]` | Optional | `string` | - |\n| `[optionalHelp]` | Optional help | `string, SFOptionalHelp` | - |\n| `[collapse]` | Mark this field as collapsible when form is collapsed | `boolean` | - |\n\n### Responsive Property SFGridSchema\n\n`grid` equals to complete [Grid](https://ng.ant.design/components/grid/en), can determine how to render the form by `grid`\n\n| Parameter | Description | Type | Default Value |\n|-----------|-------------|------|---------------|\n| `[gutter]` | Gutter | `number` | - |\n| `[span]` | Number of column for each element, `0` means `display: none` | `number` | - |\n| `[xs]` | `<768px` responsive grid, can be number of columns or including object of other properties | `number, SFGridSizeSchema` | - |\n| `[sm]` | `\u2265768px` responsive grid, can be number of columns or including object of other properties | `number, SFGridSizeSchema` | - |\n| `[md]` | `\u2265992px` responsive grid, can be number of columns or including object of other properties | `number, SFGridSizeSchema` | - |\n| `[lg]` | `\u22651200px` responsive grid, can be number of columns or including object of other properties | `number, SFGridSizeSchema` | - |\n| `[xl]` | `\u22651600px` responsive grid, can be number of columns or including object of other properties | `number, SFGridSizeSchema` | - |\n| `[xxl]` | Reserved field, support after version `0.7.0` | `number, SFGridSizeSchema` | - |\n\n### Horizontal Layout Type\n\n> The sum of label and control **must** be `24`\n\n| Parameter | Description | Type | Default Value |\n|-----------|-------------|------|---------------|\n| `[spanLabel]` | Number of column for `label` | `number` | 5 |\n| `[spanControl]` | Number of column for form element | `number` | 19 |\n| `[offsetControl]` | Number of column for left side of `control` | `number` | - |\n| `[spanLabelFixed]` | Fixed width for `label` | `number` | - |"},"zh-CN":{meta:{order:2,title:"Schema",description:'JSON Schema \u662F\u4E00\u79CD\u6807\u51C6\u7684\u5B9A\u4E49 JSON \u6570\u636E\u7ED3\u6784\u7684\u89C4\u8303\uFF0C\u5E76\u4E0D\u5305\u542B\u5BF9\u8FD9\u4E9B\u89C4\u8303\u8F6C\u6362\u6210\u8868\u5355\u5177\u4F53\u8BF4\u660E\uFF0C@delon/form \u4E5F\u662F\u6839\u636E\u81EA\u5DF1\u7684\u7406\u89E3\u5E76\u7ED3\u5408 ng-zorro-antd \u73B0\u6709\u6570\u636E\u5F55\u5165\u7EC4\u4EF6\u5E93\u4EA7\u751F\u7684\u52A8\u6001\u6784\u5EFA\u8868\u5355\u7C7B\u5E93\u3002JSON Schema \u59CB\u7EC8\u90FD\u5FC5\u987B\u6709\u4E00\u4E2A\u7C7B\u578B\u4E3A type="object"',group:"Documents",path:"packages/form/docs/schema.zh-CN.md",url:"/form/schema/zh"},text:`<h2 id="\u5199\u5728\u524D\u9762"><a class="lake-link"><i data-anchor="\u5199\u5728\u524D\u9762"></i></a>\u5199\u5728\u524D\u9762</h2><p><a href="http://json-schema.org/" target="_blank" rel="noopener">JSON Schema</a> \u662F\u4E00\u79CD\u6807\u51C6\u7684\u5B9A\u4E49 JSON \u6570\u636E\u7ED3\u6784\u7684\u89C4\u8303\uFF0C\u5E76\u4E0D\u5305\u542B\u5BF9\u8FD9\u4E9B\u89C4\u8303\u8F6C\u6362\u6210\u8868\u5355\u5177\u4F53\u8BF4\u660E\uFF0C<code>&#64;delon/form</code> \u4E5F\u662F\u6839\u636E\u81EA\u5DF1\u7684\u7406\u89E3\u5E76\u7ED3\u5408 <code>ng-zorro-antd</code> \u73B0\u6709\u6570\u636E\u5F55\u5165\u7EC4\u4EF6\u5E93\u4EA7\u751F\u7684\u52A8\u6001\u6784\u5EFA\u8868\u5355\u7C7B\u5E93\u3002</p>
<p>JSON Schema <strong>\u59CB\u7EC8</strong>\u90FD\u5FC5\u987B\u6709\u4E00\u4E2A\u7C7B\u578B\u4E3A <code>type=&quot;object&quot;</code> \u4F5C\u4E3A<strong>\u6839\u8282\u70B9</strong>\uFF0C\u56E0\u6B64\u4E00\u4E2A\u6700\u7B80\u5355\u7684 Schema \u7ED3\u6784\u81F3\u5C11\u662F\uFF1A</p>
<pre><code class="language-ts">schema = &#123;
  type: &#39;object&#39;, // \u53EF\u6709\u53EF\u65E0\uFF0C\u9ED8\u8BA4\u4F1A\u5F3A\u5236\u4E3A \`object\`
  properties: &#123;&#125;
&#125;
</code></pre>
<p>\u5728\u63CF\u8FF0 Schema \u8BF4\u660E\u4E4B\u524D\uFF0C\u6709\u5FC5\u8981\u5BF9\u8868\u5355\u5143\u7D20\u4E0E Schema \u4E4B\u524D\u7684\u8054\u7CFB\u505A\u4E00\u4E2A\u7CFB\u7EDF\u6027\u8BF4\u660E\u3002</p>
<p>\u6211\u4EEC\u77E5\u9053\uFF0C\u8868\u5355\u662F\u7531\u4E00\u7EC4HTML\u5143\u7D20\u7EC4\u4EF6\uFF0C\u6BCF\u4E00\u4E2A\u5143\u7D20\u5BF9\u5E94\u4E00\u4E2A Schema \u5C5E\u6027\uFF0C\u5C5E\u6027\u6709\u81EA\u5DF1\u7684\u6570\u636E\u7C7B\u578B\u3001\u683C\u5F0F\u4FE1\u606F\u3001\u89C6\u89C9\u4FE1\u606F\u7B49\uFF0C\u4F46\u8FD9\u4E9B\u4FE1\u606F\u4E0D\u8DB3\u4EE5\u8868\u8FF0 <code>ng-zorro-antd</code> \u6240\u63D0\u4F9B\u7684\u4E30\u5BCCAPI\u63A5\u53E3\u3002\u4E3A\u4E86\u66F4\u597D\u5229\u7528\u8FD9\u4E9BAPI\u63A5\u53E3\uFF0C<code>&#64;delon/form</code> \u9664\u4E86\u5B9E\u73B0\u7EDD\u5927\u90E8\u5206 JSON Schema \u6807\u51C6\u4EE5\u5916\uFF0C\u989D\u5916\u552F\u4E00\u589E\u52A0\u4E86\u4E00\u4E2A <code>ui</code> \u5C5E\u6027\u7528\u4E8E\u8868\u8FF0\u5C5E\u6027\u5982\u4F55\u6E32\u67D3\u7684\u95EE\u9898\u3002</p>
<h3 id="\u65E0\u6C61\u67D3"><a class="lake-link"><i data-anchor="\u65E0\u6C61\u67D3"></i></a>\u65E0\u6C61\u67D3</h3><p>\u5F53\u7136\u82E5\u4F60\u5BF9\u6807\u51C6\u6709\u975E\u5E38\u4E25\u683C\uFF0C\u6216\u8005 JSON Schema \u6570\u636E\u7ED3\u6784\u662F\u6765\u81EA\u540E\u7AEF\u7684\u4EA7\u751F\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>&lt;sf [ui]=&quot;ui&quot;&gt;</code> \u6765\u989D\u5916\u5BF9\u5F53\u524D JSON Schema \u6DFB\u52A0 UI \u6E32\u67D3\u3002\u4F8B\u5982\uFF1A</p>
<pre><code class="language-ts">schema = &#123;
  properties: &#123;
    url: &#123;
      type: &#39;string&#39;,
      title: &#39;Web Site&#39;
    &#125;
  &#125;
&#125;
</code></pre>
<p>\u4E00\u4E2AURL\u5C5E\u6027\uFF0C\u82E5\u6211\u4EEC\u4E0D\u5E0C\u671B\u7528\u4E8E\u6DFB\u52A0 <code>https://</code> \u524D\u7F00\u7684\u60C5\u51B5\u4E0B\uFF0C\u5C31\u5355\u7EAF\u7684 JSON Schema \u7ED3\u6784\u662F\u65E0\u6CD5\u8868\u8FF0\uFF0C\u800C <code>nz-input</code> \u53C8\u652F\u6301\u975E\u5E38\u4E30\u5BCC\u7684\u524D\u540E\u7F00\u6587\u672C\uFF0C\u5219\u6211\u4EEC\u53EF\u4EE5\u4E3A <code>ui</code> \u5B9A\u5236\u5E76\u589E\u52A0 <code>https://</code> \u7684\u524D\u7F00\u6587\u672C\uFF1A</p>
<pre><code class="language-ts">ui = &#123;
  $url: &#123;
    addOnBefore: &#39;https://&#39;
  &#125;
&#125;
</code></pre>
<p>ui \u672C\u8EAB\u4E5F\u662F\u4E00\u4E2A JSON \u7ED3\u6784\uFF0C\u4E3A\u4E86\u533A\u5206 JSON Schema \u5C5E\u6027\u540D\u7684\u5BF9\u5E94\u5173\u7CFB\uFF0C<strong>\u5FC5\u987B</strong>\u7EDF\u4E00\u5BF9\u5C5E\u6027\u540D\u52A0\u4E0A <code>$</code> \u524D\u7F00\uFF1B\u5BF9\u4E8E\u6570\u7EC4\u7684\u5143\u7D20\u5BF9\u8C61\u5FC5\u987B\u4F7F\u7528 <code>$items</code> \u66FF\u4EE3\u3002\u5F53KEY\u4E3A <code>*</code> \u65F6\u8868\u793A\u5BF9\u6240\u6709\u5B50\u8868\u5355\u5143\u7D20\u90FD\u6709\u6548\u3002</p>
<h3 id="\u8868\u5355yuan\u7D20\u4E0E\u6570\u636E\u7ED3\u6784\u7684\u5BF9\u5E94\u5173\u7CFB"><a class="lake-link"><i data-anchor="\u8868\u5355yuan\u7D20\u4E0E\u6570\u636E\u7ED3\u6784\u7684\u5BF9\u5E94\u5173\u7CFB"></i></a>\u8868\u5355\u5143\u7D20\u4E0E\u6570\u636E\u7ED3\u6784\u7684\u5BF9\u5E94\u5173\u7CFB</h3><p>\u4E00\u4E2A\u5B8C\u6574\u7684\u8868\u5355\u5143\u7D20\u6211\u4EEC\u8BA4\u4E3A\u5E94\u8BE5\u5305\u542B\u4EE5\u4E0B\u82E5\u5E72\u5143\u7D20\uFF1A</p>
<p><img src="./assets/img/form-input.png" alt=""></p>
<p>\u4ECE\u5DE6\u81F3\u5411\u5404\u5143\u7D20\u63CF\u8FF0\uFF1A</p>
<table>
<thead>
<tr>
<th>\u7ED3\u6784\u6E90</th>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td>Schema</td>
<td><code>[required]</code></td>
<td>\u662F\u5426\u5FC5\u586B\u9879</td>
<td><code>string[]</code></td>
<td>-</td>
</tr>
<tr>
<td>Schema</td>
<td><code>[title]</code></td>
<td>\u5C5E\u6027\u63CF\u8FF0</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td>ui</td>
<td><code>[optional]</code></td>
<td>\u6807\u7B7E\u53EF\u9009\u4FE1\u606F</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td>ui</td>
<td><code>[optionalHelp]</code></td>
<td>\u6807\u7B7E\u53EF\u9009\u5E2E\u52A9</td>
<td><code>string, SFOptionalHelp</code></td>
<td>-</td>
</tr>
<tr>
<td>ui</td>
<td><code>[placeholder]</code></td>
<td>\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u4FE1\u606F</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td>Schema</td>
<td><code>[description]</code></td>
<td>\u5C5E\u6027\u76EE\u7684\u6027\u89E3\u91CA</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td>-</td>
<td><code>[error]</code></td>
<td>\u9519\u8BEF\u4FE1\u606F</td>
<td><code>string</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="\u4E00\u70B9\u89C4\u8303"><a class="lake-link"><i data-anchor="\u4E00\u70B9\u89C4\u8303"></i></a>\u4E00\u70B9\u89C4\u8303</h3><ul>
<li>\u6240\u6709 <code>key</code> \u6309\u9A7C\u5CF0\u5F0F\u547D\u540D\u6CD5</li>
<li>\u82E5\u4F60\u5BF9 JSON Schema \u5F88\u719F\u6089\uFF0C\u5219\u5FFD\u7565 <strong>\u4E0D\u5EFA\u8BAE</strong> \u5B57\u6837</li>
</ul>
<h2 id="json_schema\uFF08sfschema\uFF09"><a class="lake-link"><i data-anchor="json_schema\uFF08sfschema\uFF09"></i></a>JSON Schema\uFF08SFSchema\uFF09</h2><p>JSON Schema \u6709\u5B8C\u6574\u7684\u5BF9\u6BCF\u4E2A\u5C5E\u6027\u7684\u89C4\u8303\u63CF\u8FF0\uFF0C<code>&#64;delon/form</code> \u5F53\u524D\u662F\u57FA\u4E8E <a href="http://json-schema.org/" target="_blank" rel="noopener">draft-07</a> \u89C4\u8303\uFF0C\u4E0B\u5217\u662F\u89C4\u8303\u5177\u4F53\u8BF4\u660E\uFF1A</p>
<h3 id="\u5E38\u89C4\u7C7B"><a class="lake-link"><i data-anchor="\u5E38\u89C4\u7C7B"></i></a>\u5E38\u89C4\u7C7B</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[type]</code></td>
<td>\u6570\u636E\u7C7B\u578B\uFF0C\u652F\u6301 JavaScript \u57FA\u7840\u7C7B\u578B</td>
<td><code>number,string,boolean,object,array</code></td>
<td><code>object</code></td>
</tr>
<tr>
<td><code>[enum]</code></td>
<td>\u679A\u4E3E\uFF0C\u9759\u6001\u6570\u636E\u6E90</td>
<td><code>SFSchemaEnumType[]</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="\u6570\u503C\u7C7B\u578B"><a class="lake-link"><i data-anchor="\u6570\u503C\u7C7B\u578B"></i></a>\u6570\u503C\u7C7B\u578B</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[minimum]</code></td>
<td>\u6700\u5C0F\u503C</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[exclusiveMinimum]</code></td>
<td>\u7EA6\u675F\u662F\u5426\u5305\u62EC <code>minimum</code> \u503C</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[maximum]</code></td>
<td>\u6700\u5927\u503C</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[exclusiveMaximum]</code></td>
<td>\u7EA6\u675F\u662F\u5426\u5305\u62EC <code>maximum</code> \u503C</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[multipleOf]</code></td>
<td>\u500D\u6570</td>
<td><code>number</code></td>
<td>-</td>
</tr>
</tbody></table>
<p><strong>\u5173\u4E8EexclusiveMinimum\u548CexclusiveMaximum</strong></p>
<p><code>sf</code> \u7684\u5B9E\u73B0\u673A\u5236\u5BFC\u81F4\u65E0\u6CD5\u5F88\u597D\u7684\u5904\u7406 <code>type</code> \u7C7B\u578B\u7684\u9519\u8BEF\u6355\u83B7\uFF0C\u56E0\u6B64\u9ED8\u8BA4\u60C5\u51B5\u4E0B <code>sf</code> \u662F\u5FFD\u7565\u4E86\u6240\u6709 <code>type</code> \uFF08\u89C1 <a href="https://github.com/ng-alain/delon/blob/master/packages/form/src/config.ts#L12" target="_blank" rel="noopener">config.ts</a>\uFF09\u7C7B\u578B\u9519\u8BEF\uFF0C\u800C\u8FD9\u4E24\u79CD\u90FD\u9519\u8BEF\u90FD\u4F1A\u88AB\u8BA4\u4E3A <code>type</code> \u7C7B\u578B\u9519\u8BEF\uFF0C\u4ECE\u800C\u5BFC\u81F4\u89E6\u53D1\u65E0\u6548\u68C0\u67E5\u7684\u539F\u56E0\u3002\uFF08\u66F4\u591A\u7EC6\u8282\u8BF7\u53C2\u8003 <a href="https://github.com/ng-alain/ng-alain/issues/676#issuecomment-420208459" target="_blank" rel="noopener">#676</a>\uFF09</p>
<h3 id="\u5B57\u7B26\u4E32\u7C7B\u578B"><a class="lake-link"><i data-anchor="\u5B57\u7B26\u4E32\u7C7B\u578B"></i></a>\u5B57\u7B26\u4E32\u7C7B\u578B</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[maxLength]</code></td>
<td>\u5B9A\u4E49\u5B57\u7B26\u4E32\u7684\u6700\u5927\u957F\u5EA6</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[minLength]</code></td>
<td>\u5B9A\u4E49\u5B57\u7B26\u4E32\u7684\u6700\u5C0F\u957F\u5EA6</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[pattern]</code></td>
<td>\u9A8C\u8BC1\u8F93\u5165\u5B57\u6BB5\u6B63\u5219\u8868\u8FBE\u5F0F\u5B57\u7B26\u4E32</td>
<td><code>string</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="\u6570\u7EC4\u7C7B\u578B"><a class="lake-link"><i data-anchor="\u6570\u7EC4\u7C7B\u578B"></i></a>\u6570\u7EC4\u7C7B\u578B</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[items]</code></td>
<td>\u6570\u7EC4\u5143\u7D20\u7C7B\u578B\u63CF\u8FF0\uFF0C\u53EA\u652F\u6301\u6570\u7EC4\u5BF9\u8C61\uFF0C\u82E5\u9700\u8981\u57FA\u7840\u7C7B\u578B\u6570\u7EC4\u53EF\u901A\u8FC7\u5176\u4ED6\u90E8\u4EF6\u652F\u6301</td>
<td><code>SFSchema</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[minItems]</code></td>
<td>\u7EA6\u675F\u6570\u7EC4\u6700\u5C0F\u7684\u5143\u7D20\u4E2A\u6570</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[maxItems]</code></td>
<td>\u7EA6\u675F\u6570\u7EC4\u6700\u5927\u7684\u5143\u7D20\u4E2A\u6570</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[uniqueItems]</code></td>
<td>\u7EA6\u675F\u6570\u7EC4\u6BCF\u4E2A\u5143\u7D20\u90FD\u4E0D\u76F8\u540C</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[additionalItems]</code></td>
<td>\u6570\u7EC4\u989D\u5916\u5143\u7D20\u7684\u6821\u9A8C\u89C4\u5219</td>
<td><code>SFSchema</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="\u5BF9\u8C61\u7C7B\u578B"><a class="lake-link"><i data-anchor="\u5BF9\u8C61\u7C7B\u578B"></i></a>\u5BF9\u8C61\u7C7B\u578B</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[maxProperties]</code></td>
<td>\u6700\u5927\u5C5E\u6027\u4E2A\u6570\uFF0C\u5FC5\u987B\u662F\u975E\u8D1F\u6574\u6570</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[minProperties]</code></td>
<td>\u6700\u5C0F\u5C5E\u6027\u4E2A\u6570\uFF0C\u5FC5\u987B\u662F\u975E\u8D1F\u6574\u6570</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[required]</code></td>
<td>\u5FC5\u9700\u5C5E\u6027</td>
<td><code>string[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[properties]</code></td>
<td>\u5B9A\u4E49\u5C5E\u6027</td>
<td><code>&#123; [key: string]: SFSchema &#125;</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="\u6761\u4EF6\u7C7B"><a class="lake-link"><i data-anchor="\u6761\u4EF6\u7C7B"></i></a>\u6761\u4EF6\u7C7B</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[if]</code></td>
<td>\u6761\u4EF6\u9A8C\u8BC1</td>
<td><code>SFSchema</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[then]</code></td>
<td>\u6761\u4EF6\u9A8C\u8BC1</td>
<td><code>SFSchema</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[else]</code></td>
<td>\u6761\u4EF6\u9A8C\u8BC1</td>
<td><code>SFSchema</code></td>
<td>-</td>
</tr>
</tbody></table>
<p>\u6761\u4EF6\u7C7B\u7684\u6821\u9A8C\u975E\u5E38\u5F3A\u5927\u548C\u4E30\u5BCC\uFF0C\u4F46\u662F\u51FA\u4E8E\u4F1A\u7834\u574FUI\u5BFC\u81F4\u6574\u4E2A\u7EC4\u4EF6\u6784\u5EFA\u66F4\u590D\u6742\uFF0C<code>&#64;delon/form</code> \u4EC5\u5B9E\u73B0 <code>required</code> \u7684\u5904\u7406\uFF0C\u5E76\u4E14\u628A\u5B83\u5F53\u6210\u662F\u5426\u663E\u793A\u6821\u9A8C\u76EE\u6807\uFF0C\u6BD4\u5982\uFF1A\u4E00\u4E2A\u767B\u5F55\u9875\uFF0C\u4F1A\u6839\u636E\u4E0D\u540C\u767B\u5F55\u65B9\u5F0F\u6765\u663E\u793A\u4E0D\u540C\u767B\u5F55\u6A21\u5F0F\uFF1A</p>
<pre><code class="language-ts">schema: SFSchema = &#123;
  properties: &#123;
    type: &#123; type: &#39;string&#39;, enum: [ &#39;mobile&#39;, &#39;name&#39; ], default: &#39;mobile&#39; &#125;,
    name: &#123; type: &#39;string&#39; &#125;,
    pwd: &#123; type: &#39;string&#39; &#125;,
    mobile: &#123; type: &#39;string&#39; &#125;,
    code: &#123; type: &#39;string&#39; &#125;
  &#125;,
  required: [ &#39;type&#39; ],
  if: &#123;
    properties: &#123; type: &#123; enum: [ &#39;mobile&#39; ] &#125; &#125;
  &#125;,
  then: &#123;
    required: [ &#39;mobile&#39;, &#39;code&#39; ]
  &#125;,
  else: &#123;
    required: [ &#39;name&#39;, &#39;pwd&#39; ]
  &#125;
&#125;;
</code></pre>
<p>\u4E0A\u8FF0\u7684\u6700\u7EC8\u884C\u4E3A\u662F\u5F53\u767B\u5F55\u65B9\u5F0F\u4E3A <code>mobile</code> \u65F6UI\u663E\u793A <code>mobile</code> \u548C <code>code</code>\uFF0C\u53CD\u4E4BUI\u663E\u793A <code>name</code> \u548C <code>pwd</code>\u3002</p>
<p>\u5176\u5B9E\u6761\u4EF6\u7C7B\u6700\u7EC8\u88AB\u89E3\u6790\u6210 <code>ui.visibleIf</code>\uFF0C\u5C06\u5176\u8F6C\u6362\u6210\u5982\u4E0B\uFF1A</p>
<pre><code class="language-ts">&#123;
  properties: &#123;
    login_type: &#123;
      type: &quot;string&quot;,
      title: &quot;\u767B\u5F55\u65B9\u5F0F&quot;,
      enum: [
        &#123; label: &quot;\u624B\u673A&quot;, value: &quot;mobile&quot; &#125;,
        &#123; label: &quot;\u8D26\u5BC6&quot;, value: &quot;account&quot; &#125;
      ],
      default: &quot;mobile&quot;,
      ui: &#123;
        widget: &quot;radio&quot;,
        styleType: &quot;button&quot;
      &#125;
    &#125;,
    mobile: &#123;
      type: &quot;string&quot;,
      ui: &#123;
        visibleIf: &#123;
          login_type: val =&gt; val === &quot;mobile&quot;
        &#125;
      &#125;
    &#125;,
    code: &#123;
      type: &quot;number&quot;,
      ui: &#123;
        visibleIf: &#123;
          login_type: val =&gt; val === &quot;mobile&quot;
        &#125;
      &#125;
    &#125;,
    name: &#123;
      type: &quot;string&quot;,
      ui: &#123;
        visibleIf: &#123;
          login_type: val =&gt; val === &quot;account&quot;
        &#125;
      &#125;
    &#125;,
    pwd: &#123;
      type: &quot;string&quot;,
      ui: &#123;
        type: &quot;password&quot;,
        visibleIf: &#123;
          login_type: val =&gt; val === &quot;account&quot;
        &#125;
      &#125;
    &#125;
  &#125;,
  required: [&quot;login_type&quot;]
&#125;;
</code></pre>
<h3 id="\u903B\u8F91\u7C7B"><a class="lake-link"><i data-anchor="\u903B\u8F91\u7C7B"></i></a>\u903B\u8F91\u7C7B</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[allOf]</code></td>
<td><strong>\u4E0D\u5EFA\u8BAE</strong> \u4F7F\u7528\uFF0C\u53EF\u7528 <code>required</code> \u66FF\u4EE3</td>
<td><code>SFSchema[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[anyOf]</code></td>
<td><strong>\u4E0D\u5EFA\u8BAE</strong> \u4F7F\u7528\uFF0C\u53EF\u7528 <code>required</code> \u548C <code>minProperties</code> \u66FF\u4EE3</td>
<td><code>SFSchema[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[oneOf]</code></td>
<td><strong>\u4E0D\u5EFA\u8BAE</strong> \u4F7F\u7528\uFF0C\u503C\u5FC5\u987B\u662F\u5176\u4E2D\u4E4B\u4E00</td>
<td><code>SFSchema[]</code></td>
<td>-</td>
</tr>
</tbody></table>
<blockquote>
<p><strong>\u4E0D\u5EFA\u8BAE</strong> \u4E3B\u8981\u662F\u5E76\u6CA1\u6709\u5BF9\u903B\u8F91\u7C7B\u8FDB\u884CUI\u76F8\u5173\u5904\u7406\uFF0C\u5B83\u540C\u6761\u4EF6\u7C7B\u7C7B\u4F3C\uFF0C\u4F1A\u5F71\u54CDUI\u6E32\u67D3\u3002</p>
</blockquote>
<h3 id="\u683C\u5F0F\u4E0E\u89C6\u89C9\u7C7B"><a class="lake-link"><i data-anchor="\u683C\u5F0F\u4E0E\u89C6\u89C9\u7C7B"></i></a>\u683C\u5F0F\u4E0E\u89C6\u89C9\u7C7B</h3><table>
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
<td>\u5C5E\u6027\u63CF\u8FF0</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[description]</code></td>
<td>\u5C5E\u6027\u76EE\u7684\u6027\u89E3\u91CA</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[default]</code></td>
<td>\u9ED8\u8BA4\u503C</td>
<td><code>any</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[readOnly]</code></td>
<td>\u662F\u5426\u53EA\u8BFB\u72B6\u6001\uFF0C\u7B49\u540C <code>nzDisabled</code></td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[format]</code></td>
<td>\u6570\u636E\u683C\u5F0F\uFF0C<a href="http://json-schema.org/latest/json-schema-validation.html#rfc.section.7.3" target="_blank" rel="noopener">\u6587\u6863</a></td>
<td><code>string</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="\u5176\u4ED6"><a class="lake-link"><i data-anchor="\u5176\u4ED6"></i></a>\u5176\u4ED6</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[definitions]</code></td>
<td>\u5185\u90E8\u7C7B\u578B\u5B9A\u4E49\u4F53</td>
<td><code>SFSchemaDefinition</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[$ref]</code></td>
<td>\u5F15\u7528\u5B9A\u4E49\u4F53</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[$comment]</code></td>
<td>\u9488\u5BF9\u5F00\u53D1\u8005\u7684\u6CE8\u91CA\uFF0C\u65E0\u4EFB\u4F55\u610F\u4E49\uFF0C\u4E5F\u4E0D\u4F1A\u88AB\u6821\u9A8C</td>
<td><code>string</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="\u975E\u6807\u51C6"><a class="lake-link"><i data-anchor="\u975E\u6807\u51C6"></i></a>\u975E\u6807\u51C6</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[ui]</code></td>
<td>\u6307\u5B9AUI\u914D\u7F6E\u4FE1\u606F\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E <code>sf</code> \u7EC4\u4EF6 <code>ui</code> \u5C5E\u6027\u503C</td>
<td><code>SFUISchemaItem</code></td>
<td>-</td>
</tr>
</tbody></table>
<h2 id="ui\uFF08sfuischemaitem\uFF09"><a class="lake-link"><i data-anchor="ui\uFF08sfuischemaitem\uFF09"></i></a>UI\uFF08SFUISchemaItem\uFF09</h2><p>UI Schema \u7ED3\u6784\u7531\u901A\u7528\u6027\u548C\u5C0F\u90E8\u4EF6API\u4E24\u90E8\u5206\u7EC4\u6210\uFF0C\u4EE5\u4E0B\u662F\u901A\u7528\u6027\u90E8\u5206\u8FDB\u884C\u63A5\u53E3\u8BF4\u660E\uFF0C\u5C0F\u90E8\u4EF6\u90E8\u5206\u81EA\u884C\u53C2\u6570\u5C0F\u90E8\u4EF6API\u3002</p>
<blockquote>
<p>\u4E3A\u4E86\u5C0F\u90E8\u4EF6\u7684API\u5B8C\u6574\u6027\uFF0C\u5C0F\u90E8\u4EF6Schema\u8BF4\u660E\u53EF\u80FD\u4E5F\u4F1A\u5305\u542B\u4E0B\u5217\u901A\u7528\u6027\u90E8\u5206\u3002</p>
</blockquote>
<h3 id="sfuischema"><a class="lake-link"><i data-anchor="sfuischema"></i></a>SFUISchema</h3><p>\u7B49\u540C <code>&lt;sf [ui]=&quot;ui&quot;&gt;</code> \u4E00\u7EC4\u4E0E JSON Schema \u7ED3\u6784\u76F8\u5BF9\u5E94\u7684 UI \u7ED3\u6784\u4F53\uFF0C\u7C7B\u578B\u4E3A\uFF1A<code>[ key: string ]: SFUISchemaItem</code>\u3002</p>
<h3 id="\u57FA\u7840\u7C7B"><a class="lake-link"><i data-anchor="\u57FA\u7840\u7C7B"></i></a>\u57FA\u7840\u7C7B</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[debug]</code></td>
<td>\u8C03\u8BD5\u6A21\u5F0F</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[order]</code></td>
<td>\u5C5E\u6027\u987A\u5E8F</td>
<td><code>string[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[asyncData]</code></td>
<td>\u5F02\u6B65\u9759\u6001\u6570\u636E\u6E90</td>
<td><code>(input?: any) =&gt; Observable&lt;SFSchemaEnumType[]&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[hidden]</code></td>
<td>\u662F\u5426\u9690\u85CF\u6E32\u67D3</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[visibleIf]</code></td>
<td>\u6307\u5B9A\u6761\u4EF6\u65F6\u624D\u663E\u793A</td>
<td>\`&#123; [key: string]: any[]</td>
<td>((value: any, property: FormProperty) =&gt; boolean) &#125;\`</td>
</tr>
<tr>
<td><code>[visibleIfLogical]</code></td>
<td>\u6307\u5B9A\u591A\u4E2A <code>visibleIf</code> \u65F6\u91C7\u7528\u7684\u903B\u8F91\u5173\u7CFB</td>
<td><code>or, and</code></td>
<td><code>or</code></td>
</tr>
<tr>
<td><code>[acl]</code></td>
<td>ACL\u6743\u9650\uFF0C\u7B49\u540C <code>can()</code> \u53C2\u6570\u503C</td>
<td><code>ACLCanType</code></td>
<td>-</td>
</tr>
</tbody></table>
<p><strong>visibleIf</strong></p>
<p>\u6307\u5B9A\u6761\u4EF6\u65F6\u624D\u663E\u793A\uFF0C\u4F8B\u5982\uFF1A</p>
<ul>
<li><code>visibleIf: &#123; shown: [ true ] &#125;</code>\uFF1A\u5F53 <code>shown: true</code> \u65F6\u624D\u663E\u793A\u5F53\u524D\u5C5E\u6027</li>
<li><code>visibleIf: &#123; shown: [ &#39;$ANY$&#39; ] &#125;</code>\uFF1A\u5F53 <code>shown</code> \u5305\u62EC\u4EFB\u610F\u503C\u65F6</li>
<li><code>visibleIf: &#123; shown: (value: any, property: FormProperty) =&gt; value &gt; 0 &#125;</code>\uFF1A\u590D\u6742\u8868\u8FBE\u5F0F</li>
</ul>
<h3 id="\u6821\u9A8C\u7C7B"><a class="lake-link"><i data-anchor="\u6821\u9A8C\u7C7B"></i></a>\u6821\u9A8C\u7C7B</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[liveValidate]</code></td>
<td>\u662F\u5426\u5B9E\u65F6\u6821\u9A8C</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[firstVisual]</code></td>
<td>\u662F\u5426\u7ACB\u5373\u5448\u73B0\u9519\u8BEF\u89C6\u89C9</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[onlyVisual]</code></td>
<td>\u662F\u5426\u53EA\u5C55\u793A\u9519\u8BEF\u89C6\u89C9\u4E0D\u663E\u793A\u9519\u8BEF\u6587\u672C</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[ingoreKeywords]</code></td>
<td>\u5FFD\u7565\u67D0\u4E9B\u6570\u636E\u7C7B\u578B\u6821\u9A8C</td>
<td><code>string[]</code></td>
<td></td>
</tr>
<tr>
<td><code>[errors]</code></td>
<td>\u81EA\u5B9A\u4E49\u9519\u8BEF\u4FE1\u606F\u6587\u672C</td>
<td>\`&#123; [ key: string ]: string</td>
<td>((obj: ErrorData) =&gt; string) &#125;\`</td>
</tr>
<tr>
<td><code>[showRequired]</code></td>
<td>\u662F\u5426\u5C55\u793A\u5FC5\u586B\u9879\u6807\u8BC6 <code>*</code></td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[validator]</code></td>
<td>\u81EA\u5B9A\u4E49\u6821\u9A8C\uFF0C\u6700\u540E\u7ED3\u679C\u4F1A\u4E0E Ajv \u6821\u9A8C\u7ED3\u679C\u8FDB\u884C\u5408\u5E76\u663E\u793A</td>
<td><code>(value: any, formProperty: FormProperty, form: PropertyGroup) =&gt; ErrorData[]</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="\u6570\u7EC4\u7C7B"><a class="lake-link"><i data-anchor="\u6570\u7EC4\u7C7B"></i></a>\u6570\u7EC4\u7C7B</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[items]</code></td>
<td>\u6307\u5B9A\u5B50\u5143\u7D20\u7684UI</td>
<td><code>SFUISchema</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[addTitle]</code></td>
<td>\u6307\u5B9A\u6DFB\u52A0\u6309\u94AE\u6587\u672C</td>
<td><code>string</code></td>
<td><code>\u6DFB\u52A0</code></td>
</tr>
<tr>
<td><code>[addType]</code></td>
<td>\u6307\u5B9A\u6DFB\u52A0\u6309\u94AE\u98CE\u683C\uFF0C\u7B49\u540C\u6309\u94AE <code>nzType</code></td>
<td><code>string</code></td>
<td><code>dashed</code></td>
</tr>
<tr>
<td><code>[removable]</code></td>
<td>\u6307\u5B9A\u662F\u5426\u663E\u793A\u79FB\u9664\u6309\u94AE</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[removeTitle]</code></td>
<td>\u6307\u5B9A\u79FB\u9664\u6309\u94AE\u6587\u672C</td>
<td><code>string</code></td>
<td><code>\u79FB\u9664</code></td>
</tr>
</tbody></table>
<h3 id="\u8868\u5355yuan\u7D20\u7C7B"><a class="lake-link"><i data-anchor="\u8868\u5355yuan\u7D20\u7C7B"></i></a>\u8868\u5355\u5143\u7D20\u7C7B</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[type]</code></td>
<td>\u6307\u5B9A <code>input</code> \u7684 <code>type</code> \u503C</td>
<td><code>string</code></td>
<td><code>text</code></td>
</tr>
<tr>
<td><code>[placeholder]</code></td>
<td>\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u4FE1\u606F</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[autofocus]</code></td>
<td>\u52A0\u8F7D\u65F6\u662F\u5426\u83B7\u5F97\u7126\u70B9</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="\u6E32\u67D3\u7C7B"><a class="lake-link"><i data-anchor="\u6E32\u67D3\u7C7B"></i></a>\u6E32\u67D3\u7C7B</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[widget]</code></td>
<td>\u6307\u5B9A\u91C7\u7528\u4EC0\u4E48\u5C0F\u90E8\u4EF6\u6E32\u67D3</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[i18n]</code></td>
<td>\u6307 <code>schema.title</code> \u7684\u56FD\u9645\u5316\u952E\u503C</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[descriptionI18n]</code></td>
<td>\u6307 <code>schema.description</code> \u7684\u56FD\u9645\u5316\u952E\u503C</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[class]</code></td>
<td>\u81EA\u5B9A\u4E49\u7C7B\uFF0C\u7B49\u540C <code>[ngClass]</code> \u503C</td>
<td><code>string,string[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[width]</code></td>
<td>\u6307\u5B9A\u5BBD\u5EA6\uFF0C\u5355\u4F4D\uFF1A<code>px</code></td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[size]</code></td>
<td>\u5143\u7D20\u7EC4\u4EF6\u5927\u5C0F</td>
<td><code>default,large,small</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[grid]</code></td>
<td>\u54CD\u5E94\u5F0F\u5C5E\u6027</td>
<td><code>SFGridSchema</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[optional]</code></td>
<td>\u6807\u7B7E\u53EF\u9009\u4FE1\u606F</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[optionalHelp]</code></td>
<td>\u6807\u7B7E\u53EF\u9009\u5E2E\u52A9</td>
<td><code>string, SFOptionalHelp</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[collapse]</code></td>
<td>\u6807\u8BB0\u8BE5\u5B57\u6BB5\u5728\u8868\u5355\u6298\u53E0\u72B6\u6001\u4E0B\u9690\u85CF</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="\u54CD\u5E94\u5F0F\u5C5E\u6027_sfgridschema"><a class="lake-link"><i data-anchor="\u54CD\u5E94\u5F0F\u5C5E\u6027_sfgridschema"></i></a>\u54CD\u5E94\u5F0F\u5C5E\u6027 SFGridSchema</h3><p><code>grid</code> \u5C5E\u6027\u7B49\u540C\u5B8C\u6574\u7684 <a href="https://ng.ant.design/components/grid/zh" target="_blank" rel="noopener">Grid\u6805\u683C\u7CFB\u7EDF</a>\uFF0C\u900F\u8FC7 <code>grid</code> \u53EF\u4EE5\u51B3\u5B9A\u8868\u5355\u5982\u4F55\u6E32\u67D3\u3002</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[gutter]</code></td>
<td>\u6805\u683C\u95F4\u9694</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[span]</code></td>
<td>\u6BCF\u4E2A\u8868\u5355\u5143\u7D20\u6805\u683C\u5360\u4F4D\u683C\u6570\uFF0C\u4E3A <code>0</code> \u65F6\u76F8\u5F53\u4E8E <code>display: none</code></td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[xs]</code></td>
<td><code>&lt;768px</code> \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u4E00\u4E2A\u5305\u542B\u5176\u4ED6\u5C5E\u6027\u7684\u5BF9\u8C61</td>
<td><code>number, SFGridSizeSchema</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[sm]</code></td>
<td><code>\u2265768px</code> \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u4E00\u4E2A\u5305\u542B\u5176\u4ED6\u5C5E\u6027\u7684\u5BF9\u8C61</td>
<td><code>number, SFGridSizeSchema</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[md]</code></td>
<td><code>\u2265992px</code> \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u4E00\u4E2A\u5305\u542B\u5176\u4ED6\u5C5E\u6027\u7684\u5BF9\u8C61</td>
<td><code>number, SFGridSizeSchema</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[lg]</code></td>
<td><code>\u22651200px</code> \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u4E00\u4E2A\u5305\u542B\u5176\u4ED6\u5C5E\u6027\u7684\u5BF9\u8C61</td>
<td><code>number, SFGridSizeSchema</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[xl]</code></td>
<td><code>\u22651600px</code> \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u4E00\u4E2A\u5305\u542B\u5176\u4ED6\u5C5E\u6027\u7684\u5BF9\u8C61</td>
<td><code>number, SFGridSizeSchema</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[xxl]</code></td>
<td>\u4FDD\u7559\u5B57\u6BB5\uFF0C<code>0.7.0</code> \u540E\u652F\u6301</td>
<td><code>number, SFGridSizeSchema</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="\u6C34\u5E73\u5E03\u5C40\u7C7B_schema"><a class="lake-link"><i data-anchor="\u6C34\u5E73\u5E03\u5C40\u7C7B_schema"></i></a>\u6C34\u5E73\u5E03\u5C40\u7C7B Schema</h3><blockquote>
<p><strong>\u52A1\u5FC5</strong>\u4E8C\u8005\u603B\u548C\u4E3A <code>24</code></p>
</blockquote>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[spanLabel]</code></td>
<td><code>label</code> \u6240\u5360\u6805\u683C\u6570</td>
<td><code>number</code></td>
<td>5</td>
</tr>
<tr>
<td><code>[spanControl]</code></td>
<td>\u8868\u5355\u63A7\u4EF6\u6240\u5360\u6805\u683C\u6570</td>
<td><code>number</code></td>
<td>19</td>
</tr>
<tr>
<td><code>[offsetControl]</code></td>
<td><code>control</code> \u6805\u683C\u5DE6\u4FA7\u7684\u95F4\u9694\u683C\u6570\uFF0C\u95F4\u9694\u5185\u4E0D\u53EF\u4EE5\u6709\u6805\u683C</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[spanLabelFixed]</code></td>
<td><code>label</code> \u56FA\u5B9A\u5BBD\u5EA6</td>
<td><code>number</code></td>
<td>-</td>
</tr>
</tbody></table>
`,api:"",toc:[{id:"\u5199\u5728\u524D\u9762",title:"\u5199\u5728\u524D\u9762",children:[{id:"\u65E0\u6C61\u67D3",title:"\u65E0\u6C61\u67D3"},{id:"\u8868\u5355yuan\u7D20\u4E0E\u6570\u636E\u7ED3\u6784\u7684\u5BF9\u5E94\u5173\u7CFB",title:"\u8868\u5355\u5143\u7D20\u4E0E\u6570\u636E\u7ED3\u6784\u7684\u5BF9\u5E94\u5173\u7CFB"},{id:"\u4E00\u70B9\u89C4\u8303",title:"\u4E00\u70B9\u89C4\u8303"}]},{id:"json_schema\uFF08sfschema\uFF09",title:"JSON Schema\uFF08SFSchema\uFF09",children:[{id:"\u5E38\u89C4\u7C7B",title:"\u5E38\u89C4\u7C7B"},{id:"\u6570\u503C\u7C7B\u578B",title:"\u6570\u503C\u7C7B\u578B"},{id:"\u5B57\u7B26\u4E32\u7C7B\u578B",title:"\u5B57\u7B26\u4E32\u7C7B\u578B"},{id:"\u6570\u7EC4\u7C7B\u578B",title:"\u6570\u7EC4\u7C7B\u578B"},{id:"\u5BF9\u8C61\u7C7B\u578B",title:"\u5BF9\u8C61\u7C7B\u578B"},{id:"\u6761\u4EF6\u7C7B",title:"\u6761\u4EF6\u7C7B"},{id:"\u903B\u8F91\u7C7B",title:"\u903B\u8F91\u7C7B"},{id:"\u683C\u5F0F\u4E0E\u89C6\u89C9\u7C7B",title:"\u683C\u5F0F\u4E0E\u89C6\u89C9\u7C7B"},{id:"\u5176\u4ED6",title:"\u5176\u4ED6"},{id:"\u975E\u6807\u51C6",title:"\u975E\u6807\u51C6"}]},{id:"ui\uFF08sfuischemaitem\uFF09",title:"UI\uFF08SFUISchemaItem\uFF09",children:[{id:"sfuischema",title:"SFUISchema"},{id:"\u57FA\u7840\u7C7B",title:"\u57FA\u7840\u7C7B"},{id:"\u6821\u9A8C\u7C7B",title:"\u6821\u9A8C\u7C7B"},{id:"\u6570\u7EC4\u7C7B",title:"\u6570\u7EC4\u7C7B"},{id:"\u8868\u5355yuan\u7D20\u7C7B",title:"\u8868\u5355\u5143\u7D20\u7C7B"},{id:"\u6E32\u67D3\u7C7B",title:"\u6E32\u67D3\u7C7B"},{id:"\u54CD\u5E94\u5F0F\u5C5E\u6027_sfgridschema",title:"\u54CD\u5E94\u5F0F\u5C5E\u6027 SFGridSchema"},{id:"\u6C34\u5E73\u5E03\u5C40\u7C7B_schema",title:"\u6C34\u5E73\u5E03\u5C40\u7C7B Schema"}]}],raw:'---\norder: 2\ntitle: Schema\ntype: Documents\n---\n\n## \u5199\u5728\u524D\u9762\n\n[JSON Schema](http://json-schema.org/) \u662F\u4E00\u79CD\u6807\u51C6\u7684\u5B9A\u4E49 JSON \u6570\u636E\u7ED3\u6784\u7684\u89C4\u8303\uFF0C\u5E76\u4E0D\u5305\u542B\u5BF9\u8FD9\u4E9B\u89C4\u8303\u8F6C\u6362\u6210\u8868\u5355\u5177\u4F53\u8BF4\u660E\uFF0C`@delon/form` \u4E5F\u662F\u6839\u636E\u81EA\u5DF1\u7684\u7406\u89E3\u5E76\u7ED3\u5408 `ng-zorro-antd` \u73B0\u6709\u6570\u636E\u5F55\u5165\u7EC4\u4EF6\u5E93\u4EA7\u751F\u7684\u52A8\u6001\u6784\u5EFA\u8868\u5355\u7C7B\u5E93\u3002\n\nJSON Schema **\u59CB\u7EC8**\u90FD\u5FC5\u987B\u6709\u4E00\u4E2A\u7C7B\u578B\u4E3A `type="object"` \u4F5C\u4E3A**\u6839\u8282\u70B9**\uFF0C\u56E0\u6B64\u4E00\u4E2A\u6700\u7B80\u5355\u7684 Schema \u7ED3\u6784\u81F3\u5C11\u662F\uFF1A\n\n```ts\nschema = {\n  type: \'object\', // \u53EF\u6709\u53EF\u65E0\uFF0C\u9ED8\u8BA4\u4F1A\u5F3A\u5236\u4E3A `object`\n  properties: {}\n}\n```\n\n\u5728\u63CF\u8FF0 Schema \u8BF4\u660E\u4E4B\u524D\uFF0C\u6709\u5FC5\u8981\u5BF9\u8868\u5355\u5143\u7D20\u4E0E Schema \u4E4B\u524D\u7684\u8054\u7CFB\u505A\u4E00\u4E2A\u7CFB\u7EDF\u6027\u8BF4\u660E\u3002\n\n\u6211\u4EEC\u77E5\u9053\uFF0C\u8868\u5355\u662F\u7531\u4E00\u7EC4HTML\u5143\u7D20\u7EC4\u4EF6\uFF0C\u6BCF\u4E00\u4E2A\u5143\u7D20\u5BF9\u5E94\u4E00\u4E2A Schema \u5C5E\u6027\uFF0C\u5C5E\u6027\u6709\u81EA\u5DF1\u7684\u6570\u636E\u7C7B\u578B\u3001\u683C\u5F0F\u4FE1\u606F\u3001\u89C6\u89C9\u4FE1\u606F\u7B49\uFF0C\u4F46\u8FD9\u4E9B\u4FE1\u606F\u4E0D\u8DB3\u4EE5\u8868\u8FF0 `ng-zorro-antd` \u6240\u63D0\u4F9B\u7684\u4E30\u5BCCAPI\u63A5\u53E3\u3002\u4E3A\u4E86\u66F4\u597D\u5229\u7528\u8FD9\u4E9BAPI\u63A5\u53E3\uFF0C`@delon/form` \u9664\u4E86\u5B9E\u73B0\u7EDD\u5927\u90E8\u5206 JSON Schema \u6807\u51C6\u4EE5\u5916\uFF0C\u989D\u5916\u552F\u4E00\u589E\u52A0\u4E86\u4E00\u4E2A `ui` \u5C5E\u6027\u7528\u4E8E\u8868\u8FF0\u5C5E\u6027\u5982\u4F55\u6E32\u67D3\u7684\u95EE\u9898\u3002\n\n### \u65E0\u6C61\u67D3\n\n\u5F53\u7136\u82E5\u4F60\u5BF9\u6807\u51C6\u6709\u975E\u5E38\u4E25\u683C\uFF0C\u6216\u8005 JSON Schema \u6570\u636E\u7ED3\u6784\u662F\u6765\u81EA\u540E\u7AEF\u7684\u4EA7\u751F\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 `<sf [ui]="ui">` \u6765\u989D\u5916\u5BF9\u5F53\u524D JSON Schema \u6DFB\u52A0 UI \u6E32\u67D3\u3002\u4F8B\u5982\uFF1A\n\n```ts\nschema = {\n  properties: {\n    url: {\n      type: \'string\',\n      title: \'Web Site\'\n    }\n  }\n}\n```\n\n\u4E00\u4E2AURL\u5C5E\u6027\uFF0C\u82E5\u6211\u4EEC\u4E0D\u5E0C\u671B\u7528\u4E8E\u6DFB\u52A0 `https://` \u524D\u7F00\u7684\u60C5\u51B5\u4E0B\uFF0C\u5C31\u5355\u7EAF\u7684 JSON Schema \u7ED3\u6784\u662F\u65E0\u6CD5\u8868\u8FF0\uFF0C\u800C `nz-input` \u53C8\u652F\u6301\u975E\u5E38\u4E30\u5BCC\u7684\u524D\u540E\u7F00\u6587\u672C\uFF0C\u5219\u6211\u4EEC\u53EF\u4EE5\u4E3A `ui` \u5B9A\u5236\u5E76\u589E\u52A0 `https://` \u7684\u524D\u7F00\u6587\u672C\uFF1A\n\n```ts\nui = {\n  $url: {\n    addOnBefore: \'https://\'\n  }\n}\n```\n\nui \u672C\u8EAB\u4E5F\u662F\u4E00\u4E2A JSON \u7ED3\u6784\uFF0C\u4E3A\u4E86\u533A\u5206 JSON Schema \u5C5E\u6027\u540D\u7684\u5BF9\u5E94\u5173\u7CFB\uFF0C**\u5FC5\u987B**\u7EDF\u4E00\u5BF9\u5C5E\u6027\u540D\u52A0\u4E0A `$` \u524D\u7F00\uFF1B\u5BF9\u4E8E\u6570\u7EC4\u7684\u5143\u7D20\u5BF9\u8C61\u5FC5\u987B\u4F7F\u7528 `$items` \u66FF\u4EE3\u3002\u5F53KEY\u4E3A `*` \u65F6\u8868\u793A\u5BF9\u6240\u6709\u5B50\u8868\u5355\u5143\u7D20\u90FD\u6709\u6548\u3002\n\n### \u8868\u5355\u5143\u7D20\u4E0E\u6570\u636E\u7ED3\u6784\u7684\u5BF9\u5E94\u5173\u7CFB\n\n\u4E00\u4E2A\u5B8C\u6574\u7684\u8868\u5355\u5143\u7D20\u6211\u4EEC\u8BA4\u4E3A\u5E94\u8BE5\u5305\u542B\u4EE5\u4E0B\u82E5\u5E72\u5143\u7D20\uFF1A\n\n![](./assets/img/form-input.png)\n\n\u4ECE\u5DE6\u81F3\u5411\u5404\u5143\u7D20\u63CF\u8FF0\uFF1A\n\n| \u7ED3\u6784\u6E90 | \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|-----|----|----|----|-----|\n| Schema | `[required]` | \u662F\u5426\u5FC5\u586B\u9879 | `string[]` | - |\n| Schema | `[title]` | \u5C5E\u6027\u63CF\u8FF0 | `string` | - |\n| ui | `[optional]` | \u6807\u7B7E\u53EF\u9009\u4FE1\u606F | `string` | - |\n| ui | `[optionalHelp]` | \u6807\u7B7E\u53EF\u9009\u5E2E\u52A9 | `string, SFOptionalHelp` | - |\n| ui | `[placeholder]` | \u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u4FE1\u606F | `string` | - |\n| Schema | `[description]` | \u5C5E\u6027\u76EE\u7684\u6027\u89E3\u91CA | `string` | - |\n| - | `[error]` | \u9519\u8BEF\u4FE1\u606F | `string` | - |\n\n### \u4E00\u70B9\u89C4\u8303\n\n- \u6240\u6709 `key` \u6309\u9A7C\u5CF0\u5F0F\u547D\u540D\u6CD5\n- \u82E5\u4F60\u5BF9 JSON Schema \u5F88\u719F\u6089\uFF0C\u5219\u5FFD\u7565 **\u4E0D\u5EFA\u8BAE** \u5B57\u6837\n\n## JSON Schema\uFF08SFSchema\uFF09\n\nJSON Schema \u6709\u5B8C\u6574\u7684\u5BF9\u6BCF\u4E2A\u5C5E\u6027\u7684\u89C4\u8303\u63CF\u8FF0\uFF0C`@delon/form` \u5F53\u524D\u662F\u57FA\u4E8E [draft-07](http://json-schema.org/) \u89C4\u8303\uFF0C\u4E0B\u5217\u662F\u89C4\u8303\u5177\u4F53\u8BF4\u660E\uFF1A\n\n### \u5E38\u89C4\u7C7B\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[type]` | \u6570\u636E\u7C7B\u578B\uFF0C\u652F\u6301 JavaScript \u57FA\u7840\u7C7B\u578B | `number,string,boolean,object,array` | `object` |\n| `[enum]` | \u679A\u4E3E\uFF0C\u9759\u6001\u6570\u636E\u6E90 | `SFSchemaEnumType[]` | - |\n\n### \u6570\u503C\u7C7B\u578B\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[minimum]` | \u6700\u5C0F\u503C | `number` | - |\n| `[exclusiveMinimum]` | \u7EA6\u675F\u662F\u5426\u5305\u62EC `minimum` \u503C | `boolean` | - |\n| `[maximum]` | \u6700\u5927\u503C | `number` | - |\n| `[exclusiveMaximum]` | \u7EA6\u675F\u662F\u5426\u5305\u62EC `maximum` \u503C | `boolean` | - |\n| `[multipleOf]` | \u500D\u6570 | `number` | - |\n\n**\u5173\u4E8EexclusiveMinimum\u548CexclusiveMaximum**\n\n`sf` \u7684\u5B9E\u73B0\u673A\u5236\u5BFC\u81F4\u65E0\u6CD5\u5F88\u597D\u7684\u5904\u7406 `type` \u7C7B\u578B\u7684\u9519\u8BEF\u6355\u83B7\uFF0C\u56E0\u6B64\u9ED8\u8BA4\u60C5\u51B5\u4E0B `sf` \u662F\u5FFD\u7565\u4E86\u6240\u6709 `type` \uFF08\u89C1 [config.ts](https://github.com/ng-alain/delon/blob/master/packages/form/src/config.ts#L12)\uFF09\u7C7B\u578B\u9519\u8BEF\uFF0C\u800C\u8FD9\u4E24\u79CD\u90FD\u9519\u8BEF\u90FD\u4F1A\u88AB\u8BA4\u4E3A `type` \u7C7B\u578B\u9519\u8BEF\uFF0C\u4ECE\u800C\u5BFC\u81F4\u89E6\u53D1\u65E0\u6548\u68C0\u67E5\u7684\u539F\u56E0\u3002\uFF08\u66F4\u591A\u7EC6\u8282\u8BF7\u53C2\u8003 [#676](https://github.com/ng-alain/ng-alain/issues/676#issuecomment-420208459)\uFF09\n\n### \u5B57\u7B26\u4E32\u7C7B\u578B\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[maxLength]` | \u5B9A\u4E49\u5B57\u7B26\u4E32\u7684\u6700\u5927\u957F\u5EA6 | `number` | - |\n| `[minLength]` | \u5B9A\u4E49\u5B57\u7B26\u4E32\u7684\u6700\u5C0F\u957F\u5EA6 | `number` | - |\n| `[pattern]` | \u9A8C\u8BC1\u8F93\u5165\u5B57\u6BB5\u6B63\u5219\u8868\u8FBE\u5F0F\u5B57\u7B26\u4E32 | `string` | - |\n\n### \u6570\u7EC4\u7C7B\u578B\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[items]` | \u6570\u7EC4\u5143\u7D20\u7C7B\u578B\u63CF\u8FF0\uFF0C\u53EA\u652F\u6301\u6570\u7EC4\u5BF9\u8C61\uFF0C\u82E5\u9700\u8981\u57FA\u7840\u7C7B\u578B\u6570\u7EC4\u53EF\u901A\u8FC7\u5176\u4ED6\u90E8\u4EF6\u652F\u6301 | `SFSchema` | - |\n| `[minItems]` | \u7EA6\u675F\u6570\u7EC4\u6700\u5C0F\u7684\u5143\u7D20\u4E2A\u6570 | `number` | - |\n| `[maxItems]` | \u7EA6\u675F\u6570\u7EC4\u6700\u5927\u7684\u5143\u7D20\u4E2A\u6570 | `number` | - |\n| `[uniqueItems]` | \u7EA6\u675F\u6570\u7EC4\u6BCF\u4E2A\u5143\u7D20\u90FD\u4E0D\u76F8\u540C | `boolean` | - |\n| `[additionalItems]` | \u6570\u7EC4\u989D\u5916\u5143\u7D20\u7684\u6821\u9A8C\u89C4\u5219 | `SFSchema` | - |\n\n### \u5BF9\u8C61\u7C7B\u578B\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[maxProperties]` | \u6700\u5927\u5C5E\u6027\u4E2A\u6570\uFF0C\u5FC5\u987B\u662F\u975E\u8D1F\u6574\u6570 | `number` | - |\n| `[minProperties]` | \u6700\u5C0F\u5C5E\u6027\u4E2A\u6570\uFF0C\u5FC5\u987B\u662F\u975E\u8D1F\u6574\u6570 | `number` | - |\n| `[required]` | \u5FC5\u9700\u5C5E\u6027 | `string[]` | - |\n| `[properties]` | \u5B9A\u4E49\u5C5E\u6027 | `{ [key: string]: SFSchema }` | - |\n\n### \u6761\u4EF6\u7C7B\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[if]` | \u6761\u4EF6\u9A8C\u8BC1 | `SFSchema` | - |\n| `[then]` | \u6761\u4EF6\u9A8C\u8BC1 | `SFSchema` | - |\n| `[else]` | \u6761\u4EF6\u9A8C\u8BC1 | `SFSchema` | - |\n\n\u6761\u4EF6\u7C7B\u7684\u6821\u9A8C\u975E\u5E38\u5F3A\u5927\u548C\u4E30\u5BCC\uFF0C\u4F46\u662F\u51FA\u4E8E\u4F1A\u7834\u574FUI\u5BFC\u81F4\u6574\u4E2A\u7EC4\u4EF6\u6784\u5EFA\u66F4\u590D\u6742\uFF0C`@delon/form` \u4EC5\u5B9E\u73B0 `required` \u7684\u5904\u7406\uFF0C\u5E76\u4E14\u628A\u5B83\u5F53\u6210\u662F\u5426\u663E\u793A\u6821\u9A8C\u76EE\u6807\uFF0C\u6BD4\u5982\uFF1A\u4E00\u4E2A\u767B\u5F55\u9875\uFF0C\u4F1A\u6839\u636E\u4E0D\u540C\u767B\u5F55\u65B9\u5F0F\u6765\u663E\u793A\u4E0D\u540C\u767B\u5F55\u6A21\u5F0F\uFF1A\n\n```ts\nschema: SFSchema = {\n  properties: {\n    type: { type: \'string\', enum: [ \'mobile\', \'name\' ], default: \'mobile\' },\n    name: { type: \'string\' },\n    pwd: { type: \'string\' },\n    mobile: { type: \'string\' },\n    code: { type: \'string\' }\n  },\n  required: [ \'type\' ],\n  if: {\n    properties: { type: { enum: [ \'mobile\' ] } }\n  },\n  then: {\n    required: [ \'mobile\', \'code\' ]\n  },\n  else: {\n    required: [ \'name\', \'pwd\' ]\n  }\n};\n```\n\n\u4E0A\u8FF0\u7684\u6700\u7EC8\u884C\u4E3A\u662F\u5F53\u767B\u5F55\u65B9\u5F0F\u4E3A `mobile` \u65F6UI\u663E\u793A `mobile` \u548C `code`\uFF0C\u53CD\u4E4BUI\u663E\u793A `name` \u548C `pwd`\u3002\n\n\u5176\u5B9E\u6761\u4EF6\u7C7B\u6700\u7EC8\u88AB\u89E3\u6790\u6210 `ui.visibleIf`\uFF0C\u5C06\u5176\u8F6C\u6362\u6210\u5982\u4E0B\uFF1A\n\n```ts\n{\n  properties: {\n    login_type: {\n      type: "string",\n      title: "\u767B\u5F55\u65B9\u5F0F",\n      enum: [\n        { label: "\u624B\u673A", value: "mobile" },\n        { label: "\u8D26\u5BC6", value: "account" }\n      ],\n      default: "mobile",\n      ui: {\n        widget: "radio",\n        styleType: "button"\n      }\n    },\n    mobile: {\n      type: "string",\n      ui: {\n        visibleIf: {\n          login_type: val => val === "mobile"\n        }\n      }\n    },\n    code: {\n      type: "number",\n      ui: {\n        visibleIf: {\n          login_type: val => val === "mobile"\n        }\n      }\n    },\n    name: {\n      type: "string",\n      ui: {\n        visibleIf: {\n          login_type: val => val === "account"\n        }\n      }\n    },\n    pwd: {\n      type: "string",\n      ui: {\n        type: "password",\n        visibleIf: {\n          login_type: val => val === "account"\n        }\n      }\n    }\n  },\n  required: ["login_type"]\n};\n```\n\n### \u903B\u8F91\u7C7B\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[allOf]` | **\u4E0D\u5EFA\u8BAE** \u4F7F\u7528\uFF0C\u53EF\u7528 `required` \u66FF\u4EE3 | `SFSchema[]` | - |\n| `[anyOf]` | **\u4E0D\u5EFA\u8BAE** \u4F7F\u7528\uFF0C\u53EF\u7528 `required` \u548C `minProperties` \u66FF\u4EE3 | `SFSchema[]` | - |\n| `[oneOf]` | **\u4E0D\u5EFA\u8BAE** \u4F7F\u7528\uFF0C\u503C\u5FC5\u987B\u662F\u5176\u4E2D\u4E4B\u4E00 | `SFSchema[]` | - |\n\n> **\u4E0D\u5EFA\u8BAE** \u4E3B\u8981\u662F\u5E76\u6CA1\u6709\u5BF9\u903B\u8F91\u7C7B\u8FDB\u884CUI\u76F8\u5173\u5904\u7406\uFF0C\u5B83\u540C\u6761\u4EF6\u7C7B\u7C7B\u4F3C\uFF0C\u4F1A\u5F71\u54CDUI\u6E32\u67D3\u3002\n\n### \u683C\u5F0F\u4E0E\u89C6\u89C9\u7C7B\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[title]` | \u5C5E\u6027\u63CF\u8FF0 | `string` | - |\n| `[description]` | \u5C5E\u6027\u76EE\u7684\u6027\u89E3\u91CA | `string` | - |\n| `[default]` | \u9ED8\u8BA4\u503C | `any` | - |\n| `[readOnly]` | \u662F\u5426\u53EA\u8BFB\u72B6\u6001\uFF0C\u7B49\u540C `nzDisabled` | `boolean` | - |\n| `[format]` | \u6570\u636E\u683C\u5F0F\uFF0C[\u6587\u6863](http://json-schema.org/latest/json-schema-validation.html#rfc.section.7.3) | `string` | - |\n\n### \u5176\u4ED6\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[definitions]` | \u5185\u90E8\u7C7B\u578B\u5B9A\u4E49\u4F53 | `SFSchemaDefinition` | - |\n| `[$ref]` | \u5F15\u7528\u5B9A\u4E49\u4F53 | `string` | - |\n| `[$comment]` | \u9488\u5BF9\u5F00\u53D1\u8005\u7684\u6CE8\u91CA\uFF0C\u65E0\u4EFB\u4F55\u610F\u4E49\uFF0C\u4E5F\u4E0D\u4F1A\u88AB\u6821\u9A8C | `string` | - |\n\n### \u975E\u6807\u51C6\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[ui]` | \u6307\u5B9AUI\u914D\u7F6E\u4FE1\u606F\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E `sf` \u7EC4\u4EF6 `ui` \u5C5E\u6027\u503C | `SFUISchemaItem` | - |\n\n## UI\uFF08SFUISchemaItem\uFF09\n\nUI Schema \u7ED3\u6784\u7531\u901A\u7528\u6027\u548C\u5C0F\u90E8\u4EF6API\u4E24\u90E8\u5206\u7EC4\u6210\uFF0C\u4EE5\u4E0B\u662F\u901A\u7528\u6027\u90E8\u5206\u8FDB\u884C\u63A5\u53E3\u8BF4\u660E\uFF0C\u5C0F\u90E8\u4EF6\u90E8\u5206\u81EA\u884C\u53C2\u6570\u5C0F\u90E8\u4EF6API\u3002\n\n> \u4E3A\u4E86\u5C0F\u90E8\u4EF6\u7684API\u5B8C\u6574\u6027\uFF0C\u5C0F\u90E8\u4EF6Schema\u8BF4\u660E\u53EF\u80FD\u4E5F\u4F1A\u5305\u542B\u4E0B\u5217\u901A\u7528\u6027\u90E8\u5206\u3002\n\n### SFUISchema\n\n\u7B49\u540C `<sf [ui]="ui">` \u4E00\u7EC4\u4E0E JSON Schema \u7ED3\u6784\u76F8\u5BF9\u5E94\u7684 UI \u7ED3\u6784\u4F53\uFF0C\u7C7B\u578B\u4E3A\uFF1A`[ key: string ]: SFUISchemaItem`\u3002\n\n### \u57FA\u7840\u7C7B\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[debug]` | \u8C03\u8BD5\u6A21\u5F0F | `boolean` | - |\n| `[order]` | \u5C5E\u6027\u987A\u5E8F | `string[]` | - |\n| `[asyncData]` | \u5F02\u6B65\u9759\u6001\u6570\u636E\u6E90 | `(input?: any) => Observable<SFSchemaEnumType[]>` | - |\n| `[hidden]` | \u662F\u5426\u9690\u85CF\u6E32\u67D3 | `boolean` | `false` |\n| `[visibleIf]` | \u6307\u5B9A\u6761\u4EF6\u65F6\u624D\u663E\u793A | `{ [key: string]: any[] | ((value: any, property: FormProperty) => boolean) }` | - |\n| `[visibleIfLogical]` | \u6307\u5B9A\u591A\u4E2A `visibleIf` \u65F6\u91C7\u7528\u7684\u903B\u8F91\u5173\u7CFB | `or, and` | `or` |\n| `[acl]` | ACL\u6743\u9650\uFF0C\u7B49\u540C `can()` \u53C2\u6570\u503C | `ACLCanType` | - |\n\n**visibleIf**\n\n\u6307\u5B9A\u6761\u4EF6\u65F6\u624D\u663E\u793A\uFF0C\u4F8B\u5982\uFF1A\n\n- `visibleIf: { shown: [ true ] }`\uFF1A\u5F53 `shown: true` \u65F6\u624D\u663E\u793A\u5F53\u524D\u5C5E\u6027\n- `visibleIf: { shown: [ \'$ANY$\' ] }`\uFF1A\u5F53 `shown` \u5305\u62EC\u4EFB\u610F\u503C\u65F6\n- `visibleIf: { shown: (value: any, property: FormProperty) => value > 0 }`\uFF1A\u590D\u6742\u8868\u8FBE\u5F0F\n\n### \u6821\u9A8C\u7C7B\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[liveValidate]` | \u662F\u5426\u5B9E\u65F6\u6821\u9A8C | `boolean` | `true` |\n| `[firstVisual]` | \u662F\u5426\u7ACB\u5373\u5448\u73B0\u9519\u8BEF\u89C6\u89C9 | `boolean` | `false` |\n| `[onlyVisual]` | \u662F\u5426\u53EA\u5C55\u793A\u9519\u8BEF\u89C6\u89C9\u4E0D\u663E\u793A\u9519\u8BEF\u6587\u672C | `boolean` | `false` |\n| `[ingoreKeywords]` | \u5FFD\u7565\u67D0\u4E9B\u6570\u636E\u7C7B\u578B\u6821\u9A8C | `string[]` |  |\n| `[errors]` | \u81EA\u5B9A\u4E49\u9519\u8BEF\u4FE1\u606F\u6587\u672C | `{ [ key: string ]: string | ((obj: ErrorData) => string) }` | - |\n| `[showRequired]` | \u662F\u5426\u5C55\u793A\u5FC5\u586B\u9879\u6807\u8BC6 `*` | `boolean` | - |\n| `[validator]` | \u81EA\u5B9A\u4E49\u6821\u9A8C\uFF0C\u6700\u540E\u7ED3\u679C\u4F1A\u4E0E Ajv \u6821\u9A8C\u7ED3\u679C\u8FDB\u884C\u5408\u5E76\u663E\u793A | `(value: any, formProperty: FormProperty, form: PropertyGroup) => ErrorData[]` | - |\n\n### \u6570\u7EC4\u7C7B\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[items]` | \u6307\u5B9A\u5B50\u5143\u7D20\u7684UI | `SFUISchema` | - |\n| `[addTitle]` | \u6307\u5B9A\u6DFB\u52A0\u6309\u94AE\u6587\u672C | `string` | `\u6DFB\u52A0` |\n| `[addType]` | \u6307\u5B9A\u6DFB\u52A0\u6309\u94AE\u98CE\u683C\uFF0C\u7B49\u540C\u6309\u94AE `nzType` | `string` | `dashed` |\n| `[removable]` | \u6307\u5B9A\u662F\u5426\u663E\u793A\u79FB\u9664\u6309\u94AE | `boolean` | - |\n| `[removeTitle]` | \u6307\u5B9A\u79FB\u9664\u6309\u94AE\u6587\u672C | `string` | `\u79FB\u9664` |\n\n### \u8868\u5355\u5143\u7D20\u7C7B\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[type]` | \u6307\u5B9A `input` \u7684 `type` \u503C | `string` | `text` |\n| `[placeholder]` | \u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u4FE1\u606F | `string` | - |\n| `[autofocus]` | \u52A0\u8F7D\u65F6\u662F\u5426\u83B7\u5F97\u7126\u70B9 | `boolean` | - |\n\n### \u6E32\u67D3\u7C7B\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[widget]` | \u6307\u5B9A\u91C7\u7528\u4EC0\u4E48\u5C0F\u90E8\u4EF6\u6E32\u67D3 | `string` | - |\n| `[i18n]` | \u6307 `schema.title` \u7684\u56FD\u9645\u5316\u952E\u503C | `string` | - |\n| `[descriptionI18n]` | \u6307 `schema.description` \u7684\u56FD\u9645\u5316\u952E\u503C | `string` | - |\n| `[class]` | \u81EA\u5B9A\u4E49\u7C7B\uFF0C\u7B49\u540C `[ngClass]` \u503C | `string,string[]` | - |\n| `[width]` | \u6307\u5B9A\u5BBD\u5EA6\uFF0C\u5355\u4F4D\uFF1A`px` | `number` | - |\n| `[size]` | \u5143\u7D20\u7EC4\u4EF6\u5927\u5C0F | `default,large,small` | - |\n| `[grid]` | \u54CD\u5E94\u5F0F\u5C5E\u6027 | `SFGridSchema` | - |\n| `[optional]` | \u6807\u7B7E\u53EF\u9009\u4FE1\u606F | `string` | - |\n| `[optionalHelp]` | \u6807\u7B7E\u53EF\u9009\u5E2E\u52A9 | `string, SFOptionalHelp` | - |\n| `[collapse]` | \u6807\u8BB0\u8BE5\u5B57\u6BB5\u5728\u8868\u5355\u6298\u53E0\u72B6\u6001\u4E0B\u9690\u85CF | `boolean` | - |\n\n### \u54CD\u5E94\u5F0F\u5C5E\u6027 SFGridSchema\n\n`grid` \u5C5E\u6027\u7B49\u540C\u5B8C\u6574\u7684 [Grid\u6805\u683C\u7CFB\u7EDF](https://ng.ant.design/components/grid/zh)\uFF0C\u900F\u8FC7 `grid` \u53EF\u4EE5\u51B3\u5B9A\u8868\u5355\u5982\u4F55\u6E32\u67D3\u3002\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[gutter]` | \u6805\u683C\u95F4\u9694 | `number` | - |\n| `[span]` | \u6BCF\u4E2A\u8868\u5355\u5143\u7D20\u6805\u683C\u5360\u4F4D\u683C\u6570\uFF0C\u4E3A `0` \u65F6\u76F8\u5F53\u4E8E `display: none` | `number` | - |\n| `[xs]` | `<768px` \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u4E00\u4E2A\u5305\u542B\u5176\u4ED6\u5C5E\u6027\u7684\u5BF9\u8C61 | `number, SFGridSizeSchema` | - |\n| `[sm]` | `\u2265768px` \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u4E00\u4E2A\u5305\u542B\u5176\u4ED6\u5C5E\u6027\u7684\u5BF9\u8C61 | `number, SFGridSizeSchema` | - |\n| `[md]` | `\u2265992px` \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u4E00\u4E2A\u5305\u542B\u5176\u4ED6\u5C5E\u6027\u7684\u5BF9\u8C61 | `number, SFGridSizeSchema` | - |\n| `[lg]` | `\u22651200px` \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u4E00\u4E2A\u5305\u542B\u5176\u4ED6\u5C5E\u6027\u7684\u5BF9\u8C61 | `number, SFGridSizeSchema` | - |\n| `[xl]` | `\u22651600px` \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u4E00\u4E2A\u5305\u542B\u5176\u4ED6\u5C5E\u6027\u7684\u5BF9\u8C61 | `number, SFGridSizeSchema` | - |\n| `[xxl]` | \u4FDD\u7559\u5B57\u6BB5\uFF0C`0.7.0` \u540E\u652F\u6301 | `number, SFGridSizeSchema` | - |\n\n### \u6C34\u5E73\u5E03\u5C40\u7C7B Schema\n\n> **\u52A1\u5FC5**\u4E8C\u8005\u603B\u548C\u4E3A `24`\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[spanLabel]` | `label` \u6240\u5360\u6805\u683C\u6570 | `number` | 5 |\n| `[spanControl]` | \u8868\u5355\u63A7\u4EF6\u6240\u5360\u6805\u683C\u6570 | `number` | 19 |\n| `[offsetControl]` | `control` \u6805\u683C\u5DE6\u4FA7\u7684\u95F4\u9694\u683C\u6570\uFF0C\u95F4\u9694\u5185\u4E0D\u53EF\u4EE5\u6709\u6805\u683C | `number` | - |\n| `[spanLabelFixed]` | `label` \u56FA\u5B9A\u5BBD\u5EA6 | `number` | - |'}}};codes=[];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-schema"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){e&1&&m(0,"app-docs",0),e&2&&d("codes",t.codes)("item",t.item)},dependencies:[S],encapsulation:2})};var ce=class o{msg=u(y);acl=u(Lt);schema={properties:{name:{type:"string",title:"name-user",ui:{acl:"user"}},age:{type:"string",title:"age-admin",ui:{acl:"admin"}}},required:["name"]};submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-acl-simple"]],decls:9,vars:1,consts:[[3,"formSubmit","schema"],["nz-button","","nzType","primary",3,"click"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)}),i(),a(1,"button",1),l("click",function(){return t.acl.setFull(!0)}),D(2,"Full"),i(),a(3,"button",1),l("click",function(){return t.acl.setFull(!1)}),D(4,"Not Full"),i(),a(5,"button",1),l("click",function(){return t.acl.setRole(["admin"])}),D(6,"Admin Role"),i(),a(7,"button",1),l("click",function(){return t.acl.setRole(["user"])}),D(8,"User Role"),i()),e&2&&d("schema",t.schema)},dependencies:[g,h,q,I,M,P],encapsulation:2})};var se=class o{item={name:"acl",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"acl",subtitle:"ACL",description:"Combined with @delon/acl permissions, a Schema can be used to build forms for different roles or permission points.",group:"Examples",order:0,path:"packages/form/examples/acl/index.en-US.md",url:"/form/acl/en"},text:`<p>Combined with <code>&#64;delon/acl</code> permissions, a Schema can be used to build forms for different roles or permission points.</p>
`,api:"",toc:[],raw:`---
title: acl
subtitle: ACL
type: Examples
---

Combined with \`@delon/acl\` permissions, a Schema can be used to build forms for different roles or permission points.`},"zh-CN":{meta:{title:"acl",subtitle:"ACL",description:"\u7ED3\u5408 @delon/acl \u6743\u9650\u53EF\u4EE5\u5229\u7528\u4E00\u4E2A Schema \u6765\u6784\u5EFA\u4E0D\u540C\u89D2\u8272\u6216\u6743\u9650\u70B9\u7684\u8868\u5355\u3002",group:"Examples",order:0,path:"packages/form/examples/acl/index.zh-CN.md",url:"/form/acl/zh"},text:`<p>\u7ED3\u5408 <code>&#64;delon/acl</code> \u6743\u9650\u53EF\u4EE5\u5229\u7528\u4E00\u4E2A Schema \u6765\u6784\u5EFA\u4E0D\u540C\u89D2\u8272\u6216\u6743\u9650\u70B9\u7684\u8868\u5355\u3002</p>
`,api:"",toc:[],raw:`---
title: acl
subtitle: ACL
type: Examples
---

\u7ED3\u5408 \`@delon/acl\` \u6743\u9650\u53EF\u4EE5\u5229\u7528\u4E00\u4E2A Schema \u6765\u6784\u5EFA\u4E0D\u540C\u89D2\u8272\u6216\u6743\u9650\u70B9\u7684\u8868\u5355\u3002`}}};codes=[{id:"form-acl-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, inject } from '@angular/core';

import { ACLService } from '@delon/acl';
import { DelonFormModule, SFSchema } from '@delon/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-acl-simple',
  template: \`
    <sf [schema]="schema" (formSubmit)="submit($event)" />
    <button nz-button nzType="primary" (click)="acl.setFull(true)">Full</button>
    <button nz-button nzType="primary" (click)="acl.setFull(false)">Not Full</button>
    <button nz-button nzType="primary" (click)="acl.setRole(['admin'])">Admin Role</button>
    <button nz-button nzType="primary" (click)="acl.setRole(['user'])">User Role</button>
  \`,
  imports: [DelonFormModule, NzButtonModule]
})
export class FormAclSimple {
  private readonly msg = inject(NzMessageService);
  readonly acl = inject(ACLService);
  schema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: 'name-user',
        ui: {
          acl: 'user'
        }
      },
      age: {
        type: 'string',
        title: 'age-admin',
        ui: {
          acl: 'admin'
        }
      }
    },
    required: ['name']
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/form/examples/acl/demo/simple.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-acl"]],hostAttrs:[1,"d-block"],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-acl-simple"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id))},dependencies:[S,ce,F,w,C],encapsulation:2})};var le=class o{msg=u(y);schema={properties:{login_type:{type:"string",title:"\u767B\u5F55\u65B9\u5F0F",enum:[{label:"\u624B\u673A",value:"mobile"},{label:"\u8D26\u5BC6",value:"account"}],default:"mobile",ui:{widget:"radio",styleType:"button"}},mobile:{type:"string"},code:{type:"number"},name:{type:"string"},pwd:{type:"string",ui:{type:"password"}}},required:["login_type"],if:{properties:{login_type:{enum:["mobile"]}}},then:{required:["mobile","code"]},else:{required:["name","pwd"]}};submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-conditional-if"]],decls:1,vars:1,consts:[[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)},dependencies:[g,h],encapsulation:2})};var an=["sf"],me=class o{msg=u(y);sf;searchDepartment$=new It;schema={properties:{login_type:{type:"string",title:"\u767B\u5F55\u65B9\u5F0F",enum:[{label:"\u624B\u673A",value:"mobile"},{label:"\u8D26\u5BC6",value:"account"}],default:"mobile",ui:{widget:"radio",styleType:"button"}},mobile:{type:"string",description:"Try typing: ng-alain",ui:{changeDebounceTime:100,change:n=>{this.sf.getProperty("/department")?.updateFeedback("validating"),this.searchDepartment$.next(n)},visibleIf:{login_type:n=>n==="mobile"?{required:!0,show:!0}:null}}},code:{type:"number",ui:{visibleIf:{login_type:["mobile"]}}},type:{type:"string",title:"\u7C7B\u578B",enum:["\u5185\u7F51","\u5916\u7F51"],default:"\u5185\u7F51",ui:{widget:"select",visibleIf:{login_type:n=>n==="mobile"}}},department:{type:"string",title:"Department",default:"\u90E8\u95E81",ui:{widget:"select",visibleIf:{type:["\u5185\u7F51"]}}},remark:{type:"string",title:"Remark",ui:{visibleIf:{type:n=>n==="\u5185\u7F51"?{required:!0,show:!0}:null}}},adr:{type:"string",title:"Address",ui:{visibleIf:{type:n=>n==="\u5916\u7F51"?{required:!0,show:!0}:null}}},name:{type:"string",ui:{visibleIf:{login_type:["account"]}}},pwd:{type:"string",ui:{type:"password",visibleIf:{login_type:["account"]}}}},required:["login_type"],ui:{debug:!0}};ngOnInit(){let n=e=>z(e==="ng-alain"?new Array(5).fill(0).map((t,s)=>`NG-ALAIN\u90E8\u95E8${s+1}`):new Array(3).fill(0).map((t,s)=>`\u90E8\u95E8${s+1}`)).pipe(x(500),At(()=>[]));this.searchDepartment$.asObservable().pipe(Ot(n)).subscribe(e=>{let t=this.sf.getProperty("/department");t.schema.enum=e,t.schema.default=e[0],t.widget.reset(e[0]),this.sf.getProperty("/department")?.updateFeedback()})}toggleMobile(n){this.sf.getProperty("/mobile")?.setVisible(n)?.widget?.detectChanges()}submit(n){this.msg.success(JSON.stringify(n))}ngOnDestroy(){this.searchDepartment$.complete()}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-conditional-visibleIf"]],viewQuery:function(e,t){if(e&1&&_(an,7),e&2){let s;N(s=T())&&(t.sf=s.first)}},decls:6,vars:1,consts:[["sf",""],["type","button","nz-button","",3,"click"],[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"button",1),l("click",function(){return t.toggleMobile(!1)}),D(1,"Hide mobile"),i(),a(2,"button",1),l("click",function(){return t.toggleMobile(!0)}),D(3,"Show mobile"),i(),a(4,"sf",2,0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&(c(4),d("schema",t.schema))},dependencies:[g,h,q,I,M,P],encapsulation:2})};var pe=class o{item={name:"conditional",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"Conditional expression",description:"sf supports two types of conditional expressions:JSON Schema Standard if-then-elseMore flexible visibleIf",group:"Examples",order:0,path:"packages/form/examples/conditional/index.en-US.md",url:"/form/conditional/en"},text:`<p><code>sf</code> supports two types of conditional expressions:</p>
<ul>
<li>JSON Schema Standard <a href="https://ajv.js.org/json-schema.html#if-then-else" target="_blank" rel="noopener">if-then-else</a></li>
<li>More flexible <code>visibleIf</code></li>
</ul>
`,api:"",toc:[],raw:`---
title: Conditional expression
type: Examples
---

\`sf\` supports two types of conditional expressions:
- JSON Schema Standard [if-then-else](https://ajv.js.org/json-schema.html#if-then-else)
- More flexible \`visibleIf\``},"zh-CN":{meta:{title:"visibleIf",subtitle:"\u6761\u4EF6\u8868\u8FBE\u5F0F",description:"sf \u652F\u6301\u4E24\u79CD\u7C7B\u578B\u7684\u6761\u4EF6\u8868\u8FBE\u5F0F\uFF0C\u5206\u522B\u4E3A\uFF1AJSON Schema \u6807\u51C6 if-then-else \u7075\u6D3B\u6027\u66F4\u5F3A\u7684 visibleIf",group:"Examples",order:0,path:"packages/form/examples/conditional/index.zh-CN.md",url:"/form/conditional/zh"},text:`<p><code>sf</code> \u652F\u6301\u4E24\u79CD\u7C7B\u578B\u7684\u6761\u4EF6\u8868\u8FBE\u5F0F\uFF0C\u5206\u522B\u4E3A\uFF1A</p>
<ul>
<li>JSON Schema \u6807\u51C6 <a href="https://ajv.js.org/json-schema.html#if-then-else" target="_blank" rel="noopener">if-then-else</a></li>
<li>\u7075\u6D3B\u6027\u66F4\u5F3A\u7684 <code>visibleIf</code></li>
</ul>
`,api:"",toc:[],raw:`---
title: visibleIf
subtitle: \u6761\u4EF6\u8868\u8FBE\u5F0F
type: Examples
---

\`sf\` \u652F\u6301\u4E24\u79CD\u7C7B\u578B\u7684\u6761\u4EF6\u8868\u8FBE\u5F0F\uFF0C\u5206\u522B\u4E3A\uFF1A
- JSON Schema \u6807\u51C6 [if-then-else](https://ajv.js.org/json-schema.html#if-then-else) 
- \u7075\u6D3B\u6027\u66F4\u5F3A\u7684 \`visibleIf\``}}};codes=[{id:"form-conditional-if",name:"if",title:{"zh-CN":"If\u6837\u4F8B","en-US":"If Usage"},code:`import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-conditional-if',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)" /> \`,
  imports: [DelonFormModule]
})
export class FormConditionalIf {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      login_type: {
        type: 'string',
        title: '\u767B\u5F55\u65B9\u5F0F',
        enum: [
          { label: '\u624B\u673A', value: 'mobile' },
          { label: '\u8D26\u5BC6', value: 'account' }
        ],
        default: 'mobile',
        ui: {
          widget: 'radio',
          styleType: 'button'
        }
      },
      mobile: {
        type: 'string'
      },
      code: {
        type: 'number'
      },
      name: {
        type: 'string'
      },
      pwd: {
        type: 'string',
        ui: {
          type: 'password'
        }
      }
    },
    required: ['login_type'],
    if: {
      properties: { login_type: { enum: ['mobile'] } }
    },
    then: {
      required: ['mobile', 'code']
    },
    else: {
      required: ['name', 'pwd']
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:1,type:"demo",summary:{"en-US":`<p><a href="https://ajv.js.org/json-schema.html#if-then-else" target="_blank" rel="noopener">if-then-else</a> usage of JSON Schema is supported.</p>
`,"zh-CN":`<p>\u652F\u6301 JSON Schema \u7684 <a href="https://ajv.js.org/json-schema.html#if-then-else" target="_blank" rel="noopener">if-then-else</a> \u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`[if-then-else](https://ajv.js.org/json-schema.html#if-then-else) usage of JSON Schema is supported.
`,"zh-CN":`\u652F\u6301 JSON Schema \u7684 [if-then-else](https://ajv.js.org/json-schema.html#if-then-else) \u7528\u6CD5\u3002
`},path:"packages/form/examples/conditional/demo/if.md"},{id:"form-conditional-visibleIf",name:"visibleIf",title:{"zh-CN":"visibleIf","en-US":"visibleIf"},code:`import { Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { Observable, of, Subject, catchError, delay, switchMap } from 'rxjs';

import { DelonFormModule, SFComponent, SFSchema, SFSelectWidgetSchema, SFStringWidgetSchema } from '@delon/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-conditional-visibleIf',
  template: \`
    <button type="button" nz-button (click)="toggleMobile(false)">Hide mobile</button>
    <button type="button" nz-button (click)="toggleMobile(true)">Show mobile</button>
    <sf #sf [schema]="schema" (formSubmit)="submit($event)" />
  \`,
  imports: [DelonFormModule, NzButtonModule]
})
export class FormConditionalVisibleIf implements OnInit, OnDestroy {
  private readonly msg = inject(NzMessageService);

  @ViewChild('sf', { static: true }) sf!: SFComponent;
  private searchDepartment$ = new Subject<string>();

  schema: SFSchema = {
    properties: {
      login_type: {
        type: 'string',
        title: '\u767B\u5F55\u65B9\u5F0F',
        enum: [
          { label: '\u624B\u673A', value: 'mobile' },
          { label: '\u8D26\u5BC6', value: 'account' }
        ],
        default: 'mobile',
        ui: {
          widget: 'radio',
          styleType: 'button'
        }
      },
      mobile: {
        type: 'string',
        description: 'Try typing: ng-alain',
        ui: {
          changeDebounceTime: 100,
          change: q => {
            this.sf.getProperty('/department')?.updateFeedback('validating');
            this.searchDepartment$.next(q);
          },
          visibleIf: {
            login_type: val => (val === 'mobile' ? { required: true, show: true } : null)
          }
        } as SFStringWidgetSchema
      },
      code: {
        type: 'number',
        ui: {
          visibleIf: {
            login_type: ['mobile']
          }
        }
      },
      type: {
        type: 'string',
        title: '\u7C7B\u578B',
        enum: ['\u5185\u7F51', '\u5916\u7F51'],
        default: '\u5185\u7F51',
        ui: {
          widget: 'select',
          visibleIf: {
            login_type: val => val === 'mobile'
          }
        }
      },
      department: {
        type: 'string',
        title: 'Department',
        default: '\u90E8\u95E81',
        ui: {
          widget: 'select',
          visibleIf: {
            type: ['\u5185\u7F51']
          }
        } as SFSelectWidgetSchema
      },
      remark: {
        type: 'string',
        title: 'Remark',
        ui: {
          visibleIf: {
            type: val => (val === '\u5185\u7F51' ? { required: true, show: true } : null)
          }
        }
      },
      adr: {
        type: 'string',
        title: 'Address',
        ui: {
          visibleIf: {
            type: val => (val === '\u5916\u7F51' ? { required: true, show: true } : null)
          }
        }
      },
      name: {
        type: 'string',
        ui: {
          visibleIf: {
            login_type: ['account']
          }
        }
      },
      pwd: {
        type: 'string',
        ui: {
          type: 'password',
          visibleIf: {
            login_type: ['account']
          }
        }
      }
    },
    required: ['login_type'],
    ui: { debug: true }
  };

  ngOnInit(): void {
    const mockHttp = (q: string): Observable<string[]> =>
      of(
        q === 'ng-alain'
          ? new Array(5).fill(0).map((_, idx) => \`NG-ALAIN\u90E8\u95E8\${idx + 1}\`)
          : new Array(3).fill(0).map((_, idx) => \`\u90E8\u95E8\${idx + 1}\`)
      ).pipe(
        delay(500),
        catchError(() => [])
      );

    this.searchDepartment$
      .asObservable()
      .pipe(switchMap(mockHttp))
      .subscribe(list => {
        const departmentProperty = this.sf.getProperty('/department')!;
        departmentProperty.schema.enum = list;
        departmentProperty.schema.default = list[0];
        departmentProperty.widget.reset(list[0]);
        this.sf.getProperty('/department')?.updateFeedback();
      });
  }

  toggleMobile(status: boolean): void {
    const mobileProperty = this.sf.getProperty('/mobile');
    mobileProperty?.setVisible(status)?.widget?.detectChanges();
  }

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }

  ngOnDestroy(): void {
    this.searchDepartment$.complete();
  }
}`,order:2,type:"demo",summary:{"en-US":`<p>Use <code>visibleIf</code> to implement more flexible conditional expressions, which can support both display and required items. Feedback status can be updated with <code>updateFeedback</code>.</p>
`,"zh-CN":`<p>\u5229\u7528 <code>visibleIf</code> \u5B9E\u73B0\u66F4\u52A0\u7075\u6D3B\u7684\u6761\u4EF6\u8868\u8FBE\u5F0F\uFF0C\u53EF\u4EE5\u540C\u65F6\u652F\u6301\u663E\u793A\u4E0E\u53EF\u9009\u9879\uFF1B\u5229\u7528 <code>updateFeedback</code> \u53EF\u4EE5\u66F4\u65B0\u53CD\u9988\u72B6\u6001\u3002</p>
`},summary_raw:{"en-US":"Use `visibleIf` to implement more flexible conditional expressions, which can support both display and required items. Feedback status can be updated with `updateFeedback`.\n","zh-CN":"\u5229\u7528 `visibleIf` \u5B9E\u73B0\u66F4\u52A0\u7075\u6D3B\u7684\u6761\u4EF6\u8868\u8FBE\u5F0F\uFF0C\u53EF\u4EE5\u540C\u65F6\u652F\u6301\u663E\u793A\u4E0E\u53EF\u9009\u9879\uFF1B\u5229\u7528 `updateFeedback` \u53EF\u4EE5\u66F4\u65B0\u53CD\u9988\u72B6\u6001\u3002\n"},path:"packages/form/examples/conditional/demo/visibleIf.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-conditional"]],hostAttrs:[1,"d-block"],decls:7,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-conditional-if"),i(),a(5,"code-box",3),m(6,"form-conditional-visibleIf"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id),c(2),d("item",t.codes[1]),v("id",t.codes[1].id))},dependencies:[S,le,me,F,w,C],encapsulation:2})};var rn=["sf"],ue=class o{msg=u(y);i18n=u(Ht);comp;schema=this.i18nSchema;get i18nSchema(){return{properties:{name:{type:"string",ui:{i18n:"sf.name",descriptionI18n:"sf.description",optionalHelp:{i18n:"sf.description"}}},password:{type:"string",title:this.i18n.fanyi("sf.name"),description:this.i18n.fanyi("sf.description"),ui:{type:"password"}}},required:["name","password"]}}changeLang(n){this.i18n.use(this.i18n.zone==="zh"?"en-US":"zh-CN"),n==="ref"&&this.comp.refreshSchema(this.i18nSchema)}submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-i18n-simple"]],viewQuery:function(e,t){if(e&1&&_(rn,7),e&2){let s;N(s=T())&&(t.comp=s.first)}},decls:6,vars:1,consts:[["sf",""],["nz-button","","type","button",3,"click"],[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"button",1),l("click",function(){return t.changeLang("srv")}),D(1,"Change Language Via Service"),i(),a(2,"button",1),l("click",function(){return t.changeLang("ref")}),D(3,"Change Language Via call refresh schema"),i(),a(4,"sf",2,0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&(c(4),d("schema",t.schema))},dependencies:[g,h,q,I,M,P],encapsulation:2})};var he=class o{item={name:"i18n",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"i18n",subtitle:"Internationalization",description:"JSON Schema just a JSON object, it's support for internationalization. In addition, sf also supports some faster internationalization methods, but the...",group:"Examples",order:0,path:"packages/form/examples/i18n/index.en-US.md",url:"/form/i18n/en"},text:`<p>JSON Schema just a JSON object, it&#39;s support for internationalization. In addition, <code>sf</code> also supports some faster internationalization methods, but the elements it supports are based on the following: <code>title</code>, <code>description</code>, <code>optionalHelp</code>.</p>
`,api:"",toc:[],raw:"---\ntitle: i18n\nsubtitle: Internationalization\ntype: Examples\n---\n\nJSON Schema just a JSON object, it's support for internationalization. In addition, `sf` also supports some faster internationalization methods, but the elements it supports are based on the following: `title`, `description`, `optionalHelp`."},"zh-CN":{meta:{title:"i18n",subtitle:"\u56FD\u9645\u5316",description:"JSON Schema \u672C\u8EAB\u53EA\u662F\u4E00\u4E2A JSON \u5BF9\u8C61\uFF0C\u56E0\u6B64\u672C\u8D28\u4E0A\u5DF2\u7ECF\u662F\u652F\u6301\u56FD\u9645\u5316\u3002\u6B64\u5916\uFF0Csf \u8FD8\u652F\u6301\u4E00\u4E9B\u6BD4\u8F83\u5FEB\u6377\u7684\u56FD\u9645\u5316\u65B9\u5F0F\uFF0C\u4F46\u5B83\u652F\u6301\u7684\u5143\u7D20\u6BD4\u8F83\u57FA\u7840\uFF1Atitle\u3001description\u3001optionalHelp \u4E09\u4E2A\u5143\u7D20\u3002",group:"Examples",order:0,path:"packages/form/examples/i18n/index.zh-CN.md",url:"/form/i18n/zh"},text:`<p>JSON Schema \u672C\u8EAB\u53EA\u662F\u4E00\u4E2A JSON \u5BF9\u8C61\uFF0C\u56E0\u6B64\u672C\u8D28\u4E0A\u5DF2\u7ECF\u662F\u652F\u6301\u56FD\u9645\u5316\u3002\u6B64\u5916\uFF0C<code>sf</code> \u8FD8\u652F\u6301\u4E00\u4E9B\u6BD4\u8F83\u5FEB\u6377\u7684\u56FD\u9645\u5316\u65B9\u5F0F\uFF0C\u4F46\u5B83\u652F\u6301\u7684\u5143\u7D20\u6BD4\u8F83\u57FA\u7840\uFF1A<code>title</code>\u3001<code>description</code>\u3001<code>optionalHelp</code> \u4E09\u4E2A\u5143\u7D20\u3002</p>
`,api:"",toc:[],raw:"---\ntitle: i18n\nsubtitle: \u56FD\u9645\u5316\ntype: Examples\n---\n\nJSON Schema \u672C\u8EAB\u53EA\u662F\u4E00\u4E2A JSON \u5BF9\u8C61\uFF0C\u56E0\u6B64\u672C\u8D28\u4E0A\u5DF2\u7ECF\u662F\u652F\u6301\u56FD\u9645\u5316\u3002\u6B64\u5916\uFF0C`sf` \u8FD8\u652F\u6301\u4E00\u4E9B\u6BD4\u8F83\u5FEB\u6377\u7684\u56FD\u9645\u5316\u65B9\u5F0F\uFF0C\u4F46\u5B83\u652F\u6301\u7684\u5143\u7D20\u6BD4\u8F83\u57FA\u7840\uFF1A`title`\u3001`description`\u3001`optionalHelp` \u4E09\u4E2A\u5143\u7D20\u3002"}}};codes=[{id:"form-i18n-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, ViewChild, inject } from '@angular/core';

import { DelonFormModule, SFComponent, SFSchema } from '@delon/form';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-i18n-simple',
  template: \`
    <button nz-button type="button" (click)="changeLang('srv')">Change Language Via Service</button>
    <button nz-button type="button" (click)="changeLang('ref')">Change Language Via call refresh schema</button>
    <sf #sf [schema]="schema" (formSubmit)="submit($event)" />
  \`,
  imports: [DelonFormModule, NzButtonModule]
})
export class FormI18nSimple {
  private readonly msg = inject(NzMessageService);
  private readonly i18n = inject(ALAIN_I18N_TOKEN);

  @ViewChild('sf', { static: true }) comp!: SFComponent;
  schema = this.i18nSchema;

  private get i18nSchema(): SFSchema {
    return {
      properties: {
        name: {
          type: 'string',
          ui: {
            i18n: 'sf.name',
            descriptionI18n: 'sf.description',
            optionalHelp: {
              i18n: 'sf.description'
            }
          }
        },
        password: {
          type: 'string',
          title: this.i18n.fanyi('sf.name'),
          description: this.i18n.fanyi('sf.description'),
          ui: {
            type: 'password'
          }
        }
      },
      required: ['name', 'password']
    };
  }

  changeLang(type: 'srv' | 'ref'): void {
    this.i18n.use(this.i18n.zone === 'zh' ? 'en-US' : 'zh-CN');
    if (type === 'ref') {
      this.comp.refreshSchema(this.i18nSchema);
    }
  }

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>The <code>name</code> element uses built-in i18n method; <code>password</code> uses external i18n method.</p>
`,"zh-CN":`<p><code>name</code> \u5143\u7D20\u91C7\u7528\u5185\u7F6E\u7684\u56FD\u9645\u5316\u65B9\u5F0F\uFF1B<code>password</code> \u91C7\u7528\u5916\u90E8\u56FD\u9645\u5316\u65B9\u5F0F\u3002</p>
`},summary_raw:{"en-US":"The `name` element uses built-in i18n method; `password` uses external i18n method.\n","zh-CN":"`name` \u5143\u7D20\u91C7\u7528\u5185\u7F6E\u7684\u56FD\u9645\u5316\u65B9\u5F0F\uFF1B`password` \u91C7\u7528\u5916\u90E8\u56FD\u9645\u5316\u65B9\u5F0F\u3002\n"},path:"packages/form/examples/i18n/demo/simple.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-i18n"]],hostAttrs:[1,"d-block"],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-i18n-simple"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id))},dependencies:[S,ue,F,w,C],encapsulation:2})};var cn=["sf"],ge=class o{sf;msg=u(y);d$=u(Rt);schema={properties:{userName:{type:"string",title:"\u7528\u6237\u540D"},pwd:{type:"string",title:"\u5BC6\u7801"}},required:["userName","pwd"]};get userNameRequired(){return(this.sf.getProperty("/userName")?.parent?.schema.required??[]).includes("userName")}get userNameDisabled(){return this.sf.getProperty("/userName")?.schema?.readOnly===!0}toggleUserNameRequired(){this.sf.setRequired("/userName",!this.userNameRequired)}toggleUserNameDisabled(){this.sf.setDisabled("/userName",!this.userNameDisabled)}modifyUserNameValue(){this.sf.setValue("/userName",`Mock text ${+new Date}`)}getUserNameValue(){this.msg.info(this.sf.getValue("/userName"))}triggerUserNameAsyncStatus(){this.sf.updateFeedback("/userName","validating"),Et(1e3*2).pipe(Bt(this.d$)).subscribe(()=>{this.sf.updateFeedback("/userName","success")})}submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-method-simple"]],viewQuery:function(e,t){if(e&1&&_(cn,5),e&2){let s;N(s=T())&&(t.sf=s.first)}},decls:13,vars:1,consts:[["sf",""],[1,"mb-md"],["nz-button","",3,"click"],[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"p",1)(1,"button",2),l("click",function(){return t.getUserNameValue()}),D(2,"Get userName value"),i(),a(3,"button",2),l("click",function(){return t.modifyUserNameValue()}),D(4,"Modify userName value"),i(),a(5,"button",2),l("click",function(){return t.toggleUserNameRequired()}),D(6,"Toggle userName required"),i(),a(7,"button",2),l("click",function(){return t.toggleUserNameDisabled()}),D(8,"Toggle userName disabled"),i(),a(9,"button",2),l("click",function(){return t.triggerUserNameAsyncStatus()}),D(10,"userName async status"),i()(),a(11,"sf",3,0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&(c(11),d("schema",t.schema))},dependencies:[g,h,q,I,M,P],encapsulation:2})};var fe=class o{item={name:"method",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"method",subtitle:"Built-in methods",description:"SFComponent provides some shortcut methods, such as: setValue, setDisabled, setRequired, etc.",group:"Examples",order:0,path:"packages/form/examples/method/index.en-US.md",url:"/form/method/en"},text:`<p><code>SFComponent</code> provides some shortcut methods, such as: <code>setValue</code>, <code>setDisabled</code>, <code>setRequired</code>, etc.</p>
`,api:"",toc:[],raw:"---\ntitle: method\nsubtitle: Built-in methods\ntype: Examples\n---\n\n`SFComponent` provides some shortcut methods, such as: `setValue`, `setDisabled`, `setRequired`, etc."},"zh-CN":{meta:{title:"method",subtitle:"\u5185\u7F6E\u65B9\u6CD5",description:"SFComponent \u63D0\u4F9B\u4E00\u4E9B\u5FEB\u6377\u65B9\u6CD5\uFF0C\u4F8B\u5982\uFF1AsetValue\u3001setDisabled\u3001setRequired \u7B49",group:"Examples",order:0,path:"packages/form/examples/method/index.zh-CN.md",url:"/form/method/zh"},text:`<p><code>SFComponent</code> \u63D0\u4F9B\u4E00\u4E9B\u5FEB\u6377\u65B9\u6CD5\uFF0C\u4F8B\u5982\uFF1A<code>setValue</code>\u3001<code>setDisabled</code>\u3001<code>setRequired</code> \u7B49</p>
`,api:"",toc:[],raw:"---\ntitle: method\nsubtitle: \u5185\u7F6E\u65B9\u6CD5\ntype: Examples\n---\n\n`SFComponent` \u63D0\u4F9B\u4E00\u4E9B\u5FEB\u6377\u65B9\u6CD5\uFF0C\u4F8B\u5982\uFF1A`setValue`\u3001`setDisabled`\u3001`setRequired` \u7B49"}}};codes=[{id:"form-method-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, DestroyRef, ViewChild, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { timer } from 'rxjs';

import { DelonFormModule, SFComponent, SFSchema } from '@delon/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-method-simple',
  template: \`
    <p class="mb-md">
      <button nz-button (click)="getUserNameValue()">Get userName value</button>
      <button nz-button (click)="modifyUserNameValue()">Modify userName value</button>
      <button nz-button (click)="toggleUserNameRequired()">Toggle userName required</button>
      <button nz-button (click)="toggleUserNameDisabled()">Toggle userName disabled</button>
      <button nz-button (click)="triggerUserNameAsyncStatus()">userName async status</button>
    </p>
    <sf #sf [schema]="schema" (formSubmit)="submit($event)" />
  \`,
  imports: [DelonFormModule, NzButtonModule]
})
export class FormMethodSimple {
  @ViewChild('sf') private readonly sf!: SFComponent;
  private readonly msg = inject(NzMessageService);
  private readonly d$ = inject(DestroyRef);
  schema: SFSchema = {
    properties: {
      userName: { type: 'string', title: '\u7528\u6237\u540D' },
      pwd: { type: 'string', title: '\u5BC6\u7801' }
    },
    required: ['userName', 'pwd']
  };

  private get userNameRequired(): boolean {
    return (this.sf.getProperty('/userName')?.parent?.schema.required ?? []).includes('userName');
  }

  private get userNameDisabled(): boolean {
    return this.sf.getProperty('/userName')?.schema?.readOnly === true;
  }

  toggleUserNameRequired(): void {
    this.sf.setRequired(\`/userName\`, !this.userNameRequired);
  }

  toggleUserNameDisabled(): void {
    this.sf.setDisabled(\`/userName\`, !this.userNameDisabled);
  }

  modifyUserNameValue(): void {
    this.sf.setValue(\`/userName\`, \`Mock text \${+new Date()}\`);
  }

  getUserNameValue(): void {
    this.msg.info(this.sf.getValue('/userName'));
  }

  triggerUserNameAsyncStatus(): void {
    this.sf.updateFeedback('/userName', 'validating');
    timer(1000 * 2)
      .pipe(takeUntilDestroyed(this.d$))
      .subscribe(() => {
        this.sf.updateFeedback('/userName', 'success');
      });
  }

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/form/examples/method/demo/simple.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-method"]],hostAttrs:[1,"d-block"],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-method-simple"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id))},dependencies:[S,ge,F,w,C],encapsulation:2})};var be=class o{mh=u(Gt);msg=u(y);open(){this.mh.create(ee).subscribe(n=>this.msg.success(JSON.stringify(n)))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-modal-simple"]],decls:2,vars:0,consts:[["nz-button","","type","button",3,"click"]],template:function(e,t){e&1&&(a(0,"button",0),l("click",function(){return t.open()}),D(1,"Open"),i())},dependencies:[q,I,M,P],encapsulation:2})};var ye=class o{item={name:"modal",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"modal",subtitle:"Modal",description:"Using a form in a modal box is a very common scenario. In fact, when you run ng g ng-alain:edit edit, you will get a complete example; you will get an...",group:"Examples",order:0,path:"packages/form/examples/modal/index.en-US.md",url:"/form/modal/en"},text:`<p>Using a form in a modal box is a very common scenario. In fact, when you run <code>ng g ng-alain:edit edit</code>, you will get a complete example; you will get an HTML template like this:</p>
<pre><code class="language-html">&lt;sf mode=&quot;edit&quot; [schema]=&quot;schema&quot; [ui]=&quot;ui&quot; [formData]=&quot;i&quot; button=&quot;none&quot;&gt;
  &lt;div class=&quot;modal-footer&quot;&gt;
    &lt;button nz-button type=&quot;button&quot; (click)=&quot;close()&quot;&gt;Close&lt;/button&gt;
    &lt;button nz-button type=&quot;submit&quot; [nzType]=&quot;&#39;primary&#39;&quot; (click)=&quot;save(sf.value)&quot; [disabled]=&quot;!sf.valid&quot; [nzLoading]=&quot;http.loading&quot;&gt;Save&lt;/button&gt;
  &lt;/div&gt;
&lt;/sf&gt;
</code></pre>
<p><code>.modal-footer</code> has been very friendly to integrate custom dynamic boxes.</p>
`,api:"",toc:[],raw:`---
title: modal
subtitle: Modal
type: Examples
---

Using a form in a modal box is a very common scenario. In fact, when you run \`ng g ng-alain:edit edit\`, you will get a complete example; you will get an HTML template like this:

\`\`\`html
<sf mode="edit" [schema]="schema" [ui]="ui" [formData]="i" button="none">
  <div class="modal-footer">
    <button nz-button type="button" (click)="close()">Close</button>
    <button nz-button type="submit" [nzType]="'primary'" (click)="save(sf.value)" [disabled]="!sf.valid" [nzLoading]="http.loading">Save</button>
  </div>
</sf>
\`\`\`

\`.modal-footer\` has been very friendly to integrate custom dynamic boxes.`},"zh-CN":{meta:{title:"modal",subtitle:"\u6A21\u6001\u6846",description:"\u5728\u6A21\u6001\u6846\u91CC\u4F7F\u7528\u8868\u5355\u662F\u4E00\u79CD\u975E\u5E38\u5E38\u89C1\u573A\u666F\uFF0C\u5176\u5B9E ng g ng-alain:edit edit \u7684\u65F6\u5019\u4F1A\u5F97\u5230\u4E00\u4E2A\u5B8C\u6574\u793A\u4F8B\uFF1B\u4F1A\u5F97\u5230\u8FD9\u6837\u7684\u4E00\u4E2AHTML\u6A21\u677F\uFF1A.modal-footer \u5DF2\u7ECF\u975E\u5E38\u53CB\u597D\u7684\u878D\u5408\u4E86\u81EA\u5B9A\u4E49\u52A8\u6001\u6846\u3002",group:"Examples",order:0,path:"packages/form/examples/modal/index.zh-CN.md",url:"/form/modal/zh"},text:`<p>\u5728\u6A21\u6001\u6846\u91CC\u4F7F\u7528\u8868\u5355\u662F\u4E00\u79CD\u975E\u5E38\u5E38\u89C1\u573A\u666F\uFF0C\u5176\u5B9E <code>ng g ng-alain:edit edit</code> \u7684\u65F6\u5019\u4F1A\u5F97\u5230\u4E00\u4E2A\u5B8C\u6574\u793A\u4F8B\uFF1B\u4F1A\u5F97\u5230\u8FD9\u6837\u7684\u4E00\u4E2AHTML\u6A21\u677F\uFF1A</p>
<pre><code class="language-html">&lt;sf mode=&quot;edit&quot; [schema]=&quot;schema&quot; [ui]=&quot;ui&quot; [formData]=&quot;i&quot; button=&quot;none&quot;&gt;
  &lt;div class=&quot;modal-footer&quot;&gt;
    &lt;button nz-button type=&quot;button&quot; (click)=&quot;close()&quot;&gt;\u5173\u95ED&lt;/button&gt;
    &lt;button nz-button type=&quot;submit&quot; [nzType]=&quot;&#39;primary&#39;&quot; (click)=&quot;save(sf.value)&quot; [disabled]=&quot;!sf.valid&quot; [nzLoading]=&quot;http.loading&quot;&gt;\u4FDD\u5B58&lt;/button&gt;
  &lt;/div&gt;
&lt;/sf&gt;
</code></pre>
<p><code>.modal-footer</code> \u5DF2\u7ECF\u975E\u5E38\u53CB\u597D\u7684\u878D\u5408\u4E86\u81EA\u5B9A\u4E49\u52A8\u6001\u6846\u3002</p>
`,api:"",toc:[],raw:`---
title: modal
subtitle: \u6A21\u6001\u6846
type: Examples
---

\u5728\u6A21\u6001\u6846\u91CC\u4F7F\u7528\u8868\u5355\u662F\u4E00\u79CD\u975E\u5E38\u5E38\u89C1\u573A\u666F\uFF0C\u5176\u5B9E \`ng g ng-alain:edit edit\` \u7684\u65F6\u5019\u4F1A\u5F97\u5230\u4E00\u4E2A\u5B8C\u6574\u793A\u4F8B\uFF1B\u4F1A\u5F97\u5230\u8FD9\u6837\u7684\u4E00\u4E2AHTML\u6A21\u677F\uFF1A

\`\`\`html
<sf mode="edit" [schema]="schema" [ui]="ui" [formData]="i" button="none">
  <div class="modal-footer">
    <button nz-button type="button" (click)="close()">\u5173\u95ED</button>
    <button nz-button type="submit" [nzType]="'primary'" (click)="save(sf.value)" [disabled]="!sf.valid" [nzLoading]="http.loading">\u4FDD\u5B58</button>
  </div>
</sf>
\`\`\`

\`.modal-footer\` \u5DF2\u7ECF\u975E\u5E38\u53CB\u597D\u7684\u878D\u5408\u4E86\u81EA\u5B9A\u4E49\u52A8\u6001\u6846\u3002`}}};codes=[{id:"form-modal-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, inject } from '@angular/core';

import { DemoSfComponent } from '@shared';

import { ModalHelper } from '@delon/theme';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-modal-simple',
  template: \` <button nz-button type="button" (click)="open()">Open</button> \`,
  imports: [NzButtonModule]
})
export class FormModalSimple {
  private readonly mh = inject(ModalHelper);
  private readonly msg = inject(NzMessageService);

  open(): void {
    this.mh.create(DemoSfComponent).subscribe(res => this.msg.success(JSON.stringify(res)));
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/form/examples/modal/demo/simple.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-modal"]],hostAttrs:[1,"d-block"],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-modal-simple"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id))},dependencies:[S,be,F,w,C],encapsulation:2})};var Se=class o{schema={properties:{name:{type:"string",title:"\u59D3\u540D",ui:{placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"}},email:{type:"string",title:"\u90AE\u7BB1",format:"email",ui:{placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1"}},role:{type:"string",title:"\u89D2\u8272",enum:["\u7BA1\u7406\u5458","\u7F16\u8F91","\u8BBF\u5BA2"],ui:{placeholder:"\u8BF7\u9009\u62E9\u89D2\u8272"}},createdDate:{type:"string",title:"\u521B\u5EFA\u65E5\u671F",ui:{widget:"date",collapse:!0,width:200}},status:{type:"string",title:"\u72B6\u6001",enum:["\u542F\u7528","\u7981\u7528"],ui:{collapse:!0,placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",width:150}},remark:{type:"string",title:"\u5907\u6CE8",ui:{collapse:!0,widget:"textarea",autosize:!0,width:300}}}};submit(n){console.log("search",n)}reset(){console.log("reset")}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-search-simple"]],decls:1,vars:2,consts:[["mode","search",3,"formSubmit","formReset","schema","expandable"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)})("formReset",function(){return t.reset()}),i()),e&2&&d("schema",t.schema)("expandable",!0)},dependencies:[g,h],encapsulation:2})};var ve=class o{item={name:"search",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"search",subtitle:"Search",description:'Use expand/collapse to save space when there are many search conditions.Set mode="search" to quickly configure search mode, which automatically sets l...',group:"Examples",order:0,path:"packages/form/examples/search/index.en-US.md",url:"/form/search/en"},text:`<p>Use expand/collapse to save space when there are many search conditions.</p>
<p>Set <code>mode=&quot;search&quot;</code> to quickly configure search mode, which automatically sets <code>layout</code> to <code>inline</code>, <code>liveValidate</code> to <code>false</code>, and changes button text to <code>Search</code>.</p>
<p>Combine with <a href="/form/getting-started/en#sf">expandable</a> to mark less important fields as <a href="/form/schema/en#Render-Type">collapse</a>, collapsed by default to keep the UI clean.</p>
`,api:"",toc:[],raw:'---\ntitle: search\nsubtitle: Search\ntype: Examples\n---\n\nUse expand/collapse to save space when there are many search conditions.\n\nSet `mode="search"` to quickly configure search mode, which automatically sets `layout` to `inline`, `liveValidate` to `false`, and changes button text to `Search`.\n\nCombine with <a href="/form/getting-started/en#sf">expandable</a> to mark less important fields as <a href="/form/schema/en#Render-Type">collapse</a>, collapsed by default to keep the UI clean.'},"zh-CN":{meta:{title:"search",subtitle:"\u641C\u7D22",description:'\u641C\u7D22\u6761\u4EF6\u8F83\u591A\u65F6\uFF0C\u4F7F\u7528\u5C55\u5F00/\u6536\u7F29\u6765\u8282\u7701\u7A7A\u95F4\u3002\u901A\u8FC7 mode="search" \u5FEB\u901F\u8BBE\u7F6E\u641C\u7D22\u6A21\u5F0F\uFF0C\u4F1A\u81EA\u52A8\u5C06 layout \u8BBE\u7F6E\u4E3A inline\u3001liveValidate \u8BBE\u7F6E\u4E3A false\u3001\u6309\u94AE\u6587\u672C\u6539\u4E3A \u641C\u7D22\u3002\u914D\u5408 expandable \u5C06\u4E0D\u91CD\u8981\u7684\u5B57\u6BB5\u6807\u8BB0\u4E3A collapse\uFF0C\u9ED8\u8BA4\u6298\u53E0\u4EE5\u4FDD\u6301\u754C\u9762\u7B80\u6D01\u3002',group:"Examples",order:0,path:"packages/form/examples/search/index.zh-CN.md",url:"/form/search/zh"},text:`<p>\u641C\u7D22\u6761\u4EF6\u8F83\u591A\u65F6\uFF0C\u4F7F\u7528\u5C55\u5F00/\u6536\u7F29\u6765\u8282\u7701\u7A7A\u95F4\u3002</p>
<p>\u901A\u8FC7 <code>mode=&quot;search&quot;</code> \u5FEB\u901F\u8BBE\u7F6E\u641C\u7D22\u6A21\u5F0F\uFF0C\u4F1A\u81EA\u52A8\u5C06 <code>layout</code> \u8BBE\u7F6E\u4E3A <code>inline</code>\u3001<code>liveValidate</code> \u8BBE\u7F6E\u4E3A <code>false</code>\u3001\u6309\u94AE\u6587\u672C\u6539\u4E3A <code>\u641C\u7D22</code>\u3002</p>
<p>\u914D\u5408 <a href="/form/getting-started/zh#sf">expandable</a> \u5C06\u4E0D\u91CD\u8981\u7684\u5B57\u6BB5\u6807\u8BB0\u4E3A <a href="/form/schema/zh#%E6%B8%B2%E6%9F%93%E7%B1%BB">collapse</a>\uFF0C\u9ED8\u8BA4\u6298\u53E0\u4EE5\u4FDD\u6301\u754C\u9762\u7B80\u6D01\u3002</p>
`,api:"",toc:[],raw:'---\ntitle: search\nsubtitle: \u641C\u7D22\ntype: Examples\n---\n\n\u641C\u7D22\u6761\u4EF6\u8F83\u591A\u65F6\uFF0C\u4F7F\u7528\u5C55\u5F00/\u6536\u7F29\u6765\u8282\u7701\u7A7A\u95F4\u3002\n\n\u901A\u8FC7 `mode="search"` \u5FEB\u901F\u8BBE\u7F6E\u641C\u7D22\u6A21\u5F0F\uFF0C\u4F1A\u81EA\u52A8\u5C06 `layout` \u8BBE\u7F6E\u4E3A `inline`\u3001`liveValidate` \u8BBE\u7F6E\u4E3A `false`\u3001\u6309\u94AE\u6587\u672C\u6539\u4E3A `\u641C\u7D22`\u3002\n\n\u914D\u5408 <a href="/form/getting-started/zh#sf">expandable</a> \u5C06\u4E0D\u91CD\u8981\u7684\u5B57\u6BB5\u6807\u8BB0\u4E3A <a href="/form/schema/zh#%E6%B8%B2%E6%9F%93%E7%B1%BB">collapse</a>\uFF0C\u9ED8\u8BA4\u6298\u53E0\u4EE5\u4FDD\u6301\u754C\u9762\u7B80\u6D01\u3002'}}};codes=[{id:"form-search-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';

@Component({
  selector: 'form-search-simple',
  template: \`
    <sf
      mode="search"
      [schema]="schema"
      [expandable]="true"
      (formSubmit)="submit($event)"
      (formReset)="reset()"
    />
  \`,
  imports: [DelonFormModule]
})
export class FormSearchSimple {
  schema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: '\u59D3\u540D',
        ui: { placeholder: '\u8BF7\u8F93\u5165\u59D3\u540D' }
      },
      email: {
        type: 'string',
        title: '\u90AE\u7BB1',
        format: 'email',
        ui: { placeholder: '\u8BF7\u8F93\u5165\u90AE\u7BB1' }
      },
      role: {
        type: 'string',
        title: '\u89D2\u8272',
        enum: ['\u7BA1\u7406\u5458', '\u7F16\u8F91', '\u8BBF\u5BA2'],
        ui: { placeholder: '\u8BF7\u9009\u62E9\u89D2\u8272' }
      },
      createdDate: {
        type: 'string',
        title: '\u521B\u5EFA\u65E5\u671F',
        ui: { widget: 'date', collapse: true, width: 200 }
      },
      status: {
        type: 'string',
        title: '\u72B6\u6001',
        enum: ['\u542F\u7528', '\u7981\u7528'],
        ui: { collapse: true, placeholder: '\u8BF7\u9009\u62E9\u72B6\u6001', width: 150 }
      },
      remark: {
        type: 'string',
        title: '\u5907\u6CE8',
        ui: { collapse: true, widget: 'textarea', autosize: true, width: 300 }
      }
    }
  };

  submit(value: {}): void {
    console.log('search', value);
  }

  reset(): void {
    console.log('reset');
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Search form with expand/collapse, only show common fields by default, collapse less important fields.</p>
`,"zh-CN":`<p>\u641C\u7D22\u8868\u5355\u914D\u5408\u5C55\u5F00/\u6536\u7F29\uFF0C\u9ED8\u8BA4\u53EA\u663E\u793A\u5E38\u7528\u5B57\u6BB5\uFF0C\u4E0D\u91CD\u8981\u7684\u5B57\u6BB5\u6298\u53E0\u8D77\u6765\u3002</p>
`},summary_raw:{"en-US":`Search form with expand/collapse, only show common fields by default, collapse less important fields.
`,"zh-CN":`\u641C\u7D22\u8868\u5355\u914D\u5408\u5C55\u5F00/\u6536\u7F29\uFF0C\u9ED8\u8BA4\u53EA\u663E\u793A\u5E38\u7528\u5B57\u6BB5\uFF0C\u4E0D\u91CD\u8981\u7684\u5B57\u6BB5\u6298\u53E0\u8D77\u6765\u3002
`},path:"packages/form/examples/search/demo/simple.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-search"]],hostAttrs:[1,"d-block"],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-search-simple"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id))},dependencies:[S,Se,F,w,C],encapsulation:2})};var we=class o{msg=u(y);schema={properties:{product:{type:"array",title:"\u4EA7\u54C1\u6E05\u5355",maxItems:4,items:{type:"object",properties:{name:{type:"string",title:"\u540D\u79F0"},price:{type:"number",title:"\u5355\u4EF7",minimum:1}},required:["name","price"]},ui:{grid:{arraySpan:12}}}}};submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-array-simple"]],decls:1,vars:1,consts:[[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)},dependencies:[g,h],encapsulation:2})};var Fe=class o{msg=u(y);schema={properties:{title:{type:"string"},market:{type:"number"},price:{type:"number"},skus:{type:"array",title:"Skus",maxItems:4,default:[{}],items:{type:"object",properties:{name:{type:"string",title:"\u540D\u79F0"},price:{type:"number",title:"\u5355\u4EF7",minimum:1},stock:{type:"number",minimum:1},desc:{type:"string",ui:{grid:{span:24}}}},required:["name","price","stock"],ui:{grid:{span:12}}},ui:{grid:{span:24,arraySpan:12}}},desc:{type:"string",ui:{grid:{span:24}}}},required:["title","market","price"],ui:{spanLabelFixed:100,grid:{span:8}}};submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-array-irregular"]],decls:1,vars:1,consts:[[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)},dependencies:[g,h],encapsulation:2})};var Ce=class o{item={name:"array",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"array",subtitle:"Array",order:2,description:`Create array object, it's only valid when schema.type="array".Array layout is divided into array itself and array element layout, arraySpan determines...`,group:"Widgets",path:"packages/form/src/widgets/array/index.en-US.md",url:"/form/array/en"},text:`<p>Create array object, it&#39;s only valid when <code>schema.type=&quot;array&quot;</code>.</p>
<h2 id="layout"><a class="lake-link"><i data-anchor="layout"></i></a>Layout</h2><p>Array layout is divided into array itself and array element layout, <code>arraySpan</code> determines the number of grid of each array element.</p>
<p>UI embed in Schema:</p>
<pre><code class="language-ts">const schema: SFSchema = &#123;
  properties: &#123;
    list: &#123;
      type: &#39;array&#39;,
      items: &#123;
        type: &#39;object&#39;,
        properties: &#123;
          a: &#123; type: &#39;string&#39; &#125;,
          b: &#123; type: &#39;number&#39;, ui: &#123; spanLabel: 10 &#125; &#125;
        &#125;
      &#125;,
      ui: &#123; spanLabel: 5, grid: &#123; arraySpan: 12 &#125; &#125;
    &#125;
  &#125;
&#125;;
</code></pre>
<p><strong>Note\uFF1A</strong> All attributes in <code>items</code> are inherited from <code>list.ui</code>, eventually, <code>items.a</code> has <code>5</code> units, <code>items.b</code> has <code>10</code> units.</p>
<p>Schema and UI are separated, above UI configuration will be converted to:</p>
<pre><code class="language-ts">const ui = &#123;
  $list: &#123;
    $items: &#123;
      $b: &#123; spanLabel: 10 &#125;
    &#125;,
    spanLabel: 5,
    grid: &#123; arraySpan: 12 &#125;
  &#125;
&#125;;
</code></pre>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[items]</code></td>
<td>Description of array element</td>
<td><code>SFSchema</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[minItems]</code></td>
<td>Minimum number of array element</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[maxItems]</code></td>
<td>Maximum number of array element</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[uniqueItems]</code></td>
<td>Element in array is unique</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[addTitle]</code></td>
<td>Add button title</td>
<td><code>string</code></td>
<td><code>add</code></td>
</tr>
<tr>
<td><code>[addType]</code></td>
<td>Add button type, equals to <code>nzType</code></td>
<td><code>string</code></td>
<td><code>dashed</code></td>
</tr>
<tr>
<td><code>[removable]</code></td>
<td>Whether includes remove button</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[removeTitle]</code></td>
<td>Remove button title</td>
<td><code>string</code></td>
<td><code>remove</code></td>
</tr>
<tr>
<td><code>[required]</code></td>
<td>Add required style to current item</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[$items]</code></td>
<td>UI description of array element</td>
<td><code>SFUISchema</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(add)</code></td>
<td>Add callback\uFF0C<code>property</code> indicates form property after add</td>
<td><code>(property: FormProperty) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(remove)</code></td>
<td>Remove callback</td>
<td><code>(index: number) =&gt; void</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:"layout",title:"Layout"},{id:"api",title:"API",children:[{id:"schema",title:"schema"},{id:"ui",title:"ui"}]}],raw:"---\ntitle: array\nsubtitle: Array\ntype: Widgets\norder: 2\n---\n\nCreate array object, it's only valid when `schema.type=\"array\"`.\n\n## Layout\n\nArray layout is divided into array itself and array element layout, `arraySpan` determines the number of grid of each array element.\n\nUI embed in Schema:\n\n```ts\nconst schema: SFSchema = {\n  properties: {\n    list: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          a: { type: 'string' },\n          b: { type: 'number', ui: { spanLabel: 10 } }\n        }\n      },\n      ui: { spanLabel: 5, grid: { arraySpan: 12 } }\n    }\n  }\n};\n```\n\n**Note\uFF1A** All attributes in `items` are inherited from `list.ui`, eventually, `items.a` has `5` units, `items.b` has `10` units.\n\nSchema and UI are separated, above UI configuration will be converted to:\n\n```ts\nconst ui = {\n  $list: {\n    $items: {\n      $b: { spanLabel: 10 }\n    },\n    spanLabel: 5,\n    grid: { arraySpan: 12 }\n  }\n};\n```\n\n## API\n\n### schema\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[items]` | Description of array element | `SFSchema` | - |\n| `[minItems]` | Minimum number of array element | `number` | - |\n| `[maxItems]` | Maximum number of array element | `number` | - |\n| `[uniqueItems]` | Element in array is unique | `boolean` | - |\n\n### ui\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[addTitle]` | Add button title | `string` | `add` |\n| `[addType]` | Add button type, equals to `nzType` | `string` | `dashed` |\n| `[removable]` | Whether includes remove button | `boolean` | `true` |\n| `[removeTitle]` | Remove button title | `string` | `remove` |\n| `[required]` | Add required style to current item	 | `boolean` | - |\n| `[$items]` | UI description of array element | `SFUISchema` | - |\n| `(add)` | Add callback\uFF0C`property` indicates form property after add | `(property: FormProperty) => void` | - |\n| `(remove)` | Remove callback | `(index: number) => void` | - |"},"zh-CN":{meta:{title:"array",subtitle:"\u6570\u7EC4",order:2,description:'\u521B\u5EFA\u5BF9\u8C61\u6570\u7EC4\uFF0C\u53EA\u5BF9 schema.type="array" \u65F6\u6709\u6548\u3002\u6570\u7EC4\u7684\u5E03\u5C40\u5206\u4E3A\u6570\u7EC4\u672C\u8EAB\u4EE5\u53CA\u6570\u7EC4\u5143\u7D20\u5E03\u5C40\uFF0CarraySpan \u51B3\u5B9A\u6BCF\u4E2A\u6570\u7EC4\u5143\u7D20\u5360\u6805\u683C\u6570\u503C\u3002Schema \u5185\u5D4C UI \u98CE\u683C\uFF1A\u6CE8\u610F\uFF1A items \u4E0B\u6240\u6709\u5C5E\u6027\u90FD\u7EE7\u627F\u4E8E list.ui\uFF0C\u6700\u7EC8 items.a \u4E3A 5 \u4E2A\u5355\u4F4D\u3001items.b \u4E3A...',group:"Widgets",path:"packages/form/src/widgets/array/index.zh-CN.md",url:"/form/array/zh"},text:`<p>\u521B\u5EFA\u5BF9\u8C61\u6570\u7EC4\uFF0C\u53EA\u5BF9 <code>schema.type=&quot;array&quot;</code> \u65F6\u6709\u6548\u3002</p>
<h2 id="\u5173\u4E8E\u5E03\u5C40"><a class="lake-link"><i data-anchor="\u5173\u4E8E\u5E03\u5C40"></i></a>\u5173\u4E8E\u5E03\u5C40</h2><p>\u6570\u7EC4\u7684\u5E03\u5C40\u5206\u4E3A\u6570\u7EC4\u672C\u8EAB\u4EE5\u53CA\u6570\u7EC4\u5143\u7D20\u5E03\u5C40\uFF0C<code>arraySpan</code> \u51B3\u5B9A\u6BCF\u4E2A\u6570\u7EC4\u5143\u7D20\u5360\u6805\u683C\u6570\u503C\u3002</p>
<p>Schema \u5185\u5D4C UI \u98CE\u683C\uFF1A</p>
<pre><code class="language-ts">const schema: SFSchema = &#123;
  properties: &#123;
    list: &#123;
      type: &#39;array&#39;,
      items: &#123;
        type: &#39;object&#39;,
        properties: &#123;
          a: &#123; type: &#39;string&#39; &#125;,
          b: &#123; type: &#39;number&#39;, ui: &#123; spanLabel: 10 &#125; &#125;
        &#125;
      &#125;,
      ui: &#123; spanLabel: 5, grid: &#123; arraySpan: 12 &#125; &#125;
    &#125;
  &#125;
&#125;;
</code></pre>
<p><strong>\u6CE8\u610F\uFF1A</strong> <code>items</code> \u4E0B\u6240\u6709\u5C5E\u6027\u90FD\u7EE7\u627F\u4E8E <code>list.ui</code>\uFF0C\u6700\u7EC8 <code>items.a</code> \u4E3A <code>5</code> \u4E2A\u5355\u4F4D\u3001<code>items.b</code> \u4E3A <code>10</code> \u4E2A\u5355\u4F4D\u3002</p>
<p>Schema \u4E0E UI \u5206\u5F00\u98CE\u683C\uFF0C\u5047\u5982\u4E0A\u8FF0 Schema \u8F6C\u5316\u6210 UI \u5199\u6CD5\uFF1A</p>
<pre><code class="language-ts">const ui = &#123;
  $list: &#123;
    $items: &#123;
      $b: &#123; spanLabel: 10 &#125;
    &#125;,
    spanLabel: 5,
    grid: &#123; arraySpan: 12 &#125;
  &#125;
&#125;;
</code></pre>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema_\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema_\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[items]</code></td>
<td>\u6570\u7EC4\u5143\u7D20\u7C7B\u578B\u63CF\u8FF0</td>
<td><code>SFSchema</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[minItems]</code></td>
<td>\u7EA6\u675F\u6570\u7EC4\u6700\u5C0F\u7684\u5143\u7D20\u4E2A\u6570</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[maxItems]</code></td>
<td>\u7EA6\u675F\u6570\u7EC4\u6700\u5927\u7684\u5143\u7D20\u4E2A\u6570</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[uniqueItems]</code></td>
<td>\u7EA6\u675F\u6570\u7EC4\u6BCF\u4E2A\u5143\u7D20\u90FD\u4E0D\u76F8\u540C</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui_\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui_\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[addTitle]</code></td>
<td>\u6DFB\u52A0\u6309\u94AE\u6587\u672C</td>
<td><code>string</code></td>
<td><code>\u6DFB\u52A0</code></td>
</tr>
<tr>
<td><code>[addType]</code></td>
<td>\u6DFB\u52A0\u6309\u94AE\u7C7B\u578B\uFF0C\u7B49\u540C <code>nzType</code></td>
<td><code>string</code></td>
<td><code>dashed</code></td>
</tr>
<tr>
<td><code>[removable]</code></td>
<td>\u662F\u5426\u5305\u542B\u79FB\u9664\u6309\u94AE</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[removeTitle]</code></td>
<td>\u79FB\u9664\u6309\u94AE\u6587\u672C</td>
<td><code>string</code></td>
<td><code>\u79FB\u9664</code></td>
</tr>
<tr>
<td><code>[required]</code></td>
<td>\u5F53\u524D\u9879\u662F\u5426\u4E3A\u5FC5\u586B\uFF0C\u4EC5\u5F71\u54CD\u6837\u5F0F</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[$items]</code></td>
<td>\u6570\u7EC4\u5143\u7D20\u7C7B\u578BUI\u63CF\u8FF0</td>
<td><code>SFUISchema</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(add)</code></td>
<td>\u6DFB\u52A0\u56DE\u8C03\uFF0C<code>property</code> \u8868\u793A\u6DFB\u52A0\u540E\u7684\u8868\u5355\u5C5E\u6027</td>
<td><code>(property: FormProperty) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(remove)</code></td>
<td>\u79FB\u9664\u56DE\u8C03</td>
<td><code>(index: number) =&gt; void</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:"\u5173\u4E8E\u5E03\u5C40",title:"\u5173\u4E8E\u5E03\u5C40"},{id:"api",title:"API",children:[{id:"schema_\u5C5E\u6027",title:"schema \u5C5E\u6027"},{id:"ui_\u5C5E\u6027",title:"ui \u5C5E\u6027"}]}],raw:"---\ntitle: array\nsubtitle: \u6570\u7EC4\ntype: Widgets\norder: 2\n---\n\n\u521B\u5EFA\u5BF9\u8C61\u6570\u7EC4\uFF0C\u53EA\u5BF9 `schema.type=\"array\"` \u65F6\u6709\u6548\u3002\n\n## \u5173\u4E8E\u5E03\u5C40\n\n\u6570\u7EC4\u7684\u5E03\u5C40\u5206\u4E3A\u6570\u7EC4\u672C\u8EAB\u4EE5\u53CA\u6570\u7EC4\u5143\u7D20\u5E03\u5C40\uFF0C`arraySpan` \u51B3\u5B9A\u6BCF\u4E2A\u6570\u7EC4\u5143\u7D20\u5360\u6805\u683C\u6570\u503C\u3002\n\nSchema \u5185\u5D4C UI \u98CE\u683C\uFF1A\n\n```ts\nconst schema: SFSchema = {\n  properties: {\n    list: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          a: { type: 'string' },\n          b: { type: 'number', ui: { spanLabel: 10 } }\n        }\n      },\n      ui: { spanLabel: 5, grid: { arraySpan: 12 } }\n    }\n  }\n};\n```\n\n**\u6CE8\u610F\uFF1A** `items` \u4E0B\u6240\u6709\u5C5E\u6027\u90FD\u7EE7\u627F\u4E8E `list.ui`\uFF0C\u6700\u7EC8 `items.a` \u4E3A `5` \u4E2A\u5355\u4F4D\u3001`items.b` \u4E3A `10` \u4E2A\u5355\u4F4D\u3002\n\nSchema \u4E0E UI \u5206\u5F00\u98CE\u683C\uFF0C\u5047\u5982\u4E0A\u8FF0 Schema \u8F6C\u5316\u6210 UI \u5199\u6CD5\uFF1A\n\n```ts\nconst ui = {\n  $list: {\n    $items: {\n      $b: { spanLabel: 10 }\n    },\n    spanLabel: 5,\n    grid: { arraySpan: 12 }\n  }\n};\n```\n\n## API\n\n### schema \u5C5E\u6027\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[items]` | \u6570\u7EC4\u5143\u7D20\u7C7B\u578B\u63CF\u8FF0 | `SFSchema` | - |\n| `[minItems]` | \u7EA6\u675F\u6570\u7EC4\u6700\u5C0F\u7684\u5143\u7D20\u4E2A\u6570 | `number` | - |\n| `[maxItems]` | \u7EA6\u675F\u6570\u7EC4\u6700\u5927\u7684\u5143\u7D20\u4E2A\u6570 | `number` | - |\n| `[uniqueItems]` | \u7EA6\u675F\u6570\u7EC4\u6BCF\u4E2A\u5143\u7D20\u90FD\u4E0D\u76F8\u540C | `boolean` | - |\n\n### ui \u5C5E\u6027\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[addTitle]` | \u6DFB\u52A0\u6309\u94AE\u6587\u672C | `string` | `\u6DFB\u52A0` |\n| `[addType]` | \u6DFB\u52A0\u6309\u94AE\u7C7B\u578B\uFF0C\u7B49\u540C `nzType` | `string` | `dashed` |\n| `[removable]` | \u662F\u5426\u5305\u542B\u79FB\u9664\u6309\u94AE | `boolean` | `true` |\n| `[removeTitle]` | \u79FB\u9664\u6309\u94AE\u6587\u672C | `string` | `\u79FB\u9664` |\n| `[required]` | \u5F53\u524D\u9879\u662F\u5426\u4E3A\u5FC5\u586B\uFF0C\u4EC5\u5F71\u54CD\u6837\u5F0F | `boolean` | - |\n| `[$items]` | \u6570\u7EC4\u5143\u7D20\u7C7B\u578BUI\u63CF\u8FF0 | `SFUISchema` | - |\n| `(add)` | \u6DFB\u52A0\u56DE\u8C03\uFF0C`property` \u8868\u793A\u6DFB\u52A0\u540E\u7684\u8868\u5355\u5C5E\u6027 | `(property: FormProperty) => void` | - |\n| `(remove)` | \u79FB\u9664\u56DE\u8C03 | `(index: number) => void` | - |"}}};codes=[{id:"form-array-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, inject } from '@angular/core';

import { DelonFormModule, SFArrayWidgetSchema, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-array-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)" /> \`,
  imports: [DelonFormModule]
})
export class FormArraySimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      product: {
        type: 'array',
        title: '\u4EA7\u54C1\u6E05\u5355',
        maxItems: 4,
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              title: '\u540D\u79F0'
            },
            price: {
              type: 'number',
              title: '\u5355\u4EF7',
              minimum: 1
            }
          },
          required: ['name', 'price']
        },
        ui: { grid: { arraySpan: 12 } } as SFArrayWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/form/src/widgets/array/demo/simple.md"},{id:"form-array-irregular",name:"irregular",title:{"zh-CN":"\u4E0D\u89C4\u5219\u5E03\u5C40","en-US":"Irregular Layout"},code:`import { Component, inject } from '@angular/core';

import { DelonFormModule, SFArrayWidgetSchema, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-array-irregular',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)" /> \`,
  imports: [DelonFormModule]
})
export class FormArrayIrregular {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      title: { type: 'string' },
      market: { type: 'number' },
      price: { type: 'number' },
      skus: {
        type: 'array',
        title: 'Skus',
        maxItems: 4,
        default: [{}],
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              title: '\u540D\u79F0'
            },
            price: {
              type: 'number',
              title: '\u5355\u4EF7',
              minimum: 1
            },
            stock: {
              type: 'number',
              minimum: 1
            },
            desc: {
              type: 'string',
              ui: {
                grid: { span: 24 } // \u5355\u72EC\u8BBE\u7F6Edesc\u5143\u7D20\u5728\u5F53\u524D\u6570\u7EC4\u8868\u5355\u6240\u5360\u683C\u6570\uFF0C24\u8868\u793A\u6574\u884C
              }
            }
          },
          required: ['name', 'price', 'stock'],
          ui: {
            grid: { span: 12 } // \u9488\u5BF9\u6570\u7EC4\u5185\u90E8\u8868\u5355\u7EDF\u4E00\u8BBE\u7F6E\uFF0C12\u8868\u793A\u4E00\u884C\u4E24\u4E2A
          }
        },
        ui: {
          grid: {
            span: 24, // \u5355\u72EC\u8BBE\u7F6ESku\u5143\u7D20\u5728\u6574\u4E2A\u8868\u5355\u6240\u5360\u683C\u6570\uFF0C24\u8868\u793A\u6574\u884C
            arraySpan: 12 // \u8BBE\u7F6E\u6570\u7EC4\u6BCF\u4E2A\u7D22\u5F15\u6240\u5360\u683C\u6570\uFF0C12\u8868\u793A\u4E00\u884C\u4E24\u4E2A
          }
        } as SFArrayWidgetSchema
      },
      desc: {
        type: 'string',
        ui: { grid: { span: 24 } }
      }
    },
    required: ['title', 'market', 'price'],
    ui: {
      spanLabelFixed: 100,
      grid: { span: 8 }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:1,type:"demo",summary:{"en-US":`<p>Flexible use of <code>ui</code> for complex and irregular layouts.</p>
`,"zh-CN":`<p>\u7075\u6D3B\u4F7F\u7528 <code>ui</code> \u6765\u590D\u6742\u4E0D\u89C4\u5219\u5E03\u5C40\u3002</p>
`},summary_raw:{"en-US":"Flexible use of `ui` for complex and irregular layouts.\n","zh-CN":"\u7075\u6D3B\u4F7F\u7528 `ui` \u6765\u590D\u6742\u4E0D\u89C4\u5219\u5E03\u5C40\u3002\n"},path:"packages/form/src/widgets/array/demo/irregular.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-array"]],hostAttrs:[1,"d-block"],decls:7,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-array-simple"),i(),a(5,"code-box",3),m(6,"form-array-irregular"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id),c(2),d("item",t.codes[1]),v("id",t.codes[1].id))},dependencies:[S,we,Fe,F,w,C],encapsulation:2})};var ke=class o{msg=u(y);schema={properties:{status:{type:"boolean",title:"\u662F\u5426\u542F\u7528"},enabled:{type:"boolean",title:"\u662F\u5426\u542F\u7528",ui:{checkedChildren:"\u5F00",unCheckedChildren:"\u5173"}}}};submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-boolean-simple"]],decls:1,vars:1,consts:[[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)},dependencies:[g,h],encapsulation:2})};var De=class o{item={name:"boolean",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"boolean",subtitle:"Switch",order:4,description:"Switching Selector.",group:"Widgets",path:"packages/form/src/widgets/boolean/index.en-US.md",url:"/form/boolean/en"},text:`<p>Switching Selector.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[readOnly]</code></td>
<td>Whether to disable the state</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[size]</code></td>
<td>Size of the <code>nz-switch</code></td>
<td><code>default,small</code></td>
<td><code>default</code></td>
</tr>
<tr>
<td><code>[checkedChildren]</code></td>
<td>Content to be shown when the state is checked</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[unCheckedChildren]</code></td>
<td>Content to be shown when the state is unchecked</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[loading]</code></td>
<td>Loading state of switch</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
</tbody></table>
`,toc:[{id:"api",title:"API",children:[{id:"schema",title:"schema"},{id:"ui",title:"ui"}]}],raw:"---\ntitle: boolean\nsubtitle: Switch\ntype: Widgets\norder: 4\n---\n\nSwitching Selector.\n\n## API\n\n### schema\n\n| Property     | Description                  | Type      | Default |\n| ------------ | ---------------------------- | --------- | ------- |\n| `[readOnly]` | Whether to disable the state | `boolean` | -       |\n\n### ui\n\n| Property              | Description                                     | Type            | Default   |\n| --------------------- | ----------------------------------------------- | --------------- | --------- |\n| `[size]`              | Size of the `nz-switch`                         | `default,small` | `default` |\n| `[checkedChildren]`   | Content to be shown when the state is checked   | `string`        | -         |\n| `[unCheckedChildren]` | Content to be shown when the state is unchecked | `string`        | -         |\n| `[loading]` | Loading state of switch | `boolean` | `false` |"},"zh-CN":{meta:{title:"boolean",subtitle:"\u5F00\u5173",order:4,description:"\u5F00\u5173\u9009\u62E9\u5668",group:"Widgets",path:"packages/form/src/widgets/boolean/index.zh-CN.md",url:"/form/boolean/zh"},text:`<p>\u5F00\u5173\u9009\u62E9\u5668</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema_\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema_\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[readOnly]</code></td>
<td>\u7981\u7528\u72B6\u6001</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui_\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui_\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[size]</code></td>
<td>\u5927\u5C0F\uFF0C\u7B49\u540C <code>nzSize</code></td>
<td><code>default,small</code></td>
<td><code>default</code></td>
</tr>
<tr>
<td><code>[checkedChildren]</code></td>
<td>\u9009\u4E2D\u65F6\u7684\u5185\u5BB9</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[unCheckedChildren]</code></td>
<td>\u975E\u9009\u4E2D\u65F6\u7684\u5185\u5BB9</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[loading]</code></td>
<td>\u52A0\u8F7D\u4E2D\u7684\u5F00\u5173</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
</tbody></table>
`,toc:[{id:"api",title:"API",children:[{id:"schema_\u5C5E\u6027",title:"schema \u5C5E\u6027"},{id:"ui_\u5C5E\u6027",title:"ui \u5C5E\u6027"}]}],raw:"---\ntitle: boolean\nsubtitle: \u5F00\u5173\ntype: Widgets\norder: 4\n---\n\n\u5F00\u5173\u9009\u62E9\u5668\n\n## API\n\n### schema \u5C5E\u6027\n\n| \u53C2\u6570         | \u8BF4\u660E     | \u7C7B\u578B      | \u9ED8\u8BA4\u503C |\n| ------------ | -------- | --------- | ------ |\n| `[readOnly]` | \u7981\u7528\u72B6\u6001 | `boolean` | -      |\n\n### ui \u5C5E\u6027\n\n| \u53C2\u6570                  | \u8BF4\u660E                | \u7C7B\u578B            | \u9ED8\u8BA4\u503C    |\n| --------------------- | ------------------- | --------------- | --------- |\n| `[size]`              | \u5927\u5C0F\uFF0C\u7B49\u540C `nzSize` | `default,small` | `default` |\n| `[checkedChildren]`   | \u9009\u4E2D\u65F6\u7684\u5185\u5BB9        | `string`        | -         |\n| `[unCheckedChildren]` | \u975E\u9009\u4E2D\u65F6\u7684\u5185\u5BB9      | `string`        | -         |\n| `[loading]` | \u52A0\u8F7D\u4E2D\u7684\u5F00\u5173 | `boolean` | `false` |"}}};codes=[{id:"form-boolean-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-boolean-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)" /> \`,
  imports: [DelonFormModule]
})
export class FormBooleanSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      status: {
        type: 'boolean',
        title: '\u662F\u5426\u542F\u7528'
      },
      // \u6307\u5B9A\u5185\u5BB9\u6587\u672C
      enabled: {
        type: 'boolean',
        title: '\u662F\u5426\u542F\u7528',
        ui: {
          checkedChildren: '\u5F00',
          unCheckedChildren: '\u5173'
        }
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/form/src/widgets/boolean/demo/simple.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-boolean"]],hostAttrs:[1,"d-block"],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-boolean-simple"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id))},dependencies:[S,ke,F,w,C],encapsulation:2})};var ze=class o{msg=u(y);schema={properties:{single:{type:"boolean",title:"\u540C\u610F\u672C\u534F\u8BAE",description:"\u300A\u7528\u6237\u534F\u8BAE\u300B",ui:{widget:"checkbox"},default:!0},mulit:{type:"string",title:"Mulit",enum:["Apple","Pear","Orange"],ui:{widget:"checkbox",span:8,checkAll:!0},default:["Apple"]},async:{type:"string",title:"Async",ui:{widget:"checkbox",asyncData:()=>z([{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}]).pipe(x(200))},default:["Apple"]}}};submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-checkbox-simple"]],decls:1,vars:1,consts:[[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)},dependencies:[g,h],encapsulation:2})};var xe=class o{item={name:"checkbox",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"checkbox",subtitle:"Checkbox",description:"Checkbox.",group:"Widgets",order:0,path:"packages/form/src/widgets/checkbox/index.en-US.md",url:"/form/checkbox/en"},text:`<p>Checkbox.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><p>Property        | Description                                 | Type                 | Default
----------------|---------------------------------------------|----------------------|--------
<code>[readOnly]</code>    | Whether to disable the state                | <code>boolean</code>            | -
<code>[enum]</code>        | Render checkbox group when the value exists | <code>SFSchemaEnumType[]</code> | -
<code>[title]</code>       | Text of the single checkbox                 | <code>string</code>             | -
<code>[description]</code> | Help text of the single checkbox            | <code>string</code>             | -</p>
<h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><p>Property | Description | Type | Default
-------- | ----------- | ---- | -------
<code>[asyncData]</code> | Async data source, render checkbox group when the value exists  | <code>() =&gt; Observable&lt;SFSchemaEnumType[]&gt;</code> | -
<code>[span]</code> | Raster number of cells to occupy | <code>number</code> | -
<code>[styleType]</code> | Style of the <code>nz-checkbox</code> | <code>default, button</code> | <code>default</code>
<code>[checkAll]</code> | Whether to select all  | <code>boolean</code> | -
<code>[checkAllText]</code> | Select all button text  | <code>string</code> | <code>\u5168\u9009</code>
<code>[change]</code> | Changed event, Parameter: single checkbox is <code>boolean</code>, otherwise <code>SFSchemaEnum[]</code> | <code>(res: boolean | SFSchemaEnum[]) =&gt; void</code> | -</p>
`,toc:[{id:"api",title:"API",children:[{id:"schema",title:"schema"},{id:"ui",title:"ui"}]}],raw:"---\ntitle: checkbox\nsubtitle: Checkbox\ntype: Widgets\n---\n\nCheckbox.\n\n## API\n\n### schema\n\nProperty        | Description                                 | Type                 | Default\n----------------|---------------------------------------------|----------------------|--------\n`[readOnly]`    | Whether to disable the state                | `boolean`            | -\n`[enum]`        | Render checkbox group when the value exists | `SFSchemaEnumType[]` | -\n`[title]`       | Text of the single checkbox                 | `string`             | -\n`[description]` | Help text of the single checkbox            | `string`             | -\n\n### ui\n\nProperty | Description | Type | Default\n-------- | ----------- | ---- | -------\n`[asyncData]` | Async data source, render checkbox group when the value exists  | `() => Observable<SFSchemaEnumType[]>` | -\n`[span]` | Raster number of cells to occupy | `number` | -\n`[styleType]` | Style of the `nz-checkbox` | `default, button` | `default`\n`[checkAll]` | Whether to select all  | `boolean` | -\n`[checkAllText]` | Select all button text  | `string` | `\u5168\u9009`\n`[change]` | Changed event, Parameter: single checkbox is `boolean`, otherwise `SFSchemaEnum[]` | `(res: boolean | SFSchemaEnum[]) => void` | -"},"zh-CN":{meta:{title:"checkbox",subtitle:"\u591A\u9009\u6846",description:"\u4E00\u7EC4\u53EF\u9009\u9879\u4E2D\u8FDB\u884C\u591A\u9879\u9009\u62E9\u65F6",group:"Widgets",order:0,path:"packages/form/src/widgets/checkbox/index.zh-CN.md",url:"/form/checkbox/zh"},text:`<p>\u4E00\u7EC4\u53EF\u9009\u9879\u4E2D\u8FDB\u884C\u591A\u9879\u9009\u62E9\u65F6</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema_\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema_\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><p>\u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C
----|------|-----|------
<code>[enum]</code> | \u6570\u636E\u6E90\uFF0C\u5F53\u6570\u636E\u6E90\u5B58\u5728\u4E8E\u8868\u793A\u4E00\u7EC4\u591A\u9009\u6846 | <code>SFSchemaEnumType[]</code> | -
<code>[readOnly]</code> | \u7981\u7528\u72B6\u6001  | <code>boolean</code> | -
<code>[title]</code> | \u65E0 <code>enum</code> \u65F6\u8868\u793A\u591A\u9009\u6846\u6587\u672C\u5185\u5BB9  | <code>string</code> | -
<code>[description]</code> | \u65E0 <code>enum</code> \u65F6\u8868\u793A\u591A\u9009\u6846\u540E\u5E2E\u52A9\u4FE1\u606F  | <code>string</code> | -</p>
<h3 id="ui_\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui_\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><p>\u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C
----|------|-----|------
<code>[asyncData]</code> | \u5F02\u6B65\u6570\u636E\u6E90  | <code>() =&gt; Observable&lt;SFSchemaEnumType[]&gt;</code> | -
<code>[span]</code> | \u6307\u5B9A\u6BCF\u4E2A\u9009\u6846\u5355\u5143\u683C\u6570\u91CF | <code>number</code> | -
<code>[styleType]</code> | radio\u7684\u6837\u5F0F  | <code>default, button</code> | <code>default</code>
<code>[checkAll]</code> | \u662F\u5426\u9700\u8981\u5168\u9009  | <code>boolean</code> | -
<code>[checkAllText]</code> | \u5168\u9009\u6309\u94AE\u6587\u672C  | <code>string</code> | <code>\u5168\u9009</code>
<code>[change]</code> | \u503C\u53D8\u66F4\u4E8B\u4EF6\uFF0C\u53C2\u6570\uFF1A\u5355\u4E2A\u591A\u9009\u6846\u4E3A <code>boolean</code>\uFF0C\u5426\u5219\u4E3A <code>SFSchemaEnum[]</code> | <code>(res: boolean | SFSchemaEnum[]) =&gt; void</code> | -</p>
`,toc:[{id:"api",title:"API",children:[{id:"schema_\u5C5E\u6027",title:"schema \u5C5E\u6027"},{id:"ui_\u5C5E\u6027",title:"ui \u5C5E\u6027"}]}],raw:"---\ntitle: checkbox\nsubtitle: \u591A\u9009\u6846\ntype: Widgets\n---\n\n\u4E00\u7EC4\u53EF\u9009\u9879\u4E2D\u8FDB\u884C\u591A\u9879\u9009\u62E9\u65F6\n\n## API\n\n### schema \u5C5E\u6027\n\n\u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C\n----|------|-----|------\n`[enum]` | \u6570\u636E\u6E90\uFF0C\u5F53\u6570\u636E\u6E90\u5B58\u5728\u4E8E\u8868\u793A\u4E00\u7EC4\u591A\u9009\u6846 | `SFSchemaEnumType[]` | -\n`[readOnly]` | \u7981\u7528\u72B6\u6001  | `boolean` | -\n`[title]` | \u65E0 `enum` \u65F6\u8868\u793A\u591A\u9009\u6846\u6587\u672C\u5185\u5BB9  | `string` | -\n`[description]` | \u65E0 `enum` \u65F6\u8868\u793A\u591A\u9009\u6846\u540E\u5E2E\u52A9\u4FE1\u606F  | `string` | -\n\n### ui \u5C5E\u6027\n\n\u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C\n----|------|-----|------\n`[asyncData]` | \u5F02\u6B65\u6570\u636E\u6E90  | `() => Observable<SFSchemaEnumType[]>` | -\n`[span]` | \u6307\u5B9A\u6BCF\u4E2A\u9009\u6846\u5355\u5143\u683C\u6570\u91CF | `number` | -\n`[styleType]` | radio\u7684\u6837\u5F0F  | `default, button` | `default`\n`[checkAll]` | \u662F\u5426\u9700\u8981\u5168\u9009  | `boolean` | -\n`[checkAllText]` | \u5168\u9009\u6309\u94AE\u6587\u672C  | `string` | `\u5168\u9009`\n`[change]` | \u503C\u53D8\u66F4\u4E8B\u4EF6\uFF0C\u53C2\u6570\uFF1A\u5355\u4E2A\u591A\u9009\u6846\u4E3A `boolean`\uFF0C\u5426\u5219\u4E3A `SFSchemaEnum[]` | `(res: boolean | SFSchemaEnum[]) => void` | -"}}};codes=[{id:"form-checkbox-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, inject } from '@angular/core';
import { of, delay } from 'rxjs';

import { DelonFormModule, SFCheckboxWidgetSchema, SFSchema } from '@delon/form';
import type { SFCascaderWidgetSchema } from '@delon/form/widgets/cascader';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-checkbox-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)" /> \`,
  imports: [DelonFormModule]
})
export class FormCheckboxSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      // \u5355\u4E2A\u591A\u9009\u6846
      single: {
        type: 'boolean',
        title: '\u540C\u610F\u672C\u534F\u8BAE',
        description: '\u300A\u7528\u6237\u534F\u8BAE\u300B',
        ui: {
          widget: 'checkbox'
        } as SFCascaderWidgetSchema,
        default: true
      },
      // \u591A\u9009\u6846\u7EC4
      mulit: {
        type: 'string',
        title: 'Mulit',
        enum: ['Apple', 'Pear', 'Orange'],
        ui: {
          widget: 'checkbox',
          span: 8, // \u6307\u5B9A\u6BCF\u4E00\u9879 8 \u4E2A\u5355\u5143\u7684\u5E03\u5C40
          checkAll: true
        } as SFCheckboxWidgetSchema,
        default: ['Apple']
      },
      // \u5F02\u6B65\u6570\u636E
      async: {
        type: 'string',
        title: 'Async',
        ui: {
          widget: 'checkbox',
          asyncData: () =>
            of([
              { label: 'Apple', value: 'Apple' },
              { label: 'Pear', value: 'Pear' },
              { label: 'Orange', value: 'Orange' }
            ]).pipe(delay(200))
        } as SFCheckboxWidgetSchema,
        default: ['Apple']
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/form/src/widgets/checkbox/demo/simple.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-checkbox"]],hostAttrs:[1,"d-block"],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-checkbox-simple"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id))},dependencies:[S,ze,F,w,C],encapsulation:2})};var ln=["sf"];function mn(o,n){if(o&1){let e=W();a(0,"div",4)(1,"div",5)(2,"input",6),l("ngModelChange",function(s){let p=A(e).$implicit;return O(p.setValue(s))}),i()(),a(3,"div",5)(4,"button",7),l("click",function(){A(e);let s=E();return O(s.updateQr())}),D(5),i()()()}if(o&2){let e=n.$implicit,t=n.ui;c(2),d("disabled",e.disabled)("nzSize",e.size)("ngModel",e.value),v("id",e.id)("disabled",e.disabled),c(3),jt(t.btnText)}}function pn(o,n){if(o&1&&m(0,"nz-qrcode",8),o&2){let e=n.$implicit;d("nzValue",e.value)}}var Ne=class o{msg=u(y);sf;schema={properties:{formName:{type:"string",title:"Custom Title",ui:{widget:"custom",btnText:"Update Qr"},default:"test"},qr:{type:"string",ui:{widget:"custom"},default:"https://ng-alain.com"}}};updateQr(){let n=this.sf.getProperty("/formName")?.value;this.sf.getProperty("/qr")?.setValue(n,!0),this.msg.info("Suc")}submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-custom-simple"]],viewQuery:function(e,t){if(e&1&&_(ln,5),e&2){let s;N(s=T())&&(t.sf=s.first)}},decls:4,vars:1,consts:[["sf",""],[3,"formSubmit","schema"],["sf-template","formName"],["sf-template","qr"],["nz-row",""],["nz-col",""],["nz-input","",3,"ngModelChange","disabled","nzSize","ngModel"],["nz-button","","type","button","nzType","link",3,"click"],[3,"nzValue"]],template:function(e,t){e&1&&(a(0,"sf",1,0),l("formSubmit",function(p){return t.submit(p)}),R(2,mn,6,6,"ng-template",2)(3,pn,1,1,"ng-template",3),i()),e&2&&d("schema",t.schema)},dependencies:[g,h,tn,Kt,$t,Yt,Qt,en,F,w,X,Z,q,I,M,on,nn],encapsulation:2})};var Te=class o{item={name:"custom",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"custom",subtitle:"Custom",description:"Custom the current dynamic form widget. For more complexity, please refer to customize widget.Make sure to specify sf-template a valid path value, for...",group:"Widgets",order:0,path:"packages/form/src/widgets/custom/index.en-US.md",url:"/form/custom/en"},text:`<p>Custom the current dynamic form widget. For more complexity, please refer to <a href="/form/customize">customize</a> widget.</p>
<h2 id="usage"><a class="lake-link"><i data-anchor="usage"></i></a>Usage</h2><p>Make sure to specify <strong>sf-template</strong> a valid path value, for example:</p>
<pre><code class="language-html">&lt;sf&gt;
  &lt;ng-template sf-template=&quot;formFieldName&quot; let-i let-ui=&quot;ui&quot; let-schema=&quot;schema&quot;&gt;
  &lt;/ng-tempalte&gt;
&lt;/sf&gt;
</code></pre>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
<th>Type</th>
</tr>
</thead>
<tbody><tr>
<td><code>[$implicit]</code></td>
<td>Current widget component instance</td>
<td><code>ControlWidget</code></td>
</tr>
<tr>
<td><code>[schema]</code></td>
<td>Schema data of the widget</td>
<td><code>SFSchema</code></td>
</tr>
<tr>
<td><code>[ui]</code></td>
<td>UI data of the widget</td>
<td><code>SFUISchemaItem</code></td>
</tr>
</tbody></table>
<p>The widget component instance include <code>formProperty</code> property, whose <code>value</code> attribute is the only way to communicate with the widget.</p>
<p>The widget component instance contains some shortcut properties and methods, please read for more details <a href="https://github.com/ng-alain/delon/blob/master/packages/form/src/widget.ts" target="_blank" rel="noopener">ControlWidget</a>.</p>
`,toc:[{id:"usage",title:"Usage"},{id:"api",title:"API"}],raw:`---
title: custom
subtitle: Custom
type: Widgets
---

Custom the current dynamic form widget. For more complexity, please refer to [customize](/form/customize) widget.

## Usage

Make sure to specify **sf-template** a valid path value, for example:

\`\`\`html
<sf>
  <ng-template sf-template="formFieldName" let-i let-ui="ui" let-schema="schema">
  </ng-tempalte>
</sf>
\`\`\`

## API

| Name          | Description                       | Type             |
| ------------- | --------------------------------- | ---------------- |
| \`[$implicit]\` | Current widget component instance | \`ControlWidget\`  |
| \`[schema]\`    | Schema data of the widget         | \`SFSchema\`       |
| \`[ui]\`        | UI data of the widget             | \`SFUISchemaItem\` |

The widget component instance include \`formProperty\` property, whose \`value\` attribute is the only way to communicate with the widget.

The widget component instance contains some shortcut properties and methods, please read for more details [ControlWidget](https://github.com/ng-alain/delon/blob/master/packages/form/src/widget.ts).`},"zh-CN":{meta:{title:"custom",subtitle:"\u81EA\u5B9A\u4E49",description:"\u5B9A\u5236\u5F53\u524D\u52A8\u6001\u8868\u5355\u5C0F\u90E8\u4EF6\u3002\u66F4\u590D\u6742\u8BF7\u53C2\u8003\u5B9A\u5236\u5C0F\u90E8\u4EF6\u3002\u52A1\u5FC5\u6307\u5B9A sf-template \u662F\u6709\u6548\u8DEF\u5F84\u503C\uFF0C\u4F8B\u5982\uFF1A\u4E0A\u4E0B\u6587\u5305\u62EC formProperty \u5C5E\u6027\uFF0C\u5B83\u662F\u4F20\u9012\u6570\u636E\u7684\u552F\u4E00\u4E2D\u95F4\u5C42\uFF0C\u56E0\u6B64\u7EF4\u62A4 formProperty.value \u662F\u552F\u4E00\u4E0E\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u901A\u4FE1\u7684\u5A92\u4ECB\u3002\u4E0A\u4E0B\u6587\u8FD8\u5305\u542B\u4E86\u4E00\u4E9B\u5FEB\u6377\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u6709\u5173\u66F4\u591A\u7EC6\u8282\u8BF7\u9605...",group:"Widgets",order:0,path:"packages/form/src/widgets/custom/index.zh-CN.md",url:"/form/custom/zh"},text:`<p>\u5B9A\u5236\u5F53\u524D\u52A8\u6001\u8868\u5355\u5C0F\u90E8\u4EF6\u3002\u66F4\u590D\u6742\u8BF7\u53C2\u8003<a href="/form/customize">\u5B9A\u5236\u5C0F\u90E8\u4EF6</a>\u3002</p>
<h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p>\u52A1\u5FC5\u6307\u5B9A <strong>sf-template</strong> \u662F\u6709\u6548\u8DEF\u5F84\u503C\uFF0C\u4F8B\u5982\uFF1A</p>
<pre><code class="language-html">&lt;sf&gt;
  &lt;ng-template sf-template=&quot;formFieldName&quot; let-i let-ui=&quot;ui&quot; let-schema=&quot;schema&quot;&gt;
  &lt;/ng-template&gt;
&lt;/sf&gt;
</code></pre>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
</tr>
</thead>
<tbody><tr>
<td><code>[$implicit]</code></td>
<td>\u5F53\u524D\u4E0A\u4E0B\u6587</td>
<td><code>ControlWidget</code></td>
</tr>
<tr>
<td><code>[schema]</code></td>
<td>\u5F53\u524D\u8282\u70B9 Schema</td>
<td><code>SFSchema</code></td>
</tr>
<tr>
<td><code>[ui]</code></td>
<td>\u5F53\u524D\u8282\u70B9 UI</td>
<td><code>SFUISchemaItem</code></td>
</tr>
</tbody></table>
<p>\u4E0A\u4E0B\u6587\u5305\u62EC <code>formProperty</code> \u5C5E\u6027\uFF0C\u5B83\u662F\u4F20\u9012\u6570\u636E\u7684\u552F\u4E00\u4E2D\u95F4\u5C42\uFF0C\u56E0\u6B64\u7EF4\u62A4 <code>formProperty.value</code> \u662F\u552F\u4E00\u4E0E\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u901A\u4FE1\u7684\u5A92\u4ECB\u3002</p>
<p>\u4E0A\u4E0B\u6587\u8FD8\u5305\u542B\u4E86\u4E00\u4E9B\u5FEB\u6377\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u6709\u5173\u66F4\u591A\u7EC6\u8282\u8BF7\u9605\u8BFB <a href="https://github.com/ng-alain/delon/blob/master/packages/form/src/widget.ts" target="_blank" rel="noopener">Widget</a> \u7684\u5B9A\u4E49\u3002</p>
`,toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528"},{id:"api",title:"API"}],raw:`---
title: custom
subtitle: \u81EA\u5B9A\u4E49
type: Widgets
---

\u5B9A\u5236\u5F53\u524D\u52A8\u6001\u8868\u5355\u5C0F\u90E8\u4EF6\u3002\u66F4\u590D\u6742\u8BF7\u53C2\u8003[\u5B9A\u5236\u5C0F\u90E8\u4EF6](/form/customize)\u3002

## \u5982\u4F55\u4F7F\u7528

\u52A1\u5FC5\u6307\u5B9A **sf-template** \u662F\u6709\u6548\u8DEF\u5F84\u503C\uFF0C\u4F8B\u5982\uFF1A

\`\`\`html
<sf>
  <ng-template sf-template="formFieldName" let-i let-ui="ui" let-schema="schema">
  </ng-template>
</sf>
\`\`\`

## API

| \u53C2\u6570          | \u8BF4\u660E            | \u7C7B\u578B             |
| ------------- | --------------- | ---------------- |
| \`[$implicit]\` | \u5F53\u524D\u4E0A\u4E0B\u6587      | \`ControlWidget\`  |
| \`[schema]\`    | \u5F53\u524D\u8282\u70B9 Schema | \`SFSchema\`       |
| \`[ui]\`        | \u5F53\u524D\u8282\u70B9 UI     | \`SFUISchemaItem\` |

\u4E0A\u4E0B\u6587\u5305\u62EC \`formProperty\` \u5C5E\u6027\uFF0C\u5B83\u662F\u4F20\u9012\u6570\u636E\u7684\u552F\u4E00\u4E2D\u95F4\u5C42\uFF0C\u56E0\u6B64\u7EF4\u62A4 \`formProperty.value\` \u662F\u552F\u4E00\u4E0E\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u901A\u4FE1\u7684\u5A92\u4ECB\u3002

\u4E0A\u4E0B\u6587\u8FD8\u5305\u542B\u4E86\u4E00\u4E9B\u5FEB\u6377\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u6709\u5173\u66F4\u591A\u7EC6\u8282\u8BF7\u9605\u8BFB [Widget](https://github.com/ng-alain/delon/blob/master/packages/form/src/widget.ts) \u7684\u5B9A\u4E49\u3002`}}};codes=[{id:"form-custom-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DelonFormModule, SFComponent, SFSchema } from '@delon/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzQRCodeModule } from 'ng-zorro-antd/qr-code';

@Component({
  selector: 'form-custom-simple',
  template: \`
    <sf #sf [schema]="schema" (formSubmit)="submit($event)">
      <ng-template sf-template="formName" let-i let-ui="ui" let-schema="schema">
        <div nz-row>
          <div nz-col>
            <input
              nz-input
              [attr.id]="i.id"
              [disabled]="i.disabled"
              [attr.disabled]="i.disabled"
              [nzSize]="i.size"
              [ngModel]="i.value"
              (ngModelChange)="i.setValue($event)"
            />
          </div>
          <div nz-col>
            <button nz-button type="button" nzType="link" (click)="updateQr()">{{ ui.btnText }}</button>
          </div>
        </div>
      </ng-template>
      <ng-template sf-template="qr" let-i let-ui="ui" let-schema="schema">
        <nz-qrcode [nzValue]="i.value" />
      </ng-template>
    </sf>
  \`,
  imports: [DelonFormModule, FormsModule, NzGridModule, NzInputModule, NzButtonModule, NzQRCodeModule]
})
export class FormCustomSimple {
  private readonly msg = inject(NzMessageService);
  @ViewChild('sf') readonly sf!: SFComponent;
  schema: SFSchema = {
    properties: {
      formName: {
        type: 'string',
        title: 'Custom Title',
        ui: {
          widget: 'custom',
          btnText: 'Update Qr'
        },
        default: 'test'
      },
      qr: {
        type: 'string',
        ui: {
          widget: 'custom'
        },
        default: 'https://ng-alain.com'
      }
    }
  };

  updateQr(): void {
    const formNameValue = this.sf.getProperty('/formName')?.value;
    const qr = this.sf.getProperty('/qr');
    qr?.setValue(formNameValue, true);
    this.msg.info(\`Suc\`);
  }

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Use the <code>sf-template</code> directive to custom complex widget in the current form.</p>
`,"zh-CN":`<p>\u4F7F\u7528 <code>sf-template</code> \u6307\u4EE4\u5728\u5F53\u524D\u8868\u5355\u81EA\u5B9A\u4E49\u590D\u6742\u90E8\u4EF6\u3002</p>
`},summary_raw:{"en-US":"Use the `sf-template` directive to custom complex widget in the current form.\n","zh-CN":"\u4F7F\u7528 `sf-template` \u6307\u4EE4\u5728\u5F53\u524D\u8868\u5355\u81EA\u5B9A\u4E49\u590D\u6742\u90E8\u4EF6\u3002\n"},path:"packages/form/src/widgets/custom/demo/simple.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-custom"]],hostAttrs:[1,"d-block"],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-custom-simple"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id))},dependencies:[S,Ne,F,w,C],encapsulation:2})};var _e=class o{msg=u(y);schema={properties:{datetime:{type:"string",format:"date-time"},date:{type:"string",format:"date"},date_number:{type:"number",ui:{widget:"date"}},year:{type:"number",ui:{widget:"date",mode:"year",format:"yyyy"}},month:{type:"string",format:"month"},week:{type:"string",format:"week"},range:{type:"string",ui:{widget:"date",mode:"range"}},start:{type:"string",ui:{widget:"date",end:"end"}},end:{type:"string",ui:{widget:"date",end:"end"}},inline:{type:"string",ui:{widget:"date",inline:!0}}}};submit(n){this.msg.success(JSON.stringify(n))}change(n){console.log("change",n)}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-date-simple"]],decls:1,vars:1,consts:[[3,"formSubmit","formChange","schema"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)})("formChange",function(p){return t.change(p)}),i()),e&2&&d("schema",t.schema)},dependencies:[g,h],encapsulation:2})};var Me=class o{msg=u(y);schema={properties:{start:{type:"string",ui:{widget:"date",end:"end",separator:"\u5230"},default:new Date},end:{type:"string",default:$(new Date,6)},startWeek:{type:"string",ui:{widget:"date",rangeMode:"week",end:"endWeek"},default:new Date},endWeek:{type:"string",default:$(new Date,6)},startMonth:{type:"string",ui:{widget:"date",rangeMode:"month",end:"endMonth"},default:new Date},endMonth:{type:"string",default:$(new Date,6)},startYear:{type:"string",ui:{widget:"date",rangeMode:"year",end:"endYear"},default:new Date},endYear:{type:"string",default:$(new Date,6)}},required:["start"]};submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-date-range"]],decls:1,vars:1,consts:[[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)},dependencies:[g,h],encapsulation:2})};var Ie=class o{item={name:"date",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"date",subtitle:"Date",description:"To select or input a date.Format is divided into two types: Data format means form data, Display format means display data (nzFormat)All Data format u...",group:"Widgets",order:0,path:"packages/form/src/widgets/date/index.en-US.md",url:"/form/date/en"},text:`<p>To select or input a date.</p>
<h2 id="notice"><a class="lake-link"><i data-anchor="notice"></i></a>Notice</h2><ul>
<li>Format is divided into two types: <strong>Data format</strong> means form data, <strong>Display format</strong> means display data (<a href="https://ng.ant.design/components/date-picker/en#api" target="_blank" rel="noopener">nzFormat</a>)</li>
<li>All <strong>Data format</strong> units, reference <a href="https://date-fns.org/v1.29.0/docs/format" target="_blank" rel="noopener">date-fns format</a> (China mirror: <a href="http://Momentjs.cn/docs/#/displaying/format/" target="_blank" rel="noopener">moment format</a>)</li>
<li>Specify <code>schema.format</code> must follow <a href="https://tools.ietf.org/html/rfc3339#section-5.6" target="_blank" rel="noopener">RFC3339</a> time format, otherwise considered as a format error, default rules:<ul>
<li><code>date-time</code> default is <code>yyyy-MM-ddTHH:mm:ssZ</code></li>
<li><code>date</code>, <code>full-date</code> default is <code>yyyy-MM-dd</code></li>
<li><code>time</code>, <code>full-time</code> default is <code>HH:mm:ss</code></li>
<li><em>Non-standard:</em> <code>week</code> default is <code>yyyy-ww</code></li>
<li><em>Non-standard:</em> <code>month</code> default is <code>yyyy-MM</code></li>
</ul>
</li>
<li>When <code>schema.format</code> is not specified, the data formatting (Allows you to reassign default values via <a href="/docs/global-config">Global Configuration</a>) is determined by the <code>schema.type</code> type:<ul>
<li><code>string</code> default is <code>yyyy-MM-dd HH:mm:ss</code></li>
<li><code>number</code> default is <code>T</code> 13-bit Unix Timestamp</li>
</ul>
</li>
</ul>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[readOnly]</code></td>
<td>Whether to disable the state</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[format]</code></td>
<td>Data format type</td>
<td><code>string</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[mode]</code></td>
<td>Render mode</td>
<td><code>date,week,month,year</code></td>
<td><code>date</code></td>
</tr>
<tr>
<td><code>[rangeMode]</code></td>
<td>Set picker mode of range picker</td>
<td><code>date,week,month,year</code></td>
<td><code>date</code></td>
</tr>
<tr>
<td><code>[size]</code></td>
<td>Size of the <code>nz-date-picker</code></td>
<td><code>default,large,small</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[placeholder]</code></td>
<td>Placeholder of date input</td>
<td><code>string, string[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[displayFormat]</code></td>
<td>Display format(<a href="https://ng.ant.design/components/date-picker/en#api" target="_blank" rel="noopener">nzFormat</a>)</td>
<td><code>string</code></td>
<td><code>yyyy-MM-dd HH:mm:ss</code></td>
</tr>
<tr>
<td><code>[end]</code></td>
<td>End <code>key</code> value for the date range</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[allowClear]</code></td>
<td>Whether to show clear button</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[className]</code></td>
<td>Picker className</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[disabledDate]</code></td>
<td>specify the date that cannot be selected</td>
<td><code>(current: Date) =&gt; boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[locale]</code></td>
<td>localization configuration</td>
<td><code>object</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[popupStyle]</code></td>
<td>to customize the style of the popup calendar</td>
<td><code>object</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[dropdownClassName]</code></td>
<td>to customize the className of the popup calendar</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[onOpenChange]</code></td>
<td>a callback emitter, can be executed whether the popup calendar is popped up or closed</td>
<td><code>(status: boolean) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[disabledTime]</code></td>
<td>to specify the time that cannot be selected</td>
<td><code>(current: Date) =&gt; &#123; nzDisabledHours, nzDisabledMinutes, nzDisabledSeconds &#125;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[renderExtraFooter]</code></td>
<td>render extra footer in panel</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[showTime]</code></td>
<td>to provide an additional time selection, the <code>object</code> type is <a href="https://ng.ant.design/components/time-picker/en#api" target="_blank" rel="noopener">TimePickerOptions</a></td>
<td><code>object,boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[showToday]</code></td>
<td>whether to show &quot;Today&quot; button</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[inputReadOnly]</code></td>
<td>Set the readonly attribute of the input tag (avoids virtual keyboard on touch devices)</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[inline]</code></td>
<td>Inline mode of the date picker</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[separator]</code></td>
<td>separator</td>
<td><code>string, TemplateRef</code></td>
<td><code>&#39;~&#39;</code></td>
</tr>
<tr>
<td><code>[showWeekNumber]</code></td>
<td>whether to show the week number on each row (Only supported by date picker. Week picker always shows week numbers)</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[onOk]</code></td>
<td>callback when click ok button</td>
<td>\`(data: Date</td>
<td>Date[]) =&gt; void\`</td>
</tr>
<tr>
<td><code>[change]</code></td>
<td>Date change callback</td>
<td>\`(data: Date</td>
<td>Date[]) =&gt; void\`</td>
</tr>
</tbody></table>
`,toc:[{id:"notice",title:"Notice"},{id:"api",title:"API",children:[{id:"schema",title:"schema"},{id:"ui",title:"ui"}]}],raw:"---\ntitle: date\nsubtitle: Date\ntype: Widgets\n---\n\nTo select or input a date.\n\n## Notice\n\n- Format is divided into two types: **Data format** means form data, **Display format** means display data ([nzFormat](https://ng.ant.design/components/date-picker/en#api))\n- All **Data format** units, reference [date-fns format](https://date-fns.org/v1.29.0/docs/format) (China mirror: [moment format](http://Momentjs.cn/docs/#/displaying/format/))\n- Specify `schema.format` must follow [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6) time format, otherwise considered as a format error, default rules:\n  - `date-time` default is `yyyy-MM-ddTHH:mm:ssZ`\n  - `date`, `full-date` default is `yyyy-MM-dd`\n  - `time`, `full-time` default is `HH:mm:ss`\n  - *Non-standard:* `week` default is `yyyy-ww`\n  - *Non-standard:* `month` default is `yyyy-MM`\n- When `schema.format` is not specified, the data formatting (Allows you to reassign default values via [Global Configuration](/docs/global-config)) is determined by the `schema.type` type:\n  - `string` default is `yyyy-MM-dd HH:mm:ss`\n  - `number` default is `T` 13-bit Unix Timestamp\n\n## API\n\n### schema\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[readOnly]` | Whether to disable the state | `boolean` | - |\n| `[format]` | Data format type | `string` | - |\n\n### ui\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[mode]` | Render mode | `date,week,month,year` | `date` |\n| `[rangeMode]` | Set picker mode of range picker | `date,week,month,year` | `date` |\n| `[size]` | Size of the `nz-date-picker` | `default,large,small` | - |\n| `[placeholder]` | Placeholder of date input | `string, string[]` | - |\n| `[displayFormat]` | Display format([nzFormat](https://ng.ant.design/components/date-picker/en#api)) | `string` | `yyyy-MM-dd HH:mm:ss` |\n| `[end]` | End `key` value for the date range | `string` | - |\n| `[allowClear]` | Whether to show clear button | `boolean` | `true` |\n| `[className]` | Picker className | `string` | - |\n| `[disabledDate]` | specify the date that cannot be selected | `(current: Date) => boolean` | - |\n| `[locale]` | localization configuration | `object` | - |\n| `[popupStyle]` | to customize the style of the popup calendar | `object` | - |\n| `[dropdownClassName]` | to customize the className of the popup calendar | `string` | - |\n| `[onOpenChange]` | a callback emitter, can be executed whether the popup calendar is popped up or closed | `(status: boolean) => void` | - |\n| `[disabledTime]` | to specify the time that cannot be selected | `(current: Date) => { nzDisabledHours, nzDisabledMinutes, nzDisabledSeconds }` | - |\n| `[renderExtraFooter]` | render extra footer in panel | `string` | - |\n| `[showTime]` | to provide an additional time selection, the `object` type is [TimePickerOptions](https://ng.ant.design/components/time-picker/en#api) | `object,boolean` | `true` |\n| `[showToday]` | whether to show \"Today\" button | `boolean` | `true` |\n| `[inputReadOnly]` | Set the readonly attribute of the input tag (avoids virtual keyboard on touch devices) | `boolean` | `false` |\n| `[inline]` | Inline mode of the date picker | `boolean` | `false` |\n| `[separator]` | separator | `string, TemplateRef` | `'~'` |\n| `[showWeekNumber]` | whether to show the week number on each row (Only supported by date picker. Week picker always shows week numbers) | `boolean` | `false` |\n| `[onOk]` | callback when click ok button | `(data: Date | Date[]) => void` | - |\n| `[change]` | Date change callback | `(data: Date | Date[]) => void` | - |"},"zh-CN":{meta:{title:"date",subtitle:"\u65E5\u671F",description:"\u8F93\u5165\u6216\u9009\u62E9\u65E5\u671F\u7684\u63A7\u4EF6\u3002\u683C\u5F0F\u5316\u5206\u4E3A\uFF1A\u6570\u636E\u683C\u5F0F\u5316\u8868\u793A\u8868\u5355\u6570\u636E\u548C\u663E\u793A\u683C\u5F0F\u5316\u663E\u793A\u6570\u636E\uFF08\u7B49\u540C nzFormat \u503C\uFF09\u6240\u6709 \u6570\u636E\u683C\u5F0F\u5316 \u5355\u4F4D\uFF0C\u53C2\u8003 date-fns format\uFF08\u56FD\u5185\u955C\u50CF\uFF1Amoment format\uFF09\u6307\u5B9A schema.format \u5219\u5FC5\u987B\u9075\u5B88 RFC3339 \u65F6\u95F4\u683C\u5F0F\uFF0C\u5426\u5219\u90FD\u89C6\u4E3A\u683C\u5F0F\u9519\u8BEF\uFF0C\u9ED8...",group:"Widgets",order:0,path:"packages/form/src/widgets/date/index.zh-CN.md",url:"/form/date/zh"},text:`<p>\u8F93\u5165\u6216\u9009\u62E9\u65E5\u671F\u7684\u63A7\u4EF6\u3002</p>
<h2 id="\u6CE8\u610F\u4E8B\u9879"><a class="lake-link"><i data-anchor="\u6CE8\u610F\u4E8B\u9879"></i></a>\u6CE8\u610F\u4E8B\u9879</h2><ul>
<li>\u683C\u5F0F\u5316\u5206\u4E3A\uFF1A<strong>\u6570\u636E\u683C\u5F0F\u5316</strong>\u8868\u793A\u8868\u5355\u6570\u636E\u548C<strong>\u663E\u793A\u683C\u5F0F\u5316</strong>\u663E\u793A\u6570\u636E\uFF08\u7B49\u540C <a href="https://ng.ant.design/components/date-picker/zh#api" target="_blank" rel="noopener">nzFormat</a> \u503C\uFF09</li>
<li>\u6240\u6709 <strong>\u6570\u636E\u683C\u5F0F\u5316</strong> \u5355\u4F4D\uFF0C\u53C2\u8003 <a href="https://date-fns.org/v1.29.0/docs/format" target="_blank" rel="noopener">date-fns format</a>\uFF08\u56FD\u5185\u955C\u50CF\uFF1A<a href="http://momentjs.cn/docs/#/displaying/format/" target="_blank" rel="noopener">moment format</a>\uFF09</li>
<li>\u6307\u5B9A <code>schema.format</code> \u5219\u5FC5\u987B\u9075\u5B88 <a href="https://tools.ietf.org/html/rfc3339#section-5.6" target="_blank" rel="noopener">RFC3339</a> \u65F6\u95F4\u683C\u5F0F\uFF0C\u5426\u5219\u90FD\u89C6\u4E3A\u683C\u5F0F\u9519\u8BEF\uFF0C\u9ED8\u8BA4\u7684\u6570\u636E\u683C\u5F0F\u5316\u89C4\u5219\uFF1A<ul>
<li><code>date-time</code> \u9ED8\u8BA4 <code>yyyy-MM-DDTHH:mm:ssZ</code>\uFF0C\u6CE8\u610F\u8FD9\u91CC\u91C7\u7528\u7684\u662F <code>type=&quot;datetime-local&quot;</code> \u56E0\u6B64\u4F1A\u6D89\u53CA\u5230<strong>\u65F6\u533A\u95EE\u9898</strong></li>
<li><code>date</code>\u3001<code>full-date</code> \u9ED8\u8BA4 <code>yyyy-MM-dd</code></li>
<li><code>time</code>\u3001<code>full-time</code> \u9ED8\u8BA4 <code>HH:mm:ss</code></li>
<li>\u975E\u6807\u51C6\uFF1A<code>week</code> \u9ED8\u8BA4 <code>yyyy-ww</code></li>
<li>\u975E\u6807\u51C6\uFF1A<code>month</code> \u9ED8\u8BA4 <code>yyyy-MM</code></li>
</ul>
</li>
<li>\u4E0D\u6307\u5B9A <code>schema.format</code> \u6839\u636E <code>schema.type</code> \u503C\u6309\u4EE5\u4E0B\u89C4\u5219\u5904\u7406\uFF08\u5141\u8BB8\u901A\u8FC7<a href="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\u66FF\u6362\uFF09\u6570\u636E\u683C\u5F0F\u5316\uFF1A<ul>
<li><code>string</code> \u9ED8\u8BA4 <code>yyyy-MM-dd HH:mm:ss</code></li>
<li><code>number</code> \u9ED8\u8BA4 <code>T</code> 13\u4F4DUnix Timestamp</li>
</ul>
</li>
</ul>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema_\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema_\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[readOnly]</code></td>
<td>\u7981\u7528\u72B6\u6001</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[format]</code></td>
<td>\u6570\u636E\u683C\u5F0F\u7C7B\u578B</td>
<td><code>string</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui_\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui_\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[mode]</code></td>
<td>\u6E32\u67D3\u6A21\u5F0F</td>
<td><code>date,week,month,year</code></td>
<td><code>date</code></td>
</tr>
<tr>
<td><code>[rangeMode]</code></td>
<td>\u8303\u56F4\u9009\u62E9\u5668\u7684\u9009\u62E9\u6A21\u5F0F</td>
<td><code>date,week,month,year</code></td>
<td><code>date</code></td>
</tr>
<tr>
<td><code>[size]</code></td>
<td>\u5927\u5C0F\uFF0C\u7B49\u540C <code>nzSize</code></td>
<td><code>default,large,small</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[placeholder]</code></td>
<td>\u5728\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u8BAF\u606F</td>
<td><code>string, string[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[format]</code></td>
<td>\u6570\u636E\u683C\u5F0F\u5316</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[displayFormat]</code></td>
<td>\u663E\u793A\u683C\u5F0F\u5316\uFF0C\uFF08\u7B49\u540C <a href="https://ng.ant.design/components/date-picker/zh#api" target="_blank" rel="noopener">nzFormat</a> \u503C\uFF09</td>
<td><code>string</code></td>
<td><code>yyyy-MM-dd HH:mm:ss</code></td>
</tr>
<tr>
<td><code>[end]</code></td>
<td>\u65E5\u671F\u8303\u56F4\u6240\u5BF9\u5E94\u7684\u7ED3\u675F\u503C <code>key</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[allowClear]</code></td>
<td>\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[className]</code></td>
<td>\u9009\u62E9\u5668 className</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[locale]</code></td>
<td>\u56FD\u9645\u5316\u914D\u7F6E</td>
<td><code>object</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[popupStyle]</code></td>
<td>\u989D\u5916\u7684\u5F39\u51FA\u65E5\u5386\u6837\u5F0F</td>
<td><code>object</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[dropdownClassName]</code></td>
<td>\u989D\u5916\u7684\u5F39\u51FA\u65E5\u5386 className</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[onOpenChange]</code></td>
<td>\u5F39\u51FA\u65E5\u5386\u548C\u5173\u95ED\u65E5\u5386\u7684\u56DE\u8C03</td>
<td><code>(status: boolean) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[disabledDate]</code></td>
<td>\u4E0D\u53EF\u9009\u62E9\u7684\u65E5\u671F</td>
<td><code>(current: Date) =&gt; boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[disabledTime]</code></td>
<td>\u4E0D\u53EF\u9009\u62E9\u7684\u65F6\u95F4</td>
<td><code>(current: Date) =&gt; &#123; nzDisabledHours, nzDisabledMinutes, nzDisabledSeconds &#125;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[renderExtraFooter]</code></td>
<td>\u5728\u9762\u677F\u4E2D\u6DFB\u52A0\u989D\u5916\u7684\u9875\u811A</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[showTime]</code></td>
<td>\u589E\u52A0\u65F6\u95F4\u9009\u62E9\u529F\u80FD\uFF0C<code>object</code> \u7C7B\u578B\u4E3A <a href="https://ng.ant.design/components/time-picker/en#api" target="_blank" rel="noopener">TimePickerOptions</a></td>
<td><code>object,boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[showToday]</code></td>
<td>\u662F\u5426\u5C55\u793A\u201C\u4ECA\u5929\u201D\u6309\u94AE</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[inputReadOnly]</code></td>
<td>\u4E3A input \u6807\u7B7E\u8BBE\u7F6E\u53EA\u8BFB\u5C5E\u6027\uFF08\u907F\u514D\u5728\u79FB\u52A8\u8BBE\u5907\u4E0A\u89E6\u53D1\u5C0F\u952E\u76D8\uFF09</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[inline]</code></td>
<td>\u5185\u8054\u6A21\u5F0F</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[separator]</code></td>
<td>\u5206\u9694\u7B26</td>
<td><code>string, TemplateRef</code></td>
<td><code>&#39;~&#39;</code></td>
</tr>
<tr>
<td><code>[showWeekNumber]</code></td>
<td>\u662F\u5426\u5728\u6BCF\u4E00\u884C\u663E\u793A\u5468\u6570\uFF08\u4EC5\u65E5\u671F\u9009\u62E9\u5668\u652F\u6301\u3002\u5468\u9009\u62E9\u5668\u59CB\u7EC8\u663E\u793A\u5468\u6570\uFF09</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[onOk]</code></td>
<td>\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u7684\u56DE\u8C03</td>
<td>\`(data: Date</td>
<td>Date[]) =&gt; void\`</td>
</tr>
<tr>
<td><code>[change]</code></td>
<td>\u65F6\u95F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03</td>
<td>\`(data: Date</td>
<td>Date[]) =&gt; void\`</td>
</tr>
</tbody></table>
`,toc:[{id:"\u6CE8\u610F\u4E8B\u9879",title:"\u6CE8\u610F\u4E8B\u9879"},{id:"api",title:"API",children:[{id:"schema_\u5C5E\u6027",title:"schema \u5C5E\u6027"},{id:"ui_\u5C5E\u6027",title:"ui \u5C5E\u6027"}]}],raw:"---\ntitle: date\nsubtitle: \u65E5\u671F\ntype: Widgets\n---\n\n\u8F93\u5165\u6216\u9009\u62E9\u65E5\u671F\u7684\u63A7\u4EF6\u3002\n\n## \u6CE8\u610F\u4E8B\u9879\n\n- \u683C\u5F0F\u5316\u5206\u4E3A\uFF1A**\u6570\u636E\u683C\u5F0F\u5316**\u8868\u793A\u8868\u5355\u6570\u636E\u548C**\u663E\u793A\u683C\u5F0F\u5316**\u663E\u793A\u6570\u636E\uFF08\u7B49\u540C [nzFormat](https://ng.ant.design/components/date-picker/zh#api) \u503C\uFF09\n- \u6240\u6709 **\u6570\u636E\u683C\u5F0F\u5316** \u5355\u4F4D\uFF0C\u53C2\u8003 [date-fns format](https://date-fns.org/v1.29.0/docs/format)\uFF08\u56FD\u5185\u955C\u50CF\uFF1A[moment format](http://momentjs.cn/docs/#/displaying/format/)\uFF09\n- \u6307\u5B9A `schema.format` \u5219\u5FC5\u987B\u9075\u5B88 [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6) \u65F6\u95F4\u683C\u5F0F\uFF0C\u5426\u5219\u90FD\u89C6\u4E3A\u683C\u5F0F\u9519\u8BEF\uFF0C\u9ED8\u8BA4\u7684\u6570\u636E\u683C\u5F0F\u5316\u89C4\u5219\uFF1A\n  - `date-time` \u9ED8\u8BA4 `yyyy-MM-DDTHH:mm:ssZ`\uFF0C\u6CE8\u610F\u8FD9\u91CC\u91C7\u7528\u7684\u662F `type=\"datetime-local\"` \u56E0\u6B64\u4F1A\u6D89\u53CA\u5230**\u65F6\u533A\u95EE\u9898**\n  - `date`\u3001`full-date` \u9ED8\u8BA4 `yyyy-MM-dd`\n  - `time`\u3001`full-time` \u9ED8\u8BA4 `HH:mm:ss`\n  - \u975E\u6807\u51C6\uFF1A`week` \u9ED8\u8BA4 `yyyy-ww`\n  - \u975E\u6807\u51C6\uFF1A`month` \u9ED8\u8BA4 `yyyy-MM`\n- \u4E0D\u6307\u5B9A `schema.format` \u6839\u636E `schema.type` \u503C\u6309\u4EE5\u4E0B\u89C4\u5219\u5904\u7406\uFF08\u5141\u8BB8\u901A\u8FC7[\u5168\u5C40\u914D\u7F6E](/docs/global-config)\u66FF\u6362\uFF09\u6570\u636E\u683C\u5F0F\u5316\uFF1A\n  - `string` \u9ED8\u8BA4 `yyyy-MM-dd HH:mm:ss`\n  - `number` \u9ED8\u8BA4 `T` 13\u4F4DUnix Timestamp\n\n## API\n\n### schema \u5C5E\u6027\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[readOnly]` | \u7981\u7528\u72B6\u6001 | `boolean` | - |\n| `[format]` | \u6570\u636E\u683C\u5F0F\u7C7B\u578B | `string` | - |\n\n### ui \u5C5E\u6027\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[mode]` | \u6E32\u67D3\u6A21\u5F0F | `date,week,month,year` | `date` |\n| `[rangeMode]` | \u8303\u56F4\u9009\u62E9\u5668\u7684\u9009\u62E9\u6A21\u5F0F | `date,week,month,year` | `date` |\n| `[size]` | \u5927\u5C0F\uFF0C\u7B49\u540C `nzSize` | `default,large,small` | - |\n| `[placeholder]` | \u5728\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u8BAF\u606F | `string, string[]` | - |\n| `[format]` | \u6570\u636E\u683C\u5F0F\u5316 | `string` | - |\n| `[displayFormat]` | \u663E\u793A\u683C\u5F0F\u5316\uFF0C\uFF08\u7B49\u540C [nzFormat](https://ng.ant.design/components/date-picker/zh#api) \u503C\uFF09 | `string` | `yyyy-MM-dd HH:mm:ss` |\n| `[end]` | \u65E5\u671F\u8303\u56F4\u6240\u5BF9\u5E94\u7684\u7ED3\u675F\u503C `key` | `string` | - |\n| `[allowClear]` | \u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE | `boolean` | `true` |\n| `[className]` | \u9009\u62E9\u5668 className | `string` | - |\n| `[locale]` | \u56FD\u9645\u5316\u914D\u7F6E | `object` | - |\n| `[popupStyle]` | \u989D\u5916\u7684\u5F39\u51FA\u65E5\u5386\u6837\u5F0F | `object` | - |\n| `[dropdownClassName]` | \u989D\u5916\u7684\u5F39\u51FA\u65E5\u5386 className | `string` | - |\n| `[onOpenChange]` | \u5F39\u51FA\u65E5\u5386\u548C\u5173\u95ED\u65E5\u5386\u7684\u56DE\u8C03 | `(status: boolean) => void` | - |\n| `[disabledDate]` | \u4E0D\u53EF\u9009\u62E9\u7684\u65E5\u671F | `(current: Date) => boolean` | - |\n| `[disabledTime]` | \u4E0D\u53EF\u9009\u62E9\u7684\u65F6\u95F4 | `(current: Date) => { nzDisabledHours, nzDisabledMinutes, nzDisabledSeconds }` | - |\n| `[renderExtraFooter]` | \u5728\u9762\u677F\u4E2D\u6DFB\u52A0\u989D\u5916\u7684\u9875\u811A | `string` | - |\n| `[showTime]` | \u589E\u52A0\u65F6\u95F4\u9009\u62E9\u529F\u80FD\uFF0C`object` \u7C7B\u578B\u4E3A [TimePickerOptions](https://ng.ant.design/components/time-picker/en#api) | `object,boolean` | `true` |\n| `[showToday]` | \u662F\u5426\u5C55\u793A\u201C\u4ECA\u5929\u201D\u6309\u94AE | `boolean` | `true` |\n| `[inputReadOnly]` | \u4E3A input \u6807\u7B7E\u8BBE\u7F6E\u53EA\u8BFB\u5C5E\u6027\uFF08\u907F\u514D\u5728\u79FB\u52A8\u8BBE\u5907\u4E0A\u89E6\u53D1\u5C0F\u952E\u76D8\uFF09 | `boolean` | `false` |\n| `[inline]` | \u5185\u8054\u6A21\u5F0F | `boolean` | `false` |\n| `[separator]` | \u5206\u9694\u7B26 | `string, TemplateRef` | `'~'` |\n| `[showWeekNumber]` | \u662F\u5426\u5728\u6BCF\u4E00\u884C\u663E\u793A\u5468\u6570\uFF08\u4EC5\u65E5\u671F\u9009\u62E9\u5668\u652F\u6301\u3002\u5468\u9009\u62E9\u5668\u59CB\u7EC8\u663E\u793A\u5468\u6570\uFF09 | `boolean` | `false` |\n| `[onOk]` | \u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u7684\u56DE\u8C03 | `(data: Date | Date[]) => void` | - |\n| `[change]` | \u65F6\u95F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03 | `(data: Date | Date[]) => void` | - |"}}};codes=[{id:"form-date-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, inject } from '@angular/core';

import { DelonFormModule, SFDateWidgetSchema, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-date-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)" (formChange)="change($event)" /> \`,
  imports: [DelonFormModule]
})
export class FormDateSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      datetime: {
        type: 'string',
        format: 'date-time'
      },
      date: {
        type: 'string',
        format: 'date'
      },
      date_number: {
        type: 'number',
        ui: { widget: 'date' } as SFDateWidgetSchema
      },
      year: {
        type: 'number',
        ui: { widget: 'date', mode: 'year', format: 'yyyy' } as SFDateWidgetSchema
      },
      month: {
        type: 'string',
        format: 'month'
      },
      week: {
        type: 'string',
        format: 'week'
      },
      range: {
        type: 'string',
        ui: { widget: 'date', mode: 'range' } as SFDateWidgetSchema
      },
      start: {
        type: 'string',
        ui: { widget: 'date', end: 'end' } as SFDateWidgetSchema
      },
      end: {
        type: 'string',
        ui: { widget: 'date', end: 'end' } as SFDateWidgetSchema
      },
      inline: {
        type: 'string',
        ui: { widget: 'date', inline: true } as SFDateWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }

  change(value: {}): void {
    console.log('change', value);
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/form/src/widgets/date/demo/simple.md"},{id:"form-date-range",name:"range",title:{"zh-CN":"\u8303\u56F4","en-US":"Data Range"},code:`import { Component, inject } from '@angular/core';

import { subWeeks } from 'date-fns';

import { DelonFormModule, SFDateWidgetSchema, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-date-range',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)" /> \`,
  imports: [DelonFormModule]
})
export class FormDateRange {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      start: {
        type: 'string',
        ui: { widget: 'date', end: 'end', separator: '\u5230' } as SFDateWidgetSchema,
        default: new Date()
      },
      end: {
        type: 'string',
        default: subWeeks(new Date(), 6)
      },
      startWeek: {
        type: 'string',
        ui: { widget: 'date', rangeMode: 'week', end: 'endWeek' } as SFDateWidgetSchema,
        default: new Date()
      },
      endWeek: {
        type: 'string',
        default: subWeeks(new Date(), 6)
      },
      startMonth: {
        type: 'string',
        ui: { widget: 'date', rangeMode: 'month', end: 'endMonth' } as SFDateWidgetSchema,
        default: new Date()
      },
      endMonth: {
        type: 'string',
        default: subWeeks(new Date(), 6)
      },
      startYear: {
        type: 'string',
        ui: { widget: 'date', rangeMode: 'year', end: 'endYear' } as SFDateWidgetSchema,
        default: new Date()
      },
      endYear: {
        type: 'string',
        default: subWeeks(new Date(), 6)
      }
    },
    required: ['start']
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:1,type:"demo",summary:{"en-US":`<p>A simple start &amp; end date range, **Note: ** <code>end</code> still needs define in schema, but will forced to be hidden.</p>
`,"zh-CN":`<p>\u4E00\u4E2A\u7B80\u5355\u7684\u5F00\u59CB\u4E0E\u7ED3\u675F\u65E5\u671F\uFF0C<strong>\u6CE8\u610F\uFF1A</strong> <code>end</code> \u4F9D\u7136\u9700\u8981\u5B9A\u4E49\u5BF9\u5E94\u7684Schema\uFF0C\u4F46\u4F1A\u5F3A\u5236\u9690\u85CF\u72B6\u6001\u3002</p>
`},summary_raw:{"en-US":"A simple start & end date range, \\*\\*Note: \\*\\* `end` still needs define in schema, but will forced to be hidden.\n","zh-CN":"\u4E00\u4E2A\u7B80\u5355\u7684\u5F00\u59CB\u4E0E\u7ED3\u675F\u65E5\u671F\uFF0C**\u6CE8\u610F\uFF1A** `end` \u4F9D\u7136\u9700\u8981\u5B9A\u4E49\u5BF9\u5E94\u7684Schema\uFF0C\u4F46\u4F1A\u5F3A\u5236\u9690\u85CF\u72B6\u6001\u3002\n"},path:"packages/form/src/widgets/date/demo/range.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-date"]],hostAttrs:[1,"d-block"],decls:7,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-date-simple"),i(),a(5,"code-box",3),m(6,"form-date-range"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id),c(2),d("item",t.codes[1]),v("id",t.codes[1].id))},dependencies:[S,_e,Me,F,w,C],encapsulation:2})};var qe=class o{msg=u(y);schema={properties:{number:{type:"number",minimum:18,maximum:100,multipleOf:2,ui:{widgetWidth:200}},integer:{type:"integer",default:10,ui:{widgetWidth:"100%"}},unit:{type:"number",default:10,ui:{unit:"%"}},prefix:{type:"number",default:10,ui:{prefix:"$"}},hideStep:{type:"number",default:10,ui:{hideStep:!0}}}};submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-number-simple"]],decls:1,vars:1,consts:[[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)},dependencies:[g,h],encapsulation:2})};var Pe=class o{item={name:"number",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"number",subtitle:"Input Number",order:5,description:"Enter a number within certain range with the mouse or keyboard.All components of NG-ZORRO are in OnPush mode. A special case is that when the unit nee...",group:"Widgets",path:"packages/form/src/widgets/number/index.en-US.md",url:"/form/number/en"},text:`<p>Enter a number within certain range with the mouse or keyboard.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[minimum]</code></td>
<td>min value</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[exclusiveMinimum]</code></td>
<td>Indicate whether minimum are exclusive of the value</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[maximum]</code></td>
<td>max value</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[exclusiveMaximum]</code></td>
<td>Indicate whether maximum are exclusive of the value</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[multipleOf]</code></td>
<td>Restricted to a multiple of a given number,</td>
<td><code>number</code></td>
<td><code>1</code></td>
</tr>
<tr>
<td><code>[change]</code></td>
<td>Change event for the number</td>
<td><code>(val?: number) =&gt; void</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[prefix]</code></td>
<td>Prefix, simplifying the use of <code>nzFormatter</code>, <code>nzParser</code></td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td><code>[unit]</code></td>
<td>Unit, simplifying the use of <code>nzFormatter</code>, <code>nzParser</code></td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td><code>[formatter]</code></td>
<td>Specifies the format of the value presented</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td><code>[parser]</code></td>
<td>Specifies the value extracted from nzFormatter</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td><code>[precision]</code></td>
<td>precision of input value</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td><code>[widgetWidth]</code></td>
<td>Specify <code>nz-number</code> width</td>
<td><code>number, string</code></td>
<td><code>90</code></td>
</tr>
<tr>
<td><code>[hideStep]</code></td>
<td>Hide step icon</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
</tbody></table>
<h2 id="qa"><a class="lake-link"><i data-anchor="qa"></i></a>QA</h2><h3 id="why_canand#39;t_modify_lesscodegreaterunitless/codegreater"><a class="lake-link"><i data-anchor="why_canand#39;t_modify_lesscodegreaterunitless/codegreater"></i></a>Why can&#39;t modify <code>unit</code></h3><p>All components of NG-ZORRO are in OnPush mode. A special case is that when the <code>unit</code> needs to be dynamically modified, it will only take effect when the <code>ngModel</code> change needs to be triggered once, so it&#39;s value needs to be changed, for example:</p>
<pre><code class="language-ts">const ageProperty = this.sf.getProperty(&#39;/age&#39;)!;
ageProperty.widget.ui.unit =&#39;c&#39;;
ageProperty.widget.setValue(null);
ageProperty.widget.setValue(statusProperty.value);
</code></pre>
`,toc:[{id:"api",title:"API",children:[{id:"schema",title:"schema"},{id:"ui",title:"ui"}]},{id:"qa",title:"QA",children:[{id:"why_cant_modify",title:"Why can't modify "}]}],raw:"---\ntitle: number\nsubtitle: Input Number\ntype: Widgets\norder: 5\n---\n\nEnter a number within certain range with the mouse or keyboard.\n\n## API\n\n### schema\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[minimum]` | min value | `number` | - |\n| `[exclusiveMinimum]` | Indicate whether minimum are exclusive of the value | `boolean` | - |\n| `[maximum]` | max value | `number` | - |\n| `[exclusiveMaximum]` | Indicate whether maximum are exclusive of the value | `boolean` | - |\n| `[multipleOf]` | Restricted to a multiple of a given number, | `number` | `1` |\n| `[change]` | Change event for the number | `(val?: number) => void` | - |\n\n### ui\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[prefix]` | Prefix, simplifying the use of `nzFormatter`, `nzParser` | - | - |\n| `[unit]` | Unit, simplifying the use of `nzFormatter`, `nzParser` | - | - |\n| `[formatter]` | Specifies the format of the value presented | - | - |\n| `[parser]` | Specifies the value extracted from nzFormatter | - | - |\n| `[precision]` | precision of input value | - | - |\n| `[widgetWidth]` | Specify `nz-number` width | `number, string` | `90` |\n| `[hideStep]` | Hide step icon | `boolean` | `false` |\n\n## QA\n\n### Why can't modify `unit`\n\nAll components of NG-ZORRO are in OnPush mode. A special case is that when the `unit` needs to be dynamically modified, it will only take effect when the `ngModel` change needs to be triggered once, so it's value needs to be changed, for example:\n\n```ts\nconst ageProperty = this.sf.getProperty('/age')!;\nageProperty.widget.ui.unit ='c';\nageProperty.widget.setValue(null);\nageProperty.widget.setValue(statusProperty.value);\n```"},"zh-CN":{meta:{title:"number",subtitle:"\u6570\u5B57",order:5,description:'\u901A\u8FC7\u9F20\u6807\u6216\u952E\u76D8\uFF0C\u8F93\u5165\u8303\u56F4\u5185\u7684\u6570\u503C\u82E5 type="integer" \u4F1A\u5F3A\u5236\u79FB\u9664 minimum\u3001maximum\u3001multipleOf \u53C2\u6570\u7684\u5C0F\u6570\u90E8\u5206\u3002NG-ZORRO \u6240\u6709\u7EC4\u4EF6\u90FD\u662F OnPush \u6A21\u5F0F\uFF0C\u4E00\u79CD\u7279\u6B8A\u60C5\u51B5\u662F\u5F53\u9700\u8981\u52A8\u6001\u4FEE\u6539 unit \u65F6\uFF0C\u7531\u4E8E\u9700\u8981\u89E6\u53D1\u4E00\u6B21 ngModel \u53D8\u66F4\u65F6\u624D\u4F1A\u751F\u6548\uFF0C\u56E0\u6B64\u9700...',group:"Widgets",path:"packages/form/src/widgets/number/index.zh-CN.md",url:"/form/number/zh"},text:`<p>\u901A\u8FC7\u9F20\u6807\u6216\u952E\u76D8\uFF0C\u8F93\u5165\u8303\u56F4\u5185\u7684\u6570\u503C</p>
<h2 id="\u6CE8\u610F\u4E8B\u9879"><a class="lake-link"><i data-anchor="\u6CE8\u610F\u4E8B\u9879"></i></a>\u6CE8\u610F\u4E8B\u9879</h2><ul>
<li>\u82E5 <code>type=&quot;integer&quot;</code> \u4F1A<strong>\u5F3A\u5236</strong>\u79FB\u9664 <code>minimum</code>\u3001<code>maximum</code>\u3001<code>multipleOf</code> \u53C2\u6570\u7684\u5C0F\u6570\u90E8\u5206\u3002</li>
</ul>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema_\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema_\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[minimum]</code></td>
<td>\u6700\u5C0F\u503C</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[exclusiveMinimum]</code></td>
<td>\u7EA6\u675F\u662F\u5426\u5305\u62EC <code>minimum</code> \u503C\uFF0C<code>true</code> \u8868\u793A\u6392\u9664 <code>minimum</code> \u503C</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[maximum]</code></td>
<td>\u6700\u5927\u503C</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[exclusiveMaximum]</code></td>
<td>\u7EA6\u675F\u662F\u5426\u5305\u62EC <code>maximum</code> \u503C\uFF0C<code>true</code> \u8868\u793A\u6392\u9664 <code>maximum</code> \u503C</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[multipleOf]</code></td>
<td>\u500D\u6570</td>
<td><code>number</code></td>
<td><code>1</code></td>
</tr>
</tbody></table>
<h3 id="ui_\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui_\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[prefix]</code></td>
<td>\u524D\u7F00\uFF0C\u7B80\u5316 <code>nzFormatter</code>\u3001<code>nzParser</code> \u7684\u4F7F\u7528</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td><code>[unit]</code></td>
<td>\u5355\u4F4D\uFF0C\u7B80\u5316 <code>nzFormatter</code>\u3001<code>nzParser</code> \u7684\u4F7F\u7528</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td><code>[formatter]</code></td>
<td>\u7B49\u540C <code>nzFormatter</code></td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td><code>[parser]</code></td>
<td>\u7B49\u540C <code>nzParser</code></td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td><code>[precision]</code></td>
<td>\u7B49\u540C <code>nzPrecision</code></td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td><code>[widgetWidth]</code></td>
<td>\u6307\u5B9A <code>nz-number</code> \u5BBD\u5EA6</td>
<td><code>number, string</code></td>
<td><code>90</code></td>
</tr>
<tr>
<td><code>[hideStep]</code></td>
<td>\u9690\u85CF\u6B65\u6570\u64CD\u4F5C\u533A</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[change]</code></td>
<td>\u53D8\u66F4\u4E8B\u4EF6</td>
<td><code>(val?: number) =&gt; void</code></td>
<td>-</td>
</tr>
</tbody></table>
<h2 id="qa"><a class="lake-link"><i data-anchor="qa"></i></a>QA</h2><h3 id="\u4E3A\u4EC0\u4E48_lesscodegreaterunitless/codegreater_\u65E0\u6CD5\u53D8\u66F4"><a class="lake-link"><i data-anchor="\u4E3A\u4EC0\u4E48_lesscodegreaterunitless/codegreater_\u65E0\u6CD5\u53D8\u66F4"></i></a>\u4E3A\u4EC0\u4E48 <code>unit</code> \u65E0\u6CD5\u53D8\u66F4</h3><p>NG-ZORRO \u6240\u6709\u7EC4\u4EF6\u90FD\u662F OnPush \u6A21\u5F0F\uFF0C\u4E00\u79CD\u7279\u6B8A\u60C5\u51B5\u662F\u5F53\u9700\u8981\u52A8\u6001\u4FEE\u6539 <code>unit</code> \u65F6\uFF0C\u7531\u4E8E\u9700\u8981\u89E6\u53D1\u4E00\u6B21 <code>ngModel</code> \u53D8\u66F4\u65F6\u624D\u4F1A\u751F\u6548\uFF0C\u56E0\u6B64\u9700\u8981\u4F7F\u5176\u503C\u53D1\u751F\u53D8\u66F4\uFF0C\u4F8B\u5982\uFF1A</p>
<pre><code class="language-ts">const ageProperty = this.sf.getProperty(&#39;/age&#39;)!;
ageProperty.widget.ui.unit = &#39;c&#39;;
ageProperty.widget.setValue(null);
ageProperty.widget.setValue(statusProperty.value);
</code></pre>
`,toc:[{id:"\u6CE8\u610F\u4E8B\u9879",title:"\u6CE8\u610F\u4E8B\u9879"},{id:"api",title:"API",children:[{id:"schema_\u5C5E\u6027",title:"schema \u5C5E\u6027"},{id:"ui_\u5C5E\u6027",title:"ui \u5C5E\u6027"}]},{id:"qa",title:"QA",children:[{id:"\u4E3A\u4EC0\u4E48",title:"\u4E3A\u4EC0\u4E48 "}]}],raw:"---\ntitle: number\nsubtitle: \u6570\u5B57\ntype: Widgets\norder: 5\n---\n\n\u901A\u8FC7\u9F20\u6807\u6216\u952E\u76D8\uFF0C\u8F93\u5165\u8303\u56F4\u5185\u7684\u6570\u503C\n\n## \u6CE8\u610F\u4E8B\u9879\n\n- \u82E5 `type=\"integer\"` \u4F1A**\u5F3A\u5236**\u79FB\u9664 `minimum`\u3001`maximum`\u3001`multipleOf` \u53C2\u6570\u7684\u5C0F\u6570\u90E8\u5206\u3002\n\n## API\n\n### schema \u5C5E\u6027\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[minimum]` | \u6700\u5C0F\u503C | `number` | - |\n| `[exclusiveMinimum]` | \u7EA6\u675F\u662F\u5426\u5305\u62EC `minimum` \u503C\uFF0C`true` \u8868\u793A\u6392\u9664 `minimum` \u503C | `boolean` | - |\n| `[maximum]` | \u6700\u5927\u503C | `number` | - |\n| `[exclusiveMaximum]` | \u7EA6\u675F\u662F\u5426\u5305\u62EC `maximum` \u503C\uFF0C`true` \u8868\u793A\u6392\u9664 `maximum` \u503C | `boolean` | - |\n| `[multipleOf]` | \u500D\u6570 | `number` | `1` |\n\n### ui \u5C5E\u6027\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[prefix]` | \u524D\u7F00\uFF0C\u7B80\u5316 `nzFormatter`\u3001`nzParser` \u7684\u4F7F\u7528 | - | - |\n| `[unit]` | \u5355\u4F4D\uFF0C\u7B80\u5316 `nzFormatter`\u3001`nzParser` \u7684\u4F7F\u7528 | - | - |\n| `[formatter]` | \u7B49\u540C `nzFormatter` | - | - |\n| `[parser]` | \u7B49\u540C `nzParser` | - | - |\n| `[precision]` | \u7B49\u540C `nzPrecision` | - | - |\n| `[widgetWidth]` | \u6307\u5B9A `nz-number` \u5BBD\u5EA6 | `number, string` | `90` |\n| `[hideStep]` | \u9690\u85CF\u6B65\u6570\u64CD\u4F5C\u533A | `boolean` | `false` |\n| `[change]` | \u53D8\u66F4\u4E8B\u4EF6 | `(val?: number) => void` | - |\n\n## QA\n\n### \u4E3A\u4EC0\u4E48 `unit` \u65E0\u6CD5\u53D8\u66F4\n\nNG-ZORRO \u6240\u6709\u7EC4\u4EF6\u90FD\u662F OnPush \u6A21\u5F0F\uFF0C\u4E00\u79CD\u7279\u6B8A\u60C5\u51B5\u662F\u5F53\u9700\u8981\u52A8\u6001\u4FEE\u6539 `unit` \u65F6\uFF0C\u7531\u4E8E\u9700\u8981\u89E6\u53D1\u4E00\u6B21 `ngModel` \u53D8\u66F4\u65F6\u624D\u4F1A\u751F\u6548\uFF0C\u56E0\u6B64\u9700\u8981\u4F7F\u5176\u503C\u53D1\u751F\u53D8\u66F4\uFF0C\u4F8B\u5982\uFF1A\n\n```ts\nconst ageProperty = this.sf.getProperty('/age')!;\nageProperty.widget.ui.unit = 'c';\nageProperty.widget.setValue(null);\nageProperty.widget.setValue(statusProperty.value);\n```"}}};codes=[{id:"form-number-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, inject } from '@angular/core';

import { DelonFormModule, SFNumberWidgetSchema, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-number-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)" /> \`,
  imports: [DelonFormModule]
})
export class FormNumberSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      number: {
        type: 'number',
        minimum: 18,
        maximum: 100,
        multipleOf: 2,
        ui: { widgetWidth: 200 } as SFNumberWidgetSchema
      },
      integer: { type: 'integer', default: 10, ui: { widgetWidth: '100%' } as SFNumberWidgetSchema },
      unit: { type: 'number', default: 10, ui: { unit: '%' } as SFNumberWidgetSchema },
      prefix: { type: 'number', default: 10, ui: { prefix: '$' } as SFNumberWidgetSchema },
      hideStep: { type: 'number', default: 10, ui: { hideStep: true } as SFNumberWidgetSchema }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/form/src/widgets/number/demo/simple.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-number"]],hostAttrs:[1,"d-block"],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-number-simple"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id))},dependencies:[S,qe,F,w,C],encapsulation:2})};var Ee=class o{msg=u(y);schema={properties:{name:{type:"string"},age:{type:"number"}},required:["name","age"],ui:{spanLabel:4,spanControl:5}};submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-object-simple"]],decls:1,vars:1,consts:[[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)},dependencies:[g,h],encapsulation:2})};var un=["extra"];function hn(o,n){if(o&1){let e=W();a(0,"sf",2),l("formSubmit",function(s){A(e);let p=E();return O(p.submit(s))}),i()}if(o&2){let e=E();d("schema",e.schema)}}function gn(o,n){if(o&1){let e=W();a(0,"a",3),l("click",function(){A(e);let s=E();return O(s.msg.success("Success"))}),D(1,"More"),i()}}var Ae=class o{msg=u(y);extra;schema;ngOnInit(){this.schema={properties:{name:{type:"string"},age:{type:"number"},address1:{title:"\u5730\u57401",type:"object",properties:{country:{type:"string"},city:{type:"string"},zone:{type:"string"}},ui:{type:"card",cardExtra:this.extra}},address2:{title:"\u5730\u57402",type:"object",properties:{country:{type:"string"},city:{type:"string"},zone:{type:"string"}},ui:{type:"card",showExpand:!1}}},required:["name","age"],ui:{spanLabelFixed:150,grid:{span:12,gutter:16}}}}submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-object-card"]],viewQuery:function(e,t){if(e&1&&_(un,7),e&2){let s;N(s=T())&&(t.extra=s.first)}},decls:3,vars:1,consts:[["extra",""],[3,"schema"],[3,"formSubmit","schema"],[3,"click"]],template:function(e,t){e&1&&(V(0,hn,1,1,"sf",1),R(1,gn,2,0,"ng-template",null,0,B)),e&2&&L(t.schema?0:-1)},dependencies:[g,h],encapsulation:2})};var Oe=class o{item={name:"object",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"object",subtitle:"Object",order:1,description:'Create an object widget, valid only for schema.type="object".',group:"Widgets",path:"packages/form/src/widgets/object/index.en-US.md",url:"/form/object/en"},text:`<p>Create an object widget, valid only for <code>schema.type=&quot;object&quot;</code>.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[properties]</code></td>
<td>Defining the properties of an object schema</td>
<td><code>&#123; [key: string]: SFSchema &#125;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[required]</code></td>
<td>The data object to be valid should contain all properties with names equal to the elements in the keyword value</td>
<td><code>string[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[maxProperties]</code></td>
<td>The data object to be valid should have not more (less) properties than the keyword value</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[minProperties]</code></td>
<td>The data object to be valid should have not more (less) properties than the keyword value</td>
<td><code>number</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[showExpand]</code></td>
<td>Whether to show the card body, click to hide the content, only <code>type ===&#39;card&#39;</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[expand]</code></td>
<td>Expanded state, only <code>type ===&#39;card&#39;</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[showTitle]</code></td>
<td>Whether to display the title</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[type]</code></td>
<td>Render type of object</td>
<td><code>card, default</code></td>
<td><code>default</code></td>
</tr>
<tr>
<td><code>[cardSize]</code></td>
<td>The same as <code>nzSize</code></td>
<td><code>small, default</code></td>
<td><code>small</code></td>
</tr>
<tr>
<td><code>[cardBodyStyle]</code></td>
<td>The same as <code>nzBodyStyle</code></td>
<td><code>&#123; [key: string]: string &#125;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[cardBordered]</code></td>
<td>The same as <code>nzBordered</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[cardExtra]</code></td>
<td>The same as <code>nzExtra</code></td>
<td><code>string, TemplateRef&lt;void&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[cardActions]</code></td>
<td>The same as <code>nzActions</code></td>
<td><code>Array&lt;TemplateRef&lt;void&gt;&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:"api",title:"API",children:[{id:"schema",title:"schema"},{id:"ui",title:"ui"}]}],raw:"---\ntitle: object\nsubtitle: Object\ntype: Widgets\norder: 1\n---\n\nCreate an object widget, valid only for `schema.type=\"object\"`.\n\n## API\n\n\n### schema\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[properties]` | Defining the properties of an object schema | `{ [key: string]: SFSchema }` | - |\n| `[required]` | The data object to be valid should contain all properties with names equal to the elements in the keyword value | `string[]` | - |\n| `[maxProperties]` | The data object to be valid should have not more (less) properties than the keyword value | `number` | - |\n| `[minProperties]` | The data object to be valid should have not more (less) properties than the keyword value | `number` | - |\n\n### ui\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[showExpand]` | Whether to show the card body, click to hide the content, only `type ==='card'` | `boolean` | `true` |\n| `[expand]` | Expanded state, only `type ==='card'` | `boolean` | `true` |\n| `[showTitle]` | Whether to display the title | `boolean` | `false` |\n| `[type]` | Render type of object | `card, default` | `default` |\n| `[cardSize]` | The same as `nzSize` | `small, default` | `small` |\n| `[cardBodyStyle]` | The same as `nzBodyStyle` | `{ [key: string]: string }` | - |\n| `[cardBordered]` | The same as `nzBordered` | `boolean` | `false` |\n| `[cardExtra]` | The same as `nzExtra` | `string, TemplateRef<void>` | - |\n| `[cardActions]` | The same as `nzActions` | `Array<TemplateRef<void>>` | - |"},"zh-CN":{meta:{title:"object",subtitle:"\u5BF9\u8C61",order:1,description:'\u521B\u5EFA\u5BF9\u8C61\uFF0C\u53EA\u5BF9 schema.type="object" \u65F6\u6709\u6548\u3002',group:"Widgets",path:"packages/form/src/widgets/object/index.zh-CN.md",url:"/form/object/zh"},text:`<p>\u521B\u5EFA\u5BF9\u8C61\uFF0C\u53EA\u5BF9 <code>schema.type=&quot;object&quot;</code> \u65F6\u6709\u6548\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema_\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema_\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[properties]</code></td>
<td>\u5B9A\u4E49\u5BF9\u8C61\u7684\u5C5E\u6027</td>
<td><code>&#123; [key: string]: SFSchema &#125;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[required]</code></td>
<td>\u5FC5\u586B\u9879\u5C5E\u6027</td>
<td><code>string[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[maxProperties]</code></td>
<td>\u6700\u5927\u5C5E\u6027\u4E2A\u6570\uFF0C\u5FC5\u987B\u662F\u975E\u8D1F\u6574\u6570</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[minProperties]</code></td>
<td>\u6700\u5C0F\u5C5E\u6027\u4E2A\u6570\uFF0C\u5FC5\u987B\u662F\u975E\u8D1F\u6574\u6570</td>
<td><code>number</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui_\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui_\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[showExpand]</code></td>
<td>\u662F\u5426\u663E\u793A\u6269\u5C55\uFF0C\u70B9\u51FB\u9690\u85CF\u5185\u5BB9\uFF0C\u9650 <code>type === &#39;card&#39;</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[expand]</code></td>
<td>\u5C55\u5F00\u72B6\u6001\uFF0C\u9650 <code>type === &#39;card&#39;</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[showTitle]</code></td>
<td>\u662F\u5426\u663E\u793A\u6807\u9898</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[type]</code></td>
<td>\u6E32\u67D3\u7C7B\u578B</td>
<td><code>card, default</code></td>
<td><code>default</code></td>
</tr>
<tr>
<td><code>[cardSize]</code></td>
<td>\u7B49\u540C <code>nzSize</code> \u5C5E\u6027</td>
<td><code>small, default</code></td>
<td><code>small</code></td>
</tr>
<tr>
<td><code>[cardBodyStyle]</code></td>
<td>\u7B49\u540C <code>nzBodyStyle</code> \u5C5E\u6027</td>
<td><code>&#123; [key: string]: string &#125;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[cardBordered]</code></td>
<td>\u7B49\u540C <code>nzBordered</code> \u5C5E\u6027</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[cardExtra]</code></td>
<td>\u7B49\u540C <code>nzExtra</code> \u5C5E\u6027</td>
<td><code>string, TemplateRef&lt;void&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[cardActions]</code></td>
<td>\u7B49\u540C <code>nzActions</code> \u5C5E\u6027</td>
<td><code>Array&lt;TemplateRef&lt;void&gt;&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:"api",title:"API",children:[{id:"schema_\u5C5E\u6027",title:"schema \u5C5E\u6027"},{id:"ui_\u5C5E\u6027",title:"ui \u5C5E\u6027"}]}],raw:"---\ntitle: object\nsubtitle: \u5BF9\u8C61\ntype: Widgets\norder: 1\n---\n\n\u521B\u5EFA\u5BF9\u8C61\uFF0C\u53EA\u5BF9 `schema.type=\"object\"` \u65F6\u6709\u6548\u3002\n\n## API\n\n### schema \u5C5E\u6027\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[properties]` | \u5B9A\u4E49\u5BF9\u8C61\u7684\u5C5E\u6027 | `{ [key: string]: SFSchema }` | - |\n| `[required]` | \u5FC5\u586B\u9879\u5C5E\u6027 | `string[]` | - |\n| `[maxProperties]` | \u6700\u5927\u5C5E\u6027\u4E2A\u6570\uFF0C\u5FC5\u987B\u662F\u975E\u8D1F\u6574\u6570 | `number` | - |\n| `[minProperties]` | \u6700\u5C0F\u5C5E\u6027\u4E2A\u6570\uFF0C\u5FC5\u987B\u662F\u975E\u8D1F\u6574\u6570 | `number` | - |\n\n### ui \u5C5E\u6027\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[showExpand]` | \u662F\u5426\u663E\u793A\u6269\u5C55\uFF0C\u70B9\u51FB\u9690\u85CF\u5185\u5BB9\uFF0C\u9650 `type === 'card'` | `boolean` | `true` |\n| `[expand]` | \u5C55\u5F00\u72B6\u6001\uFF0C\u9650 `type === 'card'` | `boolean` | `true` |\n| `[showTitle]` | \u662F\u5426\u663E\u793A\u6807\u9898 | `boolean` | `false` |\n| `[type]` | \u6E32\u67D3\u7C7B\u578B | `card, default` | `default` |\n| `[cardSize]` | \u7B49\u540C `nzSize` \u5C5E\u6027 | `small, default` | `small` |\n| `[cardBodyStyle]` | \u7B49\u540C `nzBodyStyle` \u5C5E\u6027 | `{ [key: string]: string }` | - |\n| `[cardBordered]` | \u7B49\u540C `nzBordered` \u5C5E\u6027 | `boolean` | `false` |\n| `[cardExtra]` | \u7B49\u540C `nzExtra` \u5C5E\u6027 | `string, TemplateRef<void>` | - |\n| `[cardActions]` | \u7B49\u540C `nzActions` \u5C5E\u6027 | `Array<TemplateRef<void>>` | - |"}}};codes=[{id:"form-object-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-object-simple',
  template: \`<sf [schema]="schema" (formSubmit)="submit($event)" />\`,
  imports: [DelonFormModule]
})
export class FormObjectSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      name: { type: 'string' },
      age: { type: 'number' }
    },
    required: ['name', 'age'],
    ui: {
      // \u6307\u5B9A \`label\` \u548C \`control\` \u5728\u4E00\u884C\u4E2D\u5404\u5360\u6805\u683C\u6570
      spanLabel: 4,
      spanControl: 5
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/form/src/widgets/object/demo/simple.md"},{id:"form-object-card",name:"card",title:{"zh-CN":"\u5361\u7247\u5BB9\u5668","en-US":"Rectangular container"},code:`import { Component, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';

import { DelonFormModule, SFObjectWidgetSchema, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-object-card',
  template: \`
    @if (schema) {
      <sf [schema]="schema" (formSubmit)="submit($event)" />
    }
    <ng-template #extra>
      <a (click)="msg.success('Success')">More</a>
    </ng-template>
  \`,
  imports: [DelonFormModule]
})
export class FormObjectCard implements OnInit {
  readonly msg = inject(NzMessageService);
  @ViewChild('extra', { static: true }) private extra!: TemplateRef<void>;
  schema?: SFSchema;

  ngOnInit(): void {
    this.schema = {
      properties: {
        name: { type: 'string' },
        age: { type: 'number' },
        address1: {
          title: '\u5730\u57401',
          type: 'object',
          properties: {
            country: { type: 'string' },
            city: { type: 'string' },
            zone: { type: 'string' }
          },
          ui: {
            type: 'card',
            cardExtra: this.extra
          } as SFObjectWidgetSchema
        },
        address2: {
          title: '\u5730\u57402',
          type: 'object',
          properties: {
            country: { type: 'string' },
            city: { type: 'string' },
            zone: { type: 'string' }
          },
          ui: {
            type: 'card',
            showExpand: false
          } as SFObjectWidgetSchema
        }
      },
      required: ['name', 'age'],
      ui: {
        spanLabelFixed: 150,
        grid: { span: 12, gutter: 16 }
      } as SFObjectWidgetSchema
    };
  }

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:1,type:"demo",summary:{"en-US":`<p>A basic card containing a title, content and an extra corner content.</p>
`,"zh-CN":`<p>\u5305\u542B\u6807\u9898\u3001\u5185\u5BB9\u3001\u64CD\u4F5C\u533A\u57DF\u3002</p>
`},summary_raw:{"en-US":`A basic card containing a title, content and an extra corner content.
`,"zh-CN":`\u5305\u542B\u6807\u9898\u3001\u5185\u5BB9\u3001\u64CD\u4F5C\u533A\u57DF\u3002
`},path:"packages/form/src/widgets/object/demo/card.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-object"]],hostAttrs:[1,"d-block"],decls:7,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-object-simple"),i(),a(5,"code-box",3),m(6,"form-object-card"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id),c(2),d("item",t.codes[1]),v("id",t.codes[1].id))},dependencies:[S,Ee,Ae,F,w,C],encapsulation:2})};var We=class o{msg=u(y);schema={properties:{btn:{type:"string",title:"Button",enum:["A","B","C"],ui:{widget:"radio",styleType:"button",buttonStyle:"solid"},default:"A"},async:{type:"string",title:"Async",ui:{widget:"radio",asyncData:()=>z([{label:"\u7537",value:"M"},{label:"\u5973",value:"F"},{label:"\u672A\u77E5",value:"N"}]).pipe(x(100)),change:console.log},default:"N"}}};submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-radio-simple"]],decls:1,vars:1,consts:[[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)},dependencies:[g,h],encapsulation:2})};var Re=class o{item={name:"radio",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"radio",subtitle:"Radio",description:"Radio.",group:"Widgets",order:0,path:"packages/form/src/widgets/radio/index.en-US.md",url:"/form/radio/en"},text:`<p>Radio.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[readOnly]</code></td>
<td>Whether to disable the state</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[enum]</code></td>
<td>Render radio group</td>
<td><code>SFSchemaEnumType[]</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[asyncData]</code></td>
<td>Async data source</td>
<td><code>() =&gt; Observable&lt;SFSchemaEnumType[]&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[size]</code></td>
<td>Size of the <code>nz-radio</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[styleType]</code></td>
<td>Style of the <code>nz-radio</code></td>
<td><code>default, button</code></td>
<td><code>default</code></td>
</tr>
<tr>
<td><code>[change]</code></td>
<td>Changed event</td>
<td><code>(res: SFValue) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[buttonStyle]</code></td>
<td>style type of radio button</td>
<td><code>&#39;outline&#39;\uFF5C&#39;solid&#39;</code></td>
<td><code>&#39;outline&#39;</code></td>
</tr>
</tbody></table>
`,toc:[{id:"api",title:"API",children:[{id:"schema",title:"schema"},{id:"ui",title:"ui"}]}],raw:"---\ntitle: radio\nsubtitle: Radio\ntype: Widgets\n---\n\nRadio.\n\n## API\n\n### schema\n\n| Property     | Description                  | Type                 | Default |\n|--------------|------------------------------|----------------------|---------|\n| `[readOnly]` | Whether to disable the state | `boolean`            | -       |\n| `[enum]`     | Render radio group           | `SFSchemaEnumType[]` | -       |\n\n### ui\n\n| Property      | Description             | Type                                   | Default   |\n|---------------|-------------------------|----------------------------------------|-----------|\n| `[asyncData]` | Async data source       | `() => Observable<SFSchemaEnumType[]>` | -         |\n| `[size]`      | Size of the `nz-radio`  | `string`                               | -         |\n| `[styleType]` | Style of the `nz-radio` | `default, button`                      | `default` |\n| `[change]`    | Changed event           | `(res: SFValue) => void`               | -         |\n| `[buttonStyle]` | style type of radio button | `'outline'\uFF5C'solid'` | `'outline'` |"},"zh-CN":{meta:{title:"radio",subtitle:"\u5355\u9009\u6846",description:"\u5355\u9009\u6846\u3002",group:"Widgets",order:0,path:"packages/form/src/widgets/radio/index.zh-CN.md",url:"/form/radio/zh"},text:`<p>\u5355\u9009\u6846\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema_\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema_\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[enum]</code></td>
<td>\u6570\u636E\u6E90</td>
<td><code>SFSchemaEnumType[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[readOnly]</code></td>
<td>\u7981\u7528\u72B6\u6001</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui_\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui_\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[asyncData]</code></td>
<td>\u5F02\u6B65\u6570\u636E\u6E90</td>
<td><code>() =&gt; Observable&lt;SFSchemaEnumType[]&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[size]</code></td>
<td>\u5927\u5C0F\uFF0C\u7B49\u540C <code>nzSize</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[styleType]</code></td>
<td>radio \u7684\u6837\u5F0F</td>
<td><code>default, button</code></td>
<td><code>default</code></td>
</tr>
<tr>
<td><code>[change]</code></td>
<td>\u503C\u53D8\u66F4\u4E8B\u4EF6</td>
<td><code>(res: SFValue) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[buttonStyle]</code></td>
<td>RadioButton \u7684\u98CE\u683C\u6837\u5F0F\uFF0C\u76EE\u524D\u6709\u63CF\u8FB9\u548C\u586B\u8272\u4E24\u79CD\u98CE\u683C</td>
<td><code>&#39;outline&#39;\uFF5C&#39;solid&#39;</code></td>
<td><code>&#39;outline&#39;</code></td>
</tr>
</tbody></table>
`,toc:[{id:"api",title:"API",children:[{id:"schema_\u5C5E\u6027",title:"schema \u5C5E\u6027"},{id:"ui_\u5C5E\u6027",title:"ui \u5C5E\u6027"}]}],raw:"---\ntitle: radio\nsubtitle: \u5355\u9009\u6846\ntype: Widgets\n---\n\n\u5355\u9009\u6846\u3002\n\n## API\n\n### schema \u5C5E\u6027\n\n| \u53C2\u6570         | \u8BF4\u660E     | \u7C7B\u578B                 | \u9ED8\u8BA4\u503C |\n|--------------|--------|----------------------|--------|\n| `[enum]`     | \u6570\u636E\u6E90   | `SFSchemaEnumType[]` | -      |\n| `[readOnly]` | \u7981\u7528\u72B6\u6001 | `boolean`            | -      |\n\n### ui \u5C5E\u6027\n\n| \u53C2\u6570          | \u8BF4\u660E               | \u7C7B\u578B                                   | \u9ED8\u8BA4\u503C    |\n|---------------|------------------|----------------------------------------|-----------|\n| `[asyncData]` | \u5F02\u6B65\u6570\u636E\u6E90         | `() => Observable<SFSchemaEnumType[]>` | -         |\n| `[size]`      | \u5927\u5C0F\uFF0C\u7B49\u540C `nzSize` | `string`                               | -         |\n| `[styleType]` | radio \u7684\u6837\u5F0F       | `default, button`                      | `default` |\n| `[change]`    | \u503C\u53D8\u66F4\u4E8B\u4EF6         | `(res: SFValue) => void`               | -         |\n| `[buttonStyle]` | RadioButton \u7684\u98CE\u683C\u6837\u5F0F\uFF0C\u76EE\u524D\u6709\u63CF\u8FB9\u548C\u586B\u8272\u4E24\u79CD\u98CE\u683C | `'outline'\uFF5C'solid'` | `'outline'` |"}}};codes=[{id:"form-radio-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, inject } from '@angular/core';
import { of, delay } from 'rxjs';

import { DelonFormModule, SFRadioWidgetSchema, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-radio-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)" /> \`,
  imports: [DelonFormModule]
})
export class FormRadioSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      btn: {
        type: 'string',
        title: 'Button',
        enum: ['A', 'B', 'C'],
        ui: {
          widget: 'radio',
          styleType: 'button',
          buttonStyle: 'solid'
        } as SFRadioWidgetSchema,
        default: 'A'
      },
      // \u5F02\u6B65\u6570\u636E
      async: {
        type: 'string',
        title: 'Async',
        ui: {
          widget: 'radio',
          asyncData: () =>
            of([
              { label: '\u7537', value: 'M' },
              { label: '\u5973', value: 'F' },
              { label: '\u672A\u77E5', value: 'N' }
            ]).pipe(delay(100)),
          change: console.log
        } as SFRadioWidgetSchema,
        default: 'N'
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/form/src/widgets/radio/demo/simple.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-radio"]],hostAttrs:[1,"d-block"],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-radio-simple"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id))},dependencies:[S,We,F,w,C],encapsulation:2})};var fn=["sf"],Ue=class o{msg=u(y);sf;asyncData=[{label:"\u8BA2\u5355\u72B6\u6001",group:!0,children:[{label:"\u5F85\u652F\u4ED8",value:"WAIT_BUYER_PAY"},{label:"\u5DF2\u652F\u4ED8",value:"TRADE_SUCCESS"},{label:"\u4EA4\u6613\u5B8C\u6210",value:"TRADE_FINISHED"}]}];delay=1200;schema={properties:{status:{type:"string",title:"\u72B6\u6001",enum:[{label:"\u5F85\u652F\u4ED8",value:"WAIT_BUYER_PAY",otherData:1},{label:"\u5DF2\u652F\u4ED8",value:"TRADE_SUCCESS"},{label:"\u4EA4\u6613\u5B8C\u6210",value:"TRADE_FINISHED"}],default:"WAIT_BUYER_PAY",ui:{widget:"select",change:(n,e)=>console.log(n,e)}},tags:{type:"string",title:"\u6807\u7B7E",enum:[{label:"\u5F85\u652F\u4ED8",value:"WAIT_BUYER_PAY"},{label:"\u5DF2\u652F\u4ED8",value:"TRADE_SUCCESS"},{label:"\u4EA4\u6613\u5B8C\u6210",value:"TRADE_FINISHED"}],ui:{widget:"select",mode:"tags"},default:null},async:{type:"string",title:"Async",default:"WAIT_BUYER_PAY",ui:{widget:"select",asyncData:()=>z(this.asyncData).pipe(x(this.delay))}},hide:{type:"string",title:"\u9690\u85CF\u9879",enum:[{label:"\u7B2C1\u4E2A",value:1},{label:"\u7B2C2\u4E2A",value:2,hide:!0},{label:"\u7B2C3\u4E2A(\u7B2C2\u4E2A\u88AB\u9690\u85CF\u4E86)",value:3}],default:1}}};submit(n){this.msg.success(JSON.stringify(n))}updateStatus(){let n=this.sf.getProperty("/status");n.schema.enum=["1","2","3"],n.widget.reset("2")}updateAsyncData(){this.delay=0,this.asyncData=[{label:"Order Status",group:!0,children:[{label:"Wait buyer pay",value:"WAIT_BUYER_PAY"},{label:"Trade success",value:"TRADE_SUCCESS"},{label:"Trade finished",value:"TRADE_FINISHED"}]}];let n="/async";this.sf.setValue(n,this.sf.getProperty(n)?.value)}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-select-simple"]],viewQuery:function(e,t){if(e&1&&_(fn,5),e&2){let s;N(s=T())&&(t.sf=s.first)}},decls:6,vars:1,consts:[["sf",""],[3,"formSubmit","schema"],["nz-button","",3,"click"]],template:function(e,t){e&1&&(a(0,"sf",1,0),l("formSubmit",function(p){return t.submit(p)}),i(),a(2,"button",2),l("click",function(){return t.updateStatus()}),D(3,"Update Status"),i(),a(4,"button",2),l("click",function(){return t.updateAsyncData()}),D(5,"Update async data"),i()),e&2&&d("schema",t.schema)},dependencies:[g,h,q,I,M,P],encapsulation:2})};var bn=["sf"],je=class o{msg=u(y);sf;data={province:"Zhejiang",city:"Ningbo"};cityData={Zhejiang:["Hangzhou","Ningbo","Wenzhou"],Jiangsu:["Nanjing","Suzhou","Zhenjiang"]};schema={properties:{province:{type:"string",title:"Province",ui:{widget:"select",asyncData:()=>z(["Zhejiang","Jiangsu"]).pipe(x(100),Wt(()=>this.updateCity(this.data.province,this.data.city))),change:n=>this.updateCity(n)}},city:{type:"string",title:"City",ui:{widget:"select"}}}};submit(n){this.msg.success(JSON.stringify(n))}updateCity(n,e=""){let t=this.sf.getProperty("/city"),s=this.cityData[n];t.schema.enum=s,t.widget.reset(e??s[0])}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-select-coordinate"]],viewQuery:function(e,t){if(e&1&&_(bn,5),e&2){let s;N(s=T())&&(t.sf=s.first)}},decls:2,vars:2,consts:[["sf",""],[3,"formSubmit","schema","formData"]],template:function(e,t){e&1&&(a(0,"sf",1,0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)("formData",t.data)},dependencies:[g,h],encapsulation:2})};var Sn=["sf"],vn=["dropdownRender"];function wn(o,n){if(o&1){let e=W();a(0,"sf",4,1),l("formSubmit",function(s){A(e);let p=E();return O(p.submit(s))}),i()}if(o&2){let e=E();d("schema",e.schema)}}function Fn(o,n){if(o&1){let e=W();m(0,"nz-divider"),a(1,"div",5),m(2,"input",6,2),a(4,"a",7),l("click",function(){A(e);let s=G(3),p=E();return O(p.addItem(s))}),m(5,"nz-icon",8),D(6," Add item"),i()()}}var Ve=class o{msg=u(y);sf;dropdownRender;schema;statusList=["1","2","3"];submit(n){this.msg.success(JSON.stringify(n))}ngOnInit(){this.schema={properties:{status:{type:"string",title:"\u72B6\u6001",enum:this.statusList,default:"1",ui:{widget:"select",dropdownRender:this.dropdownRender}}}}}addItem(n){this.statusList.push(n.value);let e=this.sf.getProperty("/status");e.schema.enum=this.statusList,this.sf.setValue("/status",n.value)}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-select-custom-dropdown-menu"]],viewQuery:function(e,t){if(e&1&&_(Sn,5)(vn,7),e&2){let s;N(s=T())&&(t.sf=s.first),N(s=T())&&(t.dropdownRender=s.first)}},decls:3,vars:1,consts:[["dropdownRender",""],["sf",""],["inputElement",""],[3,"schema"],[3,"formSubmit","schema"],[1,"container"],["type","text","nz-input",""],[1,"add-item",3,"click"],["nzType","plus"]],template:function(e,t){e&1&&(V(0,wn,2,1,"sf",3),R(1,Fn,7,0,"ng-template",null,0,B)),e&2&&L(t.schema?0:-1)},dependencies:[g,h,Xt,Zt,X,Z,Q,Y],styles:["nz-divider[_ngcontent-%COMP%]{margin:4px 0}.container[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;padding:8px}.add-item[_ngcontent-%COMP%]{flex:0 0 auto;padding:8px;display:block}"]})};var Le=class o{msg=u(y);http=u(K);schema={properties:{status:{type:"string",title:"\u7528\u6237",ui:{widget:"select",serverSearch:!0,searchDebounceTime:300,searchLoadingText:"\u641C\u7D22\u4E2D...",onSearch:n=>qt(this.http.get(`https://api.randomuser.me/?results=5&q=${n}`).pipe(Pt(e=>e.results.map(t=>({label:t.email,value:t.email})))))}}}};submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-select-search"]],decls:1,vars:1,consts:[[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)},dependencies:[g,h],encapsulation:2})};var Be=class o{item={name:"select",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"select",subtitle:"Select",order:6,description:"Select.",group:"Widgets",path:"packages/form/src/widgets/select/index.en-US.md",url:"/form/select/en"},text:`<p>Select.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[enum]</code></td>
<td>Data source</td>
<td><code>SFSchemaEnumType[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[readOnly]</code></td>
<td>Read only</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[asyncData]</code></td>
<td>Asynchronous static data source</td>
<td><code>() =&gt; Observable&lt;SFSchemaEnumType[]&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[size]</code></td>
<td>Size, equals to <code>nzSize</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[compareWith]</code></td>
<td>Same with <a href="https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection" target="_blank" rel="noopener">SelectControlValueAccessor</a></td>
<td><code>(o1: any, o2: any) =&gt; boolean</code></td>
<td><code>(o1: any, o2: any) =&gt; o1===o2</code></td>
</tr>
<tr>
<td><code>[placeholder]</code></td>
<td>Placeholder</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[autoClearSearchValue]</code></td>
<td>Whether clear search box when an option is selected, only valid when <code>mode</code> is <code>multiple</code> or <code>tags</code>.</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[allowClear]</code></td>
<td>Allow clear</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[clearValue]</code></td>
<td>Default value when cleared</td>
<td><code>any</code></td>
<td><code>undefined</code></td>
</tr>
<tr>
<td><code>[variant]</code></td>
<td>Variant</td>
<td><code>outlined,borderless,filled,underlined</code></td>
<td><code>outlined</code></td>
</tr>
<tr>
<td><code>[autoFocus]</code></td>
<td>Focused by default</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[dropdownClassName]</code></td>
<td>className property of dropdown list</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[dropdownMatchSelectWidth]</code></td>
<td>Dropdown list and select have same width</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[dropdownStyle]</code></td>
<td>style property of dropdown list</td>
<td><code>object</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[serverSearch]</code></td>
<td>Whether using server search, won&#39;t fliter nz-option in frontend when it is true</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[searchDebounceTime]</code></td>
<td>Debounce time of server search</td>
<td><code>number</code></td>
<td><code>300</code></td>
</tr>
<tr>
<td><code>[searchLoadingText]</code></td>
<td>Loading text of searching</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[onSearch]</code></td>
<td>Callback when search content is changed, parameter is search content, must return <code>Promise</code> object</td>
<td><code>(text: string) =&gt; Promise&lt;SFSchemaEnum[]&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[maxMultipleCount]</code></td>
<td>Maximum selected labels</td>
<td><code>number</code></td>
<td><code>Infinity</code></td>
</tr>
<tr>
<td><code>[mode]</code></td>
<td>Set mode for nz-select, suggest to add <code>default: null</code> for <code>tags</code>, otherwise, it would initialize an empty label.</td>
<td><code>multiple,tags,default</code></td>
<td><code>default</code></td>
</tr>
<tr>
<td><code>[notFoundContent]</code></td>
<td>Content when dropdown list is empty</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[showSearch]</code></td>
<td>Enable search for signle select mode</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[showArrow]</code></td>
<td>Whether to show the drop-down arrow</td>
<td><code>boolean</code></td>
<td><code>true</code>(for single select), <code>false</code>(for multiple select)</td>
</tr>
<tr>
<td><code>[tokenSeparators]</code></td>
<td>Separator for automatic word segmentation when it is tags and multiple mode</td>
<td><code>string[]</code></td>
<td><code>[]</code></td>
</tr>
<tr>
<td><code>[maxTagCount]</code></td>
<td>Maximum count of tag</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[change]</code></td>
<td>Callback function when selected nz-option is changed</td>
<td><code>(ngModel:any\u4E28any[], orgData: SFSchemaEnum\u4E28SFSchemaEnum[])=&gt;void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[openChange]</code></td>
<td>Callback function when dropdown list is open or closed</td>
<td><code>(status: boolean) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[scrollToBottom]</code></td>
<td>Callback function when dropdown list is scrolled to bottom, can be used to trigger dynamic load</td>
<td><code>() =&gt; void</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:"api",title:"API",children:[{id:"schema",title:"schema"},{id:"ui",title:"ui"}]}],raw:"---\ntitle: select\nsubtitle: Select\ntype: Widgets\norder: 6\n---\n\nSelect.\n\n## API\n\n### schema\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[enum]` | Data source | `SFSchemaEnumType[]` | - |\n| `[readOnly]` | Read only | `boolean` | - |\n\n### ui\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[asyncData]` | Asynchronous static data source | `() => Observable<SFSchemaEnumType[]>` | - |\n| `[size]` | Size, equals to `nzSize` | `string` | - |\n| `[compareWith]` | Same with [SelectControlValueAccessor](https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection) | `(o1: any, o2: any) => boolean` | `(o1: any, o2: any) => o1===o2` |\n| `[placeholder]` | Placeholder | `string` | - |\n| `[autoClearSearchValue]` | Whether clear search box when an option is selected, only valid when `mode` is `multiple` or `tags`. | `boolean` | `true` |\n| `[allowClear]` | Allow clear | `boolean` | `false` |\n| `[clearValue]` | Default value when cleared | `any` | `undefined` |\n| `[variant]` | Variant | `outlined,borderless,filled,underlined` | `outlined` |\n| `[autoFocus]` | Focused by default | `boolean` | `false` |\n| `[dropdownClassName]` | className property of dropdown list | `string` | - |\n| `[dropdownMatchSelectWidth]` | Dropdown list and select have same width | `boolean` | `true` |\n| `[dropdownStyle]` | style property of dropdown list | `object` | - |\n| `[serverSearch]` | Whether using server search, won't fliter nz-option in frontend when it is true | `boolean` | `false` |\n| `[searchDebounceTime]` | Debounce time of server search | `number` | `300` |\n| `[searchLoadingText]` | Loading text of searching | `string` | - |\n| `[onSearch]` | Callback when search content is changed, parameter is search content, must return `Promise` object | `(text: string) => Promise<SFSchemaEnum[]>` | - |\n| `[maxMultipleCount]` | Maximum selected labels | `number` | `Infinity` |\n| `[mode]` | Set mode for nz-select, suggest to add `default: null` for `tags`, otherwise, it would initialize an empty label. | `multiple,tags,default` | `default` |\n| `[notFoundContent]` | Content when dropdown list is empty | `string` | - |\n| `[showSearch]` | Enable search for signle select mode | `boolean` | `false` |\n| `[showArrow]` | Whether to show the drop-down arrow | `boolean` | `true`(for single select), `false`(for multiple select) |\n| `[tokenSeparators]` | Separator for automatic word segmentation when it is tags and multiple mode | `string[]` | `[]` |\n| `[maxTagCount]` | Maximum count of tag | `number` | - |\n| `[change]` | Callback function when selected nz-option is changed | `(ngModel:any\u4E28any[], orgData: SFSchemaEnum\u4E28SFSchemaEnum[])=>void` | - |\n| `[openChange]` | Callback function when dropdown list is open or closed | `(status: boolean) => void` | - |\n| `[scrollToBottom]` | Callback function when dropdown list is scrolled to bottom, can be used to trigger dynamic load | `() => void` | - |"},"zh-CN":{meta:{title:"select",subtitle:"\u9009\u62E9\u5668",order:6,description:"\u4E0B\u62C9\u9009\u62E9\u5668\u3002",group:"Widgets",path:"packages/form/src/widgets/select/index.zh-CN.md",url:"/form/select/zh"},text:`<p>\u4E0B\u62C9\u9009\u62E9\u5668\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema_\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema_\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[enum]</code></td>
<td>\u6570\u636E\u6E90</td>
<td><code>SFSchemaEnumType[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[readOnly]</code></td>
<td>\u7981\u7528\u72B6\u6001</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui_\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui_\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[asyncData]</code></td>
<td>\u5F02\u6B65\u6570\u636E\u6E90</td>
<td><code>() =&gt; Observable&lt;SFSchemaEnumType[]&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[size]</code></td>
<td>\u5927\u5C0F\uFF0C\u7B49\u540C <code>nzSize</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[compareWith]</code></td>
<td>\u4E0E <a href="https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection" target="_blank" rel="noopener">SelectControlValueAccessor</a> \u76F8\u540C</td>
<td><code>(o1: any, o2: any) =&gt; boolean</code></td>
<td><code>(o1: any, o2: any) =&gt; o1===o2</code></td>
</tr>
<tr>
<td><code>[placeholder]</code></td>
<td>\u5728\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u8BAF\u606F</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[autoClearSearchValue]</code></td>
<td>\u662F\u5426\u5728\u9009\u4E2D\u9879\u540E\u6E05\u7A7A\u641C\u7D22\u6846\uFF0C\u53EA\u5728 <code>mode</code> \u4E3A <code>multiple</code> \u6216 <code>tags</code> \u65F6\u6709\u6548\u3002</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[allowClear]</code></td>
<td>\u652F\u6301\u6E05\u9664</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[clearValue]</code></td>
<td>\u6E05\u7A7A\u65F6\u9ED8\u8BA4\u503C</td>
<td><code>any</code></td>
<td><code>undefined</code></td>
</tr>
<tr>
<td><code>[variant]</code></td>
<td>\u53D8\u4F53</td>
<td><code>outlined,borderless,filled,underlined</code></td>
<td><code>outlined</code></td>
</tr>
<tr>
<td><code>[autoFocus]</code></td>
<td>\u9ED8\u8BA4\u83B7\u53D6\u7126\u70B9</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[dropdownClassName]</code></td>
<td>\u4E0B\u62C9\u83DC\u5355\u7684 className \u5C5E\u6027</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[dropdownMatchSelectWidth]</code></td>
<td>\u4E0B\u62C9\u83DC\u5355\u548C\u9009\u62E9\u5668\u540C\u5BBD</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[dropdownStyle]</code></td>
<td>\u4E0B\u62C9\u83DC\u5355\u7684 style \u5C5E\u6027</td>
<td><code>object</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[serverSearch]</code></td>
<td>\u662F\u5426\u4F7F\u7528\u670D\u52A1\u7AEF\u641C\u7D22\uFF0C\u5F53\u4E3A true \u65F6\uFF0C\u5C06\u4E0D\u518D\u5728\u524D\u7AEF\u5BF9 nz-option \u8FDB\u884C\u8FC7\u6EE4</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[searchDebounceTime]</code></td>
<td>\u641C\u7D22\u6296\u52A8\u65F6\u95F4</td>
<td><code>number</code></td>
<td><code>300</code></td>
</tr>
<tr>
<td><code>[searchLoadingText]</code></td>
<td>\u641C\u7D22\u52A0\u8F7D\u4E2D\u6587\u672C</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[onSearch]</code></td>
<td>\u641C\u7D22\u5185\u5BB9\u53D8\u5316\u56DE\u8C03\u51FD\u6570\uFF0C\u53C2\u6570\u4E3A\u641C\u7D22\u5185\u5BB9\uFF0C\u5FC5\u987B\u8FD4\u56DE <code>Promise</code> \u5BF9\u8C61</td>
<td><code>(text: string) =&gt; Promise&lt;SFSchemaEnum[]&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[maxMultipleCount]</code></td>
<td>\u6700\u591A\u9009\u4E2D\u591A\u5C11\u4E2A\u6807\u7B7E</td>
<td><code>number</code></td>
<td><code>Infinity</code></td>
</tr>
<tr>
<td><code>[mode]</code></td>
<td>\u8BBE\u7F6E nz-select \u7684\u6A21\u5F0F\uFF0C<code>tags</code> \u5EFA\u8BAE\u589E\u52A0 <code>default: null</code>\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u9047\u5230\u521D\u59CB\u5316\u6709\u4E00\u4E2A\u7A7A\u7684\u6807\u7B7E\u3002</td>
<td><code>multiple,tags,default</code></td>
<td><code>default</code></td>
</tr>
<tr>
<td><code>[notFoundContent]</code></td>
<td>\u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[showSearch]</code></td>
<td>\u4F7F\u5355\u9009\u6A21\u5F0F\u53EF\u641C\u7D22</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[showArrow]</code></td>
<td>\u662F\u5426\u663E\u793A\u4E0B\u62C9\u5C0F\u7BAD\u5934</td>
<td><code>boolean</code></td>
<td>\u5355\u9009\u4E3A <code>true</code>\uFF0C\u591A\u9009\u4E3A <code>false</code></td>
</tr>
<tr>
<td><code>[tokenSeparators]</code></td>
<td>\u5728 tags \u548C multiple \u6A21\u5F0F\u4E0B\u81EA\u52A8\u5206\u8BCD\u7684\u5206\u9694\u7B26</td>
<td><code>string[]</code></td>
<td><code>[]</code></td>
</tr>
<tr>
<td><code>[maxTagCount]</code></td>
<td>\u6700\u591A\u663E\u793A\u591A\u5C11\u4E2A tag</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[change]</code></td>
<td>\u9009\u4E2D\u7684 nz-option \u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u8C03\u7528\u6B64\u51FD\u6570</td>
<td><code>(ngModel:any\u4E28any[], orgData: SFSchemaEnum\u4E28SFSchemaEnum[])=&gt;void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[openChange]</code></td>
<td>\u4E0B\u62C9\u83DC\u5355\u6253\u5F00\u5173\u95ED\u56DE\u8C03\u51FD\u6570</td>
<td><code>(status: boolean) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[scrollToBottom]</code></td>
<td>\u4E0B\u62C9\u83DC\u5355\u6EDA\u52A8\u5230\u5E95\u90E8\u56DE\u8C03\uFF0C\u53EF\u7528\u4E8E\u4F5C\u4E3A\u52A8\u6001\u52A0\u8F7D\u7684\u89E6\u53D1\u6761\u4EF6</td>
<td><code>() =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[customTemplate]</code></td>
<td>\u81EA\u5B9A\u4E49\u9009\u62E9\u6846\u7684Template\u5185\u5BB9</td>
<td><code>TemplateRef&lt;&#123; $implicit: NzOptionComponent &#125;&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[suffixIcon]</code></td>
<td>\u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807</td>
<td><code>TemplateRef&lt;any&gt;, string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[removeIcon]</code></td>
<td>\u81EA\u5B9A\u4E49\u7684\u591A\u9009\u6846\u6E05\u9664\u56FE\u6807</td>
<td><code>TemplateRef&lt;any&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[clearIcon]</code></td>
<td>\u81EA\u5B9A\u4E49\u7684\u591A\u9009\u6846\u6E05\u7A7A\u56FE\u6807</td>
<td><code>TemplateRef&lt;any&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[menuItemSelectedIcon]</code></td>
<td>\u81EA\u5B9A\u4E49\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE\u56FE\u6807</td>
<td><code>TemplateRef&lt;any&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[maxTagPlaceholder]</code></td>
<td>\u9690\u85CF tag \u65F6\u663E\u793A\u7684\u5185\u5BB9</td>
<td><code>TemplateRef&lt;&#123; $implicit: any[] &#125;&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[optionHeightPx]</code></td>
<td>\u4E0B\u62C9\u83DC\u5355\u4E2D\u6BCF\u4E2A Option \u7684\u9AD8\u5EA6</td>
<td><code>number</code></td>
<td><code>32</code></td>
</tr>
<tr>
<td><code>[optionOverflowSize]</code></td>
<td>\u4E0B\u62C9\u83DC\u5355\u4E2D\u6700\u591A\u5C55\u793A\u7684 Option \u4E2A\u6570\uFF0C\u8D85\u51FA\u90E8\u5206\u6EDA\u52A8</td>
<td><code>number</code></td>
<td><code>8</code></td>
</tr>
</tbody></table>
`,toc:[{id:"api",title:"API",children:[{id:"schema_\u5C5E\u6027",title:"schema \u5C5E\u6027"},{id:"ui_\u5C5E\u6027",title:"ui \u5C5E\u6027"}]}],raw:"---\ntitle: select\nsubtitle: \u9009\u62E9\u5668\ntype: Widgets\norder: 6\n---\n\n\u4E0B\u62C9\u9009\u62E9\u5668\u3002\n\n## API\n\n### schema \u5C5E\u6027\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[enum]` | \u6570\u636E\u6E90 | `SFSchemaEnumType[]` | - |\n| `[readOnly]` | \u7981\u7528\u72B6\u6001 | `boolean` | - |\n\n### ui \u5C5E\u6027\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[asyncData]` | \u5F02\u6B65\u6570\u636E\u6E90 | `() => Observable<SFSchemaEnumType[]>` | - |\n| `[size]` | \u5927\u5C0F\uFF0C\u7B49\u540C `nzSize` | `string` | - |\n| `[compareWith]` | \u4E0E [SelectControlValueAccessor](https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection) \u76F8\u540C | `(o1: any, o2: any) => boolean` | `(o1: any, o2: any) => o1===o2` |\n| `[placeholder]` | \u5728\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u8BAF\u606F | `string` | - |\n| `[autoClearSearchValue]` | \u662F\u5426\u5728\u9009\u4E2D\u9879\u540E\u6E05\u7A7A\u641C\u7D22\u6846\uFF0C\u53EA\u5728 `mode` \u4E3A `multiple` \u6216 `tags` \u65F6\u6709\u6548\u3002 | `boolean` | `true` |\n| `[allowClear]` | \u652F\u6301\u6E05\u9664 | `boolean` | `false` |\n| `[clearValue]` | \u6E05\u7A7A\u65F6\u9ED8\u8BA4\u503C | `any` | `undefined` |\n| `[variant]` | \u53D8\u4F53 | `outlined,borderless,filled,underlined` | `outlined` |\n| `[autoFocus]` | \u9ED8\u8BA4\u83B7\u53D6\u7126\u70B9 | `boolean` | `false` |\n| `[dropdownClassName]` | \u4E0B\u62C9\u83DC\u5355\u7684 className \u5C5E\u6027 | `string` | - |\n| `[dropdownMatchSelectWidth]` | \u4E0B\u62C9\u83DC\u5355\u548C\u9009\u62E9\u5668\u540C\u5BBD | `boolean` | `true` |\n| `[dropdownStyle]` | \u4E0B\u62C9\u83DC\u5355\u7684 style \u5C5E\u6027 | `object` | - |\n| `[serverSearch]` | \u662F\u5426\u4F7F\u7528\u670D\u52A1\u7AEF\u641C\u7D22\uFF0C\u5F53\u4E3A true \u65F6\uFF0C\u5C06\u4E0D\u518D\u5728\u524D\u7AEF\u5BF9 nz-option \u8FDB\u884C\u8FC7\u6EE4 | `boolean` | `false` |\n| `[searchDebounceTime]` | \u641C\u7D22\u6296\u52A8\u65F6\u95F4 | `number` | `300` |\n| `[searchLoadingText]` | \u641C\u7D22\u52A0\u8F7D\u4E2D\u6587\u672C | `string` | - |\n| `[onSearch]` | \u641C\u7D22\u5185\u5BB9\u53D8\u5316\u56DE\u8C03\u51FD\u6570\uFF0C\u53C2\u6570\u4E3A\u641C\u7D22\u5185\u5BB9\uFF0C\u5FC5\u987B\u8FD4\u56DE `Promise` \u5BF9\u8C61 | `(text: string) => Promise<SFSchemaEnum[]>` | - |\n| `[maxMultipleCount]` | \u6700\u591A\u9009\u4E2D\u591A\u5C11\u4E2A\u6807\u7B7E | `number` | `Infinity` |\n| `[mode]` | \u8BBE\u7F6E nz-select \u7684\u6A21\u5F0F\uFF0C`tags` \u5EFA\u8BAE\u589E\u52A0 `default: null`\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u9047\u5230\u521D\u59CB\u5316\u6709\u4E00\u4E2A\u7A7A\u7684\u6807\u7B7E\u3002 | `multiple,tags,default` | `default` |\n| `[notFoundContent]` | \u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9 | `string` | - |\n| `[showSearch]` | \u4F7F\u5355\u9009\u6A21\u5F0F\u53EF\u641C\u7D22 | `boolean` | `false` |\n| `[showArrow]` | \u662F\u5426\u663E\u793A\u4E0B\u62C9\u5C0F\u7BAD\u5934 | `boolean` | \u5355\u9009\u4E3A `true`\uFF0C\u591A\u9009\u4E3A `false` |\n| `[tokenSeparators]` | \u5728 tags \u548C multiple \u6A21\u5F0F\u4E0B\u81EA\u52A8\u5206\u8BCD\u7684\u5206\u9694\u7B26 | `string[]` | `[]` |\n| `[maxTagCount]` | \u6700\u591A\u663E\u793A\u591A\u5C11\u4E2A tag | `number` | - |\n| `[change]` | \u9009\u4E2D\u7684 nz-option \u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u8C03\u7528\u6B64\u51FD\u6570 | `(ngModel:any\u4E28any[], orgData: SFSchemaEnum\u4E28SFSchemaEnum[])=>void` | - |\n| `[openChange]` | \u4E0B\u62C9\u83DC\u5355\u6253\u5F00\u5173\u95ED\u56DE\u8C03\u51FD\u6570 | `(status: boolean) => void` | - |\n| `[scrollToBottom]` | \u4E0B\u62C9\u83DC\u5355\u6EDA\u52A8\u5230\u5E95\u90E8\u56DE\u8C03\uFF0C\u53EF\u7528\u4E8E\u4F5C\u4E3A\u52A8\u6001\u52A0\u8F7D\u7684\u89E6\u53D1\u6761\u4EF6 | `() => void` | - |\n| `[customTemplate]` | \u81EA\u5B9A\u4E49\u9009\u62E9\u6846\u7684Template\u5185\u5BB9 | `TemplateRef<{ $implicit: NzOptionComponent }>` | - |\n| `[suffixIcon]` | \u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807 | `TemplateRef<any>, string` | - |\n| `[removeIcon]` | \u81EA\u5B9A\u4E49\u7684\u591A\u9009\u6846\u6E05\u9664\u56FE\u6807 | `TemplateRef<any>` | - |\n| `[clearIcon]` | \u81EA\u5B9A\u4E49\u7684\u591A\u9009\u6846\u6E05\u7A7A\u56FE\u6807 | `TemplateRef<any>` | - |\n| `[menuItemSelectedIcon]` | \u81EA\u5B9A\u4E49\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE\u56FE\u6807 | `TemplateRef<any>` | - |\n| `[maxTagPlaceholder]` | \u9690\u85CF tag \u65F6\u663E\u793A\u7684\u5185\u5BB9 | `TemplateRef<{ $implicit: any[] }>` | - |\n| `[optionHeightPx]` | \u4E0B\u62C9\u83DC\u5355\u4E2D\u6BCF\u4E2A Option \u7684\u9AD8\u5EA6 | `number` | `32` |\n| `[optionOverflowSize]` | \u4E0B\u62C9\u83DC\u5355\u4E2D\u6700\u591A\u5C55\u793A\u7684 Option \u4E2A\u6570\uFF0C\u8D85\u51FA\u90E8\u5206\u6EDA\u52A8 | `number` | `8` |"}}};codes=[{id:"form-select-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, ViewChild, inject } from '@angular/core';
import { of, delay } from 'rxjs';

import { DelonFormModule, SFComponent, SFSchema, SFSelectWidgetSchema } from '@delon/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-select-simple',
  template: \`
    <sf #sf [schema]="schema" (formSubmit)="submit($event)" />
    <button nz-button (click)="updateStatus()">Update Status</button>
    <button nz-button (click)="updateAsyncData()">Update async data</button>
  \`,
  imports: [DelonFormModule, NzButtonModule]
})
export class FormSelectSimple {
  private readonly msg = inject(NzMessageService);
  @ViewChild('sf', { static: false }) private sf!: SFComponent;
  asyncData = [
    {
      label: '\u8BA2\u5355\u72B6\u6001',
      group: true,
      children: [
        { label: '\u5F85\u652F\u4ED8', value: 'WAIT_BUYER_PAY' },
        { label: '\u5DF2\u652F\u4ED8', value: 'TRADE_SUCCESS' },
        { label: '\u4EA4\u6613\u5B8C\u6210', value: 'TRADE_FINISHED' }
      ]
    }
  ];
  delay = 1200;
  schema: SFSchema = {
    properties: {
      status: {
        type: 'string',
        title: '\u72B6\u6001',
        enum: [
          { label: '\u5F85\u652F\u4ED8', value: 'WAIT_BUYER_PAY', otherData: 1 },
          { label: '\u5DF2\u652F\u4ED8', value: 'TRADE_SUCCESS' },
          { label: '\u4EA4\u6613\u5B8C\u6210', value: 'TRADE_FINISHED' }
        ],
        default: 'WAIT_BUYER_PAY',
        ui: {
          widget: 'select',
          change: (value, orgData) => console.log(value, orgData)
        } as SFSelectWidgetSchema
      },
      // \u6807\u7B7E
      tags: {
        type: 'string',
        title: '\u6807\u7B7E',
        enum: [
          { label: '\u5F85\u652F\u4ED8', value: 'WAIT_BUYER_PAY' },
          { label: '\u5DF2\u652F\u4ED8', value: 'TRADE_SUCCESS' },
          { label: '\u4EA4\u6613\u5B8C\u6210', value: 'TRADE_FINISHED' }
        ],
        ui: {
          widget: 'select',
          mode: 'tags'
        } as SFSelectWidgetSchema,
        default: null
      },
      // \u5F02\u6B65\u6570\u636E
      async: {
        type: 'string',
        title: 'Async',
        default: 'WAIT_BUYER_PAY',
        ui: {
          widget: 'select',
          asyncData: () => of(this.asyncData).pipe(delay(this.delay))
        } as SFSelectWidgetSchema
      },
      hide: {
        type: 'string',
        title: '\u9690\u85CF\u9879',
        enum: [
          { label: '\u7B2C1\u4E2A', value: 1 },
          { label: '\u7B2C2\u4E2A', value: 2, hide: true },
          { label: '\u7B2C3\u4E2A(\u7B2C2\u4E2A\u88AB\u9690\u85CF\u4E86)', value: 3 }
        ],
        default: 1
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }

  updateStatus(): void {
    const statusProperty = this.sf.getProperty('/status')!;
    statusProperty.schema.enum = ['1', '2', '3'];
    statusProperty.widget.reset('2');
  }

  updateAsyncData(): void {
    this.delay = 0;
    this.asyncData = [
      {
        label: 'Order Status',
        group: true,
        children: [
          { label: 'Wait buyer pay', value: 'WAIT_BUYER_PAY' },
          { label: 'Trade success', value: 'TRADE_SUCCESS' },
          { label: 'Trade finished', value: 'TRADE_FINISHED' }
        ]
      }
    ];
    // Reset the value to make the element load data again
    const updatePath = '/async';
    this.sf.setValue(updatePath, this.sf.getProperty(updatePath)?.value);
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/form/src/widgets/select/demo/simple.md"},{id:"form-select-coordinate",name:"coordinate",title:{"zh-CN":"\u8054\u52A8","en-US":"coordinate"},code:`import { Component, ViewChild, inject } from '@angular/core';
import { of, delay, tap } from 'rxjs';

import { DelonFormModule, SFComponent, SFSchema, SFSelectWidgetSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-select-coordinate',
  template: \` <sf #sf [schema]="schema" [formData]="data" (formSubmit)="submit($event)" /> \`,
  imports: [DelonFormModule]
})
export class FormSelectCoordinate {
  private readonly msg = inject(NzMessageService);
  @ViewChild('sf', { static: false }) private sf!: SFComponent;
  data = {
    province: 'Zhejiang',
    city: 'Ningbo'
  };
  private cityData: { [place: string]: string[] } = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang']
  };
  schema: SFSchema = {
    properties: {
      province: {
        type: 'string',
        title: 'Province',
        ui: {
          widget: 'select',
          asyncData: () =>
            of(['Zhejiang', 'Jiangsu']).pipe(
              delay(100),
              tap(() => this.updateCity(this.data.province, this.data.city))
            ),
          change: i => this.updateCity(i)
        } as SFSelectWidgetSchema
      },
      city: {
        type: 'string',
        title: 'City',
        ui: {
          widget: 'select'
        } as SFSelectWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }

  private updateCity(province: string, city: string = ''): void {
    const cityProperty = this.sf.getProperty('/city')!;
    const items = this.cityData[province];
    cityProperty.schema.enum = items;
    cityProperty.widget.reset(city ?? items[0]);
  }
}`,order:1,type:"demo",summary:{"en-US":`<p>Coordinating the selection of provinces and cities is a common use case and demonstrates how selection can be coordinated.</p>
`,"zh-CN":`<p>\u7701\u5E02\u8054\u52A8\u662F\u5178\u578B\u7684\u4F8B\u5B50\u3002</p>
`},summary_raw:{"en-US":`Coordinating the selection of provinces and cities is a common use case and demonstrates how selection can be coordinated.
`,"zh-CN":`\u7701\u5E02\u8054\u52A8\u662F\u5178\u578B\u7684\u4F8B\u5B50\u3002
`},path:"packages/form/src/widgets/select/demo/coordinate.md"},{id:"form-select-custom-dropdown-menu",name:"custom-dropdown-menu",title:{"zh-CN":"\u6269\u5C55\u83DC\u5355","en-US":"Custom dropdown"},code:`import { Component, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';

import { DelonFormModule, SFComponent, SFSchema, SFSelectWidgetSchema } from '@delon/form';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-select-custom-dropdown-menu',
  template: \`
    @if (schema) {
      <sf #sf [schema]="schema" (formSubmit)="submit($event)" />
    }
    <ng-template #dropdownRender>
      <nz-divider />
      <div class="container">
        <input type="text" nz-input #inputElement />
        <a class="add-item" (click)="addItem(inputElement)"><nz-icon nzType="plus"/> Add item</a>
      </div>
    </ng-template>
  \`,
  styles: [
    \`
      nz-divider {
        margin: 4px 0;
      }
      .container {
        display: flex;
        flex-wrap: nowrap;
        padding: 8px;
      }
      input {
      }
      .add-item {
        flex: 0 0 auto;
        padding: 8px;
        display: block;
      }
    \`
  ],
  imports: [DelonFormModule, NzDividerModule, NzInputModule, NzIconModule]
})
export class FormSelectCustomDropdownMenu implements OnInit {
  private readonly msg = inject(NzMessageService);
  @ViewChild('sf', { static: false }) private sf!: SFComponent;
  @ViewChild('dropdownRender', { static: true }) private dropdownRender!: TemplateRef<void>;

  schema?: SFSchema;
  statusList: string[] = ['1', '2', '3'];

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }

  ngOnInit(): void {
    this.schema = {
      properties: {
        status: {
          type: 'string',
          title: '\u72B6\u6001',
          enum: this.statusList,
          default: '1',
          ui: {
            widget: 'select',
            dropdownRender: this.dropdownRender
          } as SFSelectWidgetSchema
        }
      }
    };
  }

  addItem(input: HTMLInputElement): void {
    this.statusList.push(input.value);
    const statusProperty = this.sf.getProperty('/status')!;
    statusProperty.schema.enum = this.statusList;
    this.sf.setValue('/status', input.value);
  }
}`,order:2,type:"demo",summary:{"en-US":`<p>Customize the dropdown menu via <code>dropdownRender</code>.</p>
`,"zh-CN":`<p>\u4F7F\u7528 <code>dropdownRender</code> \u5BF9\u4E0B\u62C9\u83DC\u5355\u8FDB\u884C\u81EA\u7531\u6269\u5C55\u3002</p>
`},summary_raw:{"en-US":"Customize the dropdown menu via `dropdownRender`.\n","zh-CN":"\u4F7F\u7528 `dropdownRender` \u5BF9\u4E0B\u62C9\u83DC\u5355\u8FDB\u884C\u81EA\u7531\u6269\u5C55\u3002\n"},path:"packages/form/src/widgets/select/demo/custom-dropdown-menu.md"},{id:"form-select-search",name:"search",title:{"zh-CN":"\u641C\u7D22\u7528\u6237","en-US":"Search and Select Users"},code:`import { Component, inject } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';

import { DelonFormModule, SFSchema, SFSchemaEnum, SFSelectWidgetSchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-select-search',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)" /> \`,
  imports: [DelonFormModule]
})
export class FormSelectSearch {
  private readonly msg = inject(NzMessageService);
  private readonly http = inject(_HttpClient);
  schema: SFSchema = {
    properties: {
      status: {
        type: 'string',
        title: '\u7528\u6237',
        ui: {
          widget: 'select',
          serverSearch: true,
          searchDebounceTime: 300,
          searchLoadingText: '\u641C\u7D22\u4E2D...',
          onSearch: q => {
            return lastValueFrom(
              this.http
                .get(\`https://api.randomuser.me/?results=5&q=\${q}\`)
                .pipe(
                  map(res =>
                    (res.results as NzSafeAny[]).map(i => ({ label: i.email, value: i.email }) as SFSchemaEnum)
                  )
                )
            );
          }
        } as SFSelectWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:3,type:"demo",summary:{"en-US":`<p>A complete multiple select sample with remote search, debounce fetch, ajax callback order flow, and loading state.</p>
`,"zh-CN":`<p>\u4E00\u4E2A\u5E26\u6709\u8FDC\u7A0B\u641C\u7D22\uFF0C\u8282\u6D41\u63A7\u5236\uFF0C\u8BF7\u6C42\u65F6\u5E8F\u63A7\u5236\uFF0C\u52A0\u8F7D\u72B6\u6001\u7684\u591A\u9009\u793A\u4F8B\u3002</p>
`},summary_raw:{"en-US":`A complete multiple select sample with remote search, debounce fetch, ajax callback order flow, and loading state.
`,"zh-CN":`\u4E00\u4E2A\u5E26\u6709\u8FDC\u7A0B\u641C\u7D22\uFF0C\u8282\u6D41\u63A7\u5236\uFF0C\u8BF7\u6C42\u65F6\u5E8F\u63A7\u5236\uFF0C\u52A0\u8F7D\u72B6\u6001\u7684\u591A\u9009\u793A\u4F8B\u3002
`},path:"packages/form/src/widgets/select/demo/search.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-select"]],hostAttrs:[1,"d-block"],decls:11,vars:11,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-select-simple"),i(),a(5,"code-box",3),m(6,"form-select-coordinate"),i(),a(7,"code-box",3),m(8,"form-select-custom-dropdown-menu"),i(),a(9,"code-box",3),m(10,"form-select-search"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id),c(2),d("item",t.codes[1]),v("id",t.codes[1].id),c(2),d("item",t.codes[2]),v("id",t.codes[2].id),c(2),d("item",t.codes[3]),v("id",t.codes[3].id))},dependencies:[S,Ue,je,Ve,Le,F,w,C],encapsulation:2})};var He=class o{msg=u(y);schema={properties:{name:{type:"string",title:"Name",ui:{addOnAfter:"RMB",placeholder:"RMB\u7ED3\u7B97",change:n=>console.log(n),focus:n=>console.log("focus",n),blur:n=>console.log("blur",n),enter:n=>console.log("enter",n)}},mobile:{type:"string",format:"mobile",title:"\u624B\u673A\u53F7"},sfz:{type:"string",format:"id-card",title:"\u8EAB\u4EFD\u8BC1\u53F7"},regex:{type:"string",pattern:"^[abc]+$",title:"\u6B63\u5219\u8868\u8FBE\u5F0F",ui:{placeholder:"^[abc]+$"}},color:{type:"string",format:"color",title:"\u989C\u8272",ui:{optionalHelp:{text:"\u6211\u662F\u6709\u80CC\u666F\u989C\u8272\u7684\u5594",bgColor:"#f50"}}}},required:["name"]};submit(n){this.msg.success(JSON.stringify(n))}valueChange(n){this.msg.info(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-string-simple"]],decls:1,vars:1,consts:[[3,"formValueChange","formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formValueChange",function(p){return t.valueChange(p)})("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)},dependencies:[g,h],encapsulation:2})};var Cn=["sf"],Je=class o{msg=u(y);http=u(K);sf;schema={properties:{q:{type:"string",title:"Key",ui:{changeDebounceTime:500,changeMap:n=>n?.length>0?this.http.get(`/users?q=${n}&ps=6`):z({list:[]}),change:n=>{if(n.list.length<=0)return;let e=this.sf.getProperty("/items");e.schema.enum=n.list.map(t=>t.email),e.widget.reset(n.list[0].email)}}},items:{type:"string",enum:["a","b","c"]}}};submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-string-time"]],viewQuery:function(e,t){if(e&1&&_(Cn,5),e&2){let s;N(s=T())&&(t.sf=s.first)}},decls:2,vars:1,consts:[["sf",""],[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"sf",1,0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)},dependencies:[g,h],encapsulation:2})};var Ge=class o{item={name:"string",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"string",subtitle:"Input",order:3,description:"Default widget, A basic widget for getting the user input is a text field.",group:"Widgets",path:"packages/form/src/widgets/string/index.en-US.md",url:"/form/string/en"},text:`<p>Default widget, A basic widget for getting the user input is a text field.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[maxLength]</code></td>
<td>Maximum length of the input</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[readOnly]</code></td>
<td>Whether to disable the state</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[size]</code></td>
<td>Size of the <code>nz-input</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[type]</code></td>
<td>type of the input, e.g: <code>password</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[placeholder]</code></td>
<td>placeholder of the input</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[variant]</code></td>
<td>Variant</td>
<td><code>outlined,borderless,filled,underlined</code></td>
<td><code>outlined</code></td>
</tr>
<tr>
<td><code>[autocomplete]</code></td>
<td>autocomplete of the input</td>
<td><code>HTML Attribute</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[autofocus]</code></td>
<td>autofocus of the input</td>
<td><code>HTML Attribute</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[addOnBefore]</code></td>
<td>The label text displayed before (on the left side of) the input field.</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[addOnAfter]</code></td>
<td>The label text displayed after (on the right side of) the input field.</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[addOnBeforeIcon]</code></td>
<td>The label icon&#39;s ngClass displayed before.</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[addOnAfterIcon]</code></td>
<td>The label icon&#39;s ngClass displayed after.</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[prefix]</code></td>
<td>The prefix icon for the Input.</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[prefixIcon]</code></td>
<td>The prefix icon&#39;s ngClass for the Input.</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[suffix]</code></td>
<td>The suffix icon for the Input.</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[suffixIcon]</code></td>
<td>The suffix icon&#39;s ngClass for the Input.</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[changeDebounceTime]</code></td>
<td><code>change</code> event throttling and sequence control threshold</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[changeMap]</code></td>
<td>Convert data, equivalent to <code>switchMap</code> operation</td>
<td><code>(val: string) =&gt; Observable&lt;any&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[change]</code></td>
<td>The content event for the Input.</td>
<td><code>(val: string) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[focus]</code></td>
<td>The focus event for the Input.</td>
<td><code>(e: FocusEvent) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[blur]</code></td>
<td>The blur event for the Input.</td>
<td><code>(e: FocusEvent) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[enter]</code></td>
<td>The enter event for the Input.</td>
<td><code>(e: KeyboardEvent) =&gt; void</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:"api",title:"API",children:[{id:"schema",title:"schema"},{id:"ui",title:"ui"}]}],raw:"---\ntitle: string\nsubtitle: Input\ntype: Widgets\norder: 3\n---\n\nDefault widget, A basic widget for getting the user input is a text field.\n\n## API\n\n### schema\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[maxLength]` | Maximum length of the input | `number` | - |\n| `[readOnly]` | Whether to disable the state | `boolean` | - |\n\n### ui\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[size]` | Size of the `nz-input` | `string` | - |\n| `[type]` | type of the input, e.g: `password` | `string` | - |\n| `[placeholder]` | placeholder of the input | `string` | - |\n| `[variant]` | Variant | `outlined,borderless,filled,underlined` | `outlined` |\n| `[autocomplete]` | autocomplete of the input | `HTML Attribute` | - |\n| `[autofocus]` | autofocus of the input | `HTML Attribute` | - |\n| `[addOnBefore]` | The label text displayed before (on the left side of) the input field. | `string` | - |\n| `[addOnAfter]` | The label text displayed after (on the right side of) the input field. | `string` | - |\n| `[addOnBeforeIcon]` | The label icon's ngClass displayed before. | `string` | - |\n| `[addOnAfterIcon]` | The label icon's ngClass displayed after. | `string` | - |\n| `[prefix]` | The prefix icon for the Input. | `string` | - |\n| `[prefixIcon]` | The prefix icon's ngClass for the Input. | `string` | - |\n| `[suffix]` | The suffix icon for the Input. | `string` | - |\n| `[suffixIcon]` | The suffix icon's ngClass for the Input. | `string` | - |\n| `[changeDebounceTime]` | `change` event throttling and sequence control threshold | `number` | - |\n| `[changeMap]` | Convert data, equivalent to `switchMap` operation | `(val: string) => Observable<any>` | - |\n| `[change]` | The content event for the Input. | `(val: string) => void` | - |\n| `[focus]` | The focus event for the Input. | `(e: FocusEvent) => void` | - |\n| `[blur]` | The blur event for the Input. | `(e: FocusEvent) => void` | - |\n| `[enter]` | The enter event for the Input. | `(e: KeyboardEvent) => void` | - |"},"zh-CN":{meta:{title:"string",subtitle:"\u6587\u672C\u6846",order:3,description:"\u9ED8\u8BA4\u5C0F\u90E8\u4EF6\uFF0C\u4E00\u822C\u7528\u4E8E\u5B57\u7B26\u4E32\u5143\u7D20\u3002",group:"Widgets",path:"packages/form/src/widgets/string/index.zh-CN.md",url:"/form/string/zh"},text:`<p>\u9ED8\u8BA4\u5C0F\u90E8\u4EF6\uFF0C\u4E00\u822C\u7528\u4E8E\u5B57\u7B26\u4E32\u5143\u7D20\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema_\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema_\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[maxLength]</code></td>
<td>\u8868\u5355\u6700\u5927\u957F\u5EA6</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[readOnly]</code></td>
<td>\u7981\u7528\u72B6\u6001</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui_\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui_\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table>
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
<td>\u7B49\u540C input \u7684 <code>type</code> \u503C\uFF0C\u4F8B\u5982\uFF1A<code>password</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[placeholder]</code></td>
<td>\u5728\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u8BAF\u606F</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[variant]</code></td>
<td>\u53D8\u4F53</td>
<td><code>outlined,borderless,filled,underlined</code></td>
<td><code>outlined</code></td>
</tr>
<tr>
<td><code>[autocomplete]</code></td>
<td>\u81EA\u52A8\u5B8C\u6210\u529F\u80FD\u7684\u8868\u5355</td>
<td><code>HTML Attribute</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[autofocus]</code></td>
<td>\u5F53\u9875\u9762\u52A0\u8F7D\u65F6\u83B7\u5F97\u7126\u70B9</td>
<td><code>HTML Attribute</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[addOnBefore]</code></td>
<td>\u524D\u7F6E\u6807\u7B7E\uFF0C\u7B49\u540C <code>nzAddOnBefore</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[addOnAfter]</code></td>
<td>\u540E\u7F6E\u6807\u7B7E\uFF0C\u7B49\u540C <code>nzAddOnAfter</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[addOnBeforeIcon]</code></td>
<td>\u524D\u7F6EIcon\uFF0C\u7B49\u540C <code>nzAddOnBeforeIcon</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[addOnAfterIcon]</code></td>
<td>\u540E\u7F6EIcon\uFF0C\u7B49\u540C <code>nzAddOnAfterIcon</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[prefix]</code></td>
<td>\u5E26\u6709\u524D\u7F00\u56FE\u6807\u7684 input\uFF0C\u7B49\u540C <code>nzPrefix</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[prefixIcon]</code></td>
<td>\u524D\u7F00\u56FE\u6807\uFF0C\u7B49\u540C <code>nzPrefixIcon</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[suffix]</code></td>
<td>\u5E26\u6709\u540E\u7F00\u56FE\u6807\u7684 input\uFF0C\u7B49\u540C <code>nzSuffix</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[suffixIcon]</code></td>
<td>\u540E\u7F00\u56FE\u6807\uFF0C\u7B49\u540C <code>nzSuffixIcon</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[changeDebounceTime]</code></td>
<td><code>change</code> \u4E8B\u4EF6\u8282\u6D41\u4E0E\u987A\u5E8F\u63A7\u5236\u7684\u9600\u503C</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[changeMap]</code></td>
<td>\u8F6C\u6362\u6570\u636E\uFF0C\u76F8\u5F53\u4E8E <code>switchMap</code> \u64CD\u4F5C</td>
<td><code>(val: string) =&gt; Observable&lt;any&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[change]</code></td>
<td>\u5185\u5BB9\u53D8\u66F4\u4E8B\u4EF6</td>
<td><code>(val: string) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[focus]</code></td>
<td>\u7126\u70B9\u4E8B\u4EF6</td>
<td><code>(e: FocusEvent) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[blur]</code></td>
<td>\u5931\u7126\u4E8B\u4EF6</td>
<td><code>(e: FocusEvent) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[enter]</code></td>
<td>\u56DE\u8F66\u4E8B\u4EF6</td>
<td><code>(e: KeyboardEvent) =&gt; void</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:"api",title:"API",children:[{id:"schema_\u5C5E\u6027",title:"schema \u5C5E\u6027"},{id:"ui_\u5C5E\u6027",title:"ui \u5C5E\u6027"}]}],raw:"---\ntitle: string\nsubtitle: \u6587\u672C\u6846\ntype: Widgets\norder: 3\n---\n\n\u9ED8\u8BA4\u5C0F\u90E8\u4EF6\uFF0C\u4E00\u822C\u7528\u4E8E\u5B57\u7B26\u4E32\u5143\u7D20\u3002\n\n## API\n\n### schema \u5C5E\u6027\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[maxLength]` | \u8868\u5355\u6700\u5927\u957F\u5EA6 | `number` | - |\n| `[readOnly]` | \u7981\u7528\u72B6\u6001 | `boolean` | - |\n\n### ui \u5C5E\u6027\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[type]` | \u7B49\u540C input \u7684 `type` \u503C\uFF0C\u4F8B\u5982\uFF1A`password` | `string` | - |\n| `[placeholder]` | \u5728\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u8BAF\u606F | `string` | - |\n| `[variant]` | \u53D8\u4F53 | `outlined,borderless,filled,underlined` | `outlined` |\n| `[autocomplete]` | \u81EA\u52A8\u5B8C\u6210\u529F\u80FD\u7684\u8868\u5355 | `HTML Attribute` | - |\n| `[autofocus]` | \u5F53\u9875\u9762\u52A0\u8F7D\u65F6\u83B7\u5F97\u7126\u70B9 | `HTML Attribute` | - |\n| `[addOnBefore]` | \u524D\u7F6E\u6807\u7B7E\uFF0C\u7B49\u540C `nzAddOnBefore` | `string` | - |\n| `[addOnAfter]` | \u540E\u7F6E\u6807\u7B7E\uFF0C\u7B49\u540C `nzAddOnAfter` | `string` | - |\n| `[addOnBeforeIcon]` | \u524D\u7F6EIcon\uFF0C\u7B49\u540C `nzAddOnBeforeIcon` | `string` | - |\n| `[addOnAfterIcon]` | \u540E\u7F6EIcon\uFF0C\u7B49\u540C `nzAddOnAfterIcon` | `string` | - |\n| `[prefix]` | \u5E26\u6709\u524D\u7F00\u56FE\u6807\u7684 input\uFF0C\u7B49\u540C `nzPrefix` | `string` | - |\n| `[prefixIcon]` | \u524D\u7F00\u56FE\u6807\uFF0C\u7B49\u540C `nzPrefixIcon` | `string` | - |\n| `[suffix]` | \u5E26\u6709\u540E\u7F00\u56FE\u6807\u7684 input\uFF0C\u7B49\u540C `nzSuffix` | `string` | - |\n| `[suffixIcon]` | \u540E\u7F00\u56FE\u6807\uFF0C\u7B49\u540C `nzSuffixIcon` | `string` | - |\n| `[changeDebounceTime]` | `change` \u4E8B\u4EF6\u8282\u6D41\u4E0E\u987A\u5E8F\u63A7\u5236\u7684\u9600\u503C | `number` | - |\n| `[changeMap]` | \u8F6C\u6362\u6570\u636E\uFF0C\u76F8\u5F53\u4E8E `switchMap` \u64CD\u4F5C | `(val: string) => Observable<any>` | - |\n| `[change]` | \u5185\u5BB9\u53D8\u66F4\u4E8B\u4EF6 | `(val: string) => void` | - |\n| `[focus]` | \u7126\u70B9\u4E8B\u4EF6 | `(e: FocusEvent) => void` | - |\n| `[blur]` | \u5931\u7126\u4E8B\u4EF6 | `(e: FocusEvent) => void` | - |\n| `[enter]` | \u56DE\u8F66\u4E8B\u4EF6 | `(e: KeyboardEvent) => void` | - |"}}};codes=[{id:"form-string-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema, SFStringWidgetSchema, SFValueChange } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-string-simple',
  template: \`<sf [schema]="schema" (formValueChange)="valueChange($event)" (formSubmit)="submit($event)" />\`,
  imports: [DelonFormModule]
})
export class FormStringSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: 'Name',
        ui: {
          addOnAfter: 'RMB',
          placeholder: 'RMB\u7ED3\u7B97',
          change: val => console.log(val),
          focus: e => console.log('focus', e),
          blur: e => console.log('blur', e),
          enter: e => console.log('enter', e)
        } as SFStringWidgetSchema
      },
      mobile: {
        type: 'string',
        format: 'mobile',
        title: '\u624B\u673A\u53F7'
      },
      sfz: {
        type: 'string',
        format: 'id-card',
        title: '\u8EAB\u4EFD\u8BC1\u53F7'
      },
      regex: {
        type: 'string',
        pattern: \`^[abc]+$\`,
        title: '\u6B63\u5219\u8868\u8FBE\u5F0F',
        ui: {
          placeholder: \`^[abc]+$\`
        } as SFStringWidgetSchema
      },
      color: {
        type: 'string',
        format: 'color',
        title: '\u989C\u8272',
        ui: {
          optionalHelp: {
            text: '\u6211\u662F\u6709\u80CC\u666F\u989C\u8272\u7684\u5594',
            bgColor: '#f50'
          }
        }
      }
    },
    required: ['name']
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }

  valueChange(res: SFValueChange): void {
    this.msg.info(JSON.stringify(res));
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/form/src/widgets/string/demo/simple.md"},{id:"form-string-time",name:"time",title:{"zh-CN":"\u6296\u52A8\u4E0E\u987A\u5E8F","en-US":"Debounce and order"},code:`import { Component, ViewChild, inject } from '@angular/core';
import { of } from 'rxjs';

import { DelonFormModule, SFComponent, SFSchema, SFStringWidgetSchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

interface UserItem {
  id: number;
  email: string;
}

@Component({
  selector: 'form-string-time',
  template: \`<sf #sf [schema]="schema" (formSubmit)="submit($event)" />\`,
  imports: [DelonFormModule]
})
export class FormStringTime {
  private readonly msg = inject(NzMessageService);
  private readonly http = inject(_HttpClient);
  @ViewChild('sf') private readonly sf!: SFComponent;

  schema: SFSchema = {
    properties: {
      q: {
        type: 'string',
        title: 'Key',
        ui: {
          changeDebounceTime: 500,
          changeMap: v => (v?.length > 0 ? this.http.get(\`/users?q=\${v}&ps=6\`) : of({ list: [] })),
          change: (res: { list: UserItem[] }) => {
            if (res.list.length <= 0) return;
            const property = this.sf.getProperty('/items')!;
            property.schema.enum = res.list.map(item => item.email);
            property.widget.reset(res.list[0].email);
          }
        } as SFStringWidgetSchema
      },
      items: {
        type: 'string',
        enum: ['a', 'b', 'c']
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Use <code>changeDebounceTime</code> to enable throttling control, use <code>changeMap</code> and <code>change</code> to debounce fetch and ajax callback order flow.</p>
`,"zh-CN":`<p>\u4F7F\u7528 <code>changeDebounceTime</code> \u542F\u7528\u8282\u6D41\u63A7\u5236\uFF0C\u5E76\u5229\u7528 <code>changeMap</code> \u548C <code>change</code> \u914D\u5408\u5B8C\u6210\u8282\u6D41\u3001\u8BF7\u6C42\u987A\u5E8F\u3002</p>
`},summary_raw:{"en-US":"Use `changeDebounceTime` to enable throttling control, use `changeMap` and `change` to debounce fetch and ajax callback order flow.\n","zh-CN":"\u4F7F\u7528 `changeDebounceTime` \u542F\u7528\u8282\u6D41\u63A7\u5236\uFF0C\u5E76\u5229\u7528 `changeMap` \u548C `change` \u914D\u5408\u5B8C\u6210\u8282\u6D41\u3001\u8BF7\u6C42\u987A\u5E8F\u3002\n"},path:"packages/form/src/widgets/string/demo/time.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-string"]],hostAttrs:[1,"d-block"],decls:7,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-string-simple"),i(),a(5,"code-box",3),m(6,"form-string-time"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id),c(2),d("item",t.codes[1]),v("id",t.codes[1].id))},dependencies:[S,He,Je,F,w,C],encapsulation:2})};var $e=class o{msg=u(y);loading=!1;schema={properties:{id1:{type:"number",ui:{widget:"text"}},id2:{type:"number",ui:{widget:"text",defaultText:"default text"}},name:{type:"string",title:"Name",ui:{addOnAfter:"RMB",placeholder:"RMB\u7ED3\u7B97"}}},required:["name"]};submit(n){this.loading=!0,setTimeout(()=>{this.loading=!1,this.msg.success(JSON.stringify(n))},1e3)}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-text-simple"]],decls:1,vars:2,consts:[[3,"formSubmit","schema","loading"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)("loading",t.loading)},dependencies:[g,h],encapsulation:2})};var Ye=class o{item={name:"text",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"text",subtitle:"Text",description:"Text in form.Forced remove of the required effectAuto render - if the defaultText value does not exist",group:"Widgets",order:0,path:"packages/form/src/widgets/text/index.en-US.md",url:"/form/text/en"},text:`<p>Text in form.</p>
<h2 id="rules"><a class="lake-link"><i data-anchor="rules"></i></a>Rules</h2><ul>
<li>Forced remove of the <code>required</code> effect</li>
<li>Auto render <code>-</code> if the <code>defaultText</code> value does not exist</li>
</ul>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[defaultText]</code></td>
<td>Default text of this item</td>
<td><code>string</code></td>
<td><code>-</code></td>
</tr>
<tr>
<td><code>[html]</code></td>
<td>Whether to support HTML</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
</tbody></table>
`,toc:[{id:"rules",title:"Rules"},{id:"api",title:"API",children:[{id:"ui",title:"ui"}]}],raw:`---
title: text
subtitle: Text
type: Widgets
---

Text in form.

## Rules

- Forced remove of the \`required\` effect
- Auto render \`-\` if the \`defaultText\` value does not exist

## API

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| \`[defaultText]\` | Default text of this item | \`string\` | \`-\` |
| \`[html]\` | Whether to support HTML | \`boolean\` | \`true\` |`},"zh-CN":{meta:{title:"text",subtitle:"\u6587\u672C",description:"\u4E00\u822C\u7528\u4E8E\u76F4\u63A5\u663E\u793A\u6587\u672C\u3002\u5F3A\u5236\u53D6\u6D88 required \u6548\u679C\u82E5\u4E0D\u6307\u5B9A defaultText \u503C\u4E0D\u5B58\u5728\u65F6\u81EA\u52A8\u6E32\u67D3 -",group:"Widgets",order:0,path:"packages/form/src/widgets/text/index.zh-CN.md",url:"/form/text/zh"},text:`<p>\u4E00\u822C\u7528\u4E8E\u76F4\u63A5\u663E\u793A\u6587\u672C\u3002</p>
<h2 id="\u89C4\u5219"><a class="lake-link"><i data-anchor="\u89C4\u5219"></i></a>\u89C4\u5219</h2><ul>
<li>\u5F3A\u5236\u53D6\u6D88 <code>required</code> \u6548\u679C</li>
<li>\u82E5\u4E0D\u6307\u5B9A <code>defaultText</code> \u503C\u4E0D\u5B58\u5728\u65F6\u81EA\u52A8\u6E32\u67D3 <code>-</code></li>
</ul>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="ui_\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui_\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[defaultText]</code></td>
<td>\u5F53\u503C\u4E0D\u5B58\u5728\u65F6\u6240\u6307\u5B9A\u7684\u6587\u672C</td>
<td><code>string</code></td>
<td><code>-</code></td>
</tr>
<tr>
<td><code>[html]</code></td>
<td>\u662F\u5426\u652F\u6301HTML</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
</tbody></table>
`,toc:[{id:"\u89C4\u5219",title:"\u89C4\u5219"},{id:"api",title:"API",children:[{id:"ui_\u5C5E\u6027",title:"ui \u5C5E\u6027"}]}],raw:`---
title: text
subtitle: \u6587\u672C
type: Widgets
---

\u4E00\u822C\u7528\u4E8E\u76F4\u63A5\u663E\u793A\u6587\u672C\u3002

## \u89C4\u5219

- \u5F3A\u5236\u53D6\u6D88 \`required\` \u6548\u679C
- \u82E5\u4E0D\u6307\u5B9A \`defaultText\` \u503C\u4E0D\u5B58\u5728\u65F6\u81EA\u52A8\u6E32\u67D3 \`-\`

## API

### ui \u5C5E\u6027

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |
|----|----|----|-----|
| \`[defaultText]\` | \u5F53\u503C\u4E0D\u5B58\u5728\u65F6\u6240\u6307\u5B9A\u7684\u6587\u672C | \`string\` | \`-\` |
| \`[html]\` | \u662F\u5426\u652F\u6301HTML | \`boolean\` | \`true\` |`}}};codes=[{id:"form-text-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema, SFStringWidgetSchema, SFTextWidgetSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-text-simple',
  template: \` <sf [schema]="schema" [loading]="loading" (formSubmit)="submit($event)" /> \`,
  imports: [DelonFormModule]
})
export class FormTextSimple {
  private readonly msg = inject(NzMessageService);
  loading = false;
  schema: SFSchema = {
    properties: {
      id1: { type: 'number', ui: { widget: 'text' } as SFTextWidgetSchema },
      id2: { type: 'number', ui: { widget: 'text', defaultText: 'default text' } as SFTextWidgetSchema },
      name: {
        type: 'string',
        title: 'Name',
        ui: {
          addOnAfter: 'RMB',
          placeholder: 'RMB\u7ED3\u7B97'
        } as SFStringWidgetSchema
      }
    },
    required: ['name']
  };

  submit(value: {}): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.msg.success(JSON.stringify(value));
    }, 1000);
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/form/src/widgets/text/demo/simple.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-text"]],hostAttrs:[1,"d-block"],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-text-simple"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id))},dependencies:[S,$e,F,w,C],encapsulation:2})};var Qe=class o{msg=u(y);schema={properties:{remark:{type:"string",title:"\u63CF\u8FF0",ui:{widget:"textarea",autosize:{minRows:2,maxRows:6},change:n=>console.log("change",n),focus:n=>console.log("focus",n),blur:n=>console.log("blur",n)}},max:{type:"string",title:"Max",ui:{widget:"textarea",maxCharacterCount:100}}}};submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-textarea-simple"]],decls:1,vars:1,consts:[[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)},dependencies:[g,h],encapsulation:2})};var Ke=class o{item={name:"textarea",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"textarea",subtitle:"Textarea",description:"Textarea.",group:"Widgets",order:0,path:"packages/form/src/widgets/textarea/index.en-US.md",url:"/form/textarea/en"},text:`<p>Textarea.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[maxLength]</code></td>
<td>Maximum length of the input</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[readOnly]</code></td>
<td>Whether to disable the state</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[size]</code></td>
<td>Size of the <code>nz-input</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[placeholder]</code></td>
<td>placeholder of the input</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[autosize]</code></td>
<td>height autosize feature, can be set object <code>&#123; minRows: 2, maxRows: 6 &#125;</code></td>
<td><code>&#123; minRows?: number; maxRows?: number &#125;</code></td>
<td><code>&#123; minRows: 1, maxRows: 0 &#125;</code></td>
</tr>
<tr>
<td><code>[variant]</code></td>
<td>Variant</td>
<td><code>outlined,borderless,filled,underlined</code></td>
<td><code>outlined</code></td>
</tr>
<tr>
<td><code>[maxCharacterCount]</code></td>
<td><code>textarea</code> maximum character count displayed</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[computeCharacterCount]</code></td>
<td>customized <code>characterCount</code> computation function</td>
<td><code>(v: string) =&gt; number</code></td>
<td><code>v =&gt; v.length</code></td>
</tr>
<tr>
<td><code>[change]</code></td>
<td>The content event for the Input.</td>
<td><code>(val: string) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[focus]</code></td>
<td>The focus event for the Input.</td>
<td><code>(e: FocusEvent) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[blur]</code></td>
<td>The blur event for the Input.</td>
<td><code>(e: FocusEvent) =&gt; void</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:"api",title:"API",children:[{id:"schema",title:"schema"},{id:"ui",title:"ui"}]}],raw:"---\ntitle: textarea\nsubtitle: Textarea\ntype: Widgets\n---\n\nTextarea.\n\n## API\n\n### schema\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[maxLength]` | Maximum length of the input | `number` | - |\n| `[readOnly]` | Whether to disable the state | `boolean` | - |\n\n### ui\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[size]` | Size of the `nz-input` | `string` | - |\n| `[placeholder]` | placeholder of the input | `string` | - |\n| `[autosize]` | height autosize feature, can be set object `{ minRows: 2, maxRows: 6 }` | `{ minRows?: number; maxRows?: number }` | `{ minRows: 1, maxRows: 0 }` |\n| `[variant]` | Variant | `outlined,borderless,filled,underlined` | `outlined` |\n| `[maxCharacterCount]` | `textarea` maximum character count displayed | `number` | - |\n| `[computeCharacterCount]` | customized `characterCount` computation function | `(v: string) => number` | `v => v.length` |\n| `[change]` | The content event for the Input. | `(val: string) => void` | - |\n| `[focus]` | The focus event for the Input. | `(e: FocusEvent) => void` | - |\n| `[blur]` | The blur event for the Input. | `(e: FocusEvent) => void` | - |"},"zh-CN":{meta:{title:"textarea",subtitle:"\u591A\u884C\u6587\u672C\u6846",description:"\u4E00\u822C\u7528\u4E8E\u591A\u884C\u5B57\u7B26\u4E32\u3002",group:"Widgets",order:0,path:"packages/form/src/widgets/textarea/index.zh-CN.md",url:"/form/textarea/zh"},text:`<p>\u4E00\u822C\u7528\u4E8E\u591A\u884C\u5B57\u7B26\u4E32\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema_\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema_\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[maxLength]</code></td>
<td>\u8868\u5355\u6700\u5927\u957F\u5EA6</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[readOnly]</code></td>
<td>\u7981\u7528\u72B6\u6001</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui_\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui_\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[size]</code></td>
<td>\u5927\u5C0F\uFF0C\u7B49\u540C <code>nzSize</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[placeholder]</code></td>
<td>\u5728\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u8BAF\u606F</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[autosize]</code></td>
<td>\u81EA\u9002\u5E94\u5185\u5BB9\u9AD8\u5EA6\uFF0C\u53EF\u8BBE\u7F6E\u5BF9\u8C61\uFF1A<code>&#123; minRows: 2, maxRows: 6 &#125;</code></td>
<td><code>&#123; minRows?: number; maxRows?: number &#125;</code></td>
<td><code>&#123; minRows: 1, maxRows: 0 &#125;</code></td>
</tr>
<tr>
<td><code>[variant]</code></td>
<td>\u53D8\u4F53</td>
<td><code>outlined,borderless,filled,underlined</code></td>
<td><code>outlined</code></td>
</tr>
<tr>
<td><code>[maxCharacterCount]</code></td>
<td><code>textarea</code> \u6570\u5B57\u63D0\u793A\u663E\u793A\u7684\u6700\u5927\u503C</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[computeCharacterCount]</code></td>
<td>\u81EA\u5B9A\u4E49\u8BA1\u7B97 <code>characterCount</code> \u7684\u51FD\u6570</td>
<td><code>(v: string) =&gt; number</code></td>
<td><code>v =&gt; v.length</code></td>
</tr>
<tr>
<td><code>[change]</code></td>
<td>\u5185\u5BB9\u53D8\u66F4\u4E8B\u4EF6</td>
<td><code>(val: string) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[focus]</code></td>
<td>\u7126\u70B9\u4E8B\u4EF6</td>
<td><code>(e: FocusEvent) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[blur]</code></td>
<td>\u5931\u7126\u4E8B\u4EF6</td>
<td><code>(e: FocusEvent) =&gt; void</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:"api",title:"API",children:[{id:"schema_\u5C5E\u6027",title:"schema \u5C5E\u6027"},{id:"ui_\u5C5E\u6027",title:"ui \u5C5E\u6027"}]}],raw:"---\ntitle: textarea\nsubtitle: \u591A\u884C\u6587\u672C\u6846\ntype: Widgets\n---\n\n\u4E00\u822C\u7528\u4E8E\u591A\u884C\u5B57\u7B26\u4E32\u3002\n\n## API\n\n### schema \u5C5E\u6027\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[maxLength]` | \u8868\u5355\u6700\u5927\u957F\u5EA6 | `number` | - |\n| `[readOnly]` | \u7981\u7528\u72B6\u6001 | `boolean` | - |\n\n### ui \u5C5E\u6027\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[size]` | \u5927\u5C0F\uFF0C\u7B49\u540C `nzSize` | `string` | - |\n| `[placeholder]` | \u5728\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u8BAF\u606F | `string` | - |\n| `[autosize]` | \u81EA\u9002\u5E94\u5185\u5BB9\u9AD8\u5EA6\uFF0C\u53EF\u8BBE\u7F6E\u5BF9\u8C61\uFF1A`{ minRows: 2, maxRows: 6 }` | `{ minRows?: number; maxRows?: number }` | `{ minRows: 1, maxRows: 0 }` |\n| `[variant]` | \u53D8\u4F53 | `outlined,borderless,filled,underlined` | `outlined` |\n| `[maxCharacterCount]` | `textarea` \u6570\u5B57\u63D0\u793A\u663E\u793A\u7684\u6700\u5927\u503C | `number` | - |\n| `[computeCharacterCount]` | \u81EA\u5B9A\u4E49\u8BA1\u7B97 `characterCount` \u7684\u51FD\u6570 | `(v: string) => number` | `v => v.length` |\n| `[change]` | \u5185\u5BB9\u53D8\u66F4\u4E8B\u4EF6 | `(val: string) => void` | - |\n| `[focus]` | \u7126\u70B9\u4E8B\u4EF6 | `(e: FocusEvent) => void` | - |\n| `[blur]` | \u5931\u7126\u4E8B\u4EF6 | `(e: FocusEvent) => void` | - |"}}};codes=[{id:"form-textarea-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema, SFTextareaWidgetSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-textarea-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)" /> \`,
  imports: [DelonFormModule]
})
export class FormTextareaSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      remark: {
        type: 'string',
        title: '\u63CF\u8FF0',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 2, maxRows: 6 },
          change: val => console.log('change', val),
          focus: ev => console.log('focus', ev),
          blur: ev => console.log('blur', ev)
        } as SFTextareaWidgetSchema
      },
      max: {
        type: 'string',
        title: 'Max',
        ui: {
          widget: 'textarea',
          maxCharacterCount: 100
        } as SFTextareaWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/form/src/widgets/textarea/demo/simple.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-textarea"]],hostAttrs:[1,"d-block"],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-textarea-simple"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id))},dependencies:[S,Qe,F,w,C],encapsulation:2})};var Ze=class o{msg=u(y);schema={properties:{format:{type:"string",title:"Format",format:"email"},widget:{type:"string",title:"\u6307\u5B9Awidget",ui:{widget:"autocomplete",type:"email"}},async:{type:"string",title:"\u5F02\u6B65",ui:{widget:"autocomplete",debounceTime:100,asyncData:n=>z(n?[{label:n,value:1,otherData:1},{label:n+n,value:2}]:[]),change:(n,e)=>console.log(n,e)},default:"asdf"}}};submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-autocomplete-simple"]],decls:1,vars:1,consts:[[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)},dependencies:[g,h],encapsulation:2})};var Xe=class o{item={name:"autocomplete",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"autocomplete",subtitle:"Autocomplete",description:"Input complete automatically.Non-built-in modules need to additionally register withAutoCompleteWidget in json-schema.StaticEvery filter after data go...",group:"Non-built-in widgets",order:0,path:"packages/form/widgets/autocomplete/index.en-US.md",url:"/form/autocomplete/en"},text:`<p>Input complete automatically.</p>
<h2 id="how_to_use"><a class="lake-link"><i data-anchor="how_to_use"></i></a>How to use</h2><p>Non-built-in modules need to additionally register <code>withAutoCompleteWidget</code> in <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9" target="_blank" rel="noopener">json-schema</a>.</p>
<h2 id="data_source"><a class="lake-link"><i data-anchor="data_source"></i></a>Data Source</h2><p><strong>Static</strong></p>
<p>Every filter after data got is filtered by <code>filterOption</code>, data source is from <code>asyncData</code>, <code>enum</code>.</p>
<p>Email postfix is automatically added when it is  <code>schema.format: &#39;email&#39;</code>, by default, it is <code>[&#39;qq.com&#39;, &#39;163.com&#39;, &#39;gmail.com&#39;, &#39;126.com&#39;, &#39;aliyun.com&#39;]</code>, can adjust the value by setting <code>enum</code> or <a href="/docs/global-config/en">global config</a> <code>uiEmailSuffixes</code>\u3002</p>
<p><strong>Realtime</strong></p>
<p>Every filter after data got is filtered by <code>filterOption</code>, data source is from <code>asyncData</code>.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[enum]</code></td>
<td>Static data source</td>
<td><code>SFSchemaEnumType[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[readOnly]</code></td>
<td>Read only</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[asyncData]</code></td>
<td>Realtime data</td>
<td><code>(input: string) =&gt; Observable&lt;SFSchemaEnumType[]&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[size]</code></td>
<td>Szie, equals to <code>nzSize</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[placeholder]</code></td>
<td>Placeholder</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[filterOption]</code></td>
<td>Whether filter by input, by default, only apply to <code>label</code> and filter through <code>indexOf</code> case insensitive. When it&#39;s a function, accept <code>inputValue</code> and <code>option</code> parameters, return <code>true</code> when <code>option</code> match search criteria, otherwise, return <code>false</code></td>
<td><code>boolean or (inputValue: string, option: SFSchemaEnum) =&gt; boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[type]</code></td>
<td>Mode, automatically complete common email postfix, can set new postfix by setting <code>enum</code></td>
<td><code>email</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[debounceTime]</code></td>
<td>debounce time, minimum is <code>50</code> by default when it&#39;s realtime data source, unit: millisecond</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[defaultActiveFirstOption]</code></td>
<td>Whether active the first item by default</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[backfill]</code></td>
<td>Fill selected value into input when keyboard selection options is used</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[nzWidth]</code></td>
<td>Customize width, unit is px</td>
<td><code>number</code></td>
<td>Trigger width of element</td>
</tr>
<tr>
<td><code>[change]</code></td>
<td>Change callback</td>
<td><code>(item: NzAutocompleteOptionComponent, orgData: SFSchemaEnum) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[overlayClassName]</code></td>
<td>Class name of the dropdown root element</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[overlayStyle]</code></td>
<td>Style of the dropdown root element</td>
<td><code>object</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[compareWith]</code></td>
<td>Same as <a href="https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection" target="_blank" rel="noopener">SelectControlValueAccessor</a></td>
<td><code>(o1: any, o2: any) =&gt; boolean</code></td>
<td><code>(o1: any, o2: any) =&gt; o1===o2</code></td>
</tr>
</tbody></table>
`,toc:[{id:"how_to_use",title:"How to use"},{id:"data_source",title:"Data Source"},{id:"api",title:"API",children:[{id:"schema",title:"schema"},{id:"ui",title:"ui"}]}],raw:"---\ntitle: autocomplete\nsubtitle: Autocomplete\ntype: Non-built-in widgets\n---\n\nInput complete automatically.\n\n## How to use\n\nNon-built-in modules need to additionally register `withAutoCompleteWidget` in [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9).\n\n## Data Source\n\n**Static**\n\nEvery filter after data got is filtered by `filterOption`, data source is from `asyncData`, `enum`.\n\nEmail postfix is automatically added when it is  `schema.format: 'email'`, by default, it is `['qq.com', '163.com', 'gmail.com', '126.com', 'aliyun.com']`, can adjust the value by setting `enum` or [global config](/docs/global-config/en) `uiEmailSuffixes`\u3002\n\n**Realtime**\n\nEvery filter after data got is filtered by `filterOption`, data source is from `asyncData`.\n\n## API\n\n### schema\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[enum]` | Static data source | `SFSchemaEnumType[]` | - |\n| `[readOnly]` | Read only | `boolean` | - |\n\n### ui\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[asyncData]` | Realtime data | `(input: string) => Observable<SFSchemaEnumType[]>` | - |\n| `[size]` | Szie, equals to `nzSize` | `string` | - |\n| `[placeholder]` | Placeholder | `string` | - |\n| `[filterOption]` | Whether filter by input, by default, only apply to `label` and filter through `indexOf` case insensitive. When it's a function, accept `inputValue` and `option` parameters, return `true` when `option` match search criteria, otherwise, return `false` | `boolean or (inputValue: string, option: SFSchemaEnum) => boolean` | `true` |\n| `[type]` | Mode, automatically complete common email postfix, can set new postfix by setting `enum` | `email` | - |\n| `[debounceTime]` | debounce time, minimum is `50` by default when it's realtime data source, unit: millisecond | `number` | `0` |\n| `[defaultActiveFirstOption]` | Whether active the first item by default | `boolean` | `true` |\n| `[backfill]` | Fill selected value into input when keyboard selection options is used | `boolean` | `false` |\n| `[nzWidth]` | Customize width, unit is px | `number` | Trigger width of element |\n| `[change]` | Change callback | `(item: NzAutocompleteOptionComponent, orgData: SFSchemaEnum) => void` | - |\n| `[overlayClassName]` | Class name of the dropdown root element | `string` | - |\n| `[overlayStyle]` | Style of the dropdown root element | `object` | - |\n| `[compareWith]` | Same as [SelectControlValueAccessor](https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection) | `(o1: any, o2: any) => boolean` | `(o1: any, o2: any) => o1===o2` |"},"zh-CN":{meta:{title:"autocomplete",subtitle:"\u81EA\u52A8\u5B8C\u6210",description:"\u8F93\u5165\u6846\u81EA\u52A8\u5B8C\u6210\u529F\u80FD\u3002\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 json-schema \u6CE8\u518C withAutoCompleteWidget\u3002\u9759\u6001\u6307\u83B7\u53D6\u540E\u6BCF\u4E00\u6B21\u7B5B\u9009\u662F\u901A\u8FC7 filterOption \u8FC7\u6EE4\uFF0C\u6570\u636E\u6765\u6E90\u4E8E asyncData\u3001enum\u3002\u82E5 schema.format: 'email' \u65F6\u81EA\u52A8\u6E32\u67D3\u4E3A\u81EA\u52A8\u8865\u5168\u90AE\u7BB1\u540E...",group:"Non-built-in widgets",order:0,path:"packages/form/widgets/autocomplete/index.zh-CN.md",url:"/form/autocomplete/zh"},text:`<p>\u8F93\u5165\u6846\u81EA\u52A8\u5B8C\u6210\u529F\u80FD\u3002</p>
<h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p>\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9" target="_blank" rel="noopener">json-schema</a> \u6CE8\u518C <code>withAutoCompleteWidget</code>\u3002</p>
<h2 id="\u6570\u636E\u6E90\u8BF4\u660E"><a class="lake-link"><i data-anchor="\u6570\u636E\u6E90\u8BF4\u660E"></i></a>\u6570\u636E\u6E90\u8BF4\u660E</h2><p><strong>\u9759\u6001</strong></p>
<p>\u6307\u83B7\u53D6\u540E\u6BCF\u4E00\u6B21\u7B5B\u9009\u662F\u901A\u8FC7 <code>filterOption</code> \u8FC7\u6EE4\uFF0C\u6570\u636E\u6765\u6E90\u4E8E <code>asyncData</code>\u3001<code>enum</code>\u3002</p>
<p>\u82E5 <code>schema.format: &#39;email&#39;</code> \u65F6\u81EA\u52A8\u6E32\u67D3\u4E3A\u81EA\u52A8\u8865\u5168\u90AE\u7BB1\u540E\u7F00\uFF0C\u9ED8\u8BA4 <code>[&#39;qq.com&#39;, &#39;163.com&#39;, &#39;gmail.com&#39;, &#39;126.com&#39;, &#39;aliyun.com&#39;]</code> \u53EF\u901A\u8FC7 <code>enum</code> \u6765\u91CD\u65B0\u8C03\u6574\u8BE5\u503C\u6216<a href="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a> <code>uiEmailSuffixes</code>\u3002</p>
<p><strong>\u5B9E\u65F6</strong></p>
<p>\u6307\u83B7\u53D6\u540E\u6BCF\u4E00\u6B21\u7B5B\u9009\u662F\u901A\u8FC7 <code>filterOption</code> \u8FC7\u6EE4\uFF0C\u6570\u636E\u6765\u6E90\u4E8E <code>asyncData</code>\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema_\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema_\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[enum]</code></td>
<td>\u9759\u6001\u6570\u636E\u6E90</td>
<td><code>SFSchemaEnumType[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[readOnly]</code></td>
<td>\u7981\u7528\u72B6\u6001</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui_\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui_\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[asyncData]</code></td>
<td>\u5B9E\u65F6\u6570\u636E\u6E90</td>
<td><code>(input: string) =&gt; Observable&lt;SFSchemaEnumType[]&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[size]</code></td>
<td>\u5927\u5C0F\uFF0C\u7B49\u540C <code>nzSize</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[placeholder]</code></td>
<td>\u5728\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u8BAF\u606F</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[filterOption]</code></td>
<td>\u662F\u5426\u6839\u636E\u8F93\u5165\u9879\u8FDB\u884C\u7B5B\u9009\uFF0C\u9ED8\u8BA4\u53EA\u5BF9 <code>label</code> \u5C5E\u6027\u6267\u884C\u4E0D\u533A\u5206\u5927\u5C0F\u5B9A <code>indexOf</code> \u8FC7\u6EE4\u3002\u5F53\u5176\u4E3A\u4E00\u4E2A\u51FD\u6570\u65F6\uFF0C\u4F1A\u63A5\u6536 <code>inputValue</code> <code>option</code> \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 <code>option</code> \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE <code>true</code>\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE <code>false</code>\u3002</td>
<td><code>boolean or (inputValue: string, option: SFSchemaEnum) =&gt; boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[type]</code></td>
<td>\u6A21\u5F0F\uFF0C\u81EA\u52A8\u5B8C\u6210\u5E38\u89C1\u90AE\u7BB1\u540E\u7F00\uFF0C\u53EF\u4EE5\u91CD\u65B0\u4F7F\u7528 <code>enum</code> \u6765\u6307\u5B9A\u65B0\u540E\u7F00</td>
<td><code>email</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[debounceTime]</code></td>
<td>\u53BB\u6296\u65F6\u95F4\uFF0C\u5F53\u5B9E\u65F6\u6570\u636E\u6E90\u65F6\u9ED8\u8BA4\u6700\u5C11 <code>50</code>\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[defaultActiveFirstOption]</code></td>
<td>\u662F\u5426\u9ED8\u8BA4\u9AD8\u4EAE\u7B2C\u4E00\u4E2A\u9009\u9879</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[backfill]</code></td>
<td>\u4F7F\u7528\u952E\u76D8\u9009\u62E9\u9009\u9879\u7684\u65F6\u5019\u628A\u9009\u4E2D\u9879\u56DE\u586B\u5230\u8F93\u5165\u6846\u4E2D</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[nzWidth]</code></td>
<td>\u81EA\u5B9A\u4E49\u5BBD\u5EA6\u5355\u4F4D px</td>
<td><code>number</code></td>
<td>\u89E6\u53D1\u5143\u7D20\u5BBD\u5EA6</td>
</tr>
<tr>
<td><code>[change]</code></td>
<td>\u53D8\u66F4\u56DE\u8C03</td>
<td><code>(item: NzAutocompleteOptionComponent, orgData: SFSchemaEnum) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[overlayClassName]</code></td>
<td>\u4E0B\u62C9\u6839\u5143\u7D20\u7684\u7C7B\u540D\u79F0</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[overlayStyle]</code></td>
<td>\u4E0B\u62C9\u6839\u5143\u7D20\u7684\u6837\u5F0F</td>
<td><code>object</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[compareWith]</code></td>
<td>\u4E0E <a href="https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection" target="_blank" rel="noopener">SelectControlValueAccessor</a> \u76F8\u540C</td>
<td><code>(o1: any, o2: any) =&gt; boolean</code></td>
<td><code>(o1: any, o2: any) =&gt; o1===o2</code></td>
</tr>
</tbody></table>
`,toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528"},{id:"\u6570\u636E\u6E90\u8BF4\u660E",title:"\u6570\u636E\u6E90\u8BF4\u660E"},{id:"api",title:"API",children:[{id:"schema_\u5C5E\u6027",title:"schema \u5C5E\u6027"},{id:"ui_\u5C5E\u6027",title:"ui \u5C5E\u6027"}]}],raw:"---\ntitle: autocomplete\nsubtitle: \u81EA\u52A8\u5B8C\u6210\ntype: Non-built-in widgets\n---\n\n\u8F93\u5165\u6846\u81EA\u52A8\u5B8C\u6210\u529F\u80FD\u3002\n\n## \u5982\u4F55\u4F7F\u7528\n\n\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9) \u6CE8\u518C `withAutoCompleteWidget`\u3002\n\n## \u6570\u636E\u6E90\u8BF4\u660E\n\n**\u9759\u6001**\n\n\u6307\u83B7\u53D6\u540E\u6BCF\u4E00\u6B21\u7B5B\u9009\u662F\u901A\u8FC7 `filterOption` \u8FC7\u6EE4\uFF0C\u6570\u636E\u6765\u6E90\u4E8E `asyncData`\u3001`enum`\u3002\n\n\u82E5 `schema.format: 'email'` \u65F6\u81EA\u52A8\u6E32\u67D3\u4E3A\u81EA\u52A8\u8865\u5168\u90AE\u7BB1\u540E\u7F00\uFF0C\u9ED8\u8BA4 `['qq.com', '163.com', 'gmail.com', '126.com', 'aliyun.com']` \u53EF\u901A\u8FC7 `enum` \u6765\u91CD\u65B0\u8C03\u6574\u8BE5\u503C\u6216[\u5168\u5C40\u914D\u7F6E](/docs/global-config) `uiEmailSuffixes`\u3002\n\n**\u5B9E\u65F6**\n\n\u6307\u83B7\u53D6\u540E\u6BCF\u4E00\u6B21\u7B5B\u9009\u662F\u901A\u8FC7 `filterOption` \u8FC7\u6EE4\uFF0C\u6570\u636E\u6765\u6E90\u4E8E `asyncData`\u3002\n\n## API\n\n### schema \u5C5E\u6027\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[enum]` | \u9759\u6001\u6570\u636E\u6E90 | `SFSchemaEnumType[]` | - |\n| `[readOnly]` | \u7981\u7528\u72B6\u6001 | `boolean` | - |\n\n### ui \u5C5E\u6027\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[asyncData]` | \u5B9E\u65F6\u6570\u636E\u6E90 | `(input: string) => Observable<SFSchemaEnumType[]>` | - |\n| `[size]` | \u5927\u5C0F\uFF0C\u7B49\u540C `nzSize` | `string` | - |\n| `[placeholder]` | \u5728\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u8BAF\u606F | `string` | - |\n| `[filterOption]` | \u662F\u5426\u6839\u636E\u8F93\u5165\u9879\u8FDB\u884C\u7B5B\u9009\uFF0C\u9ED8\u8BA4\u53EA\u5BF9 `label` \u5C5E\u6027\u6267\u884C\u4E0D\u533A\u5206\u5927\u5C0F\u5B9A `indexOf` \u8FC7\u6EE4\u3002\u5F53\u5176\u4E3A\u4E00\u4E2A\u51FD\u6570\u65F6\uFF0C\u4F1A\u63A5\u6536 `inputValue` `option` \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 `option` \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE `true`\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE `false`\u3002 | `boolean or (inputValue: string, option: SFSchemaEnum) => boolean` | `true` |\n| `[type]` | \u6A21\u5F0F\uFF0C\u81EA\u52A8\u5B8C\u6210\u5E38\u89C1\u90AE\u7BB1\u540E\u7F00\uFF0C\u53EF\u4EE5\u91CD\u65B0\u4F7F\u7528 `enum` \u6765\u6307\u5B9A\u65B0\u540E\u7F00 | `email` | - |\n| `[debounceTime]` | \u53BB\u6296\u65F6\u95F4\uFF0C\u5F53\u5B9E\u65F6\u6570\u636E\u6E90\u65F6\u9ED8\u8BA4\u6700\u5C11 `50`\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2 | `number` | `0` |\n| `[defaultActiveFirstOption]` | \u662F\u5426\u9ED8\u8BA4\u9AD8\u4EAE\u7B2C\u4E00\u4E2A\u9009\u9879 | `boolean` | `true` |\n| `[backfill]` | \u4F7F\u7528\u952E\u76D8\u9009\u62E9\u9009\u9879\u7684\u65F6\u5019\u628A\u9009\u4E2D\u9879\u56DE\u586B\u5230\u8F93\u5165\u6846\u4E2D | `boolean` | `false` |\n| `[nzWidth]` | \u81EA\u5B9A\u4E49\u5BBD\u5EA6\u5355\u4F4D px | `number` | \u89E6\u53D1\u5143\u7D20\u5BBD\u5EA6 |\n| `[change]` | \u53D8\u66F4\u56DE\u8C03 | `(item: NzAutocompleteOptionComponent, orgData: SFSchemaEnum) => void` | - |\n| `[overlayClassName]` | \u4E0B\u62C9\u6839\u5143\u7D20\u7684\u7C7B\u540D\u79F0 | `string` | - |\n| `[overlayStyle]` | \u4E0B\u62C9\u6839\u5143\u7D20\u7684\u6837\u5F0F | `object` | - |\n| `[compareWith]` | \u4E0E [SelectControlValueAccessor](https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection) \u76F8\u540C | `(o1: any, o2: any) => boolean` | `(o1: any, o2: any) => o1===o2` |"}}};codes=[{id:"form-autocomplete-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, inject } from '@angular/core';
import { of } from 'rxjs';

import { DelonFormModule, SFSchema } from '@delon/form';
import type { SFAutoCompleteWidgetSchema } from '@delon/form/widgets/autocomplete';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-autocomplete-simple',
  template: \`<sf [schema]="schema" (formSubmit)="submit($event)" />\`,
  imports: [DelonFormModule]
})
export class FormAutocompleteSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      format: {
        type: 'string',
        title: 'Format',
        format: 'email'
      },
      widget: {
        type: 'string',
        title: '\u6307\u5B9Awidget',
        ui: {
          widget: 'autocomplete',
          type: 'email'
        } as SFAutoCompleteWidgetSchema
      },
      async: {
        type: 'string',
        title: '\u5F02\u6B65',
        ui: {
          widget: 'autocomplete',
          debounceTime: 100,
          asyncData: input =>
            of(
              input
                ? [
                    { label: input, value: 1, otherData: 1 },
                    { label: input + input, value: 2 }
                  ]
                : []
            ),
          change: (comp, data) => console.log(comp, data)
        } as SFAutoCompleteWidgetSchema,
        default: 'asdf'
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/form/widgets/autocomplete/demo/simple.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-autocomplete"]],hostAttrs:[1,"d-block"],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-autocomplete-simple"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id))},dependencies:[S,Ze,F,w,C],encapsulation:2})};var et=class o{msg=u(y);schema={properties:{static:{type:"number",title:"Static",enum:[{value:11e4,label:"\u5317\u4EAC",parent:0,children:[{value:110100,label:"\u5317\u4EAC\u5E02",parent:11e4,children:[{value:110101,label:"\u4E1C\u57CE\u533A",parent:110100,isLeaf:!0},{value:110105,label:"\u671D\u9633\u533A",parent:110100,isLeaf:!0}]}]}],ui:"cascader",default:[11e4,110100,110105]},async:{type:"number",title:"RealTime",ui:{widget:"cascader",multiple:!0,asyncData:(n,e)=>new Promise(t=>{setTimeout(()=>{n.children=[{value:11e4,label:"\u5317\u4EAC",parent:0},{value:110100,label:"\u5317\u4EAC\u5E02",parent:11e4},{value:110101,label:"\u4E1C\u57CE\u533A",parent:110100},{value:110105,label:"\u671D\u9633\u533A",parent:110100},{value:31e4,label:"\u4E0A\u6D77",parent:0},{value:310100,label:"\u4E0A\u6D77\u5E02",parent:31e4},{value:310101,label:"\u9EC4\u6D66\u533A",parent:310100},{value:310104,label:"\u5F90\u6C47\u533A",parent:310100}].filter(s=>(s.isLeaf=e===1,s.parent===(n.value??0))),t()},300)})},default:[11e4,110100,110105]}}};submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-cascader-simple"]],decls:1,vars:1,consts:[[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)},dependencies:[g,h],encapsulation:2})};var tt=class o{item={name:"cascader",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"cascader",subtitle:"Cascader",description:"Usually, it's used in province/city/district, company hierarchy, category of things, etc.Non-built-in modules need to additionally register withCascad...",group:"Non-built-in widgets",order:0,path:"packages/form/widgets/cascader/index.en-US.md",url:"/form/cascader/en"},text:`<p>Usually, it&#39;s used in province/city/district, company hierarchy, category of things, etc.</p>
<h2 id="how_to_use"><a class="lake-link"><i data-anchor="how_to_use"></i></a>How to use</h2><p>Non-built-in modules need to additionally register <code>withCascaderWidget</code> in <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9" target="_blank" rel="noopener">json-schema</a>.</p>
<h2 id="note"><a class="lake-link"><i data-anchor="note"></i></a>Note</h2><ul>
<li>Value of <code>default</code> or <code>formData</code> should always be an array, for example, city cascade may only save leaf node <code>value</code>, but you need to manually provide the whole data chain <code>value</code> array</li>
</ul>
<h2 id="data_source"><a class="lake-link"><i data-anchor="data_source"></i></a>Data Source</h2><p><strong>Static</strong></p>
<p>One time fetching data, data source is from <code>asyncData</code>, <code>enum</code>.</p>
<p><strong>Realtime</strong></p>
<p>Every select triggers a HTTP request, data source is from <code>asyncData</code>; includes three parameters <code>(node: NzCascaderOption, index: number, me: CascaderWidget) =&gt; PromiseLike&lt;any&gt;</code>, <code>me</code> indicates instance of the current widget.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[enum]</code></td>
<td>Static data source</td>
<td><code>SFSchemaEnumType[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[readOnly]</code></td>
<td>Read only</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[asyncData]</code></td>
<td>Asynchronous static data source</td>
<td><code>(node: NzCascaderOption, index: number, me: CascaderWidget) =&gt; PromiseLike&lt;any&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[size]</code></td>
<td>Size, equals to <code>nzSize</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[placeholder]</code></td>
<td>Placeholder</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[showSearch]</code></td>
<td>Whether support search</td>
<td><code>bool</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[allowClear]</code></td>
<td>Whether show clear button</td>
<td><code>bool</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[clearValue]</code></td>
<td>Default value when cleared</td>
<td><code>any</code></td>
<td><code>undefined</code></td>
</tr>
<tr>
<td><code>[clearText]</code></td>
<td>Title of clear button</td>
<td><code>string</code></td>
<td><code>\u6E05\u9664</code></td>
</tr>
<tr>
<td><code>[showArrow]</code></td>
<td>Whether show arrow</td>
<td><code>bool</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[showInput]</code></td>
<td>Whether show input</td>
<td><code>bool</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[menuClassName]</code></td>
<td>Custom floating layer class name</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[menuStyle]</code></td>
<td>Custom floating layer style</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[columnClassName]</code></td>
<td>Custom style of data column in popup menu</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[notFoundContent]</code></td>
<td>Content when dropdown list is empty</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[data]</code></td>
<td>Initial data, is used in first column data, sub column is loaded by <code>children</code> option, or loaded by <code>load</code> asynchronous event</td>
<td><code>Array</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[enableCache]</code></td>
<td>Whether cache asynchronous loaded data, should set it to false if data is changed in every asynchronous load</td>
<td><code>bool</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[expandTrigger]</code></td>
<td>How is sub menu expanded, options: &#39;click&#39; or &#39;hover&#39;</td>
<td><code>string</code></td>
<td><code>click</code></td>
</tr>
<tr>
<td><code>[changeOnSelect]</code></td>
<td>When it is set to true, the value is changed when each level of menu option is selected, see details from above demo</td>
<td><code>bool</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[changeOn]</code></td>
<td>Custom function to determine if it should have a change when a menu option is selected, will have a change when return value is true</td>
<td><code>(option: NzCascaderOption, level: number) =&gt; boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[triggerAction]</code></td>
<td>Trigger action to show menu</td>
<td><code>(&#39;click&#39;, &#39;hover&#39;)[]</code></td>
<td><code>[&#39;click&#39;]</code></td>
</tr>
<tr>
<td><code>[valueProperty]</code></td>
<td>Property of <code>value</code></td>
<td><code>string</code></td>
<td><code>value</code></td>
</tr>
<tr>
<td><code>[labelProperty]</code></td>
<td>Property of <code>label</code></td>
<td><code>string</code></td>
<td><code>label</code></td>
</tr>
<tr>
<td><code>[multiple]</code></td>
<td>Support multiple</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>(visibleChange)</code></td>
<td>Asynchronous load event</td>
<td><code>(value: boolean) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(change)</code></td>
<td>Selected value changed event</td>
<td><code>(values: any[]) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(selectionChange)</code></td>
<td>Select option changed event</td>
<td><code>(values: NzCascaderOption[]) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(clear)</code></td>
<td>Content clear event</td>
<td><code>() =&gt; void</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:"how_to_use",title:"How to use"},{id:"note",title:"Note"},{id:"data_source",title:"Data Source"},{id:"api",title:"API",children:[{id:"schema",title:"schema"},{id:"ui",title:"ui"}]}],raw:"---\ntitle: cascader\nsubtitle: Cascader\ntype: Non-built-in widgets\n---\n\nUsually, it's used in province/city/district, company hierarchy, category of things, etc.\n\n## How to use\n\nNon-built-in modules need to additionally register `withCascaderWidget` in [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9).\n\n## Note\n\n- Value of `default` or `formData` should always be an array, for example, city cascade may only save leaf node `value`, but you need to manually provide the whole data chain `value` array\n\n## Data Source\n\n**Static**\n\nOne time fetching data, data source is from `asyncData`, `enum`.\n\n**Realtime**\n\nEvery select triggers a HTTP request, data source is from `asyncData`; includes three parameters `(node: NzCascaderOption, index: number, me: CascaderWidget) => PromiseLike<any>`, `me` indicates instance of the current widget.\n\n## API\n\n### schema\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[enum]` | Static data source | `SFSchemaEnumType[]` | - |\n| `[readOnly]` | Read only | `boolean` | - |\n\n### ui\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[asyncData]` | Asynchronous static data source | `(node: NzCascaderOption, index: number, me: CascaderWidget) => PromiseLike<any>` | - |\n| `[size]` | Size, equals to `nzSize` | `string` | - |\n| `[placeholder]` | Placeholder | `string` | - |\n| `[showSearch]` | Whether support search | `bool` | `false` |\n| `[allowClear]` | Whether show clear button | `bool` | `true` |\n| `[clearValue]` | Default value when cleared | `any` | `undefined` |\n| `[clearText]` | Title of clear button | `string` | `\u6E05\u9664` |\n| `[showArrow]` | Whether show arrow | `bool` | `true` |\n| `[showInput]` | Whether show input | `bool` | `true` |\n| `[menuClassName]` | Custom floating layer class name | `string` | - |\n| `[menuStyle]` | Custom floating layer style | `string` | - |\n| `[columnClassName]` | Custom style of data column in popup menu | `string` | - |\n| `[notFoundContent]` | Content when dropdown list is empty | `string` | - |\n| `[data]` | Initial data, is used in first column data, sub column is loaded by `children` option, or loaded by `load` asynchronous event | `Array` | - |\n| `[enableCache]` | Whether cache asynchronous loaded data, should set it to false if data is changed in every asynchronous load | `bool` | `true` |\n| `[expandTrigger]` | How is sub menu expanded, options: 'click' or 'hover' | `string` | `click` |\n| `[changeOnSelect]` | When it is set to true, the value is changed when each level of menu option is selected, see details from above demo | `bool` | `false` |\n| `[changeOn]` | Custom function to determine if it should have a change when a menu option is selected, will have a change when return value is true | `(option: NzCascaderOption, level: number) => boolean` | - |\n| `[triggerAction]` | Trigger action to show menu | `('click', 'hover')[]` | `['click']` |\n| `[valueProperty]` | Property of `value` | `string` | `value` |\n| `[labelProperty]` | Property of `label` | `string` | `label` |\n| `[multiple]` | Support multiple | `boolean` | `false` |\n| `(visibleChange)` | Asynchronous load event | `(value: boolean) => void` | - |\n| `(change)` | Selected value changed event | `(values: any[]) => void` | - |\n| `(selectionChange)` | Select option changed event | `(values: NzCascaderOption[]) => void` | - |\n| `(clear)` | Content clear event | `() => void` | - |"},"zh-CN":{meta:{title:"cascader",subtitle:"\u7EA7\u8054\u9009\u62E9",description:"\u4E00\u822C\u7528\u4E8E\u7701\u5E02\u533A\uFF0C\u516C\u53F8\u5C42\u7EA7\uFF0C\u4E8B\u7269\u5206\u7C7B\u7B49\u3002\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 json-schema \u6CE8\u518C withCascaderWidget\u3002default \u6216 formData \u503C\u59CB\u7EC8\u5E94\u8BE5\u4FDD\u6301\u4E00\u4E2A\u6570\u7EC4\uFF0C\u4F8B\u5982\uFF1A\u57CE\u5E02\u7EA7\u8054\u53EF\u80FD\u53EA\u5B58\u50A8\u53F6\u8282\u70B9 value\uFF0C\u6B64\u65F6\u9700\u8981\u624B\u52A8\u5904\u7406\u5E76\u7ED9\u51FA\u5B8C\u6574\u6570\u636E\u94FE value \u6570\u7EC4\u9759\u6001\u6307\u4E00\u6B21\u6027\u83B7...",group:"Non-built-in widgets",order:0,path:"packages/form/widgets/cascader/index.zh-CN.md",url:"/form/cascader/zh"},text:`<p>\u4E00\u822C\u7528\u4E8E\u7701\u5E02\u533A\uFF0C\u516C\u53F8\u5C42\u7EA7\uFF0C\u4E8B\u7269\u5206\u7C7B\u7B49\u3002</p>
<h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p>\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9" target="_blank" rel="noopener">json-schema</a> \u6CE8\u518C <code>withCascaderWidget</code>\u3002</p>
<h2 id="\u6CE8\u610F\u4E8B\u9879"><a class="lake-link"><i data-anchor="\u6CE8\u610F\u4E8B\u9879"></i></a>\u6CE8\u610F\u4E8B\u9879</h2><ul>
<li><code>default</code> \u6216 <code>formData</code> \u503C\u59CB\u7EC8\u5E94\u8BE5\u4FDD\u6301\u4E00\u4E2A\u6570\u7EC4\uFF0C\u4F8B\u5982\uFF1A\u57CE\u5E02\u7EA7\u8054\u53EF\u80FD\u53EA\u5B58\u50A8\u53F6\u8282\u70B9 <code>value</code>\uFF0C\u6B64\u65F6\u9700\u8981\u624B\u52A8\u5904\u7406\u5E76\u7ED9\u51FA\u5B8C\u6574\u6570\u636E\u94FE <code>value</code> \u6570\u7EC4</li>
</ul>
<h2 id="\u6570\u636E\u6E90\u8BF4\u660E"><a class="lake-link"><i data-anchor="\u6570\u636E\u6E90\u8BF4\u660E"></i></a>\u6570\u636E\u6E90\u8BF4\u660E</h2><p><strong>\u9759\u6001</strong></p>
<p>\u6307\u4E00\u6B21\u6027\u83B7\u53D6\u6570\u636E\uFF0C\u6570\u636E\u6765\u6E90\u4E8E <code>asyncData</code>\u3001<code>enum</code>\u3002</p>
<p><strong>\u5B9E\u65F6</strong></p>
<p>\u6307\u6BCF\u4E00\u6B21\u6BCF\u4E00\u6B21\u9009\u62E9\u4F1A\u89E6\u53D1HTTP\u8BF7\u6C42\uFF0C\u6570\u636E\u6765\u6E90\u4E8E <code>asyncData</code>\uFF1B\u5305\u542B\u4E09\u4E2A\u53C2\u6570 <code>(node: NzCascaderOption, index: number, me: CascaderWidget) =&gt; PromiseLike&lt;any&gt;</code>\uFF0C\u5176\u4E2D <code>me</code> \u8868\u793A\u5F53\u524D\u5C0F\u90E8\u4EF6\u5B9E\u4F8B\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema_\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema_\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[enum]</code></td>
<td>\u9759\u6001\u6570\u636E\u6E90</td>
<td><code>SFSchemaEnumType[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[readOnly]</code></td>
<td>\u7981\u7528\u72B6\u6001</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui_\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui_\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[asyncData]</code></td>
<td>\u5F02\u6B65\u9759\u6001\u6570\u636E\u6E90</td>
<td><code>(node: NzCascaderOption, index: number, me: CascaderWidget) =&gt; PromiseLike&lt;any&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[size]</code></td>
<td>\u5927\u5C0F\uFF0C\u7B49\u540C <code>nzSize</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[placeholder]</code></td>
<td>\u5728\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u8BAF\u606F</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[showSearch]</code></td>
<td>\u662F\u5426\u652F\u6301\u641C\u7D22</td>
<td><code>bool</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[allowClear]</code></td>
<td>\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE</td>
<td><code>bool</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[clearValue]</code></td>
<td>\u6E05\u7A7A\u65F6\u9ED8\u8BA4\u503C</td>
<td><code>any</code></td>
<td><code>undefined</code></td>
</tr>
<tr>
<td><code>[clearText]</code></td>
<td>\u6E05\u9664\u6309\u94AE\u7684\u6807\u9898</td>
<td><code>string</code></td>
<td><code>\u6E05\u9664</code></td>
</tr>
<tr>
<td><code>[showArrow]</code></td>
<td>\u662F\u5426\u663E\u793A\u7BAD\u5934</td>
<td><code>bool</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[showInput]</code></td>
<td>\u662F\u5426\u663E\u793A\u8F93\u5165\u6846</td>
<td><code>bool</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[menuClassName]</code></td>
<td>\u81EA\u5B9A\u4E49\u6D6E\u5C42\u7C7B\u540D</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[menuStyle]</code></td>
<td>\u81EA\u5B9A\u4E49\u6D6E\u5C42\u6837\u5F0F</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[columnClassName]</code></td>
<td>\u5F39\u51FA\u83DC\u5355\u4E2D\u6570\u636E\u5217\u7684\u81EA\u5B9A\u4E49\u6837\u5F0F</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[notFoundContent]</code></td>
<td>\u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[data]</code></td>
<td>\u521D\u59CB\u5316\u5217\u6570\u636E\uFF0C\u7528\u4E8E\u7B2C\u4E00\u5217\u7684\u6570\u636E\uFF0C\u5B50\u5217\u901A\u8FC7\u9009\u9879\u7684 <code>children</code> \u52A0\u8F7D\uFF0C\u6216\u8005\u901A\u8FC7 <code>load</code> \u4E8B\u4EF6\u5F02\u6B65\u52A0\u8F7D\u3002</td>
<td><code>Array</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[enableCache]</code></td>
<td>\u662F\u5426\u7F13\u5B58\u5F02\u6B65\u52A0\u8F7D\u7684\u6570\u636E\uFF0C\u82E5\u6BCF\u6B21\u5F02\u6B65\u52A0\u8F7D\u7684\u6570\u636E\u90FD\u662F\u53D8\u5316\u7684\uFF0C\u9700\u5C06\u8BE5\u503C\u8BBE\u7F6E\u4E3A false</td>
<td><code>bool</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[expandTrigger]</code></td>
<td>\u6B21\u7EA7\u83DC\u5355\u7684\u5C55\u5F00\u65B9\u5F0F\uFF0C\u53EF\u9009 &#39;click&#39; \u548C &#39;hover&#39;</td>
<td><code>string</code></td>
<td><code>click</code></td>
</tr>
<tr>
<td><code>[changeOnSelect]</code></td>
<td>\u5F53\u6B64\u9879\u4E3A true \u65F6\uFF0C\u70B9\u9009\u6BCF\u7EA7\u83DC\u5355\u9009\u9879\u503C\u90FD\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u5177\u4F53\u89C1\u4E0A\u9762\u7684\u6F14\u793A</td>
<td><code>bool</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[changeOn]</code></td>
<td>\u53EF\u901A\u8FC7\u81EA\u5B9A\u4E49\u7684\u51FD\u6570\u6765\u5224\u65AD\u70B9\u51FB\u83DC\u5355\u9009\u9879\u662F\u5426\u5E94\u8BE5\u53D1\u751F\u53D8\u5316\uFF0C\u5F53\u51FD\u6570\u8FD4\u56DE true \u65F6\uFF0C\u5C06\u53D1\u751F\u53D8\u5316</td>
<td><code>(option: NzCascaderOption, level: number) =&gt; boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[triggerAction]</code></td>
<td>\u89E6\u53D1\u83DC\u5355\u51FA\u73B0\u7684\u884C\u4E3A</td>
<td><code>(&#39;click&#39;, &#39;hover&#39;)[]</code></td>
<td><code>[&#39;click&#39;]</code></td>
</tr>
<tr>
<td><code>[valueProperty]</code></td>
<td>\u503C <code>value</code> \u7684\u5C5E\u6027\u540D\u79F0</td>
<td><code>string</code></td>
<td><code>value</code></td>
</tr>
<tr>
<td><code>[labelProperty]</code></td>
<td>\u503C <code>label</code> \u7684\u5C5E\u6027\u540D\u79F0</td>
<td><code>string</code></td>
<td><code>label</code></td>
</tr>
<tr>
<td><code>[multiple]</code></td>
<td>\u662F\u5426\u591A\u9009</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>(visibleChange)</code></td>
<td>\u5F02\u6B65\u52A0\u8F7D\u4E8B\u4EF6</td>
<td><code>(value: boolean) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(change)</code></td>
<td>\u9009\u9879\u503C\u53D8\u66F4\u4E8B\u4EF6</td>
<td><code>(values: any[]) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(selectionChange)</code></td>
<td>\u9009\u9879\u53D8\u66F4\u4E8B\u4EF6</td>
<td><code>(values: NzCascaderOption[]) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(clear)</code></td>
<td>\u5185\u5BB9\u88AB\u6E05\u7A7A\u4E8B\u4EF6</td>
<td><code>() =&gt; void</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528"},{id:"\u6CE8\u610F\u4E8B\u9879",title:"\u6CE8\u610F\u4E8B\u9879"},{id:"\u6570\u636E\u6E90\u8BF4\u660E",title:"\u6570\u636E\u6E90\u8BF4\u660E"},{id:"api",title:"API",children:[{id:"schema_\u5C5E\u6027",title:"schema \u5C5E\u6027"},{id:"ui_\u5C5E\u6027",title:"ui \u5C5E\u6027"}]}],raw:"---\ntitle: cascader\nsubtitle: \u7EA7\u8054\u9009\u62E9\ntype: Non-built-in widgets\n---\n\n\u4E00\u822C\u7528\u4E8E\u7701\u5E02\u533A\uFF0C\u516C\u53F8\u5C42\u7EA7\uFF0C\u4E8B\u7269\u5206\u7C7B\u7B49\u3002\n\n## \u5982\u4F55\u4F7F\u7528\n\n\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9) \u6CE8\u518C `withCascaderWidget`\u3002\n\n## \u6CE8\u610F\u4E8B\u9879\n\n- `default` \u6216 `formData` \u503C\u59CB\u7EC8\u5E94\u8BE5\u4FDD\u6301\u4E00\u4E2A\u6570\u7EC4\uFF0C\u4F8B\u5982\uFF1A\u57CE\u5E02\u7EA7\u8054\u53EF\u80FD\u53EA\u5B58\u50A8\u53F6\u8282\u70B9 `value`\uFF0C\u6B64\u65F6\u9700\u8981\u624B\u52A8\u5904\u7406\u5E76\u7ED9\u51FA\u5B8C\u6574\u6570\u636E\u94FE `value` \u6570\u7EC4\n\n## \u6570\u636E\u6E90\u8BF4\u660E\n\n**\u9759\u6001**\n\n\u6307\u4E00\u6B21\u6027\u83B7\u53D6\u6570\u636E\uFF0C\u6570\u636E\u6765\u6E90\u4E8E `asyncData`\u3001`enum`\u3002\n\n**\u5B9E\u65F6**\n\n\u6307\u6BCF\u4E00\u6B21\u6BCF\u4E00\u6B21\u9009\u62E9\u4F1A\u89E6\u53D1HTTP\u8BF7\u6C42\uFF0C\u6570\u636E\u6765\u6E90\u4E8E `asyncData`\uFF1B\u5305\u542B\u4E09\u4E2A\u53C2\u6570 `(node: NzCascaderOption, index: number, me: CascaderWidget) => PromiseLike<any>`\uFF0C\u5176\u4E2D `me` \u8868\u793A\u5F53\u524D\u5C0F\u90E8\u4EF6\u5B9E\u4F8B\u3002\n\n## API\n\n### schema \u5C5E\u6027\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[enum]` | \u9759\u6001\u6570\u636E\u6E90 | `SFSchemaEnumType[]` | - |\n| `[readOnly]` | \u7981\u7528\u72B6\u6001 | `boolean` | - |\n\n### ui \u5C5E\u6027\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[asyncData]` | \u5F02\u6B65\u9759\u6001\u6570\u636E\u6E90 | `(node: NzCascaderOption, index: number, me: CascaderWidget) => PromiseLike<any>` | - |\n| `[size]` | \u5927\u5C0F\uFF0C\u7B49\u540C `nzSize` | `string` | - |\n| `[placeholder]` | \u5728\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u8BAF\u606F | `string` | - |\n| `[showSearch]` | \u662F\u5426\u652F\u6301\u641C\u7D22 | `bool` | `false` |\n| `[allowClear]` | \u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE | `bool` | `true` |\n| `[clearValue]` | \u6E05\u7A7A\u65F6\u9ED8\u8BA4\u503C | `any` | `undefined` |\n| `[clearText]` | \u6E05\u9664\u6309\u94AE\u7684\u6807\u9898 | `string` | `\u6E05\u9664` |\n| `[showArrow]` | \u662F\u5426\u663E\u793A\u7BAD\u5934 | `bool` | `true` |\n| `[showInput]` | \u662F\u5426\u663E\u793A\u8F93\u5165\u6846 | `bool` | `true` |\n| `[menuClassName]` | \u81EA\u5B9A\u4E49\u6D6E\u5C42\u7C7B\u540D | `string` | - |\n| `[menuStyle]` | \u81EA\u5B9A\u4E49\u6D6E\u5C42\u6837\u5F0F | `string` | - |\n| `[columnClassName]` | \u5F39\u51FA\u83DC\u5355\u4E2D\u6570\u636E\u5217\u7684\u81EA\u5B9A\u4E49\u6837\u5F0F | `string` | - |\n| `[notFoundContent]` | \u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9 | `string` | - |\n| `[data]` | \u521D\u59CB\u5316\u5217\u6570\u636E\uFF0C\u7528\u4E8E\u7B2C\u4E00\u5217\u7684\u6570\u636E\uFF0C\u5B50\u5217\u901A\u8FC7\u9009\u9879\u7684 `children` \u52A0\u8F7D\uFF0C\u6216\u8005\u901A\u8FC7 `load` \u4E8B\u4EF6\u5F02\u6B65\u52A0\u8F7D\u3002 | `Array` | - |\n| `[enableCache]` | \u662F\u5426\u7F13\u5B58\u5F02\u6B65\u52A0\u8F7D\u7684\u6570\u636E\uFF0C\u82E5\u6BCF\u6B21\u5F02\u6B65\u52A0\u8F7D\u7684\u6570\u636E\u90FD\u662F\u53D8\u5316\u7684\uFF0C\u9700\u5C06\u8BE5\u503C\u8BBE\u7F6E\u4E3A false | `bool` | `true` |\n| `[expandTrigger]` | \u6B21\u7EA7\u83DC\u5355\u7684\u5C55\u5F00\u65B9\u5F0F\uFF0C\u53EF\u9009 'click' \u548C 'hover' | `string` | `click` |\n| `[changeOnSelect]` | \u5F53\u6B64\u9879\u4E3A true \u65F6\uFF0C\u70B9\u9009\u6BCF\u7EA7\u83DC\u5355\u9009\u9879\u503C\u90FD\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u5177\u4F53\u89C1\u4E0A\u9762\u7684\u6F14\u793A | `bool` | `false` |\n| `[changeOn]` | \u53EF\u901A\u8FC7\u81EA\u5B9A\u4E49\u7684\u51FD\u6570\u6765\u5224\u65AD\u70B9\u51FB\u83DC\u5355\u9009\u9879\u662F\u5426\u5E94\u8BE5\u53D1\u751F\u53D8\u5316\uFF0C\u5F53\u51FD\u6570\u8FD4\u56DE true \u65F6\uFF0C\u5C06\u53D1\u751F\u53D8\u5316 | `(option: NzCascaderOption, level: number) => boolean` | - |\n| `[triggerAction]` | \u89E6\u53D1\u83DC\u5355\u51FA\u73B0\u7684\u884C\u4E3A | `('click', 'hover')[]` | `['click']` |\n| `[valueProperty]` | \u503C `value` \u7684\u5C5E\u6027\u540D\u79F0 | `string` | `value` |\n| `[labelProperty]` | \u503C `label` \u7684\u5C5E\u6027\u540D\u79F0 | `string` | `label` |\n| `[multiple]` | \u662F\u5426\u591A\u9009 | `boolean` | `false` |\n| `(visibleChange)` | \u5F02\u6B65\u52A0\u8F7D\u4E8B\u4EF6 | `(value: boolean) => void` | - |\n| `(change)` | \u9009\u9879\u503C\u53D8\u66F4\u4E8B\u4EF6 | `(values: any[]) => void` | - |\n| `(selectionChange)` | \u9009\u9879\u53D8\u66F4\u4E8B\u4EF6 | `(values: NzCascaderOption[]) => void` | - |\n| `(clear)` | \u5185\u5BB9\u88AB\u6E05\u7A7A\u4E8B\u4EF6 | `() => void` | - |"}}};codes=[{id:"form-cascader-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import type { SFCascaderWidgetSchema } from '@delon/form/widgets/cascader';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-cascader-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)" /> \`,
  imports: [DelonFormModule]
})
export class FormCascaderSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      static: {
        type: 'number',
        title: 'Static',
        enum: [
          {
            value: 110000,
            label: '\u5317\u4EAC',
            parent: 0,
            children: [
              {
                value: 110100,
                label: '\u5317\u4EAC\u5E02',
                parent: 110000,
                children: [
                  {
                    value: 110101,
                    label: '\u4E1C\u57CE\u533A',
                    parent: 110100,
                    isLeaf: true
                  },
                  {
                    value: 110105,
                    label: '\u671D\u9633\u533A',
                    parent: 110100,
                    isLeaf: true
                  }
                ]
              }
            ]
          }
        ],
        ui: 'cascader',
        default: [110000, 110100, 110105]
      },
      async: {
        type: 'number',
        title: 'RealTime',
        ui: {
          widget: 'cascader',
          multiple: true,
          asyncData: (node, index) => {
            return new Promise(resolve => {
              setTimeout(() => {
                (node as NzSafeAny).children = [
                  { value: 110000, label: '\u5317\u4EAC', parent: 0 },
                  { value: 110100, label: '\u5317\u4EAC\u5E02', parent: 110000 },
                  { value: 110101, label: '\u4E1C\u57CE\u533A', parent: 110100 },
                  { value: 110105, label: '\u671D\u9633\u533A', parent: 110100 },
                  { value: 310000, label: '\u4E0A\u6D77', parent: 0 },
                  { value: 310100, label: '\u4E0A\u6D77\u5E02', parent: 310000 },
                  { value: 310101, label: '\u9EC4\u6D66\u533A', parent: 310100 },
                  { value: 310104, label: '\u5F90\u6C47\u533A', parent: 310100 }
                ].filter((w: NzSafeAny) => {
                  w.isLeaf = index === 1;
                  return w.parent === (node.value ?? 0);
                });
                resolve();
              }, 300);
            });
          }
        } as SFCascaderWidgetSchema,
        default: [110000, 110100, 110105]
      }
    }
  };

  submit(value: Record<string, unknown>): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/form/widgets/cascader/demo/simple.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-cascader"]],hostAttrs:[1,"d-block"],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-cascader-simple"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id))},dependencies:[S,et,F,w,C],encapsulation:2})};var nt=class o{msg=u(y);schema={properties:{base:{type:"string",title:"Base",ui:{widget:"color",title:"Pls choose a color",change:console.log}},showText:{type:"string",title:"Show Text",ui:{widget:"color",showText:!0,trigger:"hover",change:console.log}},defaultValue:{type:"string",title:"Default Value",ui:{widget:"color",showText:!0,defaultValue:"#0a0",change:console.log}},clearColor:{type:"string",title:"Clear Color",ui:{widget:"color",allowClear:!0,change:console.log}},disabled:{type:"string",title:"Disabled",ui:{widget:"color",showText:!0},readOnly:!0},rgb:{type:"string",title:"RGB",ui:{widget:"color",format:"rgb",showText:!0,change:console.log,formatChange:console.log}},block:{type:"string",title:"Block Color",ui:{widget:"color",block:!0},default:"#f50"}}};submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-color-simple"]],decls:1,vars:1,consts:[[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)},dependencies:[g,h],encapsulation:2})};var ot=class o{item={name:"color",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"color",subtitle:"Color",description:"Used when the user needs to customize the color selection.Non-built-in modules need to additionally register withColorWidget in json-schema.",group:"Non-built-in widgets",order:0,path:"packages/form/widgets/color/index.en-US.md",url:"/form/color/en"},text:`<p>Used when the user needs to customize the color selection.</p>
<h2 id="how_to_use"><a class="lake-link"><i data-anchor="how_to_use"></i></a>How to use</h2><p>Non-built-in modules need to additionally register <code>withColorWidget</code> in <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9" target="_blank" rel="noopener">json-schema</a>.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[format]</code></td>
<td>Format of color</td>
<td><code>rgb</code>\uFF5C<code>hex</code>\uFF5C<code>hsb</code></td>
<td><code>hex</code></td>
</tr>
<tr>
<td><code>[defaultValue]</code></td>
<td>Default value of color</td>
<td><code>string</code>\uFF5C<code>NzColor</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[allowClear]</code></td>
<td>Allow clearing color selected</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[trigger]</code></td>
<td>ColorPicker trigger mode</td>
<td><code>hover</code>\uFF5C<code>click</code></td>
<td><code>click</code></td>
</tr>
<tr>
<td><code>[showText]</code></td>
<td>Show color text</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[title]</code></td>
<td>Setting the title of the color picker</td>
<td><code>TemplateRef&lt;void&gt;</code>\uFF5C<code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(change)</code></td>
<td>Callback when value is changed</td>
<td><code>EventEmitter&lt;&#123; color: NzColor; format: string &#125;&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(formatChange)</code></td>
<td>Callback when <code>format</code> is changed</td>
<td><code>EventEmitter&lt;&#39;rgb&#39;\uFF5C&#39;hex&#39;\uFF5C&#39;hsb&#39;&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[block]</code></td>
<td>Color Block</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
</tbody></table>
`,toc:[{id:"how_to_use",title:"How to use"},{id:"api",title:"API",children:[{id:"ui",title:"ui"}]}],raw:"---\ntitle: color\nsubtitle: Color\ntype: Non-built-in widgets\n---\n\nUsed when the user needs to customize the color selection.\n\n## How to use\n\nNon-built-in modules need to additionally register `withColorWidget` in [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9).\n\n## API\n\n### ui\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[format]`       | Format of color       | `rgb`\uFF5C`hex`\uFF5C`hsb`                 | `hex`     |\n| `[defaultValue]` | Default value of color     | `string`\uFF5C`NzColor`                  | `false`   |\n| `[allowClear]`   | Allow clearing color selected  | `boolean`                         | `false`   |\n| `[trigger]`      | ColorPicker trigger mode | `hover`\uFF5C`click`                   | `click`   |\n| `[showText]`      | Show color text     | `boolean`                         | `false`   |\n| `[title]`      | Setting the title of the color picker | `TemplateRef<void>`\uFF5C`string`      | -         |\n| `(change)`     | Callback when value is changed    | `EventEmitter<{ color: NzColor; format: string }>`            | -         |\n| `(formatChange)`      | Callback when `format` is changed      | `EventEmitter<'rgb'\uFF5C'hex'\uFF5C'hsb'>` | -         |\n| `[block]`   | Color Block  | `boolean`                         | `false`  |"},"zh-CN":{meta:{title:"color",subtitle:"\u989C\u8272",description:"\u5F53\u7528\u6237\u9700\u8981\u81EA\u5B9A\u4E49\u989C\u8272\u9009\u62E9\u7684\u65F6\u5019\u4F7F\u7528\u3002\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 json-schema \u6CE8\u518C withColorWidget\u3002",group:"Non-built-in widgets",order:0,path:"packages/form/widgets/color/index.zh-CN.md",url:"/form/color/zh"},text:`<p>\u5F53\u7528\u6237\u9700\u8981\u81EA\u5B9A\u4E49\u989C\u8272\u9009\u62E9\u7684\u65F6\u5019\u4F7F\u7528\u3002</p>
<h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p>\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9" target="_blank" rel="noopener">json-schema</a> \u6CE8\u518C <code>withColorWidget</code>\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="ui_\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui_\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[format]</code></td>
<td>\u989C\u8272\u683C\u5F0F</td>
<td><code>rgb</code>\uFF5C<code>hex</code>\uFF5C<code>hsb</code></td>
<td><code>hex</code></td>
</tr>
<tr>
<td><code>[defaultValue]</code></td>
<td>\u989C\u8272\u9ED8\u8BA4\u7684\u503C</td>
<td><code>string</code>\uFF5C<code>NzColor</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[allowClear]</code></td>
<td>\u5141\u8BB8\u6E05\u9664\u9009\u62E9\u7684\u989C\u8272</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[trigger]</code></td>
<td>\u989C\u8272\u9009\u62E9\u5668\u7684\u89E6\u53D1\u6A21\u5F0F</td>
<td><code>hover</code>\uFF5C<code>click</code></td>
<td><code>click</code></td>
</tr>
<tr>
<td><code>[showText]</code></td>
<td>\u663E\u793A\u989C\u8272\u6587\u672C</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[title]</code></td>
<td>\u8BBE\u7F6E\u989C\u8272\u9009\u62E9\u5668\u7684\u6807\u9898</td>
<td><code>TemplateRef&lt;void&gt;</code>\uFF5C<code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(change)</code></td>
<td>\u989C\u8272\u53D8\u5316\u7684\u56DE\u8C03</td>
<td><code>EventEmitter&lt;&#123; color: NzColor; format: string &#125;&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(formatChange)</code></td>
<td>\u989C\u8272\u683C\u5F0F\u53D8\u5316\u7684\u56DE\u8C03</td>
<td><code>EventEmitter&lt;&#39;rgb&#39;\uFF5C&#39;hex&#39;\uFF5C&#39;hsb&#39;&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[block]</code></td>
<td>\u662F\u5426\u989C\u8272\u5757</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
</tbody></table>
`,toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528"},{id:"api",title:"API",children:[{id:"ui_\u5C5E\u6027",title:"ui \u5C5E\u6027"}]}],raw:"---\ntitle: color\nsubtitle: \u989C\u8272\ntype: Non-built-in widgets\n---\n\n\u5F53\u7528\u6237\u9700\u8981\u81EA\u5B9A\u4E49\u989C\u8272\u9009\u62E9\u7684\u65F6\u5019\u4F7F\u7528\u3002\n\n## \u5982\u4F55\u4F7F\u7528\n\n\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9) \u6CE8\u518C `withColorWidget`\u3002\n\n\n## API\n\n### ui \u5C5E\u6027\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[format]`       | \u989C\u8272\u683C\u5F0F       | `rgb`\uFF5C`hex`\uFF5C`hsb`                 | `hex`    |\n| `[defaultValue]` | \u989C\u8272\u9ED8\u8BA4\u7684\u503C     | `string`\uFF5C`NzColor`                  | -        |\n| `[allowClear]`   | \u5141\u8BB8\u6E05\u9664\u9009\u62E9\u7684\u989C\u8272  | `boolean`                         | `false`  |\n| `[trigger]`      | \u989C\u8272\u9009\u62E9\u5668\u7684\u89E6\u53D1\u6A21\u5F0F | `hover`\uFF5C`click`                   | `click`  |\n| `[showText]`      | \u663E\u793A\u989C\u8272\u6587\u672C     | `boolean`                         | `false`  |\n| `[title]`      | \u8BBE\u7F6E\u989C\u8272\u9009\u62E9\u5668\u7684\u6807\u9898 | `TemplateRef<void>`\uFF5C`string`      | -        |\n| `(change)`     | \u989C\u8272\u53D8\u5316\u7684\u56DE\u8C03    | `EventEmitter<{ color: NzColor; format: string }>` | -        |\n| `(formatChange)`      | \u989C\u8272\u683C\u5F0F\u53D8\u5316\u7684\u56DE\u8C03  | `EventEmitter<'rgb'\uFF5C'hex'\uFF5C'hsb'>` | -        |\n| `[block]`   | \u662F\u5426\u989C\u8272\u5757  | `boolean`                         | `false`  |"}}};codes=[{id:"form-color-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import type { SFColorWidgetSchema } from '@delon/form/widgets/color';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-color-simple',
  template: \`<sf [schema]="schema" (formSubmit)="submit($event)" />\`,
  imports: [DelonFormModule]
})
export class FormColorSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      base: {
        type: 'string',
        title: 'Base',
        ui: {
          widget: 'color',
          title: 'Pls choose a color',
          change: console.log
        } as SFColorWidgetSchema
      },
      showText: {
        type: 'string',
        title: 'Show Text',
        ui: {
          widget: 'color',
          showText: true,
          trigger: 'hover',
          change: console.log
        } as SFColorWidgetSchema
      },
      defaultValue: {
        type: 'string',
        title: 'Default Value',
        ui: {
          widget: 'color',
          showText: true,
          defaultValue: '#0a0',
          change: console.log
        } as SFColorWidgetSchema
      },
      clearColor: {
        type: 'string',
        title: 'Clear Color',
        ui: {
          widget: 'color',
          allowClear: true,
          change: console.log
        } as SFColorWidgetSchema
      },
      disabled: {
        type: 'string',
        title: 'Disabled',
        ui: {
          widget: 'color',
          showText: true
        } as SFColorWidgetSchema,
        readOnly: true
      },
      rgb: {
        type: 'string',
        title: 'RGB',
        ui: {
          widget: 'color',
          format: 'rgb',
          showText: true,
          change: console.log,
          formatChange: console.log
        } as SFColorWidgetSchema
      },
      block: {
        type: 'string',
        title: 'Block Color',
        ui: {
          widget: 'color',
          block: true
        } as SFColorWidgetSchema,
        default: '#f50'
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/form/widgets/color/demo/simple.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-color"]],hostAttrs:[1,"d-block"],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-color-simple"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id))},dependencies:[S,nt,F,w,C],encapsulation:2})};var Mt=["asdf","cipchk","\u4E2D\u6587","\u306B\u307B\u3093\u3054"],dt=class o{msg=u(y);schema={properties:{remark:{type:"string",title:"\u63CF\u8FF0",enum:Mt,minimum:2,maximum:5,ui:{widget:"mention",inputStyle:"textarea"}},async:{type:"string",title:"Async",ui:{widget:"mention",asynxcData:()=>z(Mt).pipe(x(1e3))}},real_time:{type:"string",title:"RealTime",ui:{widget:"mention",loadData:n=>z(Mt.filter(e=>e.indexOf(n.value)!==-1)).pipe(x(300))}}}};submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-mention-simple"]],decls:1,vars:1,consts:[[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)},dependencies:[g,h],encapsulation:2})};var at=class o{item={name:"mention",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"mention",subtitle:"Mention",description:"Mention widget.Non-built-in modules need to additionally register withMentionWidget in json-schema.You must set valueWith parameter if there is no lab...",group:"Non-built-in widgets",order:0,path:"packages/form/widgets/mention/index.en-US.md",url:"/form/mention/en"},text:`<p>Mention widget.</p>
<h2 id="how_to_use"><a class="lake-link"><i data-anchor="how_to_use"></i></a>How to use</h2><p>Non-built-in modules need to additionally register <code>withMentionWidget</code> in <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9" target="_blank" rel="noopener">json-schema</a>.</p>
<h2 id="note"><a class="lake-link"><i data-anchor="note"></i></a>Note</h2><ul>
<li>You <strong>must</strong> set <code>valueWith</code> parameter if there is no <code>label</code> property in data.</li>
</ul>
<h2 id="data_source"><a class="lake-link"><i data-anchor="data_source"></i></a>Data Source</h2><p><strong>Static</strong></p>
<p>One time fetching data, data source is from <code>asyncData</code>, <code>enum</code>.</p>
<p><strong>Realtime</strong></p>
<p>Every select triggers a HTTP request, data source is from <code>asyncData</code>.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[enum]</code></td>
<td>Static data source</td>
<td><code>SFSchemaEnumType[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[readOnly]</code></td>
<td>Read only</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[minimum]</code></td>
<td>Minimum time of mention</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[maximum]</code></td>
<td>Maximum time of mention</td>
<td><code>number</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[asyncData]</code></td>
<td>Asynchronous static data source</td>
<td><code>(input: string) =&gt; Observable&lt;SFSchemaEnumType[]&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[size]</code></td>
<td>Size, equals to <code>nzSize</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[placeholder]</code></td>
<td>Placeholder</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[loadData]</code></td>
<td>Realtime data</td>
<td><code>(option: MentionOnSearchTypes) =&gt; Observable&lt;SFSchemaEnumType[]&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[notFoundContent]</code></td>
<td>Content when nothing found</td>
<td><code>string</code></td>
<td><code>\u65E0\u5339\u914D\u7ED3\u679C\uFF0C\u8F7B\u6572\u7A7A\u683C\u5B8C\u6210\u8F93\u5165</code></td>
</tr>
<tr>
<td><code>[placement]</code></td>
<td>Position of suggestion box</td>
<td><code>button,top</code></td>
<td><code>button</code></td>
</tr>
<tr>
<td><code>[prefix]</code></td>
<td>Character to trigger to popup dropdown list</td>
<td><code>&#39;string&#39;</code> <code>&#39;string[]&#39;</code></td>
<td><code>&#64;</code></td>
</tr>
<tr>
<td><code>[valueWith]</code></td>
<td>Function that maps a suggestion value</td>
<td><code>(value: any) =&gt; string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[select]</code></td>
<td>Callback when option in dropdown list is selected</td>
<td><code>(value: any) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[inputStyle]</code></td>
<td>Input type</td>
<td><code>text, textarea</code></td>
<td><code>text</code></td>
</tr>
<tr>
<td><code>[autosize]</code></td>
<td>Adaptive content height, can be set object:<code>&#123; minRows: 2, maxRows: 6 &#125;</code></td>
<td><code>&#123; minRows?: number; maxRows?: number &#125;</code></td>
<td><code>&#123; minRows: 1, maxRows: 0 &#125;</code></td>
</tr>
</tbody></table>
`,toc:[{id:"how_to_use",title:"How to use"},{id:"note",title:"Note"},{id:"data_source",title:"Data Source"},{id:"api",title:"API",children:[{id:"schema",title:"schema"},{id:"ui",title:"ui"}]}],raw:"---\ntitle: mention\nsubtitle: Mention\ntype: Non-built-in widgets\n---\n\nMention widget.\n\n## How to use\n\nNon-built-in modules need to additionally register `withMentionWidget` in [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9).\n\n## Note\n\n- You **must** set `valueWith` parameter if there is no `label` property in data.\n\n## Data Source\n\n**Static**\n\nOne time fetching data, data source is from `asyncData`, `enum`.\n\n**Realtime**\n\nEvery select triggers a HTTP request, data source is from `asyncData`.\n\n## API\n\n### schema\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[enum]` | Static data source | `SFSchemaEnumType[]` | - |\n| `[readOnly]` | Read only | `boolean` | - |\n| `[minimum]` | Minimum time of mention | `number` | - |\n| `[maximum]` | Maximum time of mention | `number` | - |\n\n### ui\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[asyncData]` | Asynchronous static data source | `(input: string) => Observable<SFSchemaEnumType[]>` | - |\n| `[size]` | Size, equals to `nzSize` | `string` | - |\n| `[placeholder]` | Placeholder | `string` | - |\n| `[loadData]` | Realtime data | `(option: MentionOnSearchTypes) => Observable<SFSchemaEnumType[]>` | - |\n| `[notFoundContent]` | Content when nothing found | `string` | `\u65E0\u5339\u914D\u7ED3\u679C\uFF0C\u8F7B\u6572\u7A7A\u683C\u5B8C\u6210\u8F93\u5165` |\n| `[placement]` | Position of suggestion box | `button,top` | `button` |\n| `[prefix]` | Character to trigger to popup dropdown list | `'string'` `'string[]'` | `@` |\n| `[valueWith]` | Function that maps a suggestion value | `(value: any) => string` | - |\n| `[select]` | Callback when option in dropdown list is selected | `(value: any) => void` | - |\n| `[inputStyle]` | Input type | `text, textarea` | `text` |\n| `[autosize]` | Adaptive content height, can be set object:`{ minRows: 2, maxRows: 6 }` | `{ minRows?: number; maxRows?: number }` | `{ minRows: 1, maxRows: 0 }` |"},"zh-CN":{meta:{title:"mention",subtitle:"\u63D0\u53CA",description:"\u63D0\u53CA\u7EC4\u4EF6\u3002\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 json-schema \u6CE8\u518C withMentionWidget\u3002\u82E5\u6570\u636E\u4E2D\u4E0D\u5305\u62EC label \u5C5E\u6027\uFF0C\u5219\u52A1\u5FC5\u6307\u5B9A valueWith \u53C2\u6570\u3002\u9759\u6001\u6307\u4E00\u6B21\u6027\u83B7\u53D6\u6570\u636E\uFF0C\u6570\u636E\u6765\u6E90\u4E8E asyncData\u3001enum\u3002\u5B9E\u65F6\u6307\u6BCF\u4E00\u6B21\u9009\u62E9\u4F1A\u89E6\u53D1HTTP\u8BF7\u6C42\uFF0C\u6570\u636E\u6765\u6E90\u4E8E loadData",group:"Non-built-in widgets",order:0,path:"packages/form/widgets/mention/index.zh-CN.md",url:"/form/mention/zh"},text:`<p>\u63D0\u53CA\u7EC4\u4EF6\u3002</p>
<h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p>\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9" target="_blank" rel="noopener">json-schema</a> \u6CE8\u518C <code>withMentionWidget</code>\u3002</p>
<h2 id="\u6CE8\u610F\u4E8B\u9879"><a class="lake-link"><i data-anchor="\u6CE8\u610F\u4E8B\u9879"></i></a>\u6CE8\u610F\u4E8B\u9879</h2><ul>
<li>\u82E5\u6570\u636E\u4E2D\u4E0D\u5305\u62EC <code>label</code> \u5C5E\u6027\uFF0C\u5219<strong>\u52A1\u5FC5</strong>\u6307\u5B9A <code>valueWith</code> \u53C2\u6570\u3002</li>
</ul>
<h2 id="\u6570\u636E\u6E90\u8BF4\u660E"><a class="lake-link"><i data-anchor="\u6570\u636E\u6E90\u8BF4\u660E"></i></a>\u6570\u636E\u6E90\u8BF4\u660E</h2><p><strong>\u9759\u6001</strong></p>
<p>\u6307\u4E00\u6B21\u6027\u83B7\u53D6\u6570\u636E\uFF0C\u6570\u636E\u6765\u6E90\u4E8E <code>asyncData</code>\u3001<code>enum</code>\u3002</p>
<p><strong>\u5B9E\u65F6</strong></p>
<p>\u6307\u6BCF\u4E00\u6B21\u9009\u62E9\u4F1A\u89E6\u53D1HTTP\u8BF7\u6C42\uFF0C\u6570\u636E\u6765\u6E90\u4E8E <code>loadData</code>\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema_\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema_\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[enum]</code></td>
<td>\u9759\u6001\u6570\u636E\u6E90</td>
<td><code>SFSchemaEnumType[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[readOnly]</code></td>
<td>\u7981\u7528\u72B6\u6001</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[minimum]</code></td>
<td>\u6700\u5C11\u63D0\u53CA\u6B21\u6570</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[maximum]</code></td>
<td>\u6700\u591A\u63D0\u53CA\u6B21\u6570</td>
<td><code>number</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui_\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui_\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[asyncData]</code></td>
<td>\u5F02\u6B65\u9759\u6001\u6570\u636E\u6E90</td>
<td><code>(input: string) =&gt; Observable&lt;SFSchemaEnumType[]&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[size]</code></td>
<td>\u5927\u5C0F\uFF0C\u7B49\u540C <code>nzSize</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[placeholder]</code></td>
<td>\u5728\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u8BAF\u606F</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[loadData]</code></td>
<td>\u5B9E\u65F6\u6570\u636E</td>
<td><code>(option: MentionOnSearchTypes) =&gt; Observable&lt;SFSchemaEnumType[]&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[notFoundContent]</code></td>
<td>\u672A\u627E\u5230\u65F6\u7684\u5185\u5BB9</td>
<td><code>string</code></td>
<td><code>\u65E0\u5339\u914D\u7ED3\u679C\uFF0C\u8F7B\u6572\u7A7A\u683C\u5B8C\u6210\u8F93\u5165</code></td>
</tr>
<tr>
<td><code>[placement]</code></td>
<td>\u5EFA\u8BAE\u6846\u4F4D\u7F6E</td>
<td><code>button,top</code></td>
<td><code>button</code></td>
</tr>
<tr>
<td><code>[prefix]</code></td>
<td>\u89E6\u53D1\u5F39\u51FA\u4E0B\u62C9\u6846\u7684\u5B57\u7B26</td>
<td><code>&#39;string&#39;</code> <code>&#39;string[]&#39;</code></td>
<td><code>&#64;</code></td>
</tr>
<tr>
<td><code>[valueWith]</code></td>
<td>\u5EFA\u8BAE\u9009\u9879\u7684\u53D6\u503C\u65B9\u6CD5</td>
<td><code>(value: any) =&gt; string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[select]</code></td>
<td>\u4E0B\u62C9\u6846\u9009\u62E9\u5EFA\u8BAE\u65F6\u56DE\u8C03</td>
<td><code>(value: any) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[inputStyle]</code></td>
<td>\u6587\u672C\u6846\u7C7B\u578B</td>
<td><code>text, textarea</code></td>
<td><code>text</code></td>
</tr>
<tr>
<td><code>[autosize]</code></td>
<td>\u81EA\u9002\u5E94\u5185\u5BB9\u9AD8\u5EA6\uFF0C\u53EF\u8BBE\u7F6E\u5BF9\u8C61\uFF1A<code>&#123; minRows: 2, maxRows: 6 &#125;</code></td>
<td><code>&#123; minRows?: number; maxRows?: number &#125;</code></td>
<td><code>&#123; minRows: 1, maxRows: 0 &#125;</code></td>
</tr>
</tbody></table>
`,toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528"},{id:"\u6CE8\u610F\u4E8B\u9879",title:"\u6CE8\u610F\u4E8B\u9879"},{id:"\u6570\u636E\u6E90\u8BF4\u660E",title:"\u6570\u636E\u6E90\u8BF4\u660E"},{id:"api",title:"API",children:[{id:"schema_\u5C5E\u6027",title:"schema \u5C5E\u6027"},{id:"ui_\u5C5E\u6027",title:"ui \u5C5E\u6027"}]}],raw:"---\ntitle: mention\nsubtitle: \u63D0\u53CA\ntype: Non-built-in widgets\n---\n\n\u63D0\u53CA\u7EC4\u4EF6\u3002\n\n## \u5982\u4F55\u4F7F\u7528\n\n\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9) \u6CE8\u518C `withMentionWidget`\u3002\n\n## \u6CE8\u610F\u4E8B\u9879\n\n- \u82E5\u6570\u636E\u4E2D\u4E0D\u5305\u62EC `label` \u5C5E\u6027\uFF0C\u5219**\u52A1\u5FC5**\u6307\u5B9A `valueWith` \u53C2\u6570\u3002\n\n## \u6570\u636E\u6E90\u8BF4\u660E\n\n**\u9759\u6001**\n\n\u6307\u4E00\u6B21\u6027\u83B7\u53D6\u6570\u636E\uFF0C\u6570\u636E\u6765\u6E90\u4E8E `asyncData`\u3001`enum`\u3002\n\n**\u5B9E\u65F6**\n\n\u6307\u6BCF\u4E00\u6B21\u9009\u62E9\u4F1A\u89E6\u53D1HTTP\u8BF7\u6C42\uFF0C\u6570\u636E\u6765\u6E90\u4E8E `loadData`\u3002\n\n## API\n\n### schema \u5C5E\u6027\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[enum]` | \u9759\u6001\u6570\u636E\u6E90 | `SFSchemaEnumType[]` | - |\n| `[readOnly]` | \u7981\u7528\u72B6\u6001 | `boolean` | - |\n| `[minimum]` | \u6700\u5C11\u63D0\u53CA\u6B21\u6570 | `number` | - |\n| `[maximum]` | \u6700\u591A\u63D0\u53CA\u6B21\u6570 | `number` | - |\n\n### ui \u5C5E\u6027\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[asyncData]` | \u5F02\u6B65\u9759\u6001\u6570\u636E\u6E90 | `(input: string) => Observable<SFSchemaEnumType[]>` | - |\n| `[size]` | \u5927\u5C0F\uFF0C\u7B49\u540C `nzSize` | `string` | - |\n| `[placeholder]` | \u5728\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u8BAF\u606F | `string` | - |\n| `[loadData]` | \u5B9E\u65F6\u6570\u636E | `(option: MentionOnSearchTypes) => Observable<SFSchemaEnumType[]>` | - |\n| `[notFoundContent]` | \u672A\u627E\u5230\u65F6\u7684\u5185\u5BB9 | `string` | `\u65E0\u5339\u914D\u7ED3\u679C\uFF0C\u8F7B\u6572\u7A7A\u683C\u5B8C\u6210\u8F93\u5165` |\n| `[placement]` | \u5EFA\u8BAE\u6846\u4F4D\u7F6E | `button,top` | `button` |\n| `[prefix]` | \u89E6\u53D1\u5F39\u51FA\u4E0B\u62C9\u6846\u7684\u5B57\u7B26 | `'string'` `'string[]'` | `@` |\n| `[valueWith]` | \u5EFA\u8BAE\u9009\u9879\u7684\u53D6\u503C\u65B9\u6CD5 | `(value: any) => string` | - |\n| `[select]` | \u4E0B\u62C9\u6846\u9009\u62E9\u5EFA\u8BAE\u65F6\u56DE\u8C03 | `(value: any) => void` | - |\n| `[inputStyle]` | \u6587\u672C\u6846\u7C7B\u578B | `text, textarea` | `text` |\n| `[autosize]` | \u81EA\u9002\u5E94\u5185\u5BB9\u9AD8\u5EA6\uFF0C\u53EF\u8BBE\u7F6E\u5BF9\u8C61\uFF1A`{ minRows: 2, maxRows: 6 }` | `{ minRows?: number; maxRows?: number }` | `{ minRows: 1, maxRows: 0 }` |"}}};codes=[{id:"form-mention-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, inject } from '@angular/core';
import { of, delay } from 'rxjs';

import { DelonFormModule, SFSchema } from '@delon/form';
import type { SFMentionWidgetSchema } from '@delon/form/widgets/mention';
import { MentionOnSearchTypes } from 'ng-zorro-antd/mention';
import { NzMessageService } from 'ng-zorro-antd/message';

const DATA = ['asdf', 'cipchk', '\u4E2D\u6587', '\u306B\u307B\u3093\u3054'];

@Component({
  selector: 'form-mention-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)" /> \`,
  imports: [DelonFormModule]
})
export class FormMentionSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      remark: {
        type: 'string',
        title: '\u63CF\u8FF0',
        enum: DATA,
        minimum: 2,
        maximum: 5,
        ui: {
          widget: 'mention',
          inputStyle: 'textarea'
        } as SFMentionWidgetSchema
      },
      // \u5F02\u6B65\u9759\u6001\u6570\u636E\u6E90
      async: {
        type: 'string',
        title: 'Async',
        ui: {
          widget: 'mention',
          asynxcData: () => of(DATA).pipe(delay(1000))
        } as SFMentionWidgetSchema
      },
      // \u5B9E\u65F6\u6570\u636E
      real_time: {
        type: 'string',
        title: 'RealTime',
        ui: {
          widget: 'mention',
          loadData: (option: MentionOnSearchTypes) =>
            of(DATA.filter(item => item.indexOf(option.value) !== -1)).pipe(delay(300))
        } as SFMentionWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/form/widgets/mention/demo/simple.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-mention"]],hostAttrs:[1,"d-block"],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-mention-simple"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id))},dependencies:[S,dt,F,w,C],encapsulation:2})};var it=class o{msg=u(y);schema={properties:{base:{type:"string",title:"Base",default:"https://ng-alain.com/",ui:{widget:"qr-code",refresh:console.log}},icon:{type:"string",title:"With Icon",default:"https://ng-alain.com/",ui:{widget:"qr-code",icon:"https://ng-alain.com/assets/logo-color.svg",bordered:!0}},color:{type:"string",title:"Color",default:"https://ng-alain.com/",ui:{widget:"qr-code",color:"#f50"}}}};submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-qr-code-simple"]],decls:1,vars:1,consts:[[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)},dependencies:[g,h],encapsulation:2})};var rt=class o{item={name:"qr-code",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"qr-code",subtitle:"QRCode",description:"Used when the link needs to be converted into a QR Code.Non-built-in modules need to additionally register withQrCodeWidget in json-schema.",group:"Non-built-in widgets",order:0,path:"packages/form/widgets/qr-code/index.en-US.md",url:"/form/qr-code/en"},text:`<p>Used when the link needs to be converted into a QR Code.</p>
<h2 id="how_to_use"><a class="lake-link"><i data-anchor="how_to_use"></i></a>How to use</h2><p>Non-built-in modules need to additionally register <code>withQrCodeWidget</code> in <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9" target="_blank" rel="noopener">json-schema</a>.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[color]</code></td>
<td>QR code Color</td>
<td><code>string</code></td>
<td><code>#000</code></td>
</tr>
<tr>
<td><code>[bgColor]</code></td>
<td>QR code background color</td>
<td><code>string</code></td>
<td><code>#FFFFFF</code></td>
</tr>
<tr>
<td><code>[qrSize]</code></td>
<td>QR code Size</td>
<td><code>number</code></td>
<td><code>160</code></td>
</tr>
<tr>
<td><code>[padding]</code></td>
<td>QR code Padding</td>
<td><code>number | number[]</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[icon]</code></td>
<td>Icon address in QR code</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[iconSize]</code></td>
<td>The size of the icon in the QR code</td>
<td><code>number</code></td>
<td><code>40</code></td>
</tr>
<tr>
<td><code>[bordered]</code></td>
<td>Whether has border style</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[status]</code></td>
<td>QR code status</td>
<td><code>&#39;active&#39;\uFF5C&#39;expired&#39; \uFF5C&#39;loading&#39;</code></td>
<td><code>active</code></td>
</tr>
<tr>
<td><code>[level]</code></td>
<td>Error Code Level</td>
<td><code>&#39;L&#39;\uFF5C&#39;M&#39;\uFF5C&#39;Q&#39;\uFF5C&#39;H&#39;</code></td>
<td><code>M</code></td>
</tr>
<tr>
<td><code>(refresh)</code></td>
<td>callback</td>
<td><code>EventEmitter&lt;string&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:"how_to_use",title:"How to use"},{id:"api",title:"API",children:[{id:"ui",title:"ui"}]}],raw:"---\ntitle: qr-code\nsubtitle: QRCode\ntype: Non-built-in widgets\n---\n\nUsed when the link needs to be converted into a QR Code.\n\n## How to use\n\nNon-built-in modules need to additionally register `withQrCodeWidget` in [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9).\n\n## API\n\n### ui\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[color]`           | QR code Color                       | `string`                        | `#000`    |\n| `[bgColor]` | QR code background color            | `string`                        | `#FFFFFF` |\n| `[qrSize]`            | QR code Size                        | `number`                        | `160`     |\n| `[padding]`         | QR code Padding                     | `number \\| number[]`            | `0`       |\n| `[icon]`            | Icon address in QR code             | `string`                        | -         |\n| `[iconSize]`        | The size of the icon in the QR code | `number`                        | `40`      |\n| `[bordered]`        | Whether has border style            | `boolean`                       | `true`    |\n| `[status]`          | QR code status                      | `'active'\uFF5C'expired' \uFF5C'loading'` | `active`  |\n| `[level]`           | Error Code Level                    | `'L'\uFF5C'M'\uFF5C'Q'\uFF5C'H'`               | `M`       |\n| `(refresh)`         | callback                            | `EventEmitter<string>`          | -         |"},"zh-CN":{meta:{title:"qr-code",subtitle:"\u4E8C\u7EF4\u7801",description:"\u5F53\u9700\u8981\u5C06\u94FE\u63A5\u8F6C\u6362\u6210\u4E3A\u4E8C\u7EF4\u7801\u65F6\u4F7F\u7528\u3002\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 json-schema \u6CE8\u518C withQrCodeWidget\u3002",group:"Non-built-in widgets",order:0,path:"packages/form/widgets/qr-code/index.zh-CN.md",url:"/form/qr-code/zh"},text:`<p>\u5F53\u9700\u8981\u5C06\u94FE\u63A5\u8F6C\u6362\u6210\u4E3A\u4E8C\u7EF4\u7801\u65F6\u4F7F\u7528\u3002</p>
<h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p>\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9" target="_blank" rel="noopener">json-schema</a> \u6CE8\u518C <code>withQrCodeWidget</code>\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="ui_\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui_\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[color]</code></td>
<td>\u4E8C\u7EF4\u7801\u989C\u8272</td>
<td><code>string</code></td>
<td><code>#000</code></td>
</tr>
<tr>
<td><code>[bgColor]</code></td>
<td>\u4E8C\u7EF4\u7801\u80CC\u666F\u989C\u8272</td>
<td><code>string</code></td>
<td><code>#FFFFFF</code></td>
</tr>
<tr>
<td><code>[qrSize]</code></td>
<td>\u4E8C\u7EF4\u7801\u5927\u5C0F</td>
<td><code>number</code></td>
<td><code>160</code></td>
</tr>
<tr>
<td><code>[padding]</code></td>
<td>\u4E8C\u7EF4\u7801\u586B\u5145</td>
<td><code>number | number[]</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[icon]</code></td>
<td>\u4E8C\u7EF4\u7801\u4E2D icon \u5730\u5740</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[iconSize]</code></td>
<td>\u4E8C\u7EF4\u7801\u4E2D icon \u5927\u5C0F</td>
<td><code>number</code></td>
<td><code>40</code></td>
</tr>
<tr>
<td><code>[bordered]</code></td>
<td>\u662F\u5426\u6709\u8FB9\u6846</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[status]</code></td>
<td>\u4E8C\u7EF4\u7801\u72B6\u6001</td>
<td><code>&#39;active&#39;\uFF5C&#39;expired&#39; \uFF5C&#39;loading&#39;</code></td>
<td><code>active</code></td>
</tr>
<tr>
<td><code>[level]</code></td>
<td>\u4E8C\u7EF4\u7801\u5BB9\u9519\u7B49\u7EA7</td>
<td><code>&#39;L&#39;\uFF5C&#39;M&#39;\uFF5C&#39;Q&#39;\uFF5C&#39;H&#39;</code></td>
<td><code>M</code></td>
</tr>
<tr>
<td><code>(refresh)</code></td>
<td>\u70B9\u51FB&quot;\u70B9\u51FB\u5237\u65B0&quot;\u7684\u56DE\u8C03</td>
<td><code>EventEmitter&lt;string&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528"},{id:"api",title:"API",children:[{id:"ui_\u5C5E\u6027",title:"ui \u5C5E\u6027"}]}],raw:"---\ntitle: qr-code\nsubtitle: \u4E8C\u7EF4\u7801\ntype: Non-built-in widgets\n---\n\n\u5F53\u9700\u8981\u5C06\u94FE\u63A5\u8F6C\u6362\u6210\u4E3A\u4E8C\u7EF4\u7801\u65F6\u4F7F\u7528\u3002\n\n## \u5982\u4F55\u4F7F\u7528\n\n\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9) \u6CE8\u518C `withQrCodeWidget`\u3002\n\n## API\n\n### ui \u5C5E\u6027\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[color]`    | \u4E8C\u7EF4\u7801\u989C\u8272        | `string`                          | `#000`    |\n| `[bgColor]` | \u4E8C\u7EF4\u7801\u80CC\u666F\u989C\u8272      | `string`                        | `#FFFFFF` |\n| `[qrSize]`     | \u4E8C\u7EF4\u7801\u5927\u5C0F        | `number`                          | `160`     |\n| `[padding]`  | \u4E8C\u7EF4\u7801\u586B\u5145        | `number \\| number[]`              | `0`       |\n| `[icon]`     | \u4E8C\u7EF4\u7801\u4E2D icon \u5730\u5740 | `string`                          | -         |\n| `[iconSize]` | \u4E8C\u7EF4\u7801\u4E2D icon \u5927\u5C0F | `number`                          | `40`      |\n| `[bordered]` | \u662F\u5426\u6709\u8FB9\u6846        | `boolean`                         | `true`    |\n| `[status]`   | \u4E8C\u7EF4\u7801\u72B6\u6001        | `'active'\uFF5C'expired' \uFF5C'loading'`   | `active`  |\n| `[level]`    | \u4E8C\u7EF4\u7801\u5BB9\u9519\u7B49\u7EA7      | `'L'\uFF5C'M'\uFF5C'Q'\uFF5C'H'`                 | `M`       |\n| `(refresh)`  | \u70B9\u51FB\"\u70B9\u51FB\u5237\u65B0\"\u7684\u56DE\u8C03  | `EventEmitter<string>`            | -         |"}}};codes=[{id:"form-qr-code-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import type { SFQrCodeWidgetSchema } from '@delon/form/widgets/qr-code';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-qr-code-simple',
  template: \`<sf [schema]="schema" (formSubmit)="submit($event)" />\`,
  imports: [DelonFormModule]
})
export class FormQrCodeSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      base: {
        type: 'string',
        title: 'Base',
        default: 'https://ng-alain.com/',
        ui: {
          widget: 'qr-code',
          refresh: console.log
        } as SFQrCodeWidgetSchema
      },
      icon: {
        type: 'string',
        title: 'With Icon',
        default: 'https://ng-alain.com/',
        ui: {
          widget: 'qr-code',
          icon: 'https://ng-alain.com/assets/logo-color.svg',
          bordered: true
        } as SFQrCodeWidgetSchema
      },
      color: {
        type: 'string',
        title: 'Color',
        default: 'https://ng-alain.com/',
        ui: {
          widget: 'qr-code',
          color: '#f50'
        } as SFQrCodeWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/form/widgets/qr-code/demo/simple.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-qr-code"]],hostAttrs:[1,"d-block"],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-qr-code-simple"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id))},dependencies:[S,it,F,w,C],encapsulation:2})};var ct=class o{msg=u(y);schema={properties:{rate:{type:"number",title:"\u8BC4\u7EA7",default:4.5,ui:{widget:"rate"}},rate2:{type:"number",title:"\u8BC4\u7EA7",maximum:5,multipleOf:.5,default:4.5,ui:{widget:"rate",text:"{{value}} starts"}}}};submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-rate-simple"]],decls:1,vars:1,consts:[[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)},dependencies:[g,h],encapsulation:2})};var st=class o{item={name:"rate",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"rate",subtitle:"Rate",description:"A quick rating operation on something.Non-built-in modules need to additionally register withRateWidget in json-schema.",group:"Non-built-in widgets",order:0,path:"packages/form/widgets/rate/index.en-US.md",url:"/form/rate/en"},text:`<p>A quick rating operation on something.</p>
<h2 id="how_to_use"><a class="lake-link"><i data-anchor="how_to_use"></i></a>How to use</h2><p>Non-built-in modules need to additionally register <code>withRateWidget</code> in <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9" target="_blank" rel="noopener">json-schema</a>.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[maximum]</code></td>
<td>star count</td>
<td><code>number</code></td>
<td><code>5</code></td>
</tr>
<tr>
<td><code>[multipleOf]</code></td>
<td><code>0.5</code> indicates allow semi selection</td>
<td><code>number</code></td>
<td><code>0.5</code></td>
</tr>
</tbody></table>
<h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[allowClear]</code></td>
<td>whether to allow clear when click again</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[autoFocus]</code></td>
<td>get focus when component mounted</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[text]</code></td>
<td>Reminder text template, <code>&#123;&#123;value&#125;&#125;</code> indicates the current value</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[tooltips]</code></td>
<td>Customize tooltip by each character</td>
<td><code>string[]</code></td>
<td><code>[]</code></td>
</tr>
</tbody></table>
`,toc:[{id:"how_to_use",title:"How to use"},{id:"api",title:"API",children:[{id:"schema",title:"schema"},{id:"ui",title:"ui"}]}],raw:"---\ntitle: rate\nsubtitle: Rate\ntype: Non-built-in widgets\n---\n\nA quick rating operation on something.\n\n## How to use\n\nNon-built-in modules need to additionally register `withRateWidget` in [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9).\n\n## API\n\n### schema\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[maximum]` | star count | `number` | `5` |\n| `[multipleOf]` | `0.5` indicates allow semi selection | `number` | `0.5` |\n\n### ui\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[allowClear]` | whether to allow clear when click again | `boolean` | `true` |\n| `[autoFocus]` | get focus when component mounted | `boolean` | `false` |\n| `[text]` | Reminder text template, `{{value}}` indicates the current value | `string` | - |\n| `[tooltips]` | Customize tooltip by each character | `string[]` | `[]` |"},"zh-CN":{meta:{title:"rate",subtitle:"\u8BC4\u5206",description:"\u5BF9\u8BC4\u4EF7\u8FDB\u884C\u5C55\u793A\uFF0C\u5BF9\u4E8B\u7269\u8FDB\u884C\u5FEB\u901F\u7684\u8BC4\u7EA7\u64CD\u4F5C\u3002\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 json-schema \u6CE8\u518C withRateWidget\u3002",group:"Non-built-in widgets",order:0,path:"packages/form/widgets/rate/index.zh-CN.md",url:"/form/rate/zh"},text:`<p>\u5BF9\u8BC4\u4EF7\u8FDB\u884C\u5C55\u793A\uFF0C\u5BF9\u4E8B\u7269\u8FDB\u884C\u5FEB\u901F\u7684\u8BC4\u7EA7\u64CD\u4F5C\u3002</p>
<h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p>\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9" target="_blank" rel="noopener">json-schema</a> \u6CE8\u518C <code>withRateWidget</code>\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema_\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema_\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[maximum]</code></td>
<td>\u603B\u661F\u6570</td>
<td><code>number</code></td>
<td><code>5</code></td>
</tr>
<tr>
<td><code>[multipleOf]</code></td>
<td><code>0.5</code> \u8868\u793A\u5141\u8BB8\u534A\u9009\uFF0C\u5176\u5B83\u503C\u8868\u793A\u4E0D\u5141\u8BB8</td>
<td><code>number</code></td>
<td><code>0.5</code></td>
</tr>
</tbody></table>
<h3 id="ui_\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui_\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[allowClear]</code></td>
<td>\u662F\u5426\u5141\u8BB8\u518D\u6B21\u70B9\u51FB\u540E\u6E05\u9664</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[autoFocus]</code></td>
<td>\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[text]</code></td>
<td>\u63D0\u9192\u6587\u672C\u6A21\u677F\uFF0C<code>&#123;&#123;value&#125;&#125;</code> \u8868\u793A\u5F53\u524D\u503C\uFF08\u6CE8\u610F\u65E0\u4EFB\u4F55\u7A7A\u683C\uFF09</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[tooltips]</code></td>
<td>\u81EA\u5B9A\u4E49\u6BCF\u9879\u7684\u63D0\u793A\u4FE1\u606F</td>
<td><code>string[]</code></td>
<td><code>[]</code></td>
</tr>
</tbody></table>
`,toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528"},{id:"api",title:"API",children:[{id:"schema_\u5C5E\u6027",title:"schema \u5C5E\u6027"},{id:"ui_\u5C5E\u6027",title:"ui \u5C5E\u6027"}]}],raw:"---\ntitle: rate\nsubtitle: \u8BC4\u5206\ntype: Non-built-in widgets\n---\n\n\u5BF9\u8BC4\u4EF7\u8FDB\u884C\u5C55\u793A\uFF0C\u5BF9\u4E8B\u7269\u8FDB\u884C\u5FEB\u901F\u7684\u8BC4\u7EA7\u64CD\u4F5C\u3002\n\n## \u5982\u4F55\u4F7F\u7528\n\n\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9) \u6CE8\u518C `withRateWidget`\u3002\n\n## API\n\n### schema \u5C5E\u6027\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[maximum]` | \u603B\u661F\u6570 | `number` | `5` |\n| `[multipleOf]` | `0.5` \u8868\u793A\u5141\u8BB8\u534A\u9009\uFF0C\u5176\u5B83\u503C\u8868\u793A\u4E0D\u5141\u8BB8 | `number` | `0.5` |\n\n### ui \u5C5E\u6027\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[allowClear]` | \u662F\u5426\u5141\u8BB8\u518D\u6B21\u70B9\u51FB\u540E\u6E05\u9664 | `boolean` | `true` |\n| `[autoFocus]` | \u81EA\u52A8\u83B7\u53D6\u7126\u70B9 | `boolean` | `false` |\n| `[text]` | \u63D0\u9192\u6587\u672C\u6A21\u677F\uFF0C`{{value}}` \u8868\u793A\u5F53\u524D\u503C\uFF08\u6CE8\u610F\u65E0\u4EFB\u4F55\u7A7A\u683C\uFF09 | `string` | - |\n| `[tooltips]` | \u81EA\u5B9A\u4E49\u6BCF\u9879\u7684\u63D0\u793A\u4FE1\u606F | `string[]` | `[]` |"}}};codes=[{id:"form-rate-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import type { SFRateWidgetSchema } from '@delon/form/widgets/rate';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-rate-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)" /> \`,
  imports: [DelonFormModule]
})
export class FormRateSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      rate: {
        type: 'number',
        title: '\u8BC4\u7EA7',
        default: 4.5,
        ui: {
          widget: 'rate'
        } as SFRateWidgetSchema
      },
      // \u5141\u8BB8\u534A\u9009
      rate2: {
        type: 'number',
        title: '\u8BC4\u7EA7',
        maximum: 5,
        multipleOf: 0.5,
        default: 4.5,
        ui: {
          widget: 'rate',
          text: '{{value}} starts'
        } as SFRateWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/form/widgets/rate/demo/simple.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-rate"]],hostAttrs:[1,"d-block"],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-rate-simple"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id))},dependencies:[S,ct,F,w,C],encapsulation:2})};var lt=class o{msg=u(y);schema={properties:{base:{type:"string",title:"Base",default:2,enum:["Daily","Weekly","Monthly","Quarterly","Yearly"],ui:{widget:_t.KEY,valueChange:console.log}},asyncData:{type:"string",title:"Async Data",ui:{widget:_t.KEY,asyncData:()=>z([{label:"Label1",value:"a"},{label:"Label2",value:"b"},{label:"Label3",value:"c",disabled:!0}]).pipe(x(1e3)),valueChange:console.log}}}};submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-segmented-simple"]],decls:1,vars:1,consts:[[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)},dependencies:[g,h],encapsulation:2})};var mt=class o{item={name:"segmented",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"segmented",subtitle:"Segmented",description:"When displaying multiple options and user can select a single option;When switching the selected option, the content of the associated area changes.No...",group:"Non-built-in widgets",order:0,path:"packages/form/widgets/segmented/index.en-US.md",url:"/form/segmented/en"},text:`<ul>
<li>When displaying multiple options and user can select a single option;</li>
<li>When switching the selected option, the content of the associated area changes.</li>
</ul>
<h2 id="how_to_use"><a class="lake-link"><i data-anchor="how_to_use"></i></a>How to use</h2><p>Non-built-in modules need to additionally register <code>withSegmentedWidget</code> in <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9" target="_blank" rel="noopener">json-schema</a>.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[block]</code></td>
<td>Option to fit width to its parent&#39;s width</td>
<td><code>boolean</code></td>
<td>false</td>
</tr>
<tr>
<td><code>[asyncData]</code></td>
<td>Set children optional</td>
<td><code>() =&gt; Observable&lt;NzSegmentedOptions&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(valueChange)</code></td>
<td>Emits when index of the currently selected option changes</td>
<td><code>(data: &#123; index: number; item: SFValue &#125;) =&gt; void</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:"how_to_use",title:"How to use"},{id:"api",title:"API",children:[{id:"ui",title:"ui"}]}],raw:`---
title: segmented
subtitle: Segmented
type: Non-built-in widgets
---

- When displaying multiple options and user can select a single option;
- When switching the selected option, the content of the associated area changes.

## How to use

Non-built-in modules need to additionally register \`withSegmentedWidget\` in [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9).

## API

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| \`[block]\` | Option to fit width to its parent\\'s width | \`boolean\` | false |  |
| \`[asyncData]\` |  Set children optional | \`() => Observable<NzSegmentedOptions>\` | - |  |
| \`(valueChange)\` | Emits when index of the currently selected option changes | \`(data: { index: number; item: SFValue }) => void\` | - |  |`},"zh-CN":{meta:{title:"segmented",subtitle:"\u5206\u6BB5\u63A7\u5236\u5668",description:"\u7528\u4E8E\u5C55\u793A\u591A\u4E2A\u9009\u9879\u5E76\u5141\u8BB8\u7528\u6237\u9009\u62E9\u5176\u4E2D\u5355\u4E2A\u9009\u9879\uFF1B\u5F53\u5207\u6362\u9009\u4E2D\u9009\u9879\u65F6\uFF0C\u5173\u8054\u533A\u57DF\u7684\u5185\u5BB9\u4F1A\u53D1\u751F\u53D8\u5316\u3002\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 json-schema \u6CE8\u518C withSegmentedWidget\u3002",group:"Non-built-in widgets",order:0,path:"packages/form/widgets/segmented/index.zh-CN.md",url:"/form/segmented/zh"},text:`<ul>
<li>\u7528\u4E8E\u5C55\u793A\u591A\u4E2A\u9009\u9879\u5E76\u5141\u8BB8\u7528\u6237\u9009\u62E9\u5176\u4E2D\u5355\u4E2A\u9009\u9879\uFF1B</li>
<li>\u5F53\u5207\u6362\u9009\u4E2D\u9009\u9879\u65F6\uFF0C\u5173\u8054\u533A\u57DF\u7684\u5185\u5BB9\u4F1A\u53D1\u751F\u53D8\u5316\u3002</li>
</ul>
<h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p>\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9" target="_blank" rel="noopener">json-schema</a> \u6CE8\u518C <code>withSegmentedWidget</code>\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="ui_\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui_\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[block]</code></td>
<td>\u5C06\u5BBD\u5EA6\u8C03\u6574\u4E3A\u7236\u5143\u7D20\u5BBD\u5EA6\u7684\u9009\u9879</td>
<td><code>boolean</code></td>
<td>false</td>
</tr>
<tr>
<td><code>[asyncData]</code></td>
<td>\u5F02\u6B65\u6570\u636E</td>
<td><code>() =&gt; Observable&lt;NzSegmentedOptions&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(valueChange)</code></td>
<td>\u5F53\u524D\u9009\u4E2D\u9879\u76EE\u53D8\u5316\u65F6\u89E6\u53D1\u56DE\u8C03</td>
<td><code>(data: &#123; index: number; item: SFValue &#125;) =&gt; void</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528"},{id:"api",title:"API",children:[{id:"ui_\u5C5E\u6027",title:"ui \u5C5E\u6027"}]}],raw:`---
title: segmented
subtitle: \u5206\u6BB5\u63A7\u5236\u5668
type: Non-built-in widgets
---

- \u7528\u4E8E\u5C55\u793A\u591A\u4E2A\u9009\u9879\u5E76\u5141\u8BB8\u7528\u6237\u9009\u62E9\u5176\u4E2D\u5355\u4E2A\u9009\u9879\uFF1B
- \u5F53\u5207\u6362\u9009\u4E2D\u9009\u9879\u65F6\uFF0C\u5173\u8054\u533A\u57DF\u7684\u5185\u5BB9\u4F1A\u53D1\u751F\u53D8\u5316\u3002

## \u5982\u4F55\u4F7F\u7528

\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9) \u6CE8\u518C \`withSegmentedWidget\`\u3002

## API

### ui \u5C5E\u6027

| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |
|----|----|----|-----|
| \`[block]\` | \u5C06\u5BBD\u5EA6\u8C03\u6574\u4E3A\u7236\u5143\u7D20\u5BBD\u5EA6\u7684\u9009\u9879 | \`boolean\` | false |  |
| \`[asyncData]\` | \u5F02\u6B65\u6570\u636E | \`() => Observable<NzSegmentedOptions>\` | - |  |
| \`(valueChange)\` | \u5F53\u524D\u9009\u4E2D\u9879\u76EE\u53D8\u5316\u65F6\u89E6\u53D1\u56DE\u8C03 | \`(data: { index: number; item: SFValue }) => void\` | - |  |`}}};codes=[{id:"form-segmented-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, inject } from '@angular/core';
import { delay, of } from 'rxjs';

import { DelonFormModule, SFSchema } from '@delon/form';
import { SFSegmentedWidgetSchema, SegmentedWidget } from '@delon/form/widgets/segmented';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSegmentedOptions } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'form-segmented-simple',
  template: \`<sf [schema]="schema" (formSubmit)="submit($event)" />\`,
  imports: [DelonFormModule]
})
export class FormSegmentedSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      base: {
        type: 'string',
        title: 'Base',
        default: 2,
        enum: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'],
        ui: {
          widget: SegmentedWidget.KEY,
          valueChange: console.log
        } as SFSegmentedWidgetSchema
      },
      asyncData: {
        type: 'string',
        title: 'Async Data',
        ui: {
          widget: SegmentedWidget.KEY,
          asyncData: () =>
            of([
              { label: 'Label1', value: 'a' },
              { label: 'Label2', value: 'b' },
              { label: 'Label3', value: 'c', disabled: true }
            ] as NzSegmentedOptions).pipe(delay(1000)),
          valueChange: console.log
        } as SFSegmentedWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/form/widgets/segmented/demo/simple.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-segmented"]],hostAttrs:[1,"d-block"],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-segmented-simple"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id))},dependencies:[S,lt,F,w,C],encapsulation:2})};var pt=class o{msg=u(y);schema={properties:{count:{type:"number",title:"\u6570\u91CF",ui:{widget:"slider"},default:10},range:{type:"number",title:"\u8303\u56F4",ui:{widget:"slider",range:!0},default:[10,20]}}};submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-slider-simple"]],decls:1,vars:1,consts:[[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)},dependencies:[g,h],encapsulation:2})};var ut=class o{item={name:"slider",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"slider",subtitle:"Slider",description:"A Slider component for displaying current value and intervals in range.Non-built-in modules need to additionally register withSliderWidget in json-sch...",group:"Non-built-in widgets",order:0,path:"packages/form/widgets/slider/index.en-US.md",url:"/form/slider/en"},text:`<p>A Slider component for displaying current value and intervals in range.</p>
<h2 id="how_to_use"><a class="lake-link"><i data-anchor="how_to_use"></i></a>How to use</h2><p>Non-built-in modules need to additionally register <code>withSliderWidget</code> in <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9" target="_blank" rel="noopener">json-schema</a>.</p>
<h2 id="notice"><a class="lake-link"><i data-anchor="notice"></i></a>Notice</h2><ul>
<li>Ingored <code>exclusiveMinimum</code>, <code>exclusiveMaximum</code></li>
</ul>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><p>Property | Description | Type | Default
-------- | ----------- | ---- | -------
<code>[minimum]</code> | The minimum value the slider can slide to	| <code>number</code> | <code>0</code>
<code>[maximum]</code> | The maximum value the slider can slide to | <code>number</code> | <code>100</code>
<code>[multipleOf]</code> | The granularity the slider can step through values. Must greater than 0, and be divided by (max - min). When <code>ui.marks</code> no null, <code>step</code> can be null. | <code>number</code> | <code>1</code></p>
<h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><p>Property | Description | Type | Default
-------- | ----------- | ---- | -------
<code>[range]</code> | dual thumb mode | <code>Boolean</code> | -
<code>[marks]</code> | Tick mark of Slider, type of key must be <code>number</code>, and must in closed interval <code>[min, max]</code> \uFF0Ceach mark can declare its own style. | <code>NzMarks</code> | -
<code>[dots]</code> | Whether the thumb can drag over tick only | <code>Boolean</code> | <code>false</code>
<code>[included]</code> | Make effect when <code>marks</code> not null\uFF0C<code>true</code> means containment and <code>false</code> means coordinative | <code>Boolean</code> | <code>true</code>
<code>[vertical]</code> | If true, the slider will be vertical | <code>boolean</code> | <code>false</code>
<code>[afterChange]</code> | Fire when <code>onmouseup</code> is fired. | <code>(value: NzSliderValue) =&gt; void</code> | -
<code>[formatter]</code> | Slider will pass its value to <code>nzTipFormatter</code>, and display its value in Tooltip, and hide Tooltip when return value is null | <code>(value: number) =&gt; string</code> | -</p>
`,toc:[{id:"how_to_use",title:"How to use"},{id:"notice",title:"Notice"},{id:"api",title:"API",children:[{id:"schema",title:"schema"},{id:"ui",title:"ui"}]}],raw:"---\ntitle: slider\nsubtitle: Slider\ntype: Non-built-in widgets\n---\n\nA Slider component for displaying current value and intervals in range.\n\n## How to use\n\nNon-built-in modules need to additionally register `withSliderWidget` in [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9).\n\n## Notice\n\n- Ingored `exclusiveMinimum`, `exclusiveMaximum`\n\n## API\n\n### schema\n\nProperty | Description | Type | Default\n-------- | ----------- | ---- | -------\n`[minimum]` | The minimum value the slider can slide to	| `number` | `0`\n`[maximum]` | The maximum value the slider can slide to | `number` | `100`\n`[multipleOf]` | The granularity the slider can step through values. Must greater than 0, and be divided by (max - min). When `ui.marks` no null, `step` can be null. | `number` | `1`\n\n### ui\n\nProperty | Description | Type | Default\n-------- | ----------- | ---- | -------\n`[range]` | dual thumb mode | `Boolean` | -\n`[marks]` | Tick mark of Slider, type of key must be `number`, and must in closed interval `[min, max]` \uFF0Ceach mark can declare its own style. | `NzMarks` | -\n`[dots]` | Whether the thumb can drag over tick only | `Boolean` | `false`\n`[included]` | Make effect when `marks` not null\uFF0C`true` means containment and `false` means coordinative | `Boolean` | `true`\n`[vertical]` | If true, the slider will be vertical | `boolean` | `false`\n`[afterChange]` | Fire when `onmouseup` is fired. | `(value: NzSliderValue) => void` | -\n`[formatter]` | Slider will pass its value to `nzTipFormatter`, and display its value in Tooltip, and hide Tooltip when return value is null | `(value: number) => string` | -"},"zh-CN":{meta:{title:"slider",subtitle:"\u6ED1\u52A8\u8F93\u5165\u6761",description:"\u6ED1\u52A8\u578B\u8F93\u5165\u5668\uFF0C\u5C55\u793A\u5F53\u524D\u503C\u548C\u53EF\u9009\u8303\u56F4\u3002\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 json-schema \u6CE8\u518C withSliderWidget\u3002\u5F3A\u5236\u5FFD\u7565 exclusiveMinimum\u3001exclusiveMaximum",group:"Non-built-in widgets",order:0,path:"packages/form/widgets/slider/index.zh-CN.md",url:"/form/slider/zh"},text:`<p>\u6ED1\u52A8\u578B\u8F93\u5165\u5668\uFF0C\u5C55\u793A\u5F53\u524D\u503C\u548C\u53EF\u9009\u8303\u56F4\u3002</p>
<h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p>\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9" target="_blank" rel="noopener">json-schema</a> \u6CE8\u518C <code>withSliderWidget</code>\u3002</p>
<h2 id="\u6CE8\u610F\u4E8B\u9879"><a class="lake-link"><i data-anchor="\u6CE8\u610F\u4E8B\u9879"></i></a>\u6CE8\u610F\u4E8B\u9879</h2><ul>
<li>\u5F3A\u5236\u5FFD\u7565 <code>exclusiveMinimum</code>\u3001<code>exclusiveMaximum</code></li>
</ul>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema_\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema_\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><p>\u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C
----|------|-----|------
<code>[minimum]</code> | \u6700\u5C0F\u503C | <code>number</code> | <code>0</code>
<code>[maximum]</code> | \u6700\u5927\u503C | <code>number</code> | <code>100</code>
<code>[multipleOf]</code> | \u500D\u6570 | <code>number</code> | <code>1</code></p>
<h3 id="ui_\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui_\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><p>\u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C
----|------|-----|------
<code>[range]</code> | \u5F53\u6DFB\u52A0\u8BE5\u5C5E\u6027\u65F6\uFF0C\u542F\u52A8\u53CC\u6ED1\u5757\u6A21\u5F0F | <code>Boolean</code> | -
<code>[marks]</code> | \u523B\u5EA6\u6807\u8BB0 | <code>NzMarks</code> | -
<code>[dots]</code> | \u662F\u5426\u53EA\u80FD\u62D6\u62FD\u5230\u523B\u5EA6\u4E0A | <code>Boolean</code> | <code>false</code>
<code>[included]</code> | \u662F\u5426\u5305\u542B\u3002<code>marks</code> \u4E0D\u4E3A\u7A7A\u5BF9\u8C61\u65F6\u6709\u6548\uFF0C\u503C\u4E3A <code>true</code> \u65F6\u8868\u793A\u503C\u4E3A\u5305\u542B\u5173\u7CFB\uFF0C<code>false</code> \u8868\u793A\u5E76\u5217 | <code>Boolean</code> | <code>true</code>
<code>[vertical]</code> | \u7AD6\u76F4\u663E\u793A\u3002\u6DFB\u52A0\u8BE5\u5C5E\u6027\u65F6\uFF0CSlider \u4E3A\u5782\u76F4\u65B9\u5411\u3002 | <code>boolean</code> | <code>false</code>
<code>[afterChange]</code> | \u4E0E <code>onmouseup</code> \u89E6\u53D1\u65F6\u673A\u4E00\u81F4\uFF0C\u628A\u5F53\u524D\u503C\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165\u3002 | <code>(value: NzSliderValue) =&gt; void</code> | -
<code>[formatter]</code> | Slider \u4F1A\u628A\u5F53\u524D\u503C\u4F20\u7ED9 <code>nzTipFormatter</code>\uFF0C\u5E76\u5728 Tooltip \u4E2D\u663E\u793A <code>nzTipFormatter</code> \u7684\u8FD4\u56DE\u503C\uFF0C\u82E5\u4E3A null\uFF0C\u5219\u9690\u85CF Tooltip | <code>(value: number) =&gt; string</code> | -</p>
`,toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528"},{id:"\u6CE8\u610F\u4E8B\u9879",title:"\u6CE8\u610F\u4E8B\u9879"},{id:"api",title:"API",children:[{id:"schema_\u5C5E\u6027",title:"schema \u5C5E\u6027"},{id:"ui_\u5C5E\u6027",title:"ui \u5C5E\u6027"}]}],raw:"---\ntitle: slider\nsubtitle: \u6ED1\u52A8\u8F93\u5165\u6761\ntype: Non-built-in widgets\n---\n\n\u6ED1\u52A8\u578B\u8F93\u5165\u5668\uFF0C\u5C55\u793A\u5F53\u524D\u503C\u548C\u53EF\u9009\u8303\u56F4\u3002\n\n## \u5982\u4F55\u4F7F\u7528\n\n\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9) \u6CE8\u518C `withSliderWidget`\u3002\n\n## \u6CE8\u610F\u4E8B\u9879\n\n- \u5F3A\u5236\u5FFD\u7565 `exclusiveMinimum`\u3001`exclusiveMaximum`\n\n## API\n\n### schema \u5C5E\u6027\n\n\u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C\n----|------|-----|------\n`[minimum]` | \u6700\u5C0F\u503C | `number` | `0`\n`[maximum]` | \u6700\u5927\u503C | `number` | `100`\n`[multipleOf]` | \u500D\u6570 | `number` | `1`\n\n### ui \u5C5E\u6027\n\n\u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C\n----|------|-----|------\n`[range]` | \u5F53\u6DFB\u52A0\u8BE5\u5C5E\u6027\u65F6\uFF0C\u542F\u52A8\u53CC\u6ED1\u5757\u6A21\u5F0F | `Boolean` | -\n`[marks]` | \u523B\u5EA6\u6807\u8BB0 | `NzMarks` | -\n`[dots]` | \u662F\u5426\u53EA\u80FD\u62D6\u62FD\u5230\u523B\u5EA6\u4E0A | `Boolean` | `false`\n`[included]` | \u662F\u5426\u5305\u542B\u3002`marks` \u4E0D\u4E3A\u7A7A\u5BF9\u8C61\u65F6\u6709\u6548\uFF0C\u503C\u4E3A `true` \u65F6\u8868\u793A\u503C\u4E3A\u5305\u542B\u5173\u7CFB\uFF0C`false` \u8868\u793A\u5E76\u5217 | `Boolean` | `true`\n`[vertical]` | \u7AD6\u76F4\u663E\u793A\u3002\u6DFB\u52A0\u8BE5\u5C5E\u6027\u65F6\uFF0CSlider \u4E3A\u5782\u76F4\u65B9\u5411\u3002 | `boolean` | `false`\n`[afterChange]` | \u4E0E `onmouseup` \u89E6\u53D1\u65F6\u673A\u4E00\u81F4\uFF0C\u628A\u5F53\u524D\u503C\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165\u3002 | `(value: NzSliderValue) => void` | -\n`[formatter]` | Slider \u4F1A\u628A\u5F53\u524D\u503C\u4F20\u7ED9 `nzTipFormatter`\uFF0C\u5E76\u5728 Tooltip \u4E2D\u663E\u793A `nzTipFormatter` \u7684\u8FD4\u56DE\u503C\uFF0C\u82E5\u4E3A null\uFF0C\u5219\u9690\u85CF Tooltip | `(value: number) => string` | -"}}};codes=[{id:"form-slider-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import type { SFSliderWidgetSchema } from '@delon/form/widgets/slider';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-slider-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)" /> \`,
  imports: [DelonFormModule]
})
export class FormSliderSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      count: {
        type: 'number',
        title: '\u6570\u91CF',
        ui: {
          widget: 'slider'
        } as SFSliderWidgetSchema,
        default: 10
      },
      // \u53CC\u6ED1\u5757\u6A21\u5F0F
      range: {
        type: 'number',
        title: '\u8303\u56F4',
        ui: {
          widget: 'slider',
          range: true
        } as SFSliderWidgetSchema,
        default: [10, 20]
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/form/widgets/slider/demo/simple.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-slider"]],hostAttrs:[1,"d-block"],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-slider-simple"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id))},dependencies:[S,pt,F,w,C],encapsulation:2})};var ht=class o{msg=u(y);schema={properties:{like:{type:"number",title:"\u5174\u8DA3",enum:[{value:1,label:"\u7535\u5F71"},{value:2,label:"\u4E66"},{value:3,label:"\u65C5\u884C"}],ui:{widget:"tag"},default:[1,2]},like1:{type:"number",title:"\u5174\u8DA3",ui:{widget:"tag",asyncData:()=>z([{value:1,label:"\u7535\u5F71"},{value:2,label:"\u4E66"},{value:3,label:"\u65C5\u884C"}]).pipe(x(10))},default:[1,2]},icon:{type:"number",title:"\u5174\u8DA3",enum:[{value:1,label:"Twitter",prefixIcon:{type:"twitter"}},{value:2,label:"Facebook",suffixIcon:{type:"facebook"}}],ui:{widget:"tag"}}}};submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-tag-simple"]],decls:1,vars:1,consts:[[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)},dependencies:[g,h],encapsulation:2})};var gt=class o{item={name:"tag",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"tag",subtitle:"Tag",description:"Tag for categorizing or markup, Notice: Just only supported checkable tag mode.Non-built-in modules need to additionally register withTagWidget in jso...",group:"Non-built-in widgets",order:0,path:"packages/form/widgets/tag/index.en-US.md",url:"/form/tag/en"},text:`<p>Tag for categorizing or markup, <strong>Notice:</strong> Just only supported <code>checkable</code> tag mode.</p>
<h2 id="how_to_use"><a class="lake-link"><i data-anchor="how_to_use"></i></a>How to use</h2><p>Non-built-in modules need to additionally register <code>withTagWidget</code> in <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9" target="_blank" rel="noopener">json-schema</a>.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[enum]</code></td>
<td>Data source</td>
<td><code>SFSchemaEnumType[]</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[asyncData]</code></td>
<td>Async data source</td>
<td><code>() =&gt; Observable&lt;SFSchemaEnumType[]&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[mode]</code></td>
<td>Mode of tag</td>
<td><code>&#39;closeable&#39;\uFF5C&#39;default&#39;\uFF5C&#39;checkable&#39;</code></td>
<td><code>&#39;checkable&#39;</code></td>
</tr>
<tr>
<td><code>[onClose]</code></td>
<td>Callback executed when tag is closed</td>
<td><code>(e:MouseEvent) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[checkedChange]</code></td>
<td>Checked status change call back</td>
<td><code>(status: boolean) =&gt; void</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:"how_to_use",title:"How to use"},{id:"api",title:"API",children:[{id:"schema",title:"schema"},{id:"ui",title:"ui"}]}],raw:`---
title: tag
subtitle: Tag
type: Non-built-in widgets
---

Tag for categorizing or markup, **Notice:** Just only supported \`checkable\` tag mode.

## How to use

Non-built-in modules need to additionally register \`withTagWidget\` in [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9).

## API

### schema

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| \`[enum]\` | Data source | \`SFSchemaEnumType[]\` | - |

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| \`[asyncData]\` | Async data source | \`() => Observable<SFSchemaEnumType[]>\` | - |
| \`[mode]\` | Mode of tag | \`'closeable'\uFF5C'default'\uFF5C'checkable'\` | \`'checkable'\` |
| \`[onClose]\` | Callback executed when tag is closed | \`(e:MouseEvent) => void\` | - |
| \`[checkedChange]\` | Checked status change call back | \`(status: boolean) => void\` | - |`},"zh-CN":{meta:{title:"tag",subtitle:"\u6807\u7B7E",description:"\u8FDB\u884C\u6807\u8BB0\u548C\u5206\u7C7B\u7684\u5C0F\u6807\u7B7E\uFF0C\u6CE8\uFF1A \u53EA\u652F\u6301 checkable \u6807\u7B7E\u6A21\u5F0F\u3002\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 json-schema \u6CE8\u518C withTagWidget\u3002",group:"Non-built-in widgets",order:0,path:"packages/form/widgets/tag/index.zh-CN.md",url:"/form/tag/zh"},text:`<p>\u8FDB\u884C\u6807\u8BB0\u548C\u5206\u7C7B\u7684\u5C0F\u6807\u7B7E\uFF0C<strong>\u6CE8\uFF1A</strong> \u53EA\u652F\u6301 <code>checkable</code> \u6807\u7B7E\u6A21\u5F0F\u3002</p>
<h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p>\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9" target="_blank" rel="noopener">json-schema</a> \u6CE8\u518C <code>withTagWidget</code>\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema_\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema_\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[enum]</code></td>
<td>\u6570\u636E\u6E90</td>
<td><code>SFSchemaEnumType[]</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui_\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui_\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[asyncData]</code></td>
<td>\u5F02\u6B65\u6570\u636E\u6E90</td>
<td><code>() =&gt; Observable&lt;SFSchemaEnumType[]&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[mode]</code></td>
<td>\u8BBE\u5B9A\u6807\u7B7E\u5DE5\u4F5C\u7684\u6A21\u5F0F</td>
<td><code>&#39;closeable&#39;\uFF5C&#39;default&#39;\uFF5C&#39;checkable&#39;</code></td>
<td><code>&#39;checkable&#39;</code></td>
</tr>
<tr>
<td><code>[onClose]</code></td>
<td>\u5173\u95ED\u65F6\u7684\u56DE\u8C03\uFF0C\u5728 <code>nzMode=&quot;closable&quot;</code> \u65F6\u53EF\u7528</td>
<td><code>(e:MouseEvent) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[checkedChange]</code></td>
<td>\u8BBE\u7F6E\u6807\u7B7E\u7684\u9009\u4E2D\u72B6\u6001\u7684\u56DE\u8C03</td>
<td><code>(status: boolean) =&gt; void</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528"},{id:"api",title:"API",children:[{id:"schema_\u5C5E\u6027",title:"schema \u5C5E\u6027"},{id:"ui_\u5C5E\u6027",title:"ui \u5C5E\u6027"}]}],raw:`---
title: tag
subtitle: \u6807\u7B7E
type: Non-built-in widgets
---

\u8FDB\u884C\u6807\u8BB0\u548C\u5206\u7C7B\u7684\u5C0F\u6807\u7B7E\uFF0C**\u6CE8\uFF1A** \u53EA\u652F\u6301 \`checkable\` \u6807\u7B7E\u6A21\u5F0F\u3002

## \u5982\u4F55\u4F7F\u7528

\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9) \u6CE8\u518C \`withTagWidget\`\u3002

## API

### schema \u5C5E\u6027

| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |
|----|----|----|-----|
| \`[enum]\` | \u6570\u636E\u6E90 | \`SFSchemaEnumType[]\` | - |

### ui \u5C5E\u6027

| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |
|----|----|----|-----|
| \`[asyncData]\` | \u5F02\u6B65\u6570\u636E\u6E90 | \`() => Observable<SFSchemaEnumType[]>\` | - |
| \`[mode]\` | \u8BBE\u5B9A\u6807\u7B7E\u5DE5\u4F5C\u7684\u6A21\u5F0F | \`'closeable'\uFF5C'default'\uFF5C'checkable'\` | \`'checkable'\` |
| \`[onClose]\` | \u5173\u95ED\u65F6\u7684\u56DE\u8C03\uFF0C\u5728 \`nzMode="closable"\` \u65F6\u53EF\u7528 | \`(e:MouseEvent) => void\` | - |
| \`[checkedChange]\` | \u8BBE\u7F6E\u6807\u7B7E\u7684\u9009\u4E2D\u72B6\u6001\u7684\u56DE\u8C03 | \`(status: boolean) => void\` | - |`}}};codes=[{id:"form-tag-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, inject } from '@angular/core';
import { of, delay } from 'rxjs';

import { DelonFormModule, SFIcon, SFSchema } from '@delon/form';
import type { SFTagWidgetSchema } from '@delon/form/widgets/tag';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-tag-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)" /> \`,
  imports: [DelonFormModule]
})
export class FormTagSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      like: {
        type: 'number',
        title: '\u5174\u8DA3',
        enum: [
          { value: 1, label: '\u7535\u5F71' },
          { value: 2, label: '\u4E66' },
          { value: 3, label: '\u65C5\u884C' }
        ],
        ui: {
          widget: 'tag'
        } as SFTagWidgetSchema,
        default: [1, 2]
      },
      like1: {
        type: 'number',
        title: '\u5174\u8DA3',
        ui: {
          widget: 'tag',
          asyncData: () =>
            of([
              { value: 1, label: '\u7535\u5F71' },
              { value: 2, label: '\u4E66' },
              { value: 3, label: '\u65C5\u884C' }
            ]).pipe(delay(10))
        } as SFTagWidgetSchema,
        default: [1, 2]
      },
      icon: {
        type: 'number',
        title: '\u5174\u8DA3',
        enum: [
          { value: 1, label: 'Twitter', prefixIcon: { type: 'twitter' } as SFIcon },
          { value: 2, label: 'Facebook', suffixIcon: { type: 'facebook' } as SFIcon }
        ],
        ui: {
          widget: 'tag'
        } as SFTagWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/form/widgets/tag/demo/simple.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-tag"]],hostAttrs:[1,"d-block"],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-tag-simple"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id))},dependencies:[S,ht,F,w,C],encapsulation:2})};var ft=class o{msg=u(y);schema={properties:{time:{type:"string",ui:{widget:"time"}},time_number:{type:"number",ui:{widget:"time"}},time_format:{type:"string",format:"time",ui:{format:"HH:mm:ss+00:00"}},"12hours":{type:"string",ui:{widget:"time",format:"h:mm:ss a",use12Hours:!0}}}};submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-time-simple"]],decls:1,vars:1,consts:[[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)},dependencies:[g,h],encapsulation:2})};var bt=class o{item={name:"time",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"time",subtitle:"Time",description:"To select/input a time.Non-built-in modules need to additionally register withTimeWidget in json-schema.Format is divided into two types: Data format ...",group:"Non-built-in widgets",order:0,path:"packages/form/widgets/time/index.en-US.md",url:"/form/time/en"},text:`<p>To select/input a time.</p>
<h2 id="how_to_use"><a class="lake-link"><i data-anchor="how_to_use"></i></a>How to use</h2><p>Non-built-in modules need to additionally register <code>withTimeWidget</code> in <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9" target="_blank" rel="noopener">json-schema</a>.</p>
<h2 id="notice"><a class="lake-link"><i data-anchor="notice"></i></a>Notice</h2><ul>
<li>Format is divided into two types: <strong>Data format</strong> means form data, <strong>Display format</strong> means display data (<a href="https://ng.ant.design/components/time-picker/en#api" target="_blank" rel="noopener">nzFormat</a>)</li>
<li>All <strong>Data format</strong> units, reference <a href="https://date-fns.org/v1.29.0/docs/format" target="_blank" rel="noopener">date-fns format</a> (China mirror: <a href="http://Momentjs.cn/docs/#/displaying/format/" target="_blank" rel="noopener">moment format</a>)</li>
<li>Specify <code>schema.format</code> must follow <a href="https://tools.ietf.org/html/rfc3339#section-5.6" target="_blank" rel="noopener">RFC3339</a> time format, otherwise considered as a format error, default rules:<ul>
<li><code>time</code>\u3001<code>full-time</code> default is <code>HH:mm:ss</code></li>
</ul>
</li>
<li>When <code>schema.format</code> is not specified, the data formatting (Allows you to reassign default values via <a href="/docs/global-config">Global Configuration</a>) is determined by the <code>schema.type</code> type:<ul>
<li><code>string</code> default is <code>HH:mm:ss</code></li>
<li><code>number</code> default is <code>T</code> 13-bit Unix Timestamp</li>
</ul>
</li>
<li>Since <code>disabledHours</code>, <code>disabledMinutes</code>, <code>disabledSeconds</code> will cause the time format to be corrupted, it may cause the display format error. The solution is specify a complete <code>Date</code> object in the default value (<code>schema.default</code> or <code>formData</code>)</li>
</ul>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[readOnly]</code></td>
<td>Whether to disable the state</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[format]</code></td>
<td>Data format type</td>
<td><code>string</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[size]</code></td>
<td>Size of the <code>nz-date-picker</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[placeholder]</code></td>
<td>Placeholder of date input</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[displayFormat]</code></td>
<td>Display format(<a href="https://ng.ant.design/components/date-picker/en#api" target="_blank" rel="noopener">nzFormat</a>)</td>
<td><code>string</code></td>
<td><code>yyyy-MM-dd HH:mm:ss</code></td>
</tr>
<tr>
<td><code>[utcEpoch]</code></td>
<td>Whether UTC (represents the number of milliseconds from <code>1970</code>)</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[allowEmpty]</code></td>
<td>allow clearing text</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[clearText]</code></td>
<td>clear tooltip of icon</td>
<td><code>string</code></td>
<td><code>\u6E05\u9664</code></td>
</tr>
<tr>
<td><code>[defaultOpenValue]</code></td>
<td>default open panel value</td>
<td><code>Date</code></td>
<td><code>new Date()</code></td>
</tr>
<tr>
<td><code>[disabledHours]</code></td>
<td>to specify the hours that cannot be selected</td>
<td><code>() =&gt; number[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[disabledMinutes]</code></td>
<td>to specify the minutes that cannot be selected</td>
<td><code>(hour: number) =&gt; number[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[disabledSeconds]</code></td>
<td>to specify the seconds that cannot be selected</td>
<td><code>(hour: number, minute: number) =&gt; number[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[hideDisabledOptions]</code></td>
<td>hide the options that can not be selected</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[hourStep]</code></td>
<td>interval between hours in picker</td>
<td><code>number</code></td>
<td><code>1</code></td>
</tr>
<tr>
<td><code>[minuteStep]</code></td>
<td>interval between minutes in picker</td>
<td><code>number</code></td>
<td><code>1</code></td>
</tr>
<tr>
<td><code>[secondStep]</code></td>
<td>interval between seconds in picker</td>
<td><code>number</code></td>
<td><code>1</code></td>
</tr>
<tr>
<td><code>[popupClassName]</code></td>
<td>className of panel</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[change]</code></td>
<td>a callback function, can be executed when the selected time is changing</td>
<td><code>(value: Date) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[openChange]</code></td>
<td>a callback function which will be called while panel opening/closing</td>
<td><code>(status: boolean) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[nowText]</code></td>
<td>text of the Now button</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[okText]</code></td>
<td>text of the Ok button</td>
<td><code>string</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:"how_to_use",title:"How to use"},{id:"notice",title:"Notice"},{id:"api",title:"API",children:[{id:"schema",title:"schema"},{id:"ui",title:"ui"}]}],raw:"---\ntitle: time\nsubtitle: Time\ntype: Non-built-in widgets\n---\n\nTo select/input a time.\n\n## How to use\n\nNon-built-in modules need to additionally register `withTimeWidget` in [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9).\n\n## Notice\n\n- Format is divided into two types: **Data format** means form data, **Display format** means display data ([nzFormat](https://ng.ant.design/components/time-picker/en#api))\n- All **Data format** units, reference [date-fns format](https://date-fns.org/v1.29.0/docs/format) (China mirror: [moment format](http://Momentjs.cn/docs/#/displaying/format/))\n- Specify `schema.format` must follow [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6) time format, otherwise considered as a format error, default rules:\n  - `time`\u3001`full-time` default is `HH:mm:ss`\n- When `schema.format` is not specified, the data formatting (Allows you to reassign default values via [Global Configuration](/docs/global-config)) is determined by the `schema.type` type:\n  - `string` default is `HH:mm:ss`\n  - `number` default is `T` 13-bit Unix Timestamp\n- Since `disabledHours`, `disabledMinutes`, `disabledSeconds` will cause the time format to be corrupted, it may cause the display format error. The solution is specify a complete `Date` object in the default value (`schema.default` or `formData`)\n\n## API\n\n### schema\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[readOnly]` | Whether to disable the state | `boolean` | - |\n| `[format]` | Data format type | `string` | - |\n\n### ui\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[size]` | Size of the `nz-date-picker` | `string` | - |\n| `[placeholder]` | Placeholder of date input | `string` | - |\n| `[displayFormat]` | Display format([nzFormat](https://ng.ant.design/components/date-picker/en#api)) | `string` | `yyyy-MM-dd HH:mm:ss` |\n| `[utcEpoch]` | Whether UTC (represents the number of milliseconds from `1970`) | `boolean` | `false` |\n| `[allowEmpty]` | allow clearing text | `boolean` | `true` |\n| `[clearText]` | clear tooltip of icon | `string` | `\u6E05\u9664` |\n| `[defaultOpenValue]` | default open panel value | `Date` | `new Date()` |\n| `[disabledHours]` | to specify the hours that cannot be selected | `() => number[]` | - |\n| `[disabledMinutes]` | to specify the minutes that cannot be selected | `(hour: number) => number[]` | - |\n| `[disabledSeconds]` | to specify the seconds that cannot be selected | `(hour: number, minute: number) => number[]` | - |\n| `[hideDisabledOptions]` | hide the options that can not be selected | `boolean` | `false` |\n| `[hourStep]` | interval between hours in picker | `number` | `1` |\n| `[minuteStep]` | interval between minutes in picker | `number` | `1` |\n| `[secondStep]` | interval between seconds in picker | `number` | `1` |\n| `[popupClassName]` | className of panel | `string` | - |\n| `[change]` | a callback function, can be executed when the selected time is changing | `(value: Date) => void` | - |\n| `[openChange]` | a callback function which will be called while panel opening/closing | `(status: boolean) => void` | - |\n| `[nowText]` | text of the Now button | `string` | - |\n| `[okText]` | text of the Ok button | `string` | - |"},"zh-CN":{meta:{title:"time",subtitle:"\u65F6\u95F4",description:"\u8F93\u5165\u6216\u9009\u62E9\u65F6\u95F4\u7684\u63A7\u4EF6\u3002\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 json-schema \u6CE8\u518C withTimeWidget\u3002\u683C\u5F0F\u5316\u5206\u4E3A\uFF1A\u6570\u636E\u683C\u5F0F\u5316\u8868\u793A\u8868\u5355\u6570\u636E\u548C\u663E\u793A\u683C\u5F0F\u5316\u663E\u793A\u6570\u636E\uFF08\u7B49\u540C nzFormat \u503C\uFF09\u6240\u6709 \u6570\u636E\u683C\u5F0F\u5316 \u5355\u4F4D\uFF0C\u53C2\u8003 date-fns format\uFF08\u56FD\u5185\u955C\u50CF\uFF1Amoment format\uFF09\u6307\u5B9A sc...",group:"Non-built-in widgets",order:0,path:"packages/form/widgets/time/index.zh-CN.md",url:"/form/time/zh"},text:`<p>\u8F93\u5165\u6216\u9009\u62E9\u65F6\u95F4\u7684\u63A7\u4EF6\u3002</p>
<h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p>\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9" target="_blank" rel="noopener">json-schema</a> \u6CE8\u518C <code>withTimeWidget</code>\u3002</p>
<h2 id="\u6CE8\u610F\u4E8B\u9879"><a class="lake-link"><i data-anchor="\u6CE8\u610F\u4E8B\u9879"></i></a>\u6CE8\u610F\u4E8B\u9879</h2><ul>
<li>\u683C\u5F0F\u5316\u5206\u4E3A\uFF1A<strong>\u6570\u636E\u683C\u5F0F\u5316</strong>\u8868\u793A\u8868\u5355\u6570\u636E\u548C<strong>\u663E\u793A\u683C\u5F0F\u5316</strong>\u663E\u793A\u6570\u636E\uFF08\u7B49\u540C <a href="https://ng.ant.design/components/time-picker/zh#api" target="_blank" rel="noopener">nzFormat</a> \u503C\uFF09</li>
<li>\u6240\u6709 <strong>\u6570\u636E\u683C\u5F0F\u5316</strong> \u5355\u4F4D\uFF0C\u53C2\u8003 <a href="https://date-fns.org/v1.29.0/docs/format" target="_blank" rel="noopener">date-fns format</a>\uFF08\u56FD\u5185\u955C\u50CF\uFF1A<a href="http://momentjs.cn/docs/#/displaying/format/" target="_blank" rel="noopener">moment format</a>\uFF09</li>
<li>\u6307\u5B9A <code>schema.format</code> \u5219\u5FC5\u987B\u9075\u5B88 <a href="https://tools.ietf.org/html/rfc3339#section-5.6" target="_blank" rel="noopener">RFC3339</a> \u65F6\u95F4\u683C\u5F0F\uFF0C\u5426\u5219\u90FD\u89C6\u4E3A\u683C\u5F0F\u9519\u8BEF\uFF0C\u9ED8\u8BA4\u7684\u6570\u636E\u683C\u5F0F\u5316\uFF1A<ul>
<li><code>time</code>\u3001<code>full-time</code> \u9ED8\u8BA4 <code>HH:mm:ss</code></li>
</ul>
</li>
<li>\u4E0D\u6307\u5B9A <code>schema.format</code> \u6839\u636E <code>schema.type</code> \u503C\u6309\u4EE5\u4E0B\u89C4\u5219\u5904\u7406\uFF08\u5141\u8BB8\u901A\u8FC7<a href="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\u66FF\u6362\uFF09\u6570\u636E\u683C\u5F0F\u5316\uFF1A<ul>
<li><code>string</code> \u9ED8\u8BA4 <code>HH:mm:ss</code></li>
<li><code>number</code> \u9ED8\u8BA4 <code>T</code> 13\u4F4D Unix Timestamp</li>
</ul>
</li>
<li>\u7531\u4E8E <code>disabledHours</code>\u3001<code>disabledMinutes</code>\u3001<code>disabledSeconds</code> \u7EC4\u5408\u5BFC\u81F4\u65F6\u95F4\u683C\u5F0F\u88AB\u7834\u574F\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u65E0\u6CD5\u6B63\u5E38\u663E\u793A\u6216\u663E\u793A\u4E0D\u6B63\u786E\u65F6\u53EF\u4EE5\u6307\u5B9A\u4E00\u4E2A\u5B8C\u6574\u7684 <code>Date</code> \u5BF9\u8C61\u7ED9\u9ED8\u8BA4\u503C\uFF08<code>schema.default</code> \u6216 <code>formData</code>\uFF09</li>
</ul>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema_\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema_\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[readOnly]</code></td>
<td>\u7981\u7528\u72B6\u6001</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[format]</code></td>
<td>\u6570\u636E\u683C\u5F0F\u7C7B\u578B</td>
<td><code>string</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui_\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui_\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[size]</code></td>
<td>\u5927\u5C0F\uFF0C\u7B49\u540C <code>nzSize</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[placeholder]</code></td>
<td>\u5728\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u8BAF\u606F</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[format]</code></td>
<td>\u6570\u636E\u683C\u5F0F\u5316</td>
<td><code>string</code></td>
<td><code>HH:mm:ss</code></td>
</tr>
<tr>
<td><code>[displayFormat]</code></td>
<td>\u663E\u793A\u683C\u5F0F\u5316\uFF0C\uFF08\u7B49\u540C <a href="https://ng.ant.design/components/time-picker/zh#api" target="_blank" rel="noopener">nzFormat</a> \u503C\uFF09</td>
<td><code>string</code></td>
<td><code>HH:mm:ss</code></td>
</tr>
<tr>
<td><code>[utcEpoch]</code></td>
<td>\u662F\u5426UTC\u65B0\u7EAA\u5143\uFF08\u8868\u793A\u4ECE <code>1970</code> \u5F00\u59CB\u8BA1\u6BEB\u79D2\u6570\uFF09\uFF0C\u5F53 <code>type=&#39;number&#39;</code> \u65F6\u6709\u6548</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[allowEmpty]</code></td>
<td>\u662F\u5426\u5C55\u793A\u6E05\u9664\u6309\u94AE</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[clearText]</code></td>
<td>\u6E05\u9664\u6309\u94AE\u7684\u63D0\u793A\u6587\u6848</td>
<td><code>string</code></td>
<td><code>\u6E05\u9664</code></td>
</tr>
<tr>
<td><code>[defaultOpenValue]</code></td>
<td>\u8BBE\u7F6E\u9762\u677F\u6253\u5F00\u65F6\u9ED8\u8BA4\u9009\u4E2D\u7684\u503C</td>
<td><code>Date</code></td>
<td><code>new Date()</code></td>
</tr>
<tr>
<td><code>[disabledHours]</code></td>
<td>\u7981\u6B62\u9009\u62E9\u90E8\u5206\u5C0F\u65F6\u9009\u9879</td>
<td><code>() =&gt; number[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[disabledMinutes]</code></td>
<td>\u7981\u6B62\u9009\u62E9\u90E8\u5206\u5206\u949F\u9009\u9879</td>
<td><code>(hour: number) =&gt; number[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[disabledSeconds]</code></td>
<td>\u7981\u6B62\u9009\u62E9\u90E8\u5206\u79D2\u9009\u9879</td>
<td><code>(hour: number, minute: number) =&gt; number[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[hideDisabledOptions]</code></td>
<td>\u9690\u85CF\u7981\u6B62\u9009\u62E9\u7684\u9009\u9879</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[hourStep]</code></td>
<td>\u5C0F\u65F6\u9009\u9879\u95F4\u9694</td>
<td><code>number</code></td>
<td><code>1</code></td>
</tr>
<tr>
<td><code>[minuteStep]</code></td>
<td>\u5206\u949F\u9009\u9879\u95F4\u9694</td>
<td><code>number</code></td>
<td><code>1</code></td>
</tr>
<tr>
<td><code>[secondStep]</code></td>
<td>\u79D2\u9009\u9879\u95F4\u9694</td>
<td><code>number</code></td>
<td><code>1</code></td>
</tr>
<tr>
<td><code>[popupClassName]</code></td>
<td>\u5F39\u51FA\u5C42\u7C7B\u540D</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[change]</code></td>
<td>\u65F6\u95F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03</td>
<td><code>(value: Date) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[openChange]</code></td>
<td>\u9762\u677F\u6253\u5F00/\u5173\u95ED\u65F6\u7684\u56DE\u8C03</td>
<td><code>(status: boolean) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[nowText]</code></td>
<td>\u6B64\u523B\u6309\u94AE\u6587\u672C</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[okText]</code></td>
<td>\u786E\u8BA4\u6309\u94AE\u6587\u672C</td>
<td><code>string</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528"},{id:"\u6CE8\u610F\u4E8B\u9879",title:"\u6CE8\u610F\u4E8B\u9879"},{id:"api",title:"API",children:[{id:"schema_\u5C5E\u6027",title:"schema \u5C5E\u6027"},{id:"ui_\u5C5E\u6027",title:"ui \u5C5E\u6027"}]}],raw:"---\ntitle: time\nsubtitle: \u65F6\u95F4\ntype: Non-built-in widgets\n---\n\n\u8F93\u5165\u6216\u9009\u62E9\u65F6\u95F4\u7684\u63A7\u4EF6\u3002\n\n## \u5982\u4F55\u4F7F\u7528\n\n\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9) \u6CE8\u518C `withTimeWidget`\u3002\n\n## \u6CE8\u610F\u4E8B\u9879\n\n- \u683C\u5F0F\u5316\u5206\u4E3A\uFF1A**\u6570\u636E\u683C\u5F0F\u5316**\u8868\u793A\u8868\u5355\u6570\u636E\u548C**\u663E\u793A\u683C\u5F0F\u5316**\u663E\u793A\u6570\u636E\uFF08\u7B49\u540C [nzFormat](https://ng.ant.design/components/time-picker/zh#api) \u503C\uFF09\n- \u6240\u6709 **\u6570\u636E\u683C\u5F0F\u5316** \u5355\u4F4D\uFF0C\u53C2\u8003 [date-fns format](https://date-fns.org/v1.29.0/docs/format)\uFF08\u56FD\u5185\u955C\u50CF\uFF1A[moment format](http://momentjs.cn/docs/#/displaying/format/)\uFF09\n- \u6307\u5B9A `schema.format` \u5219\u5FC5\u987B\u9075\u5B88 [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6) \u65F6\u95F4\u683C\u5F0F\uFF0C\u5426\u5219\u90FD\u89C6\u4E3A\u683C\u5F0F\u9519\u8BEF\uFF0C\u9ED8\u8BA4\u7684\u6570\u636E\u683C\u5F0F\u5316\uFF1A\n  - `time`\u3001`full-time` \u9ED8\u8BA4 `HH:mm:ss`\n- \u4E0D\u6307\u5B9A `schema.format` \u6839\u636E `schema.type` \u503C\u6309\u4EE5\u4E0B\u89C4\u5219\u5904\u7406\uFF08\u5141\u8BB8\u901A\u8FC7[\u5168\u5C40\u914D\u7F6E](/docs/global-config)\u66FF\u6362\uFF09\u6570\u636E\u683C\u5F0F\u5316\uFF1A\n  - `string` \u9ED8\u8BA4 `HH:mm:ss`\n  - `number` \u9ED8\u8BA4 `T` 13\u4F4D Unix Timestamp\n- \u7531\u4E8E `disabledHours`\u3001`disabledMinutes`\u3001`disabledSeconds` \u7EC4\u5408\u5BFC\u81F4\u65F6\u95F4\u683C\u5F0F\u88AB\u7834\u574F\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u65E0\u6CD5\u6B63\u5E38\u663E\u793A\u6216\u663E\u793A\u4E0D\u6B63\u786E\u65F6\u53EF\u4EE5\u6307\u5B9A\u4E00\u4E2A\u5B8C\u6574\u7684 `Date` \u5BF9\u8C61\u7ED9\u9ED8\u8BA4\u503C\uFF08`schema.default` \u6216 `formData`\uFF09\n\n## API\n\n### schema \u5C5E\u6027\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[readOnly]` | \u7981\u7528\u72B6\u6001 | `boolean` | - |\n| `[format]` | \u6570\u636E\u683C\u5F0F\u7C7B\u578B | `string` | - |\n\n### ui \u5C5E\u6027\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[size]` | \u5927\u5C0F\uFF0C\u7B49\u540C `nzSize` | `string` | - |\n| `[placeholder]` | \u5728\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u8BAF\u606F | `string` | - |\n| `[format]` | \u6570\u636E\u683C\u5F0F\u5316 | `string` | `HH:mm:ss` |\n| `[displayFormat]` | \u663E\u793A\u683C\u5F0F\u5316\uFF0C\uFF08\u7B49\u540C [nzFormat](https://ng.ant.design/components/time-picker/zh#api) \u503C\uFF09 | `string` | `HH:mm:ss` |\n| `[utcEpoch]` | \u662F\u5426UTC\u65B0\u7EAA\u5143\uFF08\u8868\u793A\u4ECE `1970` \u5F00\u59CB\u8BA1\u6BEB\u79D2\u6570\uFF09\uFF0C\u5F53 `type='number'` \u65F6\u6709\u6548 | `boolean` | `false` |\n| `[allowEmpty]` | \u662F\u5426\u5C55\u793A\u6E05\u9664\u6309\u94AE | `boolean` | `true` |\n| `[clearText]` | \u6E05\u9664\u6309\u94AE\u7684\u63D0\u793A\u6587\u6848 | `string` | `\u6E05\u9664` |\n| `[defaultOpenValue]` | \u8BBE\u7F6E\u9762\u677F\u6253\u5F00\u65F6\u9ED8\u8BA4\u9009\u4E2D\u7684\u503C | `Date` | `new Date()` |\n| `[disabledHours]` | \u7981\u6B62\u9009\u62E9\u90E8\u5206\u5C0F\u65F6\u9009\u9879 | `() => number[]` | - |\n| `[disabledMinutes]` | \u7981\u6B62\u9009\u62E9\u90E8\u5206\u5206\u949F\u9009\u9879 | `(hour: number) => number[]` | - |\n| `[disabledSeconds]` | \u7981\u6B62\u9009\u62E9\u90E8\u5206\u79D2\u9009\u9879 | `(hour: number, minute: number) => number[]` | - |\n| `[hideDisabledOptions]` | \u9690\u85CF\u7981\u6B62\u9009\u62E9\u7684\u9009\u9879 | `boolean` | `false` |\n| `[hourStep]` | \u5C0F\u65F6\u9009\u9879\u95F4\u9694 | `number` | `1` |\n| `[minuteStep]` | \u5206\u949F\u9009\u9879\u95F4\u9694 | `number` | `1` |\n| `[secondStep]` | \u79D2\u9009\u9879\u95F4\u9694 | `number` | `1` |\n| `[popupClassName]` | \u5F39\u51FA\u5C42\u7C7B\u540D | `string` | - |\n| `[change]` | \u65F6\u95F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03 | `(value: Date) => void` | - |\n| `[openChange]` | \u9762\u677F\u6253\u5F00/\u5173\u95ED\u65F6\u7684\u56DE\u8C03 | `(status: boolean) => void` | - |\n| `[nowText]` | \u6B64\u523B\u6309\u94AE\u6587\u672C | `string` | - |\n| `[okText]` | \u786E\u8BA4\u6309\u94AE\u6587\u672C | `string` | - |"}}};codes=[{id:"form-time-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import type { SFTimeWidgetSchema } from '@delon/form/widgets/time';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-time-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)" />\`,
  imports: [DelonFormModule]
})
export class FormTimeSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      time: {
        type: 'string',
        ui: { widget: 'time' } as SFTimeWidgetSchema
      },
      time_number: {
        type: 'number',
        ui: { widget: 'time' } as SFTimeWidgetSchema
      },
      time_format: {
        type: 'string',
        format: 'time',
        ui: {
          format: \`HH:mm:ss+00:00\`
        } as SFTimeWidgetSchema
      },
      '12hours': {
        type: 'string',
        ui: {
          widget: 'time',
          format: 'h:mm:ss a',
          use12Hours: true
        } as SFTimeWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/form/widgets/time/demo/simple.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-time"]],hostAttrs:[1,"d-block"],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-time-simple"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id))},dependencies:[S,ft,F,w,C],encapsulation:2})};var yt=class o{msg=u(y);schema={properties:{roles:{type:"number",title:"\u89D2\u8272",enum:[{title:"DNS\u7BA1\u7406",value:10},{title:"ECS\u7BA1\u7406",value:11},{title:"OSS\u7BA1\u7406",value:12},{title:"RDS\u7BA1\u7406",value:13}],ui:{widget:"transfer",titles:["\u672A\u62E5\u6709","\u5DF2\u62E5\u6709"]},default:[11,12]},roles2:{type:"number",title:"\u89D2\u8272",ui:{widget:"transfer",titles:["\u672A\u62E5\u6709","\u5DF2\u62E5\u6709"],asyncData:()=>z([{title:"DNS\u7BA1\u7406",value:10},{title:"ECS\u7BA1\u7406",value:11},{title:"OSS\u7BA1\u7406",value:12},{title:"RDS\u7BA1\u7406",value:13}]).pipe(x(10))},default:[11,12]}}};submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-transfer-simple"]],decls:1,vars:1,consts:[[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)},dependencies:[g,h],encapsulation:2})};var St=class o{item={name:"transfer",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"transfer",subtitle:"Transfer",description:"Double column transfer choice box.Non-built-in modules need to additionally register withTransferWidget in json-schema.default value direction: 'right...",group:"Non-built-in widgets",order:0,path:"packages/form/widgets/transfer/index.en-US.md",url:"/form/transfer/en"},text:`<p>Double column transfer choice box.</p>
<h2 id="how_to_use"><a class="lake-link"><i data-anchor="how_to_use"></i></a>How to use</h2><p>Non-built-in modules need to additionally register <code>withTransferWidget</code> in <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9" target="_blank" rel="noopener">json-schema</a>.</p>
<h2 id="note"><a class="lake-link"><i data-anchor="note"></i></a>Note</h2><ul>
<li><code>default</code> value <code>direction: &#39;right&#39;</code> indicates right column.</li>
</ul>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[enum]</code></td>
<td>Data source</td>
<td><code>SFSchemaEnumType[]</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[asyncData]</code></td>
<td>Asynchronous data</td>
<td><code>() =&gt; Observable&lt;SFSchemaEnumType[]&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[titles]</code></td>
<td>Title list, the order is from left to right</td>
<td><code>string[]</code></td>
<td><code>[&#39;&#39;, &#39;&#39;]</code></td>
</tr>
<tr>
<td><code>[operations]</code></td>
<td>Operation list, the order is from top to buttom</td>
<td><code>string[]</code></td>
<td><code>[&#39;&#39;, &#39;&#39;]</code></td>
</tr>
<tr>
<td><code>[listStyle]</code></td>
<td>A custom CSS style used for rendering the transfer columns. equals to <code>ngStyle</code></td>
<td><code>object</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[itemUnit]</code></td>
<td>single unit</td>
<td><code>string</code></td>
<td><code>item</code></td>
</tr>
<tr>
<td><code>[itemsUnit]</code></td>
<td>multiple unit</td>
<td><code>string</code></td>
<td><code>items</code></td>
</tr>
<tr>
<td><code>[showSearch]</code></td>
<td>If included, a search box is shown on each column</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[filterOption]</code></td>
<td>Accept <code>inputValueoption</code> two parameters, return <code>true</code> when <code>option</code> matches, otherwise, return <code>false</code></td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td><code>[searchPlaceholder]</code></td>
<td>Placeholder of search box</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[notFoundContent]</code></td>
<td>Text to display when a column is empty</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[canMove]</code></td>
<td>Second verification when transfer choice box</td>
<td><code>function</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[oneWay]</code></td>
<td>Display as single direction</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>(change)</code></td>
<td>Callback function when the transfer between columns is complete</td>
<td><code>(options: TransferChange) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(searchChange)</code></td>
<td>Callback function when search field is changed</td>
<td><code>(options: TransferSearchChange) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(selectChange)</code></td>
<td>Callback function when selected items are changed</td>
<td><code>(options: TransferSelectChange) =&gt; void</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:"how_to_use",title:"How to use"},{id:"note",title:"Note"},{id:"api",title:"API",children:[{id:"schema",title:"schema"},{id:"ui",title:"ui"}]}],raw:"---\ntitle: transfer\nsubtitle: Transfer\ntype: Non-built-in widgets\n---\n\nDouble column transfer choice box.\n\n## How to use\n\nNon-built-in modules need to additionally register `withTransferWidget` in [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9).\n\n## Note\n\n- `default` value `direction: 'right'` indicates right column.\n\n## API\n\n### schema\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[enum]` | Data source | `SFSchemaEnumType[]` | - |\n\n### ui\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[asyncData]` | Asynchronous data | `() => Observable<SFSchemaEnumType[]>` | - |\n| `[titles]` | Title list, the order is from left to right | `string[]` | `['', '']` |\n| `[operations]` | Operation list, the order is from top to buttom | `string[]` | `['', '']` |\n| `[listStyle]` | A custom CSS style used for rendering the transfer columns. equals to `ngStyle` | `object` | - |\n| `[itemUnit]` | single unit | `string` | `item` |\n| `[itemsUnit]` | multiple unit | `string` | `items` |\n| `[showSearch]` | If included, a search box is shown on each column | `boolean` | `false` |\n| `[filterOption]` | Accept `inputValueoption` two parameters, return `true` when `option` matches, otherwise, return `false` | - | - |\n| `[searchPlaceholder]` | Placeholder of search box | `string` | - |\n| `[notFoundContent]` | Text to display when a column is empty | `string` | - |\n| `[canMove]` | Second verification when transfer choice box | `function` | - |\n| `[oneWay]` | Display as single direction | `boolean` | `false` |\n| `(change)` | Callback function when the transfer between columns is complete | `(options: TransferChange) => void` | - |\n| `(searchChange)` | Callback function when search field is changed | `(options: TransferSearchChange) => void` | - |\n| `(selectChange)` | Callback function when selected items are changed | `(options: TransferSelectChange) => void` | - |"},"zh-CN":{meta:{title:"transfer",subtitle:"\u7A7F\u68AD\u6846",description:"\u53CC\u680F\u7A7F\u68AD\u9009\u62E9\u6846\u3002\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 json-schema \u6CE8\u518C withTransferWidget\u3002default \u503C\u88AB\u5F53\u6210 direction: 'right' \u8868\u793A\u53F3\u680F\u4E2D",group:"Non-built-in widgets",order:0,path:"packages/form/widgets/transfer/index.zh-CN.md",url:"/form/transfer/zh"},text:`<p>\u53CC\u680F\u7A7F\u68AD\u9009\u62E9\u6846\u3002</p>
<h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p>\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9" target="_blank" rel="noopener">json-schema</a> \u6CE8\u518C <code>withTransferWidget</code>\u3002</p>
<h2 id="\u6CE8\u610F\u4E8B\u9879"><a class="lake-link"><i data-anchor="\u6CE8\u610F\u4E8B\u9879"></i></a>\u6CE8\u610F\u4E8B\u9879</h2><ul>
<li><code>default</code> \u503C\u88AB\u5F53\u6210 <code>direction: &#39;right&#39;</code> \u8868\u793A\u53F3\u680F\u4E2D</li>
</ul>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema_\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema_\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[enum]</code></td>
<td>\u6570\u636E\u6E90</td>
<td><code>SFSchemaEnumType[]</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui_\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui_\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[asyncData]</code></td>
<td>\u5F02\u6B65\u6570\u636E\u6E90</td>
<td><code>() =&gt; Observable&lt;SFSchemaEnumType[]&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[titles]</code></td>
<td>\u6807\u9898\u96C6\u5408\uFF0C\u987A\u5E8F\u4ECE\u5DE6\u81F3\u53F3</td>
<td><code>string[]</code></td>
<td><code>[&#39;&#39;, &#39;&#39;]</code></td>
</tr>
<tr>
<td><code>[operations]</code></td>
<td>\u64CD\u4F5C\u6587\u6848\u96C6\u5408\uFF0C\u987A\u5E8F\u4ECE\u4E0B\u81F3\u4E0A</td>
<td><code>string[]</code></td>
<td><code>[&#39;&#39;, &#39;&#39;]</code></td>
</tr>
<tr>
<td><code>[listStyle]</code></td>
<td>\u4E24\u4E2A\u7A7F\u68AD\u6846\u7684\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4EE5<code>ngStyle</code>\u5199\u6CD5\u6807\u9898</td>
<td><code>object</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[itemUnit]</code></td>
<td>\u5355\u6570\u5355\u4F4D</td>
<td><code>string</code></td>
<td><code>\u9879\u76EE</code></td>
</tr>
<tr>
<td><code>[itemsUnit]</code></td>
<td>\u590D\u6570\u5355\u4F4D</td>
<td><code>string</code></td>
<td><code>\u9879\u76EE</code></td>
</tr>
<tr>
<td><code>[showSearch]</code></td>
<td>\u662F\u5426\u663E\u793A\u641C\u7D22\u6846</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[filterOption]</code></td>
<td>\u63A5\u6536 <code>inputValueoption</code> \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 <code>option</code> \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE <code>true</code>\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE <code>false</code>\u3002</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td><code>[searchPlaceholder]</code></td>
<td>\u641C\u7D22\u6846\u7684\u9ED8\u8BA4\u503C</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[notFoundContent]</code></td>
<td>\u5F53\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[canMove]</code></td>
<td>\u7A7F\u68AD\u65F6\u4E8C\u6B21\u6821\u9A8C\u3002</td>
<td><code>function</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[oneWay]</code></td>
<td>\u5C55\u793A\u4E3A\u5355\u5411\u6837\u5F0F</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>(change)</code></td>
<td>\u9009\u9879\u5728\u4E24\u680F\u4E4B\u95F4\u8F6C\u79FB\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td>
<td><code>(options: TransferChange) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(searchChange)</code></td>
<td>\u641C\u7D22\u6846\u5185\u5BB9\u65F6\u6539\u53D8\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td>
<td><code>(options: TransferSearchChange) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(selectChange)</code></td>
<td>\u9009\u4E2D\u9879\u53D1\u751F\u6539\u53D8\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td>
<td><code>(options: TransferSelectChange) =&gt; void</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528"},{id:"\u6CE8\u610F\u4E8B\u9879",title:"\u6CE8\u610F\u4E8B\u9879"},{id:"api",title:"API",children:[{id:"schema_\u5C5E\u6027",title:"schema \u5C5E\u6027"},{id:"ui_\u5C5E\u6027",title:"ui \u5C5E\u6027"}]}],raw:"---\ntitle: transfer\nsubtitle: \u7A7F\u68AD\u6846\ntype: Non-built-in widgets\n---\n\n\u53CC\u680F\u7A7F\u68AD\u9009\u62E9\u6846\u3002\n\n## \u5982\u4F55\u4F7F\u7528\n\n\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9) \u6CE8\u518C `withTransferWidget`\u3002\n\n## \u6CE8\u610F\u4E8B\u9879\n\n- `default` \u503C\u88AB\u5F53\u6210 `direction: 'right'` \u8868\u793A\u53F3\u680F\u4E2D\n\n## API\n\n### schema \u5C5E\u6027\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[enum]` | \u6570\u636E\u6E90 | `SFSchemaEnumType[]` | - |\n\n### ui \u5C5E\u6027\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[asyncData]` | \u5F02\u6B65\u6570\u636E\u6E90 | `() => Observable<SFSchemaEnumType[]>` | - |\n| `[titles]` | \u6807\u9898\u96C6\u5408\uFF0C\u987A\u5E8F\u4ECE\u5DE6\u81F3\u53F3 | `string[]` | `['', '']` |\n| `[operations]` | \u64CD\u4F5C\u6587\u6848\u96C6\u5408\uFF0C\u987A\u5E8F\u4ECE\u4E0B\u81F3\u4E0A | `string[]` | `['', '']` |\n| `[listStyle]` | \u4E24\u4E2A\u7A7F\u68AD\u6846\u7684\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4EE5`ngStyle`\u5199\u6CD5\u6807\u9898 | `object` | - |\n| `[itemUnit]` | \u5355\u6570\u5355\u4F4D | `string` | `\u9879\u76EE` |\n| `[itemsUnit]` | \u590D\u6570\u5355\u4F4D | `string` | `\u9879\u76EE` |\n| `[showSearch]` | \u662F\u5426\u663E\u793A\u641C\u7D22\u6846 | `boolean` | `false` |\n| `[filterOption]` | \u63A5\u6536 `inputValueoption` \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 `option` \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE `true`\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE `false`\u3002 | - | - |\n| `[searchPlaceholder]` | \u641C\u7D22\u6846\u7684\u9ED8\u8BA4\u503C | `string` | - |\n| `[notFoundContent]` | \u5F53\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9 | `string` | - |\n| `[canMove]` | \u7A7F\u68AD\u65F6\u4E8C\u6B21\u6821\u9A8C\u3002 | `function` | - |\n| `[oneWay]` | \u5C55\u793A\u4E3A\u5355\u5411\u6837\u5F0F | `boolean` | `false` |\n| `(change)` | \u9009\u9879\u5728\u4E24\u680F\u4E4B\u95F4\u8F6C\u79FB\u65F6\u7684\u56DE\u8C03\u51FD\u6570 | `(options: TransferChange) => void` | - |\n| `(searchChange)` | \u641C\u7D22\u6846\u5185\u5BB9\u65F6\u6539\u53D8\u65F6\u7684\u56DE\u8C03\u51FD\u6570 | `(options: TransferSearchChange) => void` | - |\n| `(selectChange)` | \u9009\u4E2D\u9879\u53D1\u751F\u6539\u53D8\u65F6\u7684\u56DE\u8C03\u51FD\u6570 | `(options: TransferSelectChange) => void` | - |"}}};codes=[{id:"form-transfer-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, inject } from '@angular/core';
import { of, delay } from 'rxjs';

import { DelonFormModule, SFSchema } from '@delon/form';
import { SFTransferWidgetSchema } from '@delon/form/widgets/transfer';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-transfer-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)" /> \`,
  imports: [DelonFormModule]
})
export class FormTransferSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      roles: {
        type: 'number',
        title: '\u89D2\u8272',
        enum: [
          { title: 'DNS\u7BA1\u7406', value: 10 },
          { title: 'ECS\u7BA1\u7406', value: 11 },
          { title: 'OSS\u7BA1\u7406', value: 12 },
          { title: 'RDS\u7BA1\u7406', value: 13 }
        ],
        ui: {
          widget: 'transfer',
          titles: ['\u672A\u62E5\u6709', '\u5DF2\u62E5\u6709']
        } as SFTransferWidgetSchema,
        default: [11, 12]
      },
      roles2: {
        type: 'number',
        title: '\u89D2\u8272',
        ui: {
          widget: 'transfer',
          titles: ['\u672A\u62E5\u6709', '\u5DF2\u62E5\u6709'],
          asyncData: () =>
            of([
              { title: 'DNS\u7BA1\u7406', value: 10 },
              { title: 'ECS\u7BA1\u7406', value: 11 },
              { title: 'OSS\u7BA1\u7406', value: 12 },
              { title: 'RDS\u7BA1\u7406', value: 13 }
            ]).pipe(delay(10))
        } as SFTransferWidgetSchema,
        default: [11, 12]
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/form/widgets/transfer/demo/simple.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-transfer"]],hostAttrs:[1,"d-block"],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-transfer-simple"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id))},dependencies:[S,yt,F,w,C],encapsulation:2})};var vt=class o{msg=u(y);schema={properties:{status1:{type:"string",title:"\u57FA\u672C",enum:[{title:"\u5F85\u652F\u4ED8",key:"WAIT_BUYER_PAY"},{title:"\u5DF2\u652F\u4ED8",key:"TRADE_SUCCESS"},{title:"\u4EA4\u6613\u5B8C\u6210",key:"TRADE_FINISHED"}],default:"WAIT_BUYER_PAY",ui:{widget:"tree-select"}},status2:{type:"string",title:"\u591A\u9009",enum:[{title:"\u5F85\u652F\u4ED8",key:"WAIT_BUYER_PAY"},{title:"\u5DF2\u652F\u4ED8",key:"TRADE_SUCCESS"},{title:"\u4EA4\u6613\u5B8C\u6210",key:"TRADE_FINISHED"}],default:["WAIT_BUYER_PAY","TRADE_SUCCESS"],ui:{widget:"tree-select",multiple:!0}},status3:{type:"string",title:"\u53EF\u52FE\u9009",default:["WAIT_BUYER_PAY","TRADE_FINISHED"],ui:{widget:"tree-select",checkable:!0,asyncData:()=>z([{title:"\u5F85\u652F\u4ED8",key:"WAIT_BUYER_PAY"},{title:"\u5DF2\u652F\u4ED8",key:"TRADE_SUCCESS"},{title:"\u4EA4\u6613\u5B8C\u6210",key:"TRADE_FINISHED"}]).pipe(x(10))}},async:{type:"string",title:"Async",enum:[{title:"\u5F85\u652F\u4ED8",key:"WAIT_BUYER_PAY"},{title:"\u5DF2\u652F\u4ED8",key:"TRADE_SUCCESS"},{title:"\u4EA4\u6613\u5B8C\u6210",key:"TRADE_FINISHED"}],ui:{widget:"tree-select",expandChange:()=>z([{title:"\u5F85\u652F\u4ED8",key:"WAIT_BUYER_PAY"},{title:"\u5DF2\u652F\u4ED8",key:"TRADE_SUCCESS"},{title:"\u4EA4\u6613\u5B8C\u6210",key:"TRADE_FINISHED"}]).pipe(x(10))}}}};submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-tree-select-simple"]],decls:1,vars:1,consts:[[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)},dependencies:[g,h],encapsulation:2})};var kn=["customTpl"];function Dn(o,n){if(o&1&&m(0,"sf",1),o&2){let e=E();d("schema",e.schema)}}function zn(o,n){if(o&1&&(a(0,"span",2)(1,"span"),m(2,"nz-icon",3),D(3),i()()),o&2){let e=n.$implicit;Ut("ant-tree-node-selected",e.isSelected),c(2),d("nzType",e.isExpanded?"folder-open":"folder"),c(),Vt(" ",e.title," ")}}var wt=class o{customTpl;schema;ngOnInit(){this.schema={properties:{status:{type:"string",title:"\u57FA\u672C",enum:[{title:"parent 1",key:"100",expanded:!0,icon:"smile",children:[{title:"leaf 1-0-0",key:"10010",icon:"meh",isLeaf:!0},{title:"leaf 1-0-1",key:"10011",icon:"frown",isLeaf:!0}]}],default:"10010",ui:{widget:"tree-select",treeTemplate:this.customTpl}}}}}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-tree-select-customized-icon"]],viewQuery:function(e,t){if(e&1&&_(kn,7),e&2){let s;N(s=T())&&(t.customTpl=s.first)}},decls:3,vars:1,consts:[["customTpl",""],[3,"schema"],[1,"ant-tree-node-content-wrapper"],[3,"nzType"]],template:function(e,t){e&1&&(V(0,Dn,1,1,"sf",1),R(1,zn,4,4,"ng-template",null,0,B)),e&2&&L(t.schema?0:-1)},dependencies:[g,h,Q,Y],encapsulation:2})};var Ft=class o{msg=u(y);schema={properties:{status1:{type:"string",title:"\u865A\u62DF\u6EDA\u52A8",enum:this.dig(),ui:{widget:"tree-select",virtualHeight:"300px"}}}};dig(n="0",e=3){let t=[];for(let s=0;s<10;s+=1){let p=`${n}-${s}`,J={title:p,key:p,expanded:!0,children:[],isLeaf:!1};e>0?J.children=this.dig(p,e-1):J.isLeaf=!0,t.push(J)}return t}submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-tree-select-virtual-scroll"]],decls:1,vars:1,consts:[[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)},dependencies:[g,h],encapsulation:2})};var Ct=class o{item={name:"tree-select",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"tree-select",subtitle:"Tree Select",description:"Tree select widget.Note:Data source of tree-select must have keys of title\u3001keyNon-built-in modules need to additionally register withTreeSelectWidget ...",group:"Non-built-in widgets",order:0,path:"packages/form/widgets/tree-select/index.en-US.md",url:"/form/tree-select/en"},text:`<p>Tree select widget.</p>
<p><strong>Note:</strong></p>
<ul>
<li>Data source of <code>tree-select</code> must have keys of <code>title</code>\u3001<code>key</code></li>
</ul>
<h2 id="how_to_use"><a class="lake-link"><i data-anchor="how_to_use"></i></a>How to use</h2><p>Non-built-in modules need to additionally register <code>withTreeSelectWidget</code> in <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9" target="_blank" rel="noopener">json-schema</a>.</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[enum]</code></td>
<td>Data source</td>
<td><code>SFSchemaEnumType[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[readOnly]</code></td>
<td>Read only</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[asyncData]</code></td>
<td>Asynchronous data source</td>
<td><code>() =&gt; Observable&lt;SFSchemaEnumType[]&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[size]</code></td>
<td>Size, equals to <code>nzSize</code></td>
<td><code>string</code></td>
<td><code>default</code></td>
</tr>
<tr>
<td><code>[placeholder]</code></td>
<td>Placeholder</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[notFoundContent]</code></td>
<td>Text to display when a column is empty</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[allowClear]</code></td>
<td>Whether show clear button</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[clearValue]</code></td>
<td>Default value when cleared</td>
<td><code>any</code></td>
<td><code>undefined</code></td>
</tr>
<tr>
<td><code>[dropdownMatchSelectWidth]</code></td>
<td>Determine whether the dropdown menu and the select input are the same width</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[dropdownStyle]</code></td>
<td>Set the style of the dropdown menu</td>
<td><code>object</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[dropdownClassName]</code></td>
<td>Set className of the dropdown menu</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[multiple]</code></td>
<td>Support multiple select\uFF08set to true automatically when <code>checkable</code> is set\uFF09</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[hideUnMatched]</code></td>
<td>Hide unmatched nodes</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[checkable]</code></td>
<td>Whether to show checkbox on the treeNodes</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[checkStrictly]</code></td>
<td>Fully control node itself when it&#39;s checkable status(No relationship about check status between parent and child nodes)</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[showIcon]</code></td>
<td>Whether to show icon in front of TreeNode title, there is no default style</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[showExpand]</code></td>
<td>Show a expand icon before the treeNodes</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[showLine]</code></td>
<td>Shows a connecting line</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[defaultExpandAll]</code></td>
<td>Whether to expand all treeNodes by default</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[displayWith]</code></td>
<td>How to display the selected node value in input box</td>
<td>\`(node: NzTreeNode) =&gt; string</td>
<td>undefined\`</td>
</tr>
<tr>
<td><code>[expandedKeys]</code></td>
<td>Expand specific tree nodes by default</td>
<td><code>string[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[maxTagCount]</code></td>
<td>Maximun number of tag</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[maxTagPlaceholder]</code></td>
<td>Placeholder for not showing tags</td>
<td><code>TemplateRef&lt;&#123; $implicit: NzTreeNode[] &#125;&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[treeTemplate]</code></td>
<td>Custom Nodes</td>
<td><code>TemplateRef&lt;&#123; $implicit: NzTreeNode; origin: NzTreeNodeOptions &#125;&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[expandChange]</code></td>
<td>Callback function for when a treeNode is expanded or collapsed</td>
<td><code>(e: NzFormatEmitEvent) =&gt; Observable&lt;SFSchemaEnum[]&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[virtualHeight]</code></td>
<td>The height of virtual scroll</td>
<td><code>string</code></td>
<td><code>-</code></td>
</tr>
<tr>
<td><code>[virtualItemSize]</code></td>
<td>The size of the items in the list, same as <a href="https://material.angular.io/cdk/scrolling/api" target="_blank" rel="noopener">cdk itemSize</a></td>
<td><code>number</code></td>
<td><code>28</code></td>
</tr>
<tr>
<td><code>[virtualMaxBufferPx]</code></td>
<td>The number of pixels worth of buffer to render for when rendering new items, same as <a href="https://material.angular.io/cdk/scrolling/api" target="_blank" rel="noopener">cdk maxBufferPx</a></td>
<td><code>number</code></td>
<td><code>500</code></td>
</tr>
<tr>
<td><code>[virtualMinBufferPx]</code></td>
<td>The minimum amount of buffer rendered beyond the viewport (in pixels),same as <a href="https://material.angular.io/cdk/scrolling/api" target="_blank" rel="noopener">cdk minBufferPx</a></td>
<td><code>number</code></td>
<td><code>28</code></td>
</tr>
</tbody></table>
<blockquote>
<p>Asynchronous data must set initial data (Using either <code>enum</code> or <code>asyncData</code>), otherwise, <code>expandChange</code> cannot be triggered.</p>
</blockquote>
`,toc:[{id:"how_to_use",title:"How to use"},{id:"api",title:"API",children:[{id:"schema",title:"schema"},{id:"ui",title:"ui"}]}],raw:"---\ntitle: tree-select\nsubtitle: Tree Select\ntype: Non-built-in widgets\n---\n\nTree select widget.\n\n**Note:**\n\n- Data source of `tree-select` must have keys of `title`\u3001`key`\n\n## How to use\n\nNon-built-in modules need to additionally register `withTreeSelectWidget` in [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9).\n\n## API\n\n### schema\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[enum]` | Data source | `SFSchemaEnumType[]` | - |\n| `[readOnly]` | Read only | `boolean` | - |\n\n### ui\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[asyncData]` | Asynchronous data source | `() => Observable<SFSchemaEnumType[]>` | - |\n| `[size]` | Size, equals to `nzSize` | `string` | `default` |\n| `[placeholder]` | Placeholder | `string` | - |\n| `[notFoundContent]` | Text to display when a column is empty | `string` | - |\n| `[allowClear]` | Whether show clear button | `boolean` | `false` |\n| `[clearValue]` | Default value when cleared | `any` | `undefined` |\n| `[dropdownMatchSelectWidth]` | Determine whether the dropdown menu and the select input are the same width | `boolean` | `true` |\n| `[dropdownStyle]` | Set the style of the dropdown menu | `object` | - |\n| `[dropdownClassName]` | Set className of the dropdown menu | `string` | - |\n| `[multiple]` | Support multiple select\uFF08set to true automatically when `checkable` is set\uFF09 | `boolean` | `false` |\n| `[hideUnMatched]` | Hide unmatched nodes | `boolean` | `false` |\n| `[checkable]` | Whether to show checkbox on the treeNodes | `boolean` | `false` |\n| `[checkStrictly]` | Fully control node itself when it's checkable status(No relationship about check status between parent and child nodes) | `boolean` | `false` |\n| `[showIcon]` | Whether to show icon in front of TreeNode title, there is no default style | `boolean` | `false` |\n| `[showExpand]` | Show a expand icon before the treeNodes | `boolean` | `true` |\n| `[showLine]` | Shows a connecting line | `boolean` | `false` |\n| `[defaultExpandAll]` | Whether to expand all treeNodes by default | `boolean` | `false` |\n| `[displayWith]` | How to display the selected node value in input box | `(node: NzTreeNode) => string | undefined` | `(node: NzTreeNode) => node.title` |\n| `[expandedKeys]` | Expand specific tree nodes by default | `string[]` | - |\n| `[maxTagCount]` | Maximun number of tag | `number` | - |\n| `[maxTagPlaceholder]` | Placeholder for not showing tags | `TemplateRef<{ $implicit: NzTreeNode[] }>` | - |\n| `[treeTemplate]` | Custom Nodes | `TemplateRef<{ $implicit: NzTreeNode; origin: NzTreeNodeOptions }>` | - |\n| `[expandChange]` | Callback function for when a treeNode is expanded or collapsed | `(e: NzFormatEmitEvent) => Observable<SFSchemaEnum[]>` | - |\n| `[virtualHeight]` | The height of virtual scroll | `string` | `-` |\n| `[virtualItemSize]` | The size of the items in the list, same as [cdk itemSize](https://material.angular.io/cdk/scrolling/api) | `number` | `28` |\n| `[virtualMaxBufferPx]` | The number of pixels worth of buffer to render for when rendering new items, same as [cdk maxBufferPx](https://material.angular.io/cdk/scrolling/api) | `number` | `500` |\n| `[virtualMinBufferPx]` | The minimum amount of buffer rendered beyond the viewport (in pixels),same as [cdk minBufferPx](https://material.angular.io/cdk/scrolling/api) | `number` | `28` |\n\n> Asynchronous data must set initial data (Using either `enum` or `asyncData`), otherwise, `expandChange` cannot be triggered."},"zh-CN":{meta:{title:"tree-select",subtitle:"\u6811\u9009\u62E9",description:"\u6811\u578B\u9009\u62E9\u63A7\u4EF6\u3002\u6CE8\u610F\uFF1Atree-select \u7684\u6570\u636E\u6E90\u5FC5\u987B\u5305\u542B title\u3001key \u952E\u540D\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 json-schema \u6CE8\u518C withTreeSelectWidget\u3002\u5F02\u6B65\u6570\u636E\u52A1\u5FC5\u5148\u6307\u5B9A\u521D\u59CB\u5316\u6570\u636E\uFF08\u4F7F\u7528 enum\u3001asyncData \u9009\u5176\u4E00\uFF09\uFF0C\u5426\u5219\u65E0\u6CD5\u89E6\u53D1 expandChange\u3002",group:"Non-built-in widgets",order:0,path:"packages/form/widgets/tree-select/index.zh-CN.md",url:"/form/tree-select/zh"},text:`<p>\u6811\u578B\u9009\u62E9\u63A7\u4EF6\u3002</p>
<p><strong>\u6CE8\u610F\uFF1A</strong></p>
<ul>
<li><code>tree-select</code> \u7684\u6570\u636E\u6E90\u5FC5\u987B\u5305\u542B <code>title</code>\u3001<code>key</code> \u952E\u540D</li>
</ul>
<h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p>\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9" target="_blank" rel="noopener">json-schema</a> \u6CE8\u518C <code>withTreeSelectWidget</code>\u3002</p>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema_\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema_\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[enum]</code></td>
<td>\u6570\u636E\u6E90</td>
<td><code>SFSchemaEnumType[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[readOnly]</code></td>
<td>\u7981\u7528\u72B6\u6001</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui_\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui_\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[asyncData]</code></td>
<td>\u5F02\u6B65\u6570\u636E\u6E90</td>
<td><code>() =&gt; Observable&lt;SFSchemaEnumType[]&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[size]</code></td>
<td>\u5927\u5C0F\uFF0C\u7B49\u540C <code>nzSize</code></td>
<td><code>string</code></td>
<td><code>default</code></td>
</tr>
<tr>
<td><code>[placeholder]</code></td>
<td>\u5728\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u8BAF\u606F</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[notFoundContent]</code></td>
<td>\u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[allowClear]</code></td>
<td>\u652F\u6301\u6E05\u9664</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[clearValue]</code></td>
<td>\u6E05\u7A7A\u65F6\u9ED8\u8BA4\u503C</td>
<td><code>any</code></td>
<td><code>undefined</code></td>
</tr>
<tr>
<td><code>[dropdownMatchSelectWidth]</code></td>
<td>\u4E0B\u62C9\u83DC\u5355\u548C\u9009\u62E9\u5668\u540C\u5BBD</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[dropdownStyle]</code></td>
<td>\u4E0B\u62C9\u83DC\u5355\u7684 style \u5C5E\u6027</td>
<td><code>object</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[dropdownClassName]</code></td>
<td>\u4E0B\u62C9\u83DC\u5355\u7684 className \u5C5E\u6027</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[multiple]</code></td>
<td>\u652F\u6301\u591A\u9009\uFF08\u5F53\u8BBE\u7F6E <code>checkable</code> \u65F6\u81EA\u52A8\u53D8\u4E3Atrue\uFF09</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[hideUnMatched]</code></td>
<td>\u641C\u7D22\u9690\u85CF\u672A\u5339\u914D\u7684\u8282\u70B9</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[checkable]</code></td>
<td>\u8282\u70B9\u524D\u6DFB\u52A0 Checkbox \u590D\u9009\u6846</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[checkStrictly]</code></td>
<td>checkable \u72B6\u6001\u4E0B\u8282\u70B9\u9009\u62E9\u5B8C\u5168\u53D7\u63A7\uFF08\u7236\u5B50\u8282\u70B9\u9009\u4E2D\u72B6\u6001\u4E0D\u518D\u5173\u8054\uFF09</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[showIcon]</code></td>
<td>\u662F\u5426\u5C55\u793A TreeNode title \u524D\u7684\u56FE\u6807\uFF0C\u6CA1\u6709\u9ED8\u8BA4\u6837\u5F0F</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[showExpand]</code></td>
<td>\u8282\u70B9\u524D\u6DFB\u52A0\u5C55\u5F00\u56FE\u6807</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[showLine]</code></td>
<td>\u8282\u70B9\u524D\u6DFB\u52A0\u5C55\u5F00\u56FE\u6807</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[defaultExpandAll]</code></td>
<td>\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u6811\u8282\u70B9</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[displayWith]</code></td>
<td>\u5982\u4F55\u5728\u8F93\u5165\u6846\u663E\u793A\u6240\u9009\u7684\u8282\u70B9\u503C\u7684\u65B9\u6CD5</td>
<td>\`(node: NzTreeNode) =&gt; string</td>
<td>undefined\`</td>
</tr>
<tr>
<td><code>[expandedKeys]</code></td>
<td>\u9ED8\u8BA4\u5C55\u5F00\u6307\u5B9A\u7684\u6811\u8282\u70B9</td>
<td><code>string[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[maxTagCount]</code></td>
<td>\u6700\u591A\u663E\u793A\u591A\u5C11\u4E2A tag</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[maxTagPlaceholder]</code></td>
<td>\u9690\u85CF tag \u65F6\u663E\u793A\u7684\u5185\u5BB9</td>
<td><code>TemplateRef&lt;&#123; $implicit: NzTreeNode[] &#125;&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[treeTemplate]</code></td>
<td>\u81EA\u5B9A\u4E49\u8282\u70B9</td>
<td><code>TemplateRef&lt;&#123; $implicit: NzTreeNode; origin: NzTreeNodeOptions &#125;&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[expandChange]</code></td>
<td>\u70B9\u51FB\u5C55\u5F00\u6811\u8282\u70B9\u56FE\u6807\u8C03\u7528</td>
<td><code>(e: NzFormatEmitEvent) =&gt; Observable&lt;SFSchemaEnum[]&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[virtualHeight]</code></td>
<td>\u865A\u62DF\u6EDA\u52A8\u7684\u603B\u9AD8\u5EA6</td>
<td><code>string</code></td>
<td><code>-</code></td>
</tr>
<tr>
<td><code>[virtualItemSize]</code></td>
<td>\u865A\u62DF\u6EDA\u52A8\u65F6\u6BCF\u4E00\u5217\u7684\u9AD8\u5EA6\uFF0C\u4E0E <a href="https://material.angular.io/cdk/scrolling/api" target="_blank" rel="noopener">cdk itemSize</a> \u76F8\u540C</td>
<td><code>number</code></td>
<td><code>28</code></td>
</tr>
<tr>
<td><code>[virtualMaxBufferPx]</code></td>
<td>\u7F13\u51B2\u533A\u6700\u5927\u50CF\u7D20\u9AD8\u5EA6\uFF0C\u4E0E <a href="https://material.angular.io/cdk/scrolling/api" target="_blank" rel="noopener">cdk maxBufferPx</a> \u76F8\u540C</td>
<td><code>number</code></td>
<td><code>500</code></td>
</tr>
<tr>
<td><code>[virtualMinBufferPx]</code></td>
<td>\u7F13\u51B2\u533A\u6700\u5C0F\u50CF\u7D20\u9AD8\u5EA6\uFF0C\u4F4E\u4E8E\u8BE5\u503C\u65F6\u5C06\u52A0\u8F7D\u65B0\u7ED3\u6784\uFF0C\u4E0E <a href="https://material.angular.io/cdk/scrolling/api" target="_blank" rel="noopener">cdk minBufferPx</a> \u76F8\u540C</td>
<td><code>number</code></td>
<td><code>28</code></td>
</tr>
</tbody></table>
<blockquote>
<p>\u5F02\u6B65\u6570\u636E\u52A1\u5FC5\u5148\u6307\u5B9A\u521D\u59CB\u5316\u6570\u636E\uFF08\u4F7F\u7528 <code>enum</code>\u3001<code>asyncData</code> \u9009\u5176\u4E00\uFF09\uFF0C\u5426\u5219\u65E0\u6CD5\u89E6\u53D1 <code>expandChange</code>\u3002</p>
</blockquote>
`,toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528"},{id:"api",title:"API",children:[{id:"schema_\u5C5E\u6027",title:"schema \u5C5E\u6027"},{id:"ui_\u5C5E\u6027",title:"ui \u5C5E\u6027"}]}],raw:"---\ntitle: tree-select\nsubtitle: \u6811\u9009\u62E9\ntype: Non-built-in widgets\n---\n\n\u6811\u578B\u9009\u62E9\u63A7\u4EF6\u3002\n\n**\u6CE8\u610F\uFF1A**\n\n- `tree-select` \u7684\u6570\u636E\u6E90\u5FC5\u987B\u5305\u542B `title`\u3001`key` \u952E\u540D\n\n## \u5982\u4F55\u4F7F\u7528\n\n\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9) \u6CE8\u518C `withTreeSelectWidget`\u3002\n\n## API\n\n### schema \u5C5E\u6027\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[enum]` | \u6570\u636E\u6E90 | `SFSchemaEnumType[]` | - |\n| `[readOnly]` | \u7981\u7528\u72B6\u6001 | `boolean` | - |\n\n### ui \u5C5E\u6027\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[asyncData]` | \u5F02\u6B65\u6570\u636E\u6E90 | `() => Observable<SFSchemaEnumType[]>` | - |\n| `[size]` | \u5927\u5C0F\uFF0C\u7B49\u540C `nzSize` | `string` | `default` |\n| `[placeholder]` | \u5728\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u8BAF\u606F | `string` | - |\n| `[notFoundContent]` | \u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9 | `string` | - |\n| `[allowClear]` | \u652F\u6301\u6E05\u9664 | `boolean` | `false` |\n| `[clearValue]` | \u6E05\u7A7A\u65F6\u9ED8\u8BA4\u503C | `any` | `undefined` |\n| `[dropdownMatchSelectWidth]` | \u4E0B\u62C9\u83DC\u5355\u548C\u9009\u62E9\u5668\u540C\u5BBD | `boolean` | `true` |\n| `[dropdownStyle]` | \u4E0B\u62C9\u83DC\u5355\u7684 style \u5C5E\u6027 | `object` | - |\n| `[dropdownClassName]` | \u4E0B\u62C9\u83DC\u5355\u7684 className \u5C5E\u6027 | `string` | - |\n| `[multiple]` | \u652F\u6301\u591A\u9009\uFF08\u5F53\u8BBE\u7F6E `checkable` \u65F6\u81EA\u52A8\u53D8\u4E3Atrue\uFF09 | `boolean` | `false` |\n| `[hideUnMatched]` | \u641C\u7D22\u9690\u85CF\u672A\u5339\u914D\u7684\u8282\u70B9 | `boolean` | `false` |\n| `[checkable]` | \u8282\u70B9\u524D\u6DFB\u52A0 Checkbox \u590D\u9009\u6846 | `boolean` | `false` |\n| `[checkStrictly]` | checkable \u72B6\u6001\u4E0B\u8282\u70B9\u9009\u62E9\u5B8C\u5168\u53D7\u63A7\uFF08\u7236\u5B50\u8282\u70B9\u9009\u4E2D\u72B6\u6001\u4E0D\u518D\u5173\u8054\uFF09 | `boolean` | `false` |\n| `[showIcon]` | \u662F\u5426\u5C55\u793A TreeNode title \u524D\u7684\u56FE\u6807\uFF0C\u6CA1\u6709\u9ED8\u8BA4\u6837\u5F0F | `boolean` | `false` |\n| `[showExpand]` | \u8282\u70B9\u524D\u6DFB\u52A0\u5C55\u5F00\u56FE\u6807 | `boolean` | `true` |\n| `[showLine]` | \u8282\u70B9\u524D\u6DFB\u52A0\u5C55\u5F00\u56FE\u6807 | `boolean` | `false` |\n| `[defaultExpandAll]` | \u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u6811\u8282\u70B9 | `boolean` | `false` |\n| `[displayWith]` | \u5982\u4F55\u5728\u8F93\u5165\u6846\u663E\u793A\u6240\u9009\u7684\u8282\u70B9\u503C\u7684\u65B9\u6CD5 | `(node: NzTreeNode) => string | undefined` | `(node: NzTreeNode) => node.title` |\n| `[expandedKeys]` | \u9ED8\u8BA4\u5C55\u5F00\u6307\u5B9A\u7684\u6811\u8282\u70B9 | `string[]` | - |\n| `[maxTagCount]` | \u6700\u591A\u663E\u793A\u591A\u5C11\u4E2A tag | `number` | - |\n| `[maxTagPlaceholder]` | \u9690\u85CF tag \u65F6\u663E\u793A\u7684\u5185\u5BB9 | `TemplateRef<{ $implicit: NzTreeNode[] }>` | - |\n| `[treeTemplate]` | \u81EA\u5B9A\u4E49\u8282\u70B9 | `TemplateRef<{ $implicit: NzTreeNode; origin: NzTreeNodeOptions }>` | - |\n| `[expandChange]` | \u70B9\u51FB\u5C55\u5F00\u6811\u8282\u70B9\u56FE\u6807\u8C03\u7528 | `(e: NzFormatEmitEvent) => Observable<SFSchemaEnum[]>` | - |\n| `[virtualHeight]` | \u865A\u62DF\u6EDA\u52A8\u7684\u603B\u9AD8\u5EA6 | `string` | `-` |\n| `[virtualItemSize]` | \u865A\u62DF\u6EDA\u52A8\u65F6\u6BCF\u4E00\u5217\u7684\u9AD8\u5EA6\uFF0C\u4E0E [cdk itemSize](https://material.angular.io/cdk/scrolling/api) \u76F8\u540C | `number` | `28` |\n| `[virtualMaxBufferPx]` | \u7F13\u51B2\u533A\u6700\u5927\u50CF\u7D20\u9AD8\u5EA6\uFF0C\u4E0E [cdk maxBufferPx](https://material.angular.io/cdk/scrolling/api) \u76F8\u540C | `number` | `500` |\n| `[virtualMinBufferPx]` | \u7F13\u51B2\u533A\u6700\u5C0F\u50CF\u7D20\u9AD8\u5EA6\uFF0C\u4F4E\u4E8E\u8BE5\u503C\u65F6\u5C06\u52A0\u8F7D\u65B0\u7ED3\u6784\uFF0C\u4E0E [cdk minBufferPx](https://material.angular.io/cdk/scrolling/api) \u76F8\u540C | `number` | `28` |\n\n> \u5F02\u6B65\u6570\u636E\u52A1\u5FC5\u5148\u6307\u5B9A\u521D\u59CB\u5316\u6570\u636E\uFF08\u4F7F\u7528 `enum`\u3001`asyncData` \u9009\u5176\u4E00\uFF09\uFF0C\u5426\u5219\u65E0\u6CD5\u89E6\u53D1 `expandChange`\u3002"}}};codes=[{id:"form-tree-select-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, inject } from '@angular/core';
import { of, delay } from 'rxjs';

import { DelonFormModule, SFSchema } from '@delon/form';
import type { SFTreeSelectWidgetSchema } from '@delon/form/widgets/tree-select';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-tree-select-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)" /> \`,
  imports: [DelonFormModule]
})
export class FormTreeSelectSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      status1: {
        type: 'string',
        title: '\u57FA\u672C',
        enum: [
          { title: '\u5F85\u652F\u4ED8', key: 'WAIT_BUYER_PAY' },
          { title: '\u5DF2\u652F\u4ED8', key: 'TRADE_SUCCESS' },
          { title: '\u4EA4\u6613\u5B8C\u6210', key: 'TRADE_FINISHED' }
        ],
        default: 'WAIT_BUYER_PAY',
        ui: {
          widget: 'tree-select'
        } as SFTreeSelectWidgetSchema
      },
      status2: {
        type: 'string',
        title: '\u591A\u9009',
        enum: [
          { title: '\u5F85\u652F\u4ED8', key: 'WAIT_BUYER_PAY' },
          { title: '\u5DF2\u652F\u4ED8', key: 'TRADE_SUCCESS' },
          { title: '\u4EA4\u6613\u5B8C\u6210', key: 'TRADE_FINISHED' }
        ],
        default: ['WAIT_BUYER_PAY', 'TRADE_SUCCESS'],
        ui: {
          widget: 'tree-select',
          multiple: true
        } as SFTreeSelectWidgetSchema
      },
      status3: {
        type: 'string',
        title: '\u53EF\u52FE\u9009',
        default: ['WAIT_BUYER_PAY', 'TRADE_FINISHED'],
        ui: {
          widget: 'tree-select',
          checkable: true,
          asyncData: () =>
            of([
              { title: '\u5F85\u652F\u4ED8', key: 'WAIT_BUYER_PAY' },
              { title: '\u5DF2\u652F\u4ED8', key: 'TRADE_SUCCESS' },
              { title: '\u4EA4\u6613\u5B8C\u6210', key: 'TRADE_FINISHED' }
            ]).pipe(delay(10))
        } as SFTreeSelectWidgetSchema
      },
      // \u5F02\u6B65\u6570\u636E
      async: {
        type: 'string',
        title: 'Async',
        enum: [
          { title: '\u5F85\u652F\u4ED8', key: 'WAIT_BUYER_PAY' },
          { title: '\u5DF2\u652F\u4ED8', key: 'TRADE_SUCCESS' },
          { title: '\u4EA4\u6613\u5B8C\u6210', key: 'TRADE_FINISHED' }
        ],
        ui: {
          widget: 'tree-select',
          expandChange: () => {
            return of([
              { title: '\u5F85\u652F\u4ED8', key: 'WAIT_BUYER_PAY' },
              { title: '\u5DF2\u652F\u4ED8', key: 'TRADE_SUCCESS' },
              { title: '\u4EA4\u6613\u5B8C\u6210', key: 'TRADE_FINISHED' }
            ]).pipe(delay(10));
          }
        } as SFTreeSelectWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:1,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
<blockquote>
<p>\u591A\u9009\uFF1A\u91CD\u7F6E\u65F6\u65E0\u6CD5\u5237\u65B0\u9ED8\u8BA4\u503C <a href="https://github.com/NG-ZORRO/ng-zorro-antd/issues/2085" target="_blank" rel="noopener">#2085</a></p>
</blockquote>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
> \u591A\u9009\uFF1A\u91CD\u7F6E\u65F6\u65E0\u6CD5\u5237\u65B0\u9ED8\u8BA4\u503C [#2085](https://github.com/NG-ZORRO/ng-zorro-antd/issues/2085)
`},path:"packages/form/widgets/tree-select/demo/simple.md"},{id:"form-tree-select-customized-icon",name:"customized-icon",title:{"zh-CN":"\u81EA\u5B9A\u4E49\u56FE\u6807","en-US":"Customize Icon"},code:`import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import type { SFTreeSelectWidgetSchema } from '@delon/form/widgets/tree-select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTreeNode } from 'ng-zorro-antd/tree';

@Component({
  selector: 'form-tree-select-customized-icon',
  template: \`
    @if (schema) {
      <sf [schema]="schema" />
    }
    <ng-template #customTpl let-node>
      <span class="ant-tree-node-content-wrapper" [class.ant-tree-node-selected]="node.isSelected">
        <span> <nz-icon [nzType]="node.isExpanded ? 'folder-open' : 'folder'"/> {{ node.title }} </span>
      </span>
    </ng-template>
  \`,
  imports: [DelonFormModule, NzIconModule]
})
export class FormTreeSelectCustomizedIcon implements OnInit {
  @ViewChild('customTpl', { static: true }) private customTpl!: TemplateRef<{ $implicit: NzTreeNode }>;

  schema?: SFSchema;

  ngOnInit(): void {
    this.schema = {
      properties: {
        status: {
          type: 'string',
          title: '\u57FA\u672C',
          enum: [
            {
              title: 'parent 1',
              key: '100',
              expanded: true,
              icon: 'smile',
              children: [
                { title: 'leaf 1-0-0', key: '10010', icon: 'meh', isLeaf: true },
                { title: 'leaf 1-0-1', key: '10011', icon: 'frown', isLeaf: true }
              ]
            }
          ],
          default: '10010',
          ui: {
            widget: 'tree-select',
            treeTemplate: this.customTpl
          } as SFTreeSelectWidgetSchema
        }
      }
    };
  }
}`,order:2,type:"demo",summary:{"en-US":`<p>You can customize icons for different nodes.</p>
`,"zh-CN":`<p>\u53EF\u4EE5\u9488\u5BF9\u4E0D\u540C\u8282\u70B9\u91C7\u7528\u6837\u5F0F\u8986\u76D6\u7684\u65B9\u5F0F\u5B9A\u5236\u56FE\u6807\u3002</p>
`},summary_raw:{"en-US":`You can customize icons for different nodes.
`,"zh-CN":`\u53EF\u4EE5\u9488\u5BF9\u4E0D\u540C\u8282\u70B9\u91C7\u7528\u6837\u5F0F\u8986\u76D6\u7684\u65B9\u5F0F\u5B9A\u5236\u56FE\u6807\u3002
`},path:"packages/form/widgets/tree-select/demo/customized-icon.md"},{id:"form-tree-select-virtual-scroll",name:"virtual-scroll",title:{"zh-CN":"\u865A\u62DF\u6EDA\u52A8","en-US":"Virtual Scroll"},code:`import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import type { SFTreeSelectWidgetSchema } from '@delon/form/widgets/tree-select';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';

@Component({
  selector: 'form-tree-select-virtual-scroll',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)" /> \`,
  imports: [DelonFormModule]
})
export class FormTreeSelectVirtualScroll {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      status1: {
        type: 'string',
        title: '\u865A\u62DF\u6EDA\u52A8',
        enum: this.dig(),
        ui: {
          widget: 'tree-select',
          virtualHeight: '300px'
        } as SFTreeSelectWidgetSchema
      }
    }
  };

  private dig(path: string = '0', level: number = 3): NzTreeNodeOptions[] {
    const list: NzTreeNodeOptions[] = [];
    for (let i = 0; i < 10; i += 1) {
      const key = \`\${path}-\${i}\`;
      const treeNode: NzTreeNodeOptions = {
        title: key,
        key,
        expanded: true,
        children: [],
        isLeaf: false
      };

      if (level > 0) {
        treeNode.children = this.dig(key, level - 1);
      } else {
        treeNode.isLeaf = true;
      }

      list.push(treeNode);
    }
    return list;
  }

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:3,type:"demo",summary:{"en-US":`<p>Set <code>virtualHeight</code> to enable virtual scroll.</p>
`,"zh-CN":`<p>\u8BBE\u5B9A <code>virtualHeight</code> \u5F00\u542F\u865A\u62DF\u6EDA\u52A8\u3002</p>
`},summary_raw:{"en-US":"Set `virtualHeight` to enable virtual scroll.\n","zh-CN":"\u8BBE\u5B9A `virtualHeight` \u5F00\u542F\u865A\u62DF\u6EDA\u52A8\u3002\n"},path:"packages/form/widgets/tree-select/demo/virtual-scroll.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-tree-select"]],hostAttrs:[1,"d-block"],decls:9,vars:9,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-tree-select-simple"),i(),a(5,"code-box",3),m(6,"form-tree-select-customized-icon"),i(),a(7,"code-box",3),m(8,"form-tree-select-virtual-scroll"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id),c(2),d("item",t.codes[1]),v("id",t.codes[1].id),c(2),d("item",t.codes[2]),v("id",t.codes[2].id))},dependencies:[S,vt,wt,Ft,F,w,C],encapsulation:2})};var kt=class o{msg=u(y);schema={properties:{file:{type:"string",title:"\u5355\u4E2A\u6587\u4EF6",enum:[{uid:-1,name:"xxx.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",response:{resource_id:1}}],ui:{widget:"upload",action:"/upload",resReName:"resource_id",urlReName:"url"}},mulit:{type:"string",title:"\u591A\u4E2A\u6587\u4EF6",ui:{widget:"upload",action:"/upload",resReName:"resource_id",urlReName:"url",multiple:!0}},drag:{type:"string",title:"Drag",ui:{widget:"upload",action:"/upload",resReName:"resource_id",urlReName:"url",type:"drag"}}}};submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-upload-simple"]],decls:1,vars:1,consts:[[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)},dependencies:[g,h],encapsulation:2})};var Dt=class o{item={name:"upload",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"upload",subtitle:"Upload",description:"Upload file widget by select or drag.Non-built-in modules need to additionally register withUploadWidget in json-schema.Must set resReName to get corr...",group:"Non-built-in widgets",order:0,path:"packages/form/widgets/upload/index.en-US.md",url:"/form/upload/en"},text:`<p>Upload file widget by select or drag.</p>
<h2 id="how_to_use"><a class="lake-link"><i data-anchor="how_to_use"></i></a>How to use</h2><p>Non-built-in modules need to additionally register <code>withUploadWidget</code> in <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9" target="_blank" rel="noopener">json-schema</a>.</p>
<h2 id="note"><a class="lake-link"><i data-anchor="note"></i></a>Note</h2><ul>
<li><strong>Must</strong> set <code>resReName</code> to get correct data</li>
<li><code>multiple</code> determine return array or one element</li>
<li>If <code>enum</code> or <code>asyncData</code> is set, it will be converted to <code>fileList</code> (<code>nzFileList</code>), and <strong>must</strong> initially guarantee a <code>response</code> property to indicate remote data and make sure <code>resReName</code> can be obtained correctly</li>
<li>Image preview: by default, it uses <code>nzModal</code> to show <code>url</code> or <code>thumbUrl</code> of file object</li>
</ul>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[readOnly]</code></td>
<td>Read only</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[asyncData]</code></td>
<td>Asynchronous data source</td>
<td><code>() =&gt; Observable&lt;SFSchemaEnumType[]&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[type]</code></td>
<td>Upload type</td>
<td><code>select,drag</code></td>
<td><code>select</code></td>
</tr>
<tr>
<td><code>[text]</code></td>
<td>Text of button</td>
<td><code>string</code></td>
<td><code>\u70B9\u51FB\u4E0A\u4F20</code></td>
</tr>
<tr>
<td><code>[hint]</code></td>
<td>Text of hint, it is valid during drag</td>
<td><code>string</code></td>
<td><code>\u652F\u6301\u5355\u4E2A\u6216\u6279\u91CF\uFF0C\u4E25\u7981\u4E0A\u4F20\u516C\u53F8\u6570\u636E\u6216\u5176\u4ED6\u5B89\u5168\u6587\u4EF6</code></td>
</tr>
<tr>
<td><code>[resReName]</code></td>
<td>Rename return parameter, support nested style <code>a.b.c</code>, the whole return body will be used if it is not set</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[urlReName]</code></td>
<td>Rename image preview URl return parameter, support nested style <code>a.b.c</code>, <code>url</code>, <code>thumbUrl</code> of file object will be used if it is not set</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[action]</code></td>
<td>Required attribute, upload URL</td>
<td><code>string, ((file: UploadFile) =&gt; string, Observable&lt;string&gt;)</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[accept]</code></td>
<td>File types that can be accepted, see details from <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept" target="_blank" rel="noopener">input accept Attribute</a></td>
<td><code>string, string[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[limit]</code></td>
<td>limit number of single upload when <code>multiple</code> is set, 0 means unlimited</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[filter]</code></td>
<td>Custom filter when choosed file</td>
<td><code>UploadFilter[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[fileList]</code></td>
<td>File list</td>
<td><code>UploadFile[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[fileSize]</code></td>
<td>Limit file size, unit: KB; <code>0</code> means unlimited</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[fileType]</code></td>
<td>Limit file type, e.g. <code>image/png,image/jpeg,image/gif,image/bmp</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[headers]</code></td>
<td>Set request header of upload</td>
<td>\`Object, (file: UploadFile) =&gt; &#123;&#125;</td>
<td>Observable&lt;&#123;&#125;&gt;\`</td>
</tr>
<tr>
<td><code>[listType]</code></td>
<td>Built-in style of upload list</td>
<td><code>text,picture,picture-card</code></td>
<td><code>text</code></td>
</tr>
<tr>
<td><code>[showUploadList]</code></td>
<td>Whether show upload list, can set as an object, used to set <code>showPreviewIcon</code> and <code>showRemoveIcon</code> separately</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[multiple]</code></td>
<td>Whether support multiple file selection. IE10+ supported. You can select multiple files with holding <code>ctrl</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[name]</code></td>
<td>File name when sending to backend</td>
<td><code>string</code></td>
<td><code>file</code></td>
</tr>
<tr>
<td><code>[data]</code></td>
<td>Uploading params or function which can return uploading params</td>
<td>\`Object, (file: UploadFile) =&gt; &#123;&#125;</td>
<td>Observable&lt;&#123;&#125;&gt;\`</td>
</tr>
<tr>
<td><code>[withCredentials]</code></td>
<td>Whether set cookie during upload</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[directory]</code></td>
<td>Support upload whole directory (<a href="https://caniuse.com/#feat=input-file-directory" target="_blank" rel="noopener">caniuse</a>)</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[openFileDialogOnClick]</code></td>
<td>Click to open file dialog</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[beforeUpload]</code></td>
<td>Hook function which will be executed before uploading, parameter is file to be uploaded, stop uploading when <code>false</code> is returned</td>
<td><code>(file: UploadFile, fileList: UploadFile[]) =&gt; boolean\uFF5CObservable&lt;boolean&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[customRequest]</code></td>
<td>Override the default xhr behavior allowing for additional customization and ability to implement your own XMLHttpRequest</td>
<td><code>(item: UploadXHRArgs) =&gt; Subscription</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[remove]</code></td>
<td>Callback function when remove is clicked, won&#39;t remove when <code>false</code> is returned</td>
<td><code>(file: UploadFile) =&gt; boolean\uFF5CObservable</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[preview]</code></td>
<td>Callback function when file link or preview icon is clicked</td>
<td><code>(file: UploadFile) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[previewFile]</code></td>
<td>Customize preview file logic</td>
<td><code>(file: UploadFile) =&gt; Observable&lt;string&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[download]</code></td>
<td>Callback function when clicking the method to download the file, jump to a new tab with url of file</td>
<td><code>(file: UploadFile) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[transformFile]</code></td>
<td>Transform file before file conversion. Support to return Observable object</td>
<td><code>(file: UploadFile) =&gt; UploadTransformFileType</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[change]</code></td>
<td>Callback function when uploading state is changing</td>
<td><code>(args: UploadChangeParam) =&gt; void</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:"how_to_use",title:"How to use"},{id:"note",title:"Note"},{id:"api",title:"API",children:[{id:"schema",title:"schema"},{id:"ui",title:"ui"}]}],raw:"---\ntitle: upload\nsubtitle: Upload\ntype: Non-built-in widgets\n---\n\nUpload file widget by select or drag.\n\n## How to use\n\nNon-built-in modules need to additionally register `withUploadWidget` in [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9).\n\n## Note\n\n- **Must** set `resReName` to get correct data\n- `multiple` determine return array or one element\n- If `enum` or `asyncData` is set, it will be converted to `fileList` (`nzFileList`), and **must** initially guarantee a `response` property to indicate remote data and make sure `resReName` can be obtained correctly\n- Image preview: by default, it uses `nzModal` to show `url` or `thumbUrl` of file object\n\n## API\n\n### schema\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[readOnly]` | Read only | `boolean` | - |\n\n### ui\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[asyncData]` | Asynchronous data source | `() => Observable<SFSchemaEnumType[]>` | - |\n| `[type]` | Upload type | `select,drag` | `select` |\n| `[text]` | Text of button | `string` | `\u70B9\u51FB\u4E0A\u4F20` |\n| `[hint]` | Text of hint, it is valid during drag | `string` | `\u652F\u6301\u5355\u4E2A\u6216\u6279\u91CF\uFF0C\u4E25\u7981\u4E0A\u4F20\u516C\u53F8\u6570\u636E\u6216\u5176\u4ED6\u5B89\u5168\u6587\u4EF6` |\n| `[resReName]` | Rename return parameter, support nested style `a.b.c`, the whole return body will be used if it is not set | `string` | - |\n| `[urlReName]` | Rename image preview URl return parameter, support nested style `a.b.c`, `url`, `thumbUrl` of file object will be used if it is not set | `string` | - |\n| `[action]` | Required attribute, upload URL | `string, ((file: UploadFile) => string, Observable<string>)` | - |\n| `[accept]` | File types that can be accepted, see details from [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept) | `string, string[]` | - |\n| `[limit]` | limit number of single upload when `multiple` is set, 0 means unlimited | `number` | `0` |\n| `[filter]` | Custom filter when choosed file | `UploadFilter[]` | - |\n| `[fileList]` | File list | `UploadFile[]` | - |\n| `[fileSize]` | Limit file size, unit: KB; `0` means unlimited | `number` | `0` |\n| `[fileType]` | Limit file type, e.g. `image/png,image/jpeg,image/gif,image/bmp` | `string` | - |\n| `[headers]` | Set request header of upload | `Object, (file: UploadFile) => {} | Observable<{}>` | - |\n| `[listType]` | Built-in style of upload list | `text,picture,picture-card` | `text` |\n| `[showUploadList]` | Whether show upload list, can set as an object, used to set `showPreviewIcon` and `showRemoveIcon` separately | `boolean` | `true` |\n| `[multiple]` | Whether support multiple file selection. IE10+ supported. You can select multiple files with holding `ctrl` | `boolean` | `false` |\n| `[name]` | File name when sending to backend | `string` | `file` |\n| `[data]` | Uploading params or function which can return uploading params | `Object, (file: UploadFile) => {} | Observable<{}>` | - |\n| `[withCredentials]` | Whether set cookie during upload | `boolean` | `false` |\n| `[directory]` | Support upload whole directory ([caniuse](https://caniuse.com/#feat=input-file-directory)) | `boolean` | `false` |\n| `[openFileDialogOnClick]` | Click to open file dialog | `boolean` | `true` |\n| `[beforeUpload]` | Hook function which will be executed before uploading, parameter is file to be uploaded, stop uploading when `false` is returned | `(file: UploadFile, fileList: UploadFile[]) => boolean\uFF5CObservable<boolean>` | - |\n| `[customRequest]` | Override the default xhr behavior allowing for additional customization and ability to implement your own XMLHttpRequest | `(item: UploadXHRArgs) => Subscription` | - |\n| `[remove]` | Callback function when remove is clicked, won't remove when `false` is returned | `(file: UploadFile) => boolean\uFF5CObservable` | - |\n| `[preview]` | Callback function when file link or preview icon is clicked | `(file: UploadFile) => void` | - |\n| `[previewFile]` | Customize preview file logic | `(file: UploadFile) => Observable<string>` | - |\n| `[download]` | Callback function when clicking the method to download the file, jump to a new tab with url of file | `(file: UploadFile) => void` | - |\n| `[transformFile]` | Transform file before file conversion. Support to return Observable object | `(file: UploadFile) => UploadTransformFileType` | - |\n| `[change]` | Callback function when uploading state is changing | `(args: UploadChangeParam) => void` | - |"},"zh-CN":{meta:{title:"upload",subtitle:"\u4E0A\u4F20",description:"\u6587\u4EF6\u9009\u62E9\u4E0A\u4F20\u548C\u62D6\u62FD\u4E0A\u4F20\u63A7\u4EF6\u3002\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 json-schema \u6CE8\u518C withUploadWidget\u3002\u52A1\u5FC5 \u6307\u5B9A resReName \u6765\u83B7\u53D6\u6B63\u786E\u6570\u636Emultiple \u51B3\u5B9A\u8FD4\u56DE\u6570\u7EC4\u6216\u8005\u5355\u4F53\u6570\u636E\u82E5\u6307\u5B9A enum \u6216 asyncData \u5C06\u88AB\u8F6C\u5316\u6210 fileList (nzFileList)...",group:"Non-built-in widgets",order:0,path:"packages/form/widgets/upload/index.zh-CN.md",url:"/form/upload/zh"},text:`<p>\u6587\u4EF6\u9009\u62E9\u4E0A\u4F20\u548C\u62D6\u62FD\u4E0A\u4F20\u63A7\u4EF6\u3002</p>
<h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p>\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9" target="_blank" rel="noopener">json-schema</a> \u6CE8\u518C <code>withUploadWidget</code>\u3002</p>
<h2 id="\u6CE8\u610F\u4E8B\u9879"><a class="lake-link"><i data-anchor="\u6CE8\u610F\u4E8B\u9879"></i></a>\u6CE8\u610F\u4E8B\u9879</h2><ul>
<li><strong>\u52A1\u5FC5</strong> \u6307\u5B9A <code>resReName</code> \u6765\u83B7\u53D6\u6B63\u786E\u6570\u636E</li>
<li><code>multiple</code> \u51B3\u5B9A\u8FD4\u56DE\u6570\u7EC4\u6216\u8005\u5355\u4F53\u6570\u636E</li>
<li>\u82E5\u6307\u5B9A <code>enum</code> \u6216 <code>asyncData</code> \u5C06\u88AB\u8F6C\u5316\u6210 <code>fileList</code> (<code>nzFileList</code>) \u503C\uFF0C\u4E14<strong>\u52A1\u5FC5</strong>\u521D\u59CB\u4FDD\u8BC1\u4E00\u4E2A <code>response</code> \u5C5E\u6027\u8868\u793A\u8FDC\u7A0B\u6570\u636E\u5E76 <code>resReName</code> \u80FD\u6B63\u786E\u83B7\u53D6</li>
<li>\u56FE\u50CF\u9884\u89C8\uFF1A\u9ED8\u8BA4\u4F7F\u7528 <code>nzModal</code> \u6765\u663E\u793A\u5305\u542B\u6587\u4EF6\u5BF9\u8C61\u7684 <code>url</code> \u6216 <code>thumbUrl</code> \u503C</li>
</ul>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="schema_\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema_\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[readOnly]</code></td>
<td>\u7981\u7528\u72B6\u6001</td>
<td><code>boolean</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="ui_\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui_\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>[asyncData]</code></td>
<td>\u5F02\u6B65\u6570\u636E\u6E90</td>
<td><code>() =&gt; Observable&lt;SFSchemaEnumType[]&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[type]</code></td>
<td>\u4E0A\u4F20\u7C7B\u578B</td>
<td><code>select,drag</code></td>
<td><code>select</code></td>
</tr>
<tr>
<td><code>[text]</code></td>
<td>\u6309\u94AE\u6587\u672C</td>
<td><code>string</code></td>
<td><code>\u70B9\u51FB\u4E0A\u4F20</code></td>
</tr>
<tr>
<td><code>[hint]</code></td>
<td>\u63D0\u9192\u6587\u672C\uFF0Cdrag \u65F6\u6709\u6548</td>
<td><code>string</code></td>
<td><code>\u652F\u6301\u5355\u4E2A\u6216\u6279\u91CF\uFF0C\u4E25\u7981\u4E0A\u4F20\u516C\u53F8\u6570\u636E\u6216\u5176\u4ED6\u5B89\u5168\u6587\u4EF6</code></td>
</tr>
<tr>
<td><code>[resReName]</code></td>
<td>\u91CD\u547D\u540D\u8FD4\u56DE\u53C2\u6570\uFF0C\u652F\u6301 <code>a.b.c</code> \u7684\u5D4C\u5957\u5199\u6CD5\uFF0C\u82E5\u4E0D\u6307\u5B9A\u8868\u793A\u6574\u4E2A\u8FD4\u56DE\u4F53</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[urlReName]</code></td>
<td>\u91CD\u547D\u540D\u9884\u89C8\u56FE\u50CFURL\u8FD4\u56DE\u53C2\u6570\uFF0C\u652F\u6301 <code>a.b.c</code> \u7684\u5D4C\u5957\u5199\u6CD5\uFF0C\u82E5\u4E0D\u6307\u5B9A\u8868\u793A\u4F7F\u7528\u6587\u4EF6\u5BF9\u8C61\u7684 <code>url</code>\u3001<code>thumbUrl</code> \u503C</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[action]</code></td>
<td>\u5FC5\u9009\u53C2\u6570, \u4E0A\u4F20\u7684\u5730\u5740</td>
<td><code>string, ((file: UploadFile) =&gt; string, Observable&lt;string&gt;)</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[accept]</code></td>
<td>\u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B, \u8BE6\u89C1 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept" target="_blank" rel="noopener">input accept Attribute</a></td>
<td><code>string, string[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[limit]</code></td>
<td>\u9650\u5236\u5355\u6B21\u6700\u591A\u4E0A\u4F20\u6570\u91CF\uFF0C<code>multiple</code> \u6253\u5F00\u65F6\u6709\u6548\uFF1B<code>0</code> \u8868\u793A\u4E0D\u9650</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[filter]</code></td>
<td>\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u5668</td>
<td><code>UploadFilter[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[fileList]</code></td>
<td>\u6587\u4EF6\u5217\u8868</td>
<td><code>UploadFile[]</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[fileSize]</code></td>
<td>\u9650\u5236\u6587\u4EF6\u5927\u5C0F\uFF0C\u5355\u4F4D\uFF1AKB\uFF1B<code>0</code> \u8868\u793A\u4E0D\u9650</td>
<td><code>number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td><code>[fileType]</code></td>
<td>\u9650\u5236\u6587\u4EF6\u7C7B\u578B\uFF0C\u4F8B\u5982\uFF1A<code>image/png,image/jpeg,image/gif,image/bmp</code></td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[headers]</code></td>
<td>\u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u5934\u90E8</td>
<td>\`Object, (file: UploadFile) =&gt; &#123;&#125;</td>
<td>Observable&lt;&#123;&#125;&gt;\`</td>
</tr>
<tr>
<td><code>[listType]</code></td>
<td>\u4E0A\u4F20\u5217\u8868\u7684\u5185\u5EFA\u6837\u5F0F</td>
<td><code>text,picture,picture-card</code></td>
<td><code>text</code></td>
</tr>
<tr>
<td><code>[showUploadList]</code></td>
<td>\u662F\u5426\u5C55\u793A\u5217\u8868, \u53EF\u8BBE\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u7528\u4E8E\u5355\u72EC\u8BBE\u5B9A <code>showPreviewIcon</code> \u548C <code>showRemoveIcon</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[multiple]</code></td>
<td>\u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6\uFF0C<code>IE10+</code> \u652F\u6301\u3002\u5F00\u542F\u540E\u6309\u4F4F <code>ctrl</code> \u53EF\u9009\u62E9\u591A\u4E2A\u6587\u4EF6\u3002</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[name]</code></td>
<td>\u53D1\u5230\u540E\u53F0\u7684\u6587\u4EF6\u53C2\u6570\u540D</td>
<td><code>string</code></td>
<td><code>file</code></td>
</tr>
<tr>
<td><code>[data]</code></td>
<td>\u4E0A\u4F20\u6240\u9700\u53C2\u6570\u6216\u8FD4\u56DE\u4E0A\u4F20\u53C2\u6570\u7684\u65B9\u6CD5</td>
<td>\`Object, (file: UploadFile) =&gt; &#123;&#125;</td>
<td>Observable&lt;&#123;&#125;&gt;\`</td>
</tr>
<tr>
<td><code>[withCredentials]</code></td>
<td>\u4E0A\u4F20\u8BF7\u6C42\u65F6\u662F\u5426\u643A\u5E26 cookie</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[directory]</code></td>
<td>\u652F\u6301\u4E0A\u4F20\u6587\u4EF6\u5939\uFF08<a href="https://caniuse.com/#feat=input-file-directory" target="_blank" rel="noopener">caniuse</a>\uFF09</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>[openFileDialogOnClick]</code></td>
<td>\u70B9\u51FB\u6253\u5F00\u6587\u4EF6\u5BF9\u8BDD\u6846</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>[beforeUpload]</code></td>
<td>\u4E0A\u4F20\u6587\u4EF6\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u53C2\u6570\u4E3A\u4E0A\u4F20\u7684\u6587\u4EF6\uFF0C\u82E5\u8FD4\u56DE <code>false</code> \u5219\u505C\u6B62\u4E0A\u4F20</td>
<td><code>(file: UploadFile, fileList: UploadFile[]) =&gt; boolean\uFF5CObservable&lt;boolean&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[customRequest]</code></td>
<td>\u901A\u8FC7\u8986\u76D6\u9ED8\u8BA4\u7684\u4E0A\u4F20\u884C\u4E3A\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u81EA\u5DF1\u7684\u4E0A\u4F20\u5B9E\u73B0</td>
<td><code>(item: UploadXHRArgs) =&gt; Subscription</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[remove]</code></td>
<td>\u70B9\u51FB\u79FB\u9664\u6587\u4EF6\u65F6\u7684\u56DE\u8C03\uFF0C\u8FD4\u56DE\u503C\u4E3A <code>false</code> \u65F6\u4E0D\u79FB\u9664</td>
<td><code>(file: UploadFile) =&gt; boolean\uFF5CObservable</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[preview]</code></td>
<td>\u70B9\u51FB\u6587\u4EF6\u94FE\u63A5\u6216\u9884\u89C8\u56FE\u6807\u65F6\u7684\u56DE\u8C03</td>
<td><code>(file: UploadFile) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[previewFile]</code></td>
<td>\u81EA\u5B9A\u4E49\u6587\u4EF6\u9884\u89C8\u903B\u8F91</td>
<td><code>(file: UploadFile) =&gt; Observable&lt;string&gt;</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[download]</code></td>
<td>\u70B9\u51FB\u4E0B\u8F7D\u6587\u4EF6\u65F6\u7684\u56DE\u8C03\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9A\uFF0C\u5219\u9ED8\u8BA4\u8DF3\u8F6C\u5230\u6587\u4EF6 url \u5BF9\u5E94\u7684\u6807\u7B7E\u9875</td>
<td><code>(file: UploadFile) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[transformFile]</code></td>
<td>\u5728\u4E0A\u4F20\u4E4B\u524D\u8F6C\u6362\u6587\u4EF6\u3002\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A Observable \u5BF9\u8C61</td>
<td><code>(file: UploadFile) =&gt; UploadTransformFileType</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[change]</code></td>
<td>\u4E0A\u4F20\u6587\u4EF6\u6539\u53D8\u65F6\u7684\u72B6\u6001</td>
<td><code>(args: UploadChangeParam) =&gt; void</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528"},{id:"\u6CE8\u610F\u4E8B\u9879",title:"\u6CE8\u610F\u4E8B\u9879"},{id:"api",title:"API",children:[{id:"schema_\u5C5E\u6027",title:"schema \u5C5E\u6027"},{id:"ui_\u5C5E\u6027",title:"ui \u5C5E\u6027"}]}],raw:"---\ntitle: upload\nsubtitle: \u4E0A\u4F20\ntype: Non-built-in widgets\n---\n\n\u6587\u4EF6\u9009\u62E9\u4E0A\u4F20\u548C\u62D6\u62FD\u4E0A\u4F20\u63A7\u4EF6\u3002\n\n## \u5982\u4F55\u4F7F\u7528\n\n\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9) \u6CE8\u518C `withUploadWidget`\u3002\n\n## \u6CE8\u610F\u4E8B\u9879\n\n- **\u52A1\u5FC5** \u6307\u5B9A `resReName` \u6765\u83B7\u53D6\u6B63\u786E\u6570\u636E\n- `multiple` \u51B3\u5B9A\u8FD4\u56DE\u6570\u7EC4\u6216\u8005\u5355\u4F53\u6570\u636E\n- \u82E5\u6307\u5B9A `enum` \u6216 `asyncData` \u5C06\u88AB\u8F6C\u5316\u6210 `fileList` (`nzFileList`) \u503C\uFF0C\u4E14**\u52A1\u5FC5**\u521D\u59CB\u4FDD\u8BC1\u4E00\u4E2A `response` \u5C5E\u6027\u8868\u793A\u8FDC\u7A0B\u6570\u636E\u5E76 `resReName` \u80FD\u6B63\u786E\u83B7\u53D6\n- \u56FE\u50CF\u9884\u89C8\uFF1A\u9ED8\u8BA4\u4F7F\u7528 `nzModal` \u6765\u663E\u793A\u5305\u542B\u6587\u4EF6\u5BF9\u8C61\u7684 `url` \u6216 `thumbUrl` \u503C\n\n## API\n\n### schema \u5C5E\u6027\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[readOnly]` | \u7981\u7528\u72B6\u6001 | `boolean` | - |\n\n### ui \u5C5E\u6027\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[asyncData]` | \u5F02\u6B65\u6570\u636E\u6E90 | `() => Observable<SFSchemaEnumType[]>` | - |\n| `[type]` | \u4E0A\u4F20\u7C7B\u578B | `select,drag` | `select` |\n| `[text]` | \u6309\u94AE\u6587\u672C | `string` | `\u70B9\u51FB\u4E0A\u4F20` |\n| `[hint]` | \u63D0\u9192\u6587\u672C\uFF0Cdrag \u65F6\u6709\u6548 | `string` | `\u652F\u6301\u5355\u4E2A\u6216\u6279\u91CF\uFF0C\u4E25\u7981\u4E0A\u4F20\u516C\u53F8\u6570\u636E\u6216\u5176\u4ED6\u5B89\u5168\u6587\u4EF6` |\n| `[resReName]` | \u91CD\u547D\u540D\u8FD4\u56DE\u53C2\u6570\uFF0C\u652F\u6301 `a.b.c` \u7684\u5D4C\u5957\u5199\u6CD5\uFF0C\u82E5\u4E0D\u6307\u5B9A\u8868\u793A\u6574\u4E2A\u8FD4\u56DE\u4F53 | `string` | - |\n| `[urlReName]` | \u91CD\u547D\u540D\u9884\u89C8\u56FE\u50CFURL\u8FD4\u56DE\u53C2\u6570\uFF0C\u652F\u6301 `a.b.c` \u7684\u5D4C\u5957\u5199\u6CD5\uFF0C\u82E5\u4E0D\u6307\u5B9A\u8868\u793A\u4F7F\u7528\u6587\u4EF6\u5BF9\u8C61\u7684 `url`\u3001`thumbUrl` \u503C | `string` | - |\n| `[action]` | \u5FC5\u9009\u53C2\u6570, \u4E0A\u4F20\u7684\u5730\u5740 | `string, ((file: UploadFile) => string, Observable<string>)` | - |\n| `[accept]` | \u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B, \u8BE6\u89C1 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept) | `string, string[]` | - |\n| `[limit]` | \u9650\u5236\u5355\u6B21\u6700\u591A\u4E0A\u4F20\u6570\u91CF\uFF0C`multiple` \u6253\u5F00\u65F6\u6709\u6548\uFF1B`0` \u8868\u793A\u4E0D\u9650 | `number` | `0` |\n| `[filter]` | \u81EA\u5B9A\u4E49\u8FC7\u6EE4\u5668 | `UploadFilter[]` | - |\n| `[fileList]` | \u6587\u4EF6\u5217\u8868 | `UploadFile[]` | - |\n| `[fileSize]` | \u9650\u5236\u6587\u4EF6\u5927\u5C0F\uFF0C\u5355\u4F4D\uFF1AKB\uFF1B`0` \u8868\u793A\u4E0D\u9650 | `number` | `0` |\n| `[fileType]` | \u9650\u5236\u6587\u4EF6\u7C7B\u578B\uFF0C\u4F8B\u5982\uFF1A`image/png,image/jpeg,image/gif,image/bmp` | `string` | - |\n| `[headers]` | \u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u5934\u90E8 | `Object, (file: UploadFile) => {} | Observable<{}>` | - |\n| `[listType]` | \u4E0A\u4F20\u5217\u8868\u7684\u5185\u5EFA\u6837\u5F0F | `text,picture,picture-card` | `text` |\n| `[showUploadList]` | \u662F\u5426\u5C55\u793A\u5217\u8868, \u53EF\u8BBE\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u7528\u4E8E\u5355\u72EC\u8BBE\u5B9A `showPreviewIcon` \u548C `showRemoveIcon` | `boolean` | `true` |\n| `[multiple]` | \u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6\uFF0C`IE10+` \u652F\u6301\u3002\u5F00\u542F\u540E\u6309\u4F4F `ctrl` \u53EF\u9009\u62E9\u591A\u4E2A\u6587\u4EF6\u3002 | `boolean` | `false` |\n| `[name]` | \u53D1\u5230\u540E\u53F0\u7684\u6587\u4EF6\u53C2\u6570\u540D | `string` | `file` |\n| `[data]` | \u4E0A\u4F20\u6240\u9700\u53C2\u6570\u6216\u8FD4\u56DE\u4E0A\u4F20\u53C2\u6570\u7684\u65B9\u6CD5 | `Object, (file: UploadFile) => {} | Observable<{}>` | - |\n| `[withCredentials]` | \u4E0A\u4F20\u8BF7\u6C42\u65F6\u662F\u5426\u643A\u5E26 cookie | `boolean` | `false` |\n| `[directory]` | \u652F\u6301\u4E0A\u4F20\u6587\u4EF6\u5939\uFF08[caniuse](https://caniuse.com/#feat=input-file-directory)\uFF09 | `boolean` | `false` |\n| `[openFileDialogOnClick]` | \u70B9\u51FB\u6253\u5F00\u6587\u4EF6\u5BF9\u8BDD\u6846 | `boolean` | `true` |\n| `[beforeUpload]` | \u4E0A\u4F20\u6587\u4EF6\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u53C2\u6570\u4E3A\u4E0A\u4F20\u7684\u6587\u4EF6\uFF0C\u82E5\u8FD4\u56DE `false` \u5219\u505C\u6B62\u4E0A\u4F20 | `(file: UploadFile, fileList: UploadFile[]) => boolean\uFF5CObservable<boolean>` | - |\n| `[customRequest]` | \u901A\u8FC7\u8986\u76D6\u9ED8\u8BA4\u7684\u4E0A\u4F20\u884C\u4E3A\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u81EA\u5DF1\u7684\u4E0A\u4F20\u5B9E\u73B0 | `(item: UploadXHRArgs) => Subscription` | - |\n| `[remove]` | \u70B9\u51FB\u79FB\u9664\u6587\u4EF6\u65F6\u7684\u56DE\u8C03\uFF0C\u8FD4\u56DE\u503C\u4E3A `false` \u65F6\u4E0D\u79FB\u9664 | `(file: UploadFile) => boolean\uFF5CObservable` | - |\n| `[preview]` | \u70B9\u51FB\u6587\u4EF6\u94FE\u63A5\u6216\u9884\u89C8\u56FE\u6807\u65F6\u7684\u56DE\u8C03 | `(file: UploadFile) => void` | - |\n| `[previewFile]` | \u81EA\u5B9A\u4E49\u6587\u4EF6\u9884\u89C8\u903B\u8F91 | `(file: UploadFile) => Observable<string>` | - |\n| `[download]` | \u70B9\u51FB\u4E0B\u8F7D\u6587\u4EF6\u65F6\u7684\u56DE\u8C03\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9A\uFF0C\u5219\u9ED8\u8BA4\u8DF3\u8F6C\u5230\u6587\u4EF6 url \u5BF9\u5E94\u7684\u6807\u7B7E\u9875 | `(file: UploadFile) => void` | - |\n| `[transformFile]` | \u5728\u4E0A\u4F20\u4E4B\u524D\u8F6C\u6362\u6587\u4EF6\u3002\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A Observable \u5BF9\u8C61 | `(file: UploadFile) => UploadTransformFileType` | - |\n| `[change]` | \u4E0A\u4F20\u6587\u4EF6\u6539\u53D8\u65F6\u7684\u72B6\u6001 | `(args: UploadChangeParam) => void` | - |"}}};codes=[{id:"form-upload-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import type { SFUploadWidgetSchema } from '@delon/form/widgets/upload';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-upload-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)" /> \`,
  imports: [DelonFormModule]
})
export class FormUploadSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      file: {
        type: 'string',
        title: '\u5355\u4E2A\u6587\u4EF6',
        enum: [
          {
            uid: -1,
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            response: {
              resource_id: 1
            }
          }
        ],
        ui: {
          widget: 'upload',
          action: '/upload',
          resReName: 'resource_id',
          urlReName: 'url'
        } as SFUploadWidgetSchema
      },
      mulit: {
        type: 'string',
        title: '\u591A\u4E2A\u6587\u4EF6',
        ui: {
          widget: 'upload',
          action: '/upload',
          resReName: 'resource_id',
          urlReName: 'url',
          multiple: true
        } as SFUploadWidgetSchema
      },
      // \u62D6\u52A8\u6A21\u5F0F
      drag: {
        type: 'string',
        title: 'Drag',
        ui: {
          widget: 'upload',
          action: '/upload',
          resReName: 'resource_id',
          urlReName: 'url',
          type: 'drag'
        } as SFUploadWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/form/widgets/upload/demo/simple.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-upload"]],hostAttrs:[1,"d-block"],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-upload-simple"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id))},dependencies:[S,kt,F,w,C],encapsulation:2})};var zt=class o{msg=u(y);schema={properties:{json:{type:"string",title:"JSON",default:'{"string": "abc","number": 1 }',ui:{widget:"monaco-editor",options:{language:"json"}}}}};submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-monaco-editor-simple"]],decls:1,vars:1,consts:[[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)},dependencies:[g,h],encapsulation:2})};var xt=class o{item={name:"monaco-editor",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"monaco-editor",subtitle:"Monaco Editor",description:`Markdown EditorInstallation dependencies  yarn add @ng-util/monaco-editor
Register provideNuMonacoEditorConfig() in app.config.ts

Register provideNuM...`,group:"Third Widgets",order:0,path:"packages/form/widgets-third/monaco-editor/index.en-US.md",url:"/form/monaco-editor/en"},text:`<p>Markdown Editor</p>
<h2 id="how_to_use"><a class="lake-link"><i data-anchor="how_to_use"></i></a>How to Use</h2><p><strong>Installation dependencies</strong></p>
<p><code>yarn add &#64;ng-util/monaco-editor</code></p>
<ul>
<li><ol>
<li>Register <code>provideNuMonacoEditorConfig()</code> in <code>app.config.ts</code></li>
</ol>
</li>
<li><ol start="2">
<li>Register <code>withMonacoEditorWidget</code> in <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9" target="_blank" rel="noopener">json-schema</a>.</li>
</ol>
</li>
</ul>
<blockquote>
<p>For more Monaco Editor configuration, please refer to <a href="https://github.com/ng-util/ng-util/blob/master/packages/monaco-editor/README.md#usage" target="_blank" rel="noopener">&#64;ng-util/monaco-editor</a>.</p>
</blockquote>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table>
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
<td>Configuration options, <a href="https://microsoft.github.io/monaco-editor/docs.html" target="_blank" rel="noopener">official website</a></td>
<td><code>monaco.editor.IStandaloneEditorConstructionOptions</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[delay]</code></td>
<td>Time of lazy loading</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[change]</code></td>
<td>Callback function when content in editor is changed</td>
<td><code>(value: string) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[height]</code></td>
<td>Height of monaco editor</td>
<td><code>string</code></td>
<td><code>200px</code></td>
</tr>
<tr>
<td><code>[model]</code></td>
<td>Model of monaco editor</td>
<td><code>NuMonacoEditorModel</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(event)</code></td>
<td>Event callback</td>
<td><code>EventEmitter&lt;NuMonacoEditorEvent&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:"how_to_use",title:"How to Use"},{id:"api",title:"API",children:[{id:"ui",title:"ui"}]}],raw:"---\ntitle: monaco-editor\nsubtitle: Monaco Editor\ntype: Third Widgets\n---\n\nMarkdown Editor\n\n## How to Use\n\n**Installation dependencies**  \n\n`yarn add @ng-util/monaco-editor`\n\n- 1. Register `provideNuMonacoEditorConfig()` in `app.config.ts`\n- 2. Register `withMonacoEditorWidget` in [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9).\n\n> For more Monaco Editor configuration, please refer to [@ng-util/monaco-editor](https://github.com/ng-util/ng-util/blob/master/packages/monaco-editor/README.md#usage).\n\n## API\n\n### ui\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `[options]` | Configuration options, [official website](https://microsoft.github.io/monaco-editor/docs.html) | `monaco.editor.IStandaloneEditorConstructionOptions` | - |\n| `[delay]` | Time of lazy loading | `number` | - |\n| `[change]` | Callback function when content in editor is changed | `(value: string) => void` | - |\n| `[height]` | Height of monaco editor | `string` | `200px` |\n| `[model]` | Model of monaco editor | `NuMonacoEditorModel` | - |\n| `(event)` | Event callback | `EventEmitter<NuMonacoEditorEvent>` | - |"},"zh-CN":{meta:{title:"monaco-editor",subtitle:"Monaco Editor",description:"Markdown\u7F16\u8F91\u5668\u3002\u5B89\u88C5\u4F9D\u8D56  yarn add @ng-util/monaco-editor1\u3001\u5728 app.config.ts \u4E0B\u6CE8\u518C provideNuMonacoEditorConfig()2\u3001\u5728 json-schema \u6CE8\u518C withMonacoEditorWidget\u3002\u5173\u4E8E\u66F4\u591A Mon...",group:"Third Widgets",order:0,path:"packages/form/widgets-third/monaco-editor/index.zh-CN.md",url:"/form/monaco-editor/zh"},text:`<p>Markdown\u7F16\u8F91\u5668\u3002</p>
<h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p><strong>\u5B89\u88C5\u4F9D\u8D56</strong></p>
<p><code>yarn add &#64;ng-util/monaco-editor</code></p>
<ul>
<li>1\u3001\u5728 <code>app.config.ts</code> \u4E0B\u6CE8\u518C <code>provideNuMonacoEditorConfig()</code></li>
<li>2\u3001\u5728 <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9" target="_blank" rel="noopener">json-schema</a> \u6CE8\u518C <code>withMonacoEditorWidget</code>\u3002</li>
</ul>
<blockquote>
<p>\u5173\u4E8E\u66F4\u591A Monaco Editor \u914D\u7F6E\u8BF7\u53C2\u8003 <a href="https://github.com/ng-util/ng-util/blob/master/packages/monaco-editor/README.md#usage" target="_blank" rel="noopener">&#64;ng-util/monaco-editor</a>\u3002</p>
</blockquote>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="ui_\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui_\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table>
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
<td>\u914D\u7F6E\u9879\u8BF4\u660E\uFF0C<a href="https://microsoft.github.io/monaco-editor/docs.html" target="_blank" rel="noopener">\u89C1\u5B98\u7F51</a></td>
<td><code>monaco.editor.IStandaloneEditorConstructionOptions</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[delay]</code></td>
<td>\u5EF6\u8FDF\u52A0\u8F7D\u65F6\u95F4</td>
<td><code>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[change]</code></td>
<td>\u7F16\u8F91\u5668\u5185\u5BB9\u53D1\u751F\u6539\u53D8\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td>
<td><code>(value: string) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td><code>[height]</code></td>
<td>Height of monaco editor</td>
<td><code>string</code></td>
<td><code>200px</code></td>
</tr>
<tr>
<td><code>[model]</code></td>
<td>Model of monaco editor</td>
<td><code>NuMonacoEditorModel</code></td>
<td>-</td>
</tr>
<tr>
<td><code>(event)</code></td>
<td>Event callback</td>
<td><code>EventEmitter&lt;NuMonacoEditorEvent&gt;</code></td>
<td>-</td>
</tr>
</tbody></table>
`,toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528"},{id:"api",title:"API",children:[{id:"ui_\u5C5E\u6027",title:"ui \u5C5E\u6027"}]}],raw:"---\ntitle: monaco-editor\nsubtitle: Monaco Editor\ntype: Third Widgets\n---\n\nMarkdown\u7F16\u8F91\u5668\u3002\n\n## \u5982\u4F55\u4F7F\u7528\n\n**\u5B89\u88C5\u4F9D\u8D56**  \n\n`yarn add @ng-util/monaco-editor`\n\n- 1\u3001\u5728 `app.config.ts` \u4E0B\u6CE8\u518C `provideNuMonacoEditorConfig()`\n- 2\u3001\u5728 [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9) \u6CE8\u518C `withMonacoEditorWidget`\u3002\n\n> \u5173\u4E8E\u66F4\u591A Monaco Editor \u914D\u7F6E\u8BF7\u53C2\u8003 [@ng-util/monaco-editor](https://github.com/ng-util/ng-util/blob/master/packages/monaco-editor/README.md#usage)\u3002\n\n## API\n\n### ui \u5C5E\u6027\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `[options]` | \u914D\u7F6E\u9879\u8BF4\u660E\uFF0C[\u89C1\u5B98\u7F51](https://microsoft.github.io/monaco-editor/docs.html) | `monaco.editor.IStandaloneEditorConstructionOptions` | - |\n| `[delay]` | \u5EF6\u8FDF\u52A0\u8F7D\u65F6\u95F4 | `number` | - |\n| `[change]` | \u7F16\u8F91\u5668\u5185\u5BB9\u53D1\u751F\u6539\u53D8\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6 | `(value: string) => void` | - |\n| `[height]` | Height of monaco editor | `string` | `200px` |\n| `[model]` | Model of monaco editor | `NuMonacoEditorModel` | - |\n| `(event)` | Event callback | `EventEmitter<NuMonacoEditorEvent>` | - |"}}};codes=[{id:"form-monaco-editor-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import type { MonacoEditorWidgetSchema } from '@delon/form/widgets-third/monaco-editor';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-monaco-editor-simple',
  template: \`<sf [schema]="schema" (formSubmit)="submit($event)" />\`,
  imports: [DelonFormModule]
})
export class FormMonacoEditorSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      json: {
        type: 'string',
        title: 'JSON',
        default: \`{"string": "abc","number": 1 }\`,
        ui: {
          widget: 'monaco-editor',
          options: { language: 'json' }
        } as MonacoEditorWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/form/widgets-third/monaco-editor/demo/simple.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-monaco-editor"]],hostAttrs:[1,"d-block"],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-monaco-editor-simple"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id))},dependencies:[S,zt,F,w,C],encapsulation:2})};var Nt=class o{msg=u(y);schema={properties:{remark:{type:"string",title:"\u63CF\u8FF0",ui:{widget:"tinymce"}}}};submit(n){this.msg.success(JSON.stringify(n))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-tinymce-simple"]],decls:1,vars:1,consts:[[3,"formSubmit","schema"]],template:function(e,t){e&1&&(a(0,"sf",0),l("formSubmit",function(p){return t.submit(p)}),i()),e&2&&d("schema",t.schema)},dependencies:[g,h],encapsulation:2})};var Tt=class o{item={name:"tinymce",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"tinymce",subtitle:"Tinymce Rich Text",description:"Tinymce rich text.Installation dependencies  Since the Tinymce editor relies on a third-party plug-in ngx-tinymce, the dependency should be installed ...",group:"Third Widgets",order:0,path:"packages/form/widgets-third/tinymce/index.en-US.md",url:"/form/tinymce/en"},text:`<p>Tinymce rich text.</p>
<h2 id="how_to_use"><a class="lake-link"><i data-anchor="how_to_use"></i></a>How to Use</h2><p><strong>Installation dependencies</strong></p>
<p>Since the Tinymce editor relies on a third-party plug-in <a href="https://github.com/cipchk/ngx-tinymce" target="_blank" rel="noopener">ngx-tinymce</a>, the dependency should be installed first when using it</p>
<p><code>npm i -S ngx-tinymce</code></p>
<ul>
<li><ol>
<li>Register <code>provideNuMonacoEditorConfig()</code> in <code>app.config.ts</code></li>
</ol>
</li>
<li><ol start="2">
<li>Register <code>withTinymceWidget</code> in <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9" target="_blank" rel="noopener">json-schema</a>.</li>
</ol>
</li>
</ul>
<blockquote>
<p>For more tinymce configuration, please refer to <a href="https://github.com/cipchk/ngx-tinymce" target="_blank" rel="noopener">ngx-tinymce</a>.</p>
</blockquote>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td>config</td>
<td><code>any</code></td>
<td></td>
<td>see <a href="https://www.tinymce.com/docs/configure/integration-and-setup/" target="_blank" rel="noopener">configure</a></td>
</tr>
<tr>
<td>loading</td>
<td><code>string,TemplateRef</code></td>
<td>-</td>
<td>Loading status of tinymce</td>
</tr>
<tr>
<td>disabled</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Set tinymce mode is <code>readonly</code> if <code>true</code></td>
</tr>
<tr>
<td>inline</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Inline editor</td>
</tr>
<tr>
<td>delay</td>
<td><code>number</code></td>
<td>0</td>
<td>Delayed rendering, unit is &#39;millisecond&#39;</td>
</tr>
<tr>
<td>placeholder</td>
<td><code>string</code></td>
<td>-</td>
<td>Placeholder for tinymce, <strong>NOTE:</strong> dependent on <a href="https://github.com/mohan/tinymce-placeholder" target="_blank" rel="noopener">tinymce-placeholder</a></td>
</tr>
<tr>
<td>ready</td>
<td><code>EventEmitter&lt;any&gt;</code></td>
<td>-</td>
<td>Tinymce ready callback</td>
</tr>
</tbody></table>
`,toc:[{id:"how_to_use",title:"How to Use"},{id:"api",title:"API",children:[{id:"ui",title:"ui"}]}],raw:`---
title: tinymce
subtitle: Tinymce Rich Text
type: Third Widgets
---

Tinymce rich text.

## How to Use

**Installation dependencies**  

Since the Tinymce editor relies on a third-party plug-in [ngx-tinymce](https://github.com/cipchk/ngx-tinymce), the dependency should be installed first when using it

\`npm i -S ngx-tinymce\`

- 1. Register \`provideNuMonacoEditorConfig()\` in \`app.config.ts\`
- 2. Register \`withTinymceWidget\` in [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9).

> For more tinymce configuration, please refer to [ngx-tinymce](https://github.com/cipchk/ngx-tinymce).

## API

### ui 

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| config | \`any\` |  | see [configure](https://www.tinymce.com/docs/configure/integration-and-setup/) |
| loading | \`string,TemplateRef\` | - | Loading status of tinymce |
| disabled | \`boolean\` | \`false\` | Set tinymce mode is \`readonly\` if \`true\` |
| inline | \`boolean\` | \`false\` | Inline editor |
| delay | \`number\` | 0 | Delayed rendering, unit is 'millisecond' |
| placeholder | \`string\` | - | Placeholder for tinymce, **NOTE:** dependent on [tinymce-placeholder](https://github.com/mohan/tinymce-placeholder) |
| ready | \`EventEmitter<any>\` | - | Tinymce ready callback |`},"zh-CN":{meta:{title:"tinymce",subtitle:"Tinymce\u5BCC\u6587\u672C",description:"Tinymce\u5BCC\u6587\u672C\u3002\u5B89\u88C5\u4F9D\u8D56  npm i -S ngx-tinymce1\u3001\u5728 app.config.ts \u4E0B\u6CE8\u518C provideTinymce()2\u3001\u5728 json-schema \u6CE8\u518C withTinymceWidget\u3002\u5173\u4E8E\u66F4\u591A tinymce \u914D\u7F6E\u8BF7\u53C2\u8003 ngx-tinymce\u3002",group:"Third Widgets",order:0,path:"packages/form/widgets-third/tinymce/index.zh-CN.md",url:"/form/tinymce/zh"},text:`<p>Tinymce\u5BCC\u6587\u672C\u3002</p>
<h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p><strong>\u5B89\u88C5\u4F9D\u8D56</strong></p>
<p><code>npm i -S ngx-tinymce</code></p>
<ul>
<li>1\u3001\u5728 <code>app.config.ts</code> \u4E0B\u6CE8\u518C <code>provideTinymce()</code></li>
<li>2\u3001\u5728 <a href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9" target="_blank" rel="noopener">json-schema</a> \u6CE8\u518C <code>withTinymceWidget</code>\u3002</li>
</ul>
<blockquote>
<p>\u5173\u4E8E\u66F4\u591A tinymce \u914D\u7F6E\u8BF7\u53C2\u8003 <a href="https://github.com/cipchk/ngx-tinymce" target="_blank" rel="noopener">ngx-tinymce</a>\u3002</p>
</blockquote>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="ui_\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui_\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td>config</td>
<td><code>any</code></td>
<td></td>
<td>see <a href="https://www.tinymce.com/docs/configure/integration-and-setup/" target="_blank" rel="noopener">configure</a></td>
</tr>
<tr>
<td>loading</td>
<td><code>string,TemplateRef</code></td>
<td>-</td>
<td>Loading status of tinymce</td>
</tr>
<tr>
<td>disabled</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Set tinymce mode is <code>readonly</code> if <code>true</code></td>
</tr>
<tr>
<td>inline</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Inline editor</td>
</tr>
<tr>
<td>delay</td>
<td><code>number</code></td>
<td>0</td>
<td>Delayed rendering, unit is &#39;millisecond&#39;</td>
</tr>
<tr>
<td>placeholder</td>
<td><code>string</code></td>
<td>-</td>
<td>Placeholder for tinymce, <strong>NOTE:</strong> dependent on <a href="https://github.com/mohan/tinymce-placeholder" target="_blank" rel="noopener">tinymce-placeholder</a></td>
</tr>
<tr>
<td>ready</td>
<td><code>EventEmitter&lt;any&gt;</code></td>
<td>-</td>
<td>Tinymce ready callback</td>
</tr>
</tbody></table>
`,toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528"},{id:"api",title:"API",children:[{id:"ui_\u5C5E\u6027",title:"ui \u5C5E\u6027"}]}],raw:`---
title: tinymce
subtitle: Tinymce\u5BCC\u6587\u672C
type: Third Widgets
---

Tinymce\u5BCC\u6587\u672C\u3002

## \u5982\u4F55\u4F7F\u7528

**\u5B89\u88C5\u4F9D\u8D56**  

\`npm i -S ngx-tinymce\`

- 1\u3001\u5728 \`app.config.ts\` \u4E0B\u6CE8\u518C \`provideTinymce()\`
- 2\u3001\u5728 [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9) \u6CE8\u518C \`withTinymceWidget\`\u3002

> \u5173\u4E8E\u66F4\u591A tinymce \u914D\u7F6E\u8BF7\u53C2\u8003 [ngx-tinymce](https://github.com/cipchk/ngx-tinymce)\u3002

## API

### ui \u5C5E\u6027

| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |
|----|----|----|-----|
| config | \`any\` |  | see [configure](https://www.tinymce.com/docs/configure/integration-and-setup/) |
| loading | \`string,TemplateRef\` | - | Loading status of tinymce |
| disabled | \`boolean\` | \`false\` | Set tinymce mode is \`readonly\` if \`true\` |
| inline | \`boolean\` | \`false\` | Inline editor |
| delay | \`number\` | 0 | Delayed rendering, unit is 'millisecond' |
| placeholder | \`string\` | - | Placeholder for tinymce, **NOTE:** dependent on [tinymce-placeholder](https://github.com/mohan/tinymce-placeholder) |
| ready | \`EventEmitter<any>\` | - | Tinymce ready callback |`}}};codes=[{id:"form-tinymce-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import type { TinymceWidgetSchema } from '@delon/form/widgets-third/tinymce';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-tinymce-simple',
  template: \`<sf [schema]="schema" (formSubmit)="submit($event)" />\`,
  imports: [DelonFormModule]
})
export class FormTinymceSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      remark: {
        type: 'string',
        title: '\u63CF\u8FF0',
        ui: {
          widget: 'tinymce'
        } as TinymceWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/form/widgets-third/tinymce/demo/simple.md"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=r({type:o,selectors:[["form-tinymce"]],hostAttrs:[1,"d-block"],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){e&1&&(a(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),m(4,"form-tinymce-simple"),i()()()()),e&2&&(d("codes",t.codes)("item",t.item),c(),d("nzGutter",16),c(2),d("item",t.codes[0]),v("id",t.codes[0].id))},dependencies:[S,Nt,F,w,C],encapsulation:2})};var mu=[{path:"",component:dn,children:[{path:"validator",redirectTo:"validator/zh",pathMatch:"full"},{path:"validator/:lang",component:te},{path:"customize",redirectTo:"customize/zh",pathMatch:"full"},{path:"customize/:lang",component:ne},{path:"error",redirectTo:"error/zh",pathMatch:"full"},{path:"error/:lang",component:oe},{path:"getting-started",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"getting-started/:lang",component:de},{path:"layout",redirectTo:"layout/zh",pathMatch:"full"},{path:"layout/:lang",component:ae},{path:"qa",redirectTo:"qa/zh",pathMatch:"full"},{path:"qa/:lang",component:ie},{path:"schema",redirectTo:"schema/zh",pathMatch:"full"},{path:"schema/:lang",component:re},{path:"acl",redirectTo:"acl/zh",pathMatch:"full"},{path:"acl/:lang",component:se},{path:"conditional",redirectTo:"conditional/zh",pathMatch:"full"},{path:"conditional/:lang",component:pe},{path:"i18n",redirectTo:"i18n/zh",pathMatch:"full"},{path:"i18n/:lang",component:he},{path:"method",redirectTo:"method/zh",pathMatch:"full"},{path:"method/:lang",component:fe},{path:"modal",redirectTo:"modal/zh",pathMatch:"full"},{path:"modal/:lang",component:ye},{path:"search",redirectTo:"search/zh",pathMatch:"full"},{path:"search/:lang",component:ve},{path:"array",redirectTo:"array/zh",pathMatch:"full"},{path:"array/:lang",component:Ce},{path:"boolean",redirectTo:"boolean/zh",pathMatch:"full"},{path:"boolean/:lang",component:De},{path:"checkbox",redirectTo:"checkbox/zh",pathMatch:"full"},{path:"checkbox/:lang",component:xe},{path:"custom",redirectTo:"custom/zh",pathMatch:"full"},{path:"custom/:lang",component:Te},{path:"date",redirectTo:"date/zh",pathMatch:"full"},{path:"date/:lang",component:Ie},{path:"number",redirectTo:"number/zh",pathMatch:"full"},{path:"number/:lang",component:Pe},{path:"object",redirectTo:"object/zh",pathMatch:"full"},{path:"object/:lang",component:Oe},{path:"radio",redirectTo:"radio/zh",pathMatch:"full"},{path:"radio/:lang",component:Re},{path:"select",redirectTo:"select/zh",pathMatch:"full"},{path:"select/:lang",component:Be},{path:"string",redirectTo:"string/zh",pathMatch:"full"},{path:"string/:lang",component:Ge},{path:"text",redirectTo:"text/zh",pathMatch:"full"},{path:"text/:lang",component:Ye},{path:"textarea",redirectTo:"textarea/zh",pathMatch:"full"},{path:"textarea/:lang",component:Ke},{path:"autocomplete",redirectTo:"autocomplete/zh",pathMatch:"full"},{path:"autocomplete/:lang",component:Xe},{path:"cascader",redirectTo:"cascader/zh",pathMatch:"full"},{path:"cascader/:lang",component:tt},{path:"color",redirectTo:"color/zh",pathMatch:"full"},{path:"color/:lang",component:ot},{path:"mention",redirectTo:"mention/zh",pathMatch:"full"},{path:"mention/:lang",component:at},{path:"qr-code",redirectTo:"qr-code/zh",pathMatch:"full"},{path:"qr-code/:lang",component:rt},{path:"rate",redirectTo:"rate/zh",pathMatch:"full"},{path:"rate/:lang",component:st},{path:"segmented",redirectTo:"segmented/zh",pathMatch:"full"},{path:"segmented/:lang",component:mt},{path:"slider",redirectTo:"slider/zh",pathMatch:"full"},{path:"slider/:lang",component:ut},{path:"tag",redirectTo:"tag/zh",pathMatch:"full"},{path:"tag/:lang",component:gt},{path:"time",redirectTo:"time/zh",pathMatch:"full"},{path:"time/:lang",component:bt},{path:"transfer",redirectTo:"transfer/zh",pathMatch:"full"},{path:"transfer/:lang",component:St},{path:"tree-select",redirectTo:"tree-select/zh",pathMatch:"full"},{path:"tree-select/:lang",component:Ct},{path:"upload",redirectTo:"upload/zh",pathMatch:"full"},{path:"upload/:lang",component:Dt},{path:"monaco-editor",redirectTo:"monaco-editor/zh",pathMatch:"full"},{path:"monaco-editor/:lang",component:xt},{path:"tinymce",redirectTo:"tinymce/zh",pathMatch:"full"},{path:"tinymce/:lang",component:Tt}]}];export{mu as routes};
