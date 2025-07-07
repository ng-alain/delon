import{a as B}from"./chunk-SQSFP2NC.js";import"./chunk-MKMQ53XO.js";import{a as T}from"./chunk-QH6LWHB6.js";import{a as ne}from"./chunk-MKWK23US.js";import"./chunk-GEZ532TA.js";import"./chunk-TWWSUF4P.js";import"./chunk-HIIF36CB.js";import{q as E,r as D}from"./chunk-G2KCB6QS.js";import{P as w}from"./chunk-EEXBANEL.js";import{Bd as J,Eg as x,Fb as a,Gg as _,Ig as z,Jc as N,Jd as M,Lg as ie,Ma as l,Sa as d,Sc as Z,Vb as t,Xb as b,Yc as ee,Z as A,Za as p,a as q,ca as Q,ea as X,ga as h,hb as y,ib as m,jc as C,k as U,kb as v,kc as S,m as Y,u as V,wb as o,wd as te,xb as r,y as L,yb as g,yg as k}from"./chunk-SCDKUK6D.js";var oe=new X("DC_STORE_STORAGE_TOKEN",{providedIn:"root",factory:()=>new K}),K=class{platform=h(M);get(e){return this.platform.isBrowser&&JSON.parse(localStorage.getItem(e)||"null")||null}set(e,n){return this.platform.isBrowser&&localStorage.setItem(e,JSON.stringify(n)),!0}remove(e){this.platform.isBrowser&&localStorage.removeItem(e)}};var u=class c{store=h(oe);http=h(ee);platform=h(M);memory=new Map;notifyBuffer=new Map;meta=new Set;freqTick=3e3;freqTime;cog=h(J).merge("cache",{mode:"promise",reName:"",prefix:"",meta_key:"__cache_meta"});constructor(){this.platform.isBrowser&&(this.loadMeta(),this.startExpireNotify())}pushMeta(e){this.meta.has(e)||(this.meta.add(e),this.saveMeta())}removeMeta(e){this.meta.has(e)&&(this.meta.delete(e),this.saveMeta())}loadMeta(){let e=this.store.get(this.cog.meta_key);e&&e.v&&e.v.forEach(n=>this.meta.add(n))}saveMeta(){let e=[];this.meta.forEach(n=>e.push(n)),this.store.set(this.cog.meta_key,{v:e,e:0})}getMeta(){return this.meta}set(e,n,i={}){if(!this.platform.isBrowser)return;let s=0,{type:f,expire:le}=this.cog;i=q({type:f,expire:le},i),i.expire&&(s=ie(new Date,i.expire).valueOf());let W=i.emitNotify!==!1;if(!(n instanceof U)){this.save(i.type,e,{v:n,e:s},W);return}return n.pipe(A(pe=>{this.save(i.type,e,{v:pe,e:s},W)}))}save(e,n,i,s=!0){e==="m"?this.memory.set(n,i):(this.store.set(this.cog.prefix+n,i),this.pushMeta(n)),s&&this.runNotify(n,"set")}get(e,n={}){if(!this.platform.isBrowser)return null;let i=n.mode!=="none"&&this.cog.mode==="promise",s=this.memory.has(e)?this.memory.get(e):this.store.get(this.cog.prefix+e);return!s||s.e&&s.e>0&&s.e<new Date().valueOf()?i?(this.cog.request?this.cog.request(e):this.http.get(e)).pipe(L(f=>te(f,this.cog.reName,f)),A(f=>this.set(e,f,{type:n.type,expire:n.expire,emitNotify:n.emitNotify}))):null:i?V(s.v):s.v}getNone(e){return this.get(e,{mode:"none"})}tryGet(e,n,i={}){if(!this.platform.isBrowser)return null;let s=this.getNone(e);return s===null?n instanceof U?this.set(e,n,i):(this.set(e,n,i),n):V(s)}has(e){return this.memory.has(e)||this.meta.has(e)}_remove(e,n){if(n&&this.runNotify(e,"remove"),this.memory.has(e)){this.memory.delete(e);return}this.store.remove(this.cog.prefix+e),this.removeMeta(e)}remove(e){this.platform.isBrowser&&this._remove(e,!0)}clear(){this.platform.isBrowser&&(this.notifyBuffer.forEach((e,n)=>this.runNotify(n,"remove")),this.memory.clear(),this.meta.forEach(e=>this.store.remove(this.cog.prefix+e)))}set freq(e){this.freqTick=Math.max(20,e),this.abortExpireNotify(),this.startExpireNotify()}startExpireNotify(){this.checkExpireNotify(),this.runExpireNotify()}runExpireNotify(){this.freqTime=setTimeout(()=>{this.checkExpireNotify(),this.runExpireNotify()},this.freqTick)}checkExpireNotify(){let e=[];this.notifyBuffer.forEach((n,i)=>{this.has(i)&&this.getNone(i)===null&&e.push(i)}),e.forEach(n=>{this.runNotify(n,"expire"),this._remove(n,!1)})}abortExpireNotify(){clearTimeout(this.freqTime)}runNotify(e,n){this.notifyBuffer.has(e)&&this.notifyBuffer.get(e).next({type:n,value:this.getNone(e)})}notify(e){if(!this.notifyBuffer.has(e)){let n=new Y(this.getNone(e));this.notifyBuffer.set(e,n)}return this.notifyBuffer.get(e).asObservable()}cancelNotify(e){this.notifyBuffer.has(e)&&(this.notifyBuffer.get(e).unsubscribe(),this.notifyBuffer.delete(e))}hasNotify(e){return this.notifyBuffer.has(e)}clearNotify(){this.notifyBuffer.forEach(e=>e.unsubscribe()),this.notifyBuffer.clear()}ngOnDestroy(){this.memory.clear(),this.abortExpireNotify(),this.clearNotify()}static \u0275fac=function(n){return new(n||c)};static \u0275prov=Q({token:c,factory:c.\u0275fac,providedIn:"root"})};var me=new Z(()=>({}));var G=class c{constructor(e,n){this.srv=e;this.msg=n}value;key="demo";notify$;get newValue(){return+new Date}getByHttp(){this.srv.get("https://randomuser.me/api/?results=1").subscribe(e=>{this.value=e})}registerNotify(){this.notify$&&this.notify$.unsubscribe(),this.notify$=this.srv.notify(this.key).subscribe(e=>{if(e==null){this.msg.success("register success");return}this.msg.warning(`"${this.key}" new status: ${e.type}`)})}unRegisterNotify(){this.srv.cancelNotify(this.key)}ngOnDestroy(){this.notify$&&this.notify$.unsubscribe()}static \u0275fac=function(n){return new(n||c)(d(u),d(w))};static \u0275cmp=p({type:c,selectors:[["cache-getting-started-simple"]],decls:35,vars:3,consts:[[1,"pt-sm"],["nz-button","",3,"click"]],template:function(n,i){n&1&&(t(0,`
    `),o(1,"p"),t(2),C(3,"json"),r(),t(4,`
    `),o(5,"div",0),t(6,`
      Basic:
      `),o(7,"button",1),a("click",function(){return i.srv.set(i.key,i.newValue)}),t(8,"Set"),r(),t(9,`
      `),o(10,"button",1),a("click",function(){return i.value=i.srv.getNone(i.key)}),t(11,"Get"),r(),t(12,`
      `),o(13,"button",1),a("click",function(){return i.srv.remove(i.key)}),t(14,"Remove"),r(),t(15,`
      `),o(16,"button",1),a("click",function(){return i.srv.clear()}),t(17,"Clear"),r(),t(18,`
    `),r(),t(19,`
    `),o(20,"div",0),t(21,`
      Key is valid request:
      `),o(22,"button",1),a("click",function(){return i.getByHttp()}),t(23,"Get"),r(),t(24,`
    `),r(),t(25,`
    `),o(26,"div",0),t(27,`
      Notify:
      `),o(28,"button",1),a("click",function(){return i.registerNotify()}),t(29,"Register"),r(),t(30,`
      `),o(31,"button",1),a("click",function(){return i.unRegisterNotify()}),t(32,"UnRegister"),r(),t(33,`
    `),r(),t(34,`
  `)),n&2&&(l(2),b("value: ",S(3,1,i.value),""))},dependencies:[N,z,_,k,x],encapsulation:2})};var $=class c{item={cols:1,urls:{"zh-CN":"packages/cache/docs/getting-started.md"},content:{"zh-CN":{content:`<section class="markdown"><h2 id="\u5199\u5728\u524D\u9762"><a class="lake-link"><i data-anchor="\u5199\u5728\u524D\u9762"></i></a>\u5199\u5728\u524D\u9762</h2><p>\u901A\u5E38\u628A\u4E00\u4E9B\u8FDC\u7A0B\u6570\u636E\u7F13\u5B58\u5728\u5185\u5B58\u6216 <code>localStorage</code> \u6301\u4E45\u5316\uFF0C\u76EE\u7684\u662F\u4E3A\u4E86\u51CF\u5C11 Http \u8BF7\u6C42\u7684\u6210\u672C\uFF1B\u8FD9\u6837\u7684\u6570\u636E\u901A\u5E38\u662F\u5B57\u5178\u3001\u57CE\u5E02\u6570\u636E\u7B49\u3002</p><p>\u7F13\u5B58\u7684\u83B7\u53D6\u5E94\u8BE5\u662F\u975E\u5E38\u7B80\u5355\u7684\uFF0C\u6211\u4EEC\u4E0D\u5E94\u8BE5\u628A\u65F6\u95F4\u6D6A\u8D39\u5728\u5982\u4F55\u4FDD\u8BC1\u52A0\u8F7D\u8FD9\u4EF6\u4E8B\u60C5\u4E0A\uFF0C\u56E0\u6B64 <code>@delon/cache</code> \u66F4\u591A\u662F\u4EE5<strong>\u7EA6\u5B9A</strong>\u4E3A\u524D\u63D0\u3002<code>key</code> \u4F5C\u4E3A\u7F13\u5B58\u7684\u552F\u4E00\u952E\u503C\uFF0C\u5B83\u4E0D\u5E94\u8BE5\u53EA\u662F\u5355\u7EAF\u7684\u4E00\u4E2A\u6807\u8BC6\u7B26\uFF0C\u5982\u679C\u9075\u5B88\u67D0\u79CD\u7EA6\u5B9A\u5B83\u7684\u5B58\u5728\u4F1A\u66F4\u6709\u4EF7\u503C\u3002<code>@delon/cache</code> \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E0D\u5149\u628A <code>key</code> \u5F53\u4F5C\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u540C\u65F6\u5B83\u8FD8\u662F\u4E00\u4E2A\u7528\u4E8E\u83B7\u53D6\u8FDC\u7A0B\u6570\u636E\u7684\u6709\u6548HTTP\uFF0C\u4F8B\u5982\uFF1A</p><pre class="hljs language-ts"><code>cacheService.get('/data/unit');</code></pre><p>\u5728\u4EE5\u5F80\u6211\u4EEC\u4F1A\u8BA4\u4E3A\uFF0C\u5728\u5B83\u4E4B\u524D\u5E94\u8BE5\u9700\u8981\u52A0\u4E00\u4E2A\uFF1A</p><pre class="hljs language-ts"><code>cacheService.set('/data/unit', [ '\u4E2A', '\u4EF6' ]);</code></pre><p>\u624D\u80FD\u591F\u786E\u4FDD\u83B7\u53D6\u5230\u7F13\u5B58\u6570\u636E\u3002</p><p>\u800C\u5BF9\u4E8E <code>@delon/cache</code> \u800C\u8A00\uFF0C\u4F60\u65E0\u987B <code>set</code> \u65B9\u6CD5\uFF0C\u76F4\u63A5\u4F7F\u7528 <code>get</code> \u83B7\u53D6\u5230\u5355\u4F4D\u5B57\u5178\uFF0C\u56E0\u4E3A\u6211\u4EEC\u6709\u4E00\u79CD<strong>\u7EA6\u5B9A</strong>\uFF0C\u5F53\u7F13\u5B58\u4E0D\u5B58\u5728\u900F\u8FC7 <code>key</code> \u4F5C\u4E3AHTTP\u8BF7\u6C42\u6570\u636E\u7F13\u5B58\u540E\u518D\u8FD4\u56DE\u3002</p><p>\u7F13\u5B58\u7684\u83B7\u53D6\u4E0E\u8BBE\u7F6E\u90FD\u662F\u901A\u8FC7 <a href="/cache/service" data-url="/cache/service">CacheService</a> \u6765\u64CD\u4F5C\uFF0C\u4F60\u53EA\u9700\u8981\u5C06 <code>CacheService</code> \u5BFC\u5165\u5BF9\u5E94\u7684\u7C7B\u5F53\u4E2D\u5373\u53EF\u3002</p><h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p><strong>\u5B89\u88C5</strong></p><pre class="hljs language-bash"><code>npm i -S @delon/cache</code></pre><h3 id="\u53C2\u6570"><a class="lake-link"><i data-anchor="\u53C2\u6570"></i></a>\u53C2\u6570</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[mode]</code></td><td><code>promise,none</code></td><td><code>promise</code></td><td>\u7F13\u5B58\u6A21\u5F0F\uFF1B<code>promise</code> \u7EA6\u5B9A\u6A21\u5F0F\uFF0C\u5141\u8BB8 <code>key</code> \u4F5C\u4E3A http \u83B7\u53D6\u6570\u636E\uFF1B<code>none</code> \u6B63\u5E38\u6A21\u5F0F</td><td>\u2705</td></tr><tr><td><code>[reName]</code></td><td><code>string</code></td><td>-</td><td>\u91CD\u547D\u540D\u8FD4\u56DE\u53C2\u6570\uFF0C\u4F8B\u5982\uFF1A<br> <code>null</code> \u8FD4\u56DE\u4F53\u4E3A\u5185\u5BB9<br><code>list</code> \u8FD4\u56DE\u4F53\u5E94 <code>{ list: [] }</code><br><code>result.list</code> \u8FD4\u56DE\u4F53\u5E94 <code>{ result: { list: [] } }</code></td><td>\u2705</td></tr><tr><td><code>[expire]</code></td><td><code>number</code></td><td>-</td><td>\u8BBE\u7F6E\u9ED8\u8BA4\u8FC7\u671F\u65F6\u95F4\u503C\uFF08\u5355\u4F4D\uFF1A\u79D2\uFF09</td><td>\u2705</td></tr><tr><td><code>[prefix]</code></td><td><code>string</code></td><td>-</td><td>\u6301\u4E45\u5316\u6570\u636E\u952E\u503C\u524D\u7F00</td><td>\u2705</td></tr><tr><td><code>[meta_key]</code></td><td><code>string</code></td><td><code>__cache_meta</code></td><td>\u6301\u4E45\u5316\u6570\u636E\u5143\u6570\u636E\u5B58\u50A8\u952E\u540D</td><td>\u2705</td></tr><tr><td><code>[request]</code></td><td><code>(key: string) => Observable&lt;unknown></code></td><td>-</td><td>\u81EA\u5B9A\u4E49\u8BF7\u6C42\u4F53</td><td>\u2705</td></tr></tbody></table><blockquote><p>\u53EF\u4EE5\u901A\u8FC7<a href="/docs/global-config" data-url="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\u8986\u76D6\u5B83\u4EEC\u3002</p></blockquote></section>`,meta:{order:1,title:"\u5F00\u59CB\u4F7F\u7528",type:"Documents"},toc:[{id:"\u5199\u5728\u524D\u9762",title:"\u5199\u5728\u524D\u9762",h:2},{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528",h:2,children:[{id:"\u53C2\u6570",title:"\u53C2\u6570",h:3}]}]}},demo:!0};codes=[{id:"cache-getting-started-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { JsonPipe } from '@angular/common';
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
}`,lang:"ts",componentName:"CacheGettingStartedSimpleComponent",point:0,name:"simple",urls:"packages/cache/docs/demo/simple.md",type:"demo"}];static \u0275fac=function(n){return new(n||c)};static \u0275cmp=p({type:c,selectors:[["app-cache-getting-started"]],hostVars:2,hostBindings:function(n,i){n&2&&v("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(n,i){n&1&&(o(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),o(4,"code-box",3),t(5,`
          `),g(6,"cache-getting-started-simple"),t(7,`
        `),r(),t(8,`
      `),r()()()),n&2&&(m("codes",i.codes)("item",i.item),l(),m("nzGutter",16),l(3),m("item",i.codes[0]),y("id",i.codes[0].id))},dependencies:[T,G,D,E,B],encapsulation:2})};var R=class c{constructor(e,n){this.srv=e;this.msg=n}value;key="demo";notify$;get newValue(){return+new Date}getByHttp(){this.srv.get("https://randomuser.me/api/?results=1").subscribe(e=>{this.value=e})}registerNotify(){this.notify$&&this.notify$.unsubscribe(),this.notify$=this.srv.notify(this.key).subscribe(e=>{if(e==null){this.msg.success("register success");return}this.msg.warning(`"${this.key}" new status: ${e.type}`)})}unRegisterNotify(){this.srv.cancelNotify(this.key)}ngOnDestroy(){this.notify$&&this.notify$.unsubscribe()}static \u0275fac=function(n){return new(n||c)(d(u),d(w))};static \u0275cmp=p({type:c,selectors:[["cache-interceptor-simple"]],decls:35,vars:3,consts:[[1,"pt-sm"],["nz-button","",3,"click"]],template:function(n,i){n&1&&(t(0,`
    `),o(1,"p"),t(2),C(3,"json"),r(),t(4,`
    `),o(5,"div",0),t(6,`
      Basic:
      `),o(7,"button",1),a("click",function(){return i.srv.set(i.key,i.newValue)}),t(8,"Set"),r(),t(9,`
      `),o(10,"button",1),a("click",function(){return i.value=i.srv.getNone(i.key)}),t(11,"Get"),r(),t(12,`
      `),o(13,"button",1),a("click",function(){return i.srv.remove(i.key)}),t(14,"Remove"),r(),t(15,`
      `),o(16,"button",1),a("click",function(){return i.srv.clear()}),t(17,"Clear"),r(),t(18,`
    `),r(),t(19,`
    `),o(20,"div",0),t(21,`
      Key is valid request:
      `),o(22,"button",1),a("click",function(){return i.getByHttp()}),t(23,"Get"),r(),t(24,`
    `),r(),t(25,`
    `),o(26,"div",0),t(27,`
      Notify:
      `),o(28,"button",1),a("click",function(){return i.registerNotify()}),t(29,"Register"),r(),t(30,`
      `),o(31,"button",1),a("click",function(){return i.unRegisterNotify()}),t(32,"UnRegister"),r(),t(33,`
    `),r(),t(34,`
  `)),n&2&&(l(2),b("value: ",S(3,1,i.value),""))},dependencies:[N,z,_,k,x],encapsulation:2})};var H=class c{item={cols:1,urls:{"zh-CN":"packages/cache/docs/interceptor.md"},content:{"zh-CN":{content:'<section class="markdown"><h1 id="\u5199\u5728\u524D\u9762">\u5199\u5728\u524D\u9762</h1><p>\u642D\u914D <code>httpCacheInterceptor</code> Http \u62E6\u622A\u5668\uFF0C\u53EF\u4EE5\u5C06\u7F13\u5B58\u5E94\u7528\u5230 Http \u8BF7\u6C42\u5F53\u4E2D\u3002\u5B83\u53EA\u6709\u51E0\u4E2A\u7279\u5F81\uFF1A</p><ul><li><p>\u652F\u6301\u7F13\u5B58\u8FC7\u671F\u65F6\u95F4</p></li><li><p>\u652F\u6301\u81EA\u5B9A\u4E49\u7F13\u5B58 KEY</p></li><li><p>\u652F\u6301\u4EFB\u4F55 Http \u8BF7\u6C42\u3001\u4EFB\u4F55\u6570\u636E\u683C\u5F0F</p></li><li><p>\u7B26\u5408 Http \u7F13\u5B58\u54CD\u5E94\u6807\u51C6 <code>Cache-Control</code></p></li></ul><h1 id="\u5982\u4F55\u4F7F\u7528">\u5982\u4F55\u4F7F\u7528</h1><p>\u5728 <code>withInterceptors</code> \u4E2D\u5F15\u5165 <code>httpCacheInterceptor</code>\uFF1A</p><pre class="hljs language-ts"><code>provideHttpClient(withInterceptors([httpCacheInterceptor]))</code></pre></section>',meta:{order:3,title:"Interceptor",type:"Documents"},toc:[{id:"\u5199\u5728\u524D\u9762",title:"\u5199\u5728\u524D\u9762",h:1},{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528",h:1}]}},demo:!0};codes=[{id:"cache-interceptor-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { JsonPipe } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CacheService } from '@delon/cache';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'cache-interceptor-simple',
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
  imports: [JsonPipe, NzButtonModule]
})
export class CacheInterceptorSimpleComponent implements OnDestroy {
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
}`,lang:"ts",componentName:"CacheInterceptorSimpleComponent",point:0,name:"simple",urls:"packages/cache/docs/demo/simple.md",type:"demo"}];static \u0275fac=function(n){return new(n||c)};static \u0275cmp=p({type:c,selectors:[["app-cache-interceptor"]],hostVars:2,hostBindings:function(n,i){n&2&&v("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(n,i){n&1&&(o(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),o(4,"code-box",3),t(5,`
          `),g(6,"cache-interceptor-simple"),t(7,`
        `),r(),t(8,`
      `),r()()()),n&2&&(m("codes",i.codes)("item",i.item),l(),m("nzGutter",16),l(3),m("item",i.codes[0]),y("id",i.codes[0].id))},dependencies:[T,R,D,E,B],encapsulation:2})};var P=class c{constructor(e,n){this.srv=e;this.msg=n}value;key="demo";notify$;get newValue(){return+new Date}getByHttp(){this.srv.get("https://randomuser.me/api/?results=1").subscribe(e=>{this.value=e})}registerNotify(){this.notify$&&this.notify$.unsubscribe(),this.notify$=this.srv.notify(this.key).subscribe(e=>{if(e==null){this.msg.success("register success");return}this.msg.warning(`"${this.key}" new status: ${e.type}`)})}unRegisterNotify(){this.srv.cancelNotify(this.key)}ngOnDestroy(){this.notify$&&this.notify$.unsubscribe()}static \u0275fac=function(n){return new(n||c)(d(u),d(w))};static \u0275cmp=p({type:c,selectors:[["cache-service-simple"]],decls:35,vars:3,consts:[[1,"pt-sm"],["nz-button","",3,"click"]],template:function(n,i){n&1&&(t(0,`
    `),o(1,"p"),t(2),C(3,"json"),r(),t(4,`
    `),o(5,"div",0),t(6,`
      Basic:
      `),o(7,"button",1),a("click",function(){return i.srv.set(i.key,i.newValue)}),t(8,"Set"),r(),t(9,`
      `),o(10,"button",1),a("click",function(){return i.value=i.srv.getNone(i.key)}),t(11,"Get"),r(),t(12,`
      `),o(13,"button",1),a("click",function(){return i.srv.remove(i.key)}),t(14,"Remove"),r(),t(15,`
      `),o(16,"button",1),a("click",function(){return i.srv.clear()}),t(17,"Clear"),r(),t(18,`
    `),r(),t(19,`
    `),o(20,"div",0),t(21,`
      Key is valid request:
      `),o(22,"button",1),a("click",function(){return i.getByHttp()}),t(23,"Get"),r(),t(24,`
    `),r(),t(25,`
    `),o(26,"div",0),t(27,`
      Notify:
      `),o(28,"button",1),a("click",function(){return i.registerNotify()}),t(29,"Register"),r(),t(30,`
      `),o(31,"button",1),a("click",function(){return i.unRegisterNotify()}),t(32,"UnRegister"),r(),t(33,`
    `),r(),t(34,`
  `)),n&2&&(l(2),b("value: ",S(3,1,i.value),""))},dependencies:[N,z,_,k,x],encapsulation:2})};var j=class c{item={cols:1,urls:{"zh-CN":"packages/cache/docs/service.md"},content:{"zh-CN":{content:'<section class="markdown"></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="set"><a class="lake-link"><i data-anchor="set"></i></a>set</h3><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>key</code></td><td><code>string</code></td><td>\u7F13\u5B58\u552F\u4E00\u6807\u8BC6\u7B26</td></tr><tr><td><code>data</code></td><td><code>any | Observable&lt;any></code></td><td>\u7F13\u5B58\u6570\u636E\u6E90\uFF0C\u6570\u636E\u6E90\u4E3A <code>Observable</code> \u65F6\uFF0C\u4F9D\u7136\u8FD4\u56DE <code>Observable</code>\uFF0C\u5426\u5219\u8FD4\u56DE <code>void</code></td></tr><tr><td><code>options</code></td><td><code>{ type?: 'm' | 's', expire?: number, emitNotify?: boolean }</code></td><td><code>type</code> \u5B58\u50A8\u7C7B\u578B\uFF0C'm' \u8868\u793A\u5185\u5B58\uFF0C's' \u8868\u793A\u6301\u4E45<br><code>expire</code> \u8FC7\u671F\u65F6\u95F4\uFF0C\u5355\u4F4D <code>\u79D2</code></td></tr></tbody></table><h3 id="get"><a class="lake-link"><i data-anchor="get"></i></a>get</h3><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>key</code></td><td><code>string</code></td><td>\u7F13\u5B58\u552F\u4E00\u6807\u8BC6\u7B26</td></tr><tr><td><code>options</code></td><td><code>{ mode?: 'promise' | 'none', type?: 'm' | 's', expire?: number, emitNotify?: boolean }</code></td><td><code>mode</code> \u6307\u5B9A\u83B7\u53D6\u7F13\u5B58\u7684\u6A21\u5F0F\uFF1A<br>1\u3001<code>promise</code> \u8868\u793A\u82E5\u4E0D\u5B58 <code>key</code> \u5219\u628A <code>key</code> \u5F53URL\u53D1\u8D77\u8BF7\u6C42\u5E76\u7F13\u5B58\u4E14\u8FD4\u56DE Observable<br>2\u3001<code>none</code> \u8868\u793A\u76F4\u63A5\u8FD4\u56DE\u6570\u636E\u82E5KEY\u4E0D\u5B58\u5728\u5219\u76F4\u63A5\u8FD4\u56DE <code>null</code><br><br><code>type</code> \u5B58\u50A8\u7C7B\u578B\uFF0C'm' \u8868\u793A\u5185\u5B58\uFF0C's' \u8868\u793A\u6301\u4E45<br><code>expire</code> \u8FC7\u671F\u65F6\u95F4\uFF0C\u5355\u4F4D <code>\u79D2</code></td></tr></tbody></table><h3 id="getNone"><a class="lake-link"><i data-anchor="getNone"></i></a>getNone</h3><p>\u83B7\u53D6\u7F13\u5B58\u6570\u636E\uFF0C\u82E5 <code>key</code> \u4E0D\u5B58\u5728\u6216\u5DF2\u8FC7\u671F\u5219\u8FD4\u56DE null\u3002</p><h3 id="tryGet"><a class="lake-link"><i data-anchor="tryGet"></i></a>tryGet</h3><p>\u83B7\u53D6\u7F13\u5B58\uFF0C\u82E5\u4E0D\u5B58\u5728\u5219\u8BBE\u7F6E\u7F13\u5B58\u5BF9\u8C61\uFF0C\u53C2\u6570\u7B49\u540C <code>set()</code>\u3002</p><h3 id="has"><a class="lake-link"><i data-anchor="has"></i></a>has</h3><p>\u662F\u5426\u7F13\u5B58 <code>key</code>\u3002</p><h3 id="remove"><a class="lake-link"><i data-anchor="remove"></i></a>remove</h3><p>\u79FB\u9664\u7F13\u5B58 <code>key</code>\u3002</p><h3 id="clear"><a class="lake-link"><i data-anchor="clear"></i></a>clear</h3><p>\u6E05\u7A7A\u6240\u6709\u7F13\u5B58\u3002</p><h3 id="notify"><a class="lake-link"><i data-anchor="notify"></i></a>notify</h3><p><code>key</code> \u76D1\u542C\uFF0C\u5F53 <code>key</code> \u53D8\u66F4\u3001\u8FC7\u671F\u3001\u79FB\u9664\u65F6\u901A\u77E5\uFF0C\u6CE8\u610F\u4EE5\u4E0B\u82E5\u5E72\u7EC6\u8282\uFF1A</p><ul><li><p>\u8C03\u7528\u540E\u9664\u518D\u6B21\u8C03\u7528 <code>cancelNotify</code> \u5426\u5219\u6C38\u8FDC\u4E0D\u8FC7\u671F</p></li><li><p>\u76D1\u542C\u5668\u6BCF <code>freq</code> (\u9ED8\u8BA4\uFF1A3\u79D2) \u6267\u884C\u4E00\u6B21\u8FC7\u671F\u68C0\u67E5</p></li></ul><h3 id="cancelNotify"><a class="lake-link"><i data-anchor="cancelNotify"></i></a>cancelNotify</h3><p>\u53D6\u6D88 <code>key</code> \u76D1\u542C</p><h3 id="hasNotify"><a class="lake-link"><i data-anchor="hasNotify"></i></a>hasNotify</h3><p><code>key</code> \u662F\u5426\u5DF2\u7ECF\u76D1\u542C</p><h3 id="clearNotify"><a class="lake-link"><i data-anchor="clearNotify"></i></a>clearNotify</h3><p>\u6E05\u7A7A\u6240\u6709 <code>key</code> \u7684\u76D1\u542C</p><h3 id="freq"><a class="lake-link"><i data-anchor="freq"></i></a>freq</h3><p>\u8BBE\u7F6E\u76D1\u542C\u9891\u7387\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2\u4E14\u6700\u4F4E <code>20ms</code>\uFF0C\u9ED8\u8BA4\uFF1A<code>3000ms</code>\u3002</p><h2 id="get\u548CtryGet\u7684\u533A\u522B"><a class="lake-link"><i data-anchor="get\u548CtryGet\u7684\u533A\u522B"></i></a>get\u548CtryGet\u7684\u533A\u522B<label class="api-type-label directive">directive</label></h2><p>\u672C\u8D28\u90FD\u662F\u83B7\u53D6\u5E76\u8FD4\u56DE\u7F13\u5B58\u6570\u636E\uFF0C<code>get</code> \u76F8\u6BD4 <code>tryGet</code> \u66F4\u7B80\u5316\uFF0C\u524D\u8005\u6309KEY\u5373\u662FURL\u7EA6\u5B9A\u7684\u98CE\u683C\uFF0C\u540E\u8005\u9700\u6307\u5B9A\u6570\u636E\u6E90\u5BF9\u8C61\u3002</p><h2 id="\u9177\u64CD\u4F5C"><a class="lake-link"><i data-anchor="\u9177\u64CD\u4F5C"></i></a>\u9177\u64CD\u4F5C</h2><h3 id="async\u7BA1\u9053"><a class="lake-link"><i data-anchor="async\u7BA1\u9053"></i></a>async\u7BA1\u9053</h3><p>RxJS \u548C <code>async</code> \u7BA1\u9053\u4E8C\u8005\u7684\u914D\u5408\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u975E\u5E38\u53CB\u597D\u7684\u4F7F\u7528\u7F13\u5B58\u6570\u636E\uFF0C\u4F8B\u5982\uFF1A</p><pre class="hljs language-ts"><code>@Component({
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
  );</code></pre>`,meta:{order:2,title:"CacheService",type:"Documents"},toc:[{id:"API",title:"API",h:2,children:[{id:"set",title:"set()",h:3},{id:"get",title:"get()",h:3},{id:"getNone",title:"getNone()",h:3},{id:"tryGet",title:"tryGet()",h:3},{id:"has",title:"has()",h:3},{id:"remove",title:"remove()",h:3},{id:"clear",title:"clear()",h:3},{id:"notify",title:"notify()",h:3},{id:"cancelNotify",title:"cancelNotify()",h:3},{id:"hasNotify",title:"hasNotify()",h:3},{id:"clearNotify",title:"clearNotify()",h:3},{id:"freq",title:"freq()",h:3}]},{id:"get\u548CtryGet\u7684\u533A\u522B",title:"get \u548C tryGet \u7684\u533A\u522B",h:2},{id:"\u9177\u64CD\u4F5C",title:"\u9177\u64CD\u4F5C",h:2,children:[{id:"async\u7BA1\u9053",title:"async \u7BA1\u9053",h:3},{id:"\u7F13\u5B58\u4E0E\u8BF7\u6C42",title:"\u7F13\u5B58\u4E0E\u8BF7\u6C42",h:3}]}]}},demo:!0};codes=[{id:"cache-service-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { JsonPipe } from '@angular/common';
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
}`,lang:"ts",componentName:"CacheServiceSimpleComponent",point:0,name:"simple",urls:"packages/cache/docs/demo/simple.md",type:"demo"}];static \u0275fac=function(n){return new(n||c)};static \u0275cmp=p({type:c,selectors:[["app-cache-service"]],hostVars:2,hostBindings:function(n,i){n&2&&v("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(n,i){n&1&&(o(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),o(4,"code-box",3),t(5,`
          `),g(6,"cache-service-simple"),t(7,`
        `),r(),t(8,`
      `),r()()()),n&2&&(m("codes",i.codes)("item",i.item),l(),m("nzGutter",16),l(3),m("item",i.codes[0]),y("id",i.codes[0].id))},dependencies:[T,P,D,E,B],encapsulation:2})};var yt=[{path:"",component:ne,children:[{path:"",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"getting-started",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"getting-started/:lang",component:$},{path:"interceptor",redirectTo:"interceptor/zh",pathMatch:"full"},{path:"interceptor/:lang",component:H},{path:"service",redirectTo:"service/zh",pathMatch:"full"},{path:"service/:lang",component:j}]}];export{yt as routes};
