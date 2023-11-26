import{a as M}from"./chunk-7PCJJ67N.js";import{a as w}from"./chunk-GBHCZQSR.js";import"./chunk-2W6IW2ZO.js";import{b as B}from"./chunk-NN7RZHFY.js";import{b as T}from"./chunk-H7RO7VR3.js";import"./chunk-T7I2OBCK.js";import"./chunk-KSQL7I2A.js";import"./chunk-IRR56OTQ.js";import{s as x,t as G,u as D}from"./chunk-OZHIXC6H.js";import{R as $}from"./chunk-IX2EHRLS.js";import{Ab as v,Db as u,Ja as l,Jb as b,Ka as h,Kb as k,Ra as f,Sa as m,Ua as y,ag as C,cg as N,eg as _,fb as n,gb as i,gg as z,ha as p,hb as g,pb as s,qc as S,yb as e}from"./chunk-SBXYWWID.js";var R=(()=>{let o=class o{get newValue(){return+new Date}constructor(c,r){this.srv=c,this.msg=r,this.key="demo"}getByHttp(){this.srv.get("https://randomuser.me/api/?results=1").subscribe(c=>{this.value=c})}registerNotify(){this.notify$&&this.notify$.unsubscribe(),this.notify$=this.srv.notify(this.key).subscribe(c=>{if(c==null){this.msg.success("register success");return}this.msg.warning(`"${this.key}" new status: ${c.type}`)})}unRegisterNotify(){this.srv.cancelNotify(this.key)}ngOnDestroy(){this.notify$&&this.notify$.unsubscribe()}};o.\u0275fac=function(r){return new(r||o)(h(M),h($))},o.\u0275cmp=p({type:o,selectors:[["cache-getting-started-simple"]],standalone:!0,features:[u],decls:35,vars:3,consts:[[1,"pt-sm"],["nz-button","",3,"click"]],template:function(r,t){r&1&&(e(0,`
    `),n(1,"p"),e(2),b(3,"json"),i(),e(4,`
    `),n(5,"div",0),e(6,`
      Basic:
      `),n(7,"button",1),s("click",function(){return t.srv.set(t.key,t.newValue)}),e(8,"Set"),i(),e(9,`
      `),n(10,"button",1),s("click",function(){return t.value=t.srv.getNone(t.key)}),e(11,"Get"),i(),e(12,`
      `),n(13,"button",1),s("click",function(){return t.srv.remove(t.key)}),e(14,"Remove"),i(),e(15,`
      `),n(16,"button",1),s("click",function(){return t.srv.clear()}),e(17,"Clear"),i(),e(18,`
    `),i(),e(19,`
    `),n(20,"div",0),e(21,`
      Key is valid request:
      `),n(22,"button",1),s("click",function(){return t.getByHttp()}),e(23,"Get"),i(),e(24,`
    `),i(),e(25,`
    `),n(26,"div",0),e(27,`
      Notify:
      `),n(28,"button",1),s("click",function(){return t.registerNotify()}),e(29,"Register"),i(),e(30,`
      `),n(31,"button",1),s("click",function(){return t.unRegisterNotify()}),e(32,"UnRegister"),i(),e(33,`
    `),i(),e(34,`
  `)),r&2&&(l(2),v("value: ",k(3,1,t.value),""))},dependencies:[S,z,_,C,N],encapsulation:2});let a=o;return a})();var P=(()=>{let o=class o{constructor(){this.item={cols:1,urls:{"zh-CN":"packages/cache/docs/getting-started.md"},content:{"zh-CN":{content:`<section class="markdown"><h2 id="\u5199\u5728\u524D\u9762"><a class="lake-link"><i data-anchor="\u5199\u5728\u524D\u9762"></i></a>\u5199\u5728\u524D\u9762</h2><p>\u901A\u5E38\u628A\u4E00\u4E9B\u8FDC\u7A0B\u6570\u636E\u7F13\u5B58\u5728\u5185\u5B58\u6216 <code>localStorage</code> \u6301\u4E45\u5316\uFF0C\u76EE\u7684\u662F\u4E3A\u4E86\u51CF\u5C11 Http \u8BF7\u6C42\u7684\u6210\u672C\uFF1B\u8FD9\u6837\u7684\u6570\u636E\u901A\u5E38\u662F\u5B57\u5178\u3001\u57CE\u5E02\u6570\u636E\u7B49\u3002</p><p>\u7F13\u5B58\u7684\u83B7\u53D6\u5E94\u8BE5\u662F\u975E\u5E38\u7B80\u5355\u7684\uFF0C\u6211\u4EEC\u4E0D\u5E94\u8BE5\u628A\u65F6\u95F4\u6D6A\u8D39\u5728\u5982\u4F55\u4FDD\u8BC1\u52A0\u8F7D\u8FD9\u4EF6\u4E8B\u60C5\u4E0A\uFF0C\u56E0\u6B64 <code>@delon/cache</code> \u66F4\u591A\u662F\u4EE5<strong>\u7EA6\u5B9A</strong>\u4E3A\u524D\u63D0\u3002<code>key</code> \u4F5C\u4E3A\u7F13\u5B58\u7684\u552F\u4E00\u952E\u503C\uFF0C\u5B83\u4E0D\u5E94\u8BE5\u53EA\u662F\u5355\u7EAF\u7684\u4E00\u4E2A\u6807\u8BC6\u7B26\uFF0C\u5982\u679C\u9075\u5B88\u67D0\u79CD\u7EA6\u5B9A\u5B83\u7684\u5B58\u5728\u4F1A\u66F4\u6709\u4EF7\u503C\u3002<code>@delon/cache</code> \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E0D\u5149\u628A <code>key</code> \u5F53\u4F5C\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u540C\u65F6\u5B83\u8FD8\u662F\u4E00\u4E2A\u7528\u4E8E\u83B7\u53D6\u8FDC\u7A0B\u6570\u636E\u7684\u6709\u6548HTTP\uFF0C\u4F8B\u5982\uFF1A</p><pre class="hljs language-ts"><code>cacheService.get('/data/unit');</code></pre><p>\u5728\u4EE5\u5F80\u6211\u4EEC\u4F1A\u8BA4\u4E3A\uFF0C\u5728\u5B83\u4E4B\u524D\u5E94\u8BE5\u9700\u8981\u52A0\u4E00\u4E2A\uFF1A</p><pre class="hljs language-ts"><code>cacheService.set('/data/unit', [ '\u4E2A', '\u4EF6' ]);</code></pre><p>\u624D\u80FD\u591F\u786E\u4FDD\u83B7\u53D6\u5230\u7F13\u5B58\u6570\u636E\u3002</p><p>\u800C\u5BF9\u4E8E <code>@delon/cache</code> \u800C\u8A00\uFF0C\u4F60\u65E0\u987B <code>set</code> \u65B9\u6CD5\uFF0C\u76F4\u63A5\u4F7F\u7528 <code>get</code> \u83B7\u53D6\u5230\u5355\u4F4D\u5B57\u5178\uFF0C\u56E0\u4E3A\u6211\u4EEC\u6709\u4E00\u79CD<strong>\u7EA6\u5B9A</strong>\uFF0C\u5F53\u7F13\u5B58\u4E0D\u5B58\u5728\u900F\u8FC7 <code>key</code> \u4F5C\u4E3AHTTP\u8BF7\u6C42\u6570\u636E\u7F13\u5B58\u540E\u518D\u8FD4\u56DE\u3002</p><p>\u7F13\u5B58\u7684\u83B7\u53D6\u4E0E\u8BBE\u7F6E\u90FD\u662F\u901A\u8FC7 <a href="/cache/service" data-url="/cache/service">CacheService</a> \u6765\u64CD\u4F5C\uFF0C\u4F60\u53EA\u9700\u8981\u5C06 <code>CacheService</code> \u5BFC\u5165\u5BF9\u5E94\u7684\u7C7B\u5F53\u4E2D\u5373\u53EF\u3002</p><h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p><strong>\u5B89\u88C5</strong></p><pre class="hljs language-bash"><code>npm i -S @delon/cache</code></pre><p><strong>\u6CE8\u518C</strong></p><p>\u5728\u6839\u6A21\u5757 <code>AppModule</code> \u5BFC\u5165 <code>DelonCacheModule</code>\uFF1B</p><pre class="hljs language-ts"><code>import { DelonCacheModule } from '@delon/cache';

@NgModule({
  imports: [
    DelonCacheModule
  ]
})</code></pre><p><strong>\u6CE8</strong> \u5EFA\u8BAE\u5728\u6839\u6A21\u5757\u4E2D\u5BFC\u5165\uFF0C\u56E0\u4E3A\u5B83\u53EA\u6709 Service \u4E3A\u4E86\u9632\u6B62\u91CD\u590D\u88AB\u5BFC\u5165\u3002</p><h3 id="\u53C2\u6570"><a class="lake-link"><i data-anchor="\u53C2\u6570"></i></a>\u53C2\u6570</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[mode]</code></td><td><code>promise,none</code></td><td><code>promise</code></td><td>\u7F13\u5B58\u6A21\u5F0F\uFF1B<code>promise</code> \u7EA6\u5B9A\u6A21\u5F0F\uFF0C\u5141\u8BB8 <code>key</code> \u4F5C\u4E3A http \u83B7\u53D6\u6570\u636E\uFF1B<code>none</code> \u6B63\u5E38\u6A21\u5F0F</td><td>\u2705</td></tr><tr><td><code>[reName]</code></td><td><code>string</code></td><td>-</td><td>\u91CD\u547D\u540D\u8FD4\u56DE\u53C2\u6570\uFF0C\u4F8B\u5982\uFF1A<br> <code>null</code> \u8FD4\u56DE\u4F53\u4E3A\u5185\u5BB9<br><code>list</code> \u8FD4\u56DE\u4F53\u5E94 <code>{ list: [] }</code><br><code>result.list</code> \u8FD4\u56DE\u4F53\u5E94 <code>{ result: { list: [] } }</code></td><td>\u2705</td></tr><tr><td><code>[expire]</code></td><td><code>number</code></td><td>-</td><td>\u8BBE\u7F6E\u9ED8\u8BA4\u8FC7\u671F\u65F6\u95F4\u503C\uFF08\u5355\u4F4D\uFF1A\u79D2\uFF09</td><td>\u2705</td></tr><tr><td><code>[prefix]</code></td><td><code>string</code></td><td>-</td><td>\u6301\u4E45\u5316\u6570\u636E\u952E\u503C\u524D\u7F00</td><td>\u2705</td></tr><tr><td><code>[meta_key]</code></td><td><code>string</code></td><td><code>__cache_meta</code></td><td>\u6301\u4E45\u5316\u6570\u636E\u5143\u6570\u636E\u5B58\u50A8\u952E\u540D</td><td>\u2705</td></tr><tr><td><code>[request]</code></td><td><code>(key: string) => Observable&lt;unknown></code></td><td>-</td><td>\u81EA\u5B9A\u4E49\u8BF7\u6C42\u4F53</td><td>\u2705</td></tr></tbody></table><blockquote><p>\u53EF\u4EE5\u901A\u8FC7<a href="/docs/global-config" data-url="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\u8986\u76D6\u5B83\u4EEC\u3002</p></blockquote></section>`,meta:{order:1,title:"\u5F00\u59CB\u4F7F\u7528",type:"Documents"},toc:[{id:"\u5199\u5728\u524D\u9762",title:"\u5199\u5728\u524D\u9762",h:2},{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528",h:2,children:[{id:"\u53C2\u6570",title:"\u53C2\u6570",h:3}]}]}},demo:!0},this.codes=[{id:"cache-getting-started-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { JsonPipe } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CacheService } from '@delon/cache';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'cache-getting-started-simple',
  template: \`
    <p>value: {{ value | json }}</p>
    <div class="pt-sm">
      Basic:
      <button nz-button (click)="srv.set(key, newValue)">Set</button>
      <button nz-button (click)="value = srv.getNone(key)">Get</button>
      <button nz-button (click)="srv.remove(key)">Remove</button>
      <button nz-button (click)="srv.clear()">Clear</button>
    </div>
    <div class="pt-sm">
      Key is valid request:
      <button nz-button (click)="getByHttp()">Get</button>
    </div>
    <div class="pt-sm">
      Notify:
      <button nz-button (click)="registerNotify()">Register</button>
      <button nz-button (click)="unRegisterNotify()">UnRegister</button>
    </div>
  \`,
  standalone: true,
  imports: [JsonPipe, NzButtonModule]
})
export class CacheGettingStartedSimpleComponent implements OnDestroy {
  value: any;
  key = 'demo';
  private notify$?: Subscription;

  get newValue(): number {
    return +new Date();
  }

  constructor(
    public srv: CacheService,
    private msg: NzMessageService
  ) {}

  getByHttp(): void {
    this.srv.get(\`https://randomuser.me/api/?results=1\`).subscribe(res => {
      this.value = res;
    });
  }

  registerNotify(): void {
    if (this.notify$) this.notify$.unsubscribe();
    this.notify$ = this.srv.notify(this.key).subscribe(res => {
      if (res == null) {
        this.msg.success('register success');
        return;
      }
      this.msg.warning(\`"\${this.key}" new status: \${res.type}\`);
    });
  }

  unRegisterNotify(): void {
    this.srv.cancelNotify(this.key);
  }

  ngOnDestroy(): void {
    if (this.notify$) this.notify$.unsubscribe();
  }
}`,lang:"ts",componentName:"CacheGettingStartedSimpleComponent",point:0,name:"simple",urls:"packages/cache/docs/demo/simple.md",type:"demo"}]}};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=p({type:o,selectors:[["app-cache-getting-started"]],hostVars:2,hostBindings:function(r,t){r&2&&y("d-block","true")},standalone:!0,features:[u],decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(r,t){r&1&&(n(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),n(4,"code-box",3),e(5,`
          `),g(6,"cache-getting-started-simple"),e(7,`
        `),i(),e(8,`
      `),i()()()),r&2&&(m("codes",t.codes)("item",t.item),l(1),m("nzGutter",16),l(3),m("item",t.codes[0]),f("id",t.codes[0].id))},dependencies:[B,w,R,D,G,x],encapsulation:2});let a=o;return a})();var j=(()=>{let o=class o{get newValue(){return+new Date}constructor(c,r){this.srv=c,this.msg=r,this.key="demo"}getByHttp(){this.srv.get("https://randomuser.me/api/?results=1").subscribe(c=>{this.value=c})}registerNotify(){this.notify$&&this.notify$.unsubscribe(),this.notify$=this.srv.notify(this.key).subscribe(c=>{if(c==null){this.msg.success("register success");return}this.msg.warning(`"${this.key}" new status: ${c.type}`)})}unRegisterNotify(){this.srv.cancelNotify(this.key)}ngOnDestroy(){this.notify$&&this.notify$.unsubscribe()}};o.\u0275fac=function(r){return new(r||o)(h(M),h($))},o.\u0275cmp=p({type:o,selectors:[["cache-service-simple"]],standalone:!0,features:[u],decls:35,vars:3,consts:[[1,"pt-sm"],["nz-button","",3,"click"]],template:function(r,t){r&1&&(e(0,`
    `),n(1,"p"),e(2),b(3,"json"),i(),e(4,`
    `),n(5,"div",0),e(6,`
      Basic:
      `),n(7,"button",1),s("click",function(){return t.srv.set(t.key,t.newValue)}),e(8,"Set"),i(),e(9,`
      `),n(10,"button",1),s("click",function(){return t.value=t.srv.getNone(t.key)}),e(11,"Get"),i(),e(12,`
      `),n(13,"button",1),s("click",function(){return t.srv.remove(t.key)}),e(14,"Remove"),i(),e(15,`
      `),n(16,"button",1),s("click",function(){return t.srv.clear()}),e(17,"Clear"),i(),e(18,`
    `),i(),e(19,`
    `),n(20,"div",0),e(21,`
      Key is valid request:
      `),n(22,"button",1),s("click",function(){return t.getByHttp()}),e(23,"Get"),i(),e(24,`
    `),i(),e(25,`
    `),n(26,"div",0),e(27,`
      Notify:
      `),n(28,"button",1),s("click",function(){return t.registerNotify()}),e(29,"Register"),i(),e(30,`
      `),n(31,"button",1),s("click",function(){return t.unRegisterNotify()}),e(32,"UnRegister"),i(),e(33,`
    `),i(),e(34,`
  `)),r&2&&(l(2),v("value: ",k(3,1,t.value),""))},dependencies:[S,z,_,C,N],encapsulation:2});let a=o;return a})();var q=(()=>{let o=class o{constructor(){this.item={cols:1,urls:{"zh-CN":"packages/cache/docs/service.md"},content:{"zh-CN":{content:'<section class="markdown"></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="set"><a class="lake-link"><i data-anchor="set"></i></a>set()</h3><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>key</code></td><td><code>string</code></td><td>\u7F13\u5B58\u552F\u4E00\u6807\u8BC6\u7B26</td></tr><tr><td><code>data</code></td><td><code>any | Observable&lt;any></code></td><td>\u7F13\u5B58\u6570\u636E\u6E90\uFF0C\u6570\u636E\u6E90\u4E3A <code>Observable</code> \u65F6\uFF0C\u4F9D\u7136\u8FD4\u56DE <code>Observable</code>\uFF0C\u5426\u5219\u8FD4\u56DE <code>void</code></td></tr><tr><td><code>options</code></td><td><code>{ type?: 'm' | 's', expire?: number, emitNotify?: boolean }</code></td><td><code>type</code> \u5B58\u50A8\u7C7B\u578B\uFF0C'm' \u8868\u793A\u5185\u5B58\uFF0C's' \u8868\u793A\u6301\u4E45<br><code>expire</code> \u8FC7\u671F\u65F6\u95F4\uFF0C\u5355\u4F4D <code>\u79D2</code></td></tr></tbody></table><h3 id="get"><a class="lake-link"><i data-anchor="get"></i></a>get()</h3><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>key</code></td><td><code>string</code></td><td>\u7F13\u5B58\u552F\u4E00\u6807\u8BC6\u7B26</td></tr><tr><td><code>options</code></td><td><code>{ mode?: 'promise' | 'none', type?: 'm' | 's', expire?: number, emitNotify?: boolean }</code></td><td><code>mode</code> \u6307\u5B9A\u83B7\u53D6\u7F13\u5B58\u7684\u6A21\u5F0F\uFF1A<br>1\u3001<code>promise</code> \u8868\u793A\u82E5\u4E0D\u5B58 <code>key</code> \u5219\u628A <code>key</code> \u5F53URL\u53D1\u8D77\u8BF7\u6C42\u5E76\u7F13\u5B58\u4E14\u8FD4\u56DE Observable<br>2\u3001<code>none</code> \u8868\u793A\u76F4\u63A5\u8FD4\u56DE\u6570\u636E\u82E5KEY\u4E0D\u5B58\u5728\u5219\u76F4\u63A5\u8FD4\u56DE <code>null</code><br><br><code>type</code> \u5B58\u50A8\u7C7B\u578B\uFF0C'm' \u8868\u793A\u5185\u5B58\uFF0C's' \u8868\u793A\u6301\u4E45<br><code>expire</code> \u8FC7\u671F\u65F6\u95F4\uFF0C\u5355\u4F4D <code>\u79D2</code></td></tr></tbody></table><h3 id="getNone"><a class="lake-link"><i data-anchor="getNone"></i></a>getNone()</h3><p>\u83B7\u53D6\u7F13\u5B58\u6570\u636E\uFF0C\u82E5 <code>key</code> \u4E0D\u5B58\u5728\u6216\u5DF2\u8FC7\u671F\u5219\u8FD4\u56DE null\u3002</p><h3 id="tryGet"><a class="lake-link"><i data-anchor="tryGet"></i></a>tryGet()</h3><p>\u83B7\u53D6\u7F13\u5B58\uFF0C\u82E5\u4E0D\u5B58\u5728\u5219\u8BBE\u7F6E\u7F13\u5B58\u5BF9\u8C61\uFF0C\u53C2\u6570\u7B49\u540C <code>set()</code>\u3002</p><h3 id="has"><a class="lake-link"><i data-anchor="has"></i></a>has()</h3><p>\u662F\u5426\u7F13\u5B58 <code>key</code>\u3002</p><h3 id="remove"><a class="lake-link"><i data-anchor="remove"></i></a>remove()</h3><p>\u79FB\u9664\u7F13\u5B58 <code>key</code>\u3002</p><h3 id="clear"><a class="lake-link"><i data-anchor="clear"></i></a>clear()</h3><p>\u6E05\u7A7A\u6240\u6709\u7F13\u5B58\u3002</p><h3 id="notify"><a class="lake-link"><i data-anchor="notify"></i></a>notify()</h3><p><code>key</code> \u76D1\u542C\uFF0C\u5F53 <code>key</code> \u53D8\u66F4\u3001\u8FC7\u671F\u3001\u79FB\u9664\u65F6\u901A\u77E5\uFF0C\u6CE8\u610F\u4EE5\u4E0B\u82E5\u5E72\u7EC6\u8282\uFF1A</p><ul><li><p>\u8C03\u7528\u540E\u9664\u518D\u6B21\u8C03\u7528 <code>cancelNotify</code> \u5426\u5219\u6C38\u8FDC\u4E0D\u8FC7\u671F</p></li><li><p>\u76D1\u542C\u5668\u6BCF <code>freq</code> (\u9ED8\u8BA4\uFF1A3\u79D2) \u6267\u884C\u4E00\u6B21\u8FC7\u671F\u68C0\u67E5</p></li></ul><h3 id="cancelNotify"><a class="lake-link"><i data-anchor="cancelNotify"></i></a>cancelNotify()</h3><p>\u53D6\u6D88 <code>key</code> \u76D1\u542C</p><h3 id="hasNotify"><a class="lake-link"><i data-anchor="hasNotify"></i></a>hasNotify()</h3><p><code>key</code> \u662F\u5426\u5DF2\u7ECF\u76D1\u542C</p><h3 id="clearNotify"><a class="lake-link"><i data-anchor="clearNotify"></i></a>clearNotify()</h3><p>\u6E05\u7A7A\u6240\u6709 <code>key</code> \u7684\u76D1\u542C</p><h3 id="freq"><a class="lake-link"><i data-anchor="freq"></i></a>freq()</h3><p>\u8BBE\u7F6E\u76D1\u542C\u9891\u7387\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2\u4E14\u6700\u4F4E <code>20ms</code>\uFF0C\u9ED8\u8BA4\uFF1A<code>3000ms</code>\u3002</p><h2 id="get\u548CtryGet\u7684\u533A\u522B"><a class="lake-link"><i data-anchor="get\u548CtryGet\u7684\u533A\u522B"></i></a><code>get</code> \u548C <code>tryGet</code> \u7684\u533A\u522B</h2><p>\u672C\u8D28\u90FD\u662F\u83B7\u53D6\u5E76\u8FD4\u56DE\u7F13\u5B58\u6570\u636E\uFF0C<code>get</code> \u76F8\u6BD4 <code>tryGet</code> \u66F4\u7B80\u5316\uFF0C\u524D\u8005\u6309KEY\u5373\u662FURL\u7EA6\u5B9A\u7684\u98CE\u683C\uFF0C\u540E\u8005\u9700\u6307\u5B9A\u6570\u636E\u6E90\u5BF9\u8C61\u3002</p><h2 id="\u9177\u64CD\u4F5C"><a class="lake-link"><i data-anchor="\u9177\u64CD\u4F5C"></i></a>\u9177\u64CD\u4F5C</h2><h3 id="async\u7BA1\u9053"><a class="lake-link"><i data-anchor="async\u7BA1\u9053"></i></a>async \u7BA1\u9053</h3><p>RxJS \u548C <code>async</code> \u7BA1\u9053\u4E8C\u8005\u7684\u914D\u5408\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u975E\u5E38\u53CB\u597D\u7684\u4F7F\u7528\u7F13\u5B58\u6570\u636E\uFF0C\u4F8B\u5982\uFF1A</p><pre class="hljs language-ts"><code>@Component({
  template: \`
    @for (unit of units | async; track $index) {
      &lt;li&gt;{{unit}}&lt;/li&gt;
    }\`
})
export class Component {
  units: this.srv.get('/data/unit')
}</code></pre><h3 id="\u7F13\u5B58\u4E0E\u8BF7\u6C42"><a class="lake-link"><i data-anchor="\u7F13\u5B58\u4E0E\u8BF7\u6C42"></i></a>\u7F13\u5B58\u4E0E\u8BF7\u6C42</h3><p>\u6709\u65F6\u9700\u8981\u4F9D\u8D56\u5B57\u5178\u83B7\u53D6\u8FDC\u7A0B\u6570\u636E\u65F6\uFF1A</p><pre class="hljs language-ts"><code>this.srv
  .get('/data/unit')
  .pipe(
    map(units => this.http.get(\`/trade?unit=\${units}\`))
  );</code></pre>`,meta:{order:2,title:"CacheService",type:"Documents"},toc:[{id:"API",title:"API",h:2,children:[{id:"set",title:"set()",h:3},{id:"get",title:"get()",h:3},{id:"getNone",title:"getNone()",h:3},{id:"tryGet",title:"tryGet()",h:3},{id:"has",title:"has()",h:3},{id:"remove",title:"remove()",h:3},{id:"clear",title:"clear()",h:3},{id:"notify",title:"notify()",h:3},{id:"cancelNotify",title:"cancelNotify()",h:3},{id:"hasNotify",title:"hasNotify()",h:3},{id:"clearNotify",title:"clearNotify()",h:3},{id:"freq",title:"freq()",h:3}]},{id:"get\u548CtryGet\u7684\u533A\u522B",title:"get \u548C tryGet \u7684\u533A\u522B",h:2},{id:"\u9177\u64CD\u4F5C",title:"\u9177\u64CD\u4F5C",h:2,children:[{id:"async\u7BA1\u9053",title:"async \u7BA1\u9053",h:3},{id:"\u7F13\u5B58\u4E0E\u8BF7\u6C42",title:"\u7F13\u5B58\u4E0E\u8BF7\u6C42",h:3}]}]}},demo:!0},this.codes=[{id:"cache-service-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { JsonPipe } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CacheService } from '@delon/cache';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'cache-service-simple',
  template: \`
    <p>value: {{ value | json }}</p>
    <div class="pt-sm">
      Basic:
      <button nz-button (click)="srv.set(key, newValue)">Set</button>
      <button nz-button (click)="value = srv.getNone(key)">Get</button>
      <button nz-button (click)="srv.remove(key)">Remove</button>
      <button nz-button (click)="srv.clear()">Clear</button>
    </div>
    <div class="pt-sm">
      Key is valid request:
      <button nz-button (click)="getByHttp()">Get</button>
    </div>
    <div class="pt-sm">
      Notify:
      <button nz-button (click)="registerNotify()">Register</button>
      <button nz-button (click)="unRegisterNotify()">UnRegister</button>
    </div>
  \`,
  standalone: true,
  imports: [JsonPipe, NzButtonModule]
})
export class CacheServiceSimpleComponent implements OnDestroy {
  value: any;
  key = 'demo';
  private notify$?: Subscription;

  get newValue(): number {
    return +new Date();
  }

  constructor(
    public srv: CacheService,
    private msg: NzMessageService
  ) {}

  getByHttp(): void {
    this.srv.get(\`https://randomuser.me/api/?results=1\`).subscribe(res => {
      this.value = res;
    });
  }

  registerNotify(): void {
    if (this.notify$) this.notify$.unsubscribe();
    this.notify$ = this.srv.notify(this.key).subscribe(res => {
      if (res == null) {
        this.msg.success('register success');
        return;
      }
      this.msg.warning(\`"\${this.key}" new status: \${res.type}\`);
    });
  }

  unRegisterNotify(): void {
    this.srv.cancelNotify(this.key);
  }

  ngOnDestroy(): void {
    if (this.notify$) this.notify$.unsubscribe();
  }
}`,lang:"ts",componentName:"CacheServiceSimpleComponent",point:0,name:"simple",urls:"packages/cache/docs/demo/simple.md",type:"demo"}]}};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=p({type:o,selectors:[["app-cache-service"]],hostVars:2,hostBindings:function(r,t){r&2&&y("d-block","true")},standalone:!0,features:[u],decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(r,t){r&1&&(n(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),n(4,"code-box",3),e(5,`
          `),g(6,"cache-service-simple"),e(7,`
        `),i(),e(8,`
      `),i()()()),r&2&&(m("codes",t.codes)("item",t.item),l(1),m("nzGutter",16),l(3),m("item",t.codes[0]),f("id",t.codes[0].id))},dependencies:[B,w,j,D,G,x],encapsulation:2});let a=o;return a})();var ae=[{path:"",component:T,children:[{path:"",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"getting-started",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"getting-started/:lang",component:P},{path:"service",redirectTo:"service/zh",pathMatch:"full"},{path:"service/:lang",component:q}]}];export{ae as routes};
