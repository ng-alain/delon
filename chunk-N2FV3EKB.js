import{a as tt}from"./chunk-25EUYNDY.js";import{_ as Ft,a as Ct}from"./chunk-3ZN2VXY5.js";import"./chunk-4C5KEUAI.js";import"./chunk-BSZYTUAL.js";import"./chunk-53WZVWSD.js";import{E as kt}from"./chunk-WQIGBBDY.js";import{B as vt,x as f}from"./chunk-U4OOB3MN.js";import{b as St}from"./chunk-MNMBEUPS.js";import"./chunk-LFL7JQ5T.js";import"./chunk-HQNBXND5.js";import"./chunk-PLUYYUV3.js";import"./chunk-CYYISHMD.js";import"./chunk-LUGCOC4B.js";import{a as F}from"./chunk-XFEF7HZC.js";import"./chunk-WK4VD42U.js";import{b as k}from"./chunk-3XXVNPSY.js";import{b as wt}from"./chunk-FBSRXXMD.js";import"./chunk-GPS3STYB.js";import"./chunk-MJWBK4BK.js";import"./chunk-53JX7EQO.js";import{s as C,t as w}from"./chunk-LJKXQ2Z5.js";import{I as K,R as b,d as ft,g as bt,m as yt}from"./chunk-OAR6ASNJ.js";import{$a as V,Ab as mt,J as nt,Ja as s,Ka as g,O as A,Qb as M,Ra as v,Rb as E,Sa as a,Tb as j,Ua as S,Ub as J,X as it,Yc as pt,Z as at,ab as H,af as G,ag as Q,cg as _,da as rt,ed as ht,eg as W,fb as r,gb as c,gd as ut,gg as O,ha as l,hb as p,ia as ct,k as dt,lb as q,na as R,oa as B,pb as h,rb as U,rg as gt,s as P,w as ot,xb as st,xg as Y,yb as i,zb as lt}from"./chunk-JIFQ6OJY.js";var xt=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/docs/customize.en-US.md","zh-CN":"packages/form/docs/customize.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><h2 id="Foreword"><a class="lake-link"><i data-anchor="Foreword"></i></a>Foreword</h2><p><code>@delon/form</code> try our best to meet the needs of different environments, in addition to the built-in basic widgets (Some require manual registration), you can further expand the requirements in two ways:</p><h2 id="Customwidgetinsf"><a class="lake-link"><i data-anchor="Customwidgetinsf"></i></a>Custom widget in sf</h2><p>Please refer to <a href="/form/custom" data-url="/form/custom">Custom Widget</a>.</p><h2 id="Makingwidgets"><a class="lake-link"><i data-anchor="Makingwidgets"></i></a>Making widgets</h2><p>Making a set of widgets for project can lead to faster development work.</p><h3 id="Howtomakingwidget"><a class="lake-link"><i data-anchor="Howtomakingwidget"></i></a>How to making widget</h3><p><strong>Create widgets</strong></p><p>A widget is a component. You only need to inherit <code>ControlWidget</code> to create a widget. For example:</p><pre class="hljs language-ts"><code>import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ControlWidget, DelonFormModule, SFWidgetProvideConfig } from '@delon/form';

export function withTestWidget(): SFWidgetProvideConfig {
  return { KEY: 'test', type: TestWidget };
}

@Component({
  selector: 'sf-tinymce',
  template: \`
  &lt;sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title"&gt;
    &lt;!-- Start area --&gt;
    &lt;tinymce
      [ngModel]="value"
      (ngModelChange)="change($event)"
      [config]="config"
      [loading]="loading"&gt;
    &lt;/tinymce&gt;
    &lt;!-- End area --&gt;
  &lt;/sf-item-wrap&gt;\`,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DelonFormModule]
})
class TestWidget extends ControlWidget implements OnInit {
  /* KEY value for registering widgets */
  static readonly KEY = 'test';

  // It is recommended to use \`ngOnInit\` to obtain the parameters required by the component.
  config: any;
  loadingTip: string;

  ngOnInit(): void {
    this.loadingTip = this.ui.loadingTip || 'Loading\u2026\u2026';
    this.config = this.ui.config || {};
  }

  // reset can better solve the problem of new data required during the form reset process
  reset(value: string) {

  }

  change(value: string) {
    if (this.ui.change) this.ui.change(value);
    this.setValue(value);
  }
}</code></pre><p><strong>sf-item-wrap</strong></p><p>Wrap your custom content in the template with the <code>sf-item-wrap</code> component, which encapsulates the form base elements internally.</p><p><strong>Change detection</strong></p><p>The widget is manually trigger changed detection during the rendering process. In most cases, the <code>ControlWidget</code> is well manage of changing detection. but the asynchronous operation may be encountered, you can call the <code>detectChanges()</code> method to trigger a change detection of the widget.</p><h3 id="Register"><a class="lake-link"><i data-anchor="Register"></i></a>Register</h3><p>Recommended to define a widget called <code>withXWidth</code> and return <code>SFWidgetProvideConfig</code> type, for example:</p><pre class="hljs language-ts"><code>export function withTestWidget(): SFWidgetProvideConfig {
  return { KEY: 'test', type: TestWidget };
}</code></pre><p>Finally, register via <code>provideSFConfig</code>:</p><pre class="hljs language-ts"><code>provideSFConfig({ widgets: [ withTestWidget() ] })</code></pre><p>For more friendly maintenance, recommended to define a project-specific collection in the <code>shared</code> directory. If you are interested, please refer to <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/">NG-ALAIN implementation</a> or refer to <a target="_blank" href="https://github.com/ng-alain/delon/tree/master/packages/form/widgets/autocomplete" data-url="https://github.com/ng-alain/delon/tree/master/packages/form/widgets/autocomplete">@delon/form/widgets/autocomplete</a>.</p><h3 id="Usage"><a class="lake-link"><i data-anchor="Usage"></i></a>Usage</h3><p>Just like other widgets, just specify the <code>widget</code> value, for example:</p><pre class="hljs language-json"><code>"test": {
  "type": "string",
  "ui": {
    "widget": "test",
    "data": "widget parameters"
  }
}</code></pre></section>`,meta:{order:4,title:"Customize Widgets",type:"Documents"},toc:[{id:"Foreword",title:"Foreword",h:2},{id:"Customwidgetinsf",title:"Custom widget in sf",h:2},{id:"Makingwidgets",title:"Making widgets",h:2,children:[{id:"Howtomakingwidget",title:"How to making widget",h:3},{id:"Register",title:"Register",h:3},{id:"Usage",title:"Usage",h:3}]}]},"zh-CN":{content:`<section class="markdown"><h2 id="\u5199\u5728\u524D\u9762"><a class="lake-link"><i data-anchor="\u5199\u5728\u524D\u9762"></i></a>\u5199\u5728\u524D\u9762</h2><p><code>@delon/form</code> \u5C3D\u53EF\u80FD\u6EE1\u8DB3\u4E0D\u540C\u9700\u6C42\uFF0C\u9664\u73B0\u6709\u5185\u7F6E\u7684\u5341\u51E0\u79CD\u57FA\u7840\u5C0F\u90E8\u4EF6(\u90E8\u5206\u9700\u8981\u624B\u52A8\u6CE8\u518C)\u5916\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u4E24\u79CD\u65B9\u5F0F\u8FDB\u4E00\u6B65\u6269\u5C55\u9700\u6C42\uFF1A</p><h2 id="\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6"><a class="lake-link"><i data-anchor="\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6"></i></a>\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6</h2><p>\u7EC6\u8282\u8BF7\u53C2\u8003 <a href="/form/custom" data-url="/form/custom">\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6</a>\u3002</p><h2 id="\u5236\u4F5C\u5C0F\u90E8\u4EF6"><a class="lake-link"><i data-anchor="\u5236\u4F5C\u5C0F\u90E8\u4EF6"></i></a>\u5236\u4F5C\u5C0F\u90E8\u4EF6</h2><p>\u5236\u4F5C\u4E00\u5957\u9879\u76EE\u9700\u6C42\u7684\u5C0F\u90E8\u4EF6\uFF0C\u53EF\u4EE5\u66F4\u5FEB\u901F\u7684\u5F00\u53D1\u5DE5\u4F5C\u3002</p><h3 id="\u7F16\u5199\u5C0F\u90E8\u4EF6"><a class="lake-link"><i data-anchor="\u7F16\u5199\u5C0F\u90E8\u4EF6"></i></a>\u7F16\u5199\u5C0F\u90E8\u4EF6</h3><p><strong>\u81EA\u5DF1\u521B\u5EFA\u5C0F\u90E8\u4EF6</strong></p><p>\u5C0F\u90E8\u4EF6\u5C31\u662F\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u4F60\u53EA\u9700\u8981\u7EE7\u627F <code>ControlWidget</code> \u5C31\u76F8\u5F53\u4E8E\u6784\u5EFA\u4E00\u4E2A\u5C0F\u90E8\u4EF6\uFF0C\u4F8B\u5982\uFF1A</p><pre class="hljs language-ts"><code>import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ControlWidget, DelonFormModule, SFWidgetProvideConfig } from '@delon/form';

export function withTestWidget(): SFWidgetProvideConfig {
  return { KEY: 'test', type: TestWidget };
}

@Component({
  selector: 'sf-tinymce',
  template: \`
  &lt;sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title"&gt;
    &lt;!-- \u5F00\u59CB\u81EA\u5B9A\u4E49\u63A7\u4EF6\u533A\u57DF --&gt;
    &lt;tinymce
      [ngModel]="value"
      (ngModelChange)="change($event)"
      [config]="config"
      [loading]="loading"&gt;
    &lt;/tinymce&gt;
    &lt;!-- \u7ED3\u675F\u81EA\u5B9A\u4E49\u63A7\u4EF6\u533A\u57DF --&gt;
  &lt;/sf-item-wrap&gt;\`,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DelonFormModule]
})
class TestWidget extends ControlWidget implements OnInit {
  /* \u7528\u4E8E\u6CE8\u518C\u5C0F\u90E8\u4EF6 KEY \u503C */
  static readonly KEY = 'test';

  // \u7EC4\u4EF6\u6240\u9700\u8981\u7684\u53C2\u6570\uFF0C\u5EFA\u8BAE\u4F7F\u7528 \`ngOnInit\` \u83B7\u53D6
  config: any;
  loadingTip: string;

  ngOnInit(): void {
    this.loadingTip = this.ui.loadingTip || '\u52A0\u8F7D\u4E2D\u2026\u2026';
    this.config = this.ui.config || {};
  }

  // reset \u53EF\u4EE5\u66F4\u597D\u7684\u89E3\u51B3\u8868\u5355\u91CD\u7F6E\u8FC7\u7A0B\u4E2D\u6240\u9700\u8981\u7684\u65B0\u6570\u636E\u95EE\u9898
  reset(value: string) {

  }

  change(value: string) {
    if (this.ui.change) this.ui.change(value);
    this.setValue(value);
  }
}</code></pre><p><strong>sf-item-wrap</strong></p><p>\u5728\u6A21\u677F\u4E2D\u552F\u4E00\u662F\u5229\u7528 <code>sf-item-wrap</code> \u5305\u88F9\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u5B83\u5185\u90E8\u5C01\u88C5\u8868\u5355\u57FA\u7840\u5143\u7D20\u3002</p><p><strong>\u53D8\u66F4\u68C0\u6D4B</strong></p><p>\u5C0F\u90E8\u4EF6\u5728\u6E32\u67D3\u8FC7\u7A0B\u662F\u624B\u52A8\u53D8\u66F4\u68C0\u6D4B\uFF0C\u5927\u90E8\u5206\u60C5\u51B5\u4E0B <code>ControlWidget</code> \u5DF2\u7ECF\u5F88\u597D\u7684\u7BA1\u7406\u4EC0\u4E48\u65F6\u673A\u5E94\u8BE5\u6267\u884C\u53D8\u66F4\u68C0\u6D4B\uFF0C\u5728\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u4F1A\u9047\u5230\u5F02\u6B65\u64CD\u4F5C\u5BFC\u81F4\u754C\u9762\u5E76\u672A\u6E32\u67D3\uFF0C\u6B64\u65F6\u53EF\u4EE5\u8C03\u7528 <code>detectChanges()</code> \u65B9\u6CD5\u6765\u89E6\u53D1\u4E00\u6B21\u5C0F\u90E8\u4EF6\u8282\u70B9\u7684\u53D8\u66F4\u68C0\u6D4B\u3002</p><h3 id="\u6CE8\u518C\u5C0F\u90E8\u4EF6"><a class="lake-link"><i data-anchor="\u6CE8\u518C\u5C0F\u90E8\u4EF6"></i></a>\u6CE8\u518C\u5C0F\u90E8\u4EF6</h3><p>\u5EFA\u8BAE\u5728\u5C0F\u90E8\u4EF6\u5185\u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A <code>withXWidth</code> \u5E76\u8FD4\u56DE <code>SFWidgetProvideConfig</code>\uFF0C\u4F8B\u5982\uFF1A</p><pre class="hljs language-ts"><code>export function withTestWidget(): SFWidgetProvideConfig {
  return { KEY: 'test', type: TestWidget };
}</code></pre><p>\u6700\u540E\uFF0C\u901A\u8FC7 <code>provideSFConfig</code> \u6765\u6CE8\u518C\uFF1A</p><pre class="hljs language-ts"><code>provideSFConfig({ widgets: [ withTestWidget() ] })</code></pre><p>\u5F53\u7136\u4E3A\u4E86\u66F4\u53CB\u597D\u7684\u7EF4\u62A4\uFF0C\u5EFA\u8BAE\u5728Shared\u76EE\u5F55\u4E0B\u5B9A\u4E49\u9879\u76EE\u4E13\u5C5E\u7684\u96C6\u5408\uFF0C\u6709\u5174\u8DA3\u53EF\u53C2\u8003 <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/">ng-alain\u5B9E\u73B0</a>\u6216\u53C2\u8003<a target="_blank" href="https://github.com/ng-alain/delon/tree/master/packages/form/widgets/autocomplete" data-url="https://github.com/ng-alain/delon/tree/master/packages/form/widgets/autocomplete">@delon/form/widgets/autocomplete</a>\u3002</p><h3 id="\u4F7F\u7528\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6"><a class="lake-link"><i data-anchor="\u4F7F\u7528\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6"></i></a>\u4F7F\u7528\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6</h3><p>\u540C\u5176\u4ED6\u5C0F\u90E8\u4EF6\u4E00\u6837\uFF0C\u53EA\u9700\u8981\u6307\u5B9A <code>widget</code> \u503C\uFF0C\u4F8B\u5982\uFF1A</p><pre class="hljs language-json"><code>"test": {
  "type": "string",
  "ui": {
    "widget": "test",
    "data": "widget parameters"
  }
}</code></pre></section>`,meta:{order:4,title:"\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6",type:"Documents"},toc:[{id:"\u5199\u5728\u524D\u9762",title:"\u5199\u5728\u524D\u9762",h:2},{id:"\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6",title:"\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6",h:2},{id:"\u5236\u4F5C\u5C0F\u90E8\u4EF6",title:"\u5236\u4F5C\u5C0F\u90E8\u4EF6",h:2,children:[{id:"\u7F16\u5199\u5C0F\u90E8\u4EF6",title:"\u7F16\u5199\u5C0F\u90E8\u4EF6",h:3},{id:"\u6CE8\u518C\u5C0F\u90E8\u4EF6",title:"\u6CE8\u518C\u5C0F\u90E8\u4EF6",h:3},{id:"\u4F7F\u7528\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6",title:"\u4F7F\u7528\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6",h:3}]}]}},demo:!1},this.codes=[]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-customize"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:1,vars:2,consts:[[3,"codes","item"]],template:function(t,d){t&1&&p(0,"app-docs",0),t&2&&a("codes",d.codes)("item",d.item)},dependencies:[k],encapsulation:2});let n=e;return n})();var zt=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/docs/error.en-US.md","zh-CN":"packages/form/docs/error.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><h2 id="Prologue"><a class="lake-link"><i data-anchor="Prologue"></i></a>Prologue</h2><p>A set of error messages may be created during JSON Schema validation, every error has a fixed <code>keyword</code>, you can configure <code>errors</code> in <a href="/docs/global-config" data-url="/docs/global-config">global config</a> to override default error messages, you can also handle internationalization error messages in global config. Following is an example when it is failed to pass required field validation:</p><pre class="hljs language-json"><code>[{
  "keyword": "required",
  "dataPath": ".client",
  "schemaPath": "#/required",
  "params": {"missingProperty":"client"},
  "message":"Required Field"
}]</code></pre><p><code>message</code> is used to render error information on page.</p><blockquote><p><strong>Note\uFF1A</strong>Validation is triggered when it is first time rendering, but there is no any visual presentation, you can set <code>&lt;sf firstVisual></sf></code> to show error effect when it is first time rendering.</p></blockquote><h2 id="CustomErrorInformation"><a class="lake-link"><i data-anchor="CustomErrorInformation"></i></a>Custom Error Information</h2><p>Support to <a href="/docs/global-config" data-url="/docs/global-config">globally configure</a> <code>errors</code> (commonly used for internationalization) or configure <code>ui.errors</code> (for a specific property) to handle error information.</p><p><strong>ui.errors</strong></p><pre class="hljs language-ts"><code>schema: SFSchema = {
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
};</code></pre><h3 id="keyword"><a class="lake-link"><i data-anchor="keyword"></i></a>keyword</h3><p>No matter which way to build error information, <code>keyword</code> must be used to distinguish error type. You can find the full list of <a target="_blank" href="https://github.com/ng-alain/delon/blob/master/packages/form/src/errors.ts#L4" data-url="https://github.com/ng-alain/delon/blob/master/packages/form/src/errors.ts#L4">ERRORSDEFAULT</a> here.</p><h2 id="CustomValidation"><a class="lake-link"><i data-anchor="CustomValidation"></i></a>Custom Validation</h2><p>JSON Schema cannot satisfy business requirements all the time, e.g. sometimes, need to distinguish different validation rules based on other properties:</p><h3 id="PropertyValidation"><a class="lake-link"><i data-anchor="PropertyValidation"></i></a>Property Validation</h3><pre class="hljs language-ts"><code>schema: SFSchema = {
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
};</code></pre><h3 id="AsynchronousValidation"><a class="lake-link"><i data-anchor="AsynchronousValidation"></i></a>Asynchronous Validation</h3><p>Following example show how to validate if a username exists asynchronously:</p><pre class="hljs language-ts"><code>schema: SFSchema = {
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
};</code></pre><p><strong>Note\uFF1A</strong> Because a new instance is generated in every time of validation, some control operations are not able to do, e.g. <code>debounceTime</code>.</p><h3 id="setErrors"><a class="lake-link"><i data-anchor="setErrors"></i></a>setErrors</h3><p>Use the <code>setErrors</code> method to adjust error messages.</p><pre class="hljs language-ts"><code>this.sf.getProperty('/name')?.setErrors({ keyword: 'required' });
this.sf.getProperty('/name')?.setErrors({ message: 'Please input your username!' });
// Clean current error messages
this.sf.getProperty('/name')?.setErrors();</code></pre><h2 id="Visual"><a class="lake-link"><i data-anchor="Visual"></i></a>Visual</h2><p>Can configure <a href="/docs/global-config" data-url="/docs/global-config">global config</a> or <code>ui.onlyVisual</code> to control if only show error visual but not error message.</p><h2 id="Debug"><a class="lake-link"><i data-anchor="Debug"></i></a>Debug</h2><p>JSON Schema has strong requirement on format, for example, date must follow the format described in <a target="_blank" href="https://tools.ietf.org/html/rfc3339#section-5.6" data-url="https://tools.ietf.org/html/rfc3339#section-5.6">RFC3339</a>:</p><pre class="hljs language-ts"><code>{
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
}</code></pre><p><code>format</code> is an invalid format of date, detailed validation error information will be shown in console when <code>debug: true</code> is set.</p><pre class="hljs language-null"><code>Error: unknown format "yyyy-MM-dd HH:mm:ss" is used in schema at path "#/properties/time"</code></pre></section>`,meta:{order:3,title:"Validation Error",type:"Documents"},toc:[{id:"Prologue",title:"Prologue",h:2},{id:"CustomErrorInformation",title:"Custom Error Information",h:2,children:[{id:"keyword",title:"keyword",h:3}]},{id:"CustomValidation",title:"Custom Validation",h:2,children:[{id:"PropertyValidation",title:"Property Validation",h:3},{id:"AsynchronousValidation",title:"Asynchronous Validation",h:3},{id:"setErrors",title:"setErrors",h:3}]},{id:"Visual",title:"Visual",h:2},{id:"Debug",title:"Debug",h:2}]},"zh-CN":{content:`<section class="markdown"><h2 id="\u5199\u5728\u524D\u9762"><a class="lake-link"><i data-anchor="\u5199\u5728\u524D\u9762"></i></a>\u5199\u5728\u524D\u9762</h2><p>JSON Schema \u6821\u9A8C\u8FC7\u7A0B\u4E2D\u4F1A\u751F\u4EA7\u4E00\u7EC4\u9519\u8BEF\u4FE1\u606F\uFF0C\u6BCF\u4E00\u4E2A\u9519\u8BEF\u90FD\u6709\u4E00\u4E2A\u56FA\u5B9A\u7684 <code>keyword</code> \u6765\u8868\u793A\uFF0C\u5141\u8BB8\u901A\u8FC7<a href="/docs/global-config" data-url="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\u6765\u8986\u76D6 <code>errors</code> \u9ED8\u8BA4\u7684\u9519\u8BEF\u4FE1\u606F\uFF0C\u5305\u62EC\u5904\u7406\u9519\u8BEF\u4FE1\u606F\u56FD\u9645\u5316\u95EE\u9898\u3002\u4F8B\u5982\u5F53\u67D0\u5C5E\u6027\u4E3A\u5FC5\u586B\u6027\u65F6\u4EA7\u751F\u7684\u9519\u8BEF\u4FE1\u606F\u4E3A:</p><pre class="hljs language-json"><code>[{
  "keyword": "required",
  "dataPath": ".client",
  "schemaPath": "#/required",
  "params": {"missingProperty":"client"},
  "message":"\u5FC5\u586B\u9879"
}]</code></pre><p>\u5176\u4E2D <code>message</code> \u7528\u4E8E\u9875\u9762\u6E32\u67D3\u7684\u9519\u8BEF\u6587\u672C\u3002</p><blockquote><p><strong>\u6CE8\uFF1A</strong>\u7B2C\u4E00\u6B21\u6E32\u67D3\u4F1A\u89E6\u53D1\u6821\u9A8C\uFF0C\u4F46\u4E0D\u4F1A\u6709\u4EFB\u4F55\u89C6\u89C9\u5C55\u793A\uFF0C\u82E5\u9700\u8981\u4E00\u5F00\u59CB\u5C31\u4F53\u73B0\u9519\u8BEF\u89C6\u89C9\u6548\u679C\u53EF\u4EE5\u6307\u5B9A <code>&lt;sf firstVisual></sf></code>\u3002</p></blockquote><h2 id="\u81EA\u5B9A\u4E49\u9519\u8BEF\u6587\u672C"><a class="lake-link"><i data-anchor="\u81EA\u5B9A\u4E49\u9519\u8BEF\u6587\u672C"></i></a>\u81EA\u5B9A\u4E49\u9519\u8BEF\u6587\u672C</h2><p>\u5206\u522B\u652F\u6301<a href="/docs/global-config" data-url="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a> <code>errors</code>\uFF08\u4E00\u822C\u7528\u4E8E\u56FD\u9645\u5316\uFF09 \u6216 <code>ui.errors</code>\uFF08\u9488\u5BF9\u67D0\u4E2A\u5C5E\u6027\uFF09 \u7ED3\u6784\u6765\u5904\u7406\u9519\u8BEF\u6587\u672C\u3002</p><p><strong>ui.errors</strong></p><pre class="hljs language-ts"><code>schema: SFSchema = {
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
};</code></pre><h3 id="keyword"><a class="lake-link"><i data-anchor="keyword"></i></a>keyword</h3><p>\u4E0D\u7BA1\u91C7\u7528\u54EA\u79CD\u65B9\u5F0F\u6765\u6784\u5EFA\u9519\u8BEF\u6587\u672C\uFF0C\u90FD\u5FC5\u987B\u901A\u8FC7 <code>keyword</code> \u6765\u533A\u5206\u9519\u8BEF\u7C7B\u578B\uFF08\u5B8C\u6574\u7C7B\u578B\u89C1 <a target="_blank" href="https://github.com/ng-alain/delon/blob/master/packages/form/src/errors.ts#L4" data-url="https://github.com/ng-alain/delon/blob/master/packages/form/src/errors.ts#L4">ERRORSDEFAULT</a>\uFF09\u3002</p><h2 id="\u81EA\u5B9A\u4E49\u6821\u9A8C"><a class="lake-link"><i data-anchor="\u81EA\u5B9A\u4E49\u6821\u9A8C"></i></a>\u81EA\u5B9A\u4E49\u6821\u9A8C</h2><p>JSON Schema \u6821\u9A8C\u5E76\u4E0D\u4E00\u5B9A\u80FD\u591F\u6EE1\u8DB3\u4E00\u4E9B\u4E1A\u52A1\u7684\u9700\u6C42\uFF0C\u4F8B\u5982\u9700\u8981\u6839\u636E\u5176\u4ED6\u5C5E\u6027\u503C\u533A\u5206\u4E0D\u540C\u6821\u9A8C\u89C4\u5219\uFF1A</p><h3 id="\u5C5E\u6027\u6821\u9A8C"><a class="lake-link"><i data-anchor="\u5C5E\u6027\u6821\u9A8C"></i></a>\u5C5E\u6027\u6821\u9A8C</h3><pre class="hljs language-ts"><code>schema: SFSchema = {
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
};</code></pre><h3 id="\u5F02\u6B65\u6821\u9A8C"><a class="lake-link"><i data-anchor="\u5F02\u6B65\u6821\u9A8C"></i></a>\u5F02\u6B65\u6821\u9A8C</h3><p>\u4F8B\u5982\u4E00\u4E2A\u5F02\u6B65\u6821\u9A8C\u7528\u6237\u540D\u662F\u5426\u5B58\u5728\u793A\u4F8B\uFF1A</p><pre class="hljs language-ts"><code>schema: SFSchema = {
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
};</code></pre><p><strong>\u6CE8\u610F\uFF1A</strong> \u7531\u4E8E\u6BCF\u4E00\u6B21\u6821\u9A8C\u90FD\u662F\u91CD\u65B0\u5B9E\u4F8B\u4E00\u6B21\uFF0C\u56E0\u6B64\u65E0\u6CD5\u505A\u4E00\u4E9B\u63A7\u5236\u7684\u64CD\u4F5C\uFF0C\u4F8B\u5982\uFF1A\u53BB\u6296 <code>debounceTime</code>\u3002</p><h3 id="setErrors"><a class="lake-link"><i data-anchor="setErrors"></i></a>setErrors</h3><p>\u5229\u7528 <code>setErrors</code> \u65B9\u6CD5\u6765\u8C03\u6574\u9519\u8BEF\u4FE1\u606F\u3002</p><pre class="hljs language-ts"><code>this.sf.getProperty('/name')?.setErrors({ keyword: 'required' });
this.sf.getProperty('/name')?.setErrors({ message: 'Please input your username!' });
// \u6E05\u7406\u5F53\u524D\u9519\u8BEF\u6D88\u606F
this.sf.getProperty('/name')?.setErrors();</code></pre><h2 id="\u89C6\u89C9"><a class="lake-link"><i data-anchor="\u89C6\u89C9"></i></a>\u89C6\u89C9</h2><p>\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E<a href="/docs/global-config" data-url="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\u6216 <code>ui.onlyVisual</code> \u5C5E\u6027\u63A7\u5236\u53EA\u5C55\u793A\u9519\u8BEF\u89C6\u89C9\u4E0D\u663E\u793A\u9519\u8BEF\u6587\u672C\u3002</p><h2 id="Debug"><a class="lake-link"><i data-anchor="Debug"></i></a>Debug</h2><p>JSON Schema \u5BF9\u683C\u5F0F\u6709\u4E25\u683C\u7684\u8981\u6C42\uFF0C\u4F8B\u5982\u65E5\u671F\u683C\u5F0F\u5FC5\u987B\u9075\u5B88 <a target="_blank" href="https://tools.ietf.org/html/rfc3339#section-5.6" data-url="https://tools.ietf.org/html/rfc3339#section-5.6">RFC3339</a> \u65F6\u95F4\u683C\u5F0F\uFF1A</p><pre class="hljs language-ts"><code>{
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
}</code></pre><p>\u5176\u4E2D <code>format</code> \u662F\u4E00\u4E2A\u9519\u8BEF\u65F6\u95F4\u683C\u5F0F\uFF0C\u5F53\u6307\u5B9A <code>debug: true</code> \u65F6\uFF0C\u4F1A\u5728\u63A7\u5236\u53F0\u63A5\u6536\u5230\u8BE6\u7EC6\u7684\u6821\u9A8C\u9519\u8BEF\u63CF\u8FF0\uFF1A</p><pre class="hljs language-null"><code>Error: unknown format "yyyy-MM-dd HH:mm:ss" is used in schema at path "#/properties/time"</code></pre></section>`,meta:{order:3,title:"\u6821\u9A8C\u9519\u8BEF",type:"Documents"},toc:[{id:"\u5199\u5728\u524D\u9762",title:"\u5199\u5728\u524D\u9762",h:2},{id:"\u81EA\u5B9A\u4E49\u9519\u8BEF\u6587\u672C",title:"\u81EA\u5B9A\u4E49\u9519\u8BEF\u6587\u672C",h:2,children:[{id:"keyword",title:"keyword",h:3}]},{id:"\u81EA\u5B9A\u4E49\u6821\u9A8C",title:"\u81EA\u5B9A\u4E49\u6821\u9A8C",h:2,children:[{id:"\u5C5E\u6027\u6821\u9A8C",title:"\u5C5E\u6027\u6821\u9A8C",h:3},{id:"\u5F02\u6B65\u6821\u9A8C",title:"\u5F02\u6B65\u6821\u9A8C",h:3},{id:"setErrors",title:"setErrors",h:3}]},{id:"\u89C6\u89C9",title:"\u89C6\u89C9",h:2},{id:"Debug",title:"Debug",h:2}]}},demo:!1},this.codes=[]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-error"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:1,vars:2,consts:[[3,"codes","item"]],template:function(t,d){t&1&&p(0,"app-docs",0),t&2&&a("codes",d.codes)("item",d.item)},dependencies:[k],encapsulation:2});let n=e;return n})();var Tt=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/docs/getting-started.en-US.md","zh-CN":"packages/form/docs/getting-started.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>@delon/form is a dynamic build form based on the <a target="_blank" href="http://json-schema.org/" data-url="http://json-schema.org/">JSON Schema</a> standard.</p><h2 id="Features"><a class="lake-link"><i data-anchor="Features"></i></a>Features</h2><ul><li><p>Compliance with the JSON Schema standard</p></li><li><p>Based on the ng-zorro-antd library</p></li><li><p>Built on the design principles developed by Ant Design</p></li><li><p>Twenty different widgets</p></li><li><p>Customizable widgets</p></li><li><p>No third-party dependencies, so applicable to all antd projects</p></li></ul><h2 id="Howtoreaddocument"><a class="lake-link"><i data-anchor="Howtoreaddocument"></i></a>How to read document</h2><p>This document uses the following conventions:</p><ul><li><p>With <code>schema.</code> prefix is JSON Schema properties</p></li><li><p>With <code>ui.</code> prefix is UI properties</p></li><li><p>Some widget data sources are divided into <strong>static</strong> and <strong>realtime</strong></p><ul><li><p><strong>Static</strong> refers to the <code>schema.enum</code> value, which is JSON Schema standard, and limited to the array format <code>any[]</code></p></li><li><p><strong>Real-time</strong> refers to the <code>ui.asyncData</code> value, which is not JSON Schema standard, the format <code>(input?: any) => Observable&lt;SFSchemaEnumType[]></code></p></li></ul></li></ul><h2 id="Usage"><a class="lake-link"><i data-anchor="Usage"></i></a>Usage</h2><p>Install <code>@delon/form</code> from <code>yarn</code>.</p><pre class="hljs language-bash"><code>npm i -S @delon/form</code></pre><p>Import <code>DelonFormModule</code> in to your root <code>AppModule</code>.</p><pre class="hljs language-typescript"><code>import { DelonFormModule } from '@delon/form';

@NgModule({
  imports: [
    DelonFormModule.forRoot()
  ]
})
export class AppModule { }</code></pre><p>Although the default <code>@delon/form</code> validator is <a target="_blank" href="https://ajv.js.org/" data-url="https://ajv.js.org/">ajv</a>, you can override <code>SchemaValidatorFactory</code> to use other validator libraries.</p><p><strong>Global Configuration</strong></p><p>Please refer to <a href="/docs/global-config" data-url="/docs/global-config">Global Configuration</a>, the members are as follows:</p><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[ajv]</code></td><td><a target="_blank" href="https://github.com/ajv-validator/ajv/blob/master/docs/api.md#options" data-url="https://github.com/ajv-validator/ajv/blob/master/docs/api.md#options">ajv</a> options</td><td><code>Ajv.Options</code></td><td>-</td></tr><tr><td><code>[ingoreKeywords]</code></td><td>Whether to ignore data type validator (<a target="_blank" href="https://github.com/ng-alain/delon/blob/master/packages/form/src/errors.ts#L4" data-url="https://github.com/ng-alain/delon/blob/master/packages/form/src/errors.ts#L4">all types</a>)</td><td><code>string[]</code></td><td><code>[ 'type', 'enum' ]</code></td></tr><tr><td><code>[liveValidate]</code></td><td>Whether to live validate</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[autocomplete]</code></td><td>autocomplete value of this form</td><td><code>on,off</code></td><td><code>null</code></td></tr><tr><td><code>[firstVisual]</code></td><td>Whether to show visual error immediately</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[onlyVisual]</code></td><td>Whether only show visual error not include text, and cancel the error text spacing</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[errors]</code></td><td>Customize error messages</td><td><code>{ [ key: string ]: string }</code></td><td><code>ERRORSDEFAULT</code></td></tr><tr><td><code>[ui]</code></td><td>Default global ui property</td><td><code>SFUISchemaItem</code></td><td>-</td></tr><tr><td><code>[size]</code></td><td>Size of the all angular element</td><td><code>default,large,small</code></td><td>-</td></tr><tr><td><code>[button]</code></td><td>Submit button of the form</td><td><code><a data-toc="SFButton">SFButton</a></code></td><td><code>{submit:'\u63D0\u4EA4',submit_type:'primary',reset:'\u91CD\u7F6E',reset_type:'default'}</code></td></tr><tr><td><code>[uiDateStringFormat]</code></td><td>Date widget default format</td><td><code>string</code></td><td><code>yyyy-MM-dd HH:mm:ss</code></td></tr><tr><td><code>[uiDateNumberFormat]</code></td><td>Date widget default format</td><td><code>string</code></td><td><code>T</code></td></tr><tr><td><code>[uiTimeStringFormat]</code></td><td>Time widget default format</td><td><code>string</code></td><td><code>HH:mm:ss</code></td></tr><tr><td><code>[uiTimeNumberFormat]</code></td><td>Time widget default format</td><td><code>string</code></td><td><code>T</code></td></tr><tr><td><code>[uiEmailSuffixes]</code></td><td>Specify the default Email suffix for <code>format: 'email'</code></td><td><code>string[]</code></td><td><code>['qq.com', '163.com', 'gmail.com', '126.com', 'aliyun.com']</code></td></tr><tr><td><code>[delay]</code></td><td>Whether to delay rendering, should be manually call <code>refreshSchema()</code></td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><p>For example, Build a email and name form:</p><pre class="hljs language-ts"><code>@Component({
    selector: 'app-home',
    template: \`
    &lt;sf [schema]="schema" (formSubmit)="submit($event)"&gt;&lt;/sf&gt;
    \`
})
export class HomeComponent {
  schema: SFSchema = {
    properties: {
      email: {
        type: 'string',
        title: 'Email',
        format: 'email',
        maxLength: 20
      },
      name: {
        type: 'string',
        title: 'Name',
        minLength: 3
      }
    }
  };

  submit(value: any) { }
}</code></pre></section>`,api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="sf"><a class="lake-link"><i data-anchor="sf"></i></a>sf</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[layout]</code></td><td>layout of the form</td><td><code>horizontal,vertical,inline</code></td><td><code>horizontal</code></td></tr><tr><td><code>[schema]</code></td><td><strong>Required</strong> JSON Schema</td><td><code>SFSchema</code></td><td>-</td></tr><tr><td><code>[ui]</code></td><td>UI Schema</td><td><code>SFUISchema</code></td><td>-</td></tr><tr><td><code>[formData]</code></td><td>Default form values</td><td><code>any</code></td><td>-</td></tr><tr><td><code>[mode]</code></td><td>Form type mode</td><td><code>default,search,edit</code></td><td><code>default</code></td></tr><tr><td><code>[button]</code></td><td>Submit button of the form</td><td><code><a data-toc="SFButton">SFButton</a>, 'none'</code></td><td><code>{}</code></td></tr><tr><td><code>[firstVisual]</code></td><td>Whether to show visual error immediately</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[liveValidate]</code></td><td>Whether to live validate</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[autocomplete]</code></td><td>autocomplete value of this form</td><td><code>on,off</code></td><td><code>null</code></td></tr><tr><td><code>[disabled]</code></td><td>Whether to disabled status</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[loading]</code></td><td>Whether to load status\uFF0Cwhen <code>true</code> reset button is disabled status, submit button is loading status</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[noColon]</code></td><td>Whether to not display <code>:</code> after label text.</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[compact]</code></td><td>Whether compact style</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[cleanValue]</code></td><td>Whether to clean up data for undefined Schema</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[delay]</code></td><td>Whether to delay rendering, should be manually call <code>refreshSchema()</code></td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>(formChange)</code></td><td>Callback when data changes</td><td><code>EventEmitter&lt;{}></code></td><td>-</td></tr><tr><td><code>(formValueChange)</code></td><td>Callback when value changes</td><td><code>EventEmitter<<a data-toc="SFValueChange">SFValueChange</a>></code></td><td>-</td></tr><tr><td><code>(formSubmit)</code></td><td>Callback when submitting the form</td><td><code>EventEmitter&lt;{}></code></td><td>-</td></tr><tr><td><code>(formReset)</code></td><td>Callback when resetting the form</td><td><code>EventEmitter&lt;{}></code></td><td>-</td></tr><tr><td><code>(formError)</code></td><td>Callback when form check</td><td><code>EventEmitter&lt;ErrorData[]></code></td><td>-</td></tr></tbody></table><h3 id="SFButton"><a class="lake-link"><i data-anchor="SFButton"></i></a>SFButton</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[submit]</code></td><td>Submit text of button</td><td><code>string</code></td><td><code>\u63D0\u4EA4</code></td></tr><tr><td><code>[submit_type]</code></td><td>Submit type of button</td><td><code>string</code></td><td><code>primary</code></td></tr><tr><td><code>[submit_icon]</code></td><td>Submit icon of button</td><td><code>SFButtonIcon</code></td><td>-</td></tr><tr><td><code>[reset]</code></td><td>Reset text of button</td><td><code>string</code></td><td><code>\u91CD\u7F6E</code></td></tr><tr><td><code>[reset_type]</code></td><td>Reset type of button</td><td><code>string</code></td><td><code>default</code></td></tr><tr><td><code>[reset_icon]</code></td><td>Reset icon of button</td><td><code>SFButtonIcon</code></td><td>-</td></tr><tr><td><code>[search]</code></td><td>Search text of button</td><td><code>string</code></td><td><code>\u641C\u7D22</code></td></tr><tr><td><code>[edit]</code></td><td>Edit text of button</td><td><code>string</code></td><td><code>\u4FDD\u5B58</code></td></tr><tr><td><code>[render]</code></td><td>Button layout</td><td><code>SFRenderButton</code></td><td>-</td></tr></tbody></table><h3 id="SFValueChange"><a class="lake-link"><i data-anchor="SFValueChange"></i></a>SFValueChange</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[value]</code></td><td>Always return complete data</td><td><code>SFValue</code></td><td>-</td></tr><tr><td><code>[path]</code></td><td>Current triggered path</td><td><code>string, null</code></td><td><code>null</code></td></tr><tr><td><code>[pathValue]</code></td><td>Current path value</td><td><code>SFValue</code></td><td>-</td></tr></tbody></table><h3 id="Methods"><a class="lake-link"><i data-anchor="Methods"></i></a>Methods</h3><table><thead><tr><th>Method Name</th><th>Description</th><th>Return Value</th></tr></thead><tbody><tr><td><code>valid</code></td><td>Form is valid</td><td><code>boolean</code></td></tr><tr><td><code>value</code></td><td>The current value of the form</td><td><code>any</code></td></tr><tr><td><code>refreshSchema</code></td><td>Refresh JSON Schema</td><td><code>void</code></td></tr><tr><td><code>reset</code></td><td>Resets the form</td><td><code>void</code></td></tr><tr><td><code>validator</code></td><td>Manually verify a form</td><td><code>void</code></td></tr><tr><td><code>getProperty</code></td><td>Get a form property via path</td><td><code>FormProperty</code></td></tr><tr><td><code>getValue</code></td><td>Get value via path</td><td><code>any</code></td></tr><tr><td><code>setValue</code></td><td>Set value via path, should be throw error when invalid path</td><td><code>this</code></td></tr><tr><td><code>updateFeedback</code></td><td>Set feedback status via path</td><td><code>this</code></td></tr></tbody></table><blockquote><p><strong>Note:</strong> All paths are separated by <code>/</code>, for example: <code>/user/name</code>, <code>/arr/0/name</code>.</p></blockquote><h3 id="Button"><a class="lake-link"><i data-anchor="Button"></i></a>Button</h3><p><strong>Notice</strong></p><ul><li><p>Manually add button when value is <code>null</code> or <code>undefined</code>, but keeping container element.</p></li><li><p>Manually add button when value is <code>none</code>, but removed container element.</p></li><li><p>When using fixed <code>label</code> width. Default is center when <code>render.class</code> is not spacifid.</p></li></ul><p><strong>Custom Button</strong></p><p><strong>NOTICE:</strong> Must be setting <code>button</code> value is <code>null</code>.</p><pre class="hljs language-html"><code>&lt;sf #sf [button]="null"&gt;
    &lt;button type="submit" nz-button [disabled]="!sf.valid"&gt;Save&lt;/button&gt;
    &lt;button (click)="sf.reset()" type="button" nz-button&gt;Reset&lt;/button&gt;
&lt;/sf&gt;</code></pre><h2 id="FAQ"><a class="lake-link"><i data-anchor="FAQ"></i></a>FAQ</h2><h3 id="Whatismode"><a class="lake-link"><i data-anchor="Whatismode"></i></a>What is mode</h3><p><code>mode</code> is just a quick action, <strong>which has the highest priority</strong>, rules:</p><ul><li><p><code>default</code> default mode, do nothing</p></li><li><p><code>search</code> search mode, automatically set <code>layout: inline</code>\u3001<code>firstVisual: false</code>\u3001<code>liveValidate: false</code>\u3001<code>button.submit: 'Search'</code></p></li><li><p><code>edit</code> edit mode,  automatically set <code>layout: horizontal</code>\u3001<code>firstVisual: false</code>\u3001<code>liveValidate: true</code>\u3001<code>button.submit: 'Save'</code></p></li></ul><h3 id="SchemaInternationalization"><a class="lake-link"><i data-anchor="SchemaInternationalization"></i></a>Schema Internationalization</h3><p><code><a data-toc="sf">sf</a></code> doesn't support any Schema internationalization, this is because Schema itself is a group of JSON values, you can just provide different versions of languages to support internationalization.</p>`,meta:{order:1,title:"Getting Started",type:"Documents"},toc:[{id:"Features",title:"Features",h:2},{id:"Howtoreaddocument",title:"How to read document",h:2},{id:"Usage",title:"Usage",h:2},{id:"API",title:"API",h:2,children:[{id:"sf",title:"sf",h:3},{id:"SFButton",title:"SFButton",h:3},{id:"SFValueChange",title:"SFValueChange",h:3},{id:"Methods",title:"Methods",h:3},{id:"Button",title:"Button",h:3}]},{id:"FAQ",title:"FAQ",h:2,children:[{id:"Whatismode",title:"What is mode",h:3},{id:"SchemaInternationalization",title:"Schema Internationalization",h:3}]}]},"zh-CN":{content:`<section class="markdown"><p>@delon/form \u662F\u4E00\u4E2A\u57FA\u4E8E <a target="_blank" href="http://json-schema.org/" data-url="http://json-schema.org/">JSON Schema</a> \u6807\u51C6\u7684\u52A8\u6001\u6784\u5EFA\u8868\u5355\u3002</p><h2 id="\u7279\u6027"><a class="lake-link"><i data-anchor="\u7279\u6027"></i></a>\u7279\u6027</h2><ul><li><p>\u7B26\u5408 JSON Schema \u6807\u51C6</p></li><li><p>\u57FA\u4E8E ng-zorro-antd \u57FA\u7840\u7EC4\u4EF6\u5E93</p></li><li><p>\u79C9\u627F Ant Design \u4EF7\u503C\u89C2</p></li><li><p>\u4E8C\u5341\u51E0\u79CD\u5C0F\u90E8\u4EF6</p></li><li><p>\u53EF\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6\u6EE1\u8DB3\u4E1A\u52A1\u9700\u6C42</p></li><li><p>\u65E0\u4EFB\u4F55\u7B2C\u4E09\u65B9\u4F9D\u8D56\uFF0C\u53EF\u9002\u7528\u6240\u6709 antd \u9879\u76EE</p></li></ul><h2 id="\u5982\u4F55\u9605\u8BFB"><a class="lake-link"><i data-anchor="\u5982\u4F55\u9605\u8BFB"></i></a>\u5982\u4F55\u9605\u8BFB</h2><p>\u5728\u5F00\u59CB\u4E4B\u524D\u9700\u8981\u77E5\u9053\u6587\u6863\u7684\u4E00\u4E9B\u7B80\u5355\u7F16\u5199\u89C4\u5219\uFF1A</p><ul><li><p>\u4EE3\u7801\u4EE5 <code>schema.</code> \u5F00\u5934\u7684\u8868\u793A JSON Schema \u5BF9\u8C61\u5C5E\u6027</p></li><li><p>\u4EE3\u7801\u4EE5 <code>ui.</code> \u5F00\u5934\u7684\u8868\u793A UI \u5BF9\u8C61\u5C5E\u6027</p></li><li><p>\u90E8\u5206\u5C0F\u90E8\u4EF6\u6570\u636E\u6E90\u5206\u4E3A <strong>\u9759\u6001</strong> \u548C <strong>\u5B9E\u65F6</strong> \u4E24\u7C7B</p><ul><li><p><strong>\u9759\u6001</strong> \u7406\u89E3\u4E3A <code>schema.enum</code> \u503C\uFF0C\u662F\u7B26\u5408 JSON Schema \u6807\u51C6\uFF0C\u4E14\u9650\u6570\u7EC4\u683C\u5F0F <code>any[]</code></p></li><li><p><strong>\u5B9E\u65F6</strong> \u7406\u89E3\u4E3A <code>ui.asyncData</code> \u503C\uFF0C\u975E JSON Schema \u6807\u51C6\uFF0C\u683C\u5F0F <code>(input?: any) => Observable&lt;SFSchemaEnumType[]></code></p></li></ul></li></ul><h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p>\u5B89\u88C5 <code>@delon/form</code> \u4F9D\u8D56\u5305\uFF1A</p><pre class="hljs language-bash"><code>npm i -S @delon/form</code></pre><p>\u5BFC\u5165 <code>DelonFormModule</code> \u6A21\u5757\uFF1A</p><pre class="hljs language-typescript"><code>import { DelonFormModule } from '@delon/form';

@NgModule({
  imports: [
    DelonFormModule.forRoot()
  ]
})
export class AppModule { }</code></pre><p>\u867D\u7136\u9ED8\u8BA4 <code>@delon/form</code> \u6821\u9A8C\u662F <a target="_blank" href="https://ajv.js.org/" data-url="https://ajv.js.org/">ajv</a>\uFF0C\u4F46\u8FD9\u5E76\u4E0D\u662F\u552F\u4E00\u7684\u9009\u62E9\uFF0C\u4F60\u53EF\u4EE5\u8986\u76D6 <code>SchemaValidatorFactory</code> \u4F7F\u7528\u5176\u4ED6\u6821\u9A8C\u7C7B\u5E93\u3002</p><p><strong>\u5168\u5C40\u914D\u7F6E</strong></p><p>\u8BF7\u53C2\u8003<a href="/docs/global-config" data-url="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\uFF0C\u6210\u5458\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[ajv]</code></td><td><a target="_blank" href="https://github.com/ajv-validator/ajv/blob/master/docs/api.md#options" data-url="https://github.com/ajv-validator/ajv/blob/master/docs/api.md#options">ajv</a> \u53C2\u6570</td><td><code>Ajv.Options</code></td><td>-</td></tr><tr><td><code>[ingoreKeywords]</code></td><td>\u662F\u5426\u5FFD\u7565\u67D0\u4E9B\u6570\u636E\u7C7B\u578B\u6821\u9A8C\uFF08<a target="_blank" href="https://github.com/ng-alain/delon/blob/master/packages/form/src/errors.ts#L4" data-url="https://github.com/ng-alain/delon/blob/master/packages/form/src/errors.ts#L4">\u6240\u6709\u7C7B\u578B</a>\uFF09</td><td><code>string[]</code></td><td><code>[ 'type', 'enum' ]</code></td></tr><tr><td><code>[liveValidate]</code></td><td>\u662F\u5426\u5B9E\u65F6\u6821\u9A8C</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[autocomplete]</code></td><td>\u6307\u5B9A\u8868\u5355 <code>autocomplete</code> \u503C</td><td><code>on,off</code></td><td><code>null</code></td></tr><tr><td><code>[firstVisual]</code></td><td>\u662F\u5426\u7ACB\u5373\u5448\u73B0\u9519\u8BEF\u89C6\u89C9</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[onlyVisual]</code></td><td>\u662F\u5426\u53EA\u5C55\u793A\u9519\u8BEF\u89C6\u89C9\u4E0D\u663E\u793A\u9519\u8BEF\u6587\u672C\uFF0C\u5E76\u53D6\u6D88\u9519\u8BEF\u6587\u672C\u95F4\u8DDD</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[errors]</code></td><td>\u81EA\u5B9A\u4E49\u901A\u7528\u9519\u8BEF\u4FE1\u606F</td><td><code>{ [ key: string ]: string }</code></td><td><code>ERRORSDEFAULT</code></td></tr><tr><td><code>[ui]</code></td><td>\u9ED8\u8BA4\u5168\u5C40\u5E03\u5C40</td><td><code>SFUISchemaItem</code></td><td>-</td></tr><tr><td><code>[size]</code></td><td>\u5143\u7D20\u7EC4\u4EF6\u5927\u5C0F\uFF0C\u7528\u4E8E <code>nzSize</code> \u503C</td><td><code>default,large,small</code></td><td>-</td></tr><tr><td><code>[button]</code></td><td>\u6309\u94AE\u98CE\u683C</td><td><code><a data-toc="SFButton">SFButton</a></code></td><td><code>{submit:'\u63D0\u4EA4',submit_type:'primary',reset:'\u91CD\u7F6E',reset_type:'default'}</code></td></tr><tr><td><code>[uiDateStringFormat]</code></td><td>date\u5C0F\u90E8\u4EF6\uFF1A<code>type="string"</code> \u4E14\u4E0D\u6307\u5B9A <code>schema.format</code> \u548C <code>ui.format</code> \u65F6\u65E5\u671F\u683C\u5F0F</td><td><code>string</code></td><td><code>yyyy-MM-dd HH:mm:ss</code></td></tr><tr><td><code>[uiDateNumberFormat]</code></td><td>date\u5C0F\u90E8\u4EF6\uFF1A<code>type="number"</code> \u4E14\u4E0D\u6307\u5B9A <code>schema.format</code> \u548C <code>ui.format</code> \u65F6\u65E5\u671F\u683C\u5F0F\uFF0C\u9ED8\u8BA4\uFF1A<code>T</code> 13\u4F4DUnix Timestamp</td><td><code>string</code></td><td><code>T</code></td></tr><tr><td><code>[uiTimeStringFormat]</code></td><td>time\u5C0F\u90E8\u4EF6\uFF1A<code>type="string"</code> \u4E14\u4E0D\u6307\u5B9A <code>schema.format</code> \u548C <code>ui.format</code> \u65F6\u65E5\u671F\u683C\u5F0F</td><td><code>string</code></td><td><code>HH:mm:ss</code></td></tr><tr><td><code>[uiTimeNumberFormat]</code></td><td>time\u5C0F\u90E8\u4EF6\uFF1A<code>type="number"</code> \u4E14\u4E0D\u6307\u5B9A <code>schema.format</code> \u548C <code>ui.format</code> \u65F6\u65E5\u671F\u683C\u5F0F\uFF0C\u9ED8\u8BA4\uFF1A<code>T</code> 13\u4F4DUnix Timestamp\uFF0C\u65E5\u671F\u7EDF\u4E00\u4F7F\u7528 <code>1970-01-01</code></td><td><code>string</code></td><td><code>T</code></td></tr><tr><td><code>[uiEmailSuffixes]</code></td><td>\u6307\u5B9A <code>format: 'email'</code> \u7684\u9ED8\u8BA4Email\u540E\u7F00</td><td><code>string[]</code></td><td><code>['qq.com', '163.com', 'gmail.com', '126.com', 'aliyun.com']</code></td></tr><tr><td><code>[delay]</code></td><td>\u662F\u5426\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u9700\u8981\u624B\u52A8\u8C03\u7528 <code>refreshSchema()</code></td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><p>\u6784\u5EFA\u4E00\u4E2A\u90AE\u7BB1\u3001\u59D3\u540D\u8868\u5355\uFF1A</p><pre class="hljs language-ts"><code>@Component({
  selector: 'app-home',
  template: \`
  &lt;sf [schema]="schema" (formSubmit)="submit($event)"&gt;&lt;/sf&gt;
  \`
})
export class HomeComponent {
  schema: SFSchema = {
    properties: {
      email: {
        type: 'string',
        title: '\u90AE\u7BB1',
        format: 'email',
        maxLength: 20
      },
      name: {
        type: 'string',
        title: '\u59D3\u540D',
        minLength: 3
      }
    }
  };

  submit(value: any) { }
}</code></pre></section>`,api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="sf"><a class="lake-link"><i data-anchor="sf"></i></a>sf</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[layout]</code></td><td>\u8868\u5355\u5E03\u5C40\uFF0C\u7B49\u540C <code>nzLayout</code></td><td><code>'horizontal','vertical','inline'</code></td><td><code>'horizontal'</code></td></tr><tr><td><code>[schema]</code></td><td><strong>\u5FC5\u586B\u9879</strong> JSON Schema</td><td><code>SFSchema</code></td><td>-</td></tr><tr><td><code>[ui]</code></td><td>UI Schema</td><td><code>SFUISchema</code></td><td>-</td></tr><tr><td><code>[formData]</code></td><td>\u8868\u5355\u9ED8\u8BA4\u503C</td><td><code>any</code></td><td>-</td></tr><tr><td><code>[mode]</code></td><td>\u8868\u5355\u6A21\u5F0F\uFF0C\u7EC6\u8282\u89C1\u5E38\u89C1\u95EE\u9898</td><td><code>'default','search','edit'</code></td><td><code>'default'</code></td></tr><tr><td><code>[button]</code></td><td>\u6309\u94AE</td><td><code><a data-toc="SFButton">SFButton</a>|'none'</code></td><td><code>{}</code></td></tr><tr><td><code>[firstVisual]</code></td><td>\u662F\u5426\u7ACB\u5373\u5448\u73B0\u9519\u8BEF\u89C6\u89C9</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[liveValidate]</code></td><td>\u662F\u5426\u5B9E\u65F6\u6821\u9A8C\uFF0C<code>false</code> \u63D0\u4EA4\u65F6\u68C0\u9A8C</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[autocomplete]</code></td><td>\u6307\u5B9A\u8868\u5355 <code>autocomplete</code> \u503C</td><td><code>'on','off'</code></td><td><code>null</code></td></tr><tr><td><code>[disabled]</code></td><td>\u662F\u5426\u7981\u7528\u72B6\u6001</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[loading]</code></td><td>\u662F\u5426\u52A0\u8F7D\u72B6\u6001\uFF0C\u5F53 <code>true</code> \u91CD\u7F6E\u6309\u94AE\u7981\u6B62\u72B6\u6001\uFF0C\u63D0\u4EA4\u6309\u94AE\u52A0\u8F7D\u72B6\u6001</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[noColon]</code></td><td>\u662F\u5426\u4E0D\u663E\u793A <code>label</code> \u540E\u9762\u7684\u5192\u53F7</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[compact]</code></td><td>\u662F\u5426\u7D27\u51D1</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[cleanValue]</code></td><td>\u662F\u5426\u6E05\u7406\u672A\u5B9A\u4E49 Schema \u7684\u6570\u636E</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[delay]</code></td><td>\u662F\u5426\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u9700\u8981\u624B\u52A8\u8C03\u7528 <code>refreshSchema()</code></td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>(formChange)</code></td><td>\u6570\u636E\u53D8\u66F4\u65F6\u56DE\u8C03</td><td><code>EventEmitter&lt;{}></code></td><td>-</td></tr><tr><td><code>(formValueChange)</code></td><td>\u503C\u6570\u636E\u53D8\u66F4\u65F6\u56DE\u8C03</td><td><code>EventEmitter<<a data-toc="SFValueChange">SFValueChange</a>></code></td><td>-</td></tr><tr><td><code>(formSubmit)</code></td><td>\u63D0\u4EA4\u8868\u5355\u65F6\u56DE\u8C03</td><td><code>EventEmitter&lt;{}></code></td><td>-</td></tr><tr><td><code>(formReset)</code></td><td>\u91CD\u7F6E\u8868\u5355\u65F6\u56DE\u8C03</td><td><code>EventEmitter&lt;{}></code></td><td>-</td></tr><tr><td><code>(formError)</code></td><td>\u8868\u5355\u6821\u9A8C\u7ED3\u679C\u56DE\u8C03</td><td><code>EventEmitter&lt;ErrorData[]></code></td><td>-</td></tr></tbody></table><h3 id="SFButton"><a class="lake-link"><i data-anchor="SFButton"></i></a>SFButton</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[submit]</code></td><td>\u63D0\u4EA4\u6309\u94AE\u6587\u672C</td><td><code>string</code></td><td><code>\u63D0\u4EA4</code></td></tr><tr><td><code>[submit_type]</code></td><td>\u63D0\u4EA4\u6309\u94AE\u7C7B\u578B</td><td><code>string</code></td><td><code>primary</code></td></tr><tr><td><code>[submit_icon]</code></td><td>\u63D0\u4EA4\u6309\u94AE\u56FE\u6807</td><td><code>SFButtonIcon</code></td><td>-</td></tr><tr><td><code>[reset]</code></td><td>\u91CD\u7F6E\u6309\u94AE\u6587\u672C</td><td><code>string</code></td><td><code>\u91CD\u7F6E</code></td></tr><tr><td><code>[reset_type]</code></td><td>\u91CD\u7F6E\u6309\u94AE\u7C7B\u578B</td><td><code>string</code></td><td><code>default</code></td></tr><tr><td><code>[reset_icon]</code></td><td>\u91CD\u7F6E\u6309\u94AE\u56FE\u6807</td><td><code>SFButtonIcon</code></td><td>-</td></tr><tr><td><code>[search]</code></td><td>\u641C\u7D22\u6309\u94AE\u6587\u672C</td><td><code>string</code></td><td><code>\u641C\u7D22</code></td></tr><tr><td><code>[edit]</code></td><td>\u7F16\u8F91\u6309\u94AE\u6587\u672C</td><td><code>string</code></td><td><code>\u4FDD\u5B58</code></td></tr><tr><td><code>[render]</code></td><td>\u6309\u94AE\u6837\u5F0F</td><td><code>SFRenderButton</code></td><td>-</td></tr></tbody></table><h3 id="SFValueChange"><a class="lake-link"><i data-anchor="SFValueChange"></i></a>SFValueChange</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[value]</code></td><td>\u603B\u662F\u8FD4\u56DE\u5B8C\u6574\u7684\u6570\u636E</td><td><code>SFValue</code></td><td>-</td></tr><tr><td><code>[path]</code></td><td>\u5F53\u524D\u89E6\u53D1\u8DEF\u5F84</td><td><code>string, null</code></td><td><code>null</code></td></tr><tr><td><code>[pathValue]</code></td><td>\u5F53\u524D\u89E6\u53D1\u8DEF\u5F84\u5BF9\u5E94\u503C</td><td><code>SFValue</code></td><td>-</td></tr></tbody></table><h3 id="\u7EC4\u4EF6\u65B9\u6CD5"><a class="lake-link"><i data-anchor="\u7EC4\u4EF6\u65B9\u6CD5"></i></a>\u7EC4\u4EF6\u65B9\u6CD5</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td><code>valid</code></td><td>\u8868\u5355\u662F\u5426\u6709\u6548</td><td><code>boolean</code></td></tr><tr><td><code>value</code></td><td>\u8868\u5355\u503C</td><td><code>any</code></td></tr><tr><td><code>refreshSchema</code></td><td>\u5237\u65B0 JSON Schema</td><td><code>void</code></td></tr><tr><td><code>reset</code></td><td>\u91CD\u7F6E\u8868\u5355</td><td><code>void</code></td></tr><tr><td><code>validator</code></td><td>\u624B\u52A8\u6821\u9A8C\u4E00\u6B21\u8868\u5355</td><td><code>void</code></td></tr><tr><td><code>getProperty</code></td><td>\u6839\u636E\u8DEF\u5F84\u83B7\u53D6\u8868\u5355\u5143\u7D20\u5C5E\u6027</td><td><code>FormProperty</code></td></tr><tr><td><code>getValue</code></td><td>\u6839\u636E\u8DEF\u5F84\u83B7\u53D6\u8868\u5355\u5143\u7D20\u5F53\u524D\u503C</td><td><code>any</code></td></tr><tr><td><code>setValue</code></td><td>\u6839\u636E\u8DEF\u5F84\u8BBE\u7F6E\u67D0\u4E2A\u8868\u5355\u5143\u7D20\u5C5E\u6027\u503C\uFF0C\u82E5\u8DEF\u5F84\u4E0D\u5B58\u5728\u4F1A\u4EA7\u751F\u5F02\u5E38</td><td><code>this</code></td></tr><tr><td><code>updateFeedback</code></td><td>\u6839\u636E\u8DEF\u5F84\u8BBE\u7F6E\u67D0\u4E2A\u8868\u5355\u5143\u7D20\u53CD\u9988\u72B6\u6001</td><td><code>this</code></td></tr></tbody></table><blockquote><p><strong>\u6CE8\uFF1A</strong> \u6240\u6709 path \u91C7\u7528 <code>/</code> \u6765\u5206\u9694\uFF0C\u4F8B\u5982\uFF1A<code>/user/name</code>\u3001<code>/arr/0/name</code>\u3002</p></blockquote><h3 id="\u6309\u94AE\u8BF4\u660E"><a class="lake-link"><i data-anchor="\u6309\u94AE\u8BF4\u660E"></i></a>\u6309\u94AE\u8BF4\u660E</h3><p><strong>\u6CE8\u610F\u4E8B\u9879</strong></p><ul><li><p>\u503C\u4E3A <code>null</code> \u6216 <code>undefined</code> \u8868\u793A\u624B\u52A8\u6DFB\u52A0\u6309\u94AE\uFF0C\u4F46\u4FDD\u7559\u5BB9\u5668</p></li><li><p>\u503C\u4E3A <code>none</code> \u8868\u793A\u624B\u52A8\u6DFB\u52A0\u6309\u94AE\uFF0C\u4E14\u4E0D\u4FDD\u7559\u5BB9\u5668</p></li><li><p>\u4F7F\u7528 <code>spanLabelFixed</code> \u56FA\u5B9A\u6807\u7B7E\u5BBD\u5EA6\u65F6\uFF0C\u82E5\u65E0 <code>render.class</code> \u5219\u9ED8\u8BA4\u4E3A\u5C45\u4E2D\u72B6\u6001</p></li></ul><p><strong>\u81EA\u5B9A\u4E49</strong></p><p>\u5F53\u4F60\u5E0C\u671B\u81EA\u5B9A\u4E49\u6309\u94AE\u65F6\uFF0C\u52A1\u5FC5\u8BBE\u7F6E <code>button</code> \u503C\u4E3A <code>null</code>\u3002</p><pre class="hljs language-html"><code>&lt;sf #sf [button]="null"&gt;
  &lt;button type="submit" nz-button [disabled]="!sf.valid"&gt;\u4FDD\u5B58&lt;/button&gt;
  &lt;button (click)="sf.reset()" type="button" nz-button&gt;\u91CD\u7F6E&lt;/button&gt;
&lt;/sf&gt;</code></pre><h2 id="\u5E38\u89C1\u95EE\u9898"><a class="lake-link"><i data-anchor="\u5E38\u89C1\u95EE\u9898"></i></a>\u5E38\u89C1\u95EE\u9898</h2><h3 id="mode\u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F"><a class="lake-link"><i data-anchor="mode\u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F"></i></a>mode\u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F</h3><p><code>mode</code> \u53EA\u662F\u5FEB\u6377\u4F5C\u7528\uFF0C<strong>\u4E14\u4F18\u5148\u7EA7\u9AD8\u4E8E\u4E00\u5207</strong>\uFF0C\u89C4\u5219\u5982\u4E0B\uFF1A</p><ul><li><p><code>default</code> \u9ED8\u8BA4\u6A21\u5F0F\uFF0C\u4EC0\u4E48\u4E5F\u4E0D\u505A</p></li><li><p><code>search</code> \u641C\u7D22\u6A21\u5F0F\uFF0C\u81EA\u52A8\u8BBE\u7F6E <code>layout: inline</code>\u3001<code>firstVisual: false</code>\u3001<code>liveValidate: false</code>\u3001<code>button.submit: '\u641C\u7D22'</code></p></li><li><p><code>edit</code> \u7F16\u8F91\u6A21\u5F0F\uFF0C\u81EA\u52A8\u8BBE\u7F6E <code>layout: horizontal</code>\u3001<code>firstVisual: false</code>\u3001<code>liveValidate: true</code>\u3001<code>button.submit: '\u4FDD\u5B58'</code></p></li></ul><h3 id="Schema\u56FD\u9645\u5316"><a class="lake-link"><i data-anchor="Schema\u56FD\u9645\u5316"></i></a>Schema\u56FD\u9645\u5316</h3><p><code><a data-toc="sf">sf</a></code> \u5E76\u4E0D\u652F\u6301\u4EFB\u4F55 Schema \u56FD\u9645\u5316\u52A8\u4F5C\uFF0C\u8FD9\u662F\u56E0\u4E3A\u672C\u8EAB Schema \u662F\u4E00\u7EC4 JSON \u503C\uFF0C\u56FD\u9645\u5316\u7684\u5B9E\u73B0\u53EA\u9700\u8981\u63D0\u4F9B\u4E0D\u540C\u8BED\u8A00\u7248\u672C\u5373\u53EF\u3002</p>`,meta:{order:1,title:"\u5F00\u59CB\u4F7F\u7528",type:"Documents"},toc:[{id:"\u7279\u6027",title:"\u7279\u6027",h:2},{id:"\u5982\u4F55\u9605\u8BFB",title:"\u5982\u4F55\u9605\u8BFB",h:2},{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528",h:2},{id:"API",title:"API",h:2,children:[{id:"sf",title:"sf",h:3},{id:"SFButton",title:"SFButton",h:3},{id:"SFValueChange",title:"SFValueChange",h:3},{id:"\u7EC4\u4EF6\u65B9\u6CD5",title:"\u7EC4\u4EF6\u65B9\u6CD5",h:3},{id:"\u6309\u94AE\u8BF4\u660E",title:"\u6309\u94AE\u8BF4\u660E",h:3}]},{id:"\u5E38\u89C1\u95EE\u9898",title:"\u5E38\u89C1\u95EE\u9898",h:2,children:[{id:"mode\u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F",title:"mode\u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F",h:3},{id:"Schema\u56FD\u9645\u5316",title:"Schema\u56FD\u9645\u5316",h:3}]}]}},demo:!1},this.codes=[]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-getting-started"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:1,vars:2,consts:[[3,"codes","item"]],template:function(t,d){t&1&&p(0,"app-docs",0),t&2&&a("codes",d.codes)("item",d.item)},dependencies:[k],encapsulation:2});let n=e;return n})();var Nt=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/docs/layout.en-US.md","zh-CN":"packages/form/docs/layout.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>@delon/form layout is based on Ant Design <a target="_blank" href="https://ng.ant.design/components/grid/en" data-url="https://ng.ant.design/components/grid/en">Grid</a> system, and layout parameters are determined by SFSchema <a href="/form/schema/en#Render-Type" data-url="/form/schema/en#Render-Type">Reder Type</a>.</p><p>There are three types of form layout: inline, vertical and horizontal(default), it is determined by <a href="/form/getting-started/en#API" data-url="/form/getting-started/en#API">layout</a>.</p><h2 id="Type"><a class="lake-link"><i data-anchor="Type"></i></a>Type</h2><h3 id="Inline"><a class="lake-link"><i data-anchor="Inline"></i></a>Inline</h3><p>Form elements are arranged inline horizontally, usually, it is used for simple search box.</p><p>The width of form element is determined by the width of component itself, you can adjust width by setting <code>width</code> parameter, for example, width of widget <code>select</code> would be very small if no <code>width</code> has been set.</p><blockquote><p>You can also set <a href="/form/getting-started/en#What-is-mode" data-url="/form/getting-started/en#What-is-mode">mode</a> to <code>search</code>, which is a fast way to set widget to search mode.</p></blockquote><h3 id="Vertical"><a class="lake-link"><i data-anchor="Vertical"></i></a>Vertical</h3><p>Label and form elements are arranged vertically.</p><h3 id="Horizontal"><a class="lake-link"><i data-anchor="Horizontal"></i></a>Horizontal</h3><p>Label and form elements are arranged horizontally, usually, it is used on edit page.</p><p>Horizontal is more complicated than vertical, because responsive would be involved, the number of grid of each form element is determined by <a href="/form/schema/en#Responsive-Property-SFGridSchema" data-url="/form/schema/en#Responsive-Property-SFGridSchema">grid</a>.</p><blockquote><p>You can also set <a href="/form/getting-started/en#What-is-mode" data-url="/form/getting-started/en#What-is-mode">mode</a> to <code>edit</code>, which is a fast way to set widget to edit mode.</p></blockquote><p><strong>Non-responsive</strong></p><p>You only need to maintain <code>span</code> attribute when it is non-responsive.</p><p><strong>Responsive</strong></p><p>Responsive is based on <code>xs</code>\u3001<code>sm</code>\u3001<code>md</code>\u3001<code>lg</code>\u3001<code>xl</code>\u3001<code>xxl</code> to determine how many grids for different size of screens, notes:</p><ul><li><p>There are <code>24</code> grids each row</p></li><li><p>Set value to <code>12</code> if there are two form elements on the same row</p></li><li><p><code>{ sm: 24, md: 12 }</code> will put two form elements on the same row when screen size is <code>\u2265992px</code>, and each form element on one row when screen size is <code>&lt;992px</code></p></li></ul><h2 id="IrregularLayout"><a class="lake-link"><i data-anchor="IrregularLayout"></i></a>Irregular Layout</h2><p>Of course, it is impossible to always have fixed number of form elements, it is possible that one form element occupies a whole row, because of grid system, it will cause another issue: <strong>labels cannot be aligned</strong>, sf provides a solution, fix the width of all labels by <code>spanLabelFixed</code> attribute, for example:</p><pre class="hljs language-json"><code>{
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
}</code></pre><h2 id="Button"><a class="lake-link"><i data-anchor="Button"></i></a>Button</h2><p>Button rendering has same layout and parameters with form element, you can adjust rendering style by setting <a href="/form/getting-started/en#SFButton" data-url="/form/getting-started/en#SFButton">SFButton</a> attributes.</p><p><strong>Notes</strong></p><ul><li><p>It means adding button manually but reserve container when the value is <code>null</code> or <code>undefined</code></p></li><li><p>It means adding button manually but do not reserve container when the value is <code>none</code></p></li><li><p>When using <code>spanLabelFixed</code> to set fixed width of label, the position is centered by default if no <code>render.class</code> is set</p></li></ul><p><strong>Customization</strong></p><p>You must set value of <code>button</code> to <code>null</code> when you want to customize buttons.</p><pre class="hljs language-html"><code>&lt;sf #sf [button]="null"&gt;
  &lt;button type="submit" nz-button [disabled]="!sf.valid"&gt;Save&lt;/button&gt;
  &lt;button (click)="sf.reset()" type="button" nz-button&gt;Reset&lt;/button&gt;
&lt;/sf&gt;</code></pre></section>`,meta:{order:5,title:"Layout",type:"Documents"},toc:[{id:"Type",title:"Type",h:2,children:[{id:"Inline",title:"Inline",h:3},{id:"Vertical",title:"Vertical",h:3},{id:"Horizontal",title:"Horizontal",h:3}]},{id:"IrregularLayout",title:"Irregular Layout",h:2},{id:"Button",title:"Button",h:2}]},"zh-CN":{content:`<section class="markdown"><p>@delon/form \u5E03\u5C40\u662F\u57FA\u4E8E <a target="_blank" href="https://ng.ant.design/components/grid/zh" data-url="https://ng.ant.design/components/grid/zh">Grid</a> \u6805\u683C\u7CFB\u7EDF\uFF0C\u800C SFSchema \u7684<a href="/form/schema/en#%E6%B8%B2%E6%9F%93%E7%B1%BB" data-url="/form/schema/en#%E6%B8%B2%E6%9F%93%E7%B1%BB">\u6E32\u67D3\u7C7B</a>\u6765\u51B3\u5B9A\u5E03\u5C40\u53C2\u6570\u3002</p><p>\u8868\u5355\u5E03\u5C40\u5206\u4E3A\u884C\u5185\u3001\u5782\u76F4\u3001\u6C34\u5E73\uFF08\u9ED8\u8BA4\uFF09\u4E09\u7C7B\uFF0C\u5B83\u7531 <a href="/form/getting-started/zh#API" data-url="/form/getting-started/zh#API">layout</a> \u51B3\u5B9A\u3002</p><h2 id="\u7C7B\u578B"><a class="lake-link"><i data-anchor="\u7C7B\u578B"></i></a>\u7C7B\u578B</h2><h3 id="\u884C\u5185"><a class="lake-link"><i data-anchor="\u884C\u5185"></i></a>\u884C\u5185</h3><p>\u8868\u5355\u9879\u6C34\u5E73\u884C\u5185\u6392\u5217\uFF0C\u4E00\u822C\u7528\u4E8E\u7B80\u5355\u641C\u7D22\u6846\u3002</p><p>\u8868\u5355\u9879\u7684\u5BBD\u5EA6\u7531\u7EC4\u4EF6\u81EA\u8EAB\u6765\u51B3\u5B9A\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>width</code> \u53C2\u6570\u6765\u8C03\u6574\u5176\u5927\u5C0F\uFF0C\u50CF\u5C0F\u90E8\u4EF6 <code>select</code> \u53EF\u80FD\u4F1A\u56E0\u4E3A\u672A\u8BBE\u7F6E\u9ED8\u8BA4\u503C\u5012\u7F6E\u5BBD\u5EA6\u6781\u5C0F\u3002</p><blockquote><p>\u53EF\u901A\u8FC7\u8BBE\u7F6E <a href="/form/getting-started/zh#mode%E6%9C%89%E4%BB%80%E4%B9%88%E4%BD%9C%E7%94%A8%EF%BC%9F" data-url="/form/getting-started/zh#mode%E6%9C%89%E4%BB%80%E4%B9%88%E4%BD%9C%E7%94%A8%EF%BC%9F">mode</a> \u53C2\u6570\u6765\u5FEB\u901F\u8BBE\u7F6E\u4E3A\u641C\u7D22\u6A21\u5F0F\u3002</p></blockquote><h3 id="\u5782\u76F4"><a class="lake-link"><i data-anchor="\u5782\u76F4"></i></a>\u5782\u76F4</h3><p>\u6807\u7B7E\u548C\u8868\u5355\u63A7\u4EF6\u4E0A\u4E0B\u5782\u76F4\u6392\u5217\u3002</p><h3 id="\u6C34\u5E73"><a class="lake-link"><i data-anchor="\u6C34\u5E73"></i></a>\u6C34\u5E73</h3><p>\u6807\u7B7E\u548C\u8868\u5355\u63A7\u4EF6\u6C34\u5E73\u6392\u5217\uFF0C\u4E00\u822C\u7528\u4E8E\u7F16\u8F91\u9875\u3002</p><p>\u6C34\u5E73\u7C7B\u578B\u76F8\u5BF9\u4E8E\u884C\u5185\u4E0E\u5782\u76F4\u66F4\u590D\u6742\u4E00\u70B9\uFF0C\u56E0\u4E3A\u4F1A\u6D89\u53CA\u54CD\u5E94\u5F0F\uFF0C\u51B3\u5B9A\u6BCF\u4E2A\u8868\u5355\u9879\u6240\u7AD9\u7684\u683C\u6570\u662F\u7531 <a href="/form/schema#%E5%93%8D%E5%BA%94%E5%BC%8F%E5%B1%9E%E6%80%A7-SFGridSchema" data-url="/form/schema#%E5%93%8D%E5%BA%94%E5%BC%8F%E5%B1%9E%E6%80%A7-SFGridSchema">grid</a> \u5C5E\u6027\u6765\u51B3\u5B9A\u3002</p><blockquote><p>\u53EF\u901A\u8FC7\u8BBE\u7F6E <a href="/form/getting-started/zh#mode%E6%9C%89%E4%BB%80%E4%B9%88%E4%BD%9C%E7%94%A8%EF%BC%9F" data-url="/form/getting-started/zh#mode%E6%9C%89%E4%BB%80%E4%B9%88%E4%BD%9C%E7%94%A8%EF%BC%9F">mode</a> \u53C2\u6570\u6765\u5FEB\u901F\u8BBE\u7F6E\u4E3A\u7F16\u8F91\u6A21\u5F0F\u3002</p></blockquote><p><strong>\u975E\u54CD\u5E94\u5F0F</strong></p><p>\u975E\u54CD\u5E94\u5F0F\u65F6\u53EA\u9700\u8981\u7EF4\u62A4 <code>span</code> \u5C5E\u6027\u5373\u53EF\u3002</p><p><strong>\u54CD\u5E94\u5F0F</strong></p><p>\u54CD\u5E94\u5F0F\u662F\u6839\u636E <code>xs</code>\u3001<code>sm</code>\u3001<code>md</code>\u3001<code>lg</code>\u3001<code>xl</code>\u3001<code>xxl</code> \u6765\u51B3\u5B9A\u4E0D\u540C\u5C4F\u5E55\u65F6\u51B3\u5B9A\u8981\u5360\u7528\u51E0\u683C\uFF0C\u6709\u51E0\u4E2A\u6CE8\u610F\u70B9\uFF1A</p><ul><li><p>\u6BCF\u4E00\u884C\u53EA\u80FD\u6709 <code>24</code> \u683C</p></li><li><p>\u8868\u793A\u4E24\u4E2A\u8868\u5355\u9879\u5728\u540C\u4E00\u884C\uFF0C\u5219\u8BBE\u7F6E\u503C\u4E3A <code>12</code></p></li><li><p>\u8868\u793A\u5C4F\u5E55 <code>\u2265992px</code> \u65F6\u4E24\u4E2A\u8868\u5355\u9879\u5728\u540C\u4E00\u884C\uFF0C\u5C0F\u4E8E\u5219\u6BCF\u4E2A\u8868\u5355\u9879\u4E3A\u4E00\u884C\uFF0C\u5219\uFF1A<code>{ sm: 24, md: 12 }</code></p></li></ul><h2 id="\u4E0D\u89C4\u5219\u5E03\u5C40"><a class="lake-link"><i data-anchor="\u4E0D\u89C4\u5219\u5E03\u5C40"></i></a>\u4E0D\u89C4\u5219\u5E03\u5C40</h2><p>\u5F53\u7136\uFF0C\u8868\u5355\u4E0D\u53EF\u80FD\u6BCF\u4E00\u884C\u90FD\u6709\u56FA\u5B9A\u8868\u5355\u9879\u6570\u91CF\uFF0C\u6709\u53EF\u80FD\u67D0\u4E2A\u8868\u5355\u9879\u4F1A\u5360\u7528\u4E00\u6574\u884C\uFF0C\u7531\u4E8E\u6805\u683C\u7CFB\u7EDF\u7684\u56E0\u7D20\uFF0C\u8FD9\u4F1A\u4EA7\u751F\u53E6\u4E00\u4E2A\u95EE\u9898\uFF1A<strong>\u6807\u7B7E\u65E0\u6CD5\u5BF9\u9F50</strong>\uFF0Csf \u63D0\u4F9B\u4E00\u79CD\u65B9\u6848\uFF0C\u5373\u56FA\u5B9A\u6240\u6709\u6807\u7B7E\u7684\u5BBD\u5EA6 <code>spanLabelFixed</code> \u5C5E\u6027\uFF0C\u4F8B\u5982\uFF1A</p><pre class="hljs language-json"><code>{
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
}</code></pre><h2 id="\u6309\u94AE"><a class="lake-link"><i data-anchor="\u6309\u94AE"></i></a>\u6309\u94AE</h2><p>\u6309\u94AE\u5E03\u5C40\u6E32\u67D3\u540C\u8868\u5355\u9879\u4E00\u6837\u5E03\u5C40\u3001\u53C2\u6570\uFF0C\u53EF\u4EE5\u901A\u8FC7 <a href="/form/getting-started#SFButton" data-url="/form/getting-started#SFButton">SFButton</a> \u5C5E\u6027\u6765\u8C03\u6574\u6309\u94AE\u6E32\u67D3\u98CE\u683C\u3002</p><p><strong>\u6CE8\u610F\u4E8B\u9879</strong></p><ul><li><p>\u503C\u4E3A <code>null</code> \u6216 <code>undefined</code> \u8868\u793A\u624B\u52A8\u6DFB\u52A0\u6309\u94AE\uFF0C\u4F46\u4FDD\u7559\u5BB9\u5668</p></li><li><p>\u503C\u4E3A <code>none</code> \u8868\u793A\u624B\u52A8\u6DFB\u52A0\u6309\u94AE\uFF0C\u4E14\u4E0D\u4FDD\u7559\u5BB9\u5668</p></li><li><p>\u4F7F\u7528 <code>spanLabelFixed</code> \u56FA\u5B9A\u6807\u7B7E\u5BBD\u5EA6\u65F6\uFF0C\u82E5\u65E0 <code>render.class</code> \u5219\u9ED8\u8BA4\u4E3A\u5C45\u4E2D\u72B6\u6001</p></li></ul><p><strong>\u81EA\u5B9A\u4E49</strong></p><p>\u5F53\u4F60\u5E0C\u671B\u81EA\u5B9A\u4E49\u6309\u94AE\u65F6\uFF0C\u52A1\u5FC5\u8BBE\u7F6E <code>button</code> \u503C\u4E3A <code>null</code>\u3002</p><pre class="hljs language-html"><code>&lt;sf #sf [button]="null"&gt;
  &lt;button type="submit" nz-button [disabled]="!sf.valid"&gt;\u4FDD\u5B58&lt;/button&gt;
  &lt;button (click)="sf.reset()" type="button" nz-button&gt;\u91CD\u7F6E&lt;/button&gt;
&lt;/sf&gt;</code></pre></section>`,meta:{order:5,title:"\u5982\u4F55\u5E03\u5C40",type:"Documents"},toc:[{id:"\u7C7B\u578B",title:"\u7C7B\u578B",h:2,children:[{id:"\u884C\u5185",title:"\u884C\u5185",h:3},{id:"\u5782\u76F4",title:"\u5782\u76F4",h:3},{id:"\u6C34\u5E73",title:"\u6C34\u5E73",h:3}]},{id:"\u4E0D\u89C4\u5219\u5E03\u5C40",title:"\u4E0D\u89C4\u5219\u5E03\u5C40",h:2},{id:"\u6309\u94AE",title:"\u6309\u94AE",h:2}]}},demo:!1},this.codes=[]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-layout"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:1,vars:2,consts:[[3,"codes","item"]],template:function(t,d){t&1&&p(0,"app-docs",0),t&2&&a("codes",d.codes)("item",d.item)},dependencies:[k],encapsulation:2});let n=e;return n})();var It=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/docs/qa.en-US.md","zh-CN":"packages/form/docs/qa.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><h2 id="path"><a class="lake-link"><i data-anchor="path"></i></a>path</h2><p>Many functions require passing <code>path</code> parameter, it uses <code>/</code> to represent form object path, following JSON Schema is an example:</p><pre class="hljs language-ts"><code>schema: SFSchema = {
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
};</code></pre><p>Following <code>path</code> are all valid:</p><ul><li><p><code>/app</code></p></li><li><p><code>/user/name</code></p></li><li><p><code>/list/0/key</code> 0 means array index</p></li></ul><p>Starting with <code>/</code> indicates to search from root path, otherwise, search from current path.</p><h2 id="Whysomecustomizedvalidationsarenotworkinginnon-realtimevalidation"><a class="lake-link"><i data-anchor="Whysomecustomizedvalidationsarenotworkinginnon-realtimevalidation"></i></a>Why some customized validations are not working in non-realtime validation?</h2><p>Because non-realtime validation (set <code>liveValidate:false</code>) doesn't revalidate every element, although it can be done, customized validation may involve asynchronized validation, cannot guarantee the order of execution, so non-realtime validation actually only validates JSON Schema itself.</p><h2 id="HowtouseSchemadynamically"><a class="lake-link"><i data-anchor="HowtouseSchemadynamically"></i></a>How to use Schema dynamically?</h2><p>There are two common scenarios:</p><p><strong>1. Schema is limited by remote data after definition</strong></p><pre class="hljs language-ts"><code>@ViewChild('sf', { static: false }) sf: SFComponent;
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
}</code></pre><p><strong>2. Remote Schema</strong></p><pre class="hljs language-ts"><code>schema: SFSchema = {
  properties: {}
};

ngOnInit() {
  this.http.get('/schema').subscribe(res => this.sf.refreshSchema(res));
}</code></pre><h2 id="Whentousedefault"><a class="lake-link"><i data-anchor="Whentousedefault"></i></a>When to use <code>default</code>?</h2><p><code>default</code> of Schema is used to set initialization, usually, need to provide <code>formData</code> when editting forms, but for adding forms, should rely on <code>default</code> to provide a better user friendly experience form to users.</p><h2 id="HowtorefreshaspecificSchema"><a class="lake-link"><i data-anchor="HowtorefreshaspecificSchema"></i></a>How to refresh a specific Schema?</h2><p>You can get a specific attribute of Schema by calling <code>getProperty</code> function, the attribute includes Schema data and Ui data, you can modify these data and re-render the Schema by calling <code>reset</code> function, for example:</p><pre class="hljs language-ts"><code>const statusProperty = this.sf.getProperty('/status')!;
statusProperty.schema.enum = ['1', '2', '3'];
statusProperty.widget.reset('2');
// Or manually trigger \`detectChanges\`
// statusProperty.widget.detectChanges();</code></pre><p>If just only update a element value, then:</p><pre class="hljs language-ts"><code>this.sf.getProperty('/name')?.setValue('new name');</code></pre><h2 id="Whycan'tverifyrequired"><a class="lake-link"><i data-anchor="Whycan'tverifyrequired"></i></a>Why can't verify <code>required</code></h2><p>Added <a target="_blank" href="https://ajv.js.org/options.html#strict-mode-options" data-url="https://ajv.js.org/options.html#strict-mode-options">strict</a> mode from Ajv 7.x, and the default is <code>true</code>, when the most basic <code>required</code> is not correct When verifying, the high probability is that the Schema contains information that does not conform to the Json Schema format. This can be verified through the <code>debug</code> mode:</p><pre class="hljs language-ts"><code>schema: SFSchema = {
   properties: {
     month: {
       type:'string',
       format:'month'
     }
   },
   required: ['month'],
   ui: {debug: true}
};</code></pre><p>Since the <code>format:'month'</code> here is not a Json Schema standard, you can get an error in the Console panel:</p><pre class="hljs language-null"><code>Error: unknown format "month" ignored in schema at path "#/properties/month"</code></pre><p>To solve this problem, you can only set <code>strict</code> to <code>false</code> through the global configuration:</p><pre class="hljs language-ts"><code>// src/app/global-config.module.ts
const alainConfig: AlainConfig = {
   sf: {
     ajv: {strict: false}
   }
};</code></pre><h2 id="Howtotoggleshoworhideanelement"><a class="lake-link"><i data-anchor="Howtotoggleshoworhideanelement"></i></a>How to toggle show or hide an element</h2><pre class="hljs language-ts"><code>this.sf.getProperty('/mobile')?.setVisible(status).widget.detectChanges();</code></pre></section>`,meta:{order:99,title:"FAQ",type:"Documents"},toc:[{id:"path",title:"path",h:2},{id:"Whysomecustomizedvalidationsarenotworkinginnon-realtimevalidation",title:"Why some customized validations are not working in non-realtime validation?",h:2},{id:"HowtouseSchemadynamically",title:"How to use Schema dynamically?",h:2},{id:"Whentousedefault",title:"When to use default?",h:2},{id:"HowtorefreshaspecificSchema",title:"How to refresh a specific Schema?",h:2},{id:"Whycan'tverifyrequired",title:"Why can't verify required",h:2},{id:"Howtotoggleshoworhideanelement",title:"How to toggle show or hide an element",h:2}]},"zh-CN":{content:`<section class="markdown"><h2 id="path"><a class="lake-link"><i data-anchor="path"></i></a>path</h2><p>\u6709\u8BB8\u591A\u65B9\u6CD5\u90FD\u9700\u8981\u4F20\u9012 <code>path</code> \u53C2\u6570\uFF0C\u5B83\u4F7F\u7528 <code>/</code> \u5206\u9694\u7B26\u6765\u8868\u793A\u8BBF\u95EE\u8868\u5355\u5BF9\u8C61\u8DEF\u5F84\uFF0C\u4F8B\u5982\u4E00\u4E2A JSON Schema \u793A\u4F8B\uFF1A</p><pre class="hljs language-ts"><code>schema: SFSchema = {
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
};</code></pre><p>\u4EE5\u4E0B <code>path</code> \u884C\u4E3A\u90FD\u6709\u6548\uFF1A</p><ul><li><p><code>/app</code></p></li><li><p><code>/user/name</code></p></li><li><p><code>/list/0/key</code> 0 \u8868\u793A\u6570\u7EC4\u7D22\u5F15</p></li></ul><p>\u4F7F\u7528 <code>/</code> \u5F00\u5934\u65F6\u8868\u793A\u4ECE\u6839\u8DEF\u5F84\u67E5\u627E\uFF0C\u53CD\u4E4B\u4ECE\u5F53\u524D\u8DEF\u5F84\u5411\u4E0B\u67E5\u627E\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u975E\u5B9E\u65F6\u6821\u9A8C\u90E8\u5206\u81EA\u5B9A\u4E49\u6821\u9A8C\u65E0\u6CD5\u751F\u6548\uFF1F"><a class="lake-link"><i data-anchor="\u4E3A\u4EC0\u4E48\u975E\u5B9E\u65F6\u6821\u9A8C\u90E8\u5206\u81EA\u5B9A\u4E49\u6821\u9A8C\u65E0\u6CD5\u751F\u6548\uFF1F"></i></a>\u4E3A\u4EC0\u4E48\u975E\u5B9E\u65F6\u6821\u9A8C\u90E8\u5206\u81EA\u5B9A\u4E49\u6821\u9A8C\u65E0\u6CD5\u751F\u6548\uFF1F</h2><p>\u7531\u4E8E\u975E\u5B9E\u65F6\u6821\u9A8C\uFF08\u8BBE\u7F6E <code>liveValidate:false</code>\uFF09\u4E0D\u4F1A\u91CD\u65B0\u5BF9\u6BCF\u4E2A\u5143\u7D20\u6267\u884C\u4E00\u6B21\u6821\u9A8C\uFF0C\u867D\u7136\u80FD\u505A\u5230\uFF0C\u4F46\u81EA\u5B9A\u4E49\u6821\u9A8C\u6709\u53EF\u80FD\u5B58\u5728\u5F02\u6B65\uFF0C\u65E0\u6CD5\u4FDD\u8BC1\u6267\u884C\u7684\u987A\u5E8F\uFF0C\u56E0\u6B64\u975E\u5B9E\u65F6\u6821\u9A8C\u5B9E\u9645\u53EA\u5BF9 JSON Schema \u672C\u8EAB\u7684\u6821\u9A8C\u3002</p><h2 id="\u5982\u4F55\u52A8\u6001\u4F7F\u7528Schema\uFF1F"><a class="lake-link"><i data-anchor="\u5982\u4F55\u52A8\u6001\u4F7F\u7528Schema\uFF1F"></i></a>\u5982\u4F55\u52A8\u6001\u4F7F\u7528 Schema\uFF1F</h2><p>\u4E00\u822C\u5206\u4E3A\u4E24\u79CD\u60C5\u5F62\uFF1A</p><p><strong>1\u3001Schema \u5B9A\u4E49\u540E\u53EF\u80FD\u53D7\u9650\u4E8E\u67D0\u4E2A\u6570\u636E\u6765\u81EA\u8FDC\u7A0B</strong></p><pre class="hljs language-ts"><code>@ViewChild('sf', { static: false }) sf: SFComponent;
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
}</code></pre><p><strong>2\u3001\u8FDC\u7A0B Schema</strong></p><pre class="hljs language-ts"><code>schema: SFSchema = {
  properties: {}
};

ngOnInit() {
  this.http.get('/schema').subscribe(res => this.sf.refreshSchema(res));
}</code></pre><h2 id="\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528default\uFF1F"><a class="lake-link"><i data-anchor="\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528default\uFF1F"></i></a>\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528 <code>default</code>\uFF1F</h2><p>Schema \u7684 <code>default</code> \u7528\u4E8E\u8BBE\u7F6E\u521D\u59CB\u5316\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u5F53\u4FEE\u6539\u8868\u5355\u65F6\u662F\u9700\u8981\u63D0\u4F9B <code>formData</code> \u53C2\u6570\uFF0C\u4F46\u5BF9\u4E8E\u589E\u52A0\u8868\u5355\u6765\u8BF4\uFF0C\u5E94\u8BE5\u4F9D\u9760 <code>default</code> \u63D0\u4F9B\u4E00\u4E2A\u66F4\u53CB\u597D\u7684\u8868\u5355\u7ED9\u7528\u6237\u3002</p><h2 id="\u5982\u4F55\u5237\u65B0\u7279\u5B9ASchema\uFF1F"><a class="lake-link"><i data-anchor="\u5982\u4F55\u5237\u65B0\u7279\u5B9ASchema\uFF1F"></i></a>\u5982\u4F55\u5237\u65B0\u7279\u5B9A Schema\uFF1F</h2><p>\u53EF\u4EE5\u901A\u8FC7 <code>getProperty</code> \u65B9\u6CD5\u6765\u83B7\u53D6\u67D0\u4E2A Schema \u7684\u5C5E\u6027\uFF0C\u5176\u5C5E\u6027\u5305\u542B Schema \u6570\u636E\u4EE5\u53CA Ui \u6570\u636E\uFF0C\u53EF\u4EE5\u4FEE\u6539\u8FD9\u4E9B\u6570\u636E\uFF0C\u5E76\u91CD\u65B0\u8C03\u7528\u5C0F\u90E8\u4EF6\u7684 <code>reset</code> \u65B9\u6CD5\u91CD\u65B0\u6E32\u67D3\u8BE5 Schema\uFF0C\u4F8B\u5982\uFF1A</p><pre class="hljs language-ts"><code>const statusProperty = this.sf.getProperty('/status')!;
statusProperty.schema.enum = ['1', '2', '3'];
statusProperty.widget.reset('2');
// \u6216\u624B\u52A8\u89E6\u53D1 \`detectChanges\`
// statusProperty.widget.detectChanges();</code></pre><p>\u5982\u679C\u5355\u7EAF\u66F4\u65B0\u67D0\u4E2A\u5143\u7D20\u6570\u636E\uFF0C\u5219\uFF1A</p><pre class="hljs language-ts"><code>this.sf.getProperty('/name')?.setValue('new name');</code></pre><h2 id="\u4E3A\u4EC0\u4E48\u65E0\u6CD5\u6821\u9A8Crequired"><a class="lake-link"><i data-anchor="\u4E3A\u4EC0\u4E48\u65E0\u6CD5\u6821\u9A8Crequired"></i></a>\u4E3A\u4EC0\u4E48\u65E0\u6CD5\u6821\u9A8C <code>required</code></h2><p>\u4ECE Ajv 7.x \u65B0\u589E <a target="_blank" href="https://ajv.js.org/options.html#strict-mode-options" data-url="https://ajv.js.org/options.html#strict-mode-options">strict</a> \u6A21\u5F0F\uFF0C\u5E76\u4E14\u9ED8\u8BA4\u4E3A <code>true</code>\uFF0C\u5F53\u6700\u57FA\u672C\u7684 <code>required</code> \u90FD\u65E0\u6CD5\u6B63\u786E\u6821\u9A8C\u65F6\uFF0C\u90A3\u5927\u6982\u7387\u5C31\u662F\u56E0\u4E3A Schema \u5305\u542B\u4E86\u4E0D\u7B26\u5408 Json Schema \u683C\u5F0F\u7684\u4FE1\u606F\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>debug</code> \u6A21\u5F0F\u9A8C\u8BC1\u8FD9\u4E00\u70B9\uFF1A</p><pre class="hljs language-ts"><code>schema: SFSchema = {
  properties: {
    month: {
      type: 'string',
      format: 'month'
    }
  },
  required: ['month'],
  ui: { debug: true }
};</code></pre><p>\u7531\u4E8E\u8FD9\u91CC\u7684 <code>format: 'month'</code> \u5E76\u4E0D\u662F Json Schema \u6807\u51C6\uFF0C\u56E0\u6B64\uFF0C\u4F60\u53EF\u4EE5\u5728 Console \u9762\u677F\u5F97\u5230\u9519\u8BEF\uFF1A</p><pre class="hljs language-null"><code>Error: unknown format "month" ignored in schema at path "#/properties/month"</code></pre><p>\u89E3\u51B3\u8FD9\u4E00\u95EE\u9898\uFF0C\u53EA\u80FD\u901A\u8FC7\u5168\u5C40\u914D\u7F6E\u8BBE\u7F6E <code>strict</code> \u4E3A <code>false</code>\uFF1A</p><pre class="hljs language-ts"><code>// src/app/global-config.module.ts
const alainConfig: AlainConfig = {
  sf: {
    ajv: { strict: false }
  }
};</code></pre><h2 id="\u5982\u4F55\u5207\u6362\u663E\u793A\u6216\u9690\u85CF\u67D0\u5143\u7D20"><a class="lake-link"><i data-anchor="\u5982\u4F55\u5207\u6362\u663E\u793A\u6216\u9690\u85CF\u67D0\u5143\u7D20"></i></a>\u5982\u4F55\u5207\u6362\u663E\u793A\u6216\u9690\u85CF\u67D0\u5143\u7D20</h2><pre class="hljs language-ts"><code>this.sf.getProperty('/mobile')?.setVisible(status).widget.detectChanges();</code></pre></section>`,meta:{order:99,title:"\u5E38\u89C1\u95EE\u9898",type:"Documents"},toc:[{id:"path",title:"path",h:2},{id:"\u4E3A\u4EC0\u4E48\u975E\u5B9E\u65F6\u6821\u9A8C\u90E8\u5206\u81EA\u5B9A\u4E49\u6821\u9A8C\u65E0\u6CD5\u751F\u6548\uFF1F",title:"\u4E3A\u4EC0\u4E48\u975E\u5B9E\u65F6\u6821\u9A8C\u90E8\u5206\u81EA\u5B9A\u4E49\u6821\u9A8C\u65E0\u6CD5\u751F\u6548\uFF1F",h:2},{id:"\u5982\u4F55\u52A8\u6001\u4F7F\u7528Schema\uFF1F",title:"\u5982\u4F55\u52A8\u6001\u4F7F\u7528 Schema\uFF1F",h:2},{id:"\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528default\uFF1F",title:"\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528 default\uFF1F",h:2},{id:"\u5982\u4F55\u5237\u65B0\u7279\u5B9ASchema\uFF1F",title:"\u5982\u4F55\u5237\u65B0\u7279\u5B9A Schema\uFF1F",h:2},{id:"\u4E3A\u4EC0\u4E48\u65E0\u6CD5\u6821\u9A8Crequired",title:"\u4E3A\u4EC0\u4E48\u65E0\u6CD5\u6821\u9A8C required",h:2},{id:"\u5982\u4F55\u5207\u6362\u663E\u793A\u6216\u9690\u85CF\u67D0\u5143\u7D20",title:"\u5982\u4F55\u5207\u6362\u663E\u793A\u6216\u9690\u85CF\u67D0\u5143\u7D20",h:2}]}},demo:!1},this.codes=[]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-qa"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:1,vars:2,consts:[[3,"codes","item"]],template:function(t,d){t&1&&p(0,"app-docs",0),t&2&&a("codes",d.codes)("item",d.item)},dependencies:[k],encapsulation:2});let n=e;return n})();var Dt=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/docs/schema.en-US.md","zh-CN":"packages/form/docs/schema.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><h2 id="Prologue"><a class="lake-link"><i data-anchor="Prologue"></i></a>Prologue</h2><p><a target="_blank" href="http://json-schema.org/" data-url="http://json-schema.org/">JSON Schema</a> is a specification to define JSON data structure, it doesn't include detailed explanation about how to convert the specification to specific forms, <code>@delon/form</code> is a dynamic form library developed based on our own understanding of JSON Schema and current data input components of <code>ng-zorro-antd</code>.</p><p>JSON Schema <strong>must always</strong> have a type <code>type="object"</code> as <strong>root node</strong>\uFF0Ctherefore a simplest Schema structure at least is:</p><pre class="hljs language-ts"><code>schema = {
  type: 'object', // optional, set to \`object\` by default
  properties: {}
}</code></pre><p>Ahead of dscribing Schema, it is necessary to make a systematic description about the relationship between form elements and Schema.</p><p>As we know, form is a set of HTML elements, every element maps to one Schema property, a property has it's own data type, format, visual information, etc., but this is not enough to describe the rich APIs provided by <code>ng-zorro-antd</code>. In order to better use these APIs, <code>@delon/form</code> not only implemented most standard JSON Schema, but also added an additional property <code>ui</code>, which is used to describe how to render the property.</p><h3 id="NonPollution"><a class="lake-link"><i data-anchor="NonPollution"></i></a>Non Pollution</h3><p>Of course, you can set <code>&lt;sf [ui]="ui"></code> to add additional UI rendering if you have strict requirement about standard, or JSON Schema data is generated from backend. For example:</p><pre class="hljs language-ts"><code>schema = {
  properties: {
    url: {
      type: 'string',
      title: 'Web Site'
    }
  }
}</code></pre><p>A URL property, the pure JSON Schema structure cann't describe about adding prefix <code>https://</code>, but <code>nz-input</code> supports very rich prefix and postfix texts, so we can customize it in <code>ui</code> to add prefix <code>https://</code>:</p><pre class="hljs language-ts"><code>ui = {
  $url: {
    addOnBefore: 'https://'
  }
}</code></pre><p><code>ui</code> itself is a JSON structure, in order to distinguish with relationship of JSON Schema property, <strong>must</strong> add prefix <code>$</code> to all properties; must replace array elements with <code>$items</code>. When KEY is <code>*</code>, it is valid for all properties.</p><h3 id="RelationshipbetweenFormandDataStructure"><a class="lake-link"><i data-anchor="RelationshipbetweenFormandDataStructure"></i></a>Relationship between Form and Data Structure</h3><p>We think a complete form should include some of following elements:</p><p><img src="./assets/img/form-input.png" /></p><p>Description from left to right:</p><table><thead><tr><th>Structure Source</th><th>Parameter</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td>Schema</td><td><code>[required]</code></td><td>If required</td><td><code>string[]</code></td><td>-</td></tr><tr><td>Schema</td><td><code>[title]</code></td><td>Title</td><td><code>string</code></td><td>-</td></tr><tr><td>ui</td><td><code>[optional]</code></td><td>Optional information</td><td><code>string</code></td><td>-</td></tr><tr><td>ui</td><td><code>[optionalHelp]</code></td><td>Optional help information</td><td><code>string, SFOptionalHelp</code></td><td>-</td></tr><tr><td>ui</td><td><code>[placeholder]</code></td><td>Placeholder</td><td><code>string</code></td><td>-</td></tr><tr><td>Schema</td><td><code>[description]</code></td><td>Description for the property</td><td><code>string</code></td><td>-</td></tr><tr><td>-</td><td><code>[error]</code></td><td>Error information</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="SomeSpecifications"><a class="lake-link"><i data-anchor="SomeSpecifications"></i></a>Some Specifications</h3><ul><li><p>Following camelCase to name <code>key</code></p></li><li><p>You can ignore description marked as <strong>Not recommended</strong> if you are very familiar with JSON Schema.</p></li></ul><h2 id="JSONSchema\uFF08SFSchema\uFF09"><a class="lake-link"><i data-anchor="JSONSchema\uFF08SFSchema\uFF09"></i></a>JSON Schema\uFF08SFSchema\uFF09</h2><p>JSON Schema has complete specification descrbes for each property, <code>@delon/form</code> is currently based on specification <a target="_blank" href="http://json-schema.org/" data-url="http://json-schema.org/">draft-07</a>, following is the detailed explanation of specification:</p><h3 id="CommonType"><a class="lake-link"><i data-anchor="CommonType"></i></a>Common Type</h3><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>Data type, support JavaScript basic types</td><td><code>number,string,boolean,object,array</code></td><td><code>object</code></td></tr><tr><td><code>[enum]</code></td><td>Enum, static data source</td><td><code>SFSchemaEnumType[]</code></td><td>-</td></tr></tbody></table><h3 id="ValueType"><a class="lake-link"><i data-anchor="ValueType"></i></a>Value Type</h3><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td><code>[minimum]</code></td><td>Minimum value</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[exclusiveMinimum]</code></td><td>If excluding <code>minimum</code> value</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[maximum]</code></td><td>Maximum value</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[exclusiveMaximum]</code></td><td>If excluding <code>maximum</code> value</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[multipleOf]</code></td><td>Multiple</td><td><code>number</code></td><td>-</td></tr></tbody></table><p><strong>About exclusiveMinimum and exclusiveMaximum</strong></p><p>The implementation mechanism of <code>sf</code> causes that it couldn't handle error capturing for <code>type</code> perpectly, therefore <code>sf</code> ignores all <code>type</code> (see <a target="_blank" href="https://github.com/ng-alain/delon/blob/master/packages/form/src/config.ts#L12" data-url="https://github.com/ng-alain/delon/blob/master/packages/form/src/config.ts#L12">config.ts</a>) errors by default, these two kinds of errors are considered as <code>type</code> error, which will trigger invalid check. (find more details from <a target="_blank" href="https://github.com/ng-alain/ng-alain/issues/676#issuecomment-420208459" data-url="https://github.com/ng-alain/ng-alain/issues/676#issuecomment-420208459">#676</a>\uFF09</p><h3 id="StringType"><a class="lake-link"><i data-anchor="StringType"></i></a>String Type</h3><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td><code>[maxLength]</code></td><td>Maximum length of string</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[minLength]</code></td><td>Minimum length of string</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[pattern]</code></td><td>Regular expression</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="ArrayType"><a class="lake-link"><i data-anchor="ArrayType"></i></a>Array Type</h3><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td><code>[items]</code></td><td>Array element description, only support array object. Can use other components if array of basic type is needed</td><td><code>SFSchema</code></td><td>-</td></tr><tr><td><code>[minItems]</code></td><td>Minimum number of element in array</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[maxItems]</code></td><td>Maximum number of element in array</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[uniqueItems]</code></td><td>Element is unique in array</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[additionalItems]</code></td><td>additional validation rules for array</td><td><code>SFSchema</code></td><td>-</td></tr></tbody></table><h3 id="ObjectType"><a class="lake-link"><i data-anchor="ObjectType"></i></a>Object Type</h3><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td><code>[maxProperties]</code></td><td>Maximum number of property, must be a nonnegative integer</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[minProperties]</code></td><td>Maximum number of property, must be a nonnegative integer</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[required]</code></td><td>If required</td><td><code>string[]</code></td><td>-</td></tr><tr><td><code>[properties]</code></td><td>Propery definition</td><td><code>{ [key: string]: SFSchema }</code></td><td>-</td></tr></tbody></table><h3 id="ConditionType"><a class="lake-link"><i data-anchor="ConditionType"></i></a>Condition Type</h3><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td><code>[if]</code></td><td>Condition validation</td><td><code>SFSchema</code></td><td>-</td></tr><tr><td><code>[then]</code></td><td>Condition validation</td><td><code>SFSchema</code></td><td>-</td></tr><tr><td><code>[else]</code></td><td>Condition validation</td><td><code>SFSchema</code></td><td>-</td></tr></tbody></table><p>Validation of condition check is very strong and rich, but considering it breaks UI and adds complexity to component build, <code>@delon/form</code> only implements <code>required</code>, and uses it to determine if need validation, for example, a login page, it can show different login mode based on different login methods:</p><pre class="hljs language-ts"><code>schema: SFSchema = {
  properties: {
    type: { type: 'string', enum: [ 'mobile', 'name' ], default: 'mobile' },
    name: { type: 'string' },
    pwd: { type: 'string' },
    mobile: { type: 'string' },
    code: { type: 'string' }
  },
  required: [ 'type' ],
  if: {
    properties: { type: { enum: [ 'mobile' ] } }
  },
  then: {
    required: [ 'mobile', 'code' ]
  },
  else: {
    required: [ 'name', 'pwd' ]
  }
};</code></pre><p>For above configuraion, eventual behavior is showing <code>mobile</code> and <code>code</code> in UI when login method is <code>mobile</code>, otherwise, showing <code>name</code> and <code>pwd</code>.</p><p>Actually, condition type is eventually parsed to <code>ui.visibleIf</code>, Convert it to the following:</p><pre class="hljs language-ts"><code>{
  properties: {
    login_type: {
      type: "string",
      title: "\u767B\u5F55\u65B9\u5F0F",
      enum: [
        { label: "\u624B\u673A", value: "mobile" },
        { label: "\u8D26\u5BC6", value: "account" }
      ],
      default: "mobile",
      ui: {
        widget: "radio",
        styleType: "button"
      }
    },
    mobile: {
      type: "string",
      ui: {
        visibleIf: {
          login_type: val => val === "mobile"
        }
      }
    },
    code: {
      type: "number",
      ui: {
        visibleIf: {
          login_type: val => val === "mobile"
        }
      }
    },
    name: {
      type: "string",
      ui: {
        visibleIf: {
          login_type: val => val === "account"
        }
      }
    },
    pwd: {
      type: "string",
      ui: {
        type: "password",
        visibleIf: {
          login_type: val => val === "account"
        }
      }
    }
  },
  required: ["login_type"]
};</code></pre><h3 id="LogicType"><a class="lake-link"><i data-anchor="LogicType"></i></a>Logic Type</h3><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td><code>[allOf]</code></td><td><strong>Not recommended</strong>, can be replaced by <code>required</code></td><td><code>SFSchema[]</code></td><td>-</td></tr><tr><td><code>[anyOf]</code></td><td><strong>Not recommended</strong>, can be replaced by <code>required</code> and <code>minProperties</code></td><td><code>SFSchema[]</code></td><td>-</td></tr><tr><td><code>[oneOf]</code></td><td><strong>Not recommended</strong>, value must be one of</td><td><code>SFSchema[]</code></td><td>-</td></tr></tbody></table><blockquote><p><strong>Not recommended</strong>, mainly because there is no UI handle for logic type, it's similar to condition type, will affect UI rendering.</p></blockquote><h3 id="FormatandVisualType"><a class="lake-link"><i data-anchor="FormatandVisualType"></i></a>Format and Visual Type</h3><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>Title</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[description]</code></td><td>Description</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[default]</code></td><td>Default value</td><td><code>any</code></td><td>-</td></tr><tr><td><code>[readOnly]</code></td><td>If read only, equals to <code>nzDisabled</code></td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[format]</code></td><td>Data format, <a target="_blank" href="http://json-schema.org/latest/json-schema-validation.html#rfc.section.7.3" data-url="http://json-schema.org/latest/json-schema-validation.html#rfc.section.7.3">Doc</a></td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="Other"><a class="lake-link"><i data-anchor="Other"></i></a>Other</h3><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td><code>[definitions]</code></td><td>Internal definition</td><td><code>SFSchemaDefinition</code></td><td>-</td></tr><tr><td><code>[$ref]</code></td><td>Reference definition</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[$comment]</code></td><td>Comment for developer, no real meaning, won't be validated</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="NonStandard"><a class="lake-link"><i data-anchor="NonStandard"></i></a>Non Standard</h3><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td><code>[ui]</code></td><td>UI configuration, has more priority than <code>ui</code> property of <code>sf</code> component</td><td><code>SFUISchemaItem</code></td><td>-</td></tr></tbody></table><h2 id="UI\uFF08SFUISchemaItem\uFF09"><a class="lake-link"><i data-anchor="UI\uFF08SFUISchemaItem\uFF09"></i></a>UI\uFF08SFUISchemaItem\uFF09</h2><p>UI Schema structure is composed by commonality and widgets, following is descriptioin of commonality part, please refer to widget API for widget part.</p><blockquote><p>In order to keep integrity of API, Schema of widget may includes commonality information.</p></blockquote><h3 id="SFUISchema"><a class="lake-link"><i data-anchor="SFUISchema"></i></a>SFUISchema</h3><p>Equals to <code>&lt;sf [ui]="ui"></code>, a group of UI structure corresponds to JSON Schema structure, type is: <code>[ key: string ]: SFUISchemaItem</code>\u3002</p><h3 id="BasicType"><a class="lake-link"><i data-anchor="BasicType"></i></a>Basic Type</h3><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td><code>[debug]</code></td><td>Debug mode</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[order]</code></td><td>Order of property</td><td><code>string[]</code></td><td>-</td></tr><tr><td><code>[asyncData]</code></td><td>Asynchronized static data source</td><td><code>(input?: any) => Observable&lt;SFSchemaEnumType[]></code></td><td>-</td></tr><tr><td><code>[hidden]</code></td><td>Whether to hide</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[visibleIf]</code></td><td>Is visible with conditions</td><td><code>{ [key: string]: any[] | ((value: any, property: FormProperty) => boolean) }</code></td><td>-</td></tr><tr><td><code>[visibleIfLogical]</code></td><td>The logical used when specifying multiple <code>visibleIf</code></td><td><code>or, and</code></td><td><code>or</code></td></tr><tr><td><code>[acl]</code></td><td>ACL permission (Use <code>can()</code> verify)</td><td><code>ACLCanType</code></td><td>-</td></tr></tbody></table><p><strong>visibleIf</strong></p><p>Is visible with conditions, for example:</p><ul><li><p><code>visibleIf: { shown: [ true ] }</code>: show current property when <code>shown: true</code></p></li><li><p><code>visibleIf: { shown: [ '$ANY$' ] }</code>: show current property when <code>shown</code> is any value</p></li><li><p><code>visibleIf: { shown: (value: any, property: FormProperty) => value > 0 }</code>: complex expression</p></li></ul><h3 id="ValidationType"><a class="lake-link"><i data-anchor="ValidationType"></i></a>Validation Type</h3><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td><code>[liveValidate]</code></td><td>If realtime validation</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[firstVisual]</code></td><td>If show visual error immediately</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[onlyVisual]</code></td><td>If only show visiual error not error text</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[ingoreKeywords]</code></td><td>Ignore validation for some data types</td><td><code>string[]</code></td><td></td></tr><tr><td><code>[errors]</code></td><td>Customized error text</td><td><code>{ [ key: string ]: string | ((obj: ErrorData) => string) }</code></td><td>-</td></tr><tr><td><code>[showRequired]</code></td><td>Whether to display the required logo *</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[validator]</code></td><td>Custom verification, the final result will be merged with Ajv verification results</td><td><code>(value: any, formProperty: FormProperty, form: PropertyGroup) => ErrorData[]</code></td><td>-</td></tr></tbody></table><h3 id="ArrayType"><a class="lake-link"><i data-anchor="ArrayType"></i></a>Array Type</h3><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td><code>[items]</code></td><td>UI of specific sub element</td><td><code><a data-toc="SFUISchema">SFUISchema</a></code></td><td>-</td></tr><tr><td><code>[addTitle]</code></td><td>Add Title</td><td><code>string</code></td><td><code>Add</code></td></tr><tr><td><code>[addType]</code></td><td>Add button style, equals to  <code>nzType</code></td><td><code>string</code></td><td><code>dashed</code></td></tr><tr><td><code>[removable]</code></td><td>If show remove button</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[removeTitle]</code></td><td>Text of remove button</td><td><code>string</code></td><td><code>Remove</code></td></tr></tbody></table><h3 id="FormElementType"><a class="lake-link"><i data-anchor="FormElementType"></i></a>Form Element Type</h3><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td><code>[type]</code></td><td><code>type</code> of <code>input</code></td><td><code>string</code></td><td><code>text</code></td></tr><tr><td><code>[placeholder]</code></td><td>placeholder</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[autofocus]</code></td><td>If auto focus during loading</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="RenderType"><a class="lake-link"><i data-anchor="RenderType"></i></a>Render Type</h3><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td><code>[widget]</code></td><td>Widget</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[i18n]</code></td><td>Refers to the i18n key of <code>schema.title</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[descriptionI18n]</code></td><td>Refers to the i18n key of <code>schema.description</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[class]</code></td><td>Customized class, equals to <code>[ngClass]</code></td><td><code>string,string[]</code></td><td>-</td></tr><tr><td><code>[width]</code></td><td>Width, unit: <code>px</code></td><td><code>number</code></td><td>-</td></tr><tr><td><code>[size]</code></td><td>Size of element</td><td><code>default,large,small</code></td><td>-</td></tr><tr><td><code>[grid]</code></td><td>Property for responsive</td><td><code>SFGridSchema</code></td><td>-</td></tr><tr><td><code>[optional]</code></td><td>Optional</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[optionalHelp]</code></td><td>Optional help</td><td><code>string, SFOptionalHelp</code></td><td>-</td></tr></tbody></table><h3 id="ResponsivePropertySFGridSchema"><a class="lake-link"><i data-anchor="ResponsivePropertySFGridSchema"></i></a>Responsive Property SFGridSchema</h3><p><code>grid</code> equals to complete <a target="_blank" href="https://ng.ant.design/components/grid/en" data-url="https://ng.ant.design/components/grid/en">Grid</a>, can determine how to render the form by <code>grid</code></p><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td><code>[gutter]</code></td><td>Gutter</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[span]</code></td><td>Number of column for each element, <code>0</code> means <code>display: none</code></td><td><code>number</code></td><td>-</td></tr><tr><td><code>[xs]</code></td><td><code>&lt;768px</code> responsive grid, can be number of columns or including object of other properties</td><td><code>number, SFGridSizeSchema</code></td><td>-</td></tr><tr><td><code>[sm]</code></td><td><code>\u2265768px</code> responsive grid, can be number of columns or including object of other properties</td><td><code>number, SFGridSizeSchema</code></td><td>-</td></tr><tr><td><code>[md]</code></td><td><code>\u2265992px</code> responsive grid, can be number of columns or including object of other properties</td><td><code>number, SFGridSizeSchema</code></td><td>-</td></tr><tr><td><code>[lg]</code></td><td><code>\u22651200px</code> responsive grid, can be number of columns or including object of other properties</td><td><code>number, SFGridSizeSchema</code></td><td>-</td></tr><tr><td><code>[xl]</code></td><td><code>\u22651600px</code> responsive grid, can be number of columns or including object of other properties</td><td><code>number, SFGridSizeSchema</code></td><td>-</td></tr><tr><td><code>[xxl]</code></td><td>Reserved field, support after version <code>0.7.0</code></td><td><code>number, SFGridSizeSchema</code></td><td>-</td></tr></tbody></table><h3 id="HorizontalLayoutType"><a class="lake-link"><i data-anchor="HorizontalLayoutType"></i></a>Horizontal Layout Type</h3><blockquote><p>The sum of label and control <strong>must</strong> be <code>24</code></p></blockquote><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td><code>[spanLabel]</code></td><td>Number of column for <code>label</code></td><td><code>number</code></td><td>5</td></tr><tr><td><code>[spanControl]</code></td><td>Number of column for form element</td><td><code>number</code></td><td>19</td></tr><tr><td><code>[offsetControl]</code></td><td>Number of column for left side of <code>control</code></td><td><code>number</code></td><td>-</td></tr><tr><td><code>[spanLabelFixed]</code></td><td>Fixed width for <code>label</code></td><td><code>number</code></td><td>-</td></tr></tbody></table></section>`,meta:{order:2,title:"Schema",type:"Documents"},toc:[{id:"Prologue",title:"Prologue",h:2,children:[{id:"NonPollution",title:"Non Pollution",h:3},{id:"RelationshipbetweenFormandDataStructure",title:"Relationship between Form and Data Structure",h:3},{id:"SomeSpecifications",title:"Some Specifications",h:3}]},{id:"JSONSchema\uFF08SFSchema\uFF09",title:"JSON Schema\uFF08SFSchema\uFF09",h:2,children:[{id:"CommonType",title:"Common Type",h:3},{id:"ValueType",title:"Value Type",h:3},{id:"StringType",title:"String Type",h:3},{id:"ArrayType",title:"Array Type",h:3},{id:"ObjectType",title:"Object Type",h:3},{id:"ConditionType",title:"Condition Type",h:3},{id:"LogicType",title:"Logic Type",h:3},{id:"FormatandVisualType",title:"Format and Visual Type",h:3},{id:"Other",title:"Other",h:3},{id:"NonStandard",title:"Non Standard",h:3}]},{id:"UI\uFF08SFUISchemaItem\uFF09",title:"UI\uFF08SFUISchemaItem\uFF09",h:2,children:[{id:"SFUISchema",title:"SFUISchema",h:3},{id:"BasicType",title:"Basic Type",h:3},{id:"ValidationType",title:"Validation Type",h:3},{id:"ArrayType",title:"Array Type",h:3},{id:"FormElementType",title:"Form Element Type",h:3},{id:"RenderType",title:"Render Type",h:3},{id:"ResponsivePropertySFGridSchema",title:"Responsive Property SFGridSchema",h:3},{id:"HorizontalLayoutType",title:"Horizontal Layout Type",h:3}]}]},"zh-CN":{content:`<section class="markdown"><h2 id="\u5199\u5728\u524D\u9762"><a class="lake-link"><i data-anchor="\u5199\u5728\u524D\u9762"></i></a>\u5199\u5728\u524D\u9762</h2><p><a target="_blank" href="http://json-schema.org/" data-url="http://json-schema.org/">JSON Schema</a> \u662F\u4E00\u79CD\u6807\u51C6\u7684\u5B9A\u4E49 JSON \u6570\u636E\u7ED3\u6784\u7684\u89C4\u8303\uFF0C\u5E76\u4E0D\u5305\u542B\u5BF9\u8FD9\u4E9B\u89C4\u8303\u8F6C\u6362\u6210\u8868\u5355\u5177\u4F53\u8BF4\u660E\uFF0C<code>@delon/form</code> \u4E5F\u662F\u6839\u636E\u81EA\u5DF1\u7684\u7406\u89E3\u5E76\u7ED3\u5408 <code>ng-zorro-antd</code> \u73B0\u6709\u6570\u636E\u5F55\u5165\u7EC4\u4EF6\u5E93\u4EA7\u751F\u7684\u52A8\u6001\u6784\u5EFA\u8868\u5355\u7C7B\u5E93\u3002</p><p>JSON Schema <strong>\u59CB\u7EC8</strong>\u90FD\u5FC5\u987B\u6709\u4E00\u4E2A\u7C7B\u578B\u4E3A <code>type="object"</code> \u4F5C\u4E3A<strong>\u6839\u8282\u70B9</strong>\uFF0C\u56E0\u6B64\u4E00\u4E2A\u6700\u7B80\u5355\u7684 Schema \u7ED3\u6784\u81F3\u5C11\u662F\uFF1A</p><pre class="hljs language-ts"><code>schema = {
  type: 'object', // \u53EF\u6709\u53EF\u65E0\uFF0C\u9ED8\u8BA4\u4F1A\u5F3A\u5236\u4E3A \`object\`
  properties: {}
}</code></pre><p>\u5728\u63CF\u8FF0 Schema \u8BF4\u660E\u4E4B\u524D\uFF0C\u6709\u5FC5\u8981\u5BF9\u8868\u5355\u5143\u7D20\u4E0E Schema \u4E4B\u524D\u7684\u8054\u7CFB\u505A\u4E00\u4E2A\u7CFB\u7EDF\u6027\u8BF4\u660E\u3002</p><p>\u6211\u4EEC\u77E5\u9053\uFF0C\u8868\u5355\u662F\u7531\u4E00\u7EC4HTML\u5143\u7D20\u7EC4\u4EF6\uFF0C\u6BCF\u4E00\u4E2A\u5143\u7D20\u5BF9\u5E94\u4E00\u4E2A Schema \u5C5E\u6027\uFF0C\u5C5E\u6027\u6709\u81EA\u5DF1\u7684\u6570\u636E\u7C7B\u578B\u3001\u683C\u5F0F\u4FE1\u606F\u3001\u89C6\u89C9\u4FE1\u606F\u7B49\uFF0C\u4F46\u8FD9\u4E9B\u4FE1\u606F\u4E0D\u8DB3\u4EE5\u8868\u8FF0 <code>ng-zorro-antd</code> \u6240\u63D0\u4F9B\u7684\u4E30\u5BCCAPI\u63A5\u53E3\u3002\u4E3A\u4E86\u66F4\u597D\u5229\u7528\u8FD9\u4E9BAPI\u63A5\u53E3\uFF0C<code>@delon/form</code> \u9664\u4E86\u5B9E\u73B0\u7EDD\u5927\u90E8\u5206 JSON Schema \u6807\u51C6\u4EE5\u5916\uFF0C\u989D\u5916\u552F\u4E00\u589E\u52A0\u4E86\u4E00\u4E2A <code>ui</code> \u5C5E\u6027\u7528\u4E8E\u8868\u8FF0\u5C5E\u6027\u5982\u4F55\u6E32\u67D3\u7684\u95EE\u9898\u3002</p><h3 id="\u65E0\u6C61\u67D3"><a class="lake-link"><i data-anchor="\u65E0\u6C61\u67D3"></i></a>\u65E0\u6C61\u67D3</h3><p>\u5F53\u7136\u82E5\u4F60\u5BF9\u6807\u51C6\u6709\u975E\u5E38\u4E25\u683C\uFF0C\u6216\u8005 JSON Schema \u6570\u636E\u7ED3\u6784\u662F\u6765\u81EA\u540E\u7AEF\u7684\u4EA7\u751F\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>&lt;sf [ui]="ui"></code> \u6765\u989D\u5916\u5BF9\u5F53\u524D JSON Schema \u6DFB\u52A0 UI \u6E32\u67D3\u3002\u4F8B\u5982\uFF1A</p><pre class="hljs language-ts"><code>schema = {
  properties: {
    url: {
      type: 'string',
      title: 'Web Site'
    }
  }
}</code></pre><p>\u4E00\u4E2AURL\u5C5E\u6027\uFF0C\u82E5\u6211\u4EEC\u4E0D\u5E0C\u671B\u7528\u4E8E\u6DFB\u52A0 <code>https://</code> \u524D\u7F00\u7684\u60C5\u51B5\u4E0B\uFF0C\u5C31\u5355\u7EAF\u7684 JSON Schema \u7ED3\u6784\u662F\u65E0\u6CD5\u8868\u8FF0\uFF0C\u800C <code>nz-input</code> \u53C8\u652F\u6301\u975E\u5E38\u4E30\u5BCC\u7684\u524D\u540E\u7F00\u6587\u672C\uFF0C\u5219\u6211\u4EEC\u53EF\u4EE5\u4E3A <code>ui</code> \u5B9A\u5236\u5E76\u589E\u52A0 <code>https://</code> \u7684\u524D\u7F00\u6587\u672C\uFF1A</p><pre class="hljs language-ts"><code>ui = {
  $url: {
    addOnBefore: 'https://'
  }
}</code></pre><p>ui \u672C\u8EAB\u4E5F\u662F\u4E00\u4E2A JSON \u7ED3\u6784\uFF0C\u4E3A\u4E86\u533A\u5206 JSON Schema \u5C5E\u6027\u540D\u7684\u5BF9\u5E94\u5173\u7CFB\uFF0C<strong>\u5FC5\u987B</strong>\u7EDF\u4E00\u5BF9\u5C5E\u6027\u540D\u52A0\u4E0A <code>$</code> \u524D\u7F00\uFF1B\u5BF9\u4E8E\u6570\u7EC4\u7684\u5143\u7D20\u5BF9\u8C61\u5FC5\u987B\u4F7F\u7528 <code>$items</code> \u66FF\u4EE3\u3002\u5F53KEY\u4E3A <code>*</code> \u65F6\u8868\u793A\u5BF9\u6240\u6709\u5B50\u8868\u5355\u5143\u7D20\u90FD\u6709\u6548\u3002</p><h3 id="\u8868\u5355\u5143\u7D20\u4E0E\u6570\u636E\u7ED3\u6784\u7684\u5BF9\u5E94\u5173\u7CFB"><a class="lake-link"><i data-anchor="\u8868\u5355\u5143\u7D20\u4E0E\u6570\u636E\u7ED3\u6784\u7684\u5BF9\u5E94\u5173\u7CFB"></i></a>\u8868\u5355\u5143\u7D20\u4E0E\u6570\u636E\u7ED3\u6784\u7684\u5BF9\u5E94\u5173\u7CFB</h3><p>\u4E00\u4E2A\u5B8C\u6574\u7684\u8868\u5355\u5143\u7D20\u6211\u4EEC\u8BA4\u4E3A\u5E94\u8BE5\u5305\u542B\u4EE5\u4E0B\u82E5\u5E72\u5143\u7D20\uFF1A</p><p><img src="./assets/img/form-input.png" /></p><p>\u4ECE\u5DE6\u81F3\u5411\u5404\u5143\u7D20\u63CF\u8FF0\uFF1A</p><table><thead><tr><th>\u7ED3\u6784\u6E90</th><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>Schema</td><td><code>[required]</code></td><td>\u662F\u5426\u5FC5\u586B\u9879</td><td><code>string[]</code></td><td>-</td></tr><tr><td>Schema</td><td><code>[title]</code></td><td>\u5C5E\u6027\u63CF\u8FF0</td><td><code>string</code></td><td>-</td></tr><tr><td>ui</td><td><code>[optional]</code></td><td>\u6807\u7B7E\u53EF\u9009\u4FE1\u606F</td><td><code>string</code></td><td>-</td></tr><tr><td>ui</td><td><code>[optionalHelp]</code></td><td>\u6807\u7B7E\u53EF\u9009\u5E2E\u52A9</td><td><code>string, SFOptionalHelp</code></td><td>-</td></tr><tr><td>ui</td><td><code>[placeholder]</code></td><td>\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u4FE1\u606F</td><td><code>string</code></td><td>-</td></tr><tr><td>Schema</td><td><code>[description]</code></td><td>\u5C5E\u6027\u76EE\u7684\u6027\u89E3\u91CA</td><td><code>string</code></td><td>-</td></tr><tr><td>-</td><td><code>[error]</code></td><td>\u9519\u8BEF\u4FE1\u606F</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="\u4E00\u70B9\u89C4\u8303"><a class="lake-link"><i data-anchor="\u4E00\u70B9\u89C4\u8303"></i></a>\u4E00\u70B9\u89C4\u8303</h3><ul><li><p>\u6240\u6709 <code>key</code> \u6309\u9A7C\u5CF0\u5F0F\u547D\u540D\u6CD5</p></li><li><p>\u82E5\u4F60\u5BF9 JSON Schema \u5F88\u719F\u6089\uFF0C\u5219\u5FFD\u7565 <strong>\u4E0D\u5EFA\u8BAE</strong> \u5B57\u6837</p></li></ul><h2 id="JSONSchema\uFF08SFSchema\uFF09"><a class="lake-link"><i data-anchor="JSONSchema\uFF08SFSchema\uFF09"></i></a>JSON Schema\uFF08SFSchema\uFF09</h2><p>JSON Schema \u6709\u5B8C\u6574\u7684\u5BF9\u6BCF\u4E2A\u5C5E\u6027\u7684\u89C4\u8303\u63CF\u8FF0\uFF0C<code>@delon/form</code> \u5F53\u524D\u662F\u57FA\u4E8E <a target="_blank" href="http://json-schema.org/" data-url="http://json-schema.org/">draft-07</a> \u89C4\u8303\uFF0C\u4E0B\u5217\u662F\u89C4\u8303\u5177\u4F53\u8BF4\u660E\uFF1A</p><h3 id="\u5E38\u89C4\u7C7B"><a class="lake-link"><i data-anchor="\u5E38\u89C4\u7C7B"></i></a>\u5E38\u89C4\u7C7B</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>\u6570\u636E\u7C7B\u578B\uFF0C\u652F\u6301 JavaScript \u57FA\u7840\u7C7B\u578B</td><td><code>number,string,boolean,object,array</code></td><td><code>object</code></td></tr><tr><td><code>[enum]</code></td><td>\u679A\u4E3E\uFF0C\u9759\u6001\u6570\u636E\u6E90</td><td><code>SFSchemaEnumType[]</code></td><td>-</td></tr></tbody></table><h3 id="\u6570\u503C\u7C7B\u578B"><a class="lake-link"><i data-anchor="\u6570\u503C\u7C7B\u578B"></i></a>\u6570\u503C\u7C7B\u578B</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[minimum]</code></td><td>\u6700\u5C0F\u503C</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[exclusiveMinimum]</code></td><td>\u7EA6\u675F\u662F\u5426\u5305\u62EC <code>minimum</code> \u503C</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[maximum]</code></td><td>\u6700\u5927\u503C</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[exclusiveMaximum]</code></td><td>\u7EA6\u675F\u662F\u5426\u5305\u62EC <code>maximum</code> \u503C</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[multipleOf]</code></td><td>\u500D\u6570</td><td><code>number</code></td><td>-</td></tr></tbody></table><p><strong>\u5173\u4E8EexclusiveMinimum\u548CexclusiveMaximum</strong></p><p><code>sf</code> \u7684\u5B9E\u73B0\u673A\u5236\u5BFC\u81F4\u65E0\u6CD5\u5F88\u597D\u7684\u5904\u7406 <code>type</code> \u7C7B\u578B\u7684\u9519\u8BEF\u6355\u83B7\uFF0C\u56E0\u6B64\u9ED8\u8BA4\u60C5\u51B5\u4E0B <code>sf</code> \u662F\u5FFD\u7565\u4E86\u6240\u6709 <code>type</code> \uFF08\u89C1 <a target="_blank" href="https://github.com/ng-alain/delon/blob/master/packages/form/src/config.ts#L12" data-url="https://github.com/ng-alain/delon/blob/master/packages/form/src/config.ts#L12">config.ts</a>\uFF09\u7C7B\u578B\u9519\u8BEF\uFF0C\u800C\u8FD9\u4E24\u79CD\u90FD\u9519\u8BEF\u90FD\u4F1A\u88AB\u8BA4\u4E3A <code>type</code> \u7C7B\u578B\u9519\u8BEF\uFF0C\u4ECE\u800C\u5BFC\u81F4\u89E6\u53D1\u65E0\u6548\u68C0\u67E5\u7684\u539F\u56E0\u3002\uFF08\u66F4\u591A\u7EC6\u8282\u8BF7\u53C2\u8003 <a target="_blank" href="https://github.com/ng-alain/ng-alain/issues/676#issuecomment-420208459" data-url="https://github.com/ng-alain/ng-alain/issues/676#issuecomment-420208459">#676</a>\uFF09</p><h3 id="\u5B57\u7B26\u4E32\u7C7B\u578B"><a class="lake-link"><i data-anchor="\u5B57\u7B26\u4E32\u7C7B\u578B"></i></a>\u5B57\u7B26\u4E32\u7C7B\u578B</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[maxLength]</code></td><td>\u5B9A\u4E49\u5B57\u7B26\u4E32\u7684\u6700\u5927\u957F\u5EA6</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[minLength]</code></td><td>\u5B9A\u4E49\u5B57\u7B26\u4E32\u7684\u6700\u5C0F\u957F\u5EA6</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[pattern]</code></td><td>\u9A8C\u8BC1\u8F93\u5165\u5B57\u6BB5\u6B63\u5219\u8868\u8FBE\u5F0F\u5B57\u7B26\u4E32</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="\u6570\u7EC4\u7C7B\u578B"><a class="lake-link"><i data-anchor="\u6570\u7EC4\u7C7B\u578B"></i></a>\u6570\u7EC4\u7C7B\u578B</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[items]</code></td><td>\u6570\u7EC4\u5143\u7D20\u7C7B\u578B\u63CF\u8FF0\uFF0C\u53EA\u652F\u6301\u6570\u7EC4\u5BF9\u8C61\uFF0C\u82E5\u9700\u8981\u57FA\u7840\u7C7B\u578B\u6570\u7EC4\u53EF\u901A\u8FC7\u5176\u4ED6\u90E8\u4EF6\u652F\u6301</td><td><code>SFSchema</code></td><td>-</td></tr><tr><td><code>[minItems]</code></td><td>\u7EA6\u675F\u6570\u7EC4\u6700\u5C0F\u7684\u5143\u7D20\u4E2A\u6570</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[maxItems]</code></td><td>\u7EA6\u675F\u6570\u7EC4\u6700\u5927\u7684\u5143\u7D20\u4E2A\u6570</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[uniqueItems]</code></td><td>\u7EA6\u675F\u6570\u7EC4\u6BCF\u4E2A\u5143\u7D20\u90FD\u4E0D\u76F8\u540C</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[additionalItems]</code></td><td>\u6570\u7EC4\u989D\u5916\u5143\u7D20\u7684\u6821\u9A8C\u89C4\u5219</td><td><code>SFSchema</code></td><td>-</td></tr></tbody></table><h3 id="\u5BF9\u8C61\u7C7B\u578B"><a class="lake-link"><i data-anchor="\u5BF9\u8C61\u7C7B\u578B"></i></a>\u5BF9\u8C61\u7C7B\u578B</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[maxProperties]</code></td><td>\u6700\u5927\u5C5E\u6027\u4E2A\u6570\uFF0C\u5FC5\u987B\u662F\u975E\u8D1F\u6574\u6570</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[minProperties]</code></td><td>\u6700\u5C0F\u5C5E\u6027\u4E2A\u6570\uFF0C\u5FC5\u987B\u662F\u975E\u8D1F\u6574\u6570</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[required]</code></td><td>\u5FC5\u9700\u5C5E\u6027</td><td><code>string[]</code></td><td>-</td></tr><tr><td><code>[properties]</code></td><td>\u5B9A\u4E49\u5C5E\u6027</td><td><code>{ [key: string]: SFSchema }</code></td><td>-</td></tr></tbody></table><h3 id="\u6761\u4EF6\u7C7B"><a class="lake-link"><i data-anchor="\u6761\u4EF6\u7C7B"></i></a>\u6761\u4EF6\u7C7B</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[if]</code></td><td>\u6761\u4EF6\u9A8C\u8BC1</td><td><code>SFSchema</code></td><td>-</td></tr><tr><td><code>[then]</code></td><td>\u6761\u4EF6\u9A8C\u8BC1</td><td><code>SFSchema</code></td><td>-</td></tr><tr><td><code>[else]</code></td><td>\u6761\u4EF6\u9A8C\u8BC1</td><td><code>SFSchema</code></td><td>-</td></tr></tbody></table><p>\u6761\u4EF6\u7C7B\u7684\u6821\u9A8C\u975E\u5E38\u5F3A\u5927\u548C\u4E30\u5BCC\uFF0C\u4F46\u662F\u51FA\u4E8E\u4F1A\u7834\u574FUI\u5BFC\u81F4\u6574\u4E2A\u7EC4\u4EF6\u6784\u5EFA\u66F4\u590D\u6742\uFF0C<code>@delon/form</code> \u4EC5\u5B9E\u73B0 <code>required</code> \u7684\u5904\u7406\uFF0C\u5E76\u4E14\u628A\u5B83\u5F53\u6210\u662F\u5426\u663E\u793A\u6821\u9A8C\u76EE\u6807\uFF0C\u6BD4\u5982\uFF1A\u4E00\u4E2A\u767B\u5F55\u9875\uFF0C\u4F1A\u6839\u636E\u4E0D\u540C\u767B\u5F55\u65B9\u5F0F\u6765\u663E\u793A\u4E0D\u540C\u767B\u5F55\u6A21\u5F0F\uFF1A</p><pre class="hljs language-ts"><code>schema: SFSchema = {
  properties: {
    type: { type: 'string', enum: [ 'mobile', 'name' ], default: 'mobile' },
    name: { type: 'string' },
    pwd: { type: 'string' },
    mobile: { type: 'string' },
    code: { type: 'string' }
  },
  required: [ 'type' ],
  if: {
    properties: { type: { enum: [ 'mobile' ] } }
  },
  then: {
    required: [ 'mobile', 'code' ]
  },
  else: {
    required: [ 'name', 'pwd' ]
  }
};</code></pre><p>\u4E0A\u8FF0\u7684\u6700\u7EC8\u884C\u4E3A\u662F\u5F53\u767B\u5F55\u65B9\u5F0F\u4E3A <code>mobile</code> \u65F6UI\u663E\u793A <code>mobile</code> \u548C <code>code</code>\uFF0C\u53CD\u4E4BUI\u663E\u793A <code>name</code> \u548C <code>pwd</code>\u3002</p><p>\u5176\u5B9E\u6761\u4EF6\u7C7B\u6700\u7EC8\u88AB\u89E3\u6790\u6210 <code>ui.visibleIf</code>\uFF0C\u5C06\u5176\u8F6C\u6362\u6210\u5982\u4E0B\uFF1A</p><pre class="hljs language-ts"><code>{
  properties: {
    login_type: {
      type: "string",
      title: "\u767B\u5F55\u65B9\u5F0F",
      enum: [
        { label: "\u624B\u673A", value: "mobile" },
        { label: "\u8D26\u5BC6", value: "account" }
      ],
      default: "mobile",
      ui: {
        widget: "radio",
        styleType: "button"
      }
    },
    mobile: {
      type: "string",
      ui: {
        visibleIf: {
          login_type: val => val === "mobile"
        }
      }
    },
    code: {
      type: "number",
      ui: {
        visibleIf: {
          login_type: val => val === "mobile"
        }
      }
    },
    name: {
      type: "string",
      ui: {
        visibleIf: {
          login_type: val => val === "account"
        }
      }
    },
    pwd: {
      type: "string",
      ui: {
        type: "password",
        visibleIf: {
          login_type: val => val === "account"
        }
      }
    }
  },
  required: ["login_type"]
};</code></pre><h3 id="\u903B\u8F91\u7C7B"><a class="lake-link"><i data-anchor="\u903B\u8F91\u7C7B"></i></a>\u903B\u8F91\u7C7B</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[allOf]</code></td><td><strong>\u4E0D\u5EFA\u8BAE</strong> \u4F7F\u7528\uFF0C\u53EF\u7528 <code>required</code> \u66FF\u4EE3</td><td><code>SFSchema[]</code></td><td>-</td></tr><tr><td><code>[anyOf]</code></td><td><strong>\u4E0D\u5EFA\u8BAE</strong> \u4F7F\u7528\uFF0C\u53EF\u7528 <code>required</code> \u548C <code>minProperties</code> \u66FF\u4EE3</td><td><code>SFSchema[]</code></td><td>-</td></tr><tr><td><code>[oneOf]</code></td><td><strong>\u4E0D\u5EFA\u8BAE</strong> \u4F7F\u7528\uFF0C\u503C\u5FC5\u987B\u662F\u5176\u4E2D\u4E4B\u4E00</td><td><code>SFSchema[]</code></td><td>-</td></tr></tbody></table><blockquote><p><strong>\u4E0D\u5EFA\u8BAE</strong> \u4E3B\u8981\u662F\u5E76\u6CA1\u6709\u5BF9\u903B\u8F91\u7C7B\u8FDB\u884CUI\u76F8\u5173\u5904\u7406\uFF0C\u5B83\u540C\u6761\u4EF6\u7C7B\u7C7B\u4F3C\uFF0C\u4F1A\u5F71\u54CDUI\u6E32\u67D3\u3002</p></blockquote><h3 id="\u683C\u5F0F\u4E0E\u89C6\u89C9\u7C7B"><a class="lake-link"><i data-anchor="\u683C\u5F0F\u4E0E\u89C6\u89C9\u7C7B"></i></a>\u683C\u5F0F\u4E0E\u89C6\u89C9\u7C7B</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>\u5C5E\u6027\u63CF\u8FF0</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[description]</code></td><td>\u5C5E\u6027\u76EE\u7684\u6027\u89E3\u91CA</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[default]</code></td><td>\u9ED8\u8BA4\u503C</td><td><code>any</code></td><td>-</td></tr><tr><td><code>[readOnly]</code></td><td>\u662F\u5426\u53EA\u8BFB\u72B6\u6001\uFF0C\u7B49\u540C <code>nzDisabled</code></td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[format]</code></td><td>\u6570\u636E\u683C\u5F0F\uFF0C<a target="_blank" href="http://json-schema.org/latest/json-schema-validation.html#rfc.section.7.3" data-url="http://json-schema.org/latest/json-schema-validation.html#rfc.section.7.3">\u6587\u6863</a></td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="\u5176\u4ED6"><a class="lake-link"><i data-anchor="\u5176\u4ED6"></i></a>\u5176\u4ED6</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[definitions]</code></td><td>\u5185\u90E8\u7C7B\u578B\u5B9A\u4E49\u4F53</td><td><code>SFSchemaDefinition</code></td><td>-</td></tr><tr><td><code>[$ref]</code></td><td>\u5F15\u7528\u5B9A\u4E49\u4F53</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[$comment]</code></td><td>\u9488\u5BF9\u5F00\u53D1\u8005\u7684\u6CE8\u91CA\uFF0C\u65E0\u4EFB\u4F55\u610F\u4E49\uFF0C\u4E5F\u4E0D\u4F1A\u88AB\u6821\u9A8C</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="\u975E\u6807\u51C6"><a class="lake-link"><i data-anchor="\u975E\u6807\u51C6"></i></a>\u975E\u6807\u51C6</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[ui]</code></td><td>\u6307\u5B9AUI\u914D\u7F6E\u4FE1\u606F\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E <code>sf</code> \u7EC4\u4EF6 <code>ui</code> \u5C5E\u6027\u503C</td><td><code>SFUISchemaItem</code></td><td>-</td></tr></tbody></table><h2 id="UI\uFF08SFUISchemaItem\uFF09"><a class="lake-link"><i data-anchor="UI\uFF08SFUISchemaItem\uFF09"></i></a>UI\uFF08SFUISchemaItem\uFF09</h2><p>UI Schema \u7ED3\u6784\u7531\u901A\u7528\u6027\u548C\u5C0F\u90E8\u4EF6API\u4E24\u90E8\u5206\u7EC4\u6210\uFF0C\u4EE5\u4E0B\u662F\u901A\u7528\u6027\u90E8\u5206\u8FDB\u884C\u63A5\u53E3\u8BF4\u660E\uFF0C\u5C0F\u90E8\u4EF6\u90E8\u5206\u81EA\u884C\u53C2\u6570\u5C0F\u90E8\u4EF6API\u3002</p><blockquote><p>\u4E3A\u4E86\u5C0F\u90E8\u4EF6\u7684API\u5B8C\u6574\u6027\uFF0C\u5C0F\u90E8\u4EF6Schema\u8BF4\u660E\u53EF\u80FD\u4E5F\u4F1A\u5305\u542B\u4E0B\u5217\u901A\u7528\u6027\u90E8\u5206\u3002</p></blockquote><h3 id="SFUISchema"><a class="lake-link"><i data-anchor="SFUISchema"></i></a>SFUISchema</h3><p>\u7B49\u540C <code>&lt;sf [ui]="ui"></code> \u4E00\u7EC4\u4E0E JSON Schema \u7ED3\u6784\u76F8\u5BF9\u5E94\u7684 UI \u7ED3\u6784\u4F53\uFF0C\u7C7B\u578B\u4E3A\uFF1A<code>[ key: string ]: SFUISchemaItem</code>\u3002</p><h3 id="\u57FA\u7840\u7C7B"><a class="lake-link"><i data-anchor="\u57FA\u7840\u7C7B"></i></a>\u57FA\u7840\u7C7B</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[debug]</code></td><td>\u8C03\u8BD5\u6A21\u5F0F</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[order]</code></td><td>\u5C5E\u6027\u987A\u5E8F</td><td><code>string[]</code></td><td>-</td></tr><tr><td><code>[asyncData]</code></td><td>\u5F02\u6B65\u9759\u6001\u6570\u636E\u6E90</td><td><code>(input?: any) => Observable&lt;SFSchemaEnumType[]></code></td><td>-</td></tr><tr><td><code>[hidden]</code></td><td>\u662F\u5426\u9690\u85CF\u6E32\u67D3</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[visibleIf]</code></td><td>\u6307\u5B9A\u6761\u4EF6\u65F6\u624D\u663E\u793A</td><td><code>{ [key: string]: any[] | ((value: any, property: FormProperty) => boolean) }</code></td><td>-</td></tr><tr><td><code>[visibleIfLogical]</code></td><td>\u6307\u5B9A\u591A\u4E2A <code>visibleIf</code> \u65F6\u91C7\u7528\u7684\u903B\u8F91\u5173\u7CFB</td><td><code>or, and</code></td><td><code>or</code></td></tr><tr><td><code>[acl]</code></td><td>ACL\u6743\u9650\uFF0C\u7B49\u540C <code>can()</code> \u53C2\u6570\u503C</td><td><code>ACLCanType</code></td><td>-</td></tr></tbody></table><p><strong>visibleIf</strong></p><p>\u6307\u5B9A\u6761\u4EF6\u65F6\u624D\u663E\u793A\uFF0C\u4F8B\u5982\uFF1A</p><ul><li><p><code>visibleIf: { shown: [ true ] }</code>\uFF1A\u5F53 <code>shown: true</code> \u65F6\u624D\u663E\u793A\u5F53\u524D\u5C5E\u6027</p></li><li><p><code>visibleIf: { shown: [ '$ANY$' ] }</code>\uFF1A\u5F53 <code>shown</code> \u5305\u62EC\u4EFB\u610F\u503C\u65F6</p></li><li><p><code>visibleIf: { shown: (value: any, property: FormProperty) => value > 0 }</code>\uFF1A\u590D\u6742\u8868\u8FBE\u5F0F</p></li></ul><h3 id="\u6821\u9A8C\u7C7B"><a class="lake-link"><i data-anchor="\u6821\u9A8C\u7C7B"></i></a>\u6821\u9A8C\u7C7B</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[liveValidate]</code></td><td>\u662F\u5426\u5B9E\u65F6\u6821\u9A8C</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[firstVisual]</code></td><td>\u662F\u5426\u7ACB\u5373\u5448\u73B0\u9519\u8BEF\u89C6\u89C9</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[onlyVisual]</code></td><td>\u662F\u5426\u53EA\u5C55\u793A\u9519\u8BEF\u89C6\u89C9\u4E0D\u663E\u793A\u9519\u8BEF\u6587\u672C</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[ingoreKeywords]</code></td><td>\u5FFD\u7565\u67D0\u4E9B\u6570\u636E\u7C7B\u578B\u6821\u9A8C</td><td><code>string[]</code></td><td></td></tr><tr><td><code>[errors]</code></td><td>\u81EA\u5B9A\u4E49\u9519\u8BEF\u4FE1\u606F\u6587\u672C</td><td><code>{ [ key: string ]: string | ((obj: ErrorData) => string) }</code></td><td>-</td></tr><tr><td><code>[showRequired]</code></td><td>\u662F\u5426\u5C55\u793A\u5FC5\u586B\u9879\u6807\u8BC6 <code>*</code></td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[validator]</code></td><td>\u81EA\u5B9A\u4E49\u6821\u9A8C\uFF0C\u6700\u540E\u7ED3\u679C\u4F1A\u4E0E Ajv \u6821\u9A8C\u7ED3\u679C\u8FDB\u884C\u5408\u5E76\u663E\u793A</td><td><code>(value: any, formProperty: FormProperty, form: PropertyGroup) => ErrorData[]</code></td><td>-</td></tr></tbody></table><h3 id="\u6570\u7EC4\u7C7B"><a class="lake-link"><i data-anchor="\u6570\u7EC4\u7C7B"></i></a>\u6570\u7EC4\u7C7B</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[items]</code></td><td>\u6307\u5B9A\u5B50\u5143\u7D20\u7684UI</td><td><code><a data-toc="SFUISchema">SFUISchema</a></code></td><td>-</td></tr><tr><td><code>[addTitle]</code></td><td>\u6307\u5B9A\u6DFB\u52A0\u6309\u94AE\u6587\u672C</td><td><code>string</code></td><td><code>\u6DFB\u52A0</code></td></tr><tr><td><code>[addType]</code></td><td>\u6307\u5B9A\u6DFB\u52A0\u6309\u94AE\u98CE\u683C\uFF0C\u7B49\u540C\u6309\u94AE <code>nzType</code></td><td><code>string</code></td><td><code>dashed</code></td></tr><tr><td><code>[removable]</code></td><td>\u6307\u5B9A\u662F\u5426\u663E\u793A\u79FB\u9664\u6309\u94AE</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[removeTitle]</code></td><td>\u6307\u5B9A\u79FB\u9664\u6309\u94AE\u6587\u672C</td><td><code>string</code></td><td><code>\u79FB\u9664</code></td></tr></tbody></table><h3 id="\u8868\u5355\u5143\u7D20\u7C7B"><a class="lake-link"><i data-anchor="\u8868\u5355\u5143\u7D20\u7C7B"></i></a>\u8868\u5355\u5143\u7D20\u7C7B</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>\u6307\u5B9A <code>input</code> \u7684 <code>type</code> \u503C</td><td><code>string</code></td><td><code>text</code></td></tr><tr><td><code>[placeholder]</code></td><td>\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u4FE1\u606F</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[autofocus]</code></td><td>\u52A0\u8F7D\u65F6\u662F\u5426\u83B7\u5F97\u7126\u70B9</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="\u6E32\u67D3\u7C7B"><a class="lake-link"><i data-anchor="\u6E32\u67D3\u7C7B"></i></a>\u6E32\u67D3\u7C7B</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[widget]</code></td><td>\u6307\u5B9A\u91C7\u7528\u4EC0\u4E48\u5C0F\u90E8\u4EF6\u6E32\u67D3</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[i18n]</code></td><td>\u6307 <code>schema.title</code> \u7684\u56FD\u9645\u5316\u952E\u503C</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[descriptionI18n]</code></td><td>\u6307 <code>schema.description</code> \u7684\u56FD\u9645\u5316\u952E\u503C</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[class]</code></td><td>\u81EA\u5B9A\u4E49\u7C7B\uFF0C\u7B49\u540C <code>[ngClass]</code> \u503C</td><td><code>string,string[]</code></td><td>-</td></tr><tr><td><code>[width]</code></td><td>\u6307\u5B9A\u5BBD\u5EA6\uFF0C\u5355\u4F4D\uFF1A<code>px</code></td><td><code>number</code></td><td>-</td></tr><tr><td><code>[size]</code></td><td>\u5143\u7D20\u7EC4\u4EF6\u5927\u5C0F</td><td><code>default,large,small</code></td><td>-</td></tr><tr><td><code>[grid]</code></td><td>\u54CD\u5E94\u5F0F\u5C5E\u6027</td><td><code>SFGridSchema</code></td><td>-</td></tr><tr><td><code>[optional]</code></td><td>\u6807\u7B7E\u53EF\u9009\u4FE1\u606F</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[optionalHelp]</code></td><td>\u6807\u7B7E\u53EF\u9009\u5E2E\u52A9</td><td><code>string, SFOptionalHelp</code></td><td>-</td></tr></tbody></table><h3 id="\u54CD\u5E94\u5F0F\u5C5E\u6027SFGridSchema"><a class="lake-link"><i data-anchor="\u54CD\u5E94\u5F0F\u5C5E\u6027SFGridSchema"></i></a>\u54CD\u5E94\u5F0F\u5C5E\u6027 SFGridSchema</h3><p><code>grid</code> \u5C5E\u6027\u7B49\u540C\u5B8C\u6574\u7684 <a target="_blank" href="https://ng.ant.design/components/grid/zh" data-url="https://ng.ant.design/components/grid/zh">Grid\u6805\u683C\u7CFB\u7EDF</a>\uFF0C\u900F\u8FC7 <code>grid</code> \u53EF\u4EE5\u51B3\u5B9A\u8868\u5355\u5982\u4F55\u6E32\u67D3\u3002</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[gutter]</code></td><td>\u6805\u683C\u95F4\u9694</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[span]</code></td><td>\u6BCF\u4E2A\u8868\u5355\u5143\u7D20\u6805\u683C\u5360\u4F4D\u683C\u6570\uFF0C\u4E3A <code>0</code> \u65F6\u76F8\u5F53\u4E8E <code>display: none</code></td><td><code>number</code></td><td>-</td></tr><tr><td><code>[xs]</code></td><td><code>&lt;768px</code> \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u4E00\u4E2A\u5305\u542B\u5176\u4ED6\u5C5E\u6027\u7684\u5BF9\u8C61</td><td><code>number, SFGridSizeSchema</code></td><td>-</td></tr><tr><td><code>[sm]</code></td><td><code>\u2265768px</code> \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u4E00\u4E2A\u5305\u542B\u5176\u4ED6\u5C5E\u6027\u7684\u5BF9\u8C61</td><td><code>number, SFGridSizeSchema</code></td><td>-</td></tr><tr><td><code>[md]</code></td><td><code>\u2265992px</code> \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u4E00\u4E2A\u5305\u542B\u5176\u4ED6\u5C5E\u6027\u7684\u5BF9\u8C61</td><td><code>number, SFGridSizeSchema</code></td><td>-</td></tr><tr><td><code>[lg]</code></td><td><code>\u22651200px</code> \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u4E00\u4E2A\u5305\u542B\u5176\u4ED6\u5C5E\u6027\u7684\u5BF9\u8C61</td><td><code>number, SFGridSizeSchema</code></td><td>-</td></tr><tr><td><code>[xl]</code></td><td><code>\u22651600px</code> \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u4E00\u4E2A\u5305\u542B\u5176\u4ED6\u5C5E\u6027\u7684\u5BF9\u8C61</td><td><code>number, SFGridSizeSchema</code></td><td>-</td></tr><tr><td><code>[xxl]</code></td><td>\u4FDD\u7559\u5B57\u6BB5\uFF0C<code>0.7.0</code> \u540E\u652F\u6301</td><td><code>number, SFGridSizeSchema</code></td><td>-</td></tr></tbody></table><h3 id="\u6C34\u5E73\u5E03\u5C40\u7C7BSchema"><a class="lake-link"><i data-anchor="\u6C34\u5E73\u5E03\u5C40\u7C7BSchema"></i></a>\u6C34\u5E73\u5E03\u5C40\u7C7B Schema</h3><blockquote><p><strong>\u52A1\u5FC5</strong>\u4E8C\u8005\u603B\u548C\u4E3A <code>24</code></p></blockquote><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[spanLabel]</code></td><td><code>label</code> \u6240\u5360\u6805\u683C\u6570</td><td><code>number</code></td><td>5</td></tr><tr><td><code>[spanControl]</code></td><td>\u8868\u5355\u63A7\u4EF6\u6240\u5360\u6805\u683C\u6570</td><td><code>number</code></td><td>19</td></tr><tr><td><code>[offsetControl]</code></td><td><code>control</code> \u6805\u683C\u5DE6\u4FA7\u7684\u95F4\u9694\u683C\u6570\uFF0C\u95F4\u9694\u5185\u4E0D\u53EF\u4EE5\u6709\u6805\u683C</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[spanLabelFixed]</code></td><td><code>label</code> \u56FA\u5B9A\u5BBD\u5EA6</td><td><code>number</code></td><td>-</td></tr></tbody></table></section>`,meta:{order:2,title:"Schema",type:"Documents"},toc:[{id:"\u5199\u5728\u524D\u9762",title:"\u5199\u5728\u524D\u9762",h:2,children:[{id:"\u65E0\u6C61\u67D3",title:"\u65E0\u6C61\u67D3",h:3},{id:"\u8868\u5355\u5143\u7D20\u4E0E\u6570\u636E\u7ED3\u6784\u7684\u5BF9\u5E94\u5173\u7CFB",title:"\u8868\u5355\u5143\u7D20\u4E0E\u6570\u636E\u7ED3\u6784\u7684\u5BF9\u5E94\u5173\u7CFB",h:3},{id:"\u4E00\u70B9\u89C4\u8303",title:"\u4E00\u70B9\u89C4\u8303",h:3}]},{id:"JSONSchema\uFF08SFSchema\uFF09",title:"JSON Schema\uFF08SFSchema\uFF09",h:2,children:[{id:"\u5E38\u89C4\u7C7B",title:"\u5E38\u89C4\u7C7B",h:3},{id:"\u6570\u503C\u7C7B\u578B",title:"\u6570\u503C\u7C7B\u578B",h:3},{id:"\u5B57\u7B26\u4E32\u7C7B\u578B",title:"\u5B57\u7B26\u4E32\u7C7B\u578B",h:3},{id:"\u6570\u7EC4\u7C7B\u578B",title:"\u6570\u7EC4\u7C7B\u578B",h:3},{id:"\u5BF9\u8C61\u7C7B\u578B",title:"\u5BF9\u8C61\u7C7B\u578B",h:3},{id:"\u6761\u4EF6\u7C7B",title:"\u6761\u4EF6\u7C7B",h:3},{id:"\u903B\u8F91\u7C7B",title:"\u903B\u8F91\u7C7B",h:3},{id:"\u683C\u5F0F\u4E0E\u89C6\u89C9\u7C7B",title:"\u683C\u5F0F\u4E0E\u89C6\u89C9\u7C7B",h:3},{id:"\u5176\u4ED6",title:"\u5176\u4ED6",h:3},{id:"\u975E\u6807\u51C6",title:"\u975E\u6807\u51C6",h:3}]},{id:"UI\uFF08SFUISchemaItem\uFF09",title:"UI\uFF08SFUISchemaItem\uFF09",h:2,children:[{id:"SFUISchema",title:"SFUISchema",h:3},{id:"\u57FA\u7840\u7C7B",title:"\u57FA\u7840\u7C7B",h:3},{id:"\u6821\u9A8C\u7C7B",title:"\u6821\u9A8C\u7C7B",h:3},{id:"\u6570\u7EC4\u7C7B",title:"\u6570\u7EC4\u7C7B",h:3},{id:"\u8868\u5355\u5143\u7D20\u7C7B",title:"\u8868\u5355\u5143\u7D20\u7C7B",h:3},{id:"\u6E32\u67D3\u7C7B",title:"\u6E32\u67D3\u7C7B",h:3},{id:"\u54CD\u5E94\u5F0F\u5C5E\u6027SFGridSchema",title:"\u54CD\u5E94\u5F0F\u5C5E\u6027 SFGridSchema",h:3},{id:"\u6C34\u5E73\u5E03\u5C40\u7C7BSchema",title:"\u6C34\u5E73\u5E03\u5C40\u7C7B Schema",h:3}]}]}},demo:!1},this.codes=[]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-schema"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:1,vars:2,consts:[[3,"codes","item"]],template:function(t,d){t&1&&p(0,"app-docs",0),t&2&&a("codes",d.codes)("item",d.item)},dependencies:[k],encapsulation:2});let n=e;return n})();var Pt=(()=>{let e=class e{constructor(o,t){this.msg=o,this.acl=t,this.schema={properties:{name:{type:"string",title:"name-user",ui:{acl:"user"}},age:{type:"string",title:"age-admin",ui:{acl:"admin"}}},required:["name"]}}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b),g(ut))},e.\u0275cmp=l({type:e,selectors:[["form-acl-simple"]],decls:15,vars:1,consts:[[3,"schema","formSubmit"],["nz-button","","nzType","primary",3,"click"]],template:function(t,d){t&1&&(i(0,`
    `),r(1,"sf",0),h("formSubmit",function(u){return d.submit(u)}),c(),i(2,`
    `),r(3,"button",1),h("click",function(){return d.acl.setFull(!0)}),i(4,"Full"),c(),i(5,`
    `),r(6,"button",1),h("click",function(){return d.acl.setFull(!1)}),i(7,"Not Full"),c(),i(8,`
    `),r(9,"button",1),h("click",function(){return d.acl.setRole(["admin"])}),i(10,"Admin Role"),c(),i(11,`
    `),r(12,"button",1),h("click",function(){return d.acl.setRole(["user"])}),i(13,"User Role"),c(),i(14,`
  `)),t&2&&(s(1),a("schema",d.schema))},dependencies:[f,O,_,W],encapsulation:2});let n=e;return n})();var At=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"zh-CN":"packages/form/examples/acl/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u7ED3\u5408 <code>@delon/acl</code> \u6743\u9650\u53EF\u4EE5\u5229\u7528\u4E00\u4E2A Schema \u6765\u6784\u5EFA\u4E0D\u540C\u89D2\u8272\u6216\u6743\u9650\u70B9\u7684\u8868\u5355\u3002</p></section>',meta:{title:"acl",subtitle:"ACL",type:"Examples"},toc:[]}},demo:!0},this.codes=[{id:"form-acl-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';
import { ACLService } from '@delon/acl';
import { SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-acl-simple',
  template: \`
    <sf [schema]="schema" (formSubmit)="submit($event)"></sf>
    <button nz-button nzType="primary" (click)="acl.setFull(true)">Full</button>
    <button nz-button nzType="primary" (click)="acl.setFull(false)">Not Full</button>
    <button nz-button nzType="primary" (click)="acl.setRole(['admin'])">Admin Role</button>
    <button nz-button nzType="primary" (click)="acl.setRole(['user'])">User Role</button>
  \`,
})
export class FormAclSimpleComponent {
  schema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: 'name-user',
        ui: {
          acl: 'user',
        },
      },
      age: {
        type: 'string',
        title: 'age-admin',
        ui: {
          acl: 'admin',
        },
      },
    },
    required: ['name'],
  };
  constructor(private msg: NzMessageService, public acl: ACLService) {}
  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormAclSimpleComponent",point:0,name:"simple",urls:"packages/form/examples/acl/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-acl"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-acl-simple"),i(7,`
        `),c(),i(8,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id))},dependencies:[w,C,k,F,Pt],encapsulation:2});let n=e;return n})();var Mt=(()=>{let e=class e{constructor(o){this.msg=o,this.schema={properties:{login_type:{type:"string",title:"\u767B\u5F55\u65B9\u5F0F",enum:[{label:"\u624B\u673A",value:"mobile"},{label:"\u8D26\u5BC6",value:"account"}],default:"mobile",ui:{widget:"radio",styleType:"button"}},mobile:{type:"string"},code:{type:"number"},name:{type:"string"},pwd:{type:"string",ui:{type:"password"}}},required:["login_type"],if:{properties:{login_type:{enum:["mobile"]}}},then:{required:["mobile","code"]},else:{required:["name","pwd"]}}}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-conditional-if"]],decls:3,vars:1,consts:[[3,"schema","formSubmit"]],template:function(t,d){t&1&&(i(0,`
    `),r(1,"sf",0),h("formSubmit",function(u){return d.submit(u)}),c(),i(2,`
  `)),t&2&&(s(1),a("schema",d.schema))},dependencies:[f],encapsulation:2});let n=e;return n})();var Ze=["sf"],Et=(()=>{let e=class e{constructor(o){this.msg=o,this.searchDepartment$=new dt,this.schema={properties:{login_type:{type:"string",title:"\u767B\u5F55\u65B9\u5F0F",enum:[{label:"\u624B\u673A",value:"mobile"},{label:"\u8D26\u5BC6",value:"account"}],default:"mobile",ui:{widget:"radio",styleType:"button"}},mobile:{type:"string",description:"Try typing: ng-alain",ui:{changeDebounceTime:100,change:t=>{this.sf.getProperty("/department")?.updateFeedback("validating"),this.searchDepartment$.next(t)},visibleIf:{login_type:t=>t==="mobile"?{required:!0,show:!0}:null}}},code:{type:"number",ui:{visibleIf:{login_type:["mobile"]}}},type:{type:"string",title:"\u7C7B\u578B",enum:["\u5185\u7F51","\u5916\u7F51"],default:"\u5185\u7F51",ui:{widget:"select",visibleIf:{login_type:t=>t==="mobile"}}},department:{type:"string",title:"Department",default:"\u90E8\u95E81",ui:{widget:"select",visibleIf:{type:["\u5185\u7F51"]}}},remark:{type:"string",title:"Remark",ui:{visibleIf:{type:t=>t==="\u5185\u7F51"?{required:!0,show:!0}:null}}},adr:{type:"string",title:"Address",ui:{visibleIf:{type:t=>t==="\u5916\u7F51"?{required:!0,show:!0}:null}}},name:{type:"string",ui:{visibleIf:{login_type:["account"]}}},pwd:{type:"string",ui:{type:"password",visibleIf:{login_type:["account"]}}}},required:["login_type"],ui:{debug:!0}}}ngOnInit(){let o=t=>P(t==="ng-alain"?new Array(5).fill(0).map((d,m)=>`NG-ALAIN\u90E8\u95E8${m+1}`):new Array(3).fill(0).map((d,m)=>`\u90E8\u95E8${m+1}`)).pipe(A(500),nt(()=>[]));this.searchDepartment$.asObservable().pipe(it(o)).subscribe(t=>{let d=this.sf.getProperty("/department");d.schema.enum=t,d.schema.default=t[0],d.widget.reset(t[0]),this.sf.getProperty("/department")?.updateFeedback()})}toggleMobile(o){this.sf.getProperty("/mobile")?.setVisible(o)?.widget?.detectChanges()}submit(o){this.msg.success(JSON.stringify(o))}ngOnDestroy(){this.searchDepartment$.complete()}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-conditional-visibleIf"]],viewQuery:function(t,d){if(t&1&&E(Ze,7),t&2){let m;M(m=j())&&(d.sf=m.first)}},decls:10,vars:1,consts:[["type","button","nz-button","",3,"click"],[3,"schema","formSubmit"],["sf",""]],template:function(t,d){t&1&&(i(0,`
    `),r(1,"button",0),h("click",function(){return d.toggleMobile(!1)}),i(2,"Hide mobile"),c(),i(3,`
    `),r(4,"button",0),h("click",function(){return d.toggleMobile(!0)}),i(5,"Show mobile"),c(),i(6,`
    `),r(7,"sf",1,2),h("formSubmit",function(u){return d.submit(u)}),c(),i(9,`
  `)),t&2&&(s(7),a("schema",d.schema))},dependencies:[f,O,_,W],encapsulation:2});let n=e;return n})();var jt=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/examples/conditional/index.en-US.md","zh-CN":"packages/form/examples/conditional/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p><code>sf</code> supports two types of conditional expressions:</p><ul><li><p>JSON Schema Standard <a target="_blank" href="https://ajv.js.org/json-schema.html#if-then-else" data-url="https://ajv.js.org/json-schema.html#if-then-else">if-then-else</a></p></li><li><p>More flexible <code>visibleIf</code></p></li></ul></section>',meta:{title:"Conditional expression",type:"Examples"},toc:[]},"zh-CN":{content:'<section class="markdown"><p><code>sf</code> \u652F\u6301\u4E24\u79CD\u7C7B\u578B\u7684\u6761\u4EF6\u8868\u8FBE\u5F0F\uFF0C\u5206\u522B\u4E3A\uFF1A</p><ul><li><p>JSON Schema \u6807\u51C6 <a target="_blank" href="https://ajv.js.org/json-schema.html#if-then-else" data-url="https://ajv.js.org/json-schema.html#if-then-else">if-then-else</a> </p></li><li><p>\u7075\u6D3B\u6027\u66F4\u5F3A\u7684 <code>visibleIf</code></p></li></ul></section>',meta:{title:"visibleIf",subtitle:"\u6761\u4EF6\u8868\u8FBE\u5F0F",type:"Examples"},toc:[]}},demo:!0},this.codes=[{id:"form-conditional-if",meta:{title:{"zh-CN":"If\u6837\u4F8B","en-US":"If Usage"},order:1},summary:{"zh-CN":'<p>\u652F\u6301 JSON Schema \u7684 <a target="_blank" href="https://ajv.js.org/json-schema.html#if-then-else" data-url="https://ajv.js.org/json-schema.html#if-then-else">if-then-else</a> \u7528\u6CD5\u3002</p>',"en-US":'<p><a target="_blank" href="https://ajv.js.org/json-schema.html#if-then-else" data-url="https://ajv.js.org/json-schema.html#if-then-else">if-then-else</a> usage of JSON Schema is supported.</p>'},code:`import { Component } from '@angular/core';

import { SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-conditional-if',
  template: \`
    <sf [schema]="schema" (formSubmit)="submit($event)"></sf>
  \`
})
export class FormConditionalIfComponent {
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

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormConditionalIfComponent",point:0,name:"if",urls:"packages/form/examples/conditional/demo/if.md",type:"demo"},{id:"form-conditional-visibleIf",meta:{title:{"zh-CN":"visibleIf","en-US":"visibleIf"},order:2},summary:{"zh-CN":"<p>\u5229\u7528 <code>visibleIf</code> \u5B9E\u73B0\u66F4\u52A0\u7075\u6D3B\u7684\u6761\u4EF6\u8868\u8FBE\u5F0F\uFF0C\u53EF\u4EE5\u540C\u65F6\u652F\u6301\u663E\u793A\u4E0E\u53EF\u9009\u9879\uFF1B\u5229\u7528 <code>updateFeedback</code> \u53EF\u4EE5\u66F4\u65B0\u53CD\u9988\u72B6\u6001\u3002</p>","en-US":"<p>Use <code>visibleIf</code> to implement more flexible conditional expressions, which can support both display and required items. Feedback status can be updated with <code>updateFeedback</code>.</p>"},code:`import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, of, Subject, catchError, delay, switchMap } from 'rxjs';

import { SFComponent, SFSchema, SFSelectWidgetSchema, SFStringWidgetSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-conditional-visibleIf',
  template: \`
    <button type="button" nz-button (click)="toggleMobile(false)">Hide mobile</button>
    <button type="button" nz-button (click)="toggleMobile(true)">Show mobile</button>
    <sf #sf [schema]="schema" (formSubmit)="submit($event)"></sf>
  \`
})
export class FormConditionalVisibleIfComponent implements OnInit, OnDestroy {
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

  constructor(private msg: NzMessageService) {}

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
}`,lang:"ts",componentName:"FormConditionalVisibleIfComponent",point:1,name:"visibleIf",urls:"packages/form/examples/conditional/demo/visibleIf.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-conditional"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-conditional-if"),i(7,`
        `),c(),i(8,`
      
        `),r(9,"code-box",3),i(10,`
          `),p(11,"form-conditional-visibleIf"),i(12,`
        `),c(),i(13,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id),s(5),a("item",d.codes[1]),v("id",d.codes[1].id))},dependencies:[w,C,k,F,Mt,Et],encapsulation:2});let n=e;return n})();var td=["sf"],_t=(()=>{let e=class e{get i18nSchema(){return{properties:{name:{type:"string",ui:{i18n:"sf.name",descriptionI18n:"sf.description",optionalHelp:{i18n:"sf.description"}}},password:{type:"string",title:this.i18n.fanyi("sf.name"),description:this.i18n.fanyi("sf.description"),ui:{type:"password"}}},required:["name","password"]}}constructor(o,t){this.msg=o,this.i18n=t,this.schema=this.i18nSchema}changeLang(o){this.i18n.use(this.i18n.zone==="zh"?"en-US":"zh-CN"),o==="ref"&&this.comp.refreshSchema(this.i18nSchema)}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b),g(ht))},e.\u0275cmp=l({type:e,selectors:[["form-i18n-simple"]],viewQuery:function(t,d){if(t&1&&E(td,7),t&2){let m;M(m=j())&&(d.comp=m.first)}},decls:10,vars:1,consts:[["nz-button","","type","button",3,"click"],[3,"schema","formSubmit"],["sf",""]],template:function(t,d){t&1&&(i(0,`
    `),r(1,"button",0),h("click",function(){return d.changeLang("srv")}),i(2,"Change Language Via Service"),c(),i(3,`
    `),r(4,"button",0),h("click",function(){return d.changeLang("ref")}),i(5,"Change Language Via call refresh schema"),c(),i(6,`
    `),r(7,"sf",1,2),h("formSubmit",function(u){return d.submit(u)}),c(),i(9,`
  `)),t&2&&(s(7),a("schema",d.schema))},dependencies:[f,O,_,W],encapsulation:2});let n=e;return n})();var Ut=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/examples/i18n/index.en-US.md","zh-CN":"packages/form/examples/i18n/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>JSON Schema just a JSON object, it's support for internationalization. In addition, <code>sf</code> also supports some faster internationalization methods, but the elements it supports are based on the following: <code>title</code>, <code>description</code>, <code>optionalHelp</code>.</p></section>`,meta:{title:"i18n",subtitle:"Internationalization",type:"Examples"},toc:[]},"zh-CN":{content:'<section class="markdown"><p>JSON Schema \u672C\u8EAB\u53EA\u662F\u4E00\u4E2A JSON \u5BF9\u8C61\uFF0C\u56E0\u6B64\u672C\u8D28\u4E0A\u5DF2\u7ECF\u662F\u652F\u6301\u56FD\u9645\u5316\u3002\u6B64\u5916\uFF0C<code>sf</code> \u8FD8\u652F\u6301\u4E00\u4E9B\u6BD4\u8F83\u5FEB\u6377\u7684\u56FD\u9645\u5316\u65B9\u5F0F\uFF0C\u4F46\u5B83\u652F\u6301\u7684\u5143\u7D20\u6BD4\u8F83\u57FA\u7840\uFF1A<code>title</code>\u3001<code>description</code>\u3001<code>optionalHelp</code> \u4E09\u4E2A\u5143\u7D20\u3002</p></section>',meta:{title:"i18n",subtitle:"\u56FD\u9645\u5316",type:"Examples"},toc:[]}},demo:!0},this.codes=[{id:"form-i18n-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p><code>name</code> \u5143\u7D20\u91C7\u7528\u5185\u7F6E\u7684\u56FD\u9645\u5316\u65B9\u5F0F\uFF1B<code>password</code> \u91C7\u7528\u5916\u90E8\u56FD\u9645\u5316\u65B9\u5F0F\u3002</p>","en-US":"<p>The <code>name</code> element uses built-in i18n method; <code>password</code> uses external i18n method.</p>"},code:`import { Component, Inject, ViewChild } from '@angular/core';
import { I18NService } from '@core';
import { SFComponent, SFSchema } from '@delon/form';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-i18n-simple',
  template: \`
    <button nz-button type="button" (click)="changeLang('srv')">Change Language Via Service</button>
    <button nz-button type="button" (click)="changeLang('ref')">Change Language Via call refresh schema</button>
    <sf #sf [schema]="schema" (formSubmit)="submit($event)"></sf>
  \`,
})
export class FormI18nSimpleComponent {
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
              i18n: 'sf.description',
            },
          },
        },
        password: {
          type: 'string',
          title: this.i18n.fanyi('sf.name'),
          description: this.i18n.fanyi('sf.description'),
          ui: {
            type: 'password',
          },
        },
      },
      required: ['name', 'password'],
    };
  }

  constructor(private msg: NzMessageService, @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService) {}

  changeLang(type: 'srv' | 'ref'): void {
    this.i18n.use(this.i18n.zone === 'zh' ? 'en-US' : 'zh-CN');
    if (type === 'ref') {
      this.comp.refreshSchema(this.i18nSchema);
    }
  }

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormI18nSimpleComponent",point:0,name:"simple",urls:"packages/form/examples/i18n/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-i18n"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-i18n-simple"),i(7,`
        `),c(),i(8,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id))},dependencies:[w,C,k,F,_t],encapsulation:2});let n=e;return n})();var Wt=(()=>{let e=class e{constructor(o){this.mh=o}open(){this.mh.create(Ct).subscribe(console.log)}};e.\u0275fac=function(t){return new(t||e)(g(gt))},e.\u0275cmp=l({type:e,selectors:[["form-modal-simple"]],decls:4,vars:0,consts:[["nz-button","","type","button",3,"click"]],template:function(t,d){t&1&&(i(0,`
    `),r(1,"button",0),h("click",function(){return d.open()}),i(2,"Open"),c(),i(3,`
  `))},dependencies:[O,_,W],encapsulation:2});let n=e;return n})();var Rt=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"zh-CN":"packages/form/examples/modal/index.md"},content:{"zh-CN":{content:`<section class="markdown"><p>\u5728\u6A21\u6001\u6846\u91CC\u4F7F\u7528\u8868\u5355\u662F\u4E00\u79CD\u975E\u5E38\u5E38\u89C1\u573A\u666F\uFF0C\u5176\u5B9E <code>ng g ng-alain:edit edit</code> \u7684\u65F6\u5019\u4F1A\u5F97\u5230\u4E00\u4E2A\u5B8C\u6574\u793A\u4F8B\uFF1B\u4F1A\u5F97\u5230\u8FD9\u6837\u7684\u4E00\u4E2AHTML\u6A21\u677F\uFF1A</p><pre class="hljs language-html"><code>&lt;sf mode="edit" [schema]="schema" [ui]="ui" [formData]="i" button="none"&gt;
  &lt;div class="modal-footer"&gt;
    &lt;button nz-button type="button" (click)="close()"&gt;\u5173\u95ED&lt;/button&gt;
    &lt;button nz-button type="submit" [nzType]="'primary'" (click)="save(sf.value)" [disabled]="!sf.valid" [nzLoading]="http.loading"&gt;\u4FDD\u5B58&lt;/button&gt;
  &lt;/div&gt;
&lt;/sf&gt;</code></pre><p><code>.modal-footer</code> \u5DF2\u7ECF\u975E\u5E38\u53CB\u597D\u7684\u878D\u5408\u4E86\u81EA\u5B9A\u4E49\u52A8\u6001\u6846\u3002</p></section>`,meta:{title:"modal",subtitle:"\u6A21\u6001\u6846",type:"Examples"},toc:[]}},demo:!0},this.codes=[{id:"form-modal-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';
import { ModalHelper } from '@delon/theme';
import { DemoSfComponent } from '@shared';

@Component({
  selector: 'form-modal-simple',
  template: \`
    <button nz-button type="button" (click)="open()">Open</button>
  \`,
})
export class FormModalSimpleComponent {
  constructor(private mh: ModalHelper) {}

  open(): void {
    this.mh.create(DemoSfComponent).subscribe(console.log);
  }
}`,lang:"ts",componentName:"FormModalSimpleComponent",point:0,name:"simple",urls:"packages/form/examples/modal/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-modal"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-modal-simple"),i(7,`
        `),c(),i(8,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id))},dependencies:[w,C,k,F,Wt],encapsulation:2});let n=e;return n})();var Bt=(()=>{let e=class e{constructor(o){this.msg=o,this.schema={properties:{product:{type:"array",title:"\u4EA7\u54C1\u6E05\u5355",maxItems:4,items:{type:"object",properties:{name:{type:"string",title:"\u540D\u79F0"},price:{type:"number",title:"\u5355\u4EF7",minimum:1}},required:["name","price"]},ui:{grid:{arraySpan:12}}}}}}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-array-simple"]],decls:3,vars:1,consts:[[3,"schema","formSubmit"]],template:function(t,d){t&1&&(i(0," "),r(1,"sf",0),h("formSubmit",function(u){return d.submit(u)}),c(),i(2," ")),t&2&&(s(1),a("schema",d.schema))},dependencies:[f],encapsulation:2});let n=e;return n})();var Vt=(()=>{let e=class e{constructor(o){this.msg=o,this.schema={properties:{title:{type:"string"},market:{type:"number"},price:{type:"number"},skus:{type:"array",title:"Skus",maxItems:4,default:[{}],items:{type:"object",properties:{name:{type:"string",title:"\u540D\u79F0"},price:{type:"number",title:"\u5355\u4EF7",minimum:1},stock:{type:"number",minimum:1},desc:{type:"string",ui:{grid:{span:24}}}},required:["name","price","stock"],ui:{grid:{span:12}}},ui:{grid:{span:24,arraySpan:12}}},desc:{type:"string",ui:{grid:{span:24}}}},required:["title","market","price"],ui:{spanLabelFixed:100,grid:{span:8}}}}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-array-irregular"]],decls:3,vars:1,consts:[[3,"schema","formSubmit"]],template:function(t,d){t&1&&(i(0," "),r(1,"sf",0),h("formSubmit",function(u){return d.submit(u)}),c(),i(2," ")),t&2&&(s(1),a("schema",d.schema))},dependencies:[f],encapsulation:2});let n=e;return n})();var qt=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/src/widgets/array/index.en-US.md","zh-CN":"packages/form/src/widgets/array/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>Create array object, it's only valid when <code>schema.type="array"</code>.</p><h2 id="Layout"><a class="lake-link"><i data-anchor="Layout"></i></a>Layout</h2><p>Array layout is divided into array itself and array element layout, <code>arraySpan</code> determines the number of grid of each array element.</p><p>UI embed in Schema:</p><pre class="hljs language-ts"><code>const schema = {
  list: {
    type: 'array',
    items: {
      a: { type: 'string' },
      b: { type: 'number', ui: { spanLabel: 10 } }
    },
    ui: { spanLabel: 5, grid: { arraySpan: 12 } }
  }
};</code></pre><p><strong>Note\uFF1A</strong> All attributes in <code>items</code> are inherited from <code>list.ui</code>, eventually, <code>items.a</code> has <code>5</code> units, <code>items.b</code> has <code>10</code> units.</p><p>Schema and UI are separated, above UI configuration will be converted to:</p><pre class="hljs language-ts"><code>const ui = {
  $list: {
    $items: {
      $b: { spanLabel: 10 }
    },
    spanLabel: 5,
    grid: { arraySpan: 12 }
  }
};</code></pre></section>`,api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[items]</code></td><td>Description of array element</td><td><code>SFSchema</code></td><td>-</td></tr><tr><td><code>[minItems]</code></td><td>Minimum number of array element</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[maxItems]</code></td><td>Maximum number of array element</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[uniqueItems]</code></td><td>Element in array is unique</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[addTitle]</code></td><td>Add button title</td><td><code>string</code></td><td><code>add</code></td></tr><tr><td><code>[addType]</code></td><td>Add button type, equals to <code>nzType</code></td><td><code>string</code></td><td><code>dashed</code></td></tr><tr><td><code>[removable]</code></td><td>Whether includes remove button</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[removeTitle]</code></td><td>Remove button title</td><td><code>string</code></td><td><code>remove</code></td></tr><tr><td><code>[required]</code></td><td>Add required style to current item</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[$items]</code></td><td>UI description of array element</td><td><code>SFUISchema</code></td><td>-</td></tr><tr><td><code>(add)</code></td><td>Add callback\uFF0C<code>property</code> indicates form property after add</td><td><code>(property: FormProperty) => void</code></td><td>-</td></tr><tr><td><code>(remove)</code></td><td>Remove callback</td><td><code>(index: number) => void</code></td><td>-</td></tr></tbody></table>',meta:{title:"array",subtitle:"Array",type:"Widgets",order:2},toc:[{id:"Layout",title:"Layout",h:2},{id:"API",title:"API",h:2,children:[{id:"schema",title:"schema",h:3},{id:"ui",title:"ui",h:3}]}]},"zh-CN":{content:`<section class="markdown"><p>\u521B\u5EFA\u5BF9\u8C61\u6570\u7EC4\uFF0C\u53EA\u5BF9 <code>schema.type="array"</code> \u65F6\u6709\u6548\u3002</p><h2 id="\u5173\u4E8E\u5E03\u5C40"><a class="lake-link"><i data-anchor="\u5173\u4E8E\u5E03\u5C40"></i></a>\u5173\u4E8E\u5E03\u5C40</h2><p>\u6570\u7EC4\u7684\u5E03\u5C40\u5206\u4E3A\u6570\u7EC4\u672C\u8EAB\u4EE5\u53CA\u6570\u7EC4\u5143\u7D20\u5E03\u5C40\uFF0C<code>arraySpan</code> \u51B3\u5B9A\u6BCF\u4E2A\u6570\u7EC4\u5143\u7D20\u5360\u6805\u683C\u6570\u503C\u3002</p><p>Schema \u5185\u5D4C UI \u98CE\u683C\uFF1A</p><pre class="hljs language-ts"><code>const schema = {
  list: {
    type: 'array',
    items: {
      a: { type: 'string' },
      b: { type: 'number', ui: { spanLabel: 10 } }
    },
    ui: { spanLabel: 5, grid: { arraySpan: 12 } }
  }
};</code></pre><p><strong>\u6CE8\u610F\uFF1A</strong> <code>items</code> \u4E0B\u6240\u6709\u5C5E\u6027\u90FD\u7EE7\u627F\u4E8E <code>list.ui</code>\uFF0C\u6700\u7EC8 <code>items.a</code> \u4E3A <code>5</code> \u4E2A\u5355\u4F4D\u3001<code>items.b</code> \u4E3A <code>10</code> \u4E2A\u5355\u4F4D\u3002</p><p>Schema \u4E0E UI \u5206\u5F00\u98CE\u683C\uFF0C\u5047\u5982\u4E0A\u8FF0 Schema \u8F6C\u5316\u6210 UI \u5199\u6CD5\uFF1A</p><pre class="hljs language-ts"><code>const ui = {
  $list: {
    $items: {
      $b: { spanLabel: 10 }
    },
    spanLabel: 5,
    grid: { arraySpan: 12 }
  }
};</code></pre></section>`,api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[items]</code></td><td>\u6570\u7EC4\u5143\u7D20\u7C7B\u578B\u63CF\u8FF0</td><td><code>SFSchema</code></td><td>-</td></tr><tr><td><code>[minItems]</code></td><td>\u7EA6\u675F\u6570\u7EC4\u6700\u5C0F\u7684\u5143\u7D20\u4E2A\u6570</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[maxItems]</code></td><td>\u7EA6\u675F\u6570\u7EC4\u6700\u5927\u7684\u5143\u7D20\u4E2A\u6570</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[uniqueItems]</code></td><td>\u7EA6\u675F\u6570\u7EC4\u6BCF\u4E2A\u5143\u7D20\u90FD\u4E0D\u76F8\u540C</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="ui\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[addTitle]</code></td><td>\u6DFB\u52A0\u6309\u94AE\u6587\u672C</td><td><code>string</code></td><td><code>\u6DFB\u52A0</code></td></tr><tr><td><code>[addType]</code></td><td>\u6DFB\u52A0\u6309\u94AE\u7C7B\u578B\uFF0C\u7B49\u540C <code>nzType</code></td><td><code>string</code></td><td><code>dashed</code></td></tr><tr><td><code>[removable]</code></td><td>\u662F\u5426\u5305\u542B\u79FB\u9664\u6309\u94AE</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[removeTitle]</code></td><td>\u79FB\u9664\u6309\u94AE\u6587\u672C</td><td><code>string</code></td><td><code>\u79FB\u9664</code></td></tr><tr><td><code>[required]</code></td><td>\u5F53\u524D\u9879\u662F\u5426\u4E3A\u5FC5\u586B\uFF0C\u4EC5\u5F71\u54CD\u6837\u5F0F</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[$items]</code></td><td>\u6570\u7EC4\u5143\u7D20\u7C7B\u578BUI\u63CF\u8FF0</td><td><code>SFUISchema</code></td><td>-</td></tr><tr><td><code>(add)</code></td><td>\u6DFB\u52A0\u56DE\u8C03\uFF0C<code>property</code> \u8868\u793A\u6DFB\u52A0\u540E\u7684\u8868\u5355\u5C5E\u6027</td><td><code>(property: FormProperty) => void</code></td><td>-</td></tr><tr><td><code>(remove)</code></td><td>\u79FB\u9664\u56DE\u8C03</td><td><code>(index: number) => void</code></td><td>-</td></tr></tbody></table>',meta:{title:"array",subtitle:"\u6570\u7EC4",type:"Widgets",order:2},toc:[{id:"\u5173\u4E8E\u5E03\u5C40",title:"\u5173\u4E8E\u5E03\u5C40",h:2},{id:"API",title:"API",h:2,children:[{id:"schema\u5C5E\u6027",title:"schema \u5C5E\u6027",h:3},{id:"ui\u5C5E\u6027",title:"ui \u5C5E\u6027",h:3}]}]}},demo:!0},this.codes=[{id:"form-array-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';
import { SFArrayWidgetSchema, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-array-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)"></sf> \`,
})
export class FormArraySimpleComponent {
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
              title: '\u540D\u79F0',
            },
            price: {
              type: 'number',
              title: '\u5355\u4EF7',
              minimum: 1,
            },
          },
          required: ['name', 'price'],
        },
        ui: { grid: { arraySpan: 12 } } as SFArrayWidgetSchema,
      },
    },
  };

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormArraySimpleComponent",point:0,name:"simple",urls:"packages/form/src/widgets/array/demo/simple.md",type:"demo"},{id:"form-array-irregular",meta:{title:{"zh-CN":"\u4E0D\u89C4\u5219\u5E03\u5C40","en-US":"Irregular Layout"},order:1},summary:{"zh-CN":"<p>\u7075\u6D3B\u4F7F\u7528 <code>ui</code> \u6765\u590D\u6742\u4E0D\u89C4\u5219\u5E03\u5C40\u3002</p>","en-US":"<p>Flexible use of <code>ui</code> for complex and irregular layouts.</p>"},code:`import { Component } from '@angular/core';

import { SFArrayWidgetSchema, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-array-irregular',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)"></sf> \`
})
export class FormArrayIrregularComponent {
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

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormArrayIrregularComponent",point:1,name:"irregular",urls:"packages/form/src/widgets/array/demo/irregular.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-array"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-array-simple"),i(7,`
        `),c(),i(8,`
      
        `),r(9,"code-box",3),i(10,`
          `),p(11,"form-array-irregular"),i(12,`
        `),c(),i(13,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id),s(5),a("item",d.codes[1]),v("id",d.codes[1].id))},dependencies:[w,C,k,F,Bt,Vt],encapsulation:2});let n=e;return n})();var Lt=(()=>{let e=class e{constructor(o){this.msg=o,this.schema={properties:{status:{type:"boolean",title:"\u662F\u5426\u542F\u7528"},enabled:{type:"boolean",title:"\u662F\u5426\u542F\u7528",ui:{checkedChildren:"\u5F00",unCheckedChildren:"\u5173"}}}}}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-boolean-simple"]],decls:3,vars:1,consts:[[3,"schema","formSubmit"]],template:function(t,d){t&1&&(i(0," "),r(1,"sf",0),h("formSubmit",function(u){return d.submit(u)}),c(),i(2," ")),t&2&&(s(1),a("schema",d.schema))},dependencies:[f],encapsulation:2});let n=e;return n})();var Ht=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/src/widgets/boolean/index.en-US.md","zh-CN":"packages/form/src/widgets/boolean/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Switching Selector.</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[readOnly]</code></td><td>Whether to disable the state</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[size]</code></td><td>Size of the <code>nz-switch</code></td><td><code>default,small</code></td><td><code>default</code></td></tr><tr><td><code>[checkedChildren]</code></td><td>Content to be shown when the state is checked</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[unCheckedChildren]</code></td><td>Content to be shown when the state is unchecked</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[loading]</code></td><td>Loading state of switch</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>',meta:{title:"boolean",subtitle:"Switch",type:"Widgets",order:4},toc:[{id:"API",title:"API",h:2,children:[{id:"schema",title:"schema",h:3},{id:"ui",title:"ui",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u5F00\u5173\u9009\u62E9\u5668</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[readOnly]</code></td><td>\u7981\u7528\u72B6\u6001</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="ui\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[size]</code></td><td>\u5927\u5C0F\uFF0C\u7B49\u540C <code>nzSize</code></td><td><code>default,small</code></td><td><code>default</code></td></tr><tr><td><code>[checkedChildren]</code></td><td>\u9009\u4E2D\u65F6\u7684\u5185\u5BB9</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[unCheckedChildren]</code></td><td>\u975E\u9009\u4E2D\u65F6\u7684\u5185\u5BB9</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[loading]</code></td><td>\u52A0\u8F7D\u4E2D\u7684\u5F00\u5173</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>',meta:{title:"boolean",subtitle:"\u5F00\u5173",type:"Widgets",order:4},toc:[{id:"API",title:"API",h:2,children:[{id:"schema\u5C5E\u6027",title:"schema \u5C5E\u6027",h:3},{id:"ui\u5C5E\u6027",title:"ui \u5C5E\u6027",h:3}]}]}},demo:!0},this.codes=[{id:"form-boolean-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';
import { SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-boolean-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)"></sf> \`,
})
export class FormBooleanSimpleComponent {
  schema: SFSchema = {
    properties: {
      status: {
        type: 'boolean',
        title: '\u662F\u5426\u542F\u7528',
      },
      // \u6307\u5B9A\u5185\u5BB9\u6587\u672C
      enabled: {
        type: 'boolean',
        title: '\u662F\u5426\u542F\u7528',
        ui: {
          checkedChildren: '\u5F00',
          unCheckedChildren: '\u5173',
        },
      },
    },
  };

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormBooleanSimpleComponent",point:0,name:"simple",urls:"packages/form/src/widgets/boolean/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-boolean"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-boolean-simple"),i(7,`
        `),c(),i(8,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id))},dependencies:[w,C,k,F,Lt],encapsulation:2});let n=e;return n})();var Jt=(()=>{let e=class e{constructor(o){this.msg=o,this.schema={properties:{single:{type:"boolean",title:"\u540C\u610F\u672C\u534F\u8BAE",description:"\u300A\u7528\u6237\u534F\u8BAE\u300B",ui:{widget:"checkbox"},default:!0},mulit:{type:"string",title:"Mulit",enum:["Apple","Pear","Orange"],ui:{widget:"checkbox",span:8,checkAll:!0},default:["Apple"]},async:{type:"string",title:"Async",ui:{widget:"checkbox",asyncData:()=>P([{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}]).pipe(A(200))},default:["Apple"]}}}}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-checkbox-simple"]],decls:3,vars:1,consts:[[3,"schema","formSubmit"]],template:function(t,d){t&1&&(i(0," "),r(1,"sf",0),h("formSubmit",function(u){return d.submit(u)}),c(),i(2," ")),t&2&&(s(1),a("schema",d.schema))},dependencies:[f],encapsulation:2});let n=e;return n})();var Gt=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/src/widgets/checkbox/index.en-US.md","zh-CN":"packages/form/src/widgets/checkbox/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Checkbox.</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[readOnly]</code></td><td>Whether to disable the state</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[enum]</code></td><td>Render checkbox group when the value exists</td><td><code>SFSchemaEnumType[]</code></td><td>-</td></tr><tr><td><code>[title]</code></td><td>Text of the single checkbox</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[description]</code></td><td>Help text of the single checkbox</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[asyncData]</code></td><td>Async data source, render checkbox group when the value exists</td><td><code>() => Observable&lt;SFSchemaEnumType[]></code></td><td>-</td></tr><tr><td><code>[span]</code></td><td>Raster number of cells to occupy, refer to <a target="_blank" href="https://ng.ant.design/components/checkbox/en#components-checkbox-demo-layout" data-url="https://ng.ant.design/components/checkbox/en#components-checkbox-demo-layout">layout</a></td><td><code>number</code></td><td>-</td></tr><tr><td><code>[styleType]</code></td><td>Style of the <code>nz-checkbox</code></td><td><code>default, button</code></td><td><code>default</code></td></tr><tr><td><code>[checkAll]</code></td><td>Whether to select all</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[checkAllText]</code></td><td>Select all button text</td><td><code>string</code></td><td><code>\u5168\u9009</code></td></tr><tr><td><code>[change]</code></td><td>Changed event, Parameter: single checkbox is <code>boolean</code>, otherwise <code>SFSchemaEnum[]</code></td><td><code>(res: boolean | SFSchemaEnum[]) => void</code></td><td>-</td></tr></tbody></table>',meta:{title:"checkbox",subtitle:"Checkbox",type:"Widgets"},toc:[{id:"API",title:"API",h:2,children:[{id:"schema",title:"schema",h:3},{id:"ui",title:"ui",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u4E00\u7EC4\u53EF\u9009\u9879\u4E2D\u8FDB\u884C\u591A\u9879\u9009\u62E9\u65F6</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[enum]</code></td><td>\u6570\u636E\u6E90\uFF0C\u5F53\u6570\u636E\u6E90\u5B58\u5728\u4E8E\u8868\u793A\u4E00\u7EC4\u591A\u9009\u6846</td><td><code>SFSchemaEnumType[]</code></td><td>-</td></tr><tr><td><code>[readOnly]</code></td><td>\u7981\u7528\u72B6\u6001</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[title]</code></td><td>\u65E0 <code>enum</code> \u65F6\u8868\u793A\u591A\u9009\u6846\u6587\u672C\u5185\u5BB9</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[description]</code></td><td>\u65E0 <code>enum</code> \u65F6\u8868\u793A\u591A\u9009\u6846\u540E\u5E2E\u52A9\u4FE1\u606F</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="ui\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[asyncData]</code></td><td>\u5F02\u6B65\u6570\u636E\u6E90</td><td><code>() => Observable&lt;SFSchemaEnumType[]></code></td><td>-</td></tr><tr><td><code>[span]</code></td><td>\u6307\u5B9A\u6BCF\u4E2A\u9009\u6846\u5355\u5143\u683C\u6570\u91CF\uFF0C\u53C2\u8003<a target="_blank" href="https://ng.ant.design/components/checkbox/zh#components-checkbox-demo-layout" data-url="https://ng.ant.design/components/checkbox/zh#components-checkbox-demo-layout">\u5E03\u5C40</a></td><td><code>number</code></td><td>-</td></tr><tr><td><code>[styleType]</code></td><td>radio\u7684\u6837\u5F0F</td><td><code>default, button</code></td><td><code>default</code></td></tr><tr><td><code>[checkAll]</code></td><td>\u662F\u5426\u9700\u8981\u5168\u9009</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[checkAllText]</code></td><td>\u5168\u9009\u6309\u94AE\u6587\u672C</td><td><code>string</code></td><td><code>\u5168\u9009</code></td></tr><tr><td><code>[change]</code></td><td>\u503C\u53D8\u66F4\u4E8B\u4EF6\uFF0C\u53C2\u6570\uFF1A\u5355\u4E2A\u591A\u9009\u6846\u4E3A <code>boolean</code>\uFF0C\u5426\u5219\u4E3A <code>SFSchemaEnum[]</code></td><td><code>(res: boolean | SFSchemaEnum[]) => void</code></td><td>-</td></tr></tbody></table>',meta:{title:"checkbox",subtitle:"\u591A\u9009\u6846",type:"Widgets"},toc:[{id:"API",title:"API",h:2,children:[{id:"schema\u5C5E\u6027",title:"schema \u5C5E\u6027",h:3},{id:"ui\u5C5E\u6027",title:"ui \u5C5E\u6027",h:3}]}]}},demo:!0},this.codes=[{id:"form-checkbox-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';
import { SFCheckboxWidgetSchema, SFSchema } from '@delon/form';
import type { SFCascaderWidgetSchema } from '@delon/form/widgets/cascader';
import { NzMessageService } from 'ng-zorro-antd/message';
import { of, delay } from 'rxjs';

@Component({
  selector: 'form-checkbox-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)"></sf> \`,
})
export class FormCheckboxSimpleComponent {
  schema: SFSchema = {
    properties: {
      // \u5355\u4E2A\u591A\u9009\u6846
      single: {
        type: 'boolean',
        title: '\u540C\u610F\u672C\u534F\u8BAE',
        description: '\u300A\u7528\u6237\u534F\u8BAE\u300B',
        ui: {
          widget: 'checkbox',
        } as SFCascaderWidgetSchema,
        default: true,
      },
      // \u591A\u9009\u6846\u7EC4
      mulit: {
        type: 'string',
        title: 'Mulit',
        enum: ['Apple', 'Pear', 'Orange'],
        ui: {
          widget: 'checkbox',
          span: 8, // \u6307\u5B9A\u6BCF\u4E00\u9879 8 \u4E2A\u5355\u5143\u7684\u5E03\u5C40
          checkAll: true,
        } as SFCheckboxWidgetSchema,
        default: ['Apple'],
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
              { label: 'Orange', value: 'Orange' },
            ]).pipe(delay(200)),
        } as SFCheckboxWidgetSchema,
        default: ['Apple'],
      },
    },
  };

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormCheckboxSimpleComponent",point:0,name:"simple",urls:"packages/form/src/widgets/checkbox/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-checkbox"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-checkbox-simple"),i(7,`
        `),c(),i(8,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id))},dependencies:[w,C,k,F,Jt],encapsulation:2});let n=e;return n})();var cd=["sf"];function sd(n,e){if(n&1){let D=q();i(0,`
        `),r(1,"div",4),i(2,`
          `),r(3,"div",5),i(4,`
            `),r(5,"input",6),h("ngModelChange",function(t){let m=R(D).$implicit;return B(m.setValue(t))}),c(),i(6,`
          `),c(),i(7,`
          `),r(8,"div",5),i(9,`
            `),r(10,"button",7),h("click",function(){R(D);let t=U();return B(t.updateQr())}),i(11),c(),i(12,`
          `),c(),i(13,`
        `),c(),i(14,`
      `)}if(n&2){let D=e.$implicit,o=e.ui;s(5),a("disabled",D.disabled)("nzSize",D.size)("ngModel",D.value),v("id",D.id)("disabled",D.disabled),s(6),lt(o.btnText)}}function ld(n,e){if(n&1&&(i(0,`
        `),p(1,"nz-qrcode",8),i(2,`
      `)),n&2){let D=e.$implicit;s(1),a("nzValue",D.value)}}var $t=(()=>{let e=class e{constructor(o){this.msg=o,this.schema={properties:{formName:{type:"string",title:"Custom Title",ui:{widget:"custom",btnText:"Update Qr"},default:"test"},qr:{type:"string",ui:{widget:"custom"},default:"https://ng-alain.com"}}}}updateQr(){let o=this.sf.getProperty("/formName")?.value;this.sf.getProperty("/qr")?.setValue(o,!0),this.msg.info("Suc")}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-custom-simple"]],viewQuery:function(t,d){if(t&1&&E(cd,5),t&2){let m;M(m=j())&&(d.sf=m.first)}},decls:9,vars:1,consts:[[3,"schema","formSubmit"],["sf",""],["sf-template","formName"],["sf-template","qr"],["nz-row",""],["nz-col",""],["nz-input","",3,"disabled","nzSize","ngModel","ngModelChange"],["nz-button","","type","button","nzType","link",3,"click"],[3,"nzValue"]],template:function(t,d){t&1&&(i(0,`
    `),r(1,"sf",0,1),h("formSubmit",function(u){return d.submit(u)}),i(3,`
      `),V(4,sd,15,6,"ng-template",2),i(5,`
      `),V(6,ld,3,1,"ng-template",3),i(7,`
    `),c(),i(8,`
  `)),t&2&&(s(1),a("schema",d.schema))},dependencies:[ft,bt,yt,f,vt,O,_,w,C,K,kt],encapsulation:2});let n=e;return n})();var Qt=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/src/widgets/custom/index.en-US.md","zh-CN":"packages/form/src/widgets/custom/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>Custom the current dynamic form widget. For more complexity, please refer to <a href="/form/customize" data-url="/form/customize">customize</a> widget.</p><h2 id="Usage"><a class="lake-link"><i data-anchor="Usage"></i></a>Usage</h2><p>Make sure to specify <strong>sf-template</strong> a valid path value, for example:</p><pre class="hljs language-html"><code>&lt;sf&gt;
  &lt;ng-template sf-template="formFieldName" let-i let-ui="ui" let-schema="schema"&gt;
  &lt;/ng-tempalte&gt;
&lt;/sf&gt;</code></pre></section>`,api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td><code>[$implicit]</code></td><td>Current widget component instance</td><td><code>ControlWidget</code></td></tr><tr><td><code>[schema]</code></td><td>Schema data of the widget</td><td><code>SFSchema</code></td></tr><tr><td><code>[ui]</code></td><td>UI data of the widget</td><td><code>SFUISchemaItem</code></td></tr></tbody></table><p>The widget component instance include <code>formProperty</code> property, whose <code>value</code> attribute is the only way to communicate with the widget.</p><p>The widget component instance contains some shortcut properties and methods, please read for more details <a target="_blank" href="https://github.com/ng-alain/delon/blob/master/packages/form/src/widget.ts" data-url="https://github.com/ng-alain/delon/blob/master/packages/form/src/widget.ts">ControlWidget</a>.</p>',meta:{title:"custom",subtitle:"Custom",type:"Widgets"},toc:[{id:"Usage",title:"Usage",h:2},{id:"API",title:"API",h:2}]},"zh-CN":{content:`<section class="markdown"><p>\u5B9A\u5236\u5F53\u524D\u52A8\u6001\u8868\u5355\u5C0F\u90E8\u4EF6\u3002\u66F4\u590D\u6742\u8BF7\u53C2\u8003<a href="/form/customize" data-url="/form/customize">\u5B9A\u5236\u5C0F\u90E8\u4EF6</a>\u3002</p><h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p>\u52A1\u5FC5\u6307\u5B9A <strong>sf-template</strong> \u662F\u6709\u6548\u8DEF\u5F84\u503C\uFF0C\u4F8B\u5982\uFF1A</p><pre class="hljs language-html"><code>&lt;sf&gt;
  &lt;ng-template sf-template="formFieldName" let-i let-ui="ui" let-schema="schema"&gt;
  &lt;/ng-template&gt;
&lt;/sf&gt;</code></pre></section>`,api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td><code>[$implicit]</code></td><td>\u5F53\u524D\u4E0A\u4E0B\u6587</td><td><code>ControlWidget</code></td></tr><tr><td><code>[schema]</code></td><td>\u5F53\u524D\u8282\u70B9 Schema</td><td><code>SFSchema</code></td></tr><tr><td><code>[ui]</code></td><td>\u5F53\u524D\u8282\u70B9 UI</td><td><code>SFUISchemaItem</code></td></tr></tbody></table><p>\u4E0A\u4E0B\u6587\u5305\u62EC <code>formProperty</code> \u5C5E\u6027\uFF0C\u5B83\u662F\u4F20\u9012\u6570\u636E\u7684\u552F\u4E00\u4E2D\u95F4\u5C42\uFF0C\u56E0\u6B64\u7EF4\u62A4 <code>formProperty.value</code> \u662F\u552F\u4E00\u4E0E\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u901A\u4FE1\u7684\u5A92\u4ECB\u3002</p><p>\u4E0A\u4E0B\u6587\u8FD8\u5305\u542B\u4E86\u4E00\u4E9B\u5FEB\u6377\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u6709\u5173\u66F4\u591A\u7EC6\u8282\u8BF7\u9605\u8BFB <a target="_blank" href="https://github.com/ng-alain/delon/blob/master/packages/form/src/widget.ts" data-url="https://github.com/ng-alain/delon/blob/master/packages/form/src/widget.ts">Widget</a> \u7684\u5B9A\u4E49\u3002</p>',meta:{title:"custom",subtitle:"\u81EA\u5B9A\u4E49",type:"Widgets"},toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528",h:2},{id:"API",title:"API",h:2}]}},demo:!0},this.codes=[{id:"form-custom-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u4F7F\u7528 <code>sf-template</code> \u6307\u4EE4\u5728\u5F53\u524D\u8868\u5355\u81EA\u5B9A\u4E49\u590D\u6742\u90E8\u4EF6\u3002</p>","en-US":"<p>Use the <code>sf-template</code> directive to custom complex widget in the current form.</p>"},code:`import { Component, ViewChild } from '@angular/core';

import { SFComponent, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

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
  \`
})
export class FormCustomSimpleComponent {
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

  constructor(private msg: NzMessageService) {}

  updateQr(): void {
    const formNameValue = this.sf.getProperty('/formName')?.value;
    const qr = this.sf.getProperty('/qr');
    qr?.setValue(formNameValue, true);
    this.msg.info(\`Suc\`);
  }

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormCustomSimpleComponent",point:0,name:"simple",urls:"packages/form/src/widgets/custom/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-custom"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-custom-simple"),i(7,`
        `),c(),i(8,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id))},dependencies:[w,C,k,F,$t],encapsulation:2});let n=e;return n})();var Yt=(()=>{let e=class e{constructor(o){this.msg=o,this.schema={properties:{datetime:{type:"string",format:"date-time"},date:{type:"string",format:"date"},date_number:{type:"number",ui:{widget:"date"}},year:{type:"number",ui:{widget:"date",mode:"year",format:"yyyy"}},month:{type:"string",format:"month"},week:{type:"string",format:"week"},range:{type:"string",ui:{widget:"date",mode:"range"}},start:{type:"string",ui:{widget:"date",end:"end"}},end:{type:"string",ui:{widget:"date",end:"end"}},inline:{type:"string",ui:{widget:"date",inline:!0}}}}}submit(o){this.msg.success(JSON.stringify(o))}change(o){console.log("change",o)}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-date-simple"]],decls:3,vars:1,consts:[[3,"schema","formSubmit","formChange"]],template:function(t,d){t&1&&(i(0," "),r(1,"sf",0),h("formSubmit",function(u){return d.submit(u)})("formChange",function(u){return d.change(u)}),c(),i(2," ")),t&2&&(s(1),a("schema",d.schema))},dependencies:[f],encapsulation:2});let n=e;return n})();var Kt=(()=>{let e=class e{constructor(o){this.msg=o,this.schema={properties:{start:{type:"string",ui:{widget:"date",end:"end",separator:"\u5230"},default:new Date},end:{type:"string",default:G(new Date,6)},startWeek:{type:"string",ui:{widget:"date",rangeMode:"week",end:"endWeek"},default:new Date},endWeek:{type:"string",default:G(new Date,6)},startMonth:{type:"string",ui:{widget:"date",rangeMode:"month",end:"endMonth"},default:new Date},endMonth:{type:"string",default:G(new Date,6)},startYear:{type:"string",ui:{widget:"date",rangeMode:"year",end:"endYear"},default:new Date},endYear:{type:"string",default:G(new Date,6)}},required:["start"]}}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-date-range"]],decls:3,vars:1,consts:[[3,"schema","formSubmit"]],template:function(t,d){t&1&&(i(0," "),r(1,"sf",0),h("formSubmit",function(u){return d.submit(u)}),c(),i(2," ")),t&2&&(s(1),a("schema",d.schema))},dependencies:[f],encapsulation:2});let n=e;return n})();var Zt=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/src/widgets/date/index.en-US.md","zh-CN":"packages/form/src/widgets/date/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>To select or input a date.</p><h2 id="Notice"><a class="lake-link"><i data-anchor="Notice"></i></a>Notice</h2><ul><li><p>Format is divided into two types: <strong>Data format</strong> means form data, <strong>Display format</strong> means display data (<a target="_blank" href="https://ng.ant.design/components/date-picker/en#api" data-url="https://ng.ant.design/components/date-picker/en#api">nzFormat</a>)</p></li><li><p>All <strong>Data format</strong> units, reference <a target="_blank" href="https://date-fns.org/v1.29.0/docs/format" data-url="https://date-fns.org/v1.29.0/docs/format">date-fns format</a> (China mirror: <a target="_blank" href="http://Momentjs.cn/docs/#/displaying/format/" data-url="http://Momentjs.cn/docs/#/displaying/format/">moment format</a>)</p></li><li><p>Specify <code>schema.format</code> must follow <a target="_blank" href="https://tools.ietf.org/html/rfc3339#section-5.6" data-url="https://tools.ietf.org/html/rfc3339#section-5.6">RFC3339</a> time format, otherwise considered as a format error, default rules:</p><ul><li><p><code>date-time</code> default is <code>yyyy-MM-ddTHH:mm:ssZ</code></p></li><li><p><code>date</code>, <code>full-date</code> default is <code>yyyy-MM-dd</code></p></li><li><p><code>time</code>, <code>full-time</code> default is <code>HH:mm:ss</code></p></li><li><p><em>Non-standard:</em> <code>week</code> default is <code>yyyy-ww</code></p></li><li><p><em>Non-standard:</em> <code>month</code> default is <code>yyyy-MM</code></p></li></ul></li><li><p>When <code>schema.format</code> is not specified, the data formatting (Allows you to reassign default values via <a href="/docs/global-config" data-url="/docs/global-config">Global Configuration</a>) is determined by the <code>schema.type</code> type:</p><ul><li><p><code>string</code> default is <code>yyyy-MM-dd HH:mm:ss</code></p></li><li><p><code>number</code> default is <code>T</code> 13-bit Unix Timestamp</p></li></ul></li></ul></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[readOnly]</code></td><td>Whether to disable the state</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[format]</code></td><td>Data format type</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[mode]</code></td><td>Render mode</td><td><code>date,week,month,year</code></td><td><code>date</code></td></tr><tr><td><code>[rangeMode]</code></td><td>Set picker mode of range picker</td><td><code>date,week,month,year</code></td><td><code>date</code></td></tr><tr><td><code>[size]</code></td><td>Size of the <code>nz-date-picker</code></td><td><code>default,large,small</code></td><td>-</td></tr><tr><td><code>[placeholder]</code></td><td>Placeholder of date input</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[displayFormat]</code></td><td>Display format(<a target="_blank" href="https://ng.ant.design/components/date-picker/en#api" data-url="https://ng.ant.design/components/date-picker/en#api">nzFormat</a>)</td><td><code>string</code></td><td><code>yyyy-MM-dd HH:mm:ss</code></td></tr><tr><td><code>[end]</code></td><td>End <code>key</code> value for the date range</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[allowClear]</code></td><td>Whether to show clear button</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[className]</code></td><td>Picker className</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[disabledDate]</code></td><td>specify the date that cannot be selected</td><td><code>(current: Date) => boolean</code></td><td>-</td></tr><tr><td><code>[locale]</code></td><td>localization configuration</td><td><code>object</code></td><td>-</td></tr><tr><td><code>[popupStyle]</code></td><td>to customize the style of the popup calendar</td><td><code>object</code></td><td>-</td></tr><tr><td><code>[dropdownClassName]</code></td><td>to customize the className of the popup calendar</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[onOpenChange]</code></td><td>a callback emitter, can be executed whether the popup calendar is popped up or closed</td><td><code>(status: boolean) => void</code></td><td>-</td></tr><tr><td><code>[disabledTime]</code></td><td>to specify the time that cannot be selected</td><td><code>(current: Date) => { nzDisabledHours, nzDisabledMinutes, nzDisabledSeconds }</code></td><td>-</td></tr><tr><td><code>[renderExtraFooter]</code></td><td>render extra footer in panel</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[showTime]</code></td><td>to provide an additional time selection, the <code>object</code> type is <a target="_blank" href="https://ng.ant.design/components/time-picker/en#api" data-url="https://ng.ant.design/components/time-picker/en#api">TimePickerOptions</a></td><td><code>object,boolean</code></td><td><code>true</code></td></tr><tr><td><code>[showToday]</code></td><td>whether to show "Today" button</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[inputReadOnly]</code></td><td>Set the readonly attribute of the input tag (avoids virtual keyboard on touch devices)</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[inline]</code></td><td>Inline mode of the date picker</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[separator]</code></td><td>separator</td><td><code>string, TemplateRef</code></td><td><code>'~'</code></td></tr><tr><td><code>[showWeekNumber]</code></td><td>whether to show the week number on each row (Only supported by date picker. Week picker always shows week numbers)</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[onOk]</code></td><td>callback when click ok button</td><td><code>(data: Date | Date[]) => void</code></td><td>-</td></tr><tr><td><code>[change]</code></td><td>Date change callback</td><td><code>(data: Date | Date[]) => void</code></td><td>-</td></tr></tbody></table>`,meta:{title:"date",subtitle:"Date",type:"Widgets"},toc:[{id:"Notice",title:"Notice",h:2},{id:"API",title:"API",h:2,children:[{id:"schema",title:"schema",h:3},{id:"ui",title:"ui",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u8F93\u5165\u6216\u9009\u62E9\u65E5\u671F\u7684\u63A7\u4EF6\u3002</p><h2 id="\u6CE8\u610F\u4E8B\u9879"><a class="lake-link"><i data-anchor="\u6CE8\u610F\u4E8B\u9879"></i></a>\u6CE8\u610F\u4E8B\u9879</h2><ul><li><p>\u683C\u5F0F\u5316\u5206\u4E3A\uFF1A<strong>\u6570\u636E\u683C\u5F0F\u5316</strong>\u8868\u793A\u8868\u5355\u6570\u636E\u548C<strong>\u663E\u793A\u683C\u5F0F\u5316</strong>\u663E\u793A\u6570\u636E\uFF08\u7B49\u540C <a target="_blank" href="https://ng.ant.design/components/date-picker/zh#api" data-url="https://ng.ant.design/components/date-picker/zh#api">nzFormat</a> \u503C\uFF09</p></li><li><p>\u6240\u6709 <strong>\u6570\u636E\u683C\u5F0F\u5316</strong> \u5355\u4F4D\uFF0C\u53C2\u8003 <a target="_blank" href="https://date-fns.org/v1.29.0/docs/format" data-url="https://date-fns.org/v1.29.0/docs/format">date-fns format</a>\uFF08\u56FD\u5185\u955C\u50CF\uFF1A<a target="_blank" href="http://momentjs.cn/docs/#/displaying/format/" data-url="http://momentjs.cn/docs/#/displaying/format/">moment format</a>\uFF09</p></li><li><p>\u6307\u5B9A <code>schema.format</code> \u5219\u5FC5\u987B\u9075\u5B88 <a target="_blank" href="https://tools.ietf.org/html/rfc3339#section-5.6" data-url="https://tools.ietf.org/html/rfc3339#section-5.6">RFC3339</a> \u65F6\u95F4\u683C\u5F0F\uFF0C\u5426\u5219\u90FD\u89C6\u4E3A\u683C\u5F0F\u9519\u8BEF\uFF0C\u9ED8\u8BA4\u7684\u6570\u636E\u683C\u5F0F\u5316\u89C4\u5219\uFF1A</p><ul><li><p><code>date-time</code> \u9ED8\u8BA4 <code>yyyy-MM-DDTHH:mm:ssZ</code>\uFF0C\u6CE8\u610F\u8FD9\u91CC\u91C7\u7528\u7684\u662F <code>type="datetime-local"</code> \u56E0\u6B64\u4F1A\u6D89\u53CA\u5230<strong>\u65F6\u533A\u95EE\u9898</strong></p></li><li><p><code>date</code>\u3001<code>full-date</code> \u9ED8\u8BA4 <code>yyyy-MM-dd</code></p></li><li><p><code>time</code>\u3001<code>full-time</code> \u9ED8\u8BA4 <code>HH:mm:ss</code></p></li><li><p>\u975E\u6807\u51C6\uFF1A<code>week</code> \u9ED8\u8BA4 <code>yyyy-ww</code></p></li><li><p>\u975E\u6807\u51C6\uFF1A<code>month</code> \u9ED8\u8BA4 <code>yyyy-MM</code></p></li></ul></li><li><p>\u4E0D\u6307\u5B9A <code>schema.format</code> \u6839\u636E <code>schema.type</code> \u503C\u6309\u4EE5\u4E0B\u89C4\u5219\u5904\u7406\uFF08\u5141\u8BB8\u901A\u8FC7<a href="/docs/global-config" data-url="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\u66FF\u6362\uFF09\u6570\u636E\u683C\u5F0F\u5316\uFF1A</p><ul><li><p><code>string</code> \u9ED8\u8BA4 <code>yyyy-MM-dd HH:mm:ss</code></p></li><li><p><code>number</code> \u9ED8\u8BA4 <code>T</code> 13\u4F4DUnix Timestamp</p></li></ul></li></ul></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[readOnly]</code></td><td>\u7981\u7528\u72B6\u6001</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[format]</code></td><td>\u6570\u636E\u683C\u5F0F\u7C7B\u578B</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="ui\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[mode]</code></td><td>\u6E32\u67D3\u6A21\u5F0F</td><td><code>date,week,month,year</code></td><td><code>date</code></td></tr><tr><td><code>[rangeMode]</code></td><td>\u8303\u56F4\u9009\u62E9\u5668\u7684\u9009\u62E9\u6A21\u5F0F</td><td><code>date,week,month,year</code></td><td><code>date</code></td></tr><tr><td><code>[size]</code></td><td>\u5927\u5C0F\uFF0C\u7B49\u540C <code>nzSize</code></td><td><code>default,large,small</code></td><td>-</td></tr><tr><td><code>[placeholder]</code></td><td>\u5728\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u8BAF\u606F</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[format]</code></td><td>\u6570\u636E\u683C\u5F0F\u5316</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[displayFormat]</code></td><td>\u663E\u793A\u683C\u5F0F\u5316\uFF0C\uFF08\u7B49\u540C <a target="_blank" href="https://ng.ant.design/components/date-picker/zh#api" data-url="https://ng.ant.design/components/date-picker/zh#api">nzFormat</a> \u503C\uFF09</td><td><code>string</code></td><td><code>yyyy-MM-dd HH:mm:ss</code></td></tr><tr><td><code>[end]</code></td><td>\u65E5\u671F\u8303\u56F4\u6240\u5BF9\u5E94\u7684\u7ED3\u675F\u503C <code>key</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[allowClear]</code></td><td>\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[className]</code></td><td>\u9009\u62E9\u5668 className</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[locale]</code></td><td>\u56FD\u9645\u5316\u914D\u7F6E</td><td><code>object</code></td><td>-</td></tr><tr><td><code>[popupStyle]</code></td><td>\u989D\u5916\u7684\u5F39\u51FA\u65E5\u5386\u6837\u5F0F</td><td><code>object</code></td><td>-</td></tr><tr><td><code>[dropdownClassName]</code></td><td>\u989D\u5916\u7684\u5F39\u51FA\u65E5\u5386 className</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[onOpenChange]</code></td><td>\u5F39\u51FA\u65E5\u5386\u548C\u5173\u95ED\u65E5\u5386\u7684\u56DE\u8C03</td><td><code>(status: boolean) => void</code></td><td>-</td></tr><tr><td><code>[disabledDate]</code></td><td>\u4E0D\u53EF\u9009\u62E9\u7684\u65E5\u671F</td><td><code>(current: Date) => boolean</code></td><td>-</td></tr><tr><td><code>[disabledTime]</code></td><td>\u4E0D\u53EF\u9009\u62E9\u7684\u65F6\u95F4</td><td><code>(current: Date) => { nzDisabledHours, nzDisabledMinutes, nzDisabledSeconds }</code></td><td>-</td></tr><tr><td><code>[renderExtraFooter]</code></td><td>\u5728\u9762\u677F\u4E2D\u6DFB\u52A0\u989D\u5916\u7684\u9875\u811A</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[showTime]</code></td><td>\u589E\u52A0\u65F6\u95F4\u9009\u62E9\u529F\u80FD\uFF0C<code>object</code> \u7C7B\u578B\u4E3A <a target="_blank" href="https://ng.ant.design/components/time-picker/en#api" data-url="https://ng.ant.design/components/time-picker/en#api">TimePickerOptions</a></td><td><code>object,boolean</code></td><td><code>true</code></td></tr><tr><td><code>[showToday]</code></td><td>\u662F\u5426\u5C55\u793A\u201C\u4ECA\u5929\u201D\u6309\u94AE</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[inputReadOnly]</code></td><td>\u4E3A input \u6807\u7B7E\u8BBE\u7F6E\u53EA\u8BFB\u5C5E\u6027\uFF08\u907F\u514D\u5728\u79FB\u52A8\u8BBE\u5907\u4E0A\u89E6\u53D1\u5C0F\u952E\u76D8\uFF09</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[inline]</code></td><td>\u5185\u8054\u6A21\u5F0F</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[separator]</code></td><td>\u5206\u9694\u7B26</td><td><code>string, TemplateRef</code></td><td><code>'~'</code></td></tr><tr><td><code>[showWeekNumber]</code></td><td>\u662F\u5426\u5728\u6BCF\u4E00\u884C\u663E\u793A\u5468\u6570\uFF08\u4EC5\u65E5\u671F\u9009\u62E9\u5668\u652F\u6301\u3002\u5468\u9009\u62E9\u5668\u59CB\u7EC8\u663E\u793A\u5468\u6570\uFF09</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[onOk]</code></td><td>\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u7684\u56DE\u8C03</td><td><code>(data: Date | Date[]) => void</code></td><td>-</td></tr><tr><td><code>[change]</code></td><td>\u65F6\u95F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03</td><td><code>(data: Date | Date[]) => void</code></td><td>-</td></tr></tbody></table>`,meta:{title:"date",subtitle:"\u65E5\u671F",type:"Widgets"},toc:[{id:"\u6CE8\u610F\u4E8B\u9879",title:"\u6CE8\u610F\u4E8B\u9879",h:2},{id:"API",title:"API",h:2,children:[{id:"schema\u5C5E\u6027",title:"schema \u5C5E\u6027",h:3},{id:"ui\u5C5E\u6027",title:"ui \u5C5E\u6027",h:3}]}]}},demo:!0},this.codes=[{id:"form-date-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';
import { SFDateWidgetSchema, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-date-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)" (formChange)="change($event)"></sf> \`,
})
export class FormDateSimpleComponent {
  schema: SFSchema = {
    properties: {
      datetime: {
        type: 'string',
        format: 'date-time',
      },
      date: {
        type: 'string',
        format: 'date',
      },
      date_number: {
        type: 'number',
        ui: { widget: 'date' } as SFDateWidgetSchema,
      },
      year: {
        type: 'number',
        ui: { widget: 'date', mode: 'year', format: 'yyyy' } as SFDateWidgetSchema,
      },
      month: {
        type: 'string',
        format: 'month',
      },
      week: {
        type: 'string',
        format: 'week',
      },
      range: {
        type: 'string',
        ui: { widget: 'date', mode: 'range' } as SFDateWidgetSchema,
      },
      start: {
        type: 'string',
        ui: { widget: 'date', end: 'end' } as SFDateWidgetSchema,
      },
      end: {
        type: 'string',
        ui: { widget: 'date', end: 'end' } as SFDateWidgetSchema,
      },
      inline: {
        type: 'string',
        ui: { widget: 'date', inline: true } as SFDateWidgetSchema,
      },
    },
  };

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }

  change(value: {}): void {
    console.log('change', value);
  }
}`,lang:"ts",componentName:"FormDateSimpleComponent",point:0,name:"simple",urls:"packages/form/src/widgets/date/demo/simple.md",type:"demo"},{id:"form-date-range",meta:{title:{"zh-CN":"\u8303\u56F4","en-US":"Data Range"},order:1},summary:{"zh-CN":"<p>\u4E00\u4E2A\u7B80\u5355\u7684\u5F00\u59CB\u4E0E\u7ED3\u675F\u65E5\u671F\uFF0C<strong>\u6CE8\u610F\uFF1A</strong> <code>end</code> \u4F9D\u7136\u9700\u8981\u5B9A\u4E49\u5BF9\u5E94\u7684Schema\uFF0C\u4F46\u4F1A\u5F3A\u5236\u9690\u85CF\u72B6\u6001\u3002</p>","en-US":"<p>A simple start & end date range, <strong>Note: </strong> <code>end</code> still needs define in schema, but will forced to be hidden.</p>"},code:`import { Component } from '@angular/core';

import { subWeeks } from 'date-fns';

import { SFDateWidgetSchema, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-date-range',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)"></sf> \`
})
export class FormDateRangeComponent {
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

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormDateRangeComponent",point:1,name:"range",urls:"packages/form/src/widgets/date/demo/range.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-date"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-date-simple"),i(7,`
        `),c(),i(8,`
      
        `),r(9,"code-box",3),i(10,`
          `),p(11,"form-date-range"),i(12,`
        `),c(),i(13,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id),s(5),a("item",d.codes[1]),v("id",d.codes[1].id))},dependencies:[w,C,k,F,Yt,Kt],encapsulation:2});let n=e;return n})();var Xt=(()=>{let e=class e{constructor(o){this.msg=o,this.schema={properties:{number:{type:"number",minimum:18,maximum:100,multipleOf:2,ui:{widgetWidth:200}},integer:{type:"integer",default:10,ui:{widgetWidth:"100%"}},unit:{type:"number",default:10,ui:{unit:"%"}},prefix:{type:"number",default:10,ui:{prefix:"$"}},hideStep:{type:"number",default:10,ui:{hideStep:!0}}}}}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-number-simple"]],decls:3,vars:1,consts:[[3,"schema","formSubmit"]],template:function(t,d){t&1&&(i(0," "),r(1,"sf",0),h("formSubmit",function(u){return d.submit(u)}),c(),i(2," ")),t&2&&(s(1),a("schema",d.schema))},dependencies:[f],encapsulation:2});let n=e;return n})();var te=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/src/widgets/number/index.en-US.md","zh-CN":"packages/form/src/widgets/number/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Enter a number within certain range with the mouse or keyboard.</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[minimum]</code></td><td>min value</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[exclusiveMinimum]</code></td><td>Indicate whether minimum are exclusive of the value</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[maximum]</code></td><td>max value</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[exclusiveMaximum]</code></td><td>Indicate whether maximum are exclusive of the value</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[multipleOf]</code></td><td>Restricted to a multiple of a given number,</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td><code>[change]</code></td><td>Change event for the number</td><td><code>(val?: number) => void</code></td><td>-</td></tr></tbody></table><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[prefix]</code></td><td>Prefix, simplifying the use of <code>nzFormatter</code>, <code>nzParser</code></td><td>-</td><td>-</td></tr><tr><td><code>[unit]</code></td><td>Unit, simplifying the use of <code>nzFormatter</code>, <code>nzParser</code></td><td>-</td><td>-</td></tr><tr><td><code>[formatter]</code></td><td>Specifies the format of the value presented</td><td>-</td><td>-</td></tr><tr><td><code>[parser]</code></td><td>Specifies the value extracted from nzFormatter</td><td>-</td><td>-</td></tr><tr><td><code>[precision]</code></td><td>precision of input value</td><td>-</td><td>-</td></tr><tr><td><code>[widgetWidth]</code></td><td>Specify <code>nz-number</code> width</td><td><code>number, string</code></td><td><code>90</code></td></tr><tr><td><code>[hideStep]</code></td><td>Hide step icon</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h2 id="QA"><a class="lake-link"><i data-anchor="QA"></i></a>QA</h2><h3 id="Whycan'tmodifyunit"><a class="lake-link"><i data-anchor="Whycan'tmodifyunit"></i></a>Why can't modify <code>unit</code></h3><p>All components of NG-ZORRO are in OnPush mode. A special case is that when the <code>unit</code> needs to be dynamically modified, it will only take effect when the <code>ngModel</code> change needs to be triggered once, so it's value needs to be changed, for example:</p><pre class="hljs language-ts"><code>const ageProperty = this.sf.getProperty('/age')!;
ageProperty.widget.ui.unit ='c';
ageProperty.widget.setValue(null);
ageProperty.widget.setValue(statusProperty.value);</code></pre>`,meta:{title:"number",subtitle:"Input Number",type:"Widgets",order:5},toc:[{id:"API",title:"API",h:2,children:[{id:"schema",title:"schema",h:3},{id:"ui",title:"ui",h:3}]},{id:"QA",title:"QA",h:2,children:[{id:"Whycan'tmodifyunit",title:"Why can't modify unit",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u901A\u8FC7\u9F20\u6807\u6216\u952E\u76D8\uFF0C\u8F93\u5165\u8303\u56F4\u5185\u7684\u6570\u503C</p><h2 id="\u6CE8\u610F\u4E8B\u9879"><a class="lake-link"><i data-anchor="\u6CE8\u610F\u4E8B\u9879"></i></a>\u6CE8\u610F\u4E8B\u9879</h2><ul><li><p>\u82E5 <code>type="integer"</code> \u4F1A<strong>\u5F3A\u5236</strong>\u79FB\u9664 <code>minimum</code>\u3001<code>maximum</code>\u3001<code>multipleOf</code> \u53C2\u6570\u7684\u5C0F\u6570\u90E8\u5206\u3002</p></li></ul></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[minimum]</code></td><td>\u6700\u5C0F\u503C</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[exclusiveMinimum]</code></td><td>\u7EA6\u675F\u662F\u5426\u5305\u62EC <code>minimum</code> \u503C\uFF0C<code>true</code> \u8868\u793A\u6392\u9664 <code>minimum</code> \u503C</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[maximum]</code></td><td>\u6700\u5927\u503C</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[exclusiveMaximum]</code></td><td>\u7EA6\u675F\u662F\u5426\u5305\u62EC <code>maximum</code> \u503C\uFF0C<code>true</code> \u8868\u793A\u6392\u9664 <code>maximum</code> \u503C</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[multipleOf]</code></td><td>\u500D\u6570</td><td><code>number</code></td><td><code>1</code></td></tr></tbody></table><h3 id="ui\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[prefix]</code></td><td>\u524D\u7F00\uFF0C\u7B80\u5316 <code>nzFormatter</code>\u3001<code>nzParser</code> \u7684\u4F7F\u7528</td><td>-</td><td>-</td></tr><tr><td><code>[unit]</code></td><td>\u5355\u4F4D\uFF0C\u7B80\u5316 <code>nzFormatter</code>\u3001<code>nzParser</code> \u7684\u4F7F\u7528</td><td>-</td><td>-</td></tr><tr><td><code>[formatter]</code></td><td>\u7B49\u540C <code>nzFormatter</code></td><td>-</td><td>-</td></tr><tr><td><code>[parser]</code></td><td>\u7B49\u540C <code>nzParser</code></td><td>-</td><td>-</td></tr><tr><td><code>[precision]</code></td><td>\u7B49\u540C <code>nzPrecision</code></td><td>-</td><td>-</td></tr><tr><td><code>[widgetWidth]</code></td><td>\u6307\u5B9A <code>nz-number</code> \u5BBD\u5EA6</td><td><code>number, string</code></td><td><code>90</code></td></tr><tr><td><code>[hideStep]</code></td><td>\u9690\u85CF\u6B65\u6570\u64CD\u4F5C\u533A</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[change]</code></td><td>\u53D8\u66F4\u4E8B\u4EF6</td><td><code>(val?: number) => void</code></td><td>-</td></tr></tbody></table><h2 id="QA"><a class="lake-link"><i data-anchor="QA"></i></a>QA</h2><h3 id="\u4E3A\u4EC0\u4E48unit\u65E0\u6CD5\u53D8\u66F4"><a class="lake-link"><i data-anchor="\u4E3A\u4EC0\u4E48unit\u65E0\u6CD5\u53D8\u66F4"></i></a>\u4E3A\u4EC0\u4E48 <code>unit</code> \u65E0\u6CD5\u53D8\u66F4</h3><p>NG-ZORRO \u6240\u6709\u7EC4\u4EF6\u90FD\u662F OnPush \u6A21\u5F0F\uFF0C\u4E00\u79CD\u7279\u6B8A\u60C5\u51B5\u662F\u5F53\u9700\u8981\u52A8\u6001\u4FEE\u6539 <code>unit</code> \u65F6\uFF0C\u7531\u4E8E\u9700\u8981\u89E6\u53D1\u4E00\u6B21 <code>ngModel</code> \u53D8\u66F4\u65F6\u624D\u4F1A\u751F\u6548\uFF0C\u56E0\u6B64\u9700\u8981\u4F7F\u5176\u503C\u53D1\u751F\u53D8\u66F4\uFF0C\u4F8B\u5982\uFF1A</p><pre class="hljs language-ts"><code>const ageProperty = this.sf.getProperty('/age')!;
ageProperty.widget.ui.unit = 'c';
ageProperty.widget.setValue(null);
ageProperty.widget.setValue(statusProperty.value);</code></pre>`,meta:{title:"number",subtitle:"\u6570\u5B57",type:"Widgets",order:5},toc:[{id:"\u6CE8\u610F\u4E8B\u9879",title:"\u6CE8\u610F\u4E8B\u9879",h:2},{id:"API",title:"API",h:2,children:[{id:"schema\u5C5E\u6027",title:"schema \u5C5E\u6027",h:3},{id:"ui\u5C5E\u6027",title:"ui \u5C5E\u6027",h:3}]},{id:"QA",title:"QA",h:2,children:[{id:"\u4E3A\u4EC0\u4E48unit\u65E0\u6CD5\u53D8\u66F4",title:"\u4E3A\u4EC0\u4E48 unit \u65E0\u6CD5\u53D8\u66F4",h:3}]}]}},demo:!0},this.codes=[{id:"form-number-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';

import { SFNumberWidgetSchema, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-number-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)"></sf> \`
})
export class FormNumberSimpleComponent {
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

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormNumberSimpleComponent",point:0,name:"simple",urls:"packages/form/src/widgets/number/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-number"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-number-simple"),i(7,`
        `),c(),i(8,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id))},dependencies:[w,C,k,F,Xt],encapsulation:2});let n=e;return n})();var ee=(()=>{let e=class e{constructor(o){this.msg=o,this.schema={properties:{name:{type:"string"},age:{type:"number"}},required:["name","age"],ui:{spanLabel:4,spanControl:5}}}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-object-simple"]],decls:1,vars:1,consts:[[3,"schema","formSubmit"]],template:function(t,d){t&1&&(r(0,"sf",0),h("formSubmit",function(u){return d.submit(u)}),c()),t&2&&a("schema",d.schema)},dependencies:[f],encapsulation:2});let n=e;return n})();var fd=["extra"];function bd(n,e){if(n&1){let D=q();i(0,`
      `),r(1,"sf",1),h("formSubmit",function(t){R(D);let d=U();return B(d.submit(t))}),c(),i(2,`
    `)}if(n&2){let D=U();s(1),a("schema",D.schema)}}function yd(n,e){if(n&1){let D=q();i(0,`
      `),r(1,"a",2),h("click",function(){R(D);let t=U();return B(t.msg.success("Success"))}),i(2,"More"),c(),i(3,`
    `)}}var de=(()=>{let e=class e{constructor(o){this.msg=o}ngOnInit(){this.schema={properties:{name:{type:"string"},age:{type:"number"},address1:{title:"\u5730\u57401",type:"object",properties:{country:{type:"string"},city:{type:"string"},zone:{type:"string"}},ui:{type:"card",cardExtra:this.extra}},address2:{title:"\u5730\u57402",type:"object",properties:{country:{type:"string"},city:{type:"string"},zone:{type:"string"}},ui:{type:"card",showExpand:!1}}},required:["name","age"],ui:{spanLabelFixed:150,grid:{span:12,gutter:16}}}}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-object-card"]],viewQuery:function(t,d){if(t&1&&E(fd,7),t&2){let m;M(m=j())&&(d.extra=m.first)}},decls:5,vars:1,consts:[["extra",""],[3,"schema","formSubmit"],[3,"click"]],template:function(t,d){t&1&&(i(0,`
    `),V(1,bd,3,1)(2,yd,4,0,"ng-template",null,0,J),i(4,`
  `)),t&2&&(s(1),H(1,d.schema?1:-1))},dependencies:[f],encapsulation:2});let n=e;return n})();var oe=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/src/widgets/object/index.en-US.md","zh-CN":"packages/form/src/widgets/object/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Create an object widget, valid only for <code>schema.type="object"</code>.</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[properties]</code></td><td>Defining the properties of an object schema</td><td><code>{ [key: string]: SFSchema }</code></td><td>-</td></tr><tr><td><code>[required]</code></td><td>The data object to be valid should contain all properties with names equal to the elements in the keyword value</td><td><code>string[]</code></td><td>-</td></tr><tr><td><code>[maxProperties]</code></td><td>The data object to be valid should have not more (less) properties than the keyword value</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[minProperties]</code></td><td>The data object to be valid should have not more (less) properties than the keyword value</td><td><code>number</code></td><td>-</td></tr></tbody></table><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[showExpand]</code></td><td>Whether to show the card body, click to hide the content, only <code>type ==='card'</code></td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[expand]</code></td><td>Expanded state, only <code>type ==='card'</code></td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[showTitle]</code></td><td>Whether to display the title</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[type]</code></td><td>Render type of object</td><td><code>card, default</code></td><td><code>default</code></td></tr><tr><td><code>[cardSize]</code></td><td>The same as <code>nzSize</code></td><td><code>small, default</code></td><td><code>small</code></td></tr><tr><td><code>[cardBodyStyle]</code></td><td>The same as <code>nzBodyStyle</code></td><td><code>{ [key: string]: string }</code></td><td>-</td></tr><tr><td><code>[cardBorderless]</code></td><td>The same as <code>nzBorderless</code></td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[cardExtra]</code></td><td>The same as <code>nzExtra</code></td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[cardActions]</code></td><td>The same as <code>nzActions</code></td><td><code>Array&lt;TemplateRef<void>></code></td><td>-</td></tr></tbody></table>`,meta:{title:"object",subtitle:"Object",type:"Widgets",order:1},toc:[{id:"API",title:"API",h:2,children:[{id:"schema",title:"schema",h:3},{id:"ui",title:"ui",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u521B\u5EFA\u5BF9\u8C61\uFF0C\u53EA\u5BF9 <code>schema.type="object"</code> \u65F6\u6709\u6548\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[properties]</code></td><td>\u5B9A\u4E49\u5BF9\u8C61\u7684\u5C5E\u6027</td><td><code>{ [key: string]: SFSchema }</code></td><td>-</td></tr><tr><td><code>[required]</code></td><td>\u5FC5\u586B\u9879\u5C5E\u6027</td><td><code>string[]</code></td><td>-</td></tr><tr><td><code>[maxProperties]</code></td><td>\u6700\u5927\u5C5E\u6027\u4E2A\u6570\uFF0C\u5FC5\u987B\u662F\u975E\u8D1F\u6574\u6570</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[minProperties]</code></td><td>\u6700\u5C0F\u5C5E\u6027\u4E2A\u6570\uFF0C\u5FC5\u987B\u662F\u975E\u8D1F\u6574\u6570</td><td><code>number</code></td><td>-</td></tr></tbody></table><h3 id="ui\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[showExpand]</code></td><td>\u662F\u5426\u663E\u793A\u6269\u5C55\uFF0C\u70B9\u51FB\u9690\u85CF\u5185\u5BB9\uFF0C\u9650 <code>type === 'card'</code></td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[expand]</code></td><td>\u5C55\u5F00\u72B6\u6001\uFF0C\u9650 <code>type === 'card'</code></td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[showTitle]</code></td><td>\u662F\u5426\u663E\u793A\u6807\u9898</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[type]</code></td><td>\u6E32\u67D3\u7C7B\u578B</td><td><code>card, default</code></td><td><code>default</code></td></tr><tr><td><code>[cardSize]</code></td><td>\u7B49\u540C <code>nzSize</code> \u5C5E\u6027</td><td><code>small, default</code></td><td><code>small</code></td></tr><tr><td><code>[cardBodyStyle]</code></td><td>\u7B49\u540C <code>nzBodyStyle</code> \u5C5E\u6027</td><td><code>{ [key: string]: string }</code></td><td>-</td></tr><tr><td><code>[cardBorderless]</code></td><td>\u7B49\u540C <code>nzBorderless</code> \u5C5E\u6027</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[cardExtra]</code></td><td>\u7B49\u540C <code>nzExtra</code> \u5C5E\u6027</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[cardActions]</code></td><td>\u7B49\u540C <code>nzActions</code> \u5C5E\u6027</td><td><code>Array&lt;TemplateRef<void>></code></td><td>-</td></tr></tbody></table>`,meta:{title:"object",subtitle:"\u5BF9\u8C61",type:"Widgets",order:1},toc:[{id:"API",title:"API",h:2,children:[{id:"schema\u5C5E\u6027",title:"schema \u5C5E\u6027",h:3},{id:"ui\u5C5E\u6027",title:"ui \u5C5E\u6027",h:3}]}]}},demo:!0},this.codes=[{id:"form-object-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';
import { SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-object-simple',
  template: \`<sf [schema]="schema" (formSubmit)="submit($event)"></sf>\`,
})
export class FormObjectSimpleComponent {
  schema: SFSchema = {
    properties: {
      name: { type: 'string' },
      age: { type: 'number' },
    },
    required: ['name', 'age'],
    ui: {
      // \u6307\u5B9A \`label\` \u548C \`control\` \u5728\u4E00\u884C\u4E2D\u5404\u5360\u6805\u683C\u6570
      spanLabel: 4,
      spanControl: 5,
    },
  };

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormObjectSimpleComponent",point:0,name:"simple",urls:"packages/form/src/widgets/object/demo/simple.md",type:"demo"},{id:"form-object-card",meta:{title:{"zh-CN":"\u5361\u7247\u5BB9\u5668","en-US":"Rectangular container"},order:1},summary:{"zh-CN":"<p>\u5305\u542B\u6807\u9898\u3001\u5185\u5BB9\u3001\u64CD\u4F5C\u533A\u57DF\u3002</p>","en-US":"<p>A basic card containing a title, content and an extra corner content.</p>"},code:`import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { SFObjectWidgetSchema, SFSchema } from '@delon/form';
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
})
export class FormObjectCardComponent implements OnInit {
  @ViewChild('extra', { static: true }) private extra!: TemplateRef<void>;
  schema?: SFSchema;

  constructor(public msg: NzMessageService) {}

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
            zone: { type: 'string' },
          },
          ui: {
            type: 'card',
            cardExtra: this.extra,
          } as SFObjectWidgetSchema,
        },
        address2: {
          title: '\u5730\u57402',
          type: 'object',
          properties: {
            country: { type: 'string' },
            city: { type: 'string' },
            zone: { type: 'string' },
          },
          ui: {
            type: 'card',
            showExpand: false,
          } as SFObjectWidgetSchema,
        },
      },
      required: ['name', 'age'],
      ui: {
        spanLabelFixed: 150,
        grid: { span: 12, gutter: 16 },
      } as SFObjectWidgetSchema,
    };
  }

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormObjectCardComponent",point:1,name:"card",urls:"packages/form/src/widgets/object/demo/card.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-object"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-object-simple"),i(7,`
        `),c(),i(8,`
      
        `),r(9,"code-box",3),i(10,`
          `),p(11,"form-object-card"),i(12,`
        `),c(),i(13,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id),s(5),a("item",d.codes[1]),v("id",d.codes[1].id))},dependencies:[w,C,k,F,ee,de],encapsulation:2});let n=e;return n})();var ne=(()=>{let e=class e{constructor(o){this.msg=o,this.schema={properties:{btn:{type:"string",title:"Button",enum:["A","B","C"],ui:{widget:"radio",styleType:"button",buttonStyle:"solid"},default:"A"},async:{type:"string",title:"Async",ui:{widget:"radio",asyncData:()=>P([{label:"\u7537",value:"M"},{label:"\u5973",value:"F"},{label:"\u672A\u77E5",value:"N"}]).pipe(A(100)),change:console.log},default:"N"}}}}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-radio-simple"]],decls:3,vars:1,consts:[[3,"schema","formSubmit"]],template:function(t,d){t&1&&(i(0," "),r(1,"sf",0),h("formSubmit",function(u){return d.submit(u)}),c(),i(2," ")),t&2&&(s(1),a("schema",d.schema))},dependencies:[f],encapsulation:2});let n=e;return n})();var ie=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/src/widgets/radio/index.en-US.md","zh-CN":"packages/form/src/widgets/radio/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Radio.</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[readOnly]</code></td><td>Whether to disable the state</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[enum]</code></td><td>Render radio group</td><td><code>SFSchemaEnumType[]</code></td><td>-</td></tr></tbody></table><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[asyncData]</code></td><td>Async data source</td><td><code>() => Observable&lt;SFSchemaEnumType[]></code></td><td>-</td></tr><tr><td><code>[size]</code></td><td>Size of the <code>nz-radio</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[styleType]</code></td><td>Style of the <code>nz-radio</code></td><td><code>default, button</code></td><td><code>default</code></td></tr><tr><td><code>[change]</code></td><td>Changed event</td><td><code>(res: SFValue) => void</code></td><td>-</td></tr><tr><td><code>[buttonStyle]</code></td><td>style type of radio button</td><td><code>'outline'\uFF5C'solid'</code></td><td><code>'outline'</code></td></tr></tbody></table>`,meta:{title:"radio",subtitle:"Radio",type:"Widgets"},toc:[{id:"API",title:"API",h:2,children:[{id:"schema",title:"schema",h:3},{id:"ui",title:"ui",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u5355\u9009\u6846\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[enum]</code></td><td>\u6570\u636E\u6E90</td><td><code>SFSchemaEnumType[]</code></td><td>-</td></tr><tr><td><code>[readOnly]</code></td><td>\u7981\u7528\u72B6\u6001</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="ui\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[asyncData]</code></td><td>\u5F02\u6B65\u6570\u636E\u6E90</td><td><code>() => Observable&lt;SFSchemaEnumType[]></code></td><td>-</td></tr><tr><td><code>[size]</code></td><td>\u5927\u5C0F\uFF0C\u7B49\u540C <code>nzSize</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[styleType]</code></td><td>radio \u7684\u6837\u5F0F</td><td><code>default, button</code></td><td><code>default</code></td></tr><tr><td><code>[change]</code></td><td>\u503C\u53D8\u66F4\u4E8B\u4EF6</td><td><code>(res: SFValue) => void</code></td><td>-</td></tr><tr><td><code>[buttonStyle]</code></td><td>RadioButton \u7684\u98CE\u683C\u6837\u5F0F\uFF0C\u76EE\u524D\u6709\u63CF\u8FB9\u548C\u586B\u8272\u4E24\u79CD\u98CE\u683C</td><td><code>'outline'\uFF5C'solid'</code></td><td><code>'outline'</code></td></tr></tbody></table>`,meta:{title:"radio",subtitle:"\u5355\u9009\u6846",type:"Widgets"},toc:[{id:"API",title:"API",h:2,children:[{id:"schema\u5C5E\u6027",title:"schema \u5C5E\u6027",h:3},{id:"ui\u5C5E\u6027",title:"ui \u5C5E\u6027",h:3}]}]}},demo:!0},this.codes=[{id:"form-radio-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';
import { SFRadioWidgetSchema, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';
import { of, delay } from 'rxjs';

@Component({
  selector: 'form-radio-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)"></sf> \`,
})
export class FormRadioSimpleComponent {
  schema: SFSchema = {
    properties: {
      btn: {
        type: 'string',
        title: 'Button',
        enum: ['A', 'B', 'C'],
        ui: {
          widget: 'radio',
          styleType: 'button',
          buttonStyle: 'solid',
        } as SFRadioWidgetSchema,
        default: 'A',
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
              { label: '\u672A\u77E5', value: 'N' },
            ]).pipe(delay(100)),
          change: console.log,
        } as SFRadioWidgetSchema,
        default: 'N',
      },
    },
  };

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormRadioSimpleComponent",point:0,name:"simple",urls:"packages/form/src/widgets/radio/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-radio"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-radio-simple"),i(7,`
        `),c(),i(8,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id))},dependencies:[w,C,k,F,ne],encapsulation:2});let n=e;return n})();var kd=["sf"],ae=(()=>{let e=class e{constructor(o){this.msg=o,this.schema={properties:{status:{type:"string",title:"\u72B6\u6001",enum:[{label:"\u5F85\u652F\u4ED8",value:"WAIT_BUYER_PAY",otherData:1},{label:"\u5DF2\u652F\u4ED8",value:"TRADE_SUCCESS"},{label:"\u4EA4\u6613\u5B8C\u6210",value:"TRADE_FINISHED"}],default:"WAIT_BUYER_PAY",ui:{widget:"select",change:(t,d)=>console.log(t,d)}},tags:{type:"string",title:"\u6807\u7B7E",enum:[{label:"\u5F85\u652F\u4ED8",value:"WAIT_BUYER_PAY"},{label:"\u5DF2\u652F\u4ED8",value:"TRADE_SUCCESS"},{label:"\u4EA4\u6613\u5B8C\u6210",value:"TRADE_FINISHED"}],ui:{widget:"select",mode:"tags"},default:null},async:{type:"string",title:"Async",default:"WAIT_BUYER_PAY",ui:{widget:"select",asyncData:()=>P([{label:"\u8BA2\u5355\u72B6\u6001",group:!0,children:[{label:"\u5F85\u652F\u4ED8",value:"WAIT_BUYER_PAY"},{label:"\u5DF2\u652F\u4ED8",value:"TRADE_SUCCESS"},{label:"\u4EA4\u6613\u5B8C\u6210",value:"TRADE_FINISHED"}]}]).pipe(A(1200))}},hide:{type:"string",title:"\u9690\u85CF\u9879",enum:[{label:"\u7B2C1\u4E2A",value:1},{label:"\u7B2C2\u4E2A",value:2,hide:!0},{label:"\u7B2C3\u4E2A(\u7B2C2\u4E2A\u88AB\u9690\u85CF\u4E86)",value:3}],default:1}}}}submit(o){this.msg.success(JSON.stringify(o))}updateStatus(){let o=this.sf.getProperty("/status");o.schema.enum=["1","2","3"],o.widget.reset("2")}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-select-simple"]],viewQuery:function(t,d){if(t&1&&E(kd,5),t&2){let m;M(m=j())&&(d.sf=m.first)}},decls:7,vars:1,consts:[[3,"schema","formSubmit"],["sf",""],["nz-button","",3,"click"]],template:function(t,d){t&1&&(i(0,`
    `),r(1,"sf",0,1),h("formSubmit",function(u){return d.submit(u)}),c(),i(3,`
    `),r(4,"button",2),h("click",function(){return d.updateStatus()}),i(5,"Update Status"),c(),i(6,`
  `)),t&2&&(s(1),a("schema",d.schema))},dependencies:[f,O,_,W],encapsulation:2});let n=e;return n})();var wd=["sf"],re=(()=>{let e=class e{constructor(o){this.msg=o,this.data={province:"Zhejiang",city:"Ningbo"},this.cityData={Zhejiang:["Hangzhou","Ningbo","Wenzhou"],Jiangsu:["Nanjing","Suzhou","Zhenjiang"]},this.schema={properties:{province:{type:"string",title:"Province",ui:{widget:"select",asyncData:()=>P(["Zhejiang","Jiangsu"]).pipe(A(100),at(()=>this.updateCity(this.data.province,this.data.city))),change:t=>this.updateCity(t)}},city:{type:"string",title:"City",ui:{widget:"select"}}}}}submit(o){this.msg.success(JSON.stringify(o))}updateCity(o,t=""){let d=this.sf.getProperty("/city"),m=this.cityData[o];d.schema.enum=m,d.widget.reset(t||m[0])}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-select-coordinate"]],viewQuery:function(t,d){if(t&1&&E(wd,5),t&2){let m;M(m=j())&&(d.sf=m.first)}},decls:4,vars:2,consts:[[3,"schema","formData","formSubmit"],["sf",""]],template:function(t,d){t&1&&(i(0," "),r(1,"sf",0,1),h("formSubmit",function(u){return d.submit(u)}),c(),i(3," ")),t&2&&(s(1),a("schema",d.schema)("formData",d.data))},dependencies:[f],encapsulation:2});let n=e;return n})();var zd=["sf"],Td=["dropdownRender"];function Nd(n,e){if(n&1){let D=q();i(0,`
      `),r(1,"sf",1,2),h("formSubmit",function(t){R(D);let d=U();return B(d.submit(t))}),c(),i(3,`
    `)}if(n&2){let D=U();s(1),a("schema",D.schema)}}function Id(n,e){if(n&1){let D=q();i(0,`
      `),p(1,"nz-divider"),i(2,`
      `),r(3,"div",3),i(4,`
        `),p(5,"input",4,5),i(7,`
        `),r(8,"a",6),h("click",function(){R(D);let t=st(6),d=U();return B(d.addItem(t))}),p(9,"i",7),i(10," Add item"),c(),i(11,`
      `),c(),i(12,`
    `)}}var ce=(()=>{let e=class e{constructor(o){this.msg=o,this.statusList=["1","2","3"]}submit(o){this.msg.success(JSON.stringify(o))}ngOnInit(){this.schema={properties:{status:{type:"string",title:"\u72B6\u6001",enum:this.statusList,default:"1",ui:{widget:"select",dropdownRender:this.dropdownRender}}}}}addItem(o){this.statusList.push(o.value);let t=this.sf.getProperty("/status");t.schema.enum=this.statusList,this.sf.setValue("/status",o.value)}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-select-custom-dropdown-menu"]],viewQuery:function(t,d){if(t&1&&(E(zd,5),E(Td,7)),t&2){let m;M(m=j())&&(d.sf=m.first),M(m=j())&&(d.dropdownRender=m.first)}},decls:5,vars:1,consts:[["dropdownRender",""],[3,"schema","formSubmit"],["sf",""],[1,"container"],["type","text","nz-input",""],["inputElement",""],[1,"add-item",3,"click"],["nz-icon","","nzType","plus"]],template:function(t,d){t&1&&(i(0,`
    `),V(1,Nd,4,1)(2,Id,13,0,"ng-template",null,0,J),i(4,`
  `)),t&2&&(s(1),H(1,d.schema?1:-1))},dependencies:[f,_,Q,K,St],styles:["nz-divider[_ngcontent-%COMP%]{margin:4px 0}.container[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;padding:8px}.add-item[_ngcontent-%COMP%]{flex:0 0 auto;padding:8px;display:block}"]});let n=e;return n})();var se=(()=>{let e=class e{constructor(o,t){this.msg=o,this.http=t,this.schema={properties:{status:{type:"string",title:"\u7528\u6237",ui:{widget:"select",serverSearch:!0,searchDebounceTime:300,searchLoadingText:"\u641C\u7D22\u4E2D...",onSearch:d=>this.http.get(`https://api.randomuser.me/?results=5&q=${d}`).pipe(ot(m=>m.results.map(u=>({label:u.email,value:u.email})))).toPromise()}}}}}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b),g(Y))},e.\u0275cmp=l({type:e,selectors:[["form-select-search"]],decls:3,vars:1,consts:[[3,"schema","formSubmit"]],template:function(t,d){t&1&&(i(0," "),r(1,"sf",0),h("formSubmit",function(u){return d.submit(u)}),c(),i(2," ")),t&2&&(s(1),a("schema",d.schema))},dependencies:[f],encapsulation:2});let n=e;return n})();var le=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/src/widgets/select/index.en-US.md","zh-CN":"packages/form/src/widgets/select/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Select.</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[enum]</code></td><td>Data source</td><td><code>SFSchemaEnumType[]</code></td><td>-</td></tr><tr><td><code>[readOnly]</code></td><td>Read only</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[asyncData]</code></td><td>Asynchronous static data source</td><td><code>() => Observable&lt;SFSchemaEnumType[]></code></td><td>-</td></tr><tr><td><code>[size]</code></td><td>Size, equals to <code>nzSize</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[compareWith]</code></td><td>Same with <a target="_blank" href="https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection" data-url="https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection">SelectControlValueAccessor</a></td><td><code>(o1: any, o2: any) => boolean</code></td><td><code>(o1: any, o2: any) => o1===o2</code></td></tr><tr><td><code>[placeholder]</code></td><td>Placeholder</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[autoClearSearchValue]</code></td><td>Whether clear search box when an option is selected, only valid when <code>mode</code> is <code>multiple</code> or <code>tags</code>.</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[allowClear]</code></td><td>Allow clear</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[borderless]</code></td><td>Whether has border</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[autoFocus]</code></td><td>Focused by default</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[dropdownClassName]</code></td><td>className property of dropdown list</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[dropdownMatchSelectWidth]</code></td><td>Dropdown list and select have same width</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[dropdownStyle]</code></td><td>style property of dropdown list</td><td><code>object</code></td><td>-</td></tr><tr><td><code>[serverSearch]</code></td><td>Whether using server search, won't fliter nz-option in frontend when it is true</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[searchDebounceTime]</code></td><td>Debounce time of server search</td><td><code>number</code></td><td><code>300</code></td></tr><tr><td><code>[searchLoadingText]</code></td><td>Loading text of searching</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[onSearch]</code></td><td>Callback when search content is changed, parameter is search content, must return <code>Promise</code> object</td><td><code>(text: string) => Promise&lt;SFSchemaEnum[]></code></td><td>-</td></tr><tr><td><code>[maxMultipleCount]</code></td><td>Maximum selected labels</td><td><code>number</code></td><td><code>Infinity</code></td></tr><tr><td><code>[mode]</code></td><td>Set mode for nz-select, suggest to add <code>default: null</code> for <code>tags</code>, otherwise, it would initialize an empty label.</td><td><code>multiple,tags,default</code></td><td><code>default</code></td></tr><tr><td><code>[notFoundContent]</code></td><td>Content when dropdown list is empty</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[showSearch]</code></td><td>Enable search for signle select mode</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[showArrow]</code></td><td>Whether to show the drop-down arrow</td><td><code>boolean</code></td><td><code>true</code>(for single select), <code>false</code>(for multiple select)</td></tr><tr><td><code>[tokenSeparators]</code></td><td>Separator for automatic word segmentation when it is tags and multiple mode</td><td><code>string[]</code></td><td><code>[]</code></td></tr><tr><td><code>[maxTagCount]</code></td><td>Maximum count of tag</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[change]</code></td><td>Callback function when selected nz-option is changed</td><td><code>(ngModel:any\u4E28any[], orgData: SFSchemaEnum\u4E28SFSchemaEnum[])=>void</code></td><td>-</td></tr><tr><td><code>[openChange]</code></td><td>Callback function when dropdown list is open or closed</td><td><code>(status: boolean) => void</code></td><td>-</td></tr><tr><td><code>[scrollToBottom]</code></td><td>Callback function when dropdown list is scrolled to bottom, can be used to trigger dynamic load</td><td><code>() => void</code></td><td>-</td></tr></tbody></table>`,meta:{title:"select",subtitle:"Select",type:"Widgets",order:6},toc:[{id:"API",title:"API",h:2,children:[{id:"schema",title:"schema",h:3},{id:"ui",title:"ui",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u4E0B\u62C9\u9009\u62E9\u5668\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[enum]</code></td><td>\u6570\u636E\u6E90</td><td><code>SFSchemaEnumType[]</code></td><td>-</td></tr><tr><td><code>[readOnly]</code></td><td>\u7981\u7528\u72B6\u6001</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="ui\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[asyncData]</code></td><td>\u5F02\u6B65\u6570\u636E\u6E90</td><td><code>() => Observable&lt;SFSchemaEnumType[]></code></td><td>-</td></tr><tr><td><code>[size]</code></td><td>\u5927\u5C0F\uFF0C\u7B49\u540C <code>nzSize</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[compareWith]</code></td><td>\u4E0E <a target="_blank" href="https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection" data-url="https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection">SelectControlValueAccessor</a> \u76F8\u540C</td><td><code>(o1: any, o2: any) => boolean</code></td><td><code>(o1: any, o2: any) => o1===o2</code></td></tr><tr><td><code>[placeholder]</code></td><td>\u5728\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u8BAF\u606F</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[autoClearSearchValue]</code></td><td>\u662F\u5426\u5728\u9009\u4E2D\u9879\u540E\u6E05\u7A7A\u641C\u7D22\u6846\uFF0C\u53EA\u5728 <code>mode</code> \u4E3A <code>multiple</code> \u6216 <code>tags</code> \u65F6\u6709\u6548\u3002</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[allowClear]</code></td><td>\u652F\u6301\u6E05\u9664</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[borderless]</code></td><td>\u662F\u5426\u65E0\u8FB9\u6846</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[autoFocus]</code></td><td>\u9ED8\u8BA4\u83B7\u53D6\u7126\u70B9</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[dropdownClassName]</code></td><td>\u4E0B\u62C9\u83DC\u5355\u7684 className \u5C5E\u6027</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[dropdownMatchSelectWidth]</code></td><td>\u4E0B\u62C9\u83DC\u5355\u548C\u9009\u62E9\u5668\u540C\u5BBD</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[dropdownStyle]</code></td><td>\u4E0B\u62C9\u83DC\u5355\u7684 style \u5C5E\u6027</td><td><code>object</code></td><td>-</td></tr><tr><td><code>[serverSearch]</code></td><td>\u662F\u5426\u4F7F\u7528\u670D\u52A1\u7AEF\u641C\u7D22\uFF0C\u5F53\u4E3A true \u65F6\uFF0C\u5C06\u4E0D\u518D\u5728\u524D\u7AEF\u5BF9 nz-option \u8FDB\u884C\u8FC7\u6EE4</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[searchDebounceTime]</code></td><td>\u641C\u7D22\u6296\u52A8\u65F6\u95F4</td><td><code>number</code></td><td><code>300</code></td></tr><tr><td><code>[searchLoadingText]</code></td><td>\u641C\u7D22\u52A0\u8F7D\u4E2D\u6587\u672C</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[onSearch]</code></td><td>\u641C\u7D22\u5185\u5BB9\u53D8\u5316\u56DE\u8C03\u51FD\u6570\uFF0C\u53C2\u6570\u4E3A\u641C\u7D22\u5185\u5BB9\uFF0C\u5FC5\u987B\u8FD4\u56DE <code>Promise</code> \u5BF9\u8C61</td><td><code>(text: string) => Promise&lt;SFSchemaEnum[]></code></td><td>-</td></tr><tr><td><code>[maxMultipleCount]</code></td><td>\u6700\u591A\u9009\u4E2D\u591A\u5C11\u4E2A\u6807\u7B7E</td><td><code>number</code></td><td><code>Infinity</code></td></tr><tr><td><code>[mode]</code></td><td>\u8BBE\u7F6E nz-select \u7684\u6A21\u5F0F\uFF0C<code>tags</code> \u5EFA\u8BAE\u589E\u52A0 <code>default: null</code>\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u9047\u5230\u521D\u59CB\u5316\u6709\u4E00\u4E2A\u7A7A\u7684\u6807\u7B7E\u3002</td><td><code>multiple,tags,default</code></td><td><code>default</code></td></tr><tr><td><code>[notFoundContent]</code></td><td>\u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[showSearch]</code></td><td>\u4F7F\u5355\u9009\u6A21\u5F0F\u53EF\u641C\u7D22</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[showArrow]</code></td><td>\u662F\u5426\u663E\u793A\u4E0B\u62C9\u5C0F\u7BAD\u5934</td><td><code>boolean</code></td><td>\u5355\u9009\u4E3A <code>true</code>\uFF0C\u591A\u9009\u4E3A <code>false</code></td></tr><tr><td><code>[tokenSeparators]</code></td><td>\u5728 tags \u548C multiple \u6A21\u5F0F\u4E0B\u81EA\u52A8\u5206\u8BCD\u7684\u5206\u9694\u7B26</td><td><code>string[]</code></td><td><code>[]</code></td></tr><tr><td><code>[maxTagCount]</code></td><td>\u6700\u591A\u663E\u793A\u591A\u5C11\u4E2A tag</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[change]</code></td><td>\u9009\u4E2D\u7684 nz-option \u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u8C03\u7528\u6B64\u51FD\u6570</td><td><code>(ngModel:any\u4E28any[], orgData: SFSchemaEnum\u4E28SFSchemaEnum[])=>void</code></td><td>-</td></tr><tr><td><code>[openChange]</code></td><td>\u4E0B\u62C9\u83DC\u5355\u6253\u5F00\u5173\u95ED\u56DE\u8C03\u51FD\u6570</td><td><code>(status: boolean) => void</code></td><td>-</td></tr><tr><td><code>[scrollToBottom]</code></td><td>\u4E0B\u62C9\u83DC\u5355\u6EDA\u52A8\u5230\u5E95\u90E8\u56DE\u8C03\uFF0C\u53EF\u7528\u4E8E\u4F5C\u4E3A\u52A8\u6001\u52A0\u8F7D\u7684\u89E6\u53D1\u6761\u4EF6</td><td><code>() => void</code></td><td>-</td></tr><tr><td><code>[customTemplate]</code></td><td>\u81EA\u5B9A\u4E49\u9009\u62E9\u6846\u7684Template\u5185\u5BB9</td><td><code>TemplateRef&lt;{ $implicit: NzOptionComponent }></code></td><td>-</td></tr><tr><td><code>[suffixIcon]</code></td><td>\u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807</td><td><code>TemplateRef&lt;any>, string</code></td><td>-</td></tr><tr><td><code>[removeIcon]</code></td><td>\u81EA\u5B9A\u4E49\u7684\u591A\u9009\u6846\u6E05\u9664\u56FE\u6807</td><td><code>TemplateRef&lt;any></code></td><td>-</td></tr><tr><td><code>[clearIcon]</code></td><td>\u81EA\u5B9A\u4E49\u7684\u591A\u9009\u6846\u6E05\u7A7A\u56FE\u6807</td><td><code>TemplateRef&lt;any></code></td><td>-</td></tr><tr><td><code>[menuItemSelectedIcon]</code></td><td>\u81EA\u5B9A\u4E49\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE\u56FE\u6807</td><td><code>TemplateRef&lt;any></code></td><td>-</td></tr><tr><td><code>[maxTagPlaceholder]</code></td><td>\u9690\u85CF tag \u65F6\u663E\u793A\u7684\u5185\u5BB9</td><td><code>TemplateRef&lt;{ $implicit: any[] }></code></td><td>-</td></tr><tr><td><code>[optionHeightPx]</code></td><td>\u4E0B\u62C9\u83DC\u5355\u4E2D\u6BCF\u4E2A Option \u7684\u9AD8\u5EA6</td><td><code>number</code></td><td><code>32</code></td></tr><tr><td><code>[optionOverflowSize]</code></td><td>\u4E0B\u62C9\u83DC\u5355\u4E2D\u6700\u591A\u5C55\u793A\u7684 Option \u4E2A\u6570\uFF0C\u8D85\u51FA\u90E8\u5206\u6EDA\u52A8</td><td><code>number</code></td><td><code>8</code></td></tr></tbody></table>',meta:{title:"select",subtitle:"\u9009\u62E9\u5668",type:"Widgets",order:6},toc:[{id:"API",title:"API",h:2,children:[{id:"schema\u5C5E\u6027",title:"schema \u5C5E\u6027",h:3},{id:"ui\u5C5E\u6027",title:"ui \u5C5E\u6027",h:3}]}]}},demo:!0},this.codes=[{id:"form-select-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component, ViewChild } from '@angular/core';
import { of, delay } from 'rxjs';

import { SFComponent, SFSchema, SFSelectWidgetSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-select-simple',
  template: \`
    <sf #sf [schema]="schema" (formSubmit)="submit($event)"></sf>
    <button nz-button (click)="updateStatus()">Update Status</button>
  \`
})
export class FormSelectSimpleComponent {
  @ViewChild('sf', { static: false }) private sf!: SFComponent;
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
          asyncData: () =>
            of([
              {
                label: '\u8BA2\u5355\u72B6\u6001',
                group: true,
                children: [
                  { label: '\u5F85\u652F\u4ED8', value: 'WAIT_BUYER_PAY' },
                  { label: '\u5DF2\u652F\u4ED8', value: 'TRADE_SUCCESS' },
                  { label: '\u4EA4\u6613\u5B8C\u6210', value: 'TRADE_FINISHED' }
                ]
              }
            ]).pipe(delay(1200))
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

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }

  updateStatus(): void {
    const statusProperty = this.sf.getProperty('/status')!;
    statusProperty.schema.enum = ['1', '2', '3'];
    statusProperty.widget.reset('2');
  }
}`,lang:"ts",componentName:"FormSelectSimpleComponent",point:0,name:"simple",urls:"packages/form/src/widgets/select/demo/simple.md",type:"demo"},{id:"form-select-coordinate",meta:{title:{"zh-CN":"\u8054\u52A8","en-US":"coordinate"},order:1},summary:{"zh-CN":"<p>\u7701\u5E02\u8054\u52A8\u662F\u5178\u578B\u7684\u4F8B\u5B50\u3002</p>","en-US":"<p>Coordinating the selection of provinces and cities is a common use case and demonstrates how selection can be coordinated.</p>"},code:`import { Component, ViewChild } from '@angular/core';
import { SFComponent, SFSchema, SFSelectWidgetSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';
import { of, delay, tap } from 'rxjs';

@Component({
  selector: 'form-select-coordinate',
  template: \` <sf #sf [schema]="schema" [formData]="data" (formSubmit)="submit($event)"></sf> \`,
})
export class FormSelectCoordinateComponent {
  @ViewChild('sf', { static: false }) private sf!: SFComponent;
  data = {
    province: 'Zhejiang',
    city: 'Ningbo',
  };
  private cityData: { [place: string]: string[] } = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
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
              tap(() => this.updateCity(this.data.province, this.data.city)),
            ),
          change: i => this.updateCity(i),
        } as SFSelectWidgetSchema,
      },
      city: {
        type: 'string',
        title: 'City',
        ui: {
          widget: 'select',
        } as SFSelectWidgetSchema,
      },
    },
  };

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }

  private updateCity(province: string, city: string = ''): void {
    const cityProperty = this.sf.getProperty('/city')!;
    const items = this.cityData[province];
    cityProperty.schema.enum = items;
    cityProperty.widget.reset(city || items[0]);
  }
}`,lang:"ts",componentName:"FormSelectCoordinateComponent",point:1,name:"coordinate",urls:"packages/form/src/widgets/select/demo/coordinate.md",type:"demo"},{id:"form-select-custom-dropdown-menu",meta:{order:2,title:{"zh-CN":"\u6269\u5C55\u83DC\u5355","en-US":"Custom dropdown"}},summary:{"zh-CN":"<p>\u4F7F\u7528 <code>dropdownRender</code> \u5BF9\u4E0B\u62C9\u83DC\u5355\u8FDB\u884C\u81EA\u7531\u6269\u5C55\u3002</p>","en-US":"<p>Customize the dropdown menu via <code>dropdownRender</code>.</p>"},code:`import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { SFComponent, SFSchema, SFSelectWidgetSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-select-custom-dropdown-menu',
  template: \`
    @if (schema) {
      <sf #sf [schema]="schema" (formSubmit)="submit($event)"></sf>
    }
    <ng-template #dropdownRender>
      <nz-divider></nz-divider>
      <div class="container">
        <input type="text" nz-input #inputElement />
        <a class="add-item" (click)="addItem(inputElement)"><i nz-icon nzType="plus"></i> Add item</a>
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
    \`,
  ],
})
export class FormSelectCustomDropdownMenuComponent implements OnInit {
  @ViewChild('sf', { static: false }) private sf!: SFComponent;
  @ViewChild('dropdownRender', { static: true }) private dropdownRender!: TemplateRef<void>;

  schema?: SFSchema;
  statusList: string[] = ['1', '2', '3'];

  constructor(private msg: NzMessageService) {}

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
            dropdownRender: this.dropdownRender,
          } as SFSelectWidgetSchema,
        },
      },
    };
  }

  addItem(input: HTMLInputElement): void {
    this.statusList.push(input.value);
    const statusProperty = this.sf.getProperty('/status')!;
    statusProperty.schema.enum = this.statusList;
    this.sf.setValue('/status', input.value);
  }
}`,lang:"ts",componentName:"FormSelectCustomDropdownMenuComponent",point:2,name:"custom-dropdown-menu",urls:"packages/form/src/widgets/select/demo/custom-dropdown-menu.md",type:"demo"},{id:"form-select-search",meta:{title:{"zh-CN":"\u641C\u7D22\u7528\u6237","en-US":"Search and Select Users"},order:3},summary:{"zh-CN":"<p>\u4E00\u4E2A\u5E26\u6709\u8FDC\u7A0B\u641C\u7D22\uFF0C\u8282\u6D41\u63A7\u5236\uFF0C\u8BF7\u6C42\u65F6\u5E8F\u63A7\u5236\uFF0C\u52A0\u8F7D\u72B6\u6001\u7684\u591A\u9009\u793A\u4F8B\u3002</p>","en-US":"<p>A complete multiple select sample with remote search, debounce fetch, ajax callback order flow, and loading state.</p>"},code:`import { Component } from '@angular/core';
import { SFSchema, SFSchemaEnum, SFSelectWidgetSchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { map } from 'rxjs';

@Component({
  selector: 'form-select-search',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)"></sf> \`,
})
export class FormSelectSearchComponent {
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
            return this.http
              .get(\`https://api.randomuser.me/?results=5&q=\${q}\`)
              .pipe(map(res => (res.results as any[]).map(i => ({ label: i.email, value: i.email } as SFSchemaEnum))))
              .toPromise();
          },
        } as SFSelectWidgetSchema,
      },
    },
  };

  constructor(private msg: NzMessageService, private http: _HttpClient) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormSelectSearchComponent",point:3,name:"search",urls:"packages/form/src/widgets/select/demo/search.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-select"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:24,vars:11,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-select-simple"),i(7,`
        `),c(),i(8,`
      
        `),r(9,"code-box",3),i(10,`
          `),p(11,"form-select-coordinate"),i(12,`
        `),c(),i(13,`
      
        `),r(14,"code-box",3),i(15,`
          `),p(16,"form-select-custom-dropdown-menu"),i(17,`
        `),c(),i(18,`
      
        `),r(19,"code-box",3),i(20,`
          `),p(21,"form-select-search"),i(22,`
        `),c(),i(23,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id),s(5),a("item",d.codes[1]),v("id",d.codes[1].id),s(5),a("item",d.codes[2]),v("id",d.codes[2].id),s(5),a("item",d.codes[3]),v("id",d.codes[3].id))},dependencies:[w,C,k,F,ae,re,ce,se],encapsulation:2});let n=e;return n})();var me=(()=>{let e=class e{constructor(o){this.msg=o,this.schema={properties:{name:{type:"string",title:"Name",ui:{addOnAfter:"RMB",placeholder:"RMB\u7ED3\u7B97",change:t=>console.log(t),focus:t=>console.log("focus",t),blur:t=>console.log("blur",t),enter:t=>console.log("enter",t)}},mobile:{type:"string",format:"mobile",title:"\u624B\u673A\u53F7"},sfz:{type:"string",format:"id-card",title:"\u8EAB\u4EFD\u8BC1\u53F7"},regex:{type:"string",pattern:"^[abc]+$",title:"\u6B63\u5219\u8868\u8FBE\u5F0F",ui:{placeholder:"^[abc]+$"}},color:{type:"string",format:"color",title:"\u989C\u8272",ui:{optionalHelp:{text:"\u6211\u662F\u6709\u80CC\u666F\u989C\u8272\u7684\u5594",bgColor:"#f50"}}}},required:["name"]}}submit(o){this.msg.success(JSON.stringify(o))}valueChange(o){this.msg.info(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-string-simple"]],decls:1,vars:1,consts:[[3,"schema","formValueChange","formSubmit"]],template:function(t,d){t&1&&(r(0,"sf",0),h("formValueChange",function(u){return d.valueChange(u)})("formSubmit",function(u){return d.submit(u)}),c()),t&2&&a("schema",d.schema)},dependencies:[f],encapsulation:2});let n=e;return n})();var Md=["sf"],pe=(()=>{let e=class e{constructor(o,t){this.http=o,this.msg=t,this.schema={properties:{q:{type:"string",title:"Key",ui:{changeDebounceTime:500,changeMap:d=>d.length>0?this.http.get(`/users?q=${d}&ps=6`):P({list:[]}),change:d=>{if(d.list.length<=0)return;let m=this.sf.getProperty("/items");m.schema.enum=d.list.map(u=>u.email),m.widget.reset(d.list[0].email)}}},items:{type:"string",enum:["a","b","c"]}}}}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(Y),g(b))},e.\u0275cmp=l({type:e,selectors:[["form-string-time"]],viewQuery:function(t,d){if(t&1&&E(Md,5),t&2){let m;M(m=j())&&(d.sf=m.first)}},decls:2,vars:1,consts:[[3,"schema","formSubmit"],["sf",""]],template:function(t,d){t&1&&(r(0,"sf",0,1),h("formSubmit",function(u){return d.submit(u)}),c()),t&2&&a("schema",d.schema)},dependencies:[f],encapsulation:2});let n=e;return n})();var he=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/src/widgets/string/index.en-US.md","zh-CN":"packages/form/src/widgets/string/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Default widget, A basic widget for getting the user input is a text field.</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[maxLength]</code></td><td>Maximum length of the input</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[readOnly]</code></td><td>Whether to disable the state</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[size]</code></td><td>Size of the <code>nz-input</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[type]</code></td><td>type of the input, e.g: <code>password</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[placeholder]</code></td><td>placeholder of the input</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[borderless]</code></td><td>Whether hide border</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[autocomplete]</code></td><td>autocomplete of the input</td><td><code>HTML Attribute</code></td><td>-</td></tr><tr><td><code>[autofocus]</code></td><td>autofocus of the input</td><td><code>HTML Attribute</code></td><td>-</td></tr><tr><td><code>[addOnBefore]</code></td><td>The label text displayed before (on the left side of) the input field.</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[addOnAfter]</code></td><td>The label text displayed after (on the right side of) the input field.</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[addOnBeforeIcon]</code></td><td>The label icon's ngClass displayed before.</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[addOnAfterIcon]</code></td><td>The label icon's ngClass displayed after.</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[prefix]</code></td><td>The prefix icon for the Input.</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[prefixIcon]</code></td><td>The prefix icon's ngClass for the Input.</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[suffix]</code></td><td>The suffix icon for the Input.</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[suffixIcon]</code></td><td>The suffix icon's ngClass for the Input.</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[changeDebounceTime]</code></td><td><code>change</code> event throttling and sequence control threshold</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[changeMap]</code></td><td>Convert data, equivalent to <code>switchMap</code> operation</td><td><code>(val: string) => Observable&lt;any></code></td><td>-</td></tr><tr><td><code>[change]</code></td><td>The content event for the Input.</td><td><code>(val: string) => void</code></td><td>-</td></tr><tr><td><code>[focus]</code></td><td>The focus event for the Input.</td><td><code>(e: FocusEvent) => void</code></td><td>-</td></tr><tr><td><code>[blur]</code></td><td>The blur event for the Input.</td><td><code>(e: FocusEvent) => void</code></td><td>-</td></tr><tr><td><code>[enter]</code></td><td>The enter event for the Input.</td><td><code>(e: KeyboardEvent) => void</code></td><td>-</td></tr></tbody></table>`,meta:{title:"string",subtitle:"Input",type:"Widgets",order:3},toc:[{id:"API",title:"API",h:2,children:[{id:"schema",title:"schema",h:3},{id:"ui",title:"ui",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u9ED8\u8BA4\u5C0F\u90E8\u4EF6\uFF0C\u4E00\u822C\u7528\u4E8E\u5B57\u7B26\u4E32\u5143\u7D20\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[maxLength]</code></td><td>\u8868\u5355\u6700\u5927\u957F\u5EA6</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[readOnly]</code></td><td>\u7981\u7528\u72B6\u6001</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="ui\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>\u7B49\u540C input \u7684 <code>type</code> \u503C\uFF0C\u4F8B\u5982\uFF1A<code>password</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[placeholder]</code></td><td>\u5728\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u8BAF\u606F</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[borderless]</code></td><td>\u662F\u5426\u9690\u85CF\u8FB9\u6846</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[autocomplete]</code></td><td>\u81EA\u52A8\u5B8C\u6210\u529F\u80FD\u7684\u8868\u5355</td><td><code>HTML Attribute</code></td><td>-</td></tr><tr><td><code>[autofocus]</code></td><td>\u5F53\u9875\u9762\u52A0\u8F7D\u65F6\u83B7\u5F97\u7126\u70B9</td><td><code>HTML Attribute</code></td><td>-</td></tr><tr><td><code>[addOnBefore]</code></td><td>\u524D\u7F6E\u6807\u7B7E\uFF0C\u7B49\u540C <code>nzAddOnBefore</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[addOnAfter]</code></td><td>\u540E\u7F6E\u6807\u7B7E\uFF0C\u7B49\u540C <code>nzAddOnAfter</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[addOnBeforeIcon]</code></td><td>\u524D\u7F6EIcon\uFF0C\u7B49\u540C <code>nzAddOnBeforeIcon</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[addOnAfterIcon]</code></td><td>\u540E\u7F6EIcon\uFF0C\u7B49\u540C <code>nzAddOnAfterIcon</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[prefix]</code></td><td>\u5E26\u6709\u524D\u7F00\u56FE\u6807\u7684 input\uFF0C\u7B49\u540C <code>nzPrefix</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[prefixIcon]</code></td><td>\u524D\u7F00\u56FE\u6807\uFF0C\u7B49\u540C <code>nzPrefixIcon</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[suffix]</code></td><td>\u5E26\u6709\u540E\u7F00\u56FE\u6807\u7684 input\uFF0C\u7B49\u540C <code>nzSuffix</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[suffixIcon]</code></td><td>\u540E\u7F00\u56FE\u6807\uFF0C\u7B49\u540C <code>nzSuffixIcon</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[changeDebounceTime]</code></td><td><code>change</code> \u4E8B\u4EF6\u8282\u6D41\u4E0E\u987A\u5E8F\u63A7\u5236\u7684\u9600\u503C</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[changeMap]</code></td><td>\u8F6C\u6362\u6570\u636E\uFF0C\u76F8\u5F53\u4E8E <code>switchMap</code> \u64CD\u4F5C</td><td><code>(val: string) => Observable&lt;any></code></td><td>-</td></tr><tr><td><code>[change]</code></td><td>\u5185\u5BB9\u53D8\u66F4\u4E8B\u4EF6</td><td><code>(val: string) => void</code></td><td>-</td></tr><tr><td><code>[focus]</code></td><td>\u7126\u70B9\u4E8B\u4EF6</td><td><code>(e: FocusEvent) => void</code></td><td>-</td></tr><tr><td><code>[blur]</code></td><td>\u5931\u7126\u4E8B\u4EF6</td><td><code>(e: FocusEvent) => void</code></td><td>-</td></tr><tr><td><code>[enter]</code></td><td>\u56DE\u8F66\u4E8B\u4EF6</td><td><code>(e: KeyboardEvent) => void</code></td><td>-</td></tr></tbody></table>',meta:{title:"string",subtitle:"\u6587\u672C\u6846",type:"Widgets",order:3},toc:[{id:"API",title:"API",h:2,children:[{id:"schema\u5C5E\u6027",title:"schema \u5C5E\u6027",h:3},{id:"ui\u5C5E\u6027",title:"ui \u5C5E\u6027",h:3}]}]}},demo:!0},this.codes=[{id:"form-string-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';

import { SFSchema, SFStringWidgetSchema, SFValueChange } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-string-simple',
  template: \`<sf [schema]="schema" (formValueChange)="valueChange($event)" (formSubmit)="submit($event)"></sf>\`
})
export class FormStringSimpleComponent {
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

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }

  valueChange(res: SFValueChange): void {
    this.msg.info(JSON.stringify(res));
  }
}`,lang:"ts",componentName:"FormStringSimpleComponent",point:0,name:"simple",urls:"packages/form/src/widgets/string/demo/simple.md",type:"demo"},{id:"form-string-time",meta:{title:{"zh-CN":"\u6296\u52A8\u4E0E\u987A\u5E8F","en-US":"Debounce and order"},order:0},summary:{"zh-CN":"<p>\u4F7F\u7528 <code>changeDebounceTime</code> \u542F\u7528\u8282\u6D41\u63A7\u5236\uFF0C\u5E76\u5229\u7528 <code>changeMap</code> \u548C <code>change</code> \u914D\u5408\u5B8C\u6210\u8282\u6D41\u3001\u8BF7\u6C42\u987A\u5E8F\u3002</p>","en-US":"<p>Use <code>changeDebounceTime</code> to enable throttling control, use <code>changeMap</code> and <code>change</code> to debounce fetch and ajax callback order flow.</p>"},code:`import { Component, ViewChild } from '@angular/core';
import { of } from 'rxjs';

import { SFComponent, SFSchema, SFStringWidgetSchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

interface UserItem {
  id: number;
  email: string;
}

@Component({
  selector: 'form-string-time',
  template: \`<sf #sf [schema]="schema" (formSubmit)="submit($event)"></sf>\`
})
export class FormStringTimeComponent {
  @ViewChild('sf') private readonly sf!: SFComponent;

  schema: SFSchema = {
    properties: {
      q: {
        type: 'string',
        title: 'Key',
        ui: {
          changeDebounceTime: 500,
          changeMap: val => (val.length > 0 ? this.http.get(\`/users?q=\${val}&ps=6\`) : of({ list: [] })),
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

  constructor(private http: _HttpClient, private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormStringTimeComponent",point:1,name:"time",urls:"packages/form/src/widgets/string/demo/time.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-string"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-string-simple"),i(7,`
        `),c(),i(8,`
      
        `),r(9,"code-box",3),i(10,`
          `),p(11,"form-string-time"),i(12,`
        `),c(),i(13,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id),s(5),a("item",d.codes[1]),v("id",d.codes[1].id))},dependencies:[w,C,k,F,me,pe],encapsulation:2});let n=e;return n})();var ue=(()=>{let e=class e{constructor(o){this.msg=o,this.loading=!1,this.schema={properties:{id1:{type:"number",ui:{widget:"text"}},id2:{type:"number",ui:{widget:"text",defaultText:"default text"}},name:{type:"string",title:"Name",ui:{addOnAfter:"RMB",placeholder:"RMB\u7ED3\u7B97"}}},required:["name"]}}submit(o){this.loading=!0,setTimeout(()=>{this.loading=!1,this.msg.success(JSON.stringify(o))},1e3)}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-text-simple"]],decls:3,vars:2,consts:[[3,"schema","loading","formSubmit"]],template:function(t,d){t&1&&(i(0," "),r(1,"sf",0),h("formSubmit",function(u){return d.submit(u)}),c(),i(2," ")),t&2&&(s(1),a("schema",d.schema)("loading",d.loading))},dependencies:[f],encapsulation:2});let n=e;return n})();var ge=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/src/widgets/text/index.en-US.md","zh-CN":"packages/form/src/widgets/text/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Text in form.</p><h2 id="Rules"><a class="lake-link"><i data-anchor="Rules"></i></a>Rules</h2><ul><li><p>Forced remove of the <code>required</code> effect</p></li><li><p>Auto render <code>-</code> if the <code>defaultText</code> value does not exist</p></li></ul></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[defaultText]</code></td><td>Default text of this item</td><td><code>string</code></td><td><code>-</code></td></tr><tr><td><code>[html]</code></td><td>Whether to support HTML</td><td><code>boolean</code></td><td><code>true</code></td></tr></tbody></table>',meta:{title:"text",subtitle:"Text",type:"Widgets"},toc:[{id:"Rules",title:"Rules",h:2},{id:"API",title:"API",h:2,children:[{id:"ui",title:"ui",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u4E00\u822C\u7528\u4E8E\u76F4\u63A5\u663E\u793A\u6587\u672C\u3002</p><h2 id="\u89C4\u5219"><a class="lake-link"><i data-anchor="\u89C4\u5219"></i></a>\u89C4\u5219</h2><ul><li><p>\u5F3A\u5236\u53D6\u6D88 <code>required</code> \u6548\u679C</p></li><li><p>\u82E5\u4E0D\u6307\u5B9A <code>defaultText</code> \u503C\u4E0D\u5B58\u5728\u65F6\u81EA\u52A8\u6E32\u67D3 <code>-</code></p></li></ul></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="ui\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[defaultText]</code></td><td>\u5F53\u503C\u4E0D\u5B58\u5728\u65F6\u6240\u6307\u5B9A\u7684\u6587\u672C</td><td><code>string</code></td><td><code>-</code></td></tr><tr><td><code>[html]</code></td><td>\u662F\u5426\u652F\u6301HTML</td><td><code>boolean</code></td><td><code>true</code></td></tr></tbody></table>',meta:{title:"text",subtitle:"\u6587\u672C",type:"Widgets"},toc:[{id:"\u89C4\u5219",title:"\u89C4\u5219",h:2},{id:"API",title:"API",h:2,children:[{id:"ui\u5C5E\u6027",title:"ui \u5C5E\u6027",h:3}]}]}},demo:!0},this.codes=[{id:"form-text-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';
import { SFSchema, SFStringWidgetSchema, SFTextWidgetSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-text-simple',
  template: \` <sf [schema]="schema" [loading]="loading" (formSubmit)="submit($event)"></sf> \`,
})
export class FormTextSimpleComponent {
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
          placeholder: 'RMB\u7ED3\u7B97',
        } as SFStringWidgetSchema,
      },
    },
    required: ['name'],
  };

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.msg.success(JSON.stringify(value));
    }, 1000);
  }
}`,lang:"ts",componentName:"FormTextSimpleComponent",point:0,name:"simple",urls:"packages/form/src/widgets/text/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-text"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-text-simple"),i(7,`
        `),c(),i(8,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id))},dependencies:[w,C,k,F,ue],encapsulation:2});let n=e;return n})();var fe=(()=>{let e=class e{constructor(o){this.msg=o,this.schema={properties:{remark:{type:"string",title:"\u63CF\u8FF0",ui:{widget:"textarea",autosize:{minRows:2,maxRows:6},change:t=>console.log("change",t),focus:t=>console.log("focus",t),blur:t=>console.log("blur",t)}},max:{type:"string",title:"Max",ui:{widget:"textarea",maxCharacterCount:100}}}}}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-textarea-simple"]],decls:3,vars:1,consts:[[3,"schema","formSubmit"]],template:function(t,d){t&1&&(i(0," "),r(1,"sf",0),h("formSubmit",function(u){return d.submit(u)}),c(),i(2," ")),t&2&&(s(1),a("schema",d.schema))},dependencies:[f],encapsulation:2});let n=e;return n})();var be=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/src/widgets/textarea/index.en-US.md","zh-CN":"packages/form/src/widgets/textarea/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Textarea.</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[maxLength]</code></td><td>Maximum length of the input</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[readOnly]</code></td><td>Whether to disable the state</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[size]</code></td><td>Size of the <code>nz-input</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[placeholder]</code></td><td>placeholder of the input</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[autosize]</code></td><td>height autosize feature, can be set to <code>boolean</code> or an object <code>{ minRows: 2, maxRows: 6 }</code></td><td><code>boolean\u4E28{ minRows: number, maxRows: number }</code></td><td><code>true</code></td></tr><tr><td><code>[borderless]</code></td><td>Whether hide border</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[maxCharacterCount]</code></td><td><code>textarea</code> maximum character count displayed</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[computeCharacterCount]</code></td><td>customized <code>characterCount</code> computation function</td><td><code>(v: string) => number</code></td><td><code>v => v.length</code></td></tr><tr><td><code>[change]</code></td><td>The content event for the Input.</td><td><code>(val: string) => void</code></td><td>-</td></tr><tr><td><code>[focus]</code></td><td>The focus event for the Input.</td><td><code>(e: FocusEvent) => void</code></td><td>-</td></tr><tr><td><code>[blur]</code></td><td>The blur event for the Input.</td><td><code>(e: FocusEvent) => void</code></td><td>-</td></tr></tbody></table>',meta:{title:"textarea",subtitle:"Textarea",type:"Widgets"},toc:[{id:"API",title:"API",h:2,children:[{id:"schema",title:"schema",h:3},{id:"ui",title:"ui",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u4E00\u822C\u7528\u4E8E\u591A\u884C\u5B57\u7B26\u4E32\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[maxLength]</code></td><td>\u8868\u5355\u6700\u5927\u957F\u5EA6</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[readOnly]</code></td><td>\u7981\u7528\u72B6\u6001</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="ui\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[size]</code></td><td>\u5927\u5C0F\uFF0C\u7B49\u540C <code>nzSize</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[placeholder]</code></td><td>\u5728\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u8BAF\u606F</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[autosize]</code></td><td>\u81EA\u9002\u5E94\u5185\u5BB9\u9AD8\u5EA6\uFF0C\u53EF\u8BBE\u7F6E\u4E3A <code>true|false</code> \u6216\u5BF9\u8C61\uFF1A<code>{ minRows: 2, maxRows: 6 }</code></td><td><code>Boolean|Object</code></td><td><code>true</code></td></tr><tr><td><code>[borderless]</code></td><td>\u662F\u5426\u9690\u85CF\u8FB9\u6846</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[maxCharacterCount]</code></td><td><code>textarea</code> \u6570\u5B57\u63D0\u793A\u663E\u793A\u7684\u6700\u5927\u503C</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[computeCharacterCount]</code></td><td>\u81EA\u5B9A\u4E49\u8BA1\u7B97 <code>characterCount</code> \u7684\u51FD\u6570</td><td><code>(v: string) => number</code></td><td><code>v => v.length</code></td></tr><tr><td><code>[change]</code></td><td>\u5185\u5BB9\u53D8\u66F4\u4E8B\u4EF6</td><td><code>(val: string) => void</code></td><td>-</td></tr><tr><td><code>[focus]</code></td><td>\u7126\u70B9\u4E8B\u4EF6</td><td><code>(e: FocusEvent) => void</code></td><td>-</td></tr><tr><td><code>[blur]</code></td><td>\u5931\u7126\u4E8B\u4EF6</td><td><code>(e: FocusEvent) => void</code></td><td>-</td></tr></tbody></table>',meta:{title:"textarea",subtitle:"\u591A\u884C\u6587\u672C\u6846",type:"Widgets"},toc:[{id:"API",title:"API",h:2,children:[{id:"schema\u5C5E\u6027",title:"schema \u5C5E\u6027",h:3},{id:"ui\u5C5E\u6027",title:"ui \u5C5E\u6027",h:3}]}]}},demo:!0},this.codes=[{id:"form-textarea-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';

import { SFSchema, SFTextareaWidgetSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-textarea-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)"></sf> \`
})
export class FormTextareaSimpleComponent {
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

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormTextareaSimpleComponent",point:0,name:"simple",urls:"packages/form/src/widgets/textarea/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-textarea"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-textarea-simple"),i(7,`
        `),c(),i(8,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id))},dependencies:[w,C,k,F,fe],encapsulation:2});let n=e;return n})();var ye=(()=>{let e=class e{constructor(o){this.msg=o,this.schema={properties:{format:{type:"string",title:"Format",format:"email"},widget:{type:"string",title:"\u6307\u5B9Awidget",ui:{widget:"autocomplete",type:"email"}},async:{type:"string",title:"\u5F02\u6B65",ui:{widget:"autocomplete",debounceTime:100,asyncData:t=>P(t?[{label:t,value:1,otherData:1},{label:t+t,value:2}]:[]),change:(t,d)=>console.log(t,d)},default:"asdf"}}}}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-autocomplete-simple"]],decls:1,vars:1,consts:[[3,"schema","formSubmit"]],template:function(t,d){t&1&&(r(0,"sf",0),h("formSubmit",function(u){return d.submit(u)}),c()),t&2&&a("schema",d.schema)},dependencies:[f],encapsulation:2});let n=e;return n})();var Se=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/widgets/autocomplete/index.en-US.md","zh-CN":"packages/form/widgets/autocomplete/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>Input complete automatically.</p><h2 id="Importmodule"><a class="lake-link"><i data-anchor="Importmodule"></i></a>Import module</h2><p>Non-built-in modules, Should be import <code>AutoCompleteWidgetModule</code> in <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11">json-schema.module.ts</a>.</p><h2 id="DataSource"><a class="lake-link"><i data-anchor="DataSource"></i></a>Data Source</h2><p><strong>Static</strong></p><p>Every filter after data got is filtered by <code>filterOption</code>, data source is from <code>asyncData</code>, <code>enum</code>.</p><p>Email postfix is automatically added when it is  <code>schema.format: 'email'</code>, by default, it is <code>['qq.com', '163.com', 'gmail.com', '126.com', 'aliyun.com']</code>, can adjust the value by setting <code>enum</code> or <a href="/docs/global-config/en" data-url="/docs/global-config/en">global config</a> <code>uiEmailSuffixes</code>\u3002</p><p><strong>Realtime</strong></p><p>Every filter after data got is filtered by <code>filterOption</code>, data source is from <code>asyncData</code>.</p></section>`,api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[enum]</code></td><td>Static data source</td><td><code>SFSchemaEnumType[]</code></td><td>-</td></tr><tr><td><code>[readOnly]</code></td><td>Read only</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[asyncData]</code></td><td>Realtime data</td><td><code>(input: string) => Observable&lt;SFSchemaEnumType[]></code></td><td>-</td></tr><tr><td><code>[size]</code></td><td>Szie, equals to <code>nzSize</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[placeholder]</code></td><td>Placeholder</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[filterOption]</code></td><td>Whether filter by input, by default, only apply to <code>label</code> and filter through <code>indexOf</code> case insensitive. When it's a function, accept <code>inputValue</code> and <code>option</code> parameters, return <code>true</code> when <code>option</code> match search criteria, otherwise, return <code>false</code></td><td><code>boolean or (inputValue: string, option: SFSchemaEnum) => boolean</code></td><td><code>true</code></td></tr><tr><td><code>[type]</code></td><td>Mode, automatically complete common email postfix, can set new postfix by setting <code>enum</code></td><td><code>email</code></td><td>-</td></tr><tr><td><code>[debounceTime]</code></td><td>debounce time, minimum is <code>50</code> by default when it's realtime data source, unit: millisecond</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[defaultActiveFirstOption]</code></td><td>Whether active the first item by default</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[backfill]</code></td><td>Fill selected value into input when keyboard selection options is used</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[nzWidth]</code></td><td>Customize width, unit is px</td><td><code>number</code></td><td>Trigger width of element</td></tr><tr><td><code>[change]</code></td><td>Change callback</td><td><code>(item: NzAutocompleteOptionComponent, orgData: SFSchemaEnum) => void</code></td><td>-</td></tr><tr><td><code>[overlayClassName]</code></td><td>Class name of the dropdown root element</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[overlayStyle]</code></td><td>Style of the dropdown root element</td><td><code>object</code></td><td>-</td></tr><tr><td><code>[compareWith]</code></td><td>Same as <a target="_blank" href="https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection" data-url="https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection">SelectControlValueAccessor</a></td><td><code>(o1: any, o2: any) => boolean</code></td><td><code>(o1: any, o2: any) => o1===o2</code></td></tr></tbody></table>`,meta:{title:"autocomplete",subtitle:"Autocomplete",type:"Non-built-in widgets"},toc:[{id:"Importmodule",title:"Import module",h:2},{id:"DataSource",title:"Data Source",h:2},{id:"API",title:"API",h:2,children:[{id:"schema",title:"schema",h:3},{id:"ui",title:"ui",h:3}]}]},"zh-CN":{content:`<section class="markdown"><p>\u8F93\u5165\u6846\u81EA\u52A8\u5B8C\u6210\u529F\u80FD\u3002</p><h2 id="\u5BFC\u5165\u6A21\u5757"><a class="lake-link"><i data-anchor="\u5BFC\u5165\u6A21\u5757"></i></a>\u5BFC\u5165\u6A21\u5757</h2><p>\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11">json-schema.module.ts</a> \u5BFC\u5165 <code>AutoCompleteWidgetModule</code>\u3002</p><h2 id="\u6570\u636E\u6E90\u8BF4\u660E"><a class="lake-link"><i data-anchor="\u6570\u636E\u6E90\u8BF4\u660E"></i></a>\u6570\u636E\u6E90\u8BF4\u660E</h2><p><strong>\u9759\u6001</strong></p><p>\u6307\u83B7\u53D6\u540E\u6BCF\u4E00\u6B21\u7B5B\u9009\u662F\u901A\u8FC7 <code>filterOption</code> \u8FC7\u6EE4\uFF0C\u6570\u636E\u6765\u6E90\u4E8E <code>asyncData</code>\u3001<code>enum</code>\u3002</p><p>\u82E5 <code>schema.format: 'email'</code> \u65F6\u81EA\u52A8\u6E32\u67D3\u4E3A\u81EA\u52A8\u8865\u5168\u90AE\u7BB1\u540E\u7F00\uFF0C\u9ED8\u8BA4 <code>['qq.com', '163.com', 'gmail.com', '126.com', 'aliyun.com']</code> \u53EF\u901A\u8FC7 <code>enum</code> \u6765\u91CD\u65B0\u8C03\u6574\u8BE5\u503C\u6216<a href="/docs/global-config" data-url="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a> <code>uiEmailSuffixes</code>\u3002</p><p><strong>\u5B9E\u65F6</strong></p><p>\u6307\u83B7\u53D6\u540E\u6BCF\u4E00\u6B21\u7B5B\u9009\u662F\u901A\u8FC7 <code>filterOption</code> \u8FC7\u6EE4\uFF0C\u6570\u636E\u6765\u6E90\u4E8E <code>asyncData</code>\u3002</p></section>`,api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[enum]</code></td><td>\u9759\u6001\u6570\u636E\u6E90</td><td><code>SFSchemaEnumType[]</code></td><td>-</td></tr><tr><td><code>[readOnly]</code></td><td>\u7981\u7528\u72B6\u6001</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="ui\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[asyncData]</code></td><td>\u5B9E\u65F6\u6570\u636E\u6E90</td><td><code>(input: string) => Observable&lt;SFSchemaEnumType[]></code></td><td>-</td></tr><tr><td><code>[size]</code></td><td>\u5927\u5C0F\uFF0C\u7B49\u540C <code>nzSize</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[placeholder]</code></td><td>\u5728\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u8BAF\u606F</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[filterOption]</code></td><td>\u662F\u5426\u6839\u636E\u8F93\u5165\u9879\u8FDB\u884C\u7B5B\u9009\uFF0C\u9ED8\u8BA4\u53EA\u5BF9 <code>label</code> \u5C5E\u6027\u6267\u884C\u4E0D\u533A\u5206\u5927\u5C0F\u5B9A <code>indexOf</code> \u8FC7\u6EE4\u3002\u5F53\u5176\u4E3A\u4E00\u4E2A\u51FD\u6570\u65F6\uFF0C\u4F1A\u63A5\u6536 <code>inputValue</code> <code>option</code> \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 <code>option</code> \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE <code>true</code>\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE <code>false</code>\u3002</td><td><code>boolean or (inputValue: string, option: SFSchemaEnum) => boolean</code></td><td><code>true</code></td></tr><tr><td><code>[type]</code></td><td>\u6A21\u5F0F\uFF0C\u81EA\u52A8\u5B8C\u6210\u5E38\u89C1\u90AE\u7BB1\u540E\u7F00\uFF0C\u53EF\u4EE5\u91CD\u65B0\u4F7F\u7528 <code>enum</code> \u6765\u6307\u5B9A\u65B0\u540E\u7F00</td><td><code>email</code></td><td>-</td></tr><tr><td><code>[debounceTime]</code></td><td>\u53BB\u6296\u65F6\u95F4\uFF0C\u5F53\u5B9E\u65F6\u6570\u636E\u6E90\u65F6\u9ED8\u8BA4\u6700\u5C11 <code>50</code>\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[defaultActiveFirstOption]</code></td><td>\u662F\u5426\u9ED8\u8BA4\u9AD8\u4EAE\u7B2C\u4E00\u4E2A\u9009\u9879</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[backfill]</code></td><td>\u4F7F\u7528\u952E\u76D8\u9009\u62E9\u9009\u9879\u7684\u65F6\u5019\u628A\u9009\u4E2D\u9879\u56DE\u586B\u5230\u8F93\u5165\u6846\u4E2D</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[nzWidth]</code></td><td>\u81EA\u5B9A\u4E49\u5BBD\u5EA6\u5355\u4F4D px</td><td><code>number</code></td><td>\u89E6\u53D1\u5143\u7D20\u5BBD\u5EA6</td></tr><tr><td><code>[change]</code></td><td>\u53D8\u66F4\u56DE\u8C03</td><td><code>(item: NzAutocompleteOptionComponent, orgData: SFSchemaEnum) => void</code></td><td>-</td></tr><tr><td><code>[overlayClassName]</code></td><td>\u4E0B\u62C9\u6839\u5143\u7D20\u7684\u7C7B\u540D\u79F0</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[overlayStyle]</code></td><td>\u4E0B\u62C9\u6839\u5143\u7D20\u7684\u6837\u5F0F</td><td><code>object</code></td><td>-</td></tr><tr><td><code>[compareWith]</code></td><td>\u4E0E <a target="_blank" href="https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection" data-url="https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection">SelectControlValueAccessor</a> \u76F8\u540C</td><td><code>(o1: any, o2: any) => boolean</code></td><td><code>(o1: any, o2: any) => o1===o2</code></td></tr></tbody></table>',meta:{title:"autocomplete",subtitle:"\u81EA\u52A8\u5B8C\u6210",type:"Non-built-in widgets"},toc:[{id:"\u5BFC\u5165\u6A21\u5757",title:"\u5BFC\u5165\u6A21\u5757",h:2},{id:"\u6570\u636E\u6E90\u8BF4\u660E",title:"\u6570\u636E\u6E90\u8BF4\u660E",h:2},{id:"API",title:"API",h:2,children:[{id:"schema\u5C5E\u6027",title:"schema \u5C5E\u6027",h:3},{id:"ui\u5C5E\u6027",title:"ui \u5C5E\u6027",h:3}]}]}},demo:!0},this.codes=[{id:"form-autocomplete-simple",meta:{order:0,title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"}},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';
import { SFSchema } from '@delon/form';
import type { SFAutoCompleteWidgetSchema } from '@delon/form/widgets/autocomplete';
import { NzMessageService } from 'ng-zorro-antd/message';
import { of } from 'rxjs';

@Component({
  selector: 'form-autocomplete-simple',
  template: \`<sf [schema]="schema" (formSubmit)="submit($event)"></sf>\`,
})
export class FormAutocompleteSimpleComponent {
  schema: SFSchema = {
    properties: {
      format: {
        type: 'string',
        title: 'Format',
        format: 'email',
      },
      widget: {
        type: 'string',
        title: '\u6307\u5B9Awidget',
        ui: {
          widget: 'autocomplete',
          type: 'email',
        } as SFAutoCompleteWidgetSchema,
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
                    { label: input + input, value: 2 },
                  ]
                : [],
            ),
          change: (comp, data) => console.log(comp, data),
        } as SFAutoCompleteWidgetSchema,
        default: 'asdf',
      },
    },
  };

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormAutocompleteSimpleComponent",point:0,name:"simple",urls:"packages/form/widgets/autocomplete/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-autocomplete"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-autocomplete-simple"),i(7,`
        `),c(),i(8,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id))},dependencies:[w,C,k,F,ye],encapsulation:2});let n=e;return n})();var ve=(()=>{let e=class e{constructor(o){this.msg=o,this.schema={properties:{static:{type:"number",title:"Static",enum:[{value:11e4,label:"\u5317\u4EAC",parent:0,children:[{value:110100,label:"\u5317\u4EAC\u5E02",parent:11e4,children:[{value:110101,label:"\u4E1C\u57CE\u533A",parent:110100,isLeaf:!0},{value:110105,label:"\u671D\u9633\u533A",parent:110100,isLeaf:!0}]}]}],ui:"cascader",default:[11e4,110100,110105]},async:{type:"number",title:"RealTime",ui:{widget:"cascader",asyncData:(t,d)=>new Promise(m=>{setTimeout(()=>{t.children=[{value:11e4,label:"\u5317\u4EAC",parent:0},{value:110100,label:"\u5317\u4EAC\u5E02",parent:11e4},{value:110101,label:"\u4E1C\u57CE\u533A",parent:110100},{value:110105,label:"\u671D\u9633\u533A",parent:110100},{value:31e4,label:"\u4E0A\u6D77",parent:0},{value:310100,label:"\u4E0A\u6D77\u5E02",parent:31e4},{value:310101,label:"\u9EC4\u6D66\u533A",parent:310100},{value:310104,label:"\u5F90\u6C47\u533A",parent:310100}].filter(u=>(u.isLeaf=d===1,u.parent===(t.value||0))),m()},300)})},default:[11e4,110100,110105]}}}}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-cascader-simple"]],decls:3,vars:1,consts:[[3,"schema","formSubmit"]],template:function(t,d){t&1&&(i(0," "),r(1,"sf",0),h("formSubmit",function(u){return d.submit(u)}),c(),i(2," ")),t&2&&(s(1),a("schema",d.schema))},dependencies:[f],encapsulation:2});let n=e;return n})();var ke=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/widgets/cascader/index.en-US.md","zh-CN":"packages/form/widgets/cascader/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>Usually, it's used in province/city/district, company hierarchy, category of things, etc.</p><h2 id="Importmodule"><a class="lake-link"><i data-anchor="Importmodule"></i></a>Import module</h2><p>Non-built-in modules, Should be import <code>CascaderWidgetModule</code> in <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11">json-schema.module.ts</a>.</p><h2 id="Note"><a class="lake-link"><i data-anchor="Note"></i></a>Note</h2><ul><li><p>Value of <code>default</code> or <code>formData</code> should always be an array, for example, city cascade may only save leaf node <code>value</code>, but you need to manually provide the whole data chain <code>value</code> array</p></li></ul><h2 id="DataSource"><a class="lake-link"><i data-anchor="DataSource"></i></a>Data Source</h2><p><strong>Static</strong></p><p>One time fetching data, data source is from <code>asyncData</code>, <code>enum</code>.</p><p><strong>Realtime</strong></p><p>Every select triggers a HTTP request, data source is from <code>asyncData</code>; includes three parameters <code>(node: NzCascaderOption, index: number, me: CascaderWidget) => PromiseLike&lt;any></code>, <code>me</code> indicates instance of the current widget.</p></section>`,api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[enum]</code></td><td>Static data source</td><td><code>SFSchemaEnumType[]</code></td><td>-</td></tr><tr><td><code>[readOnly]</code></td><td>Read only</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[asyncData]</code></td><td>Asynchronous static data source</td><td><code>(node: NzCascaderOption, index: number, me: CascaderWidget) => PromiseLike&lt;any></code></td><td>-</td></tr><tr><td><code>[size]</code></td><td>Size, equals to <code>nzSize</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[placeholder]</code></td><td>Placeholder</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[showSearch]</code></td><td>Whether support search</td><td><code>bool</code></td><td><code>false</code></td></tr><tr><td><code>[allowClear]</code></td><td>Whether show clear button</td><td><code>bool</code></td><td><code>true</code></td></tr><tr><td><code>[clearText]</code></td><td>Title of clear button</td><td><code>string</code></td><td><code>\u6E05\u9664</code></td></tr><tr><td><code>[showArrow]</code></td><td>Whether show arrow</td><td><code>bool</code></td><td><code>true</code></td></tr><tr><td><code>[showInput]</code></td><td>Whether show input</td><td><code>bool</code></td><td><code>true</code></td></tr><tr><td><code>[menuClassName]</code></td><td>Custom floating layer class name</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[menuStyle]</code></td><td>Custom floating layer style</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[columnClassName]</code></td><td>Custom style of data column in popup menu</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[notFoundContent]</code></td><td>Content when dropdown list is empty</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[data]</code></td><td>Initial data, is used in first column data, sub column is loaded by <code>children</code> option, or loaded by <code>load</code> asynchronous event</td><td><code>Array</code></td><td>-</td></tr><tr><td><code>[enableCache]</code></td><td>Whether cache asynchronous loaded data, should set it to false if data is changed in every asynchronous load</td><td><code>bool</code></td><td><code>true</code></td></tr><tr><td><code>[expandTrigger]</code></td><td>How is sub menu expanded, options: 'click' or 'hover'</td><td><code>string</code></td><td><code>click</code></td></tr><tr><td><code>[changeOnSelect]</code></td><td>When it is set to true, the value is changed when each level of menu option is selected, see details from above demo</td><td><code>bool</code></td><td><code>false</code></td></tr><tr><td><code>[changeOn]</code></td><td>Custom function to determine if it should have a change when a menu option is selected, will have a change when return value is true</td><td><code>(option: NzCascaderOption, level: number) => boolean</code></td><td>-</td></tr><tr><td><code>[triggerAction]</code></td><td>Trigger action to show menu</td><td><code>('click', 'hover')[]</code></td><td><code>['click']</code></td></tr><tr><td><code>[valueProperty]</code></td><td>Property of <code>value</code></td><td><code>string</code></td><td><code>value</code></td></tr><tr><td><code>[labelProperty]</code></td><td>Property of <code>label</code></td><td><code>string</code></td><td><code>label</code></td></tr><tr><td><code>[visibleChange]</code></td><td>Asynchronous load event</td><td><code>(value: boolean) => void</code></td><td>-</td></tr><tr><td><code>[change]</code></td><td>Selected value changed event</td><td><code>(values: any[]) => void</code></td><td>-</td></tr><tr><td><code>[selectionChange]</code></td><td>Select option changed event</td><td><code>(values: NzCascaderOption[]) => void</code></td><td>-</td></tr><tr><td><code>[clear]</code></td><td>Content clear event</td><td><code>() => void</code></td><td>-</td></tr></tbody></table>`,meta:{title:"cascader",subtitle:"Cascader",type:"Non-built-in widgets"},toc:[{id:"Importmodule",title:"Import module",h:2},{id:"Note",title:"Note",h:2},{id:"DataSource",title:"Data Source",h:2},{id:"API",title:"API",h:2,children:[{id:"schema",title:"schema",h:3},{id:"ui",title:"ui",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u4E00\u822C\u7528\u4E8E\u7701\u5E02\u533A\uFF0C\u516C\u53F8\u5C42\u7EA7\uFF0C\u4E8B\u7269\u5206\u7C7B\u7B49\u3002</p><h2 id="\u5BFC\u5165\u6A21\u5757"><a class="lake-link"><i data-anchor="\u5BFC\u5165\u6A21\u5757"></i></a>\u5BFC\u5165\u6A21\u5757</h2><p>\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11">json-schema.module.ts</a> \u5BFC\u5165 <code>CascaderWidgetModule</code>\u3002</p><h2 id="\u6CE8\u610F\u4E8B\u9879"><a class="lake-link"><i data-anchor="\u6CE8\u610F\u4E8B\u9879"></i></a>\u6CE8\u610F\u4E8B\u9879</h2><ul><li><p><code>default</code> \u6216 <code>formData</code> \u503C\u59CB\u7EC8\u5E94\u8BE5\u4FDD\u6301\u4E00\u4E2A\u6570\u7EC4\uFF0C\u4F8B\u5982\uFF1A\u57CE\u5E02\u7EA7\u8054\u53EF\u80FD\u53EA\u5B58\u50A8\u53F6\u8282\u70B9 <code>value</code>\uFF0C\u6B64\u65F6\u9700\u8981\u624B\u52A8\u5904\u7406\u5E76\u7ED9\u51FA\u5B8C\u6574\u6570\u636E\u94FE <code>value</code> \u6570\u7EC4</p></li></ul><h2 id="\u6570\u636E\u6E90\u8BF4\u660E"><a class="lake-link"><i data-anchor="\u6570\u636E\u6E90\u8BF4\u660E"></i></a>\u6570\u636E\u6E90\u8BF4\u660E</h2><p><strong>\u9759\u6001</strong></p><p>\u6307\u4E00\u6B21\u6027\u83B7\u53D6\u6570\u636E\uFF0C\u6570\u636E\u6765\u6E90\u4E8E <code>asyncData</code>\u3001<code>enum</code>\u3002</p><p><strong>\u5B9E\u65F6</strong></p><p>\u6307\u6BCF\u4E00\u6B21\u6BCF\u4E00\u6B21\u9009\u62E9\u4F1A\u89E6\u53D1HTTP\u8BF7\u6C42\uFF0C\u6570\u636E\u6765\u6E90\u4E8E <code>asyncData</code>\uFF1B\u5305\u542B\u4E09\u4E2A\u53C2\u6570 <code>(node: NzCascaderOption, index: number, me: CascaderWidget) => PromiseLike&lt;any></code>\uFF0C\u5176\u4E2D <code>me</code> \u8868\u793A\u5F53\u524D\u5C0F\u90E8\u4EF6\u5B9E\u4F8B\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[enum]</code></td><td>\u9759\u6001\u6570\u636E\u6E90</td><td><code>SFSchemaEnumType[]</code></td><td>-</td></tr><tr><td><code>[readOnly]</code></td><td>\u7981\u7528\u72B6\u6001</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="ui\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[asyncData]</code></td><td>\u5F02\u6B65\u9759\u6001\u6570\u636E\u6E90</td><td><code>(node: NzCascaderOption, index: number, me: CascaderWidget) => PromiseLike&lt;any></code></td><td>-</td></tr><tr><td><code>[size]</code></td><td>\u5927\u5C0F\uFF0C\u7B49\u540C <code>nzSize</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[placeholder]</code></td><td>\u5728\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u8BAF\u606F</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[showSearch]</code></td><td>\u662F\u5426\u652F\u6301\u641C\u7D22</td><td><code>bool</code></td><td><code>false</code></td></tr><tr><td><code>[allowClear]</code></td><td>\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE</td><td><code>bool</code></td><td><code>true</code></td></tr><tr><td><code>[clearText]</code></td><td>\u6E05\u9664\u6309\u94AE\u7684\u6807\u9898</td><td><code>string</code></td><td><code>\u6E05\u9664</code></td></tr><tr><td><code>[showArrow]</code></td><td>\u662F\u5426\u663E\u793A\u7BAD\u5934</td><td><code>bool</code></td><td><code>true</code></td></tr><tr><td><code>[showInput]</code></td><td>\u662F\u5426\u663E\u793A\u8F93\u5165\u6846</td><td><code>bool</code></td><td><code>true</code></td></tr><tr><td><code>[menuClassName]</code></td><td>\u81EA\u5B9A\u4E49\u6D6E\u5C42\u7C7B\u540D</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[menuStyle]</code></td><td>\u81EA\u5B9A\u4E49\u6D6E\u5C42\u6837\u5F0F</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[columnClassName]</code></td><td>\u5F39\u51FA\u83DC\u5355\u4E2D\u6570\u636E\u5217\u7684\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[notFoundContent]</code></td><td>\u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[data]</code></td><td>\u521D\u59CB\u5316\u5217\u6570\u636E\uFF0C\u7528\u4E8E\u7B2C\u4E00\u5217\u7684\u6570\u636E\uFF0C\u5B50\u5217\u901A\u8FC7\u9009\u9879\u7684 <code>children</code> \u52A0\u8F7D\uFF0C\u6216\u8005\u901A\u8FC7 <code>load</code> \u4E8B\u4EF6\u5F02\u6B65\u52A0\u8F7D\u3002</td><td><code>Array</code></td><td>-</td></tr><tr><td><code>[enableCache]</code></td><td>\u662F\u5426\u7F13\u5B58\u5F02\u6B65\u52A0\u8F7D\u7684\u6570\u636E\uFF0C\u82E5\u6BCF\u6B21\u5F02\u6B65\u52A0\u8F7D\u7684\u6570\u636E\u90FD\u662F\u53D8\u5316\u7684\uFF0C\u9700\u5C06\u8BE5\u503C\u8BBE\u7F6E\u4E3A false</td><td><code>bool</code></td><td><code>true</code></td></tr><tr><td><code>[expandTrigger]</code></td><td>\u6B21\u7EA7\u83DC\u5355\u7684\u5C55\u5F00\u65B9\u5F0F\uFF0C\u53EF\u9009 'click' \u548C 'hover'</td><td><code>string</code></td><td><code>click</code></td></tr><tr><td><code>[changeOnSelect]</code></td><td>\u5F53\u6B64\u9879\u4E3A true \u65F6\uFF0C\u70B9\u9009\u6BCF\u7EA7\u83DC\u5355\u9009\u9879\u503C\u90FD\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u5177\u4F53\u89C1\u4E0A\u9762\u7684\u6F14\u793A</td><td><code>bool</code></td><td><code>false</code></td></tr><tr><td><code>[changeOn]</code></td><td>\u53EF\u901A\u8FC7\u81EA\u5B9A\u4E49\u7684\u51FD\u6570\u6765\u5224\u65AD\u70B9\u51FB\u83DC\u5355\u9009\u9879\u662F\u5426\u5E94\u8BE5\u53D1\u751F\u53D8\u5316\uFF0C\u5F53\u51FD\u6570\u8FD4\u56DE true \u65F6\uFF0C\u5C06\u53D1\u751F\u53D8\u5316</td><td><code>(option: NzCascaderOption, level: number) => boolean</code></td><td>-</td></tr><tr><td><code>[triggerAction]</code></td><td>\u89E6\u53D1\u83DC\u5355\u51FA\u73B0\u7684\u884C\u4E3A</td><td><code>('click', 'hover')[]</code></td><td><code>['click']</code></td></tr><tr><td><code>[valueProperty]</code></td><td>\u503C <code>value</code> \u7684\u5C5E\u6027\u540D\u79F0</td><td><code>string</code></td><td><code>value</code></td></tr><tr><td><code>[labelProperty]</code></td><td>\u503C <code>label</code> \u7684\u5C5E\u6027\u540D\u79F0</td><td><code>string</code></td><td><code>label</code></td></tr><tr><td><code>[visibleChange]</code></td><td>\u5F02\u6B65\u52A0\u8F7D\u4E8B\u4EF6</td><td><code>(value: boolean) => void</code></td><td>-</td></tr><tr><td><code>[change]</code></td><td>\u9009\u9879\u503C\u53D8\u66F4\u4E8B\u4EF6</td><td><code>(values: any[]) => void</code></td><td>-</td></tr><tr><td><code>[selectionChange]</code></td><td>\u9009\u9879\u53D8\u66F4\u4E8B\u4EF6</td><td><code>(values: NzCascaderOption[]) => void</code></td><td>-</td></tr><tr><td><code>[clear]</code></td><td>\u5185\u5BB9\u88AB\u6E05\u7A7A\u4E8B\u4EF6</td><td><code>() => void</code></td><td>-</td></tr></tbody></table>`,meta:{title:"cascader",subtitle:"\u7EA7\u8054\u9009\u62E9",type:"Non-built-in widgets"},toc:[{id:"\u5BFC\u5165\u6A21\u5757",title:"\u5BFC\u5165\u6A21\u5757",h:2},{id:"\u6CE8\u610F\u4E8B\u9879",title:"\u6CE8\u610F\u4E8B\u9879",h:2},{id:"\u6570\u636E\u6E90\u8BF4\u660E",title:"\u6570\u636E\u6E90\u8BF4\u660E",h:2},{id:"API",title:"API",h:2,children:[{id:"schema\u5C5E\u6027",title:"schema \u5C5E\u6027",h:3},{id:"ui\u5C5E\u6027",title:"ui \u5C5E\u6027",h:3}]}]}},demo:!0},this.codes=[{id:"form-cascader-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';
import { SFSchema } from '@delon/form';
import type { SFCascaderWidgetSchema } from '@delon/form/widgets/cascader';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-cascader-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)"></sf> \`,
})
export class FormCascaderSimpleComponent {
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
                    isLeaf: true,
                  },
                  {
                    value: 110105,
                    label: '\u671D\u9633\u533A',
                    parent: 110100,
                    isLeaf: true,
                  },
                ],
              },
            ],
          },
        ],
        ui: 'cascader',
        default: [110000, 110100, 110105],
      },
      async: {
        type: 'number',
        title: 'RealTime',
        ui: {
          widget: 'cascader',
          asyncData: (node, index) => {
            return new Promise(resolve => {
              setTimeout(() => {
                (node as any).children = [
                  { value: 110000, label: '\u5317\u4EAC', parent: 0 },
                  { value: 110100, label: '\u5317\u4EAC\u5E02', parent: 110000 },
                  { value: 110101, label: '\u4E1C\u57CE\u533A', parent: 110100 },
                  { value: 110105, label: '\u671D\u9633\u533A', parent: 110100 },
                  { value: 310000, label: '\u4E0A\u6D77', parent: 0 },
                  { value: 310100, label: '\u4E0A\u6D77\u5E02', parent: 310000 },
                  { value: 310101, label: '\u9EC4\u6D66\u533A', parent: 310100 },
                  { value: 310104, label: '\u5F90\u6C47\u533A', parent: 310100 },
                ].filter((w: any) => {
                  w.isLeaf = index === 1;
                  return w.parent === (node.value || 0);
                });
                resolve();
              }, 300);
            });
          },
        } as SFCascaderWidgetSchema,
        default: [110000, 110100, 110105],
      },
    },
  };

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormCascaderSimpleComponent",point:0,name:"simple",urls:"packages/form/widgets/cascader/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-cascader"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-cascader-simple"),i(7,`
        `),c(),i(8,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id))},dependencies:[w,C,k,F,ve],encapsulation:2});let n=e;return n})();var Ce=(()=>{let e=class e{constructor(o){this.msg=o,this.schema={properties:{base:{type:"string",title:"Base",ui:{widget:"color",title:"Pls choose a color",change:console.log}},showText:{type:"string",title:"Show Text",ui:{widget:"color",showText:!0,trigger:"hover",change:console.log}},defaultValue:{type:"string",title:"Default Value",ui:{widget:"color",showText:!0,defaultValue:"#0a0",change:console.log}},clearColor:{type:"string",title:"Clear Color",ui:{widget:"color",allowClear:!0,change:console.log}},disabled:{type:"string",title:"Disabled",ui:{widget:"color",showText:!0},readOnly:!0},rgb:{type:"string",title:"RGB",ui:{widget:"color",format:"rgb",showText:!0,change:console.log,formatChange:console.log}},block:{type:"string",title:"Block Color",ui:{widget:"color",block:!0},default:"#f50"}}}}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-color-simple"]],decls:1,vars:1,consts:[[3,"schema","formSubmit"]],template:function(t,d){t&1&&(r(0,"sf",0),h("formSubmit",function(u){return d.submit(u)}),c()),t&2&&a("schema",d.schema)},dependencies:[f],encapsulation:2});let n=e;return n})();var we=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/widgets/color/index.en-US.md","zh-CN":"packages/form/widgets/color/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Used when the user needs to customize the color selection.</p><h2 id="HowtoUse"><a class="lake-link"><i data-anchor="HowtoUse"></i></a>How to Use</h2><p><strong>Installation dependencies</strong>  </p><p><code>yarn add ng-antd-color-picker</code></p><p><strong>Import Module</strong></p><p>Non-built-in modules, Should be import <code>ColorWidgetModule</code> in <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11">json-schema.module.ts</a>.</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[format]</code></td><td>Format of color</td><td><code>rgb</code>\uFF5C<code>hex</code>\uFF5C<code>hsb</code></td><td><code>hex</code></td></tr><tr><td><code>[defaultValue]</code></td><td>Default value of color</td><td><code>string</code>\uFF5C<code>NzColor</code></td><td><code>false</code></td></tr><tr><td><code>[allowClear]</code></td><td>Allow clearing color selected</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[trigger]</code></td><td>ColorPicker trigger mode</td><td><code>hover</code>\uFF5C<code>click</code></td><td><code>click</code></td></tr><tr><td><code>[showText]</code></td><td>Show color text</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[title]</code></td><td>Setting the title of the color picker</td><td><code>TemplateRef&lt;void></code>\uFF5C<code>string</code></td><td>-</td></tr><tr><td><code>(change)</code></td><td>Callback when value is changed</td><td><code>EventEmitter&lt;{ color: NzColor; format: string }></code></td><td>-</td></tr><tr><td><code>(formatChange)</code></td><td>Callback when <code>format</code> is changed</td><td><code>EventEmitter&lt;'rgb'\uFF5C'hex'\uFF5C'hsb'></code></td><td>-</td></tr><tr><td><code>[block]</code></td><td>Color Block</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>`,meta:{title:"color",subtitle:"Color",type:"Non-built-in widgets"},toc:[{id:"HowtoUse",title:"How to Use",h:2},{id:"API",title:"API",h:2,children:[{id:"ui",title:"ui",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u5F53\u7528\u6237\u9700\u8981\u81EA\u5B9A\u4E49\u989C\u8272\u9009\u62E9\u7684\u65F6\u5019\u4F7F\u7528\u3002</p><h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p><strong>\u5B89\u88C5\u4F9D\u8D56</strong>  </p><p><code>yarn add ng-antd-color-picker</code></p><p><strong>\u5BFC\u5165\u6A21\u5757</strong></p><p>\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11">json-schema.module.ts</a> \u5BFC\u5165 <code>ColorWidgetModule</code>\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="ui\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[format]</code></td><td>\u989C\u8272\u683C\u5F0F</td><td><code>rgb</code>\uFF5C<code>hex</code>\uFF5C<code>hsb</code></td><td><code>hex</code></td></tr><tr><td><code>[defaultValue]</code></td><td>\u989C\u8272\u9ED8\u8BA4\u7684\u503C</td><td><code>string</code>\uFF5C<code>NzColor</code></td><td>-</td></tr><tr><td><code>[allowClear]</code></td><td>\u5141\u8BB8\u6E05\u9664\u9009\u62E9\u7684\u989C\u8272</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[trigger]</code></td><td>\u989C\u8272\u9009\u62E9\u5668\u7684\u89E6\u53D1\u6A21\u5F0F</td><td><code>hover</code>\uFF5C<code>click</code></td><td><code>click</code></td></tr><tr><td><code>[showText]</code></td><td>\u663E\u793A\u989C\u8272\u6587\u672C</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[title]</code></td><td>\u8BBE\u7F6E\u989C\u8272\u9009\u62E9\u5668\u7684\u6807\u9898</td><td><code>TemplateRef&lt;void></code>\uFF5C<code>string</code></td><td>-</td></tr><tr><td><code>(change)</code></td><td>\u989C\u8272\u53D8\u5316\u7684\u56DE\u8C03</td><td><code>EventEmitter&lt;{ color: NzColor; format: string }></code></td><td>-</td></tr><tr><td><code>(formatChange)</code></td><td>\u989C\u8272\u683C\u5F0F\u53D8\u5316\u7684\u56DE\u8C03</td><td><code>EventEmitter&lt;'rgb'\uFF5C'hex'\uFF5C'hsb'></code></td><td>-</td></tr><tr><td><code>[block]</code></td><td>\u662F\u5426\u989C\u8272\u5757</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>`,meta:{title:"color",subtitle:"\u989C\u8272",type:"Non-built-in widgets"},toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528",h:2},{id:"API",title:"API",h:2,children:[{id:"ui\u5C5E\u6027",title:"ui \u5C5E\u6027",h:3}]}]}},demo:!0},this.codes=[{id:"form-color-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';

import { SFSchema } from '@delon/form';
import type { SFColorWidgetSchema } from '@delon/form/widgets/color';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-color-simple',
  template: \`<sf [schema]="schema" (formSubmit)="submit($event)" />\`
})
export class FormColorSimpleComponent {
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

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormColorSimpleComponent",point:0,name:"simple",urls:"packages/form/widgets/color/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-color"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-color-simple"),i(7,`
        `),c(),i(8,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id))},dependencies:[w,C,k,F,Ce],encapsulation:2});let n=e;return n})();var et=["asdf","cipchk","\u4E2D\u6587","\u306B\u307B\u3093\u3054"],Fe=(()=>{let e=class e{constructor(o){this.msg=o,this.schema={properties:{remark:{type:"string",title:"\u63CF\u8FF0",enum:et,minimum:2,maximum:5,ui:{widget:"mention",inputStyle:"textarea"}},async:{type:"string",title:"Async",ui:{widget:"mention",asynxcData:()=>P(et).pipe(A(1e3))}},real_time:{type:"string",title:"RealTime",ui:{widget:"mention",loadData:t=>P(et.filter(d=>d.indexOf(t.value)!==-1)).pipe(A(300))}}}}}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-mention-simple"]],decls:3,vars:1,consts:[[3,"schema","formSubmit"]],template:function(t,d){t&1&&(i(0," "),r(1,"sf",0),h("formSubmit",function(u){return d.submit(u)}),c(),i(2," ")),t&2&&(s(1),a("schema",d.schema))},dependencies:[f],encapsulation:2});let n=e;return n})();var xe=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/widgets/mention/index.en-US.md","zh-CN":"packages/form/widgets/mention/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Mention widget.</p><h2 id="Importmodule"><a class="lake-link"><i data-anchor="Importmodule"></i></a>Import module</h2><p>Non-built-in modules, Should be import <code>MentionWidgetModule</code> in <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11">json-schema.module.ts</a>.</p><h2 id="Note"><a class="lake-link"><i data-anchor="Note"></i></a>Note</h2><ul><li><p>You <strong>must</strong> set <code>valueWith</code> parameter if there is no <code>label</code> property in data.</p></li></ul><h2 id="DataSource"><a class="lake-link"><i data-anchor="DataSource"></i></a>Data Source</h2><p><strong>Static</strong></p><p>One time fetching data, data source is from <code>asyncData</code>, <code>enum</code>.</p><p><strong>Realtime</strong></p><p>Every select triggers a HTTP request, data source is from <code>asyncData</code>.</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[enum]</code></td><td>Static data source</td><td><code>SFSchemaEnumType[]</code></td><td>-</td></tr><tr><td><code>[readOnly]</code></td><td>Read only</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[minimum]</code></td><td>Minimum time of mention</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[maximum]</code></td><td>Maximum time of mention</td><td><code>number</code></td><td>-</td></tr></tbody></table><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[asyncData]</code></td><td>Asynchronous static data source</td><td><code>(input: string) => Observable&lt;SFSchemaEnumType[]></code></td><td>-</td></tr><tr><td><code>[size]</code></td><td>Size, equals to <code>nzSize</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[placeholder]</code></td><td>Placeholder</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[loadData]</code></td><td>Realtime data</td><td><code>(option: MentionOnSearchTypes) => Observable&lt;SFSchemaEnumType[]></code></td><td>-</td></tr><tr><td><code>[notFoundContent]</code></td><td>Content when nothing found</td><td><code>string</code></td><td><code>\u65E0\u5339\u914D\u7ED3\u679C\uFF0C\u8F7B\u6572\u7A7A\u683C\u5B8C\u6210\u8F93\u5165</code></td></tr><tr><td><code>[placement]</code></td><td>Position of suggestion box</td><td><code>button,top</code></td><td><code>button</code></td></tr><tr><td><code>[prefix]</code></td><td>Character to trigger to popup dropdown list</td><td><code>'string'</code> <code>'string[]'</code></td><td><code>@</code></td></tr><tr><td><code>[valueWith]</code></td><td>Function that maps a suggestion value</td><td><code>(value: any) => string</code></td><td>-</td></tr><tr><td><code>[select]</code></td><td>Callback when option in dropdown list is selected</td><td><code>(value: any) => void</code></td><td>-</td></tr><tr><td><code>[inputStyle]</code></td><td>Input type</td><td><code>text, textarea</code></td><td><code>text</code></td></tr><tr><td><code>[autosize]</code></td><td>Adaptive content height, set to <code>true|false</code> or object:<code>{ minRows: 2, maxRows: 6 }</code></td><td><code>boolean,AutoSizeType</code></td><td><code>true</code></td></tr></tbody></table>`,meta:{title:"mention",subtitle:"Mention",type:"Non-built-in widgets"},toc:[{id:"Importmodule",title:"Import module",h:2},{id:"Note",title:"Note",h:2},{id:"DataSource",title:"Data Source",h:2},{id:"API",title:"API",h:2,children:[{id:"schema",title:"schema",h:3},{id:"ui",title:"ui",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u63D0\u53CA\u7EC4\u4EF6\u3002</p><h2 id="\u5BFC\u5165\u6A21\u5757"><a class="lake-link"><i data-anchor="\u5BFC\u5165\u6A21\u5757"></i></a>\u5BFC\u5165\u6A21\u5757</h2><p>\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11">json-schema.module.ts</a> \u5BFC\u5165 <code>MentionWidgetModule</code>\u3002</p><h2 id="\u6CE8\u610F\u4E8B\u9879"><a class="lake-link"><i data-anchor="\u6CE8\u610F\u4E8B\u9879"></i></a>\u6CE8\u610F\u4E8B\u9879</h2><ul><li><p>\u82E5\u6570\u636E\u4E2D\u4E0D\u5305\u62EC <code>label</code> \u5C5E\u6027\uFF0C\u5219<strong>\u52A1\u5FC5</strong>\u6307\u5B9A <code>valueWith</code> \u53C2\u6570\u3002</p></li></ul><h2 id="\u6570\u636E\u6E90\u8BF4\u660E"><a class="lake-link"><i data-anchor="\u6570\u636E\u6E90\u8BF4\u660E"></i></a>\u6570\u636E\u6E90\u8BF4\u660E</h2><p><strong>\u9759\u6001</strong></p><p>\u6307\u4E00\u6B21\u6027\u83B7\u53D6\u6570\u636E\uFF0C\u6570\u636E\u6765\u6E90\u4E8E <code>asyncData</code>\u3001<code>enum</code>\u3002</p><p><strong>\u5B9E\u65F6</strong></p><p>\u6307\u6BCF\u4E00\u6B21\u9009\u62E9\u4F1A\u89E6\u53D1HTTP\u8BF7\u6C42\uFF0C\u6570\u636E\u6765\u6E90\u4E8E <code>loadData</code>\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[enum]</code></td><td>\u9759\u6001\u6570\u636E\u6E90</td><td><code>SFSchemaEnumType[]</code></td><td>-</td></tr><tr><td><code>[readOnly]</code></td><td>\u7981\u7528\u72B6\u6001</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[minimum]</code></td><td>\u6700\u5C11\u63D0\u53CA\u6B21\u6570</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[maximum]</code></td><td>\u6700\u591A\u63D0\u53CA\u6B21\u6570</td><td><code>number</code></td><td>-</td></tr></tbody></table><h3 id="ui\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[asyncData]</code></td><td>\u5F02\u6B65\u9759\u6001\u6570\u636E\u6E90</td><td><code>(input: string) => Observable&lt;SFSchemaEnumType[]></code></td><td>-</td></tr><tr><td><code>[size]</code></td><td>\u5927\u5C0F\uFF0C\u7B49\u540C <code>nzSize</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[placeholder]</code></td><td>\u5728\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u8BAF\u606F</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[loadData]</code></td><td>\u5B9E\u65F6\u6570\u636E</td><td><code>(option: MentionOnSearchTypes) => Observable&lt;SFSchemaEnumType[]></code></td><td>-</td></tr><tr><td><code>[notFoundContent]</code></td><td>\u672A\u627E\u5230\u65F6\u7684\u5185\u5BB9</td><td><code>string</code></td><td><code>\u65E0\u5339\u914D\u7ED3\u679C\uFF0C\u8F7B\u6572\u7A7A\u683C\u5B8C\u6210\u8F93\u5165</code></td></tr><tr><td><code>[placement]</code></td><td>\u5EFA\u8BAE\u6846\u4F4D\u7F6E</td><td><code>button,top</code></td><td><code>button</code></td></tr><tr><td><code>[prefix]</code></td><td>\u89E6\u53D1\u5F39\u51FA\u4E0B\u62C9\u6846\u7684\u5B57\u7B26</td><td><code>'string'</code> <code>'string[]'</code></td><td><code>@</code></td></tr><tr><td><code>[valueWith]</code></td><td>\u5EFA\u8BAE\u9009\u9879\u7684\u53D6\u503C\u65B9\u6CD5</td><td><code>(value: any) => string</code></td><td>-</td></tr><tr><td><code>[select]</code></td><td>\u4E0B\u62C9\u6846\u9009\u62E9\u5EFA\u8BAE\u65F6\u56DE\u8C03</td><td><code>(value: any) => void</code></td><td>-</td></tr><tr><td><code>[inputStyle]</code></td><td>\u6587\u672C\u6846\u7C7B\u578B</td><td><code>text, textarea</code></td><td><code>text</code></td></tr><tr><td><code>[autosize]</code></td><td>\u81EA\u9002\u5E94\u5185\u5BB9\u9AD8\u5EA6\uFF0C\u53EF\u8BBE\u7F6E\u4E3A <code>true|false</code> \u6216\u5BF9\u8C61\uFF1A<code>{ minRows: 2, maxRows: 6 }</code></td><td><code>boolean,AutoSizeType</code></td><td><code>true</code></td></tr></tbody></table>`,meta:{title:"mention",subtitle:"\u63D0\u53CA",type:"Non-built-in widgets"},toc:[{id:"\u5BFC\u5165\u6A21\u5757",title:"\u5BFC\u5165\u6A21\u5757",h:2},{id:"\u6CE8\u610F\u4E8B\u9879",title:"\u6CE8\u610F\u4E8B\u9879",h:2},{id:"\u6570\u636E\u6E90\u8BF4\u660E",title:"\u6570\u636E\u6E90\u8BF4\u660E",h:2},{id:"API",title:"API",h:2,children:[{id:"schema\u5C5E\u6027",title:"schema \u5C5E\u6027",h:3},{id:"ui\u5C5E\u6027",title:"ui \u5C5E\u6027",h:3}]}]}},demo:!0},this.codes=[{id:"form-mention-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';
import { SFSchema } from '@delon/form';
import type { SFMentionWidgetSchema } from '@delon/form/widgets/mention';
import { MentionOnSearchTypes } from 'ng-zorro-antd/mention';
import { NzMessageService } from 'ng-zorro-antd/message';
import { of, delay } from 'rxjs';

const DATA = ['asdf', 'cipchk', '\u4E2D\u6587', '\u306B\u307B\u3093\u3054'];

@Component({
  selector: 'form-mention-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)"></sf> \`,
})
export class FormMentionSimpleComponent {
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
          inputStyle: 'textarea',
        } as SFMentionWidgetSchema,
      },
      // \u5F02\u6B65\u9759\u6001\u6570\u636E\u6E90
      async: {
        type: 'string',
        title: 'Async',
        ui: {
          widget: 'mention',
          asynxcData: () => of(DATA).pipe(delay(1000)),
        } as SFMentionWidgetSchema,
      },
      // \u5B9E\u65F6\u6570\u636E
      real_time: {
        type: 'string',
        title: 'RealTime',
        ui: {
          widget: 'mention',
          loadData: (option: MentionOnSearchTypes) => of(DATA.filter(item => item.indexOf(option.value) !== -1)).pipe(delay(300)),
        } as SFMentionWidgetSchema,
      },
    },
  };

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormMentionSimpleComponent",point:0,name:"simple",urls:"packages/form/widgets/mention/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-mention"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-mention-simple"),i(7,`
        `),c(),i(8,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id))},dependencies:[w,C,k,F,Fe],encapsulation:2});let n=e;return n})();var ze=(()=>{let e=class e{constructor(o){this.msg=o,this.schema={properties:{base:{type:"string",title:"Base",default:"https://ng-alain.com/",ui:{widget:"qr-code",refresh:console.log}},icon:{type:"string",title:"With Icon",default:"https://ng-alain.com/",ui:{widget:"qr-code",icon:"https://ng-alain.com/assets/logo-color.svg",bordered:!0}},color:{type:"string",title:"Color",default:"https://ng-alain.com/",ui:{widget:"qr-code",color:"#f50"}}}}}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-qr-code-simple"]],decls:1,vars:1,consts:[[3,"schema","formSubmit"]],template:function(t,d){t&1&&(r(0,"sf",0),h("formSubmit",function(u){return d.submit(u)}),c()),t&2&&a("schema",d.schema)},dependencies:[f],encapsulation:2});let n=e;return n})();var Te=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/widgets/qr-code/index.en-US.md","zh-CN":"packages/form/widgets/qr-code/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Used when the link needs to be converted into a QR Code.</p><h2 id="Importmodule"><a class="lake-link"><i data-anchor="Importmodule"></i></a>Import module</h2><p>Non-built-in modules, Should be import <code>QrCodeWidgetModule</code> in <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11">json-schema.module.ts</a>.</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[color]</code></td><td>QR code Color</td><td><code>string</code></td><td><code>#000</code></td></tr><tr><td><code>[bgColor]</code></td><td>QR code background color</td><td><code>string</code></td><td><code>#FFFFFF</code></td></tr><tr><td><code>[qrSize]</code></td><td>QR code Size</td><td><code>number</code></td><td><code>160</code></td></tr><tr><td><code>[padding]</code></td><td>QR code Padding</td><td><code>number \\| number[]</code></td><td><code>0</code></td></tr><tr><td><code>[icon]</code></td><td>Icon address in QR code</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[iconSize]</code></td><td>The size of the icon in the QR code</td><td><code>number</code></td><td><code>40</code></td></tr><tr><td><code>[bordered]</code></td><td>Whether has border style</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[status]</code></td><td>QR code status</td><td><code>'active'\uFF5C'expired' \uFF5C'loading'</code></td><td><code>active</code></td></tr><tr><td><code>[level]</code></td><td>Error Code Level</td><td><code>'L'\uFF5C'M'\uFF5C'Q'\uFF5C'H'</code></td><td><code>M</code></td></tr><tr><td><code>(refresh)</code></td><td>callback</td><td><code>EventEmitter&lt;string></code></td><td>-</td></tr></tbody></table>`,meta:{title:"qr-code",subtitle:"QRCode",type:"Non-built-in widgets"},toc:[{id:"Importmodule",title:"Import module",h:2},{id:"API",title:"API",h:2,children:[{id:"ui",title:"ui",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u5F53\u9700\u8981\u5C06\u94FE\u63A5\u8F6C\u6362\u6210\u4E3A\u4E8C\u7EF4\u7801\u65F6\u4F7F\u7528\u3002</p><h2 id="\u5BFC\u5165\u6A21\u5757"><a class="lake-link"><i data-anchor="\u5BFC\u5165\u6A21\u5757"></i></a>\u5BFC\u5165\u6A21\u5757</h2><p>\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11">json-schema.module.ts</a> \u5BFC\u5165 <code>QrCodeWidgetModule</code>\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="ui\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[color]</code></td><td>\u4E8C\u7EF4\u7801\u989C\u8272</td><td><code>string</code></td><td><code>#000</code></td></tr><tr><td><code>[bgColor]</code></td><td>\u4E8C\u7EF4\u7801\u80CC\u666F\u989C\u8272</td><td><code>string</code></td><td><code>#FFFFFF</code></td></tr><tr><td><code>[qrSize]</code></td><td>\u4E8C\u7EF4\u7801\u5927\u5C0F</td><td><code>number</code></td><td><code>160</code></td></tr><tr><td><code>[padding]</code></td><td>\u4E8C\u7EF4\u7801\u586B\u5145</td><td><code>number \\| number[]</code></td><td><code>0</code></td></tr><tr><td><code>[icon]</code></td><td>\u4E8C\u7EF4\u7801\u4E2D icon \u5730\u5740</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[iconSize]</code></td><td>\u4E8C\u7EF4\u7801\u4E2D icon \u5927\u5C0F</td><td><code>number</code></td><td><code>40</code></td></tr><tr><td><code>[bordered]</code></td><td>\u662F\u5426\u6709\u8FB9\u6846</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[status]</code></td><td>\u4E8C\u7EF4\u7801\u72B6\u6001</td><td><code>'active'\uFF5C'expired' \uFF5C'loading'</code></td><td><code>active</code></td></tr><tr><td><code>[level]</code></td><td>\u4E8C\u7EF4\u7801\u5BB9\u9519\u7B49\u7EA7</td><td><code>'L'\uFF5C'M'\uFF5C'Q'\uFF5C'H'</code></td><td><code>M</code></td></tr><tr><td><code>(refresh)</code></td><td>\u70B9\u51FB"\u70B9\u51FB\u5237\u65B0"\u7684\u56DE\u8C03</td><td><code>EventEmitter&lt;string></code></td><td>-</td></tr></tbody></table>`,meta:{title:"qr-code",subtitle:"\u4E8C\u7EF4\u7801",type:"Non-built-in widgets"},toc:[{id:"\u5BFC\u5165\u6A21\u5757",title:"\u5BFC\u5165\u6A21\u5757",h:2},{id:"API",title:"API",h:2,children:[{id:"ui\u5C5E\u6027",title:"ui \u5C5E\u6027",h:3}]}]}},demo:!0},this.codes=[{id:"form-qr-code-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';

import { SFSchema } from '@delon/form';
import type { SFQrCodeWidgetSchema } from '@delon/form/widgets/qr-code';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-qr-code-simple',
  template: \`<sf [schema]="schema" (formSubmit)="submit($event)" />\`
})
export class FormQrCodeSimpleComponent {
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

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormQrCodeSimpleComponent",point:0,name:"simple",urls:"packages/form/widgets/qr-code/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-qr-code"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-qr-code-simple"),i(7,`
        `),c(),i(8,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id))},dependencies:[w,C,k,F,ze],encapsulation:2});let n=e;return n})();var Ne=(()=>{let e=class e{constructor(o){this.msg=o,this.schema={properties:{rate:{type:"number",title:"\u8BC4\u7EA7",default:4.5,ui:{widget:"rate"}},rate2:{type:"number",title:"\u8BC4\u7EA7",maximum:5,multipleOf:.5,default:4.5,ui:{widget:"rate",text:"{{value}} starts"}}}}}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-rate-simple"]],decls:3,vars:1,consts:[[3,"schema","formSubmit"]],template:function(t,d){t&1&&(i(0," "),r(1,"sf",0),h("formSubmit",function(u){return d.submit(u)}),c(),i(2," ")),t&2&&(s(1),a("schema",d.schema))},dependencies:[f],encapsulation:2});let n=e;return n})();var Ie=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/widgets/rate/index.en-US.md","zh-CN":"packages/form/widgets/rate/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>A quick rating operation on something.</p><h2 id="Importmodule"><a class="lake-link"><i data-anchor="Importmodule"></i></a>Import module</h2><p>Non-built-in modules, Should be import <code>RateWidgetModule</code> in <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11">json-schema.module.ts</a>.</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[maximum]</code></td><td>star count</td><td><code>number</code></td><td><code>5</code></td></tr><tr><td><code>[multipleOf]</code></td><td><code>0.5</code> indicates allow semi selection</td><td><code>number</code></td><td><code>0.5</code></td></tr></tbody></table><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[allowClear]</code></td><td>whether to allow clear when click again</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[autoFocus]</code></td><td>get focus when component mounted</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[text]</code></td><td>Reminder text template, <code>{{value}}</code> indicates the current value</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[tooltips]</code></td><td>Customize tooltip by each character</td><td><code>string[]</code></td><td><code>[]</code></td></tr></tbody></table>',meta:{title:"rate",subtitle:"Rate",type:"Non-built-in widgets"},toc:[{id:"Importmodule",title:"Import module",h:2},{id:"API",title:"API",h:2,children:[{id:"schema",title:"schema",h:3},{id:"ui",title:"ui",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u5BF9\u8BC4\u4EF7\u8FDB\u884C\u5C55\u793A\uFF0C\u5BF9\u4E8B\u7269\u8FDB\u884C\u5FEB\u901F\u7684\u8BC4\u7EA7\u64CD\u4F5C\u3002</p><h2 id="\u5BFC\u5165\u6A21\u5757"><a class="lake-link"><i data-anchor="\u5BFC\u5165\u6A21\u5757"></i></a>\u5BFC\u5165\u6A21\u5757</h2><p>\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11">json-schema.module.ts</a> \u5BFC\u5165 <code>RateWidgetModule</code>\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[maximum]</code></td><td>\u603B\u661F\u6570</td><td><code>number</code></td><td><code>5</code></td></tr><tr><td><code>[multipleOf]</code></td><td><code>0.5</code> \u8868\u793A\u5141\u8BB8\u534A\u9009\uFF0C\u5176\u5B83\u503C\u8868\u793A\u4E0D\u5141\u8BB8</td><td><code>number</code></td><td><code>0.5</code></td></tr></tbody></table><h3 id="ui\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[allowClear]</code></td><td>\u662F\u5426\u5141\u8BB8\u518D\u6B21\u70B9\u51FB\u540E\u6E05\u9664</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[autoFocus]</code></td><td>\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[text]</code></td><td>\u63D0\u9192\u6587\u672C\u6A21\u677F\uFF0C<code>{{value}}</code> \u8868\u793A\u5F53\u524D\u503C\uFF08\u6CE8\u610F\u65E0\u4EFB\u4F55\u7A7A\u683C\uFF09</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[tooltips]</code></td><td>\u81EA\u5B9A\u4E49\u6BCF\u9879\u7684\u63D0\u793A\u4FE1\u606F</td><td><code>string[]</code></td><td><code>[]</code></td></tr></tbody></table>',meta:{title:"rate",subtitle:"\u8BC4\u5206",type:"Non-built-in widgets"},toc:[{id:"\u5BFC\u5165\u6A21\u5757",title:"\u5BFC\u5165\u6A21\u5757",h:2},{id:"API",title:"API",h:2,children:[{id:"schema\u5C5E\u6027",title:"schema \u5C5E\u6027",h:3},{id:"ui\u5C5E\u6027",title:"ui \u5C5E\u6027",h:3}]}]}},demo:!0},this.codes=[{id:"form-rate-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';
import { SFSchema } from '@delon/form';
import type { SFRateWidgetSchema } from '@delon/form/widgets/rate';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-rate-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)"></sf> \`,
})
export class FormRateSimpleComponent {
  schema: SFSchema = {
    properties: {
      rate: {
        type: 'number',
        title: '\u8BC4\u7EA7',
        default: 4.5,
        ui: {
          widget: 'rate',
        } as SFRateWidgetSchema,
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
          text: '{{value}} starts',
        } as SFRateWidgetSchema,
      },
    },
  };

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormRateSimpleComponent",point:0,name:"simple",urls:"packages/form/widgets/rate/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-rate"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-rate-simple"),i(7,`
        `),c(),i(8,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id))},dependencies:[w,C,k,F,Ne],encapsulation:2});let n=e;return n})();var De=(()=>{let e=class e{constructor(o){this.msg=o,this.schema={properties:{base:{type:"string",title:"Base",default:2,enum:["Daily","Weekly","Monthly","Quarterly","Yearly"],ui:{widget:tt.KEY,valueChange:console.log}},asyncData:{type:"string",title:"Async Data",ui:{widget:tt.KEY,asyncData:()=>P([{label:"Label1",value:"a"},{label:"Label2",value:"b"},{label:"Label3",value:"c",disabled:!0}]).pipe(A(1e3)),valueChange:console.log}}}}}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-segmented-simple"]],decls:1,vars:1,consts:[[3,"schema","formSubmit"]],template:function(t,d){t&1&&(r(0,"sf",0),h("formSubmit",function(u){return d.submit(u)}),c()),t&2&&a("schema",d.schema)},dependencies:[f],encapsulation:2});let n=e;return n})();var Pe=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/widgets/segmented/index.en-US.md","zh-CN":"packages/form/widgets/segmented/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><ul><li><p>When displaying multiple options and user can select a single option;</p></li><li><p>When switching the selected option, the content of the associated area changes.</p></li></ul><h2 id="Importmodule"><a class="lake-link"><i data-anchor="Importmodule"></i></a>Import module</h2><p>Non-built-in modules, Should be import <code>SegmentedWidgetModule</code> in <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11">json-schema.module.ts</a>.</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[block]</code></td><td>Option to fit width to its parent\\'s width</td><td><code>boolean</code></td><td>false</td><td></td></tr><tr><td><code>[asyncData]</code></td><td>Set children optional</td><td><code>() => Observable&lt;NzSegmentedOptions></code></td><td>-</td><td></td></tr><tr><td><code>(valueChange)</code></td><td>Emits when index of the currently selected option changes</td><td><code>(data: { index: number; item: SFValue }) => void</code></td><td>-</td><td></td></tr></tbody></table>`,meta:{title:"segmented",subtitle:"Segmented",type:"Non-built-in widgets"},toc:[{id:"Importmodule",title:"Import module",h:2},{id:"API",title:"API",h:2,children:[{id:"ui",title:"ui",h:3}]}]},"zh-CN":{content:'<section class="markdown"><ul><li><p>\u7528\u4E8E\u5C55\u793A\u591A\u4E2A\u9009\u9879\u5E76\u5141\u8BB8\u7528\u6237\u9009\u62E9\u5176\u4E2D\u5355\u4E2A\u9009\u9879\uFF1B</p></li><li><p>\u5F53\u5207\u6362\u9009\u4E2D\u9009\u9879\u65F6\uFF0C\u5173\u8054\u533A\u57DF\u7684\u5185\u5BB9\u4F1A\u53D1\u751F\u53D8\u5316\u3002</p></li></ul><h2 id="\u5BFC\u5165\u6A21\u5757"><a class="lake-link"><i data-anchor="\u5BFC\u5165\u6A21\u5757"></i></a>\u5BFC\u5165\u6A21\u5757</h2><p>\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11">json-schema.module.ts</a> \u5BFC\u5165 <code>SegmentedWidgetModule</code>\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="ui\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[block]</code></td><td>\u5C06\u5BBD\u5EA6\u8C03\u6574\u4E3A\u7236\u5143\u7D20\u5BBD\u5EA6\u7684\u9009\u9879</td><td><code>boolean</code></td><td>false</td><td></td></tr><tr><td><code>[asyncData]</code></td><td>\u5F02\u6B65\u6570\u636E</td><td><code>() => Observable&lt;NzSegmentedOptions></code></td><td>-</td><td></td></tr><tr><td><code>(valueChange)</code></td><td>\u5F53\u524D\u9009\u4E2D\u9879\u76EE\u53D8\u5316\u65F6\u89E6\u53D1\u56DE\u8C03</td><td><code>(data: { index: number; item: SFValue }) => void</code></td><td>-</td><td></td></tr></tbody></table>',meta:{title:"segmented",subtitle:"\u5206\u6BB5\u63A7\u5236\u5668",type:"Non-built-in widgets"},toc:[{id:"\u5BFC\u5165\u6A21\u5757",title:"\u5BFC\u5165\u6A21\u5757",h:2},{id:"API",title:"API",h:2,children:[{id:"ui\u5C5E\u6027",title:"ui \u5C5E\u6027",h:3}]}]}},demo:!0},this.codes=[{id:"form-segmented-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';
import { delay, of } from 'rxjs';

import { SFSchema } from '@delon/form';
import { SFSegmentedWidgetSchema, SegmentedWidget } from '@delon/form/widgets/segmented';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSegmentedOptions } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'form-segmented-simple',
  template: \`<sf [schema]="schema" (formSubmit)="submit($event)" />\`
})
export class FormSegmentedSimpleComponent {
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

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormSegmentedSimpleComponent",point:0,name:"simple",urls:"packages/form/widgets/segmented/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-segmented"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-segmented-simple"),i(7,`
        `),c(),i(8,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id))},dependencies:[w,C,k,F,De],encapsulation:2});let n=e;return n})();var Ae=(()=>{let e=class e{constructor(o){this.msg=o,this.schema={properties:{count:{type:"number",title:"\u6570\u91CF",ui:{widget:"slider"},default:10},range:{type:"number",title:"\u8303\u56F4",ui:{widget:"slider",range:!0},default:[10,20]}}}}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-slider-simple"]],decls:3,vars:1,consts:[[3,"schema","formSubmit"]],template:function(t,d){t&1&&(i(0," "),r(1,"sf",0),h("formSubmit",function(u){return d.submit(u)}),c(),i(2," ")),t&2&&(s(1),a("schema",d.schema))},dependencies:[f],encapsulation:2});let n=e;return n})();var Me=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/widgets/slider/index.en-US.md","zh-CN":"packages/form/widgets/slider/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>A Slider component for displaying current value and intervals in range.</p><h2 id="Importmodule"><a class="lake-link"><i data-anchor="Importmodule"></i></a>Import module</h2><p>Non-built-in modules, Should be import <code>SliderWidgetModule</code> in <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11">json-schema.module.ts</a>.</p><h2 id="Notice"><a class="lake-link"><i data-anchor="Notice"></i></a>Notice</h2><ul><li><p>Ingored <code>exclusiveMinimum</code>, <code>exclusiveMaximum</code></p></li></ul></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[minimum]</code></td><td>The minimum value the slider can slide to</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[maximum]</code></td><td>The maximum value the slider can slide to</td><td><code>number</code></td><td><code>100</code></td></tr><tr><td><code>[multipleOf]</code></td><td>The granularity the slider can step through values. Must greater than 0, and be divided by (max - min). When <code>ui.marks</code> no null, <code>step</code> can be null.</td><td><code>number</code></td><td><code>1</code></td></tr></tbody></table><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[range]</code></td><td>dual thumb mode</td><td><code>Boolean</code></td><td>-</td></tr><tr><td><code>[marks]</code></td><td>Tick mark of Slider, type of key must be <code>number</code>, and must in closed interval <code>[min, max]</code> \uFF0Ceach mark can declare its own style.</td><td><code>NzMarks</code></td><td>-</td></tr><tr><td><code>[dots]</code></td><td>Whether the thumb can drag over tick only</td><td><code>Boolean</code></td><td><code>false</code></td></tr><tr><td><code>[included]</code></td><td>Make effect when <code>marks</code> not null\uFF0C<code>true</code> means containment and <code>false</code> means coordinative</td><td><code>Boolean</code></td><td><code>true</code></td></tr><tr><td><code>[vertical]</code></td><td>If true, the slider will be vertical</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[afterChange]</code></td><td>Fire when <code>onmouseup</code> is fired.</td><td><code>(value: NzSliderValue) => void</code></td><td>-</td></tr><tr><td><code>[formatter]</code></td><td>Slider will pass its value to <code>nzTipFormatter</code>, and display its value in Tooltip, and hide Tooltip when return value is null</td><td><code>(value: number) => string</code></td><td>-</td></tr></tbody></table>',meta:{title:"slider",subtitle:"Slider",type:"Non-built-in widgets"},toc:[{id:"Importmodule",title:"Import module",h:2},{id:"Notice",title:"Notice",h:2},{id:"API",title:"API",h:2,children:[{id:"schema",title:"schema",h:3},{id:"ui",title:"ui",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u6ED1\u52A8\u578B\u8F93\u5165\u5668\uFF0C\u5C55\u793A\u5F53\u524D\u503C\u548C\u53EF\u9009\u8303\u56F4\u3002</p><h2 id="\u5BFC\u5165\u6A21\u5757"><a class="lake-link"><i data-anchor="\u5BFC\u5165\u6A21\u5757"></i></a>\u5BFC\u5165\u6A21\u5757</h2><p>\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11">json-schema.module.ts</a> \u5BFC\u5165 <code>SliderWidgetModule</code>\u3002</p><h2 id="\u6CE8\u610F\u4E8B\u9879"><a class="lake-link"><i data-anchor="\u6CE8\u610F\u4E8B\u9879"></i></a>\u6CE8\u610F\u4E8B\u9879</h2><ul><li><p>\u5F3A\u5236\u5FFD\u7565 <code>exclusiveMinimum</code>\u3001<code>exclusiveMaximum</code></p></li></ul></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[minimum]</code></td><td>\u6700\u5C0F\u503C</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[maximum]</code></td><td>\u6700\u5927\u503C</td><td><code>number</code></td><td><code>100</code></td></tr><tr><td><code>[multipleOf]</code></td><td>\u500D\u6570</td><td><code>number</code></td><td><code>1</code></td></tr></tbody></table><h3 id="ui\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[range]</code></td><td>\u5F53\u6DFB\u52A0\u8BE5\u5C5E\u6027\u65F6\uFF0C\u542F\u52A8\u53CC\u6ED1\u5757\u6A21\u5F0F</td><td><code>Boolean</code></td><td>-</td></tr><tr><td><code>[marks]</code></td><td>\u523B\u5EA6\u6807\u8BB0</td><td><code>NzMarks</code></td><td>-</td></tr><tr><td><code>[dots]</code></td><td>\u662F\u5426\u53EA\u80FD\u62D6\u62FD\u5230\u523B\u5EA6\u4E0A</td><td><code>Boolean</code></td><td><code>false</code></td></tr><tr><td><code>[included]</code></td><td>\u662F\u5426\u5305\u542B\u3002<code>marks</code> \u4E0D\u4E3A\u7A7A\u5BF9\u8C61\u65F6\u6709\u6548\uFF0C\u503C\u4E3A <code>true</code> \u65F6\u8868\u793A\u503C\u4E3A\u5305\u542B\u5173\u7CFB\uFF0C<code>false</code> \u8868\u793A\u5E76\u5217</td><td><code>Boolean</code></td><td><code>true</code></td></tr><tr><td><code>[vertical]</code></td><td>\u7AD6\u76F4\u663E\u793A\u3002\u6DFB\u52A0\u8BE5\u5C5E\u6027\u65F6\uFF0CSlider \u4E3A\u5782\u76F4\u65B9\u5411\u3002</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[afterChange]</code></td><td>\u4E0E <code>onmouseup</code> \u89E6\u53D1\u65F6\u673A\u4E00\u81F4\uFF0C\u628A\u5F53\u524D\u503C\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165\u3002</td><td><code>(value: NzSliderValue) => void</code></td><td>-</td></tr><tr><td><code>[formatter]</code></td><td>Slider \u4F1A\u628A\u5F53\u524D\u503C\u4F20\u7ED9 <code>nzTipFormatter</code>\uFF0C\u5E76\u5728 Tooltip \u4E2D\u663E\u793A <code>nzTipFormatter</code> \u7684\u8FD4\u56DE\u503C\uFF0C\u82E5\u4E3A null\uFF0C\u5219\u9690\u85CF Tooltip</td><td><code>(value: number) => string</code></td><td>-</td></tr></tbody></table>',meta:{title:"slider",subtitle:"\u6ED1\u52A8\u8F93\u5165\u6761",type:"Non-built-in widgets"},toc:[{id:"\u5BFC\u5165\u6A21\u5757",title:"\u5BFC\u5165\u6A21\u5757",h:2},{id:"\u6CE8\u610F\u4E8B\u9879",title:"\u6CE8\u610F\u4E8B\u9879",h:2},{id:"API",title:"API",h:2,children:[{id:"schema\u5C5E\u6027",title:"schema \u5C5E\u6027",h:3},{id:"ui\u5C5E\u6027",title:"ui \u5C5E\u6027",h:3}]}]}},demo:!0},this.codes=[{id:"form-slider-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';
import { SFSchema } from '@delon/form';
import type { SFSliderWidgetSchema } from '@delon/form/widgets/slider';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-slider-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)"></sf> \`,
})
export class FormSliderSimpleComponent {
  schema: SFSchema = {
    properties: {
      count: {
        type: 'number',
        title: '\u6570\u91CF',
        ui: {
          widget: 'slider',
        } as SFSliderWidgetSchema,
        default: 10,
      },
      // \u53CC\u6ED1\u5757\u6A21\u5F0F
      range: {
        type: 'number',
        title: '\u8303\u56F4',
        ui: {
          widget: 'slider',
          range: true,
        } as SFSliderWidgetSchema,
        default: [10, 20],
      },
    },
  };

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormSliderSimpleComponent",point:0,name:"simple",urls:"packages/form/widgets/slider/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-slider"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-slider-simple"),i(7,`
        `),c(),i(8,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id))},dependencies:[w,C,k,F,Ae],encapsulation:2});let n=e;return n})();var Ee=(()=>{let e=class e{constructor(o){this.msg=o,this.schema={properties:{like:{type:"number",title:"\u5174\u8DA3",enum:[{value:1,label:"\u7535\u5F71"},{value:2,label:"\u4E66"},{value:3,label:"\u65C5\u884C"}],ui:{widget:"tag"},default:[1,2]},like1:{type:"number",title:"\u5174\u8DA3",ui:{widget:"tag",asyncData:()=>P([{value:1,label:"\u7535\u5F71"},{value:2,label:"\u4E66"},{value:3,label:"\u65C5\u884C"}]).pipe(A(10))},default:[1,2]},icon:{type:"number",title:"\u5174\u8DA3",enum:[{value:1,label:"Twitter",prefixIcon:{type:"twitter"}},{value:2,label:"Facebook",suffixIcon:{type:"facebook"}}],ui:{widget:"tag"}}}}}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-tag-simple"]],decls:3,vars:1,consts:[[3,"schema","formSubmit"]],template:function(t,d){t&1&&(i(0," "),r(1,"sf",0),h("formSubmit",function(u){return d.submit(u)}),c(),i(2," ")),t&2&&(s(1),a("schema",d.schema))},dependencies:[f],encapsulation:2});let n=e;return n})();var je=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/widgets/tag/index.en-US.md","zh-CN":"packages/form/widgets/tag/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Tag for categorizing or markup, <strong>Notice:</strong> Just only supported <code>checkable</code> tag mode.</p><h2 id="Importmodule"><a class="lake-link"><i data-anchor="Importmodule"></i></a>Import module</h2><p>Non-built-in modules, Should be import <code>TagWidgetModule</code> in <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11">json-schema.module.ts</a>.</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[enum]</code></td><td>Data source</td><td><code>SFSchemaEnumType[]</code></td><td>-</td></tr></tbody></table><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[asyncData]</code></td><td>Async data source</td><td><code>() => Observable&lt;SFSchemaEnumType[]></code></td><td>-</td></tr><tr><td><code>[mode]</code></td><td>Mode of tag</td><td><code>'closeable'\uFF5C'default'\uFF5C'checkable'</code></td><td><code>'checkable'</code></td></tr><tr><td><code>[onClose]</code></td><td>Callback executed when tag is closed</td><td><code>(e:MouseEvent) => void</code></td><td>-</td></tr><tr><td><code>[checkedChange]</code></td><td>Checked status change call back</td><td><code>(status: boolean) => void</code></td><td>-</td></tr></tbody></table>`,meta:{title:"tag",subtitle:"Tag",type:"Non-built-in widgets"},toc:[{id:"Importmodule",title:"Import module",h:2},{id:"API",title:"API",h:2,children:[{id:"schema",title:"schema",h:3},{id:"ui",title:"ui",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u8FDB\u884C\u6807\u8BB0\u548C\u5206\u7C7B\u7684\u5C0F\u6807\u7B7E\uFF0C<strong>\u6CE8\uFF1A</strong> \u53EA\u652F\u6301 <code>checkable</code> \u6807\u7B7E\u6A21\u5F0F\u3002</p><h2 id="\u5BFC\u5165\u6A21\u5757"><a class="lake-link"><i data-anchor="\u5BFC\u5165\u6A21\u5757"></i></a>\u5BFC\u5165\u6A21\u5757</h2><p>\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11">json-schema.module.ts</a> \u5BFC\u5165 <code>TagWidgetModule</code>\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[enum]</code></td><td>\u6570\u636E\u6E90</td><td><code>SFSchemaEnumType[]</code></td><td>-</td></tr></tbody></table><h3 id="ui\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[asyncData]</code></td><td>\u5F02\u6B65\u6570\u636E\u6E90</td><td><code>() => Observable&lt;SFSchemaEnumType[]></code></td><td>-</td></tr><tr><td><code>[mode]</code></td><td>\u8BBE\u5B9A\u6807\u7B7E\u5DE5\u4F5C\u7684\u6A21\u5F0F</td><td><code>'closeable'\uFF5C'default'\uFF5C'checkable'</code></td><td><code>'checkable'</code></td></tr><tr><td><code>[onClose]</code></td><td>\u5173\u95ED\u65F6\u7684\u56DE\u8C03\uFF0C\u5728 <code>nzMode="closable"</code> \u65F6\u53EF\u7528</td><td><code>(e:MouseEvent) => void</code></td><td>-</td></tr><tr><td><code>[checkedChange]</code></td><td>\u8BBE\u7F6E\u6807\u7B7E\u7684\u9009\u4E2D\u72B6\u6001\u7684\u56DE\u8C03</td><td><code>(status: boolean) => void</code></td><td>-</td></tr></tbody></table>`,meta:{title:"tag",subtitle:"\u6807\u7B7E",type:"Non-built-in widgets"},toc:[{id:"\u5BFC\u5165\u6A21\u5757",title:"\u5BFC\u5165\u6A21\u5757",h:2},{id:"API",title:"API",h:2,children:[{id:"schema\u5C5E\u6027",title:"schema \u5C5E\u6027",h:3},{id:"ui\u5C5E\u6027",title:"ui \u5C5E\u6027",h:3}]}]}},demo:!0},this.codes=[{id:"form-tag-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';
import { SFIcon, SFSchema } from '@delon/form';
import type { SFTagWidgetSchema } from '@delon/form/widgets/tag';
import { NzMessageService } from 'ng-zorro-antd/message';
import { of, delay } from 'rxjs';

@Component({
  selector: 'form-tag-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)"></sf> \`,
})
export class FormTagSimpleComponent {
  schema: SFSchema = {
    properties: {
      like: {
        type: 'number',
        title: '\u5174\u8DA3',
        enum: [
          { value: 1, label: '\u7535\u5F71' },
          { value: 2, label: '\u4E66' },
          { value: 3, label: '\u65C5\u884C' },
        ],
        ui: {
          widget: 'tag',
        } as SFTagWidgetSchema,
        default: [1, 2],
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
              { value: 3, label: '\u65C5\u884C' },
            ]).pipe(delay(10)),
        } as SFTagWidgetSchema,
        default: [1, 2],
      },
      icon: {
        type: 'number',
        title: '\u5174\u8DA3',
        enum: [
          { value: 1, label: 'Twitter', prefixIcon: { type: 'twitter' } as SFIcon },
          { value: 2, label: 'Facebook', suffixIcon: { type: 'facebook' } as SFIcon },
        ],
        ui: {
          widget: 'tag',
        } as SFTagWidgetSchema,
      },
    },
  };

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormTagSimpleComponent",point:0,name:"simple",urls:"packages/form/widgets/tag/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-tag"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-tag-simple"),i(7,`
        `),c(),i(8,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id))},dependencies:[w,C,k,F,Ee],encapsulation:2});let n=e;return n})();var _e=(()=>{let e=class e{constructor(o){this.msg=o,this.schema={properties:{time:{type:"string",ui:{widget:"time"}},time_number:{type:"number",ui:{widget:"time"}},time_format:{type:"string",format:"time",ui:{format:"HH:mm:ss+00:00"}},"12hours":{type:"string",ui:{widget:"time",format:"h:mm:ss a",use12Hours:!0}}}}}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-time-simple"]],decls:2,vars:1,consts:[[3,"schema","formSubmit"]],template:function(t,d){t&1&&(i(0," "),r(1,"sf",0),h("formSubmit",function(u){return d.submit(u)}),c()),t&2&&(s(1),a("schema",d.schema))},dependencies:[f],encapsulation:2});let n=e;return n})();var Ue=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/widgets/time/index.en-US.md","zh-CN":"packages/form/widgets/time/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>To select/input a time.</p><h2 id="Importmodule"><a class="lake-link"><i data-anchor="Importmodule"></i></a>Import module</h2><p>Non-built-in modules, Should be import <code>TimeWidgetModule</code> in <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11">json-schema.module.ts</a>.</p><h2 id="Notice"><a class="lake-link"><i data-anchor="Notice"></i></a>Notice</h2><ul><li><p>Format is divided into two types: <strong>Data format</strong> means form data, <strong>Display format</strong> means display data (<a target="_blank" href="https://ng.ant.design/components/time-picker/en#api" data-url="https://ng.ant.design/components/time-picker/en#api">nzFormat</a>)</p></li><li><p>All <strong>Data format</strong> units, reference <a target="_blank" href="https://date-fns.org/v1.29.0/docs/format" data-url="https://date-fns.org/v1.29.0/docs/format">date-fns format</a> (China mirror: <a target="_blank" href="http://Momentjs.cn/docs/#/displaying/format/" data-url="http://Momentjs.cn/docs/#/displaying/format/">moment format</a>)</p></li><li><p>Specify <code>schema.format</code> must follow <a target="_blank" href="https://tools.ietf.org/html/rfc3339#section-5.6" data-url="https://tools.ietf.org/html/rfc3339#section-5.6">RFC3339</a> time format, otherwise considered as a format error, default rules:</p><ul><li><p><code>time</code>\u3001<code>full-time</code> default is <code>HH:mm:ss</code></p></li></ul></li><li><p>When <code>schema.format</code> is not specified, the data formatting (Allows you to reassign default values via <a href="/docs/global-config" data-url="/docs/global-config">Global Configuration</a>) is determined by the <code>schema.type</code> type:</p><ul><li><p><code>string</code> default is <code>HH:mm:ss</code></p></li><li><p><code>number</code> default is <code>T</code> 13-bit Unix Timestamp</p></li></ul></li><li><p>Since <code>disabledHours</code>, <code>disabledMinutes</code>, <code>disabledSeconds</code> will cause the time format to be corrupted, it may cause the display format error. The solution is specify a complete <code>Date</code> object in the default value (<code>schema.default</code> or <code>formData</code>)</p></li></ul></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[readOnly]</code></td><td>Whether to disable the state</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[format]</code></td><td>Data format type</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[size]</code></td><td>Size of the <code>nz-date-picker</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[placeholder]</code></td><td>Placeholder of date input</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[displayFormat]</code></td><td>Display format(<a target="_blank" href="https://ng.ant.design/components/date-picker/en#api" data-url="https://ng.ant.design/components/date-picker/en#api">nzFormat</a>)</td><td><code>string</code></td><td><code>yyyy-MM-dd HH:mm:ss</code></td></tr><tr><td><code>[utcEpoch]</code></td><td>Whether UTC (represents the number of milliseconds from <code>1970</code>)</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[allowEmpty]</code></td><td>allow clearing text</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[clearText]</code></td><td>clear tooltip of icon</td><td><code>string</code></td><td><code>\u6E05\u9664</code></td></tr><tr><td><code>[defaultOpenValue]</code></td><td>default open panel value</td><td><code>Date</code></td><td><code>new Date()</code></td></tr><tr><td><code>[disabledHours]</code></td><td>to specify the hours that cannot be selected</td><td><code>() => number[]</code></td><td>-</td></tr><tr><td><code>[disabledMinutes]</code></td><td>to specify the minutes that cannot be selected</td><td><code>(hour: number) => number[]</code></td><td>-</td></tr><tr><td><code>[disabledSeconds]</code></td><td>to specify the seconds that cannot be selected</td><td><code>(hour: number, minute: number) => number[]</code></td><td>-</td></tr><tr><td><code>[hideDisabledOptions]</code></td><td>hide the options that can not be selected</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[hourStep]</code></td><td>interval between hours in picker</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td><code>[minuteStep]</code></td><td>interval between minutes in picker</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td><code>[secondStep]</code></td><td>interval between seconds in picker</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td><code>[popupClassName]</code></td><td>className of panel</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[change]</code></td><td>a callback function, can be executed when the selected time is changing</td><td><code>(value: Date) => void</code></td><td>-</td></tr><tr><td><code>[openChange]</code></td><td>a callback function which will be called while panel opening/closing</td><td><code>(status: boolean) => void</code></td><td>-</td></tr><tr><td><code>[nowText]</code></td><td>text of the Now button</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[okText]</code></td><td>text of the Ok button</td><td><code>string</code></td><td>-</td></tr></tbody></table>',meta:{title:"time",subtitle:"Time",type:"Non-built-in widgets"},toc:[{id:"Importmodule",title:"Import module",h:2},{id:"Notice",title:"Notice",h:2},{id:"API",title:"API",h:2,children:[{id:"schema",title:"schema",h:3},{id:"ui",title:"ui",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u8F93\u5165\u6216\u9009\u62E9\u65F6\u95F4\u7684\u63A7\u4EF6\u3002</p><h2 id="\u5BFC\u5165\u6A21\u5757"><a class="lake-link"><i data-anchor="\u5BFC\u5165\u6A21\u5757"></i></a>\u5BFC\u5165\u6A21\u5757</h2><p>\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11">json-schema.module.ts</a> \u5BFC\u5165 <code>TimeWidgetModule</code>\u3002</p><h2 id="\u6CE8\u610F\u4E8B\u9879"><a class="lake-link"><i data-anchor="\u6CE8\u610F\u4E8B\u9879"></i></a>\u6CE8\u610F\u4E8B\u9879</h2><ul><li><p>\u683C\u5F0F\u5316\u5206\u4E3A\uFF1A<strong>\u6570\u636E\u683C\u5F0F\u5316</strong>\u8868\u793A\u8868\u5355\u6570\u636E\u548C<strong>\u663E\u793A\u683C\u5F0F\u5316</strong>\u663E\u793A\u6570\u636E\uFF08\u7B49\u540C <a target="_blank" href="https://ng.ant.design/components/time-picker/zh#api" data-url="https://ng.ant.design/components/time-picker/zh#api">nzFormat</a> \u503C\uFF09</p></li><li><p>\u6240\u6709 <strong>\u6570\u636E\u683C\u5F0F\u5316</strong> \u5355\u4F4D\uFF0C\u53C2\u8003 <a target="_blank" href="https://date-fns.org/v1.29.0/docs/format" data-url="https://date-fns.org/v1.29.0/docs/format">date-fns format</a>\uFF08\u56FD\u5185\u955C\u50CF\uFF1A<a target="_blank" href="http://momentjs.cn/docs/#/displaying/format/" data-url="http://momentjs.cn/docs/#/displaying/format/">moment format</a>\uFF09</p></li><li><p>\u6307\u5B9A <code>schema.format</code> \u5219\u5FC5\u987B\u9075\u5B88 <a target="_blank" href="https://tools.ietf.org/html/rfc3339#section-5.6" data-url="https://tools.ietf.org/html/rfc3339#section-5.6">RFC3339</a> \u65F6\u95F4\u683C\u5F0F\uFF0C\u5426\u5219\u90FD\u89C6\u4E3A\u683C\u5F0F\u9519\u8BEF\uFF0C\u9ED8\u8BA4\u7684\u6570\u636E\u683C\u5F0F\u5316\uFF1A</p><ul><li><p><code>time</code>\u3001<code>full-time</code> \u9ED8\u8BA4 <code>HH:mm:ss</code></p></li></ul></li><li><p>\u4E0D\u6307\u5B9A <code>schema.format</code> \u6839\u636E <code>schema.type</code> \u503C\u6309\u4EE5\u4E0B\u89C4\u5219\u5904\u7406\uFF08\u5141\u8BB8\u901A\u8FC7<a href="/docs/global-config" data-url="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\u66FF\u6362\uFF09\u6570\u636E\u683C\u5F0F\u5316\uFF1A</p><ul><li><p><code>string</code> \u9ED8\u8BA4 <code>HH:mm:ss</code></p></li><li><p><code>number</code> \u9ED8\u8BA4 <code>T</code> 13\u4F4D Unix Timestamp</p></li></ul></li><li><p>\u7531\u4E8E <code>disabledHours</code>\u3001<code>disabledMinutes</code>\u3001<code>disabledSeconds</code> \u7EC4\u5408\u5BFC\u81F4\u65F6\u95F4\u683C\u5F0F\u88AB\u7834\u574F\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u65E0\u6CD5\u6B63\u5E38\u663E\u793A\u6216\u663E\u793A\u4E0D\u6B63\u786E\u65F6\u53EF\u4EE5\u6307\u5B9A\u4E00\u4E2A\u5B8C\u6574\u7684 <code>Date</code> \u5BF9\u8C61\u7ED9\u9ED8\u8BA4\u503C\uFF08<code>schema.default</code> \u6216 <code>formData</code>\uFF09</p></li></ul></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[readOnly]</code></td><td>\u7981\u7528\u72B6\u6001</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[format]</code></td><td>\u6570\u636E\u683C\u5F0F\u7C7B\u578B</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="ui\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[size]</code></td><td>\u5927\u5C0F\uFF0C\u7B49\u540C <code>nzSize</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[placeholder]</code></td><td>\u5728\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u8BAF\u606F</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[format]</code></td><td>\u6570\u636E\u683C\u5F0F\u5316</td><td><code>string</code></td><td><code>HH:mm:ss</code></td></tr><tr><td><code>[displayFormat]</code></td><td>\u663E\u793A\u683C\u5F0F\u5316\uFF0C\uFF08\u7B49\u540C <a target="_blank" href="https://ng.ant.design/components/time-picker/zh#api" data-url="https://ng.ant.design/components/time-picker/zh#api">nzFormat</a> \u503C\uFF09</td><td><code>string</code></td><td><code>HH:mm:ss</code></td></tr><tr><td><code>[utcEpoch]</code></td><td>\u662F\u5426UTC\u65B0\u7EAA\u5143\uFF08\u8868\u793A\u4ECE <code>1970</code> \u5F00\u59CB\u8BA1\u6BEB\u79D2\u6570\uFF09\uFF0C\u5F53 <code>type='number'</code> \u65F6\u6709\u6548</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[allowEmpty]</code></td><td>\u662F\u5426\u5C55\u793A\u6E05\u9664\u6309\u94AE</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[clearText]</code></td><td>\u6E05\u9664\u6309\u94AE\u7684\u63D0\u793A\u6587\u6848</td><td><code>string</code></td><td><code>\u6E05\u9664</code></td></tr><tr><td><code>[defaultOpenValue]</code></td><td>\u8BBE\u7F6E\u9762\u677F\u6253\u5F00\u65F6\u9ED8\u8BA4\u9009\u4E2D\u7684\u503C</td><td><code>Date</code></td><td><code>new Date()</code></td></tr><tr><td><code>[disabledHours]</code></td><td>\u7981\u6B62\u9009\u62E9\u90E8\u5206\u5C0F\u65F6\u9009\u9879</td><td><code>() => number[]</code></td><td>-</td></tr><tr><td><code>[disabledMinutes]</code></td><td>\u7981\u6B62\u9009\u62E9\u90E8\u5206\u5206\u949F\u9009\u9879</td><td><code>(hour: number) => number[]</code></td><td>-</td></tr><tr><td><code>[disabledSeconds]</code></td><td>\u7981\u6B62\u9009\u62E9\u90E8\u5206\u79D2\u9009\u9879</td><td><code>(hour: number, minute: number) => number[]</code></td><td>-</td></tr><tr><td><code>[hideDisabledOptions]</code></td><td>\u9690\u85CF\u7981\u6B62\u9009\u62E9\u7684\u9009\u9879</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[hourStep]</code></td><td>\u5C0F\u65F6\u9009\u9879\u95F4\u9694</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td><code>[minuteStep]</code></td><td>\u5206\u949F\u9009\u9879\u95F4\u9694</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td><code>[secondStep]</code></td><td>\u79D2\u9009\u9879\u95F4\u9694</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td><code>[popupClassName]</code></td><td>\u5F39\u51FA\u5C42\u7C7B\u540D</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[change]</code></td><td>\u65F6\u95F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03</td><td><code>(value: Date) => void</code></td><td>-</td></tr><tr><td><code>[openChange]</code></td><td>\u9762\u677F\u6253\u5F00/\u5173\u95ED\u65F6\u7684\u56DE\u8C03</td><td><code>(status: boolean) => void</code></td><td>-</td></tr><tr><td><code>[nowText]</code></td><td>\u6B64\u523B\u6309\u94AE\u6587\u672C</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[okText]</code></td><td>\u786E\u8BA4\u6309\u94AE\u6587\u672C</td><td><code>string</code></td><td>-</td></tr></tbody></table>`,meta:{title:"time",subtitle:"\u65F6\u95F4",type:"Non-built-in widgets"},toc:[{id:"\u5BFC\u5165\u6A21\u5757",title:"\u5BFC\u5165\u6A21\u5757",h:2},{id:"\u6CE8\u610F\u4E8B\u9879",title:"\u6CE8\u610F\u4E8B\u9879",h:2},{id:"API",title:"API",h:2,children:[{id:"schema\u5C5E\u6027",title:"schema \u5C5E\u6027",h:3},{id:"ui\u5C5E\u6027",title:"ui \u5C5E\u6027",h:3}]}]}},demo:!0},this.codes=[{id:"form-time-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';
import { SFSchema } from '@delon/form';
import type { SFTimeWidgetSchema } from '@delon/form/widgets/time';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-time-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)"/>\`,
})
export class FormTimeSimpleComponent {
  schema: SFSchema = {
    properties: {
      time: {
        type: 'string',
        ui: { widget: 'time' } as SFTimeWidgetSchema,
      },
      time_number: {
        type: 'number',
        ui: { widget: 'time' } as SFTimeWidgetSchema,
      },
      time_format: {
        type: 'string',
        format: 'time',
        ui: {
          format: \`HH:mm:ss+00:00\`,
        } as SFTimeWidgetSchema,
      },
      '12hours': {
        type: 'string',
        ui: {
          widget: 'time',
          format: 'h:mm:ss a',
          use12Hours: true,
        } as SFTimeWidgetSchema,
      },
    },
  };

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormTimeSimpleComponent",point:0,name:"simple",urls:"packages/form/widgets/time/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-time"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-time-simple"),i(7,`
        `),c(),i(8,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id))},dependencies:[w,C,k,F,_e],encapsulation:2});let n=e;return n})();var Oe=(()=>{let e=class e{constructor(o){this.msg=o,this.schema={properties:{roles:{type:"number",title:"\u89D2\u8272",enum:[{title:"DNS\u7BA1\u7406",value:10},{title:"ECS\u7BA1\u7406",value:11},{title:"OSS\u7BA1\u7406",value:12},{title:"RDS\u7BA1\u7406",value:13}],ui:{widget:"transfer",titles:["\u672A\u62E5\u6709","\u5DF2\u62E5\u6709"]},default:[11,12]},roles2:{type:"number",title:"\u89D2\u8272",ui:{widget:"transfer",titles:["\u672A\u62E5\u6709","\u5DF2\u62E5\u6709"],asyncData:()=>P([{title:"DNS\u7BA1\u7406",value:10},{title:"ECS\u7BA1\u7406",value:11},{title:"OSS\u7BA1\u7406",value:12},{title:"RDS\u7BA1\u7406",value:13}]).pipe(A(10))},default:[11,12]}}}}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-transfer-simple"]],decls:3,vars:1,consts:[[3,"schema","formSubmit"]],template:function(t,d){t&1&&(i(0," "),r(1,"sf",0),h("formSubmit",function(u){return d.submit(u)}),c(),i(2," ")),t&2&&(s(1),a("schema",d.schema))},dependencies:[f],encapsulation:2});let n=e;return n})();var We=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/widgets/transfer/index.en-US.md","zh-CN":"packages/form/widgets/transfer/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>Double column transfer choice box.</p><h2 id="Importmodule"><a class="lake-link"><i data-anchor="Importmodule"></i></a>Import module</h2><p>Non-built-in modules, Should be import <code>TransferWidgetModule</code> in <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11">json-schema.module.ts</a>.</p><h2 id="Note"><a class="lake-link"><i data-anchor="Note"></i></a>Note</h2><ul><li><p><code>default</code> value <code>direction: 'right'</code> indicates right column.</p></li></ul></section>`,api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[enum]</code></td><td>Data source</td><td><code>SFSchemaEnumType[]</code></td><td>-</td></tr></tbody></table><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[asyncData]</code></td><td>Asynchronous data</td><td><code>() => Observable&lt;SFSchemaEnumType[]></code></td><td>-</td></tr><tr><td><code>[titles]</code></td><td>Title list, the order is from left to right</td><td><code>string[]</code></td><td><code>['', '']</code></td></tr><tr><td><code>[operations]</code></td><td>Operation list, the order is from top to buttom</td><td><code>string[]</code></td><td><code>['', '']</code></td></tr><tr><td><code>[listStyle]</code></td><td>A custom CSS style used for rendering the transfer columns. equals to <code>ngStyle</code></td><td><code>object</code></td><td>-</td></tr><tr><td><code>[itemUnit]</code></td><td>single unit</td><td><code>string</code></td><td><code>item</code></td></tr><tr><td><code>[itemsUnit]</code></td><td>multiple unit</td><td><code>string</code></td><td><code>items</code></td></tr><tr><td><code>[showSearch]</code></td><td>If included, a search box is shown on each column</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[filterOption]</code></td><td>Accept <code>inputValueoption</code> two parameters, return <code>true</code> when <code>option</code> matches, otherwise, return <code>false</code></td><td>-</td><td>-</td></tr><tr><td><code>[searchPlaceholder]</code></td><td>Placeholder of search box</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[notFoundContent]</code></td><td>Text to display when a column is empty</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[canMove]</code></td><td>Second verification when transfer choice box</td><td><code>function</code></td><td>-</td></tr><tr><td><code>[change]</code></td><td>Callback function when the transfer between columns is complete</td><td><code>(options: TransferChange) => void</code></td><td>-</td></tr><tr><td><code>[searchChange]</code></td><td>Callback function when search field is changed</td><td><code>(options: TransferSearchChange) => void</code></td><td>-</td></tr><tr><td><code>[selectChange]</code></td><td>Callback function when selected items are changed</td><td><code>(options: TransferSelectChange) => void</code></td><td>-</td></tr></tbody></table>`,meta:{title:"transfer",subtitle:"Transfer",type:"Non-built-in widgets"},toc:[{id:"Importmodule",title:"Import module",h:2},{id:"Note",title:"Note",h:2},{id:"API",title:"API",h:2,children:[{id:"schema",title:"schema",h:3},{id:"ui",title:"ui",h:3}]}]},"zh-CN":{content:`<section class="markdown"><p>\u53CC\u680F\u7A7F\u68AD\u9009\u62E9\u6846\u3002</p><h2 id="\u5BFC\u5165\u6A21\u5757"><a class="lake-link"><i data-anchor="\u5BFC\u5165\u6A21\u5757"></i></a>\u5BFC\u5165\u6A21\u5757</h2><p>\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11">json-schema.module.ts</a> \u5BFC\u5165 <code>TransferWidgetModule</code>\u3002</p><h2 id="\u6CE8\u610F\u4E8B\u9879"><a class="lake-link"><i data-anchor="\u6CE8\u610F\u4E8B\u9879"></i></a>\u6CE8\u610F\u4E8B\u9879</h2><ul><li><p><code>default</code> \u503C\u88AB\u5F53\u6210 <code>direction: 'right'</code> \u8868\u793A\u53F3\u680F\u4E2D</p></li></ul></section>`,api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[enum]</code></td><td>\u6570\u636E\u6E90</td><td><code>SFSchemaEnumType[]</code></td><td>-</td></tr></tbody></table><h3 id="ui\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[asyncData]</code></td><td>\u5F02\u6B65\u6570\u636E\u6E90</td><td><code>() => Observable&lt;SFSchemaEnumType[]></code></td><td>-</td></tr><tr><td><code>[titles]</code></td><td>\u6807\u9898\u96C6\u5408\uFF0C\u987A\u5E8F\u4ECE\u5DE6\u81F3\u53F3</td><td><code>string[]</code></td><td><code>['', '']</code></td></tr><tr><td><code>[operations]</code></td><td>\u64CD\u4F5C\u6587\u6848\u96C6\u5408\uFF0C\u987A\u5E8F\u4ECE\u4E0B\u81F3\u4E0A</td><td><code>string[]</code></td><td><code>['', '']</code></td></tr><tr><td><code>[listStyle]</code></td><td>\u4E24\u4E2A\u7A7F\u68AD\u6846\u7684\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4EE5<code>ngStyle</code>\u5199\u6CD5\u6807\u9898</td><td><code>object</code></td><td>-</td></tr><tr><td><code>[itemUnit]</code></td><td>\u5355\u6570\u5355\u4F4D</td><td><code>string</code></td><td><code>\u9879\u76EE</code></td></tr><tr><td><code>[itemsUnit]</code></td><td>\u590D\u6570\u5355\u4F4D</td><td><code>string</code></td><td><code>\u9879\u76EE</code></td></tr><tr><td><code>[showSearch]</code></td><td>\u662F\u5426\u663E\u793A\u641C\u7D22\u6846</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[filterOption]</code></td><td>\u63A5\u6536 <code>inputValueoption</code> \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 <code>option</code> \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE <code>true</code>\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE <code>false</code>\u3002</td><td>-</td><td>-</td></tr><tr><td><code>[searchPlaceholder]</code></td><td>\u641C\u7D22\u6846\u7684\u9ED8\u8BA4\u503C</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[notFoundContent]</code></td><td>\u5F53\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[canMove]</code></td><td>\u7A7F\u68AD\u65F6\u4E8C\u6B21\u6821\u9A8C\u3002</td><td><code>function</code></td><td>-</td></tr><tr><td><code>[change]</code></td><td>\u9009\u9879\u5728\u4E24\u680F\u4E4B\u95F4\u8F6C\u79FB\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td><td><code>(options: TransferChange) => void</code></td><td>-</td></tr><tr><td><code>[searchChange]</code></td><td>\u641C\u7D22\u6846\u5185\u5BB9\u65F6\u6539\u53D8\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td><td><code>(options: TransferSearchChange) => void</code></td><td>-</td></tr><tr><td><code>[selectChange]</code></td><td>\u9009\u4E2D\u9879\u53D1\u751F\u6539\u53D8\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td><td><code>(options: TransferSelectChange) => void</code></td><td>-</td></tr></tbody></table>`,meta:{title:"transfer",subtitle:"\u7A7F\u68AD\u6846",type:"Non-built-in widgets"},toc:[{id:"\u5BFC\u5165\u6A21\u5757",title:"\u5BFC\u5165\u6A21\u5757",h:2},{id:"\u6CE8\u610F\u4E8B\u9879",title:"\u6CE8\u610F\u4E8B\u9879",h:2},{id:"API",title:"API",h:2,children:[{id:"schema\u5C5E\u6027",title:"schema \u5C5E\u6027",h:3},{id:"ui\u5C5E\u6027",title:"ui \u5C5E\u6027",h:3}]}]}},demo:!0},this.codes=[{id:"form-transfer-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';
import { SFSchema } from '@delon/form';
import { SFTransferWidgetSchema } from '@delon/form/widgets/transfer';
import { NzMessageService } from 'ng-zorro-antd/message';
import { of, delay } from 'rxjs';

@Component({
  selector: 'form-transfer-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)"></sf> \`,
})
export class FormTransferSimpleComponent {
  schema: SFSchema = {
    properties: {
      roles: {
        type: 'number',
        title: '\u89D2\u8272',
        enum: [
          { title: 'DNS\u7BA1\u7406', value: 10 },
          { title: 'ECS\u7BA1\u7406', value: 11 },
          { title: 'OSS\u7BA1\u7406', value: 12 },
          { title: 'RDS\u7BA1\u7406', value: 13 },
        ],
        ui: {
          widget: 'transfer',
          titles: ['\u672A\u62E5\u6709', '\u5DF2\u62E5\u6709'],
        } as SFTransferWidgetSchema,
        default: [11, 12],
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
              { title: 'RDS\u7BA1\u7406', value: 13 },
            ]).pipe(delay(10)),
        } as SFTransferWidgetSchema,
        default: [11, 12],
      },
    },
  };

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormTransferSimpleComponent",point:0,name:"simple",urls:"packages/form/widgets/transfer/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-transfer"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-transfer-simple"),i(7,`
        `),c(),i(8,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id))},dependencies:[w,C,k,F,Oe],encapsulation:2});let n=e;return n})();var Re=(()=>{let e=class e{constructor(o){this.msg=o,this.schema={properties:{status1:{type:"string",title:"\u57FA\u672C",enum:[{title:"\u5F85\u652F\u4ED8",key:"WAIT_BUYER_PAY"},{title:"\u5DF2\u652F\u4ED8",key:"TRADE_SUCCESS"},{title:"\u4EA4\u6613\u5B8C\u6210",key:"TRADE_FINISHED"}],default:"WAIT_BUYER_PAY",ui:{widget:"tree-select"}},status2:{type:"string",title:"\u591A\u9009",enum:[{title:"\u5F85\u652F\u4ED8",key:"WAIT_BUYER_PAY"},{title:"\u5DF2\u652F\u4ED8",key:"TRADE_SUCCESS"},{title:"\u4EA4\u6613\u5B8C\u6210",key:"TRADE_FINISHED"}],default:["WAIT_BUYER_PAY","TRADE_SUCCESS"],ui:{widget:"tree-select",multiple:!0}},status3:{type:"string",title:"\u53EF\u52FE\u9009",default:["WAIT_BUYER_PAY","TRADE_FINISHED"],ui:{widget:"tree-select",checkable:!0,asyncData:()=>P([{title:"\u5F85\u652F\u4ED8",key:"WAIT_BUYER_PAY"},{title:"\u5DF2\u652F\u4ED8",key:"TRADE_SUCCESS"},{title:"\u4EA4\u6613\u5B8C\u6210",key:"TRADE_FINISHED"}]).pipe(A(10))}},async:{type:"string",title:"Async",enum:[{title:"\u5F85\u652F\u4ED8",key:"WAIT_BUYER_PAY"},{title:"\u5DF2\u652F\u4ED8",key:"TRADE_SUCCESS"},{title:"\u4EA4\u6613\u5B8C\u6210",key:"TRADE_FINISHED"}],ui:{widget:"tree-select",expandChange:()=>P([{title:"\u5F85\u652F\u4ED8",key:"WAIT_BUYER_PAY"},{title:"\u5DF2\u652F\u4ED8",key:"TRADE_SUCCESS"},{title:"\u4EA4\u6613\u5B8C\u6210",key:"TRADE_FINISHED"}]).pipe(A(10))}}}}}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-tree-select-simple"]],decls:3,vars:1,consts:[[3,"schema","formSubmit"]],template:function(t,d){t&1&&(i(0," "),r(1,"sf",0),h("formSubmit",function(u){return d.submit(u)}),c(),i(2," ")),t&2&&(s(1),a("schema",d.schema))},dependencies:[f],encapsulation:2});let n=e;return n})();var Qd=["customTpl"];function Yd(n,e){if(n&1&&(i(0,`
      `),p(1,"sf",1),i(2,`
    `)),n&2){let D=U();s(1),a("schema",D.schema)}}function Kd(n,e){if(n&1&&(i(0,`
      `),r(1,"span",2),i(2,`
        `),r(3,"span"),i(4," "),p(5,"i",3),i(6),c(),i(7,`
      `),c(),i(8,`
    `)),n&2){let D=e.$implicit;s(1),S("ant-tree-node-selected",D.isSelected),s(4),a("nzType",D.isExpanded?"folder-open":"folder"),s(1),mt(" ",D.title," ")}}var Be=(()=>{let e=class e{ngOnInit(){this.schema={properties:{status:{type:"string",title:"\u57FA\u672C",enum:[{title:"parent 1",key:"100",expanded:!0,icon:"smile",children:[{title:"leaf 1-0-0",key:"10010",icon:"meh",isLeaf:!0},{title:"leaf 1-0-1",key:"10011",icon:"frown",isLeaf:!0}]}],default:"10010",ui:{widget:"tree-select",treeTemplate:this.customTpl}}}}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["form-tree-select-customized-icon"]],viewQuery:function(t,d){if(t&1&&E(Qd,7),t&2){let m;M(m=j())&&(d.customTpl=m.first)}},decls:5,vars:1,consts:[["customTpl",""],[3,"schema"],[1,"ant-tree-node-content-wrapper"],["nz-icon","",3,"nzType"]],template:function(t,d){t&1&&(i(0,`
    `),V(1,Yd,3,1)(2,Kd,9,4,"ng-template",null,0,J),i(4,`
  `)),t&2&&(s(1),H(1,d.schema?1:-1))},dependencies:[f,_,Q],encapsulation:2});let n=e;return n})();var Ve=(()=>{let e=class e{constructor(o){this.msg=o,this.schema={properties:{status1:{type:"string",title:"\u865A\u62DF\u6EDA\u52A8",enum:this.dig(),ui:{widget:"tree-select",virtualHeight:"300px"}}}}}dig(o="0",t=3){let d=[];for(let m=0;m<10;m+=1){let u=`${o}-${m}`,X={title:u,key:u,expanded:!0,children:[],isLeaf:!1};t>0?X.children=this.dig(u,t-1):X.isLeaf=!0,d.push(X)}return d}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-tree-select-virtual-scroll"]],decls:3,vars:1,consts:[[3,"schema","formSubmit"]],template:function(t,d){t&1&&(i(0," "),r(1,"sf",0),h("formSubmit",function(u){return d.submit(u)}),c(),i(2," ")),t&2&&(s(1),a("schema",d.schema))},dependencies:[f],encapsulation:2});let n=e;return n})();var qe=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/widgets/tree-select/index.en-US.md","zh-CN":"packages/form/widgets/tree-select/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Tree select widget.</p><p><strong>Note:</strong></p><ul><li><p>Data source of <code>tree-select</code> must have keys of <code>title</code>\u3001<code>key</code></p></li></ul><h2 id="Importmodule"><a class="lake-link"><i data-anchor="Importmodule"></i></a>Import module</h2><p>Non-built-in modules, Should be import <code>TreeSelectWidgetModule</code> in <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11">json-schema.module.ts</a>.</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[enum]</code></td><td>Data source</td><td><code>SFSchemaEnumType[]</code></td><td>-</td></tr><tr><td><code>[readOnly]</code></td><td>Read only</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[asyncData]</code></td><td>Asynchronous data source</td><td><code>() => Observable&lt;SFSchemaEnumType[]></code></td><td>-</td></tr><tr><td><code>[size]</code></td><td>Size, equals to <code>nzSize</code></td><td><code>string</code></td><td><code>default</code></td></tr><tr><td><code>[placeholder]</code></td><td>Placeholder</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[notFoundContent]</code></td><td>Text to display when a column is empty</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[allowClear]</code></td><td>Whether show clear button</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[dropdownMatchSelectWidth]</code></td><td>Determine whether the dropdown menu and the select input are the same width</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[dropdownStyle]</code></td><td>Set the style of the dropdown menu</td><td><code>object</code></td><td>-</td></tr><tr><td><code>[dropdownClassName]</code></td><td>Set className of the dropdown menu</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[multiple]</code></td><td>Support multiple select\uFF08set to true automatically when <code>checkable</code> is set\uFF09</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[hideUnMatched]</code></td><td>Hide unmatched nodes</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[checkable]</code></td><td>Whether to show checkbox on the treeNodes</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[checkStrictly]</code></td><td>Fully control node itself when it's checkable status(No relationship about check status between parent and child nodes)</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[showIcon]</code></td><td>Whether to show icon in front of TreeNode title, there is no default style</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[showExpand]</code></td><td>Show a expand icon before the treeNodes</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[showLine]</code></td><td>Shows a connecting line</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[defaultExpandAll]</code></td><td>Whether to expand all treeNodes by default</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[displayWith]</code></td><td>How to display the selected node value in input box</td><td><code>(node: NzTreeNode) => string | undefined</code></td><td><code>(node: NzTreeNode) => node.title</code></td></tr><tr><td><code>[expandedKeys]</code></td><td>Expand specific tree nodes by default</td><td><code>string[]</code></td><td>-</td></tr><tr><td><code>[maxTagCount]</code></td><td>Maximun number of tag</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[maxTagPlaceholder]</code></td><td>Placeholder for not showing tags</td><td><code>TemplateRef&lt;{ $implicit: NzTreeNode[] }></code></td><td>-</td></tr><tr><td><code>[treeTemplate]</code></td><td>Custom Nodes</td><td><code>TemplateRef&lt;{ $implicit: NzTreeNode; origin: NzTreeNodeOptions }></code></td><td>-</td></tr><tr><td><code>[expandChange]</code></td><td>Callback function for when a treeNode is expanded or collapsed</td><td><code>(e: NzFormatEmitEvent) => Observable&lt;SFSchemaEnum[]></code></td><td>-</td></tr><tr><td><code>[virtualHeight]</code></td><td>The height of virtual scroll</td><td><code>string</code></td><td><code>-</code></td></tr><tr><td><code>[virtualItemSize]</code></td><td>The size of the items in the list, same as <a target="_blank" href="https://material.angular.io/cdk/scrolling/api" data-url="https://material.angular.io/cdk/scrolling/api">cdk itemSize</a></td><td><code>number</code></td><td><code>28</code></td></tr><tr><td><code>[virtualMaxBufferPx]</code></td><td>The number of pixels worth of buffer to render for when rendering new items, same as <a target="_blank" href="https://material.angular.io/cdk/scrolling/api" data-url="https://material.angular.io/cdk/scrolling/api">cdk maxBufferPx</a></td><td><code>number</code></td><td><code>500</code></td></tr><tr><td><code>[virtualMinBufferPx]</code></td><td>The minimum amount of buffer rendered beyond the viewport (in pixels),same as <a target="_blank" href="https://material.angular.io/cdk/scrolling/api" data-url="https://material.angular.io/cdk/scrolling/api">cdk minBufferPx</a></td><td><code>number</code></td><td><code>28</code></td></tr></tbody></table><blockquote><p>Asynchronous data must set initial data (Using either <code>enum</code> or <code>asyncData</code>), otherwise, <code>expandChange</code> cannot be triggered.</p></blockquote>`,meta:{title:"tree-select",subtitle:"Tree Select",type:"Non-built-in widgets"},toc:[{id:"Importmodule",title:"Import module",h:2},{id:"API",title:"API",h:2,children:[{id:"schema",title:"schema",h:3},{id:"ui",title:"ui",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u6811\u578B\u9009\u62E9\u63A7\u4EF6\u3002</p><p><strong>\u6CE8\u610F\uFF1A</strong></p><ul><li><p><code>tree-select</code> \u7684\u6570\u636E\u6E90\u5FC5\u987B\u5305\u542B <code>title</code>\u3001<code>key</code> \u952E\u540D</p></li></ul><h2 id="\u5BFC\u5165\u6A21\u5757"><a class="lake-link"><i data-anchor="\u5BFC\u5165\u6A21\u5757"></i></a>\u5BFC\u5165\u6A21\u5757</h2><p>\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11">json-schema.module.ts</a> \u5BFC\u5165 <code>TreeSelectWidgetModule</code>\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[enum]</code></td><td>\u6570\u636E\u6E90</td><td><code>SFSchemaEnumType[]</code></td><td>-</td></tr><tr><td><code>[readOnly]</code></td><td>\u7981\u7528\u72B6\u6001</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="ui\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[asyncData]</code></td><td>\u5F02\u6B65\u6570\u636E\u6E90</td><td><code>() => Observable&lt;SFSchemaEnumType[]></code></td><td>-</td></tr><tr><td><code>[size]</code></td><td>\u5927\u5C0F\uFF0C\u7B49\u540C <code>nzSize</code></td><td><code>string</code></td><td><code>default</code></td></tr><tr><td><code>[placeholder]</code></td><td>\u5728\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u8BAF\u606F</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[notFoundContent]</code></td><td>\u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[allowClear]</code></td><td>\u652F\u6301\u6E05\u9664</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[dropdownMatchSelectWidth]</code></td><td>\u4E0B\u62C9\u83DC\u5355\u548C\u9009\u62E9\u5668\u540C\u5BBD</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[dropdownStyle]</code></td><td>\u4E0B\u62C9\u83DC\u5355\u7684 style \u5C5E\u6027</td><td><code>object</code></td><td>-</td></tr><tr><td><code>[dropdownClassName]</code></td><td>\u4E0B\u62C9\u83DC\u5355\u7684 className \u5C5E\u6027</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[multiple]</code></td><td>\u652F\u6301\u591A\u9009\uFF08\u5F53\u8BBE\u7F6E <code>checkable</code> \u65F6\u81EA\u52A8\u53D8\u4E3Atrue\uFF09</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[hideUnMatched]</code></td><td>\u641C\u7D22\u9690\u85CF\u672A\u5339\u914D\u7684\u8282\u70B9</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[checkable]</code></td><td>\u8282\u70B9\u524D\u6DFB\u52A0 Checkbox \u590D\u9009\u6846</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[checkStrictly]</code></td><td>checkable \u72B6\u6001\u4E0B\u8282\u70B9\u9009\u62E9\u5B8C\u5168\u53D7\u63A7\uFF08\u7236\u5B50\u8282\u70B9\u9009\u4E2D\u72B6\u6001\u4E0D\u518D\u5173\u8054\uFF09</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[showIcon]</code></td><td>\u662F\u5426\u5C55\u793A TreeNode title \u524D\u7684\u56FE\u6807\uFF0C\u6CA1\u6709\u9ED8\u8BA4\u6837\u5F0F</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[showExpand]</code></td><td>\u8282\u70B9\u524D\u6DFB\u52A0\u5C55\u5F00\u56FE\u6807</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[showLine]</code></td><td>\u8282\u70B9\u524D\u6DFB\u52A0\u5C55\u5F00\u56FE\u6807</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[defaultExpandAll]</code></td><td>\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u6811\u8282\u70B9</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[displayWith]</code></td><td>\u5982\u4F55\u5728\u8F93\u5165\u6846\u663E\u793A\u6240\u9009\u7684\u8282\u70B9\u503C\u7684\u65B9\u6CD5</td><td><code>(node: NzTreeNode) => string | undefined</code></td><td><code>(node: NzTreeNode) => node.title</code></td></tr><tr><td><code>[expandedKeys]</code></td><td>\u9ED8\u8BA4\u5C55\u5F00\u6307\u5B9A\u7684\u6811\u8282\u70B9</td><td><code>string[]</code></td><td>-</td></tr><tr><td><code>[maxTagCount]</code></td><td>\u6700\u591A\u663E\u793A\u591A\u5C11\u4E2A tag</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[maxTagPlaceholder]</code></td><td>\u9690\u85CF tag \u65F6\u663E\u793A\u7684\u5185\u5BB9</td><td><code>TemplateRef&lt;{ $implicit: NzTreeNode[] }></code></td><td>-</td></tr><tr><td><code>[treeTemplate]</code></td><td>\u81EA\u5B9A\u4E49\u8282\u70B9</td><td><code>TemplateRef&lt;{ $implicit: NzTreeNode; origin: NzTreeNodeOptions }></code></td><td>-</td></tr><tr><td><code>[expandChange]</code></td><td>\u70B9\u51FB\u5C55\u5F00\u6811\u8282\u70B9\u56FE\u6807\u8C03\u7528</td><td><code>(e: NzFormatEmitEvent) => Observable&lt;SFSchemaEnum[]></code></td><td>-</td></tr><tr><td><code>[virtualHeight]</code></td><td>\u865A\u62DF\u6EDA\u52A8\u7684\u603B\u9AD8\u5EA6</td><td><code>string</code></td><td><code>-</code></td></tr><tr><td><code>[virtualItemSize]</code></td><td>\u865A\u62DF\u6EDA\u52A8\u65F6\u6BCF\u4E00\u5217\u7684\u9AD8\u5EA6\uFF0C\u4E0E <a target="_blank" href="https://material.angular.io/cdk/scrolling/api" data-url="https://material.angular.io/cdk/scrolling/api">cdk itemSize</a> \u76F8\u540C</td><td><code>number</code></td><td><code>28</code></td></tr><tr><td><code>[virtualMaxBufferPx]</code></td><td>\u7F13\u51B2\u533A\u6700\u5927\u50CF\u7D20\u9AD8\u5EA6\uFF0C\u4E0E <a target="_blank" href="https://material.angular.io/cdk/scrolling/api" data-url="https://material.angular.io/cdk/scrolling/api">cdk maxBufferPx</a> \u76F8\u540C</td><td><code>number</code></td><td><code>500</code></td></tr><tr><td><code>[virtualMinBufferPx]</code></td><td>\u7F13\u51B2\u533A\u6700\u5C0F\u50CF\u7D20\u9AD8\u5EA6\uFF0C\u4F4E\u4E8E\u8BE5\u503C\u65F6\u5C06\u52A0\u8F7D\u65B0\u7ED3\u6784\uFF0C\u4E0E <a target="_blank" href="https://material.angular.io/cdk/scrolling/api" data-url="https://material.angular.io/cdk/scrolling/api">cdk minBufferPx</a> \u76F8\u540C</td><td><code>number</code></td><td><code>28</code></td></tr></tbody></table><blockquote><p>\u5F02\u6B65\u6570\u636E\u52A1\u5FC5\u5148\u6307\u5B9A\u521D\u59CB\u5316\u6570\u636E\uFF08\u4F7F\u7528 <code>enum</code>\u3001<code>asyncData</code> \u9009\u5176\u4E00\uFF09\uFF0C\u5426\u5219\u65E0\u6CD5\u89E6\u53D1 <code>expandChange</code>\u3002</p></blockquote>',meta:{title:"tree-select",subtitle:"\u6811\u9009\u62E9",type:"Non-built-in widgets"},toc:[{id:"\u5BFC\u5165\u6A21\u5757",title:"\u5BFC\u5165\u6A21\u5757",h:2},{id:"API",title:"API",h:2,children:[{id:"schema\u5C5E\u6027",title:"schema \u5C5E\u6027",h:3},{id:"ui\u5C5E\u6027",title:"ui \u5C5E\u6027",h:3}]}]}},demo:!0},this.codes=[{id:"form-tree-select-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:1},summary:{"zh-CN":'<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p><blockquote><p>\u591A\u9009\uFF1A\u91CD\u7F6E\u65F6\u65E0\u6CD5\u5237\u65B0\u9ED8\u8BA4\u503C <a target="_blank" href="https://github.com/NG-ZORRO/ng-zorro-antd/issues/2085" data-url="https://github.com/NG-ZORRO/ng-zorro-antd/issues/2085">#2085</a></p></blockquote>',"en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';
import { SFSchema } from '@delon/form';
import type { SFTreeSelectWidgetSchema } from '@delon/form/widgets/tree-select';
import { NzMessageService } from 'ng-zorro-antd/message';
import { of, delay } from 'rxjs';

@Component({
  selector: 'form-tree-select-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)"></sf> \`,
})
export class FormTreeSelectSimpleComponent {
  schema: SFSchema = {
    properties: {
      status1: {
        type: 'string',
        title: '\u57FA\u672C',
        enum: [
          { title: '\u5F85\u652F\u4ED8', key: 'WAIT_BUYER_PAY' },
          { title: '\u5DF2\u652F\u4ED8', key: 'TRADE_SUCCESS' },
          { title: '\u4EA4\u6613\u5B8C\u6210', key: 'TRADE_FINISHED' },
        ],
        default: 'WAIT_BUYER_PAY',
        ui: {
          widget: 'tree-select',
        } as SFTreeSelectWidgetSchema,
      },
      status2: {
        type: 'string',
        title: '\u591A\u9009',
        enum: [
          { title: '\u5F85\u652F\u4ED8', key: 'WAIT_BUYER_PAY' },
          { title: '\u5DF2\u652F\u4ED8', key: 'TRADE_SUCCESS' },
          { title: '\u4EA4\u6613\u5B8C\u6210', key: 'TRADE_FINISHED' },
        ],
        default: ['WAIT_BUYER_PAY', 'TRADE_SUCCESS'],
        ui: {
          widget: 'tree-select',
          multiple: true,
        } as SFTreeSelectWidgetSchema,
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
              { title: '\u4EA4\u6613\u5B8C\u6210', key: 'TRADE_FINISHED' },
            ]).pipe(delay(10)),
        } as SFTreeSelectWidgetSchema,
      },
      // \u5F02\u6B65\u6570\u636E
      async: {
        type: 'string',
        title: 'Async',
        enum: [
          { title: '\u5F85\u652F\u4ED8', key: 'WAIT_BUYER_PAY' },
          { title: '\u5DF2\u652F\u4ED8', key: 'TRADE_SUCCESS' },
          { title: '\u4EA4\u6613\u5B8C\u6210', key: 'TRADE_FINISHED' },
        ],
        ui: {
          widget: 'tree-select',
          expandChange: () => {
            return of([
              { title: '\u5F85\u652F\u4ED8', key: 'WAIT_BUYER_PAY' },
              { title: '\u5DF2\u652F\u4ED8', key: 'TRADE_SUCCESS' },
              { title: '\u4EA4\u6613\u5B8C\u6210', key: 'TRADE_FINISHED' },
            ]).pipe(delay(10));
          },
        } as SFTreeSelectWidgetSchema,
      },
    },
  };

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormTreeSelectSimpleComponent",point:0,name:"simple",urls:"packages/form/widgets/tree-select/demo/simple.md",type:"demo"},{id:"form-tree-select-customized-icon",meta:{order:2,debug:!0,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u56FE\u6807","en-US":"Customize Icon"}},summary:{"zh-CN":"<p>\u53EF\u4EE5\u9488\u5BF9\u4E0D\u540C\u8282\u70B9\u91C7\u7528\u6837\u5F0F\u8986\u76D6\u7684\u65B9\u5F0F\u5B9A\u5236\u56FE\u6807\u3002</p>","en-US":"<p>You can customize icons for different nodes.</p>"},code:`import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { SFSchema } from '@delon/form';
import type { SFTreeSelectWidgetSchema } from '@delon/form/widgets/tree-select';
import { NzTreeNode } from 'ng-zorro-antd/tree';

@Component({
  selector: 'form-tree-select-customized-icon',
  template: \`
    @if (schema) {
      <sf [schema]="schema" />
    }
    <ng-template #customTpl let-node>
      <span class="ant-tree-node-content-wrapper" [class.ant-tree-node-selected]="node.isSelected">
        <span> <i nz-icon [nzType]="node.isExpanded ? 'folder-open' : 'folder'"></i> {{ node.title }} </span>
      </span>
    </ng-template>
  \`,
})
export class FormTreeSelectCustomizedIconComponent implements OnInit {
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
                { title: 'leaf 1-0-1', key: '10011', icon: 'frown', isLeaf: true },
              ],
            },
          ],
          default: '10010',
          ui: {
            widget: 'tree-select',
            treeTemplate: this.customTpl,
          } as SFTreeSelectWidgetSchema,
        },
      },
    };
  }
}`,lang:"ts",componentName:"FormTreeSelectCustomizedIconComponent",point:1,name:"customized-icon",urls:"packages/form/widgets/tree-select/demo/customized-icon.md",type:"demo"},{id:"form-tree-select-virtual-scroll",meta:{title:{"zh-CN":"\u865A\u62DF\u6EDA\u52A8","en-US":"Virtual Scroll"},order:3},summary:{"zh-CN":"<p>\u8BBE\u5B9A <code>virtualHeight</code> \u5F00\u542F\u865A\u62DF\u6EDA\u52A8\u3002</p>","en-US":"<p>Set <code>virtualHeight</code> to enable virtual scroll.</p>"},code:`import { Component } from '@angular/core';
import { SFSchema } from '@delon/form';
import type { SFTreeSelectWidgetSchema } from '@delon/form/widgets/tree-select';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';

@Component({
  selector: 'form-tree-select-virtual-scroll',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)"></sf> \`,
})
export class FormTreeSelectVirtualScrollComponent {
  schema: SFSchema = {
    properties: {
      status1: {
        type: 'string',
        title: '\u865A\u62DF\u6EDA\u52A8',
        enum: this.dig(),
        ui: {
          widget: 'tree-select',
          virtualHeight: '300px',
        } as SFTreeSelectWidgetSchema,
      },
    },
  };

  constructor(private msg: NzMessageService) {}

  private dig(path: string = '0', level: number = 3): NzTreeNodeOptions[] {
    const list: NzTreeNodeOptions[] = [];
    for (let i = 0; i < 10; i += 1) {
      const key = \`\${path}-\${i}\`;
      const treeNode: NzTreeNodeOptions = {
        title: key,
        key,
        expanded: true,
        children: [],
        isLeaf: false,
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
}`,lang:"ts",componentName:"FormTreeSelectVirtualScrollComponent",point:2,name:"virtual-scroll",urls:"packages/form/widgets/tree-select/demo/virtual-scroll.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-tree-select"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:19,vars:9,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-tree-select-simple"),i(7,`
        `),c(),i(8,`
      
        `),r(9,"code-box",3),i(10,`
          `),p(11,"form-tree-select-customized-icon"),i(12,`
        `),c(),i(13,`
      
        `),r(14,"code-box",3),i(15,`
          `),p(16,"form-tree-select-virtual-scroll"),i(17,`
        `),c(),i(18,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id),s(5),a("item",d.codes[1]),v("id",d.codes[1].id),s(5),a("item",d.codes[2]),v("id",d.codes[2].id))},dependencies:[w,C,k,F,Re,Be,Ve],encapsulation:2});let n=e;return n})();var Le=(()=>{let e=class e{constructor(o){this.msg=o,this.schema={properties:{file:{type:"string",title:"\u5355\u4E2A\u6587\u4EF6",enum:[{uid:-1,name:"xxx.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",response:{resource_id:1}}],ui:{widget:"upload",action:"/upload",resReName:"resource_id",urlReName:"url"}},mulit:{type:"string",title:"\u591A\u4E2A\u6587\u4EF6",ui:{widget:"upload",action:"/upload",resReName:"resource_id",urlReName:"url",multiple:!0}},drag:{type:"string",title:"Drag",ui:{widget:"upload",action:"/upload",resReName:"resource_id",urlReName:"url",type:"drag"}}}}}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-upload-simple"]],decls:3,vars:1,consts:[[3,"schema","formSubmit"]],template:function(t,d){t&1&&(i(0," "),r(1,"sf",0),h("formSubmit",function(u){return d.submit(u)}),c(),i(2," ")),t&2&&(s(1),a("schema",d.schema))},dependencies:[f],encapsulation:2});let n=e;return n})();var He=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/widgets/upload/index.en-US.md","zh-CN":"packages/form/widgets/upload/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Upload file widget by select or drag.</p><h2 id="Importmodule"><a class="lake-link"><i data-anchor="Importmodule"></i></a>Import module</h2><p>Non-built-in modules, Should be import <code>UploadWidgetModule</code> in <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11">json-schema.module.ts</a>.</p><h2 id="Note"><a class="lake-link"><i data-anchor="Note"></i></a>Note</h2><ul><li><p><strong>Must</strong> set <code>resReName</code> to get correct data</p></li><li><p><code>multiple</code> determine return array or one element</p></li><li><p>If <code>enum</code> or <code>asyncData</code> is set, it will be converted to <code>fileList</code> (<code>nzFileList</code>), and <strong>must</strong> initially guarantee a <code>response</code> property to indicate remote data and make sure <code>resReName</code> can be obtained correctly</p></li><li><p>Image preview: by default, it uses <code>nzModal</code> to show <code>url</code> or <code>thumbUrl</code> of file object</p></li></ul></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema"><a class="lake-link"><i data-anchor="schema"></i></a>schema</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[readOnly]</code></td><td>Read only</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[asyncData]</code></td><td>Asynchronous data source</td><td><code>() => Observable&lt;SFSchemaEnumType[]></code></td><td>-</td></tr><tr><td><code>[type]</code></td><td>Upload type</td><td><code>select,drag</code></td><td><code>select</code></td></tr><tr><td><code>[text]</code></td><td>Text of button</td><td><code>string</code></td><td><code>\u70B9\u51FB\u4E0A\u4F20</code></td></tr><tr><td><code>[hint]</code></td><td>Text of hint, it is valid during drag</td><td><code>string</code></td><td><code>\u652F\u6301\u5355\u4E2A\u6216\u6279\u91CF\uFF0C\u4E25\u7981\u4E0A\u4F20\u516C\u53F8\u6570\u636E\u6216\u5176\u4ED6\u5B89\u5168\u6587\u4EF6</code></td></tr><tr><td><code>[resReName]</code></td><td>Rename return parameter, support nested style <code>a.b.c</code>, the whole return body will be used if it is not set</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[urlReName]</code></td><td>Rename image preview URl return parameter, support nested style <code>a.b.c</code>, <code>url</code>, <code>thumbUrl</code> of file object will be used if it is not set</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[action]</code></td><td>Required attribute, upload URL</td><td><code>string, ((file: UploadFile) => string, Observable&lt;string>)</code></td><td>-</td></tr><tr><td><code>[accept]</code></td><td>File types that can be accepted, see details from <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept" data-url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept">input accept Attribute</a></td><td><code>string, string[]</code></td><td>-</td></tr><tr><td><code>[limit]</code></td><td>limit number of single upload when <code>multiple</code> is set, 0 means unlimited</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[filter]</code></td><td>Custom filter when choosed file</td><td><code>UploadFilter[]</code></td><td>-</td></tr><tr><td><code>[fileList]</code></td><td>File list</td><td><code>UploadFile[]</code></td><td>-</td></tr><tr><td><code>[fileSize]</code></td><td>Limit file size, unit: KB; <code>0</code> means unlimited</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[fileType]</code></td><td>Limit file type, e.g. <code>image/png,image/jpeg,image/gif,image/bmp</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[headers]</code></td><td>Set request header of upload</td><td><code>Object, (file: UploadFile) => {} | Observable&lt;{}></code></td><td>-</td></tr><tr><td><code>[listType]</code></td><td>Built-in style of upload list</td><td><code>text,picture,picture-card</code></td><td><code>text</code></td></tr><tr><td><code>[showUploadList]</code></td><td>Whether show upload list, can set as an object, used to set <code>showPreviewIcon</code> and <code>showRemoveIcon</code> separately</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[multiple]</code></td><td>Whether support multiple file selection. IE10+ supported. You can select multiple files with holding <code>ctrl</code></td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[name]</code></td><td>File name when sending to backend</td><td><code>string</code></td><td><code>file</code></td></tr><tr><td><code>[data]</code></td><td>Uploading params or function which can return uploading params</td><td><code>Object, (file: UploadFile) => {} | Observable&lt;{}></code></td><td>-</td></tr><tr><td><code>[withCredentials]</code></td><td>Whether set cookie during upload</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[directory]</code></td><td>Support upload whole directory (<a target="_blank" href="https://caniuse.com/#feat=input-file-directory" data-url="https://caniuse.com/#feat=input-file-directory">caniuse</a>)</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[openFileDialogOnClick]</code></td><td>Click to open file dialog</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[beforeUpload]</code></td><td>Hook function which will be executed before uploading, parameter is file to be uploaded, stop uploading when <code>false</code> is returned</td><td><code>(file: UploadFile, fileList: UploadFile[]) => boolean\uFF5CObservable&lt;boolean></code></td><td>-</td></tr><tr><td><code>[customRequest]</code></td><td>Override the default xhr behavior allowing for additional customization and ability to implement your own XMLHttpRequest</td><td><code>(item: UploadXHRArgs) => Subscription</code></td><td>-</td></tr><tr><td><code>[remove]</code></td><td>Callback function when remove is clicked, won't remove when <code>false</code> is returned</td><td><code>(file: UploadFile) => boolean\uFF5CObservable</code></td><td>-</td></tr><tr><td><code>[preview]</code></td><td>Callback function when file link or preview icon is clicked</td><td><code>(file: UploadFile) => void</code></td><td>-</td></tr><tr><td><code>[previewFile]</code></td><td>Customize preview file logic</td><td><code>(file: UploadFile) => Observable&lt;string></code></td><td>-</td></tr><tr><td><code>[download]</code></td><td>Callback function when clicking the method to download the file, jump to a new tab with url of file</td><td><code>(file: UploadFile) => void</code></td><td>-</td></tr><tr><td><code>[transformFile]</code></td><td>Transform file before file conversion. Support to return Observable object</td><td><code>(file: UploadFile) => UploadTransformFileType</code></td><td>-</td></tr><tr><td><code>[change]</code></td><td>Callback function when uploading state is changing</td><td><code>(args: UploadChangeParam) => void</code></td><td>-</td></tr></tbody></table>`,meta:{title:"upload",subtitle:"Upload",type:"Non-built-in widgets"},toc:[{id:"Importmodule",title:"Import module",h:2},{id:"Note",title:"Note",h:2},{id:"API",title:"API",h:2,children:[{id:"schema",title:"schema",h:3},{id:"ui",title:"ui",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u6587\u4EF6\u9009\u62E9\u4E0A\u4F20\u548C\u62D6\u62FD\u4E0A\u4F20\u63A7\u4EF6\u3002</p><h2 id="\u5BFC\u5165\u6A21\u5757"><a class="lake-link"><i data-anchor="\u5BFC\u5165\u6A21\u5757"></i></a>\u5BFC\u5165\u6A21\u5757</h2><p>\u975E\u5185\u7F6E\u6A21\u5757\uFF0C\u9700\u8981\u989D\u5916\u5728 <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11">json-schema.module.ts</a> \u5BFC\u5165 <code>UploadWidgetModule</code>\u3002</p><h2 id="\u6CE8\u610F\u4E8B\u9879"><a class="lake-link"><i data-anchor="\u6CE8\u610F\u4E8B\u9879"></i></a>\u6CE8\u610F\u4E8B\u9879</h2><ul><li><p><strong>\u52A1\u5FC5</strong> \u6307\u5B9A <code>resReName</code> \u6765\u83B7\u53D6\u6B63\u786E\u6570\u636E</p></li><li><p><code>multiple</code> \u51B3\u5B9A\u8FD4\u56DE\u6570\u7EC4\u6216\u8005\u5355\u4F53\u6570\u636E</p></li><li><p>\u82E5\u6307\u5B9A <code>enum</code> \u6216 <code>asyncData</code> \u5C06\u88AB\u8F6C\u5316\u6210 <code>fileList</code> (<code>nzFileList</code>) \u503C\uFF0C\u4E14<strong>\u52A1\u5FC5</strong>\u521D\u59CB\u4FDD\u8BC1\u4E00\u4E2A <code>response</code> \u5C5E\u6027\u8868\u793A\u8FDC\u7A0B\u6570\u636E\u5E76 <code>resReName</code> \u80FD\u6B63\u786E\u83B7\u53D6</p></li><li><p>\u56FE\u50CF\u9884\u89C8\uFF1A\u9ED8\u8BA4\u4F7F\u7528 <code>nzModal</code> \u6765\u663E\u793A\u5305\u542B\u6587\u4EF6\u5BF9\u8C61\u7684 <code>url</code> \u6216 <code>thumbUrl</code> \u503C</p></li></ul></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="schema\u5C5E\u6027"><a class="lake-link"><i data-anchor="schema\u5C5E\u6027"></i></a>schema \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[readOnly]</code></td><td>\u7981\u7528\u72B6\u6001</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="ui\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[asyncData]</code></td><td>\u5F02\u6B65\u6570\u636E\u6E90</td><td><code>() => Observable&lt;SFSchemaEnumType[]></code></td><td>-</td></tr><tr><td><code>[type]</code></td><td>\u4E0A\u4F20\u7C7B\u578B</td><td><code>select,drag</code></td><td><code>select</code></td></tr><tr><td><code>[text]</code></td><td>\u6309\u94AE\u6587\u672C</td><td><code>string</code></td><td><code>\u70B9\u51FB\u4E0A\u4F20</code></td></tr><tr><td><code>[hint]</code></td><td>\u63D0\u9192\u6587\u672C\uFF0Cdrag \u65F6\u6709\u6548</td><td><code>string</code></td><td><code>\u652F\u6301\u5355\u4E2A\u6216\u6279\u91CF\uFF0C\u4E25\u7981\u4E0A\u4F20\u516C\u53F8\u6570\u636E\u6216\u5176\u4ED6\u5B89\u5168\u6587\u4EF6</code></td></tr><tr><td><code>[resReName]</code></td><td>\u91CD\u547D\u540D\u8FD4\u56DE\u53C2\u6570\uFF0C\u652F\u6301 <code>a.b.c</code> \u7684\u5D4C\u5957\u5199\u6CD5\uFF0C\u82E5\u4E0D\u6307\u5B9A\u8868\u793A\u6574\u4E2A\u8FD4\u56DE\u4F53</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[urlReName]</code></td><td>\u91CD\u547D\u540D\u9884\u89C8\u56FE\u50CFURL\u8FD4\u56DE\u53C2\u6570\uFF0C\u652F\u6301 <code>a.b.c</code> \u7684\u5D4C\u5957\u5199\u6CD5\uFF0C\u82E5\u4E0D\u6307\u5B9A\u8868\u793A\u4F7F\u7528\u6587\u4EF6\u5BF9\u8C61\u7684 <code>url</code>\u3001<code>thumbUrl</code> \u503C</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[action]</code></td><td>\u5FC5\u9009\u53C2\u6570, \u4E0A\u4F20\u7684\u5730\u5740</td><td><code>string, ((file: UploadFile) => string, Observable&lt;string>)</code></td><td>-</td></tr><tr><td><code>[accept]</code></td><td>\u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B, \u8BE6\u89C1 <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept" data-url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept">input accept Attribute</a></td><td><code>string, string[]</code></td><td>-</td></tr><tr><td><code>[limit]</code></td><td>\u9650\u5236\u5355\u6B21\u6700\u591A\u4E0A\u4F20\u6570\u91CF\uFF0C<code>multiple</code> \u6253\u5F00\u65F6\u6709\u6548\uFF1B<code>0</code> \u8868\u793A\u4E0D\u9650</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[filter]</code></td><td>\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u5668</td><td><code>UploadFilter[]</code></td><td>-</td></tr><tr><td><code>[fileList]</code></td><td>\u6587\u4EF6\u5217\u8868</td><td><code>UploadFile[]</code></td><td>-</td></tr><tr><td><code>[fileSize]</code></td><td>\u9650\u5236\u6587\u4EF6\u5927\u5C0F\uFF0C\u5355\u4F4D\uFF1AKB\uFF1B<code>0</code> \u8868\u793A\u4E0D\u9650</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[fileType]</code></td><td>\u9650\u5236\u6587\u4EF6\u7C7B\u578B\uFF0C\u4F8B\u5982\uFF1A<code>image/png,image/jpeg,image/gif,image/bmp</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[headers]</code></td><td>\u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u5934\u90E8</td><td><code>Object, (file: UploadFile) => {} | Observable&lt;{}></code></td><td>-</td></tr><tr><td><code>[listType]</code></td><td>\u4E0A\u4F20\u5217\u8868\u7684\u5185\u5EFA\u6837\u5F0F</td><td><code>text,picture,picture-card</code></td><td><code>text</code></td></tr><tr><td><code>[showUploadList]</code></td><td>\u662F\u5426\u5C55\u793A\u5217\u8868, \u53EF\u8BBE\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u7528\u4E8E\u5355\u72EC\u8BBE\u5B9A <code>showPreviewIcon</code> \u548C <code>showRemoveIcon</code></td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[multiple]</code></td><td>\u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6\uFF0C<code>IE10+</code> \u652F\u6301\u3002\u5F00\u542F\u540E\u6309\u4F4F <code>ctrl</code> \u53EF\u9009\u62E9\u591A\u4E2A\u6587\u4EF6\u3002</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[name]</code></td><td>\u53D1\u5230\u540E\u53F0\u7684\u6587\u4EF6\u53C2\u6570\u540D</td><td><code>string</code></td><td><code>file</code></td></tr><tr><td><code>[data]</code></td><td>\u4E0A\u4F20\u6240\u9700\u53C2\u6570\u6216\u8FD4\u56DE\u4E0A\u4F20\u53C2\u6570\u7684\u65B9\u6CD5</td><td><code>Object, (file: UploadFile) => {} | Observable&lt;{}></code></td><td>-</td></tr><tr><td><code>[withCredentials]</code></td><td>\u4E0A\u4F20\u8BF7\u6C42\u65F6\u662F\u5426\u643A\u5E26 cookie</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[directory]</code></td><td>\u652F\u6301\u4E0A\u4F20\u6587\u4EF6\u5939\uFF08<a target="_blank" href="https://caniuse.com/#feat=input-file-directory" data-url="https://caniuse.com/#feat=input-file-directory">caniuse</a>\uFF09</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[openFileDialogOnClick]</code></td><td>\u70B9\u51FB\u6253\u5F00\u6587\u4EF6\u5BF9\u8BDD\u6846</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[beforeUpload]</code></td><td>\u4E0A\u4F20\u6587\u4EF6\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u53C2\u6570\u4E3A\u4E0A\u4F20\u7684\u6587\u4EF6\uFF0C\u82E5\u8FD4\u56DE <code>false</code> \u5219\u505C\u6B62\u4E0A\u4F20</td><td><code>(file: UploadFile, fileList: UploadFile[]) => boolean\uFF5CObservable&lt;boolean></code></td><td>-</td></tr><tr><td><code>[customRequest]</code></td><td>\u901A\u8FC7\u8986\u76D6\u9ED8\u8BA4\u7684\u4E0A\u4F20\u884C\u4E3A\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u81EA\u5DF1\u7684\u4E0A\u4F20\u5B9E\u73B0</td><td><code>(item: UploadXHRArgs) => Subscription</code></td><td>-</td></tr><tr><td><code>[remove]</code></td><td>\u70B9\u51FB\u79FB\u9664\u6587\u4EF6\u65F6\u7684\u56DE\u8C03\uFF0C\u8FD4\u56DE\u503C\u4E3A <code>false</code> \u65F6\u4E0D\u79FB\u9664</td><td><code>(file: UploadFile) => boolean\uFF5CObservable</code></td><td>-</td></tr><tr><td><code>[preview]</code></td><td>\u70B9\u51FB\u6587\u4EF6\u94FE\u63A5\u6216\u9884\u89C8\u56FE\u6807\u65F6\u7684\u56DE\u8C03</td><td><code>(file: UploadFile) => void</code></td><td>-</td></tr><tr><td><code>[previewFile]</code></td><td>\u81EA\u5B9A\u4E49\u6587\u4EF6\u9884\u89C8\u903B\u8F91</td><td><code>(file: UploadFile) => Observable&lt;string></code></td><td>-</td></tr><tr><td><code>[download]</code></td><td>\u70B9\u51FB\u4E0B\u8F7D\u6587\u4EF6\u65F6\u7684\u56DE\u8C03\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9A\uFF0C\u5219\u9ED8\u8BA4\u8DF3\u8F6C\u5230\u6587\u4EF6 url \u5BF9\u5E94\u7684\u6807\u7B7E\u9875</td><td><code>(file: UploadFile) => void</code></td><td>-</td></tr><tr><td><code>[transformFile]</code></td><td>\u5728\u4E0A\u4F20\u4E4B\u524D\u8F6C\u6362\u6587\u4EF6\u3002\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A Observable \u5BF9\u8C61</td><td><code>(file: UploadFile) => UploadTransformFileType</code></td><td>-</td></tr><tr><td><code>[change]</code></td><td>\u4E0A\u4F20\u6587\u4EF6\u6539\u53D8\u65F6\u7684\u72B6\u6001</td><td><code>(args: UploadChangeParam) => void</code></td><td>-</td></tr></tbody></table>',meta:{title:"upload",subtitle:"\u4E0A\u4F20",type:"Non-built-in widgets"},toc:[{id:"\u5BFC\u5165\u6A21\u5757",title:"\u5BFC\u5165\u6A21\u5757",h:2},{id:"\u6CE8\u610F\u4E8B\u9879",title:"\u6CE8\u610F\u4E8B\u9879",h:2},{id:"API",title:"API",h:2,children:[{id:"schema\u5C5E\u6027",title:"schema \u5C5E\u6027",h:3},{id:"ui\u5C5E\u6027",title:"ui \u5C5E\u6027",h:3}]}]}},demo:!0},this.codes=[{id:"form-upload-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';
import { SFSchema } from '@delon/form';
import type { SFUploadWidgetSchema } from '@delon/form/widgets/upload';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-upload-simple',
  template: \` <sf [schema]="schema" (formSubmit)="submit($event)"></sf> \`,
})
export class FormUploadSimpleComponent {
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
              resource_id: 1,
            },
          },
        ],
        ui: {
          widget: 'upload',
          action: '/upload',
          resReName: 'resource_id',
          urlReName: 'url',
        } as SFUploadWidgetSchema,
      },
      mulit: {
        type: 'string',
        title: '\u591A\u4E2A\u6587\u4EF6',
        ui: {
          widget: 'upload',
          action: '/upload',
          resReName: 'resource_id',
          urlReName: 'url',
          multiple: true,
        } as SFUploadWidgetSchema,
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
          type: 'drag',
        } as SFUploadWidgetSchema,
      },
    },
  };

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormUploadSimpleComponent",point:0,name:"simple",urls:"packages/form/widgets/upload/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-upload"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-upload-simple"),i(7,`
        `),c(),i(8,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id))},dependencies:[w,C,k,F,Le],encapsulation:2});let n=e;return n})();var Je=(()=>{let e=class e{constructor(o){this.msg=o,this.schema={properties:{json:{type:"string",title:"JSON",default:'{"string": "abc","number": 1 }',ui:{widget:"monaco-editor",options:{language:"json"}}}}}}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-monaco-editor-simple"]],decls:1,vars:1,consts:[[3,"schema","formSubmit"]],template:function(t,d){t&1&&(r(0,"sf",0),h("formSubmit",function(u){return d.submit(u)}),c()),t&2&&a("schema",d.schema)},dependencies:[f],encapsulation:2});let n=e;return n})();var Ge=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/widgets-third/monaco-editor/index.en-US.md","zh-CN":"packages/form/widgets-third/monaco-editor/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Markdown Editor</p><h2 id="HowtoUse"><a class="lake-link"><i data-anchor="HowtoUse"></i></a>How to Use</h2><p><strong>Installation dependencies</strong>  </p><p><code>yarn add @ng-util/monaco-editor</code></p><p><strong>Import module</strong>    </p><ul><li><ol><li><p>Import <code>NuMonacoEditorModule.forRoot()</code> in <code>app.module.ts</code></p></li></ol></li><li><ol><li><p>Import <code>MonacoEditorWidgetModule</code> in <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11">json-schema.module.ts</a>.</p></li></ol></li></ul><blockquote><p>For more Monaco Editor configuration, please refer to <a target="_blank" href="https://github.com/ng-util/ng-util/blob/master/packages/monaco-editor/README.md#usage" data-url="https://github.com/ng-util/ng-util/blob/master/packages/monaco-editor/README.md#usage">@ng-util/monaco-editor</a>.</p></blockquote></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[options]</code></td><td>Configuration options, <a target="_blank" href="https://microsoft.github.io/monaco-editor/docs.html" data-url="https://microsoft.github.io/monaco-editor/docs.html">official website</a></td><td><code>monaco.editor.IStandaloneEditorConstructionOptions</code></td><td>-</td></tr><tr><td><code>[delay]</code></td><td>Time of lazy loading</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[change]</code></td><td>Callback function when content in editor is changed</td><td><code>(value: string) => void</code></td><td>-</td></tr><tr><td><code>[height]</code></td><td>Height of monaco editor</td><td><code>string</code></td><td><code>200px</code></td></tr><tr><td><code>[model]</code></td><td>Model of monaco editor</td><td><code>NuMonacoEditorModel</code></td><td>-</td></tr><tr><td><code>(event)</code></td><td>Event callback</td><td><code>EventEmitter&lt;NuMonacoEditorEvent></code></td><td>-</td></tr></tbody></table>',meta:{title:"monaco-editor",subtitle:"Monaco Editor",type:"Third Widgets"},toc:[{id:"HowtoUse",title:"How to Use",h:2},{id:"API",title:"API",h:2,children:[{id:"ui",title:"ui",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>Markdown\u7F16\u8F91\u5668\u3002</p><h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p><strong>\u5B89\u88C5\u4F9D\u8D56</strong>  </p><p><code>yarn add @ng-util/monaco-editor</code></p><p><strong>\u5BFC\u5165\u6A21\u5757</strong></p><ul><li><p>1\u3001\u5728 <code>app.module.ts</code> \u4E0B\u5BFC\u5165 <code>NuMonacoEditorModule.forRoot()</code></p></li><li><p>2\u3001\u5728 <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11">json-schema.module.ts</a> \u5BFC\u5165 <code>MonacoEditorWidgetModule</code>\u3002</p></li></ul><blockquote><p>\u5173\u4E8E\u66F4\u591A Monaco Editor \u914D\u7F6E\u8BF7\u53C2\u8003 <a target="_blank" href="https://github.com/ng-util/ng-util/blob/master/packages/monaco-editor/README.md#usage" data-url="https://github.com/ng-util/ng-util/blob/master/packages/monaco-editor/README.md#usage">@ng-util/monaco-editor</a>\u3002</p></blockquote></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="ui\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[options]</code></td><td>\u914D\u7F6E\u9879\u8BF4\u660E\uFF0C<a target="_blank" href="https://microsoft.github.io/monaco-editor/docs.html" data-url="https://microsoft.github.io/monaco-editor/docs.html">\u89C1\u5B98\u7F51</a></td><td><code>monaco.editor.IStandaloneEditorConstructionOptions</code></td><td>-</td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u52A0\u8F7D\u65F6\u95F4</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[change]</code></td><td>\u7F16\u8F91\u5668\u5185\u5BB9\u53D1\u751F\u6539\u53D8\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td><code>(value: string) => void</code></td><td>-</td></tr><tr><td><code>[height]</code></td><td>Height of monaco editor</td><td><code>string</code></td><td><code>200px</code></td></tr><tr><td><code>[model]</code></td><td>Model of monaco editor</td><td><code>NuMonacoEditorModel</code></td><td>-</td></tr><tr><td><code>(event)</code></td><td>Event callback</td><td><code>EventEmitter&lt;NuMonacoEditorEvent></code></td><td>-</td></tr></tbody></table>',meta:{title:"monaco-editor",subtitle:"Monaco Editor",type:"Third Widgets"},toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528",h:2},{id:"API",title:"API",h:2,children:[{id:"ui\u5C5E\u6027",title:"ui \u5C5E\u6027",h:3}]}]}},demo:!0},this.codes=[{id:"form-monaco-editor-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';

import { SFSchema } from '@delon/form';
import type { MonacoEditorWidgetSchema } from '@delon/form/widgets-third/monaco-editor';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-monaco-editor-simple',
  template: \`<sf [schema]="schema" (formSubmit)="submit($event)" />\`
})
export class FormMonacoEditorSimpleComponent {
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

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormMonacoEditorSimpleComponent",point:0,name:"simple",urls:"packages/form/widgets-third/monaco-editor/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-monaco-editor"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-monaco-editor-simple"),i(7,`
        `),c(),i(8,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id))},dependencies:[w,C,k,F,Je],encapsulation:2});let n=e;return n})();var $e=(()=>{let e=class e{constructor(o){this.msg=o,this.schema={properties:{remark:{type:"string",title:"\u63CF\u8FF0",ui:{widget:"tinymce"}}}}}submit(o){this.msg.success(JSON.stringify(o))}};e.\u0275fac=function(t){return new(t||e)(g(b))},e.\u0275cmp=l({type:e,selectors:[["form-tinymce-simple"]],decls:1,vars:1,consts:[[3,"schema","formSubmit"]],template:function(t,d){t&1&&(r(0,"sf",0),h("formSubmit",function(u){return d.submit(u)}),c()),t&2&&a("schema",d.schema)},dependencies:[f],encapsulation:2});let n=e;return n})();var Qe=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/form/widgets-third/tinymce/index.en-US.md","zh-CN":"packages/form/widgets-third/tinymce/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Tinymce rich text.</p><h2 id="HowtoUse"><a class="lake-link"><i data-anchor="HowtoUse"></i></a>How to Use</h2><p><strong>Installation dependencies</strong>  </p><p>Since the Tinymce editor relies on a third-party plug-in <a target="_blank" href="https://github.com/cipchk/ngx-tinymce" data-url="https://github.com/cipchk/ngx-tinymce">ngx-tinymce</a>, the dependency should be installed first when using it</p><p><code>npm i -S ngx-tinymce</code></p><p><strong>Import module</strong>    </p><ul><li><ol><li><p>Import <code>NgxTinymceModule.forRoot()</code> in <code>app.module.ts</code></p></li></ol></li><li><ol><li><p>Import <code>TinymceWidgetModule</code> in <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11">json-schema.module.ts</a>.</p></li></ol></li></ul><blockquote><p>For more tinymce configuration, please refer to <a target="_blank" href="https://github.com/cipchk/ngx-tinymce" data-url="https://github.com/cipchk/ngx-tinymce">ngx-tinymce</a>.</p></blockquote></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="ui"><a class="lake-link"><i data-anchor="ui"></i></a>ui</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>config</td><td><code>any</code></td><td></td><td>see <a target="_blank" href="https://www.tinymce.com/docs/configure/integration-and-setup/" data-url="https://www.tinymce.com/docs/configure/integration-and-setup/">configure</a></td></tr><tr><td>loading</td><td><code>string,TemplateRef</code></td><td>-</td><td>Loading status of tinymce</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td>Set tinymce mode is <code>readonly</code> if <code>true</code></td></tr><tr><td>inline</td><td><code>boolean</code></td><td><code>false</code></td><td>Inline editor</td></tr><tr><td>delay</td><td><code>number</code></td><td>0</td><td>Delayed rendering, unit is 'millisecond'</td></tr><tr><td>placeholder</td><td><code>string</code></td><td>-</td><td>Placeholder for tinymce, <strong>NOTE:</strong> dependent on <a target="_blank" href="https://github.com/mohan/tinymce-placeholder" data-url="https://github.com/mohan/tinymce-placeholder">tinymce-placeholder</a></td></tr><tr><td>ready</td><td><code>EventEmitter&lt;any></code></td><td>-</td><td>Tinymce ready callback</td></tr></tbody></table>`,meta:{title:"tinymce",subtitle:"Tinymce Rich Text",type:"Third Widgets"},toc:[{id:"HowtoUse",title:"How to Use",h:2},{id:"API",title:"API",h:2,children:[{id:"ui",title:"ui",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>Tinymce\u5BCC\u6587\u672C\u3002</p><h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p><strong>\u5B89\u88C5\u4F9D\u8D56</strong>  </p><p><code>npm i -S ngx-tinymce</code></p><p><strong>\u5BFC\u5165\u6A21\u5757</strong></p><ul><li><p>1\u3001\u5728 <code>app.module.ts</code> \u4E0B\u5BFC\u5165 <code>NgxTinymceModule.forRoot()</code></p></li><li><p>2\u3001\u5728 <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11">json-schema.module.ts</a> \u5BFC\u5165 <code>TinymceWidgetModule</code>\u3002</p></li></ul><blockquote><p>\u5173\u4E8E\u66F4\u591A tinymce \u914D\u7F6E\u8BF7\u53C2\u8003 <a target="_blank" href="https://github.com/cipchk/ngx-tinymce" data-url="https://github.com/cipchk/ngx-tinymce">ngx-tinymce</a>\u3002</p></blockquote></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="ui\u5C5E\u6027"><a class="lake-link"><i data-anchor="ui\u5C5E\u6027"></i></a>ui \u5C5E\u6027</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>config</td><td><code>any</code></td><td></td><td>see <a target="_blank" href="https://www.tinymce.com/docs/configure/integration-and-setup/" data-url="https://www.tinymce.com/docs/configure/integration-and-setup/">configure</a></td></tr><tr><td>loading</td><td><code>string,TemplateRef</code></td><td>-</td><td>Loading status of tinymce</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td>Set tinymce mode is <code>readonly</code> if <code>true</code></td></tr><tr><td>inline</td><td><code>boolean</code></td><td><code>false</code></td><td>Inline editor</td></tr><tr><td>delay</td><td><code>number</code></td><td>0</td><td>Delayed rendering, unit is 'millisecond'</td></tr><tr><td>placeholder</td><td><code>string</code></td><td>-</td><td>Placeholder for tinymce, <strong>NOTE:</strong> dependent on <a target="_blank" href="https://github.com/mohan/tinymce-placeholder" data-url="https://github.com/mohan/tinymce-placeholder">tinymce-placeholder</a></td></tr><tr><td>ready</td><td><code>EventEmitter&lt;any></code></td><td>-</td><td>Tinymce ready callback</td></tr></tbody></table>`,meta:{title:"tinymce",subtitle:"Tinymce\u5BCC\u6587\u672C",type:"Third Widgets"},toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528",h:2},{id:"API",title:"API",h:2,children:[{id:"ui\u5C5E\u6027",title:"ui \u5C5E\u6027",h:3}]}]}},demo:!0},this.codes=[{id:"form-tinymce-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';

import { SFSchema } from '@delon/form';
import type { TinymceWidgetSchema } from '@delon/form/widgets-third/tinymce';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-tinymce-simple',
  template: \`<sf [schema]="schema" (formSubmit)="submit($event)" />\`
})
export class FormTinymceSimpleComponent {
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

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}`,lang:"ts",componentName:"FormTinymceSimpleComponent",point:0,name:"simple",urls:"packages/form/widgets-third/tinymce/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-form-tinymce"]],hostVars:2,hostBindings:function(t,d){t&2&&S("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,d){t&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),r(4,"code-box",3),i(5,`
          `),p(6,"form-tinymce-simple"),i(7,`
        `),c(),i(8,`
      `),c()()()),t&2&&(a("codes",d.codes)("item",d.item),s(1),a("nzGutter",16),s(3),a("item",d.codes[0]),v("id",d.codes[0].id))},dependencies:[w,C,k,F,$e],encapsulation:2});let n=e;return n})();var no=[{path:"",component:wt,children:[{path:"",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"customize",redirectTo:"customize/zh",pathMatch:"full"},{path:"customize/:lang",component:xt},{path:"error",redirectTo:"error/zh",pathMatch:"full"},{path:"error/:lang",component:zt},{path:"getting-started",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"getting-started/:lang",component:Tt},{path:"layout",redirectTo:"layout/zh",pathMatch:"full"},{path:"layout/:lang",component:Nt},{path:"qa",redirectTo:"qa/zh",pathMatch:"full"},{path:"qa/:lang",component:It},{path:"schema",redirectTo:"schema/zh",pathMatch:"full"},{path:"schema/:lang",component:Dt},{path:"acl",redirectTo:"acl/zh",pathMatch:"full"},{path:"acl/:lang",component:At},{path:"conditional",redirectTo:"conditional/zh",pathMatch:"full"},{path:"conditional/:lang",component:jt},{path:"i18n",redirectTo:"i18n/zh",pathMatch:"full"},{path:"i18n/:lang",component:Ut},{path:"modal",redirectTo:"modal/zh",pathMatch:"full"},{path:"modal/:lang",component:Rt},{path:"array",redirectTo:"array/zh",pathMatch:"full"},{path:"array/:lang",component:qt},{path:"boolean",redirectTo:"boolean/zh",pathMatch:"full"},{path:"boolean/:lang",component:Ht},{path:"checkbox",redirectTo:"checkbox/zh",pathMatch:"full"},{path:"checkbox/:lang",component:Gt},{path:"custom",redirectTo:"custom/zh",pathMatch:"full"},{path:"custom/:lang",component:Qt},{path:"date",redirectTo:"date/zh",pathMatch:"full"},{path:"date/:lang",component:Zt},{path:"number",redirectTo:"number/zh",pathMatch:"full"},{path:"number/:lang",component:te},{path:"object",redirectTo:"object/zh",pathMatch:"full"},{path:"object/:lang",component:oe},{path:"radio",redirectTo:"radio/zh",pathMatch:"full"},{path:"radio/:lang",component:ie},{path:"select",redirectTo:"select/zh",pathMatch:"full"},{path:"select/:lang",component:le},{path:"string",redirectTo:"string/zh",pathMatch:"full"},{path:"string/:lang",component:he},{path:"text",redirectTo:"text/zh",pathMatch:"full"},{path:"text/:lang",component:ge},{path:"textarea",redirectTo:"textarea/zh",pathMatch:"full"},{path:"textarea/:lang",component:be},{path:"autocomplete",redirectTo:"autocomplete/zh",pathMatch:"full"},{path:"autocomplete/:lang",component:Se},{path:"cascader",redirectTo:"cascader/zh",pathMatch:"full"},{path:"cascader/:lang",component:ke},{path:"color",redirectTo:"color/zh",pathMatch:"full"},{path:"color/:lang",component:we},{path:"mention",redirectTo:"mention/zh",pathMatch:"full"},{path:"mention/:lang",component:xe},{path:"qr-code",redirectTo:"qr-code/zh",pathMatch:"full"},{path:"qr-code/:lang",component:Te},{path:"rate",redirectTo:"rate/zh",pathMatch:"full"},{path:"rate/:lang",component:Ie},{path:"segmented",redirectTo:"segmented/zh",pathMatch:"full"},{path:"segmented/:lang",component:Pe},{path:"slider",redirectTo:"slider/zh",pathMatch:"full"},{path:"slider/:lang",component:Me},{path:"tag",redirectTo:"tag/zh",pathMatch:"full"},{path:"tag/:lang",component:je},{path:"time",redirectTo:"time/zh",pathMatch:"full"},{path:"time/:lang",component:Ue},{path:"transfer",redirectTo:"transfer/zh",pathMatch:"full"},{path:"transfer/:lang",component:We},{path:"tree-select",redirectTo:"tree-select/zh",pathMatch:"full"},{path:"tree-select/:lang",component:qe},{path:"upload",redirectTo:"upload/zh",pathMatch:"full"},{path:"upload/:lang",component:He},{path:"monaco-editor",redirectTo:"monaco-editor/zh",pathMatch:"full"},{path:"monaco-editor/:lang",component:Ge},{path:"tinymce",redirectTo:"tinymce/zh",pathMatch:"full"},{path:"tinymce/:lang",component:Qe}]}],Yn=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=ct({type:e}),e.\u0275inj=rt({imports:[Ft,pt.forChild(no)]});let n=e;return n})();export{Yn as FormModule};
